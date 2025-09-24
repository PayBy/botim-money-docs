**PAYANDSIGN**

The payer completes the signing of the automatic deduction agreement while making the payment.

---

**<font color="#333333"> PayScene parameters</font>**

- **protocolSceneCode** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  The auto-debit service ID between Botim Money and the merchant, and some data reading rules are configured in the ID. Please ask Botim Money operations staff for your service number.

  Constant value: 120
  
  <br/>
  
- **protocolNotifyUrl** <span style={{color:" #7d8793"}}>String</span>

  To receive asynchronous notifications of payer's signing result of the autodesk deduction agreement, pass the notify URL. If the agreement is successfully signed, a notification will be sent to this address.

  Example value: [https://www.yoursite.com](https://www.yoursite.com/)
  <br/>

- **customerId** <span style={{color:" #7d8793"}}>String</span>

  The payer's id in the merchant's system.Used to identify the payer's contracted entity within Botim Money.
  
  Example value: user1233