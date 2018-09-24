awsim['dms'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-01-01",
    "endpointPrefix":"dms",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Database Migration Service",
    "serviceId":"Database Migration Service",
    "signatureVersion":"v4",
    "targetPrefix":"AmazonDMSv20160101",
    "uid":"dms-2016-01-01"
  },
  "operations":{
    "AddTagsToResource":{
      "name":"AddTagsToResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsToResourceMessage"},
      "output":{"shape":"AddTagsToResourceResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Adds metadata tags to an AWS DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS.</p>"
    },
    "CreateEndpoint":{
      "name":"CreateEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateEndpointMessage"},
      "output":{"shape":"CreateEndpointResponse"},
      "errors":[
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"ResourceQuotaExceededFault"},
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"AccessDeniedFault"}
      ],
      "documentation":"<p>Creates an endpoint using the provided settings.</p>"
    },
    "CreateEventSubscription":{
      "name":"CreateEventSubscription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateEventSubscriptionMessage"},
      "output":{"shape":"CreateEventSubscriptionResponse"},
      "errors":[
        {"shape":"ResourceQuotaExceededFault"},
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"SNSInvalidTopicFault"},
        {"shape":"SNSNoAuthorizationFault"},
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p> Creates an AWS DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of AWS DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all AWS DMS sources belonging to your customer account.</p> <p>For more information about AWS DMS events, see <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html\"> Working with Events and Notifications </a> in the AWS Database MIgration Service User Guide.</p>"
    },
    "CreateReplicationInstance":{
      "name":"CreateReplicationInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateReplicationInstanceMessage"},
      "output":{"shape":"CreateReplicationInstanceResponse"},
      "errors":[
        {"shape":"AccessDeniedFault"},
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"InsufficientResourceCapacityFault"},
        {"shape":"ResourceQuotaExceededFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"ReplicationSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidResourceStateFault"},
        {"shape":"InvalidSubnet"},
        {"shape":"KMSKeyNotAccessibleFault"}
      ],
      "documentation":"<p>Creates the replication instance using the specified parameters.</p>"
    },
    "CreateReplicationSubnetGroup":{
      "name":"CreateReplicationSubnetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateReplicationSubnetGroupMessage"},
      "output":{"shape":"CreateReplicationSubnetGroupResponse"},
      "errors":[
        {"shape":"AccessDeniedFault"},
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"ResourceQuotaExceededFault"},
        {"shape":"ReplicationSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidSubnet"}
      ],
      "documentation":"<p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>"
    },
    "CreateReplicationTask":{
      "name":"CreateReplicationTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateReplicationTaskMessage"},
      "output":{"shape":"CreateReplicationTaskResponse"},
      "errors":[
        {"shape":"AccessDeniedFault"},
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"ResourceQuotaExceededFault"}
      ],
      "documentation":"<p>Creates a replication task using the specified parameters.</p>"
    },
    "DeleteCertificate":{
      "name":"DeleteCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteCertificateMessage"},
      "output":{"shape":"DeleteCertificateResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p>Deletes the specified certificate. </p>"
    },
    "DeleteEndpoint":{
      "name":"DeleteEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteEndpointMessage"},
      "output":{"shape":"DeleteEndpointResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>"
    },
    "DeleteEventSubscription":{
      "name":"DeleteEventSubscription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteEventSubscriptionMessage"},
      "output":{"shape":"DeleteEventSubscriptionResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p> Deletes an AWS DMS event subscription. </p>"
    },
    "DeleteReplicationInstance":{
      "name":"DeleteReplicationInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteReplicationInstanceMessage"},
      "output":{"shape":"DeleteReplicationInstanceResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>"
    },
    "DeleteReplicationSubnetGroup":{
      "name":"DeleteReplicationSubnetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteReplicationSubnetGroupMessage"},
      "output":{"shape":"DeleteReplicationSubnetGroupResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Deletes a subnet group.</p>"
    },
    "DeleteReplicationTask":{
      "name":"DeleteReplicationTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteReplicationTaskMessage"},
      "output":{"shape":"DeleteReplicationTaskResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p>Deletes the specified replication task.</p>"
    },
    "DescribeAccountAttributes":{
      "name":"DescribeAccountAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAccountAttributesMessage"},
      "output":{"shape":"DescribeAccountAttributesResponse"},
      "documentation":"<p>Lists all of the AWS DMS attributes for a customer account. The attributes include AWS DMS quotas for the account, such as the number of replication instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command does not take any parameters.</p>"
    },
    "DescribeCertificates":{
      "name":"DescribeCertificates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeCertificatesMessage"},
      "output":{"shape":"DescribeCertificatesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Provides a description of the certificate.</p>"
    },
    "DescribeConnections":{
      "name":"DescribeConnections",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConnectionsMessage"},
      "output":{"shape":"DescribeConnectionsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.</p>"
    },
    "DescribeEndpointTypes":{
      "name":"DescribeEndpointTypes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEndpointTypesMessage"},
      "output":{"shape":"DescribeEndpointTypesResponse"},
      "documentation":"<p>Returns information about the type of endpoints available.</p>"
    },
    "DescribeEndpoints":{
      "name":"DescribeEndpoints",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEndpointsMessage"},
      "output":{"shape":"DescribeEndpointsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Returns information about the endpoints for your account in the current region.</p>"
    },
    "DescribeEventCategories":{
      "name":"DescribeEventCategories",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventCategoriesMessage"},
      "output":{"shape":"DescribeEventCategoriesResponse"},
      "documentation":"<p>Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html\"> Working with Events and Notifications </a> in the AWS Database Migration Service User Guide. </p>"
    },
    "DescribeEventSubscriptions":{
      "name":"DescribeEventSubscriptions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventSubscriptionsMessage"},
      "output":{"shape":"DescribeEventSubscriptionsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>"
    },
    "DescribeEvents":{
      "name":"DescribeEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventsMessage"},
      "output":{"shape":"DescribeEventsResponse"},
      "documentation":"<p> Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html\"> Working with Events and Notifications </a>. </p>"
    },
    "DescribeOrderableReplicationInstances":{
      "name":"DescribeOrderableReplicationInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeOrderableReplicationInstancesMessage"},
      "output":{"shape":"DescribeOrderableReplicationInstancesResponse"},
      "documentation":"<p>Returns information about the replication instance types that can be created in the specified region.</p>"
    },
    "DescribeRefreshSchemasStatus":{
      "name":"DescribeRefreshSchemasStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeRefreshSchemasStatusMessage"},
      "output":{"shape":"DescribeRefreshSchemasStatusResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Returns the status of the RefreshSchemas operation.</p>"
    },
    "DescribeReplicationInstanceTaskLogs":{
      "name":"DescribeReplicationInstanceTaskLogs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeReplicationInstanceTaskLogsMessage"},
      "output":{"shape":"DescribeReplicationInstanceTaskLogsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p>Returns information about the task logs for the specified task.</p>"
    },
    "DescribeReplicationInstances":{
      "name":"DescribeReplicationInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeReplicationInstancesMessage"},
      "output":{"shape":"DescribeReplicationInstancesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Returns information about replication instances for your account in the current region.</p>"
    },
    "DescribeReplicationSubnetGroups":{
      "name":"DescribeReplicationSubnetGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeReplicationSubnetGroupsMessage"},
      "output":{"shape":"DescribeReplicationSubnetGroupsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Returns information about the replication subnet groups.</p>"
    },
    "DescribeReplicationTaskAssessmentResults":{
      "name":"DescribeReplicationTaskAssessmentResults",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeReplicationTaskAssessmentResultsMessage"},
      "output":{"shape":"DescribeReplicationTaskAssessmentResultsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Returns the task assessment results from Amazon S3. This action always returns the latest results.</p>"
    },
    "DescribeReplicationTasks":{
      "name":"DescribeReplicationTasks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeReplicationTasksMessage"},
      "output":{"shape":"DescribeReplicationTasksResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Returns information about replication tasks for your account in the current region.</p>"
    },
    "DescribeSchemas":{
      "name":"DescribeSchemas",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSchemasMessage"},
      "output":{"shape":"DescribeSchemasResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Returns information about the schema for the specified endpoint.</p> <p/>"
    },
    "DescribeTableStatistics":{
      "name":"DescribeTableStatistics",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTableStatisticsMessage"},
      "output":{"shape":"DescribeTableStatisticsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the \"last updated\" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>"
    },
    "ImportCertificate":{
      "name":"ImportCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ImportCertificateMessage"},
      "output":{"shape":"ImportCertificateResponse"},
      "errors":[
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"InvalidCertificateFault"},
        {"shape":"ResourceQuotaExceededFault"}
      ],
      "documentation":"<p>Uploads the specified certificate.</p>"
    },
    "ListTagsForResource":{
      "name":"ListTagsForResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagsForResourceMessage"},
      "output":{"shape":"ListTagsForResourceResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Lists all tags for an AWS DMS resource.</p>"
    },
    "ModifyEndpoint":{
      "name":"ModifyEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyEndpointMessage"},
      "output":{"shape":"ModifyEndpointResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"AccessDeniedFault"}
      ],
      "documentation":"<p>Modifies the specified endpoint.</p>"
    },
    "ModifyEventSubscription":{
      "name":"ModifyEventSubscription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyEventSubscriptionMessage"},
      "output":{"shape":"ModifyEventSubscriptionResponse"},
      "errors":[
        {"shape":"ResourceQuotaExceededFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"SNSInvalidTopicFault"},
        {"shape":"SNSNoAuthorizationFault"}
      ],
      "documentation":"<p>Modifies an existing AWS DMS event notification subscription. </p>"
    },
    "ModifyReplicationInstance":{
      "name":"ModifyReplicationInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyReplicationInstanceMessage"},
      "output":{"shape":"ModifyReplicationInstanceResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InsufficientResourceCapacityFault"},
        {"shape":"StorageQuotaExceededFault"},
        {"shape":"UpgradeDependencyFailureFault"}
      ],
      "documentation":"<p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>"
    },
    "ModifyReplicationSubnetGroup":{
      "name":"ModifyReplicationSubnetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyReplicationSubnetGroupMessage"},
      "output":{"shape":"ModifyReplicationSubnetGroupResponse"},
      "errors":[
        {"shape":"AccessDeniedFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"ResourceQuotaExceededFault"},
        {"shape":"SubnetAlreadyInUse"},
        {"shape":"ReplicationSubnetGroupDoesNotCoverEnoughAZs"},
        {"shape":"InvalidSubnet"}
      ],
      "documentation":"<p>Modifies the settings for the specified replication subnet group.</p>"
    },
    "ModifyReplicationTask":{
      "name":"ModifyReplicationTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyReplicationTaskMessage"},
      "output":{"shape":"ModifyReplicationTaskResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"ResourceAlreadyExistsFault"},
        {"shape":"KMSKeyNotAccessibleFault"}
      ],
      "documentation":"<p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about AWS DMS tasks, see the AWS DMS user guide at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html\"> Working with Migration Tasks </a> </p>"
    },
    "RebootReplicationInstance":{
      "name":"RebootReplicationInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RebootReplicationInstanceMessage"},
      "output":{"shape":"RebootReplicationInstanceResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p>Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.</p>"
    },
    "RefreshSchemas":{
      "name":"RefreshSchemas",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RefreshSchemasMessage"},
      "output":{"shape":"RefreshSchemasResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"ResourceQuotaExceededFault"}
      ],
      "documentation":"<p>Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.</p>"
    },
    "ReloadTables":{
      "name":"ReloadTables",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ReloadTablesMessage"},
      "output":{"shape":"ReloadTablesResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p>Reloads the target database table with the source data. </p>"
    },
    "RemoveTagsFromResource":{
      "name":"RemoveTagsFromResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveTagsFromResourceMessage"},
      "output":{"shape":"RemoveTagsFromResourceResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p>Removes metadata tags from a DMS resource.</p>"
    },
    "StartReplicationTask":{
      "name":"StartReplicationTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartReplicationTaskMessage"},
      "output":{"shape":"StartReplicationTaskResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"},
        {"shape":"AccessDeniedFault"}
      ],
      "documentation":"<p>Starts the replication task.</p> <p>For more information about AWS DMS tasks, see the AWS DMS user guide at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html\"> Working with Migration Tasks </a> </p>"
    },
    "StartReplicationTaskAssessment":{
      "name":"StartReplicationTaskAssessment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartReplicationTaskAssessmentMessage"},
      "output":{"shape":"StartReplicationTaskAssessmentResponse"},
      "errors":[
        {"shape":"InvalidResourceStateFault"},
        {"shape":"ResourceNotFoundFault"}
      ],
      "documentation":"<p> Starts the replication task assessment for unsupported data types in the source database. </p>"
    },
    "StopReplicationTask":{
      "name":"StopReplicationTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopReplicationTaskMessage"},
      "output":{"shape":"StopReplicationTaskResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"}
      ],
      "documentation":"<p>Stops the replication task.</p> <p/>"
    },
    "TestConnection":{
      "name":"TestConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TestConnectionMessage"},
      "output":{"shape":"TestConnectionResponse"},
      "errors":[
        {"shape":"ResourceNotFoundFault"},
        {"shape":"InvalidResourceStateFault"},
        {"shape":"KMSKeyNotAccessibleFault"},
        {"shape":"ResourceQuotaExceededFault"}
      ],
      "documentation":"<p>Tests the connection between the replication instance and the endpoint.</p>"
    }
  },
  "shapes":{
    "AccessDeniedFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>AWS DMS was denied access to the endpoint.</p>",
      "exception":true
    },
    "AccountQuota":{
      "type":"structure",
      "members":{
        "AccountQuotaName":{
          "shape":"String",
          "documentation":"<p>The name of the AWS DMS quota for this AWS account.</p>"
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
      "documentation":"<p>Describes a quota for an AWS account, for example, the number of replication instances allowed.</p>"
    },
    "AccountQuotaList":{
      "type":"list",
      "member":{"shape":"AccountQuota"}
    },
    "AddTagsToResourceMessage":{
      "type":"structure",
      "required":[
        "ResourceArn",
        "Tags"
      ],
      "members":{
        "ResourceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS DMS resource the tag is to be added to. AWS DMS resources include a replication instance, endpoint, and a replication task.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tag to be assigned to the DMS resource.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "AddTagsToResourceResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p/>"
    },
    "AuthMechanismValue":{
      "type":"string",
      "enum":[
        "default",
        "mongodb_cr",
        "scram_sha_1"
      ]
    },
    "AuthTypeValue":{
      "type":"string",
      "enum":[
        "no",
        "password"
      ]
    },
    "AvailabilityZone":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the availability zone.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "Boolean":{"type":"boolean"},
    "BooleanOptional":{"type":"boolean"},
    "Certificate":{
      "type":"structure",
      "members":{
        "CertificateIdentifier":{
          "shape":"String",
          "documentation":"<p>The customer-assigned name of the certificate. Valid characters are A-z and 0-9.</p>"
        },
        "CertificateCreationDate":{
          "shape":"TStamp",
          "documentation":"<p>The date that the certificate was created.</p>"
        },
        "CertificatePem":{
          "shape":"String",
          "documentation":"<p>The contents of the .pem X.509 certificate file for the certificate.</p>"
        },
        "CertificateWallet":{
          "shape":"CertificateWallet",
          "documentation":"<p>The location of the imported Oracle Wallet certificate for use with SSL.</p>"
        },
        "CertificateArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the certificate.</p>"
        },
        "CertificateOwner":{
          "shape":"String",
          "documentation":"<p>The owner of the certificate.</p>"
        },
        "ValidFromDate":{
          "shape":"TStamp",
          "documentation":"<p>The beginning date that the certificate is valid.</p>"
        },
        "ValidToDate":{
          "shape":"TStamp",
          "documentation":"<p>The final date that the certificate is valid.</p>"
        },
        "SigningAlgorithm":{
          "shape":"String",
          "documentation":"<p>The signing algorithm for the certificate.</p>"
        },
        "KeyLength":{
          "shape":"IntegerOptional",
          "documentation":"<p>The key length of the cryptographic algorithm being used.</p>"
        }
      },
      "documentation":"<p>The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.</p>"
    },
    "CertificateList":{
      "type":"list",
      "member":{"shape":"Certificate"}
    },
    "CertificateWallet":{"type":"blob"},
    "CompressionTypeValue":{
      "type":"string",
      "enum":[
        "none",
        "gzip"
      ]
    },
    "Connection":{
      "type":"structure",
      "members":{
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The connection status.</p>"
        },
        "LastFailureMessage":{
          "shape":"String",
          "documentation":"<p>The error message when the connection last failed.</p>"
        },
        "EndpointIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the endpoint. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>"
        },
        "ReplicationInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The replication instance identifier. This parameter is stored as a lowercase string.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ConnectionList":{
      "type":"list",
      "member":{"shape":"Connection"}
    },
    "CreateEndpointMessage":{
      "type":"structure",
      "required":[
        "EndpointIdentifier",
        "EndpointType",
        "EngineName"
      ],
      "members":{
        "EndpointIdentifier":{
          "shape":"String",
          "documentation":"<p>The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>"
        },
        "EndpointType":{
          "shape":"ReplicationEndpointTypeValue",
          "documentation":"<p>The type of endpoint.</p>"
        },
        "EngineName":{
          "shape":"String",
          "documentation":"<p>The type of engine for the endpoint. Valid values, depending on the EndPointType, include mysql, oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb, sybase, dynamodb, mongodb, and sqlserver.</p>"
        },
        "Username":{
          "shape":"String",
          "documentation":"<p>The user name to be used to login to the endpoint database.</p>"
        },
        "Password":{
          "shape":"SecretString",
          "documentation":"<p>The password to be used to login to the endpoint database.</p>"
        },
        "ServerName":{
          "shape":"String",
          "documentation":"<p>The name of the server where the endpoint database resides.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port used by the endpoint database.</p>"
        },
        "DatabaseName":{
          "shape":"String",
          "documentation":"<p>The name of the endpoint database.</p>"
        },
        "ExtraConnectionAttributes":{
          "shape":"String",
          "documentation":"<p>Additional attributes associated with the connection.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The KMS key identifier that will be used to encrypt the connection parameters. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>Tags to be added to the endpoint.</p>"
        },
        "CertificateArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) for the certificate.</p>"
        },
        "SslMode":{
          "shape":"DmsSslModeValue",
          "documentation":"<p>The SSL mode to use for the SSL connection.</p> <p>SSL mode can be one of four values: none, require, verify-ca, verify-full. </p> <p>The default value is none.</p>"
        },
        "ServiceAccessRoleArn":{
          "shape":"String",
          "documentation":"<p> The Amazon Resource Name (ARN) for the service access role you want to use to create the endpoint. </p>"
        },
        "ExternalTableDefinition":{
          "shape":"String",
          "documentation":"<p>The external table definition. </p>"
        },
        "DynamoDbSettings":{
          "shape":"DynamoDbSettings",
          "documentation":"<p>Settings in JSON format for the target Amazon DynamoDB endpoint. For more information about the available settings, see the <b>Using Object Mapping to Migrate Data to DynamoDB</b> section at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html\"> Using an Amazon DynamoDB Database as a Target for AWS Database Migration Service</a>. </p>"
        },
        "S3Settings":{
          "shape":"S3Settings",
          "documentation":"<p>Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see the <b>Extra Connection Attributes</b> section at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html\"> Using Amazon S3 as a Target for AWS Database Migration Service</a>. </p>"
        },
        "DmsTransferSettings":{
          "shape":"DmsTransferSettings",
          "documentation":"<p> The settings in JSON format for the DMS Transfer type source endpoint. </p> <p>Attributes include:</p> <ul> <li> <p>serviceAccessRoleArn - The IAM role that has permission to access the Amazon S3 bucket.</p> </li> <li> <p>bucketName - The name of the S3 bucket to use.</p> </li> <li> <p>compressionType - An optional parameter to use GZIP to compress the target files. Set to NONE (the default) or do not use to leave the files uncompressed.</p> </li> </ul> <p>Shorthand syntax: ServiceAccessRoleArn=string ,BucketName=string,CompressionType=string</p> <p>JSON syntax:</p> <p> { \"ServiceAccessRoleArn\": \"string\", \"BucketName\": \"string\", \"CompressionType\": \"none\"|\"gzip\" } </p>"
        },
        "MongoDbSettings":{
          "shape":"MongoDbSettings",
          "documentation":"<p>Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the <b>Configuration Properties When Using MongoDB as a Source for AWS Database Migration Service</b> section at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html\"> Using MongoDB as a Target for AWS Database Migration Service</a>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateEndpointResponse":{
      "type":"structure",
      "members":{
        "Endpoint":{
          "shape":"Endpoint",
          "documentation":"<p>The endpoint that was created.</p>"
        }
      },
      "documentation":"<p/>"
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
          "documentation":"<p>The name of the AWS DMS event notification subscription. </p> <p>Constraints: The name must be less than 255 characters. </p>"
        },
        "SnsTopicArn":{
          "shape":"String",
          "documentation":"<p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it. </p>"
        },
        "SourceType":{
          "shape":"String",
          "documentation":"<p> The type of AWS DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to <code>replication-instance</code>. If this value is not specified, all events are returned. </p> <p>Valid values: replication-instance | migration-task</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p> A list of event categories for a source type that you want to subscribe to. You can see a list of the categories for a given source type by calling the <b>DescribeEventCategories</b> action or in the topic <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html\"> Working with Events and Notifications</a> in the AWS Database Migration Service User Guide. </p>"
        },
        "SourceIds":{
          "shape":"SourceIdsList",
          "documentation":"<p> The list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens. </p>"
        },
        "Enabled":{
          "shape":"BooleanOptional",
          "documentation":"<p> A Boolean value; set to <b>true</b> to activate the subscription, or set to <b>false</b> to create the subscription but not activate it. </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>A tag to be attached to the event subscription.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateEventSubscriptionResponse":{
      "type":"structure",
      "members":{
        "EventSubscription":{
          "shape":"EventSubscription",
          "documentation":"<p>The event subscription that was created.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateReplicationInstanceMessage":{
      "type":"structure",
      "required":[
        "ReplicationInstanceIdentifier",
        "ReplicationInstanceClass"
      ],
      "members":{
        "ReplicationInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The replication instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>myrepinstance</code> </p>"
        },
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of storage (in gigabytes) to be initially allocated for the replication instance.</p>"
        },
        "ReplicationInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the replication instance as specified by the replication instance class.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p> Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. </p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p>The EC2 Availability Zone that the replication instance will be created in.</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's region.</p> <p> Example: <code>us-east-1d</code> </p>"
        },
        "ReplicationSubnetGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>A subnet group to associate with the replication instance.</p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p> Specifies if the replication instance is a Multi-AZ deployment. You cannot set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version number of the replication instance.</p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p>Indicates that minor engine upgrades will be applied automatically to the replication instance during the maintenance window.</p> <p>Default: <code>true</code> </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>Tags to be associated with the replication instance.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The KMS key identifier that will be used to encrypt the content on the replication instance. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.</p>"
        },
        "PubliclyAccessible":{
          "shape":"BooleanOptional",
          "documentation":"<p> Specifies the accessibility options for the replication instance. A value of <code>true</code> represents an instance with a public IP address. A value of <code>false</code> represents an instance with a private IP address. The default value is <code>true</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateReplicationInstanceResponse":{
      "type":"structure",
      "members":{
        "ReplicationInstance":{
          "shape":"ReplicationInstance",
          "documentation":"<p>The replication instance that was created.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateReplicationSubnetGroupMessage":{
      "type":"structure",
      "required":[
        "ReplicationSubnetGroupIdentifier",
        "ReplicationSubnetGroupDescription",
        "SubnetIds"
      ],
      "members":{
        "ReplicationSubnetGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The name for the replication subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens. Must not be \"default\".</p> <p>Example: <code>mySubnetgroup</code> </p>"
        },
        "ReplicationSubnetGroupDescription":{
          "shape":"String",
          "documentation":"<p>The description for the subnet group.</p>"
        },
        "SubnetIds":{
          "shape":"SubnetIdentifierList",
          "documentation":"<p>The EC2 subnet IDs for the subnet group.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tag to be assigned to the subnet group.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateReplicationSubnetGroupResponse":{
      "type":"structure",
      "members":{
        "ReplicationSubnetGroup":{
          "shape":"ReplicationSubnetGroup",
          "documentation":"<p>The replication subnet group that was created.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateReplicationTaskMessage":{
      "type":"structure",
      "required":[
        "ReplicationTaskIdentifier",
        "SourceEndpointArn",
        "TargetEndpointArn",
        "ReplicationInstanceArn",
        "MigrationType",
        "TableMappings"
      ],
      "members":{
        "ReplicationTaskIdentifier":{
          "shape":"String",
          "documentation":"<p>The replication task identifier.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>"
        },
        "SourceEndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "TargetEndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "MigrationType":{
          "shape":"MigrationTypeValue",
          "documentation":"<p>The migration type.</p>"
        },
        "TableMappings":{
          "shape":"String",
          "documentation":"<p>When using the AWS CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with \"file://\". When working with the DMS API, provide the JSON as the parameter value.</p> <p>For example, --table-mappings file://mappingfile.json</p>"
        },
        "ReplicationTaskSettings":{
          "shape":"String",
          "documentation":"<p>Settings for the task, such as target metadata settings. For a complete list of task settings, see <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html\">Task Settings for AWS Database Migration Service Tasks</a>.</p>"
        },
        "CdcStartTime":{
          "shape":"TStamp",
          "documentation":"<p>Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>"
        },
        "CdcStartPosition":{
          "shape":"String",
          "documentation":"<p>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p> The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position \"checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93\"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>"
        },
        "CdcStopPosition":{
          "shape":"String",
          "documentation":"<p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>Tags to be added to the replication instance.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "CreateReplicationTaskResponse":{
      "type":"structure",
      "members":{
        "ReplicationTask":{
          "shape":"ReplicationTask",
          "documentation":"<p>The replication task that was created.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteCertificateMessage":{
      "type":"structure",
      "required":["CertificateArn"],
      "members":{
        "CertificateArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the deleted certificate.</p>"
        }
      }
    },
    "DeleteCertificateResponse":{
      "type":"structure",
      "members":{
        "Certificate":{
          "shape":"Certificate",
          "documentation":"<p>The Secure Sockets Layer (SSL) certificate.</p>"
        }
      }
    },
    "DeleteEndpointMessage":{
      "type":"structure",
      "required":["EndpointArn"],
      "members":{
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteEndpointResponse":{
      "type":"structure",
      "members":{
        "Endpoint":{
          "shape":"Endpoint",
          "documentation":"<p>The endpoint that was deleted.</p>"
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
          "documentation":"<p>The name of the DMS event notification subscription to be deleted.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteEventSubscriptionResponse":{
      "type":"structure",
      "members":{
        "EventSubscription":{
          "shape":"EventSubscription",
          "documentation":"<p>The event subscription that was deleted.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteReplicationInstanceMessage":{
      "type":"structure",
      "required":["ReplicationInstanceArn"],
      "members":{
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance to be deleted.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteReplicationInstanceResponse":{
      "type":"structure",
      "members":{
        "ReplicationInstance":{
          "shape":"ReplicationInstance",
          "documentation":"<p>The replication instance that was deleted.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteReplicationSubnetGroupMessage":{
      "type":"structure",
      "required":["ReplicationSubnetGroupIdentifier"],
      "members":{
        "ReplicationSubnetGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The subnet group name of the replication instance.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteReplicationSubnetGroupResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p/>"
    },
    "DeleteReplicationTaskMessage":{
      "type":"structure",
      "required":["ReplicationTaskArn"],
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task to be deleted.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteReplicationTaskResponse":{
      "type":"structure",
      "members":{
        "ReplicationTask":{
          "shape":"ReplicationTask",
          "documentation":"<p>The deleted replication task.</p>"
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
    "DescribeAccountAttributesResponse":{
      "type":"structure",
      "members":{
        "AccountQuotas":{
          "shape":"AccountQuotaList",
          "documentation":"<p>Account quota information.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeCertificatesMessage":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the certificate described in the form of key-value pairs.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 10</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      }
    },
    "DescribeCertificatesResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p>The pagination token.</p>"
        },
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>The Secure Sockets Layer (SSL) certificates associated with the replication instance.</p>"
        }
      }
    },
    "DescribeConnectionsMessage":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>The filters applied to the connection.</p> <p>Valid filter names: endpoint-arn | replication-instance-arn</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeConnectionsResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "Connections":{
          "shape":"ConnectionList",
          "documentation":"<p>A description of the connections.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEndpointTypesMessage":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the describe action.</p> <p>Valid filter names: engine-name | endpoint-type</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEndpointTypesResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "SupportedEndpointTypes":{
          "shape":"SupportedEndpointTypeList",
          "documentation":"<p>The type of endpoints that are supported.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEndpointsMessage":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the describe action.</p> <p>Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEndpointsResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "Endpoints":{
          "shape":"EndpointList",
          "documentation":"<p>Endpoint description.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEventCategoriesMessage":{
      "type":"structure",
      "members":{
        "SourceType":{
          "shape":"String",
          "documentation":"<p> The type of AWS DMS resource that generates events. </p> <p>Valid values: replication-instance | migration-task</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the action.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEventCategoriesResponse":{
      "type":"structure",
      "members":{
        "EventCategoryGroupList":{
          "shape":"EventCategoryGroupList",
          "documentation":"<p>A list of event categories.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEventSubscriptionsMessage":{
      "type":"structure",
      "members":{
        "SubscriptionName":{
          "shape":"String",
          "documentation":"<p>The name of the AWS DMS event subscription to be described.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the action.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEventSubscriptionsResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "EventSubscriptionsList":{
          "shape":"EventSubscriptionsList",
          "documentation":"<p>A list of event subscriptions.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEventsMessage":{
      "type":"structure",
      "members":{
        "SourceIdentifier":{
          "shape":"String",
          "documentation":"<p> The identifier of the event source. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It cannot end with a hyphen or contain two consecutive hyphens. </p>"
        },
        "SourceType":{
          "shape":"SourceType",
          "documentation":"<p>The type of AWS DMS resource that generates events.</p> <p>Valid values: replication-instance | migration-task</p>"
        },
        "StartTime":{
          "shape":"TStamp",
          "documentation":"<p>The start time for the events to be listed.</p>"
        },
        "EndTime":{
          "shape":"TStamp",
          "documentation":"<p>The end time for the events to be listed.</p>"
        },
        "Duration":{
          "shape":"IntegerOptional",
          "documentation":"<p>The duration of the events to be listed.</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p>A list of event categories for a source type that you want to subscribe to.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the action.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeEventsResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "Events":{
          "shape":"EventList",
          "documentation":"<p>The events described.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeOrderableReplicationInstancesMessage":{
      "type":"structure",
      "members":{
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeOrderableReplicationInstancesResponse":{
      "type":"structure",
      "members":{
        "OrderableReplicationInstances":{
          "shape":"OrderableReplicationInstanceList",
          "documentation":"<p>The order-able replication instances available.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeRefreshSchemasStatusMessage":{
      "type":"structure",
      "required":["EndpointArn"],
      "members":{
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeRefreshSchemasStatusResponse":{
      "type":"structure",
      "members":{
        "RefreshSchemasStatus":{
          "shape":"RefreshSchemasStatus",
          "documentation":"<p>The status of the schema.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReplicationInstanceTaskLogsMessage":{
      "type":"structure",
      "required":["ReplicationInstanceArn"],
      "members":{
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>"
        }
      }
    },
    "DescribeReplicationInstanceTaskLogsResponse":{
      "type":"structure",
      "members":{
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "ReplicationInstanceTaskLogs":{
          "shape":"ReplicationInstanceTaskLogsList",
          "documentation":"<p>An array of replication task log metadata. Each member of the array contains the replication task name, ARN, and task log size (in bytes). </p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>"
        }
      }
    },
    "DescribeReplicationInstancesMessage":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the describe action.</p> <p>Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReplicationInstancesResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "ReplicationInstances":{
          "shape":"ReplicationInstanceList",
          "documentation":"<p>The replication instances described.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReplicationSubnetGroupsMessage":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the describe action.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReplicationSubnetGroupsResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "ReplicationSubnetGroups":{
          "shape":"ReplicationSubnetGroups",
          "documentation":"<p>A description of the replication subnet groups.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReplicationTaskAssessmentResultsMessage":{
      "type":"structure",
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>- The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input parameter is specified the API will return only one result and ignore the values of the max-records and marker parameters. </p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReplicationTaskAssessmentResultsResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "BucketName":{
          "shape":"String",
          "documentation":"<p>- The Amazon S3 bucket where the task assessment report is located. </p>"
        },
        "ReplicationTaskAssessmentResults":{
          "shape":"ReplicationTaskAssessmentResultList",
          "documentation":"<p> The task assessment report. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReplicationTasksMessage":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the describe action.</p> <p>Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeReplicationTasksResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "ReplicationTasks":{
          "shape":"ReplicationTaskList",
          "documentation":"<p>A description of the replication tasks.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeSchemasMessage":{
      "type":"structure",
      "required":["EndpointArn"],
      "members":{
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeSchemasResponse":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "Schemas":{
          "shape":"SchemaList",
          "documentation":"<p>The described schema.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeTableStatisticsMessage":{
      "type":"structure",
      "required":["ReplicationTaskArn"],
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task.</p>"
        },
        "MaxRecords":{
          "shape":"IntegerOptional",
          "documentation":"<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 500.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>Filters applied to the describe table statistics action.</p> <p>Valid filter names: schema-name | table-name | table-state</p> <p>A combination of filters creates an AND condition where each record matches all specified filters.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeTableStatisticsResponse":{
      "type":"structure",
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task.</p>"
        },
        "TableStatistics":{
          "shape":"TableStatisticsList",
          "documentation":"<p>The table statistics.</p>"
        },
        "Marker":{
          "shape":"String",
          "documentation":"<p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "DmsSslModeValue":{
      "type":"string",
      "enum":[
        "none",
        "require",
        "verify-ca",
        "verify-full"
      ]
    },
    "DmsTransferSettings":{
      "type":"structure",
      "members":{
        "ServiceAccessRoleArn":{
          "shape":"String",
          "documentation":"<p> The IAM role that has permission to access the Amazon S3 bucket. </p>"
        },
        "BucketName":{
          "shape":"String",
          "documentation":"<p> The name of the S3 bucket to use. </p>"
        }
      },
      "documentation":"<p> The settings in JSON format for the DMS Transfer type source endpoint. </p>"
    },
    "DynamoDbSettings":{
      "type":"structure",
      "required":["ServiceAccessRoleArn"],
      "members":{
        "ServiceAccessRoleArn":{
          "shape":"String",
          "documentation":"<p> The Amazon Resource Name (ARN) used by the service access IAM role. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "Endpoint":{
      "type":"structure",
      "members":{
        "EndpointIdentifier":{
          "shape":"String",
          "documentation":"<p>The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>"
        },
        "EndpointType":{
          "shape":"ReplicationEndpointTypeValue",
          "documentation":"<p>The type of endpoint.</p>"
        },
        "EngineName":{
          "shape":"String",
          "documentation":"<p>The database engine name. Valid values, depending on the EndPointType, include mysql, oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb, sybase, sybase, dynamodb, mongodb, and sqlserver.</p>"
        },
        "EngineDisplayName":{
          "shape":"String",
          "documentation":"<p>The expanded name for the engine name. For example, if the <code>EngineName</code> parameter is \"aurora,\" this value would be \"Amazon Aurora MySQL.\"</p>"
        },
        "Username":{
          "shape":"String",
          "documentation":"<p>The user name used to connect to the endpoint.</p>"
        },
        "ServerName":{
          "shape":"String",
          "documentation":"<p>The name of the server at the endpoint.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port value used to access the endpoint.</p>"
        },
        "DatabaseName":{
          "shape":"String",
          "documentation":"<p>The name of the database at the endpoint.</p>"
        },
        "ExtraConnectionAttributes":{
          "shape":"String",
          "documentation":"<p>Additional connection attributes used to connect to the endpoint.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the endpoint.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The KMS key identifier that will be used to encrypt the connection parameters. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.</p>"
        },
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "CertificateArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) used for SSL connection to the endpoint.</p>"
        },
        "SslMode":{
          "shape":"DmsSslModeValue",
          "documentation":"<p>The SSL mode used to connect to the endpoint.</p> <p>SSL mode can be one of four values: none, require, verify-ca, verify-full. </p> <p>The default value is none.</p>"
        },
        "ServiceAccessRoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) used by the service access IAM role.</p>"
        },
        "ExternalTableDefinition":{
          "shape":"String",
          "documentation":"<p>The external table definition.</p>"
        },
        "ExternalId":{
          "shape":"String",
          "documentation":"<p> Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account. </p>"
        },
        "DynamoDbSettings":{
          "shape":"DynamoDbSettings",
          "documentation":"<p>The settings for the target DynamoDB database. For more information, see the <code>DynamoDBSettings</code> structure.</p>"
        },
        "S3Settings":{
          "shape":"S3Settings",
          "documentation":"<p>The settings for the S3 target endpoint. For more information, see the <code>S3Settings</code> structure.</p>"
        },
        "DmsTransferSettings":{
          "shape":"DmsTransferSettings",
          "documentation":"<p> The settings in JSON format for the DMS Transfer type source endpoint. </p> <p>Attributes include:</p> <ul> <li> <p>serviceAccessRoleArn - The IAM role that has permission to access the Amazon S3 bucket.</p> </li> <li> <p>bucketName - The name of the S3 bucket to use.</p> </li> <li> <p>compressionType - An optional parameter to use GZIP to compress the target files. Set to NONE (the default) or do not use to leave the files uncompressed.</p> </li> </ul> <p>Shorthand syntax: ServiceAccessRoleArn=string ,BucketName=string,CompressionType=string</p> <p>JSON syntax:</p> <p> { \"ServiceAccessRoleArn\": \"string\", \"BucketName\": \"string\", \"CompressionType\": \"none\"|\"gzip\" } </p>"
        },
        "MongoDbSettings":{
          "shape":"MongoDbSettings",
          "documentation":"<p>The settings for the MongoDB source endpoint. For more information, see the <code>MongoDbSettings</code> structure.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "EndpointList":{
      "type":"list",
      "member":{"shape":"Endpoint"}
    },
    "Event":{
      "type":"structure",
      "members":{
        "SourceIdentifier":{
          "shape":"String",
          "documentation":"<p> The identifier of the event source. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens. </p> <p>Constraints:replication instance, endpoint, migration task</p>"
        },
        "SourceType":{
          "shape":"SourceType",
          "documentation":"<p> The type of AWS DMS resource that generates events. </p> <p>Valid values: replication-instance | endpoint | migration-task</p>"
        },
        "Message":{
          "shape":"String",
          "documentation":"<p>The event message.</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p>The event categories available for the specified source type.</p>"
        },
        "Date":{
          "shape":"TStamp",
          "documentation":"<p>The date of the event.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "EventCategoriesList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "EventCategoryGroup":{
      "type":"structure",
      "members":{
        "SourceType":{
          "shape":"String",
          "documentation":"<p> The type of AWS DMS resource that generates events. </p> <p>Valid values: replication-instance | replication-server | security-group | migration-task</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p> A list of event categories for a <code>SourceType</code> that you want to subscribe to. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "EventCategoryGroupList":{
      "type":"list",
      "member":{"shape":"EventCategoryGroup"}
    },
    "EventList":{
      "type":"list",
      "member":{"shape":"Event"}
    },
    "EventSubscription":{
      "type":"structure",
      "members":{
        "CustomerAwsId":{
          "shape":"String",
          "documentation":"<p>The AWS customer account associated with the AWS DMS event notification subscription.</p>"
        },
        "CustSubscriptionId":{
          "shape":"String",
          "documentation":"<p>The AWS DMS event notification subscription Id.</p>"
        },
        "SnsTopicArn":{
          "shape":"String",
          "documentation":"<p>The topic ARN of the AWS DMS event notification subscription.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the AWS DMS event notification subscription.</p> <p>Constraints:</p> <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p> <p>The status \"no-permission\" indicates that AWS DMS no longer has permission to post to the SNS topic. The status \"topic-not-exist\" indicates that the topic was deleted after the subscription was created.</p>"
        },
        "SubscriptionCreationTime":{
          "shape":"String",
          "documentation":"<p>The time the RDS event notification subscription was created.</p>"
        },
        "SourceType":{
          "shape":"String",
          "documentation":"<p> The type of AWS DMS resource that generates events. </p> <p>Valid values: replication-instance | replication-server | security-group | migration-task</p>"
        },
        "SourceIdsList":{
          "shape":"SourceIdsList",
          "documentation":"<p>A list of source Ids for the event subscription.</p>"
        },
        "EventCategoriesList":{
          "shape":"EventCategoriesList",
          "documentation":"<p>A lists of event categories.</p>"
        },
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>Boolean value that indicates if the event subscription is enabled.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "EventSubscriptionsList":{
      "type":"list",
      "member":{"shape":"EventSubscription"}
    },
    "ExceptionMessage":{"type":"string"},
    "Filter":{
      "type":"structure",
      "required":[
        "Name",
        "Values"
      ],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>The name of the filter.</p>"
        },
        "Values":{
          "shape":"FilterValueList",
          "documentation":"<p>The filter value.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "FilterList":{
      "type":"list",
      "member":{"shape":"Filter"}
    },
    "FilterValueList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "ImportCertificateMessage":{
      "type":"structure",
      "required":["CertificateIdentifier"],
      "members":{
        "CertificateIdentifier":{
          "shape":"String",
          "documentation":"<p>The customer-assigned name of the certificate. Valid characters are A-z and 0-9.</p>"
        },
        "CertificatePem":{
          "shape":"String",
          "documentation":"<p>The contents of the .pem X.509 certificate file for the certificate.</p>"
        },
        "CertificateWallet":{
          "shape":"CertificateWallet",
          "documentation":"<p>The location of the imported Oracle Wallet certificate for use with SSL.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags associated with the certificate.</p>"
        }
      }
    },
    "ImportCertificateResponse":{
      "type":"structure",
      "members":{
        "Certificate":{
          "shape":"Certificate",
          "documentation":"<p>The certificate to be uploaded.</p>"
        }
      }
    },
    "InsufficientResourceCapacityFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>There are not enough resources allocated to the database migration.</p>",
      "exception":true
    },
    "Integer":{"type":"integer"},
    "IntegerOptional":{"type":"integer"},
    "InvalidCertificateFault":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The certificate was not valid.</p>",
      "exception":true
    },
    "InvalidResourceStateFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The resource is in a state that prevents it from being used for database migration.</p>",
      "exception":true
    },
    "InvalidSubnet":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The subnet provided is invalid.</p>",
      "exception":true
    },
    "KMSKeyNotAccessibleFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>AWS DMS cannot access the KMS key.</p>",
      "exception":true
    },
    "KeyList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "ListTagsForResourceMessage":{
      "type":"structure",
      "required":["ResourceArn"],
      "members":{
        "ResourceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the AWS DMS resource.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ListTagsForResourceResponse":{
      "type":"structure",
      "members":{
        "TagList":{
          "shape":"TagList",
          "documentation":"<p>A list of tags for the resource.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "Long":{"type":"long"},
    "MigrationTypeValue":{
      "type":"string",
      "enum":[
        "full-load",
        "cdc",
        "full-load-and-cdc"
      ]
    },
    "ModifyEndpointMessage":{
      "type":"structure",
      "required":["EndpointArn"],
      "members":{
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "EndpointIdentifier":{
          "shape":"String",
          "documentation":"<p>The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>"
        },
        "EndpointType":{
          "shape":"ReplicationEndpointTypeValue",
          "documentation":"<p>The type of endpoint.</p>"
        },
        "EngineName":{
          "shape":"String",
          "documentation":"<p>The type of engine for the endpoint. Valid values, depending on the EndPointType, include mysql, oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb, sybase, sybase, dynamodb, mongodb, and sqlserver.</p>"
        },
        "Username":{
          "shape":"String",
          "documentation":"<p>The user name to be used to login to the endpoint database.</p>"
        },
        "Password":{
          "shape":"SecretString",
          "documentation":"<p>The password to be used to login to the endpoint database.</p>"
        },
        "ServerName":{
          "shape":"String",
          "documentation":"<p>The name of the server where the endpoint database resides.</p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p>The port used by the endpoint database.</p>"
        },
        "DatabaseName":{
          "shape":"String",
          "documentation":"<p>The name of the endpoint database.</p>"
        },
        "ExtraConnectionAttributes":{
          "shape":"String",
          "documentation":"<p>Additional attributes associated with the connection. To reset this parameter, pass the empty string (\"\") as an argument.</p>"
        },
        "CertificateArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>"
        },
        "SslMode":{
          "shape":"DmsSslModeValue",
          "documentation":"<p>The SSL mode to be used.</p> <p>SSL mode can be one of four values: none, require, verify-ca, verify-full. </p> <p>The default value is none.</p>"
        },
        "ServiceAccessRoleArn":{
          "shape":"String",
          "documentation":"<p> The Amazon Resource Name (ARN) for the service access role you want to use to modify the endpoint. </p>"
        },
        "ExternalTableDefinition":{
          "shape":"String",
          "documentation":"<p>The external table definition.</p>"
        },
        "DynamoDbSettings":{
          "shape":"DynamoDbSettings",
          "documentation":"<p>Settings in JSON format for the target Amazon DynamoDB endpoint. For more information about the available settings, see the <b>Using Object Mapping to Migrate Data to DynamoDB</b> section at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html\"> Using an Amazon DynamoDB Database as a Target for AWS Database Migration Service</a>. </p>"
        },
        "S3Settings":{
          "shape":"S3Settings",
          "documentation":"<p>Settings in JSON format for the target S3 endpoint. For more information about the available settings, see the <b>Extra Connection Attributes</b> section at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html\"> Using Amazon S3 as a Target for AWS Database Migration Service</a>. </p>"
        },
        "DmsTransferSettings":{
          "shape":"DmsTransferSettings",
          "documentation":"<p> The settings in JSON format for the DMS Transfer type source endpoint. </p> <p>Attributes include:</p> <ul> <li> <p>serviceAccessRoleArn - The IAM role that has permission to access the Amazon S3 bucket.</p> </li> <li> <p>BucketName - The name of the S3 bucket to use.</p> </li> <li> <p>compressionType - An optional parameter to use GZIP to compress the target files. Set to NONE (the default) or do not use to leave the files uncompressed.</p> </li> </ul> <p>Shorthand syntax: ServiceAccessRoleArn=string ,BucketName=string,CompressionType=string</p> <p>JSON syntax:</p> <p> { \"ServiceAccessRoleArn\": \"string\", \"BucketName\": \"string\", \"CompressionType\": \"none\"|\"gzip\" } </p>"
        },
        "MongoDbSettings":{
          "shape":"MongoDbSettings",
          "documentation":"<p>Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the <b>Configuration Properties When Using MongoDB as a Source for AWS Database Migration Service</b> section at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html\"> Using Amazon S3 as a Target for AWS Database Migration Service</a>. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyEndpointResponse":{
      "type":"structure",
      "members":{
        "Endpoint":{
          "shape":"Endpoint",
          "documentation":"<p>The modified endpoint.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyEventSubscriptionMessage":{
      "type":"structure",
      "required":["SubscriptionName"],
      "members":{
        "SubscriptionName":{
          "shape":"String",
          "documentation":"<p>The name of the AWS DMS event notification subscription to be modified.</p>"
        },
        "SnsTopicArn":{
          "shape":"String",
          "documentation":"<p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>"
        },
        "SourceType":{
          "shape":"String",
          "documentation":"<p> The type of AWS DMS resource that generates the events you want to subscribe to. </p> <p>Valid values: replication-instance | migration-task</p>"
        },
        "EventCategories":{
          "shape":"EventCategoriesList",
          "documentation":"<p> A list of event categories for a source type that you want to subscribe to. Use the <code>DescribeEventCategories</code> action to see a list of event categories. </p>"
        },
        "Enabled":{
          "shape":"BooleanOptional",
          "documentation":"<p> A Boolean value; set to <b>true</b> to activate the subscription. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyEventSubscriptionResponse":{
      "type":"structure",
      "members":{
        "EventSubscription":{
          "shape":"EventSubscription",
          "documentation":"<p>The modified event subscription.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyReplicationInstanceMessage":{
      "type":"structure",
      "required":["ReplicationInstanceArn"],
      "members":{
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of storage (in gigabytes) to be allocated for the replication instance.</p>"
        },
        "ApplyImmediately":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the changes should be applied immediately or during the next maintenance window.</p>"
        },
        "ReplicationInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the replication instance.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>"
        },
        "VpcSecurityGroupIds":{
          "shape":"VpcSecurityGroupIdList",
          "documentation":"<p> Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. </p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p> Specifies if the replication instance is a Multi-AZ deployment. You cannot set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version number of the replication instance.</p>"
        },
        "AllowMajorVersionUpgrade":{
          "shape":"Boolean",
          "documentation":"<p>Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints: This parameter must be set to true when specifying a value for the <code>EngineVersion</code> parameter that is a different major version than the replication instance's current version.</p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"BooleanOptional",
          "documentation":"<p> Indicates that minor version upgrades will be applied automatically to the replication instance during the maintenance window. Changing this parameter does not result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and AWS DMS has enabled auto patching for that engine version. </p>"
        },
        "ReplicationInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The replication instance identifier. This parameter is stored as a lowercase string.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyReplicationInstanceResponse":{
      "type":"structure",
      "members":{
        "ReplicationInstance":{
          "shape":"ReplicationInstance",
          "documentation":"<p>The modified replication instance.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyReplicationSubnetGroupMessage":{
      "type":"structure",
      "required":[
        "ReplicationSubnetGroupIdentifier",
        "SubnetIds"
      ],
      "members":{
        "ReplicationSubnetGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The name of the replication instance subnet group.</p>"
        },
        "ReplicationSubnetGroupDescription":{
          "shape":"String",
          "documentation":"<p>The description of the replication instance subnet group.</p>"
        },
        "SubnetIds":{
          "shape":"SubnetIdentifierList",
          "documentation":"<p>A list of subnet IDs.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyReplicationSubnetGroupResponse":{
      "type":"structure",
      "members":{
        "ReplicationSubnetGroup":{
          "shape":"ReplicationSubnetGroup",
          "documentation":"<p>The modified replication subnet group.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyReplicationTaskMessage":{
      "type":"structure",
      "required":["ReplicationTaskArn"],
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task.</p>"
        },
        "ReplicationTaskIdentifier":{
          "shape":"String",
          "documentation":"<p>The replication task identifier.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>"
        },
        "MigrationType":{
          "shape":"MigrationTypeValue",
          "documentation":"<p>The migration type.</p> <p>Valid values: full-load | cdc | full-load-and-cdc</p>"
        },
        "TableMappings":{
          "shape":"String",
          "documentation":"<p>When using the AWS CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with \"file://\". When working with the DMS API, provide the JSON as the parameter value.</p> <p>For example, --table-mappings file://mappingfile.json</p>"
        },
        "ReplicationTaskSettings":{
          "shape":"String",
          "documentation":"<p>JSON file that contains settings for the task, such as target metadata settings.</p>"
        },
        "CdcStartTime":{
          "shape":"TStamp",
          "documentation":"<p>Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>"
        },
        "CdcStartPosition":{
          "shape":"String",
          "documentation":"<p>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p> The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position \"checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93\"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>"
        },
        "CdcStopPosition":{
          "shape":"String",
          "documentation":"<p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ModifyReplicationTaskResponse":{
      "type":"structure",
      "members":{
        "ReplicationTask":{
          "shape":"ReplicationTask",
          "documentation":"<p>The replication task that was modified.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "MongoDbSettings":{
      "type":"structure",
      "members":{
        "Username":{
          "shape":"String",
          "documentation":"<p>The user name you use to access the MongoDB source endpoint. </p>"
        },
        "Password":{
          "shape":"SecretString",
          "documentation":"<p> The password for the user account you use to access the MongoDB source endpoint. </p>"
        },
        "ServerName":{
          "shape":"String",
          "documentation":"<p> The name of the server on the MongoDB source endpoint. </p>"
        },
        "Port":{
          "shape":"IntegerOptional",
          "documentation":"<p> The port value for the MongoDB source endpoint. </p>"
        },
        "DatabaseName":{
          "shape":"String",
          "documentation":"<p> The database name on the MongoDB source endpoint. </p>"
        },
        "AuthType":{
          "shape":"AuthTypeValue",
          "documentation":"<p> The authentication type you use to access the MongoDB source endpoint.</p> <p>Valid values: NO, PASSWORD </p> <p>When NO is selected, user name and password parameters are not used and can be empty. </p>"
        },
        "AuthMechanism":{
          "shape":"AuthMechanismValue",
          "documentation":"<p> The authentication mechanism you use to access the MongoDB source endpoint.</p> <p>Valid values: DEFAULT, MONGODB_CR, SCRAM_SHA_1 </p> <p>DEFAULT – For MongoDB version 2.x, use MONGODB_CR. For MongoDB version 3.x, use SCRAM_SHA_1. This attribute is not used when authType=No.</p>"
        },
        "NestingLevel":{
          "shape":"NestingLevelValue",
          "documentation":"<p> Specifies either document or table mode. </p> <p>Valid values: NONE, ONE</p> <p>Default value is NONE. Specify NONE to use document mode. Specify ONE to use table mode.</p>"
        },
        "ExtractDocId":{
          "shape":"String",
          "documentation":"<p> Specifies the document ID. Use this attribute when <code>NestingLevel</code> is set to NONE. </p> <p>Default value is false. </p>"
        },
        "DocsToInvestigate":{
          "shape":"String",
          "documentation":"<p> Indicates the number of documents to preview to determine the document organization. Use this attribute when <code>NestingLevel</code> is set to ONE. </p> <p>Must be a positive value greater than 0. Default value is 1000.</p>"
        },
        "AuthSource":{
          "shape":"String",
          "documentation":"<p> The MongoDB database name. This attribute is not used when <code>authType=NO</code>. </p> <p>The default is admin.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p> The KMS key identifier that will be used to encrypt the connection parameters. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "NestingLevelValue":{
      "type":"string",
      "enum":[
        "none",
        "one"
      ]
    },
    "OrderableReplicationInstance":{
      "type":"structure",
      "members":{
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The version of the replication engine.</p>"
        },
        "ReplicationInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the replication instance.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>"
        },
        "StorageType":{
          "shape":"String",
          "documentation":"<p>The type of storage used by the replication instance.</p>"
        },
        "MinAllocatedStorage":{
          "shape":"Integer",
          "documentation":"<p>The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.</p>"
        },
        "MaxAllocatedStorage":{
          "shape":"Integer",
          "documentation":"<p>The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.</p>"
        },
        "DefaultAllocatedStorage":{
          "shape":"Integer",
          "documentation":"<p>The default amount of storage (in gigabytes) that is allocated for the replication instance.</p>"
        },
        "IncludedAllocatedStorage":{
          "shape":"Integer",
          "documentation":"<p>The amount of storage (in gigabytes) that is allocated for the replication instance.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "OrderableReplicationInstanceList":{
      "type":"list",
      "member":{"shape":"OrderableReplicationInstance"}
    },
    "RebootReplicationInstanceMessage":{
      "type":"structure",
      "required":["ReplicationInstanceArn"],
      "members":{
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "ForceFailover":{
          "shape":"BooleanOptional",
          "documentation":"<p>If this parameter is <code>true</code>, the reboot is conducted through a Multi-AZ failover. (If the instance isn't configured for Multi-AZ, then you can't specify <code>true</code>.)</p>"
        }
      }
    },
    "RebootReplicationInstanceResponse":{
      "type":"structure",
      "members":{
        "ReplicationInstance":{
          "shape":"ReplicationInstance",
          "documentation":"<p>The replication instance that is being rebooted. </p>"
        }
      }
    },
    "RefreshSchemasMessage":{
      "type":"structure",
      "required":[
        "EndpointArn",
        "ReplicationInstanceArn"
      ],
      "members":{
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RefreshSchemasResponse":{
      "type":"structure",
      "members":{
        "RefreshSchemasStatus":{
          "shape":"RefreshSchemasStatus",
          "documentation":"<p>The status of the refreshed schema.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RefreshSchemasStatus":{
      "type":"structure",
      "members":{
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "Status":{
          "shape":"RefreshSchemasStatusTypeValue",
          "documentation":"<p>The status of the schema.</p>"
        },
        "LastRefreshDate":{
          "shape":"TStamp",
          "documentation":"<p>The date the schema was last refreshed.</p>"
        },
        "LastFailureMessage":{
          "shape":"String",
          "documentation":"<p>The last failure message for the schema.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RefreshSchemasStatusTypeValue":{
      "type":"string",
      "enum":[
        "successful",
        "failed",
        "refreshing"
      ]
    },
    "ReloadOptionValue":{
      "type":"string",
      "enum":[
        "data-reload",
        "validate-only"
      ]
    },
    "ReloadTablesMessage":{
      "type":"structure",
      "required":[
        "ReplicationTaskArn",
        "TablesToReload"
      ],
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task. </p>"
        },
        "TablesToReload":{
          "shape":"TableListToReload",
          "documentation":"<p>The name and schema of the table to be reloaded. </p>"
        },
        "ReloadOption":{
          "shape":"ReloadOptionValue",
          "documentation":"<p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate it if validation is enabled. Specify <code>validate-only</code> to re-validate the table. This option applies only when validation is enabled for the task. </p> <p>Valid values: data-reload, validate-only</p> <p>Default value is data-reload.</p>"
        }
      }
    },
    "ReloadTablesResponse":{
      "type":"structure",
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task. </p>"
        }
      }
    },
    "RemoveTagsFromResourceMessage":{
      "type":"structure",
      "required":[
        "ResourceArn",
        "TagKeys"
      ],
      "members":{
        "ResourceArn":{
          "shape":"String",
          "documentation":"<p>&gt;The Amazon Resource Name (ARN) of the AWS DMS resource the tag is to be removed from.</p>"
        },
        "TagKeys":{
          "shape":"KeyList",
          "documentation":"<p>The tag key (name) of the tag to be removed.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "RemoveTagsFromResourceResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p/>"
    },
    "ReplicationEndpointTypeValue":{
      "type":"string",
      "enum":[
        "source",
        "target"
      ]
    },
    "ReplicationInstance":{
      "type":"structure",
      "members":{
        "ReplicationInstanceIdentifier":{
          "shape":"String",
          "documentation":"<p>The replication instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>myrepinstance</code> </p>"
        },
        "ReplicationInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the replication instance.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>"
        },
        "ReplicationInstanceStatus":{
          "shape":"String",
          "documentation":"<p>The status of the replication instance.</p>"
        },
        "AllocatedStorage":{
          "shape":"Integer",
          "documentation":"<p>The amount of storage (in gigabytes) that is allocated for the replication instance.</p>"
        },
        "InstanceCreateTime":{
          "shape":"TStamp",
          "documentation":"<p>The time the replication instance was created.</p>"
        },
        "VpcSecurityGroups":{
          "shape":"VpcSecurityGroupMembershipList",
          "documentation":"<p>The VPC security group for the instance.</p>"
        },
        "AvailabilityZone":{
          "shape":"String",
          "documentation":"<p>The Availability Zone for the instance.</p>"
        },
        "ReplicationSubnetGroup":{
          "shape":"ReplicationSubnetGroup",
          "documentation":"<p>The subnet group for the replication instance.</p>"
        },
        "PreferredMaintenanceWindow":{
          "shape":"String",
          "documentation":"<p>The maintenance window times for the replication instance.</p>"
        },
        "PendingModifiedValues":{
          "shape":"ReplicationPendingModifiedValues",
          "documentation":"<p>The pending modification values.</p>"
        },
        "MultiAZ":{
          "shape":"Boolean",
          "documentation":"<p> Specifies if the replication instance is a Multi-AZ deployment. You cannot set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version number of the replication instance.</p>"
        },
        "AutoMinorVersionUpgrade":{
          "shape":"Boolean",
          "documentation":"<p>Boolean value indicating if minor version upgrades will be automatically applied to the instance.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>The KMS key identifier that is used to encrypt the content on the replication instance. If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.</p>"
        },
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "ReplicationInstancePublicIpAddress":{
          "shape":"String",
          "documentation":"<p>The public IP address of the replication instance.</p>",
          "deprecated":true
        },
        "ReplicationInstancePrivateIpAddress":{
          "shape":"String",
          "documentation":"<p>The private IP address of the replication instance.</p>",
          "deprecated":true
        },
        "ReplicationInstancePublicIpAddresses":{
          "shape":"ReplicationInstancePublicIpAddressList",
          "documentation":"<p>The public IP address of the replication instance.</p>"
        },
        "ReplicationInstancePrivateIpAddresses":{
          "shape":"ReplicationInstancePrivateIpAddressList",
          "documentation":"<p>The private IP address of the replication instance.</p>"
        },
        "PubliclyAccessible":{
          "shape":"Boolean",
          "documentation":"<p> Specifies the accessibility options for the replication instance. A value of <code>true</code> represents an instance with a public IP address. A value of <code>false</code> represents an instance with a private IP address. The default value is <code>true</code>. </p>"
        },
        "SecondaryAvailabilityZone":{
          "shape":"String",
          "documentation":"<p>The availability zone of the standby replication instance in a Multi-AZ deployment.</p>"
        },
        "FreeUntil":{
          "shape":"TStamp",
          "documentation":"<p> The expiration date of the free replication instance that is part of the Free DMS program. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "ReplicationInstanceList":{
      "type":"list",
      "member":{"shape":"ReplicationInstance"}
    },
    "ReplicationInstancePrivateIpAddressList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "ReplicationInstancePublicIpAddressList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "ReplicationInstanceTaskLog":{
      "type":"structure",
      "members":{
        "ReplicationTaskName":{
          "shape":"String",
          "documentation":"<p>The name of the replication task.</p>"
        },
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task.</p>"
        },
        "ReplicationInstanceTaskLogSize":{
          "shape":"Long",
          "documentation":"<p>The size, in bytes, of the replication task log.</p>"
        }
      },
      "documentation":"<p>Contains metadata for a replication instance task log.</p>"
    },
    "ReplicationInstanceTaskLogsList":{
      "type":"list",
      "member":{"shape":"ReplicationInstanceTaskLog"}
    },
    "ReplicationPendingModifiedValues":{
      "type":"structure",
      "members":{
        "ReplicationInstanceClass":{
          "shape":"String",
          "documentation":"<p>The compute and memory capacity of the replication instance.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>"
        },
        "AllocatedStorage":{
          "shape":"IntegerOptional",
          "documentation":"<p>The amount of storage (in gigabytes) that is allocated for the replication instance.</p>"
        },
        "MultiAZ":{
          "shape":"BooleanOptional",
          "documentation":"<p> Specifies if the replication instance is a Multi-AZ deployment. You cannot set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. </p>"
        },
        "EngineVersion":{
          "shape":"String",
          "documentation":"<p>The engine version number of the replication instance.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ReplicationSubnetGroup":{
      "type":"structure",
      "members":{
        "ReplicationSubnetGroupIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the replication instance subnet group.</p>"
        },
        "ReplicationSubnetGroupDescription":{
          "shape":"String",
          "documentation":"<p>The description of the replication subnet group.</p>"
        },
        "VpcId":{
          "shape":"String",
          "documentation":"<p>The ID of the VPC.</p>"
        },
        "SubnetGroupStatus":{
          "shape":"String",
          "documentation":"<p>The status of the subnet group.</p>"
        },
        "Subnets":{
          "shape":"SubnetList",
          "documentation":"<p>The subnets that are in the subnet group.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ReplicationSubnetGroupDoesNotCoverEnoughAZs":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>",
      "exception":true
    },
    "ReplicationSubnetGroups":{
      "type":"list",
      "member":{"shape":"ReplicationSubnetGroup"}
    },
    "ReplicationTask":{
      "type":"structure",
      "members":{
        "ReplicationTaskIdentifier":{
          "shape":"String",
          "documentation":"<p>The user-assigned replication task identifier or name.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>"
        },
        "SourceEndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "TargetEndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        },
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "MigrationType":{
          "shape":"MigrationTypeValue",
          "documentation":"<p>The type of migration.</p>"
        },
        "TableMappings":{
          "shape":"String",
          "documentation":"<p>Table mappings specified in the task.</p>"
        },
        "ReplicationTaskSettings":{
          "shape":"String",
          "documentation":"<p>The settings for the replication task.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the replication task.</p>"
        },
        "LastFailureMessage":{
          "shape":"String",
          "documentation":"<p>The last error (failure) message generated for the replication instance.</p>"
        },
        "StopReason":{
          "shape":"String",
          "documentation":"<p>The reason the replication task was stopped.</p>"
        },
        "ReplicationTaskCreationDate":{
          "shape":"TStamp",
          "documentation":"<p>The date the replication task was created.</p>"
        },
        "ReplicationTaskStartDate":{
          "shape":"TStamp",
          "documentation":"<p>The date the replication task is scheduled to start.</p>"
        },
        "CdcStartPosition":{
          "shape":"String",
          "documentation":"<p>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p> The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position \"checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93\"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>"
        },
        "CdcStopPosition":{
          "shape":"String",
          "documentation":"<p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>"
        },
        "RecoveryCheckpoint":{
          "shape":"String",
          "documentation":"<p>Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the <code>CdcStartPosition</code> parameter to start a CDC operation that begins at that checkpoint.</p>"
        },
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task.</p>"
        },
        "ReplicationTaskStats":{
          "shape":"ReplicationTaskStats",
          "documentation":"<p>The statistics for the task, including elapsed time, tables loaded, and table errors.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ReplicationTaskAssessmentResult":{
      "type":"structure",
      "members":{
        "ReplicationTaskIdentifier":{
          "shape":"String",
          "documentation":"<p> The replication task identifier of the task on which the task assessment was run. </p>"
        },
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task. </p>"
        },
        "ReplicationTaskLastAssessmentDate":{
          "shape":"TStamp",
          "documentation":"<p>The date the task assessment was completed. </p>"
        },
        "AssessmentStatus":{
          "shape":"String",
          "documentation":"<p> The status of the task assessment. </p>"
        },
        "AssessmentResultsFile":{
          "shape":"String",
          "documentation":"<p> The file containing the results of the task assessment. </p>"
        },
        "AssessmentResults":{
          "shape":"String",
          "documentation":"<p> The task assessment results in JSON format. </p>"
        },
        "S3ObjectUrl":{
          "shape":"String",
          "documentation":"<p> The URL of the S3 object containing the task assessment results. </p>"
        }
      },
      "documentation":"<p> The task assessment report in JSON format. </p>"
    },
    "ReplicationTaskAssessmentResultList":{
      "type":"list",
      "member":{"shape":"ReplicationTaskAssessmentResult"}
    },
    "ReplicationTaskList":{
      "type":"list",
      "member":{"shape":"ReplicationTask"}
    },
    "ReplicationTaskStats":{
      "type":"structure",
      "members":{
        "FullLoadProgressPercent":{
          "shape":"Integer",
          "documentation":"<p>The percent complete for the full load migration task.</p>"
        },
        "ElapsedTimeMillis":{
          "shape":"Long",
          "documentation":"<p>The elapsed time of the task, in milliseconds.</p>"
        },
        "TablesLoaded":{
          "shape":"Integer",
          "documentation":"<p>The number of tables loaded for this task.</p>"
        },
        "TablesLoading":{
          "shape":"Integer",
          "documentation":"<p>The number of tables currently loading for this task.</p>"
        },
        "TablesQueued":{
          "shape":"Integer",
          "documentation":"<p>The number of tables queued for this task.</p>"
        },
        "TablesErrored":{
          "shape":"Integer",
          "documentation":"<p>The number of errors that have occurred during this task.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ResourceAlreadyExistsFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The resource you are attempting to create already exists.</p>",
      "exception":true
    },
    "ResourceNotFoundFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The resource could not be found.</p>",
      "exception":true
    },
    "ResourceQuotaExceededFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The quota for this resource quota has been exceeded.</p>",
      "exception":true
    },
    "S3Settings":{
      "type":"structure",
      "members":{
        "ServiceAccessRoleArn":{
          "shape":"String",
          "documentation":"<p> The Amazon Resource Name (ARN) used by the service access IAM role. </p>"
        },
        "ExternalTableDefinition":{
          "shape":"String",
          "documentation":"<p> The external table definition. </p>"
        },
        "CsvRowDelimiter":{
          "shape":"String",
          "documentation":"<p> The delimiter used to separate rows in the source files. The default is a carriage return (\\n). </p>"
        },
        "CsvDelimiter":{
          "shape":"String",
          "documentation":"<p> The delimiter used to separate columns in the source files. The default is a comma. </p>"
        },
        "BucketFolder":{
          "shape":"String",
          "documentation":"<p> An optional parameter to set a folder name in the S3 bucket. If provided, tables are created in the path &lt;bucketFolder&gt;/&lt;schema_name&gt;/&lt;table_name&gt;/. If this parameter is not specified, then the path used is &lt;schema_name&gt;/&lt;table_name&gt;/. </p>"
        },
        "BucketName":{
          "shape":"String",
          "documentation":"<p> The name of the S3 bucket. </p>"
        },
        "CompressionType":{
          "shape":"CompressionTypeValue",
          "documentation":"<p> An optional parameter to use GZIP to compress the target files. Set to GZIP to compress the target files. Set to NONE (the default) or do not use to leave the files uncompressed. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "SNSInvalidTopicFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The SNS topic is invalid.</p>",
      "exception":true
    },
    "SNSNoAuthorizationFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>You are not authorized for the SNS subscription.</p>",
      "exception":true
    },
    "SchemaList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "SecretString":{
      "type":"string",
      "sensitive":true
    },
    "SourceIdsList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "SourceType":{
      "type":"string",
      "enum":["replication-instance"]
    },
    "StartReplicationTaskAssessmentMessage":{
      "type":"structure",
      "required":["ReplicationTaskArn"],
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p> The Amazon Resource Name (ARN) of the replication task. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "StartReplicationTaskAssessmentResponse":{
      "type":"structure",
      "members":{
        "ReplicationTask":{
          "shape":"ReplicationTask",
          "documentation":"<p> The assessed replication task. </p>"
        }
      },
      "documentation":"<p/>"
    },
    "StartReplicationTaskMessage":{
      "type":"structure",
      "required":[
        "ReplicationTaskArn",
        "StartReplicationTaskType"
      ],
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication task to be started.</p>"
        },
        "StartReplicationTaskType":{
          "shape":"StartReplicationTaskTypeValue",
          "documentation":"<p>The type of replication task.</p>"
        },
        "CdcStartTime":{
          "shape":"TStamp",
          "documentation":"<p>Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>"
        },
        "CdcStartPosition":{
          "shape":"String",
          "documentation":"<p>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.</p> <p> The value can be in date, checkpoint, or LSN/SCN format.</p> <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p> <p>Checkpoint Example: --cdc-start-position \"checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93\"</p> <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>"
        },
        "CdcStopPosition":{
          "shape":"String",
          "documentation":"<p>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.</p> <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p> <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>"
        }
      },
      "documentation":"<p/>"
    },
    "StartReplicationTaskResponse":{
      "type":"structure",
      "members":{
        "ReplicationTask":{
          "shape":"ReplicationTask",
          "documentation":"<p>The replication task started.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "StartReplicationTaskTypeValue":{
      "type":"string",
      "enum":[
        "start-replication",
        "resume-processing",
        "reload-target"
      ]
    },
    "StopReplicationTaskMessage":{
      "type":"structure",
      "required":["ReplicationTaskArn"],
      "members":{
        "ReplicationTaskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name(ARN) of the replication task to be stopped.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "StopReplicationTaskResponse":{
      "type":"structure",
      "members":{
        "ReplicationTask":{
          "shape":"ReplicationTask",
          "documentation":"<p>The replication task stopped.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "StorageQuotaExceededFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The storage quota has been exceeded.</p>",
      "exception":true
    },
    "String":{"type":"string"},
    "Subnet":{
      "type":"structure",
      "members":{
        "SubnetIdentifier":{
          "shape":"String",
          "documentation":"<p>The subnet identifier.</p>"
        },
        "SubnetAvailabilityZone":{
          "shape":"AvailabilityZone",
          "documentation":"<p>The Availability Zone of the subnet.</p>"
        },
        "SubnetStatus":{
          "shape":"String",
          "documentation":"<p>The status of the subnet.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "SubnetAlreadyInUse":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>The specified subnet is already in use.</p>",
      "exception":true
    },
    "SubnetIdentifierList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "SubnetList":{
      "type":"list",
      "member":{"shape":"Subnet"}
    },
    "SupportedEndpointType":{
      "type":"structure",
      "members":{
        "EngineName":{
          "shape":"String",
          "documentation":"<p>The database engine name. Valid values, depending on the EndPointType, include mysql, oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb, sybase, sybase, dynamodb, mongodb, and sqlserver.</p>"
        },
        "SupportsCDC":{
          "shape":"Boolean",
          "documentation":"<p>Indicates if Change Data Capture (CDC) is supported.</p>"
        },
        "EndpointType":{
          "shape":"ReplicationEndpointTypeValue",
          "documentation":"<p>The type of endpoint.</p>"
        },
        "EngineDisplayName":{
          "shape":"String",
          "documentation":"<p>The expanded name for the engine name. For example, if the <code>EngineName</code> parameter is \"aurora,\" this value would be \"Amazon Aurora MySQL.\"</p>"
        }
      },
      "documentation":"<p/>"
    },
    "SupportedEndpointTypeList":{
      "type":"list",
      "member":{"shape":"SupportedEndpointType"}
    },
    "TStamp":{"type":"timestamp"},
    "TableListToReload":{
      "type":"list",
      "member":{"shape":"TableToReload"}
    },
    "TableStatistics":{
      "type":"structure",
      "members":{
        "SchemaName":{
          "shape":"String",
          "documentation":"<p>The schema name.</p>"
        },
        "TableName":{
          "shape":"String",
          "documentation":"<p>The name of the table.</p>"
        },
        "Inserts":{
          "shape":"Long",
          "documentation":"<p>The number of insert actions performed on a table.</p>"
        },
        "Deletes":{
          "shape":"Long",
          "documentation":"<p>The number of delete actions performed on a table.</p>"
        },
        "Updates":{
          "shape":"Long",
          "documentation":"<p>The number of update actions performed on a table.</p>"
        },
        "Ddls":{
          "shape":"Long",
          "documentation":"<p>The Data Definition Language (DDL) used to build and modify the structure of your tables.</p>"
        },
        "FullLoadRows":{
          "shape":"Long",
          "documentation":"<p>The number of rows added during the Full Load operation.</p>"
        },
        "FullLoadCondtnlChkFailedRows":{
          "shape":"Long",
          "documentation":"<p>The number of rows that failed conditional checks during the Full Load operation (valid only for DynamoDB as a target migrations).</p>"
        },
        "FullLoadErrorRows":{
          "shape":"Long",
          "documentation":"<p>The number of rows that failed to load during the Full Load operation (valid only for DynamoDB as a target migrations).</p>"
        },
        "LastUpdateTime":{
          "shape":"TStamp",
          "documentation":"<p>The last time the table was updated.</p>"
        },
        "TableState":{
          "shape":"String",
          "documentation":"<p>The state of the tables described.</p> <p>Valid states: Table does not exist | Before load | Full load | Table completed | Table cancelled | Table error | Table all | Table updates | Table is being reloaded</p>"
        },
        "ValidationPendingRecords":{
          "shape":"Long",
          "documentation":"<p>The number of records that have yet to be validated.</p>"
        },
        "ValidationFailedRecords":{
          "shape":"Long",
          "documentation":"<p>The number of records that failed validation.</p>"
        },
        "ValidationSuspendedRecords":{
          "shape":"Long",
          "documentation":"<p>The number of records that could not be validated.</p>"
        },
        "ValidationState":{
          "shape":"String",
          "documentation":"<p>The validation state of the table.</p> <p>The parameter can have the following values</p> <ul> <li> <p>Not enabled—Validation is not enabled for the table in the migration task.</p> </li> <li> <p>Pending records—Some records in the table are waiting for validation.</p> </li> <li> <p>Mismatched records—Some records in the table do not match between the source and target.</p> </li> <li> <p>Suspended records—Some records in the table could not be validated.</p> </li> <li> <p>No primary key—The table could not be validated because it had no primary key.</p> </li> <li> <p>Table error—The table was not validated because it was in an error state and some data was not migrated.</p> </li> <li> <p>Validated—All rows in the table were validated. If the table is updated, the status can change from Validated.</p> </li> <li> <p>Error—The table could not be validated because of an unexpected error.</p> </li> </ul>"
        },
        "ValidationStateDetails":{
          "shape":"String",
          "documentation":"<p>Additional details about the state of validation.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "TableStatisticsList":{
      "type":"list",
      "member":{"shape":"TableStatistics"}
    },
    "TableToReload":{
      "type":"structure",
      "members":{
        "SchemaName":{
          "shape":"String",
          "documentation":"<p>The schema name of the table to be reloaded.</p>"
        },
        "TableName":{
          "shape":"String",
          "documentation":"<p>The table name of the table to be reloaded.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "Tag":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"String",
          "documentation":"<p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and cannot be prefixed with \"aws:\" or \"dms:\". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").</p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and cannot be prefixed with \"aws:\" or \"dms:\". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").</p>"
        }
      },
      "documentation":"<p/>"
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"}
    },
    "TestConnectionMessage":{
      "type":"structure",
      "required":[
        "ReplicationInstanceArn",
        "EndpointArn"
      ],
      "members":{
        "ReplicationInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the replication instance.</p>"
        },
        "EndpointArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "TestConnectionResponse":{
      "type":"structure",
      "members":{
        "Connection":{
          "shape":"Connection",
          "documentation":"<p>The connection tested.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "UpgradeDependencyFailureFault":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>An upgrade dependency is preventing the database migration.</p>",
      "exception":true
    },
    "VpcSecurityGroupIdList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "VpcSecurityGroupMembership":{
      "type":"structure",
      "members":{
        "VpcSecurityGroupId":{
          "shape":"String",
          "documentation":"<p>The VPC security group Id.</p>"
        },
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the VPC security group.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "VpcSecurityGroupMembershipList":{
      "type":"list",
      "member":{"shape":"VpcSecurityGroupMembership"}
    }
  },
  "documentation":"<fullname>AWS Database Migration Service</fullname> <p>AWS Database Migration Service (AWS DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.</p> <p>For more information about AWS DMS, see the AWS DMS user guide at <a href=\"http://docs.aws.amazon.com/dms/latest/userguide/Welcome.html\"> What Is AWS Database Migration Service? </a> </p>"
}
