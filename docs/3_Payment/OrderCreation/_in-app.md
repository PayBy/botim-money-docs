**In-APP SDK**

---

**<font color="#333333"> PayScene parameters</font>**

- **iapDeviceId**   <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

   The device id of the payer, also known as IMEI. The International Mobile Equipment Identity (IMEI) number is a unique identification or serial number that all mobile phones and smartphones have. It is normally 15 digits long.

  Example value: https://www.yoursite.com

  Maximum length: `512`.
  
  <br/>

- **appId**   <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Your app needs to be registered with Botim. Botim Money Business will assign an app id after successful registration. Please log in to the portal and visit [Setting - Developers - My Apps] to register your application.

  Example value: 20211222000000241

  Maximum length: `17`.
  
  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span>

  Payer's email.

  Example value: customer@payment.com

  <br/>
  
- **eid** <span style={{color:" #7d8793"}}>String</span>

  When a value is passed, it indicates that the merchant requires the user's Emirates ID to be verified. Botim Money Business will perform the verification; if the ID matches, the process will proceed. If it does not match, an error will be returned to the user. If no value is passed, Botim Money Business will skip this verification step. The parameter needs to be encrypted with SHA-256 when passed.

  <br/>