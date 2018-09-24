awsim['organizations'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-11-28",
    "endpointPrefix":"organizations",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"Organizations",
    "serviceFullName":"AWS Organizations",
    "serviceId":"Organizations",
    "signatureVersion":"v4",
    "targetPrefix":"AWSOrganizationsV20161128",
    "uid":"organizations-2016-11-28"
  },
  "operations":{
    "AcceptHandshake":{
      "name":"AcceptHandshake",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AcceptHandshakeRequest"},
      "output":{"shape":"AcceptHandshakeResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"HandshakeConstraintViolationException"},
        {"shape":"HandshakeNotFoundException"},
        {"shape":"InvalidHandshakeTransitionException"},
        {"shape":"HandshakeAlreadyInStateException"},
        {"shape":"InvalidInputException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"AccessDeniedForDependencyException"}
      ],
      "documentation":"<p>Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request. </p> <p>This operation can be called only by the following principals when they also have the relevant IAM permissions:</p> <ul> <li> <p> <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from the member account. </p> <p>The user who calls the API for an invitation to join must have the <code>organizations:AcceptHandshake</code> permission. If you enabled all features in the organization, then the user must also have the <code>iam:CreateServiceLinkedRole</code> permission so that Organizations can create the required service-linked role named <i>AWSServiceRoleForOrganizations</i>. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles\">AWS Organizations and Service-Linked Roles</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p> <b>Enable all features final confirmation</b> handshake: only a principal from the master account.</p> <p>For more information about invitations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html\">Inviting an AWS Account to Join Your Organization</a> in the <i>AWS Organizations User Guide</i>. For more information about requests to enable all features in the organization, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html\">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide</i>.</p> </li> </ul> <p>After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.</p>"
    },
    "AttachPolicy":{
      "name":"AttachPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AttachPolicyRequest"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"DuplicatePolicyAttachmentException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyNotFoundException"},
        {"shape":"PolicyTypeNotEnabledException"},
        {"shape":"ServiceException"},
        {"shape":"TargetNotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy:</p> <ul> <li> <p> <b>Service control policy (SCP)</b> - An SCP specifies what permissions can be delegated to users in affected member accounts. The scope of influence for a policy depends on what you attach the policy to:</p> <ul> <li> <p>If you attach an SCP to a root, it affects all accounts in the organization.</p> </li> <li> <p>If you attach an SCP to an OU, it affects all accounts in that OU and in any child OUs.</p> </li> <li> <p>If you attach the policy directly to an account, then it affects only that account.</p> </li> </ul> <p>SCPs essentially are permission \"filters\". When you attach one SCP to a higher level root or OU, and you also attach a different SCP to a child OU or to an account, the child policy can further restrict only the permissions that pass through the parent filter and are available to the child. An SCP that is attached to a child cannot grant a permission that is not already granted by the parent. For example, imagine that the parent SCP allows permissions A, B, C, D, and E. The child SCP allows C, D, E, F, and G. The result is that the accounts affected by the child SCP are allowed to use only C, D, and E. They cannot use A or B because they were filtered out by the child OU. They also cannot use F and G because they were filtered out by the parent OU. They cannot be granted back by the child SCP; child SCPs can only filter the permissions they receive from the parent SCP.</p> <p>AWS Organizations attaches a default SCP named <code>\"FullAWSAccess</code> to every root, OU, and account. This default SCP allows all services and actions, enabling any new child OU or account to inherit the permissions of the parent root or OU. If you detach the default policy, you must replace it with a policy that specifies the permissions that you want to allow in that OU or account.</p> <p>For more information about how Organizations policies permissions work, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html\">Using Service Control Policies</a> in the <i>AWS Organizations User Guide</i>.</p> </li> </ul> <p>This operation can be called only from the organization's master account.</p>"
    },
    "CancelHandshake":{
      "name":"CancelHandshake",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CancelHandshakeRequest"},
      "output":{"shape":"CancelHandshakeResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"HandshakeNotFoundException"},
        {"shape":"InvalidHandshakeTransitionException"},
        {"shape":"HandshakeAlreadyInStateException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Cancels a handshake. Canceling a handshake sets the handshake state to <code>CANCELED</code>. </p> <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient can no longer respond to that handshake.</p> <p>After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.</p>"
    },
    "CreateAccount":{
      "name":"CreateAccount",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateAccountRequest"},
      "output":{"shape":"CreateAccountResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"FinalizingOrganizationException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates an AWS account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that AWS performs in the background. Because <code>CreateAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For information on using AWS CloudTrail with Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html\">Monitoring the Activity in Your Organization</a> in the <i>AWS Organizations User Guide</i>.</p> </li> </ul> <p/> <p>The user who calls the API to create an account must have the <code>organizations:CreateAccount</code> permission. If you enabled all features in the organization, AWS Organizations will create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs\">AWS Organizations and Service-Linked Roles</a> in the <i>AWS Organizations User Guide</i>.</p> <p>AWS Organizations preconfigures the new member account with a role (named <code>OrganizationAccountAccessRole</code> by default) that grants users in the master account administrator permissions in the new member account. Principals in the master account can assume the role. AWS Organizations clones the company name and address information for the new account from the organization's master account.</p> <p>This operation can be called only from the organization's master account.</p> <p>For more information about creating accounts, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html\">Creating an AWS Account in Your Organization</a> in the <i>AWS Organizations User Guide</i>.</p> <important> <ul> <li> <p>When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info\"> To leave an organization as a member account</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href=\"https://console.aws.amazon.com/support/home#/\">AWS Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href=\"https://console.aws.amazon.com/support/home#/\">AWS Support</a>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html\">Granting Access to Your Billing Information and Tools</a>.</p> </note>"
    },
    "CreateOrganization":{
      "name":"CreateOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateOrganizationRequest"},
      "output":{"shape":"CreateOrganizationResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AlreadyInOrganizationException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"AccessDeniedForDependencyException"}
      ],
      "documentation":"<p>Creates an AWS organization. The account whose user is calling the CreateOrganization operation automatically becomes the <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/orgs_getting-started_concepts.html#account\">master account</a> of the new organization.</p> <p>This operation must be called using credentials from the account that is to become the new organization's master account. The principal must also have the relevant IAM permissions.</p> <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the <code>FeatureSet</code> parameter to <code>CONSOLIDATED_BILLING\"</code>, then no policy types are enabled by default and you cannot use organization policies.</p>"
    },
    "CreateOrganizationalUnit":{
      "name":"CreateOrganizationalUnit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateOrganizationalUnitRequest"},
      "output":{"shape":"CreateOrganizationalUnitResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"DuplicateOrganizationalUnitException"},
        {"shape":"InvalidInputException"},
        {"shape":"ParentNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five. </p> <p>For more information about OUs, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html\">Managing Organizational Units</a> in the <i>AWS Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "CreatePolicy":{
      "name":"CreatePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePolicyRequest"},
      "output":{"shape":"CreatePolicyResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"DuplicatePolicyException"},
        {"shape":"InvalidInputException"},
        {"shape":"MalformedPolicyDocumentException"},
        {"shape":"PolicyTypeNotAvailableForOrganizationException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual AWS account.</p> <p>For more information about policies and their use, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html\">Managing Organization Policies</a>.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DeclineHandshake":{
      "name":"DeclineHandshake",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeclineHandshakeRequest"},
      "output":{"shape":"DeclineHandshakeResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"HandshakeNotFoundException"},
        {"shape":"InvalidHandshakeTransitionException"},
        {"shape":"HandshakeAlreadyInStateException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code> and effectively deactivates the request.</p> <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a> instead. The originator can't reactivate a declined request, but can re-initiate the process with a new handshake request.</p> <p>After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that it is deleted.</p>"
    },
    "DeleteOrganization":{
      "name":"DeleteOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidInputException"},
        {"shape":"OrganizationNotEmptyException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes the organization. You can delete an organization only by using credentials from the master account. The organization must be empty of member accounts.</p>"
    },
    "DeleteOrganizationalUnit":{
      "name":"DeleteOrganizationalUnit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteOrganizationalUnitRequest"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidInputException"},
        {"shape":"OrganizationalUnitNotEmptyException"},
        {"shape":"OrganizationalUnitNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DeletePolicy":{
      "name":"DeletePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeletePolicyRequest"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyInUseException"},
        {"shape":"PolicyNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DescribeAccount":{
      "name":"DescribeAccount",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAccountRequest"},
      "output":{"shape":"DescribeAccountResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AccountNotFoundException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Retrieves Organizations-related information about the specified account.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DescribeCreateAccountStatus":{
      "name":"DescribeCreateAccountStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeCreateAccountStatusRequest"},
      "output":{"shape":"DescribeCreateAccountStatusResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"CreateAccountStatusNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Retrieves the current status of an asynchronous request to create an account.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DescribeHandshake":{
      "name":"DescribeHandshake",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeHandshakeRequest"},
      "output":{"shape":"DescribeHandshakeResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"HandshakeNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original <a>InviteAccountToOrganization</a> operation that generated the handshake.</p> <p>You can access handshakes that are ACCEPTED, DECLINED, or CANCELED for only 30 days after they change to that state. They are then deleted and no longer accessible.</p> <p>This operation can be called from any account in the organization.</p>"
    },
    "DescribeOrganization":{
      "name":"DescribeOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "output":{"shape":"DescribeOrganizationResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Retrieves information about the organization that the user's account belongs to.</p> <p>This operation can be called from any account in the organization.</p> <note> <p>Even if a policy type is shown as available in the organization, it can be disabled separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified root.</p> </note>"
    },
    "DescribeOrganizationalUnit":{
      "name":"DescribeOrganizationalUnit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeOrganizationalUnitRequest"},
      "output":{"shape":"DescribeOrganizationalUnitResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"OrganizationalUnitNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Retrieves information about an organizational unit (OU).</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DescribePolicy":{
      "name":"DescribePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribePolicyRequest"},
      "output":{"shape":"DescribePolicyResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Retrieves information about a policy.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DetachPolicy":{
      "name":"DetachPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetachPolicyRequest"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyNotAttachedException"},
        {"shape":"PolicyNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TargetNotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Detaches a policy from a target root, organizational unit (OU), or account. If the policy being detached is a service control policy (SCP), the changes to permissions for IAM users and roles in affected accounts are immediate.</p> <p> <b>Note:</b> Every root, OU, and account must have at least one SCP attached. If you want to replace the default <code>FullAWSAccess</code> policy with one that limits the permissions that can be delegated, then you must attach the replacement policy before you can remove the default one. This is the authorization strategy of <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html#orgs_policies_whitelist\">whitelisting</a>. If you instead attach a second SCP and leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>\"Effect\": \"Deny\"</code> in the second SCP to override the <code>\"Effect\": \"Allow\"</code> in the <code>FullAWSAccess</code> policy (or any other attached SCP), then you are using the authorization strategy of <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html#orgs_policies_blacklist\">blacklisting</a>. </p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DisableAWSServiceAccess":{
      "name":"DisableAWSServiceAccess",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisableAWSServiceAccessRequest"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Disables the integration of an AWS service (the service that is specified by <code>ServicePrincipal</code>) with AWS Organizations. When you disable integration, the specified service no longer can create a <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html\">service-linked role</a> in <i>new</i> accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from AWS Organizations.</p> <p/> <important> <p>We recommend that you disable integration between AWS Organizations and the specified AWS service by using the console or commands that are provided by the specified service. Doing so ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other AWS service.</p> </important> <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified service can no longer perform operations in your organization's accounts unless the operations are explicitly permitted by the IAM policies that are attached to your roles. </p> <p>For more information about integrating other services with AWS Organizations, including the list of services that work with Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html\">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "DisablePolicyType":{
      "name":"DisablePolicyType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisablePolicyTypeRequest"},
      "output":{"shape":"DisablePolicyTypeResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyTypeNotEnabledException"},
        {"shape":"RootNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Disables an organizational control policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the <a>EnablePolicyType</a> operation.</p> <p>This operation can be called only from the organization's master account.</p> <note> <p>If you disable a policy type for a root, it still shows as enabled for the organization if all features are enabled in that organization. Use <a>ListRoots</a> to see the status of policy types for a specified root. Use <a>DescribeOrganization</a> to see the status of policy types in the organization.</p> </note>"
    },
    "EnableAWSServiceAccess":{
      "name":"EnableAWSServiceAccess",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"EnableAWSServiceAccessRequest"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Enables the integration of an AWS service (the service that is specified by <code>ServicePrincipal</code>) with AWS Organizations. When you enable integration, you allow the specified service to create a <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html\">service-linked role</a> in all the accounts in your organization. This allows the service to perform operations on your behalf in your organization and its accounts.</p> <important> <p>We recommend that you enable integration between AWS Organizations and the specified AWS service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization's accounts depends on that service. For more information, see the documentation for the other AWS service.</p> </important> <p>For more information about enabling services to integrate with AWS Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html\">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's master account and only if the organization has <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html\">enabled all features</a>.</p>"
    },
    "EnableAllFeatures":{
      "name":"EnableAllFeatures",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"EnableAllFeaturesRequest"},
      "output":{"shape":"EnableAllFeaturesResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"HandshakeConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can't use any of the advanced account administration features that AWS Organizations supports. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html\">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide</i>.</p> <important> <p>This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.</p> </important> <p>After you enable all features, you can separately enable or disable individual policy types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use <a>ListRoots</a>.</p> <p>After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains <code>\"Action\": \"ENABLE_ALL_FEATURES\"</code>. This completes the change.</p> <p>After you enable all features in your organization, the master account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The master account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this.</p> <p>This operation can be called only from the organization's master account. </p>"
    },
    "EnablePolicyType":{
      "name":"EnablePolicyType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"EnablePolicyTypeRequest"},
      "output":{"shape":"EnablePolicyTypeResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyTypeAlreadyEnabledException"},
        {"shape":"RootNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"PolicyTypeNotAvailableForOrganizationException"}
      ],
      "documentation":"<p>Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the <a>DisablePolicyType</a> operation.</p> <p>This operation can be called only from the organization's master account.</p> <p>You can enable a policy type in a root only if that policy type is available in the organization. Use <a>DescribeOrganization</a> to view the status of available policy types in the organization.</p> <p>To view the status of policy type in a root, use <a>ListRoots</a>.</p>"
    },
    "InviteAccountToOrganization":{
      "name":"InviteAccountToOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"InviteAccountToOrganizationRequest"},
      "output":{"shape":"InviteAccountToOrganizationResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"AccountOwnerNotVerifiedException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"HandshakeConstraintViolationException"},
        {"shape":"DuplicateHandshakeException"},
        {"shape":"InvalidInputException"},
        {"shape":"FinalizingOrganizationException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a <a>Handshake</a> whose details are in the response.</p> <important> <ul> <li> <p>You can invite AWS accounts only from the same seller as the master account. For example, if your organization's master account was created by Amazon Internet Services Pvt. Ltd (AISPL), an AWS seller in India, then you can only invite other AISPL accounts to your organization. You can't combine accounts from AISPL and AWS, or any other AWS seller. For more information, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html\">Consolidated Billing in India</a>.</p> </li> <li> <p>If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, then contact <a href=\"https://console.aws.amazon.com/support/home#/\">AWS Customer Support</a>.</p> </li> </ul> </important> <p>This operation can be called only from the organization's master account.</p>"
    },
    "LeaveOrganization":{
      "name":"LeaveOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AccountNotFoundException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"MasterCannotLeaveOrganizationException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the master account, use <a>RemoveAccountFromOrganization</a> instead.</p> <p>This operation can be called only from a member account in the organization.</p> <important> <ul> <li> <p>The master account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do, including preventing them from successfully calling <code>LeaveOrganization</code> and leaving the organization. </p> </li> <li> <p>You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For each account that you want to make standalone, you must accept the End User License Agreement (EULA), choose a support plan, provide and verify the required contact information, and provide a current payment method. AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account is not attached to an organization. Follow the steps at <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info\"> To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>You can leave an organization only after you enable IAM user access to billing in your account. For more information, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate\">Activating Access to the Billing and Cost Management Console</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> </li> </ul> </important>"
    },
    "ListAWSServiceAccessForOrganization":{
      "name":"ListAWSServiceAccessForOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAWSServiceAccessForOrganizationRequest"},
      "output":{"shape":"ListAWSServiceAccessForOrganizationResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Returns a list of the AWS services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts.</p> <p>For more information about integrating other services with AWS Organizations, including the list of services that currently work with Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html\">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListAccounts":{
      "name":"ListAccounts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAccountsRequest"},
      "output":{"shape":"ListAccountsResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListAccountsForParent":{
      "name":"ListAccountsForParent",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAccountsForParentRequest"},
      "output":{"shape":"ListAccountsForParentResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ParentNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that are not in any OU. If you specify an OU, you get a list of all the accounts in only that OU, and not in any child OUs. To get a list of all accounts in the organization, use the <a>ListAccounts</a> operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListChildren":{
      "name":"ListChildren",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListChildrenRequest"},
      "output":{"shape":"ListChildrenResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ParentNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with <a>ListParents</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListCreateAccountStatus":{
      "name":"ListCreateAccountStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListCreateAccountStatusRequest"},
      "output":{"shape":"ListCreateAccountStatusResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the account creation requests that match the specified status that is currently being tracked for the organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListHandshakesForAccount":{
      "name":"ListHandshakesForAccount",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListHandshakesForAccountRequest"},
      "output":{"shape":"ListHandshakesForAccountResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the current handshakes that are associated with the account of the requesting user.</p> <p>Handshakes that are ACCEPTED, DECLINED, or CANCELED appear in the results of this API for only 30 days after changing to that state. After that they are deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called from any account in the organization.</p>"
    },
    "ListHandshakesForOrganization":{
      "name":"ListHandshakesForOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListHandshakesForOrganizationRequest"},
      "output":{"shape":"ListHandshakesForOrganizationResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the handshakes that are associated with the organization that the requesting user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list of handshake structures. Each structure contains details and status about a handshake.</p> <p>Handshakes that are ACCEPTED, DECLINED, or CANCELED appear in the results of this API for only 30 days after changing to that state. After that they are deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListOrganizationalUnitsForParent":{
      "name":"ListOrganizationalUnitsForParent",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListOrganizationalUnitsForParentRequest"},
      "output":{"shape":"ListOrganizationalUnitsForParentResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ParentNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the organizational units (OUs) in a parent organizational unit or root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListParents":{
      "name":"ListParents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListParentsRequest"},
      "output":{"shape":"ListParentsResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ChildNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with <a>ListChildren</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p> <note> <p>In the current release, a child can have only a single parent. </p> </note>"
    },
    "ListPolicies":{
      "name":"ListPolicies",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPoliciesRequest"},
      "output":{"shape":"ListPoliciesResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Retrieves the list of all policies in an organization of a specified type.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListPoliciesForTarget":{
      "name":"ListPoliciesForTarget",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPoliciesForTargetRequest"},
      "output":{"shape":"ListPoliciesForTargetResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TargetNotFoundException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "ListRoots":{
      "name":"ListRoots",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListRootsRequest"},
      "output":{"shape":"ListRootsResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists the roots that are defined in the current organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p> <note> <p>Policy types can be enabled and disabled in roots. This is distinct from whether they are available in the organization. When you enable all features, you make policy types available for use in that organization. Individual policy types can then be enabled and disabled in a root. To see the availability of a policy type in an organization, use <a>DescribeOrganization</a>.</p> </note>"
    },
    "ListTargetsForPolicy":{
      "name":"ListTargetsForPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTargetsForPolicyRequest"},
      "output":{"shape":"ListTargetsForPolicyResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"InvalidInputException"},
        {"shape":"PolicyNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Lists all the roots, organizaitonal units (OUs), and accounts to which the specified policy is attached.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account.</p>"
    },
    "MoveAccount":{
      "name":"MoveAccount",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"MoveAccountRequest"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"InvalidInputException"},
        {"shape":"SourceParentNotFoundException"},
        {"shape":"DestinationParentNotFoundException"},
        {"shape":"DuplicateAccountException"},
        {"shape":"AccountNotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ServiceException"}
      ],
      "documentation":"<p>Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU.</p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "RemoveAccountFromOrganization":{
      "name":"RemoveAccountFromOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveAccountFromOrganizationRequest"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AccountNotFoundException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"InvalidInputException"},
        {"shape":"MasterCannotLeaveOrganizationException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Removes the specified account from the organization.</p> <p>The removed account becomes a stand-alone account that is not a member of any organization. It is no longer subject to any policies and is responsible for its own bill payments. The organization's master account is no longer charged for any expenses accrued by the member account after it is removed from the organization.</p> <p>This operation can be called only from the organization's master account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p> <important> <p>You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For an account that you want to make standalone, you must accept the End User License Agreement (EULA), choose a support plan, provide and verify the required contact information, and provide a current payment method. AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account is not attached to an organization. To remove an account that does not yet have this information, you must sign in as the member account and follow the steps at <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info\"> To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </important>"
    },
    "UpdateOrganizationalUnit":{
      "name":"UpdateOrganizationalUnit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateOrganizationalUnitRequest"},
      "output":{"shape":"UpdateOrganizationalUnitResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"DuplicateOrganizationalUnitException"},
        {"shape":"InvalidInputException"},
        {"shape":"OrganizationalUnitNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Renames the specified organizational unit (OU). The ID and ARN do not change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached. </p> <p>This operation can be called only from the organization's master account.</p>"
    },
    "UpdatePolicy":{
      "name":"UpdatePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdatePolicyRequest"},
      "output":{"shape":"UpdatePolicyResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AWSOrganizationsNotInUseException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ConstraintViolationException"},
        {"shape":"DuplicatePolicyException"},
        {"shape":"InvalidInputException"},
        {"shape":"MalformedPolicyDocumentException"},
        {"shape":"PolicyNotFoundException"},
        {"shape":"ServiceException"},
        {"shape":"TooManyRequestsException"}
      ],
      "documentation":"<p>Updates an existing policy with a new name, description, or content. If any parameter is not supplied, that value remains unchanged. Note that you cannot change a policy's type.</p> <p>This operation can be called only from the organization's master account.</p>"
    }
  },
  "shapes":{
    "AWSOrganizationsNotInUseException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>Your account isn't a member of an organization. To make this request, you must use the credentials of an account that belongs to an organization.</p>",
      "exception":true
    },
    "AcceptHandshakeRequest":{
      "type":"structure",
      "required":["HandshakeId"],
      "members":{
        "HandshakeId":{
          "shape":"HandshakeId",
          "documentation":"<p>The unique identifier (ID) of the handshake that you want to accept.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for handshake ID string requires \"h-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        }
      }
    },
    "AcceptHandshakeResponse":{
      "type":"structure",
      "members":{
        "Handshake":{
          "shape":"Handshake",
          "documentation":"<p>A structure that contains details about the accepted handshake.</p>"
        }
      }
    },
    "AccessDeniedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/access.html\">Access Management</a> in the <i>IAM User Guide</i>.</p>",
      "exception":true
    },
    "AccessDeniedForDependencyException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"},
        "Reason":{"shape":"AccessDeniedForDependencyExceptionReason"}
      },
      "documentation":"<p>The operation that you attempted requires you to have the <code>iam:CreateServiceLinkedRole</code> so that AWS Organizations can create the required service-linked role. You don't have that permission.</p>",
      "exception":true
    },
    "AccessDeniedForDependencyExceptionReason":{
      "type":"string",
      "enum":["ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE"]
    },
    "Account":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"AccountId",
          "documentation":"<p>The unique identifier (ID) of the account.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an account ID string requires exactly 12 digits.</p>"
        },
        "Arn":{
          "shape":"AccountArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the account.</p> <p>For more information about ARNs in Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns\">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "Email":{
          "shape":"Email",
          "documentation":"<p>The email address associated with the AWS account.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for this parameter is a string of characters that represents a standard Internet email address.</p>"
        },
        "Name":{
          "shape":"AccountName",
          "documentation":"<p>The friendly name of the account.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>"
        },
        "Status":{
          "shape":"AccountStatus",
          "documentation":"<p>The status of the account in the organization.</p>"
        },
        "JoinedMethod":{
          "shape":"AccountJoinedMethod",
          "documentation":"<p>The method by which the account joined the organization.</p>"
        },
        "JoinedTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The date the account became a part of the organization.</p>"
        }
      },
      "documentation":"<p>Contains information about an AWS account that is a member of an organization.</p>"
    },
    "AccountArn":{
      "type":"string",
      "pattern":"^arn:aws:organizations::\\d{12}:account\\/o-[a-z0-9]{10,32}\\/\\d{12}"
    },
    "AccountId":{
      "type":"string",
      "pattern":"^\\d{12}$"
    },
    "AccountJoinedMethod":{
      "type":"string",
      "enum":[
        "INVITED",
        "CREATED"
      ]
    },
    "AccountName":{
      "type":"string",
      "max":50,
      "min":1,
      "pattern":"[\\u0020-\\u007E]+",
      "sensitive":true
    },
    "AccountNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p> We can't find an AWS account with the <code>AccountId</code> that you specified, or the account whose credentials you used to make this request isn't a member of an organization.</p>",
      "exception":true
    },
    "AccountOwnerNotVerifiedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>You can't invite an existing account to your organization until you verify that you own the email address associated with the master account. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_create.html#about-email-verification\">Email Address Verification</a> in the <i>AWS Organizations User Guide</i>.</p>",
      "exception":true
    },
    "AccountStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "SUSPENDED"
      ]
    },
    "Accounts":{
      "type":"list",
      "member":{"shape":"Account"}
    },
    "ActionType":{
      "type":"string",
      "enum":[
        "INVITE",
        "ENABLE_ALL_FEATURES",
        "APPROVE_ALL_FEATURES",
        "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE"
      ]
    },
    "AlreadyInOrganizationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>This account is already a member of an organization. An account can belong to only one organization at a time.</p>",
      "exception":true
    },
    "AttachPolicyRequest":{
      "type":"structure",
      "required":[
        "PolicyId",
        "TargetId"
      ],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The unique identifier (ID) of the policy that you want to attach to the target. You can get the ID for the policy by calling the <a>ListPolicies</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a policy ID string requires \"p-\" followed by from 8 to 128 lower-case letters or digits.</p>"
        },
        "TargetId":{
          "shape":"PolicyTargetId",
          "documentation":"<p>The unique identifier (ID) of the root, OU, or account that you want to attach the policy to. You can get the ID by calling the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a> operations.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Account: a string that consists of exactly 12 digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        }
      }
    },
    "AwsManagedPolicy":{"type":"boolean"},
    "CancelHandshakeRequest":{
      "type":"structure",
      "required":["HandshakeId"],
      "members":{
        "HandshakeId":{
          "shape":"HandshakeId",
          "documentation":"<p>The unique identifier (ID) of the handshake that you want to cancel. You can get the ID from the <a>ListHandshakesForOrganization</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for handshake ID string requires \"h-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        }
      }
    },
    "CancelHandshakeResponse":{
      "type":"structure",
      "members":{
        "Handshake":{
          "shape":"Handshake",
          "documentation":"<p>A structure that contains details about the handshake that you canceled.</p>"
        }
      }
    },
    "Child":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"ChildId",
          "documentation":"<p>The unique identifier (ID) of this child entity.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a child ID string requires one of the following:</p> <ul> <li> <p>Account: a string that consists of exactly 12 digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "Type":{
          "shape":"ChildType",
          "documentation":"<p>The type of this child entity.</p>"
        }
      },
      "documentation":"<p>Contains a list of child entities, either OUs or accounts.</p>"
    },
    "ChildId":{
      "type":"string",
      "pattern":"^(\\d{12})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$"
    },
    "ChildNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find an organizational unit (OU) or AWS account with the <code>ChildId</code> that you specified.</p>",
      "exception":true
    },
    "ChildType":{
      "type":"string",
      "enum":[
        "ACCOUNT",
        "ORGANIZATIONAL_UNIT"
      ]
    },
    "Children":{
      "type":"list",
      "member":{"shape":"Child"}
    },
    "ConcurrentModificationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The target of the operation is currently being modified by a different request. Try again later.</p>",
      "exception":true
    },
    "ConstraintViolationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"},
        "Reason":{"shape":"ConstraintViolationExceptionReason"}
      },
      "documentation":"<p>Performing this operation violates a minimum or maximum value limit. For example, attempting to removing the last service control policy (SCP) from an OU or root, inviting or creating too many accounts to the organization, or attaching too many policies to an account, OU, or root. This exception includes a reason that contains additional information about the violated limit.</p> <p>Some of the reasons in the following list might not be applicable to this specific API or operation:</p> <ul> <li> <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number of accounts in an organization. If you need more accounts, contact<a href=\"https://console.aws.amazon.com/support/home#/\">AWS Support</a> to request an increase in your limit. </p> <p>Or the number of invitations that you tried to send would cause you to exceed the limit of accounts in your organization. Send fewer invitations or contact AWS Support to request an increase in the number of accounts.</p> <note> <p>Deleted and closed accounts still count toward your limit.</p> </note> <important> <p>If you get receive this exception when running a command immediately after creating the organization, wait one hour and try again. If after an hour it continues to fail with this error, contact <a href=\"https://console.aws.amazon.com/support/home#/\">AWS Support</a>.</p> </important> </li> <li> <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of handshakes that you can send in one day.</p> </li> <li> <p>OU_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of OUs that you can have in an organization.</p> </li> <li> <p>OU_DEPTH_LIMIT_EXCEEDED: You attempted to create an OU tree that is too many levels deep.</p> </li> <li> <p>ORGANIZATION_NOT_IN_ALL_FEATURES_MODE: You attempted to perform an operation that requires the organization to be configured to support all features. An organization that supports only consolidated billing features can't perform this operation.</p> </li> <li> <p>POLICY_NUMBER_LIMIT_EXCEEDED. You attempted to exceed the number of policies that you can have in an organization.</p> </li> <li> <p>MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to exceed the number of policies of a certain type that can be attached to an entity at one time.</p> </li> <li> <p>MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to detach a policy from an entity that would cause the entity to have fewer than the minimum number of policies of a certain type required.</p> </li> <li> <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA: You attempted to remove an account from the organization that doesn't yet have enough information to exist as a standalone account. This account requires you to first agree to the AWS Customer Agreement. Follow the steps at <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info\">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION: You attempted to remove an account from the organization that doesn't yet have enough information to exist as a standalone account. This account requires you to first complete phone verification. Follow the steps at <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info\">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To create an organization with this master account, you first must associate a payment instrument, such as a credit card, with the account. Follow the steps at <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info\">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To complete this operation with this member account, you first must associate a payment instrument, such as a credit card, with the account. Follow the steps at <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info\">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of accounts that you can create in one day.</p> </li> <li> <p>MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE: To create an account in this organization, you first must migrate the organization's master account to the marketplace that corresponds to the master account's address. For example, accounts with India addresses must be associated with the AISPL marketplace. All accounts in an organization must be associated with the same marketplace.</p> </li> <li> <p>MASTER_ACCOUNT_MISSING_CONTACT_INFO: To complete this operation, you must first provide contact a valid address and phone number for the master account. Then try the operation again.</p> </li> </ul>",
      "exception":true
    },
    "ConstraintViolationExceptionReason":{
      "type":"string",
      "enum":[
        "ACCOUNT_NUMBER_LIMIT_EXCEEDED",
        "HANDSHAKE_RATE_LIMIT_EXCEEDED",
        "OU_NUMBER_LIMIT_EXCEEDED",
        "OU_DEPTH_LIMIT_EXCEEDED",
        "POLICY_NUMBER_LIMIT_EXCEEDED",
        "MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED",
        "MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED",
        "ACCOUNT_CANNOT_LEAVE_ORGANIZATION",
        "ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA",
        "ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION",
        "MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED",
        "MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED",
        "ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED",
        "MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE",
        "MASTER_ACCOUNT_MISSING_CONTACT_INFO",
        "ORGANIZATION_NOT_IN_ALL_FEATURES_MODE",
        "EMAIL_VERIFICATION_CODE_EXPIRED",
        "WAIT_PERIOD_ACTIVE"
      ]
    },
    "CreateAccountFailureReason":{
      "type":"string",
      "enum":[
        "ACCOUNT_LIMIT_EXCEEDED",
        "EMAIL_ALREADY_EXISTS",
        "INVALID_ADDRESS",
        "INVALID_EMAIL",
        "CONCURRENT_ACCOUNT_MODIFICATION",
        "INTERNAL_FAILURE"
      ]
    },
    "CreateAccountRequest":{
      "type":"structure",
      "required":[
        "Email",
        "AccountName"
      ],
      "members":{
        "Email":{
          "shape":"Email",
          "documentation":"<p>The email address of the owner to assign to the new member account. This email address must not already be associated with another AWS account. You must use a valid email address to complete account creation. You can't access the root user of the account or remove an account that was created with an invalid email address.</p>"
        },
        "AccountName":{
          "shape":"AccountName",
          "documentation":"<p>The friendly name of the member account.</p>"
        },
        "RoleName":{
          "shape":"RoleName",
          "documentation":"<p>(Optional)</p> <p>The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. This role trusts the master account, allowing users in the master account to assume the role, as permitted by the master account administrator. The role has administrator permissions in the new member account.</p> <p>If you don't specify this parameter, the role name defaults to <code>OrganizationAccountAccessRole</code>.</p> <p>For more information about how to use this role to access the member account, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role\">Accessing and Administering the Member Accounts in Your Organization</a> in the <i>AWS Organizations User Guide</i>, and steps 2 and 3 in <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html\">Tutorial: Delegate Access Across AWS Accounts Using IAM Roles</a> in the <i>IAM User Guide</i>.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of characters that can consist of uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>"
        },
        "IamUserAccessToBilling":{
          "shape":"IAMUserAccessToBilling",
          "documentation":"<p>If set to <code>ALLOW</code>, the new account enables IAM users to access account billing information <i>if</i> they have the required permissions. If set to <code>DENY</code>, only the root user of the new account can access account billing information. For more information, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate\">Activating Access to the Billing and Cost Management Console</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> <p>If you don't specify this parameter, the value defaults to <code>ALLOW</code>, and IAM users and roles with the required permissions can access billing information for the new account.</p>"
        }
      }
    },
    "CreateAccountRequestId":{
      "type":"string",
      "pattern":"^car-[a-z0-9]{8,32}$"
    },
    "CreateAccountResponse":{
      "type":"structure",
      "members":{
        "CreateAccountStatus":{
          "shape":"CreateAccountStatus",
          "documentation":"<p>A structure that contains details about the request to create an account. This response structure might not be fully populated when you first receive it because account creation is an asynchronous process. You can pass the returned <code>CreateAccountStatus</code> ID as a parameter to <a>DescribeCreateAccountStatus</a> to get status about the progress of the request at later times. You can also check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html\">Monitoring the Activity in Your Organization</a> in the <i>AWS Organizations User Guide</i>.</p>"
        }
      }
    },
    "CreateAccountState":{
      "type":"string",
      "enum":[
        "IN_PROGRESS",
        "SUCCEEDED",
        "FAILED"
      ]
    },
    "CreateAccountStates":{
      "type":"list",
      "member":{"shape":"CreateAccountState"}
    },
    "CreateAccountStatus":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"CreateAccountRequestId",
          "documentation":"<p>The unique identifier (ID) that references this request. You get this value from the response of the initial <a>CreateAccount</a> request to create the account.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an create account request ID string requires \"car-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        },
        "AccountName":{
          "shape":"AccountName",
          "documentation":"<p>The account name given to the account when it was created.</p>"
        },
        "State":{
          "shape":"CreateAccountState",
          "documentation":"<p>The status of the request.</p>"
        },
        "RequestedTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the request was made for the account creation.</p>"
        },
        "CompletedTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the account was created and the request completed.</p>"
        },
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>If the account was created successfully, the unique identifier (ID) of the new account.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an account ID string requires exactly 12 digits.</p>"
        },
        "FailureReason":{
          "shape":"CreateAccountFailureReason",
          "documentation":"<p>If the request failed, a description of the reason for the failure.</p> <ul> <li> <p>ACCOUNT_LIMIT_EXCEEDED: The account could not be created because you have reached the limit on the number of accounts in your organization.</p> </li> <li> <p>EMAIL_ALREADY_EXISTS: The account could not be created because another AWS account with that email address already exists.</p> </li> <li> <p>INVALID_ADDRESS: The account could not be created because the address you provided is not valid.</p> </li> <li> <p>INVALID_EMAIL: The account could not be created because the email address you provided is not valid.</p> </li> <li> <p>INTERNAL_FAILURE: The account could not be created because of an internal failure. Try again later. If the problem persists, contact Customer Support.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Contains the status about a <a>CreateAccount</a> request to create an AWS account in an organization.</p>"
    },
    "CreateAccountStatusNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find an create account request with the <code>CreateAccountRequestId</code> that you specified.</p>",
      "exception":true
    },
    "CreateAccountStatuses":{
      "type":"list",
      "member":{"shape":"CreateAccountStatus"}
    },
    "CreateOrganizationRequest":{
      "type":"structure",
      "members":{
        "FeatureSet":{
          "shape":"OrganizationFeatureSet",
          "documentation":"<p>Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.</p> <ul> <li> <p> <i>CONSOLIDATED_BILLING</i>: All member accounts have their bills consolidated to and paid by the master account. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only\">Consolidated Billing</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p> <i>ALL</i>: In addition to all the features supported by the consolidated billing feature set, the master account can also apply any type of policy to any member account in the organization. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-all\">All features</a> in the <i>AWS Organizations User Guide</i>.</p> </li> </ul>"
        }
      }
    },
    "CreateOrganizationResponse":{
      "type":"structure",
      "members":{
        "Organization":{
          "shape":"Organization",
          "documentation":"<p>A structure that contains details about the newly created organization.</p>"
        }
      }
    },
    "CreateOrganizationalUnitRequest":{
      "type":"structure",
      "required":[
        "ParentId",
        "Name"
      ],
      "members":{
        "ParentId":{
          "shape":"ParentId",
          "documentation":"<p>The unique identifier (ID) of the parent root or OU in which you want to create the new OU.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "Name":{
          "shape":"OrganizationalUnitName",
          "documentation":"<p>The friendly name to assign to the new OU.</p>"
        }
      }
    },
    "CreateOrganizationalUnitResponse":{
      "type":"structure",
      "members":{
        "OrganizationalUnit":{
          "shape":"OrganizationalUnit",
          "documentation":"<p>A structure that contains details about the newly created OU.</p>"
        }
      }
    },
    "CreatePolicyRequest":{
      "type":"structure",
      "required":[
        "Content",
        "Description",
        "Name",
        "Type"
      ],
      "members":{
        "Content":{
          "shape":"PolicyContent",
          "documentation":"<p>The policy content to add to the new policy. For example, if you create a <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html\">service control policy</a> (SCP), this string must be JSON text that specifies the permissions that admins in attached accounts can delegate to their users, groups, and roles. For more information about the SCP syntax, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html\">Service Control Policy Syntax</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "Description":{
          "shape":"PolicyDescription",
          "documentation":"<p>An optional description to assign to the policy.</p>"
        },
        "Name":{
          "shape":"PolicyName",
          "documentation":"<p>The friendly name to assign to the policy.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>"
        },
        "Type":{
          "shape":"PolicyType",
          "documentation":"<p>The type of policy to create.</p> <note> <p>In the current release, the only type of policy that you can create is a service control policy (SCP).</p> </note>"
        }
      }
    },
    "CreatePolicyResponse":{
      "type":"structure",
      "members":{
        "Policy":{
          "shape":"Policy",
          "documentation":"<p>A structure that contains details about the newly created policy.</p>"
        }
      }
    },
    "DeclineHandshakeRequest":{
      "type":"structure",
      "required":["HandshakeId"],
      "members":{
        "HandshakeId":{
          "shape":"HandshakeId",
          "documentation":"<p>The unique identifier (ID) of the handshake that you want to decline. You can get the ID from the <a>ListHandshakesForAccount</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for handshake ID string requires \"h-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        }
      }
    },
    "DeclineHandshakeResponse":{
      "type":"structure",
      "members":{
        "Handshake":{
          "shape":"Handshake",
          "documentation":"<p>A structure that contains details about the declined handshake. The state is updated to show the value <code>DECLINED</code>.</p>"
        }
      }
    },
    "DeleteOrganizationalUnitRequest":{
      "type":"structure",
      "required":["OrganizationalUnitId"],
      "members":{
        "OrganizationalUnitId":{
          "shape":"OrganizationalUnitId",
          "documentation":"<p>The unique identifier (ID) of the organizational unit that you want to delete. You can get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an organizational unit ID string requires \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p>"
        }
      }
    },
    "DeletePolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The unique identifier (ID) of the policy that you want to delete. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a> operations.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a policy ID string requires \"p-\" followed by from 8 to 128 lower-case letters or digits.</p>"
        }
      }
    },
    "DescribeAccountRequest":{
      "type":"structure",
      "required":["AccountId"],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The unique identifier (ID) of the AWS account that you want information about. You can get the ID from the <a>ListAccounts</a> or <a>ListAccountsForParent</a> operations.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an account ID string requires exactly 12 digits.</p>"
        }
      }
    },
    "DescribeAccountResponse":{
      "type":"structure",
      "members":{
        "Account":{
          "shape":"Account",
          "documentation":"<p>A structure that contains information about the requested account.</p>"
        }
      }
    },
    "DescribeCreateAccountStatusRequest":{
      "type":"structure",
      "required":["CreateAccountRequestId"],
      "members":{
        "CreateAccountRequestId":{
          "shape":"CreateAccountRequestId",
          "documentation":"<p>Specifies the <code>operationId</code> that uniquely identifies the request. You can get the ID from the response to an earlier <a>CreateAccount</a> request, or from the <a>ListCreateAccountStatus</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an create account request ID string requires \"car-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        }
      }
    },
    "DescribeCreateAccountStatusResponse":{
      "type":"structure",
      "members":{
        "CreateAccountStatus":{
          "shape":"CreateAccountStatus",
          "documentation":"<p>A structure that contains the current status of an account creation request.</p>"
        }
      }
    },
    "DescribeHandshakeRequest":{
      "type":"structure",
      "required":["HandshakeId"],
      "members":{
        "HandshakeId":{
          "shape":"HandshakeId",
          "documentation":"<p>The unique identifier (ID) of the handshake that you want information about. You can get the ID from the original call to <a>InviteAccountToOrganization</a>, or from a call to <a>ListHandshakesForAccount</a> or <a>ListHandshakesForOrganization</a>.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for handshake ID string requires \"h-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        }
      }
    },
    "DescribeHandshakeResponse":{
      "type":"structure",
      "members":{
        "Handshake":{
          "shape":"Handshake",
          "documentation":"<p>A structure that contains information about the specified handshake.</p>"
        }
      }
    },
    "DescribeOrganizationResponse":{
      "type":"structure",
      "members":{
        "Organization":{
          "shape":"Organization",
          "documentation":"<p>A structure that contains information about the organization.</p>"
        }
      }
    },
    "DescribeOrganizationalUnitRequest":{
      "type":"structure",
      "required":["OrganizationalUnitId"],
      "members":{
        "OrganizationalUnitId":{
          "shape":"OrganizationalUnitId",
          "documentation":"<p>The unique identifier (ID) of the organizational unit that you want details about. You can get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an organizational unit ID string requires \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p>"
        }
      }
    },
    "DescribeOrganizationalUnitResponse":{
      "type":"structure",
      "members":{
        "OrganizationalUnit":{
          "shape":"OrganizationalUnit",
          "documentation":"<p>A structure that contains details about the specified OU.</p>"
        }
      }
    },
    "DescribePolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The unique identifier (ID) of the policy that you want details about. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a> operations.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a policy ID string requires \"p-\" followed by from 8 to 128 lower-case letters or digits.</p>"
        }
      }
    },
    "DescribePolicyResponse":{
      "type":"structure",
      "members":{
        "Policy":{
          "shape":"Policy",
          "documentation":"<p>A structure that contains details about the specified policy.</p>"
        }
      }
    },
    "DestinationParentNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find the destination container (a root or OU) with the <code>ParentId</code> that you specified.</p>",
      "exception":true
    },
    "DetachPolicyRequest":{
      "type":"structure",
      "required":[
        "PolicyId",
        "TargetId"
      ],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The unique identifier (ID) of the policy you want to detach. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a> operations.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a policy ID string requires \"p-\" followed by from 8 to 128 lower-case letters or digits.</p>"
        },
        "TargetId":{
          "shape":"PolicyTargetId",
          "documentation":"<p>The unique identifier (ID) of the root, OU, or account from which you want to detach the policy. You can get the ID from the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a> operations.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Account: a string that consists of exactly 12 digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        }
      }
    },
    "DisableAWSServiceAccessRequest":{
      "type":"structure",
      "required":["ServicePrincipal"],
      "members":{
        "ServicePrincipal":{
          "shape":"ServicePrincipal",
          "documentation":"<p>The service principal name of the AWS service for which you want to disable integration with your organization. This is typically in the form of a URL, such as <code> <i>service-abbreviation</i>.amazonaws.com</code>.</p>"
        }
      }
    },
    "DisablePolicyTypeRequest":{
      "type":"structure",
      "required":[
        "RootId",
        "PolicyType"
      ],
      "members":{
        "RootId":{
          "shape":"RootId",
          "documentation":"<p>The unique identifier (ID) of the root in which you want to disable a policy type. You can get the ID from the <a>ListRoots</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a root ID string requires \"r-\" followed by from 4 to 32 lower-case letters or digits.</p>"
        },
        "PolicyType":{
          "shape":"PolicyType",
          "documentation":"<p>The policy type that you want to disable in this root.</p>"
        }
      }
    },
    "DisablePolicyTypeResponse":{
      "type":"structure",
      "members":{
        "Root":{
          "shape":"Root",
          "documentation":"<p>A structure that shows the root with the updated list of enabled policy types.</p>"
        }
      }
    },
    "DuplicateAccountException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>That account is already present in the specified destination.</p>",
      "exception":true
    },
    "DuplicateHandshakeException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>A handshake with the same action and target already exists. For example, if you invited an account to join your organization, the invited account might already have a pending invitation from this organization. If you intend to resend an invitation to an account, ensure that existing handshakes that might be considered duplicates are canceled or declined.</p>",
      "exception":true
    },
    "DuplicateOrganizationalUnitException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>An OU with the same name already exists.</p>",
      "exception":true
    },
    "DuplicatePolicyAttachmentException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The selected policy is already attached to the specified target.</p>",
      "exception":true
    },
    "DuplicatePolicyException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>A policy with the same name already exists.</p>",
      "exception":true
    },
    "Email":{
      "type":"string",
      "max":64,
      "min":6,
      "pattern":"[^\\s@]+@[^\\s@]+\\.[^\\s@]+",
      "sensitive":true
    },
    "EnableAWSServiceAccessRequest":{
      "type":"structure",
      "required":["ServicePrincipal"],
      "members":{
        "ServicePrincipal":{
          "shape":"ServicePrincipal",
          "documentation":"<p>The service principal name of the AWS service for which you want to enable integration with your organization. This is typically in the form of a URL, such as <code> <i>service-abbreviation</i>.amazonaws.com</code>.</p>"
        }
      }
    },
    "EnableAllFeaturesRequest":{
      "type":"structure",
      "members":{
      }
    },
    "EnableAllFeaturesResponse":{
      "type":"structure",
      "members":{
        "Handshake":{
          "shape":"Handshake",
          "documentation":"<p>A structure that contains details about the handshake created to support this request to enable all features in the organization.</p>"
        }
      }
    },
    "EnablePolicyTypeRequest":{
      "type":"structure",
      "required":[
        "RootId",
        "PolicyType"
      ],
      "members":{
        "RootId":{
          "shape":"RootId",
          "documentation":"<p>The unique identifier (ID) of the root in which you want to enable a policy type. You can get the ID from the <a>ListRoots</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a root ID string requires \"r-\" followed by from 4 to 32 lower-case letters or digits.</p>"
        },
        "PolicyType":{
          "shape":"PolicyType",
          "documentation":"<p>The policy type that you want to enable.</p>"
        }
      }
    },
    "EnablePolicyTypeResponse":{
      "type":"structure",
      "members":{
        "Root":{
          "shape":"Root",
          "documentation":"<p>A structure that shows the root with the updated list of enabled policy types.</p>"
        }
      }
    },
    "EnabledServicePrincipal":{
      "type":"structure",
      "members":{
        "ServicePrincipal":{
          "shape":"ServicePrincipal",
          "documentation":"<p>The name of the service principal. This is typically in the form of a URL, such as: <code> <i>servicename</i>.amazonaws.com</code>.</p>"
        },
        "DateEnabled":{
          "shape":"Timestamp",
          "documentation":"<p>The date that the service principal was enabled for integration with AWS Organizations.</p>"
        }
      },
      "documentation":"<p>A structure that contains details of a service principal that is enabled to integrate with AWS Organizations.</p>"
    },
    "EnabledServicePrincipals":{
      "type":"list",
      "member":{"shape":"EnabledServicePrincipal"}
    },
    "ExceptionMessage":{"type":"string"},
    "ExceptionType":{"type":"string"},
    "FinalizingOrganizationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>AWS Organizations couldn't perform the operation because your organization hasn't finished initializing. This can take up to an hour. Try again later. If after one hour you continue to receive this error, contact <a href=\"https://console.aws.amazon.com/support/home#/\">AWS Support</a>.</p>",
      "exception":true
    },
    "GenericArn":{
      "type":"string",
      "pattern":"^arn:aws:organizations::.+:.+"
    },
    "Handshake":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"HandshakeId",
          "documentation":"<p>The unique identifier (ID) of a handshake. The originating account creates the ID when it initiates the handshake.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for handshake ID string requires \"h-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        },
        "Arn":{
          "shape":"HandshakeArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of a handshake.</p> <p>For more information about ARNs in Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns\">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "Parties":{
          "shape":"HandshakeParties",
          "documentation":"<p>Information about the two accounts that are participating in the handshake.</p>"
        },
        "State":{
          "shape":"HandshakeState",
          "documentation":"<p>The current state of the handshake. Use the state to trace the flow of the handshake through the process from its creation to its acceptance. The meaning of each of the valid values is as follows:</p> <ul> <li> <p> <b>REQUESTED</b>: This handshake was sent to multiple recipients (applicable to only some handshake types) and not all recipients have responded yet. The request stays in this state until all recipients respond.</p> </li> <li> <p> <b>OPEN</b>: This handshake was sent to multiple recipients (applicable to only some policy types) and all recipients have responded, allowing the originator to complete the handshake action.</p> </li> <li> <p> <b>CANCELED</b>: This handshake is no longer active because it was canceled by the originating account.</p> </li> <li> <p> <b>ACCEPTED</b>: This handshake is complete because it has been accepted by the recipient.</p> </li> <li> <p> <b>DECLINED</b>: This handshake is no longer active because it was declined by the recipient account.</p> </li> <li> <p> <b>EXPIRED</b>: This handshake is no longer active because the originator did not receive a response of any kind from the recipient before the expiration time (15 days).</p> </li> </ul>"
        },
        "RequestedTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the handshake request was made.</p>"
        },
        "ExpirationTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the handshake expires. If the recipient of the handshake request fails to respond before the specified date and time, the handshake becomes inactive and is no longer valid.</p>"
        },
        "Action":{
          "shape":"ActionType",
          "documentation":"<p>The type of handshake, indicating what action occurs when the recipient accepts the handshake. The following handshake types are supported:</p> <ul> <li> <p> <b>INVITE</b>: This type of handshake represents a request to join an organization. It is always sent from the master account to only non-member accounts.</p> </li> <li> <p> <b>ENABLE_ALL_FEATURES</b>: This type of handshake represents a request to enable all features in an organization. It is always sent from the master account to only <i>invited</i> member accounts. Created accounts do not receive this because those accounts were created by the organization's master account and approval is inferred.</p> </li> <li> <p> <b>APPROVE_ALL_FEATURES</b>: This type of handshake is sent from the Organizations service when all member accounts have approved the <code>ENABLE_ALL_FEATURES</code> invitation. It is sent only to the master account and signals the master that it can finalize the process to enable all features.</p> </li> </ul>"
        },
        "Resources":{
          "shape":"HandshakeResources",
          "documentation":"<p>Additional information that is needed to process the handshake.</p>"
        }
      },
      "documentation":"<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p>"
    },
    "HandshakeAlreadyInStateException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The specified handshake is already in the requested state. For example, you can't accept a handshake that was already accepted.</p>",
      "exception":true
    },
    "HandshakeArn":{
      "type":"string",
      "pattern":"^arn:aws:organizations::\\d{12}:handshake\\/o-[a-z0-9]{10,32}\\/[a-z_]{1,32}\\/h-[0-9a-z]{8,32}"
    },
    "HandshakeConstraintViolationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"},
        "Reason":{"shape":"HandshakeConstraintViolationExceptionReason"}
      },
      "documentation":"<p>The requested operation would violate the constraint identified in the reason code.</p> <note> <p>Some of the reasons in the following list might not be applicable to this specific API or operation:</p> </note> <ul> <li> <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number of accounts in an organization. Note that deleted and closed accounts still count toward your limit.</p> <important> <p>If you get this exception immediately after creating the organization, wait one hour and try again. If after an hour it continues to fail with this error, contact <a href=\"https://console.aws.amazon.com/support/home#/\">AWS Support</a>.</p> </important> </li> <li> <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of handshakes that you can send in one day.</p> </li> <li> <p>ALREADY_IN_AN_ORGANIZATION: The handshake request is invalid because the invited account is already a member of an organization.</p> </li> <li> <p>ORGANIZATION_ALREADY_HAS_ALL_FEATURES: The handshake request is invalid because the organization has already enabled all features.</p> </li> <li> <p>INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES: You can't issue new invitations to join an organization while it's in the process of enabling all features. You can resume inviting accounts after you finalize the process when all accounts have agreed to the change.</p> </li> <li> <p>PAYMENT_INSTRUMENT_REQUIRED: You can't complete the operation with an account that doesn't have a payment instrument, such as a credit card, associated with it.</p> </li> <li> <p>ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD: The request failed because the account is from a different marketplace than the accounts in the organization. For example, accounts with India addresses must be associated with the AISPL marketplace. All accounts in an organization must be from the same marketplace.</p> </li> <li> <p>ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED: You attempted to change the membership of an account too quickly after its previous change.</p> </li> </ul>",
      "exception":true
    },
    "HandshakeConstraintViolationExceptionReason":{
      "type":"string",
      "enum":[
        "ACCOUNT_NUMBER_LIMIT_EXCEEDED",
        "HANDSHAKE_RATE_LIMIT_EXCEEDED",
        "ALREADY_IN_AN_ORGANIZATION",
        "ORGANIZATION_ALREADY_HAS_ALL_FEATURES",
        "INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES",
        "PAYMENT_INSTRUMENT_REQUIRED",
        "ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD",
        "ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED"
      ]
    },
    "HandshakeFilter":{
      "type":"structure",
      "members":{
        "ActionType":{
          "shape":"ActionType",
          "documentation":"<p>Specifies the type of handshake action.</p> <p>If you specify <code>ActionType</code>, you cannot also specify <code>ParentHandshakeId</code>.</p>"
        },
        "ParentHandshakeId":{
          "shape":"HandshakeId",
          "documentation":"<p>Specifies the parent handshake. Only used for handshake types that are a child of another type.</p> <p>If you specify <code>ParentHandshakeId</code>, you cannot also specify <code>ActionType</code>.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for handshake ID string requires \"h-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        }
      },
      "documentation":"<p>Specifies the criteria that are used to select the handshakes for the operation.</p>"
    },
    "HandshakeId":{
      "type":"string",
      "pattern":"^h-[0-9a-z]{8,32}$"
    },
    "HandshakeNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find a handshake with the <code>HandshakeId</code> that you specified.</p>",
      "exception":true
    },
    "HandshakeNotes":{
      "type":"string",
      "max":1024,
      "sensitive":true
    },
    "HandshakeParties":{
      "type":"list",
      "member":{"shape":"HandshakeParty"}
    },
    "HandshakeParty":{
      "type":"structure",
      "required":[
        "Id",
        "Type"
      ],
      "members":{
        "Id":{
          "shape":"HandshakePartyId",
          "documentation":"<p>The unique identifier (ID) for the party.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for handshake ID string requires \"h-\" followed by from 8 to 32 lower-case letters or digits.</p>"
        },
        "Type":{
          "shape":"HandshakePartyType",
          "documentation":"<p>The type of party.</p>"
        }
      },
      "documentation":"<p>Identifies a participant in a handshake.</p>"
    },
    "HandshakePartyId":{
      "type":"string",
      "max":64,
      "min":1,
      "sensitive":true
    },
    "HandshakePartyType":{
      "type":"string",
      "enum":[
        "ACCOUNT",
        "ORGANIZATION",
        "EMAIL"
      ]
    },
    "HandshakeResource":{
      "type":"structure",
      "members":{
        "Value":{
          "shape":"HandshakeResourceValue",
          "documentation":"<p>The information that is passed to the other party in the handshake. The format of the value string must match the requirements of the specified type.</p>"
        },
        "Type":{
          "shape":"HandshakeResourceType",
          "documentation":"<p>The type of information being passed, specifying how the value is to be interpreted by the other party:</p> <ul> <li> <p> <code>ACCOUNT</code> - Specifies an AWS account ID number.</p> </li> <li> <p> <code>ORGANIZATION</code> - Specifies an organization ID number.</p> </li> <li> <p> <code>EMAIL</code> - Specifies the email address that is associated with the account that receives the handshake. </p> </li> <li> <p> <code>OWNER_EMAIL</code> - Specifies the email address associated with the master account. Included as information about an organization. </p> </li> <li> <p> <code>OWNER_NAME</code> - Specifies the name associated with the master account. Included as information about an organization. </p> </li> <li> <p> <code>NOTES</code> - Additional text provided by the handshake initiator and intended for the recipient to read.</p> </li> </ul>"
        },
        "Resources":{
          "shape":"HandshakeResources",
          "documentation":"<p>When needed, contains an additional array of <code>HandshakeResource</code> objects.</p>"
        }
      },
      "documentation":"<p>Contains additional data that is needed to process a handshake.</p>"
    },
    "HandshakeResourceType":{
      "type":"string",
      "enum":[
        "ACCOUNT",
        "ORGANIZATION",
        "ORGANIZATION_FEATURE_SET",
        "EMAIL",
        "MASTER_EMAIL",
        "MASTER_NAME",
        "NOTES",
        "PARENT_HANDSHAKE"
      ]
    },
    "HandshakeResourceValue":{
      "type":"string",
      "sensitive":true
    },
    "HandshakeResources":{
      "type":"list",
      "member":{"shape":"HandshakeResource"}
    },
    "HandshakeState":{
      "type":"string",
      "enum":[
        "REQUESTED",
        "OPEN",
        "CANCELED",
        "ACCEPTED",
        "DECLINED",
        "EXPIRED"
      ]
    },
    "Handshakes":{
      "type":"list",
      "member":{"shape":"Handshake"}
    },
    "IAMUserAccessToBilling":{
      "type":"string",
      "enum":[
        "ALLOW",
        "DENY"
      ]
    },
    "InvalidHandshakeTransitionException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>You can't perform the operation on the handshake in its current state. For example, you can't cancel a handshake that was already accepted or accept a handshake that was already declined.</p>",
      "exception":true
    },
    "InvalidInputException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"},
        "Reason":{"shape":"InvalidInputExceptionReason"}
      },
      "documentation":"<p>The requested operation failed because you provided invalid values for one or more of the request parameters. This exception includes a reason that contains additional information about the violated limit:</p> <note> <p>Some of the reasons in the following list might not be applicable to this specific API or operation:</p> </note> <ul> <li> <p>IMMUTABLE_POLICY: You specified a policy that is managed by AWS and can't be modified.</p> </li> <li> <p>INPUT_REQUIRED: You must include a value for all required parameters.</p> </li> <li> <p>INVALID_ENUM: You specified a value that isn't valid for that parameter.</p> </li> <li> <p>INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid characters.</p> </li> <li> <p>INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least one invalid value.</p> </li> <li> <p>INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account, organization, or email) as a party.</p> </li> <li> <p>INVALID_PAGINATION_TOKEN: Get the value for the <code>NextToken</code> parameter from the response to a previous call of the operation.</p> </li> <li> <p>INVALID_PATTERN: You provided a value that doesn't match the required pattern.</p> </li> <li> <p>INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match the required pattern.</p> </li> <li> <p>INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name can't begin with the reserved prefix <code>AWSServiceRoleFor</code>.</p> </li> <li> <p>INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name (ARN) for the organization.</p> </li> <li> <p>INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID. </p> </li> <li> <p>MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the operation.</p> </li> <li> <p>MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than allowed.</p> </li> <li> <p>MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value than allowed.</p> </li> <li> <p>MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than allowed.</p> </li> <li> <p>MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value than allowed.</p> </li> <li> <p>MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between entities in the same root.</p> </li> </ul>",
      "exception":true
    },
    "InvalidInputExceptionReason":{
      "type":"string",
      "enum":[
        "INVALID_PARTY_TYPE_TARGET",
        "INVALID_SYNTAX_ORGANIZATION_ARN",
        "INVALID_SYNTAX_POLICY_ID",
        "INVALID_ENUM",
        "INVALID_LIST_MEMBER",
        "MAX_LENGTH_EXCEEDED",
        "MAX_VALUE_EXCEEDED",
        "MIN_LENGTH_EXCEEDED",
        "MIN_VALUE_EXCEEDED",
        "IMMUTABLE_POLICY",
        "INVALID_PATTERN",
        "INVALID_PATTERN_TARGET_ID",
        "INPUT_REQUIRED",
        "INVALID_NEXT_TOKEN",
        "MAX_LIMIT_EXCEEDED_FILTER",
        "MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS",
        "INVALID_FULL_NAME_TARGET",
        "UNRECOGNIZED_SERVICE_PRINCIPAL",
        "INVALID_ROLE_NAME"
      ]
    },
    "InviteAccountToOrganizationRequest":{
      "type":"structure",
      "required":["Target"],
      "members":{
        "Target":{
          "shape":"HandshakeParty",
          "documentation":"<p>The identifier (ID) of the AWS account that you want to invite to join your organization. This is a JSON object that contains the following elements: </p> <p> <code>{ \"Type\": \"ACCOUNT\", \"Id\": \"&lt;<i> <b>account id number</b> </i>&gt;\" }</code> </p> <p>If you use the AWS CLI, you can submit this as a single string, similar to the following example:</p> <p> <code>--target Id=123456789012,Type=ACCOUNT</code> </p> <p>If you specify <code>\"Type\": \"ACCOUNT\"</code>, then you must provide the AWS account ID number as the <code>Id</code>. If you specify <code>\"Type\": \"EMAIL\"</code>, then you must specify the email address that is associated with the account.</p> <p> <code>--target Id=diego@example.com,Type=EMAIL</code> </p>"
        },
        "Notes":{
          "shape":"HandshakeNotes",
          "documentation":"<p>Additional information that you want to include in the generated email to the recipient account owner.</p>"
        }
      }
    },
    "InviteAccountToOrganizationResponse":{
      "type":"structure",
      "members":{
        "Handshake":{
          "shape":"Handshake",
          "documentation":"<p>A structure that contains details about the handshake that is created to support this invitation request.</p>"
        }
      }
    },
    "ListAWSServiceAccessForOrganizationRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListAWSServiceAccessForOrganizationResponse":{
      "type":"structure",
      "members":{
        "EnabledServicePrincipals":{
          "shape":"EnabledServicePrincipals",
          "documentation":"<p>A list of the service principals for the services that are enabled to integrate with your organization. Each principal is a structure that includes the name and the date that it was enabled for integration with AWS Organizations.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListAccountsForParentRequest":{
      "type":"structure",
      "required":["ParentId"],
      "members":{
        "ParentId":{
          "shape":"ParentId",
          "documentation":"<p>The unique identifier (ID) for the parent root or organization unit (OU) whose accounts you want to list.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListAccountsForParentResponse":{
      "type":"structure",
      "members":{
        "Accounts":{
          "shape":"Accounts",
          "documentation":"<p>A list of the accounts in the specified root or OU.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListAccountsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListAccountsResponse":{
      "type":"structure",
      "members":{
        "Accounts":{
          "shape":"Accounts",
          "documentation":"<p>A list of objects in the organization.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListChildrenRequest":{
      "type":"structure",
      "required":[
        "ParentId",
        "ChildType"
      ],
      "members":{
        "ParentId":{
          "shape":"ParentId",
          "documentation":"<p>The unique identifier (ID) for the parent root or OU whose children you want to list.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "ChildType":{
          "shape":"ChildType",
          "documentation":"<p>Filters the output to include only the specified child type.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListChildrenResponse":{
      "type":"structure",
      "members":{
        "Children":{
          "shape":"Children",
          "documentation":"<p>The list of children of the specified parent container.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListCreateAccountStatusRequest":{
      "type":"structure",
      "members":{
        "States":{
          "shape":"CreateAccountStates",
          "documentation":"<p>A list of one or more states that you want included in the response. If this parameter is not present, then all requests are included in the response.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListCreateAccountStatusResponse":{
      "type":"structure",
      "members":{
        "CreateAccountStatuses":{
          "shape":"CreateAccountStatuses",
          "documentation":"<p>A list of objects with details about the requests. Certain elements, such as the accountId number, are present in the output only after the account has been successfully created.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListHandshakesForAccountRequest":{
      "type":"structure",
      "members":{
        "Filter":{
          "shape":"HandshakeFilter",
          "documentation":"<p>Filters the handshakes that you want included in the response. The default is all types. Use the <code>ActionType</code> element to limit the output to only a specified type, such as <code>INVITE</code>, <code>ENABLE-FULL-CONTROL</code>, or <code>APPROVE-FULL-CONTROL</code>. Alternatively, for the <code>ENABLE-FULL-CONTROL</code> handshake that generates a separate child handshake for each member account, you can specify <code>ParentHandshakeId</code> to see only the handshakes that were generated by that parent request.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListHandshakesForAccountResponse":{
      "type":"structure",
      "members":{
        "Handshakes":{
          "shape":"Handshakes",
          "documentation":"<p>A list of <a>Handshake</a> objects with details about each of the handshakes that is associated with the specified account.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListHandshakesForOrganizationRequest":{
      "type":"structure",
      "members":{
        "Filter":{
          "shape":"HandshakeFilter",
          "documentation":"<p>A filter of the handshakes that you want included in the response. The default is all types. Use the <code>ActionType</code> element to limit the output to only a specified type, such as <code>INVITE</code>, <code>ENABLE-ALL-FEATURES</code>, or <code>APPROVE-ALL-FEATURES</code>. Alternatively, for the <code>ENABLE-ALL-FEATURES</code> handshake that generates a separate child handshake for each member account, you can specify the <code>ParentHandshakeId</code> to see only the handshakes that were generated by that parent request.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListHandshakesForOrganizationResponse":{
      "type":"structure",
      "members":{
        "Handshakes":{
          "shape":"Handshakes",
          "documentation":"<p>A list of <a>Handshake</a> objects with details about each of the handshakes that are associated with an organization.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListOrganizationalUnitsForParentRequest":{
      "type":"structure",
      "required":["ParentId"],
      "members":{
        "ParentId":{
          "shape":"ParentId",
          "documentation":"<p>The unique identifier (ID) of the root or OU whose child OUs you want to list.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListOrganizationalUnitsForParentResponse":{
      "type":"structure",
      "members":{
        "OrganizationalUnits":{
          "shape":"OrganizationalUnits",
          "documentation":"<p>A list of the OUs in the specified root or parent OU.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListParentsRequest":{
      "type":"structure",
      "required":["ChildId"],
      "members":{
        "ChildId":{
          "shape":"ChildId",
          "documentation":"<p>The unique identifier (ID) of the OU or account whose parent containers you want to list. Do not specify a root.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a child ID string requires one of the following:</p> <ul> <li> <p>Account: a string that consists of exactly 12 digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListParentsResponse":{
      "type":"structure",
      "members":{
        "Parents":{
          "shape":"Parents",
          "documentation":"<p>A list of parents for the specified child account or OU.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListPoliciesForTargetRequest":{
      "type":"structure",
      "required":[
        "TargetId",
        "Filter"
      ],
      "members":{
        "TargetId":{
          "shape":"PolicyTargetId",
          "documentation":"<p>The unique identifier (ID) of the root, organizational unit, or account whose policies you want to list.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Account: a string that consists of exactly 12 digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "Filter":{
          "shape":"PolicyType",
          "documentation":"<p>The type of policy that you want to include in the returned list.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListPoliciesForTargetResponse":{
      "type":"structure",
      "members":{
        "Policies":{
          "shape":"Policies",
          "documentation":"<p>The list of policies that match the criteria in the request.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListPoliciesRequest":{
      "type":"structure",
      "required":["Filter"],
      "members":{
        "Filter":{
          "shape":"PolicyType",
          "documentation":"<p>Specifies the type of policy that you want to include in the response.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListPoliciesResponse":{
      "type":"structure",
      "members":{
        "Policies":{
          "shape":"Policies",
          "documentation":"<p>A list of policies that match the filter criteria in the request. The output list does not include the policy contents. To see the content for a policy, see <a>DescribePolicy</a>.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListRootsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListRootsResponse":{
      "type":"structure",
      "members":{
        "Roots":{
          "shape":"Roots",
          "documentation":"<p>A list of roots that are defined in an organization.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "ListTargetsForPolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The unique identifier (ID) of the policy for which you want to know its attachments.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a policy ID string requires \"p-\" followed by from 8 to 128 lower-case letters or digits.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>"
        }
      }
    },
    "ListTargetsForPolicyResponse":{
      "type":"structure",
      "members":{
        "Targets":{
          "shape":"PolicyTargets",
          "documentation":"<p>A list of structures, each of which contains details about one of the entities to which the specified policy is attached.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>"
        }
      }
    },
    "MalformedPolicyDocumentException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The provided policy document doesn't meet the requirements of the specified policy type. For example, the syntax might be incorrect. For details about service control policy syntax, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html\">Service Control Policy Syntax</a> in the <i>AWS Organizations User Guide</i>.</p>",
      "exception":true
    },
    "MasterCannotLeaveOrganizationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>You can't remove a master account from an organization. If you want the master account to become a member account in another organization, you must first delete the current organization of the master account.</p>",
      "exception":true
    },
    "MaxResults":{
      "type":"integer",
      "box":true,
      "max":20,
      "min":1
    },
    "MoveAccountRequest":{
      "type":"structure",
      "required":[
        "AccountId",
        "SourceParentId",
        "DestinationParentId"
      ],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The unique identifier (ID) of the account that you want to move.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an account ID string requires exactly 12 digits.</p>"
        },
        "SourceParentId":{
          "shape":"ParentId",
          "documentation":"<p>The unique identifier (ID) of the root or organizational unit that you want to move the account from.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "DestinationParentId":{
          "shape":"ParentId",
          "documentation":"<p>The unique identifier (ID) of the root or organizational unit that you want to move the account to.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        }
      }
    },
    "NextToken":{"type":"string"},
    "Organization":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"OrganizationId",
          "documentation":"<p>The unique identifier (ID) of an organization.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an organization ID string requires \"o-\" followed by from 10 to 32 lower-case letters or digits.</p>"
        },
        "Arn":{
          "shape":"OrganizationArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of an organization.</p> <p>For more information about ARNs in Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns\">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "FeatureSet":{
          "shape":"OrganizationFeatureSet",
          "documentation":"<p>Specifies the functionality that currently is available to the organization. If set to \"ALL\", then all features are enabled and policies can be applied to accounts in the organization. If set to \"CONSOLIDATED_BILLING\", then only consolidated billing functionality is available. For more information, see <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/orgs_manage_org_support-all-features.html\">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "MasterAccountArn":{
          "shape":"AccountArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the account that is designated as the master account for the organization.</p> <p>For more information about ARNs in Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns\">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "MasterAccountId":{
          "shape":"AccountId",
          "documentation":"<p>The unique identifier (ID) of the master account of an organization.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an account ID string requires exactly 12 digits.</p>"
        },
        "MasterAccountEmail":{
          "shape":"Email",
          "documentation":"<p>The email address that is associated with the AWS account that is designated as the master account for the organization.</p>"
        },
        "AvailablePolicyTypes":{
          "shape":"PolicyTypes",
          "documentation":"<p>A list of policy types that are enabled for this organization. For example, if your organization has all features enabled, then service control policies (SCPs) are included in the list.</p> <note> <p>Even if a policy type is shown as available in the organization, you can separately enable and disable them at the root level by using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of a policy type in that root.</p> </note>"
        }
      },
      "documentation":"<p>Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .</p>"
    },
    "OrganizationArn":{
      "type":"string",
      "pattern":"^arn:aws:organizations::\\d{12}:organization\\/o-[a-z0-9]{10,32}"
    },
    "OrganizationFeatureSet":{
      "type":"string",
      "enum":[
        "ALL",
        "CONSOLIDATED_BILLING"
      ]
    },
    "OrganizationId":{
      "type":"string",
      "pattern":"^o-[a-z0-9]{10,32}$"
    },
    "OrganizationNotEmptyException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The organization isn't empty. To delete an organization, you must first remove all accounts except the master account, delete all OUs, and delete all policies.</p>",
      "exception":true
    },
    "OrganizationalUnit":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"OrganizationalUnitId",
          "documentation":"<p>The unique identifier (ID) associated with this OU.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an organizational unit ID string requires \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p>"
        },
        "Arn":{
          "shape":"OrganizationalUnitArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of this OU.</p> <p>For more information about ARNs in Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns\">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "Name":{
          "shape":"OrganizationalUnitName",
          "documentation":"<p>The friendly name of this OU.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>"
        }
      },
      "documentation":"<p>Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.</p>"
    },
    "OrganizationalUnitArn":{
      "type":"string",
      "pattern":"^arn:aws:organizations::\\d{12}:ou\\/o-[a-z0-9]{10,32}\\/ou-[0-9a-z]{4,32}-[0-9a-z]{8,32}"
    },
    "OrganizationalUnitId":{
      "type":"string",
      "pattern":"^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$"
    },
    "OrganizationalUnitName":{
      "type":"string",
      "max":128,
      "min":1
    },
    "OrganizationalUnitNotEmptyException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The specified OU is not empty. Move all accounts to another root or to other OUs, remove all child OUs, and try the operation again.</p>",
      "exception":true
    },
    "OrganizationalUnitNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find an OU with the <code>OrganizationalUnitId</code> that you specified.</p>",
      "exception":true
    },
    "OrganizationalUnits":{
      "type":"list",
      "member":{"shape":"OrganizationalUnit"}
    },
    "Parent":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"ParentId",
          "documentation":"<p>The unique identifier (ID) of the parent entity.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "Type":{
          "shape":"ParentType",
          "documentation":"<p>The type of the parent entity.</p>"
        }
      },
      "documentation":"<p>Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.</p>"
    },
    "ParentId":{
      "type":"string",
      "pattern":"^(r-[0-9a-z]{4,32})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$"
    },
    "ParentNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find a root or OU with the <code>ParentId</code> that you specified.</p>",
      "exception":true
    },
    "ParentType":{
      "type":"string",
      "enum":[
        "ROOT",
        "ORGANIZATIONAL_UNIT"
      ]
    },
    "Parents":{
      "type":"list",
      "member":{"shape":"Parent"}
    },
    "Policies":{
      "type":"list",
      "member":{"shape":"PolicySummary"}
    },
    "Policy":{
      "type":"structure",
      "members":{
        "PolicySummary":{
          "shape":"PolicySummary",
          "documentation":"<p>A structure that contains additional details about the policy.</p>"
        },
        "Content":{
          "shape":"PolicyContent",
          "documentation":"<p>The text content of the policy.</p>"
        }
      },
      "documentation":"<p>Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.</p>"
    },
    "PolicyArn":{
      "type":"string",
      "pattern":"^(arn:aws:organizations::\\d{12}:policy\\/o-[a-z0-9]{10,32}\\/[0-9a-z_]+\\/p-[0-9a-z]{10,32})|(arn:aws:organizations::aws:policy\\/[0-9a-z_]+\\/p-[0-9a-zA-Z_]{10,128})"
    },
    "PolicyContent":{
      "type":"string",
      "max":1000000,
      "min":1
    },
    "PolicyDescription":{
      "type":"string",
      "max":512
    },
    "PolicyId":{
      "type":"string",
      "pattern":"^p-[0-9a-zA-Z_]{8,128}$"
    },
    "PolicyInUseException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The policy is attached to one or more entities. You must detach it from all roots, OUs, and accounts before performing this operation.</p>",
      "exception":true
    },
    "PolicyName":{
      "type":"string",
      "max":128,
      "min":1
    },
    "PolicyNotAttachedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The policy isn't attached to the specified target in the specified root.</p>",
      "exception":true
    },
    "PolicyNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find a policy with the <code>PolicyId</code> that you specified.</p>",
      "exception":true
    },
    "PolicySummary":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"PolicyId",
          "documentation":"<p>The unique identifier (ID) of the policy.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a policy ID string requires \"p-\" followed by from 8 to 128 lower-case letters or digits.</p>"
        },
        "Arn":{
          "shape":"PolicyArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the policy.</p> <p>For more information about ARNs in Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns\">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "Name":{
          "shape":"PolicyName",
          "documentation":"<p>The friendly name of the policy.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>"
        },
        "Description":{
          "shape":"PolicyDescription",
          "documentation":"<p>The description of the policy.</p>"
        },
        "Type":{
          "shape":"PolicyType",
          "documentation":"<p>The type of policy.</p>"
        },
        "AwsManaged":{
          "shape":"AwsManagedPolicy",
          "documentation":"<p>A boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.</p>"
        }
      },
      "documentation":"<p>Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.</p>"
    },
    "PolicyTargetId":{
      "type":"string",
      "pattern":"^(r-[0-9a-z]{4,32})|(\\d{12})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$"
    },
    "PolicyTargetSummary":{
      "type":"structure",
      "members":{
        "TargetId":{
          "shape":"PolicyTargetId",
          "documentation":"<p>The unique identifier (ID) of the policy target.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with \"r-\" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Account: a string that consists of exactly 12 digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>"
        },
        "Arn":{
          "shape":"GenericArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the policy target.</p> <p>For more information about ARNs in Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns\">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "Name":{
          "shape":"TargetName",
          "documentation":"<p>The friendly name of the policy target.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>"
        },
        "Type":{
          "shape":"TargetType",
          "documentation":"<p>The type of the policy target.</p>"
        }
      },
      "documentation":"<p>Contains information about a root, OU, or account that a policy is attached to.</p>"
    },
    "PolicyTargets":{
      "type":"list",
      "member":{"shape":"PolicyTargetSummary"}
    },
    "PolicyType":{
      "type":"string",
      "enum":["SERVICE_CONTROL_POLICY"]
    },
    "PolicyTypeAlreadyEnabledException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The specified policy type is already enabled in the specified root.</p>",
      "exception":true
    },
    "PolicyTypeNotAvailableForOrganizationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>You can't use the specified policy type with the feature set currently enabled for this organization. For example, you can enable SCPs only after you enable all features in the organization. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html#enable_policies_on_root\">Enabling and Disabling a Policy Type on a Root</a> in the <i>AWS Organizations User Guide</i>.</p>",
      "exception":true
    },
    "PolicyTypeNotEnabledException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The specified policy type isn't currently enabled in this root. You can't attach policies of the specified type to entities in a root until you enable that type in the root. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html\">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide</i>.</p>",
      "exception":true
    },
    "PolicyTypeStatus":{
      "type":"string",
      "enum":[
        "ENABLED",
        "PENDING_ENABLE",
        "PENDING_DISABLE"
      ]
    },
    "PolicyTypeSummary":{
      "type":"structure",
      "members":{
        "Type":{
          "shape":"PolicyType",
          "documentation":"<p>The name of the policy type.</p>"
        },
        "Status":{
          "shape":"PolicyTypeStatus",
          "documentation":"<p>The status of the policy type as it relates to the associated root. To attach a policy of the specified type to a root or to an OU or account in that root, it must be available in the organization and enabled for that root.</p>"
        }
      },
      "documentation":"<p>Contains information about a policy type and its status in the associated root.</p>"
    },
    "PolicyTypes":{
      "type":"list",
      "member":{"shape":"PolicyTypeSummary"}
    },
    "RemoveAccountFromOrganizationRequest":{
      "type":"structure",
      "required":["AccountId"],
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The unique identifier (ID) of the member account that you want to remove from the organization.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an account ID string requires exactly 12 digits.</p>"
        }
      }
    },
    "RoleName":{
      "type":"string",
      "pattern":"[\\w+=,.@-]{1,64}"
    },
    "Root":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"RootId",
          "documentation":"<p>The unique identifier (ID) for the root.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a root ID string requires \"r-\" followed by from 4 to 32 lower-case letters or digits.</p>"
        },
        "Arn":{
          "shape":"RootArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the root.</p> <p>For more information about ARNs in Organizations, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns\">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>"
        },
        "Name":{
          "shape":"RootName",
          "documentation":"<p>The friendly name of the root.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>"
        },
        "PolicyTypes":{
          "shape":"PolicyTypes",
          "documentation":"<p>The types of policies that are currently enabled for the root and therefore can be attached to the root or to its OUs or accounts.</p> <note> <p>Even if a policy type is shown as available in the organization, you can separately enable and disable them at the root level by using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. Use <a>DescribeOrganization</a> to see the availability of the policy types in that organization.</p> </note>"
        }
      },
      "documentation":"<p>Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root.</p>"
    },
    "RootArn":{
      "type":"string",
      "pattern":"^arn:aws:organizations::\\d{12}:root\\/o-[a-z0-9]{10,32}\\/r-[0-9a-z]{4,32}"
    },
    "RootId":{
      "type":"string",
      "pattern":"^r-[0-9a-z]{4,32}$"
    },
    "RootName":{
      "type":"string",
      "max":128,
      "min":1
    },
    "RootNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find a root with the <code>RootId</code> that you specified.</p>",
      "exception":true
    },
    "Roots":{
      "type":"list",
      "member":{"shape":"Root"}
    },
    "ServiceException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>AWS Organizations can't complete your request because of an internal service error. Try again later.</p>",
      "exception":true
    },
    "ServicePrincipal":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[\\w+=,.@-]*"
    },
    "SourceParentNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find a source root or OU with the <code>ParentId</code> that you specified.</p>",
      "exception":true
    },
    "TargetName":{
      "type":"string",
      "max":128,
      "min":1
    },
    "TargetNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>We can't find a root, OU, or account with the <code>TargetId</code> that you specified.</p>",
      "exception":true
    },
    "TargetType":{
      "type":"string",
      "enum":[
        "ACCOUNT",
        "ORGANIZATIONAL_UNIT",
        "ROOT"
      ]
    },
    "Timestamp":{"type":"timestamp"},
    "TooManyRequestsException":{
      "type":"structure",
      "members":{
        "Type":{"shape":"ExceptionType"},
        "Message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>You've sent too many requests in too short a period of time. The limit helps protect against denial-of-service attacks. Try again later.</p>",
      "exception":true
    },
    "UpdateOrganizationalUnitRequest":{
      "type":"structure",
      "required":["OrganizationalUnitId"],
      "members":{
        "OrganizationalUnitId":{
          "shape":"OrganizationalUnitId",
          "documentation":"<p>The unique identifier (ID) of the OU that you want to rename. You can get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for an organizational unit ID string requires \"ou-\" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second \"-\" dash and from 8 to 32 additional lower-case letters or digits.</p>"
        },
        "Name":{
          "shape":"OrganizationalUnitName",
          "documentation":"<p>The new name that you want to assign to the OU.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>"
        }
      }
    },
    "UpdateOrganizationalUnitResponse":{
      "type":"structure",
      "members":{
        "OrganizationalUnit":{
          "shape":"OrganizationalUnit",
          "documentation":"<p>A structure that contains the details about the specified OU, including its new name.</p>"
        }
      }
    },
    "UpdatePolicyRequest":{
      "type":"structure",
      "required":["PolicyId"],
      "members":{
        "PolicyId":{
          "shape":"PolicyId",
          "documentation":"<p>The unique identifier (ID) of the policy that you want to update.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> for a policy ID string requires \"p-\" followed by from 8 to 128 lower-case letters or digits.</p>"
        },
        "Name":{
          "shape":"PolicyName",
          "documentation":"<p>If provided, the new name for the policy.</p> <p>The <a href=\"http://wikipedia.org/wiki/regex\">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>"
        },
        "Description":{
          "shape":"PolicyDescription",
          "documentation":"<p>If provided, the new description for the policy.</p>"
        },
        "Content":{
          "shape":"PolicyContent",
          "documentation":"<p>If provided, the new content for the policy. The text must be correctly formatted JSON that complies with the syntax for the policy's type. For more information, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html\">Service Control Policy Syntax</a> in the <i>AWS Organizations User Guide</i>.</p>"
        }
      }
    },
    "UpdatePolicyResponse":{
      "type":"structure",
      "members":{
        "Policy":{
          "shape":"Policy",
          "documentation":"<p>A structure that contains details about the updated policy, showing the requested changes.</p>"
        }
      }
    }
  },
  "documentation":"<fullname>AWS Organizations API Reference</fullname> <p>AWS Organizations is a web service that enables you to consolidate your multiple AWS accounts into an <i>organization</i> and centrally manage your accounts and their resources.</p> <p>This guide provides descriptions of the Organizations API. For more information about using this service, see the <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html\">AWS Organizations User Guide</a>.</p> <p> <b>API Version</b> </p> <p>This version of the Organizations API Reference documents the Organizations API version 2016-11-28.</p> <note> <p>As an alternative to using the API directly, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to AWS Organizations. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the AWS SDKs, including how to download and install them, see <a href=\"http://aws.amazon.com/tools/\">Tools for Amazon Web Services</a>.</p> </note> <p>We recommend that you use the AWS SDKs to make programmatic API calls to Organizations. However, you also can use the Organizations Query API to make direct calls to the Organizations web service. To learn more about the Organizations Query API, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_query-requests.html\">Making Query Requests</a> in the <i>AWS Organizations User Guide</i>. Organizations supports GET and POST requests for all actions. That is, the API does not require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p> <p> <b>Signing Requests</b> </p> <p>When you send HTTP requests to AWS, you must sign the requests so that AWS can identify who sent them. You sign requests with your AWS access key, which consists of an access key ID and a secret access key. We strongly recommend that you do not create an access key for your root account. Anyone who has the access key for your root account has unrestricted access to all the resources in your account. Instead, create an access key for an IAM user account that has administrative privileges. As another option, use AWS Security Token Service to generate temporary security credentials, and use those credentials to sign requests. </p> <p>To sign requests, we recommend that you use <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\">Signature Version 4</a>. If you have an existing application that uses Signature Version 2, you do not have to update it to use Signature Version 4. However, some operations now require Signature Version 4. The documentation for operations that require version 4 indicate this requirement. </p> <p>When you use the AWS Command Line Interface (AWS CLI) or one of the AWS SDKs to make requests to AWS, these tools automatically sign the requests for you with the access key that you specify when you configure the tools.</p> <p>In this release, each organization can have only one root. In a future release, a single organization will support multiple roots.</p> <p> <b>Support and Feedback for AWS Organizations</b> </p> <p>We welcome your feedback. Send your comments to <a href=\"mailto:feedback-awsorganizations@amazon.com\">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in the <a href=\"http://forums.aws.amazon.com/forum.jspa?forumID=219\">AWS Organizations support forum</a>. For more information about the AWS support forums, see <a href=\"http://forums.aws.amazon.com/help.jspa\">Forums Help</a>.</p> <p> <b>Endpoint to Call When Using the CLI or the AWS API</b> </p> <p>For the current release of Organizations, you must specify the <code>us-east-1</code> region for all AWS API and CLI calls. You can do this in the CLI by using these parameters and commands:</p> <ul> <li> <p>Use the following parameter with each command to specify both the endpoint and its region:</p> <p> <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code> </p> </li> <li> <p>Use the default endpoint, but configure your default region with this command:</p> <p> <code>aws configure set default.region us-east-1</code> </p> </li> <li> <p>Use the following parameter with each command to specify the endpoint:</p> <p> <code>--region us-east-1</code> </p> </li> </ul> <p>For the various SDKs used to call the APIs, see the documentation for the SDK of interest to learn how to direct the requests to a specific endpoint. For more information, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/rande.html#sts_region\">Regions and Endpoints</a> in the <i>AWS General Reference</i>. </p> <p> <b>How examples are presented</b> </p> <p>The JSON returned by the AWS Organizations service as response to your requests is returned as a single long string without line breaks or formatting whitespace. Both line breaks and whitespace are included in the examples in this guide to improve readability. When example input parameters also would result in long strings that would extend beyond the screen, we insert line breaks to enhance readability. You should always submit the input as a single JSON text string.</p> <p> <b>Recording API Requests</b> </p> <p>AWS Organizations supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information collected by AWS CloudTrail, you can determine which requests were successfully made to Organizations, who made the request, when it was made, and so on. For more about AWS Organizations and its support for AWS CloudTrail, see <a href=\"http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html#orgs_cloudtrail-integration\">Logging AWS Organizations Events with AWS CloudTrail</a> in the <i>AWS Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html\">AWS CloudTrail User Guide</a>.</p>"
}
