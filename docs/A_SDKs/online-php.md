---
sidebar_position: 3
toc_max_heading_level: 6
---

# Online Payment SDK - PHP

The Botim Money PHP SDK provides a simple way to integrate Botim Money payment services into your PHP applications.

**SDK Repository:** https://github.com/PayBy/PayBy-php

## Requirements

- PHP >= 5.6

## Installation

### Using Composer (Recommended)

Install the SDK via Composer:

```bash
composer require payby/payby-php
```

Then include the Composer autoloader in your project:

```php
require_once('vendor/autoload.php');
```

### Manual Installation

If you prefer not to use Composer, you can manually include the SDK:

```php
require_once('/path/to/payby-php/init.php');
```

## Getting Started

### Initialize the SDK

Before making any API calls, initialize the Botim Money SDK with your API key:

```php
\PayBy\PayBy::setApiKey('YOUR-KEY');
```

Replace `'YOUR-KEY'` with your actual Botim Money API key.

### Order

```php
// TODO
```

