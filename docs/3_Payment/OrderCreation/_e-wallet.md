**E-wallet**

---

**<font color="#333333"> PayScene parameters</font>**

- **eWalletCode** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  Which e-wallet you want to invoke via the deeplink. 

  Example value: 

  `payby`. Botim Money Business app.

  `botim-pay`. BOTIM app.

  `ALIPAYPLUS`. Alipay plus Wallet.

  Maximum length: `20`
  
  paySceneCode=EWALLET, eWalletCode=ALIPAYPLUS

- **osType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}></span>

  Mobile Operating System Types 

  Example value: 

  `IOS` . Apple Corp

  `ANDROID` . Google Corp.
  
- **terminalType** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}></span>

  Terminal types for initiating payments. 

  Example value: 

  `WEB` 

  `WAP` 

  `APP` 

 

  subEWalletCode String 

  Secondary E-Wallet Code 

  When the eWalletCode is set to ALIPAYPLUS, the subEWalletCode must be required

  Example value: 

  `ALIPAYALL` . All Alipay plus wallets 

  `ALIPAYCN` . Alipay CN 


  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span>

  Link that the payer will be redirected once the payer finalizes payments on the e-wallet's checkout.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **oneTimePayment** <span style={{color:" #7d8793"}}>String</span>

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's successful.

  Default value: False
  
  <br/>

- **eid** <span style={{color:" #7d8793"}}>String</span>

  When a value is passed, it indicates that the merchant requires the user's Emirates ID to be verified. Botim Money Business will perform the verification; if the ID matches, the process will proceed. If it does not match, an error will be returned to the user. If no value is passed, Botim Money Business will skip this verification step. The parameter needs to be encrypted with SHA-256 when passed.

  <br/>
