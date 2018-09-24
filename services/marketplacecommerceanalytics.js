awsim['marketplacecommerceanalytics'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-07-01",
    "endpointPrefix":"marketplacecommerceanalytics",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Marketplace Commerce Analytics",
    "serviceId":"Marketplace Commerce Analytics",
    "signatureVersion":"v4",
    "signingName":"marketplacecommerceanalytics",
    "targetPrefix":"MarketplaceCommerceAnalytics20150701",
    "uid":"marketplacecommerceanalytics-2015-07-01"
  },
  "operations":{
    "GenerateDataSet":{
      "name":"GenerateDataSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GenerateDataSetRequest"},
      "output":{"shape":"GenerateDataSetResult"},
      "errors":[
        {"shape":"MarketplaceCommerceAnalyticsException"}
      ],
      "documentation":"Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy."
    },
    "StartSupportDataExport":{
      "name":"StartSupportDataExport",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartSupportDataExportRequest"},
      "output":{"shape":"StartSupportDataExportResult"},
      "errors":[
        {"shape":"MarketplaceCommerceAnalyticsException"}
      ],
      "documentation":"Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy."
    }
  },
  "shapes":{
    "CustomerDefinedValues":{
      "type":"map",
      "key":{"shape":"OptionalKey"},
      "value":{"shape":"OptionalValue"},
      "max":5,
      "min":1
    },
    "DataSetPublicationDate":{"type":"timestamp"},
    "DataSetRequestId":{"type":"string"},
    "DataSetType":{
      "type":"string",
      "enum":[
        "customer_subscriber_hourly_monthly_subscriptions",
        "customer_subscriber_annual_subscriptions",
        "daily_business_usage_by_instance_type",
        "daily_business_fees",
        "daily_business_free_trial_conversions",
        "daily_business_new_instances",
        "daily_business_new_product_subscribers",
        "daily_business_canceled_product_subscribers",
        "monthly_revenue_billing_and_revenue_data",
        "monthly_revenue_annual_subscriptions",
        "disbursed_amount_by_product",
        "disbursed_amount_by_product_with_uncollected_funds",
        "disbursed_amount_by_instance_hours",
        "disbursed_amount_by_customer_geo",
        "disbursed_amount_by_age_of_uncollected_funds",
        "disbursed_amount_by_age_of_disbursed_funds",
        "customer_profile_by_industry",
        "customer_profile_by_revenue",
        "customer_profile_by_geography",
        "sales_compensation_billed_revenue",
        "us_sales_and_use_tax_records"
      ],
      "max":255,
      "min":1
    },
    "DestinationS3BucketName":{
      "type":"string",
      "min":1
    },
    "DestinationS3Prefix":{"type":"string"},
    "ExceptionMessage":{"type":"string"},
    "FromDate":{"type":"timestamp"},
    "GenerateDataSetRequest":{
      "type":"structure",
      "required":[
        "dataSetType",
        "dataSetPublicationDate",
        "roleNameArn",
        "destinationS3BucketName",
        "snsTopicArn"
      ],
      "members":{
        "dataSetType":{
          "shape":"DataSetType",
          "documentation":"<p>The desired data set type.</p> <p> <ul> <li> <strong>customer_subscriber_hourly_monthly_subscriptions</strong> <p>From 2014-07-21 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>customer_subscriber_annual_subscriptions</strong> <p>From 2014-07-21 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_usage_by_instance_type</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_fees</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_free_trial_conversions</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_new_instances</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_new_product_subscribers</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>daily_business_canceled_product_subscribers</strong> <p>From 2015-01-26 to present: Available daily by 5:00 PM Pacific Time.</p> </li> <li> <strong>monthly_revenue_billing_and_revenue_data</strong> <p>From 2015-02 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from two months prior.</p> <p>From 2017-07 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from one month prior.</p> </li> <li> <strong>monthly_revenue_annual_subscriptions</strong> <p>From 2015-02 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes up-front software charges (e.g. annual) from one month prior.</p> <p>From 2017-07 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes up-front software charges (e.g. annual) from one month prior.</p> </li> <li> <strong>disbursed_amount_by_product</strong> <p>From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>disbursed_amount_by_product_with_uncollected_funds</strong> <p>From 2012-04-19 to 2015-01-25: Available every 30 days by 5:00 PM Pacific Time.</p> <p>From 2015-01-26 to present: This data set was split into three data sets: disbursed_amount_by_product, disbursed_amount_by_age_of_uncollected_funds, and disbursed_amount_by_age_of_disbursed_funds.</p> </li> <li> <strong>disbursed_amount_by_instance_hours</strong> <p>From 2012-09-04 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>disbursed_amount_by_customer_geo</strong> <p>From 2012-04-19 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>disbursed_amount_by_age_of_uncollected_funds</strong> <p>From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>disbursed_amount_by_age_of_disbursed_funds</strong> <p>From 2015-01-26 to present: Available every 30 days by 5:00 PM Pacific Time.</p> </li> <li> <strong>customer_profile_by_industry</strong> <p>From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time.</p> <p>From 2017-06-30 to present: This data set is no longer available.</p> </li> <li> <strong>customer_profile_by_revenue</strong> <p>From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time.</p> <p>From 2017-06-30 to present: This data set is no longer available.</p> </li> <li> <strong>customer_profile_by_geography</strong> <p>From 2015-10-01 to 2017-06-29: Available daily by 5:00 PM Pacific Time.</p> <p>From 2017-06-30 to present: This data set is no longer available.</p> </li> <li> <strong>sales_compensation_billed_revenue</strong> <p>From 2016-12 to 2017-06: Available monthly on the 4th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from two months prior, and up-front software charges (e.g. annual) from one month prior.</p> <p>From 2017-06 to present: Available monthly on the 15th day of the month by 5:00pm Pacific Time. Data includes metered transactions (e.g. hourly) from one month prior, and up-front software charges (e.g. annual) from one month prior.</p> </li> <li> <strong>us_sales_and_use_tax_records</strong> <p>From 2017-02-15 to present: Available monthly on the 15th day of the month by 5:00 PM Pacific Time.</p> </li> </ul> </p>"
        },
        "dataSetPublicationDate":{
          "shape":"DataSetPublicationDate",
          "documentation":"The date a data set was published. For daily data sets, provide a date with day-level granularity for the desired day. For weekly data sets, provide a date with day-level granularity within the desired week (the day value will be ignored). For monthly data sets, provide a date with month-level granularity for the desired month (the day value will be ignored)."
        },
        "roleNameArn":{
          "shape":"RoleNameArn",
          "documentation":"The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services."
        },
        "destinationS3BucketName":{
          "shape":"DestinationS3BucketName",
          "documentation":"The name (friendly name, not ARN) of the destination S3 bucket."
        },
        "destinationS3Prefix":{
          "shape":"DestinationS3Prefix",
          "documentation":"(Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name \"mybucket\" and the prefix \"myprefix/mydatasets\", the output file \"outputfile\" would be published to \"s3://mybucket/myprefix/mydatasets/outputfile\". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root."
        },
        "snsTopicArn":{
          "shape":"SnsTopicArn",
          "documentation":"Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred."
        },
        "customerDefinedValues":{
          "shape":"CustomerDefinedValues",
          "documentation":"(Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file. These key-value pairs can be used to correlated responses with tracking information from other systems."
        }
      },
      "documentation":"Container for the parameters to the GenerateDataSet operation."
    },
    "GenerateDataSetResult":{
      "type":"structure",
      "members":{
        "dataSetRequestId":{
          "shape":"DataSetRequestId",
          "documentation":"A unique identifier representing a specific request to the GenerateDataSet operation. This identifier can be used to correlate a request with notifications from the SNS topic."
        }
      },
      "documentation":"Container for the result of the GenerateDataSet operation."
    },
    "MarketplaceCommerceAnalyticsException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"This message describes details of the error."
        }
      },
      "documentation":"This exception is thrown when an internal service error occurs.",
      "exception":true,
      "fault":true
    },
    "OptionalKey":{
      "type":"string",
      "max":255,
      "min":1
    },
    "OptionalValue":{
      "type":"string",
      "max":255,
      "min":1
    },
    "RoleNameArn":{
      "type":"string",
      "min":1
    },
    "SnsTopicArn":{
      "type":"string",
      "min":1
    },
    "StartSupportDataExportRequest":{
      "type":"structure",
      "required":[
        "dataSetType",
        "fromDate",
        "roleNameArn",
        "destinationS3BucketName",
        "snsTopicArn"
      ],
      "members":{
        "dataSetType":{
          "shape":"SupportDataSetType",
          "documentation":"<p> Specifies the data set type to be written to the output csv file. The data set types customer_support_contacts_data and test_customer_support_contacts_data both result in a csv file containing the following fields: Product Id, Product Code, Customer Guid, Subscription Guid, Subscription Start Date, Organization, AWS Account Id, Given Name, Surname, Telephone Number, Email, Title, Country Code, ZIP Code, Operation Type, and Operation Time. </p> <p> <ul> <li><i>customer_support_contacts_data</i> Customer support contact data. The data set will contain all changes (Creates, Updates, and Deletes) to customer support contact data from the date specified in the from_date parameter.</li> <li><i>test_customer_support_contacts_data</i> An example data set containing static test data in the same format as customer_support_contacts_data</li> </ul> </p>"
        },
        "fromDate":{
          "shape":"FromDate",
          "documentation":"The start date from which to retrieve the data set in UTC. This parameter only affects the customer_support_contacts_data data set type."
        },
        "roleNameArn":{
          "shape":"RoleNameArn",
          "documentation":"The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services."
        },
        "destinationS3BucketName":{
          "shape":"DestinationS3BucketName",
          "documentation":"The name (friendly name, not ARN) of the destination S3 bucket."
        },
        "destinationS3Prefix":{
          "shape":"DestinationS3Prefix",
          "documentation":"(Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name \"mybucket\" and the prefix \"myprefix/mydatasets\", the output file \"outputfile\" would be published to \"s3://mybucket/myprefix/mydatasets/outputfile\". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root."
        },
        "snsTopicArn":{
          "shape":"SnsTopicArn",
          "documentation":"Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred."
        },
        "customerDefinedValues":{
          "shape":"CustomerDefinedValues",
          "documentation":"(Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file."
        }
      },
      "documentation":"Container for the parameters to the StartSupportDataExport operation."
    },
    "StartSupportDataExportResult":{
      "type":"structure",
      "members":{
        "dataSetRequestId":{
          "shape":"DataSetRequestId",
          "documentation":"A unique identifier representing a specific request to the StartSupportDataExport operation. This identifier can be used to correlate a request with notifications from the SNS topic."
        }
      },
      "documentation":"Container for the result of the StartSupportDataExport operation."
    },
    "SupportDataSetType":{
      "type":"string",
      "enum":[
        "customer_support_contacts_data",
        "test_customer_support_contacts_data"
      ],
      "max":255,
      "min":1
    }
  },
  "documentation":"Provides AWS Marketplace business intelligence data on-demand."
}
