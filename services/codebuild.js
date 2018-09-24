awsim['codebuild'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-10-06",
    "endpointPrefix":"codebuild",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS CodeBuild",
    "serviceId":"CodeBuild",
    "signatureVersion":"v4",
    "targetPrefix":"CodeBuild_20161006",
    "uid":"codebuild-2016-10-06"
  },
  "operations":{
    "BatchDeleteBuilds":{
      "name":"BatchDeleteBuilds",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDeleteBuildsInput"},
      "output":{"shape":"BatchDeleteBuildsOutput"},
      "errors":[
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Deletes one or more builds.</p>"
    },
    "BatchGetBuilds":{
      "name":"BatchGetBuilds",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetBuildsInput"},
      "output":{"shape":"BatchGetBuildsOutput"},
      "errors":[
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Gets information about builds.</p>"
    },
    "BatchGetProjects":{
      "name":"BatchGetProjects",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetProjectsInput"},
      "output":{"shape":"BatchGetProjectsOutput"},
      "errors":[
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Gets information about build projects.</p>"
    },
    "CreateProject":{
      "name":"CreateProject",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateProjectInput"},
      "output":{"shape":"CreateProjectOutput"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"AccountLimitExceededException"}
      ],
      "documentation":"<p>Creates a build project.</p>"
    },
    "CreateWebhook":{
      "name":"CreateWebhook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateWebhookInput"},
      "output":{"shape":"CreateWebhookOutput"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"OAuthProviderException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub repository, enables AWS CodeBuild to begin automatically rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an AWS CodeBuild project, and the project is used as a build step in AWS CodePipeline, then two identical builds will be created for each commit. One build is triggered through webhooks, and one through AWS CodePipeline. Because billing is on a per-build basis, you will be billed for both builds. Therefore, if you are using AWS CodePipeline, we recommend that you disable webhooks in CodeBuild. In the AWS CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href=\"http://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console\">Change a Build Project's Settings</a>.</p> </important>"
    },
    "DeleteProject":{
      "name":"DeleteProject",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteProjectInput"},
      "output":{"shape":"DeleteProjectOutput"},
      "errors":[
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Deletes a build project.</p>"
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
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"OAuthProviderException"}
      ],
      "documentation":"<p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub repository, stops AWS CodeBuild from automatically rebuilding the source code every time a code change is pushed to the repository.</p>"
    },
    "InvalidateProjectCache":{
      "name":"InvalidateProjectCache",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"InvalidateProjectCacheInput"},
      "output":{"shape":"InvalidateProjectCacheOutput"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Resets the cache for a project.</p>"
    },
    "ListBuilds":{
      "name":"ListBuilds",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListBuildsInput"},
      "output":{"shape":"ListBuildsOutput"},
      "errors":[
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Gets a list of build IDs, with each build ID representing a single build.</p>"
    },
    "ListBuildsForProject":{
      "name":"ListBuildsForProject",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListBuildsForProjectInput"},
      "output":{"shape":"ListBuildsForProjectOutput"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets a list of build IDs for the specified build project, with each build ID representing a single build.</p>"
    },
    "ListCuratedEnvironmentImages":{
      "name":"ListCuratedEnvironmentImages",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListCuratedEnvironmentImagesInput"},
      "output":{"shape":"ListCuratedEnvironmentImagesOutput"},
      "documentation":"<p>Gets information about Docker images that are managed by AWS CodeBuild.</p>"
    },
    "ListProjects":{
      "name":"ListProjects",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListProjectsInput"},
      "output":{"shape":"ListProjectsOutput"},
      "errors":[
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Gets a list of build project names, with each build project name representing a single build project.</p>"
    },
    "StartBuild":{
      "name":"StartBuild",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartBuildInput"},
      "output":{"shape":"StartBuildOutput"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"AccountLimitExceededException"}
      ],
      "documentation":"<p>Starts running a build.</p>"
    },
    "StopBuild":{
      "name":"StopBuild",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopBuildInput"},
      "output":{"shape":"StopBuildOutput"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Attempts to stop running a build.</p>"
    },
    "UpdateProject":{
      "name":"UpdateProject",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateProjectInput"},
      "output":{"shape":"UpdateProjectOutput"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Changes the settings of a build project.</p>"
    },
    "UpdateWebhook":{
      "name":"UpdateWebhook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateWebhookInput"},
      "output":{"shape":"UpdateWebhookOutput"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"OAuthProviderException"}
      ],
      "documentation":"<p> Updates the webhook associated with an AWS CodeBuild build project. </p>"
    }
  },
  "shapes":{
    "AccountLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An AWS service limit was exceeded for the calling AWS account.</p>",
      "exception":true
    },
    "ArtifactNamespace":{
      "type":"string",
      "enum":[
        "NONE",
        "BUILD_ID"
      ]
    },
    "ArtifactPackaging":{
      "type":"string",
      "enum":[
        "NONE",
        "ZIP"
      ]
    },
    "ArtifactsType":{
      "type":"string",
      "enum":[
        "CODEPIPELINE",
        "S3",
        "NO_ARTIFACTS"
      ]
    },
    "BatchDeleteBuildsInput":{
      "type":"structure",
      "required":["ids"],
      "members":{
        "ids":{
          "shape":"BuildIds",
          "documentation":"<p>The IDs of the builds to delete.</p>"
        }
      }
    },
    "BatchDeleteBuildsOutput":{
      "type":"structure",
      "members":{
        "buildsDeleted":{
          "shape":"BuildIds",
          "documentation":"<p>The IDs of the builds that were successfully deleted.</p>"
        },
        "buildsNotDeleted":{
          "shape":"BuildsNotDeleted",
          "documentation":"<p>Information about any builds that could not be successfully deleted.</p>"
        }
      }
    },
    "BatchGetBuildsInput":{
      "type":"structure",
      "required":["ids"],
      "members":{
        "ids":{
          "shape":"BuildIds",
          "documentation":"<p>The IDs of the builds.</p>"
        }
      }
    },
    "BatchGetBuildsOutput":{
      "type":"structure",
      "members":{
        "builds":{
          "shape":"Builds",
          "documentation":"<p>Information about the requested builds.</p>"
        },
        "buildsNotFound":{
          "shape":"BuildIds",
          "documentation":"<p>The IDs of builds for which information could not be found.</p>"
        }
      }
    },
    "BatchGetProjectsInput":{
      "type":"structure",
      "required":["names"],
      "members":{
        "names":{
          "shape":"ProjectNames",
          "documentation":"<p>The names of the build projects.</p>"
        }
      }
    },
    "BatchGetProjectsOutput":{
      "type":"structure",
      "members":{
        "projects":{
          "shape":"Projects",
          "documentation":"<p>Information about the requested build projects.</p>"
        },
        "projectsNotFound":{
          "shape":"ProjectNames",
          "documentation":"<p>The names of build projects for which information could not be found.</p>"
        }
      }
    },
    "Boolean":{"type":"boolean"},
    "Build":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"NonEmptyString",
          "documentation":"<p>The unique ID for the build.</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the build.</p>"
        },
        "startTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the build process started, expressed in Unix time format.</p>"
        },
        "endTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the build process ended, expressed in Unix time format.</p>"
        },
        "currentPhase":{
          "shape":"String",
          "documentation":"<p>The current build phase.</p>"
        },
        "buildStatus":{
          "shape":"StatusType",
          "documentation":"<p>The current status of the build. Valid values include:</p> <ul> <li> <p> <code>FAILED</code>: The build failed.</p> </li> <li> <p> <code>FAULT</code>: The build faulted.</p> </li> <li> <p> <code>IN_PROGRESS</code>: The build is still in progress.</p> </li> <li> <p> <code>STOPPED</code>: The build stopped.</p> </li> <li> <p> <code>SUCCEEDED</code>: The build succeeded.</p> </li> <li> <p> <code>TIMED_OUT</code>: The build timed out.</p> </li> </ul>"
        },
        "sourceVersion":{
          "shape":"NonEmptyString",
          "documentation":"<p>Any version identifier for the version of the source code to be built.</p>"
        },
        "projectName":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the AWS CodeBuild project.</p>"
        },
        "phases":{
          "shape":"BuildPhases",
          "documentation":"<p>Information about all previous build phases that are completed and information about any current build phase that is not yet complete.</p>"
        },
        "source":{
          "shape":"ProjectSource",
          "documentation":"<p>Information about the source code to be built.</p>"
        },
        "secondarySources":{
          "shape":"ProjectSources",
          "documentation":"<p> An array of <code>ProjectSource</code> objects. </p>"
        },
        "secondarySourceVersions":{
          "shape":"ProjectSecondarySourceVersions",
          "documentation":"<p> An array of <code>ProjectSourceVersion</code> objects. Each <code>ProjectSourceVersion</code> must be one of: </p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID will be used. If not specified, the default branch's HEAD commit ID will be used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID will be used. If not specified, the default branch's HEAD commit ID will be used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object representing the build input ZIP file to use.</p> </li> </ul>"
        },
        "artifacts":{
          "shape":"BuildArtifacts",
          "documentation":"<p>Information about the output artifacts for the build.</p>"
        },
        "secondaryArtifacts":{
          "shape":"BuildArtifactsList",
          "documentation":"<p> An array of <code>ProjectArtifacts</code> objects. </p>"
        },
        "cache":{
          "shape":"ProjectCache",
          "documentation":"<p>Information about the cache for the build.</p>"
        },
        "environment":{
          "shape":"ProjectEnvironment",
          "documentation":"<p>Information about the build environment for this build.</p>"
        },
        "serviceRole":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of a service role used for this build.</p>"
        },
        "logs":{
          "shape":"LogsLocation",
          "documentation":"<p>Information about the build's logs in Amazon CloudWatch Logs.</p>"
        },
        "timeoutInMinutes":{
          "shape":"WrapperInt",
          "documentation":"<p>How long, in minutes, for AWS CodeBuild to wait before timing out this build if it does not get marked as completed.</p>"
        },
        "buildComplete":{
          "shape":"Boolean",
          "documentation":"<p>Whether the build has finished. True if completed; otherwise, false.</p>"
        },
        "initiator":{
          "shape":"String",
          "documentation":"<p>The entity that started the build. Valid values include:</p> <ul> <li> <p>If AWS CodePipeline started the build, the pipeline's name (for example, <code>codepipeline/my-demo-pipeline</code>).</p> </li> <li> <p>If an AWS Identity and Access Management (IAM) user started the build, the user's name (for example <code>MyUserName</code>).</p> </li> <li> <p>If the Jenkins plugin for AWS CodeBuild started the build, the string <code>CodeBuild-Jenkins-Plugin</code>.</p> </li> </ul>"
        },
        "vpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>If your AWS CodeBuild project accesses resources in an Amazon VPC, you provide this parameter that identifies the VPC ID and the list of security group IDs and subnet IDs. The security groups and subnets must belong to the same VPC. You must provide at least one security group and one subnet ID.</p>"
        },
        "networkInterface":{
          "shape":"NetworkInterface",
          "documentation":"<p>Describes a network interface.</p>"
        },
        "encryptionKey":{
          "shape":"NonEmptyString",
          "documentation":"<p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts.</p> <p>This is expressed either as the CMK's Amazon Resource Name (ARN) or, if specified, the CMK's alias (using the format <code>alias/<i>alias-name</i> </code>).</p>"
        }
      },
      "documentation":"<p>Information about a build.</p>"
    },
    "BuildArtifacts":{
      "type":"structure",
      "members":{
        "location":{
          "shape":"String",
          "documentation":"<p>Information about the location of the build artifacts.</p>"
        },
        "sha256sum":{
          "shape":"String",
          "documentation":"<p>The SHA-256 hash of the build artifact.</p> <p>You can use this hash along with a checksum tool to confirm both file integrity and authenticity.</p> <note> <p>This value is available only if the build project's <code>packaging</code> value is set to <code>ZIP</code>.</p> </note>"
        },
        "md5sum":{
          "shape":"String",
          "documentation":"<p>The MD5 hash of the build artifact.</p> <p>You can use this hash along with a checksum tool to confirm both file integrity and authenticity.</p> <note> <p>This value is available only if the build project's <code>packaging</code> value is set to <code>ZIP</code>.</p> </note>"
        },
        "overrideArtifactName":{
          "shape":"WrapperBoolean",
          "documentation":"<p> If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique. </p>"
        },
        "encryptionDisabled":{
          "shape":"WrapperBoolean",
          "documentation":"<p> Information that tells you if encryption for build artifacts is disabled. </p>"
        },
        "artifactIdentifier":{
          "shape":"String",
          "documentation":"<p> An identifier for this artifact definition. </p>"
        }
      },
      "documentation":"<p>Information about build output artifacts.</p>"
    },
    "BuildArtifactsList":{
      "type":"list",
      "member":{"shape":"BuildArtifacts"},
      "max":12,
      "min":0
    },
    "BuildIds":{
      "type":"list",
      "member":{"shape":"NonEmptyString"},
      "max":100,
      "min":1
    },
    "BuildNotDeleted":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the build that could not be successfully deleted.</p>"
        },
        "statusCode":{
          "shape":"String",
          "documentation":"<p>Additional information about the build that could not be successfully deleted.</p>"
        }
      },
      "documentation":"<p>Information about a build that could not be successfully deleted.</p>"
    },
    "BuildPhase":{
      "type":"structure",
      "members":{
        "phaseType":{
          "shape":"BuildPhaseType",
          "documentation":"<p>The name of the build phase. Valid values include:</p> <ul> <li> <p> <code>BUILD</code>: Core build activities typically occur in this build phase.</p> </li> <li> <p> <code>COMPLETED</code>: The build has been completed.</p> </li> <li> <p> <code>DOWNLOAD_SOURCE</code>: Source code is being downloaded in this build phase.</p> </li> <li> <p> <code>FINALIZING</code>: The build process is completing in this build phase.</p> </li> <li> <p> <code>INSTALL</code>: Installation activities typically occur in this build phase.</p> </li> <li> <p> <code>POST_BUILD</code>: Post-build activities typically occur in this build phase.</p> </li> <li> <p> <code>PRE_BUILD</code>: Pre-build activities typically occur in this build phase.</p> </li> <li> <p> <code>PROVISIONING</code>: The build environment is being set up.</p> </li> <li> <p> <code>SUBMITTED</code>: The build has been submitted.</p> </li> <li> <p> <code>UPLOAD_ARTIFACTS</code>: Build output artifacts are being uploaded to the output location.</p> </li> </ul>"
        },
        "phaseStatus":{
          "shape":"StatusType",
          "documentation":"<p>The current status of the build phase. Valid values include:</p> <ul> <li> <p> <code>FAILED</code>: The build phase failed.</p> </li> <li> <p> <code>FAULT</code>: The build phase faulted.</p> </li> <li> <p> <code>IN_PROGRESS</code>: The build phase is still in progress.</p> </li> <li> <p> <code>STOPPED</code>: The build phase stopped.</p> </li> <li> <p> <code>SUCCEEDED</code>: The build phase succeeded.</p> </li> <li> <p> <code>TIMED_OUT</code>: The build phase timed out.</p> </li> </ul>"
        },
        "startTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the build phase started, expressed in Unix time format.</p>"
        },
        "endTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the build phase ended, expressed in Unix time format.</p>"
        },
        "durationInSeconds":{
          "shape":"WrapperLong",
          "documentation":"<p>How long, in seconds, between the starting and ending times of the build's phase.</p>"
        },
        "contexts":{
          "shape":"PhaseContexts",
          "documentation":"<p>Additional information about a build phase, especially to help troubleshoot a failed build.</p>"
        }
      },
      "documentation":"<p>Information about a stage for a build.</p>"
    },
    "BuildPhaseType":{
      "type":"string",
      "enum":[
        "SUBMITTED",
        "PROVISIONING",
        "DOWNLOAD_SOURCE",
        "INSTALL",
        "PRE_BUILD",
        "BUILD",
        "POST_BUILD",
        "UPLOAD_ARTIFACTS",
        "FINALIZING",
        "COMPLETED"
      ]
    },
    "BuildPhases":{
      "type":"list",
      "member":{"shape":"BuildPhase"}
    },
    "Builds":{
      "type":"list",
      "member":{"shape":"Build"}
    },
    "BuildsNotDeleted":{
      "type":"list",
      "member":{"shape":"BuildNotDeleted"}
    },
    "CacheType":{
      "type":"string",
      "enum":[
        "NO_CACHE",
        "S3"
      ]
    },
    "CloudWatchLogsConfig":{
      "type":"structure",
      "required":["status"],
      "members":{
        "status":{
          "shape":"LogsConfigStatusType",
          "documentation":"<p>The current status of the Amazon CloudWatch Logs for a build project. Valid values are:</p> <ul> <li> <p> <code>ENABLED</code>: Amazon CloudWatch Logs are enabled for this build project.</p> </li> <li> <p> <code>DISABLED</code>: Amazon CloudWatch Logs are not enabled for this build project.</p> </li> </ul>"
        },
        "groupName":{
          "shape":"String",
          "documentation":"<p> The group name of the Amazon CloudWatch Logs. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html\">Working with Log Groups and Log Streams</a> </p>"
        },
        "streamName":{
          "shape":"String",
          "documentation":"<p> The prefix of the stream name of the Amazon CloudWatch Logs. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html\">Working with Log Groups and Log Streams</a> </p>"
        }
      },
      "documentation":"<p> Information about Amazon CloudWatch Logs for a build project. </p>"
    },
    "ComputeType":{
      "type":"string",
      "enum":[
        "BUILD_GENERAL1_SMALL",
        "BUILD_GENERAL1_MEDIUM",
        "BUILD_GENERAL1_LARGE"
      ]
    },
    "CreateProjectInput":{
      "type":"structure",
      "required":[
        "name",
        "source",
        "artifacts",
        "environment",
        "serviceRole"
      ],
      "members":{
        "name":{
          "shape":"ProjectName",
          "documentation":"<p>The name of the build project.</p>"
        },
        "description":{
          "shape":"ProjectDescription",
          "documentation":"<p>A description that makes the build project easy to identify.</p>"
        },
        "source":{
          "shape":"ProjectSource",
          "documentation":"<p>Information about the build input source code for the build project.</p>"
        },
        "secondarySources":{
          "shape":"ProjectSources",
          "documentation":"<p> An array of <code>ProjectSource</code> objects. </p>"
        },
        "artifacts":{
          "shape":"ProjectArtifacts",
          "documentation":"<p>Information about the build output artifacts for the build project.</p>"
        },
        "secondaryArtifacts":{
          "shape":"ProjectArtifactsList",
          "documentation":"<p> An array of <code>ProjectArtifacts</code> objects. </p>"
        },
        "cache":{
          "shape":"ProjectCache",
          "documentation":"<p>Stores recently used information so that it can be quickly accessed at a later time.</p>"
        },
        "environment":{
          "shape":"ProjectEnvironment",
          "documentation":"<p>Information about the build environment for the build project.</p>"
        },
        "serviceRole":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.</p>"
        },
        "timeoutInMinutes":{
          "shape":"TimeOut",
          "documentation":"<p>How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any build that has not been marked as completed. The default is 60 minutes.</p>"
        },
        "encryptionKey":{
          "shape":"NonEmptyString",
          "documentation":"<p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts.</p> <p>You can specify either the CMK's Amazon Resource Name (ARN) or, if available, the CMK's alias (using the format <code>alias/<i>alias-name</i> </code>).</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>A set of tags for this build project.</p> <p>These tags are available for use by AWS services that support AWS CodeBuild build project tags.</p>"
        },
        "vpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>VpcConfig enables AWS CodeBuild to access resources in an Amazon VPC.</p>"
        },
        "badgeEnabled":{
          "shape":"WrapperBoolean",
          "documentation":"<p>Set this to true to generate a publicly-accessible URL for your project's build badge.</p>"
        },
        "logsConfig":{
          "shape":"LogsConfig",
          "documentation":"<p> Information about logs for the build project. Logs can be Amazon CloudWatch Logs, uploaded to a specified S3 bucket, or both. </p>"
        }
      }
    },
    "CreateProjectOutput":{
      "type":"structure",
      "members":{
        "project":{
          "shape":"Project",
          "documentation":"<p>Information about the build project that was created.</p>"
        }
      }
    },
    "CreateWebhookInput":{
      "type":"structure",
      "required":["projectName"],
      "members":{
        "projectName":{
          "shape":"ProjectName",
          "documentation":"<p>The name of the AWS CodeBuild project.</p>"
        },
        "branchFilter":{
          "shape":"String",
          "documentation":"<p>A regular expression used to determine which branches in a repository are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If it doesn't match, then it is not. If branchFilter is empty, then all branches are built.</p>"
        }
      }
    },
    "CreateWebhookOutput":{
      "type":"structure",
      "members":{
        "webhook":{
          "shape":"Webhook",
          "documentation":"<p>Information about a webhook in GitHub that connects repository events to a build project in AWS CodeBuild.</p>"
        }
      }
    },
    "DeleteProjectInput":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the build project.</p>"
        }
      }
    },
    "DeleteProjectOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteWebhookInput":{
      "type":"structure",
      "required":["projectName"],
      "members":{
        "projectName":{
          "shape":"ProjectName",
          "documentation":"<p>The name of the AWS CodeBuild project.</p>"
        }
      }
    },
    "DeleteWebhookOutput":{
      "type":"structure",
      "members":{
      }
    },
    "EnvironmentImage":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the Docker image.</p>"
        },
        "description":{
          "shape":"String",
          "documentation":"<p>The description of the Docker image.</p>"
        },
        "versions":{
          "shape":"ImageVersions",
          "documentation":"<p>A list of environment image versions.</p>"
        }
      },
      "documentation":"<p>Information about a Docker image that is managed by AWS CodeBuild.</p>"
    },
    "EnvironmentImages":{
      "type":"list",
      "member":{"shape":"EnvironmentImage"}
    },
    "EnvironmentLanguage":{
      "type":"structure",
      "members":{
        "language":{
          "shape":"LanguageType",
          "documentation":"<p>The programming language for the Docker images.</p>"
        },
        "images":{
          "shape":"EnvironmentImages",
          "documentation":"<p>The list of Docker images that are related by the specified programming language.</p>"
        }
      },
      "documentation":"<p>A set of Docker images that are related by programming language and are managed by AWS CodeBuild.</p>"
    },
    "EnvironmentLanguages":{
      "type":"list",
      "member":{"shape":"EnvironmentLanguage"}
    },
    "EnvironmentPlatform":{
      "type":"structure",
      "members":{
        "platform":{
          "shape":"PlatformType",
          "documentation":"<p>The platform's name.</p>"
        },
        "languages":{
          "shape":"EnvironmentLanguages",
          "documentation":"<p>The list of programming languages that are available for the specified platform.</p>"
        }
      },
      "documentation":"<p>A set of Docker images that are related by platform and are managed by AWS CodeBuild.</p>"
    },
    "EnvironmentPlatforms":{
      "type":"list",
      "member":{"shape":"EnvironmentPlatform"}
    },
    "EnvironmentType":{
      "type":"string",
      "enum":[
        "WINDOWS_CONTAINER",
        "LINUX_CONTAINER"
      ]
    },
    "EnvironmentVariable":{
      "type":"structure",
      "required":[
        "name",
        "value"
      ],
      "members":{
        "name":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name or key of the environment variable.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The value of the environment variable.</p> <important> <p>We strongly discourage using environment variables to store sensitive values, especially AWS secret key IDs and secret access keys. Environment variables can be displayed in plain text using tools such as the AWS CodeBuild console and the AWS Command Line Interface (AWS CLI).</p> </important>"
        },
        "type":{
          "shape":"EnvironmentVariableType",
          "documentation":"<p>The type of environment variable. Valid values include:</p> <ul> <li> <p> <code>PARAMETER_STORE</code>: An environment variable stored in Amazon EC2 Systems Manager Parameter Store.</p> </li> <li> <p> <code>PLAINTEXT</code>: An environment variable in plaintext format.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about an environment variable for a build project or a build.</p>"
    },
    "EnvironmentVariableType":{
      "type":"string",
      "enum":[
        "PLAINTEXT",
        "PARAMETER_STORE"
      ]
    },
    "EnvironmentVariables":{
      "type":"list",
      "member":{"shape":"EnvironmentVariable"}
    },
    "GitCloneDepth":{
      "type":"integer",
      "min":0
    },
    "ImageVersions":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "InvalidInputException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The input value that was provided is not valid.</p>",
      "exception":true
    },
    "InvalidateProjectCacheInput":{
      "type":"structure",
      "required":["projectName"],
      "members":{
        "projectName":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the AWS CodeBuild build project that the cache will be reset for.</p>"
        }
      }
    },
    "InvalidateProjectCacheOutput":{
      "type":"structure",
      "members":{
      }
    },
    "KeyInput":{
      "type":"string",
      "max":127,
      "min":1,
      "pattern":"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=@+\\\\-]*)$"
    },
    "LanguageType":{
      "type":"string",
      "enum":[
        "JAVA",
        "PYTHON",
        "NODE_JS",
        "RUBY",
        "GOLANG",
        "DOCKER",
        "ANDROID",
        "DOTNET",
        "BASE"
      ]
    },
    "ListBuildsForProjectInput":{
      "type":"structure",
      "required":["projectName"],
      "members":{
        "projectName":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the AWS CodeBuild project.</p>"
        },
        "sortOrder":{
          "shape":"SortOrderType",
          "documentation":"<p>The order to list build IDs. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the build IDs in ascending order by build ID.</p> </li> <li> <p> <code>DESCENDING</code>: List the build IDs in descending order by build ID.</p> </li> </ul>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.</p>"
        }
      }
    },
    "ListBuildsForProjectOutput":{
      "type":"structure",
      "members":{
        "ids":{
          "shape":"BuildIds",
          "documentation":"<p>A list of build IDs for the specified build project, with each build ID representing a single build.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>"
        }
      }
    },
    "ListBuildsInput":{
      "type":"structure",
      "members":{
        "sortOrder":{
          "shape":"SortOrderType",
          "documentation":"<p>The order to list build IDs. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the build IDs in ascending order by build ID.</p> </li> <li> <p> <code>DESCENDING</code>: List the build IDs in descending order by build ID.</p> </li> </ul>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.</p>"
        }
      }
    },
    "ListBuildsOutput":{
      "type":"structure",
      "members":{
        "ids":{
          "shape":"BuildIds",
          "documentation":"<p>A list of build IDs, with each build ID representing a single build.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>"
        }
      }
    },
    "ListCuratedEnvironmentImagesInput":{
      "type":"structure",
      "members":{
      }
    },
    "ListCuratedEnvironmentImagesOutput":{
      "type":"structure",
      "members":{
        "platforms":{
          "shape":"EnvironmentPlatforms",
          "documentation":"<p>Information about supported platforms for Docker images that are managed by AWS CodeBuild.</p>"
        }
      }
    },
    "ListProjectsInput":{
      "type":"structure",
      "members":{
        "sortBy":{
          "shape":"ProjectSortByType",
          "documentation":"<p>The criterion to be used to list build project names. Valid values include:</p> <ul> <li> <p> <code>CREATED_TIME</code>: List the build project names based on when each build project was created.</p> </li> <li> <p> <code>LAST_MODIFIED_TIME</code>: List the build project names based on when information about each build project was last changed.</p> </li> <li> <p> <code>NAME</code>: List the build project names based on each build project's name.</p> </li> </ul> <p>Use <code>sortOrder</code> to specify in what order to list the build project names based on the preceding criteria.</p>"
        },
        "sortOrder":{
          "shape":"SortOrderType",
          "documentation":"<p>The order in which to list build projects. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the build project names in ascending order.</p> </li> <li> <p> <code>DESCENDING</code>: List the build project names in descending order.</p> </li> </ul> <p>Use <code>sortBy</code> to specify the criterion to be used to list build project names.</p>"
        },
        "nextToken":{
          "shape":"NonEmptyString",
          "documentation":"<p>During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.</p>"
        }
      }
    },
    "ListProjectsOutput":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"String",
          "documentation":"<p>If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>"
        },
        "projects":{
          "shape":"ProjectNames",
          "documentation":"<p>The list of build project names, with each build project name representing a single build project.</p>"
        }
      }
    },
    "LogsConfig":{
      "type":"structure",
      "members":{
        "cloudWatchLogs":{
          "shape":"CloudWatchLogsConfig",
          "documentation":"<p> Information about Amazon CloudWatch Logs for a build project. Amazon CloudWatch Logs are enabled by default. </p>"
        },
        "s3Logs":{
          "shape":"S3LogsConfig",
          "documentation":"<p> Information about logs built to an S3 bucket for a build project. S3 logs are not enabled by default. </p>"
        }
      },
      "documentation":"<p> Information about logs for a build project. Logs can be Amazon CloudWatch Logs, built in a specified S3 bucket, or both. </p>"
    },
    "LogsConfigStatusType":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED"
      ]
    },
    "LogsLocation":{
      "type":"structure",
      "members":{
        "groupName":{
          "shape":"String",
          "documentation":"<p>The name of the Amazon CloudWatch Logs group for the build logs.</p>"
        },
        "streamName":{
          "shape":"String",
          "documentation":"<p>The name of the Amazon CloudWatch Logs stream for the build logs.</p>"
        },
        "deepLink":{
          "shape":"String",
          "documentation":"<p>The URL to an individual build log in Amazon CloudWatch Logs.</p>"
        },
        "s3DeepLink":{
          "shape":"String",
          "documentation":"<p> The URL to an individual build log in an S3 bucket. </p>"
        },
        "cloudWatchLogs":{
          "shape":"CloudWatchLogsConfig",
          "documentation":"<p> Information about Amazon CloudWatch Logs for a build project. </p>"
        },
        "s3Logs":{
          "shape":"S3LogsConfig",
          "documentation":"<p> Information about S3 logs for a build project. </p>"
        }
      },
      "documentation":"<p>Information about build logs in Amazon CloudWatch Logs.</p>"
    },
    "NetworkInterface":{
      "type":"structure",
      "members":{
        "subnetId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the subnet.</p>"
        },
        "networkInterfaceId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the network interface.</p>"
        }
      },
      "documentation":"<p>Describes a network interface.</p>"
    },
    "NonEmptyString":{
      "type":"string",
      "min":1
    },
    "OAuthProviderException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>There was a problem with the underlying OAuth provider.</p>",
      "exception":true
    },
    "PhaseContext":{
      "type":"structure",
      "members":{
        "statusCode":{
          "shape":"String",
          "documentation":"<p>The status code for the context of the build phase.</p>"
        },
        "message":{
          "shape":"String",
          "documentation":"<p>An explanation of the build phase's context. This explanation might include a command ID and an exit code.</p>"
        }
      },
      "documentation":"<p>Additional information about a build phase that has an error. You can use this information to help troubleshoot a failed build.</p>"
    },
    "PhaseContexts":{
      "type":"list",
      "member":{"shape":"PhaseContext"}
    },
    "PlatformType":{
      "type":"string",
      "enum":[
        "DEBIAN",
        "AMAZON_LINUX",
        "UBUNTU",
        "WINDOWS_SERVER"
      ]
    },
    "Project":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ProjectName",
          "documentation":"<p>The name of the build project.</p>"
        },
        "arn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the build project.</p>"
        },
        "description":{
          "shape":"ProjectDescription",
          "documentation":"<p>A description that makes the build project easy to identify.</p>"
        },
        "source":{
          "shape":"ProjectSource",
          "documentation":"<p>Information about the build input source code for this build project.</p>"
        },
        "secondarySources":{
          "shape":"ProjectSources",
          "documentation":"<p> An array of <code>ProjectSource</code> objects. </p>"
        },
        "artifacts":{
          "shape":"ProjectArtifacts",
          "documentation":"<p>Information about the build output artifacts for the build project.</p>"
        },
        "secondaryArtifacts":{
          "shape":"ProjectArtifactsList",
          "documentation":"<p> An array of <code>ProjectArtifacts</code> objects. </p>"
        },
        "cache":{
          "shape":"ProjectCache",
          "documentation":"<p>Information about the cache for the build project.</p>"
        },
        "environment":{
          "shape":"ProjectEnvironment",
          "documentation":"<p>Information about the build environment for this build project.</p>"
        },
        "serviceRole":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.</p>"
        },
        "timeoutInMinutes":{
          "shape":"TimeOut",
          "documentation":"<p>How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before timing out any related build that did not get marked as completed. The default is 60 minutes.</p>"
        },
        "encryptionKey":{
          "shape":"NonEmptyString",
          "documentation":"<p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts.</p> <p>This is expressed either as the CMK's Amazon Resource Name (ARN) or, if specified, the CMK's alias (using the format <code>alias/<i>alias-name</i> </code>).</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The tags for this build project.</p> <p>These tags are available for use by AWS services that support AWS CodeBuild build project tags.</p>"
        },
        "created":{
          "shape":"Timestamp",
          "documentation":"<p>When the build project was created, expressed in Unix time format.</p>"
        },
        "lastModified":{
          "shape":"Timestamp",
          "documentation":"<p>When the build project's settings were last modified, expressed in Unix time format.</p>"
        },
        "webhook":{
          "shape":"Webhook",
          "documentation":"<p>Information about a webhook in GitHub that connects repository events to a build project in AWS CodeBuild.</p>"
        },
        "vpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>Information about the VPC configuration that AWS CodeBuild will access.</p>"
        },
        "badge":{
          "shape":"ProjectBadge",
          "documentation":"<p>Information about the build badge for the build project.</p>"
        },
        "logsConfig":{
          "shape":"LogsConfig",
          "documentation":"<p> Information about logs for the build project. A project can create Amazon CloudWatch Logs, logs in an S3 bucket, or both. </p>"
        }
      },
      "documentation":"<p>Information about a build project.</p>"
    },
    "ProjectArtifacts":{
      "type":"structure",
      "required":["type"],
      "members":{
        "type":{
          "shape":"ArtifactsType",
          "documentation":"<p>The type of build output artifact. Valid values include:</p> <ul> <li> <p> <code>CODEPIPELINE</code>: The build project will have build output generated through AWS CodePipeline.</p> </li> <li> <p> <code>NO_ARTIFACTS</code>: The build project will not produce any build output.</p> </li> <li> <p> <code>S3</code>: The build project will store build output in Amazon Simple Storage Service (Amazon S3).</p> </li> </ul>"
        },
        "location":{
          "shape":"String",
          "documentation":"<p>Information about the build output artifact location, as follows:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output locations instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, then this value will be ignored if specified, because no build output will be produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output bucket.</p> </li> </ul>"
        },
        "path":{
          "shape":"String",
          "documentation":"<p>Along with <code>namespaceType</code> and <code>name</code>, the pattern that AWS CodeBuild will use to name and store the output artifact, as follows:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, then this value will be ignored if specified, because no build output will be produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the path to the output artifact. If <code>path</code> is not specified, then <code>path</code> will not be used.</p> </li> </ul> <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>NONE</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, then the output artifact would be stored in the output bucket at <code>MyArtifacts/MyArtifact.zip</code>.</p>"
        },
        "namespaceType":{
          "shape":"ArtifactNamespace",
          "documentation":"<p>Along with <code>path</code> and <code>name</code>, the pattern that AWS CodeBuild will use to determine the name and location to store the output artifact, as follows:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, then this value will be ignored if specified, because no build output will be produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, then valid values include:</p> <ul> <li> <p> <code>BUILD_ID</code>: Include the build ID in the location of the build output artifact.</p> </li> <li> <p> <code>NONE</code>: Do not include the build ID. This is the default if <code>namespaceType</code> is not specified.</p> </li> </ul> </li> </ul> <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, then the output artifact would be stored in <code>MyArtifacts/<i>build-ID</i>/MyArtifact.zip</code>.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>Along with <code>path</code> and <code>namespaceType</code>, the pattern that AWS CodeBuild will use to name and store the output artifact, as follows:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, then this value will be ignored if specified, because no build output will be produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output artifact object. If you set the name to be a forward slash (\"/\"), then the artifact is stored in the root of the output bucket.</p> </li> </ul> <p>For example:</p> <ul> <li> <p> If <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, then the output artifact would be stored in <code>MyArtifacts/<i>build-ID</i>/MyArtifact.zip</code>. </p> </li> <li> <p> If <code>path</code> is empty, <code>namespaceType</code> is set to <code>NONE</code>, and <code>name</code> is set to \"<code>/</code>\", then the output artifact would be stored in the root of the output bucket. </p> </li> <li> <p> If <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to \"<code>/</code>\", then the output artifact would be stored in <code>MyArtifacts/<i>build-ID</i> </code>. </p> </li> </ul>"
        },
        "packaging":{
          "shape":"ArtifactPackaging",
          "documentation":"<p>The type of build output artifact to create, as follows:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output artifacts instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, then this value will be ignored if specified, because no build output will be produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p> <ul> <li> <p> <code>NONE</code>: AWS CodeBuild will create in the output bucket a folder containing the build output. This is the default if <code>packaging</code> is not specified.</p> </li> <li> <p> <code>ZIP</code>: AWS CodeBuild will create in the output bucket a ZIP file containing the build output.</p> </li> </ul> </li> </ul>"
        },
        "overrideArtifactName":{
          "shape":"WrapperBoolean",
          "documentation":"<p> If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique. </p>"
        },
        "encryptionDisabled":{
          "shape":"WrapperBoolean",
          "documentation":"<p> Set to true if you do not want your output artifacts encrypted. This option is only valid if your artifacts type is Amazon S3. If this is set with another artifacts type, an invalidInputException will be thrown. </p>"
        },
        "artifactIdentifier":{
          "shape":"String",
          "documentation":"<p> An identifier for this artifact definition. </p>"
        }
      },
      "documentation":"<p>Information about the build output artifacts for the build project.</p>"
    },
    "ProjectArtifactsList":{
      "type":"list",
      "member":{"shape":"ProjectArtifacts"},
      "max":12,
      "min":0
    },
    "ProjectBadge":{
      "type":"structure",
      "members":{
        "badgeEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Set this to true to generate a publicly-accessible URL for your project's build badge.</p>"
        },
        "badgeRequestUrl":{
          "shape":"String",
          "documentation":"<p>The publicly-accessible URL through which you can access the build badge for your project. </p>"
        }
      },
      "documentation":"<p>Information about the build badge for the build project.</p>"
    },
    "ProjectCache":{
      "type":"structure",
      "required":["type"],
      "members":{
        "type":{
          "shape":"CacheType",
          "documentation":"<p>The type of cache used by the build project. Valid values include:</p> <ul> <li> <p> <code>NO_CACHE</code>: The build project will not use any cache.</p> </li> <li> <p> <code>S3</code>: The build project will read and write from/to S3.</p> </li> </ul>"
        },
        "location":{
          "shape":"String",
          "documentation":"<p>Information about the cache location, as follows: </p> <ul> <li> <p> <code>NO_CACHE</code>: This value will be ignored.</p> </li> <li> <p> <code>S3</code>: This is the S3 bucket name/prefix.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about the cache for the build project.</p>"
    },
    "ProjectDescription":{
      "type":"string",
      "max":255,
      "min":0
    },
    "ProjectEnvironment":{
      "type":"structure",
      "required":[
        "type",
        "image",
        "computeType"
      ],
      "members":{
        "type":{
          "shape":"EnvironmentType",
          "documentation":"<p>The type of build environment to use for related builds.</p>"
        },
        "image":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the Docker image to use for this build project.</p>"
        },
        "computeType":{
          "shape":"ComputeType",
          "documentation":"<p>Information about the compute resources the build project will use. Available values include:</p> <ul> <li> <p> <code>BUILD_GENERAL1_SMALL</code>: Use up to 3 GB memory and 2 vCPUs for builds.</p> </li> <li> <p> <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 7 GB memory and 4 vCPUs for builds.</p> </li> <li> <p> <code>BUILD_GENERAL1_LARGE</code>: Use up to 15 GB memory and 8 vCPUs for builds.</p> </li> </ul>"
        },
        "environmentVariables":{
          "shape":"EnvironmentVariables",
          "documentation":"<p>A set of environment variables to make available to builds for this build project.</p>"
        },
        "privilegedMode":{
          "shape":"WrapperBoolean",
          "documentation":"<p>Enables running the Docker daemon inside a Docker container. Set to true only if the build project is be used to build Docker images, and the specified build environment image is not provided by AWS CodeBuild with Docker support. Otherwise, all associated builds that attempt to interact with the Docker daemon will fail. Note that you must also start the Docker daemon so that builds can interact with it. One way to do this is to initialize the Docker daemon during the install phase of your build spec by running the following build commands. (Do not run the following build commands if the specified build environment image is provided by AWS CodeBuild with Docker support.)</p> <p>If the operating system's base image is Ubuntu Linux:</p> <p> <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&amp; - timeout 15 sh -c \"until docker info; do echo .; sleep 1; done\"</code> </p> <p>If the operating system's base image is Alpine Linux, add the <code>-t</code> argument to <code>timeout</code>:</p> <p> <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&amp; - timeout 15 -t sh -c \"until docker info; do echo .; sleep 1; done\"</code> </p>"
        },
        "certificate":{
          "shape":"String",
          "documentation":"<p>The certificate to use with this build project.</p>"
        }
      },
      "documentation":"<p>Information about the build environment of the build project.</p>"
    },
    "ProjectName":{
      "type":"string",
      "max":255,
      "min":2,
      "pattern":"[A-Za-z0-9][A-Za-z0-9\\-_]{1,254}"
    },
    "ProjectNames":{
      "type":"list",
      "member":{"shape":"NonEmptyString"},
      "max":100,
      "min":1
    },
    "ProjectSecondarySourceVersions":{
      "type":"list",
      "member":{"shape":"ProjectSourceVersion"},
      "max":12,
      "min":0
    },
    "ProjectSortByType":{
      "type":"string",
      "enum":[
        "NAME",
        "CREATED_TIME",
        "LAST_MODIFIED_TIME"
      ]
    },
    "ProjectSource":{
      "type":"structure",
      "required":["type"],
      "members":{
        "type":{
          "shape":"SourceType",
          "documentation":"<p>The type of repository that contains the source code to be built. Valid values include:</p> <ul> <li> <p> <code>BITBUCKET</code>: The source code is in a Bitbucket repository.</p> </li> <li> <p> <code>CODECOMMIT</code>: The source code is in an AWS CodeCommit repository.</p> </li> <li> <p> <code>CODEPIPELINE</code>: The source code settings are specified in the source action of a pipeline in AWS CodePipeline.</p> </li> <li> <p> <code>GITHUB</code>: The source code is in a GitHub repository.</p> </li> <li> <p> <code>NO_SOURCE</code>: The project does not have input source code.</p> </li> <li> <p> <code>S3</code>: The source code is in an Amazon Simple Storage Service (Amazon S3) input bucket.</p> </li> </ul>"
        },
        "location":{
          "shape":"String",
          "documentation":"<p>Information about the location of the source code to be built. Valid values include:</p> <ul> <li> <p>For source code settings that are specified in the source action of a pipeline in AWS CodePipeline, <code>location</code> should not be specified. If it is specified, AWS CodePipeline will ignore it. This is because AWS CodePipeline uses the settings in a pipeline's source action instead of this value.</p> </li> <li> <p>For source code in an AWS CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the build spec (for example, <code>https://git-codecommit.<i>region-ID</i>.amazonaws.com/v1/repos/<i>repo-name</i> </code>).</p> </li> <li> <p>For source code in an Amazon Simple Storage Service (Amazon S3) input bucket, the path to the ZIP file that contains the source code (for example, <code> <i>bucket-name</i>/<i>path</i>/<i>to</i>/<i>object-name</i>.zip</code>)</p> </li> <li> <p>For source code in a GitHub repository, the HTTPS clone URL to the repository that contains the source and the build spec. Also, you must connect your AWS account to your GitHub account. To do this, use the AWS CodeBuild console to begin creating a build project. When you use the console to connect (or reconnect) with GitHub, on the GitHub <b>Authorize application</b> page that displays, for <b>Organization access</b>, choose <b>Request access</b> next to each repository you want to allow AWS CodeBuild to have access to. Then choose <b>Authorize application</b>. (After you have connected to your GitHub account, you do not need to finish creating the build project, and you may then leave the AWS CodeBuild console.) To instruct AWS CodeBuild to then use this connection, in the <code>source</code> object, set the <code>auth</code> object's <code>type</code> value to <code>OAUTH</code>.</p> </li> <li> <p>For source code in a Bitbucket repository, the HTTPS clone URL to the repository that contains the source and the build spec. Also, you must connect your AWS account to your Bitbucket account. To do this, use the AWS CodeBuild console to begin creating a build project. When you use the console to connect (or reconnect) with Bitbucket, on the Bitbucket <b>Confirm access to your account</b> page that displays, choose <b>Grant access</b>. (After you have connected to your Bitbucket account, you do not need to finish creating the build project, and you may then leave the AWS CodeBuild console.) To instruct AWS CodeBuild to then use this connection, in the <code>source</code> object, set the <code>auth</code> object's <code>type</code> value to <code>OAUTH</code>.</p> </li> </ul>"
        },
        "gitCloneDepth":{
          "shape":"GitCloneDepth",
          "documentation":"<p>Information about the git clone depth for the build project.</p>"
        },
        "buildspec":{
          "shape":"String",
          "documentation":"<p>The build spec declaration to use for the builds in this build project.</p> <p>If this value is not specified, a build spec must be included along with the source code to be built.</p>"
        },
        "auth":{
          "shape":"SourceAuth",
          "documentation":"<p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly (unless the build project's source <code>type</code> value is <code>BITBUCKET</code> or <code>GITHUB</code>).</p>"
        },
        "reportBuildStatus":{
          "shape":"WrapperBoolean",
          "documentation":"<p> Set to true to report the status of a build's start and finish to your source provider. This option is only valid when your source provider is GitHub. If this is set and you use a different source provider, an invalidInputException is thrown. </p>"
        },
        "insecureSsl":{
          "shape":"WrapperBoolean",
          "documentation":"<p>Enable this flag to ignore SSL warnings while connecting to the project source code.</p>"
        },
        "sourceIdentifier":{
          "shape":"String",
          "documentation":"<p> An identifier for this project source. </p>"
        }
      },
      "documentation":"<p>Information about the build input source code for the build project.</p>"
    },
    "ProjectSourceVersion":{
      "type":"structure",
      "required":[
        "sourceIdentifier",
        "sourceVersion"
      ],
      "members":{
        "sourceIdentifier":{
          "shape":"String",
          "documentation":"<p>An identifier for a source in the build project.</p>"
        },
        "sourceVersion":{
          "shape":"String",
          "documentation":"<p>The source version for the corresponding source identifier. If specified, must be one of:</p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID will be used. If not specified, the default branch's HEAD commit ID will be used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID will be used. If not specified, the default branch's HEAD commit ID will be used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object representing the build input ZIP file to use.</p> </li> </ul>"
        }
      },
      "documentation":"<p>A source identifier and its corresponding version.</p>"
    },
    "ProjectSources":{
      "type":"list",
      "member":{"shape":"ProjectSource"},
      "max":12,
      "min":0
    },
    "Projects":{
      "type":"list",
      "member":{"shape":"Project"}
    },
    "ResourceAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified AWS resource cannot be created, because an AWS resource with the same settings already exists.</p>",
      "exception":true
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified AWS resource cannot be found.</p>",
      "exception":true
    },
    "S3LogsConfig":{
      "type":"structure",
      "required":["status"],
      "members":{
        "status":{
          "shape":"LogsConfigStatusType",
          "documentation":"<p>The current status of the S3 build logs. Valid values are:</p> <ul> <li> <p> <code>ENABLED</code>: S3 build logs are enabled for this build project.</p> </li> <li> <p> <code>DISABLED</code>: S3 build logs are not enabled for this build project.</p> </li> </ul>"
        },
        "location":{
          "shape":"String",
          "documentation":"<p> The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is <code>my-bucket</code>, and your path prefix is <code>build-log</code>, then acceptable formats are <code>my-bucket/build-log</code> or <code>aws:s3:::my-bucket/build-log</code>. </p>"
        }
      },
      "documentation":"<p> Information about S3 logs for a build project. </p>"
    },
    "SecurityGroupIds":{
      "type":"list",
      "member":{"shape":"NonEmptyString"},
      "max":5
    },
    "SortOrderType":{
      "type":"string",
      "enum":[
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "SourceAuth":{
      "type":"structure",
      "required":["type"],
      "members":{
        "type":{
          "shape":"SourceAuthType",
          "documentation":"<p>The authorization type to use. The only valid value is <code>OAUTH</code>, which represents the OAuth authorization type.</p>"
        },
        "resource":{
          "shape":"String",
          "documentation":"<p>The resource value that applies to the specified authorization type.</p>"
        }
      },
      "documentation":"<p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly (unless the build project's source <code>type</code> value is <code>BITBUCKET</code> or <code>GITHUB</code>).</p>"
    },
    "SourceAuthType":{
      "type":"string",
      "enum":["OAUTH"]
    },
    "SourceType":{
      "type":"string",
      "enum":[
        "CODECOMMIT",
        "CODEPIPELINE",
        "GITHUB",
        "S3",
        "BITBUCKET",
        "GITHUB_ENTERPRISE",
        "NO_SOURCE"
      ]
    },
    "StartBuildInput":{
      "type":"structure",
      "required":["projectName"],
      "members":{
        "projectName":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the AWS CodeBuild build project to start running a build.</p>"
        },
        "secondarySourcesOverride":{
          "shape":"ProjectSources",
          "documentation":"<p> An array of <code>ProjectSource</code> objects. </p>"
        },
        "secondarySourcesVersionOverride":{
          "shape":"ProjectSecondarySourceVersions",
          "documentation":"<p> An array of <code>ProjectSourceVersion</code> objects that specify one or more versions of the project's secondary sources to be used for this build only. </p>"
        },
        "sourceVersion":{
          "shape":"String",
          "documentation":"<p>A version of the build input to be built, for this build only. If not specified, the latest version will be used. If specified, must be one of:</p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID will be used. If not specified, the default branch's HEAD commit ID will be used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID will be used. If not specified, the default branch's HEAD commit ID will be used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object representing the build input ZIP file to use.</p> </li> </ul>"
        },
        "artifactsOverride":{
          "shape":"ProjectArtifacts",
          "documentation":"<p>Build output artifact settings that override, for this build only, the latest ones already defined in the build project.</p>"
        },
        "secondaryArtifactsOverride":{
          "shape":"ProjectArtifactsList",
          "documentation":"<p> An array of <code>ProjectArtifacts</code> objects. </p>"
        },
        "environmentVariablesOverride":{
          "shape":"EnvironmentVariables",
          "documentation":"<p>A set of environment variables that overrides, for this build only, the latest ones already defined in the build project.</p>"
        },
        "sourceTypeOverride":{
          "shape":"SourceType",
          "documentation":"<p>A source input type for this build that overrides the source input defined in the build project.</p>"
        },
        "sourceLocationOverride":{
          "shape":"String",
          "documentation":"<p>A location that overrides for this build the source location for the one defined in the build project.</p>"
        },
        "sourceAuthOverride":{
          "shape":"SourceAuth",
          "documentation":"<p>An authorization type for this build that overrides the one defined in the build project. This override applies only if the build project's source is BitBucket or GitHub.</p>"
        },
        "gitCloneDepthOverride":{
          "shape":"GitCloneDepth",
          "documentation":"<p>The user-defined depth of history, with a minimum value of 0, that overrides, for this build only, any previous depth of history defined in the build project.</p>"
        },
        "buildspecOverride":{
          "shape":"String",
          "documentation":"<p>A build spec declaration that overrides, for this build only, the latest one already defined in the build project.</p>"
        },
        "insecureSslOverride":{
          "shape":"WrapperBoolean",
          "documentation":"<p>Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.</p>"
        },
        "reportBuildStatusOverride":{
          "shape":"WrapperBoolean",
          "documentation":"<p> Set to true to report to your source provider the status of a build's start and completion. If you use this option with a source provider other than GitHub, an invalidInputException is thrown. </p>"
        },
        "environmentTypeOverride":{
          "shape":"EnvironmentType",
          "documentation":"<p>A container type for this build that overrides the one specified in the build project.</p>"
        },
        "imageOverride":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of an image for this build that overrides the one specified in the build project.</p>"
        },
        "computeTypeOverride":{
          "shape":"ComputeType",
          "documentation":"<p>The name of a compute type for this build that overrides the one specified in the build project.</p>"
        },
        "certificateOverride":{
          "shape":"String",
          "documentation":"<p>The name of a certificate for this build that overrides the one specified in the build project.</p>"
        },
        "cacheOverride":{
          "shape":"ProjectCache",
          "documentation":"<p>A ProjectCache object specified for this build that overrides the one defined in the build project.</p>"
        },
        "serviceRoleOverride":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of a service role for this build that overrides the one specified in the build project.</p>"
        },
        "privilegedModeOverride":{
          "shape":"WrapperBoolean",
          "documentation":"<p>Enable this flag to override privileged mode in the build project.</p>"
        },
        "timeoutInMinutesOverride":{
          "shape":"TimeOut",
          "documentation":"<p>The number of build timeout minutes, from 5 to 480 (8 hours), that overrides, for this build only, the latest setting already defined in the build project.</p>"
        },
        "idempotencyToken":{
          "shape":"String",
          "documentation":"<p>A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuild request. The token is included in the StartBuild request and is valid for 12 hours. If you repeat the StartBuild request with the same token, but change a parameter, AWS CodeBuild returns a parameter mismatch error. </p>"
        },
        "logsConfigOverride":{
          "shape":"LogsConfig",
          "documentation":"<p> Log settings for this build that override the log settings defined in the build project. </p>"
        }
      }
    },
    "StartBuildOutput":{
      "type":"structure",
      "members":{
        "build":{
          "shape":"Build",
          "documentation":"<p>Information about the build to be run.</p>"
        }
      }
    },
    "StatusType":{
      "type":"string",
      "enum":[
        "SUCCEEDED",
        "FAILED",
        "FAULT",
        "TIMED_OUT",
        "IN_PROGRESS",
        "STOPPED"
      ]
    },
    "StopBuildInput":{
      "type":"structure",
      "required":["id"],
      "members":{
        "id":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the build.</p>"
        }
      }
    },
    "StopBuildOutput":{
      "type":"structure",
      "members":{
        "build":{
          "shape":"Build",
          "documentation":"<p>Information about the build.</p>"
        }
      }
    },
    "String":{"type":"string"},
    "Subnets":{
      "type":"list",
      "member":{"shape":"NonEmptyString"},
      "max":16
    },
    "Tag":{
      "type":"structure",
      "members":{
        "key":{
          "shape":"KeyInput",
          "documentation":"<p>The tag's key.</p>"
        },
        "value":{
          "shape":"ValueInput",
          "documentation":"<p>The tag's value.</p>"
        }
      },
      "documentation":"<p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p>"
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":50,
      "min":0
    },
    "TimeOut":{
      "type":"integer",
      "max":480,
      "min":5
    },
    "Timestamp":{"type":"timestamp"},
    "UpdateProjectInput":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the build project.</p> <note> <p>You cannot change a build project's name.</p> </note>"
        },
        "description":{
          "shape":"ProjectDescription",
          "documentation":"<p>A new or replacement description of the build project.</p>"
        },
        "source":{
          "shape":"ProjectSource",
          "documentation":"<p>Information to be changed about the build input source code for the build project.</p>"
        },
        "secondarySources":{
          "shape":"ProjectSources",
          "documentation":"<p> An array of <code>ProjectSource</code> objects. </p>"
        },
        "artifacts":{
          "shape":"ProjectArtifacts",
          "documentation":"<p>Information to be changed about the build output artifacts for the build project.</p>"
        },
        "secondaryArtifacts":{
          "shape":"ProjectArtifactsList",
          "documentation":"<p> An array of <code>ProjectSource</code> objects. </p>"
        },
        "cache":{
          "shape":"ProjectCache",
          "documentation":"<p>Stores recently used information so that it can be quickly accessed at a later time.</p>"
        },
        "environment":{
          "shape":"ProjectEnvironment",
          "documentation":"<p>Information to be changed about the build environment for the build project.</p>"
        },
        "serviceRole":{
          "shape":"NonEmptyString",
          "documentation":"<p>The replacement ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.</p>"
        },
        "timeoutInMinutes":{
          "shape":"TimeOut",
          "documentation":"<p>The replacement value in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before timing out any related build that did not get marked as completed.</p>"
        },
        "encryptionKey":{
          "shape":"NonEmptyString",
          "documentation":"<p>The replacement AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts.</p> <p>You can specify either the CMK's Amazon Resource Name (ARN) or, if available, the CMK's alias (using the format <code>alias/<i>alias-name</i> </code>).</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The replacement set of tags for this build project.</p> <p>These tags are available for use by AWS services that support AWS CodeBuild build project tags.</p>"
        },
        "vpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>VpcConfig enables AWS CodeBuild to access resources in an Amazon VPC.</p>"
        },
        "badgeEnabled":{
          "shape":"WrapperBoolean",
          "documentation":"<p>Set this to true to generate a publicly-accessible URL for your project's build badge.</p>"
        },
        "logsConfig":{
          "shape":"LogsConfig",
          "documentation":"<p> Information about logs for the build project. A project can create Amazon CloudWatch Logs, logs in an S3 bucket, or both. </p>"
        }
      }
    },
    "UpdateProjectOutput":{
      "type":"structure",
      "members":{
        "project":{
          "shape":"Project",
          "documentation":"<p>Information about the build project that was changed.</p>"
        }
      }
    },
    "UpdateWebhookInput":{
      "type":"structure",
      "required":["projectName"],
      "members":{
        "projectName":{
          "shape":"ProjectName",
          "documentation":"<p>The name of the AWS CodeBuild project.</p>"
        },
        "branchFilter":{
          "shape":"String",
          "documentation":"<p>A regular expression used to determine which branches in a repository are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If it doesn't match, then it is not. If branchFilter is empty, then all branches are built.</p>"
        },
        "rotateSecret":{
          "shape":"Boolean",
          "documentation":"<p> A boolean value that specifies whether the associated repository's secret token should be updated. </p>"
        }
      }
    },
    "UpdateWebhookOutput":{
      "type":"structure",
      "members":{
        "webhook":{
          "shape":"Webhook",
          "documentation":"<p> Information about a repository's webhook that is associated with a project in AWS CodeBuild. </p>"
        }
      }
    },
    "ValueInput":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=@+\\\\-]*)$"
    },
    "VpcConfig":{
      "type":"structure",
      "members":{
        "vpcId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the Amazon VPC.</p>"
        },
        "subnets":{
          "shape":"Subnets",
          "documentation":"<p>A list of one or more subnet IDs in your Amazon VPC.</p>"
        },
        "securityGroupIds":{
          "shape":"SecurityGroupIds",
          "documentation":"<p>A list of one or more security groups IDs in your Amazon VPC.</p>"
        }
      },
      "documentation":"<p>Information about the VPC configuration that AWS CodeBuild will access.</p>"
    },
    "Webhook":{
      "type":"structure",
      "members":{
        "url":{
          "shape":"NonEmptyString",
          "documentation":"<p>The URL to the webhook.</p>"
        },
        "payloadUrl":{
          "shape":"NonEmptyString",
          "documentation":"<p> The CodeBuild endpoint where webhook events are sent.</p>"
        },
        "secret":{
          "shape":"NonEmptyString",
          "documentation":"<p> The secret token of the associated repository. </p>"
        },
        "branchFilter":{
          "shape":"String",
          "documentation":"<p>A regular expression used to determine which branches in a repository are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If it doesn't match, then it is not. If branchFilter is empty, then all branches are built.</p>"
        },
        "lastModifiedSecret":{
          "shape":"Timestamp",
          "documentation":"<p> A timestamp indicating the last time a repository's secret token was modified. </p>"
        }
      },
      "documentation":"<p>Information about a webhook in GitHub that connects repository events to a build project in AWS CodeBuild.</p>"
    },
    "WrapperBoolean":{"type":"boolean"},
    "WrapperInt":{"type":"integer"},
    "WrapperLong":{"type":"long"}
  },
  "documentation":"<fullname>AWS CodeBuild</fullname> <p>AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild to use your own build tools. AWS CodeBuild scales automatically to meet peak build requests, and you pay only for the build time you consume. For more information about AWS CodeBuild, see the <i>AWS CodeBuild User Guide</i>.</p> <p>AWS CodeBuild supports these operations:</p> <ul> <li> <p> <code>BatchDeleteBuilds</code>: Deletes one or more builds.</p> </li> <li> <p> <code>BatchGetProjects</code>: Gets information about one or more build projects. A <i>build project</i> defines how AWS CodeBuild will run a build. This includes information such as where to get the source code to build, the build environment to use, the build commands to run, and where to store the build output. A <i>build environment</i> represents a combination of operating system, programming language runtime, and tools that AWS CodeBuild will use to run a build. Also, you can add tags to build projects to help manage your resources and costs.</p> </li> <li> <p> <code>CreateProject</code>: Creates a build project.</p> </li> <li> <p> <code>CreateWebhook</code>: For an existing AWS CodeBuild build project that has its source code stored in a GitHub repository, enables AWS CodeBuild to begin automatically rebuilding the source code every time a code change is pushed to the repository.</p> </li> <li> <p> <code>UpdateWebhook</code>: Changes the settings of an existing webhook.</p> </li> <li> <p> <code>DeleteProject</code>: Deletes a build project.</p> </li> <li> <p> <code>DeleteWebhook</code>: For an existing AWS CodeBuild build project that has its source code stored in a GitHub repository, stops AWS CodeBuild from automatically rebuilding the source code every time a code change is pushed to the repository.</p> </li> <li> <p> <code>ListProjects</code>: Gets a list of build project names, with each build project name representing a single build project.</p> </li> <li> <p> <code>UpdateProject</code>: Changes the settings of an existing build project.</p> </li> <li> <p> <code>BatchGetBuilds</code>: Gets information about one or more builds.</p> </li> <li> <p> <code>ListBuilds</code>: Gets a list of build IDs, with each build ID representing a single build.</p> </li> <li> <p> <code>ListBuildsForProject</code>: Gets a list of build IDs for the specified build project, with each build ID representing a single build.</p> </li> <li> <p> <code>StartBuild</code>: Starts running a build.</p> </li> <li> <p> <code>StopBuild</code>: Attempts to stop running a build.</p> </li> <li> <p> <code>ListCuratedEnvironmentImages</code>: Gets information about Docker images that are managed by AWS CodeBuild.</p> </li> </ul>"
}
