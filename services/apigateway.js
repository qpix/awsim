awsim['apigateway'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-07-09",
    "endpointPrefix":"apigateway",
    "protocol":"rest-json",
    "serviceFullName":"Amazon API Gateway",
    "serviceId":"API Gateway",
    "signatureVersion":"v4",
    "uid":"apigateway-2015-07-09"
  },
  "operations":{
    "CreateApiKey":{
      "name":"CreateApiKey",
      "http":{
        "method":"POST",
        "requestUri":"/apikeys",
        "responseCode":201
      },
      "input":{"shape":"CreateApiKeyRequest"},
      "output":{"shape":"ApiKey"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"LimitExceededException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Create an <a>ApiKey</a> resource. </p> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html\">AWS CLI</a></div>"
    },
    "CreateAuthorizer":{
      "name":"CreateAuthorizer",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/authorizers",
        "responseCode":201
      },
      "input":{"shape":"CreateAuthorizerRequest"},
      "output":{"shape":"Authorizer"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Adds a new <a>Authorizer</a> resource to an existing <a>RestApi</a> resource.</p> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html\">AWS CLI</a></div>"
    },
    "CreateBasePathMapping":{
      "name":"CreateBasePathMapping",
      "http":{
        "method":"POST",
        "requestUri":"/domainnames/{domain_name}/basepathmappings",
        "responseCode":201
      },
      "input":{"shape":"CreateBasePathMappingRequest"},
      "output":{"shape":"BasePathMapping"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a new <a>BasePathMapping</a> resource.</p>"
    },
    "CreateDeployment":{
      "name":"CreateDeployment",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/deployments",
        "responseCode":201
      },
      "input":{"shape":"CreateDeploymentRequest"},
      "output":{"shape":"Deployment"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.</p>"
    },
    "CreateDocumentationPart":{
      "name":"CreateDocumentationPart",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/documentation/parts",
        "responseCode":201
      },
      "input":{"shape":"CreateDocumentationPartRequest"},
      "output":{"shape":"DocumentationPart"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "CreateDocumentationVersion":{
      "name":"CreateDocumentationVersion",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/documentation/versions",
        "responseCode":201
      },
      "input":{"shape":"CreateDocumentationVersionRequest"},
      "output":{"shape":"DocumentationVersion"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "CreateDomainName":{
      "name":"CreateDomainName",
      "http":{
        "method":"POST",
        "requestUri":"/domainnames",
        "responseCode":201
      },
      "input":{"shape":"CreateDomainNameRequest"},
      "output":{"shape":"DomainName"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a new domain name.</p>"
    },
    "CreateModel":{
      "name":"CreateModel",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/models",
        "responseCode":201
      },
      "input":{"shape":"CreateModelRequest"},
      "output":{"shape":"Model"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Adds a new <a>Model</a> resource to an existing <a>RestApi</a> resource.</p>"
    },
    "CreateRequestValidator":{
      "name":"CreateRequestValidator",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/requestvalidators",
        "responseCode":201
      },
      "input":{"shape":"CreateRequestValidatorRequest"},
      "output":{"shape":"RequestValidator"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.</p>"
    },
    "CreateResource":{
      "name":"CreateResource",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/resources/{parent_id}",
        "responseCode":201
      },
      "input":{"shape":"CreateResourceRequest"},
      "output":{"shape":"Resource"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a <a>Resource</a> resource.</p>"
    },
    "CreateRestApi":{
      "name":"CreateRestApi",
      "http":{
        "method":"POST",
        "requestUri":"/restapis",
        "responseCode":201
      },
      "input":{"shape":"CreateRestApiRequest"},
      "output":{"shape":"RestApi"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"LimitExceededException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a new <a>RestApi</a> resource.</p>"
    },
    "CreateStage":{
      "name":"CreateStage",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/stages",
        "responseCode":201
      },
      "input":{"shape":"CreateStageRequest"},
      "output":{"shape":"Stage"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API. </p>"
    },
    "CreateUsagePlan":{
      "name":"CreateUsagePlan",
      "http":{
        "method":"POST",
        "requestUri":"/usageplans",
        "responseCode":201
      },
      "input":{"shape":"CreateUsagePlanRequest"},
      "output":{"shape":"UsagePlan"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"LimitExceededException"},
        {"shape":"ConflictException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. </p>"
    },
    "CreateUsagePlanKey":{
      "name":"CreateUsagePlanKey",
      "http":{
        "method":"POST",
        "requestUri":"/usageplans/{usageplanId}/keys",
        "responseCode":201
      },
      "input":{"shape":"CreateUsagePlanKeyRequest"},
      "output":{"shape":"UsagePlanKey"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a usage plan key for adding an existing API key to a usage plan.</p>"
    },
    "CreateVpcLink":{
      "name":"CreateVpcLink",
      "http":{
        "method":"POST",
        "requestUri":"/vpclinks",
        "responseCode":202
      },
      "input":{"shape":"CreateVpcLinkRequest"},
      "output":{"shape":"VpcLink"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>"
    },
    "DeleteApiKey":{
      "name":"DeleteApiKey",
      "http":{
        "method":"DELETE",
        "requestUri":"/apikeys/{api_Key}",
        "responseCode":202
      },
      "input":{"shape":"DeleteApiKeyRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes the <a>ApiKey</a> resource.</p>"
    },
    "DeleteAuthorizer":{
      "name":"DeleteAuthorizer",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/authorizers/{authorizer_id}",
        "responseCode":202
      },
      "input":{"shape":"DeleteAuthorizerRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Deletes an existing <a>Authorizer</a> resource.</p> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html\">AWS CLI</a></div>"
    },
    "DeleteBasePathMapping":{
      "name":"DeleteBasePathMapping",
      "http":{
        "method":"DELETE",
        "requestUri":"/domainnames/{domain_name}/basepathmappings/{base_path}",
        "responseCode":202
      },
      "input":{"shape":"DeleteBasePathMappingRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes the <a>BasePathMapping</a> resource.</p>"
    },
    "DeleteClientCertificate":{
      "name":"DeleteClientCertificate",
      "http":{
        "method":"DELETE",
        "requestUri":"/clientcertificates/{clientcertificate_id}",
        "responseCode":202
      },
      "input":{"shape":"DeleteClientCertificateRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes the <a>ClientCertificate</a> resource.</p>"
    },
    "DeleteDeployment":{
      "name":"DeleteDeployment",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/deployments/{deployment_id}",
        "responseCode":202
      },
      "input":{"shape":"DeleteDeploymentRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes a <a>Deployment</a> resource. Deleting a deployment will only succeed if there are no <a>Stage</a> resources associated with it.</p>"
    },
    "DeleteDocumentationPart":{
      "name":"DeleteDocumentationPart",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/documentation/parts/{part_id}",
        "responseCode":202
      },
      "input":{"shape":"DeleteDocumentationPartRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"}
      ]
    },
    "DeleteDocumentationVersion":{
      "name":"DeleteDocumentationVersion",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/documentation/versions/{doc_version}",
        "responseCode":202
      },
      "input":{"shape":"DeleteDocumentationVersionRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "DeleteDomainName":{
      "name":"DeleteDomainName",
      "http":{
        "method":"DELETE",
        "requestUri":"/domainnames/{domain_name}",
        "responseCode":202
      },
      "input":{"shape":"DeleteDomainNameRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes the <a>DomainName</a> resource.</p>"
    },
    "DeleteGatewayResponse":{
      "name":"DeleteGatewayResponse",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/gatewayresponses/{response_type}",
        "responseCode":202
      },
      "input":{"shape":"DeleteGatewayResponseRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>"
    },
    "DeleteIntegration":{
      "name":"DeleteIntegration",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration",
        "responseCode":204
      },
      "input":{"shape":"DeleteIntegrationRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Represents a delete integration.</p>"
    },
    "DeleteIntegrationResponse":{
      "name":"DeleteIntegrationResponse",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}",
        "responseCode":204
      },
      "input":{"shape":"DeleteIntegrationResponseRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Represents a delete integration response.</p>"
    },
    "DeleteMethod":{
      "name":"DeleteMethod",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}",
        "responseCode":204
      },
      "input":{"shape":"DeleteMethodRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Deletes an existing <a>Method</a> resource.</p>"
    },
    "DeleteMethodResponse":{
      "name":"DeleteMethodResponse",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
        "responseCode":204
      },
      "input":{"shape":"DeleteMethodResponseRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Deletes an existing <a>MethodResponse</a> resource.</p>"
    },
    "DeleteModel":{
      "name":"DeleteModel",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/models/{model_name}",
        "responseCode":202
      },
      "input":{"shape":"DeleteModelRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Deletes a model.</p>"
    },
    "DeleteRequestValidator":{
      "name":"DeleteRequestValidator",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}",
        "responseCode":202
      },
      "input":{"shape":"DeleteRequestValidatorRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>"
    },
    "DeleteResource":{
      "name":"DeleteResource",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}",
        "responseCode":202
      },
      "input":{"shape":"DeleteResourceRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes a <a>Resource</a> resource.</p>"
    },
    "DeleteRestApi":{
      "name":"DeleteRestApi",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}",
        "responseCode":202
      },
      "input":{"shape":"DeleteRestApiRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"}
      ],
      "documentation":"<p>Deletes the specified API.</p>"
    },
    "DeleteStage":{
      "name":"DeleteStage",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/stages/{stage_name}",
        "responseCode":202
      },
      "input":{"shape":"DeleteStageRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"}
      ],
      "documentation":"<p>Deletes a <a>Stage</a> resource.</p>"
    },
    "DeleteUsagePlan":{
      "name":"DeleteUsagePlan",
      "http":{
        "method":"DELETE",
        "requestUri":"/usageplans/{usageplanId}",
        "responseCode":202
      },
      "input":{"shape":"DeleteUsagePlanRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a usage plan of a given plan Id.</p>"
    },
    "DeleteUsagePlanKey":{
      "name":"DeleteUsagePlanKey",
      "http":{
        "method":"DELETE",
        "requestUri":"/usageplans/{usageplanId}/keys/{keyId}",
        "responseCode":202
      },
      "input":{"shape":"DeleteUsagePlanKeyRequest"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes a usage plan key and remove the underlying API key from the associated usage plan.</p>"
    },
    "DeleteVpcLink":{
      "name":"DeleteVpcLink",
      "http":{
        "method":"DELETE",
        "requestUri":"/vpclinks/{vpclink_id}",
        "responseCode":202
      },
      "input":{"shape":"DeleteVpcLinkRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"}
      ],
      "documentation":"<p>Deletes an existing <a>VpcLink</a> of a specified identifier.</p>"
    },
    "FlushStageAuthorizersCache":{
      "name":"FlushStageAuthorizersCache",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/stages/{stage_name}/cache/authorizers",
        "responseCode":202
      },
      "input":{"shape":"FlushStageAuthorizersCacheRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Flushes all authorizer cache entries on a stage.</p>"
    },
    "FlushStageCache":{
      "name":"FlushStageCache",
      "http":{
        "method":"DELETE",
        "requestUri":"/restapis/{restapi_id}/stages/{stage_name}/cache/data",
        "responseCode":202
      },
      "input":{"shape":"FlushStageCacheRequest"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Flushes a stage's cache.</p>"
    },
    "GenerateClientCertificate":{
      "name":"GenerateClientCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/clientcertificates",
        "responseCode":201
      },
      "input":{"shape":"GenerateClientCertificateRequest"},
      "output":{"shape":"ClientCertificate"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Generates a <a>ClientCertificate</a> resource.</p>"
    },
    "GetAccount":{
      "name":"GetAccount",
      "http":{
        "method":"GET",
        "requestUri":"/account"
      },
      "input":{"shape":"GetAccountRequest"},
      "output":{"shape":"Account"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets information about the current <a>Account</a> resource.</p>"
    },
    "GetApiKey":{
      "name":"GetApiKey",
      "http":{
        "method":"GET",
        "requestUri":"/apikeys/{api_Key}"
      },
      "input":{"shape":"GetApiKeyRequest"},
      "output":{"shape":"ApiKey"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets information about the current <a>ApiKey</a> resource.</p>"
    },
    "GetApiKeys":{
      "name":"GetApiKeys",
      "http":{
        "method":"GET",
        "requestUri":"/apikeys"
      },
      "input":{"shape":"GetApiKeysRequest"},
      "output":{"shape":"ApiKeys"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets information about the current <a>ApiKeys</a> resource.</p>"
    },
    "GetAuthorizer":{
      "name":"GetAuthorizer",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/authorizers/{authorizer_id}"
      },
      "input":{"shape":"GetAuthorizerRequest"},
      "output":{"shape":"Authorizer"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Describe an existing <a>Authorizer</a> resource.</p> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html\">AWS CLI</a></div>"
    },
    "GetAuthorizers":{
      "name":"GetAuthorizers",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/authorizers"
      },
      "input":{"shape":"GetAuthorizersRequest"},
      "output":{"shape":"Authorizers"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Describe an existing <a>Authorizers</a> resource.</p> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html\">AWS CLI</a></div>"
    },
    "GetBasePathMapping":{
      "name":"GetBasePathMapping",
      "http":{
        "method":"GET",
        "requestUri":"/domainnames/{domain_name}/basepathmappings/{base_path}"
      },
      "input":{"shape":"GetBasePathMappingRequest"},
      "output":{"shape":"BasePathMapping"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Describe a <a>BasePathMapping</a> resource.</p>"
    },
    "GetBasePathMappings":{
      "name":"GetBasePathMappings",
      "http":{
        "method":"GET",
        "requestUri":"/domainnames/{domain_name}/basepathmappings"
      },
      "input":{"shape":"GetBasePathMappingsRequest"},
      "output":{"shape":"BasePathMappings"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Represents a collection of <a>BasePathMapping</a> resources.</p>"
    },
    "GetClientCertificate":{
      "name":"GetClientCertificate",
      "http":{
        "method":"GET",
        "requestUri":"/clientcertificates/{clientcertificate_id}"
      },
      "input":{"shape":"GetClientCertificateRequest"},
      "output":{"shape":"ClientCertificate"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets information about the current <a>ClientCertificate</a> resource.</p>"
    },
    "GetClientCertificates":{
      "name":"GetClientCertificates",
      "http":{
        "method":"GET",
        "requestUri":"/clientcertificates"
      },
      "input":{"shape":"GetClientCertificatesRequest"},
      "output":{"shape":"ClientCertificates"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets a collection of <a>ClientCertificate</a> resources.</p>"
    },
    "GetDeployment":{
      "name":"GetDeployment",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/deployments/{deployment_id}"
      },
      "input":{"shape":"GetDeploymentRequest"},
      "output":{"shape":"Deployment"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Gets information about a <a>Deployment</a> resource.</p>"
    },
    "GetDeployments":{
      "name":"GetDeployments",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/deployments"
      },
      "input":{"shape":"GetDeploymentsRequest"},
      "output":{"shape":"Deployments"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Gets information about a <a>Deployments</a> collection.</p>"
    },
    "GetDocumentationPart":{
      "name":"GetDocumentationPart",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/documentation/parts/{part_id}"
      },
      "input":{"shape":"GetDocumentationPartRequest"},
      "output":{"shape":"DocumentationPart"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "GetDocumentationParts":{
      "name":"GetDocumentationParts",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/documentation/parts"
      },
      "input":{"shape":"GetDocumentationPartsRequest"},
      "output":{"shape":"DocumentationParts"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "GetDocumentationVersion":{
      "name":"GetDocumentationVersion",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/documentation/versions/{doc_version}"
      },
      "input":{"shape":"GetDocumentationVersionRequest"},
      "output":{"shape":"DocumentationVersion"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "GetDocumentationVersions":{
      "name":"GetDocumentationVersions",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/documentation/versions"
      },
      "input":{"shape":"GetDocumentationVersionsRequest"},
      "output":{"shape":"DocumentationVersions"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "GetDomainName":{
      "name":"GetDomainName",
      "http":{
        "method":"GET",
        "requestUri":"/domainnames/{domain_name}"
      },
      "input":{"shape":"GetDomainNameRequest"},
      "output":{"shape":"DomainName"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Represents a domain name that is contained in a simpler, more intuitive URL that can be called.</p>"
    },
    "GetDomainNames":{
      "name":"GetDomainNames",
      "http":{
        "method":"GET",
        "requestUri":"/domainnames"
      },
      "input":{"shape":"GetDomainNamesRequest"},
      "output":{"shape":"DomainNames"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Represents a collection of <a>DomainName</a> resources.</p>"
    },
    "GetExport":{
      "name":"GetExport",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}",
        "responseCode":200
      },
      "input":{"shape":"GetExportRequest"},
      "output":{"shape":"ExportResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Exports a deployed version of a <a>RestApi</a> in a specified format.</p>"
    },
    "GetGatewayResponse":{
      "name":"GetGatewayResponse",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/gatewayresponses/{response_type}"
      },
      "input":{"shape":"GetGatewayResponseRequest"},
      "output":{"shape":"GatewayResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>"
    },
    "GetGatewayResponses":{
      "name":"GetGatewayResponses",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/gatewayresponses"
      },
      "input":{"shape":"GetGatewayResponsesRequest"},
      "output":{"shape":"GatewayResponses"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.</p>"
    },
    "GetIntegration":{
      "name":"GetIntegration",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
      },
      "input":{"shape":"GetIntegrationRequest"},
      "output":{"shape":"Integration"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Get the integration settings.</p>"
    },
    "GetIntegrationResponse":{
      "name":"GetIntegrationResponse",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
      },
      "input":{"shape":"GetIntegrationResponseRequest"},
      "output":{"shape":"IntegrationResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Represents a get integration response.</p>"
    },
    "GetMethod":{
      "name":"GetMethod",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
      },
      "input":{"shape":"GetMethodRequest"},
      "output":{"shape":"Method"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Describe an existing <a>Method</a> resource.</p>"
    },
    "GetMethodResponse":{
      "name":"GetMethodResponse",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}"
      },
      "input":{"shape":"GetMethodResponseRequest"},
      "output":{"shape":"MethodResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Describes a <a>MethodResponse</a> resource.</p>"
    },
    "GetModel":{
      "name":"GetModel",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/models/{model_name}"
      },
      "input":{"shape":"GetModelRequest"},
      "output":{"shape":"Model"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Describes an existing model defined for a <a>RestApi</a> resource.</p>"
    },
    "GetModelTemplate":{
      "name":"GetModelTemplate",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/models/{model_name}/default_template"
      },
      "input":{"shape":"GetModelTemplateRequest"},
      "output":{"shape":"Template"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Generates a sample mapping template that can be used to transform a payload into the structure of a model.</p>"
    },
    "GetModels":{
      "name":"GetModels",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/models"
      },
      "input":{"shape":"GetModelsRequest"},
      "output":{"shape":"Models"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.</p>"
    },
    "GetRequestValidator":{
      "name":"GetRequestValidator",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}"
      },
      "input":{"shape":"GetRequestValidatorRequest"},
      "output":{"shape":"RequestValidator"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>"
    },
    "GetRequestValidators":{
      "name":"GetRequestValidators",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/requestvalidators"
      },
      "input":{"shape":"GetRequestValidatorsRequest"},
      "output":{"shape":"RequestValidators"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>"
    },
    "GetResource":{
      "name":"GetResource",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}"
      },
      "input":{"shape":"GetResourceRequest"},
      "output":{"shape":"Resource"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists information about a resource.</p>"
    },
    "GetResources":{
      "name":"GetResources",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/resources"
      },
      "input":{"shape":"GetResourcesRequest"},
      "output":{"shape":"Resources"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists information about a collection of <a>Resource</a> resources.</p>"
    },
    "GetRestApi":{
      "name":"GetRestApi",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}"
      },
      "input":{"shape":"GetRestApiRequest"},
      "output":{"shape":"RestApi"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the <a>RestApi</a> resource in the collection.</p>"
    },
    "GetRestApis":{
      "name":"GetRestApis",
      "http":{
        "method":"GET",
        "requestUri":"/restapis"
      },
      "input":{"shape":"GetRestApisRequest"},
      "output":{"shape":"RestApis"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the <a>RestApis</a> resources for your collection.</p>"
    },
    "GetSdk":{
      "name":"GetSdk",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}",
        "responseCode":200
      },
      "input":{"shape":"GetSdkRequest"},
      "output":{"shape":"SdkResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.</p>"
    },
    "GetSdkType":{
      "name":"GetSdkType",
      "http":{
        "method":"GET",
        "requestUri":"/sdktypes/{sdktype_id}"
      },
      "input":{"shape":"GetSdkTypeRequest"},
      "output":{"shape":"SdkType"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "GetSdkTypes":{
      "name":"GetSdkTypes",
      "http":{
        "method":"GET",
        "requestUri":"/sdktypes"
      },
      "input":{"shape":"GetSdkTypesRequest"},
      "output":{"shape":"SdkTypes"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "GetStage":{
      "name":"GetStage",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/stages/{stage_name}"
      },
      "input":{"shape":"GetStageRequest"},
      "output":{"shape":"Stage"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets information about a <a>Stage</a> resource.</p>"
    },
    "GetStages":{
      "name":"GetStages",
      "http":{
        "method":"GET",
        "requestUri":"/restapis/{restapi_id}/stages"
      },
      "input":{"shape":"GetStagesRequest"},
      "output":{"shape":"Stages"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets information about one or more <a>Stage</a> resources.</p>"
    },
    "GetTags":{
      "name":"GetTags",
      "http":{
        "method":"GET",
        "requestUri":"/tags/{resource_arn}"
      },
      "input":{"shape":"GetTagsRequest"},
      "output":{"shape":"Tags"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Gets the <a>Tags</a> collection for a given resource.</p>"
    },
    "GetUsage":{
      "name":"GetUsage",
      "http":{
        "method":"GET",
        "requestUri":"/usageplans/{usageplanId}/usage"
      },
      "input":{"shape":"GetUsageRequest"},
      "output":{"shape":"Usage"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets the usage data of a usage plan in a specified time interval.</p>"
    },
    "GetUsagePlan":{
      "name":"GetUsagePlan",
      "http":{
        "method":"GET",
        "requestUri":"/usageplans/{usageplanId}"
      },
      "input":{"shape":"GetUsagePlanRequest"},
      "output":{"shape":"UsagePlan"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets a usage plan of a given plan identifier.</p>"
    },
    "GetUsagePlanKey":{
      "name":"GetUsagePlanKey",
      "http":{
        "method":"GET",
        "requestUri":"/usageplans/{usageplanId}/keys/{keyId}",
        "responseCode":200
      },
      "input":{"shape":"GetUsagePlanKeyRequest"},
      "output":{"shape":"UsagePlanKey"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets a usage plan key of a given key identifier.</p>"
    },
    "GetUsagePlanKeys":{
      "name":"GetUsagePlanKeys",
      "http":{
        "method":"GET",
        "requestUri":"/usageplans/{usageplanId}/keys"
      },
      "input":{"shape":"GetUsagePlanKeysRequest"},
      "output":{"shape":"UsagePlanKeys"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets all the usage plan keys representing the API keys added to a specified usage plan.</p>"
    },
    "GetUsagePlans":{
      "name":"GetUsagePlans",
      "http":{
        "method":"GET",
        "requestUri":"/usageplans"
      },
      "input":{"shape":"GetUsagePlansRequest"},
      "output":{"shape":"UsagePlans"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Gets all the usage plans of the caller's account.</p>"
    },
    "GetVpcLink":{
      "name":"GetVpcLink",
      "http":{
        "method":"GET",
        "requestUri":"/vpclinks/{vpclink_id}"
      },
      "input":{"shape":"GetVpcLinkRequest"},
      "output":{"shape":"VpcLink"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets a specified VPC link under the caller's account in a region.</p>"
    },
    "GetVpcLinks":{
      "name":"GetVpcLinks",
      "http":{
        "method":"GET",
        "requestUri":"/vpclinks"
      },
      "input":{"shape":"GetVpcLinksRequest"},
      "output":{"shape":"VpcLinks"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.</p>"
    },
    "ImportApiKeys":{
      "name":"ImportApiKeys",
      "http":{
        "method":"POST",
        "requestUri":"/apikeys?mode=import",
        "responseCode":201
      },
      "input":{"shape":"ImportApiKeysRequest"},
      "output":{"shape":"ApiKeyIds"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"LimitExceededException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Import API keys from an external source, such as a CSV-formatted file.</p>"
    },
    "ImportDocumentationParts":{
      "name":"ImportDocumentationParts",
      "http":{
        "method":"PUT",
        "requestUri":"/restapis/{restapi_id}/documentation/parts"
      },
      "input":{"shape":"ImportDocumentationPartsRequest"},
      "output":{"shape":"DocumentationPartIds"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "ImportRestApi":{
      "name":"ImportRestApi",
      "http":{
        "method":"POST",
        "requestUri":"/restapis?mode=import",
        "responseCode":201
      },
      "input":{"shape":"ImportRestApiRequest"},
      "output":{"shape":"RestApi"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"LimitExceededException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>A feature of the API Gateway control service for creating a new API from an external API definition file.</p>"
    },
    "PutGatewayResponse":{
      "name":"PutGatewayResponse",
      "http":{
        "method":"PUT",
        "requestUri":"/restapis/{restapi_id}/gatewayresponses/{response_type}",
        "responseCode":201
      },
      "input":{"shape":"PutGatewayResponseRequest"},
      "output":{"shape":"GatewayResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>"
    },
    "PutIntegration":{
      "name":"PutIntegration",
      "http":{
        "method":"PUT",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration",
        "responseCode":201
      },
      "input":{"shape":"PutIntegrationRequest"},
      "output":{"shape":"Integration"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Sets up a method's integration.</p>"
    },
    "PutIntegrationResponse":{
      "name":"PutIntegrationResponse",
      "http":{
        "method":"PUT",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}",
        "responseCode":201
      },
      "input":{"shape":"PutIntegrationResponseRequest"},
      "output":{"shape":"IntegrationResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Represents a put integration.</p>"
    },
    "PutMethod":{
      "name":"PutMethod",
      "http":{
        "method":"PUT",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}",
        "responseCode":201
      },
      "input":{"shape":"PutMethodRequest"},
      "output":{"shape":"Method"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Add a method to an existing <a>Resource</a> resource.</p>"
    },
    "PutMethodResponse":{
      "name":"PutMethodResponse",
      "http":{
        "method":"PUT",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
        "responseCode":201
      },
      "input":{"shape":"PutMethodResponseRequest"},
      "output":{"shape":"MethodResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.</p>"
    },
    "PutRestApi":{
      "name":"PutRestApi",
      "http":{
        "method":"PUT",
        "requestUri":"/restapis/{restapi_id}"
      },
      "input":{"shape":"PutRestApiRequest"},
      "output":{"shape":"RestApi"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"LimitExceededException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.</p>"
    },
    "TagResource":{
      "name":"TagResource",
      "http":{
        "method":"PUT",
        "requestUri":"/tags/{resource_arn}",
        "responseCode":204
      },
      "input":{"shape":"TagResourceRequest"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Adds or updates a tag on a given resource.</p>"
    },
    "TestInvokeAuthorizer":{
      "name":"TestInvokeAuthorizer",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/authorizers/{authorizer_id}"
      },
      "input":{"shape":"TestInvokeAuthorizerRequest"},
      "output":{"shape":"TestInvokeAuthorizerResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html\">Enable custom authorizers</a> </div>"
    },
    "TestInvokeMethod":{
      "name":"TestInvokeMethod",
      "http":{
        "method":"POST",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
      },
      "input":{"shape":"TestInvokeMethodRequest"},
      "output":{"shape":"TestInvokeMethodResponse"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p>"
    },
    "UntagResource":{
      "name":"UntagResource",
      "http":{
        "method":"DELETE",
        "requestUri":"/tags/{resource_arn}",
        "responseCode":204
      },
      "input":{"shape":"UntagResourceRequest"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Removes a tag from a given resource.</p>"
    },
    "UpdateAccount":{
      "name":"UpdateAccount",
      "http":{
        "method":"PATCH",
        "requestUri":"/account"
      },
      "input":{"shape":"UpdateAccountRequest"},
      "output":{"shape":"Account"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Changes information about the current <a>Account</a> resource.</p>"
    },
    "UpdateApiKey":{
      "name":"UpdateApiKey",
      "http":{
        "method":"PATCH",
        "requestUri":"/apikeys/{api_Key}"
      },
      "input":{"shape":"UpdateApiKeyRequest"},
      "output":{"shape":"ApiKey"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Changes information about an <a>ApiKey</a> resource.</p>"
    },
    "UpdateAuthorizer":{
      "name":"UpdateAuthorizer",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/authorizers/{authorizer_id}"
      },
      "input":{"shape":"UpdateAuthorizerRequest"},
      "output":{"shape":"Authorizer"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Updates an existing <a>Authorizer</a> resource.</p> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html\">AWS CLI</a></div>"
    },
    "UpdateBasePathMapping":{
      "name":"UpdateBasePathMapping",
      "http":{
        "method":"PATCH",
        "requestUri":"/domainnames/{domain_name}/basepathmappings/{base_path}"
      },
      "input":{"shape":"UpdateBasePathMappingRequest"},
      "output":{"shape":"BasePathMapping"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Changes information about the <a>BasePathMapping</a> resource.</p>"
    },
    "UpdateClientCertificate":{
      "name":"UpdateClientCertificate",
      "http":{
        "method":"PATCH",
        "requestUri":"/clientcertificates/{clientcertificate_id}"
      },
      "input":{"shape":"UpdateClientCertificateRequest"},
      "output":{"shape":"ClientCertificate"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Changes information about an <a>ClientCertificate</a> resource.</p>"
    },
    "UpdateDeployment":{
      "name":"UpdateDeployment",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/deployments/{deployment_id}"
      },
      "input":{"shape":"UpdateDeploymentRequest"},
      "output":{"shape":"Deployment"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Changes information about a <a>Deployment</a> resource.</p>"
    },
    "UpdateDocumentationPart":{
      "name":"UpdateDocumentationPart",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/documentation/parts/{part_id}"
      },
      "input":{"shape":"UpdateDocumentationPartRequest"},
      "output":{"shape":"DocumentationPart"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "UpdateDocumentationVersion":{
      "name":"UpdateDocumentationVersion",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/documentation/versions/{doc_version}"
      },
      "input":{"shape":"UpdateDocumentationVersionRequest"},
      "output":{"shape":"DocumentationVersion"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ]
    },
    "UpdateDomainName":{
      "name":"UpdateDomainName",
      "http":{
        "method":"PATCH",
        "requestUri":"/domainnames/{domain_name}"
      },
      "input":{"shape":"UpdateDomainNameRequest"},
      "output":{"shape":"DomainName"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Changes information about the <a>DomainName</a> resource.</p>"
    },
    "UpdateGatewayResponse":{
      "name":"UpdateGatewayResponse",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/gatewayresponses/{response_type}"
      },
      "input":{"shape":"UpdateGatewayResponseRequest"},
      "output":{"shape":"GatewayResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>"
    },
    "UpdateIntegration":{
      "name":"UpdateIntegration",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
      },
      "input":{"shape":"UpdateIntegrationRequest"},
      "output":{"shape":"Integration"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Represents an update integration.</p>"
    },
    "UpdateIntegrationResponse":{
      "name":"UpdateIntegrationResponse",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
      },
      "input":{"shape":"UpdateIntegrationResponseRequest"},
      "output":{"shape":"IntegrationResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Represents an update integration response.</p>"
    },
    "UpdateMethod":{
      "name":"UpdateMethod",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
      },
      "input":{"shape":"UpdateMethodRequest"},
      "output":{"shape":"Method"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Updates an existing <a>Method</a> resource.</p>"
    },
    "UpdateMethodResponse":{
      "name":"UpdateMethodResponse",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
        "responseCode":201
      },
      "input":{"shape":"UpdateMethodResponseRequest"},
      "output":{"shape":"MethodResponse"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Updates an existing <a>MethodResponse</a> resource.</p>"
    },
    "UpdateModel":{
      "name":"UpdateModel",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/models/{model_name}"
      },
      "input":{"shape":"UpdateModelRequest"},
      "output":{"shape":"Model"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Changes information about a model.</p>"
    },
    "UpdateRequestValidator":{
      "name":"UpdateRequestValidator",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}"
      },
      "input":{"shape":"UpdateRequestValidatorRequest"},
      "output":{"shape":"RequestValidator"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>"
    },
    "UpdateResource":{
      "name":"UpdateResource",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/resources/{resource_id}"
      },
      "input":{"shape":"UpdateResourceRequest"},
      "output":{"shape":"Resource"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Changes information about a <a>Resource</a> resource.</p>"
    },
    "UpdateRestApi":{
      "name":"UpdateRestApi",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}"
      },
      "input":{"shape":"UpdateRestApiRequest"},
      "output":{"shape":"RestApi"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Changes information about the specified API.</p>"
    },
    "UpdateStage":{
      "name":"UpdateStage",
      "http":{
        "method":"PATCH",
        "requestUri":"/restapis/{restapi_id}/stages/{stage_name}"
      },
      "input":{"shape":"UpdateStageRequest"},
      "output":{"shape":"Stage"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"BadRequestException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Changes information about a <a>Stage</a> resource.</p>"
    },
    "UpdateUsage":{
      "name":"UpdateUsage",
      "http":{
        "method":"PATCH",
        "requestUri":"/usageplans/{usageplanId}/keys/{keyId}/usage"
      },
      "input":{"shape":"UpdateUsageRequest"},
      "output":{"shape":"Usage"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>"
    },
    "UpdateUsagePlan":{
      "name":"UpdateUsagePlan",
      "http":{
        "method":"PATCH",
        "requestUri":"/usageplans/{usageplanId}"
      },
      "input":{"shape":"UpdateUsagePlanRequest"},
      "output":{"shape":"UsagePlan"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"BadRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"}
      ],
      "documentation":"<p>Updates a usage plan of a given plan Id.</p>"
    },
    "UpdateVpcLink":{
      "name":"UpdateVpcLink",
      "http":{
        "method":"PATCH",
        "requestUri":"/vpclinks/{vpclink_id}"
      },
      "input":{"shape":"UpdateVpcLinkRequest"},
      "output":{"shape":"VpcLink"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"BadRequestException"},
        {"shape":"ConflictException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Updates an existing <a>VpcLink</a> of a specified identifier.</p>"
    }
  },
  "shapes":{
    "AccessLogSettings":{
      "type":"structure",
      "members":{
        "format":{
          "shape":"String",
          "documentation":"<p>A single line format of the access logs of data, as specified by selected <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference\">$context variables</a>. The format must include at least <code>$context.requestId</code>.</p>"
        },
        "destinationArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the CloudWatch Logs log group to receive access logs.</p>"
        }
      },
      "documentation":"<p>Access log settings, including the access log format and access log destination ARN.</p>"
    },
    "Account":{
      "type":"structure",
      "members":{
        "cloudwatchRoleArn":{
          "shape":"String",
          "documentation":"<p>The ARN of an Amazon CloudWatch role for the current <a>Account</a>. </p>"
        },
        "throttleSettings":{
          "shape":"ThrottleSettings",
          "documentation":"<p>Specifies the API request limits configured for the current <a>Account</a>.</p>"
        },
        "features":{
          "shape":"ListOfString",
          "documentation":"<p>A list of features supported for the account. When usage plans are enabled, the features list will include an entry of <code>\"UsagePlans\"</code>.</p>"
        },
        "apiKeyVersion":{
          "shape":"String",
          "documentation":"<p>The version of the API keys used for the account.</p>"
        }
      },
      "documentation":"<p>Represents an AWS account that is associated with API Gateway.</p> <div class=\"remarks\"> <p>To view the account info, call <code>GET</code> on this resource.</p> <h4>Error Codes</h4> <p>The following exception may be thrown when the request fails.</p> <ul> <li>UnauthorizedException</li> <li>NotFoundException</li> <li>TooManyRequestsException</li> </ul> <p>For detailed error code information, including the corresponding HTTP Status Codes, see <a href=\"http://docs.aws.amazon.com/apigateway/api-reference/handling-errors/#api-error-codes\">API Gateway Error Codes</a></p> <h4>Example: Get the information about an account.</h4> <h5>Request</h5> <pre><code>GET /account HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160531T184618Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} </code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ \"_links\": { \"curies\": { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/account-apigateway-{rel}.html\", \"name\": \"account\", \"templated\": true }, \"self\": { \"href\": \"/account\" }, \"account:update\": { \"href\": \"/account\" } }, \"cloudwatchRoleArn\": \"arn:aws:iam::123456789012:role/apigAwsProxyRole\", \"throttleSettings\": { \"rateLimit\": 500, \"burstLimit\": 1000 } } </code></pre> <p>In addition to making the REST API call directly, you can use the AWS CLI and an AWS SDK to access this resource.</p> </div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-limits.html\">API Gateway Limits</a> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html\">Developer Guide</a>, <a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-account.html\">AWS CLI</a> </div>"
    },
    "ApiKey":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The identifier of the API Key.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The value of the API Key.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the API Key.</p>"
        },
        "customerId":{
          "shape":"String",
          "documentation":"<p>An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the API Key.</p>"
        },
        "enabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the API Key can be used by callers.</p>"
        },
        "createdDate":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp when the API Key was created.</p>"
        },
        "lastUpdatedDate":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp when the API Key was last updated.</p>"
        },
        "stageKeys":{
          "shape":"ListOfString",
          "documentation":"<p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p>"
        }
      },
      "documentation":"<p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html\">Use API Keys</a> </div>"
    },
    "ApiKeyIds":{
      "type":"structure",
      "members":{
        "ids":{
          "shape":"ListOfString",
          "documentation":"<p>A list of all the <a>ApiKey</a> identifiers.</p>"
        },
        "warnings":{
          "shape":"ListOfString",
          "documentation":"<p>A list of warning messages.</p>"
        }
      },
      "documentation":"<p>The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.</p>"
    },
    "ApiKeySourceType":{
      "type":"string",
      "enum":[
        "HEADER",
        "AUTHORIZER"
      ]
    },
    "ApiKeys":{
      "type":"structure",
      "members":{
        "warnings":{
          "shape":"ListOfString",
          "documentation":"<p>A list of warning messages logged during the import of API keys when the <code>failOnWarnings</code> option is set to true.</p>"
        },
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfApiKey",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html\">Use API Keys</a> </div>"
    },
    "ApiKeysFormat":{
      "type":"string",
      "enum":["csv"]
    },
    "ApiStage":{
      "type":"structure",
      "members":{
        "apiId":{
          "shape":"String",
          "documentation":"<p>API Id of the associated API stage in a usage plan.</p>"
        },
        "stage":{
          "shape":"String",
          "documentation":"<p>API stage name of the associated API stage in a usage plan.</p>"
        },
        "throttle":{
          "shape":"MapOfApiStageThrottleSettings",
          "documentation":"<p>Map containing method level throttling information for API stage in a usage plan.</p>"
        }
      },
      "documentation":"<p>API stage name of the associated API stage in a usage plan.</p>"
    },
    "Authorizer":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The identifier for the authorizer resource.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the authorizer.</p>"
        },
        "type":{
          "shape":"AuthorizerType",
          "documentation":"<p>The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>"
        },
        "providerARNs":{
          "shape":"ListOfARNs",
          "documentation":"<p>A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. </p>"
        },
        "authType":{
          "shape":"String",
          "documentation":"<p>Optional customer-defined field, used in Swagger imports and exports without functional impact.</p>"
        },
        "authorizerUri":{
          "shape":"String",
          "documentation":"<p>Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.</p>"
        },
        "authorizerCredentials":{
          "shape":"String",
          "documentation":"<p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>"
        },
        "identitySource":{
          "shape":"String",
          "documentation":"<p>The identity source for which authorization is requested. <ul><li>For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>.</li><li>For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</li></ul></p>"
        },
        "identityValidationExpression":{
          "shape":"String",
          "documentation":"<p>A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.</p>"
        },
        "authorizerResultTtlInSeconds":{
          "shape":"NullableInteger",
          "documentation":"<p>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</p>"
        }
      },
      "documentation":"<p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html\">Enable custom authorization</a> </div>"
    },
    "AuthorizerType":{
      "type":"string",
      "documentation":"<p>The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>",
      "enum":[
        "TOKEN",
        "REQUEST",
        "COGNITO_USER_POOLS"
      ]
    },
    "Authorizers":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfAuthorizer",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection of <a>Authorizer</a> resources.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html\">Enable custom authorization</a> </div>"
    },
    "BadRequestException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "BasePathMapping":{
      "type":"structure",
      "members":{
        "basePath":{
          "shape":"String",
          "documentation":"<p>The base path name that callers of the API must provide as part of the URL after the domain name.</p>"
        },
        "restApiId":{
          "shape":"String",
          "documentation":"<p>The string identifier of the associated <a>RestApi</a>.</p>"
        },
        "stage":{
          "shape":"String",
          "documentation":"<p>The name of the associated stage.</p>"
        }
      },
      "documentation":"<p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p> <div class=\"remarks\">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html\">Use Custom Domain Names</a> </div>"
    },
    "BasePathMappings":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfBasePathMapping",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection of <a>BasePathMapping</a> resources.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html\">Use Custom Domain Names</a> </div>"
    },
    "Blob":{"type":"blob"},
    "Boolean":{"type":"boolean"},
    "CacheClusterSize":{
      "type":"string",
      "documentation":"<p>Returns the size of the <b>CacheCluster</b>.</p>",
      "enum":[
        "0.5",
        "1.6",
        "6.1",
        "13.5",
        "28.4",
        "58.2",
        "118",
        "237"
      ]
    },
    "CacheClusterStatus":{
      "type":"string",
      "documentation":"<p>Returns the status of the <b>CacheCluster</b>.</p>",
      "enum":[
        "CREATE_IN_PROGRESS",
        "AVAILABLE",
        "DELETE_IN_PROGRESS",
        "NOT_AVAILABLE",
        "FLUSH_IN_PROGRESS"
      ]
    },
    "CanarySettings":{
      "type":"structure",
      "members":{
        "percentTraffic":{
          "shape":"Double",
          "documentation":"<p>The percent (0-100) of traffic diverted to a canary deployment.</p>"
        },
        "deploymentId":{
          "shape":"String",
          "documentation":"<p>The ID of the canary deployment.</p>"
        },
        "stageVariableOverrides":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>"
        },
        "useStageCache":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean flag to indicate whether the canary deployment uses the stage cache or not.</p>"
        }
      },
      "documentation":"<p>Configuration settings of a canary deployment.</p>"
    },
    "ClientCertificate":{
      "type":"structure",
      "members":{
        "clientCertificateId":{
          "shape":"String",
          "documentation":"<p>The identifier of the client certificate.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the client certificate.</p>"
        },
        "pemEncodedCertificate":{
          "shape":"String",
          "documentation":"<p>The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .</p>"
        },
        "createdDate":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp when the client certificate was created.</p>"
        },
        "expirationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp when the client certificate will expire.</p>"
        }
      },
      "documentation":"<p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class=\"remarks\">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html\">Use Client-Side Certificate</a> </div>"
    },
    "ClientCertificates":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfClientCertificate",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html\">Use Client-Side Certificate</a> </div>"
    },
    "ConflictException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The request configuration has conflicts. For details, see the accompanying error message.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "ConnectionType":{
      "type":"string",
      "enum":[
        "INTERNET",
        "VPC_LINK"
      ]
    },
    "ContentHandlingStrategy":{
      "type":"string",
      "enum":[
        "CONVERT_TO_BINARY",
        "CONVERT_TO_TEXT"
      ]
    },
    "CreateApiKeyRequest":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the <a>ApiKey</a>.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the <a>ApiKey</a>.</p>"
        },
        "enabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the <a>ApiKey</a> can be used by callers.</p>"
        },
        "generateDistinctId":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>Specifies a value of the API key.</p>"
        },
        "stageKeys":{
          "shape":"ListOfStageKeys",
          "documentation":"<p>DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.</p>"
        },
        "customerId":{
          "shape":"String",
          "documentation":"<p>An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.</p>"
        }
      },
      "documentation":"<p>Request to create an <a>ApiKey</a> resource.</p>"
    },
    "CreateAuthorizerRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "name",
        "type"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the authorizer.</p>"
        },
        "type":{
          "shape":"AuthorizerType",
          "documentation":"<p>[Required] The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>"
        },
        "providerARNs":{
          "shape":"ListOfARNs",
          "documentation":"<p>A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. </p>"
        },
        "authType":{
          "shape":"String",
          "documentation":"<p>Optional customer-defined field, used in Swagger imports and exports without functional impact.</p>"
        },
        "authorizerUri":{
          "shape":"String",
          "documentation":"<p>Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.</p>"
        },
        "authorizerCredentials":{
          "shape":"String",
          "documentation":"<p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>"
        },
        "identitySource":{
          "shape":"String",
          "documentation":"<p>The identity source for which authorization is requested. <ul><li>For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>.</li><li>For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</li></ul></p>"
        },
        "identityValidationExpression":{
          "shape":"String",
          "documentation":"<p>A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.</p>"
        },
        "authorizerResultTtlInSeconds":{
          "shape":"NullableInteger",
          "documentation":"<p>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</p>"
        }
      },
      "documentation":"<p>Request to add a new <a>Authorizer</a> to an existing <a>RestApi</a> resource.</p>"
    },
    "CreateBasePathMappingRequest":{
      "type":"structure",
      "required":[
        "domainName",
        "restApiId"
      ],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The domain name of the <a>BasePathMapping</a> resource to create.</p>",
          "location":"uri",
          "locationName":"domain_name"
        },
        "basePath":{
          "shape":"String",
          "documentation":"<p>The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Leave this blank if you do not want callers to specify a base path name after the domain name.</p>"
        },
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>"
        },
        "stage":{
          "shape":"String",
          "documentation":"<p>The name of the API's stage that you want to use for this mapping. Leave this blank if you do not want callers to explicitly specify the stage name after any base path name.</p>"
        }
      },
      "documentation":"<p>Requests API Gateway to create a new <a>BasePathMapping</a> resource.</p>"
    },
    "CreateDeploymentRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>The name of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.</p>"
        },
        "stageDescription":{
          "shape":"String",
          "documentation":"<p>The description of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description for the <a>Deployment</a> resource to create.</p>"
        },
        "cacheClusterEnabled":{
          "shape":"NullableBoolean",
          "documentation":"<p>Enables a cache cluster for the <a>Stage</a> resource specified in the input.</p>"
        },
        "cacheClusterSize":{
          "shape":"CacheClusterSize",
          "documentation":"<p>Specifies the cache cluster size for the <a>Stage</a> resource specified in the input, if a cache cluster is enabled.</p>"
        },
        "variables":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A map that defines the stage variables for the <a>Stage</a> resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.</p>"
        },
        "canarySettings":{
          "shape":"DeploymentCanarySettings",
          "documentation":"<p>The input configuration for the canary deployment when the deployment is a canary release deployment. </p>"
        },
        "tracingEnabled":{
          "shape":"NullableBoolean",
          "documentation":"<p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>"
        }
      },
      "documentation":"<p>Requests API Gateway to create a <a>Deployment</a> resource.</p>"
    },
    "CreateDocumentationPartRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "location",
        "properties"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "location":{
          "shape":"DocumentationPartLocation",
          "documentation":"<p>[Required] The location of the targeted API entity of the to-be-created documentation part.</p>"
        },
        "properties":{
          "shape":"String",
          "documentation":"<p>[Required] The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only Swagger-compliant key-value pairs can be exported and, hence, published.</p>"
        }
      },
      "documentation":"<p>Creates a new documentation part of a given API.</p>"
    },
    "CreateDocumentationVersionRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "documentationVersion"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "documentationVersion":{
          "shape":"String",
          "documentation":"<p>[Required] The version identifier of the new snapshot.</p>"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>The stage name to be associated with the new documentation snapshot.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>A description about the new documentation snapshot.</p>"
        }
      },
      "documentation":"<p>Creates a new documentation version of a given API.</p>"
    },
    "CreateDomainNameRequest":{
      "type":"structure",
      "required":["domainName"],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>DomainName</a> resource.</p>"
        },
        "certificateName":{
          "shape":"String",
          "documentation":"<p>The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name.</p>"
        },
        "certificateBody":{
          "shape":"String",
          "documentation":"<p>[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority.</p>"
        },
        "certificatePrivateKey":{
          "shape":"String",
          "documentation":"<p>[Deprecated] Your edge-optimized endpoint's domain name certificate's private key.</p>"
        },
        "certificateChain":{
          "shape":"String",
          "documentation":"<p>[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.</p>"
        },
        "certificateArn":{
          "shape":"String",
          "documentation":"<p>The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>"
        },
        "regionalCertificateName":{
          "shape":"String",
          "documentation":"<p>The user-friendly name of the certificate that will be used by regional endpoint for this domain name.</p>"
        },
        "regionalCertificateArn":{
          "shape":"String",
          "documentation":"<p>The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>"
        },
        "endpointConfiguration":{
          "shape":"EndpointConfiguration",
          "documentation":"<p>The endpoint configuration of this <a>DomainName</a> showing the endpoint types of the domain name. </p>"
        }
      },
      "documentation":"<p>A request to create a new domain name.</p>"
    },
    "CreateModelRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "name",
        "contentType"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>RestApi</a> identifier under which the <a>Model</a> will be created.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the model. Must be alphanumeric.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the model.</p>"
        },
        "schema":{
          "shape":"String",
          "documentation":"<p>The schema for the model. For <code>application/json</code> models, this should be <a href=\"https://tools.ietf.org/html/draft-zyp-json-schema-04\" target=\"_blank\">JSON schema draft 4</a> model.</p>"
        },
        "contentType":{
          "shape":"String",
          "documentation":"<p>[Required] The content-type for the model.</p>"
        }
      },
      "documentation":"<p>Request to add a new <a>Model</a> to an existing <a>RestApi</a> resource.</p>"
    },
    "CreateRequestValidatorRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the to-be-created <a>RequestValidator</a>.</p>"
        },
        "validateRequestBody":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>).</p>"
        },
        "validateRequestParameters":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Creates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>"
    },
    "CreateResourceRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "parentId",
        "pathPart"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "parentId":{
          "shape":"String",
          "documentation":"<p>[Required] The parent resource's identifier.</p>",
          "location":"uri",
          "locationName":"parent_id"
        },
        "pathPart":{
          "shape":"String",
          "documentation":"<p>The last path segment for this resource.</p>"
        }
      },
      "documentation":"<p>Requests API Gateway to create a <a>Resource</a> resource.</p>"
    },
    "CreateRestApiRequest":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>RestApi</a>.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the <a>RestApi</a>.</p>"
        },
        "version":{
          "shape":"String",
          "documentation":"<p>A version identifier for the API.</p>"
        },
        "cloneFrom":{
          "shape":"String",
          "documentation":"<p>The ID of the <a>RestApi</a> that you want to clone from.</p>"
        },
        "binaryMediaTypes":{
          "shape":"ListOfString",
          "documentation":"<p>The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.</p>"
        },
        "minimumCompressionSize":{
          "shape":"NullableInteger",
          "documentation":"<p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>"
        },
        "apiKeySource":{
          "shape":"ApiKeySourceType",
          "documentation":"<p>The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul> </p>"
        },
        "endpointConfiguration":{
          "shape":"EndpointConfiguration",
          "documentation":"<p>The endpoint configuration of this <a>RestApi</a> showing the endpoint types of the API. </p>"
        },
        "policy":{
          "shape":"String",
          "documentation":"A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration."
        }
      },
      "documentation":"<p>The POST Request to add a new <a>RestApi</a> resource to your collection.</p>"
    },
    "CreateStageRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "stageName",
        "deploymentId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>[Required] The name for the <a>Stage</a> resource.</p>"
        },
        "deploymentId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>Deployment</a> resource for the <a>Stage</a> resource.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the <a>Stage</a> resource.</p>"
        },
        "cacheClusterEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether cache clustering is enabled for the stage.</p>"
        },
        "cacheClusterSize":{
          "shape":"CacheClusterSize",
          "documentation":"<p>The stage's cache cluster size.</p>"
        },
        "variables":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A map that defines the stage variables for the new <a>Stage</a> resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.</p>"
        },
        "documentationVersion":{
          "shape":"String",
          "documentation":"<p>The version of the associated API documentation.</p>"
        },
        "canarySettings":{
          "shape":"CanarySettings",
          "documentation":"<p>The canary deployment settings of this stage.</p>"
        },
        "tracingEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>"
        },
        "tags":{
          "shape":"MapOfStringToString",
          "documentation":"<p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>"
        }
      },
      "documentation":"<p>Requests API Gateway to create a <a>Stage</a> resource.</p>"
    },
    "CreateUsagePlanKeyRequest":{
      "type":"structure",
      "required":[
        "usagePlanId",
        "keyId",
        "keyType"
      ],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-created <a>UsagePlanKey</a> resource representing a plan customer.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        },
        "keyId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of a <a>UsagePlanKey</a> resource for a plan customer.</p>"
        },
        "keyType":{
          "shape":"String",
          "documentation":"<p>[Required] The type of a <a>UsagePlanKey</a> resource for a plan customer.</p>"
        }
      },
      "documentation":"<p>The POST request to create a usage plan key for adding an existing API key to a usage plan.</p>"
    },
    "CreateUsagePlanRequest":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the usage plan.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the usage plan.</p>"
        },
        "apiStages":{
          "shape":"ListOfApiStage",
          "documentation":"<p>The associated API stages of the usage plan.</p>"
        },
        "throttle":{
          "shape":"ThrottleSettings",
          "documentation":"<p>The throttling limits of the usage plan.</p>"
        },
        "quota":{
          "shape":"QuotaSettings",
          "documentation":"<p>The quota of the usage plan.</p>"
        }
      },
      "documentation":"<p>The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.</p>"
    },
    "CreateVpcLinkRequest":{
      "type":"structure",
      "required":[
        "name",
        "targetArns"
      ],
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>[Required] The name used to label and identify the VPC link.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the VPC link.</p>"
        },
        "targetArns":{
          "shape":"ListOfString",
          "documentation":"<p>[Required] The ARNs of network load balancers of the VPC targeted by the VPC link. The network load balancers must be owned by the same AWS account of the API owner.</p>"
        }
      },
      "documentation":"<p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>"
    },
    "DeleteApiKeyRequest":{
      "type":"structure",
      "required":["apiKey"],
      "members":{
        "apiKey":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>ApiKey</a> resource to be deleted.</p>",
          "location":"uri",
          "locationName":"api_Key"
        }
      },
      "documentation":"<p>A request to delete the <a>ApiKey</a> resource.</p>"
    },
    "DeleteAuthorizerRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "authorizerId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "authorizerId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>Authorizer</a> resource.</p>",
          "location":"uri",
          "locationName":"authorizer_id"
        }
      },
      "documentation":"<p>Request to delete an existing <a>Authorizer</a> resource.</p>"
    },
    "DeleteBasePathMappingRequest":{
      "type":"structure",
      "required":[
        "domainName",
        "basePath"
      ],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The domain name of the <a>BasePathMapping</a> resource to delete.</p>",
          "location":"uri",
          "locationName":"domain_name"
        },
        "basePath":{
          "shape":"String",
          "documentation":"<p>[Required] The base path name of the <a>BasePathMapping</a> resource to delete.</p>",
          "location":"uri",
          "locationName":"base_path"
        }
      },
      "documentation":"<p>A request to delete the <a>BasePathMapping</a> resource.</p>"
    },
    "DeleteClientCertificateRequest":{
      "type":"structure",
      "required":["clientCertificateId"],
      "members":{
        "clientCertificateId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>ClientCertificate</a> resource to be deleted.</p>",
          "location":"uri",
          "locationName":"clientcertificate_id"
        }
      },
      "documentation":"<p>A request to delete the <a>ClientCertificate</a> resource.</p>"
    },
    "DeleteDeploymentRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "deploymentId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "deploymentId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>Deployment</a> resource to delete.</p>",
          "location":"uri",
          "locationName":"deployment_id"
        }
      },
      "documentation":"<p>Requests API Gateway to delete a <a>Deployment</a> resource.</p>"
    },
    "DeleteDocumentationPartRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "documentationPartId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "documentationPartId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the to-be-deleted documentation part.</p>",
          "location":"uri",
          "locationName":"part_id"
        }
      },
      "documentation":"<p>Deletes an existing documentation part of an API.</p>"
    },
    "DeleteDocumentationVersionRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "documentationVersion"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "documentationVersion":{
          "shape":"String",
          "documentation":"<p>[Required] The version identifier of a to-be-deleted documentation snapshot.</p>",
          "location":"uri",
          "locationName":"doc_version"
        }
      },
      "documentation":"<p>Deletes an existing documentation version of an API.</p>"
    },
    "DeleteDomainNameRequest":{
      "type":"structure",
      "required":["domainName"],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>DomainName</a> resource to be deleted.</p>",
          "location":"uri",
          "locationName":"domain_name"
        }
      },
      "documentation":"<p>A request to delete the <a>DomainName</a> resource.</p>"
    },
    "DeleteGatewayResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "responseType"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "responseType":{
          "shape":"GatewayResponseType",
          "documentation":"<p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>",
          "location":"uri",
          "locationName":"response_type"
        }
      },
      "documentation":"<p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>"
    },
    "DeleteIntegrationRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a delete integration request's resource identifier.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a delete integration request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        }
      },
      "documentation":"<p>Represents a delete integration request.</p>"
    },
    "DeleteIntegrationResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "statusCode"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a delete integration response request's resource identifier.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a delete integration response request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>[Required] Specifies a delete integration response request's status code.</p>",
          "location":"uri",
          "locationName":"status_code"
        }
      },
      "documentation":"<p>Represents a delete integration response request.</p>"
    },
    "DeleteMethodRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] The HTTP verb of the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"http_method"
        }
      },
      "documentation":"<p>Request to delete an existing <a>Method</a> resource.</p>"
    },
    "DeleteMethodResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "statusCode"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] The HTTP verb of the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>[Required] The status code identifier for the <a>MethodResponse</a> resource.</p>",
          "location":"uri",
          "locationName":"status_code"
        }
      },
      "documentation":"<p>A request to delete an existing <a>MethodResponse</a> resource.</p>"
    },
    "DeleteModelRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "modelName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "modelName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the model to delete.</p>",
          "location":"uri",
          "locationName":"model_name"
        }
      },
      "documentation":"<p>Request to delete an existing model in an existing <a>RestApi</a> resource.</p>"
    },
    "DeleteRequestValidatorRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "requestValidatorId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "requestValidatorId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>RequestValidator</a> to be deleted.</p>",
          "location":"uri",
          "locationName":"requestvalidator_id"
        }
      },
      "documentation":"<p>Deletes a specified <a>RequestValidator</a> of a given <a>RestApi</a>.</p>"
    },
    "DeleteResourceRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>Resource</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        }
      },
      "documentation":"<p>Request to delete a <a>Resource</a>.</p>"
    },
    "DeleteRestApiRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        }
      },
      "documentation":"<p>Request to delete the specified API from your collection.</p>"
    },
    "DeleteStageRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "stageName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>Stage</a> resource to delete.</p>",
          "location":"uri",
          "locationName":"stage_name"
        }
      },
      "documentation":"<p>Requests API Gateway to delete a <a>Stage</a> resource.</p>"
    },
    "DeleteUsagePlanKeyRequest":{
      "type":"structure",
      "required":[
        "usagePlanId",
        "keyId"
      ],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-deleted <a>UsagePlanKey</a> resource representing a plan customer.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        },
        "keyId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the <a>UsagePlanKey</a> resource to be deleted.</p>",
          "location":"uri",
          "locationName":"keyId"
        }
      },
      "documentation":"<p>The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan.</p>"
    },
    "DeleteUsagePlanRequest":{
      "type":"structure",
      "required":["usagePlanId"],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the to-be-deleted usage plan.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        }
      },
      "documentation":"<p>The DELETE request to delete a usage plan of a given plan Id.</p>"
    },
    "DeleteVpcLinkRequest":{
      "type":"structure",
      "required":["vpcLinkId"],
      "members":{
        "vpcLinkId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>",
          "location":"uri",
          "locationName":"vpclink_id"
        }
      },
      "documentation":"<p>Deletes an existing <a>VpcLink</a> of a specified identifier.</p>"
    },
    "Deployment":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The identifier for the deployment resource.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description for the deployment resource.</p>"
        },
        "createdDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the deployment resource was created.</p>"
        },
        "apiSummary":{
          "shape":"PathToMapOfMethodSnapshot",
          "documentation":"<p>A summary of the <a>RestApi</a> at the date and time that the deployment resource was created.</p>"
        }
      },
      "documentation":"<p>An immutable representation of a <a>RestApi</a> resource that can be called by users using <a>Stages</a>. A deployment must be associated with a <a>Stage</a> for it to be callable over the Internet.</p> <div class=\"remarks\">To create a deployment, call <code>POST</code> on the <a>Deployments</a> resource of a <a>RestApi</a>. To view, update, or delete a deployment, call <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> on the specified deployment resource (<code>/restapis/{restapi_id}/deployments/{deployment_id}</code>).</div> <div class=\"seeAlso\"><a>RestApi</a>, <a>Deployments</a>, <a>Stage</a>, <a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html\">AWS CLI</a>, <a href=\"https://aws.amazon.com/tools/\">AWS SDKs</a> </div>"
    },
    "DeploymentCanarySettings":{
      "type":"structure",
      "members":{
        "percentTraffic":{
          "shape":"Double",
          "documentation":"<p>The percentage (0.0-100.0) of traffic routed to the canary deployment.</p>"
        },
        "stageVariableOverrides":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>"
        },
        "useStageCache":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.</p>"
        }
      },
      "documentation":"<p>The input configuration for a canary deployment.</p>"
    },
    "Deployments":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfDeployment",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.</p> <div class=\"remarks\">To create a new deployment of a <a>RestApi</a>, make a <code>POST</code> request against this resource. To view, update, or delete an existing deployment, make a <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> request, respectively, on a specified <a>Deployment</a> resource.</div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html\">Deploying an API</a>, <a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html\">AWS CLI</a>, <a href=\"https://aws.amazon.com/tools/\">AWS SDKs</a> </div>"
    },
    "DocumentationPart":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The <a>DocumentationPart</a> identifier, generated by API Gateway when the <code>DocumentationPart</code> is created.</p>"
        },
        "location":{
          "shape":"DocumentationPartLocation",
          "documentation":"<p>The location of the API entity to which the documentation applies. Valid fields depend on the targeted API entity type. All the valid location fields are not required. If not explicitly specified, a valid location field is treated as a wildcard and associated documentation content may be inherited by matching entities, unless overridden.</p>"
        },
        "properties":{
          "shape":"String",
          "documentation":"<p>A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., <code>\"{ \\\"description\\\": \\\"The API does ...\\\" }\"</code>. Only Swagger-compliant documentation-related fields from the <literal>properties</literal> map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a Swagger extension of <code>x-amazon-apigateway-documentation</code>.</p>"
        }
      },
      "documentation":"<p>A documentation part for a targeted API entity.</p> <div class=\"remarks\"> <p>A documentation part consists of a content map (<code>properties</code>) and a target (<code>location</code>). The target specifies an API entity to which the documentation content applies. The supported API entity types are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Valid <code>location</code> fields depend on the API entity type. All valid fields are not required.</p> <p>The content map is a JSON string of API-specific key-value pairs. Although an API can use any shape for the content map, only the Swagger-compliant documentation fields will be injected into the associated API entity definition in the exported Swagger definition file.</p></div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html\">Documenting an API</a>, <a>DocumentationParts</a> </div>"
    },
    "DocumentationPartIds":{
      "type":"structure",
      "members":{
        "ids":{
          "shape":"ListOfString",
          "documentation":"<p>A list of the returned documentation part identifiers.</p>"
        },
        "warnings":{
          "shape":"ListOfString",
          "documentation":"<p>A list of warning messages reported during import of documentation parts.</p>"
        }
      },
      "documentation":"<p>A collection of the imported <a>DocumentationPart</a> identifiers.</p> <div class=\"remarks\">This is used to return the result when documentation parts in an external (e.g., Swagger) file are imported into API Gateway</div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html\">Documenting an API</a>, <a href=\"http://docs.aws.amazon.com/apigateway/api-reference/link-relation/documentationpart-import/\">documentationpart:import</a>, <a>DocumentationPart</a> </div>"
    },
    "DocumentationPartLocation":{
      "type":"structure",
      "required":["type"],
      "members":{
        "type":{
          "shape":"DocumentationPartType",
          "documentation":"<p>[Required] The type of API entity to which the documentation content applies. Valid values are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Content inheritance does not apply to any entity of the <code>API</code>, <code>AUTHORIZER</code>, <code>METHOD</code>, <code>MODEL</code>, <code>REQUEST_BODY</code>, or <code>RESOURCE</code> type.</p>"
        },
        "path":{
          "shape":"String",
          "documentation":"<p>The URL path of the target. It is a valid field for the API entity types of <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>/</code> for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>path</code> attribute must match that of the parent entity as a prefix.</p>"
        },
        "method":{
          "shape":"String",
          "documentation":"<p>The HTTP verb of a method. It is a valid field for the API entity types of <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>method</code> attribute must match that of the parent entity exactly.</p>"
        },
        "statusCode":{
          "shape":"DocumentationPartLocationStatusCode",
          "documentation":"<p>The HTTP status code of a response. It is a valid field for the API entity types of <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>statusCode</code> attribute must match that of the parent entity exactly.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the targeted API entity. It is a valid and required field for the API entity types of <code>AUTHORIZER</code>, <code>MODEL</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code> and <code>RESPONSE_HEADER</code>. It is an invalid field for any other entity type.</p>"
        }
      },
      "documentation":"<p>Specifies the target API entity to which the documentation applies.</p>"
    },
    "DocumentationPartLocationStatusCode":{
      "type":"string",
      "pattern":"^([1-5]\\d\\d|\\*|\\s*)$"
    },
    "DocumentationPartType":{
      "type":"string",
      "enum":[
        "API",
        "AUTHORIZER",
        "MODEL",
        "RESOURCE",
        "METHOD",
        "PATH_PARAMETER",
        "QUERY_PARAMETER",
        "REQUEST_HEADER",
        "REQUEST_BODY",
        "RESPONSE",
        "RESPONSE_HEADER",
        "RESPONSE_BODY"
      ]
    },
    "DocumentationParts":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfDocumentationPart",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>The collection of documentation parts of an API.</p> <div class=\"remarks\"/> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html\">Documenting an API</a>, <a>DocumentationPart</a> </div>"
    },
    "DocumentationVersion":{
      "type":"structure",
      "members":{
        "version":{
          "shape":"String",
          "documentation":"<p>The version identifier of the API documentation snapshot.</p>"
        },
        "createdDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date when the API documentation snapshot is created.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the API documentation snapshot.</p>"
        }
      },
      "documentation":"<p>A snapshot of the documentation of an API.</p> <div class=\"remarks\"><p>Publishing API documentation involves creating a documentation version associated with an API stage and exporting the versioned documentation to an external (e.g., Swagger) file.</p></div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html\">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersions</a> </div>"
    },
    "DocumentationVersions":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfDocumentationVersion",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>The collection of documentation snapshots of an API. </p> <div class=\"remarks\"><p>Use the <a>DocumentationVersions</a> to manage documentation snapshots associated with various API stages.</p></div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html\">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersion</a> </div>"
    },
    "DomainName":{
      "type":"structure",
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>The custom domain name as an API host name, for example, <code>my-api.example.com</code>.</p>"
        },
        "certificateName":{
          "shape":"String",
          "documentation":"<p>The name of the certificate that will be used by edge-optimized endpoint for this domain name.</p>"
        },
        "certificateArn":{
          "shape":"String",
          "documentation":"<p>The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>"
        },
        "certificateUploadDate":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>"
        },
        "regionalDomainName":{
          "shape":"String",
          "documentation":"<p>The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.</p>"
        },
        "regionalHostedZoneId":{
          "shape":"String",
          "documentation":"<p>The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html\">Set up a Regional Custom Domain Name</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region\">AWS Regions and Endpoints for API Gateway</a>. </p>"
        },
        "regionalCertificateName":{
          "shape":"String",
          "documentation":"<p>The name of the certificate that will be used for validating the regional domain name.</p>"
        },
        "regionalCertificateArn":{
          "shape":"String",
          "documentation":"<p>The reference to an AWS-managed certificate that will be used for validating the regional domain name. AWS Certificate Manager is the only supported source.</p>"
        },
        "distributionDomainName":{
          "shape":"String",
          "documentation":"<p>The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the <a href=\"http://aws.amazon.com/documentation/cloudfront/\" target=\"_blank\">Amazon CloudFront documentation</a>.</p>"
        },
        "distributionHostedZoneId":{
          "shape":"String",
          "documentation":"<p>The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is <code>Z2FDTNDATAQYW2</code> for all the regions. For more information, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html\">Set up a Regional Custom Domain Name</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region\">AWS Regions and Endpoints for API Gateway</a>. </p>"
        },
        "endpointConfiguration":{
          "shape":"EndpointConfiguration",
          "documentation":"<p>The endpoint configuration of this <a>DomainName</a> showing the endpoint types of the domain name. </p>"
        }
      },
      "documentation":"<p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p> <div class=\"Remarks\"> <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name. </p> </div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html\">Set a Custom Host Name for an API</a> </div>"
    },
    "DomainNames":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfDomainName",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection of <a>DomainName</a> resources.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html\">Use Client-Side Certificate</a> </div>"
    },
    "Double":{"type":"double"},
    "EndpointConfiguration":{
      "type":"structure",
      "members":{
        "types":{
          "shape":"ListOfEndpointType",
          "documentation":"<p>A list of endpoint types of an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>). For an edge-optimized API and its custom domain name, the endpoint type is <code>\"EDGE\"</code>. For a regional API and its custom domain name, the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is <code>PRIVATE</code>.</p>"
        }
      },
      "documentation":"<p>The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. </p>"
    },
    "EndpointType":{
      "type":"string",
      "documentation":"<p>The endpoint type. The valid values are <code>EDGE</code> for edge-optimized API setup, most suitable for mobile applications; <code>REGIONAL</code> for regional API endpoint setup, most suitable for calling from AWS Region; and <code>PRIVATE</code> for private APIs.</p>",
      "enum":[
        "REGIONAL",
        "EDGE",
        "PRIVATE"
      ]
    },
    "ExportResponse":{
      "type":"structure",
      "members":{
        "contentType":{
          "shape":"String",
          "documentation":"<p>The content-type header value in the HTTP response. This will correspond to a valid 'accept' type in the request.</p>",
          "location":"header",
          "locationName":"Content-Type"
        },
        "contentDisposition":{
          "shape":"String",
          "documentation":"<p>The content-disposition header value in the HTTP response.</p>",
          "location":"header",
          "locationName":"Content-Disposition"
        },
        "body":{
          "shape":"Blob",
          "documentation":"<p>The binary blob response to <a>GetExport</a>, which contains the export.</p>"
        }
      },
      "documentation":"<p>The binary blob response to <a>GetExport</a>, which contains the generated SDK.</p>",
      "payload":"body"
    },
    "FlushStageAuthorizersCacheRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "stageName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>The name of the stage to flush.</p>",
          "location":"uri",
          "locationName":"stage_name"
        }
      },
      "documentation":"<p>Request to flush authorizer cache entries on a specified stage.</p>"
    },
    "FlushStageCacheRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "stageName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the stage to flush its cache.</p>",
          "location":"uri",
          "locationName":"stage_name"
        }
      },
      "documentation":"<p>Requests API Gateway to flush a stage's cache.</p>"
    },
    "GatewayResponse":{
      "type":"structure",
      "members":{
        "responseType":{
          "shape":"GatewayResponseType",
          "documentation":"<p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p>"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>The HTTP status code for this <a>GatewayResponse</a>.</p>"
        },
        "responseParameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p>"
        },
        "responseTemplates":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p>"
        },
        "defaultResponse":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean flag to indicate whether this <a>GatewayResponse</a> is the default gateway response (<code>true</code>) or not (<code>false</code>). A default gateway response is one generated by API Gateway without any customization by an API developer. </p>"
        }
      },
      "documentation":"<p>A gateway response of a given response type and status code, with optional response parameters and mapping templates.</p> <div class=\"remarks\"> For more information about valid gateway response types, see <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html\">Gateway Response Types Supported by API Gateway</a> <div class=\"example\"> <h4>Example: Get a Gateway Response of a given response type</h4> <h5>Request</h5> <p>This example shows how to get a gateway response of the <code>MISSING_AUTHENTICATION_TOKEN</code> type.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T202516Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=1b52460e3159c1a26cff29093855d50ea141c1c5b937528fecaf60f51129697a Cache-Control: no-cache Postman-Token: 3b2a1ce9-c848-2e26-2e2f-9c2caefbed45 </code></pre> <p>The response type is specified as a URL path.</p> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ \"_links\": { \"curies\": { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html\", \"name\": \"gatewayresponse\", \"templated\": true }, \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" }, \"gatewayresponse:delete\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" } }, \"defaultResponse\": false, \"responseParameters\": { \"gatewayresponse.header.x-request-path\": \"method.request.path.petId\", \"gatewayresponse.header.Access-Control-Allow-Origin\": \"&apos;a.b.c&apos;\", \"gatewayresponse.header.x-request-query\": \"method.request.querystring.q\", \"gatewayresponse.header.x-request-header\": \"method.request.header.Accept\" }, \"responseTemplates\": { \"application/json\": \"{\\n \\\"message\\\": $context.error.messageString,\\n \\\"type\\\": \\\"$context.error.responseType\\\",\\n \\\"stage\\\": \\\"$context.stage\\\",\\n \\\"resourcePath\\\": \\\"$context.resourcePath\\\",\\n \\\"stageVariables.a\\\": \\\"$stageVariables.a\\\",\\n \\\"statusCode\\\": \\\"&apos;404&apos;\\\"\\n}\" }, \"responseType\": \"MISSING_AUTHENTICATION_TOKEN\", \"statusCode\": \"404\" }</code></pre> <p></p> </div> </div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html\">Customize Gateway Responses</a> </div>"
    },
    "GatewayResponseType":{
      "type":"string",
      "enum":[
        "DEFAULT_4XX",
        "DEFAULT_5XX",
        "RESOURCE_NOT_FOUND",
        "UNAUTHORIZED",
        "INVALID_API_KEY",
        "ACCESS_DENIED",
        "AUTHORIZER_FAILURE",
        "AUTHORIZER_CONFIGURATION_ERROR",
        "INVALID_SIGNATURE",
        "EXPIRED_TOKEN",
        "MISSING_AUTHENTICATION_TOKEN",
        "INTEGRATION_FAILURE",
        "INTEGRATION_TIMEOUT",
        "API_CONFIGURATION_ERROR",
        "UNSUPPORTED_MEDIA_TYPE",
        "BAD_REQUEST_PARAMETERS",
        "BAD_REQUEST_BODY",
        "REQUEST_TOO_LARGE",
        "THROTTLED",
        "QUOTA_EXCEEDED"
      ]
    },
    "GatewayResponses":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfGatewayResponse",
          "documentation":"<p>Returns the entire collection, because of no pagination support.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>The collection of the <a>GatewayResponse</a> instances of a <a>RestApi</a> as a <code>responseType</code>-to-<a>GatewayResponse</a> object map of key-value pairs. As such, pagination is not supported for querying this collection.</p> <div class=\"remarks\"> For more information about valid gateway response types, see <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html\">Gateway Response Types Supported by API Gateway</a> <div class=\"example\"> <h4>Example: Get the collection of gateway responses of an API</h4> <h5>Request</h5> <p>This example request shows how to retrieve the <a>GatewayResponses</a> collection from an API.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T220604Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=59b42fe54a76a5de8adf2c67baa6d39206f8e9ad49a1d77ccc6a5da3103a398a Cache-Control: no-cache Postman-Token: 5637af27-dc29-fc5c-9dfe-0645d52cb515 </code></pre> <p></p> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ \"_links\": { \"curies\": { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html\", \"name\": \"gatewayresponse\", \"templated\": true }, \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses\" }, \"first\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses\" }, \"gatewayresponse:by-type\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"item\": [ { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/THROTTLED\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE\" }, { \"href\": \"/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE\" } ] }, \"_embedded\": { \"item\": [ { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"INTEGRATION_FAILURE\", \"statusCode\": \"504\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"RESOURCE_NOT_FOUND\", \"statusCode\": \"404\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"REQUEST_TOO_LARGE\", \"statusCode\": \"413\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/THROTTLED\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/THROTTLED\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"THROTTLED\", \"statusCode\": \"429\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"UNSUPPORTED_MEDIA_TYPE\", \"statusCode\": \"415\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"AUTHORIZER_CONFIGURATION_ERROR\", \"statusCode\": \"500\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"DEFAULT_5XX\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"DEFAULT_4XX\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"BAD_REQUEST_PARAMETERS\", \"statusCode\": \"400\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"BAD_REQUEST_BODY\", \"statusCode\": \"400\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"EXPIRED_TOKEN\", \"statusCode\": \"403\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"ACCESS_DENIED\", \"statusCode\": \"403\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"INVALID_API_KEY\", \"statusCode\": \"403\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"UNAUTHORIZED\", \"statusCode\": \"401\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"API_CONFIGURATION_ERROR\", \"statusCode\": \"500\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"QUOTA_EXCEEDED\", \"statusCode\": \"429\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"INTEGRATION_TIMEOUT\", \"statusCode\": \"504\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"MISSING_AUTHENTICATION_TOKEN\", \"statusCode\": \"403\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"INVALID_SIGNATURE\", \"statusCode\": \"403\" }, { \"_links\": { \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE\" } }, \"defaultResponse\": true, \"responseParameters\": {}, \"responseTemplates\": { \"application/json\": \"{\\\"message\\\":$context.error.messageString}\" }, \"responseType\": \"AUTHORIZER_FAILURE\", \"statusCode\": \"500\" } ] } }</code></pre> <p></p> </div> </div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html\">Customize Gateway Responses</a> </div>"
    },
    "GenerateClientCertificateRequest":{
      "type":"structure",
      "members":{
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the <a>ClientCertificate</a>.</p>"
        }
      },
      "documentation":"<p>A request to generate a <a>ClientCertificate</a> resource.</p>"
    },
    "GetAccountRequest":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Requests API Gateway to get information about the current <a>Account</a> resource.</p>"
    },
    "GetApiKeyRequest":{
      "type":"structure",
      "required":["apiKey"],
      "members":{
        "apiKey":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>ApiKey</a> resource.</p>",
          "location":"uri",
          "locationName":"api_Key"
        },
        "includeValue":{
          "shape":"NullableBoolean",
          "documentation":"<p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.</p>",
          "location":"querystring",
          "locationName":"includeValue"
        }
      },
      "documentation":"<p>A request to get information about the current <a>ApiKey</a> resource.</p>"
    },
    "GetApiKeysRequest":{
      "type":"structure",
      "members":{
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        },
        "nameQuery":{
          "shape":"String",
          "documentation":"<p>The name of queried API keys.</p>",
          "location":"querystring",
          "locationName":"name"
        },
        "customerId":{
          "shape":"String",
          "documentation":"<p>The identifier of a customer in AWS Marketplace or an external system, such as a developer portal.</p>",
          "location":"querystring",
          "locationName":"customerId"
        },
        "includeValues":{
          "shape":"NullableBoolean",
          "documentation":"<p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains key values.</p>",
          "location":"querystring",
          "locationName":"includeValues"
        }
      },
      "documentation":"<p>A request to get information about the current <a>ApiKeys</a> resource.</p>"
    },
    "GetAuthorizerRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "authorizerId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "authorizerId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>Authorizer</a> resource.</p>",
          "location":"uri",
          "locationName":"authorizer_id"
        }
      },
      "documentation":"<p>Request to describe an existing <a>Authorizer</a> resource.</p>"
    },
    "GetAuthorizersRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Request to describe an existing <a>Authorizers</a> resource.</p>"
    },
    "GetBasePathMappingRequest":{
      "type":"structure",
      "required":[
        "domainName",
        "basePath"
      ],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The domain name of the <a>BasePathMapping</a> resource to be described.</p>",
          "location":"uri",
          "locationName":"domain_name"
        },
        "basePath":{
          "shape":"String",
          "documentation":"<p>[Required] The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Leave this blank if you do not want callers to specify any base path name after the domain name.</p>",
          "location":"uri",
          "locationName":"base_path"
        }
      },
      "documentation":"<p>Request to describe a <a>BasePathMapping</a> resource.</p>"
    },
    "GetBasePathMappingsRequest":{
      "type":"structure",
      "required":["domainName"],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The domain name of a <a>BasePathMapping</a> resource.</p>",
          "location":"uri",
          "locationName":"domain_name"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>A request to get information about a collection of <a>BasePathMapping</a> resources.</p>"
    },
    "GetClientCertificateRequest":{
      "type":"structure",
      "required":["clientCertificateId"],
      "members":{
        "clientCertificateId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>ClientCertificate</a> resource to be described.</p>",
          "location":"uri",
          "locationName":"clientcertificate_id"
        }
      },
      "documentation":"<p>A request to get information about the current <a>ClientCertificate</a> resource.</p>"
    },
    "GetClientCertificatesRequest":{
      "type":"structure",
      "members":{
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>A request to get information about a collection of <a>ClientCertificate</a> resources.</p>"
    },
    "GetDeploymentRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "deploymentId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "deploymentId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>Deployment</a> resource to get information about.</p>",
          "location":"uri",
          "locationName":"deployment_id"
        },
        "embed":{
          "shape":"ListOfString",
          "documentation":"<p>A query parameter to retrieve the specified embedded resources of the returned <a>Deployment</a> resource in the response. In a REST API call, this <code>embed</code> parameter value is a list of comma-separated strings, as in <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2</code>. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the <code>\"apisummary\"</code> string. For example, <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary</code>.</p>",
          "location":"querystring",
          "locationName":"embed"
        }
      },
      "documentation":"<p>Requests API Gateway to get information about a <a>Deployment</a> resource.</p>"
    },
    "GetDeploymentsRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Requests API Gateway to get information about a <a>Deployments</a> collection.</p>"
    },
    "GetDocumentationPartRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "documentationPartId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "documentationPartId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"part_id"
        }
      },
      "documentation":"<p>Gets a specified documentation part of a given API.</p>"
    },
    "GetDocumentationPartsRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "type":{
          "shape":"DocumentationPartType",
          "documentation":"<p>The type of API entities of the to-be-retrieved documentation parts. </p>",
          "location":"querystring",
          "locationName":"type"
        },
        "nameQuery":{
          "shape":"String",
          "documentation":"<p>The name of API entities of the to-be-retrieved documentation parts.</p>",
          "location":"querystring",
          "locationName":"name"
        },
        "path":{
          "shape":"String",
          "documentation":"<p>The path of API entities of the to-be-retrieved documentation parts.</p>",
          "location":"querystring",
          "locationName":"path"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        },
        "locationStatus":{
          "shape":"LocationStatusType",
          "documentation":"<p>The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving <a>DocumentationPart</a> resources with content and <code>UNDOCUMENTED</code> for <a>DocumentationPart</a> resources without content.</p>",
          "location":"querystring",
          "locationName":"locationStatus"
        }
      },
      "documentation":"<p>Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).</p>"
    },
    "GetDocumentationVersionRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "documentationVersion"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "documentationVersion":{
          "shape":"String",
          "documentation":"<p>[Required] The version identifier of the to-be-retrieved documentation snapshot.</p>",
          "location":"uri",
          "locationName":"doc_version"
        }
      },
      "documentation":"<p>Gets a documentation snapshot of an API.</p>"
    },
    "GetDocumentationVersionsRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Gets the documentation versions of an API.</p>"
    },
    "GetDomainNameRequest":{
      "type":"structure",
      "required":["domainName"],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>DomainName</a> resource.</p>",
          "location":"uri",
          "locationName":"domain_name"
        }
      },
      "documentation":"<p>Request to get the name of a <a>DomainName</a> resource.</p>"
    },
    "GetDomainNamesRequest":{
      "type":"structure",
      "members":{
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Request to describe a collection of <a>DomainName</a> resources.</p>"
    },
    "GetExportRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "stageName",
        "exportType"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>Stage</a> that will be exported.</p>",
          "location":"uri",
          "locationName":"stage_name"
        },
        "exportType":{
          "shape":"String",
          "documentation":"<p>[Required] The type of export. Currently only 'swagger' is supported.</p>",
          "location":"uri",
          "locationName":"export_type"
        },
        "parameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map of query string parameters that specify properties of the export, depending on the requested <code>exportType</code>. For <code>exportType</code> <code>swagger</code>, any combination of the following parameters are supported: <code>extensions='integrations'</code> or <code>extensions='apigateway'</code> will export the API with x-amazon-apigateway-integration extensions. <code>extensions='authorizers'</code> will export the API with x-amazon-apigateway-authorizer extensions. <code>postman</code> will export the API with Postman extensions, allowing for import to the Postman tool</p>",
          "location":"querystring"
        },
        "accepts":{
          "shape":"String",
          "documentation":"<p>The content-type of the export, for example <code>application/json</code>. Currently <code>application/json</code> and <code>application/yaml</code> are supported for <code>exportType</code> of <code>swagger</code>. This should be specified in the <code>Accept</code> header for direct API requests.</p>",
          "location":"header",
          "locationName":"Accept"
        }
      },
      "documentation":"<p>Request a new export of a <a>RestApi</a> for a particular <a>Stage</a>.</p>"
    },
    "GetGatewayResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "responseType"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "responseType":{
          "shape":"GatewayResponseType",
          "documentation":"<p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>",
          "location":"uri",
          "locationName":"response_type"
        }
      },
      "documentation":"<p>Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>"
    },
    "GetGatewayResponsesRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set. The <a>GatewayResponse</a> collection does not support pagination and the position does not apply here.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The <a>GatewayResponses</a> collection does not support pagination and the limit does not apply here.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.</p>"
    },
    "GetIntegrationRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a get integration request's resource identifier</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a get integration request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        }
      },
      "documentation":"<p>Represents a request to get the integration configuration.</p>"
    },
    "GetIntegrationResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "statusCode"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a get integration response request's resource identifier.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a get integration response request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>[Required] Specifies a get integration response request's status code.</p>",
          "location":"uri",
          "locationName":"status_code"
        }
      },
      "documentation":"<p>Represents a get integration response request.</p>"
    },
    "GetMethodRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies the method request's HTTP method type.</p>",
          "location":"uri",
          "locationName":"http_method"
        }
      },
      "documentation":"<p>Request to describe an existing <a>Method</a> resource.</p>"
    },
    "GetMethodResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "statusCode"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] The HTTP verb of the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>[Required] The status code for the <a>MethodResponse</a> resource.</p>",
          "location":"uri",
          "locationName":"status_code"
        }
      },
      "documentation":"<p>Request to describe a <a>MethodResponse</a> resource.</p>"
    },
    "GetModelRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "modelName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>RestApi</a> identifier under which the <a>Model</a> exists.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "modelName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the model as an identifier.</p>",
          "location":"uri",
          "locationName":"model_name"
        },
        "flatten":{
          "shape":"Boolean",
          "documentation":"<p>A query parameter of a Boolean value to resolve (<code>true</code>) all external model references and returns a flattened model schema or not (<code>false</code>) The default is <code>false</code>.</p>",
          "location":"querystring",
          "locationName":"flatten"
        }
      },
      "documentation":"<p>Request to list information about a model in an existing <a>RestApi</a> resource.</p>"
    },
    "GetModelTemplateRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "modelName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "modelName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the model for which to generate a template.</p>",
          "location":"uri",
          "locationName":"model_name"
        }
      },
      "documentation":"<p>Request to generate a sample mapping template used to transform the payload.</p>"
    },
    "GetModelsRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Request to list existing <a>Models</a> defined for a <a>RestApi</a> resource.</p>"
    },
    "GetRequestValidatorRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "requestValidatorId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "requestValidatorId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>RequestValidator</a> to be retrieved.</p>",
          "location":"uri",
          "locationName":"requestvalidator_id"
        }
      },
      "documentation":"<p>Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>"
    },
    "GetRequestValidatorsRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>"
    },
    "GetResourceRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier for the <a>Resource</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "embed":{
          "shape":"ListOfString",
          "documentation":"<p>A query parameter to retrieve the specified resources embedded in the returned <a>Resource</a> representation in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded <a>Method</a> resources this way. The query parameter value must be a single-valued list and contain the <code>\"methods\"</code> string. For example, <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code>.</p>",
          "location":"querystring",
          "locationName":"embed"
        }
      },
      "documentation":"<p>Request to list information about a resource.</p>"
    },
    "GetResourcesRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        },
        "embed":{
          "shape":"ListOfString",
          "documentation":"<p>A query parameter used to retrieve the specified resources embedded in the returned <a>Resources</a> resource in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded <a>Method</a> resources this way. The query parameter value must be a single-valued list and contain the <code>\"methods\"</code> string. For example, <code>GET /restapis/{restapi_id}/resources?embed=methods</code>.</p>",
          "location":"querystring",
          "locationName":"embed"
        }
      },
      "documentation":"<p>Request to list information about a collection of resources.</p>"
    },
    "GetRestApiRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        }
      },
      "documentation":"<p>The GET request to list an existing <a>RestApi</a> defined for your collection. </p>"
    },
    "GetRestApisRequest":{
      "type":"structure",
      "members":{
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>The GET request to list existing <a>RestApis</a> defined for your collection.</p>"
    },
    "GetSdkRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "stageName",
        "sdkType"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>Stage</a> that the SDK will use.</p>",
          "location":"uri",
          "locationName":"stage_name"
        },
        "sdkType":{
          "shape":"String",
          "documentation":"<p>[Required] The language for the generated SDK. Currently <code>java</code>, <code>javascript</code>, <code>android</code>, <code>objectivec</code> (for iOS), <code>swift</code> (for iOS), and <code>ruby</code> are supported.</p>",
          "location":"uri",
          "locationName":"sdk_type"
        },
        "parameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A string-to-string key-value map of query parameters <code>sdkType</code>-dependent properties of the SDK. For <code>sdkType</code> of <code>objectivec</code> or <code>swift</code>, a parameter named <code>classPrefix</code> is required. For <code>sdkType</code> of <code>android</code>, parameters named <code>groupId</code>, <code>artifactId</code>, <code>artifactVersion</code>, and <code>invokerPackage</code> are required. For <code>sdkType</code> of <code>java</code>, parameters named <code>serviceName</code> and <code>javaPackageName</code> are required. </p>",
          "location":"querystring"
        }
      },
      "documentation":"<p>Request a new generated client SDK for a <a>RestApi</a> and <a>Stage</a>.</p>"
    },
    "GetSdkTypeRequest":{
      "type":"structure",
      "required":["id"],
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the queried <a>SdkType</a> instance.</p>",
          "location":"uri",
          "locationName":"sdktype_id"
        }
      },
      "documentation":"<p>Get an <a>SdkType</a> instance.</p>"
    },
    "GetSdkTypesRequest":{
      "type":"structure",
      "members":{
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Get the <a>SdkTypes</a> collection.</p>"
    },
    "GetStageRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "stageName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>Stage</a> resource to get information about.</p>",
          "location":"uri",
          "locationName":"stage_name"
        }
      },
      "documentation":"<p>Requests API Gateway to get information about a <a>Stage</a> resource.</p>"
    },
    "GetStagesRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "deploymentId":{
          "shape":"String",
          "documentation":"<p>The stages' deployment identifiers.</p>",
          "location":"querystring",
          "locationName":"deploymentId"
        }
      },
      "documentation":"<p>Requests API Gateway to get information about one or more <a>Stage</a> resources.</p>"
    },
    "GetTagsRequest":{
      "type":"structure",
      "required":["resourceArn"],
      "members":{
        "resourceArn":{
          "shape":"String",
          "documentation":"<p>[Required] The ARN of a resource that can be tagged. The resource ARN must be URL-encoded. At present, <a>Stage</a> is the only taggable resource.</p>",
          "location":"uri",
          "locationName":"resource_arn"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>(Not currently supported) The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>(Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Gets the <a>Tags</a> collection for a given resource.</p>"
    },
    "GetUsagePlanKeyRequest":{
      "type":"structure",
      "required":[
        "usagePlanId",
        "keyId"
      ],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        },
        "keyId":{
          "shape":"String",
          "documentation":"<p>[Required] The key Id of the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>",
          "location":"uri",
          "locationName":"keyId"
        }
      },
      "documentation":"<p>The GET request to get a usage plan key of a given key identifier.</p>"
    },
    "GetUsagePlanKeysRequest":{
      "type":"structure",
      "required":["usagePlanId"],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        },
        "nameQuery":{
          "shape":"String",
          "documentation":"<p>A query parameter specifying the name of the to-be-returned usage plan keys.</p>",
          "location":"querystring",
          "locationName":"name"
        }
      },
      "documentation":"<p>The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.</p>"
    },
    "GetUsagePlanRequest":{
      "type":"structure",
      "required":["usagePlanId"],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>UsagePlan</a> resource to be retrieved.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        }
      },
      "documentation":"<p>The GET request to get a usage plan of a given plan identifier.</p>"
    },
    "GetUsagePlansRequest":{
      "type":"structure",
      "members":{
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "keyId":{
          "shape":"String",
          "documentation":"<p>The identifier of the API key associated with the usage plans.</p>",
          "location":"querystring",
          "locationName":"keyId"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>The GET request to get all the usage plans of the caller's account.</p>"
    },
    "GetUsageRequest":{
      "type":"structure",
      "required":[
        "usagePlanId",
        "startDate",
        "endDate"
      ],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the usage plan associated with the usage data.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        },
        "keyId":{
          "shape":"String",
          "documentation":"<p>The Id of the API key associated with the resultant usage data.</p>",
          "location":"querystring",
          "locationName":"keyId"
        },
        "startDate":{
          "shape":"String",
          "documentation":"<p>[Required] The starting date (e.g., 2016-01-01) of the usage data.</p>",
          "location":"querystring",
          "locationName":"startDate"
        },
        "endDate":{
          "shape":"String",
          "documentation":"<p>[Required] The ending date (e.g., 2016-12-31) of the usage data.</p>",
          "location":"querystring",
          "locationName":"endDate"
        },
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>The GET request to get the usage data of a usage plan in a specified time interval.</p>"
    },
    "GetVpcLinkRequest":{
      "type":"structure",
      "required":["vpcLinkId"],
      "members":{
        "vpcLinkId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>",
          "location":"uri",
          "locationName":"vpclink_id"
        }
      },
      "documentation":"<p>Gets a specified VPC link under the caller's account in a region.</p>"
    },
    "GetVpcLinksRequest":{
      "type":"structure",
      "members":{
        "position":{
          "shape":"String",
          "documentation":"<p>The current pagination position in the paged result set.</p>",
          "location":"querystring",
          "locationName":"position"
        },
        "limit":{
          "shape":"NullableInteger",
          "documentation":"<p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>",
          "location":"querystring",
          "locationName":"limit"
        }
      },
      "documentation":"<p>Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.</p>"
    },
    "ImportApiKeysRequest":{
      "type":"structure",
      "required":[
        "body",
        "format"
      ],
      "members":{
        "body":{
          "shape":"Blob",
          "documentation":"<p>The payload of the POST request to import API keys. For the payload format, see <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-key-file-format.html\">API Key File Format</a>.</p>"
        },
        "format":{
          "shape":"ApiKeysFormat",
          "documentation":"<p>A query parameter to specify the input format to imported API keys. Currently, only the <code>csv</code> format is supported.</p>",
          "location":"querystring",
          "locationName":"format"
        },
        "failOnWarnings":{
          "shape":"Boolean",
          "documentation":"<p>A query parameter to indicate whether to rollback <a>ApiKey</a> importation (<code>true</code>) or not (<code>false</code>) when error is encountered.</p>",
          "location":"querystring",
          "locationName":"failonwarnings"
        }
      },
      "documentation":"<p>The POST request to import API keys from an external source, such as a CSV-formatted file.</p>",
      "payload":"body"
    },
    "ImportDocumentationPartsRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "body"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "mode":{
          "shape":"PutMode",
          "documentation":"<p>A query parameter to indicate whether to overwrite (<code>OVERWRITE</code>) any existing <a>DocumentationParts</a> definition or to merge (<code>MERGE</code>) the new definition into the existing one. The default value is <code>MERGE</code>.</p>",
          "location":"querystring",
          "locationName":"mode"
        },
        "failOnWarnings":{
          "shape":"Boolean",
          "documentation":"<p>A query parameter to specify whether to rollback the documentation importation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.</p>",
          "location":"querystring",
          "locationName":"failonwarnings"
        },
        "body":{
          "shape":"Blob",
          "documentation":"<p>[Required] Raw byte array representing the to-be-imported documentation parts. To import from a Swagger file, this is a JSON object.</p>"
        }
      },
      "documentation":"<p>Import documentation parts from an external (e.g., Swagger) definition file. </p>",
      "payload":"body"
    },
    "ImportRestApiRequest":{
      "type":"structure",
      "required":["body"],
      "members":{
        "failOnWarnings":{
          "shape":"Boolean",
          "documentation":"<p>A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.</p>",
          "location":"querystring",
          "locationName":"failonwarnings"
        },
        "parameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.</p> <p> To exclude <a>DocumentationParts</a> from the import, set <code>parameters</code> as <code>ignore=documentation</code>.</p> <p> To configure the endpoint type, set <code>parameters</code> as <code>endpointConfigurationTypes=EDGE</code>, <code>endpointConfigurationTypes=REGIONAL</code>, or <code>endpointConfigurationTypes=PRIVATE</code>. The default endpoint type is <code>EDGE</code>.</p> <p> To handle imported <code>basePath</code>, set <code>parameters</code> as <code>basePath=ignore</code>, <code>basePath=prepend</code> or <code>basePath=split</code>.</p> <p>For example, the AWS CLI command to exclude documentation from the imported API is:</p> <pre><code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code></pre> <p>The AWS CLI command to set the regional endpoint on the imported API is:</p> <pre><code>aws apigateway import-rest-api --parameters endpointConfigurationTypes=REGIONAL --body 'file:///path/to/imported-api-body.json'</code></pre>",
          "location":"querystring"
        },
        "body":{
          "shape":"Blob",
          "documentation":"<p>[Required] The POST request body containing external API definitions. Currently, only Swagger definition JSON files are supported. The maximum size of the API definition file is 2MB.</p>"
        }
      },
      "documentation":"<p>A POST request to import an API to API Gateway using an input of an API definition file.</p>",
      "payload":"body"
    },
    "Integer":{"type":"integer"},
    "Integration":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"IntegrationType",
          "documentation":"<p>Specifies an API method integration type. The valid value is one of the following:</p> <ul> <li><code>AWS</code>: for integrating the API method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration.</li> <li><code>AWS_PROXY</code>: for integrating the API method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as the Lambda proxy integration.</li> <li><code>HTTP</code>: for integrating the API method request with an HTTP endpoint, including a private HTTP endpoint within a VPC. This integration is also referred to as the HTTP custom integration.</li> <li><code>HTTP_PROXY</code>: for integrating the API method request with an HTTP endpoint, including a private HTTP endpoint within a VPC, with the client request passed through as-is. This is also referred to as the HTTP proxy integration.</li> <li><code>MOCK</code>: for integrating the API method request with API Gateway as a \"loop-back\" endpoint without invoking any backend.</li> </ul> <p>For the HTTP and HTTP proxy integrations, each integration can specify a protocol (<code>http/https</code>), port and path. Standard 80 and 443 ports are supported as well as custom ports above 1024. An HTTP or HTTP proxy integration with a <code>connectionType</code> of <code>VPC_LINK</code> is referred to as a private integration and uses a <a>VpcLink</a> to connect API Gateway to a network load balancer of a VPC.</p>"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>Specifies the integration's HTTP method type.</p>"
        },
        "uri":{
          "shape":"String",
          "documentation":"<p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p> <ul> <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier\">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p> </li> <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&amp;{p1}={v1}&amp;p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html\">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p> </li></ul>"
        },
        "connectionType":{
          "shape":"ConnectionType",
          "documentation":"<p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>"
        },
        "connectionId":{
          "shape":"String",
          "documentation":"<p>The (<a href=\"http://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id\"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.</p>"
        },
        "credentials":{
          "shape":"String",
          "documentation":"<p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string <code>arn:aws:iam::\\*:user/\\*</code>. To use resource-based permissions on supported AWS services, specify null.</p>"
        },
        "requestParameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>"
        },
        "requestTemplates":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>"
        },
        "passthroughBehavior":{
          "shape":"String",
          "documentation":"<div> <p> Specifies how the method request body of an unmapped content type will be passed through the integration request to the back end without transformation. A content type is unmapped if no mapping template is defined in the integration or the content type does not match any of the mapped content types, as specified in <code>requestTemplates</code>. The valid value is one of the following: </p> <ul> <li> <code>WHEN_NO_MATCH</code>: passes the method request body through the integration request to the back end without transformation when the method request content type does not match any content type associated with the mapping templates defined in the integration request. </li> <li> <code>WHEN_NO_TEMPLATES</code>: passes the method request body through the integration request to the back end without transformation when no mapping template is defined in the integration request. If a template is defined when this option is selected, the method request of an unmapped content-type will be rejected with an HTTP <code>415 Unsupported Media Type</code> response. </li> <li> <code>NEVER</code>: rejects the method request with an HTTP <code>415 Unsupported Media Type</code> response when either the method request content type does not match any content type associated with the mapping templates defined in the integration request or no mapping template is defined in the integration request. </li> </ul> </div>"
        },
        "contentHandling":{
          "shape":"ContentHandlingStrategy",
          "documentation":"<p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a request payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a request payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehaviors</code> is configured to support payload pass-through.</p>"
        },
        "timeoutInMillis":{
          "shape":"Integer",
          "documentation":"<p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>"
        },
        "cacheNamespace":{
          "shape":"String",
          "documentation":"<p>Specifies the integration's cache namespace.</p>"
        },
        "cacheKeyParameters":{
          "shape":"ListOfString",
          "documentation":"<p>Specifies the integration's cache key parameters.</p>"
        },
        "integrationResponses":{
          "shape":"MapOfIntegrationResponse",
          "documentation":"<p>Specifies the integration's responses.</p> <div class=\"remarks\"> <p/> <h4>Example: Get integration responses of a method</h4> <h5>Request</h5> <p/> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160607T191449Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160607/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} </code></pre> <h5>Response</h5> <p>The successful response returns <code>200 OK</code> status and a payload as follows:</p> <pre><code>{ \"_links\": { \"curies\": { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html\", \"name\": \"integrationresponse\", \"templated\": true }, \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\", \"title\": \"200\" }, \"integrationresponse:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\" }, \"integrationresponse:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\" } }, \"responseParameters\": { \"method.response.header.Content-Type\": \"'application/xml'\" }, \"responseTemplates\": { \"application/json\": \"$util.urlDecode(\\\"%3CkinesisStreams%3E#foreach($stream in $input.path('$.StreamNames'))%3Cstream%3E%3Cname%3E$stream%3C/name%3E%3C/stream%3E#end%3C/kinesisStreams%3E\\\")\\n\" }, \"statusCode\": \"200\" }</code></pre> <p/> </div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Creating an API</a> </div>"
        }
      },
      "documentation":"<p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class=\"remarks\">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Creating an API</a> </div>"
    },
    "IntegrationResponse":{
      "type":"structure",
      "members":{
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>Specifies the status code that is used to map the integration response to an existing <a>MethodResponse</a>.</p>"
        },
        "selectionPattern":{
          "shape":"String",
          "documentation":"<p>Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the <code>.+</code> regex to match error response. However, make sure that the error response does not contain any newline (<code>\\n</code>) character in such cases. If the back end is an AWS Lambda function, the AWS Lambda function error header is matched. For all other HTTP and AWS back ends, the HTTP status code is matched.</p>"
        },
        "responseParameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> is a valid and unique response header name and <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.</p>"
        },
        "responseTemplates":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>"
        },
        "contentHandling":{
          "shape":"ContentHandlingStrategy",
          "documentation":"<p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>"
        }
      },
      "documentation":"<p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Creating an API</a> </div>"
    },
    "IntegrationType":{
      "type":"string",
      "documentation":"<p>The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. </p>",
      "enum":[
        "HTTP",
        "AWS",
        "MOCK",
        "HTTP_PROXY",
        "AWS_PROXY"
      ]
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "retryAfterSeconds":{
          "shape":"String",
          "location":"header",
          "locationName":"Retry-After"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>The request exceeded the rate limit. Retry after the specified time period.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "ListOfARNs":{
      "type":"list",
      "member":{"shape":"ProviderARN"}
    },
    "ListOfApiKey":{
      "type":"list",
      "member":{"shape":"ApiKey"}
    },
    "ListOfApiStage":{
      "type":"list",
      "member":{"shape":"ApiStage"}
    },
    "ListOfAuthorizer":{
      "type":"list",
      "member":{"shape":"Authorizer"}
    },
    "ListOfBasePathMapping":{
      "type":"list",
      "member":{"shape":"BasePathMapping"}
    },
    "ListOfClientCertificate":{
      "type":"list",
      "member":{"shape":"ClientCertificate"}
    },
    "ListOfDeployment":{
      "type":"list",
      "member":{"shape":"Deployment"}
    },
    "ListOfDocumentationPart":{
      "type":"list",
      "member":{"shape":"DocumentationPart"}
    },
    "ListOfDocumentationVersion":{
      "type":"list",
      "member":{"shape":"DocumentationVersion"}
    },
    "ListOfDomainName":{
      "type":"list",
      "member":{"shape":"DomainName"}
    },
    "ListOfEndpointType":{
      "type":"list",
      "member":{"shape":"EndpointType"}
    },
    "ListOfGatewayResponse":{
      "type":"list",
      "member":{"shape":"GatewayResponse"}
    },
    "ListOfLong":{
      "type":"list",
      "member":{"shape":"Long"}
    },
    "ListOfModel":{
      "type":"list",
      "member":{"shape":"Model"}
    },
    "ListOfPatchOperation":{
      "type":"list",
      "member":{"shape":"PatchOperation"},
      "documentation":"A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list."
    },
    "ListOfRequestValidator":{
      "type":"list",
      "member":{"shape":"RequestValidator"}
    },
    "ListOfResource":{
      "type":"list",
      "member":{"shape":"Resource"}
    },
    "ListOfRestApi":{
      "type":"list",
      "member":{"shape":"RestApi"}
    },
    "ListOfSdkConfigurationProperty":{
      "type":"list",
      "member":{"shape":"SdkConfigurationProperty"}
    },
    "ListOfSdkType":{
      "type":"list",
      "member":{"shape":"SdkType"}
    },
    "ListOfStage":{
      "type":"list",
      "member":{"shape":"Stage"}
    },
    "ListOfStageKeys":{
      "type":"list",
      "member":{"shape":"StageKey"}
    },
    "ListOfString":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "ListOfUsage":{
      "type":"list",
      "member":{"shape":"ListOfLong"}
    },
    "ListOfUsagePlan":{
      "type":"list",
      "member":{"shape":"UsagePlan"}
    },
    "ListOfUsagePlanKey":{
      "type":"list",
      "member":{"shape":"UsagePlanKey"}
    },
    "ListOfVpcLink":{
      "type":"list",
      "member":{"shape":"VpcLink"}
    },
    "LocationStatusType":{
      "type":"string",
      "enum":[
        "DOCUMENTED",
        "UNDOCUMENTED"
      ]
    },
    "Long":{"type":"long"},
    "MapOfApiStageThrottleSettings":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"ThrottleSettings"}
    },
    "MapOfHeaderValues":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "MapOfIntegrationResponse":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"IntegrationResponse"}
    },
    "MapOfKeyUsages":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"ListOfUsage"}
    },
    "MapOfMethod":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"Method"}
    },
    "MapOfMethodResponse":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"MethodResponse"}
    },
    "MapOfMethodSettings":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"MethodSetting"}
    },
    "MapOfMethodSnapshot":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"MethodSnapshot"}
    },
    "MapOfStringToBoolean":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"NullableBoolean"}
    },
    "MapOfStringToList":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"ListOfString"}
    },
    "MapOfStringToString":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "Method":{
      "type":"structure",
      "members":{
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>The method's HTTP verb.</p>"
        },
        "authorizationType":{
          "shape":"String",
          "documentation":"<p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>"
        },
        "authorizerId":{
          "shape":"String",
          "documentation":"<p>The identifier of an <a>Authorizer</a> to use on this method. The <code>authorizationType</code> must be <code>CUSTOM</code>.</p>"
        },
        "apiKeyRequired":{
          "shape":"NullableBoolean",
          "documentation":"<p>A boolean flag specifying whether a valid <a>ApiKey</a> is required to invoke this method.</p>"
        },
        "requestValidatorId":{
          "shape":"String",
          "documentation":"<p>The identifier of a <a>RequestValidator</a> for request validation.</p>"
        },
        "operationName":{
          "shape":"String",
          "documentation":"<p>A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in <a href=\"http://petstore-demo-endpoint.execute-api.com/petstore/pets\">PetStore</a> example.</p>"
        },
        "requestParameters":{
          "shape":"MapOfStringToBoolean",
          "documentation":"<p>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in <a>Integration</a> to be mapped to integration request parameters or templates.</p>"
        },
        "requestModels":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map specifying data schemas, represented by <a>Model</a> resources, (as the mapped value) of the request payloads of given content types (as the mapping key).</p>"
        },
        "methodResponses":{
          "shape":"MapOfMethodResponse",
          "documentation":"<p>Gets a method response associated with a given HTTP status code. </p> <div class=\"remarks\"> <p>The collection of method responses are encapsulated in a key-value map, where the key is a response's HTTP status code and the value is a <a>MethodResponse</a> resource that specifies the response returned to the caller from the back end through the integration response.</p> <h4>Example: Get a 200 OK response of a GET method</h4> <h5>Request</h5> <p/> <pre><code>GET /restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com Content-Length: 117 X-Amz-Date: 20160613T215008Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160613/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ \"_links\": { \"curies\": { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html\", \"name\": \"methodresponse\", \"templated\": true }, \"self\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200\", \"title\": \"200\" }, \"methodresponse:delete\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200\" }, \"methodresponse:update\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200\" } }, \"responseModels\": { \"application/json\": \"Empty\" }, \"responseParameters\": { \"method.response.header.operator\": false, \"method.response.header.operand_2\": false, \"method.response.header.operand_1\": false }, \"statusCode\": \"200\" }</code></pre> <p/> </div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-method-response.html\">AWS CLI</a> </div>"
        },
        "methodIntegration":{
          "shape":"Integration",
          "documentation":"<p>Gets the method's integration responsible for passing the client-submitted request to the back end and performing necessary transformations to make the request compliant with the back end.</p> <div class=\"remarks\"> <p/> <h4>Example: </h4> <h5>Request</h5> <p/> <pre><code>GET /restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com Content-Length: 117 X-Amz-Date: 20160613T213210Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160613/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ \"_links\": { \"curies\": [ { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html\", \"name\": \"integration\", \"templated\": true }, { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html\", \"name\": \"integrationresponse\", \"templated\": true } ], \"self\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration\" }, \"integration:delete\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration\" }, \"integration:responses\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"integration:update\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration\" }, \"integrationresponse:put\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/{status_code}\", \"templated\": true } }, \"cacheKeyParameters\": [], \"cacheNamespace\": \"0cjtch\", \"credentials\": \"arn:aws:iam::123456789012:role/apigAwsProxyRole\", \"httpMethod\": \"POST\", \"passthroughBehavior\": \"WHEN_NO_MATCH\", \"requestTemplates\": { \"application/json\": \"{\\n \\\"a\\\": \\\"$input.params('operand1')\\\",\\n \\\"b\\\": \\\"$input.params('operand2')\\\", \\n \\\"op\\\": \\\"$input.params('operator')\\\" \\n}\" }, \"type\": \"AWS\", \"uri\": \"arn:aws:apigateway:us-west-2:lambda:path//2015-03-31/functions/arn:aws:lambda:us-west-2:123456789012:function:Calc/invocations\", \"_embedded\": { \"integration:responses\": { \"_links\": { \"self\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"integrationresponse:delete\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200\" }, \"integrationresponse:update\": { \"href\": \"/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200\" } }, \"responseParameters\": { \"method.response.header.operator\": \"integration.response.body.op\", \"method.response.header.operand_2\": \"integration.response.body.b\", \"method.response.header.operand_1\": \"integration.response.body.a\" }, \"responseTemplates\": { \"application/json\": \"#set($res = $input.path('$'))\\n{\\n \\\"result\\\": \\\"$res.a, $res.b, $res.op => $res.c\\\",\\n \\\"a\\\" : \\\"$res.a\\\",\\n \\\"b\\\" : \\\"$res.b\\\",\\n \\\"op\\\" : \\\"$res.op\\\",\\n \\\"c\\\" : \\\"$res.c\\\"\\n}\" }, \"selectionPattern\": \"\", \"statusCode\": \"200\" } } }</code></pre> <p/> </div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-integration.html\">AWS CLI</a> </div>"
        },
        "authorizationScopes":{
          "shape":"ListOfString",
          "documentation":"<p>A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>"
        }
      },
      "documentation":"<p> Represents a client-facing interface by which the client calls the API to access back-end resources. A <b>Method</b> resource is integrated with an <a>Integration</a> resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a <b>Method</b> resource, whereas an integration request is embodied in an <a>Integration</a> resource. On the other hand, a method response is represented by a <a>MethodResponse</a> resource, whereas an integration response is represented by an <a>IntegrationResponse</a> resource. </p> <div class=\"remarks\"> <p/> <h4>Example: Retrive the GET method on a specified resource</h4> <h5>Request</h5> <p>The following example request retrieves the information about the GET method on an API resource (<code>3kzxbg5sa2</code>) of an API (<code>fugvjdxtri</code>). </p> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160603T210259Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ \"_links\": { \"curies\": [ { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html\", \"name\": \"integration\", \"templated\": true }, { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html\", \"name\": \"integrationresponse\", \"templated\": true }, { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html\", \"name\": \"method\", \"templated\": true }, { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html\", \"name\": \"methodresponse\", \"templated\": true } ], \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET\", \"name\": \"GET\", \"title\": \"GET\" }, \"integration:put\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"method:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET\" }, \"method:integration\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"method:responses\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"method:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET\" }, \"methodresponse:put\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}\", \"templated\": true } }, \"apiKeyRequired\": true, \"authorizationType\": \"NONE\", \"httpMethod\": \"GET\", \"_embedded\": { \"method:integration\": { \"_links\": { \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"integration:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"integration:responses\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"integration:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"integrationresponse:put\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}\", \"templated\": true } }, \"cacheKeyParameters\": [], \"cacheNamespace\": \"3kzxbg5sa2\", \"credentials\": \"arn:aws:iam::123456789012:role/apigAwsProxyRole\", \"httpMethod\": \"POST\", \"passthroughBehavior\": \"WHEN_NO_MATCH\", \"requestParameters\": { \"integration.request.header.Content-Type\": \"'application/x-amz-json-1.1'\" }, \"requestTemplates\": { \"application/json\": \"{\\n}\" }, \"type\": \"AWS\", \"uri\": \"arn:aws:apigateway:us-east-1:kinesis:action/ListStreams\", \"_embedded\": { \"integration:responses\": { \"_links\": { \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"integrationresponse:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\" }, \"integrationresponse:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\" } }, \"responseParameters\": { \"method.response.header.Content-Type\": \"'application/xml'\" }, \"responseTemplates\": { \"application/json\": \"$util.urlDecode(\\\"%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E\\\")\" }, \"statusCode\": \"200\" } } }, \"method:responses\": { \"_links\": { \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"methodresponse:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\" }, \"methodresponse:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\" } }, \"responseModels\": { \"application/json\": \"Empty\" }, \"responseParameters\": { \"method.response.header.Content-Type\": false }, \"statusCode\": \"200\" } } }</code></pre> <p>In the example above, the response template for the <code>200 OK</code> response maps the JSON output from the <code>ListStreams</code> action in the back end to an XML output. The mapping template is URL-encoded as <code>%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E</code> and the output is decoded using the <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#util-templat-reference\">$util.urlDecode()</a> helper function.</p> </div> <div class=\"seeAlso\"> <a>MethodResponse</a>, <a>Integration</a>, <a>IntegrationResponse</a>, <a>Resource</a>, <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings.html\">Set up an API's method</a> </div>"
    },
    "MethodResponse":{
      "type":"structure",
      "members":{
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>The method response's status code.</p>"
        },
        "responseParameters":{
          "shape":"MapOfStringToBoolean",
          "documentation":"<p>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's <a>IntegrationResponse</a>. The integration response data that can be mapped include an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)</p>"
        },
        "responseModels":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Specifies the <a>Model</a> resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a <a>Model</a> name as the value.</p>"
        }
      },
      "documentation":"<p>Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. </p> <div class=\"remarks\"> <p/> <h4>Example: A <b>MethodResponse</b> instance of an API</h4> <h5>Request</h5> <p>The example request retrieves a <b>MethodResponse</b> of the 200 status code.</p> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160603T222952Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns <code>200 OK</code> status and a payload as follows:</p> <pre><code>{ \"_links\": { \"curies\": { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html\", \"name\": \"methodresponse\", \"templated\": true }, \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\", \"title\": \"200\" }, \"methodresponse:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\" }, \"methodresponse:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\" } }, \"responseModels\": { \"application/json\": \"Empty\" }, \"responseParameters\": { \"method.response.header.Content-Type\": false }, \"statusCode\": \"200\" }</code></pre> <p/> </div> <div class=\"seeAlso\"> <a>Method</a>, <a>IntegrationResponse</a>, <a>Integration</a> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Creating an API</a> </div>"
    },
    "MethodSetting":{
      "type":"structure",
      "members":{
        "metricsEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether Amazon CloudWatch metrics are enabled for this method. The PATCH path for this setting is <code>/{method_setting_key}/metrics/enabled</code>, and the value is a Boolean.</p>"
        },
        "loggingLevel":{
          "shape":"String",
          "documentation":"<p>Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is <code>/{method_setting_key}/logging/loglevel</code>, and the available levels are <code>OFF</code>, <code>ERROR</code>, and <code>INFO</code>.</p>"
        },
        "dataTraceEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is <code>/{method_setting_key}/logging/dataTrace</code>, and the value is a Boolean.</p>"
        },
        "throttlingBurstLimit":{
          "shape":"Integer",
          "documentation":"<p>Specifies the throttling burst limit. The PATCH path for this setting is <code>/{method_setting_key}/throttling/burstLimit</code>, and the value is an integer.</p>"
        },
        "throttlingRateLimit":{
          "shape":"Double",
          "documentation":"<p>Specifies the throttling rate limit. The PATCH path for this setting is <code>/{method_setting_key}/throttling/rateLimit</code>, and the value is a double.</p>"
        },
        "cachingEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached. The PATCH path for this setting is <code>/{method_setting_key}/caching/enabled</code>, and the value is a Boolean.</p>"
        },
        "cacheTtlInSeconds":{
          "shape":"Integer",
          "documentation":"<p>Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached. The PATCH path for this setting is <code>/{method_setting_key}/caching/ttlInSeconds</code>, and the value is an integer.</p>"
        },
        "cacheDataEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the cached responses are encrypted. The PATCH path for this setting is <code>/{method_setting_key}/caching/dataEncrypted</code>, and the value is a Boolean.</p>"
        },
        "requireAuthorizationForCacheControl":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether authorization is required for a cache invalidation request. The PATCH path for this setting is <code>/{method_setting_key}/caching/requireAuthorizationForCacheControl</code>, and the value is a Boolean.</p>"
        },
        "unauthorizedCacheControlHeaderStrategy":{
          "shape":"UnauthorizedCacheControlHeaderStrategy",
          "documentation":"<p>Specifies how to handle unauthorized requests for cache invalidation. The PATCH path for this setting is <code>/{method_setting_key}/caching/unauthorizedCacheControlHeaderStrategy</code>, and the available values are <code>FAIL_WITH_403</code>, <code>SUCCEED_WITH_RESPONSE_HEADER</code>, <code>SUCCEED_WITHOUT_RESPONSE_HEADER</code>.</p>"
        }
      },
      "documentation":"<p>Specifies the method setting properties.</p>"
    },
    "MethodSnapshot":{
      "type":"structure",
      "members":{
        "authorizationType":{
          "shape":"String",
          "documentation":"<p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>"
        },
        "apiKeyRequired":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the method requires a valid <a>ApiKey</a>.</p>"
        }
      },
      "documentation":"<p>Represents a summary of a <a>Method</a> resource, given a particular date and time.</p>"
    },
    "Model":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The identifier for the model resource.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the model. Must be an alphanumeric string.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the model.</p>"
        },
        "schema":{
          "shape":"String",
          "documentation":"<p>The schema for the model. For <code>application/json</code> models, this should be <a href=\"https://tools.ietf.org/html/draft-zyp-json-schema-04\" target=\"_blank\">JSON schema draft 4</a> model. Do not include \"\\*/\" characters in the description of any properties because such \"\\*/\" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API's SDK generated by API Gateway to fail.</p>"
        },
        "contentType":{
          "shape":"String",
          "documentation":"<p>The content-type for the model.</p>"
        }
      },
      "documentation":"<p>Represents the data structure of a method's request or response payload.</p> <div class=\"remarks\"> <p>A request model defines the data structure of the client-supplied request payload. A response model defines the data structure of the response payload returned by the back end. Although not required, models are useful for mapping payloads between the front end and back end.</p> <p>A model is used for generating an API's SDK, validating the input request body, and creating a skeletal mapping template.</p> </div> <div class=\"seeAlso\"> <a>Method</a>, <a>MethodResponse</a>, <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html\">Models and Mappings</a> </div>"
    },
    "Models":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfModel",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection of <a>Model</a> resources.</p> <div class=\"seeAlso\"> <a>Method</a>, <a>MethodResponse</a>, <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html\">Models and Mappings</a> </div>"
    },
    "NotFoundException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The requested resource is not found. Make sure that the request URI is correct.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "NullableBoolean":{"type":"boolean"},
    "NullableInteger":{"type":"integer"},
    "Op":{
      "type":"string",
      "enum":[
        "add",
        "remove",
        "replace",
        "move",
        "copy",
        "test"
      ]
    },
    "PatchOperation":{
      "type":"structure",
      "members":{
        "op":{
          "shape":"Op",
          "documentation":"<p> An update operation to be performed with this PATCH request. The valid value can be <code>add</code>, <code>remove</code>, <code>replace</code> or <code>copy</code>. Not all valid operations are supported for a given resource. Support of the operations depends on specific operational contexts. Attempts to apply an unsupported operation on a resource will return an error message.</p>"
        },
        "path":{
          "shape":"String",
          "documentation":"<p>The <code>op</code> operation's target, as identified by a <a href=\"https://tools.ietf.org/html/draft-ietf-appsawg-json-pointer-08\">JSON Pointer</a> value that references a location within the targeted resource. For example, if the target resource has an updateable property of <code>{\"name\":\"value\"}</code>, the path for this property is <code>/name</code>. If the <code>name</code> property value is a JSON object (e.g., <code>{\"name\": {\"child/name\": \"child-value\"}}</code>), the path for the <code>child/name</code> property will be <code>/name/child~1name</code>. Any slash (\"/\") character appearing in path names must be escaped with \"~1\", as shown in the example above. Each <code>op</code> operation can have only one <code>path</code> associated with it.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The new target value of the update operation. It is applicable for the <code>add</code> or <code>replace</code> operation. When using AWS CLI to update a property of a JSON value, enclose the JSON object with a pair of single quotes in a Linux shell, e.g., '{\"a\": ...}'. In a Windows shell, see <a href=\"http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json\">Using JSON for Parameters</a>.</p>"
        },
        "from":{
          "shape":"String",
          "documentation":"<p>The <code>copy</code> update operation's source as identified by a <code>JSON-Pointer</code> value referencing the location within the targeted resource to copy the value from. For example, to promote a canary deployment, you copy the canary deployment ID to the affiliated deployment ID by calling a PATCH request on a <a>Stage</a> resource with <code>\"op\":\"copy\"</code>, <code>\"from\":\"/canarySettings/deploymentId\"</code> and <code>\"path\":\"/deploymentId\"</code>.</p>"
        }
      },
      "documentation":"A single patch operation to apply to the specified resource. Please refer to http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used."
    },
    "PathToMapOfMethodSnapshot":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"MapOfMethodSnapshot"}
    },
    "ProviderARN":{"type":"string"},
    "PutGatewayResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "responseType"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "responseType":{
          "shape":"GatewayResponseType",
          "documentation":"<p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>",
          "location":"uri",
          "locationName":"response_type"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"The HTTP status code of the <a>GatewayResponse</a>."
        },
        "responseParameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p><p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p>"
        },
        "responseTemplates":{
          "shape":"MapOfStringToString",
          "documentation":"<p><p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p>"
        }
      },
      "documentation":"<p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>"
    },
    "PutIntegrationRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "type"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a put integration request's resource ID.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a put integration request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "type":{
          "shape":"IntegrationType",
          "documentation":"<p>[Required] Specifies a put integration input's type.</p>"
        },
        "integrationHttpMethod":{
          "shape":"String",
          "documentation":"<p>Specifies a put integration HTTP method. When the integration type is HTTP or AWS, this field is required.</p>",
          "locationName":"httpMethod"
        },
        "uri":{
          "shape":"String",
          "documentation":"<p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p> <ul> <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier\">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p> </li> <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&amp;{p1}={v1}&amp;p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html\">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p> </li></ul>"
        },
        "connectionType":{
          "shape":"ConnectionType",
          "documentation":"<p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>"
        },
        "connectionId":{
          "shape":"String",
          "documentation":"<p>The (<a href=\"http://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id\"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.</p>"
        },
        "credentials":{
          "shape":"String",
          "documentation":"<p>Specifies whether credentials are required for a put integration.</p>"
        },
        "requestParameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>"
        },
        "requestTemplates":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>"
        },
        "passthroughBehavior":{
          "shape":"String",
          "documentation":"<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. </p> <ul> <li><p><code>WHEN_NO_MATCH</code> passes the request body for unmapped content types through to the integration back end without transformation.</p></li> <li><p><code>NEVER</code> rejects unmapped content types with an HTTP 415 'Unsupported Media Type' response.</p></li> <li><p><code>WHEN_NO_TEMPLATES</code> allows pass-through when the integration has NO content types mapped to templates. However if there is at least one content type defined, unmapped content types will be rejected with the same 415 response.</p></li> </ul>"
        },
        "cacheNamespace":{
          "shape":"String",
          "documentation":"<p>Specifies a put integration input's cache namespace.</p>"
        },
        "cacheKeyParameters":{
          "shape":"ListOfString",
          "documentation":"<p>Specifies a put integration input's cache key parameters.</p>"
        },
        "contentHandling":{
          "shape":"ContentHandlingStrategy",
          "documentation":"<p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a request payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a request payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehaviors</code> is configured to support payload pass-through.</p>"
        },
        "timeoutInMillis":{
          "shape":"NullableInteger",
          "documentation":"<p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>"
        }
      },
      "documentation":"<p>Sets up a method's integration.</p>"
    },
    "PutIntegrationResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "statusCode"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a put integration response request's resource identifier.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a put integration response request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>[Required] Specifies the status code that is used to map the integration response to an existing <a>MethodResponse</a>.</p>",
          "location":"uri",
          "locationName":"status_code"
        },
        "selectionPattern":{
          "shape":"String",
          "documentation":"<p>Specifies the selection pattern of a put integration response.</p>"
        },
        "responseParameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix.</p>"
        },
        "responseTemplates":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Specifies a put integration response's templates.</p>"
        },
        "contentHandling":{
          "shape":"ContentHandlingStrategy",
          "documentation":"<p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>"
        }
      },
      "documentation":"<p>Represents a put integration response request.</p>"
    },
    "PutMethodRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "authorizationType"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>Resource</a> identifier for the new <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies the method request's HTTP method type.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "authorizationType":{
          "shape":"String",
          "documentation":"<p>[Required] The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>"
        },
        "authorizerId":{
          "shape":"String",
          "documentation":"<p>Specifies the identifier of an <a>Authorizer</a> to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>"
        },
        "apiKeyRequired":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the method required a valid <a>ApiKey</a>.</p>"
        },
        "operationName":{
          "shape":"String",
          "documentation":"<p>A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in <a href=\"http://petstore-demo-endpoint.execute-api.com/petstore/pets\">PetStore</a> example.</p>"
        },
        "requestParameters":{
          "shape":"MapOfStringToBoolean",
          "documentation":"<p>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in <a>Integration</a> to be mapped to integration request parameters or body-mapping templates.</p>"
        },
        "requestModels":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Specifies the <a>Model</a> resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value.</p>"
        },
        "requestValidatorId":{
          "shape":"String",
          "documentation":"<p>The identifier of a <a>RequestValidator</a> for validating the method request.</p>"
        },
        "authorizationScopes":{
          "shape":"ListOfString",
          "documentation":"<p>A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>"
        }
      },
      "documentation":"<p>Request to add a method to an existing <a>Resource</a> resource.</p>"
    },
    "PutMethodResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "statusCode"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] The HTTP verb of the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>[Required] The method response's status code.</p>",
          "location":"uri",
          "locationName":"status_code"
        },
        "responseParameters":{
          "shape":"MapOfStringToBoolean",
          "documentation":"<p>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)</p>"
        },
        "responseModels":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Specifies the <a>Model</a> resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value.</p>"
        }
      },
      "documentation":"<p>Request to add a <a>MethodResponse</a> to an existing <a>Method</a> resource.</p>"
    },
    "PutMode":{
      "type":"string",
      "enum":[
        "merge",
        "overwrite"
      ]
    },
    "PutRestApiRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "body"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "mode":{
          "shape":"PutMode",
          "documentation":"<p>The <code>mode</code> query parameter to specify the update mode. Valid values are \"merge\" and \"overwrite\". By default, the update mode is \"merge\".</p>",
          "location":"querystring",
          "locationName":"mode"
        },
        "failOnWarnings":{
          "shape":"Boolean",
          "documentation":"<p>A query parameter to indicate whether to rollback the API update (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.</p>",
          "location":"querystring",
          "locationName":"failonwarnings"
        },
        "parameters":{
          "shape":"MapOfStringToString",
          "documentation":"<p>Custom header parameters as part of the request. For example, to exclude <a>DocumentationParts</a> from an imported API, set <code>ignore=documentation</code> as a <code>parameters</code> value, as in the AWS CLI command of <code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code>.</p>",
          "location":"querystring"
        },
        "body":{
          "shape":"Blob",
          "documentation":"<p>[Required] The PUT request body containing external API definitions. Currently, only Swagger definition JSON files are supported. The maximum size of the API definition file is 2MB.</p>"
        }
      },
      "documentation":"<p>A PUT request to update an existing API, with external API definitions specified as the request body.</p>",
      "payload":"body"
    },
    "QuotaPeriodType":{
      "type":"string",
      "enum":[
        "DAY",
        "WEEK",
        "MONTH"
      ]
    },
    "QuotaSettings":{
      "type":"structure",
      "members":{
        "limit":{
          "shape":"Integer",
          "documentation":"<p>The maximum number of requests that can be made in a given time period.</p>"
        },
        "offset":{
          "shape":"Integer",
          "documentation":"<p>The number of requests subtracted from the given limit in the initial time period.</p>"
        },
        "period":{
          "shape":"QuotaPeriodType",
          "documentation":"<p>The time period in which the limit applies. Valid values are \"DAY\", \"WEEK\" or \"MONTH\".</p>"
        }
      },
      "documentation":"<p>Quotas configured for a usage plan.</p>"
    },
    "RequestValidator":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The identifier of this <a>RequestValidator</a>.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of this <a>RequestValidator</a></p>"
        },
        "validateRequestBody":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean flag to indicate whether to validate a request body according to the configured <a>Model</a> schema.</p>"
        },
        "validateRequestParameters":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean flag to indicate whether to validate request parameters (<code>true</code>) or not (<code>false</code>).</p>"
        }
      },
      "documentation":"<p>A set of validation rules for incoming <a>Method</a> requests.</p> <div class=\"remarks\"> <p>In Swagger, a <a>RequestValidator</a> of an API is defined by the <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html\">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator\">x-amazon-apigateway-request-validator</a> property.</p> </div> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html\">Enable Basic Request Validation in API Gateway</a></div>"
    },
    "RequestValidators":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfRequestValidator",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p> <div class=\"remarks\"> <p>In Swagger, the <a>RequestValidators</a> of an API is defined by the <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html\">x-amazon-apigateway-request-validators</a> extension.</p> </div> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html\">Enable Basic Request Validation in API Gateway</a></div>"
    },
    "Resource":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The resource's identifier.</p>"
        },
        "parentId":{
          "shape":"String",
          "documentation":"<p>The parent resource's identifier.</p>"
        },
        "pathPart":{
          "shape":"String",
          "documentation":"<p>The last path segment for this resource.</p>"
        },
        "path":{
          "shape":"String",
          "documentation":"<p>The full path for this resource.</p>"
        },
        "resourceMethods":{
          "shape":"MapOfMethod",
          "documentation":"<p>Gets an API resource's method of a given HTTP verb.</p> <div class=\"remarks\"> <p>The resource methods are a map of methods indexed by methods' HTTP verbs enabled on the resource. This method map is included in the <code>200 OK</code> response of the <code>GET /restapis/{restapi_id}/resources/{resource_id}</code> or <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code> request.</p> <h4>Example: Get the GET method of an API resource</h4> <h5>Request</h5> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20170223T031827Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20170223/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <pre><code>{ \"_links\": { \"curies\": [ { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html\", \"name\": \"integration\", \"templated\": true }, { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html\", \"name\": \"integrationresponse\", \"templated\": true }, { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html\", \"name\": \"method\", \"templated\": true }, { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html\", \"name\": \"methodresponse\", \"templated\": true } ], \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET\", \"name\": \"GET\", \"title\": \"GET\" }, \"integration:put\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"method:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET\" }, \"method:integration\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"method:responses\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"method:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET\" }, \"methodresponse:put\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}\", \"templated\": true } }, \"apiKeyRequired\": false, \"authorizationType\": \"NONE\", \"httpMethod\": \"GET\", \"_embedded\": { \"method:integration\": { \"_links\": { \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"integration:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"integration:responses\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"integration:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration\" }, \"integrationresponse:put\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}\", \"templated\": true } }, \"cacheKeyParameters\": [], \"cacheNamespace\": \"3kzxbg5sa2\", \"credentials\": \"arn:aws:iam::123456789012:role/apigAwsProxyRole\", \"httpMethod\": \"POST\", \"passthroughBehavior\": \"WHEN_NO_MATCH\", \"requestParameters\": { \"integration.request.header.Content-Type\": \"'application/x-amz-json-1.1'\" }, \"requestTemplates\": { \"application/json\": \"{\\n}\" }, \"type\": \"AWS\", \"uri\": \"arn:aws:apigateway:us-east-1:kinesis:action/ListStreams\", \"_embedded\": { \"integration:responses\": { \"_links\": { \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"integrationresponse:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\" }, \"integrationresponse:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200\" } }, \"responseParameters\": { \"method.response.header.Content-Type\": \"'application/xml'\" }, \"responseTemplates\": { \"application/json\": \"$util.urlDecode(\\\"%3CkinesisStreams%3E#foreach($stream in $input.path('$.StreamNames'))%3Cstream%3E%3Cname%3E$stream%3C/name%3E%3C/stream%3E#end%3C/kinesisStreams%3E\\\")\\n\" }, \"statusCode\": \"200\" } } }, \"method:responses\": { \"_links\": { \"self\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\", \"name\": \"200\", \"title\": \"200\" }, \"methodresponse:delete\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\" }, \"methodresponse:update\": { \"href\": \"/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200\" } }, \"responseModels\": { \"application/json\": \"Empty\" }, \"responseParameters\": { \"method.response.header.Content-Type\": false }, \"statusCode\": \"200\" } } }</code></pre> <p>If the <code>OPTIONS</code> is enabled on the resource, you can follow the example here to get that method. Just replace the <code>GET</code> of the last path segment in the request URL with <code>OPTIONS</code>.</p> </div> <div class=\"seeAlso\"> </div>"
        }
      },
      "documentation":"<p>Represents an API resource.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Create an API</a> </div>"
    },
    "Resources":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfResource",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection of <a>Resource</a> resources.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Create an API</a> </div>"
    },
    "RestApi":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The API's identifier. This identifier is unique across all of your APIs in API Gateway.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The API's name.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The API's description.</p>"
        },
        "createdDate":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp when the API was created.</p>"
        },
        "version":{
          "shape":"String",
          "documentation":"<p>A version identifier for the API.</p>"
        },
        "warnings":{
          "shape":"ListOfString",
          "documentation":"<p>The warning messages reported when <code>failonwarnings</code> is turned on during API import.</p>"
        },
        "binaryMediaTypes":{
          "shape":"ListOfString",
          "documentation":"<p>The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.</p>"
        },
        "minimumCompressionSize":{
          "shape":"NullableInteger",
          "documentation":"<p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>"
        },
        "apiKeySource":{
          "shape":"ApiKeySourceType",
          "documentation":"<p>The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul> </p>"
        },
        "endpointConfiguration":{
          "shape":"EndpointConfiguration",
          "documentation":"<p>The endpoint configuration of this <a>RestApi</a> showing the endpoint types of the API. </p>"
        },
        "policy":{
          "shape":"String",
          "documentation":"A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration."
        }
      },
      "documentation":"<p>Represents a REST API.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Create an API</a> </div>"
    },
    "RestApis":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfRestApi",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Create an API</a> </div>"
    },
    "SdkConfigurationProperty":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of a an <a>SdkType</a> configuration property.</p>"
        },
        "friendlyName":{
          "shape":"String",
          "documentation":"<p>The user-friendly name of an <a>SdkType</a> configuration property.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of an <a>SdkType</a> configuration property.</p>"
        },
        "required":{
          "shape":"Boolean",
          "documentation":"<p>A boolean flag of an <a>SdkType</a> configuration property to indicate if the associated SDK configuration property is required (<code>true</code>) or not (<code>false</code>).</p>"
        },
        "defaultValue":{
          "shape":"String",
          "documentation":"<p>The default value of an <a>SdkType</a> configuration property.</p>"
        }
      },
      "documentation":"<p>A configuration property of an SDK type.</p>"
    },
    "SdkResponse":{
      "type":"structure",
      "members":{
        "contentType":{
          "shape":"String",
          "documentation":"<p>The content-type header value in the HTTP response.</p>",
          "location":"header",
          "locationName":"Content-Type"
        },
        "contentDisposition":{
          "shape":"String",
          "documentation":"<p>The content-disposition header value in the HTTP response.</p>",
          "location":"header",
          "locationName":"Content-Disposition"
        },
        "body":{
          "shape":"Blob",
          "documentation":"<p>The binary blob response to <a>GetSdk</a>, which contains the generated SDK.</p>"
        }
      },
      "documentation":"<p>The binary blob response to <a>GetSdk</a>, which contains the generated SDK.</p>",
      "payload":"body"
    },
    "SdkType":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The identifier of an <a>SdkType</a> instance.</p>"
        },
        "friendlyName":{
          "shape":"String",
          "documentation":"<p>The user-friendly name of an <a>SdkType</a> instance.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of an <a>SdkType</a>.</p>"
        },
        "configurationProperties":{
          "shape":"ListOfSdkConfigurationProperty",
          "documentation":"<p>A list of configuration properties of an <a>SdkType</a>.</p>"
        }
      },
      "documentation":"<p>A type of SDK that API Gateway can generate.</p>"
    },
    "SdkTypes":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfSdkType",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>The collection of <a>SdkType</a> instances.</p>"
    },
    "ServiceUnavailableException":{
      "type":"structure",
      "members":{
        "retryAfterSeconds":{
          "shape":"String",
          "location":"header",
          "locationName":"Retry-After"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>",
      "error":{"httpStatusCode":503},
      "exception":true,
      "fault":true
    },
    "Stage":{
      "type":"structure",
      "members":{
        "deploymentId":{
          "shape":"String",
          "documentation":"<p>The identifier of the <a>Deployment</a> that the stage points to.</p>"
        },
        "clientCertificateId":{
          "shape":"String",
          "documentation":"<p>The identifier of a client certificate for an API stage.</p>"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The stage's description.</p>"
        },
        "cacheClusterEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether a cache cluster is enabled for the stage.</p>"
        },
        "cacheClusterSize":{
          "shape":"CacheClusterSize",
          "documentation":"<p>The size of the cache cluster for the stage, if enabled.</p>"
        },
        "cacheClusterStatus":{
          "shape":"CacheClusterStatus",
          "documentation":"<p>The status of the cache cluster for the stage, if enabled.</p>"
        },
        "methodSettings":{
          "shape":"MapOfMethodSettings",
          "documentation":"<p>A map that defines the method settings for a <a>Stage</a> resource. Keys (designated as <code>/{method_setting_key</code> below) are method paths defined as <code>{resource_path}/{http_method}</code> for an individual method override, or <code>/\\*/\\*</code> for overriding all methods in the stage. </p>"
        },
        "variables":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A map that defines the stage variables for a <a>Stage</a> resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.</p>"
        },
        "documentationVersion":{
          "shape":"String",
          "documentation":"<p>The version of the associated API documentation.</p>"
        },
        "accessLogSettings":{
          "shape":"AccessLogSettings",
          "documentation":"<p>Settings for logging access in this stage.</p>"
        },
        "canarySettings":{
          "shape":"CanarySettings",
          "documentation":"<p>Settings for the canary deployment in this stage.</p>"
        },
        "tracingEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>"
        },
        "tags":{
          "shape":"MapOfStringToString",
          "documentation":"<p>The collection of tags. Each tag element is associated with a given resource.</p>"
        },
        "createdDate":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp when the stage was created.</p>"
        },
        "lastUpdatedDate":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp when the stage last updated.</p>"
        }
      },
      "documentation":"<p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html\">Deploy an API</a> </div>"
    },
    "StageKey":{
      "type":"structure",
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>The string identifier of the associated <a>RestApi</a>.</p>"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>The stage name associated with the stage key.</p>"
        }
      },
      "documentation":"<p>A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.</p>"
    },
    "Stages":{
      "type":"structure",
      "members":{
        "item":{
          "shape":"ListOfStage",
          "documentation":"<p>The current page of elements from this collection.</p>"
        }
      },
      "documentation":"<p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p> <div class=\"seeAlso\"><a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html\">Deploying API in Stages</a></div>"
    },
    "StatusCode":{
      "type":"string",
      "documentation":"<p>The status code.</p>",
      "pattern":"[1-5]\\d\\d"
    },
    "String":{"type":"string"},
    "TagResourceRequest":{
      "type":"structure",
      "required":[
        "resourceArn",
        "tags"
      ],
      "members":{
        "resourceArn":{
          "shape":"String",
          "documentation":"<p>[Required] The ARN of a resource that can be tagged. The resource ARN must be URL-encoded. At present, <a>Stage</a> is the only taggable resource.</p>",
          "location":"uri",
          "locationName":"resource_arn"
        },
        "tags":{
          "shape":"MapOfStringToString",
          "documentation":"<p>[Required] The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>"
        }
      },
      "documentation":"<p>Adds or updates a tag on a given resource.</p>"
    },
    "Tags":{
      "type":"structure",
      "members":{
        "tags":{
          "shape":"MapOfStringToString",
          "documentation":"<p>The collection of tags. Each tag element is associated with a given resource.</p>"
        }
      },
      "documentation":"<p>The collection of tags. Each tag element is associated with a given resource.</p>"
    },
    "Template":{
      "type":"structure",
      "members":{
        "value":{
          "shape":"String",
          "documentation":"<p>The Apache <a href=\"http://velocity.apache.org/engine/devel/vtl-reference-guide.html\" target=\"_blank\">Velocity Template Language (VTL)</a> template content used for the template resource.</p>"
        }
      },
      "documentation":"<p>Represents a mapping template used to transform a payload.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings\">Mapping Templates</a> </div>"
    },
    "TestInvokeAuthorizerRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "authorizerId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "authorizerId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a test invoke authorizer request's <a>Authorizer</a> ID.</p>",
          "location":"uri",
          "locationName":"authorizer_id"
        },
        "headers":{
          "shape":"MapOfHeaderValues",
          "documentation":"<p>[Required] A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.</p>"
        },
        "pathWithQueryString":{
          "shape":"String",
          "documentation":"<p>[Optional] The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.</p>"
        },
        "body":{
          "shape":"String",
          "documentation":"<p>[Optional] The simulated request body of an incoming invocation request.</p>"
        },
        "stageVariables":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.</p>"
        },
        "additionalContext":{
          "shape":"MapOfStringToString",
          "documentation":"<p>[Optional] A key-value map of additional context variables.</p>"
        }
      },
      "documentation":"<p>Make a request to simulate the execution of an <a>Authorizer</a>.</p>"
    },
    "TestInvokeAuthorizerResponse":{
      "type":"structure",
      "members":{
        "clientStatus":{
          "shape":"Integer",
          "documentation":"<p>The HTTP status code that the client would have received. Value is 0 if the authorizer succeeded.</p>"
        },
        "log":{
          "shape":"String",
          "documentation":"<p>The API Gateway execution log for the test authorizer request.</p>"
        },
        "latency":{
          "shape":"Long",
          "documentation":"<p>The execution latency of the test authorizer request.</p>"
        },
        "principalId":{
          "shape":"String",
          "documentation":"<p>The principal identity returned by the <a>Authorizer</a></p>"
        },
        "policy":{
          "shape":"String",
          "documentation":"<p>The JSON policy document returned by the <a>Authorizer</a></p>"
        },
        "authorization":{"shape":"MapOfStringToList"},
        "claims":{
          "shape":"MapOfStringToString",
          "documentation":"<p>The <a href=\"http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims\">open identity claims</a>, with any supported custom attributes, returned from the Cognito Your User Pool configured for the API.</p>"
        }
      },
      "documentation":"<p>Represents the response of the test invoke request for a custom <a>Authorizer</a></p>"
    },
    "TestInvokeMethodRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a test invoke method request's resource ID.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies a test invoke method request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "pathWithQueryString":{
          "shape":"String",
          "documentation":"<p>The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.</p>"
        },
        "body":{
          "shape":"String",
          "documentation":"<p>The simulated request body of an incoming invocation request.</p>"
        },
        "headers":{
          "shape":"MapOfHeaderValues",
          "documentation":"<p>A key-value map of headers to simulate an incoming invocation request.</p>"
        },
        "clientCertificateId":{
          "shape":"String",
          "documentation":"<p>A <a>ClientCertificate</a> identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.</p>"
        },
        "stageVariables":{
          "shape":"MapOfStringToString",
          "documentation":"<p>A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.</p>"
        }
      },
      "documentation":"<p>Make a request to simulate the execution of a <a>Method</a>.</p>"
    },
    "TestInvokeMethodResponse":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"Integer",
          "documentation":"<p>The HTTP status code.</p>"
        },
        "body":{
          "shape":"String",
          "documentation":"<p>The body of the HTTP response.</p>"
        },
        "headers":{
          "shape":"MapOfHeaderValues",
          "documentation":"<p>The headers of the HTTP response.</p>"
        },
        "log":{
          "shape":"String",
          "documentation":"<p>The API Gateway execution log for the test invoke request.</p>"
        },
        "latency":{
          "shape":"Long",
          "documentation":"<p>The execution latency of the test invoke request.</p>"
        }
      },
      "documentation":"<p>Represents the response of the test invoke request in the HTTP method.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console\">Test API using the API Gateway console</a> </div>"
    },
    "ThrottleSettings":{
      "type":"structure",
      "members":{
        "burstLimit":{
          "shape":"Integer",
          "documentation":"<p>The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.</p>"
        },
        "rateLimit":{
          "shape":"Double",
          "documentation":"<p>The API request steady-state rate limit.</p>"
        }
      },
      "documentation":"<p> The API request rate limits.</p>"
    },
    "Timestamp":{"type":"timestamp"},
    "TooManyRequestsException":{
      "type":"structure",
      "members":{
        "retryAfterSeconds":{
          "shape":"String",
          "location":"header",
          "locationName":"Retry-After"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>The request has reached its throttling limit. Retry after the specified time period.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "UnauthorizedCacheControlHeaderStrategy":{
      "type":"string",
      "enum":[
        "FAIL_WITH_403",
        "SUCCEED_WITH_RESPONSE_HEADER",
        "SUCCEED_WITHOUT_RESPONSE_HEADER"
      ]
    },
    "UnauthorizedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The request is denied because the caller has insufficient permissions.</p>",
      "error":{"httpStatusCode":401},
      "exception":true
    },
    "UntagResourceRequest":{
      "type":"structure",
      "required":[
        "resourceArn",
        "tagKeys"
      ],
      "members":{
        "resourceArn":{
          "shape":"String",
          "documentation":"<p>[Required] The ARN of a resource that can be tagged. The resource ARN must be URL-encoded. At present, <a>Stage</a> is the only taggable resource.</p>",
          "location":"uri",
          "locationName":"resource_arn"
        },
        "tagKeys":{
          "shape":"ListOfString",
          "documentation":"<p>[Required] The Tag keys to delete.</p>",
          "location":"querystring",
          "locationName":"tagKeys"
        }
      },
      "documentation":"<p>Removes a tag from a given resource.</p>"
    },
    "UpdateAccountRequest":{
      "type":"structure",
      "members":{
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Requests API Gateway to change information about the current <a>Account</a> resource.</p>"
    },
    "UpdateApiKeyRequest":{
      "type":"structure",
      "required":["apiKey"],
      "members":{
        "apiKey":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>ApiKey</a> resource to be updated.</p>",
          "location":"uri",
          "locationName":"api_Key"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>A request to change information about an <a>ApiKey</a> resource.</p>"
    },
    "UpdateAuthorizerRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "authorizerId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "authorizerId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>Authorizer</a> resource.</p>",
          "location":"uri",
          "locationName":"authorizer_id"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Request to update an existing <a>Authorizer</a> resource.</p>"
    },
    "UpdateBasePathMappingRequest":{
      "type":"structure",
      "required":[
        "domainName",
        "basePath"
      ],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The domain name of the <a>BasePathMapping</a> resource to change.</p>",
          "location":"uri",
          "locationName":"domain_name"
        },
        "basePath":{
          "shape":"String",
          "documentation":"<p>[Required] The base path of the <a>BasePathMapping</a> resource to change.</p>",
          "location":"uri",
          "locationName":"base_path"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>A request to change information about the <a>BasePathMapping</a> resource.</p>"
    },
    "UpdateClientCertificateRequest":{
      "type":"structure",
      "required":["clientCertificateId"],
      "members":{
        "clientCertificateId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>ClientCertificate</a> resource to be updated.</p>",
          "location":"uri",
          "locationName":"clientcertificate_id"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>A request to change information about an <a>ClientCertificate</a> resource.</p>"
    },
    "UpdateDeploymentRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "deploymentId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "deploymentId":{
          "shape":"String",
          "documentation":"<p>The replacement identifier for the <a>Deployment</a> resource to change information about.</p>",
          "location":"uri",
          "locationName":"deployment_id"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Requests API Gateway to change information about a <a>Deployment</a> resource.</p>"
    },
    "UpdateDocumentationPartRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "documentationPartId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "documentationPartId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the to-be-updated documentation part.</p>",
          "location":"uri",
          "locationName":"part_id"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Updates an existing documentation part of a given API.</p>"
    },
    "UpdateDocumentationVersionRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "documentationVersion"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>..</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "documentationVersion":{
          "shape":"String",
          "documentation":"<p>[Required] The version identifier of the to-be-updated documentation version.</p>",
          "location":"uri",
          "locationName":"doc_version"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Updates an existing documentation version of an API.</p>"
    },
    "UpdateDomainNameRequest":{
      "type":"structure",
      "required":["domainName"],
      "members":{
        "domainName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>DomainName</a> resource to be changed.</p>",
          "location":"uri",
          "locationName":"domain_name"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>A request to change information about the <a>DomainName</a> resource.</p>"
    },
    "UpdateGatewayResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "responseType"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "responseType":{
          "shape":"GatewayResponseType",
          "documentation":"<p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>",
          "location":"uri",
          "locationName":"response_type"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>"
    },
    "UpdateIntegrationRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Represents an update integration request's resource identifier.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Represents an update integration request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Represents an update integration request.</p>"
    },
    "UpdateIntegrationResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "statusCode"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies an update integration response request's resource identifier.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] Specifies an update integration response request's HTTP method.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>[Required] Specifies an update integration response request's status code.</p>",
          "location":"uri",
          "locationName":"status_code"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Represents an update integration response request.</p>"
    },
    "UpdateMethodRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] The HTTP verb of the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Request to update an existing <a>Method</a> resource.</p>"
    },
    "UpdateMethodResponseRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId",
        "httpMethod",
        "statusCode"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "httpMethod":{
          "shape":"String",
          "documentation":"<p>[Required] The HTTP verb of the <a>Method</a> resource.</p>",
          "location":"uri",
          "locationName":"http_method"
        },
        "statusCode":{
          "shape":"StatusCode",
          "documentation":"<p>[Required] The status code for the <a>MethodResponse</a> resource.</p>",
          "location":"uri",
          "locationName":"status_code"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>A request to update an existing <a>MethodResponse</a> resource.</p>"
    },
    "UpdateModelRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "modelName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "modelName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the model to update.</p>",
          "location":"uri",
          "locationName":"model_name"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Request to update an existing model in an existing <a>RestApi</a> resource.</p>"
    },
    "UpdateRequestValidatorRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "requestValidatorId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "requestValidatorId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of <a>RequestValidator</a> to be updated.</p>",
          "location":"uri",
          "locationName":"requestvalidator_id"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>"
    },
    "UpdateResourceRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "resourceId"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "resourceId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>Resource</a> resource.</p>",
          "location":"uri",
          "locationName":"resource_id"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Request to change information about a <a>Resource</a> resource.</p>"
    },
    "UpdateRestApiRequest":{
      "type":"structure",
      "required":["restApiId"],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Request to update an existing <a>RestApi</a> resource in your collection.</p>"
    },
    "UpdateStageRequest":{
      "type":"structure",
      "required":[
        "restApiId",
        "stageName"
      ],
      "members":{
        "restApiId":{
          "shape":"String",
          "documentation":"<p>[Required] The string identifier of the associated <a>RestApi</a>.</p>",
          "location":"uri",
          "locationName":"restapi_id"
        },
        "stageName":{
          "shape":"String",
          "documentation":"<p>[Required] The name of the <a>Stage</a> resource to change information about.</p>",
          "location":"uri",
          "locationName":"stage_name"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Requests API Gateway to change information about a <a>Stage</a> resource.</p>"
    },
    "UpdateUsagePlanRequest":{
      "type":"structure",
      "required":["usagePlanId"],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the to-be-updated usage plan.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>The PATCH request to update a usage plan of a given plan Id.</p>"
    },
    "UpdateUsageRequest":{
      "type":"structure",
      "required":[
        "usagePlanId",
        "keyId"
      ],
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>[Required] The Id of the usage plan associated with the usage data.</p>",
          "location":"uri",
          "locationName":"usageplanId"
        },
        "keyId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.</p>",
          "location":"uri",
          "locationName":"keyId"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>"
    },
    "UpdateVpcLinkRequest":{
      "type":"structure",
      "required":["vpcLinkId"],
      "members":{
        "vpcLinkId":{
          "shape":"String",
          "documentation":"<p>[Required] The identifier of the <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>",
          "location":"uri",
          "locationName":"vpclink_id"
        },
        "patchOperations":{
          "shape":"ListOfPatchOperation",
          "documentation":"<p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>"
        }
      },
      "documentation":"<p>Updates an existing <a>VpcLink</a> of a specified identifier.</p>"
    },
    "Usage":{
      "type":"structure",
      "members":{
        "usagePlanId":{
          "shape":"String",
          "documentation":"<p>The plan Id associated with this usage data.</p>"
        },
        "startDate":{
          "shape":"String",
          "documentation":"<p>The starting date of the usage data.</p>"
        },
        "endDate":{
          "shape":"String",
          "documentation":"<p>The ending date of the usage data.</p>"
        },
        "position":{"shape":"String"},
        "items":{
          "shape":"MapOfKeyUsages",
          "documentation":"<p>The usage data, as daily logs of used and remaining quotas, over the specified time interval indexed over the API keys in a usage plan. For example, <code>{..., \"values\" : { \"{api_key}\" : [ [0, 100], [10, 90], [100, 10]]}</code>, where <code>{api_key}</code> stands for an API key value and the daily log entry is of the format <code>[used quota, remaining quota]</code>.</p>",
          "locationName":"values"
        }
      },
      "documentation":"<p>Represents the usage data of a usage plan.</p> <div class=\"remarks\"/> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a>, <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage\">Manage Usage in a Usage Plan</a> </div>"
    },
    "UsagePlan":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The identifier of a <a>UsagePlan</a> resource.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of a usage plan.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of a usage plan.</p>"
        },
        "apiStages":{
          "shape":"ListOfApiStage",
          "documentation":"<p>The associated API stages of a usage plan.</p>"
        },
        "throttle":{
          "shape":"ThrottleSettings",
          "documentation":"<p>The request throttle limits of a usage plan.</p>"
        },
        "quota":{
          "shape":"QuotaSettings",
          "documentation":"<p>The maximum number of permitted requests per a given unit time interval.</p>"
        },
        "productCode":{
          "shape":"String",
          "documentation":"<p>The AWS Markeplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.</p>"
        }
      },
      "documentation":"<p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class=\"remarks\"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a> </div>"
    },
    "UsagePlanKey":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The Id of a usage plan key.</p>"
        },
        "type":{
          "shape":"String",
          "documentation":"<p>The type of a usage plan key. Currently, the valid key type is <code>API_KEY</code>.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The value of a usage plan key.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of a usage plan key.</p>"
        }
      },
      "documentation":"<p>Represents a usage plan key to identify a plan customer.</p> <div class=\"remarks\"> <p>To associate an API stage with a selected API key in a usage plan, you must create a UsagePlanKey resource to represent the selected <a>ApiKey</a>.</p> </div>\" <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a> </div>"
    },
    "UsagePlanKeys":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfUsagePlanKey",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a> </div>"
    },
    "UsagePlans":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfUsagePlan",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>Represents a collection of usage plans for an AWS account.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a> </div>"
    },
    "VpcLink":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The identifier of the <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name used to label and identify the VPC link.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the VPC link.</p>"
        },
        "targetArns":{
          "shape":"ListOfString",
          "documentation":"<p>The ARNs of network load balancers of the VPC targeted by the VPC link. The network load balancers must be owned by the same AWS account of the API owner.</p>"
        },
        "status":{
          "shape":"VpcLinkStatus",
          "documentation":"<p>The status of the VPC link. The valid values are <code>AVAILABLE</code>, <code>PENDING</code>, <code>DELETING</code>, or <code>FAILED</code>. Deploying an API will wait if the status is <code>PENDING</code> and will fail if the status is <code>DELETING</code>. </p>"
        },
        "statusMessage":{
          "shape":"String",
          "documentation":"<p>A description about the VPC link status.</p>"
        }
      },
      "documentation":"<p>A API Gateway VPC link for a <a>RestApi</a> to access resources in an Amazon Virtual Private Cloud (VPC).</p> <div class=\"remarks\"> <p><p>To enable access to a resource in an Amazon Virtual Private Cloud through Amazon API Gateway, you, as an API developer, create a <a>VpcLink</a> resource targeted for one or more network load balancers of the VPC and then integrate an API method with a private integration that uses the <a>VpcLink</a>. The private integration has an integration type of <code>HTTP</code> or <code>HTTP_PROXY</code> and has a connection type of <code>VPC_LINK</code>. The integration uses the <code>connectionId</code> property to identify the <a>VpcLink</a> used.</p> </p> </div>"
    },
    "VpcLinkStatus":{
      "type":"string",
      "enum":[
        "AVAILABLE",
        "PENDING",
        "DELETING",
        "FAILED"
      ]
    },
    "VpcLinks":{
      "type":"structure",
      "members":{
        "position":{"shape":"String"},
        "items":{
          "shape":"ListOfVpcLink",
          "documentation":"<p>The current page of elements from this collection.</p>",
          "locationName":"item"
        }
      },
      "documentation":"<p>The collection of VPC links under the caller's account in a region.</p> <div class=\"seeAlso\"> <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html\">Getting Started with Private Integrations</a>, <a href=\"http://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html\">Set up Private Integrations</a> </div>"
    }
  },
  "documentation":"<fullname>Amazon API Gateway</fullname> <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>"
}
