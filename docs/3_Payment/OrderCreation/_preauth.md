**PREAUTH**

Pre-authorization for first payment, saved card payment, or device payment.

---

**<font color="#333333">PayScene parameters</font>**

*First Payment*

- **cardNo** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card number for the payment.

  <br/>

- **holderName** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The name of the cardholder.

  <br/>

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card verification value (CVV) code.

  <br/>

- **expYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The expiration year of the card.

  <br/>

- **expMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The expiration month of the card.

  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The email address of the customer.

  <br/>

- **platformType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The platform type for the payment.

  <br/>

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The unique identifier for the customer.

  <br/>

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The real IP address of the customer.

  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The URL to redirect after payment completion.

  <br/>

---

*Saved Card Payment*

- **cardToken** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The token representing the saved card.

  <br/>

- **cvv** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card verification value (CVV) code.

  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The email address of the customer.

  <br/>

- **platformType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The platform type for the payment.

  <br/>

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The real IP address of the customer.

  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The URL to redirect after payment completion.

  <br/>

---

*Device Payment*

- **type** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The type of device payment.

  <br/>

- **devicePayType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The specific device payment type.

  <br/>

- **cardNum** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The card number for the payment.

  <br/>

- **holderName** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The name of the cardholder.

  <br/>

- **cardExpYear** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The expiration year of the card.

  <br/>

- **cardExpMonth** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The expiration month of the card.

  <br/>

- **cryptoFmt** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The cryptographic format used for the payment.

  <br/>

- **payCrypt** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The encrypted payment data.

  <br/>

- **eci** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The Electronic Commerce Indicator (ECI) value.

  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Optional</span>

  The email address of the customer.

  <br/>

- **platformType** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The platform type for the payment.

  <br/>

- **customerId** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The unique identifier for the customer.

  <br/>

- **realIP** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The real IP address of the customer.

  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The URL to redirect after payment completion.

  <br/>

- **threeDSecureDom** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#999999"}}>Interaction parameter</span>

  The DOM element for 3D Secure authentication.

  <br/>
