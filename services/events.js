awsim['events'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-10-07",
    "endpointPrefix":"events",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Amazon CloudWatch Events",
    "serviceId":"CloudWatch Events",
    "signatureVersion":"v4",
    "targetPrefix":"AWSEvents",
    "uid":"events-2015-10-07"
  },
  "operations":{
    "DeleteRule":{
      "name":"DeleteRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRuleRequest"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a>RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p>"
    },
    "DescribeEventBus":{
      "name":"DescribeEventBus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventBusRequest"},
      "output":{"shape":"DescribeEventBusResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Displays the external AWS accounts that are permitted to write events to your account using your account's event bus, and the associated policy. To enable your account to receive events from other accounts, use <a>PutPermission</a>.</p>"
    },
    "DescribeRule":{
      "name":"DescribeRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeRuleRequest"},
      "output":{"shape":"DescribeRuleResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a>ListTargetsByRule</a>.</p>"
    },
    "DisableRule":{
      "name":"DisableRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisableRuleRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>"
    },
    "EnableRule":{
      "name":"EnableRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"EnableRuleRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>"
    },
    "ListRuleNamesByTarget":{
      "name":"ListRuleNamesByTarget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListRuleNamesByTargetRequest"},
      "output":{"shape":"ListRuleNamesByTargetResponse"},
      "errors":[
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Lists the rules for the specified target. You can see which of the rules in Amazon CloudWatch Events can invoke a specific target in your account.</p>"
    },
    "ListRules":{
      "name":"ListRules",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListRulesRequest"},
      "output":{"shape":"ListRulesResponse"},
      "errors":[
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Lists your Amazon CloudWatch Events rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a>ListTargetsByRule</a>.</p>"
    },
    "ListTargetsByRule":{
      "name":"ListTargetsByRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTargetsByRuleRequest"},
      "output":{"shape":"ListTargetsByRuleResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Lists the targets assigned to the specified rule.</p>"
    },
    "PutEvents":{
      "name":"PutEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutEventsRequest"},
      "output":{"shape":"PutEventsResponse"},
      "errors":[
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Sends custom events to Amazon CloudWatch Events so that they can be matched to rules.</p>"
    },
    "PutPermission":{
      "name":"PutPermission",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutPermissionRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"PolicyLengthExceededException"},
        {"shape":"InternalException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Running <code>PutPermission</code> permits the specified AWS account to put events to your account's default <i>event bus</i>. CloudWatch Events rules in your account are triggered by these events arriving to your default event bus. </p> <p>For another account to send events to your account, that external account must have a CloudWatch Events rule with your account's default event bus as a target.</p> <p>To enable multiple AWS accounts to put events to your default event bus, run <code>PutPermission</code> once for each of these accounts.</p> <p>The permission policy on the default event bus cannot exceed 10 KB in size.</p>"
    },
    "PutRule":{
      "name":"PutRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutRuleRequest"},
      "output":{"shape":"PutRuleResponse"},
      "errors":[
        {"shape":"InvalidEventPatternException"},
        {"shape":"LimitExceededException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a>DisableRule</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>"
    },
    "PutTargets":{
      "name":"PutTargets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutTargetsRequest"},
      "output":{"shape":"PutTargetsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"LimitExceededException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets for CloudWatch Events:</p> <ul> <li> <p>EC2 instances</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>AWS Lambda functions</p> </li> <li> <p>Data streams in Amazon Kinesis Data Streams</p> </li> <li> <p>Data delivery streams in Amazon Kinesis Data Firehose</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>AWS Step Functions state machines</p> </li> <li> <p>AWS Batch jobs</p> </li> <li> <p>AWS CodeBuild projects</p> </li> <li> <p>Pipelines in AWS CodePipeline</p> </li> <li> <p>Amazon Inspector assessment templates</p> </li> <li> <p>Amazon SNS topics</p> </li> <li> <p>Amazon SQS queues, including FIFO queues</p> </li> <li> <p>The default event bus of another AWS account</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the AWS Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, CloudWatch Events relies on resource-based policies. For EC2 instances, Kinesis data streams, and AWS Step Functions state machines, CloudWatch Events relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/auth-and-access-control-cwe.html\">Authentication and Access Control</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p> <p>If another AWS account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href=\"https://aws.amazon.com/cloudwatch/pricing/\">Amazon CloudWatch Pricing</a>.</p> <p>For more information about enabling cross-account events, see <a>PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>"
    },
    "RemovePermission":{
      "name":"RemovePermission",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemovePermissionRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Revokes the permission of another AWS account to be able to put events to your default event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a>DescribeEventBus</a>.</p>"
    },
    "RemoveTargets":{
      "name":"RemoveTargets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveTargetsRequest"},
      "output":{"shape":"RemoveTargetsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>"
    },
    "TestEventPattern":{
      "name":"TestEventPattern",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TestEventPatternRequest"},
      "output":{"shape":"TestEventPatternResponse"},
      "errors":[
        {"shape":"InvalidEventPatternException"},
        {"shape":"InternalException"}
      ],
      "documentation":"<p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>"
    }
  },
  "shapes":{
    "Action":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"events:[a-zA-Z]+"
    },
    "Arn":{
      "type":"string",
      "max":1600,
      "min":1
    },
    "AssignPublicIp":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED"
      ]
    },
    "AwsVpcConfiguration":{
      "type":"structure",
      "required":["Subnets"],
      "members":{
        "Subnets":{
          "shape":"StringList",
          "documentation":"<p>Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>"
        },
        "SecurityGroups":{
          "shape":"StringList",
          "documentation":"<p>Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.</p>"
        },
        "AssignPublicIp":{
          "shape":"AssignPublicIp",
          "documentation":"<p>Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>"
        }
      },
      "documentation":"<p>This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.</p>"
    },
    "BatchArrayProperties":{
      "type":"structure",
      "members":{
        "Size":{
          "shape":"Integer",
          "documentation":"<p>The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000.</p>"
        }
      },
      "documentation":"<p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.</p>"
    },
    "BatchParameters":{
      "type":"structure",
      "required":[
        "JobDefinition",
        "JobName"
      ],
      "members":{
        "JobDefinition":{
          "shape":"String",
          "documentation":"<p>The ARN or name of the job definition to use if the event target is an AWS Batch job. This job definition must already exist.</p>"
        },
        "JobName":{
          "shape":"String",
          "documentation":"<p>The name to use for this execution of the job, if the target is an AWS Batch job.</p>"
        },
        "ArrayProperties":{
          "shape":"BatchArrayProperties",
          "documentation":"<p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.</p>"
        },
        "RetryStrategy":{
          "shape":"BatchRetryStrategy",
          "documentation":"<p>The retry strategy to use for failed jobs, if the target is an AWS Batch job. The retry strategy is the number of times to retry the failed job execution. Valid values are 1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the job definition.</p>"
        }
      },
      "documentation":"<p>The custom parameters to be used when the target is an AWS Batch job.</p>"
    },
    "BatchRetryStrategy":{
      "type":"structure",
      "members":{
        "Attempts":{
          "shape":"Integer",
          "documentation":"<p>The number of times to attempt to retry, if the job fails. Valid values are 1–10.</p>"
        }
      },
      "documentation":"<p>The retry strategy to use for failed jobs, if the target is an AWS Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.</p>"
    },
    "Boolean":{"type":"boolean"},
    "ConcurrentModificationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>There is concurrent modification on a rule or target.</p>",
      "exception":true
    },
    "DeleteRuleRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        }
      }
    },
    "DescribeEventBusRequest":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeEventBusResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the event bus. Currently, this is always <code>default</code>.</p>"
        },
        "Arn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the account permitted to write events to the current account.</p>"
        },
        "Policy":{
          "shape":"String",
          "documentation":"<p>The policy that enables the external account to send events to your account.</p>"
        }
      }
    },
    "DescribeRuleRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        }
      }
    },
    "DescribeRuleResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        },
        "Arn":{
          "shape":"RuleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the rule.</p>"
        },
        "EventPattern":{
          "shape":"EventPattern",
          "documentation":"<p>The event pattern. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html\">Events and Event Patterns</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>"
        },
        "ScheduleExpression":{
          "shape":"ScheduleExpression",
          "documentation":"<p>The scheduling expression. For example, \"cron(0 20 * * ? *)\", \"rate(5 minutes)\".</p>"
        },
        "State":{
          "shape":"RuleState",
          "documentation":"<p>Specifies whether the rule is enabled or disabled.</p>"
        },
        "Description":{
          "shape":"RuleDescription",
          "documentation":"<p>The description of the rule.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>"
        }
      }
    },
    "DisableRuleRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        }
      }
    },
    "EcsParameters":{
      "type":"structure",
      "required":["TaskDefinitionArn"],
      "members":{
        "TaskDefinitionArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the task definition to use if the event target is an Amazon ECS task. </p>"
        },
        "TaskCount":{
          "shape":"LimitMin1",
          "documentation":"<p>The number of tasks to create based on <code>TaskDefinition</code>. The default is 1.</p>"
        },
        "LaunchType":{
          "shape":"LaunchType",
          "documentation":"<p>Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The <code>FARGATE</code> value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html\">AWS Fargate on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "NetworkConfiguration":{
          "shape":"NetworkConfiguration",
          "documentation":"<p>Use this structure if the ECS task uses the <code>awsvpc</code> network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if <code>LaunchType</code> is <code>FARGATE</code> because the <code>awsvpc</code> mode is required for Fargate tasks.</p> <p>If you specify <code>NetworkConfiguration</code> when the target ECS task does not use the <code>awsvpc</code> network mode, the task fails.</p>"
        },
        "PlatformVersion":{
          "shape":"String",
          "documentation":"<p>Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as <code>1.1.0</code>.</p> <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more information about valid platform versions, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html\">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "Group":{
          "shape":"String",
          "documentation":"<p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>"
        }
      },
      "documentation":"<p>The custom parameters to be used when the target is an Amazon ECS task.</p>"
    },
    "EnableRuleRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        }
      }
    },
    "ErrorCode":{"type":"string"},
    "ErrorMessage":{"type":"string"},
    "EventId":{"type":"string"},
    "EventPattern":{"type":"string"},
    "EventResource":{"type":"string"},
    "EventResourceList":{
      "type":"list",
      "member":{"shape":"EventResource"}
    },
    "EventTime":{"type":"timestamp"},
    "InputTransformer":{
      "type":"structure",
      "required":["InputTemplate"],
      "members":{
        "InputPathsMap":{
          "shape":"TransformerPaths",
          "documentation":"<p>Map of JSON paths to be extracted from the event. You can then insert these in the template in <code>InputTemplate</code> to produce the output you want to be sent to the target.</p> <p> <code>InputPathsMap</code> is an array key-value pairs, where each value is a valid JSON path. You can have as many as 10 key-value pairs. You must use JSON dot notation, not bracket notation.</p> <p>The keys cannot start with \"AWS.\" </p>"
        },
        "InputTemplate":{
          "shape":"TransformerInput",
          "documentation":"<p>Input template where you specify placeholders that will be filled with the values of the keys from <code>InputPathsMap</code> to customize the data sent to the target. Enclose each <code>InputPathsMaps</code> value in brackets: &lt;<i>value</i>&gt; The InputTemplate must be valid JSON.</p> <p>If <code>InputTemplate</code> is a JSON object (surrounded by curly braces), the following restrictions apply:</p> <ul> <li> <p>The placeholder cannot be used as an object key.</p> </li> <li> <p>Object values cannot include quote marks.</p> </li> </ul> <p>The following example shows the syntax for using <code>InputPathsMap</code> and <code>InputTemplate</code>.</p> <p> <code> \"InputTransformer\":</code> </p> <p> <code>{</code> </p> <p> <code>\"InputPathsMap\": {\"instance\": \"$.detail.instance\",\"status\": \"$.detail.status\"},</code> </p> <p> <code>\"InputTemplate\": \"&lt;instance&gt; is in state &lt;status&gt;\"</code> </p> <p> <code>}</code> </p> <p>To have the <code>InputTemplate</code> include quote marks within a JSON string, escape each quote marks with a slash, as in the following example:</p> <p> <code> \"InputTransformer\":</code> </p> <p> <code>{</code> </p> <p> <code>\"InputPathsMap\": {\"instance\": \"$.detail.instance\",\"status\": \"$.detail.status\"},</code> </p> <p> <code>\"InputTemplate\": \"&lt;instance&gt; is in state \\\"&lt;status&gt;\\\"\"</code> </p> <p> <code>}</code> </p>"
        }
      },
      "documentation":"<p>Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.</p>"
    },
    "InputTransformerPathKey":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"[A-Za-z0-9\\_\\-]+"
    },
    "Integer":{"type":"integer"},
    "InternalException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception occurs due to unexpected causes.</p>",
      "exception":true,
      "fault":true
    },
    "InvalidEventPatternException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The event pattern is not valid.</p>",
      "exception":true
    },
    "KinesisParameters":{
      "type":"structure",
      "required":["PartitionKeyPath"],
      "members":{
        "PartitionKeyPath":{
          "shape":"TargetPartitionKeyPath",
          "documentation":"<p>The JSON path to be extracted from the event and used as the partition key. For more information, see <a href=\"http://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key\">Amazon Kinesis Streams Key Concepts</a> in the <i>Amazon Kinesis Streams Developer Guide</i>.</p>"
        }
      },
      "documentation":"<p>This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key.</p>"
    },
    "LaunchType":{
      "type":"string",
      "enum":[
        "EC2",
        "FARGATE"
      ]
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You tried to create more rules or add more targets to a rule than is allowed.</p>",
      "exception":true
    },
    "LimitMax100":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "LimitMin1":{
      "type":"integer",
      "min":1
    },
    "ListRuleNamesByTargetRequest":{
      "type":"structure",
      "required":["TargetArn"],
      "members":{
        "TargetArn":{
          "shape":"TargetArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target resource.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned by a previous call to retrieve the next set of results.</p>"
        },
        "Limit":{
          "shape":"LimitMax100",
          "documentation":"<p>The maximum number of results to return.</p>"
        }
      }
    },
    "ListRuleNamesByTargetResponse":{
      "type":"structure",
      "members":{
        "RuleNames":{
          "shape":"RuleNameList",
          "documentation":"<p>The names of the rules that can invoke the given target.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>"
        }
      }
    },
    "ListRulesRequest":{
      "type":"structure",
      "members":{
        "NamePrefix":{
          "shape":"RuleName",
          "documentation":"<p>The prefix matching the rule name.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned by a previous call to retrieve the next set of results.</p>"
        },
        "Limit":{
          "shape":"LimitMax100",
          "documentation":"<p>The maximum number of results to return.</p>"
        }
      }
    },
    "ListRulesResponse":{
      "type":"structure",
      "members":{
        "Rules":{
          "shape":"RuleResponseList",
          "documentation":"<p>The rules that match the specified criteria.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>"
        }
      }
    },
    "ListTargetsByRuleRequest":{
      "type":"structure",
      "required":["Rule"],
      "members":{
        "Rule":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned by a previous call to retrieve the next set of results.</p>"
        },
        "Limit":{
          "shape":"LimitMax100",
          "documentation":"<p>The maximum number of results to return.</p>"
        }
      }
    },
    "ListTargetsByRuleResponse":{
      "type":"structure",
      "members":{
        "Targets":{
          "shape":"TargetList",
          "documentation":"<p>The targets assigned to the rule.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>"
        }
      }
    },
    "MessageGroupId":{"type":"string"},
    "NetworkConfiguration":{
      "type":"structure",
      "members":{
        "awsvpcConfiguration":{
          "shape":"AwsVpcConfiguration",
          "documentation":"<p>Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.</p>"
        }
      },
      "documentation":"<p>This structure specifies the network configuration for an ECS task.</p>"
    },
    "NextToken":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "PolicyLengthExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The event bus policy is too long. For more information, see the limits.</p>",
      "exception":true
    },
    "Principal":{
      "type":"string",
      "max":12,
      "min":1,
      "pattern":"(\\d{12}|\\*)"
    },
    "PutEventsRequest":{
      "type":"structure",
      "required":["Entries"],
      "members":{
        "Entries":{
          "shape":"PutEventsRequestEntryList",
          "documentation":"<p>The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on.</p>"
        }
      }
    },
    "PutEventsRequestEntry":{
      "type":"structure",
      "members":{
        "Time":{
          "shape":"EventTime",
          "documentation":"<p>The time stamp of the event, per <a href=\"https://www.rfc-editor.org/rfc/rfc3339.txt\">RFC3339</a>. If no time stamp is provided, the time stamp of the <a>PutEvents</a> call is used.</p>"
        },
        "Source":{
          "shape":"String",
          "documentation":"<p>The source of the event. This field is required.</p>"
        },
        "Resources":{
          "shape":"EventResourceList",
          "documentation":"<p>AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.</p>"
        },
        "DetailType":{
          "shape":"String",
          "documentation":"<p>Free-form string used to decide what fields to expect in the event detail.</p>"
        },
        "Detail":{
          "shape":"String",
          "documentation":"<p>A valid JSON string. There is no other schema imposed. The JSON string may contain fields and nested subobjects.</p>"
        }
      },
      "documentation":"<p>Represents an event to be submitted.</p>"
    },
    "PutEventsRequestEntryList":{
      "type":"list",
      "member":{"shape":"PutEventsRequestEntry"},
      "max":10,
      "min":1
    },
    "PutEventsResponse":{
      "type":"structure",
      "members":{
        "FailedEntryCount":{
          "shape":"Integer",
          "documentation":"<p>The number of failed entries.</p>"
        },
        "Entries":{
          "shape":"PutEventsResultEntryList",
          "documentation":"<p>The successfully and unsuccessfully ingested events results. If the ingestion was successful, the entry has the event ID in it. Otherwise, you can use the error code and error message to identify the problem with the entry.</p>"
        }
      }
    },
    "PutEventsResultEntry":{
      "type":"structure",
      "members":{
        "EventId":{
          "shape":"EventId",
          "documentation":"<p>The ID of the event.</p>"
        },
        "ErrorCode":{
          "shape":"ErrorCode",
          "documentation":"<p>The error code that indicates why the event submission failed.</p>"
        },
        "ErrorMessage":{
          "shape":"ErrorMessage",
          "documentation":"<p>The error message that explains why the event submission failed.</p>"
        }
      },
      "documentation":"<p>Represents an event that failed to be submitted.</p>"
    },
    "PutEventsResultEntryList":{
      "type":"list",
      "member":{"shape":"PutEventsResultEntry"}
    },
    "PutPermissionRequest":{
      "type":"structure",
      "required":[
        "Action",
        "Principal",
        "StatementId"
      ],
      "members":{
        "Action":{
          "shape":"Action",
          "documentation":"<p>The action that you are enabling the other account to perform. Currently, this must be <code>events:PutEvents</code>.</p>"
        },
        "Principal":{
          "shape":"Principal",
          "documentation":"<p>The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify \"*\" to permit any account to put events to your default event bus.</p> <p>If you specify \"*\", avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an <code>account</code> field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.</p>"
        },
        "StatementId":{
          "shape":"StatementId",
          "documentation":"<p>An identifier string for the external account that you are granting permissions to. If you later want to revoke the permission for this external account, specify this <code>StatementId</code> when you run <a>RemovePermission</a>.</p>"
        }
      }
    },
    "PutRuleRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule that you are creating or updating.</p>"
        },
        "ScheduleExpression":{
          "shape":"ScheduleExpression",
          "documentation":"<p>The scheduling expression. For example, \"cron(0 20 * * ? *)\" or \"rate(5 minutes)\".</p>"
        },
        "EventPattern":{
          "shape":"EventPattern",
          "documentation":"<p>The event pattern. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html\">Events and Event Patterns</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>"
        },
        "State":{
          "shape":"RuleState",
          "documentation":"<p>Indicates whether the rule is enabled or disabled.</p>"
        },
        "Description":{
          "shape":"RuleDescription",
          "documentation":"<p>A description of the rule.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>"
        }
      }
    },
    "PutRuleResponse":{
      "type":"structure",
      "members":{
        "RuleArn":{
          "shape":"RuleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the rule.</p>"
        }
      }
    },
    "PutTargetsRequest":{
      "type":"structure",
      "required":[
        "Rule",
        "Targets"
      ],
      "members":{
        "Rule":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        },
        "Targets":{
          "shape":"TargetList",
          "documentation":"<p>The targets to update or add to the rule.</p>"
        }
      }
    },
    "PutTargetsResponse":{
      "type":"structure",
      "members":{
        "FailedEntryCount":{
          "shape":"Integer",
          "documentation":"<p>The number of failed entries.</p>"
        },
        "FailedEntries":{
          "shape":"PutTargetsResultEntryList",
          "documentation":"<p>The failed target entries.</p>"
        }
      }
    },
    "PutTargetsResultEntry":{
      "type":"structure",
      "members":{
        "TargetId":{
          "shape":"TargetId",
          "documentation":"<p>The ID of the target.</p>"
        },
        "ErrorCode":{
          "shape":"ErrorCode",
          "documentation":"<p>The error code that indicates why the target addition failed. If the value is <code>ConcurrentModificationException</code>, too many requests were made at the same time.</p>"
        },
        "ErrorMessage":{
          "shape":"ErrorMessage",
          "documentation":"<p>The error message that explains why the target addition failed.</p>"
        }
      },
      "documentation":"<p>Represents a target that failed to be added to a rule.</p>"
    },
    "PutTargetsResultEntryList":{
      "type":"list",
      "member":{"shape":"PutTargetsResultEntry"}
    },
    "RemovePermissionRequest":{
      "type":"structure",
      "required":["StatementId"],
      "members":{
        "StatementId":{
          "shape":"StatementId",
          "documentation":"<p>The statement ID corresponding to the account that is no longer allowed to put events to the default event bus.</p>"
        }
      }
    },
    "RemoveTargetsRequest":{
      "type":"structure",
      "required":[
        "Rule",
        "Ids"
      ],
      "members":{
        "Rule":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        },
        "Ids":{
          "shape":"TargetIdList",
          "documentation":"<p>The IDs of the targets to remove from the rule.</p>"
        }
      }
    },
    "RemoveTargetsResponse":{
      "type":"structure",
      "members":{
        "FailedEntryCount":{
          "shape":"Integer",
          "documentation":"<p>The number of failed entries.</p>"
        },
        "FailedEntries":{
          "shape":"RemoveTargetsResultEntryList",
          "documentation":"<p>The failed target entries.</p>"
        }
      }
    },
    "RemoveTargetsResultEntry":{
      "type":"structure",
      "members":{
        "TargetId":{
          "shape":"TargetId",
          "documentation":"<p>The ID of the target.</p>"
        },
        "ErrorCode":{
          "shape":"ErrorCode",
          "documentation":"<p>The error code that indicates why the target removal failed. If the value is <code>ConcurrentModificationException</code>, too many requests were made at the same time.</p>"
        },
        "ErrorMessage":{
          "shape":"ErrorMessage",
          "documentation":"<p>The error message that explains why the target removal failed.</p>"
        }
      },
      "documentation":"<p>Represents a target that failed to be removed from a rule.</p>"
    },
    "RemoveTargetsResultEntryList":{
      "type":"list",
      "member":{"shape":"RemoveTargetsResultEntry"}
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An entity that you specified does not exist.</p>",
      "exception":true
    },
    "RoleArn":{
      "type":"string",
      "max":1600,
      "min":1
    },
    "Rule":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        },
        "Arn":{
          "shape":"RuleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the rule.</p>"
        },
        "EventPattern":{
          "shape":"EventPattern",
          "documentation":"<p>The event pattern of the rule. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html\">Events and Event Patterns</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>"
        },
        "State":{
          "shape":"RuleState",
          "documentation":"<p>The state of the rule.</p>"
        },
        "Description":{
          "shape":"RuleDescription",
          "documentation":"<p>The description of the rule.</p>"
        },
        "ScheduleExpression":{
          "shape":"ScheduleExpression",
          "documentation":"<p>The scheduling expression. For example, \"cron(0 20 * * ? *)\", \"rate(5 minutes)\".</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the role that is used for target invocation.</p>"
        }
      },
      "documentation":"<p>Contains information about a rule in Amazon CloudWatch Events.</p>"
    },
    "RuleArn":{
      "type":"string",
      "max":1600,
      "min":1
    },
    "RuleDescription":{
      "type":"string",
      "max":512
    },
    "RuleName":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"[\\.\\-_A-Za-z0-9]+"
    },
    "RuleNameList":{
      "type":"list",
      "member":{"shape":"RuleName"}
    },
    "RuleResponseList":{
      "type":"list",
      "member":{"shape":"Rule"}
    },
    "RuleState":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED"
      ]
    },
    "RunCommandParameters":{
      "type":"structure",
      "required":["RunCommandTargets"],
      "members":{
        "RunCommandTargets":{
          "shape":"RunCommandTargets",
          "documentation":"<p>Currently, we support including only one RunCommandTarget block, which specifies either an array of InstanceIds or a tag.</p>"
        }
      },
      "documentation":"<p>This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. </p>"
    },
    "RunCommandTarget":{
      "type":"structure",
      "required":[
        "Key",
        "Values"
      ],
      "members":{
        "Key":{
          "shape":"RunCommandTargetKey",
          "documentation":"<p>Can be either <code>tag:</code> <i>tag-key</i> or <code>InstanceIds</code>.</p>"
        },
        "Values":{
          "shape":"RunCommandTargetValues",
          "documentation":"<p>If <code>Key</code> is <code>tag:</code> <i>tag-key</i>, <code>Values</code> is a list of tag values. If <code>Key</code> is <code>InstanceIds</code>, <code>Values</code> is a list of Amazon EC2 instance IDs.</p>"
        }
      },
      "documentation":"<p>Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.</p>"
    },
    "RunCommandTargetKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*$"
    },
    "RunCommandTargetValue":{
      "type":"string",
      "max":256,
      "min":1
    },
    "RunCommandTargetValues":{
      "type":"list",
      "member":{"shape":"RunCommandTargetValue"},
      "max":50,
      "min":1
    },
    "RunCommandTargets":{
      "type":"list",
      "member":{"shape":"RunCommandTarget"},
      "max":5,
      "min":1
    },
    "ScheduleExpression":{
      "type":"string",
      "max":256
    },
    "SqsParameters":{
      "type":"structure",
      "members":{
        "MessageGroupId":{
          "shape":"MessageGroupId",
          "documentation":"<p>The FIFO message group ID to use as the target.</p>"
        }
      },
      "documentation":"<p>This structure includes the custom parameter to be used when the target is an SQS FIFO queue.</p>"
    },
    "StatementId":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"[a-zA-Z0-9-_]+"
    },
    "String":{"type":"string"},
    "StringList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "Target":{
      "type":"structure",
      "required":[
        "Id",
        "Arn"
      ],
      "members":{
        "Id":{
          "shape":"TargetId",
          "documentation":"<p>The ID of the target.</p>"
        },
        "Arn":{
          "shape":"TargetArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If one rule triggers multiple targets, you can use a different IAM role for each target.</p>"
        },
        "Input":{
          "shape":"TargetInput",
          "documentation":"<p>Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see <a href=\"http://www.rfc-editor.org/rfc/rfc7159.txt\">The JavaScript Object Notation (JSON) Data Interchange Format</a>.</p>"
        },
        "InputPath":{
          "shape":"TargetInputPath",
          "documentation":"<p>The value of the JSONPath that is used for extracting part of the matched event when passing it to the target. You must use JSON dot notation, not bracket notation. For more information about JSON paths, see <a href=\"http://goessner.net/articles/JsonPath/\">JSONPath</a>.</p>"
        },
        "InputTransformer":{
          "shape":"InputTransformer",
          "documentation":"<p>Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.</p>"
        },
        "KinesisParameters":{
          "shape":"KinesisParameters",
          "documentation":"<p>The custom parameter you can use to control the shard assignment, when the target is a Kinesis data stream. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key.</p>"
        },
        "RunCommandParameters":{
          "shape":"RunCommandParameters",
          "documentation":"<p>Parameters used when you are using the rule to invoke Amazon EC2 Run Command.</p>"
        },
        "EcsParameters":{
          "shape":"EcsParameters",
          "documentation":"<p>Contains the Amazon ECS task definition and task count to be used, if the event target is an Amazon ECS task. For more information about Amazon ECS tasks, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html\">Task Definitions </a> in the <i>Amazon EC2 Container Service Developer Guide</i>.</p>"
        },
        "BatchParameters":{
          "shape":"BatchParameters",
          "documentation":"<p>If the event target is an AWS Batch job, this contains the job definition, job name, and other parameters. For more information, see <a href=\"http://docs.aws.amazon.com/batch/latest/userguide/jobs.html\">Jobs</a> in the <i>AWS Batch User Guide</i>.</p>"
        },
        "SqsParameters":{
          "shape":"SqsParameters",
          "documentation":"<p>Contains the message group ID to use when the target is a FIFO queue.</p> <p>If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.</p>"
        }
      },
      "documentation":"<p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a>PutTargets</a>.</p>"
    },
    "TargetArn":{
      "type":"string",
      "max":1600,
      "min":1
    },
    "TargetId":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"[\\.\\-_A-Za-z0-9]+"
    },
    "TargetIdList":{
      "type":"list",
      "member":{"shape":"TargetId"},
      "max":100,
      "min":1
    },
    "TargetInput":{
      "type":"string",
      "max":8192
    },
    "TargetInputPath":{
      "type":"string",
      "max":256
    },
    "TargetList":{
      "type":"list",
      "member":{"shape":"Target"},
      "max":100,
      "min":1
    },
    "TargetPartitionKeyPath":{
      "type":"string",
      "max":256
    },
    "TestEventPatternRequest":{
      "type":"structure",
      "required":[
        "EventPattern",
        "Event"
      ],
      "members":{
        "EventPattern":{
          "shape":"EventPattern",
          "documentation":"<p>The event pattern. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html\">Events and Event Patterns</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>"
        },
        "Event":{
          "shape":"String",
          "documentation":"<p>The event, in JSON format, to test against the event pattern.</p>"
        }
      }
    },
    "TestEventPatternResponse":{
      "type":"structure",
      "members":{
        "Result":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the event matches the event pattern.</p>"
        }
      }
    },
    "TransformerInput":{
      "type":"string",
      "max":8192,
      "min":1
    },
    "TransformerPaths":{
      "type":"map",
      "key":{"shape":"InputTransformerPathKey"},
      "value":{"shape":"TargetInputPath"},
      "max":10
    }
  },
  "documentation":"<p>Amazon CloudWatch Events helps you to respond to state changes in your AWS resources. When your resources change state, they automatically send events into an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a pre-determined schedule. For example, you can configure rules to:</p> <ul> <li> <p>Automatically invoke an AWS Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.</p> </li> <li> <p>Direct specific API records from AWS CloudTrail to an Amazon Kinesis data stream for detailed analysis of potential security or availability risks.</p> </li> <li> <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.</p> </li> </ul> <p>For more information about the features of Amazon CloudWatch Events, see the <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/events\">Amazon CloudWatch Events User Guide</a>.</p>"
}
