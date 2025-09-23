import React from 'react'
import classes from './styles.module.scss'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import { Button, Row, Col } from 'antd'
import WaitingStatus from './images/waiting.png'
import FailedStatus from './images/error.png'
import SuccessfullyStatus from './images/success.png'

const resultList = {
  PAID_SUCCESS: {
    img: WaitingStatus,
    title: 'Payment processing',
    text: 'The system is in processing, please wait…',
    btnText: ['BACK TO MERCHANT', 'UPDATE PAYMENT RESULTS'],
  },
  FAILURE: {
    img: FailedStatus,
    title: 'Payment failed',
    text: 'Reason for failure: ',
    btnText: ['BACK TO MERCHANT'],
  },
  SETTLED: {
    img: SuccessfullyStatus,
    title: 'Paid successfully',
    btnText: ['BACK TO MERCHANT'],
  },
  CREATED: {
    img: WaitingStatus,
    title: 'Payment processing',
    text: 'The system is in processing, please wait…',
    btnText: ['BACK TO MERCHANT', 'UPDATE PAYMENT RESULTS'],
  },
}

export function Result(props) {
  const { status = 'CREATED', refresh, updateResult } = props
  return (
    <div style={{ marginTop: 110,textAlign:'center' }} className={`text-center ${classes.componentsResult}`}>
      <img src={resultList[status].img} width='66' />
      <h2 style={{ marginTop: 8 }}>{resultList[status].title}</h2>
      {status !== 'SETTLED' && <h4>{resultList[status].text}</h4>}
      <Row style={{ marginTop: 14 }} justify='center' gutter={8}>
        <Col>
          <Button ghost type='primary' size='large' onClick={refresh}>
            BACK TO MERCHANT
          </Button>
        </Col>
        {(status === 'PAID_SUCCESS' || status === 'CREATED') && (
          <Col>
            <Button type='primary' size='large' onClick={updateResult}>
              UPDATE PAYMENT RESULTS
            </Button>
          </Col>
        )}
      </Row>
    </div>
  )
}
