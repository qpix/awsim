awsim['opsworkscm'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-11-01",
    "endpointPrefix":"opsworks-cm",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"OpsWorksCM",
    "serviceFullName":"AWS OpsWorks for Chef Automate",
    "serviceId":"OpsWorksCM",
    "signatureVersion":"v4",
    "signingName":"opsworks-cm",
    "targetPrefix":"OpsWorksCM_V2016_11_01",
    "uid":"opsworkscm-2016-11-01"
  },
  "operations":{
    "AssociateNode":{
      "name":"AssociateNode",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateNodeRequest"},
      "output":{"shape":"AssociateNodeResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p> <p> On a Chef server: This command is an alternative to <code>knife bootstrap</code>.</p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes \"Name=<i>CHEF_ORGANIZATION</i>,Value=default\" \"Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>\"</code> </p> <p> On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR. </p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes \"Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>\"</code> </p> <p> A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server's instance. </p>"
    },
    "CreateBackup":{
      "name":"CreateBackup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateBackupRequest"},
      "output":{"shape":"CreateBackupResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Creates an application-level backup of a server. While the server is in the <code>BACKING_UP</code> state, the server cannot be changed, and no additional backup can be created. </p> <p> Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50 manual backups. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached. An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY. A <code>ResourceNotFoundException</code> is thrown when the server is not found. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>"
    },
    "CreateServer":{
      "name":"CreateServer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateServerRequest"},
      "output":{"shape":"CreateServerResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code> is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p> <p> If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group. </p> <p> <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p> <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p>By default, your server is accessible from any IP address. We recommend that you update your security group rules to allow access from known IP addresses and address ranges only. To edit security group rules, open Security Groups in the navigation pane of the EC2 management console. </p>"
    },
    "DeleteBackup":{
      "name":"DeleteBackup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteBackupRequest"},
      "output":{"shape":"DeleteBackupResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>"
    },
    "DeleteServer":{
      "name":"DeleteServer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteServerRequest"},
      "output":{"shape":"DeleteServerResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Deletes the server and the underlying AWS CloudFormation stacks (including the server's EC2 instance). When you run this command, the server state is updated to <code>DELETING</code>. After the server is deleted, it is no longer returned by <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a server deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p> <p> </p>"
    },
    "DescribeAccountAttributes":{
      "name":"DescribeAccountAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAccountAttributesRequest"},
      "output":{"shape":"DescribeAccountAttributesResponse"},
      "documentation":"<p> Describes your account attributes, and creates requests to increase limits before they are reached or exceeded. </p> <p> This operation is synchronous. </p>"
    },
    "DescribeBackups":{
      "name":"DescribeBackups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeBackupsRequest"},
      "output":{"shape":"DescribeBackupsResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p> Describes backups. The results are ordered by time, with newest backups first. If you do not specify a BackupId or ServerName, the command returns all backups. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>"
    },
    "DescribeEvents":{
      "name":"DescribeEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventsRequest"},
      "output":{"shape":"DescribeEventsResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p> Describes events for a specified server. Results are ordered by time, with newest events first. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>"
    },
    "DescribeNodeAssociationStatus":{
      "name":"DescribeNodeAssociationStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeNodeAssociationStatusRequest"},
      "output":{"shape":"DescribeNodeAssociationStatusResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Returns the current status of an existing association or disassociation request. </p> <p> A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found, or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>"
    },
    "DescribeServers":{
      "name":"DescribeServers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeServersRequest"},
      "output":{"shape":"DescribeServersResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p> Lists all configuration management servers that are identified with your account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks CM does not query other services. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>"
    },
    "DisassociateNode":{
      "name":"DisassociateNode",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateNodeRequest"},
      "output":{"shape":"DisassociateNodeResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated, the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>. </p> <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>"
    },
    "RestoreServer":{
      "name":"RestoreServer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RestoreServerRequest"},
      "output":{"shape":"RestoreServerResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state. When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>"
    },
    "StartMaintenance":{
      "name":"StartMaintenance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartMaintenanceRequest"},
      "output":{"shape":"StartMaintenanceResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress. </p> <p> Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>"
    },
    "UpdateServer":{
      "name":"UpdateServer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateServerRequest"},
      "output":{"shape":"UpdateServerResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Updates settings for a server. </p> <p> This operation is synchronous. </p>"
    },
    "UpdateServerEngineAttributes":{
      "name":"UpdateServerEngineAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateServerEngineAttributesRequest"},
      "output":{"shape":"UpdateServerEngineAttributesResponse"},
      "errors":[
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p> Updates engine-specific attributes on a specified server. The server enters the <code>MODIFYING</code> state when this operation is in progress. Only one update can occur at a time. You can use this command to reset a Chef server's private key (<code>CHEF_PIVOTAL_KEY</code>), a Chef server's admin password (<code>CHEF_DELIVERY_ADMIN_PASSWORD</code>), or a Puppet server's admin password (<code>PUPPET_ADMIN_PASSWORD</code>). </p> <p> This operation is asynchronous. </p> <p> This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>"
    }
  },
  "shapes":{
    "AccountAttribute":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p> The attribute name. The following are supported attribute names. </p> <ul> <li> <p> <i>ServerLimit:</i> The number of current servers/maximum number of servers allowed. By default, you can have a maximum of 10 servers. </p> </li> <li> <p> <i>ManualBackupLimit:</i> The number of current manual backups/maximum number of backups allowed. By default, you can have a maximum of 50 manual backups saved. </p> </li> </ul>"
        },
        "Maximum":{
          "shape":"Integer",
          "documentation":"<p> The maximum allowed value. </p>"
        },
        "Used":{
          "shape":"Integer",
          "documentation":"<p> The current usage, such as the current number of servers that are associated with the account. </p>"
        }
      },
      "documentation":"<p>Stores account attributes. </p>"
    },
    "AccountAttributes":{
      "type":"list",
      "member":{"shape":"AccountAttribute"},
      "documentation":"<p> A list of individual account attributes. </p>"
    },
    "AssociateNodeRequest":{
      "type":"structure",
      "required":[
        "ServerName",
        "NodeName",
        "EngineAttributes"
      ],
      "members":{
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The name of the server with which to associate the node. </p>"
        },
        "NodeName":{
          "shape":"NodeName",
          "documentation":"<p>The name of the node. </p>"
        },
        "EngineAttributes":{
          "shape":"EngineAttributes",
          "documentation":"<p>Engine attributes used for associating the node. </p> <p class=\"title\"> <b>Attributes accepted in a AssociateNode request for Chef</b> </p> <ul> <li> <p> <code>CHEF_ORGANIZATION</code>: The Chef organization with which the node is associated. By default only one organization named <code>default</code> can exist. </p> </li> <li> <p> <code>CHEF_NODE_PUBLIC_KEY</code>: A PEM-formatted public key. This key is required for the <code>chef-client</code> agent to access the Chef API. </p> </li> </ul> <p class=\"title\"> <b>Attributes accepted in a AssociateNode request for Puppet</b> </p> <ul> <li> <p> <code>PUPPET_NODE_CSR</code>: A PEM-formatted certificate-signing request (CSR) that is created by the node. </p> </li> </ul>"
        }
      }
    },
    "AssociateNodeResponse":{
      "type":"structure",
      "members":{
        "NodeAssociationStatusToken":{
          "shape":"NodeAssociationStatusToken",
          "documentation":"<p>Contains a token which can be passed to the <code>DescribeNodeAssociationStatus</code> API call to get the status of the association request. </p>"
        }
      }
    },
    "AttributeName":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"[A-Z][A-Z0-9_]*"
    },
    "AttributeValue":{"type":"string"},
    "Backup":{
      "type":"structure",
      "members":{
        "BackupArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the backup. </p>"
        },
        "BackupId":{
          "shape":"BackupId",
          "documentation":"<p> The generated ID of the backup. Example: <code>myServerName-yyyyMMddHHmmssSSS</code> </p>"
        },
        "BackupType":{
          "shape":"BackupType",
          "documentation":"<p> The backup type. Valid values are <code>automated</code> or <code>manual</code>. </p>"
        },
        "CreatedAt":{
          "shape":"Timestamp",
          "documentation":"<p> The time stamp when the backup was created in the database. Example: <code>2016-07-29T13:38:47.520Z</code> </p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p> A user-provided description for a manual backup. This field is empty for automated backups. </p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p> The engine type that is obtained from the server when the backup is created. </p>"
        },
        "EngineModel":{
          "shape":"String",
          "documentation":"<p> The engine model that is obtained from the server when the backup is created. </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p> The engine version that is obtained from the server when the backup is created. </p>"
        },
        "InstanceProfileArn":{
          "shape":"String",
          "documentation":"<p> The EC2 instance profile ARN that is obtained from the server when the backup is created. Because this value is stored, you are not required to provide the InstanceProfileArn again if you restore a backup. </p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p> The instance type that is obtained from the server when the backup is created. </p>"
        },
        "KeyPair":{
          "shape":"String",
          "documentation":"<p> The key pair that is obtained from the server when the backup is created. </p>"
        },
        "PreferredBackupWindow":{
          "shape":"TimeWindowDefinition",
          "documentation":"<p> The preferred backup period that is obtained from the server when the backup is created. </p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"TimeWindowDefinition",
          "documentation":"<p> The preferred maintenance period that is obtained from the server when the backup is created. </p>"
        },
        "S3DataSize":{
          "shape":"Integer",
          "documentation":"<p> This field is deprecated and is no longer used. </p>",
          "deprecated":true
        },
        "S3DataUrl":{
          "shape":"String",
          "documentation":"<p> This field is deprecated and is no longer used. </p>",
          "deprecated":true
        },
        "S3LogUrl":{
          "shape":"String",
          "documentation":"<p> The Amazon S3 URL of the backup's log file. </p>"
        },
        "SecurityGroupIds":{
          "shape":"Strings",
          "documentation":"<p> The security group IDs that are obtained from the server when the backup is created. </p>"
        },
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p> The name of the server from which the backup was made. </p>"
        },
        "ServiceRoleArn":{
          "shape":"String",
          "documentation":"<p> The service role ARN that is obtained from the server when the backup is created. </p>"
        },
        "Status":{
          "shape":"BackupStatus",
          "documentation":"<p>The status of a backup while in progress. </p>"
        },
        "StatusDescription":{
          "shape":"String",
          "documentation":"<p> An informational message about backup status. </p>"
        },
        "SubnetIds":{
          "shape":"Strings",
          "documentation":"<p> The subnet IDs that are obtained from the server when the backup is created. </p>"
        },
        "ToolsVersion":{
          "shape":"String",
          "documentation":"<p> The version of AWS OpsWorks CM-specific tools that is obtained from the server when the backup is created. </p>"
        },
        "UserArn":{
          "shape":"String",
          "documentation":"<p> The IAM user ARN of the requester for manual backups. This field is empty for automated backups. </p>"
        }
      },
      "documentation":"<p>Describes a single backup. </p>"
    },
    "BackupId":{
      "type":"string",
      "max":79
    },
    "BackupRetentionCountDefinition":{
      "type":"integer",
      "min":1
    },
    "BackupStatus":{
      "type":"string",
      "enum":[
        "IN_PROGRESS",
        "OK",
        "FAILED",
        "DELETING"
      ]
    },
    "BackupType":{
      "type":"string",
      "enum":[
        "AUTOMATED",
        "MANUAL"
      ]
    },
    "Backups":{
      "type":"list",
      "member":{"shape":"Backup"}
    },
    "Boolean":{"type":"boolean"},
    "CreateBackupRequest":{
      "type":"structure",
      "required":["ServerName"],
      "members":{
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The name of the server that you want to back up. </p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p> A user-defined description of the backup. </p>"
        }
      }
    },
    "CreateBackupResponse":{
      "type":"structure",
      "members":{
        "Backup":{
          "shape":"Backup",
          "documentation":"<p>Backup created by request.</p>"
        }
      }
    },
    "CreateServerRequest":{
      "type":"structure",
      "required":[
        "ServerName",
        "InstanceProfileArn",
        "InstanceType",
        "ServiceRoleArn"
      ],
      "members":{
        "AssociatePublicIpAddress":{
          "shape":"Boolean",
          "documentation":"<p> Associate a public IP address with a server that you are launching. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>. </p>"
        },
        "DisableAutomatedBackup":{
          "shape":"Boolean",
          "documentation":"<p> Enable or disable scheduled backups. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>. </p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p> The configuration management engine to use. Valid values include <code>Chef</code> and <code>Puppet</code>. </p>"
        },
        "EngineModel":{
          "shape":"String",
          "documentation":"<p> The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef. </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p> The major release version of the engine that you want to use. For a Chef server, the valid value for EngineVersion is currently <code>12</code>. For a Puppet server, the valid value is <code>2017</code>. </p>"
        },
        "EngineAttributes":{
          "shape":"EngineAttributes",
          "documentation":"<p>Optional engine attributes on a specified server. </p> <p class=\"title\"> <b>Attributes accepted in a Chef createServer request:</b> </p> <ul> <li> <p> <code>CHEF_PIVOTAL_KEY</code>: A base64-encoded RSA private key that is not stored by AWS OpsWorks for Chef Automate. This private key is required to access the Chef API. When no CHEF_PIVOTAL_KEY is set, one is generated and returned in the response. </p> </li> <li> <p> <code>CHEF_DELIVERY_ADMIN_PASSWORD</code>: The password for the administrative user in the Chef Automate GUI. The password length is a minimum of eight characters, and a maximum of 32. The password can contain letters, numbers, and special characters (!/@#$%^&amp;+=_). The password must contain at least one lower case letter, one upper case letter, one number, and one special character. When no CHEF_DELIVERY_ADMIN_PASSWORD is set, one is generated and returned in the response.</p> </li> </ul> <p class=\"title\"> <b>Attributes accepted in a Puppet createServer request:</b> </p> <ul> <li> <p> <code>PUPPET_ADMIN_PASSWORD</code>: To work with the Puppet Enterprise console, a password must use ASCII characters.</p> </li> </ul>"
        },
        "BackupRetentionCount":{
          "shape":"BackupRetentionCountDefinition",
          "documentation":"<p> The number of automated backups that you want to keep. Whenever a new backup is created, AWS OpsWorks CM deletes the oldest backups if this number is exceeded. The default value is <code>1</code>. </p>"
        },
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p> The name of the server. The server name must be unique within your AWS account, within each region. Server names must start with a letter; then letters, numbers, or hyphens (-) are allowed, up to a maximum of 40 characters. </p>"
        },
        "InstanceProfileArn":{
          "shape":"InstanceProfileArn",
          "documentation":"<p> The ARN of the instance profile that your Amazon EC2 instances use. Although the AWS OpsWorks console typically creates the instance profile for you, if you are using API commands instead, run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml. This template creates a CloudFormation stack that includes the instance profile you need. </p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p> The Amazon EC2 instance type to use. For example, <code>m4.large</code>. Recommended instance types include <code>t2.medium</code> and greater, <code>m4.*</code>, or <code>c4.xlarge</code> and greater. </p>"
        },
        "KeyPair":{
          "shape":"KeyPair",
          "documentation":"<p> The Amazon EC2 key pair to set for the instance. This parameter is optional; if desired, you may specify this parameter to connect to your instances by using SSH. </p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"TimeWindowDefinition",
          "documentation":"<p> The start time for a one-hour period each week during which AWS OpsWorks CM performs maintenance on the instance. Valid values must be specified in the following format: <code>DDD:HH:MM</code>. The specified time is in coordinated universal time (UTC). The default value is a random one-hour period on Tuesday, Wednesday, or Friday. See <code>TimeWindowDefinition</code> for more information. </p> <p> <b>Example:</b> <code>Mon:08:00</code>, which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.) </p>"
        },
        "PreferredBackupWindow":{
          "shape":"TimeWindowDefinition",
          "documentation":"<p> The start time for a one-hour period during which AWS OpsWorks CM backs up application-level data on your server if automated backups are enabled. Valid values must be specified in one of the following formats: </p> <ul> <li> <p> <code>HH:MM</code> for daily backups</p> </li> <li> <p> <code>DDD:HH:MM</code> for weekly backups</p> </li> </ul> <p>The specified time is in coordinated universal time (UTC). The default value is a random, daily start time.</p> <p> <b>Example:</b> <code>08:00</code>, which represents a daily start time of 08:00 UTC.</p> <p> <b>Example:</b> <code>Mon:08:00</code>, which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.)</p>"
        },
        "SecurityGroupIds":{
          "shape":"Strings",
          "documentation":"<p> A list of security group IDs to attach to the Amazon EC2 instance. If you add this parameter, the specified security groups must be within the VPC that is specified by <code>SubnetIds</code>. </p> <p> If you do not specify this parameter, AWS OpsWorks CM creates one new security group that uses TCP ports 22 and 443, open to 0.0.0.0/0 (everyone). </p>"
        },
        "ServiceRoleArn":{
          "shape":"ServiceRoleArn",
          "documentation":"<p> The service role that the AWS OpsWorks CM service backend uses to work with your account. Although the AWS OpsWorks management console typically creates the service role for you, if you are using the AWS CLI or API commands, run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml. This template creates a CloudFormation stack that includes the service role and instance profile that you need. </p>"
        },
        "SubnetIds":{
          "shape":"Strings",
          "documentation":"<p> The IDs of subnets in which to launch the server EC2 instance. </p> <p> Amazon EC2-Classic customers: This field is required. All servers must run within a VPC. The VPC must have \"Auto Assign Public IP\" enabled. </p> <p> EC2-VPC customers: This field is optional. If you do not specify subnet IDs, your EC2 instances are created in a default subnet that is selected by Amazon EC2. If you specify subnet IDs, the VPC must have \"Auto Assign Public IP\" enabled. </p> <p>For more information about supported Amazon EC2 platforms, see <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html\">Supported Platforms</a>.</p>"
        },
        "BackupId":{
          "shape":"BackupId",
          "documentation":"<p> If you specify this field, AWS OpsWorks CM creates the server by using the backup represented by BackupId. </p>"
        }
      }
    },
    "CreateServerResponse":{
      "type":"structure",
      "members":{
        "Server":{
          "shape":"Server",
          "documentation":"<p>The server that is created by the request. </p>"
        }
      }
    },
    "DeleteBackupRequest":{
      "type":"structure",
      "required":["BackupId"],
      "members":{
        "BackupId":{
          "shape":"BackupId",
          "documentation":"<p>The ID of the backup to delete. Run the DescribeBackups command to get a list of backup IDs. Backup IDs are in the format <code>ServerName-yyyyMMddHHmmssSSS</code>. </p>"
        }
      }
    },
    "DeleteBackupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteServerRequest":{
      "type":"structure",
      "required":["ServerName"],
      "members":{
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The ID of the server to delete.</p>"
        }
      }
    },
    "DeleteServerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeAccountAttributesRequest":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeAccountAttributesResponse":{
      "type":"structure",
      "members":{
        "Attributes":{
          "shape":"AccountAttributes",
          "documentation":"<p> The attributes that are currently set for the account. </p>"
        }
      }
    },
    "DescribeBackupsRequest":{
      "type":"structure",
      "members":{
        "BackupId":{
          "shape":"BackupId",
          "documentation":"<p>Describes a single backup. </p>"
        },
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>Returns backups for the server with the specified ServerName. </p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>"
        }
      }
    },
    "DescribeBackupsResponse":{
      "type":"structure",
      "members":{
        "Backups":{
          "shape":"Backups",
          "documentation":"<p>Contains the response to a <code>DescribeBackups</code> request. </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>"
        }
      }
    },
    "DescribeEventsRequest":{
      "type":"structure",
      "required":["ServerName"],
      "members":{
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The name of the server for which you want to view events.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>NextToken is a string that is returned in some command responses. It indicates that not all entries have been returned, and that you must run at least one more request to get remaining items. To get remaining results, call <code>DescribeEvents</code> again, and assign the token from the previous results as the value of the <code>nextToken</code> parameter. If there are no more results, the response object's <code>nextToken</code> parameter value is <code>null</code>. Setting a <code>nextToken</code> value that was not returned in your previous results causes an <code>InvalidNextTokenException</code> to occur. </p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>To receive a paginated response, use this parameter to specify the maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results. </p>"
        }
      }
    },
    "DescribeEventsResponse":{
      "type":"structure",
      "members":{
        "ServerEvents":{
          "shape":"ServerEvents",
          "documentation":"<p>Contains the response to a <code>DescribeEvents</code> request. </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>NextToken is a string that is returned in some command responses. It indicates that not all entries have been returned, and that you must run at least one more request to get remaining items. To get remaining results, call <code>DescribeEvents</code> again, and assign the token from the previous results as the value of the <code>nextToken</code> parameter. If there are no more results, the response object's <code>nextToken</code> parameter value is <code>null</code>. Setting a <code>nextToken</code> value that was not returned in your previous results causes an <code>InvalidNextTokenException</code> to occur. </p>"
        }
      }
    },
    "DescribeNodeAssociationStatusRequest":{
      "type":"structure",
      "required":[
        "NodeAssociationStatusToken",
        "ServerName"
      ],
      "members":{
        "NodeAssociationStatusToken":{
          "shape":"NodeAssociationStatusToken",
          "documentation":"<p>The token returned in either the AssociateNodeResponse or the DisassociateNodeResponse. </p>"
        },
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The name of the server from which to disassociate the node. </p>"
        }
      }
    },
    "DescribeNodeAssociationStatusResponse":{
      "type":"structure",
      "members":{
        "NodeAssociationStatus":{
          "shape":"NodeAssociationStatus",
          "documentation":"<p>The status of the association or disassociation request. </p> <p class=\"title\"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul>"
        },
        "EngineAttributes":{
          "shape":"EngineAttributes",
          "documentation":"<p>Attributes specific to the node association. In Puppet, the attibute PUPPET_NODE_CERT contains the signed certificate (the result of the CSR). </p>"
        }
      }
    },
    "DescribeServersRequest":{
      "type":"structure",
      "members":{
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>Describes the server with the specified ServerName.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>This is not currently implemented for <code>DescribeServers</code> requests. </p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>This is not currently implemented for <code>DescribeServers</code> requests. </p>"
        }
      }
    },
    "DescribeServersResponse":{
      "type":"structure",
      "members":{
        "Servers":{
          "shape":"Servers",
          "documentation":"<p>Contains the response to a <code>DescribeServers</code> request.</p> <p> <i>For Puppet Server:</i> <code>DescribeServersResponse$Servers$EngineAttributes</code> contains PUPPET_API_CA_CERT. This is the PEM-encoded CA certificate that is used by the Puppet API over TCP port number 8140. The CA certificate is also used to sign node certificates.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>This is not currently implemented for <code>DescribeServers</code> requests. </p>"
        }
      }
    },
    "DisassociateNodeRequest":{
      "type":"structure",
      "required":[
        "ServerName",
        "NodeName"
      ],
      "members":{
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The name of the server from which to disassociate the node. </p>"
        },
        "NodeName":{
          "shape":"NodeName",
          "documentation":"<p>The name of the client node. </p>"
        },
        "EngineAttributes":{
          "shape":"EngineAttributes",
          "documentation":"<p>Engine attributes that are used for disassociating the node. No attributes are required for Puppet. </p> <p class=\"title\"> <b>Attributes required in a DisassociateNode request for Chef</b> </p> <ul> <li> <p> <code>CHEF_ORGANIZATION</code>: The Chef organization with which the node was associated. By default only one organization named <code>default</code> can exist. </p> </li> </ul>"
        }
      }
    },
    "DisassociateNodeResponse":{
      "type":"structure",
      "members":{
        "NodeAssociationStatusToken":{
          "shape":"NodeAssociationStatusToken",
          "documentation":"<p>Contains a token which can be passed to the <code>DescribeNodeAssociationStatus</code> API call to get the status of the disassociation request. </p>"
        }
      }
    },
    "EngineAttribute":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"EngineAttributeName",
          "documentation":"<p>The name of the engine attribute. </p>"
        },
        "Value":{
          "shape":"EngineAttributeValue",
          "documentation":"<p>The value of the engine attribute. </p>"
        }
      },
      "documentation":"<p>A name and value pair that is specific to the engine of the server. </p>"
    },
    "EngineAttributeName":{"type":"string"},
    "EngineAttributeValue":{
      "type":"string",
      "sensitive":true
    },
    "EngineAttributes":{
      "type":"list",
      "member":{"shape":"EngineAttribute"}
    },
    "InstanceProfileArn":{
      "type":"string",
      "pattern":"arn:aws:iam::[0-9]{12}:instance-profile/.*"
    },
    "Integer":{"type":"integer"},
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"String",
          "documentation":"<p>Error or informational message that can contain more detail about a nextToken failure. </p>"
        }
      },
      "documentation":"<p>This occurs when the provided nextToken is not valid. </p>",
      "exception":true
    },
    "InvalidStateException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"String",
          "documentation":"<p>Error or informational message that provides more detail if a resource is in a state that is not valid for performing a specified action. </p>"
        }
      },
      "documentation":"<p>The resource is in a state that does not allow you to perform a specified action. </p>",
      "exception":true
    },
    "KeyPair":{"type":"string"},
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"String",
          "documentation":"<p>Error or informational message that the maximum allowed number of servers or backups has been exceeded. </p>"
        }
      },
      "documentation":"<p>The limit of servers or backups has been reached. </p>",
      "exception":true
    },
    "MaintenanceStatus":{
      "type":"string",
      "enum":[
        "SUCCESS",
        "FAILED"
      ]
    },
    "MaxResults":{
      "type":"integer",
      "min":1
    },
    "NextToken":{"type":"string"},
    "NodeAssociationStatus":{
      "type":"string",
      "documentation":"<p>The status of the association or disassociation request. </p> <p class=\"title\"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul>",
      "enum":[
        "SUCCESS",
        "FAILED",
        "IN_PROGRESS"
      ]
    },
    "NodeAssociationStatusToken":{"type":"string"},
    "NodeName":{
      "type":"string",
      "documentation":"<p>The node name that is used by <code>chef-client</code> or <code>puppet-agent</code>for a new node. We recommend to use a unique FQDN as hostname. For more information, see the <a href=\"http://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names\">Chef</a> or <a href=\"http://docs.aws.amazon.com/https:/docs.puppet.com/puppet/4.10/man/agent.html\">Puppet</a> documentation. </p>",
      "pattern":"^[\\-\\p{Alnum}_:.]+$"
    },
    "ResourceAlreadyExistsException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"String",
          "documentation":"<p>Error or informational message in response to a CreateServer request that a resource cannot be created because it already exists. </p>"
        }
      },
      "documentation":"<p>The requested resource cannot be created because it already exists. </p>",
      "exception":true
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"String",
          "documentation":"<p>Error or informational message that can contain more detail about problems locating or accessing a resource. </p>"
        }
      },
      "documentation":"<p>The requested resource does not exist, or access was denied. </p>",
      "exception":true
    },
    "RestoreServerRequest":{
      "type":"structure",
      "required":[
        "BackupId",
        "ServerName"
      ],
      "members":{
        "BackupId":{
          "shape":"BackupId",
          "documentation":"<p> The ID of the backup that you want to use to restore a server. </p>"
        },
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p> The name of the server that you want to restore. </p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p> The type of the instance to create. Valid values must be specified in the following format: <code>^([cm][34]|t2).*</code> For example, <code>m4.large</code>. Valid values are <code>t2.medium</code>, <code>m4.large</code>, and <code>m4.2xlarge</code>. If you do not specify this parameter, RestoreServer uses the instance type from the specified backup. </p>"
        },
        "KeyPair":{
          "shape":"KeyPair",
          "documentation":"<p> The name of the key pair to set on the new EC2 instance. This can be helpful if the administrator no longer has the SSH key. </p>"
        }
      }
    },
    "RestoreServerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Server":{
      "type":"structure",
      "members":{
        "AssociatePublicIpAddress":{
          "shape":"Boolean",
          "documentation":"<p>Associate a public IP address with a server that you are launching. </p>"
        },
        "BackupRetentionCount":{
          "shape":"Integer",
          "documentation":"<p>The number of automated backups to keep. </p>"
        },
        "ServerName":{
          "shape":"String",
          "documentation":"<p>The name of the server. </p>"
        },
        "CreatedAt":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp of server creation. Example <code>2016-07-29T13:38:47.520Z</code> </p>"
        },
        "CloudFormationStackArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the CloudFormation stack that was used to create the server. </p>"
        },
        "DisableAutomatedBackup":{
          "shape":"Boolean",
          "documentation":"<p>Disables automated backups. The number of stored backups is dependent on the value of PreferredBackupCount. </p>"
        },
        "Endpoint":{
          "shape":"String",
          "documentation":"<p> A DNS name that can be used to access the engine. Example: <code>myserver-asdfghjkl.us-east-1.opsworks.io</code> </p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The engine type of the server. Valid values in this release include <code>Chef</code> and <code>Puppet</code>. </p>"
        },
        "EngineModel":{
          "shape":"String",
          "documentation":"<p>The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef. </p>"
        },
        "EngineAttributes":{
          "shape":"EngineAttributes",
          "documentation":"<p>The response of a createServer() request returns the master credential to access the server in EngineAttributes. These credentials are not stored by AWS OpsWorks CM; they are returned only as part of the result of createServer(). </p> <p class=\"title\"> <b>Attributes returned in a createServer response for Chef</b> </p> <ul> <li> <p> <code>CHEF_PIVOTAL_KEY</code>: A base64-encoded RSA private key that is generated by AWS OpsWorks for Chef Automate. This private key is required to access the Chef API.</p> </li> <li> <p> <code>CHEF_STARTER_KIT</code>: A base64-encoded ZIP file. The ZIP file contains a Chef starter kit, which includes a README, a configuration file, and the required RSA private key. Save this file, unzip it, and then change to the directory where you've unzipped the file contents. From this directory, you can run Knife commands.</p> </li> </ul> <p class=\"title\"> <b>Attributes returned in a createServer response for Puppet</b> </p> <ul> <li> <p> <code>PUPPET_STARTER_KIT</code>: A base64-encoded ZIP file. The ZIP file contains a Puppet starter kit, including a README and a required private key. Save this file, unzip it, and then change to the directory where you've unzipped the file contents.</p> </li> <li> <p> <code>PUPPET_ADMIN_PASSWORD</code>: An administrator password that you can use to sign in to the Puppet Enterprise console after the server is online.</p> </li> </ul>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version of the server. For a Chef server, the valid value for EngineVersion is currently <code>12</code>. For a Puppet server, the valid value is <code>2017</code>. </p>"
        },
        "InstanceProfileArn":{
          "shape":"String",
          "documentation":"<p>The instance profile ARN of the server. </p>"
        },
        "InstanceType":{
          "shape":"String",
          "documentation":"<p> The instance type for the server, as specified in the CloudFormation stack. This might not be the same instance type that is shown in the EC2 console. </p>"
        },
        "KeyPair":{
          "shape":"String",
          "documentation":"<p>The key pair associated with the server. </p>"
        },
        "MaintenanceStatus":{
          "shape":"MaintenanceStatus",
          "documentation":"<p>The status of the most recent server maintenance run. Shows <code>SUCCESS</code> or <code>FAILED</code>. </p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"TimeWindowDefinition",
          "documentation":"<p>The preferred maintenance period specified for the server. </p>"
        },
        "PreferredBackupWindow":{
          "shape":"TimeWindowDefinition",
          "documentation":"<p>The preferred backup period specified for the server. </p>"
        },
        "SecurityGroupIds":{
          "shape":"Strings",
          "documentation":"<p> The security group IDs for the server, as specified in the CloudFormation stack. These might not be the same security groups that are shown in the EC2 console. </p>"
        },
        "ServiceRoleArn":{
          "shape":"String",
          "documentation":"<p>The service role ARN used to create the server. </p>"
        },
        "Status":{
          "shape":"ServerStatus",
          "documentation":"<p> The server's status. This field displays the states of actions in progress, such as creating, running, or backing up the server, as well as the server's health state. </p>"
        },
        "StatusReason":{
          "shape":"String",
          "documentation":"<p> Depending on the server status, this field has either a human-readable message (such as a create or backup error), or an escaped block of JSON (used for health check results). </p>"
        },
        "SubnetIds":{
          "shape":"Strings",
          "documentation":"<p> The subnet IDs specified in a CreateServer request. </p>"
        },
        "ServerArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the server. </p>"
        }
      },
      "documentation":"<p>Describes a configuration management server. </p>"
    },
    "ServerEvent":{
      "type":"structure",
      "members":{
        "CreatedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The time when the event occurred. </p>"
        },
        "ServerName":{
          "shape":"String",
          "documentation":"<p>The name of the server on or for which the event occurred. </p>"
        },
        "Message":{
          "shape":"String",
          "documentation":"<p>A human-readable informational or status message.</p>"
        },
        "LogUrl":{
          "shape":"String",
          "documentation":"<p>The Amazon S3 URL of the event's log file.</p>"
        }
      },
      "documentation":"<p>An event that is related to the server, such as the start of maintenance or backup. </p>"
    },
    "ServerEvents":{
      "type":"list",
      "member":{"shape":"ServerEvent"}
    },
    "ServerName":{
      "type":"string",
      "max":40,
      "min":1,
      "pattern":"[a-zA-Z][a-zA-Z0-9\\-]*"
    },
    "ServerStatus":{
      "type":"string",
      "enum":[
        "BACKING_UP",
        "CONNECTION_LOST",
        "CREATING",
        "DELETING",
        "MODIFYING",
        "FAILED",
        "HEALTHY",
        "RUNNING",
        "RESTORING",
        "SETUP",
        "UNDER_MAINTENANCE",
        "UNHEALTHY",
        "TERMINATED"
      ]
    },
    "Servers":{
      "type":"list",
      "member":{"shape":"Server"}
    },
    "ServiceRoleArn":{
      "type":"string",
      "pattern":"arn:aws:iam::[0-9]{12}:role/.*"
    },
    "StartMaintenanceRequest":{
      "type":"structure",
      "required":["ServerName"],
      "members":{
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The name of the server on which to run maintenance. </p>"
        },
        "EngineAttributes":{
          "shape":"EngineAttributes",
          "documentation":"<p>Engine attributes that are specific to the server on which you want to run maintenance. </p>"
        }
      }
    },
    "StartMaintenanceResponse":{
      "type":"structure",
      "members":{
        "Server":{
          "shape":"Server",
          "documentation":"<p>Contains the response to a <code>StartMaintenance</code> request. </p>"
        }
      }
    },
    "String":{"type":"string"},
    "Strings":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "TimeWindowDefinition":{
      "type":"string",
      "documentation":"<p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>",
      "pattern":"^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$"
    },
    "Timestamp":{"type":"timestamp"},
    "UpdateServerEngineAttributesRequest":{
      "type":"structure",
      "required":[
        "ServerName",
        "AttributeName"
      ],
      "members":{
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The name of the server to update. </p>"
        },
        "AttributeName":{
          "shape":"AttributeName",
          "documentation":"<p>The name of the engine attribute to update. </p>"
        },
        "AttributeValue":{
          "shape":"AttributeValue",
          "documentation":"<p>The value to set for the attribute. </p>"
        }
      }
    },
    "UpdateServerEngineAttributesResponse":{
      "type":"structure",
      "members":{
        "Server":{
          "shape":"Server",
          "documentation":"<p>Contains the response to an <code>UpdateServerEngineAttributes</code> request. </p>"
        }
      }
    },
    "UpdateServerRequest":{
      "type":"structure",
      "required":["ServerName"],
      "members":{
        "DisableAutomatedBackup":{
          "shape":"Boolean",
          "documentation":"<p>Setting DisableAutomatedBackup to <code>true</code> disables automated or scheduled backups. Automated backups are enabled by default. </p>"
        },
        "BackupRetentionCount":{
          "shape":"Integer",
          "documentation":"<p>Sets the number of automated backups that you want to keep. </p>"
        },
        "ServerName":{
          "shape":"ServerName",
          "documentation":"<p>The name of the server to update. </p>"
        },
        "PreferredMaintenanceWindow":{"shape":"TimeWindowDefinition"},
        "PreferredBackupWindow":{"shape":"TimeWindowDefinition"}
      }
    },
    "UpdateServerResponse":{
      "type":"structure",
      "members":{
        "Server":{
          "shape":"Server",
          "documentation":"<p>Contains the response to a <code>UpdateServer</code> request. </p>"
        }
      }
    },
    "ValidationException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"String",
          "documentation":"<p>Error or informational message that can contain more detail about a validation failure. </p>"
        }
      },
      "documentation":"<p>One or more of the provided request parameters are not valid. </p>",
      "exception":true
    }
  },
  "documentation":"<fullname>AWS OpsWorks CM</fullname> <p>AWS OpsWorks for configuration management (CM) is a service that runs and manages configuration management servers. You can use AWS OpsWorks CM to create and manage AWS OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove nodes for the servers to manage.</p> <p> <b>Glossary of terms</b> </p> <ul> <li> <p> <b>Server</b>: A configuration management server that can be highly-available. The configuration management server runs on an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start or stop servers. After you create servers, they continue to run until they are deleted.</p> </li> <li> <p> <b>Engine</b>: The engine is the specific configuration manager that you want to use. Valid values in this release include <code>Chef</code> and <code>Puppet</code>.</p> </li> <li> <p> <b>Backup</b>: This is an application-level backup of the data that the configuration manager stores. AWS OpsWorks CM creates an S3 bucket for backups when you launch the first server. A backup maintains a snapshot of a server's configuration-related attributes at the time the backup starts.</p> </li> <li> <p> <b>Events</b>: Events are always related to a server. Events are written during server creation, when health checks run, when backups are created, when system maintenance is performed, etc. When you delete a server, the server's events are also deleted.</p> </li> <li> <p> <b>Account attributes</b>: Every account has attributes that are assigned in the AWS OpsWorks CM database. These attributes store information about configuration limits (servers, backups, etc.) and your customer account. </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks-cm.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-west-1.amazonaws.com</p> </li> </ul> <p> <b>Throttling limits</b> </p> <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>"
}
