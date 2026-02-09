**DIRECTPAY**

---


**<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case1: First time payment</font>

- **cardNo** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The primary account number (PAN) for the payment card, is the card identifier found on payment cards. The card number needs to be encrypted when passed.

  <br/>

- **holderName** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card holder's name as it appears on the card. The holder name needs to be encrypted when passed.

  <br/>

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. The CVV needs to be encrypted when passed.

  <br/>

- **expYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two-digit number, representing last two digits of the card expiry year.

  Example value: 22

  <br/>

- **expMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two-digit number, representing the card expiry month.

  Example value: 01

  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span>

  Cardholder's email. After the payment is successful, Botim Money will send the billing information to this email address.

  Example value: customer@payment.com

  <br/>

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5 `. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

  <br/>

- **threeDSecure** <span style={{color:" #7d8793"}}>String</span>

  The merchant decides whether the transaction requires 3DS verification. If true, Botim Money will return the verification link; if false, Botim Money will debit the payment directly after submitting the payment request. The default is False.

  Notice that, if Botim Money's risk control system identifies that the transaction requires 3DS verification, even if the merchant passes false, the payer will be required for 3DS verification.

  Default value: False.

  <br/>

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The payer's id in the merchant's system.

  <br/>

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

  <br/>

- **saveCard** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The payer's card information can be saved for future use. If true, Botim Money will return the ID of the card, so that the card ID can be passed directly instead of the card information when another transaction is made. A customer id can save multiple cards in Botim Money.

  Default value: False.

  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **source** <span style={{color:" #7d8793"}}>String</span>

  The source or origin of the payment request.

  <br/>

- **agreementVersion** <span style={{color:" #7d8793"}}>String</span>

  The version of the payment agreement or protocol being used.

  <br/>

- **agreementSign** <span style={{color:" #7d8793"}}>String</span>

  The signature for the payment agreement to ensure authenticity and integrity.

  <br/>

- **protocolNotifyUrl** <span style={{color:" #7d8793"}}>String</span>

  The URL where protocol-related notifications will be sent.

  <br/>


**<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case2: Using a saved card</font>

- **cardToken** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  A Token representing this information is returned to your server to use to create a charge or create an authorize or to save the card.

  <br/>

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. The CVV needs to be encrypted when passed.

  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span>

  Cardholder's email. After the payment is successful, Botim Money will send the billing information to this email address.

  Example value: customer@payment.com

  <br/>

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5`. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

  <br/>

- **threeDSecure** <span style={{color:" #7d8793"}}>String</span>

  The merchant decides whether the transaction requires 3DS verification. If true, Botim Money will return the verification link; if false, Botim Money will debit the payment directly after submitting the payment request. The default is False.

  Notice that, if Botim Money's risk control system identifies that the transaction requires 3DS verification, even if the merchant passes false, the payer will be required for 3DS verification.

  Default value: False.

  <br/>

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **source** <span style={{color:" #7d8793"}}>String</span>

  The source or origin of the payment request.

  <br/>

- **agreementVersion** <span style={{color:" #7d8793"}}>String</span>

  The version of the payment agreement or protocol being used.

  <br/>

- **agreementSign** <span style={{color:" #7d8793"}}>String</span>

  The signature for the payment agreement to ensure authenticity and integrity.

  <br/>

- **protocolNotifyUrl** <span style={{color:" #7d8793"}}>String</span>

  The URL where protocol-related notifications will be sent.

  <br/>

**<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case3: Installment payment</font>

- **type** <span style={{color:" #7d8793"}}>String</span>

  The type of payment method for installment payment.

  <br/>

- **uniqueId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  A unique identifier for the installment payment transaction.

  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5`. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

  <br/>

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

  <br/>

**<font color="#333333"> PayScene parameters</font>** <font color=" #f19938">Case4: Device payment</font>

- **type** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The type of payment method for device payment.

  <br/>

- **devicePayType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The specific type of device payment being used.

  <br/>

- **cardNum** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The primary account number (PAN) for the payment card, is the card identifier found on payment cards. The card number needs to be encrypted when passed.

  <br/>

- **holderName** <span style={{color:" #7d8793"}}>String</span>

  The card holder's name as it appears on the card. The holder name needs to be encrypted when passed.

  <br/>

- **cardExpYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two-digit number, representing last two digits of the card expiry year.

  Example value: 22

  <br/>

- **cardExpMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Two-digit number, representing the card expiry month.

  Example value: 01

  <br/>

- **cryptoFmt** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The cryptographic format used for securing the payment data.

  <br/>

- **payCrypt** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The encrypted payment cryptogram generated by the device for secure transaction processing.

  <br/>

- **eci** <span style={{color:" #7d8793"}}>String</span>

  Electronic Commerce Indicator. A value returned from the card network to indicate the security level of the transaction.

  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span>

  Cardholder's email. After the payment is successful, Botim Money will send the billing information to this email address.

  Example value: customer@payment.com

  <br/>

- **platformType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  The platform the payer is currently using. The possible values are:

  - `H5`. Mobile website.
  - `WEB`. PC website.
  - `iOS`. Devices based on iOS system.
  - `Android`. Devices based on Android system.

  <br/>

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The payer's id in the merchant's system.

  <br/>

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The network IP address of the payer at the time of the transaction.

  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Link that the payer will be redirected once the payer finalizes payments.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **source** <span style={{color:" #7d8793"}}>String</span>

  The source or origin of the device payment request.

  <br/>

- **agreementVersion** <span style={{color:" #7d8793"}}>String</span>

  The version of the payment agreement or protocol being used.

  <br/>

- **agreementSign** <span style={{color:" #7d8793"}}>String</span>

  The signature for the payment agreement to ensure authenticity and integrity.

  <br/>

- **protocolNotifyUrl** <span style={{color:" #7d8793"}}>String</span>

  The URL where protocol-related notifications will be sent.

  <br/>