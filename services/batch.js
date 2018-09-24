awsim['batch'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-08-10",
    "endpointPrefix":"batch",
    "jsonVersion":"1.1",
    "protocol":"rest-json",
    "serviceAbbreviation":"AWS Batch",
    "serviceFullName":"AWS Batch",
    "serviceId":"Batch",
    "signatureVersion":"v4",
    "uid":"batch-2016-08-10"
  },
  "operations":{
    "CancelJob":{
      "name":"CancelJob",
      "http":{
        "method":"POST",
        "requestUri":"/v1/canceljob"
      },
      "input":{"shape":"CancelJobRequest"},
      "output":{"shape":"CancelJobResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Cancels a job in an AWS Batch job queue. Jobs that are in the <code>SUBMITTED</code>, <code>PENDING</code>, or <code>RUNNABLE</code> state are cancelled. Jobs that have progressed to <code>STARTING</code> or <code>RUNNING</code> are not cancelled (but the API operation still succeeds, even if no job is cancelled); these jobs must be terminated with the <a>TerminateJob</a> operation.</p>"
    },
    "CreateComputeEnvironment":{
      "name":"CreateComputeEnvironment",
      "http":{
        "method":"POST",
        "requestUri":"/v1/createcomputeenvironment"
      },
      "input":{"shape":"CreateComputeEnvironmentRequest"},
      "output":{"shape":"CreateComputeEnvironmentResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Creates an AWS Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments.</p> <p>In a managed compute environment, AWS Batch manages the compute resources within the environment, based on the compute resources that you specify. Instances launched into a managed compute environment use a recent, approved version of the Amazon ECS-optimized AMI. You can choose to use Amazon EC2 On-Demand Instances in your managed compute environment, or you can use Amazon EC2 Spot Instances that only launch when the Spot bid price is below a specified percentage of the On-Demand price.</p> <p>In an unmanaged compute environment, you can manage your own compute resources. This provides more compute resource configuration options, such as using a custom AMI, but you must ensure that your AMI meets the Amazon ECS container instance AMI specification. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html\">Container Instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you have created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that is associated with it and then manually launch your container instances into that Amazon ECS cluster. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html\">Launching an Amazon ECS Container Instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "CreateJobQueue":{
      "name":"CreateJobQueue",
      "http":{
        "method":"POST",
        "requestUri":"/v1/createjobqueue"
      },
      "input":{"shape":"CreateJobQueueRequest"},
      "output":{"shape":"CreateJobQueueResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order in which the AWS Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>"
    },
    "DeleteComputeEnvironment":{
      "name":"DeleteComputeEnvironment",
      "http":{
        "method":"POST",
        "requestUri":"/v1/deletecomputeenvironment"
      },
      "input":{"shape":"DeleteComputeEnvironmentRequest"},
      "output":{"shape":"DeleteComputeEnvironmentResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Deletes an AWS Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation.</p>"
    },
    "DeleteJobQueue":{
      "name":"DeleteJobQueue",
      "http":{
        "method":"POST",
        "requestUri":"/v1/deletejobqueue"
      },
      "input":{"shape":"DeleteJobQueueRequest"},
      "output":{"shape":"DeleteJobQueueResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are terminated when you delete a job queue.</p> <p>It is not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request. </p>"
    },
    "DeregisterJobDefinition":{
      "name":"DeregisterJobDefinition",
      "http":{
        "method":"POST",
        "requestUri":"/v1/deregisterjobdefinition"
      },
      "input":{"shape":"DeregisterJobDefinitionRequest"},
      "output":{"shape":"DeregisterJobDefinitionResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Deregisters an AWS Batch job definition.</p>"
    },
    "DescribeComputeEnvironments":{
      "name":"DescribeComputeEnvironments",
      "http":{
        "method":"POST",
        "requestUri":"/v1/describecomputeenvironments"
      },
      "input":{"shape":"DescribeComputeEnvironmentsRequest"},
      "output":{"shape":"DescribeComputeEnvironmentsResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Describes one or more of your compute environments.</p> <p>If you are using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you should launch your Amazon ECS container instances into.</p>"
    },
    "DescribeJobDefinitions":{
      "name":"DescribeJobDefinitions",
      "http":{
        "method":"POST",
        "requestUri":"/v1/describejobdefinitions"
      },
      "input":{"shape":"DescribeJobDefinitionsRequest"},
      "output":{"shape":"DescribeJobDefinitionsResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.</p>"
    },
    "DescribeJobQueues":{
      "name":"DescribeJobQueues",
      "http":{
        "method":"POST",
        "requestUri":"/v1/describejobqueues"
      },
      "input":{"shape":"DescribeJobQueuesRequest"},
      "output":{"shape":"DescribeJobQueuesResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Describes one or more of your job queues.</p>"
    },
    "DescribeJobs":{
      "name":"DescribeJobs",
      "http":{
        "method":"POST",
        "requestUri":"/v1/describejobs"
      },
      "input":{"shape":"DescribeJobsRequest"},
      "output":{"shape":"DescribeJobsResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Describes a list of AWS Batch jobs.</p>"
    },
    "ListJobs":{
      "name":"ListJobs",
      "http":{
        "method":"POST",
        "requestUri":"/v1/listjobs"
      },
      "input":{"shape":"ListJobsRequest"},
      "output":{"shape":"ListJobsResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Returns a list of task jobs for a specified job queue. You can filter the results by job status with the <code>jobStatus</code> parameter. If you do not specify a status, only <code>RUNNING</code> jobs are returned.</p>"
    },
    "RegisterJobDefinition":{
      "name":"RegisterJobDefinition",
      "http":{
        "method":"POST",
        "requestUri":"/v1/registerjobdefinition"
      },
      "input":{"shape":"RegisterJobDefinitionRequest"},
      "output":{"shape":"RegisterJobDefinitionResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Registers an AWS Batch job definition. </p>"
    },
    "SubmitJob":{
      "name":"SubmitJob",
      "http":{
        "method":"POST",
        "requestUri":"/v1/submitjob"
      },
      "input":{"shape":"SubmitJobRequest"},
      "output":{"shape":"SubmitJobResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Submits an AWS Batch job from a job definition. Parameters specified during <a>SubmitJob</a> override parameters defined in the job definition. </p>"
    },
    "TerminateJob":{
      "name":"TerminateJob",
      "http":{
        "method":"POST",
        "requestUri":"/v1/terminatejob"
      },
      "input":{"shape":"TerminateJobRequest"},
      "output":{"shape":"TerminateJobResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.</p>"
    },
    "UpdateComputeEnvironment":{
      "name":"UpdateComputeEnvironment",
      "http":{
        "method":"POST",
        "requestUri":"/v1/updatecomputeenvironment"
      },
      "input":{"shape":"UpdateComputeEnvironmentRequest"},
      "output":{"shape":"UpdateComputeEnvironmentResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Updates an AWS Batch compute environment.</p>"
    },
    "UpdateJobQueue":{
      "name":"UpdateJobQueue",
      "http":{
        "method":"POST",
        "requestUri":"/v1/updatejobqueue"
      },
      "input":{"shape":"UpdateJobQueueRequest"},
      "output":{"shape":"UpdateJobQueueResponse"},
      "errors":[
        {"shape":"ClientException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Updates a job queue.</p>"
    }
  },
  "shapes":{
    "ArrayJobDependency":{
      "type":"string",
      "enum":[
        "N_TO_N",
        "SEQUENTIAL"
      ]
    },
    "ArrayJobStatusSummary":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"Integer"}
    },
    "ArrayProperties":{
      "type":"structure",
      "members":{
        "size":{
          "shape":"Integer",
          "documentation":"<p>The size of the array job.</p>"
        }
      },
      "documentation":"<p>An object representing an AWS Batch array job.</p>"
    },
    "ArrayPropertiesDetail":{
      "type":"structure",
      "members":{
        "statusSummary":{
          "shape":"ArrayJobStatusSummary",
          "documentation":"<p>A summary of the number of array job children in each available job status. This parameter is returned for parent array jobs.</p>"
        },
        "size":{
          "shape":"Integer",
          "documentation":"<p>The size of the array job. This parameter is returned for parent array jobs.</p>"
        },
        "index":{
          "shape":"Integer",
          "documentation":"<p>The job index within the array that is associated with this job. This parameter is returned for array job children.</p>"
        }
      },
      "documentation":"<p>An object representing the array properties of a job.</p>"
    },
    "ArrayPropertiesSummary":{
      "type":"structure",
      "members":{
        "size":{
          "shape":"Integer",
          "documentation":"<p>The size of the array job. This parameter is returned for parent array jobs.</p>"
        },
        "index":{
          "shape":"Integer",
          "documentation":"<p>The job index within the array that is associated with this job. This parameter is returned for children of array jobs.</p>"
        }
      },
      "documentation":"<p>An object representing the array properties of a job.</p>"
    },
    "AttemptContainerDetail":{
      "type":"structure",
      "members":{
        "containerInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Amazon ECS container instance that hosts the job attempt.</p>"
        },
        "taskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Amazon ECS task that is associated with the job attempt. Each container attempt receives a task ARN when they reach the <code>STARTING</code> status.</p>"
        },
        "exitCode":{
          "shape":"Integer",
          "documentation":"<p>The exit code for the job attempt. A non-zero exit code is considered a failure.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>A short (255 max characters) human-readable string to provide additional details about a running or stopped container.</p>"
        },
        "logStreamName":{
          "shape":"String",
          "documentation":"<p>The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the <code>RUNNING</code> status.</p>"
        }
      },
      "documentation":"<p>An object representing the details of a container that is part of a job attempt.</p>"
    },
    "AttemptDetail":{
      "type":"structure",
      "members":{
        "container":{
          "shape":"AttemptContainerDetail",
          "documentation":"<p>Details about the container in this job attempt.</p>"
        },
        "startedAt":{
          "shape":"Long",
          "documentation":"<p>The Unix time stamp (in seconds and milliseconds) for when the attempt was started (when the attempt transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>"
        },
        "stoppedAt":{
          "shape":"Long",
          "documentation":"<p>The Unix time stamp (in seconds and milliseconds) for when the attempt was stopped (when the attempt transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>"
        },
        "statusReason":{
          "shape":"String",
          "documentation":"<p>A short, human-readable string to provide additional details about the current status of the job attempt.</p>"
        }
      },
      "documentation":"<p>An object representing a job attempt.</p>"
    },
    "AttemptDetails":{
      "type":"list",
      "member":{"shape":"AttemptDetail"}
    },
    "Boolean":{"type":"boolean"},
    "CEState":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED"
      ]
    },
    "CEStatus":{
      "type":"string",
      "enum":[
        "CREATING",
        "UPDATING",
        "DELETING",
        "DELETED",
        "VALID",
        "INVALID"
      ]
    },
    "CEType":{
      "type":"string",
      "enum":[
        "MANAGED",
        "UNMANAGED"
      ]
    },
    "CRType":{
      "type":"string",
      "enum":[
        "EC2",
        "SPOT"
      ]
    },
    "CancelJobRequest":{
      "type":"structure",
      "required":[
        "jobId",
        "reason"
      ],
      "members":{
        "jobId":{
          "shape":"String",
          "documentation":"<p>The AWS Batch job ID of the job to cancel.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity logs. </p>"
        }
      }
    },
    "CancelJobResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ClientException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ComputeEnvironmentDetail":{
      "type":"structure",
      "required":[
        "computeEnvironmentName",
        "computeEnvironmentArn",
        "ecsClusterArn"
      ],
      "members":{
        "computeEnvironmentName":{
          "shape":"String",
          "documentation":"<p>The name of the compute environment. </p>"
        },
        "computeEnvironmentArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the compute environment. </p>"
        },
        "ecsClusterArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment. </p>"
        },
        "type":{
          "shape":"CEType",
          "documentation":"<p>The type of the compute environment.</p>"
        },
        "state":{
          "shape":"CEState",
          "documentation":"<p>The state of the compute environment. The valid values are <code>ENABLED</code> or <code>DISABLED</code>. An <code>ENABLED</code> state indicates that you can register instances with the compute environment and that the associated instances can accept jobs. </p>"
        },
        "status":{
          "shape":"CEStatus",
          "documentation":"<p>The current status of the compute environment (for example, <code>CREATING</code> or <code>VALID</code>).</p>"
        },
        "statusReason":{
          "shape":"String",
          "documentation":"<p>A short, human-readable string to provide additional details about the current status of the compute environment.</p>"
        },
        "computeResources":{
          "shape":"ComputeResource",
          "documentation":"<p>The compute resources defined for the compute environment. </p>"
        },
        "serviceRole":{
          "shape":"String",
          "documentation":"<p>The service role associated with the compute environment that allows AWS Batch to make calls to AWS API operations on your behalf.</p>"
        }
      },
      "documentation":"<p>An object representing an AWS Batch compute environment.</p>"
    },
    "ComputeEnvironmentDetailList":{
      "type":"list",
      "member":{"shape":"ComputeEnvironmentDetail"}
    },
    "ComputeEnvironmentOrder":{
      "type":"structure",
      "required":[
        "order",
        "computeEnvironment"
      ],
      "members":{
        "order":{
          "shape":"Integer",
          "documentation":"<p>The order of the compute environment.</p>"
        },
        "computeEnvironment":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the compute environment.</p>"
        }
      },
      "documentation":"<p>The order in which compute environments are tried for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first.</p>"
    },
    "ComputeEnvironmentOrders":{
      "type":"list",
      "member":{"shape":"ComputeEnvironmentOrder"}
    },
    "ComputeResource":{
      "type":"structure",
      "required":[
        "type",
        "minvCpus",
        "maxvCpus",
        "instanceTypes",
        "subnets",
        "securityGroupIds",
        "instanceRole"
      ],
      "members":{
        "type":{
          "shape":"CRType",
          "documentation":"<p>The type of compute environment.</p>"
        },
        "minvCpus":{
          "shape":"Integer",
          "documentation":"<p>The minimum number of EC2 vCPUs that an environment should maintain. </p>"
        },
        "maxvCpus":{
          "shape":"Integer",
          "documentation":"<p>The maximum number of EC2 vCPUs that an environment can reach. </p>"
        },
        "desiredvCpus":{
          "shape":"Integer",
          "documentation":"<p>The desired number of EC2 vCPUS in the compute environment. </p>"
        },
        "instanceTypes":{
          "shape":"StringList",
          "documentation":"<p>The instances types that may be launched. You can specify instance families to launch any instance type within those families (for example, <code>c4</code> or <code>p3</code>), or you can specify specific sizes within a family (such as <code>c4.8xlarge</code>). You can also choose <code>optimal</code> to pick instance types (from the latest C, M, and R instance families) on the fly that match the demand of your job queues.</p>"
        },
        "imageId":{
          "shape":"String",
          "documentation":"<p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.</p>"
        },
        "subnets":{
          "shape":"StringList",
          "documentation":"<p>The VPC subnets into which the compute resources are launched. </p>"
        },
        "securityGroupIds":{
          "shape":"StringList",
          "documentation":"<p>The EC2 security group that is associated with instances launched in the compute environment. </p>"
        },
        "ec2KeyPair":{
          "shape":"String",
          "documentation":"<p>The EC2 key pair that is used for instances launched in the compute environment.</p>"
        },
        "instanceRole":{
          "shape":"String",
          "documentation":"<p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, <code>ecsInstanceRole</code> or <code>arn:aws:iam::&lt;aws_account_id&gt;:instance-profile/ecsInstanceRole</code>. For more information, see <a href=\"http://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html\">Amazon ECS Instance Role</a> in the <i>AWS Batch User Guide</i>.</p>"
        },
        "tags":{
          "shape":"TagsMap",
          "documentation":"<p>Key-value pair tags to be applied to resources that are launched in the compute environment. </p>"
        },
        "bidPercentage":{
          "shape":"Integer",
          "documentation":"<p>The minimum percentage that a Spot Instance price must be when compared with the On-Demand price for that instance type before instances are launched. For example, if your bid percentage is 20%, then the Spot price must be below 20% of the current On-Demand price for that EC2 instance.</p>"
        },
        "spotIamFleetRole":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a <code>SPOT</code> compute environment.</p>"
        }
      },
      "documentation":"<p>An object representing an AWS Batch compute resource.</p>"
    },
    "ComputeResourceUpdate":{
      "type":"structure",
      "members":{
        "minvCpus":{
          "shape":"Integer",
          "documentation":"<p>The minimum number of EC2 vCPUs that an environment should maintain.</p>"
        },
        "maxvCpus":{
          "shape":"Integer",
          "documentation":"<p>The maximum number of EC2 vCPUs that an environment can reach.</p>"
        },
        "desiredvCpus":{
          "shape":"Integer",
          "documentation":"<p>The desired number of EC2 vCPUS in the compute environment.</p>"
        }
      },
      "documentation":"<p>An object representing the attributes of a compute environment that can be updated.</p>"
    },
    "ContainerDetail":{
      "type":"structure",
      "members":{
        "image":{
          "shape":"String",
          "documentation":"<p>The image used to start the container.</p>"
        },
        "vcpus":{
          "shape":"Integer",
          "documentation":"<p>The number of VCPUs allocated for the job. </p>"
        },
        "memory":{
          "shape":"Integer",
          "documentation":"<p>The number of MiB of memory reserved for the job.</p>"
        },
        "command":{
          "shape":"StringList",
          "documentation":"<p>The command that is passed to the container. </p>"
        },
        "jobRoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) associated with the job upon execution. </p>"
        },
        "volumes":{
          "shape":"Volumes",
          "documentation":"<p>A list of volumes associated with the job.</p>"
        },
        "environment":{
          "shape":"EnvironmentVariables",
          "documentation":"<p>The environment variables to pass to a container.</p> <note> <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p> </note>"
        },
        "mountPoints":{
          "shape":"MountPoints",
          "documentation":"<p>The mount points for data volumes in your container.</p>"
        },
        "readonlyRootFilesystem":{
          "shape":"Boolean",
          "documentation":"<p>When this parameter is true, the container is given read-only access to its root file system.</p>"
        },
        "ulimits":{
          "shape":"Ulimits",
          "documentation":"<p>A list of <code>ulimit</code> values to set in the container.</p>"
        },
        "privileged":{
          "shape":"Boolean",
          "documentation":"<p>When this parameter is true, the container is given elevated privileges on the host container instance (similar to the <code>root</code> user).</p>"
        },
        "user":{
          "shape":"String",
          "documentation":"<p>The user name to use inside the container.</p>"
        },
        "exitCode":{
          "shape":"Integer",
          "documentation":"<p>The exit code to return upon completion.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>A short (255 max characters) human-readable string to provide additional details about a running or stopped container.</p>"
        },
        "containerInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the container instance on which the container is running.</p>"
        },
        "taskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Amazon ECS task that is associated with the container job. Each container attempt receives a task ARN when they reach the <code>STARTING</code> status.</p>"
        },
        "logStreamName":{
          "shape":"String",
          "documentation":"<p>The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the <code>RUNNING</code> status.</p>"
        }
      },
      "documentation":"<p>An object representing the details of a container that is part of a job.</p>"
    },
    "ContainerOverrides":{
      "type":"structure",
      "members":{
        "vcpus":{
          "shape":"Integer",
          "documentation":"<p>The number of vCPUs to reserve for the container. This value overrides the value set in the job definition.</p>"
        },
        "memory":{
          "shape":"Integer",
          "documentation":"<p>The number of MiB of memory reserved for the job. This value overrides the value set in the job definition.</p>"
        },
        "command":{
          "shape":"StringList",
          "documentation":"<p>The command to send to the container that overrides the default command from the Docker image or the job definition.</p>"
        },
        "environment":{
          "shape":"EnvironmentVariables",
          "documentation":"<p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the job definition.</p> <note> <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p> </note>"
        }
      },
      "documentation":"<p>The overrides that should be sent to a container.</p>"
    },
    "ContainerProperties":{
      "type":"structure",
      "required":[
        "image",
        "vcpus",
        "memory"
      ],
      "members":{
        "image":{
          "shape":"String",
          "documentation":"<p>The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with <code> <i>repository-url</i>/<i>image</i>:<i>tag</i> </code>. Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to <code>Image</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>IMAGE</code> parameter of <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <ul> <li> <p>Images in Amazon ECR repositories use the full registry and repository URI (for example, <code>012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;</code>). </p> </li> <li> <p>Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or <code>mongo</code>).</p> </li> <li> <p>Images in other repositories on Docker Hub are qualified with an organization name (for example, <code>amazon/amazon-ecs-agent</code>).</p> </li> <li> <p>Images in other online repositories are qualified further by a domain name (for example, <code>quay.io/assemblyline/ubuntu</code>).</p> </li> </ul>"
        },
        "vcpus":{
          "shape":"Integer",
          "documentation":"<p>The number of vCPUs reserved for the container. This parameter maps to <code>CpuShares</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. You must specify at least one vCPU.</p>"
        },
        "memory":{
          "shape":"Integer",
          "documentation":"<p>The hard limit (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. This parameter maps to <code>Memory</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>--memory</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. You must specify at least 4 MiB of memory for a job.</p> <note> <p>If you are trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see <a href=\"http://docs.aws.amazon.com/batch/latest/userguide/memory-management.html\">Memory Management</a> in the <i>AWS Batch User Guide</i>.</p> </note>"
        },
        "command":{
          "shape":"StringList",
          "documentation":"<p>The command that is passed to the container. This parameter maps to <code>Cmd</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. For more information, see <a href=\"https://docs.docker.com/engine/reference/builder/#cmd\">https://docs.docker.com/engine/reference/builder/#cmd</a>.</p>"
        },
        "jobRoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions.</p>"
        },
        "volumes":{
          "shape":"Volumes",
          "documentation":"<p>A list of data volumes used in a job.</p>"
        },
        "environment":{
          "shape":"EnvironmentVariables",
          "documentation":"<p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>--env</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <important> <p>We do not recommend using plaintext environment variables for sensitive information, such as credential data.</p> </important> <note> <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p> </note>"
        },
        "mountPoints":{
          "shape":"MountPoints",
          "documentation":"<p>The mount points for data volumes in your container. This parameter maps to <code>Volumes</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>--volume</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        },
        "readonlyRootFilesystem":{
          "shape":"Boolean",
          "documentation":"<p>When this parameter is true, the container is given read-only access to its root file system. This parameter maps to <code>ReadonlyRootfs</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>--read-only</code> option to <code>docker run</code>.</p>"
        },
        "privileged":{
          "shape":"Boolean",
          "documentation":"<p>When this parameter is true, the container is given elevated privileges on the host container instance (similar to the <code>root</code> user). This parameter maps to <code>Privileged</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>--privileged</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        },
        "ulimits":{
          "shape":"Ulimits",
          "documentation":"<p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>--ulimit</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        },
        "user":{
          "shape":"String",
          "documentation":"<p>The user name to use inside the container. This parameter maps to <code>User</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/\">Docker Remote API</a> and the <code>--user</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        }
      },
      "documentation":"<p>Container properties are used in job definitions to describe the container that is launched as part of a job.</p>"
    },
    "ContainerSummary":{
      "type":"structure",
      "members":{
        "exitCode":{
          "shape":"Integer",
          "documentation":"<p>The exit code to return upon completion.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>A short (255 max characters) human-readable string to provide additional details about a running or stopped container.</p>"
        }
      },
      "documentation":"<p>An object representing summary details of a container within a job.</p>"
    },
    "CreateComputeEnvironmentRequest":{
      "type":"structure",
      "required":[
        "computeEnvironmentName",
        "type",
        "serviceRole"
      ],
      "members":{
        "computeEnvironmentName":{
          "shape":"String",
          "documentation":"<p>The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p>"
        },
        "type":{
          "shape":"CEType",
          "documentation":"<p>The type of the compute environment. </p>"
        },
        "state":{
          "shape":"CEState",
          "documentation":"<p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.</p>"
        },
        "computeResources":{
          "shape":"ComputeResource",
          "documentation":"<p>Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments.</p>"
        },
        "serviceRole":{
          "shape":"String",
          "documentation":"<p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>"
        }
      }
    },
    "CreateComputeEnvironmentResponse":{
      "type":"structure",
      "members":{
        "computeEnvironmentName":{
          "shape":"String",
          "documentation":"<p>The name of the compute environment.</p>"
        },
        "computeEnvironmentArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the compute environment. </p>"
        }
      }
    },
    "CreateJobQueueRequest":{
      "type":"structure",
      "required":[
        "jobQueueName",
        "priority",
        "computeEnvironmentOrder"
      ],
      "members":{
        "jobQueueName":{
          "shape":"String",
          "documentation":"<p>The name of the job queue.</p>"
        },
        "state":{
          "shape":"JQState",
          "documentation":"<p>The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs.</p>"
        },
        "priority":{
          "shape":"Integer",
          "documentation":"<p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>.</p>"
        },
        "computeEnvironmentOrder":{
          "shape":"ComputeEnvironmentOrders",
          "documentation":"<p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment should execute a given job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute environments with a job queue.</p>"
        }
      }
    },
    "CreateJobQueueResponse":{
      "type":"structure",
      "required":[
        "jobQueueName",
        "jobQueueArn"
      ],
      "members":{
        "jobQueueName":{
          "shape":"String",
          "documentation":"<p>The name of the job queue.</p>"
        },
        "jobQueueArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the job queue.</p>"
        }
      }
    },
    "DeleteComputeEnvironmentRequest":{
      "type":"structure",
      "required":["computeEnvironment"],
      "members":{
        "computeEnvironment":{
          "shape":"String",
          "documentation":"<p>The name or Amazon Resource Name (ARN) of the compute environment to delete. </p>"
        }
      }
    },
    "DeleteComputeEnvironmentResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteJobQueueRequest":{
      "type":"structure",
      "required":["jobQueue"],
      "members":{
        "jobQueue":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the queue to delete. </p>"
        }
      }
    },
    "DeleteJobQueueResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeregisterJobDefinitionRequest":{
      "type":"structure",
      "required":["jobDefinition"],
      "members":{
        "jobDefinition":{
          "shape":"String",
          "documentation":"<p>The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister. </p>"
        }
      }
    },
    "DeregisterJobDefinitionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeComputeEnvironmentsRequest":{
      "type":"structure",
      "members":{
        "computeEnvironments":{
          "shape":"StringList",
          "documentation":"<p>A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries. </p>"
        },
        "maxResults":{
          "shape":"Integer",
          "documentation":"<p>The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        }
      }
    },
    "DescribeComputeEnvironmentsResponse":{
      "type":"structure",
      "members":{
        "computeEnvironments":{
          "shape":"ComputeEnvironmentDetailList",
          "documentation":"<p>The list of compute environments.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>DescribeComputeEnvironments</code> request. When the results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "DescribeJobDefinitionsRequest":{
      "type":"structure",
      "members":{
        "jobDefinitions":{
          "shape":"StringList",
          "documentation":"<p>A space-separated list of up to 100 job definition names or full Amazon Resource Name (ARN) entries.</p>"
        },
        "maxResults":{
          "shape":"Integer",
          "documentation":"<p>The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        },
        "jobDefinitionName":{
          "shape":"String",
          "documentation":"<p>The name of the job definition to describe.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status with which to filter job definitions.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        }
      }
    },
    "DescribeJobDefinitionsResponse":{
      "type":"structure",
      "members":{
        "jobDefinitions":{
          "shape":"JobDefinitionList",
          "documentation":"<p>The list of job definitions. </p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>DescribeJobDefinitions</code> request. When the results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "DescribeJobQueuesRequest":{
      "type":"structure",
      "members":{
        "jobQueues":{
          "shape":"StringList",
          "documentation":"<p>A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.</p>"
        },
        "maxResults":{
          "shape":"Integer",
          "documentation":"<p>The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        }
      }
    },
    "DescribeJobQueuesResponse":{
      "type":"structure",
      "members":{
        "jobQueues":{
          "shape":"JobQueueDetailList",
          "documentation":"<p>The list of job queues. </p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>DescribeJobQueues</code> request. When the results of a <code>DescribeJobQueues</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "DescribeJobsRequest":{
      "type":"structure",
      "required":["jobs"],
      "members":{
        "jobs":{
          "shape":"StringList",
          "documentation":"<p>A space-separated list of up to 100 job IDs.</p>"
        }
      }
    },
    "DescribeJobsResponse":{
      "type":"structure",
      "members":{
        "jobs":{
          "shape":"JobDetailList",
          "documentation":"<p>The list of jobs. </p>"
        }
      }
    },
    "EnvironmentVariables":{
      "type":"list",
      "member":{"shape":"KeyValuePair"}
    },
    "Host":{
      "type":"structure",
      "members":{
        "sourcePath":{
          "shape":"String",
          "documentation":"<p>The path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the <code>host</code> parameter contains a <code>sourcePath</code> file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the <code>sourcePath</code> value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.</p>"
        }
      },
      "documentation":"<p>The contents of the <code>host</code> parameter determine whether your data volume persists on the host container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running.</p>"
    },
    "Integer":{"type":"integer"},
    "JQState":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED"
      ]
    },
    "JQStatus":{
      "type":"string",
      "enum":[
        "CREATING",
        "UPDATING",
        "DELETING",
        "DELETED",
        "VALID",
        "INVALID"
      ]
    },
    "JobDefinition":{
      "type":"structure",
      "required":[
        "jobDefinitionName",
        "jobDefinitionArn",
        "revision",
        "type"
      ],
      "members":{
        "jobDefinitionName":{
          "shape":"String",
          "documentation":"<p>The name of the job definition. </p>"
        },
        "jobDefinitionArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the job definition. </p>"
        },
        "revision":{
          "shape":"Integer",
          "documentation":"<p>The revision of the job definition.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the job definition.</p>"
        },
        "type":{
          "shape":"String",
          "documentation":"<p>The type of job definition.</p>"
        },
        "parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.</p>"
        },
        "retryStrategy":{
          "shape":"RetryStrategy",
          "documentation":"<p>The retry strategy to use for failed jobs that are submitted with this job definition.</p>"
        },
        "containerProperties":{
          "shape":"ContainerProperties",
          "documentation":"<p>An object with various properties specific to container-based jobs. </p>"
        },
        "timeout":{
          "shape":"JobTimeout",
          "documentation":"<p>The timeout configuration for jobs that are submitted with this job definition. You can specify a timeout duration after which AWS Batch terminates your jobs if they have not finished.</p>"
        }
      },
      "documentation":"<p>An object representing an AWS Batch job definition.</p>"
    },
    "JobDefinitionList":{
      "type":"list",
      "member":{"shape":"JobDefinition"}
    },
    "JobDefinitionType":{
      "type":"string",
      "enum":["container"]
    },
    "JobDependency":{
      "type":"structure",
      "members":{
        "jobId":{
          "shape":"String",
          "documentation":"<p>The job ID of the AWS Batch job associated with this dependency.</p>"
        },
        "type":{
          "shape":"ArrayJobDependency",
          "documentation":"<p>The type of the job dependency.</p>"
        }
      },
      "documentation":"<p>An object representing an AWS Batch job dependency.</p>"
    },
    "JobDependencyList":{
      "type":"list",
      "member":{"shape":"JobDependency"}
    },
    "JobDetail":{
      "type":"structure",
      "required":[
        "jobName",
        "jobId",
        "jobQueue",
        "status",
        "startedAt",
        "jobDefinition"
      ],
      "members":{
        "jobName":{
          "shape":"String",
          "documentation":"<p>The name of the job.</p>"
        },
        "jobId":{
          "shape":"String",
          "documentation":"<p>The ID for the job.</p>"
        },
        "jobQueue":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the job queue with which the job is associated.</p>"
        },
        "status":{
          "shape":"JobStatus",
          "documentation":"<p>The current status for the job.</p>"
        },
        "attempts":{
          "shape":"AttemptDetails",
          "documentation":"<p>A list of job attempts associated with this job.</p>"
        },
        "statusReason":{
          "shape":"String",
          "documentation":"<p>A short, human-readable string to provide additional details about the current status of the job. </p>"
        },
        "createdAt":{
          "shape":"Long",
          "documentation":"<p>The Unix time stamp (in seconds and milliseconds) for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called). For array child jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code> state.</p>"
        },
        "retryStrategy":{
          "shape":"RetryStrategy",
          "documentation":"<p>The retry strategy to use for this job if an attempt fails.</p>"
        },
        "startedAt":{
          "shape":"Long",
          "documentation":"<p>The Unix time stamp (in seconds and milliseconds) for when the job was started (when the job transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>"
        },
        "stoppedAt":{
          "shape":"Long",
          "documentation":"<p>The Unix time stamp (in seconds and milliseconds) for when the job was stopped (when the job transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>"
        },
        "dependsOn":{
          "shape":"JobDependencyList",
          "documentation":"<p>A list of job names or IDs on which this job depends.</p>"
        },
        "jobDefinition":{
          "shape":"String",
          "documentation":"<p>The job definition that is used by this job.</p>"
        },
        "parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>Additional parameters passed to the job that replace parameter substitution placeholders or override any corresponding parameter defaults from the job definition. </p>"
        },
        "container":{
          "shape":"ContainerDetail",
          "documentation":"<p>An object representing the details of the container that is associated with the job.</p>"
        },
        "arrayProperties":{
          "shape":"ArrayPropertiesDetail",
          "documentation":"<p>The array properties of the job, if it is an array job.</p>"
        },
        "timeout":{
          "shape":"JobTimeout",
          "documentation":"<p>The timeout configuration for the job. </p>"
        }
      },
      "documentation":"<p>An object representing an AWS Batch job.</p>"
    },
    "JobDetailList":{
      "type":"list",
      "member":{"shape":"JobDetail"}
    },
    "JobQueueDetail":{
      "type":"structure",
      "required":[
        "jobQueueName",
        "jobQueueArn",
        "state",
        "priority",
        "computeEnvironmentOrder"
      ],
      "members":{
        "jobQueueName":{
          "shape":"String",
          "documentation":"<p>The name of the job queue.</p>"
        },
        "jobQueueArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the job queue.</p>"
        },
        "state":{
          "shape":"JQState",
          "documentation":"<p>Describes the ability of the queue to accept new jobs.</p>"
        },
        "status":{
          "shape":"JQStatus",
          "documentation":"<p>The status of the job queue (for example, <code>CREATING</code> or <code>VALID</code>).</p>"
        },
        "statusReason":{
          "shape":"String",
          "documentation":"<p>A short, human-readable string to provide additional details about the current status of the job queue.</p>"
        },
        "priority":{
          "shape":"Integer",
          "documentation":"<p>The priority of the job queue. </p>"
        },
        "computeEnvironmentOrder":{
          "shape":"ComputeEnvironmentOrders",
          "documentation":"<p>The compute environments that are attached to the job queue and the order in which job placement is preferred. Compute environments are selected for job placement in ascending order.</p>"
        }
      },
      "documentation":"<p>An object representing the details of an AWS Batch job queue.</p>"
    },
    "JobQueueDetailList":{
      "type":"list",
      "member":{"shape":"JobQueueDetail"}
    },
    "JobStatus":{
      "type":"string",
      "enum":[
        "SUBMITTED",
        "PENDING",
        "RUNNABLE",
        "STARTING",
        "RUNNING",
        "SUCCEEDED",
        "FAILED"
      ]
    },
    "JobSummary":{
      "type":"structure",
      "required":[
        "jobId",
        "jobName"
      ],
      "members":{
        "jobId":{
          "shape":"String",
          "documentation":"<p>The ID of the job.</p>"
        },
        "jobName":{
          "shape":"String",
          "documentation":"<p>The name of the job.</p>"
        },
        "createdAt":{
          "shape":"Long",
          "documentation":"<p>The Unix time stamp for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called). For array child jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code> state.</p>"
        },
        "status":{
          "shape":"JobStatus",
          "documentation":"<p>The current status for the job.</p>"
        },
        "statusReason":{
          "shape":"String",
          "documentation":"<p>A short, human-readable string to provide additional details about the current status of the job.</p>"
        },
        "startedAt":{
          "shape":"Long",
          "documentation":"<p>The Unix time stamp for when the job was started (when the job transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>"
        },
        "stoppedAt":{
          "shape":"Long",
          "documentation":"<p>The Unix time stamp for when the job was stopped (when the job transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>"
        },
        "container":{
          "shape":"ContainerSummary",
          "documentation":"<p>An object representing the details of the container that is associated with the job.</p>"
        },
        "arrayProperties":{
          "shape":"ArrayPropertiesSummary",
          "documentation":"<p>The array properties of the job, if it is an array job.</p>"
        }
      },
      "documentation":"<p>An object representing summary details of a job.</p>"
    },
    "JobSummaryList":{
      "type":"list",
      "member":{"shape":"JobSummary"}
    },
    "JobTimeout":{
      "type":"structure",
      "members":{
        "attemptDurationSeconds":{
          "shape":"Integer",
          "documentation":"<p>The time duration in seconds (measured from the job attempt's <code>startedAt</code> timestamp) after which AWS Batch terminates your jobs if they have not finished.</p>"
        }
      },
      "documentation":"<p>An object representing a job timeout configuration.</p>"
    },
    "KeyValuePair":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the key-value pair. For environment variables, this is the name of the environment variable.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The value of the key-value pair. For environment variables, this is the value of the environment variable.</p>"
        }
      },
      "documentation":"<p>A key-value pair object.</p>"
    },
    "ListJobsRequest":{
      "type":"structure",
      "members":{
        "jobQueue":{
          "shape":"String",
          "documentation":"<p>The name or full Amazon Resource Name (ARN) of the job queue with which to list jobs.</p>"
        },
        "arrayJobId":{
          "shape":"String",
          "documentation":"<p>The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array.</p>"
        },
        "jobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The job status with which to filter jobs in the specified queue. If you do not specify a status, only <code>RUNNING</code> jobs are returned.</p>"
        },
        "maxResults":{
          "shape":"Integer",
          "documentation":"<p>The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        }
      }
    },
    "ListJobsResponse":{
      "type":"structure",
      "required":["jobSummaryList"],
      "members":{
        "jobSummaryList":{
          "shape":"JobSummaryList",
          "documentation":"<p>A list of job summaries that match the request.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListJobs</code> request. When the results of a <code>ListJobs</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "Long":{"type":"long"},
    "MountPoint":{
      "type":"structure",
      "members":{
        "containerPath":{
          "shape":"String",
          "documentation":"<p>The path on the container at which to mount the host volume.</p>"
        },
        "readOnly":{
          "shape":"Boolean",
          "documentation":"<p>If this value is <code>true</code>, the container has read-only access to the volume; otherwise, the container can write to the volume. The default value is <code>false</code>.</p>"
        },
        "sourceVolume":{
          "shape":"String",
          "documentation":"<p>The name of the volume to mount.</p>"
        }
      },
      "documentation":"<p>Details on a Docker volume mount point that is used in a job's container properties.</p>"
    },
    "MountPoints":{
      "type":"list",
      "member":{"shape":"MountPoint"}
    },
    "ParametersMap":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "RegisterJobDefinitionRequest":{
      "type":"structure",
      "required":[
        "jobDefinitionName",
        "type"
      ],
      "members":{
        "jobDefinitionName":{
          "shape":"String",
          "documentation":"<p>The name of the job definition to register. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p>"
        },
        "type":{
          "shape":"JobDefinitionType",
          "documentation":"<p>The type of job definition.</p>"
        },
        "parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.</p>"
        },
        "containerProperties":{
          "shape":"ContainerProperties",
          "documentation":"<p>An object with various properties specific for container-based jobs. This parameter is required if the <code>type</code> parameter is <code>container</code>.</p>"
        },
        "retryStrategy":{
          "shape":"RetryStrategy",
          "documentation":"<p>The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that is specified during a <a>SubmitJob</a> operation overrides the retry strategy defined here. If a job is terminated due to a timeout, it is not retried. </p>"
        },
        "timeout":{
          "shape":"JobTimeout",
          "documentation":"<p>The timeout configuration for jobs that are submitted with this job definition, after which AWS Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it is not retried. The minimum value for the timeout is 60 seconds. Any timeout configuration that is specified during a <a>SubmitJob</a> operation overrides the timeout configuration defined here. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html\">Job Timeouts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        }
      }
    },
    "RegisterJobDefinitionResponse":{
      "type":"structure",
      "required":[
        "jobDefinitionName",
        "jobDefinitionArn",
        "revision"
      ],
      "members":{
        "jobDefinitionName":{
          "shape":"String",
          "documentation":"<p>The name of the job definition.</p>"
        },
        "jobDefinitionArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the job definition. </p>"
        },
        "revision":{
          "shape":"Integer",
          "documentation":"<p>The revision of the job definition.</p>"
        }
      }
    },
    "RetryStrategy":{
      "type":"structure",
      "members":{
        "attempts":{
          "shape":"Integer",
          "documentation":"<p>The number of times to move a job to the <code>RUNNABLE</code> status. You may specify between 1 and 10 attempts. If the value of <code>attempts</code> is greater than one, the job is retried if it fails until it has moved to <code>RUNNABLE</code> that many times.</p>"
        }
      },
      "documentation":"<p>The retry strategy associated with a job.</p>"
    },
    "ServerException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>These errors are usually caused by a server issue.</p>",
      "error":{"httpStatusCode":500},
      "exception":true,
      "fault":true
    },
    "String":{"type":"string"},
    "StringList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "SubmitJobRequest":{
      "type":"structure",
      "required":[
        "jobName",
        "jobQueue",
        "jobDefinition"
      ],
      "members":{
        "jobName":{
          "shape":"String",
          "documentation":"<p>The name of the job. The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. </p>"
        },
        "jobQueue":{
          "shape":"String",
          "documentation":"<p>The job queue into which the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue. </p>"
        },
        "arrayProperties":{
          "shape":"ArrayProperties",
          "documentation":"<p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. For more information, see <a href=\"http://docs.aws.amazon.com/batch/latest/userguide/array_jobs.html\">Array Jobs</a> in the <i>AWS Batch User Guide</i>.</p>"
        },
        "dependsOn":{
          "shape":"JobDependencyList",
          "documentation":"<p>A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs so that each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.</p>"
        },
        "jobDefinition":{
          "shape":"String",
          "documentation":"<p>The job definition used by this job. This value can be either a <code>name:revision</code> or the Amazon Resource Name (ARN) for the job definition.</p>"
        },
        "parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.</p>"
        },
        "containerOverrides":{
          "shape":"ContainerOverrides",
          "documentation":"<p>A list of container overrides in JSON format that specify the name of a container in the specified job definition and the overrides it should receive. You can override the default command for a container (that is specified in the job definition or the Docker image) with a <code>command</code> override. You can also override existing environment variables (that are specified in the job definition or Docker image) on a container or add new environment variables to it with an <code>environment</code> override.</p>"
        },
        "retryStrategy":{
          "shape":"RetryStrategy",
          "documentation":"<p>The retry strategy to use for failed jobs from this <a>SubmitJob</a> operation. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.</p>"
        },
        "timeout":{
          "shape":"JobTimeout",
          "documentation":"<p>The timeout configuration for this <a>SubmitJob</a> operation. You can specify a timeout duration after which AWS Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it is not retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html\">Job Timeouts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        }
      }
    },
    "SubmitJobResponse":{
      "type":"structure",
      "required":[
        "jobName",
        "jobId"
      ],
      "members":{
        "jobName":{
          "shape":"String",
          "documentation":"<p>The name of the job. </p>"
        },
        "jobId":{
          "shape":"String",
          "documentation":"<p>The unique identifier for the job.</p>"
        }
      }
    },
    "TagsMap":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "TerminateJobRequest":{
      "type":"structure",
      "required":[
        "jobId",
        "reason"
      ],
      "members":{
        "jobId":{
          "shape":"String",
          "documentation":"<p>The AWS Batch job ID of the job to terminate.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity logs. </p>"
        }
      }
    },
    "TerminateJobResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Ulimit":{
      "type":"structure",
      "required":[
        "hardLimit",
        "name",
        "softLimit"
      ],
      "members":{
        "hardLimit":{
          "shape":"Integer",
          "documentation":"<p>The hard limit for the <code>ulimit</code> type.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The <code>type</code> of the <code>ulimit</code>.</p>"
        },
        "softLimit":{
          "shape":"Integer",
          "documentation":"<p>The soft limit for the <code>ulimit</code> type.</p>"
        }
      },
      "documentation":"<p>The <code>ulimit</code> settings to pass to the container.</p>"
    },
    "Ulimits":{
      "type":"list",
      "member":{"shape":"Ulimit"}
    },
    "UpdateComputeEnvironmentRequest":{
      "type":"structure",
      "required":["computeEnvironment"],
      "members":{
        "computeEnvironment":{
          "shape":"String",
          "documentation":"<p>The name or full Amazon Resource Name (ARN) of the compute environment to update.</p>"
        },
        "state":{
          "shape":"CEState",
          "documentation":"<p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.</p>"
        },
        "computeResources":{
          "shape":"ComputeResourceUpdate",
          "documentation":"<p>Details of the compute resources managed by the compute environment. Required for a managed compute environment.</p>"
        },
        "serviceRole":{
          "shape":"String",
          "documentation":"<p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>"
        }
      }
    },
    "UpdateComputeEnvironmentResponse":{
      "type":"structure",
      "members":{
        "computeEnvironmentName":{
          "shape":"String",
          "documentation":"<p>The name of compute environment.</p>"
        },
        "computeEnvironmentArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the compute environment. </p>"
        }
      }
    },
    "UpdateJobQueueRequest":{
      "type":"structure",
      "required":["jobQueue"],
      "members":{
        "jobQueue":{
          "shape":"String",
          "documentation":"<p>The name or the Amazon Resource Name (ARN) of the job queue.</p>"
        },
        "state":{
          "shape":"JQState",
          "documentation":"<p>Describes the queue's ability to accept new jobs.</p>"
        },
        "priority":{
          "shape":"Integer",
          "documentation":"<p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>.</p>"
        },
        "computeEnvironmentOrder":{
          "shape":"ComputeEnvironmentOrders",
          "documentation":"<p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment should execute a given job. </p>"
        }
      }
    },
    "UpdateJobQueueResponse":{
      "type":"structure",
      "members":{
        "jobQueueName":{
          "shape":"String",
          "documentation":"<p>The name of the job queue.</p>"
        },
        "jobQueueArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the job queue.</p>"
        }
      }
    },
    "Volume":{
      "type":"structure",
      "members":{
        "host":{
          "shape":"Host",
          "documentation":"<p>The contents of the <code>host</code> parameter determine whether your data volume persists on the host container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data is not guaranteed to persist after the containers associated with it stop running.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. This name is referenced in the <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.</p>"
        }
      },
      "documentation":"<p>A data volume used in a job's container properties.</p>"
    },
    "Volumes":{
      "type":"list",
      "member":{"shape":"Volume"}
    }
  },
  "documentation":"<p>AWS Batch enables you to run batch computing workloads on the AWS Cloud. Batch computing is a common way for developers, scientists, and engineers to access large amounts of compute resources, and AWS Batch removes the undifferentiated heavy lifting of configuring and managing the required infrastructure. AWS Batch will be familiar to users of traditional batch computing software. This service can efficiently provision resources in response to jobs submitted in order to eliminate capacity constraints, reduce compute costs, and deliver results quickly.</p> <p>As a fully managed service, AWS Batch enables developers, scientists, and engineers to run batch computing workloads of any scale. AWS Batch automatically provisions compute resources and optimizes the workload distribution based on the quantity and scale of the workloads. With AWS Batch, there is no need to install or manage batch computing software, which allows you to focus on analyzing results and solving problems. AWS Batch reduces operational complexities, saves time, and reduces costs, which makes it easy for developers, scientists, and engineers to run their batch jobs in the AWS Cloud.</p>"
}
