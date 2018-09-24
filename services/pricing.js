awsim['pricing'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-10-15",
    "endpointPrefix":"api.pricing",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"AWS Pricing",
    "serviceFullName":"AWS Price List Service",
    "serviceId":"Pricing",
    "signatureVersion":"v4",
    "signingName":"pricing",
    "targetPrefix":"AWSPriceListService",
    "uid":"pricing-2017-10-15"
  },
  "operations":{
    "DescribeServices":{
      "name":"DescribeServices",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeServicesRequest"},
      "output":{"shape":"DescribeServicesResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ExpiredNextTokenException"}
      ],
      "documentation":"<p>Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>"
    },
    "GetAttributeValues":{
      "name":"GetAttributeValues",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAttributeValuesRequest"},
      "output":{"shape":"GetAttributeValuesResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ExpiredNextTokenException"}
      ],
      "documentation":"<p>Returns a list of attribute values. Attibutes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs\">Offer File Definitions</a> in the <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html\">AWS Billing and Cost Management User Guide</a>.</p>"
    },
    "GetProducts":{
      "name":"GetProducts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetProductsRequest"},
      "output":{"shape":"GetProductsResponse"},
      "errors":[
        {"shape":"InternalErrorException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ExpiredNextTokenException"}
      ],
      "documentation":"<p>Returns a list of all products that match the filter criteria.</p>"
    }
  },
  "shapes":{
    "AttributeNameList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "AttributeValue":{
      "type":"structure",
      "members":{
        "Value":{
          "shape":"String",
          "documentation":"<p>The specific value of an <code>attributeName</code>.</p>"
        }
      },
      "documentation":"<p>The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute.</p>"
    },
    "AttributeValueList":{
      "type":"list",
      "member":{"shape":"AttributeValue"}
    },
    "BoxedInteger":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "DescribeServicesRequest":{
      "type":"structure",
      "members":{
        "ServiceCode":{
          "shape":"String",
          "documentation":"<p>The code for the service whose information you want to retrieve, such as <code>AmazonEC2</code>. You can use the <code>ServiceCode</code> to filter the results in a <code>GetProducts</code> call. To retrieve a list of all services, leave this blank.</p>"
        },
        "FormatVersion":{
          "shape":"String",
          "documentation":"<p>The format version that you want the response to be in.</p> <p>Valid values are: <code>aws_v1</code> </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token that indicates the next set of results that you want to retrieve.</p>"
        },
        "MaxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of results that you want returned in the response.</p>",
          "box":true
        }
      }
    },
    "DescribeServicesResponse":{
      "type":"structure",
      "members":{
        "Services":{
          "shape":"ServiceList",
          "documentation":"<p>The service metadata for the service or services in the response.</p>"
        },
        "FormatVersion":{
          "shape":"String",
          "documentation":"<p>The format version of the response. For example, <code>aws_v1</code>.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token for the next set of retreivable results.</p>"
        }
      }
    },
    "ExpiredNextTokenException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The pagination token expired. Try again without a pagination token.</p>",
      "exception":true
    },
    "Filter":{
      "type":"structure",
      "required":[
        "Type",
        "Field",
        "Value"
      ],
      "members":{
        "Type":{
          "shape":"FilterType",
          "documentation":"<p>The type of filter that you want to use.</p> <p>Valid values are: <code>TERM_MATCH</code>. <code>TERM_MATCH</code> returns only products that match both the given filter field and the given value.</p>"
        },
        "Field":{
          "shape":"String",
          "documentation":"<p>The product metadata field that you want to filter on. You can filter by just the service code to see all products for a specific service, filter by just the attribute name to see a specific attribute for multiple services, or use both a service code and an attribute name to retrieve only products that match both fields.</p> <p>Valid values include: <code>ServiceCode</code>, and all attribute names</p> <p>For example, you can filter by the <code>AmazonEC2</code> service code and the <code>volumeType</code> attribute name to get the prices for only Amazon EC2 volumes.</p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p>The service code or attribute value that you want to filter by. If you are filtering by service code this is the actual service code, such as <code>AmazonEC2</code>. If you are filtering by attribute name, this is the attribute value that you want the returned products to match, such as a <code>Provisioned IOPS</code> volume.</p>"
        }
      },
      "documentation":"<p>The constraints that you want all returned products to match.</p>"
    },
    "FilterType":{
      "type":"string",
      "enum":["TERM_MATCH"]
    },
    "Filters":{
      "type":"list",
      "member":{"shape":"Filter"}
    },
    "GetAttributeValuesRequest":{
      "type":"structure",
      "required":[
        "ServiceCode",
        "AttributeName"
      ],
      "members":{
        "ServiceCode":{
          "shape":"String",
          "documentation":"<p>The service code for the service whose attributes you want to retrieve. For example, if you want the retrieve an EC2 attribute, use <code>AmazonEC2</code>.</p>"
        },
        "AttributeName":{
          "shape":"String",
          "documentation":"<p>The name of the attribute that you want to retrieve the values for, such as <code>volumeType</code>.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token that indicates the next set of results that you want to retrieve.</p>"
        },
        "MaxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of results to return in response.</p>",
          "box":true
        }
      }
    },
    "GetAttributeValuesResponse":{
      "type":"structure",
      "members":{
        "AttributeValues":{
          "shape":"AttributeValueList",
          "documentation":"<p>The list of values for an attribute. For example, <code>Throughput Optimized HDD</code> and <code>Provisioned IOPS</code> are two available values for the <code>AmazonEC2</code> <code>volumeType</code>.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token that indicates the next set of results to retrieve.</p>"
        }
      }
    },
    "GetProductsRequest":{
      "type":"structure",
      "members":{
        "ServiceCode":{
          "shape":"String",
          "documentation":"<p>The code for the service whose products you want to retrieve. </p>"
        },
        "Filters":{
          "shape":"Filters",
          "documentation":"<p>The list of filters that limit the returned products. only products that match all filters are returned.</p>"
        },
        "FormatVersion":{
          "shape":"String",
          "documentation":"<p>The format version that you want the response to be in.</p> <p>Valid values are: <code>aws_v1</code> </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token that indicates the next set of results that you want to retrieve.</p>"
        },
        "MaxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of results to return in the response.</p>",
          "box":true
        }
      }
    },
    "GetProductsResponse":{
      "type":"structure",
      "members":{
        "FormatVersion":{
          "shape":"String",
          "documentation":"<p>The format version of the response. For example, aws_v1.</p>"
        },
        "PriceList":{
          "shape":"PriceList",
          "documentation":"<p>The list of products that match your filters. The list contains both the product metadata and the price information.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token that indicates the next set of results to retrieve.</p>"
        }
      }
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
      "documentation":"<p>The pagination token is invalid. Try again without a pagination token.</p>",
      "exception":true
    },
    "InvalidParameterException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>One or more parameters had an invalid value.</p>",
      "exception":true
    },
    "NotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The requested resource can't be found.</p>",
      "exception":true
    },
    "PriceList":{
      "type":"list",
      "member":{
        "shape":"PriceListItemJSON",
        "jsonvalue":true
      }
    },
    "PriceListItemJSON":{"type":"string"},
    "Service":{
      "type":"structure",
      "members":{
        "ServiceCode":{
          "shape":"String",
          "documentation":"<p>The code for the AWS service.</p>"
        },
        "AttributeNames":{
          "shape":"AttributeNameList",
          "documentation":"<p>The attributes that are available for this service.</p>"
        }
      },
      "documentation":"<p>The metadata for a service, such as the service code and available attribute names.</p>"
    },
    "ServiceList":{
      "type":"list",
      "member":{"shape":"Service"}
    },
    "String":{"type":"string"},
    "errorMessage":{"type":"string"}
  },
  "documentation":"<p>AWS Price List Service API (AWS Price List Service) is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The AWS Price List Service uses standardized product attributes such as <code>Location</code>, <code>Storage Class</code>, and <code>Operating System</code>, and provides prices at the SKU level. You can use the AWS Price List Service to build cost control and scenario planning tools, reconcile billing data, forecast future spend for budgeting purposes, and provide cost benefit analysis that compare your internal workloads with AWS.</p> <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then <code>GetServices</code> with a service code to retreive the attribute names for that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code> to see what values are available for an attribute. With the service code and an attribute name and value, you can use <code>GetProducts</code> to find specific products that you're interested in, such as an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code> <code>volumeType</code>.</p> <p>Service Endpoint</p> <p>AWS Price List Service API provides the following two endpoints:</p> <ul> <li> <p>https://api.pricing.us-east-1.amazonaws.com</p> </li> <li> <p>https://api.pricing.ap-south-1.amazonaws.com</p> </li> </ul>"
}
