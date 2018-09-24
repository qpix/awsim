awsim['iot'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-05-28",
    "endpointPrefix":"iot",
    "protocol":"rest-json",
    "serviceFullName":"AWS IoT",
    "serviceId":"IoT",
    "signatureVersion":"v4",
    "signingName":"execute-api",
    "uid":"iot-2015-05-28"
  },
  "operations":{
    "AcceptCertificateTransfer":{
      "name":"AcceptCertificateTransfer",
      "http":{
        "method":"PATCH",
        "requestUri":"/accept-certificate-transfer/{certificateId}"
      },
      "input":{"shape":"AcceptCertificateTransferRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"TransferAlreadyCompletedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p>"
    },
    "AddThingToThingGroup":{
      "name":"AddThingToThingGroup",
      "http":{
        "method":"PUT",
        "requestUri":"/thing-groups/addThingToThingGroup"
      },
      "input":{"shape":"AddThingToThingGroupRequest"},
      "output":{"shape":"AddThingToThingGroupResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Adds a thing to a thing group.</p>"
    },
    "AssociateTargetsWithJob":{
      "name":"AssociateTargetsWithJob",
      "http":{
        "method":"POST",
        "requestUri":"/jobs/{jobId}/targets"
      },
      "input":{"shape":"AssociateTargetsWithJobRequest"},
      "output":{"shape":"AssociateTargetsWithJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to \"CONTINUOUS\".</p> </li> <li> <p>The job status must currently be \"IN_PROGRESS\".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul>"
    },
    "AttachPolicy":{
      "name":"AttachPolicy",
      "http":{
        "method":"PUT",
        "requestUri":"/target-policies/{policyName}"
      },
      "input":{"shape":"AttachPolicyRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Attaches a policy to the specified target.</p>"
    },
    "AttachPrincipalPolicy":{
      "name":"AttachPrincipalPolicy",
      "http":{
        "method":"PUT",
        "requestUri":"/principal-policies/{policyName}"
      },
      "input":{"shape":"AttachPrincipalPolicyRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>",
      "deprecated":true
    },
    "AttachSecurityProfile":{
      "name":"AttachSecurityProfile",
      "http":{
        "method":"PUT",
        "requestUri":"/security-profiles/{securityProfileName}/targets"
      },
      "input":{"shape":"AttachSecurityProfileRequest"},
      "output":{"shape":"AttachSecurityProfileResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"VersionConflictException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Associates a Device Defender security profile with a thing group or with this account. Each thing group or account can have up to five security profiles associated with it.</p>"
    },
    "AttachThingPrincipal":{
      "name":"AttachThingPrincipal",
      "http":{
        "method":"PUT",
        "requestUri":"/things/{thingName}/principals"
      },
      "input":{"shape":"AttachThingPrincipalRequest"},
      "output":{"shape":"AttachThingPrincipalResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Attaches the specified principal to the specified thing.</p>"
    },
    "CancelAuditTask":{
      "name":"CancelAuditTask",
      "http":{
        "method":"PUT",
        "requestUri":"/audit/tasks/{taskId}/cancel"
      },
      "input":{"shape":"CancelAuditTaskRequest"},
      "output":{"shape":"CancelAuditTaskResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Cancels an audit that is in progress. The audit can be either scheduled or on-demand. If the audit is not in progress, an \"InvalidRequestException\" occurs.</p>"
    },
    "CancelCertificateTransfer":{
      "name":"CancelCertificateTransfer",
      "http":{
        "method":"PATCH",
        "requestUri":"/cancel-certificate-transfer/{certificateId}"
      },
      "input":{"shape":"CancelCertificateTransferRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"TransferAlreadyCompletedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p>"
    },
    "CancelJob":{
      "name":"CancelJob",
      "http":{
        "method":"PUT",
        "requestUri":"/jobs/{jobId}/cancel"
      },
      "input":{"shape":"CancelJobRequest"},
      "output":{"shape":"CancelJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Cancels a job.</p>"
    },
    "CancelJobExecution":{
      "name":"CancelJobExecution",
      "http":{
        "method":"PUT",
        "requestUri":"/things/{thingName}/jobs/{jobId}/cancel"
      },
      "input":{"shape":"CancelJobExecutionRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidStateTransitionException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"VersionConflictException"}
      ],
      "documentation":"<p>Cancels the execution of a job for a given thing.</p>"
    },
    "ClearDefaultAuthorizer":{
      "name":"ClearDefaultAuthorizer",
      "http":{
        "method":"DELETE",
        "requestUri":"/default-authorizer"
      },
      "input":{"shape":"ClearDefaultAuthorizerRequest"},
      "output":{"shape":"ClearDefaultAuthorizerResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Clears the default authorizer.</p>"
    },
    "CreateAuthorizer":{
      "name":"CreateAuthorizer",
      "http":{
        "method":"POST",
        "requestUri":"/authorizer/{authorizerName}"
      },
      "input":{"shape":"CreateAuthorizerRequest"},
      "output":{"shape":"CreateAuthorizerResponse"},
      "errors":[
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"InvalidRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates an authorizer.</p>"
    },
    "CreateCertificateFromCsr":{
      "name":"CreateCertificateFromCsr",
      "http":{
        "method":"POST",
        "requestUri":"/certificates"
      },
      "input":{"shape":"CreateCertificateFromCsrRequest"},
      "output":{"shape":"CreateCertificateFromCsrResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates an X.509 certificate using the specified certificate signing request.</p> <p> <b>Note:</b> The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves. </p> <p> <b>Note:</b> Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> <p>You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs.</p> <p>Assuming a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is:</p> <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR.</p> <p>The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process:</p> <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_}</p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; forfiles /p my-csr-directory /c \"cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path\"</p>"
    },
    "CreateJob":{
      "name":"CreateJob",
      "http":{
        "method":"PUT",
        "requestUri":"/jobs/{jobId}"
      },
      "input":{"shape":"CreateJobRequest"},
      "output":{"shape":"CreateJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"LimitExceededException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Creates a job.</p>"
    },
    "CreateKeysAndCertificate":{
      "name":"CreateKeysAndCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/keys-and-certificate"
      },
      "input":{"shape":"CreateKeysAndCertificateRequest"},
      "output":{"shape":"CreateKeysAndCertificateResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key.</p> <p> <b>Note</b> This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p>"
    },
    "CreateOTAUpdate":{
      "name":"CreateOTAUpdate",
      "http":{
        "method":"POST",
        "requestUri":"/otaUpdates/{otaUpdateId}"
      },
      "input":{"shape":"CreateOTAUpdateRequest"},
      "output":{"shape":"CreateOTAUpdateResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Creates an AWS IoT OTAUpdate on a target group of things or groups.</p>"
    },
    "CreatePolicy":{
      "name":"CreatePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/policies/{policyName}"
      },
      "input":{"shape":"CreatePolicyRequest"},
      "output":{"shape":"CreatePolicyResponse"},
      "errors":[
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"MalformedPolicyException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates an AWS IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p>"
    },
    "CreatePolicyVersion":{
      "name":"CreatePolicyVersion",
      "http":{
        "method":"POST",
        "requestUri":"/policies/{policyName}/version"
      },
      "input":{"shape":"CreatePolicyVersionRequest"},
      "output":{"shape":"CreatePolicyVersionResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"MalformedPolicyException"},
        {"shape":"VersionsLimitExceededException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p>"
    },
    "CreateRoleAlias":{
      "name":"CreateRoleAlias",
      "http":{
        "method":"POST",
        "requestUri":"/role-aliases/{roleAlias}"
      },
      "input":{"shape":"CreateRoleAliasRequest"},
      "output":{"shape":"CreateRoleAliasResponse"},
      "errors":[
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"InvalidRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a role alias.</p>"
    },
    "CreateScheduledAudit":{
      "name":"CreateScheduledAudit",
      "http":{
        "method":"POST",
        "requestUri":"/audit/scheduledaudits/{scheduledAuditName}"
      },
      "input":{"shape":"CreateScheduledAuditRequest"},
      "output":{"shape":"CreateScheduledAuditResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a scheduled audit that is run at a specified time interval.</p>"
    },
    "CreateSecurityProfile":{
      "name":"CreateSecurityProfile",
      "http":{
        "method":"POST",
        "requestUri":"/security-profiles/{securityProfileName}"
      },
      "input":{"shape":"CreateSecurityProfileRequest"},
      "output":{"shape":"CreateSecurityProfileResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a Device Defender security profile.</p>"
    },
    "CreateStream":{
      "name":"CreateStream",
      "http":{
        "method":"POST",
        "requestUri":"/streams/{streamId}"
      },
      "input":{"shape":"CreateStreamRequest"},
      "output":{"shape":"CreateStreamResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream. The total size of a file associated with the stream cannot exceed more than 2 MB. The stream will be created with version 0. If a stream is created with the same streamID as a stream that existed and was deleted within last 90 days, we will resurrect that old stream by incrementing the version by 1.</p>"
    },
    "CreateThing":{
      "name":"CreateThing",
      "http":{
        "method":"POST",
        "requestUri":"/things/{thingName}"
      },
      "input":{"shape":"CreateThingRequest"},
      "output":{"shape":"CreateThingResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Creates a thing record in the registry.</p> <note> <p>This is a control plane operation. See <a href=\"http://docs.aws.amazon.com/iot/latest/developerguide/authorization.html\">Authorization</a> for information about authorizing control plane actions.</p> </note>"
    },
    "CreateThingGroup":{
      "name":"CreateThingGroup",
      "http":{
        "method":"POST",
        "requestUri":"/thing-groups/{thingGroupName}"
      },
      "input":{"shape":"CreateThingGroupRequest"},
      "output":{"shape":"CreateThingGroupResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href=\"http://docs.aws.amazon.com/iot/latest/developerguide/authorization.html\">Authorization</a> for information about authorizing control plane actions.</p> </note>"
    },
    "CreateThingType":{
      "name":"CreateThingType",
      "http":{
        "method":"POST",
        "requestUri":"/thing-types/{thingTypeName}"
      },
      "input":{"shape":"CreateThingTypeRequest"},
      "output":{"shape":"CreateThingTypeResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceAlreadyExistsException"}
      ],
      "documentation":"<p>Creates a new thing type.</p>"
    },
    "CreateTopicRule":{
      "name":"CreateTopicRule",
      "http":{
        "method":"POST",
        "requestUri":"/rules/{ruleName}"
      },
      "input":{"shape":"CreateTopicRuleRequest"},
      "errors":[
        {"shape":"SqlParseException"},
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p>"
    },
    "DeleteAccountAuditConfiguration":{
      "name":"DeleteAccountAuditConfiguration",
      "http":{
        "method":"DELETE",
        "requestUri":"/audit/configuration"
      },
      "input":{"shape":"DeleteAccountAuditConfigurationRequest"},
      "output":{"shape":"DeleteAccountAuditConfigurationResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. </p>"
    },
    "DeleteAuthorizer":{
      "name":"DeleteAuthorizer",
      "http":{
        "method":"DELETE",
        "requestUri":"/authorizer/{authorizerName}"
      },
      "input":{"shape":"DeleteAuthorizerRequest"},
      "output":{"shape":"DeleteAuthorizerResponse"},
      "errors":[
        {"shape":"DeleteConflictException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes an authorizer.</p>"
    },
    "DeleteCACertificate":{
      "name":"DeleteCACertificate",
      "http":{
        "method":"DELETE",
        "requestUri":"/cacertificate/{caCertificateId}"
      },
      "input":{"shape":"DeleteCACertificateRequest"},
      "output":{"shape":"DeleteCACertificateResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"CertificateStateException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Deletes a registered CA certificate.</p>"
    },
    "DeleteCertificate":{
      "name":"DeleteCertificate",
      "http":{
        "method":"DELETE",
        "requestUri":"/certificates/{certificateId}"
      },
      "input":{"shape":"DeleteCertificateRequest"},
      "errors":[
        {"shape":"CertificateStateException"},
        {"shape":"DeleteConflictException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPrincipalPolicy</a> API to detach all policies. Next, use the <a>UpdateCertificate</a> API to set the certificate to the INACTIVE status.</p>"
    },
    "DeleteJob":{
      "name":"DeleteJob",
      "http":{
        "method":"DELETE",
        "requestUri":"/jobs/{jobId}"
      },
      "input":{"shape":"DeleteJobRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidStateTransitionException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as \"DELETION_IN_PROGRESS\". Attempting to delete or cancel a job whose status is already \"DELETION_IN_PROGRESS\" will result in an error.</p> <p>Only 10 jobs may have status \"DELETION_IN_PROGRESS\" at the same time, or a LimitExceededException will occur.</p>"
    },
    "DeleteJobExecution":{
      "name":"DeleteJobExecution",
      "http":{
        "method":"DELETE",
        "requestUri":"/things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}"
      },
      "input":{"shape":"DeleteJobExecutionRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidStateTransitionException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Deletes a job execution.</p>"
    },
    "DeleteOTAUpdate":{
      "name":"DeleteOTAUpdate",
      "http":{
        "method":"DELETE",
        "requestUri":"/otaUpdates/{otaUpdateId}"
      },
      "input":{"shape":"DeleteOTAUpdateRequest"},
      "output":{"shape":"DeleteOTAUpdateResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"VersionConflictException"}
      ],
      "documentation":"<p>Delete an OTA update.</p>"
    },
    "DeletePolicy":{
      "name":"DeletePolicy",
      "http":{
        "method":"DELETE",
        "requestUri":"/policies/{policyName}"
      },
      "input":{"shape":"DeletePolicyRequest"},
      "errors":[
        {"shape":"DeleteConflictException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p>"
    },
    "DeletePolicyVersion":{
      "name":"DeletePolicyVersion",
      "http":{
        "method":"DELETE",
        "requestUri":"/policies/{policyName}/version/{policyVersionId}"
      },
      "input":{"shape":"DeletePolicyVersionRequest"},
      "errors":[
        {"shape":"DeleteConflictException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.</p>"
    },
    "DeleteRegistrationCode":{
      "name":"DeleteRegistrationCode",
      "http":{
        "method":"DELETE",
        "requestUri":"/registrationcode"
      },
      "input":{"shape":"DeleteRegistrationCodeRequest"},
      "output":{"shape":"DeleteRegistrationCodeResponse"},
      "errors":[
        {"shape":"ThrottlingException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes a CA certificate registration code.</p>"
    },
    "DeleteRoleAlias":{
      "name":"DeleteRoleAlias",
      "http":{
        "method":"DELETE",
        "requestUri":"/role-aliases/{roleAlias}"
      },
      "input":{"shape":"DeleteRoleAliasRequest"},
      "output":{"shape":"DeleteRoleAliasResponse"},
      "errors":[
        {"shape":"DeleteConflictException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Deletes a role alias</p>"
    },
    "DeleteScheduledAudit":{
      "name":"DeleteScheduledAudit",
      "http":{
        "method":"DELETE",
        "requestUri":"/audit/scheduledaudits/{scheduledAuditName}"
      },
      "input":{"shape":"DeleteScheduledAuditRequest"},
      "output":{"shape":"DeleteScheduledAuditResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes a scheduled audit.</p>"
    },
    "DeleteSecurityProfile":{
      "name":"DeleteSecurityProfile",
      "http":{
        "method":"DELETE",
        "requestUri":"/security-profiles/{securityProfileName}"
      },
      "input":{"shape":"DeleteSecurityProfileRequest"},
      "output":{"shape":"DeleteSecurityProfileResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"VersionConflictException"}
      ],
      "documentation":"<p>Deletes a Device Defender security profile.</p>"
    },
    "DeleteStream":{
      "name":"DeleteStream",
      "http":{
        "method":"DELETE",
        "requestUri":"/streams/{streamId}"
      },
      "input":{"shape":"DeleteStreamRequest"},
      "output":{"shape":"DeleteStreamResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"DeleteConflictException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes a stream.</p>"
    },
    "DeleteThing":{
      "name":"DeleteThing",
      "http":{
        "method":"DELETE",
        "requestUri":"/things/{thingName}"
      },
      "input":{"shape":"DeleteThingRequest"},
      "output":{"shape":"DeleteThingResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"VersionConflictException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes the specified thing.</p>"
    },
    "DeleteThingGroup":{
      "name":"DeleteThingGroup",
      "http":{
        "method":"DELETE",
        "requestUri":"/thing-groups/{thingGroupName}"
      },
      "input":{"shape":"DeleteThingGroupRequest"},
      "output":{"shape":"DeleteThingGroupResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"VersionConflictException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes a thing group.</p>"
    },
    "DeleteThingType":{
      "name":"DeleteThingType",
      "http":{
        "method":"DELETE",
        "requestUri":"/thing-types/{thingTypeName}"
      },
      "input":{"shape":"DeleteThingTypeRequest"},
      "output":{"shape":"DeleteThingTypeResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deletes the specified thing type . You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.</p>"
    },
    "DeleteTopicRule":{
      "name":"DeleteTopicRule",
      "http":{
        "method":"DELETE",
        "requestUri":"/rules/{ruleName}"
      },
      "input":{"shape":"DeleteTopicRuleRequest"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Deletes the rule.</p>"
    },
    "DeleteV2LoggingLevel":{
      "name":"DeleteV2LoggingLevel",
      "http":{
        "method":"DELETE",
        "requestUri":"/v2LoggingLevel"
      },
      "input":{"shape":"DeleteV2LoggingLevelRequest"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Deletes a logging level.</p>"
    },
    "DeprecateThingType":{
      "name":"DeprecateThingType",
      "http":{
        "method":"POST",
        "requestUri":"/thing-types/{thingTypeName}/deprecate"
      },
      "input":{"shape":"DeprecateThingTypeRequest"},
      "output":{"shape":"DeprecateThingTypeResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Deprecates a thing type. You can not associate new things with deprecated thing type.</p>"
    },
    "DescribeAccountAuditConfiguration":{
      "name":"DescribeAccountAuditConfiguration",
      "http":{
        "method":"GET",
        "requestUri":"/audit/configuration"
      },
      "input":{"shape":"DescribeAccountAuditConfigurationRequest"},
      "output":{"shape":"DescribeAccountAuditConfigurationResponse"},
      "errors":[
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p>"
    },
    "DescribeAuditTask":{
      "name":"DescribeAuditTask",
      "http":{
        "method":"GET",
        "requestUri":"/audit/tasks/{taskId}"
      },
      "input":{"shape":"DescribeAuditTaskRequest"},
      "output":{"shape":"DescribeAuditTaskResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about a Device Defender audit.</p>"
    },
    "DescribeAuthorizer":{
      "name":"DescribeAuthorizer",
      "http":{
        "method":"GET",
        "requestUri":"/authorizer/{authorizerName}"
      },
      "input":{"shape":"DescribeAuthorizerRequest"},
      "output":{"shape":"DescribeAuthorizerResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Describes an authorizer.</p>"
    },
    "DescribeCACertificate":{
      "name":"DescribeCACertificate",
      "http":{
        "method":"GET",
        "requestUri":"/cacertificate/{caCertificateId}"
      },
      "input":{"shape":"DescribeCACertificateRequest"},
      "output":{"shape":"DescribeCACertificateResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Describes a registered CA certificate.</p>"
    },
    "DescribeCertificate":{
      "name":"DescribeCertificate",
      "http":{
        "method":"GET",
        "requestUri":"/certificates/{certificateId}"
      },
      "input":{"shape":"DescribeCertificateRequest"},
      "output":{"shape":"DescribeCertificateResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the specified certificate.</p>"
    },
    "DescribeDefaultAuthorizer":{
      "name":"DescribeDefaultAuthorizer",
      "http":{
        "method":"GET",
        "requestUri":"/default-authorizer"
      },
      "input":{"shape":"DescribeDefaultAuthorizerRequest"},
      "output":{"shape":"DescribeDefaultAuthorizerResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Describes the default authorizer.</p>"
    },
    "DescribeEndpoint":{
      "name":"DescribeEndpoint",
      "http":{
        "method":"GET",
        "requestUri":"/endpoint"
      },
      "input":{"shape":"DescribeEndpointRequest"},
      "output":{"shape":"DescribeEndpointResponse"},
      "errors":[
        {"shape":"InternalFailureException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Returns a unique endpoint specific to the AWS account making the call.</p>"
    },
    "DescribeEventConfigurations":{
      "name":"DescribeEventConfigurations",
      "http":{
        "method":"GET",
        "requestUri":"/event-configurations"
      },
      "input":{"shape":"DescribeEventConfigurationsRequest"},
      "output":{"shape":"DescribeEventConfigurationsResponse"},
      "errors":[
        {"shape":"InternalFailureException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Describes event configurations.</p>"
    },
    "DescribeIndex":{
      "name":"DescribeIndex",
      "http":{
        "method":"GET",
        "requestUri":"/indices/{indexName}"
      },
      "input":{"shape":"DescribeIndexRequest"},
      "output":{"shape":"DescribeIndexResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Describes a search index.</p>"
    },
    "DescribeJob":{
      "name":"DescribeJob",
      "http":{
        "method":"GET",
        "requestUri":"/jobs/{jobId}"
      },
      "input":{"shape":"DescribeJobRequest"},
      "output":{"shape":"DescribeJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Describes a job.</p>"
    },
    "DescribeJobExecution":{
      "name":"DescribeJobExecution",
      "http":{
        "method":"GET",
        "requestUri":"/things/{thingName}/jobs/{jobId}"
      },
      "input":{"shape":"DescribeJobExecutionRequest"},
      "output":{"shape":"DescribeJobExecutionResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Describes a job execution.</p>"
    },
    "DescribeRoleAlias":{
      "name":"DescribeRoleAlias",
      "http":{
        "method":"GET",
        "requestUri":"/role-aliases/{roleAlias}"
      },
      "input":{"shape":"DescribeRoleAliasRequest"},
      "output":{"shape":"DescribeRoleAliasResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Describes a role alias.</p>"
    },
    "DescribeScheduledAudit":{
      "name":"DescribeScheduledAudit",
      "http":{
        "method":"GET",
        "requestUri":"/audit/scheduledaudits/{scheduledAuditName}"
      },
      "input":{"shape":"DescribeScheduledAuditRequest"},
      "output":{"shape":"DescribeScheduledAuditResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about a scheduled audit.</p>"
    },
    "DescribeSecurityProfile":{
      "name":"DescribeSecurityProfile",
      "http":{
        "method":"GET",
        "requestUri":"/security-profiles/{securityProfileName}"
      },
      "input":{"shape":"DescribeSecurityProfileRequest"},
      "output":{"shape":"DescribeSecurityProfileResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about a Device Defender security profile.</p>"
    },
    "DescribeStream":{
      "name":"DescribeStream",
      "http":{
        "method":"GET",
        "requestUri":"/streams/{streamId}"
      },
      "input":{"shape":"DescribeStreamRequest"},
      "output":{"shape":"DescribeStreamResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about a stream.</p>"
    },
    "DescribeThing":{
      "name":"DescribeThing",
      "http":{
        "method":"GET",
        "requestUri":"/things/{thingName}"
      },
      "input":{"shape":"DescribeThingRequest"},
      "output":{"shape":"DescribeThingResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about the specified thing.</p>"
    },
    "DescribeThingGroup":{
      "name":"DescribeThingGroup",
      "http":{
        "method":"GET",
        "requestUri":"/thing-groups/{thingGroupName}"
      },
      "input":{"shape":"DescribeThingGroupRequest"},
      "output":{"shape":"DescribeThingGroupResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Describe a thing group.</p>"
    },
    "DescribeThingRegistrationTask":{
      "name":"DescribeThingRegistrationTask",
      "http":{
        "method":"GET",
        "requestUri":"/thing-registration-tasks/{taskId}"
      },
      "input":{"shape":"DescribeThingRegistrationTaskRequest"},
      "output":{"shape":"DescribeThingRegistrationTaskResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Describes a bulk thing provisioning task.</p>"
    },
    "DescribeThingType":{
      "name":"DescribeThingType",
      "http":{
        "method":"GET",
        "requestUri":"/thing-types/{thingTypeName}"
      },
      "input":{"shape":"DescribeThingTypeRequest"},
      "output":{"shape":"DescribeThingTypeResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about the specified thing type.</p>"
    },
    "DetachPolicy":{
      "name":"DetachPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/target-policies/{policyName}"
      },
      "input":{"shape":"DetachPolicyRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Detaches a policy from the specified target.</p>"
    },
    "DetachPrincipalPolicy":{
      "name":"DetachPrincipalPolicy",
      "http":{
        "method":"DELETE",
        "requestUri":"/principal-policies/{policyName}"
      },
      "input":{"shape":"DetachPrincipalPolicyRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>DetachPolicy</a> instead.</p>",
      "deprecated":true
    },
    "DetachSecurityProfile":{
      "name":"DetachSecurityProfile",
      "http":{
        "method":"DELETE",
        "requestUri":"/security-profiles/{securityProfileName}/targets"
      },
      "input":{"shape":"DetachSecurityProfileRequest"},
      "output":{"shape":"DetachSecurityProfileResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Disassociates a Device Defender security profile from a thing group or from this account.</p>"
    },
    "DetachThingPrincipal":{
      "name":"DetachThingPrincipal",
      "http":{
        "method":"DELETE",
        "requestUri":"/things/{thingName}/principals"
      },
      "input":{"shape":"DetachThingPrincipalRequest"},
      "output":{"shape":"DetachThingPrincipalResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Detaches the specified principal from the specified thing.</p>"
    },
    "DisableTopicRule":{
      "name":"DisableTopicRule",
      "http":{
        "method":"POST",
        "requestUri":"/rules/{ruleName}/disable"
      },
      "input":{"shape":"DisableTopicRuleRequest"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Disables the rule.</p>"
    },
    "EnableTopicRule":{
      "name":"EnableTopicRule",
      "http":{
        "method":"POST",
        "requestUri":"/rules/{ruleName}/enable"
      },
      "input":{"shape":"EnableTopicRuleRequest"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Enables the rule.</p>"
    },
    "GetEffectivePolicies":{
      "name":"GetEffectivePolicies",
      "http":{
        "method":"POST",
        "requestUri":"/effective-policies"
      },
      "input":{"shape":"GetEffectivePoliciesRequest"},
      "output":{"shape":"GetEffectivePoliciesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the AWS IoT device gateway.</p>"
    },
    "GetIndexingConfiguration":{
      "name":"GetIndexingConfiguration",
      "http":{
        "method":"GET",
        "requestUri":"/indexing/config"
      },
      "input":{"shape":"GetIndexingConfigurationRequest"},
      "output":{"shape":"GetIndexingConfigurationResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets the search configuration.</p>"
    },
    "GetJobDocument":{
      "name":"GetJobDocument",
      "http":{
        "method":"GET",
        "requestUri":"/jobs/{jobId}/job-document"
      },
      "input":{"shape":"GetJobDocumentRequest"},
      "output":{"shape":"GetJobDocumentResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Gets a job document.</p>"
    },
    "GetLoggingOptions":{
      "name":"GetLoggingOptions",
      "http":{
        "method":"GET",
        "requestUri":"/loggingOptions"
      },
      "input":{"shape":"GetLoggingOptionsRequest"},
      "output":{"shape":"GetLoggingOptionsResponse"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p>"
    },
    "GetOTAUpdate":{
      "name":"GetOTAUpdate",
      "http":{
        "method":"GET",
        "requestUri":"/otaUpdates/{otaUpdateId}"
      },
      "input":{"shape":"GetOTAUpdateRequest"},
      "output":{"shape":"GetOTAUpdateResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets an OTA update.</p>"
    },
    "GetPolicy":{
      "name":"GetPolicy",
      "http":{
        "method":"GET",
        "requestUri":"/policies/{policyName}"
      },
      "input":{"shape":"GetPolicyRequest"},
      "output":{"shape":"GetPolicyResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about the specified policy with the policy document of the default version.</p>"
    },
    "GetPolicyVersion":{
      "name":"GetPolicyVersion",
      "http":{
        "method":"GET",
        "requestUri":"/policies/{policyName}/version/{policyVersionId}"
      },
      "input":{"shape":"GetPolicyVersionRequest"},
      "output":{"shape":"GetPolicyVersionResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Gets information about the specified policy version.</p>"
    },
    "GetRegistrationCode":{
      "name":"GetRegistrationCode",
      "http":{
        "method":"GET",
        "requestUri":"/registrationcode"
      },
      "input":{"shape":"GetRegistrationCodeRequest"},
      "output":{"shape":"GetRegistrationCodeResponse"},
      "errors":[
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>Gets a registration code used to register a CA certificate with AWS IoT.</p>"
    },
    "GetTopicRule":{
      "name":"GetTopicRule",
      "http":{
        "method":"GET",
        "requestUri":"/rules/{ruleName}"
      },
      "input":{"shape":"GetTopicRuleRequest"},
      "output":{"shape":"GetTopicRuleResponse"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Gets information about the rule.</p>"
    },
    "GetV2LoggingOptions":{
      "name":"GetV2LoggingOptions",
      "http":{
        "method":"GET",
        "requestUri":"/v2LoggingOptions"
      },
      "input":{"shape":"GetV2LoggingOptionsRequest"},
      "output":{"shape":"GetV2LoggingOptionsResponse"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"NotConfiguredException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Gets the fine grained logging options.</p>"
    },
    "ListActiveViolations":{
      "name":"ListActiveViolations",
      "http":{
        "method":"GET",
        "requestUri":"/active-violations"
      },
      "input":{"shape":"ListActiveViolationsRequest"},
      "output":{"shape":"ListActiveViolationsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the active violations for a given Device Defender security profile.</p>"
    },
    "ListAttachedPolicies":{
      "name":"ListAttachedPolicies",
      "http":{
        "method":"POST",
        "requestUri":"/attached-policies/{target}"
      },
      "input":{"shape":"ListAttachedPoliciesRequest"},
      "output":{"shape":"ListAttachedPoliciesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Lists the policies attached to the specified thing group.</p>"
    },
    "ListAuditFindings":{
      "name":"ListAuditFindings",
      "http":{
        "method":"POST",
        "requestUri":"/audit/findings"
      },
      "input":{"shape":"ListAuditFindingsRequest"},
      "output":{"shape":"ListAuditFindingsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 180 days.)</p>"
    },
    "ListAuditTasks":{
      "name":"ListAuditTasks",
      "http":{
        "method":"GET",
        "requestUri":"/audit/tasks"
      },
      "input":{"shape":"ListAuditTasksRequest"},
      "output":{"shape":"ListAuditTasksResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the Device Defender audits that have been performed during a given time period.</p>"
    },
    "ListAuthorizers":{
      "name":"ListAuthorizers",
      "http":{
        "method":"GET",
        "requestUri":"/authorizers/"
      },
      "input":{"shape":"ListAuthorizersRequest"},
      "output":{"shape":"ListAuthorizersResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the authorizers registered in your account.</p>"
    },
    "ListCACertificates":{
      "name":"ListCACertificates",
      "http":{
        "method":"GET",
        "requestUri":"/cacertificates"
      },
      "input":{"shape":"ListCACertificatesRequest"},
      "output":{"shape":"ListCACertificatesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the CA certificates registered for your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>"
    },
    "ListCertificates":{
      "name":"ListCertificates",
      "http":{
        "method":"GET",
        "requestUri":"/certificates"
      },
      "input":{"shape":"ListCertificatesRequest"},
      "output":{"shape":"ListCertificatesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the certificates registered in your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>"
    },
    "ListCertificatesByCA":{
      "name":"ListCertificatesByCA",
      "http":{
        "method":"GET",
        "requestUri":"/certificates-by-ca/{caCertificateId}"
      },
      "input":{"shape":"ListCertificatesByCARequest"},
      "output":{"shape":"ListCertificatesByCAResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>List the device certificates signed by the specified CA certificate.</p>"
    },
    "ListIndices":{
      "name":"ListIndices",
      "http":{
        "method":"GET",
        "requestUri":"/indices"
      },
      "input":{"shape":"ListIndicesRequest"},
      "output":{"shape":"ListIndicesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the search indices.</p>"
    },
    "ListJobExecutionsForJob":{
      "name":"ListJobExecutionsForJob",
      "http":{
        "method":"GET",
        "requestUri":"/jobs/{jobId}/things"
      },
      "input":{"shape":"ListJobExecutionsForJobRequest"},
      "output":{"shape":"ListJobExecutionsForJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Lists the job executions for a job.</p>"
    },
    "ListJobExecutionsForThing":{
      "name":"ListJobExecutionsForThing",
      "http":{
        "method":"GET",
        "requestUri":"/things/{thingName}/jobs"
      },
      "input":{"shape":"ListJobExecutionsForThingRequest"},
      "output":{"shape":"ListJobExecutionsForThingResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Lists the job executions for the specified thing.</p>"
    },
    "ListJobs":{
      "name":"ListJobs",
      "http":{
        "method":"GET",
        "requestUri":"/jobs"
      },
      "input":{"shape":"ListJobsRequest"},
      "output":{"shape":"ListJobsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Lists jobs.</p>"
    },
    "ListOTAUpdates":{
      "name":"ListOTAUpdates",
      "http":{
        "method":"GET",
        "requestUri":"/otaUpdates"
      },
      "input":{"shape":"ListOTAUpdatesRequest"},
      "output":{"shape":"ListOTAUpdatesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Lists OTA updates.</p>"
    },
    "ListOutgoingCertificates":{
      "name":"ListOutgoingCertificates",
      "http":{
        "method":"GET",
        "requestUri":"/certificates-out-going"
      },
      "input":{"shape":"ListOutgoingCertificatesRequest"},
      "output":{"shape":"ListOutgoingCertificatesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists certificates that are being transferred but not yet accepted.</p>"
    },
    "ListPolicies":{
      "name":"ListPolicies",
      "http":{
        "method":"GET",
        "requestUri":"/policies"
      },
      "input":{"shape":"ListPoliciesRequest"},
      "output":{"shape":"ListPoliciesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists your policies.</p>"
    },
    "ListPolicyPrincipals":{
      "name":"ListPolicyPrincipals",
      "http":{
        "method":"GET",
        "requestUri":"/policy-principals"
      },
      "input":{"shape":"ListPolicyPrincipalsRequest"},
      "output":{"shape":"ListPolicyPrincipalsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>",
      "deprecated":true
    },
    "ListPolicyVersions":{
      "name":"ListPolicyVersions",
      "http":{
        "method":"GET",
        "requestUri":"/policies/{policyName}/version"
      },
      "input":{"shape":"ListPolicyVersionsRequest"},
      "output":{"shape":"ListPolicyVersionsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the versions of the specified policy and identifies the default version.</p>"
    },
    "ListPrincipalPolicies":{
      "name":"ListPrincipalPolicies",
      "http":{
        "method":"GET",
        "requestUri":"/principal-policies"
      },
      "input":{"shape":"ListPrincipalPoliciesRequest"},
      "output":{"shape":"ListPrincipalPoliciesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href=\"http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax\">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>",
      "deprecated":true
    },
    "ListPrincipalThings":{
      "name":"ListPrincipalThings",
      "http":{
        "method":"GET",
        "requestUri":"/principals/things"
      },
      "input":{"shape":"ListPrincipalThingsRequest"},
      "output":{"shape":"ListPrincipalThingsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists the things associated with the specified principal.</p>"
    },
    "ListRoleAliases":{
      "name":"ListRoleAliases",
      "http":{
        "method":"GET",
        "requestUri":"/role-aliases"
      },
      "input":{"shape":"ListRoleAliasesRequest"},
      "output":{"shape":"ListRoleAliasesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the role aliases registered in your account.</p>"
    },
    "ListScheduledAudits":{
      "name":"ListScheduledAudits",
      "http":{
        "method":"GET",
        "requestUri":"/audit/scheduledaudits"
      },
      "input":{"shape":"ListScheduledAuditsRequest"},
      "output":{"shape":"ListScheduledAuditsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists all of your scheduled audits.</p>"
    },
    "ListSecurityProfiles":{
      "name":"ListSecurityProfiles",
      "http":{
        "method":"GET",
        "requestUri":"/security-profiles"
      },
      "input":{"shape":"ListSecurityProfilesRequest"},
      "output":{"shape":"ListSecurityProfilesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the Device Defender security profiles you have created. You can use filters to list only those security profiles associated with a thing group or only those associated with your account.</p>"
    },
    "ListSecurityProfilesForTarget":{
      "name":"ListSecurityProfilesForTarget",
      "http":{
        "method":"GET",
        "requestUri":"/security-profiles-for-target"
      },
      "input":{"shape":"ListSecurityProfilesForTargetRequest"},
      "output":{"shape":"ListSecurityProfilesForTargetResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists the Device Defender security profiles attached to a target (thing group).</p>"
    },
    "ListStreams":{
      "name":"ListStreams",
      "http":{
        "method":"GET",
        "requestUri":"/streams"
      },
      "input":{"shape":"ListStreamsRequest"},
      "output":{"shape":"ListStreamsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists all of the streams in your AWS account.</p>"
    },
    "ListTargetsForPolicy":{
      "name":"ListTargetsForPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/policy-targets/{policyName}"
      },
      "input":{"shape":"ListTargetsForPolicyRequest"},
      "output":{"shape":"ListTargetsForPolicyResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>List targets for the specified policy.</p>"
    },
    "ListTargetsForSecurityProfile":{
      "name":"ListTargetsForSecurityProfile",
      "http":{
        "method":"GET",
        "requestUri":"/security-profiles/{securityProfileName}/targets"
      },
      "input":{"shape":"ListTargetsForSecurityProfileRequest"},
      "output":{"shape":"ListTargetsForSecurityProfileResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p>"
    },
    "ListThingGroups":{
      "name":"ListThingGroups",
      "http":{
        "method":"GET",
        "requestUri":"/thing-groups"
      },
      "input":{"shape":"ListThingGroupsRequest"},
      "output":{"shape":"ListThingGroupsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>List the thing groups in your account.</p>"
    },
    "ListThingGroupsForThing":{
      "name":"ListThingGroupsForThing",
      "http":{
        "method":"GET",
        "requestUri":"/things/{thingName}/thing-groups"
      },
      "input":{"shape":"ListThingGroupsForThingRequest"},
      "output":{"shape":"ListThingGroupsForThingResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>List the thing groups to which the specified thing belongs.</p>"
    },
    "ListThingPrincipals":{
      "name":"ListThingPrincipals",
      "http":{
        "method":"GET",
        "requestUri":"/things/{thingName}/principals"
      },
      "input":{"shape":"ListThingPrincipalsRequest"},
      "output":{"shape":"ListThingPrincipalsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists the principals associated with the specified thing.</p>"
    },
    "ListThingRegistrationTaskReports":{
      "name":"ListThingRegistrationTaskReports",
      "http":{
        "method":"GET",
        "requestUri":"/thing-registration-tasks/{taskId}/reports"
      },
      "input":{"shape":"ListThingRegistrationTaskReportsRequest"},
      "output":{"shape":"ListThingRegistrationTaskReportsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Information about the thing registration tasks.</p>"
    },
    "ListThingRegistrationTasks":{
      "name":"ListThingRegistrationTasks",
      "http":{
        "method":"GET",
        "requestUri":"/thing-registration-tasks"
      },
      "input":{"shape":"ListThingRegistrationTasksRequest"},
      "output":{"shape":"ListThingRegistrationTasksResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>List bulk thing provisioning tasks.</p>"
    },
    "ListThingTypes":{
      "name":"ListThingTypes",
      "http":{
        "method":"GET",
        "requestUri":"/thing-types"
      },
      "input":{"shape":"ListThingTypesRequest"},
      "output":{"shape":"ListThingTypesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the existing thing types.</p>"
    },
    "ListThings":{
      "name":"ListThings",
      "http":{
        "method":"GET",
        "requestUri":"/things"
      },
      "input":{"shape":"ListThingsRequest"},
      "output":{"shape":"ListThingsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. </p>"
    },
    "ListThingsInThingGroup":{
      "name":"ListThingsInThingGroup",
      "http":{
        "method":"GET",
        "requestUri":"/thing-groups/{thingGroupName}/things"
      },
      "input":{"shape":"ListThingsInThingGroupRequest"},
      "output":{"shape":"ListThingsInThingGroupResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists the things in the specified group.</p>"
    },
    "ListTopicRules":{
      "name":"ListTopicRules",
      "http":{
        "method":"GET",
        "requestUri":"/rules"
      },
      "input":{"shape":"ListTopicRulesRequest"},
      "output":{"shape":"ListTopicRulesResponse"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Lists the rules for the specific topic.</p>"
    },
    "ListV2LoggingLevels":{
      "name":"ListV2LoggingLevels",
      "http":{
        "method":"GET",
        "requestUri":"/v2LoggingLevel"
      },
      "input":{"shape":"ListV2LoggingLevelsRequest"},
      "output":{"shape":"ListV2LoggingLevelsResponse"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"NotConfiguredException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Lists logging levels.</p>"
    },
    "ListViolationEvents":{
      "name":"ListViolationEvents",
      "http":{
        "method":"GET",
        "requestUri":"/violation-events"
      },
      "input":{"shape":"ListViolationEventsRequest"},
      "output":{"shape":"ListViolationEventsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior or thing (device).</p>"
    },
    "RegisterCACertificate":{
      "name":"RegisterCACertificate",
      "http":{
        "method":"POST",
        "requestUri":"/cacertificate"
      },
      "input":{"shape":"RegisterCACertificateRequest"},
      "output":{"shape":"RegisterCACertificateResponse"},
      "errors":[
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"RegistrationCodeValidationException"},
        {"shape":"InvalidRequestException"},
        {"shape":"CertificateValidationException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.</p>"
    },
    "RegisterCertificate":{
      "name":"RegisterCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/certificate/register"
      },
      "input":{"shape":"RegisterCertificateRequest"},
      "output":{"shape":"RegisterCertificateResponse"},
      "errors":[
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"InvalidRequestException"},
        {"shape":"CertificateValidationException"},
        {"shape":"CertificateStateException"},
        {"shape":"CertificateConflictException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.</p>"
    },
    "RegisterThing":{
      "name":"RegisterThing",
      "http":{
        "method":"POST",
        "requestUri":"/things"
      },
      "input":{"shape":"RegisterThingRequest"},
      "output":{"shape":"RegisterThingResponse"},
      "errors":[
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ThrottlingException"},
        {"shape":"ConflictingResourceUpdateException"},
        {"shape":"ResourceRegistrationFailureException"}
      ],
      "documentation":"<p>Provisions a thing.</p>"
    },
    "RejectCertificateTransfer":{
      "name":"RejectCertificateTransfer",
      "http":{
        "method":"PATCH",
        "requestUri":"/reject-certificate-transfer/{certificateId}"
      },
      "input":{"shape":"RejectCertificateTransferRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"TransferAlreadyCompletedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p>"
    },
    "RemoveThingFromThingGroup":{
      "name":"RemoveThingFromThingGroup",
      "http":{
        "method":"PUT",
        "requestUri":"/thing-groups/removeThingFromThingGroup"
      },
      "input":{"shape":"RemoveThingFromThingGroupRequest"},
      "output":{"shape":"RemoveThingFromThingGroupResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Remove the specified thing from the specified group.</p>"
    },
    "ReplaceTopicRule":{
      "name":"ReplaceTopicRule",
      "http":{
        "method":"PATCH",
        "requestUri":"/rules/{ruleName}"
      },
      "input":{"shape":"ReplaceTopicRuleRequest"},
      "errors":[
        {"shape":"SqlParseException"},
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p>"
    },
    "SearchIndex":{
      "name":"SearchIndex",
      "http":{
        "method":"POST",
        "requestUri":"/indices/search"
      },
      "input":{"shape":"SearchIndexRequest"},
      "output":{"shape":"SearchIndexResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidQueryException"},
        {"shape":"IndexNotReadyException"}
      ],
      "documentation":"<p>The query search index.</p>"
    },
    "SetDefaultAuthorizer":{
      "name":"SetDefaultAuthorizer",
      "http":{
        "method":"POST",
        "requestUri":"/default-authorizer"
      },
      "input":{"shape":"SetDefaultAuthorizerRequest"},
      "output":{"shape":"SetDefaultAuthorizerResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceAlreadyExistsException"}
      ],
      "documentation":"<p>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.</p>"
    },
    "SetDefaultPolicyVersion":{
      "name":"SetDefaultPolicyVersion",
      "http":{
        "method":"PATCH",
        "requestUri":"/policies/{policyName}/version/{policyVersionId}"
      },
      "input":{"shape":"SetDefaultPolicyVersionRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.</p>"
    },
    "SetLoggingOptions":{
      "name":"SetLoggingOptions",
      "http":{
        "method":"POST",
        "requestUri":"/loggingOptions"
      },
      "input":{"shape":"SetLoggingOptionsRequest"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p>"
    },
    "SetV2LoggingLevel":{
      "name":"SetV2LoggingLevel",
      "http":{
        "method":"POST",
        "requestUri":"/v2LoggingLevel"
      },
      "input":{"shape":"SetV2LoggingLevelRequest"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"NotConfiguredException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Sets the logging level.</p>"
    },
    "SetV2LoggingOptions":{
      "name":"SetV2LoggingOptions",
      "http":{
        "method":"POST",
        "requestUri":"/v2LoggingOptions"
      },
      "input":{"shape":"SetV2LoggingOptionsRequest"},
      "errors":[
        {"shape":"InternalException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Sets the logging options for the V2 logging service.</p>"
    },
    "StartOnDemandAuditTask":{
      "name":"StartOnDemandAuditTask",
      "http":{
        "method":"POST",
        "requestUri":"/audit/tasks"
      },
      "input":{"shape":"StartOnDemandAuditTaskRequest"},
      "output":{"shape":"StartOnDemandAuditTaskResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Starts an on-demand Device Defender audit.</p>"
    },
    "StartThingRegistrationTask":{
      "name":"StartThingRegistrationTask",
      "http":{
        "method":"POST",
        "requestUri":"/thing-registration-tasks"
      },
      "input":{"shape":"StartThingRegistrationTaskRequest"},
      "output":{"shape":"StartThingRegistrationTaskResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Creates a bulk thing provisioning task.</p>"
    },
    "StopThingRegistrationTask":{
      "name":"StopThingRegistrationTask",
      "http":{
        "method":"PUT",
        "requestUri":"/thing-registration-tasks/{taskId}/cancel"
      },
      "input":{"shape":"StopThingRegistrationTaskRequest"},
      "output":{"shape":"StopThingRegistrationTaskResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Cancels a bulk thing provisioning task.</p>"
    },
    "TestAuthorization":{
      "name":"TestAuthorization",
      "http":{
        "method":"POST",
        "requestUri":"/test-authorization"
      },
      "input":{"shape":"TestAuthorizationRequest"},
      "output":{"shape":"TestAuthorizationResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Tests if a specified principal is authorized to perform an AWS IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the AWS IoT device gateway.</p>"
    },
    "TestInvokeAuthorizer":{
      "name":"TestInvokeAuthorizer",
      "http":{
        "method":"POST",
        "requestUri":"/authorizer/{authorizerName}/test"
      },
      "input":{"shape":"TestInvokeAuthorizerRequest"},
      "output":{"shape":"TestInvokeAuthorizerResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"InvalidResponseException"}
      ],
      "documentation":"<p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the AWS IoT device gateway.</p>"
    },
    "TransferCertificate":{
      "name":"TransferCertificate",
      "http":{
        "method":"PATCH",
        "requestUri":"/transfer-certificate/{certificateId}"
      },
      "input":{"shape":"TransferCertificateRequest"},
      "output":{"shape":"TransferCertificateResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"CertificateStateException"},
        {"shape":"TransferConflictException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Transfers the specified certificate to the specified AWS account.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.</p>"
    },
    "UpdateAccountAuditConfiguration":{
      "name":"UpdateAccountAuditConfiguration",
      "http":{
        "method":"PATCH",
        "requestUri":"/audit/configuration"
      },
      "input":{"shape":"UpdateAccountAuditConfigurationRequest"},
      "output":{"shape":"UpdateAccountAuditConfigurationResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p>"
    },
    "UpdateAuthorizer":{
      "name":"UpdateAuthorizer",
      "http":{
        "method":"PUT",
        "requestUri":"/authorizer/{authorizerName}"
      },
      "input":{"shape":"UpdateAuthorizerRequest"},
      "output":{"shape":"UpdateAuthorizerResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates an authorizer.</p>"
    },
    "UpdateCACertificate":{
      "name":"UpdateCACertificate",
      "http":{
        "method":"PUT",
        "requestUri":"/cacertificate/{caCertificateId}"
      },
      "input":{"shape":"UpdateCACertificateRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates a registered CA certificate.</p>"
    },
    "UpdateCertificate":{
      "name":"UpdateCertificate",
      "http":{
        "method":"PUT",
        "requestUri":"/certificates/{certificateId}"
      },
      "input":{"shape":"UpdateCertificateRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"CertificateStateException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect.</p> <p>The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.</p>"
    },
    "UpdateEventConfigurations":{
      "name":"UpdateEventConfigurations",
      "http":{
        "method":"PATCH",
        "requestUri":"/event-configurations"
      },
      "input":{"shape":"UpdateEventConfigurationsRequest"},
      "output":{"shape":"UpdateEventConfigurationsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Updates the event configurations.</p>"
    },
    "UpdateIndexingConfiguration":{
      "name":"UpdateIndexingConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/indexing/config"
      },
      "input":{"shape":"UpdateIndexingConfigurationRequest"},
      "output":{"shape":"UpdateIndexingConfigurationResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates the search configuration.</p>"
    },
    "UpdateRoleAlias":{
      "name":"UpdateRoleAlias",
      "http":{
        "method":"PUT",
        "requestUri":"/role-aliases/{roleAlias}"
      },
      "input":{"shape":"UpdateRoleAliasRequest"},
      "output":{"shape":"UpdateRoleAliasResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates a role alias.</p>"
    },
    "UpdateScheduledAudit":{
      "name":"UpdateScheduledAudit",
      "http":{
        "method":"PATCH",
        "requestUri":"/audit/scheduledaudits/{scheduledAuditName}"
      },
      "input":{"shape":"UpdateScheduledAuditRequest"},
      "output":{"shape":"UpdateScheduledAuditResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates a scheduled audit, including what checks are performed and how often the audit takes place.</p>"
    },
    "UpdateSecurityProfile":{
      "name":"UpdateSecurityProfile",
      "http":{
        "method":"PATCH",
        "requestUri":"/security-profiles/{securityProfileName}"
      },
      "input":{"shape":"UpdateSecurityProfileRequest"},
      "output":{"shape":"UpdateSecurityProfileResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"VersionConflictException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates a Device Defender security profile.</p>"
    },
    "UpdateStream":{
      "name":"UpdateStream",
      "http":{
        "method":"PUT",
        "requestUri":"/streams/{streamId}"
      },
      "input":{"shape":"UpdateStreamRequest"},
      "output":{"shape":"UpdateStreamResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Updates an existing stream. The stream version will be incremented by one.</p>"
    },
    "UpdateThing":{
      "name":"UpdateThing",
      "http":{
        "method":"PATCH",
        "requestUri":"/things/{thingName}"
      },
      "input":{"shape":"UpdateThingRequest"},
      "output":{"shape":"UpdateThingResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"VersionConflictException"},
        {"shape":"ThrottlingException"},
        {"shape":"UnauthorizedException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Updates the data for a thing.</p>"
    },
    "UpdateThingGroup":{
      "name":"UpdateThingGroup",
      "http":{
        "method":"PATCH",
        "requestUri":"/thing-groups/{thingGroupName}"
      },
      "input":{"shape":"UpdateThingGroupRequest"},
      "output":{"shape":"UpdateThingGroupResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"VersionConflictException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Update a thing group.</p>"
    },
    "UpdateThingGroupsForThing":{
      "name":"UpdateThingGroupsForThing",
      "http":{
        "method":"PUT",
        "requestUri":"/thing-groups/updateThingGroupsForThing"
      },
      "input":{"shape":"UpdateThingGroupsForThingRequest"},
      "output":{"shape":"UpdateThingGroupsForThingResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Updates the groups to which the thing belongs.</p>"
    },
    "ValidateSecurityProfileBehaviors":{
      "name":"ValidateSecurityProfileBehaviors",
      "http":{
        "method":"POST",
        "requestUri":"/security-profile-behaviors/validate"
      },
      "input":{"shape":"ValidateSecurityProfileBehaviorsRequest"},
      "output":{"shape":"ValidateSecurityProfileBehaviorsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalFailureException"}
      ],
      "documentation":"<p>Validates a Device Defender security profile behaviors specification.</p>"
    }
  },
  "shapes":{
    "AcceptCertificateTransferRequest":{
      "type":"structure",
      "required":["certificateId"],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>",
          "location":"uri",
          "locationName":"certificateId"
        },
        "setAsActive":{
          "shape":"SetAsActive",
          "documentation":"<p>Specifies whether the certificate is active.</p>",
          "location":"querystring",
          "locationName":"setAsActive"
        }
      },
      "documentation":"<p>The input for the AcceptCertificateTransfer operation.</p>"
    },
    "Action":{
      "type":"structure",
      "members":{
        "dynamoDB":{
          "shape":"DynamoDBAction",
          "documentation":"<p>Write to a DynamoDB table.</p>"
        },
        "dynamoDBv2":{
          "shape":"DynamoDBv2Action",
          "documentation":"<p>Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.</p>"
        },
        "lambda":{
          "shape":"LambdaAction",
          "documentation":"<p>Invoke a Lambda function.</p>"
        },
        "sns":{
          "shape":"SnsAction",
          "documentation":"<p>Publish to an Amazon SNS topic.</p>"
        },
        "sqs":{
          "shape":"SqsAction",
          "documentation":"<p>Publish to an Amazon SQS queue.</p>"
        },
        "kinesis":{
          "shape":"KinesisAction",
          "documentation":"<p>Write data to an Amazon Kinesis stream.</p>"
        },
        "republish":{
          "shape":"RepublishAction",
          "documentation":"<p>Publish to another MQTT topic.</p>"
        },
        "s3":{
          "shape":"S3Action",
          "documentation":"<p>Write to an Amazon S3 bucket.</p>"
        },
        "firehose":{
          "shape":"FirehoseAction",
          "documentation":"<p>Write to an Amazon Kinesis Firehose stream.</p>"
        },
        "cloudwatchMetric":{
          "shape":"CloudwatchMetricAction",
          "documentation":"<p>Capture a CloudWatch metric.</p>"
        },
        "cloudwatchAlarm":{
          "shape":"CloudwatchAlarmAction",
          "documentation":"<p>Change the state of a CloudWatch alarm.</p>"
        },
        "elasticsearch":{
          "shape":"ElasticsearchAction",
          "documentation":"<p>Write data to an Amazon Elasticsearch Service domain.</p>"
        },
        "salesforce":{
          "shape":"SalesforceAction",
          "documentation":"<p>Send a message to a Salesforce IoT Cloud Input Stream.</p>"
        },
        "iotAnalytics":{
          "shape":"IotAnalyticsAction",
          "documentation":"<p>Sends message data to an AWS IoT Analytics channel.</p>"
        },
        "stepFunctions":{
          "shape":"StepFunctionsAction",
          "documentation":"<p>Starts execution of a Step Functions state machine.</p>"
        }
      },
      "documentation":"<p>Describes the actions associated with a rule.</p>"
    },
    "ActionList":{
      "type":"list",
      "member":{"shape":"Action"},
      "max":10,
      "min":0
    },
    "ActionType":{
      "type":"string",
      "enum":[
        "PUBLISH",
        "SUBSCRIBE",
        "RECEIVE",
        "CONNECT"
      ]
    },
    "ActiveViolation":{
      "type":"structure",
      "members":{
        "violationId":{
          "shape":"ViolationId",
          "documentation":"<p>The ID of the active violation.</p>"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing responsible for the active violation.</p>"
        },
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The security profile whose behavior is in violation.</p>"
        },
        "behavior":{
          "shape":"Behavior",
          "documentation":"<p>The behavior which is being violated.</p>"
        },
        "lastViolationValue":{
          "shape":"MetricValue",
          "documentation":"<p>The value of the metric (the measurement) which caused the most recent violation.</p>"
        },
        "lastViolationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the most recent violation occurred.</p>"
        },
        "violationStartTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the violation started.</p>"
        }
      },
      "documentation":"<p>Information about an active Device Defender security profile behavior violation.</p>"
    },
    "ActiveViolations":{
      "type":"list",
      "member":{"shape":"ActiveViolation"}
    },
    "AddThingToThingGroupRequest":{
      "type":"structure",
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The name of the group to which you are adding a thing.</p>"
        },
        "thingGroupArn":{
          "shape":"ThingGroupArn",
          "documentation":"<p>The ARN of the group to which you are adding a thing.</p>"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing to add to a group.</p>"
        },
        "thingArn":{
          "shape":"ThingArn",
          "documentation":"<p>The ARN of the thing to add to a group.</p>"
        }
      }
    },
    "AddThingToThingGroupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "AdditionalParameterMap":{
      "type":"map",
      "key":{"shape":"AttributeKey"},
      "value":{"shape":"Value"}
    },
    "AlarmName":{"type":"string"},
    "AlertTarget":{
      "type":"structure",
      "required":[
        "alertTargetArn",
        "roleArn"
      ],
      "members":{
        "alertTargetArn":{
          "shape":"AlertTargetArn",
          "documentation":"<p>The ARN of the notification target to which alerts are sent.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role that grants permission to send alerts to the notification target.</p>"
        }
      },
      "documentation":"<p>A structure containing the alert target ARN and the role ARN.</p>"
    },
    "AlertTargetArn":{"type":"string"},
    "AlertTargetType":{
      "type":"string",
      "documentation":"<p>The type of alert target: one of \"SNS\".</p>",
      "enum":["SNS"]
    },
    "AlertTargets":{
      "type":"map",
      "key":{"shape":"AlertTargetType"},
      "value":{"shape":"AlertTarget"}
    },
    "AllowAutoRegistration":{"type":"boolean"},
    "Allowed":{
      "type":"structure",
      "members":{
        "policies":{
          "shape":"Policies",
          "documentation":"<p>A list of policies that allowed the authentication.</p>"
        }
      },
      "documentation":"<p>Contains information that allowed the authorization.</p>"
    },
    "AscendingOrder":{"type":"boolean"},
    "AssociateTargetsWithJobRequest":{
      "type":"structure",
      "required":[
        "targets",
        "jobId"
      ],
      "members":{
        "targets":{
          "shape":"JobTargets",
          "documentation":"<p>A list of thing group ARNs that define the targets of the job.</p>"
        },
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>",
          "location":"uri",
          "locationName":"jobId"
        },
        "comment":{
          "shape":"Comment",
          "documentation":"<p>An optional comment string describing why the job was associated with the targets.</p>"
        }
      }
    },
    "AssociateTargetsWithJobResponse":{
      "type":"structure",
      "members":{
        "jobArn":{
          "shape":"JobArn",
          "documentation":"<p>An ARN identifying the job.</p>"
        },
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>"
        },
        "description":{
          "shape":"JobDescription",
          "documentation":"<p>A short text description of the job.</p>"
        }
      }
    },
    "AttachPolicyRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "target"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the policy to attach.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "target":{
          "shape":"PolicyTarget",
          "documentation":"<p>The identity to which the policy is attached.</p>"
        }
      }
    },
    "AttachPrincipalPolicyRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "principal"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "principal":{
          "shape":"Principal",
          "documentation":"<p>The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.</p>",
          "location":"header",
          "locationName":"x-amzn-iot-principal"
        }
      },
      "documentation":"<p>The input for the AttachPrincipalPolicy operation.</p>"
    },
    "AttachSecurityProfileRequest":{
      "type":"structure",
      "required":[
        "securityProfileName",
        "securityProfileTargetArn"
      ],
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The security profile that is attached.</p>",
          "location":"uri",
          "locationName":"securityProfileName"
        },
        "securityProfileTargetArn":{
          "shape":"SecurityProfileTargetArn",
          "documentation":"<p>The ARN of the target (thing group) to which the security profile is attached.</p>",
          "location":"querystring",
          "locationName":"securityProfileTargetArn"
        }
      }
    },
    "AttachSecurityProfileResponse":{
      "type":"structure",
      "members":{
      }
    },
    "AttachThingPrincipalRequest":{
      "type":"structure",
      "required":[
        "thingName",
        "principal"
      ],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "principal":{
          "shape":"Principal",
          "documentation":"<p>The principal, such as a certificate or other credential.</p>",
          "location":"header",
          "locationName":"x-amzn-principal"
        }
      },
      "documentation":"<p>The input for the AttachThingPrincipal operation.</p>"
    },
    "AttachThingPrincipalResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output from the AttachThingPrincipal operation.</p>"
    },
    "AttributeKey":{"type":"string"},
    "AttributeName":{
      "type":"string",
      "max":128,
      "pattern":"[a-zA-Z0-9_.,@/:#-]+"
    },
    "AttributePayload":{
      "type":"structure",
      "members":{
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>A JSON string containing up to three key-value pair in JSON format. For example:</p> <p> <code>{\\\"attributes\\\":{\\\"string1\\\":\\\"string2\\\"}}</code> </p>"
        },
        "merge":{
          "shape":"Flag",
          "documentation":"<p>Specifies whether the list of attributes provided in the <code>AttributePayload</code> is merged with the attributes stored in the registry, instead of overwriting them.</p> <p>To remove an attribute, call <code>UpdateThing</code> with an empty attribute value.</p> <note> <p>The <code>merge</code> attribute is only valid when calling <code>UpdateThing</code>.</p> </note>"
        }
      },
      "documentation":"<p>The attribute payload.</p>"
    },
    "AttributeValue":{
      "type":"string",
      "max":800,
      "pattern":"[a-zA-Z0-9_.,@/:#-]*"
    },
    "Attributes":{
      "type":"map",
      "key":{"shape":"AttributeName"},
      "value":{"shape":"AttributeValue"}
    },
    "AttributesMap":{
      "type":"map",
      "key":{"shape":"AttributeKey"},
      "value":{"shape":"Value"}
    },
    "AuditCheckConfiguration":{
      "type":"structure",
      "members":{
        "enabled":{
          "shape":"Enabled",
          "documentation":"<p>True if this audit check is enabled for this account.</p>"
        }
      },
      "documentation":"<p>Which audit checks are enabled and disabled for this account.</p>"
    },
    "AuditCheckConfigurations":{
      "type":"map",
      "key":{"shape":"AuditCheckName"},
      "value":{"shape":"AuditCheckConfiguration"}
    },
    "AuditCheckDetails":{
      "type":"structure",
      "members":{
        "checkRunStatus":{
          "shape":"AuditCheckRunStatus",
          "documentation":"<p>The completion status of this check, one of \"IN_PROGRESS\", \"WAITING_FOR_DATA_COLLECTION\", \"CANCELED\", \"COMPLETED_COMPLIANT\", \"COMPLETED_NON_COMPLIANT\", or \"FAILED\".</p>"
        },
        "checkCompliant":{
          "shape":"CheckCompliant",
          "documentation":"<p>True if the check completed and found all resources compliant.</p>"
        },
        "totalResourcesCount":{
          "shape":"TotalResourcesCount",
          "documentation":"<p>The number of resources on which the check was performed.</p>"
        },
        "nonCompliantResourcesCount":{
          "shape":"NonCompliantResourcesCount",
          "documentation":"<p>The number of resources that the check found non-compliant.</p>"
        },
        "errorCode":{
          "shape":"ErrorCode",
          "documentation":"<p>The code of any error encountered when performing this check during this audit. One of \"INSUFFICIENT_PERMISSIONS\", or \"AUDIT_CHECK_DISABLED\".</p>"
        },
        "message":{
          "shape":"ErrorMessage",
          "documentation":"<p>The message associated with any error encountered when performing this check during this audit.</p>"
        }
      },
      "documentation":"<p>Information about the audit check.</p>"
    },
    "AuditCheckName":{
      "type":"string",
      "documentation":"<p>An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)</p>"
    },
    "AuditCheckRunStatus":{
      "type":"string",
      "enum":[
        "IN_PROGRESS",
        "WAITING_FOR_DATA_COLLECTION",
        "CANCELED",
        "COMPLETED_COMPLIANT",
        "COMPLETED_NON_COMPLIANT",
        "FAILED"
      ]
    },
    "AuditDetails":{
      "type":"map",
      "key":{"shape":"AuditCheckName"},
      "value":{"shape":"AuditCheckDetails"}
    },
    "AuditFinding":{
      "type":"structure",
      "members":{
        "taskId":{
          "shape":"AuditTaskId",
          "documentation":"<p>The ID of the audit that generated this result (finding)</p>"
        },
        "checkName":{
          "shape":"AuditCheckName",
          "documentation":"<p>The audit check that generated this result.</p>"
        },
        "taskStartTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the audit started.</p>"
        },
        "findingTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the result (finding) was discovered.</p>"
        },
        "severity":{
          "shape":"AuditFindingSeverity",
          "documentation":"<p>The severity of the result (finding).</p>"
        },
        "nonCompliantResource":{
          "shape":"NonCompliantResource",
          "documentation":"<p>The resource that was found to be non-compliant with the audit check.</p>"
        },
        "relatedResources":{
          "shape":"RelatedResources",
          "documentation":"<p>The list of related resources.</p>"
        },
        "reasonForNonCompliance":{
          "shape":"ReasonForNonCompliance",
          "documentation":"<p>The reason the resource was non-compliant.</p>"
        },
        "reasonForNonComplianceCode":{
          "shape":"ReasonForNonComplianceCode",
          "documentation":"<p>A code which indicates the reason that the resource was non-compliant.</p>"
        }
      },
      "documentation":"<p>The findings (results) of the audit.</p>"
    },
    "AuditFindingSeverity":{
      "type":"string",
      "enum":[
        "CRITICAL",
        "HIGH",
        "MEDIUM",
        "LOW"
      ]
    },
    "AuditFindings":{
      "type":"list",
      "member":{"shape":"AuditFinding"}
    },
    "AuditFrequency":{
      "type":"string",
      "enum":[
        "DAILY",
        "WEEKLY",
        "BIWEEKLY",
        "MONTHLY"
      ]
    },
    "AuditNotificationTarget":{
      "type":"structure",
      "members":{
        "targetArn":{
          "shape":"TargetArn",
          "documentation":"<p>The ARN of the target (SNS topic) to which audit notifications are sent.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role that grants permission to send notifications to the target.</p>"
        },
        "enabled":{
          "shape":"Enabled",
          "documentation":"<p>True if notifications to the target are enabled.</p>"
        }
      },
      "documentation":"<p>Information about the targets to which audit notifications are sent.</p>"
    },
    "AuditNotificationTargetConfigurations":{
      "type":"map",
      "key":{"shape":"AuditNotificationType"},
      "value":{"shape":"AuditNotificationTarget"}
    },
    "AuditNotificationType":{
      "type":"string",
      "enum":["SNS"]
    },
    "AuditTaskId":{
      "type":"string",
      "max":40,
      "min":1,
      "pattern":"[a-zA-Z0-9\\-]+"
    },
    "AuditTaskMetadata":{
      "type":"structure",
      "members":{
        "taskId":{
          "shape":"AuditTaskId",
          "documentation":"<p>The ID of this audit.</p>"
        },
        "taskStatus":{
          "shape":"AuditTaskStatus",
          "documentation":"<p>The status of this audit: one of \"IN_PROGRESS\", \"COMPLETED\", \"FAILED\" or \"CANCELED\".</p>"
        },
        "taskType":{
          "shape":"AuditTaskType",
          "documentation":"<p>The type of this audit: one of \"ON_DEMAND_AUDIT_TASK\" or \"SCHEDULED_AUDIT_TASK\".</p>"
        }
      },
      "documentation":"<p>The audits that were performed.</p>"
    },
    "AuditTaskMetadataList":{
      "type":"list",
      "member":{"shape":"AuditTaskMetadata"}
    },
    "AuditTaskStatus":{
      "type":"string",
      "enum":[
        "IN_PROGRESS",
        "COMPLETED",
        "FAILED",
        "CANCELED"
      ]
    },
    "AuditTaskType":{
      "type":"string",
      "enum":[
        "ON_DEMAND_AUDIT_TASK",
        "SCHEDULED_AUDIT_TASK"
      ]
    },
    "AuthDecision":{
      "type":"string",
      "enum":[
        "ALLOWED",
        "EXPLICIT_DENY",
        "IMPLICIT_DENY"
      ]
    },
    "AuthInfo":{
      "type":"structure",
      "members":{
        "actionType":{
          "shape":"ActionType",
          "documentation":"<p>The type of action for which the principal is being authorized.</p>"
        },
        "resources":{
          "shape":"Resources",
          "documentation":"<p>The resources for which the principal is being authorized to perform the specified action.</p>"
        }
      },
      "documentation":"<p>A collection of authorization information.</p>"
    },
    "AuthInfos":{
      "type":"list",
      "member":{"shape":"AuthInfo"},
      "max":10,
      "min":1
    },
    "AuthResult":{
      "type":"structure",
      "members":{
        "authInfo":{
          "shape":"AuthInfo",
          "documentation":"<p>Authorization information.</p>"
        },
        "allowed":{
          "shape":"Allowed",
          "documentation":"<p>The policies and statements that allowed the specified action.</p>"
        },
        "denied":{
          "shape":"Denied",
          "documentation":"<p>The policies and statements that denied the specified action.</p>"
        },
        "authDecision":{
          "shape":"AuthDecision",
          "documentation":"<p>The final authorization decision of this scenario. Multiple statements are taken into account when determining the authorization decision. An explicit deny statement can override multiple allow statements.</p>"
        },
        "missingContextValues":{
          "shape":"MissingContextValues",
          "documentation":"<p>Contains any missing context values found while evaluating policy.</p>"
        }
      },
      "documentation":"<p>The authorizer result.</p>"
    },
    "AuthResults":{
      "type":"list",
      "member":{"shape":"AuthResult"}
    },
    "AuthorizerArn":{"type":"string"},
    "AuthorizerDescription":{
      "type":"structure",
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The authorizer name.</p>"
        },
        "authorizerArn":{
          "shape":"AuthorizerArn",
          "documentation":"<p>The authorizer ARN.</p>"
        },
        "authorizerFunctionArn":{
          "shape":"AuthorizerFunctionArn",
          "documentation":"<p>The authorizer's Lambda function ARN.</p>"
        },
        "tokenKeyName":{
          "shape":"TokenKeyName",
          "documentation":"<p>The key used to extract the token from the HTTP headers.</p>"
        },
        "tokenSigningPublicKeys":{
          "shape":"PublicKeyMap",
          "documentation":"<p>The public keys used to validate the token signature returned by your custom authentication service.</p>"
        },
        "status":{
          "shape":"AuthorizerStatus",
          "documentation":"<p>The status of the authorizer.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The UNIX timestamp of when the authorizer was created.</p>"
        },
        "lastModifiedDate":{
          "shape":"DateType",
          "documentation":"<p>The UNIX timestamp of when the authorizer was last updated.</p>"
        }
      },
      "documentation":"<p>The authorizer description.</p>"
    },
    "AuthorizerFunctionArn":{"type":"string"},
    "AuthorizerName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[\\w=,@-]+"
    },
    "AuthorizerStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "INACTIVE"
      ]
    },
    "AuthorizerSummary":{
      "type":"structure",
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The authorizer name.</p>"
        },
        "authorizerArn":{
          "shape":"AuthorizerArn",
          "documentation":"<p>The authorizer ARN.</p>"
        }
      },
      "documentation":"<p>The authorizer summary.</p>"
    },
    "Authorizers":{
      "type":"list",
      "member":{"shape":"AuthorizerSummary"}
    },
    "AutoRegistrationStatus":{
      "type":"string",
      "enum":[
        "ENABLE",
        "DISABLE"
      ]
    },
    "AwsAccountId":{
      "type":"string",
      "max":12,
      "min":12,
      "pattern":"[0-9]+"
    },
    "AwsArn":{"type":"string"},
    "AwsIotJobArn":{"type":"string"},
    "AwsIotJobId":{"type":"string"},
    "AwsIotSqlVersion":{"type":"string"},
    "AwsJobExecutionsRolloutConfig":{
      "type":"structure",
      "members":{
        "maximumPerMinute":{
          "shape":"MaximumPerMinute",
          "documentation":"<p>The maximum number of OTA update job executions started per minute.</p>"
        }
      },
      "documentation":"<p>Configuration for the rollout of OTA updates.</p>"
    },
    "Behavior":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"BehaviorName",
          "documentation":"<p>The name you have given to the behavior.</p>"
        },
        "metric":{
          "shape":"BehaviorMetric",
          "documentation":"<p>What is measured by the behavior.</p>"
        },
        "criteria":{
          "shape":"BehaviorCriteria",
          "documentation":"<p>The criteria that determine if a device is behaving normally in regard to the <code>metric</code>.</p>"
        }
      },
      "documentation":"<p>A Device Defender security profile behavior.</p>"
    },
    "BehaviorCriteria":{
      "type":"structure",
      "members":{
        "comparisonOperator":{
          "shape":"ComparisonOperator",
          "documentation":"<p>The operator that relates the thing measured (<code>metric</code>) to the criteria (<code>value</code>).</p>"
        },
        "value":{
          "shape":"MetricValue",
          "documentation":"<p>The value to be compared with the <code>metric</code>.</p>"
        },
        "durationSeconds":{
          "shape":"DurationSeconds",
          "documentation":"<p>Use this to specify the period of time over which the behavior is evaluated, for those criteria which have a time dimension (for example, <code>NUM_MESSAGES_SENT</code>).</p>"
        }
      },
      "documentation":"<p>The criteria by which the behavior is determined to be normal.</p>"
    },
    "BehaviorMetric":{"type":"string"},
    "BehaviorName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9:_-]+"
    },
    "Behaviors":{
      "type":"list",
      "member":{"shape":"Behavior"},
      "max":100
    },
    "Boolean":{"type":"boolean"},
    "BucketName":{"type":"string"},
    "CACertificate":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The ARN of the CA certificate.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the CA certificate.</p>"
        },
        "status":{
          "shape":"CACertificateStatus",
          "documentation":"<p>The status of the CA certificate.</p> <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The date the CA certificate was created.</p>"
        }
      },
      "documentation":"<p>A CA certificate.</p>"
    },
    "CACertificateDescription":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The CA certificate ARN.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The CA certificate ID.</p>"
        },
        "status":{
          "shape":"CACertificateStatus",
          "documentation":"<p>The status of a CA certificate.</p>"
        },
        "certificatePem":{
          "shape":"CertificatePem",
          "documentation":"<p>The CA certificate data, in PEM format.</p>"
        },
        "ownedBy":{
          "shape":"AwsAccountId",
          "documentation":"<p>The owner of the CA certificate.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The date the CA certificate was created.</p>"
        },
        "autoRegistrationStatus":{
          "shape":"AutoRegistrationStatus",
          "documentation":"<p>Whether the CA certificate configured for auto registration of device certificates. Valid values are \"ENABLE\" and \"DISABLE\"</p>"
        },
        "lastModifiedDate":{
          "shape":"DateType",
          "documentation":"<p>The date the CA certificate was last modified.</p>"
        },
        "customerVersion":{
          "shape":"CustomerVersion",
          "documentation":"<p>The customer version of the CA certificate.</p>"
        },
        "generationId":{
          "shape":"GenerationId",
          "documentation":"<p>The generation ID of the CA certificate.</p>"
        },
        "validity":{
          "shape":"CertificateValidity",
          "documentation":"<p>When the CA certificate is valid.</p>"
        }
      },
      "documentation":"<p>Describes a CA certificate.</p>"
    },
    "CACertificateStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "INACTIVE"
      ]
    },
    "CACertificates":{
      "type":"list",
      "member":{"shape":"CACertificate"}
    },
    "CancelAuditTaskRequest":{
      "type":"structure",
      "required":["taskId"],
      "members":{
        "taskId":{
          "shape":"AuditTaskId",
          "documentation":"<p>The ID of the audit you want to cancel. You can only cancel an audit that is \"IN_PROGRESS\".</p>",
          "location":"uri",
          "locationName":"taskId"
        }
      }
    },
    "CancelAuditTaskResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CancelCertificateTransferRequest":{
      "type":"structure",
      "required":["certificateId"],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>",
          "location":"uri",
          "locationName":"certificateId"
        }
      },
      "documentation":"<p>The input for the CancelCertificateTransfer operation.</p>"
    },
    "CancelJobExecutionRequest":{
      "type":"structure",
      "required":[
        "jobId",
        "thingName"
      ],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The ID of the job to be canceled.</p>",
          "location":"uri",
          "locationName":"jobId"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing whose execution of the job will be canceled.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "force":{
          "shape":"ForceFlag",
          "documentation":"<p>(Optional) If <code>true</code> the job execution will be canceled if it has status IN_PROGRESS or QUEUED, otherwise the job execution will be canceled only if it has status QUEUED. If you attempt to cancel a job execution that is IN_PROGRESS, and you do not set <code>force</code> to <code>true</code>, then an <code>InvalidStateTransitionException</code> will be thrown. The default is <code>false</code>.</p> <p>Canceling a job execution which is \"IN_PROGRESS\", will cause the device to be unable to update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p>",
          "location":"querystring",
          "locationName":"force"
        },
        "expectedVersion":{
          "shape":"ExpectedVersion",
          "documentation":"<p>(Optional) The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)</p>"
        },
        "statusDetails":{
          "shape":"DetailsMap",
          "documentation":"<p>A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs.</p>"
        }
      }
    },
    "CancelJobRequest":{
      "type":"structure",
      "required":["jobId"],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>",
          "location":"uri",
          "locationName":"jobId"
        },
        "comment":{
          "shape":"Comment",
          "documentation":"<p>An optional comment string describing why the job was canceled.</p>"
        },
        "force":{
          "shape":"ForceFlag",
          "documentation":"<p>(Optional) If <code>true</code> job executions with status \"IN_PROGRESS\" and \"QUEUED\" are canceled, otherwise only job executions with status \"QUEUED\" are canceled. The default is <code>false</code>.</p> <p>Canceling a job which is \"IN_PROGRESS\", will cause a device which is executing the job to be unable to update the job execution status. Use caution and ensure that each device executing a job which is canceled is able to recover to a valid state.</p>",
          "location":"querystring",
          "locationName":"force"
        }
      }
    },
    "CancelJobResponse":{
      "type":"structure",
      "members":{
        "jobArn":{
          "shape":"JobArn",
          "documentation":"<p>The job ARN.</p>"
        },
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>"
        },
        "description":{
          "shape":"JobDescription",
          "documentation":"<p>A short text description of the job.</p>"
        }
      }
    },
    "CanceledChecksCount":{"type":"integer"},
    "CanceledThings":{"type":"integer"},
    "CannedAccessControlList":{
      "type":"string",
      "enum":[
        "private",
        "public-read",
        "public-read-write",
        "aws-exec-read",
        "authenticated-read",
        "bucket-owner-read",
        "bucket-owner-full-control",
        "log-delivery-write"
      ]
    },
    "Certificate":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The ARN of the certificate.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>"
        },
        "status":{
          "shape":"CertificateStatus",
          "documentation":"<p>The status of the certificate.</p> <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The date and time the certificate was created.</p>"
        }
      },
      "documentation":"<p>Information about a certificate.</p>"
    },
    "CertificateArn":{"type":"string"},
    "CertificateConflictException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>Unable to verify the CA certificate used to sign the device certificate you are attempting to register. This is happens when you have registered more than one CA certificate that has the same subject field and public key.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "CertificateDescription":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The ARN of the certificate.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate.</p>"
        },
        "caCertificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The certificate ID of the CA certificate used to sign this certificate.</p>"
        },
        "status":{
          "shape":"CertificateStatus",
          "documentation":"<p>The status of the certificate.</p>"
        },
        "certificatePem":{
          "shape":"CertificatePem",
          "documentation":"<p>The certificate data, in PEM format.</p>"
        },
        "ownedBy":{
          "shape":"AwsAccountId",
          "documentation":"<p>The ID of the AWS account that owns the certificate.</p>"
        },
        "previousOwnedBy":{
          "shape":"AwsAccountId",
          "documentation":"<p>The ID of the AWS account of the previous owner of the certificate.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The date and time the certificate was created.</p>"
        },
        "lastModifiedDate":{
          "shape":"DateType",
          "documentation":"<p>The date and time the certificate was last modified.</p>"
        },
        "customerVersion":{
          "shape":"CustomerVersion",
          "documentation":"<p>The customer version of the certificate.</p>"
        },
        "transferData":{
          "shape":"TransferData",
          "documentation":"<p>The transfer data.</p>"
        },
        "generationId":{
          "shape":"GenerationId",
          "documentation":"<p>The generation ID of the certificate.</p>"
        },
        "validity":{
          "shape":"CertificateValidity",
          "documentation":"<p>When the certificate is valid.</p>"
        }
      },
      "documentation":"<p>Describes a certificate.</p>"
    },
    "CertificateId":{
      "type":"string",
      "max":64,
      "min":64,
      "pattern":"(0x)?[a-fA-F0-9]+"
    },
    "CertificateName":{"type":"string"},
    "CertificatePathOnDevice":{"type":"string"},
    "CertificatePem":{
      "type":"string",
      "documentation":"<p>The PEM of a certificate.</p>",
      "max":65536,
      "min":1
    },
    "CertificateSigningRequest":{
      "type":"string",
      "min":1
    },
    "CertificateStateException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The certificate operation is not allowed.</p>",
      "error":{"httpStatusCode":406},
      "exception":true
    },
    "CertificateStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "INACTIVE",
        "REVOKED",
        "PENDING_TRANSFER",
        "REGISTER_INACTIVE",
        "PENDING_ACTIVATION"
      ]
    },
    "CertificateValidationException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>Additional information about the exception.</p>"
        }
      },
      "documentation":"<p>The certificate is invalid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "CertificateValidity":{
      "type":"structure",
      "members":{
        "notBefore":{
          "shape":"DateType",
          "documentation":"<p>The certificate is not valid before this date.</p>"
        },
        "notAfter":{
          "shape":"DateType",
          "documentation":"<p>The certificate is not valid after this date.</p>"
        }
      },
      "documentation":"<p>When the certificate is valid.</p>"
    },
    "Certificates":{
      "type":"list",
      "member":{"shape":"Certificate"}
    },
    "ChannelName":{"type":"string"},
    "CheckCompliant":{"type":"boolean"},
    "Cidr":{
      "type":"string",
      "max":43,
      "min":2,
      "pattern":"[a-fA-F0-9:\\.\\/]+"
    },
    "Cidrs":{
      "type":"list",
      "member":{"shape":"Cidr"}
    },
    "ClearDefaultAuthorizerRequest":{
      "type":"structure",
      "members":{
      }
    },
    "ClearDefaultAuthorizerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ClientId":{"type":"string"},
    "CloudwatchAlarmAction":{
      "type":"structure",
      "required":[
        "roleArn",
        "alarmName",
        "stateReason",
        "stateValue"
      ],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The IAM role that allows access to the CloudWatch alarm.</p>"
        },
        "alarmName":{
          "shape":"AlarmName",
          "documentation":"<p>The CloudWatch alarm name.</p>"
        },
        "stateReason":{
          "shape":"StateReason",
          "documentation":"<p>The reason for the alarm change.</p>"
        },
        "stateValue":{
          "shape":"StateValue",
          "documentation":"<p>The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.</p>"
        }
      },
      "documentation":"<p>Describes an action that updates a CloudWatch alarm.</p>"
    },
    "CloudwatchMetricAction":{
      "type":"structure",
      "required":[
        "roleArn",
        "metricNamespace",
        "metricName",
        "metricValue",
        "metricUnit"
      ],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The IAM role that allows access to the CloudWatch metric.</p>"
        },
        "metricNamespace":{
          "shape":"String",
          "documentation":"<p>The CloudWatch metric namespace name.</p>"
        },
        "metricName":{
          "shape":"String",
          "documentation":"<p>The CloudWatch metric name.</p>"
        },
        "metricValue":{
          "shape":"String",
          "documentation":"<p>The CloudWatch metric value.</p>"
        },
        "metricUnit":{
          "shape":"String",
          "documentation":"<p>The <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit\">metric unit</a> supported by CloudWatch.</p>"
        },
        "metricTimestamp":{
          "shape":"String",
          "documentation":"<p>An optional <a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp\">Unix timestamp</a>.</p>"
        }
      },
      "documentation":"<p>Describes an action that captures a CloudWatch metric.</p>"
    },
    "Code":{"type":"string"},
    "CodeSigning":{
      "type":"structure",
      "members":{
        "awsSignerJobId":{
          "shape":"SigningJobId",
          "documentation":"<p>The ID of the AWSSignerJob which was created to sign the file.</p>"
        },
        "startSigningJobParameter":{
          "shape":"StartSigningJobParameter",
          "documentation":"<p>Describes the code-signing job.</p>"
        },
        "customCodeSigning":{
          "shape":"CustomCodeSigning",
          "documentation":"<p>A custom method for code signing a file.</p>"
        }
      },
      "documentation":"<p>Describes the method to use when code signing a file.</p>"
    },
    "CodeSigningCertificateChain":{
      "type":"structure",
      "members":{
        "certificateName":{
          "shape":"CertificateName",
          "documentation":"<p>The name of the certificate.</p>"
        },
        "inlineDocument":{
          "shape":"InlineDocument",
          "documentation":"<p>A base64 encoded binary representation of the code signing certificate chain.</p>"
        }
      },
      "documentation":"<p>Describes the certificate chain being used when code signing a file.</p>"
    },
    "CodeSigningSignature":{
      "type":"structure",
      "members":{
        "inlineDocument":{
          "shape":"Signature",
          "documentation":"<p>A base64 encoded binary representation of the code signing signature.</p>"
        }
      },
      "documentation":"<p>Describes the signature for a file.</p>"
    },
    "CognitoIdentityPoolId":{"type":"string"},
    "Comment":{
      "type":"string",
      "max":2028,
      "pattern":"[^\\p{C}]+"
    },
    "ComparisonOperator":{
      "type":"string",
      "enum":[
        "less-than",
        "less-than-equals",
        "greater-than",
        "greater-than-equals",
        "in-cidr-set",
        "not-in-cidr-set",
        "in-port-set",
        "not-in-port-set"
      ]
    },
    "CompliantChecksCount":{"type":"integer"},
    "Configuration":{
      "type":"structure",
      "members":{
        "Enabled":{
          "shape":"Enabled",
          "documentation":"<p>True to enable the configuration.</p>"
        }
      },
      "documentation":"<p>Configuration.</p>"
    },
    "ConflictingResourceUpdateException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "Count":{"type":"integer"},
    "CreateAuthorizerRequest":{
      "type":"structure",
      "required":[
        "authorizerName",
        "authorizerFunctionArn",
        "tokenKeyName",
        "tokenSigningPublicKeys"
      ],
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The authorizer name.</p>",
          "location":"uri",
          "locationName":"authorizerName"
        },
        "authorizerFunctionArn":{
          "shape":"AuthorizerFunctionArn",
          "documentation":"<p>The ARN of the authorizer's Lambda function.</p>"
        },
        "tokenKeyName":{
          "shape":"TokenKeyName",
          "documentation":"<p>The name of the token key used to extract the token from the HTTP headers.</p>"
        },
        "tokenSigningPublicKeys":{
          "shape":"PublicKeyMap",
          "documentation":"<p>The public keys used to verify the digital signature returned by your custom authentication service.</p>"
        },
        "status":{
          "shape":"AuthorizerStatus",
          "documentation":"<p>The status of the create authorizer request.</p>"
        }
      }
    },
    "CreateAuthorizerResponse":{
      "type":"structure",
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The authorizer's name.</p>"
        },
        "authorizerArn":{
          "shape":"AuthorizerArn",
          "documentation":"<p>The authorizer ARN.</p>"
        }
      }
    },
    "CreateCertificateFromCsrRequest":{
      "type":"structure",
      "required":["certificateSigningRequest"],
      "members":{
        "certificateSigningRequest":{
          "shape":"CertificateSigningRequest",
          "documentation":"<p>The certificate signing request (CSR).</p>"
        },
        "setAsActive":{
          "shape":"SetAsActive",
          "documentation":"<p>Specifies whether the certificate is active.</p>",
          "location":"querystring",
          "locationName":"setAsActive"
        }
      },
      "documentation":"<p>The input for the CreateCertificateFromCsr operation.</p>"
    },
    "CreateCertificateFromCsrResponse":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the certificate. You can use the ARN as a principal for policy operations.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. Certificate management operations only take a certificateId.</p>"
        },
        "certificatePem":{
          "shape":"CertificatePem",
          "documentation":"<p>The certificate data, in PEM format.</p>"
        }
      },
      "documentation":"<p>The output from the CreateCertificateFromCsr operation.</p>"
    },
    "CreateJobRequest":{
      "type":"structure",
      "required":[
        "jobId",
        "targets"
      ],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>A job identifier which must be unique for your AWS account. We recommend using a UUID. Alpha-numeric characters, \"-\" and \"_\" are valid for use here.</p>",
          "location":"uri",
          "locationName":"jobId"
        },
        "targets":{
          "shape":"JobTargets",
          "documentation":"<p>A list of things and thing groups to which the job should be sent.</p>"
        },
        "documentSource":{
          "shape":"JobDocumentSource",
          "documentation":"<p>An S3 link to the job document.</p>"
        },
        "document":{
          "shape":"JobDocument",
          "documentation":"<p>The job document.</p>"
        },
        "description":{
          "shape":"JobDescription",
          "documentation":"<p>A short text description of the job.</p>"
        },
        "presignedUrlConfig":{
          "shape":"PresignedUrlConfig",
          "documentation":"<p>Configuration information for pre-signed S3 URLs.</p>"
        },
        "targetSelection":{
          "shape":"TargetSelection",
          "documentation":"<p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.</p>"
        },
        "jobExecutionsRolloutConfig":{
          "shape":"JobExecutionsRolloutConfig",
          "documentation":"<p>Allows you to create a staged rollout of the job.</p>"
        }
      }
    },
    "CreateJobResponse":{
      "type":"structure",
      "members":{
        "jobArn":{
          "shape":"JobArn",
          "documentation":"<p>The job ARN.</p>"
        },
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job.</p>"
        },
        "description":{
          "shape":"JobDescription",
          "documentation":"<p>The job description.</p>"
        }
      }
    },
    "CreateKeysAndCertificateRequest":{
      "type":"structure",
      "members":{
        "setAsActive":{
          "shape":"SetAsActive",
          "documentation":"<p>Specifies whether the certificate is active.</p>",
          "location":"querystring",
          "locationName":"setAsActive"
        }
      },
      "documentation":"<p>The input for the CreateKeysAndCertificate operation.</p>"
    },
    "CreateKeysAndCertificateResponse":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The ARN of the certificate.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. AWS IoT issues a default subject name for the certificate (for example, AWS IoT Certificate).</p>"
        },
        "certificatePem":{
          "shape":"CertificatePem",
          "documentation":"<p>The certificate data, in PEM format.</p>"
        },
        "keyPair":{
          "shape":"KeyPair",
          "documentation":"<p>The generated key pair.</p>"
        }
      },
      "documentation":"<p>The output of the CreateKeysAndCertificate operation.</p>"
    },
    "CreateOTAUpdateRequest":{
      "type":"structure",
      "required":[
        "otaUpdateId",
        "targets",
        "files",
        "roleArn"
      ],
      "members":{
        "otaUpdateId":{
          "shape":"OTAUpdateId",
          "documentation":"<p>The ID of the OTA update to be created.</p>",
          "location":"uri",
          "locationName":"otaUpdateId"
        },
        "description":{
          "shape":"OTAUpdateDescription",
          "documentation":"<p>The description of the OTA update.</p>"
        },
        "targets":{
          "shape":"Targets",
          "documentation":"<p>The targeted devices to receive OTA updates.</p>"
        },
        "targetSelection":{
          "shape":"TargetSelection",
          "documentation":"<p>Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT.</p>"
        },
        "awsJobExecutionsRolloutConfig":{
          "shape":"AwsJobExecutionsRolloutConfig",
          "documentation":"<p>Configuration for the rollout of OTA updates.</p>"
        },
        "files":{
          "shape":"OTAUpdateFiles",
          "documentation":"<p>The files to be streamed by the OTA update.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The IAM role that allows access to the AWS IoT Jobs service.</p>"
        },
        "additionalParameters":{
          "shape":"AdditionalParameterMap",
          "documentation":"<p>A list of additional OTA update parameters which are name-value pairs.</p>"
        }
      }
    },
    "CreateOTAUpdateResponse":{
      "type":"structure",
      "members":{
        "otaUpdateId":{
          "shape":"OTAUpdateId",
          "documentation":"<p>The OTA update ID.</p>"
        },
        "awsIotJobId":{
          "shape":"AwsIotJobId",
          "documentation":"<p>The AWS IoT job ID associated with the OTA update.</p>"
        },
        "otaUpdateArn":{
          "shape":"OTAUpdateArn",
          "documentation":"<p>The OTA update ARN.</p>"
        },
        "awsIotJobArn":{
          "shape":"AwsIotJobArn",
          "documentation":"<p>The AWS IoT job ARN associated with the OTA update.</p>"
        },
        "otaUpdateStatus":{
          "shape":"OTAUpdateStatus",
          "documentation":"<p>The OTA update status.</p>"
        }
      }
    },
    "CreatePolicyRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "policyDocument"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "policyDocument":{
          "shape":"PolicyDocument",
          "documentation":"<p>The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.</p>"
        }
      },
      "documentation":"<p>The input for the CreatePolicy operation.</p>"
    },
    "CreatePolicyResponse":{
      "type":"structure",
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>"
        },
        "policyArn":{
          "shape":"PolicyArn",
          "documentation":"<p>The policy ARN.</p>"
        },
        "policyDocument":{
          "shape":"PolicyDocument",
          "documentation":"<p>The JSON document that describes the policy.</p>"
        },
        "policyVersionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The policy version ID.</p>"
        }
      },
      "documentation":"<p>The output from the CreatePolicy operation.</p>"
    },
    "CreatePolicyVersionRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "policyDocument"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "policyDocument":{
          "shape":"PolicyDocument",
          "documentation":"<p>The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.</p>"
        },
        "setAsDefault":{
          "shape":"SetAsDefault",
          "documentation":"<p>Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p>",
          "location":"querystring",
          "locationName":"setAsDefault"
        }
      },
      "documentation":"<p>The input for the CreatePolicyVersion operation.</p>"
    },
    "CreatePolicyVersionResponse":{
      "type":"structure",
      "members":{
        "policyArn":{
          "shape":"PolicyArn",
          "documentation":"<p>The policy ARN.</p>"
        },
        "policyDocument":{
          "shape":"PolicyDocument",
          "documentation":"<p>The JSON document that describes the policy.</p>"
        },
        "policyVersionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The policy version ID.</p>"
        },
        "isDefaultVersion":{
          "shape":"IsDefaultVersion",
          "documentation":"<p>Specifies whether the policy version is the default.</p>"
        }
      },
      "documentation":"<p>The output of the CreatePolicyVersion operation.</p>"
    },
    "CreateRoleAliasRequest":{
      "type":"structure",
      "required":[
        "roleAlias",
        "roleArn"
      ],
      "members":{
        "roleAlias":{
          "shape":"RoleAlias",
          "documentation":"<p>The role alias that points to a role ARN. This allows you to change the role without having to update the device.</p>",
          "location":"uri",
          "locationName":"roleAlias"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The role ARN.</p>"
        },
        "credentialDurationSeconds":{
          "shape":"CredentialDurationSeconds",
          "documentation":"<p>How long (in seconds) the credentials will be valid.</p>"
        }
      }
    },
    "CreateRoleAliasResponse":{
      "type":"structure",
      "members":{
        "roleAlias":{
          "shape":"RoleAlias",
          "documentation":"<p>The role alias.</p>"
        },
        "roleAliasArn":{
          "shape":"RoleAliasArn",
          "documentation":"<p>The role alias ARN.</p>"
        }
      }
    },
    "CreateScheduledAuditRequest":{
      "type":"structure",
      "required":[
        "frequency",
        "targetCheckNames",
        "scheduledAuditName"
      ],
      "members":{
        "frequency":{
          "shape":"AuditFrequency",
          "documentation":"<p>How often the scheduled audit takes place. Can be one of \"DAILY\", \"WEEKLY\", \"BIWEEKLY\" or \"MONTHLY\". The actual start time of each audit is determined by the system.</p>"
        },
        "dayOfMonth":{
          "shape":"DayOfMonth",
          "documentation":"<p>The day of the month on which the scheduled audit takes place. Can be \"1\" through \"31\" or \"LAST\". This field is required if the \"frequency\" parameter is set to \"MONTHLY\". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the \"LAST\" day of the month.</p>"
        },
        "dayOfWeek":{
          "shape":"DayOfWeek",
          "documentation":"<p>The day of the week on which the scheduled audit takes place. Can be one of \"SUN\", \"MON\", \"TUE\", \"WED\", \"THU\", \"FRI\" or \"SAT\". This field is required if the \"frequency\" parameter is set to \"WEEKLY\" or \"BIWEEKLY\".</p>"
        },
        "targetCheckNames":{
          "shape":"TargetAuditCheckNames",
          "documentation":"<p>Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)</p>"
        },
        "scheduledAuditName":{
          "shape":"ScheduledAuditName",
          "documentation":"<p>The name you want to give to the scheduled audit. (Max. 128 chars)</p>",
          "location":"uri",
          "locationName":"scheduledAuditName"
        }
      }
    },
    "CreateScheduledAuditResponse":{
      "type":"structure",
      "members":{
        "scheduledAuditArn":{
          "shape":"ScheduledAuditArn",
          "documentation":"<p>The ARN of the scheduled audit.</p>"
        }
      }
    },
    "CreateSecurityProfileRequest":{
      "type":"structure",
      "required":[
        "securityProfileName",
        "behaviors"
      ],
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name you are giving to the security profile.</p>",
          "location":"uri",
          "locationName":"securityProfileName"
        },
        "securityProfileDescription":{
          "shape":"SecurityProfileDescription",
          "documentation":"<p>A description of the security profile.</p>"
        },
        "behaviors":{
          "shape":"Behaviors",
          "documentation":"<p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>"
        },
        "alertTargets":{
          "shape":"AlertTargets",
          "documentation":"<p>Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior.</p>"
        }
      }
    },
    "CreateSecurityProfileResponse":{
      "type":"structure",
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name you gave to the security profile.</p>"
        },
        "securityProfileArn":{
          "shape":"SecurityProfileArn",
          "documentation":"<p>The ARN of the security profile.</p>"
        }
      }
    },
    "CreateStreamRequest":{
      "type":"structure",
      "required":[
        "streamId",
        "files",
        "roleArn"
      ],
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>",
          "location":"uri",
          "locationName":"streamId"
        },
        "description":{
          "shape":"StreamDescription",
          "documentation":"<p>A description of the stream.</p>"
        },
        "files":{
          "shape":"StreamFiles",
          "documentation":"<p>The files to stream.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>"
        }
      }
    },
    "CreateStreamResponse":{
      "type":"structure",
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>"
        },
        "streamArn":{
          "shape":"StreamArn",
          "documentation":"<p>The stream ARN.</p>"
        },
        "description":{
          "shape":"StreamDescription",
          "documentation":"<p>A description of the stream.</p>"
        },
        "streamVersion":{
          "shape":"StreamVersion",
          "documentation":"<p>The version of the stream.</p>"
        }
      }
    },
    "CreateThingGroupRequest":{
      "type":"structure",
      "required":["thingGroupName"],
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The thing group name to create.</p>",
          "location":"uri",
          "locationName":"thingGroupName"
        },
        "parentGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The name of the parent thing group.</p>"
        },
        "thingGroupProperties":{
          "shape":"ThingGroupProperties",
          "documentation":"<p>The thing group properties.</p>"
        }
      }
    },
    "CreateThingGroupResponse":{
      "type":"structure",
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The thing group name.</p>"
        },
        "thingGroupArn":{
          "shape":"ThingGroupArn",
          "documentation":"<p>The thing group ARN.</p>"
        },
        "thingGroupId":{
          "shape":"ThingGroupId",
          "documentation":"<p>The thing group ID.</p>"
        }
      }
    },
    "CreateThingRequest":{
      "type":"structure",
      "required":["thingName"],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing to create.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type associated with the new thing.</p>"
        },
        "attributePayload":{
          "shape":"AttributePayload",
          "documentation":"<p>The attribute payload, which consists of up to three name/value pairs in a JSON document. For example:</p> <p> <code>{\\\"attributes\\\":{\\\"string1\\\":\\\"string2\\\"}}</code> </p>"
        }
      },
      "documentation":"<p>The input for the CreateThing operation.</p>"
    },
    "CreateThingResponse":{
      "type":"structure",
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the new thing.</p>"
        },
        "thingArn":{
          "shape":"ThingArn",
          "documentation":"<p>The ARN of the new thing.</p>"
        },
        "thingId":{
          "shape":"ThingId",
          "documentation":"<p>The thing ID.</p>"
        }
      },
      "documentation":"<p>The output of the CreateThing operation.</p>"
    },
    "CreateThingTypeRequest":{
      "type":"structure",
      "required":["thingTypeName"],
      "members":{
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type.</p>",
          "location":"uri",
          "locationName":"thingTypeName"
        },
        "thingTypeProperties":{
          "shape":"ThingTypeProperties",
          "documentation":"<p>The ThingTypeProperties for the thing type to create. It contains information about the new thing type including a description, and a list of searchable thing attribute names.</p>"
        }
      },
      "documentation":"<p>The input for the CreateThingType operation.</p>"
    },
    "CreateThingTypeResponse":{
      "type":"structure",
      "members":{
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type.</p>"
        },
        "thingTypeArn":{
          "shape":"ThingTypeArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the thing type.</p>"
        },
        "thingTypeId":{
          "shape":"ThingTypeId",
          "documentation":"<p>The thing type ID.</p>"
        }
      },
      "documentation":"<p>The output of the CreateThingType operation.</p>"
    },
    "CreateTopicRuleRequest":{
      "type":"structure",
      "required":[
        "ruleName",
        "topicRulePayload"
      ],
      "members":{
        "ruleName":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>",
          "location":"uri",
          "locationName":"ruleName"
        },
        "topicRulePayload":{
          "shape":"TopicRulePayload",
          "documentation":"<p>The rule payload.</p>"
        }
      },
      "documentation":"<p>The input for the CreateTopicRule operation.</p>",
      "payload":"topicRulePayload"
    },
    "CreatedAtDate":{"type":"timestamp"},
    "CreationDate":{"type":"timestamp"},
    "CredentialDurationSeconds":{
      "type":"integer",
      "max":3600,
      "min":900
    },
    "CustomCodeSigning":{
      "type":"structure",
      "members":{
        "signature":{
          "shape":"CodeSigningSignature",
          "documentation":"<p>The signature for the file.</p>"
        },
        "certificateChain":{
          "shape":"CodeSigningCertificateChain",
          "documentation":"<p>The certificate chain.</p>"
        },
        "hashAlgorithm":{
          "shape":"HashAlgorithm",
          "documentation":"<p>The hash algorithm used to code sign the file.</p>"
        },
        "signatureAlgorithm":{
          "shape":"SignatureAlgorithm",
          "documentation":"<p>The signature algorithm used to code sign the file.</p>"
        }
      },
      "documentation":"<p>Describes a custom method used to code sign a file.</p>"
    },
    "CustomerVersion":{
      "type":"integer",
      "min":1
    },
    "DateType":{"type":"timestamp"},
    "DayOfMonth":{
      "type":"string",
      "pattern":"^([1-9]|[12][0-9]|3[01])$|^LAST$"
    },
    "DayOfWeek":{
      "type":"string",
      "enum":[
        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
      ]
    },
    "DeleteAccountAuditConfigurationRequest":{
      "type":"structure",
      "members":{
        "deleteScheduledAudits":{
          "shape":"DeleteScheduledAudits",
          "documentation":"<p>If true, all scheduled audits are deleted.</p>",
          "location":"querystring",
          "locationName":"deleteScheduledAudits"
        }
      }
    },
    "DeleteAccountAuditConfigurationResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteAuthorizerRequest":{
      "type":"structure",
      "required":["authorizerName"],
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The name of the authorizer to delete.</p>",
          "location":"uri",
          "locationName":"authorizerName"
        }
      }
    },
    "DeleteAuthorizerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteCACertificateRequest":{
      "type":"structure",
      "required":["certificateId"],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate to delete. (The last part of the certificate ARN contains the certificate ID.)</p>",
          "location":"uri",
          "locationName":"caCertificateId"
        }
      },
      "documentation":"<p>Input for the DeleteCACertificate operation.</p>"
    },
    "DeleteCACertificateResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output for the DeleteCACertificate operation.</p>"
    },
    "DeleteCertificateRequest":{
      "type":"structure",
      "required":["certificateId"],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>",
          "location":"uri",
          "locationName":"certificateId"
        },
        "forceDelete":{
          "shape":"ForceDelete",
          "documentation":"<p>Forces a certificate request to be deleted.</p>",
          "location":"querystring",
          "locationName":"forceDelete"
        }
      },
      "documentation":"<p>The input for the DeleteCertificate operation.</p>"
    },
    "DeleteConflictException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>You can't delete the resource because it is attached to one or more resources.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "DeleteJobExecutionRequest":{
      "type":"structure",
      "required":[
        "jobId",
        "thingName",
        "executionNumber"
      ],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The ID of the job whose execution on a particular device will be deleted.</p>",
          "location":"uri",
          "locationName":"jobId"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing whose job execution will be deleted.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "executionNumber":{
          "shape":"ExecutionNumber",
          "documentation":"<p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers to the execution of a particular job on a particular device.</p> <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be reused by IoT, so be sure you get and use the correct value here.</p>",
          "location":"uri",
          "locationName":"executionNumber"
        },
        "force":{
          "shape":"ForceFlag",
          "documentation":"<p>(Optional) When true, you can delete a job execution which is \"IN_PROGRESS\". Otherwise, you can only delete a job execution which is in a terminal state (\"SUCCEEDED\", \"FAILED\", \"REJECTED\", \"REMOVED\" or \"CANCELED\") or an exception will occur. The default is false.</p> <note> <p>Deleting a job execution which is \"IN_PROGRESS\", will cause the device to be unable to access job information or update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p> </note>",
          "location":"querystring",
          "locationName":"force"
        }
      }
    },
    "DeleteJobRequest":{
      "type":"structure",
      "required":["jobId"],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The ID of the job to be deleted.</p> <p>After a job deletion is completed, you may reuse this jobId when you create a new job. However, this is not recommended, and you must ensure that your devices are not using the jobId to refer to the deleted job.</p>",
          "location":"uri",
          "locationName":"jobId"
        },
        "force":{
          "shape":"ForceFlag",
          "documentation":"<p>(Optional) When true, you can delete a job which is \"IN_PROGRESS\". Otherwise, you can only delete a job which is in a terminal state (\"COMPLETED\" or \"CANCELED\") or an exception will occur. The default is false.</p> <note> <p>Deleting a job which is \"IN_PROGRESS\", will cause a device which is executing the job to be unable to access job information or update the job execution status. Use caution and ensure that each device executing a job which is deleted is able to recover to a valid state.</p> </note>",
          "location":"querystring",
          "locationName":"force"
        }
      }
    },
    "DeleteOTAUpdateRequest":{
      "type":"structure",
      "required":["otaUpdateId"],
      "members":{
        "otaUpdateId":{
          "shape":"OTAUpdateId",
          "documentation":"<p>The OTA update ID to delete.</p>",
          "location":"uri",
          "locationName":"otaUpdateId"
        },
        "deleteStream":{
          "shape":"DeleteStream",
          "documentation":"<p>Specifies if the stream associated with an OTA update should be deleted when the OTA update is deleted.</p>",
          "location":"querystring",
          "locationName":"deleteStream"
        },
        "forceDeleteAWSJob":{
          "shape":"ForceDeleteAWSJob",
          "documentation":"<p>Specifies if the AWS Job associated with the OTA update should be deleted with the OTA update is deleted.</p>",
          "location":"querystring",
          "locationName":"forceDeleteAWSJob"
        }
      }
    },
    "DeleteOTAUpdateResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeletePolicyRequest":{
      "type":"structure",
      "required":["policyName"],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the policy to delete.</p>",
          "location":"uri",
          "locationName":"policyName"
        }
      },
      "documentation":"<p>The input for the DeletePolicy operation.</p>"
    },
    "DeletePolicyVersionRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "policyVersionId"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the policy.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "policyVersionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The policy version ID.</p>",
          "location":"uri",
          "locationName":"policyVersionId"
        }
      },
      "documentation":"<p>The input for the DeletePolicyVersion operation.</p>"
    },
    "DeleteRegistrationCodeRequest":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The input for the DeleteRegistrationCode operation.</p>"
    },
    "DeleteRegistrationCodeResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output for the DeleteRegistrationCode operation.</p>"
    },
    "DeleteRoleAliasRequest":{
      "type":"structure",
      "required":["roleAlias"],
      "members":{
        "roleAlias":{
          "shape":"RoleAlias",
          "documentation":"<p>The role alias to delete.</p>",
          "location":"uri",
          "locationName":"roleAlias"
        }
      }
    },
    "DeleteRoleAliasResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteScheduledAuditRequest":{
      "type":"structure",
      "required":["scheduledAuditName"],
      "members":{
        "scheduledAuditName":{
          "shape":"ScheduledAuditName",
          "documentation":"<p>The name of the scheduled audit you want to delete.</p>",
          "location":"uri",
          "locationName":"scheduledAuditName"
        }
      }
    },
    "DeleteScheduledAuditResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteScheduledAudits":{"type":"boolean"},
    "DeleteSecurityProfileRequest":{
      "type":"structure",
      "required":["securityProfileName"],
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name of the security profile to be deleted.</p>",
          "location":"uri",
          "locationName":"securityProfileName"
        },
        "expectedVersion":{
          "shape":"OptionalVersion",
          "documentation":"<p>The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different than the actual version, a <code>VersionConflictException</code> is thrown.</p>",
          "location":"querystring",
          "locationName":"expectedVersion"
        }
      }
    },
    "DeleteSecurityProfileResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteStream":{"type":"boolean"},
    "DeleteStreamRequest":{
      "type":"structure",
      "required":["streamId"],
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>",
          "location":"uri",
          "locationName":"streamId"
        }
      }
    },
    "DeleteStreamResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteThingGroupRequest":{
      "type":"structure",
      "required":["thingGroupName"],
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The name of the thing group to delete.</p>",
          "location":"uri",
          "locationName":"thingGroupName"
        },
        "expectedVersion":{
          "shape":"OptionalVersion",
          "documentation":"<p>The expected version of the thing group to delete.</p>",
          "location":"querystring",
          "locationName":"expectedVersion"
        }
      }
    },
    "DeleteThingGroupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteThingRequest":{
      "type":"structure",
      "required":["thingName"],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing to delete.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "expectedVersion":{
          "shape":"OptionalVersion",
          "documentation":"<p>The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>DeleteThing</code> request is rejected with a <code>VersionConflictException</code>.</p>",
          "location":"querystring",
          "locationName":"expectedVersion"
        }
      },
      "documentation":"<p>The input for the DeleteThing operation.</p>"
    },
    "DeleteThingResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output of the DeleteThing operation.</p>"
    },
    "DeleteThingTypeRequest":{
      "type":"structure",
      "required":["thingTypeName"],
      "members":{
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type.</p>",
          "location":"uri",
          "locationName":"thingTypeName"
        }
      },
      "documentation":"<p>The input for the DeleteThingType operation.</p>"
    },
    "DeleteThingTypeResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output for the DeleteThingType operation.</p>"
    },
    "DeleteTopicRuleRequest":{
      "type":"structure",
      "required":["ruleName"],
      "members":{
        "ruleName":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>",
          "location":"uri",
          "locationName":"ruleName"
        }
      },
      "documentation":"<p>The input for the DeleteTopicRule operation.</p>"
    },
    "DeleteV2LoggingLevelRequest":{
      "type":"structure",
      "required":[
        "targetType",
        "targetName"
      ],
      "members":{
        "targetType":{
          "shape":"LogTargetType",
          "documentation":"<p>The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.</p>",
          "location":"querystring",
          "locationName":"targetType"
        },
        "targetName":{
          "shape":"LogTargetName",
          "documentation":"<p>The name of the resource for which you are configuring logging.</p>",
          "location":"querystring",
          "locationName":"targetName"
        }
      }
    },
    "DeliveryStreamName":{"type":"string"},
    "Denied":{
      "type":"structure",
      "members":{
        "implicitDeny":{
          "shape":"ImplicitDeny",
          "documentation":"<p>Information that implicitly denies the authorization. When a policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.</p>"
        },
        "explicitDeny":{
          "shape":"ExplicitDeny",
          "documentation":"<p>Information that explicitly denies the authorization. </p>"
        }
      },
      "documentation":"<p>Contains information that denied the authorization.</p>"
    },
    "DeprecateThingTypeRequest":{
      "type":"structure",
      "required":["thingTypeName"],
      "members":{
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type to deprecate.</p>",
          "location":"uri",
          "locationName":"thingTypeName"
        },
        "undoDeprecate":{
          "shape":"UndoDeprecate",
          "documentation":"<p>Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can associate it with things.</p>"
        }
      },
      "documentation":"<p>The input for the DeprecateThingType operation.</p>"
    },
    "DeprecateThingTypeResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output for the DeprecateThingType operation.</p>"
    },
    "DeprecationDate":{"type":"timestamp"},
    "DescribeAccountAuditConfigurationRequest":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeAccountAuditConfigurationResponse":{
      "type":"structure",
      "members":{
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as necessary when performing an audit.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code> this parameter is required.</p>"
        },
        "auditNotificationTargetConfigurations":{
          "shape":"AuditNotificationTargetConfigurations",
          "documentation":"<p>Information about the targets to which audit notifications are sent for this account.</p>"
        },
        "auditCheckConfigurations":{
          "shape":"AuditCheckConfigurations",
          "documentation":"<p>Which audit checks are enabled and disabled for this account.</p>"
        }
      }
    },
    "DescribeAuditTaskRequest":{
      "type":"structure",
      "required":["taskId"],
      "members":{
        "taskId":{
          "shape":"AuditTaskId",
          "documentation":"<p>The ID of the audit whose information you want to get.</p>",
          "location":"uri",
          "locationName":"taskId"
        }
      }
    },
    "DescribeAuditTaskResponse":{
      "type":"structure",
      "members":{
        "taskStatus":{
          "shape":"AuditTaskStatus",
          "documentation":"<p>The status of the audit: one of \"IN_PROGRESS\", \"COMPLETED\", \"FAILED\", or \"CANCELED\".</p>"
        },
        "taskType":{
          "shape":"AuditTaskType",
          "documentation":"<p>The type of audit: \"ON_DEMAND_AUDIT_TASK\" or \"SCHEDULED_AUDIT_TASK\".</p>"
        },
        "taskStartTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the audit started.</p>"
        },
        "taskStatistics":{
          "shape":"TaskStatistics",
          "documentation":"<p>Statistical information about the audit.</p>"
        },
        "scheduledAuditName":{
          "shape":"ScheduledAuditName",
          "documentation":"<p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>"
        },
        "auditDetails":{
          "shape":"AuditDetails",
          "documentation":"<p>Detailed information about each check performed during this audit.</p>"
        }
      }
    },
    "DescribeAuthorizerRequest":{
      "type":"structure",
      "required":["authorizerName"],
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The name of the authorizer to describe.</p>",
          "location":"uri",
          "locationName":"authorizerName"
        }
      }
    },
    "DescribeAuthorizerResponse":{
      "type":"structure",
      "members":{
        "authorizerDescription":{
          "shape":"AuthorizerDescription",
          "documentation":"<p>The authorizer description.</p>"
        }
      }
    },
    "DescribeCACertificateRequest":{
      "type":"structure",
      "required":["certificateId"],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The CA certificate identifier.</p>",
          "location":"uri",
          "locationName":"caCertificateId"
        }
      },
      "documentation":"<p>The input for the DescribeCACertificate operation.</p>"
    },
    "DescribeCACertificateResponse":{
      "type":"structure",
      "members":{
        "certificateDescription":{
          "shape":"CACertificateDescription",
          "documentation":"<p>The CA certificate description.</p>"
        },
        "registrationConfig":{
          "shape":"RegistrationConfig",
          "documentation":"<p>Information about the registration configuration.</p>"
        }
      },
      "documentation":"<p>The output from the DescribeCACertificate operation.</p>"
    },
    "DescribeCertificateRequest":{
      "type":"structure",
      "required":["certificateId"],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>",
          "location":"uri",
          "locationName":"certificateId"
        }
      },
      "documentation":"<p>The input for the DescribeCertificate operation.</p>"
    },
    "DescribeCertificateResponse":{
      "type":"structure",
      "members":{
        "certificateDescription":{
          "shape":"CertificateDescription",
          "documentation":"<p>The description of the certificate.</p>"
        }
      },
      "documentation":"<p>The output of the DescribeCertificate operation.</p>"
    },
    "DescribeDefaultAuthorizerRequest":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeDefaultAuthorizerResponse":{
      "type":"structure",
      "members":{
        "authorizerDescription":{
          "shape":"AuthorizerDescription",
          "documentation":"<p>The default authorizer's description.</p>"
        }
      }
    },
    "DescribeEndpointRequest":{
      "type":"structure",
      "members":{
        "endpointType":{
          "shape":"EndpointType",
          "documentation":"<p>The endpoint type (such as <code>iot:Data</code>, <code>iot:CredentialProvider</code> and <code>iot:Jobs</code>). </p>",
          "location":"querystring",
          "locationName":"endpointType"
        }
      },
      "documentation":"<p>The input for the DescribeEndpoint operation.</p>"
    },
    "DescribeEndpointResponse":{
      "type":"structure",
      "members":{
        "endpointAddress":{
          "shape":"EndpointAddress",
          "documentation":"<p>The endpoint. The format of the endpoint is as follows: <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>"
        }
      },
      "documentation":"<p>The output from the DescribeEndpoint operation.</p>"
    },
    "DescribeEventConfigurationsRequest":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeEventConfigurationsResponse":{
      "type":"structure",
      "members":{
        "eventConfigurations":{
          "shape":"EventConfigurations",
          "documentation":"<p>The event configurations.</p>"
        },
        "creationDate":{
          "shape":"CreationDate",
          "documentation":"<p>The creation date of the event configuration.</p>"
        },
        "lastModifiedDate":{
          "shape":"LastModifiedDate",
          "documentation":"<p>The date the event configurations were last modified.</p>"
        }
      }
    },
    "DescribeIndexRequest":{
      "type":"structure",
      "required":["indexName"],
      "members":{
        "indexName":{
          "shape":"IndexName",
          "documentation":"<p>The index name.</p>",
          "location":"uri",
          "locationName":"indexName"
        }
      }
    },
    "DescribeIndexResponse":{
      "type":"structure",
      "members":{
        "indexName":{
          "shape":"IndexName",
          "documentation":"<p>The index name.</p>"
        },
        "indexStatus":{
          "shape":"IndexStatus",
          "documentation":"<p>The index status.</p>"
        },
        "schema":{
          "shape":"IndexSchema",
          "documentation":"<p>Contains a value that specifies the type of indexing performed. Valid values are:</p> <ol> <li> <p>REGISTRY – Your thing index will contain only registry data.</p> </li> <li> <p>REGISTRY_AND_SHADOW - Your thing index will contain registry and shadow data.</p> </li> </ol>"
        }
      }
    },
    "DescribeJobExecutionRequest":{
      "type":"structure",
      "required":[
        "jobId",
        "thingName"
      ],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>",
          "location":"uri",
          "locationName":"jobId"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing on which the job execution is running.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "executionNumber":{
          "shape":"ExecutionNumber",
          "documentation":"<p>A string (consisting of the digits \"0\" through \"9\" which is used to specify a particular job execution on a particular device.</p>",
          "location":"querystring",
          "locationName":"executionNumber"
        }
      }
    },
    "DescribeJobExecutionResponse":{
      "type":"structure",
      "members":{
        "execution":{
          "shape":"JobExecution",
          "documentation":"<p>Information about the job execution.</p>"
        }
      }
    },
    "DescribeJobRequest":{
      "type":"structure",
      "required":["jobId"],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>",
          "location":"uri",
          "locationName":"jobId"
        }
      }
    },
    "DescribeJobResponse":{
      "type":"structure",
      "members":{
        "documentSource":{
          "shape":"JobDocumentSource",
          "documentation":"<p>An S3 link to the job document.</p>"
        },
        "job":{
          "shape":"Job",
          "documentation":"<p>Information about the job.</p>"
        }
      }
    },
    "DescribeRoleAliasRequest":{
      "type":"structure",
      "required":["roleAlias"],
      "members":{
        "roleAlias":{
          "shape":"RoleAlias",
          "documentation":"<p>The role alias to describe.</p>",
          "location":"uri",
          "locationName":"roleAlias"
        }
      }
    },
    "DescribeRoleAliasResponse":{
      "type":"structure",
      "members":{
        "roleAliasDescription":{
          "shape":"RoleAliasDescription",
          "documentation":"<p>The role alias description.</p>"
        }
      }
    },
    "DescribeScheduledAuditRequest":{
      "type":"structure",
      "required":["scheduledAuditName"],
      "members":{
        "scheduledAuditName":{
          "shape":"ScheduledAuditName",
          "documentation":"<p>The name of the scheduled audit whose information you want to get.</p>",
          "location":"uri",
          "locationName":"scheduledAuditName"
        }
      }
    },
    "DescribeScheduledAuditResponse":{
      "type":"structure",
      "members":{
        "frequency":{
          "shape":"AuditFrequency",
          "documentation":"<p>How often the scheduled audit takes place. One of \"DAILY\", \"WEEKLY\", \"BIWEEKLY\" or \"MONTHLY\". The actual start time of each audit is determined by the system.</p>"
        },
        "dayOfMonth":{
          "shape":"DayOfMonth",
          "documentation":"<p>The day of the month on which the scheduled audit takes place. Will be \"1\" through \"31\" or \"LAST\". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the \"LAST\" day of the month.</p>"
        },
        "dayOfWeek":{
          "shape":"DayOfWeek",
          "documentation":"<p>The day of the week on which the scheduled audit takes place. One of \"SUN\", \"MON\", \"TUE\", \"WED\", \"THU\", \"FRI\" or \"SAT\".</p>"
        },
        "targetCheckNames":{
          "shape":"TargetAuditCheckNames",
          "documentation":"<p>Which checks are performed during the scheduled audit. (Note that checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)</p>"
        },
        "scheduledAuditName":{
          "shape":"ScheduledAuditName",
          "documentation":"<p>The name of the scheduled audit.</p>"
        },
        "scheduledAuditArn":{
          "shape":"ScheduledAuditArn",
          "documentation":"<p>The ARN of the scheduled audit.</p>"
        }
      }
    },
    "DescribeSecurityProfileRequest":{
      "type":"structure",
      "required":["securityProfileName"],
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name of the security profile whose information you want to get.</p>",
          "location":"uri",
          "locationName":"securityProfileName"
        }
      }
    },
    "DescribeSecurityProfileResponse":{
      "type":"structure",
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name of the security profile.</p>"
        },
        "securityProfileArn":{
          "shape":"SecurityProfileArn",
          "documentation":"<p>The ARN of the security profile.</p>"
        },
        "securityProfileDescription":{
          "shape":"SecurityProfileDescription",
          "documentation":"<p>A description of the security profile (associated with the security profile when it was created or updated).</p>"
        },
        "behaviors":{
          "shape":"Behaviors",
          "documentation":"<p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>"
        },
        "alertTargets":{
          "shape":"AlertTargets",
          "documentation":"<p>Where the alerts are sent. (Alerts are always sent to the console.)</p>"
        },
        "version":{
          "shape":"Version",
          "documentation":"<p>The version of the security profile. A new version is generated whenever the security profile is updated.</p>"
        },
        "creationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The time the security profile was created.</p>"
        },
        "lastModifiedDate":{
          "shape":"Timestamp",
          "documentation":"<p>The time the security profile was last modified.</p>"
        }
      }
    },
    "DescribeStreamRequest":{
      "type":"structure",
      "required":["streamId"],
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>",
          "location":"uri",
          "locationName":"streamId"
        }
      }
    },
    "DescribeStreamResponse":{
      "type":"structure",
      "members":{
        "streamInfo":{
          "shape":"StreamInfo",
          "documentation":"<p>Information about the stream.</p>"
        }
      }
    },
    "DescribeThingGroupRequest":{
      "type":"structure",
      "required":["thingGroupName"],
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The name of the thing group.</p>",
          "location":"uri",
          "locationName":"thingGroupName"
        }
      }
    },
    "DescribeThingGroupResponse":{
      "type":"structure",
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The name of the thing group.</p>"
        },
        "thingGroupId":{
          "shape":"ThingGroupId",
          "documentation":"<p>The thing group ID.</p>"
        },
        "thingGroupArn":{
          "shape":"ThingGroupArn",
          "documentation":"<p>The thing group ARN.</p>"
        },
        "version":{
          "shape":"Version",
          "documentation":"<p>The version of the thing group.</p>"
        },
        "thingGroupProperties":{
          "shape":"ThingGroupProperties",
          "documentation":"<p>The thing group properties.</p>"
        },
        "thingGroupMetadata":{
          "shape":"ThingGroupMetadata",
          "documentation":"<p>Thing group metadata.</p>"
        }
      }
    },
    "DescribeThingRegistrationTaskRequest":{
      "type":"structure",
      "required":["taskId"],
      "members":{
        "taskId":{
          "shape":"TaskId",
          "documentation":"<p>The task ID.</p>",
          "location":"uri",
          "locationName":"taskId"
        }
      }
    },
    "DescribeThingRegistrationTaskResponse":{
      "type":"structure",
      "members":{
        "taskId":{
          "shape":"TaskId",
          "documentation":"<p>The task ID.</p>"
        },
        "creationDate":{
          "shape":"CreationDate",
          "documentation":"<p>The task creation date.</p>"
        },
        "lastModifiedDate":{
          "shape":"LastModifiedDate",
          "documentation":"<p>The date when the task was last modified.</p>"
        },
        "templateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>The task's template.</p>"
        },
        "inputFileBucket":{
          "shape":"RegistryS3BucketName",
          "documentation":"<p>The S3 bucket that contains the input file.</p>"
        },
        "inputFileKey":{
          "shape":"RegistryS3KeyName",
          "documentation":"<p>The input file key.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The role ARN that grants access to the input file bucket.</p>"
        },
        "status":{
          "shape":"Status",
          "documentation":"<p>The status of the bulk thing provisioning task.</p>"
        },
        "message":{
          "shape":"ErrorMessage",
          "documentation":"<p>The message.</p>"
        },
        "successCount":{
          "shape":"Count",
          "documentation":"<p>The number of things successfully provisioned.</p>"
        },
        "failureCount":{
          "shape":"Count",
          "documentation":"<p>The number of things that failed to be provisioned.</p>"
        },
        "percentageProgress":{
          "shape":"Percentage",
          "documentation":"<p>The progress of the bulk provisioning task expressed as a percentage.</p>"
        }
      }
    },
    "DescribeThingRequest":{
      "type":"structure",
      "required":["thingName"],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing.</p>",
          "location":"uri",
          "locationName":"thingName"
        }
      },
      "documentation":"<p>The input for the DescribeThing operation.</p>"
    },
    "DescribeThingResponse":{
      "type":"structure",
      "members":{
        "defaultClientId":{
          "shape":"ClientId",
          "documentation":"<p>The default client ID.</p>"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing.</p>"
        },
        "thingId":{
          "shape":"ThingId",
          "documentation":"<p>The ID of the thing to describe.</p>"
        },
        "thingArn":{
          "shape":"ThingArn",
          "documentation":"<p>The ARN of the thing to describe.</p>"
        },
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The thing type name.</p>"
        },
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>The thing attributes.</p>"
        },
        "version":{
          "shape":"Version",
          "documentation":"<p>The current version of the thing record in the registry.</p> <note> <p>To avoid unintentional changes to the information in the registry, you can pass the version information in the <code>expectedVersion</code> parameter of the <code>UpdateThing</code> and <code>DeleteThing</code> calls.</p> </note>"
        }
      },
      "documentation":"<p>The output from the DescribeThing operation.</p>"
    },
    "DescribeThingTypeRequest":{
      "type":"structure",
      "required":["thingTypeName"],
      "members":{
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type.</p>",
          "location":"uri",
          "locationName":"thingTypeName"
        }
      },
      "documentation":"<p>The input for the DescribeThingType operation.</p>"
    },
    "DescribeThingTypeResponse":{
      "type":"structure",
      "members":{
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type.</p>"
        },
        "thingTypeId":{
          "shape":"ThingTypeId",
          "documentation":"<p>The thing type ID.</p>"
        },
        "thingTypeArn":{
          "shape":"ThingTypeArn",
          "documentation":"<p>The thing type ARN.</p>"
        },
        "thingTypeProperties":{
          "shape":"ThingTypeProperties",
          "documentation":"<p>The ThingTypeProperties contains information about the thing type including description, and a list of searchable thing attribute names.</p>"
        },
        "thingTypeMetadata":{
          "shape":"ThingTypeMetadata",
          "documentation":"<p>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.</p>"
        }
      },
      "documentation":"<p>The output for the DescribeThingType operation.</p>"
    },
    "Description":{"type":"string"},
    "Destination":{
      "type":"structure",
      "members":{
        "s3Destination":{
          "shape":"S3Destination",
          "documentation":"<p>Describes the location in S3 of the updated firmware.</p>"
        }
      },
      "documentation":"<p>Describes the location of the updated firmware.</p>"
    },
    "DetachPolicyRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "target"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy to detach.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "target":{
          "shape":"PolicyTarget",
          "documentation":"<p>The target from which the policy will be detached.</p>"
        }
      }
    },
    "DetachPrincipalPolicyRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "principal"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the policy to detach.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "principal":{
          "shape":"Principal",
          "documentation":"<p>The principal.</p> <p>If the principal is a certificate, specify the certificate ARN. If the principal is an Amazon Cognito identity, specify the identity ID.</p>",
          "location":"header",
          "locationName":"x-amzn-iot-principal"
        }
      },
      "documentation":"<p>The input for the DetachPrincipalPolicy operation.</p>"
    },
    "DetachSecurityProfileRequest":{
      "type":"structure",
      "required":[
        "securityProfileName",
        "securityProfileTargetArn"
      ],
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The security profile that is detached.</p>",
          "location":"uri",
          "locationName":"securityProfileName"
        },
        "securityProfileTargetArn":{
          "shape":"SecurityProfileTargetArn",
          "documentation":"<p>The ARN of the thing group from which the security profile is detached.</p>",
          "location":"querystring",
          "locationName":"securityProfileTargetArn"
        }
      }
    },
    "DetachSecurityProfileResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DetachThingPrincipalRequest":{
      "type":"structure",
      "required":[
        "thingName",
        "principal"
      ],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "principal":{
          "shape":"Principal",
          "documentation":"<p>If the principal is a certificate, this value must be ARN of the certificate. If the principal is an Amazon Cognito identity, this value must be the ID of the Amazon Cognito identity.</p>",
          "location":"header",
          "locationName":"x-amzn-principal"
        }
      },
      "documentation":"<p>The input for the DetachThingPrincipal operation.</p>"
    },
    "DetachThingPrincipalResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output from the DetachThingPrincipal operation.</p>"
    },
    "DetailsKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9:_-]+"
    },
    "DetailsMap":{
      "type":"map",
      "key":{"shape":"DetailsKey"},
      "value":{"shape":"DetailsValue"}
    },
    "DetailsValue":{
      "type":"string",
      "max":1024,
      "min":1,
      "pattern":"[^\\p{C}]*+"
    },
    "DisableAllLogs":{"type":"boolean"},
    "DisableTopicRuleRequest":{
      "type":"structure",
      "required":["ruleName"],
      "members":{
        "ruleName":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule to disable.</p>",
          "location":"uri",
          "locationName":"ruleName"
        }
      },
      "documentation":"<p>The input for the DisableTopicRuleRequest operation.</p>"
    },
    "DurationSeconds":{"type":"integer"},
    "DynamoDBAction":{
      "type":"structure",
      "required":[
        "tableName",
        "roleArn",
        "hashKeyField",
        "hashKeyValue"
      ],
      "members":{
        "tableName":{
          "shape":"TableName",
          "documentation":"<p>The name of the DynamoDB table.</p>"
        },
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access to the DynamoDB table.</p>"
        },
        "operation":{
          "shape":"DynamoOperation",
          "documentation":"<p>The type of operation to be performed. This follows the substitution template, so it can be <code>${operation}</code>, but the substitution must result in one of the following: <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>.</p>"
        },
        "hashKeyField":{
          "shape":"HashKeyField",
          "documentation":"<p>The hash key name.</p>"
        },
        "hashKeyValue":{
          "shape":"HashKeyValue",
          "documentation":"<p>The hash key value.</p>"
        },
        "hashKeyType":{
          "shape":"DynamoKeyType",
          "documentation":"<p>The hash key type. Valid values are \"STRING\" or \"NUMBER\"</p>"
        },
        "rangeKeyField":{
          "shape":"RangeKeyField",
          "documentation":"<p>The range key name.</p>"
        },
        "rangeKeyValue":{
          "shape":"RangeKeyValue",
          "documentation":"<p>The range key value.</p>"
        },
        "rangeKeyType":{
          "shape":"DynamoKeyType",
          "documentation":"<p>The range key type. Valid values are \"STRING\" or \"NUMBER\"</p>"
        },
        "payloadField":{
          "shape":"PayloadField",
          "documentation":"<p>The action payload. This name can be customized.</p>"
        }
      },
      "documentation":"<p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>\"hashKeyValue\": \"${topic(3)}\"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>\"rangeKeyValue\": \"${timestamp()}\"</code> </p>"
    },
    "DynamoDBv2Action":{
      "type":"structure",
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access to the DynamoDB table.</p>"
        },
        "putItem":{
          "shape":"PutItemInput",
          "documentation":"<p>Specifies the DynamoDB table to which the message data will be written. For example:</p> <p> <code>{ \"dynamoDBv2\": { \"roleArn\": \"aws:iam:12341251:my-role\" \"putItem\": { \"tableName\": \"my-table\" } } }</code> </p> <p>Each attribute in the message payload will be written to a separate column in the DynamoDB database.</p>"
        }
      },
      "documentation":"<p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p>"
    },
    "DynamoKeyType":{
      "type":"string",
      "enum":[
        "STRING",
        "NUMBER"
      ]
    },
    "DynamoOperation":{"type":"string"},
    "EffectivePolicies":{
      "type":"list",
      "member":{"shape":"EffectivePolicy"}
    },
    "EffectivePolicy":{
      "type":"structure",
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>"
        },
        "policyArn":{
          "shape":"PolicyArn",
          "documentation":"<p>The policy ARN.</p>"
        },
        "policyDocument":{
          "shape":"PolicyDocument",
          "documentation":"<p>The IAM policy document.</p>"
        }
      },
      "documentation":"<p>The policy that has the effect on the authorization results.</p>"
    },
    "ElasticsearchAction":{
      "type":"structure",
      "required":[
        "roleArn",
        "endpoint",
        "index",
        "type",
        "id"
      ],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The IAM role ARN that has access to Elasticsearch.</p>"
        },
        "endpoint":{
          "shape":"ElasticsearchEndpoint",
          "documentation":"<p>The endpoint of your Elasticsearch domain.</p>"
        },
        "index":{
          "shape":"ElasticsearchIndex",
          "documentation":"<p>The Elasticsearch index where you want to store your data.</p>"
        },
        "type":{
          "shape":"ElasticsearchType",
          "documentation":"<p>The type of document you are storing.</p>"
        },
        "id":{
          "shape":"ElasticsearchId",
          "documentation":"<p>The unique identifier for the document you are storing.</p>"
        }
      },
      "documentation":"<p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p>"
    },
    "ElasticsearchEndpoint":{
      "type":"string",
      "pattern":"https?://.*"
    },
    "ElasticsearchId":{"type":"string"},
    "ElasticsearchIndex":{"type":"string"},
    "ElasticsearchType":{"type":"string"},
    "EnableTopicRuleRequest":{
      "type":"structure",
      "required":["ruleName"],
      "members":{
        "ruleName":{
          "shape":"RuleName",
          "documentation":"<p>The name of the topic rule to enable.</p>",
          "location":"uri",
          "locationName":"ruleName"
        }
      },
      "documentation":"<p>The input for the EnableTopicRuleRequest operation.</p>"
    },
    "Enabled":{"type":"boolean"},
    "EndpointAddress":{"type":"string"},
    "EndpointType":{"type":"string"},
    "ErrorCode":{"type":"string"},
    "ErrorInfo":{
      "type":"structure",
      "members":{
        "code":{
          "shape":"Code",
          "documentation":"<p>The error code.</p>"
        },
        "message":{
          "shape":"OTAUpdateErrorMessage",
          "documentation":"<p>The error message.</p>"
        }
      },
      "documentation":"<p>Error information.</p>"
    },
    "ErrorMessage":{
      "type":"string",
      "max":2048
    },
    "EventConfigurations":{
      "type":"map",
      "key":{"shape":"EventType"},
      "value":{"shape":"Configuration"}
    },
    "EventType":{
      "type":"string",
      "enum":[
        "THING",
        "THING_GROUP",
        "THING_TYPE",
        "THING_GROUP_MEMBERSHIP",
        "THING_GROUP_HIERARCHY",
        "THING_TYPE_ASSOCIATION",
        "JOB",
        "JOB_EXECUTION",
        "POLICY",
        "CERTIFICATE",
        "CA_CERTIFICATE"
      ]
    },
    "ExecutionNamePrefix":{"type":"string"},
    "ExecutionNumber":{"type":"long"},
    "ExpectedVersion":{"type":"long"},
    "ExpiresInSec":{
      "type":"long",
      "max":3600,
      "min":60
    },
    "ExplicitDeny":{
      "type":"structure",
      "members":{
        "policies":{
          "shape":"Policies",
          "documentation":"<p>The policies that denied the authorization.</p>"
        }
      },
      "documentation":"<p>Information that explicitly denies authorization.</p>"
    },
    "FailedChecksCount":{"type":"integer"},
    "FailedThings":{"type":"integer"},
    "FileId":{
      "type":"integer",
      "max":255,
      "min":0
    },
    "FileLocation":{
      "type":"structure",
      "members":{
        "stream":{
          "shape":"Stream",
          "documentation":"<p>The stream that contains the OTA update.</p>"
        },
        "s3Location":{
          "shape":"S3Location",
          "documentation":"<p>The location of the updated firmware in S3.</p>"
        }
      },
      "documentation":"<p>The location of the OTA update.</p>"
    },
    "FileName":{"type":"string"},
    "FirehoseAction":{
      "type":"structure",
      "required":[
        "roleArn",
        "deliveryStreamName"
      ],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The IAM role that grants access to the Amazon Kinesis Firehose stream.</p>"
        },
        "deliveryStreamName":{
          "shape":"DeliveryStreamName",
          "documentation":"<p>The delivery stream name.</p>"
        },
        "separator":{
          "shape":"FirehoseSeparator",
          "documentation":"<p>A character separator that will be used to separate records written to the Firehose stream. Valid values are: '\\n' (newline), '\\t' (tab), '\\r\\n' (Windows newline), ',' (comma).</p>"
        }
      },
      "documentation":"<p>Describes an action that writes data to an Amazon Kinesis Firehose stream.</p>"
    },
    "FirehoseSeparator":{
      "type":"string",
      "pattern":"([\\n\\t])|(\\r\\n)|(,)"
    },
    "Flag":{"type":"boolean"},
    "ForceDelete":{"type":"boolean"},
    "ForceDeleteAWSJob":{"type":"boolean"},
    "ForceFlag":{"type":"boolean"},
    "Forced":{"type":"boolean"},
    "FunctionArn":{"type":"string"},
    "GEMaxResults":{
      "type":"integer",
      "max":10000,
      "min":1
    },
    "GenerationId":{"type":"string"},
    "GetEffectivePoliciesRequest":{
      "type":"structure",
      "members":{
        "principal":{
          "shape":"Principal",
          "documentation":"<p>The principal.</p>"
        },
        "cognitoIdentityPoolId":{
          "shape":"CognitoIdentityPoolId",
          "documentation":"<p>The Cognito identity pool ID.</p>"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The thing name.</p>",
          "location":"querystring",
          "locationName":"thingName"
        }
      }
    },
    "GetEffectivePoliciesResponse":{
      "type":"structure",
      "members":{
        "effectivePolicies":{
          "shape":"EffectivePolicies",
          "documentation":"<p>The effective policies.</p>"
        }
      }
    },
    "GetIndexingConfigurationRequest":{
      "type":"structure",
      "members":{
      }
    },
    "GetIndexingConfigurationResponse":{
      "type":"structure",
      "members":{
        "thingIndexingConfiguration":{
          "shape":"ThingIndexingConfiguration",
          "documentation":"<p>Thing indexing configuration.</p>"
        },
        "thingGroupIndexingConfiguration":{
          "shape":"ThingGroupIndexingConfiguration",
          "documentation":"<p>The index configuration.</p>"
        }
      }
    },
    "GetJobDocumentRequest":{
      "type":"structure",
      "required":["jobId"],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>",
          "location":"uri",
          "locationName":"jobId"
        }
      }
    },
    "GetJobDocumentResponse":{
      "type":"structure",
      "members":{
        "document":{
          "shape":"JobDocument",
          "documentation":"<p>The job document content.</p>"
        }
      }
    },
    "GetLoggingOptionsRequest":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The input for the GetLoggingOptions operation.</p>"
    },
    "GetLoggingOptionsResponse":{
      "type":"structure",
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access.</p>"
        },
        "logLevel":{
          "shape":"LogLevel",
          "documentation":"<p>The logging level.</p>"
        }
      },
      "documentation":"<p>The output from the GetLoggingOptions operation.</p>"
    },
    "GetOTAUpdateRequest":{
      "type":"structure",
      "required":["otaUpdateId"],
      "members":{
        "otaUpdateId":{
          "shape":"OTAUpdateId",
          "documentation":"<p>The OTA update ID.</p>",
          "location":"uri",
          "locationName":"otaUpdateId"
        }
      }
    },
    "GetOTAUpdateResponse":{
      "type":"structure",
      "members":{
        "otaUpdateInfo":{
          "shape":"OTAUpdateInfo",
          "documentation":"<p>The OTA update info.</p>"
        }
      }
    },
    "GetPolicyRequest":{
      "type":"structure",
      "required":["policyName"],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the policy.</p>",
          "location":"uri",
          "locationName":"policyName"
        }
      },
      "documentation":"<p>The input for the GetPolicy operation.</p>"
    },
    "GetPolicyResponse":{
      "type":"structure",
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>"
        },
        "policyArn":{
          "shape":"PolicyArn",
          "documentation":"<p>The policy ARN.</p>"
        },
        "policyDocument":{
          "shape":"PolicyDocument",
          "documentation":"<p>The JSON document that describes the policy.</p>"
        },
        "defaultVersionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The default policy version ID.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The date the policy was created.</p>"
        },
        "lastModifiedDate":{
          "shape":"DateType",
          "documentation":"<p>The date the policy was last modified.</p>"
        },
        "generationId":{
          "shape":"GenerationId",
          "documentation":"<p>The generation ID of the policy.</p>"
        }
      },
      "documentation":"<p>The output from the GetPolicy operation.</p>"
    },
    "GetPolicyVersionRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "policyVersionId"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the policy.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "policyVersionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The policy version ID.</p>",
          "location":"uri",
          "locationName":"policyVersionId"
        }
      },
      "documentation":"<p>The input for the GetPolicyVersion operation.</p>"
    },
    "GetPolicyVersionResponse":{
      "type":"structure",
      "members":{
        "policyArn":{
          "shape":"PolicyArn",
          "documentation":"<p>The policy ARN.</p>"
        },
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>"
        },
        "policyDocument":{
          "shape":"PolicyDocument",
          "documentation":"<p>The JSON document that describes the policy.</p>"
        },
        "policyVersionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The policy version ID.</p>"
        },
        "isDefaultVersion":{
          "shape":"IsDefaultVersion",
          "documentation":"<p>Specifies whether the policy version is the default.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The date the policy version was created.</p>"
        },
        "lastModifiedDate":{
          "shape":"DateType",
          "documentation":"<p>The date the policy version was last modified.</p>"
        },
        "generationId":{
          "shape":"GenerationId",
          "documentation":"<p>The generation ID of the policy version.</p>"
        }
      },
      "documentation":"<p>The output from the GetPolicyVersion operation.</p>"
    },
    "GetRegistrationCodeRequest":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The input to the GetRegistrationCode operation.</p>"
    },
    "GetRegistrationCodeResponse":{
      "type":"structure",
      "members":{
        "registrationCode":{
          "shape":"RegistrationCode",
          "documentation":"<p>The CA certificate registration code.</p>"
        }
      },
      "documentation":"<p>The output from the GetRegistrationCode operation.</p>"
    },
    "GetTopicRuleRequest":{
      "type":"structure",
      "required":["ruleName"],
      "members":{
        "ruleName":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>",
          "location":"uri",
          "locationName":"ruleName"
        }
      },
      "documentation":"<p>The input for the GetTopicRule operation.</p>"
    },
    "GetTopicRuleResponse":{
      "type":"structure",
      "members":{
        "ruleArn":{
          "shape":"RuleArn",
          "documentation":"<p>The rule ARN.</p>"
        },
        "rule":{
          "shape":"TopicRule",
          "documentation":"<p>The rule.</p>"
        }
      },
      "documentation":"<p>The output from the GetTopicRule operation.</p>"
    },
    "GetV2LoggingOptionsRequest":{
      "type":"structure",
      "members":{
      }
    },
    "GetV2LoggingOptionsResponse":{
      "type":"structure",
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The IAM role ARN AWS IoT uses to write to your CloudWatch logs.</p>"
        },
        "defaultLogLevel":{
          "shape":"LogLevel",
          "documentation":"<p>The default log level.</p>"
        },
        "disableAllLogs":{
          "shape":"DisableAllLogs",
          "documentation":"<p>Disables all logs.</p>"
        }
      }
    },
    "GroupNameAndArn":{
      "type":"structure",
      "members":{
        "groupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The group name.</p>"
        },
        "groupArn":{
          "shape":"ThingGroupArn",
          "documentation":"<p>The group ARN.</p>"
        }
      },
      "documentation":"<p>The name and ARN of a group.</p>"
    },
    "HashAlgorithm":{"type":"string"},
    "HashKeyField":{"type":"string"},
    "HashKeyValue":{"type":"string"},
    "ImplicitDeny":{
      "type":"structure",
      "members":{
        "policies":{
          "shape":"Policies",
          "documentation":"<p>Policies that don't contain a matching allow or deny statement for the specified action on the specified resource. </p>"
        }
      },
      "documentation":"<p>Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.</p>"
    },
    "InProgressChecksCount":{"type":"integer"},
    "InProgressThings":{"type":"integer"},
    "IndexName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9:_-]+"
    },
    "IndexNamesList":{
      "type":"list",
      "member":{"shape":"IndexName"}
    },
    "IndexNotReadyException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The index is not ready.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "IndexSchema":{"type":"string"},
    "IndexStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "BUILDING",
        "REBUILDING"
      ]
    },
    "InlineDocument":{"type":"string"},
    "InternalException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>An unexpected error has occurred.</p>",
      "error":{"httpStatusCode":500},
      "exception":true,
      "fault":true
    },
    "InternalFailureException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>An unexpected error has occurred.</p>",
      "error":{"httpStatusCode":500},
      "exception":true,
      "fault":true
    },
    "InvalidQueryException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The query is invalid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "InvalidRequestException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The request is not valid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "InvalidResponseException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The response is invalid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "InvalidStateTransitionException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>An attempt was made to change to an invalid state, for example by deleting a job or a job execution which is \"IN_PROGRESS\" without setting the <code>force</code> parameter.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "IotAnalyticsAction":{
      "type":"structure",
      "members":{
        "channelArn":{
          "shape":"AwsArn",
          "documentation":"<p>(deprecated) The ARN of the IoT Analytics channel to which message data will be sent.</p>"
        },
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the IoT Analytics channel to which message data will be sent.</p>"
        },
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the role which has a policy that grants IoT Analytics permission to send message data via IoT Analytics (iotanalytics:BatchPutMessage).</p>"
        }
      },
      "documentation":"<p>Sends messge data to an AWS IoT Analytics channel.</p>"
    },
    "IsAuthenticated":{"type":"boolean"},
    "IsDefaultVersion":{"type":"boolean"},
    "IsDisabled":{"type":"boolean"},
    "Job":{
      "type":"structure",
      "members":{
        "jobArn":{
          "shape":"JobArn",
          "documentation":"<p>An ARN identifying the job with format \"arn:aws:iot:region:account:job/jobId\".</p>"
        },
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>"
        },
        "targetSelection":{
          "shape":"TargetSelection",
          "documentation":"<p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a device when the thing representing the device is added to a target group, even after the job was completed by all things originally in the group. </p>"
        },
        "status":{
          "shape":"JobStatus",
          "documentation":"<p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>, or <code>COMPLETED</code>. </p>"
        },
        "forceCanceled":{
          "shape":"Forced",
          "documentation":"<p>Will be <code>true</code> if the job was canceled with the optional <code>force</code> parameter set to <code>true</code>.</p>"
        },
        "comment":{
          "shape":"Comment",
          "documentation":"<p>If the job was updated, describes the reason for the update.</p>"
        },
        "targets":{
          "shape":"JobTargets",
          "documentation":"<p>A list of IoT things and thing groups to which the job should be sent.</p>"
        },
        "description":{
          "shape":"JobDescription",
          "documentation":"<p>A short text description of the job.</p>"
        },
        "presignedUrlConfig":{
          "shape":"PresignedUrlConfig",
          "documentation":"<p>Configuration for pre-signed S3 URLs.</p>"
        },
        "jobExecutionsRolloutConfig":{
          "shape":"JobExecutionsRolloutConfig",
          "documentation":"<p>Allows you to create a staged rollout of a job.</p>"
        },
        "createdAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job was created.</p>"
        },
        "lastUpdatedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job was last updated.</p>"
        },
        "completedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job was completed.</p>"
        },
        "jobProcessDetails":{
          "shape":"JobProcessDetails",
          "documentation":"<p>Details about the job process.</p>"
        }
      },
      "documentation":"<p>The <code>Job</code> object contains details about a job.</p>"
    },
    "JobArn":{"type":"string"},
    "JobDescription":{
      "type":"string",
      "max":2028,
      "pattern":"[^\\p{C}]+"
    },
    "JobDocument":{
      "type":"string",
      "max":32768
    },
    "JobDocumentSource":{
      "type":"string",
      "max":1350,
      "min":1
    },
    "JobExecution":{
      "type":"structure",
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to the job when it was created.</p>"
        },
        "status":{
          "shape":"JobExecutionStatus",
          "documentation":"<p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCESS, CANCELED, or REJECTED).</p>"
        },
        "forceCanceled":{
          "shape":"Forced",
          "documentation":"<p>Will be <code>true</code> if the job execution was canceled with the optional <code>force</code> parameter set to <code>true</code>.</p>"
        },
        "statusDetails":{
          "shape":"JobExecutionStatusDetails",
          "documentation":"<p>A collection of name/value pairs that describe the status of the job execution.</p>"
        },
        "thingArn":{
          "shape":"ThingArn",
          "documentation":"<p>The ARN of the thing on which the job execution is running.</p>"
        },
        "queuedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job execution was queued.</p>"
        },
        "startedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job execution started.</p>"
        },
        "lastUpdatedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job execution was last updated.</p>"
        },
        "executionNumber":{
          "shape":"ExecutionNumber",
          "documentation":"<p>A string (consisting of the digits \"0\" through \"9\") which identifies this particular job execution on this particular device. It can be used in commands which return or update job execution information. </p>"
        },
        "versionNumber":{
          "shape":"VersionNumber",
          "documentation":"<p>The version of the job execution. Job execution versions are incremented each time they are updated by a device.</p>"
        }
      },
      "documentation":"<p>The job execution object represents the execution of a job on a particular device.</p>"
    },
    "JobExecutionStatus":{
      "type":"string",
      "enum":[
        "QUEUED",
        "IN_PROGRESS",
        "SUCCEEDED",
        "FAILED",
        "REJECTED",
        "REMOVED",
        "CANCELED"
      ]
    },
    "JobExecutionStatusDetails":{
      "type":"structure",
      "members":{
        "detailsMap":{
          "shape":"DetailsMap",
          "documentation":"<p>The job execution status.</p>"
        }
      },
      "documentation":"<p>Details of the job execution status.</p>"
    },
    "JobExecutionSummary":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"JobExecutionStatus",
          "documentation":"<p>The status of the job execution.</p>"
        },
        "queuedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job execution was queued.</p>"
        },
        "startedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job execution started.</p>"
        },
        "lastUpdatedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job execution was last updated.</p>"
        },
        "executionNumber":{
          "shape":"ExecutionNumber",
          "documentation":"<p>A string (consisting of the digits \"0\" through \"9\") which identifies this particular job execution on this particular device. It can be used later in commands which return or update job execution information.</p>"
        }
      },
      "documentation":"<p>The job execution summary.</p>"
    },
    "JobExecutionSummaryForJob":{
      "type":"structure",
      "members":{
        "thingArn":{
          "shape":"ThingArn",
          "documentation":"<p>The ARN of the thing on which the job execution is running.</p>"
        },
        "jobExecutionSummary":{
          "shape":"JobExecutionSummary",
          "documentation":"<p>Contains a subset of information about a job execution.</p>"
        }
      },
      "documentation":"<p>Contains a summary of information about job executions for a specific job.</p>"
    },
    "JobExecutionSummaryForJobList":{
      "type":"list",
      "member":{"shape":"JobExecutionSummaryForJob"}
    },
    "JobExecutionSummaryForThing":{
      "type":"structure",
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>"
        },
        "jobExecutionSummary":{
          "shape":"JobExecutionSummary",
          "documentation":"<p>Contains a subset of information about a job execution.</p>"
        }
      },
      "documentation":"<p>The job execution summary for a thing.</p>"
    },
    "JobExecutionSummaryForThingList":{
      "type":"list",
      "member":{"shape":"JobExecutionSummaryForThing"}
    },
    "JobExecutionsRolloutConfig":{
      "type":"structure",
      "members":{
        "maximumPerMinute":{
          "shape":"MaxJobExecutionsPerMin",
          "documentation":"<p>The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.</p>"
        }
      },
      "documentation":"<p>Allows you to create a staged rollout of a job.</p>"
    },
    "JobId":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"[a-zA-Z0-9_-]+"
    },
    "JobProcessDetails":{
      "type":"structure",
      "members":{
        "processingTargets":{
          "shape":"ProcessingTargetNameList",
          "documentation":"<p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>"
        },
        "numberOfCanceledThings":{
          "shape":"CanceledThings",
          "documentation":"<p>The number of things that cancelled the job.</p>"
        },
        "numberOfSucceededThings":{
          "shape":"SucceededThings",
          "documentation":"<p>The number of things which successfully completed the job.</p>"
        },
        "numberOfFailedThings":{
          "shape":"FailedThings",
          "documentation":"<p>The number of things that failed executing the job.</p>"
        },
        "numberOfRejectedThings":{
          "shape":"RejectedThings",
          "documentation":"<p>The number of things that rejected the job.</p>"
        },
        "numberOfQueuedThings":{
          "shape":"QueuedThings",
          "documentation":"<p>The number of things that are awaiting execution of the job.</p>"
        },
        "numberOfInProgressThings":{
          "shape":"InProgressThings",
          "documentation":"<p>The number of things currently executing the job.</p>"
        },
        "numberOfRemovedThings":{
          "shape":"RemovedThings",
          "documentation":"<p>The number of things that are no longer scheduled to execute the job because they have been deleted or have been removed from the group that was a target of the job.</p>"
        }
      },
      "documentation":"<p>The job process details.</p>"
    },
    "JobStatus":{
      "type":"string",
      "enum":[
        "IN_PROGRESS",
        "CANCELED",
        "COMPLETED",
        "DELETION_IN_PROGRESS"
      ]
    },
    "JobSummary":{
      "type":"structure",
      "members":{
        "jobArn":{
          "shape":"JobArn",
          "documentation":"<p>The job ARN.</p>"
        },
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>"
        },
        "thingGroupId":{
          "shape":"ThingGroupId",
          "documentation":"<p>The ID of the thing group.</p>"
        },
        "targetSelection":{
          "shape":"TargetSelection",
          "documentation":"<p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.</p>"
        },
        "status":{
          "shape":"JobStatus",
          "documentation":"<p>The job summary status.</p>"
        },
        "createdAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job was created.</p>"
        },
        "lastUpdatedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job was last updated.</p>"
        },
        "completedAt":{
          "shape":"DateType",
          "documentation":"<p>The time, in milliseconds since the epoch, when the job completed.</p>"
        }
      },
      "documentation":"<p>The job summary.</p>"
    },
    "JobSummaryList":{
      "type":"list",
      "member":{"shape":"JobSummary"}
    },
    "JobTargets":{
      "type":"list",
      "member":{"shape":"TargetArn"},
      "min":1
    },
    "JsonDocument":{"type":"string"},
    "Key":{"type":"string"},
    "KeyName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9:_-]+"
    },
    "KeyPair":{
      "type":"structure",
      "members":{
        "PublicKey":{
          "shape":"PublicKey",
          "documentation":"<p>The public key.</p>"
        },
        "PrivateKey":{
          "shape":"PrivateKey",
          "documentation":"<p>The private key.</p>"
        }
      },
      "documentation":"<p>Describes a key pair.</p>"
    },
    "KeyValue":{
      "type":"string",
      "max":5120
    },
    "KinesisAction":{
      "type":"structure",
      "required":[
        "roleArn",
        "streamName"
      ],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access to the Amazon Kinesis stream.</p>"
        },
        "streamName":{
          "shape":"StreamName",
          "documentation":"<p>The name of the Amazon Kinesis stream.</p>"
        },
        "partitionKey":{
          "shape":"PartitionKey",
          "documentation":"<p>The partition key.</p>"
        }
      },
      "documentation":"<p>Describes an action to write data to an Amazon Kinesis stream.</p>"
    },
    "LambdaAction":{
      "type":"structure",
      "required":["functionArn"],
      "members":{
        "functionArn":{
          "shape":"FunctionArn",
          "documentation":"<p>The ARN of the Lambda function.</p>"
        }
      },
      "documentation":"<p>Describes an action to invoke a Lambda function.</p>"
    },
    "LaserMaxResults":{
      "type":"integer",
      "max":250,
      "min":1
    },
    "LastModifiedDate":{"type":"timestamp"},
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>A limit has been exceeded.</p>",
      "error":{"httpStatusCode":410},
      "exception":true
    },
    "ListActiveViolationsRequest":{
      "type":"structure",
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing whose active violations are listed.</p>",
          "location":"querystring",
          "locationName":"thingName"
        },
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name of the Device Defender security profile for which violations are listed.</p>",
          "location":"querystring",
          "locationName":"securityProfileName"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListActiveViolationsResponse":{
      "type":"structure",
      "members":{
        "activeViolations":{
          "shape":"ActiveViolations",
          "documentation":"<p>The list of active violations.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>"
        }
      }
    },
    "ListAttachedPoliciesRequest":{
      "type":"structure",
      "required":["target"],
      "members":{
        "target":{
          "shape":"PolicyTarget",
          "documentation":"<p>The group for which the policies will be listed.</p>",
          "location":"uri",
          "locationName":"target"
        },
        "recursive":{
          "shape":"Recursive",
          "documentation":"<p>When true, recursively list attached policies.</p>",
          "location":"querystring",
          "locationName":"recursive"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to be returned per request.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        }
      }
    },
    "ListAttachedPoliciesResponse":{
      "type":"structure",
      "members":{
        "policies":{
          "shape":"Policies",
          "documentation":"<p>The policies.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>The token to retrieve the next set of results, or ``null`` if there are no more results.</p>"
        }
      }
    },
    "ListAuditFindingsRequest":{
      "type":"structure",
      "members":{
        "taskId":{
          "shape":"AuditTaskId",
          "documentation":"<p>A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.</p>"
        },
        "checkName":{
          "shape":"AuditCheckName",
          "documentation":"<p>A filter to limit results to the findings for the specified audit check.</p>"
        },
        "resourceIdentifier":{
          "shape":"ResourceIdentifier",
          "documentation":"<p>Information identifying the non-compliant resource.</p>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time. The default is 25.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>"
        },
        "startTime":{
          "shape":"Timestamp",
          "documentation":"<p>A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.</p>"
        },
        "endTime":{
          "shape":"Timestamp",
          "documentation":"<p>A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both.</p>"
        }
      }
    },
    "ListAuditFindingsResponse":{
      "type":"structure",
      "members":{
        "findings":{
          "shape":"AuditFindings",
          "documentation":"<p>The findings (results) of the audit.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>"
        }
      }
    },
    "ListAuditTasksRequest":{
      "type":"structure",
      "required":[
        "startTime",
        "endTime"
      ],
      "members":{
        "startTime":{
          "shape":"Timestamp",
          "documentation":"<p>The beginning of the time period. Note that audit information is retained for a limited time (180 days). Requesting a start time prior to what is retained results in an \"InvalidRequestException\".</p>",
          "location":"querystring",
          "locationName":"startTime"
        },
        "endTime":{
          "shape":"Timestamp",
          "documentation":"<p>The end of the time period.</p>",
          "location":"querystring",
          "locationName":"endTime"
        },
        "taskType":{
          "shape":"AuditTaskType",
          "documentation":"<p>A filter to limit the output to the specified type of audit: can be one of \"ON_DEMAND_AUDIT_TASK\" or \"SCHEDULED__AUDIT_TASK\".</p>",
          "location":"querystring",
          "locationName":"taskType"
        },
        "taskStatus":{
          "shape":"AuditTaskStatus",
          "documentation":"<p>A filter to limit the output to audits with the specified completion status: can be one of \"IN_PROGRESS\", \"COMPLETED\", \"FAILED\" or \"CANCELED\".</p>",
          "location":"querystring",
          "locationName":"taskStatus"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time. The default is 25.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListAuditTasksResponse":{
      "type":"structure",
      "members":{
        "tasks":{
          "shape":"AuditTaskMetadataList",
          "documentation":"<p>The audits that were performed during the specified time period.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>"
        }
      }
    },
    "ListAuthorizersRequest":{
      "type":"structure",
      "members":{
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>A marker used to get the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Return the list of authorizers in ascending alphabetical order.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        },
        "status":{
          "shape":"AuthorizerStatus",
          "documentation":"<p>The status of the list authorizers request.</p>",
          "location":"querystring",
          "locationName":"status"
        }
      }
    },
    "ListAuthorizersResponse":{
      "type":"structure",
      "members":{
        "authorizers":{
          "shape":"Authorizers",
          "documentation":"<p>The authorizers.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>A marker used to get the next set of results.</p>"
        }
      }
    },
    "ListCACertificatesRequest":{
      "type":"structure",
      "members":{
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The result page size.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Determines the order of the results.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      },
      "documentation":"<p>Input for the ListCACertificates operation.</p>"
    },
    "ListCACertificatesResponse":{
      "type":"structure",
      "members":{
        "certificates":{
          "shape":"CACertificates",
          "documentation":"<p>The CA certificates registered in your AWS account.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>The current position within the list of CA certificates.</p>"
        }
      },
      "documentation":"<p>The output from the ListCACertificates operation.</p>"
    },
    "ListCertificatesByCARequest":{
      "type":"structure",
      "required":["caCertificateId"],
      "members":{
        "caCertificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the CA certificate. This operation will list all registered device certificate that were signed by this CA certificate.</p>",
          "location":"uri",
          "locationName":"caCertificateId"
        },
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The result page size.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      },
      "documentation":"<p>The input to the ListCertificatesByCA operation.</p>"
    },
    "ListCertificatesByCAResponse":{
      "type":"structure",
      "members":{
        "certificates":{
          "shape":"Certificates",
          "documentation":"<p>The device certificates signed by the specified CA certificate.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results, or null if there are no additional results.</p>"
        }
      },
      "documentation":"<p>The output of the ListCertificatesByCA operation.</p>"
    },
    "ListCertificatesRequest":{
      "type":"structure",
      "members":{
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The result page size.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      },
      "documentation":"<p>The input for the ListCertificates operation.</p>"
    },
    "ListCertificatesResponse":{
      "type":"structure",
      "members":{
        "certificates":{
          "shape":"Certificates",
          "documentation":"<p>The descriptions of the certificates.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results, or null if there are no additional results.</p>"
        }
      },
      "documentation":"<p>The output of the ListCertificates operation.</p>"
    },
    "ListIndicesRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"QueryMaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListIndicesResponse":{
      "type":"structure",
      "members":{
        "indexNames":{
          "shape":"IndexNamesList",
          "documentation":"<p>The index names.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListJobExecutionsForJobRequest":{
      "type":"structure",
      "required":["jobId"],
      "members":{
        "jobId":{
          "shape":"JobId",
          "documentation":"<p>The unique identifier you assigned to this job when it was created.</p>",
          "location":"uri",
          "locationName":"jobId"
        },
        "status":{
          "shape":"JobExecutionStatus",
          "documentation":"<p>The status of the job.</p>",
          "location":"querystring",
          "locationName":"status"
        },
        "maxResults":{
          "shape":"LaserMaxResults",
          "documentation":"<p>The maximum number of results to be returned per request.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        }
      }
    },
    "ListJobExecutionsForJobResponse":{
      "type":"structure",
      "members":{
        "executionSummaries":{
          "shape":"JobExecutionSummaryForJobList",
          "documentation":"<p>A list of job execution summaries.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListJobExecutionsForThingRequest":{
      "type":"structure",
      "required":["thingName"],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The thing name.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "status":{
          "shape":"JobExecutionStatus",
          "documentation":"<p>An optional filter that lets you search for jobs that have the specified status.</p>",
          "location":"querystring",
          "locationName":"status"
        },
        "maxResults":{
          "shape":"LaserMaxResults",
          "documentation":"<p>The maximum number of results to be returned per request.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        }
      }
    },
    "ListJobExecutionsForThingResponse":{
      "type":"structure",
      "members":{
        "executionSummaries":{
          "shape":"JobExecutionSummaryForThingList",
          "documentation":"<p>A list of job execution summaries.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListJobsRequest":{
      "type":"structure",
      "members":{
        "status":{
          "shape":"JobStatus",
          "documentation":"<p>An optional filter that lets you search for jobs that have the specified status.</p>",
          "location":"querystring",
          "locationName":"status"
        },
        "targetSelection":{
          "shape":"TargetSelection",
          "documentation":"<p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. </p>",
          "location":"querystring",
          "locationName":"targetSelection"
        },
        "maxResults":{
          "shape":"LaserMaxResults",
          "documentation":"<p>The maximum number of results to return per request.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>A filter that limits the returned jobs to those for the specified group.</p>",
          "location":"querystring",
          "locationName":"thingGroupName"
        },
        "thingGroupId":{
          "shape":"ThingGroupId",
          "documentation":"<p>A filter that limits the returned jobs to those for the specified group.</p>",
          "location":"querystring",
          "locationName":"thingGroupId"
        }
      }
    },
    "ListJobsResponse":{
      "type":"structure",
      "members":{
        "jobs":{
          "shape":"JobSummaryList",
          "documentation":"<p>A list of jobs.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListOTAUpdatesRequest":{
      "type":"structure",
      "members":{
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token used to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "otaUpdateStatus":{
          "shape":"OTAUpdateStatus",
          "documentation":"<p>The OTA update job status.</p>",
          "location":"querystring",
          "locationName":"otaUpdateStatus"
        }
      }
    },
    "ListOTAUpdatesResponse":{
      "type":"structure",
      "members":{
        "otaUpdates":{
          "shape":"OTAUpdatesSummary",
          "documentation":"<p>A list of OTA update jobs.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token to use to get the next set of results.</p>"
        }
      }
    },
    "ListOutgoingCertificatesRequest":{
      "type":"structure",
      "members":{
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The result page size.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      },
      "documentation":"<p>The input to the ListOutgoingCertificates operation.</p>"
    },
    "ListOutgoingCertificatesResponse":{
      "type":"structure",
      "members":{
        "outgoingCertificates":{
          "shape":"OutgoingCertificates",
          "documentation":"<p>The certificates that are being transferred but not yet accepted.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results.</p>"
        }
      },
      "documentation":"<p>The output from the ListOutgoingCertificates operation.</p>"
    },
    "ListPoliciesRequest":{
      "type":"structure",
      "members":{
        "marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The result page size.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Specifies the order for results. If true, the results are returned in ascending creation order.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      },
      "documentation":"<p>The input for the ListPolicies operation.</p>"
    },
    "ListPoliciesResponse":{
      "type":"structure",
      "members":{
        "policies":{
          "shape":"Policies",
          "documentation":"<p>The descriptions of the policies.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results, or null if there are no additional results.</p>"
        }
      },
      "documentation":"<p>The output from the ListPolicies operation.</p>"
    },
    "ListPolicyPrincipalsRequest":{
      "type":"structure",
      "required":["policyName"],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>",
          "location":"header",
          "locationName":"x-amzn-iot-policy"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The result page size.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Specifies the order for results. If true, the results are returned in ascending creation order.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      },
      "documentation":"<p>The input for the ListPolicyPrincipals operation.</p>"
    },
    "ListPolicyPrincipalsResponse":{
      "type":"structure",
      "members":{
        "principals":{
          "shape":"Principals",
          "documentation":"<p>The descriptions of the principals.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results, or null if there are no additional results.</p>"
        }
      },
      "documentation":"<p>The output from the ListPolicyPrincipals operation.</p>"
    },
    "ListPolicyVersionsRequest":{
      "type":"structure",
      "required":["policyName"],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>",
          "location":"uri",
          "locationName":"policyName"
        }
      },
      "documentation":"<p>The input for the ListPolicyVersions operation.</p>"
    },
    "ListPolicyVersionsResponse":{
      "type":"structure",
      "members":{
        "policyVersions":{
          "shape":"PolicyVersions",
          "documentation":"<p>The policy versions.</p>"
        }
      },
      "documentation":"<p>The output from the ListPolicyVersions operation.</p>"
    },
    "ListPrincipalPoliciesRequest":{
      "type":"structure",
      "required":["principal"],
      "members":{
        "principal":{
          "shape":"Principal",
          "documentation":"<p>The principal.</p>",
          "location":"header",
          "locationName":"x-amzn-iot-principal"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The result page size.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Specifies the order for results. If true, results are returned in ascending creation order.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      },
      "documentation":"<p>The input for the ListPrincipalPolicies operation.</p>"
    },
    "ListPrincipalPoliciesResponse":{
      "type":"structure",
      "members":{
        "policies":{
          "shape":"Policies",
          "documentation":"<p>The policies.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results, or null if there are no additional results.</p>"
        }
      },
      "documentation":"<p>The output from the ListPrincipalPolicies operation.</p>"
    },
    "ListPrincipalThingsRequest":{
      "type":"structure",
      "required":["principal"],
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"RegistryMaxResults",
          "documentation":"<p>The maximum number of results to return in this operation.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "principal":{
          "shape":"Principal",
          "documentation":"<p>The principal.</p>",
          "location":"header",
          "locationName":"x-amzn-principal"
        }
      },
      "documentation":"<p>The input for the ListPrincipalThings operation.</p>"
    },
    "ListPrincipalThingsResponse":{
      "type":"structure",
      "members":{
        "things":{
          "shape":"ThingNameList",
          "documentation":"<p>The things.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      },
      "documentation":"<p>The output from the ListPrincipalThings operation.</p>"
    },
    "ListRoleAliasesRequest":{
      "type":"structure",
      "members":{
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>A marker used to get the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Return the list of role aliases in ascending alphabetical order.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      }
    },
    "ListRoleAliasesResponse":{
      "type":"structure",
      "members":{
        "roleAliases":{
          "shape":"RoleAliases",
          "documentation":"<p>The role aliases.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>A marker used to get the next set of results.</p>"
        }
      }
    },
    "ListScheduledAuditsRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time. The default is 25.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListScheduledAuditsResponse":{
      "type":"structure",
      "members":{
        "scheduledAudits":{
          "shape":"ScheduledAuditMetadataList",
          "documentation":"<p>The list of scheduled audits.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>"
        }
      }
    },
    "ListSecurityProfilesForTargetRequest":{
      "type":"structure",
      "required":["securityProfileTargetArn"],
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "recursive":{
          "shape":"Recursive",
          "documentation":"<p>If true, return child groups as well.</p>",
          "location":"querystring",
          "locationName":"recursive"
        },
        "securityProfileTargetArn":{
          "shape":"SecurityProfileTargetArn",
          "documentation":"<p>The ARN of the target (thing group) whose attached security profiles you want to get.</p>",
          "location":"querystring",
          "locationName":"securityProfileTargetArn"
        }
      }
    },
    "ListSecurityProfilesForTargetResponse":{
      "type":"structure",
      "members":{
        "securityProfileTargetMappings":{
          "shape":"SecurityProfileTargetMappings",
          "documentation":"<p>A list of security profiles and their associated targets.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>"
        }
      }
    },
    "ListSecurityProfilesRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListSecurityProfilesResponse":{
      "type":"structure",
      "members":{
        "securityProfileIdentifiers":{
          "shape":"SecurityProfileIdentifiers",
          "documentation":"<p>A list of security profile identifiers (names and ARNs).</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>"
        }
      }
    },
    "ListStreamsRequest":{
      "type":"structure",
      "members":{
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at a time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token used to get the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "ascendingOrder":{
          "shape":"AscendingOrder",
          "documentation":"<p>Set to true to return the list of streams in ascending order.</p>",
          "location":"querystring",
          "locationName":"isAscendingOrder"
        }
      }
    },
    "ListStreamsResponse":{
      "type":"structure",
      "members":{
        "streams":{
          "shape":"StreamsSummary",
          "documentation":"<p>A list of streams.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token used to get the next set of results.</p>"
        }
      }
    },
    "ListTargetsForPolicyRequest":{
      "type":"structure",
      "required":["policyName"],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "marker":{
          "shape":"Marker",
          "documentation":"<p>A marker used to get the next set of results.</p>",
          "location":"querystring",
          "locationName":"marker"
        },
        "pageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"pageSize"
        }
      }
    },
    "ListTargetsForPolicyResponse":{
      "type":"structure",
      "members":{
        "targets":{
          "shape":"PolicyTargets",
          "documentation":"<p>The policy targets.</p>"
        },
        "nextMarker":{
          "shape":"Marker",
          "documentation":"<p>A marker used to get the next set of results.</p>"
        }
      }
    },
    "ListTargetsForSecurityProfileRequest":{
      "type":"structure",
      "required":["securityProfileName"],
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The security profile.</p>",
          "location":"uri",
          "locationName":"securityProfileName"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListTargetsForSecurityProfileResponse":{
      "type":"structure",
      "members":{
        "securityProfileTargets":{
          "shape":"SecurityProfileTargets",
          "documentation":"<p>The thing groups to which the security profile is attached.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>"
        }
      }
    },
    "ListThingGroupsForThingRequest":{
      "type":"structure",
      "required":["thingName"],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The thing name.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"RegistryMaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListThingGroupsForThingResponse":{
      "type":"structure",
      "members":{
        "thingGroups":{
          "shape":"ThingGroupNameAndArnList",
          "documentation":"<p>The thing groups.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListThingGroupsRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"RegistryMaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "parentGroup":{
          "shape":"ThingGroupName",
          "documentation":"<p>A filter that limits the results to those with the specified parent group.</p>",
          "location":"querystring",
          "locationName":"parentGroup"
        },
        "namePrefixFilter":{
          "shape":"ThingGroupName",
          "documentation":"<p>A filter that limits the results to those with the specified name prefix.</p>",
          "location":"querystring",
          "locationName":"namePrefixFilter"
        },
        "recursive":{
          "shape":"RecursiveWithoutDefault",
          "documentation":"<p>If true, return child groups as well.</p>",
          "location":"querystring",
          "locationName":"recursive"
        }
      }
    },
    "ListThingGroupsResponse":{
      "type":"structure",
      "members":{
        "thingGroups":{
          "shape":"ThingGroupNameAndArnList",
          "documentation":"<p>The thing groups.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListThingPrincipalsRequest":{
      "type":"structure",
      "required":["thingName"],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing.</p>",
          "location":"uri",
          "locationName":"thingName"
        }
      },
      "documentation":"<p>The input for the ListThingPrincipal operation.</p>"
    },
    "ListThingPrincipalsResponse":{
      "type":"structure",
      "members":{
        "principals":{
          "shape":"Principals",
          "documentation":"<p>The principals associated with the thing.</p>"
        }
      },
      "documentation":"<p>The output from the ListThingPrincipals operation.</p>"
    },
    "ListThingRegistrationTaskReportsRequest":{
      "type":"structure",
      "required":[
        "taskId",
        "reportType"
      ],
      "members":{
        "taskId":{
          "shape":"TaskId",
          "documentation":"<p>The id of the task.</p>",
          "location":"uri",
          "locationName":"taskId"
        },
        "reportType":{
          "shape":"ReportType",
          "documentation":"<p>The type of task report.</p>",
          "location":"querystring",
          "locationName":"reportType"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"RegistryMaxResults",
          "documentation":"<p>The maximum number of results to return per request.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListThingRegistrationTaskReportsResponse":{
      "type":"structure",
      "members":{
        "resourceLinks":{
          "shape":"S3FileUrlList",
          "documentation":"<p>Links to the task resources.</p>"
        },
        "reportType":{
          "shape":"ReportType",
          "documentation":"<p>The type of task report.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListThingRegistrationTasksRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"RegistryMaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "status":{
          "shape":"Status",
          "documentation":"<p>The status of the bulk thing provisioning task.</p>",
          "location":"querystring",
          "locationName":"status"
        }
      }
    },
    "ListThingRegistrationTasksResponse":{
      "type":"structure",
      "members":{
        "taskIds":{
          "shape":"TaskIdList",
          "documentation":"<p>A list of bulk thing provisioning task IDs.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListThingTypesRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"RegistryMaxResults",
          "documentation":"<p>The maximum number of results to return in this operation.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type.</p>",
          "location":"querystring",
          "locationName":"thingTypeName"
        }
      },
      "documentation":"<p>The input for the ListThingTypes operation.</p>"
    },
    "ListThingTypesResponse":{
      "type":"structure",
      "members":{
        "thingTypes":{
          "shape":"ThingTypeList",
          "documentation":"<p>The thing types.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      },
      "documentation":"<p>The output for the ListThingTypes operation.</p>"
    },
    "ListThingsInThingGroupRequest":{
      "type":"structure",
      "required":["thingGroupName"],
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The thing group name.</p>",
          "location":"uri",
          "locationName":"thingGroupName"
        },
        "recursive":{
          "shape":"Recursive",
          "documentation":"<p>When true, list things in this thing group and in all child groups as well.</p>",
          "location":"querystring",
          "locationName":"recursive"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"RegistryMaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListThingsInThingGroupResponse":{
      "type":"structure",
      "members":{
        "things":{
          "shape":"ThingNameList",
          "documentation":"<p>The things in the specified thing group.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListThingsRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"RegistryMaxResults",
          "documentation":"<p>The maximum number of results to return in this operation.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "attributeName":{
          "shape":"AttributeName",
          "documentation":"<p>The attribute name used to search for things.</p>",
          "location":"querystring",
          "locationName":"attributeName"
        },
        "attributeValue":{
          "shape":"AttributeValue",
          "documentation":"<p>The attribute value used to search for things.</p>",
          "location":"querystring",
          "locationName":"attributeValue"
        },
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type used to search for things.</p>",
          "location":"querystring",
          "locationName":"thingTypeName"
        }
      },
      "documentation":"<p>The input for the ListThings operation.</p>"
    },
    "ListThingsResponse":{
      "type":"structure",
      "members":{
        "things":{
          "shape":"ThingAttributeList",
          "documentation":"<p>The things.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      },
      "documentation":"<p>The output from the ListThings operation.</p>"
    },
    "ListTopicRulesRequest":{
      "type":"structure",
      "members":{
        "topic":{
          "shape":"Topic",
          "documentation":"<p>The topic.</p>",
          "location":"querystring",
          "locationName":"topic"
        },
        "maxResults":{
          "shape":"GEMaxResults",
          "documentation":"<p>The maximum number of results to return.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token used to retrieve the next value.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "ruleDisabled":{
          "shape":"IsDisabled",
          "documentation":"<p>Specifies whether the rule is disabled.</p>",
          "location":"querystring",
          "locationName":"ruleDisabled"
        }
      },
      "documentation":"<p>The input for the ListTopicRules operation.</p>"
    },
    "ListTopicRulesResponse":{
      "type":"structure",
      "members":{
        "rules":{
          "shape":"TopicRuleList",
          "documentation":"<p>The rules.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token used to retrieve the next value.</p>"
        }
      },
      "documentation":"<p>The output from the ListTopicRules operation.</p>"
    },
    "ListV2LoggingLevelsRequest":{
      "type":"structure",
      "members":{
        "targetType":{
          "shape":"LogTargetType",
          "documentation":"<p>The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.</p>",
          "location":"querystring",
          "locationName":"targetType"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"SkyfallMaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListV2LoggingLevelsResponse":{
      "type":"structure",
      "members":{
        "logTargetConfigurations":{
          "shape":"LogTargetConfigurations",
          "documentation":"<p>The logging configuration for a target.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        }
      }
    },
    "ListViolationEventsRequest":{
      "type":"structure",
      "required":[
        "startTime",
        "endTime"
      ],
      "members":{
        "startTime":{
          "shape":"Timestamp",
          "documentation":"<p>The start time for the alerts to be listed.</p>",
          "location":"querystring",
          "locationName":"startTime"
        },
        "endTime":{
          "shape":"Timestamp",
          "documentation":"<p>The end time for the alerts to be listed.</p>",
          "location":"querystring",
          "locationName":"endTime"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>A filter to limit results to those alerts caused by the specified thing.</p>",
          "location":"querystring",
          "locationName":"thingName"
        },
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>A filter to limit results to those alerts generated by the specified security profile.</p>",
          "location":"querystring",
          "locationName":"securityProfileName"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListViolationEventsResponse":{
      "type":"structure",
      "members":{
        "violationEvents":{
          "shape":"ViolationEvents",
          "documentation":"<p>The security profile violation alerts issued for this account during the given time frame, potentially filtered by security profile, behavior violated, or thing (device) violating.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>"
        }
      }
    },
    "LogLevel":{
      "type":"string",
      "enum":[
        "DEBUG",
        "INFO",
        "ERROR",
        "WARN",
        "DISABLED"
      ]
    },
    "LogTarget":{
      "type":"structure",
      "required":["targetType"],
      "members":{
        "targetType":{
          "shape":"LogTargetType",
          "documentation":"<p>The target type.</p>"
        },
        "targetName":{
          "shape":"LogTargetName",
          "documentation":"<p>The target name.</p>"
        }
      },
      "documentation":"<p>A log target.</p>"
    },
    "LogTargetConfiguration":{
      "type":"structure",
      "members":{
        "logTarget":{
          "shape":"LogTarget",
          "documentation":"<p>A log target</p>"
        },
        "logLevel":{
          "shape":"LogLevel",
          "documentation":"<p>The logging level.</p>"
        }
      },
      "documentation":"<p>The target configuration.</p>"
    },
    "LogTargetConfigurations":{
      "type":"list",
      "member":{"shape":"LogTargetConfiguration"}
    },
    "LogTargetName":{"type":"string"},
    "LogTargetType":{
      "type":"string",
      "enum":[
        "DEFAULT",
        "THING_GROUP"
      ]
    },
    "LoggingOptionsPayload":{
      "type":"structure",
      "required":["roleArn"],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access.</p>"
        },
        "logLevel":{
          "shape":"LogLevel",
          "documentation":"<p>The log level.</p>"
        }
      },
      "documentation":"<p>Describes the logging options payload.</p>"
    },
    "MalformedPolicyException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The policy documentation is not valid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "Marker":{
      "type":"string",
      "pattern":"[A-Za-z0-9+/]+={0,2}"
    },
    "MaxJobExecutionsPerMin":{
      "type":"integer",
      "max":1000,
      "min":1
    },
    "MaxResults":{
      "type":"integer",
      "max":250,
      "min":1
    },
    "MaximumPerMinute":{
      "type":"integer",
      "max":1000,
      "min":1
    },
    "Message":{
      "type":"string",
      "max":128
    },
    "MessageFormat":{
      "type":"string",
      "enum":[
        "RAW",
        "JSON"
      ]
    },
    "MetricValue":{
      "type":"structure",
      "members":{
        "count":{
          "shape":"UnsignedLong",
          "documentation":"<p>If the <code>comparisonOperator</code> calls for a numeric value, use this to specify that numeric value to be compared with the <code>metric</code>.</p>"
        },
        "cidrs":{
          "shape":"Cidrs",
          "documentation":"<p>If the <code>comparisonOperator</code> calls for a set of CIDRs, use this to specify that set to be compared with the <code>metric</code>.</p>"
        },
        "ports":{
          "shape":"Ports",
          "documentation":"<p>If the <code>comparisonOperator</code> calls for a set of ports, use this to specify that set to be compared with the <code>metric</code>.</p>"
        }
      },
      "documentation":"<p>The value to be compared with the <code>metric</code>.</p>"
    },
    "MissingContextValue":{"type":"string"},
    "MissingContextValues":{
      "type":"list",
      "member":{"shape":"MissingContextValue"}
    },
    "NextToken":{"type":"string"},
    "NonCompliantChecksCount":{"type":"integer"},
    "NonCompliantResource":{
      "type":"structure",
      "members":{
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of the non-compliant resource.</p>"
        },
        "resourceIdentifier":{
          "shape":"ResourceIdentifier",
          "documentation":"<p>Information identifying the non-compliant resource.</p>"
        },
        "additionalInfo":{
          "shape":"StringMap",
          "documentation":"<p>Additional information about the non-compliant resource.</p>"
        }
      },
      "documentation":"<p>Information about the resource that was non-compliant with the audit check.</p>"
    },
    "NonCompliantResourcesCount":{"type":"long"},
    "NotConfiguredException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The resource is not configured.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "OTAUpdateArn":{"type":"string"},
    "OTAUpdateDescription":{
      "type":"string",
      "max":2028,
      "pattern":"[^\\p{C}]+"
    },
    "OTAUpdateErrorMessage":{"type":"string"},
    "OTAUpdateFile":{
      "type":"structure",
      "members":{
        "fileName":{
          "shape":"FileName",
          "documentation":"<p>The name of the file.</p>"
        },
        "fileVersion":{
          "shape":"OTAUpdateFileVersion",
          "documentation":"<p>The file version.</p>"
        },
        "fileLocation":{
          "shape":"FileLocation",
          "documentation":"<p>The location of the updated firmware.</p>"
        },
        "codeSigning":{
          "shape":"CodeSigning",
          "documentation":"<p>The code signing method of the file.</p>"
        },
        "attributes":{
          "shape":"AttributesMap",
          "documentation":"<p>A list of name/attribute pairs.</p>"
        }
      },
      "documentation":"<p>Describes a file to be associated with an OTA update.</p>"
    },
    "OTAUpdateFileVersion":{"type":"string"},
    "OTAUpdateFiles":{
      "type":"list",
      "member":{"shape":"OTAUpdateFile"},
      "max":50,
      "min":1
    },
    "OTAUpdateId":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9_-]+"
    },
    "OTAUpdateInfo":{
      "type":"structure",
      "members":{
        "otaUpdateId":{
          "shape":"OTAUpdateId",
          "documentation":"<p>The OTA update ID.</p>"
        },
        "otaUpdateArn":{
          "shape":"OTAUpdateArn",
          "documentation":"<p>The OTA update ARN.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The date when the OTA update was created.</p>"
        },
        "lastModifiedDate":{
          "shape":"DateType",
          "documentation":"<p>The date when the OTA update was last updated.</p>"
        },
        "description":{
          "shape":"OTAUpdateDescription",
          "documentation":"<p>A description of the OTA update.</p>"
        },
        "targets":{
          "shape":"Targets",
          "documentation":"<p>The targets of the OTA update.</p>"
        },
        "awsJobExecutionsRolloutConfig":{
          "shape":"AwsJobExecutionsRolloutConfig",
          "documentation":"<p>Configuration for the rollout of OTA updates.</p>"
        },
        "targetSelection":{
          "shape":"TargetSelection",
          "documentation":"<p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when the thing is added to a target group, even after the OTA update was completed by all things originally in the group. </p>"
        },
        "otaUpdateFiles":{
          "shape":"OTAUpdateFiles",
          "documentation":"<p>A list of files associated with the OTA update.</p>"
        },
        "otaUpdateStatus":{
          "shape":"OTAUpdateStatus",
          "documentation":"<p>The status of the OTA update.</p>"
        },
        "awsIotJobId":{
          "shape":"AwsIotJobId",
          "documentation":"<p>The AWS IoT job ID associated with the OTA update.</p>"
        },
        "awsIotJobArn":{
          "shape":"AwsIotJobArn",
          "documentation":"<p>The AWS IoT job ARN associated with the OTA update.</p>"
        },
        "errorInfo":{
          "shape":"ErrorInfo",
          "documentation":"<p>Error information associated with the OTA update.</p>"
        },
        "additionalParameters":{
          "shape":"AdditionalParameterMap",
          "documentation":"<p>A collection of name/value pairs</p>"
        }
      },
      "documentation":"<p>Information about an OTA update.</p>"
    },
    "OTAUpdateStatus":{
      "type":"string",
      "enum":[
        "CREATE_PENDING",
        "CREATE_IN_PROGRESS",
        "CREATE_COMPLETE",
        "CREATE_FAILED"
      ]
    },
    "OTAUpdateSummary":{
      "type":"structure",
      "members":{
        "otaUpdateId":{
          "shape":"OTAUpdateId",
          "documentation":"<p>The OTA update ID.</p>"
        },
        "otaUpdateArn":{
          "shape":"OTAUpdateArn",
          "documentation":"<p>The OTA update ARN.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The date when the OTA update was created.</p>"
        }
      },
      "documentation":"<p>An OTA update summary.</p>"
    },
    "OTAUpdatesSummary":{
      "type":"list",
      "member":{"shape":"OTAUpdateSummary"}
    },
    "OptionalVersion":{"type":"long"},
    "OutgoingCertificate":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The certificate ARN.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The certificate ID.</p>"
        },
        "transferredTo":{
          "shape":"AwsAccountId",
          "documentation":"<p>The AWS account to which the transfer was made.</p>"
        },
        "transferDate":{
          "shape":"DateType",
          "documentation":"<p>The date the transfer was initiated.</p>"
        },
        "transferMessage":{
          "shape":"Message",
          "documentation":"<p>The transfer message.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The certificate creation date.</p>"
        }
      },
      "documentation":"<p>A certificate that has been transferred but not yet accepted.</p>"
    },
    "OutgoingCertificates":{
      "type":"list",
      "member":{"shape":"OutgoingCertificate"}
    },
    "PageSize":{
      "type":"integer",
      "max":250,
      "min":1
    },
    "Parameter":{"type":"string"},
    "Parameters":{
      "type":"map",
      "key":{"shape":"Parameter"},
      "value":{"shape":"Value"}
    },
    "PartitionKey":{"type":"string"},
    "PayloadField":{"type":"string"},
    "Percentage":{
      "type":"integer",
      "max":100,
      "min":0
    },
    "Platform":{"type":"string"},
    "Policies":{
      "type":"list",
      "member":{"shape":"Policy"}
    },
    "Policy":{
      "type":"structure",
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>"
        },
        "policyArn":{
          "shape":"PolicyArn",
          "documentation":"<p>The policy ARN.</p>"
        }
      },
      "documentation":"<p>Describes an AWS IoT policy.</p>"
    },
    "PolicyArn":{"type":"string"},
    "PolicyDocument":{"type":"string"},
    "PolicyDocuments":{
      "type":"list",
      "member":{"shape":"PolicyDocument"}
    },
    "PolicyName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[\\w+=,.@-]+"
    },
    "PolicyNames":{
      "type":"list",
      "member":{"shape":"PolicyName"}
    },
    "PolicyTarget":{"type":"string"},
    "PolicyTargets":{
      "type":"list",
      "member":{"shape":"PolicyTarget"}
    },
    "PolicyVersion":{
      "type":"structure",
      "members":{
        "versionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The policy version ID.</p>"
        },
        "isDefaultVersion":{
          "shape":"IsDefaultVersion",
          "documentation":"<p>Specifies whether the policy version is the default.</p>"
        },
        "createDate":{
          "shape":"DateType",
          "documentation":"<p>The date and time the policy was created.</p>"
        }
      },
      "documentation":"<p>Describes a policy version.</p>"
    },
    "PolicyVersionId":{
      "type":"string",
      "pattern":"[0-9]+"
    },
    "PolicyVersionIdentifier":{
      "type":"structure",
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The name of the policy.</p>"
        },
        "policyVersionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The ID of the version of the policy associated with the resource.</p>"
        }
      },
      "documentation":"<p>Information about the version of the policy associated with the resource.</p>"
    },
    "PolicyVersions":{
      "type":"list",
      "member":{"shape":"PolicyVersion"}
    },
    "Port":{
      "type":"integer",
      "max":65535,
      "min":0
    },
    "Ports":{
      "type":"list",
      "member":{"shape":"Port"}
    },
    "Prefix":{"type":"string"},
    "PresignedUrlConfig":{
      "type":"structure",
      "members":{
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.</p>"
        },
        "expiresInSec":{
          "shape":"ExpiresInSec",
          "documentation":"<p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600 seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.</p>"
        }
      },
      "documentation":"<p>Configuration for pre-signed S3 URLs.</p>"
    },
    "Principal":{"type":"string"},
    "PrincipalArn":{"type":"string"},
    "PrincipalId":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9]+"
    },
    "Principals":{
      "type":"list",
      "member":{"shape":"PrincipalArn"}
    },
    "PrivateKey":{
      "type":"string",
      "min":1,
      "sensitive":true
    },
    "ProcessingTargetName":{"type":"string"},
    "ProcessingTargetNameList":{
      "type":"list",
      "member":{"shape":"ProcessingTargetName"}
    },
    "PublicKey":{
      "type":"string",
      "min":1
    },
    "PublicKeyMap":{
      "type":"map",
      "key":{"shape":"KeyName"},
      "value":{"shape":"KeyValue"}
    },
    "PutItemInput":{
      "type":"structure",
      "required":["tableName"],
      "members":{
        "tableName":{
          "shape":"TableName",
          "documentation":"<p>The table where the message data will be written</p>"
        }
      },
      "documentation":"<p>The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.</p>"
    },
    "QueryMaxResults":{
      "type":"integer",
      "max":500,
      "min":1
    },
    "QueryString":{
      "type":"string",
      "min":1
    },
    "QueryVersion":{"type":"string"},
    "QueueUrl":{"type":"string"},
    "QueuedThings":{"type":"integer"},
    "RangeKeyField":{"type":"string"},
    "RangeKeyValue":{"type":"string"},
    "ReasonForNonCompliance":{"type":"string"},
    "ReasonForNonComplianceCode":{"type":"string"},
    "Recursive":{"type":"boolean"},
    "RecursiveWithoutDefault":{"type":"boolean"},
    "RegisterCACertificateRequest":{
      "type":"structure",
      "required":[
        "caCertificate",
        "verificationCertificate"
      ],
      "members":{
        "caCertificate":{
          "shape":"CertificatePem",
          "documentation":"<p>The CA certificate.</p>"
        },
        "verificationCertificate":{
          "shape":"CertificatePem",
          "documentation":"<p>The private key verification certificate.</p>"
        },
        "setAsActive":{
          "shape":"SetAsActive",
          "documentation":"<p>A boolean value that specifies if the CA certificate is set to active.</p>",
          "location":"querystring",
          "locationName":"setAsActive"
        },
        "allowAutoRegistration":{
          "shape":"AllowAutoRegistration",
          "documentation":"<p>Allows this CA certificate to be used for auto registration of device certificates.</p>",
          "location":"querystring",
          "locationName":"allowAutoRegistration"
        },
        "registrationConfig":{
          "shape":"RegistrationConfig",
          "documentation":"<p>Information about the registration configuration.</p>"
        }
      },
      "documentation":"<p>The input to the RegisterCACertificate operation.</p>"
    },
    "RegisterCACertificateResponse":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The CA certificate ARN.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The CA certificate identifier.</p>"
        }
      },
      "documentation":"<p>The output from the RegisterCACertificateResponse operation.</p>"
    },
    "RegisterCertificateRequest":{
      "type":"structure",
      "required":["certificatePem"],
      "members":{
        "certificatePem":{
          "shape":"CertificatePem",
          "documentation":"<p>The certificate data, in PEM format.</p>"
        },
        "caCertificatePem":{
          "shape":"CertificatePem",
          "documentation":"<p>The CA certificate used to sign the device certificate being registered.</p>"
        },
        "setAsActive":{
          "shape":"SetAsActiveFlag",
          "documentation":"<p>A boolean value that specifies if the CA certificate is set to active.</p>",
          "deprecated":true,
          "location":"querystring",
          "locationName":"setAsActive"
        },
        "status":{
          "shape":"CertificateStatus",
          "documentation":"<p>The status of the register certificate request.</p>"
        }
      },
      "documentation":"<p>The input to the RegisterCertificate operation.</p>"
    },
    "RegisterCertificateResponse":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The certificate ARN.</p>"
        },
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The certificate identifier.</p>"
        }
      },
      "documentation":"<p>The output from the RegisterCertificate operation.</p>"
    },
    "RegisterThingRequest":{
      "type":"structure",
      "required":["templateBody"],
      "members":{
        "templateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>The provisioning template. See <a href=\"http://docs.aws.amazon.com/iot/latest/developerguide/programmatic-provisioning.html\">Programmatic Provisioning</a> for more information.</p>"
        },
        "parameters":{
          "shape":"Parameters",
          "documentation":"<p>The parameters for provisioning a thing. See <a href=\"http://docs.aws.amazon.com/iot/latest/developerguide/programmatic-provisioning.html\">Programmatic Provisioning</a> for more information.</p>"
        }
      }
    },
    "RegisterThingResponse":{
      "type":"structure",
      "members":{
        "certificatePem":{
          "shape":"CertificatePem",
          "documentation":"<p>.</p>"
        },
        "resourceArns":{
          "shape":"ResourceArns",
          "documentation":"<p>ARNs for the generated resources.</p>"
        }
      }
    },
    "RegistrationCode":{
      "type":"string",
      "max":64,
      "min":64,
      "pattern":"(0x)?[a-fA-F0-9]+"
    },
    "RegistrationCodeValidationException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>Additional information about the exception.</p>"
        }
      },
      "documentation":"<p>The registration code is invalid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "RegistrationConfig":{
      "type":"structure",
      "members":{
        "templateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>The template body.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role.</p>"
        }
      },
      "documentation":"<p>The registration configuration.</p>"
    },
    "RegistryMaxResults":{
      "type":"integer",
      "max":250,
      "min":1
    },
    "RegistryS3BucketName":{
      "type":"string",
      "max":256,
      "min":3,
      "pattern":"[a-zA-Z0-9._-]+"
    },
    "RegistryS3KeyName":{
      "type":"string",
      "max":1024,
      "min":1,
      "pattern":"[a-zA-Z0-9!_.*'()-\\/]+"
    },
    "RejectCertificateTransferRequest":{
      "type":"structure",
      "required":["certificateId"],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>",
          "location":"uri",
          "locationName":"certificateId"
        },
        "rejectReason":{
          "shape":"Message",
          "documentation":"<p>The reason the certificate transfer was rejected.</p>"
        }
      },
      "documentation":"<p>The input for the RejectCertificateTransfer operation.</p>"
    },
    "RejectedThings":{"type":"integer"},
    "RelatedResource":{
      "type":"structure",
      "members":{
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of resource.</p>"
        },
        "resourceIdentifier":{
          "shape":"ResourceIdentifier",
          "documentation":"<p>Information identifying the resource.</p>"
        },
        "additionalInfo":{
          "shape":"StringMap",
          "documentation":"<p>Additional information about the resource.</p>"
        }
      },
      "documentation":"<p>Information about a related resource.</p>"
    },
    "RelatedResources":{
      "type":"list",
      "member":{"shape":"RelatedResource"}
    },
    "RemoveAutoRegistration":{"type":"boolean"},
    "RemoveThingFromThingGroupRequest":{
      "type":"structure",
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The group name.</p>"
        },
        "thingGroupArn":{
          "shape":"ThingGroupArn",
          "documentation":"<p>The group ARN.</p>"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing to remove from the group.</p>"
        },
        "thingArn":{
          "shape":"ThingArn",
          "documentation":"<p>The ARN of the thing to remove from the group.</p>"
        }
      }
    },
    "RemoveThingFromThingGroupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "RemoveThingType":{"type":"boolean"},
    "RemovedThings":{"type":"integer"},
    "ReplaceTopicRuleRequest":{
      "type":"structure",
      "required":[
        "ruleName",
        "topicRulePayload"
      ],
      "members":{
        "ruleName":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>",
          "location":"uri",
          "locationName":"ruleName"
        },
        "topicRulePayload":{
          "shape":"TopicRulePayload",
          "documentation":"<p>The rule payload.</p>"
        }
      },
      "documentation":"<p>The input for the ReplaceTopicRule operation.</p>",
      "payload":"topicRulePayload"
    },
    "ReportType":{
      "type":"string",
      "enum":[
        "ERRORS",
        "RESULTS"
      ]
    },
    "RepublishAction":{
      "type":"structure",
      "required":[
        "roleArn",
        "topic"
      ],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access.</p>"
        },
        "topic":{
          "shape":"TopicPattern",
          "documentation":"<p>The name of the MQTT topic.</p>"
        }
      },
      "documentation":"<p>Describes an action to republish to another topic.</p>"
    },
    "Resource":{"type":"string"},
    "ResourceAlreadyExistsException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        },
        "resourceId":{
          "shape":"resourceId",
          "documentation":"<p>The ID of the resource that caused the exception.</p>"
        },
        "resourceArn":{
          "shape":"resourceArn",
          "documentation":"<p>The ARN of the resource that caused the exception.</p>"
        }
      },
      "documentation":"<p>The resource already exists.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "ResourceArn":{"type":"string"},
    "ResourceArns":{
      "type":"map",
      "key":{"shape":"ResourceLogicalId"},
      "value":{"shape":"ResourceArn"}
    },
    "ResourceIdentifier":{
      "type":"structure",
      "members":{
        "deviceCertificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate attached to the resource.</p>"
        },
        "caCertificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the CA certificate used to authorize the certificate.</p>"
        },
        "cognitoIdentityPoolId":{
          "shape":"CognitoIdentityPoolId",
          "documentation":"<p>The ID of the Cognito Identity Pool.</p>"
        },
        "clientId":{
          "shape":"ClientId",
          "documentation":"<p>The client ID.</p>"
        },
        "policyVersionIdentifier":{
          "shape":"PolicyVersionIdentifier",
          "documentation":"<p>The version of the policy associated with the resource.</p>"
        },
        "account":{
          "shape":"AwsAccountId",
          "documentation":"<p>The account with which the resource is associated.</p>"
        }
      },
      "documentation":"<p>Information identifying the non-compliant resource.</p>"
    },
    "ResourceLogicalId":{"type":"string"},
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The specified resource does not exist.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "ResourceRegistrationFailureException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The resource registration failed.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ResourceType":{
      "type":"string",
      "enum":[
        "DEVICE_CERTIFICATE",
        "CA_CERTIFICATE",
        "IOT_POLICY",
        "COGNITO_IDENTITY_POOL",
        "CLIENT_ID",
        "ACCOUNT_SETTINGS"
      ]
    },
    "Resources":{
      "type":"list",
      "member":{"shape":"Resource"}
    },
    "RoleAlias":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[\\w=,@-]+"
    },
    "RoleAliasArn":{"type":"string"},
    "RoleAliasDescription":{
      "type":"structure",
      "members":{
        "roleAlias":{
          "shape":"RoleAlias",
          "documentation":"<p>The role alias.</p>"
        },
        "roleAliasArn":{
          "shape":"RoleAliasArn",
          "documentation":"<p>The ARN of the role alias.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The role ARN.</p>"
        },
        "owner":{
          "shape":"AwsAccountId",
          "documentation":"<p>The role alias owner.</p>"
        },
        "credentialDurationSeconds":{
          "shape":"CredentialDurationSeconds",
          "documentation":"<p>The number of seconds for which the credential is valid.</p>"
        },
        "creationDate":{
          "shape":"DateType",
          "documentation":"<p>The UNIX timestamp of when the role alias was created.</p>"
        },
        "lastModifiedDate":{
          "shape":"DateType",
          "documentation":"<p>The UNIX timestamp of when the role alias was last modified.</p>"
        }
      },
      "documentation":"<p>Role alias description.</p>"
    },
    "RoleAliases":{
      "type":"list",
      "member":{"shape":"RoleAlias"}
    },
    "RoleArn":{
      "type":"string",
      "max":2048,
      "min":20
    },
    "RuleArn":{"type":"string"},
    "RuleName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[a-zA-Z0-9_]+$"
    },
    "S3Action":{
      "type":"structure",
      "required":[
        "roleArn",
        "bucketName",
        "key"
      ],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access.</p>"
        },
        "bucketName":{
          "shape":"BucketName",
          "documentation":"<p>The Amazon S3 bucket.</p>"
        },
        "key":{
          "shape":"Key",
          "documentation":"<p>The object key.</p>"
        },
        "cannedAcl":{
          "shape":"CannedAccessControlList",
          "documentation":"<p>The Amazon S3 canned ACL that controls access to the object identified by the object key. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl\">S3 canned ACLs</a>.</p>"
        }
      },
      "documentation":"<p>Describes an action to write data to an Amazon S3 bucket.</p>"
    },
    "S3Bucket":{
      "type":"string",
      "min":1
    },
    "S3Destination":{
      "type":"structure",
      "members":{
        "bucket":{
          "shape":"S3Bucket",
          "documentation":"<p>The S3 bucket that contains the updated firmware.</p>"
        },
        "prefix":{
          "shape":"Prefix",
          "documentation":"<p>The S3 prefix.</p>"
        }
      },
      "documentation":"<p>Describes the location of updated firmware in S3.</p>"
    },
    "S3FileUrl":{
      "type":"string",
      "max":65535
    },
    "S3FileUrlList":{
      "type":"list",
      "member":{"shape":"S3FileUrl"}
    },
    "S3Key":{
      "type":"string",
      "min":1
    },
    "S3Location":{
      "type":"structure",
      "members":{
        "bucket":{
          "shape":"S3Bucket",
          "documentation":"<p>The S3 bucket.</p>"
        },
        "key":{
          "shape":"S3Key",
          "documentation":"<p>The S3 key.</p>"
        },
        "version":{
          "shape":"S3Version",
          "documentation":"<p>The S3 bucket version.</p>"
        }
      },
      "documentation":"<p>The S3 location.</p>"
    },
    "S3Version":{"type":"string"},
    "SQL":{"type":"string"},
    "SalesforceAction":{
      "type":"structure",
      "required":[
        "token",
        "url"
      ],
      "members":{
        "token":{
          "shape":"SalesforceToken",
          "documentation":"<p>The token used to authenticate access to the Salesforce IoT Cloud Input Stream. The token is available from the Salesforce IoT Cloud platform after creation of the Input Stream.</p>"
        },
        "url":{
          "shape":"SalesforceEndpoint",
          "documentation":"<p>The URL exposed by the Salesforce IoT Cloud Input Stream. The URL is available from the Salesforce IoT Cloud platform after creation of the Input Stream.</p>"
        }
      },
      "documentation":"<p>Describes an action to write a message to a Salesforce IoT Cloud Input Stream.</p>"
    },
    "SalesforceEndpoint":{
      "type":"string",
      "max":2000,
      "pattern":"https://ingestion-[a-zA-Z0-9]{1,12}\\.[a-zA-Z0-9]+\\.((sfdc-matrix\\.net)|(sfdcnow\\.com))/streams/\\w{1,20}/\\w{1,20}/event"
    },
    "SalesforceToken":{
      "type":"string",
      "min":40
    },
    "ScheduledAuditArn":{"type":"string"},
    "ScheduledAuditMetadata":{
      "type":"structure",
      "members":{
        "scheduledAuditName":{
          "shape":"ScheduledAuditName",
          "documentation":"<p>The name of the scheduled audit.</p>"
        },
        "scheduledAuditArn":{
          "shape":"ScheduledAuditArn",
          "documentation":"<p>The ARN of the scheduled audit.</p>"
        },
        "frequency":{
          "shape":"AuditFrequency",
          "documentation":"<p>How often the scheduled audit takes place.</p>"
        },
        "dayOfMonth":{
          "shape":"DayOfMonth",
          "documentation":"<p>The day of the month on which the scheduled audit is run (if the <code>frequency</code> is \"MONTHLY\"). If days 29-31 are specified, and the month does not have that many days, the audit takes place on the \"LAST\" day of the month.</p>"
        },
        "dayOfWeek":{
          "shape":"DayOfWeek",
          "documentation":"<p>The day of the week on which the scheduled audit is run (if the <code>frequency</code> is \"WEEKLY\" or \"BIWEEKLY\").</p>"
        }
      },
      "documentation":"<p>Information about the scheduled audit.</p>"
    },
    "ScheduledAuditMetadataList":{
      "type":"list",
      "member":{"shape":"ScheduledAuditMetadata"}
    },
    "ScheduledAuditName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9_-]+"
    },
    "SearchIndexRequest":{
      "type":"structure",
      "required":["queryString"],
      "members":{
        "indexName":{
          "shape":"IndexName",
          "documentation":"<p>The search index name.</p>"
        },
        "queryString":{
          "shape":"QueryString",
          "documentation":"<p>The search query string.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        },
        "maxResults":{
          "shape":"QueryMaxResults",
          "documentation":"<p>The maximum number of results to return at one time.</p>"
        },
        "queryVersion":{
          "shape":"QueryVersion",
          "documentation":"<p>The query version.</p>"
        }
      }
    },
    "SearchIndexResponse":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>"
        },
        "things":{
          "shape":"ThingDocumentList",
          "documentation":"<p>The things that match the search query.</p>"
        },
        "thingGroups":{
          "shape":"ThingGroupDocumentList",
          "documentation":"<p>The thing groups that match the search query.</p>"
        }
      }
    },
    "SearchableAttributes":{
      "type":"list",
      "member":{"shape":"AttributeName"}
    },
    "Seconds":{"type":"integer"},
    "SecurityProfileArn":{"type":"string"},
    "SecurityProfileDescription":{
      "type":"string",
      "max":1000,
      "pattern":"[\\p{Graph}\\x20]*"
    },
    "SecurityProfileIdentifier":{
      "type":"structure",
      "required":[
        "name",
        "arn"
      ],
      "members":{
        "name":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name you have given to the security profile.</p>"
        },
        "arn":{
          "shape":"SecurityProfileArn",
          "documentation":"<p>The ARN of the security profile.</p>"
        }
      },
      "documentation":"<p>Identifying information for a Device Defender security profile.</p>"
    },
    "SecurityProfileIdentifiers":{
      "type":"list",
      "member":{"shape":"SecurityProfileIdentifier"}
    },
    "SecurityProfileName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9:_-]+"
    },
    "SecurityProfileTarget":{
      "type":"structure",
      "required":["arn"],
      "members":{
        "arn":{
          "shape":"SecurityProfileTargetArn",
          "documentation":"<p>The ARN of the security profile.</p>"
        }
      },
      "documentation":"<p>A target to which an alert is sent when a security profile behavior is violated.</p>"
    },
    "SecurityProfileTargetArn":{"type":"string"},
    "SecurityProfileTargetMapping":{
      "type":"structure",
      "members":{
        "securityProfileIdentifier":{
          "shape":"SecurityProfileIdentifier",
          "documentation":"<p>Information that identifies the security profile.</p>"
        },
        "target":{
          "shape":"SecurityProfileTarget",
          "documentation":"<p>Information about the target (thing group) associated with the security profile.</p>"
        }
      },
      "documentation":"<p>Information about a security profile and the target associated with it.</p>"
    },
    "SecurityProfileTargetMappings":{
      "type":"list",
      "member":{"shape":"SecurityProfileTargetMapping"}
    },
    "SecurityProfileTargets":{
      "type":"list",
      "member":{"shape":"SecurityProfileTarget"}
    },
    "ServiceUnavailableException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The service is temporarily unavailable.</p>",
      "error":{"httpStatusCode":503},
      "exception":true,
      "fault":true
    },
    "SetAsActive":{"type":"boolean"},
    "SetAsActiveFlag":{"type":"boolean"},
    "SetAsDefault":{"type":"boolean"},
    "SetDefaultAuthorizerRequest":{
      "type":"structure",
      "required":["authorizerName"],
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The authorizer name.</p>"
        }
      }
    },
    "SetDefaultAuthorizerResponse":{
      "type":"structure",
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The authorizer name.</p>"
        },
        "authorizerArn":{
          "shape":"AuthorizerArn",
          "documentation":"<p>The authorizer ARN.</p>"
        }
      }
    },
    "SetDefaultPolicyVersionRequest":{
      "type":"structure",
      "required":[
        "policyName",
        "policyVersionId"
      ],
      "members":{
        "policyName":{
          "shape":"PolicyName",
          "documentation":"<p>The policy name.</p>",
          "location":"uri",
          "locationName":"policyName"
        },
        "policyVersionId":{
          "shape":"PolicyVersionId",
          "documentation":"<p>The policy version ID.</p>",
          "location":"uri",
          "locationName":"policyVersionId"
        }
      },
      "documentation":"<p>The input for the SetDefaultPolicyVersion operation.</p>"
    },
    "SetLoggingOptionsRequest":{
      "type":"structure",
      "required":["loggingOptionsPayload"],
      "members":{
        "loggingOptionsPayload":{
          "shape":"LoggingOptionsPayload",
          "documentation":"<p>The logging options payload.</p>"
        }
      },
      "documentation":"<p>The input for the SetLoggingOptions operation.</p>",
      "payload":"loggingOptionsPayload"
    },
    "SetV2LoggingLevelRequest":{
      "type":"structure",
      "required":[
        "logTarget",
        "logLevel"
      ],
      "members":{
        "logTarget":{
          "shape":"LogTarget",
          "documentation":"<p>The log target.</p>"
        },
        "logLevel":{
          "shape":"LogLevel",
          "documentation":"<p>The log level.</p>"
        }
      }
    },
    "SetV2LoggingOptionsRequest":{
      "type":"structure",
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the role that allows IoT to write to Cloudwatch logs.</p>"
        },
        "defaultLogLevel":{
          "shape":"LogLevel",
          "documentation":"<p>The default logging level.</p>"
        },
        "disableAllLogs":{
          "shape":"DisableAllLogs",
          "documentation":"<p>If true all logs are disabled. The default is false.</p>"
        }
      }
    },
    "Signature":{"type":"blob"},
    "SignatureAlgorithm":{"type":"string"},
    "SigningJobId":{"type":"string"},
    "SigningProfileName":{"type":"string"},
    "SigningProfileParameter":{
      "type":"structure",
      "members":{
        "certificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>Certificate ARN.</p>"
        },
        "platform":{
          "shape":"Platform",
          "documentation":"<p>The hardware platform of your device.</p>"
        },
        "certificatePathOnDevice":{
          "shape":"CertificatePathOnDevice",
          "documentation":"<p>The location of the code-signing certificate on your device.</p>"
        }
      },
      "documentation":"<p>Describes the code-signing profile.</p>"
    },
    "SkyfallMaxResults":{
      "type":"integer",
      "max":250,
      "min":1
    },
    "SnsAction":{
      "type":"structure",
      "required":[
        "targetArn",
        "roleArn"
      ],
      "members":{
        "targetArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the SNS topic.</p>"
        },
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access.</p>"
        },
        "messageFormat":{
          "shape":"MessageFormat",
          "documentation":"<p>(Optional) The message format of the message to publish. Accepted values are \"JSON\" and \"RAW\". The default value of the attribute is \"RAW\". SNS uses this setting to determine if the payload should be parsed and relevant platform-specific bits of the payload should be extracted. To read more about SNS message formats, see <a href=\"http://docs.aws.amazon.com/sns/latest/dg/json-formats.html\">http://docs.aws.amazon.com/sns/latest/dg/json-formats.html</a> refer to their official documentation.</p>"
        }
      },
      "documentation":"<p>Describes an action to publish to an Amazon SNS topic.</p>"
    },
    "SqlParseException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The Rule-SQL expression can't be parsed correctly.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "SqsAction":{
      "type":"structure",
      "required":[
        "roleArn",
        "queueUrl"
      ],
      "members":{
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the IAM role that grants access.</p>"
        },
        "queueUrl":{
          "shape":"QueueUrl",
          "documentation":"<p>The URL of the Amazon SQS queue.</p>"
        },
        "useBase64":{
          "shape":"UseBase64",
          "documentation":"<p>Specifies whether to use Base64 encoding.</p>"
        }
      },
      "documentation":"<p>Describes an action to publish data to an Amazon SQS queue.</p>"
    },
    "StartOnDemandAuditTaskRequest":{
      "type":"structure",
      "required":["targetCheckNames"],
      "members":{
        "targetCheckNames":{
          "shape":"TargetAuditCheckNames",
          "documentation":"<p>Which checks are performed during the audit. The checks you specify must be enabled for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.</p>"
        }
      }
    },
    "StartOnDemandAuditTaskResponse":{
      "type":"structure",
      "members":{
        "taskId":{
          "shape":"AuditTaskId",
          "documentation":"<p>The ID of the on-demand audit you started.</p>"
        }
      }
    },
    "StartSigningJobParameter":{
      "type":"structure",
      "members":{
        "signingProfileParameter":{
          "shape":"SigningProfileParameter",
          "documentation":"<p>Describes the code-signing profile.</p>"
        },
        "signingProfileName":{
          "shape":"SigningProfileName",
          "documentation":"<p>The code-signing profile name.</p>"
        },
        "destination":{
          "shape":"Destination",
          "documentation":"<p>The location to write the code-signed file.</p>"
        }
      },
      "documentation":"<p>Information required to start a signing job.</p>"
    },
    "StartThingRegistrationTaskRequest":{
      "type":"structure",
      "required":[
        "templateBody",
        "inputFileBucket",
        "inputFileKey",
        "roleArn"
      ],
      "members":{
        "templateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>The provisioning template.</p>"
        },
        "inputFileBucket":{
          "shape":"RegistryS3BucketName",
          "documentation":"<p>The S3 bucket that contains the input file.</p>"
        },
        "inputFileKey":{
          "shape":"RegistryS3KeyName",
          "documentation":"<p>The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The IAM role ARN that grants permission the input file.</p>"
        }
      }
    },
    "StartThingRegistrationTaskResponse":{
      "type":"structure",
      "members":{
        "taskId":{
          "shape":"TaskId",
          "documentation":"<p>The bulk thing provisioning task ID.</p>"
        }
      }
    },
    "StateMachineName":{"type":"string"},
    "StateReason":{"type":"string"},
    "StateValue":{"type":"string"},
    "Status":{
      "type":"string",
      "enum":[
        "InProgress",
        "Completed",
        "Failed",
        "Cancelled",
        "Cancelling"
      ]
    },
    "StepFunctionsAction":{
      "type":"structure",
      "required":[
        "stateMachineName",
        "roleArn"
      ],
      "members":{
        "executionNamePrefix":{
          "shape":"ExecutionNamePrefix",
          "documentation":"<p>(Optional) A name will be given to the state machine execution consisting of this prefix followed by a UUID. Step Functions automatically creates a unique name for each state machine execution if one is not provided.</p>"
        },
        "stateMachineName":{
          "shape":"StateMachineName",
          "documentation":"<p>The name of the Step Functions state machine whose execution will be started.</p>"
        },
        "roleArn":{
          "shape":"AwsArn",
          "documentation":"<p>The ARN of the role that grants IoT permission to start execution of a state machine (\"Action\":\"states:StartExecution\").</p>"
        }
      },
      "documentation":"<p>Starts execution of a Step Functions state machine.</p>"
    },
    "StopThingRegistrationTaskRequest":{
      "type":"structure",
      "required":["taskId"],
      "members":{
        "taskId":{
          "shape":"TaskId",
          "documentation":"<p>The bulk thing provisioning task ID.</p>",
          "location":"uri",
          "locationName":"taskId"
        }
      }
    },
    "StopThingRegistrationTaskResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Stream":{
      "type":"structure",
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>"
        },
        "fileId":{
          "shape":"FileId",
          "documentation":"<p>The ID of a file associated with a stream.</p>"
        }
      },
      "documentation":"<p>Describes a group of files that can be streamed.</p>"
    },
    "StreamArn":{"type":"string"},
    "StreamDescription":{
      "type":"string",
      "max":2028,
      "pattern":"[^\\p{C}]+"
    },
    "StreamFile":{
      "type":"structure",
      "members":{
        "fileId":{
          "shape":"FileId",
          "documentation":"<p>The file ID.</p>"
        },
        "s3Location":{
          "shape":"S3Location",
          "documentation":"<p>The location of the file in S3.</p>"
        }
      },
      "documentation":"<p>Represents a file to stream.</p>"
    },
    "StreamFiles":{
      "type":"list",
      "member":{"shape":"StreamFile"},
      "max":50,
      "min":1
    },
    "StreamId":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9_-]+"
    },
    "StreamInfo":{
      "type":"structure",
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>"
        },
        "streamArn":{
          "shape":"StreamArn",
          "documentation":"<p>The stream ARN.</p>"
        },
        "streamVersion":{
          "shape":"StreamVersion",
          "documentation":"<p>The stream version.</p>"
        },
        "description":{
          "shape":"StreamDescription",
          "documentation":"<p>The description of the stream.</p>"
        },
        "files":{
          "shape":"StreamFiles",
          "documentation":"<p>The files to stream.</p>"
        },
        "createdAt":{
          "shape":"DateType",
          "documentation":"<p>The date when the stream was created.</p>"
        },
        "lastUpdatedAt":{
          "shape":"DateType",
          "documentation":"<p>The date when the stream was last updated.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>An IAM role AWS IoT assumes to access your S3 files.</p>"
        }
      },
      "documentation":"<p>Information about a stream.</p>"
    },
    "StreamName":{"type":"string"},
    "StreamSummary":{
      "type":"structure",
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>"
        },
        "streamArn":{
          "shape":"StreamArn",
          "documentation":"<p>The stream ARN.</p>"
        },
        "streamVersion":{
          "shape":"StreamVersion",
          "documentation":"<p>The stream version.</p>"
        },
        "description":{
          "shape":"StreamDescription",
          "documentation":"<p>A description of the stream.</p>"
        }
      },
      "documentation":"<p>A summary of a stream.</p>"
    },
    "StreamVersion":{
      "type":"integer",
      "max":65535,
      "min":0
    },
    "StreamsSummary":{
      "type":"list",
      "member":{"shape":"StreamSummary"}
    },
    "String":{"type":"string"},
    "StringMap":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "SucceededThings":{"type":"integer"},
    "TableName":{"type":"string"},
    "Target":{"type":"string"},
    "TargetArn":{"type":"string"},
    "TargetAuditCheckNames":{
      "type":"list",
      "member":{"shape":"AuditCheckName"}
    },
    "TargetSelection":{
      "type":"string",
      "enum":[
        "CONTINUOUS",
        "SNAPSHOT"
      ]
    },
    "Targets":{
      "type":"list",
      "member":{"shape":"Target"},
      "min":1
    },
    "TaskId":{
      "type":"string",
      "max":40
    },
    "TaskIdList":{
      "type":"list",
      "member":{"shape":"TaskId"}
    },
    "TaskStatistics":{
      "type":"structure",
      "members":{
        "totalChecks":{
          "shape":"TotalChecksCount",
          "documentation":"<p>The number of checks in this audit.</p>"
        },
        "inProgressChecks":{
          "shape":"InProgressChecksCount",
          "documentation":"<p>The number of checks in progress.</p>"
        },
        "waitingForDataCollectionChecks":{
          "shape":"WaitingForDataCollectionChecksCount",
          "documentation":"<p>The number of checks waiting for data collection.</p>"
        },
        "compliantChecks":{
          "shape":"CompliantChecksCount",
          "documentation":"<p>The number of checks that found compliant resources.</p>"
        },
        "nonCompliantChecks":{
          "shape":"NonCompliantChecksCount",
          "documentation":"<p>The number of checks that found non-compliant resources.</p>"
        },
        "failedChecks":{
          "shape":"FailedChecksCount",
          "documentation":"<p>The number of checks </p>"
        },
        "canceledChecks":{
          "shape":"CanceledChecksCount",
          "documentation":"<p>The number of checks that did not run because the audit was canceled.</p>"
        }
      },
      "documentation":"<p>Statistics for the checks performed during the audit.</p>"
    },
    "TemplateBody":{"type":"string"},
    "TestAuthorizationRequest":{
      "type":"structure",
      "required":["authInfos"],
      "members":{
        "principal":{
          "shape":"Principal",
          "documentation":"<p>The principal.</p>"
        },
        "cognitoIdentityPoolId":{
          "shape":"CognitoIdentityPoolId",
          "documentation":"<p>The Cognito identity pool ID.</p>"
        },
        "authInfos":{
          "shape":"AuthInfos",
          "documentation":"<p>A list of authorization info objects. Simulating authorization will create a response for each <code>authInfo</code> object in the list.</p>"
        },
        "clientId":{
          "shape":"ClientId",
          "documentation":"<p>The MQTT client ID.</p>",
          "location":"querystring",
          "locationName":"clientId"
        },
        "policyNamesToAdd":{
          "shape":"PolicyNames",
          "documentation":"<p>When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized.</p>"
        },
        "policyNamesToSkip":{
          "shape":"PolicyNames",
          "documentation":"<p>When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized.</p>"
        }
      }
    },
    "TestAuthorizationResponse":{
      "type":"structure",
      "members":{
        "authResults":{
          "shape":"AuthResults",
          "documentation":"<p>The authentication results.</p>"
        }
      }
    },
    "TestInvokeAuthorizerRequest":{
      "type":"structure",
      "required":[
        "authorizerName",
        "token",
        "tokenSignature"
      ],
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The custom authorizer name.</p>",
          "location":"uri",
          "locationName":"authorizerName"
        },
        "token":{
          "shape":"Token",
          "documentation":"<p>The token returned by your custom authentication service.</p>"
        },
        "tokenSignature":{
          "shape":"TokenSignature",
          "documentation":"<p>The signature made with the token and your custom authentication service's private key.</p>"
        }
      }
    },
    "TestInvokeAuthorizerResponse":{
      "type":"structure",
      "members":{
        "isAuthenticated":{
          "shape":"IsAuthenticated",
          "documentation":"<p>True if the token is authenticated, otherwise false.</p>"
        },
        "principalId":{
          "shape":"PrincipalId",
          "documentation":"<p>The principal ID.</p>"
        },
        "policyDocuments":{
          "shape":"PolicyDocuments",
          "documentation":"<p>IAM policy documents.</p>"
        },
        "refreshAfterInSeconds":{
          "shape":"Seconds",
          "documentation":"<p>The number of seconds after which the temporary credentials are refreshed.</p>"
        },
        "disconnectAfterInSeconds":{
          "shape":"Seconds",
          "documentation":"<p>The number of seconds after which the connection is terminated.</p>"
        }
      }
    },
    "ThingArn":{"type":"string"},
    "ThingAttribute":{
      "type":"structure",
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing.</p>"
        },
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type, if the thing has been associated with a type.</p>"
        },
        "thingArn":{
          "shape":"ThingArn",
          "documentation":"<p>The thing ARN.</p>"
        },
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>A list of thing attributes which are name-value pairs.</p>"
        },
        "version":{
          "shape":"Version",
          "documentation":"<p>The version of the thing record in the registry.</p>"
        }
      },
      "documentation":"<p>The properties of the thing, including thing name, thing type name, and a list of thing attributes.</p>"
    },
    "ThingAttributeList":{
      "type":"list",
      "member":{"shape":"ThingAttribute"}
    },
    "ThingDocument":{
      "type":"structure",
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The thing name.</p>"
        },
        "thingId":{
          "shape":"ThingId",
          "documentation":"<p>The thing ID.</p>"
        },
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The thing type name.</p>"
        },
        "thingGroupNames":{
          "shape":"ThingGroupNameList",
          "documentation":"<p>Thing group names.</p>"
        },
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>The attributes.</p>"
        },
        "shadow":{
          "shape":"JsonDocument",
          "documentation":"<p>The shadow.</p>"
        }
      },
      "documentation":"<p>The thing search index document.</p>"
    },
    "ThingDocumentList":{
      "type":"list",
      "member":{"shape":"ThingDocument"}
    },
    "ThingGroupArn":{"type":"string"},
    "ThingGroupDescription":{
      "type":"string",
      "max":2028,
      "pattern":"[\\p{Graph}\\x20]*"
    },
    "ThingGroupDocument":{
      "type":"structure",
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The thing group name.</p>"
        },
        "thingGroupId":{
          "shape":"ThingGroupId",
          "documentation":"<p>The thing group ID.</p>"
        },
        "thingGroupDescription":{
          "shape":"ThingGroupDescription",
          "documentation":"<p>The thing group description.</p>"
        },
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>The thing group attributes.</p>"
        },
        "parentGroupNames":{
          "shape":"ThingGroupNameList",
          "documentation":"<p>Parent group names.</p>"
        }
      },
      "documentation":"<p>The thing group search index document.</p>"
    },
    "ThingGroupDocumentList":{
      "type":"list",
      "member":{"shape":"ThingGroupDocument"}
    },
    "ThingGroupId":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9\\-]+"
    },
    "ThingGroupIndexingConfiguration":{
      "type":"structure",
      "required":["thingGroupIndexingMode"],
      "members":{
        "thingGroupIndexingMode":{
          "shape":"ThingGroupIndexingMode",
          "documentation":"<p>Thing group indexing mode.</p>"
        }
      },
      "documentation":"<p>Thing group indexing configuration.</p>"
    },
    "ThingGroupIndexingMode":{
      "type":"string",
      "enum":[
        "OFF",
        "ON"
      ]
    },
    "ThingGroupList":{
      "type":"list",
      "member":{"shape":"ThingGroupName"}
    },
    "ThingGroupMetadata":{
      "type":"structure",
      "members":{
        "parentGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The parent thing group name.</p>"
        },
        "rootToParentThingGroups":{
          "shape":"ThingGroupNameAndArnList",
          "documentation":"<p>The root parent thing group.</p>"
        },
        "creationDate":{
          "shape":"CreationDate",
          "documentation":"<p>The UNIX timestamp of when the thing group was created.</p>"
        }
      },
      "documentation":"<p>Thing group metadata.</p>"
    },
    "ThingGroupName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9:_-]+"
    },
    "ThingGroupNameAndArnList":{
      "type":"list",
      "member":{"shape":"GroupNameAndArn"}
    },
    "ThingGroupNameList":{
      "type":"list",
      "member":{"shape":"ThingGroupName"}
    },
    "ThingGroupProperties":{
      "type":"structure",
      "members":{
        "thingGroupDescription":{
          "shape":"ThingGroupDescription",
          "documentation":"<p>The thing group description.</p>"
        },
        "attributePayload":{
          "shape":"AttributePayload",
          "documentation":"<p>The thing group attributes in JSON format.</p>"
        }
      },
      "documentation":"<p>Thing group properties.</p>"
    },
    "ThingId":{"type":"string"},
    "ThingIndexingConfiguration":{
      "type":"structure",
      "required":["thingIndexingMode"],
      "members":{
        "thingIndexingMode":{
          "shape":"ThingIndexingMode",
          "documentation":"<p>Thing indexing mode. Valid values are: </p> <ul> <li> <p>REGISTRY – Your thing index will contain only registry data.</p> </li> <li> <p>REGISTRY_AND_SHADOW - Your thing index will contain registry and shadow data.</p> </li> <li> <p>OFF - Thing indexing is disabled.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Thing indexing configuration.</p>"
    },
    "ThingIndexingMode":{
      "type":"string",
      "enum":[
        "OFF",
        "REGISTRY",
        "REGISTRY_AND_SHADOW"
      ]
    },
    "ThingName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9:_-]+"
    },
    "ThingNameList":{
      "type":"list",
      "member":{"shape":"ThingName"}
    },
    "ThingTypeArn":{"type":"string"},
    "ThingTypeDefinition":{
      "type":"structure",
      "members":{
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type.</p>"
        },
        "thingTypeArn":{
          "shape":"ThingTypeArn",
          "documentation":"<p>The thing type ARN.</p>"
        },
        "thingTypeProperties":{
          "shape":"ThingTypeProperties",
          "documentation":"<p>The ThingTypeProperties for the thing type.</p>"
        },
        "thingTypeMetadata":{
          "shape":"ThingTypeMetadata",
          "documentation":"<p>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.</p>"
        }
      },
      "documentation":"<p>The definition of the thing type, including thing type name and description.</p>"
    },
    "ThingTypeDescription":{
      "type":"string",
      "max":2028,
      "pattern":"[\\p{Graph}\\x20]*"
    },
    "ThingTypeId":{"type":"string"},
    "ThingTypeList":{
      "type":"list",
      "member":{"shape":"ThingTypeDefinition"}
    },
    "ThingTypeMetadata":{
      "type":"structure",
      "members":{
        "deprecated":{
          "shape":"Boolean",
          "documentation":"<p>Whether the thing type is deprecated. If <b>true</b>, no new things could be associated with this type.</p>"
        },
        "deprecationDate":{
          "shape":"DeprecationDate",
          "documentation":"<p>The date and time when the thing type was deprecated.</p>"
        },
        "creationDate":{
          "shape":"CreationDate",
          "documentation":"<p>The date and time when the thing type was created.</p>"
        }
      },
      "documentation":"<p>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.</p>"
    },
    "ThingTypeName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9:_-]+"
    },
    "ThingTypeProperties":{
      "type":"structure",
      "members":{
        "thingTypeDescription":{
          "shape":"ThingTypeDescription",
          "documentation":"<p>The description of the thing type.</p>"
        },
        "searchableAttributes":{
          "shape":"SearchableAttributes",
          "documentation":"<p>A list of searchable thing attribute names.</p>"
        }
      },
      "documentation":"<p>The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.</p>"
    },
    "ThrottlingException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The rate exceeds the limit.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "Timestamp":{"type":"timestamp"},
    "Token":{
      "type":"string",
      "max":6144,
      "min":1
    },
    "TokenKeyName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9_-]+"
    },
    "TokenSignature":{
      "type":"string",
      "max":2560,
      "min":1,
      "pattern":"[A-Za-z0-9+/]+={0,2}"
    },
    "Topic":{"type":"string"},
    "TopicPattern":{"type":"string"},
    "TopicRule":{
      "type":"structure",
      "members":{
        "ruleName":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        },
        "sql":{
          "shape":"SQL",
          "documentation":"<p>The SQL statement used to query the topic. When using a SQL query with multiple lines, be sure to escape the newline characters.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>The description of the rule.</p>"
        },
        "createdAt":{
          "shape":"CreatedAtDate",
          "documentation":"<p>The date and time the rule was created.</p>"
        },
        "actions":{
          "shape":"ActionList",
          "documentation":"<p>The actions associated with the rule.</p>"
        },
        "ruleDisabled":{
          "shape":"IsDisabled",
          "documentation":"<p>Specifies whether the rule is disabled.</p>"
        },
        "awsIotSqlVersion":{
          "shape":"AwsIotSqlVersion",
          "documentation":"<p>The version of the SQL rules engine to use when evaluating the rule.</p>"
        },
        "errorAction":{
          "shape":"Action",
          "documentation":"<p>The action to perform when an error occurs.</p>"
        }
      },
      "documentation":"<p>Describes a rule.</p>"
    },
    "TopicRuleList":{
      "type":"list",
      "member":{"shape":"TopicRuleListItem"}
    },
    "TopicRuleListItem":{
      "type":"structure",
      "members":{
        "ruleArn":{
          "shape":"RuleArn",
          "documentation":"<p>The rule ARN.</p>"
        },
        "ruleName":{
          "shape":"RuleName",
          "documentation":"<p>The name of the rule.</p>"
        },
        "topicPattern":{
          "shape":"TopicPattern",
          "documentation":"<p>The pattern for the topic names that apply.</p>"
        },
        "createdAt":{
          "shape":"CreatedAtDate",
          "documentation":"<p>The date and time the rule was created.</p>"
        },
        "ruleDisabled":{
          "shape":"IsDisabled",
          "documentation":"<p>Specifies whether the rule is disabled.</p>"
        }
      },
      "documentation":"<p>Describes a rule.</p>"
    },
    "TopicRulePayload":{
      "type":"structure",
      "required":[
        "sql",
        "actions"
      ],
      "members":{
        "sql":{
          "shape":"SQL",
          "documentation":"<p>The SQL statement used to query the topic. For more information, see <a href=\"http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference\">AWS IoT SQL Reference</a> in the <i>AWS IoT Developer Guide</i>.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>The description of the rule.</p>"
        },
        "actions":{
          "shape":"ActionList",
          "documentation":"<p>The actions associated with the rule.</p>"
        },
        "ruleDisabled":{
          "shape":"IsDisabled",
          "documentation":"<p>Specifies whether the rule is disabled.</p>"
        },
        "awsIotSqlVersion":{
          "shape":"AwsIotSqlVersion",
          "documentation":"<p>The version of the SQL rules engine to use when evaluating the rule.</p>"
        },
        "errorAction":{
          "shape":"Action",
          "documentation":"<p>The action to take when an error occurs.</p>"
        }
      },
      "documentation":"<p>Describes a rule.</p>"
    },
    "TotalChecksCount":{"type":"integer"},
    "TotalResourcesCount":{"type":"long"},
    "TransferAlreadyCompletedException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>You can't revert the certificate transfer because the transfer is already complete.</p>",
      "error":{"httpStatusCode":410},
      "exception":true
    },
    "TransferCertificateRequest":{
      "type":"structure",
      "required":[
        "certificateId",
        "targetAwsAccount"
      ],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>",
          "location":"uri",
          "locationName":"certificateId"
        },
        "targetAwsAccount":{
          "shape":"AwsAccountId",
          "documentation":"<p>The AWS account.</p>",
          "location":"querystring",
          "locationName":"targetAwsAccount"
        },
        "transferMessage":{
          "shape":"Message",
          "documentation":"<p>The transfer message.</p>"
        }
      },
      "documentation":"<p>The input for the TransferCertificate operation.</p>"
    },
    "TransferCertificateResponse":{
      "type":"structure",
      "members":{
        "transferredCertificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The ARN of the certificate.</p>"
        }
      },
      "documentation":"<p>The output from the TransferCertificate operation.</p>"
    },
    "TransferConflictException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>You can't transfer the certificate because authorization policies are still attached.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "TransferData":{
      "type":"structure",
      "members":{
        "transferMessage":{
          "shape":"Message",
          "documentation":"<p>The transfer message.</p>"
        },
        "rejectReason":{
          "shape":"Message",
          "documentation":"<p>The reason why the transfer was rejected.</p>"
        },
        "transferDate":{
          "shape":"DateType",
          "documentation":"<p>The date the transfer took place.</p>"
        },
        "acceptDate":{
          "shape":"DateType",
          "documentation":"<p>The date the transfer was accepted.</p>"
        },
        "rejectDate":{
          "shape":"DateType",
          "documentation":"<p>The date the transfer was rejected.</p>"
        }
      },
      "documentation":"<p>Data used to transfer a certificate to an AWS account.</p>"
    },
    "UnauthorizedException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>You are not authorized to perform this operation.</p>",
      "error":{"httpStatusCode":401},
      "exception":true
    },
    "UndoDeprecate":{"type":"boolean"},
    "UnsignedLong":{
      "type":"long",
      "min":0
    },
    "UpdateAccountAuditConfigurationRequest":{
      "type":"structure",
      "members":{
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as necessary when performing an audit.</p>"
        },
        "auditNotificationTargetConfigurations":{
          "shape":"AuditNotificationTargetConfigurations",
          "documentation":"<p>Information about the targets to which audit notifications are sent.</p>"
        },
        "auditCheckConfigurations":{
          "shape":"AuditCheckConfigurations",
          "documentation":"<p>Specifies which audit checks are enabled and disabled for this account. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks including those that are currently enabled.</p> <p>Note that some data collection may begin immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.</p> <p>You cannot disable a check if it is used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code> this parameter is required and must specify at least one enabled check.</p>"
        }
      }
    },
    "UpdateAccountAuditConfigurationResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateAuthorizerRequest":{
      "type":"structure",
      "required":["authorizerName"],
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The authorizer name.</p>",
          "location":"uri",
          "locationName":"authorizerName"
        },
        "authorizerFunctionArn":{
          "shape":"AuthorizerFunctionArn",
          "documentation":"<p>The ARN of the authorizer's Lambda function.</p>"
        },
        "tokenKeyName":{
          "shape":"TokenKeyName",
          "documentation":"<p>The key used to extract the token from the HTTP headers. </p>"
        },
        "tokenSigningPublicKeys":{
          "shape":"PublicKeyMap",
          "documentation":"<p>The public keys used to verify the token signature.</p>"
        },
        "status":{
          "shape":"AuthorizerStatus",
          "documentation":"<p>The status of the update authorizer request.</p>"
        }
      }
    },
    "UpdateAuthorizerResponse":{
      "type":"structure",
      "members":{
        "authorizerName":{
          "shape":"AuthorizerName",
          "documentation":"<p>The authorizer name.</p>"
        },
        "authorizerArn":{
          "shape":"AuthorizerArn",
          "documentation":"<p>The authorizer ARN.</p>"
        }
      }
    },
    "UpdateCACertificateRequest":{
      "type":"structure",
      "required":["certificateId"],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The CA certificate identifier.</p>",
          "location":"uri",
          "locationName":"caCertificateId"
        },
        "newStatus":{
          "shape":"CACertificateStatus",
          "documentation":"<p>The updated status of the CA certificate.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>",
          "location":"querystring",
          "locationName":"newStatus"
        },
        "newAutoRegistrationStatus":{
          "shape":"AutoRegistrationStatus",
          "documentation":"<p>The new value for the auto registration status. Valid values are: \"ENABLE\" or \"DISABLE\".</p>",
          "location":"querystring",
          "locationName":"newAutoRegistrationStatus"
        },
        "registrationConfig":{
          "shape":"RegistrationConfig",
          "documentation":"<p>Information about the registration configuration.</p>"
        },
        "removeAutoRegistration":{
          "shape":"RemoveAutoRegistration",
          "documentation":"<p>If true, remove auto registration.</p>"
        }
      },
      "documentation":"<p>The input to the UpdateCACertificate operation.</p>"
    },
    "UpdateCertificateRequest":{
      "type":"structure",
      "required":[
        "certificateId",
        "newStatus"
      ],
      "members":{
        "certificateId":{
          "shape":"CertificateId",
          "documentation":"<p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>",
          "location":"uri",
          "locationName":"certificateId"
        },
        "newStatus":{
          "shape":"CertificateStatus",
          "documentation":"<p>The new status.</p> <p> <b>Note:</b> Setting the status to PENDING_TRANSFER will result in an exception being thrown. PENDING_TRANSFER is a status used internally by AWS IoT. It is not intended for developer use.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>",
          "location":"querystring",
          "locationName":"newStatus"
        }
      },
      "documentation":"<p>The input for the UpdateCertificate operation.</p>"
    },
    "UpdateEventConfigurationsRequest":{
      "type":"structure",
      "members":{
        "eventConfigurations":{
          "shape":"EventConfigurations",
          "documentation":"<p>The new event configuration values.</p>"
        }
      }
    },
    "UpdateEventConfigurationsResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateIndexingConfigurationRequest":{
      "type":"structure",
      "members":{
        "thingIndexingConfiguration":{
          "shape":"ThingIndexingConfiguration",
          "documentation":"<p>Thing indexing configuration.</p>"
        },
        "thingGroupIndexingConfiguration":{
          "shape":"ThingGroupIndexingConfiguration",
          "documentation":"<p>Thing group indexing configuration.</p>"
        }
      }
    },
    "UpdateIndexingConfigurationResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateRoleAliasRequest":{
      "type":"structure",
      "required":["roleAlias"],
      "members":{
        "roleAlias":{
          "shape":"RoleAlias",
          "documentation":"<p>The role alias to update.</p>",
          "location":"uri",
          "locationName":"roleAlias"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The role ARN.</p>"
        },
        "credentialDurationSeconds":{
          "shape":"CredentialDurationSeconds",
          "documentation":"<p>The number of seconds the credential will be valid.</p>"
        }
      }
    },
    "UpdateRoleAliasResponse":{
      "type":"structure",
      "members":{
        "roleAlias":{
          "shape":"RoleAlias",
          "documentation":"<p>The role alias.</p>"
        },
        "roleAliasArn":{
          "shape":"RoleAliasArn",
          "documentation":"<p>The role alias ARN.</p>"
        }
      }
    },
    "UpdateScheduledAuditRequest":{
      "type":"structure",
      "required":["scheduledAuditName"],
      "members":{
        "frequency":{
          "shape":"AuditFrequency",
          "documentation":"<p>How often the scheduled audit takes place. Can be one of \"DAILY\", \"WEEKLY\", \"BIWEEKLY\" or \"MONTHLY\". The actual start time of each audit is determined by the system.</p>"
        },
        "dayOfMonth":{
          "shape":"DayOfMonth",
          "documentation":"<p>The day of the month on which the scheduled audit takes place. Can be \"1\" through \"31\" or \"LAST\". This field is required if the \"frequency\" parameter is set to \"MONTHLY\". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the \"LAST\" day of the month.</p>"
        },
        "dayOfWeek":{
          "shape":"DayOfWeek",
          "documentation":"<p>The day of the week on which the scheduled audit takes place. Can be one of \"SUN\", \"MON\", \"TUE\", \"WED\", \"THU\", \"FRI\" or \"SAT\". This field is required if the \"frequency\" parameter is set to \"WEEKLY\" or \"BIWEEKLY\".</p>"
        },
        "targetCheckNames":{
          "shape":"TargetAuditCheckNames",
          "documentation":"<p>Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)</p>"
        },
        "scheduledAuditName":{
          "shape":"ScheduledAuditName",
          "documentation":"<p>The name of the scheduled audit. (Max. 128 chars)</p>",
          "location":"uri",
          "locationName":"scheduledAuditName"
        }
      }
    },
    "UpdateScheduledAuditResponse":{
      "type":"structure",
      "members":{
        "scheduledAuditArn":{
          "shape":"ScheduledAuditArn",
          "documentation":"<p>The ARN of the scheduled audit.</p>"
        }
      }
    },
    "UpdateSecurityProfileRequest":{
      "type":"structure",
      "required":["securityProfileName"],
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name of the security profile you want to update.</p>",
          "location":"uri",
          "locationName":"securityProfileName"
        },
        "securityProfileDescription":{
          "shape":"SecurityProfileDescription",
          "documentation":"<p>A description of the security profile.</p>"
        },
        "behaviors":{
          "shape":"Behaviors",
          "documentation":"<p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>"
        },
        "alertTargets":{
          "shape":"AlertTargets",
          "documentation":"<p>Where the alerts are sent. (Alerts are always sent to the console.)</p>"
        },
        "expectedVersion":{
          "shape":"OptionalVersion",
          "documentation":"<p>The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different than the actual version, a <code>VersionConflictException</code> is thrown.</p>",
          "location":"querystring",
          "locationName":"expectedVersion"
        }
      }
    },
    "UpdateSecurityProfileResponse":{
      "type":"structure",
      "members":{
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name of the security profile that was updated.</p>"
        },
        "securityProfileArn":{
          "shape":"SecurityProfileArn",
          "documentation":"<p>The ARN of the security profile that was updated.</p>"
        },
        "securityProfileDescription":{
          "shape":"SecurityProfileDescription",
          "documentation":"<p>The description of the security profile.</p>"
        },
        "behaviors":{
          "shape":"Behaviors",
          "documentation":"<p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>"
        },
        "alertTargets":{
          "shape":"AlertTargets",
          "documentation":"<p>Where the alerts are sent. (Alerts are always sent to the console.)</p>"
        },
        "version":{
          "shape":"Version",
          "documentation":"<p>The updated version of the security profile.</p>"
        },
        "creationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The time the security profile was created.</p>"
        },
        "lastModifiedDate":{
          "shape":"Timestamp",
          "documentation":"<p>The time the security profile was last modified.</p>"
        }
      }
    },
    "UpdateStreamRequest":{
      "type":"structure",
      "required":["streamId"],
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>",
          "location":"uri",
          "locationName":"streamId"
        },
        "description":{
          "shape":"StreamDescription",
          "documentation":"<p>The description of the stream.</p>"
        },
        "files":{
          "shape":"StreamFiles",
          "documentation":"<p>The files associated with the stream.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>"
        }
      }
    },
    "UpdateStreamResponse":{
      "type":"structure",
      "members":{
        "streamId":{
          "shape":"StreamId",
          "documentation":"<p>The stream ID.</p>"
        },
        "streamArn":{
          "shape":"StreamArn",
          "documentation":"<p>The stream ARN.</p>"
        },
        "description":{
          "shape":"StreamDescription",
          "documentation":"<p>A description of the stream.</p>"
        },
        "streamVersion":{
          "shape":"StreamVersion",
          "documentation":"<p>The stream version.</p>"
        }
      }
    },
    "UpdateThingGroupRequest":{
      "type":"structure",
      "required":[
        "thingGroupName",
        "thingGroupProperties"
      ],
      "members":{
        "thingGroupName":{
          "shape":"ThingGroupName",
          "documentation":"<p>The thing group to update.</p>",
          "location":"uri",
          "locationName":"thingGroupName"
        },
        "thingGroupProperties":{
          "shape":"ThingGroupProperties",
          "documentation":"<p>The thing group properties.</p>"
        },
        "expectedVersion":{
          "shape":"OptionalVersion",
          "documentation":"<p>The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail.</p>"
        }
      }
    },
    "UpdateThingGroupResponse":{
      "type":"structure",
      "members":{
        "version":{
          "shape":"Version",
          "documentation":"<p>The version of the updated thing group.</p>"
        }
      }
    },
    "UpdateThingGroupsForThingRequest":{
      "type":"structure",
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The thing whose group memberships will be updated.</p>"
        },
        "thingGroupsToAdd":{
          "shape":"ThingGroupList",
          "documentation":"<p>The groups to which the thing will be added.</p>"
        },
        "thingGroupsToRemove":{
          "shape":"ThingGroupList",
          "documentation":"<p>The groups from which the thing will be removed.</p>"
        }
      }
    },
    "UpdateThingGroupsForThingResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateThingRequest":{
      "type":"structure",
      "required":["thingName"],
      "members":{
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing to update.</p>",
          "location":"uri",
          "locationName":"thingName"
        },
        "thingTypeName":{
          "shape":"ThingTypeName",
          "documentation":"<p>The name of the thing type.</p>"
        },
        "attributePayload":{
          "shape":"AttributePayload",
          "documentation":"<p>A list of thing attributes, a JSON string containing name-value pairs. For example:</p> <p> <code>{\\\"attributes\\\":{\\\"name1\\\":\\\"value2\\\"}}</code> </p> <p>This data is used to add new attributes or update existing attributes.</p>"
        },
        "expectedVersion":{
          "shape":"OptionalVersion",
          "documentation":"<p>The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>UpdateThing</code> request is rejected with a <code>VersionConflictException</code>.</p>"
        },
        "removeThingType":{
          "shape":"RemoveThingType",
          "documentation":"<p>Remove a thing type association. If <b>true</b>, the association is removed.</p>"
        }
      },
      "documentation":"<p>The input for the UpdateThing operation.</p>"
    },
    "UpdateThingResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output from the UpdateThing operation.</p>"
    },
    "UseBase64":{"type":"boolean"},
    "Valid":{"type":"boolean"},
    "ValidateSecurityProfileBehaviorsRequest":{
      "type":"structure",
      "required":["behaviors"],
      "members":{
        "behaviors":{
          "shape":"Behaviors",
          "documentation":"<p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>"
        }
      }
    },
    "ValidateSecurityProfileBehaviorsResponse":{
      "type":"structure",
      "members":{
        "valid":{
          "shape":"Valid",
          "documentation":"<p>True if the behaviors were valid.</p>"
        },
        "validationErrors":{
          "shape":"ValidationErrors",
          "documentation":"<p>The list of any errors found in the behaviors.</p>"
        }
      }
    },
    "ValidationError":{
      "type":"structure",
      "members":{
        "errorMessage":{
          "shape":"ErrorMessage",
          "documentation":"<p>The description of an error found in the behaviors.</p>"
        }
      },
      "documentation":"<p>Information about an error found in a behavior specification.</p>"
    },
    "ValidationErrors":{
      "type":"list",
      "member":{"shape":"ValidationError"}
    },
    "Value":{"type":"string"},
    "Version":{"type":"long"},
    "VersionConflictException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "VersionNumber":{"type":"long"},
    "VersionsLimitExceededException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"errorMessage",
          "documentation":"<p>The message for the exception.</p>"
        }
      },
      "documentation":"<p>The number of policy versions exceeds the limit.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "ViolationEvent":{
      "type":"structure",
      "members":{
        "violationId":{
          "shape":"ViolationId",
          "documentation":"<p>The ID of the violation event.</p>"
        },
        "thingName":{
          "shape":"ThingName",
          "documentation":"<p>The name of the thing responsible for the violation event.</p>"
        },
        "securityProfileName":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name of the security profile whose behavior was violated.</p>"
        },
        "behavior":{
          "shape":"Behavior",
          "documentation":"<p>The behavior which was violated.</p>"
        },
        "metricValue":{
          "shape":"MetricValue",
          "documentation":"<p>The value of the metric (the measurement).</p>"
        },
        "violationEventType":{
          "shape":"ViolationEventType",
          "documentation":"<p>The type of violation event.</p>"
        },
        "violationEventTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the violation event occurred.</p>"
        }
      },
      "documentation":"<p>Information about a Device Defender security profile behavior violation.</p>"
    },
    "ViolationEventType":{
      "type":"string",
      "enum":[
        "in-alarm",
        "alarm-cleared",
        "alarm-invalidated"
      ]
    },
    "ViolationEvents":{
      "type":"list",
      "member":{"shape":"ViolationEvent"}
    },
    "ViolationId":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9\\-]+"
    },
    "WaitingForDataCollectionChecksCount":{"type":"integer"},
    "errorMessage":{"type":"string"},
    "resourceArn":{"type":"string"},
    "resourceId":{"type":"string"}
  },
  "documentation":"<fullname>AWS IoT</fullname> <p>AWS IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices.</p> <p>For more information about how AWS IoT works, see the <a href=\"http://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html\">Developer Guide</a>.</p> <p>For information about how to use the credentials provider for AWS IoT, see <a href=\"http://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html\">Authorizing Direct Calls to AWS Services</a>.</p>"
}
