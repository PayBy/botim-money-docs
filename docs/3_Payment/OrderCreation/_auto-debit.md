**AUTODEBIT**

Automatically deduct the funds from the user's BOTIM & Botim Money account

---


**<font color="#333333"> PayScene parameters</font>**

- **authProtocolNo** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Before allowing the merchant to automatically deduct money from payer's account, the payer needs to agree to the automatic debit agreement. After the payer agrees, Botim Money will generate an agreement number and that is the `authProtocolNo`.

  Example value: 2000001

  <br/>

- **source** <span style={{color:" #7d8793"}}>String</span>

  The source or origin of the payment request.

  <br/>

- **agreementVersion** <span style={{color:" #7d8793"}}>String</span>

  The version of the payment agreement or protocol being used.

  <br/>


