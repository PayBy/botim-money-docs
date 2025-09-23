

**Paypage**

(Hosted paypage & iFrame paypage)

---

**<span style={{color:"#333333"}}> PayScene parameters</span>**

- **redirectUrl**   <span style={{color:" #7d8793"}}>String</span> 

  Link that the payer will be redirected once the payer finalizes payments on Botim Money's checkout. 

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **customerId**   <span style={{color:" #7d8793"}}>String</span>   

  The payer's id in the merchant's system. If this parameter is used, after the user enters the card details and completes the payment for the first time, Botim Money Business will save the card under the customer id. When another transaction is made, the payer will see the saved card on the PayPage checkout. Then the customer only needs to enter cvv to complete the transaction without entering card number, holder name and card expiration time again.
  In this scenario, the payer's card information won't be returned to the merchant. The saved cards can only be viewed and managed by the payer on the checkout.

  <br/>
  
- **changePayer**   <span style={{color:" #7d8793"}}>String</span>   

  If the user pays with Botim, whether to bind the payer information to the order after the user scanning the code. If false, if user A does not complete the payment after scanning the QR code, other users can continue to scan the QR code to pay. If true, if user A does not complete the payment after scanning the QR code, other users will fail when they try to scan the QR code to pay. The default value is true.

  Default value: True.
  
  <br/>
  
- **oneTimePayment**   <span style={{color:" #7d8793"}}>String</span>   

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's successful.

  Default value: False.
  
  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span>

  Payer's email. 

  Example value: customer@payment.com

  <br/>

- **eid** <span style={{color:" #7d8793"}}>String</span>

  When a value is passed, it indicates that the merchant requires the user's Emirates ID to be verified. Botim Money Business will perform the verification; if the ID matches, the process will proceed. If it does not match, an error will be returned to the user. If no value is passed, Botim Money Business will skip this verification step. The parameter needs to be encrypted with SHA-256 when passed.

  <br/>
