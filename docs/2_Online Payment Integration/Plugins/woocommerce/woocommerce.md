# WooCommerce plugin

WooCommerce is an open source, completely customizable ecommerce platform for entrepreneurs worldwide. It offers a flexible way to build an ecommerce store with WordPress.

Integrate your WooCommerce site with the Botim Money Payment Gateway to accept payments via debit card, credit card, netbanking (supports 3D Secure) or through any of our supported wallets.

The plugin offers seamless integration, allowing the customer to pay on your website without being redirected. This allows the plugin to work across all browsers and ensures compatibility with the latest version of WooCommerce.

<br/>



## Product application
Step 1: Create your account in the Botim Money Merchant Portal.

| Environment                 | URL                                            |
| ---------------------- | ------------------------------------------------- |
| Production      | https://unified.botim.money |
| UAT      | https://uat-web-unified.test2pay.com/ |

<br/>

Step 2: Visit the Product List to see the product named **Basic Payment Gateway** and click **APPLY NOW**.

![application](./pic/apply.png)
![application](./pic/apply2.png)
<br/> 
Step 3:Enter the merchant information and submit the application.

![fill](./pic/fill.png)
<br/> 
Step 4:Once the application is submitted, it will be reviewed by the botimMoney team. This usually takes 1-2 working days.
<br/>   


## API Management
After submitting your product activation request, please visit the API Management of the merchant portal to configure the basic parameters required for the integration.


![api-management](./pic/api-management4.png)

<br/>

**Step 1: Generating the security keys**

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

**Step 2: Upload your public key**

Upload "botimMoney_key_public.pem" on this step. This pem is used to signiture the request from merchant.

<br/>

**Step 3: Download botimMoney Public Key**

This pem is used to Verify the response from botimMoney and Encrypting senitive information.

[![object-keys1](./pic/object-keys1.png)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiICAgIGdyYXBoIExSXG4gICAgICAgIEFbXCJvcmlnaW5hbCBjb250ZW50IG9mIHJlcXVlc3QgYm9keVwiXSAtLSBVVEYtOCBlbmNvZGluZyAtLT5CW1wiZW5jb2RlZCBtZXNzYWdlXCJdIC0tIFNIQTI1NndpdGhSU0EgLS0-Q1tcInNpZ25hdHVyZVwiXSAtLSBCYXNlNjQgLS0-IERbXCJmaW5hbCBzaWduYXR1cmUgb3V0cHV0XCJdXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInNlcXVlbmNlIjp7ImRpYWdyYW1NYXJnaW5YIjo1MCwiZGlhZ3JhbU1hcmdpblkiOjEwLCJhY3Rvck1hcmdpbiI6NTAsIndpZHRoIjo0MDAsImhlaWdodCI6NjUsImJveE1hcmdpbiI6MTAsImJveFRleHRNYXJnaW4iOjUsIm5vdGVNYXJnaW4iOjEwLCJtZXNzYWdlTWFyZ2luIjozNSwibWlycm9yQWN0b3JzIjp0cnVlLCJib3R0b21NYXJnaW5BZGoiOjEsInVzZU1heFdpZHRoIjp0cnVlLCJyaWdodEFuZ2xlcyI6ZmFsc2UsInNob3dTZXF1ZW5jZU51bWJlcnMiOmZhbHNlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

<br/>

**Step 4: Bind IP address (Required)**

This IP address is outbound IP of Merchant system. botimMoney provides you with a strong API through which you can enjoy services such as `placeOrder`, `getOrder`, etc. View How To Use via Developers website.

For security reasons, we recommend that API should bind at least one IP address.

If there is only one IP address, you can enter it directly. If there is more than one IP address, you should separate them with halfwidth comma (e.g. 192.168.1.1,192.168.1.2,192.168.1.3) or Replace with *
(e.g. 192.168.*.*,172.16.9.*,192.168.1.1). If you want to allow any ip addresses,you can only enter *."

<br/>


## Integration Steps

**Step 1: Download**

Download from: https://cdn-web-glb.botim.me/upd/v1/res/common/money/plugins/botim-money-for-woocommerce.zip

<br/>

**Step 2: Install Plugin**

1. Set the payment currency to AED – United Arab Emirates Dirham.

![pic01](./pic/pic01.png) 

2. Set up the Wordpress And Woocommerce. 
3. Log into the admin page.
4. Navigate to Plugins → Add New 
5. Upload the compressed files called 'botim-money-for-woocommerce.zip'.

![pic02](./pic/pic02.png)  

6. Click the Install Now button.

7. Navigate to WooCommerce → Installed Plugins

8. Click the Activate button.

![pic03](./pic/pic03.png)

<br/>

**Step 3: Configure WooCommerce**

1. Navigate to WooCommerce → Setting
2. Set botimMoney as the payment method.

![pic04](./pic/pic04.png) 

3. Enter the Subject provided.
4. Enter the Merchant Partner Id provided.  
5. Enter the Merchant Private Key provided. (Don't remove the -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----)   
6. Enter the botimMoney Public Key provided. (Don't remove the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY-----)  
7. Select Run Mode UAT for testing, Production for general usage. 
8. Enter botimMoney Payment OrderNo Prefix like 'wp_'  
9. Click on Save changes to update the settings. 

![pic05](./pic/pic05.png)  

<br/>

**Step 4: Check front checkout page**

1. Select botim money as the payment method and place the order.

![pic06](./pic/pic06.png)  

<br/>

2. The page will be redirected to the PayPage, choose to pay by SCAN PAY or CARD PAY.<br/>
Option A:

![pic08](./pic/paypage1.png)  

Option B: 

![pic08](./pic/paypage2.png) 

<br/>

3. View payment results in Orders. 

![pic09](./pic/pic09.png) 

<br/>
