awsim['autoscaling-plans'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2018-01-06",
    "endpointPrefix":"autoscaling",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Auto Scaling Plans",
    "serviceId":"Auto Scaling Plans",
    "signatureVersion":"v4",
    "signingName":"autoscaling-plans",
    "targetPrefix":"AnyScaleScalingPlannerFrontendService",
    "uid":"autoscaling-plans-2018-01-06"
  },
  "operations":{
    "CreateScalingPlan":{
      "name":"CreateScalingPlan",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateScalingPlanRequest"},
      "output":{"shape":"CreateScalingPlanResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"LimitExceededException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Creates a scaling plan.</p> <p>A scaling plan contains a set of instructions used to configure dynamic scaling for the scalable resources in your application. AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions in your scaling plan.</p>"
    },
    "DeleteScalingPlan":{
      "name":"DeleteScalingPlan",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteScalingPlanRequest"},
      "output":{"shape":"DeleteScalingPlanResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"ObjectNotFoundException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Deletes the specified scaling plan.</p>"
    },
    "DescribeScalingPlanResources":{
      "name":"DescribeScalingPlanResources",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeScalingPlanResourcesRequest"},
      "output":{"shape":"DescribeScalingPlanResourcesResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Describes the scalable resources in the specified scaling plan.</p>"
    },
    "DescribeScalingPlans":{
      "name":"DescribeScalingPlans",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeScalingPlansRequest"},
      "output":{"shape":"DescribeScalingPlansResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Describes the specified scaling plans or all of your scaling plans.</p>"
    },
    "UpdateScalingPlan":{
      "name":"UpdateScalingPlan",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateScalingPlanRequest"},
      "output":{"shape":"UpdateScalingPlanResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"},
        {"shape":"ObjectNotFoundException"}
      ],
      "documentation":"<p>Updates the scaling plan for the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>"
    }
  },
  "shapes":{
    "ApplicationSource":{
      "type":"structure",
      "members":{
        "CloudFormationStackARN":{
          "shape":"XmlString",
          "documentation":"<p>The Amazon Resource Name (ARN) of a CloudFormation stack.</p>"
        },
        "TagFilters":{
          "shape":"TagFilters",
          "documentation":"<p>A set of tags (up to 50).</p>"
        }
      },
      "documentation":"<p>Represents an application source.</p>"
    },
    "ApplicationSources":{
      "type":"list",
      "member":{"shape":"ApplicationSource"}
    },
    "ConcurrentUpdateException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Concurrent updates caused an exception, for example, if you request an update to a scaling plan that already has a pending update.</p>",
      "exception":true
    },
    "Cooldown":{"type":"integer"},
    "CreateScalingPlanRequest":{
      "type":"structure",
      "required":[
        "ScalingPlanName",
        "ApplicationSource",
        "ScalingInstructions"
      ],
      "members":{
        "ScalingPlanName":{
          "shape":"ScalingPlanName",
          "documentation":"<p>The name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.</p>"
        },
        "ApplicationSource":{
          "shape":"ApplicationSource",
          "documentation":"<p>A CloudFormation stack or set of tags. You can create one scaling plan per application source.</p>"
        },
        "ScalingInstructions":{
          "shape":"ScalingInstructions",
          "documentation":"<p>The scaling instructions.</p>"
        }
      }
    },
    "CreateScalingPlanResponse":{
      "type":"structure",
      "required":["ScalingPlanVersion"],
      "members":{
        "ScalingPlanVersion":{
          "shape":"ScalingPlanVersion",
          "documentation":"<p>The version of the scaling plan. This value is always 1.</p>"
        }
      }
    },
    "CustomizedScalingMetricSpecification":{
      "type":"structure",
      "required":[
        "MetricName",
        "Namespace",
        "Statistic"
      ],
      "members":{
        "MetricName":{
          "shape":"MetricName",
          "documentation":"<p>The name of the metric.</p>"
        },
        "Namespace":{
          "shape":"MetricNamespace",
          "documentation":"<p>The namespace of the metric.</p>"
        },
        "Dimensions":{
          "shape":"MetricDimensions",
          "documentation":"<p>The dimensions of the metric.</p>"
        },
        "Statistic":{
          "shape":"MetricStatistic",
          "documentation":"<p>The statistic of the metric.</p>"
        },
        "Unit":{
          "shape":"MetricUnit",
          "documentation":"<p>The unit of the metric.</p>"
        }
      },
      "documentation":"<p>Represents a customized metric for a target tracking policy.</p>"
    },
    "DeleteScalingPlanRequest":{
      "type":"structure",
      "required":[
        "ScalingPlanName",
        "ScalingPlanVersion"
      ],
      "members":{
        "ScalingPlanName":{
          "shape":"ScalingPlanName",
          "documentation":"<p>The name of the scaling plan.</p>"
        },
        "ScalingPlanVersion":{
          "shape":"ScalingPlanVersion",
          "documentation":"<p>The version of the scaling plan.</p>"
        }
      }
    },
    "DeleteScalingPlanResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeScalingPlanResourcesRequest":{
      "type":"structure",
      "required":[
        "ScalingPlanName",
        "ScalingPlanVersion"
      ],
      "members":{
        "ScalingPlanName":{
          "shape":"ScalingPlanName",
          "documentation":"<p>The name of the scaling plan.</p>"
        },
        "ScalingPlanVersion":{
          "shape":"ScalingPlanVersion",
          "documentation":"<p>The version of the scaling plan.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of scalable resources to return. This value can be between 1 and 50. The default value is 50.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>"
        }
      }
    },
    "DescribeScalingPlanResourcesResponse":{
      "type":"structure",
      "members":{
        "ScalingPlanResources":{
          "shape":"ScalingPlanResources",
          "documentation":"<p>Information about the scalable resources.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>"
        }
      }
    },
    "DescribeScalingPlansRequest":{
      "type":"structure",
      "members":{
        "ScalingPlanNames":{
          "shape":"ScalingPlanNames",
          "documentation":"<p>The names of the scaling plans (up to 10). If you specify application sources, you cannot specify scaling plan names.</p>"
        },
        "ScalingPlanVersion":{
          "shape":"ScalingPlanVersion",
          "documentation":"<p>The version of the scaling plan. If you specify a scaling plan version, you must also specify a scaling plan name.</p>"
        },
        "ApplicationSources":{
          "shape":"ApplicationSources",
          "documentation":"<p>The sources for the applications (up to 10). If you specify scaling plan names, you cannot specify application sources.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of scalable resources to return. This value can be between 1 and 50. The default value is 50.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>"
        }
      }
    },
    "DescribeScalingPlansResponse":{
      "type":"structure",
      "members":{
        "ScalingPlans":{
          "shape":"ScalingPlans",
          "documentation":"<p>Information about the scaling plans.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>"
        }
      }
    },
    "DisableScaleIn":{"type":"boolean"},
    "ErrorMessage":{"type":"string"},
    "InternalServiceException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The service encountered an internal error.</p>",
      "exception":true
    },
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The token provided is not valid.</p>",
      "exception":true
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Your account exceeded a limit. This exception is thrown when a per-account resource limit is exceeded.</p>",
      "exception":true
    },
    "MaxResults":{"type":"integer"},
    "MetricDimension":{
      "type":"structure",
      "required":[
        "Name",
        "Value"
      ],
      "members":{
        "Name":{
          "shape":"MetricDimensionName",
          "documentation":"<p>The name of the dimension.</p>"
        },
        "Value":{
          "shape":"MetricDimensionValue",
          "documentation":"<p>The value of the dimension.</p>"
        }
      },
      "documentation":"<p>Represents a dimension for a customized metric.</p>"
    },
    "MetricDimensionName":{"type":"string"},
    "MetricDimensionValue":{"type":"string"},
    "MetricDimensions":{
      "type":"list",
      "member":{"shape":"MetricDimension"}
    },
    "MetricName":{"type":"string"},
    "MetricNamespace":{"type":"string"},
    "MetricScale":{"type":"double"},
    "MetricStatistic":{
      "type":"string",
      "enum":[
        "Average",
        "Minimum",
        "Maximum",
        "SampleCount",
        "Sum"
      ]
    },
    "MetricUnit":{"type":"string"},
    "NextToken":{"type":"string"},
    "ObjectNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified object could not be found.</p>",
      "exception":true
    },
    "PolicyName":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"\\p{Print}+"
    },
    "PolicyType":{
      "type":"string",
      "enum":["TargetTrackingScaling"]
    },
    "PredefinedScalingMetricSpecification":{
      "type":"structure",
      "required":["PredefinedScalingMetricType"],
      "members":{
        "PredefinedScalingMetricType":{
          "shape":"ScalingMetricType",
          "documentation":"<p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to Auto Scaling groups, Sport Fleet requests, and ECS services.</p>"
        },
        "ResourceLabel":{
          "shape":"ResourceLabel",
          "documentation":"<p>Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.</p> <p>The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:</p> <ul> <li> <p>app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN</p> </li> <li> <p>targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Represents a predefined metric for a target tracking policy.</p>"
    },
    "ResourceCapacity":{"type":"integer"},
    "ResourceIdMaxLen1600":{
      "type":"string",
      "max":1600,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "ResourceLabel":{
      "type":"string",
      "max":1023,
      "min":1
    },
    "ScalableDimension":{
      "type":"string",
      "enum":[
        "autoscaling:autoScalingGroup:DesiredCapacity",
        "ecs:service:DesiredCount",
        "ec2:spot-fleet-request:TargetCapacity",
        "rds:cluster:ReadReplicaCount",
        "dynamodb:table:ReadCapacityUnits",
        "dynamodb:table:WriteCapacityUnits",
        "dynamodb:index:ReadCapacityUnits",
        "dynamodb:index:WriteCapacityUnits"
      ]
    },
    "ScalingInstruction":{
      "type":"structure",
      "required":[
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension",
        "MinCapacity",
        "MaxCapacity",
        "TargetTrackingConfigurations"
      ],
      "members":{
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The ID of the resource. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p> </li> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension associated with the resource.</p> <ul> <li> <p> <code>autoscaling:autoScalingGroup:DesiredCapacity</code> - The desired capacity of an Auto Scaling group.</p> </li> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> </ul>"
        },
        "MinCapacity":{
          "shape":"ResourceCapacity",
          "documentation":"<p>The minimum value to scale to in response to a scale in event.</p>"
        },
        "MaxCapacity":{
          "shape":"ResourceCapacity",
          "documentation":"<p>The maximum value to scale to in response to a scale out event.</p>"
        },
        "TargetTrackingConfigurations":{
          "shape":"TargetTrackingConfigurations",
          "documentation":"<p>The target tracking scaling policies (up to 10).</p>"
        }
      },
      "documentation":"<p>Specifies the scaling configuration for a scalable resource.</p>"
    },
    "ScalingInstructions":{
      "type":"list",
      "member":{"shape":"ScalingInstruction"}
    },
    "ScalingMetricType":{
      "type":"string",
      "enum":[
        "ASGAverageCPUUtilization",
        "ASGAverageNetworkIn",
        "ASGAverageNetworkOut",
        "DynamoDBReadCapacityUtilization",
        "DynamoDBWriteCapacityUtilization",
        "ECSServiceAverageCPUUtilization",
        "ECSServiceAverageMemoryUtilization",
        "ALBRequestCountPerTarget",
        "RDSReaderAverageCPUUtilization",
        "RDSReaderAverageDatabaseConnections",
        "EC2SpotFleetRequestAverageCPUUtilization",
        "EC2SpotFleetRequestAverageNetworkIn",
        "EC2SpotFleetRequestAverageNetworkOut"
      ]
    },
    "ScalingPlan":{
      "type":"structure",
      "required":[
        "ScalingPlanName",
        "ScalingPlanVersion",
        "ApplicationSource",
        "ScalingInstructions",
        "StatusCode"
      ],
      "members":{
        "ScalingPlanName":{
          "shape":"ScalingPlanName",
          "documentation":"<p>The name of the scaling plan.</p>"
        },
        "ScalingPlanVersion":{
          "shape":"ScalingPlanVersion",
          "documentation":"<p>The version of the scaling plan.</p>"
        },
        "ApplicationSource":{
          "shape":"ApplicationSource",
          "documentation":"<p>The application source.</p>"
        },
        "ScalingInstructions":{
          "shape":"ScalingInstructions",
          "documentation":"<p>The scaling instructions.</p>"
        },
        "StatusCode":{
          "shape":"ScalingPlanStatusCode",
          "documentation":"<p>The status of the scaling plan.</p> <ul> <li> <p> <code>Active</code> - The scaling plan is active.</p> </li> <li> <p> <code>ActiveWithProblems</code> - The scaling plan is active, but the scaling configuration for one or more resources could not be applied.</p> </li> <li> <p> <code>CreationInProgress</code> - The scaling plan is being created.</p> </li> <li> <p> <code>CreationFailed</code> - The scaling plan could not be created.</p> </li> <li> <p> <code>DeletionInProgress</code> - The scaling plan is being deleted.</p> </li> <li> <p> <code>DeletionFailed</code> - The scaling plan could not be deleted.</p> </li> </ul>"
        },
        "StatusMessage":{
          "shape":"XmlString",
          "documentation":"<p>A simple message about the current status of the scaling plan.</p>"
        },
        "StatusStartTime":{
          "shape":"TimestampType",
          "documentation":"<p>The Unix timestamp when the scaling plan entered the current status.</p>"
        },
        "CreationTime":{
          "shape":"TimestampType",
          "documentation":"<p>The Unix timestamp when the scaling plan was created.</p>"
        }
      },
      "documentation":"<p>Represents a scaling plan.</p>"
    },
    "ScalingPlanName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[\\p{Print}&&[^|:/]]+"
    },
    "ScalingPlanNames":{
      "type":"list",
      "member":{"shape":"ScalingPlanName"}
    },
    "ScalingPlanResource":{
      "type":"structure",
      "required":[
        "ScalingPlanName",
        "ScalingPlanVersion",
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension",
        "ScalingStatusCode"
      ],
      "members":{
        "ScalingPlanName":{
          "shape":"ScalingPlanName",
          "documentation":"<p>The name of the scaling plan.</p>"
        },
        "ScalingPlanVersion":{
          "shape":"ScalingPlanVersion",
          "documentation":"<p>The version of the scaling plan.</p>"
        },
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The ID of the resource. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p> </li> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension for the resource.</p> <ul> <li> <p> <code>autoscaling:autoScalingGroup:DesiredCapacity</code> - The desired capacity of an Auto Scaling group.</p> </li> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> </ul>"
        },
        "ScalingPolicies":{
          "shape":"ScalingPolicies",
          "documentation":"<p>The scaling policies.</p>"
        },
        "ScalingStatusCode":{
          "shape":"ScalingStatusCode",
          "documentation":"<p>The scaling status of the resource.</p> <ul> <li> <p> <code>Active</code> - The scaling configuration is active.</p> </li> <li> <p> <code>Inactive</code> - The scaling configuration is not active because the scaling plan is being created or the scaling configuration could not be applied. Check the status message for more information.</p> </li> <li> <p> <code>PartiallyActive</code> - The scaling configuration is partially active because the scaling plan is being created or deleted or the scaling configuration could not be fully applied. Check the status message for more information.</p> </li> </ul>"
        },
        "ScalingStatusMessage":{
          "shape":"XmlString",
          "documentation":"<p>A simple message about the current scaling status of the resource.</p>"
        }
      },
      "documentation":"<p>Represents a scalable resource.</p>"
    },
    "ScalingPlanResources":{
      "type":"list",
      "member":{"shape":"ScalingPlanResource"}
    },
    "ScalingPlanStatusCode":{
      "type":"string",
      "enum":[
        "Active",
        "ActiveWithProblems",
        "CreationInProgress",
        "CreationFailed",
        "DeletionInProgress",
        "DeletionFailed",
        "UpdateInProgress",
        "UpdateFailed"
      ]
    },
    "ScalingPlanVersion":{"type":"long"},
    "ScalingPlans":{
      "type":"list",
      "member":{"shape":"ScalingPlan"}
    },
    "ScalingPolicies":{
      "type":"list",
      "member":{"shape":"ScalingPolicy"}
    },
    "ScalingPolicy":{
      "type":"structure",
      "required":[
        "PolicyName",
        "PolicyType"
      ],
      "members":{
        "PolicyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the scaling policy.</p>"
        },
        "PolicyType":{
          "shape":"PolicyType",
          "documentation":"<p>The type of scaling policy.</p>"
        },
        "TargetTrackingConfiguration":{
          "shape":"TargetTrackingConfiguration",
          "documentation":"<p>The target tracking scaling policy.</p>"
        }
      },
      "documentation":"<p>Represents a scaling policy.</p>"
    },
    "ScalingStatusCode":{
      "type":"string",
      "enum":[
        "Inactive",
        "PartiallyActive",
        "Active"
      ]
    },
    "ServiceNamespace":{
      "type":"string",
      "enum":[
        "autoscaling",
        "ecs",
        "ec2",
        "rds",
        "dynamodb"
      ]
    },
    "TagFilter":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"XmlStringMaxLen128",
          "documentation":"<p>The tag key.</p>"
        },
        "Values":{
          "shape":"TagValues",
          "documentation":"<p>The tag values (0 to 20).</p>"
        }
      },
      "documentation":"<p>Represents a tag.</p>"
    },
    "TagFilters":{
      "type":"list",
      "member":{"shape":"TagFilter"}
    },
    "TagValues":{
      "type":"list",
      "member":{"shape":"XmlStringMaxLen256"}
    },
    "TargetTrackingConfiguration":{
      "type":"structure",
      "required":["TargetValue"],
      "members":{
        "PredefinedScalingMetricSpecification":{
          "shape":"PredefinedScalingMetricSpecification",
          "documentation":"<p>A predefined metric.</p>"
        },
        "CustomizedScalingMetricSpecification":{
          "shape":"CustomizedScalingMetricSpecification",
          "documentation":"<p>A customized metric.</p>"
        },
        "TargetValue":{
          "shape":"MetricScale",
          "documentation":"<p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).</p>"
        },
        "DisableScaleIn":{
          "shape":"DisableScaleIn",
          "documentation":"<p>Indicates whether scale in by the target tracking policy is disabled. If the value is <code>true</code>, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is <code>false</code>.</p>"
        },
        "ScaleOutCooldown":{
          "shape":"Cooldown",
          "documentation":"<p>The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. This value is not used if the scalable resource is an Auto Scaling group.</p> <p>While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.</p>"
        },
        "ScaleInCooldown":{
          "shape":"Cooldown",
          "documentation":"<p>The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.</p> <p>The cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, AWS Auto Scaling scales out your scalable target immediately.</p>"
        },
        "EstimatedInstanceWarmup":{
          "shape":"Cooldown",
          "documentation":"<p>The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.</p>"
        }
      },
      "documentation":"<p>Represents a target tracking scaling policy.</p>"
    },
    "TargetTrackingConfigurations":{
      "type":"list",
      "member":{"shape":"TargetTrackingConfiguration"}
    },
    "TimestampType":{"type":"timestamp"},
    "UpdateScalingPlanRequest":{
      "type":"structure",
      "required":[
        "ScalingPlanName",
        "ScalingPlanVersion"
      ],
      "members":{
        "ApplicationSource":{
          "shape":"ApplicationSource",
          "documentation":"<p>A CloudFormation stack or set of tags.</p>"
        },
        "ScalingPlanName":{
          "shape":"ScalingPlanName",
          "documentation":"<p>The name of the scaling plan.</p>"
        },
        "ScalingInstructions":{
          "shape":"ScalingInstructions",
          "documentation":"<p>The scaling instructions.</p>"
        },
        "ScalingPlanVersion":{
          "shape":"ScalingPlanVersion",
          "documentation":"<p>The version number.</p>"
        }
      }
    },
    "UpdateScalingPlanResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ValidationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>An exception was thrown for a validation issue. Review the parameters provided.</p>",
      "exception":true
    },
    "XmlString":{
      "type":"string",
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "XmlStringMaxLen128":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "XmlStringMaxLen256":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    }
  },
  "documentation":"<fullname>AWS Auto Scaling</fullname> <p>Use AWS Auto Scaling to quickly discover all the scalable AWS resources for your application and configure dynamic scaling for your scalable resources.</p> <p>To get started, create a scaling plan with a set of instructions used to configure dynamic scaling for the scalable resources in your application. AWS Auto Scaling creates target tracking scaling policies for the scalable resources in your scaling plan. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified.</p>"
}
