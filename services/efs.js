awsim['efs'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-02-01",
    "endpointPrefix":"elasticfilesystem",
    "protocol":"rest-json",
    "serviceAbbreviation":"EFS",
    "serviceFullName":"Amazon Elastic File System",
    "serviceId":"EFS",
    "signatureVersion":"v4",
    "uid":"elasticfilesystem-2015-02-01"
  },
  "operations":{
    "CreateFileSystem":{
      "name":"CreateFileSystem",
      "http":{
        "method":"POST",
        "requestUri":"/2015-02-01/file-systems",
        "responseCode":201
      },
      "input":{"shape":"CreateFileSystemRequest"},
      "output":{"shape":"FileSystemDescription"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"FileSystemAlreadyExists"},
        {"shape":"FileSystemLimitExceeded"},
        {"shape":"InsufficientThroughputCapacity"},
        {"shape":"ThroughputLimitExceeded"}
      ],
      "documentation":"<p>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's AWS account with the specified creation token, this operation does the following:</p> <ul> <li> <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state <code>creating</code>.</p> </li> <li> <p>Returns with the description of the created file system.</p> </li> </ul> <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the ID of the existing file system.</p> <note> <p>For basic use cases, you can use a randomly generated UUID for the creation token.</p> </note> <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>creating</code>. You can check the file system creation status by calling the <a>DescribeFileSystems</a> operation, which among other things returns the file system state.</p> </note> <p>This operation also takes an optional <code>PerformanceMode</code> parameter that you choose for your file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see <a href=\"http://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html\">Amazon EFS: Performance Modes</a>.</p> <p>After the file system is fully created, Amazon EFS sets its lifecycle state to <code>available</code>, at which point you can create one or more mount targets for the file system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in your VPC via the mount target. For more information, see <a href=\"http://docs.aws.amazon.com/efs/latest/ug/how-it-works.html\">Amazon EFS: How it Works</a>. </p> <p> This operation requires permissions for the <code>elasticfilesystem:CreateFileSystem</code> action. </p>"
    },
    "CreateMountTarget":{
      "name":"CreateMountTarget",
      "http":{
        "method":"POST",
        "requestUri":"/2015-02-01/mount-targets",
        "responseCode":200
      },
      "input":{"shape":"CreateMountTargetRequest"},
      "output":{"shape":"MountTargetDescription"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"FileSystemNotFound"},
        {"shape":"IncorrectFileSystemLifeCycleState"},
        {"shape":"MountTargetConflict"},
        {"shape":"SubnetNotFound"},
        {"shape":"NoFreeAddressesInSubnet"},
        {"shape":"IpAddressInUse"},
        {"shape":"NetworkInterfaceLimitExceeded"},
        {"shape":"SecurityGroupLimitExceeded"},
        {"shape":"SecurityGroupNotFound"},
        {"shape":"UnsupportedAvailabilityZone"}
      ],
      "documentation":"<p>Creates a mount target for a file system. You can then mount the file system on EC2 instances via the mount target.</p> <p>You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. For more information, see <a href=\"http://docs.aws.amazon.com/efs/latest/ug/how-it-works.html\">Amazon EFS: How it Works</a>. </p> <p>In the request, you also specify a file system ID for which you are creating the mount target and the file system's lifecycle state must be <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p> <p>In the request, you also provide a subnet ID, which determines the following:</p> <ul> <li> <p>VPC in which Amazon EFS creates the mount target</p> </li> <li> <p>Availability Zone in which Amazon EFS creates the mount target</p> </li> <li> <p>IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)</p> </li> </ul> <p>After creating the mount target, Amazon EFS returns a response that includes, a <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system via the mount target can resolve the mount target's DNS name to its IP address. For more information, see <a href=\"http://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation\">How it Works: Implementation Overview</a>. </p> <p>Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:</p> <ul> <li> <p>Must belong to the same VPC as the subnets of the existing mount targets</p> </li> <li> <p>Must not be in the same Availability Zone as any of the subnets of the existing mount targets</p> </li> </ul> <p>If the request satisfies the requirements, Amazon EFS does the following:</p> <ul> <li> <p>Creates a new mount target in the specified subnet.</p> </li> <li> <p>Also creates a new network interface in the subnet as follows:</p> <ul> <li> <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call does when a request does not specify a primary private IP address).</p> </li> <li> <p>If the request provides <code>SecurityGroups</code>, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.</p> </li> <li> <p>Assigns the description <code>Mount target <i>fsmt-id</i> for file system <i>fs-id</i> </code> where <code> <i>fsmt-id</i> </code> is the mount target ID, and <code> <i>fs-id</i> </code> is the <code>FileSystemId</code>.</p> </li> <li> <p>Sets the <code>requesterManaged</code> property of the network interface to <code>true</code>, and the <code>requesterId</code> value to <code>EFS</code>.</p> </li> </ul> <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the <code>NetworkInterfaceId</code> field in the mount target's description to the network interface ID, and the <code>IpAddress</code> field to its address. If network interface creation fails, the entire <code>CreateMountTarget</code> operation fails.</p> </li> </ul> <note> <p>The <code>CreateMountTarget</code> call returns only after creating the network interface, but while the mount target state is still <code>creating</code>, you can check the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount target state.</p> </note> <p>We recommend you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see <a href=\"http://aws.amazon.com/efs/\">Amazon EFS</a>. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you won't be able to access your file system through that mount target. </p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:CreateMountTarget</code> </p> </li> </ul> <p>This operation also requires permissions for the following Amazon EC2 actions:</p> <ul> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> </ul>"
    },
    "CreateTags":{
      "name":"CreateTags",
      "http":{
        "method":"POST",
        "requestUri":"/2015-02-01/create-tags/{FileSystemId}",
        "responseCode":204
      },
      "input":{"shape":"CreateTagsRequest"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"FileSystemNotFound"}
      ],
      "documentation":"<p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the <code>Name</code> tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p> <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code> action.</p>"
    },
    "DeleteFileSystem":{
      "name":"DeleteFileSystem",
      "http":{
        "method":"DELETE",
        "requestUri":"/2015-02-01/file-systems/{FileSystemId}",
        "responseCode":204
      },
      "input":{"shape":"DeleteFileSystemRequest"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"FileSystemNotFound"},
        {"shape":"FileSystemInUse"}
      ],
      "documentation":"<p>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.</p> <p> You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p> <note> <p>The <code>DeleteFileSystem</code> call returns while the file system state is still <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code> error.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystem</code> action.</p>"
    },
    "DeleteMountTarget":{
      "name":"DeleteMountTarget",
      "http":{
        "method":"DELETE",
        "requestUri":"/2015-02-01/mount-targets/{MountTargetId}",
        "responseCode":204
      },
      "input":{"shape":"DeleteMountTargetRequest"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"DependencyTimeout"},
        {"shape":"MountTargetNotFound"}
      ],
      "documentation":"<p>Deletes the specified mount target.</p> <p>This operation forcibly breaks any mounts of the file system via the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes may be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC via another mount target.</p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:DeleteMountTarget</code> </p> </li> </ul> <note> <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target descriptions for the given file system. </p> </note> <p>The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:</p> <ul> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul>"
    },
    "DeleteTags":{
      "name":"DeleteTags",
      "http":{
        "method":"POST",
        "requestUri":"/2015-02-01/delete-tags/{FileSystemId}",
        "responseCode":204
      },
      "input":{"shape":"DeleteTagsRequest"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"FileSystemNotFound"}
      ],
      "documentation":"<p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request includes a tag key that does not exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html\">Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code> action.</p>"
    },
    "DescribeFileSystems":{
      "name":"DescribeFileSystems",
      "http":{
        "method":"GET",
        "requestUri":"/2015-02-01/file-systems",
        "responseCode":200
      },
      "input":{"shape":"DescribeFileSystemsRequest"},
      "output":{"shape":"DescribeFileSystemsResponse"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"FileSystemNotFound"}
      ],
      "documentation":"<p>Returns the description of a specific Amazon EFS file system if either the file system <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it returns descriptions of all file systems owned by the caller's AWS account in the AWS Region of the endpoint that you're calling.</p> <p> When retrieving all file system descriptions, you can optionally specify the <code>MaxItems</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case, you should send a subsequent request with the <code>Marker</code> request parameter set to the value of <code>NextMarker</code>. </p> <p>To retrieve a list of your file system descriptions, this operation is used in an iterative process, where <code>DescribeFileSystems</code> is called first without the <code>Marker</code> and then the operation continues to call it with the <code>Marker</code> parameter set to the value of the <code>NextMarker</code> from the previous response until the response has no <code>NextMarker</code>. </p> <p>The implementation may return fewer than <code>MaxItems</code> file system descriptions while still including a <code>NextMarker</code> value. </p> <p> The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multi-call iteration is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystems</code> action. </p>"
    },
    "DescribeMountTargetSecurityGroups":{
      "name":"DescribeMountTargetSecurityGroups",
      "http":{
        "method":"GET",
        "requestUri":"/2015-02-01/mount-targets/{MountTargetId}/security-groups",
        "responseCode":200
      },
      "input":{"shape":"DescribeMountTargetSecurityGroupsRequest"},
      "output":{"shape":"DescribeMountTargetSecurityGroupsResponse"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"MountTargetNotFound"},
        {"shape":"IncorrectMountTargetState"}
      ],
      "documentation":"<p>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>.</p> <p>This operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>"
    },
    "DescribeMountTargets":{
      "name":"DescribeMountTargets",
      "http":{
        "method":"GET",
        "requestUri":"/2015-02-01/mount-targets",
        "responseCode":200
      },
      "input":{"shape":"DescribeMountTargetsRequest"},
      "output":{"shape":"DescribeMountTargetsResponse"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"FileSystemNotFound"},
        {"shape":"MountTargetNotFound"}
      ],
      "documentation":"<p>Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID that you specify in <code>FileSystemId</code>, or on the file system of the mount target that you specify in <code>MountTargetId</code>.</p>"
    },
    "DescribeTags":{
      "name":"DescribeTags",
      "http":{
        "method":"GET",
        "requestUri":"/2015-02-01/tags/{FileSystemId}/",
        "responseCode":200
      },
      "input":{"shape":"DescribeTagsRequest"},
      "output":{"shape":"DescribeTagsResponse"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"FileSystemNotFound"}
      ],
      "documentation":"<p>Returns the tags associated with a file system. The order of tags returned in the response of one <code>DescribeTags</code> call and the order of tags returned across the responses of a multi-call iteration (when using pagination) is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeTags</code> action. </p>"
    },
    "ModifyMountTargetSecurityGroups":{
      "name":"ModifyMountTargetSecurityGroups",
      "http":{
        "method":"PUT",
        "requestUri":"/2015-02-01/mount-targets/{MountTargetId}/security-groups",
        "responseCode":204
      },
      "input":{"shape":"ModifyMountTargetSecurityGroupsRequest"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"InternalServerError"},
        {"shape":"MountTargetNotFound"},
        {"shape":"IncorrectMountTargetState"},
        {"shape":"SecurityGroupLimitExceeded"},
        {"shape":"SecurityGroupNotFound"}
      ],
      "documentation":"<p>Modifies the set of security groups in effect for a mount target.</p> <p>When you create a mount target, Amazon EFS also creates a new network interface. For more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the network interface associated with a mount target, with the <code>SecurityGroups</code> provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>. </p> <p>The operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>"
    },
    "UpdateFileSystem":{
      "name":"UpdateFileSystem",
      "http":{
        "method":"PUT",
        "requestUri":"/2015-02-01/file-systems/{FileSystemId}",
        "responseCode":202
      },
      "input":{"shape":"UpdateFileSystemRequest"},
      "output":{"shape":"FileSystemDescription"},
      "errors":[
        {"shape":"BadRequest"},
        {"shape":"FileSystemNotFound"},
        {"shape":"IncorrectFileSystemLifeCycleState"},
        {"shape":"InsufficientThroughputCapacity"},
        {"shape":"InternalServerError"},
        {"shape":"ThroughputLimitExceeded"},
        {"shape":"TooManyRequests"}
      ],
      "documentation":"<p>Updates the throughput mode or the amount of provisioned throughput of an existing file system.</p>"
    }
  },
  "shapes":{
    "AwsAccountId":{"type":"string"},
    "BadRequest":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "CreateFileSystemRequest":{
      "type":"structure",
      "required":["CreationToken"],
      "members":{
        "CreationToken":{
          "shape":"CreationToken",
          "documentation":"<p>String of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.</p>"
        },
        "PerformanceMode":{
          "shape":"PerformanceMode",
          "documentation":"<p>The <code>PerformanceMode</code> of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. This can't be changed after the file system has been created.</p>"
        },
        "Encrypted":{
          "shape":"Encrypted",
          "documentation":"<p>A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a <a>CreateFileSystemRequest$KmsKeyId</a> for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. </p>"
        },
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p>The ID of the AWS KMS CMK to be used to protect the encrypted file system. This parameter is only required if you want to use a non-default CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. This ID can be in one of the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example, <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key. For example, <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example, <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If KmsKeyId is specified, the <a>CreateFileSystemRequest$Encrypted</a> parameter must be set to true.</p>"
        },
        "ThroughputMode":{
          "shape":"ThroughputMode",
          "documentation":"<p>The throughput mode for the file system to be created. There are two throughput modes to choose from for your file system: bursting and provisioned. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change.</p>"
        },
        "ProvisionedThroughputInMibps":{
          "shape":"ProvisionedThroughputInMibps",
          "documentation":"<p>The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. The limit on throughput is 1024 MiB/s. You can get these limits increased by contacting AWS Support. For more information, see <a href=\"http://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits\">Amazon EFS Limits That You Can Increase</a> in the <i>Amazon EFS User Guide.</i> </p>"
        }
      }
    },
    "CreateMountTargetRequest":{
      "type":"structure",
      "required":[
        "FileSystemId",
        "SubnetId"
      ],
      "members":{
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>ID of the file system for which to create the mount target.</p>"
        },
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>ID of the subnet to add the mount target in.</p>"
        },
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>Valid IPv4 address within the address range of the specified subnet.</p>"
        },
        "SecurityGroups":{
          "shape":"SecurityGroups",
          "documentation":"<p>Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateTagsRequest":{
      "type":"structure",
      "required":[
        "FileSystemId",
        "Tags"
      ],
      "members":{
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.</p>",
          "location":"uri",
          "locationName":"FileSystemId"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreationToken":{
      "type":"string",
      "max":64,
      "min":1
    },
    "DeleteFileSystemRequest":{
      "type":"structure",
      "required":["FileSystemId"],
      "members":{
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>ID of the file system you want to delete.</p>",
          "location":"uri",
          "locationName":"FileSystemId"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteMountTargetRequest":{
      "type":"structure",
      "required":["MountTargetId"],
      "members":{
        "MountTargetId":{
          "shape":"MountTargetId",
          "documentation":"<p>ID of the mount target to delete (String).</p>",
          "location":"uri",
          "locationName":"MountTargetId"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteTagsRequest":{
      "type":"structure",
      "required":[
        "FileSystemId",
        "TagKeys"
      ],
      "members":{
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>ID of the file system whose tags you want to delete (String).</p>",
          "location":"uri",
          "locationName":"FileSystemId"
        },
        "TagKeys":{
          "shape":"TagKeys",
          "documentation":"<p>List of tag keys to delete.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DependencyTimeout":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The service timed out trying to fulfill the request, and the client should try the call again.</p>",
      "error":{"httpStatusCode":504},
      "exception":true
    },
    "DescribeFileSystemsRequest":{
      "type":"structure",
      "members":{
        "MaxItems":{
          "shape":"MaxItems",
          "documentation":"<p>(Optional) Specifies the maximum number of file systems to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon EFS returns is the minimum of the <code>MaxItems</code> parameter specified in the request and the service's internal maximum number of items per page. </p>",
          "location":"querystring",
          "locationName":"MaxItems"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>(Optional) Opaque pagination token returned from a previous <code>DescribeFileSystems</code> operation (String). If present, specifies to continue the list from where the returning call had left off. </p>",
          "location":"querystring",
          "locationName":"Marker"
        },
        "CreationToken":{
          "shape":"CreationToken",
          "documentation":"<p>(Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.</p>",
          "location":"querystring",
          "locationName":"CreationToken"
        },
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>(Optional) ID of the file system whose description you want to retrieve (String).</p>",
          "location":"querystring",
          "locationName":"FileSystemId"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeFileSystemsResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>Present if provided by caller in the request (String).</p>"
        },
        "FileSystems":{
          "shape":"FileSystemDescriptions",
          "documentation":"<p>Array of file system descriptions.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>Present if there are more file systems than returned in the response (String). You can use the <code>NextMarker</code> in the subsequent request to fetch the descriptions.</p>"
        }
      }
    },
    "DescribeMountTargetSecurityGroupsRequest":{
      "type":"structure",
      "required":["MountTargetId"],
      "members":{
        "MountTargetId":{
          "shape":"MountTargetId",
          "documentation":"<p>ID of the mount target whose security groups you want to retrieve.</p>",
          "location":"uri",
          "locationName":"MountTargetId"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeMountTargetSecurityGroupsResponse":{
      "type":"structure",
      "required":["SecurityGroups"],
      "members":{
        "SecurityGroups":{
          "shape":"SecurityGroups",
          "documentation":"<p>Array of security groups.</p>"
        }
      }
    },
    "DescribeMountTargetsRequest":{
      "type":"structure",
      "members":{
        "MaxItems":{
          "shape":"MaxItems",
          "documentation":"<p>(Optional) Maximum number of mount targets to return in the response. It must be an integer with a value greater than zero.</p>",
          "location":"querystring",
          "locationName":"MaxItems"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>(Optional) Opaque pagination token returned from a previous <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue the list from where the previous returning call left off.</p>",
          "location":"querystring",
          "locationName":"Marker"
        },
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>(Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if <code>MountTargetId</code> is not included.</p>",
          "location":"querystring",
          "locationName":"FileSystemId"
        },
        "MountTargetId":{
          "shape":"MountTargetId",
          "documentation":"<p>(Optional) ID of the mount target that you want to have described (String). It must be included in your request if <code>FileSystemId</code> is not included.</p>",
          "location":"querystring",
          "locationName":"MountTargetId"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeMountTargetsResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>If the request included the <code>Marker</code>, the response returns that value in this field.</p>"
        },
        "MountTargets":{
          "shape":"MountTargetDescriptions",
          "documentation":"<p>Returns the file system's mount targets as an array of <code>MountTargetDescription</code> objects.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>If a value is present, there are more mount targets to return. In a subsequent request, you can provide <code>Marker</code> in your request with this value to retrieve the next set of mount targets.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeTagsRequest":{
      "type":"structure",
      "required":["FileSystemId"],
      "members":{
        "MaxItems":{
          "shape":"MaxItems",
          "documentation":"<p>(Optional) Maximum number of file system tags to return in the response. It must be an integer with a value greater than zero.</p>",
          "location":"querystring",
          "locationName":"MaxItems"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>(Optional) Opaque pagination token returned from a previous <code>DescribeTags</code> operation (String). If present, it specifies to continue the list from where the previous call left off.</p>",
          "location":"querystring",
          "locationName":"Marker"
        },
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>ID of the file system whose tag set you want to retrieve.</p>",
          "location":"uri",
          "locationName":"FileSystemId"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeTagsResponse":{
      "type":"structure",
      "required":["Tags"],
      "members":{
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>If the request included a <code>Marker</code>, the response returns that value in this field.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Returns tags associated with the file system as an array of <code>Tag</code> objects. </p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>If a value is present, there are more tags to return. In a subsequent request, you can provide the value of <code>NextMarker</code> as the value of the <code>Marker</code> parameter in your next request to retrieve the next set of tags.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "Encrypted":{"type":"boolean"},
    "ErrorCode":{
      "type":"string",
      "min":1
    },
    "ErrorMessage":{"type":"string"},
    "FileSystemAlreadyExists":{
      "type":"structure",
      "required":[
        "ErrorCode",
        "FileSystemId"
      ],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"},
        "FileSystemId":{"shape":"FileSystemId"}
      },
      "documentation":"<p>Returned if the file system you are trying to create already exists, with the creation token you provided.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "FileSystemDescription":{
      "type":"structure",
      "required":[
        "OwnerId",
        "CreationToken",
        "FileSystemId",
        "CreationTime",
        "LifeCycleState",
        "NumberOfMountTargets",
        "SizeInBytes",
        "PerformanceMode"
      ],
      "members":{
        "OwnerId":{
          "shape":"AwsAccountId",
          "documentation":"<p>AWS account that created the file system. If the file system was created by an IAM user, the parent account to which the user belongs is the owner.</p>"
        },
        "CreationToken":{
          "shape":"CreationToken",
          "documentation":"<p>Opaque string specified in the request.</p>"
        },
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>ID of the file system, assigned by Amazon EFS.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time that the file system was created, in seconds (since 1970-01-01T00:00:00Z).</p>"
        },
        "LifeCycleState":{
          "shape":"LifeCycleState",
          "documentation":"<p>Lifecycle phase of the file system.</p>"
        },
        "Name":{
          "shape":"TagValue",
          "documentation":"<p>You can add tags to a file system, including a <code>Name</code> tag. For more information, see <a>CreateTags</a>. If the file system has a <code>Name</code> tag, Amazon EFS returns the value in this field. </p>"
        },
        "NumberOfMountTargets":{
          "shape":"MountTargetCount",
          "documentation":"<p>Current number of mount targets that the file system has. For more information, see <a>CreateMountTarget</a>.</p>"
        },
        "SizeInBytes":{
          "shape":"FileSystemSize",
          "documentation":"<p>Latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The <code>Timestamp</code> value is the integer number of seconds since 1970-01-01T00:00:00Z. The <code>SizeInBytes</code> value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, <code>SizeInBytes</code> represents actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not the exact size that the file system was at any point in time. </p>"
        },
        "PerformanceMode":{
          "shape":"PerformanceMode",
          "documentation":"<p>The <code>PerformanceMode</code> of the file system.</p>"
        },
        "Encrypted":{
          "shape":"Encrypted",
          "documentation":"<p>A Boolean value that, if true, indicates that the file system is encrypted.</p>"
        },
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p>The ID of an AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the encrypted file system.</p>"
        },
        "ThroughputMode":{
          "shape":"ThroughputMode",
          "documentation":"<p>The throughput mode for a file system. There are two throughput modes to choose from for your file system: bursting and provisioned. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change.</p>"
        },
        "ProvisionedThroughputInMibps":{
          "shape":"ProvisionedThroughputInMibps",
          "documentation":"<p>The throughput, measured in MiB/s, that you want to provision for a file system. The limit on throughput is 1024 MiB/s. You can get these limits increased by contacting AWS Support. For more information, see <a href=\"http://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits\">Amazon EFS Limits That You Can Increase</a> in the <i>Amazon EFS User Guide.</i> </p>"
        }
      },
      "documentation":"<p>Description of the file system.</p>"
    },
    "FileSystemDescriptions":{
      "type":"list",
      "member":{"shape":"FileSystemDescription"}
    },
    "FileSystemId":{"type":"string"},
    "FileSystemInUse":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if a file system has mount targets.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "FileSystemLimitExceeded":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the AWS account has already created the maximum number of file systems allowed per account.</p>",
      "error":{"httpStatusCode":403},
      "exception":true
    },
    "FileSystemNotFound":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "FileSystemSize":{
      "type":"structure",
      "required":["Value"],
      "members":{
        "Value":{
          "shape":"FileSystemSizeValue",
          "documentation":"<p>Latest known metered size (in bytes) of data stored in the file system.</p>"
        },
        "Timestamp":{
          "shape":"Timestamp",
          "documentation":"<p>Time at which the size of data, returned in the <code>Value</code> field, was determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.</p>"
        }
      },
      "documentation":"<p>Latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. Note that the value does not represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value will represent the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.</p>"
    },
    "FileSystemSizeValue":{
      "type":"long",
      "min":0
    },
    "IncorrectFileSystemLifeCycleState":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the file system's lifecycle state is not \"available\".</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "IncorrectMountTargetState":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the mount target is not in the correct state for the operation.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "InsufficientThroughputCapacity":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if there's not enough capacity to provision additional throughput. This value might be returned when you try to create a file system in provisioned throughput mode, when you attempt to increase the provisioned throughput of an existing file system, or when you attempt to change an existing file system from bursting to provisioned throughput mode.</p>",
      "error":{"httpStatusCode":503},
      "exception":true
    },
    "InternalServerError":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if an error occurred on the server side.</p>",
      "error":{"httpStatusCode":500},
      "exception":true
    },
    "IpAddress":{"type":"string"},
    "IpAddressInUse":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the request specified an <code>IpAddress</code> that is already in use in the subnet.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "KmsKeyId":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "LifeCycleState":{
      "type":"string",
      "enum":[
        "creating",
        "available",
        "updating",
        "deleting",
        "deleted"
      ]
    },
    "Marker":{"type":"string"},
    "MaxItems":{
      "type":"integer",
      "min":1
    },
    "ModifyMountTargetSecurityGroupsRequest":{
      "type":"structure",
      "required":["MountTargetId"],
      "members":{
        "MountTargetId":{
          "shape":"MountTargetId",
          "documentation":"<p>ID of the mount target whose security groups you want to modify.</p>",
          "location":"uri",
          "locationName":"MountTargetId"
        },
        "SecurityGroups":{
          "shape":"SecurityGroups",
          "documentation":"<p>Array of up to five VPC security group IDs.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "MountTargetConflict":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the mount target would violate one of the specified restrictions based on the file system's existing mount targets.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "MountTargetCount":{
      "type":"integer",
      "min":0
    },
    "MountTargetDescription":{
      "type":"structure",
      "required":[
        "MountTargetId",
        "FileSystemId",
        "SubnetId",
        "LifeCycleState"
      ],
      "members":{
        "OwnerId":{
          "shape":"AwsAccountId",
          "documentation":"<p>AWS account ID that owns the resource.</p>"
        },
        "MountTargetId":{
          "shape":"MountTargetId",
          "documentation":"<p>System-assigned mount target ID.</p>"
        },
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>ID of the file system for which the mount target is intended.</p>"
        },
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>ID of the mount target's subnet.</p>"
        },
        "LifeCycleState":{
          "shape":"LifeCycleState",
          "documentation":"<p>Lifecycle state of the mount target.</p>"
        },
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>Address at which the file system may be mounted via the mount target.</p>"
        },
        "NetworkInterfaceId":{
          "shape":"NetworkInterfaceId",
          "documentation":"<p>ID of the network interface that Amazon EFS created when it created the mount target.</p>"
        }
      },
      "documentation":"<p>Provides a description of a mount target.</p>"
    },
    "MountTargetDescriptions":{
      "type":"list",
      "member":{"shape":"MountTargetDescription"}
    },
    "MountTargetId":{"type":"string"},
    "MountTargetNotFound":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if there is no mount target with the specified ID found in the caller's account.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "NetworkInterfaceId":{"type":"string"},
    "NetworkInterfaceLimitExceeded":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The calling account has reached the limit for elastic network interfaces for the specific AWS Region. The client should try to delete some elastic network interfaces or get the account limit raised. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html\">Amazon VPC Limits</a> in the <i>Amazon VPC User Guide </i> (see the Network interfaces per VPC entry in the table). </p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "NoFreeAddressesInSubnet":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if <code>IpAddress</code> was not specified in the request and there are no free IP addresses in the subnet.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "PerformanceMode":{
      "type":"string",
      "enum":[
        "generalPurpose",
        "maxIO"
      ]
    },
    "ProvisionedThroughputInMibps":{
      "type":"double",
      "min":0.0
    },
    "SecurityGroup":{"type":"string"},
    "SecurityGroupLimitExceeded":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the size of <code>SecurityGroups</code> specified in the request is greater than five.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "SecurityGroupNotFound":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if one of the specified security groups doesn't exist in the subnet's VPC.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "SecurityGroups":{
      "type":"list",
      "member":{"shape":"SecurityGroup"},
      "max":5
    },
    "SubnetId":{"type":"string"},
    "SubnetNotFound":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if there is no subnet with ID <code>SubnetId</code> provided in the request.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "Tag":{
      "type":"structure",
      "required":[
        "Key",
        "Value"
      ],
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p>Tag key (String). The key can't start with <code>aws:</code>.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>Value of the tag key.</p>"
        }
      },
      "documentation":"<p>A tag is a key-value pair. Allowed characters: letters, whitespace, and numbers, representable in UTF-8, and the following characters:<code> + - = . _ : /</code> </p>"
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1
    },
    "TagKeys":{
      "type":"list",
      "member":{"shape":"TagKey"}
    },
    "TagValue":{
      "type":"string",
      "max":256
    },
    "Tags":{
      "type":"list",
      "member":{"shape":"Tag"}
    },
    "ThroughputLimitExceeded":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if the throughput mode or amount of provisioned throughput can't be changed because the throughput limit of 1024 MiB/s has been reached.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ThroughputMode":{
      "type":"string",
      "enum":[
        "bursting",
        "provisioned"
      ]
    },
    "Timestamp":{"type":"timestamp"},
    "TooManyRequests":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Returned if you don’t wait at least 24 hours before changing the throughput mode, or decreasing the Provisioned Throughput value.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "UnsupportedAvailabilityZone":{
      "type":"structure",
      "required":["ErrorCode"],
      "members":{
        "ErrorCode":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p/>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "UpdateFileSystemRequest":{
      "type":"structure",
      "required":["FileSystemId"],
      "members":{
        "FileSystemId":{
          "shape":"FileSystemId",
          "documentation":"<p>The ID of the file system that you want to update.</p>",
          "location":"uri",
          "locationName":"FileSystemId"
        },
        "ThroughputMode":{
          "shape":"ThroughputMode",
          "documentation":"<p>(Optional) The throughput mode that you want your file system to use. If you're not updating your throughput mode, you don't need to provide this value in your request.</p>"
        },
        "ProvisionedThroughputInMibps":{
          "shape":"ProvisionedThroughputInMibps",
          "documentation":"<p>(Optional) The amount of throughput, in MiB/s, that you want to provision for your file system. If you're not updating the amount of provisioned throughput for your file system, you don't need to provide this value in your request.</p>"
        }
      }
    }
  },
  "documentation":"<fullname>Amazon Elastic File System</fullname> <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. For more information, see the <a href=\"http://docs.aws.amazon.com/efs/latest/ug/api-reference.html\">User Guide</a>.</p>"
}
