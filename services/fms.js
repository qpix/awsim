awsim['fms'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2018-01-01",
    "endpointPrefix":"fms",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"FMS",
    "serviceFullName":"Firewall Management Service",
    "serviceId":"FMS",
    "signatureVersion":"v4",
    "targetPrefix":"AWSFMS_20180101",
    "uid":"fms-2018-01-01"
  },
  "operations":{
    "AssociateAdminAccount":{
      "name":"AssociateAdminAccount",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateAdminAccountRequest"},
      "errors":[
        {"shape":"InvalidOperationException"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be associated with the master account your AWS organization or associated with a member account that has the appropriate permissions. If the account ID that you submit is not an AWS Organizations master account, AWS Firewall Manager will set the appropriate permissions for the given member account.</p> <p>The account that you associate with AWS Firewall Manager is called the AWS Firewall Manager administrator account. </p>"
    },
    "DeleteNotificationChannel":{
      "name":"DeleteNotificationChannel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteNotificationChannelRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidOperationException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>"
    },
    "DeletePolicy":{
      "name":"DeletePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeletePolicyRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidOperationException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Permanently deletes an AWS Firewall Manager policy. </p>"
    },
    "DisassociateAdminAccount":{
      "name":"DisassociateAdminAccount",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateAdminAccountRequest"},
      "errors":[
        {"shape":"InvalidOperationException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Disassociates the account that has been set as the AWS Firewall Manager administrator account. You will need to submit an <code>AssociateAdminAccount</code> request to set a new account as the AWS Firewall administrator.</p>"
    },
    "GetAdminAccount":{
      "name":"GetAdminAccount",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAdminAccountRequest"},
      "output":{"shape":"GetAdminAccountResponse"},
      "errors":[
        {"shape":"InvalidOperationException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.</p>"
    },
    "GetComplianceDetail":{
      "name":"GetComplianceDetail",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetComplianceDetailRequest"},
      "output":{"shape":"GetComplianceDetailResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. Resources are considered non-compliant if the specified policy has not been applied to them.</p>"
    },
    "GetNotificationChannel":{
      "name":"GetNotificationChannel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetNotificationChannelRequest"},
      "output":{"shape":"GetNotificationChannelResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidOperationException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Returns information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>"
    },
    "GetPolicy":{
      "name":"GetPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetPolicyRequest"},
      "output":{"shape":"GetPolicyResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidOperationException"},
        {"shape":"InternalErrorException"},
        {"shape":"InvalidTypeException"}
      ],
      "documentation":"<p>Returns information about the specified AWS Firewall Manager policy.</p>"
    },
    "ListComplianceStatus":{
      "name":"ListComplianceStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListComplianceStatusRequest"},
      "output":{"shape":"ListComplianceStatusResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Returns an array of <code>PolicyComplianceStatus</code> objects in the response. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. </p>"
    },
    "ListMemberAccounts":{
      "name":"ListMemberAccounts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListMemberAccountsRequest"},
      "output":{"shape":"ListMemberAccountsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's AWS organization.</p> <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the AWS Firewall Manager administrator.</p>"
    },
    "ListPolicies":{
      "name":"ListPolicies",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPoliciesRequest"},
      "output":{"shape":"ListPoliciesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidOperationException"},
        {"shape":"LimitExceededException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Returns an array of <code>PolicySummary</code> objects in the response.</p>"
    },
    "PutNotificationChannel":{
      "name":"PutNotificationChannel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutNotificationChannelRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidOperationException"},
        {"shape":"InternalErrorException"}
      ],
      "documentation":"<p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.</p>"
    },
    "PutPolicy":{
      "name":"PutPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutPolicyRequest"},
      "output":{"shape":"PutPolicyResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidOperationException"},
        {"shape":"InvalidInputException"},
        {"shape":"LimitExceededException"},
        {"shape":"InternalErrorException"},
        {"shape":"InvalidTypeException"}
      ],
      "documentation":"<p>Creates an AWS Firewall Manager policy.</p>"
    }
  },
  "shapes":{
    "AWSAccountId":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "AccountRoleStatus":{
      "type":"string",
      "enum":[
        "READY",
        "CREATING",
        "PENDING_DELETION",
        "DELETING",
        "DELETED"
      ]
    },
    "AssociateAdminAccountRequest":{
      "type":"structure",
      "required":["AdminAccount"],
      "members":{
        "AdminAccount":{
          "shape":"AWSAccountId",
          "documentation":"<p>The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager administrator account. This can be an AWS Organizations master account or a member account. For more information about AWS Organizations and master accounts, see <a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html\">Managing the AWS Accounts in Your Organization</a>.</p>"
        }
      }
    },
    "Boolean":{"type":"boolean"},
    "ComplianceViolator":{
      "type":"structure",
      "members":{
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The resource ID.</p>"
        },
        "ViolationReason":{
          "shape":"ViolationReason",
          "documentation":"<p>The reason that the resource is not protected by the policy.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type. This is in the format shown in <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html\">AWS Resource Types Reference</a>. Valid values are <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> or <code>AWS::CloudFront::Distribution</code>.</p>"
        }
      },
      "documentation":"<p>Details of the resource that is not protected by the policy.</p>"
    },
    "ComplianceViolators":{
      "type":"list",
      "member":{"shape":"ComplianceViolator"}
    },
    "CustomerPolicyScopeId":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "CustomerPolicyScopeIdList":{
      "type":"list",
      "member":{"shape":"CustomerPolicyScopeId"}
    },
    "CustomerPolicyScopeIdType":{
      "type":"string",
      "enum":["ACCOUNT"]
    },
    "CustomerPolicyScopeMap":{
      "type":"map",
      "key":{"shape":"CustomerPolicyScopeIdType"},
      "value":{"shape":"CustomerPolicyScopeIdList"}
    },
    "DeleteNotificationChannelRequest":{
      "type":"structure",
      "members":{
      }
    },
    "DeletePolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The ID of the policy that you want to delete. <code>PolicyId</code> is returned by <code>PutPolicy</code> and by <code>ListPolicies</code>.</p>"
        }
      }
    },
    "DependentServiceName":{
      "type":"string",
      "enum":[
        "AWSCONFIG",
        "AWSWAF"
      ]
    },
    "DetailedInfo":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "DisassociateAdminAccountRequest":{
      "type":"structure",
      "members":{
      }
    },
    "ErrorMessage":{"type":"string"},
    "EvaluationResult":{
      "type":"structure",
      "members":{
        "ComplianceStatus":{
          "shape":"PolicyComplianceStatusType",
          "documentation":"<p>Describes an AWS account's compliance with the AWS Firewall Manager policy.</p>"
        },
        "ViolatorCount":{
          "shape":"ResourceCount",
          "documentation":"<p>Number of resources that are non-compliant with the specified policy. A resource is considered non-compliant if it is not associated with the specified policy.</p>"
        },
        "EvaluationLimitExceeded":{
          "shape":"Boolean",
          "documentation":"<p>Indicates that over 100 resources are non-compliant with the AWS Firewall Manager policy.</p>"
        }
      },
      "documentation":"<p>Describes the compliance status for the account. An account is considered non-compliant if it includes resources that are not protected by the specified policy.</p>"
    },
    "EvaluationResults":{
      "type":"list",
      "member":{"shape":"EvaluationResult"}
    },
    "GetAdminAccountRequest":{
      "type":"structure",
      "members":{
      }
    },
    "GetAdminAccountResponse":{
      "type":"structure",
      "members":{
        "AdminAccount":{
          "shape":"AWSAccountId",
          "documentation":"<p>The AWS account that is set as the AWS Firewall Manager administrator.</p>"
        },
        "RoleStatus":{
          "shape":"AccountRoleStatus",
          "documentation":"<p>The status of the AWS account that you set as the AWS Firewall Manager administrator.</p>"
        }
      }
    },
    "GetComplianceDetailRequest":{
      "type":"structure",
      "required":[
        "PolicyId",
        "MemberAccount"
      ],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The ID of the policy that you want to get the details for. <code>PolicyId</code> is returned by <code>PutPolicy</code> and by <code>ListPolicies</code>.</p>"
        },
        "MemberAccount":{
          "shape":"AWSAccountId",
          "documentation":"<p>The AWS account that owns the resources that you want to get the details for.</p>"
        }
      }
    },
    "GetComplianceDetailResponse":{
      "type":"structure",
      "members":{
        "PolicyComplianceDetail":{
          "shape":"PolicyComplianceDetail",
          "documentation":"<p>Information about the resources and the policy that you specified in the <code>GetComplianceDetail</code> request.</p>"
        }
      }
    },
    "GetNotificationChannelRequest":{
      "type":"structure",
      "members":{
      }
    },
    "GetNotificationChannelResponse":{
      "type":"structure",
      "members":{
        "SnsTopicArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The SNS topic that records AWS Firewall Manager activity. </p>"
        },
        "SnsRoleName":{
          "shape":"ResourceArn",
          "documentation":"<p>The IAM role that is used by AWS Firewall Manager to record activity to SNS.</p>"
        }
      }
    },
    "GetPolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The ID of the AWS Firewall Manager policy that you want the details for.</p>"
        }
      }
    },
    "GetPolicyResponse":{
      "type":"structure",
      "members":{
        "Policy":{
          "shape":"Policy",
          "documentation":"<p>Information about the specified AWS Firewall Manager policy.</p>"
        },
        "PolicyArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the specified policy.</p>"
        }
      }
    },
    "InternalErrorException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>",
      "exception":true
    },
    "InvalidInputException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The parameters of the request were invalid.</p>",
      "exception":true
    },
    "InvalidOperationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>",
      "exception":true
    },
    "InvalidTypeException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The value of the <code>Type</code> parameter is invalid.</p>",
      "exception":true
    },
    "IssueInfoMap":{
      "type":"map",
      "key":{"shape":"DependentServiceName"},
      "value":{"shape":"DetailedInfo"}
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The operation exceeds a resource limit, for example, the maximum number of <code>policy</code> objects that you can create for an AWS account. For more information, see <a href=\"http://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html\">Firewall Manager Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>",
      "exception":true
    },
    "ListComplianceStatusRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The ID of the AWS Firewall Manager policy that you want the details for.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If you specify a value for <code>MaxResults</code> and you have more <code>PolicyComplianceStatus</code> objects than the number that you specify for <code>MaxResults</code>, AWS Firewall Manager returns a <code>NextToken</code> value in the response that allows you to list another group of <code>PolicyComplianceStatus</code> objects. For the second and subsequent <code>ListComplianceStatus</code> requests, specify the value of <code>NextToken</code> from the previous response to get information about another batch of <code>PolicyComplianceStatus</code> objects.</p>"
        },
        "MaxResults":{
          "shape":"PaginationMaxResults",
          "documentation":"<p>Specifies the number of <code>PolicyComplianceStatus</code> objects that you want AWS Firewall Manager to return for this request. If you have more <code>PolicyComplianceStatus</code> objects than the number that you specify for <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can use to get another batch of <code>PolicyComplianceStatus</code> objects.</p>"
        }
      }
    },
    "ListComplianceStatusResponse":{
      "type":"structure",
      "members":{
        "PolicyComplianceStatusList":{
          "shape":"PolicyComplianceStatusList",
          "documentation":"<p>An array of <code>PolicyComplianceStatus</code> objects.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If you have more <code>PolicyComplianceStatus</code> objects than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more <code>PolicyComplianceStatus</code> objects, submit another <code>ListComplianceStatus</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.</p>"
        }
      }
    },
    "ListMemberAccountsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If you specify a value for <code>MaxResults</code> and you have more account IDs than the number that you specify for <code>MaxResults</code>, AWS Firewall Manager returns a <code>NextToken</code> value in the response that allows you to list another group of IDs. For the second and subsequent <code>ListMemberAccountsRequest</code> requests, specify the value of <code>NextToken</code> from the previous response to get information about another batch of member account IDs.</p>"
        },
        "MaxResults":{
          "shape":"PaginationMaxResults",
          "documentation":"<p>Specifies the number of member account IDs that you want AWS Firewall Manager to return for this request. If you have more IDs than the number that you specify for <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can use to get another batch of member account IDs. The maximum value for <code>MaxResults</code> is 100.</p>"
        }
      }
    },
    "ListMemberAccountsResponse":{
      "type":"structure",
      "members":{
        "MemberAccounts":{
          "shape":"MemberAccounts",
          "documentation":"<p>An array of account IDs.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If you have more member account IDs than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more IDs, submit another <code>ListMemberAccounts</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.</p>"
        }
      }
    },
    "ListPoliciesRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If you specify a value for <code>MaxResults</code> and you have more <code>PolicySummary</code> objects than the number that you specify for <code>MaxResults</code>, AWS Firewall Manager returns a <code>NextToken</code> value in the response that allows you to list another group of <code>PolicySummary</code> objects. For the second and subsequent <code>ListPolicies</code> requests, specify the value of <code>NextToken</code> from the previous response to get information about another batch of <code>PolicySummary</code> objects.</p>"
        },
        "MaxResults":{
          "shape":"PaginationMaxResults",
          "documentation":"<p>Specifies the number of <code>PolicySummary</code> objects that you want AWS Firewall Manager to return for this request. If you have more <code>PolicySummary</code> objects than the number that you specify for <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can use to get another batch of <code>PolicySummary</code> objects.</p>"
        }
      }
    },
    "ListPoliciesResponse":{
      "type":"structure",
      "members":{
        "PolicyList":{
          "shape":"PolicySummaryList",
          "documentation":"<p>An array of <code>PolicySummary</code> objects.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If you have more <code>PolicySummary</code> objects than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more <code>PolicySummary</code> objects, submit another <code>ListPolicies</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.</p>"
        }
      }
    },
    "ManagedServiceData":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "MemberAccounts":{
      "type":"list",
      "member":{"shape":"AWSAccountId"}
    },
    "PaginationMaxResults":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "PaginationToken":{
      "type":"string",
      "min":1
    },
    "Policy":{
      "type":"structure",
      "required":[
        "PolicyName",
        "SecurityServicePolicyData",
        "ResourceType",
        "ExcludeResourceTags",
        "RemediationEnabled"
      ],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The ID of the AWS Firewall Manager policy.</p>"
        },
        "PolicyName":{
          "shape":"ResourceName",
          "documentation":"<p>The friendly name of the AWS Firewall Manager policy.</p>"
        },
        "PolicyUpdateToken":{
          "shape":"PolicyUpdateToken",
          "documentation":"<p>A unique identifier for each update to the policy. When issuing a <code>PutPolicy</code> request, the <code>PolicyUpdateToken</code> in the request must match the <code>PolicyUpdateToken</code> of the current policy version. To get the <code>PolicyUpdateToken</code> of the current policy version, use a <code>GetPolicy</code> request.</p>"
        },
        "SecurityServicePolicyData":{
          "shape":"SecurityServicePolicyData",
          "documentation":"<p>Details about the security service that is being used to protect the resources.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of resource to protect with the policy, either an Application Load Balancer or a CloudFront distribution. This is in the format shown in <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html\">AWS Resource Types Reference</a>. Valid values are <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> or <code>AWS::CloudFront::Distribution</code>.</p>"
        },
        "ResourceTags":{
          "shape":"ResourceTags",
          "documentation":"<p>An array of <code>ResourceTag</code> objects.</p>"
        },
        "ExcludeResourceTags":{
          "shape":"Boolean",
          "documentation":"<p>If set to <code>True</code>, resources with the tags that are specified in the <code>ResourceTag</code> array are not protected by the policy. If set to <code>False</code>, and the <code>ResourceTag</code> array is not null, only resources with the specified tags are associated with the policy.</p>"
        },
        "RemediationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Indicates if the policy should be automatically applied to new resources.</p>"
        },
        "IncludeMap":{
          "shape":"CustomerPolicyScopeMap",
          "documentation":"<p>Specifies the AWS account IDs to include in the policy. If <code>IncludeMap</code> is null, all accounts in the AWS Organization are included in the policy. If <code>IncludeMap</code> is not null, only values listed in <code>IncludeMap</code> will be included in the policy.</p> <p>The key to the map is <code>ACCOUNT</code>. For example, a valid <code>IncludeMap</code> would be <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>"
        },
        "ExcludeMap":{
          "shape":"CustomerPolicyScopeMap",
          "documentation":"<p>Specifies the AWS account IDs to exclude from the policy. The <code>IncludeMap</code> values are evaluated first, with all of the appropriate account IDs added to the policy. Then the accounts listed in <code>ExcludeMap</code> are removed, resulting in the final list of accounts to add to the policy.</p> <p>The key to the map is <code>ACCOUNT</code>. For example, a valid <code>ExcludeMap</code> would be <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>"
        }
      },
      "documentation":"<p>An AWS Firewall Manager policy.</p>"
    },
    "PolicyComplianceDetail":{
      "type":"structure",
      "members":{
        "PolicyOwner":{
          "shape":"AWSAccountId",
          "documentation":"<p>The AWS account that created the AWS Firewall Manager policy.</p>"
        },
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The ID of the AWS Firewall Manager policy.</p>"
        },
        "MemberAccount":{
          "shape":"AWSAccountId",
          "documentation":"<p>The AWS account ID.</p>"
        },
        "Violators":{
          "shape":"ComplianceViolators",
          "documentation":"<p>An array of resources that are not protected by the policy.</p>"
        },
        "EvaluationLimitExceeded":{
          "shape":"Boolean",
          "documentation":"<p>Indicates if over 100 resources are non-compliant with the AWS Firewall Manager policy.</p>"
        },
        "ExpiredAt":{
          "shape":"TimeStamp",
          "documentation":"<p>A time stamp that indicates when the returned information should be considered out-of-date.</p>"
        },
        "IssueInfoMap":{
          "shape":"IssueInfoMap",
          "documentation":"<p>Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be non-compliant. The details include the name of the dependent service and the error message recieved indicating the problem with the service.</p>"
        }
      },
      "documentation":"<p>Describes the non-compliant resources in a member account for a specific AWS Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are non-compliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.</p>"
    },
    "PolicyComplianceStatus":{
      "type":"structure",
      "members":{
        "PolicyOwner":{
          "shape":"AWSAccountId",
          "documentation":"<p>The AWS account that created the AWS Firewall Manager policy.</p>"
        },
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The ID of the AWS Firewall Manager policy.</p>"
        },
        "PolicyName":{
          "shape":"ResourceName",
          "documentation":"<p>The friendly name of the AWS Firewall Manager policy.</p>"
        },
        "MemberAccount":{
          "shape":"AWSAccountId",
          "documentation":"<p>The member account ID.</p>"
        },
        "EvaluationResults":{
          "shape":"EvaluationResults",
          "documentation":"<p>An array of <code>EvaluationResult</code> objects.</p>"
        },
        "LastUpdated":{
          "shape":"TimeStamp",
          "documentation":"<p>Time stamp of the last update to the <code>EvaluationResult</code> objects.</p>"
        },
        "IssueInfoMap":{
          "shape":"IssueInfoMap",
          "documentation":"<p>Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be non-compliant. The details include the name of the dependent service and the error message recieved indicating the problem with the service.</p>"
        }
      },
      "documentation":"<p>Indicates whether the account is compliant with the specified policy. An account is considered non-compliant if it includes resources that are not protected by the policy.</p>"
    },
    "PolicyComplianceStatusList":{
      "type":"list",
      "member":{"shape":"PolicyComplianceStatus"}
    },
    "PolicyComplianceStatusType":{
      "type":"string",
      "enum":[
        "COMPLIANT",
        "NON_COMPLIANT"
      ]
    },
    "PolicyId":{
      "type":"string",
      "max":36,
      "min":36
    },
    "PolicySummary":{
      "type":"structure",
      "members":{
        "PolicyArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the specified policy.</p>"
        },
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The ID of the specified policy.</p>"
        },
        "PolicyName":{
          "shape":"ResourceName",
          "documentation":"<p>The friendly name of the specified policy.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of resource to protect with the policy, either an Application Load Balancer or a CloudFront distribution. This is in the format shown in <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html\">AWS Resource Types Reference</a>. Valid values are <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> or <code>AWS::CloudFront::Distribution</code>.</p>"
        },
        "SecurityServiceType":{
          "shape":"SecurityServiceType",
          "documentation":"<p>The service that the policy is using to protect the resources. This value is <code>WAF</code>.</p>"
        },
        "RemediationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Indicates if the policy should be automatically applied to new resources.</p>"
        }
      },
      "documentation":"<p>Details of the AWS Firewall Manager policy. </p>"
    },
    "PolicySummaryList":{
      "type":"list",
      "member":{"shape":"PolicySummary"}
    },
    "PolicyUpdateToken":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "PutNotificationChannelRequest":{
      "type":"structure",
      "required":[
        "SnsTopicArn",
        "SnsRoleName"
      ],
      "members":{
        "SnsTopicArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the SNS topic that collects notifications from AWS Firewall Manager.</p>"
        },
        "SnsRoleName":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record AWS Firewall Manager activity. </p>"
        }
      }
    },
    "PutPolicyRequest":{
      "type":"structure",
      "required":["Policy"],
      "members":{
        "Policy":{
          "shape":"Policy",
          "documentation":"<p>The details of the AWS Firewall Manager policy to be created.</p>"
        }
      }
    },
    "PutPolicyResponse":{
      "type":"structure",
      "members":{
        "Policy":{
          "shape":"Policy",
          "documentation":"<p>The details of the AWS Firewall Manager policy that was created.</p>"
        },
        "PolicyArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the policy that was created.</p>"
        }
      }
    },
    "ResourceArn":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "ResourceCount":{
      "type":"long",
      "min":0
    },
    "ResourceId":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "ResourceName":{
      "type":"string",
      "max":128,
      "min":1
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified resource was not found.</p>",
      "exception":true
    },
    "ResourceTag":{
      "type":"structure",
      "required":["Key"],
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p>The resource tag key.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>The resource tag value.</p>"
        }
      },
      "documentation":"<p>The resource tags that AWS Firewall Manager uses to determine if a particular resource should be included or excluded from protection by the AWS Firewall Manager policy. Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. Tags are combined with an \"OR.\" That is, if you add more than one tag, if any of the tags matches, the resource is considered a match for the include or exclude. <a href=\"https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html\">Working with Tag Editor</a>.</p>"
    },
    "ResourceTags":{
      "type":"list",
      "member":{"shape":"ResourceTag"},
      "max":8,
      "min":0
    },
    "ResourceType":{
      "type":"string",
      "max":128,
      "min":1
    },
    "SecurityServicePolicyData":{
      "type":"structure",
      "required":["Type"],
      "members":{
        "Type":{
          "shape":"SecurityServiceType",
          "documentation":"<p>The service that the policy is using to protect the resources. This value is <code>WAF</code>.</p>"
        },
        "ManagedServiceData":{
          "shape":"ManagedServiceData",
          "documentation":"<p>Details about the service. This contains <code>WAF</code> data in JSON format, as shown in the following example:</p> <p> <code>ManagedServiceData\": \"{\\\"type\\\": \\\"WAF\\\", \\\"ruleGroups\\\": [{\\\"id\\\": \\\"12345678-1bcd-9012-efga-0987654321ab\\\", \\\"overrideAction\\\" : {\\\"type\\\": \\\"COUNT\\\"}}], \\\"defaultAction\\\": {\\\"type\\\": \\\"BLOCK\\\"}}</code> </p>"
        }
      },
      "documentation":"<p>Details about the security service that is being used to protect the resources.</p>"
    },
    "SecurityServiceType":{
      "type":"string",
      "enum":["WAF"]
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TimeStamp":{"type":"timestamp"},
    "ViolationReason":{
      "type":"string",
      "enum":[
        "WEB_ACL_MISSING_RULE_GROUP",
        "RESOURCE_MISSING_WEB_ACL",
        "RESOURCE_INCORRECT_WEB_ACL"
      ]
    }
  },
  "documentation":"<fullname>AWS Firewall Manager</fullname> <p>This is the <i>AWS Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the AWS Firewall Manager API actions, data types, and errors. For detailed information about AWS Firewall Manager features, see the <a href=\"http://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html\">AWS Firewall Manager Developer Guide</a>.</p>"
}
