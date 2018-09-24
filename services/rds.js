awsim['rds'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2014-10-31",
    "endpointPrefix":"rds",
    "protocol":"query",
    "serviceAbbreviation":"Amazon RDS",
    "serviceFullName":"Amazon Relational Database Service",
    "serviceId":"RDS",
    "signatureVersion":"v4",
    "uid":"rds-2014-10-31",
    "xmlNamespace":"http://rds.amazonaws.com/doc/2014-10-31/"
  },
  "operations":{
    "AddRoleToDBCluster":{
      "name":"AddRoleToDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddRoleToDBClusterMessage"},
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"DBClusterRoleAlreadyExistsFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"DBClusterRoleQuotaExceededFault"}
      ],
      "documentation":"<p>Associates an Identity and Access Management (IAM) role from an Aurora DB cluster. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html\">Authorizing Amazon Aurora MySQL to Access Other AWS Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p>"
    },
    "AddSourceIdentifierToSubscription":{
      "name":"AddSourceIdentifierToSubscription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddSourceIdentifierToSubscriptionMessage"},
      "output":{
        "shape":"AddSourceIdentifierToSubscriptionResult",
        "resultWrapper":"AddSourceIdentifierToSubscriptionResult"
      },
      "errors":[
        {"shape":"SubscriptionNotFoundFault"},
        {"shape":"SourceNotFoundFault"}
      ],
      "documentation":"<p>Adds a source identifier to an existing RDS event notification subscription.</p>"
    },
    "AddTagsToResource":{
      "name":"AddTagsToResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsToResourceMessage"},
      "errors":[
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"DBSnapshotNotFoundFault"},
        {"shape":"DBClusterNotFoundFault"}
      ],
      "documentation":"<p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html\">Tagging Amazon RDS Resources</a>.</p>"
    },
    "ApplyPendingMaintenanceAction":{
      "name":"ApplyPendingMaintenanceAction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ApplyPendingMaintenanceActionMessage"},
      "output":{
        "shape":"ApplyPendingMaintenanceActionResult",
        "resultWrapper":"ApplyPendingMaintenanceActionResult"
      },
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBInstanceStateFault"}
      ],
      "documentation":"<p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>"
    },
    "AuthorizeDBSecurityGroupIngress":{
      "name":"AuthorizeDBSecurityGroupIngress",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AuthorizeDBSecurityGroupIngressMessage"},
      "output":{
        "shape":"AuthorizeDBSecurityGroupIngressResult",
        "resultWrapper":"AuthorizeDBSecurityGroupIngressResult"
      },
      "errors":[
        {"shape":"DBSecurityGroupNotFoundFault"},
        {"shape":"InvalidDBSecurityGroupStateFault"},
        {"shape":"AuthorizationAlreadyExistsFault"},
        {"shape":"AuthorizationQuotaExceededFault"}
      ],
      "documentation":"<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <note> <p>You can't authorize ingress from an EC2 security group in one AWS Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> </note> <p>For an overview of CIDR ranges, go to the <a href=\"http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing\">Wikipedia Tutorial</a>. </p>"
    },
    "BacktrackDBCluster":{
      "name":"BacktrackDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BacktrackDBClusterMessage"},
      "output":{
        "shape":"DBClusterBacktrack",
        "resultWrapper":"BacktrackDBClusterResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"}
      ],
      "documentation":"<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html\"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "CopyDBClusterParameterGroup":{
      "name":"CopyDBClusterParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CopyDBClusterParameterGroupMessage"},
      "output":{
        "shape":"CopyDBClusterParameterGroupResult",
        "resultWrapper":"CopyDBClusterParameterGroupResult"
      },
      "errors":[
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"DBParameterGroupQuotaExceededFault"},
        {"shape":"DBParameterGroupAlreadyExistsFault"}
      ],
      "documentation":"<p>Copies the specified DB cluster parameter group.</p>"
    },
    "CopyDBClusterSnapshot":{
      "name":"CopyDBClusterSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CopyDBClusterSnapshotMessage"},
      "output":{
        "shape":"CopyDBClusterSnapshotResult",
        "resultWrapper":"CopyDBClusterSnapshotResult"
      },
      "errors":[
        {"shape":"DBClusterSnapshotAlreadyExistsFault"},
        {"shape":"DBClusterSnapshotNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBClusterSnapshotStateFault"},
        {"shape":"SnapshotQuotaExceededFault"},
        {"shape":"KMSKeyNotAccessibleFault"}
      ],
      "documentation":"<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another AWS Region. In that case, the AWS Region where you call the <code>CopyDBClusterSnapshot</code> action is the destination AWS Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another AWS Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region.</p> </li> <li> <p> <code>PreSignedUrl</code> - A URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> action to be called in the source AWS Region where the DB cluster snapshot is copied from. The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The KMS key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot will be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\"> Signature Version 4 Signing Process</a>.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination AWS Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source AWS Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the pre-signed URL. </p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in \"copying\" status.</p> <p>For more information on copying encrypted DB cluster snapshots from one AWS Region to another, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html\"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "CopyDBParameterGroup":{
      "name":"CopyDBParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CopyDBParameterGroupMessage"},
      "output":{
        "shape":"CopyDBParameterGroupResult",
        "resultWrapper":"CopyDBParameterGroupResult"
      },
      "errors":[
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"DBParameterGroupAlreadyExistsFault"},
        {"shape":"DBParameterGroupQuotaExceededFault"}
      ],
      "documentation":"<p>Copies the specified DB parameter group.</p>"
    },
    "CopyDBSnapshot":{
      "name":"CopyDBSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CopyDBSnapshotMessage"},
      "output":{
        "shape":"CopyDBSnapshotResult",
        "resultWrapper":"CopyDBSnapshotResult"
      },
      "errors":[
        {"shape":"DBSnapshotAlreadyExistsFault"},
        {"shape":"DBSnapshotNotFoundFault"},
        {"shape":"InvalidDBSnapshotStateFault"},
        {"shape":"SnapshotQuotaExceededFault"},
        {"shape":"KMSKeyNotAccessibleFault"}
      ],
      "documentation":"<p>Copies the specified DB snapshot. The source DB snapshot must be in the \"available\" state.</p> <p>You can copy a snapshot from one AWS Region to another. In that case, the AWS Region where you call the <code>CopyDBSnapshot</code> action is the destination AWS Region for the DB snapshot copy. </p> <p>For more information about copying snapshots, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopyDBSnapshot.html\">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide.</i> </p>"
    },
    "CopyOptionGroup":{
      "name":"CopyOptionGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CopyOptionGroupMessage"},
      "output":{
        "shape":"CopyOptionGroupResult",
        "resultWrapper":"CopyOptionGroupResult"
      },
      "errors":[
        {"shape":"OptionGroupAlreadyExistsFault"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"OptionGroupQuotaExceededFault"}
      ],
      "documentation":"<p>Copies the specified option group.</p>"
    },
    "CreateDBCluster":{
      "name":"CreateDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBClusterMessage"},
      "output":{
        "shape":"CreateDBClusterResult",
        "resultWrapper":"CreateDBClusterResult"
      },
      "errors":[
        {"shape":"DBClusterAlreadyExistsFault"},
        {"shape":"InsufficientStorageClusterCapacityFault"},
        {"shape":"DBClusterQuotaExceededFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBSubnetGroupStateFault"},
        {"shape":"InvalidSubnet"},
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"DBClusterParameterGroupNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"}
      ],
      "documentation":"<p>Creates a new Amazon Aurora DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon RDS MySQL DB instance. For cross-region replication where the DB cluster identified by <code>ReplicationSourceIdentifier</code> is encrypted, you must also specify the <code>PreSignedUrl</code> parameter.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "CreateDBClusterParameterGroup":{
      "name":"CreateDBClusterParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBClusterParameterGroupMessage"},
      "output":{
        "shape":"CreateDBClusterParameterGroupResult",
        "resultWrapper":"CreateDBClusterParameterGroupResult"
      },
      "errors":[
        {"shape":"DBParameterGroupQuotaExceededFault"},
        {"shape":"DBParameterGroupAlreadyExistsFault"}
      ],
      "documentation":"<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. </p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon RDS console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "CreateDBClusterSnapshot":{
      "name":"CreateDBClusterSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBClusterSnapshotMessage"},
      "output":{
        "shape":"CreateDBClusterSnapshotResult",
        "resultWrapper":"CreateDBClusterSnapshotResult"
      },
      "errors":[
        {"shape":"DBClusterSnapshotAlreadyExistsFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"SnapshotQuotaExceededFault"},
        {"shape":"InvalidDBClusterSnapshotStateFault"}
      ],
      "documentation":"<p>Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "CreateDBInstance":{
      "name":"CreateDBInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBInstanceMessage"},
      "output":{
        "shape":"CreateDBInstanceResult",
        "resultWrapper":"CreateDBInstanceResult"
      },
      "errors":[
        {"shape":"DBInstanceAlreadyExistsFault"},
        {"shape":"InsufficientDBInstanceCapacityFault"},
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"DBSecurityGroupNotFoundFault"},
        {"shape":"InstanceQuotaExceededFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidSubnet"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"ProvisionedIopsNotAvailableInAZFault"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"StorageTypeNotSupportedFault"},
        {"shape":"AuthorizationNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"DomainNotFoundFault"},
        {"shape":"BackupPolicyNotFoundFault"}
      ],
      "documentation":"<p>Creates a new DB instance.</p>"
    },
    "CreateDBInstanceReadReplica":{
      "name":"CreateDBInstanceReadReplica",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBInstanceReadReplicaMessage"},
      "output":{
        "shape":"CreateDBInstanceReadReplicaResult",
        "resultWrapper":"CreateDBInstanceReadReplicaResult"
      },
      "errors":[
        {"shape":"DBInstanceAlreadyExistsFault"},
        {"shape":"InsufficientDBInstanceCapacityFault"},
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"DBSecurityGroupNotFoundFault"},
        {"shape":"InstanceQuotaExceededFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidSubnet"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"ProvisionedIopsNotAvailableInAZFault"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"DBSubnetGroupNotAllowedFault"},
        {"shape":"InvalidDBSubnetGroupFault"},
        {"shape":"StorageTypeNotSupportedFault"},
        {"shape":"KMSKeyNotAccessibleFault"}
      ],
      "documentation":"<p>Creates a new DB instance that acts as a Read Replica for an existing source DB instance. You can create a Read Replica for a DB instance running MySQL, MariaDB, or PostgreSQL. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html\">Working with PostgreSQL, MySQL, and MariaDB Read Replicas</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Amazon Aurora doesn't support this action. You must call the <code>CreateDBInstance</code> action to create a DB instance for an Aurora DB cluster. </p> <p>All Read Replica DB instances are created with backups disabled. All other DB instance attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance, except as specified following. </p> <important> <p>Your source DB instance must have backup retention enabled. </p> </important>"
    },
    "CreateDBParameterGroup":{
      "name":"CreateDBParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBParameterGroupMessage"},
      "output":{
        "shape":"CreateDBParameterGroupResult",
        "resultWrapper":"CreateDBParameterGroupResult"
      },
      "errors":[
        {"shape":"DBParameterGroupQuotaExceededFault"},
        {"shape":"DBParameterGroupAlreadyExistsFault"}
      ],
      "documentation":"<p>Creates a new DB parameter group.</p> <p> A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. </p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>"
    },
    "CreateDBSecurityGroup":{
      "name":"CreateDBSecurityGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBSecurityGroupMessage"},
      "output":{
        "shape":"CreateDBSecurityGroupResult",
        "resultWrapper":"CreateDBSecurityGroupResult"
      },
      "errors":[
        {"shape":"DBSecurityGroupAlreadyExistsFault"},
        {"shape":"DBSecurityGroupQuotaExceededFault"},
        {"shape":"DBSecurityGroupNotSupportedFault"}
      ],
      "documentation":"<p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <note> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> </note>"
    },
    "CreateDBSnapshot":{
      "name":"CreateDBSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBSnapshotMessage"},
      "output":{
        "shape":"CreateDBSnapshotResult",
        "resultWrapper":"CreateDBSnapshotResult"
      },
      "errors":[
        {"shape":"DBSnapshotAlreadyExistsFault"},
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"SnapshotQuotaExceededFault"}
      ],
      "documentation":"<p>Creates a DBSnapshot. The source DBInstance must be in \"available\" state.</p>"
    },
    "CreateDBSubnetGroup":{
      "name":"CreateDBSubnetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDBSubnetGroupMessage"},
      "output":{
        "shape":"CreateDBSubnetGroupResult",
        "resultWrapper":"CreateDBSubnetGroupResult"
      },
      "errors":[
        {"shape":"DBSubnetGroupAlreadyExistsFault"},
        {"shape":"DBSubnetGroupQuotaExceededFault"},
        {"shape":"DBSubnetQuotaExceededFault"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidSubnet"}
      ],
      "documentation":"<p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.</p>"
    },
    "CreateEventSubscription":{
      "name":"CreateEventSubscription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateEventSubscriptionMessage"},
      "output":{
        "shape":"CreateEventSubscriptionResult",
        "resultWrapper":"CreateEventSubscriptionResult"
      },
      "errors":[
        {"shape":"EventSubscriptionQuotaExceededFault"},
        {"shape":"SubscriptionAlreadyExistFault"},
        {"shape":"SNSInvalidTopicFault"},
        {"shape":"SNSNoAuthorizationFault"},
        {"shape":"SNSTopicArnNotFoundFault"},
        {"shape":"SubscriptionCategoryNotFoundFault"},
        {"shape":"SourceNotFoundFault"}
      ],
      "documentation":"<p>Creates an RDS event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of RDS sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your RDS sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all RDS sources belonging to your customer account.</p>"
    },
    "CreateOptionGroup":{
      "name":"CreateOptionGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateOptionGroupMessage"},
      "output":{
        "shape":"CreateOptionGroupResult",
        "resultWrapper":"CreateOptionGroupResult"
      },
      "errors":[
        {"shape":"OptionGroupAlreadyExistsFault"},
        {"shape":"OptionGroupQuotaExceededFault"}
      ],
      "documentation":"<p>Creates a new option group. You can create up to 20 option groups.</p>"
    },
    "DeleteDBCluster":{
      "name":"DeleteDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDBClusterMessage"},
      "output":{
        "shape":"DeleteDBClusterResult",
        "resultWrapper":"DeleteDBClusterResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"DBClusterSnapshotAlreadyExistsFault"},
        {"shape":"SnapshotQuotaExceededFault"},
        {"shape":"InvalidDBClusterSnapshotStateFault"}
      ],
      "documentation":"<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DeleteDBClusterParameterGroup":{
      "name":"DeleteDBClusterParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDBClusterParameterGroupMessage"},
      "errors":[
        {"shape":"InvalidDBParameterGroupStateFault"},
        {"shape":"DBParameterGroupNotFoundFault"}
      ],
      "documentation":"<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DeleteDBClusterSnapshot":{
      "name":"DeleteDBClusterSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDBClusterSnapshotMessage"},
      "output":{
        "shape":"DeleteDBClusterSnapshotResult",
        "resultWrapper":"DeleteDBClusterSnapshotResult"
      },
      "errors":[
        {"shape":"InvalidDBClusterSnapshotStateFault"},
        {"shape":"DBClusterSnapshotNotFoundFault"}
      ],
      "documentation":"<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DeleteDBInstance":{
      "name":"DeleteDBInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDBInstanceMessage"},
      "output":{
        "shape":"DeleteDBInstanceResult",
        "resultWrapper":"DeleteDBInstanceResult"
      },
      "errors":[
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"DBSnapshotAlreadyExistsFault"},
        {"shape":"SnapshotQuotaExceededFault"},
        {"shape":"InvalidDBClusterStateFault"}
      ],
      "documentation":"<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. </p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a Read Replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <a>PromoteReadReplicaDBCluster</a> API action to promote the DB cluster so it's no longer a Read Replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>"
    },
    "DeleteDBParameterGroup":{
      "name":"DeleteDBParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDBParameterGroupMessage"},
      "errors":[
        {"shape":"InvalidDBParameterGroupStateFault"},
        {"shape":"DBParameterGroupNotFoundFault"}
      ],
      "documentation":"<p>Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.</p>"
    },
    "DeleteDBSecurityGroup":{
      "name":"DeleteDBSecurityGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDBSecurityGroupMessage"},
      "errors":[
        {"shape":"InvalidDBSecurityGroupStateFault"},
        {"shape":"DBSecurityGroupNotFoundFault"}
      ],
      "documentation":"<p>Deletes a DB security group.</p> <note> <p>The specified DB security group must not be associated with any DB instances.</p> </note>"
    },
    "DeleteDBSnapshot":{
      "name":"DeleteDBSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDBSnapshotMessage"},
      "output":{
        "shape":"DeleteDBSnapshotResult",
        "resultWrapper":"DeleteDBSnapshotResult"
      },
      "errors":[
        {"shape":"InvalidDBSnapshotStateFault"},
        {"shape":"DBSnapshotNotFoundFault"}
      ],
      "documentation":"<p>Deletes a DBSnapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DBSnapshot must be in the <code>available</code> state to be deleted.</p> </note>"
    },
    "DeleteDBSubnetGroup":{
      "name":"DeleteDBSubnetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDBSubnetGroupMessage"},
      "errors":[
        {"shape":"InvalidDBSubnetGroupStateFault"},
        {"shape":"InvalidDBSubnetStateFault"},
        {"shape":"DBSubnetGroupNotFoundFault"}
      ],
      "documentation":"<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>"
    },
    "DeleteEventSubscription":{
      "name":"DeleteEventSubscription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteEventSubscriptionMessage"},
      "output":{
        "shape":"DeleteEventSubscriptionResult",
        "resultWrapper":"DeleteEventSubscriptionResult"
      },
      "errors":[
        {"shape":"SubscriptionNotFoundFault"},
        {"shape":"InvalidEventSubscriptionStateFault"}
      ],
      "documentation":"<p>Deletes an RDS event notification subscription.</p>"
    },
    "DeleteOptionGroup":{
      "name":"DeleteOptionGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteOptionGroupMessage"},
      "errors":[
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"InvalidOptionGroupStateFault"}
      ],
      "documentation":"<p>Deletes an existing option group.</p>"
    },
    "DescribeAccountAttributes":{
      "name":"DescribeAccountAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAccountAttributesMessage"},
      "output":{
        "shape":"AccountAttributesMessage",
        "resultWrapper":"DescribeAccountAttributesResult"
      },
      "documentation":"<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>"
    },
    "DescribeCertificates":{
      "name":"DescribeCertificates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeCertificatesMessage"},
      "output":{
        "shape":"CertificateMessage",
        "resultWrapper":"DescribeCertificatesResult"
      },
      "errors":[
        {"shape":"CertificateNotFoundFault"}
      ],
      "documentation":"<p>Lists the set of CA certificates provided by Amazon RDS for this AWS account.</p>"
    },
    "DescribeDBClusterBacktracks":{
      "name":"DescribeDBClusterBacktracks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBClusterBacktracksMessage"},
      "output":{
        "shape":"DBClusterBacktrackMessage",
        "resultWrapper":"DescribeDBClusterBacktracksResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"DBClusterBacktrackNotFoundFault"}
      ],
      "documentation":"<p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DescribeDBClusterParameterGroups":{
      "name":"DescribeDBClusterParameterGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBClusterParameterGroupsMessage"},
      "output":{
        "shape":"DBClusterParameterGroupsMessage",
        "resultWrapper":"DescribeDBClusterParameterGroupsResult"
      },
      "errors":[
        {"shape":"DBParameterGroupNotFoundFault"}
      ],
      "documentation":"<p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group. </p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DescribeDBClusterParameters":{
      "name":"DescribeDBClusterParameters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBClusterParametersMessage"},
      "output":{
        "shape":"DBClusterParameterGroupDetails",
        "resultWrapper":"DescribeDBClusterParametersResult"
      },
      "errors":[
        {"shape":"DBParameterGroupNotFoundFault"}
      ],
      "documentation":"<p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DescribeDBClusterSnapshotAttributes":{
      "name":"DescribeDBClusterSnapshotAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBClusterSnapshotAttributesMessage"},
      "output":{
        "shape":"DescribeDBClusterSnapshotAttributesResult",
        "resultWrapper":"DescribeDBClusterSnapshotAttributesResult"
      },
      "errors":[
        {"shape":"DBClusterSnapshotNotFoundFault"}
      ],
      "documentation":"<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other AWS accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts.</p> <p>To add or remove access for an AWS account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>"
    },
    "DescribeDBClusterSnapshots":{
      "name":"DescribeDBClusterSnapshots",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBClusterSnapshotsMessage"},
      "output":{
        "shape":"DBClusterSnapshotMessage",
        "resultWrapper":"DescribeDBClusterSnapshotsResult"
      },
      "errors":[
        {"shape":"DBClusterSnapshotNotFoundFault"}
      ],
      "documentation":"<p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DescribeDBClusters":{
      "name":"DescribeDBClusters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBClustersMessage"},
      "output":{
        "shape":"DBClusterMessage",
        "resultWrapper":"DescribeDBClustersResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"}
      ],
      "documentation":"<p>Returns information about provisioned Aurora DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DescribeDBEngineVersions":{
      "name":"DescribeDBEngineVersions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBEngineVersionsMessage"},
      "output":{
        "shape":"DBEngineVersionMessage",
        "resultWrapper":"DescribeDBEngineVersionsResult"
      },
      "documentation":"<p>Returns a list of the available DB engines.</p>"
    },
    "DescribeDBInstances":{
      "name":"DescribeDBInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBInstancesMessage"},
      "output":{
        "shape":"DBInstanceMessage",
        "resultWrapper":"DescribeDBInstancesResult"
      },
      "errors":[
        {"shape":"DBInstanceNotFoundFault"}
      ],
      "documentation":"<p>Returns information about provisioned RDS instances. This API supports pagination.</p>"
    },
    "DescribeDBLogFiles":{
      "name":"DescribeDBLogFiles",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBLogFilesMessage"},
      "output":{
        "shape":"DescribeDBLogFilesResponse",
        "resultWrapper":"DescribeDBLogFilesResult"
      },
      "errors":[
        {"shape":"DBInstanceNotFoundFault"}
      ],
      "documentation":"<p>Returns a list of DB log files for the DB instance.</p>"
    },
    "DescribeDBParameterGroups":{
      "name":"DescribeDBParameterGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBParameterGroupsMessage"},
      "output":{
        "shape":"DBParameterGroupsMessage",
        "resultWrapper":"DescribeDBParameterGroupsResult"
      },
      "errors":[
        {"shape":"DBParameterGroupNotFoundFault"}
      ],
      "documentation":"<p> Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group. </p>"
    },
    "DescribeDBParameters":{
      "name":"DescribeDBParameters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBParametersMessage"},
      "output":{
        "shape":"DBParameterGroupDetails",
        "resultWrapper":"DescribeDBParametersResult"
      },
      "errors":[
        {"shape":"DBParameterGroupNotFoundFault"}
      ],
      "documentation":"<p>Returns the detailed parameter list for a particular DB parameter group.</p>"
    },
    "DescribeDBSecurityGroups":{
      "name":"DescribeDBSecurityGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBSecurityGroupsMessage"},
      "output":{
        "shape":"DBSecurityGroupMessage",
        "resultWrapper":"DescribeDBSecurityGroupsResult"
      },
      "errors":[
        {"shape":"DBSecurityGroupNotFoundFault"}
      ],
      "documentation":"<p> Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group. </p>"
    },
    "DescribeDBSnapshotAttributes":{
      "name":"DescribeDBSnapshotAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBSnapshotAttributesMessage"},
      "output":{
        "shape":"DescribeDBSnapshotAttributesResult",
        "resultWrapper":"DescribeDBSnapshotAttributesResult"
      },
      "errors":[
        {"shape":"DBSnapshotNotFoundFault"}
      ],
      "documentation":"<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other AWS accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all AWS accounts.</p> <p>To add or remove access for an AWS account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <a>ModifyDBSnapshotAttribute</a> API action.</p>"
    },
    "DescribeDBSnapshots":{
      "name":"DescribeDBSnapshots",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBSnapshotsMessage"},
      "output":{
        "shape":"DBSnapshotMessage",
        "resultWrapper":"DescribeDBSnapshotsResult"
      },
      "errors":[
        {"shape":"DBSnapshotNotFoundFault"}
      ],
      "documentation":"<p>Returns information about DB snapshots. This API action supports pagination.</p>"
    },
    "DescribeDBSubnetGroups":{
      "name":"DescribeDBSubnetGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDBSubnetGroupsMessage"},
      "output":{
        "shape":"DBSubnetGroupMessage",
        "resultWrapper":"DescribeDBSubnetGroupsResult"
      },
      "errors":[
        {"shape":"DBSubnetGroupNotFoundFault"}
      ],
      "documentation":"<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href=\"http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing\">Wikipedia Tutorial</a>. </p>"
    },
    "DescribeEngineDefaultClusterParameters":{
      "name":"DescribeEngineDefaultClusterParameters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEngineDefaultClusterParametersMessage"},
      "output":{
        "shape":"DescribeEngineDefaultClusterParametersResult",
        "resultWrapper":"DescribeEngineDefaultClusterParametersResult"
      },
      "documentation":"<p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "DescribeEngineDefaultParameters":{
      "name":"DescribeEngineDefaultParameters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEngineDefaultParametersMessage"},
      "output":{
        "shape":"DescribeEngineDefaultParametersResult",
        "resultWrapper":"DescribeEngineDefaultParametersResult"
      },
      "documentation":"<p>Returns the default engine and system parameter information for the specified database engine.</p>"
    },
    "DescribeEventCategories":{
      "name":"DescribeEventCategories",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventCategoriesMessage"},
      "output":{
        "shape":"EventCategoriesMessage",
        "resultWrapper":"DescribeEventCategoriesResult"
      },
      "documentation":"<p>Displays a list of categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in the <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html\"> Events</a> topic in the <i>Amazon RDS User Guide.</i> </p>"
    },
    "DescribeEventSubscriptions":{
      "name":"DescribeEventSubscriptions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventSubscriptionsMessage"},
      "output":{
        "shape":"EventSubscriptionsMessage",
        "resultWrapper":"DescribeEventSubscriptionsResult"
      },
      "errors":[
        {"shape":"SubscriptionNotFoundFault"}
      ],
      "documentation":"<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>"
    },
    "DescribeEvents":{
      "name":"DescribeEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventsMessage"},
      "output":{
        "shape":"EventsMessage",
        "resultWrapper":"DescribeEventsResult"
      },
      "documentation":"<p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.</p>"
    },
    "DescribeOptionGroupOptions":{
      "name":"DescribeOptionGroupOptions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeOptionGroupOptionsMessage"},
      "output":{
        "shape":"OptionGroupOptionsMessage",
        "resultWrapper":"DescribeOptionGroupOptionsResult"
      },
      "documentation":"<p>Describes all available options.</p>"
    },
    "DescribeOptionGroups":{
      "name":"DescribeOptionGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeOptionGroupsMessage"},
      "output":{
        "shape":"OptionGroups",
        "resultWrapper":"DescribeOptionGroupsResult"
      },
      "errors":[
        {"shape":"OptionGroupNotFoundFault"}
      ],
      "documentation":"<p>Describes the available option groups.</p>"
    },
    "DescribeOrderableDBInstanceOptions":{
      "name":"DescribeOrderableDBInstanceOptions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeOrderableDBInstanceOptionsMessage"},
      "output":{
        "shape":"OrderableDBInstanceOptionsMessage",
        "resultWrapper":"DescribeOrderableDBInstanceOptionsResult"
      },
      "documentation":"<p>Returns a list of orderable DB instance options for the specified engine.</p>"
    },
    "DescribePendingMaintenanceActions":{
      "name":"DescribePendingMaintenanceActions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribePendingMaintenanceActionsMessage"},
      "output":{
        "shape":"PendingMaintenanceActionsMessage",
        "resultWrapper":"DescribePendingMaintenanceActionsResult"
      },
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.</p>"
    },
    "DescribeReservedDBInstances":{
      "name":"DescribeReservedDBInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeReservedDBInstancesMessage"},
      "output":{
        "shape":"ReservedDBInstanceMessage",
        "resultWrapper":"DescribeReservedDBInstancesResult"
      },
      "errors":[
        {"shape":"ReservedDBInstanceNotFoundFault"}
      ],
      "documentation":"<p>Returns information about reserved DB instances for this account, or about a specified reserved DB instance.</p>"
    },
    "DescribeReservedDBInstancesOfferings":{
      "name":"DescribeReservedDBInstancesOfferings",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeReservedDBInstancesOfferingsMessage"},
      "output":{
        "shape":"ReservedDBInstancesOfferingMessage",
        "resultWrapper":"DescribeReservedDBInstancesOfferingsResult"
      },
      "errors":[
        {"shape":"ReservedDBInstancesOfferingNotFoundFault"}
      ],
      "documentation":"<p>Lists available reserved DB instance offerings.</p>"
    },
    "DescribeSourceRegions":{
      "name":"DescribeSourceRegions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSourceRegionsMessage"},
      "output":{
        "shape":"SourceRegionMessage",
        "resultWrapper":"DescribeSourceRegionsResult"
      },
      "documentation":"<p>Returns a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from. This API action supports pagination.</p>"
    },
    "DescribeValidDBInstanceModifications":{
      "name":"DescribeValidDBInstanceModifications",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeValidDBInstanceModificationsMessage"},
      "output":{
        "shape":"DescribeValidDBInstanceModificationsResult",
        "resultWrapper":"DescribeValidDBInstanceModificationsResult"
      },
      "errors":[
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"InvalidDBInstanceStateFault"}
      ],
      "documentation":"<p>You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>. </p>"
    },
    "DownloadDBLogFilePortion":{
      "name":"DownloadDBLogFilePortion",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DownloadDBLogFilePortionMessage"},
      "output":{
        "shape":"DownloadDBLogFilePortionDetails",
        "resultWrapper":"DownloadDBLogFilePortionResult"
      },
      "errors":[
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"DBLogFileNotFoundFault"}
      ],
      "documentation":"<p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>"
    },
    "FailoverDBCluster":{
      "name":"FailoverDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"FailoverDBClusterMessage"},
      "output":{
        "shape":"FailoverDBClusterResult",
        "resultWrapper":"FailoverDBClusterResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBInstanceStateFault"}
      ],
      "documentation":"<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "ListTagsForResource":{
      "name":"ListTagsForResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagsForResourceMessage"},
      "output":{
        "shape":"TagListMessage",
        "resultWrapper":"ListTagsForResourceResult"
      },
      "errors":[
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"DBSnapshotNotFoundFault"},
        {"shape":"DBClusterNotFoundFault"}
      ],
      "documentation":"<p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>"
    },
    "ModifyCurrentDBClusterCapacity":{
      "name":"ModifyCurrentDBClusterCapacity",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyCurrentDBClusterCapacityMessage"},
      "output":{
        "shape":"DBClusterCapacityInfo",
        "resultWrapper":"ModifyCurrentDBClusterCapacityResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBClusterCapacityFault"}
      ],
      "documentation":"<p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p> <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html\">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling\"> Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> </important>"
    },
    "ModifyDBCluster":{
      "name":"ModifyDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyDBClusterMessage"},
      "output":{
        "shape":"ModifyDBClusterResult",
        "resultWrapper":"ModifyDBClusterResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"InvalidDBSubnetGroupStateFault"},
        {"shape":"InvalidSubnet"},
        {"shape":"DBClusterParameterGroupNotFoundFault"},
        {"shape":"InvalidDBSecurityGroupStateFault"},
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"DBClusterAlreadyExistsFault"}
      ],
      "documentation":"<p>Modify a setting for an Amazon Aurora DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "ModifyDBClusterParameterGroup":{
      "name":"ModifyDBClusterParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyDBClusterParameterGroupMessage"},
      "output":{
        "shape":"DBClusterParameterGroupNameMessage",
        "resultWrapper":"ModifyDBClusterParameterGroupResult"
      },
      "errors":[
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"InvalidDBParameterGroupStateFault"}
      ],
      "documentation":"<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon RDS console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>"
    },
    "ModifyDBClusterSnapshotAttribute":{
      "name":"ModifyDBClusterSnapshotAttribute",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyDBClusterSnapshotAttributeMessage"},
      "output":{
        "shape":"ModifyDBClusterSnapshotAttributeResult",
        "resultWrapper":"ModifyDBClusterSnapshotAttributeResult"
      },
      "errors":[
        {"shape":"DBClusterSnapshotNotFoundFault"},
        {"shape":"InvalidDBClusterSnapshotStateFault"},
        {"shape":"SharedSnapshotQuotaExceededFault"}
      ],
      "documentation":"<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>"
    },
    "ModifyDBInstance":{
      "name":"ModifyDBInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyDBInstanceMessage"},
      "output":{
        "shape":"ModifyDBInstanceResult",
        "resultWrapper":"ModifyDBInstanceResult"
      },
      "errors":[
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"InvalidDBSecurityGroupStateFault"},
        {"shape":"DBInstanceAlreadyExistsFault"},
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"DBSecurityGroupNotFoundFault"},
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"InsufficientDBInstanceCapacityFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"ProvisionedIopsNotAvailableInAZFault"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"DBUpgradeDependencyFailureFault"},
        {"shape":"StorageTypeNotSupportedFault"},
        {"shape":"AuthorizationNotFoundFault"},
        {"shape":"CertificateNotFoundFault"},
        {"shape":"DomainNotFoundFault"},
        {"shape":"BackupPolicyNotFoundFault"}
      ],
      "documentation":"<p>Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>. </p>"
    },
    "ModifyDBParameterGroup":{
      "name":"ModifyDBParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyDBParameterGroupMessage"},
      "output":{
        "shape":"DBParameterGroupNameMessage",
        "resultWrapper":"ModifyDBParameterGroupResult"
      },
      "errors":[
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"InvalidDBParameterGroupStateFault"}
      ],
      "documentation":"<p> Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>"
    },
    "ModifyDBSnapshot":{
      "name":"ModifyDBSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyDBSnapshotMessage"},
      "output":{
        "shape":"ModifyDBSnapshotResult",
        "resultWrapper":"ModifyDBSnapshotResult"
      },
      "errors":[
        {"shape":"DBSnapshotNotFoundFault"}
      ],
      "documentation":"<p>Updates a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL and Oracle. </p>"
    },
    "ModifyDBSnapshotAttribute":{
      "name":"ModifyDBSnapshotAttribute",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyDBSnapshotAttributeMessage"},
      "output":{
        "shape":"ModifyDBSnapshotAttributeResult",
        "resultWrapper":"ModifyDBSnapshotAttributeResult"
      },
      "errors":[
        {"shape":"DBSnapshotNotFoundFault"},
        {"shape":"InvalidDBSnapshotStateFault"},
        {"shape":"SharedSnapshotQuotaExceededFault"}
      ],
      "documentation":"<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all AWS accounts. If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which AWS accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API action.</p>"
    },
    "ModifyDBSubnetGroup":{
      "name":"ModifyDBSubnetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyDBSubnetGroupMessage"},
      "output":{
        "shape":"ModifyDBSubnetGroupResult",
        "resultWrapper":"ModifyDBSubnetGroupResult"
      },
      "errors":[
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"DBSubnetQuotaExceededFault"},
        {"shape":"SubnetAlreadyInUse"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidSubnet"}
      ],
      "documentation":"<p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.</p>"
    },
    "ModifyEventSubscription":{
      "name":"ModifyEventSubscription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyEventSubscriptionMessage"},
      "output":{
        "shape":"ModifyEventSubscriptionResult",
        "resultWrapper":"ModifyEventSubscriptionResult"
      },
      "errors":[
        {"shape":"EventSubscriptionQuotaExceededFault"},
        {"shape":"SubscriptionNotFoundFault"},
        {"shape":"SNSInvalidTopicFault"},
        {"shape":"SNSNoAuthorizationFault"},
        {"shape":"SNSTopicArnNotFoundFault"},
        {"shape":"SubscriptionCategoryNotFoundFault"}
      ],
      "documentation":"<p>Modifies an existing RDS event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType in the <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html\">Events</a> topic in the <i>Amazon RDS User Guide</i> or by using the <b>DescribeEventCategories</b> action.</p>"
    },
    "ModifyOptionGroup":{
      "name":"ModifyOptionGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyOptionGroupMessage"},
      "output":{
        "shape":"ModifyOptionGroupResult",
        "resultWrapper":"ModifyOptionGroupResult"
      },
      "errors":[
        {"shape":"InvalidOptionGroupStateFault"},
        {"shape":"OptionGroupNotFoundFault"}
      ],
      "documentation":"<p>Modifies an existing option group.</p>"
    },
    "PromoteReadReplica":{
      "name":"PromoteReadReplica",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PromoteReadReplicaMessage"},
      "output":{
        "shape":"PromoteReadReplicaResult",
        "resultWrapper":"PromoteReadReplicaResult"
      },
      "errors":[
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"DBInstanceNotFoundFault"}
      ],
      "documentation":"<p>Promotes a Read Replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a Read Replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a Read Replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your Read Replica, configure the automated backup window so that daily backups do not interfere with Read Replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p> </li> </ul> </note>"
    },
    "PromoteReadReplicaDBCluster":{
      "name":"PromoteReadReplicaDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PromoteReadReplicaDBClusterMessage"},
      "output":{
        "shape":"PromoteReadReplicaDBClusterResult",
        "resultWrapper":"PromoteReadReplicaDBClusterResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"}
      ],
      "documentation":"<p>Promotes a Read Replica DB cluster to a standalone DB cluster.</p>"
    },
    "PurchaseReservedDBInstancesOffering":{
      "name":"PurchaseReservedDBInstancesOffering",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PurchaseReservedDBInstancesOfferingMessage"},
      "output":{
        "shape":"PurchaseReservedDBInstancesOfferingResult",
        "resultWrapper":"PurchaseReservedDBInstancesOfferingResult"
      },
      "errors":[
        {"shape":"ReservedDBInstancesOfferingNotFoundFault"},
        {"shape":"ReservedDBInstanceAlreadyExistsFault"},
        {"shape":"ReservedDBInstanceQuotaExceededFault"}
      ],
      "documentation":"<p>Purchases a reserved DB instance offering.</p>"
    },
    "RebootDBInstance":{
      "name":"RebootDBInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RebootDBInstanceMessage"},
      "output":{
        "shape":"RebootDBInstanceResult",
        "resultWrapper":"RebootDBInstanceResult"
      },
      "errors":[
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"DBInstanceNotFoundFault"}
      ],
      "documentation":"<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. </p> <p>For more information about rebooting, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html\">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>"
    },
    "RemoveRoleFromDBCluster":{
      "name":"RemoveRoleFromDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveRoleFromDBClusterMessage"},
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"DBClusterRoleNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"}
      ],
      "documentation":"<p>Disassociates an Identity and Access Management (IAM) role from an Aurora DB cluster. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html\">Authorizing Amazon Aurora MySQL to Access Other AWS Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p>"
    },
    "RemoveSourceIdentifierFromSubscription":{
      "name":"RemoveSourceIdentifierFromSubscription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveSourceIdentifierFromSubscriptionMessage"},
      "output":{
        "shape":"RemoveSourceIdentifierFromSubscriptionResult",
        "resultWrapper":"RemoveSourceIdentifierFromSubscriptionResult"
      },
      "errors":[
        {"shape":"SubscriptionNotFoundFault"},
        {"shape":"SourceNotFoundFault"}
      ],
      "documentation":"<p>Removes a source identifier from an existing RDS event notification subscription.</p>"
    },
    "RemoveTagsFromResource":{
      "name":"RemoveTagsFromResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveTagsFromResourceMessage"},
      "errors":[
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"DBSnapshotNotFoundFault"},
        {"shape":"DBClusterNotFoundFault"}
      ],
      "documentation":"<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>"
    },
    "ResetDBClusterParameterGroup":{
      "name":"ResetDBClusterParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ResetDBClusterParameterGroupMessage"},
      "output":{
        "shape":"DBClusterParameterGroupNameMessage",
        "resultWrapper":"ResetDBClusterParameterGroupResult"
      },
      "errors":[
        {"shape":"InvalidDBParameterGroupStateFault"},
        {"shape":"DBParameterGroupNotFoundFault"}
      ],
      "documentation":"<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "ResetDBParameterGroup":{
      "name":"ResetDBParameterGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ResetDBParameterGroupMessage"},
      "output":{
        "shape":"DBParameterGroupNameMessage",
        "resultWrapper":"ResetDBParameterGroupResult"
      },
      "errors":[
        {"shape":"InvalidDBParameterGroupStateFault"},
        {"shape":"DBParameterGroupNotFoundFault"}
      ],
      "documentation":"<p>Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. </p>"
    },
    "RestoreDBClusterFromS3":{
      "name":"RestoreDBClusterFromS3",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RestoreDBClusterFromS3Message"},
      "output":{
        "shape":"RestoreDBClusterFromS3Result",
        "resultWrapper":"RestoreDBClusterFromS3Result"
      },
      "errors":[
        {"shape":"DBClusterAlreadyExistsFault"},
        {"shape":"DBClusterQuotaExceededFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBSubnetGroupStateFault"},
        {"shape":"InvalidSubnet"},
        {"shape":"InvalidS3BucketFault"},
        {"shape":"DBClusterParameterGroupNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InsufficientStorageClusterCapacityFault"}
      ],
      "documentation":"<p>Creates an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.html\"> Migrating Data to an Amazon Aurora MySQL DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>"
    },
    "RestoreDBClusterFromSnapshot":{
      "name":"RestoreDBClusterFromSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RestoreDBClusterFromSnapshotMessage"},
      "output":{
        "shape":"RestoreDBClusterFromSnapshotResult",
        "resultWrapper":"RestoreDBClusterFromSnapshotResult"
      },
      "errors":[
        {"shape":"DBClusterAlreadyExistsFault"},
        {"shape":"DBClusterQuotaExceededFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"DBSnapshotNotFoundFault"},
        {"shape":"DBClusterSnapshotNotFoundFault"},
        {"shape":"InsufficientDBClusterCapacityFault"},
        {"shape":"InsufficientStorageClusterCapacityFault"},
        {"shape":"InvalidDBSnapshotStateFault"},
        {"shape":"InvalidDBClusterSnapshotStateFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"InvalidRestoreFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"InvalidSubnet"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"DBClusterParameterGroupNotFoundFault"}
      ],
      "documentation":"<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "RestoreDBClusterToPointInTime":{
      "name":"RestoreDBClusterToPointInTime",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RestoreDBClusterToPointInTimeMessage"},
      "output":{
        "shape":"RestoreDBClusterToPointInTimeResult",
        "resultWrapper":"RestoreDBClusterToPointInTimeResult"
      },
      "errors":[
        {"shape":"DBClusterAlreadyExistsFault"},
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"DBClusterQuotaExceededFault"},
        {"shape":"DBClusterSnapshotNotFoundFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"InsufficientDBClusterCapacityFault"},
        {"shape":"InsufficientStorageClusterCapacityFault"},
        {"shape":"InvalidDBClusterSnapshotStateFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBSnapshotStateFault"},
        {"shape":"InvalidRestoreFault"},
        {"shape":"InvalidSubnet"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"DBClusterParameterGroupNotFoundFault"}
      ],
      "documentation":"<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. </p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>"
    },
    "RestoreDBInstanceFromDBSnapshot":{
      "name":"RestoreDBInstanceFromDBSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RestoreDBInstanceFromDBSnapshotMessage"},
      "output":{
        "shape":"RestoreDBInstanceFromDBSnapshotResult",
        "resultWrapper":"RestoreDBInstanceFromDBSnapshotResult"
      },
      "errors":[
        {"shape":"DBInstanceAlreadyExistsFault"},
        {"shape":"DBSnapshotNotFoundFault"},
        {"shape":"InstanceQuotaExceededFault"},
        {"shape":"InsufficientDBInstanceCapacityFault"},
        {"shape":"InvalidDBSnapshotStateFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"InvalidRestoreFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidSubnet"},
        {"shape":"ProvisionedIopsNotAvailableInAZFault"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"StorageTypeNotSupportedFault"},
        {"shape":"AuthorizationNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"DBSecurityGroupNotFoundFault"},
        {"shape":"DomainNotFoundFault"},
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"BackupPolicyNotFoundFault"}
      ],
      "documentation":"<p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with the most of original configuration with the default security group and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored AZ deployment and not a single-AZ deployment.</p> <p>If your intent is to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. Once you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you will replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <a>RestoreDBClusterFromSnapshot</a>.</p> </note>"
    },
    "RestoreDBInstanceFromS3":{
      "name":"RestoreDBInstanceFromS3",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RestoreDBInstanceFromS3Message"},
      "output":{
        "shape":"RestoreDBInstanceFromS3Result",
        "resultWrapper":"RestoreDBInstanceFromS3Result"
      },
      "errors":[
        {"shape":"DBInstanceAlreadyExistsFault"},
        {"shape":"InsufficientDBInstanceCapacityFault"},
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"DBSecurityGroupNotFoundFault"},
        {"shape":"InstanceQuotaExceededFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidSubnet"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"InvalidS3BucketFault"},
        {"shape":"ProvisionedIopsNotAvailableInAZFault"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"StorageTypeNotSupportedFault"},
        {"shape":"AuthorizationNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"BackupPolicyNotFoundFault"}
      ],
      "documentation":"<p>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html\">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>"
    },
    "RestoreDBInstanceToPointInTime":{
      "name":"RestoreDBInstanceToPointInTime",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RestoreDBInstanceToPointInTimeMessage"},
      "output":{
        "shape":"RestoreDBInstanceToPointInTimeResult",
        "resultWrapper":"RestoreDBInstanceToPointInTimeResult"
      },
      "errors":[
        {"shape":"DBInstanceAlreadyExistsFault"},
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"InstanceQuotaExceededFault"},
        {"shape":"InsufficientDBInstanceCapacityFault"},
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"PointInTimeRestoreNotEnabledFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"InvalidRestoreFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidSubnet"},
        {"shape":"ProvisionedIopsNotAvailableInAZFault"},
        {"shape":"OptionGroupNotFoundFault"},
        {"shape":"StorageTypeNotSupportedFault"},
        {"shape":"AuthorizationNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"DBSecurityGroupNotFoundFault"},
        {"shape":"DomainNotFoundFault"},
        {"shape":"DBParameterGroupNotFoundFault"},
        {"shape":"BackupPolicyNotFoundFault"}
      ],
      "documentation":"<p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <a>RestoreDBClusterToPointInTime</a>.</p> </note>"
    },
    "RevokeDBSecurityGroupIngress":{
      "name":"RevokeDBSecurityGroupIngress",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RevokeDBSecurityGroupIngressMessage"},
      "output":{
        "shape":"RevokeDBSecurityGroupIngressResult",
        "resultWrapper":"RevokeDBSecurityGroupIngressResult"
      },
      "errors":[
        {"shape":"DBSecurityGroupNotFoundFault"},
        {"shape":"AuthorizationNotFoundFault"},
        {"shape":"InvalidDBSecurityGroupStateFault"}
      ],
      "documentation":"<p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p>"
    },
    "StartDBCluster":{
      "name":"StartDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartDBClusterMessage"},
      "output":{
        "shape":"StartDBClusterResult",
        "resultWrapper":"StartDBClusterResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBInstanceStateFault"}
      ],
      "documentation":"<p>Starts an Amazon Aurora DB cluster that was stopped using the AWS console, the stop-db-cluster AWS CLI command, or the StopDBCluster action.</p>"
    },
    "StartDBInstance":{
      "name":"StartDBInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartDBInstanceMessage"},
      "output":{
        "shape":"StartDBInstanceResult",
        "resultWrapper":"StartDBInstanceResult"
      },
      "errors":[
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"InsufficientDBInstanceCapacityFault"},
        {"shape":"DBSubnetGroupNotFoundFault"},
        {"shape":"DBSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidSubnet"},
        {"shape":"InvalidVPCNetworkStateFault"},
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"AuthorizationNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"}
      ],
      "documentation":"<p> Starts an Amazon RDS DB instance that was stopped using the AWS console, the stop-db-instance AWS CLI command, or the StopDBInstance action. </p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html\"> Starting an Amazon RDS DB Instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora DB clusters, use <a>StartDBCluster</a> instead. </p> </note>"
    },
    "StopDBCluster":{
      "name":"StopDBCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopDBClusterMessage"},
      "output":{
        "shape":"StopDBClusterResult",
        "resultWrapper":"StopDBClusterResult"
      },
      "errors":[
        {"shape":"DBClusterNotFoundFault"},
        {"shape":"InvalidDBClusterStateFault"},
        {"shape":"InvalidDBInstanceStateFault"}
      ],
      "documentation":"<p> Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. </p>"
    },
    "StopDBInstance":{
      "name":"StopDBInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopDBInstanceMessage"},
      "output":{
        "shape":"StopDBInstanceResult",
        "resultWrapper":"StopDBInstanceResult"
      },
      "errors":[
        {"shape":"DBInstanceNotFoundFault"},
        {"shape":"InvalidDBInstanceStateFault"},
        {"shape":"DBSnapshotAlreadyExistsFault"},
        {"shape":"SnapshotQuotaExceededFault"},
        {"shape":"InvalidDBClusterStateFault"}
      ],
      "documentation":"<p> Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html\"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora clusters, use <a>StopDBCluster</a> instead. </p> </note>"
    }
  },
  "shapes":{
    "AccountAttributesMessage":{
      "type":"structure",
      "members":{
        "AccountQuotas":{
          "shape":"AccountQuotaList",
          "documentation":"<p>A list of <a>AccountQuota</a> objects. Within this list, each quota has a name, a count of usage toward the quota maximum, and a maximum value for the quota.</p>"
        }
      },
      "documentation":"<p>Data returned by the <b>DescribeAccountAttributes</b> action.</p>"
    },
    "AccountQuota":{
      "type":"structure",
      "members":{
        "AccountQuotaName":{
          "shape":"String",
          "documentation":"<p>The name of the Amazon RDS quota for this AWS account.</p>"
        },
        "Used":{
          "shape":"Long",
          "documentation":"<p>The amount currently used toward the quota maximum.</p>"
        },
        "Max":{
          "shape":"Long",
          "documentation":"<p>The maximum allowed value for the quota.</p>"
        }
      },
      "documentation":"<p>Describes a quota for an AWS account, for example, the number of DB instances allowed.</p>",
      "wrapper":true
    },
    "AccountQuotaList":{
      "type":"list",
      "member":{
        "shape":"AccountQuota",
        "locationName":"AccountQuota"
      }
    },
    "AddRoleToDBClusterMessage":{
      "type":"structure",
      "required":[
        "DBClusterIdentifier",
        "RoleArn"
      ],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster to associate the IAM role with.</p>"
        },
        "RoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>"
        }
      }
    },
    "AddSourceIdentifierToSubscriptionMessage":{
      "type":"structure",
      "required":[
        "SubscriptionName",
        "SourceIdentifier"
      ],
      "members":{
        "SubscriptionName":{
          "shape":"String",
          "documentation":"<p>The name of the RDS event notification subscription you want to add a source identifier to.</p>"
        },
        "SourceIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the event source to be added.</p> <p>Constraints:</p> <ul> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "AddSourceIdentifierToSubscriptionResult":{
      "type":"structure",
      "members":{
        "EventSubscription":{"shape":"EventSubscription"}
      }
    },
    "AddTagsToResourceMessage":{
      "type":"structure",
      "required":[
        "ResourceName",
        "Tags"
      ],
      "members":{
        "ResourceName":{
          "shape":"String",
          "documentation":"<p>The Amazon RDS resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing\"> Constructing an RDS Amazon Resource Name (ARN)</a>.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags to be assigned to the Amazon RDS resource.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ApplyMethod":{
      "type":"string",
      "enum":[
        "immediate",
        "pending-reboot"
      ]
    },
    "ApplyPendingMaintenanceActionMessage":{
      "type":"structure",
      "required":[
        "ResourceIdentifier",
        "ApplyAction",
        "OptInType"
      ],
      "members":{
        "ResourceIdentifier":{
          "shape":"String",
          "documentation":"<p>The RDS Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing\"> Constructing an RDS Amazon Resource Name (ARN)</a>.</p>"
        },
        "ApplyAction":{
          "shape":"String",
          "documentation":"<p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code> </p>"
        },
        "OptInType":{
          "shape":"String",
          "documentation":"<p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource.</p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "ApplyPendingMaintenanceActionResult":{
      "type":"structure",
      "members":{
        "ResourcePendingMaintenanceActions":{"shape":"ResourcePendingMaintenanceActions"}
      }
    },
    "AttributeValueList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"AttributeValue"
      }
    },
    "AuthorizationAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified CIDRIP or Amazon EC2 security group is already authorized for the specified DB security group.</p>",
      "error":{
        "code":"AuthorizationAlreadyExists",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "AuthorizationNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>",
      "error":{
        "code":"AuthorizationNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "AuthorizationQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB security group authorization quota has been reached.</p>",
      "error":{
        "code":"AuthorizationQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "AuthorizeDBSecurityGroupIngressMessage":{
      "type":"structure",
      "required":["DBSecurityGroupName"],
      "members":{
        "DBSecurityGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB security group to add authorization to.</p>"
        },
        "CIDRIP":{
          "shape":"String",
          "documentation":"<p>The IP range to authorize.</p>"
        },
        "EC2SecurityGroupName":{
          "shape":"String",
          "documentation":"<p> Name of the EC2 security group to authorize. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>"
        },
        "EC2SecurityGroupId":{
          "shape":"String",
          "documentation":"<p> Id of the EC2 security group to authorize. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>"
        },
        "EC2SecurityGroupOwnerId":{
          "shape":"String",
          "documentation":"<p> AWS account number of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> parameter. The AWS Access Key ID is not an acceptable value. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "AuthorizeDBSecurityGroupIngressResult":{
      "type":"structure",
      "members":{
        "DBSecurityGroup":{"shape":"DBSecurityGroup"}
      }
    },
    "AvailabilityZone":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the Availability Zone.</p>"
        }
      },
      "documentation":"<p>Contains Availability Zone information.</p> <p> This data type is used as an element in the following data type:</p> <ul> <li> <p> <a>OrderableDBInstanceOption</a> </p> </li> </ul>",
      "wrapper":true
    },
    "AvailabilityZoneList":{
      "type":"list",
      "member":{
        "shape":"AvailabilityZone",
        "locationName":"AvailabilityZone"
      }
    },
    "AvailabilityZones":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"AvailabilityZone"
      }
    },
    "AvailableProcessorFeature":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the processor feature. Valid names are <code>coreCount</code> and <code>threadsPerCore</code>.</p>"
        },
        "DefaultValue":{
          "shape":"String",
          "documentation":"<p>The default value for the processor feature of the DB instance class.</p>"
        },
        "AllowedValues":{
          "shape":"String",
          "documentation":"<p>The allowed values for the processor feature of the DB instance class.</p>"
        }
      },
      "documentation":"<p>Contains the available processor feature information for the DB instance class of a DB instance.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor\">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p>"
    },
    "AvailableProcessorFeatureList":{
      "type":"list",
      "member":{
        "shape":"AvailableProcessorFeature",
        "locationName":"AvailableProcessorFeature"
      }
    },
    "BacktrackDBClusterMessage":{
      "type":"structure",
      "required":[
        "DBClusterIdentifier",
        "BacktrackTo"
      ],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier of the DB cluster to be backtracked. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>"
        },
        "BacktrackTo":{
          "shape":"TStamp",
          "documentation":"<p>The timestamp of the time to backtrack the DB cluster to, specified in ISO 8601 format. For more information about ISO 8601, see the <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO8601 Wikipedia page.</a> </p> <note> <p>If the specified time is not a consistent time for the DB cluster, Aurora automatically chooses the nearest possible consistent time for the DB cluster.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must contain a valid ISO 8601 timestamp.</p> </li> <li> <p>Cannot contain a timestamp set in the future.</p> </li> </ul> <p>Example: <code>2017-07-08T18:00Z</code> </p>"
        },
        "Force":{
          "shape":"BooleanOptional",
          "documentation":"<p>A value that, if specified, forces the DB cluster to backtrack when binary logging is enabled. Otherwise, an error occurs when binary logging is enabled.</p>"
        },
        "UseEarliestTimeOnPointInTimeUnavailable":{
          "shape":"BooleanOptional",
          "documentation":"<p>If <i>BacktrackTo</i> is set to a timestamp earlier than the earliest backtrack time, this value backtracks the DB cluster to the earliest possible backtrack time. Otherwise, an error occurs.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "BackupPolicyNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "error":{
        "code":"BackupPolicyNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "Boolean":{"type":"boolean"},
    "BooleanOptional":{"type":"boolean"},
    "Certificate":{
      "type":"structure",
      "members":{
        "CertificateIdentifier":{
          "shape":"String",
          "documentation":"<p>The unique key that identifies a certificate.</p>"
        },
        "CertificateType":{
          "shape":"String",
          "documentation":"<p>The type of the certificate.</p>"
        },
        "Thumbprint":{
          "shape":"String",
          "documentation":"<p>The thumbprint of the certificate.</p>"
        },
        "ValidFrom":{
          "shape":"TStamp",
          "documentation":"<p>The starting date from which the certificate is valid.</p>"
        },
        "ValidTill":{
          "shape":"TStamp",
          "documentation":"<p>The final date that the certificate continues to be valid.</p>"
        },
        "CertificateArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the certificate.</p>"
        }
      },
      "documentation":"<p>A CA certificate for an AWS account.</p>",
      "wrapper":true
    },
    "CertificateList":{
      "type":"list",
      "member":{
        "shape":"Certificate",
        "locationName":"Certificate"
      }
    },
    "CertificateMessage":{
      "type":"structure",
      "members":{
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>The list of <a>Certificate</a> objects for the AWS account.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <a>DescribeCertificates</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>"
        }
      },
      "documentation":"<p>Data returned by the <b>DescribeCertificates</b> action.</p>"
    },
    "CertificateNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>CertificateIdentifier</i> doesn't refer to an existing certificate. </p>",
      "error":{
        "code":"CertificateNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "CharacterSet":{
      "type":"structure",
      "members":{
        "CharacterSetName":{
          "shape":"String",
          "documentation":"<p>The name of the character set.</p>"
        },
        "CharacterSetDescription":{
          "shape":"String",
          "documentation":"<p>The description of the character set.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>. </p>"
    },
    "CloudwatchLogsExportConfiguration":{
      "type":"structure",
      "members":{
        "EnableLogTypes":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of log types to enable.</p>"
        },
        "DisableLogTypes":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of log types to disable.</p>"
        }
      },
      "documentation":"<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>"
    },
    "CopyDBClusterParameterGroupMessage":{
      "type":"structure",
      "required":[
        "SourceDBClusterParameterGroupIdentifier",
        "TargetDBClusterParameterGroupIdentifier",
        "TargetDBClusterParameterGroupDescription"
      ],
      "members":{
        "SourceDBClusterParameterGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing\"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon Aurora User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB cluster parameter group.</p> </li> <li> <p>If the source DB cluster parameter group is in the same AWS Region as the copy, specify a valid DB parameter group identifier, for example <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source DB parameter group is in a different AWS Region than the copy, specify a valid DB cluster parameter group ARN, for example <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p> </li> </ul>"
        },
        "TargetDBClusterParameterGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the copied DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>"
        },
        "TargetDBClusterParameterGroupDescription":{
          "shape":"String",
          "documentation":"<p>A description for the copied DB cluster parameter group.</p>"
        },
        "Tags":{"shape":"TagList"}
      }
    },
    "CopyDBClusterParameterGroupResult":{
      "type":"structure",
      "members":{
        "DBClusterParameterGroup":{"shape":"DBClusterParameterGroup"}
      }
    },
    "CopyDBClusterSnapshotMessage":{
      "type":"structure",
      "required":[
        "SourceDBClusterSnapshotIdentifier",
        "TargetDBClusterSnapshotIdentifier"
      ],
      "members":{
        "SourceDBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive.</p> <p>You can't copy an encrypted, shared DB cluster snapshot from one AWS Region to another.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the \"available\" state.</p> </li> <li> <p>If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier.</p> </li> <li> <p>If the source snapshot is in a different AWS Region than the copy, specify a valid DB cluster snapshot ARN. For more information, go to <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html#USER_CopySnapshot.AcrossRegions\"> Copying Snapshots Across AWS Regions</a> in the <i>Amazon Aurora User Guide.</i> </p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>"
        },
        "TargetDBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS AWS KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot. </p> <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for <code>KmsKeyId</code>. </p> <p>To copy an encrypted DB cluster snapshot to another AWS Region, you must set <code>KmsKeyId</code> to the KMS key ID you want to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region.</p> <p>If you copy an unencrypted DB cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>"
        },
        "PreSignedUrl":{
          "shape":"String",
          "documentation":"<p>The URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> API action in the AWS Region that contains the source DB cluster snapshot to copy. The <code>PreSignedUrl</code> parameter must be used when copying an encrypted DB cluster snapshot from another AWS Region.</p> <p>The pre-signed URL must be a valid request for the <code>CopyDBSClusterSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied. The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot will be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\"> Signature Version 4 Signing Process</a>.</p>"
        },
        "CopyTags":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.</p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CopyDBClusterSnapshotResult":{
      "type":"structure",
      "members":{
        "DBClusterSnapshot":{"shape":"DBClusterSnapshot"}
      }
    },
    "CopyDBParameterGroupMessage":{
      "type":"structure",
      "required":[
        "SourceDBParameterGroupIdentifier",
        "TargetDBParameterGroupIdentifier",
        "TargetDBParameterGroupDescription"
      ],
      "members":{
        "SourceDBParameterGroupIdentifier":{
          "shape":"String",
          "documentation":"<p> The identifier or ARN for the source DB parameter group. For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing\"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB parameter group.</p> </li> <li> <p>Must specify a valid DB parameter group identifier, for example <code>my-db-param-group</code>, or a valid ARN.</p> </li> </ul>"
        },
        "TargetDBParameterGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the copied DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-db-parameter-group</code> </p>"
        },
        "TargetDBParameterGroupDescription":{
          "shape":"String",
          "documentation":"<p>A description for the copied DB parameter group.</p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CopyDBParameterGroupResult":{
      "type":"structure",
      "members":{
        "DBParameterGroup":{"shape":"DBParameterGroup"}
      }
    },
    "CopyDBSnapshotMessage":{
      "type":"structure",
      "required":[
        "SourceDBSnapshotIdentifier",
        "TargetDBSnapshotIdentifier"
      ],
      "members":{
        "SourceDBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the source DB snapshot.</p> <p>If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier. For example, you might specify <code>rds:mysql-instance1-snapshot-20130805</code>. </p> <p>If the source snapshot is in a different AWS Region than the copy, specify a valid DB snapshot ARN. For example, you might specify <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code>. </p> <p>If you are copying from a shared manual DB snapshot, this parameter must be the Amazon Resource Name (ARN) of the shared DB snapshot. </p> <p>If you are copying an encrypted snapshot this parameter must be in the ARN format for the source AWS Region, and must match the <code>SourceDBSnapshotIdentifier</code> in the <code>PreSignedUrl</code> parameter. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the \"available\" state.</p> </li> </ul> <p>Example: <code>rds:mydb-2012-04-02-00-01</code> </p> <p>Example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code> </p>"
        },
        "TargetDBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the copy of the snapshot. </p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-db-snapshot</code> </p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key ID for an encrypted DB snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an encrypted DB snapshot from your AWS account, you can specify a value for this parameter to encrypt the copy with a new KMS encryption key. If you don't specify a value for this parameter, then the copy of the DB snapshot is encrypted with the same KMS key as the source DB snapshot. </p> <p>If you copy an encrypted DB snapshot that is shared from another AWS account, then you must specify a value for this parameter. </p> <p>If you specify this parameter when you copy an unencrypted snapshot, the copy is encrypted. </p> <p>If you copy an encrypted snapshot to a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region. </p>"
        },
        "Tags":{"shape":"TagList"},
        "CopyTags":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to copy all tags from the source DB snapshot to the target DB snapshot, and otherwise false. The default is false.</p>"
        },
        "PreSignedUrl":{
          "shape":"String",
          "documentation":"<p>The URL that contains a Signature Version 4 signed request for the <code>CopyDBSnapshot</code> API action in the source AWS Region that contains the source DB snapshot to copy. </p> <p>You must specify this parameter when you copy an encrypted DB snapshot from another AWS Region by using the Amazon RDS API. You can specify the <code>--source-region</code> option instead of this parameter when you copy an encrypted DB snapshot from another AWS Region by using the AWS CLI. </p> <p>The presigned URL must be a valid request for the <code>CopyDBSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB snapshot to be copied. The presigned URL request must contain the following parameter values: </p> <ul> <li> <p> <code>DestinationRegion</code> - The AWS Region that the encrypted DB snapshot is copied to. This AWS Region is the same one where the <code>CopyDBSnapshot</code> action is called that contains this presigned URL. </p> <p>For example, if you copy an encrypted DB snapshot from the us-west-2 AWS Region to the us-east-1 AWS Region, then you call the <code>CopyDBSnapshot</code> action in the us-east-1 AWS Region and provide a presigned URL that contains a call to the <code>CopyDBSnapshot</code> action in the us-west-2 AWS Region. For this example, the <code>DestinationRegion</code> in the presigned URL must be set to the us-east-1 AWS Region. </p> </li> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBSnapshot</code> action that is called in the destination AWS Region, and the action contained in the presigned URL. </p> </li> <li> <p> <code>SourceDBSnapshotIdentifier</code> - The DB snapshot identifier for the encrypted snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB snapshot from the us-west-2 AWS Region, then your <code>SourceDBSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20161115</code>. </p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\">Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\">Signature Version 4 Signing Process</a>. </p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of an option group to associate with the copy of the snapshot.</p> <p>Specify this option if you are copying a snapshot from one AWS Region to another, and your DB instance uses a nondefault option group. If your source DB instance uses Transparent Data Encryption for Oracle or Microsoft SQL Server, you must specify this option when copying across AWS Regions. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.Options\">Option Group Considerations</a> in the <i>Amazon RDS User Guide.</i> </p>"
        }
      },
      "documentation":"<p/>"
    },
    "CopyDBSnapshotResult":{
      "type":"structure",
      "members":{
        "DBSnapshot":{"shape":"DBSnapshot"}
      }
    },
    "CopyOptionGroupMessage":{
      "type":"structure",
      "required":[
        "SourceOptionGroupIdentifier",
        "TargetOptionGroupIdentifier",
        "TargetOptionGroupDescription"
      ],
      "members":{
        "SourceOptionGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier or ARN for the source option group. For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing\"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid option group.</p> </li> <li> <p>If the source option group is in the same AWS Region as the copy, specify a valid option group identifier, for example <code>my-option-group</code>, or a valid ARN.</p> </li> <li> <p>If the source option group is in a different AWS Region than the copy, specify a valid option group ARN, for example <code>arn:aws:rds:us-west-2:123456789012:og:special-options</code>.</p> </li> </ul>"
        },
        "TargetOptionGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the copied option group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-option-group</code> </p>"
        },
        "TargetOptionGroupDescription":{
          "shape":"String",
          "documentation":"<p>The description for the copied option group.</p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CopyOptionGroupResult":{
      "type":"structure",
      "members":{
        "OptionGroup":{"shape":"OptionGroup"}
      }
    },
    "CreateDBClusterMessage":{
      "type":"structure",
      "required":[
        "DBClusterIdentifier",
        "Engine"
      ],
      "members":{
        "AvailabilityZones":{
          "shape":"AvailabilityZones",
          "documentation":"<p>A list of EC2 Availability Zones that instances in the DB cluster can be created in. For information on AWS Regions and Availability Zones, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html\">Choosing the Regions and Availability Zones</a> in the <i>Amazon Aurora User Guide</i>. </p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>"
        },
        "CharacterSetName":{
          "shape":"String",
          "documentation":"<p>A value that indicates that the DB cluster should be associated with the specified CharacterSet.</p>"
        },
        "DatabaseName":{
          "shape":"String",
          "documentation":"<p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon RDS will not create a database in the DB cluster you are creating.</p>"
        },
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>"
        },
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p> The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, <code>default.aurora5.6</code> is used. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of EC2 VPC security groups to associate with this DB cluster.</p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>aurora</code> (for MySQL 5.6-compatible Aurora), <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), and <code>aurora-postgresql</code> </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine to use.</p> <p> <b>Aurora MySQL</b> </p> <p>Example: <code>5.6.10a</code>, <code>5.7.12</code> </p> <p> <b>Aurora PostgreSQL</b> </p> <p>Example: <code>9.6.3</code> </p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>3306</code> if engine is set as aurora or <code>5432</code> if set to aurora-postgresql. </p>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>The name of the master user for the DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>The password for the master database user. This password can contain any printable ASCII character except \"/\", \"\"\", or \"@\".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>A value that indicates that the DB cluster should be associated with the specified option group.</p> <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora\"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora\"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>"
        },
        "ReplicationSourceIdentifier":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.</p>"
        },
        "Tags":{"shape":"TagList"},
        "StorageEncrypted":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies whether the DB cluster is encrypted.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon RDS will use the encryption key used to encrypt the source. Otherwise, Amazon RDS will use your default encryption key. </p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is true and <code>ReplicationSourceIdentifier</code> is not specified, then Amazon RDS will use your default encryption key.</p> </li> </ul> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p> <p>If you create a Read Replica of an encrypted DB cluster in another AWS Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This key is used to encrypt the Read Replica in that AWS Region.</p>"
        },
        "PreSignedUrl":{
          "shape":"String",
          "documentation":"<p>A URL that contains a Signature Version 4 signed request for the <code>CreateDBCluster</code> action to be called in the source AWS Region where the DB cluster is replicated from. You only need to specify <code>PreSignedUrl</code> when you are performing cross-region replication from an encrypted DB cluster.</p> <p>The pre-signed URL must be a valid request for the <code>CreateDBCluster</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster in the destination AWS Region. This should refer to the same KMS key for both the <code>CreateDBCluster</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that Aurora Read Replica will be created in.</p> </li> <li> <p> <code>ReplicationSourceIdentifier</code> - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster from the us-west-2 AWS Region, then your <code>ReplicationSourceIdentifier</code> would look like Example: <code>arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\"> Signature Version 4 Signing Process</a>.</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>"
        },
        "BacktrackWindow":{
          "shape":"LongOptional",
          "documentation":"<p>The target backtrack window, in seconds. To disable backtracking, set this value to 0. </p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>"
        },
        "EngineMode":{
          "shape":"String",
          "documentation":"<p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>, or <code>parallelquery</code>.</p>"
        },
        "ScalingConfiguration":{
          "shape":"ScalingConfiguration",
          "documentation":"<p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateDBClusterParameterGroupMessage":{
      "type":"structure",
      "required":[
        "DBClusterParameterGroupName",
        "DBParameterGroupFamily",
        "Description"
      ],
      "members":{
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBClusterParameterGroup.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>"
        },
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.</p> <p> <b>Aurora MySQL</b> </p> <p>Example: <code>aurora5.6</code>, <code>aurora-mysql5.7</code> </p> <p> <b>Aurora PostgreSQL</b> </p> <p>Example: <code>aurora-postgresql9.6</code> </p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The description for the DB cluster parameter group.</p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CreateDBClusterParameterGroupResult":{
      "type":"structure",
      "members":{
        "DBClusterParameterGroup":{"shape":"DBClusterParameterGroup"}
      }
    },
    "CreateDBClusterResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "CreateDBClusterSnapshotMessage":{
      "type":"structure",
      "required":[
        "DBClusterSnapshotIdentifier",
        "DBClusterIdentifier"
      ],
      "members":{
        "DBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1-snapshot1</code> </p>"
        },
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags to be assigned to the DB cluster snapshot.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateDBClusterSnapshotResult":{
      "type":"structure",
      "members":{
        "DBClusterSnapshot":{"shape":"DBClusterSnapshot"}
      }
    },
    "CreateDBInstanceMessage":{
      "type":"structure",
      "required":[
        "DBInstanceIdentifier",
        "DBInstanceClass",
        "Engine"
      ],
      "members":{
        "DBName":{
          "shape":"String",
          "documentation":"<p>The meaning of this parameter differs according to the database engine you use.</p> <p>Type: String</p> <p> <b>MySQL</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Cannot be a word reserved by the specified database engine</p> </li> </ul> <p> <b>MariaDB</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Cannot be a word reserved by the specified database engine</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter is not specified, the default \"postgres\" database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 63 letters, numbers, or underscores.</p> </li> <li> <p>Must begin with a letter or an underscore. Subsequent characters can be letters, underscores, or digits (0-9).</p> </li> <li> <p>Cannot be a word reserved by the specified database engine</p> </li> </ul> <p> <b>Oracle</b> </p> <p>The Oracle System ID (SID) of the created DB instance. If you specify <code>null</code>, the default value <code>ORCL</code> is used. You can't specify the string NULL, or any other reserved word, for <code>DBName</code>. </p> <p>Default: <code>ORCL</code> </p> <p>Constraints:</p> <ul> <li> <p>Cannot be longer than 8 characters</p> </li> </ul> <p> <b>SQL Server</b> </p> <p>Not applicable. Must be null.</p> <p> <b>Amazon Aurora</b> </p> <p>The name of the database to create when the primary instance of the DB cluster is created. If this parameter is not specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Cannot be a word reserved by the specified database engine</p> </li> </ul>"
        },
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>"
        },
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of storage (in gibibytes) to allocate for the DB instance.</p> <p>Type: Integer</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.</p> <p> <b>MySQL</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 16384.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 16384.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>MariaDB</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 16384.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 16384.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 16384.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 16384.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>Oracle</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 16384.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 16384.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 10 to 3072.</p> </li> </ul> <p> <b>SQL Server</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 16384.</p> </li> <li> <p>Web and Express editions: Must be an integer from 20 to 16384.</p> </li> </ul> </li> <li> <p>Provisioned IOPS storage (io1):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 16384.</p> </li> <li> <p>Web and Express editions: Must be an integer from 100 to 16384.</p> </li> </ul> </li> <li> <p>Magnetic storage (standard):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 1024.</p> </li> <li> <p>Web and Express editions: Must be an integer from 20 to 1024.</p> </li> </ul> </li> </ul>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html\">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The name of the database engine to be used for this instance. </p> <p>Not every database engine is available for every AWS Region. </p> <p>Valid Values: </p> <ul> <li> <p> <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p> </li> <li> <p> <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora)</p> </li> <li> <p> <code>aurora-postgresql</code> </p> </li> <li> <p> <code>mariadb</code> </p> </li> <li> <p> <code>mysql</code> </p> </li> <li> <p> <code>oracle-ee</code> </p> </li> <li> <p> <code>oracle-se2</code> </p> </li> <li> <p> <code>oracle-se1</code> </p> </li> <li> <p> <code>oracle-se</code> </p> </li> <li> <p> <code>postgres</code> </p> </li> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>The name for the master user.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The name for the master user is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>. </p> <p> <b>MariaDB</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for MariaDB.</p> </li> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>Microsoft SQL Server</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for SQL Server.</p> </li> <li> <p>Must be 1 to 128 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>MySQL</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for MySQL.</p> </li> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>Oracle</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for Oracle.</p> </li> <li> <p>Must be 1 to 30 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for PostgreSQL.</p> </li> <li> <p>Must be 1 to 63 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>The password for the master user. The password can include any printable ASCII character except \"/\", \"\"\", or \"@\".</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The password for the master user is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> <b>MariaDB</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Microsoft SQL Server</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p> <p> <b>MySQL</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Oracle</b> </p> <p>Constraints: Must contain from 8 to 30 characters.</p> <p> <b>PostgreSQL</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p>"
        },
        "DBSecurityGroups":{
          "shape":"DBSecurityGroupNameList",
          "documentation":"<p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of EC2 VPC security groups to associate with this DB instance.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p> The EC2 Availability Zone that the DB instance is created in. For information on AWS Regions and Availability Zones, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\">Regions and Availability Zones</a>. </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same AWS Region as the current endpoint. </p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance\">Amazon RDS Maintenance Window</a>. </p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>"
        },
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p> The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow\">The Backup Window</a> in the <i>Amazon RDS User Guide</i>. </p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow\"> Adjusting the Preferred DB Instance Maintenance Window</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the database accepts connections.</p> <p> <b>MySQL</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>MariaDB</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>PostgreSQL</b> </p> <p> Default: <code>5432</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>Oracle</b> </p> <p> Default: <code>1521</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p> <b>SQL Server</b> </p> <p> Default: <code>1433</code> </p> <p> Valid Values: <code>1150-65535</code> except for <code>1434</code>, <code>3389</code>, <code>47001</code>, <code>49152</code>, and <code>49152</code> through <code>49156</code>. </p> <p> <b>Amazon Aurora</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine to use.</p> <p>For a list of valid engine versions, call <a>DescribeDBEngineVersions</a>.</p> <p>The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> <b>MariaDB</b> </p> <p>See <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt\">MariaDB on Amazon RDS Versions</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>Microsoft SQL Server</b> </p> <p>See <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.FeatureSupport\">Version and Feature Support on Amazon RDS</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>MySQL</b> </p> <p>See <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt\">MySQL on Amazon RDS Versions</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>Oracle</b> </p> <p>See <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html\">Oracle Database Engine Release Notes</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>PostgreSQL</b> </p> <p>See <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions\">Supported PostgreSQL Database Versions</a> in the <i>Amazon RDS User Guide.</i> </p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p>Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window.</p> <p>Default: <code>true</code> </p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance. For information about valid Iops values, see see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS\">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints: Must be a multiple between 1 and 50 of the storage amount for the DB instance. Must also be an integer multiple of 1000. For example, if the size of your DB instance is 500 GiB, then your <code>Iops</code> value can be 2000, 3000, 4000, or 5000. </p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>Indicates that the DB instance should be associated with the specified option group.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>"
        },
        "CharacterSetName":{
          "shape":"String",
          "documentation":"<p>For supported engines, indicates that the DB instance should be associated with the specified CharacterSet.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The character set is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address.</p> <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p> <p>If <code>DBSubnetGroupName</code> is not specified, and <code>PubliclyAccessible</code> is not specified, the following applies:</p> <ul> <li> <p>If the default VPC in the target region doesn’t have an Internet gateway attached to it, the DB instance is private.</p> </li> <li> <p>If the default VPC in the target region has an Internet gateway attached to it, the DB instance is public.</p> </li> </ul> <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> is not specified, the following applies:</p> <ul> <li> <p>If the subnets are part of a VPC that doesn’t have an Internet gateway attached to it, the DB instance is private.</p> </li> <li> <p>If the subnets are part of a VPC that has an Internet gateway attached to it, the DB instance is public.</p> </li> </ul>"
        },
        "Tags":{"shape":"TagList"},
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB cluster that the instance will belong to.</p> <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p> <p>Type: String</p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type to be associated with the DB instance.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>standard</code> </p>"
        },
        "TdeCredentialArn":{
          "shape":"String",
          "documentation":"<p>The ARN from the key store with which to associate the instance for TDE encryption.</p>"
        },
        "TdeCredentialPassword":{
          "shape":"String",
          "documentation":"<p>The password for the given ARN from the key store in order to access the device.</p>"
        },
        "StorageEncrypted":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies whether the DB instance is encrypted.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: false</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon RDS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>"
        },
        "Domain":{
          "shape":"String",
          "documentation":"<p>Specify the Active Directory Domain to create the instance in.</p>"
        },
        "CopyTagsToSnapshot":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.</p>"
        },
        "MonitoringInterval":{
          "shape":"IntegerOptional",
          "documentation":"<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>"
        },
        "MonitoringRoleArn":{
          "shape":"String",
          "documentation":"<p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, go to <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling\">Setting Up and Enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>"
        },
        "DomainIAMRoleName":{
          "shape":"String",
          "documentation":"<p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>"
        },
        "PromotionTier":{
          "shape":"IntegerOptional",
          "documentation":"<p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance\"> Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>"
        },
        "Timezone":{
          "shape":"String",
          "documentation":"<p>The time zone of the DB instance. The time zone parameter is currently supported only by <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone\">Microsoft SQL Server</a>. </p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false. </p> <p>You can enable IAM database authentication for the following database engines:</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> <b>MySQL</b> </p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> </ul> <p>Default: <code>false</code> </p>"
        },
        "EnablePerformanceInsights":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable Performance Insights for the DB instance, and otherwise false. </p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html\">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service User Guide</i>. </p>"
        },
        "PerformanceInsightsKMSKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>"
        },
        "PerformanceInsightsRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon Relational Database Service User Guide</i>.</p>"
        },
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateDBInstanceReadReplicaMessage":{
      "type":"structure",
      "required":[
        "DBInstanceIdentifier",
        "SourceDBInstanceIdentifier"
      ],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB instance identifier of the Read Replica. This identifier is the unique key that identifies a DB instance. This parameter is stored as a lowercase string.</p>"
        },
        "SourceDBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB instance that will act as the source for the Read Replica. Each DB instance can have up to five Read Replicas.</p> <p>Constraints:</p> <ul> <li> <p>Must be the identifier of an existing MySQL, MariaDB, or PostgreSQL DB instance.</p> </li> <li> <p>Can specify a DB instance that is a MySQL Read Replica only if the source is running MySQL 5.6.</p> </li> <li> <p>Can specify a DB instance that is a PostgreSQL DB instance only if the source is running PostgreSQL 9.3.5 or later (9.4.7 and higher for cross-region replication).</p> </li> <li> <p>The specified DB instance must have automatic backups enabled, its backup retention period must be greater than 0.</p> </li> <li> <p>If the source DB instance is in the same AWS Region as the Read Replica, specify a valid DB instance identifier.</p> </li> <li> <p>If the source DB instance is in a different AWS Region than the Read Replica, specify a valid DB instance ARN. For more information, go to <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing\"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p> </li> </ul>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the Read Replica, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html\">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: Inherits from the source DB instance.</p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p>The Amazon EC2 Availability Zone that the Read Replica is created in.</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number that the DB instance uses for connections.</p> <p>Default: Inherits from the source DB instance</p> <p>Valid Values: <code>1150-65535</code> </p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies whether the Read Replica is in a Multi-AZ deployment. </p> <p>You can create a Read Replica as a Multi-AZ DB instance. RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your Read Replica as a Multi-AZ DB instance is independent of whether the source database is a Multi-AZ DB instance. </p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p>Indicates that minor engine upgrades are applied automatically to the Read Replica during the maintenance window.</p> <p>Default: Inherits from the source DB instance</p>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The option group the DB instance is associated with. If omitted, the default option group for the engine specified is used.</p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.</p>"
        },
        "Tags":{"shape":"TagList"},
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>Specifies a DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance is not created in a VPC.</p> <p>Constraints:</p> <ul> <li> <p>Can only be specified if the source DB instance identifier specifies a DB instance in another AWS Region.</p> </li> <li> <p>If supplied, must match the name of an existing DBSubnetGroup.</p> </li> <li> <p>The specified DB subnet group must be in the same AWS Region in which the operation is running.</p> </li> <li> <p>All Read Replicas in one AWS Region that are created from the same source DB instance must either:&gt;</p> <ul> <li> <p>Specify DB subnet groups from the same VPC. All these Read Replicas are created in the same VPC.</p> </li> <li> <p>Not specify a DB subnet group. All these Read Replicas are created outside of any VPC.</p> </li> </ul> </li> </ul> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type to be associated with the Read Replica.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>standard</code> </p>"
        },
        "CopyTagsToSnapshot":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to copy all tags from the Read Replica to snapshots of the Read Replica, and otherwise false. The default is false.</p>"
        },
        "MonitoringInterval":{
          "shape":"IntegerOptional",
          "documentation":"<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the Read Replica. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>"
        },
        "MonitoringRoleArn":{
          "shape":"String",
          "documentation":"<p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, go to <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole\">To create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key ID for an encrypted Read Replica. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you specify this parameter when you create a Read Replica from an unencrypted DB instance, the Read Replica is encrypted. </p> <p>If you create an encrypted Read Replica in the same AWS Region as the source DB instance, then you do not have to specify a value for this parameter. The Read Replica is encrypted with the same KMS key as the source DB instance. </p> <p>If you create an encrypted Read Replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region. </p>"
        },
        "PreSignedUrl":{
          "shape":"String",
          "documentation":"<p>The URL that contains a Signature Version 4 signed request for the <code>CreateDBInstanceReadReplica</code> API action in the source AWS Region that contains the source DB instance. </p> <p>You must specify this parameter when you create an encrypted Read Replica from another AWS Region by using the Amazon RDS API. You can specify the <code>--source-region</code> option instead of this parameter when you create an encrypted Read Replica from another AWS Region by using the AWS CLI. </p> <p>The presigned URL must be a valid request for the <code>CreateDBInstanceReadReplica</code> API action that can be executed in the source AWS Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values: </p> <ul> <li> <p> <code>DestinationRegion</code> - The AWS Region that the encrypted Read Replica is created in. This AWS Region is the same one where the <code>CreateDBInstanceReadReplica</code> action is called that contains this presigned URL. </p> <p>For example, if you create an encrypted DB instance in the us-west-1 AWS Region, from a source DB instance in the us-east-2 AWS Region, then you call the <code>CreateDBInstanceReadReplica</code> action in the us-east-1 AWS Region and provide a presigned URL that contains a call to the <code>CreateDBInstanceReadReplica</code> action in the us-west-2 AWS Region. For this example, the <code>DestinationRegion</code> in the presigned URL must be set to the us-east-1 AWS Region. </p> </li> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the Read Replica in the destination AWS Region. This is the same identifier for both the <code>CreateDBInstanceReadReplica</code> action that is called in the destination AWS Region, and the action contained in the presigned URL. </p> </li> <li> <p> <code>SourceDBInstanceIdentifier</code> - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are creating an encrypted Read Replica from a DB instance in the us-west-2 AWS Region, then your <code>SourceDBInstanceIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115</code>. </p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\">Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\">Signature Version 4 Signing Process</a>. </p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> <li> <p>Aurora 5.6 or higher.</p> </li> </ul> <p>Default: <code>false</code> </p>"
        },
        "EnablePerformanceInsights":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable Performance Insights for the read replica, and otherwise false. </p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html\">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>. </p>"
        },
        "PerformanceInsightsKMSKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>"
        },
        "PerformanceInsightsRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of logs that the new DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>"
        },
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>"
        },
        "UseDefaultProcessorFeatures":{
          "shape":"BooleanOptional",
          "documentation":"<p>A value that specifies that the DB instance class of the DB instance uses its default processor features.</p>"
        }
      }
    },
    "CreateDBInstanceReadReplicaResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "CreateDBInstanceResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "CreateDBParameterGroupMessage":{
      "type":"structure",
      "required":[
        "DBParameterGroupName",
        "DBParameterGroupFamily",
        "Description"
      ],
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>"
        },
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.</p> <p>To list all of the available parameter group families, use the following command:</p> <p> <code>aws rds describe-db-engine-versions --query \"DBEngineVersions[].DBParameterGroupFamily\"</code> </p> <note> <p>The output contains duplicates.</p> </note>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The description for the DB parameter group.</p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CreateDBParameterGroupResult":{
      "type":"structure",
      "members":{
        "DBParameterGroup":{"shape":"DBParameterGroup"}
      }
    },
    "CreateDBSecurityGroupMessage":{
      "type":"structure",
      "required":[
        "DBSecurityGroupName",
        "DBSecurityGroupDescription"
      ],
      "members":{
        "DBSecurityGroupName":{
          "shape":"String",
          "documentation":"<p>The name for the DB security group. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Must not be \"Default\"</p> </li> </ul> <p>Example: <code>mysecuritygroup</code> </p>"
        },
        "DBSecurityGroupDescription":{
          "shape":"String",
          "documentation":"<p>The description for the DB security group.</p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CreateDBSecurityGroupResult":{
      "type":"structure",
      "members":{
        "DBSecurityGroup":{"shape":"DBSecurityGroup"}
      }
    },
    "CreateDBSnapshotMessage":{
      "type":"structure",
      "required":[
        "DBSnapshotIdentifier",
        "DBInstanceIdentifier"
      ],
      "members":{
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>"
        },
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB instance that you want to create the snapshot of.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CreateDBSnapshotResult":{
      "type":"structure",
      "members":{
        "DBSnapshot":{"shape":"DBSnapshot"}
      }
    },
    "CreateDBSubnetGroupMessage":{
      "type":"structure",
      "required":[
        "DBSubnetGroupName",
        "DBSubnetGroupDescription",
        "SubnetIds"
      ],
      "members":{
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The name for the DB subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "DBSubnetGroupDescription":{
          "shape":"String",
          "documentation":"<p>The description for the DB subnet group.</p>"
        },
        "SubnetIds":{
          "shape":"SubnetIdentifierList",
          "documentation":"<p>The EC2 Subnet IDs for the DB subnet group.</p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CreateDBSubnetGroupResult":{
      "type":"structure",
      "members":{
        "DBSubnetGroup":{"shape":"DBSubnetGroup"}
      }
    },
    "CreateEventSubscriptionMessage":{
      "type":"structure",
      "required":[
        "SubscriptionName",
        "SnsTopicArn"
      ],
      "members":{
        "SubscriptionName":{
          "shape":"String",
          "documentation":"<p>The name of the subscription.</p> <p>Constraints: The name must be less than 255 characters.</p>"
        },
        "SnsTopicArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>"
        },
        "SourceType":{
          "shape":"String",
          "documentation":"<p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> </p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p> A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType in the <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html\">Events</a> topic in the <i>Amazon RDS User Guide</i> or by using the <b>DescribeEventCategories</b> action. </p>"
        },
        "SourceIds":{
          "shape":"SourceIdsList",
          "documentation":"<p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIds are supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>"
        },
        "Enabled":{
          "shape":"BooleanOptional",
          "documentation":"<p> A Boolean value; set to <b>true</b> to activate the subscription, set to <b>false</b> to create the subscription but not active it. </p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CreateEventSubscriptionResult":{
      "type":"structure",
      "members":{
        "EventSubscription":{"shape":"EventSubscription"}
      }
    },
    "CreateOptionGroupMessage":{
      "type":"structure",
      "required":[
        "OptionGroupName",
        "EngineName",
        "MajorEngineVersion",
        "OptionGroupDescription"
      ],
      "members":{
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the option group to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>myoptiongroup</code> </p>"
        },
        "EngineName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the engine that this option group should be associated with.</p>"
        },
        "MajorEngineVersion":{
          "shape":"String",
          "documentation":"<p>Specifies the major version of the engine that this option group should be associated with.</p>"
        },
        "OptionGroupDescription":{
          "shape":"String",
          "documentation":"<p>The description of the option group.</p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "CreateOptionGroupResult":{
      "type":"structure",
      "members":{
        "OptionGroup":{"shape":"OptionGroup"}
      }
    },
    "DBCluster":{
      "type":"structure",
      "members":{
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p>For all database engines except Amazon Aurora, <code>AllocatedStorage</code> specifies the allocated storage size in gibibytes (GiB). For Aurora, <code>AllocatedStorage</code> always returns 1, because Aurora DB cluster storage size is not fixed, but instead automatically adjusts as needed.</p>"
        },
        "AvailabilityZones":{
          "shape":"AvailabilityZones",
          "documentation":"<p>Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.</p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>Specifies the number of days for which automatic DB snapshots are retained.</p>"
        },
        "CharacterSetName":{
          "shape":"String",
          "documentation":"<p>If present, specifies the name of the character set that this cluster is associated with.</p>"
        },
        "DatabaseName":{
          "shape":"String",
          "documentation":"<p>Contains the name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster.</p>"
        },
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>"
        },
        "DBClusterParameterGroup":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>"
        },
        "DBSubnetGroup":{
          "shape":"String",
          "documentation":"<p>Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>Specifies the current state of this DB cluster.</p>"
        },
        "PercentProgress":{
          "shape":"String",
          "documentation":"<p>Specifies the progress of the operation as a percentage.</p>"
        },
        "EarliestRestorableTime":{
          "shape":"TStamp",
          "documentation":"<p>The earliest time to which a database can be restored with point-in-time restore.</p>"
        },
        "Endpoint":{
          "shape":"String",
          "documentation":"<p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>"
        },
        "ReaderEndpoint":{
          "shape":"String",
          "documentation":"<p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster. </p> <p>If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.</p>"
        },
        "MultiAZ":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>Provides the name of the database engine to be used for this DB cluster.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>Indicates the database engine version.</p>"
        },
        "LatestRestorableTime":{
          "shape":"TStamp",
          "documentation":"<p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>Specifies the port that the database engine is listening on.</p>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>Contains the master username for the DB cluster.</p>"
        },
        "DBClusterOptionGroupMemberships":{
          "shape":"DBClusterOptionGroupMemberships",
          "documentation":"<p>Provides the list of option group memberships for this DB cluster.</p>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p>Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. </p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>"
        },
        "ReplicationSourceIdentifier":{
          "shape":"String",
          "documentation":"<p>Contains the identifier of the source DB cluster if this DB cluster is a Read Replica.</p>"
        },
        "ReadReplicaIdentifiers":{
          "shape":"ReadReplicaIdentifierList",
          "documentation":"<p>Contains one or more identifiers of the Read Replicas associated with this DB cluster.</p>"
        },
        "DBClusterMembers":{
          "shape":"DBClusterMemberList",
          "documentation":"<p>Provides the list of instances that make up the DB cluster.</p>"
        },
        "VpcSecurityGroups":{
          "shape":"VpcSecurityGroupMembershipList",
          "documentation":"<p>Provides a list of VPC security groups that the DB cluster belongs to.</p>"
        },
        "HostedZoneId":{
          "shape":"String",
          "documentation":"<p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>"
        },
        "StorageEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the DB cluster is encrypted.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted DB cluster.</p>"
        },
        "DbClusterResourceId":{
          "shape":"String",
          "documentation":"<p>The AWS Region-unique, immutable identifier for the DB cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.</p>"
        },
        "DBClusterArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB cluster.</p>"
        },
        "AssociatedRoles":{
          "shape":"DBClusterRoles",
          "documentation":"<p>Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.</p>"
        },
        "IAMDatabaseAuthenticationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>"
        },
        "CloneGroupId":{
          "shape":"String",
          "documentation":"<p>Identifies the clone group to which the DB cluster is associated.</p>"
        },
        "ClusterCreateTime":{
          "shape":"TStamp",
          "documentation":"<p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>"
        },
        "EarliestBacktrackTime":{
          "shape":"TStamp",
          "documentation":"<p>The earliest time to which a DB cluster can be backtracked.</p>"
        },
        "BacktrackWindow":{
          "shape":"LongOptional",
          "documentation":"<p>The target backtrack window, in seconds. If this value is set to 0, backtracking is disabled for the DB cluster. Otherwise, backtracking is enabled.</p>"
        },
        "BacktrackConsumedChangeRecords":{
          "shape":"LongOptional",
          "documentation":"<p>The number of change records stored for Backtrack.</p>"
        },
        "EnabledCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p> <p>Log types vary by DB engine. For information about the log types for each DB engine, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html\">Amazon RDS Database Log Files</a> in the <i>Amazon Aurora User Guide.</i> </p>"
        },
        "Capacity":{"shape":"IntegerOptional"},
        "EngineMode":{
          "shape":"String",
          "documentation":"<p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>, or <code>parallelquery</code>.</p>"
        },
        "ScalingConfigurationInfo":{"shape":"ScalingConfigurationInfo"}
      },
      "documentation":"<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a>, <a>StopDBCluster</a>, and <a>StartDBCluster</a> actions. </p>",
      "wrapper":true
    },
    "DBClusterAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The user already has a DB cluster with the given identifier.</p>",
      "error":{
        "code":"DBClusterAlreadyExistsFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterBacktrack":{
      "type":"structure",
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>"
        },
        "BacktrackIdentifier":{
          "shape":"String",
          "documentation":"<p>Contains the backtrack identifier.</p>"
        },
        "BacktrackTo":{
          "shape":"TStamp",
          "documentation":"<p>The timestamp of the time to which the DB cluster was backtracked.</p>"
        },
        "BacktrackedFrom":{
          "shape":"TStamp",
          "documentation":"<p>The timestamp of the time from which the DB cluster was backtracked.</p>"
        },
        "BacktrackRequestCreationTime":{
          "shape":"TStamp",
          "documentation":"<p>The timestamp of the time at which the backtrack was requested.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the backtrack. This property returns one of the following values:</p> <ul> <li> <p> <code>applying</code> - The backtrack is currently being applied to or rolled back from the DB cluster.</p> </li> <li> <p> <code>completed</code> - The backtrack has successfully been applied to or rolled back from the DB cluster.</p> </li> <li> <p> <code>failed</code> - An error occurred while the backtrack was applied to or rolled back from the DB cluster.</p> </li> <li> <p> <code>pending</code> - The backtrack is currently pending application to or rollback from the DB cluster.</p> </li> </ul>"
        }
      },
      "documentation":"<p>This data type is used as a response element in the <a>DescribeDBClusterBacktracks</a> action.</p>"
    },
    "DBClusterBacktrackList":{
      "type":"list",
      "member":{
        "shape":"DBClusterBacktrack",
        "locationName":"DBClusterBacktrack"
      }
    },
    "DBClusterBacktrackMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p>A pagination token that can be used in a subsequent <a>DescribeDBClusterBacktracks</a> request.</p>"
        },
        "DBClusterBacktracks":{
          "shape":"DBClusterBacktrackList",
          "documentation":"<p>Contains a list of backtracks for the user.</p>"
        }
      },
      "documentation":"<p>Contains the result of a successful invocation of the <a>DescribeDBClusterBacktracks</a> action.</p>"
    },
    "DBClusterBacktrackNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>BacktrackIdentifier</i> doesn't refer to an existing backtrack. </p>",
      "error":{
        "code":"DBClusterBacktrackNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterCapacityInfo":{
      "type":"structure",
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>A user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster. </p>"
        },
        "PendingCapacity":{
          "shape":"IntegerOptional",
          "documentation":"<p>A value that specifies the capacity that the DB cluster scales to next.</p>"
        },
        "CurrentCapacity":{
          "shape":"IntegerOptional",
          "documentation":"<p>The current capacity of the DB cluster.</p>"
        },
        "SecondsBeforeTimeout":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of seconds before a call to <code>ModifyCurrentDBClusterCapacity</code> times out.</p>"
        },
        "TimeoutAction":{
          "shape":"String",
          "documentation":"<p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>"
        }
      }
    },
    "DBClusterList":{
      "type":"list",
      "member":{
        "shape":"DBCluster",
        "locationName":"DBCluster"
      }
    },
    "DBClusterMember":{
      "type":"structure",
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>Specifies the instance identifier for this member of the DB cluster.</p>"
        },
        "IsClusterWriter":{
          "shape":"Boolean",
          "documentation":"<p>Value that is <code>true</code> if the cluster member is the primary instance for the DB cluster and <code>false</code> otherwise.</p>"
        },
        "DBClusterParameterGroupStatus":{
          "shape":"String",
          "documentation":"<p>Specifies the status of the DB cluster parameter group for this member of the DB cluster.</p>"
        },
        "PromotionTier":{
          "shape":"IntegerOptional",
          "documentation":"<p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance\"> Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>. </p>"
        }
      },
      "documentation":"<p>Contains information about an instance that is part of a DB cluster.</p>",
      "wrapper":true
    },
    "DBClusterMemberList":{
      "type":"list",
      "member":{
        "shape":"DBClusterMember",
        "locationName":"DBClusterMember"
      }
    },
    "DBClusterMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p>A pagination token that can be used in a subsequent DescribeDBClusters request.</p>"
        },
        "DBClusters":{
          "shape":"DBClusterList",
          "documentation":"<p>Contains a list of DB clusters for the user.</p>"
        }
      },
      "documentation":"<p>Contains the result of a successful invocation of the <a>DescribeDBClusters</a> action.</p>"
    },
    "DBClusterNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>",
      "error":{
        "code":"DBClusterNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterOptionGroupMemberships":{
      "type":"list",
      "member":{
        "shape":"DBClusterOptionGroupStatus",
        "locationName":"DBClusterOptionGroup"
      }
    },
    "DBClusterOptionGroupStatus":{
      "type":"structure",
      "members":{
        "DBClusterOptionGroupName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the DB cluster option group.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>Specifies the status of the DB cluster option group.</p>"
        }
      },
      "documentation":"<p>Contains status information for a DB cluster option group.</p>"
    },
    "DBClusterParameterGroup":{
      "type":"structure",
      "members":{
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>Provides the name of the DB cluster parameter group.</p>"
        },
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>Provides the name of the DB parameter group family that this DB cluster parameter group is compatible with.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>Provides the customer-specified description for this DB cluster parameter group.</p>"
        },
        "DBClusterParameterGroupArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB cluster parameter group.</p>"
        }
      },
      "documentation":"<p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action. </p>",
      "wrapper":true
    },
    "DBClusterParameterGroupDetails":{
      "type":"structure",
      "members":{
        "Parameters":{
          "shape":"ParametersList",
          "documentation":"<p>Provides a list of parameters for the DB cluster parameter group.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous DescribeDBClusterParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>"
        }
      },
      "documentation":"<p>Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.</p>"
    },
    "DBClusterParameterGroupList":{
      "type":"list",
      "member":{
        "shape":"DBClusterParameterGroup",
        "locationName":"DBClusterParameterGroup"
      }
    },
    "DBClusterParameterGroupNameMessage":{
      "type":"structure",
      "members":{
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>"
        }
      },
      "documentation":"<p/>"
    },
    "DBClusterParameterGroupNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBClusterParameterGroupName</i> doesn't refer to an existing DB cluster parameter group. </p>",
      "error":{
        "code":"DBClusterParameterGroupNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterParameterGroupsMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "DBClusterParameterGroups":{
          "shape":"DBClusterParameterGroupList",
          "documentation":"<p>A list of DB cluster parameter groups.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DBClusterQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The user attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>",
      "error":{
        "code":"DBClusterQuotaExceededFault",
        "httpStatusCode":403,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterRole":{
      "type":"structure",
      "members":{
        "RoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be used to access other AWS services on your behalf.</p> </li> <li> <p> <code>PENDING</code> - the IAM role ARN is being associated with the DB cluster.</p> </li> <li> <p> <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable to assume the IAM role in order to access other AWS services on your behalf.</p> </li> </ul>"
        },
        "FeatureName":{"shape":"String"}
      },
      "documentation":"<p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.</p>"
    },
    "DBClusterRoleAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>",
      "error":{
        "code":"DBClusterRoleAlreadyExists",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterRoleNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.</p>",
      "error":{
        "code":"DBClusterRoleNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterRoleQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>",
      "error":{
        "code":"DBClusterRoleQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterRoles":{
      "type":"list",
      "member":{
        "shape":"DBClusterRole",
        "locationName":"DBClusterRole"
      }
    },
    "DBClusterSnapshot":{
      "type":"structure",
      "members":{
        "AvailabilityZones":{
          "shape":"AvailabilityZones",
          "documentation":"<p>Provides the list of EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.</p>"
        },
        "DBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>Specifies the identifier for the DB cluster snapshot.</p>"
        },
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.</p>"
        },
        "SnapshotCreateTime":{
          "shape":"TStamp",
          "documentation":"<p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the database engine.</p>"
        },
        "AllocatedStorage":{
          "shape":"Integer",
          "documentation":"<p>Specifies the allocated storage size in gibibytes (GiB).</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>Specifies the status of this DB cluster snapshot.</p>"
        },
        "Port":{
          "shape":"Integer",
          "documentation":"<p>Specifies the port that the DB cluster was listening on at the time of the snapshot.</p>"
        },
        "VpcId":{
          "shape":"String",
          "documentation":"<p>Provides the VPC ID associated with the DB cluster snapshot.</p>"
        },
        "ClusterCreateTime":{
          "shape":"TStamp",
          "documentation":"<p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>Provides the master username for the DB cluster snapshot.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>Provides the version of the database engine for this DB cluster snapshot.</p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>Provides the license model information for this DB cluster snapshot.</p>"
        },
        "SnapshotType":{
          "shape":"String",
          "documentation":"<p>Provides the type of the DB cluster snapshot.</p>"
        },
        "PercentProgress":{
          "shape":"Integer",
          "documentation":"<p>Specifies the percentage of the estimated data that has been transferred.</p>"
        },
        "StorageEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the DB cluster snapshot is encrypted.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.</p>"
        },
        "DBClusterSnapshotArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>"
        },
        "SourceDBClusterSnapshotArn":{
          "shape":"String",
          "documentation":"<p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>"
        },
        "IAMDatabaseAuthenticationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>"
        }
      },
      "documentation":"<p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action. </p>",
      "wrapper":true
    },
    "DBClusterSnapshotAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The user already has a DB cluster snapshot with the given identifier.</p>",
      "error":{
        "code":"DBClusterSnapshotAlreadyExistsFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBClusterSnapshotAttribute":{
      "type":"structure",
      "members":{
        "AttributeName":{
          "shape":"String",
          "documentation":"<p>The name of the manual DB cluster snapshot attribute.</p> <p>The attribute named <code>restore</code> refers to the list of AWS accounts that have permission to copy or restore the manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>"
        },
        "AttributeValues":{
          "shape":"AttributeValueList",
          "documentation":"<p>The value(s) for the manual DB cluster snapshot attribute.</p> <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster snapshot is public and available for any AWS account to copy or restore.</p>"
        }
      },
      "documentation":"<p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>"
    },
    "DBClusterSnapshotAttributeList":{
      "type":"list",
      "member":{
        "shape":"DBClusterSnapshotAttribute",
        "locationName":"DBClusterSnapshotAttribute"
      }
    },
    "DBClusterSnapshotAttributesResult":{
      "type":"structure",
      "members":{
        "DBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the manual DB cluster snapshot that the attributes apply to.</p>"
        },
        "DBClusterSnapshotAttributes":{
          "shape":"DBClusterSnapshotAttributeList",
          "documentation":"<p>The list of attributes and values for the manual DB cluster snapshot.</p>"
        }
      },
      "documentation":"<p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>",
      "wrapper":true
    },
    "DBClusterSnapshotList":{
      "type":"list",
      "member":{
        "shape":"DBClusterSnapshot",
        "locationName":"DBClusterSnapshot"
      }
    },
    "DBClusterSnapshotMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <a>DescribeDBClusterSnapshots</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "DBClusterSnapshots":{
          "shape":"DBClusterSnapshotList",
          "documentation":"<p>Provides a list of DB cluster snapshots for the user.</p>"
        }
      },
      "documentation":"<p> Provides a list of DB cluster snapshots for the user as the result of a call to the <a>DescribeDBClusterSnapshots</a> action. </p>"
    },
    "DBClusterSnapshotNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBClusterSnapshotIdentifier</i> doesn't refer to an existing DB cluster snapshot. </p>",
      "error":{
        "code":"DBClusterSnapshotNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBEngineVersion":{
      "type":"structure",
      "members":{
        "Engine":{
          "shape":"String",
          "documentation":"<p>The name of the database engine.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine.</p>"
        },
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group family for the database engine.</p>"
        },
        "DBEngineDescription":{
          "shape":"String",
          "documentation":"<p>The description of the database engine.</p>"
        },
        "DBEngineVersionDescription":{
          "shape":"String",
          "documentation":"<p>The description of the database engine version.</p>"
        },
        "DefaultCharacterSet":{
          "shape":"CharacterSet",
          "documentation":"<p> The default character set for new instances of this engine version, if the <code>CharacterSetName</code> parameter of the CreateDBInstance API is not specified. </p>"
        },
        "SupportedCharacterSets":{
          "shape":"SupportedCharacterSetsList",
          "documentation":"<p> A list of the character sets supported by this engine for the <code>CharacterSetName</code> parameter of the <code>CreateDBInstance</code> action. </p>"
        },
        "ValidUpgradeTarget":{
          "shape":"ValidUpgradeTargetList",
          "documentation":"<p>A list of engine versions that this database engine version can be upgraded to.</p>"
        },
        "SupportedTimezones":{
          "shape":"SupportedTimezonesList",
          "documentation":"<p>A list of the time zones supported by this engine for the <code>Timezone</code> parameter of the <code>CreateDBInstance</code> action. </p>"
        },
        "ExportableLogTypes":{
          "shape":"LogTypeList",
          "documentation":"<p>The types of logs that the database engine has available for export to CloudWatch Logs.</p>"
        },
        "SupportsLogExportsToCloudwatchLogs":{
          "shape":"Boolean",
          "documentation":"<p>A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.</p>"
        },
        "SupportsReadReplica":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the database engine version supports read replicas.</p>"
        },
        "SupportedEngineModes":{
          "shape":"EngineModeList",
          "documentation":"<p>A list of the supported DB engine modes.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>. </p>"
    },
    "DBEngineVersionList":{
      "type":"list",
      "member":{
        "shape":"DBEngineVersion",
        "locationName":"DBEngineVersion"
      }
    },
    "DBEngineVersionMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "DBEngineVersions":{
          "shape":"DBEngineVersionList",
          "documentation":"<p> A list of <code>DBEngineVersion</code> elements. </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeDBEngineVersions</a> action. </p>"
    },
    "DBInstance":{
      "type":"structure",
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>Contains the name of the compute and memory capacity class of the DB instance.</p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>Provides the name of the database engine to be used for this DB instance.</p>"
        },
        "DBInstanceStatus":{
          "shape":"String",
          "documentation":"<p>Specifies the current state of this database.</p>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>Contains the master username for the DB instance.</p>"
        },
        "DBName":{
          "shape":"String",
          "documentation":"<p>The meaning of this parameter differs according to the database engine you use. For example, this value returns MySQL, MariaDB, or PostgreSQL information when returning values from CreateDBInstanceReadReplica since Read Replicas are only supported for these engines.</p> <p> <b>MySQL, MariaDB, SQL Server, PostgreSQL</b> </p> <p>Contains the name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created. This same name is returned for the life of the DB instance.</p> <p>Type: String</p> <p> <b>Oracle</b> </p> <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the returned parameters do not apply to an Oracle DB instance.</p>"
        },
        "Endpoint":{
          "shape":"Endpoint",
          "documentation":"<p>Specifies the connection endpoint.</p>"
        },
        "AllocatedStorage":{
          "shape":"Integer",
          "documentation":"<p>Specifies the allocated storage size specified in gibibytes.</p>"
        },
        "InstanceCreateTime":{
          "shape":"TStamp",
          "documentation":"<p>Provides the date and time the DB instance was created.</p>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p> Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. </p>"
        },
        "BackupRetentionPeriod":{
          "shape":"Integer",
          "documentation":"<p>Specifies the number of days for which automatic DB snapshots are retained.</p>"
        },
        "DBSecurityGroups":{
          "shape":"DBSecurityGroupMembershipList",
          "documentation":"<p> Provides List of DB security group elements containing only <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements. </p>"
        },
        "VpcSecurityGroups":{
          "shape":"VpcSecurityGroupMembershipList",
          "documentation":"<p>Provides a list of VPC security group elements that the DB instance belongs to.</p>"
        },
        "DBParameterGroups":{
          "shape":"DBParameterGroupStatusList",
          "documentation":"<p>Provides the list of DB parameter groups applied to this DB instance.</p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the Availability Zone the DB instance is located in.</p>"
        },
        "DBSubnetGroup":{
          "shape":"DBSubnetGroup",
          "documentation":"<p>Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>"
        },
        "PendingModifiedValues":{
          "shape":"PendingModifiedValues",
          "documentation":"<p>Specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.</p>"
        },
        "LatestRestorableTime":{
          "shape":"TStamp",
          "documentation":"<p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>"
        },
        "MultiAZ":{
          "shape":"Boolean",
          "documentation":"<p>Specifies if the DB instance is a Multi-AZ deployment.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>Indicates the database engine version.</p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"Boolean",
          "documentation":"<p>Indicates that minor version patches are applied automatically.</p>"
        },
        "ReadReplicaSourceDBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>Contains the identifier of the source DB instance if this DB instance is a Read Replica.</p>"
        },
        "ReadReplicaDBInstanceIdentifiers":{
          "shape":"ReadReplicaDBInstanceIdentifierList",
          "documentation":"<p>Contains one or more identifiers of the Read Replicas associated with this DB instance.</p>"
        },
        "ReadReplicaDBClusterIdentifiers":{
          "shape":"ReadReplicaDBClusterIdentifierList",
          "documentation":"<p>Contains one or more identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a Read Replica. For example, when you create an Aurora Read Replica of an RDS MySQL DB instance, the Aurora MySQL DB cluster for the Aurora Read Replica is shown. This output does not contain information about cross region Aurora Read Replicas.</p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>License model information for this DB instance.</p>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>Specifies the Provisioned IOPS (I/O operations per second) value.</p>"
        },
        "OptionGroupMemberships":{
          "shape":"OptionGroupMembershipList",
          "documentation":"<p>Provides the list of option group memberships for this DB instance.</p>"
        },
        "CharacterSetName":{
          "shape":"String",
          "documentation":"<p>If present, specifies the name of the character set that this instance is associated with.</p>"
        },
        "SecondaryAvailabilityZone":{
          "shape":"String",
          "documentation":"<p>If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.</p>"
        },
        "PubliclyAccessible":{
          "shape":"Boolean",
          "documentation":"<p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address.</p>"
        },
        "StatusInfos":{
          "shape":"DBInstanceStatusInfoList",
          "documentation":"<p>The status of a Read Replica. If the instance is not a Read Replica, this is blank.</p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type associated with DB instance.</p>"
        },
        "TdeCredentialArn":{
          "shape":"String",
          "documentation":"<p>The ARN from the key store with which the instance is associated for TDE encryption.</p>"
        },
        "DbInstancePort":{
          "shape":"Integer",
          "documentation":"<p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.</p>"
        },
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.</p>"
        },
        "StorageEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the DB instance is encrypted.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p> If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted DB instance. </p>"
        },
        "DbiResourceId":{
          "shape":"String",
          "documentation":"<p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.</p>"
        },
        "CACertificateIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the CA certificate for this DB instance.</p>"
        },
        "DomainMemberships":{
          "shape":"DomainMembershipList",
          "documentation":"<p>The Active Directory Domain membership records associated with the DB instance.</p>"
        },
        "CopyTagsToSnapshot":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether tags are copied from the DB instance to snapshots of the DB instance.</p>"
        },
        "MonitoringInterval":{
          "shape":"IntegerOptional",
          "documentation":"<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.</p>"
        },
        "EnhancedMonitoringResourceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.</p>"
        },
        "MonitoringRoleArn":{
          "shape":"String",
          "documentation":"<p>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>"
        },
        "PromotionTier":{
          "shape":"IntegerOptional",
          "documentation":"<p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance\"> Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>. </p>"
        },
        "DBInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB instance.</p>"
        },
        "Timezone":{
          "shape":"String",
          "documentation":"<p>The time zone of the DB instance. In most cases, the <code>Timezone</code> element is empty. <code>Timezone</code> content appears only for Microsoft SQL Server DB instances that were created with a time zone specified. </p>"
        },
        "IAMDatabaseAuthenticationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p> <p>IAM database authentication can be enabled for the following database engines</p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> <li> <p>Aurora 5.6 or higher. To enable IAM database authentication for Aurora, see DBCluster Type.</p> </li> </ul>"
        },
        "PerformanceInsightsEnabled":{
          "shape":"BooleanOptional",
          "documentation":"<p>True if Performance Insights is enabled for the DB instance, and otherwise false.</p>"
        },
        "PerformanceInsightsKMSKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>"
        },
        "PerformanceInsightsRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>"
        },
        "EnabledCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p> <p>Log types vary by DB engine. For information about the log types for each DB engine, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html\">Amazon RDS Database Log Files</a> in the <i>Amazon RDS User Guide.</i> </p>"
        },
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>"
        }
      },
      "documentation":"<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action. </p>",
      "wrapper":true
    },
    "DBInstanceAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The user already has a DB instance with the given identifier.</p>",
      "error":{
        "code":"DBInstanceAlreadyExists",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBInstanceList":{
      "type":"list",
      "member":{
        "shape":"DBInstance",
        "locationName":"DBInstance"
      }
    },
    "DBInstanceMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>"
        },
        "DBInstances":{
          "shape":"DBInstanceList",
          "documentation":"<p> A list of <a>DBInstance</a> instances. </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeDBInstances</a> action. </p>"
    },
    "DBInstanceNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>",
      "error":{
        "code":"DBInstanceNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBInstanceStatusInfo":{
      "type":"structure",
      "members":{
        "StatusType":{
          "shape":"String",
          "documentation":"<p>This value is currently \"read replication.\"</p>"
        },
        "Normal":{
          "shape":"Boolean",
          "documentation":"<p>Boolean value that is true if the instance is operating normally, or false if the instance is in an error state.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>Status of the DB instance. For a StatusType of read replica, the values can be replicating, replication stop point set, replication stop point reached, error, stopped, or terminated.</p>"
        },
        "Message":{
          "shape":"String",
          "documentation":"<p>Details of the error if there is an error for the instance. If the instance is not in an error state, this value is blank.</p>"
        }
      },
      "documentation":"<p>Provides a list of status information for a DB instance.</p>"
    },
    "DBInstanceStatusInfoList":{
      "type":"list",
      "member":{
        "shape":"DBInstanceStatusInfo",
        "locationName":"DBInstanceStatusInfo"
      }
    },
    "DBLogFileNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>LogFileName</i> doesn't refer to an existing DB log file.</p>",
      "error":{
        "code":"DBLogFileNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBParameterGroup":{
      "type":"structure",
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>Provides the name of the DB parameter group.</p>"
        },
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>Provides the name of the DB parameter group family that this DB parameter group is compatible with.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>Provides the customer-specified description for this DB parameter group.</p>"
        },
        "DBParameterGroupArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB parameter group.</p>"
        }
      },
      "documentation":"<p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action. </p>",
      "wrapper":true
    },
    "DBParameterGroupAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A DB parameter group with the same name exists.</p>",
      "error":{
        "code":"DBParameterGroupAlreadyExists",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBParameterGroupDetails":{
      "type":"structure",
      "members":{
        "Parameters":{
          "shape":"ParametersList",
          "documentation":"<p> A list of <a>Parameter</a> values. </p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeDBParameters</a> action. </p>"
    },
    "DBParameterGroupList":{
      "type":"list",
      "member":{
        "shape":"DBParameterGroup",
        "locationName":"DBParameterGroup"
      }
    },
    "DBParameterGroupNameMessage":{
      "type":"structure",
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>Provides the name of the DB parameter group.</p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>ModifyDBParameterGroup</a> or <a>ResetDBParameterGroup</a> action. </p>"
    },
    "DBParameterGroupNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>",
      "error":{
        "code":"DBParameterGroupNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBParameterGroupQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request would result in the user exceeding the allowed number of DB parameter groups.</p>",
      "error":{
        "code":"DBParameterGroupQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBParameterGroupStatus":{
      "type":"structure",
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DP parameter group.</p>"
        },
        "ParameterApplyStatus":{
          "shape":"String",
          "documentation":"<p>The status of parameter updates.</p>"
        }
      },
      "documentation":"<p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>CreateDBInstanceReadReplica</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> <li> <p> <a>RestoreDBInstanceFromDBSnapshot</a> </p> </li> </ul>"
    },
    "DBParameterGroupStatusList":{
      "type":"list",
      "member":{
        "shape":"DBParameterGroupStatus",
        "locationName":"DBParameterGroup"
      }
    },
    "DBParameterGroupsMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "DBParameterGroups":{
          "shape":"DBParameterGroupList",
          "documentation":"<p> A list of <a>DBParameterGroup</a> instances. </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeDBParameterGroups</a> action. </p>"
    },
    "DBSecurityGroup":{
      "type":"structure",
      "members":{
        "OwnerId":{
          "shape":"String",
          "documentation":"<p>Provides the AWS ID of the owner of a specific DB security group.</p>"
        },
        "DBSecurityGroupName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the DB security group.</p>"
        },
        "DBSecurityGroupDescription":{
          "shape":"String",
          "documentation":"<p>Provides the description of the DB security group.</p>"
        },
        "VpcId":{
          "shape":"String",
          "documentation":"<p>Provides the VpcId of the DB security group.</p>"
        },
        "EC2SecurityGroups":{
          "shape":"EC2SecurityGroupList",
          "documentation":"<p> Contains a list of <a>EC2SecurityGroup</a> elements. </p>"
        },
        "IPRanges":{
          "shape":"IPRangeList",
          "documentation":"<p> Contains a list of <a>IPRange</a> elements. </p>"
        },
        "DBSecurityGroupArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB security group.</p>"
        }
      },
      "documentation":"<p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <a>DescribeDBSecurityGroups</a> action. </p>",
      "wrapper":true
    },
    "DBSecurityGroupAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> A DB security group with the name specified in <i>DBSecurityGroupName</i> already exists. </p>",
      "error":{
        "code":"DBSecurityGroupAlreadyExists",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBSecurityGroupMembership":{
      "type":"structure",
      "members":{
        "DBSecurityGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB security group.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the DB security group.</p>"
        }
      },
      "documentation":"<p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> <li> <p> <a>RestoreDBInstanceFromDBSnapshot</a> </p> </li> <li> <p> <a>RestoreDBInstanceToPointInTime</a> </p> </li> </ul>"
    },
    "DBSecurityGroupMembershipList":{
      "type":"list",
      "member":{
        "shape":"DBSecurityGroupMembership",
        "locationName":"DBSecurityGroup"
      }
    },
    "DBSecurityGroupMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "DBSecurityGroups":{
          "shape":"DBSecurityGroups",
          "documentation":"<p> A list of <a>DBSecurityGroup</a> instances. </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeDBSecurityGroups</a> action. </p>"
    },
    "DBSecurityGroupNameList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"DBSecurityGroupName"
      }
    },
    "DBSecurityGroupNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>",
      "error":{
        "code":"DBSecurityGroupNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBSecurityGroupNotSupportedFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A DB security group isn't allowed for this action.</p>",
      "error":{
        "code":"DBSecurityGroupNotSupported",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBSecurityGroupQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request would result in the user exceeding the allowed number of DB security groups.</p>",
      "error":{
        "code":"QuotaExceeded.DBSecurityGroup",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBSecurityGroups":{
      "type":"list",
      "member":{
        "shape":"DBSecurityGroup",
        "locationName":"DBSecurityGroup"
      }
    },
    "DBSnapshot":{
      "type":"structure",
      "members":{
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>Specifies the identifier for the DB snapshot.</p>"
        },
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>Specifies the DB instance identifier of the DB instance this DB snapshot was created from.</p>"
        },
        "SnapshotCreateTime":{
          "shape":"TStamp",
          "documentation":"<p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the database engine.</p>"
        },
        "AllocatedStorage":{
          "shape":"Integer",
          "documentation":"<p>Specifies the allocated storage size in gibibytes (GiB).</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>Specifies the status of this DB snapshot.</p>"
        },
        "Port":{
          "shape":"Integer",
          "documentation":"<p>Specifies the port that the database engine was listening on at the time of the snapshot.</p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.</p>"
        },
        "VpcId":{
          "shape":"String",
          "documentation":"<p>Provides the VPC ID associated with the DB snapshot.</p>"
        },
        "InstanceCreateTime":{
          "shape":"TStamp",
          "documentation":"<p>Specifies the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>Provides the master username for the DB snapshot.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>Specifies the version of the database engine.</p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>License model information for the restored DB instance.</p>"
        },
        "SnapshotType":{
          "shape":"String",
          "documentation":"<p>Provides the type of the DB snapshot.</p>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>Provides the option group name for the DB snapshot.</p>"
        },
        "PercentProgress":{
          "shape":"Integer",
          "documentation":"<p>The percentage of the estimated data that has been transferred.</p>"
        },
        "SourceRegion":{
          "shape":"String",
          "documentation":"<p>The AWS Region that the DB snapshot was created in or copied from.</p>"
        },
        "SourceDBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB snapshot Amazon Resource Name (ARN) that the DB snapshot was copied from. It only has value in case of cross-customer or cross-region copy.</p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type associated with DB snapshot.</p>"
        },
        "TdeCredentialArn":{
          "shape":"String",
          "documentation":"<p>The ARN from the key store with which to associate the instance for TDE encryption.</p>"
        },
        "Encrypted":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the DB snapshot is encrypted.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p> If <code>Encrypted</code> is true, the AWS KMS key identifier for the encrypted DB snapshot. </p>"
        },
        "DBSnapshotArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB snapshot.</p>"
        },
        "Timezone":{
          "shape":"String",
          "documentation":"<p>The time zone of the DB snapshot. In most cases, the <code>Timezone</code> element is empty. <code>Timezone</code> content appears only for snapshots taken from Microsoft SQL Server DB instances that were created with a time zone specified. </p>"
        },
        "IAMDatabaseAuthenticationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>"
        },
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance when the DB snapshot was created.</p>"
        }
      },
      "documentation":"<p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <a>DescribeDBSnapshots</a> action. </p>",
      "wrapper":true
    },
    "DBSnapshotAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBSnapshotIdentifier</i> is already used by an existing snapshot. </p>",
      "error":{
        "code":"DBSnapshotAlreadyExists",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBSnapshotAttribute":{
      "type":"structure",
      "members":{
        "AttributeName":{
          "shape":"String",
          "documentation":"<p>The name of the manual DB snapshot attribute.</p> <p>The attribute named <code>restore</code> refers to the list of AWS accounts that have permission to copy or restore the manual DB cluster snapshot. For more information, see the <a>ModifyDBSnapshotAttribute</a> API action.</p>"
        },
        "AttributeValues":{
          "shape":"AttributeValueList",
          "documentation":"<p>The value or values for the manual DB snapshot attribute.</p> <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual DB snapshot. If a value of <code>all</code> is in the list, then the manual DB snapshot is public and available for any AWS account to copy or restore.</p>"
        }
      },
      "documentation":"<p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to restore a manual DB snapshot. For more information, see the <a>ModifyDBSnapshotAttribute</a> API.</p>",
      "wrapper":true
    },
    "DBSnapshotAttributeList":{
      "type":"list",
      "member":{
        "shape":"DBSnapshotAttribute",
        "locationName":"DBSnapshotAttribute"
      }
    },
    "DBSnapshotAttributesResult":{
      "type":"structure",
      "members":{
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the manual DB snapshot that the attributes apply to.</p>"
        },
        "DBSnapshotAttributes":{
          "shape":"DBSnapshotAttributeList",
          "documentation":"<p>The list of attributes and values for the manual DB snapshot.</p>"
        }
      },
      "documentation":"<p>Contains the results of a successful call to the <a>DescribeDBSnapshotAttributes</a> API action.</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB snapshot. For more information, see the <a>ModifyDBSnapshotAttribute</a> API action.</p>",
      "wrapper":true
    },
    "DBSnapshotList":{
      "type":"list",
      "member":{
        "shape":"DBSnapshot",
        "locationName":"DBSnapshot"
      }
    },
    "DBSnapshotMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "DBSnapshots":{
          "shape":"DBSnapshotList",
          "documentation":"<p> A list of <a>DBSnapshot</a> instances. </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeDBSnapshots</a> action. </p>"
    },
    "DBSnapshotNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>",
      "error":{
        "code":"DBSnapshotNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBSubnetGroup":{
      "type":"structure",
      "members":{
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB subnet group.</p>"
        },
        "DBSubnetGroupDescription":{
          "shape":"String",
          "documentation":"<p>Provides the description of the DB subnet group.</p>"
        },
        "VpcId":{
          "shape":"String",
          "documentation":"<p>Provides the VpcId of the DB subnet group.</p>"
        },
        "SubnetGroupStatus":{
          "shape":"String",
          "documentation":"<p>Provides the status of the DB subnet group.</p>"
        },
        "Subnets":{
          "shape":"SubnetList",
          "documentation":"<p> Contains a list of <a>Subnet</a> elements. </p>"
        },
        "DBSubnetGroupArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB subnet group.</p>"
        }
      },
      "documentation":"<p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action. </p>",
      "wrapper":true
    },
    "DBSubnetGroupAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBSubnetGroupName</i> is already used by an existing DB subnet group. </p>",
      "error":{
        "code":"DBSubnetGroupAlreadyExists",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBSubnetGroupDoesNotCoverEnoughAZs":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>",
      "error":{
        "code":"DBSubnetGroupDoesNotCoverEnoughAZs",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBSubnetGroupMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "DBSubnetGroups":{
          "shape":"DBSubnetGroups",
          "documentation":"<p> A list of <a>DBSubnetGroup</a> instances. </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeDBSubnetGroups</a> action. </p>"
    },
    "DBSubnetGroupNotAllowedFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DBSubnetGroup shouldn't be specified while creating read replicas that lie in the same region as the source instance.</p>",
      "error":{
        "code":"DBSubnetGroupNotAllowedFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBSubnetGroupNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>",
      "error":{
        "code":"DBSubnetGroupNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "DBSubnetGroupQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request would result in the user exceeding the allowed number of DB subnet groups.</p>",
      "error":{
        "code":"DBSubnetGroupQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBSubnetGroups":{
      "type":"list",
      "member":{
        "shape":"DBSubnetGroup",
        "locationName":"DBSubnetGroup"
      }
    },
    "DBSubnetQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request would result in the user exceeding the allowed number of subnets in a DB subnet groups.</p>",
      "error":{
        "code":"DBSubnetQuotaExceededFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DBUpgradeDependencyFailureFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB upgrade failed because a resource the DB depends on can't be modified.</p>",
      "error":{
        "code":"DBUpgradeDependencyFailure",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DeleteDBClusterMessage":{
      "type":"structure",
      "required":["DBClusterIdentifier"],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing DBClusterIdentifier.</p> </li> </ul>"
        },
        "SkipFinalSnapshot":{
          "shape":"Boolean",
          "documentation":"<p> Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If <code>false</code> is specified, a DB cluster snapshot is created before the DB cluster is deleted. </p> <note> <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>"
        },
        "FinalDBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p> The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>. </p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to true results in an error. </p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteDBClusterParameterGroupMessage":{
      "type":"structure",
      "required":["DBClusterParameterGroupName"],
      "members":{
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB cluster parameter group.</p> </li> <li> <p>You can't delete a default DB cluster parameter group.</p> </li> <li> <p>Cannot be associated with any DB clusters.</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteDBClusterResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "DeleteDBClusterSnapshotMessage":{
      "type":"structure",
      "required":["DBClusterSnapshotIdentifier"],
      "members":{
        "DBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteDBClusterSnapshotResult":{
      "type":"structure",
      "members":{
        "DBClusterSnapshot":{"shape":"DBClusterSnapshot"}
      }
    },
    "DeleteDBInstanceMessage":{
      "type":"structure",
      "required":["DBInstanceIdentifier"],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB instance.</p> </li> </ul>"
        },
        "SkipFinalSnapshot":{
          "shape":"Boolean",
          "documentation":"<p> Determines whether a final DB snapshot is created before the DB instance is deleted. If <code>true</code> is specified, no DBSnapshot is created. If <code>false</code> is specified, a DB snapshot is created before the DB instance is deleted. </p> <p>Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to \"true\".</p> <p>Specify <code>true</code> when deleting a Read Replica.</p> <note> <p>The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>"
        },
        "FinalDBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p> The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to <code>false</code>. </p> <note> <p>Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Cannot be specified when deleting a Read Replica.</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteDBInstanceResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "DeleteDBParameterGroupMessage":{
      "type":"structure",
      "required":["DBParameterGroupName"],
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB parameter group</p> </li> <li> <p>You can't delete a default DB parameter group</p> </li> <li> <p>Cannot be associated with any DB instances</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteDBSecurityGroupMessage":{
      "type":"structure",
      "required":["DBSecurityGroupName"],
      "members":{
        "DBSecurityGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB security group to delete.</p> <note> <p>You can't delete the default DB security group.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Must not be \"Default\"</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteDBSnapshotMessage":{
      "type":"structure",
      "required":["DBSnapshotIdentifier"],
      "members":{
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The DBSnapshot identifier.</p> <p>Constraints: Must be the name of an existing DB snapshot in the <code>available</code> state.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteDBSnapshotResult":{
      "type":"structure",
      "members":{
        "DBSnapshot":{"shape":"DBSnapshot"}
      }
    },
    "DeleteDBSubnetGroupMessage":{
      "type":"structure",
      "required":["DBSubnetGroupName"],
      "members":{
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteEventSubscriptionMessage":{
      "type":"structure",
      "required":["SubscriptionName"],
      "members":{
        "SubscriptionName":{
          "shape":"String",
          "documentation":"<p>The name of the RDS event notification subscription you want to delete.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteEventSubscriptionResult":{
      "type":"structure",
      "members":{
        "EventSubscription":{"shape":"EventSubscription"}
      }
    },
    "DeleteOptionGroupMessage":{
      "type":"structure",
      "required":["OptionGroupName"],
      "members":{
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group to be deleted.</p> <note> <p>You can't delete default option groups.</p> </note>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeAccountAttributesMessage":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p/>"
    },
    "DescribeCertificatesMessage":{
      "type":"structure",
      "members":{
        "CertificateIdentifier":{
          "shape":"String",
          "documentation":"<p>The user-supplied certificate identifier. If this parameter is specified, information for only the identified certificate is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing CertificateIdentifier.</p> </li> </ul>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <a>DescribeCertificates</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBClusterBacktracksMessage":{
      "type":"structure",
      "required":["DBClusterIdentifier"],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier of the DB cluster to be described. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>"
        },
        "BacktrackIdentifier":{
          "shape":"String",
          "documentation":"<p>If specified, this value is the backtrack identifier of the backtrack to be described.</p> <p>Constraints:</p> <ul> <li> <p>Must contain a valid universally unique identifier (UUID). For more information about UUIDs, see <a href=\"http://www.ietf.org/rfc/rfc4122.txt\">A Universally Unique Identifier (UUID) URN Namespace</a>.</p> </li> </ul> <p>Example: <code>123e4567-e89b-12d3-a456-426655440000</code> </p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>A filter that specifies one or more DB clusters to describe. Supported filters include the following:</p> <ul> <li> <p> <code>db-cluster-backtrack-id</code> - Accepts backtrack identifiers. The results list includes information about only the backtracks identified by these identifiers.</p> </li> <li> <p> <code>db-cluster-backtrack-status</code> - Accepts any of the following backtrack status values:</p> <ul> <li> <p> <code>applying</code> </p> </li> <li> <p> <code>completed</code> </p> </li> <li> <p> <code>failed</code> </p> </li> <li> <p> <code>pending</code> </p> </li> </ul> <p>The results list includes information about only the backtracks identified by these values. For more information about backtrack status values, see <a>DBClusterBacktrack</a>.</p> </li> </ul>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <a>DescribeDBClusterBacktracks</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBClusterParameterGroupsMessage":{
      "type":"structure",
      "members":{
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of a specific DB cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBClusterParametersMessage":{
      "type":"structure",
      "required":["DBClusterParameterGroupName"],
      "members":{
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of a specific DB cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>"
        },
        "Source":{
          "shape":"String",
          "documentation":"<p> A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>. </p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBClusterSnapshotAttributesMessage":{
      "type":"structure",
      "required":["DBClusterSnapshotIdentifier"],
      "members":{
        "DBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the DB cluster snapshot to describe the attributes for.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBClusterSnapshotAttributesResult":{
      "type":"structure",
      "members":{
        "DBClusterSnapshotAttributesResult":{"shape":"DBClusterSnapshotAttributesResult"}
      }
    },
    "DescribeDBClusterSnapshotsMessage":{
      "type":"structure",
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case-sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBCluster.</p> </li> </ul>"
        },
        "DBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>"
        },
        "SnapshotType":{
          "shape":"String",
          "documentation":"<p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my AWS account.</p> </li> <li> <p> <code>manual</code> - Return all DB cluster snapshots that have been taken by my AWS account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my AWS account.</p> </li> <li> <p> <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public DB cluster snapshots with these results by setting the <code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>An optional pagination token provided by a previous <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "IncludeShared":{
          "shape":"Boolean",
          "documentation":"<p>True to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore, and otherwise false. The default is <code>false</code>.</p> <p>You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>"
        },
        "IncludePublic":{
          "shape":"Boolean",
          "documentation":"<p>True to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account, and otherwise false. The default is <code>false</code>. The default is false.</p> <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBClustersMessage":{
      "type":"structure",
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBClusterIdentifier.</p> </li> </ul>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>A filter that specifies one or more DB clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.</p> </li> </ul>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>An optional pagination token provided by a previous <a>DescribeDBClusters</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBEngineVersionsMessage":{
      "type":"structure",
      "members":{
        "Engine":{
          "shape":"String",
          "documentation":"<p>The database engine to return.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The database engine version to return.</p> <p>Example: <code>5.1.49</code> </p>"
        },
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>The name of a specific DB parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBParameterGroupFamily.</p> </li> </ul>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so that the following results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "DefaultOnly":{
          "shape":"Boolean",
          "documentation":"<p>Indicates that only the default version of the specified engine or engine and major version combination is returned.</p>"
        },
        "ListSupportedCharacterSets":{
          "shape":"BooleanOptional",
          "documentation":"<p>If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version. </p>"
        },
        "ListSupportedTimezones":{
          "shape":"BooleanOptional",
          "documentation":"<p>If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version. </p>"
        }
      }
    },
    "DescribeDBInstancesMessage":{
      "type":"structure",
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>A filter that specifies one or more DB instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list will only include information about the DB instances identified by these ARNs.</p> </li> </ul>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeDBInstances</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBLogFilesDetails":{
      "type":"structure",
      "members":{
        "LogFileName":{
          "shape":"String",
          "documentation":"<p>The name of the log file for the specified DB instance.</p>"
        },
        "LastWritten":{
          "shape":"Long",
          "documentation":"<p>A POSIX timestamp when the last log entry was written.</p>"
        },
        "Size":{
          "shape":"Long",
          "documentation":"<p>The size, in bytes, of the log file for the specified DB instance.</p>"
        }
      },
      "documentation":"<p>This data type is used as a response element to <a>DescribeDBLogFiles</a>.</p>"
    },
    "DescribeDBLogFilesList":{
      "type":"list",
      "member":{
        "shape":"DescribeDBLogFilesDetails",
        "locationName":"DescribeDBLogFilesDetails"
      }
    },
    "DescribeDBLogFilesMessage":{
      "type":"structure",
      "required":["DBInstanceIdentifier"],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The customer-assigned name of the DB instance that contains the log files you want to list.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>"
        },
        "FilenameContains":{
          "shape":"String",
          "documentation":"<p>Filters the available log files for log file names that contain the specified string.</p>"
        },
        "FileLastWritten":{
          "shape":"Long",
          "documentation":"<p>Filters the available log files for files written since the specified date, in POSIX timestamp format with milliseconds.</p>"
        },
        "FileSize":{
          "shape":"Long",
          "documentation":"<p>Filters the available log files for files larger than the specified size.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBLogFilesResponse":{
      "type":"structure",
      "members":{
        "DescribeDBLogFiles":{
          "shape":"DescribeDBLogFilesList",
          "documentation":"<p>The DB log files returned.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>A pagination token that can be used in a subsequent DescribeDBLogFiles request.</p>"
        }
      },
      "documentation":"<p> The response from a call to <a>DescribeDBLogFiles</a>. </p>"
    },
    "DescribeDBParameterGroupsMessage":{
      "type":"structure",
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBParametersMessage":{
      "type":"structure",
      "required":["DBParameterGroupName"],
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>"
        },
        "Source":{
          "shape":"String",
          "documentation":"<p>The parameter types to return.</p> <p>Default: All parameter types returned</p> <p>Valid Values: <code>user | system | engine-default</code> </p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeDBParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      }
    },
    "DescribeDBSecurityGroupsMessage":{
      "type":"structure",
      "members":{
        "DBSecurityGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB security group to return details for.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeDBSecurityGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBSnapshotAttributesMessage":{
      "type":"structure",
      "required":["DBSnapshotIdentifier"],
      "members":{
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the DB snapshot to describe the attributes for.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBSnapshotAttributesResult":{
      "type":"structure",
      "members":{
        "DBSnapshotAttributesResult":{"shape":"DBSnapshotAttributesResult"}
      }
    },
    "DescribeDBSnapshotsMessage":{
      "type":"structure",
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The ID of the DB instance to retrieve the list of DB snapshots for. This parameter can't be used in conjunction with <code>DBSnapshotIdentifier</code>. This parameter is not case-sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>"
        },
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p> A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with <code>DBInstanceIdentifier</code>. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>"
        },
        "SnapshotType":{
          "shape":"String",
          "documentation":"<p>The type of snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB snapshots that have been automatically taken by Amazon RDS for my AWS account.</p> </li> <li> <p> <code>manual</code> - Return all DB snapshots that have been taken by my AWS account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB snapshots that have been shared to my AWS account.</p> </li> <li> <p> <code>public</code> - Return all DB snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public snapshots with these results by setting the <code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeDBSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "IncludeShared":{
          "shape":"Boolean",
          "documentation":"<p>True to include shared manual DB snapshots from other AWS accounts that this AWS account has been given permission to copy or restore, and otherwise false. The default is <code>false</code>.</p> <p>You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the <a>ModifyDBSnapshotAttribute</a> API action.</p>"
        },
        "IncludePublic":{
          "shape":"Boolean",
          "documentation":"<p>True to include manual DB snapshots that are public and can be copied or restored by any AWS account, and otherwise false. The default is false.</p> <p>You can share a manual DB snapshot as public by using the <a>ModifyDBSnapshotAttribute</a> API.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeDBSubnetGroupsMessage":{
      "type":"structure",
      "members":{
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB subnet group to return details for.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEngineDefaultClusterParametersMessage":{
      "type":"structure",
      "required":["DBParameterGroupFamily"],
      "members":{
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster parameter group family to return engine parameter information for.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEngineDefaultClusterParametersResult":{
      "type":"structure",
      "members":{
        "EngineDefaults":{"shape":"EngineDefaults"}
      }
    },
    "DescribeEngineDefaultParametersMessage":{
      "type":"structure",
      "required":["DBParameterGroupFamily"],
      "members":{
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group family.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEngineDefaultParametersResult":{
      "type":"structure",
      "members":{
        "EngineDefaults":{"shape":"EngineDefaults"}
      }
    },
    "DescribeEventCategoriesMessage":{
      "type":"structure",
      "members":{
        "SourceType":{
          "shape":"String",
          "documentation":"<p>The type of source that is generating the events.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEventSubscriptionsMessage":{
      "type":"structure",
      "members":{
        "SubscriptionName":{
          "shape":"String",
          "documentation":"<p>The name of the RDS event notification subscription you want to describe.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEventsMessage":{
      "type":"structure",
      "members":{
        "SourceIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIdentifier is supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>"
        },
        "SourceType":{
          "shape":"SourceType",
          "documentation":"<p>The event source to retrieve events for. If no value is specified, all events are returned.</p>"
        },
        "StartTime":{
          "shape":"TStamp",
          "documentation":"<p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>"
        },
        "EndTime":{
          "shape":"TStamp",
          "documentation":"<p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>"
        },
        "Duration":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p>A list of event categories that trigger notifications for a event notification subscription.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeOptionGroupOptionsMessage":{
      "type":"structure",
      "required":["EngineName"],
      "members":{
        "EngineName":{
          "shape":"String",
          "documentation":"<p>A required parameter. Options available for the given engine name are described.</p>"
        },
        "MajorEngineVersion":{
          "shape":"String",
          "documentation":"<p>If specified, filters the results to include only options for the specified major engine version.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeOptionGroupsMessage":{
      "type":"structure",
      "members":{
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group to describe. Cannot be supplied together with EngineName or MajorEngineVersion.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous DescribeOptionGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "EngineName":{
          "shape":"String",
          "documentation":"<p>Filters the list of option groups to only include groups associated with a specific database engine.</p>"
        },
        "MajorEngineVersion":{
          "shape":"String",
          "documentation":"<p>Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeOrderableDBInstanceOptionsMessage":{
      "type":"structure",
      "required":["Engine"],
      "members":{
        "Engine":{
          "shape":"String",
          "documentation":"<p>The name of the engine to retrieve DB instance options for.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.</p>"
        },
        "Vpc":{
          "shape":"BooleanOptional",
          "documentation":"<p>The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribePendingMaintenanceActionsMessage":{
      "type":"structure",
      "members":{
        "ResourceIdentifier":{
          "shape":"String",
          "documentation":"<p>The ARN of a resource to return pending maintenance actions for.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>. </p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReservedDBInstancesMessage":{
      "type":"structure",
      "members":{
        "ReservedDBInstanceId":{
          "shape":"String",
          "documentation":"<p>The reserved DB instance identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID.</p>"
        },
        "ReservedDBInstancesOfferingId":{
          "shape":"String",
          "documentation":"<p>The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The DB instance class filter value. Specify this parameter to show only those reservations matching the specified DB instances class.</p>"
        },
        "Duration":{
          "shape":"String",
          "documentation":"<p>The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>"
        },
        "ProductDescription":{
          "shape":"String",
          "documentation":"<p>The product description filter value. Specify this parameter to show only those reservations matching the specified product description.</p>"
        },
        "OfferingType":{
          "shape":"String",
          "documentation":"<p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid Values: <code>\"Partial Upfront\" | \"All Upfront\" | \"No Upfront\" </code> </p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>The Multi-AZ filter value. Specify this parameter to show only those reservations matching the specified Multi-AZ parameter.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so that the following results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReservedDBInstancesOfferingsMessage":{
      "type":"structure",
      "members":{
        "ReservedDBInstancesOfferingId":{
          "shape":"String",
          "documentation":"<p>The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>"
        },
        "Duration":{
          "shape":"String",
          "documentation":"<p>Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>"
        },
        "ProductDescription":{
          "shape":"String",
          "documentation":"<p>Product description filter value. Specify this parameter to show only the available offerings that contain the specified product description.</p> <note> <p>The results show offerings that partially match the filter value.</p> </note>"
        },
        "OfferingType":{
          "shape":"String",
          "documentation":"<p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid Values: <code>\"Partial Upfront\" | \"All Upfront\" | \"No Upfront\" </code> </p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>The Multi-AZ filter value. Specify this parameter to show only the available offerings matching the specified Multi-AZ parameter.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so that the following results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeSourceRegionsMessage":{
      "type":"structure",
      "members":{
        "RegionName":{
          "shape":"String",
          "documentation":"<p>The source AWS Region name. For example, <code>us-east-1</code>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid AWS Region name.</p> </li> </ul>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>An optional pagination token provided by a previous <a>DescribeSourceRegions</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeValidDBInstanceModificationsMessage":{
      "type":"structure",
      "required":["DBInstanceIdentifier"],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The customer identifier or the ARN of your DB instance. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeValidDBInstanceModificationsResult":{
      "type":"structure",
      "members":{
        "ValidDBInstanceModificationsMessage":{"shape":"ValidDBInstanceModificationsMessage"}
      }
    },
    "DomainMembership":{
      "type":"structure",
      "members":{
        "Domain":{
          "shape":"String",
          "documentation":"<p>The identifier of the Active Directory Domain.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the DB instance's Active Directory Domain membership, such as joined, pending-join, failed etc).</p>"
        },
        "FQDN":{
          "shape":"String",
          "documentation":"<p>The fully qualified domain name of the Active Directory Domain.</p>"
        },
        "IAMRoleName":{
          "shape":"String",
          "documentation":"<p>The name of the IAM role to be used when making API calls to the Directory Service.</p>"
        }
      },
      "documentation":"<p>An Active Directory Domain membership record associated with the DB instance.</p>"
    },
    "DomainMembershipList":{
      "type":"list",
      "member":{
        "shape":"DomainMembership",
        "locationName":"DomainMembership"
      },
      "documentation":"<p>List of Active Directory Domain membership records associated with a DB instance.</p>"
    },
    "DomainNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>Domain</i> doesn't refer to an existing Active Directory domain. </p>",
      "error":{
        "code":"DomainNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "Double":{"type":"double"},
    "DoubleOptional":{"type":"double"},
    "DoubleRange":{
      "type":"structure",
      "members":{
        "From":{
          "shape":"Double",
          "documentation":"<p>The minimum value in the range.</p>"
        },
        "To":{
          "shape":"Double",
          "documentation":"<p>The maximum value in the range.</p>"
        }
      },
      "documentation":"<p>A range of double values.</p>"
    },
    "DoubleRangeList":{
      "type":"list",
      "member":{
        "shape":"DoubleRange",
        "locationName":"DoubleRange"
      }
    },
    "DownloadDBLogFilePortionDetails":{
      "type":"structure",
      "members":{
        "LogFileData":{
          "shape":"String",
          "documentation":"<p>Entries from the specified log file.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>A pagination token that can be used in a subsequent DownloadDBLogFilePortion request.</p>"
        },
        "AdditionalDataPending":{
          "shape":"Boolean",
          "documentation":"<p>Boolean value that if true, indicates there is more data to be downloaded.</p>"
        }
      },
      "documentation":"<p>This data type is used as a response element to <a>DownloadDBLogFilePortion</a>.</p>"
    },
    "DownloadDBLogFilePortionMessage":{
      "type":"structure",
      "required":[
        "DBInstanceIdentifier",
        "LogFileName"
      ],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The customer-assigned name of the DB instance that contains the log files you want to list.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>"
        },
        "LogFileName":{
          "shape":"String",
          "documentation":"<p>The name of the log file to be downloaded.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>The pagination token provided in the previous request or \"0\". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines.</p>"
        },
        "NumberOfLines":{
          "shape":"Integer",
          "documentation":"<p>The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size.</p> <p>If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning or the end of the log file, depending on the value of the Marker parameter.</p> <ul> <li> <p>If neither Marker or NumberOfLines are specified, the entire log file is returned up to a maximum of 10000 lines, starting with the most recent log entries first.</p> </li> <li> <p>If NumberOfLines is specified and Marker is not specified, then the most recent lines from the end of the log file are returned.</p> </li> <li> <p>If Marker is specified as \"0\", then the specified number of lines from the beginning of the log file are returned.</p> </li> <li> <p>You can download the log file in blocks of lines by specifying the size of the block using the NumberOfLines parameter, and by specifying a value of \"0\" for the Marker parameter in your first request. Include the Marker value returned in the response as the Marker value for the next request, continuing until the AdditionalDataPending response element returns false.</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "EC2SecurityGroup":{
      "type":"structure",
      "members":{
        "Status":{
          "shape":"String",
          "documentation":"<p>Provides the status of the EC2 security group. Status can be \"authorizing\", \"authorized\", \"revoking\", and \"revoked\".</p>"
        },
        "EC2SecurityGroupName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the EC2 security group.</p>"
        },
        "EC2SecurityGroupId":{
          "shape":"String",
          "documentation":"<p>Specifies the id of the EC2 security group.</p>"
        },
        "EC2SecurityGroupOwnerId":{
          "shape":"String",
          "documentation":"<p> Specifies the AWS ID of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> field. </p>"
        }
      },
      "documentation":"<p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>AuthorizeDBSecurityGroupIngress</a> </p> </li> <li> <p> <a>DescribeDBSecurityGroups</a> </p> </li> <li> <p> <a>RevokeDBSecurityGroupIngress</a> </p> </li> </ul>"
    },
    "EC2SecurityGroupList":{
      "type":"list",
      "member":{
        "shape":"EC2SecurityGroup",
        "locationName":"EC2SecurityGroup"
      }
    },
    "Endpoint":{
      "type":"structure",
      "members":{
        "Address":{
          "shape":"String",
          "documentation":"<p>Specifies the DNS address of the DB instance.</p>"
        },
        "Port":{
          "shape":"Integer",
          "documentation":"<p>Specifies the port that the database engine is listening on.</p>"
        },
        "HostedZoneId":{
          "shape":"String",
          "documentation":"<p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>"
        }
      },
      "documentation":"<p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DescribeDBInstances</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> </ul>"
    },
    "EngineDefaults":{
      "type":"structure",
      "members":{
        "DBParameterGroupFamily":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the DB parameter group family that the engine default parameters apply to.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous EngineDefaults request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>"
        },
        "Parameters":{
          "shape":"ParametersList",
          "documentation":"<p>Contains a list of engine default parameters.</p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. </p>",
      "wrapper":true
    },
    "EngineModeList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "Event":{
      "type":"structure",
      "members":{
        "SourceIdentifier":{
          "shape":"String",
          "documentation":"<p>Provides the identifier for the source of the event.</p>"
        },
        "SourceType":{
          "shape":"SourceType",
          "documentation":"<p>Specifies the source type for this event.</p>"
        },
        "Message":{
          "shape":"String",
          "documentation":"<p>Provides the text of this event.</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p>Specifies the category for the event.</p>"
        },
        "Date":{
          "shape":"TStamp",
          "documentation":"<p>Specifies the date and time of the event.</p>"
        },
        "SourceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the event.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the <a>DescribeEvents</a> action. </p>"
    },
    "EventCategoriesList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"EventCategory"
      }
    },
    "EventCategoriesMap":{
      "type":"structure",
      "members":{
        "SourceType":{
          "shape":"String",
          "documentation":"<p>The source type that the returned categories belong to</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p>The event categories for the specified source type</p>"
        }
      },
      "documentation":"<p>Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.</p>",
      "wrapper":true
    },
    "EventCategoriesMapList":{
      "type":"list",
      "member":{
        "shape":"EventCategoriesMap",
        "locationName":"EventCategoriesMap"
      }
    },
    "EventCategoriesMessage":{
      "type":"structure",
      "members":{
        "EventCategoriesMapList":{
          "shape":"EventCategoriesMapList",
          "documentation":"<p>A list of EventCategoriesMap data types.</p>"
        }
      },
      "documentation":"<p>Data returned from the <b>DescribeEventCategories</b> action.</p>"
    },
    "EventList":{
      "type":"list",
      "member":{
        "shape":"Event",
        "locationName":"Event"
      }
    },
    "EventSubscription":{
      "type":"structure",
      "members":{
        "CustomerAwsId":{
          "shape":"String",
          "documentation":"<p>The AWS customer account associated with the RDS event notification subscription.</p>"
        },
        "CustSubscriptionId":{
          "shape":"String",
          "documentation":"<p>The RDS event notification subscription Id.</p>"
        },
        "SnsTopicArn":{
          "shape":"String",
          "documentation":"<p>The topic ARN of the RDS event notification subscription.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the RDS event notification subscription.</p> <p>Constraints:</p> <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p> <p>The status \"no-permission\" indicates that RDS no longer has permission to post to the SNS topic. The status \"topic-not-exist\" indicates that the topic was deleted after the subscription was created.</p>"
        },
        "SubscriptionCreationTime":{
          "shape":"String",
          "documentation":"<p>The time the RDS event notification subscription was created.</p>"
        },
        "SourceType":{
          "shape":"String",
          "documentation":"<p>The source type for the RDS event notification subscription.</p>"
        },
        "SourceIdsList":{
          "shape":"SourceIdsList",
          "documentation":"<p>A list of source IDs for the RDS event notification subscription.</p>"
        },
        "EventCategoriesList":{
          "shape":"EventCategoriesList",
          "documentation":"<p>A list of event categories for the RDS event notification subscription.</p>"
        },
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean value indicating if the subscription is enabled. True indicates the subscription is enabled.</p>"
        },
        "EventSubscriptionArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the event subscription.</p>"
        }
      },
      "documentation":"<p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>",
      "wrapper":true
    },
    "EventSubscriptionQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have reached the maximum number of event subscriptions.</p>",
      "error":{
        "code":"EventSubscriptionQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "EventSubscriptionsList":{
      "type":"list",
      "member":{
        "shape":"EventSubscription",
        "locationName":"EventSubscription"
      }
    },
    "EventSubscriptionsMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "EventSubscriptionsList":{
          "shape":"EventSubscriptionsList",
          "documentation":"<p>A list of EventSubscriptions data types.</p>"
        }
      },
      "documentation":"<p>Data returned by the <b>DescribeEventSubscriptions</b> action.</p>"
    },
    "EventsMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous Events request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>"
        },
        "Events":{
          "shape":"EventList",
          "documentation":"<p> A list of <a>Event</a> instances. </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeEvents</a> action. </p>"
    },
    "FailoverDBClusterMessage":{
      "type":"structure",
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>A DB cluster identifier to force a failover for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>"
        },
        "TargetDBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Aurora Replica in the DB cluster. For example, <code>mydbcluster-replica1</code>.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "FailoverDBClusterResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "Filter":{
      "type":"structure",
      "required":[
        "Name",
        "Values"
      ],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the filter. Filter names are case-sensitive.</p>"
        },
        "Values":{
          "shape":"FilterValueList",
          "documentation":"<p>One or more filter values. Filter values are case-sensitive.</p>"
        }
      },
      "documentation":"<p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as IDs. The filters supported by a describe operation are documented with the describe operation.</p> <note> <p>Currently, wildcards are not supported in filters.</p> </note> <p>The following actions can be filtered:</p> <ul> <li> <p> <a>DescribeDBClusterBacktracks</a> </p> </li> <li> <p> <a>DescribeDBClusters</a> </p> </li> <li> <p> <a>DescribeDBInstances</a> </p> </li> <li> <p> <a>DescribePendingMaintenanceActions</a> </p> </li> </ul>"
    },
    "FilterList":{
      "type":"list",
      "member":{
        "shape":"Filter",
        "locationName":"Filter"
      }
    },
    "FilterValueList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"Value"
      }
    },
    "IPRange":{
      "type":"structure",
      "members":{
        "Status":{
          "shape":"String",
          "documentation":"<p>Specifies the status of the IP range. Status can be \"authorizing\", \"authorized\", \"revoking\", and \"revoked\".</p>"
        },
        "CIDRIP":{
          "shape":"String",
          "documentation":"<p>Specifies the IP range.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the <a>DescribeDBSecurityGroups</a> action. </p>"
    },
    "IPRangeList":{
      "type":"list",
      "member":{
        "shape":"IPRange",
        "locationName":"IPRange"
      }
    },
    "InstanceQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request would result in the user exceeding the allowed number of DB instances.</p>",
      "error":{
        "code":"InstanceQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InsufficientDBClusterCapacityFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB cluster doesn't have enough capacity for the current operation.</p>",
      "error":{
        "code":"InsufficientDBClusterCapacityFault",
        "httpStatusCode":403,
        "senderFault":true
      },
      "exception":true
    },
    "InsufficientDBInstanceCapacityFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified DB instance class isn't available in the specified Availability Zone.</p>",
      "error":{
        "code":"InsufficientDBInstanceCapacity",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InsufficientStorageClusterCapacityFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>There is insufficient storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>",
      "error":{
        "code":"InsufficientStorageClusterCapacity",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "Integer":{"type":"integer"},
    "IntegerOptional":{"type":"integer"},
    "InvalidDBClusterCapacityFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>Capacity</i> isn't a valid Aurora Serverless DB cluster capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>",
      "error":{
        "code":"InvalidDBClusterCapacityFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBClusterSnapshotStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The supplied value isn't a valid DB cluster snapshot state.</p>",
      "error":{
        "code":"InvalidDBClusterSnapshotStateFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBClusterStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB cluster isn't in a valid state.</p>",
      "error":{
        "code":"InvalidDBClusterStateFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBInstanceStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB instance isn't in a valid state.</p>",
      "error":{
        "code":"InvalidDBInstanceState",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBParameterGroupStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.</p>",
      "error":{
        "code":"InvalidDBParameterGroupState",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBSecurityGroupStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The state of the DB security group doesn't allow deletion.</p>",
      "error":{
        "code":"InvalidDBSecurityGroupState",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBSnapshotStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The state of the DB snapshot doesn't allow deletion.</p>",
      "error":{
        "code":"InvalidDBSnapshotState",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBSubnetGroupFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DBSubnetGroup doesn't belong to the same VPC as that of an existing cross-region read replica of the same source instance.</p>",
      "error":{
        "code":"InvalidDBSubnetGroupFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBSubnetGroupStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB subnet group cannot be deleted because it's in use.</p>",
      "error":{
        "code":"InvalidDBSubnetGroupStateFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBSubnetStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> The DB subnet isn't in the <i>available</i> state. </p>",
      "error":{
        "code":"InvalidDBSubnetStateFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidEventSubscriptionStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This error can occur if someone else is modifying a subscription. You should retry the action.</p>",
      "error":{
        "code":"InvalidEventSubscriptionState",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidOptionGroupStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> The option group isn't in the <i>available</i> state. </p>",
      "error":{
        "code":"InvalidOptionGroupStateFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidRestoreFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Cannot restore from VPC backup to non-VPC DB instance.</p>",
      "error":{
        "code":"InvalidRestoreFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidS3BucketFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>",
      "error":{
        "code":"InvalidS3BucketFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidSubnet":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>",
      "error":{
        "code":"InvalidSubnet",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidVPCNetworkStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>",
      "error":{
        "code":"InvalidVPCNetworkStateFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "KMSKeyNotAccessibleFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An error occurred accessing an AWS KMS key.</p>",
      "error":{
        "code":"KMSKeyNotAccessibleFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "KeyList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "ListTagsForResourceMessage":{
      "type":"structure",
      "required":["ResourceName"],
      "members":{
        "ResourceName":{
          "shape":"String",
          "documentation":"<p>The Amazon RDS resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing\"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "LogTypeList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "Long":{"type":"long"},
    "LongOptional":{"type":"long"},
    "ModifyCurrentDBClusterCapacityMessage":{
      "type":"structure",
      "required":["DBClusterIdentifier"],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DB cluster.</p> </li> </ul>"
        },
        "Capacity":{
          "shape":"IntegerOptional",
          "documentation":"<p>The DB cluster capacity.</p> <p>Constraints:</p> <ul> <li> <p>Value must be <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, or <code>256</code>.</p> </li> </ul>"
        },
        "SecondsBeforeTimeout":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of time, in seconds, that Aurora Serverless tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.</p> <ul> <li> <p>Value must be from 10 through 600.</p> </li> </ul>"
        },
        "TimeoutAction":{
          "shape":"String",
          "documentation":"<p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p> <p> <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p> <p> <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point is not found in the timeout period.</p>"
        }
      }
    },
    "ModifyDBClusterMessage":{
      "type":"structure",
      "required":["DBClusterIdentifier"],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>"
        },
        "NewDBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>"
        },
        "ApplyImmediately":{
          "shape":"Boolean",
          "documentation":"<p>A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set to <code>false</code>, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values. If you set the <code>ApplyImmediately</code> parameter value to false, then changes to the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>"
        },
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster parameter group to use for the DB cluster.</p>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of VPC security groups that the DB cluster will belong to.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>The new password for the master database user. This password can contain any printable ASCII character except \"/\", \"\"\", or \"@\".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>A value that indicates that the DB cluster should be associated with the specified option group. Changing this parameter doesn't result in an outage except in the following case, and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request. If the parameter change results in an option group that enables OEM, this change can cause a brief (sub-second) period during which new connections are rejected but existing connections are not interrupted. </p> <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora\"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora\"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>"
        },
        "BacktrackWindow":{
          "shape":"LongOptional",
          "documentation":"<p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>"
        },
        "CloudwatchLogsExportConfiguration":{
          "shape":"CloudwatchLogsExportConfiguration",
          "documentation":"<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true.</p> <p>For a list of valid engine versions, see <a>CreateDBCluster</a>, or call <a>DescribeDBEngineVersions</a>.</p>"
        },
        "ScalingConfiguration":{
          "shape":"ScalingConfiguration",
          "documentation":"<p>The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in <code>serverless</code> DB engine mode.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyDBClusterParameterGroupMessage":{
      "type":"structure",
      "required":[
        "DBClusterParameterGroupName",
        "Parameters"
      ],
      "members":{
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster parameter group to modify.</p>"
        },
        "Parameters":{
          "shape":"ParametersList",
          "documentation":"<p>A list of parameters in the DB cluster parameter group to modify.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyDBClusterResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "ModifyDBClusterSnapshotAttributeMessage":{
      "type":"structure",
      "required":[
        "DBClusterSnapshotIdentifier",
        "AttributeName"
      ],
      "members":{
        "DBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the DB cluster snapshot to modify the attributes for.</p>"
        },
        "AttributeName":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster snapshot attribute to modify.</p> <p>To manage authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this value to <code>restore</code>.</p>"
        },
        "ValuesToAdd":{
          "shape":"AttributeValueList",
          "documentation":"<p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by any AWS account. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts.</p>"
        },
        "ValuesToRemove":{
          "shape":"AttributeValueList",
          "documentation":"<p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account identifiers, or <code>all</code> to remove authorization for any AWS account to copy or restore the DB cluster snapshot. If you specify <code>all</code>, an AWS account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyDBClusterSnapshotAttributeResult":{
      "type":"structure",
      "members":{
        "DBClusterSnapshotAttributesResult":{"shape":"DBClusterSnapshotAttributesResult"}
      }
    },
    "ModifyDBInstanceMessage":{
      "type":"structure",
      "required":["DBInstanceIdentifier"],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>"
        },
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p>The new amount of storage (in gibibytes) to allocate for the DB instance. </p> <p>For MariaDB, MySQL, Oracle, and PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value. </p> <p>For the valid values for allocated storage for each engine, see <a>CreateDBInstance</a>. </p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html\">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request. </p> <p>Default: Uses existing setting</p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC. If your DB instance is not in a VPC, you can also use this parameter to move your DB instance into a VPC. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Non-VPC2VPC\">Updating the VPC for a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify <code>true</code> for the <code>ApplyImmediately</code> parameter. </p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetGroup</code> </p>"
        },
        "DBSecurityGroups":{
          "shape":"DBSecurityGroupNameList",
          "documentation":"<p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing DBSecurityGroups.</p> </li> </ul>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing VpcSecurityGroupIds.</p> </li> </ul>"
        },
        "ApplyImmediately":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance. </p> <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot. Review the table of parameters in <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html\">Modifying a DB Instance and Using the Apply Immediately Parameter</a> in the <i>Amazon RDS User Guide.</i> to see the impact that setting <code>ApplyImmediately</code> to <code>true</code> or <code>false</code> has for each modified parameter and to determine when the changes are applied. </p> <p>Default: <code>false</code> </p>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>The new password for the master user. The password can include any printable ASCII character except \"/\", \"\"\", or \"@\".</p> <p> Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the <code>MasterUserPassword</code> element exists in the <code>PendingModifiedValues</code> element of the operation response. </p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The password for the master user is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>. </p> <p>Default: Uses existing setting</p> <p> <b>MariaDB</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Microsoft SQL Server</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p> <p> <b>MySQL</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Oracle</b> </p> <p>Constraints: Must contain from 8 to 30 characters.</p> <p> <b>PostgreSQL</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p> <note> <p>Amazon RDS API actions never return the password, so this action provides a way to regain access to a primary instance user if the password is lost. This includes restoring privileges that might have been accidentally revoked. </p> </note>"
        },
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window.</p> <p>Default: Uses existing setting</p> <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p> <p>Changing this parameter can result in an outage if you change from 0 to a non-zero value or from a non-zero value to 0. These changes are applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request. If you change the parameter from one non-zero value to another non-zero value, the change is asynchronously applied as soon as possible.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: Uses existing setting</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Can be specified for a MySQL Read Replica only if the source is running MySQL 5.6</p> </li> <li> <p>Can be specified for a PostgreSQL Read Replica only if the source is running PostgreSQL 9.3.5</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p> The daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code> parameter. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. </p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format hh24:mi-hh24:mi</p> </li> <li> <p>Must be in Universal Time Coordinated (UTC)</p> </li> <li> <p>Must not conflict with the preferred maintenance window</p> </li> <li> <p>Must be at least 30 minutes</p> </li> </ul>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request. </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p> The version number of the database engine to upgrade to. Changing this parameter results in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request. </p> <p>For major version upgrades, if a nondefault DB parameter group is currently in use, a new DB parameter group in the DB parameter group family for the new engine version must be specified. The new DB parameter group can be the default for that DB parameter group family.</p> <p>For information about valid engine versions, see <a>CreateDBInstance</a>, or call <a>DescribeDBEngineVersions</a>.</p>"
        },
        "AllowMajorVersionUpgrade":{
          "shape":"Boolean",
          "documentation":"<p>Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints: This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.</p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p> Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and RDS has enabled auto patching for that engine version. </p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>The license model for the DB instance.</p> <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>The new Provisioned IOPS (I/O operations per second) value for the RDS instance. </p> <p>Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request. If you are migrating from Provisioned IOPS to standard storage, set this value to 0. The DB instance will require a reboot for the change in storage type to take effect. </p> <p>If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a Read Replica for the instance, and creating a DB snapshot of the instance. </p> <p>Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value. </p> <p>Default: Uses existing setting</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p> Indicates that the DB instance should be associated with the specified option group. Changing this parameter doesn't result in an outage except in the following case and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request. If the parameter change results in an option group that enables OEM, this change can cause a brief (sub-second) period during which new connections are rejected but existing connections are not interrupted. </p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>"
        },
        "NewDBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p> The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set <code>Apply Immediately</code> to true, or will occur during the next maintenance window if <code>Apply Immediately</code> to false. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type to be associated with the DB instance. </p> <p>If you specify Provisioned IOPS (<code>io1</code>), you must also include a value for the <code>Iops</code> parameter. </p> <p>If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a Read Replica for the instance, and creating a DB snapshot of the instance. </p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p>Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>standard</code> </p>"
        },
        "TdeCredentialArn":{
          "shape":"String",
          "documentation":"<p>The ARN from the key store with which to associate the instance for TDE encryption.</p>"
        },
        "TdeCredentialPassword":{
          "shape":"String",
          "documentation":"<p>The password for the given ARN from the key store in order to access the device.</p>"
        },
        "CACertificateIdentifier":{
          "shape":"String",
          "documentation":"<p>Indicates the certificate that needs to be associated with the instance.</p>"
        },
        "Domain":{
          "shape":"String",
          "documentation":"<p>The Active Directory Domain to move the instance to. Specify <code>none</code> to remove the instance from its current domain. The domain must be created prior to this operation. Currently only a Microsoft SQL Server instance can be created in a Active Directory Domain. </p>"
        },
        "CopyTagsToSnapshot":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.</p>"
        },
        "MonitoringInterval":{
          "shape":"IntegerOptional",
          "documentation":"<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>"
        },
        "DBPortNumber":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the database accepts connections.</p> <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option group for the DB instance.</p> <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p> <b>MySQL</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p> <b>MariaDB</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p> <b>PostgreSQL</b> </p> <p> Default: <code>5432</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>Oracle</b> </p> <p> Default: <code>1521</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p> <b>SQL Server</b> </p> <p> Default: <code>1433</code> </p> <p> Valid Values: <code>1150-65535</code> except for <code>1434</code>, <code>3389</code>, <code>47001</code>, <code>49152</code>, and <code>49152</code> through <code>49156</code>. </p> <p> <b>Amazon Aurora</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p>Boolean value that indicates if the DB instance has a publicly resolvable DNS name. Set to <code>True</code> to make the DB instance Internet-facing with a publicly resolvable DNS name, which resolves to a public IP address. Set to <code>False</code> to make the DB instance internal with a DNS name that resolves to a private IP address. </p> <p> <code>PubliclyAccessible</code> only applies to DB instances in a VPC. The DB instance must be part of a public subnet and <code>PubliclyAccessible</code> must be true in order for it to be publicly accessible. </p> <p>Changes to the <code>PubliclyAccessible</code> parameter are applied immediately regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: false</p>"
        },
        "MonitoringRoleArn":{
          "shape":"String",
          "documentation":"<p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, go to <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole\">To create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i> </p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>"
        },
        "DomainIAMRoleName":{
          "shape":"String",
          "documentation":"<p>The name of the IAM role to use when making API calls to the Directory Service.</p>"
        },
        "PromotionTier":{
          "shape":"IntegerOptional",
          "documentation":"<p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance\"> Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p> <b>MySQL</b> </p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> </ul> <p>Default: <code>false</code> </p>"
        },
        "EnablePerformanceInsights":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable Performance Insights for the DB instance, and otherwise false.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html\">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service User Guide</i>. </p>"
        },
        "PerformanceInsightsKMSKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>"
        },
        "PerformanceInsightsRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>"
        },
        "CloudwatchLogsExportConfiguration":{
          "shape":"CloudwatchLogsExportConfiguration",
          "documentation":"<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance.</p>"
        },
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>"
        },
        "UseDefaultProcessorFeatures":{
          "shape":"BooleanOptional",
          "documentation":"<p>A value that specifies that the DB instance class of the DB instance uses its default processor features.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyDBInstanceResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "ModifyDBParameterGroupMessage":{
      "type":"structure",
      "required":[
        "DBParameterGroupName",
        "Parameters"
      ],
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>"
        },
        "Parameters":{
          "shape":"ParametersList",
          "documentation":"<p>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for the application method): <code>immediate | pending-reboot</code> </p> <note> <p>You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</p> </note>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyDBSnapshotAttributeMessage":{
      "type":"structure",
      "required":[
        "DBSnapshotIdentifier",
        "AttributeName"
      ],
      "members":{
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the DB snapshot to modify the attributes for.</p>"
        },
        "AttributeName":{
          "shape":"String",
          "documentation":"<p>The name of the DB snapshot attribute to modify.</p> <p>To manage authorization for other AWS accounts to copy or restore a manual DB snapshot, set this value to <code>restore</code>.</p>"
        },
        "ValuesToAdd":{
          "shape":"AttributeValueList",
          "documentation":"<p>A list of DB snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other AWS accounts to copy or restore a manual snapshot, set this list to include one or more AWS account IDs, or <code>all</code> to make the manual DB snapshot restorable by any AWS account. Do not add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all AWS accounts.</p>"
        },
        "ValuesToRemove":{
          "shape":"AttributeValueList",
          "documentation":"<p>A list of DB snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other AWS accounts to copy or restore a manual snapshot, set this list to include one or more AWS account identifiers, or <code>all</code> to remove authorization for any AWS account to copy or restore the DB snapshot. If you specify <code>all</code>, an AWS account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore the manual DB snapshot.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyDBSnapshotAttributeResult":{
      "type":"structure",
      "members":{
        "DBSnapshotAttributesResult":{"shape":"DBSnapshotAttributesResult"}
      }
    },
    "ModifyDBSnapshotMessage":{
      "type":"structure",
      "required":["DBSnapshotIdentifier"],
      "members":{
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB snapshot to modify.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version to upgrade the DB snapshot to. </p> <p>The following are the database engines and engine versions that are available when you upgrade a DB snapshot. </p> <p> <b>MySQL</b> </p> <ul> <li> <p> <code>5.5.46</code> (supported for 5.1 DB snapshots)</p> </li> </ul> <p> <b>Oracle</b> </p> <ul> <li> <p> <code>12.1.0.2.v8</code> (supported for 12.1.0.1 DB snapshots)</p> </li> <li> <p> <code>11.2.0.4.v12</code> (supported for 11.2.0.2 DB snapshots)</p> </li> <li> <p> <code>11.2.0.4.v11</code> (supported for 11.2.0.3 DB snapshots)</p> </li> </ul>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The option group to identify with the upgraded DB snapshot. </p> <p>You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG\">Option Group Considerations</a> in the <i>Amazon RDS User Guide.</i> </p>"
        }
      }
    },
    "ModifyDBSnapshotResult":{
      "type":"structure",
      "members":{
        "DBSnapshot":{"shape":"DBSnapshot"}
      }
    },
    "ModifyDBSubnetGroupMessage":{
      "type":"structure",
      "required":[
        "DBSubnetGroupName",
        "SubnetIds"
      ],
      "members":{
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "DBSubnetGroupDescription":{
          "shape":"String",
          "documentation":"<p>The description for the DB subnet group.</p>"
        },
        "SubnetIds":{
          "shape":"SubnetIdentifierList",
          "documentation":"<p>The EC2 subnet IDs for the DB subnet group.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyDBSubnetGroupResult":{
      "type":"structure",
      "members":{
        "DBSubnetGroup":{"shape":"DBSubnetGroup"}
      }
    },
    "ModifyEventSubscriptionMessage":{
      "type":"structure",
      "required":["SubscriptionName"],
      "members":{
        "SubscriptionName":{
          "shape":"String",
          "documentation":"<p>The name of the RDS event notification subscription.</p>"
        },
        "SnsTopicArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>"
        },
        "SourceType":{
          "shape":"String",
          "documentation":"<p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p> A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType in the <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html\">Events</a> topic in the <i>Amazon RDS User Guide</i> or by using the <b>DescribeEventCategories</b> action. </p>"
        },
        "Enabled":{
          "shape":"BooleanOptional",
          "documentation":"<p> A Boolean value; set to <b>true</b> to activate the subscription. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyEventSubscriptionResult":{
      "type":"structure",
      "members":{
        "EventSubscription":{"shape":"EventSubscription"}
      }
    },
    "ModifyOptionGroupMessage":{
      "type":"structure",
      "required":["OptionGroupName"],
      "members":{
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group to be modified.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>"
        },
        "OptionsToInclude":{
          "shape":"OptionConfigurationList",
          "documentation":"<p>Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration.</p>"
        },
        "OptionsToRemove":{
          "shape":"OptionNamesList",
          "documentation":"<p>Options in this list are removed from the option group.</p>"
        },
        "ApplyImmediately":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the changes should be applied immediately, or during the next maintenance window for each instance associated with the option group.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyOptionGroupResult":{
      "type":"structure",
      "members":{
        "OptionGroup":{"shape":"OptionGroup"}
      }
    },
    "Option":{
      "type":"structure",
      "members":{
        "OptionName":{
          "shape":"String",
          "documentation":"<p>The name of the option.</p>"
        },
        "OptionDescription":{
          "shape":"String",
          "documentation":"<p>The description of the option.</p>"
        },
        "Persistent":{
          "shape":"Boolean",
          "documentation":"<p>Indicate if this option is persistent.</p>"
        },
        "Permanent":{
          "shape":"Boolean",
          "documentation":"<p>Indicate if this option is permanent.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>If required, the port configured for this option to use.</p>"
        },
        "OptionVersion":{
          "shape":"String",
          "documentation":"<p>The version of the option.</p>"
        },
        "OptionSettings":{
          "shape":"OptionSettingConfigurationList",
          "documentation":"<p>The option settings for this option.</p>"
        },
        "DBSecurityGroupMemberships":{
          "shape":"DBSecurityGroupMembershipList",
          "documentation":"<p>If the option requires access to a port, then this DB security group allows access to the port.</p>"
        },
        "VpcSecurityGroupMemberships":{
          "shape":"VpcSecurityGroupMembershipList",
          "documentation":"<p>If the option requires access to a port, then this VPC security group allows access to the port.</p>"
        }
      },
      "documentation":"<p>Option details.</p>"
    },
    "OptionConfiguration":{
      "type":"structure",
      "required":["OptionName"],
      "members":{
        "OptionName":{
          "shape":"String",
          "documentation":"<p>The configuration of options to include in a group.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The optional port for the option.</p>"
        },
        "OptionVersion":{
          "shape":"String",
          "documentation":"<p>The version for the option.</p>"
        },
        "DBSecurityGroupMemberships":{
          "shape":"DBSecurityGroupNameList",
          "documentation":"<p>A list of DBSecurityGroupMemebrship name strings used for this option.</p>"
        },
        "VpcSecurityGroupMemberships":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of VpcSecurityGroupMemebrship name strings used for this option.</p>"
        },
        "OptionSettings":{
          "shape":"OptionSettingsList",
          "documentation":"<p>The option settings to include in an option group.</p>"
        }
      },
      "documentation":"<p>A list of all available options</p>"
    },
    "OptionConfigurationList":{
      "type":"list",
      "member":{
        "shape":"OptionConfiguration",
        "locationName":"OptionConfiguration"
      }
    },
    "OptionGroup":{
      "type":"structure",
      "members":{
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the option group.</p>"
        },
        "OptionGroupDescription":{
          "shape":"String",
          "documentation":"<p>Provides a description of the option group.</p>"
        },
        "EngineName":{
          "shape":"String",
          "documentation":"<p>Indicates the name of the engine that this option group can be applied to.</p>"
        },
        "MajorEngineVersion":{
          "shape":"String",
          "documentation":"<p>Indicates the major engine version associated with this option group.</p>"
        },
        "Options":{
          "shape":"OptionsList",
          "documentation":"<p>Indicates what options are available in the option group.</p>"
        },
        "AllowsVpcAndNonVpcInstanceMemberships":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether this option group can be applied to both VPC and non-VPC instances. The value <code>true</code> indicates the option group can be applied to both VPC and non-VPC instances. </p>"
        },
        "VpcId":{
          "shape":"String",
          "documentation":"<p>If <b>AllowsVpcAndNonVpcInstanceMemberships</b> is <code>false</code>, this field is blank. If <b>AllowsVpcAndNonVpcInstanceMemberships</b> is <code>true</code> and this field is blank, then this option group can be applied to both VPC and non-VPC instances. If this field contains a value, then this option group can only be applied to instances that are in the VPC indicated by this field. </p>"
        },
        "OptionGroupArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the option group.</p>"
        }
      },
      "documentation":"<p/>",
      "wrapper":true
    },
    "OptionGroupAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The option group you are trying to create already exists.</p>",
      "error":{
        "code":"OptionGroupAlreadyExistsFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "OptionGroupMembership":{
      "type":"structure",
      "members":{
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group that the instance belongs to.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the DB instance's option group membership. Valid values are: <code>in-sync</code>, <code>pending-apply</code>, <code>pending-removal</code>, <code>pending-maintenance-apply</code>, <code>pending-maintenance-removal</code>, <code>applying</code>, <code>removing</code>, and <code>failed</code>. </p>"
        }
      },
      "documentation":"<p>Provides information on the option groups the DB instance is a member of.</p>"
    },
    "OptionGroupMembershipList":{
      "type":"list",
      "member":{
        "shape":"OptionGroupMembership",
        "locationName":"OptionGroupMembership"
      }
    },
    "OptionGroupNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified option group could not be found.</p>",
      "error":{
        "code":"OptionGroupNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "OptionGroupOption":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the option.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The description of the option.</p>"
        },
        "EngineName":{
          "shape":"String",
          "documentation":"<p>The name of the engine that this option can be applied to.</p>"
        },
        "MajorEngineVersion":{
          "shape":"String",
          "documentation":"<p>Indicates the major engine version that the option is available for.</p>"
        },
        "MinimumRequiredMinorEngineVersion":{
          "shape":"String",
          "documentation":"<p>The minimum required engine version for the option to be applied.</p>"
        },
        "PortRequired":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the option requires a port.</p>"
        },
        "DefaultPort":{
          "shape":"IntegerOptional",
          "documentation":"<p>If the option requires a port, specifies the default port for the option.</p>"
        },
        "OptionsDependedOn":{
          "shape":"OptionsDependedOn",
          "documentation":"<p>The options that are prerequisites for this option.</p>"
        },
        "OptionsConflictsWith":{
          "shape":"OptionsConflictsWith",
          "documentation":"<p>The options that conflict with this option.</p>"
        },
        "Persistent":{
          "shape":"Boolean",
          "documentation":"<p>Persistent options can't be removed from an option group while DB instances are associated with the option group. If you disassociate all DB instances from the option group, your can remove the persistent option from the option group.</p>"
        },
        "Permanent":{
          "shape":"Boolean",
          "documentation":"<p>Permanent options can never be removed from an option group. An option group containing a permanent option can't be removed from a DB instance.</p>"
        },
        "RequiresAutoMinorEngineVersionUpgrade":{
          "shape":"Boolean",
          "documentation":"<p>If true, you must enable the Auto Minor Version Upgrade setting for your DB instance before you can use this option. You can enable Auto Minor Version Upgrade when you first create your DB instance, or by modifying your DB instance later. </p>"
        },
        "VpcOnly":{
          "shape":"Boolean",
          "documentation":"<p>If true, you can only use this option with a DB instance that is in a VPC. </p>"
        },
        "SupportsOptionVersionDowngrade":{
          "shape":"BooleanOptional",
          "documentation":"<p>If true, you can change the option to an earlier version of the option. This only applies to options that have different versions available. </p>"
        },
        "OptionGroupOptionSettings":{
          "shape":"OptionGroupOptionSettingsList",
          "documentation":"<p>The option settings that are available (and the default value) for each option in an option group.</p>"
        },
        "OptionGroupOptionVersions":{
          "shape":"OptionGroupOptionVersionsList",
          "documentation":"<p>The versions that are available for the option.</p>"
        }
      },
      "documentation":"<p>Available option.</p>"
    },
    "OptionGroupOptionSetting":{
      "type":"structure",
      "members":{
        "SettingName":{
          "shape":"String",
          "documentation":"<p>The name of the option group option.</p>"
        },
        "SettingDescription":{
          "shape":"String",
          "documentation":"<p>The description of the option group option.</p>"
        },
        "DefaultValue":{
          "shape":"String",
          "documentation":"<p>The default value for the option group option.</p>"
        },
        "ApplyType":{
          "shape":"String",
          "documentation":"<p>The DB engine specific parameter type for the option group option.</p>"
        },
        "AllowedValues":{
          "shape":"String",
          "documentation":"<p>Indicates the acceptable values for the option group option.</p>"
        },
        "IsModifiable":{
          "shape":"Boolean",
          "documentation":"<p>Boolean value where true indicates that this option group option can be changed from the default value.</p>"
        }
      },
      "documentation":"<p>Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.</p>"
    },
    "OptionGroupOptionSettingsList":{
      "type":"list",
      "member":{
        "shape":"OptionGroupOptionSetting",
        "locationName":"OptionGroupOptionSetting"
      }
    },
    "OptionGroupOptionVersionsList":{
      "type":"list",
      "member":{
        "shape":"OptionVersion",
        "locationName":"OptionVersion"
      }
    },
    "OptionGroupOptionsList":{
      "type":"list",
      "member":{
        "shape":"OptionGroupOption",
        "locationName":"OptionGroupOption"
      },
      "documentation":"<p>List of available option group options.</p>"
    },
    "OptionGroupOptionsMessage":{
      "type":"structure",
      "members":{
        "OptionGroupOptions":{"shape":"OptionGroupOptionsList"},
        "Marker":{
          "shape":"String",
          "documentation":"<p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "OptionGroupQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The quota of 20 option groups was exceeded for this AWS account.</p>",
      "error":{
        "code":"OptionGroupQuotaExceededFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "OptionGroups":{
      "type":"structure",
      "members":{
        "OptionGroupsList":{
          "shape":"OptionGroupsList",
          "documentation":"<p>List of option groups.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p>List of option groups.</p>"
    },
    "OptionGroupsList":{
      "type":"list",
      "member":{
        "shape":"OptionGroup",
        "locationName":"OptionGroup"
      }
    },
    "OptionNamesList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "OptionSetting":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the option that has settings that you can set.</p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p>The current value of the option setting.</p>"
        },
        "DefaultValue":{
          "shape":"String",
          "documentation":"<p>The default value of the option setting.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The description of the option setting.</p>"
        },
        "ApplyType":{
          "shape":"String",
          "documentation":"<p>The DB engine specific parameter type.</p>"
        },
        "DataType":{
          "shape":"String",
          "documentation":"<p>The data type of the option setting.</p>"
        },
        "AllowedValues":{
          "shape":"String",
          "documentation":"<p>The allowed values of the option setting.</p>"
        },
        "IsModifiable":{
          "shape":"Boolean",
          "documentation":"<p>A Boolean value that, when true, indicates the option setting can be modified from the default.</p>"
        },
        "IsCollection":{
          "shape":"Boolean",
          "documentation":"<p>Indicates if the option setting is part of a collection.</p>"
        }
      },
      "documentation":"<p>Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.</p>"
    },
    "OptionSettingConfigurationList":{
      "type":"list",
      "member":{
        "shape":"OptionSetting",
        "locationName":"OptionSetting"
      }
    },
    "OptionSettingsList":{
      "type":"list",
      "member":{
        "shape":"OptionSetting",
        "locationName":"OptionSetting"
      }
    },
    "OptionVersion":{
      "type":"structure",
      "members":{
        "Version":{
          "shape":"String",
          "documentation":"<p>The version of the option.</p>"
        },
        "IsDefault":{
          "shape":"Boolean",
          "documentation":"<p>True if the version is the default version of the option, and otherwise false.</p>"
        }
      },
      "documentation":"<p>The version for an option. Option group option versions are returned by the <a>DescribeOptionGroupOptions</a> action.</p>"
    },
    "OptionsConflictsWith":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"OptionConflictName"
      }
    },
    "OptionsDependedOn":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"OptionName"
      }
    },
    "OptionsList":{
      "type":"list",
      "member":{
        "shape":"Option",
        "locationName":"Option"
      }
    },
    "OrderableDBInstanceOption":{
      "type":"structure",
      "members":{
        "Engine":{
          "shape":"String",
          "documentation":"<p>The engine type of a DB instance.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version of a DB instance.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The DB instance class for a DB instance.</p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>The license model for a DB instance.</p>"
        },
        "AvailabilityZones":{
          "shape":"AvailabilityZoneList",
          "documentation":"<p>A list of Availability Zones for a DB instance.</p>"
        },
        "MultiAZCapable":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a DB instance is Multi-AZ capable.</p>"
        },
        "ReadReplicaCapable":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a DB instance can have a Read Replica.</p>"
        },
        "Vpc":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a DB instance is in a VPC.</p>"
        },
        "SupportsStorageEncryption":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a DB instance supports encrypted storage.</p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Indicates the storage type for a DB instance.</p>"
        },
        "SupportsIops":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a DB instance supports provisioned IOPS.</p>"
        },
        "SupportsEnhancedMonitoring":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds.</p>"
        },
        "SupportsIAMDatabaseAuthentication":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether a DB instance supports IAM database authentication.</p>"
        },
        "SupportsPerformanceInsights":{
          "shape":"Boolean",
          "documentation":"<p>True if a DB instance supports Performance Insights, otherwise false.</p>"
        },
        "MinStorageSize":{
          "shape":"IntegerOptional",
          "documentation":"<p>Minimum storage size for a DB instance.</p>"
        },
        "MaxStorageSize":{
          "shape":"IntegerOptional",
          "documentation":"<p>Maximum storage size for a DB instance.</p>"
        },
        "MinIopsPerDbInstance":{
          "shape":"IntegerOptional",
          "documentation":"<p>Minimum total provisioned IOPS for a DB instance.</p>"
        },
        "MaxIopsPerDbInstance":{
          "shape":"IntegerOptional",
          "documentation":"<p>Maximum total provisioned IOPS for a DB instance.</p>"
        },
        "MinIopsPerGib":{
          "shape":"DoubleOptional",
          "documentation":"<p>Minimum provisioned IOPS per GiB for a DB instance.</p>"
        },
        "MaxIopsPerGib":{
          "shape":"DoubleOptional",
          "documentation":"<p>Maximum provisioned IOPS per GiB for a DB instance.</p>"
        },
        "AvailableProcessorFeatures":{
          "shape":"AvailableProcessorFeatureList",
          "documentation":"<p>A list of the available processor features for the DB instance class of a DB instance.</p>"
        },
        "SupportedEngineModes":{
          "shape":"EngineModeList",
          "documentation":"<p>A list of the supported DB engine modes.</p>"
        }
      },
      "documentation":"<p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action. </p>",
      "wrapper":true
    },
    "OrderableDBInstanceOptionsList":{
      "type":"list",
      "member":{
        "shape":"OrderableDBInstanceOption",
        "locationName":"OrderableDBInstanceOption"
      }
    },
    "OrderableDBInstanceOptionsMessage":{
      "type":"structure",
      "members":{
        "OrderableDBInstanceOptions":{
          "shape":"OrderableDBInstanceOptionsList",
          "documentation":"<p>An <a>OrderableDBInstanceOption</a> structure containing information about orderable options for the DB instance.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous OrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeOrderableDBInstanceOptions</a> action. </p>"
    },
    "Parameter":{
      "type":"structure",
      "members":{
        "ParameterName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the parameter.</p>"
        },
        "ParameterValue":{
          "shape":"String",
          "documentation":"<p>Specifies the value of the parameter.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>Provides a description of the parameter.</p>"
        },
        "Source":{
          "shape":"String",
          "documentation":"<p>Indicates the source of the parameter value.</p>"
        },
        "ApplyType":{
          "shape":"String",
          "documentation":"<p>Specifies the engine specific parameters type.</p>"
        },
        "DataType":{
          "shape":"String",
          "documentation":"<p>Specifies the valid data type for the parameter.</p>"
        },
        "AllowedValues":{
          "shape":"String",
          "documentation":"<p>Specifies the valid range of values for the parameter.</p>"
        },
        "IsModifiable":{
          "shape":"Boolean",
          "documentation":"<p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. </p>"
        },
        "MinimumEngineVersion":{
          "shape":"String",
          "documentation":"<p>The earliest engine version to which the parameter can apply.</p>"
        },
        "ApplyMethod":{
          "shape":"ApplyMethod",
          "documentation":"<p>Indicates when to apply parameter updates.</p>"
        },
        "SupportedEngineModes":{
          "shape":"EngineModeList",
          "documentation":"<p>The valid DB engine modes.</p>"
        }
      },
      "documentation":"<p> This data type is used as a request parameter in the <a>ModifyDBParameterGroup</a> and <a>ResetDBParameterGroup</a> actions. </p> <p>This data type is used as a response element in the <a>DescribeEngineDefaultParameters</a> and <a>DescribeDBParameters</a> actions.</p>"
    },
    "ParametersList":{
      "type":"list",
      "member":{
        "shape":"Parameter",
        "locationName":"Parameter"
      }
    },
    "PendingCloudwatchLogsExports":{
      "type":"structure",
      "members":{
        "LogTypesToEnable":{
          "shape":"LogTypeList",
          "documentation":"<p>Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.</p>"
        },
        "LogTypesToDisable":{
          "shape":"LogTypeList",
          "documentation":"<p>Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.</p>"
        }
      },
      "documentation":"<p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>"
    },
    "PendingMaintenanceAction":{
      "type":"structure",
      "members":{
        "Action":{
          "shape":"String",
          "documentation":"<p>The type of pending maintenance action that is available for the resource.</p>"
        },
        "AutoAppliedAfterDate":{
          "shape":"TStamp",
          "documentation":"<p>The date of the maintenance window when the action is applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>"
        },
        "ForcedApplyDate":{
          "shape":"TStamp",
          "documentation":"<p>The date when the maintenance action is automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>"
        },
        "OptInStatus":{
          "shape":"String",
          "documentation":"<p>Indicates the type of opt-in request that has been received for the resource.</p>"
        },
        "CurrentApplyDate":{
          "shape":"TStamp",
          "documentation":"<p>The effective date when the pending maintenance action is applied to the resource. This date takes into account opt-in requests received from the <a>ApplyPendingMaintenanceAction</a> API, the <code>AutoAppliedAfterDate</code>, and the <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been received and nothing has been specified as <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>A description providing more detail about the maintenance action.</p>"
        }
      },
      "documentation":"<p>Provides information about a pending maintenance action for a resource.</p>"
    },
    "PendingMaintenanceActionDetails":{
      "type":"list",
      "member":{
        "shape":"PendingMaintenanceAction",
        "locationName":"PendingMaintenanceAction"
      }
    },
    "PendingMaintenanceActions":{
      "type":"list",
      "member":{
        "shape":"ResourcePendingMaintenanceActions",
        "locationName":"ResourcePendingMaintenanceActions"
      }
    },
    "PendingMaintenanceActionsMessage":{
      "type":"structure",
      "members":{
        "PendingMaintenanceActions":{
          "shape":"PendingMaintenanceActions",
          "documentation":"<p>A list of the pending maintenance actions for the resource.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p>Data returned from the <b>DescribePendingMaintenanceActions</b> action.</p>"
    },
    "PendingModifiedValues":{
      "type":"structure",
      "members":{
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p> Contains the new <code>DBInstanceClass</code> for the DB instance that will be applied or is currently being applied. </p>"
        },
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p> Contains the new <code>AllocatedStorage</code> size for the DB instance that will be applied or is currently being applied. </p>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>Contains the pending or currently-in-progress change of the master credentials for the DB instance.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>Specifies the pending port for the DB instance.</p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>Specifies the pending number of days for which automated backups are retained.</p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>Indicates the database engine version.</p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>The license model for the DB instance.</p> <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or is currently being applied.</p>"
        },
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p> Contains the new <code>DBInstanceIdentifier</code> for the DB instance that will be applied or is currently being applied. </p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type to be associated with the DB instance.</p>"
        },
        "CACertificateIdentifier":{
          "shape":"String",
          "documentation":"<p>Specifies the identifier of the CA certificate for the DB instance.</p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The new DB subnet group for the DB instance. </p>"
        },
        "PendingCloudwatchLogsExports":{"shape":"PendingCloudwatchLogsExports"},
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the <a>ModifyDBInstance</a> action. </p>"
    },
    "PointInTimeRestoreNotEnabledFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>SourceDBInstanceIdentifier</i> refers to a DB instance with <i>BackupRetentionPeriod</i> equal to 0. </p>",
      "error":{
        "code":"PointInTimeRestoreNotEnabled",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "ProcessorFeature":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the processor feature. Valid names are <code>coreCount</code> and <code>threadsPerCore</code>.</p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p>The value of a processor feature name.</p>"
        }
      },
      "documentation":"<p>Contains the processor features of a DB instance class.</p> <p>To specify the number of CPU cores, use the <code>coreCount</code> feature name for the <code>Name</code> parameter. To specify the number of threads per core, use the <code>threadsPerCore</code> feature name for the <code>Name</code> parameter.</p> <p>You can set the processor features of the DB instance class for a DB instance when you call one of the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RestoreDBInstanceFromDBSnapshot</a> </p> </li> <li> <p> <a>RestoreDBInstanceFromS3</a> </p> </li> <li> <p> <a>RestoreDBInstanceToPointInTime</a> </p> </li> </ul> <p>You can view the valid processor values for a particular instance class by calling the <a>DescribeOrderableDBInstanceOptions</a> action and specifying the instance class for the <code>DBInstanceClass</code> parameter.</p> <p>In addition, you can use the following actions for DB instance class processor information:</p> <ul> <li> <p> <a>DescribeDBInstances</a> </p> </li> <li> <p> <a>DescribeDBSnapshots</a> </p> </li> <li> <p> <a>DescribeValidDBInstanceModifications</a> </p> </li> </ul> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor\">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p>"
    },
    "ProcessorFeatureList":{
      "type":"list",
      "member":{
        "shape":"ProcessorFeature",
        "locationName":"ProcessorFeature"
      }
    },
    "PromoteReadReplicaDBClusterMessage":{
      "type":"structure",
      "required":["DBClusterIdentifier"],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB cluster Read Replica to promote. This parameter is not case-sensitive. </p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster Read Replica.</p> </li> </ul> <p>Example: <code>my-cluster-replica1</code> </p>"
        }
      },
      "documentation":"<p/>"
    },
    "PromoteReadReplicaDBClusterResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "PromoteReadReplicaMessage":{
      "type":"structure",
      "required":["DBInstanceIdentifier"],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Read Replica DB instance.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 8</p> </li> </ul>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p> The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p> The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html\"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        }
      },
      "documentation":"<p/>"
    },
    "PromoteReadReplicaResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "ProvisionedIopsNotAvailableInAZFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Provisioned IOPS not available in the specified Availability Zone.</p>",
      "error":{
        "code":"ProvisionedIopsNotAvailableInAZFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "PurchaseReservedDBInstancesOfferingMessage":{
      "type":"structure",
      "required":["ReservedDBInstancesOfferingId"],
      "members":{
        "ReservedDBInstancesOfferingId":{
          "shape":"String",
          "documentation":"<p>The ID of the Reserved DB instance offering to purchase.</p> <p>Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706</p>"
        },
        "ReservedDBInstanceId":{
          "shape":"String",
          "documentation":"<p>Customer-specified identifier to track this reservation.</p> <p>Example: myreservationID</p>"
        },
        "DBInstanceCount":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of instances to reserve.</p> <p>Default: <code>1</code> </p>"
        },
        "Tags":{"shape":"TagList"}
      },
      "documentation":"<p/>"
    },
    "PurchaseReservedDBInstancesOfferingResult":{
      "type":"structure",
      "members":{
        "ReservedDBInstance":{"shape":"ReservedDBInstance"}
      }
    },
    "Range":{
      "type":"structure",
      "members":{
        "From":{
          "shape":"Integer",
          "documentation":"<p>The minimum value in the range.</p>"
        },
        "To":{
          "shape":"Integer",
          "documentation":"<p>The maximum value in the range.</p>"
        },
        "Step":{
          "shape":"IntegerOptional",
          "documentation":"<p>The step value for the range. For example, if you have a range of 5,000 to 10,000, with a step value of 1,000, the valid values start at 5,000 and step up by 1,000. Even though 7,500 is within the range, it isn't a valid value for the range. The valid values are 5,000, 6,000, 7,000, 8,000... </p>"
        }
      },
      "documentation":"<p>A range of integer values.</p>"
    },
    "RangeList":{
      "type":"list",
      "member":{
        "shape":"Range",
        "locationName":"Range"
      }
    },
    "ReadReplicaDBClusterIdentifierList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"ReadReplicaDBClusterIdentifier"
      }
    },
    "ReadReplicaDBInstanceIdentifierList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"ReadReplicaDBInstanceIdentifier"
      }
    },
    "ReadReplicaIdentifierList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"ReadReplicaIdentifier"
      }
    },
    "RebootDBInstanceMessage":{
      "type":"structure",
      "required":["DBInstanceIdentifier"],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>"
        },
        "ForceFailover":{
          "shape":"BooleanOptional",
          "documentation":"<p> When <code>true</code>, the reboot is conducted through a MultiAZ failover. </p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for MultiAZ.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RebootDBInstanceResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "RecurringCharge":{
      "type":"structure",
      "members":{
        "RecurringChargeAmount":{
          "shape":"Double",
          "documentation":"<p>The amount of the recurring charge.</p>"
        },
        "RecurringChargeFrequency":{
          "shape":"String",
          "documentation":"<p>The frequency of the recurring charge.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the <a>DescribeReservedDBInstances</a> and <a>DescribeReservedDBInstancesOfferings</a> actions. </p>",
      "wrapper":true
    },
    "RecurringChargeList":{
      "type":"list",
      "member":{
        "shape":"RecurringCharge",
        "locationName":"RecurringCharge"
      }
    },
    "RemoveRoleFromDBClusterMessage":{
      "type":"structure",
      "required":[
        "DBClusterIdentifier",
        "RoleArn"
      ],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster to disassociate the IAM role from.</p>"
        },
        "RoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>"
        }
      }
    },
    "RemoveSourceIdentifierFromSubscriptionMessage":{
      "type":"structure",
      "required":[
        "SubscriptionName",
        "SourceIdentifier"
      ],
      "members":{
        "SubscriptionName":{
          "shape":"String",
          "documentation":"<p>The name of the RDS event notification subscription you want to remove a source identifier from.</p>"
        },
        "SourceIdentifier":{
          "shape":"String",
          "documentation":"<p> The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security group. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "RemoveSourceIdentifierFromSubscriptionResult":{
      "type":"structure",
      "members":{
        "EventSubscription":{"shape":"EventSubscription"}
      }
    },
    "RemoveTagsFromResourceMessage":{
      "type":"structure",
      "required":[
        "ResourceName",
        "TagKeys"
      ],
      "members":{
        "ResourceName":{
          "shape":"String",
          "documentation":"<p>The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing\"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide.</i> </p>"
        },
        "TagKeys":{
          "shape":"KeyList",
          "documentation":"<p>The tag key (name) of the tag to be removed.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ReservedDBInstance":{
      "type":"structure",
      "members":{
        "ReservedDBInstanceId":{
          "shape":"String",
          "documentation":"<p>The unique identifier for the reservation.</p>"
        },
        "ReservedDBInstancesOfferingId":{
          "shape":"String",
          "documentation":"<p>The offering identifier.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The DB instance class for the reserved DB instance.</p>"
        },
        "StartTime":{
          "shape":"TStamp",
          "documentation":"<p>The time the reservation started.</p>"
        },
        "Duration":{
          "shape":"Integer",
          "documentation":"<p>The duration of the reservation in seconds.</p>"
        },
        "FixedPrice":{
          "shape":"Double",
          "documentation":"<p>The fixed price charged for this reserved DB instance.</p>"
        },
        "UsagePrice":{
          "shape":"Double",
          "documentation":"<p>The hourly price charged for this reserved DB instance.</p>"
        },
        "CurrencyCode":{
          "shape":"String",
          "documentation":"<p>The currency code for the reserved DB instance.</p>"
        },
        "DBInstanceCount":{
          "shape":"Integer",
          "documentation":"<p>The number of reserved DB instances.</p>"
        },
        "ProductDescription":{
          "shape":"String",
          "documentation":"<p>The description of the reserved DB instance.</p>"
        },
        "OfferingType":{
          "shape":"String",
          "documentation":"<p>The offering type of this reserved DB instance.</p>"
        },
        "MultiAZ":{
          "shape":"Boolean",
          "documentation":"<p>Indicates if the reservation applies to Multi-AZ deployments.</p>"
        },
        "State":{
          "shape":"String",
          "documentation":"<p>The state of the reserved DB instance.</p>"
        },
        "RecurringCharges":{
          "shape":"RecurringChargeList",
          "documentation":"<p>The recurring price charged to run this reserved DB instance.</p>"
        },
        "ReservedDBInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the reserved DB instance.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the <a>DescribeReservedDBInstances</a> and <a>PurchaseReservedDBInstancesOffering</a> actions. </p>",
      "wrapper":true
    },
    "ReservedDBInstanceAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>User already has a reservation with the given identifier.</p>",
      "error":{
        "code":"ReservedDBInstanceAlreadyExists",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "ReservedDBInstanceList":{
      "type":"list",
      "member":{
        "shape":"ReservedDBInstance",
        "locationName":"ReservedDBInstance"
      }
    },
    "ReservedDBInstanceMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "ReservedDBInstances":{
          "shape":"ReservedDBInstanceList",
          "documentation":"<p>A list of reserved DB instances.</p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeReservedDBInstances</a> action. </p>"
    },
    "ReservedDBInstanceNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified reserved DB Instance not found.</p>",
      "error":{
        "code":"ReservedDBInstanceNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "ReservedDBInstanceQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Request would exceed the user's DB Instance quota.</p>",
      "error":{
        "code":"ReservedDBInstanceQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "ReservedDBInstancesOffering":{
      "type":"structure",
      "members":{
        "ReservedDBInstancesOfferingId":{
          "shape":"String",
          "documentation":"<p>The offering identifier.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The DB instance class for the reserved DB instance.</p>"
        },
        "Duration":{
          "shape":"Integer",
          "documentation":"<p>The duration of the offering in seconds.</p>"
        },
        "FixedPrice":{
          "shape":"Double",
          "documentation":"<p>The fixed price charged for this offering.</p>"
        },
        "UsagePrice":{
          "shape":"Double",
          "documentation":"<p>The hourly price charged for this offering.</p>"
        },
        "CurrencyCode":{
          "shape":"String",
          "documentation":"<p>The currency code for the reserved DB instance offering.</p>"
        },
        "ProductDescription":{
          "shape":"String",
          "documentation":"<p>The database engine used by the offering.</p>"
        },
        "OfferingType":{
          "shape":"String",
          "documentation":"<p>The offering type.</p>"
        },
        "MultiAZ":{
          "shape":"Boolean",
          "documentation":"<p>Indicates if the offering applies to Multi-AZ deployments.</p>"
        },
        "RecurringCharges":{
          "shape":"RecurringChargeList",
          "documentation":"<p>The recurring price charged to run this reserved DB instance.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the <a>DescribeReservedDBInstancesOfferings</a> action. </p>",
      "wrapper":true
    },
    "ReservedDBInstancesOfferingList":{
      "type":"list",
      "member":{
        "shape":"ReservedDBInstancesOffering",
        "locationName":"ReservedDBInstancesOffering"
      }
    },
    "ReservedDBInstancesOfferingMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "ReservedDBInstancesOfferings":{
          "shape":"ReservedDBInstancesOfferingList",
          "documentation":"<p>A list of reserved DB instance offerings.</p>"
        }
      },
      "documentation":"<p> Contains the result of a successful invocation of the <a>DescribeReservedDBInstancesOfferings</a> action. </p>"
    },
    "ReservedDBInstancesOfferingNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Specified offering does not exist.</p>",
      "error":{
        "code":"ReservedDBInstancesOfferingNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "ResetDBClusterParameterGroupMessage":{
      "type":"structure",
      "required":["DBClusterParameterGroupName"],
      "members":{
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster parameter group to reset.</p>"
        },
        "ResetAllParameters":{
          "shape":"Boolean",
          "documentation":"<p>A value that is set to <code>true</code> to reset all parameters in the DB cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.</p>"
        },
        "Parameters":{
          "shape":"ParametersList",
          "documentation":"<p>A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ResetDBParameterGroupMessage":{
      "type":"structure",
      "required":["DBParameterGroupName"],
      "members":{
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBParameterGroup.</p> </li> </ul>"
        },
        "ResetAllParameters":{
          "shape":"Boolean",
          "documentation":"<p> Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters in the DB parameter group to default values. </p> <p>Default: <code>true</code> </p>"
        },
        "Parameters":{
          "shape":"ParametersList",
          "documentation":"<p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p> <b>MySQL</b> </p> <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code> </p> <p>You can use the immediate value with dynamic parameters only. You can use the <code>pending-reboot</code> value for both dynamic and static parameters, and changes are applied when DB instance reboots.</p> <p> <b>MariaDB</b> </p> <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code> </p> <p>You can use the immediate value with dynamic parameters only. You can use the <code>pending-reboot</code> value for both dynamic and static parameters, and changes are applied when DB instance reboots.</p> <p> <b>Oracle</b> </p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>"
        }
      },
      "documentation":"<p/>"
    },
    "ResourceNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified resource ID was not found.</p>",
      "error":{
        "code":"ResourceNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "ResourcePendingMaintenanceActions":{
      "type":"structure",
      "members":{
        "ResourceIdentifier":{
          "shape":"String",
          "documentation":"<p>The ARN of the resource that has pending maintenance actions.</p>"
        },
        "PendingMaintenanceActionDetails":{
          "shape":"PendingMaintenanceActionDetails",
          "documentation":"<p>A list that provides details about the pending maintenance actions for the resource.</p>"
        }
      },
      "documentation":"<p>Describes the pending maintenance actions for a resource.</p>",
      "wrapper":true
    },
    "RestoreDBClusterFromS3Message":{
      "type":"structure",
      "required":[
        "DBClusterIdentifier",
        "Engine",
        "MasterUsername",
        "MasterUserPassword",
        "SourceEngine",
        "SourceEngineVersion",
        "S3BucketName",
        "S3IngestionRoleArn"
      ],
      "members":{
        "AvailabilityZones":{
          "shape":"AvailabilityZones",
          "documentation":"<p>A list of EC2 Availability Zones that instances in the restored DB cluster can be created in.</p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>"
        },
        "CharacterSetName":{
          "shape":"String",
          "documentation":"<p>A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.</p>"
        },
        "DatabaseName":{
          "shape":"String",
          "documentation":"<p>The database name for the restored DB cluster.</p>"
        },
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter is isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>"
        },
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster parameter group to associate with the restored DB cluster. If this argument is omitted, <code>default.aurora5.6</code> is used. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of EC2 VPC security groups to associate with the restored DB cluster.</p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>A DB subnet group to associate with the restored DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup. </p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The name of the database engine to be used for the restored DB cluster.</p> <p>Valid Values: <code>aurora</code>, <code>aurora-postgresql</code> </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine to use.</p> <p> <b>Aurora MySQL</b> </p> <p>Example: <code>5.6.10a</code> </p> <p> <b>Aurora PostgreSQL</b> </p> <p>Example: <code>9.6.3</code> </p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the instances in the restored DB cluster accept connections.</p> <p> Default: <code>3306</code> </p>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>The name of the master user for the restored DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>The password for the master database user. This password can contain any printable ASCII character except \"/\", \"\"\", or \"@\".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>A value that indicates that the restored DB cluster should be associated with the specified option group.</p> <p>Permanent options can't be removed from an option group. An option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora\"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora\"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>"
        },
        "Tags":{"shape":"TagList"},
        "StorageEncrypted":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies whether the restored DB cluster is encrypted.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon RDS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>"
        },
        "SourceEngine":{
          "shape":"String",
          "documentation":"<p>The identifier for the database engine that was backed up to create the files stored in the Amazon S3 bucket. </p> <p>Valid values: <code>mysql</code> </p>"
        },
        "SourceEngineVersion":{
          "shape":"String",
          "documentation":"<p>The version of the database that the backup files were created from.</p> <p>MySQL version 5.5 and 5.6 are supported. </p> <p>Example: <code>5.6.22</code> </p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.</p>"
        },
        "S3Prefix":{
          "shape":"String",
          "documentation":"<p>The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster. If you do not specify a <b>SourceS3Prefix</b> value, then the Amazon Aurora DB cluster is created by using all of the files in the Amazon S3 bucket.</p>"
        },
        "S3IngestionRoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon RDS to access the Amazon S3 bucket on your behalf.</p>"
        },
        "BacktrackWindow":{
          "shape":"LongOptional",
          "documentation":"<p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>"
        }
      }
    },
    "RestoreDBClusterFromS3Result":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "RestoreDBClusterFromSnapshotMessage":{
      "type":"structure",
      "required":[
        "DBClusterIdentifier",
        "SnapshotIdentifier",
        "Engine"
      ],
      "members":{
        "AvailabilityZones":{
          "shape":"AvailabilityZones",
          "documentation":"<p>Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.</p>"
        },
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>"
        },
        "SnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Snapshot.</p> </li> </ul>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The database engine to use for the new DB cluster.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version of the database engine to use for the new DB cluster.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB subnet group to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "DatabaseName":{
          "shape":"String",
          "documentation":"<p>The database name for the restored DB cluster.</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group to use for the restored DB cluster.</p>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of VPC security groups that the new DB cluster will belong to.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags to be assigned to the restored DB cluster.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.</p> </li> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>"
        },
        "BacktrackWindow":{
          "shape":"LongOptional",
          "documentation":"<p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon Aurora User Guide</i>.</p>"
        },
        "EngineMode":{
          "shape":"String",
          "documentation":"<p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>, or <code>parallelquery</code>.</p>"
        },
        "ScalingConfiguration":{
          "shape":"ScalingConfiguration",
          "documentation":"<p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RestoreDBClusterFromSnapshotResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "RestoreDBClusterToPointInTimeMessage":{
      "type":"structure",
      "required":[
        "DBClusterIdentifier",
        "SourceDBClusterIdentifier"
      ],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The name of the new DB cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>"
        },
        "RestoreType":{
          "shape":"String",
          "documentation":"<p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>"
        },
        "SourceDBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the source DB cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>"
        },
        "RestoreToTime":{
          "shape":"TStamp",
          "documentation":"<p>The date and time to restore the DB cluster to.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Must be specified if <code>UseLatestRestorableTime</code> parameter is not provided</p> </li> <li> <p>Cannot be specified if <code>UseLatestRestorableTime</code> parameter is true</p> </li> <li> <p>Cannot be specified if <code>RestoreType</code> parameter is <code>copy-on-write</code> </p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>"
        },
        "UseLatestRestorableTime":{
          "shape":"Boolean",
          "documentation":"<p>A value that is set to <code>true</code> to restore the DB cluster to the latest restorable backup time, and <code>false</code> otherwise. </p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is provided.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: A value from <code>1150-65535</code>. </p> <p>Default: The default port for the engine.</p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The DB subnet group name to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group for the new DB cluster.</p>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of VPC security groups that the new DB cluster belongs to.</p>"
        },
        "Tags":{"shape":"TagList"},
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p> </li> <li> <p>If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then the restore request is rejected.</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>"
        },
        "BacktrackWindow":{
          "shape":"LongOptional",
          "documentation":"<p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RestoreDBClusterToPointInTimeResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "RestoreDBInstanceFromDBSnapshotMessage":{
      "type":"structure",
      "required":[
        "DBInstanceIdentifier",
        "DBSnapshotIdentifier"
      ],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>Name of the DB instance to create from the DB snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 numbers, letters, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>"
        },
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier for the DB snapshot to restore from.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBSnapshot.</p> </li> <li> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> </li> </ul>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html\">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: The same DBInstanceClass as the original DB instance.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the database accepts connections.</p> <p>Default: The same port as the original DB instance</p> <p>Constraints: Value must be <code>1150-65535</code> </p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p>The EC2 Availability Zone that the DB instance is created in.</p> <p>Default: A random, system-chosen Availability Zone.</p> <p>Constraint: You can't specify the AvailabilityZone parameter if the MultiAZ parameter is set to <code>true</code>.</p> <p>Example: <code>us-east-1a</code> </p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The DB subnet group name to use for the new instance.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies if the DB instance is a Multi-AZ deployment.</p> <p>Constraint: You can't specify the AvailabilityZone parameter if the MultiAZ parameter is set to <code>true</code>.</p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.</p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p>Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window.</p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>License model information for the restored DB instance.</p> <p>Default: Same as source.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>"
        },
        "DBName":{
          "shape":"String",
          "documentation":"<p>The database name for the restored DB instance.</p> <note> <p>This parameter doesn't apply to the MySQL, PostgreSQL, or MariaDB engines.</p> </note>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The database engine to use for the new instance.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot.</p> <p>Valid Values:</p> <ul> <li> <p> <code>mariadb</code> </p> </li> <li> <p> <code>mysql</code> </p> </li> <li> <p> <code>oracle-ee</code> </p> </li> <li> <p> <code>oracle-se2</code> </p> </li> <li> <p> <code>oracle-se1</code> </p> </li> <li> <p> <code>oracle-se</code> </p> </li> <li> <p> <code>postgres</code> </p> </li> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second. If this parameter is not specified, the IOPS value is taken from the backup. If this parameter is set to 0, the new instance is converted to a non-PIOPS instance. The conversion takes additional time, though your DB instance is available for connections before the conversion starts. </p> <p>The provisioned IOPS value must follow the requirements for your database engine. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS\">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints: Must be an integer greater than 1000.</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group to be used for the restored DB instance.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>"
        },
        "Tags":{"shape":"TagList"},
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type to be associated with the DB instance.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>standard</code> </p>"
        },
        "TdeCredentialArn":{
          "shape":"String",
          "documentation":"<p>The ARN from the key store with which to associate the instance for TDE encryption.</p>"
        },
        "TdeCredentialPassword":{
          "shape":"String",
          "documentation":"<p>The password for the given ARN from the key store in order to access the device.</p>"
        },
        "Domain":{
          "shape":"String",
          "documentation":"<p>Specify the Active Directory Domain to restore the instance in.</p>"
        },
        "CopyTagsToSnapshot":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to copy all tags from the restored DB instance to snapshots of the DB instance, and otherwise false. The default is false.</p>"
        },
        "DomainIAMRoleName":{
          "shape":"String",
          "documentation":"<p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> </ul> <p>Default: <code>false</code> </p>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>"
        },
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>"
        },
        "UseDefaultProcessorFeatures":{
          "shape":"BooleanOptional",
          "documentation":"<p>A value that specifies that the DB instance class of the DB instance uses its default processor features.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RestoreDBInstanceFromDBSnapshotResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "RestoreDBInstanceFromS3Message":{
      "type":"structure",
      "required":[
        "DBInstanceIdentifier",
        "DBInstanceClass",
        "Engine",
        "SourceEngine",
        "SourceEngineVersion",
        "S3BucketName",
        "S3IngestionRoleArn"
      ],
      "members":{
        "DBName":{
          "shape":"String",
          "documentation":"<p>The name of the database to create when the DB instance is created. Follow the naming rules specified in <a>CreateDBInstance</a>. </p>"
        },
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB instance identifier. This parameter is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>"
        },
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of storage (in gigabytes) to allocate initially for the DB instance. Follow the allocation rules specified in <a>CreateDBInstance</a>. </p> <note> <p>Be sure to allocate enough memory for your new DB instance so that the restore operation can succeed. You can also allocate additional memory for future growth. </p> </note>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html\">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Importing from Amazon S3 is not supported on the db.t2.micro DB instance class. </p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The name of the database engine to be used for this instance. </p> <p>Valid Values: <code>mysql</code> </p>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>The name for the master user. </p> <p>Constraints: </p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>The password for the master user. The password can include any printable ASCII character except \"/\", \"\"\", or \"@\". </p> <p>Constraints: Must contain from 8 to 41 characters.</p>"
        },
        "DBSecurityGroups":{
          "shape":"DBSecurityGroupNameList",
          "documentation":"<p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of VPC security groups to associate with this DB instance. </p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p>The Availability Zone that the DB instance is created in. For information about AWS Regions and Availability Zones, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\">Regions and Availability Zones</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region. </p> <p> Example: <code>us-east-1d</code> </p> <p>Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same AWS Region as the current endpoint. </p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>A DB subnet group to associate with this DB instance.</p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance\">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p> </li> <li> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred backup window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        },
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default parameter group for the specified engine is used. </p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. For more information, see <a>CreateDBInstance</a>. </p>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p>The time range each day during which automated backups are created if automated backups are enabled. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow\">The Backup Window</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the database accepts connections. </p> <p>Type: Integer </p> <p>Valid Values: <code>1150</code>-<code>65535</code> </p> <p>Default: <code>3306</code> </p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies whether the DB instance is a Multi-AZ deployment. If MultiAZ is set to <code>true</code>, you can't set the AvailabilityZone parameter. </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine to use. Choose the latest minor version of your database engine. For information about engine versions, see <a>CreateDBInstance</a>, or call <a>DescribeDBEngineVersions</a>. </p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to indicate that minor engine upgrades are applied automatically to the DB instance during the maintenance window, and otherwise false. </p> <p>Default: <code>true</code> </p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>The license model for this DB instance. Use <code>general-public-license</code>. </p>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of Provisioned IOPS (input/output operations per second) to allocate initially for the DB instance. For information about valid Iops values, see see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS\">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide.</i> </p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group to associate with this DB instance. If this argument is omitted, the default option group for the specified engine is used. </p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>A list of tags to associate with this DB instance. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type to be associated with the DB instance. </p> <p>Valid values: <code>standard</code> | <code>gp2</code> | <code>io1</code> </p> <p>If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p>Default: <code>io1</code> if the <code>Iops</code> parameter is specified; otherwise <code>standard</code> </p>"
        },
        "StorageEncrypted":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies whether the new DB instance is encrypted or not. </p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for an encrypted DB instance. </p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key. </p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon RDS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region. </p>"
        },
        "CopyTagsToSnapshot":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. </p> <p>Default: false. </p>"
        },
        "MonitoringInterval":{
          "shape":"IntegerOptional",
          "documentation":"<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. </p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0. </p> <p>Valid Values: 0, 1, 5, 10, 15, 30, 60 </p> <p>Default: <code>0</code> </p>"
        },
        "MonitoringRoleArn":{
          "shape":"String",
          "documentation":"<p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling\">Setting Up and Enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i> </p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value. </p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false. </p> <p>Default: <code>false</code> </p>"
        },
        "SourceEngine":{
          "shape":"String",
          "documentation":"<p>The name of the engine of your source database. </p> <p>Valid Values: <code>mysql</code> </p>"
        },
        "SourceEngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version of your source database. </p> <p>Valid Values: <code>5.6</code> </p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>The name of your Amazon S3 bucket that contains your database backup file. </p>"
        },
        "S3Prefix":{
          "shape":"String",
          "documentation":"<p>The prefix of your Amazon S3 bucket. </p>"
        },
        "S3IngestionRoleArn":{
          "shape":"String",
          "documentation":"<p>An AWS Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket. </p>"
        },
        "EnablePerformanceInsights":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable Performance Insights for the DB instance, and otherwise false. </p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html\">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service User Guide</i>. </p>"
        },
        "PerformanceInsightsKMSKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), the KMS key identifier, or the KMS key alias for the KMS encryption key. </p>"
        },
        "PerformanceInsightsRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>"
        },
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>"
        },
        "UseDefaultProcessorFeatures":{
          "shape":"BooleanOptional",
          "documentation":"<p>A value that specifies that the DB instance class of the DB instance uses its default processor features.</p>"
        }
      }
    },
    "RestoreDBInstanceFromS3Result":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "RestoreDBInstanceToPointInTimeMessage":{
      "type":"structure",
      "required":[
        "SourceDBInstanceIdentifier",
        "TargetDBInstanceIdentifier"
      ],
      "members":{
        "SourceDBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the source DB instance from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DB instance.</p> </li> </ul>"
        },
        "TargetDBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The name of the new DB instance to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>"
        },
        "RestoreTime":{
          "shape":"TStamp",
          "documentation":"<p>The date and time to restore from.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Cannot be specified if UseLatestRestorableTime parameter is true</p> </li> </ul> <p>Example: <code>2009-09-07T23:45:00Z</code> </p>"
        },
        "UseLatestRestorableTime":{
          "shape":"Boolean",
          "documentation":"<p> Specifies whether (<code>true</code>) or not (<code>false</code>) the DB instance is restored from the latest backup time. </p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if RestoreTime parameter is provided.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html\">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: The same DBInstanceClass as the original DB instance.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the database accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB instance.</p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p>The EC2 Availability Zone that the DB instance is created in.</p> <p>Default: A random, system-chosen Availability Zone.</p> <p>Constraint: You can't specify the AvailabilityZone parameter if the MultiAZ parameter is set to true.</p> <p>Example: <code>us-east-1a</code> </p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The DB subnet group name to use for the new instance.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies if the DB instance is a Multi-AZ deployment.</p> <p>Constraint: You can't specify the AvailabilityZone parameter if the MultiAZ parameter is set to <code>true</code>.</p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.</p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p>Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window.</p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>License model information for the restored DB instance.</p> <p>Default: Same as source.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>"
        },
        "DBName":{
          "shape":"String",
          "documentation":"<p>The database name for the restored DB instance.</p> <note> <p>This parameter is not used for the MySQL or MariaDB engines.</p> </note>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The database engine to use for the new instance.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p> <p>Valid Values:</p> <ul> <li> <p> <code>mariadb</code> </p> </li> <li> <p> <code>mysql</code> </p> </li> <li> <p> <code>oracle-ee</code> </p> </li> <li> <p> <code>oracle-se2</code> </p> </li> <li> <p> <code>oracle-se1</code> </p> </li> <li> <p> <code>oracle-se</code> </p> </li> <li> <p> <code>postgres</code> </p> </li> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p> <p>Constraints: Must be an integer greater than 1000.</p> <p> <b>SQL Server</b> </p> <p>Setting the IOPS value for the SQL Server database engine is not supported.</p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the option group to be used for the restored DB instance.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>"
        },
        "CopyTagsToSnapshot":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to copy all tags from the restored DB instance to snapshots of the DB instance, and otherwise false. The default is false.</p>"
        },
        "Tags":{"shape":"TagList"},
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type to be associated with the DB instance.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>standard</code> </p>"
        },
        "TdeCredentialArn":{
          "shape":"String",
          "documentation":"<p>The ARN from the key store with which to associate the instance for TDE encryption.</p>"
        },
        "TdeCredentialPassword":{
          "shape":"String",
          "documentation":"<p>The password for the given ARN from the key store in order to access the device.</p>"
        },
        "Domain":{
          "shape":"String",
          "documentation":"<p>Specify the Active Directory Domain to restore the instance in.</p>"
        },
        "DomainIAMRoleName":{
          "shape":"String",
          "documentation":"<p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> </ul> <p>Default: <code>false</code> </p>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>"
        },
        "ProcessorFeatures":{
          "shape":"ProcessorFeatureList",
          "documentation":"<p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>"
        },
        "UseDefaultProcessorFeatures":{
          "shape":"BooleanOptional",
          "documentation":"<p>A value that specifies that the DB instance class of the DB instance uses its default processor features.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RestoreDBInstanceToPointInTimeResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "RevokeDBSecurityGroupIngressMessage":{
      "type":"structure",
      "required":["DBSecurityGroupName"],
      "members":{
        "DBSecurityGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB security group to revoke ingress from.</p>"
        },
        "CIDRIP":{
          "shape":"String",
          "documentation":"<p> The IP range to revoke access from. Must be a valid CIDR range. If <code>CIDRIP</code> is specified, <code>EC2SecurityGroupName</code>, <code>EC2SecurityGroupId</code> and <code>EC2SecurityGroupOwnerId</code> can't be provided. </p>"
        },
        "EC2SecurityGroupName":{
          "shape":"String",
          "documentation":"<p> The name of the EC2 security group to revoke access from. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>"
        },
        "EC2SecurityGroupId":{
          "shape":"String",
          "documentation":"<p> The id of the EC2 security group to revoke access from. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>"
        },
        "EC2SecurityGroupOwnerId":{
          "shape":"String",
          "documentation":"<p> The AWS Account Number of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> parameter. The AWS Access Key ID is not an acceptable value. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "RevokeDBSecurityGroupIngressResult":{
      "type":"structure",
      "members":{
        "DBSecurityGroup":{"shape":"DBSecurityGroup"}
      }
    },
    "SNSInvalidTopicFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>SNS has responded that there is a problem with the SND topic specified.</p>",
      "error":{
        "code":"SNSInvalidTopic",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "SNSNoAuthorizationFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You do not have permission to publish to the SNS topic ARN.</p>",
      "error":{
        "code":"SNSNoAuthorization",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "SNSTopicArnNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The SNS topic ARN does not exist.</p>",
      "error":{
        "code":"SNSTopicArnNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "ScalingConfiguration":{
      "type":"structure",
      "members":{
        "MinCapacity":{
          "shape":"IntegerOptional",
          "documentation":"<p>The minimum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p> <p>The minimum capacity must be less than or equal to the maximum capacity.</p>"
        },
        "MaxCapacity":{
          "shape":"IntegerOptional",
          "documentation":"<p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p> <p>The maximum capacity must be greater than or equal to the minimum capacity.</p>"
        },
        "AutoPause":{
          "shape":"BooleanOptional",
          "documentation":"<p>A value that specifies whether to allow or disallow automatic pause for an Aurora DB cluster in <code>serverless</code> DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).</p> <note> <p>If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it. </p> </note>"
        },
        "SecondsUntilAutoPause":{
          "shape":"IntegerOptional",
          "documentation":"<p>The time, in seconds, before an Aurora DB cluster in <code>serverless</code> mode is paused.</p>"
        }
      },
      "documentation":"<p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html\">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>"
    },
    "ScalingConfigurationInfo":{
      "type":"structure",
      "members":{
        "MinCapacity":{
          "shape":"IntegerOptional",
          "documentation":"<p>The maximum capacity for the Aurora DB cluster in <code>serverless</code> DB engine mode.</p>"
        },
        "MaxCapacity":{
          "shape":"IntegerOptional",
          "documentation":"<p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>"
        },
        "AutoPause":{
          "shape":"BooleanOptional",
          "documentation":"<p>A value that indicates whether automatic pause is allowed for the Aurora DB cluster in <code>serverless</code> DB engine mode. </p>"
        },
        "SecondsUntilAutoPause":{
          "shape":"IntegerOptional",
          "documentation":"<p>The remaining amount of time, in seconds, before the Aurora DB cluster in <code>serverless</code> mode is paused. A DB cluster can be paused only when it's idle (it has no connections).</p>"
        }
      },
      "documentation":"<p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html\">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>"
    },
    "SharedSnapshotQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>",
      "error":{
        "code":"SharedSnapshotQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "SnapshotQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request would result in the user exceeding the allowed number of DB snapshots.</p>",
      "error":{
        "code":"SnapshotQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "SourceIdsList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"SourceId"
      }
    },
    "SourceNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The requested source could not be found.</p>",
      "error":{
        "code":"SourceNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "SourceRegion":{
      "type":"structure",
      "members":{
        "RegionName":{
          "shape":"String",
          "documentation":"<p>The name of the source AWS Region.</p>"
        },
        "Endpoint":{
          "shape":"String",
          "documentation":"<p>The endpoint for the source AWS Region endpoint.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the source AWS Region.</p>"
        }
      },
      "documentation":"<p>Contains an AWS Region name as the result of a successful call to the <a>DescribeSourceRegions</a> action.</p>"
    },
    "SourceRegionList":{
      "type":"list",
      "member":{
        "shape":"SourceRegion",
        "locationName":"SourceRegion"
      }
    },
    "SourceRegionMessage":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "SourceRegions":{
          "shape":"SourceRegionList",
          "documentation":"<p>A list of SourceRegion instances that contains each source AWS Region that the current AWS Region can get a Read Replica or a DB snapshot from.</p>"
        }
      },
      "documentation":"<p>Contains the result of a successful invocation of the <a>DescribeSourceRegions</a> action.</p>"
    },
    "SourceType":{
      "type":"string",
      "enum":[
        "db-instance",
        "db-parameter-group",
        "db-security-group",
        "db-snapshot",
        "db-cluster",
        "db-cluster-snapshot"
      ]
    },
    "StartDBClusterMessage":{
      "type":"structure",
      "required":["DBClusterIdentifier"],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as a lowercase string.</p>"
        }
      }
    },
    "StartDBClusterResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "StartDBInstanceMessage":{
      "type":"structure",
      "required":["DBInstanceIdentifier"],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p> The user-supplied instance identifier. </p>"
        }
      }
    },
    "StartDBInstanceResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "StopDBClusterMessage":{
      "type":"structure",
      "required":["DBClusterIdentifier"],
      "members":{
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as a lowercase string.</p>"
        }
      }
    },
    "StopDBClusterResult":{
      "type":"structure",
      "members":{
        "DBCluster":{"shape":"DBCluster"}
      }
    },
    "StopDBInstanceMessage":{
      "type":"structure",
      "required":["DBInstanceIdentifier"],
      "members":{
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p> The user-supplied instance identifier. </p>"
        },
        "DBSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p> The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped. </p>"
        }
      }
    },
    "StopDBInstanceResult":{
      "type":"structure",
      "members":{
        "DBInstance":{"shape":"DBInstance"}
      }
    },
    "StorageQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>",
      "error":{
        "code":"StorageQuotaExceeded",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "StorageTypeNotSupportedFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Storage of the <i>StorageType</i> specified can't be associated with the DB instance. </p>",
      "error":{
        "code":"StorageTypeNotSupported",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "String":{"type":"string"},
    "Subnet":{
      "type":"structure",
      "members":{
        "SubnetIdentifier":{
          "shape":"String",
          "documentation":"<p>Specifies the identifier of the subnet.</p>"
        },
        "SubnetAvailabilityZone":{"shape":"AvailabilityZone"},
        "SubnetStatus":{
          "shape":"String",
          "documentation":"<p>Specifies the status of the subnet.</p>"
        }
      },
      "documentation":"<p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action. </p>"
    },
    "SubnetAlreadyInUse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB subnet is already in use in the Availability Zone.</p>",
      "error":{
        "code":"SubnetAlreadyInUse",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "SubnetIdentifierList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"SubnetIdentifier"
      }
    },
    "SubnetList":{
      "type":"list",
      "member":{
        "shape":"Subnet",
        "locationName":"Subnet"
      }
    },
    "SubscriptionAlreadyExistFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The supplied subscription name already exists.</p>",
      "error":{
        "code":"SubscriptionAlreadyExist",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "SubscriptionCategoryNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The supplied category does not exist.</p>",
      "error":{
        "code":"SubscriptionCategoryNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "SubscriptionNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The subscription name does not exist.</p>",
      "error":{
        "code":"SubscriptionNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "SupportedCharacterSetsList":{
      "type":"list",
      "member":{
        "shape":"CharacterSet",
        "locationName":"CharacterSet"
      }
    },
    "SupportedTimezonesList":{
      "type":"list",
      "member":{
        "shape":"Timezone",
        "locationName":"Timezone"
      }
    },
    "TStamp":{"type":"timestamp"},
    "Tag":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"String",
          "documentation":"<p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with \"aws:\" or \"rds:\". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").</p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with \"aws:\" or \"rds:\". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").</p>"
        }
      },
      "documentation":"<p>Metadata assigned to an Amazon RDS resource consisting of a key-value pair.</p>"
    },
    "TagList":{
      "type":"list",
      "member":{
        "shape":"Tag",
        "locationName":"Tag"
      },
      "documentation":"<p>A list of tags. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>"
    },
    "TagListMessage":{
      "type":"structure",
      "members":{
        "TagList":{
          "shape":"TagList",
          "documentation":"<p>List of tags returned by the ListTagsForResource operation.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "Timezone":{
      "type":"structure",
      "members":{
        "TimezoneName":{
          "shape":"String",
          "documentation":"<p>The name of the time zone.</p>"
        }
      },
      "documentation":"<p>A time zone associated with a <a>DBInstance</a> or a <a>DBSnapshot</a>. This data type is an element in the response to the <a>DescribeDBInstances</a>, the <a>DescribeDBSnapshots</a>, and the <a>DescribeDBEngineVersions</a> actions. </p>"
    },
    "UpgradeTarget":{
      "type":"structure",
      "members":{
        "Engine":{
          "shape":"String",
          "documentation":"<p>The name of the upgrade target database engine.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the upgrade target database engine.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The version of the database engine that a DB instance can be upgraded to.</p>"
        },
        "AutoUpgrade":{
          "shape":"Boolean",
          "documentation":"<p>A value that indicates whether the target version is applied to any source DB instances that have AutoMinorVersionUpgrade set to true.</p>"
        },
        "IsMajorVersionUpgrade":{
          "shape":"Boolean",
          "documentation":"<p>A value that indicates whether a database engine is upgraded to a major version.</p>"
        }
      },
      "documentation":"<p>The version of the database engine that a DB instance can be upgraded to.</p>"
    },
    "ValidDBInstanceModificationsMessage":{
      "type":"structure",
      "members":{
        "Storage":{
          "shape":"ValidStorageOptionsList",
          "documentation":"<p>Valid storage options for your DB instance. </p>"
        },
        "ValidProcessorFeatures":{
          "shape":"AvailableProcessorFeatureList",
          "documentation":"<p>Valid processor features for your DB instance. </p>"
        }
      },
      "documentation":"<p>Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. </p>",
      "wrapper":true
    },
    "ValidStorageOptions":{
      "type":"structure",
      "members":{
        "StorageType":{
          "shape":"String",
          "documentation":"<p>The valid storage types for your DB instance. For example, gp2, io1. </p>"
        },
        "StorageSize":{
          "shape":"RangeList",
          "documentation":"<p>The valid range of storage in gibibytes. For example, 100 to 16384. </p>"
        },
        "ProvisionedIops":{
          "shape":"RangeList",
          "documentation":"<p>The valid range of provisioned IOPS. For example, 1000-20000. </p>"
        },
        "IopsToStorageRatio":{
          "shape":"DoubleRangeList",
          "documentation":"<p>The valid range of Provisioned IOPS to gibibytes of storage multiplier. For example, 3-10, which means that provisioned IOPS can be between 3 and 10 times storage. </p>"
        }
      },
      "documentation":"<p>Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. </p>"
    },
    "ValidStorageOptionsList":{
      "type":"list",
      "member":{
        "shape":"ValidStorageOptions",
        "locationName":"ValidStorageOptions"
      }
    },
    "ValidUpgradeTargetList":{
      "type":"list",
      "member":{
        "shape":"UpgradeTarget",
        "locationName":"UpgradeTarget"
      }
    },
    "VpcSecurityGroupIdList":{
      "type":"list",
      "member":{
        "shape":"String",
        "locationName":"VpcSecurityGroupId"
      }
    },
    "VpcSecurityGroupMembership":{
      "type":"structure",
      "members":{
        "VpcSecurityGroupId":{
          "shape":"String",
          "documentation":"<p>The name of the VPC security group.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the VPC security group.</p>"
        }
      },
      "documentation":"<p>This data type is used as a response element for queries on VPC security group membership.</p>"
    },
    "VpcSecurityGroupMembershipList":{
      "type":"list",
      "member":{
        "shape":"VpcSecurityGroupMembership",
        "locationName":"VpcSecurityGroupMembership"
      }
    }
  },
  "documentation":"<fullname>Amazon Relational Database Service</fullname> <p> </p> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Note that Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html\">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html\">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html\">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html\">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces\">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html\">Using the Query API</a>.</p> </li> </ul>"
}
