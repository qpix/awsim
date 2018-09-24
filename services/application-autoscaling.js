awsim['application-autoscaling'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-02-06",
    "endpointPrefix":"autoscaling",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Application Auto Scaling",
    "serviceId":"Application Auto Scaling",
    "signatureVersion":"v4",
    "signingName":"application-autoscaling",
    "targetPrefix":"AnyScaleFrontendService",
    "uid":"application-autoscaling-2016-02-06"
  },
  "operations":{
    "DeleteScalingPolicy":{
      "name":"DeleteScalingPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteScalingPolicyRequest"},
      "output":{"shape":"DeleteScalingPolicyResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"ObjectNotFoundException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Deletes the specified Application Auto Scaling scaling policy.</p> <p>Deleting a policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>To create a scaling policy or update an existing one, see <a>PutScalingPolicy</a>.</p>"
    },
    "DeleteScheduledAction":{
      "name":"DeleteScheduledAction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteScheduledActionRequest"},
      "output":{"shape":"DeleteScheduledActionResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"ObjectNotFoundException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Deletes the specified Application Auto Scaling scheduled action.</p>"
    },
    "DeregisterScalableTarget":{
      "name":"DeregisterScalableTarget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeregisterScalableTargetRequest"},
      "output":{"shape":"DeregisterScalableTargetResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"ObjectNotFoundException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Deregisters a scalable target.</p> <p>Deregistering a scalable target deletes the scaling policies that are associated with it.</p> <p>To create a scalable target or update an existing one, see <a>RegisterScalableTarget</a>.</p>"
    },
    "DescribeScalableTargets":{
      "name":"DescribeScalableTargets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeScalableTargetsRequest"},
      "output":{"shape":"DescribeScalableTargetsResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using the <code>ResourceIds</code> and <code>ScalableDimension</code> parameters.</p> <p>To create a scalable target or update an existing one, see <a>RegisterScalableTarget</a>. If you are no longer using a scalable target, you can deregister it using <a>DeregisterScalableTarget</a>.</p>"
    },
    "DescribeScalingActivities":{
      "name":"DescribeScalingActivities",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeScalingActivitiesRequest"},
      "output":{"shape":"DescribeScalingActivitiesResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using the <code>ResourceId</code> and <code>ScalableDimension</code> parameters.</p> <p>Scaling activities are triggered by CloudWatch alarms that are associated with scaling policies. To view the scaling policies for a service namespace, see <a>DescribeScalingPolicies</a>. To create a scaling policy or update an existing one, see <a>PutScalingPolicy</a>.</p>"
    },
    "DescribeScalingPolicies":{
      "name":"DescribeScalingPolicies",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeScalingPoliciesRequest"},
      "output":{"shape":"DescribeScalingPoliciesResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"FailedResourceAccessException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Describes the scaling policies for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code> parameters.</p> <p>To create a scaling policy or update an existing one, see <a>PutScalingPolicy</a>. If you are no longer using a scaling policy, you can delete it using <a>DeleteScalingPolicy</a>.</p>"
    },
    "DescribeScheduledActions":{
      "name":"DescribeScheduledActions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeScheduledActionsRequest"},
      "output":{"shape":"DescribeScheduledActionsResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Describes the scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>To create a scheduled action or update an existing one, see <a>PutScheduledAction</a>. If you are no longer using a scheduled action, you can delete it using <a>DeleteScheduledAction</a>.</p>"
    },
    "PutScalingPolicy":{
      "name":"PutScalingPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutScalingPolicyRequest"},
      "output":{"shape":"PutScalingPolicyResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"LimitExceededException"},
        {"shape":"ObjectNotFoundException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"FailedResourceAccessException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Creates or updates a policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you register the scalable target using <a>RegisterScalableTarget</a>.</p> <p>To update a policy, specify its policy name and the parameters that you want to change. Any parameters that you don't specify are not changed by this update request.</p> <p>You can view the scaling policies for a service namespace using <a>DescribeScalingPolicies</a>. If you are no longer using a scaling policy, you can delete it using <a>DeleteScalingPolicy</a>.</p>"
    },
    "PutScheduledAction":{
      "name":"PutScheduledAction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutScheduledActionRequest"},
      "output":{"shape":"PutScheduledActionResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"LimitExceededException"},
        {"shape":"ObjectNotFoundException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Creates or updates a scheduled action for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you register the scalable target using <a>RegisterScalableTarget</a>.</p> <p>To update an action, specify its name and the parameters that you want to change. If you don't specify start and end times, the old values are deleted. Any other parameters that you don't specify are not changed by this update request.</p> <p>You can view the scheduled actions using <a>DescribeScheduledActions</a>. If you are no longer using a scheduled action, you can delete it using <a>DeleteScheduledAction</a>.</p>"
    },
    "RegisterScalableTarget":{
      "name":"RegisterScalableTarget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RegisterScalableTargetRequest"},
      "output":{"shape":"RegisterScalableTargetResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"LimitExceededException"},
        {"shape":"ConcurrentUpdateException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Registers or updates a scalable target. A scalable target is a resource that Application Auto Scaling can scale out or scale in. After you have registered a scalable target, you can use this operation to update the minimum and maximum values for its scalable dimension.</p> <p>After you register a scalable target, you can create and apply scaling policies using <a>PutScalingPolicy</a>. You can view the scaling policies for a service namespace using <a>DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it using <a>DeregisterScalableTarget</a>.</p>"
    }
  },
  "shapes":{
    "AdjustmentType":{
      "type":"string",
      "enum":[
        "ChangeInCapacity",
        "PercentChangeInCapacity",
        "ExactCapacity"
      ]
    },
    "Alarm":{
      "type":"structure",
      "required":[
        "AlarmName",
        "AlarmARN"
      ],
      "members":{
        "AlarmName":{
          "shape":"ResourceId",
          "documentation":"<p>The name of the alarm.</p>"
        },
        "AlarmARN":{
          "shape":"ResourceId",
          "documentation":"<p>The Amazon Resource Name (ARN) of the alarm.</p>"
        }
      },
      "documentation":"<p>Represents a CloudWatch alarm associated with a scaling policy.</p>"
    },
    "Alarms":{
      "type":"list",
      "member":{"shape":"Alarm"}
    },
    "ConcurrentUpdateException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>",
      "exception":true
    },
    "Cooldown":{"type":"integer"},
    "CustomizedMetricSpecification":{
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
      "documentation":"<p>Configures a customized metric for a target tracking policy.</p>"
    },
    "DeleteScalingPolicyRequest":{
      "type":"structure",
      "required":[
        "PolicyName",
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension"
      ],
      "members":{
        "PolicyName":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The name of the scaling policy.</p>"
        },
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        }
      }
    },
    "DeleteScalingPolicyResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteScheduledActionRequest":{
      "type":"structure",
      "required":[
        "ServiceNamespace",
        "ScheduledActionName",
        "ResourceId"
      ],
      "members":{
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ScheduledActionName":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The name of the scheduled action.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        }
      }
    },
    "DeleteScheduledActionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeregisterScalableTargetRequest":{
      "type":"structure",
      "required":[
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension"
      ],
      "members":{
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        }
      }
    },
    "DeregisterScalableTargetResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeScalableTargetsRequest":{
      "type":"structure",
      "required":["ServiceNamespace"],
      "members":{
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceIds":{
          "shape":"ResourceIdsMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>"
        },
        "NextToken":{
          "shape":"XmlString",
          "documentation":"<p>The token for the next set of results.</p>"
        }
      }
    },
    "DescribeScalableTargetsResponse":{
      "type":"structure",
      "members":{
        "ScalableTargets":{
          "shape":"ScalableTargets",
          "documentation":"<p>The scalable targets that match the request parameters.</p>"
        },
        "NextToken":{
          "shape":"XmlString",
          "documentation":"<p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>"
        }
      }
    },
    "DescribeScalingActivitiesRequest":{
      "type":"structure",
      "required":["ServiceNamespace"],
      "members":{
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>"
        },
        "NextToken":{
          "shape":"XmlString",
          "documentation":"<p>The token for the next set of results.</p>"
        }
      }
    },
    "DescribeScalingActivitiesResponse":{
      "type":"structure",
      "members":{
        "ScalingActivities":{
          "shape":"ScalingActivities",
          "documentation":"<p>A list of scaling activity objects.</p>"
        },
        "NextToken":{
          "shape":"XmlString",
          "documentation":"<p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>"
        }
      }
    },
    "DescribeScalingPoliciesRequest":{
      "type":"structure",
      "required":["ServiceNamespace"],
      "members":{
        "PolicyNames":{
          "shape":"ResourceIdsMaxLen1600",
          "documentation":"<p>The names of the scaling policies to describe.</p>"
        },
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>"
        },
        "NextToken":{
          "shape":"XmlString",
          "documentation":"<p>The token for the next set of results.</p>"
        }
      }
    },
    "DescribeScalingPoliciesResponse":{
      "type":"structure",
      "members":{
        "ScalingPolicies":{
          "shape":"ScalingPolicies",
          "documentation":"<p>Information about the scaling policies.</p>"
        },
        "NextToken":{
          "shape":"XmlString",
          "documentation":"<p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>"
        }
      }
    },
    "DescribeScheduledActionsRequest":{
      "type":"structure",
      "required":["ServiceNamespace"],
      "members":{
        "ScheduledActionNames":{
          "shape":"ResourceIdsMaxLen1600",
          "documentation":"<p>The names of the scheduled actions to describe.</p>"
        },
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of scheduled action results. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>"
        },
        "NextToken":{
          "shape":"XmlString",
          "documentation":"<p>The token for the next set of results.</p>"
        }
      }
    },
    "DescribeScheduledActionsResponse":{
      "type":"structure",
      "members":{
        "ScheduledActions":{
          "shape":"ScheduledActions",
          "documentation":"<p>Information about the scheduled actions.</p>"
        },
        "NextToken":{
          "shape":"XmlString",
          "documentation":"<p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>"
        }
      }
    },
    "DisableScaleIn":{"type":"boolean"},
    "ErrorMessage":{"type":"string"},
    "FailedResourceAccessException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling is unable to retrieve the alarms associated with a scaling policy due to a client error, for example, if the role ARN specified for a scalable target does not have permission to call the CloudWatch <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html\">DescribeAlarms</a> on your behalf.</p>",
      "exception":true
    },
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
      "documentation":"<p>The next token supplied was invalid.</p>",
      "exception":true
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>A per-account resource limit is exceeded. For more information, see <a href=\"http://docs.aws.amazon.com/ApplicationAutoScaling/latest/userguide/application-auto-scaling-limits.html\">Application Auto Scaling Limits</a>.</p>",
      "exception":true
    },
    "MaxResults":{"type":"integer"},
    "MetricAggregationType":{
      "type":"string",
      "enum":[
        "Average",
        "Minimum",
        "Maximum"
      ]
    },
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
      "documentation":"<p>Describes the dimension of a metric.</p>"
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
    "MetricType":{
      "type":"string",
      "enum":[
        "DynamoDBReadCapacityUtilization",
        "DynamoDBWriteCapacityUtilization",
        "ALBRequestCountPerTarget",
        "RDSReaderAverageCPUUtilization",
        "RDSReaderAverageDatabaseConnections",
        "EC2SpotFleetRequestAverageCPUUtilization",
        "EC2SpotFleetRequestAverageNetworkIn",
        "EC2SpotFleetRequestAverageNetworkOut",
        "SageMakerVariantInvocationsPerInstance",
        "ECSServiceAverageCPUUtilization",
        "ECSServiceAverageMemoryUtilization"
      ]
    },
    "MetricUnit":{"type":"string"},
    "MinAdjustmentMagnitude":{"type":"integer"},
    "ObjectNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified object could not be found. For any operation that depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any operation that deletes or deregisters a resource, this exception is thrown if the resource cannot be found.</p>",
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
      "enum":[
        "StepScaling",
        "TargetTrackingScaling"
      ]
    },
    "PredefinedMetricSpecification":{
      "type":"structure",
      "required":["PredefinedMetricType"],
      "members":{
        "PredefinedMetricType":{
          "shape":"MetricType",
          "documentation":"<p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to Spot fleet requests and ECS services.</p>"
        },
        "ResourceLabel":{
          "shape":"ResourceLabel",
          "documentation":"<p>Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target group attached to the Spot fleet request or ECS service.</p> <p>The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:</p> <ul> <li> <p>app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN</p> </li> <li> <p>targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Configures a predefined metric for a target tracking policy.</p>"
    },
    "PutScalingPolicyRequest":{
      "type":"structure",
      "required":[
        "PolicyName",
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension"
      ],
      "members":{
        "PolicyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the scaling policy.</p>"
        },
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "PolicyType":{
          "shape":"PolicyType",
          "documentation":"<p>The policy type. This parameter is required if you are creating a policy.</p> <p>For DynamoDB, only <code>TargetTrackingScaling</code> is supported. For Amazon ECS, Spot Fleet, and Amazon RDS, both <code>StepScaling</code> and <code>TargetTrackingScaling</code> are supported. For any other service, only <code>StepScaling</code> is supported.</p>"
        },
        "StepScalingPolicyConfiguration":{
          "shape":"StepScalingPolicyConfiguration",
          "documentation":"<p>A step scaling policy.</p> <p>This parameter is required if you are creating a policy and the policy type is <code>StepScaling</code>.</p>"
        },
        "TargetTrackingScalingPolicyConfiguration":{
          "shape":"TargetTrackingScalingPolicyConfiguration",
          "documentation":"<p>A target tracking policy.</p> <p>This parameter is required if you are creating a policy and the policy type is <code>TargetTrackingScaling</code>.</p>"
        }
      }
    },
    "PutScalingPolicyResponse":{
      "type":"structure",
      "required":["PolicyARN"],
      "members":{
        "PolicyARN":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resulting scaling policy.</p>"
        },
        "Alarms":{
          "shape":"Alarms",
          "documentation":"<p>The CloudWatch alarms created for the target tracking policy.</p>"
        }
      }
    },
    "PutScheduledActionRequest":{
      "type":"structure",
      "required":[
        "ServiceNamespace",
        "ScheduledActionName",
        "ResourceId"
      ],
      "members":{
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "Schedule":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The schedule for this action. The following formats are supported:</p> <ul> <li> <p>At expressions - <code>at(<i>yyyy</i>-<i>mm</i>-<i>dd</i>T<i>hh</i>:<i>mm</i>:<i>ss</i>)</code> </p> </li> <li> <p>Rate expressions - <code>rate(<i>value</i> <i>unit</i>)</code> </p> </li> <li> <p>Cron expressions - <code>cron(<i>fields</i>)</code> </p> </li> </ul> <p>At expressions are useful for one-time schedules. Specify the time, in UTC.</p> <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p> <p>For more information about cron expressions, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions\">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>"
        },
        "ScheduledActionName":{
          "shape":"ScheduledActionName",
          "documentation":"<p>The name of the scheduled action.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This parameter is required if you are creating a scheduled action. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "StartTime":{
          "shape":"TimestampType",
          "documentation":"<p>The date and time for the scheduled action to start.</p>"
        },
        "EndTime":{
          "shape":"TimestampType",
          "documentation":"<p>The date and time for the scheduled action to end.</p>"
        },
        "ScalableTargetAction":{
          "shape":"ScalableTargetAction",
          "documentation":"<p>The new minimum and maximum capacity. You can set both values or just one. During the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.</p>"
        }
      }
    },
    "PutScheduledActionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "RegisterScalableTargetRequest":{
      "type":"structure",
      "required":[
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension"
      ],
      "members":{
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "MinCapacity":{
          "shape":"ResourceCapacity",
          "documentation":"<p>The minimum value to scale to in response to a scale in event. This parameter is required if you are registering a scalable target.</p>"
        },
        "MaxCapacity":{
          "shape":"ResourceCapacity",
          "documentation":"<p>The maximum value to scale to in response to a scale out event. This parameter is required if you are registering a scalable target.</p>"
        },
        "RoleARN":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>Application Auto Scaling creates a service-linked role that grants it permissions to modify the scalable target on your behalf. For more information, see <a href=\"http://docs.aws.amazon.com/autoscaling/application/userguide/application-autoscaling-service-linked-roles.html\">Service-Linked Roles for Application Auto Scaling</a>.</p> <p>For resources that are not supported using a service-linked role, this parameter is required and must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf.</p>"
        }
      }
    },
    "RegisterScalableTargetResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ResourceCapacity":{"type":"integer"},
    "ResourceId":{
      "type":"string",
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "ResourceIdMaxLen1600":{
      "type":"string",
      "max":1600,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "ResourceIdsMaxLen1600":{
      "type":"list",
      "member":{"shape":"ResourceIdMaxLen1600"}
    },
    "ResourceLabel":{
      "type":"string",
      "max":1023,
      "min":1
    },
    "ScalableDimension":{
      "type":"string",
      "enum":[
        "ecs:service:DesiredCount",
        "ec2:spot-fleet-request:TargetCapacity",
        "elasticmapreduce:instancegroup:InstanceCount",
        "appstream:fleet:DesiredCapacity",
        "dynamodb:table:ReadCapacityUnits",
        "dynamodb:table:WriteCapacityUnits",
        "dynamodb:index:ReadCapacityUnits",
        "dynamodb:index:WriteCapacityUnits",
        "rds:cluster:ReadReplicaCount",
        "sagemaker:variant:DesiredInstanceCount",
        "custom-resource:ResourceType:Property"
      ]
    },
    "ScalableTarget":{
      "type":"structure",
      "required":[
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension",
        "MinCapacity",
        "MaxCapacity",
        "RoleARN",
        "CreationTime"
      ],
      "members":{
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "MinCapacity":{
          "shape":"ResourceCapacity",
          "documentation":"<p>The minimum value to scale to in response to a scale in event.</p>"
        },
        "MaxCapacity":{
          "shape":"ResourceCapacity",
          "documentation":"<p>The maximum value to scale to in response to a scale out event.</p>"
        },
        "RoleARN":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf.</p>"
        },
        "CreationTime":{
          "shape":"TimestampType",
          "documentation":"<p>The Unix timestamp for when the scalable target was created.</p>"
        }
      },
      "documentation":"<p>Represents a scalable target.</p>"
    },
    "ScalableTargetAction":{
      "type":"structure",
      "members":{
        "MinCapacity":{
          "shape":"ResourceCapacity",
          "documentation":"<p>The minimum capacity.</p>"
        },
        "MaxCapacity":{
          "shape":"ResourceCapacity",
          "documentation":"<p>The maximum capacity.</p>"
        }
      },
      "documentation":"<p>Represents the minimum and maximum capacity for a scheduled action.</p>"
    },
    "ScalableTargets":{
      "type":"list",
      "member":{"shape":"ScalableTarget"}
    },
    "ScalingActivities":{
      "type":"list",
      "member":{"shape":"ScalingActivity"}
    },
    "ScalingActivity":{
      "type":"structure",
      "required":[
        "ActivityId",
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension",
        "Description",
        "Cause",
        "StartTime",
        "StatusCode"
      ],
      "members":{
        "ActivityId":{
          "shape":"ResourceId",
          "documentation":"<p>The unique identifier of the scaling activity.</p>"
        },
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "Description":{
          "shape":"XmlString",
          "documentation":"<p>A simple description of what action the scaling activity intends to accomplish.</p>"
        },
        "Cause":{
          "shape":"XmlString",
          "documentation":"<p>A simple description of what caused the scaling activity to happen.</p>"
        },
        "StartTime":{
          "shape":"TimestampType",
          "documentation":"<p>The Unix timestamp for when the scaling activity began.</p>"
        },
        "EndTime":{
          "shape":"TimestampType",
          "documentation":"<p>The Unix timestamp for when the scaling activity ended.</p>"
        },
        "StatusCode":{
          "shape":"ScalingActivityStatusCode",
          "documentation":"<p>Indicates the status of the scaling activity.</p>"
        },
        "StatusMessage":{
          "shape":"XmlString",
          "documentation":"<p>A simple message about the current status of the scaling activity.</p>"
        },
        "Details":{
          "shape":"XmlString",
          "documentation":"<p>The details about the scaling activity.</p>"
        }
      },
      "documentation":"<p>Represents a scaling activity.</p>"
    },
    "ScalingActivityStatusCode":{
      "type":"string",
      "enum":[
        "Pending",
        "InProgress",
        "Successful",
        "Overridden",
        "Unfulfilled",
        "Failed"
      ]
    },
    "ScalingAdjustment":{"type":"integer"},
    "ScalingPolicies":{
      "type":"list",
      "member":{"shape":"ScalingPolicy"}
    },
    "ScalingPolicy":{
      "type":"structure",
      "required":[
        "PolicyARN",
        "PolicyName",
        "ServiceNamespace",
        "ResourceId",
        "ScalableDimension",
        "PolicyType",
        "CreationTime"
      ],
      "members":{
        "PolicyARN":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The Amazon Resource Name (ARN) of the scaling policy.</p>"
        },
        "PolicyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the scaling policy.</p>"
        },
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "PolicyType":{
          "shape":"PolicyType",
          "documentation":"<p>The scaling policy type.</p>"
        },
        "StepScalingPolicyConfiguration":{
          "shape":"StepScalingPolicyConfiguration",
          "documentation":"<p>A step scaling policy.</p>"
        },
        "TargetTrackingScalingPolicyConfiguration":{
          "shape":"TargetTrackingScalingPolicyConfiguration",
          "documentation":"<p>A target tracking policy.</p>"
        },
        "Alarms":{
          "shape":"Alarms",
          "documentation":"<p>The CloudWatch alarms associated with the scaling policy.</p>"
        },
        "CreationTime":{
          "shape":"TimestampType",
          "documentation":"<p>The Unix timestamp for when the scaling policy was created.</p>"
        }
      },
      "documentation":"<p>Represents a scaling policy.</p>"
    },
    "ScheduledAction":{
      "type":"structure",
      "required":[
        "ScheduledActionName",
        "ScheduledActionARN",
        "ServiceNamespace",
        "Schedule",
        "ResourceId",
        "CreationTime"
      ],
      "members":{
        "ScheduledActionName":{
          "shape":"ScheduledActionName",
          "documentation":"<p>The name of the scheduled action.</p>"
        },
        "ScheduledActionARN":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The Amazon Resource Name (ARN) of the scheduled action.</p>"
        },
        "ServiceNamespace":{
          "shape":"ServiceNamespace",
          "documentation":"<p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces\">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>"
        },
        "Schedule":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The schedule for this action. The following formats are supported:</p> <ul> <li> <p>At expressions - <code>at(<i>yyyy</i>-<i>mm</i>-<i>dd</i>T<i>hh</i>:<i>mm</i>:<i>ss</i>)</code> </p> </li> <li> <p>Rate expressions - <code>rate(<i>value</i> <i>unit</i>)</code> </p> </li> <li> <p>Cron expressions - <code>cron(<i>fields</i>)</code> </p> </li> </ul> <p>At expressions are useful for one-time schedules. Specify the time, in UTC.</p> <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p> <p>For more information about cron expressions, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions\">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>"
        },
        "ResourceId":{
          "shape":"ResourceIdMaxLen1600",
          "documentation":"<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider.</p> </li> </ul>"
        },
        "ScalableDimension":{
          "shape":"ScalableDimension",
          "documentation":"<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>"
        },
        "StartTime":{
          "shape":"TimestampType",
          "documentation":"<p>The date and time that the action is scheduled to begin.</p>"
        },
        "EndTime":{
          "shape":"TimestampType",
          "documentation":"<p>The date and time that the action is scheduled to end.</p>"
        },
        "ScalableTargetAction":{
          "shape":"ScalableTargetAction",
          "documentation":"<p>The new minimum and maximum capacity. You can set both values or just one. During the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.</p>"
        },
        "CreationTime":{
          "shape":"TimestampType",
          "documentation":"<p>The date and time that the scheduled action was created.</p>"
        }
      },
      "documentation":"<p>Represents a scheduled action.</p>"
    },
    "ScheduledActionName":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"(?!((^[ ]+.*)|(.*([\\u0000-\\u001f]|[\\u007f-\\u009f]|[:/|])+.*)|(.*[ ]+$))).+"
    },
    "ScheduledActions":{
      "type":"list",
      "member":{"shape":"ScheduledAction"}
    },
    "ServiceNamespace":{
      "type":"string",
      "enum":[
        "ecs",
        "elasticmapreduce",
        "ec2",
        "appstream",
        "dynamodb",
        "rds",
        "sagemaker",
        "custom-resource"
      ]
    },
    "StepAdjustment":{
      "type":"structure",
      "required":["ScalingAdjustment"],
      "members":{
        "MetricIntervalLowerBound":{
          "shape":"MetricScale",
          "documentation":"<p>The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.</p>"
        },
        "MetricIntervalUpperBound":{
          "shape":"MetricScale",
          "documentation":"<p>The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.</p> <p>The upper bound must be greater than the lower bound.</p>"
        },
        "ScalingAdjustment":{
          "shape":"ScalingAdjustment",
          "documentation":"<p>The amount by which to scale, based on the specified adjustment type. A positive value adds to the current scalable dimension while a negative number removes from the current scalable dimension.</p>"
        }
      },
      "documentation":"<p>Represents a step adjustment for a <a>StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul>"
    },
    "StepAdjustments":{
      "type":"list",
      "member":{"shape":"StepAdjustment"}
    },
    "StepScalingPolicyConfiguration":{
      "type":"structure",
      "members":{
        "AdjustmentType":{
          "shape":"AdjustmentType",
          "documentation":"<p>The adjustment type, which specifies how the <code>ScalingAdjustment</code> parameter in a <a>StepAdjustment</a> is interpreted.</p>"
        },
        "StepAdjustments":{
          "shape":"StepAdjustments",
          "documentation":"<p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p>"
        },
        "MinAdjustmentMagnitude":{
          "shape":"MinAdjustmentMagnitude",
          "documentation":"<p>The minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is <code>PercentChangeInCapacity</code>, the scaling policy changes the scalable dimension of the scalable target by this amount.</p>"
        },
        "Cooldown":{
          "shape":"Cooldown",
          "documentation":"<p>The amount of time, in seconds, after a scaling activity completes where previous trigger-related scaling activities can influence future scaling events.</p> <p>For scale out policies, while the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out. For example, an alarm triggers a step scaling policy to scale out an Amazon ECS service by 2 tasks, the scaling activity completes successfully, and a cooldown period of 5 minutes starts. During the Cooldown period, if the alarm triggers the same policy again but at a more aggressive step adjustment to scale out the service by 3 tasks, the 2 tasks that were added in the previous scale out event are considered part of that capacity and only 1 additional task is added to the desired count.</p> <p>For scale in policies, the cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, Application Auto Scaling scales out your scalable target immediately.</p>"
        },
        "MetricAggregationType":{
          "shape":"MetricAggregationType",
          "documentation":"<p>The aggregation type for the CloudWatch metrics. Valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>.</p>"
        }
      },
      "documentation":"<p>Represents a step scaling policy configuration.</p>"
    },
    "TargetTrackingScalingPolicyConfiguration":{
      "type":"structure",
      "required":["TargetValue"],
      "members":{
        "TargetValue":{
          "shape":"MetricScale",
          "documentation":"<p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).</p>"
        },
        "PredefinedMetricSpecification":{
          "shape":"PredefinedMetricSpecification",
          "documentation":"<p>A predefined metric.</p>"
        },
        "CustomizedMetricSpecification":{
          "shape":"CustomizedMetricSpecification",
          "documentation":"<p>A customized metric.</p>"
        },
        "ScaleOutCooldown":{
          "shape":"Cooldown",
          "documentation":"<p>The amount of time, in seconds, after a scale out activity completes before another scale out activity can start.</p> <p>While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.</p>"
        },
        "ScaleInCooldown":{
          "shape":"Cooldown",
          "documentation":"<p>The amount of time, in seconds, after a scale in activity completes before another scale in activity can start.</p> <p>The cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, Application Auto Scaling scales out your scalable target immediately.</p>"
        },
        "DisableScaleIn":{
          "shape":"DisableScaleIn",
          "documentation":"<p>Indicates whether scale in by the target tracking policy is disabled. If the value is <code>true</code>, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Represents a target tracking scaling policy configuration.</p>"
    },
    "TimestampType":{"type":"timestamp"},
    "ValidationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>An exception was thrown for a validation issue. Review the available parameters for the API request.</p>",
      "exception":true
    },
    "XmlString":{
      "type":"string",
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    }
  },
  "documentation":"<p>With Application Auto Scaling, you can configure automatic scaling for your scalable resources. You can use Application Auto Scaling to accomplish the following tasks:</p> <ul> <li> <p>Define scaling policies to automatically scale your AWS or custom resources</p> </li> <li> <p>Scale your resources in response to CloudWatch alarms</p> </li> <li> <p>Schedule one-time or recurring scaling actions</p> </li> <li> <p>View the history of your scaling events</p> </li> </ul> <p>Application Auto Scaling can scale the following resources:</p> <ul> <li> <p>Amazon ECS services. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html\">Service Auto Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>Amazon EC2 Spot fleets. For more information, see <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-auto-scaling.html\">Automatic Scaling for Spot Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p> </li> <li> <p>Amazon EMR clusters. For more information, see <a href=\"http://docs.aws.amazon.com/ElasticMapReduce/latest/ManagementGuide/emr-automatic-scaling.html\">Using Automatic Scaling in Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.</p> </li> <li> <p>AppStream 2.0 fleets. For more information, see <a href=\"http://docs.aws.amazon.com/appstream2/latest/developerguide/autoscaling.html\">Fleet Auto Scaling for Amazon AppStream 2.0</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p> </li> <li> <p>Provisioned read and write capacity for Amazon DynamoDB tables and global secondary indexes. For more information, see <a href=\"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html\">Managing Throughput Capacity Automatically with DynamoDB Auto Scaling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </li> <li> <p>Amazon Aurora Replicas. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Integrating.AutoScaling.html\">Using Amazon Aurora Auto Scaling with Aurora Replicas</a>.</p> </li> <li> <p>Amazon SageMaker endpoint variants. For more information, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/endpoint-auto-scaling.html\">Automatically Scaling Amazon SageMaker Models</a>.</p> </li> <li> <p>Custom resources provided by your own applications or services. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>. </p> </li> </ul> <p>To learn more about Application Auto Scaling, see the <a href=\"http://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html\">Application Auto Scaling User Guide</a>.</p> <p>To configure automatic scaling for multiple resources across multiple services, use AWS Auto Scaling to create a scaling plan for your application. For more information, see the <a href=\"http://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html\">AWS Auto Scaling User Guide</a>.</p>"
}
