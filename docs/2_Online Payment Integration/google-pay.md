---
sidebar_position: 91
toc_max_heading_level: 6
---

# Google Pay™

Botim Money supports Google Pay™ on the hosted paypage. Google Pay is always written as two words. Google Pay is a trademark of Google LLC.

When you display the Google Pay button or mark, follow the [Google Pay Web Brand Guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines).

Google Pay is available on hosted paypage (`PAYPAGE`).

## Enable Google Pay on the Hosted Paypage

Google Pay product must be enabled on your merchant account. Once enabled, Botim Money's hosted paypage shows Google Pay as a payment method. You do not generate a Google Pay payload yourself.

1. Create the order with `paySceneCode` set to `PAYPAGE`.
2. Redirect the payer to the `tokenUrl` returned in `interactionParams`.
3. The payer selects Google Pay on the paypage and completes the payment.
4. Botim Money redirects the payer to your `redirectUrl` and sends the result to your `notifyUrl`.

> **Policy requirement**: Merchants who use Google Pay must adhere to the [Google Pay and Wallet API Acceptable Use Policy](https://payments.developers.google.com/terms/aup) and accept the [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

## Direct Pay (`DIRECTPAY`)

Google Pay on Direct Pay is available only to merchants that are PCI-DSS compliant and connected directly to Google Pay. You integrate with Google Pay yourself, decrypt the Google Pay token on your side, and send the decrypted token data to Botim Money in [Create Order](/docs/createorder). Botim Money does not receive the encrypted token.

## Google Pay Developer Resources

- [Google Pay Web developer documentation](https://developers.google.com/pay/api/web/)
- [Google Pay Web integration checklist](https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist)
- [Publish your integration for Web](https://developers.google.com/pay/api/web/guides/test-and-deploy/publish-your-integration)
