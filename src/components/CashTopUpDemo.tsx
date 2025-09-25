import React, { useState } from 'react'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import { useHistory } from '@docusaurus/router'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import orderCreation, { queryOrder } from '@site/src/utils/orderCreation'
import validateAmount from '@site/src/utils/validateAmount'
import { Button, ConfigProvider, Form, Input, Modal } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { Result } from './Result'
type OrderCreationParams = {
  amount: string
  paySceneCode: string
  paySceneParams: any
}

ConfigProvider.config({
  theme: {
    primaryColor: '#3C8404',
  },
})

export function CashTopUpDemo(props: { orderCreation?: any; siteConfig?: any }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()
  let env = customFields.env as string
  const [showResult, setShowResult] = useState(false)
  const [orderResult, setOrderResult] = useState<any>({})
  const [paymentResult, setPaymentResult] = useState<any>({})
  const history = useHistory()
  const handleSubmit = async (e: { amount: string }) => {
    const values: Partial<OrderCreationParams> = { amount: e.amount }
    if (!validateAmount(values)) {
      values.paySceneCode = 'CASHTOPUP'
      values.paySceneParams = {
        businessType: 'GAME_TOP_UP',
      }
      orderCreation(
        values,
        (result) => {
          setOrderResult(result)
          window.open(result.interActionParams.tokenUrl)
          Modal.confirm({
            icon: null,
            centered: true,
            width: 360,
            className: 'ant-modal-custom',
            title: 'Please complete the payment on the Botim Money page.',
            content:
              'Do not close this pop-up until payment is complete. Please click the following button according to the situation after the payment is completed.',
            okText: 'Payment completed',
            closable: false,
            onOk() {
              if (result?.acquireOrder?.merchantOrderNo) {
                queryOrder(
                  { merchantOrderNo: result.acquireOrder.merchantOrderNo },
                  (res) => {
                    if (res) {
                      console.log(res.acquireOrder, 'acquireOrder')
                      setPaymentResult(res.acquireOrder)
                      setShowResult(true)
                    }
                  },
                  env
                )
              }
            },
            cancelText: 'Cancel',
            onCancel() {},
          })
        },
        env
      )
    }
  }
  return (
    <section style={{ margin: '0 auto' }}>
      <ConfigProvider>
        {!showResult ? (
          <>
            <h1>Cash Top Up </h1>
            <p>
              For online merchants, this product offers users who don't have bank accounts the
              ability to use cash to complete their online orders. For example, this product can be
              used in game account top up scenario, the payer gives cash to cashier of the store
              that running this business, the cashier helps to complete the online payment.
            </p>
            <p>
              To experience the payment process, suppose you are trying to add money to your game
              account, enter the amount you want to add and click <b>Pay Now</b> below.
            </p>
            <br />
            <p>
              <b>Payment Amount</b>
            </p>
            <Form style={{ width: '320px' }} onFinish={handleSubmit}>
              <FormItem
                name='amount'
                rules={[{ required: true, message: `Amount is required, Please Check it!` }]}
              >
                <Input addonBefore='AED' size='large' />
              </FormItem>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  size='large'
                  block
                  className='form-module-xl'
                >
                  PAY NOW
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <Result
            status={paymentResult.status || 'CREATED'}
            refresh={() => history.go(0)}
            updateResult={() =>
              queryOrder(
                { merchantOrderNo: orderResult.merchantOrderNo },
                (res) => {
                  setPaymentResult(res.acquireOrder)
                },
                env
              )
            }
          />
        )}
      </ConfigProvider>
    </section>
  )
}

