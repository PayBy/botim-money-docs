**AUTODEBIT**

Automatically deduct the funds from the user's BOTIM & Botim Money account

---


**<font color="#333333"> PayScene parameters</font>**

- **authProtocolNo** <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Before allowing the merchant to automatically deduct money from payer's account, the payer needs to agree to the automatic debit agreement. After the payer agrees, Botim Money will generate an agreement number and that is the `authProtocolNo`.

  Example value: 2000001

- **source** <span style={{color:" #7d8793"}}>Enum</span>

  The source of the agreement.
  
  Possible value: MERCHANT

- **agreementVersion** <span style={{color:" #7d8793"}}>Enum</span>

  The version of the agreement.
  
  Possible value: V1


