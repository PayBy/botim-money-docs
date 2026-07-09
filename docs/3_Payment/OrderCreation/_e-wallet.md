* redirectUrl <span style={{color:" #7d8793"}}>String</span>
Link that the payer will be redirected once the payer finalizes payments on the e-wallet's checkout.
Example value: https://www.yoursite.com
Maximum length: `512`.

* oneTimePayment <span style={{color:" #7d8793"}}>String</span>
When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's successful.
Default value: False

* eWalletCode <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>
Which e-wallet you want to invoke via the deeplink.
Example value:
`botim-pay`. BOTIM app.
`ALIPAYPLUS`. Alipay plus Wallet.
Maximum length: `20`

* osType <span style={{color:" #7d8793"}}>Enum</span>
Mobile Operating System Types
Example value:
`IOS` . Apple Corp
`ANDROID` . Google Corp.

* terminalType <span style={{color:" #7d8793"}}>Enum</span>
Terminal types for initiating payments.
Example value:
`WEB`
`WAP`
`APP`

* subEWalletCode <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required when eWalletCode is ALIPAYPLUS</span>
Secondary e-wallet code.
Example value:
`ALIPAYALL` . All Alipay plus wallets
`ALIPAYCN` . Alipay CN

* openId <span style={{color:" #7d8793"}}>String</span>