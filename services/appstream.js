awsim['appstream'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-12-01",
    "endpointPrefix":"appstream2",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Amazon AppStream",
    "serviceId":"AppStream",
    "signatureVersion":"v4",
    "signingName":"appstream",
    "targetPrefix":"PhotonAdminProxyService",
    "uid":"appstream-2016-12-01"
  },
  "operations":{
    "AssociateFleet":{
      "name":"AssociateFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateFleetRequest"},
      "output":{"shape":"AssociateFleetResult"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"IncompatibleImageException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Associates the specified fleet with the specified stack.</p>"
    },
    "CopyImage":{
      "name":"CopyImage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CopyImageRequest"},
      "output":{"shape":"CopyImageResponse"},
      "errors":[
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceNotAvailableException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"IncompatibleImageException"}
      ],
      "documentation":"<p>Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.</p>"
    },
    "CreateDirectoryConfig":{
      "name":"CreateDirectoryConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDirectoryConfigRequest"},
      "output":{"shape":"CreateDirectoryConfigResult"},
      "errors":[
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"}
      ],
      "documentation":"<p>Creates a Directory Config object in AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>"
    },
    "CreateFleet":{
      "name":"CreateFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateFleetRequest"},
      "output":{"shape":"CreateFleetResult"},
      "errors":[
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ResourceNotAvailableException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"InvalidRoleException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidParameterCombinationException"},
        {"shape":"IncompatibleImageException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Creates a fleet. A fleet consists of streaming instances that run a specified image.</p>"
    },
    "CreateImageBuilder":{
      "name":"CreateImageBuilder",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateImageBuilderRequest"},
      "output":{"shape":"CreateImageBuilderResult"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ResourceNotAvailableException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRoleException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidParameterCombinationException"},
        {"shape":"IncompatibleImageException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>"
    },
    "CreateImageBuilderStreamingURL":{
      "name":"CreateImageBuilderStreamingURL",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateImageBuilderStreamingURLRequest"},
      "output":{"shape":"CreateImageBuilderStreamingURLResult"},
      "errors":[
        {"shape":"OperationNotPermittedException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Creates a URL to start an image builder streaming session.</p>"
    },
    "CreateStack":{
      "name":"CreateStack",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateStackRequest"},
      "output":{"shape":"CreateStackResult"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidRoleException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParameterCombinationException"}
      ],
      "documentation":"<p>Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. </p>"
    },
    "CreateStreamingURL":{
      "name":"CreateStreamingURL",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateStreamingURLRequest"},
      "output":{"shape":"CreateStreamingURLResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceNotAvailableException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"InvalidParameterCombinationException"}
      ],
      "documentation":"<p>Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. </p>"
    },
    "DeleteDirectoryConfig":{
      "name":"DeleteDirectoryConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDirectoryConfigRequest"},
      "output":{"shape":"DeleteDirectoryConfigResult"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>"
    },
    "DeleteFleet":{
      "name":"DeleteFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteFleetRequest"},
      "output":{"shape":"DeleteFleetResult"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Deletes the specified fleet.</p>"
    },
    "DeleteImage":{
      "name":"DeleteImage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteImageRequest"},
      "output":{"shape":"DeleteImageResult"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.</p>"
    },
    "DeleteImageBuilder":{
      "name":"DeleteImageBuilder",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteImageBuilderRequest"},
      "output":{"shape":"DeleteImageBuilderResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Deletes the specified image builder and releases the capacity.</p>"
    },
    "DeleteImagePermissions":{
      "name":"DeleteImagePermissions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteImagePermissionsRequest"},
      "output":{"shape":"DeleteImagePermissionsResult"},
      "errors":[
        {"shape":"ResourceNotAvailableException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.</p>"
    },
    "DeleteStack":{
      "name":"DeleteStack",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteStackRequest"},
      "output":{"shape":"DeleteStackResult"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.</p>"
    },
    "DescribeDirectoryConfigs":{
      "name":"DescribeDirectoryConfigs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDirectoryConfigsRequest"},
      "output":{"shape":"DescribeDirectoryConfigsResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the information required to join streaming instances to an Active Directory domain. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>"
    },
    "DescribeFleets":{
      "name":"DescribeFleets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeFleetsRequest"},
      "output":{"shape":"DescribeFleetsResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.</p>"
    },
    "DescribeImageBuilders":{
      "name":"DescribeImageBuilders",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeImageBuildersRequest"},
      "output":{"shape":"DescribeImageBuildersResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.</p>"
    },
    "DescribeImagePermissions":{
      "name":"DescribeImagePermissions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeImagePermissionsRequest"},
      "output":{"shape":"DescribeImagePermissionsResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. </p>"
    },
    "DescribeImages":{
      "name":"DescribeImages",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeImagesRequest"},
      "output":{"shape":"DescribeImagesResult"},
      "errors":[
        {"shape":"InvalidParameterCombinationException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.</p>"
    },
    "DescribeSessions":{
      "name":"DescribeSessions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSessionsRequest"},
      "output":{"shape":"DescribeSessionsResult"},
      "errors":[
        {"shape":"InvalidParameterCombinationException"}
      ],
      "documentation":"<p>Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a user ID is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.</p>"
    },
    "DescribeStacks":{
      "name":"DescribeStacks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStacksRequest"},
      "output":{"shape":"DescribeStacksResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.</p>"
    },
    "DisassociateFleet":{
      "name":"DisassociateFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateFleetRequest"},
      "output":{"shape":"DisassociateFleetResult"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Disassociates the specified fleet from the specified stack.</p>"
    },
    "ExpireSession":{
      "name":"ExpireSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ExpireSessionRequest"},
      "output":{"shape":"ExpireSessionResult"},
      "documentation":"<p>Immediately stops the specified streaming session.</p>"
    },
    "ListAssociatedFleets":{
      "name":"ListAssociatedFleets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAssociatedFleetsRequest"},
      "output":{"shape":"ListAssociatedFleetsResult"},
      "documentation":"<p>Retrieves the name of the fleet that is associated with the specified stack.</p>"
    },
    "ListAssociatedStacks":{
      "name":"ListAssociatedStacks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAssociatedStacksRequest"},
      "output":{"shape":"ListAssociatedStacksResult"},
      "documentation":"<p>Retrieves the name of the stack with which the specified fleet is associated.</p>"
    },
    "ListTagsForResource":{
      "name":"ListTagsForResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagsForResourceRequest"},
      "output":{"shape":"ListTagsForResourceResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href=\"http://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html\">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p>"
    },
    "StartFleet":{
      "name":"StartFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartFleetRequest"},
      "output":{"shape":"StartFleetResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Starts the specified fleet.</p>"
    },
    "StartImageBuilder":{
      "name":"StartImageBuilder",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartImageBuilderRequest"},
      "output":{"shape":"StartImageBuilderResult"},
      "errors":[
        {"shape":"ResourceNotAvailableException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"IncompatibleImageException"}
      ],
      "documentation":"<p>Starts the specified image builder.</p>"
    },
    "StopFleet":{
      "name":"StopFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopFleetRequest"},
      "output":{"shape":"StopFleetResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Stops the specified fleet.</p>"
    },
    "StopImageBuilder":{
      "name":"StopImageBuilder",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopImageBuilderRequest"},
      "output":{"shape":"StopImageBuilderResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Stops the specified image builder.</p>"
    },
    "TagResource":{
      "name":"TagResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TagResourceRequest"},
      "output":{"shape":"TagResourceResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href=\"http://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html\">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p>"
    },
    "UntagResource":{
      "name":"UntagResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UntagResourceRequest"},
      "output":{"shape":"UntagResourceResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href=\"http://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html\">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p>"
    },
    "UpdateDirectoryConfig":{
      "name":"UpdateDirectoryConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDirectoryConfigRequest"},
      "output":{"shape":"UpdateDirectoryConfigResult"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Updates the specified Directory Config object in AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>"
    },
    "UpdateFleet":{
      "name":"UpdateFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateFleetRequest"},
      "output":{"shape":"UpdateFleetResult"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"InvalidRoleException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceNotAvailableException"},
        {"shape":"InvalidParameterCombinationException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"IncompatibleImageException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name. If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code> and <code>ComputeCapacity</code> attributes. If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>"
    },
    "UpdateImagePermissions":{
      "name":"UpdateImagePermissions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateImagePermissionsRequest"},
      "output":{"shape":"UpdateImagePermissionsResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceNotAvailableException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Adds or updates permissions for the specified private image. </p>"
    },
    "UpdateStack":{
      "name":"UpdateStack",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateStackRequest"},
      "output":{"shape":"UpdateStackResult"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceInUseException"},
        {"shape":"InvalidRoleException"},
        {"shape":"InvalidParameterCombinationException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidAccountStatusException"},
        {"shape":"IncompatibleImageException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Updates the specified fields for the specified stack.</p>"
    }
  },
  "shapes":{
    "AccountName":{
      "type":"string",
      "min":1,
      "sensitive":true
    },
    "AccountPassword":{
      "type":"string",
      "max":127,
      "min":1,
      "sensitive":true
    },
    "Action":{
      "type":"string",
      "enum":[
        "CLIPBOARD_COPY_FROM_LOCAL_DEVICE",
        "CLIPBOARD_COPY_TO_LOCAL_DEVICE",
        "FILE_UPLOAD",
        "FILE_DOWNLOAD",
        "PRINTING_TO_LOCAL_DEVICE"
      ]
    },
    "Application":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the application.</p>"
        },
        "DisplayName":{
          "shape":"String",
          "documentation":"<p>The application name for display.</p>"
        },
        "IconURL":{
          "shape":"String",
          "documentation":"<p>The URL for the application icon. This URL might be time-limited.</p>"
        },
        "LaunchPath":{
          "shape":"String",
          "documentation":"<p>The path to the application executable in the instance.</p>"
        },
        "LaunchParameters":{
          "shape":"String",
          "documentation":"<p>The arguments that are passed to the application at launch.</p>"
        },
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>If there is a problem, the application can be disabled after image creation.</p>"
        },
        "Metadata":{
          "shape":"Metadata",
          "documentation":"<p>Additional attributes that describe the application.</p>"
        }
      },
      "documentation":"<p>Describes an application in the application catalog.</p>"
    },
    "ApplicationSettings":{
      "type":"structure",
      "required":["Enabled"],
      "members":{
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>Enables or disables persistent application settings for users during their streaming sessions. </p>"
        },
        "SettingsGroup":{
          "shape":"SettingsGroup",
          "documentation":"<p>The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack. </p>"
        }
      },
      "documentation":"<p>The persistent application settings for users of a stack.</p>"
    },
    "ApplicationSettingsResponse":{
      "type":"structure",
      "members":{
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether persistent application settings are enabled for users during their streaming sessions.</p>"
        },
        "SettingsGroup":{
          "shape":"SettingsGroup",
          "documentation":"<p>The path prefix for the S3 bucket where users’ persistent application settings are stored.</p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an AWS Region, an S3 bucket is created. The bucket is unique to the AWS account and the Region. </p>"
        }
      },
      "documentation":"<p>Describes the persistent application settings for users of a stack.</p>"
    },
    "Applications":{
      "type":"list",
      "member":{"shape":"Application"}
    },
    "AppstreamAgentVersion":{
      "type":"string",
      "max":100,
      "min":1
    },
    "Arn":{
      "type":"string",
      "pattern":"^arn:aws:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$"
    },
    "ArnList":{
      "type":"list",
      "member":{"shape":"Arn"}
    },
    "AssociateFleetRequest":{
      "type":"structure",
      "required":[
        "FleetName",
        "StackName"
      ],
      "members":{
        "FleetName":{
          "shape":"String",
          "documentation":"<p>The name of the fleet. </p>"
        },
        "StackName":{
          "shape":"String",
          "documentation":"<p>The name of the stack.</p>"
        }
      }
    },
    "AssociateFleetResult":{
      "type":"structure",
      "members":{
      }
    },
    "AuthenticationType":{
      "type":"string",
      "enum":[
        "API",
        "SAML",
        "USERPOOL"
      ]
    },
    "AwsAccountId":{
      "type":"string",
      "pattern":"^\\d+$"
    },
    "AwsAccountIdList":{
      "type":"list",
      "member":{"shape":"AwsAccountId"},
      "max":5,
      "min":1
    },
    "Boolean":{"type":"boolean"},
    "BooleanObject":{"type":"boolean"},
    "ComputeCapacity":{
      "type":"structure",
      "required":["DesiredInstances"],
      "members":{
        "DesiredInstances":{
          "shape":"Integer",
          "documentation":"<p>The desired number of streaming instances.</p>"
        }
      },
      "documentation":"<p>Describes the capacity for a fleet.</p>"
    },
    "ComputeCapacityStatus":{
      "type":"structure",
      "required":["Desired"],
      "members":{
        "Desired":{
          "shape":"Integer",
          "documentation":"<p>The desired number of streaming instances.</p>"
        },
        "Running":{
          "shape":"Integer",
          "documentation":"<p>The total number of simultaneous streaming instances that are running.</p>"
        },
        "InUse":{
          "shape":"Integer",
          "documentation":"<p>The number of instances in use for streaming.</p>"
        },
        "Available":{
          "shape":"Integer",
          "documentation":"<p>The number of currently available instances that can be used to stream sessions.</p>"
        }
      },
      "documentation":"<p>Describes the capacity status for a fleet.</p>"
    },
    "ConcurrentModificationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>An API error occurred. Wait a few minutes and try again.</p>",
      "exception":true
    },
    "CopyImageRequest":{
      "type":"structure",
      "required":[
        "SourceImageName",
        "DestinationImageName",
        "DestinationRegion"
      ],
      "members":{
        "SourceImageName":{
          "shape":"Name",
          "documentation":"<p>The name of the image to copy.</p>"
        },
        "DestinationImageName":{
          "shape":"Name",
          "documentation":"<p>The name that the image will have when it is copied to the destination.</p>"
        },
        "DestinationRegion":{
          "shape":"RegionName",
          "documentation":"<p>The destination region to which the image will be copied. This parameter is required, even if you are copying an image within the same region.</p>"
        },
        "DestinationImageDescription":{
          "shape":"Description",
          "documentation":"<p>The description that the image will have when it is copied to the destination.</p>"
        }
      }
    },
    "CopyImageResponse":{
      "type":"structure",
      "members":{
        "DestinationImageName":{
          "shape":"Name",
          "documentation":"<p>The name of the destination image.</p>"
        }
      }
    },
    "CreateDirectoryConfigRequest":{
      "type":"structure",
      "required":[
        "DirectoryName",
        "OrganizationalUnitDistinguishedNames",
        "ServiceAccountCredentials"
      ],
      "members":{
        "DirectoryName":{
          "shape":"DirectoryName",
          "documentation":"<p>The fully qualified name of the directory (for example, corp.example.com).</p>"
        },
        "OrganizationalUnitDistinguishedNames":{
          "shape":"OrganizationalUnitDistinguishedNamesList",
          "documentation":"<p>The distinguished names of the organizational units for computer accounts.</p>"
        },
        "ServiceAccountCredentials":{
          "shape":"ServiceAccountCredentials",
          "documentation":"<p>The credentials for the service account used by the streaming instance to connect to the directory.</p>"
        }
      }
    },
    "CreateDirectoryConfigResult":{
      "type":"structure",
      "members":{
        "DirectoryConfig":{
          "shape":"DirectoryConfig",
          "documentation":"<p>Information about the directory configuration.</p>"
        }
      }
    },
    "CreateFleetRequest":{
      "type":"structure",
      "required":[
        "Name",
        "InstanceType",
        "ComputeCapacity"
      ],
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>A unique name for the fleet.</p>"
        },
        "ImageName":{
          "shape":"String",
          "documentation":"<p>The name of the image used to create the fleet.</p>"
        },
        "ImageArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the public, private, or shared image to use.</p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p>The instance type to use when launching fleet instances. The following instance types are available:</p> <ul> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.compute.large</p> </li> <li> <p>stream.compute.xlarge</p> </li> <li> <p>stream.compute.2xlarge</p> </li> <li> <p>stream.compute.4xlarge</p> </li> <li> <p>stream.compute.8xlarge</p> </li> <li> <p>stream.memory.large</p> </li> <li> <p>stream.memory.xlarge</p> </li> <li> <p>stream.memory.2xlarge</p> </li> <li> <p>stream.memory.4xlarge</p> </li> <li> <p>stream.memory.8xlarge</p> </li> <li> <p>stream.graphics-design.large</p> </li> <li> <p>stream.graphics-design.xlarge</p> </li> <li> <p>stream.graphics-design.2xlarge</p> </li> <li> <p>stream.graphics-design.4xlarge</p> </li> <li> <p>stream.graphics-desktop.2xlarge</p> </li> <li> <p>stream.graphics-pro.4xlarge</p> </li> <li> <p>stream.graphics-pro.8xlarge</p> </li> <li> <p>stream.graphics-pro.16xlarge</p> </li> </ul>"
        },
        "FleetType":{
          "shape":"FleetType",
          "documentation":"<p>The fleet type.</p> <dl> <dt>ALWAYS_ON</dt> <dd> <p>Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.</p> </dd> <dt>ON_DEMAND</dt> <dd> <p>Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.</p> </dd> </dl>"
        },
        "ComputeCapacity":{
          "shape":"ComputeCapacity",
          "documentation":"<p>The desired capacity for the fleet.</p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>The VPC configuration for the fleet.</p>"
        },
        "MaxUserDurationInSeconds":{
          "shape":"Integer",
          "documentation":"<p>The maximum time that a streaming session can run, in seconds. Specify a value between 600 and 57600.</p>"
        },
        "DisconnectTimeoutInSeconds":{
          "shape":"Integer",
          "documentation":"<p>The time after disconnection when a session is considered to have ended, in seconds. If a user who was disconnected reconnects within this time interval, the user is connected to their previous session. Specify a value between 60 and 57600.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description for display.</p>"
        },
        "DisplayName":{
          "shape":"DisplayName",
          "documentation":"<p>The fleet name for display.</p>"
        },
        "EnableDefaultInternetAccess":{
          "shape":"BooleanObject",
          "documentation":"<p>Enables or disables default internet access for the fleet.</p>"
        },
        "DomainJoinInfo":{
          "shape":"DomainJoinInfo",
          "documentation":"<p>The information needed to join a Microsoft Active Directory domain.</p>"
        }
      }
    },
    "CreateFleetResult":{
      "type":"structure",
      "members":{
        "Fleet":{
          "shape":"Fleet",
          "documentation":"<p>Information about the fleet.</p>"
        }
      }
    },
    "CreateImageBuilderRequest":{
      "type":"structure",
      "required":[
        "Name",
        "InstanceType"
      ],
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>A unique name for the image builder.</p>"
        },
        "ImageName":{
          "shape":"String",
          "documentation":"<p>The name of the image used to create the builder.</p>"
        },
        "ImageArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the public, private, or shared image to use.</p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p>The instance type to use when launching the image builder.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description for display.</p>"
        },
        "DisplayName":{
          "shape":"DisplayName",
          "documentation":"<p>The image builder name for display.</p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>The VPC configuration for the image builder. You can specify only one subnet.</p>"
        },
        "EnableDefaultInternetAccess":{
          "shape":"BooleanObject",
          "documentation":"<p>Enables or disables default internet access for the image builder.</p>"
        },
        "DomainJoinInfo":{
          "shape":"DomainJoinInfo",
          "documentation":"<p>The information needed to join a Microsoft Active Directory domain.</p>"
        },
        "AppstreamAgentVersion":{
          "shape":"AppstreamAgentVersion",
          "documentation":"<p>The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. </p>"
        }
      }
    },
    "CreateImageBuilderResult":{
      "type":"structure",
      "members":{
        "ImageBuilder":{
          "shape":"ImageBuilder",
          "documentation":"<p>Information about the image builder.</p>"
        }
      }
    },
    "CreateImageBuilderStreamingURLRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the image builder.</p>"
        },
        "Validity":{
          "shape":"Long",
          "documentation":"<p>The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 3600 seconds.</p>"
        }
      }
    },
    "CreateImageBuilderStreamingURLResult":{
      "type":"structure",
      "members":{
        "StreamingURL":{
          "shape":"String",
          "documentation":"<p>The URL to start the AppStream 2.0 streaming session.</p>"
        },
        "Expires":{
          "shape":"Timestamp",
          "documentation":"<p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>"
        }
      }
    },
    "CreateStackRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>The name of the stack.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description for display.</p>"
        },
        "DisplayName":{
          "shape":"DisplayName",
          "documentation":"<p>The stack name for display.</p>"
        },
        "StorageConnectors":{
          "shape":"StorageConnectorList",
          "documentation":"<p>The storage connectors to enable.</p>"
        },
        "RedirectURL":{
          "shape":"RedirectURL",
          "documentation":"<p>The URL that users are redirected to after their streaming session ends.</p>"
        },
        "FeedbackURL":{
          "shape":"FeedbackURL",
          "documentation":"<p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>"
        },
        "UserSettings":{
          "shape":"UserSettingList",
          "documentation":"<p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. </p>"
        },
        "ApplicationSettings":{
          "shape":"ApplicationSettings",
          "documentation":"<p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>"
        }
      }
    },
    "CreateStackResult":{
      "type":"structure",
      "members":{
        "Stack":{
          "shape":"Stack",
          "documentation":"<p>Information about the stack.</p>"
        }
      }
    },
    "CreateStreamingURLRequest":{
      "type":"structure",
      "required":[
        "StackName",
        "FleetName",
        "UserId"
      ],
      "members":{
        "StackName":{
          "shape":"String",
          "documentation":"<p>The name of the stack.</p>"
        },
        "FleetName":{
          "shape":"String",
          "documentation":"<p>The name of the fleet.</p>"
        },
        "UserId":{
          "shape":"StreamingUrlUserId",
          "documentation":"<p>The ID of the user.</p>"
        },
        "ApplicationId":{
          "shape":"String",
          "documentation":"<p>The name of the application to launch after the session starts. This is the name that you specified as <b>Name</b> in the Image Assistant.</p>"
        },
        "Validity":{
          "shape":"Long",
          "documentation":"<p>The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 60 seconds.</p>"
        },
        "SessionContext":{
          "shape":"String",
          "documentation":"<p>The session context. For more information, see <a href=\"http://docs.aws.amazon.com/appstream2/latest/developerguide/managing-stacks-fleets.html#managing-stacks-fleets-parameters\">Session Context</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p>"
        }
      }
    },
    "CreateStreamingURLResult":{
      "type":"structure",
      "members":{
        "StreamingURL":{
          "shape":"String",
          "documentation":"<p>The URL to start the AppStream 2.0 streaming session.</p>"
        },
        "Expires":{
          "shape":"Timestamp",
          "documentation":"<p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>"
        }
      }
    },
    "DeleteDirectoryConfigRequest":{
      "type":"structure",
      "required":["DirectoryName"],
      "members":{
        "DirectoryName":{
          "shape":"DirectoryName",
          "documentation":"<p>The name of the directory configuration.</p>"
        }
      }
    },
    "DeleteDirectoryConfigResult":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteFleetRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the fleet.</p>"
        }
      }
    },
    "DeleteFleetResult":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteImageBuilderRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>The name of the image builder.</p>"
        }
      }
    },
    "DeleteImageBuilderResult":{
      "type":"structure",
      "members":{
        "ImageBuilder":{
          "shape":"ImageBuilder",
          "documentation":"<p>Information about the image builder.</p>"
        }
      }
    },
    "DeleteImagePermissionsRequest":{
      "type":"structure",
      "required":[
        "Name",
        "SharedAccountId"
      ],
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>The name of the private image.</p>"
        },
        "SharedAccountId":{
          "shape":"AwsAccountId",
          "documentation":"<p>The 12-digit ID of the AWS account for which to delete image permissions.</p>"
        }
      }
    },
    "DeleteImagePermissionsResult":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteImageRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>The name of the image.</p>"
        }
      }
    },
    "DeleteImageResult":{
      "type":"structure",
      "members":{
        "Image":{
          "shape":"Image",
          "documentation":"<p>Information about the image.</p>"
        }
      }
    },
    "DeleteStackRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the stack.</p>"
        }
      }
    },
    "DeleteStackResult":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeDirectoryConfigsRequest":{
      "type":"structure",
      "members":{
        "DirectoryNames":{
          "shape":"DirectoryNameList",
          "documentation":"<p>The directory names.</p>"
        },
        "MaxResults":{
          "shape":"Integer",
          "documentation":"<p>The maximum size of each page of results.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>"
        }
      }
    },
    "DescribeDirectoryConfigsResult":{
      "type":"structure",
      "members":{
        "DirectoryConfigs":{
          "shape":"DirectoryConfigList",
          "documentation":"<p>Information about the directory configurations. Note that although the response syntax in this topic includes the account password, this password is not returned in the actual response. </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>"
        }
      }
    },
    "DescribeFleetsRequest":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"StringList",
          "documentation":"<p>The names of the fleets to describe.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>"
        }
      }
    },
    "DescribeFleetsResult":{
      "type":"structure",
      "members":{
        "Fleets":{
          "shape":"FleetList",
          "documentation":"<p>Information about the fleets.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>"
        }
      }
    },
    "DescribeImageBuildersRequest":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"StringList",
          "documentation":"<p>The names of the image builders to describe.</p>"
        },
        "MaxResults":{
          "shape":"Integer",
          "documentation":"<p>The maximum size of each page of results.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>"
        }
      }
    },
    "DescribeImageBuildersResult":{
      "type":"structure",
      "members":{
        "ImageBuilders":{
          "shape":"ImageBuilderList",
          "documentation":"<p>Information about the image builders.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>"
        }
      }
    },
    "DescribeImagePermissionsRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>The name of the private image for which to describe permissions. The image must be one that you own. </p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum size of each results page.</p>"
        },
        "SharedAwsAccountIds":{
          "shape":"AwsAccountIdList",
          "documentation":"<p>The 12-digit ID of one or more AWS accounts with which the image is shared.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results. If this value is empty, only the first page is retrieved.</p>"
        }
      }
    },
    "DescribeImagePermissionsResult":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>The name of the private image.</p>"
        },
        "SharedImagePermissionsList":{
          "shape":"SharedImagePermissionsList",
          "documentation":"<p>The permissions for a private image that you own. </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results. If this value is empty, only the first page is retrieved.</p>"
        }
      }
    },
    "DescribeImagesMaxResults":{
      "type":"integer",
      "box":true,
      "max":25,
      "min":0
    },
    "DescribeImagesRequest":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"StringList",
          "documentation":"<p>The names of the public or private images to describe.</p>"
        },
        "Arns":{
          "shape":"ArnList",
          "documentation":"<p>The ARNs of the public, private, and shared images to describe.</p>"
        },
        "Type":{
          "shape":"VisibilityType",
          "documentation":"<p>The type of image (public, private, or shared) to describe. </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results. If this value is empty, only the first page is retrieved.</p>"
        },
        "MaxResults":{
          "shape":"DescribeImagesMaxResults",
          "documentation":"<p>The maximum size of each page of results.</p>"
        }
      }
    },
    "DescribeImagesResult":{
      "type":"structure",
      "members":{
        "Images":{
          "shape":"ImageList",
          "documentation":"<p>Information about the images.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results. If there are no more pages, this value is null.</p>"
        }
      }
    },
    "DescribeSessionsRequest":{
      "type":"structure",
      "required":[
        "StackName",
        "FleetName"
      ],
      "members":{
        "StackName":{
          "shape":"String",
          "documentation":"<p>The name of the stack. This value is case-sensitive.</p>"
        },
        "FleetName":{
          "shape":"String",
          "documentation":"<p>The name of the fleet. This value is case-sensitive.</p>"
        },
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The user ID.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>"
        },
        "Limit":{
          "shape":"Integer",
          "documentation":"<p>The size of each page of results. The default value is 20 and the maximum value is 50.</p>"
        },
        "AuthenticationType":{
          "shape":"AuthenticationType",
          "documentation":"<p>The authentication method. Specify <code>API</code> for a user authenticated using a streaming URL or <code>SAML</code> for a SAML federated user. The default is to authenticate users using a streaming URL.</p>"
        }
      }
    },
    "DescribeSessionsResult":{
      "type":"structure",
      "members":{
        "Sessions":{
          "shape":"SessionList",
          "documentation":"<p>Information about the streaming sessions.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>"
        }
      }
    },
    "DescribeStacksRequest":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"StringList",
          "documentation":"<p>The names of the stacks to describe.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>"
        }
      }
    },
    "DescribeStacksResult":{
      "type":"structure",
      "members":{
        "Stacks":{
          "shape":"StackList",
          "documentation":"<p>Information about the stacks.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>"
        }
      }
    },
    "Description":{
      "type":"string",
      "max":256
    },
    "DirectoryConfig":{
      "type":"structure",
      "required":["DirectoryName"],
      "members":{
        "DirectoryName":{
          "shape":"DirectoryName",
          "documentation":"<p>The fully qualified name of the directory (for example, corp.example.com).</p>"
        },
        "OrganizationalUnitDistinguishedNames":{
          "shape":"OrganizationalUnitDistinguishedNamesList",
          "documentation":"<p>The distinguished names of the organizational units for computer accounts.</p>"
        },
        "ServiceAccountCredentials":{
          "shape":"ServiceAccountCredentials",
          "documentation":"<p>The credentials for the service account used by the streaming instance to connect to the directory.</p>"
        },
        "CreatedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the directory configuration was created.</p>"
        }
      },
      "documentation":"<p>Configuration information for the directory used to join domains.</p>"
    },
    "DirectoryConfigList":{
      "type":"list",
      "member":{"shape":"DirectoryConfig"}
    },
    "DirectoryName":{"type":"string"},
    "DirectoryNameList":{
      "type":"list",
      "member":{"shape":"DirectoryName"}
    },
    "DisassociateFleetRequest":{
      "type":"structure",
      "required":[
        "FleetName",
        "StackName"
      ],
      "members":{
        "FleetName":{
          "shape":"String",
          "documentation":"<p>The name of the fleet.</p>"
        },
        "StackName":{
          "shape":"String",
          "documentation":"<p>The name of the stack.</p>"
        }
      }
    },
    "DisassociateFleetResult":{
      "type":"structure",
      "members":{
      }
    },
    "DisplayName":{
      "type":"string",
      "max":100
    },
    "Domain":{
      "type":"string",
      "documentation":"GSuite domain for GDrive integration.",
      "max":64
    },
    "DomainJoinInfo":{
      "type":"structure",
      "members":{
        "DirectoryName":{
          "shape":"DirectoryName",
          "documentation":"<p>The fully qualified name of the directory (for example, corp.example.com).</p>"
        },
        "OrganizationalUnitDistinguishedName":{
          "shape":"OrganizationalUnitDistinguishedName",
          "documentation":"<p>The distinguished name of the organizational unit for computer accounts.</p>"
        }
      },
      "documentation":"<p>Contains the information needed to join a Microsoft Active Directory domain.</p>"
    },
    "DomainList":{
      "type":"list",
      "member":{"shape":"Domain"},
      "max":10
    },
    "ErrorMessage":{
      "type":"string",
      "documentation":"<p>The error message in the exception.</p>"
    },
    "ExpireSessionRequest":{
      "type":"structure",
      "required":["SessionId"],
      "members":{
        "SessionId":{
          "shape":"String",
          "documentation":"<p>The ID of the streaming session.</p>"
        }
      }
    },
    "ExpireSessionResult":{
      "type":"structure",
      "members":{
      }
    },
    "FeedbackURL":{
      "type":"string",
      "max":1000
    },
    "Fleet":{
      "type":"structure",
      "required":[
        "Arn",
        "Name",
        "InstanceType",
        "ComputeCapacityStatus",
        "State"
      ],
      "members":{
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The ARN for the fleet.</p>"
        },
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the fleet.</p>"
        },
        "DisplayName":{
          "shape":"String",
          "documentation":"<p>The fleet name for display.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The description for display.</p>"
        },
        "ImageName":{
          "shape":"String",
          "documentation":"<p>The name of the image used to create the fleet.</p>"
        },
        "ImageArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN for the public, private, or shared image.</p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p>The instance type to use when launching fleet instances.</p>"
        },
        "FleetType":{
          "shape":"FleetType",
          "documentation":"<p>The fleet type.</p> <dl> <dt>ALWAYS_ON</dt> <dd> <p>Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.</p> </dd> <dt>ON_DEMAND</dt> <dd> <p>Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.</p> </dd> </dl>"
        },
        "ComputeCapacityStatus":{
          "shape":"ComputeCapacityStatus",
          "documentation":"<p>The capacity status for the fleet.</p>"
        },
        "MaxUserDurationInSeconds":{
          "shape":"Integer",
          "documentation":"<p>The maximum time that a streaming session can run, in seconds. Specify a value between 600 and 57600.</p>"
        },
        "DisconnectTimeoutInSeconds":{
          "shape":"Integer",
          "documentation":"<p>The time after disconnection when a session is considered to have ended, in seconds. If a user who was disconnected reconnects within this time interval, the user is connected to their previous session. Specify a value between 60 and 57600.</p>"
        },
        "State":{
          "shape":"FleetState",
          "documentation":"<p>The current state for the fleet.</p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>The VPC configuration for the fleet.</p>"
        },
        "CreatedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the fleet was created.</p>"
        },
        "FleetErrors":{
          "shape":"FleetErrors",
          "documentation":"<p>The fleet errors.</p>"
        },
        "EnableDefaultInternetAccess":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether default internet access is enabled for the fleet.</p>"
        },
        "DomainJoinInfo":{
          "shape":"DomainJoinInfo",
          "documentation":"<p>The information needed to join a Microsoft Active Directory domain.</p>"
        }
      },
      "documentation":"<p>Contains the parameters for a fleet.</p>"
    },
    "FleetAttribute":{
      "type":"string",
      "documentation":"<p>The fleet attribute.</p>",
      "enum":[
        "VPC_CONFIGURATION",
        "VPC_CONFIGURATION_SECURITY_GROUP_IDS",
        "DOMAIN_JOIN_INFO"
      ]
    },
    "FleetAttributes":{
      "type":"list",
      "member":{"shape":"FleetAttribute"},
      "documentation":"<p>The fleet attributes.</p>"
    },
    "FleetError":{
      "type":"structure",
      "members":{
        "ErrorCode":{
          "shape":"FleetErrorCode",
          "documentation":"<p>The error code.</p>"
        },
        "ErrorMessage":{
          "shape":"String",
          "documentation":"<p>The error message.</p>"
        }
      },
      "documentation":"<p>Describes a fleet error.</p>"
    },
    "FleetErrorCode":{
      "type":"string",
      "enum":[
        "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION",
        "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION",
        "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION",
        "NETWORK_INTERFACE_LIMIT_EXCEEDED",
        "INTERNAL_SERVICE_ERROR",
        "IAM_SERVICE_ROLE_IS_MISSING",
        "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES",
        "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION",
        "SUBNET_NOT_FOUND",
        "IMAGE_NOT_FOUND",
        "INVALID_SUBNET_CONFIGURATION",
        "SECURITY_GROUPS_NOT_FOUND",
        "IGW_NOT_ATTACHED",
        "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION",
        "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND",
        "DOMAIN_JOIN_ERROR_ACCESS_DENIED",
        "DOMAIN_JOIN_ERROR_LOGON_FAILURE",
        "DOMAIN_JOIN_ERROR_INVALID_PARAMETER",
        "DOMAIN_JOIN_ERROR_MORE_DATA",
        "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN",
        "DOMAIN_JOIN_ERROR_NOT_SUPPORTED",
        "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME",
        "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED",
        "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED",
        "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED",
        "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR"
      ]
    },
    "FleetErrors":{
      "type":"list",
      "member":{"shape":"FleetError"}
    },
    "FleetList":{
      "type":"list",
      "member":{"shape":"Fleet"},
      "documentation":"<p>The fleets.</p>"
    },
    "FleetState":{
      "type":"string",
      "enum":[
        "STARTING",
        "RUNNING",
        "STOPPING",
        "STOPPED"
      ]
    },
    "FleetType":{
      "type":"string",
      "enum":[
        "ALWAYS_ON",
        "ON_DEMAND"
      ]
    },
    "Image":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the image.</p>"
        },
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the image.</p>"
        },
        "BaseImageArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the image from which this image was created.</p>"
        },
        "DisplayName":{
          "shape":"String",
          "documentation":"<p>The image name for display.</p>"
        },
        "State":{
          "shape":"ImageState",
          "documentation":"<p>The image starts in the <code>PENDING</code> state. If image creation succeeds, the state is <code>AVAILABLE</code>. If image creation fails, the state is <code>FAILED</code>.</p>"
        },
        "Visibility":{
          "shape":"VisibilityType",
          "documentation":"<p>Indicates whether the image is public or private.</p>"
        },
        "ImageBuilderSupported":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether an image builder can be launched from this image.</p>"
        },
        "Platform":{
          "shape":"PlatformType",
          "documentation":"<p>The operating system platform of the image.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The description for display.</p>"
        },
        "StateChangeReason":{
          "shape":"ImageStateChangeReason",
          "documentation":"<p>The reason why the last state change occurred.</p>"
        },
        "Applications":{
          "shape":"Applications",
          "documentation":"<p>The applications associated with the image.</p>"
        },
        "CreatedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the image was created.</p>"
        },
        "PublicBaseImageReleasedDate":{
          "shape":"Timestamp",
          "documentation":"<p>The release date of the public base image. For private images, this date is the release date of the base image from which the image was created.</p>"
        },
        "AppstreamAgentVersion":{
          "shape":"AppstreamAgentVersion",
          "documentation":"<p>The version of the AppStream 2.0 agent to use for instances that are launched from this image. </p>"
        },
        "ImagePermissions":{
          "shape":"ImagePermissions",
          "documentation":"<p>The permissions to provide to the destination AWS account for the specified image.</p>"
        }
      },
      "documentation":"<p>Describes an image.</p>"
    },
    "ImageBuilder":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the image builder.</p>"
        },
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The ARN for the image builder.</p>"
        },
        "ImageArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the image from which this builder was created.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The description for display.</p>"
        },
        "DisplayName":{
          "shape":"String",
          "documentation":"<p>The image builder name for display.</p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>The VPC configuration of the image builder.</p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p>The instance type for the image builder.</p>"
        },
        "Platform":{
          "shape":"PlatformType",
          "documentation":"<p>The operating system platform of the image builder.</p>"
        },
        "State":{
          "shape":"ImageBuilderState",
          "documentation":"<p>The state of the image builder.</p>"
        },
        "StateChangeReason":{
          "shape":"ImageBuilderStateChangeReason",
          "documentation":"<p>The reason why the last state change occurred.</p>"
        },
        "CreatedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time stamp when the image builder was created.</p>"
        },
        "EnableDefaultInternetAccess":{
          "shape":"BooleanObject",
          "documentation":"<p>Enables or disables default internet access for the image builder.</p>"
        },
        "DomainJoinInfo":{
          "shape":"DomainJoinInfo",
          "documentation":"<p>The information needed to join a Microsoft Active Directory domain.</p>"
        },
        "ImageBuilderErrors":{
          "shape":"ResourceErrors",
          "documentation":"<p>The image builder errors.</p>"
        },
        "AppstreamAgentVersion":{
          "shape":"AppstreamAgentVersion",
          "documentation":"<p>The version of the AppStream 2.0 agent that is currently being used by this image builder. </p>"
        }
      },
      "documentation":"<p>Describes a streaming instance used for editing an image. New images are created from a snapshot through an image builder.</p>"
    },
    "ImageBuilderList":{
      "type":"list",
      "member":{"shape":"ImageBuilder"}
    },
    "ImageBuilderState":{
      "type":"string",
      "enum":[
        "PENDING",
        "UPDATING_AGENT",
        "RUNNING",
        "STOPPING",
        "STOPPED",
        "REBOOTING",
        "SNAPSHOTTING",
        "DELETING",
        "FAILED"
      ]
    },
    "ImageBuilderStateChangeReason":{
      "type":"structure",
      "members":{
        "Code":{
          "shape":"ImageBuilderStateChangeReasonCode",
          "documentation":"<p>The state change reason code.</p>"
        },
        "Message":{
          "shape":"String",
          "documentation":"<p>The state change reason message.</p>"
        }
      },
      "documentation":"<p>Describes the reason why the last image builder state change occurred.</p>"
    },
    "ImageBuilderStateChangeReasonCode":{
      "type":"string",
      "enum":[
        "INTERNAL_ERROR",
        "IMAGE_UNAVAILABLE"
      ]
    },
    "ImageList":{
      "type":"list",
      "member":{"shape":"Image"}
    },
    "ImagePermissions":{
      "type":"structure",
      "members":{
        "allowFleet":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether the image can be used for a fleet.</p>"
        },
        "allowImageBuilder":{
          "shape":"BooleanObject",
          "documentation":"<p>Indicates whether the image can be used for an image builder.</p>"
        }
      },
      "documentation":"<p>Describes the permissions for an image. </p>"
    },
    "ImageState":{
      "type":"string",
      "enum":[
        "PENDING",
        "AVAILABLE",
        "FAILED",
        "COPYING",
        "DELETING"
      ]
    },
    "ImageStateChangeReason":{
      "type":"structure",
      "members":{
        "Code":{
          "shape":"ImageStateChangeReasonCode",
          "documentation":"<p>The state change reason code.</p>"
        },
        "Message":{
          "shape":"String",
          "documentation":"<p>The state change reason message.</p>"
        }
      },
      "documentation":"<p>Describes the reason why the last image state change occurred.</p>"
    },
    "ImageStateChangeReasonCode":{
      "type":"string",
      "enum":[
        "INTERNAL_ERROR",
        "IMAGE_BUILDER_NOT_AVAILABLE",
        "IMAGE_COPY_FAILURE"
      ]
    },
    "IncompatibleImageException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The image does not support storage connectors.</p>",
      "exception":true
    },
    "Integer":{"type":"integer"},
    "InvalidAccountStatusException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>",
      "exception":true
    },
    "InvalidParameterCombinationException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Indicates an incorrect combination of parameters, or a missing parameter.</p>",
      "exception":true
    },
    "InvalidRoleException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified role is invalid.</p>",
      "exception":true
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The requested limit exceeds the permitted limit for an account.</p>",
      "exception":true
    },
    "ListAssociatedFleetsRequest":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"String",
          "documentation":"<p>The name of the stack.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>"
        }
      }
    },
    "ListAssociatedFleetsResult":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"StringList",
          "documentation":"<p>The name of the fleet.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>"
        }
      }
    },
    "ListAssociatedStacksRequest":{
      "type":"structure",
      "required":["FleetName"],
      "members":{
        "FleetName":{
          "shape":"String",
          "documentation":"<p>The name of the fleet.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>"
        }
      }
    },
    "ListAssociatedStacksResult":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"StringList",
          "documentation":"<p>The name of the stack.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>"
        }
      }
    },
    "ListTagsForResourceRequest":{
      "type":"structure",
      "required":["ResourceArn"],
      "members":{
        "ResourceArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource.</p>"
        }
      }
    },
    "ListTagsForResourceResponse":{
      "type":"structure",
      "members":{
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The information about the tags.</p>"
        }
      }
    },
    "Long":{"type":"long"},
    "MaxResults":{
      "type":"integer",
      "box":true,
      "max":500,
      "min":0
    },
    "Metadata":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "Name":{
      "type":"string",
      "pattern":"^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$"
    },
    "NetworkAccessConfiguration":{
      "type":"structure",
      "members":{
        "EniPrivateIpAddress":{
          "shape":"String",
          "documentation":"<p>The private IP address of the elastic network interface that is attached to instances in your VPC.</p>"
        },
        "EniId":{
          "shape":"String",
          "documentation":"<p>The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.</p>"
        }
      },
      "documentation":"<p>The network details of the fleet instance for the streaming session.</p>"
    },
    "OperationNotPermittedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The attempted operation is not permitted.</p>",
      "exception":true
    },
    "OrganizationalUnitDistinguishedName":{
      "type":"string",
      "max":2000
    },
    "OrganizationalUnitDistinguishedNamesList":{
      "type":"list",
      "member":{"shape":"OrganizationalUnitDistinguishedName"}
    },
    "Permission":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED"
      ]
    },
    "PlatformType":{
      "type":"string",
      "enum":["WINDOWS"]
    },
    "RedirectURL":{
      "type":"string",
      "max":1000
    },
    "RegionName":{
      "type":"string",
      "max":32,
      "min":1
    },
    "ResourceAlreadyExistsException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified resource already exists.</p>",
      "exception":true
    },
    "ResourceError":{
      "type":"structure",
      "members":{
        "ErrorCode":{
          "shape":"FleetErrorCode",
          "documentation":"<p>The error code.</p>"
        },
        "ErrorMessage":{
          "shape":"String",
          "documentation":"<p>The error message.</p>"
        },
        "ErrorTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The time the error occurred.</p>"
        }
      },
      "documentation":"<p>Describes a resource error.</p>"
    },
    "ResourceErrors":{
      "type":"list",
      "member":{"shape":"ResourceError"}
    },
    "ResourceIdentifier":{
      "type":"string",
      "documentation":"<p>The ARN of the resource.</p>",
      "min":1
    },
    "ResourceInUseException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified resource is in use.</p>",
      "exception":true
    },
    "ResourceNotAvailableException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified resource exists and is not in use, but isn't available.</p>",
      "exception":true
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified resource was not found.</p>",
      "exception":true
    },
    "SecurityGroupIdList":{
      "type":"list",
      "member":{"shape":"String"},
      "documentation":"<p>The security group IDs.</p>",
      "max":5
    },
    "ServiceAccountCredentials":{
      "type":"structure",
      "required":[
        "AccountName",
        "AccountPassword"
      ],
      "members":{
        "AccountName":{
          "shape":"AccountName",
          "documentation":"<p>The user name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.</p>"
        },
        "AccountPassword":{
          "shape":"AccountPassword",
          "documentation":"<p>The password for the account.</p>"
        }
      },
      "documentation":"<p>Describes the credentials for the service account used by the streaming instance to connect to the directory.</p>"
    },
    "Session":{
      "type":"structure",
      "required":[
        "Id",
        "UserId",
        "StackName",
        "FleetName",
        "State"
      ],
      "members":{
        "Id":{
          "shape":"String",
          "documentation":"<p>The ID of the streaming session.</p>"
        },
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The identifier of the user for whom the session was created.</p>"
        },
        "StackName":{
          "shape":"String",
          "documentation":"<p>The name of the stack for the streaming session.</p>"
        },
        "FleetName":{
          "shape":"String",
          "documentation":"<p>The name of the fleet for the streaming session.</p>"
        },
        "State":{
          "shape":"SessionState",
          "documentation":"<p>The current state of the streaming session.</p>"
        },
        "AuthenticationType":{
          "shape":"AuthenticationType",
          "documentation":"<p>The authentication method. The user is authenticated using a streaming URL (<code>API</code>) or SAML federation (<code>SAML</code>).</p>"
        },
        "NetworkAccessConfiguration":{
          "shape":"NetworkAccessConfiguration",
          "documentation":"<p>The network details for the streaming session.</p>"
        }
      },
      "documentation":"<p>Describes a streaming session.</p>"
    },
    "SessionList":{
      "type":"list",
      "member":{"shape":"Session"},
      "documentation":"<p>List of sessions.</p>"
    },
    "SessionState":{
      "type":"string",
      "documentation":"<p>Possible values for the state of a streaming session.</p>",
      "enum":[
        "ACTIVE",
        "PENDING",
        "EXPIRED"
      ]
    },
    "SettingsGroup":{
      "type":"string",
      "max":100
    },
    "SharedImagePermissions":{
      "type":"structure",
      "required":[
        "sharedAccountId",
        "imagePermissions"
      ],
      "members":{
        "sharedAccountId":{
          "shape":"AwsAccountId",
          "documentation":"<p>The 12-digit ID of the AWS account with which the image is shared.</p>"
        },
        "imagePermissions":{
          "shape":"ImagePermissions",
          "documentation":"<p>Describes the permissions for a shared image.</p>"
        }
      },
      "documentation":"<p>Describes the permissions that are available to the specified AWS account for a shared image.</p>"
    },
    "SharedImagePermissionsList":{
      "type":"list",
      "member":{"shape":"SharedImagePermissions"}
    },
    "Stack":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the stack.</p>"
        },
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the stack.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The description for display.</p>"
        },
        "DisplayName":{
          "shape":"String",
          "documentation":"<p>The stack name for display.</p>"
        },
        "CreatedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the stack was created.</p>"
        },
        "StorageConnectors":{
          "shape":"StorageConnectorList",
          "documentation":"<p>The storage connectors to enable.</p>"
        },
        "RedirectURL":{
          "shape":"RedirectURL",
          "documentation":"<p>The URL that users are redirected to after their streaming session ends.</p>"
        },
        "FeedbackURL":{
          "shape":"FeedbackURL",
          "documentation":"<p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>"
        },
        "StackErrors":{
          "shape":"StackErrors",
          "documentation":"<p>The errors for the stack.</p>"
        },
        "UserSettings":{
          "shape":"UserSettingList",
          "documentation":"<p>The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.</p>"
        },
        "ApplicationSettings":{
          "shape":"ApplicationSettingsResponse",
          "documentation":"<p>The persistent application settings for users of the stack.</p>"
        }
      },
      "documentation":"<p>Describes a stack.</p>"
    },
    "StackAttribute":{
      "type":"string",
      "enum":[
        "STORAGE_CONNECTORS",
        "STORAGE_CONNECTOR_HOMEFOLDERS",
        "STORAGE_CONNECTOR_GOOGLE_DRIVE",
        "STORAGE_CONNECTOR_ONE_DRIVE",
        "REDIRECT_URL",
        "FEEDBACK_URL",
        "THEME_NAME",
        "USER_SETTINGS"
      ]
    },
    "StackAttributes":{
      "type":"list",
      "member":{"shape":"StackAttribute"}
    },
    "StackError":{
      "type":"structure",
      "members":{
        "ErrorCode":{
          "shape":"StackErrorCode",
          "documentation":"<p>The error code.</p>"
        },
        "ErrorMessage":{
          "shape":"String",
          "documentation":"<p>The error message.</p>"
        }
      },
      "documentation":"<p>Describes a stack error.</p>"
    },
    "StackErrorCode":{
      "type":"string",
      "enum":[
        "STORAGE_CONNECTOR_ERROR",
        "INTERNAL_SERVICE_ERROR"
      ]
    },
    "StackErrors":{
      "type":"list",
      "member":{"shape":"StackError"},
      "documentation":"<p>The stack errors.</p>"
    },
    "StackList":{
      "type":"list",
      "member":{"shape":"Stack"},
      "documentation":"<p>The stacks.</p>"
    },
    "StartFleetRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the fleet.</p>"
        }
      }
    },
    "StartFleetResult":{
      "type":"structure",
      "members":{
      }
    },
    "StartImageBuilderRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the image builder.</p>"
        },
        "AppstreamAgentVersion":{
          "shape":"AppstreamAgentVersion",
          "documentation":"<p>The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. </p>"
        }
      }
    },
    "StartImageBuilderResult":{
      "type":"structure",
      "members":{
        "ImageBuilder":{
          "shape":"ImageBuilder",
          "documentation":"<p>Information about the image builder.</p>"
        }
      }
    },
    "StopFleetRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the fleet.</p>"
        }
      }
    },
    "StopFleetResult":{
      "type":"structure",
      "members":{
      }
    },
    "StopImageBuilderRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the image builder.</p>"
        }
      }
    },
    "StopImageBuilderResult":{
      "type":"structure",
      "members":{
        "ImageBuilder":{
          "shape":"ImageBuilder",
          "documentation":"<p>Information about the image builder.</p>"
        }
      }
    },
    "StorageConnector":{
      "type":"structure",
      "required":["ConnectorType"],
      "members":{
        "ConnectorType":{
          "shape":"StorageConnectorType",
          "documentation":"<p>The type of storage connector.</p>"
        },
        "ResourceIdentifier":{
          "shape":"ResourceIdentifier",
          "documentation":"<p>The ARN of the storage connector.</p>"
        },
        "Domains":{
          "shape":"DomainList",
          "documentation":"<p>The names of the domains for the G Suite account.</p>"
        }
      },
      "documentation":"<p>Describes a connector to enable persistent storage for users.</p>"
    },
    "StorageConnectorList":{
      "type":"list",
      "member":{"shape":"StorageConnector"},
      "documentation":"<p>The storage connectors.</p>"
    },
    "StorageConnectorType":{
      "type":"string",
      "documentation":"<p>The type of storage connector.</p>",
      "enum":[
        "HOMEFOLDERS",
        "GOOGLE_DRIVE",
        "ONE_DRIVE"
      ]
    },
    "StreamingUrlUserId":{
      "type":"string",
      "max":32,
      "min":2,
      "pattern":"[\\w+=,.@-]*"
    },
    "String":{
      "type":"string",
      "min":1
    },
    "StringList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "SubnetIdList":{
      "type":"list",
      "member":{"shape":"String"},
      "documentation":"<p>The subnet IDs.</p>"
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^(^(?!aws:).[\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagKeyList":{
      "type":"list",
      "member":{"shape":"TagKey"},
      "max":50,
      "min":1
    },
    "TagResourceRequest":{
      "type":"structure",
      "required":[
        "ResourceArn",
        "Tags"
      ],
      "members":{
        "ResourceArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The tags to associate. A tag is a key-value pair (the value is optional). For example, <code>Environment=Test</code>, or, if you do not specify a value, <code>Environment=</code>. </p> <p>If you do not specify a value, we set the value to an empty string.</p>"
        }
      }
    },
    "TagResourceResponse":{
      "type":"structure",
      "members":{
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
      "value":{"shape":"TagValue"},
      "max":50,
      "min":1
    },
    "Timestamp":{"type":"timestamp"},
    "UntagResourceRequest":{
      "type":"structure",
      "required":[
        "ResourceArn",
        "TagKeys"
      ],
      "members":{
        "ResourceArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource.</p>"
        },
        "TagKeys":{
          "shape":"TagKeyList",
          "documentation":"<p>The tag keys for the tags to disassociate.</p>"
        }
      }
    },
    "UntagResourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateDirectoryConfigRequest":{
      "type":"structure",
      "required":["DirectoryName"],
      "members":{
        "DirectoryName":{
          "shape":"DirectoryName",
          "documentation":"<p>The name of the Directory Config object.</p>"
        },
        "OrganizationalUnitDistinguishedNames":{
          "shape":"OrganizationalUnitDistinguishedNamesList",
          "documentation":"<p>The distinguished names of the organizational units for computer accounts.</p>"
        },
        "ServiceAccountCredentials":{
          "shape":"ServiceAccountCredentials",
          "documentation":"<p>The credentials for the service account used by the streaming instance to connect to the directory.</p>"
        }
      }
    },
    "UpdateDirectoryConfigResult":{
      "type":"structure",
      "members":{
        "DirectoryConfig":{
          "shape":"DirectoryConfig",
          "documentation":"<p>Information about the Directory Config object.</p>"
        }
      }
    },
    "UpdateFleetRequest":{
      "type":"structure",
      "members":{
        "ImageName":{
          "shape":"String",
          "documentation":"<p>The name of the image used to create the fleet.</p>"
        },
        "ImageArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the public, private, or shared image to use.</p>"
        },
        "Name":{
          "shape":"String",
          "documentation":"<p>A unique name for the fleet.</p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p>The instance type to use when launching fleet instances. The following instance types are available:</p> <ul> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.compute.large</p> </li> <li> <p>stream.compute.xlarge</p> </li> <li> <p>stream.compute.2xlarge</p> </li> <li> <p>stream.compute.4xlarge</p> </li> <li> <p>stream.compute.8xlarge</p> </li> <li> <p>stream.memory.large</p> </li> <li> <p>stream.memory.xlarge</p> </li> <li> <p>stream.memory.2xlarge</p> </li> <li> <p>stream.memory.4xlarge</p> </li> <li> <p>stream.memory.8xlarge</p> </li> <li> <p>stream.graphics-design.large</p> </li> <li> <p>stream.graphics-design.xlarge</p> </li> <li> <p>stream.graphics-design.2xlarge</p> </li> <li> <p>stream.graphics-design.4xlarge</p> </li> <li> <p>stream.graphics-desktop.2xlarge</p> </li> <li> <p>stream.graphics-pro.4xlarge</p> </li> <li> <p>stream.graphics-pro.8xlarge</p> </li> <li> <p>stream.graphics-pro.16xlarge</p> </li> </ul>"
        },
        "ComputeCapacity":{
          "shape":"ComputeCapacity",
          "documentation":"<p>The desired capacity for the fleet.</p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>The VPC configuration for the fleet.</p>"
        },
        "MaxUserDurationInSeconds":{
          "shape":"Integer",
          "documentation":"<p>The maximum time that a streaming session can run, in seconds. Specify a value between 600 and 57600.</p>"
        },
        "DisconnectTimeoutInSeconds":{
          "shape":"Integer",
          "documentation":"<p>The time after disconnection when a session is considered to have ended, in seconds. If a user who was disconnected reconnects within this time interval, the user is connected to their previous session. Specify a value between 60 and 57600.</p>"
        },
        "DeleteVpcConfig":{
          "shape":"Boolean",
          "documentation":"<p>Deletes the VPC association for the specified fleet.</p>",
          "deprecated":true
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description for display.</p>"
        },
        "DisplayName":{
          "shape":"DisplayName",
          "documentation":"<p>The fleet name for display.</p>"
        },
        "EnableDefaultInternetAccess":{
          "shape":"BooleanObject",
          "documentation":"<p>Enables or disables default internet access for the fleet.</p>"
        },
        "DomainJoinInfo":{
          "shape":"DomainJoinInfo",
          "documentation":"<p>The information needed to join a Microsoft Active Directory domain.</p>"
        },
        "AttributesToDelete":{
          "shape":"FleetAttributes",
          "documentation":"<p>The fleet attributes to delete.</p>"
        }
      }
    },
    "UpdateFleetResult":{
      "type":"structure",
      "members":{
        "Fleet":{
          "shape":"Fleet",
          "documentation":"<p>Information about the fleet.</p>"
        }
      }
    },
    "UpdateImagePermissionsRequest":{
      "type":"structure",
      "required":[
        "Name",
        "SharedAccountId",
        "ImagePermissions"
      ],
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>The name of the private image.</p>"
        },
        "SharedAccountId":{
          "shape":"AwsAccountId",
          "documentation":"<p>The 12-digit ID of the AWS account for which you want add or update image permissions.</p>"
        },
        "ImagePermissions":{
          "shape":"ImagePermissions",
          "documentation":"<p>The permissions for the image.</p>"
        }
      }
    },
    "UpdateImagePermissionsResult":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateStackRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "DisplayName":{
          "shape":"DisplayName",
          "documentation":"<p>The stack name for display.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description for display.</p>"
        },
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the stack.</p>"
        },
        "StorageConnectors":{
          "shape":"StorageConnectorList",
          "documentation":"<p>The storage connectors to enable.</p>"
        },
        "DeleteStorageConnectors":{
          "shape":"Boolean",
          "documentation":"<p>Deletes the storage connectors currently enabled for the stack.</p>",
          "deprecated":true
        },
        "RedirectURL":{
          "shape":"RedirectURL",
          "documentation":"<p>The URL that users are redirected to after their streaming session ends.</p>"
        },
        "FeedbackURL":{
          "shape":"FeedbackURL",
          "documentation":"<p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>"
        },
        "AttributesToDelete":{
          "shape":"StackAttributes",
          "documentation":"<p>The stack attributes to delete.</p>"
        },
        "UserSettings":{
          "shape":"UserSettingList",
          "documentation":"<p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.</p>"
        },
        "ApplicationSettings":{
          "shape":"ApplicationSettings",
          "documentation":"<p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>"
        }
      }
    },
    "UpdateStackResult":{
      "type":"structure",
      "members":{
        "Stack":{
          "shape":"Stack",
          "documentation":"<p>Information about the stack.</p>"
        }
      }
    },
    "UserId":{
      "type":"string",
      "max":32,
      "min":2
    },
    "UserSetting":{
      "type":"structure",
      "required":[
        "Action",
        "Permission"
      ],
      "members":{
        "Action":{
          "shape":"Action",
          "documentation":"<p>The action that is enabled or disabled.</p>"
        },
        "Permission":{
          "shape":"Permission",
          "documentation":"<p>Indicates whether the action is enabled or disabled.</p>"
        }
      },
      "documentation":"<p>Describes an action and whether the action is enabled or disabled for users during their streaming sessions.</p>"
    },
    "UserSettingList":{
      "type":"list",
      "member":{"shape":"UserSetting"},
      "min":1
    },
    "VisibilityType":{
      "type":"string",
      "enum":[
        "PUBLIC",
        "PRIVATE",
        "SHARED"
      ]
    },
    "VpcConfig":{
      "type":"structure",
      "members":{
        "SubnetIds":{
          "shape":"SubnetIdList",
          "documentation":"<p>The subnets to which a network interface is established from the fleet instance.</p>"
        },
        "SecurityGroupIds":{
          "shape":"SecurityGroupIdList",
          "documentation":"<p>The security groups for the fleet.</p>"
        }
      },
      "documentation":"<p>Describes VPC configuration information.</p>"
    }
  },
  "documentation":"<fullname>Amazon AppStream 2.0</fullname> <p>You can use Amazon AppStream 2.0 to stream desktop applications to any device running a web browser, without rewriting them.</p>"
}
