## Google Pay™

Botim Money supports Google Pay™ on the hosted paypage (`PAYPAGE`) and on Direct Pay (`DIRECTPAY`). Google Pay is always written as two words. Google Pay is a trademark of Google LLC.

When you display the Google Pay button or mark, follow the [Google Pay Web Brand Guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines).

Google Pay is not supported on `INAPP` or `EWALLET`.

> **Policy requirement:** Merchants who use Google Pay must adhere to the [Google Pay and Wallet API Acceptable Use Policy](https://payments.developers.google.com/terms/aup) and accept the [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

### Hosted checkout (`PAYPAGE`)

Google Pay must be enabled on your merchant profile by Botim Money Business. Once enabled, Botim Money's hosted paypage shows Google Pay as a payment method. You do not generate a Google Pay payload yourself.

1. Create the order with `paySceneCode` set to `PAYPAGE`.
2. Redirect the payer to the `tokenUrl` returned in `interActionParams`.
3. The payer selects Google Pay on the paypage and completes the payment.
4. Botim Money redirects the payer to your `redirectUrl` and sends the result to your `notifyUrl`.

### Direct Pay (`DIRECTPAY`)

Google Pay on Direct Pay is available only to merchants that are PCI-DSS compliant and integrated directly with Google Pay.

**Prerequisites**

- Sign up with Google and create your Google Pay merchant ID for the [Direct Pay](https://developers.google.com/pay/api/web/guides/tutorial) integration method.
- Google Pay must be enabled on your merchant profile by Botim Money Business.

**Integration model**

On Direct Pay, you decrypt the Google Pay token yourself. Botim Money is **not** your Google Pay payment gateway (`PAYMENT_GATEWAY` tokenization).

- You integrate directly with Google Pay, manage your own keys, and receive the **encrypted** token.
- You decrypt the token on your server with your private key. See [Payment data cryptography for merchants](https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography).
- You send the **decrypted** card data to Botim Money in Create Order. Sensitive fields are encrypted with a Botim Money public key before transmission (see "Encrypt the card fields").
- Botim Money does not hold your keys and does not accept the encrypted token.

Use this `tokenizationSpecification` in your Google Pay `PaymentMethod` object:

```javascript
const tokenizationSpecification = {
  type: 'DIRECT',
  parameters: {
    protocolVersion: 'ECv2',
    publicKey: '<your Base64-encoded public key>'
  }
};
```

The `gateway` and `gatewayMerchantId` parameters belong to `PAYMENT_GATEWAY` tokenization and do not apply to Direct Pay.

**Google Pay developer resources**

- [Google Pay Web developer documentation](https://developers.google.com/pay/api/web/)
- [Google Pay Web integration checklist](https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist)
- [Publish your integration for Web](https://developers.google.com/pay/api/web/guides/test-and-deploy/publish-your-integration)

**Supported configurations**

| Parameter | Botim Money support |
|---|---|
| `allowedAuthMethods` | Both. `PAN_ONLY`: the card number (FPAN) stored in the payer's Google account, with no device authentication. `CRYPTOGRAM_3DS`: a device token (DPAN) with a cryptogram, authenticated on the payer's device. |
| 3DS for `PAN_ONLY` | Botim Money returns redirect HTML in `threeDSecureDom` (in `interActionParams`). Render it in the payer's browser to start OTP authentication. |
| 3DS for `CRYPTOGRAM_3DS` | No redirect HTML is returned. |
| `allowedCardNetworks` | `VISA` and `MASTERCARD`. Pass exactly these values in `allowedCardNetworks`. Other card networks are not supported for Google Pay on Botim Money. |
| `billingAddressParameters` | Not required. Botim Money does not need a billing address to process the decrypted card data, and the Create Order request has no billing address fields. |

Use these card parameters in your Google Pay `PaymentMethod` object, together with the `tokenizationSpecification` above:

```javascript
const cardPaymentMethod = {
  type: 'CARD',
  parameters: {
    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
    allowedCardNetworks: ['VISA', 'MASTERCARD']
    // billingAddressRequired and billingAddressParameters are not needed
  },
  tokenizationSpecification: tokenizationSpecification
};
```

**Submit the decrypted payment**

1. Take the encrypted token from `paymentData.paymentMethodData.tokenizationData.token` in the Google Pay response.
2. Decrypt it on your server. The card fields are in `paymentMethodDetails`.
3. Encrypt the sensitive fields (see below) and send them in `paySceneParams` of Create Order.
4. Sign the request body as described in the signature section of this page, and send the result in the `sign` header.

| Create Order field (`paySceneParams`) | Source | Encrypted? |
|---|---|---|
| `cardNum` | `pan` (DPAN for `CRYPTOGRAM_3DS`, FPAN for `PAN_ONLY`) | Yes |
| `holderName` | Cardholder name | Yes |
| `cardExpYear` | `expirationYear` | Yes |
| `cardExpMonth` | `expirationMonth` | Yes |
| `payCrypt` | `cryptogram` (`CRYPTOGRAM_3DS` only) | Yes |
| `eci` | `eciIndicator` (`CRYPTOGRAM_3DS` only) | No |
| `cryptoFmt` | Cryptogram format, `3DSECURE` (`CRYPTOGRAM_3DS` only) | No |
| `customerId` | Your unique identifier for the payer | No |

**Encrypt the card fields**

Encrypt each sensitive field separately with the RSA public key issued by Botim Money:

- RSA with PKCS#1 v1.5 padding.
- Encode the plain text as UTF-8. Each field must not exceed 200 bytes.
- Encode the encrypted result as Base64.

```csharp
public string RSAEncryption(string plainText, string publicKeyBase64)
{
    string base64Key = publicKeyBase64.Replace("-----BEGIN PUBLIC KEY-----", "")
                                      .Replace("-----END PUBLIC KEY-----", "")
                                      .Replace("\r\n", "").Trim();
    byte[] keyBytes = Convert.FromBase64String(base64Key);
    using (RSA rsa = RSA.Create())
    {
        rsa.ImportSubjectPublicKeyInfo(keyBytes, out _);
        byte[] plainBytes = Encoding.UTF8.GetBytes(plainText);
        if (plainBytes.Length > 200)
            throw new ArgumentException("Plain text size exceeds 200 bytes.");
        byte[] encryptedBytes = rsa.Encrypt(plainBytes, RSAEncryptionPadding.Pkcs1);
        return Convert.ToBase64String(encryptedBytes);
    }
}
```

**Example request**

```http
POST https://api.payby.com/sgs/api/acquire2/placeOrder
Content-Type: application/json
Content-Language: en
sign: <RSA_SIGNATURE_BASE64_STRING>
Partner-Id: <your Partner-Id>

{
  "requestTime": "1752129406647",
  "bizContent": {
    "merchantOrderNo": "25d3a20a-93d0-48f9-96f6-de03d267d2f1",
    "subject": "Your subject",
    "totalAmount": { "currency": "AED", "amount": 1.01 },
    "paySceneCode": "DIRECTPAY",
    "paySceneParams": {
      "type": "DEVICE_PAY",
      "devicePayType": "GOOGLE_PAY",
      "redirectUrl": "https://example.com/returnUrl?OrderId=25d3a20a-93d0-48f9-96f6-de03d267d2f1",
      "cardNum": "<RSA-encrypted, Base64>",
      "holderName": "<RSA-encrypted, Base64>",
      "cardExpYear": "<RSA-encrypted, Base64>",
      "cardExpMonth": "<RSA-encrypted, Base64>",
      "payCrypt": "<RSA-encrypted, Base64>",
      "eci": "05",
      "cryptoFmt": "3DSECURE",
      "email": "customer@example.com",
      "platformType": "WEB",
      "threeDSecure": "True",
      "customerId": "customer_id",
      "realIP": "192.168.15.200",
      "saveCard": "False"
    },
    "notifyUrl": "https://example.com/notifyUrl"
  }
}
```

**Handle the response**

- **`PAN_ONLY` (FPAN):** the response contains redirect HTML in `interActionParams.threeDSecureDom`. Render it in the payer's browser to start OTP authentication. After the OTP, the payer is redirected to your `redirectUrl`.
- **`CRYPTOGRAM_3DS` (DPAN):** the response contains no redirect HTML.

Include `OrderId` as a query parameter in `redirectUrl`, so you can identify the transaction. After the redirect, call the Retrieve Order API to get the result and show the payer whether the payment was approved or declined.

Use the UAT URL while testing: `https://uat.test2pay.com/sgs/api/acquire2/placeOrder`.

The decrypted payload contains card data. Handle it in line with PCI-DSS and do not log it.
