awsim['workmail'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-10-01",
    "endpointPrefix":"workmail",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Amazon WorkMail",
    "serviceId":"WorkMail",
    "signatureVersion":"v4",
    "targetPrefix":"WorkMailService",
    "uid":"workmail-2017-10-01"
  },
  "operations":{
    "AssociateDelegateToResource":{
      "name":"AssociateDelegateToResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateDelegateToResourceRequest"},
      "output":{"shape":"AssociateDelegateToResourceResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Adds a member to the resource's set of delegates.</p>",
      "idempotent":true
    },
    "AssociateMemberToGroup":{
      "name":"AssociateMemberToGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateMemberToGroupRequest"},
      "output":{"shape":"AssociateMemberToGroupResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"UnsupportedOperationException"}
      ],
      "documentation":"<p>Adds a member to the group's set.</p>",
      "idempotent":true
    },
    "CreateAlias":{
      "name":"CreateAlias",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateAliasRequest"},
      "output":{"shape":"CreateAliasResponse"},
      "errors":[
        {"shape":"EmailAddressInUseException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"MailDomainNotFoundException"},
        {"shape":"MailDomainStateException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Adds an alias to the set of a given member of Amazon WorkMail.</p>",
      "idempotent":true
    },
    "CreateGroup":{
      "name":"CreateGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateGroupRequest"},
      "output":{"shape":"CreateGroupResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NameAvailabilityException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"ReservedNameException"},
        {"shape":"UnsupportedOperationException"}
      ],
      "documentation":"<p>Creates a group that can be used in Amazon WorkMail by calling the RegisterToWorkMail operation.</p>",
      "idempotent":true
    },
    "CreateResource":{
      "name":"CreateResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateResourceRequest"},
      "output":{"shape":"CreateResourceResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"InvalidParameterException"},
        {"shape":"NameAvailabilityException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"ReservedNameException"}
      ],
      "documentation":"<p>Creates a new Amazon WorkMail resource. The available types are equipment and room.</p>",
      "idempotent":true
    },
    "CreateUser":{
      "name":"CreateUser",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateUserRequest"},
      "output":{"shape":"CreateUserResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"InvalidParameterException"},
        {"shape":"InvalidPasswordException"},
        {"shape":"NameAvailabilityException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"ReservedNameException"},
        {"shape":"UnsupportedOperationException"}
      ],
      "documentation":"<p>Creates a user who can be used in Amazon WorkMail by calling the RegisterToWorkMail operation.</p>",
      "idempotent":true
    },
    "DeleteAlias":{
      "name":"DeleteAlias",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteAliasRequest"},
      "output":{"shape":"DeleteAliasResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Remove the alias from a set of aliases for a given user.</p>",
      "idempotent":true
    },
    "DeleteGroup":{
      "name":"DeleteGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteGroupRequest"},
      "output":{"shape":"DeleteGroupResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"UnsupportedOperationException"}
      ],
      "documentation":"<p>Deletes a group from Amazon WorkMail.</p>",
      "idempotent":true
    },
    "DeleteMailboxPermissions":{
      "name":"DeleteMailboxPermissions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteMailboxPermissionsRequest"},
      "output":{"shape":"DeleteMailboxPermissionsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Deletes permissions granted to a user or group.</p>",
      "idempotent":true
    },
    "DeleteResource":{
      "name":"DeleteResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteResourceRequest"},
      "output":{"shape":"DeleteResourceResponse"},
      "errors":[
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Deletes the specified resource. </p>",
      "idempotent":true
    },
    "DeleteUser":{
      "name":"DeleteUser",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteUserRequest"},
      "output":{"shape":"DeleteUserResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"UnsupportedOperationException"}
      ],
      "documentation":"<p>Deletes a user from Amazon WorkMail and all subsequent systems. The action can't be undone. The mailbox is kept as-is for a minimum of 30 days, without any means to restore it. </p>",
      "idempotent":true
    },
    "DeregisterFromWorkMail":{
      "name":"DeregisterFromWorkMail",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeregisterFromWorkMailRequest"},
      "output":{"shape":"DeregisterFromWorkMailResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. Amazon WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.</p>",
      "idempotent":true
    },
    "DescribeGroup":{
      "name":"DescribeGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeGroupRequest"},
      "output":{"shape":"DescribeGroupResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Returns the data available for the group.</p>",
      "idempotent":true
    },
    "DescribeOrganization":{
      "name":"DescribeOrganization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeOrganizationRequest"},
      "output":{"shape":"DescribeOrganizationResponse"},
      "errors":[
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"}
      ],
      "documentation":"<p>Provides more information regarding a given organization based on its identifier.</p>",
      "idempotent":true
    },
    "DescribeResource":{
      "name":"DescribeResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeResourceRequest"},
      "output":{"shape":"DescribeResourceResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Returns the data available for the resource.</p>",
      "idempotent":true
    },
    "DescribeUser":{
      "name":"DescribeUser",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeUserRequest"},
      "output":{"shape":"DescribeUserResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Provides information regarding the user.</p>",
      "idempotent":true
    },
    "DisassociateDelegateFromResource":{
      "name":"DisassociateDelegateFromResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateDelegateFromResourceRequest"},
      "output":{"shape":"DisassociateDelegateFromResourceResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Removes a member from the resource's set of delegates.</p>",
      "idempotent":true
    },
    "DisassociateMemberFromGroup":{
      "name":"DisassociateMemberFromGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateMemberFromGroupRequest"},
      "output":{"shape":"DisassociateMemberFromGroupResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"UnsupportedOperationException"}
      ],
      "documentation":"<p>Removes a member from a group.</p>",
      "idempotent":true
    },
    "ListAliases":{
      "name":"ListAliases",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAliasesRequest"},
      "output":{"shape":"ListAliasesResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Creates a paginated call to list the aliases associated with a given entity.</p>",
      "idempotent":true
    },
    "ListGroupMembers":{
      "name":"ListGroupMembers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListGroupMembersRequest"},
      "output":{"shape":"ListGroupMembersResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Returns an overview of the members of a group.</p>",
      "idempotent":true
    },
    "ListGroups":{
      "name":"ListGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListGroupsRequest"},
      "output":{"shape":"ListGroupsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Returns summaries of the organization's groups.</p>",
      "idempotent":true
    },
    "ListMailboxPermissions":{
      "name":"ListMailboxPermissions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListMailboxPermissionsRequest"},
      "output":{"shape":"ListMailboxPermissionsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Lists the mailbox permissions associated with a mailbox.</p>",
      "idempotent":true
    },
    "ListOrganizations":{
      "name":"ListOrganizations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListOrganizationsRequest"},
      "output":{"shape":"ListOrganizationsResponse"},
      "errors":[
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Returns summaries of the customer's non-deleted organizations.</p>",
      "idempotent":true
    },
    "ListResourceDelegates":{
      "name":"ListResourceDelegates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListResourceDelegatesRequest"},
      "output":{"shape":"ListResourceDelegatesResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.</p>",
      "idempotent":true
    },
    "ListResources":{
      "name":"ListResources",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListResourcesRequest"},
      "output":{"shape":"ListResourcesResponse"},
      "errors":[
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Returns summaries of the organization's resources.</p>",
      "idempotent":true
    },
    "ListUsers":{
      "name":"ListUsers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListUsersRequest"},
      "output":{"shape":"ListUsersResponse"},
      "errors":[
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Returns summaries of the organization's users.</p>",
      "idempotent":true
    },
    "PutMailboxPermissions":{
      "name":"PutMailboxPermissions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutMailboxPermissionsRequest"},
      "output":{"shape":"PutMailboxPermissionsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Sets permissions for a user or group. This replaces any pre-existing permissions set for the entity.</p>",
      "idempotent":true
    },
    "RegisterToWorkMail":{
      "name":"RegisterToWorkMail",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RegisterToWorkMailRequest"},
      "output":{"shape":"RegisterToWorkMailResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"EmailAddressInUseException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"EntityAlreadyRegisteredException"},
        {"shape":"InvalidParameterException"},
        {"shape":"MailDomainNotFoundException"},
        {"shape":"MailDomainStateException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Registers an existing and disabled user, group, or resource/entity for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the entity is enabled and fails if the entity is deleted. This operation results in the accumulation of costs. For more information, see <a href=\"http://aws.amazon.com/workmail/pricing\">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. Users can either be created by calling the CreateUser API or they can be synchronized from your directory. For more information, see DeregisterFromWorkMail.</p>",
      "idempotent":true
    },
    "ResetPassword":{
      "name":"ResetPassword",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ResetPasswordRequest"},
      "output":{"shape":"ResetPasswordResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"InvalidPasswordException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"UnsupportedOperationException"}
      ],
      "documentation":"<p>Allows the administrator to reset the password for a user.</p>",
      "idempotent":true
    },
    "UpdatePrimaryEmailAddress":{
      "name":"UpdatePrimaryEmailAddress",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdatePrimaryEmailAddressRequest"},
      "output":{"shape":"UpdatePrimaryEmailAddressResponse"},
      "errors":[
        {"shape":"DirectoryServiceAuthenticationFailedException"},
        {"shape":"DirectoryUnavailableException"},
        {"shape":"EmailAddressInUseException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"MailDomainNotFoundException"},
        {"shape":"MailDomainStateException"},
        {"shape":"InvalidParameterException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"},
        {"shape":"UnsupportedOperationException"}
      ],
      "documentation":"<p>Updates the primary email for an entity. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email) and the email provided in the input is promoted as the primary.</p>",
      "idempotent":true
    },
    "UpdateResource":{
      "name":"UpdateResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateResourceRequest"},
      "output":{"shape":"UpdateResourceResponse"},
      "errors":[
        {"shape":"DirectoryUnavailableException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"EntityStateException"},
        {"shape":"InvalidConfigurationException"},
        {"shape":"EmailAddressInUseException"},
        {"shape":"MailDomainNotFoundException"},
        {"shape":"MailDomainStateException"},
        {"shape":"NameAvailabilityException"},
        {"shape":"OrganizationNotFoundException"},
        {"shape":"OrganizationStateException"}
      ],
      "documentation":"<p>Updates data for the resource. It must be preceded by a describe call in order to have the latest information. The dataset in the request should be the one expected when performing another describe call.</p>",
      "idempotent":true
    }
  },
  "shapes":{
    "Aliases":{
      "type":"list",
      "member":{"shape":"EmailAddress"}
    },
    "AssociateDelegateToResourceRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "ResourceId",
        "EntityId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The organization under which the resource exists.</p>"
        },
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The resource for which members are associated.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The member (user or group) to associate to the resource.</p>"
        }
      }
    },
    "AssociateDelegateToResourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "AssociateMemberToGroupRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "GroupId",
        "MemberId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The organization under which the group exists.</p>"
        },
        "GroupId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The group for which the member is associated.</p>"
        },
        "MemberId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The member to associate to the group.</p>"
        }
      }
    },
    "AssociateMemberToGroupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "BookingOptions":{
      "type":"structure",
      "members":{
        "AutoAcceptRequests":{
          "shape":"Boolean",
          "documentation":"<p>The resource's ability to automatically reply to requests. If disabled, delegates must be associated to the resource.</p>"
        },
        "AutoDeclineRecurringRequests":{
          "shape":"Boolean",
          "documentation":"<p>The resource's ability to automatically decline any recurring requests.</p>"
        },
        "AutoDeclineConflictingRequests":{
          "shape":"Boolean",
          "documentation":"<p>The resource's ability to automatically decline any conflicting requests.</p>"
        }
      },
      "documentation":"<p>At least one delegate must be associated to the resource to disable automatic replies from the resource.</p>"
    },
    "Boolean":{"type":"boolean"},
    "CreateAliasRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId",
        "Alias"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The organization under which the member exists.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The alias is added to this Amazon WorkMail entity.</p>"
        },
        "Alias":{
          "shape":"EmailAddress",
          "documentation":"<p>The alias to add to the user.</p>"
        }
      }
    },
    "CreateAliasResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateGroupRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "Name"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The organization under which the group is to be created.</p>"
        },
        "Name":{
          "shape":"GroupName",
          "documentation":"<p>The name of the group.</p>"
        }
      }
    },
    "CreateGroupResponse":{
      "type":"structure",
      "members":{
        "GroupId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The ID of the group.</p>"
        }
      }
    },
    "CreateResourceRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "Name",
        "Type"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier associated with the organization for which the resource is created.</p>"
        },
        "Name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the created resource.</p>"
        },
        "Type":{
          "shape":"ResourceType",
          "documentation":"<p>The type of the created resource.</p>"
        }
      }
    },
    "CreateResourceResponse":{
      "type":"structure",
      "members":{
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The identifier of the created resource.</p>"
        }
      }
    },
    "CreateUserRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "Name",
        "DisplayName",
        "Password"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier of the organization for which the user is created.</p>"
        },
        "Name":{
          "shape":"UserName",
          "documentation":"<p>The name for the user to be created.</p>"
        },
        "DisplayName":{
          "shape":"String",
          "documentation":"<p>The display name for the user to be created.</p>"
        },
        "Password":{
          "shape":"Password",
          "documentation":"<p>The password for the user to be created.</p>"
        }
      }
    },
    "CreateUserResponse":{
      "type":"structure",
      "members":{
        "UserId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The information regarding the newly created user.</p>"
        }
      }
    },
    "Delegate":{
      "type":"structure",
      "required":[
        "Id",
        "Type"
      ],
      "members":{
        "Id":{
          "shape":"String",
          "documentation":"<p>The identifier for the user or group is associated as the resource's delegate.</p>"
        },
        "Type":{
          "shape":"MemberType",
          "documentation":"<p>The type of the delegate: user or group.</p>"
        }
      },
      "documentation":"<p>The name of the attribute, which is one of the values defined in the UserAttribute enumeration.</p>"
    },
    "DeleteAliasRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId",
        "Alias"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the user exists.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the Amazon WorkMail entity to have the aliases removed.</p>"
        },
        "Alias":{
          "shape":"EmailAddress",
          "documentation":"<p>The aliases to be removed from the user's set of aliases. Duplicate entries in the list are collapsed into single entries (the list is transformed into a set).</p>"
        }
      }
    },
    "DeleteAliasResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteGroupRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "GroupId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The organization that contains the group.</p>"
        },
        "GroupId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the group to be deleted.</p>"
        }
      }
    },
    "DeleteGroupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteMailboxPermissionsRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId",
        "GranteeId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier of the organization under which the entity (user or group) exists.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the entity (user or group) for which to delete mailbox permissions.</p>"
        },
        "GranteeId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the entity (user or group) for which to delete granted permissions.</p>"
        }
      }
    },
    "DeleteMailboxPermissionsResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteResourceRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "ResourceId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier associated with the organization for which the resource is deleted.</p>"
        },
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The identifier of the resource to be deleted.</p>"
        }
      }
    },
    "DeleteResourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteUserRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "UserId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The organization that contains the user.</p>"
        },
        "UserId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the user to be deleted.</p>"
        }
      }
    },
    "DeleteUserResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeregisterFromWorkMailRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the Amazon WorkMail entity exists.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the entity to be updated.</p>"
        }
      }
    },
    "DeregisterFromWorkMailResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeGroupRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "GroupId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the group exists.</p>"
        },
        "GroupId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the group to be described.</p>"
        }
      }
    },
    "DescribeGroupResponse":{
      "type":"structure",
      "members":{
        "GroupId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the described group.</p>"
        },
        "Name":{
          "shape":"GroupName",
          "documentation":"<p>The name of the described group.</p>"
        },
        "Email":{
          "shape":"EmailAddress",
          "documentation":"<p>The email of the described group.</p>"
        },
        "State":{
          "shape":"EntityState",
          "documentation":"<p>The state of the user: enabled (registered to Amazon WorkMail) or disabled (deregistered or never registered to Amazon WorkMail).</p>"
        },
        "EnabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time when a user was registered to Amazon WorkMail, in UNIX epoch time format.</p>"
        },
        "DisabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time when a user was deregistered from Amazon WorkMail, in UNIX epoch time format.</p>"
        }
      }
    },
    "DescribeOrganizationRequest":{
      "type":"structure",
      "required":["OrganizationId"],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization to be described.</p>"
        }
      }
    },
    "DescribeOrganizationResponse":{
      "type":"structure",
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier of an organization.</p>"
        },
        "Alias":{
          "shape":"OrganizationName",
          "documentation":"<p>The alias for an organization.</p>"
        },
        "State":{
          "shape":"String",
          "documentation":"<p>The state of an organization.</p>"
        },
        "DirectoryId":{
          "shape":"String",
          "documentation":"<p>The identifier for the directory associated with an Amazon WorkMail organization.</p>"
        },
        "DirectoryType":{
          "shape":"String",
          "documentation":"<p>The type of directory associated with the Amazon WorkMail organization.</p>"
        },
        "DefaultMailDomain":{
          "shape":"String",
          "documentation":"<p>The default mail domain associated with the organization.</p>"
        },
        "CompletedDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date at which the organization became usable in the Amazon WorkMail context, in UNIX epoch time format.</p>"
        },
        "ErrorMessage":{
          "shape":"String",
          "documentation":"<p>The (optional) error message indicating if unexpected behavior was encountered with regards to the organization.</p>"
        }
      }
    },
    "DescribeResourceRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "ResourceId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier associated with the organization for which the resource is described.</p>"
        },
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The identifier of the resource to be described.</p>"
        }
      }
    },
    "DescribeResourceResponse":{
      "type":"structure",
      "members":{
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The identifier of the described resource.</p>"
        },
        "Email":{
          "shape":"EmailAddress",
          "documentation":"<p>The email of the described resource.</p>"
        },
        "Name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the described resource.</p>"
        },
        "Type":{
          "shape":"ResourceType",
          "documentation":"<p>The type of the described resource.</p>"
        },
        "BookingOptions":{
          "shape":"BookingOptions",
          "documentation":"<p>The booking options for the described resource.</p>"
        },
        "State":{
          "shape":"EntityState",
          "documentation":"<p>The state of the resource: enabled (registered to Amazon WorkMail) or disabled (deregistered or never registered to Amazon WorkMail).</p>"
        },
        "EnabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time when a resource was registered to Amazon WorkMail, in UNIX epoch time format.</p>"
        },
        "DisabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time when a resource was registered from Amazon WorkMail, in UNIX epoch time format.</p>"
        }
      }
    },
    "DescribeUserRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "UserId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the user exists.</p>"
        },
        "UserId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the user to be described.</p>"
        }
      }
    },
    "DescribeUserResponse":{
      "type":"structure",
      "members":{
        "UserId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the described user.</p>"
        },
        "Name":{
          "shape":"UserName",
          "documentation":"<p>The name for the user.</p>"
        },
        "Email":{
          "shape":"EmailAddress",
          "documentation":"<p>The email of the user.</p>"
        },
        "DisplayName":{
          "shape":"String",
          "documentation":"<p>The display name of the user.</p>"
        },
        "State":{
          "shape":"EntityState",
          "documentation":"<p>The state of a user: enabled (registered to Amazon WorkMail) or disabled (deregistered or never registered to Amazon WorkMail).</p>"
        },
        "UserRole":{
          "shape":"UserRole",
          "documentation":"<p>In certain cases other entities are modeled as users. If interoperability is enabled, resources are imported into Amazon WorkMail as users. Because different Amazon WorkMail organizations rely on different directory types, administrators can distinguish between a user that is not registered to Amazon WorkMail (is disabled and has a user role) and the administrative users of the directory. The values are USER, RESOURCE, and SYSTEM_USER.</p>"
        },
        "EnabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time at which the user was enabled for Amazon WorkMail usage, in UNIX epoch time format.</p>"
        },
        "DisabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time at which the user was disabled for Amazon WorkMail usage, in UNIX epoch time format.</p>"
        }
      }
    },
    "DirectoryServiceAuthenticationFailedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The Directory Service doesn't recognize the credentials supplied by the Amazon WorkMail service.</p>",
      "exception":true
    },
    "DirectoryUnavailableException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The directory that you are trying to perform operations on isn't available.</p>",
      "exception":true
    },
    "DisassociateDelegateFromResourceRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "ResourceId",
        "EntityId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the resource exists.</p>"
        },
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The identifier of the resource from which delegates' set members are removed. </p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the member (user, group) to be removed from the resource's delegates.</p>"
        }
      }
    },
    "DisassociateDelegateFromResourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DisassociateMemberFromGroupRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "GroupId",
        "MemberId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the group exists.</p>"
        },
        "GroupId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the group from which members are removed.</p>"
        },
        "MemberId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the member to be removed to the group.</p>"
        }
      }
    },
    "DisassociateMemberFromGroupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "EmailAddress":{
      "type":"string",
      "max":254,
      "min":1,
      "pattern":"[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
    },
    "EmailAddressInUseException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The email address that you're trying to assign is already created for a different user, group, or resource.</p>",
      "exception":true
    },
    "EntityAlreadyRegisteredException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The user, group, or resource that you're trying to register is already registered.</p>",
      "exception":true
    },
    "EntityNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The identifier supplied for the entity is valid, but it does not exist in your organization.</p>",
      "exception":true
    },
    "EntityState":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED",
        "DELETED"
      ]
    },
    "EntityStateException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>You are performing an operation on an entity that isn't in the expected state, such as trying to update a deleted user.</p>",
      "exception":true
    },
    "Group":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the group.</p>"
        },
        "Email":{
          "shape":"EmailAddress",
          "documentation":"<p>The email of the group.</p>"
        },
        "Name":{
          "shape":"GroupName",
          "documentation":"<p>The name of the group.</p>"
        },
        "State":{
          "shape":"EntityState",
          "documentation":"<p>The state of the group, which can be ENABLED, DISABLED, or DELETED.</p>"
        },
        "EnabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date indicating when the group was enabled for Amazon WorkMail use.</p>"
        },
        "DisabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date indicating when the group was disabled from Amazon WorkMail use.</p>"
        }
      },
      "documentation":"<p>The representation of an Amazon WorkMail group.</p>"
    },
    "GroupName":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"[\\u0020-\\u00FF]+"
    },
    "Groups":{
      "type":"list",
      "member":{"shape":"Group"}
    },
    "InvalidConfigurationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The configuration for a resource isn't valid. A resource must either be able to auto-respond to requests or have at least one delegate associated that can do it on its behalf.</p>",
      "exception":true
    },
    "InvalidParameterException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>One or more of the input parameters don't match the service's restrictions.</p>",
      "exception":true
    },
    "InvalidPasswordException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The supplied password doesn't match the minimum security constraints, such as length or use of special characters.</p>",
      "exception":true
    },
    "ListAliasesRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the entity exists.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the entity for which to list the aliases.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call.</p>"
        }
      }
    },
    "ListAliasesResponse":{
      "type":"structure",
      "members":{
        "Aliases":{
          "shape":"Aliases",
          "documentation":"<p>The entity's paginated aliases.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The value is \"null\" when there are no more results to return.</p>"
        }
      }
    },
    "ListGroupMembersRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "GroupId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the group exists.</p>"
        },
        "GroupId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the group to which the members are associated.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p> The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call.</p>"
        }
      }
    },
    "ListGroupMembersResponse":{
      "type":"structure",
      "members":{
        "Members":{
          "shape":"Members",
          "documentation":"<p>The members associated to the group.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>"
        }
      }
    },
    "ListGroupsRequest":{
      "type":"structure",
      "required":["OrganizationId"],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the groups exist.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call.</p>"
        }
      }
    },
    "ListGroupsResponse":{
      "type":"structure",
      "members":{
        "Groups":{
          "shape":"Groups",
          "documentation":"<p>The overview of groups for an organization.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The value is \"null\" when there are no more results to return.</p>"
        }
      }
    },
    "ListMailboxPermissionsRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier of the organization under which the entity (user or group) exists.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the entity (user or group) for which to list mailbox permissions.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call.</p>"
        }
      }
    },
    "ListMailboxPermissionsResponse":{
      "type":"structure",
      "members":{
        "Permissions":{
          "shape":"Permissions",
          "documentation":"<p>One page of the entity's mailbox permissions.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The value is \"null\" when there are no more results to return.</p>"
        }
      }
    },
    "ListOrganizationsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call.</p>"
        }
      }
    },
    "ListOrganizationsResponse":{
      "type":"structure",
      "members":{
        "OrganizationSummaries":{
          "shape":"OrganizationSummaries",
          "documentation":"<p>The overview of owned organizations presented as a list of organization summaries.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The value is \"null\" when there are no more results to return.</p>"
        }
      }
    },
    "ListResourceDelegatesRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "ResourceId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization that contains the resource for which delegates are listed.</p>"
        },
        "ResourceId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the resource whose delegates are listed.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to paginate through the delegates associated with a resource.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The number of maximum results in a page.</p>"
        }
      }
    },
    "ListResourceDelegatesResponse":{
      "type":"structure",
      "members":{
        "Delegates":{
          "shape":"ResourceDelegates",
          "documentation":"<p>One page of the resource's delegates.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token used to paginate through the delegates associated with a resource. While results are still available, it has an associated value. When the last page is reached, the token is empty. </p>"
        }
      }
    },
    "ListResourcesRequest":{
      "type":"structure",
      "required":["OrganizationId"],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the resources exist.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call.</p>"
        }
      }
    },
    "ListResourcesResponse":{
      "type":"structure",
      "members":{
        "Resources":{
          "shape":"Resources",
          "documentation":"<p>One page of the organization's resource representation.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p> The token used to paginate through all the organization's resources. While results are still available, it has an associated value. When the last page is reached, the token is empty.</p>"
        }
      }
    },
    "ListUsersRequest":{
      "type":"structure",
      "required":["OrganizationId"],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the users exist.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>TBD</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in a single call.</p>"
        }
      }
    },
    "ListUsersResponse":{
      "type":"structure",
      "members":{
        "Users":{
          "shape":"Users",
          "documentation":"<p>The overview of users for an organization.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p> The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.</p>"
        }
      }
    },
    "MailDomainNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>For an email or alias to be created in Amazon WorkMail, the included domain must be defined in the organization.</p>",
      "exception":true
    },
    "MailDomainStateException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>After a domain has been added to the organization, it must be verified. The domain is not yet verified.</p>",
      "exception":true
    },
    "MaxResults":{
      "type":"integer",
      "box":true,
      "max":100,
      "min":1
    },
    "Member":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"String",
          "documentation":"<p>The identifier of the member.</p>"
        },
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the member.</p>"
        },
        "Type":{
          "shape":"MemberType",
          "documentation":"<p>A member can be a user or group.</p>"
        },
        "State":{
          "shape":"EntityState",
          "documentation":"<p>The state of the member, which can be ENABLED, DISABLED, or DELETED.</p>"
        },
        "EnabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date indicating when the member was enabled for Amazon WorkMail use.</p>"
        },
        "DisabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date indicating when the member was disabled from Amazon WorkMail use.</p>"
        }
      },
      "documentation":"<p>The representation of a group member (user or group).</p>"
    },
    "MemberType":{
      "type":"string",
      "enum":[
        "GROUP",
        "USER"
      ]
    },
    "Members":{
      "type":"list",
      "member":{"shape":"Member"}
    },
    "NameAvailabilityException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The entity (user, group, or user) name isn't unique in Amazon WorkMail.</p>",
      "exception":true
    },
    "NextToken":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "OrganizationId":{
      "type":"string",
      "pattern":"^m-[0-9a-f]{32}$"
    },
    "OrganizationName":{
      "type":"string",
      "max":62,
      "min":1,
      "pattern":"^(?!d-)([\\da-zA-Z]+)([-]*[\\da-zA-Z])*"
    },
    "OrganizationNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>",
      "exception":true
    },
    "OrganizationStateException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its entities.</p>",
      "exception":true
    },
    "OrganizationSummaries":{
      "type":"list",
      "member":{"shape":"OrganizationSummary"}
    },
    "OrganizationSummary":{
      "type":"structure",
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier associated with the organization.</p>"
        },
        "Alias":{
          "shape":"OrganizationName",
          "documentation":"<p>The alias associated with the organization.</p>"
        },
        "ErrorMessage":{
          "shape":"String",
          "documentation":"<p>The error message associated with the organization. It is only present if unexpected behavior has occurred with regards to the organization. It provides insight or solutions regarding unexpected behavior.</p>"
        },
        "State":{
          "shape":"String",
          "documentation":"<p>The state associated with the organization.</p>"
        }
      },
      "documentation":"<p>The brief overview associated with an organization.</p>"
    },
    "Password":{
      "type":"string",
      "max":256,
      "pattern":"[\\u0020-\\u00FF]+",
      "sensitive":true
    },
    "Permission":{
      "type":"structure",
      "required":[
        "GranteeId",
        "GranteeType",
        "PermissionValues"
      ],
      "members":{
        "GranteeId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the entity (user or group) to which the permissions are granted.</p>"
        },
        "GranteeType":{
          "shape":"MemberType",
          "documentation":"<p>The type of entity (user, group) of the entity referred to in GranteeId.</p>"
        },
        "PermissionValues":{
          "shape":"PermissionValues",
          "documentation":"<p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>"
        }
      },
      "documentation":"<p>Permission granted to an entity (user, group) to access a certain aspect of another entity's mailbox.</p>"
    },
    "PermissionType":{
      "type":"string",
      "enum":[
        "FULL_ACCESS",
        "SEND_AS",
        "SEND_ON_BEHALF"
      ]
    },
    "PermissionValues":{
      "type":"list",
      "member":{"shape":"PermissionType"}
    },
    "Permissions":{
      "type":"list",
      "member":{"shape":"Permission"}
    },
    "PutMailboxPermissionsRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId",
        "GranteeId",
        "PermissionValues"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier of the organization under which the entity (user or group) exists.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the entity (user or group) for which to update mailbox permissions.</p>"
        },
        "GranteeId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the entity (user or group) to which to grant the permissions.</p>"
        },
        "PermissionValues":{
          "shape":"PermissionValues",
          "documentation":"<p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>"
        }
      }
    },
    "PutMailboxPermissionsResponse":{
      "type":"structure",
      "members":{
      }
    },
    "RegisterToWorkMailRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId",
        "Email"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier for the organization under which the Amazon WorkMail entity exists.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier for the entity to be updated.</p>"
        },
        "Email":{
          "shape":"EmailAddress",
          "documentation":"<p>The email for the entity to be updated.</p>"
        }
      }
    },
    "RegisterToWorkMailResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ReservedNameException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>This entity name is not allowed in Amazon WorkMail.</p>",
      "exception":true
    },
    "ResetPasswordRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "UserId",
        "Password"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier of the organization that contains the user for which the password is reset.</p>"
        },
        "UserId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the user for whom the password is reset.</p>"
        },
        "Password":{
          "shape":"Password",
          "documentation":"<p>The new password for the user.</p>"
        }
      }
    },
    "ResetPasswordResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Resource":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the resource.</p>"
        },
        "Email":{
          "shape":"EmailAddress",
          "documentation":"<p>The email of the resource.</p>"
        },
        "Name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the resource.</p>"
        },
        "Type":{
          "shape":"ResourceType",
          "documentation":"<p>The type of the resource: equipment or room.</p>"
        },
        "State":{
          "shape":"EntityState",
          "documentation":"<p>The state of the resource, which can be ENABLED, DISABLED, or DELETED.</p>"
        },
        "EnabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date indicating when the resource was enabled for Amazon WorkMail use.</p>"
        },
        "DisabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date indicating when the resource was disabled from Amazon WorkMail use.</p>"
        }
      },
      "documentation":"<p>The overview for a resource containing relevant data regarding it.</p>"
    },
    "ResourceDelegates":{
      "type":"list",
      "member":{"shape":"Delegate"}
    },
    "ResourceId":{
      "type":"string",
      "pattern":"^r-[0-9a-f]{32}$"
    },
    "ResourceName":{
      "type":"string",
      "max":20,
      "min":1,
      "pattern":"[\\w\\-.]+(@[a-zA-Z0-9.\\-]+\\.[a-zA-Z0-9]{2,})?"
    },
    "ResourceType":{
      "type":"string",
      "enum":[
        "ROOM",
        "EQUIPMENT"
      ]
    },
    "Resources":{
      "type":"list",
      "member":{"shape":"Resource"}
    },
    "String":{
      "type":"string",
      "max":256
    },
    "Timestamp":{"type":"timestamp"},
    "UnsupportedOperationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>You can't perform a write operation against a read-only directory.</p>",
      "exception":true
    },
    "UpdatePrimaryEmailAddressRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "EntityId",
        "Email"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The organization that contains the entity to update.</p>"
        },
        "EntityId":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The entity to update (user, group, or resource).</p>"
        },
        "Email":{
          "shape":"EmailAddress",
          "documentation":"<p>The value of the email to be updated as primary.</p>"
        }
      }
    },
    "UpdatePrimaryEmailAddressResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateResourceRequest":{
      "type":"structure",
      "required":[
        "OrganizationId",
        "ResourceId"
      ],
      "members":{
        "OrganizationId":{
          "shape":"OrganizationId",
          "documentation":"<p>The identifier associated with the organization for which the resource is updated.</p>"
        },
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The identifier of the resource to be updated.</p>"
        },
        "Name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the resource to be updated.</p>"
        },
        "BookingOptions":{
          "shape":"BookingOptions",
          "documentation":"<p>The resource's booking options to be updated.</p>"
        }
      }
    },
    "UpdateResourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "User":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"WorkMailIdentifier",
          "documentation":"<p>The identifier of the user.</p>"
        },
        "Email":{
          "shape":"EmailAddress",
          "documentation":"<p>The email of the user.</p>"
        },
        "Name":{
          "shape":"UserName",
          "documentation":"<p>The name of the user.</p>"
        },
        "DisplayName":{
          "shape":"String",
          "documentation":"<p>The display name of the user.</p>"
        },
        "State":{
          "shape":"EntityState",
          "documentation":"<p>The state of the user, which can be ENABLED, DISABLED, or DELETED.</p>"
        },
        "UserRole":{
          "shape":"UserRole",
          "documentation":"<p>The role of the user.</p>"
        },
        "EnabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date indicating when the user was enabled for Amazon WorkMail use.</p>"
        },
        "DisabledDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date indicating when the user was disabled from Amazon WorkMail use.</p>"
        }
      },
      "documentation":"<p>The representation of an Amazon WorkMail user.</p>"
    },
    "UserName":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"[\\w\\-.]+(@[a-zA-Z0-9.\\-]+\\.[a-zA-Z0-9]{2,})?"
    },
    "UserRole":{
      "type":"string",
      "enum":[
        "USER",
        "RESOURCE",
        "SYSTEM_USER"
      ]
    },
    "Users":{
      "type":"list",
      "member":{"shape":"User"}
    },
    "WorkMailIdentifier":{
      "type":"string",
      "max":256,
      "min":12
    }
  },
  "documentation":"<p>Amazon WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or their native iOS and Android email applications. You can integrate Amazon WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The Amazon WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All Amazon WorkMail API actions are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkMail site, the IAM user gains full administrative visibility into the entire Amazon WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>"
}
