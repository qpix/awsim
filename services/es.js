awsim['es'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-01-01",
    "endpointPrefix":"es",
    "protocol":"rest-json",
    "serviceFullName":"Amazon Elasticsearch Service",
    "serviceId":"Elasticsearch Service",
    "signatureVersion":"v4",
    "uid":"es-2015-01-01"
  },
  "operations":{
    "AddTags":{
      "name":"AddTags",
      "http":{
        "method":"POST",
        "requestUri":"/2015-01-01/tags"
      },
      "input":{"shape":"AddTagsRequest"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"LimitExceededException"},
        {"shape":"ValidationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging\" target=\"_blank\"> Tagging Amazon Elasticsearch Service Domains for more information.</a></p>"
    },
    "CreateElasticsearchDomain":{
      "name":"CreateElasticsearchDomain",
      "http":{
        "method":"POST",
        "requestUri":"/2015-01-01/es/domain"
      },
      "input":{"shape":"CreateElasticsearchDomainRequest"},
      "output":{"shape":"CreateElasticsearchDomainResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"DisabledOperationException"},
        {"shape":"InternalException"},
        {"shape":"InvalidTypeException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Creates a new Elasticsearch domain. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains\" target=\"_blank\">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>"
    },
    "DeleteElasticsearchDomain":{
      "name":"DeleteElasticsearchDomain",
      "http":{
        "method":"DELETE",
        "requestUri":"/2015-01-01/es/domain/{DomainName}"
      },
      "input":{"shape":"DeleteElasticsearchDomainRequest"},
      "output":{"shape":"DeleteElasticsearchDomainResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>"
    },
    "DeleteElasticsearchServiceRole":{
      "name":"DeleteElasticsearchServiceRole",
      "http":{
        "method":"DELETE",
        "requestUri":"/2015-01-01/es/role"
      },
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr\" target=\"_blank\">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.</p>"
    },
    "DescribeElasticsearchDomain":{
      "name":"DescribeElasticsearchDomain",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/domain/{DomainName}"
      },
      "input":{"shape":"DescribeElasticsearchDomainRequest"},
      "output":{"shape":"DescribeElasticsearchDomainResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</p>"
    },
    "DescribeElasticsearchDomainConfig":{
      "name":"DescribeElasticsearchDomainConfig",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/domain/{DomainName}/config"
      },
      "input":{"shape":"DescribeElasticsearchDomainConfigRequest"},
      "output":{"shape":"DescribeElasticsearchDomainConfigResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>"
    },
    "DescribeElasticsearchDomains":{
      "name":"DescribeElasticsearchDomains",
      "http":{
        "method":"POST",
        "requestUri":"/2015-01-01/es/domain-info"
      },
      "input":{"shape":"DescribeElasticsearchDomainsRequest"},
      "output":{"shape":"DescribeElasticsearchDomainsResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.</p>"
    },
    "DescribeElasticsearchInstanceTypeLimits":{
      "name":"DescribeElasticsearchInstanceTypeLimits",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}"
      },
      "input":{"shape":"DescribeElasticsearchInstanceTypeLimitsRequest"},
      "output":{"shape":"DescribeElasticsearchInstanceTypeLimitsResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"InvalidTypeException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying. </p>"
    },
    "DescribeReservedElasticsearchInstanceOfferings":{
      "name":"DescribeReservedElasticsearchInstanceOfferings",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/reservedInstanceOfferings"
      },
      "input":{"shape":"DescribeReservedElasticsearchInstanceOfferingsRequest"},
      "output":{"shape":"DescribeReservedElasticsearchInstanceOfferingsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"},
        {"shape":"DisabledOperationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Lists available reserved Elasticsearch instance offerings.</p>"
    },
    "DescribeReservedElasticsearchInstances":{
      "name":"DescribeReservedElasticsearchInstances",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/reservedInstances"
      },
      "input":{"shape":"DescribeReservedElasticsearchInstancesRequest"},
      "output":{"shape":"DescribeReservedElasticsearchInstancesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalException"},
        {"shape":"ValidationException"},
        {"shape":"DisabledOperationException"}
      ],
      "documentation":"<p>Returns information about reserved Elasticsearch instances for this account.</p>"
    },
    "GetCompatibleElasticsearchVersions":{
      "name":"GetCompatibleElasticsearchVersions",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/compatibleVersions"
      },
      "input":{"shape":"GetCompatibleElasticsearchVersionsRequest"},
      "output":{"shape":"GetCompatibleElasticsearchVersionsResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"DisabledOperationException"},
        {"shape":"ValidationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p> Returns a list of upgrade compatible Elastisearch versions. You can optionally pass a <code> <a>DomainName</a> </code> to get all upgrade compatible Elasticsearch versions for that specific domain. </p>"
    },
    "GetUpgradeHistory":{
      "name":"GetUpgradeHistory",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/upgradeDomain/{DomainName}/history"
      },
      "input":{"shape":"GetUpgradeHistoryRequest"},
      "output":{"shape":"GetUpgradeHistoryResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"DisabledOperationException"},
        {"shape":"ValidationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Retrieves the complete history of the last 10 upgrades that were performed on the domain.</p>"
    },
    "GetUpgradeStatus":{
      "name":"GetUpgradeStatus",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/upgradeDomain/{DomainName}/status"
      },
      "input":{"shape":"GetUpgradeStatusRequest"},
      "output":{"shape":"GetUpgradeStatusResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"DisabledOperationException"},
        {"shape":"ValidationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>"
    },
    "ListDomainNames":{
      "name":"ListDomainNames",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/domain"
      },
      "output":{"shape":"ListDomainNamesResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Returns the name of all Elasticsearch domains owned by the current user's account. </p>"
    },
    "ListElasticsearchInstanceTypes":{
      "name":"ListElasticsearchInstanceTypes",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/instanceTypes/{ElasticsearchVersion}"
      },
      "input":{"shape":"ListElasticsearchInstanceTypesRequest"},
      "output":{"shape":"ListElasticsearchInstanceTypesResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>"
    },
    "ListElasticsearchVersions":{
      "name":"ListElasticsearchVersions",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/es/versions"
      },
      "input":{"shape":"ListElasticsearchVersionsRequest"},
      "output":{"shape":"ListElasticsearchVersionsResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>List all supported Elasticsearch versions</p>"
    },
    "ListTags":{
      "name":"ListTags",
      "http":{
        "method":"GET",
        "requestUri":"/2015-01-01/tags/"
      },
      "input":{"shape":"ListTagsRequest"},
      "output":{"shape":"ListTagsResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Returns all tags for the given Elasticsearch domain.</p>"
    },
    "PurchaseReservedElasticsearchInstanceOffering":{
      "name":"PurchaseReservedElasticsearchInstanceOffering",
      "http":{
        "method":"POST",
        "requestUri":"/2015-01-01/es/purchaseReservedInstanceOffering"
      },
      "input":{"shape":"PurchaseReservedElasticsearchInstanceOfferingRequest"},
      "output":{"shape":"PurchaseReservedElasticsearchInstanceOfferingResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"LimitExceededException"},
        {"shape":"DisabledOperationException"},
        {"shape":"ValidationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Allows you to purchase reserved Elasticsearch instances.</p>"
    },
    "RemoveTags":{
      "name":"RemoveTags",
      "http":{
        "method":"POST",
        "requestUri":"/2015-01-01/tags-removal"
      },
      "input":{"shape":"RemoveTagsRequest"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"ValidationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Removes the specified set of tags from the specified Elasticsearch domain.</p>"
    },
    "UpdateElasticsearchDomainConfig":{
      "name":"UpdateElasticsearchDomainConfig",
      "http":{
        "method":"POST",
        "requestUri":"/2015-01-01/es/domain/{DomainName}/config"
      },
      "input":{"shape":"UpdateElasticsearchDomainConfigRequest"},
      "output":{"shape":"UpdateElasticsearchDomainConfigResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"InternalException"},
        {"shape":"InvalidTypeException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. </p>"
    },
    "UpgradeElasticsearchDomain":{
      "name":"UpgradeElasticsearchDomain",
      "http":{
        "method":"POST",
        "requestUri":"/2015-01-01/es/upgradeDomain"
      },
      "input":{"shape":"UpgradeElasticsearchDomainRequest"},
      "output":{"shape":"UpgradeElasticsearchDomainResponse"},
      "errors":[
        {"shape":"BaseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"DisabledOperationException"},
        {"shape":"ValidationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.</p>"
    }
  },
  "shapes":{
    "ARN":{
      "type":"string",
      "documentation":"<p>The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html\" target=\"_blank\">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>"
    },
    "AccessPoliciesStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"PolicyDocument",
          "documentation":"<p>The access policy configured for the Elasticsearch domain. Access policies may be resource-based, IP-based, or IAM-based. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies\" target=\"_blank\"> Configuring Access Policies</a>for more information.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p>The status of the access policy for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>"
        }
      },
      "documentation":"<p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>"
    },
    "AddTagsRequest":{
      "type":"structure",
      "required":[
        "ARN",
        "TagList"
      ],
      "members":{
        "ARN":{
          "shape":"ARN",
          "documentation":"<p> Specify the <code>ARN</code> for which you want to add the tags.</p>"
        },
        "TagList":{
          "shape":"TagList",
          "documentation":"<p> List of <code>Tag</code> that need to be added for the Elasticsearch domain. </p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.</p>"
    },
    "AdditionalLimit":{
      "type":"structure",
      "members":{
        "LimitName":{
          "shape":"LimitName",
          "documentation":"<p> Name of Additional Limit is specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> etc. <br/> Attributes and their details: <br/> <ul> <li>MaximumNumberOfDataNodesSupported</li> This attribute will be present in Master node only to specify how much data nodes upto which given <code> <a>ESPartitionInstanceType</a> </code> can support as master node. <li>MaximumNumberOfDataNodesWithoutMasterNode</li> This attribute will be present in Data node only to specify how much data nodes of given <code> <a>ESPartitionInstanceType</a> </code> upto which you don't need any master nodes to govern them. </ul> </p>"
        },
        "LimitValues":{
          "shape":"LimitValueList",
          "documentation":"<p> Value for given <code> <a>AdditionalLimit$LimitName</a> </code> . </p>"
        }
      },
      "documentation":"<p> List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . </p>"
    },
    "AdditionalLimitList":{
      "type":"list",
      "member":{"shape":"AdditionalLimit"}
    },
    "AdvancedOptions":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"},
      "documentation":"<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options\" target=\"_blank\">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options\">Configuring Advanced Options</a>.</p>"
    },
    "AdvancedOptionsStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"AdvancedOptions",
          "documentation":"<p> Specifies the status of advanced options for the specified Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p> Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options\" target=\"_blank\">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options\">Configuring Advanced Options</a>.</p>"
    },
    "BaseException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ErrorMessage",
          "documentation":"<p>A description of the error.</p>"
        }
      },
      "documentation":"<p>An error occurred while processing the request.</p>",
      "exception":true
    },
    "Boolean":{"type":"boolean"},
    "CloudWatchLogsLogGroupArn":{
      "type":"string",
      "documentation":"<p>ARN of the Cloudwatch log group to which log needs to be published.</p>"
    },
    "CognitoOptions":{
      "type":"structure",
      "members":{
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies the option to enable Cognito for Kibana authentication.</p>"
        },
        "UserPoolId":{
          "shape":"UserPoolId",
          "documentation":"<p>Specifies the Cognito user pool ID for Kibana authentication.</p>"
        },
        "IdentityPoolId":{
          "shape":"IdentityPoolId",
          "documentation":"<p>Specifies the Cognito identity pool ID for Kibana authentication.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.</p>"
        }
      },
      "documentation":"<p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html\" target=\"_blank\">Amazon Cognito Authentication for Kibana</a>.</p>"
    },
    "CognitoOptionsStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"CognitoOptions",
          "documentation":"<p>Specifies the Cognito options for the specified Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p>Specifies the status of the Cognito options for the specified Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p>Status of the Cognito options for the specified Elasticsearch domain.</p>"
    },
    "CompatibleElasticsearchVersionsList":{
      "type":"list",
      "member":{"shape":"CompatibleVersionsMap"}
    },
    "CompatibleVersionsMap":{
      "type":"structure",
      "members":{
        "SourceVersion":{
          "shape":"ElasticsearchVersionString",
          "documentation":"<p>The current version of Elasticsearch on which a domain is.</p>"
        },
        "TargetVersions":{"shape":"ElasticsearchVersionList"}
      },
      "documentation":"<p> A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded. </p>"
    },
    "CreateElasticsearchDomainRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>"
        },
        "ElasticsearchVersion":{
          "shape":"ElasticsearchVersionString",
          "documentation":"<p>String of format X.Y to specify version for the Elasticsearch domain eg. \"1.5\" or \"2.3\". For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains\" target=\"_blank\">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>"
        },
        "ElasticsearchClusterConfig":{
          "shape":"ElasticsearchClusterConfig",
          "documentation":"<p>Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster. </p>"
        },
        "EBSOptions":{
          "shape":"EBSOptions",
          "documentation":"<p>Options to enable, disable and specify the type and size of EBS storage volumes. </p>"
        },
        "AccessPolicies":{
          "shape":"PolicyDocument",
          "documentation":"<p> IAM access policy as a JSON-formatted string.</p>"
        },
        "SnapshotOptions":{
          "shape":"SnapshotOptions",
          "documentation":"<p>Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours. </p>"
        },
        "VPCOptions":{
          "shape":"VPCOptions",
          "documentation":"<p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc\" target=\"_blank\">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>"
        },
        "CognitoOptions":{
          "shape":"CognitoOptions",
          "documentation":"<p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html\" target=\"_blank\">Amazon Cognito Authentication for Kibana</a>.</p>"
        },
        "EncryptionAtRestOptions":{
          "shape":"EncryptionAtRestOptions",
          "documentation":"<p>Specifies the Encryption At Rest Options.</p>"
        },
        "NodeToNodeEncryptionOptions":{
          "shape":"NodeToNodeEncryptionOptions",
          "documentation":"<p>Specifies the NodeToNodeEncryptionOptions.</p>"
        },
        "AdvancedOptions":{
          "shape":"AdvancedOptions",
          "documentation":"<p> Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options\" target=\"_blank\">Configuration Advanced Options</a> for more information.</p>"
        },
        "LogPublishingOptions":{
          "shape":"LogPublishingOptions",
          "documentation":"<p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>"
        }
      }
    },
    "CreateElasticsearchDomainResponse":{
      "type":"structure",
      "members":{
        "DomainStatus":{
          "shape":"ElasticsearchDomainStatus",
          "documentation":"<p>The status of the newly created Elasticsearch domain. </p>"
        }
      },
      "documentation":"<p>The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.</p>"
    },
    "DeleteElasticsearchDomainRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the Elasticsearch domain that you want to permanently delete.</p>",
          "location":"uri",
          "locationName":"DomainName"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.</p>"
    },
    "DeleteElasticsearchDomainResponse":{
      "type":"structure",
      "members":{
        "DomainStatus":{
          "shape":"ElasticsearchDomainStatus",
          "documentation":"<p>The status of the Elasticsearch domain being deleted.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.</p>"
    },
    "DescribeElasticsearchDomainConfigRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The Elasticsearch domain that you want to get information about.</p>",
          "location":"uri",
          "locationName":"DomainName"
        }
      },
      "documentation":"<p> Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.</p>"
    },
    "DescribeElasticsearchDomainConfigResponse":{
      "type":"structure",
      "required":["DomainConfig"],
      "members":{
        "DomainConfig":{
          "shape":"ElasticsearchDomainConfig",
          "documentation":"<p>The configuration information of the domain requested in the <code>DescribeElasticsearchDomainConfig</code> request.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.</p>"
    },
    "DescribeElasticsearchDomainRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the Elasticsearch domain for which you want information.</p>",
          "location":"uri",
          "locationName":"DomainName"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.</p>"
    },
    "DescribeElasticsearchDomainResponse":{
      "type":"structure",
      "required":["DomainStatus"],
      "members":{
        "DomainStatus":{
          "shape":"ElasticsearchDomainStatus",
          "documentation":"<p>The current status of the Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.</p>"
    },
    "DescribeElasticsearchDomainsRequest":{
      "type":"structure",
      "required":["DomainNames"],
      "members":{
        "DomainNames":{
          "shape":"DomainNameList",
          "documentation":"<p>The Elasticsearch domains for which you want information.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.</p>"
    },
    "DescribeElasticsearchDomainsResponse":{
      "type":"structure",
      "required":["DomainStatusList"],
      "members":{
        "DomainStatusList":{
          "shape":"ElasticsearchDomainStatusList",
          "documentation":"<p>The status of the domains requested in the <code>DescribeElasticsearchDomains</code> request.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.</p>"
    },
    "DescribeElasticsearchInstanceTypeLimitsRequest":{
      "type":"structure",
      "required":[
        "InstanceType",
        "ElasticsearchVersion"
      ],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p> DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch <code> <a>Limits</a> </code> for existing domain. </p>",
          "location":"querystring",
          "locationName":"domainName"
        },
        "InstanceType":{
          "shape":"ESPartitionInstanceType",
          "documentation":"<p> The instance type for an Elasticsearch cluster for which Elasticsearch <code> <a>Limits</a> </code> are needed. </p>",
          "location":"uri",
          "locationName":"InstanceType"
        },
        "ElasticsearchVersion":{
          "shape":"ElasticsearchVersionString",
          "documentation":"<p> Version of Elasticsearch for which <code> <a>Limits</a> </code> are needed. </p>",
          "location":"uri",
          "locationName":"ElasticsearchVersion"
        }
      },
      "documentation":"<p> Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. </p>"
    },
    "DescribeElasticsearchInstanceTypeLimitsResponse":{
      "type":"structure",
      "members":{
        "LimitsByRole":{"shape":"LimitsByRole"}
      },
      "documentation":"<p> Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. </p>"
    },
    "DescribeReservedElasticsearchInstanceOfferingsRequest":{
      "type":"structure",
      "members":{
        "ReservedElasticsearchInstanceOfferingId":{
          "shape":"GUID",
          "documentation":"<p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>",
          "location":"querystring",
          "locationName":"offeringId"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        }
      },
      "documentation":"<p>Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code></p>"
    },
    "DescribeReservedElasticsearchInstanceOfferingsResponse":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Provides an identifier to allow retrieval of paginated results.</p>"
        },
        "ReservedElasticsearchInstanceOfferings":{
          "shape":"ReservedElasticsearchInstanceOfferingList",
          "documentation":"<p>List of reserved Elasticsearch instance offerings</p>"
        }
      },
      "documentation":"<p>Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code></p>"
    },
    "DescribeReservedElasticsearchInstancesRequest":{
      "type":"structure",
      "members":{
        "ReservedElasticsearchInstanceId":{
          "shape":"GUID",
          "documentation":"<p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.</p>",
          "location":"querystring",
          "locationName":"reservationId"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        }
      },
      "documentation":"<p>Container for parameters to <code>DescribeReservedElasticsearchInstances</code></p>"
    },
    "DescribeReservedElasticsearchInstancesResponse":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Provides an identifier to allow retrieval of paginated results.</p>"
        },
        "ReservedElasticsearchInstances":{
          "shape":"ReservedElasticsearchInstanceList",
          "documentation":"<p>List of reserved Elasticsearch instances.</p>"
        }
      },
      "documentation":"<p>Container for results from <code>DescribeReservedElasticsearchInstances</code></p>"
    },
    "DisabledOperationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "DomainId":{
      "type":"string",
      "documentation":"<p>Unique identifier for an Elasticsearch domain.</p>",
      "max":64,
      "min":1
    },
    "DomainInfo":{
      "type":"structure",
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p> Specifies the <code>DomainName</code>.</p>"
        }
      }
    },
    "DomainInfoList":{
      "type":"list",
      "member":{"shape":"DomainInfo"},
      "documentation":"<p> Contains the list of Elasticsearch domain information.</p>"
    },
    "DomainName":{
      "type":"string",
      "documentation":"<p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>",
      "max":28,
      "min":3,
      "pattern":"[a-z][a-z0-9\\-]+"
    },
    "DomainNameList":{
      "type":"list",
      "member":{"shape":"DomainName"},
      "documentation":"<p>A list of Elasticsearch domain names.</p>"
    },
    "Double":{"type":"double"},
    "EBSOptions":{
      "type":"structure",
      "members":{
        "EBSEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether EBS-based storage is enabled.</p>"
        },
        "VolumeType":{
          "shape":"VolumeType",
          "documentation":"<p> Specifies the volume type for EBS-based storage.</p>"
        },
        "VolumeSize":{
          "shape":"IntegerClass",
          "documentation":"<p> Integer to specify the size of an EBS volume.</p>"
        },
        "Iops":{
          "shape":"IntegerClass",
          "documentation":"<p>Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).</p>"
        }
      },
      "documentation":"<p>Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs\" target=\"_blank\"> Configuring EBS-based Storage</a>.</p>"
    },
    "EBSOptionsStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"EBSOptions",
          "documentation":"<p> Specifies the EBS options for the specified Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p> Specifies the status of the EBS options for the specified Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p> Status of the EBS options for the specified Elasticsearch domain.</p>"
    },
    "ESPartitionInstanceType":{
      "type":"string",
      "enum":[
        "m3.medium.elasticsearch",
        "m3.large.elasticsearch",
        "m3.xlarge.elasticsearch",
        "m3.2xlarge.elasticsearch",
        "m4.large.elasticsearch",
        "m4.xlarge.elasticsearch",
        "m4.2xlarge.elasticsearch",
        "m4.4xlarge.elasticsearch",
        "m4.10xlarge.elasticsearch",
        "t2.micro.elasticsearch",
        "t2.small.elasticsearch",
        "t2.medium.elasticsearch",
        "r3.large.elasticsearch",
        "r3.xlarge.elasticsearch",
        "r3.2xlarge.elasticsearch",
        "r3.4xlarge.elasticsearch",
        "r3.8xlarge.elasticsearch",
        "i2.xlarge.elasticsearch",
        "i2.2xlarge.elasticsearch",
        "d2.xlarge.elasticsearch",
        "d2.2xlarge.elasticsearch",
        "d2.4xlarge.elasticsearch",
        "d2.8xlarge.elasticsearch",
        "c4.large.elasticsearch",
        "c4.xlarge.elasticsearch",
        "c4.2xlarge.elasticsearch",
        "c4.4xlarge.elasticsearch",
        "c4.8xlarge.elasticsearch",
        "r4.large.elasticsearch",
        "r4.xlarge.elasticsearch",
        "r4.2xlarge.elasticsearch",
        "r4.4xlarge.elasticsearch",
        "r4.8xlarge.elasticsearch",
        "r4.16xlarge.elasticsearch",
        "i3.large.elasticsearch",
        "i3.xlarge.elasticsearch",
        "i3.2xlarge.elasticsearch",
        "i3.4xlarge.elasticsearch",
        "i3.8xlarge.elasticsearch",
        "i3.16xlarge.elasticsearch"
      ]
    },
    "ElasticsearchClusterConfig":{
      "type":"structure",
      "members":{
        "InstanceType":{
          "shape":"ESPartitionInstanceType",
          "documentation":"<p>The instance type for an Elasticsearch cluster.</p>"
        },
        "InstanceCount":{
          "shape":"IntegerClass",
          "documentation":"<p>The number of instances in the specified domain cluster.</p>"
        },
        "DedicatedMasterEnabled":{
          "shape":"Boolean",
          "documentation":"<p>A boolean value to indicate whether a dedicated master node is enabled. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes\" target=\"_blank\">About Dedicated Master Nodes</a> for more information.</p>"
        },
        "ZoneAwarenessEnabled":{
          "shape":"Boolean",
          "documentation":"<p>A boolean value to indicate whether zone awareness is enabled. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness\" target=\"_blank\">About Zone Awareness</a> for more information.</p>"
        },
        "DedicatedMasterType":{
          "shape":"ESPartitionInstanceType",
          "documentation":"<p>The instance type for a dedicated master node.</p>"
        },
        "DedicatedMasterCount":{
          "shape":"IntegerClass",
          "documentation":"<p>Total number of dedicated master nodes, active and on standby, for the cluster.</p>"
        }
      },
      "documentation":"<p>Specifies the configuration for the domain cluster, such as the type and number of instances.</p>"
    },
    "ElasticsearchClusterConfigStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"ElasticsearchClusterConfig",
          "documentation":"<p> Specifies the cluster configuration for the specified Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p> Specifies the status of the configuration for the specified Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p> Specifies the configuration status for the specified Elasticsearch domain.</p>"
    },
    "ElasticsearchDomainConfig":{
      "type":"structure",
      "members":{
        "ElasticsearchVersion":{
          "shape":"ElasticsearchVersionStatus",
          "documentation":"<p>String of format X.Y to specify version for the Elasticsearch domain.</p>"
        },
        "ElasticsearchClusterConfig":{
          "shape":"ElasticsearchClusterConfigStatus",
          "documentation":"<p>Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.</p>"
        },
        "EBSOptions":{
          "shape":"EBSOptionsStatus",
          "documentation":"<p>Specifies the <code>EBSOptions</code> for the Elasticsearch domain.</p>"
        },
        "AccessPolicies":{
          "shape":"AccessPoliciesStatus",
          "documentation":"<p>IAM access policy as a JSON-formatted string.</p>"
        },
        "SnapshotOptions":{
          "shape":"SnapshotOptionsStatus",
          "documentation":"<p>Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.</p>"
        },
        "VPCOptions":{
          "shape":"VPCDerivedInfoStatus",
          "documentation":"<p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html\" target=\"_blank\">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>"
        },
        "CognitoOptions":{
          "shape":"CognitoOptionsStatus",
          "documentation":"<p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html\" target=\"_blank\">Amazon Cognito Authentication for Kibana</a>.</p>"
        },
        "EncryptionAtRestOptions":{
          "shape":"EncryptionAtRestOptionsStatus",
          "documentation":"<p>Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.</p>"
        },
        "NodeToNodeEncryptionOptions":{
          "shape":"NodeToNodeEncryptionOptionsStatus",
          "documentation":"<p>Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.</p>"
        },
        "AdvancedOptions":{
          "shape":"AdvancedOptionsStatus",
          "documentation":"<p>Specifies the <code>AdvancedOptions</code> for the domain. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options\" target=\"_blank\">Configuring Advanced Options</a> for more information.</p>"
        },
        "LogPublishingOptions":{
          "shape":"LogPublishingOptionsStatus",
          "documentation":"<p>Log publishing options for the given domain.</p>"
        }
      },
      "documentation":"<p>The configuration of an Elasticsearch domain.</p>"
    },
    "ElasticsearchDomainStatus":{
      "type":"structure",
      "required":[
        "DomainId",
        "DomainName",
        "ARN",
        "ElasticsearchClusterConfig"
      ],
      "members":{
        "DomainId":{
          "shape":"DomainId",
          "documentation":"<p>The unique identifier for the specified Elasticsearch domain.</p>"
        },
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>"
        },
        "ARN":{
          "shape":"ARN",
          "documentation":"<p>The Amazon resource name (ARN) of an Elasticsearch domain. See <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html\" target=\"_blank\">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>"
        },
        "Created":{
          "shape":"Boolean",
          "documentation":"<p>The domain creation status. <code>True</code> if the creation of an Elasticsearch domain is complete. <code>False</code> if domain creation is still in progress.</p>"
        },
        "Deleted":{
          "shape":"Boolean",
          "documentation":"<p>The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.</p>"
        },
        "Endpoint":{
          "shape":"ServiceUrl",
          "documentation":"<p>The Elasticsearch domain endpoint that you use to submit index and search requests.</p>"
        },
        "Endpoints":{
          "shape":"EndpointsMap",
          "documentation":"<p>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>"
        },
        "Processing":{
          "shape":"Boolean",
          "documentation":"<p>The status of the Elasticsearch domain configuration. <code>True</code> if Amazon Elasticsearch Service is processing configuration changes. <code>False</code> if the configuration is active.</p>"
        },
        "UpgradeProcessing":{
          "shape":"Boolean",
          "documentation":"<p>The status of an Elasticsearch domain version upgrade. <code>True</code> if Amazon Elasticsearch Service is undergoing a version upgrade. <code>False</code> if the configuration is active.</p>"
        },
        "ElasticsearchVersion":{"shape":"ElasticsearchVersionString"},
        "ElasticsearchClusterConfig":{
          "shape":"ElasticsearchClusterConfig",
          "documentation":"<p>The type and number of instances in the domain cluster.</p>"
        },
        "EBSOptions":{
          "shape":"EBSOptions",
          "documentation":"<p>The <code>EBSOptions</code> for the specified domain. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs\" target=\"_blank\">Configuring EBS-based Storage</a> for more information.</p>"
        },
        "AccessPolicies":{
          "shape":"PolicyDocument",
          "documentation":"<p> IAM access policy as a JSON-formatted string.</p>"
        },
        "SnapshotOptions":{
          "shape":"SnapshotOptions",
          "documentation":"<p>Specifies the status of the <code>SnapshotOptions</code></p>"
        },
        "VPCOptions":{
          "shape":"VPCDerivedInfo",
          "documentation":"<p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html\" target=\"_blank\">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>"
        },
        "CognitoOptions":{
          "shape":"CognitoOptions",
          "documentation":"<p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html\" target=\"_blank\">Amazon Cognito Authentication for Kibana</a>.</p>"
        },
        "EncryptionAtRestOptions":{
          "shape":"EncryptionAtRestOptions",
          "documentation":"<p> Specifies the status of the <code>EncryptionAtRestOptions</code>.</p>"
        },
        "NodeToNodeEncryptionOptions":{
          "shape":"NodeToNodeEncryptionOptions",
          "documentation":"<p>Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.</p>"
        },
        "AdvancedOptions":{
          "shape":"AdvancedOptions",
          "documentation":"<p>Specifies the status of the <code>AdvancedOptions</code></p>"
        },
        "LogPublishingOptions":{
          "shape":"LogPublishingOptions",
          "documentation":"<p>Log publishing options for the given domain.</p>"
        }
      },
      "documentation":"<p>The current status of an Elasticsearch domain.</p>"
    },
    "ElasticsearchDomainStatusList":{
      "type":"list",
      "member":{"shape":"ElasticsearchDomainStatus"},
      "documentation":"<p>A list that contains the status of each requested Elasticsearch domain.</p>"
    },
    "ElasticsearchInstanceTypeList":{
      "type":"list",
      "member":{"shape":"ESPartitionInstanceType"},
      "documentation":"<p> List of instance types supported by Amazon Elasticsearch service. </p>"
    },
    "ElasticsearchVersionList":{
      "type":"list",
      "member":{"shape":"ElasticsearchVersionString"},
      "documentation":"<p>List of supported elastic search versions. </p>"
    },
    "ElasticsearchVersionStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"ElasticsearchVersionString",
          "documentation":"<p> Specifies the Elasticsearch version for the specified Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p> Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p> Status of the Elasticsearch version options for the specified Elasticsearch domain.</p>"
    },
    "ElasticsearchVersionString":{"type":"string"},
    "EncryptionAtRestOptions":{
      "type":"structure",
      "members":{
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies the option to enable Encryption At Rest.</p>"
        },
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p> Specifies the KMS Key ID for Encryption At Rest options.</p>"
        }
      },
      "documentation":"<p>Specifies the Encryption At Rest Options.</p>"
    },
    "EncryptionAtRestOptionsStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"EncryptionAtRestOptions",
          "documentation":"<p> Specifies the Encryption At Rest options for the specified Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p> Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p> Status of the Encryption At Rest options for the specified Elasticsearch domain.</p>"
    },
    "EndpointsMap":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"ServiceUrl"}
    },
    "ErrorMessage":{"type":"string"},
    "GUID":{
      "type":"string",
      "pattern":"\\p{XDigit}{8}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{4}-\\p{XDigit}{12}"
    },
    "GetCompatibleElasticsearchVersionsRequest":{
      "type":"structure",
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "location":"querystring",
          "locationName":"domainName"
        }
      },
      "documentation":"<p> Container for request parameters to <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. </p>"
    },
    "GetCompatibleElasticsearchVersionsResponse":{
      "type":"structure",
      "members":{
        "CompatibleElasticsearchVersions":{
          "shape":"CompatibleElasticsearchVersionsList",
          "documentation":"<p> A map of compatible Elasticsearch versions returned as part of the <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. </p>"
        }
      },
      "documentation":"<p> Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. </p>"
    },
    "GetUpgradeHistoryRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "location":"uri",
          "locationName":"DomainName"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "NextToken":{
          "shape":"NextToken",
          "location":"querystring",
          "locationName":"nextToken"
        }
      },
      "documentation":"<p> Container for request parameters to <code> <a>GetUpgradeHistory</a> </code> operation. </p>"
    },
    "GetUpgradeHistoryResponse":{
      "type":"structure",
      "members":{
        "UpgradeHistories":{
          "shape":"UpgradeHistoryList",
          "documentation":"<p> A list of <code> <a>UpgradeHistory</a> </code> objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of <code> <a>GetUpgradeHistoryResponse</a> </code> object. </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Pagination token that needs to be supplied to the next call to get the next page of results</p>"
        }
      },
      "documentation":"<p> Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation. </p>"
    },
    "GetUpgradeStatusRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "location":"uri",
          "locationName":"DomainName"
        }
      },
      "documentation":"<p> Container for request parameters to <code> <a>GetUpgradeStatus</a> </code> operation. </p>"
    },
    "GetUpgradeStatusResponse":{
      "type":"structure",
      "members":{
        "UpgradeStep":{
          "shape":"UpgradeStep",
          "documentation":"<p> Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through: <ul> <li>PreUpgradeCheck</li> <li>Snapshot</li> <li>Upgrade</li> </ul> </p>"
        },
        "StepStatus":{
          "shape":"UpgradeStatus",
          "documentation":"<p> One of 4 statuses that a step can go through returned as part of the <code> <a>GetUpgradeStatusResponse</a> </code> object. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> </p>"
        },
        "UpgradeName":{
          "shape":"UpgradeName",
          "documentation":"<p>A string that describes the update briefly</p>"
        }
      },
      "documentation":"<p> Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation. </p>"
    },
    "IdentityPoolId":{
      "type":"string",
      "max":55,
      "min":1,
      "pattern":"[\\w-]+:[0-9a-f-]+"
    },
    "InstanceCount":{
      "type":"integer",
      "documentation":"<p>Specifies the number of EC2 instances in the Elasticsearch domain.</p>",
      "min":1
    },
    "InstanceCountLimits":{
      "type":"structure",
      "members":{
        "MinimumInstanceCount":{"shape":"MinimumInstanceCount"},
        "MaximumInstanceCount":{"shape":"MaximumInstanceCount"}
      },
      "documentation":"<p> InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. </p>"
    },
    "InstanceLimits":{
      "type":"structure",
      "members":{
        "InstanceCountLimits":{"shape":"InstanceCountLimits"}
      },
      "documentation":"<p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType. </p>"
    },
    "InstanceRole":{"type":"string"},
    "Integer":{"type":"integer"},
    "IntegerClass":{"type":"integer"},
    "InternalException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>",
      "error":{"httpStatusCode":500},
      "exception":true
    },
    "InvalidTypeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "Issue":{"type":"string"},
    "Issues":{
      "type":"list",
      "member":{"shape":"Issue"}
    },
    "KmsKeyId":{
      "type":"string",
      "max":500,
      "min":1
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "LimitName":{"type":"string"},
    "LimitValue":{"type":"string"},
    "LimitValueList":{
      "type":"list",
      "member":{"shape":"LimitValue"}
    },
    "Limits":{
      "type":"structure",
      "members":{
        "StorageTypes":{
          "shape":"StorageTypeList",
          "documentation":"<p>StorageType represents the list of storage related types and attributes that are available for given InstanceType. </p>"
        },
        "InstanceLimits":{"shape":"InstanceLimits"},
        "AdditionalLimits":{
          "shape":"AdditionalLimitList",
          "documentation":"<p> List of additional limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . </p>"
        }
      },
      "documentation":"<p> Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code> </p>"
    },
    "LimitsByRole":{
      "type":"map",
      "key":{"shape":"InstanceRole"},
      "value":{"shape":"Limits"},
      "documentation":"<p> Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>Data: If the given InstanceType is used as Data node</li> <li>Master: If the given InstanceType is used as Master node</li> </ul> </p>"
    },
    "ListDomainNamesResponse":{
      "type":"structure",
      "members":{
        "DomainNames":{
          "shape":"DomainInfoList",
          "documentation":"<p>List of Elasticsearch domain names.</p>"
        }
      },
      "documentation":"<p>The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account.</p>"
    },
    "ListElasticsearchInstanceTypesRequest":{
      "type":"structure",
      "required":["ElasticsearchVersion"],
      "members":{
        "ElasticsearchVersion":{
          "shape":"ElasticsearchVersionString",
          "documentation":"<p>Version of Elasticsearch for which list of supported elasticsearch instance types are needed. </p>",
          "location":"uri",
          "locationName":"ElasticsearchVersion"
        },
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain. </p>",
          "location":"querystring",
          "locationName":"domainName"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p> Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored. </p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination. </p>",
          "location":"querystring",
          "locationName":"nextToken"
        }
      },
      "documentation":"<p> Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. </p>"
    },
    "ListElasticsearchInstanceTypesResponse":{
      "type":"structure",
      "members":{
        "ElasticsearchInstanceTypes":{
          "shape":"ElasticsearchInstanceTypeList",
          "documentation":"<p> List of instance types supported by Amazon Elasticsearch service for given <code> <a>ElasticsearchVersion</a> </code> </p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>In case if there are more results available NextToken would be present, make further request to the same API with received NextToken to paginate remaining results. </p>"
        }
      },
      "documentation":"<p> Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. </p>"
    },
    "ListElasticsearchVersionsRequest":{
      "type":"structure",
      "members":{
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p> Set this value to limit the number of results returned. Value provided must be greater than 10 else it wont be honored. </p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "NextToken":{
          "shape":"NextToken",
          "location":"querystring",
          "locationName":"nextToken"
        }
      },
      "documentation":"<p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p>"
    },
    "ListElasticsearchVersionsResponse":{
      "type":"structure",
      "members":{
        "ElasticsearchVersions":{"shape":"ElasticsearchVersionList"},
        "NextToken":{"shape":"NextToken"}
      },
      "documentation":"<p> Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation. </p>"
    },
    "ListTagsRequest":{
      "type":"structure",
      "required":["ARN"],
      "members":{
        "ARN":{
          "shape":"ARN",
          "documentation":"<p> Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.</p>",
          "location":"querystring",
          "locationName":"arn"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.</p>"
    },
    "ListTagsResponse":{
      "type":"structure",
      "members":{
        "TagList":{
          "shape":"TagList",
          "documentation":"<p> List of <code>Tag</code> for the requested Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p>The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.</p>"
    },
    "LogPublishingOption":{
      "type":"structure",
      "members":{
        "CloudWatchLogsLogGroupArn":{"shape":"CloudWatchLogsLogGroupArn"},
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p> Specifies whether given log publishing option is enabled or not.</p>"
        }
      },
      "documentation":"<p>Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul> </p>"
    },
    "LogPublishingOptions":{
      "type":"map",
      "key":{"shape":"LogType"},
      "value":{"shape":"LogPublishingOption"}
    },
    "LogPublishingOptionsStatus":{
      "type":"structure",
      "members":{
        "Options":{
          "shape":"LogPublishingOptions",
          "documentation":"<p>The log publishing options configured for the Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p>The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>"
        }
      },
      "documentation":"<p>The configured log publishing options for the domain and their current status.</p>"
    },
    "LogType":{
      "type":"string",
      "documentation":"<p>Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.</li> <li>ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</li> </ul> </p>",
      "enum":[
        "INDEX_SLOW_LOGS",
        "SEARCH_SLOW_LOGS",
        "ES_APPLICATION_LOGS"
      ]
    },
    "MaxResults":{
      "type":"integer",
      "documentation":"<p> Set this value to limit the number of results returned. </p>",
      "max":100
    },
    "MaximumInstanceCount":{
      "type":"integer",
      "documentation":"<p> Maximum number of Instances that can be instantiated for given InstanceType. </p>"
    },
    "MinimumInstanceCount":{
      "type":"integer",
      "documentation":"<p> Minimum number of Instances that can be instantiated for given InstanceType. </p>"
    },
    "NextToken":{
      "type":"string",
      "documentation":"<p> Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. </p>"
    },
    "NodeToNodeEncryptionOptions":{
      "type":"structure",
      "members":{
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>Specify true to enable node-to-node encryption.</p>"
        }
      },
      "documentation":"<p>Specifies the node-to-node encryption options.</p>"
    },
    "NodeToNodeEncryptionOptionsStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"NodeToNodeEncryptionOptions",
          "documentation":"<p>Specifies the node-to-node encryption options for the specified Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p>Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p>Status of the node-to-node encryption options for the specified Elasticsearch domain.</p>"
    },
    "OptionState":{
      "type":"string",
      "documentation":"<p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul>",
      "enum":[
        "RequiresIndexDocuments",
        "Processing",
        "Active"
      ]
    },
    "OptionStatus":{
      "type":"structure",
      "required":[
        "CreationDate",
        "UpdateDate",
        "State"
      ],
      "members":{
        "CreationDate":{
          "shape":"UpdateTimestamp",
          "documentation":"<p>Timestamp which tells the creation date for the entity.</p>"
        },
        "UpdateDate":{
          "shape":"UpdateTimestamp",
          "documentation":"<p>Timestamp which tells the last updated time for the entity.</p>"
        },
        "UpdateVersion":{
          "shape":"UIntValue",
          "documentation":"<p>Specifies the latest version for the entity.</p>"
        },
        "State":{
          "shape":"OptionState",
          "documentation":"<p>Provides the <code>OptionState</code> for the Elasticsearch domain.</p>"
        },
        "PendingDeletion":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the Elasticsearch domain is being deleted.</p>"
        }
      },
      "documentation":"<p>Provides the current status of the entity.</p>"
    },
    "PolicyDocument":{
      "type":"string",
      "documentation":"<p>Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies\" target=\"_blank\">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.</p>"
    },
    "PurchaseReservedElasticsearchInstanceOfferingRequest":{
      "type":"structure",
      "required":[
        "ReservedElasticsearchInstanceOfferingId",
        "ReservationName"
      ],
      "members":{
        "ReservedElasticsearchInstanceOfferingId":{
          "shape":"GUID",
          "documentation":"<p>The ID of the reserved Elasticsearch instance offering to purchase.</p>"
        },
        "ReservationName":{
          "shape":"ReservationToken",
          "documentation":"<p>A customer-specified identifier to track this reservation.</p>"
        },
        "InstanceCount":{
          "shape":"InstanceCount",
          "documentation":"<p>The number of Elasticsearch instances to reserve.</p>"
        }
      },
      "documentation":"<p>Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code></p>"
    },
    "PurchaseReservedElasticsearchInstanceOfferingResponse":{
      "type":"structure",
      "members":{
        "ReservedElasticsearchInstanceId":{
          "shape":"GUID",
          "documentation":"<p>Details of the reserved Elasticsearch instance which was purchased.</p>"
        },
        "ReservationName":{
          "shape":"ReservationToken",
          "documentation":"<p>The customer-specified identifier used to track this reservation.</p>"
        }
      },
      "documentation":"<p>Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.</p>"
    },
    "RecurringCharge":{
      "type":"structure",
      "members":{
        "RecurringChargeAmount":{
          "shape":"Double",
          "documentation":"<p>The monetary amount of the recurring charge.</p>"
        },
        "RecurringChargeFrequency":{
          "shape":"String",
          "documentation":"<p>The frequency of the recurring charge.</p>"
        }
      },
      "documentation":"<p>Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.</p>"
    },
    "RecurringChargeList":{
      "type":"list",
      "member":{"shape":"RecurringCharge"}
    },
    "RemoveTagsRequest":{
      "type":"structure",
      "required":[
        "ARN",
        "TagKeys"
      ],
      "members":{
        "ARN":{
          "shape":"ARN",
          "documentation":"<p>Specifies the <code>ARN</code> for the Elasticsearch domain from which you want to delete the specified tags.</p>"
        },
        "TagKeys":{
          "shape":"StringList",
          "documentation":"<p>Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.</p>"
    },
    "ReservationToken":{
      "type":"string",
      "max":64,
      "min":5
    },
    "ReservedElasticsearchInstance":{
      "type":"structure",
      "members":{
        "ReservationName":{
          "shape":"ReservationToken",
          "documentation":"<p>The customer-specified identifier to track this reservation.</p>"
        },
        "ReservedElasticsearchInstanceId":{
          "shape":"GUID",
          "documentation":"<p>The unique identifier for the reservation.</p>"
        },
        "ReservedElasticsearchInstanceOfferingId":{
          "shape":"String",
          "documentation":"<p>The offering identifier.</p>"
        },
        "ElasticsearchInstanceType":{
          "shape":"ESPartitionInstanceType",
          "documentation":"<p>The Elasticsearch instance type offered by the reserved instance offering.</p>"
        },
        "StartTime":{
          "shape":"UpdateTimestamp",
          "documentation":"<p>The time the reservation started.</p>"
        },
        "Duration":{
          "shape":"Integer",
          "documentation":"<p>The duration, in seconds, for which the Elasticsearch instance is reserved.</p>"
        },
        "FixedPrice":{
          "shape":"Double",
          "documentation":"<p>The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering. </p>"
        },
        "UsagePrice":{
          "shape":"Double",
          "documentation":"<p>The rate you are charged for each hour for the domain that is using this reserved instance.</p>"
        },
        "CurrencyCode":{
          "shape":"String",
          "documentation":"<p>The currency code for the reserved Elasticsearch instance offering.</p>"
        },
        "ElasticsearchInstanceCount":{
          "shape":"Integer",
          "documentation":"<p>The number of Elasticsearch instances that have been reserved.</p>"
        },
        "State":{
          "shape":"String",
          "documentation":"<p>The state of the reserved Elasticsearch instance.</p>"
        },
        "PaymentOption":{
          "shape":"ReservedElasticsearchInstancePaymentOption",
          "documentation":"<p>The payment option as defined in the reserved Elasticsearch instance offering.</p>"
        },
        "RecurringCharges":{
          "shape":"RecurringChargeList",
          "documentation":"<p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>"
        }
      },
      "documentation":"<p>Details of a reserved Elasticsearch instance.</p>"
    },
    "ReservedElasticsearchInstanceList":{
      "type":"list",
      "member":{"shape":"ReservedElasticsearchInstance"}
    },
    "ReservedElasticsearchInstanceOffering":{
      "type":"structure",
      "members":{
        "ReservedElasticsearchInstanceOfferingId":{
          "shape":"GUID",
          "documentation":"<p>The Elasticsearch reserved instance offering identifier.</p>"
        },
        "ElasticsearchInstanceType":{
          "shape":"ESPartitionInstanceType",
          "documentation":"<p>The Elasticsearch instance type offered by the reserved instance offering.</p>"
        },
        "Duration":{
          "shape":"Integer",
          "documentation":"<p>The duration, in seconds, for which the offering will reserve the Elasticsearch instance.</p>"
        },
        "FixedPrice":{
          "shape":"Double",
          "documentation":"<p>The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering. </p>"
        },
        "UsagePrice":{
          "shape":"Double",
          "documentation":"<p>The rate you are charged for each hour the domain that is using the offering is running.</p>"
        },
        "CurrencyCode":{
          "shape":"String",
          "documentation":"<p>The currency code for the reserved Elasticsearch instance offering.</p>"
        },
        "PaymentOption":{
          "shape":"ReservedElasticsearchInstancePaymentOption",
          "documentation":"<p>Payment option for the reserved Elasticsearch instance offering</p>"
        },
        "RecurringCharges":{
          "shape":"RecurringChargeList",
          "documentation":"<p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>"
        }
      },
      "documentation":"<p>Details of a reserved Elasticsearch instance offering.</p>"
    },
    "ReservedElasticsearchInstanceOfferingList":{
      "type":"list",
      "member":{"shape":"ReservedElasticsearchInstanceOffering"}
    },
    "ReservedElasticsearchInstancePaymentOption":{
      "type":"string",
      "enum":[
        "ALL_UPFRONT",
        "PARTIAL_UPFRONT",
        "NO_UPFRONT"
      ]
    },
    "ResourceAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An exception for creating a resource that already exists. Gives http status code of 400.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "RoleArn":{
      "type":"string",
      "max":2048,
      "min":20
    },
    "ServiceUrl":{
      "type":"string",
      "documentation":"<p>The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>.</p>"
    },
    "SnapshotOptions":{
      "type":"structure",
      "members":{
        "AutomatedSnapshotStartHour":{
          "shape":"IntegerClass",
          "documentation":"<p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>"
        }
      },
      "documentation":"<p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>"
    },
    "SnapshotOptionsStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"SnapshotOptions",
          "documentation":"<p>Specifies the daily snapshot options specified for the Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p>Specifies the status of a daily automated snapshot.</p>"
        }
      },
      "documentation":"<p>Status of a daily automated snapshot.</p>"
    },
    "StartTimestamp":{"type":"timestamp"},
    "StorageSubTypeName":{
      "type":"string",
      "documentation":"<p> SubType of the given storage type. List of available sub-storage options: For \"instance\" storageType we wont have any storageSubType, in case of \"ebs\" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. </p>"
    },
    "StorageType":{
      "type":"structure",
      "members":{
        "StorageTypeName":{"shape":"StorageTypeName"},
        "StorageSubTypeName":{"shape":"StorageSubTypeName"},
        "StorageTypeLimits":{
          "shape":"StorageTypeLimitList",
          "documentation":"<p>List of limits that are applicable for given storage type. </p>"
        }
      },
      "documentation":"<p>StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType. </p>"
    },
    "StorageTypeLimit":{
      "type":"structure",
      "members":{
        "LimitName":{
          "shape":"LimitName",
          "documentation":"<p> Name of storage limits that are applicable for given storage type. If <code> <a>StorageType</a> </code> is ebs, following storage options are applicable <ol> <li>MinimumVolumeSize</li> Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable. <li>MaximumVolumeSize</li> Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable. <li>MaximumIops</li> Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable. <li>MinimumIops</li> Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable. </ol> </p>"
        },
        "LimitValues":{
          "shape":"LimitValueList",
          "documentation":"<p> Values for the <code> <a>StorageTypeLimit$LimitName</a> </code> . </p>"
        }
      },
      "documentation":"<p>Limits that are applicable for given storage type. </p>"
    },
    "StorageTypeLimitList":{
      "type":"list",
      "member":{"shape":"StorageTypeLimit"}
    },
    "StorageTypeList":{
      "type":"list",
      "member":{"shape":"StorageType"}
    },
    "StorageTypeName":{
      "type":"string",
      "documentation":"<p> Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> </p>"
    },
    "String":{"type":"string"},
    "StringList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "Tag":{
      "type":"structure",
      "required":[
        "Key",
        "Value"
      ],
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p>Specifies the <code>TagKey</code>, the name of the tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>Specifies the <code>TagValue</code>, the value assigned to the corresponding tag key. Tag values can be null and do not have to be unique in a tag set. For example, you can have a key value pair in a tag set of <code>project : Trinity</code> and <code>cost-center : Trinity</code></p>"
        }
      },
      "documentation":"<p>Specifies a key value pair for a resource tag.</p>"
    },
    "TagKey":{
      "type":"string",
      "documentation":"<p>A string of length from 1 to 128 characters that specifies the key for a Tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.</p>",
      "max":128,
      "min":1
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "documentation":"<p>A list of <code>Tag</code> </p>"
    },
    "TagValue":{
      "type":"string",
      "documentation":"<p>A string of length from 0 to 256 characters that specifies the value for a Tag. Tag values can be null and do not have to be unique in a tag set.</p>",
      "max":256,
      "min":0
    },
    "UIntValue":{
      "type":"integer",
      "min":0
    },
    "UpdateElasticsearchDomainConfigRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the Elasticsearch domain that you are updating. </p>",
          "location":"uri",
          "locationName":"DomainName"
        },
        "ElasticsearchClusterConfig":{
          "shape":"ElasticsearchClusterConfig",
          "documentation":"<p>The type and number of instances to instantiate for the domain cluster.</p>"
        },
        "EBSOptions":{
          "shape":"EBSOptions",
          "documentation":"<p>Specify the type and size of the EBS volume that you want to use. </p>"
        },
        "SnapshotOptions":{
          "shape":"SnapshotOptions",
          "documentation":"<p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours. </p>"
        },
        "VPCOptions":{
          "shape":"VPCOptions",
          "documentation":"<p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc\" target=\"_blank\">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>"
        },
        "CognitoOptions":{
          "shape":"CognitoOptions",
          "documentation":"<p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html\" target=\"_blank\">Amazon Cognito Authentication for Kibana</a>.</p>"
        },
        "AdvancedOptions":{
          "shape":"AdvancedOptions",
          "documentation":"<p>Modifies the advanced option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options\" target=\"_blank\">Configuration Advanced Options</a> for more information.</p>"
        },
        "AccessPolicies":{
          "shape":"PolicyDocument",
          "documentation":"<p>IAM access policy as a JSON-formatted string.</p>"
        },
        "LogPublishingOptions":{
          "shape":"LogPublishingOptions",
          "documentation":"<p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.</p>"
    },
    "UpdateElasticsearchDomainConfigResponse":{
      "type":"structure",
      "required":["DomainConfig"],
      "members":{
        "DomainConfig":{
          "shape":"ElasticsearchDomainConfig",
          "documentation":"<p>The status of the updated Elasticsearch domain. </p>"
        }
      },
      "documentation":"<p>The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.</p>"
    },
    "UpdateTimestamp":{"type":"timestamp"},
    "UpgradeElasticsearchDomainRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "TargetVersion"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "TargetVersion":{
          "shape":"ElasticsearchVersionString",
          "documentation":"<p>The version of Elasticsearch that you intend to upgrade the domain to.</p>"
        },
        "PerformCheckOnly":{
          "shape":"Boolean",
          "documentation":"<p> This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. </p>"
        }
      },
      "documentation":"<p> Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation. </p>"
    },
    "UpgradeElasticsearchDomainResponse":{
      "type":"structure",
      "members":{
        "DomainName":{"shape":"DomainName"},
        "TargetVersion":{
          "shape":"ElasticsearchVersionString",
          "documentation":"<p>The version of Elasticsearch that you intend to upgrade the domain to.</p>"
        },
        "PerformCheckOnly":{
          "shape":"Boolean",
          "documentation":"<p> This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. </p>"
        }
      },
      "documentation":"<p> Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation. </p>"
    },
    "UpgradeHistory":{
      "type":"structure",
      "members":{
        "UpgradeName":{
          "shape":"UpgradeName",
          "documentation":"<p>A string that describes the update briefly</p>"
        },
        "StartTimestamp":{
          "shape":"StartTimestamp",
          "documentation":"<p>UTC Timestamp at which the Upgrade API call was made in \"yyyy-MM-ddTHH:mm:ssZ\" format.</p>"
        },
        "UpgradeStatus":{
          "shape":"UpgradeStatus",
          "documentation":"<p> The overall status of the update. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> </p>"
        },
        "StepsList":{
          "shape":"UpgradeStepsList",
          "documentation":"<p> A list of <code> <a>UpgradeStepItem</a> </code> s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check. </p>"
        }
      },
      "documentation":"<p>History of the last 10 Upgrades and Upgrade Eligibility Checks.</p>"
    },
    "UpgradeHistoryList":{
      "type":"list",
      "member":{"shape":"UpgradeHistory"}
    },
    "UpgradeName":{"type":"string"},
    "UpgradeStatus":{
      "type":"string",
      "enum":[
        "IN_PROGRESS",
        "SUCCEEDED",
        "SUCCEEDED_WITH_ISSUES",
        "FAILED"
      ]
    },
    "UpgradeStep":{
      "type":"string",
      "enum":[
        "PRE_UPGRADE_CHECK",
        "SNAPSHOT",
        "UPGRADE"
      ]
    },
    "UpgradeStepItem":{
      "type":"structure",
      "members":{
        "UpgradeStep":{
          "shape":"UpgradeStep",
          "documentation":"<p> Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through: <ul> <li>PreUpgradeCheck</li> <li>Snapshot</li> <li>Upgrade</li> </ul> </p>"
        },
        "UpgradeStepStatus":{
          "shape":"UpgradeStatus",
          "documentation":"<p> The status of a particular step during an upgrade. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> </p>"
        },
        "Issues":{
          "shape":"Issues",
          "documentation":"<p>A list of strings containing detailed information about the errors encountered in a particular step.</p>"
        },
        "ProgressPercent":{
          "shape":"Double",
          "documentation":"<p>The Floating point value representing progress percentage of a particular step.</p>"
        }
      },
      "documentation":"<p>Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.</p>"
    },
    "UpgradeStepsList":{
      "type":"list",
      "member":{"shape":"UpgradeStepItem"}
    },
    "UserPoolId":{
      "type":"string",
      "max":55,
      "min":1,
      "pattern":"[\\w-]+_[0-9a-zA-Z]+"
    },
    "VPCDerivedInfo":{
      "type":"structure",
      "members":{
        "VPCId":{
          "shape":"String",
          "documentation":"<p>The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>"
        },
        "SubnetIds":{
          "shape":"StringList",
          "documentation":"<p>Specifies the subnets for VPC endpoint.</p>"
        },
        "AvailabilityZones":{
          "shape":"StringList",
          "documentation":"<p>The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>"
        },
        "SecurityGroupIds":{
          "shape":"StringList",
          "documentation":"<p>Specifies the security groups for VPC endpoint.</p>"
        }
      },
      "documentation":"<p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html\" target=\"_blank\"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>"
    },
    "VPCDerivedInfoStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"VPCDerivedInfo",
          "documentation":"<p> Specifies the VPC options for the specified Elasticsearch domain.</p>"
        },
        "Status":{
          "shape":"OptionStatus",
          "documentation":"<p> Specifies the status of the VPC options for the specified Elasticsearch domain.</p>"
        }
      },
      "documentation":"<p> Status of the VPC options for the specified Elasticsearch domain.</p>"
    },
    "VPCOptions":{
      "type":"structure",
      "members":{
        "SubnetIds":{
          "shape":"StringList",
          "documentation":"<p>Specifies the subnets for VPC endpoint.</p>"
        },
        "SecurityGroupIds":{
          "shape":"StringList",
          "documentation":"<p>Specifies the security groups for VPC endpoint.</p>"
        }
      },
      "documentation":"<p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html\" target=\"_blank\"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>"
    },
    "ValidationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An exception for missing / invalid input fields. Gives http status code of 400.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "VolumeType":{
      "type":"string",
      "documentation":"<p> The type of EBS volume, standard, gp2, or io1. See <a href=\"http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs\" target=\"_blank\">Configuring EBS-based Storage</a>for more information.</p>",
      "enum":[
        "standard",
        "gp2",
        "io1"
      ]
    }
  },
  "documentation":"<fullname>Amazon Elasticsearch Configuration Service</fullname> <p>Use the Amazon Elasticsearch configuration API to create, configure, and manage Elasticsearch domains.</p> <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions\" target=\"_blank\">Regions and Endpoints</a>.</p>"
}
