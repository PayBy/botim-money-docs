**PREAUTH**

Pre-authorization for first payment, saved card payment, or device payment.

---

**<font color="#333333">PayScene parameters</font>**

*First Payment*

---

- **cardNo** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card number for the payment.

- **holderName** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The name of the cardholder.

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card verification value (CVV) code.

- **expYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The expiration year of the card.

- **expMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The expiration month of the card.

- **email** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The email address of the customer.

- **platformType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The platform type for the payment.

- **threeDSecure** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The merchant decides whether the transaction requires 3DS verification.

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The unique identifier for the customer.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The real IP address of the customer.

- **saveCard** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Whether the payer's card information is saved for future use.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The URL to redirect after payment completion.

---

*Saved Card Payment*

- **cardToken** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The token representing the saved card.

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card verification value (CVV) code.

- **email** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The email address of the customer.

- **platformType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The platform type for the payment.

- **threeDSecure** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The merchant decides whether the transaction requires 3DS verification.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The real IP address of the customer.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The URL to redirect after payment completion.

---

*Device Payment*

- **type** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The type of device payment.

- **devicePayType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The specific device payment type.

- **cardNum** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card number for the payment.

- **holderName** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The name of the cardholder.

- **cardExpYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The expiration year of the card.

- **cardExpMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The expiration month of the card.

- **cryptoFmt** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The cryptographic format used for the payment.

- **payCrypt** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The encrypted payment data.

- **eci** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The Electronic Commerce Indicator (ECI) value.

- **email** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The email address of the customer.

- **platformType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The platform type for the payment.

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The unique identifier for the customer.

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The real IP address of the customer.

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The URL to redirect after payment completion.