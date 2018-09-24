awsim['mgh'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-05-31",
    "endpointPrefix":"mgh",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Migration Hub",
    "serviceId":"Migration Hub",
    "signatureVersion":"v4",
    "targetPrefix":"AWSMigrationHub",
    "uid":"AWSMigrationHub-2017-05-31"
  },
  "operations":{
    "AssociateCreatedArtifact":{
      "name":"AssociateCreatedArtifact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateCreatedArtifactRequest"},
      "output":{"shape":"AssociateCreatedArtifactResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>"
    },
    "AssociateDiscoveredResource":{
      "name":"AssociateDiscoveredResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateDiscoveredResourceRequest"},
      "output":{"shape":"AssociateDiscoveredResourceResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyErrorException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Associates a discovered resource ID from Application Discovery Service (ADS) with a migration task.</p>"
    },
    "CreateProgressUpdateStream":{
      "name":"CreateProgressUpdateStream",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateProgressUpdateStreamRequest"},
      "output":{"shape":"CreateProgressUpdateStreamResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.</p>"
    },
    "DeleteProgressUpdateStream":{
      "name":"DeleteProgressUpdateStream",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteProgressUpdateStreamRequest"},
      "output":{"shape":"DeleteProgressUpdateStreamResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs realted to the tasks belonging to the stream will throw \"InvalidInputException\" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>"
    },
    "DescribeApplicationState":{
      "name":"DescribeApplicationState",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeApplicationStateRequest"},
      "output":{"shape":"DescribeApplicationStateResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyErrorException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets the migration status of an application.</p>"
    },
    "DescribeMigrationTask":{
      "name":"DescribeMigrationTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeMigrationTaskRequest"},
      "output":{"shape":"DescribeMigrationTaskResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Retrieves a list of all attributes associated with a specific migration task.</p>"
    },
    "DisassociateCreatedArtifact":{
      "name":"DisassociateCreatedArtifact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateCreatedArtifactRequest"},
      "output":{"shape":"DisassociateCreatedArtifactResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>"
    },
    "DisassociateDiscoveredResource":{
      "name":"DisassociateDiscoveredResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateDiscoveredResourceRequest"},
      "output":{"shape":"DisassociateDiscoveredResourceResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Disassociate an Application Discovery Service (ADS) discovered resource from a migration task.</p>"
    },
    "ImportMigrationTask":{
      "name":"ImportMigrationTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ImportMigrationTaskRequest"},
      "output":{"shape":"ImportMigrationTaskResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>"
    },
    "ListCreatedArtifacts":{
      "name":"ListCreatedArtifacts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListCreatedArtifactsRequest"},
      "output":{"shape":"ListCreatedArtifactsResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>"
    },
    "ListDiscoveredResources":{
      "name":"ListDiscoveredResources",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDiscoveredResourcesRequest"},
      "output":{"shape":"ListDiscoveredResourcesResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists discovered resources associated with the given <code>MigrationTask</code>.</p>"
    },
    "ListMigrationTasks":{
      "name":"ListMigrationTasks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListMigrationTasksRequest"},
      "output":{"shape":"ListMigrationTasksResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyErrorException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>"
    },
    "ListProgressUpdateStreams":{
      "name":"ListProgressUpdateStreams",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListProgressUpdateStreamsRequest"},
      "output":{"shape":"ListProgressUpdateStreamsResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Lists progress update streams associated with the user account making this call.</p>"
    },
    "NotifyApplicationState":{
      "name":"NotifyApplicationState",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"NotifyApplicationStateRequest"},
      "output":{"shape":"NotifyApplicationStateResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyErrorException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.</p>"
    },
    "NotifyMigrationTaskState":{
      "name":"NotifyMigrationTaskState",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"NotifyMigrationTaskStateRequest"},
      "output":{"shape":"NotifyMigrationTaskStateResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>"
    },
    "PutResourceAttributes":{
      "name":"PutResourceAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutResourceAttributesRequest"},
      "output":{"shape":"PutResourceAttributesResult"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"DryRunOperation"},
        {"shape":"UnauthorizedOperation"},
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service (ADS)'s repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overiding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href=\"https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList\"> <code>ResourceAttributeList</code> </a> parameter when specifying any \"VM\" related value. </p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>"
    }
  },
  "shapes":{
    "AccessDeniedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>You do not have sufficient access to perform this action.</p>",
      "exception":true
    },
    "ApplicationId":{
      "type":"string",
      "max":1600,
      "min":1
    },
    "ApplicationStatus":{
      "type":"string",
      "enum":[
        "NOT_STARTED",
        "IN_PROGRESS",
        "COMPLETED"
      ]
    },
    "AssociateCreatedArtifactRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName",
        "CreatedArtifact"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>Unique identifier that references the migration task.</p>"
        },
        "CreatedArtifact":{
          "shape":"CreatedArtifact",
          "documentation":"<p>An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.) </p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "AssociateCreatedArtifactResult":{
      "type":"structure",
      "members":{
      }
    },
    "AssociateDiscoveredResourceRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName",
        "DiscoveredResource"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream.</p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>The identifier given to the MigrationTask.</p>"
        },
        "DiscoveredResource":{
          "shape":"DiscoveredResource",
          "documentation":"<p>Object representing a Resource.</p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "AssociateDiscoveredResourceResult":{
      "type":"structure",
      "members":{
      }
    },
    "ConfigurationId":{
      "type":"string",
      "min":1
    },
    "CreateProgressUpdateStreamRequest":{
      "type":"structure",
      "required":["ProgressUpdateStreamName"],
      "members":{
        "ProgressUpdateStreamName":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "CreateProgressUpdateStreamResult":{
      "type":"structure",
      "members":{
      }
    },
    "CreatedArtifact":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"CreatedArtifactName",
          "documentation":"<p>An ARN that uniquely identifies the result of a migration task.</p>"
        },
        "Description":{
          "shape":"CreatedArtifactDescription",
          "documentation":"<p>A description that can be free-form text to record additional detail about the artifact for clarity or for later reference.</p>"
        }
      },
      "documentation":"<p>An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).</p>"
    },
    "CreatedArtifactDescription":{
      "type":"string",
      "max":500,
      "min":0
    },
    "CreatedArtifactList":{
      "type":"list",
      "member":{"shape":"CreatedArtifact"}
    },
    "CreatedArtifactName":{
      "type":"string",
      "max":1600,
      "min":1,
      "pattern":"arn:[a-z-]+:[a-z0-9-]+:(?:[a-z0-9-]+|):(?:[0-9]{12}|):.*"
    },
    "DeleteProgressUpdateStreamRequest":{
      "type":"structure",
      "required":["ProgressUpdateStreamName"],
      "members":{
        "ProgressUpdateStreamName":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "DeleteProgressUpdateStreamResult":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeApplicationStateRequest":{
      "type":"structure",
      "required":["ApplicationId"],
      "members":{
        "ApplicationId":{
          "shape":"ApplicationId",
          "documentation":"<p>The configurationId in ADS that uniquely identifies the grouped application.</p>"
        }
      }
    },
    "DescribeApplicationStateResult":{
      "type":"structure",
      "members":{
        "ApplicationStatus":{
          "shape":"ApplicationStatus",
          "documentation":"<p>Status of the application - Not Started, In-Progress, Complete.</p>"
        },
        "LastUpdatedTime":{
          "shape":"UpdateDateTime",
          "documentation":"<p>The timestamp when the application status was last updated.</p>"
        }
      }
    },
    "DescribeMigrationTaskRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>The identifier given to the MigrationTask.</p>"
        }
      }
    },
    "DescribeMigrationTaskResult":{
      "type":"structure",
      "members":{
        "MigrationTask":{
          "shape":"MigrationTask",
          "documentation":"<p>Object encapsulating information about the migration task.</p>"
        }
      }
    },
    "DisassociateCreatedArtifactRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName",
        "CreatedArtifactName"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>Unique identifier that references the migration task to be disassociated with the artifact.</p>"
        },
        "CreatedArtifactName":{
          "shape":"CreatedArtifactName",
          "documentation":"<p>An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)</p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "DisassociateCreatedArtifactResult":{
      "type":"structure",
      "members":{
      }
    },
    "DisassociateDiscoveredResourceRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName",
        "ConfigurationId"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream.</p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>The identifier given to the MigrationTask.</p>"
        },
        "ConfigurationId":{
          "shape":"ConfigurationId",
          "documentation":"<p>ConfigurationId of the ADS resource to be disassociated.</p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "DisassociateDiscoveredResourceResult":{
      "type":"structure",
      "members":{
      }
    },
    "DiscoveredResource":{
      "type":"structure",
      "required":["ConfigurationId"],
      "members":{
        "ConfigurationId":{
          "shape":"ConfigurationId",
          "documentation":"<p>The configurationId in ADS that uniquely identifies the on-premise resource.</p>"
        },
        "Description":{
          "shape":"DiscoveredResourceDescription",
          "documentation":"<p>A description that can be free-form text to record additional detail about the discovered resource for clarity or later reference.</p>"
        }
      },
      "documentation":"<p>Object representing the on-premises resource being migrated.</p>"
    },
    "DiscoveredResourceDescription":{
      "type":"string",
      "max":500,
      "min":0
    },
    "DiscoveredResourceList":{
      "type":"list",
      "member":{"shape":"DiscoveredResource"}
    },
    "DryRun":{"type":"boolean"},
    "DryRunOperation":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to \"true\".</p>",
      "exception":true
    },
    "ErrorMessage":{"type":"string"},
    "ImportMigrationTaskRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>Unique identifier that references the migration task.</p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "ImportMigrationTaskResult":{
      "type":"structure",
      "members":{
      }
    },
    "InternalServerError":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>",
      "exception":true,
      "fault":true
    },
    "InvalidInputException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>",
      "exception":true
    },
    "LatestResourceAttributeList":{
      "type":"list",
      "member":{"shape":"ResourceAttribute"},
      "max":100,
      "min":0
    },
    "ListCreatedArtifactsRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>Unique identifier that references the migration task.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResultsCreatedArtifacts",
          "documentation":"<p>Maximum number of results to be returned per page.</p>"
        }
      }
    },
    "ListCreatedArtifactsResult":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>If there are more created artifacts than the max result, return the next token to be passed to the next call as a bookmark of where to start from.</p>"
        },
        "CreatedArtifactList":{
          "shape":"CreatedArtifactList",
          "documentation":"<p>List of created artifacts up to the maximum number of results specified in the request.</p>"
        }
      }
    },
    "ListDiscoveredResourcesRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream.</p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>The name of the MigrationTask.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResultsResources",
          "documentation":"<p>The maximum number of results returned per page.</p>"
        }
      }
    },
    "ListDiscoveredResourcesResult":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>If there are more discovered resources than the max result, return the next token to be passed to the next call as a bookmark of where to start from.</p>"
        },
        "DiscoveredResourceList":{
          "shape":"DiscoveredResourceList",
          "documentation":"<p>Returned list of discovered resources associated with the given MigrationTask.</p>"
        }
      }
    },
    "ListMigrationTasksRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Value to specify how many results are returned per page.</p>"
        },
        "ResourceName":{
          "shape":"ResourceName",
          "documentation":"<p>Filter migration tasks by discovered resource name.</p>"
        }
      }
    },
    "ListMigrationTasksResult":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>If there are more migration tasks than the max result, return the next token to be passed to the next call as a bookmark of where to start from.</p>"
        },
        "MigrationTaskSummaryList":{
          "shape":"MigrationTaskSummaryList",
          "documentation":"<p>Lists the migration task's summary which includes: <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and the <code>UpdateDateTime</code> for each task.</p>"
        }
      }
    },
    "ListProgressUpdateStreamsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Filter to limit the maximum number of results to list per page.</p>"
        }
      }
    },
    "ListProgressUpdateStreamsResult":{
      "type":"structure",
      "members":{
        "ProgressUpdateStreamSummaryList":{
          "shape":"ProgressUpdateStreamSummaryList",
          "documentation":"<p>List of progress update streams up to the max number of results passed in the input.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>If there are more streams created than the max result, return the next token to be passed to the next call as a bookmark of where to start from.</p>"
        }
      }
    },
    "MaxResults":{
      "type":"integer",
      "box":true,
      "max":100,
      "min":1
    },
    "MaxResultsCreatedArtifacts":{
      "type":"integer",
      "box":true,
      "max":10,
      "min":1
    },
    "MaxResultsResources":{
      "type":"integer",
      "box":true,
      "max":10,
      "min":1
    },
    "MigrationTask":{
      "type":"structure",
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>A name that identifies the vendor of the migration tool being used.</p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>Unique identifier that references the migration task.</p>"
        },
        "Task":{
          "shape":"Task",
          "documentation":"<p>Task object encapsulating task information.</p>"
        },
        "UpdateDateTime":{
          "shape":"UpdateDateTime",
          "documentation":"<p>The timestamp when the task was gathered.</p>"
        },
        "ResourceAttributeList":{
          "shape":"LatestResourceAttributeList",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>Represents a migration task in a migration tool.</p>"
    },
    "MigrationTaskName":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"[^:|]+"
    },
    "MigrationTaskSummary":{
      "type":"structure",
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>An AWS resource used for access control. It should uniquely identify the migration tool as it is used for all updates made by the tool.</p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>Unique identifier that references the migration task.</p>"
        },
        "Status":{
          "shape":"Status",
          "documentation":"<p>Status of the task.</p>"
        },
        "ProgressPercent":{
          "shape":"ProgressPercent",
          "documentation":"<p/>"
        },
        "StatusDetail":{
          "shape":"StatusDetail",
          "documentation":"<p>Detail information of what is being done within the overall status state.</p>"
        },
        "UpdateDateTime":{
          "shape":"UpdateDateTime",
          "documentation":"<p>The timestamp when the task was gathered.</p>"
        }
      },
      "documentation":"<p>MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.</p>"
    },
    "MigrationTaskSummaryList":{
      "type":"list",
      "member":{"shape":"MigrationTaskSummary"}
    },
    "NextUpdateSeconds":{
      "type":"integer",
      "min":0
    },
    "NotifyApplicationStateRequest":{
      "type":"structure",
      "required":[
        "ApplicationId",
        "Status"
      ],
      "members":{
        "ApplicationId":{
          "shape":"ApplicationId",
          "documentation":"<p>The configurationId in ADS that uniquely identifies the grouped application.</p>"
        },
        "Status":{
          "shape":"ApplicationStatus",
          "documentation":"<p>Status of the application - Not Started, In-Progress, Complete.</p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "NotifyApplicationStateResult":{
      "type":"structure",
      "members":{
      }
    },
    "NotifyMigrationTaskStateRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName",
        "Task",
        "UpdateDateTime",
        "NextUpdateSeconds"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>Unique identifier that references the migration task.</p>"
        },
        "Task":{
          "shape":"Task",
          "documentation":"<p>Information about the task's progress and status.</p>"
        },
        "UpdateDateTime":{
          "shape":"UpdateDateTime",
          "documentation":"<p>The timestamp when the task was gathered.</p>"
        },
        "NextUpdateSeconds":{
          "shape":"NextUpdateSeconds",
          "documentation":"<p>Number of seconds after the UpdateDateTime within which the Migration Hub can expect an update. If Migration Hub does not receive an update within the specified interval, then the migration task will be considered stale.</p>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "NotifyMigrationTaskStateResult":{
      "type":"structure",
      "members":{
      }
    },
    "PolicyErrorException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Exception raised when there are problems accessing ADS (Application Discovery Service); most likely due to a misconfigured policy or the <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>",
      "exception":true
    },
    "ProgressPercent":{
      "type":"integer",
      "box":true,
      "max":100,
      "min":0
    },
    "ProgressUpdateStream":{
      "type":"string",
      "max":50,
      "min":1,
      "pattern":"[^/:|\\000-\\037]+"
    },
    "ProgressUpdateStreamSummary":{
      "type":"structure",
      "members":{
        "ProgressUpdateStreamName":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        }
      },
      "documentation":"<p>Summary of the AWS resource used for access control that is implicitly linked to your AWS account.</p>"
    },
    "ProgressUpdateStreamSummaryList":{
      "type":"list",
      "member":{"shape":"ProgressUpdateStreamSummary"}
    },
    "PutResourceAttributesRequest":{
      "type":"structure",
      "required":[
        "ProgressUpdateStream",
        "MigrationTaskName",
        "ResourceAttributeList"
      ],
      "members":{
        "ProgressUpdateStream":{
          "shape":"ProgressUpdateStream",
          "documentation":"<p>The name of the ProgressUpdateStream. </p>"
        },
        "MigrationTaskName":{
          "shape":"MigrationTaskName",
          "documentation":"<p>Unique identifier that references the migration task.</p>"
        },
        "ResourceAttributeList":{
          "shape":"ResourceAttributeList",
          "documentation":"<p>Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service (ADS)'s repository.</p> <note> <p>Takes the object array of <code>ResourceAttribute</code> where the <code>Type</code> field is reserved for the following values: <code>IPV4_ADDRESS | IPV6_ADDRESS | MAC_ADDRESS | FQDN | VM_MANAGER_ID | VM_MANAGED_OBJECT_REFERENCE | VM_NAME | VM_PATH | BIOS_ID | MOTHERBOARD_SERIAL_NUMBER</code> where the identifying value can be a string up to 256 characters.</p> </note> <important> <ul> <li> <p>If any \"VM\" related value is set for a <code>ResourceAttribute</code> object, it is required that <code>VM_MANAGER_ID</code>, as a minimum, is always set. If <code>VM_MANAGER_ID</code> is not set, then all \"VM\" fields will be discarded and \"VM\" fields will not be used for matching the migration task to a server in Application Discovery Service (ADS)'s repository. See the <a href=\"https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#API_PutResourceAttributes_Examples\">Example</a> section below for a use case of specifying \"VM\" related values.</p> </li> <li> <p> If a server you are trying to match has multiple IP or MAC addresses, you should provide as many as you know in separate type/value pairs passed to the <code>ResourceAttributeList</code> parameter to maximize the chances of matching.</p> </li> </ul> </important>"
        },
        "DryRun":{
          "shape":"DryRun",
          "documentation":"<p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>"
        }
      }
    },
    "PutResourceAttributesResult":{
      "type":"structure",
      "members":{
      }
    },
    "ResourceAttribute":{
      "type":"structure",
      "required":[
        "Type",
        "Value"
      ],
      "members":{
        "Type":{
          "shape":"ResourceAttributeType",
          "documentation":"<p>Type of resource.</p>"
        },
        "Value":{
          "shape":"ResourceAttributeValue",
          "documentation":"<p>Value of the resource type.</p>"
        }
      },
      "documentation":"<p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\\\\\/?,=\\\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl>"
    },
    "ResourceAttributeList":{
      "type":"list",
      "member":{"shape":"ResourceAttribute"},
      "max":100,
      "min":1
    },
    "ResourceAttributeType":{
      "type":"string",
      "enum":[
        "IPV4_ADDRESS",
        "IPV6_ADDRESS",
        "MAC_ADDRESS",
        "FQDN",
        "VM_MANAGER_ID",
        "VM_MANAGED_OBJECT_REFERENCE",
        "VM_NAME",
        "VM_PATH",
        "BIOS_ID",
        "MOTHERBOARD_SERIAL_NUMBER"
      ]
    },
    "ResourceAttributeValue":{
      "type":"string",
      "max":256,
      "min":1
    },
    "ResourceName":{
      "type":"string",
      "max":1600,
      "min":1
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>",
      "exception":true
    },
    "ServiceUnavailableException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>",
      "exception":true,
      "fault":true
    },
    "Status":{
      "type":"string",
      "enum":[
        "NOT_STARTED",
        "IN_PROGRESS",
        "FAILED",
        "COMPLETED"
      ]
    },
    "StatusDetail":{
      "type":"string",
      "max":500,
      "min":0
    },
    "Task":{
      "type":"structure",
      "required":["Status"],
      "members":{
        "Status":{
          "shape":"Status",
          "documentation":"<p>Status of the task - Not Started, In-Progress, Complete.</p>"
        },
        "StatusDetail":{
          "shape":"StatusDetail",
          "documentation":"<p>Details of task status as notified by a migration tool. A tool might use this field to provide clarifying information about the status that is unique to that tool or that explains an error state.</p>"
        },
        "ProgressPercent":{
          "shape":"ProgressPercent",
          "documentation":"<p>Indication of the percentage completion of the task.</p>"
        }
      },
      "documentation":"<p>Task object encapsulating task information.</p>"
    },
    "Token":{"type":"string"},
    "UnauthorizedOperation":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to \"true\".</p>",
      "exception":true
    },
    "UpdateDateTime":{"type":"timestamp"}
  },
  "documentation":"<p>The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub. </p>"
}
