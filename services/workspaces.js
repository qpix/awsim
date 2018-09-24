awsim['workspaces'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-04-08",
    "endpointPrefix":"workspaces",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Amazon WorkSpaces",
    "serviceId":"WorkSpaces",
    "signatureVersion":"v4",
    "targetPrefix":"WorkspacesService",
    "uid":"workspaces-2015-04-08"
  },
  "operations":{
    "AssociateIpGroups":{
      "name":"AssociateIpGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateIpGroupsRequest"},
      "output":{"shape":"AssociateIpGroupsResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceLimitExceededException"},
        {"shape":"InvalidResourceStateException"},
        {"shape":"AccessDeniedException"},
        {"shape":"OperationNotSupportedException"}
      ],
      "documentation":"<p>Associates the specified IP access control group with the specified directory.</p>"
    },
    "AuthorizeIpRules":{
      "name":"AuthorizeIpRules",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AuthorizeIpRulesRequest"},
      "output":{"shape":"AuthorizeIpRulesResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceLimitExceededException"},
        {"shape":"InvalidResourceStateException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>"
    },
    "CreateIpGroup":{
      "name":"CreateIpGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateIpGroupRequest"},
      "output":{"shape":"CreateIpGroupResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceLimitExceededException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ResourceCreationFailedException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>"
    },
    "CreateTags":{
      "name":"CreateTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTagsRequest"},
      "output":{"shape":"CreateTagsResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceLimitExceededException"}
      ],
      "documentation":"<p>Creates the specified tags for the specified WorkSpace.</p>"
    },
    "CreateWorkspaces":{
      "name":"CreateWorkspaces",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateWorkspacesRequest"},
      "output":{"shape":"CreateWorkspacesResult"},
      "errors":[
        {"shape":"ResourceLimitExceededException"},
        {"shape":"InvalidParameterValuesException"}
      ],
      "documentation":"<p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>"
    },
    "DeleteIpGroup":{
      "name":"DeleteIpGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteIpGroupRequest"},
      "output":{"shape":"DeleteIpGroupResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceAssociatedException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>"
    },
    "DeleteTags":{
      "name":"DeleteTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTagsRequest"},
      "output":{"shape":"DeleteTagsResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParameterValuesException"}
      ],
      "documentation":"<p>Deletes the specified tags from the specified WorkSpace.</p>"
    },
    "DescribeIpGroups":{
      "name":"DescribeIpGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeIpGroupsRequest"},
      "output":{"shape":"DescribeIpGroupsResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Describes one or more of your IP access control groups.</p>"
    },
    "DescribeTags":{
      "name":"DescribeTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTagsRequest"},
      "output":{"shape":"DescribeTagsResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Describes the specified tags for the specified WorkSpace.</p>"
    },
    "DescribeWorkspaceBundles":{
      "name":"DescribeWorkspaceBundles",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeWorkspaceBundlesRequest"},
      "output":{"shape":"DescribeWorkspaceBundlesResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"}
      ],
      "documentation":"<p>Describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>"
    },
    "DescribeWorkspaceDirectories":{
      "name":"DescribeWorkspaceDirectories",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeWorkspaceDirectoriesRequest"},
      "output":{"shape":"DescribeWorkspaceDirectoriesResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"}
      ],
      "documentation":"<p>Describes the available AWS Directory Service directories that are registered with Amazon WorkSpaces.</p>"
    },
    "DescribeWorkspaces":{
      "name":"DescribeWorkspaces",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeWorkspacesRequest"},
      "output":{"shape":"DescribeWorkspacesResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceUnavailableException"}
      ],
      "documentation":"<p>Describes the specified WorkSpaces.</p> <p>You can filter the results using bundle ID, directory ID, or owner, but you can specify only one filter at a time.</p>"
    },
    "DescribeWorkspacesConnectionStatus":{
      "name":"DescribeWorkspacesConnectionStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeWorkspacesConnectionStatusRequest"},
      "output":{"shape":"DescribeWorkspacesConnectionStatusResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"}
      ],
      "documentation":"<p>Describes the connection status of the specified WorkSpaces.</p>"
    },
    "DisassociateIpGroups":{
      "name":"DisassociateIpGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateIpGroupsRequest"},
      "output":{"shape":"DisassociateIpGroupsResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidResourceStateException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Disassociates the specified IP access control group from the specified directory.</p>"
    },
    "ModifyWorkspaceProperties":{
      "name":"ModifyWorkspaceProperties",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyWorkspacePropertiesRequest"},
      "output":{"shape":"ModifyWorkspacePropertiesResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"InvalidResourceStateException"},
        {"shape":"OperationInProgressException"},
        {"shape":"UnsupportedWorkspaceConfigurationException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"AccessDeniedException"},
        {"shape":"ResourceUnavailableException"}
      ],
      "documentation":"<p>Modifies the specified WorkSpace properties.</p>"
    },
    "ModifyWorkspaceState":{
      "name":"ModifyWorkspaceState",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyWorkspaceStateRequest"},
      "output":{"shape":"ModifyWorkspaceStateResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"InvalidResourceStateException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, or rebuild. An AutoStop WorkSpace in this state is not stopped. Users can log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>"
    },
    "RebootWorkspaces":{
      "name":"RebootWorkspaces",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RebootWorkspacesRequest"},
      "output":{"shape":"RebootWorkspacesResult"},
      "documentation":"<p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>"
    },
    "RebuildWorkspaces":{
      "name":"RebuildWorkspaces",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RebuildWorkspacesRequest"},
      "output":{"shape":"RebuildWorkspacesResult"},
      "documentation":"<p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, or <code>UNHEALTHY</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href=\"http://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html\">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>"
    },
    "RevokeIpRules":{
      "name":"RevokeIpRules",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RevokeIpRulesRequest"},
      "output":{"shape":"RevokeIpRulesResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidResourceStateException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Removes one or more rules from the specified IP access control group.</p>"
    },
    "StartWorkspaces":{
      "name":"StartWorkspaces",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartWorkspacesRequest"},
      "output":{"shape":"StartWorkspacesResult"},
      "documentation":"<p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>"
    },
    "StopWorkspaces":{
      "name":"StopWorkspaces",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopWorkspacesRequest"},
      "output":{"shape":"StopWorkspacesResult"},
      "documentation":"<p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>"
    },
    "TerminateWorkspaces":{
      "name":"TerminateWorkspaces",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TerminateWorkspacesRequest"},
      "output":{"shape":"TerminateWorkspacesResult"},
      "documentation":"<p>Terminates the specified WorkSpaces.</p> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace.</p> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated.</p>"
    },
    "UpdateRulesOfIpGroup":{
      "name":"UpdateRulesOfIpGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateRulesOfIpGroupRequest"},
      "output":{"shape":"UpdateRulesOfIpGroupResult"},
      "errors":[
        {"shape":"InvalidParameterValuesException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceLimitExceededException"},
        {"shape":"InvalidResourceStateException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Replaces the current rules of the specified IP access control group with the specified rules.</p>"
    }
  },
  "shapes":{
    "ARN":{
      "type":"string",
      "pattern":"^arn:aws:[A-Za-z0-9][A-za-z0-9_/.-]{0,62}:[A-za-z0-9_/.-]{0,63}:[A-za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-za-z0-9_/.-]{0,127}$"
    },
    "AccessDeniedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The user is not authorized to access a resource.</p>",
      "exception":true
    },
    "Alias":{"type":"string"},
    "AssociateIpGroupsRequest":{
      "type":"structure",
      "required":[
        "DirectoryId",
        "GroupIds"
      ],
      "members":{
        "DirectoryId":{
          "shape":"DirectoryId",
          "documentation":"<p>The ID of the directory.</p>"
        },
        "GroupIds":{
          "shape":"IpGroupIdList",
          "documentation":"<p>The IDs of one or more IP access control groups.</p>"
        }
      }
    },
    "AssociateIpGroupsResult":{
      "type":"structure",
      "members":{
      }
    },
    "AuthorizeIpRulesRequest":{
      "type":"structure",
      "required":[
        "GroupId",
        "UserRules"
      ],
      "members":{
        "GroupId":{
          "shape":"IpGroupId",
          "documentation":"<p>The ID of the group.</p>"
        },
        "UserRules":{
          "shape":"IpRuleList",
          "documentation":"<p>The rules to add to the group.</p>"
        }
      }
    },
    "AuthorizeIpRulesResult":{
      "type":"structure",
      "members":{
      }
    },
    "BooleanObject":{"type":"boolean"},
    "BundleId":{
      "type":"string",
      "pattern":"^wsb-[0-9a-z]{8,63}$"
    },
    "BundleIdList":{
      "type":"list",
      "member":{"shape":"BundleId"},
      "max":25,
      "min":1
    },
    "BundleList":{
      "type":"list",
      "member":{"shape":"WorkspaceBundle"}
    },
    "BundleOwner":{"type":"string"},
    "Compute":{
      "type":"string",
      "enum":[
        "VALUE",
        "STANDARD",
        "PERFORMANCE",
        "POWER",
        "GRAPHICS"
      ]
    },
    "ComputeType":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"Compute",
          "documentation":"<p>The compute type.</p>"
        }
      },
      "documentation":"<p>Information about the compute type.</p>"
    },
    "ComputerName":{"type":"string"},
    "ConnectionState":{
      "type":"string",
      "enum":[
        "CONNECTED",
        "DISCONNECTED",
        "UNKNOWN"
      ]
    },
    "CreateIpGroupRequest":{
      "type":"structure",
      "required":["GroupName"],
      "members":{
        "GroupName":{
          "shape":"IpGroupName",
          "documentation":"<p>The name of the group.</p>"
        },
        "GroupDesc":{
          "shape":"IpGroupDesc",
          "documentation":"<p>The description of the group.</p>"
        },
        "UserRules":{
          "shape":"IpRuleList",
          "documentation":"<p>The rules to add to the group.</p>"
        }
      }
    },
    "CreateIpGroupResult":{
      "type":"structure",
      "members":{
        "GroupId":{
          "shape":"IpGroupId",
          "documentation":"<p>The ID of the group.</p>"
        }
      }
    },
    "CreateTagsRequest":{
      "type":"structure",
      "required":[
        "ResourceId",
        "Tags"
      ],
      "members":{
        "ResourceId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the WorkSpace. To find this ID, use <a>DescribeWorkspaces</a>.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags. Each WorkSpace can have a maximum of 50 tags.</p>"
        }
      }
    },
    "CreateTagsResult":{
      "type":"structure",
      "members":{
      }
    },
    "CreateWorkspacesRequest":{
      "type":"structure",
      "required":["Workspaces"],
      "members":{
        "Workspaces":{
          "shape":"WorkspaceRequestList",
          "documentation":"<p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>"
        }
      }
    },
    "CreateWorkspacesResult":{
      "type":"structure",
      "members":{
        "FailedRequests":{
          "shape":"FailedCreateWorkspaceRequests",
          "documentation":"<p>Information about the WorkSpaces that could not be created.</p>"
        },
        "PendingRequests":{
          "shape":"WorkspaceList",
          "documentation":"<p>Information about the WorkSpaces that were created.</p> <p>Because this operation is asynchronous, the identifier returned is not immediately available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned can be incomplete.</p>"
        }
      }
    },
    "DefaultOu":{"type":"string"},
    "DefaultWorkspaceCreationProperties":{
      "type":"structure",
      "members":{
        "EnableWorkDocs":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether the directory is enabled for Amazon WorkDocs.</p>"
        },
        "EnableInternetAccess":{
          "shape":"BooleanObject",
          "documentation":"<p>The public IP address to attach to all WorkSpaces that are created or rebuilt.</p>"
        },
        "DefaultOu":{
          "shape":"DefaultOu",
          "documentation":"<p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>"
        },
        "CustomSecurityGroupId":{
          "shape":"SecurityGroupId",
          "documentation":"<p>The identifier of any security groups to apply to WorkSpaces when they are created.</p>"
        },
        "UserEnabledAsLocalAdministrator":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether the WorkSpace user is an administrator on the WorkSpace.</p>"
        }
      },
      "documentation":"<p>Information about defaults used to create a WorkSpace.</p>"
    },
    "DeleteIpGroupRequest":{
      "type":"structure",
      "required":["GroupId"],
      "members":{
        "GroupId":{
          "shape":"IpGroupId",
          "documentation":"<p>The ID of the IP access control group.</p>"
        }
      }
    },
    "DeleteIpGroupResult":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteTagsRequest":{
      "type":"structure",
      "required":[
        "ResourceId",
        "TagKeys"
      ],
      "members":{
        "ResourceId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the WorkSpace. To find this ID, use <a>DescribeWorkspaces</a>.</p>"
        },
        "TagKeys":{
          "shape":"TagKeyList",
          "documentation":"<p>The tag keys.</p>"
        }
      }
    },
    "DeleteTagsResult":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeIpGroupsRequest":{
      "type":"structure",
      "members":{
        "GroupIds":{
          "shape":"IpGroupIdList",
          "documentation":"<p>The IDs of one or more IP access control groups.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token for the next set of results. (You received this token from a previous call.)</p>"
        },
        "MaxResults":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of items to return.</p>"
        }
      }
    },
    "DescribeIpGroupsResult":{
      "type":"structure",
      "members":{
        "Result":{
          "shape":"WorkspacesIpGroupsList",
          "documentation":"<p>Information about the IP access control groups.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.</p>"
        }
      }
    },
    "DescribeTagsRequest":{
      "type":"structure",
      "required":["ResourceId"],
      "members":{
        "ResourceId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the WorkSpace. To find this ID, use <a>DescribeWorkspaces</a>.</p>"
        }
      }
    },
    "DescribeTagsResult":{
      "type":"structure",
      "members":{
        "TagList":{
          "shape":"TagList",
          "documentation":"<p>The tags.</p>"
        }
      }
    },
    "DescribeWorkspaceBundlesRequest":{
      "type":"structure",
      "members":{
        "BundleIds":{
          "shape":"BundleIdList",
          "documentation":"<p>The IDs of the bundles. This parameter cannot be combined with any other filter.</p>"
        },
        "Owner":{
          "shape":"BundleOwner",
          "documentation":"<p>The owner of the bundles. This parameter cannot be combined with any other filter.</p> <p>Specify <code>AMAZON</code> to describe the bundles provided by AWS or null to describe the bundles that belong to your account.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token for the next set of results. (You received this token from a previous call.)</p>"
        }
      }
    },
    "DescribeWorkspaceBundlesResult":{
      "type":"structure",
      "members":{
        "Bundles":{
          "shape":"BundleList",
          "documentation":"<p>Information about the bundles.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.</p>"
        }
      }
    },
    "DescribeWorkspaceDirectoriesRequest":{
      "type":"structure",
      "members":{
        "DirectoryIds":{
          "shape":"DirectoryIdList",
          "documentation":"<p>The identifiers of the directories. If the value is null, all directories are retrieved.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token for the next set of results. (You received this token from a previous call.)</p>"
        }
      }
    },
    "DescribeWorkspaceDirectoriesResult":{
      "type":"structure",
      "members":{
        "Directories":{
          "shape":"DirectoryList",
          "documentation":"<p>Information about the directories.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.</p>"
        }
      }
    },
    "DescribeWorkspacesConnectionStatusRequest":{
      "type":"structure",
      "members":{
        "WorkspaceIds":{
          "shape":"WorkspaceIdList",
          "documentation":"<p>The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token for the next set of results. (You received this token from a previous call.)</p>"
        }
      }
    },
    "DescribeWorkspacesConnectionStatusResult":{
      "type":"structure",
      "members":{
        "WorkspacesConnectionStatus":{
          "shape":"WorkspaceConnectionStatusList",
          "documentation":"<p>Information about the connection status of the WorkSpace.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token to use to retrieve the next set of results, or null if there are no more results available.</p>"
        }
      }
    },
    "DescribeWorkspacesRequest":{
      "type":"structure",
      "members":{
        "WorkspaceIds":{
          "shape":"WorkspaceIdList",
          "documentation":"<p>The IDs of the WorkSpaces. This parameter cannot be combined with any other filter.</p> <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>"
        },
        "DirectoryId":{
          "shape":"DirectoryId",
          "documentation":"<p>The ID of the directory. In addition, you can optionally specify a specific directory user (see <code>UserName</code>). This parameter cannot be combined with any other filter.</p>"
        },
        "UserName":{
          "shape":"UserName",
          "documentation":"<p>The name of the directory user. You must specify this parameter with <code>DirectoryId</code>.</p>"
        },
        "BundleId":{
          "shape":"BundleId",
          "documentation":"<p>The ID of the bundle. All WorkSpaces that are created from this bundle are retrieved. This parameter cannot be combined with any other filter.</p>"
        },
        "Limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of items to return.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token for the next set of results. (You received this token from a previous call.)</p>"
        }
      }
    },
    "DescribeWorkspacesResult":{
      "type":"structure",
      "members":{
        "Workspaces":{
          "shape":"WorkspaceList",
          "documentation":"<p>Information about the WorkSpaces.</p> <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the returned information could be incomplete.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.</p>"
        }
      }
    },
    "Description":{"type":"string"},
    "DirectoryId":{
      "type":"string",
      "pattern":"^d-[0-9a-f]{8,63}$"
    },
    "DirectoryIdList":{
      "type":"list",
      "member":{"shape":"DirectoryId"},
      "max":25,
      "min":1
    },
    "DirectoryList":{
      "type":"list",
      "member":{"shape":"WorkspaceDirectory"}
    },
    "DirectoryName":{"type":"string"},
    "DisassociateIpGroupsRequest":{
      "type":"structure",
      "required":[
        "DirectoryId",
        "GroupIds"
      ],
      "members":{
        "DirectoryId":{
          "shape":"DirectoryId",
          "documentation":"<p>The ID of the directory.</p>"
        },
        "GroupIds":{
          "shape":"IpGroupIdList",
          "documentation":"<p>The IDs of one or more IP access control groups.</p>"
        }
      }
    },
    "DisassociateIpGroupsResult":{
      "type":"structure",
      "members":{
      }
    },
    "DnsIpAddresses":{
      "type":"list",
      "member":{"shape":"IpAddress"}
    },
    "ErrorType":{"type":"string"},
    "ExceptionMessage":{"type":"string"},
    "FailedCreateWorkspaceRequest":{
      "type":"structure",
      "members":{
        "WorkspaceRequest":{
          "shape":"WorkspaceRequest",
          "documentation":"<p>Information about the WorkSpace.</p>"
        },
        "ErrorCode":{
          "shape":"ErrorType",
          "documentation":"<p>The error code.</p>"
        },
        "ErrorMessage":{
          "shape":"Description",
          "documentation":"<p>The textual error message.</p>"
        }
      },
      "documentation":"<p>Information about a WorkSpace that could not be created.</p>"
    },
    "FailedCreateWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"FailedCreateWorkspaceRequest"}
    },
    "FailedRebootWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"FailedWorkspaceChangeRequest"}
    },
    "FailedRebuildWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"FailedWorkspaceChangeRequest"}
    },
    "FailedStartWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"FailedWorkspaceChangeRequest"}
    },
    "FailedStopWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"FailedWorkspaceChangeRequest"}
    },
    "FailedTerminateWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"FailedWorkspaceChangeRequest"}
    },
    "FailedWorkspaceChangeRequest":{
      "type":"structure",
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The identifier of the WorkSpace.</p>"
        },
        "ErrorCode":{
          "shape":"ErrorType",
          "documentation":"<p>The error code.</p>"
        },
        "ErrorMessage":{
          "shape":"Description",
          "documentation":"<p>The textual error message.</p>"
        }
      },
      "documentation":"<p>Information about a WorkSpace that could not be rebooted (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>"
    },
    "InvalidParameterValuesException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The exception error message.</p>"
        }
      },
      "documentation":"<p>One or more parameter values are not valid.</p>",
      "exception":true
    },
    "InvalidResourceStateException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The state of the resource is not valid for this operation.</p>",
      "exception":true
    },
    "IpAddress":{"type":"string"},
    "IpGroupDesc":{"type":"string"},
    "IpGroupId":{
      "type":"string",
      "pattern":"wsipg-[0-9a-z]{8,63}$"
    },
    "IpGroupIdList":{
      "type":"list",
      "member":{"shape":"IpGroupId"}
    },
    "IpGroupName":{"type":"string"},
    "IpRevokedRuleList":{
      "type":"list",
      "member":{"shape":"IpRule"}
    },
    "IpRule":{"type":"string"},
    "IpRuleDesc":{"type":"string"},
    "IpRuleItem":{
      "type":"structure",
      "members":{
        "ipRule":{
          "shape":"IpRule",
          "documentation":"<p>The IP address range, in CIDR notation.</p>"
        },
        "ruleDesc":{
          "shape":"IpRuleDesc",
          "documentation":"<p>The description.</p>"
        }
      },
      "documentation":"<p>Information about a rule for an IP access control group.</p>"
    },
    "IpRuleList":{
      "type":"list",
      "member":{"shape":"IpRuleItem"}
    },
    "Limit":{
      "type":"integer",
      "max":25,
      "min":1
    },
    "ModificationResourceEnum":{
      "type":"string",
      "enum":[
        "ROOT_VOLUME",
        "USER_VOLUME",
        "COMPUTE_TYPE"
      ]
    },
    "ModificationState":{
      "type":"structure",
      "members":{
        "Resource":{
          "shape":"ModificationResourceEnum",
          "documentation":"<p>The resource.</p>"
        },
        "State":{
          "shape":"ModificationStateEnum",
          "documentation":"<p>The modification state.</p>"
        }
      },
      "documentation":"<p>Information about a WorkSpace modification.</p>"
    },
    "ModificationStateEnum":{
      "type":"string",
      "enum":[
        "UPDATE_INITIATED",
        "UPDATE_IN_PROGRESS"
      ]
    },
    "ModificationStateList":{
      "type":"list",
      "member":{"shape":"ModificationState"}
    },
    "ModifyWorkspacePropertiesRequest":{
      "type":"structure",
      "required":[
        "WorkspaceId",
        "WorkspaceProperties"
      ],
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The ID of the WorkSpace.</p>"
        },
        "WorkspaceProperties":{
          "shape":"WorkspaceProperties",
          "documentation":"<p>The properties of the WorkSpace.</p>"
        }
      }
    },
    "ModifyWorkspacePropertiesResult":{
      "type":"structure",
      "members":{
      }
    },
    "ModifyWorkspaceStateRequest":{
      "type":"structure",
      "required":[
        "WorkspaceId",
        "WorkspaceState"
      ],
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The ID of the WorkSpace.</p>"
        },
        "WorkspaceState":{
          "shape":"TargetWorkspaceState",
          "documentation":"<p>The WorkSpace state.</p>"
        }
      }
    },
    "ModifyWorkspaceStateResult":{
      "type":"structure",
      "members":{
      }
    },
    "NonEmptyString":{
      "type":"string",
      "min":1
    },
    "OperationInProgressException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>",
      "exception":true
    },
    "OperationNotSupportedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>This operation is not supported.</p>",
      "exception":true
    },
    "PaginationToken":{
      "type":"string",
      "max":63,
      "min":1
    },
    "RebootRequest":{
      "type":"structure",
      "required":["WorkspaceId"],
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The ID of the WorkSpace.</p>"
        }
      },
      "documentation":"<p>Information used to reboot a WorkSpace.</p>"
    },
    "RebootWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"RebootRequest"},
      "max":25,
      "min":1
    },
    "RebootWorkspacesRequest":{
      "type":"structure",
      "required":["RebootWorkspaceRequests"],
      "members":{
        "RebootWorkspaceRequests":{
          "shape":"RebootWorkspaceRequests",
          "documentation":"<p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>"
        }
      }
    },
    "RebootWorkspacesResult":{
      "type":"structure",
      "members":{
        "FailedRequests":{
          "shape":"FailedRebootWorkspaceRequests",
          "documentation":"<p>Information about the WorkSpaces that could not be rebooted.</p>"
        }
      }
    },
    "RebuildRequest":{
      "type":"structure",
      "required":["WorkspaceId"],
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The ID of the WorkSpace.</p>"
        }
      },
      "documentation":"<p>Information used to rebuild a WorkSpace.</p>"
    },
    "RebuildWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"RebuildRequest"},
      "max":1,
      "min":1
    },
    "RebuildWorkspacesRequest":{
      "type":"structure",
      "required":["RebuildWorkspaceRequests"],
      "members":{
        "RebuildWorkspaceRequests":{
          "shape":"RebuildWorkspaceRequests",
          "documentation":"<p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>"
        }
      }
    },
    "RebuildWorkspacesResult":{
      "type":"structure",
      "members":{
        "FailedRequests":{
          "shape":"FailedRebuildWorkspaceRequests",
          "documentation":"<p>Information about the WorkSpace if it could not be rebuilt.</p>"
        }
      }
    },
    "RegistrationCode":{
      "type":"string",
      "max":20,
      "min":1
    },
    "ResourceAlreadyExistsException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The specified resource already exists.</p>",
      "exception":true
    },
    "ResourceAssociatedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The resource is associated with a directory.</p>",
      "exception":true
    },
    "ResourceCreationFailedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The resource could not be created.</p>",
      "exception":true
    },
    "ResourceLimitExceededException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The exception error message.</p>"
        }
      },
      "documentation":"<p>Your resource limits have been exceeded.</p>",
      "exception":true
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The resource could not be found.</p>"
        },
        "ResourceId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the resource that could not be found.</p>"
        }
      },
      "documentation":"<p>The resource could not be found.</p>",
      "exception":true
    },
    "ResourceUnavailableException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The exception error message.</p>"
        },
        "ResourceId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The identifier of the resource that is not available.</p>"
        }
      },
      "documentation":"<p>The specified resource is not available.</p>",
      "exception":true
    },
    "RevokeIpRulesRequest":{
      "type":"structure",
      "required":[
        "GroupId",
        "UserRules"
      ],
      "members":{
        "GroupId":{
          "shape":"IpGroupId",
          "documentation":"<p>The ID of the group.</p>"
        },
        "UserRules":{
          "shape":"IpRevokedRuleList",
          "documentation":"<p>The rules to remove from the group.</p>"
        }
      }
    },
    "RevokeIpRulesResult":{
      "type":"structure",
      "members":{
      }
    },
    "RootStorage":{
      "type":"structure",
      "members":{
        "Capacity":{
          "shape":"NonEmptyString",
          "documentation":"<p>The size of the root volume.</p>"
        }
      },
      "documentation":"<p>Information about the root volume for a WorkSpace bundle.</p>"
    },
    "RootVolumeSizeGib":{"type":"integer"},
    "RunningMode":{
      "type":"string",
      "enum":[
        "AUTO_STOP",
        "ALWAYS_ON"
      ]
    },
    "RunningModeAutoStopTimeoutInMinutes":{"type":"integer"},
    "SecurityGroupId":{
      "type":"string",
      "pattern":"^(sg-[0-9a-f]{8})$"
    },
    "StartRequest":{
      "type":"structure",
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The ID of the WorkSpace.</p>"
        }
      },
      "documentation":"<p>Information used to start a WorkSpace.</p>"
    },
    "StartWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"StartRequest"},
      "max":25,
      "min":1
    },
    "StartWorkspacesRequest":{
      "type":"structure",
      "required":["StartWorkspaceRequests"],
      "members":{
        "StartWorkspaceRequests":{
          "shape":"StartWorkspaceRequests",
          "documentation":"<p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>"
        }
      }
    },
    "StartWorkspacesResult":{
      "type":"structure",
      "members":{
        "FailedRequests":{
          "shape":"FailedStartWorkspaceRequests",
          "documentation":"<p>Information about the WorkSpaces that could not be started.</p>"
        }
      }
    },
    "StopRequest":{
      "type":"structure",
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The ID of the WorkSpace.</p>"
        }
      },
      "documentation":"<p>Information used to stop a WorkSpace.</p>"
    },
    "StopWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"StopRequest"},
      "max":25,
      "min":1
    },
    "StopWorkspacesRequest":{
      "type":"structure",
      "required":["StopWorkspaceRequests"],
      "members":{
        "StopWorkspaceRequests":{
          "shape":"StopWorkspaceRequests",
          "documentation":"<p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>"
        }
      }
    },
    "StopWorkspacesResult":{
      "type":"structure",
      "members":{
        "FailedRequests":{
          "shape":"FailedStopWorkspaceRequests",
          "documentation":"<p>Information about the WorkSpaces that could not be stopped.</p>"
        }
      }
    },
    "SubnetId":{
      "type":"string",
      "pattern":"^(subnet-[0-9a-f]{8})$"
    },
    "SubnetIds":{
      "type":"list",
      "member":{"shape":"SubnetId"}
    },
    "Tag":{
      "type":"structure",
      "required":["Key"],
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p>The key of the tag.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>The value of the tag.</p>"
        }
      },
      "documentation":"<p>Information about a tag.</p>"
    },
    "TagKey":{
      "type":"string",
      "max":127,
      "min":1
    },
    "TagKeyList":{
      "type":"list",
      "member":{"shape":"NonEmptyString"}
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"}
    },
    "TagValue":{
      "type":"string",
      "max":255
    },
    "TargetWorkspaceState":{
      "type":"string",
      "enum":[
        "AVAILABLE",
        "ADMIN_MAINTENANCE"
      ]
    },
    "TerminateRequest":{
      "type":"structure",
      "required":["WorkspaceId"],
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The ID of the WorkSpace.</p>"
        }
      },
      "documentation":"<p>Information used to terminate a WorkSpace.</p>"
    },
    "TerminateWorkspaceRequests":{
      "type":"list",
      "member":{"shape":"TerminateRequest"},
      "max":25,
      "min":1
    },
    "TerminateWorkspacesRequest":{
      "type":"structure",
      "required":["TerminateWorkspaceRequests"],
      "members":{
        "TerminateWorkspaceRequests":{
          "shape":"TerminateWorkspaceRequests",
          "documentation":"<p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>"
        }
      }
    },
    "TerminateWorkspacesResult":{
      "type":"structure",
      "members":{
        "FailedRequests":{
          "shape":"FailedTerminateWorkspaceRequests",
          "documentation":"<p>Information about the WorkSpaces that could not be terminated.</p>"
        }
      }
    },
    "Timestamp":{"type":"timestamp"},
    "UnsupportedWorkspaceConfigurationException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The configuration of this WorkSpace is not supported for this operation. For more information, see the <a href=\"http://docs.aws.amazon.com/workspaces/latest/adminguide/\">Amazon WorkSpaces Administration Guide</a>. </p>",
      "exception":true
    },
    "UpdateRulesOfIpGroupRequest":{
      "type":"structure",
      "required":[
        "GroupId",
        "UserRules"
      ],
      "members":{
        "GroupId":{
          "shape":"IpGroupId",
          "documentation":"<p>The ID of the group.</p>"
        },
        "UserRules":{
          "shape":"IpRuleList",
          "documentation":"<p>One or more rules.</p>"
        }
      }
    },
    "UpdateRulesOfIpGroupResult":{
      "type":"structure",
      "members":{
      }
    },
    "UserName":{
      "type":"string",
      "max":63,
      "min":1
    },
    "UserStorage":{
      "type":"structure",
      "members":{
        "Capacity":{
          "shape":"NonEmptyString",
          "documentation":"<p>The size of the user storage.</p>"
        }
      },
      "documentation":"<p>Information about the user storage for a WorkSpace bundle.</p>"
    },
    "UserVolumeSizeGib":{"type":"integer"},
    "VolumeEncryptionKey":{"type":"string"},
    "Workspace":{
      "type":"structure",
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The identifier of the WorkSpace.</p>"
        },
        "DirectoryId":{
          "shape":"DirectoryId",
          "documentation":"<p>The identifier of the AWS Directory Service directory for the WorkSpace.</p>"
        },
        "UserName":{
          "shape":"UserName",
          "documentation":"<p>The user for the WorkSpace.</p>"
        },
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>The IP address of the WorkSpace.</p>"
        },
        "State":{
          "shape":"WorkspaceState",
          "documentation":"<p>The operational state of the WorkSpace.</p>"
        },
        "BundleId":{
          "shape":"BundleId",
          "documentation":"<p>The identifier of the bundle used to create the WorkSpace.</p>"
        },
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>The identifier of the subnet for the WorkSpace.</p>"
        },
        "ErrorMessage":{
          "shape":"Description",
          "documentation":"<p>If the WorkSpace could not be created, contains a textual error message that describes the failure.</p>"
        },
        "ErrorCode":{
          "shape":"WorkspaceErrorCode",
          "documentation":"<p>If the WorkSpace could not be created, contains the error code.</p>"
        },
        "ComputerName":{
          "shape":"ComputerName",
          "documentation":"<p>The name of the WorkSpace, as seen by the operating system.</p>"
        },
        "VolumeEncryptionKey":{
          "shape":"VolumeEncryptionKey",
          "documentation":"<p>The KMS key used to encrypt data stored on your WorkSpace.</p>"
        },
        "UserVolumeEncryptionEnabled":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether the data stored on the user volume is encrypted.</p>"
        },
        "RootVolumeEncryptionEnabled":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether the data stored on the root volume is encrypted.</p>"
        },
        "WorkspaceProperties":{
          "shape":"WorkspaceProperties",
          "documentation":"<p>The properties of the WorkSpace.</p>"
        },
        "ModificationStates":{
          "shape":"ModificationStateList",
          "documentation":"<p>The modification states of the WorkSpace.</p>"
        }
      },
      "documentation":"<p>Information about a WorkSpace.</p>"
    },
    "WorkspaceBundle":{
      "type":"structure",
      "members":{
        "BundleId":{
          "shape":"BundleId",
          "documentation":"<p>The bundle identifier.</p>"
        },
        "Name":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the bundle.</p>"
        },
        "Owner":{
          "shape":"BundleOwner",
          "documentation":"<p>The owner of the bundle. This is the account identifier of the owner, or <code>AMAZON</code> if the bundle is provided by AWS.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>A description.</p>"
        },
        "RootStorage":{
          "shape":"RootStorage",
          "documentation":"<p>The size of the root volume.</p>"
        },
        "UserStorage":{
          "shape":"UserStorage",
          "documentation":"<p>The size of the user storage.</p>"
        },
        "ComputeType":{
          "shape":"ComputeType",
          "documentation":"<p>The compute type. For more information, see <a href=\"http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles\">Amazon WorkSpaces Bundles</a>.</p>"
        }
      },
      "documentation":"<p>Information about a WorkSpace bundle.</p>"
    },
    "WorkspaceConnectionStatus":{
      "type":"structure",
      "members":{
        "WorkspaceId":{
          "shape":"WorkspaceId",
          "documentation":"<p>The ID of the WorkSpace.</p>"
        },
        "ConnectionState":{
          "shape":"ConnectionState",
          "documentation":"<p>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace is stopped.</p>"
        },
        "ConnectionStateCheckTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp of the connection state check.</p>"
        },
        "LastKnownUserConnectionTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The timestamp of the last known user connection.</p>"
        }
      },
      "documentation":"<p>Describes the connection status of a WorkSpace.</p>"
    },
    "WorkspaceConnectionStatusList":{
      "type":"list",
      "member":{"shape":"WorkspaceConnectionStatus"}
    },
    "WorkspaceDirectory":{
      "type":"structure",
      "members":{
        "DirectoryId":{
          "shape":"DirectoryId",
          "documentation":"<p>The directory identifier.</p>"
        },
        "Alias":{
          "shape":"Alias",
          "documentation":"<p>The directory alias.</p>"
        },
        "DirectoryName":{
          "shape":"DirectoryName",
          "documentation":"<p>The name of the directory.</p>"
        },
        "RegistrationCode":{
          "shape":"RegistrationCode",
          "documentation":"<p>The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.</p>"
        },
        "SubnetIds":{
          "shape":"SubnetIds",
          "documentation":"<p>The identifiers of the subnets used with the directory.</p>"
        },
        "DnsIpAddresses":{
          "shape":"DnsIpAddresses",
          "documentation":"<p>The IP addresses of the DNS servers for the directory.</p>"
        },
        "CustomerUserName":{
          "shape":"UserName",
          "documentation":"<p>The user name for the service account.</p>"
        },
        "IamRoleId":{
          "shape":"ARN",
          "documentation":"<p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.</p>"
        },
        "DirectoryType":{
          "shape":"WorkspaceDirectoryType",
          "documentation":"<p>The directory type.</p>"
        },
        "WorkspaceSecurityGroupId":{
          "shape":"SecurityGroupId",
          "documentation":"<p>The identifier of the security group that is assigned to new WorkSpaces.</p>"
        },
        "State":{
          "shape":"WorkspaceDirectoryState",
          "documentation":"<p>The state of the directory's registration with Amazon WorkSpaces</p>"
        },
        "WorkspaceCreationProperties":{
          "shape":"DefaultWorkspaceCreationProperties",
          "documentation":"<p>The default creation properties for all WorkSpaces in the directory.</p>"
        },
        "ipGroupIds":{
          "shape":"IpGroupIdList",
          "documentation":"<p>The identifiers of the IP access control groups associated with the directory.</p>"
        }
      },
      "documentation":"<p>Information about an AWS Directory Service directory for use with Amazon WorkSpaces.</p>"
    },
    "WorkspaceDirectoryState":{
      "type":"string",
      "enum":[
        "REGISTERING",
        "REGISTERED",
        "DEREGISTERING",
        "DEREGISTERED",
        "ERROR"
      ]
    },
    "WorkspaceDirectoryType":{
      "type":"string",
      "enum":[
        "SIMPLE_AD",
        "AD_CONNECTOR"
      ]
    },
    "WorkspaceErrorCode":{"type":"string"},
    "WorkspaceId":{
      "type":"string",
      "pattern":"^ws-[0-9a-z]{8,63}$"
    },
    "WorkspaceIdList":{
      "type":"list",
      "member":{"shape":"WorkspaceId"},
      "max":25,
      "min":1
    },
    "WorkspaceList":{
      "type":"list",
      "member":{"shape":"Workspace"}
    },
    "WorkspaceProperties":{
      "type":"structure",
      "members":{
        "RunningMode":{
          "shape":"RunningMode",
          "documentation":"<p>The running mode. For more information, see <a href=\"http://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html\">Manage the WorkSpace Running Mode</a>.</p>"
        },
        "RunningModeAutoStopTimeoutInMinutes":{
          "shape":"RunningModeAutoStopTimeoutInMinutes",
          "documentation":"<p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60 minute intervals.</p>"
        },
        "RootVolumeSizeGib":{
          "shape":"RootVolumeSizeGib",
          "documentation":"<p>The size of the root volume.</p>"
        },
        "UserVolumeSizeGib":{
          "shape":"UserVolumeSizeGib",
          "documentation":"<p>The size of the user storage.</p>"
        },
        "ComputeTypeName":{
          "shape":"Compute",
          "documentation":"<p>The compute type. For more information, see <a href=\"http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles\">Amazon WorkSpaces Bundles</a>.</p>"
        }
      },
      "documentation":"<p>Information about a WorkSpace.</p>"
    },
    "WorkspaceRequest":{
      "type":"structure",
      "required":[
        "DirectoryId",
        "UserName",
        "BundleId"
      ],
      "members":{
        "DirectoryId":{
          "shape":"DirectoryId",
          "documentation":"<p>The identifier of the AWS Directory Service directory for the WorkSpace. You can use <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>"
        },
        "UserName":{
          "shape":"UserName",
          "documentation":"<p>The username of the user for the WorkSpace. This username must exist in the AWS Directory Service directory for the WorkSpace.</p>"
        },
        "BundleId":{
          "shape":"BundleId",
          "documentation":"<p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>"
        },
        "VolumeEncryptionKey":{
          "shape":"VolumeEncryptionKey",
          "documentation":"<p>The KMS key used to encrypt data stored on your WorkSpace.</p>"
        },
        "UserVolumeEncryptionEnabled":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether the data stored on the user volume is encrypted.</p>"
        },
        "RootVolumeEncryptionEnabled":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether the data stored on the root volume is encrypted.</p>"
        },
        "WorkspaceProperties":{
          "shape":"WorkspaceProperties",
          "documentation":"<p>The WorkSpace properties.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags for the WorkSpace.</p>"
        }
      },
      "documentation":"<p>Information used to create a WorkSpace.</p>"
    },
    "WorkspaceRequestList":{
      "type":"list",
      "member":{"shape":"WorkspaceRequest"},
      "max":25,
      "min":1
    },
    "WorkspaceState":{
      "type":"string",
      "enum":[
        "PENDING",
        "AVAILABLE",
        "IMPAIRED",
        "UNHEALTHY",
        "REBOOTING",
        "STARTING",
        "REBUILDING",
        "MAINTENANCE",
        "ADMIN_MAINTENANCE",
        "TERMINATING",
        "TERMINATED",
        "SUSPENDED",
        "UPDATING",
        "STOPPING",
        "STOPPED",
        "ERROR"
      ]
    },
    "WorkspacesIpGroup":{
      "type":"structure",
      "members":{
        "groupId":{
          "shape":"IpGroupId",
          "documentation":"<p>The ID of the group.</p>"
        },
        "groupName":{
          "shape":"IpGroupName",
          "documentation":"<p>The name of the group.</p>"
        },
        "groupDesc":{
          "shape":"IpGroupDesc",
          "documentation":"<p>The description of the group.</p>"
        },
        "userRules":{
          "shape":"IpRuleList",
          "documentation":"<p>The rules.</p>"
        }
      },
      "documentation":"<p>Information about an IP access control group.</p>"
    },
    "WorkspacesIpGroupsList":{
      "type":"list",
      "member":{"shape":"WorkspacesIpGroup"}
    }
  },
  "documentation":"<fullname>Amazon WorkSpaces Service</fullname> <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows desktops for your users.</p>"
}
