awsim['neptune'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2014-10-31",
    "endpointPrefix":"rds",
    "protocol":"query",
    "serviceAbbreviation":"Amazon Neptune",
    "serviceFullName":"Amazon Neptune",
    "serviceId":"Neptune",
    "signatureVersion":"v4",
    "signingName":"rds",
    "uid":"neptune-2014-10-31",
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
      "documentation":"<p>Associates an Identity and Access Management (IAM) role from an Neptune DB cluster. </p>"
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
      "documentation":"<p>Adds a source identifier to an existing event notification subscription.</p>"
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
      "documentation":"<p>Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.</p>"
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
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>"
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
      "documentation":"<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another AWS Region. In that case, the AWS Region where you call the <code>CopyDBClusterSnapshot</code> action is the destination AWS Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another AWS Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region.</p> </li> <li> <p> <code>PreSignedUrl</code> - A URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> action to be called in the source AWS Region where the DB cluster snapshot is copied from. The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The KMS key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot will be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:neptune-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\"> Signature Version 4 Signing Process</a>.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination AWS Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source AWS Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the pre-signed URL. </p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in \"copying\" status.</p>"
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
      "documentation":"<p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance. For cross-region replication where the DB cluster identified by <code>ReplicationSourceIdentifier</code> is encrypted, you must also specify the <code>PreSignedUrl</code> parameter.</p>"
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
      "documentation":"<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. </p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>"
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
      "documentation":"<p>Creates a snapshot of a DB cluster. </p>"
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
        {"shape":"DomainNotFoundFault"}
      ],
      "documentation":"<p>Creates a new DB instance.</p>"
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
      "documentation":"<p>Creates a new DB parameter group.</p> <p> A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. </p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>"
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
      "documentation":"<p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>"
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
      "documentation":"<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/>"
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
      "documentation":"<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p>"
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
      "documentation":"<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>"
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
      "documentation":"<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. </p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>If the specified DB instance is part of a DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a Read Replica of another DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <a>PromoteReadReplicaDBCluster</a> API action to promote the DB cluster so it's no longer a Read Replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>"
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
      "documentation":"<p>Deletes an event notification subscription.</p>"
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
      "documentation":"<p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group. </p>"
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
      "documentation":"<p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>"
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
      "documentation":"<p>Returns information about DB cluster snapshots. This API action supports pagination.</p>"
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
      "documentation":"<p>Returns information about provisioned DB clusters. This API supports pagination.</p>"
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
      "documentation":"<p>Returns information about provisioned instances. This API supports pagination.</p>"
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
      "documentation":"<p>Returns the default engine and system parameter information for the cluster database engine.</p>"
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
      "documentation":"<p>Displays a list of categories for all event source types, or, if specified, for a specified source type. </p>"
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
      "documentation":"<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>"
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
      "documentation":"<p>Lists all tags on an Amazon Neptune resource.</p>"
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
      "documentation":"<p>Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. </p>"
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
      "documentation":"<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>"
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
        {"shape":"DomainNotFoundFault"}
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
      "documentation":"<p> Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>"
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
      "documentation":"<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>"
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
      "documentation":"<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. </p>"
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
      "documentation":"<p>Disassociates an Identity and Access Management (IAM) role from a DB cluster. </p>"
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
      "documentation":"<p>Removes a source identifier from an existing event notification subscription.</p>"
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
      "documentation":"<p>Removes metadata tags from an Amazon Neptune resource.</p>"
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
      "documentation":"<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>"
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
        {"shape":"KMSKeyNotAccessibleFault"}
      ],
      "documentation":"<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>"
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
        {"shape":"StorageQuotaExceededFault"}
      ],
      "documentation":"<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. </p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>"
    }
  },
  "shapes":{
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
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>"
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
          "documentation":"<p>The name of the event notification subscription you want to add a source identifier to.</p>"
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
          "documentation":"<p>The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing\"> Constructing an Amazon Resource Name (ARN)</a>.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags to be assigned to the Amazon Neptune resource.</p>"
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
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing\"> Constructing an Amazon Resource Name (ARN)</a>.</p>"
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
    "AuthorizationNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p> <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>",
      "error":{
        "code":"AuthorizationNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "AvailabilityZone":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the availability zone.</p>"
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
    "Boolean":{"type":"boolean"},
    "BooleanOptional":{"type":"boolean"},
    "CertificateNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>CertificateIdentifier</i> does not refer to an existing certificate. </p>",
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
      "documentation":"<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p>"
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
          "documentation":"<p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing\"> Constructing an Amazon Resource Name (ARN)</a>. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB cluster parameter group.</p> </li> <li> <p>If the source DB cluster parameter group is in the same AWS Region as the copy, specify a valid DB parameter group identifier, for example <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source DB parameter group is in a different AWS Region than the copy, specify a valid DB cluster parameter group ARN, for example <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p> </li> </ul>"
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
          "documentation":"<p>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive.</p> <p>You can't copy an encrypted, shared DB cluster snapshot from one AWS Region to another.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the \"available\" state.</p> </li> <li> <p>If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier.</p> </li> <li> <p>If the source snapshot is in a different AWS Region than the copy, specify a valid DB cluster snapshot ARN. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>"
        },
        "TargetDBClusterSnapshotIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS AWS KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an unencrypted DB cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, Amazon Neptune encrypts the target DB cluster snapshot using the specified KMS encryption key. </p> <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot. </p> <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for <code>KmsKeyId</code>. </p> <p>To copy an encrypted DB cluster snapshot to another AWS Region, you must set <code>KmsKeyId</code> to the KMS key ID you want to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region.</p>"
        },
        "PreSignedUrl":{
          "shape":"String",
          "documentation":"<p>The URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> API action in the AWS Region that contains the source DB cluster snapshot to copy. The <code>PreSignedUrl</code> parameter must be used when copying an encrypted DB cluster snapshot from another AWS Region.</p> <p>The pre-signed URL must be a valid request for the <code>CopyDBSClusterSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied. The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot will be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:neptune-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\"> Signature Version 4 Signing Process</a>.</p>"
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
          "documentation":"<p> The identifier or ARN for the source DB parameter group. For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing\"> Constructing an Amazon Resource Name (ARN)</a>. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB parameter group.</p> </li> <li> <p>Must specify a valid DB parameter group identifier, for example <code>my-db-param-group</code>, or a valid ARN.</p> </li> </ul>"
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
    "CreateDBClusterMessage":{
      "type":"structure",
      "required":[
        "DBClusterIdentifier",
        "Engine"
      ],
      "members":{
        "AvailabilityZones":{
          "shape":"AvailabilityZones",
          "documentation":"<p>A list of EC2 Availability Zones that instances in the DB cluster can be created in. </p>"
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
          "documentation":"<p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating.</p>"
        },
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>"
        },
        "DBClusterParameterGroupName":{
          "shape":"String",
          "documentation":"<p> The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>"
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
          "documentation":"<p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>neptune</code> </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine to use.</p> <p>Example: <code>1.0.1</code> </p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>8182</code> </p>"
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
          "documentation":"<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html\"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html\"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>"
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
          "documentation":"<p>The AWS KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key. </p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is true and <code>ReplicationSourceIdentifier</code> is not specified, then Amazon Neptune will use your default encryption key.</p> </li> </ul> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p> <p>If you create a Read Replica of an encrypted DB cluster in another AWS Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This key is used to encrypt the Read Replica in that AWS Region.</p>"
        },
        "PreSignedUrl":{
          "shape":"String",
          "documentation":"<p>A URL that contains a Signature Version 4 signed request for the <code>CreateDBCluster</code> action to be called in the source AWS Region where the DB cluster is replicated from. You only need to specify <code>PreSignedUrl</code> when you are performing cross-region replication from an encrypted DB cluster.</p> <p>The pre-signed URL must be a valid request for the <code>CreateDBCluster</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster in the destination AWS Region. This should refer to the same KMS key for both the <code>CreateDBCluster</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that Read Replica will be created in.</p> </li> <li> <p> <code>ReplicationSourceIdentifier</code> - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster from the us-west-2 AWS Region, then your <code>ReplicationSourceIdentifier</code> would look like Example: <code>arn:aws:rds:us-west-2:123456789012:cluster:neptune-cluster1</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\"> Signature Version 4 Signing Process</a>.</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>"
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
          "documentation":"<p>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.</p>"
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
          "documentation":"<p>The database name. </p> <p>Type: String</p>"
        },
        "DBInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>"
        },
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of storage (in gibibytes) to allocate for the DB instance.</p> <p>Type: Integer</p> <p>Not applicable. Neptune cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in a Neptune cluster volume.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions. </p>"
        },
        "Engine":{
          "shape":"String",
          "documentation":"<p>The name of the database engine to be used for this instance. </p> <p>Valid Values: <code>neptune</code> </p>"
        },
        "MasterUsername":{
          "shape":"String",
          "documentation":"<p>The name for the master user. Not used.</p>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>The password for the master user. The password can include any printable ASCII character except \"/\", \"\"\", or \"@\".</p> <p> Not used. </p>"
        },
        "DBSecurityGroups":{
          "shape":"DBSecurityGroupNameList",
          "documentation":"<p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of EC2 VPC security groups to associate with this DB instance.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p> The EC2 Availability Zone that the DB instance is created in. </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same AWS Region as the current endpoint. </p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). </p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>"
        },
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days for which automated backups are retained.</p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p> The daily time range during which automated backups are created. </p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port number on which the database accepts connections.</p> <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> Default: <code>8182</code> </p> <p>Type: Integer</p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p>Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.</p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine to use.</p>"
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
          "documentation":"<p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance. </p>"
        },
        "OptionGroupName":{
          "shape":"String",
          "documentation":"<p>Indicates that the DB instance should be associated with the specified option group.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>"
        },
        "CharacterSetName":{
          "shape":"String",
          "documentation":"<p>Indicates that the DB instance should be associated with the specified CharacterSet.</p> <p>Not applicable. The character set is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p>This parameter is not supported.</p>",
          "deprecated":true
        },
        "Tags":{"shape":"TagList"},
        "DBClusterIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the DB cluster that the instance will belong to.</p> <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p> <p>Type: String</p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>Specifies the storage type to be associated with the DB instance.</p> <p>Not applicable. Storage is managed by the DB Cluster.</p>"
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
          "documentation":"<p>Specifies whether the DB instance is encrypted.</p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: false</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>"
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
          "documentation":"<p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>"
        },
        "DomainIAMRoleName":{
          "shape":"String",
          "documentation":"<p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>"
        },
        "PromotionTier":{
          "shape":"IntegerOptional",
          "documentation":"<p>A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>"
        },
        "Timezone":{
          "shape":"String",
          "documentation":"<p>The time zone of the DB instance. </p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable AWS Identity and Access Management (IAM) authentication for Neptune.</p> <p>Default: <code>false</code> </p>"
        },
        "EnablePerformanceInsights":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable Performance Insights for the DB instance, and otherwise false. </p>"
        },
        "PerformanceInsightsKMSKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>"
        },
        "EnableCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>"
        }
      },
      "documentation":"<p/>"
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
          "documentation":"<p>The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.</p>"
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
          "documentation":"<p> A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action. </p>"
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
    "DBCluster":{
      "type":"structure",
      "members":{
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p> <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size is not fixed, but instead automatically adjusts as needed.</p>"
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
          "documentation":"<p>Specifies the earliest time to which a database can be restored with point-in-time restore.</p>"
        },
        "Endpoint":{
          "shape":"String",
          "documentation":"<p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>"
        },
        "ReaderEndpoint":{
          "shape":"String",
          "documentation":"<p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances connections across the Read Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Neptune distributes the connection requests among the Read Replicas in the DB cluster. This functionality can help balance your read workload across multiple Read Replicas in your DB cluster. </p> <p>If a failover occurs, and the Read Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Read Replicas in the cluster, you can then reconnect to the reader endpoint.</p>"
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
        }
      },
      "documentation":"<p>Contains the details of an Amazon Neptune DB cluster. </p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action. </p>",
      "wrapper":true
    },
    "DBClusterAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>User already has a DB cluster with the given identifier.</p>",
      "error":{
        "code":"DBClusterAlreadyExistsFault",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
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
          "documentation":"<p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p>"
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
      "documentation":"<p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster. </p>",
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
      "documentation":"<p>Contains the details of an Amazon Neptune DB cluster parameter group. </p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action. </p>",
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
      "documentation":"<p> <i>DBClusterParameterGroupName</i> does not refer to an existing DB Cluster parameter group. </p>",
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
      "documentation":"<p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>",
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
        }
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
      "documentation":"<p>The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.</p>",
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
      "documentation":"<p>Contains the details for an Amazon Neptune DB cluster snapshot </p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action. </p>",
      "wrapper":true
    },
    "DBClusterSnapshotAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>User already has a DB cluster snapshot with the given identifier.</p>",
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
      "documentation":"<p> <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot. </p>",
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
          "documentation":"<p>The database name.</p>"
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
          "documentation":"<p>Contains one or more identifiers of DB clusters that are Read Replicas of this DB instance.</p>"
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
          "documentation":"<p>This parameter is not supported.</p>",
          "deprecated":true
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
          "documentation":"<p>Not supported</p>"
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
          "documentation":"<p>The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>"
        },
        "PromotionTier":{
          "shape":"IntegerOptional",
          "documentation":"<p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p>"
        },
        "DBInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the DB instance.</p>"
        },
        "Timezone":{
          "shape":"String",
          "documentation":"<p>Not supported. </p>"
        },
        "IAMDatabaseAuthenticationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>True if AWS Identity and Access Management (IAM) authentication is enabled, and otherwise false.</p>"
        },
        "PerformanceInsightsEnabled":{
          "shape":"BooleanOptional",
          "documentation":"<p>True if Performance Insights is enabled for the DB instance, and otherwise false.</p>"
        },
        "PerformanceInsightsKMSKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>"
        },
        "EnabledCloudwatchLogsExports":{
          "shape":"LogTypeList",
          "documentation":"<p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>"
        }
      },
      "documentation":"<p>Contains the details of an Amazon Neptune DB instance. </p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action. </p>",
      "wrapper":true
    },
    "DBInstanceAlreadyExistsFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>User already has a DB instance with the given identifier.</p>",
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
      "documentation":"<p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance. </p>",
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
          "documentation":"<p>Status of the DB instance. For a StatusType of read replica, the values can be replicating, error, stopped, or terminated.</p>"
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
      "documentation":"<p>Contains the details of an Amazon Neptune DB parameter group. </p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action. </p>",
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
      "documentation":"<p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group. </p>",
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
      "documentation":"<p>Request would result in user exceeding the allowed number of DB parameter groups.</p>",
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
      "documentation":"<p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>"
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
      "documentation":"<p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>"
    },
    "DBSecurityGroupMembershipList":{
      "type":"list",
      "member":{
        "shape":"DBSecurityGroupMembership",
        "locationName":"DBSecurityGroup"
      }
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
      "documentation":"<p> <i>DBSecurityGroupName</i> does not refer to an existing DB security group. </p>",
      "error":{
        "code":"DBSecurityGroupNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
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
    "DBSnapshotNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot. </p>",
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
      "documentation":"<p>Contains the details of an Amazon Neptune DB subnet group. </p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action. </p>",
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
    "DBSubnetGroupNotFoundFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group. </p>",
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
      "documentation":"<p>Request would result in user exceeding the allowed number of DB subnet groups.</p>",
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
      "documentation":"<p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>",
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
      "documentation":"<p>The DB upgrade failed because a resource the DB depends on could not be modified.</p>",
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
          "documentation":"<p>The name of the event notification subscription you want to delete.</p>"
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
          "documentation":"<p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my AWS account.</p> </li> <li> <p> <code>manual</code> - Return all DB cluster snapshots that have been taken by my AWS account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my AWS account.</p> </li> <li> <p> <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public DB cluster snapshots with these results by setting the <code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>"
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
          "documentation":"<p>Not currently supported.</p>"
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
          "documentation":"<p>Not currently supported.</p>"
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
          "documentation":"<p>The name of the event notification subscription you want to describe.</p>"
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
      "documentation":"<p> <i>Domain</i> does not refer to an existing Active Directory Domain. </p>",
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
          "documentation":"<p>The AWS customer account associated with the event notification subscription.</p>"
        },
        "CustSubscriptionId":{
          "shape":"String",
          "documentation":"<p>The event notification subscription Id.</p>"
        },
        "SnsTopicArn":{
          "shape":"String",
          "documentation":"<p>The topic ARN of the event notification subscription.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the event notification subscription.</p> <p>Constraints:</p> <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p> <p>The status \"no-permission\" indicates that Neptune no longer has permission to post to the SNS topic. The status \"topic-not-exist\" indicates that the topic was deleted after the subscription was created.</p>"
        },
        "SubscriptionCreationTime":{
          "shape":"String",
          "documentation":"<p>The time the event notification subscription was created.</p>"
        },
        "SourceType":{
          "shape":"String",
          "documentation":"<p>The source type for the event notification subscription.</p>"
        },
        "SourceIdsList":{
          "shape":"SourceIdsList",
          "documentation":"<p>A list of source IDs for the event notification subscription.</p>"
        },
        "EventCategoriesList":{
          "shape":"EventCategoriesList",
          "documentation":"<p>A list of event categories for the event notification subscription.</p>"
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
          "documentation":"<p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Read Replica in the DB cluster. For example, <code>mydbcluster-replica1</code>.</p>"
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
          "documentation":"<p>This parameter is not currently supported.</p>"
        },
        "Values":{
          "shape":"FilterValueList",
          "documentation":"<p>This parameter is not currently supported.</p>"
        }
      },
      "documentation":"<p>This type is not currently supported.</p>"
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
    "InstanceQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Request would result in user exceeding the allowed number of DB instances.</p>",
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
      "documentation":"<p>The DB cluster does not have enough capacity for the current operation.</p>",
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
      "documentation":"<p>Specified DB instance class is not available in the specified Availability Zone.</p>",
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
      "documentation":"<p>There is insufficient storage available for the current action. You may be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>",
      "error":{
        "code":"InsufficientStorageClusterCapacity",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "Integer":{"type":"integer"},
    "IntegerOptional":{"type":"integer"},
    "InvalidDBClusterSnapshotStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The supplied value is not a valid DB cluster snapshot state.</p>",
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
      "documentation":"<p>The DB cluster is not in a valid state.</p>",
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
      "documentation":"<p> The specified DB instance is not in the <i>available</i> state. </p>",
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
      "documentation":"<p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.</p>",
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
      "documentation":"<p>The state of the DB security group does not allow deletion.</p>",
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
      "documentation":"<p>The state of the DB snapshot does not allow deletion.</p>",
      "error":{
        "code":"InvalidDBSnapshotState",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidDBSubnetGroupStateFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The DB subnet group cannot be deleted because it is in use.</p>",
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
      "documentation":"<p> The DB subnet is not in the <i>available</i> state. </p>",
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
      "error":{
        "code":"InvalidEventSubscriptionState",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidRestoreFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Cannot restore from vpc backup to non-vpc DB instance.</p>",
      "error":{
        "code":"InvalidRestoreFault",
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
      "documentation":"<p>DB subnet group does not cover all Availability Zones after it is created because users' change.</p>",
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
      "documentation":"<p>Error accessing KMS key.</p>",
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
          "documentation":"<p>The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing\"> Constructing an Amazon Resource Name (ARN)</a>.</p>"
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
          "documentation":"<p>A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set to <code>false</code>, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If you set the <code>ApplyImmediately</code> parameter value to false, then changes to the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>"
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
          "documentation":"<p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true.</p> <p>For a list of valid engine versions, see <a>CreateDBInstance</a>, or call <a>DescribeDBEngineVersions</a>.</p>"
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
          "documentation":"<p>The new amount of storage (in gibibytes) to allocate for the DB instance. </p> <p>Not applicable. Storage is managed by the DB Cluster.</p>"
        },
        "DBInstanceClass":{
          "shape":"String",
          "documentation":"<p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions. </p> <p>If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request. </p> <p>Default: Uses existing setting</p>"
        },
        "DBSubnetGroupName":{
          "shape":"String",
          "documentation":"<p>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC. </p> <p>Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify <code>true</code> for the <code>ApplyImmediately</code> parameter. </p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetGroup</code> </p>"
        },
        "DBSecurityGroups":{
          "shape":"DBSecurityGroupNameList",
          "documentation":"<p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing DBSecurityGroups.</p> </li> </ul>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing VpcSecurityGroupIds.</p> </li> </ul>"
        },
        "ApplyImmediately":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance. </p> <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot. </p> <p>Default: <code>false</code> </p>"
        },
        "MasterUserPassword":{
          "shape":"String",
          "documentation":"<p>The new password for the master user. The password can include any printable ASCII character except \"/\", \"\"\", or \"@\".</p> <p>Not applicable. </p> <p>Default: Uses existing setting</p>"
        },
        "DBParameterGroupName":{
          "shape":"String",
          "documentation":"<p>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window.</p> <p>Default: Uses existing setting</p> <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>"
        },
        "BackupRetentionPeriod":{
          "shape":"IntegerOptional",
          "documentation":"<p>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: Uses existing setting</p>"
        },
        "PreferredBackupWindow":{
          "shape":"String",
          "documentation":"<p> The daily time range during which automated backups are created if automated backups are enabled. </p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format hh24:mi-hh24:mi</p> </li> <li> <p>Must be in Universal Time Coordinated (UTC)</p> </li> <li> <p>Must not conflict with the preferred maintenance window</p> </li> <li> <p>Must be at least 30 minutes</p> </li> </ul>"
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
          "documentation":"<p> The version number of the database engine to upgrade to. Changing this parameter results in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request. </p> <p>For major version upgrades, if a nondefault DB parameter group is currently in use, a new DB parameter group in the DB parameter group family for the new engine version must be specified. The new DB parameter group can be the default for that DB parameter group family.</p>"
        },
        "AllowMajorVersionUpgrade":{
          "shape":"Boolean",
          "documentation":"<p>Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints: This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.</p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p> Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version. </p>"
        },
        "LicenseModel":{
          "shape":"String",
          "documentation":"<p>The license model for the DB instance.</p> <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>"
        },
        "Iops":{
          "shape":"IntegerOptional",
          "documentation":"<p>The new Provisioned IOPS (I/O operations per second) value for the instance. </p> <p>Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>"
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
          "documentation":"<p>Specifies the storage type to be associated with the DB instance. </p> <p>If you specify Provisioned IOPS (<code>io1</code>), you must also include a value for the <code>Iops</code> parameter. </p> <p>If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon Neptune operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a Read Replica for the instance, and creating a DB snapshot of the instance. </p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p>Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>standard</code> </p>"
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
          "documentation":"<p>Not supported. </p>"
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
          "documentation":"<p>The port number on which the database accepts connections.</p> <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option group for the DB instance.</p> <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p> Default: <code>8182</code> </p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p>This parameter is not supported.</p>",
          "deprecated":true
        },
        "MonitoringRoleArn":{
          "shape":"String",
          "documentation":"<p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. </p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>"
        },
        "DomainIAMRoleName":{
          "shape":"String",
          "documentation":"<p>Not supported</p>"
        },
        "PromotionTier":{
          "shape":"IntegerOptional",
          "documentation":"<p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>"
        },
        "EnableIAMDatabaseAuthentication":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <p>Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: <code>false</code> </p>"
        },
        "EnablePerformanceInsights":{
          "shape":"BooleanOptional",
          "documentation":"<p>True to enable Performance Insights for the DB instance, and otherwise false.</p>"
        },
        "PerformanceInsightsKMSKeyId":{
          "shape":"String",
          "documentation":"<p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>"
        },
        "CloudwatchLogsExportConfiguration":{
          "shape":"CloudwatchLogsExportConfiguration",
          "documentation":"<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p>"
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
          "documentation":"<p>The name of the event notification subscription.</p>"
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
          "documentation":"<p> A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action. </p>"
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
      "error":{
        "code":"OptionGroupNotFoundFault",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
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
        "PendingCloudwatchLogsExports":{"shape":"PendingCloudwatchLogsExports"}
      },
      "documentation":"<p> This data type is used as a response element in the <a>ModifyDBInstance</a> action. </p>"
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
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>"
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
          "documentation":"<p>The name of the event notification subscription you want to remove a source identifier from.</p>"
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
          "documentation":"<p>The Amazon Neptune resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href=\"http://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing\"> Constructing an Amazon Resource Name (ARN)</a>.</p>"
        },
        "TagKeys":{
          "shape":"KeyList",
          "documentation":"<p>The tag key (name) of the tag to be removed.</p>"
        }
      },
      "documentation":"<p/>"
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
          "documentation":"<p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>"
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
          "documentation":"<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>"
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
    "SNSInvalidTopicFault":{
      "type":"structure",
      "members":{
      },
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
      "error":{
        "code":"SNSTopicArnNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
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
      "documentation":"<p>Request would result in user exceeding the allowed number of DB snapshots.</p>",
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
      "error":{
        "code":"SourceNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
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
    "StorageQuotaExceededFault":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>",
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
      "documentation":"<p> <i>StorageType</i> specified cannot be associated with the DB Instance. </p>",
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
      "documentation":"<p>Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.</p>"
    },
    "TagList":{
      "type":"list",
      "member":{
        "shape":"Tag",
        "locationName":"Tag"
      },
      "documentation":"<p>A list of tags. For more information, see <a href=\"http://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html\">Tagging Amazon Neptune Resources</a>. </p>"
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
      "documentation":"<p>A time zone associated with a <a>DBInstance</a>. This data type is an element in the response to the <a>DescribeDBInstances</a>, and the <a>DescribeDBEngineVersions</a> actions. </p>"
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
  "documentation":"<fullname>Amazon Neptune</fullname> <p> </p> <p> Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security. </p> <p>This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon Neptune API Reference</b> </p>"
}
