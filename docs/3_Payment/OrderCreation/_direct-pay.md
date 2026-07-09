**DIRECTPAY**

---

**<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case1: First time payment</font>

- **cardNo** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The primary account number (PAN) for the payment card, is the card identifier found on payment cards. The card number needs to be encrypted when passed.


- **holderName** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card holder's name as it appears on the card. The holder name needs to be encrypted when passed.

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. The CVV needs to be encrypted when passed.

- **expYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two-digit number, representing last two digits of the card expiry year.

  Example value: 22

- **expMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two-digit number, representing the card expiry month.

  Example value: 01

- **email** <span style={{color:" #7d8793"}}>String</span>

  Cardholder's email. After the payment is successful, Botim Money will send the billing information to this email address.

  Example value: customer@payment.com

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5 `. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

- **threeDSecure** <span style={{color:" #7d8793"}}>String</span>

  The merchant decides whether the transaction requires 3DS verification. If true, Botim Money will return the verification link; if false, Botim Money will debit the payment directly after submitting the payment request. The default is False.

  Notice that, if Botim Money's risk control system identifies that the transaction requires 3DS verification, even if the merchant passes false, the payer will be required for 3DS verification.

  Default value: False.

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The payer's id in the merchant's system.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

- **saveCard** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The payer's card information can be saved for future use. If true, Botim Money will return the ID of the card, so that the card ID can be passed directly instead of the card information when another transaction is made. A customer id can save multiple cards in Botim Money.

  Default value: False.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

- **source** <span style={{color:" #7d8793"}}>String</span>

  The source or origin of the payment request.

- **agreementVersion** <span style={{color:" #7d8793"}}>String</span>

  The version of the payment agreement or protocol being used.

- **agreementSign** <span style={{color:" #7d8793"}}>String</span>

  The signature for the payment agreement to ensure authenticity and integrity.

- **protocolNotifyUrl** <span style={{color:" #7d8793"}}>String</span>

  The URL where protocol-related notifications will be sent.

  
---

**<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case2: Using a saved card</font>

- **cardToken** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  A Token representing this information is returned to your server to use to create a charge or create an authorize or to save the card.

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. The CVV needs to be encrypted when passed.

- **email** <span style={{color:" #7d8793"}}>String</span>

  Cardholder's email. After the payment is successful, Botim Money will send the billing information to this email address.

  Example value: customer@payment.com

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5`. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

- **threeDSecure** <span style={{color:" #7d8793"}}>String</span>

  The merchant decides whether the transaction requires 3DS verification. If true, Botim Money will return the verification link; if false, Botim Money will debit the payment directly after submitting the payment request. The default is False.

  Notice that, if Botim Money's risk control system identifies that the transaction requires 3DS verification, even if the merchant passes false, the payer will be required for 3DS verification.

  Default value: False.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

- **source** <span style={{color:" #7d8793"}}>String</span>

  The source or origin of the payment request.

- **agreementVersion** <span style={{color:" #7d8793"}}>String</span>

  The version of the payment agreement or protocol being used.

- **agreementSign** <span style={{color:" #7d8793"}}>String</span>

  The signature for the payment agreement to ensure authenticity and integrity.

- **protocolNotifyUrl** <span style={{color:" #7d8793"}}>String</span>

  The URL where protocol-related notifications will be sent.

  
---

**<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case3: Installment payment</font>

- **type** <span style={{color:" #7d8793"}}>String</span>

  The type of payment method for installment payment.

- **uniqueId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  A unique identifier for the installment payment transaction.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5`. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

---

**<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case4: Device payment</font>

- **type** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The type of payment method for device payment.

- **devicePayType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  Device pay type. When type is `DEVICE_PAY`, the possible values are:

  - `APPLE_PAY`. Apple Pay using device-based credentials.
  - `GOOGLE_PAY`. Google Pay using device-based credentials.
  - `SAMSUNG_PAY`. Samsung Pay using device-based credentials.
  - `APPLE_PAY_TOKEN`. Apple Pay using a payment token.
  - `GOOGLE_PAY_TOKEN`. Google Pay using a payment token.

- **paymentToken** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span> The actual payment token returned by Apple Pay/Google Pay, transmitted in encrypted form. Required when `devicePayType` is `APPLE_PAY_TOKEN` or `GOOGLE_PAY_TOKEN`.

- **decryptType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span> Decryption type. Valid values are `GATEWAY_DECRYPT` and `MERCHANT_DECRYPT`. Required when `devicePayType` is `APPLE_PAY_TOKEN` or `GOOGLE_PAY_TOKEN`.

- **cardNoSuffix** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Last 4 digits of the card number. Required when `devicePayType` is `APPLE_PAY_TOKEN` or `GOOGLE_PAY_TOKEN`.

- **cardNum** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The primary account number (PAN) for the payment card, is the card identifier found on payment cards. The card number needs to be encrypted when passed.

- **holderName** <span style={{color:" #7d8793"}}>String</span>

  The card holder's name as it appears on the card. The holder name needs to be encrypted when passed.

- **cardExpYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two-digit number, representing last two digits of the card expiry year.

  Example value: 22

- **cardExpMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two-digit number, representing the card expiry month.

  Example value: 01

- **cryptoFmt** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The cryptographic format used for securing the payment data.

- **payCrypt** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The encrypted payment cryptogram generated by the device for secure transaction processing.

- **eci** <span style={{color:" #7d8793"}}>String</span>

  Electronic Commerce Indicator. A value returned from the card network to indicate the security level of the transaction.

- **email** <span style={{color:" #7d8793"}}>String</span>

  Cardholder's email. After the payment is successful, Botim Money will send the billing information to this email address.

  Example value: customer@payment.com

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5`. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The payer's id in the merchant's system.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

- **source** <span style={{color:" #7d8793"}}>String</span>

  The source or origin of the device payment request.

- **agreementVersion** <span style={{color:" #7d8793"}}>String</span>

  The version of the payment agreement or protocol being used.

- **agreementSign** <span style={{color:" #7d8793"}}>String</span>

  The signature for the payment agreement to ensure authenticity and integrity.

- **protocolNotifyUrl** <span style={{color:" #7d8793"}}>String</span>

  The URL where protocol-related notifications will be sent.

  
