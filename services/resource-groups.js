awsim['resource-groups'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-11-27",
    "endpointPrefix":"resource-groups",
    "protocol":"rest-json",
    "serviceAbbreviation":"Resource Groups",
    "serviceFullName":"AWS Resource Groups",
    "serviceId":"Resource Groups",
    "signatureVersion":"v4",
    "signingName":"resource-groups",
    "uid":"resource-groups-2017-11-27"
  },
  "operations":{
    "CreateGroup":{
      "name":"CreateGroup",
      "http":{
        "method":"POST",
        "requestUri":"/groups"
      },
      "input":{"shape":"CreateGroupInput"},
      "output":{"shape":"CreateGroupOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Creates a group with a specified name, description, and resource query.</p>"
    },
    "DeleteGroup":{
      "name":"DeleteGroup",
      "http":{
        "method":"DELETE",
        "requestUri":"/groups/{GroupName}"
      },
      "input":{"shape":"DeleteGroupInput"},
      "output":{"shape":"DeleteGroupOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Deletes a specified resource group. Deleting a resource group does not delete resources that are members of the group; it only deletes the group structure.</p>"
    },
    "GetGroup":{
      "name":"GetGroup",
      "http":{
        "method":"GET",
        "requestUri":"/groups/{GroupName}"
      },
      "input":{"shape":"GetGroupInput"},
      "output":{"shape":"GetGroupOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Returns information about a specified resource group.</p>"
    },
    "GetGroupQuery":{
      "name":"GetGroupQuery",
      "http":{
        "method":"GET",
        "requestUri":"/groups/{GroupName}/query"
      },
      "input":{"shape":"GetGroupQueryInput"},
      "output":{"shape":"GetGroupQueryOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Returns the resource query associated with the specified resource group.</p>"
    },
    "GetTags":{
      "name":"GetTags",
      "http":{
        "method":"GET",
        "requestUri":"/resources/{Arn}/tags"
      },
      "input":{"shape":"GetTagsInput"},
      "output":{"shape":"GetTagsOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Returns a list of tags that are associated with a resource, specified by an ARN.</p>"
    },
    "ListGroupResources":{
      "name":"ListGroupResources",
      "http":{
        "method":"POST",
        "requestUri":"/groups/{GroupName}/resource-identifiers-list"
      },
      "input":{"shape":"ListGroupResourcesInput"},
      "output":{"shape":"ListGroupResourcesOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Returns a list of ARNs of resources that are members of a specified resource group.</p>"
    },
    "ListGroups":{
      "name":"ListGroups",
      "http":{
        "method":"POST",
        "requestUri":"/groups-list"
      },
      "input":{"shape":"ListGroupsInput"},
      "output":{"shape":"ListGroupsOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Returns a list of existing resource groups in your account.</p>"
    },
    "SearchResources":{
      "name":"SearchResources",
      "http":{
        "method":"POST",
        "requestUri":"/resources/search"
      },
      "input":{"shape":"SearchResourcesInput"},
      "output":{"shape":"SearchResourcesOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Returns a list of AWS resource identifiers that matches a specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation.</p>"
    },
    "Tag":{
      "name":"Tag",
      "http":{
        "method":"PUT",
        "requestUri":"/resources/{Arn}/tags"
      },
      "input":{"shape":"TagInput"},
      "output":{"shape":"TagOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.</p>"
    },
    "Untag":{
      "name":"Untag",
      "http":{
        "method":"PATCH",
        "requestUri":"/resources/{Arn}/tags"
      },
      "input":{"shape":"UntagInput"},
      "output":{"shape":"UntagOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Deletes specified tags from a specified resource.</p>"
    },
    "UpdateGroup":{
      "name":"UpdateGroup",
      "http":{
        "method":"PUT",
        "requestUri":"/groups/{GroupName}"
      },
      "input":{"shape":"UpdateGroupInput"},
      "output":{"shape":"UpdateGroupOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Updates an existing group with a new or changed description. You cannot update the name of a resource group.</p>"
    },
    "UpdateGroupQuery":{
      "name":"UpdateGroupQuery",
      "http":{
        "method":"PUT",
        "requestUri":"/groups/{GroupName}/query"
      },
      "input":{"shape":"UpdateGroupQueryInput"},
      "output":{"shape":"UpdateGroupQueryOutput"},
      "errors":[
        {"shape":"BadRequestException"},
        {"shape":"ForbiddenException"},
        {"shape":"NotFoundException"},
        {"shape":"MethodNotAllowedException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerErrorException"}
      ],
      "documentation":"<p>Updates the resource query of a group.</p>"
    }
  },
  "shapes":{
    "BadRequestException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The request does not comply with validation rules that are defined for the request parameters.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "CreateGroupInput":{
      "type":"structure",
      "required":[
        "Name",
        "ResourceQuery"
      ],
      "members":{
        "Name":{
          "shape":"GroupName",
          "documentation":"<p>The name of the group, which is the identifier of the group in other operations. A resource group name cannot be updated after it is created. A resource group name can have a maximum of 128 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within your account.</p>"
        },
        "Description":{
          "shape":"GroupDescription",
          "documentation":"<p>The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.</p>"
        },
        "ResourceQuery":{
          "shape":"ResourceQuery",
          "documentation":"<p>The resource query that determines which AWS resources are members of this group.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The tags to add to the group. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>"
        }
      }
    },
    "CreateGroupOutput":{
      "type":"structure",
      "members":{
        "Group":{
          "shape":"Group",
          "documentation":"<p>A full description of the resource group after it is created.</p>"
        },
        "ResourceQuery":{
          "shape":"ResourceQuery",
          "documentation":"<p>The resource query associated with the group.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The tags associated with the group.</p>"
        }
      }
    },
    "DeleteGroupInput":{
      "type":"structure",
      "required":["GroupName"],
      "members":{
        "GroupName":{
          "shape":"GroupName",
          "documentation":"<p>The name of the resource group to delete.</p>",
          "location":"uri",
          "locationName":"GroupName"
        }
      }
    },
    "DeleteGroupOutput":{
      "type":"structure",
      "members":{
        "Group":{
          "shape":"Group",
          "documentation":"<p>A full description of the deleted resource group.</p>"
        }
      }
    },
    "ErrorMessage":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "ForbiddenException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The caller is not authorized to make the request.</p>",
      "error":{"httpStatusCode":403},
      "exception":true
    },
    "GetGroupInput":{
      "type":"structure",
      "required":["GroupName"],
      "members":{
        "GroupName":{
          "shape":"GroupName",
          "documentation":"<p>The name of the resource group.</p>",
          "location":"uri",
          "locationName":"GroupName"
        }
      }
    },
    "GetGroupOutput":{
      "type":"structure",
      "members":{
        "Group":{
          "shape":"Group",
          "documentation":"<p>A full description of the resource group.</p>"
        }
      }
    },
    "GetGroupQueryInput":{
      "type":"structure",
      "required":["GroupName"],
      "members":{
        "GroupName":{
          "shape":"GroupName",
          "documentation":"<p>The name of the resource group.</p>",
          "location":"uri",
          "locationName":"GroupName"
        }
      }
    },
    "GetGroupQueryOutput":{
      "type":"structure",
      "members":{
        "GroupQuery":{
          "shape":"GroupQuery",
          "documentation":"<p>The resource query associated with the specified group.</p>"
        }
      }
    },
    "GetTagsInput":{
      "type":"structure",
      "required":["Arn"],
      "members":{
        "Arn":{
          "shape":"GroupArn",
          "documentation":"<p>The ARN of the resource for which you want a list of tags. The resource must exist within the account you are using.</p>",
          "location":"uri",
          "locationName":"Arn"
        }
      }
    },
    "GetTagsOutput":{
      "type":"structure",
      "members":{
        "Arn":{
          "shape":"GroupArn",
          "documentation":"<p>The ARN of the tagged resource.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The tags associated with the specified resource.</p>"
        }
      }
    },
    "Group":{
      "type":"structure",
      "required":[
        "GroupArn",
        "Name"
      ],
      "members":{
        "GroupArn":{
          "shape":"GroupArn",
          "documentation":"<p>The ARN of a resource group.</p>"
        },
        "Name":{
          "shape":"GroupName",
          "documentation":"<p>The name of a resource group.</p>"
        },
        "Description":{
          "shape":"GroupDescription",
          "documentation":"<p>The description of the resource group.</p>"
        }
      },
      "documentation":"<p>A resource group.</p>"
    },
    "GroupArn":{
      "type":"string",
      "pattern":"arn:aws:resource-groups:[a-z]{2}-[a-z]+-\\d{1}:[0-9]{12}:group/[a-zA-Z0-9_\\.-]{1,128}"
    },
    "GroupDescription":{
      "type":"string",
      "max":512,
      "pattern":"[\\sa-zA-Z0-9_\\.-]*"
    },
    "GroupList":{
      "type":"list",
      "member":{"shape":"Group"}
    },
    "GroupName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9_\\.-]+"
    },
    "GroupQuery":{
      "type":"structure",
      "required":[
        "GroupName",
        "ResourceQuery"
      ],
      "members":{
        "GroupName":{
          "shape":"GroupName",
          "documentation":"<p>The name of a resource group that is associated with a specific resource query.</p>"
        },
        "ResourceQuery":{
          "shape":"ResourceQuery",
          "documentation":"<p>The resource query which determines which AWS resources are members of the associated resource group.</p>"
        }
      },
      "documentation":"<p>The underlying resource query of a resource group. Resources that match query results are part of the group.</p>"
    },
    "InternalServerErrorException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>An internal error occurred while processing the request.</p>",
      "error":{"httpStatusCode":500},
      "exception":true
    },
    "ListGroupResourcesInput":{
      "type":"structure",
      "required":["GroupName"],
      "members":{
        "GroupName":{
          "shape":"GroupName",
          "documentation":"<p>The name of the resource group.</p>",
          "location":"uri",
          "locationName":"GroupName"
        },
        "Filters":{
          "shape":"ResourceFilterList",
          "documentation":"<p>Filters, formatted as ResourceFilter objects, that you want to apply to a ListGroupResources operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.</p> </li> </ul>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of group member ARNs that are returned in a single call by ListGroupResources, in paginated output. By default, this number is 50.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The NextToken value that is returned in a paginated ListGroupResources request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        }
      }
    },
    "ListGroupResourcesOutput":{
      "type":"structure",
      "members":{
        "ResourceIdentifiers":{
          "shape":"ResourceIdentifierList",
          "documentation":"<p>The ARNs and resource types of resources that are members of the group that you specified.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The NextToken value to include in a subsequent <code>ListGroupResources</code> request, to get more results.</p>"
        }
      }
    },
    "ListGroupsInput":{
      "type":"structure",
      "members":{
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of resource group results that are returned by ListGroups in paginated output. By default, this number is 50.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The NextToken value that is returned in a paginated <code>ListGroups</code> request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        }
      }
    },
    "ListGroupsOutput":{
      "type":"structure",
      "members":{
        "Groups":{
          "shape":"GroupList",
          "documentation":"<p>A list of resource groups.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The NextToken value to include in a subsequent <code>ListGroups</code> request, to get more results.</p>"
        }
      }
    },
    "MaxResults":{
      "type":"integer",
      "max":50,
      "min":1
    },
    "MethodNotAllowedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The request uses an HTTP method which is not allowed for the specified resource.</p>",
      "error":{"httpStatusCode":405},
      "exception":true
    },
    "NextToken":{"type":"string"},
    "NotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>One or more resources specified in the request do not exist.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "Query":{
      "type":"string",
      "max":2048
    },
    "QueryType":{
      "type":"string",
      "enum":["TAG_FILTERS_1_0"]
    },
    "ResourceArn":{
      "type":"string",
      "pattern":"arn:aws:[a-z0-9\\-]*:([a-z]{2}-[a-z]+-\\d{1})?:([0-9]{12})?:.+"
    },
    "ResourceFilter":{
      "type":"structure",
      "required":[
        "Name",
        "Values"
      ],
      "members":{
        "Name":{
          "shape":"ResourceFilterName",
          "documentation":"<p>The name of the filter. Filter names are case-sensitive.</p>"
        },
        "Values":{
          "shape":"ResourceFilterValues",
          "documentation":"<p>One or more filter values. Allowed filter values vary by resource filter name, and are case-sensitive.</p>"
        }
      },
      "documentation":"<p>A filter name and value pair that is used to obtain more specific results from a list of resources.</p>"
    },
    "ResourceFilterList":{
      "type":"list",
      "member":{"shape":"ResourceFilter"}
    },
    "ResourceFilterName":{
      "type":"string",
      "enum":["resource-type"]
    },
    "ResourceFilterValue":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"AWS::[a-zA-Z0-9]+::[a-zA-Z0-9]+"
    },
    "ResourceFilterValues":{
      "type":"list",
      "member":{"shape":"ResourceFilterValue"},
      "max":5,
      "min":1
    },
    "ResourceIdentifier":{
      "type":"structure",
      "members":{
        "ResourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The ARN of a resource.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type of a resource, such as <code>AWS::EC2::Instance</code>.</p>"
        }
      },
      "documentation":"<p>The ARN of a resource, and its resource type.</p>"
    },
    "ResourceIdentifierList":{
      "type":"list",
      "member":{"shape":"ResourceIdentifier"}
    },
    "ResourceQuery":{
      "type":"structure",
      "required":[
        "Type",
        "Query"
      ],
      "members":{
        "Type":{
          "shape":"QueryType",
          "documentation":"<p>The type of the query. The valid value in this release is <code>TAG_FILTERS_1_0</code>.</p> <p> <i> <code>TAG_FILTERS_1_0:</code> </i> A JSON syntax that lets you specify a collection of simple tag filters for resource types and tags, as supported by the AWS Tagging API GetResources operation. When more than one element is present, only resources that match all filters are part of the result. If a filter specifies more than one value for a key, a resource matches the filter if its tag value matches any of the specified values.</p>"
        },
        "Query":{
          "shape":"Query",
          "documentation":"<p>The query that defines a group or a search.</p>"
        }
      },
      "documentation":"<p>The query that is used to define a resource group or a search for resources.</p>"
    },
    "ResourceType":{
      "type":"string",
      "pattern":"AWS::[a-zA-Z0-9]+::\\w+"
    },
    "SearchResourcesInput":{
      "type":"structure",
      "required":["ResourceQuery"],
      "members":{
        "ResourceQuery":{
          "shape":"ResourceQuery",
          "documentation":"<p>The search query, using the same formats that are supported for resource group definition.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of group member ARNs returned by <code>SearchResources</code> in paginated output. By default, this number is 50.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The NextToken value that is returned in a paginated <code>SearchResources</code> request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.</p>"
        }
      }
    },
    "SearchResourcesOutput":{
      "type":"structure",
      "members":{
        "ResourceIdentifiers":{
          "shape":"ResourceIdentifierList",
          "documentation":"<p>The ARNs and resource types of resources that are members of the group that you specified.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The NextToken value to include in a subsequent <code>SearchResources</code> request, to get more results.</p>"
        }
      }
    },
    "TagInput":{
      "type":"structure",
      "required":[
        "Arn",
        "Tags"
      ],
      "members":{
        "Arn":{
          "shape":"GroupArn",
          "documentation":"<p>The ARN of the resource to which to add tags.</p>",
          "location":"uri",
          "locationName":"Arn"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The tags to add to the specified resource. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>"
        }
      }
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagKeyList":{
      "type":"list",
      "member":{"shape":"TagKey"}
    },
    "TagOutput":{
      "type":"structure",
      "members":{
        "Arn":{
          "shape":"GroupArn",
          "documentation":"<p>The ARN of the tagged resource.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The tags that have been added to the specified resource.</p>"
        }
      }
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":0,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "Tags":{
      "type":"map",
      "key":{"shape":"TagKey"},
      "value":{"shape":"TagValue"}
    },
    "TooManyRequestsException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The caller has exceeded throttling limits.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "UnauthorizedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The request has not been applied because it lacks valid authentication credentials for the target resource.</p>",
      "error":{"httpStatusCode":401},
      "exception":true
    },
    "UntagInput":{
      "type":"structure",
      "required":[
        "Arn",
        "Keys"
      ],
      "members":{
        "Arn":{
          "shape":"GroupArn",
          "documentation":"<p>The ARN of the resource from which to remove tags.</p>",
          "location":"uri",
          "locationName":"Arn"
        },
        "Keys":{
          "shape":"TagKeyList",
          "documentation":"<p>The keys of the tags to be removed.</p>"
        }
      }
    },
    "UntagOutput":{
      "type":"structure",
      "members":{
        "Arn":{
          "shape":"GroupArn",
          "documentation":"<p>The ARN of the resource from which tags have been removed.</p>"
        },
        "Keys":{
          "shape":"TagKeyList",
          "documentation":"<p>The keys of tags that have been removed.</p>"
        }
      }
    },
    "UpdateGroupInput":{
      "type":"structure",
      "required":["GroupName"],
      "members":{
        "GroupName":{
          "shape":"GroupName",
          "documentation":"<p>The name of the resource group for which you want to update its description.</p>",
          "location":"uri",
          "locationName":"GroupName"
        },
        "Description":{
          "shape":"GroupDescription",
          "documentation":"<p>The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.</p>"
        }
      }
    },
    "UpdateGroupOutput":{
      "type":"structure",
      "members":{
        "Group":{
          "shape":"Group",
          "documentation":"<p>The full description of the resource group after it has been updated.</p>"
        }
      }
    },
    "UpdateGroupQueryInput":{
      "type":"structure",
      "required":[
        "GroupName",
        "ResourceQuery"
      ],
      "members":{
        "GroupName":{
          "shape":"GroupName",
          "documentation":"<p>The name of the resource group for which you want to edit the query.</p>",
          "location":"uri",
          "locationName":"GroupName"
        },
        "ResourceQuery":{
          "shape":"ResourceQuery",
          "documentation":"<p>The resource query that determines which AWS resources are members of the resource group.</p>"
        }
      }
    },
    "UpdateGroupQueryOutput":{
      "type":"structure",
      "members":{
        "GroupQuery":{
          "shape":"GroupQuery",
          "documentation":"<p>The resource query associated with the resource group after the update.</p>"
        }
      }
    }
  },
  "documentation":"<fullname>AWS Resource Groups</fullname> <p>AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances, Amazon Relational Database Service databases, and Amazon S3 buckets into groups using criteria that you define as tags. A resource group is a collection of resources that match the resource types specified in a query, and share one or more tags or portions of tags. You can create a group of resources based on their roles in your cloud infrastructure, lifecycle stages, regions, application layers, or virtually any criteria. Resource groups enable you to automate management tasks, such as those in AWS Systems Manager Automation documents, on tag-related resources in AWS Systems Manager. Groups of tagged resources also let you quickly view a custom console in AWS Systems Manager that shows AWS Config compliance and other monitoring data about member resources.</p> <p>To create a resource group, build a resource query, and specify tags that identify the criteria that members of the group have in common. Tags are key-value pairs.</p> <p>For more information about Resource Groups, see the <a href=\"https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html\">AWS Resource Groups User Guide</a>.</p> <p>AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of operations.</p> <ul> <li> <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and resource query entities</p> </li> <li> <p>Applying, editing, and removing tags from resource groups</p> </li> <li> <p>Resolving resource group member ARNs so they can be returned as search results</p> </li> <li> <p>Getting data about resources that are members of a group</p> </li> <li> <p>Searching AWS resources based on a resource query</p> </li> </ul>"
}
