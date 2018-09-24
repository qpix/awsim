awsim['devicefarm'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-06-23",
    "endpointPrefix":"devicefarm",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Device Farm",
    "serviceId":"Device Farm",
    "signatureVersion":"v4",
    "targetPrefix":"DeviceFarm_20150623",
    "uid":"devicefarm-2015-06-23"
  },
  "operations":{
    "CreateDevicePool":{
      "name":"CreateDevicePool",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDevicePoolRequest"},
      "output":{"shape":"CreateDevicePoolResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Creates a device pool.</p>"
    },
    "CreateInstanceProfile":{
      "name":"CreateInstanceProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateInstanceProfileRequest"},
      "output":{"shape":"CreateInstanceProfileResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Creates a profile that can be applied to one or more private fleet device instances.</p>"
    },
    "CreateNetworkProfile":{
      "name":"CreateNetworkProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateNetworkProfileRequest"},
      "output":{"shape":"CreateNetworkProfileResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Creates a network profile.</p>"
    },
    "CreateProject":{
      "name":"CreateProject",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateProjectRequest"},
      "output":{"shape":"CreateProjectResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Creates a new project.</p>"
    },
    "CreateRemoteAccessSession":{
      "name":"CreateRemoteAccessSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateRemoteAccessSessionRequest"},
      "output":{"shape":"CreateRemoteAccessSessionResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Specifies and starts a remote access session.</p>"
    },
    "CreateUpload":{
      "name":"CreateUpload",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateUploadRequest"},
      "output":{"shape":"CreateUploadResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Uploads an app or test scripts.</p>"
    },
    "CreateVPCEConfiguration":{
      "name":"CreateVPCEConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateVPCEConfigurationRequest"},
      "output":{"shape":"CreateVPCEConfigurationResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.</p>"
    },
    "DeleteDevicePool":{
      "name":"DeleteDevicePool",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDevicePoolRequest"},
      "output":{"shape":"DeleteDevicePoolResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.</p>"
    },
    "DeleteInstanceProfile":{
      "name":"DeleteInstanceProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteInstanceProfileRequest"},
      "output":{"shape":"DeleteInstanceProfileResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Deletes a profile that can be applied to one or more private device instances.</p>"
    },
    "DeleteNetworkProfile":{
      "name":"DeleteNetworkProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteNetworkProfileRequest"},
      "output":{"shape":"DeleteNetworkProfileResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Deletes a network profile.</p>"
    },
    "DeleteProject":{
      "name":"DeleteProject",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteProjectRequest"},
      "output":{"shape":"DeleteProjectResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> <b>Note</b> Deleting this resource does not stop an in-progress run.</p>"
    },
    "DeleteRemoteAccessSession":{
      "name":"DeleteRemoteAccessSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRemoteAccessSessionRequest"},
      "output":{"shape":"DeleteRemoteAccessSessionResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Deletes a completed remote access session and its results.</p>"
    },
    "DeleteRun":{
      "name":"DeleteRun",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRunRequest"},
      "output":{"shape":"DeleteRunResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Deletes the run, given the run ARN.</p> <p> <b>Note</b> Deleting this resource does not stop an in-progress run.</p>"
    },
    "DeleteUpload":{
      "name":"DeleteUpload",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteUploadRequest"},
      "output":{"shape":"DeleteUploadResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Deletes an upload given the upload ARN.</p>"
    },
    "DeleteVPCEConfiguration":{
      "name":"DeleteVPCEConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteVPCEConfigurationRequest"},
      "output":{"shape":"DeleteVPCEConfigurationResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"ServiceAccountException"},
        {"shape":"InvalidOperationException"}
      ],
      "documentation":"<p>Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.</p>"
    },
    "GetAccountSettings":{
      "name":"GetAccountSettings",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAccountSettingsRequest"},
      "output":{"shape":"GetAccountSettingsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns the number of unmetered iOS and/or unmetered Android devices that have been purchased by the account.</p>"
    },
    "GetDevice":{
      "name":"GetDevice",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDeviceRequest"},
      "output":{"shape":"GetDeviceResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about a unique device type.</p>"
    },
    "GetDeviceInstance":{
      "name":"GetDeviceInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDeviceInstanceRequest"},
      "output":{"shape":"GetDeviceInstanceResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns information about a device instance belonging to a private device fleet.</p>"
    },
    "GetDevicePool":{
      "name":"GetDevicePool",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDevicePoolRequest"},
      "output":{"shape":"GetDevicePoolResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about a device pool.</p>"
    },
    "GetDevicePoolCompatibility":{
      "name":"GetDevicePoolCompatibility",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDevicePoolCompatibilityRequest"},
      "output":{"shape":"GetDevicePoolCompatibilityResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about compatibility with a device pool.</p>"
    },
    "GetInstanceProfile":{
      "name":"GetInstanceProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstanceProfileRequest"},
      "output":{"shape":"GetInstanceProfileResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns information about the specified instance profile.</p>"
    },
    "GetJob":{
      "name":"GetJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetJobRequest"},
      "output":{"shape":"GetJobResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about a job.</p>"
    },
    "GetNetworkProfile":{
      "name":"GetNetworkProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetNetworkProfileRequest"},
      "output":{"shape":"GetNetworkProfileResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns information about a network profile.</p>"
    },
    "GetOfferingStatus":{
      "name":"GetOfferingStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetOfferingStatusRequest"},
      "output":{"shape":"GetOfferingStatusResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"NotEligibleException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href=\"mailto:aws-devicefarm-support@amazon.com\">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>"
    },
    "GetProject":{
      "name":"GetProject",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetProjectRequest"},
      "output":{"shape":"GetProjectResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about a project.</p>"
    },
    "GetRemoteAccessSession":{
      "name":"GetRemoteAccessSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetRemoteAccessSessionRequest"},
      "output":{"shape":"GetRemoteAccessSessionResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns a link to a currently running remote access session.</p>"
    },
    "GetRun":{
      "name":"GetRun",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetRunRequest"},
      "output":{"shape":"GetRunResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about a run.</p>"
    },
    "GetSuite":{
      "name":"GetSuite",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetSuiteRequest"},
      "output":{"shape":"GetSuiteResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about a suite.</p>"
    },
    "GetTest":{
      "name":"GetTest",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTestRequest"},
      "output":{"shape":"GetTestResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about a test.</p>"
    },
    "GetUpload":{
      "name":"GetUpload",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetUploadRequest"},
      "output":{"shape":"GetUploadResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about an upload.</p>"
    },
    "GetVPCEConfiguration":{
      "name":"GetVPCEConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetVPCEConfigurationRequest"},
      "output":{"shape":"GetVPCEConfigurationResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.</p>"
    },
    "InstallToRemoteAccessSession":{
      "name":"InstallToRemoteAccessSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"InstallToRemoteAccessSessionRequest"},
      "output":{"shape":"InstallToRemoteAccessSessionResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.</p>"
    },
    "ListArtifacts":{
      "name":"ListArtifacts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListArtifactsRequest"},
      "output":{"shape":"ListArtifactsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about artifacts.</p>"
    },
    "ListDeviceInstances":{
      "name":"ListDeviceInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDeviceInstancesRequest"},
      "output":{"shape":"ListDeviceInstancesResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns information about the private device instances associated with one or more AWS accounts.</p>"
    },
    "ListDevicePools":{
      "name":"ListDevicePools",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDevicePoolsRequest"},
      "output":{"shape":"ListDevicePoolsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about device pools.</p>"
    },
    "ListDevices":{
      "name":"ListDevices",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDevicesRequest"},
      "output":{"shape":"ListDevicesResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about unique device types.</p>"
    },
    "ListInstanceProfiles":{
      "name":"ListInstanceProfiles",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListInstanceProfilesRequest"},
      "output":{"shape":"ListInstanceProfilesResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns information about all the instance profiles in an AWS account.</p>"
    },
    "ListJobs":{
      "name":"ListJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListJobsRequest"},
      "output":{"shape":"ListJobsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about jobs for a given test run.</p>"
    },
    "ListNetworkProfiles":{
      "name":"ListNetworkProfiles",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListNetworkProfilesRequest"},
      "output":{"shape":"ListNetworkProfilesResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns the list of available network profiles.</p>"
    },
    "ListOfferingPromotions":{
      "name":"ListOfferingPromotions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListOfferingPromotionsRequest"},
      "output":{"shape":"ListOfferingPromotionsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"NotEligibleException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href=\"mailto:aws-devicefarm-support@amazon.com\">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>"
    },
    "ListOfferingTransactions":{
      "name":"ListOfferingTransactions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListOfferingTransactionsRequest"},
      "output":{"shape":"ListOfferingTransactionsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"NotEligibleException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href=\"mailto:aws-devicefarm-support@amazon.com\">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>"
    },
    "ListOfferings":{
      "name":"ListOfferings",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListOfferingsRequest"},
      "output":{"shape":"ListOfferingsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"NotEligibleException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href=\"mailto:aws-devicefarm-support@amazon.com\">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>"
    },
    "ListProjects":{
      "name":"ListProjects",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListProjectsRequest"},
      "output":{"shape":"ListProjectsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about projects.</p>"
    },
    "ListRemoteAccessSessions":{
      "name":"ListRemoteAccessSessions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListRemoteAccessSessionsRequest"},
      "output":{"shape":"ListRemoteAccessSessionsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns a list of all currently running remote access sessions.</p>"
    },
    "ListRuns":{
      "name":"ListRuns",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListRunsRequest"},
      "output":{"shape":"ListRunsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about runs, given an AWS Device Farm project ARN.</p>"
    },
    "ListSamples":{
      "name":"ListSamples",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListSamplesRequest"},
      "output":{"shape":"ListSamplesResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about samples, given an AWS Device Farm project ARN</p>"
    },
    "ListSuites":{
      "name":"ListSuites",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListSuitesRequest"},
      "output":{"shape":"ListSuitesResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about test suites for a given job.</p>"
    },
    "ListTests":{
      "name":"ListTests",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTestsRequest"},
      "output":{"shape":"ListTestsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about tests in a given test suite.</p>"
    },
    "ListUniqueProblems":{
      "name":"ListUniqueProblems",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListUniqueProblemsRequest"},
      "output":{"shape":"ListUniqueProblemsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about unique problems.</p>"
    },
    "ListUploads":{
      "name":"ListUploads",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListUploadsRequest"},
      "output":{"shape":"ListUploadsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Gets information about uploads, given an AWS Device Farm project ARN.</p>"
    },
    "ListVPCEConfigurations":{
      "name":"ListVPCEConfigurations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListVPCEConfigurationsRequest"},
      "output":{"shape":"ListVPCEConfigurationsResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.</p>"
    },
    "PurchaseOffering":{
      "name":"PurchaseOffering",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PurchaseOfferingRequest"},
      "output":{"shape":"PurchaseOfferingResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"NotEligibleException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href=\"mailto:aws-devicefarm-support@amazon.com\">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>"
    },
    "RenewOffering":{
      "name":"RenewOffering",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RenewOfferingRequest"},
      "output":{"shape":"RenewOfferingResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"NotEligibleException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href=\"mailto:aws-devicefarm-support@amazon.com\">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>"
    },
    "ScheduleRun":{
      "name":"ScheduleRun",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ScheduleRunRequest"},
      "output":{"shape":"ScheduleRunResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"IdempotencyException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Schedules a run.</p>"
    },
    "StopJob":{
      "name":"StopJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopJobRequest"},
      "output":{"shape":"StopJobResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Initiates a stop request for the current job. AWS Device Farm will immediately stop the job on the device where tests have not started executing, and you will not be billed for this device. On the device where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on the device. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.</p>"
    },
    "StopRemoteAccessSession":{
      "name":"StopRemoteAccessSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopRemoteAccessSessionRequest"},
      "output":{"shape":"StopRemoteAccessSessionResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Ends a specified remote access session.</p>"
    },
    "StopRun":{
      "name":"StopRun",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopRunRequest"},
      "output":{"shape":"StopRunResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Initiates a stop request for the current test run. AWS Device Farm will immediately stop the run on devices where tests have not started executing, and you will not be billed for these devices. On devices where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on those devices. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.</p>"
    },
    "UpdateDeviceInstance":{
      "name":"UpdateDeviceInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDeviceInstanceRequest"},
      "output":{"shape":"UpdateDeviceInstanceResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Updates information about an existing private device instance.</p>"
    },
    "UpdateDevicePool":{
      "name":"UpdateDevicePool",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDevicePoolRequest"},
      "output":{"shape":"UpdateDevicePoolResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).</p>"
    },
    "UpdateInstanceProfile":{
      "name":"UpdateInstanceProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateInstanceProfileRequest"},
      "output":{"shape":"UpdateInstanceProfileResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Updates information about an existing private device instance profile.</p>"
    },
    "UpdateNetworkProfile":{
      "name":"UpdateNetworkProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateNetworkProfileRequest"},
      "output":{"shape":"UpdateNetworkProfileResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Updates the network profile with specific settings.</p>"
    },
    "UpdateProject":{
      "name":"UpdateProject",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateProjectRequest"},
      "output":{"shape":"UpdateProjectResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Modifies the specified project name, given the project ARN and a new name.</p>"
    },
    "UpdateUpload":{
      "name":"UpdateUpload",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateUploadRequest"},
      "output":{"shape":"UpdateUploadResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ServiceAccountException"}
      ],
      "documentation":"<p>Update an uploaded test specification (test spec).</p>"
    },
    "UpdateVPCEConfiguration":{
      "name":"UpdateVPCEConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateVPCEConfigurationRequest"},
      "output":{"shape":"UpdateVPCEConfigurationResult"},
      "errors":[
        {"shape":"ArgumentException"},
        {"shape":"NotFoundException"},
        {"shape":"ServiceAccountException"},
        {"shape":"InvalidOperationException"}
      ],
      "documentation":"<p>Updates information about an existing Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>"
    }
  },
  "shapes":{
    "AWSAccountNumber":{
      "type":"string",
      "max":16,
      "min":2
    },
    "AccountSettings":{
      "type":"structure",
      "members":{
        "awsAccountNumber":{
          "shape":"AWSAccountNumber",
          "documentation":"<p>The AWS account number specified in the <code>AccountSettings</code> container.</p>"
        },
        "unmeteredDevices":{
          "shape":"PurchasedDevicesMap",
          "documentation":"<p>Returns the unmetered devices you have purchased or want to purchase.</p>"
        },
        "unmeteredRemoteAccessDevices":{
          "shape":"PurchasedDevicesMap",
          "documentation":"<p>Returns the unmetered remote access devices you have purchased or want to purchase.</p>"
        },
        "maxJobTimeoutMinutes":{
          "shape":"JobTimeoutMinutes",
          "documentation":"<p>The maximum number of minutes a test run will execute before it times out.</p>"
        },
        "trialMinutes":{
          "shape":"TrialMinutes",
          "documentation":"<p>Information about an AWS account's usage of free trial device minutes.</p>"
        },
        "maxSlots":{
          "shape":"MaxSlotMap",
          "documentation":"<p>The maximum number of device slots that the AWS account can purchase. Each maximum is expressed as an <code>offering-id:number</code> pair, where the <code>offering-id</code> represents one of the IDs returned by the <code>ListOfferings</code> command.</p>"
        },
        "defaultJobTimeoutMinutes":{
          "shape":"JobTimeoutMinutes",
          "documentation":"<p>The default number of minutes (at the account level) a test run will execute before it times out. Default value is 60 minutes.</p>"
        },
        "skipAppResign":{
          "shape":"SkipAppResign",
          "documentation":"<p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href=\"https://aws.amazon.com/device-farm/faq/\">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>"
        }
      },
      "documentation":"<p>A container for account-level settings within AWS Device Farm.</p>"
    },
    "AccountsCleanup":{"type":"boolean"},
    "AmazonResourceName":{
      "type":"string",
      "min":32
    },
    "AmazonResourceNames":{
      "type":"list",
      "member":{"shape":"AmazonResourceName"}
    },
    "AndroidPaths":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "AppPackagesCleanup":{"type":"boolean"},
    "ArgumentException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"Message",
          "documentation":"<p>Any additional information about the exception.</p>"
        }
      },
      "documentation":"<p>An invalid argument was specified.</p>",
      "exception":true
    },
    "Artifact":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The artifact's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The artifact's name.</p>"
        },
        "type":{
          "shape":"ArtifactType",
          "documentation":"<p>The artifact's type.</p> <p>Allowed values include the following:</p> <ul> <li> <p>UNKNOWN: An unknown type.</p> </li> <li> <p>SCREENSHOT: The screenshot type.</p> </li> <li> <p>DEVICE_LOG: The device log type.</p> </li> <li> <p>MESSAGE_LOG: The message log type.</p> </li> <li> <p>RESULT_LOG: The result log type.</p> </li> <li> <p>SERVICE_LOG: The service log type.</p> </li> <li> <p>WEBKIT_LOG: The web kit log type.</p> </li> <li> <p>INSTRUMENTATION_OUTPUT: The instrumentation type.</p> </li> <li> <p>EXERCISER_MONKEY_OUTPUT: For Android, the artifact (log) generated by an Android fuzz test.</p> </li> <li> <p>CALABASH_JSON_OUTPUT: The Calabash JSON output type.</p> </li> <li> <p>CALABASH_PRETTY_OUTPUT: The Calabash pretty output type.</p> </li> <li> <p>CALABASH_STANDARD_OUTPUT: The Calabash standard output type.</p> </li> <li> <p>CALABASH_JAVA_XML_OUTPUT: The Calabash Java XML output type.</p> </li> <li> <p>AUTOMATION_OUTPUT: The automation output type.</p> </li> <li> <p>APPIUM_SERVER_OUTPUT: The Appium server output type.</p> </li> <li> <p>APPIUM_JAVA_OUTPUT: The Appium Java output type.</p> </li> <li> <p>APPIUM_JAVA_XML_OUTPUT: The Appium Java XML output type.</p> </li> <li> <p>APPIUM_PYTHON_OUTPUT: The Appium Python output type.</p> </li> <li> <p>APPIUM_PYTHON_XML_OUTPUT: The Appium Python XML output type.</p> </li> <li> <p>EXPLORER_EVENT_LOG: The Explorer event log output type.</p> </li> <li> <p>EXPLORER_SUMMARY_LOG: The Explorer summary log output type.</p> </li> <li> <p>APPLICATION_CRASH_REPORT: The application crash report output type.</p> </li> <li> <p>XCTEST_LOG: The XCode test output type.</p> </li> </ul>"
        },
        "extension":{
          "shape":"String",
          "documentation":"<p>The artifact's file extension.</p>"
        },
        "url":{
          "shape":"URL",
          "documentation":"<p>The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the artifact's file.</p>"
        }
      },
      "documentation":"<p>Represents the output of a test. Examples of artifacts include logs and screenshots.</p>"
    },
    "ArtifactCategory":{
      "type":"string",
      "enum":[
        "SCREENSHOT",
        "FILE",
        "LOG"
      ]
    },
    "ArtifactType":{
      "type":"string",
      "enum":[
        "UNKNOWN",
        "SCREENSHOT",
        "DEVICE_LOG",
        "MESSAGE_LOG",
        "VIDEO_LOG",
        "RESULT_LOG",
        "SERVICE_LOG",
        "WEBKIT_LOG",
        "INSTRUMENTATION_OUTPUT",
        "EXERCISER_MONKEY_OUTPUT",
        "CALABASH_JSON_OUTPUT",
        "CALABASH_PRETTY_OUTPUT",
        "CALABASH_STANDARD_OUTPUT",
        "CALABASH_JAVA_XML_OUTPUT",
        "AUTOMATION_OUTPUT",
        "APPIUM_SERVER_OUTPUT",
        "APPIUM_JAVA_OUTPUT",
        "APPIUM_JAVA_XML_OUTPUT",
        "APPIUM_PYTHON_OUTPUT",
        "APPIUM_PYTHON_XML_OUTPUT",
        "EXPLORER_EVENT_LOG",
        "EXPLORER_SUMMARY_LOG",
        "APPLICATION_CRASH_REPORT",
        "XCTEST_LOG",
        "VIDEO",
        "CUSTOMER_ARTIFACT",
        "CUSTOMER_ARTIFACT_LOG",
        "TESTSPEC_OUTPUT"
      ]
    },
    "Artifacts":{
      "type":"list",
      "member":{"shape":"Artifact"}
    },
    "BillingMethod":{
      "type":"string",
      "enum":[
        "METERED",
        "UNMETERED"
      ]
    },
    "Boolean":{"type":"boolean"},
    "CPU":{
      "type":"structure",
      "members":{
        "frequency":{
          "shape":"String",
          "documentation":"<p>The CPU's frequency.</p>"
        },
        "architecture":{
          "shape":"String",
          "documentation":"<p>The CPU's architecture, for example x86 or ARM.</p>"
        },
        "clock":{
          "shape":"Double",
          "documentation":"<p>The clock speed of the device's CPU, expressed in hertz (Hz). For example, a 1.2 GHz CPU is expressed as 1200000000.</p>"
        }
      },
      "documentation":"<p>Represents the amount of CPU that an app is using on a physical device.</p> <p>Note that this does not represent system-wide CPU usage.</p>"
    },
    "ClientId":{
      "type":"string",
      "max":64,
      "min":0
    },
    "ContentType":{
      "type":"string",
      "max":64,
      "min":0
    },
    "Counters":{
      "type":"structure",
      "members":{
        "total":{
          "shape":"Integer",
          "documentation":"<p>The total number of entities.</p>"
        },
        "passed":{
          "shape":"Integer",
          "documentation":"<p>The number of passed entities.</p>"
        },
        "failed":{
          "shape":"Integer",
          "documentation":"<p>The number of failed entities.</p>"
        },
        "warned":{
          "shape":"Integer",
          "documentation":"<p>The number of warned entities.</p>"
        },
        "errored":{
          "shape":"Integer",
          "documentation":"<p>The number of errored entities.</p>"
        },
        "stopped":{
          "shape":"Integer",
          "documentation":"<p>The number of stopped entities.</p>"
        },
        "skipped":{
          "shape":"Integer",
          "documentation":"<p>The number of skipped entities.</p>"
        }
      },
      "documentation":"<p>Represents entity counters.</p>"
    },
    "CreateDevicePoolRequest":{
      "type":"structure",
      "required":[
        "projectArn",
        "name",
        "rules"
      ],
      "members":{
        "projectArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the project for the device pool.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The device pool's name.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>The device pool's description.</p>"
        },
        "rules":{
          "shape":"Rules",
          "documentation":"<p>The device pool's rules.</p>"
        }
      },
      "documentation":"<p>Represents a request to the create device pool operation.</p>"
    },
    "CreateDevicePoolResult":{
      "type":"structure",
      "members":{
        "devicePool":{
          "shape":"DevicePool",
          "documentation":"<p>The newly created device pool.</p>"
        }
      },
      "documentation":"<p>Represents the result of a create device pool request.</p>"
    },
    "CreateInstanceProfileRequest":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of your instance profile.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>The description of your instance profile.</p>"
        },
        "packageCleanup":{
          "shape":"Boolean",
          "documentation":"<p>When set to <code>true</code>, Device Farm will remove app packages after a test run. The default value is <code>false</code> for private devices.</p>"
        },
        "excludeAppPackagesFromCleanup":{
          "shape":"PackageIds",
          "documentation":"<p>An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over.</p> <p>The list of packages is only considered if you set <code>packageCleanup</code> to <code>true</code>.</p>"
        },
        "rebootAfterUse":{
          "shape":"Boolean",
          "documentation":"<p>When set to <code>true</code>, Device Farm will reboot the instance after a test run. The default value is <code>true</code>.</p>"
        }
      }
    },
    "CreateInstanceProfileResult":{
      "type":"structure",
      "members":{
        "instanceProfile":{
          "shape":"InstanceProfile",
          "documentation":"<p>An object containing information about your instance profile.</p>"
        }
      }
    },
    "CreateNetworkProfileRequest":{
      "type":"structure",
      "required":[
        "projectArn",
        "name"
      ],
      "members":{
        "projectArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project for which you want to create a network profile.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name you wish to specify for the new network profile.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>The description of the network profile.</p>"
        },
        "type":{
          "shape":"NetworkProfileType",
          "documentation":"<p>The type of network profile you wish to create. Valid values are listed below.</p>"
        },
        "uplinkBandwidthBits":{
          "shape":"Long",
          "documentation":"<p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>"
        },
        "downlinkBandwidthBits":{
          "shape":"Long",
          "documentation":"<p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>"
        },
        "uplinkDelayMs":{
          "shape":"Long",
          "documentation":"<p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>"
        },
        "downlinkDelayMs":{
          "shape":"Long",
          "documentation":"<p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>"
        },
        "uplinkJitterMs":{
          "shape":"Long",
          "documentation":"<p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>"
        },
        "downlinkJitterMs":{
          "shape":"Long",
          "documentation":"<p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>"
        },
        "uplinkLossPercent":{
          "shape":"PercentInteger",
          "documentation":"<p>Proportion of transmitted packets that fail to arrive from 0 to 100 percent.</p>"
        },
        "downlinkLossPercent":{
          "shape":"PercentInteger",
          "documentation":"<p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>"
        }
      }
    },
    "CreateNetworkProfileResult":{
      "type":"structure",
      "members":{
        "networkProfile":{
          "shape":"NetworkProfile",
          "documentation":"<p>The network profile that is returned by the create network profile request.</p>"
        }
      }
    },
    "CreateProjectRequest":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"Name",
          "documentation":"<p>The project's name.</p>"
        },
        "defaultJobTimeoutMinutes":{
          "shape":"JobTimeoutMinutes",
          "documentation":"<p>Sets the execution timeout value (in minutes) for a project. All test runs in this project will use the specified execution timeout value unless overridden when scheduling a run.</p>"
        }
      },
      "documentation":"<p>Represents a request to the create project operation.</p>"
    },
    "CreateProjectResult":{
      "type":"structure",
      "members":{
        "project":{
          "shape":"Project",
          "documentation":"<p>The newly created project.</p>"
        }
      },
      "documentation":"<p>Represents the result of a create project request.</p>"
    },
    "CreateRemoteAccessSessionConfiguration":{
      "type":"structure",
      "members":{
        "billingMethod":{
          "shape":"BillingMethod",
          "documentation":"<p>The billing method for the remote access session.</p>"
        },
        "vpceConfigurationArns":{
          "shape":"AmazonResourceNames",
          "documentation":"<p>An array of Amazon Resource Names (ARNs) included in the VPC endpoint configuration.</p>"
        }
      },
      "documentation":"<p>Configuration settings for a remote access session, including billing method.</p>"
    },
    "CreateRemoteAccessSessionRequest":{
      "type":"structure",
      "required":[
        "projectArn",
        "deviceArn"
      ],
      "members":{
        "projectArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project for which you want to create a remote access session.</p>"
        },
        "deviceArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the device for which you want to create a remote access session.</p>"
        },
        "instanceArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the device instance for which you want to create a remote access session.</p>"
        },
        "sshPublicKey":{
          "shape":"SshPublicKey",
          "documentation":"<p>The public key of the <code>ssh</code> key pair you want to use for connecting to remote devices in your remote debugging session. This is only required if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p>"
        },
        "remoteDebugEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Set to <code>true</code> if you want to access devices remotely for debugging in your remote access session.</p>"
        },
        "remoteRecordEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Set to <code>true</code> to enable remote recording for the remote access session.</p>"
        },
        "remoteRecordAppArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the remote access session that you wish to create.</p>"
        },
        "clientId":{
          "shape":"ClientId",
          "documentation":"<p>Unique identifier for the client. If you want access to multiple devices on the same client, you should pass the same <code>clientId</code> value in each call to <code>CreateRemoteAccessSession</code>. This is required only if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p>"
        },
        "configuration":{
          "shape":"CreateRemoteAccessSessionConfiguration",
          "documentation":"<p>The configuration information for the remote access session request.</p>"
        },
        "interactionMode":{
          "shape":"InteractionMode",
          "documentation":"<p>The interaction mode of the remote access session. Valid values are:</p> <ul> <li> <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the screen. You <b>cannot</b> run XCUITest framework-based tests in this mode.</p> </li> <li> <p>NO_VIDEO: You are connected to the device but cannot interact with it or view the screen. This mode has the fastest test execution speed. You <b>can</b> run XCUITest framework-based tests in this mode.</p> </li> <li> <p>VIDEO_ONLY: You can view the screen but cannot touch or rotate it. You <b>can</b> run XCUITest framework-based tests and watch the screen in this mode.</p> </li> </ul>"
        },
        "skipAppResign":{
          "shape":"Boolean",
          "documentation":"<p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href=\"https://aws.amazon.com/device-farm/faq/\">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>"
        }
      },
      "documentation":"<p>Creates and submits a request to start a remote access session.</p>"
    },
    "CreateRemoteAccessSessionResult":{
      "type":"structure",
      "members":{
        "remoteAccessSession":{
          "shape":"RemoteAccessSession",
          "documentation":"<p>A container that describes the remote access session when the request to create a remote access session is sent.</p>"
        }
      },
      "documentation":"<p>Represents the server response from a request to create a remote access session.</p>"
    },
    "CreateUploadRequest":{
      "type":"structure",
      "required":[
        "projectArn",
        "name",
        "type"
      ],
      "members":{
        "projectArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the project for the upload.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The upload's file name. The name should not contain the '/' character. If uploading an iOS app, the file name needs to end with the <code>.ipa</code> extension. If uploading an Android app, the file name needs to end with the <code>.apk</code> extension. For all others, the file name must end with the <code>.zip</code> file extension.</p>"
        },
        "type":{
          "shape":"UploadType",
          "documentation":"<p>The upload's upload type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>ANDROID_APP: An Android upload.</p> </li> <li> <p>IOS_APP: An iOS upload.</p> </li> <li> <p>WEB_APP: A web application upload.</p> </li> <li> <p>EXTERNAL_DATA: An external data upload.</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p> </li> <li> <p>APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p> </li> <li> <p>CALABASH_TEST_PACKAGE: A Calabash test package upload.</p> </li> <li> <p>INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.</p> </li> <li> <p>UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.</p> </li> <li> <p>UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.</p> </li> <li> <p>XCTEST_TEST_PACKAGE: An XCode test package upload.</p> </li> <li> <p>XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.</p> </li> </ul> <p> <b>Note</b> If you call <code>CreateUpload</code> with <code>WEB_APP</code> specified, AWS Device Farm throws an <code>ArgumentException</code> error.</p>"
        },
        "contentType":{
          "shape":"ContentType",
          "documentation":"<p>The upload's content type (for example, \"application/octet-stream\").</p>"
        }
      },
      "documentation":"<p>Represents a request to the create upload operation.</p>"
    },
    "CreateUploadResult":{
      "type":"structure",
      "members":{
        "upload":{
          "shape":"Upload",
          "documentation":"<p>The newly created upload.</p>"
        }
      },
      "documentation":"<p>Represents the result of a create upload request.</p>"
    },
    "CreateVPCEConfigurationRequest":{
      "type":"structure",
      "required":[
        "vpceConfigurationName",
        "vpceServiceName",
        "serviceDnsName"
      ],
      "members":{
        "vpceConfigurationName":{
          "shape":"VPCEConfigurationName",
          "documentation":"<p>The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.</p>"
        },
        "vpceServiceName":{
          "shape":"VPCEServiceName",
          "documentation":"<p>The name of the VPC endpoint service running inside your AWS account that you want Device Farm to test.</p>"
        },
        "serviceDnsName":{
          "shape":"ServiceDnsName",
          "documentation":"<p>The DNS name of the service running in your VPC that you want Device Farm to test.</p>"
        },
        "vpceConfigurationDescription":{
          "shape":"VPCEConfigurationDescription",
          "documentation":"<p>An optional description, providing more details about your VPC endpoint configuration.</p>"
        }
      }
    },
    "CreateVPCEConfigurationResult":{
      "type":"structure",
      "members":{
        "vpceConfiguration":{
          "shape":"VPCEConfiguration",
          "documentation":"<p>An object containing information about your VPC endpoint configuration.</p>"
        }
      }
    },
    "CurrencyCode":{
      "type":"string",
      "enum":["USD"]
    },
    "CustomerArtifactPaths":{
      "type":"structure",
      "members":{
        "iosPaths":{
          "shape":"IosPaths",
          "documentation":"<p>Comma-separated list of paths on the iOS device where the artifacts generated by the customer's tests will be pulled from.</p>"
        },
        "androidPaths":{
          "shape":"AndroidPaths",
          "documentation":"<p>Comma-separated list of paths on the Android device where the artifacts generated by the customer's tests will be pulled from.</p>"
        },
        "deviceHostPaths":{
          "shape":"DeviceHostPaths",
          "documentation":"<p>Comma-separated list of paths in the test execution environment where the artifacts generated by the customer's tests will be pulled from.</p>"
        }
      },
      "documentation":"<p>A JSON object specifying the paths where the artifacts generated by the customer's tests, on the device or in the test environment, will be pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p>"
    },
    "DateTime":{"type":"timestamp"},
    "DeleteDevicePoolRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>Represents the Amazon Resource Name (ARN) of the Device Farm device pool you wish to delete.</p>"
        }
      },
      "documentation":"<p>Represents a request to the delete device pool operation.</p>"
    },
    "DeleteDevicePoolResult":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Represents the result of a delete device pool request.</p>"
    },
    "DeleteInstanceProfileRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the instance profile you are requesting to delete.</p>"
        }
      }
    },
    "DeleteInstanceProfileResult":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteNetworkProfileRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the network profile you want to delete.</p>"
        }
      }
    },
    "DeleteNetworkProfileResult":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteProjectRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>Represents the Amazon Resource Name (ARN) of the Device Farm project you wish to delete.</p>"
        }
      },
      "documentation":"<p>Represents a request to the delete project operation.</p>"
    },
    "DeleteProjectResult":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Represents the result of a delete project request.</p>"
    },
    "DeleteRemoteAccessSessionRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the sesssion for which you want to delete remote access.</p>"
        }
      },
      "documentation":"<p>Represents the request to delete the specified remote access session.</p>"
    },
    "DeleteRemoteAccessSessionResult":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The response from the server when a request is made to delete the remote access session.</p>"
    },
    "DeleteRunRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) for the run you wish to delete.</p>"
        }
      },
      "documentation":"<p>Represents a request to the delete run operation.</p>"
    },
    "DeleteRunResult":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Represents the result of a delete run request.</p>"
    },
    "DeleteUploadRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>Represents the Amazon Resource Name (ARN) of the Device Farm upload you wish to delete.</p>"
        }
      },
      "documentation":"<p>Represents a request to the delete upload operation.</p>"
    },
    "DeleteUploadResult":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Represents the result of a delete upload request.</p>"
    },
    "DeleteVPCEConfigurationRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to delete.</p>"
        }
      }
    },
    "DeleteVPCEConfigurationResult":{
      "type":"structure",
      "members":{
      }
    },
    "Device":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The device's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The device's display name.</p>"
        },
        "manufacturer":{
          "shape":"String",
          "documentation":"<p>The device's manufacturer name.</p>"
        },
        "model":{
          "shape":"String",
          "documentation":"<p>The device's model name.</p>"
        },
        "modelId":{
          "shape":"String",
          "documentation":"<p>The device's model ID.</p>"
        },
        "formFactor":{
          "shape":"DeviceFormFactor",
          "documentation":"<p>The device's form factor.</p> <p>Allowed values include:</p> <ul> <li> <p>PHONE: The phone form factor.</p> </li> <li> <p>TABLET: The tablet form factor.</p> </li> </ul>"
        },
        "platform":{
          "shape":"DevicePlatform",
          "documentation":"<p>The device's platform.</p> <p>Allowed values include:</p> <ul> <li> <p>ANDROID: The Android platform.</p> </li> <li> <p>IOS: The iOS platform.</p> </li> </ul>"
        },
        "os":{
          "shape":"String",
          "documentation":"<p>The device's operating system type.</p>"
        },
        "cpu":{
          "shape":"CPU",
          "documentation":"<p>Information about the device's CPU.</p>"
        },
        "resolution":{
          "shape":"Resolution",
          "documentation":"<p>The resolution of the device.</p>"
        },
        "heapSize":{
          "shape":"Long",
          "documentation":"<p>The device's heap size, expressed in bytes.</p>"
        },
        "memory":{
          "shape":"Long",
          "documentation":"<p>The device's total memory size, expressed in bytes.</p>"
        },
        "image":{
          "shape":"String",
          "documentation":"<p>The device's image name.</p>"
        },
        "carrier":{
          "shape":"String",
          "documentation":"<p>The device's carrier.</p>"
        },
        "radio":{
          "shape":"String",
          "documentation":"<p>The device's radio.</p>"
        },
        "remoteAccessEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether remote access has been enabled for the specified device.</p>"
        },
        "remoteDebugEnabled":{
          "shape":"Boolean",
          "documentation":"<p>This flag is set to <code>true</code> if remote debugging is enabled for the device.</p>"
        },
        "fleetType":{
          "shape":"String",
          "documentation":"<p>The type of fleet to which this device belongs. Possible values for fleet type are PRIVATE and PUBLIC.</p>"
        },
        "fleetName":{
          "shape":"String",
          "documentation":"<p>The name of the fleet to which this device belongs.</p>"
        },
        "instances":{
          "shape":"DeviceInstances",
          "documentation":"<p>The instances belonging to this device.</p>"
        }
      },
      "documentation":"<p>Represents a device type that an app is tested against.</p>"
    },
    "DeviceAttribute":{
      "type":"string",
      "enum":[
        "ARN",
        "PLATFORM",
        "FORM_FACTOR",
        "MANUFACTURER",
        "REMOTE_ACCESS_ENABLED",
        "REMOTE_DEBUG_ENABLED",
        "APPIUM_VERSION",
        "INSTANCE_ARN",
        "INSTANCE_LABELS",
        "FLEET_TYPE"
      ]
    },
    "DeviceFormFactor":{
      "type":"string",
      "enum":[
        "PHONE",
        "TABLET"
      ]
    },
    "DeviceHostPaths":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "DeviceInstance":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the device instance.</p>"
        },
        "deviceArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the device.</p>"
        },
        "labels":{
          "shape":"InstanceLabels",
          "documentation":"<p>An array of strings describing the device instance.</p>"
        },
        "status":{
          "shape":"InstanceStatus",
          "documentation":"<p>The status of the device instance. Valid values are listed below.</p>"
        },
        "udid":{
          "shape":"String",
          "documentation":"<p>Unique device identifier for the device instance.</p>"
        },
        "instanceProfile":{
          "shape":"InstanceProfile",
          "documentation":"<p>A object containing information about the instance profile.</p>"
        }
      },
      "documentation":"<p>Represents the device instance.</p>"
    },
    "DeviceInstances":{
      "type":"list",
      "member":{"shape":"DeviceInstance"}
    },
    "DeviceMinutes":{
      "type":"structure",
      "members":{
        "total":{
          "shape":"Double",
          "documentation":"<p>When specified, represents the total minutes used by the resource to run tests.</p>"
        },
        "metered":{
          "shape":"Double",
          "documentation":"<p>When specified, represents only the sum of metered minutes used by the resource to run tests.</p>"
        },
        "unmetered":{
          "shape":"Double",
          "documentation":"<p>When specified, represents only the sum of unmetered minutes used by the resource to run tests.</p>"
        }
      },
      "documentation":"<p>Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.</p>"
    },
    "DevicePlatform":{
      "type":"string",
      "enum":[
        "ANDROID",
        "IOS"
      ]
    },
    "DevicePool":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The device pool's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The device pool's name.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>The device pool's description.</p>"
        },
        "type":{
          "shape":"DevicePoolType",
          "documentation":"<p>The device pool's type.</p> <p>Allowed values include:</p> <ul> <li> <p>CURATED: A device pool that is created and managed by AWS Device Farm.</p> </li> <li> <p>PRIVATE: A device pool that is created and managed by the device pool developer.</p> </li> </ul>"
        },
        "rules":{
          "shape":"Rules",
          "documentation":"<p>Information about the device pool's rules.</p>"
        }
      },
      "documentation":"<p>Represents a collection of device types.</p>"
    },
    "DevicePoolCompatibilityResult":{
      "type":"structure",
      "members":{
        "device":{
          "shape":"Device",
          "documentation":"<p>The device (phone or tablet) that you wish to return information about.</p>"
        },
        "compatible":{
          "shape":"Boolean",
          "documentation":"<p>Whether the result was compatible with the device pool.</p>"
        },
        "incompatibilityMessages":{
          "shape":"IncompatibilityMessages",
          "documentation":"<p>Information about the compatibility.</p>"
        }
      },
      "documentation":"<p>Represents a device pool compatibility result.</p>"
    },
    "DevicePoolCompatibilityResults":{
      "type":"list",
      "member":{"shape":"DevicePoolCompatibilityResult"}
    },
    "DevicePoolType":{
      "type":"string",
      "enum":[
        "CURATED",
        "PRIVATE"
      ]
    },
    "DevicePools":{
      "type":"list",
      "member":{"shape":"DevicePool"}
    },
    "Devices":{
      "type":"list",
      "member":{"shape":"Device"}
    },
    "Double":{"type":"double"},
    "ExecutionConfiguration":{
      "type":"structure",
      "members":{
        "jobTimeoutMinutes":{
          "shape":"JobTimeoutMinutes",
          "documentation":"<p>The number of minutes a test run will execute before it times out.</p>"
        },
        "accountsCleanup":{
          "shape":"AccountsCleanup",
          "documentation":"<p>True if account cleanup is enabled at the beginning of the test; otherwise, false.</p>"
        },
        "appPackagesCleanup":{
          "shape":"AppPackagesCleanup",
          "documentation":"<p>True if app package cleanup is enabled at the beginning of the test; otherwise, false.</p>"
        },
        "videoCapture":{
          "shape":"VideoCapture",
          "documentation":"<p>Set to true to enable video capture; otherwise, set to false. The default is true.</p>"
        },
        "skipAppResign":{
          "shape":"SkipAppResign",
          "documentation":"<p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href=\"https://aws.amazon.com/device-farm/faq/\">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>"
        }
      },
      "documentation":"<p>Represents configuration information about a test run, such as the execution timeout (in minutes).</p>"
    },
    "ExecutionResult":{
      "type":"string",
      "enum":[
        "PENDING",
        "PASSED",
        "WARNED",
        "FAILED",
        "SKIPPED",
        "ERRORED",
        "STOPPED"
      ]
    },
    "ExecutionResultCode":{
      "type":"string",
      "enum":[
        "PARSING_FAILED",
        "VPC_ENDPOINT_SETUP_FAILED"
      ]
    },
    "ExecutionStatus":{
      "type":"string",
      "enum":[
        "PENDING",
        "PENDING_CONCURRENCY",
        "PENDING_DEVICE",
        "PROCESSING",
        "SCHEDULING",
        "PREPARING",
        "RUNNING",
        "COMPLETED",
        "STOPPING"
      ]
    },
    "Filter":{
      "type":"string",
      "max":8192,
      "min":0
    },
    "GetAccountSettingsRequest":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Represents the request sent to retrieve the account settings.</p>"
    },
    "GetAccountSettingsResult":{
      "type":"structure",
      "members":{
        "accountSettings":{
          "shape":"AccountSettings",
          "documentation":"<p>The account settings.</p>"
        }
      },
      "documentation":"<p>Represents the account settings return values from the <code>GetAccountSettings</code> request.</p>"
    },
    "GetDeviceInstanceRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the instance you're requesting information about.</p>"
        }
      }
    },
    "GetDeviceInstanceResult":{
      "type":"structure",
      "members":{
        "deviceInstance":{
          "shape":"DeviceInstance",
          "documentation":"<p>An object containing information about your device instance.</p>"
        }
      }
    },
    "GetDevicePoolCompatibilityRequest":{
      "type":"structure",
      "required":["devicePoolArn"],
      "members":{
        "devicePoolArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The device pool's ARN.</p>"
        },
        "appArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the app that is associated with the specified device pool.</p>"
        },
        "testType":{
          "shape":"TestType",
          "documentation":"<p>The test type for the specified device pool.</p> <p>Allowed values include the following:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for Web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The XCode test type.</p> </li> <li> <p>XCTEST_UI: The XCode UI test type.</p> </li> </ul>"
        },
        "test":{
          "shape":"ScheduleRunTest",
          "documentation":"<p>Information about the uploaded test to be run against the device pool.</p>"
        },
        "configuration":{
          "shape":"ScheduleRunConfiguration",
          "documentation":"<p>An object containing information about the settings for a run.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get device pool compatibility operation.</p>"
    },
    "GetDevicePoolCompatibilityResult":{
      "type":"structure",
      "members":{
        "compatibleDevices":{
          "shape":"DevicePoolCompatibilityResults",
          "documentation":"<p>Information about compatible devices.</p>"
        },
        "incompatibleDevices":{
          "shape":"DevicePoolCompatibilityResults",
          "documentation":"<p>Information about incompatible devices.</p>"
        }
      },
      "documentation":"<p>Represents the result of describe device pool compatibility request.</p>"
    },
    "GetDevicePoolRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The device pool's ARN.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get device pool operation.</p>"
    },
    "GetDevicePoolResult":{
      "type":"structure",
      "members":{
        "devicePool":{
          "shape":"DevicePool",
          "documentation":"<p>An object containing information about the requested device pool.</p>"
        }
      },
      "documentation":"<p>Represents the result of a get device pool request.</p>"
    },
    "GetDeviceRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The device type's ARN.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get device request.</p>"
    },
    "GetDeviceResult":{
      "type":"structure",
      "members":{
        "device":{
          "shape":"Device",
          "documentation":"<p>An object containing information about the requested device.</p>"
        }
      },
      "documentation":"<p>Represents the result of a get device request.</p>"
    },
    "GetInstanceProfileRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of your instance profile.</p>"
        }
      }
    },
    "GetInstanceProfileResult":{
      "type":"structure",
      "members":{
        "instanceProfile":{
          "shape":"InstanceProfile",
          "documentation":"<p>An object containing information about your instance profile.</p>"
        }
      }
    },
    "GetJobRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The job's ARN.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get job operation.</p>"
    },
    "GetJobResult":{
      "type":"structure",
      "members":{
        "job":{
          "shape":"Job",
          "documentation":"<p>An object containing information about the requested job.</p>"
        }
      },
      "documentation":"<p>Represents the result of a get job request.</p>"
    },
    "GetNetworkProfileRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the network profile you want to return information about.</p>"
        }
      }
    },
    "GetNetworkProfileResult":{
      "type":"structure",
      "members":{
        "networkProfile":{
          "shape":"NetworkProfile",
          "documentation":"<p>The network profile.</p>"
        }
      }
    },
    "GetOfferingStatusRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the request to retrieve the offering status for the specified customer or account.</p>"
    },
    "GetOfferingStatusResult":{
      "type":"structure",
      "members":{
        "current":{
          "shape":"OfferingStatusMap",
          "documentation":"<p>When specified, gets the offering status for the current period.</p>"
        },
        "nextPeriod":{
          "shape":"OfferingStatusMap",
          "documentation":"<p>When specified, gets the offering status for the next period.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Returns the status result for a device offering.</p>"
    },
    "GetProjectRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The project's ARN.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get project operation.</p>"
    },
    "GetProjectResult":{
      "type":"structure",
      "members":{
        "project":{
          "shape":"Project",
          "documentation":"<p>The project you wish to get information about.</p>"
        }
      },
      "documentation":"<p>Represents the result of a get project request.</p>"
    },
    "GetRemoteAccessSessionRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the remote access session about which you want to get session information.</p>"
        }
      },
      "documentation":"<p>Represents the request to get information about the specified remote access session.</p>"
    },
    "GetRemoteAccessSessionResult":{
      "type":"structure",
      "members":{
        "remoteAccessSession":{
          "shape":"RemoteAccessSession",
          "documentation":"<p>A container that lists detailed information about the remote access session.</p>"
        }
      },
      "documentation":"<p>Represents the response from the server that lists detailed information about the remote access session.</p>"
    },
    "GetRunRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The run's ARN.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get run operation.</p>"
    },
    "GetRunResult":{
      "type":"structure",
      "members":{
        "run":{
          "shape":"Run",
          "documentation":"<p>The run you wish to get results from.</p>"
        }
      },
      "documentation":"<p>Represents the result of a get run request.</p>"
    },
    "GetSuiteRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The suite's ARN.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get suite operation.</p>"
    },
    "GetSuiteResult":{
      "type":"structure",
      "members":{
        "suite":{
          "shape":"Suite",
          "documentation":"<p>A collection of one or more tests.</p>"
        }
      },
      "documentation":"<p>Represents the result of a get suite request.</p>"
    },
    "GetTestRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The test's ARN.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get test operation.</p>"
    },
    "GetTestResult":{
      "type":"structure",
      "members":{
        "test":{
          "shape":"Test",
          "documentation":"<p>A test condition that is evaluated.</p>"
        }
      },
      "documentation":"<p>Represents the result of a get test request.</p>"
    },
    "GetUploadRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The upload's ARN.</p>"
        }
      },
      "documentation":"<p>Represents a request to the get upload operation.</p>"
    },
    "GetUploadResult":{
      "type":"structure",
      "members":{
        "upload":{
          "shape":"Upload",
          "documentation":"<p>An app or a set of one or more tests to upload or that have been uploaded.</p>"
        }
      },
      "documentation":"<p>Represents the result of a get upload request.</p>"
    },
    "GetVPCEConfigurationRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to describe.</p>"
        }
      }
    },
    "GetVPCEConfigurationResult":{
      "type":"structure",
      "members":{
        "vpceConfiguration":{
          "shape":"VPCEConfiguration",
          "documentation":"<p>An object containing information about your VPC endpoint configuration.</p>"
        }
      }
    },
    "HostAddress":{
      "type":"string",
      "max":1024
    },
    "IdempotencyException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"Message",
          "documentation":"<p>Any additional information about the exception.</p>"
        }
      },
      "documentation":"<p>An entity with the same name already exists.</p>",
      "exception":true
    },
    "IncompatibilityMessage":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the incompatibility.</p>"
        },
        "type":{
          "shape":"DeviceAttribute",
          "documentation":"<p>The type of incompatibility.</p> <p>Allowed values include:</p> <ul> <li> <p>ARN: The ARN.</p> </li> <li> <p>FORM_FACTOR: The form factor (for example, phone or tablet).</p> </li> <li> <p>MANUFACTURER: The manufacturer.</p> </li> <li> <p>PLATFORM: The platform (for example, Android or iOS).</p> </li> <li> <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access.</p> </li> <li> <p>APPIUM_VERSION: The Appium version for the test.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Represents information about incompatibility.</p>"
    },
    "IncompatibilityMessages":{
      "type":"list",
      "member":{"shape":"IncompatibilityMessage"}
    },
    "InstallToRemoteAccessSessionRequest":{
      "type":"structure",
      "required":[
        "remoteAccessSessionArn",
        "appArn"
      ],
      "members":{
        "remoteAccessSessionArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the remote access session about which you are requesting information.</p>"
        },
        "appArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the app about which you are requesting information.</p>"
        }
      },
      "documentation":"<p>Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.</p>"
    },
    "InstallToRemoteAccessSessionResult":{
      "type":"structure",
      "members":{
        "appUpload":{
          "shape":"Upload",
          "documentation":"<p>An app to upload or that has been uploaded.</p>"
        }
      },
      "documentation":"<p>Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.</p>"
    },
    "InstanceLabels":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "InstanceProfile":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the instance profile.</p>"
        },
        "packageCleanup":{
          "shape":"Boolean",
          "documentation":"<p>When set to <code>true</code>, Device Farm will remove app packages after a test run. The default value is <code>false</code> for private devices.</p>"
        },
        "excludeAppPackagesFromCleanup":{
          "shape":"PackageIds",
          "documentation":"<p>An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over.</p> <p>The list of packages is only considered if you set <code>packageCleanup</code> to <code>true</code>.</p>"
        },
        "rebootAfterUse":{
          "shape":"Boolean",
          "documentation":"<p>When set to <code>true</code>, Device Farm will reboot the instance after a test run. The default value is <code>true</code>.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the instance profile.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>The description of the instance profile.</p>"
        }
      },
      "documentation":"<p>Represents the instance profile.</p>"
    },
    "InstanceProfiles":{
      "type":"list",
      "member":{"shape":"InstanceProfile"}
    },
    "InstanceStatus":{
      "type":"string",
      "enum":[
        "IN_USE",
        "PREPARING",
        "AVAILABLE",
        "NOT_AVAILABLE"
      ]
    },
    "Integer":{"type":"integer"},
    "InteractionMode":{
      "type":"string",
      "enum":[
        "INTERACTIVE",
        "NO_VIDEO",
        "VIDEO_ONLY"
      ],
      "max":64,
      "min":0
    },
    "InvalidOperationException":{
      "type":"structure",
      "members":{
        "message":{"shape":"Message"}
      },
      "documentation":"<p>There was an error with the update request, or you do not have sufficient permissions to update this VPC endpoint configuration.</p>",
      "exception":true
    },
    "IosPaths":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "Job":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The job's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The job's name.</p>"
        },
        "type":{
          "shape":"TestType",
          "documentation":"<p>The job's type.</p> <p>Allowed values include the following:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for Web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The XCode test type.</p> </li> <li> <p>XCTEST_UI: The XCode UI test type.</p> </li> </ul>"
        },
        "created":{
          "shape":"DateTime",
          "documentation":"<p>When the job was created.</p>"
        },
        "status":{
          "shape":"ExecutionStatus",
          "documentation":"<p>The job's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending status.</p> </li> <li> <p>PENDING_CONCURRENCY: A pending concurrency status.</p> </li> <li> <p>PENDING_DEVICE: A pending device status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SCHEDULING: A scheduling status.</p> </li> <li> <p>PREPARING: A preparing status.</p> </li> <li> <p>RUNNING: A running status.</p> </li> <li> <p>COMPLETED: A completed status.</p> </li> <li> <p>STOPPING: A stopping status.</p> </li> </ul>"
        },
        "result":{
          "shape":"ExecutionResult",
          "documentation":"<p>The job's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>"
        },
        "started":{
          "shape":"DateTime",
          "documentation":"<p>The job's start time.</p>"
        },
        "stopped":{
          "shape":"DateTime",
          "documentation":"<p>The job's stop time.</p>"
        },
        "counters":{
          "shape":"Counters",
          "documentation":"<p>The job's result counters.</p>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the job's result.</p>"
        },
        "device":{
          "shape":"Device",
          "documentation":"<p>The device (phone or tablet).</p>"
        },
        "instanceArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the instance.</p>"
        },
        "deviceMinutes":{
          "shape":"DeviceMinutes",
          "documentation":"<p>Represents the total (metered or unmetered) minutes used by the job.</p>"
        },
        "videoEndpoint":{
          "shape":"String",
          "documentation":"<p>The endpoint for streaming device video.</p>"
        },
        "videoCapture":{
          "shape":"VideoCapture",
          "documentation":"<p>This value is set to true if video capture is enabled; otherwise, it is set to false.</p>"
        }
      },
      "documentation":"<p>Represents a device.</p>"
    },
    "JobTimeoutMinutes":{"type":"integer"},
    "Jobs":{
      "type":"list",
      "member":{"shape":"Job"}
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"Message",
          "documentation":"<p>Any additional information about the exception.</p>"
        }
      },
      "documentation":"<p>A limit was exceeded.</p>",
      "exception":true
    },
    "ListArtifactsRequest":{
      "type":"structure",
      "required":[
        "arn",
        "type"
      ],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Run, Job, Suite, or Test ARN.</p>"
        },
        "type":{
          "shape":"ArtifactCategory",
          "documentation":"<p>The artifacts' type.</p> <p>Allowed values include:</p> <ul> <li> <p>FILE: The artifacts are files.</p> </li> <li> <p>LOG: The artifacts are logs.</p> </li> <li> <p>SCREENSHOT: The artifacts are screenshots.</p> </li> </ul>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list artifacts operation.</p>"
    },
    "ListArtifactsResult":{
      "type":"structure",
      "members":{
        "artifacts":{
          "shape":"Artifacts",
          "documentation":"<p>Information about the artifacts.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list artifacts operation.</p>"
    },
    "ListDeviceInstancesRequest":{
      "type":"structure",
      "members":{
        "maxResults":{
          "shape":"Integer",
          "documentation":"<p>An integer specifying the maximum number of items you want to return in the API response.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      }
    },
    "ListDeviceInstancesResult":{
      "type":"structure",
      "members":{
        "deviceInstances":{
          "shape":"DeviceInstances",
          "documentation":"<p>An object containing information about your device instances.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that can be used in the next call to this operation to return the next set of items in the list.</p>"
        }
      }
    },
    "ListDevicePoolsRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The project ARN.</p>"
        },
        "type":{
          "shape":"DevicePoolType",
          "documentation":"<p>The device pools' type.</p> <p>Allowed values include:</p> <ul> <li> <p>CURATED: A device pool that is created and managed by AWS Device Farm.</p> </li> <li> <p>PRIVATE: A device pool that is created and managed by the device pool developer.</p> </li> </ul>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list device pools request.</p>"
    },
    "ListDevicePoolsResult":{
      "type":"structure",
      "members":{
        "devicePools":{
          "shape":"DevicePools",
          "documentation":"<p>Information about the device pools.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list device pools request.</p>"
    },
    "ListDevicesRequest":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list devices request.</p>"
    },
    "ListDevicesResult":{
      "type":"structure",
      "members":{
        "devices":{
          "shape":"Devices",
          "documentation":"<p>Information about the devices.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list devices operation.</p>"
    },
    "ListInstanceProfilesRequest":{
      "type":"structure",
      "members":{
        "maxResults":{
          "shape":"Integer",
          "documentation":"<p>An integer specifying the maximum number of items you want to return in the API response.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      }
    },
    "ListInstanceProfilesResult":{
      "type":"structure",
      "members":{
        "instanceProfiles":{
          "shape":"InstanceProfiles",
          "documentation":"<p>An object containing information about your instance profiles.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that can be used in the next call to this operation to return the next set of items in the list.</p>"
        }
      }
    },
    "ListJobsRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The run's Amazon Resource Name (ARN).</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list jobs operation.</p>"
    },
    "ListJobsResult":{
      "type":"structure",
      "members":{
        "jobs":{
          "shape":"Jobs",
          "documentation":"<p>Information about the jobs.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list jobs request.</p>"
    },
    "ListNetworkProfilesRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project for which you want to list network profiles.</p>"
        },
        "type":{
          "shape":"NetworkProfileType",
          "documentation":"<p>The type of network profile you wish to return information about. Valid values are listed below.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      }
    },
    "ListNetworkProfilesResult":{
      "type":"structure",
      "members":{
        "networkProfiles":{
          "shape":"NetworkProfiles",
          "documentation":"<p>A list of the available network profiles.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      }
    },
    "ListOfferingPromotionsRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      }
    },
    "ListOfferingPromotionsResult":{
      "type":"structure",
      "members":{
        "offeringPromotions":{
          "shape":"OfferingPromotions",
          "documentation":"<p>Information about the offering promotions.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier to be used in the next call to this operation, to return the next set of items in the list.</p>"
        }
      }
    },
    "ListOfferingTransactionsRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the request to list the offering transaction history.</p>"
    },
    "ListOfferingTransactionsResult":{
      "type":"structure",
      "members":{
        "offeringTransactions":{
          "shape":"OfferingTransactions",
          "documentation":"<p>The audit log of subscriptions you have purchased and modified through AWS Device Farm.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Returns the transaction log of the specified offerings.</p>"
    },
    "ListOfferingsRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the request to list all offerings.</p>"
    },
    "ListOfferingsResult":{
      "type":"structure",
      "members":{
        "offerings":{
          "shape":"Offerings",
          "documentation":"<p>A value representing the list offering results.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the return values of the list of offerings.</p>"
    },
    "ListProjectsRequest":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>Optional. If no Amazon Resource Name (ARN) is specified, then AWS Device Farm returns a list of all projects for the AWS account. You can also specify a project ARN.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list projects operation.</p>"
    },
    "ListProjectsResult":{
      "type":"structure",
      "members":{
        "projects":{
          "shape":"Projects",
          "documentation":"<p>Information about the projects.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list projects request.</p>"
    },
    "ListRemoteAccessSessionsRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the remote access session about which you are requesting information.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the request to return information about the remote access session.</p>"
    },
    "ListRemoteAccessSessionsResult":{
      "type":"structure",
      "members":{
        "remoteAccessSessions":{
          "shape":"RemoteAccessSessions",
          "documentation":"<p>A container representing the metadata from the service about each remote access session you are requesting.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.</p>"
    },
    "ListRunsRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project for which you want to list runs.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list runs operation.</p>"
    },
    "ListRunsResult":{
      "type":"structure",
      "members":{
        "runs":{
          "shape":"Runs",
          "documentation":"<p>Information about the runs.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list runs request.</p>"
    },
    "ListSamplesRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project for which you want to list samples.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list samples operation.</p>"
    },
    "ListSamplesResult":{
      "type":"structure",
      "members":{
        "samples":{
          "shape":"Samples",
          "documentation":"<p>Information about the samples.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list samples request.</p>"
    },
    "ListSuitesRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The job's Amazon Resource Name (ARN).</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list suites operation.</p>"
    },
    "ListSuitesResult":{
      "type":"structure",
      "members":{
        "suites":{
          "shape":"Suites",
          "documentation":"<p>Information about the suites.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list suites request.</p>"
    },
    "ListTestsRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The test suite's Amazon Resource Name (ARN).</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list tests operation.</p>"
    },
    "ListTestsResult":{
      "type":"structure",
      "members":{
        "tests":{
          "shape":"Tests",
          "documentation":"<p>Information about the tests.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list tests request.</p>"
    },
    "ListUniqueProblemsRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The unique problems' ARNs.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list unique problems operation.</p>"
    },
    "ListUniqueProblemsResult":{
      "type":"structure",
      "members":{
        "uniqueProblems":{
          "shape":"UniqueProblemsByExecutionResultMap",
          "documentation":"<p>Information about the unique problems.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list unique problems request.</p>"
    },
    "ListUploadsRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project for which you want to list uploads.</p>"
        },
        "type":{
          "shape":"UploadType",
          "documentation":"<p>The type of upload.</p> <p>Must be one of the following values:</p> <ul> <li> <p>ANDROID_APP: An Android upload.</p> </li> <li> <p>IOS_APP: An iOS upload.</p> </li> <li> <p>WEB_APP: A web appliction upload.</p> </li> <li> <p>EXTERNAL_DATA: An external data upload.</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p> </li> <li> <p>APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p> </li> <li> <p>CALABASH_TEST_PACKAGE: A Calabash test package upload.</p> </li> <li> <p>INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.</p> </li> <li> <p>UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.</p> </li> <li> <p>UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.</p> </li> <li> <p>XCTEST_TEST_PACKAGE: An XCode test package upload.</p> </li> <li> <p>XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.</p> </li> <li> <p>APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload.</p> </li> <li> <p>INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.</p> </li> <li> <p>XCTEST_UI_TEST_SPEC: An XCode UI test spec upload.</p> </li> </ul>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents a request to the list uploads operation.</p>"
    },
    "ListUploadsResult":{
      "type":"structure",
      "members":{
        "uploads":{
          "shape":"Uploads",
          "documentation":"<p>Information about the uploads.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>"
        }
      },
      "documentation":"<p>Represents the result of a list uploads request.</p>"
    },
    "ListVPCEConfigurationsRequest":{
      "type":"structure",
      "members":{
        "maxResults":{
          "shape":"Integer",
          "documentation":"<p>An integer specifying the maximum number of items you want to return in the API response.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      }
    },
    "ListVPCEConfigurationsResult":{
      "type":"structure",
      "members":{
        "vpceConfigurations":{
          "shape":"VPCEConfigurations",
          "documentation":"<p>An array of <code>VPCEConfiguration</code> objects containing information about your VPC endpoint configuration.</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      }
    },
    "Location":{
      "type":"structure",
      "required":[
        "latitude",
        "longitude"
      ],
      "members":{
        "latitude":{
          "shape":"Double",
          "documentation":"<p>The latitude.</p>"
        },
        "longitude":{
          "shape":"Double",
          "documentation":"<p>The longitude.</p>"
        }
      },
      "documentation":"<p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>"
    },
    "Long":{"type":"long"},
    "MaxSlotMap":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"Integer"}
    },
    "Message":{
      "type":"string",
      "max":16384,
      "min":0
    },
    "Metadata":{
      "type":"string",
      "max":8192,
      "min":0
    },
    "MonetaryAmount":{
      "type":"structure",
      "members":{
        "amount":{
          "shape":"Double",
          "documentation":"<p>The numerical amount of an offering or transaction.</p>"
        },
        "currencyCode":{
          "shape":"CurrencyCode",
          "documentation":"<p>The currency code of a monetary amount. For example, <code>USD</code> means \"U.S. dollars.\"</p>"
        }
      },
      "documentation":"<p>A number representing the monetary amount for an offering or transaction.</p>"
    },
    "Name":{
      "type":"string",
      "max":256,
      "min":0
    },
    "NetworkProfile":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the network profile.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the network profile.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>The description of the network profile.</p>"
        },
        "type":{
          "shape":"NetworkProfileType",
          "documentation":"<p>The type of network profile. Valid values are listed below.</p>"
        },
        "uplinkBandwidthBits":{
          "shape":"Long",
          "documentation":"<p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>"
        },
        "downlinkBandwidthBits":{
          "shape":"Long",
          "documentation":"<p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>"
        },
        "uplinkDelayMs":{
          "shape":"Long",
          "documentation":"<p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>"
        },
        "downlinkDelayMs":{
          "shape":"Long",
          "documentation":"<p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>"
        },
        "uplinkJitterMs":{
          "shape":"Long",
          "documentation":"<p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>"
        },
        "downlinkJitterMs":{
          "shape":"Long",
          "documentation":"<p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>"
        },
        "uplinkLossPercent":{
          "shape":"PercentInteger",
          "documentation":"<p>Proportion of transmitted packets that fail to arrive from 0 to 100 percent.</p>"
        },
        "downlinkLossPercent":{
          "shape":"PercentInteger",
          "documentation":"<p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>"
        }
      },
      "documentation":"<p>An array of settings that describes characteristics of a network profile.</p>"
    },
    "NetworkProfileType":{
      "type":"string",
      "enum":[
        "CURATED",
        "PRIVATE"
      ]
    },
    "NetworkProfiles":{
      "type":"list",
      "member":{"shape":"NetworkProfile"}
    },
    "NotEligibleException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"Message",
          "documentation":"<p>The HTTP response code of a Not Eligible exception.</p>"
        }
      },
      "documentation":"<p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>",
      "exception":true
    },
    "NotFoundException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"Message",
          "documentation":"<p>Any additional information about the exception.</p>"
        }
      },
      "documentation":"<p>The specified entity was not found.</p>",
      "exception":true
    },
    "Offering":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"OfferingIdentifier",
          "documentation":"<p>The ID that corresponds to a device offering.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>A string describing the offering.</p>"
        },
        "type":{
          "shape":"OfferingType",
          "documentation":"<p>The type of offering (e.g., \"RECURRING\") for a device.</p>"
        },
        "platform":{
          "shape":"DevicePlatform",
          "documentation":"<p>The platform of the device (e.g., ANDROID or IOS).</p>"
        },
        "recurringCharges":{
          "shape":"RecurringCharges",
          "documentation":"<p>Specifies whether there are recurring charges for the offering.</p>"
        }
      },
      "documentation":"<p>Represents the metadata of a device offering.</p>"
    },
    "OfferingIdentifier":{
      "type":"string",
      "min":32
    },
    "OfferingPromotion":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"OfferingPromotionIdentifier",
          "documentation":"<p>The ID of the offering promotion.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>A string describing the offering promotion.</p>"
        }
      },
      "documentation":"<p>Represents information about an offering promotion.</p>"
    },
    "OfferingPromotionIdentifier":{
      "type":"string",
      "min":4
    },
    "OfferingPromotions":{
      "type":"list",
      "member":{"shape":"OfferingPromotion"}
    },
    "OfferingStatus":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"OfferingTransactionType",
          "documentation":"<p>The type specified for the offering status.</p>"
        },
        "offering":{
          "shape":"Offering",
          "documentation":"<p>Represents the metadata of an offering status.</p>"
        },
        "quantity":{
          "shape":"Integer",
          "documentation":"<p>The number of available devices in the offering.</p>"
        },
        "effectiveOn":{
          "shape":"DateTime",
          "documentation":"<p>The date on which the offering is effective.</p>"
        }
      },
      "documentation":"<p>The status of the offering.</p>"
    },
    "OfferingStatusMap":{
      "type":"map",
      "key":{"shape":"OfferingIdentifier"},
      "value":{"shape":"OfferingStatus"}
    },
    "OfferingTransaction":{
      "type":"structure",
      "members":{
        "offeringStatus":{
          "shape":"OfferingStatus",
          "documentation":"<p>The status of an offering transaction.</p>"
        },
        "transactionId":{
          "shape":"TransactionIdentifier",
          "documentation":"<p>The transaction ID of the offering transaction.</p>"
        },
        "offeringPromotionId":{
          "shape":"OfferingPromotionIdentifier",
          "documentation":"<p>The ID that corresponds to a device offering promotion.</p>"
        },
        "createdOn":{
          "shape":"DateTime",
          "documentation":"<p>The date on which an offering transaction was created.</p>"
        },
        "cost":{
          "shape":"MonetaryAmount",
          "documentation":"<p>The cost of an offering transaction.</p>"
        }
      },
      "documentation":"<p>Represents the metadata of an offering transaction.</p>"
    },
    "OfferingTransactionType":{
      "type":"string",
      "enum":[
        "PURCHASE",
        "RENEW",
        "SYSTEM"
      ]
    },
    "OfferingTransactions":{
      "type":"list",
      "member":{"shape":"OfferingTransaction"}
    },
    "OfferingType":{
      "type":"string",
      "enum":["RECURRING"]
    },
    "Offerings":{
      "type":"list",
      "member":{"shape":"Offering"}
    },
    "PackageIds":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "PaginationToken":{
      "type":"string",
      "max":1024,
      "min":4
    },
    "PercentInteger":{
      "type":"integer",
      "max":100,
      "min":0
    },
    "Problem":{
      "type":"structure",
      "members":{
        "run":{
          "shape":"ProblemDetail",
          "documentation":"<p>Information about the associated run.</p>"
        },
        "job":{
          "shape":"ProblemDetail",
          "documentation":"<p>Information about the associated job.</p>"
        },
        "suite":{
          "shape":"ProblemDetail",
          "documentation":"<p>Information about the associated suite.</p>"
        },
        "test":{
          "shape":"ProblemDetail",
          "documentation":"<p>Information about the associated test.</p>"
        },
        "device":{
          "shape":"Device",
          "documentation":"<p>Information about the associated device.</p>"
        },
        "result":{
          "shape":"ExecutionResult",
          "documentation":"<p>The problem's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the problem's result.</p>"
        }
      },
      "documentation":"<p>Represents a specific warning or failure.</p>"
    },
    "ProblemDetail":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The problem detail's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The problem detail's name.</p>"
        }
      },
      "documentation":"<p>Information about a problem detail.</p>"
    },
    "Problems":{
      "type":"list",
      "member":{"shape":"Problem"}
    },
    "Project":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The project's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The project's name.</p>"
        },
        "defaultJobTimeoutMinutes":{
          "shape":"JobTimeoutMinutes",
          "documentation":"<p>The default number of minutes (at the project level) a test run will execute before it times out. Default value is 60 minutes.</p>"
        },
        "created":{
          "shape":"DateTime",
          "documentation":"<p>When the project was created.</p>"
        }
      },
      "documentation":"<p>Represents an operating-system neutral workspace for running and managing tests.</p>"
    },
    "Projects":{
      "type":"list",
      "member":{"shape":"Project"}
    },
    "PurchaseOfferingRequest":{
      "type":"structure",
      "members":{
        "offeringId":{
          "shape":"OfferingIdentifier",
          "documentation":"<p>The ID of the offering.</p>"
        },
        "quantity":{
          "shape":"Integer",
          "documentation":"<p>The number of device slots you wish to purchase in an offering request.</p>"
        },
        "offeringPromotionId":{
          "shape":"OfferingPromotionIdentifier",
          "documentation":"<p>The ID of the offering promotion to be applied to the purchase.</p>"
        }
      },
      "documentation":"<p>Represents a request for a purchase offering.</p>"
    },
    "PurchaseOfferingResult":{
      "type":"structure",
      "members":{
        "offeringTransaction":{
          "shape":"OfferingTransaction",
          "documentation":"<p>Represents the offering transaction for the purchase result.</p>"
        }
      },
      "documentation":"<p>The result of the purchase offering (e.g., success or failure).</p>"
    },
    "PurchasedDevicesMap":{
      "type":"map",
      "key":{"shape":"DevicePlatform"},
      "value":{"shape":"Integer"}
    },
    "Radios":{
      "type":"structure",
      "members":{
        "wifi":{
          "shape":"Boolean",
          "documentation":"<p>True if Wi-Fi is enabled at the beginning of the test; otherwise, false.</p>"
        },
        "bluetooth":{
          "shape":"Boolean",
          "documentation":"<p>True if Bluetooth is enabled at the beginning of the test; otherwise, false.</p>"
        },
        "nfc":{
          "shape":"Boolean",
          "documentation":"<p>True if NFC is enabled at the beginning of the test; otherwise, false.</p>"
        },
        "gps":{
          "shape":"Boolean",
          "documentation":"<p>True if GPS is enabled at the beginning of the test; otherwise, false.</p>"
        }
      },
      "documentation":"<p>Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.</p>"
    },
    "RecurringCharge":{
      "type":"structure",
      "members":{
        "cost":{
          "shape":"MonetaryAmount",
          "documentation":"<p>The cost of the recurring charge.</p>"
        },
        "frequency":{
          "shape":"RecurringChargeFrequency",
          "documentation":"<p>The frequency in which charges will recur.</p>"
        }
      },
      "documentation":"<p>Specifies whether charges for devices will be recurring.</p>"
    },
    "RecurringChargeFrequency":{
      "type":"string",
      "enum":["MONTHLY"]
    },
    "RecurringCharges":{
      "type":"list",
      "member":{"shape":"RecurringCharge"}
    },
    "RemoteAccessSession":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the remote access session.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the remote access session.</p>"
        },
        "created":{
          "shape":"DateTime",
          "documentation":"<p>The date and time the remote access session was created.</p>"
        },
        "status":{
          "shape":"ExecutionStatus",
          "documentation":"<p>The status of the remote access session. Can be any of the following:</p> <ul> <li> <p>PENDING: A pending status.</p> </li> <li> <p>PENDING_CONCURRENCY: A pending concurrency status.</p> </li> <li> <p>PENDING_DEVICE: A pending device status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SCHEDULING: A scheduling status.</p> </li> <li> <p>PREPARING: A preparing status.</p> </li> <li> <p>RUNNING: A running status.</p> </li> <li> <p>COMPLETED: A completed status.</p> </li> <li> <p>STOPPING: A stopping status.</p> </li> </ul>"
        },
        "result":{
          "shape":"ExecutionResult",
          "documentation":"<p>The result of the remote access session. Can be any of the following:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the remote access session.</p>"
        },
        "started":{
          "shape":"DateTime",
          "documentation":"<p>The date and time the remote access session was started.</p>"
        },
        "stopped":{
          "shape":"DateTime",
          "documentation":"<p>The date and time the remote access session was stopped.</p>"
        },
        "device":{
          "shape":"Device",
          "documentation":"<p>The device (phone or tablet) used in the remote access session.</p>"
        },
        "instanceArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the instance.</p>"
        },
        "remoteDebugEnabled":{
          "shape":"Boolean",
          "documentation":"<p>This flag is set to <code>true</code> if remote debugging is enabled for the remote access session.</p>"
        },
        "remoteRecordEnabled":{
          "shape":"Boolean",
          "documentation":"<p>This flag is set to <code>true</code> if remote recording is enabled for the remote access session.</p>"
        },
        "remoteRecordAppArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.</p>"
        },
        "hostAddress":{
          "shape":"HostAddress",
          "documentation":"<p>IP address of the EC2 host where you need to connect to remotely debug devices. Only returned if remote debugging is enabled for the remote access session.</p>"
        },
        "clientId":{
          "shape":"ClientId",
          "documentation":"<p>Unique identifier of your client for the remote access session. Only returned if remote debugging is enabled for the remote access session.</p>"
        },
        "billingMethod":{
          "shape":"BillingMethod",
          "documentation":"<p>The billing method of the remote access session. Possible values include <code>METERED</code> or <code>UNMETERED</code>. For more information about metered devices, see <a href=\"http://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html#welcome-terminology\">AWS Device Farm terminology</a>.\"</p>"
        },
        "deviceMinutes":{
          "shape":"DeviceMinutes",
          "documentation":"<p>The number of minutes a device is used in a remote access sesssion (including setup and teardown minutes).</p>"
        },
        "endpoint":{
          "shape":"String",
          "documentation":"<p>The endpoint for the remote access sesssion.</p>"
        },
        "deviceUdid":{
          "shape":"String",
          "documentation":"<p>Unique device identifier for the remote device. Only returned if remote debugging is enabled for the remote access session.</p>"
        },
        "interactionMode":{
          "shape":"InteractionMode",
          "documentation":"<p>The interaction mode of the remote access session. Valid values are:</p> <ul> <li> <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the screen. You <b>cannot</b> run XCUITest framework-based tests in this mode.</p> </li> <li> <p>NO_VIDEO: You are connected to the device but cannot interact with it or view the screen. This mode has the fastest test execution speed. You <b>can</b> run XCUITest framework-based tests in this mode.</p> </li> <li> <p>VIDEO_ONLY: You can view the screen but cannot touch or rotate it. You <b>can</b> run XCUITest framework-based tests and watch the screen in this mode.</p> </li> </ul>"
        },
        "skipAppResign":{
          "shape":"SkipAppResign",
          "documentation":"<p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href=\"https://aws.amazon.com/device-farm/faq/\">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>"
        }
      },
      "documentation":"<p>Represents information about the remote access session.</p>"
    },
    "RemoteAccessSessions":{
      "type":"list",
      "member":{"shape":"RemoteAccessSession"}
    },
    "RenewOfferingRequest":{
      "type":"structure",
      "members":{
        "offeringId":{
          "shape":"OfferingIdentifier",
          "documentation":"<p>The ID of a request to renew an offering.</p>"
        },
        "quantity":{
          "shape":"Integer",
          "documentation":"<p>The quantity requested in an offering renewal.</p>"
        }
      },
      "documentation":"<p>A request representing an offering renewal.</p>"
    },
    "RenewOfferingResult":{
      "type":"structure",
      "members":{
        "offeringTransaction":{
          "shape":"OfferingTransaction",
          "documentation":"<p>Represents the status of the offering transaction for the renewal.</p>"
        }
      },
      "documentation":"<p>The result of a renewal offering.</p>"
    },
    "Resolution":{
      "type":"structure",
      "members":{
        "width":{
          "shape":"Integer",
          "documentation":"<p>The screen resolution's width, expressed in pixels.</p>"
        },
        "height":{
          "shape":"Integer",
          "documentation":"<p>The screen resolution's height, expressed in pixels.</p>"
        }
      },
      "documentation":"<p>Represents the screen resolution of a device in height and width, expressed in pixels.</p>"
    },
    "Rule":{
      "type":"structure",
      "members":{
        "attribute":{
          "shape":"DeviceAttribute",
          "documentation":"<p>The rule's stringified attribute. For example, specify the value as <code>\"\\\"abc\\\"\"</code>.</p> <p>Allowed values include:</p> <ul> <li> <p>ARN: The ARN.</p> </li> <li> <p>FORM_FACTOR: The form factor (for example, phone or tablet).</p> </li> <li> <p>MANUFACTURER: The manufacturer.</p> </li> <li> <p>PLATFORM: The platform (for example, Android or iOS).</p> </li> <li> <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access.</p> </li> <li> <p>APPIUM_VERSION: The Appium version for the test.</p> </li> <li> <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device instance.</p> </li> <li> <p>INSTANCE_LABELS: The label of the device instance.</p> </li> </ul>"
        },
        "operator":{
          "shape":"RuleOperator",
          "documentation":"<p>The rule's operator.</p> <ul> <li> <p>EQUALS: The equals operator.</p> </li> <li> <p>GREATER_THAN: The greater-than operator.</p> </li> <li> <p>IN: The in operator.</p> </li> <li> <p>LESS_THAN: The less-than operator.</p> </li> <li> <p>NOT_IN: The not-in operator.</p> </li> <li> <p>CONTAINS: The contains operator.</p> </li> </ul>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The rule's value.</p>"
        }
      },
      "documentation":"<p>Represents a condition for a device pool.</p>"
    },
    "RuleOperator":{
      "type":"string",
      "enum":[
        "EQUALS",
        "LESS_THAN",
        "GREATER_THAN",
        "IN",
        "NOT_IN",
        "CONTAINS"
      ]
    },
    "Rules":{
      "type":"list",
      "member":{"shape":"Rule"}
    },
    "Run":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The run's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The run's name.</p>"
        },
        "type":{
          "shape":"TestType",
          "documentation":"<p>The run's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for Web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The XCode test type.</p> </li> <li> <p>XCTEST_UI: The XCode UI test type.</p> </li> </ul>"
        },
        "platform":{
          "shape":"DevicePlatform",
          "documentation":"<p>The run's platform.</p> <p>Allowed values include:</p> <ul> <li> <p>ANDROID: The Android platform.</p> </li> <li> <p>IOS: The iOS platform.</p> </li> </ul>"
        },
        "created":{
          "shape":"DateTime",
          "documentation":"<p>When the run was created.</p>"
        },
        "status":{
          "shape":"ExecutionStatus",
          "documentation":"<p>The run's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending status.</p> </li> <li> <p>PENDING_CONCURRENCY: A pending concurrency status.</p> </li> <li> <p>PENDING_DEVICE: A pending device status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SCHEDULING: A scheduling status.</p> </li> <li> <p>PREPARING: A preparing status.</p> </li> <li> <p>RUNNING: A running status.</p> </li> <li> <p>COMPLETED: A completed status.</p> </li> <li> <p>STOPPING: A stopping status.</p> </li> </ul>"
        },
        "result":{
          "shape":"ExecutionResult",
          "documentation":"<p>The run's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>"
        },
        "started":{
          "shape":"DateTime",
          "documentation":"<p>The run's start time.</p>"
        },
        "stopped":{
          "shape":"DateTime",
          "documentation":"<p>The run's stop time.</p>"
        },
        "counters":{
          "shape":"Counters",
          "documentation":"<p>The run's result counters.</p>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the run's result.</p>"
        },
        "totalJobs":{
          "shape":"Integer",
          "documentation":"<p>The total number of jobs for the run.</p>"
        },
        "completedJobs":{
          "shape":"Integer",
          "documentation":"<p>The total number of completed jobs.</p>"
        },
        "billingMethod":{
          "shape":"BillingMethod",
          "documentation":"<p>Specifies the billing method for a test run: <code>metered</code> or <code>unmetered</code>. If the parameter is not specified, the default value is <code>metered</code>.</p>"
        },
        "deviceMinutes":{
          "shape":"DeviceMinutes",
          "documentation":"<p>Represents the total (metered or unmetered) minutes used by the test run.</p>"
        },
        "networkProfile":{
          "shape":"NetworkProfile",
          "documentation":"<p>The network profile being used for a test run.</p>"
        },
        "parsingResultUrl":{
          "shape":"String",
          "documentation":"<p>Read-only URL for an object in S3 bucket where you can get the parsing results of the test package. If the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points to.</p>"
        },
        "resultCode":{
          "shape":"ExecutionResultCode",
          "documentation":"<p>Supporting field for the result field. Set only if <code>result</code> is <code>SKIPPED</code>. <code>PARSING_FAILED</code> if the result is skipped because of test package parsing failure.</p>"
        },
        "seed":{
          "shape":"Integer",
          "documentation":"<p>For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.</p>"
        },
        "appUpload":{
          "shape":"AmazonResourceName",
          "documentation":"<p>An app to upload or that has been uploaded.</p>"
        },
        "eventCount":{
          "shape":"Integer",
          "documentation":"<p>For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz test should perform.</p>"
        },
        "jobTimeoutMinutes":{
          "shape":"JobTimeoutMinutes",
          "documentation":"<p>The number of minutes the job will execute before it times out.</p>"
        },
        "devicePoolArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the device pool for the run.</p>"
        },
        "locale":{
          "shape":"String",
          "documentation":"<p>Information about the locale that is used for the run.</p>"
        },
        "radios":{
          "shape":"Radios",
          "documentation":"<p>Information about the radio states for the run.</p>"
        },
        "location":{
          "shape":"Location",
          "documentation":"<p>Information about the location that is used for the run.</p>"
        },
        "customerArtifactPaths":{
          "shape":"CustomerArtifactPaths",
          "documentation":"<p>Output <code>CustomerArtifactPaths</code> object for the test run.</p>"
        },
        "webUrl":{
          "shape":"String",
          "documentation":"<p>The Device Farm console URL for the recording of the run.</p>"
        },
        "skipAppResign":{
          "shape":"SkipAppResign",
          "documentation":"<p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href=\"https://aws.amazon.com/device-farm/faq/\">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>"
        },
        "testSpecArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the YAML-formatted test specification for the run.</p>"
        }
      },
      "documentation":"<p>Represents a test run on a set of devices with a given app package, test parameters, etc.</p>"
    },
    "Runs":{
      "type":"list",
      "member":{"shape":"Run"}
    },
    "Sample":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The sample's ARN.</p>"
        },
        "type":{
          "shape":"SampleType",
          "documentation":"<p>The sample's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>CPU: A CPU sample type. This is expressed as the app processing CPU time (including child processes) as reported by process, as a percentage.</p> </li> <li> <p>MEMORY: A memory usage sample type. This is expressed as the total proportional set size of an app process, in kilobytes.</p> </li> <li> <p>NATIVE_AVG_DRAWTIME</p> </li> <li> <p>NATIVE_FPS</p> </li> <li> <p>NATIVE_FRAMES</p> </li> <li> <p>NATIVE_MAX_DRAWTIME</p> </li> <li> <p>NATIVE_MIN_DRAWTIME</p> </li> <li> <p>OPENGL_AVG_DRAWTIME</p> </li> <li> <p>OPENGL_FPS</p> </li> <li> <p>OPENGL_FRAMES</p> </li> <li> <p>OPENGL_MAX_DRAWTIME</p> </li> <li> <p>OPENGL_MIN_DRAWTIME</p> </li> <li> <p>RX</p> </li> <li> <p>RX_RATE: The total number of bytes per second (TCP and UDP) that are sent, by app process.</p> </li> <li> <p>THREADS: A threads sample type. This is expressed as the total number of threads per app process.</p> </li> <li> <p>TX</p> </li> <li> <p>TX_RATE: The total number of bytes per second (TCP and UDP) that are received, by app process.</p> </li> </ul>"
        },
        "url":{
          "shape":"URL",
          "documentation":"<p>The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the sample's file.</p>"
        }
      },
      "documentation":"<p>Represents a sample of performance data.</p>"
    },
    "SampleType":{
      "type":"string",
      "enum":[
        "CPU",
        "MEMORY",
        "THREADS",
        "RX_RATE",
        "TX_RATE",
        "RX",
        "TX",
        "NATIVE_FRAMES",
        "NATIVE_FPS",
        "NATIVE_MIN_DRAWTIME",
        "NATIVE_AVG_DRAWTIME",
        "NATIVE_MAX_DRAWTIME",
        "OPENGL_FRAMES",
        "OPENGL_FPS",
        "OPENGL_MIN_DRAWTIME",
        "OPENGL_AVG_DRAWTIME",
        "OPENGL_MAX_DRAWTIME"
      ]
    },
    "Samples":{
      "type":"list",
      "member":{"shape":"Sample"}
    },
    "ScheduleRunConfiguration":{
      "type":"structure",
      "members":{
        "extraDataPackageArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the extra data for the run. The extra data is a .zip file that AWS Device Farm will extract to external data for Android or the app's sandbox for iOS.</p>"
        },
        "networkProfileArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>Reserved for internal use.</p>"
        },
        "locale":{
          "shape":"String",
          "documentation":"<p>Information about the locale that is used for the run.</p>"
        },
        "location":{
          "shape":"Location",
          "documentation":"<p>Information about the location that is used for the run.</p>"
        },
        "vpceConfigurationArns":{
          "shape":"AmazonResourceNames",
          "documentation":"<p>An array of Amazon Resource Names (ARNs) for your VPC endpoint configurations.</p>"
        },
        "customerArtifactPaths":{
          "shape":"CustomerArtifactPaths",
          "documentation":"<p>Input <code>CustomerArtifactPaths</code> object for the scheduled run configuration.</p>"
        },
        "radios":{
          "shape":"Radios",
          "documentation":"<p>Information about the radio states for the run.</p>"
        },
        "auxiliaryApps":{
          "shape":"AmazonResourceNames",
          "documentation":"<p>A list of auxiliary apps for the run.</p>"
        },
        "billingMethod":{
          "shape":"BillingMethod",
          "documentation":"<p>Specifies the billing method for a test run: <code>metered</code> or <code>unmetered</code>. If the parameter is not specified, the default value is <code>metered</code>.</p>"
        }
      },
      "documentation":"<p>Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.</p>"
    },
    "ScheduleRunRequest":{
      "type":"structure",
      "required":[
        "projectArn",
        "devicePoolArn",
        "test"
      ],
      "members":{
        "projectArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the project for the run to be scheduled.</p>"
        },
        "appArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the app to schedule a run.</p>"
        },
        "devicePoolArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the device pool for the run to be scheduled.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name for the run to be scheduled.</p>"
        },
        "test":{
          "shape":"ScheduleRunTest",
          "documentation":"<p>Information about the test for the run to be scheduled.</p>"
        },
        "configuration":{
          "shape":"ScheduleRunConfiguration",
          "documentation":"<p>Information about the settings for the run to be scheduled.</p>"
        },
        "executionConfiguration":{
          "shape":"ExecutionConfiguration",
          "documentation":"<p>Specifies configuration information about a test run, such as the execution timeout (in minutes).</p>"
        }
      },
      "documentation":"<p>Represents a request to the schedule run operation.</p>"
    },
    "ScheduleRunResult":{
      "type":"structure",
      "members":{
        "run":{
          "shape":"Run",
          "documentation":"<p>Information about the scheduled run.</p>"
        }
      },
      "documentation":"<p>Represents the result of a schedule run request.</p>"
    },
    "ScheduleRunTest":{
      "type":"structure",
      "required":["type"],
      "members":{
        "type":{
          "shape":"TestType",
          "documentation":"<p>The test's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for Web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The XCode test type.</p> </li> <li> <p>XCTEST_UI: The XCode UI test type.</p> </li> </ul>"
        },
        "testPackageArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the uploaded test that will be run.</p>"
        },
        "testSpecArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The ARN of the YAML-formatted test specification.</p>"
        },
        "filter":{
          "shape":"Filter",
          "documentation":"<p>The test's filter.</p>"
        },
        "parameters":{
          "shape":"TestParameters",
          "documentation":"<p>The test's parameters, such as the following test framework parameters and fixture settings:</p> <p>For Calabash tests:</p> <ul> <li> <p>profile: A cucumber profile, for example, \"my_profile_name\".</p> </li> <li> <p>tags: You can limit execution to features or scenarios that have (or don't have) certain tags, for example, \"@smoke\" or \"@smoke,~@wip\".</p> </li> </ul> <p>For Appium tests (all types):</p> <ul> <li> <p>appium_version: The Appium version. Currently supported values are \"1.4.16\", \"1.6.3\", \"latest\", and \"default\".</p> <ul> <li> <p>“latest” will run the latest Appium version supported by Device Farm (1.6.3).</p> </li> <li> <p>For “default”, Device Farm will choose a compatible version of Appium for the device. The current behavior is to run 1.4.16 on Android devices and iOS 9 and earlier, 1.6.3 for iOS 10 and later.</p> </li> <li> <p>This behavior is subject to change.</p> </li> </ul> </li> </ul> <p>For Fuzz tests (Android only):</p> <ul> <li> <p>event_count: The number of events, between 1 and 10000, that the UI fuzz test should perform.</p> </li> <li> <p>throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should wait between events.</p> </li> <li> <p>seed: A seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.</p> </li> </ul> <p>For Explorer tests:</p> <ul> <li> <p>username: A username to use if the Explorer encounters a login form. If not supplied, no username will be inserted.</p> </li> <li> <p>password: A password to use if the Explorer encounters a login form. If not supplied, no password will be inserted.</p> </li> </ul> <p>For Instrumentation:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test case: \"com.android.abc.Test1\"</p> </li> <li> <p>Running a single test: \"com.android.abc.Test1#smoke\"</p> </li> <li> <p>Running multiple tests: \"com.android.abc.Test1,com.android.abc.Test2\"</p> </li> </ul> </li> </ul> <p>For XCTest and XCTestUI:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test class: \"LoginTests\"</p> </li> <li> <p>Running a multiple test classes: \"LoginTests,SmokeTests\"</p> </li> <li> <p>Running a single test: \"LoginTests/testValid\"</p> </li> <li> <p>Running multiple tests: \"LoginTests/testValid,LoginTests/testInvalid\"</p> </li> </ul> </li> </ul> <p>For UIAutomator:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test case: \"com.android.abc.Test1\"</p> </li> <li> <p>Running a single test: \"com.android.abc.Test1#smoke\"</p> </li> <li> <p>Running multiple tests: \"com.android.abc.Test1,com.android.abc.Test2\"</p> </li> </ul> </li> </ul>"
        }
      },
      "documentation":"<p>Represents additional test settings.</p>"
    },
    "ServiceAccountException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"Message",
          "documentation":"<p>Any additional information about the exception.</p>"
        }
      },
      "documentation":"<p>There was a problem with the service account.</p>",
      "exception":true
    },
    "ServiceDnsName":{
      "type":"string",
      "max":2048,
      "min":0
    },
    "SkipAppResign":{"type":"boolean"},
    "SshPublicKey":{
      "type":"string",
      "max":8192,
      "min":0
    },
    "StopJobRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>Represents the Amazon Resource Name (ARN) of the Device Farm job you wish to stop.</p>"
        }
      }
    },
    "StopJobResult":{
      "type":"structure",
      "members":{
        "job":{
          "shape":"Job",
          "documentation":"<p>The job that was stopped.</p>"
        }
      }
    },
    "StopRemoteAccessSessionRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the remote access session you wish to stop.</p>"
        }
      },
      "documentation":"<p>Represents the request to stop the remote access session.</p>"
    },
    "StopRemoteAccessSessionResult":{
      "type":"structure",
      "members":{
        "remoteAccessSession":{
          "shape":"RemoteAccessSession",
          "documentation":"<p>A container representing the metadata from the service about the remote access session you are stopping.</p>"
        }
      },
      "documentation":"<p>Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.</p>"
    },
    "StopRunRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>Represents the Amazon Resource Name (ARN) of the Device Farm run you wish to stop.</p>"
        }
      },
      "documentation":"<p>Represents the request to stop a specific run.</p>"
    },
    "StopRunResult":{
      "type":"structure",
      "members":{
        "run":{
          "shape":"Run",
          "documentation":"<p>The run that was stopped.</p>"
        }
      },
      "documentation":"<p>Represents the results of your stop run attempt.</p>"
    },
    "String":{"type":"string"},
    "Suite":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The suite's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The suite's name.</p>"
        },
        "type":{
          "shape":"TestType",
          "documentation":"<p>The suite's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for Web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The XCode test type.</p> </li> <li> <p>XCTEST_UI: The XCode UI test type.</p> </li> </ul>"
        },
        "created":{
          "shape":"DateTime",
          "documentation":"<p>When the suite was created.</p>"
        },
        "status":{
          "shape":"ExecutionStatus",
          "documentation":"<p>The suite's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending status.</p> </li> <li> <p>PENDING_CONCURRENCY: A pending concurrency status.</p> </li> <li> <p>PENDING_DEVICE: A pending device status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SCHEDULING: A scheduling status.</p> </li> <li> <p>PREPARING: A preparing status.</p> </li> <li> <p>RUNNING: A running status.</p> </li> <li> <p>COMPLETED: A completed status.</p> </li> <li> <p>STOPPING: A stopping status.</p> </li> </ul>"
        },
        "result":{
          "shape":"ExecutionResult",
          "documentation":"<p>The suite's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>"
        },
        "started":{
          "shape":"DateTime",
          "documentation":"<p>The suite's start time.</p>"
        },
        "stopped":{
          "shape":"DateTime",
          "documentation":"<p>The suite's stop time.</p>"
        },
        "counters":{
          "shape":"Counters",
          "documentation":"<p>The suite's result counters.</p>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the suite's result.</p>"
        },
        "deviceMinutes":{
          "shape":"DeviceMinutes",
          "documentation":"<p>Represents the total (metered or unmetered) minutes used by the test suite.</p>"
        }
      },
      "documentation":"<p>Represents a collection of one or more tests.</p>"
    },
    "Suites":{
      "type":"list",
      "member":{"shape":"Suite"}
    },
    "Test":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The test's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The test's name.</p>"
        },
        "type":{
          "shape":"TestType",
          "documentation":"<p>The test's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for Web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The XCode test type.</p> </li> <li> <p>XCTEST_UI: The XCode UI test type.</p> </li> </ul>"
        },
        "created":{
          "shape":"DateTime",
          "documentation":"<p>When the test was created.</p>"
        },
        "status":{
          "shape":"ExecutionStatus",
          "documentation":"<p>The test's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending status.</p> </li> <li> <p>PENDING_CONCURRENCY: A pending concurrency status.</p> </li> <li> <p>PENDING_DEVICE: A pending device status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SCHEDULING: A scheduling status.</p> </li> <li> <p>PREPARING: A preparing status.</p> </li> <li> <p>RUNNING: A running status.</p> </li> <li> <p>COMPLETED: A completed status.</p> </li> <li> <p>STOPPING: A stopping status.</p> </li> </ul>"
        },
        "result":{
          "shape":"ExecutionResult",
          "documentation":"<p>The test's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>"
        },
        "started":{
          "shape":"DateTime",
          "documentation":"<p>The test's start time.</p>"
        },
        "stopped":{
          "shape":"DateTime",
          "documentation":"<p>The test's stop time.</p>"
        },
        "counters":{
          "shape":"Counters",
          "documentation":"<p>The test's result counters.</p>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the test's result.</p>"
        },
        "deviceMinutes":{
          "shape":"DeviceMinutes",
          "documentation":"<p>Represents the total (metered or unmetered) minutes used by the test.</p>"
        }
      },
      "documentation":"<p>Represents a condition that is evaluated.</p>"
    },
    "TestParameters":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "TestType":{
      "type":"string",
      "enum":[
        "BUILTIN_FUZZ",
        "BUILTIN_EXPLORER",
        "WEB_PERFORMANCE_PROFILE",
        "APPIUM_JAVA_JUNIT",
        "APPIUM_JAVA_TESTNG",
        "APPIUM_PYTHON",
        "APPIUM_WEB_JAVA_JUNIT",
        "APPIUM_WEB_JAVA_TESTNG",
        "APPIUM_WEB_PYTHON",
        "CALABASH",
        "INSTRUMENTATION",
        "UIAUTOMATION",
        "UIAUTOMATOR",
        "XCTEST",
        "XCTEST_UI",
        "REMOTE_ACCESS_RECORD",
        "REMOTE_ACCESS_REPLAY"
      ]
    },
    "Tests":{
      "type":"list",
      "member":{"shape":"Test"}
    },
    "TransactionIdentifier":{
      "type":"string",
      "min":32
    },
    "TrialMinutes":{
      "type":"structure",
      "members":{
        "total":{
          "shape":"Double",
          "documentation":"<p>The total number of free trial minutes that the account started with.</p>"
        },
        "remaining":{
          "shape":"Double",
          "documentation":"<p>The number of free trial minutes remaining in the account.</p>"
        }
      },
      "documentation":"<p>Represents information about free trial device minutes for an AWS account.</p>"
    },
    "URL":{
      "type":"string",
      "max":2048,
      "min":0
    },
    "UniqueProblem":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the unique problems' result.</p>"
        },
        "problems":{
          "shape":"Problems",
          "documentation":"<p>Information about the problems.</p>"
        }
      },
      "documentation":"<p>A collection of one or more problems, grouped by their result.</p>"
    },
    "UniqueProblems":{
      "type":"list",
      "member":{"shape":"UniqueProblem"}
    },
    "UniqueProblemsByExecutionResultMap":{
      "type":"map",
      "key":{"shape":"ExecutionResult"},
      "value":{"shape":"UniqueProblems"}
    },
    "UpdateDeviceInstanceRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the device instance.</p>"
        },
        "profileArn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the profile that you want to associate with the device instance.</p>"
        },
        "labels":{
          "shape":"InstanceLabels",
          "documentation":"<p>An array of strings that you want to associate with the device instance.</p>"
        }
      }
    },
    "UpdateDeviceInstanceResult":{
      "type":"structure",
      "members":{
        "deviceInstance":{
          "shape":"DeviceInstance",
          "documentation":"<p>An object containing information about your device instance.</p>"
        }
      }
    },
    "UpdateDevicePoolRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resourc Name (ARN) of the Device Farm device pool you wish to update.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>A string representing the name of the device pool you wish to update.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>A description of the device pool you wish to update.</p>"
        },
        "rules":{
          "shape":"Rules",
          "documentation":"<p>Represents the rules you wish to modify for the device pool. Updating rules is optional; however, if you choose to update rules for your request, the update will replace the existing rules.</p>"
        }
      },
      "documentation":"<p>Represents a request to the update device pool operation.</p>"
    },
    "UpdateDevicePoolResult":{
      "type":"structure",
      "members":{
        "devicePool":{
          "shape":"DevicePool",
          "documentation":"<p>The device pool you just updated.</p>"
        }
      },
      "documentation":"<p>Represents the result of an update device pool request.</p>"
    },
    "UpdateInstanceProfileRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the instance profile.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The updated name for your instance profile.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>The updated description for your instance profile.</p>"
        },
        "packageCleanup":{
          "shape":"Boolean",
          "documentation":"<p>The updated choice for whether you want to specify package cleanup. The default value is <code>false</code> for private devices.</p>"
        },
        "excludeAppPackagesFromCleanup":{
          "shape":"PackageIds",
          "documentation":"<p>An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over.</p> <p>The list of packages is only considered if you set <code>packageCleanup</code> to <code>true</code>.</p>"
        },
        "rebootAfterUse":{
          "shape":"Boolean",
          "documentation":"<p>The updated choice for whether you want to reboot the device after use. The default value is <code>true</code>.</p>"
        }
      }
    },
    "UpdateInstanceProfileResult":{
      "type":"structure",
      "members":{
        "instanceProfile":{
          "shape":"InstanceProfile",
          "documentation":"<p>An object containing information about your instance profile.</p>"
        }
      }
    },
    "UpdateNetworkProfileRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project for which you want to update network profile settings.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the network profile about which you are returning information.</p>"
        },
        "description":{
          "shape":"Message",
          "documentation":"<p>The descriptoin of the network profile about which you are returning information.</p>"
        },
        "type":{
          "shape":"NetworkProfileType",
          "documentation":"<p>The type of network profile you wish to return information about. Valid values are listed below.</p>"
        },
        "uplinkBandwidthBits":{
          "shape":"Long",
          "documentation":"<p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>"
        },
        "downlinkBandwidthBits":{
          "shape":"Long",
          "documentation":"<p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>"
        },
        "uplinkDelayMs":{
          "shape":"Long",
          "documentation":"<p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>"
        },
        "downlinkDelayMs":{
          "shape":"Long",
          "documentation":"<p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>"
        },
        "uplinkJitterMs":{
          "shape":"Long",
          "documentation":"<p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>"
        },
        "downlinkJitterMs":{
          "shape":"Long",
          "documentation":"<p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>"
        },
        "uplinkLossPercent":{
          "shape":"PercentInteger",
          "documentation":"<p>Proportion of transmitted packets that fail to arrive from 0 to 100 percent.</p>"
        },
        "downlinkLossPercent":{
          "shape":"PercentInteger",
          "documentation":"<p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>"
        }
      }
    },
    "UpdateNetworkProfileResult":{
      "type":"structure",
      "members":{
        "networkProfile":{
          "shape":"NetworkProfile",
          "documentation":"<p>A list of the available network profiles.</p>"
        }
      }
    },
    "UpdateProjectRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the project whose name you wish to update.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>A string representing the new name of the project that you are updating.</p>"
        },
        "defaultJobTimeoutMinutes":{
          "shape":"JobTimeoutMinutes",
          "documentation":"<p>The number of minutes a test run in the project will execute before it times out.</p>"
        }
      },
      "documentation":"<p>Represents a request to the update project operation.</p>"
    },
    "UpdateProjectResult":{
      "type":"structure",
      "members":{
        "project":{
          "shape":"Project",
          "documentation":"<p>The project you wish to update.</p>"
        }
      },
      "documentation":"<p>Represents the result of an update project request.</p>"
    },
    "UpdateUploadRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the uploaded test spec.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The upload's test spec file name. The name should not contain the '/' character. The test spec file name must end with the <code>.yaml</code> or <code>.yml</code> file extension.</p>"
        },
        "contentType":{
          "shape":"ContentType",
          "documentation":"<p>The upload's content type (for example, \"application/x-yaml\").</p>"
        },
        "editContent":{
          "shape":"Boolean",
          "documentation":"<p>Set to true if the YAML file has changed and needs to be updated; otherwise, set to false.</p>"
        }
      }
    },
    "UpdateUploadResult":{
      "type":"structure",
      "members":{
        "upload":{
          "shape":"Upload",
          "documentation":"<p>A test spec uploaded to Device Farm.</p>"
        }
      }
    },
    "UpdateVPCEConfigurationRequest":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to update.</p>"
        },
        "vpceConfigurationName":{
          "shape":"VPCEConfigurationName",
          "documentation":"<p>The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.</p>"
        },
        "vpceServiceName":{
          "shape":"VPCEServiceName",
          "documentation":"<p>The name of the VPC endpoint service running inside your AWS account that you want Device Farm to test.</p>"
        },
        "serviceDnsName":{
          "shape":"ServiceDnsName",
          "documentation":"<p>The DNS (domain) name used to connect to your private service in your Amazon VPC. The DNS name must not already be in use on the Internet.</p>"
        },
        "vpceConfigurationDescription":{
          "shape":"VPCEConfigurationDescription",
          "documentation":"<p>An optional description, providing more details about your VPC endpoint configuration.</p>"
        }
      }
    },
    "UpdateVPCEConfigurationResult":{
      "type":"structure",
      "members":{
        "vpceConfiguration":{
          "shape":"VPCEConfiguration",
          "documentation":"<p>An object containing information about your VPC endpoint configuration.</p>"
        }
      }
    },
    "Upload":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The upload's ARN.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The upload's file name.</p>"
        },
        "created":{
          "shape":"DateTime",
          "documentation":"<p>When the upload was created.</p>"
        },
        "type":{
          "shape":"UploadType",
          "documentation":"<p>The upload's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>ANDROID_APP: An Android upload.</p> </li> <li> <p>IOS_APP: An iOS upload.</p> </li> <li> <p>WEB_APP: A web appliction upload.</p> </li> <li> <p>EXTERNAL_DATA: An external data upload.</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p> </li> <li> <p>APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p> </li> <li> <p>CALABASH_TEST_PACKAGE: A Calabash test package upload.</p> </li> <li> <p>INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.</p> </li> <li> <p>UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.</p> </li> <li> <p>UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.</p> </li> <li> <p>XCTEST_TEST_PACKAGE: An XCode test package upload.</p> </li> <li> <p>XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.</p> </li> </ul>"
        },
        "status":{
          "shape":"UploadStatus",
          "documentation":"<p>The upload's status.</p> <p>Must be one of the following values:</p> <ul> <li> <p>FAILED: A failed status.</p> </li> <li> <p>INITIALIZED: An initialized status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SUCCEEDED: A succeeded status.</p> </li> </ul>"
        },
        "url":{
          "shape":"URL",
          "documentation":"<p>The pre-signed Amazon S3 URL that was used to store a file through a corresponding PUT request.</p>"
        },
        "metadata":{
          "shape":"Metadata",
          "documentation":"<p>The upload's metadata. For example, for Android, this contains information that is parsed from the manifest and is displayed in the AWS Device Farm console after the associated app is uploaded.</p>"
        },
        "contentType":{
          "shape":"ContentType",
          "documentation":"<p>The upload's content type (for example, \"application/octet-stream\").</p>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>A message about the upload's result.</p>"
        },
        "category":{
          "shape":"UploadCategory",
          "documentation":"<p>The upload's category. Allowed values include:</p> <ul> <li> <p>CURATED: An upload managed by AWS Device Farm.</p> </li> <li> <p>PRIVATE: An upload managed by the AWS Device Farm customer.</p> </li> </ul>"
        }
      },
      "documentation":"<p>An app or a set of one or more tests to upload or that have been uploaded.</p>"
    },
    "UploadCategory":{
      "type":"string",
      "enum":[
        "CURATED",
        "PRIVATE"
      ]
    },
    "UploadStatus":{
      "type":"string",
      "enum":[
        "INITIALIZED",
        "PROCESSING",
        "SUCCEEDED",
        "FAILED"
      ]
    },
    "UploadType":{
      "type":"string",
      "enum":[
        "ANDROID_APP",
        "IOS_APP",
        "WEB_APP",
        "EXTERNAL_DATA",
        "APPIUM_JAVA_JUNIT_TEST_PACKAGE",
        "APPIUM_JAVA_TESTNG_TEST_PACKAGE",
        "APPIUM_PYTHON_TEST_PACKAGE",
        "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE",
        "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE",
        "APPIUM_WEB_PYTHON_TEST_PACKAGE",
        "CALABASH_TEST_PACKAGE",
        "INSTRUMENTATION_TEST_PACKAGE",
        "UIAUTOMATION_TEST_PACKAGE",
        "UIAUTOMATOR_TEST_PACKAGE",
        "XCTEST_TEST_PACKAGE",
        "XCTEST_UI_TEST_PACKAGE",
        "APPIUM_JAVA_JUNIT_TEST_SPEC",
        "APPIUM_JAVA_TESTNG_TEST_SPEC",
        "APPIUM_PYTHON_TEST_SPEC",
        "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC",
        "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC",
        "APPIUM_WEB_PYTHON_TEST_SPEC",
        "INSTRUMENTATION_TEST_SPEC",
        "XCTEST_UI_TEST_SPEC"
      ]
    },
    "Uploads":{
      "type":"list",
      "member":{"shape":"Upload"}
    },
    "VPCEConfiguration":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"AmazonResourceName",
          "documentation":"<p>The Amazon Resource Name (ARN) of the VPC endpoint configuration.</p>"
        },
        "vpceConfigurationName":{
          "shape":"VPCEConfigurationName",
          "documentation":"<p>The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.</p>"
        },
        "vpceServiceName":{
          "shape":"VPCEServiceName",
          "documentation":"<p>The name of the VPC endpoint service running inside your AWS account that you want Device Farm to test.</p>"
        },
        "serviceDnsName":{
          "shape":"ServiceDnsName",
          "documentation":"<p>The DNS name that maps to the private IP address of the service you want to access.</p>"
        },
        "vpceConfigurationDescription":{
          "shape":"VPCEConfigurationDescription",
          "documentation":"<p>An optional description, providing more details about your VPC endpoint configuration.</p>"
        }
      },
      "documentation":"<p>Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>"
    },
    "VPCEConfigurationDescription":{
      "type":"string",
      "max":2048,
      "min":0
    },
    "VPCEConfigurationName":{
      "type":"string",
      "max":1024,
      "min":0
    },
    "VPCEConfigurations":{
      "type":"list",
      "member":{"shape":"VPCEConfiguration"}
    },
    "VPCEServiceName":{
      "type":"string",
      "max":2048,
      "min":0
    },
    "VideoCapture":{"type":"boolean"}
  },
  "documentation":"<p>AWS Device Farm is a service that enables mobile app developers to test Android, iOS, and Fire OS apps on physical phones, tablets, and other devices in the cloud.</p>"
}
