awsim['appsync'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-07-25",
    "endpointPrefix":"appsync",
    "jsonVersion":"1.1",
    "protocol":"rest-json",
    "serviceAbbreviation":"AWSAppSync",
    "serviceFullName":"AWS AppSync",
    "serviceId":"AppSync",
    "signatureVersion":"v4",
    "signingName":"appsync",
    "uid":"appsync-2017-07-25"
  },
  "operations":{
    "CreateApiKey":{
      "name":"CreateApiKey",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/apikeys"
      },
      "input":{"shape":"CreateApiKeyRequest"},
      "output":{"shape":"CreateApiKeyResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"UnauthorizedException"},
        {"shape":"LimitExceededException"},
        {"shape":"InternalFailureException"},
        {"shape":"ApiKeyLimitExceededException"},
        {"shape":"ApiKeyValidityOutOfBoundsException"}
      ],
      "documentation":"<p>Creates a unique key that you can distribute to clients who are executing your API.</p>"
    },
    "CreateDataSource":{
      "name":"CreateDataSource",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/datasources"
      },
      "input":{"shape":"CreateDataSourceRequest"},
      "output":{"shape":"CreateDataSourceResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a <code>DataSource</code> object.</p>"
    },
    "CreateGraphqlApi":{
      "name":"CreateGraphqlApi",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis"
      },
      "input":{"shape":"CreateGraphqlApiRequest"},
      "output":{"shape":"CreateGraphqlApiResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"},
        {"shape":"ApiLimitExceededException"}
      ],
      "documentation":"<p>Creates a <code>GraphqlApi</code> object.</p>"
    },
    "CreateResolver":{
      "name":"CreateResolver",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/types/{typeName}/resolvers"
      },
      "input":{"shape":"CreateResolverRequest"},
      "output":{"shape":"CreateResolverResponse"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.</p>"
    },
    "CreateType":{
      "name":"CreateType",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/types"
      },
      "input":{"shape":"CreateTypeRequest"},
      "output":{"shape":"CreateTypeResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a <code>Type</code> object.</p>"
    },
    "DeleteApiKey":{
      "name":"DeleteApiKey",
      "http":{
        "method":"DELETE",
        "requestUri":"/v1/apis/{apiId}/apikeys/{id}"
      },
      "input":{"shape":"DeleteApiKeyRequest"},
      "output":{"shape":"DeleteApiKeyResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes an API key.</p>"
    },
    "DeleteDataSource":{
      "name":"DeleteDataSource",
      "http":{
        "method":"DELETE",
        "requestUri":"/v1/apis/{apiId}/datasources/{name}"
      },
      "input":{"shape":"DeleteDataSourceRequest"},
      "output":{"shape":"DeleteDataSourceResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes a <code>DataSource</code> object.</p>"
    },
    "DeleteGraphqlApi":{
      "name":"DeleteGraphqlApi",
      "http":{
        "method":"DELETE",
        "requestUri":"/v1/apis/{apiId}"
      },
      "input":{"shape":"DeleteGraphqlApiRequest"},
      "output":{"shape":"DeleteGraphqlApiResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes a <code>GraphqlApi</code> object.</p>"
    },
    "DeleteResolver":{
      "name":"DeleteResolver",
      "http":{
        "method":"DELETE",
        "requestUri":"/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"
      },
      "input":{"shape":"DeleteResolverRequest"},
      "output":{"shape":"DeleteResolverResponse"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes a <code>Resolver</code> object.</p>"
    },
    "DeleteType":{
      "name":"DeleteType",
      "http":{
        "method":"DELETE",
        "requestUri":"/v1/apis/{apiId}/types/{typeName}"
      },
      "input":{"shape":"DeleteTypeRequest"},
      "output":{"shape":"DeleteTypeResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes a <code>Type</code> object.</p>"
    },
    "GetDataSource":{
      "name":"GetDataSource",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/datasources/{name}"
      },
      "input":{"shape":"GetDataSourceRequest"},
      "output":{"shape":"GetDataSourceResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Retrieves a <code>DataSource</code> object.</p>"
    },
    "GetGraphqlApi":{
      "name":"GetGraphqlApi",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}"
      },
      "input":{"shape":"GetGraphqlApiRequest"},
      "output":{"shape":"GetGraphqlApiResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Retrieves a <code>GraphqlApi</code> object.</p>"
    },
    "GetIntrospectionSchema":{
      "name":"GetIntrospectionSchema",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/schema"
      },
      "input":{"shape":"GetIntrospectionSchemaRequest"},
      "output":{"shape":"GetIntrospectionSchemaResponse"},
      "errors":[
        {"shape":"GraphQLSchemaException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Retrieves the introspection schema for a GraphQL API.</p>"
    },
    "GetResolver":{
      "name":"GetResolver",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"
      },
      "input":{"shape":"GetResolverRequest"},
      "output":{"shape":"GetResolverResponse"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves a <code>Resolver</code> object.</p>"
    },
    "GetSchemaCreationStatus":{
      "name":"GetSchemaCreationStatus",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/schemacreation"
      },
      "input":{"shape":"GetSchemaCreationStatusRequest"},
      "output":{"shape":"GetSchemaCreationStatusResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Retrieves the current status of a schema creation operation.</p>"
    },
    "GetType":{
      "name":"GetType",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/types/{typeName}"
      },
      "input":{"shape":"GetTypeRequest"},
      "output":{"shape":"GetTypeResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Retrieves a <code>Type</code> object.</p>"
    },
    "ListApiKeys":{
      "name":"ListApiKeys",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/apikeys"
      },
      "input":{"shape":"ListApiKeysRequest"},
      "output":{"shape":"ListApiKeysResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically sometime after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>"
    },
    "ListDataSources":{
      "name":"ListDataSources",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/datasources"
      },
      "input":{"shape":"ListDataSourcesRequest"},
      "output":{"shape":"ListDataSourcesResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the data sources for a given API.</p>"
    },
    "ListGraphqlApis":{
      "name":"ListGraphqlApis",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis"
      },
      "input":{"shape":"ListGraphqlApisRequest"},
      "output":{"shape":"ListGraphqlApisResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists your GraphQL APIs.</p>"
    },
    "ListResolvers":{
      "name":"ListResolvers",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/types/{typeName}/resolvers"
      },
      "input":{"shape":"ListResolversRequest"},
      "output":{"shape":"ListResolversResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the resolvers for a given API and type.</p>"
    },
    "ListTypes":{
      "name":"ListTypes",
      "http":{
        "method":"GET",
        "requestUri":"/v1/apis/{apiId}/types"
      },
      "input":{"shape":"ListTypesRequest"},
      "output":{"shape":"ListTypesResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the types for a given API.</p>"
    },
    "StartSchemaCreation":{
      "name":"StartSchemaCreation",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/schemacreation"
      },
      "input":{"shape":"StartSchemaCreationRequest"},
      "output":{"shape":"StartSchemaCreationResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>"
    },
    "UpdateApiKey":{
      "name":"UpdateApiKey",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/apikeys/{id}"
      },
      "input":{"shape":"UpdateApiKeyRequest"},
      "output":{"shape":"UpdateApiKeyResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"LimitExceededException"},
        {"shape":"InternalFailureException"},
        {"shape":"ApiKeyValidityOutOfBoundsException"}
      ],
      "documentation":"<p>Updates an API key.</p>"
    },
    "UpdateDataSource":{
      "name":"UpdateDataSource",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/datasources/{name}"
      },
      "input":{"shape":"UpdateDataSourceRequest"},
      "output":{"shape":"UpdateDataSourceResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates a <code>DataSource</code> object.</p>"
    },
    "UpdateGraphqlApi":{
      "name":"UpdateGraphqlApi",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}"
      },
      "input":{"shape":"UpdateGraphqlApiRequest"},
      "output":{"shape":"UpdateGraphqlApiResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates a <code>GraphqlApi</code> object.</p>"
    },
    "UpdateResolver":{
      "name":"UpdateResolver",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"
      },
      "input":{"shape":"UpdateResolverRequest"},
      "output":{"shape":"UpdateResolverResponse"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates a <code>Resolver</code> object.</p>"
    },
    "UpdateType":{
      "name":"UpdateType",
      "http":{
        "method":"POST",
        "requestUri":"/v1/apis/{apiId}/types/{typeName}"
      },
      "input":{"shape":"UpdateTypeRequest"},
      "output":{"shape":"UpdateTypeResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates a <code>Type</code> object.</p>"
    }
  },
  "shapes":{
    "ApiKey":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The API key ID.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>A description of the purpose of the API key.</p>"
        },
        "expires":{
          "shape":"Long",
          "documentation":"<p>The time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour.</p>"
        }
      },
      "documentation":"<p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL APIs with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by DynamoDB TTL. The keys will cease to be valid after Feb 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after Feb 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as seconds.</p> </li> </ul>"
    },
    "ApiKeyLimitExceededException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The API key exceeded a limit. Try your request again.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ApiKeyValidityOutOfBoundsException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The API key expiration must be set to a value between 1 and 365 days from creation (for <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ApiKeys":{
      "type":"list",
      "member":{"shape":"ApiKey"}
    },
    "ApiLimitExceededException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The GraphQL API exceeded a limit. Try your request again.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "AuthenticationType":{
      "type":"string",
      "enum":[
        "API_KEY",
        "AWS_IAM",
        "AMAZON_COGNITO_USER_POOLS",
        "OPENID_CONNECT"
      ]
    },
    "BadRequestException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again. </p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "Blob":{"type":"blob"},
    "Boolean":{"type":"boolean"},
    "ConcurrentModificationException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Another modification is being made. That modification must complete before you can make your change. </p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "CreateApiKeyRequest":{
      "type":"structure",
      "required":["apiId"],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The ID for your GraphQL API.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>A description of the purpose of the API key.</p>"
        },
        "expires":{
          "shape":"Long",
          "documentation":"<p>The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .</p>"
        }
      }
    },
    "CreateApiKeyResponse":{
      "type":"structure",
      "members":{
        "apiKey":{
          "shape":"ApiKey",
          "documentation":"<p>The API key.</p>"
        }
      }
    },
    "CreateDataSourceRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "name",
        "type"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID for the GraphQL API for the <code>DataSource</code>.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>A user-supplied name for the <code>DataSource</code>.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>A description of the <code>DataSource</code>.</p>"
        },
        "type":{
          "shape":"DataSourceType",
          "documentation":"<p>The type of the <code>DataSource</code>.</p>"
        },
        "serviceRoleArn":{
          "shape":"String",
          "documentation":"<p>The IAM service role ARN for the data source. The system assumes this role when accessing the data source.</p>"
        },
        "dynamodbConfig":{
          "shape":"DynamodbDataSourceConfig",
          "documentation":"<p>DynamoDB settings.</p>"
        },
        "lambdaConfig":{
          "shape":"LambdaDataSourceConfig",
          "documentation":"<p>AWS Lambda settings.</p>"
        },
        "elasticsearchConfig":{
          "shape":"ElasticsearchDataSourceConfig",
          "documentation":"<p>Amazon Elasticsearch settings.</p>"
        },
        "httpConfig":{
          "shape":"HttpDataSourceConfig",
          "documentation":"<p>Http endpoint settings.</p>"
        }
      }
    },
    "CreateDataSourceResponse":{
      "type":"structure",
      "members":{
        "dataSource":{
          "shape":"DataSource",
          "documentation":"<p>The <code>DataSource</code> object.</p>"
        }
      }
    },
    "CreateGraphqlApiRequest":{
      "type":"structure",
      "required":[
        "name",
        "authenticationType"
      ],
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>A user-supplied name for the <code>GraphqlApi</code>.</p>"
        },
        "logConfig":{
          "shape":"LogConfig",
          "documentation":"<p>The Amazon CloudWatch logs configuration.</p>"
        },
        "authenticationType":{
          "shape":"AuthenticationType",
          "documentation":"<p>The authentication type: API key, IAM, or Amazon Cognito User Pools.</p>"
        },
        "userPoolConfig":{
          "shape":"UserPoolConfig",
          "documentation":"<p>The Amazon Cognito User Pool configuration.</p>"
        },
        "openIDConnectConfig":{
          "shape":"OpenIDConnectConfig",
          "documentation":"<p>The Open Id Connect configuration configuration.</p>"
        }
      }
    },
    "CreateGraphqlApiResponse":{
      "type":"structure",
      "members":{
        "graphqlApi":{
          "shape":"GraphqlApi",
          "documentation":"<p>The <code>GraphqlApi</code>.</p>"
        }
      }
    },
    "CreateResolverRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "typeName",
        "fieldName",
        "dataSourceName",
        "requestMappingTemplate"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The ID for the GraphQL API for which the resolver is being created.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "typeName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the <code>Type</code>.</p>",
          "location":"uri",
          "locationName":"typeName"
        },
        "fieldName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the field to attach the resolver to.</p>"
        },
        "dataSourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the data source for which the resolver is being created.</p>"
        },
        "requestMappingTemplate":{
          "shape":"MappingTemplate",
          "documentation":"<p>The mapping template to be used for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p>"
        },
        "responseMappingTemplate":{
          "shape":"MappingTemplate",
          "documentation":"<p>The mapping template to be used for responses from the data source.</p>"
        }
      }
    },
    "CreateResolverResponse":{
      "type":"structure",
      "members":{
        "resolver":{
          "shape":"Resolver",
          "documentation":"<p>The <code>Resolver</code> object.</p>"
        }
      }
    },
    "CreateTypeRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "definition",
        "format"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "definition":{
          "shape":"String",
          "documentation":"<p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href=\"http://graphql.org/learn/schema/\">GraphQL SDL documentation</a>.</p>"
        },
        "format":{
          "shape":"TypeDefinitionFormat",
          "documentation":"<p>The type format: SDL or JSON.</p>"
        }
      }
    },
    "CreateTypeResponse":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"Type",
          "documentation":"<p>The <code>Type</code> object.</p>"
        }
      }
    },
    "DataSource":{
      "type":"structure",
      "members":{
        "dataSourceArn":{
          "shape":"String",
          "documentation":"<p>The data source ARN.</p>"
        },
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the data source.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the data source.</p>"
        },
        "type":{
          "shape":"DataSourceType",
          "documentation":"<p>The type of the data source.</p> <ul> <li> <p> <b>AMAZON_DYNAMODB</b>: The data source is an Amazon DynamoDB table.</p> </li> <li> <p> <b>AMAZON_ELASTICSEARCH</b>: The data source is an Amazon Elasticsearch Service domain.</p> </li> <li> <p> <b>AWS_LAMBDA</b>: The data source is an AWS Lambda function.</p> </li> <li> <p> <b>NONE</b>: There is no data source. This type is used when when you wish to invoke a GraphQL operation without connecting to a data source, such as performing data transformation with resolvers or triggering a subscription to be invoked from a mutation.</p> </li> <li> <p> <b>HTTP</b>: The data source is an HTTP endpoint.</p> </li> </ul>"
        },
        "serviceRoleArn":{
          "shape":"String",
          "documentation":"<p>The IAM service role ARN for the data source. The system assumes this role when accessing the data source.</p>"
        },
        "dynamodbConfig":{
          "shape":"DynamodbDataSourceConfig",
          "documentation":"<p>DynamoDB settings.</p>"
        },
        "lambdaConfig":{
          "shape":"LambdaDataSourceConfig",
          "documentation":"<p>Lambda settings.</p>"
        },
        "elasticsearchConfig":{
          "shape":"ElasticsearchDataSourceConfig",
          "documentation":"<p>Amazon Elasticsearch settings.</p>"
        },
        "httpConfig":{
          "shape":"HttpDataSourceConfig",
          "documentation":"<p>Http endpoint settings.</p>"
        }
      },
      "documentation":"<p>Describes a data source.</p>"
    },
    "DataSourceType":{
      "type":"string",
      "enum":[
        "AWS_LAMBDA",
        "AMAZON_DYNAMODB",
        "AMAZON_ELASTICSEARCH",
        "NONE",
        "HTTP"
      ]
    },
    "DataSources":{
      "type":"list",
      "member":{"shape":"DataSource"}
    },
    "DefaultAction":{
      "type":"string",
      "enum":[
        "ALLOW",
        "DENY"
      ]
    },
    "DeleteApiKeyRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "id"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "id":{
          "shape":"String",
          "documentation":"<p>The ID for the API key.</p>",
          "location":"uri",
          "locationName":"id"
        }
      }
    },
    "DeleteApiKeyResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteDataSourceRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "name"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the data source.</p>",
          "location":"uri",
          "locationName":"name"
        }
      }
    },
    "DeleteDataSourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteGraphqlApiRequest":{
      "type":"structure",
      "required":["apiId"],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        }
      }
    },
    "DeleteGraphqlApiResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteResolverRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "typeName",
        "fieldName"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "typeName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the resolver type.</p>",
          "location":"uri",
          "locationName":"typeName"
        },
        "fieldName":{
          "shape":"ResourceName",
          "documentation":"<p>The resolver field name.</p>",
          "location":"uri",
          "locationName":"fieldName"
        }
      }
    },
    "DeleteResolverResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteTypeRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "typeName"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "typeName":{
          "shape":"ResourceName",
          "documentation":"<p>The type name.</p>",
          "location":"uri",
          "locationName":"typeName"
        }
      }
    },
    "DeleteTypeResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DynamodbDataSourceConfig":{
      "type":"structure",
      "required":[
        "tableName",
        "awsRegion"
      ],
      "members":{
        "tableName":{
          "shape":"String",
          "documentation":"<p>The table name.</p>"
        },
        "awsRegion":{
          "shape":"String",
          "documentation":"<p>The AWS region.</p>"
        },
        "useCallerCredentials":{
          "shape":"Boolean",
          "documentation":"<p>Set to TRUE to use Amazon Cognito credentials with this data source.</p>"
        }
      },
      "documentation":"<p>Describes a DynamoDB data source configuration.</p>"
    },
    "ElasticsearchDataSourceConfig":{
      "type":"structure",
      "required":[
        "endpoint",
        "awsRegion"
      ],
      "members":{
        "endpoint":{
          "shape":"String",
          "documentation":"<p>The endpoint.</p>"
        },
        "awsRegion":{
          "shape":"String",
          "documentation":"<p>The AWS region.</p>"
        }
      },
      "documentation":"<p>Describes an Elasticsearch data source configuration.</p>"
    },
    "ErrorMessage":{"type":"string"},
    "FieldLogLevel":{
      "type":"string",
      "enum":[
        "NONE",
        "ERROR",
        "ALL"
      ]
    },
    "GetDataSourceRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "name"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the data source.</p>",
          "location":"uri",
          "locationName":"name"
        }
      }
    },
    "GetDataSourceResponse":{
      "type":"structure",
      "members":{
        "dataSource":{
          "shape":"DataSource",
          "documentation":"<p>The <code>DataSource</code> object.</p>"
        }
      }
    },
    "GetGraphqlApiRequest":{
      "type":"structure",
      "required":["apiId"],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID for the GraphQL API.</p>",
          "location":"uri",
          "locationName":"apiId"
        }
      }
    },
    "GetGraphqlApiResponse":{
      "type":"structure",
      "members":{
        "graphqlApi":{
          "shape":"GraphqlApi",
          "documentation":"<p>The <code>GraphqlApi</code> object.</p>"
        }
      }
    },
    "GetIntrospectionSchemaRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "format"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "format":{
          "shape":"OutputType",
          "documentation":"<p>The schema format: SDL or JSON.</p>",
          "location":"querystring",
          "locationName":"format"
        }
      }
    },
    "GetIntrospectionSchemaResponse":{
      "type":"structure",
      "members":{
        "schema":{
          "shape":"Blob",
          "documentation":"<p>The schema, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href=\"http://graphql.org/learn/schema/\">GraphQL SDL documentation</a>.</p>"
        }
      },
      "payload":"schema"
    },
    "GetResolverRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "typeName",
        "fieldName"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "typeName":{
          "shape":"ResourceName",
          "documentation":"<p>The resolver type name.</p>",
          "location":"uri",
          "locationName":"typeName"
        },
        "fieldName":{
          "shape":"ResourceName",
          "documentation":"<p>The resolver field name.</p>",
          "location":"uri",
          "locationName":"fieldName"
        }
      }
    },
    "GetResolverResponse":{
      "type":"structure",
      "members":{
        "resolver":{
          "shape":"Resolver",
          "documentation":"<p>The <code>Resolver</code> object.</p>"
        }
      }
    },
    "GetSchemaCreationStatusRequest":{
      "type":"structure",
      "required":["apiId"],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        }
      }
    },
    "GetSchemaCreationStatusResponse":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"SchemaStatus",
          "documentation":"<p>The current state of the schema (PROCESSING, ACTIVE, or DELETING). Once the schema is in the ACTIVE state, you can add data.</p>"
        },
        "details":{
          "shape":"String",
          "documentation":"<p>Detailed information about the status of the schema creation operation.</p>"
        }
      }
    },
    "GetTypeRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "typeName",
        "format"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "typeName":{
          "shape":"ResourceName",
          "documentation":"<p>The type name.</p>",
          "location":"uri",
          "locationName":"typeName"
        },
        "format":{
          "shape":"TypeDefinitionFormat",
          "documentation":"<p>The type format: SDL or JSON.</p>",
          "location":"querystring",
          "locationName":"format"
        }
      }
    },
    "GetTypeResponse":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"Type",
          "documentation":"<p>The <code>Type</code> object.</p>"
        }
      }
    },
    "GraphQLSchemaException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The GraphQL schema is not valid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "GraphqlApi":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The API name.</p>"
        },
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>"
        },
        "authenticationType":{
          "shape":"AuthenticationType",
          "documentation":"<p>The authentication type.</p>"
        },
        "logConfig":{
          "shape":"LogConfig",
          "documentation":"<p>The Amazon CloudWatch Logs configuration.</p>"
        },
        "userPoolConfig":{
          "shape":"UserPoolConfig",
          "documentation":"<p>The Amazon Cognito User Pool configuration.</p>"
        },
        "openIDConnectConfig":{
          "shape":"OpenIDConnectConfig",
          "documentation":"<p>The Open Id Connect configuration.</p>"
        },
        "arn":{
          "shape":"String",
          "documentation":"<p>The ARN.</p>"
        },
        "uris":{
          "shape":"MapOfStringToString",
          "documentation":"<p>The URIs.</p>"
        }
      },
      "documentation":"<p>Describes a GraphQL API.</p>"
    },
    "GraphqlApis":{
      "type":"list",
      "member":{"shape":"GraphqlApi"}
    },
    "HttpDataSourceConfig":{
      "type":"structure",
      "members":{
        "endpoint":{
          "shape":"String",
          "documentation":"<p>The Http url endpoint. You can either specify the domain name or ip and port combination and the url scheme must be http(s). If the port is not specified, AWS AppSync will use the default port 80 for http endpoint and port 443 for https endpoints.</p>"
        }
      },
      "documentation":"<p>Describes a Http data source configuration.</p>"
    },
    "InternalFailureException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>An internal AWS AppSync error occurred. Try your request again.</p>",
      "error":{"httpStatusCode":500},
      "exception":true,
      "fault":true
    },
    "LambdaDataSourceConfig":{
      "type":"structure",
      "required":["lambdaFunctionArn"],
      "members":{
        "lambdaFunctionArn":{
          "shape":"String",
          "documentation":"<p>The ARN for the Lambda function.</p>"
        }
      },
      "documentation":"<p>Describes a Lambda data source configuration.</p>"
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The request exceeded a limit. Try your request again.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "ListApiKeysRequest":{
      "type":"structure",
      "required":["apiId"],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results you want the request to return.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListApiKeysResponse":{
      "type":"structure",
      "members":{
        "apiKeys":{
          "shape":"ApiKeys",
          "documentation":"<p>The <code>ApiKey</code> objects.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>"
        }
      }
    },
    "ListDataSourcesRequest":{
      "type":"structure",
      "required":["apiId"],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. </p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results you want the request to return.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListDataSourcesResponse":{
      "type":"structure",
      "members":{
        "dataSources":{
          "shape":"DataSources",
          "documentation":"<p>The <code>DataSource</code> objects.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>"
        }
      }
    },
    "ListGraphqlApisRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. </p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results you want the request to return.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListGraphqlApisResponse":{
      "type":"structure",
      "members":{
        "graphqlApis":{
          "shape":"GraphqlApis",
          "documentation":"<p>The <code>GraphqlApi</code> objects.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>"
        }
      }
    },
    "ListResolversRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "typeName"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "typeName":{
          "shape":"String",
          "documentation":"<p>The type name.</p>",
          "location":"uri",
          "locationName":"typeName"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. </p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results you want the request to return.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListResolversResponse":{
      "type":"structure",
      "members":{
        "resolvers":{
          "shape":"Resolvers",
          "documentation":"<p>The <code>Resolver</code> objects.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>"
        }
      }
    },
    "ListTypesRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "format"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "format":{
          "shape":"TypeDefinitionFormat",
          "documentation":"<p>The type format: SDL or JSON.</p>",
          "location":"querystring",
          "locationName":"format"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. </p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results you want the request to return.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListTypesResponse":{
      "type":"structure",
      "members":{
        "types":{
          "shape":"TypeList",
          "documentation":"<p>The <code>Type</code> objects.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>"
        }
      }
    },
    "LogConfig":{
      "type":"structure",
      "required":[
        "fieldLogLevel",
        "cloudWatchLogsRoleArn"
      ],
      "members":{
        "fieldLogLevel":{
          "shape":"FieldLogLevel",
          "documentation":"<p>The field logging level. Values can be NONE, ERROR, ALL. </p> <ul> <li> <p> <b>NONE</b>: No field-level logs are captured.</p> </li> <li> <p> <b>ERROR</b>: Logs the following information only for the fields that are in error:</p> <ul> <li> <p>The error section in the server response.</p> </li> <li> <p>Field-level errors.</p> </li> <li> <p>The generated request/response functions that got resolved for error fields.</p> </li> </ul> </li> <li> <p> <b>ALL</b>: The following information is logged for all fields in the query:</p> <ul> <li> <p>Field-level tracing information.</p> </li> <li> <p>The generated request/response functions that got resolved for each field.</p> </li> </ul> </li> </ul>"
        },
        "cloudWatchLogsRoleArn":{
          "shape":"String",
          "documentation":"<p>The service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account. </p>"
        }
      },
      "documentation":"<p>The CloudWatch Logs configuration.</p>"
    },
    "Long":{"type":"long"},
    "MapOfStringToString":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "MappingTemplate":{
      "type":"string",
      "max":65536,
      "min":1
    },
    "MaxResults":{
      "type":"integer",
      "max":25,
      "min":0
    },
    "NotFoundException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The resource specified in the request was not found. Check the resource and try again.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "OpenIDConnectConfig":{
      "type":"structure",
      "required":["issuer"],
      "members":{
        "issuer":{
          "shape":"String",
          "documentation":"<p>The issuer for the open id connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.</p>"
        },
        "clientId":{
          "shape":"String",
          "documentation":"<p>The client identifier of the Relying party at the OpenID Provider. This identifier is typically obtained when the Relying party is registered with the OpenID Provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time</p>"
        },
        "iatTTL":{
          "shape":"Long",
          "documentation":"<p>The number of milliseconds a token is valid after being issued to a user.</p>"
        },
        "authTTL":{
          "shape":"Long",
          "documentation":"<p>The number of milliseconds a token is valid after being authenticated.</p>"
        }
      },
      "documentation":"<p>Describes an Open Id Connect configuration.</p>"
    },
    "OutputType":{
      "type":"string",
      "enum":[
        "SDL",
        "JSON"
      ]
    },
    "PaginationToken":{
      "type":"string",
      "pattern":"[\\\\S]+"
    },
    "Resolver":{
      "type":"structure",
      "members":{
        "typeName":{
          "shape":"ResourceName",
          "documentation":"<p>The resolver type name.</p>"
        },
        "fieldName":{
          "shape":"ResourceName",
          "documentation":"<p>The resolver field name.</p>"
        },
        "dataSourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The resolver data source name.</p>"
        },
        "resolverArn":{
          "shape":"String",
          "documentation":"<p>The resolver ARN.</p>"
        },
        "requestMappingTemplate":{
          "shape":"MappingTemplate",
          "documentation":"<p>The request mapping template.</p>"
        },
        "responseMappingTemplate":{
          "shape":"MappingTemplate",
          "documentation":"<p>The response mapping template.</p>"
        }
      },
      "documentation":"<p>Describes a resolver.</p>"
    },
    "Resolvers":{
      "type":"list",
      "member":{"shape":"Resolver"}
    },
    "ResourceName":{
      "type":"string",
      "pattern":"[_A-Za-z][_0-9A-Za-z]*"
    },
    "SchemaStatus":{
      "type":"string",
      "enum":[
        "PROCESSING",
        "ACTIVE",
        "DELETING"
      ]
    },
    "StartSchemaCreationRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "definition"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "definition":{
          "shape":"Blob",
          "documentation":"<p>The schema definition, in GraphQL schema language format.</p>"
        }
      }
    },
    "StartSchemaCreationResponse":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"SchemaStatus",
          "documentation":"<p>The current state of the schema (PROCESSING, ACTIVE, or DELETING). Once the schema is in the ACTIVE state, you can add data.</p>"
        }
      }
    },
    "String":{"type":"string"},
    "Type":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The type name.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The type description.</p>"
        },
        "arn":{
          "shape":"String",
          "documentation":"<p>The type ARN.</p>"
        },
        "definition":{
          "shape":"String",
          "documentation":"<p>The type definition.</p>"
        },
        "format":{
          "shape":"TypeDefinitionFormat",
          "documentation":"<p>The type format: SDL or JSON.</p>"
        }
      },
      "documentation":"<p>Describes a type.</p>"
    },
    "TypeDefinitionFormat":{
      "type":"string",
      "enum":[
        "SDL",
        "JSON"
      ]
    },
    "TypeList":{
      "type":"list",
      "member":{"shape":"Type"}
    },
    "UnauthorizedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>You are not authorized to perform this operation.</p>",
      "error":{"httpStatusCode":401},
      "exception":true
    },
    "UpdateApiKeyRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "id"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The ID for the GraphQL API</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "id":{
          "shape":"String",
          "documentation":"<p>The API key ID.</p>",
          "location":"uri",
          "locationName":"id"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>A description of the purpose of the API key.</p>"
        },
        "expires":{
          "shape":"Long",
          "documentation":"<p>The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .</p>"
        }
      }
    },
    "UpdateApiKeyResponse":{
      "type":"structure",
      "members":{
        "apiKey":{
          "shape":"ApiKey",
          "documentation":"<p>The API key.</p>"
        }
      }
    },
    "UpdateDataSourceRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "name",
        "type"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The new name for the data source.</p>",
          "location":"uri",
          "locationName":"name"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The new description for the data source.</p>"
        },
        "type":{
          "shape":"DataSourceType",
          "documentation":"<p>The new data source type.</p>"
        },
        "serviceRoleArn":{
          "shape":"String",
          "documentation":"<p>The new service role ARN for the data source.</p>"
        },
        "dynamodbConfig":{
          "shape":"DynamodbDataSourceConfig",
          "documentation":"<p>The new DynamoDB configuration.</p>"
        },
        "lambdaConfig":{
          "shape":"LambdaDataSourceConfig",
          "documentation":"<p>The new Lambda configuration.</p>"
        },
        "elasticsearchConfig":{
          "shape":"ElasticsearchDataSourceConfig",
          "documentation":"<p>The new Elasticsearch configuration.</p>"
        },
        "httpConfig":{
          "shape":"HttpDataSourceConfig",
          "documentation":"<p>The new http endpoint configuration</p>"
        }
      }
    },
    "UpdateDataSourceResponse":{
      "type":"structure",
      "members":{
        "dataSource":{
          "shape":"DataSource",
          "documentation":"<p>The updated <code>DataSource</code> object.</p>"
        }
      }
    },
    "UpdateGraphqlApiRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "name"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The new name for the <code>GraphqlApi</code> object.</p>"
        },
        "logConfig":{
          "shape":"LogConfig",
          "documentation":"<p>The Amazon CloudWatch logs configuration for the <code>GraphqlApi</code> object.</p>"
        },
        "authenticationType":{
          "shape":"AuthenticationType",
          "documentation":"<p>The new authentication type for the <code>GraphqlApi</code> object.</p>"
        },
        "userPoolConfig":{
          "shape":"UserPoolConfig",
          "documentation":"<p>The new Amazon Cognito User Pool configuration for the <code>GraphqlApi</code> object.</p>"
        },
        "openIDConnectConfig":{
          "shape":"OpenIDConnectConfig",
          "documentation":"<p>The Open Id Connect configuration configuration for the <code>GraphqlApi</code> object.</p>"
        }
      }
    },
    "UpdateGraphqlApiResponse":{
      "type":"structure",
      "members":{
        "graphqlApi":{
          "shape":"GraphqlApi",
          "documentation":"<p>The updated <code>GraphqlApi</code> object.</p>"
        }
      }
    },
    "UpdateResolverRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "typeName",
        "fieldName",
        "dataSourceName",
        "requestMappingTemplate"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "typeName":{
          "shape":"ResourceName",
          "documentation":"<p>The new type name.</p>",
          "location":"uri",
          "locationName":"typeName"
        },
        "fieldName":{
          "shape":"ResourceName",
          "documentation":"<p>The new field name.</p>",
          "location":"uri",
          "locationName":"fieldName"
        },
        "dataSourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The new data source name.</p>"
        },
        "requestMappingTemplate":{
          "shape":"MappingTemplate",
          "documentation":"<p>The new request mapping template.</p>"
        },
        "responseMappingTemplate":{
          "shape":"MappingTemplate",
          "documentation":"<p>The new response mapping template.</p>"
        }
      }
    },
    "UpdateResolverResponse":{
      "type":"structure",
      "members":{
        "resolver":{
          "shape":"Resolver",
          "documentation":"<p>The updated <code>Resolver</code> object.</p>"
        }
      }
    },
    "UpdateTypeRequest":{
      "type":"structure",
      "required":[
        "apiId",
        "typeName",
        "format"
      ],
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>The API ID.</p>",
          "location":"uri",
          "locationName":"apiId"
        },
        "typeName":{
          "shape":"ResourceName",
          "documentation":"<p>The new type name.</p>",
          "location":"uri",
          "locationName":"typeName"
        },
        "definition":{
          "shape":"String",
          "documentation":"<p>The new definition.</p>"
        },
        "format":{
          "shape":"TypeDefinitionFormat",
          "documentation":"<p>The new type format: SDL or JSON.</p>"
        }
      }
    },
    "UpdateTypeResponse":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"Type",
          "documentation":"<p>The updated <code>Type</code> object.</p>"
        }
      }
    },
    "UserPoolConfig":{
      "type":"structure",
      "required":[
        "userPoolId",
        "awsRegion",
        "defaultAction"
      ],
      "members":{
        "userPoolId":{
          "shape":"String",
          "documentation":"<p>The user pool ID.</p>"
        },
        "awsRegion":{
          "shape":"String",
          "documentation":"<p>The AWS region in which the user pool was created.</p>"
        },
        "defaultAction":{
          "shape":"DefaultAction",
          "documentation":"<p>The action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration.</p>"
        },
        "appIdClientRegex":{
          "shape":"String",
          "documentation":"<p>A regular expression for validating the incoming Amazon Cognito User Pool app client ID.</p>"
        }
      },
      "documentation":"<p>Describes an Amazon Cognito User Pool configuration.</p>"
    }
  },
  "documentation":"<p>AWS AppSync provides API actions for creating and interacting with data sources using GraphQL from your application.</p>"
}
