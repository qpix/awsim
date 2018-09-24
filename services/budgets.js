awsim['budgets'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-10-20",
    "endpointPrefix":"budgets",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"AWSBudgets",
    "serviceFullName":"AWS Budgets",
    "serviceId":"Budgets",
    "signatureVersion":"v4",
    "targetPrefix":"AWSBudgetServiceGateway",
    "uid":"budgets-2016-10-20"
  },
  "operations":{
    "CreateBudget":{
      "name":"CreateBudget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateBudgetRequest"},
      "output":{"shape":"CreateBudgetResponse"},
      "errors":[
        {"shape":"InvalidParameterException"},
        {"shape":"InternalErrorException"},
        {"shape":"CreationLimitExceededException"},
        {"shape":"DuplicateRecordException"}
      ],
      "documentation":"<p>Creates a budget and, if included, notifications and subscribers. </p>"
    },
    "CreateNotification":{
      "name":"CreateNotification",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateNotificationRequest"},
      "output":{"shape":"CreateNotificationResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"},
        {"shape":"CreationLimitExceededException"},
        {"shape":"DuplicateRecordException"}
      ],
      "documentation":"<p>Creates a notification. You must create the budget before you create the associated notification.</p>"
    },
    "CreateSubscriber":{
      "name":"CreateSubscriber",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateSubscriberRequest"},
      "output":{"shape":"CreateSubscriberResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"CreationLimitExceededException"},
        {"shape":"DuplicateRecordException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Creates a subscriber. You must create the associated budget and notification before you create the subscriber.</p>"
    },
    "DeleteBudget":{
      "name":"DeleteBudget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteBudgetRequest"},
      "output":{"shape":"DeleteBudgetResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a budget. You can delete your budget at any time.</p> <p> <b>Deleting a budget also deletes the notifications and subscribers associated with that budget.</b> </p>"
    },
    "DeleteNotification":{
      "name":"DeleteNotification",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteNotificationRequest"},
      "output":{"shape":"DeleteNotificationResponse"},
      "errors":[
        {"shape":"InvalidParameterException"},
        {"shape":"InternalErrorException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a notification.</p> <p> <b>Deleting a notification also deletes the subscribers associated with the notification.</b> </p>"
    },
    "DeleteSubscriber":{
      "name":"DeleteSubscriber",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteSubscriberRequest"},
      "output":{"shape":"DeleteSubscriberResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a subscriber.</p> <p> <b>Deleting the last subscriber to a notification also deletes the notification.</b> </p>"
    },
    "DescribeBudget":{
      "name":"DescribeBudget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeBudgetRequest"},
      "output":{"shape":"DescribeBudgetResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Describes a budget.</p>"
    },
    "DescribeBudgets":{
      "name":"DescribeBudgets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeBudgetsRequest"},
      "output":{"shape":"DescribeBudgetsResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ExpiredNextTokenException"}
      ],
      "documentation":"<p>Lists the budgets associated with an account.</p>"
    },
    "DescribeNotificationsForBudget":{
      "name":"DescribeNotificationsForBudget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeNotificationsForBudgetRequest"},
      "output":{"shape":"DescribeNotificationsForBudgetResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ExpiredNextTokenException"}
      ],
      "documentation":"<p>Lists the notifications associated with a budget.</p>"
    },
    "DescribeSubscribersForNotification":{
      "name":"DescribeSubscribersForNotification",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSubscribersForNotificationRequest"},
      "output":{"shape":"DescribeSubscribersForNotificationResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidParameterException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ExpiredNextTokenException"}
      ],
      "documentation":"<p>Lists the subscribers associated with a notification.</p>"
    },
    "UpdateBudget":{
      "name":"UpdateBudget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateBudgetRequest"},
      "output":{"shape":"UpdateBudgetResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When a budget is modified, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p>"
    },
    "UpdateNotification":{
      "name":"UpdateNotification",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateNotificationRequest"},
      "output":{"shape":"UpdateNotificationResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"},
        {"shape":"DuplicateRecordException"}
      ],
      "documentation":"<p>Updates a notification.</p>"
    },
    "UpdateSubscriber":{
      "name":"UpdateSubscriber",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateSubscriberRequest"},
      "output":{"shape":"UpdateSubscriberResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"},
        {"shape":"DuplicateRecordException"}
      ],
      "documentation":"<p>Updates a subscriber.</p>"
    }
  },
  "shapes":{
    "AccountId":{
      "type":"string",
      "documentation":"<p>The account ID of the customer. It should be a 12 digit number.</p>",
      "max":12,
      "min":12
    },
    "Budget":{
      "type":"structure",
      "required":[
        "BudgetName",
        "TimeUnit",
        "BudgetType"
      ],
      "members":{
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of a budget. Unique within accounts. <code>:</code> and <code>\\</code> characters are not allowed in the <code>BudgetName</code>.</p>"
        },
        "BudgetLimit":{
          "shape":"Spend",
          "documentation":"<p>The total amount of cost, usage, or RI utilization that you want to track with your budget.</p> <p> <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI utilization budgets. RI utilization budgets default to the only valid value for RI utilization budgets, which is <code>100</code>.</p>"
        },
        "CostFilters":{
          "shape":"CostFilters",
          "documentation":"<p>The cost filters applied to a budget, such as service or region.</p>"
        },
        "CostTypes":{
          "shape":"CostTypes",
          "documentation":"<p>The types of costs included in this budget.</p>"
        },
        "TimeUnit":{
          "shape":"TimeUnit",
          "documentation":"<p>The length of time until a budget resets the actual and forecasted spend.</p>"
        },
        "TimePeriod":{
          "shape":"TimePeriod",
          "documentation":"<p>The period of time covered by a budget. Has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. </p> <p>If you created your budget and didn't specify a start date, AWS defaults to the start of your chosen time period (i.e. DAILY, MONTHLY, QUARTERLY, ANNUALLY). For example, if you created your budget on January 24th 2018, chose <code>DAILY</code>, and didn't set a start date, AWS set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, AWS set your start date to <code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, AWS set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API. </p> <p>You can change either date with the <code>UpdateBudget</code> operation.</p> <p>After the end date, AWS deletes the budget and all associated notifications and subscribers.</p>"
        },
        "CalculatedSpend":{
          "shape":"CalculatedSpend",
          "documentation":"<p>The actual and forecasted cost or usage being tracked by a budget.</p>"
        },
        "BudgetType":{
          "shape":"BudgetType",
          "documentation":"<p>Whether this budget tracks monetary costs, usage, or RI utilization.</p>"
        }
      },
      "documentation":"<p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code>.</p> <p>The ARN pattern for a budget is: <code>arn:aws:budgetservice::AccountId:budget/budgetName</code> </p>"
    },
    "BudgetName":{
      "type":"string",
      "documentation":"<p> A string represents the budget name. No \":\" and \"\\\" character is allowed.</p>",
      "max":100,
      "pattern":"[^:\\\\]+"
    },
    "BudgetType":{
      "type":"string",
      "documentation":"<p> The type of a budget. It should be COST, USAGE, or RI_UTILIZATION.</p>",
      "enum":[
        "USAGE",
        "COST",
        "RI_UTILIZATION",
        "RI_COVERAGE"
      ]
    },
    "Budgets":{
      "type":"list",
      "member":{"shape":"Budget"},
      "documentation":"<p> A list of budgets</p>"
    },
    "CalculatedSpend":{
      "type":"structure",
      "required":["ActualSpend"],
      "members":{
        "ActualSpend":{
          "shape":"Spend",
          "documentation":"<p>The amount of cost, usage, or RI units that you have used.</p>"
        },
        "ForecastedSpend":{
          "shape":"Spend",
          "documentation":"<p>The amount of cost, usage, or RI units that you are forecasted to use.</p>"
        }
      },
      "documentation":"<p>The spend objects associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, or RI units, and the <code>forecastedSpend</code> tracks how much you are predicted to spend if your current usage remains steady.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>"
    },
    "ComparisonOperator":{
      "type":"string",
      "documentation":"<p> The comparison operator of a notification. Currently we support less than, equal to and greater than.</p>",
      "enum":[
        "GREATER_THAN",
        "LESS_THAN",
        "EQUAL_TO"
      ]
    },
    "CostFilters":{
      "type":"map",
      "key":{"shape":"GenericString"},
      "value":{"shape":"DimensionValues"},
      "documentation":"<p> A map that represents the cost filters applied to the budget.</p>"
    },
    "CostTypes":{
      "type":"structure",
      "members":{
        "IncludeTax":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes taxes.</p> <p>The default value is <code>true</code>.</p>"
        },
        "IncludeSubscription":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes subscriptions.</p> <p>The default value is <code>true</code>.</p>"
        },
        "UseBlended":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget uses blended rate.</p> <p>The default value is <code>false</code>.</p>"
        },
        "IncludeRefund":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes refunds.</p> <p>The default value is <code>true</code>.</p>"
        },
        "IncludeCredit":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes credits.</p> <p>The default value is <code>true</code>.</p>"
        },
        "IncludeUpfront":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes upfront RI costs.</p> <p>The default value is <code>true</code>.</p>"
        },
        "IncludeRecurring":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes recurring fees such as monthly RI fees.</p> <p>The default value is <code>true</code>.</p>"
        },
        "IncludeOtherSubscription":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes non-RI subscription costs.</p> <p>The default value is <code>true</code>.</p>"
        },
        "IncludeSupport":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes support subscription fees.</p> <p>The default value is <code>true</code>.</p>"
        },
        "IncludeDiscount":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget includes discounts.</p> <p>The default value is <code>true</code>.</p>"
        },
        "UseAmortized":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether a budget uses the amortized rate.</p> <p>The default value is <code>false</code>.</p>"
        }
      },
      "documentation":"<p>The types of cost included in a budget, such as tax and subscriptions.</p>"
    },
    "CreateBudgetRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "Budget"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget.</p>"
        },
        "Budget":{
          "shape":"Budget",
          "documentation":"<p>The budget object that you want to create.</p>"
        },
        "NotificationsWithSubscribers":{
          "shape":"NotificationWithSubscribersList",
          "documentation":"<p>A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to ten email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, AWS creates the notifications and subscribers for you.</p>"
        }
      },
      "documentation":"<p> Request of CreateBudget </p>"
    },
    "CreateBudgetResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of CreateBudget </p>"
    },
    "CreateNotificationRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName",
        "Notification",
        "Subscribers"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget that you want to create a notification for.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget that you want AWS to notified you about. Budget names must be unique within an account.</p>"
        },
        "Notification":{
          "shape":"Notification",
          "documentation":"<p>The notification that you want to create.</p>"
        },
        "Subscribers":{
          "shape":"Subscribers",
          "documentation":"<p>A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to ten email subscribers.</p>"
        }
      },
      "documentation":"<p> Request of CreateNotification </p>"
    },
    "CreateNotificationResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of CreateNotification </p>"
    },
    "CreateSubscriberRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName",
        "Notification",
        "Subscriber"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> associated with the budget that you want to create a subscriber for.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget that you want to subscribe to. Budget names must be unique within an account.</p>"
        },
        "Notification":{
          "shape":"Notification",
          "documentation":"<p>The notification that you want to create a subscriber for.</p>"
        },
        "Subscriber":{
          "shape":"Subscriber",
          "documentation":"<p>The subscriber that you want to associate with a budget notification.</p>"
        }
      },
      "documentation":"<p> Request of CreateSubscriber </p>"
    },
    "CreateSubscriberResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of CreateSubscriber </p>"
    },
    "CreationLimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>You've exceeded the notification or subscriber limit.</p>",
      "exception":true
    },
    "DeleteBudgetRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget that you want to delete.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget that you want to delete.</p>"
        }
      },
      "documentation":"<p> Request of DeleteBudget </p>"
    },
    "DeleteBudgetResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of DeleteBudget </p>"
    },
    "DeleteNotificationRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName",
        "Notification"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget whose notification you want to delete.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget whose notification you want to delete.</p>"
        },
        "Notification":{
          "shape":"Notification",
          "documentation":"<p>The notification that you want to delete.</p>"
        }
      },
      "documentation":"<p> Request of DeleteNotification </p>"
    },
    "DeleteNotificationResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of DeleteNotification </p>"
    },
    "DeleteSubscriberRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName",
        "Notification",
        "Subscriber"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget whose subscriber you want to delete.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget whose subscriber you want to delete.</p>"
        },
        "Notification":{
          "shape":"Notification",
          "documentation":"<p>The notification whose subscriber you want to delete.</p>"
        },
        "Subscriber":{
          "shape":"Subscriber",
          "documentation":"<p>The subscriber that you want to delete.</p>"
        }
      },
      "documentation":"<p> Request of DeleteSubscriber </p>"
    },
    "DeleteSubscriberResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of DeleteSubscriber </p>"
    },
    "DescribeBudgetRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget that you want a description of.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget that you want a description of.</p>"
        }
      },
      "documentation":"<p> Request of DescribeBudget </p>"
    },
    "DescribeBudgetResponse":{
      "type":"structure",
      "members":{
        "Budget":{
          "shape":"Budget",
          "documentation":"<p>The description of the budget.</p>"
        }
      },
      "documentation":"<p> Response of DescribeBudget </p>"
    },
    "DescribeBudgetsRequest":{
      "type":"structure",
      "required":["AccountId"],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budgets that you want descriptions of.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Optional integer. Specifies the maximum number of results to return in response.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>The pagination token that indicates the next set of results to retrieve.</p>"
        }
      },
      "documentation":"<p> Request of DescribeBudgets </p>"
    },
    "DescribeBudgetsResponse":{
      "type":"structure",
      "members":{
        "Budgets":{
          "shape":"Budgets",
          "documentation":"<p>A list of budgets.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>The pagination token that indicates the next set of results that you can retrieve.</p>"
        }
      },
      "documentation":"<p> Response of DescribeBudgets </p>"
    },
    "DescribeNotificationsForBudgetRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget whose notifications you want descriptions of.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget whose notifications you want descriptions of.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Optional integer. Specifies the maximum number of results to return in response.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>The pagination token that indicates the next set of results to retrieve.</p>"
        }
      },
      "documentation":"<p> Request of DescribeNotificationsForBudget </p>"
    },
    "DescribeNotificationsForBudgetResponse":{
      "type":"structure",
      "members":{
        "Notifications":{
          "shape":"Notifications",
          "documentation":"<p>A list of notifications associated with a budget.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>The pagination token that indicates the next set of results that you can retrieve.</p>"
        }
      },
      "documentation":"<p> Response of GetNotificationsForBudget </p>"
    },
    "DescribeSubscribersForNotificationRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName",
        "Notification"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget whose subscribers you want descriptions of.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget whose subscribers you want descriptions of.</p>"
        },
        "Notification":{
          "shape":"Notification",
          "documentation":"<p>The notification whose subscribers you want to list.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Optional integer. Specifies the maximum number of results to return in response.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>The pagination token that indicates the next set of results to retrieve.</p>"
        }
      },
      "documentation":"<p> Request of DescribeSubscribersForNotification </p>"
    },
    "DescribeSubscribersForNotificationResponse":{
      "type":"structure",
      "members":{
        "Subscribers":{
          "shape":"Subscribers",
          "documentation":"<p>A list of subscribers associated with a notification.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>The pagination token that indicates the next set of results that you can retrieve.</p>"
        }
      },
      "documentation":"<p> Response of DescribeSubscribersForNotification </p>"
    },
    "DimensionValues":{
      "type":"list",
      "member":{"shape":"GenericString"}
    },
    "DuplicateRecordException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The budget name already exists. Budget names must be unique within an account.</p>",
      "exception":true
    },
    "ExpiredNextTokenException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The pagination token expired.</p>",
      "exception":true
    },
    "GenericString":{
      "type":"string",
      "documentation":"<p> A generic String.</p>"
    },
    "GenericTimestamp":{
      "type":"timestamp",
      "documentation":"<p> A generic timestamp. In Java it is transformed to a Date object.</p>"
    },
    "InternalErrorException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>An error on the server occurred during the processing of your request. Try again later.</p>",
      "exception":true
    },
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The pagination token is invalid.</p>",
      "exception":true
    },
    "InvalidParameterException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>",
      "exception":true
    },
    "MaxResults":{
      "type":"integer",
      "documentation":"<p> An integer to represent how many entries a paginated response contains. Maximum is set to 100.</p>",
      "box":true,
      "max":100,
      "min":1
    },
    "NotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>We can’t locate the resource that you specified.</p>",
      "exception":true
    },
    "Notification":{
      "type":"structure",
      "required":[
        "NotificationType",
        "ComparisonOperator",
        "Threshold"
      ],
      "members":{
        "NotificationType":{
          "shape":"NotificationType",
          "documentation":"<p>Whether the notification is for how much you have spent (<code>ACTUAL</code>) or for how much you are forecasted to spend (<code>FORECASTED</code>).</p>"
        },
        "ComparisonOperator":{
          "shape":"ComparisonOperator",
          "documentation":"<p>The comparison used for this notification.</p>"
        },
        "Threshold":{
          "shape":"NotificationThreshold",
          "documentation":"<p>The threshold associated with a notification. Thresholds are always a percentage.</p>"
        },
        "ThresholdType":{
          "shape":"ThresholdType",
          "documentation":"<p>The type of threshold for a notification. For <code>ACTUAL</code> thresholds, AWS notifies you when you go over the threshold, and for <code>FORECASTED</code> thresholds AWS notifies you when you are forecasted to go over the threshold.</p>"
        }
      },
      "documentation":"<p>A notification associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to ten email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A comparisonOperator of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification threshold of <code>80</code> </p> </li> </ul>"
    },
    "NotificationThreshold":{
      "type":"double",
      "documentation":"<p> The threshold of a notification. It should be a number between 0 and 1,000,000,000.</p>",
      "max":1000000000,
      "min":0.1
    },
    "NotificationType":{
      "type":"string",
      "documentation":"<p> The type of a notification. It should be ACTUAL or FORECASTED.</p>",
      "enum":[
        "ACTUAL",
        "FORECASTED"
      ]
    },
    "NotificationWithSubscribers":{
      "type":"structure",
      "required":[
        "Notification",
        "Subscribers"
      ],
      "members":{
        "Notification":{
          "shape":"Notification",
          "documentation":"<p>The notification associated with a budget.</p>"
        },
        "Subscribers":{
          "shape":"Subscribers",
          "documentation":"<p>A list of subscribers who are subscribed to this notification.</p>"
        }
      },
      "documentation":"<p>A notification with subscribers. A notification can have one SNS subscriber and up to ten email subscribers, for a total of 11 subscribers.</p>"
    },
    "NotificationWithSubscribersList":{
      "type":"list",
      "member":{"shape":"NotificationWithSubscribers"},
      "documentation":"<p> A list of Notifications, each with a list of subscribers.</p>",
      "max":5
    },
    "Notifications":{
      "type":"list",
      "member":{"shape":"Notification"},
      "documentation":"<p> A list of notifications.</p>"
    },
    "NullableBoolean":{
      "type":"boolean",
      "box":true
    },
    "NumericValue":{
      "type":"string",
      "documentation":"<p> A string to represent NumericValue.</p>",
      "pattern":"([0-9]*\\.)?[0-9]+"
    },
    "Spend":{
      "type":"structure",
      "required":[
        "Amount",
        "Unit"
      ],
      "members":{
        "Amount":{
          "shape":"NumericValue",
          "documentation":"<p>The cost or usage amount associated with a budget forecast, actual spend, or budget threshold.</p>"
        },
        "Unit":{
          "shape":"UnitValue",
          "documentation":"<p>The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB.</p>"
        }
      },
      "documentation":"<p>The amount of cost or usage being measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>"
    },
    "Subscriber":{
      "type":"structure",
      "required":[
        "SubscriptionType",
        "Address"
      ],
      "members":{
        "SubscriptionType":{
          "shape":"SubscriptionType",
          "documentation":"<p>The type of notification that AWS sends to a subscriber.</p>"
        },
        "Address":{
          "shape":"SubscriberAddress",
          "documentation":"<p>The address that AWS sends budget notifications to, either an SNS topic or an email.</p>"
        }
      },
      "documentation":"<p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon Simple Notification Service topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>"
    },
    "SubscriberAddress":{
      "type":"string",
      "documentation":"<p> String containing email or sns topic for the subscriber address.</p>",
      "min":1
    },
    "Subscribers":{
      "type":"list",
      "member":{"shape":"Subscriber"},
      "documentation":"<p> A list of subscribers.</p>",
      "max":11,
      "min":1
    },
    "SubscriptionType":{
      "type":"string",
      "documentation":"<p> The subscription type of the subscriber. It can be SMS or EMAIL.</p>",
      "enum":[
        "SNS",
        "EMAIL"
      ]
    },
    "ThresholdType":{
      "type":"string",
      "documentation":"<p> The type of threshold for a notification. It can be PERCENTAGE or ABSOLUTE_VALUE.</p>",
      "enum":[
        "PERCENTAGE",
        "ABSOLUTE_VALUE"
      ]
    },
    "TimePeriod":{
      "type":"structure",
      "members":{
        "Start":{
          "shape":"GenericTimestamp",
          "documentation":"<p>The start date for a budget. If you created your budget and didn't specify a start date, AWS defaults to the start of your chosen time period (i.e. DAILY, MONTHLY, QUARTERLY, ANNUALLY). For example, if you created your budget on January 24th 2018, chose <code>DAILY</code>, and didn't set a start date, AWS set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, AWS set your start date to <code>01/01/18 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API.</p> <p>You can change your start date with the <code>UpdateBudget</code> operation.</p>"
        },
        "End":{
          "shape":"GenericTimestamp",
          "documentation":"<p>The end date for a budget. If you didn't specify an end date, AWS set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API.</p> <p>After the end date, AWS deletes the budget and all associated notifications and subscribers. You can change your end date with the <code>UpdateBudget</code> operation.</p>"
        }
      },
      "documentation":"<p>The period of time covered by a budget. Has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. </p>"
    },
    "TimeUnit":{
      "type":"string",
      "documentation":"<p> The time unit of the budget. e.g. MONTHLY, QUARTERLY, etc.</p>",
      "enum":[
        "DAILY",
        "MONTHLY",
        "QUARTERLY",
        "ANNUALLY"
      ]
    },
    "UnitValue":{
      "type":"string",
      "documentation":"<p> A string to represent budget spend unit. It should be not null and not empty.</p>",
      "min":1
    },
    "UpdateBudgetRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "NewBudget"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget that you want to update.</p>"
        },
        "NewBudget":{
          "shape":"Budget",
          "documentation":"<p>The budget that you want to update your budget to.</p>"
        }
      },
      "documentation":"<p> Request of UpdateBudget </p>"
    },
    "UpdateBudgetResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of UpdateBudget </p>"
    },
    "UpdateNotificationRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName",
        "OldNotification",
        "NewNotification"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget whose notification you want to update.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget whose notification you want to update.</p>"
        },
        "OldNotification":{
          "shape":"Notification",
          "documentation":"<p>The previous notification associated with a budget.</p>"
        },
        "NewNotification":{
          "shape":"Notification",
          "documentation":"<p>The updated notification to be associated with a budget.</p>"
        }
      },
      "documentation":"<p> Request of UpdateNotification </p>"
    },
    "UpdateNotificationResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of UpdateNotification </p>"
    },
    "UpdateSubscriberRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "BudgetName",
        "Notification",
        "OldSubscriber",
        "NewSubscriber"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The <code>accountId</code> that is associated with the budget whose subscriber you want to update.</p>"
        },
        "BudgetName":{
          "shape":"BudgetName",
          "documentation":"<p>The name of the budget whose subscriber you want to update.</p>"
        },
        "Notification":{
          "shape":"Notification",
          "documentation":"<p>The notification whose subscriber you want to update.</p>"
        },
        "OldSubscriber":{
          "shape":"Subscriber",
          "documentation":"<p>The previous subscriber associated with a budget notification.</p>"
        },
        "NewSubscriber":{
          "shape":"Subscriber",
          "documentation":"<p>The updated subscriber associated with a budget notification.</p>"
        }
      },
      "documentation":"<p> Request of UpdateSubscriber </p>"
    },
    "UpdateSubscriberResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> Response of UpdateSubscriber </p>"
    },
    "errorMessage":{
      "type":"string",
      "documentation":"<p>The error message the exception carries.</p>"
    }
  },
  "documentation":"<p>Budgets enable you to plan your service usage, service costs, and your RI utilization. You can also track how close your plan is to your budgeted amount or to the free tier limits. Budgets provide you with a quick way to see your usage-to-date and current estimated charges from AWS and to see how much your predicted usage accrues in charges by the end of the month. Budgets also compare current estimates and charges to the amount that you indicated you want to use or spend and lets you see how much of your budget has been used. AWS updates your budget status several times a day. Budgets track your unblended costs, subscriptions, and refunds. You can create the following types of budgets:</p> <ul> <li> <p>Cost budgets allow you to say how much you want to spend on a service.</p> </li> <li> <p>Usage budgets allow you to say how many hours you want to use for one or more services.</p> </li> <li> <p>RI utilization budgets allow you to define a utilization threshold and receive alerts when RIs are tracking below that threshold.</p> </li> </ul> <p>You can create up to 20,000 budgets per AWS master account. Your first two budgets are free of charge. Each additional budget costs $0.02 per day. You can set up optional notifications that warn you if you exceed, or are forecasted to exceed, your budgeted amount. You can have notifications sent to an Amazon SNS topic, to an email address, or to both. For more information, see <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-sns-policy.html\">Creating an Amazon SNS Topic for Budget Notifications</a>. AWS Free Tier usage alerts via AWS Budgets are provided for you, and do not count toward your budget limits.</p> <p>Service Endpoint</p> <p>The AWS Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.amazonaws.com</p> </li> </ul> <p>For information about costs associated with the AWS Budgets API, see <a href=\"https://aws.amazon.com/aws-cost-management/pricing/\">AWS Cost Management Pricing</a>.</p>"
}
