awsim['connect'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-08-08",
    "endpointPrefix":"connect",
    "jsonVersion":"1.1",
    "protocol":"rest-json",
    "serviceAbbreviation":"Amazon Connect",
    "serviceFullName":"Amazon Connect Service",
    "serviceId":"Connect",
    "signatureVersion":"v4",
    "signingName":"connect",
    "uid":"connect-2017-08-08"
  },
  "operations":{
    "CreateUser":{
      "name":"CreateUser",
      "http":{
        "method":"PUT",
        "requestUri":"/users/{InstanceId}"
      },
      "input":{"shape":"CreateUserRequest"},
      "output":{"shape":"CreateUserResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"LimitExceededException"},
        {"shape":"DuplicateResourceException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Creates a new user account in your Amazon Connect instance.</p>"
    },
    "DeleteUser":{
      "name":"DeleteUser",
      "http":{
        "method":"DELETE",
        "requestUri":"/users/{InstanceId}/{UserId}"
      },
      "input":{"shape":"DeleteUserRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Deletes a user account from Amazon Connect.</p>"
    },
    "DescribeUser":{
      "name":"DescribeUser",
      "http":{
        "method":"GET",
        "requestUri":"/users/{InstanceId}/{UserId}"
      },
      "input":{"shape":"DescribeUserRequest"},
      "output":{"shape":"DescribeUserResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Returns a <code>User</code> object that contains information about the user account specified by the <code>UserId</code>.</p>"
    },
    "DescribeUserHierarchyGroup":{
      "name":"DescribeUserHierarchyGroup",
      "http":{
        "method":"GET",
        "requestUri":"/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}"
      },
      "input":{"shape":"DescribeUserHierarchyGroupRequest"},
      "output":{"shape":"DescribeUserHierarchyGroupResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Returns a <code>HierarchyGroup</code> object that includes information about a hierarchy group in your instance.</p>"
    },
    "DescribeUserHierarchyStructure":{
      "name":"DescribeUserHierarchyStructure",
      "http":{
        "method":"GET",
        "requestUri":"/user-hierarchy-structure/{InstanceId}"
      },
      "input":{"shape":"DescribeUserHierarchyStructureRequest"},
      "output":{"shape":"DescribeUserHierarchyStructureResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Returns a <code>HiearchyGroupStructure</code> object, which contains data about the levels in the agent hierarchy.</p>"
    },
    "GetFederationToken":{
      "name":"GetFederationToken",
      "http":{
        "method":"GET",
        "requestUri":"/user/federate/{InstanceId}"
      },
      "input":{"shape":"GetFederationTokenRequest"},
      "output":{"shape":"GetFederationTokenResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"UserNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"DuplicateResourceException"}
      ],
      "documentation":"<p>Retrieves a token for federation.</p>"
    },
    "ListRoutingProfiles":{
      "name":"ListRoutingProfiles",
      "http":{
        "method":"GET",
        "requestUri":"/routing-profiles-summary/{InstanceId}"
      },
      "input":{"shape":"ListRoutingProfilesRequest"},
      "output":{"shape":"ListRoutingProfilesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Returns an array of <code>RoutingProfileSummary</code> objects that includes information about the routing profiles in your instance.</p>"
    },
    "ListSecurityProfiles":{
      "name":"ListSecurityProfiles",
      "http":{
        "method":"GET",
        "requestUri":"/security-profiles-summary/{InstanceId}"
      },
      "input":{"shape":"ListSecurityProfilesRequest"},
      "output":{"shape":"ListSecurityProfilesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Returns an array of SecurityProfileSummary objects that contain information about the security profiles in your instance, including the ARN, Id, and Name of the security profile.</p>"
    },
    "ListUserHierarchyGroups":{
      "name":"ListUserHierarchyGroups",
      "http":{
        "method":"GET",
        "requestUri":"/user-hierarchy-groups-summary/{InstanceId}"
      },
      "input":{"shape":"ListUserHierarchyGroupsRequest"},
      "output":{"shape":"ListUserHierarchyGroupsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Returns a <code>UserHierarchyGroupSummaryList</code>, which is an array of <code>HierarchyGroupSummary</code> objects that contain information about the hierarchy groups in your instance.</p>"
    },
    "ListUsers":{
      "name":"ListUsers",
      "http":{
        "method":"GET",
        "requestUri":"/users-summary/{InstanceId}"
      },
      "input":{"shape":"ListUsersRequest"},
      "output":{"shape":"ListUsersResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Returns a <code>UserSummaryList</code>, which is an array of <code>UserSummary</code> objects.</p>"
    },
    "StartOutboundVoiceContact":{
      "name":"StartOutboundVoiceContact",
      "http":{
        "method":"PUT",
        "requestUri":"/contact/outbound-voice"
      },
      "input":{"shape":"StartOutboundVoiceContactRequest"},
      "output":{"shape":"StartOutboundVoiceContactResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"LimitExceededException"},
        {"shape":"DestinationNotAllowedException"},
        {"shape":"OutboundContactNotPermittedException"}
      ],
      "documentation":"<p>The <code>StartOutboundVoiceContact</code> operation initiates a contact flow to place an outbound call to a customer.</p> <p>There is a throttling limit placed on usage of the API that includes a RateLimit of 2 per second, and a BurstLimit of 5 per second.</p> <p>If you are using an IAM account, it must have permission to the <code>connect:StartOutboundVoiceContact</code> action.</p>"
    },
    "StopContact":{
      "name":"StopContact",
      "http":{
        "method":"POST",
        "requestUri":"/contact/stop"
      },
      "input":{"shape":"StopContactRequest"},
      "output":{"shape":"StopContactResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ContactNotFoundException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Ends the contact initiated by the <code>StartOutboundVoiceContact</code> operation.</p> <p>If you are using an IAM account, it must have permission to the <code>connect:StopContact</code> action.</p>"
    },
    "UpdateContactAttributes":{
      "name":"UpdateContactAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/contact/attributes"
      },
      "input":{"shape":"UpdateContactAttributesRequest"},
      "output":{"shape":"UpdateContactAttributesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>The <code>UpdateContactAttributes</code> operation lets you programmatically create new or update existing contact attributes associated with a contact. You can use the operation to add or update attributes for both ongoing and completed contacts. For example, you can update the customer's name or the reason the customer called while the call is active, or add notes about steps that the agent took during the call that are displayed to the next agent that takes the call. You can also use the <code>UpdateContactAttributes</code> operation to update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, or flag abusive callers.</p> <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted.</p>"
    },
    "UpdateUserHierarchy":{
      "name":"UpdateUserHierarchy",
      "http":{
        "method":"POST",
        "requestUri":"/users/{InstanceId}/{UserId}/hierarchy"
      },
      "input":{"shape":"UpdateUserHierarchyRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Assigns the specified hierarchy group to the user.</p>"
    },
    "UpdateUserIdentityInfo":{
      "name":"UpdateUserIdentityInfo",
      "http":{
        "method":"POST",
        "requestUri":"/users/{InstanceId}/{UserId}/identity-info"
      },
      "input":{"shape":"UpdateUserIdentityInfoRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Updates the identity information for the specified user in a <code>UserIdentityInfo</code> object, including email, first name, and last name.</p>"
    },
    "UpdateUserPhoneConfig":{
      "name":"UpdateUserPhoneConfig",
      "http":{
        "method":"POST",
        "requestUri":"/users/{InstanceId}/{UserId}/phone-config"
      },
      "input":{"shape":"UpdateUserPhoneConfigRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Updates the phone configuration settings in the <code>UserPhoneConfig</code> object for the specified user.</p>"
    },
    "UpdateUserRoutingProfile":{
      "name":"UpdateUserRoutingProfile",
      "http":{
        "method":"POST",
        "requestUri":"/users/{InstanceId}/{UserId}/routing-profile"
      },
      "input":{"shape":"UpdateUserRoutingProfileRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Assigns the specified routing profile to a user.</p>"
    },
    "UpdateUserSecurityProfiles":{
      "name":"UpdateUserSecurityProfiles",
      "http":{
        "method":"POST",
        "requestUri":"/users/{InstanceId}/{UserId}/security-profiles"
      },
      "input":{"shape":"UpdateUserSecurityProfilesRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ThrottlingException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Update the security profiles assigned to the user.</p>"
    }
  },
  "shapes":{
    "ARN":{"type":"string"},
    "AfterContactWorkTimeLimit":{
      "type":"integer",
      "min":0
    },
    "AgentFirstName":{
      "type":"string",
      "max":100,
      "min":1
    },
    "AgentLastName":{
      "type":"string",
      "max":100,
      "min":1
    },
    "AgentUsername":{
      "type":"string",
      "max":20,
      "min":1,
      "pattern":"[a-zA-Z0-9\\_\\-\\.]+"
    },
    "AttributeName":{
      "type":"string",
      "documentation":"Key for the key value pair to be used for additional attributes.",
      "max":32767,
      "min":1
    },
    "AttributeValue":{
      "type":"string",
      "documentation":"Value for the key value pair to be used for additional attributes.",
      "max":32767,
      "min":0
    },
    "Attributes":{
      "type":"map",
      "key":{"shape":"AttributeName"},
      "value":{"shape":"AttributeValue"},
      "documentation":"Additional attributes can be provided in the request using this field. This will be passed to the contact flow execution. Client can make use of this additional info in their contact flow."
    },
    "AutoAccept":{"type":"boolean"},
    "ClientToken":{
      "type":"string",
      "documentation":"Dedupe token to be provided by the client. This token is used to avoid duplicate calls to the customer.",
      "max":500
    },
    "ContactFlowId":{
      "type":"string",
      "documentation":"Amazon resource name for the contact flow to be executed to handle the current call.",
      "max":500
    },
    "ContactId":{
      "type":"string",
      "documentation":"Amazon Connect contact identifier. An unique ContactId will be generated for each contact request.",
      "max":256,
      "min":1
    },
    "ContactNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"Message",
          "documentation":"<p>The message.</p>"
        }
      },
      "documentation":"<p>The contact with the specified ID is not active or does not exist.</p>",
      "error":{"httpStatusCode":410},
      "exception":true
    },
    "CreateUserRequest":{
      "type":"structure",
      "required":[
        "Username",
        "PhoneConfig",
        "SecurityProfileIds",
        "RoutingProfileId",
        "InstanceId"
      ],
      "members":{
        "Username":{
          "shape":"AgentUsername",
          "documentation":"<p>The user name in Amazon Connect for the user to create.</p>"
        },
        "Password":{
          "shape":"Password",
          "documentation":"<p>The password for the user account to create. This is required if you are using Amazon Connect for identity management. If you are using SAML for identity management and include this parameter, an <code>InvalidRequestException</code> is returned.</p>"
        },
        "IdentityInfo":{
          "shape":"UserIdentityInfo",
          "documentation":"<p>Information about the user, including email address, first name, and last name.</p>"
        },
        "PhoneConfig":{
          "shape":"UserPhoneConfig",
          "documentation":"<p>Specifies the phone settings for the user, including AfterContactWorkTimeLimit, AutoAccept, DeskPhoneNumber, and PhoneType.</p>"
        },
        "DirectoryUserId":{
          "shape":"DirectoryUserId",
          "documentation":"<p>The unique identifier for the user account in the directory service directory used for identity management. If Amazon Connect is unable to access the existing directory, you can use the <code>DirectoryUserId</code> to authenticate users. If you include the parameter, it is assumed that Amazon Connect cannot access the directory. If the parameter is not included, the UserIdentityInfo is used to authenticate users from your existing directory.</p> <p>This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an <code>InvalidRequestException</code> is returned.</p>"
        },
        "SecurityProfileIds":{
          "shape":"SecurityProfileIds",
          "documentation":"<p>The unique identifier of the security profile to assign to the user created.</p>"
        },
        "RoutingProfileId":{
          "shape":"RoutingProfileId",
          "documentation":"<p>The unique identifier for the routing profile to assign to the user created.</p>"
        },
        "HierarchyGroupId":{
          "shape":"HierarchyGroupId",
          "documentation":"<p>The unique identifier for the hierarchy group to assign to the user created.</p>"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "CreateUserResponse":{
      "type":"structure",
      "members":{
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The unique identifier for the user account in Amazon Connect</p>"
        },
        "UserArn":{
          "shape":"ARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the user account created.</p>"
        }
      }
    },
    "Credentials":{
      "type":"structure",
      "members":{
        "AccessToken":{
          "shape":"SecurityToken",
          "documentation":"<p>An access token generated for a federated user to access Amazon Connect</p>"
        },
        "AccessTokenExpiration":{
          "shape":"timestamp",
          "documentation":"<p>A token generated with an expiration time for the session a user is logged in to Amazon Connect</p>"
        },
        "RefreshToken":{
          "shape":"SecurityToken",
          "documentation":"<p>Renews a token generated for a user to access the Amazon Connect instance.</p>"
        },
        "RefreshTokenExpiration":{
          "shape":"timestamp",
          "documentation":"<p>Renews the expiration timer for a generated token.</p>"
        }
      },
      "documentation":"<p>The credentials to use for federation.</p>"
    },
    "DeleteUserRequest":{
      "type":"structure",
      "required":[
        "InstanceId",
        "UserId"
      ],
      "members":{
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        },
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The unique identifier of the user to delete.</p>",
          "location":"uri",
          "locationName":"UserId"
        }
      }
    },
    "DescribeUserHierarchyGroupRequest":{
      "type":"structure",
      "required":[
        "HierarchyGroupId",
        "InstanceId"
      ],
      "members":{
        "HierarchyGroupId":{
          "shape":"HierarchyGroupId",
          "documentation":"<p>The identifier for the hierarchy group to return.</p>",
          "location":"uri",
          "locationName":"HierarchyGroupId"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "DescribeUserHierarchyGroupResponse":{
      "type":"structure",
      "members":{
        "HierarchyGroup":{
          "shape":"HierarchyGroup",
          "documentation":"<p>Returns a <code>HierarchyGroup</code> object.</p>"
        }
      }
    },
    "DescribeUserHierarchyStructureRequest":{
      "type":"structure",
      "required":["InstanceId"],
      "members":{
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "DescribeUserHierarchyStructureResponse":{
      "type":"structure",
      "members":{
        "HierarchyStructure":{
          "shape":"HierarchyStructure",
          "documentation":"<p>A <code>HierarchyStructure</code> object.</p>"
        }
      }
    },
    "DescribeUserRequest":{
      "type":"structure",
      "required":[
        "UserId",
        "InstanceId"
      ],
      "members":{
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>Unique identifier for the user account to return.</p>",
          "location":"uri",
          "locationName":"UserId"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "DescribeUserResponse":{
      "type":"structure",
      "members":{
        "User":{
          "shape":"User",
          "documentation":"<p>A <code>User</code> object that contains information about the user account and configuration settings.</p>"
        }
      }
    },
    "DestinationNotAllowedException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"Message",
          "documentation":"<p>The message.</p>"
        }
      },
      "documentation":"<p>Outbound calls to the destination number are not allowed.</p>",
      "error":{"httpStatusCode":403},
      "exception":true
    },
    "DirectoryUserId":{"type":"string"},
    "DuplicateResourceException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"Message"}
      },
      "documentation":"<p>A resource with that name already exisits.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "Email":{"type":"string"},
    "GetFederationTokenRequest":{
      "type":"structure",
      "required":["InstanceId"],
      "members":{
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "GetFederationTokenResponse":{
      "type":"structure",
      "members":{
        "Credentials":{
          "shape":"Credentials",
          "documentation":"<p>The credentials to use for federation.</p>"
        }
      }
    },
    "HierarchyGroup":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"HierarchyGroupId",
          "documentation":"<p>The identifier for the hierarchy group.</p>"
        },
        "Arn":{
          "shape":"ARN",
          "documentation":"<p>The Amazon Resource Name (ARN) for the hierarchy group.</p>"
        },
        "Name":{
          "shape":"HierarchyGroupName",
          "documentation":"<p>The name of the hierarchy group in your instance.</p>"
        },
        "LevelId":{
          "shape":"HierarchyLevelId",
          "documentation":"<p>The identifier for the level in the hierarchy group.</p>"
        },
        "HierarchyPath":{
          "shape":"HierarchyPath",
          "documentation":"<p>A <code>HierarchyPath</code> object that contains information about the levels in the hierarchy group.</p>"
        }
      },
      "documentation":"<p>A <code>HierarchyGroup</code> object that contains information about a hierarchy group in your Amazon Connect instance.</p>"
    },
    "HierarchyGroupId":{"type":"string"},
    "HierarchyGroupName":{"type":"string"},
    "HierarchyGroupSummary":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"HierarchyGroupId",
          "documentation":"<p>The identifier of the hierarchy group.</p>"
        },
        "Arn":{
          "shape":"ARN",
          "documentation":"<p>The ARN for the hierarchy group.</p>"
        },
        "Name":{
          "shape":"HierarchyGroupName",
          "documentation":"<p>The name of the hierarchy group.</p>"
        }
      },
      "documentation":"<p>A <code>HierarchyGroupSummary</code> object that contains information about the hierarchy group, including ARN, Id, and Name.</p>"
    },
    "HierarchyGroupSummaryList":{
      "type":"list",
      "member":{"shape":"HierarchyGroupSummary"}
    },
    "HierarchyLevel":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"HierarchyLevelId",
          "documentation":"<p>The identifier for the hierarchy group level.</p>"
        },
        "Arn":{
          "shape":"ARN",
          "documentation":"<p>The ARN for the hierarchy group level.</p>"
        },
        "Name":{
          "shape":"HierarchyLevelName",
          "documentation":"<p>The name of the hierarchy group level.</p>"
        }
      },
      "documentation":"<p>A <code>HierarchyLevel</code> object that contains information about the levels in a hierarchy group, including ARN, Id, and Name.</p>"
    },
    "HierarchyLevelId":{"type":"string"},
    "HierarchyLevelName":{"type":"string"},
    "HierarchyPath":{
      "type":"structure",
      "members":{
        "LevelOne":{
          "shape":"HierarchyGroupSummary",
          "documentation":"<p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>"
        },
        "LevelTwo":{
          "shape":"HierarchyGroupSummary",
          "documentation":"<p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>"
        },
        "LevelThree":{
          "shape":"HierarchyGroupSummary",
          "documentation":"<p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>"
        },
        "LevelFour":{
          "shape":"HierarchyGroupSummary",
          "documentation":"<p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>"
        },
        "LevelFive":{
          "shape":"HierarchyGroupSummary",
          "documentation":"<p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>"
        }
      },
      "documentation":"<p>A <code>HierarchyPath</code> object that contains information about the levels of the hierarchy group.</p>"
    },
    "HierarchyStructure":{
      "type":"structure",
      "members":{
        "LevelOne":{
          "shape":"HierarchyLevel",
          "documentation":"<p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>"
        },
        "LevelTwo":{
          "shape":"HierarchyLevel",
          "documentation":"<p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>"
        },
        "LevelThree":{
          "shape":"HierarchyLevel",
          "documentation":"<p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>"
        },
        "LevelFour":{
          "shape":"HierarchyLevel",
          "documentation":"<p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>"
        },
        "LevelFive":{
          "shape":"HierarchyLevel",
          "documentation":"<p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>"
        }
      },
      "documentation":"<p>A <code>HierarchyStructure</code> object that contains information about the hierarchy group structure.</p>"
    },
    "InstanceId":{
      "type":"string",
      "documentation":"Amazon Connect Organization ARN. A client must provide its organization ARN in order to place a call. This defines the call from organization.",
      "max":100,
      "min":1
    },
    "InternalServiceException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"Message",
          "documentation":"<p>The message.</p>"
        }
      },
      "documentation":"<p>Request processing failed due to an error or failure with the service.</p>",
      "error":{"httpStatusCode":500},
      "exception":true
    },
    "InvalidParameterException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"Message",
          "documentation":"<p>The message.</p>"
        }
      },
      "documentation":"<p>One or more of the parameters provided to the operation are not valid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "InvalidRequestException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"Message",
          "documentation":"<p>The message.</p>"
        }
      },
      "documentation":"<p>The request is not valid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"Message",
          "documentation":"<p>The message.</p>"
        }
      },
      "documentation":"<p>The allowed limit for the resource has been reached.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "ListRoutingProfilesRequest":{
      "type":"structure",
      "required":["InstanceId"],
      "members":{
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "MaxResults":{
          "shape":"MaxResult1000",
          "documentation":"<p>The maximum number of routing profiles to return in the response.</p>",
          "box":true,
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListRoutingProfilesResponse":{
      "type":"structure",
      "members":{
        "RoutingProfileSummaryList":{
          "shape":"RoutingProfileSummaryList",
          "documentation":"<p>An array of <code>RoutingProfileSummary</code> objects that include the ARN, Id, and Name of the routing profile.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p>"
        }
      }
    },
    "ListSecurityProfilesRequest":{
      "type":"structure",
      "required":["InstanceId"],
      "members":{
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "MaxResults":{
          "shape":"MaxResult1000",
          "documentation":"<p>The maximum number of security profiles to return.</p>",
          "box":true,
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListSecurityProfilesResponse":{
      "type":"structure",
      "members":{
        "SecurityProfileSummaryList":{
          "shape":"SecurityProfileSummaryList",
          "documentation":"<p>An array of <code>SecurityProfileSummary</code> objects.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p>"
        }
      }
    },
    "ListUserHierarchyGroupsRequest":{
      "type":"structure",
      "required":["InstanceId"],
      "members":{
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "MaxResults":{
          "shape":"MaxResult1000",
          "documentation":"<p>The maximum number of hierarchy groups to return.</p>",
          "box":true,
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListUserHierarchyGroupsResponse":{
      "type":"structure",
      "members":{
        "UserHierarchyGroupSummaryList":{
          "shape":"HierarchyGroupSummaryList",
          "documentation":"<p>An array of <code>HierarchyGroupSummary</code> objects.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p>"
        }
      }
    },
    "ListUsersRequest":{
      "type":"structure",
      "required":["InstanceId"],
      "members":{
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "MaxResults":{
          "shape":"MaxResult1000",
          "documentation":"<p>The maximum number of results to return in the response.</p>",
          "box":true,
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListUsersResponse":{
      "type":"structure",
      "members":{
        "UserSummaryList":{
          "shape":"UserSummaryList",
          "documentation":"<p>An array of <code>UserSummary</code> objects that contain information about the users in your instance.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p>"
        }
      }
    },
    "MaxResult1000":{
      "type":"integer",
      "max":1000,
      "min":1
    },
    "Message":{"type":"string"},
    "NextToken":{"type":"string"},
    "OutboundContactNotPermittedException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"Message",
          "documentation":"<p>The message.</p>"
        }
      },
      "documentation":"<p>The contact is not permitted.</p>",
      "error":{"httpStatusCode":403},
      "exception":true
    },
    "Password":{
      "type":"string",
      "pattern":"/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d\\S]{8,}$/"
    },
    "PhoneNumber":{
      "type":"string",
      "documentation":"End customer's phone number to call."
    },
    "PhoneType":{
      "type":"string",
      "enum":[
        "SOFT_PHONE",
        "DESK_PHONE"
      ]
    },
    "QueueId":{
      "type":"string",
      "documentation":"Identifier of the queue to be used for the contact routing."
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"Message",
          "documentation":"<p>The message.</p>"
        }
      },
      "documentation":"<p>The specified resource was not found.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "RoutingProfileId":{"type":"string"},
    "RoutingProfileName":{
      "type":"string",
      "max":100,
      "min":1
    },
    "RoutingProfileSummary":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"RoutingProfileId",
          "documentation":"<p>The identifier of the routing profile.</p>"
        },
        "Arn":{
          "shape":"ARN",
          "documentation":"<p>The ARN of the routing profile.</p>"
        },
        "Name":{
          "shape":"RoutingProfileName",
          "documentation":"<p>The name of the routing profile.</p>"
        }
      },
      "documentation":"<p>A <code>RoutingProfileSummary</code> object that contains information about a routing profile, including ARN, Id, and Name.</p>"
    },
    "RoutingProfileSummaryList":{
      "type":"list",
      "member":{"shape":"RoutingProfileSummary"}
    },
    "SecurityProfileId":{"type":"string"},
    "SecurityProfileIds":{
      "type":"list",
      "member":{"shape":"SecurityProfileId"},
      "max":10,
      "min":1
    },
    "SecurityProfileName":{"type":"string"},
    "SecurityProfileSummary":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"SecurityProfileId",
          "documentation":"<p>The identifier of the security profile.</p>"
        },
        "Arn":{
          "shape":"ARN",
          "documentation":"<p>The ARN of the security profile.</p>"
        },
        "Name":{
          "shape":"SecurityProfileName",
          "documentation":"<p>The name of the security profile.</p>"
        }
      },
      "documentation":"<p>A <code>SecurityProfileSummary</code> object that contains information about a security profile, including ARN, Id, Name.</p>"
    },
    "SecurityProfileSummaryList":{
      "type":"list",
      "member":{"shape":"SecurityProfileSummary"}
    },
    "SecurityToken":{
      "type":"string",
      "sensitive":true
    },
    "StartOutboundVoiceContactRequest":{
      "type":"structure",
      "required":[
        "DestinationPhoneNumber",
        "ContactFlowId",
        "InstanceId"
      ],
      "members":{
        "DestinationPhoneNumber":{
          "shape":"PhoneNumber",
          "documentation":"<p>The phone number of the customer in E.164 format.</p>"
        },
        "ContactFlowId":{
          "shape":"ContactFlowId",
          "documentation":"<p>The identifier for the contact flow to connect the outbound call to.</p> <p>To find the <code>ContactFlowId</code>, open the contact flow you want to use in the Amazon Connect contact flow editor. The ID for the contact flow is displayed in the address bar as part of the URL. For example, the contact flow ID is the set of characters at the end of the URL, after 'contact-flow/' such as <code>78ea8fd5-2659-4f2b-b528-699760ccfc1b</code>.</p>"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>"
        },
        "ClientToken":{
          "shape":"ClientToken",
          "documentation":"<p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. If the contact is disconnected, a new contact is started.</p>",
          "idempotencyToken":true
        },
        "SourcePhoneNumber":{
          "shape":"PhoneNumber",
          "documentation":"<p>The phone number, in E.164 format, associated with your Amazon Connect instance to use for the outbound call.</p>"
        },
        "QueueId":{
          "shape":"QueueId",
          "documentation":"<p>The queue to add the call to. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue used will be the queue defined in the contact flow.</p> <p>To find the <code>QueueId</code>, open the queue you want to use in the Amazon Connect Queue editor. The ID for the queue is displayed in the address bar as part of the URL. For example, the queue ID is the set of characters at the end of the URL, after 'queue/' such as <code>queue/aeg40574-2d01-51c3-73d6-bf8624d2168c</code>.</p>"
        },
        "Attributes":{
          "shape":"Attributes",
          "documentation":"<p>Specify a custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> <p>For example, if you want play a greeting when the customer answers the call, you can pass the customer name in attributes similar to the following:</p>"
        }
      }
    },
    "StartOutboundVoiceContactResponse":{
      "type":"structure",
      "members":{
        "ContactId":{
          "shape":"ContactId",
          "documentation":"<p>The unique identifier of this contact within your Amazon Connect instance.</p>"
        }
      }
    },
    "StopContactRequest":{
      "type":"structure",
      "required":[
        "ContactId",
        "InstanceId"
      ],
      "members":{
        "ContactId":{
          "shape":"ContactId",
          "documentation":"<p>The unique identifier of the contact to end.</p>"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>"
        }
      }
    },
    "StopContactResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ThrottlingException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"Message"}
      },
      "documentation":"<p>The throttling limit has been exceeded.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "UpdateContactAttributesRequest":{
      "type":"structure",
      "required":[
        "InitialContactId",
        "InstanceId",
        "Attributes"
      ],
      "members":{
        "InitialContactId":{
          "shape":"ContactId",
          "documentation":"<p>The unique identifier of the contact for which to update attributes. This is the identifier for the contact associated with the first interaction with the contact center.</p>"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your Amazon Connect instance, open the AWS console and select Amazon Connect. Select the instance alias of the instance. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>"
        },
        "Attributes":{
          "shape":"Attributes",
          "documentation":"<p>The key-value pairs for the attribute to update.</p>"
        }
      }
    },
    "UpdateContactAttributesResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateUserHierarchyRequest":{
      "type":"structure",
      "required":[
        "UserId",
        "InstanceId"
      ],
      "members":{
        "HierarchyGroupId":{
          "shape":"HierarchyGroupId",
          "documentation":"<p>The identifier for the hierarchy group to assign to the user.</p>"
        },
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The identifier of the user account to assign the hierarchy group to.</p>",
          "location":"uri",
          "locationName":"UserId"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "UpdateUserIdentityInfoRequest":{
      "type":"structure",
      "required":[
        "IdentityInfo",
        "UserId",
        "InstanceId"
      ],
      "members":{
        "IdentityInfo":{
          "shape":"UserIdentityInfo",
          "documentation":"<p>A <code>UserIdentityInfo</code> object.</p>"
        },
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The identifier for the user account to update identity information for.</p>",
          "location":"uri",
          "locationName":"UserId"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "UpdateUserPhoneConfigRequest":{
      "type":"structure",
      "required":[
        "PhoneConfig",
        "UserId",
        "InstanceId"
      ],
      "members":{
        "PhoneConfig":{
          "shape":"UserPhoneConfig",
          "documentation":"<p>A <code>UserPhoneConfig</code> object that contains settings for <code>AfterContactWorkTimeLimit</code>, <code>AutoAccept</code>, <code>DeskPhoneNumber</code>, and <code>PhoneType</code> to assign to the user.</p>"
        },
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The identifier for the user account to change phone settings for.</p>",
          "location":"uri",
          "locationName":"UserId"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "UpdateUserRoutingProfileRequest":{
      "type":"structure",
      "required":[
        "RoutingProfileId",
        "UserId",
        "InstanceId"
      ],
      "members":{
        "RoutingProfileId":{
          "shape":"RoutingProfileId",
          "documentation":"<p>The identifier of the routing profile to assign to the user.</p>"
        },
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The identifier for the user account to assign the routing profile to.</p>",
          "location":"uri",
          "locationName":"UserId"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "UpdateUserSecurityProfilesRequest":{
      "type":"structure",
      "required":[
        "SecurityProfileIds",
        "UserId",
        "InstanceId"
      ],
      "members":{
        "SecurityProfileIds":{
          "shape":"SecurityProfileIds",
          "documentation":"<p>The identifiers for the security profiles to assign to the user.</p>"
        },
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The identifier of the user account to assign the security profiles.</p>",
          "location":"uri",
          "locationName":"UserId"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>",
          "location":"uri",
          "locationName":"InstanceId"
        }
      }
    },
    "User":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"UserId",
          "documentation":"<p>The identifier of the user account.</p>"
        },
        "Arn":{
          "shape":"ARN",
          "documentation":"<p>The ARN of the user account.</p>"
        },
        "Username":{
          "shape":"AgentUsername",
          "documentation":"<p>The user name assigned to the user account.</p>"
        },
        "IdentityInfo":{
          "shape":"UserIdentityInfo",
          "documentation":"<p>A <code>UserIdentityInfo</code> object.</p>"
        },
        "PhoneConfig":{
          "shape":"UserPhoneConfig",
          "documentation":"<p>A <code>UserPhoneConfig</code> object.</p>"
        },
        "DirectoryUserId":{
          "shape":"DirectoryUserId",
          "documentation":"<p>The directory Id for the user account in the existing directory used for identity management.</p>"
        },
        "SecurityProfileIds":{
          "shape":"SecurityProfileIds",
          "documentation":"<p>The identifier(s) for the security profile assigned to the user.</p>"
        },
        "RoutingProfileId":{
          "shape":"RoutingProfileId",
          "documentation":"<p>The identifier of the routing profile assigned to the user.</p>"
        },
        "HierarchyGroupId":{
          "shape":"HierarchyGroupId",
          "documentation":"<p>The identifier for the hierarchy group assigned to the user.</p>"
        }
      },
      "documentation":"<p>A <code>User</code> object that contains information about a user account in your Amazon Connect instance, including configuration settings.</p>"
    },
    "UserId":{"type":"string"},
    "UserIdentityInfo":{
      "type":"structure",
      "members":{
        "FirstName":{
          "shape":"AgentFirstName",
          "documentation":"<p>The first name used in the user account. This is required if you are using Amazon Connect or SAML for identity management.</p>"
        },
        "LastName":{
          "shape":"AgentLastName",
          "documentation":"<p>The last name used in the user account. This is required if you are using Amazon Connect or SAML for identity management.</p>"
        },
        "Email":{
          "shape":"Email",
          "documentation":"<p>The email address added to the user account. If you are using SAML for identity management and include this parameter, an <code>InvalidRequestException</code> is returned.</p>"
        }
      },
      "documentation":"<p>A <code>UserIdentityInfo</code> object that contains information about the user's identity, including email address, first name, and last name.</p>"
    },
    "UserNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"Message"}
      },
      "documentation":"<p>No user with the specified credentials was found in the Amazon Connect instance.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "UserPhoneConfig":{
      "type":"structure",
      "required":["PhoneType"],
      "members":{
        "PhoneType":{
          "shape":"PhoneType",
          "documentation":"<p>The phone type selected for the user, either Soft phone or Desk phone.</p>"
        },
        "AutoAccept":{
          "shape":"AutoAccept",
          "documentation":"<p>The Auto accept setting for the user, Yes or No.</p>"
        },
        "AfterContactWorkTimeLimit":{
          "shape":"AfterContactWorkTimeLimit",
          "documentation":"<p>The After Call Work (ACW) timeout setting, in seconds, for the user.</p>"
        },
        "DeskPhoneNumber":{
          "shape":"PhoneNumber",
          "documentation":"<p>The phone number for the user's desk phone.</p>"
        }
      },
      "documentation":"<p>A <code>UserPhoneConfig</code> object that contains information about the user phone configuration settings.</p>"
    },
    "UserSummary":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"UserId",
          "documentation":"<p>The identifier for the user account.</p>"
        },
        "Arn":{
          "shape":"ARN",
          "documentation":"<p>The ARN for the user account.</p>"
        },
        "Username":{
          "shape":"AgentUsername",
          "documentation":"<p>The Amazon Connect user name for the user account.</p>"
        }
      },
      "documentation":"<p>A <code>UserSummary</code> object that contains Information about a user, including ARN, Id, and user name.</p>"
    },
    "UserSummaryList":{
      "type":"list",
      "member":{"shape":"UserSummary"}
    },
    "timestamp":{"type":"timestamp"}
  },
  "documentation":"<p>The Amazon Connect API Reference provides descriptions, syntax, and usage examples for each of the Amazon Connect actions, data types, parameters, and errors. Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale.</p>"
}
