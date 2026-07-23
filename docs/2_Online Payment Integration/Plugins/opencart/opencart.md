# Opencart plugin

Botim Money offers various plugins that enable you to accept payments on your ecommerce website via the Botim Money Payment Gateway. You can accept payments via debit card, credit card, netbanking (supports 3D Secure) or through any of our supported wallets.

You can use the plugins for a seamless integration. This not only allows for refunds and chargebacks but also enables the plugin to works across all browsers.

<br/>

## Product Application
Step 1: Create your account in the Botim Money Merchant Portal.

| Environment                 | URL                                                       |
| ---------------------- | ------------------------------------------------------------ |
| Production      | https://unified.botim.money |
| UAT      | https://uat-web-unified.test2pay.com/ |

<br/>

Step 2: Visit the Product List to see the product named **Basic Payment Gateway** and click **APPLY NOW**.

![application](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/apply.png)

![application](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/apply2.png)

<br/> 

Step 3: Enter the merchant information and submit the application.

![fill](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/fill.png)

<br/> 
Step 4: Once the application is submitted, it will be reviewed by the botimMoney team. This usually takes 1-2 working days.
<br/>   

## Generate the API keys from the botimMoney Merchant Portal

After submitting your product activation request, please visit the **API Management** section of the merchant portal to configure the basic parameters required for the integration.

![api-management](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/api-management4.png)

<br/>

**Step 1:Generating the security keys**

```shell
### Generate private key
# botimMoney_key.pem Private key file name
# 2048 Private key size, at least 2048
openssl genrsa -out botimMoney_key.pem 2048

### Export public key
# botimMoney_key.pem Private key generated in the previous step # botimMoney_key_public.pem Exported public key name
openssl rsa -in botimMoney_key.pem -out botimMoney_key_public.pem -pubout

### Export private key for Java
# botimMoney_key.pem Private key generated in the 1st step
# botimMoney_key_Private.pem
openssl pkcs8 -in botimMoney_key.pem -topk8 -nocrypt -out botimMoney_key_private.pem
```

<br/>

**Step 2:Upload your public key**

Upload "botimMoney_key_public.pem" on this step. This pem is used to signiture the request from merchant.

<br/>

**Step 3:Download botimMoney Public Key**

This pem is used to Verify the response from botimMoney and Encrypting senitive information.

[![object-keys1](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/object-keys1.png)

<br/>

**Step 4:Bind IP address (Required)**

This IP address is outbound IP of Merchant system. botimMoney provides you with a strong API through which you can enjoy services such as placeOrder, getOrder, etc. View How To Use via Developers website.

For security reasons, we recommend that API should bind at least one IP address.

If there is only one IP address, you can enter it directly. If there is more than one IP address, you should separate them with halfwidth comma (e.g. 192.168.1.1,192.168.1.2,192.168.1.3) or Replace with *
(e.g. 192.168.*.*,172.16.9.*,192.168.1.1). If you want to allow any ip addresses,you can only enter *."



## Integration Steps

Step 1: Download

Download from: https://cdn-web-glb.botim.me/upd/v1/res/common/money/plugins/botim_money.ocmod.zip

<br/>

Step 2: Install Plugin

1. Set the payment currency to AED – United Arab Emirates Dirham.

![pic01](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/pic01.png)  

2. Set up the Opencart.
3. Log into the admin page.    
4. Navigate to Extension → Installer  
5. Upload the compressed files called 'botim_money.ocmod.zip'.

![pic02](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/pic02.png)

<br/>

Step 3: Configure Opencart

1. Navigate to Press Extensions → Extensions 
2. Select Payments as extension Extension type.
3. Click the Install button to activate botimMoney as a payment method.
4. Click the Edit button. 

![pic03](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/pic03.png)  

![pic04](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/pic04.png)  

5. Enter the Merchant Partner Id provided. 
6. Enter the Merchant Private Key provided. 
7. Enter the botimMoney Public Key provided.  
8. Select the Completed Order Status. 
9. Select Run Mode UAT for testing, Production for general usage. 
10. Enter botimMoney Payment OrderNo Prefix like 'pb_'  
11. Confirm that AED currency is set.
12. Change the status to Enabled. 
13. Click on Save to update the settings.

![pic05](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/pic05.png)  

<br/>

Step 4: Check front checkout page

1. Select **botimMoney** as the payment method.

![pic06](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/pic06.png)

<br/>

2. Confirm Order. 

![pic07](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/pic07.png)

<br/>

3. The page will be redirected to the PayPage, choose to pay by SCAN PAY or CARD PAY.<br/>
Option A:

![pic08](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/paypage1.png)  

Option B: 

![pic08](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/paypage2.png) 

<br/>

4. View payment results in Orders.

![pic09](https://github.com/PayBy/botim-money-docs/raw/dev/docs/2_Online%20Payment%20Integration/Plugins/opencart/pic/pic09.png)  
