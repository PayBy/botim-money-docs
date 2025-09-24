**DYNQR**

Merchant presented QR code

---

**<font color="#333333"> PayScene parameters</font>**

- **changePayer**   <span style={{color:" #7d8793"}}>String</span>   

  If the user tries to pay with BOTIM Money, whether to bind the payer information to the order after payer scanning the code. If false, if user A does not complete the payment after scanning the QR code, other users can continue to scan the QR code to pay. If true, if user A does not complete the payment after scanning the QR code, other users will fail when they try to scan the QR code to pay. The default value is true.

  Default value: True.
  
  <br/>
  
- **oneTimePayment** <span style={{color:" #7d8793"}}>String</span>

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's successful.

  Default value: False
  
  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span>

  Payer's email.

  Example value: customer@payment.com

  <br/>

- **eid** <span style={{color:" #7d8793"}}>String</span>

  When a value is passed, it indicates that the merchant requires the user's Emirates ID to be verified. Botim Money will perform the verification; if the ID matches, the process will proceed. If it does not match, an error will be returned to the user. If no value is passed, Botim Money will skip this verification step. The parameter needs to be encrypted with SHA-256 when passed.

  <br/>
