---
sidebar_position: 90
toc_max_heading_level: 6
---

# Best Practices of Payment Flow

## System Integration Overview

The Botim Money Business payment system integrates with merchant systems through three primary interactions:

1. **Order Creation** - Merchant server initiates payment requests via the order creation API
2. **Status Inquiry** - Merchant server queries order status through the status endpoint
3. **Payment Notifications** - Merchant server receives asynchronous payment result notifications

## Standard Payment Flow

### Order Initialization

All payment processing begins with order creation using the Order Creation API. Each order requires a unique merchant order number that follows these specifications:

- **Character Set**: Letters, numbers, hyphens (-), and underscores (_) only
- **Uniqueness**: Must be unique per merchant account
- **Format Recommendation**: Current timestamp combined with random sequence

### Asynchronous Processing

Botim Money Business processes payments asynchronously after order creation. This architecture provides:

- **Non-blocking Operations**: Merchants are not required to maintain persistent connections
- **Enhanced Scalability**: Supports higher concurrent request volumes
- **Flexible Integration**: Results delivered via notifications or periodic queries

Payment results are communicated through two methods:

- **Push Notifications**: Automatic notifications sent to merchant endpoints upon payment completion
- **Status Queries**: Merchant-initiated periodic status checks via the query API

## Payment Re-initiation

When re-initiating failed payments, use the original merchant order number to prevent duplicate transactions. Note that successfully paid or canceled orders cannot be reopened. This constraint ensures audit trail integrity and dispute resolution clarity.

## Order Status Retrieval

### When to Query Order Status

The status query endpoint supports inquiries for all order types (payment, refund, transfer). Proactive status polling is recommended in these scenarios:

1. **System Maintenance**: When merchant servers undergo maintenance or experience outages that prevent notification receipt
2. **Error Handling**: When payment API calls return system errors or unknown transaction statuses  
3. **Pre-creation Validation**: To verify payment status before initiating new orders via the Order Creation API

### Query Implementation

Merchants should implement periodic status queries to determine appropriate next steps in the payment workflow, even when notification delivery is expected.

## Order Cancellation

### When to Cancel Orders

Order cancellation maintains payment history integrity and prevents duplicate charges. Cancel orders in these situations:

1. **Timeout Scenarios**: When order creation requests exceed acceptable processing time windows. Query order status first, then cancel if confirmed as timed out.

2. **Pre-reinitiation Cleanup**: Before creating replacement orders, cancel the previous order regardless of its apparent status.

3. **User Abandonment**: When users fail to complete payment after order creation (e.g., declining payment prompts). Cancel the incomplete order before creating a replacement.

### Best Practices

- Always query order status before cancellation to confirm current state
- Cancel incomplete orders before initiating new payment attempts
- Maintain cancellation logs for audit and reconciliation purposes
