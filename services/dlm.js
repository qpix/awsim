awsim['dlm'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2018-01-12",
    "endpointPrefix":"dlm",
    "jsonVersion":"1.1",
    "protocol":"rest-json",
    "serviceAbbreviation":"Amazon DLM",
    "serviceFullName":"Amazon Data Lifecycle Manager",
    "serviceId":"DLM",
    "signatureVersion":"v4",
    "signingName":"dlm",
    "uid":"dlm-2018-01-12"
  },
  "operations":{
    "CreateLifecyclePolicy":{
      "name":"CreateLifecyclePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/policies"
      },
      "input":{"shape":"CreateLifecyclePolicyRequest"},
      "output":{"shape":"CreateLifecyclePolicyResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Creates a policy to manage the lifecycle of the specified AWS resources. You can create up to 100 lifecycle policies.</p>"
    },
    "DeleteLifecyclePolicy":{
      "name":"DeleteLifecyclePolicy",
      "http":{
        "method":"DELETE",
        "requestUri":"/policies/{policyId}/"
      },
      "input":{"shape":"DeleteLifecyclePolicyRequest"},
      "output":{"shape":"DeleteLifecyclePolicyResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalServerException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p>"
    },
    "GetLifecyclePolicies":{
      "name":"GetLifecyclePolicies",
      "http":{
        "method":"GET",
        "requestUri":"/policies"
      },
      "input":{"shape":"GetLifecyclePoliciesRequest"},
      "output":{"shape":"GetLifecyclePoliciesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServerException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>"
    },
    "GetLifecyclePolicy":{
      "name":"GetLifecyclePolicy",
      "http":{
        "method":"GET",
        "requestUri":"/policies/{policyId}/"
      },
      "input":{"shape":"GetLifecyclePolicyRequest"},
      "output":{"shape":"GetLifecyclePolicyResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalServerException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Gets detailed information about the specified lifecycle policy.</p>"
    },
    "UpdateLifecyclePolicy":{
      "name":"UpdateLifecyclePolicy",
      "http":{
        "method":"PATCH",
        "requestUri":"/policies/{policyId}"
      },
      "input":{"shape":"UpdateLifecyclePolicyRequest"},
      "output":{"shape":"UpdateLifecyclePolicyResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServerException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Updates the specified lifecycle policy.</p>"
    }
  },
  "shapes":{
    "Count":{
      "type":"integer",
      "max":1000,
      "min":1
    },
    "CreateLifecyclePolicyRequest":{
      "type":"structure",
      "required":[
        "ExecutionRoleArn",
        "Description",
        "State",
        "PolicyDetails"
      ],
      "members":{
        "ExecutionRoleArn":{
          "shape":"ExecutionRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>"
        },
        "Description":{
          "shape":"PolicyDescription",
          "documentation":"<p>A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.</p>"
        },
        "State":{
          "shape":"SettablePolicyStateValues",
          "documentation":"<p>The desired activation state of the lifecycle policy after creation.</p>"
        },
        "PolicyDetails":{
          "shape":"PolicyDetails",
          "documentation":"<p>The configuration details of the lifecycle policy.</p> <p>Target tags cannot be re-used across lifecycle policies.</p>"
        }
      }
    },
    "CreateLifecyclePolicyResponse":{
      "type":"structure",
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The identifier of the lifecycle policy.</p>"
        }
      }
    },
    "CreateRule":{
      "type":"structure",
      "required":[
        "Interval",
        "IntervalUnit"
      ],
      "members":{
        "Interval":{
          "shape":"Interval",
          "documentation":"<p>The interval. The supported values are 12 and 24.</p>"
        },
        "IntervalUnit":{
          "shape":"IntervalUnitValues",
          "documentation":"<p>The interval unit.</p>"
        },
        "Times":{
          "shape":"TimesList",
          "documentation":"<p>The time, in UTC, to start the operation.</p> <p>The operation occurs within a one-hour window following the specified time.</p>"
        }
      },
      "documentation":"<p>Specifies when to create snapshots of EBS volumes.</p>"
    },
    "DeleteLifecyclePolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The identifier of the lifecycle policy.</p>",
          "location":"uri",
          "locationName":"policyId"
        }
      }
    },
    "DeleteLifecyclePolicyResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ErrorCode":{"type":"string"},
    "ErrorMessage":{"type":"string"},
    "ExecutionRoleArn":{"type":"string"},
    "GetLifecyclePoliciesRequest":{
      "type":"structure",
      "members":{
        "PolicyIds":{
          "shape":"PolicyIdList",
          "documentation":"<p>The identifiers of the data lifecycle policies.</p>",
          "location":"querystring",
          "locationName":"policyIds"
        },
        "State":{
          "shape":"GettablePolicyStateValues",
          "documentation":"<p>The activation state.</p>",
          "location":"querystring",
          "locationName":"state"
        },
        "ResourceTypes":{
          "shape":"ResourceTypeValuesList",
          "documentation":"<p>The resource type.</p>",
          "location":"querystring",
          "locationName":"resourceTypes"
        },
        "TargetTags":{
          "shape":"TargetTagsFilterList",
          "documentation":"<p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>",
          "location":"querystring",
          "locationName":"targetTags"
        },
        "TagsToAdd":{
          "shape":"TagsToAddFilterList",
          "documentation":"<p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the AWS-added lifecycle tags.</p>",
          "location":"querystring",
          "locationName":"tagsToAdd"
        }
      }
    },
    "GetLifecyclePoliciesResponse":{
      "type":"structure",
      "members":{
        "Policies":{
          "shape":"LifecyclePolicySummaryList",
          "documentation":"<p>Summary information about the lifecycle policies.</p>"
        }
      }
    },
    "GetLifecyclePolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The identifier of the lifecycle policy.</p>",
          "location":"uri",
          "locationName":"policyId"
        }
      }
    },
    "GetLifecyclePolicyResponse":{
      "type":"structure",
      "members":{
        "Policy":{
          "shape":"LifecyclePolicy",
          "documentation":"<p>Detailed information about the lifecycle policy.</p>"
        }
      }
    },
    "GettablePolicyStateValues":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED",
        "ERROR"
      ]
    },
    "InternalServerException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"},
        "Code":{"shape":"ErrorCode"}
      },
      "documentation":"<p>The service failed in an unexpected way.</p>",
      "error":{"httpStatusCode":500},
      "exception":true
    },
    "Interval":{
      "type":"integer",
      "min":1
    },
    "IntervalUnitValues":{
      "type":"string",
      "enum":["HOURS"]
    },
    "InvalidRequestException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"},
        "Code":{"shape":"ErrorCode"},
        "RequiredParameters":{
          "shape":"ParameterList",
          "documentation":"<p>The request omitted one or more required parameters.</p>"
        },
        "MutuallyExclusiveParameters":{
          "shape":"ParameterList",
          "documentation":"<p>The request included parameters that cannot be provided together.</p>"
        }
      },
      "documentation":"<p>Bad request. The request is missing required parameters or has invalid parameters.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "LifecyclePolicy":{
      "type":"structure",
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The identifier of the lifecycle policy.</p>"
        },
        "Description":{
          "shape":"PolicyDescription",
          "documentation":"<p>The description of the lifecycle policy.</p>"
        },
        "State":{
          "shape":"GettablePolicyStateValues",
          "documentation":"<p>The activation state of the lifecycle policy.</p>"
        },
        "ExecutionRoleArn":{
          "shape":"ExecutionRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>"
        },
        "DateCreated":{
          "shape":"Timestamp",
          "documentation":"<p>The local date and time when the lifecycle policy was created.</p>"
        },
        "DateModified":{
          "shape":"Timestamp",
          "documentation":"<p>The local date and time when the lifecycle policy was last modified.</p>"
        },
        "PolicyDetails":{
          "shape":"PolicyDetails",
          "documentation":"<p>The configuration of the lifecycle policy</p>"
        }
      },
      "documentation":"<p>Detailed information about a lifecycle policy.</p>"
    },
    "LifecyclePolicySummary":{
      "type":"structure",
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The identifier of the lifecycle policy.</p>"
        },
        "Description":{
          "shape":"PolicyDescription",
          "documentation":"<p>The description of the lifecycle policy.</p>"
        },
        "State":{
          "shape":"GettablePolicyStateValues",
          "documentation":"<p>The activation state of the lifecycle policy.</p>"
        }
      },
      "documentation":"<p>Summary information about a lifecycle policy.</p>"
    },
    "LifecyclePolicySummaryList":{
      "type":"list",
      "member":{"shape":"LifecyclePolicySummary"}
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"},
        "Code":{"shape":"ErrorCode"},
        "ResourceType":{
          "shape":"String",
          "documentation":"<p>Value is the type of resource for which a limit was exceeded.</p>"
        }
      },
      "documentation":"<p>The request failed because a limit was exceeded.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "Parameter":{"type":"string"},
    "ParameterList":{
      "type":"list",
      "member":{"shape":"Parameter"}
    },
    "PolicyDescription":{
      "type":"string",
      "max":500,
      "min":0
    },
    "PolicyDetails":{
      "type":"structure",
      "members":{
        "ResourceTypes":{
          "shape":"ResourceTypeValuesList",
          "documentation":"<p>The resource type.</p>"
        },
        "TargetTags":{
          "shape":"TargetTagList",
          "documentation":"<p>The single tag that identifies targeted resources for this policy.</p>"
        },
        "Schedules":{
          "shape":"ScheduleList",
          "documentation":"<p>The schedule of policy-defined actions.</p>"
        }
      },
      "documentation":"<p>Specifies the configuration of a lifecycle policy.</p>"
    },
    "PolicyId":{"type":"string"},
    "PolicyIdList":{
      "type":"list",
      "member":{"shape":"PolicyId"}
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"},
        "Code":{"shape":"ErrorCode"},
        "ResourceType":{
          "shape":"String",
          "documentation":"<p>Value is the type of resource that was not found.</p>"
        },
        "ResourceIds":{
          "shape":"PolicyIdList",
          "documentation":"<p>Value is a list of resource IDs that were not found.</p>"
        }
      },
      "documentation":"<p>A requested resource was not found.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "ResourceTypeValues":{
      "type":"string",
      "enum":["VOLUME"]
    },
    "ResourceTypeValuesList":{
      "type":"list",
      "member":{"shape":"ResourceTypeValues"},
      "max":1,
      "min":1
    },
    "RetainRule":{
      "type":"structure",
      "required":["Count"],
      "members":{
        "Count":{
          "shape":"Count",
          "documentation":"<p>The number of snapshots to keep for each volume, up to a maximum of 1000.</p>"
        }
      },
      "documentation":"<p>Specifies the number of snapshots to keep for each EBS volume.</p>"
    },
    "Schedule":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"ScheduleName",
          "documentation":"<p>The name of the schedule.</p>"
        },
        "TagsToAdd":{
          "shape":"TagsToAddList",
          "documentation":"<p>The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.</p>"
        },
        "CreateRule":{
          "shape":"CreateRule",
          "documentation":"<p>The create rule.</p>"
        },
        "RetainRule":{
          "shape":"RetainRule",
          "documentation":"<p>The retain rule.</p>"
        }
      },
      "documentation":"<p>Specifies a schedule.</p>"
    },
    "ScheduleList":{
      "type":"list",
      "member":{"shape":"Schedule"},
      "max":1,
      "min":1
    },
    "ScheduleName":{
      "type":"string",
      "max":500,
      "min":0
    },
    "SettablePolicyStateValues":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED"
      ]
    },
    "String":{"type":"string"},
    "Tag":{
      "type":"structure",
      "required":[
        "Key",
        "Value"
      ],
      "members":{
        "Key":{
          "shape":"String",
          "documentation":"<p>The tag key.</p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p>The tag value.</p>"
        }
      },
      "documentation":"<p>Specifies a tag for a resource.</p>"
    },
    "TagFilter":{"type":"string"},
    "TagsToAddFilterList":{
      "type":"list",
      "member":{"shape":"TagFilter"},
      "max":50,
      "min":0
    },
    "TagsToAddList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":50,
      "min":0
    },
    "TargetTagList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":50,
      "min":1
    },
    "TargetTagsFilterList":{
      "type":"list",
      "member":{"shape":"TagFilter"},
      "max":50,
      "min":1
    },
    "Time":{
      "type":"string",
      "pattern":"^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
    },
    "TimesList":{
      "type":"list",
      "member":{"shape":"Time"},
      "max":1
    },
    "Timestamp":{"type":"timestamp"},
    "UpdateLifecyclePolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The identifier of the lifecycle policy.</p>",
          "location":"uri",
          "locationName":"policyId"
        },
        "ExecutionRoleArn":{
          "shape":"ExecutionRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>"
        },
        "State":{
          "shape":"SettablePolicyStateValues",
          "documentation":"<p>The desired activation state of the lifecycle policy after creation.</p>"
        },
        "Description":{
          "shape":"PolicyDescription",
          "documentation":"<p>A description of the lifecycle policy.</p>"
        },
        "PolicyDetails":{
          "shape":"PolicyDetails",
          "documentation":"<p>The configuration of the lifecycle policy.</p> <p>Target tags cannot be re-used across policies.</p>"
        }
      }
    },
    "UpdateLifecyclePolicyResponse":{
      "type":"structure",
      "members":{
      }
    }
  },
  "documentation":"<fullname>Amazon Data Lifecycle Manager</fullname> <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your AWS resources. You create lifecycle policies, which are used to automate operations on the specified resources.</p> <p>Amazon DLM supports Amazon EBS volumes and snapshots. For information about using Amazon DLM with Amazon EBS, see <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\">Automating the Amazon EBS Snapshot Lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p>"
}
