awsim['mq'] = {
  "metadata" : {
    "apiVersion" : "2017-11-27",
    "endpointPrefix" : "mq",
    "signingName" : "mq",
    "serviceFullName" : "AmazonMQ",
    "serviceId" : "mq",
    "protocol" : "rest-json",
    "jsonVersion" : "1.1",
    "uid" : "mq-2017-11-27",
    "signatureVersion" : "v4"
  },
  "operations" : {
    "CreateBroker" : {
      "name" : "CreateBroker",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/brokers",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateBrokerRequest"
      },
      "output" : {
        "shape" : "CreateBrokerResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "UnauthorizedException",
        "documentation" : "HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be validated."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ConflictException",
        "documentation" : "HTTP Status Code 409: Conflict. This Broker name already exists. Retry your request with another name."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Creates a broker. Note: This API is asynchronous."
    },
    "CreateConfiguration" : {
      "name" : "CreateConfiguration",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/configurations",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateConfigurationRequest"
      },
      "output" : {
        "shape" : "CreateConfigurationResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ConflictException",
        "documentation" : "HTTP Status Code 409: Conflict. This configuration name already exists. Retry your request with another configuration name."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your input and then retry your request."
      } ],
      "documentation" : "Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version)."
    },
    "CreateUser" : {
      "name" : "CreateUser",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/brokers/{broker-id}/users/{username}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateUserRequest"
      },
      "output" : {
        "shape" : "CreateUserResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ConflictException",
        "documentation" : "HTTP Status Code 409: Conflict. Retry your request."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Creates an ActiveMQ user."
    },
    "DeleteBroker" : {
      "name" : "DeleteBroker",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/brokers/{broker-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteBrokerRequest"
      },
      "output" : {
        "shape" : "DeleteBrokerResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Deletes a broker. Note: This API is asynchronous."
    },
    "DeleteUser" : {
      "name" : "DeleteUser",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/brokers/{broker-id}/users/{username}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteUserRequest"
      },
      "output" : {
        "shape" : "DeleteUserResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Deletes an ActiveMQ user."
    },
    "DescribeBroker" : {
      "name" : "DescribeBroker",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/brokers/{broker-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DescribeBrokerRequest"
      },
      "output" : {
        "shape" : "DescribeBrokerResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Returns information about the specified broker."
    },
    "DescribeConfiguration" : {
      "name" : "DescribeConfiguration",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/configurations/{configuration-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DescribeConfigurationRequest"
      },
      "output" : {
        "shape" : "DescribeConfigurationResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Returns information about the specified configuration."
    },
    "DescribeConfigurationRevision" : {
      "name" : "DescribeConfigurationRevision",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/configurations/{configuration-id}/revisions/{configuration-revision}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DescribeConfigurationRevisionRequest"
      },
      "output" : {
        "shape" : "DescribeConfigurationRevisionResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Returns the specified configuration revision for the specified configuration."
    },
    "DescribeUser" : {
      "name" : "DescribeUser",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/brokers/{broker-id}/users/{username}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DescribeUserRequest"
      },
      "output" : {
        "shape" : "DescribeUserResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Returns information about an ActiveMQ user."
    },
    "ListBrokers" : {
      "name" : "ListBrokers",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/brokers",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListBrokersRequest"
      },
      "output" : {
        "shape" : "ListBrokersResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Returns a list of all brokers."
    },
    "ListConfigurationRevisions" : {
      "name" : "ListConfigurationRevisions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/configurations/{configuration-id}/revisions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListConfigurationRevisionsRequest"
      },
      "output" : {
        "shape" : "ListConfigurationRevisionsResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Returns a list of all revisions for the specified configuration."
    },
    "ListConfigurations" : {
      "name" : "ListConfigurations",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/configurations",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListConfigurationsRequest"
      },
      "output" : {
        "shape" : "ListConfigurationsResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Returns a list of all configurations."
    },
    "ListUsers" : {
      "name" : "ListUsers",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/brokers/{broker-id}/users",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListUsersRequest"
      },
      "output" : {
        "shape" : "ListUsersResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Returns a list of all ActiveMQ users."
    },
    "RebootBroker" : {
      "name" : "RebootBroker",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/brokers/{broker-id}/reboot",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "RebootBrokerRequest"
      },
      "output" : {
        "shape" : "RebootBrokerResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Reboots a broker. Note: This API is asynchronous."
    },
    "UpdateBroker" : {
      "name" : "UpdateBroker",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/brokers/{broker-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateBrokerRequest"
      },
      "output" : {
        "shape" : "UpdateBrokerResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Adds a pending configuration change to a broker."
    },
    "UpdateConfiguration" : {
      "name" : "UpdateConfiguration",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/configurations/{configuration-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateConfigurationRequest"
      },
      "output" : {
        "shape" : "UpdateConfigurationResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ConflictException",
        "documentation" : "HTTP Status Code 409: Conflict. This configuration name already exists. Retry your request with another configuration name."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your input and then retry your request."
      } ],
      "documentation" : "Updates the specified configuration."
    },
    "UpdateUser" : {
      "name" : "UpdateUser",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/brokers/{broker-id}/users/{username}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateUserRequest"
      },
      "output" : {
        "shape" : "UpdateUserResponse",
        "documentation" : "HTTP Status Code 200: OK."
      },
      "errors" : [ {
        "shape" : "NotFoundException",
        "documentation" : "HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "BadRequestException",
        "documentation" : "HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it."
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue."
      }, {
        "shape" : "ConflictException",
        "documentation" : "HTTP Status Code 409: Conflict. Retry your request."
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request."
      } ],
      "documentation" : "Updates the information for an ActiveMQ user."
    }
  },
  "shapes" : {
    "BadRequestException" : {
      "type" : "structure",
      "members" : {
        "ErrorAttribute" : {
          "shape" : "__string",
          "locationName" : "errorAttribute",
          "documentation" : "The attribute which caused the error."
        },
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The explanation of the error."
        }
      },
      "documentation" : "Returns information about an error.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 400
      }
    },
    "BrokerInstance" : {
      "type" : "structure",
      "members" : {
        "ConsoleURL" : {
          "shape" : "__string",
          "locationName" : "consoleURL",
          "documentation" : "The URL of the broker's ActiveMQ Web Console."
        },
        "Endpoints" : {
          "shape" : "__listOf__string",
          "locationName" : "endpoints",
          "documentation" : "The broker's wire-level protocol endpoints."
        },
        "IpAddress" : {
          "shape" : "__string",
          "locationName" : "ipAddress",
          "documentation" : "The IP address of the ENI attached to the broker."
        }
      },
      "documentation" : "Returns information about all brokers."
    },
    "BrokerState" : {
      "type" : "string",
      "documentation" : "The status of the broker.",
      "enum" : [ "CREATION_IN_PROGRESS", "CREATION_FAILED", "DELETION_IN_PROGRESS", "RUNNING", "REBOOT_IN_PROGRESS" ]
    },
    "BrokerSummary" : {
      "type" : "structure",
      "members" : {
        "BrokerArn" : {
          "shape" : "__string",
          "locationName" : "brokerArn",
          "documentation" : "The Amazon Resource Name (ARN) of the broker."
        },
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        },
        "BrokerName" : {
          "shape" : "__string",
          "locationName" : "brokerName",
          "documentation" : "The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters."
        },
        "BrokerState" : {
          "shape" : "BrokerState",
          "locationName" : "brokerState",
          "documentation" : "The status of the broker."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "The time when the broker was created."
        },
        "DeploymentMode" : {
          "shape" : "DeploymentMode",
          "locationName" : "deploymentMode",
          "documentation" : "Required. The deployment mode of the broker."
        },
        "HostInstanceType" : {
          "shape" : "__string",
          "locationName" : "hostInstanceType",
          "documentation" : "The broker's instance type."
        }
      },
      "documentation" : "The Amazon Resource Name (ARN) of the broker."
    },
    "ChangeType" : {
      "type" : "string",
      "documentation" : "The type of change pending for the ActiveMQ user.",
      "enum" : [ "CREATE", "UPDATE", "DELETE" ]
    },
    "Configuration" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "locationName" : "arn",
          "documentation" : "Required. The ARN of the configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration revision."
        },
        "Description" : {
          "shape" : "__string",
          "locationName" : "description",
          "documentation" : "Required. The description of the configuration."
        },
        "EngineType" : {
          "shape" : "EngineType",
          "locationName" : "engineType",
          "documentation" : "Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ."
        },
        "EngineVersion" : {
          "shape" : "__string",
          "locationName" : "engineVersion",
          "documentation" : "Required. The version of the broker engine."
        },
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "LatestRevision" : {
          "shape" : "ConfigurationRevision",
          "locationName" : "latestRevision",
          "documentation" : "Required. The latest revision of the configuration."
        },
        "Name" : {
          "shape" : "__string",
          "locationName" : "name",
          "documentation" : "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long."
        }
      },
      "documentation" : "Returns information about all configurations."
    },
    "ConfigurationId" : {
      "type" : "structure",
      "members" : {
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "Revision" : {
          "shape" : "__integer",
          "locationName" : "revision",
          "documentation" : "The revision number of the configuration."
        }
      },
      "documentation" : "A list of information about the configuration."
    },
    "ConfigurationRevision" : {
      "type" : "structure",
      "members" : {
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration revision."
        },
        "Description" : {
          "shape" : "__string",
          "locationName" : "description",
          "documentation" : "The description of the configuration revision."
        },
        "Revision" : {
          "shape" : "__integer",
          "locationName" : "revision",
          "documentation" : "Required. The revision number of the configuration."
        }
      },
      "documentation" : "Returns information about the specified configuration revision."
    },
    "Configurations" : {
      "type" : "structure",
      "members" : {
        "Current" : {
          "shape" : "ConfigurationId",
          "locationName" : "current",
          "documentation" : "The current configuration of the broker."
        },
        "History" : {
          "shape" : "__listOfConfigurationId",
          "locationName" : "history",
          "documentation" : "The history of configurations applied to the broker."
        },
        "Pending" : {
          "shape" : "ConfigurationId",
          "locationName" : "pending",
          "documentation" : "The pending configuration of the broker."
        }
      },
      "documentation" : "Broker configuration information"
    },
    "ConflictException" : {
      "type" : "structure",
      "members" : {
        "ErrorAttribute" : {
          "shape" : "__string",
          "locationName" : "errorAttribute",
          "documentation" : "The attribute which caused the error."
        },
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The explanation of the error."
        }
      },
      "documentation" : "Returns information about an error.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 409
      }
    },
    "CreateBrokerInput" : {
      "type" : "structure",
      "members" : {
        "AutoMinorVersionUpgrade" : {
          "shape" : "__boolean",
          "locationName" : "autoMinorVersionUpgrade",
          "documentation" : "Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot."
        },
        "BrokerName" : {
          "shape" : "__string",
          "locationName" : "brokerName",
          "documentation" : "Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters."
        },
        "Configuration" : {
          "shape" : "ConfigurationId",
          "locationName" : "configuration",
          "documentation" : "A list of information about the configuration."
        },
        "CreatorRequestId" : {
          "shape" : "__string",
          "locationName" : "creatorRequestId",
          "documentation" : "The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.",
          "idempotencyToken" : true
        },
        "DeploymentMode" : {
          "shape" : "DeploymentMode",
          "locationName" : "deploymentMode",
          "documentation" : "Required. The deployment mode of the broker."
        },
        "EngineType" : {
          "shape" : "EngineType",
          "locationName" : "engineType",
          "documentation" : "Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ."
        },
        "EngineVersion" : {
          "shape" : "__string",
          "locationName" : "engineVersion",
          "documentation" : "Required. The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0."
        },
        "HostInstanceType" : {
          "shape" : "__string",
          "locationName" : "hostInstanceType",
          "documentation" : "Required. The broker's instance type."
        },
        "Logs" : {
          "shape" : "Logs",
          "locationName" : "logs",
          "documentation" : "Enables Amazon CloudWatch logging for brokers."
        },
        "MaintenanceWindowStartTime" : {
          "shape" : "WeeklyStartTime",
          "locationName" : "maintenanceWindowStartTime",
          "documentation" : "The parameters that determine the WeeklyStartTime."
        },
        "PubliclyAccessible" : {
          "shape" : "__boolean",
          "locationName" : "publiclyAccessible",
          "documentation" : "Required. Enables connections from applications outside of the VPC that hosts the broker's subnets."
        },
        "SecurityGroups" : {
          "shape" : "__listOf__string",
          "locationName" : "securityGroups",
          "documentation" : "The list of rules (1 minimum, 125 maximum) that authorize connections to brokers."
        },
        "SubnetIds" : {
          "shape" : "__listOf__string",
          "locationName" : "subnetIds",
          "documentation" : "The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets."
        },
        "Users" : {
          "shape" : "__listOfUser",
          "locationName" : "users",
          "documentation" : "Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "documentation" : "Required. The time period during which Amazon MQ applies pending updates or patches to the broker."
    },
    "CreateBrokerOutput" : {
      "type" : "structure",
      "members" : {
        "BrokerArn" : {
          "shape" : "__string",
          "locationName" : "brokerArn",
          "documentation" : "The Amazon Resource Name (ARN) of the broker."
        },
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        }
      },
      "documentation" : "Returns information about the created broker."
    },
    "CreateBrokerRequest" : {
      "type" : "structure",
      "members" : {
        "AutoMinorVersionUpgrade" : {
          "shape" : "__boolean",
          "locationName" : "autoMinorVersionUpgrade",
          "documentation" : "Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot."
        },
        "BrokerName" : {
          "shape" : "__string",
          "locationName" : "brokerName",
          "documentation" : "Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters."
        },
        "Configuration" : {
          "shape" : "ConfigurationId",
          "locationName" : "configuration",
          "documentation" : "A list of information about the configuration."
        },
        "CreatorRequestId" : {
          "shape" : "__string",
          "locationName" : "creatorRequestId",
          "documentation" : "The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.",
          "idempotencyToken" : true
        },
        "DeploymentMode" : {
          "shape" : "DeploymentMode",
          "locationName" : "deploymentMode",
          "documentation" : "Required. The deployment mode of the broker."
        },
        "EngineType" : {
          "shape" : "EngineType",
          "locationName" : "engineType",
          "documentation" : "Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ."
        },
        "EngineVersion" : {
          "shape" : "__string",
          "locationName" : "engineVersion",
          "documentation" : "Required. The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0."
        },
        "HostInstanceType" : {
          "shape" : "__string",
          "locationName" : "hostInstanceType",
          "documentation" : "Required. The broker's instance type."
        },
        "Logs" : {
          "shape" : "Logs",
          "locationName" : "logs",
          "documentation" : "Enables Amazon CloudWatch logging for brokers."
        },
        "MaintenanceWindowStartTime" : {
          "shape" : "WeeklyStartTime",
          "locationName" : "maintenanceWindowStartTime",
          "documentation" : "The parameters that determine the WeeklyStartTime."
        },
        "PubliclyAccessible" : {
          "shape" : "__boolean",
          "locationName" : "publiclyAccessible",
          "documentation" : "Required. Enables connections from applications outside of the VPC that hosts the broker's subnets."
        },
        "SecurityGroups" : {
          "shape" : "__listOf__string",
          "locationName" : "securityGroups",
          "documentation" : "The list of rules (1 minimum, 125 maximum) that authorize connections to brokers."
        },
        "SubnetIds" : {
          "shape" : "__listOf__string",
          "locationName" : "subnetIds",
          "documentation" : "The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets."
        },
        "Users" : {
          "shape" : "__listOfUser",
          "locationName" : "users",
          "documentation" : "Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "documentation" : "Creates a broker using the specified properties."
    },
    "CreateBrokerResponse" : {
      "type" : "structure",
      "members" : {
        "BrokerArn" : {
          "shape" : "__string",
          "locationName" : "brokerArn",
          "documentation" : "The Amazon Resource Name (ARN) of the broker."
        },
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        }
      }
    },
    "CreateConfigurationInput" : {
      "type" : "structure",
      "members" : {
        "EngineType" : {
          "shape" : "EngineType",
          "locationName" : "engineType",
          "documentation" : "Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ."
        },
        "EngineVersion" : {
          "shape" : "__string",
          "locationName" : "engineVersion",
          "documentation" : "Required. The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0."
        },
        "Name" : {
          "shape" : "__string",
          "locationName" : "name",
          "documentation" : "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long."
        }
      },
      "documentation" : "Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version)."
    },
    "CreateConfigurationOutput" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "locationName" : "arn",
          "documentation" : "Required. The Amazon Resource Name (ARN) of the configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration."
        },
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "LatestRevision" : {
          "shape" : "ConfigurationRevision",
          "locationName" : "latestRevision",
          "documentation" : "The latest revision of the configuration."
        },
        "Name" : {
          "shape" : "__string",
          "locationName" : "name",
          "documentation" : "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long."
        }
      },
      "documentation" : "Returns information about the created configuration."
    },
    "CreateConfigurationRequest" : {
      "type" : "structure",
      "members" : {
        "EngineType" : {
          "shape" : "EngineType",
          "locationName" : "engineType",
          "documentation" : "Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ."
        },
        "EngineVersion" : {
          "shape" : "__string",
          "locationName" : "engineVersion",
          "documentation" : "Required. The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0."
        },
        "Name" : {
          "shape" : "__string",
          "locationName" : "name",
          "documentation" : "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long."
        }
      },
      "documentation" : "Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version)."
    },
    "CreateConfigurationResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "locationName" : "arn",
          "documentation" : "Required. The Amazon Resource Name (ARN) of the configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration."
        },
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "LatestRevision" : {
          "shape" : "ConfigurationRevision",
          "locationName" : "latestRevision",
          "documentation" : "The latest revision of the configuration."
        },
        "Name" : {
          "shape" : "__string",
          "locationName" : "name",
          "documentation" : "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long."
        }
      }
    },
    "CreateUserInput" : {
      "type" : "structure",
      "members" : {
        "ConsoleAccess" : {
          "shape" : "__boolean",
          "locationName" : "consoleAccess",
          "documentation" : "Enables access to the the ActiveMQ Web Console for the ActiveMQ user."
        },
        "Groups" : {
          "shape" : "__listOf__string",
          "locationName" : "groups",
          "documentation" : "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        },
        "Password" : {
          "shape" : "__string",
          "locationName" : "password",
          "documentation" : "Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas."
        }
      },
      "documentation" : "Creates a new ActiveMQ user."
    },
    "CreateUserRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        },
        "ConsoleAccess" : {
          "shape" : "__boolean",
          "locationName" : "consoleAccess",
          "documentation" : "Enables access to the the ActiveMQ Web Console for the ActiveMQ user."
        },
        "Groups" : {
          "shape" : "__listOf__string",
          "locationName" : "groups",
          "documentation" : "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        },
        "Password" : {
          "shape" : "__string",
          "locationName" : "password",
          "documentation" : "Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas."
        },
        "Username" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "username",
          "documentation" : "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "documentation" : "Creates a new ActiveMQ user.",
      "required" : [ "Username", "BrokerId" ]
    },
    "CreateUserResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DayOfWeek" : {
      "type" : "string",
      "enum" : [ "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY" ]
    },
    "DeleteBrokerOutput" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        }
      },
      "documentation" : "Returns information about the deleted broker."
    },
    "DeleteBrokerRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters."
        }
      },
      "required" : [ "BrokerId" ]
    },
    "DeleteBrokerResponse" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        }
      }
    },
    "DeleteUserRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        },
        "Username" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "username",
          "documentation" : "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "required" : [ "Username", "BrokerId" ]
    },
    "DeleteUserResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeploymentMode" : {
      "type" : "string",
      "documentation" : "The deployment mode of the broker.",
      "enum" : [ "SINGLE_INSTANCE", "ACTIVE_STANDBY_MULTI_AZ" ]
    },
    "DescribeBrokerOutput" : {
      "type" : "structure",
      "members" : {
        "AutoMinorVersionUpgrade" : {
          "shape" : "__boolean",
          "locationName" : "autoMinorVersionUpgrade",
          "documentation" : "Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot."
        },
        "BrokerArn" : {
          "shape" : "__string",
          "locationName" : "brokerArn",
          "documentation" : "The Amazon Resource Name (ARN) of the broker."
        },
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        },
        "BrokerInstances" : {
          "shape" : "__listOfBrokerInstance",
          "locationName" : "brokerInstances",
          "documentation" : "A list of information about allocated brokers."
        },
        "BrokerName" : {
          "shape" : "__string",
          "locationName" : "brokerName",
          "documentation" : "The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters."
        },
        "BrokerState" : {
          "shape" : "BrokerState",
          "locationName" : "brokerState",
          "documentation" : "The status of the broker."
        },
        "Configurations" : {
          "shape" : "Configurations",
          "locationName" : "configurations",
          "documentation" : "The list of all revisions for the specified configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "The time when the broker was created."
        },
        "DeploymentMode" : {
          "shape" : "DeploymentMode",
          "locationName" : "deploymentMode",
          "documentation" : "Required. The deployment mode of the broker."
        },
        "EngineType" : {
          "shape" : "EngineType",
          "locationName" : "engineType",
          "documentation" : "Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ."
        },
        "EngineVersion" : {
          "shape" : "__string",
          "locationName" : "engineVersion",
          "documentation" : "The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0."
        },
        "HostInstanceType" : {
          "shape" : "__string",
          "locationName" : "hostInstanceType",
          "documentation" : "The broker's instance type."
        },
        "Logs" : {
          "shape" : "LogsSummary",
          "locationName" : "logs",
          "documentation" : "The list of information about logs currently enabled and pending to be deployed for the specified broker."
        },
        "MaintenanceWindowStartTime" : {
          "shape" : "WeeklyStartTime",
          "locationName" : "maintenanceWindowStartTime",
          "documentation" : "The parameters that determine the WeeklyStartTime."
        },
        "PubliclyAccessible" : {
          "shape" : "__boolean",
          "locationName" : "publiclyAccessible",
          "documentation" : "Required. Enables connections from applications outside of the VPC that hosts the broker's subnets."
        },
        "SecurityGroups" : {
          "shape" : "__listOf__string",
          "locationName" : "securityGroups",
          "documentation" : "Required. The list of rules (1 minimum, 125 maximum) that authorize connections to brokers."
        },
        "SubnetIds" : {
          "shape" : "__listOf__string",
          "locationName" : "subnetIds",
          "documentation" : "The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets."
        },
        "Users" : {
          "shape" : "__listOfUserSummary",
          "locationName" : "users",
          "documentation" : "The list of all ActiveMQ usernames for the specified broker."
        }
      },
      "documentation" : "The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0."
    },
    "DescribeBrokerRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters."
        }
      },
      "required" : [ "BrokerId" ]
    },
    "DescribeBrokerResponse" : {
      "type" : "structure",
      "members" : {
        "AutoMinorVersionUpgrade" : {
          "shape" : "__boolean",
          "locationName" : "autoMinorVersionUpgrade",
          "documentation" : "Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot."
        },
        "BrokerArn" : {
          "shape" : "__string",
          "locationName" : "brokerArn",
          "documentation" : "The Amazon Resource Name (ARN) of the broker."
        },
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        },
        "BrokerInstances" : {
          "shape" : "__listOfBrokerInstance",
          "locationName" : "brokerInstances",
          "documentation" : "A list of information about allocated brokers."
        },
        "BrokerName" : {
          "shape" : "__string",
          "locationName" : "brokerName",
          "documentation" : "The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters."
        },
        "BrokerState" : {
          "shape" : "BrokerState",
          "locationName" : "brokerState",
          "documentation" : "The status of the broker."
        },
        "Configurations" : {
          "shape" : "Configurations",
          "locationName" : "configurations",
          "documentation" : "The list of all revisions for the specified configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "The time when the broker was created."
        },
        "DeploymentMode" : {
          "shape" : "DeploymentMode",
          "locationName" : "deploymentMode",
          "documentation" : "Required. The deployment mode of the broker."
        },
        "EngineType" : {
          "shape" : "EngineType",
          "locationName" : "engineType",
          "documentation" : "Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ."
        },
        "EngineVersion" : {
          "shape" : "__string",
          "locationName" : "engineVersion",
          "documentation" : "The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0."
        },
        "HostInstanceType" : {
          "shape" : "__string",
          "locationName" : "hostInstanceType",
          "documentation" : "The broker's instance type."
        },
        "Logs" : {
          "shape" : "LogsSummary",
          "locationName" : "logs",
          "documentation" : "The list of information about logs currently enabled and pending to be deployed for the specified broker."
        },
        "MaintenanceWindowStartTime" : {
          "shape" : "WeeklyStartTime",
          "locationName" : "maintenanceWindowStartTime",
          "documentation" : "The parameters that determine the WeeklyStartTime."
        },
        "PubliclyAccessible" : {
          "shape" : "__boolean",
          "locationName" : "publiclyAccessible",
          "documentation" : "Required. Enables connections from applications outside of the VPC that hosts the broker's subnets."
        },
        "SecurityGroups" : {
          "shape" : "__listOf__string",
          "locationName" : "securityGroups",
          "documentation" : "Required. The list of rules (1 minimum, 125 maximum) that authorize connections to brokers."
        },
        "SubnetIds" : {
          "shape" : "__listOf__string",
          "locationName" : "subnetIds",
          "documentation" : "The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets."
        },
        "Users" : {
          "shape" : "__listOfUserSummary",
          "locationName" : "users",
          "documentation" : "The list of all ActiveMQ usernames for the specified broker."
        }
      }
    },
    "DescribeConfigurationRequest" : {
      "type" : "structure",
      "members" : {
        "ConfigurationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "configuration-id",
          "documentation" : "The unique ID that Amazon MQ generates for the configuration."
        }
      },
      "required" : [ "ConfigurationId" ]
    },
    "DescribeConfigurationResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "locationName" : "arn",
          "documentation" : "Required. The ARN of the configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration revision."
        },
        "Description" : {
          "shape" : "__string",
          "locationName" : "description",
          "documentation" : "Required. The description of the configuration."
        },
        "EngineType" : {
          "shape" : "EngineType",
          "locationName" : "engineType",
          "documentation" : "Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ."
        },
        "EngineVersion" : {
          "shape" : "__string",
          "locationName" : "engineVersion",
          "documentation" : "Required. The version of the broker engine."
        },
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "LatestRevision" : {
          "shape" : "ConfigurationRevision",
          "locationName" : "latestRevision",
          "documentation" : "Required. The latest revision of the configuration."
        },
        "Name" : {
          "shape" : "__string",
          "locationName" : "name",
          "documentation" : "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long."
        }
      }
    },
    "DescribeConfigurationRevisionOutput" : {
      "type" : "structure",
      "members" : {
        "ConfigurationId" : {
          "shape" : "__string",
          "locationName" : "configurationId",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration."
        },
        "Data" : {
          "shape" : "__string",
          "locationName" : "data",
          "documentation" : "Required. The base64-encoded XML configuration."
        },
        "Description" : {
          "shape" : "__string",
          "locationName" : "description",
          "documentation" : "The description of the configuration."
        }
      },
      "documentation" : "Returns the specified configuration revision for the specified configuration."
    },
    "DescribeConfigurationRevisionRequest" : {
      "type" : "structure",
      "members" : {
        "ConfigurationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "configuration-id",
          "documentation" : "The unique ID that Amazon MQ generates for the configuration."
        },
        "ConfigurationRevision" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "configuration-revision",
          "documentation" : "The revision of the configuration."
        }
      },
      "required" : [ "ConfigurationRevision", "ConfigurationId" ]
    },
    "DescribeConfigurationRevisionResponse" : {
      "type" : "structure",
      "members" : {
        "ConfigurationId" : {
          "shape" : "__string",
          "locationName" : "configurationId",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration."
        },
        "Data" : {
          "shape" : "__string",
          "locationName" : "data",
          "documentation" : "Required. The base64-encoded XML configuration."
        },
        "Description" : {
          "shape" : "__string",
          "locationName" : "description",
          "documentation" : "The description of the configuration."
        }
      }
    },
    "DescribeUserOutput" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the broker."
        },
        "ConsoleAccess" : {
          "shape" : "__boolean",
          "locationName" : "consoleAccess",
          "documentation" : "Enables access to the the ActiveMQ Web Console for the ActiveMQ user."
        },
        "Groups" : {
          "shape" : "__listOf__string",
          "locationName" : "groups",
          "documentation" : "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        },
        "Pending" : {
          "shape" : "UserPendingChanges",
          "locationName" : "pending",
          "documentation" : "The status of the changes pending for the ActiveMQ user."
        },
        "Username" : {
          "shape" : "__string",
          "locationName" : "username",
          "documentation" : "Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "documentation" : "Returns information about an ActiveMQ user."
    },
    "DescribeUserRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        },
        "Username" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "username",
          "documentation" : "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "required" : [ "Username", "BrokerId" ]
    },
    "DescribeUserResponse" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the broker."
        },
        "ConsoleAccess" : {
          "shape" : "__boolean",
          "locationName" : "consoleAccess",
          "documentation" : "Enables access to the the ActiveMQ Web Console for the ActiveMQ user."
        },
        "Groups" : {
          "shape" : "__listOf__string",
          "locationName" : "groups",
          "documentation" : "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        },
        "Pending" : {
          "shape" : "UserPendingChanges",
          "locationName" : "pending",
          "documentation" : "The status of the changes pending for the ActiveMQ user."
        },
        "Username" : {
          "shape" : "__string",
          "locationName" : "username",
          "documentation" : "Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      }
    },
    "EngineType" : {
      "type" : "string",
      "documentation" : "The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ.",
      "enum" : [ "ACTIVEMQ" ]
    },
    "Error" : {
      "type" : "structure",
      "members" : {
        "ErrorAttribute" : {
          "shape" : "__string",
          "locationName" : "errorAttribute",
          "documentation" : "The attribute which caused the error."
        },
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The explanation of the error."
        }
      },
      "documentation" : "Returns information about an error."
    },
    "ForbiddenException" : {
      "type" : "structure",
      "members" : {
        "ErrorAttribute" : {
          "shape" : "__string",
          "locationName" : "errorAttribute",
          "documentation" : "The attribute which caused the error."
        },
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The explanation of the error."
        }
      },
      "documentation" : "Returns information about an error.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 403
      }
    },
    "InternalServerErrorException" : {
      "type" : "structure",
      "members" : {
        "ErrorAttribute" : {
          "shape" : "__string",
          "locationName" : "errorAttribute",
          "documentation" : "The attribute which caused the error."
        },
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The explanation of the error."
        }
      },
      "documentation" : "Returns information about an error.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 500
      }
    },
    "ListBrokersOutput" : {
      "type" : "structure",
      "members" : {
        "BrokerSummaries" : {
          "shape" : "__listOfBrokerSummary",
          "locationName" : "brokerSummaries",
          "documentation" : "A list of information about all brokers."
        },
        "NextToken" : {
          "shape" : "__string",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        }
      },
      "documentation" : "A list of information about all brokers."
    },
    "ListBrokersRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        }
      }
    },
    "ListBrokersResponse" : {
      "type" : "structure",
      "members" : {
        "BrokerSummaries" : {
          "shape" : "__listOfBrokerSummary",
          "locationName" : "brokerSummaries",
          "documentation" : "A list of information about all brokers."
        },
        "NextToken" : {
          "shape" : "__string",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        }
      }
    },
    "ListConfigurationRevisionsOutput" : {
      "type" : "structure",
      "members" : {
        "ConfigurationId" : {
          "shape" : "__string",
          "locationName" : "configurationId",
          "documentation" : "The unique ID that Amazon MQ generates for the configuration."
        },
        "MaxResults" : {
          "shape" : "__integer",
          "locationName" : "maxResults",
          "documentation" : "The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        },
        "Revisions" : {
          "shape" : "__listOfConfigurationRevision",
          "locationName" : "revisions",
          "documentation" : "The list of all revisions for the specified configuration."
        }
      },
      "documentation" : "Returns a list of all revisions for the specified configuration."
    },
    "ListConfigurationRevisionsRequest" : {
      "type" : "structure",
      "members" : {
        "ConfigurationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "configuration-id",
          "documentation" : "The unique ID that Amazon MQ generates for the configuration."
        },
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        }
      },
      "required" : [ "ConfigurationId" ]
    },
    "ListConfigurationRevisionsResponse" : {
      "type" : "structure",
      "members" : {
        "ConfigurationId" : {
          "shape" : "__string",
          "locationName" : "configurationId",
          "documentation" : "The unique ID that Amazon MQ generates for the configuration."
        },
        "MaxResults" : {
          "shape" : "__integer",
          "locationName" : "maxResults",
          "documentation" : "The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        },
        "Revisions" : {
          "shape" : "__listOfConfigurationRevision",
          "locationName" : "revisions",
          "documentation" : "The list of all revisions for the specified configuration."
        }
      }
    },
    "ListConfigurationsOutput" : {
      "type" : "structure",
      "members" : {
        "Configurations" : {
          "shape" : "__listOfConfiguration",
          "locationName" : "configurations",
          "documentation" : "The list of all revisions for the specified configuration."
        },
        "MaxResults" : {
          "shape" : "__integer",
          "locationName" : "maxResults",
          "documentation" : "The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        }
      },
      "documentation" : "Returns a list of all configurations."
    },
    "ListConfigurationsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        }
      }
    },
    "ListConfigurationsResponse" : {
      "type" : "structure",
      "members" : {
        "Configurations" : {
          "shape" : "__listOfConfiguration",
          "locationName" : "configurations",
          "documentation" : "The list of all revisions for the specified configuration."
        },
        "MaxResults" : {
          "shape" : "__integer",
          "locationName" : "maxResults",
          "documentation" : "The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        }
      }
    },
    "ListUsersOutput" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the broker."
        },
        "MaxResults" : {
          "shape" : "__integerMin5Max100",
          "locationName" : "maxResults",
          "documentation" : "Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        },
        "Users" : {
          "shape" : "__listOfUserSummary",
          "locationName" : "users",
          "documentation" : "Required. The list of all ActiveMQ usernames for the specified broker."
        }
      },
      "documentation" : "Returns a list of all ActiveMQ users."
    },
    "ListUsersRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        },
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        }
      },
      "required" : [ "BrokerId" ]
    },
    "ListUsersResponse" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the broker."
        },
        "MaxResults" : {
          "shape" : "__integerMin5Max100",
          "locationName" : "maxResults",
          "documentation" : "Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100."
        },
        "NextToken" : {
          "shape" : "__string",
          "locationName" : "nextToken",
          "documentation" : "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty."
        },
        "Users" : {
          "shape" : "__listOfUserSummary",
          "locationName" : "users",
          "documentation" : "Required. The list of all ActiveMQ usernames for the specified broker."
        }
      }
    },
    "Logs" : {
      "type" : "structure",
      "members" : {
        "Audit" : {
          "shape" : "__boolean",
          "locationName" : "audit",
          "documentation" : "Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged."
        },
        "General" : {
          "shape" : "__boolean",
          "locationName" : "general",
          "documentation" : "Enables general logging."
        }
      },
      "documentation" : "The list of information about logs to be enabled for the specified broker."
    },
    "LogsSummary" : {
      "type" : "structure",
      "members" : {
        "Audit" : {
          "shape" : "__boolean",
          "locationName" : "audit",
          "documentation" : "Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged."
        },
        "AuditLogGroup" : {
          "shape" : "__string",
          "locationName" : "auditLogGroup",
          "documentation" : "Location of CloudWatch Log group where audit logs will be sent."
        },
        "General" : {
          "shape" : "__boolean",
          "locationName" : "general",
          "documentation" : "Enables general logging."
        },
        "GeneralLogGroup" : {
          "shape" : "__string",
          "locationName" : "generalLogGroup",
          "documentation" : "Location of CloudWatch Log group where general logs will be sent."
        },
        "Pending" : {
          "shape" : "PendingLogs",
          "locationName" : "pending",
          "documentation" : "The list of information about logs pending to be deployed for the specified broker."
        }
      },
      "documentation" : "The list of information about logs currently enabled and pending to be deployed for the specified broker."
    },
    "MaxResults" : {
      "type" : "integer",
      "min" : 1,
      "max" : 100
    },
    "NotFoundException" : {
      "type" : "structure",
      "members" : {
        "ErrorAttribute" : {
          "shape" : "__string",
          "locationName" : "errorAttribute",
          "documentation" : "The attribute which caused the error."
        },
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The explanation of the error."
        }
      },
      "documentation" : "Returns information about an error.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 404
      }
    },
    "PendingLogs" : {
      "type" : "structure",
      "members" : {
        "Audit" : {
          "shape" : "__boolean",
          "locationName" : "audit",
          "documentation" : "Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged."
        },
        "General" : {
          "shape" : "__boolean",
          "locationName" : "general",
          "documentation" : "Enables general logging."
        }
      },
      "documentation" : "The list of information about logs to be enabled for the specified broker."
    },
    "RebootBrokerRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        }
      },
      "required" : [ "BrokerId" ]
    },
    "RebootBrokerResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "SanitizationWarning" : {
      "type" : "structure",
      "members" : {
        "AttributeName" : {
          "shape" : "__string",
          "locationName" : "attributeName",
          "documentation" : "The name of the XML attribute that has been sanitized."
        },
        "ElementName" : {
          "shape" : "__string",
          "locationName" : "elementName",
          "documentation" : "The name of the XML element that has been sanitized."
        },
        "Reason" : {
          "shape" : "SanitizationWarningReason",
          "locationName" : "reason",
          "documentation" : "Required. The reason for which the XML elements or attributes were sanitized."
        }
      },
      "documentation" : "Returns information about the XML element or attribute that was sanitized in the configuration."
    },
    "SanitizationWarningReason" : {
      "type" : "string",
      "documentation" : "The reason for which the XML elements or attributes were sanitized.",
      "enum" : [ "DISALLOWED_ELEMENT_REMOVED", "DISALLOWED_ATTRIBUTE_REMOVED", "INVALID_ATTRIBUTE_VALUE_REMOVED" ]
    },
    "UnauthorizedException" : {
      "type" : "structure",
      "members" : {
        "ErrorAttribute" : {
          "shape" : "__string",
          "locationName" : "errorAttribute",
          "documentation" : "The attribute which caused the error."
        },
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The explanation of the error."
        }
      },
      "documentation" : "Returns information about an error.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 401
      }
    },
    "UpdateBrokerInput" : {
      "type" : "structure",
      "members" : {
        "Configuration" : {
          "shape" : "ConfigurationId",
          "locationName" : "configuration",
          "documentation" : "A list of information about the configuration."
        },
        "Logs" : {
          "shape" : "Logs",
          "locationName" : "logs",
          "documentation" : "Enables Amazon CloudWatch logging for brokers."
        }
      },
      "documentation" : "Updates the broker using the specified properties."
    },
    "UpdateBrokerOutput" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the broker."
        },
        "Configuration" : {
          "shape" : "ConfigurationId",
          "locationName" : "configuration",
          "documentation" : "The ID of the updated configuration."
        },
        "Logs" : {
          "shape" : "Logs",
          "locationName" : "logs",
          "documentation" : "The list of information about logs to be enabled for the specified broker."
        }
      },
      "documentation" : "Returns information about the updated broker."
    },
    "UpdateBrokerRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters."
        },
        "Configuration" : {
          "shape" : "ConfigurationId",
          "locationName" : "configuration",
          "documentation" : "A list of information about the configuration."
        },
        "Logs" : {
          "shape" : "Logs",
          "locationName" : "logs",
          "documentation" : "Enables Amazon CloudWatch logging for brokers."
        }
      },
      "documentation" : "Updates the broker using the specified properties.",
      "required" : [ "BrokerId" ]
    },
    "UpdateBrokerResponse" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "locationName" : "brokerId",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the broker."
        },
        "Configuration" : {
          "shape" : "ConfigurationId",
          "locationName" : "configuration",
          "documentation" : "The ID of the updated configuration."
        },
        "Logs" : {
          "shape" : "Logs",
          "locationName" : "logs",
          "documentation" : "The list of information about logs to be enabled for the specified broker."
        }
      }
    },
    "UpdateConfigurationInput" : {
      "type" : "structure",
      "members" : {
        "Data" : {
          "shape" : "__string",
          "locationName" : "data",
          "documentation" : "Required. The base64-encoded XML configuration."
        },
        "Description" : {
          "shape" : "__string",
          "locationName" : "description",
          "documentation" : "The description of the configuration."
        }
      },
      "documentation" : "Updates the specified configuration."
    },
    "UpdateConfigurationOutput" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "locationName" : "arn",
          "documentation" : "Required. The Amazon Resource Name (ARN) of the configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration."
        },
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "LatestRevision" : {
          "shape" : "ConfigurationRevision",
          "locationName" : "latestRevision",
          "documentation" : "The latest revision of the configuration."
        },
        "Name" : {
          "shape" : "__string",
          "locationName" : "name",
          "documentation" : "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long."
        },
        "Warnings" : {
          "shape" : "__listOfSanitizationWarning",
          "locationName" : "warnings",
          "documentation" : "The list of the first 20 warnings about the configuration XML elements or attributes that were sanitized."
        }
      },
      "documentation" : "Returns information about the updated configuration."
    },
    "UpdateConfigurationRequest" : {
      "type" : "structure",
      "members" : {
        "ConfigurationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "configuration-id",
          "documentation" : "The unique ID that Amazon MQ generates for the configuration."
        },
        "Data" : {
          "shape" : "__string",
          "locationName" : "data",
          "documentation" : "Required. The base64-encoded XML configuration."
        },
        "Description" : {
          "shape" : "__string",
          "locationName" : "description",
          "documentation" : "The description of the configuration."
        }
      },
      "documentation" : "Updates the specified configuration.",
      "required" : [ "ConfigurationId" ]
    },
    "UpdateConfigurationResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "locationName" : "arn",
          "documentation" : "Required. The Amazon Resource Name (ARN) of the configuration."
        },
        "Created" : {
          "shape" : "__timestampIso8601",
          "locationName" : "created",
          "documentation" : "Required. The date and time of the configuration."
        },
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "Required. The unique ID that Amazon MQ generates for the configuration."
        },
        "LatestRevision" : {
          "shape" : "ConfigurationRevision",
          "locationName" : "latestRevision",
          "documentation" : "The latest revision of the configuration."
        },
        "Name" : {
          "shape" : "__string",
          "locationName" : "name",
          "documentation" : "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long."
        },
        "Warnings" : {
          "shape" : "__listOfSanitizationWarning",
          "locationName" : "warnings",
          "documentation" : "The list of the first 20 warnings about the configuration XML elements or attributes that were sanitized."
        }
      }
    },
    "UpdateUserInput" : {
      "type" : "structure",
      "members" : {
        "ConsoleAccess" : {
          "shape" : "__boolean",
          "locationName" : "consoleAccess",
          "documentation" : "Enables access to the the ActiveMQ Web Console for the ActiveMQ user."
        },
        "Groups" : {
          "shape" : "__listOf__string",
          "locationName" : "groups",
          "documentation" : "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        },
        "Password" : {
          "shape" : "__string",
          "locationName" : "password",
          "documentation" : "The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas."
        }
      },
      "documentation" : "Updates the information for an ActiveMQ user."
    },
    "UpdateUserRequest" : {
      "type" : "structure",
      "members" : {
        "BrokerId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "broker-id",
          "documentation" : "The unique ID that Amazon MQ generates for the broker."
        },
        "ConsoleAccess" : {
          "shape" : "__boolean",
          "locationName" : "consoleAccess",
          "documentation" : "Enables access to the the ActiveMQ Web Console for the ActiveMQ user."
        },
        "Groups" : {
          "shape" : "__listOf__string",
          "locationName" : "groups",
          "documentation" : "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        },
        "Password" : {
          "shape" : "__string",
          "locationName" : "password",
          "documentation" : "The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas."
        },
        "Username" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "username",
          "documentation" : "Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "documentation" : "Updates the information for an ActiveMQ user.",
      "required" : [ "Username", "BrokerId" ]
    },
    "UpdateUserResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "User" : {
      "type" : "structure",
      "members" : {
        "ConsoleAccess" : {
          "shape" : "__boolean",
          "locationName" : "consoleAccess",
          "documentation" : "Enables access to the the ActiveMQ Web Console for the ActiveMQ user."
        },
        "Groups" : {
          "shape" : "__listOf__string",
          "locationName" : "groups",
          "documentation" : "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        },
        "Password" : {
          "shape" : "__string",
          "locationName" : "password",
          "documentation" : "Required. The password of the ActiveMQ user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas."
        },
        "Username" : {
          "shape" : "__string",
          "locationName" : "username",
          "documentation" : "Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "documentation" : "An ActiveMQ user associated with the broker."
    },
    "UserPendingChanges" : {
      "type" : "structure",
      "members" : {
        "ConsoleAccess" : {
          "shape" : "__boolean",
          "locationName" : "consoleAccess",
          "documentation" : "Enables access to the the ActiveMQ Web Console for the ActiveMQ user."
        },
        "Groups" : {
          "shape" : "__listOf__string",
          "locationName" : "groups",
          "documentation" : "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        },
        "PendingChange" : {
          "shape" : "ChangeType",
          "locationName" : "pendingChange",
          "documentation" : "Required. The type of change pending for the ActiveMQ user."
        }
      },
      "documentation" : "Returns information about the status of the changes pending for the ActiveMQ user."
    },
    "UserSummary" : {
      "type" : "structure",
      "members" : {
        "PendingChange" : {
          "shape" : "ChangeType",
          "locationName" : "pendingChange",
          "documentation" : "The type of change pending for the ActiveMQ user."
        },
        "Username" : {
          "shape" : "__string",
          "locationName" : "username",
          "documentation" : "Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long."
        }
      },
      "documentation" : "Returns a list of all ActiveMQ users."
    },
    "WeeklyStartTime" : {
      "type" : "structure",
      "members" : {
        "DayOfWeek" : {
          "shape" : "DayOfWeek",
          "locationName" : "dayOfWeek",
          "documentation" : "Required. The day of the week."
        },
        "TimeOfDay" : {
          "shape" : "__string",
          "locationName" : "timeOfDay",
          "documentation" : "Required. The time, in 24-hour format."
        },
        "TimeZone" : {
          "shape" : "__string",
          "locationName" : "timeZone",
          "documentation" : "The time zone, UTC by default, in either the Country/City format, or the UTC offset format."
        }
      },
      "documentation" : "The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker."
    },
    "__boolean" : {
      "type" : "boolean"
    },
    "__double" : {
      "type" : "double"
    },
    "__integer" : {
      "type" : "integer"
    },
    "__integerMin5Max100" : {
      "type" : "integer",
      "min" : 5,
      "max" : 100
    },
    "__listOfBrokerInstance" : {
      "type" : "list",
      "member" : {
        "shape" : "BrokerInstance"
      }
    },
    "__listOfBrokerSummary" : {
      "type" : "list",
      "member" : {
        "shape" : "BrokerSummary"
      }
    },
    "__listOfConfiguration" : {
      "type" : "list",
      "member" : {
        "shape" : "Configuration"
      }
    },
    "__listOfConfigurationId" : {
      "type" : "list",
      "member" : {
        "shape" : "ConfigurationId"
      }
    },
    "__listOfConfigurationRevision" : {
      "type" : "list",
      "member" : {
        "shape" : "ConfigurationRevision"
      }
    },
    "__listOfSanitizationWarning" : {
      "type" : "list",
      "member" : {
        "shape" : "SanitizationWarning"
      }
    },
    "__listOfUser" : {
      "type" : "list",
      "member" : {
        "shape" : "User"
      }
    },
    "__listOfUserSummary" : {
      "type" : "list",
      "member" : {
        "shape" : "UserSummary"
      }
    },
    "__listOf__string" : {
      "type" : "list",
      "member" : {
        "shape" : "__string"
      }
    },
    "__long" : {
      "type" : "long"
    },
    "__string" : {
      "type" : "string"
    },
    "__timestampIso8601" : {
      "type" : "timestamp",
      "timestampFormat" : "iso8601"
    },
    "__timestampUnix" : {
      "type" : "timestamp",
      "timestampFormat" : "unixTimestamp"
    }
  },
  "documentation" : "Amazon MQ is a managed message broker service for Apache ActiveMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols."
}