awsim['greengrass'] = {
  "metadata" : {
    "apiVersion" : "2017-06-07",
    "endpointPrefix" : "greengrass",
    "signingName" : "greengrass",
    "serviceFullName" : "AWS Greengrass",
    "serviceId" : "Greengrass",
    "protocol" : "rest-json",
    "jsonVersion" : "1.1",
    "uid" : "greengrass-2017-06-07",
    "signatureVersion" : "v4"
  },
  "operations" : {
    "AssociateRoleToGroup" : {
      "name" : "AssociateRoleToGroup",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/groups/{GroupId}/role",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "AssociateRoleToGroupRequest"
      },
      "output" : {
        "shape" : "AssociateRoleToGroupResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Associates a role with a group. Your AWS Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud."
    },
    "AssociateServiceRoleToAccount" : {
      "name" : "AssociateServiceRoleToAccount",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/servicerole",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "AssociateServiceRoleToAccountRequest"
      },
      "output" : {
        "shape" : "AssociateServiceRoleToAccountResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Associates a role with your account. AWS Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''."
    },
    "CreateCoreDefinition" : {
      "name" : "CreateCoreDefinition",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/cores",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateCoreDefinitionRequest"
      },
      "output" : {
        "shape" : "CreateCoreDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. AWS Greengrass groups must each contain exactly one AWS Greengrass core."
    },
    "CreateCoreDefinitionVersion" : {
      "name" : "CreateCoreDefinitionVersion",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/cores/{CoreDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateCoreDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "CreateCoreDefinitionVersionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a version of a core definition that has already been defined. AWS Greengrass groups must each contain exactly one AWS Greengrass core."
    },
    "CreateDeployment" : {
      "name" : "CreateDeployment",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/groups/{GroupId}/deployments",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateDeploymentRequest"
      },
      "output" : {
        "shape" : "CreateDeploymentResponse",
        "documentation" : "Success. The group was deployed."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a deployment."
    },
    "CreateDeviceDefinition" : {
      "name" : "CreateDeviceDefinition",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/devices",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateDeviceDefinitionRequest"
      },
      "output" : {
        "shape" : "CreateDeviceDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time."
    },
    "CreateDeviceDefinitionVersion" : {
      "name" : "CreateDeviceDefinitionVersion",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/devices/{DeviceDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateDeviceDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "CreateDeviceDefinitionVersionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a version of a device definition that has already been defined."
    },
    "CreateFunctionDefinition" : {
      "name" : "CreateFunctionDefinition",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/functions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateFunctionDefinitionRequest"
      },
      "output" : {
        "shape" : "CreateFunctionDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later."
    },
    "CreateFunctionDefinitionVersion" : {
      "name" : "CreateFunctionDefinitionVersion",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/functions/{FunctionDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateFunctionDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "CreateFunctionDefinitionVersionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a version of a Lambda function definition that has already been defined."
    },
    "CreateGroup" : {
      "name" : "CreateGroup",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/groups",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateGroupRequest"
      },
      "output" : {
        "shape" : "CreateGroupResponse",
        "documentation" : "Success. The group was created."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time."
    },
    "CreateGroupCertificateAuthority" : {
      "name" : "CreateGroupCertificateAuthority",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/groups/{GroupId}/certificateauthorities",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateGroupCertificateAuthorityRequest"
      },
      "output" : {
        "shape" : "CreateGroupCertificateAuthorityResponse",
        "documentation" : "Success. The response body contains the new active CA ARN."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Creates a CA for the group. If a CA already exists, it will rotate the existing CA."
    },
    "CreateGroupVersion" : {
      "name" : "CreateGroupVersion",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/groups/{GroupId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateGroupVersionRequest"
      },
      "output" : {
        "shape" : "CreateGroupVersionResponse",
        "documentation" : "Success. The response contains information about the group version."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a version of a group which has already been defined."
    },
    "CreateLoggerDefinition" : {
      "name" : "CreateLoggerDefinition",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/loggers",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateLoggerDefinitionRequest"
      },
      "output" : {
        "shape" : "CreateLoggerDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time."
    },
    "CreateLoggerDefinitionVersion" : {
      "name" : "CreateLoggerDefinitionVersion",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/loggers/{LoggerDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateLoggerDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "CreateLoggerDefinitionVersionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a version of a logger definition that has already been defined."
    },
    "CreateResourceDefinition" : {
      "name" : "CreateResourceDefinition",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/resources",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateResourceDefinitionRequest"
      },
      "output" : {
        "shape" : "CreateResourceDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later."
    },
    "CreateResourceDefinitionVersion" : {
      "name" : "CreateResourceDefinitionVersion",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/resources/{ResourceDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateResourceDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "CreateResourceDefinitionVersionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a version of a resource definition that has already been defined."
    },
    "CreateSoftwareUpdateJob" : {
      "name" : "CreateSoftwareUpdateJob",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/updates",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateSoftwareUpdateJobRequest"
      },
      "output" : {
        "shape" : "CreateSoftwareUpdateJobResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job."
    },
    "CreateSubscriptionDefinition" : {
      "name" : "CreateSubscriptionDefinition",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/subscriptions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateSubscriptionDefinitionRequest"
      },
      "output" : {
        "shape" : "CreateSubscriptionDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time."
    },
    "CreateSubscriptionDefinitionVersion" : {
      "name" : "CreateSubscriptionDefinitionVersion",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateSubscriptionDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "CreateSubscriptionDefinitionVersionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Creates a version of a subscription definition which has already been defined."
    },
    "DeleteCoreDefinition" : {
      "name" : "DeleteCoreDefinition",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/definition/cores/{CoreDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteCoreDefinitionRequest"
      },
      "output" : {
        "shape" : "DeleteCoreDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Deletes a core definition."
    },
    "DeleteDeviceDefinition" : {
      "name" : "DeleteDeviceDefinition",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/definition/devices/{DeviceDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteDeviceDefinitionRequest"
      },
      "output" : {
        "shape" : "DeleteDeviceDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Deletes a device definition."
    },
    "DeleteFunctionDefinition" : {
      "name" : "DeleteFunctionDefinition",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/definition/functions/{FunctionDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteFunctionDefinitionRequest"
      },
      "output" : {
        "shape" : "DeleteFunctionDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Deletes a Lambda function definition."
    },
    "DeleteGroup" : {
      "name" : "DeleteGroup",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/groups/{GroupId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteGroupRequest"
      },
      "output" : {
        "shape" : "DeleteGroupResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Deletes a group."
    },
    "DeleteLoggerDefinition" : {
      "name" : "DeleteLoggerDefinition",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/definition/loggers/{LoggerDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteLoggerDefinitionRequest"
      },
      "output" : {
        "shape" : "DeleteLoggerDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Deletes a logger definition."
    },
    "DeleteResourceDefinition" : {
      "name" : "DeleteResourceDefinition",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/definition/resources/{ResourceDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteResourceDefinitionRequest"
      },
      "output" : {
        "shape" : "DeleteResourceDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Deletes a resource definition."
    },
    "DeleteSubscriptionDefinition" : {
      "name" : "DeleteSubscriptionDefinition",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteSubscriptionDefinitionRequest"
      },
      "output" : {
        "shape" : "DeleteSubscriptionDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Deletes a subscription definition."
    },
    "DisassociateRoleFromGroup" : {
      "name" : "DisassociateRoleFromGroup",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/groups/{GroupId}/role",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DisassociateRoleFromGroupRequest"
      },
      "output" : {
        "shape" : "DisassociateRoleFromGroupResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Disassociates the role from a group."
    },
    "DisassociateServiceRoleFromAccount" : {
      "name" : "DisassociateServiceRoleFromAccount",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/greengrass/servicerole",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DisassociateServiceRoleFromAccountRequest"
      },
      "output" : {
        "shape" : "DisassociateServiceRoleFromAccountResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Disassociates the service role from your account. Without a service role, deployments will not work."
    },
    "GetAssociatedRole" : {
      "name" : "GetAssociatedRole",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}/role",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetAssociatedRoleRequest"
      },
      "output" : {
        "shape" : "GetAssociatedRoleResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Retrieves the role associated with a particular group."
    },
    "GetConnectivityInfo" : {
      "name" : "GetConnectivityInfo",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/things/{ThingName}/connectivityInfo",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetConnectivityInfoRequest"
      },
      "output" : {
        "shape" : "GetConnectivityInfoResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Retrieves the connectivity information for a core."
    },
    "GetCoreDefinition" : {
      "name" : "GetCoreDefinition",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/cores/{CoreDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetCoreDefinitionRequest"
      },
      "output" : {
        "shape" : "GetCoreDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a core definition version."
    },
    "GetCoreDefinitionVersion" : {
      "name" : "GetCoreDefinitionVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetCoreDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "GetCoreDefinitionVersionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a core definition version."
    },
    "GetDeploymentStatus" : {
      "name" : "GetDeploymentStatus",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetDeploymentStatusRequest"
      },
      "output" : {
        "shape" : "GetDeploymentStatusResponse",
        "documentation" : "Success. The response body contains the status of the deployment for the group."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Returns the status of a deployment."
    },
    "GetDeviceDefinition" : {
      "name" : "GetDeviceDefinition",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/devices/{DeviceDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetDeviceDefinitionRequest"
      },
      "output" : {
        "shape" : "GetDeviceDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a device definition."
    },
    "GetDeviceDefinitionVersion" : {
      "name" : "GetDeviceDefinitionVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetDeviceDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "GetDeviceDefinitionVersionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a device definition version."
    },
    "GetFunctionDefinition" : {
      "name" : "GetFunctionDefinition",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/functions/{FunctionDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetFunctionDefinitionRequest"
      },
      "output" : {
        "shape" : "GetFunctionDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a Lambda function definition, including its creation time and latest version."
    },
    "GetFunctionDefinitionVersion" : {
      "name" : "GetFunctionDefinitionVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetFunctionDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "GetFunctionDefinitionVersionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations."
    },
    "GetGroup" : {
      "name" : "GetGroup",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetGroupRequest"
      },
      "output" : {
        "shape" : "GetGroupResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a group."
    },
    "GetGroupCertificateAuthority" : {
      "name" : "GetGroupCertificateAuthority",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetGroupCertificateAuthorityRequest"
      },
      "output" : {
        "shape" : "GetGroupCertificateAuthorityResponse",
        "documentation" : "Success. The response body contains the PKI Configuration."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Retreives the CA associated with a group. Returns the public key of the CA."
    },
    "GetGroupCertificateConfiguration" : {
      "name" : "GetGroupCertificateConfiguration",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetGroupCertificateConfigurationRequest"
      },
      "output" : {
        "shape" : "GetGroupCertificateConfigurationResponse",
        "documentation" : "Success. The response body contains the PKI Configuration."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Retrieves the current configuration for the CA used by the group."
    },
    "GetGroupVersion" : {
      "name" : "GetGroupVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}/versions/{GroupVersionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetGroupVersionRequest"
      },
      "output" : {
        "shape" : "GetGroupVersionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a group version."
    },
    "GetLoggerDefinition" : {
      "name" : "GetLoggerDefinition",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/loggers/{LoggerDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetLoggerDefinitionRequest"
      },
      "output" : {
        "shape" : "GetLoggerDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a logger definition."
    },
    "GetLoggerDefinitionVersion" : {
      "name" : "GetLoggerDefinitionVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetLoggerDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "GetLoggerDefinitionVersionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a logger definition version."
    },
    "GetResourceDefinition" : {
      "name" : "GetResourceDefinition",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/resources/{ResourceDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetResourceDefinitionRequest"
      },
      "output" : {
        "shape" : "GetResourceDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a resource definition, including its creation time and latest version."
    },
    "GetResourceDefinitionVersion" : {
      "name" : "GetResourceDefinitionVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetResourceDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "GetResourceDefinitionVersionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a resource definition version, including which resources are included in the version."
    },
    "GetServiceRoleForAccount" : {
      "name" : "GetServiceRoleForAccount",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/servicerole",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetServiceRoleForAccountRequest"
      },
      "output" : {
        "shape" : "GetServiceRoleForAccountResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Retrieves the service role that is attached to your account."
    },
    "GetSubscriptionDefinition" : {
      "name" : "GetSubscriptionDefinition",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSubscriptionDefinitionRequest"
      },
      "output" : {
        "shape" : "GetSubscriptionDefinitionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a subscription definition."
    },
    "GetSubscriptionDefinitionVersion" : {
      "name" : "GetSubscriptionDefinitionVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSubscriptionDefinitionVersionRequest"
      },
      "output" : {
        "shape" : "GetSubscriptionDefinitionVersionResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Retrieves information about a subscription definition version."
    },
    "ListCoreDefinitionVersions" : {
      "name" : "ListCoreDefinitionVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/cores/{CoreDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListCoreDefinitionVersionsRequest"
      },
      "output" : {
        "shape" : "ListCoreDefinitionVersionsResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Lists the versions of a core definition."
    },
    "ListCoreDefinitions" : {
      "name" : "ListCoreDefinitions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/cores",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListCoreDefinitionsRequest"
      },
      "output" : {
        "shape" : "ListCoreDefinitionsResponse"
      },
      "errors" : [ ],
      "documentation" : "Retrieves a list of core definitions."
    },
    "ListDeployments" : {
      "name" : "ListDeployments",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}/deployments",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListDeploymentsRequest"
      },
      "output" : {
        "shape" : "ListDeploymentsResponse",
        "documentation" : "Success. The response body contains the list of deployments for the given group."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Returns a history of deployments for the group."
    },
    "ListDeviceDefinitionVersions" : {
      "name" : "ListDeviceDefinitionVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/devices/{DeviceDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListDeviceDefinitionVersionsRequest"
      },
      "output" : {
        "shape" : "ListDeviceDefinitionVersionsResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Lists the versions of a device definition."
    },
    "ListDeviceDefinitions" : {
      "name" : "ListDeviceDefinitions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/devices",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListDeviceDefinitionsRequest"
      },
      "output" : {
        "shape" : "ListDeviceDefinitionsResponse"
      },
      "errors" : [ ],
      "documentation" : "Retrieves a list of device definitions."
    },
    "ListFunctionDefinitionVersions" : {
      "name" : "ListFunctionDefinitionVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/functions/{FunctionDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListFunctionDefinitionVersionsRequest"
      },
      "output" : {
        "shape" : "ListFunctionDefinitionVersionsResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Lists the versions of a Lambda function definition."
    },
    "ListFunctionDefinitions" : {
      "name" : "ListFunctionDefinitions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/functions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListFunctionDefinitionsRequest"
      },
      "output" : {
        "shape" : "ListFunctionDefinitionsResponse",
        "documentation" : "Success. The response contains the IDs of all the Greengrass Lambda function definitions in this account."
      },
      "errors" : [ ],
      "documentation" : "Retrieves a list of Lambda function definitions."
    },
    "ListGroupCertificateAuthorities" : {
      "name" : "ListGroupCertificateAuthorities",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}/certificateauthorities",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListGroupCertificateAuthoritiesRequest"
      },
      "output" : {
        "shape" : "ListGroupCertificateAuthoritiesResponse",
        "documentation" : "Success. The response body contains the PKI Configuration."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Retrieves the current CAs for a group."
    },
    "ListGroupVersions" : {
      "name" : "ListGroupVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups/{GroupId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListGroupVersionsRequest"
      },
      "output" : {
        "shape" : "ListGroupVersionsResponse",
        "documentation" : "Success. The response contains the list of versions and metadata for the given group."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Lists the versions of a group."
    },
    "ListGroups" : {
      "name" : "ListGroups",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/groups",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListGroupsRequest"
      },
      "output" : {
        "shape" : "ListGroupsResponse"
      },
      "errors" : [ ],
      "documentation" : "Retrieves a list of groups."
    },
    "ListLoggerDefinitionVersions" : {
      "name" : "ListLoggerDefinitionVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/loggers/{LoggerDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListLoggerDefinitionVersionsRequest"
      },
      "output" : {
        "shape" : "ListLoggerDefinitionVersionsResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Lists the versions of a logger definition."
    },
    "ListLoggerDefinitions" : {
      "name" : "ListLoggerDefinitions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/loggers",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListLoggerDefinitionsRequest"
      },
      "output" : {
        "shape" : "ListLoggerDefinitionsResponse"
      },
      "errors" : [ ],
      "documentation" : "Retrieves a list of logger definitions."
    },
    "ListResourceDefinitionVersions" : {
      "name" : "ListResourceDefinitionVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/resources/{ResourceDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListResourceDefinitionVersionsRequest"
      },
      "output" : {
        "shape" : "ListResourceDefinitionVersionsResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Lists the versions of a resource definition."
    },
    "ListResourceDefinitions" : {
      "name" : "ListResourceDefinitions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/resources",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListResourceDefinitionsRequest"
      },
      "output" : {
        "shape" : "ListResourceDefinitionsResponse",
        "documentation" : "The IDs of all the Greengrass resource definitions in this account."
      },
      "errors" : [ ],
      "documentation" : "Retrieves a list of resource definitions."
    },
    "ListSubscriptionDefinitionVersions" : {
      "name" : "ListSubscriptionDefinitionVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListSubscriptionDefinitionVersionsRequest"
      },
      "output" : {
        "shape" : "ListSubscriptionDefinitionVersionsResponse"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Lists the versions of a subscription definition."
    },
    "ListSubscriptionDefinitions" : {
      "name" : "ListSubscriptionDefinitions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/greengrass/definition/subscriptions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListSubscriptionDefinitionsRequest"
      },
      "output" : {
        "shape" : "ListSubscriptionDefinitionsResponse"
      },
      "errors" : [ ],
      "documentation" : "Retrieves a list of subscription definitions."
    },
    "ResetDeployments" : {
      "name" : "ResetDeployments",
      "http" : {
        "method" : "POST",
        "requestUri" : "/greengrass/groups/{GroupId}/deployments/$reset",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ResetDeploymentsRequest"
      },
      "output" : {
        "shape" : "ResetDeploymentsResponse",
        "documentation" : "Success. The group's deployments were reset."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Resets a group's deployments."
    },
    "UpdateConnectivityInfo" : {
      "name" : "UpdateConnectivityInfo",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/things/{ThingName}/connectivityInfo",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateConnectivityInfoRequest"
      },
      "output" : {
        "shape" : "UpdateConnectivityInfoResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it."
    },
    "UpdateCoreDefinition" : {
      "name" : "UpdateCoreDefinition",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/definition/cores/{CoreDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateCoreDefinitionRequest"
      },
      "output" : {
        "shape" : "UpdateCoreDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Updates a core definition."
    },
    "UpdateDeviceDefinition" : {
      "name" : "UpdateDeviceDefinition",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/definition/devices/{DeviceDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateDeviceDefinitionRequest"
      },
      "output" : {
        "shape" : "UpdateDeviceDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Updates a device definition."
    },
    "UpdateFunctionDefinition" : {
      "name" : "UpdateFunctionDefinition",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/definition/functions/{FunctionDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateFunctionDefinitionRequest"
      },
      "output" : {
        "shape" : "UpdateFunctionDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Updates a Lambda function definition."
    },
    "UpdateGroup" : {
      "name" : "UpdateGroup",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/groups/{GroupId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateGroupRequest"
      },
      "output" : {
        "shape" : "UpdateGroupResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Updates a group."
    },
    "UpdateGroupCertificateConfiguration" : {
      "name" : "UpdateGroupCertificateConfiguration",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateGroupCertificateConfigurationRequest"
      },
      "output" : {
        "shape" : "UpdateGroupCertificateConfigurationResponse",
        "documentation" : "Success. The response body contains the PKI Configuration."
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "server error"
      } ],
      "documentation" : "Updates the Certificate expiry time for a group."
    },
    "UpdateLoggerDefinition" : {
      "name" : "UpdateLoggerDefinition",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/definition/loggers/{LoggerDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateLoggerDefinitionRequest"
      },
      "output" : {
        "shape" : "UpdateLoggerDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Updates a logger definition."
    },
    "UpdateResourceDefinition" : {
      "name" : "UpdateResourceDefinition",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/definition/resources/{ResourceDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateResourceDefinitionRequest"
      },
      "output" : {
        "shape" : "UpdateResourceDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Updates a resource definition."
    },
    "UpdateSubscriptionDefinition" : {
      "name" : "UpdateSubscriptionDefinition",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateSubscriptionDefinitionRequest"
      },
      "output" : {
        "shape" : "UpdateSubscriptionDefinitionResponse",
        "documentation" : "success"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "invalid request"
      } ],
      "documentation" : "Updates a subscription definition."
    }
  },
  "shapes" : {
    "AssociateRoleToGroupRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the role you wish to associate with this group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "AssociateRoleToGroupResponse" : {
      "type" : "structure",
      "members" : {
        "AssociatedAt" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the role ARN was associated with the group."
        }
      }
    },
    "AssociateServiceRoleToAccountRequest" : {
      "type" : "structure",
      "members" : {
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the service role you wish to associate with your account."
        }
      }
    },
    "AssociateServiceRoleToAccountResponse" : {
      "type" : "structure",
      "members" : {
        "AssociatedAt" : {
          "shape" : "__string",
          "documentation" : "The time when the service role was associated with the account."
        }
      }
    },
    "BadRequestException" : {
      "type" : "structure",
      "members" : {
        "ErrorDetails" : {
          "shape" : "ErrorDetails",
          "documentation" : "Details about the error."
        },
        "Message" : {
          "shape" : "__string",
          "documentation" : "A message containing information about the error."
        }
      },
      "documentation" : "General error information.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 400
      }
    },
    "ConnectivityInfo" : {
      "type" : "structure",
      "members" : {
        "HostAddress" : {
          "shape" : "__string",
          "documentation" : "The endpoint for the Greengrass core. Can be an IP address or DNS."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the connectivity information."
        },
        "Metadata" : {
          "shape" : "__string",
          "documentation" : "Metadata for this endpoint."
        },
        "PortNumber" : {
          "shape" : "__integer",
          "documentation" : "The port of the Greengrass core. Usually 8883."
        }
      },
      "documentation" : "Information about a Greengrass core's connectivity."
    },
    "Core" : {
      "type" : "structure",
      "members" : {
        "CertificateArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the certificate associated with the core."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the core."
        },
        "SyncShadow" : {
          "shape" : "__boolean",
          "documentation" : "If true, the core's local shadow is automatically synced with the cloud."
        },
        "ThingArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the thing which is the core."
        }
      },
      "documentation" : "Information about a core.",
      "required" : [ ]
    },
    "CoreDefinitionVersion" : {
      "type" : "structure",
      "members" : {
        "Cores" : {
          "shape" : "__listOfCore",
          "documentation" : "A list of cores in the core definition version."
        }
      },
      "documentation" : "Information about a core definition version."
    },
    "CreateCoreDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "InitialVersion" : {
          "shape" : "CoreDefinitionVersion",
          "documentation" : "Information about the initial version of the core definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the core definition."
        }
      },
      "documentation" : "Information needed to create a core definition."
    },
    "CreateCoreDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "CreateCoreDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "CoreDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "CoreDefinitionId",
          "documentation" : "The ID of the core definition."
        },
        "Cores" : {
          "shape" : "__listOfCore",
          "documentation" : "A list of cores in the core definition version."
        }
      },
      "required" : [ "CoreDefinitionId" ]
    },
    "CreateCoreDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the version was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the version."
        }
      }
    },
    "CreateDeploymentRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "DeploymentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the deployment if you wish to redeploy a previous deployment."
        },
        "DeploymentType" : {
          "shape" : "DeploymentType",
          "documentation" : "The type of deployment. When used in ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid."
        },
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        },
        "GroupVersionId" : {
          "shape" : "__string",
          "documentation" : "The ID of the group version to be deployed."
        }
      },
      "required" : [ "GroupId" ]
    },
    "CreateDeploymentResponse" : {
      "type" : "structure",
      "members" : {
        "DeploymentArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the deployment."
        },
        "DeploymentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the deployment."
        }
      }
    },
    "CreateDeviceDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "InitialVersion" : {
          "shape" : "DeviceDefinitionVersion",
          "documentation" : "Information about the initial version of the device definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the device definition."
        }
      }
    },
    "CreateDeviceDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "CreateDeviceDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "DeviceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "DeviceDefinitionId",
          "documentation" : "The ID of the device definition."
        },
        "Devices" : {
          "shape" : "__listOfDevice",
          "documentation" : "A list of devices in the definition version."
        }
      },
      "required" : [ "DeviceDefinitionId" ]
    },
    "CreateDeviceDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the version was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the version."
        }
      }
    },
    "CreateFunctionDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "InitialVersion" : {
          "shape" : "FunctionDefinitionVersion",
          "documentation" : "Information about the initial version of the function definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the function definition."
        }
      }
    },
    "CreateFunctionDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "CreateFunctionDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "FunctionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "FunctionDefinitionId",
          "documentation" : "The ID of the Lambda function definition."
        },
        "Functions" : {
          "shape" : "__listOfFunction",
          "documentation" : "A list of Lambda functions in this function definition version."
        }
      },
      "documentation" : "Information needed to create a function definition version.",
      "required" : [ "FunctionDefinitionId" ]
    },
    "CreateFunctionDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the version was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the version."
        }
      }
    },
    "CreateGroupCertificateAuthorityRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "CreateGroupCertificateAuthorityResponse" : {
      "type" : "structure",
      "members" : {
        "GroupCertificateAuthorityArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the group certificate authority."
        }
      }
    },
    "CreateGroupRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "InitialVersion" : {
          "shape" : "GroupVersion",
          "documentation" : "Information about the initial version of the group."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the group."
        }
      }
    },
    "CreateGroupResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "CreateGroupVersionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "CoreDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the core definition version for this group."
        },
        "DeviceDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the device definition version for this group."
        },
        "FunctionDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the function definition version for this group."
        },
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        },
        "LoggerDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the logger definition version for this group."
        },
        "ResourceDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The resource definition version ARN for this group."
        },
        "SubscriptionDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the subscription definition version for this group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "CreateGroupVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the version was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the version."
        }
      }
    },
    "CreateLoggerDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "InitialVersion" : {
          "shape" : "LoggerDefinitionVersion",
          "documentation" : "Information about the initial version of the logger definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the logger definition."
        }
      }
    },
    "CreateLoggerDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "CreateLoggerDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "LoggerDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "LoggerDefinitionId",
          "documentation" : "The ID of the logger definition."
        },
        "Loggers" : {
          "shape" : "__listOfLogger",
          "documentation" : "A list of loggers."
        }
      },
      "required" : [ "LoggerDefinitionId" ]
    },
    "CreateLoggerDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the version was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the version."
        }
      }
    },
    "CreateResourceDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "InitialVersion" : {
          "shape" : "ResourceDefinitionVersion",
          "documentation" : "Information about the initial version of the resource definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the resource definition."
        }
      }
    },
    "CreateResourceDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "CreateResourceDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "ResourceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ResourceDefinitionId",
          "documentation" : "The ID of the resource definition."
        },
        "Resources" : {
          "shape" : "__listOfResource",
          "documentation" : "A list of resources."
        }
      },
      "required" : [ "ResourceDefinitionId" ]
    },
    "CreateResourceDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the version was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the version."
        }
      }
    },
    "CreateSoftwareUpdateJobRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "S3UrlSignerRole" : {
          "shape" : "S3UrlSignerRole"
        },
        "SoftwareToUpdate" : {
          "shape" : "SoftwareToUpdate"
        },
        "UpdateAgentLogLevel" : {
          "shape" : "UpdateAgentLogLevel"
        },
        "UpdateTargets" : {
          "shape" : "UpdateTargets"
        },
        "UpdateTargetsArchitecture" : {
          "shape" : "UpdateTargetsArchitecture"
        },
        "UpdateTargetsOperatingSystem" : {
          "shape" : "UpdateTargetsOperatingSystem"
        }
      }
    },
    "CreateSoftwareUpdateJobResponse" : {
      "type" : "structure",
      "members" : {
        "IotJobArn" : {
          "shape" : "__string",
          "documentation" : "The IoT Job ARN corresponding to this update."
        },
        "IotJobId" : {
          "shape" : "__string",
          "documentation" : "The IoT Job Id corresponding to this update."
        }
      }
    },
    "CreateSubscriptionDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "InitialVersion" : {
          "shape" : "SubscriptionDefinitionVersion",
          "documentation" : "Information about the initial version of the subscription definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the subscription definition."
        }
      }
    },
    "CreateSubscriptionDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "CreateSubscriptionDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "SubscriptionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "SubscriptionDefinitionId",
          "documentation" : "The ID of the subscription definition."
        },
        "Subscriptions" : {
          "shape" : "__listOfSubscription",
          "documentation" : "A list of subscriptions."
        }
      },
      "required" : [ "SubscriptionDefinitionId" ]
    },
    "CreateSubscriptionDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the version was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the version."
        }
      }
    },
    "DefinitionInformation" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      },
      "documentation" : "Information about a definition."
    },
    "DeleteCoreDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "CoreDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "CoreDefinitionId",
          "documentation" : "The ID of the core definition."
        }
      },
      "required" : [ "CoreDefinitionId" ]
    },
    "DeleteCoreDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteDeviceDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "DeviceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "DeviceDefinitionId",
          "documentation" : "The ID of the device definition."
        }
      },
      "required" : [ "DeviceDefinitionId" ]
    },
    "DeleteDeviceDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteFunctionDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "FunctionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "FunctionDefinitionId",
          "documentation" : "The ID of the Lambda function definition."
        }
      },
      "required" : [ "FunctionDefinitionId" ]
    },
    "DeleteFunctionDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteGroupRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "DeleteGroupResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteLoggerDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "LoggerDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "LoggerDefinitionId",
          "documentation" : "The ID of the logger definition."
        }
      },
      "required" : [ "LoggerDefinitionId" ]
    },
    "DeleteLoggerDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteResourceDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "ResourceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ResourceDefinitionId",
          "documentation" : "The ID of the resource definition."
        }
      },
      "required" : [ "ResourceDefinitionId" ]
    },
    "DeleteResourceDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteSubscriptionDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "SubscriptionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "SubscriptionDefinitionId",
          "documentation" : "The ID of the subscription definition."
        }
      },
      "required" : [ "SubscriptionDefinitionId" ]
    },
    "DeleteSubscriptionDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "Deployment" : {
      "type" : "structure",
      "members" : {
        "CreatedAt" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the deployment was created."
        },
        "DeploymentArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the deployment."
        },
        "DeploymentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the deployment."
        },
        "DeploymentType" : {
          "shape" : "DeploymentType",
          "documentation" : "The type of the deployment."
        },
        "GroupArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the group for this deployment."
        }
      },
      "documentation" : "Information about a deployment."
    },
    "DeploymentType" : {
      "type" : "string",
      "enum" : [ "NewDeployment", "Redeployment", "ResetDeployment", "ForceResetDeployment" ]
    },
    "Deployments" : {
      "type" : "list",
      "member" : {
        "shape" : "Deployment"
      }
    },
    "Device" : {
      "type" : "structure",
      "members" : {
        "CertificateArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the certificate associated with the device."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the device."
        },
        "SyncShadow" : {
          "shape" : "__boolean",
          "documentation" : "If true, the device's local shadow will be automatically synced with the cloud."
        },
        "ThingArn" : {
          "shape" : "__string",
          "documentation" : "The thing ARN of the device."
        }
      },
      "documentation" : "Information about a device.",
      "required" : [ ]
    },
    "DeviceDefinitionVersion" : {
      "type" : "structure",
      "members" : {
        "Devices" : {
          "shape" : "__listOfDevice",
          "documentation" : "A list of devices in the definition version."
        }
      },
      "documentation" : "Information about a device definition version."
    },
    "DisassociateRoleFromGroupRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "DisassociateRoleFromGroupResponse" : {
      "type" : "structure",
      "members" : {
        "DisassociatedAt" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the role was disassociated from the group."
        }
      }
    },
    "DisassociateServiceRoleFromAccountRequest" : {
      "type" : "structure",
      "members" : { }
    },
    "DisassociateServiceRoleFromAccountResponse" : {
      "type" : "structure",
      "members" : {
        "DisassociatedAt" : {
          "shape" : "__string",
          "documentation" : "The time when the service role was disassociated from the account."
        }
      }
    },
    "Empty" : {
      "type" : "structure",
      "members" : { },
      "documentation" : "Empty"
    },
    "EncodingType" : {
      "type" : "string",
      "enum" : [ "binary", "json" ]
    },
    "ErrorDetail" : {
      "type" : "structure",
      "members" : {
        "DetailedErrorCode" : {
          "shape" : "__string",
          "documentation" : "A detailed error code."
        },
        "DetailedErrorMessage" : {
          "shape" : "__string",
          "documentation" : "A detailed error message."
        }
      },
      "documentation" : "Details about the error."
    },
    "ErrorDetails" : {
      "type" : "list",
      "documentation" : "A list of error details.",
      "member" : {
        "shape" : "ErrorDetail"
      }
    },
    "Function" : {
      "type" : "structure",
      "members" : {
        "FunctionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the Lambda function."
        },
        "FunctionConfiguration" : {
          "shape" : "FunctionConfiguration",
          "documentation" : "The configuration of the Lambda function."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the Lambda function."
        }
      },
      "documentation" : "Information about a Lambda function.",
      "required" : [ ]
    },
    "FunctionConfiguration" : {
      "type" : "structure",
      "members" : {
        "EncodingType" : {
          "shape" : "EncodingType",
          "documentation" : "The expected encoding type of the input payload for the function. The default is ''json''."
        },
        "Environment" : {
          "shape" : "FunctionConfigurationEnvironment",
          "documentation" : "The environment configuration of the function."
        },
        "ExecArgs" : {
          "shape" : "__string",
          "documentation" : "The execution arguments."
        },
        "Executable" : {
          "shape" : "__string",
          "documentation" : "The name of the function executable."
        },
        "MemorySize" : {
          "shape" : "__integer",
          "documentation" : "The memory size, in KB, which the function requires."
        },
        "Pinned" : {
          "shape" : "__boolean",
          "documentation" : "True if the function is pinned. Pinned means the function is long-lived and starts when the core starts."
        },
        "Timeout" : {
          "shape" : "__integer",
          "documentation" : "The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned lambdas for each request."
        }
      },
      "documentation" : "The configuration of the Lambda function."
    },
    "FunctionConfigurationEnvironment" : {
      "type" : "structure",
      "members" : {
        "AccessSysfs" : {
          "shape" : "__boolean",
          "documentation" : "If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys."
        },
        "ResourceAccessPolicies" : {
          "shape" : "__listOfResourceAccessPolicy",
          "documentation" : "A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources."
        },
        "Variables" : {
          "shape" : "__mapOf__string",
          "documentation" : "Environment variables for the Lambda function's configuration."
        }
      },
      "documentation" : "The environment configuration of the function."
    },
    "FunctionDefinitionVersion" : {
      "type" : "structure",
      "members" : {
        "Functions" : {
          "shape" : "__listOfFunction",
          "documentation" : "A list of Lambda functions in this function definition version."
        }
      },
      "documentation" : "Information about a function definition version."
    },
    "GeneralError" : {
      "type" : "structure",
      "members" : {
        "ErrorDetails" : {
          "shape" : "ErrorDetails",
          "documentation" : "Details about the error."
        },
        "Message" : {
          "shape" : "__string",
          "documentation" : "A message containing information about the error."
        }
      },
      "documentation" : "General error information."
    },
    "GetAssociatedRoleRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "GetAssociatedRoleResponse" : {
      "type" : "structure",
      "members" : {
        "AssociatedAt" : {
          "shape" : "__string",
          "documentation" : "The time when the role was associated with the group."
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the role that is associated with the group."
        }
      }
    },
    "GetConnectivityInfoRequest" : {
      "type" : "structure",
      "members" : {
        "ThingName" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ThingName",
          "documentation" : "The thing name."
        }
      },
      "required" : [ "ThingName" ]
    },
    "GetConnectivityInfoResponse" : {
      "type" : "structure",
      "members" : {
        "ConnectivityInfo" : {
          "shape" : "__listOfConnectivityInfo",
          "documentation" : "Connectivity info list."
        },
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "A message about the connectivity info request."
        }
      }
    },
    "GetCoreDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "CoreDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "CoreDefinitionId",
          "documentation" : "The ID of the core definition."
        }
      },
      "required" : [ "CoreDefinitionId" ]
    },
    "GetCoreDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "GetCoreDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "CoreDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "CoreDefinitionId",
          "documentation" : "The ID of the core definition."
        },
        "CoreDefinitionVersionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "CoreDefinitionVersionId",
          "documentation" : "The ID of the core definition version."
        }
      },
      "required" : [ "CoreDefinitionId", "CoreDefinitionVersionId" ]
    },
    "GetCoreDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the core definition version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the core definition version was created."
        },
        "Definition" : {
          "shape" : "CoreDefinitionVersion",
          "documentation" : "Information about the core definition version."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the core definition version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The version of the core definition version."
        }
      }
    },
    "GetDeploymentStatusRequest" : {
      "type" : "structure",
      "members" : {
        "DeploymentId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "DeploymentId",
          "documentation" : "The ID of the deployment."
        },
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId", "DeploymentId" ]
    },
    "GetDeploymentStatusResponse" : {
      "type" : "structure",
      "members" : {
        "DeploymentStatus" : {
          "shape" : "__string",
          "documentation" : "The status of the deployment."
        },
        "DeploymentType" : {
          "shape" : "DeploymentType",
          "documentation" : "The type of the deployment."
        },
        "ErrorDetails" : {
          "shape" : "ErrorDetails",
          "documentation" : "Error details"
        },
        "ErrorMessage" : {
          "shape" : "__string",
          "documentation" : "Error message"
        },
        "UpdatedAt" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the deployment status was updated."
        }
      }
    },
    "GetDeviceDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "DeviceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "DeviceDefinitionId",
          "documentation" : "The ID of the device definition."
        }
      },
      "required" : [ "DeviceDefinitionId" ]
    },
    "GetDeviceDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "GetDeviceDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "DeviceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "DeviceDefinitionId",
          "documentation" : "The ID of the device definition."
        },
        "DeviceDefinitionVersionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "DeviceDefinitionVersionId",
          "documentation" : "The ID of the device definition version."
        }
      },
      "required" : [ "DeviceDefinitionVersionId", "DeviceDefinitionId" ]
    },
    "GetDeviceDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the device definition version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the device definition version was created."
        },
        "Definition" : {
          "shape" : "DeviceDefinitionVersion",
          "documentation" : "Information about the device definition version."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the device definition version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The version of the device definition version."
        }
      }
    },
    "GetFunctionDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "FunctionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "FunctionDefinitionId",
          "documentation" : "The ID of the Lambda function definition."
        }
      },
      "required" : [ "FunctionDefinitionId" ]
    },
    "GetFunctionDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "GetFunctionDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "FunctionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "FunctionDefinitionId",
          "documentation" : "The ID of the Lambda function definition."
        },
        "FunctionDefinitionVersionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "FunctionDefinitionVersionId",
          "documentation" : "The ID of the function definition version."
        }
      },
      "required" : [ "FunctionDefinitionId", "FunctionDefinitionVersionId" ]
    },
    "GetFunctionDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the function definition version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the function definition version was created."
        },
        "Definition" : {
          "shape" : "FunctionDefinitionVersion",
          "documentation" : "Information on the definition."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the function definition version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The version of the function definition version."
        }
      }
    },
    "GetGroupCertificateAuthorityRequest" : {
      "type" : "structure",
      "members" : {
        "CertificateAuthorityId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "CertificateAuthorityId",
          "documentation" : "The ID of the certificate authority."
        },
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "CertificateAuthorityId", "GroupId" ]
    },
    "GetGroupCertificateAuthorityResponse" : {
      "type" : "structure",
      "members" : {
        "GroupCertificateAuthorityArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the certificate authority for the group."
        },
        "GroupCertificateAuthorityId" : {
          "shape" : "__string",
          "documentation" : "The ID of the certificate authority for the group."
        },
        "PemEncodedCertificate" : {
          "shape" : "__string",
          "documentation" : "The PEM encoded certificate for the group."
        }
      }
    },
    "GetGroupCertificateConfigurationRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "GetGroupCertificateConfigurationResponse" : {
      "type" : "structure",
      "members" : {
        "CertificateAuthorityExpiryInMilliseconds" : {
          "shape" : "__string",
          "documentation" : "The amount of time remaining before the certificate authority expires, in milliseconds."
        },
        "CertificateExpiryInMilliseconds" : {
          "shape" : "__string",
          "documentation" : "The amount of time remaining before the certificate expires, in milliseconds."
        },
        "GroupId" : {
          "shape" : "__string",
          "documentation" : "The ID of the group certificate configuration."
        }
      }
    },
    "GetGroupRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "GetGroupResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "GetGroupVersionRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        },
        "GroupVersionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupVersionId",
          "documentation" : "The ID of the group version."
        }
      },
      "required" : [ "GroupVersionId", "GroupId" ]
    },
    "GetGroupVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the group version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the group version was created."
        },
        "Definition" : {
          "shape" : "GroupVersion",
          "documentation" : "Information about the group version definition."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the group version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID for the version of the group."
        }
      }
    },
    "GetLoggerDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "LoggerDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "LoggerDefinitionId",
          "documentation" : "The ID of the logger definition."
        }
      },
      "required" : [ "LoggerDefinitionId" ]
    },
    "GetLoggerDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "GetLoggerDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "LoggerDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "LoggerDefinitionId",
          "documentation" : "The ID of the logger definition."
        },
        "LoggerDefinitionVersionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "LoggerDefinitionVersionId",
          "documentation" : "The ID of the logger definition version."
        }
      },
      "required" : [ "LoggerDefinitionVersionId", "LoggerDefinitionId" ]
    },
    "GetLoggerDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the logger definition version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the logger definition version was created."
        },
        "Definition" : {
          "shape" : "LoggerDefinitionVersion",
          "documentation" : "Information about the logger definition version."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the logger definition version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The version of the logger definition version."
        }
      }
    },
    "GetResourceDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "ResourceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ResourceDefinitionId",
          "documentation" : "The ID of the resource definition."
        }
      },
      "required" : [ "ResourceDefinitionId" ]
    },
    "GetResourceDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "GetResourceDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "ResourceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ResourceDefinitionId",
          "documentation" : "The ID of the resource definition."
        },
        "ResourceDefinitionVersionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ResourceDefinitionVersionId",
          "documentation" : "The ID of the resource definition version."
        }
      },
      "required" : [ "ResourceDefinitionVersionId", "ResourceDefinitionId" ]
    },
    "GetResourceDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "Arn of the resource definition version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the resource definition version was created."
        },
        "Definition" : {
          "shape" : "ResourceDefinitionVersion",
          "documentation" : "Information about the definition."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the resource definition version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The version of the resource definition version."
        }
      }
    },
    "GetServiceRoleForAccountRequest" : {
      "type" : "structure",
      "members" : { }
    },
    "GetServiceRoleForAccountResponse" : {
      "type" : "structure",
      "members" : {
        "AssociatedAt" : {
          "shape" : "__string",
          "documentation" : "The time when the service role was associated with the account."
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the role which is associated with the account."
        }
      }
    },
    "GetSubscriptionDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "SubscriptionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "SubscriptionDefinitionId",
          "documentation" : "The ID of the subscription definition."
        }
      },
      "required" : [ "SubscriptionDefinitionId" ]
    },
    "GetSubscriptionDefinitionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the definition."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the definition."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the definition was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the definition."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      }
    },
    "GetSubscriptionDefinitionVersionRequest" : {
      "type" : "structure",
      "members" : {
        "SubscriptionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "SubscriptionDefinitionId",
          "documentation" : "The ID of the subscription definition."
        },
        "SubscriptionDefinitionVersionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "SubscriptionDefinitionVersionId",
          "documentation" : "The ID of the subscription definition version."
        }
      },
      "required" : [ "SubscriptionDefinitionId", "SubscriptionDefinitionVersionId" ]
    },
    "GetSubscriptionDefinitionVersionResponse" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the subscription definition version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the subscription definition version was created."
        },
        "Definition" : {
          "shape" : "SubscriptionDefinitionVersion",
          "documentation" : "Information about the subscription definition version."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the subscription definition version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The version of the subscription definition version."
        }
      }
    },
    "GroupCertificateAuthorityProperties" : {
      "type" : "structure",
      "members" : {
        "GroupCertificateAuthorityArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the certificate authority for the group."
        },
        "GroupCertificateAuthorityId" : {
          "shape" : "__string",
          "documentation" : "The ID of the certificate authority for the group."
        }
      },
      "documentation" : "Information about a certificate authority for a group."
    },
    "GroupCertificateConfiguration" : {
      "type" : "structure",
      "members" : {
        "CertificateAuthorityExpiryInMilliseconds" : {
          "shape" : "__string",
          "documentation" : "The amount of time remaining before the certificate authority expires, in milliseconds."
        },
        "CertificateExpiryInMilliseconds" : {
          "shape" : "__string",
          "documentation" : "The amount of time remaining before the certificate expires, in milliseconds."
        },
        "GroupId" : {
          "shape" : "__string",
          "documentation" : "The ID of the group certificate configuration."
        }
      },
      "documentation" : "Information about a group certificate configuration."
    },
    "GroupInformation" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the group."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the group was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the group."
        },
        "LastUpdatedTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the group was last updated."
        },
        "LatestVersion" : {
          "shape" : "__string",
          "documentation" : "The latest version of the group."
        },
        "LatestVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the latest version of the group."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the group."
        }
      },
      "documentation" : "Information about a group."
    },
    "GroupOwnerSetting" : {
      "type" : "structure",
      "members" : {
        "AutoAddGroupOwner" : {
          "shape" : "__boolean",
          "documentation" : "If true, GreenGrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group."
        },
        "GroupOwner" : {
          "shape" : "__string",
          "documentation" : "The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional."
        }
      },
      "documentation" : "Group owner related settings for local resources."
    },
    "GroupVersion" : {
      "type" : "structure",
      "members" : {
        "CoreDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the core definition version for this group."
        },
        "DeviceDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the device definition version for this group."
        },
        "FunctionDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the function definition version for this group."
        },
        "LoggerDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the logger definition version for this group."
        },
        "ResourceDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The resource definition version ARN for this group."
        },
        "SubscriptionDefinitionVersionArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the subscription definition version for this group."
        }
      },
      "documentation" : "Information about a group version."
    },
    "InternalServerErrorException" : {
      "type" : "structure",
      "members" : {
        "ErrorDetails" : {
          "shape" : "ErrorDetails",
          "documentation" : "Details about the error."
        },
        "Message" : {
          "shape" : "__string",
          "documentation" : "A message containing information about the error."
        }
      },
      "documentation" : "General error information.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 500
      }
    },
    "ListCoreDefinitionVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "CoreDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "CoreDefinitionId",
          "documentation" : "The ID of the core definition."
        },
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      },
      "required" : [ "CoreDefinitionId" ]
    },
    "ListCoreDefinitionVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "Versions" : {
          "shape" : "__listOfVersionInformation",
          "documentation" : "Information about a version."
        }
      }
    },
    "ListCoreDefinitionsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListCoreDefinitionsResponse" : {
      "type" : "structure",
      "members" : {
        "Definitions" : {
          "shape" : "__listOfDefinitionInformation",
          "documentation" : "Information about a definition."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListDefinitionsResponse" : {
      "type" : "structure",
      "members" : {
        "Definitions" : {
          "shape" : "__listOfDefinitionInformation",
          "documentation" : "Information about a definition."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      },
      "documentation" : "A list of definitions."
    },
    "ListDeploymentsRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        },
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      },
      "required" : [ "GroupId" ]
    },
    "ListDeploymentsResponse" : {
      "type" : "structure",
      "members" : {
        "Deployments" : {
          "shape" : "Deployments",
          "documentation" : "A list of deployments for the requested groups."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListDeviceDefinitionVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "DeviceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "DeviceDefinitionId",
          "documentation" : "The ID of the device definition."
        },
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      },
      "required" : [ "DeviceDefinitionId" ]
    },
    "ListDeviceDefinitionVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "Versions" : {
          "shape" : "__listOfVersionInformation",
          "documentation" : "Information about a version."
        }
      }
    },
    "ListDeviceDefinitionsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListDeviceDefinitionsResponse" : {
      "type" : "structure",
      "members" : {
        "Definitions" : {
          "shape" : "__listOfDefinitionInformation",
          "documentation" : "Information about a definition."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListFunctionDefinitionVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "FunctionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "FunctionDefinitionId",
          "documentation" : "The ID of the Lambda function definition."
        },
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      },
      "required" : [ "FunctionDefinitionId" ]
    },
    "ListFunctionDefinitionVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "Versions" : {
          "shape" : "__listOfVersionInformation",
          "documentation" : "Information about a version."
        }
      }
    },
    "ListFunctionDefinitionsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListFunctionDefinitionsResponse" : {
      "type" : "structure",
      "members" : {
        "Definitions" : {
          "shape" : "__listOfDefinitionInformation",
          "documentation" : "Information about a definition."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListGroupCertificateAuthoritiesRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "ListGroupCertificateAuthoritiesResponse" : {
      "type" : "structure",
      "members" : {
        "GroupCertificateAuthorities" : {
          "shape" : "__listOfGroupCertificateAuthorityProperties",
          "documentation" : "A list of certificate authorities associated with the group."
        }
      }
    },
    "ListGroupVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        },
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      },
      "required" : [ "GroupId" ]
    },
    "ListGroupVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "Versions" : {
          "shape" : "__listOfVersionInformation",
          "documentation" : "Information about a version."
        }
      }
    },
    "ListGroupsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListGroupsResponse" : {
      "type" : "structure",
      "members" : {
        "Groups" : {
          "shape" : "__listOfGroupInformation",
          "documentation" : "Information about a group."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListLoggerDefinitionVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "LoggerDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "LoggerDefinitionId",
          "documentation" : "The ID of the logger definition."
        },
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      },
      "required" : [ "LoggerDefinitionId" ]
    },
    "ListLoggerDefinitionVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "Versions" : {
          "shape" : "__listOfVersionInformation",
          "documentation" : "Information about a version."
        }
      }
    },
    "ListLoggerDefinitionsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListLoggerDefinitionsResponse" : {
      "type" : "structure",
      "members" : {
        "Definitions" : {
          "shape" : "__listOfDefinitionInformation",
          "documentation" : "Information about a definition."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListResourceDefinitionVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "ResourceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ResourceDefinitionId",
          "documentation" : "The ID of the resource definition."
        }
      },
      "required" : [ "ResourceDefinitionId" ]
    },
    "ListResourceDefinitionVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "Versions" : {
          "shape" : "__listOfVersionInformation",
          "documentation" : "Information about a version."
        }
      }
    },
    "ListResourceDefinitionsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListResourceDefinitionsResponse" : {
      "type" : "structure",
      "members" : {
        "Definitions" : {
          "shape" : "__listOfDefinitionInformation",
          "documentation" : "Information about a definition."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListSubscriptionDefinitionVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "SubscriptionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "SubscriptionDefinitionId",
          "documentation" : "The ID of the subscription definition."
        }
      },
      "required" : [ "SubscriptionDefinitionId" ]
    },
    "ListSubscriptionDefinitionVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "Versions" : {
          "shape" : "__listOfVersionInformation",
          "documentation" : "Information about a version."
        }
      }
    },
    "ListSubscriptionDefinitionsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "MaxResults",
          "documentation" : "The maximum number of results to be returned per request."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "NextToken",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListSubscriptionDefinitionsResponse" : {
      "type" : "structure",
      "members" : {
        "Definitions" : {
          "shape" : "__listOfDefinitionInformation",
          "documentation" : "Information about a definition."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        }
      }
    },
    "ListVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The token for the next set of results, or ''null'' if there are no additional results."
        },
        "Versions" : {
          "shape" : "__listOfVersionInformation",
          "documentation" : "Information about a version."
        }
      },
      "documentation" : "A list of versions."
    },
    "LocalDeviceResourceData" : {
      "type" : "structure",
      "members" : {
        "GroupOwnerSetting" : {
          "shape" : "GroupOwnerSetting",
          "documentation" : "Group/owner related settings for local resources."
        },
        "SourcePath" : {
          "shape" : "__string",
          "documentation" : "The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''."
        }
      },
      "documentation" : "Attributes that define a local device resource."
    },
    "LocalVolumeResourceData" : {
      "type" : "structure",
      "members" : {
        "DestinationPath" : {
          "shape" : "__string",
          "documentation" : "The absolute local path of the resource inside the lambda environment."
        },
        "GroupOwnerSetting" : {
          "shape" : "GroupOwnerSetting",
          "documentation" : "Allows you to configure additional group privileges for the Lambda process. This field is optional."
        },
        "SourcePath" : {
          "shape" : "__string",
          "documentation" : "The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''."
        }
      },
      "documentation" : "Attributes that define a local volume resource."
    },
    "Logger" : {
      "type" : "structure",
      "members" : {
        "Component" : {
          "shape" : "LoggerComponent",
          "documentation" : "The component that will be subject to logging."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The id of the logger."
        },
        "Level" : {
          "shape" : "LoggerLevel",
          "documentation" : "The level of the logs."
        },
        "Space" : {
          "shape" : "__integer",
          "documentation" : "The amount of file space, in KB, to use if the local file system is used for logging purposes."
        },
        "Type" : {
          "shape" : "LoggerType",
          "documentation" : "The type of log output which will be used."
        }
      },
      "documentation" : "Information about a logger",
      "required" : [ ]
    },
    "LoggerComponent" : {
      "type" : "string",
      "enum" : [ "GreengrassSystem", "Lambda" ]
    },
    "LoggerDefinitionVersion" : {
      "type" : "structure",
      "members" : {
        "Loggers" : {
          "shape" : "__listOfLogger",
          "documentation" : "A list of loggers."
        }
      },
      "documentation" : "Information about a logger definition version."
    },
    "LoggerLevel" : {
      "type" : "string",
      "enum" : [ "DEBUG", "INFO", "WARN", "ERROR", "FATAL" ]
    },
    "LoggerType" : {
      "type" : "string",
      "enum" : [ "FileSystem", "AWSCloudWatch" ]
    },
    "Permission" : {
      "type" : "string",
      "documentation" : "The type of permission a function has to access a resource.",
      "enum" : [ "ro", "rw" ]
    },
    "ResetDeploymentsRequest" : {
      "type" : "structure",
      "members" : {
        "AmznClientToken" : {
          "shape" : "__string",
          "location" : "header",
          "locationName" : "X-Amzn-Client-Token",
          "documentation" : "A client token used to correlate requests and responses."
        },
        "Force" : {
          "shape" : "__boolean",
          "documentation" : "If true, performs a best-effort only core reset."
        },
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "documentation" : "Information needed to reset deployments.",
      "required" : [ "GroupId" ]
    },
    "ResetDeploymentsResponse" : {
      "type" : "structure",
      "members" : {
        "DeploymentArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the deployment."
        },
        "DeploymentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the deployment."
        }
      }
    },
    "Resource" : {
      "type" : "structure",
      "members" : {
        "Id" : {
          "shape" : "__string",
          "documentation" : "The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The descriptive resource name, which is displayed on the Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group."
        },
        "ResourceDataContainer" : {
          "shape" : "ResourceDataContainer",
          "documentation" : "A container of data for all resource types."
        }
      },
      "documentation" : "Information about a resource.",
      "required" : [ ]
    },
    "ResourceAccessPolicy" : {
      "type" : "structure",
      "members" : {
        "Permission" : {
          "shape" : "Permission",
          "documentation" : "The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only)."
        },
        "ResourceId" : {
          "shape" : "__string",
          "documentation" : "The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)"
        }
      },
      "documentation" : "A policy used by the function to access a resource.",
      "required" : [ ]
    },
    "ResourceDataContainer" : {
      "type" : "structure",
      "members" : {
        "LocalDeviceResourceData" : {
          "shape" : "LocalDeviceResourceData",
          "documentation" : "Attributes that define the local device resource."
        },
        "LocalVolumeResourceData" : {
          "shape" : "LocalVolumeResourceData",
          "documentation" : "Attributes that define the local volume resource."
        },
        "S3MachineLearningModelResourceData" : {
          "shape" : "S3MachineLearningModelResourceData",
          "documentation" : "Attributes that define an S3 machine learning resource."
        },
        "SageMakerMachineLearningModelResourceData" : {
          "shape" : "SageMakerMachineLearningModelResourceData",
          "documentation" : "Attributes that define an SageMaker machine learning resource."
        }
      },
      "documentation" : "A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData''."
    },
    "ResourceDefinitionVersion" : {
      "type" : "structure",
      "members" : {
        "Resources" : {
          "shape" : "__listOfResource",
          "documentation" : "A list of resources."
        }
      },
      "documentation" : "Information about a resource definition version."
    },
    "S3MachineLearningModelResourceData" : {
      "type" : "structure",
      "members" : {
        "DestinationPath" : {
          "shape" : "__string",
          "documentation" : "The absolute local path of the resource inside the Lambda environment."
        },
        "S3Uri" : {
          "shape" : "__string",
          "documentation" : "The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format."
        }
      },
      "documentation" : "Attributes that define an S3 machine learning resource."
    },
    "S3UrlSignerRole" : {
      "type" : "string",
      "documentation" : "The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact."
    },
    "SageMakerMachineLearningModelResourceData" : {
      "type" : "structure",
      "members" : {
        "DestinationPath" : {
          "shape" : "__string",
          "documentation" : "The absolute local path of the resource inside the Lambda environment."
        },
        "SageMakerJobArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the SageMaker training job that represents the source model."
        }
      },
      "documentation" : "Attributes that define an SageMaker machine learning resource."
    },
    "SoftwareToUpdate" : {
      "type" : "string",
      "documentation" : "The piece of software on the Greengrass core that will be updated.",
      "enum" : [ "core", "ota_agent" ]
    },
    "Subscription" : {
      "type" : "structure",
      "members" : {
        "Id" : {
          "shape" : "__string",
          "documentation" : "The id of the subscription."
        },
        "Source" : {
          "shape" : "__string",
          "documentation" : "The source of the subscription. Can be a thing ARN, a Lambda function ARN, 'cloud' (which represents the IoT cloud), or 'GGShadowService'."
        },
        "Subject" : {
          "shape" : "__string",
          "documentation" : "The subject of the message."
        },
        "Target" : {
          "shape" : "__string",
          "documentation" : "Where the message is sent to. Can be a thing ARN, a Lambda function ARN, 'cloud' (which represents the IoT cloud), or 'GGShadowService'."
        }
      },
      "documentation" : "Information about a subscription.",
      "required" : [ ]
    },
    "SubscriptionDefinitionVersion" : {
      "type" : "structure",
      "members" : {
        "Subscriptions" : {
          "shape" : "__listOfSubscription",
          "documentation" : "A list of subscriptions."
        }
      },
      "documentation" : "Information about a subscription definition version."
    },
    "UpdateAgentLogLevel" : {
      "type" : "string",
      "documentation" : "The minimum level of log statements that should be logged by the OTA Agent during an update.",
      "enum" : [ "NONE", "TRACE", "DEBUG", "VERBOSE", "INFO", "WARN", "ERROR", "FATAL" ]
    },
    "UpdateConnectivityInfoRequest" : {
      "type" : "structure",
      "members" : {
        "ConnectivityInfo" : {
          "shape" : "__listOfConnectivityInfo",
          "documentation" : "A list of connectivity info."
        },
        "ThingName" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ThingName",
          "documentation" : "The thing name."
        }
      },
      "documentation" : "Connectivity information.",
      "required" : [ "ThingName" ]
    },
    "UpdateConnectivityInfoResponse" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "A message about the connectivity info update request."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The new version of the connectivity info."
        }
      }
    },
    "UpdateCoreDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "CoreDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "CoreDefinitionId",
          "documentation" : "The ID of the core definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      },
      "required" : [ "CoreDefinitionId" ]
    },
    "UpdateCoreDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateDeviceDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "DeviceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "DeviceDefinitionId",
          "documentation" : "The ID of the device definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      },
      "required" : [ "DeviceDefinitionId" ]
    },
    "UpdateDeviceDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateFunctionDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "FunctionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "FunctionDefinitionId",
          "documentation" : "The ID of the Lambda function definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      },
      "required" : [ "FunctionDefinitionId" ]
    },
    "UpdateFunctionDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateGroupCertificateConfigurationRequest" : {
      "type" : "structure",
      "members" : {
        "CertificateExpiryInMilliseconds" : {
          "shape" : "__string",
          "documentation" : "The amount of time remaining before the certificate expires, in milliseconds."
        },
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        }
      },
      "required" : [ "GroupId" ]
    },
    "UpdateGroupCertificateConfigurationResponse" : {
      "type" : "structure",
      "members" : {
        "CertificateAuthorityExpiryInMilliseconds" : {
          "shape" : "__string",
          "documentation" : "The amount of time remaining before the certificate authority expires, in milliseconds."
        },
        "CertificateExpiryInMilliseconds" : {
          "shape" : "__string",
          "documentation" : "The amount of time remaining before the certificate expires, in milliseconds."
        },
        "GroupId" : {
          "shape" : "__string",
          "documentation" : "The ID of the group certificate configuration."
        }
      }
    },
    "UpdateGroupRequest" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "GroupId",
          "documentation" : "The ID of the AWS Greengrass group."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      },
      "required" : [ "GroupId" ]
    },
    "UpdateGroupResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateLoggerDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "LoggerDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "LoggerDefinitionId",
          "documentation" : "The ID of the logger definition."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        }
      },
      "required" : [ "LoggerDefinitionId" ]
    },
    "UpdateLoggerDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateResourceDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        },
        "ResourceDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ResourceDefinitionId",
          "documentation" : "The ID of the resource definition."
        }
      },
      "required" : [ "ResourceDefinitionId" ]
    },
    "UpdateResourceDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateSubscriptionDefinitionRequest" : {
      "type" : "structure",
      "members" : {
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the definition."
        },
        "SubscriptionDefinitionId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "SubscriptionDefinitionId",
          "documentation" : "The ID of the subscription definition."
        }
      },
      "required" : [ "SubscriptionDefinitionId" ]
    },
    "UpdateSubscriptionDefinitionResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateTargets" : {
      "type" : "list",
      "documentation" : "The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.",
      "member" : {
        "shape" : "__string"
      }
    },
    "UpdateTargetsArchitecture" : {
      "type" : "string",
      "documentation" : "The architecture of the cores which are the targets of an update.",
      "enum" : [ "armv7l", "x86_64", "aarch64" ]
    },
    "UpdateTargetsOperatingSystem" : {
      "type" : "string",
      "documentation" : "The operating system of the cores which are the targets of an update.",
      "enum" : [ "ubuntu", "raspbian", "amazon_linux" ]
    },
    "VersionInformation" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "documentation" : "The ARN of the version."
        },
        "CreationTimestamp" : {
          "shape" : "__string",
          "documentation" : "The time, in milliseconds since the epoch, when the version was created."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The ID of the version."
        },
        "Version" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the version."
        }
      },
      "documentation" : "Information about a version."
    },
    "__boolean" : {
      "type" : "boolean"
    },
    "__double" : {
      "type" : "double"
    },
    "__integer" : {
      "type" : "integer"
    },
    "__listOfConnectivityInfo" : {
      "type" : "list",
      "member" : {
        "shape" : "ConnectivityInfo"
      }
    },
    "__listOfCore" : {
      "type" : "list",
      "member" : {
        "shape" : "Core"
      }
    },
    "__listOfDefinitionInformation" : {
      "type" : "list",
      "member" : {
        "shape" : "DefinitionInformation"
      }
    },
    "__listOfDevice" : {
      "type" : "list",
      "member" : {
        "shape" : "Device"
      }
    },
    "__listOfFunction" : {
      "type" : "list",
      "member" : {
        "shape" : "Function"
      }
    },
    "__listOfGroupCertificateAuthorityProperties" : {
      "type" : "list",
      "member" : {
        "shape" : "GroupCertificateAuthorityProperties"
      }
    },
    "__listOfGroupInformation" : {
      "type" : "list",
      "member" : {
        "shape" : "GroupInformation"
      }
    },
    "__listOfLogger" : {
      "type" : "list",
      "member" : {
        "shape" : "Logger"
      }
    },
    "__listOfResource" : {
      "type" : "list",
      "member" : {
        "shape" : "Resource"
      }
    },
    "__listOfResourceAccessPolicy" : {
      "type" : "list",
      "member" : {
        "shape" : "ResourceAccessPolicy"
      }
    },
    "__listOfSubscription" : {
      "type" : "list",
      "member" : {
        "shape" : "Subscription"
      }
    },
    "__listOfVersionInformation" : {
      "type" : "list",
      "member" : {
        "shape" : "VersionInformation"
      }
    },
    "__long" : {
      "type" : "long"
    },
    "__mapOf__string" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "__string"
      }
    },
    "__string" : {
      "type" : "string"
    },
    "__timestamp" : {
      "type" : "timestamp"
    }
  },
  "documentation" : "AWS Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally."
}
