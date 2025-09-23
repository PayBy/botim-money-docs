---
sidebar_position: 5
toc_max_heading_level: 6
---

# Auto Debit

This product is suitable for recurring payment. After the customer agrees to the agreement, the merchant can call the API to automatically deduct the funds from the user's Botim Money Business account. Since signing agreement is done within the app, it is required that your customers have already installed the Botim Money Business app.

## User Experience

1. The customer agrees that the merchant can automatically debit from the Botim Money Business account, in the merchant's app.
2. The customer is redirected to Botim Money Business app to sign the auto debit agreement and then backs to the merchant's app. 
3. When the customer needs to pay, the merchant can directly deduct funds from the customer's Botim Money Business account. The customer will receive an in-app message notification or SMS notification.


## Integrate the API

### Step1: Customer Signs the Agreement

The merchant app collects all the parameters needed to sign the agreement and the merchant's server call the [Apply Protocol](/docs/applyprot) API.

If the request is successful, Botim Money Business will return the **tokenUrl**. Botim Money Business or BOTIM APP will parse this parameter and redirect the customer to the built-in checkout of the app.<br/>

![autodebitflow](../pic/autodebit.png)


### Step2: Deduct Funds



