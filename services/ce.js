awsim['ce'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-10-25",
    "endpointPrefix":"ce",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"AWS Cost Explorer",
    "serviceFullName":"AWS Cost Explorer Service",
    "serviceId":"Cost Explorer",
    "signatureVersion":"v4",
    "signingName":"ce",
    "targetPrefix":"AWSInsightsIndexService",
    "uid":"ce-2017-10-25"
  },
  "operations":{
    "GetCostAndUsage":{
      "name":"GetCostAndUsage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCostAndUsageRequest"},
      "output":{"shape":"GetCostAndUsageResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"BillExpirationException"},
        {"shape":"DataUnavailableException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"RequestChangedException"}
      ],
      "documentation":"<p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <code> <a href=\"http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html\">GetDimensionValues</a> </code> operation. Master accounts in an organization in AWS Organizations have access to all member accounts.</p>"
    },
    "GetDimensionValues":{
      "name":"GetDimensionValues",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDimensionValuesRequest"},
      "output":{"shape":"GetDimensionValuesResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"BillExpirationException"},
        {"shape":"DataUnavailableException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"RequestChangedException"}
      ],
      "documentation":"<p>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. </p>"
    },
    "GetReservationCoverage":{
      "name":"GetReservationCoverage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetReservationCoverageRequest"},
      "output":{"shape":"GetReservationCoverageResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"DataUnavailableException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Retrieves the reservation coverage for your account. This allows you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's master account can see the coverage of the associated member accounts. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>"
    },
    "GetReservationPurchaseRecommendation":{
      "name":"GetReservationPurchaseRecommendation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetReservationPurchaseRecommendationRequest"},
      "output":{"shape":"GetReservationPurchaseRecommendationResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"DataUnavailableException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings. </p> <p>For example, AWS automatically aggregates your EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for <code>c4.large</code>, because that is the smallest size instance in the c4 instance family.</p>"
    },
    "GetReservationUtilization":{
      "name":"GetReservationUtilization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetReservationUtilizationRequest"},
      "output":{"shape":"GetReservationUtilizationResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"DataUnavailableException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Retrieves the reservation utilization for your account. Master accounts in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>"
    },
    "GetTags":{
      "name":"GetTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTagsRequest"},
      "output":{"shape":"GetTagsResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"BillExpirationException"},
        {"shape":"DataUnavailableException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"RequestChangedException"}
      ],
      "documentation":"<p>Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. </p>"
    }
  },
  "shapes":{
    "AccountScope":{
      "type":"string",
      "enum":[
        "PAYER",
        "LINKED"
      ]
    },
    "AmortizedRecurringFee":{"type":"string"},
    "AmortizedUpfrontFee":{"type":"string"},
    "AttributeType":{"type":"string"},
    "AttributeValue":{"type":"string"},
    "Attributes":{
      "type":"map",
      "key":{"shape":"AttributeType"},
      "value":{"shape":"AttributeValue"}
    },
    "BillExpirationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The requested report expired. Update the date interval and try again.</p>",
      "exception":true
    },
    "Context":{
      "type":"string",
      "enum":[
        "COST_AND_USAGE",
        "RESERVATIONS"
      ]
    },
    "Coverage":{
      "type":"structure",
      "members":{
        "CoverageHours":{
          "shape":"CoverageHours",
          "documentation":"<p>The amount of instance usage that a reservation covered, in hours.</p>"
        }
      },
      "documentation":"<p>The amount of instance usage that a reservation covered.</p>"
    },
    "CoverageByTime":{
      "type":"structure",
      "members":{
        "TimePeriod":{
          "shape":"DateInterval",
          "documentation":"<p>The period over which this coverage was used.</p>"
        },
        "Groups":{
          "shape":"ReservationCoverageGroups",
          "documentation":"<p>The groups of instances that are covered by a reservation.</p>"
        },
        "Total":{
          "shape":"Coverage",
          "documentation":"<p>The total reservation coverage, in hours.</p>"
        }
      },
      "documentation":"<p>Reservation coverage for a specified period, in hours.</p>"
    },
    "CoverageHours":{
      "type":"structure",
      "members":{
        "OnDemandHours":{
          "shape":"OnDemandHours",
          "documentation":"<p>The number of instance running hours that are covered by On-Demand Instances.</p>"
        },
        "ReservedHours":{
          "shape":"ReservedHours",
          "documentation":"<p>The number of instance running hours that are covered by reservations.</p>"
        },
        "TotalRunningHours":{
          "shape":"TotalRunningHours",
          "documentation":"<p>The total instance usage, in hours.</p>"
        },
        "CoverageHoursPercentage":{
          "shape":"CoverageHoursPercentage",
          "documentation":"<p>The percentage of instance hours that are covered by a reservation.</p>"
        }
      },
      "documentation":"<p>How long a running instance either used a reservation or was On-Demand.</p>"
    },
    "CoverageHoursPercentage":{"type":"string"},
    "CoveragesByTime":{
      "type":"list",
      "member":{"shape":"CoverageByTime"}
    },
    "DataUnavailableException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The requested data is unavailable.</p>",
      "exception":true
    },
    "DateInterval":{
      "type":"structure",
      "required":[
        "Start",
        "End"
      ],
      "members":{
        "Start":{
          "shape":"YearMonthDay",
          "documentation":"<p>The beginning of the time period that you want the usage and costs for. The start date is inclusive. For example, if <code>start</code> is <code>2017-01-01</code>, AWS retrieves cost and usage data starting at <code>2017-01-01</code> up to the end date.</p>"
        },
        "End":{
          "shape":"YearMonthDay",
          "documentation":"<p>The end of the time period that you want the usage and costs for. The end date is exclusive. For example, if <code>end</code> is <code>2017-05-01</code>, AWS retrieves cost and usage data from the start date up to, but not including, <code>2017-05-01</code>.</p>"
        }
      },
      "documentation":"<p>The time period that you want the usage and costs for. </p>"
    },
    "Dimension":{
      "type":"string",
      "enum":[
        "AZ",
        "INSTANCE_TYPE",
        "LINKED_ACCOUNT",
        "OPERATION",
        "PURCHASE_TYPE",
        "REGION",
        "SERVICE",
        "USAGE_TYPE",
        "USAGE_TYPE_GROUP",
        "RECORD_TYPE",
        "OPERATING_SYSTEM",
        "TENANCY",
        "SCOPE",
        "PLATFORM",
        "SUBSCRIPTION_ID",
        "LEGAL_ENTITY_NAME",
        "DEPLOYMENT_OPTION",
        "DATABASE_ENGINE",
        "CACHE_ENGINE",
        "INSTANCE_TYPE_FAMILY"
      ]
    },
    "DimensionValues":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"Dimension",
          "documentation":"<p>The names of the metadata types that you can use to filter and group your results. For example, <code>AZ</code> returns a list of Availability Zones.</p>"
        },
        "Values":{
          "shape":"Values",
          "documentation":"<p>The metadata values that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.</p>"
        }
      },
      "documentation":"<p>The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.</p>"
    },
    "DimensionValuesWithAttributes":{
      "type":"structure",
      "members":{
        "Value":{
          "shape":"Value",
          "documentation":"<p>The value of a dimension with a specific attribute.</p>"
        },
        "Attributes":{
          "shape":"Attributes",
          "documentation":"<p>The attribute that applies to a specific <code>Dimension</code>.</p>"
        }
      },
      "documentation":"<p>The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.</p>"
    },
    "DimensionValuesWithAttributesList":{
      "type":"list",
      "member":{"shape":"DimensionValuesWithAttributes"}
    },
    "EC2InstanceDetails":{
      "type":"structure",
      "members":{
        "Family":{
          "shape":"GenericString",
          "documentation":"<p>The instance family of the recommended reservation.</p>"
        },
        "InstanceType":{
          "shape":"GenericString",
          "documentation":"<p>The type of instance that AWS recommends.</p>"
        },
        "Region":{
          "shape":"GenericString",
          "documentation":"<p>The AWS Region of the recommended reservation.</p>"
        },
        "AvailabilityZone":{
          "shape":"GenericString",
          "documentation":"<p>The Availability Zone of the recommended reservation.</p>"
        },
        "Platform":{
          "shape":"GenericString",
          "documentation":"<p>The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.</p>"
        },
        "Tenancy":{
          "shape":"GenericString",
          "documentation":"<p>Whether the recommended reservation is dedicated or shared.</p>"
        },
        "CurrentGeneration":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommendation is for a current generation instance. </p>"
        },
        "SizeFlexEligible":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommended reservation is size flexible.</p>"
        }
      },
      "documentation":"<p>Details about the EC2 instances that AWS recommends that you purchase.</p>"
    },
    "EC2Specification":{
      "type":"structure",
      "members":{
        "OfferingClass":{
          "shape":"OfferingClass",
          "documentation":"<p>Whether you want a recommendation for standard or convertible reservations.</p>"
        }
      },
      "documentation":"<p>The EC2 hardware specifications that you want AWS to provide recommendations for.</p>"
    },
    "ESInstanceDetails":{
      "type":"structure",
      "members":{
        "InstanceClass":{
          "shape":"GenericString",
          "documentation":"<p>The class of instance that AWS recommends.</p>"
        },
        "InstanceSize":{
          "shape":"GenericString",
          "documentation":"<p>The size of instance that AWS recommends.</p>"
        },
        "Region":{
          "shape":"GenericString",
          "documentation":"<p>The AWS Region of the recommended reservation.</p>"
        },
        "CurrentGeneration":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommendation is for a current generation instance.</p>"
        },
        "SizeFlexEligible":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommended reservation is size flexible.</p>"
        }
      },
      "documentation":"<p>Details about the ES instances that AWS recommends that you purchase.</p>"
    },
    "ElastiCacheInstanceDetails":{
      "type":"structure",
      "members":{
        "Family":{
          "shape":"GenericString",
          "documentation":"<p>The instance family of the recommended reservation.</p>"
        },
        "NodeType":{
          "shape":"GenericString",
          "documentation":"<p>The type of node that AWS recommends.</p>"
        },
        "Region":{
          "shape":"GenericString",
          "documentation":"<p>The AWS Region of the recommended reservation.</p>"
        },
        "ProductDescription":{
          "shape":"GenericString",
          "documentation":"<p>The description of the recommended reservation.</p>"
        },
        "CurrentGeneration":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommendation is for a current generation instance.</p>"
        },
        "SizeFlexEligible":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommended reservation is size flexible.</p>"
        }
      },
      "documentation":"<p>Details about the ElastiCache instances that AWS recommends that you purchase.</p>"
    },
    "Entity":{"type":"string"},
    "ErrorMessage":{"type":"string"},
    "Estimated":{"type":"boolean"},
    "Expression":{
      "type":"structure",
      "members":{
        "Or":{
          "shape":"Expressions",
          "documentation":"<p>Return results that match either <code>Dimension</code> object.</p>"
        },
        "And":{
          "shape":"Expressions",
          "documentation":"<p>Return results that match both <code>Dimension</code> objects.</p>"
        },
        "Not":{
          "shape":"Expression",
          "documentation":"<p>Return results that don't match a <code>Dimension</code> object.</p>"
        },
        "Dimensions":{
          "shape":"DimensionValues",
          "documentation":"<p>The specific <code>Dimension</code> to use for <code>Expression</code>.</p>"
        },
        "Tags":{
          "shape":"TagValues",
          "documentation":"<p>The specific <code>Tag</code> to use for <code>Expression</code>.</p>"
        }
      },
      "documentation":"<p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>INSTANCE_TYPE==m4.xlarge OR INSTANCE_TYPE==c4.large</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ \"Dimensions\": { \"Key\": \"INSTANCE_TYPE\", \"Values\": [ \"m4.xlarge\", “c4.large” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((INSTANCE_TYPE == m4.large OR INSTANCE_TYPE == m3.large) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ \"And\": [ {\"Or\": [ {\"Dimensions\": { \"Key\": \"INSTANCE_TYPE\", \"Values\": [ \"m4.x.large\", \"c4.large\" ] }}, {\"Tags\": { \"Key\": \"TagName\", \"Values\": [\"Value1\"] } } ]}, {\"Not\": {\"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [\"DataTransfer\"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { \"And\": [ ... ], \"DimensionValues\": { \"Dimension\": \"USAGE_TYPE\", \"Values\": [ \"DataTransfer\" ] } } </code> </p> </li> </ul>"
    },
    "Expressions":{
      "type":"list",
      "member":{"shape":"Expression"}
    },
    "GenericBoolean":{"type":"boolean"},
    "GenericString":{"type":"string"},
    "GetCostAndUsageRequest":{
      "type":"structure",
      "members":{
        "TimePeriod":{
          "shape":"DateInterval",
          "documentation":"<p>Sets the start and end dates for retrieving AWS costs. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>"
        },
        "Granularity":{
          "shape":"Granularity",
          "documentation":"<p>Sets the AWS cost granularity to <code>MONTHLY</code> or <code>DAILY</code>. If <code>Granularity</code> isn't set, the response object doesn't include the <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>. </p>"
        },
        "Filter":{
          "shape":"Expression",
          "documentation":"<p>Filters AWS costs by different dimensions. For example, you can specify <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated with that account's usage of that service. You can nest <code>Expression</code> objects to define any combination of dimension filters. For more information, see <a href=\"http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a>. </p>"
        },
        "Metrics":{
          "shape":"MetricNames",
          "documentation":"<p>Which metrics are returned in the query. For more information about blended and unblended rates, see <a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/\">Why does the \"blended\" annotation appear on some line items in my bill?</a>. </p> <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>.</p> <note> <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate <code>usageQuantity</code> across all of EC2, the results aren't meaningful because EC2 compute hours and data transfer are measured in different units (for example, hours vs. GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by <code>UsageType</code> or <code>UsageTypeGroups</code>. </p> </note> <p> <code>Metrics</code> is required for <code>GetCostAndUsage</code> requests.</p>"
        },
        "GroupBy":{
          "shape":"GroupDefinitions",
          "documentation":"<p>You can group AWS costs using up to two different groups, either dimensions, tag keys, or both.</p> <p>When you group by tag key, you get all tag values, including empty strings.</p> <p>Valid values are <code>AZ</code>, <code>INSTANCE_TYPE</code>, <code>LEGAL_ENTITY_NAME</code>, <code>LINKED_ACCOUNT</code>, <code>OPERATION</code>, <code>PLATFORM</code>, <code>PURCHASE_TYPE</code>, <code>SERVICE</code>, <code>TAGS</code>, <code>TENANCY</code>, and <code>USAGE_TYPE</code>.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        }
      }
    },
    "GetCostAndUsageResponse":{
      "type":"structure",
      "members":{
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        },
        "GroupDefinitions":{
          "shape":"GroupDefinitions",
          "documentation":"<p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code> parameters in the request.</p>"
        },
        "ResultsByTime":{
          "shape":"ResultsByTime",
          "documentation":"<p>The time period that is covered by the results in the response.</p>"
        }
      }
    },
    "GetDimensionValuesRequest":{
      "type":"structure",
      "required":[
        "TimePeriod",
        "Dimension"
      ],
      "members":{
        "SearchString":{
          "shape":"SearchString",
          "documentation":"<p>The value that you want to search the filter values for.</p>"
        },
        "TimePeriod":{
          "shape":"DateInterval",
          "documentation":"<p>The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>"
        },
        "Dimension":{
          "shape":"Dimension",
          "documentation":"<p>The name of the dimension. Each <code>Dimension</code> is available for different a <code>Context</code>. For more information, see <code>Context</code>.</p>"
        },
        "Context":{
          "shape":"Context",
          "documentation":"<p>The context for the call to <code>GetDimensionValues</code>. This can be <code>RESERVATIONS</code> or <code>COST_AND_USAGE</code>. The default value is <code>COST_AND_USAGE</code>. If the context is set to <code>RESERVATIONS</code>, the resulting dimension values can be used in the <code>GetReservationUtilization</code> operation. If the context is set to <code>COST_AND_USAGE</code> the resulting dimension values can be used in the <code>GetCostAndUsage</code> operation.</p> <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p> </li> <li> <p>INSTANCE_TYPE - The type of EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.</p> </li> <li> <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p> </li> <li> <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p> </li> <li> <p>PLATFORM - The EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.</p> </li> <li> <p>SERVICE - The AWS service such as Amazon DynamoDB.</p> </li> <li> <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation includes a unit attribute. Examples include GB and Hrs.</p> </li> <li> <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.</p> </li> <li> <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.</p> </li> </ul> <p>If you set the context to <code>RESERVATIONS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p> </li> <li> <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p> </li> <li> <p>INSTANCE_TYPE - The type of EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.</p> </li> <li> <p>PLATFORM - The EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>REGION - The AWS Region.</p> </li> <li> <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p> </li> <li> <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p> </li> <li> <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p> </li> </ul>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        }
      }
    },
    "GetDimensionValuesResponse":{
      "type":"structure",
      "required":[
        "DimensionValues",
        "ReturnSize",
        "TotalSize"
      ],
      "members":{
        "DimensionValues":{
          "shape":"DimensionValuesWithAttributesList",
          "documentation":"<p>The filters that you used to filter your request. Some dimensions are available only for a specific context:</p> <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p> </li> <li> <p>INSTANCE_TYPE - The type of EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.</p> </li> <li> <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p> </li> <li> <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p> </li> <li> <p>PLATFORM - The EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.</p> </li> <li> <p>SERVICE - The AWS service such as Amazon DynamoDB.</p> </li> <li> <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation includes a unit attribute. Examples include GB and Hrs.</p> </li> <li> <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.</p> </li> <li> <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.</p> </li> </ul> <p>If you set the context to <code>RESERVATIONS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p> </li> <li> <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p> </li> <li> <p>INSTANCE_TYPE - The type of EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.</p> </li> <li> <p>PLATFORM - The EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>REGION - The AWS Region.</p> </li> <li> <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p> </li> <li> <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p> </li> <li> <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p> </li> </ul>"
        },
        "ReturnSize":{
          "shape":"PageSize",
          "documentation":"<p>The number of results that AWS returned at one time.</p>"
        },
        "TotalSize":{
          "shape":"PageSize",
          "documentation":"<p>The total number of search results.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        }
      }
    },
    "GetReservationCoverageRequest":{
      "type":"structure",
      "required":["TimePeriod"],
      "members":{
        "TimePeriod":{
          "shape":"DateInterval",
          "documentation":"<p>The start and end dates of the period for which you want to retrieve data about reservation coverage. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>"
        },
        "GroupBy":{
          "shape":"GroupDefinitions",
          "documentation":"<p>You can group the data by the following attributes:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul>"
        },
        "Granularity":{
          "shape":"Granularity",
          "documentation":"<p>The granularity of the AWS cost data for the reservation. Valid values are <code>MONTHLY</code> and <code>DAILY</code>.</p> <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set, the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.</p>"
        },
        "Filter":{
          "shape":"Expression",
          "documentation":"<p>Filters utilization data by dimensions. You can filter by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p> <code>GetReservationCoverage</code> uses the same <code> <a href=\"http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> </code> object as the other operations, but only <code>AND</code> is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR'd together.</p> <p>If you don't provide a <code>SERVICE</code> filter, Cost Explorer defaults to EC2.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        }
      },
      "documentation":"<p>You can use the following request parameters to query for how much of your instance usage is covered by a reservation.</p>"
    },
    "GetReservationCoverageResponse":{
      "type":"structure",
      "required":["CoveragesByTime"],
      "members":{
        "CoveragesByTime":{
          "shape":"CoveragesByTime",
          "documentation":"<p>The amount of time that your reservations covered.</p>"
        },
        "Total":{
          "shape":"Coverage",
          "documentation":"<p>The total amount of instance usage that is covered by a reservation.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        }
      }
    },
    "GetReservationPurchaseRecommendationRequest":{
      "type":"structure",
      "required":["Service"],
      "members":{
        "AccountId":{
          "shape":"GenericString",
          "documentation":"<p>The account ID that is associated with the recommendation. </p>"
        },
        "Service":{
          "shape":"GenericString",
          "documentation":"<p>The specific service that you want recommendations for.</p>"
        },
        "AccountScope":{
          "shape":"AccountScope",
          "documentation":"<p>The account scope that you want recommendations for. <code>PAYER</code> means that AWS includes the master account and any member accounts when it calculates its recommendations. <code>LINKED</code> means that AWS includes only member accounts when it calculates its recommendations.</p> <p>Valid values are <code>PAYER</code> and <code>LINKED</code>.</p>"
        },
        "LookbackPeriodInDays":{
          "shape":"LookbackPeriodInDays",
          "documentation":"<p>The number of previous days that you want AWS to consider when it calculates your recommendations.</p>"
        },
        "TermInYears":{
          "shape":"TermInYears",
          "documentation":"<p>The reservation term that you want recommendations for.</p>"
        },
        "PaymentOption":{
          "shape":"PaymentOption",
          "documentation":"<p>The reservation purchase option that you want recommendations for.</p>"
        },
        "ServiceSpecification":{
          "shape":"ServiceSpecification",
          "documentation":"<p>The hardware specifications for the service instances that you want recommendations for, such as standard or convertible EC2 instances.</p>"
        },
        "PageSize":{
          "shape":"NonNegativeInteger",
          "documentation":"<p>The number of recommendations that you want returned in a single response object.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The pagination token that indicates the next set of results that you want to retrieve.</p>"
        }
      }
    },
    "GetReservationPurchaseRecommendationResponse":{
      "type":"structure",
      "members":{
        "Metadata":{
          "shape":"ReservationPurchaseRecommendationMetadata",
          "documentation":"<p>Information about this specific recommendation call, such as the time stamp for when Cost Explorer generated this recommendation.</p>"
        },
        "Recommendations":{
          "shape":"ReservationPurchaseRecommendations",
          "documentation":"<p>Recommendations for reservations to purchase.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The pagination token for the next set of retrievable results.</p>"
        }
      }
    },
    "GetReservationUtilizationRequest":{
      "type":"structure",
      "required":["TimePeriod"],
      "members":{
        "TimePeriod":{
          "shape":"DateInterval",
          "documentation":"<p>Sets the start and end dates for retrieving Reserved Instance (RI) utilization. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>"
        },
        "GroupBy":{
          "shape":"GroupDefinitions",
          "documentation":"<p>Groups only by <code>SUBSCRIPTION_ID</code>. Metadata is included.</p>"
        },
        "Granularity":{
          "shape":"Granularity",
          "documentation":"<p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set, the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>. If both <code>GroupBy</code> and <code>Granularity</code> aren't set, <code>GetReservationUtilization</code> defaults to <code>DAILY</code>.</p>"
        },
        "Filter":{
          "shape":"Expression",
          "documentation":"<p>Filters utilization data by dimensions. You can filter by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>SCOPE</p> </li> <li> <p>TENANCY</p> </li> </ul> <p> <code>GetReservationUtilization</code> uses the same <code> <a href=\"http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> </code> object as the other operations, but only <code>AND</code> is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR'd together.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        }
      }
    },
    "GetReservationUtilizationResponse":{
      "type":"structure",
      "required":["UtilizationsByTime"],
      "members":{
        "UtilizationsByTime":{
          "shape":"UtilizationsByTime",
          "documentation":"<p>The amount of time that you utilized your RIs.</p>"
        },
        "Total":{
          "shape":"ReservationAggregates",
          "documentation":"<p>The total amount of time that you utilized your RIs.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        }
      }
    },
    "GetTagsRequest":{
      "type":"structure",
      "required":["TimePeriod"],
      "members":{
        "SearchString":{
          "shape":"SearchString",
          "documentation":"<p>The value that you want to search for.</p>"
        },
        "TimePeriod":{
          "shape":"DateInterval",
          "documentation":"<p>The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>"
        },
        "TagKey":{
          "shape":"TagKey",
          "documentation":"<p>The key of the tag that you want to return values for.</p>"
        },
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        }
      }
    },
    "GetTagsResponse":{
      "type":"structure",
      "required":[
        "Tags",
        "ReturnSize",
        "TotalSize"
      ],
      "members":{
        "NextPageToken":{
          "shape":"NextPageToken",
          "documentation":"<p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags that match your request.</p>"
        },
        "ReturnSize":{
          "shape":"PageSize",
          "documentation":"<p>The number of query results that AWS returns at a time.</p>"
        },
        "TotalSize":{
          "shape":"PageSize",
          "documentation":"<p>The total number of query results.</p>"
        }
      }
    },
    "Granularity":{
      "type":"string",
      "enum":[
        "DAILY",
        "MONTHLY"
      ]
    },
    "Group":{
      "type":"structure",
      "members":{
        "Keys":{
          "shape":"Keys",
          "documentation":"<p>The keys that are included in this group.</p>"
        },
        "Metrics":{
          "shape":"Metrics",
          "documentation":"<p>The metrics that are included in this group.</p>"
        }
      },
      "documentation":"<p>One level of grouped data within the results.</p>"
    },
    "GroupDefinition":{
      "type":"structure",
      "members":{
        "Type":{
          "shape":"GroupDefinitionType",
          "documentation":"<p>The string that represents the type of group.</p>"
        },
        "Key":{
          "shape":"GroupDefinitionKey",
          "documentation":"<p>The string that represents a key for a specified group.</p>"
        }
      },
      "documentation":"<p>Represents a group when you specify a group by criteria, or in the response to a query with a specific grouping.</p>"
    },
    "GroupDefinitionKey":{"type":"string"},
    "GroupDefinitionType":{
      "type":"string",
      "enum":[
        "DIMENSION",
        "TAG"
      ]
    },
    "GroupDefinitions":{
      "type":"list",
      "member":{"shape":"GroupDefinition"}
    },
    "Groups":{
      "type":"list",
      "member":{"shape":"Group"}
    },
    "InstanceDetails":{
      "type":"structure",
      "members":{
        "EC2InstanceDetails":{
          "shape":"EC2InstanceDetails",
          "documentation":"<p>The EC2 instances that AWS recommends that you purchase.</p>"
        },
        "RDSInstanceDetails":{
          "shape":"RDSInstanceDetails",
          "documentation":"<p>The RDS instances that AWS recommends that you purchase.</p>"
        },
        "RedshiftInstanceDetails":{
          "shape":"RedshiftInstanceDetails",
          "documentation":"<p>The Amazon Redshift instances that AWS recommends that you purchase.</p>"
        },
        "ElastiCacheInstanceDetails":{
          "shape":"ElastiCacheInstanceDetails",
          "documentation":"<p>The ElastiCache instances that AWS recommends that you purchase.</p>"
        },
        "ESInstanceDetails":{
          "shape":"ESInstanceDetails",
          "documentation":"<p>The Amazon ES instances that AWS recommends that you purchase.</p>"
        }
      },
      "documentation":"<p>Details about the instances that AWS recommends that you purchase.</p>"
    },
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The pagination token is invalid. Try again without a pagination token.</p>",
      "exception":true
    },
    "Key":{"type":"string"},
    "Keys":{
      "type":"list",
      "member":{"shape":"Key"}
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>You made too many calls in a short period of time. Try again later.</p>",
      "exception":true
    },
    "LookbackPeriodInDays":{
      "type":"string",
      "enum":[
        "SEVEN_DAYS",
        "THIRTY_DAYS",
        "SIXTY_DAYS"
      ]
    },
    "MetricAmount":{"type":"string"},
    "MetricName":{"type":"string"},
    "MetricNames":{
      "type":"list",
      "member":{"shape":"MetricName"}
    },
    "MetricUnit":{"type":"string"},
    "MetricValue":{
      "type":"structure",
      "members":{
        "Amount":{
          "shape":"MetricAmount",
          "documentation":"<p>The actual number that represents the metric.</p>"
        },
        "Unit":{
          "shape":"MetricUnit",
          "documentation":"<p>The unit that the metric is given in.</p>"
        }
      },
      "documentation":"<p>The aggregated value for a metric.</p>"
    },
    "Metrics":{
      "type":"map",
      "key":{"shape":"MetricName"},
      "value":{"shape":"MetricValue"}
    },
    "NetRISavings":{"type":"string"},
    "NextPageToken":{"type":"string"},
    "NonNegativeInteger":{
      "type":"integer",
      "min":0
    },
    "OfferingClass":{
      "type":"string",
      "enum":[
        "STANDARD",
        "CONVERTIBLE"
      ]
    },
    "OnDemandCostOfRIHoursUsed":{"type":"string"},
    "OnDemandHours":{"type":"string"},
    "PageSize":{"type":"integer"},
    "PaymentOption":{
      "type":"string",
      "enum":[
        "NO_UPFRONT",
        "PARTIAL_UPFRONT",
        "ALL_UPFRONT",
        "LIGHT_UTILIZATION",
        "MEDIUM_UTILIZATION",
        "HEAVY_UTILIZATION"
      ]
    },
    "PurchasedHours":{"type":"string"},
    "RDSInstanceDetails":{
      "type":"structure",
      "members":{
        "Family":{
          "shape":"GenericString",
          "documentation":"<p>The instance family of the recommended reservation.</p>"
        },
        "InstanceType":{
          "shape":"GenericString",
          "documentation":"<p>The type of instance that AWS recommends.</p>"
        },
        "Region":{
          "shape":"GenericString",
          "documentation":"<p>The AWS Region of the recommended reservation.</p>"
        },
        "DatabaseEngine":{
          "shape":"GenericString",
          "documentation":"<p>The database engine that the recommended reservation supports.</p>"
        },
        "DatabaseEdition":{
          "shape":"GenericString",
          "documentation":"<p>The database edition that the recommended reservation supports.</p>"
        },
        "DeploymentOption":{
          "shape":"GenericString",
          "documentation":"<p>Whether the recommendation is for a reservation in a single Availability Zone or a reservation with a backup in a second Availability Zone.</p>"
        },
        "LicenseModel":{
          "shape":"GenericString",
          "documentation":"<p>The license model that the recommended reservation supports.</p>"
        },
        "CurrentGeneration":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommendation is for a current generation instance. </p>"
        },
        "SizeFlexEligible":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommended reservation is size flexible.</p>"
        }
      },
      "documentation":"<p>Details about the RDS instances that AWS recommends that you purchase.</p>"
    },
    "RedshiftInstanceDetails":{
      "type":"structure",
      "members":{
        "Family":{
          "shape":"GenericString",
          "documentation":"<p>The instance family of the recommended reservation.</p>"
        },
        "NodeType":{
          "shape":"GenericString",
          "documentation":"<p>The type of node that AWS recommends.</p>"
        },
        "Region":{
          "shape":"GenericString",
          "documentation":"<p>The AWS Region of the recommended reservation.</p>"
        },
        "CurrentGeneration":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommendation is for a current generation instance.</p>"
        },
        "SizeFlexEligible":{
          "shape":"GenericBoolean",
          "documentation":"<p>Whether the recommended reservation is size flexible.</p>"
        }
      },
      "documentation":"<p>Details about the Amazon Redshift instances that AWS recommends that you purchase.</p>"
    },
    "RequestChangedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Your request parameters changed between pages. Try again with the old parameters or without a pagination token.</p>",
      "exception":true
    },
    "ReservationAggregates":{
      "type":"structure",
      "members":{
        "UtilizationPercentage":{
          "shape":"UtilizationPercentage",
          "documentation":"<p>The percentage of RI time that you used.</p>"
        },
        "PurchasedHours":{
          "shape":"PurchasedHours",
          "documentation":"<p>How many RI hours that you purchased.</p>"
        },
        "TotalActualHours":{
          "shape":"TotalActualHours",
          "documentation":"<p>The total number of RI hours that you used.</p>"
        },
        "UnusedHours":{
          "shape":"UnusedHours",
          "documentation":"<p>The number of RI hours that you didn't use.</p>"
        },
        "OnDemandCostOfRIHoursUsed":{
          "shape":"OnDemandCostOfRIHoursUsed",
          "documentation":"<p>How much your RIs would cost if charged On-Demand rates.</p>"
        },
        "NetRISavings":{
          "shape":"NetRISavings",
          "documentation":"<p>How much you saved due to purchasing and utilizing RIs. AWS calculates this by subtracting <code>TotalAmortizedFee</code> from <code>OnDemandCostOfRIHoursUsed</code>.</p>"
        },
        "TotalPotentialRISavings":{
          "shape":"TotalPotentialRISavings",
          "documentation":"<p>How much you could save if you use your entire reservation.</p>"
        },
        "AmortizedUpfrontFee":{
          "shape":"AmortizedUpfrontFee",
          "documentation":"<p>The upfront cost of your RI, amortized over the RI period.</p>"
        },
        "AmortizedRecurringFee":{
          "shape":"AmortizedRecurringFee",
          "documentation":"<p>The monthly cost of your RI, amortized over the RI period.</p>"
        },
        "TotalAmortizedFee":{
          "shape":"TotalAmortizedFee",
          "documentation":"<p>The total cost of your RI, amortized over the RI period.</p>"
        }
      },
      "documentation":"<p>The aggregated numbers for your Reserved Instance (RI) usage.</p>"
    },
    "ReservationCoverageGroup":{
      "type":"structure",
      "members":{
        "Attributes":{
          "shape":"Attributes",
          "documentation":"<p>The attributes for this group of reservations.</p>"
        },
        "Coverage":{
          "shape":"Coverage",
          "documentation":"<p>How much instance usage this group of reservations covered.</p>"
        }
      },
      "documentation":"<p>A group of reservations that share a set of attributes.</p>"
    },
    "ReservationCoverageGroups":{
      "type":"list",
      "member":{"shape":"ReservationCoverageGroup"}
    },
    "ReservationGroupKey":{"type":"string"},
    "ReservationGroupValue":{"type":"string"},
    "ReservationPurchaseRecommendation":{
      "type":"structure",
      "members":{
        "AccountScope":{
          "shape":"AccountScope",
          "documentation":"<p>The account scope that AWS recommends that you purchase this instance for. For example, you can purchase this reservation for an entire organization in AWS Organizations.</p>"
        },
        "LookbackPeriodInDays":{
          "shape":"LookbackPeriodInDays",
          "documentation":"<p>How many days of previous usage that AWS considers when making this recommendation.</p>"
        },
        "TermInYears":{
          "shape":"TermInYears",
          "documentation":"<p>The term of the reservation that you want recommendations for, in years.</p>"
        },
        "PaymentOption":{
          "shape":"PaymentOption",
          "documentation":"<p>The payment option for the reservation. For example, <code>AllUpfront</code> or <code>NoUpfront</code>.</p>"
        },
        "ServiceSpecification":{
          "shape":"ServiceSpecification",
          "documentation":"<p>Hardware specifications for the service that you want recommendations for.</p>"
        },
        "RecommendationDetails":{
          "shape":"ReservationPurchaseRecommendationDetails",
          "documentation":"<p>Details about the recommended purchases.</p>"
        },
        "RecommendationSummary":{
          "shape":"ReservationPurchaseRecommendationSummary",
          "documentation":"<p>A summary about the recommended purchase.</p>"
        }
      },
      "documentation":"<p>A specific reservation that AWS recommends for purchase.</p>"
    },
    "ReservationPurchaseRecommendationDetail":{
      "type":"structure",
      "members":{
        "InstanceDetails":{
          "shape":"InstanceDetails",
          "documentation":"<p>Details about the instances that AWS recommends that you purchase.</p>"
        },
        "RecommendedNumberOfInstancesToPurchase":{
          "shape":"GenericString",
          "documentation":"<p>The number of instances that AWS recommends that you purchase.</p>"
        },
        "RecommendedNormalizedUnitsToPurchase":{
          "shape":"GenericString",
          "documentation":"<p>The number of normalized units that AWS recommends that you purchase.</p>"
        },
        "MinimumNumberOfInstancesUsedPerHour":{
          "shape":"GenericString",
          "documentation":"<p>The minimum number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>"
        },
        "MinimumNormalizedUnitsUsedPerHour":{
          "shape":"GenericString",
          "documentation":"<p>The minimum number of hours that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>"
        },
        "MaximumNumberOfInstancesUsedPerHour":{
          "shape":"GenericString",
          "documentation":"<p>The maximum number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>"
        },
        "MaximumNormalizedUnitsUsedPerHour":{
          "shape":"GenericString",
          "documentation":"<p>The maximum number of normalized units that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>"
        },
        "AverageNumberOfInstancesUsedPerHour":{
          "shape":"GenericString",
          "documentation":"<p>The average number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>"
        },
        "AverageNormalizedUnitsUsedPerHour":{
          "shape":"GenericString",
          "documentation":"<p>The average number of normalized units that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>"
        },
        "AverageUtilization":{
          "shape":"GenericString",
          "documentation":"<p>The average utilization of your instances. AWS uses this to calculate your recommended reservation purchases.</p>"
        },
        "EstimatedBreakEvenInMonths":{
          "shape":"GenericString",
          "documentation":"<p>How long AWS estimates that it takes for this instance to start saving you money, in months.</p>"
        },
        "CurrencyCode":{
          "shape":"GenericString",
          "documentation":"<p>The currency code that AWS used to calculate the costs for this instance.</p>"
        },
        "EstimatedMonthlySavingsAmount":{
          "shape":"GenericString",
          "documentation":"<p>How much AWS estimates that this specific recommendation could save you in a month.</p>"
        },
        "EstimatedMonthlySavingsPercentage":{
          "shape":"GenericString",
          "documentation":"<p>How much AWS estimates that this specific recommendation could save you in a month, as a percentage of your overall costs.</p>"
        },
        "EstimatedMonthlyOnDemandCost":{
          "shape":"GenericString",
          "documentation":"<p>How much AWS estimates that you spend on On-Demand Instances in a month.</p>"
        },
        "EstimatedReservationCostForLookbackPeriod":{
          "shape":"GenericString",
          "documentation":"<p>How much AWS estimates that you would have spent for all usage during the specified historical period if you had had a reservation.</p>"
        },
        "UpfrontCost":{
          "shape":"GenericString",
          "documentation":"<p>How much purchasing this instance costs you upfront.</p>"
        },
        "RecurringStandardMonthlyCost":{
          "shape":"GenericString",
          "documentation":"<p>How much purchasing this instance costs you on a monthly basis.</p>"
        }
      },
      "documentation":"<p>Details about your recommended reservation purchase.</p>"
    },
    "ReservationPurchaseRecommendationDetails":{
      "type":"list",
      "member":{"shape":"ReservationPurchaseRecommendationDetail"}
    },
    "ReservationPurchaseRecommendationMetadata":{
      "type":"structure",
      "members":{
        "RecommendationId":{
          "shape":"GenericString",
          "documentation":"<p>The ID for this specific recommendation.</p>"
        },
        "GenerationTimestamp":{
          "shape":"GenericString",
          "documentation":"<p>The time stamp for when AWS made this recommendation.</p>"
        }
      },
      "documentation":"<p>Information about this specific recommendation, such as the time stamp for when AWS made a specific recommendation.</p>"
    },
    "ReservationPurchaseRecommendationSummary":{
      "type":"structure",
      "members":{
        "TotalEstimatedMonthlySavingsAmount":{
          "shape":"GenericString",
          "documentation":"<p>The total amount that AWS estimates that this recommendation could save you in a month.</p>"
        },
        "TotalEstimatedMonthlySavingsPercentage":{
          "shape":"GenericString",
          "documentation":"<p>The total amount that AWS estimates that this recommendation could save you in a month, as a percentage of your costs.</p>"
        },
        "CurrencyCode":{
          "shape":"GenericString",
          "documentation":"<p>The currency code used for this recommendation.</p>"
        }
      },
      "documentation":"<p>A summary about this recommendation, such as the currency code, the amount that AWS estimates that you could save, and the total amount of reservation to purchase.</p>"
    },
    "ReservationPurchaseRecommendations":{
      "type":"list",
      "member":{"shape":"ReservationPurchaseRecommendation"}
    },
    "ReservationUtilizationGroup":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"ReservationGroupKey",
          "documentation":"<p>The key for a specific RI attribute.</p>"
        },
        "Value":{
          "shape":"ReservationGroupValue",
          "documentation":"<p>The value of a specific RI attribute.</p>"
        },
        "Attributes":{
          "shape":"Attributes",
          "documentation":"<p>The attributes for this group of RIs.</p>"
        },
        "Utilization":{
          "shape":"ReservationAggregates",
          "documentation":"<p>How much you used this group of RIs.</p>"
        }
      },
      "documentation":"<p>A group of Reserved Instances (RIs) that share a set of attributes.</p>"
    },
    "ReservationUtilizationGroups":{
      "type":"list",
      "member":{"shape":"ReservationUtilizationGroup"}
    },
    "ReservedHours":{"type":"string"},
    "ResultByTime":{
      "type":"structure",
      "members":{
        "TimePeriod":{
          "shape":"DateInterval",
          "documentation":"<p>The time period covered by a result.</p>"
        },
        "Total":{
          "shape":"Metrics",
          "documentation":"<p>The total amount of cost or usage accrued during the time period.</p>"
        },
        "Groups":{
          "shape":"Groups",
          "documentation":"<p>The groups that are included in this time period.</p>"
        },
        "Estimated":{
          "shape":"Estimated",
          "documentation":"<p>Whether this result is estimated.</p>"
        }
      },
      "documentation":"<p>The result that is associated with a time period.</p>"
    },
    "ResultsByTime":{
      "type":"list",
      "member":{"shape":"ResultByTime"}
    },
    "SearchString":{"type":"string"},
    "ServiceSpecification":{
      "type":"structure",
      "members":{
        "EC2Specification":{
          "shape":"EC2Specification",
          "documentation":"<p>The EC2 hardware specifications that you want AWS to provide recommendations for.</p>"
        }
      },
      "documentation":"<p>Hardware specifications for the service that you want recommendations for.</p>"
    },
    "TagKey":{"type":"string"},
    "TagList":{
      "type":"list",
      "member":{"shape":"Entity"}
    },
    "TagValues":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p>The key for a tag.</p>"
        },
        "Values":{
          "shape":"Values",
          "documentation":"<p>The specific value of a tag.</p>"
        }
      },
      "documentation":"<p>The values that are available for a tag.</p>"
    },
    "TermInYears":{
      "type":"string",
      "enum":[
        "ONE_YEAR",
        "THREE_YEARS"
      ]
    },
    "TotalActualHours":{"type":"string"},
    "TotalAmortizedFee":{"type":"string"},
    "TotalPotentialRISavings":{"type":"string"},
    "TotalRunningHours":{"type":"string"},
    "UnusedHours":{"type":"string"},
    "UtilizationByTime":{
      "type":"structure",
      "members":{
        "TimePeriod":{
          "shape":"DateInterval",
          "documentation":"<p>The period of time over which this utilization was used.</p>"
        },
        "Groups":{
          "shape":"ReservationUtilizationGroups",
          "documentation":"<p>The groups that are included in this utilization result.</p>"
        },
        "Total":{
          "shape":"ReservationAggregates",
          "documentation":"<p>The total number of RI hours that were used.</p>"
        }
      },
      "documentation":"<p>The amount of utilization, in hours.</p>"
    },
    "UtilizationPercentage":{"type":"string"},
    "UtilizationsByTime":{
      "type":"list",
      "member":{"shape":"UtilizationByTime"}
    },
    "Value":{"type":"string"},
    "Values":{
      "type":"list",
      "member":{"shape":"Value"}
    },
    "YearMonthDay":{
      "type":"string",
      "pattern":"\\d{4}-\\d{2}-\\d{2}"
    }
  },
  "documentation":"<p>The Cost Explorer API allows you to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data, such as the number of daily write operations for Amazon DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p>https://ce.us-east-1.amazonaws.com</p> </li> </ul> <p>For information about costs associated with the Cost Explorer API, see <a href=\"https://aws.amazon.com/aws-cost-management/pricing/\">AWS Cost Management Pricing</a>.</p>"
}
