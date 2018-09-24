awsim['codepipeline'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-07-09",
    "endpointPrefix":"codepipeline",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"CodePipeline",
    "serviceFullName":"AWS CodePipeline",
    "serviceId":"CodePipeline",
    "signatureVersion":"v4",
    "targetPrefix":"CodePipeline_20150709",
    "uid":"codepipeline-2015-07-09"
  },
  "operations":{
    "AcknowledgeJob":{
      "name":"AcknowledgeJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AcknowledgeJobInput"},
      "output":{"shape":"AcknowledgeJobOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNonceException"},
        {"shape":"JobNotFoundException"}
      ],
      "documentation":"<p>Returns information about a specified job and whether that job has been received by the job worker. Only used for custom actions.</p>"
    },
    "AcknowledgeThirdPartyJob":{
      "name":"AcknowledgeThirdPartyJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AcknowledgeThirdPartyJobInput"},
      "output":{"shape":"AcknowledgeThirdPartyJobOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNonceException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InvalidClientTokenException"}
      ],
      "documentation":"<p>Confirms a job worker has received the specified job. Only used for partner actions.</p>"
    },
    "CreateCustomActionType":{
      "name":"CreateCustomActionType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateCustomActionTypeInput"},
      "output":{"shape":"CreateCustomActionTypeOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.</p>"
    },
    "CreatePipeline":{
      "name":"CreatePipeline",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePipelineInput"},
      "output":{"shape":"CreatePipelineOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNameInUseException"},
        {"shape":"InvalidStageDeclarationException"},
        {"shape":"InvalidActionDeclarationException"},
        {"shape":"InvalidBlockerDeclarationException"},
        {"shape":"InvalidStructureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a pipeline.</p>"
    },
    "DeleteCustomActionType":{
      "name":"DeleteCustomActionType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteCustomActionTypeInput"},
      "errors":[
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Marks a custom action as deleted. PollForJobs for the custom action will fail after the action is marked for deletion. Only used for custom actions.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>"
    },
    "DeletePipeline":{
      "name":"DeletePipeline",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeletePipelineInput"},
      "errors":[
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Deletes the specified pipeline.</p>"
    },
    "DeleteWebhook":{
      "name":"DeleteWebhook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteWebhookInput"},
      "output":{"shape":"DeleteWebhookOutput"},
      "errors":[
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API will return successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.</p>"
    },
    "DeregisterWebhookWithThirdParty":{
      "name":"DeregisterWebhookWithThirdParty",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeregisterWebhookWithThirdPartyInput"},
      "output":{"shape":"DeregisterWebhookWithThirdPartyOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"WebhookNotFoundException"}
      ],
      "documentation":"<p>Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently only supported for webhooks that target an action type of GitHub.</p>"
    },
    "DisableStageTransition":{
      "name":"DisableStageTransition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisableStageTransitionInput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNotFoundException"},
        {"shape":"StageNotFoundException"}
      ],
      "documentation":"<p>Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.</p>"
    },
    "EnableStageTransition":{
      "name":"EnableStageTransition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"EnableStageTransitionInput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNotFoundException"},
        {"shape":"StageNotFoundException"}
      ],
      "documentation":"<p>Enables artifacts in a pipeline to transition to a stage in a pipeline.</p>"
    },
    "GetJobDetails":{
      "name":"GetJobDetails",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetJobDetailsInput"},
      "output":{"shape":"GetJobDetailsOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"JobNotFoundException"}
      ],
      "documentation":"<p>Returns information about a job. Only used for custom actions.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action.</p> </important>"
    },
    "GetPipeline":{
      "name":"GetPipeline",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetPipelineInput"},
      "output":{"shape":"GetPipelineOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNotFoundException"},
        {"shape":"PipelineVersionNotFoundException"}
      ],
      "documentation":"<p>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.</p>"
    },
    "GetPipelineExecution":{
      "name":"GetPipelineExecution",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetPipelineExecutionInput"},
      "output":{"shape":"GetPipelineExecutionOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNotFoundException"},
        {"shape":"PipelineExecutionNotFoundException"}
      ],
      "documentation":"<p>Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.</p>"
    },
    "GetPipelineState":{
      "name":"GetPipelineState",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetPipelineStateInput"},
      "output":{"shape":"GetPipelineStateOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNotFoundException"}
      ],
      "documentation":"<p>Returns information about the state of a pipeline, including the stages and actions.</p>"
    },
    "GetThirdPartyJobDetails":{
      "name":"GetThirdPartyJobDetails",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetThirdPartyJobDetailsInput"},
      "output":{"shape":"GetThirdPartyJobDetailsOutput"},
      "errors":[
        {"shape":"JobNotFoundException"},
        {"shape":"ValidationException"},
        {"shape":"InvalidClientTokenException"},
        {"shape":"InvalidJobException"}
      ],
      "documentation":"<p>Requests the details of a job for a third party action. Only used for partner actions.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action.</p> </important>"
    },
    "ListActionTypes":{
      "name":"ListActionTypes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListActionTypesInput"},
      "output":{"shape":"ListActionTypesOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Gets a summary of all AWS CodePipeline action types associated with your account.</p>"
    },
    "ListPipelineExecutions":{
      "name":"ListPipelineExecutions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPipelineExecutionsInput"},
      "output":{"shape":"ListPipelineExecutionsOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNotFoundException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Gets a summary of the most recent executions for a pipeline.</p>"
    },
    "ListPipelines":{
      "name":"ListPipelines",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPipelinesInput"},
      "output":{"shape":"ListPipelinesOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Gets a summary of all of the pipelines associated with your account.</p>"
    },
    "ListWebhooks":{
      "name":"ListWebhooks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListWebhooksInput"},
      "output":{"shape":"ListWebhooksOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Gets a listing of all the webhooks in this region for this account. The output lists all webhooks and includes the webhook URL and ARN, as well the configuration for each webhook.</p>"
    },
    "PollForJobs":{
      "name":"PollForJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PollForJobsInput"},
      "output":{"shape":"PollForJobsOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"ActionTypeNotFoundException"}
      ],
      "documentation":"<p>Returns information about any jobs for AWS CodePipeline to act upon. PollForJobs is only valid for action types with \"Custom\" in the owner field. If the action type contains \"AWS\" or \"ThirdParty\" in the owner field, the PollForJobs action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action.</p> </important>"
    },
    "PollForThirdPartyJobs":{
      "name":"PollForThirdPartyJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PollForThirdPartyJobsInput"},
      "output":{"shape":"PollForThirdPartyJobsOutput"},
      "errors":[
        {"shape":"ActionTypeNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Determines whether there are any third party jobs for a job worker to act on. Only used for partner actions.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts.</p> </important>"
    },
    "PutActionRevision":{
      "name":"PutActionRevision",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutActionRevisionInput"},
      "output":{"shape":"PutActionRevisionOutput"},
      "errors":[
        {"shape":"PipelineNotFoundException"},
        {"shape":"StageNotFoundException"},
        {"shape":"ActionNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Provides information to AWS CodePipeline about new revisions to a source.</p>"
    },
    "PutApprovalResult":{
      "name":"PutApprovalResult",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutApprovalResultInput"},
      "output":{"shape":"PutApprovalResultOutput"},
      "errors":[
        {"shape":"InvalidApprovalTokenException"},
        {"shape":"ApprovalAlreadyCompletedException"},
        {"shape":"PipelineNotFoundException"},
        {"shape":"StageNotFoundException"},
        {"shape":"ActionNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.</p>"
    },
    "PutJobFailureResult":{
      "name":"PutJobFailureResult",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutJobFailureResultInput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InvalidJobStateException"}
      ],
      "documentation":"<p>Represents the failure of a job as returned to the pipeline by a job worker. Only used for custom actions.</p>"
    },
    "PutJobSuccessResult":{
      "name":"PutJobSuccessResult",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutJobSuccessResultInput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InvalidJobStateException"}
      ],
      "documentation":"<p>Represents the success of a job as returned to the pipeline by a job worker. Only used for custom actions.</p>"
    },
    "PutThirdPartyJobFailureResult":{
      "name":"PutThirdPartyJobFailureResult",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutThirdPartyJobFailureResultInput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InvalidJobStateException"},
        {"shape":"InvalidClientTokenException"}
      ],
      "documentation":"<p>Represents the failure of a third party job as returned to the pipeline by a job worker. Only used for partner actions.</p>"
    },
    "PutThirdPartyJobSuccessResult":{
      "name":"PutThirdPartyJobSuccessResult",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutThirdPartyJobSuccessResultInput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InvalidJobStateException"},
        {"shape":"InvalidClientTokenException"}
      ],
      "documentation":"<p>Represents the success of a third party job as returned to the pipeline by a job worker. Only used for partner actions.</p>"
    },
    "PutWebhook":{
      "name":"PutWebhook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutWebhookInput"},
      "output":{"shape":"PutWebhookOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidWebhookFilterPatternException"},
        {"shape":"InvalidWebhookAuthenticationParametersException"},
        {"shape":"PipelineNotFoundException"}
      ],
      "documentation":"<p>Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.</p>"
    },
    "RegisterWebhookWithThirdParty":{
      "name":"RegisterWebhookWithThirdParty",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RegisterWebhookWithThirdPartyInput"},
      "output":{"shape":"RegisterWebhookWithThirdPartyOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"WebhookNotFoundException"}
      ],
      "documentation":"<p>Configures a connection between the webhook that was created and the external tool with events to be detected.</p>"
    },
    "RetryStageExecution":{
      "name":"RetryStageExecution",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RetryStageExecutionInput"},
      "output":{"shape":"RetryStageExecutionOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNotFoundException"},
        {"shape":"StageNotFoundException"},
        {"shape":"StageNotRetryableException"},
        {"shape":"NotLatestPipelineExecutionException"}
      ],
      "documentation":"<p>Resumes the pipeline execution by retrying the last failed actions in a stage.</p>"
    },
    "StartPipelineExecution":{
      "name":"StartPipelineExecution",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartPipelineExecutionInput"},
      "output":{"shape":"StartPipelineExecutionOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"PipelineNotFoundException"}
      ],
      "documentation":"<p>Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.</p>"
    },
    "UpdatePipeline":{
      "name":"UpdatePipeline",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdatePipelineInput"},
      "output":{"shape":"UpdatePipelineOutput"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidStageDeclarationException"},
        {"shape":"InvalidActionDeclarationException"},
        {"shape":"InvalidBlockerDeclarationException"},
        {"shape":"InvalidStructureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure in conjunction with UpdatePipeline to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.</p>"
    }
  },
  "shapes":{
    "AWSSessionCredentials":{
      "type":"structure",
      "required":[
        "accessKeyId",
        "secretAccessKey",
        "sessionToken"
      ],
      "members":{
        "accessKeyId":{
          "shape":"AccessKeyId",
          "documentation":"<p>The access key for the session.</p>"
        },
        "secretAccessKey":{
          "shape":"SecretAccessKey",
          "documentation":"<p>The secret access key for the session.</p>"
        },
        "sessionToken":{
          "shape":"SessionToken",
          "documentation":"<p>The token for the session.</p>"
        }
      },
      "documentation":"<p>Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifact for the pipeline in AWS CodePipeline.</p>",
      "sensitive":true
    },
    "AccessKeyId":{"type":"string"},
    "AccountId":{
      "type":"string",
      "pattern":"[0-9]{12}"
    },
    "AcknowledgeJobInput":{
      "type":"structure",
      "required":[
        "jobId",
        "nonce"
      ],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique system-generated ID of the job for which you want to confirm receipt.</p>"
        },
        "nonce":{
          "shape":"Nonce",
          "documentation":"<p>A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Get this number from the response of the <a>PollForJobs</a> request that returned this job.</p>"
        }
      },
      "documentation":"<p>Represents the input of an AcknowledgeJob action.</p>"
    },
    "AcknowledgeJobOutput":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"JobStatus",
          "documentation":"<p>Whether the job worker has received the specified job.</p>"
        }
      },
      "documentation":"<p>Represents the output of an AcknowledgeJob action.</p>"
    },
    "AcknowledgeThirdPartyJobInput":{
      "type":"structure",
      "required":[
        "jobId",
        "nonce",
        "clientToken"
      ],
      "members":{
        "jobId":{
          "shape":"ThirdPartyJobId",
          "documentation":"<p>The unique system-generated ID of the job.</p>"
        },
        "nonce":{
          "shape":"Nonce",
          "documentation":"<p>A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Get this number from the response to a <a>GetThirdPartyJobDetails</a> request.</p>"
        },
        "clientToken":{
          "shape":"ClientToken",
          "documentation":"<p>The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.</p>"
        }
      },
      "documentation":"<p>Represents the input of an AcknowledgeThirdPartyJob action.</p>"
    },
    "AcknowledgeThirdPartyJobOutput":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"JobStatus",
          "documentation":"<p>The status information for the third party job, if any.</p>"
        }
      },
      "documentation":"<p>Represents the output of an AcknowledgeThirdPartyJob action.</p>"
    },
    "ActionCategory":{
      "type":"string",
      "enum":[
        "Source",
        "Build",
        "Deploy",
        "Test",
        "Invoke",
        "Approval"
      ]
    },
    "ActionConfiguration":{
      "type":"structure",
      "members":{
        "configuration":{
          "shape":"ActionConfigurationMap",
          "documentation":"<p>The configuration data for the action.</p>"
        }
      },
      "documentation":"<p>Represents information about an action configuration.</p>"
    },
    "ActionConfigurationKey":{
      "type":"string",
      "max":50,
      "min":1
    },
    "ActionConfigurationMap":{
      "type":"map",
      "key":{"shape":"ActionConfigurationKey"},
      "value":{"shape":"ActionConfigurationValue"}
    },
    "ActionConfigurationProperty":{
      "type":"structure",
      "required":[
        "name",
        "required",
        "key",
        "secret"
      ],
      "members":{
        "name":{
          "shape":"ActionConfigurationKey",
          "documentation":"<p>The name of the action configuration property.</p>"
        },
        "required":{
          "shape":"Boolean",
          "documentation":"<p>Whether the configuration property is a required value.</p>"
        },
        "key":{
          "shape":"Boolean",
          "documentation":"<p>Whether the configuration property is a key.</p>"
        },
        "secret":{
          "shape":"Boolean",
          "documentation":"<p>Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.</p> <p>When updating a pipeline, passing * * * * * without changing any other values of the action will preserve the prior value of the secret.</p>"
        },
        "queryable":{
          "shape":"Boolean",
          "documentation":"<p>Indicates that the property will be used in conjunction with PollForJobs. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.</p> <p>If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to additional restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>The description of the action configuration property that will be displayed to users.</p>"
        },
        "type":{
          "shape":"ActionConfigurationPropertyType",
          "documentation":"<p>The type of the configuration property.</p>"
        }
      },
      "documentation":"<p>Represents information about an action configuration property.</p>"
    },
    "ActionConfigurationPropertyList":{
      "type":"list",
      "member":{"shape":"ActionConfigurationProperty"},
      "max":10
    },
    "ActionConfigurationPropertyType":{
      "type":"string",
      "enum":[
        "String",
        "Number",
        "Boolean"
      ]
    },
    "ActionConfigurationQueryableValue":{
      "type":"string",
      "max":50,
      "min":1,
      "pattern":"[a-zA-Z0-9_-]+"
    },
    "ActionConfigurationValue":{
      "type":"string",
      "max":1000,
      "min":1
    },
    "ActionContext":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ActionName",
          "documentation":"<p>The name of the action within the context of a job.</p>"
        }
      },
      "documentation":"<p>Represents the context of an action within the stage of a pipeline to a job worker.</p>"
    },
    "ActionDeclaration":{
      "type":"structure",
      "required":[
        "name",
        "actionTypeId"
      ],
      "members":{
        "name":{
          "shape":"ActionName",
          "documentation":"<p>The action declaration's name.</p>"
        },
        "actionTypeId":{
          "shape":"ActionTypeId",
          "documentation":"<p>The configuration information for the action type.</p>"
        },
        "runOrder":{
          "shape":"ActionRunOrder",
          "documentation":"<p>The order in which actions are run.</p>"
        },
        "configuration":{
          "shape":"ActionConfigurationMap",
          "documentation":"<p>The action declaration's configuration.</p>"
        },
        "outputArtifacts":{
          "shape":"OutputArtifactList",
          "documentation":"<p>The name or ID of the result of the action declaration, such as a test or build artifact.</p>"
        },
        "inputArtifacts":{
          "shape":"InputArtifactList",
          "documentation":"<p>The name or ID of the artifact consumed by the action, such as a test or build artifact.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the IAM service role that will perform the declared action. This is assumed through the roleArn for the pipeline.</p>"
        }
      },
      "documentation":"<p>Represents information about an action declaration.</p>"
    },
    "ActionExecution":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"ActionExecutionStatus",
          "documentation":"<p>The status of the action, or for a completed action, the last status of the action.</p>"
        },
        "summary":{
          "shape":"ExecutionSummary",
          "documentation":"<p>A summary of the run of the action.</p>"
        },
        "lastStatusChange":{
          "shape":"Timestamp",
          "documentation":"<p>The last status change of the action.</p>"
        },
        "token":{
          "shape":"ActionExecutionToken",
          "documentation":"<p>The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the GetPipelineState command and is used to validate that the approval request corresponding to this token is still valid.</p>"
        },
        "lastUpdatedBy":{
          "shape":"LastUpdatedBy",
          "documentation":"<p>The ARN of the user who last changed the pipeline.</p>"
        },
        "externalExecutionId":{
          "shape":"ExecutionId",
          "documentation":"<p>The external ID of the run of the action.</p>"
        },
        "externalExecutionUrl":{
          "shape":"Url",
          "documentation":"<p>The URL of a resource external to AWS that will be used when running the action, for example an external repository URL.</p>"
        },
        "percentComplete":{
          "shape":"Percentage",
          "documentation":"<p>A percentage of completeness of the action as it runs.</p>"
        },
        "errorDetails":{
          "shape":"ErrorDetails",
          "documentation":"<p>The details of an error returned by a URL external to AWS.</p>"
        }
      },
      "documentation":"<p>Represents information about the run of an action.</p>"
    },
    "ActionExecutionStatus":{
      "type":"string",
      "enum":[
        "InProgress",
        "Succeeded",
        "Failed"
      ]
    },
    "ActionExecutionToken":{"type":"string"},
    "ActionName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[A-Za-z0-9.@\\-_]+"
    },
    "ActionNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified action cannot be found.</p>",
      "exception":true
    },
    "ActionOwner":{
      "type":"string",
      "enum":[
        "AWS",
        "ThirdParty",
        "Custom"
      ]
    },
    "ActionProvider":{
      "type":"string",
      "max":25,
      "min":1,
      "pattern":"[0-9A-Za-z_-]+"
    },
    "ActionRevision":{
      "type":"structure",
      "required":[
        "revisionId",
        "revisionChangeId",
        "created"
      ],
      "members":{
        "revisionId":{
          "shape":"Revision",
          "documentation":"<p>The system-generated unique ID that identifies the revision number of the action.</p>"
        },
        "revisionChangeId":{
          "shape":"RevisionChangeIdentifier",
          "documentation":"<p>The unique identifier of the change that set the state to this revision, for example a deployment ID or timestamp.</p>"
        },
        "created":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time when the most recent version of the action was created, in timestamp format.</p>"
        }
      },
      "documentation":"<p>Represents information about the version (or revision) of an action.</p>"
    },
    "ActionRunOrder":{
      "type":"integer",
      "max":999,
      "min":1
    },
    "ActionState":{
      "type":"structure",
      "members":{
        "actionName":{
          "shape":"ActionName",
          "documentation":"<p>The name of the action.</p>"
        },
        "currentRevision":{
          "shape":"ActionRevision",
          "documentation":"<p>Represents information about the version (or revision) of an action.</p>"
        },
        "latestExecution":{
          "shape":"ActionExecution",
          "documentation":"<p>Represents information about the run of an action.</p>"
        },
        "entityUrl":{
          "shape":"Url",
          "documentation":"<p>A URL link for more information about the state of the action, such as a deployment group details page.</p>"
        },
        "revisionUrl":{
          "shape":"Url",
          "documentation":"<p>A URL link for more information about the revision, such as a commit details page.</p>"
        }
      },
      "documentation":"<p>Represents information about the state of an action.</p>"
    },
    "ActionStateList":{
      "type":"list",
      "member":{"shape":"ActionState"}
    },
    "ActionType":{
      "type":"structure",
      "required":[
        "id",
        "inputArtifactDetails",
        "outputArtifactDetails"
      ],
      "members":{
        "id":{
          "shape":"ActionTypeId",
          "documentation":"<p>Represents information about an action type.</p>"
        },
        "settings":{
          "shape":"ActionTypeSettings",
          "documentation":"<p>The settings for the action type.</p>"
        },
        "actionConfigurationProperties":{
          "shape":"ActionConfigurationPropertyList",
          "documentation":"<p>The configuration properties for the action type.</p>"
        },
        "inputArtifactDetails":{
          "shape":"ArtifactDetails",
          "documentation":"<p>The details of the input artifact for the action, such as its commit ID.</p>"
        },
        "outputArtifactDetails":{
          "shape":"ArtifactDetails",
          "documentation":"<p>The details of the output artifact of the action, such as its commit ID.</p>"
        }
      },
      "documentation":"<p>Returns information about the details of an action type.</p>"
    },
    "ActionTypeId":{
      "type":"structure",
      "required":[
        "category",
        "owner",
        "provider",
        "version"
      ],
      "members":{
        "category":{
          "shape":"ActionCategory",
          "documentation":"<p>A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.</p>"
        },
        "owner":{
          "shape":"ActionOwner",
          "documentation":"<p>The creator of the action being called.</p>"
        },
        "provider":{
          "shape":"ActionProvider",
          "documentation":"<p>The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of AWS CodeDeploy, which would be specified as CodeDeploy.</p>"
        },
        "version":{
          "shape":"Version",
          "documentation":"<p>A string that describes the action version.</p>"
        }
      },
      "documentation":"<p>Represents information about an action type.</p>"
    },
    "ActionTypeList":{
      "type":"list",
      "member":{"shape":"ActionType"}
    },
    "ActionTypeNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified action type cannot be found.</p>",
      "exception":true
    },
    "ActionTypeSettings":{
      "type":"structure",
      "members":{
        "thirdPartyConfigurationUrl":{
          "shape":"Url",
          "documentation":"<p>The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.</p>"
        },
        "entityUrlTemplate":{
          "shape":"UrlTemplate",
          "documentation":"<p>The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. This link is provided as part of the action display within the pipeline.</p>"
        },
        "executionUrlTemplate":{
          "shape":"UrlTemplate",
          "documentation":"<p>The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as console page for AWS CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action.</p>"
        },
        "revisionUrlTemplate":{
          "shape":"UrlTemplate",
          "documentation":"<p>The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.</p>"
        }
      },
      "documentation":"<p>Returns information about the settings for an action type.</p>"
    },
    "ApprovalAlreadyCompletedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The approval action has already been approved or rejected.</p>",
      "exception":true
    },
    "ApprovalResult":{
      "type":"structure",
      "required":[
        "summary",
        "status"
      ],
      "members":{
        "summary":{
          "shape":"ApprovalSummary",
          "documentation":"<p>The summary of the current status of the approval request.</p>"
        },
        "status":{
          "shape":"ApprovalStatus",
          "documentation":"<p>The response submitted by a reviewer assigned to an approval action request.</p>"
        }
      },
      "documentation":"<p>Represents information about the result of an approval request.</p>"
    },
    "ApprovalStatus":{
      "type":"string",
      "enum":[
        "Approved",
        "Rejected"
      ]
    },
    "ApprovalSummary":{
      "type":"string",
      "max":512,
      "min":0
    },
    "ApprovalToken":{
      "type":"string",
      "pattern":"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    },
    "Artifact":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ArtifactName",
          "documentation":"<p>The artifact's name.</p>"
        },
        "revision":{
          "shape":"Revision",
          "documentation":"<p>The artifact's revision ID. Depending on the type of object, this could be a commit ID (GitHub) or a revision ID (Amazon S3).</p>"
        },
        "location":{
          "shape":"ArtifactLocation",
          "documentation":"<p>The location of an artifact.</p>"
        }
      },
      "documentation":"<p>Represents information about an artifact that will be worked upon by actions in the pipeline.</p>"
    },
    "ArtifactDetails":{
      "type":"structure",
      "required":[
        "minimumCount",
        "maximumCount"
      ],
      "members":{
        "minimumCount":{
          "shape":"MinimumArtifactCount",
          "documentation":"<p>The minimum number of artifacts allowed for the action type.</p>"
        },
        "maximumCount":{
          "shape":"MaximumArtifactCount",
          "documentation":"<p>The maximum number of artifacts allowed for the action type.</p>"
        }
      },
      "documentation":"<p>Returns information about the details of an artifact.</p>"
    },
    "ArtifactList":{
      "type":"list",
      "member":{"shape":"Artifact"}
    },
    "ArtifactLocation":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"ArtifactLocationType",
          "documentation":"<p>The type of artifact in the location.</p>"
        },
        "s3Location":{
          "shape":"S3ArtifactLocation",
          "documentation":"<p>The Amazon S3 bucket that contains the artifact.</p>"
        }
      },
      "documentation":"<p>Represents information about the location of an artifact.</p>"
    },
    "ArtifactLocationType":{
      "type":"string",
      "enum":["S3"]
    },
    "ArtifactName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[a-zA-Z0-9_\\-]+"
    },
    "ArtifactRevision":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ArtifactName",
          "documentation":"<p>The name of an artifact. This name might be system-generated, such as \"MyApp\", or might be defined by the user when an action is created.</p>"
        },
        "revisionId":{
          "shape":"Revision",
          "documentation":"<p>The revision ID of the artifact.</p>"
        },
        "revisionChangeIdentifier":{
          "shape":"RevisionChangeIdentifier",
          "documentation":"<p>An additional identifier for a revision, such as a commit date or, for artifacts stored in Amazon S3 buckets, the ETag value.</p>"
        },
        "revisionSummary":{
          "shape":"RevisionSummary",
          "documentation":"<p>Summary information about the most recent revision of the artifact. For GitHub and AWS CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the user-provided content of a <code>codepipeline-artifact-revision-summary</code> key specified in the object metadata.</p>"
        },
        "created":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time when the most recent revision of the artifact was created, in timestamp format.</p>"
        },
        "revisionUrl":{
          "shape":"Url",
          "documentation":"<p>The commit ID for the artifact revision. For artifacts stored in GitHub or AWS CodeCommit repositories, the commit ID is linked to a commit details page.</p>"
        }
      },
      "documentation":"<p>Represents revision details of an artifact. </p>"
    },
    "ArtifactRevisionList":{
      "type":"list",
      "member":{"shape":"ArtifactRevision"}
    },
    "ArtifactStore":{
      "type":"structure",
      "required":[
        "type",
        "location"
      ],
      "members":{
        "type":{
          "shape":"ArtifactStoreType",
          "documentation":"<p>The type of the artifact store, such as S3.</p>"
        },
        "location":{
          "shape":"ArtifactStoreLocation",
          "documentation":"<p>The Amazon S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder within the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any Amazon S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.</p>"
        },
        "encryptionKey":{
          "shape":"EncryptionKey",
          "documentation":"<p>The encryption key used to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If this is undefined, the default key for Amazon S3 is used.</p>"
        }
      },
      "documentation":"<p>The Amazon S3 bucket where artifacts are stored for the pipeline.</p>"
    },
    "ArtifactStoreLocation":{
      "type":"string",
      "max":63,
      "min":3,
      "pattern":"[a-zA-Z0-9\\-\\.]+"
    },
    "ArtifactStoreType":{
      "type":"string",
      "enum":["S3"]
    },
    "BlockerDeclaration":{
      "type":"structure",
      "required":[
        "name",
        "type"
      ],
      "members":{
        "name":{
          "shape":"BlockerName",
          "documentation":"<p>Reserved for future use.</p>"
        },
        "type":{
          "shape":"BlockerType",
          "documentation":"<p>Reserved for future use.</p>"
        }
      },
      "documentation":"<p>Reserved for future use.</p>"
    },
    "BlockerName":{
      "type":"string",
      "max":100,
      "min":1
    },
    "BlockerType":{
      "type":"string",
      "enum":["Schedule"]
    },
    "Boolean":{"type":"boolean"},
    "ClientId":{
      "type":"string",
      "pattern":"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    },
    "ClientToken":{
      "type":"string",
      "max":256,
      "min":1
    },
    "Code":{"type":"string"},
    "ContinuationToken":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "CreateCustomActionTypeInput":{
      "type":"structure",
      "required":[
        "category",
        "provider",
        "version",
        "inputArtifactDetails",
        "outputArtifactDetails"
      ],
      "members":{
        "category":{
          "shape":"ActionCategory",
          "documentation":"<p>The category of the custom action, such as a build action or a test action.</p> <note> <p>Although Source and Approval are listed as valid values, they are not currently functional. These values are reserved for future use.</p> </note>"
        },
        "provider":{
          "shape":"ActionProvider",
          "documentation":"<p>The provider of the service used in the custom action, such as AWS CodeDeploy.</p>"
        },
        "version":{
          "shape":"Version",
          "documentation":"<p>The version identifier of the custom action.</p>"
        },
        "settings":{
          "shape":"ActionTypeSettings",
          "documentation":"<p>Returns information about the settings for an action type.</p>"
        },
        "configurationProperties":{
          "shape":"ActionConfigurationPropertyList",
          "documentation":"<p>The configuration properties for the custom action.</p> <note> <p>You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see <a href=\"http://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html\">Create a Custom Action for a Pipeline</a>.</p> </note>"
        },
        "inputArtifactDetails":{
          "shape":"ArtifactDetails",
          "documentation":"<p>The details of the input artifact for the action, such as its commit ID.</p>"
        },
        "outputArtifactDetails":{
          "shape":"ArtifactDetails",
          "documentation":"<p>The details of the output artifact of the action, such as its commit ID.</p>"
        }
      },
      "documentation":"<p>Represents the input of a CreateCustomActionType operation.</p>"
    },
    "CreateCustomActionTypeOutput":{
      "type":"structure",
      "required":["actionType"],
      "members":{
        "actionType":{
          "shape":"ActionType",
          "documentation":"<p>Returns information about the details of an action type.</p>"
        }
      },
      "documentation":"<p>Represents the output of a CreateCustomActionType operation.</p>"
    },
    "CreatePipelineInput":{
      "type":"structure",
      "required":["pipeline"],
      "members":{
        "pipeline":{
          "shape":"PipelineDeclaration",
          "documentation":"<p>Represents the structure of actions and stages to be performed in the pipeline. </p>"
        }
      },
      "documentation":"<p>Represents the input of a CreatePipeline action.</p>"
    },
    "CreatePipelineOutput":{
      "type":"structure",
      "members":{
        "pipeline":{
          "shape":"PipelineDeclaration",
          "documentation":"<p>Represents the structure of actions and stages to be performed in the pipeline. </p>"
        }
      },
      "documentation":"<p>Represents the output of a CreatePipeline action.</p>"
    },
    "CurrentRevision":{
      "type":"structure",
      "required":[
        "revision",
        "changeIdentifier"
      ],
      "members":{
        "revision":{
          "shape":"Revision",
          "documentation":"<p>The revision ID of the current version of an artifact.</p>"
        },
        "changeIdentifier":{
          "shape":"RevisionChangeIdentifier",
          "documentation":"<p>The change identifier for the current revision.</p>"
        },
        "created":{
          "shape":"Time",
          "documentation":"<p>The date and time when the most recent revision of the artifact was created, in timestamp format.</p>"
        },
        "revisionSummary":{
          "shape":"RevisionSummary",
          "documentation":"<p>The summary of the most recent revision of the artifact.</p>"
        }
      },
      "documentation":"<p>Represents information about a current revision.</p>"
    },
    "DeleteCustomActionTypeInput":{
      "type":"structure",
      "required":[
        "category",
        "provider",
        "version"
      ],
      "members":{
        "category":{
          "shape":"ActionCategory",
          "documentation":"<p>The category of the custom action that you want to delete, such as source or deploy.</p>"
        },
        "provider":{
          "shape":"ActionProvider",
          "documentation":"<p>The provider of the service used in the custom action, such as AWS CodeDeploy.</p>"
        },
        "version":{
          "shape":"Version",
          "documentation":"<p>The version of the custom action to delete.</p>"
        }
      },
      "documentation":"<p>Represents the input of a DeleteCustomActionType operation. The custom action will be marked as deleted.</p>"
    },
    "DeletePipelineInput":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline to be deleted.</p>"
        }
      },
      "documentation":"<p>Represents the input of a DeletePipeline action.</p>"
    },
    "DeleteWebhookInput":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"WebhookName",
          "documentation":"<p>The name of the webhook you want to delete.</p>"
        }
      }
    },
    "DeleteWebhookOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeregisterWebhookWithThirdPartyInput":{
      "type":"structure",
      "members":{
        "webhookName":{
          "shape":"WebhookName",
          "documentation":"<p>The name of the webhook you want to deregister.</p>"
        }
      }
    },
    "DeregisterWebhookWithThirdPartyOutput":{
      "type":"structure",
      "members":{
      }
    },
    "Description":{
      "type":"string",
      "max":160,
      "min":1
    },
    "DisableStageTransitionInput":{
      "type":"structure",
      "required":[
        "pipelineName",
        "stageName",
        "transitionType",
        "reason"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline in which you want to disable the flow of artifacts from one stage to another.</p>"
        },
        "stageName":{
          "shape":"StageName",
          "documentation":"<p>The name of the stage where you want to disable the inbound or outbound transition of artifacts.</p>"
        },
        "transitionType":{
          "shape":"StageTransitionType",
          "documentation":"<p>Specifies whether artifacts will be prevented from transitioning into the stage and being processed by the actions in that stage (inbound), or prevented from transitioning from the stage after they have been processed by the actions in that stage (outbound).</p>"
        },
        "reason":{
          "shape":"DisabledReason",
          "documentation":"<p>The reason given to the user why a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.</p>"
        }
      },
      "documentation":"<p>Represents the input of a DisableStageTransition action.</p>"
    },
    "DisabledReason":{
      "type":"string",
      "max":300,
      "min":1,
      "pattern":"[a-zA-Z0-9!@ \\(\\)\\.\\*\\?\\-]+"
    },
    "EnableStageTransitionInput":{
      "type":"structure",
      "required":[
        "pipelineName",
        "stageName",
        "transitionType"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline in which you want to enable the flow of artifacts from one stage to another.</p>"
        },
        "stageName":{
          "shape":"StageName",
          "documentation":"<p>The name of the stage where you want to enable the transition of artifacts, either into the stage (inbound) or from that stage to the next stage (outbound).</p>"
        },
        "transitionType":{
          "shape":"StageTransitionType",
          "documentation":"<p>Specifies whether artifacts will be allowed to enter the stage and be processed by the actions in that stage (inbound) or whether already-processed artifacts will be allowed to transition to the next stage (outbound).</p>"
        }
      },
      "documentation":"<p>Represents the input of an EnableStageTransition action.</p>"
    },
    "Enabled":{"type":"boolean"},
    "EncryptionKey":{
      "type":"structure",
      "required":[
        "id",
        "type"
      ],
      "members":{
        "id":{
          "shape":"EncryptionKeyId",
          "documentation":"<p>The ID used to identify the key. For an AWS KMS key, this is the key ID or key ARN.</p>"
        },
        "type":{
          "shape":"EncryptionKeyType",
          "documentation":"<p>The type of encryption key, such as an AWS Key Management Service (AWS KMS) key. When creating or updating a pipeline, the value must be set to 'KMS'.</p>"
        }
      },
      "documentation":"<p>Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.</p>"
    },
    "EncryptionKeyId":{
      "type":"string",
      "max":100,
      "min":1
    },
    "EncryptionKeyType":{
      "type":"string",
      "enum":["KMS"]
    },
    "ErrorDetails":{
      "type":"structure",
      "members":{
        "code":{
          "shape":"Code",
          "documentation":"<p>The system ID or error number code of the error.</p>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>The text of the error message.</p>"
        }
      },
      "documentation":"<p>Represents information about an error in AWS CodePipeline.</p>"
    },
    "ExecutionDetails":{
      "type":"structure",
      "members":{
        "summary":{
          "shape":"ExecutionSummary",
          "documentation":"<p>The summary of the current status of the actions.</p>"
        },
        "externalExecutionId":{
          "shape":"ExecutionId",
          "documentation":"<p>The system-generated unique ID of this action used to identify this job worker in any external systems, such as AWS CodeDeploy.</p>"
        },
        "percentComplete":{
          "shape":"Percentage",
          "documentation":"<p>The percentage of work completed on the action, represented on a scale of zero to one hundred percent.</p>"
        }
      },
      "documentation":"<p>The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.</p>"
    },
    "ExecutionId":{
      "type":"string",
      "max":1500,
      "min":1
    },
    "ExecutionSummary":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "FailureDetails":{
      "type":"structure",
      "required":[
        "type",
        "message"
      ],
      "members":{
        "type":{
          "shape":"FailureType",
          "documentation":"<p>The type of the failure.</p>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>The message about the failure.</p>"
        },
        "externalExecutionId":{
          "shape":"ExecutionId",
          "documentation":"<p>The external ID of the run of the action that failed.</p>"
        }
      },
      "documentation":"<p>Represents information about failure details.</p>"
    },
    "FailureType":{
      "type":"string",
      "enum":[
        "JobFailed",
        "ConfigurationError",
        "PermissionError",
        "RevisionOutOfSync",
        "RevisionUnavailable",
        "SystemUnavailable"
      ]
    },
    "GetJobDetailsInput":{
      "type":"structure",
      "required":["jobId"],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique system-generated ID for the job.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetJobDetails action.</p>"
    },
    "GetJobDetailsOutput":{
      "type":"structure",
      "members":{
        "jobDetails":{
          "shape":"JobDetails",
          "documentation":"<p>The details of the job.</p> <note> <p>If AWSSessionCredentials is used, a long-running job can call GetJobDetails again to obtain new credentials.</p> </note>"
        }
      },
      "documentation":"<p>Represents the output of a GetJobDetails action.</p>"
    },
    "GetPipelineExecutionInput":{
      "type":"structure",
      "required":[
        "pipelineName",
        "pipelineExecutionId"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline about which you want to get execution details.</p>"
        },
        "pipelineExecutionId":{
          "shape":"PipelineExecutionId",
          "documentation":"<p>The ID of the pipeline execution about which you want to get execution details.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetPipelineExecution action.</p>"
    },
    "GetPipelineExecutionOutput":{
      "type":"structure",
      "members":{
        "pipelineExecution":{
          "shape":"PipelineExecution",
          "documentation":"<p>Represents information about the execution of a pipeline.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetPipelineExecution action.</p>"
    },
    "GetPipelineInput":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline for which you want to get information. Pipeline names must be unique under an Amazon Web Services (AWS) user account.</p>"
        },
        "version":{
          "shape":"PipelineVersion",
          "documentation":"<p>The version number of the pipeline. If you do not specify a version, defaults to the most current version.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetPipeline action.</p>"
    },
    "GetPipelineOutput":{
      "type":"structure",
      "members":{
        "pipeline":{
          "shape":"PipelineDeclaration",
          "documentation":"<p>Represents the structure of actions and stages to be performed in the pipeline. </p>"
        },
        "metadata":{
          "shape":"PipelineMetadata",
          "documentation":"<p>Represents the pipeline metadata information returned as part of the output of a GetPipeline action.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetPipeline action.</p>"
    },
    "GetPipelineStateInput":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline about which you want to get information.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetPipelineState action.</p>"
    },
    "GetPipelineStateOutput":{
      "type":"structure",
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline for which you want to get the state.</p>"
        },
        "pipelineVersion":{
          "shape":"PipelineVersion",
          "documentation":"<p>The version number of the pipeline.</p> <note> <p>A newly-created pipeline is always assigned a version number of <code>1</code>.</p> </note>"
        },
        "stageStates":{
          "shape":"StageStateList",
          "documentation":"<p>A list of the pipeline stage output information, including stage name, state, most recent run details, whether the stage is disabled, and other data.</p>"
        },
        "created":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the pipeline was created, in timestamp format.</p>"
        },
        "updated":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the pipeline was last updated, in timestamp format.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetPipelineState action.</p>"
    },
    "GetThirdPartyJobDetailsInput":{
      "type":"structure",
      "required":[
        "jobId",
        "clientToken"
      ],
      "members":{
        "jobId":{
          "shape":"ThirdPartyJobId",
          "documentation":"<p>The unique system-generated ID used for identifying the job.</p>"
        },
        "clientToken":{
          "shape":"ClientToken",
          "documentation":"<p>The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetThirdPartyJobDetails action.</p>"
    },
    "GetThirdPartyJobDetailsOutput":{
      "type":"structure",
      "members":{
        "jobDetails":{
          "shape":"ThirdPartyJobDetails",
          "documentation":"<p>The details of the job, including any protected values defined for the job.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetThirdPartyJobDetails action.</p>"
    },
    "InputArtifact":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"ArtifactName",
          "documentation":"<p>The name of the artifact to be worked on, for example, \"My App\".</p> <p>The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.</p>"
        }
      },
      "documentation":"<p>Represents information about an artifact to be worked on, such as a test or build artifact.</p>"
    },
    "InputArtifactList":{
      "type":"list",
      "member":{"shape":"InputArtifact"}
    },
    "InvalidActionDeclarationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified action declaration was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidApprovalTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The approval request already received a response or has expired.</p>",
      "exception":true
    },
    "InvalidBlockerDeclarationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Reserved for future use.</p>",
      "exception":true
    },
    "InvalidClientTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The client token was specified in an invalid format</p>",
      "exception":true
    },
    "InvalidJobException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified job was specified in an invalid format or cannot be found.</p>",
      "exception":true
    },
    "InvalidJobStateException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified job state was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.</p>",
      "exception":true
    },
    "InvalidNonceException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified nonce was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidStageDeclarationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified stage declaration was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidStructureException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified structure was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidWebhookAuthenticationParametersException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified authentication type is in an invalid format.</p>",
      "exception":true
    },
    "InvalidWebhookFilterPatternException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified event filter rule is in an invalid format.</p>",
      "exception":true
    },
    "Job":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"JobId",
          "documentation":"<p>The unique system-generated ID of the job.</p>"
        },
        "data":{
          "shape":"JobData",
          "documentation":"<p>Additional data about a job.</p>"
        },
        "nonce":{
          "shape":"Nonce",
          "documentation":"<p>A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an <a>AcknowledgeJob</a> request.</p>"
        },
        "accountId":{
          "shape":"AccountId",
          "documentation":"<p>The ID of the AWS account to use when performing the job.</p>"
        }
      },
      "documentation":"<p>Represents information about a job.</p>"
    },
    "JobData":{
      "type":"structure",
      "members":{
        "actionTypeId":{
          "shape":"ActionTypeId",
          "documentation":"<p>Represents information about an action type.</p>"
        },
        "actionConfiguration":{
          "shape":"ActionConfiguration",
          "documentation":"<p>Represents information about an action configuration.</p>"
        },
        "pipelineContext":{
          "shape":"PipelineContext",
          "documentation":"<p>Represents information about a pipeline to a job worker.</p>"
        },
        "inputArtifacts":{
          "shape":"ArtifactList",
          "documentation":"<p>The artifact supplied to the job.</p>"
        },
        "outputArtifacts":{
          "shape":"ArtifactList",
          "documentation":"<p>The output of the job.</p>"
        },
        "artifactCredentials":{
          "shape":"AWSSessionCredentials",
          "documentation":"<p>Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifact for the pipeline in AWS CodePipeline.</p>"
        },
        "continuationToken":{
          "shape":"ContinuationToken",
          "documentation":"<p>A system-generated token, such as a AWS CodeDeploy deployment ID, that a job requires in order to continue the job asynchronously.</p>"
        },
        "encryptionKey":{
          "shape":"EncryptionKey",
          "documentation":"<p>Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. </p>"
        }
      },
      "documentation":"<p>Represents additional information about a job required for a job worker to complete the job.</p>"
    },
    "JobDetails":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"JobId",
          "documentation":"<p>The unique system-generated ID of the job.</p>"
        },
        "data":{
          "shape":"JobData",
          "documentation":"<p>Represents additional information about a job required for a job worker to complete the job. </p>"
        },
        "accountId":{
          "shape":"AccountId",
          "documentation":"<p>The AWS account ID associated with the job.</p>"
        }
      },
      "documentation":"<p>Represents information about the details of a job.</p>"
    },
    "JobId":{
      "type":"string",
      "pattern":"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    },
    "JobList":{
      "type":"list",
      "member":{"shape":"Job"}
    },
    "JobNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified job was specified in an invalid format or cannot be found.</p>",
      "exception":true
    },
    "JobStatus":{
      "type":"string",
      "enum":[
        "Created",
        "Queued",
        "Dispatched",
        "InProgress",
        "TimedOut",
        "Succeeded",
        "Failed"
      ]
    },
    "JsonPath":{
      "type":"string",
      "max":150,
      "min":1
    },
    "LastChangedAt":{"type":"timestamp"},
    "LastChangedBy":{"type":"string"},
    "LastUpdatedBy":{"type":"string"},
    "LimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The number of pipelines associated with the AWS account has exceeded the limit allowed for the account.</p>",
      "exception":true
    },
    "ListActionTypesInput":{
      "type":"structure",
      "members":{
        "actionOwnerFilter":{
          "shape":"ActionOwner",
          "documentation":"<p>Filters the list of action types to those created by a specified entity.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier that was returned from the previous list action types call, which can be used to return the next set of action types in the list.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListActionTypes action.</p>"
    },
    "ListActionTypesOutput":{
      "type":"structure",
      "required":["actionTypes"],
      "members":{
        "actionTypes":{
          "shape":"ActionTypeList",
          "documentation":"<p>Provides details of the action types.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the amount of returned information is significantly large, an identifier is also returned which can be used in a subsequent list action types call to return the next set of action types in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListActionTypes action.</p>"
    },
    "ListPipelineExecutionsInput":{
      "type":"structure",
      "required":["pipelineName"],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline for which you want to get execution summary information.</p>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. The available pipeline execution history is limited to the most recent 12 months, based on pipeline execution start times. Default value is 100.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token that was returned from the previous ListPipelineExecutions call, which can be used to return the next set of pipeline executions in the list.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListPipelineExecutions action.</p>"
    },
    "ListPipelineExecutionsOutput":{
      "type":"structure",
      "members":{
        "pipelineExecutionSummaries":{
          "shape":"PipelineExecutionSummaryList",
          "documentation":"<p>A list of executions in the history of a pipeline.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used in the next ListPipelineExecutions call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListPipelineExecutions action.</p>"
    },
    "ListPipelinesInput":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier that was returned from the previous list pipelines call, which can be used to return the next set of pipelines in the list.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListPipelines action.</p>"
    },
    "ListPipelinesOutput":{
      "type":"structure",
      "members":{
        "pipelines":{
          "shape":"PipelineList",
          "documentation":"<p>The list of pipelines.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the amount of returned information is significantly large, an identifier is also returned which can be used in a subsequent list pipelines call to return the next set of pipelines in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListPipelines action.</p>"
    },
    "ListWebhookItem":{
      "type":"structure",
      "required":[
        "definition",
        "url"
      ],
      "members":{
        "definition":{
          "shape":"WebhookDefinition",
          "documentation":"<p>The detail returned for each webhook, such as the webhook authentication type and filter rules.</p>"
        },
        "url":{
          "shape":"WebhookUrl",
          "documentation":"<p>A unique URL generated by CodePipeline. When a POST request is made to this URL, the defined pipeline is started as long as the body of the post request satisfies the defined authentication and filtering conditions. Deleting and re-creating a webhook will make the old URL invalid and generate a new URL.</p>"
        },
        "errorMessage":{
          "shape":"WebhookErrorMessage",
          "documentation":"<p>The text of the error message about the webhook.</p>"
        },
        "errorCode":{
          "shape":"WebhookErrorCode",
          "documentation":"<p>The number code of the error.</p>"
        },
        "lastTriggered":{
          "shape":"WebhookLastTriggered",
          "documentation":"<p>The date and time a webhook was last successfully triggered, in timestamp format.</p>"
        },
        "arn":{
          "shape":"WebhookArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the webhook.</p>"
        }
      },
      "documentation":"<p>The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.</p>"
    },
    "ListWebhooksInput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token that was returned from the previous ListWebhooks call, which can be used to return the next set of webhooks in the list.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p>"
        }
      }
    },
    "ListWebhooksOutput":{
      "type":"structure",
      "members":{
        "webhooks":{
          "shape":"WebhookList",
          "documentation":"<p>The JSON detail returned for each webhook in the list output for the ListWebhooks call.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent ListWebhooks call to return the next set of webhooks in the list. </p>"
        }
      }
    },
    "MatchEquals":{
      "type":"string",
      "max":150,
      "min":1
    },
    "MaxBatchSize":{
      "type":"integer",
      "min":1
    },
    "MaxResults":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "MaximumArtifactCount":{
      "type":"integer",
      "max":5,
      "min":0
    },
    "Message":{
      "type":"string",
      "max":5000,
      "min":1
    },
    "MinimumArtifactCount":{
      "type":"integer",
      "max":5,
      "min":0
    },
    "NextToken":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "Nonce":{
      "type":"string",
      "max":50,
      "min":1
    },
    "NotLatestPipelineExecutionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The stage has failed in a later run of the pipeline and the pipelineExecutionId associated with the request is out of date.</p>",
      "exception":true
    },
    "OutputArtifact":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"ArtifactName",
          "documentation":"<p>The name of the output of an artifact, such as \"My App\".</p> <p>The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.</p> <p>Output artifact names must be unique within a pipeline.</p>"
        }
      },
      "documentation":"<p>Represents information about the output of an action.</p>"
    },
    "OutputArtifactList":{
      "type":"list",
      "member":{"shape":"OutputArtifact"}
    },
    "Percentage":{
      "type":"integer",
      "max":100,
      "min":0
    },
    "PipelineArn":{
      "type":"string",
      "pattern":"arn:aws(-[\\w]+)*:codepipeline:.+:[0-9]{12}:.+"
    },
    "PipelineContext":{
      "type":"structure",
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline. This is a user-specified value. Pipeline names must be unique across all pipeline names under an Amazon Web Services account.</p>"
        },
        "stage":{
          "shape":"StageContext",
          "documentation":"<p>The stage of the pipeline.</p>"
        },
        "action":{
          "shape":"ActionContext",
          "documentation":"<p>The context of an action to a job worker within the stage of a pipeline.</p>"
        }
      },
      "documentation":"<p>Represents information about a pipeline to a job worker.</p>"
    },
    "PipelineDeclaration":{
      "type":"structure",
      "required":[
        "name",
        "roleArn",
        "artifactStore",
        "stages"
      ],
      "members":{
        "name":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the action to be performed.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) for AWS CodePipeline to use to either perform actions with no actionRoleArn, or to use to assume roles for actions with an actionRoleArn.</p>"
        },
        "artifactStore":{
          "shape":"ArtifactStore",
          "documentation":"<p>Represents information about the Amazon S3 bucket where artifacts are stored for the pipeline. </p>"
        },
        "stages":{
          "shape":"PipelineStageDeclarationList",
          "documentation":"<p>The stage in which to perform the action.</p>"
        },
        "version":{
          "shape":"PipelineVersion",
          "documentation":"<p>The version number of the pipeline. A new pipeline always has a version number of 1. This number is automatically incremented when a pipeline is updated.</p>"
        }
      },
      "documentation":"<p>Represents the structure of actions and stages to be performed in the pipeline.</p>"
    },
    "PipelineExecution":{
      "type":"structure",
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline that was executed.</p>"
        },
        "pipelineVersion":{
          "shape":"PipelineVersion",
          "documentation":"<p>The version number of the pipeline that was executed.</p>"
        },
        "pipelineExecutionId":{
          "shape":"PipelineExecutionId",
          "documentation":"<p>The ID of the pipeline execution.</p>"
        },
        "status":{
          "shape":"PipelineExecutionStatus",
          "documentation":"<p>The status of the pipeline execution.</p> <ul> <li> <p>InProgress: The pipeline execution is currently running.</p> </li> <li> <p>Succeeded: The pipeline execution was completed successfully. </p> </li> <li> <p>Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. </p> </li> <li> <p>Failed: The pipeline execution was not completed successfully.</p> </li> </ul>"
        },
        "artifactRevisions":{
          "shape":"ArtifactRevisionList",
          "documentation":"<p>A list of ArtifactRevision objects included in a pipeline execution.</p>"
        }
      },
      "documentation":"<p>Represents information about an execution of a pipeline.</p>"
    },
    "PipelineExecutionId":{
      "type":"string",
      "pattern":"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    },
    "PipelineExecutionNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pipeline execution was specified in an invalid format or cannot be found, or an execution ID does not belong to the specified pipeline. </p>",
      "exception":true
    },
    "PipelineExecutionStatus":{
      "type":"string",
      "enum":[
        "InProgress",
        "Succeeded",
        "Superseded",
        "Failed"
      ]
    },
    "PipelineExecutionSummary":{
      "type":"structure",
      "members":{
        "pipelineExecutionId":{
          "shape":"PipelineExecutionId",
          "documentation":"<p>The ID of the pipeline execution.</p>"
        },
        "status":{
          "shape":"PipelineExecutionStatus",
          "documentation":"<p>The status of the pipeline execution.</p> <ul> <li> <p>InProgress: The pipeline execution is currently running.</p> </li> <li> <p>Succeeded: The pipeline execution was completed successfully. </p> </li> <li> <p>Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. </p> </li> <li> <p>Failed: The pipeline execution was not completed successfully.</p> </li> </ul>"
        },
        "startTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time when the pipeline execution began, in timestamp format.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time of the last change to the pipeline execution, in timestamp format.</p>"
        },
        "sourceRevisions":{"shape":"SourceRevisionList"}
      },
      "documentation":"<p>Summary information about a pipeline execution.</p>"
    },
    "PipelineExecutionSummaryList":{
      "type":"list",
      "member":{"shape":"PipelineExecutionSummary"}
    },
    "PipelineList":{
      "type":"list",
      "member":{"shape":"PipelineSummary"}
    },
    "PipelineMetadata":{
      "type":"structure",
      "members":{
        "pipelineArn":{
          "shape":"PipelineArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the pipeline.</p>"
        },
        "created":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the pipeline was created, in timestamp format.</p>"
        },
        "updated":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the pipeline was last updated, in timestamp format.</p>"
        }
      },
      "documentation":"<p>Information about a pipeline.</p>"
    },
    "PipelineName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[A-Za-z0-9.@\\-_]+"
    },
    "PipelineNameInUseException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified pipeline name is already in use.</p>",
      "exception":true
    },
    "PipelineNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified pipeline was specified in an invalid format or cannot be found.</p>",
      "exception":true
    },
    "PipelineStageDeclarationList":{
      "type":"list",
      "member":{"shape":"StageDeclaration"}
    },
    "PipelineSummary":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline.</p>"
        },
        "version":{
          "shape":"PipelineVersion",
          "documentation":"<p>The version number of the pipeline.</p>"
        },
        "created":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the pipeline was created, in timestamp format.</p>"
        },
        "updated":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time of the last update to the pipeline, in timestamp format.</p>"
        }
      },
      "documentation":"<p>Returns a summary of a pipeline.</p>"
    },
    "PipelineVersion":{
      "type":"integer",
      "min":1
    },
    "PipelineVersionNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified pipeline version was specified in an invalid format or cannot be found.</p>",
      "exception":true
    },
    "PollForJobsInput":{
      "type":"structure",
      "required":["actionTypeId"],
      "members":{
        "actionTypeId":{
          "shape":"ActionTypeId",
          "documentation":"<p>Represents information about an action type.</p>"
        },
        "maxBatchSize":{
          "shape":"MaxBatchSize",
          "documentation":"<p>The maximum number of jobs to return in a poll for jobs call.</p>"
        },
        "queryParam":{
          "shape":"QueryParamMap",
          "documentation":"<p>A map of property names and values. For an action type with no queryable properties, this value must be null or an empty map. For an action type with a queryable property, you must supply that property as a key in the map. Only jobs whose action configuration matches the mapped value will be returned.</p>"
        }
      },
      "documentation":"<p>Represents the input of a PollForJobs action.</p>"
    },
    "PollForJobsOutput":{
      "type":"structure",
      "members":{
        "jobs":{
          "shape":"JobList",
          "documentation":"<p>Information about the jobs to take action on.</p>"
        }
      },
      "documentation":"<p>Represents the output of a PollForJobs action.</p>"
    },
    "PollForThirdPartyJobsInput":{
      "type":"structure",
      "required":["actionTypeId"],
      "members":{
        "actionTypeId":{
          "shape":"ActionTypeId",
          "documentation":"<p>Represents information about an action type.</p>"
        },
        "maxBatchSize":{
          "shape":"MaxBatchSize",
          "documentation":"<p>The maximum number of jobs to return in a poll for jobs call.</p>"
        }
      },
      "documentation":"<p>Represents the input of a PollForThirdPartyJobs action.</p>"
    },
    "PollForThirdPartyJobsOutput":{
      "type":"structure",
      "members":{
        "jobs":{
          "shape":"ThirdPartyJobList",
          "documentation":"<p>Information about the jobs to take action on.</p>"
        }
      },
      "documentation":"<p>Represents the output of a PollForThirdPartyJobs action.</p>"
    },
    "PutActionRevisionInput":{
      "type":"structure",
      "required":[
        "pipelineName",
        "stageName",
        "actionName",
        "actionRevision"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline that will start processing the revision to the source.</p>"
        },
        "stageName":{
          "shape":"StageName",
          "documentation":"<p>The name of the stage that contains the action that will act upon the revision.</p>"
        },
        "actionName":{
          "shape":"ActionName",
          "documentation":"<p>The name of the action that will process the revision.</p>"
        },
        "actionRevision":{
          "shape":"ActionRevision",
          "documentation":"<p>Represents information about the version (or revision) of an action.</p>"
        }
      },
      "documentation":"<p>Represents the input of a PutActionRevision action.</p>"
    },
    "PutActionRevisionOutput":{
      "type":"structure",
      "members":{
        "newRevision":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the artifact revision was previously used in an execution of the specified pipeline.</p>"
        },
        "pipelineExecutionId":{
          "shape":"PipelineExecutionId",
          "documentation":"<p>The ID of the current workflow state of the pipeline.</p>"
        }
      },
      "documentation":"<p>Represents the output of a PutActionRevision action.</p>"
    },
    "PutApprovalResultInput":{
      "type":"structure",
      "required":[
        "pipelineName",
        "stageName",
        "actionName",
        "result",
        "token"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline that contains the action. </p>"
        },
        "stageName":{
          "shape":"StageName",
          "documentation":"<p>The name of the stage that contains the action.</p>"
        },
        "actionName":{
          "shape":"ActionName",
          "documentation":"<p>The name of the action for which approval is requested.</p>"
        },
        "result":{
          "shape":"ApprovalResult",
          "documentation":"<p>Represents information about the result of the approval request.</p>"
        },
        "token":{
          "shape":"ApprovalToken",
          "documentation":"<p>The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the <a>GetPipelineState</a> action and is used to validate that the approval request corresponding to this token is still valid.</p>"
        }
      },
      "documentation":"<p>Represents the input of a PutApprovalResult action.</p>"
    },
    "PutApprovalResultOutput":{
      "type":"structure",
      "members":{
        "approvedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp showing when the approval or rejection was submitted.</p>"
        }
      },
      "documentation":"<p>Represents the output of a PutApprovalResult action.</p>"
    },
    "PutJobFailureResultInput":{
      "type":"structure",
      "required":[
        "jobId",
        "failureDetails"
      ],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique system-generated ID of the job that failed. This is the same ID returned from PollForJobs.</p>"
        },
        "failureDetails":{
          "shape":"FailureDetails",
          "documentation":"<p>The details about the failure of a job.</p>"
        }
      },
      "documentation":"<p>Represents the input of a PutJobFailureResult action.</p>"
    },
    "PutJobSuccessResultInput":{
      "type":"structure",
      "required":["jobId"],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique system-generated ID of the job that succeeded. This is the same ID returned from PollForJobs.</p>"
        },
        "currentRevision":{
          "shape":"CurrentRevision",
          "documentation":"<p>The ID of the current revision of the artifact successfully worked upon by the job.</p>"
        },
        "continuationToken":{
          "shape":"ContinuationToken",
          "documentation":"<p>A token generated by a job worker, such as an AWS CodeDeploy deployment ID, that a successful job provides to identify a custom action in progress. Future jobs will use this token in order to identify the running instance of the action. It can be reused to return additional information about the progress of the custom action. When the action is complete, no continuation token should be supplied.</p>"
        },
        "executionDetails":{
          "shape":"ExecutionDetails",
          "documentation":"<p>The execution details of the successful job, such as the actions taken by the job worker.</p>"
        }
      },
      "documentation":"<p>Represents the input of a PutJobSuccessResult action.</p>"
    },
    "PutThirdPartyJobFailureResultInput":{
      "type":"structure",
      "required":[
        "jobId",
        "clientToken",
        "failureDetails"
      ],
      "members":{
        "jobId":{
          "shape":"ThirdPartyJobId",
          "documentation":"<p>The ID of the job that failed. This is the same ID returned from PollForThirdPartyJobs.</p>"
        },
        "clientToken":{
          "shape":"ClientToken",
          "documentation":"<p>The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.</p>"
        },
        "failureDetails":{
          "shape":"FailureDetails",
          "documentation":"<p>Represents information about failure details.</p>"
        }
      },
      "documentation":"<p>Represents the input of a PutThirdPartyJobFailureResult action.</p>"
    },
    "PutThirdPartyJobSuccessResultInput":{
      "type":"structure",
      "required":[
        "jobId",
        "clientToken"
      ],
      "members":{
        "jobId":{
          "shape":"ThirdPartyJobId",
          "documentation":"<p>The ID of the job that successfully completed. This is the same ID returned from PollForThirdPartyJobs.</p>"
        },
        "clientToken":{
          "shape":"ClientToken",
          "documentation":"<p>The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.</p>"
        },
        "currentRevision":{
          "shape":"CurrentRevision",
          "documentation":"<p>Represents information about a current revision.</p>"
        },
        "continuationToken":{
          "shape":"ContinuationToken",
          "documentation":"<p>A token generated by a job worker, such as an AWS CodeDeploy deployment ID, that a successful job provides to identify a partner action in progress. Future jobs will use this token in order to identify the running instance of the action. It can be reused to return additional information about the progress of the partner action. When the action is complete, no continuation token should be supplied.</p>"
        },
        "executionDetails":{
          "shape":"ExecutionDetails",
          "documentation":"<p>The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. </p>"
        }
      },
      "documentation":"<p>Represents the input of a PutThirdPartyJobSuccessResult action.</p>"
    },
    "PutWebhookInput":{
      "type":"structure",
      "required":["webhook"],
      "members":{
        "webhook":{
          "shape":"WebhookDefinition",
          "documentation":"<p>The detail provided in an input file to create the webhook, such as the webhook name, the pipeline name, and the action name. Give the webhook a unique name which identifies the webhook being defined. You may choose to name the webhook after the pipeline and action it targets so that you can easily recognize what it's used for later.</p>"
        }
      }
    },
    "PutWebhookOutput":{
      "type":"structure",
      "members":{
        "webhook":{
          "shape":"ListWebhookItem",
          "documentation":"<p>The detail returned from creating the webhook, such as the webhook name, webhook URL, and webhook ARN.</p>"
        }
      }
    },
    "QueryParamMap":{
      "type":"map",
      "key":{"shape":"ActionConfigurationKey"},
      "value":{"shape":"ActionConfigurationQueryableValue"},
      "max":1,
      "min":0
    },
    "RegisterWebhookWithThirdPartyInput":{
      "type":"structure",
      "members":{
        "webhookName":{
          "shape":"WebhookName",
          "documentation":"<p>The name of an existing webhook created with PutWebhook to register with a supported third party. </p>"
        }
      }
    },
    "RegisterWebhookWithThirdPartyOutput":{
      "type":"structure",
      "members":{
      }
    },
    "RetryStageExecutionInput":{
      "type":"structure",
      "required":[
        "pipelineName",
        "stageName",
        "pipelineExecutionId",
        "retryMode"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline that contains the failed stage.</p>"
        },
        "stageName":{
          "shape":"StageName",
          "documentation":"<p>The name of the failed stage to be retried.</p>"
        },
        "pipelineExecutionId":{
          "shape":"PipelineExecutionId",
          "documentation":"<p>The ID of the pipeline execution in the failed stage to be retried. Use the <a>GetPipelineState</a> action to retrieve the current pipelineExecutionId of the failed stage</p>"
        },
        "retryMode":{
          "shape":"StageRetryMode",
          "documentation":"<p>The scope of the retry attempt. Currently, the only supported value is FAILED_ACTIONS.</p>"
        }
      },
      "documentation":"<p>Represents the input of a RetryStageExecution action.</p>"
    },
    "RetryStageExecutionOutput":{
      "type":"structure",
      "members":{
        "pipelineExecutionId":{
          "shape":"PipelineExecutionId",
          "documentation":"<p>The ID of the current workflow execution in the failed stage.</p>"
        }
      },
      "documentation":"<p>Represents the output of a RetryStageExecution action.</p>"
    },
    "Revision":{
      "type":"string",
      "max":1500,
      "min":1
    },
    "RevisionChangeIdentifier":{
      "type":"string",
      "max":100,
      "min":1
    },
    "RevisionSummary":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "RoleArn":{
      "type":"string",
      "max":1024,
      "pattern":"arn:aws(-[\\w]+)*:iam::[0-9]{12}:role/.*"
    },
    "S3ArtifactLocation":{
      "type":"structure",
      "required":[
        "bucketName",
        "objectKey"
      ],
      "members":{
        "bucketName":{
          "shape":"S3BucketName",
          "documentation":"<p>The name of the Amazon S3 bucket.</p>"
        },
        "objectKey":{
          "shape":"S3ObjectKey",
          "documentation":"<p>The key of the object in the Amazon S3 bucket, which uniquely identifies the object in the bucket.</p>"
        }
      },
      "documentation":"<p>The location of the Amazon S3 bucket that contains a revision.</p>"
    },
    "S3BucketName":{"type":"string"},
    "S3ObjectKey":{"type":"string"},
    "SecretAccessKey":{"type":"string"},
    "SessionToken":{"type":"string"},
    "SourceRevision":{
      "type":"structure",
      "required":["actionName"],
      "members":{
        "actionName":{"shape":"ActionName"},
        "revisionId":{"shape":"Revision"},
        "revisionSummary":{"shape":"RevisionSummary"},
        "revisionUrl":{"shape":"Url"}
      }
    },
    "SourceRevisionList":{
      "type":"list",
      "member":{"shape":"SourceRevision"}
    },
    "StageActionDeclarationList":{
      "type":"list",
      "member":{"shape":"ActionDeclaration"}
    },
    "StageBlockerDeclarationList":{
      "type":"list",
      "member":{"shape":"BlockerDeclaration"}
    },
    "StageContext":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"StageName",
          "documentation":"<p>The name of the stage.</p>"
        }
      },
      "documentation":"<p>Represents information about a stage to a job worker.</p>"
    },
    "StageDeclaration":{
      "type":"structure",
      "required":[
        "name",
        "actions"
      ],
      "members":{
        "name":{
          "shape":"StageName",
          "documentation":"<p>The name of the stage.</p>"
        },
        "blockers":{
          "shape":"StageBlockerDeclarationList",
          "documentation":"<p>Reserved for future use.</p>"
        },
        "actions":{
          "shape":"StageActionDeclarationList",
          "documentation":"<p>The actions included in a stage.</p>"
        }
      },
      "documentation":"<p>Represents information about a stage and its definition.</p>"
    },
    "StageExecution":{
      "type":"structure",
      "required":[
        "pipelineExecutionId",
        "status"
      ],
      "members":{
        "pipelineExecutionId":{
          "shape":"PipelineExecutionId",
          "documentation":"<p>The ID of the pipeline execution associated with the stage.</p>"
        },
        "status":{
          "shape":"StageExecutionStatus",
          "documentation":"<p>The status of the stage, or for a completed stage, the last status of the stage.</p>"
        }
      },
      "documentation":"<p>Represents information about the run of a stage.</p>"
    },
    "StageExecutionStatus":{
      "type":"string",
      "enum":[
        "InProgress",
        "Failed",
        "Succeeded"
      ]
    },
    "StageName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[A-Za-z0-9.@\\-_]+"
    },
    "StageNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified stage was specified in an invalid format or cannot be found.</p>",
      "exception":true
    },
    "StageNotRetryableException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified stage can't be retried because the pipeline structure or stage state changed after the stage was not completed; the stage contains no failed actions; one or more actions are still in progress; or another retry attempt is already in progress. </p>",
      "exception":true
    },
    "StageRetryMode":{
      "type":"string",
      "enum":["FAILED_ACTIONS"]
    },
    "StageState":{
      "type":"structure",
      "members":{
        "stageName":{
          "shape":"StageName",
          "documentation":"<p>The name of the stage.</p>"
        },
        "inboundTransitionState":{
          "shape":"TransitionState",
          "documentation":"<p>The state of the inbound transition, which is either enabled or disabled.</p>"
        },
        "actionStates":{
          "shape":"ActionStateList",
          "documentation":"<p>The state of the stage.</p>"
        },
        "latestExecution":{
          "shape":"StageExecution",
          "documentation":"<p>Information about the latest execution in the stage, including its ID and status.</p>"
        }
      },
      "documentation":"<p>Represents information about the state of the stage.</p>"
    },
    "StageStateList":{
      "type":"list",
      "member":{"shape":"StageState"}
    },
    "StageTransitionType":{
      "type":"string",
      "enum":[
        "Inbound",
        "Outbound"
      ]
    },
    "StartPipelineExecutionInput":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline to start.</p>"
        }
      },
      "documentation":"<p>Represents the input of a StartPipelineExecution action.</p>"
    },
    "StartPipelineExecutionOutput":{
      "type":"structure",
      "members":{
        "pipelineExecutionId":{
          "shape":"PipelineExecutionId",
          "documentation":"<p>The unique system-generated ID of the pipeline execution that was started.</p>"
        }
      },
      "documentation":"<p>Represents the output of a StartPipelineExecution action.</p>"
    },
    "ThirdPartyJob":{
      "type":"structure",
      "members":{
        "clientId":{
          "shape":"ClientId",
          "documentation":"<p>The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.</p>"
        },
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier used to identify the job in AWS CodePipeline.</p>"
        }
      },
      "documentation":"<p>A response to a PollForThirdPartyJobs request returned by AWS CodePipeline when there is a job to be worked upon by a partner action.</p>"
    },
    "ThirdPartyJobData":{
      "type":"structure",
      "members":{
        "actionTypeId":{
          "shape":"ActionTypeId",
          "documentation":"<p>Represents information about an action type.</p>"
        },
        "actionConfiguration":{
          "shape":"ActionConfiguration",
          "documentation":"<p>Represents information about an action configuration.</p>"
        },
        "pipelineContext":{
          "shape":"PipelineContext",
          "documentation":"<p>Represents information about a pipeline to a job worker.</p>"
        },
        "inputArtifacts":{
          "shape":"ArtifactList",
          "documentation":"<p>The name of the artifact that will be worked upon by the action, if any. This name might be system-generated, such as \"MyApp\", or might be defined by the user when the action is created. The input artifact name must match the name of an output artifact generated by an action in an earlier action or stage of the pipeline.</p>"
        },
        "outputArtifacts":{
          "shape":"ArtifactList",
          "documentation":"<p>The name of the artifact that will be the result of the action, if any. This name might be system-generated, such as \"MyBuiltApp\", or might be defined by the user when the action is created.</p>"
        },
        "artifactCredentials":{
          "shape":"AWSSessionCredentials",
          "documentation":"<p>Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifact for the pipeline in AWS CodePipeline. </p>"
        },
        "continuationToken":{
          "shape":"ContinuationToken",
          "documentation":"<p>A system-generated token, such as a AWS CodeDeploy deployment ID, that a job requires in order to continue the job asynchronously.</p>"
        },
        "encryptionKey":{
          "shape":"EncryptionKey",
          "documentation":"<p>The encryption key used to encrypt and decrypt data in the artifact store for the pipeline, such as an AWS Key Management Service (AWS KMS) key. This is optional and might not be present.</p>"
        }
      },
      "documentation":"<p>Represents information about the job data for a partner action.</p>"
    },
    "ThirdPartyJobDetails":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"ThirdPartyJobId",
          "documentation":"<p>The identifier used to identify the job details in AWS CodePipeline.</p>"
        },
        "data":{
          "shape":"ThirdPartyJobData",
          "documentation":"<p>The data to be returned by the third party job worker.</p>"
        },
        "nonce":{
          "shape":"Nonce",
          "documentation":"<p>A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an <a>AcknowledgeThirdPartyJob</a> request.</p>"
        }
      },
      "documentation":"<p>The details of a job sent in response to a GetThirdPartyJobDetails request.</p>"
    },
    "ThirdPartyJobId":{
      "type":"string",
      "max":512,
      "min":1
    },
    "ThirdPartyJobList":{
      "type":"list",
      "member":{"shape":"ThirdPartyJob"}
    },
    "Time":{"type":"timestamp"},
    "Timestamp":{"type":"timestamp"},
    "TransitionState":{
      "type":"structure",
      "members":{
        "enabled":{
          "shape":"Enabled",
          "documentation":"<p>Whether the transition between stages is enabled (true) or disabled (false).</p>"
        },
        "lastChangedBy":{
          "shape":"LastChangedBy",
          "documentation":"<p>The ID of the user who last changed the transition state.</p>"
        },
        "lastChangedAt":{
          "shape":"LastChangedAt",
          "documentation":"<p>The timestamp when the transition state was last changed.</p>"
        },
        "disabledReason":{
          "shape":"DisabledReason",
          "documentation":"<p>The user-specified reason why the transition between two stages of a pipeline was disabled.</p>"
        }
      },
      "documentation":"<p>Represents information about the state of transitions between one stage and another stage.</p>"
    },
    "UpdatePipelineInput":{
      "type":"structure",
      "required":["pipeline"],
      "members":{
        "pipeline":{
          "shape":"PipelineDeclaration",
          "documentation":"<p>The name of the pipeline to be updated.</p>"
        }
      },
      "documentation":"<p>Represents the input of an UpdatePipeline action.</p>"
    },
    "UpdatePipelineOutput":{
      "type":"structure",
      "members":{
        "pipeline":{
          "shape":"PipelineDeclaration",
          "documentation":"<p>The structure of the updated pipeline.</p>"
        }
      },
      "documentation":"<p>Represents the output of an UpdatePipeline action.</p>"
    },
    "Url":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "UrlTemplate":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "ValidationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The validation was specified in an invalid format.</p>",
      "exception":true
    },
    "Version":{
      "type":"string",
      "max":9,
      "min":1,
      "pattern":"[0-9A-Za-z_-]+"
    },
    "WebhookArn":{"type":"string"},
    "WebhookAuthConfiguration":{
      "type":"structure",
      "members":{
        "AllowedIPRange":{"shape":"WebhookAuthConfigurationAllowedIPRange"},
        "SecretToken":{"shape":"WebhookAuthConfigurationSecretToken"}
      }
    },
    "WebhookAuthConfigurationAllowedIPRange":{
      "type":"string",
      "max":100,
      "min":1
    },
    "WebhookAuthConfigurationSecretToken":{
      "type":"string",
      "max":100,
      "min":1
    },
    "WebhookAuthenticationType":{
      "type":"string",
      "enum":[
        "GITHUB_HMAC",
        "IP",
        "UNAUTHENTICATED"
      ]
    },
    "WebhookDefinition":{
      "type":"structure",
      "required":[
        "name",
        "targetPipeline",
        "targetAction",
        "filters",
        "authentication",
        "authenticationConfiguration"
      ],
      "members":{
        "name":{
          "shape":"WebhookName",
          "documentation":"<p>The name of the webhook.</p>"
        },
        "targetPipeline":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline you want to connect to the webhook.</p>"
        },
        "targetAction":{
          "shape":"ActionName",
          "documentation":"<p>The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline.</p>"
        },
        "filters":{
          "shape":"WebhookFilters",
          "documentation":"<p>A list of rules applied to the body/payload sent in the POST request to a webhook URL. All defined rules must pass for the request to be accepted and the pipeline started.</p>"
        },
        "authentication":{
          "shape":"WebhookAuthenticationType",
          "documentation":"<p>Supported options are GITHUB_HMAC, IP and UNAUTHENTICATED.</p> <ul> <li> <p> GITHUB_HMAC implements the authentication scheme described here: https://developer.github.com/webhooks/securing/</p> </li> <li> <p> IP will reject webhooks trigger requests unless they originate from an IP within the IP range whitelisted in the authentication configuration.</p> </li> <li> <p> UNAUTHENTICATED will accept all webhook trigger requests regardless of origin.</p> </li> </ul>"
        },
        "authenticationConfiguration":{
          "shape":"WebhookAuthConfiguration",
          "documentation":"<p>Properties that configure the authentication applied to incoming webhook trigger requests. The required properties depend on the authentication type. For GITHUB_HMAC, only the SecretToken property must be set. For IP, only the AllowedIPRange property must be set to a valid CIDR range. For UNAUTHENTICATED, no properties can be set.</p>"
        }
      },
      "documentation":"<p>Represents information about a webhook and its definition.</p>"
    },
    "WebhookErrorCode":{"type":"string"},
    "WebhookErrorMessage":{"type":"string"},
    "WebhookFilterRule":{
      "type":"structure",
      "required":["jsonPath"],
      "members":{
        "jsonPath":{
          "shape":"JsonPath",
          "documentation":"<p>A JsonPath expression that will be applied to the body/payload of the webhook. The value selected by JsonPath expression must match the value specified in the matchEquals field, otherwise the request will be ignored. More information on JsonPath expressions can be found here: https://github.com/json-path/JsonPath.</p>"
        },
        "matchEquals":{
          "shape":"MatchEquals",
          "documentation":"<p>The value selected by the JsonPath expression must match what is supplied in the MatchEquals field, otherwise the request will be ignored. Properties from the target action configuration can be included as placeholders in this value by surrounding the action configuration key with curly braces. For example, if the value supplied here is \"refs/heads/{Branch}\" and the target action has an action configuration property called \"Branch\" with a value of \"master\", the MatchEquals value will be evaluated as \"refs/heads/master\". A list of action configuration properties for built-in action types can be found here: <a href=\"http://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements\">Pipeline Structure Reference Action Requirements</a>.</p>"
        }
      },
      "documentation":"<p>The event criteria that specify when a webhook notification is sent to your URL.</p>"
    },
    "WebhookFilters":{
      "type":"list",
      "member":{"shape":"WebhookFilterRule"},
      "max":5
    },
    "WebhookLastTriggered":{"type":"timestamp"},
    "WebhookList":{
      "type":"list",
      "member":{"shape":"ListWebhookItem"}
    },
    "WebhookName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[A-Za-z0-9.@\\-_]+"
    },
    "WebhookNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified webhook was entered in an invalid format or cannot be found.</p>",
      "exception":true
    },
    "WebhookUrl":{
      "type":"string",
      "max":1000,
      "min":1
    }
  },
  "documentation":"<fullname>AWS CodePipeline</fullname> <p> <b>Overview</b> </p> <p>This is the AWS CodePipeline API Reference. This guide provides descriptions of the actions and data types for AWS CodePipeline. Some functionality for your pipeline is only configurable through the API. For additional information, see the <a href=\"http://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html\">AWS CodePipeline User Guide</a>.</p> <p>You can use the AWS CodePipeline API to work with pipelines, stages, actions, and transitions, as described below.</p> <p> <i>Pipelines</i> are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions. </p> <p>You can work with pipelines by calling:</p> <ul> <li> <p> <a>CreatePipeline</a>, which creates a uniquely-named pipeline.</p> </li> <li> <p> <a>DeletePipeline</a>, which deletes the specified pipeline.</p> </li> <li> <p> <a>GetPipeline</a>, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).</p> </li> <li> <p> <a>GetPipelineExecution</a>, which returns information about a specific execution of a pipeline.</p> </li> <li> <p> <a>GetPipelineState</a>, which returns information about the current state of the stages and actions of a pipeline.</p> </li> <li> <p> <a>ListPipelines</a>, which gets a summary of all of the pipelines associated with your account.</p> </li> <li> <p> <a>ListPipelineExecutions</a>, which gets a summary of the most recent executions for a pipeline.</p> </li> <li> <p> <a>StartPipelineExecution</a>, which runs the the most recent revision of an artifact through the pipeline.</p> </li> <li> <p> <a>UpdatePipeline</a>, which updates a pipeline with edits or changes to the structure of the pipeline.</p> </li> </ul> <p>Pipelines include <i>stages</i>. Each stage contains one or more actions that must complete before the next stage begins. A stage will result in success or failure. If a stage fails, then the pipeline stops at that stage and will remain stopped until either a new version of an artifact appears in the source location, or a user takes action to re-run the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the status of stages in the pipeline, or <a>GetPipeline</a>, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, also refer to the <a href=\"http://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html\">AWS CodePipeline Pipeline Structure Reference</a>.</p> <p>Pipeline stages include <i>actions</i>, which are categorized into categories such as source or build actions performed within a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid action categories are:</p> <ul> <li> <p>Source</p> </li> <li> <p>Build</p> </li> <li> <p>Test</p> </li> <li> <p>Deploy</p> </li> <li> <p>Approval</p> </li> <li> <p>Invoke</p> </li> </ul> <p>Pipelines also include <i>transitions</i>, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete.</p> <p>You can work with transitions by calling:</p> <ul> <li> <p> <a>DisableStageTransition</a>, which prevents artifacts from transitioning to the next stage in a pipeline.</p> </li> <li> <p> <a>EnableStageTransition</a>, which enables transition of artifacts between stages in a pipeline. </p> </li> </ul> <p> <b>Using the API to integrate with AWS CodePipeline</b> </p> <p>For third-party integrators or developers who want to create their own integrations with AWS CodePipeline, the expected sequence varies from the standard API user. In order to integrate with AWS CodePipeline, developers will need to work with the following items:</p> <p> <b>Jobs</b>, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source. </p> <p>You can work with jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeJob</a>, which confirms whether a job worker has received the specified job,</p> </li> <li> <p> <a>GetJobDetails</a>, which returns the details of a job,</p> </li> <li> <p> <a>PollForJobs</a>, which determines whether there are any jobs to act upon, </p> </li> <li> <p> <a>PutJobFailureResult</a>, which provides details of a job failure, and</p> </li> <li> <p> <a>PutJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul> <p> <b>Third party jobs</b>, which are instances of an action created by a partner action and integrated into AWS CodePipeline. Partner actions are created by members of the AWS Partner Network.</p> <p>You can work with third party jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker has received the specified job,</p> </li> <li> <p> <a>GetThirdPartyJobDetails</a>, which requests the details of a job for a partner action,</p> </li> <li> <p> <a>PollForThirdPartyJobs</a>, which determines whether there are any jobs to act upon, </p> </li> <li> <p> <a>PutThirdPartyJobFailureResult</a>, which provides details of a job failure, and</p> </li> <li> <p> <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul>"
}
