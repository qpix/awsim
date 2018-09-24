awsim['codedeploy'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2014-10-06",
    "endpointPrefix":"codedeploy",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"CodeDeploy",
    "serviceFullName":"AWS CodeDeploy",
    "serviceId":"CodeDeploy",
    "signatureVersion":"v4",
    "targetPrefix":"CodeDeploy_20141006",
    "timestampFormat":"unixTimestamp",
    "uid":"codedeploy-2014-10-06"
  },
  "operations":{
    "AddTagsToOnPremisesInstances":{
      "name":"AddTagsToOnPremisesInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsToOnPremisesInstancesInput"},
      "errors":[
        {"shape":"InstanceNameRequiredException"},
        {"shape":"InvalidInstanceNameException"},
        {"shape":"TagRequiredException"},
        {"shape":"InvalidTagException"},
        {"shape":"TagLimitExceededException"},
        {"shape":"InstanceLimitExceededException"},
        {"shape":"InstanceNotRegisteredException"}
      ],
      "documentation":"<p>Adds tags to on-premises instances.</p>"
    },
    "BatchGetApplicationRevisions":{
      "name":"BatchGetApplicationRevisions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetApplicationRevisionsInput"},
      "output":{"shape":"BatchGetApplicationRevisionsOutput"},
      "errors":[
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"RevisionRequiredException"},
        {"shape":"InvalidRevisionException"},
        {"shape":"BatchLimitExceededException"}
      ],
      "documentation":"<p>Gets information about one or more application revisions.</p>"
    },
    "BatchGetApplications":{
      "name":"BatchGetApplications",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetApplicationsInput"},
      "output":{"shape":"BatchGetApplicationsOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"BatchLimitExceededException"}
      ],
      "documentation":"<p>Gets information about one or more applications.</p>"
    },
    "BatchGetDeploymentGroups":{
      "name":"BatchGetDeploymentGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetDeploymentGroupsInput"},
      "output":{"shape":"BatchGetDeploymentGroupsOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"DeploymentGroupNameRequiredException"},
        {"shape":"InvalidDeploymentGroupNameException"},
        {"shape":"BatchLimitExceededException"}
      ],
      "documentation":"<p>Gets information about one or more deployment groups.</p>"
    },
    "BatchGetDeploymentInstances":{
      "name":"BatchGetDeploymentInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetDeploymentInstancesInput"},
      "output":{"shape":"BatchGetDeploymentInstancesOutput"},
      "errors":[
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"DeploymentDoesNotExistException"},
        {"shape":"InstanceIdRequiredException"},
        {"shape":"InvalidDeploymentIdException"},
        {"shape":"InvalidInstanceNameException"},
        {"shape":"BatchLimitExceededException"}
      ],
      "documentation":"<p>Gets information about one or more instance that are part of a deployment group.</p>"
    },
    "BatchGetDeployments":{
      "name":"BatchGetDeployments",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetDeploymentsInput"},
      "output":{"shape":"BatchGetDeploymentsOutput"},
      "errors":[
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"InvalidDeploymentIdException"},
        {"shape":"BatchLimitExceededException"}
      ],
      "documentation":"<p>Gets information about one or more deployments.</p>"
    },
    "BatchGetOnPremisesInstances":{
      "name":"BatchGetOnPremisesInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetOnPremisesInstancesInput"},
      "output":{"shape":"BatchGetOnPremisesInstancesOutput"},
      "errors":[
        {"shape":"InstanceNameRequiredException"},
        {"shape":"InvalidInstanceNameException"},
        {"shape":"BatchLimitExceededException"}
      ],
      "documentation":"<p>Gets information about one or more on-premises instances.</p>"
    },
    "ContinueDeployment":{
      "name":"ContinueDeployment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ContinueDeploymentInput"},
      "errors":[
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"DeploymentDoesNotExistException"},
        {"shape":"DeploymentAlreadyCompletedException"},
        {"shape":"InvalidDeploymentIdException"},
        {"shape":"DeploymentIsNotInReadyStateException"},
        {"shape":"UnsupportedActionForDeploymentTypeException"}
      ],
      "documentation":"<p>For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) </p>"
    },
    "CreateApplication":{
      "name":"CreateApplication",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateApplicationInput"},
      "output":{"shape":"CreateApplicationOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationAlreadyExistsException"},
        {"shape":"ApplicationLimitExceededException"},
        {"shape":"InvalidComputePlatformException"}
      ],
      "documentation":"<p>Creates an application.</p>"
    },
    "CreateDeployment":{
      "name":"CreateDeployment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDeploymentInput"},
      "output":{"shape":"CreateDeploymentOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"DeploymentGroupNameRequiredException"},
        {"shape":"InvalidDeploymentGroupNameException"},
        {"shape":"DeploymentGroupDoesNotExistException"},
        {"shape":"RevisionRequiredException"},
        {"shape":"RevisionDoesNotExistException"},
        {"shape":"InvalidRevisionException"},
        {"shape":"InvalidDeploymentConfigNameException"},
        {"shape":"DeploymentConfigDoesNotExistException"},
        {"shape":"DescriptionTooLongException"},
        {"shape":"DeploymentLimitExceededException"},
        {"shape":"InvalidTargetInstancesException"},
        {"shape":"InvalidAutoRollbackConfigException"},
        {"shape":"InvalidLoadBalancerInfoException"},
        {"shape":"InvalidFileExistsBehaviorException"},
        {"shape":"InvalidRoleException"},
        {"shape":"InvalidAutoScalingGroupException"},
        {"shape":"ThrottlingException"},
        {"shape":"InvalidUpdateOutdatedInstancesOnlyValueException"},
        {"shape":"InvalidIgnoreApplicationStopFailuresValueException"},
        {"shape":"InvalidGitHubAccountTokenException"}
      ],
      "documentation":"<p>Deploys an application revision through the specified deployment group.</p>"
    },
    "CreateDeploymentConfig":{
      "name":"CreateDeploymentConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDeploymentConfigInput"},
      "output":{"shape":"CreateDeploymentConfigOutput"},
      "errors":[
        {"shape":"InvalidDeploymentConfigNameException"},
        {"shape":"DeploymentConfigNameRequiredException"},
        {"shape":"DeploymentConfigAlreadyExistsException"},
        {"shape":"InvalidMinimumHealthyHostValueException"},
        {"shape":"DeploymentConfigLimitExceededException"},
        {"shape":"InvalidComputePlatformException"},
        {"shape":"InvalidTrafficRoutingConfigurationException"}
      ],
      "documentation":"<p>Creates a deployment configuration.</p>"
    },
    "CreateDeploymentGroup":{
      "name":"CreateDeploymentGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDeploymentGroupInput"},
      "output":{"shape":"CreateDeploymentGroupOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"DeploymentGroupNameRequiredException"},
        {"shape":"InvalidDeploymentGroupNameException"},
        {"shape":"DeploymentGroupAlreadyExistsException"},
        {"shape":"InvalidEC2TagException"},
        {"shape":"InvalidTagException"},
        {"shape":"InvalidAutoScalingGroupException"},
        {"shape":"InvalidDeploymentConfigNameException"},
        {"shape":"DeploymentConfigDoesNotExistException"},
        {"shape":"RoleRequiredException"},
        {"shape":"InvalidRoleException"},
        {"shape":"DeploymentGroupLimitExceededException"},
        {"shape":"LifecycleHookLimitExceededException"},
        {"shape":"InvalidTriggerConfigException"},
        {"shape":"TriggerTargetsLimitExceededException"},
        {"shape":"InvalidAlarmConfigException"},
        {"shape":"AlarmsLimitExceededException"},
        {"shape":"InvalidAutoRollbackConfigException"},
        {"shape":"InvalidLoadBalancerInfoException"},
        {"shape":"InvalidDeploymentStyleException"},
        {"shape":"InvalidBlueGreenDeploymentConfigurationException"},
        {"shape":"InvalidEC2TagCombinationException"},
        {"shape":"InvalidOnPremisesTagCombinationException"},
        {"shape":"TagSetListLimitExceededException"},
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Creates a deployment group to which application revisions will be deployed.</p>"
    },
    "DeleteApplication":{
      "name":"DeleteApplication",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteApplicationInput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"}
      ],
      "documentation":"<p>Deletes an application.</p>"
    },
    "DeleteDeploymentConfig":{
      "name":"DeleteDeploymentConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDeploymentConfigInput"},
      "errors":[
        {"shape":"InvalidDeploymentConfigNameException"},
        {"shape":"DeploymentConfigNameRequiredException"},
        {"shape":"DeploymentConfigInUseException"},
        {"shape":"InvalidOperationException"}
      ],
      "documentation":"<p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>"
    },
    "DeleteDeploymentGroup":{
      "name":"DeleteDeploymentGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDeploymentGroupInput"},
      "output":{"shape":"DeleteDeploymentGroupOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"DeploymentGroupNameRequiredException"},
        {"shape":"InvalidDeploymentGroupNameException"},
        {"shape":"InvalidRoleException"}
      ],
      "documentation":"<p>Deletes a deployment group.</p>"
    },
    "DeleteGitHubAccountToken":{
      "name":"DeleteGitHubAccountToken",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteGitHubAccountTokenInput"},
      "output":{"shape":"DeleteGitHubAccountTokenOutput"},
      "errors":[
        {"shape":"GitHubAccountTokenNameRequiredException"},
        {"shape":"GitHubAccountTokenDoesNotExistException"},
        {"shape":"InvalidGitHubAccountTokenNameException"},
        {"shape":"ResourceValidationException"},
        {"shape":"OperationNotSupportedException"}
      ],
      "documentation":"<p>Deletes a GitHub account connection.</p>"
    },
    "DeregisterOnPremisesInstance":{
      "name":"DeregisterOnPremisesInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeregisterOnPremisesInstanceInput"},
      "errors":[
        {"shape":"InstanceNameRequiredException"},
        {"shape":"InvalidInstanceNameException"}
      ],
      "documentation":"<p>Deregisters an on-premises instance.</p>"
    },
    "GetApplication":{
      "name":"GetApplication",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetApplicationInput"},
      "output":{"shape":"GetApplicationOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"}
      ],
      "documentation":"<p>Gets information about an application.</p>"
    },
    "GetApplicationRevision":{
      "name":"GetApplicationRevision",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetApplicationRevisionInput"},
      "output":{"shape":"GetApplicationRevisionOutput"},
      "errors":[
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"RevisionDoesNotExistException"},
        {"shape":"RevisionRequiredException"},
        {"shape":"InvalidRevisionException"}
      ],
      "documentation":"<p>Gets information about an application revision.</p>"
    },
    "GetDeployment":{
      "name":"GetDeployment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDeploymentInput"},
      "output":{"shape":"GetDeploymentOutput"},
      "errors":[
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"InvalidDeploymentIdException"},
        {"shape":"DeploymentDoesNotExistException"}
      ],
      "documentation":"<p>Gets information about a deployment.</p>"
    },
    "GetDeploymentConfig":{
      "name":"GetDeploymentConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDeploymentConfigInput"},
      "output":{"shape":"GetDeploymentConfigOutput"},
      "errors":[
        {"shape":"InvalidDeploymentConfigNameException"},
        {"shape":"DeploymentConfigNameRequiredException"},
        {"shape":"DeploymentConfigDoesNotExistException"}
      ],
      "documentation":"<p>Gets information about a deployment configuration.</p>"
    },
    "GetDeploymentGroup":{
      "name":"GetDeploymentGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDeploymentGroupInput"},
      "output":{"shape":"GetDeploymentGroupOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"DeploymentGroupNameRequiredException"},
        {"shape":"InvalidDeploymentGroupNameException"},
        {"shape":"DeploymentGroupDoesNotExistException"}
      ],
      "documentation":"<p>Gets information about a deployment group.</p>"
    },
    "GetDeploymentInstance":{
      "name":"GetDeploymentInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDeploymentInstanceInput"},
      "output":{"shape":"GetDeploymentInstanceOutput"},
      "errors":[
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"DeploymentDoesNotExistException"},
        {"shape":"InstanceIdRequiredException"},
        {"shape":"InvalidDeploymentIdException"},
        {"shape":"InstanceDoesNotExistException"},
        {"shape":"InvalidInstanceNameException"}
      ],
      "documentation":"<p>Gets information about an instance as part of a deployment.</p>"
    },
    "GetOnPremisesInstance":{
      "name":"GetOnPremisesInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetOnPremisesInstanceInput"},
      "output":{"shape":"GetOnPremisesInstanceOutput"},
      "errors":[
        {"shape":"InstanceNameRequiredException"},
        {"shape":"InstanceNotRegisteredException"},
        {"shape":"InvalidInstanceNameException"}
      ],
      "documentation":"<p>Gets information about an on-premises instance.</p>"
    },
    "ListApplicationRevisions":{
      "name":"ListApplicationRevisions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListApplicationRevisionsInput"},
      "output":{"shape":"ListApplicationRevisionsOutput"},
      "errors":[
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"InvalidSortByException"},
        {"shape":"InvalidSortOrderException"},
        {"shape":"InvalidBucketNameFilterException"},
        {"shape":"InvalidKeyPrefixFilterException"},
        {"shape":"BucketNameFilterRequiredException"},
        {"shape":"InvalidDeployedStateFilterException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Lists information about revisions for an application.</p>"
    },
    "ListApplications":{
      "name":"ListApplications",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListApplicationsInput"},
      "output":{"shape":"ListApplicationsOutput"},
      "errors":[
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Lists the applications registered with the applicable IAM user or AWS account.</p>"
    },
    "ListDeploymentConfigs":{
      "name":"ListDeploymentConfigs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDeploymentConfigsInput"},
      "output":{"shape":"ListDeploymentConfigsOutput"},
      "errors":[
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Lists the deployment configurations with the applicable IAM user or AWS account.</p>"
    },
    "ListDeploymentGroups":{
      "name":"ListDeploymentGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDeploymentGroupsInput"},
      "output":{"shape":"ListDeploymentGroupsOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Lists the deployment groups for an application registered with the applicable IAM user or AWS account.</p>"
    },
    "ListDeploymentInstances":{
      "name":"ListDeploymentInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDeploymentInstancesInput"},
      "output":{"shape":"ListDeploymentInstancesOutput"},
      "errors":[
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"DeploymentDoesNotExistException"},
        {"shape":"DeploymentNotStartedException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"InvalidDeploymentIdException"},
        {"shape":"InvalidInstanceStatusException"},
        {"shape":"InvalidInstanceTypeException"},
        {"shape":"InvalidDeploymentInstanceTypeException"}
      ],
      "documentation":"<p>Lists the instance for a deployment associated with the applicable IAM user or AWS account.</p>"
    },
    "ListDeployments":{
      "name":"ListDeployments",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDeploymentsInput"},
      "output":{"shape":"ListDeploymentsOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"InvalidDeploymentGroupNameException"},
        {"shape":"DeploymentGroupDoesNotExistException"},
        {"shape":"DeploymentGroupNameRequiredException"},
        {"shape":"InvalidTimeRangeException"},
        {"shape":"InvalidDeploymentStatusException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Lists the deployments in a deployment group for an application registered with the applicable IAM user or AWS account.</p>"
    },
    "ListGitHubAccountTokenNames":{
      "name":"ListGitHubAccountTokenNames",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListGitHubAccountTokenNamesInput"},
      "output":{"shape":"ListGitHubAccountTokenNamesOutput"},
      "errors":[
        {"shape":"InvalidNextTokenException"},
        {"shape":"ResourceValidationException"},
        {"shape":"OperationNotSupportedException"}
      ],
      "documentation":"<p>Lists the names of stored connections to GitHub accounts.</p>"
    },
    "ListOnPremisesInstances":{
      "name":"ListOnPremisesInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListOnPremisesInstancesInput"},
      "output":{"shape":"ListOnPremisesInstancesOutput"},
      "errors":[
        {"shape":"InvalidRegistrationStatusException"},
        {"shape":"InvalidTagFilterException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names will be listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>"
    },
    "PutLifecycleEventHookExecutionStatus":{
      "name":"PutLifecycleEventHookExecutionStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutLifecycleEventHookExecutionStatusInput"},
      "output":{"shape":"PutLifecycleEventHookExecutionStatusOutput"},
      "errors":[
        {"shape":"InvalidLifecycleEventHookExecutionStatusException"},
        {"shape":"InvalidLifecycleEventHookExecutionIdException"},
        {"shape":"LifecycleEventAlreadyCompletedException"},
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"DeploymentDoesNotExistException"},
        {"shape":"InvalidDeploymentIdException"},
        {"shape":"UnsupportedActionForDeploymentTypeException"}
      ],
      "documentation":"<p>Sets the result of a Lambda validation function. The function validates one or both lifecycle events (<code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>) and returns <code>Succeeded</code> or <code>Failed</code>.</p>"
    },
    "RegisterApplicationRevision":{
      "name":"RegisterApplicationRevision",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RegisterApplicationRevisionInput"},
      "errors":[
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"DescriptionTooLongException"},
        {"shape":"RevisionRequiredException"},
        {"shape":"InvalidRevisionException"}
      ],
      "documentation":"<p>Registers with AWS CodeDeploy a revision for the specified application.</p>"
    },
    "RegisterOnPremisesInstance":{
      "name":"RegisterOnPremisesInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RegisterOnPremisesInstanceInput"},
      "errors":[
        {"shape":"InstanceNameAlreadyRegisteredException"},
        {"shape":"IamArnRequiredException"},
        {"shape":"IamSessionArnAlreadyRegisteredException"},
        {"shape":"IamUserArnAlreadyRegisteredException"},
        {"shape":"InstanceNameRequiredException"},
        {"shape":"IamUserArnRequiredException"},
        {"shape":"InvalidInstanceNameException"},
        {"shape":"InvalidIamSessionArnException"},
        {"shape":"InvalidIamUserArnException"},
        {"shape":"MultipleIamArnsProvidedException"}
      ],
      "documentation":"<p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>"
    },
    "RemoveTagsFromOnPremisesInstances":{
      "name":"RemoveTagsFromOnPremisesInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveTagsFromOnPremisesInstancesInput"},
      "errors":[
        {"shape":"InstanceNameRequiredException"},
        {"shape":"InvalidInstanceNameException"},
        {"shape":"TagRequiredException"},
        {"shape":"InvalidTagException"},
        {"shape":"TagLimitExceededException"},
        {"shape":"InstanceLimitExceededException"},
        {"shape":"InstanceNotRegisteredException"}
      ],
      "documentation":"<p>Removes one or more tags from one or more on-premises instances.</p>"
    },
    "SkipWaitTimeForInstanceTermination":{
      "name":"SkipWaitTimeForInstanceTermination",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SkipWaitTimeForInstanceTerminationInput"},
      "errors":[
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"DeploymentDoesNotExistException"},
        {"shape":"DeploymentAlreadyCompletedException"},
        {"shape":"InvalidDeploymentIdException"},
        {"shape":"DeploymentNotStartedException"},
        {"shape":"UnsupportedActionForDeploymentTypeException"}
      ],
      "documentation":"<p>In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is completed.</p>"
    },
    "StopDeployment":{
      "name":"StopDeployment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopDeploymentInput"},
      "output":{"shape":"StopDeploymentOutput"},
      "errors":[
        {"shape":"DeploymentIdRequiredException"},
        {"shape":"DeploymentDoesNotExistException"},
        {"shape":"DeploymentAlreadyCompletedException"},
        {"shape":"InvalidDeploymentIdException"}
      ],
      "documentation":"<p>Attempts to stop an ongoing deployment.</p>"
    },
    "UpdateApplication":{
      "name":"UpdateApplication",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateApplicationInput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationAlreadyExistsException"},
        {"shape":"ApplicationDoesNotExistException"}
      ],
      "documentation":"<p>Changes the name of an application.</p>"
    },
    "UpdateDeploymentGroup":{
      "name":"UpdateDeploymentGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDeploymentGroupInput"},
      "output":{"shape":"UpdateDeploymentGroupOutput"},
      "errors":[
        {"shape":"ApplicationNameRequiredException"},
        {"shape":"InvalidApplicationNameException"},
        {"shape":"ApplicationDoesNotExistException"},
        {"shape":"InvalidDeploymentGroupNameException"},
        {"shape":"DeploymentGroupAlreadyExistsException"},
        {"shape":"DeploymentGroupNameRequiredException"},
        {"shape":"DeploymentGroupDoesNotExistException"},
        {"shape":"InvalidEC2TagException"},
        {"shape":"InvalidTagException"},
        {"shape":"InvalidAutoScalingGroupException"},
        {"shape":"InvalidDeploymentConfigNameException"},
        {"shape":"DeploymentConfigDoesNotExistException"},
        {"shape":"InvalidRoleException"},
        {"shape":"LifecycleHookLimitExceededException"},
        {"shape":"InvalidTriggerConfigException"},
        {"shape":"TriggerTargetsLimitExceededException"},
        {"shape":"InvalidAlarmConfigException"},
        {"shape":"AlarmsLimitExceededException"},
        {"shape":"InvalidAutoRollbackConfigException"},
        {"shape":"InvalidLoadBalancerInfoException"},
        {"shape":"InvalidDeploymentStyleException"},
        {"shape":"InvalidBlueGreenDeploymentConfigurationException"},
        {"shape":"InvalidEC2TagCombinationException"},
        {"shape":"InvalidOnPremisesTagCombinationException"},
        {"shape":"TagSetListLimitExceededException"},
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Changes information about a deployment group.</p>"
    }
  },
  "shapes":{
    "AddTagsToOnPremisesInstancesInput":{
      "type":"structure",
      "required":[
        "tags",
        "instanceNames"
      ],
      "members":{
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The tag key-value pairs to add to the on-premises instances.</p> <p>Keys and values are both required. Keys cannot be null or empty strings. Value-only tags are not allowed.</p>"
        },
        "instanceNames":{
          "shape":"InstanceNameList",
          "documentation":"<p>The names of the on-premises instances to which to add tags.</p>"
        }
      },
      "documentation":"<p>Represents the input of, and adds tags to, an on-premises instance operation.</p>"
    },
    "AdditionalDeploymentStatusInfo":{
      "type":"string",
      "deprecated":true
    },
    "Alarm":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"AlarmName",
          "documentation":"<p>The name of the alarm. Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.</p>"
        }
      },
      "documentation":"<p>Information about an alarm.</p>"
    },
    "AlarmConfiguration":{
      "type":"structure",
      "members":{
        "enabled":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the alarm configuration is enabled.</p>"
        },
        "ignorePollAlarmFailure":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.</p> <ul> <li> <p>true: The deployment will proceed even if alarm status information can't be retrieved from Amazon CloudWatch.</p> </li> <li> <p>false: The deployment will stop if alarm status information can't be retrieved from Amazon CloudWatch.</p> </li> </ul>"
        },
        "alarms":{
          "shape":"AlarmList",
          "documentation":"<p>A list of alarms configured for the deployment group. A maximum of 10 alarms can be added to a deployment group.</p>"
        }
      },
      "documentation":"<p>Information about alarms associated with the deployment group.</p>"
    },
    "AlarmList":{
      "type":"list",
      "member":{"shape":"Alarm"}
    },
    "AlarmName":{"type":"string"},
    "AlarmsLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The maximum number of alarms for a deployment group (10) was exceeded.</p>",
      "exception":true
    },
    "ApplicationAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An application with the specified name already exists with the applicable IAM user or AWS account.</p>",
      "exception":true
    },
    "ApplicationDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The application does not exist with the applicable IAM user or AWS account.</p>",
      "exception":true
    },
    "ApplicationId":{"type":"string"},
    "ApplicationInfo":{
      "type":"structure",
      "members":{
        "applicationId":{
          "shape":"ApplicationId",
          "documentation":"<p>The application ID.</p>"
        },
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The application name.</p>"
        },
        "createTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the application was created.</p>"
        },
        "linkedToGitHub":{
          "shape":"Boolean",
          "documentation":"<p>True if the user has authenticated with GitHub for the specified application; otherwise, false.</p>"
        },
        "gitHubAccountName":{
          "shape":"GitHubAccountTokenName",
          "documentation":"<p>The name for a connection to a GitHub account.</p>"
        },
        "computePlatform":{
          "shape":"ComputePlatform",
          "documentation":"<p>The destination platform type for deployment of the application (<code>Lambda</code> or <code>Server</code>).</p>"
        }
      },
      "documentation":"<p>Information about an application.</p>"
    },
    "ApplicationLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>More applications were attempted to be created than are allowed.</p>",
      "exception":true
    },
    "ApplicationName":{
      "type":"string",
      "max":100,
      "min":1
    },
    "ApplicationNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The minimum number of required application names was not specified.</p>",
      "exception":true
    },
    "ApplicationRevisionSortBy":{
      "type":"string",
      "enum":[
        "registerTime",
        "firstUsedTime",
        "lastUsedTime"
      ]
    },
    "ApplicationsInfoList":{
      "type":"list",
      "member":{"shape":"ApplicationInfo"}
    },
    "ApplicationsList":{
      "type":"list",
      "member":{"shape":"ApplicationName"}
    },
    "AutoRollbackConfiguration":{
      "type":"structure",
      "members":{
        "enabled":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a defined automatic rollback configuration is currently enabled.</p>"
        },
        "events":{
          "shape":"AutoRollbackEventsList",
          "documentation":"<p>The event type or types that trigger a rollback.</p>"
        }
      },
      "documentation":"<p>Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment doesn't complete successfully.</p>"
    },
    "AutoRollbackEvent":{
      "type":"string",
      "enum":[
        "DEPLOYMENT_FAILURE",
        "DEPLOYMENT_STOP_ON_ALARM",
        "DEPLOYMENT_STOP_ON_REQUEST"
      ]
    },
    "AutoRollbackEventsList":{
      "type":"list",
      "member":{"shape":"AutoRollbackEvent"}
    },
    "AutoScalingGroup":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"AutoScalingGroupName",
          "documentation":"<p>The Auto Scaling group name.</p>"
        },
        "hook":{
          "shape":"AutoScalingGroupHook",
          "documentation":"<p>An Auto Scaling lifecycle event hook name.</p>"
        }
      },
      "documentation":"<p>Information about an Auto Scaling group.</p>"
    },
    "AutoScalingGroupHook":{"type":"string"},
    "AutoScalingGroupList":{
      "type":"list",
      "member":{"shape":"AutoScalingGroup"}
    },
    "AutoScalingGroupName":{"type":"string"},
    "AutoScalingGroupNameList":{
      "type":"list",
      "member":{"shape":"AutoScalingGroupName"}
    },
    "BatchGetApplicationRevisionsInput":{
      "type":"structure",
      "required":[
        "applicationName",
        "revisions"
      ],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application about which to get revision information.</p>"
        },
        "revisions":{
          "shape":"RevisionLocationList",
          "documentation":"<p>Information to get about the application revisions, including type and location.</p>"
        }
      },
      "documentation":"<p>Represents the input of a BatchGetApplicationRevisions operation.</p>"
    },
    "BatchGetApplicationRevisionsOutput":{
      "type":"structure",
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of the application that corresponds to the revisions.</p>"
        },
        "errorMessage":{
          "shape":"ErrorMessage",
          "documentation":"<p>Information about errors that may have occurred during the API call.</p>"
        },
        "revisions":{
          "shape":"RevisionInfoList",
          "documentation":"<p>Additional information about the revisions, including the type and location.</p>"
        }
      },
      "documentation":"<p>Represents the output of a BatchGetApplicationRevisions operation.</p>"
    },
    "BatchGetApplicationsInput":{
      "type":"structure",
      "required":["applicationNames"],
      "members":{
        "applicationNames":{
          "shape":"ApplicationsList",
          "documentation":"<p>A list of application names separated by spaces.</p>"
        }
      },
      "documentation":"<p>Represents the input of a BatchGetApplications operation.</p>"
    },
    "BatchGetApplicationsOutput":{
      "type":"structure",
      "members":{
        "applicationsInfo":{
          "shape":"ApplicationsInfoList",
          "documentation":"<p>Information about the applications.</p>"
        }
      },
      "documentation":"<p>Represents the output of a BatchGetApplications operation.</p>"
    },
    "BatchGetDeploymentGroupsInput":{
      "type":"structure",
      "required":[
        "applicationName",
        "deploymentGroupNames"
      ],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "deploymentGroupNames":{
          "shape":"DeploymentGroupsList",
          "documentation":"<p>The deployment groups' names.</p>"
        }
      },
      "documentation":"<p>Represents the input of a BatchGetDeploymentGroups operation.</p>"
    },
    "BatchGetDeploymentGroupsOutput":{
      "type":"structure",
      "members":{
        "deploymentGroupsInfo":{
          "shape":"DeploymentGroupInfoList",
          "documentation":"<p>Information about the deployment groups.</p>"
        },
        "errorMessage":{
          "shape":"ErrorMessage",
          "documentation":"<p>Information about errors that may have occurred during the API call.</p>"
        }
      },
      "documentation":"<p>Represents the output of a BatchGetDeploymentGroups operation.</p>"
    },
    "BatchGetDeploymentInstancesInput":{
      "type":"structure",
      "required":[
        "deploymentId",
        "instanceIds"
      ],
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The unique ID of a deployment.</p>"
        },
        "instanceIds":{
          "shape":"InstancesList",
          "documentation":"<p>The unique IDs of instances in the deployment group.</p>"
        }
      },
      "documentation":"<p>Represents the input of a BatchGetDeploymentInstances operation.</p>"
    },
    "BatchGetDeploymentInstancesOutput":{
      "type":"structure",
      "members":{
        "instancesSummary":{
          "shape":"InstanceSummaryList",
          "documentation":"<p>Information about the instance.</p>"
        },
        "errorMessage":{
          "shape":"ErrorMessage",
          "documentation":"<p>Information about errors that may have occurred during the API call.</p>"
        }
      },
      "documentation":"<p>Represents the output of a BatchGetDeploymentInstances operation.</p>"
    },
    "BatchGetDeploymentsInput":{
      "type":"structure",
      "required":["deploymentIds"],
      "members":{
        "deploymentIds":{
          "shape":"DeploymentsList",
          "documentation":"<p>A list of deployment IDs, separated by spaces.</p>"
        }
      },
      "documentation":"<p>Represents the input of a BatchGetDeployments operation.</p>"
    },
    "BatchGetDeploymentsOutput":{
      "type":"structure",
      "members":{
        "deploymentsInfo":{
          "shape":"DeploymentsInfoList",
          "documentation":"<p>Information about the deployments.</p>"
        }
      },
      "documentation":"<p>Represents the output of a BatchGetDeployments operation.</p>"
    },
    "BatchGetOnPremisesInstancesInput":{
      "type":"structure",
      "required":["instanceNames"],
      "members":{
        "instanceNames":{
          "shape":"InstanceNameList",
          "documentation":"<p>The names of the on-premises instances about which to get information.</p>"
        }
      },
      "documentation":"<p>Represents the input of a BatchGetOnPremisesInstances operation.</p>"
    },
    "BatchGetOnPremisesInstancesOutput":{
      "type":"structure",
      "members":{
        "instanceInfos":{
          "shape":"InstanceInfoList",
          "documentation":"<p>Information about the on-premises instances.</p>"
        }
      },
      "documentation":"<p>Represents the output of a BatchGetOnPremisesInstances operation.</p>"
    },
    "BatchLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>",
      "exception":true
    },
    "BlueGreenDeploymentConfiguration":{
      "type":"structure",
      "members":{
        "terminateBlueInstancesOnDeploymentSuccess":{
          "shape":"BlueInstanceTerminationOption",
          "documentation":"<p>Information about whether to terminate instances in the original fleet during a blue/green deployment.</p>"
        },
        "deploymentReadyOption":{
          "shape":"DeploymentReadyOption",
          "documentation":"<p>Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.</p>"
        },
        "greenFleetProvisioningOption":{
          "shape":"GreenFleetProvisioningOption",
          "documentation":"<p>Information about how instances are provisioned for a replacement environment in a blue/green deployment.</p>"
        }
      },
      "documentation":"<p>Information about blue/green deployment options for a deployment group.</p>"
    },
    "BlueInstanceTerminationOption":{
      "type":"structure",
      "members":{
        "action":{
          "shape":"InstanceAction",
          "documentation":"<p>The action to take on instances in the original environment after a successful blue/green deployment.</p> <ul> <li> <p>TERMINATE: Instances are terminated after a specified wait time.</p> </li> <li> <p>KEEP_ALIVE: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.</p> </li> </ul>"
        },
        "terminationWaitTimeInMinutes":{
          "shape":"Duration",
          "documentation":"<p>The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. The maximum setting is 2880 minutes (2 days).</p>"
        }
      },
      "documentation":"<p>Information about whether instances in the original environment are terminated when a blue/green deployment is successful.</p>"
    },
    "Boolean":{"type":"boolean"},
    "BucketNameFilterRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A bucket name is required, but was not provided.</p>",
      "exception":true
    },
    "BundleType":{
      "type":"string",
      "enum":[
        "tar",
        "tgz",
        "zip",
        "YAML",
        "JSON"
      ]
    },
    "CommitId":{"type":"string"},
    "ComputePlatform":{
      "type":"string",
      "enum":[
        "Server",
        "Lambda"
      ]
    },
    "ContinueDeploymentInput":{
      "type":"structure",
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The deployment ID of the blue/green deployment for which you want to start rerouting traffic to the replacement environment.</p>"
        }
      }
    },
    "CreateApplicationInput":{
      "type":"structure",
      "required":["applicationName"],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of the application. This name must be unique with the applicable IAM user or AWS account.</p>"
        },
        "computePlatform":{
          "shape":"ComputePlatform",
          "documentation":"<p> The destination platform type for the deployment (<code>Lambda</code> or <code>Server</code>).</p>"
        }
      },
      "documentation":"<p>Represents the input of a CreateApplication operation.</p>"
    },
    "CreateApplicationOutput":{
      "type":"structure",
      "members":{
        "applicationId":{
          "shape":"ApplicationId",
          "documentation":"<p>A unique application ID.</p>"
        }
      },
      "documentation":"<p>Represents the output of a CreateApplication operation.</p>"
    },
    "CreateDeploymentConfigInput":{
      "type":"structure",
      "required":["deploymentConfigName"],
      "members":{
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>The name of the deployment configuration to create.</p>"
        },
        "minimumHealthyHosts":{
          "shape":"MinimumHealthyHosts",
          "documentation":"<p>The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.</p> <p>The type parameter takes either of the following values:</p> <ul> <li> <p>HOST_COUNT: The value parameter represents the minimum number of healthy instances as an absolute value.</p> </li> <li> <p>FLEET_PERCENT: The value parameter represents the minimum number of healthy instances as a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the deployment, AWS CodeDeploy converts the percentage to the equivalent number of instance and rounds up fractional instances.</p> </li> </ul> <p>The value parameter takes an integer.</p> <p>For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT and a value of 95.</p>"
        },
        "trafficRoutingConfig":{
          "shape":"TrafficRoutingConfig",
          "documentation":"<p>The configuration that specifies how the deployment traffic will be routed.</p>"
        },
        "computePlatform":{
          "shape":"ComputePlatform",
          "documentation":"<p>The destination platform type for the deployment (<code>Lambda</code> or <code>Server</code>&gt;).</p>"
        }
      },
      "documentation":"<p>Represents the input of a CreateDeploymentConfig operation.</p>"
    },
    "CreateDeploymentConfigOutput":{
      "type":"structure",
      "members":{
        "deploymentConfigId":{
          "shape":"DeploymentConfigId",
          "documentation":"<p>A unique deployment configuration ID.</p>"
        }
      },
      "documentation":"<p>Represents the output of a CreateDeploymentConfig operation.</p>"
    },
    "CreateDeploymentGroupInput":{
      "type":"structure",
      "required":[
        "applicationName",
        "deploymentGroupName",
        "serviceRoleArn"
      ],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "deploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The name of a new deployment group for the specified application.</p>"
        },
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>If specified, the deployment configuration name can be either one of the predefined configurations provided with AWS CodeDeploy or a custom deployment configuration that you create by calling the create deployment configuration operation.</p> <p>CodeDeployDefault.OneAtATime is the default deployment configuration. It is used if a configuration isn't specified for the deployment or the deployment group.</p> <p>For more information about the predefined deployment configurations in AWS CodeDeploy, see <a href=\"http://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html\">Working with Deployment Groups in AWS CodeDeploy</a> in the AWS CodeDeploy User Guide.</p>"
        },
        "ec2TagFilters":{
          "shape":"EC2TagFilterList",
          "documentation":"<p>The Amazon EC2 tags on which to filter. The deployment group will include EC2 instances with any of the specified tags. Cannot be used in the same call as ec2TagSet.</p>"
        },
        "onPremisesInstanceTagFilters":{
          "shape":"TagFilterList",
          "documentation":"<p>The on-premises instance tags on which to filter. The deployment group will include on-premises instances with any of the specified tags. Cannot be used in the same call as OnPremisesTagSet.</p>"
        },
        "autoScalingGroups":{
          "shape":"AutoScalingGroupNameList",
          "documentation":"<p>A list of associated Auto Scaling groups.</p>"
        },
        "serviceRoleArn":{
          "shape":"Role",
          "documentation":"<p>A service role ARN that allows AWS CodeDeploy to act on the user's behalf when interacting with AWS services.</p>"
        },
        "triggerConfigurations":{
          "shape":"TriggerConfigList",
          "documentation":"<p>Information about triggers to create when the deployment group is created. For examples, see <a href=\"http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-sns.html\">Create a Trigger for an AWS CodeDeploy Event</a> in the AWS CodeDeploy User Guide.</p>"
        },
        "alarmConfiguration":{
          "shape":"AlarmConfiguration",
          "documentation":"<p>Information to add about Amazon CloudWatch alarms when the deployment group is created.</p>"
        },
        "autoRollbackConfiguration":{
          "shape":"AutoRollbackConfiguration",
          "documentation":"<p>Configuration information for an automatic rollback that is added when a deployment group is created.</p>"
        },
        "deploymentStyle":{
          "shape":"DeploymentStyle",
          "documentation":"<p>Information about the type of deployment, in-place or blue/green, that you want to run and whether to route deployment traffic behind a load balancer.</p>"
        },
        "blueGreenDeploymentConfiguration":{
          "shape":"BlueGreenDeploymentConfiguration",
          "documentation":"<p>Information about blue/green deployment options for a deployment group.</p>"
        },
        "loadBalancerInfo":{
          "shape":"LoadBalancerInfo",
          "documentation":"<p>Information about the load balancer used in a deployment.</p>"
        },
        "ec2TagSet":{
          "shape":"EC2TagSet",
          "documentation":"<p>Information about groups of tags applied to EC2 instances. The deployment group will include only EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilters.</p>"
        },
        "onPremisesTagSet":{
          "shape":"OnPremisesTagSet",
          "documentation":"<p>Information about groups of tags applied to on-premises instances. The deployment group will include only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.</p>"
        }
      },
      "documentation":"<p>Represents the input of a CreateDeploymentGroup operation.</p>"
    },
    "CreateDeploymentGroupOutput":{
      "type":"structure",
      "members":{
        "deploymentGroupId":{
          "shape":"DeploymentGroupId",
          "documentation":"<p>A unique deployment group ID.</p>"
        }
      },
      "documentation":"<p>Represents the output of a CreateDeploymentGroup operation.</p>"
    },
    "CreateDeploymentInput":{
      "type":"structure",
      "required":["applicationName"],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "deploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The name of the deployment group.</p>"
        },
        "revision":{
          "shape":"RevisionLocation",
          "documentation":"<p>The type and location of the revision to deploy.</p>"
        },
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>The name of a deployment configuration associated with the applicable IAM user or AWS account.</p> <p>If not specified, the value configured in the deployment group will be used as the default. If the deployment group does not have a deployment configuration associated with it, then CodeDeployDefault.OneAtATime will be used by default.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>A comment about the deployment.</p>"
        },
        "ignoreApplicationStopFailures":{
          "shape":"Boolean",
          "documentation":"<p>If set to true, then if the deployment causes the ApplicationStop deployment lifecycle event to an instance to fail, the deployment to that instance will not be considered to have failed at that point and will continue on to the BeforeInstall deployment lifecycle event.</p> <p>If set to false or not specified, then if the deployment causes the ApplicationStop deployment lifecycle event to fail to an instance, the deployment to that instance will stop, and the deployment to that instance will be considered to have failed.</p>"
        },
        "targetInstances":{
          "shape":"TargetInstances",
          "documentation":"<p>Information about the instances that will belong to the replacement environment in a blue/green deployment.</p>"
        },
        "autoRollbackConfiguration":{
          "shape":"AutoRollbackConfiguration",
          "documentation":"<p>Configuration information for an automatic rollback that is added when a deployment is created.</p>"
        },
        "updateOutdatedInstancesOnly":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether to deploy to all instances or only to instances that are not running the latest application revision.</p>"
        },
        "fileExistsBehavior":{
          "shape":"FileExistsBehavior",
          "documentation":"<p>Information about how AWS CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.</p> <p>The fileExistsBehavior parameter takes any of the following values:</p> <ul> <li> <p>DISALLOW: The deployment fails. This is also the default behavior if no option is specified.</p> </li> <li> <p>OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.</p> </li> <li> <p>RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Represents the input of a CreateDeployment operation.</p>"
    },
    "CreateDeploymentOutput":{
      "type":"structure",
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>A unique deployment ID.</p>"
        }
      },
      "documentation":"<p>Represents the output of a CreateDeployment operation.</p>"
    },
    "DeleteApplicationInput":{
      "type":"structure",
      "required":["applicationName"],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        }
      },
      "documentation":"<p>Represents the input of a DeleteApplication operation.</p>"
    },
    "DeleteDeploymentConfigInput":{
      "type":"structure",
      "required":["deploymentConfigName"],
      "members":{
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>The name of a deployment configuration associated with the applicable IAM user or AWS account.</p>"
        }
      },
      "documentation":"<p>Represents the input of a DeleteDeploymentConfig operation.</p>"
    },
    "DeleteDeploymentGroupInput":{
      "type":"structure",
      "required":[
        "applicationName",
        "deploymentGroupName"
      ],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "deploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The name of an existing deployment group for the specified application.</p>"
        }
      },
      "documentation":"<p>Represents the input of a DeleteDeploymentGroup operation.</p>"
    },
    "DeleteDeploymentGroupOutput":{
      "type":"structure",
      "members":{
        "hooksNotCleanedUp":{
          "shape":"AutoScalingGroupList",
          "documentation":"<p>If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, AWS CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group. If the output contains data, AWS CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group.</p>"
        }
      },
      "documentation":"<p>Represents the output of a DeleteDeploymentGroup operation.</p>"
    },
    "DeleteGitHubAccountTokenInput":{
      "type":"structure",
      "members":{
        "tokenName":{
          "shape":"GitHubAccountTokenName",
          "documentation":"<p>The name of the GitHub account connection to delete.</p>"
        }
      },
      "documentation":"<p>Represents the input of a DeleteGitHubAccount operation.</p>"
    },
    "DeleteGitHubAccountTokenOutput":{
      "type":"structure",
      "members":{
        "tokenName":{
          "shape":"GitHubAccountTokenName",
          "documentation":"<p>The name of the GitHub account connection that was deleted.</p>"
        }
      },
      "documentation":"<p>Represents the output of a DeleteGitHubAccountToken operation.</p>"
    },
    "DeploymentAlreadyCompletedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment is already complete.</p>",
      "exception":true
    },
    "DeploymentConfigAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A deployment configuration with the specified name already exists with the applicable IAM user or AWS account.</p>",
      "exception":true
    },
    "DeploymentConfigDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment configuration does not exist with the applicable IAM user or AWS account.</p>",
      "exception":true
    },
    "DeploymentConfigId":{"type":"string"},
    "DeploymentConfigInUseException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment configuration is still in use.</p>",
      "exception":true
    },
    "DeploymentConfigInfo":{
      "type":"structure",
      "members":{
        "deploymentConfigId":{
          "shape":"DeploymentConfigId",
          "documentation":"<p>The deployment configuration ID.</p>"
        },
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>The deployment configuration name.</p>"
        },
        "minimumHealthyHosts":{
          "shape":"MinimumHealthyHosts",
          "documentation":"<p>Information about the number or percentage of minimum healthy instance.</p>"
        },
        "createTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the deployment configuration was created.</p>"
        },
        "computePlatform":{
          "shape":"ComputePlatform",
          "documentation":"<p>The destination platform type for the deployment (<code>Lambda</code> or <code>Server</code>).</p>"
        },
        "trafficRoutingConfig":{
          "shape":"TrafficRoutingConfig",
          "documentation":"<p>The configuration specifying how the deployment traffic will be routed. Only deployments with a Lambda compute platform can specify this.</p>"
        }
      },
      "documentation":"<p>Information about a deployment configuration.</p>"
    },
    "DeploymentConfigLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment configurations limit was exceeded.</p>",
      "exception":true
    },
    "DeploymentConfigName":{
      "type":"string",
      "max":100,
      "min":1
    },
    "DeploymentConfigNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment configuration name was not specified.</p>",
      "exception":true
    },
    "DeploymentConfigsList":{
      "type":"list",
      "member":{"shape":"DeploymentConfigName"}
    },
    "DeploymentCreator":{
      "type":"string",
      "enum":[
        "user",
        "autoscaling",
        "codeDeployRollback"
      ]
    },
    "DeploymentDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment does not exist with the applicable IAM user or AWS account.</p>",
      "exception":true
    },
    "DeploymentGroupAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A deployment group with the specified name already exists with the applicable IAM user or AWS account.</p>",
      "exception":true
    },
    "DeploymentGroupDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The named deployment group does not exist with the applicable IAM user or AWS account.</p>",
      "exception":true
    },
    "DeploymentGroupId":{"type":"string"},
    "DeploymentGroupInfo":{
      "type":"structure",
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The application name.</p>"
        },
        "deploymentGroupId":{
          "shape":"DeploymentGroupId",
          "documentation":"<p>The deployment group ID.</p>"
        },
        "deploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The deployment group name.</p>"
        },
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>The deployment configuration name.</p>"
        },
        "ec2TagFilters":{
          "shape":"EC2TagFilterList",
          "documentation":"<p>The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags.</p>"
        },
        "onPremisesInstanceTagFilters":{
          "shape":"TagFilterList",
          "documentation":"<p>The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags.</p>"
        },
        "autoScalingGroups":{
          "shape":"AutoScalingGroupList",
          "documentation":"<p>A list of associated Auto Scaling groups.</p>"
        },
        "serviceRoleArn":{
          "shape":"Role",
          "documentation":"<p>A service role ARN.</p>"
        },
        "targetRevision":{
          "shape":"RevisionLocation",
          "documentation":"<p>Information about the deployment group's target revision, including type and location.</p>"
        },
        "triggerConfigurations":{
          "shape":"TriggerConfigList",
          "documentation":"<p>Information about triggers associated with the deployment group.</p>"
        },
        "alarmConfiguration":{
          "shape":"AlarmConfiguration",
          "documentation":"<p>A list of alarms associated with the deployment group.</p>"
        },
        "autoRollbackConfiguration":{
          "shape":"AutoRollbackConfiguration",
          "documentation":"<p>Information about the automatic rollback configuration associated with the deployment group.</p>"
        },
        "deploymentStyle":{
          "shape":"DeploymentStyle",
          "documentation":"<p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>"
        },
        "blueGreenDeploymentConfiguration":{
          "shape":"BlueGreenDeploymentConfiguration",
          "documentation":"<p>Information about blue/green deployment options for a deployment group.</p>"
        },
        "loadBalancerInfo":{
          "shape":"LoadBalancerInfo",
          "documentation":"<p>Information about the load balancer to use in a deployment.</p>"
        },
        "lastSuccessfulDeployment":{
          "shape":"LastDeploymentInfo",
          "documentation":"<p>Information about the most recent successful deployment to the deployment group.</p>"
        },
        "lastAttemptedDeployment":{
          "shape":"LastDeploymentInfo",
          "documentation":"<p>Information about the most recent attempted deployment to the deployment group.</p>"
        },
        "ec2TagSet":{
          "shape":"EC2TagSet",
          "documentation":"<p>Information about groups of tags applied to an EC2 instance. The deployment group includes only EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilters.</p>"
        },
        "onPremisesTagSet":{
          "shape":"OnPremisesTagSet",
          "documentation":"<p>Information about groups of tags applied to an on-premises instance. The deployment group includes only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.</p>"
        },
        "computePlatform":{
          "shape":"ComputePlatform",
          "documentation":"<p>The destination platform type for the deployment group (<code>Lambda</code> or <code>Server</code>).</p>"
        }
      },
      "documentation":"<p>Information about a deployment group.</p>"
    },
    "DeploymentGroupInfoList":{
      "type":"list",
      "member":{"shape":"DeploymentGroupInfo"}
    },
    "DeploymentGroupLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> The deployment groups limit was exceeded.</p>",
      "exception":true
    },
    "DeploymentGroupName":{
      "type":"string",
      "max":100,
      "min":1
    },
    "DeploymentGroupNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment group name was not specified.</p>",
      "exception":true
    },
    "DeploymentGroupsList":{
      "type":"list",
      "member":{"shape":"DeploymentGroupName"}
    },
    "DeploymentId":{"type":"string"},
    "DeploymentIdRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>At least one deployment ID must be specified.</p>",
      "exception":true
    },
    "DeploymentInfo":{
      "type":"structure",
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The application name.</p>"
        },
        "deploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The deployment group name.</p>"
        },
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>The deployment configuration name.</p>"
        },
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The deployment ID.</p>"
        },
        "previousRevision":{
          "shape":"RevisionLocation",
          "documentation":"<p>Information about the application revision that was deployed to the deployment group before the most recent successful deployment.</p>"
        },
        "revision":{
          "shape":"RevisionLocation",
          "documentation":"<p>Information about the location of stored application artifacts and the service from which to retrieve them.</p>"
        },
        "status":{
          "shape":"DeploymentStatus",
          "documentation":"<p>The current state of the deployment as a whole.</p>"
        },
        "errorInformation":{
          "shape":"ErrorInformation",
          "documentation":"<p>Information about any error associated with this deployment.</p>"
        },
        "createTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp indicating when the deployment was created.</p>"
        },
        "startTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp indicating when the deployment was deployed to the deployment group.</p> <p>In some cases, the reported value of the start time may be later than the complete time. This is due to differences in the clock settings of back-end servers that participate in the deployment process.</p>"
        },
        "completeTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp indicating when the deployment was complete.</p>"
        },
        "deploymentOverview":{
          "shape":"DeploymentOverview",
          "documentation":"<p>A summary of the deployment status of the instances in the deployment.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>A comment about the deployment.</p>"
        },
        "creator":{
          "shape":"DeploymentCreator",
          "documentation":"<p>The means by which the deployment was created:</p> <ul> <li> <p>user: A user created the deployment.</p> </li> <li> <p>autoscaling: Auto Scaling created the deployment.</p> </li> <li> <p>codeDeployRollback: A rollback process created the deployment.</p> </li> </ul>"
        },
        "ignoreApplicationStopFailures":{
          "shape":"Boolean",
          "documentation":"<p>If true, then if the deployment causes the ApplicationStop deployment lifecycle event to an instance to fail, the deployment to that instance will not be considered to have failed at that point and will continue on to the BeforeInstall deployment lifecycle event.</p> <p>If false or not specified, then if the deployment causes the ApplicationStop deployment lifecycle event to an instance to fail, the deployment to that instance will stop, and the deployment to that instance will be considered to have failed.</p>"
        },
        "autoRollbackConfiguration":{
          "shape":"AutoRollbackConfiguration",
          "documentation":"<p>Information about the automatic rollback configuration associated with the deployment.</p>"
        },
        "updateOutdatedInstancesOnly":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether only instances that are not running the latest application revision are to be deployed to.</p>"
        },
        "rollbackInfo":{
          "shape":"RollbackInfo",
          "documentation":"<p>Information about a deployment rollback.</p>"
        },
        "deploymentStyle":{
          "shape":"DeploymentStyle",
          "documentation":"<p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>"
        },
        "targetInstances":{
          "shape":"TargetInstances",
          "documentation":"<p>Information about the instances that belong to the replacement environment in a blue/green deployment.</p>"
        },
        "instanceTerminationWaitTimeStarted":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the wait period set for the termination of instances in the original environment has started. Status is 'false' if the KEEP_ALIVE option is specified; otherwise, 'true' as soon as the termination wait period starts.</p>"
        },
        "blueGreenDeploymentConfiguration":{
          "shape":"BlueGreenDeploymentConfiguration",
          "documentation":"<p>Information about blue/green deployment options for this deployment.</p>"
        },
        "loadBalancerInfo":{
          "shape":"LoadBalancerInfo",
          "documentation":"<p>Information about the load balancer used in the deployment.</p>"
        },
        "additionalDeploymentStatusInfo":{
          "shape":"AdditionalDeploymentStatusInfo",
          "documentation":"<p>Provides information about the results of a deployment, such as whether instances in the original environment in a blue/green deployment were not terminated.</p>"
        },
        "fileExistsBehavior":{
          "shape":"FileExistsBehavior",
          "documentation":"<p>Information about how AWS CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.</p> <ul> <li> <p>DISALLOW: The deployment fails. This is also the default behavior if no option is specified.</p> </li> <li> <p>OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.</p> </li> <li> <p>RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.</p> </li> </ul>"
        },
        "deploymentStatusMessages":{
          "shape":"DeploymentStatusMessageList",
          "documentation":"<p>Messages that contain information about the status of a deployment.</p>"
        },
        "computePlatform":{
          "shape":"ComputePlatform",
          "documentation":"<p>The destination platform type for the deployment (<code>Lambda</code> or <code>Server</code>).</p>"
        }
      },
      "documentation":"<p>Information about a deployment.</p>"
    },
    "DeploymentIsNotInReadyStateException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment does not have a status of Ready and can't continue yet.</p>",
      "exception":true
    },
    "DeploymentLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The number of allowed deployments was exceeded.</p>",
      "exception":true
    },
    "DeploymentNotStartedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified deployment has not started.</p>",
      "exception":true
    },
    "DeploymentOption":{
      "type":"string",
      "enum":[
        "WITH_TRAFFIC_CONTROL",
        "WITHOUT_TRAFFIC_CONTROL"
      ]
    },
    "DeploymentOverview":{
      "type":"structure",
      "members":{
        "Pending":{
          "shape":"InstanceCount",
          "documentation":"<p>The number of instances in the deployment in a pending state.</p>"
        },
        "InProgress":{
          "shape":"InstanceCount",
          "documentation":"<p>The number of instances in which the deployment is in progress.</p>"
        },
        "Succeeded":{
          "shape":"InstanceCount",
          "documentation":"<p>The number of instances in the deployment to which revisions have been successfully deployed.</p>"
        },
        "Failed":{
          "shape":"InstanceCount",
          "documentation":"<p>The number of instances in the deployment in a failed state.</p>"
        },
        "Skipped":{
          "shape":"InstanceCount",
          "documentation":"<p>The number of instances in the deployment in a skipped state.</p>"
        },
        "Ready":{
          "shape":"InstanceCount",
          "documentation":"<p>The number of instances in a replacement environment ready to receive traffic in a blue/green deployment.</p>"
        }
      },
      "documentation":"<p>Information about the deployment status of the instances in the deployment.</p>"
    },
    "DeploymentReadyAction":{
      "type":"string",
      "enum":[
        "CONTINUE_DEPLOYMENT",
        "STOP_DEPLOYMENT"
      ]
    },
    "DeploymentReadyOption":{
      "type":"structure",
      "members":{
        "actionOnTimeout":{
          "shape":"DeploymentReadyAction",
          "documentation":"<p>Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.</p> <ul> <li> <p>CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.</p> </li> <li> <p>STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using <a>ContinueDeployment</a>. If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.</p> </li> </ul>"
        },
        "waitTimeInMinutes":{
          "shape":"Duration",
          "documentation":"<p>The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the STOP_DEPLOYMENT option for actionOnTimeout</p>"
        }
      },
      "documentation":"<p>Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.</p>"
    },
    "DeploymentStatus":{
      "type":"string",
      "enum":[
        "Created",
        "Queued",
        "InProgress",
        "Succeeded",
        "Failed",
        "Stopped",
        "Ready"
      ]
    },
    "DeploymentStatusList":{
      "type":"list",
      "member":{"shape":"DeploymentStatus"}
    },
    "DeploymentStatusMessageList":{
      "type":"list",
      "member":{"shape":"ErrorMessage"}
    },
    "DeploymentStyle":{
      "type":"structure",
      "members":{
        "deploymentType":{
          "shape":"DeploymentType",
          "documentation":"<p>Indicates whether to run an in-place deployment or a blue/green deployment.</p>"
        },
        "deploymentOption":{
          "shape":"DeploymentOption",
          "documentation":"<p>Indicates whether to route deployment traffic behind a load balancer.</p>"
        }
      },
      "documentation":"<p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>"
    },
    "DeploymentType":{
      "type":"string",
      "enum":[
        "IN_PLACE",
        "BLUE_GREEN"
      ]
    },
    "DeploymentsInfoList":{
      "type":"list",
      "member":{"shape":"DeploymentInfo"}
    },
    "DeploymentsList":{
      "type":"list",
      "member":{"shape":"DeploymentId"}
    },
    "DeregisterOnPremisesInstanceInput":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"InstanceName",
          "documentation":"<p>The name of the on-premises instance to deregister.</p>"
        }
      },
      "documentation":"<p>Represents the input of a DeregisterOnPremisesInstance operation.</p>"
    },
    "Description":{"type":"string"},
    "DescriptionTooLongException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The description is too long.</p>",
      "exception":true
    },
    "Diagnostics":{
      "type":"structure",
      "members":{
        "errorCode":{
          "shape":"LifecycleErrorCode",
          "documentation":"<p>The associated error code:</p> <ul> <li> <p>Success: The specified script ran.</p> </li> <li> <p>ScriptMissing: The specified script was not found in the specified location.</p> </li> <li> <p>ScriptNotExecutable: The specified script is not a recognized executable file type.</p> </li> <li> <p>ScriptTimedOut: The specified script did not finish running in the specified time period.</p> </li> <li> <p>ScriptFailed: The specified script failed to run as expected.</p> </li> <li> <p>UnknownError: The specified script did not run for an unknown reason.</p> </li> </ul>"
        },
        "scriptName":{
          "shape":"ScriptName",
          "documentation":"<p>The name of the script.</p>"
        },
        "message":{
          "shape":"LifecycleMessage",
          "documentation":"<p>The message associated with the error.</p>"
        },
        "logTail":{
          "shape":"LogTail",
          "documentation":"<p>The last portion of the diagnostic log.</p> <p>If available, AWS CodeDeploy returns up to the last 4 KB of the diagnostic log.</p>"
        }
      },
      "documentation":"<p>Diagnostic information about executable scripts that are part of a deployment.</p>"
    },
    "Duration":{"type":"integer"},
    "EC2TagFilter":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"Key",
          "documentation":"<p>The tag filter key.</p>"
        },
        "Value":{
          "shape":"Value",
          "documentation":"<p>The tag filter value.</p>"
        },
        "Type":{
          "shape":"EC2TagFilterType",
          "documentation":"<p>The tag filter type:</p> <ul> <li> <p>KEY_ONLY: Key only.</p> </li> <li> <p>VALUE_ONLY: Value only.</p> </li> <li> <p>KEY_AND_VALUE: Key and value.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about an EC2 tag filter.</p>"
    },
    "EC2TagFilterList":{
      "type":"list",
      "member":{"shape":"EC2TagFilter"}
    },
    "EC2TagFilterType":{
      "type":"string",
      "enum":[
        "KEY_ONLY",
        "VALUE_ONLY",
        "KEY_AND_VALUE"
      ]
    },
    "EC2TagSet":{
      "type":"structure",
      "members":{
        "ec2TagSetList":{
          "shape":"EC2TagSetList",
          "documentation":"<p>A list containing other lists of EC2 instance tag groups. In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.</p>"
        }
      },
      "documentation":"<p>Information about groups of EC2 instance tags.</p>"
    },
    "EC2TagSetList":{
      "type":"list",
      "member":{"shape":"EC2TagFilterList"}
    },
    "ELBInfo":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ELBName",
          "documentation":"<p>For blue/green deployments, the name of the load balancer that will be used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.</p>"
        }
      },
      "documentation":"<p>Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.</p>"
    },
    "ELBInfoList":{
      "type":"list",
      "member":{"shape":"ELBInfo"}
    },
    "ELBName":{"type":"string"},
    "ETag":{"type":"string"},
    "ErrorCode":{
      "type":"string",
      "enum":[
        "DEPLOYMENT_GROUP_MISSING",
        "APPLICATION_MISSING",
        "REVISION_MISSING",
        "IAM_ROLE_MISSING",
        "IAM_ROLE_PERMISSIONS",
        "NO_EC2_SUBSCRIPTION",
        "OVER_MAX_INSTANCES",
        "NO_INSTANCES",
        "TIMEOUT",
        "HEALTH_CONSTRAINTS_INVALID",
        "HEALTH_CONSTRAINTS",
        "INTERNAL_ERROR",
        "THROTTLED",
        "ALARM_ACTIVE",
        "AGENT_ISSUE",
        "AUTO_SCALING_IAM_ROLE_PERMISSIONS",
        "AUTO_SCALING_CONFIGURATION",
        "MANUAL_STOP",
        "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION",
        "MISSING_ELB_INFORMATION",
        "MISSING_GITHUB_TOKEN",
        "ELASTIC_LOAD_BALANCING_INVALID",
        "ELB_INVALID_INSTANCE",
        "INVALID_LAMBDA_CONFIGURATION",
        "INVALID_LAMBDA_FUNCTION",
        "HOOK_EXECUTION_FAILURE"
      ]
    },
    "ErrorInformation":{
      "type":"structure",
      "members":{
        "code":{
          "shape":"ErrorCode",
          "documentation":"<p>For information about additional error codes, see <a href=\"http://docs.aws.amazon.com/codedeploy/latest/userguide/error-codes.html\">Error Codes for AWS CodeDeploy</a> in the <a href=\"http://docs.aws.amazon.com/codedeploy/latest/userguide\">AWS CodeDeploy User Guide</a>.</p> <p>The error code:</p> <ul> <li> <p>APPLICATION_MISSING: The application was missing. This error code will most likely be raised if the application is deleted after the deployment is created but before it is started.</p> </li> <li> <p>DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code will most likely be raised if the deployment group is deleted after the deployment is created but before it is started.</p> </li> <li> <p>HEALTH_CONSTRAINTS: The deployment failed on too many instances to be successfully deployed within the instance health constraints specified.</p> </li> <li> <p>HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed within the instance health constraints specified.</p> </li> <li> <p>IAM_ROLE_MISSING: The service role cannot be accessed.</p> </li> <li> <p>IAM_ROLE_PERMISSIONS: The service role does not have the correct permissions.</p> </li> <li> <p>INTERNAL_ERROR: There was an internal error.</p> </li> <li> <p>NO_EC2_SUBSCRIPTION: The calling account is not subscribed to the Amazon EC2 service.</p> </li> <li> <p>NO_INSTANCES: No instance were specified, or no instance can be found.</p> </li> <li> <p>OVER_MAX_INSTANCES: The maximum number of instance was exceeded.</p> </li> <li> <p>THROTTLED: The operation was throttled because the calling account exceeded the throttling limits of one or more AWS services.</p> </li> <li> <p>TIMEOUT: The deployment has timed out.</p> </li> <li> <p>REVISION_MISSING: The revision ID was missing. This error code will most likely be raised if the revision is deleted after the deployment is created but before it is started.</p> </li> </ul>"
        },
        "message":{
          "shape":"ErrorMessage",
          "documentation":"<p>An accompanying error message.</p>"
        }
      },
      "documentation":"<p>Information about a deployment error.</p>"
    },
    "ErrorMessage":{"type":"string"},
    "FileExistsBehavior":{
      "type":"string",
      "enum":[
        "DISALLOW",
        "OVERWRITE",
        "RETAIN"
      ]
    },
    "GenericRevisionInfo":{
      "type":"structure",
      "members":{
        "description":{
          "shape":"Description",
          "documentation":"<p>A comment about the revision.</p>"
        },
        "deploymentGroups":{
          "shape":"DeploymentGroupsList",
          "documentation":"<p>The deployment groups for which this is the current target revision.</p>"
        },
        "firstUsedTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the revision was first used by AWS CodeDeploy.</p>"
        },
        "lastUsedTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the revision was last used by AWS CodeDeploy.</p>"
        },
        "registerTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the revision was registered with AWS CodeDeploy.</p>"
        }
      },
      "documentation":"<p>Information about an application revision.</p>"
    },
    "GetApplicationInput":{
      "type":"structure",
      "required":["applicationName"],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetApplication operation.</p>"
    },
    "GetApplicationOutput":{
      "type":"structure",
      "members":{
        "application":{
          "shape":"ApplicationInfo",
          "documentation":"<p>Information about the application.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetApplication operation.</p>"
    },
    "GetApplicationRevisionInput":{
      "type":"structure",
      "required":[
        "applicationName",
        "revision"
      ],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of the application that corresponds to the revision.</p>"
        },
        "revision":{
          "shape":"RevisionLocation",
          "documentation":"<p>Information about the application revision to get, including type and location.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetApplicationRevision operation.</p>"
    },
    "GetApplicationRevisionOutput":{
      "type":"structure",
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of the application that corresponds to the revision.</p>"
        },
        "revision":{
          "shape":"RevisionLocation",
          "documentation":"<p>Additional information about the revision, including type and location.</p>"
        },
        "revisionInfo":{
          "shape":"GenericRevisionInfo",
          "documentation":"<p>General information about the revision.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetApplicationRevision operation.</p>"
    },
    "GetDeploymentConfigInput":{
      "type":"structure",
      "required":["deploymentConfigName"],
      "members":{
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>The name of a deployment configuration associated with the applicable IAM user or AWS account.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetDeploymentConfig operation.</p>"
    },
    "GetDeploymentConfigOutput":{
      "type":"structure",
      "members":{
        "deploymentConfigInfo":{
          "shape":"DeploymentConfigInfo",
          "documentation":"<p>Information about the deployment configuration.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetDeploymentConfig operation.</p>"
    },
    "GetDeploymentGroupInput":{
      "type":"structure",
      "required":[
        "applicationName",
        "deploymentGroupName"
      ],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "deploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The name of an existing deployment group for the specified application.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetDeploymentGroup operation.</p>"
    },
    "GetDeploymentGroupOutput":{
      "type":"structure",
      "members":{
        "deploymentGroupInfo":{
          "shape":"DeploymentGroupInfo",
          "documentation":"<p>Information about the deployment group.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetDeploymentGroup operation.</p>"
    },
    "GetDeploymentInput":{
      "type":"structure",
      "required":["deploymentId"],
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>A deployment ID associated with the applicable IAM user or AWS account.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetDeployment operation.</p>"
    },
    "GetDeploymentInstanceInput":{
      "type":"structure",
      "required":[
        "deploymentId",
        "instanceId"
      ],
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The unique ID of a deployment.</p>"
        },
        "instanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The unique ID of an instance in the deployment group.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetDeploymentInstance operation.</p>"
    },
    "GetDeploymentInstanceOutput":{
      "type":"structure",
      "members":{
        "instanceSummary":{
          "shape":"InstanceSummary",
          "documentation":"<p>Information about the instance.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetDeploymentInstance operation.</p>"
    },
    "GetDeploymentOutput":{
      "type":"structure",
      "members":{
        "deploymentInfo":{
          "shape":"DeploymentInfo",
          "documentation":"<p>Information about the deployment.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetDeployment operation.</p>"
    },
    "GetOnPremisesInstanceInput":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"InstanceName",
          "documentation":"<p>The name of the on-premises instance about which to get information.</p>"
        }
      },
      "documentation":"<p>Represents the input of a GetOnPremisesInstance operation.</p>"
    },
    "GetOnPremisesInstanceOutput":{
      "type":"structure",
      "members":{
        "instanceInfo":{
          "shape":"InstanceInfo",
          "documentation":"<p>Information about the on-premises instance.</p>"
        }
      },
      "documentation":"<p>Represents the output of a GetOnPremisesInstance operation.</p>"
    },
    "GitHubAccountTokenDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>No GitHub account connection exists with the named specified in the call.</p>",
      "exception":true
    },
    "GitHubAccountTokenName":{"type":"string"},
    "GitHubAccountTokenNameList":{
      "type":"list",
      "member":{"shape":"GitHubAccountTokenName"}
    },
    "GitHubAccountTokenNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The call is missing a required GitHub account connection name.</p>",
      "exception":true
    },
    "GitHubLocation":{
      "type":"structure",
      "members":{
        "repository":{
          "shape":"Repository",
          "documentation":"<p>The GitHub account and repository pair that stores a reference to the commit that represents the bundled artifacts for the application revision. </p> <p>Specified as account/repository.</p>"
        },
        "commitId":{
          "shape":"CommitId",
          "documentation":"<p>The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.</p>"
        }
      },
      "documentation":"<p>Information about the location of application artifacts stored in GitHub.</p>"
    },
    "GreenFleetProvisioningAction":{
      "type":"string",
      "enum":[
        "DISCOVER_EXISTING",
        "COPY_AUTO_SCALING_GROUP"
      ]
    },
    "GreenFleetProvisioningOption":{
      "type":"structure",
      "members":{
        "action":{
          "shape":"GreenFleetProvisioningAction",
          "documentation":"<p>The method used to add instances to a replacement environment.</p> <ul> <li> <p>DISCOVER_EXISTING: Use instances that already exist or will be created manually.</p> </li> <li> <p>COPY_AUTO_SCALING_GROUP: Use settings from a specified Auto Scaling group to define and create instances in a new Auto Scaling group.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about the instances that belong to the replacement environment in a blue/green deployment.</p>"
    },
    "IamArnRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>No IAM ARN was included in the request. You must use an IAM session ARN or IAM user ARN in the request.</p>",
      "exception":true
    },
    "IamSessionArn":{"type":"string"},
    "IamSessionArnAlreadyRegisteredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request included an IAM session ARN that has already been used to register a different instance.</p>",
      "exception":true
    },
    "IamUserArn":{"type":"string"},
    "IamUserArnAlreadyRegisteredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified IAM user ARN is already registered with an on-premises instance.</p>",
      "exception":true
    },
    "IamUserArnRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An IAM user ARN was not specified.</p>",
      "exception":true
    },
    "InstanceAction":{
      "type":"string",
      "enum":[
        "TERMINATE",
        "KEEP_ALIVE"
      ]
    },
    "InstanceArn":{"type":"string"},
    "InstanceCount":{"type":"long"},
    "InstanceDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified instance does not exist in the deployment group.</p>",
      "exception":true
    },
    "InstanceId":{"type":"string"},
    "InstanceIdRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The instance ID was not specified.</p>",
      "exception":true
    },
    "InstanceInfo":{
      "type":"structure",
      "members":{
        "instanceName":{
          "shape":"InstanceName",
          "documentation":"<p>The name of the on-premises instance.</p>"
        },
        "iamSessionArn":{
          "shape":"IamSessionArn",
          "documentation":"<p>The ARN of the IAM session associated with the on-premises instance.</p>"
        },
        "iamUserArn":{
          "shape":"IamUserArn",
          "documentation":"<p>The IAM user ARN associated with the on-premises instance.</p>"
        },
        "instanceArn":{
          "shape":"InstanceArn",
          "documentation":"<p>The ARN of the on-premises instance.</p>"
        },
        "registerTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the on-premises instance was registered.</p>"
        },
        "deregisterTime":{
          "shape":"Timestamp",
          "documentation":"<p>If the on-premises instance was deregistered, the time at which the on-premises instance was deregistered.</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The tags currently associated with the on-premises instance.</p>"
        }
      },
      "documentation":"<p>Information about an on-premises instance.</p>"
    },
    "InstanceInfoList":{
      "type":"list",
      "member":{"shape":"InstanceInfo"}
    },
    "InstanceLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The maximum number of allowed on-premises instances in a single call was exceeded.</p>",
      "exception":true
    },
    "InstanceName":{"type":"string"},
    "InstanceNameAlreadyRegisteredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified on-premises instance name is already registered.</p>",
      "exception":true
    },
    "InstanceNameList":{
      "type":"list",
      "member":{"shape":"InstanceName"}
    },
    "InstanceNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An on-premises instance name was not specified.</p>",
      "exception":true
    },
    "InstanceNotRegisteredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified on-premises instance is not registered.</p>",
      "exception":true
    },
    "InstanceStatus":{
      "type":"string",
      "enum":[
        "Pending",
        "InProgress",
        "Succeeded",
        "Failed",
        "Skipped",
        "Unknown",
        "Ready"
      ]
    },
    "InstanceStatusList":{
      "type":"list",
      "member":{"shape":"InstanceStatus"}
    },
    "InstanceSummary":{
      "type":"structure",
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The deployment ID.</p>"
        },
        "instanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The instance ID.</p>"
        },
        "status":{
          "shape":"InstanceStatus",
          "documentation":"<p>The deployment status for this instance:</p> <ul> <li> <p>Pending: The deployment is pending for this instance.</p> </li> <li> <p>In Progress: The deployment is in progress for this instance.</p> </li> <li> <p>Succeeded: The deployment has succeeded for this instance.</p> </li> <li> <p>Failed: The deployment has failed for this instance.</p> </li> <li> <p>Skipped: The deployment has been skipped for this instance.</p> </li> <li> <p>Unknown: The deployment status is unknown for this instance.</p> </li> </ul>"
        },
        "lastUpdatedAt":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp indicating when the instance information was last updated.</p>"
        },
        "lifecycleEvents":{
          "shape":"LifecycleEventList",
          "documentation":"<p>A list of lifecycle events for this instance.</p>"
        },
        "instanceType":{
          "shape":"InstanceType",
          "documentation":"<p>Information about which environment an instance belongs to in a blue/green deployment.</p> <ul> <li> <p>BLUE: The instance is part of the original environment.</p> </li> <li> <p>GREEN: The instance is part of the replacement environment.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about an instance in a deployment.</p>"
    },
    "InstanceSummaryList":{
      "type":"list",
      "member":{"shape":"InstanceSummary"}
    },
    "InstanceType":{
      "type":"string",
      "enum":[
        "Blue",
        "Green"
      ]
    },
    "InstanceTypeList":{
      "type":"list",
      "member":{"shape":"InstanceType"}
    },
    "InstancesList":{
      "type":"list",
      "member":{"shape":"InstanceId"}
    },
    "InvalidAlarmConfigException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The format of the alarm configuration is invalid. Possible causes include:</p> <ul> <li> <p>The alarm list is null.</p> </li> <li> <p>The alarm object is null.</p> </li> <li> <p>The alarm name is empty or null or exceeds the 255 character limit.</p> </li> <li> <p>Two alarms with the same name have been specified.</p> </li> <li> <p>The alarm configuration is enabled but the alarm list is empty.</p> </li> </ul>",
      "exception":true
    },
    "InvalidApplicationNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The application name was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidAutoRollbackConfigException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The automatic rollback configuration was specified in an invalid format. For example, automatic rollback is enabled but an invalid triggering event type or no event types were listed.</p>",
      "exception":true
    },
    "InvalidAutoScalingGroupException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The Auto Scaling group was specified in an invalid format or does not exist.</p>",
      "exception":true
    },
    "InvalidBlueGreenDeploymentConfigurationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The configuration for the blue/green deployment group was provided in an invalid format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>",
      "exception":true
    },
    "InvalidBucketNameFilterException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The bucket name either doesn't exist or was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidComputePlatformException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.</p>",
      "exception":true
    },
    "InvalidDeployedStateFilterException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployed state filter was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidDeploymentConfigNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment configuration name was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidDeploymentGroupNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The deployment group name was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidDeploymentIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>At least one of the deployment IDs was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidDeploymentInstanceTypeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An instance type was specified for an in-place deployment. Instance types are supported for blue/green deployments only.</p>",
      "exception":true
    },
    "InvalidDeploymentStatusException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified deployment status doesn't exist or cannot be determined.</p>",
      "exception":true
    },
    "InvalidDeploymentStyleException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An invalid deployment style was specified. Valid deployment types include \"IN_PLACE\" and \"BLUE_GREEN\". Valid deployment options include \"WITH_TRAFFIC_CONTROL\" and \"WITHOUT_TRAFFIC_CONTROL\".</p>",
      "exception":true
    },
    "InvalidEC2TagCombinationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of these data types can be used in a single call.</p>",
      "exception":true
    },
    "InvalidEC2TagException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The tag was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidFileExistsBehaviorException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An invalid fileExistsBehavior option was specified to determine how AWS CodeDeploy handles files or directories that already exist in a deployment target location but weren't part of the previous successful deployment. Valid values include \"DISALLOW\", \"OVERWRITE\", and \"RETAIN\".</p>",
      "exception":true
    },
    "InvalidGitHubAccountTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The GitHub token is not valid.</p>",
      "exception":true
    },
    "InvalidGitHubAccountTokenNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The format of the specified GitHub account connection name is invalid.</p>",
      "exception":true
    },
    "InvalidIamSessionArnException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The IAM session ARN was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidIamUserArnException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The IAM user ARN was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidIgnoreApplicationStopFailuresValueException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The IgnoreApplicationStopFailures value is invalid. For AWS Lambda deployments, <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code> or <code>false</code> is expected.</p>",
      "exception":true
    },
    "InvalidInputException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified input was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidInstanceIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> </p>",
      "exception":true
    },
    "InvalidInstanceNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified on-premises instance name was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidInstanceStatusException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified instance status does not exist.</p>",
      "exception":true
    },
    "InvalidInstanceTypeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An invalid instance type was specified for instances in a blue/green deployment. Valid values include \"Blue\" for an original environment and \"Green\" for a replacement environment.</p>",
      "exception":true
    },
    "InvalidKeyPrefixFilterException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified key prefix filter was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidLifecycleEventHookExecutionIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A lifecycle event hook is invalid. Review the <code>hooks</code> section in your AppSpec file to ensure the lifecycle events and <code>hooks</code> functions are valid.</p>",
      "exception":true
    },
    "InvalidLifecycleEventHookExecutionStatusException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The result of a Lambda validation function that verifies a lifecycle event is invalid. It should return <code>Succeeded</code> or <code>Failed</code>.</p>",
      "exception":true
    },
    "InvalidLoadBalancerInfoException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An invalid load balancer name, or no load balancer name, was specified.</p>",
      "exception":true
    },
    "InvalidMinimumHealthyHostValueException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The minimum healthy instance value was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The next token was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidOnPremisesTagCombinationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet, but only one of these data types can be used in a single call.</p>",
      "exception":true
    },
    "InvalidOperationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An invalid operation was detected.</p>",
      "exception":true
    },
    "InvalidRegistrationStatusException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The registration status was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidRevisionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The revision was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidRoleException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Auto Scaling.</p>",
      "exception":true
    },
    "InvalidSortByException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The column name to sort by is either not present or was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidSortOrderException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The sort order was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidTagException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified tag was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidTagFilterException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified tag filter was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidTargetInstancesException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The target instance configuration is invalid. Possible causes include:</p> <ul> <li> <p>Configuration data for target instances was entered for an in-place deployment.</p> </li> <li> <p>The limit of 10 tags for a tag type was exceeded.</p> </li> <li> <p>The combined length of the tag names exceeded the limit. </p> </li> <li> <p>A specified tag is not currently applied to any instances.</p> </li> </ul>",
      "exception":true
    },
    "InvalidTimeRangeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified time range was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidTrafficRoutingConfigurationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> The configuration that specifies how traffic is routed during a deployment is invalid.</p>",
      "exception":true
    },
    "InvalidTriggerConfigException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The trigger was specified in an invalid format.</p>",
      "exception":true
    },
    "InvalidUpdateOutdatedInstancesOnlyValueException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The UpdateOutdatedInstancesOnly value is invalid. For AWS Lambda deployments, <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code> or <code>false</code> is expected.</p>",
      "exception":true
    },
    "Key":{"type":"string"},
    "LastDeploymentInfo":{
      "type":"structure",
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The deployment ID.</p>"
        },
        "status":{
          "shape":"DeploymentStatus",
          "documentation":"<p>The status of the most recent deployment.</p>"
        },
        "endTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp indicating when the most recent deployment to the deployment group completed.</p>"
        },
        "createTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp indicating when the most recent deployment to the deployment group started.</p>"
        }
      },
      "documentation":"<p>Information about the most recent attempted or successful deployment to a deployment group.</p>"
    },
    "LifecycleErrorCode":{
      "type":"string",
      "enum":[
        "Success",
        "ScriptMissing",
        "ScriptNotExecutable",
        "ScriptTimedOut",
        "ScriptFailed",
        "UnknownError"
      ]
    },
    "LifecycleEvent":{
      "type":"structure",
      "members":{
        "lifecycleEventName":{
          "shape":"LifecycleEventName",
          "documentation":"<p>The deployment lifecycle event name, such as ApplicationStop, BeforeInstall, AfterInstall, ApplicationStart, or ValidateService.</p>"
        },
        "diagnostics":{
          "shape":"Diagnostics",
          "documentation":"<p>Diagnostic information about the deployment lifecycle event.</p>"
        },
        "startTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp indicating when the deployment lifecycle event started.</p>"
        },
        "endTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp indicating when the deployment lifecycle event ended.</p>"
        },
        "status":{
          "shape":"LifecycleEventStatus",
          "documentation":"<p>The deployment lifecycle event status:</p> <ul> <li> <p>Pending: The deployment lifecycle event is pending.</p> </li> <li> <p>InProgress: The deployment lifecycle event is in progress.</p> </li> <li> <p>Succeeded: The deployment lifecycle event ran successfully.</p> </li> <li> <p>Failed: The deployment lifecycle event has failed.</p> </li> <li> <p>Skipped: The deployment lifecycle event has been skipped.</p> </li> <li> <p>Unknown: The deployment lifecycle event is unknown.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about a deployment lifecycle event.</p>"
    },
    "LifecycleEventAlreadyCompletedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An attempt to return the status of an already completed lifecycle event occurred.</p>",
      "exception":true
    },
    "LifecycleEventHookExecutionId":{"type":"string"},
    "LifecycleEventList":{
      "type":"list",
      "member":{"shape":"LifecycleEvent"}
    },
    "LifecycleEventName":{"type":"string"},
    "LifecycleEventStatus":{
      "type":"string",
      "enum":[
        "Pending",
        "InProgress",
        "Succeeded",
        "Failed",
        "Skipped",
        "Unknown"
      ]
    },
    "LifecycleHookLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The limit for lifecycle hooks was exceeded.</p>",
      "exception":true
    },
    "LifecycleMessage":{"type":"string"},
    "ListApplicationRevisionsInput":{
      "type":"structure",
      "required":["applicationName"],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "sortBy":{
          "shape":"ApplicationRevisionSortBy",
          "documentation":"<p>The column name to use to sort the list results:</p> <ul> <li> <p>registerTime: Sort by the time the revisions were registered with AWS CodeDeploy.</p> </li> <li> <p>firstUsedTime: Sort by the time the revisions were first used in a deployment.</p> </li> <li> <p>lastUsedTime: Sort by the time the revisions were last used in a deployment.</p> </li> </ul> <p>If not specified or set to null, the results will be returned in an arbitrary order.</p>"
        },
        "sortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>The order in which to sort the list results:</p> <ul> <li> <p>ascending: ascending order.</p> </li> <li> <p>descending: descending order.</p> </li> </ul> <p>If not specified, the results will be sorted in ascending order.</p> <p>If set to null, the results will be sorted in an arbitrary order.</p>"
        },
        "s3Bucket":{
          "shape":"S3Bucket",
          "documentation":"<p>An Amazon S3 bucket name to limit the search for revisions.</p> <p>If set to null, all of the user's buckets will be searched.</p>"
        },
        "s3KeyPrefix":{
          "shape":"S3Key",
          "documentation":"<p>A key prefix for the set of Amazon S3 objects to limit the search for revisions.</p>"
        },
        "deployed":{
          "shape":"ListStateFilterAction",
          "documentation":"<p>Whether to list revisions based on whether the revision is the target revision of an deployment group:</p> <ul> <li> <p>include: List revisions that are target revisions of a deployment group.</p> </li> <li> <p>exclude: Do not list revisions that are target revisions of a deployment group.</p> </li> <li> <p>ignore: List all revisions.</p> </li> </ul>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier returned from the previous list application revisions call. It can be used to return the next set of applications in the list.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListApplicationRevisions operation.</p>"
    },
    "ListApplicationRevisionsOutput":{
      "type":"structure",
      "members":{
        "revisions":{
          "shape":"RevisionLocationList",
          "documentation":"<p>A list of locations that contain the matching revisions.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If a large amount of information is returned, an identifier will also be returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListApplicationRevisions operation.</p>"
    },
    "ListApplicationsInput":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier returned from the previous list applications call. It can be used to return the next set of applications in the list.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListApplications operation.</p>"
    },
    "ListApplicationsOutput":{
      "type":"structure",
      "members":{
        "applications":{
          "shape":"ApplicationsList",
          "documentation":"<p>A list of application names.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list applications call to return the next set of applications, will also be returned. in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListApplications operation.</p>"
    },
    "ListDeploymentConfigsInput":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier returned from the previous list deployment configurations call. It can be used to return the next set of deployment configurations in the list. </p>"
        }
      },
      "documentation":"<p>Represents the input of a ListDeploymentConfigs operation.</p>"
    },
    "ListDeploymentConfigsOutput":{
      "type":"structure",
      "members":{
        "deploymentConfigsList":{
          "shape":"DeploymentConfigsList",
          "documentation":"<p>A list of deployment configurations, including built-in configurations such as CodeDeployDefault.OneAtATime.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment configurations call to return the next set of deployment configurations in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListDeploymentConfigs operation.</p>"
    },
    "ListDeploymentGroupsInput":{
      "type":"structure",
      "required":["applicationName"],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier returned from the previous list deployment groups call. It can be used to return the next set of deployment groups in the list.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListDeploymentGroups operation.</p>"
    },
    "ListDeploymentGroupsOutput":{
      "type":"structure",
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The application name.</p>"
        },
        "deploymentGroups":{
          "shape":"DeploymentGroupsList",
          "documentation":"<p>A list of corresponding deployment group names.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment groups call to return the next set of deployment groups in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListDeploymentGroups operation.</p>"
    },
    "ListDeploymentInstancesInput":{
      "type":"structure",
      "required":["deploymentId"],
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The unique ID of a deployment.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier returned from the previous list deployment instances call. It can be used to return the next set of deployment instances in the list.</p>"
        },
        "instanceStatusFilter":{
          "shape":"InstanceStatusList",
          "documentation":"<p>A subset of instances to list by status:</p> <ul> <li> <p>Pending: Include those instance with pending deployments.</p> </li> <li> <p>InProgress: Include those instance where deployments are still in progress.</p> </li> <li> <p>Succeeded: Include those instances with successful deployments.</p> </li> <li> <p>Failed: Include those instance with failed deployments.</p> </li> <li> <p>Skipped: Include those instance with skipped deployments.</p> </li> <li> <p>Unknown: Include those instance with deployments in an unknown state.</p> </li> </ul>"
        },
        "instanceTypeFilter":{
          "shape":"InstanceTypeList",
          "documentation":"<p>The set of instances in a blue/green deployment, either those in the original environment (\"BLUE\") or those in the replacement environment (\"GREEN\"), for which you want to view instance information.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListDeploymentInstances operation.</p>"
    },
    "ListDeploymentInstancesOutput":{
      "type":"structure",
      "members":{
        "instancesList":{
          "shape":"InstancesList",
          "documentation":"<p>A list of instance IDs.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment instances call to return the next set of deployment instances in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListDeploymentInstances operation.</p>"
    },
    "ListDeploymentsInput":{
      "type":"structure",
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "deploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The name of an existing deployment group for the specified application.</p>"
        },
        "includeOnlyStatuses":{
          "shape":"DeploymentStatusList",
          "documentation":"<p>A subset of deployments to list by status:</p> <ul> <li> <p>Created: Include created deployments in the resulting list.</p> </li> <li> <p>Queued: Include queued deployments in the resulting list.</p> </li> <li> <p>In Progress: Include in-progress deployments in the resulting list.</p> </li> <li> <p>Succeeded: Include successful deployments in the resulting list.</p> </li> <li> <p>Failed: Include failed deployments in the resulting list.</p> </li> <li> <p>Stopped: Include stopped deployments in the resulting list.</p> </li> </ul>"
        },
        "createTimeRange":{
          "shape":"TimeRange",
          "documentation":"<p>A time range (start and end) for returning a subset of the list of deployments.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier returned from the previous list deployments call. It can be used to return the next set of deployments in the list.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListDeployments operation.</p>"
    },
    "ListDeploymentsOutput":{
      "type":"structure",
      "members":{
        "deployments":{
          "shape":"DeploymentsList",
          "documentation":"<p>A list of deployment IDs.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployments call to return the next set of deployments in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of a ListDeployments operation.</p>"
    },
    "ListGitHubAccountTokenNamesInput":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier returned from the previous ListGitHubAccountTokenNames call. It can be used to return the next set of names in the list. </p>"
        }
      },
      "documentation":"<p>Represents the input of a ListGitHubAccountTokenNames operation.</p>"
    },
    "ListGitHubAccountTokenNamesOutput":{
      "type":"structure",
      "members":{
        "tokenNameList":{
          "shape":"GitHubAccountTokenNameList",
          "documentation":"<p>A list of names of connections to GitHub accounts.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent ListGitHubAccountTokenNames call to return the next set of names in the list. </p>"
        }
      },
      "documentation":"<p>Represents the output of a ListGitHubAccountTokenNames operation.</p>"
    },
    "ListOnPremisesInstancesInput":{
      "type":"structure",
      "members":{
        "registrationStatus":{
          "shape":"RegistrationStatus",
          "documentation":"<p>The registration status of the on-premises instances:</p> <ul> <li> <p>Deregistered: Include deregistered on-premises instances in the resulting list.</p> </li> <li> <p>Registered: Include registered on-premises instances in the resulting list.</p> </li> </ul>"
        },
        "tagFilters":{
          "shape":"TagFilterList",
          "documentation":"<p>The on-premises instance tags that will be used to restrict the corresponding on-premises instance names returned.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An identifier returned from the previous list on-premises instances call. It can be used to return the next set of on-premises instances in the list.</p>"
        }
      },
      "documentation":"<p>Represents the input of a ListOnPremisesInstances operation.</p>"
    },
    "ListOnPremisesInstancesOutput":{
      "type":"structure",
      "members":{
        "instanceNames":{
          "shape":"InstanceNameList",
          "documentation":"<p>The list of matching on-premises instance names.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list on-premises instances call to return the next set of on-premises instances in the list.</p>"
        }
      },
      "documentation":"<p>Represents the output of list on-premises instances operation.</p>"
    },
    "ListStateFilterAction":{
      "type":"string",
      "enum":[
        "include",
        "exclude",
        "ignore"
      ]
    },
    "LoadBalancerInfo":{
      "type":"structure",
      "members":{
        "elbInfoList":{
          "shape":"ELBInfoList",
          "documentation":"<p>An array containing information about the load balancer to use for load balancing in a deployment. In Elastic Load Balancing, load balancers are used with Classic Load Balancers.</p> <note> <p> Adding more than one load balancer to the array is not supported. </p> </note>"
        },
        "targetGroupInfoList":{
          "shape":"TargetGroupInfoList",
          "documentation":"<p>An array containing information about the target group to use for load balancing in a deployment. In Elastic Load Balancing, target groups are used with Application Load Balancers.</p> <note> <p> Adding more than one target group to the array is not supported. </p> </note>"
        }
      },
      "documentation":"<p>Information about the Elastic Load Balancing load balancer or target group used in a deployment.</p>"
    },
    "LogTail":{"type":"string"},
    "Message":{"type":"string"},
    "MinimumHealthyHosts":{
      "type":"structure",
      "members":{
        "value":{
          "shape":"MinimumHealthyHostsValue",
          "documentation":"<p>The minimum healthy instance value.</p>"
        },
        "type":{
          "shape":"MinimumHealthyHostsType",
          "documentation":"<p>The minimum healthy instance type:</p> <ul> <li> <p>HOST_COUNT: The minimum number of healthy instance as an absolute value.</p> </li> <li> <p>FLEET_PERCENT: The minimum number of healthy instance as a percentage of the total number of instance in the deployment.</p> </li> </ul> <p>In an example of nine instance, if a HOST_COUNT of six is specified, deploy to up to three instances at a time. The deployment will be successful if six or more instances are deployed to successfully; otherwise, the deployment fails. If a FLEET_PERCENT of 40 is specified, deploy to up to five instance at a time. The deployment will be successful if four or more instance are deployed to successfully; otherwise, the deployment fails.</p> <note> <p>In a call to the get deployment configuration operation, CodeDeployDefault.OneAtATime will return a minimum healthy instance type of MOST_CONCURRENCY and a value of 1. This means a deployment to only one instance at a time. (You cannot set the type to MOST_CONCURRENCY, only to HOST_COUNT or FLEET_PERCENT.) In addition, with CodeDeployDefault.OneAtATime, AWS CodeDeploy will try to ensure that all instances but one are kept in a healthy state during the deployment. Although this allows one instance at a time to be taken offline for a new deployment, it also means that if the deployment to the last instance fails, the overall deployment still succeeds.</p> </note> <p>For more information, see <a href=\"http://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html\">AWS CodeDeploy Instance Health</a> in the <i>AWS CodeDeploy User Guide</i>.</p>"
        }
      },
      "documentation":"<p>Information about minimum healthy instance.</p>"
    },
    "MinimumHealthyHostsType":{
      "type":"string",
      "enum":[
        "HOST_COUNT",
        "FLEET_PERCENT"
      ]
    },
    "MinimumHealthyHostsValue":{"type":"integer"},
    "MultipleIamArnsProvidedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Both an IAM user ARN and an IAM session ARN were included in the request. Use only one ARN type.</p>",
      "exception":true
    },
    "NextToken":{"type":"string"},
    "NullableBoolean":{"type":"boolean"},
    "OnPremisesTagSet":{
      "type":"structure",
      "members":{
        "onPremisesTagSetList":{
          "shape":"OnPremisesTagSetList",
          "documentation":"<p>A list containing other lists of on-premises instance tag groups. In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.</p>"
        }
      },
      "documentation":"<p>Information about groups of on-premises instance tags.</p>"
    },
    "OnPremisesTagSetList":{
      "type":"list",
      "member":{"shape":"TagFilterList"}
    },
    "OperationNotSupportedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The API used does not support the deployment.</p>",
      "exception":true
    },
    "Percentage":{"type":"integer"},
    "PutLifecycleEventHookExecutionStatusInput":{
      "type":"structure",
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The ID of the deployment. Pass this ID to a Lambda function that validates a deployment lifecycle event.</p>"
        },
        "lifecycleEventHookExecutionId":{
          "shape":"LifecycleEventHookExecutionId",
          "documentation":"<p>The execution ID of a deployment's lifecycle hook. A deployment lifecycle hook is specified in the <code>hooks</code> section of the AppSpec file.</p>"
        },
        "status":{
          "shape":"LifecycleEventStatus",
          "documentation":"<p>The result of a Lambda function that validates a deployment lifecycle event (<code>Succeeded</code> or <code>Failed</code>).</p>"
        }
      }
    },
    "PutLifecycleEventHookExecutionStatusOutput":{
      "type":"structure",
      "members":{
        "lifecycleEventHookExecutionId":{
          "shape":"LifecycleEventHookExecutionId",
          "documentation":"<p>The execution ID of the lifecycle event hook. A hook is specified in the <code>hooks</code> section of the deployment's AppSpec file.</p>"
        }
      }
    },
    "RawString":{
      "type":"structure",
      "members":{
        "content":{
          "shape":"RawStringContent",
          "documentation":"<p>The YAML-formatted or JSON-formatted revision string. It includes information about which Lambda function to update and optional Lambda functions that validate deployment lifecycle events.</p>"
        },
        "sha256":{
          "shape":"RawStringSha256",
          "documentation":"<p>The SHA256 hash value of the revision that is specified as a RawString.</p>"
        }
      },
      "documentation":"<p>A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.</p>"
    },
    "RawStringContent":{"type":"string"},
    "RawStringSha256":{"type":"string"},
    "RegisterApplicationRevisionInput":{
      "type":"structure",
      "required":[
        "applicationName",
        "revision"
      ],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The name of an AWS CodeDeploy application associated with the applicable IAM user or AWS account.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>A comment about the revision.</p>"
        },
        "revision":{
          "shape":"RevisionLocation",
          "documentation":"<p>Information about the application revision to register, including type and location.</p>"
        }
      },
      "documentation":"<p>Represents the input of a RegisterApplicationRevision operation.</p>"
    },
    "RegisterOnPremisesInstanceInput":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"InstanceName",
          "documentation":"<p>The name of the on-premises instance to register.</p>"
        },
        "iamSessionArn":{
          "shape":"IamSessionArn",
          "documentation":"<p>The ARN of the IAM session to associate with the on-premises instance.</p>"
        },
        "iamUserArn":{
          "shape":"IamUserArn",
          "documentation":"<p>The ARN of the IAM user to associate with the on-premises instance.</p>"
        }
      },
      "documentation":"<p>Represents the input of the register on-premises instance operation.</p>"
    },
    "RegistrationStatus":{
      "type":"string",
      "enum":[
        "Registered",
        "Deregistered"
      ]
    },
    "RemoveTagsFromOnPremisesInstancesInput":{
      "type":"structure",
      "required":[
        "tags",
        "instanceNames"
      ],
      "members":{
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The tag key-value pairs to remove from the on-premises instances.</p>"
        },
        "instanceNames":{
          "shape":"InstanceNameList",
          "documentation":"<p>The names of the on-premises instances from which to remove tags.</p>"
        }
      },
      "documentation":"<p>Represents the input of a RemoveTagsFromOnPremisesInstances operation.</p>"
    },
    "Repository":{"type":"string"},
    "ResourceValidationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified resource could not be validated.</p>",
      "exception":true
    },
    "RevisionDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The named revision does not exist with the applicable IAM user or AWS account.</p>",
      "exception":true
    },
    "RevisionInfo":{
      "type":"structure",
      "members":{
        "revisionLocation":{
          "shape":"RevisionLocation",
          "documentation":"<p>Information about the location and type of an application revision.</p>"
        },
        "genericRevisionInfo":{
          "shape":"GenericRevisionInfo",
          "documentation":"<p>Information about an application revision, including usage details and associated deployment groups.</p>"
        }
      },
      "documentation":"<p>Information about an application revision.</p>"
    },
    "RevisionInfoList":{
      "type":"list",
      "member":{"shape":"RevisionInfo"}
    },
    "RevisionLocation":{
      "type":"structure",
      "members":{
        "revisionType":{
          "shape":"RevisionLocationType",
          "documentation":"<p>The type of application revision:</p> <ul> <li> <p>S3: An application revision stored in Amazon S3.</p> </li> <li> <p>GitHub: An application revision stored in GitHub (EC2/On-premises deployments only)</p> </li> <li> <p>String: A YAML-formatted or JSON-formatted string (AWS Lambda deployments only)</p> </li> </ul>"
        },
        "s3Location":{
          "shape":"S3Location",
          "documentation":"<p>Information about the location of a revision stored in Amazon S3. </p>"
        },
        "gitHubLocation":{
          "shape":"GitHubLocation",
          "documentation":"<p>Information about the location of application artifacts stored in GitHub.</p>"
        },
        "string":{
          "shape":"RawString",
          "documentation":"<p>Information about the location of an AWS Lambda deployment revision stored as a RawString.</p>"
        }
      },
      "documentation":"<p>Information about the location of an application revision.</p>"
    },
    "RevisionLocationList":{
      "type":"list",
      "member":{"shape":"RevisionLocation"}
    },
    "RevisionLocationType":{
      "type":"string",
      "enum":[
        "S3",
        "GitHub",
        "String"
      ]
    },
    "RevisionRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The revision ID was not specified.</p>",
      "exception":true
    },
    "Role":{"type":"string"},
    "RoleRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The role ID was not specified.</p>",
      "exception":true
    },
    "RollbackInfo":{
      "type":"structure",
      "members":{
        "rollbackDeploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The ID of the deployment rollback.</p>"
        },
        "rollbackTriggeringDeploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The deployment ID of the deployment that was underway and triggered a rollback deployment because it failed or was stopped.</p>"
        },
        "rollbackMessage":{
          "shape":"Description",
          "documentation":"<p>Information describing the status of a deployment rollback; for example, whether the deployment can't be rolled back, is in progress, failed, or succeeded. </p>"
        }
      },
      "documentation":"<p>Information about a deployment rollback.</p>"
    },
    "S3Bucket":{"type":"string"},
    "S3Key":{"type":"string"},
    "S3Location":{
      "type":"structure",
      "members":{
        "bucket":{
          "shape":"S3Bucket",
          "documentation":"<p>The name of the Amazon S3 bucket where the application revision is stored.</p>"
        },
        "key":{
          "shape":"S3Key",
          "documentation":"<p>The name of the Amazon S3 object that represents the bundled artifacts for the application revision.</p>"
        },
        "bundleType":{
          "shape":"BundleType",
          "documentation":"<p>The file type of the application revision. Must be one of the following:</p> <ul> <li> <p>tar: A tar archive file.</p> </li> <li> <p>tgz: A compressed tar archive file.</p> </li> <li> <p>zip: A zip archive file.</p> </li> </ul>"
        },
        "version":{
          "shape":"VersionId",
          "documentation":"<p>A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.</p> <p>If the version is not specified, the system will use the most recent version by default.</p>"
        },
        "eTag":{
          "shape":"ETag",
          "documentation":"<p>The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.</p> <p>If the ETag is not specified as an input parameter, ETag validation of the object will be skipped.</p>"
        }
      },
      "documentation":"<p>Information about the location of application artifacts stored in Amazon S3.</p>"
    },
    "ScriptName":{"type":"string"},
    "SkipWaitTimeForInstanceTerminationInput":{
      "type":"structure",
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The ID of the blue/green deployment for which you want to skip the instance termination wait time.</p>"
        }
      }
    },
    "SortOrder":{
      "type":"string",
      "enum":[
        "ascending",
        "descending"
      ]
    },
    "StopDeploymentInput":{
      "type":"structure",
      "required":["deploymentId"],
      "members":{
        "deploymentId":{
          "shape":"DeploymentId",
          "documentation":"<p>The unique ID of a deployment.</p>"
        },
        "autoRollbackEnabled":{
          "shape":"NullableBoolean",
          "documentation":"<p>Indicates, when a deployment is stopped, whether instances that have been updated should be rolled back to the previous version of the application revision.</p>"
        }
      },
      "documentation":"<p>Represents the input of a StopDeployment operation.</p>"
    },
    "StopDeploymentOutput":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"StopStatus",
          "documentation":"<p>The status of the stop deployment operation:</p> <ul> <li> <p>Pending: The stop operation is pending.</p> </li> <li> <p>Succeeded: The stop operation was successful.</p> </li> </ul>"
        },
        "statusMessage":{
          "shape":"Message",
          "documentation":"<p>An accompanying status message.</p>"
        }
      },
      "documentation":"<p>Represents the output of a StopDeployment operation.</p>"
    },
    "StopStatus":{
      "type":"string",
      "enum":[
        "Pending",
        "Succeeded"
      ]
    },
    "Tag":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"Key",
          "documentation":"<p>The tag's key.</p>"
        },
        "Value":{
          "shape":"Value",
          "documentation":"<p>The tag's value.</p>"
        }
      },
      "documentation":"<p>Information about a tag.</p>"
    },
    "TagFilter":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"Key",
          "documentation":"<p>The on-premises instance tag filter key.</p>"
        },
        "Value":{
          "shape":"Value",
          "documentation":"<p>The on-premises instance tag filter value.</p>"
        },
        "Type":{
          "shape":"TagFilterType",
          "documentation":"<p>The on-premises instance tag filter type:</p> <ul> <li> <p>KEY_ONLY: Key only.</p> </li> <li> <p>VALUE_ONLY: Value only.</p> </li> <li> <p>KEY_AND_VALUE: Key and value.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about an on-premises instance tag filter.</p>"
    },
    "TagFilterList":{
      "type":"list",
      "member":{"shape":"TagFilter"}
    },
    "TagFilterType":{
      "type":"string",
      "enum":[
        "KEY_ONLY",
        "VALUE_ONLY",
        "KEY_AND_VALUE"
      ]
    },
    "TagLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The maximum allowed number of tags was exceeded.</p>",
      "exception":true
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"}
    },
    "TagRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A tag was not specified.</p>",
      "exception":true
    },
    "TagSetListLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The number of tag groups included in the tag set list exceeded the maximum allowed limit of 3.</p>",
      "exception":true
    },
    "TargetGroupInfo":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"TargetGroupName",
          "documentation":"<p>For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. </p>"
        }
      },
      "documentation":"<p>Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.</p>"
    },
    "TargetGroupInfoList":{
      "type":"list",
      "member":{"shape":"TargetGroupInfo"}
    },
    "TargetGroupName":{"type":"string"},
    "TargetInstances":{
      "type":"structure",
      "members":{
        "tagFilters":{
          "shape":"EC2TagFilterList",
          "documentation":"<p>The tag filter key, type, and value used to identify Amazon EC2 instances in a replacement environment for a blue/green deployment. Cannot be used in the same call as ec2TagSet.</p>"
        },
        "autoScalingGroups":{
          "shape":"AutoScalingGroupNameList",
          "documentation":"<p>The names of one or more Auto Scaling groups to identify a replacement environment for a blue/green deployment.</p>"
        },
        "ec2TagSet":{
          "shape":"EC2TagSet",
          "documentation":"<p>Information about the groups of EC2 instance tags that an instance must be identified by in order for it to be included in the replacement environment for a blue/green deployment. Cannot be used in the same call as tagFilters.</p>"
        }
      },
      "documentation":"<p>Information about the instances to be used in the replacement environment in a blue/green deployment.</p>"
    },
    "ThrottlingException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An API function was called too frequently.</p>",
      "exception":true
    },
    "TimeBasedCanary":{
      "type":"structure",
      "members":{
        "canaryPercentage":{
          "shape":"Percentage",
          "documentation":"<p>The percentage of traffic to shift in the first increment of a <code>TimeBasedCanary</code> deployment.</p>"
        },
        "canaryInterval":{
          "shape":"WaitTimeInMins",
          "documentation":"<p>The number of minutes between the first and second traffic shifts of a <code>TimeBasedCanary</code> deployment.</p>"
        }
      },
      "documentation":"<p>A configuration that shifts traffic from one version of a Lambda function to another in two increments. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>"
    },
    "TimeBasedLinear":{
      "type":"structure",
      "members":{
        "linearPercentage":{
          "shape":"Percentage",
          "documentation":"<p>The percentage of traffic that is shifted at the start of each increment of a <code>TimeBasedLinear</code> deployment.</p>"
        },
        "linearInterval":{
          "shape":"WaitTimeInMins",
          "documentation":"<p>The number of minutes between each incremental traffic shift of a <code>TimeBasedLinear</code> deployment.</p>"
        }
      },
      "documentation":"<p>A configuration that shifts traffic from one version of a Lambda function to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>"
    },
    "TimeRange":{
      "type":"structure",
      "members":{
        "start":{
          "shape":"Timestamp",
          "documentation":"<p>The start time of the time range.</p> <note> <p>Specify null to leave the start time open-ended.</p> </note>"
        },
        "end":{
          "shape":"Timestamp",
          "documentation":"<p>The end time of the time range.</p> <note> <p>Specify null to leave the end time open-ended.</p> </note>"
        }
      },
      "documentation":"<p>Information about a time range.</p>"
    },
    "Timestamp":{"type":"timestamp"},
    "TrafficRoutingConfig":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"TrafficRoutingType",
          "documentation":"<p>The type of traffic shifting (<code>TimeBasedCanary</code> or <code>TimeBasedLinear</code>) used by a deployment configuration .</p>"
        },
        "timeBasedCanary":{
          "shape":"TimeBasedCanary",
          "documentation":"<p>A configuration that shifts traffic from one version of a Lambda function to another in two increments. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>"
        },
        "timeBasedLinear":{
          "shape":"TimeBasedLinear",
          "documentation":"<p>A configuration that shifts traffic from one version of a Lambda function to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions are specified in the deployment's AppSpec file.</p>"
        }
      },
      "documentation":"<p>The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment.</p>"
    },
    "TrafficRoutingType":{
      "type":"string",
      "enum":[
        "TimeBasedCanary",
        "TimeBasedLinear",
        "AllAtOnce"
      ]
    },
    "TriggerConfig":{
      "type":"structure",
      "members":{
        "triggerName":{
          "shape":"TriggerName",
          "documentation":"<p>The name of the notification trigger.</p>"
        },
        "triggerTargetArn":{
          "shape":"TriggerTargetArn",
          "documentation":"<p>The ARN of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.</p>"
        },
        "triggerEvents":{
          "shape":"TriggerEventTypeList",
          "documentation":"<p>The event type or types for which notifications are triggered.</p>"
        }
      },
      "documentation":"<p>Information about notification triggers for the deployment group.</p>"
    },
    "TriggerConfigList":{
      "type":"list",
      "member":{"shape":"TriggerConfig"}
    },
    "TriggerEventType":{
      "type":"string",
      "enum":[
        "DeploymentStart",
        "DeploymentSuccess",
        "DeploymentFailure",
        "DeploymentStop",
        "DeploymentRollback",
        "DeploymentReady",
        "InstanceStart",
        "InstanceSuccess",
        "InstanceFailure",
        "InstanceReady"
      ]
    },
    "TriggerEventTypeList":{
      "type":"list",
      "member":{"shape":"TriggerEventType"}
    },
    "TriggerName":{"type":"string"},
    "TriggerTargetArn":{"type":"string"},
    "TriggerTargetsLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The maximum allowed number of triggers was exceeded.</p>",
      "exception":true
    },
    "UnsupportedActionForDeploymentTypeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A call was submitted that is not supported for the specified deployment type.</p>",
      "exception":true
    },
    "UpdateApplicationInput":{
      "type":"structure",
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The current name of the application you want to change.</p>"
        },
        "newApplicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The new name to give the application.</p>"
        }
      },
      "documentation":"<p>Represents the input of an UpdateApplication operation.</p>"
    },
    "UpdateDeploymentGroupInput":{
      "type":"structure",
      "required":[
        "applicationName",
        "currentDeploymentGroupName"
      ],
      "members":{
        "applicationName":{
          "shape":"ApplicationName",
          "documentation":"<p>The application name corresponding to the deployment group to update.</p>"
        },
        "currentDeploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The current name of the deployment group.</p>"
        },
        "newDeploymentGroupName":{
          "shape":"DeploymentGroupName",
          "documentation":"<p>The new name of the deployment group, if you want to change it.</p>"
        },
        "deploymentConfigName":{
          "shape":"DeploymentConfigName",
          "documentation":"<p>The replacement deployment configuration name to use, if you want to change it.</p>"
        },
        "ec2TagFilters":{
          "shape":"EC2TagFilterList",
          "documentation":"<p>The replacement set of Amazon EC2 tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.</p>"
        },
        "onPremisesInstanceTagFilters":{
          "shape":"TagFilterList",
          "documentation":"<p>The replacement set of on-premises instance tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.</p>"
        },
        "autoScalingGroups":{
          "shape":"AutoScalingGroupNameList",
          "documentation":"<p>The replacement list of Auto Scaling groups to be included in the deployment group, if you want to change them. To keep the Auto Scaling groups, enter their names. To remove Auto Scaling groups, do not enter any Auto Scaling group names.</p>"
        },
        "serviceRoleArn":{
          "shape":"Role",
          "documentation":"<p>A replacement ARN for the service role, if you want to change it.</p>"
        },
        "triggerConfigurations":{
          "shape":"TriggerConfigList",
          "documentation":"<p>Information about triggers to change when the deployment group is updated. For examples, see <a href=\"http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-edit.html\">Modify Triggers in an AWS CodeDeploy Deployment Group</a> in the AWS CodeDeploy User Guide.</p>"
        },
        "alarmConfiguration":{
          "shape":"AlarmConfiguration",
          "documentation":"<p>Information to add or change about Amazon CloudWatch alarms when the deployment group is updated.</p>"
        },
        "autoRollbackConfiguration":{
          "shape":"AutoRollbackConfiguration",
          "documentation":"<p>Information for an automatic rollback configuration that is added or changed when a deployment group is updated.</p>"
        },
        "deploymentStyle":{
          "shape":"DeploymentStyle",
          "documentation":"<p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>"
        },
        "blueGreenDeploymentConfiguration":{
          "shape":"BlueGreenDeploymentConfiguration",
          "documentation":"<p>Information about blue/green deployment options for a deployment group.</p>"
        },
        "loadBalancerInfo":{
          "shape":"LoadBalancerInfo",
          "documentation":"<p>Information about the load balancer used in a deployment.</p>"
        },
        "ec2TagSet":{
          "shape":"EC2TagSet",
          "documentation":"<p>Information about groups of tags applied to on-premises instances. The deployment group will include only EC2 instances identified by all the tag groups.</p>"
        },
        "onPremisesTagSet":{
          "shape":"OnPremisesTagSet",
          "documentation":"<p>Information about an on-premises instance tag set. The deployment group will include only on-premises instances identified by all the tag groups.</p>"
        }
      },
      "documentation":"<p>Represents the input of an UpdateDeploymentGroup operation.</p>"
    },
    "UpdateDeploymentGroupOutput":{
      "type":"structure",
      "members":{
        "hooksNotCleanedUp":{
          "shape":"AutoScalingGroupList",
          "documentation":"<p>If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, AWS CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the AWS account. If the output contains data, AWS CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the AWS account.</p>"
        }
      },
      "documentation":"<p>Represents the output of an UpdateDeploymentGroup operation.</p>"
    },
    "Value":{"type":"string"},
    "VersionId":{"type":"string"},
    "WaitTimeInMins":{"type":"integer"}
  },
  "documentation":"<fullname>AWS CodeDeploy</fullname> <p>AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, or serverless AWS Lambda functions.</p> <p>You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. AWS CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use AWS CodeDeploy.</p> <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>AWS CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following AWS CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. AWS CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances or CodeDeploy Lambda applications. A Lambda deployment group contains a group of applications. An EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Auto Scaling groups, or both. </p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by AWS CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process and the components used in the process of updating a Lambda function or of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: For an AWS Lambda deployment, this is an AppSpec file that specifies the Lambda function to update and one or more functions to validate deployment lifecycle events. For an EC2/On-premises deployment, this is an archive file containing source content—source code, web pages, executable files, and deployment scripts—along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for AWS CodeDeploy deployments, and to get details about a Lambda function deployment.</p> <p> <b>AWS CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href=\"http://docs.aws.amazon.com/codedeploy/latest/userguide\">AWS CodeDeploy User Guide</a> </p> </li> <li> <p> <a href=\"http://docs.aws.amazon.com/codedeploy/latest/APIReference/\">AWS CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href=\"http://docs.aws.amazon.com/cli/latest/reference/deploy/index.html\">AWS CLI Reference for AWS CodeDeploy</a> </p> </li> <li> <p> <a href=\"https://forums.aws.amazon.com/forum.jspa?forumID=179\">AWS CodeDeploy Developer Forum</a> </p> </li> </ul>"
}
