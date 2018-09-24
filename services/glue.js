awsim['glue'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-03-31",
    "endpointPrefix":"glue",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Glue",
    "serviceId":"Glue",
    "signatureVersion":"v4",
    "targetPrefix":"AWSGlue",
    "uid":"glue-2017-03-31"
  },
  "operations":{
    "BatchCreatePartition":{
      "name":"BatchCreatePartition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchCreatePartitionRequest"},
      "output":{"shape":"BatchCreatePartitionResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"AlreadyExistsException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"InternalServiceException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Creates one or more partitions in a batch operation.</p>"
    },
    "BatchDeleteConnection":{
      "name":"BatchDeleteConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDeleteConnectionRequest"},
      "output":{"shape":"BatchDeleteConnectionResponse"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes a list of connection definitions from the Data Catalog.</p>"
    },
    "BatchDeletePartition":{
      "name":"BatchDeletePartition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDeletePartitionRequest"},
      "output":{"shape":"BatchDeletePartitionResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes one or more partitions in a batch operation.</p>"
    },
    "BatchDeleteTable":{
      "name":"BatchDeleteTable",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDeleteTableRequest"},
      "output":{"shape":"BatchDeleteTableResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you will no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these \"orphaned\" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>"
    },
    "BatchDeleteTableVersion":{
      "name":"BatchDeleteTableVersion",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDeleteTableVersionRequest"},
      "output":{"shape":"BatchDeleteTableVersionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes a specified batch of versions of a table.</p>"
    },
    "BatchGetPartition":{
      "name":"BatchGetPartition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetPartitionRequest"},
      "output":{"shape":"BatchGetPartitionResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InternalServiceException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves partitions in a batch request.</p>"
    },
    "BatchStopJobRun":{
      "name":"BatchStopJobRun",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchStopJobRunRequest"},
      "output":{"shape":"BatchStopJobRunResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Stops one or more job runs for a specified job definition.</p>"
    },
    "CreateClassifier":{
      "name":"CreateClassifier",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateClassifierRequest"},
      "output":{"shape":"CreateClassifierResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"InvalidInputException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Creates a classifier in the user's account. This may be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, or abbrev <code>JsonClassifier</code>, depending on which field of the request is present.</p>"
    },
    "CreateConnection":{
      "name":"CreateConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateConnectionRequest"},
      "output":{"shape":"CreateConnectionResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"InvalidInputException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Creates a connection definition in the Data Catalog.</p>"
    },
    "CreateCrawler":{
      "name":"CreateCrawler",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateCrawlerRequest"},
      "output":{"shape":"CreateCrawlerResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"AlreadyExistsException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ResourceNumberLimitExceededException"}
      ],
      "documentation":"<p>Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <i>s3Targets</i> field, the <i>jdbcTargets</i> field, or the <i>DynamoDBTargets</i> field.</p>"
    },
    "CreateDatabase":{
      "name":"CreateDatabase",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDatabaseRequest"},
      "output":{"shape":"CreateDatabaseResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"AlreadyExistsException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Creates a new database in a Data Catalog.</p>"
    },
    "CreateDevEndpoint":{
      "name":"CreateDevEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDevEndpointRequest"},
      "output":{"shape":"CreateDevEndpointResponse"},
      "errors":[
        {"shape":"AccessDeniedException"},
        {"shape":"AlreadyExistsException"},
        {"shape":"IdempotentParameterMismatchException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InvalidInputException"},
        {"shape":"ValidationException"},
        {"shape":"ResourceNumberLimitExceededException"}
      ],
      "documentation":"<p>Creates a new DevEndpoint.</p>"
    },
    "CreateJob":{
      "name":"CreateJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateJobRequest"},
      "output":{"shape":"CreateJobResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"IdempotentParameterMismatchException"},
        {"shape":"AlreadyExistsException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Creates a new job definition.</p>"
    },
    "CreatePartition":{
      "name":"CreatePartition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePartitionRequest"},
      "output":{"shape":"CreatePartitionResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"AlreadyExistsException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"InternalServiceException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Creates a new partition.</p>"
    },
    "CreateScript":{
      "name":"CreateScript",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateScriptRequest"},
      "output":{"shape":"CreateScriptResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Transforms a directed acyclic graph (DAG) into code.</p>"
    },
    "CreateSecurityConfiguration":{
      "name":"CreateSecurityConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateSecurityConfigurationRequest"},
      "output":{"shape":"CreateSecurityConfigurationResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ResourceNumberLimitExceededException"}
      ],
      "documentation":"<p>Creates a new security configuration.</p>"
    },
    "CreateTable":{
      "name":"CreateTable",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTableRequest"},
      "output":{"shape":"CreateTableResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Creates a new table definition in the Data Catalog.</p>"
    },
    "CreateTrigger":{
      "name":"CreateTrigger",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTriggerRequest"},
      "output":{"shape":"CreateTriggerResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"InvalidInputException"},
        {"shape":"IdempotentParameterMismatchException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Creates a new trigger.</p>"
    },
    "CreateUserDefinedFunction":{
      "name":"CreateUserDefinedFunction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateUserDefinedFunctionRequest"},
      "output":{"shape":"CreateUserDefinedFunctionResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Creates a new function definition in the Data Catalog.</p>"
    },
    "DeleteClassifier":{
      "name":"DeleteClassifier",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteClassifierRequest"},
      "output":{"shape":"DeleteClassifierResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Removes a classifier from the Data Catalog.</p>"
    },
    "DeleteConnection":{
      "name":"DeleteConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteConnectionRequest"},
      "output":{"shape":"DeleteConnectionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes a connection from the Data Catalog.</p>"
    },
    "DeleteCrawler":{
      "name":"DeleteCrawler",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteCrawlerRequest"},
      "output":{"shape":"DeleteCrawlerResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"CrawlerRunningException"},
        {"shape":"SchedulerTransitioningException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Removes a specified crawler from the Data Catalog, unless the crawler state is <code>RUNNING</code>.</p>"
    },
    "DeleteDatabase":{
      "name":"DeleteDatabase",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDatabaseRequest"},
      "output":{"shape":"DeleteDatabaseResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Removes a specified Database from a Data Catalog.</p> <note> <p>After completing this operation, you will no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. AWS Glue deletes these \"orphaned\" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>"
    },
    "DeleteDevEndpoint":{
      "name":"DeleteDevEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDevEndpointRequest"},
      "output":{"shape":"DeleteDevEndpointResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Deletes a specified DevEndpoint.</p>"
    },
    "DeleteJob":{
      "name":"DeleteJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteJobRequest"},
      "output":{"shape":"DeleteJobResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes a specified job definition. If the job definition is not found, no exception is thrown.</p>"
    },
    "DeletePartition":{
      "name":"DeletePartition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeletePartitionRequest"},
      "output":{"shape":"DeletePartitionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes a specified partition.</p>"
    },
    "DeleteSecurityConfiguration":{
      "name":"DeleteSecurityConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteSecurityConfigurationRequest"},
      "output":{"shape":"DeleteSecurityConfigurationResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes a specified security configuration.</p>"
    },
    "DeleteTable":{
      "name":"DeleteTable",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTableRequest"},
      "output":{"shape":"DeleteTableResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you will no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these \"orphaned\" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>"
    },
    "DeleteTableVersion":{
      "name":"DeleteTableVersion",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTableVersionRequest"},
      "output":{"shape":"DeleteTableVersionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes a specified version of a table.</p>"
    },
    "DeleteTrigger":{
      "name":"DeleteTrigger",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTriggerRequest"},
      "output":{"shape":"DeleteTriggerResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Deletes a specified trigger. If the trigger is not found, no exception is thrown.</p>"
    },
    "DeleteUserDefinedFunction":{
      "name":"DeleteUserDefinedFunction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteUserDefinedFunctionRequest"},
      "output":{"shape":"DeleteUserDefinedFunctionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Deletes an existing function definition from the Data Catalog.</p>"
    },
    "GetCatalogImportStatus":{
      "name":"GetCatalogImportStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCatalogImportStatusRequest"},
      "output":{"shape":"GetCatalogImportStatusResponse"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves the status of a migration operation.</p>"
    },
    "GetClassifier":{
      "name":"GetClassifier",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetClassifierRequest"},
      "output":{"shape":"GetClassifierResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieve a classifier by name.</p>"
    },
    "GetClassifiers":{
      "name":"GetClassifiers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetClassifiersRequest"},
      "output":{"shape":"GetClassifiersResponse"},
      "errors":[
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Lists all classifier objects in the Data Catalog.</p>"
    },
    "GetConnection":{
      "name":"GetConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetConnectionRequest"},
      "output":{"shape":"GetConnectionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InvalidInputException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves a connection definition from the Data Catalog.</p>"
    },
    "GetConnections":{
      "name":"GetConnections",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetConnectionsRequest"},
      "output":{"shape":"GetConnectionsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InvalidInputException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves a list of connection definitions from the Data Catalog.</p>"
    },
    "GetCrawler":{
      "name":"GetCrawler",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCrawlerRequest"},
      "output":{"shape":"GetCrawlerResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves metadata for a specified crawler.</p>"
    },
    "GetCrawlerMetrics":{
      "name":"GetCrawlerMetrics",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCrawlerMetricsRequest"},
      "output":{"shape":"GetCrawlerMetricsResponse"},
      "errors":[
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves metrics about specified crawlers.</p>"
    },
    "GetCrawlers":{
      "name":"GetCrawlers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCrawlersRequest"},
      "output":{"shape":"GetCrawlersResponse"},
      "errors":[
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves metadata for all crawlers defined in the customer account.</p>"
    },
    "GetDatabase":{
      "name":"GetDatabase",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDatabaseRequest"},
      "output":{"shape":"GetDatabaseResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves the definition of a specified database.</p>"
    },
    "GetDatabases":{
      "name":"GetDatabases",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDatabasesRequest"},
      "output":{"shape":"GetDatabasesResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves all Databases defined in a given Data Catalog.</p>"
    },
    "GetDataflowGraph":{
      "name":"GetDataflowGraph",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDataflowGraphRequest"},
      "output":{"shape":"GetDataflowGraphResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Transforms a Python script into a directed acyclic graph (DAG). </p>"
    },
    "GetDevEndpoint":{
      "name":"GetDevEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDevEndpointRequest"},
      "output":{"shape":"GetDevEndpointResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Retrieves information about a specified DevEndpoint.</p>"
    },
    "GetDevEndpoints":{
      "name":"GetDevEndpoints",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDevEndpointsRequest"},
      "output":{"shape":"GetDevEndpointsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InvalidInputException"}
      ],
      "documentation":"<p>Retrieves all the DevEndpoints in this AWS account.</p>"
    },
    "GetJob":{
      "name":"GetJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetJobRequest"},
      "output":{"shape":"GetJobResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves an existing job definition.</p>"
    },
    "GetJobRun":{
      "name":"GetJobRun",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetJobRunRequest"},
      "output":{"shape":"GetJobRunResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves the metadata for a given job run.</p>"
    },
    "GetJobRuns":{
      "name":"GetJobRuns",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetJobRunsRequest"},
      "output":{"shape":"GetJobRunsResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves metadata for all runs of a given job definition.</p>"
    },
    "GetJobs":{
      "name":"GetJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetJobsRequest"},
      "output":{"shape":"GetJobsResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves all current job definitions.</p>"
    },
    "GetMapping":{
      "name":"GetMapping",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetMappingRequest"},
      "output":{"shape":"GetMappingResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"EntityNotFoundException"}
      ],
      "documentation":"<p>Creates mappings.</p>"
    },
    "GetPartition":{
      "name":"GetPartition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetPartitionRequest"},
      "output":{"shape":"GetPartitionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves information about a specified partition.</p>"
    },
    "GetPartitions":{
      "name":"GetPartitions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetPartitionsRequest"},
      "output":{"shape":"GetPartitionsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InternalServiceException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves information about the partitions in a table.</p>"
    },
    "GetPlan":{
      "name":"GetPlan",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetPlanRequest"},
      "output":{"shape":"GetPlanResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Gets code to perform a specified mapping.</p>"
    },
    "GetSecurityConfiguration":{
      "name":"GetSecurityConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetSecurityConfigurationRequest"},
      "output":{"shape":"GetSecurityConfigurationResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves a specified security configuration.</p>"
    },
    "GetSecurityConfigurations":{
      "name":"GetSecurityConfigurations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetSecurityConfigurationsRequest"},
      "output":{"shape":"GetSecurityConfigurationsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves a list of all security configurations.</p>"
    },
    "GetTable":{
      "name":"GetTable",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTableRequest"},
      "output":{"shape":"GetTableResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.</p>"
    },
    "GetTableVersion":{
      "name":"GetTableVersion",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTableVersionRequest"},
      "output":{"shape":"GetTableVersionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves a specified version of a table.</p>"
    },
    "GetTableVersions":{
      "name":"GetTableVersions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTableVersionsRequest"},
      "output":{"shape":"GetTableVersionsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves a list of strings that identify available versions of a specified table.</p>"
    },
    "GetTables":{
      "name":"GetTables",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTablesRequest"},
      "output":{"shape":"GetTablesResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InternalServiceException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves the definitions of some or all of the tables in a given <code>Database</code>.</p>"
    },
    "GetTrigger":{
      "name":"GetTrigger",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTriggerRequest"},
      "output":{"shape":"GetTriggerResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Retrieves the definition of a trigger.</p>"
    },
    "GetTriggers":{
      "name":"GetTriggers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTriggersRequest"},
      "output":{"shape":"GetTriggersResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Gets all the triggers associated with a job.</p>"
    },
    "GetUserDefinedFunction":{
      "name":"GetUserDefinedFunction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetUserDefinedFunctionRequest"},
      "output":{"shape":"GetUserDefinedFunctionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves a specified function definition from the Data Catalog.</p>"
    },
    "GetUserDefinedFunctions":{
      "name":"GetUserDefinedFunctions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetUserDefinedFunctionsRequest"},
      "output":{"shape":"GetUserDefinedFunctionsResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InternalServiceException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Retrieves a multiple function definitions from the Data Catalog.</p>"
    },
    "ImportCatalogToGlue":{
      "name":"ImportCatalogToGlue",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ImportCatalogToGlueRequest"},
      "output":{"shape":"ImportCatalogToGlueResponse"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Imports an existing Athena Data Catalog to AWS Glue</p>"
    },
    "PutDataCatalogEncryptionSettings":{
      "name":"PutDataCatalogEncryptionSettings",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutDataCatalogEncryptionSettingsRequest"},
      "output":{"shape":"PutDataCatalogEncryptionSettingsResponse"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Sets the security configuration for a specified catalog. Once the configuration has been set, the specified encryption is applied to every catalog write thereafter.</p>"
    },
    "ResetJobBookmark":{
      "name":"ResetJobBookmark",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ResetJobBookmarkRequest"},
      "output":{"shape":"ResetJobBookmarkResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Resets a bookmark entry.</p>"
    },
    "StartCrawler":{
      "name":"StartCrawler",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartCrawlerRequest"},
      "output":{"shape":"StartCrawlerResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"CrawlerRunningException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href=\"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException\">CrawlerRunningException</a>.</p>"
    },
    "StartCrawlerSchedule":{
      "name":"StartCrawlerSchedule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartCrawlerScheduleRequest"},
      "output":{"shape":"StartCrawlerScheduleResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"SchedulerRunningException"},
        {"shape":"SchedulerTransitioningException"},
        {"shape":"NoScheduleException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.</p>"
    },
    "StartJobRun":{
      "name":"StartJobRun",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartJobRunRequest"},
      "output":{"shape":"StartJobRunResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"ConcurrentRunsExceededException"}
      ],
      "documentation":"<p>Starts a job run using a job definition.</p>"
    },
    "StartTrigger":{
      "name":"StartTrigger",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartTriggerRequest"},
      "output":{"shape":"StartTriggerResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"ConcurrentRunsExceededException"}
      ],
      "documentation":"<p>Starts an existing trigger. See <a href=\"http://docs.aws.amazon.com/glue/latest/dg/trigger-job.html\">Triggering Jobs</a> for information about how different types of trigger are started.</p>"
    },
    "StopCrawler":{
      "name":"StopCrawler",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopCrawlerRequest"},
      "output":{"shape":"StopCrawlerResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"CrawlerNotRunningException"},
        {"shape":"CrawlerStoppingException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>If the specified crawler is running, stops the crawl.</p>"
    },
    "StopCrawlerSchedule":{
      "name":"StopCrawlerSchedule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopCrawlerScheduleRequest"},
      "output":{"shape":"StopCrawlerScheduleResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"SchedulerNotRunningException"},
        {"shape":"SchedulerTransitioningException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.</p>"
    },
    "StopTrigger":{
      "name":"StopTrigger",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopTriggerRequest"},
      "output":{"shape":"StopTriggerResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Stops a specified trigger.</p>"
    },
    "UpdateClassifier":{
      "name":"UpdateClassifier",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateClassifierRequest"},
      "output":{"shape":"UpdateClassifierResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"VersionMismatchException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Modifies an existing classifier (a <code>GrokClassifier</code>, <code>XMLClassifier</code>, or <code>JsonClassifier</code>, depending on which field is present).</p>"
    },
    "UpdateConnection":{
      "name":"UpdateConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateConnectionRequest"},
      "output":{"shape":"UpdateConnectionResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InvalidInputException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Updates a connection definition in the Data Catalog.</p>"
    },
    "UpdateCrawler":{
      "name":"UpdateCrawler",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateCrawlerRequest"},
      "output":{"shape":"UpdateCrawlerResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"VersionMismatchException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"CrawlerRunningException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.</p>"
    },
    "UpdateCrawlerSchedule":{
      "name":"UpdateCrawlerSchedule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateCrawlerScheduleRequest"},
      "output":{"shape":"UpdateCrawlerScheduleResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"VersionMismatchException"},
        {"shape":"SchedulerTransitioningException"},
        {"shape":"OperationTimeoutException"}
      ],
      "documentation":"<p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>"
    },
    "UpdateDatabase":{
      "name":"UpdateDatabase",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDatabaseRequest"},
      "output":{"shape":"UpdateDatabaseResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Updates an existing database definition in a Data Catalog.</p>"
    },
    "UpdateDevEndpoint":{
      "name":"UpdateDevEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDevEndpointRequest"},
      "output":{"shape":"UpdateDevEndpointResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"InvalidInputException"},
        {"shape":"ValidationException"}
      ],
      "documentation":"<p>Updates a specified DevEndpoint.</p>"
    },
    "UpdateJob":{
      "name":"UpdateJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateJobRequest"},
      "output":{"shape":"UpdateJobResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Updates an existing job definition.</p>"
    },
    "UpdatePartition":{
      "name":"UpdatePartition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdatePartitionRequest"},
      "output":{"shape":"UpdatePartitionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Updates a partition.</p>"
    },
    "UpdateTable":{
      "name":"UpdateTable",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateTableRequest"},
      "output":{"shape":"UpdateTableResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ConcurrentModificationException"},
        {"shape":"ResourceNumberLimitExceededException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Updates a metadata table in the Data Catalog.</p>"
    },
    "UpdateTrigger":{
      "name":"UpdateTrigger",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateTriggerRequest"},
      "output":{"shape":"UpdateTriggerResponse"},
      "errors":[
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"EntityNotFoundException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"ConcurrentModificationException"}
      ],
      "documentation":"<p>Updates a trigger definition.</p>"
    },
    "UpdateUserDefinedFunction":{
      "name":"UpdateUserDefinedFunction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateUserDefinedFunctionRequest"},
      "output":{"shape":"UpdateUserDefinedFunctionResponse"},
      "errors":[
        {"shape":"EntityNotFoundException"},
        {"shape":"InvalidInputException"},
        {"shape":"InternalServiceException"},
        {"shape":"OperationTimeoutException"},
        {"shape":"GlueEncryptionException"}
      ],
      "documentation":"<p>Updates an existing function definition in the Data Catalog.</p>"
    }
  },
  "shapes":{
    "AccessDeniedException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>Access to a resource was denied.</p>",
      "exception":true
    },
    "Action":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of a job to be executed.</p>"
        },
        "Arguments":{
          "shape":"GenericMap",
          "documentation":"<p>Arguments to be passed to the job run.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own Job arguments, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html\">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html\">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>"
        },
        "Timeout":{
          "shape":"Timeout",
          "documentation":"<p>The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>"
        },
        "NotificationProperty":{
          "shape":"NotificationProperty",
          "documentation":"<p>Specifies configuration properties of a job run notification.</p>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used with this action.</p>"
        }
      },
      "documentation":"<p>Defines an action to be initiated by a trigger.</p>"
    },
    "ActionList":{
      "type":"list",
      "member":{"shape":"Action"}
    },
    "AlreadyExistsException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>A resource to be created or added already exists.</p>",
      "exception":true
    },
    "AttemptCount":{"type":"integer"},
    "BatchCreatePartitionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "PartitionInputList"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the catalog in which the partion is to be created. Currently, this should be the AWS account ID.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the metadata database in which the partition is to be created.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the metadata table in which the partition is to be created.</p>"
        },
        "PartitionInputList":{
          "shape":"PartitionInputList",
          "documentation":"<p>A list of <code>PartitionInput</code> structures that define the partitions to be created.</p>"
        }
      }
    },
    "BatchCreatePartitionResponse":{
      "type":"structure",
      "members":{
        "Errors":{
          "shape":"PartitionErrors",
          "documentation":"<p>Errors encountered when trying to create the requested partitions.</p>"
        }
      }
    },
    "BatchDeleteConnectionRequest":{
      "type":"structure",
      "required":["ConnectionNameList"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which the connections reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "ConnectionNameList":{
          "shape":"DeleteConnectionNameList",
          "documentation":"<p>A list of names of the connections to delete.</p>"
        }
      }
    },
    "BatchDeleteConnectionResponse":{
      "type":"structure",
      "members":{
        "Succeeded":{
          "shape":"NameStringList",
          "documentation":"<p>A list of names of the connection definitions that were successfully deleted.</p>"
        },
        "Errors":{
          "shape":"ErrorByName",
          "documentation":"<p>A map of the names of connections that were not successfully deleted to error details.</p>"
        }
      }
    },
    "BatchDeletePartitionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "PartitionsToDelete"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the partition to be deleted resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database in which the table in question resides.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table where the partitions to be deleted is located.</p>"
        },
        "PartitionsToDelete":{
          "shape":"BatchDeletePartitionValueList",
          "documentation":"<p>A list of <code>PartitionInput</code> structures that define the partitions to be deleted.</p>"
        }
      }
    },
    "BatchDeletePartitionResponse":{
      "type":"structure",
      "members":{
        "Errors":{
          "shape":"PartitionErrors",
          "documentation":"<p>Errors encountered when trying to delete the requested partitions.</p>"
        }
      }
    },
    "BatchDeletePartitionValueList":{
      "type":"list",
      "member":{"shape":"PartitionValueList"},
      "max":25,
      "min":0
    },
    "BatchDeleteTableNameList":{
      "type":"list",
      "member":{"shape":"NameString"},
      "max":100,
      "min":0
    },
    "BatchDeleteTableRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TablesToDelete"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the tables to delete reside. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "TablesToDelete":{
          "shape":"BatchDeleteTableNameList",
          "documentation":"<p>A list of the table to delete.</p>"
        }
      }
    },
    "BatchDeleteTableResponse":{
      "type":"structure",
      "members":{
        "Errors":{
          "shape":"TableErrors",
          "documentation":"<p>A list of errors encountered in attempting to delete the specified tables.</p>"
        }
      }
    },
    "BatchDeleteTableVersionList":{
      "type":"list",
      "member":{"shape":"VersionString"},
      "max":100,
      "min":0
    },
    "BatchDeleteTableVersionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "VersionIds"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "VersionIds":{
          "shape":"BatchDeleteTableVersionList",
          "documentation":"<p>A list of the IDs of versions to be deleted.</p>"
        }
      }
    },
    "BatchDeleteTableVersionResponse":{
      "type":"structure",
      "members":{
        "Errors":{
          "shape":"TableVersionErrors",
          "documentation":"<p>A list of errors encountered while trying to delete the specified table versions.</p>"
        }
      }
    },
    "BatchGetPartitionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "PartitionsToGet"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the partitions reside.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the partitions' table.</p>"
        },
        "PartitionsToGet":{
          "shape":"BatchGetPartitionValueList",
          "documentation":"<p>A list of partition values identifying the partitions to retrieve.</p>"
        }
      }
    },
    "BatchGetPartitionResponse":{
      "type":"structure",
      "members":{
        "Partitions":{
          "shape":"PartitionList",
          "documentation":"<p>A list of the requested partitions.</p>"
        },
        "UnprocessedKeys":{
          "shape":"BatchGetPartitionValueList",
          "documentation":"<p>A list of the partition values in the request for which partions were not returned.</p>"
        }
      }
    },
    "BatchGetPartitionValueList":{
      "type":"list",
      "member":{"shape":"PartitionValueList"},
      "max":1000,
      "min":0
    },
    "BatchStopJobRunError":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition used in the job run in question.</p>"
        },
        "JobRunId":{
          "shape":"IdString",
          "documentation":"<p>The JobRunId of the job run in question.</p>"
        },
        "ErrorDetail":{
          "shape":"ErrorDetail",
          "documentation":"<p>Specifies details about the error that was encountered.</p>"
        }
      },
      "documentation":"<p>Records an error that occurred when attempting to stop a specified job run.</p>"
    },
    "BatchStopJobRunErrorList":{
      "type":"list",
      "member":{"shape":"BatchStopJobRunError"}
    },
    "BatchStopJobRunJobRunIdList":{
      "type":"list",
      "member":{"shape":"IdString"},
      "max":25,
      "min":1
    },
    "BatchStopJobRunRequest":{
      "type":"structure",
      "required":[
        "JobName",
        "JobRunIds"
      ],
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition for which to stop job runs.</p>"
        },
        "JobRunIds":{
          "shape":"BatchStopJobRunJobRunIdList",
          "documentation":"<p>A list of the JobRunIds that should be stopped for that job definition.</p>"
        }
      }
    },
    "BatchStopJobRunResponse":{
      "type":"structure",
      "members":{
        "SuccessfulSubmissions":{
          "shape":"BatchStopJobRunSuccessfulSubmissionList",
          "documentation":"<p>A list of the JobRuns that were successfully submitted for stopping.</p>"
        },
        "Errors":{
          "shape":"BatchStopJobRunErrorList",
          "documentation":"<p>A list of the errors that were encountered in tryng to stop JobRuns, including the JobRunId for which each error was encountered and details about the error.</p>"
        }
      }
    },
    "BatchStopJobRunSuccessfulSubmission":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition used in the job run that was stopped.</p>"
        },
        "JobRunId":{
          "shape":"IdString",
          "documentation":"<p>The JobRunId of the job run that was stopped.</p>"
        }
      },
      "documentation":"<p>Records a successful request to stop a specified JobRun.</p>"
    },
    "BatchStopJobRunSuccessfulSubmissionList":{
      "type":"list",
      "member":{"shape":"BatchStopJobRunSuccessfulSubmission"}
    },
    "Boolean":{"type":"boolean"},
    "BooleanNullable":{"type":"boolean"},
    "BooleanValue":{"type":"boolean"},
    "BoundedPartitionValueList":{
      "type":"list",
      "member":{"shape":"ValueString"},
      "max":100,
      "min":0
    },
    "CatalogEncryptionMode":{
      "type":"string",
      "enum":[
        "DISABLED",
        "SSE-KMS"
      ]
    },
    "CatalogEntries":{
      "type":"list",
      "member":{"shape":"CatalogEntry"}
    },
    "CatalogEntry":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName"
      ],
      "members":{
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The database in which the table metadata resides.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table in question.</p>"
        }
      },
      "documentation":"<p>Specifies a table definition in the Data Catalog.</p>"
    },
    "CatalogIdString":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "CatalogImportStatus":{
      "type":"structure",
      "members":{
        "ImportCompleted":{
          "shape":"Boolean",
          "documentation":"<p>True if the migration has completed, or False otherwise.</p>"
        },
        "ImportTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the migration was started.</p>"
        },
        "ImportedBy":{
          "shape":"NameString",
          "documentation":"<p>The name of the person who initiated the migration.</p>"
        }
      },
      "documentation":"<p>A structure containing migration status information.</p>"
    },
    "Classification":{"type":"string"},
    "Classifier":{
      "type":"structure",
      "members":{
        "GrokClassifier":{
          "shape":"GrokClassifier",
          "documentation":"<p>A <code>GrokClassifier</code> object.</p>"
        },
        "XMLClassifier":{
          "shape":"XMLClassifier",
          "documentation":"<p>An <code>XMLClassifier</code> object.</p>"
        },
        "JsonClassifier":{
          "shape":"JsonClassifier",
          "documentation":"<p>A <code>JsonClassifier</code> object.</p>"
        }
      },
      "documentation":"<p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle, and if it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that AWS Glue supplies, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, or a <code>JSON</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p>"
    },
    "ClassifierList":{
      "type":"list",
      "member":{"shape":"Classifier"}
    },
    "ClassifierNameList":{
      "type":"list",
      "member":{"shape":"NameString"}
    },
    "CloudWatchEncryption":{
      "type":"structure",
      "members":{
        "CloudWatchEncryptionMode":{
          "shape":"CloudWatchEncryptionMode",
          "documentation":"<p>The encryption mode to use for CloudWatch data.</p>"
        },
        "KmsKeyArn":{
          "shape":"KmsKeyArn",
          "documentation":"<p>The AWS ARN of the KMS key to be used to encrypt the data.</p>"
        }
      },
      "documentation":"<p>Specifies how CloudWatch data should be encrypted.</p>"
    },
    "CloudWatchEncryptionMode":{
      "type":"string",
      "enum":[
        "DISABLED",
        "SSE-KMS"
      ]
    },
    "CodeGenArgName":{"type":"string"},
    "CodeGenArgValue":{"type":"string"},
    "CodeGenEdge":{
      "type":"structure",
      "required":[
        "Source",
        "Target"
      ],
      "members":{
        "Source":{
          "shape":"CodeGenIdentifier",
          "documentation":"<p>The ID of the node at which the edge starts.</p>"
        },
        "Target":{
          "shape":"CodeGenIdentifier",
          "documentation":"<p>The ID of the node at which the edge ends.</p>"
        },
        "TargetParameter":{
          "shape":"CodeGenArgName",
          "documentation":"<p>The target of the edge.</p>"
        }
      },
      "documentation":"<p>Represents a directional edge in a directed acyclic graph (DAG).</p>"
    },
    "CodeGenIdentifier":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[A-Za-z_][A-Za-z0-9_]*"
    },
    "CodeGenNode":{
      "type":"structure",
      "required":[
        "Id",
        "NodeType",
        "Args"
      ],
      "members":{
        "Id":{
          "shape":"CodeGenIdentifier",
          "documentation":"<p>A node identifier that is unique within the node's graph.</p>"
        },
        "NodeType":{
          "shape":"CodeGenNodeType",
          "documentation":"<p>The type of node this is.</p>"
        },
        "Args":{
          "shape":"CodeGenNodeArgs",
          "documentation":"<p>Properties of the node, in the form of name-value pairs.</p>"
        },
        "LineNumber":{
          "shape":"Integer",
          "documentation":"<p>The line number of the node.</p>"
        }
      },
      "documentation":"<p>Represents a node in a directed acyclic graph (DAG)</p>"
    },
    "CodeGenNodeArg":{
      "type":"structure",
      "required":[
        "Name",
        "Value"
      ],
      "members":{
        "Name":{
          "shape":"CodeGenArgName",
          "documentation":"<p>The name of the argument or property.</p>"
        },
        "Value":{
          "shape":"CodeGenArgValue",
          "documentation":"<p>The value of the argument or property.</p>"
        },
        "Param":{
          "shape":"Boolean",
          "documentation":"<p>True if the value is used as a parameter.</p>"
        }
      },
      "documentation":"<p>An argument or property of a node.</p>"
    },
    "CodeGenNodeArgs":{
      "type":"list",
      "member":{"shape":"CodeGenNodeArg"},
      "max":50,
      "min":0
    },
    "CodeGenNodeType":{"type":"string"},
    "Column":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the <code>Column</code>.</p>"
        },
        "Type":{
          "shape":"ColumnTypeString",
          "documentation":"<p>The datatype of data in the <code>Column</code>.</p>"
        },
        "Comment":{
          "shape":"CommentString",
          "documentation":"<p>Free-form text comment.</p>"
        }
      },
      "documentation":"<p>A column in a <code>Table</code>.</p>"
    },
    "ColumnList":{
      "type":"list",
      "member":{"shape":"Column"}
    },
    "ColumnTypeString":{
      "type":"string",
      "max":131072,
      "min":0,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "ColumnValueStringList":{
      "type":"list",
      "member":{"shape":"ColumnValuesString"}
    },
    "ColumnValuesString":{"type":"string"},
    "CommentString":{
      "type":"string",
      "max":255,
      "min":0,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "ConcurrentModificationException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>Two processes are trying to modify a resource simultaneously.</p>",
      "exception":true
    },
    "ConcurrentRunsExceededException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>Too many jobs are being run concurrently.</p>",
      "exception":true
    },
    "Condition":{
      "type":"structure",
      "members":{
        "LogicalOperator":{
          "shape":"LogicalOperator",
          "documentation":"<p>A logical operator.</p>"
        },
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the Job to whose JobRuns this condition applies and on which this trigger waits.</p>"
        },
        "State":{
          "shape":"JobRunState",
          "documentation":"<p>The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT and FAILED.</p>"
        }
      },
      "documentation":"<p>Defines a condition under which a trigger fires.</p>"
    },
    "ConditionList":{
      "type":"list",
      "member":{"shape":"Condition"}
    },
    "Connection":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the connection definition.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the connection.</p>"
        },
        "ConnectionType":{
          "shape":"ConnectionType",
          "documentation":"<p>The type of the connection. Currently, only JDBC is supported; SFTP is not supported.</p>"
        },
        "MatchCriteria":{
          "shape":"MatchCriteria",
          "documentation":"<p>A list of criteria that can be used in selecting this connection.</p>"
        },
        "ConnectionProperties":{
          "shape":"ConnectionProperties",
          "documentation":"<p>These key-value pairs define parameters for the connection:</p> <ul> <li> <p> <code>HOST</code> - The host URI: either the fully qualified domain name (FQDN) or the IPv4 address of the database host.</p> </li> <li> <p> <code>PORT</code> - The port number, between 1024 and 65535, of the port on which the database host is listening for database connections.</p> </li> <li> <p> <code>USER_NAME</code> - The name under which to log in to the database.</p> </li> <li> <p> <code>PASSWORD</code> - A password, if one is used, for the user name.</p> </li> <li> <p> <code>JDBC_DRIVER_JAR_URI</code> - The S3 path of the a jar file that contains the JDBC driver to use.</p> </li> <li> <p> <code>JDBC_DRIVER_CLASS_NAME</code> - The class name of the JDBC driver to use.</p> </li> <li> <p> <code>JDBC_ENGINE</code> - The name of the JDBC engine to use.</p> </li> <li> <p> <code>JDBC_ENGINE_VERSION</code> - The version of the JDBC engine to use.</p> </li> <li> <p> <code>CONFIG_FILES</code> - (Reserved for future use).</p> </li> <li> <p> <code>INSTANCE_ID</code> - The instance ID to use.</p> </li> <li> <p> <code>JDBC_CONNECTION_URL</code> - The URL for the JDBC connection.</p> </li> <li> <p> <code>JDBC_ENFORCE_SSL</code> - A Boolean string (true, false) specifying whether SSL with hostname matching will be enforced for the JDBC connection on the client. The default is false.</p> </li> </ul>"
        },
        "PhysicalConnectionRequirements":{
          "shape":"PhysicalConnectionRequirements",
          "documentation":"<p>A map of physical connection requirements, such as VPC and SecurityGroup, needed for making this connection successfully.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time this connection definition was created.</p>"
        },
        "LastUpdatedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time this connection definition was updated.</p>"
        },
        "LastUpdatedBy":{
          "shape":"NameString",
          "documentation":"<p>The user, group or role that last updated this connection definition.</p>"
        }
      },
      "documentation":"<p>Defines a connection to a data source.</p>"
    },
    "ConnectionInput":{
      "type":"structure",
      "required":[
        "Name",
        "ConnectionType",
        "ConnectionProperties"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the connection.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the connection.</p>"
        },
        "ConnectionType":{
          "shape":"ConnectionType",
          "documentation":"<p>The type of the connection. Currently, only JDBC is supported; SFTP is not supported.</p>"
        },
        "MatchCriteria":{
          "shape":"MatchCriteria",
          "documentation":"<p>A list of criteria that can be used in selecting this connection.</p>"
        },
        "ConnectionProperties":{
          "shape":"ConnectionProperties",
          "documentation":"<p>These key-value pairs define parameters for the connection.</p>"
        },
        "PhysicalConnectionRequirements":{
          "shape":"PhysicalConnectionRequirements",
          "documentation":"<p>A map of physical connection requirements, such as VPC and SecurityGroup, needed for making this connection successfully.</p>"
        }
      },
      "documentation":"<p>A structure used to specify a connection to create or update.</p>"
    },
    "ConnectionList":{
      "type":"list",
      "member":{"shape":"Connection"}
    },
    "ConnectionName":{"type":"string"},
    "ConnectionProperties":{
      "type":"map",
      "key":{"shape":"ConnectionPropertyKey"},
      "value":{"shape":"ValueString"},
      "max":100,
      "min":0
    },
    "ConnectionPropertyKey":{
      "type":"string",
      "enum":[
        "HOST",
        "PORT",
        "USERNAME",
        "PASSWORD",
        "JDBC_DRIVER_JAR_URI",
        "JDBC_DRIVER_CLASS_NAME",
        "JDBC_ENGINE",
        "JDBC_ENGINE_VERSION",
        "CONFIG_FILES",
        "INSTANCE_ID",
        "JDBC_CONNECTION_URL",
        "JDBC_ENFORCE_SSL"
      ]
    },
    "ConnectionType":{
      "type":"string",
      "enum":[
        "JDBC",
        "SFTP"
      ]
    },
    "ConnectionsList":{
      "type":"structure",
      "members":{
        "Connections":{
          "shape":"StringList",
          "documentation":"<p>A list of connections used by the job.</p>"
        }
      },
      "documentation":"<p>Specifies the connections used by a job.</p>"
    },
    "Crawler":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The crawler name.</p>"
        },
        "Role":{
          "shape":"Role",
          "documentation":"<p>The IAM role (or ARN of an IAM role) used to access customer resources, such as data in Amazon S3.</p>"
        },
        "Targets":{
          "shape":"CrawlerTargets",
          "documentation":"<p>A collection of targets to crawl.</p>"
        },
        "DatabaseName":{
          "shape":"DatabaseName",
          "documentation":"<p>The database where metadata is written by this crawler.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>A description of the crawler.</p>"
        },
        "Classifiers":{
          "shape":"ClassifierNameList",
          "documentation":"<p>A list of custom classifiers associated with the crawler.</p>"
        },
        "SchemaChangePolicy":{
          "shape":"SchemaChangePolicy",
          "documentation":"<p>Sets the behavior when the crawler finds a changed or deleted object.</p>"
        },
        "State":{
          "shape":"CrawlerState",
          "documentation":"<p>Indicates whether the crawler is running, or whether a run is pending.</p>"
        },
        "TablePrefix":{
          "shape":"TablePrefix",
          "documentation":"<p>The prefix added to the names of tables that are created.</p>"
        },
        "Schedule":{
          "shape":"Schedule",
          "documentation":"<p>For scheduled crawlers, the schedule when the crawler runs.</p>"
        },
        "CrawlElapsedTime":{
          "shape":"MillisecondsCount",
          "documentation":"<p>If the crawler is running, contains the total time elapsed since the last crawl began.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time when the crawler was created.</p>"
        },
        "LastUpdated":{
          "shape":"Timestamp",
          "documentation":"<p>The time the crawler was last updated.</p>"
        },
        "LastCrawl":{
          "shape":"LastCrawlInfo",
          "documentation":"<p>The status of the last crawl, and potentially error information if an error occurred.</p>"
        },
        "Version":{
          "shape":"VersionId",
          "documentation":"<p>The version of the crawler.</p>"
        },
        "Configuration":{
          "shape":"CrawlerConfiguration",
          "documentation":"<p>Crawler configuration information. This versioned JSON string allows users to specify aspects of a Crawler's behavior.</p> <p>You can use this field to force partitions to inherit metadata such as classification, input format, output format, serde information, and schema from their parent table, rather than detect this information separately for each partition. Use the following JSON string to specify that behavior:</p> <p>Example: <code>'{ \"Version\": 1.0, \"CrawlerOutput\": { \"Partitions\": { \"AddOrUpdateBehavior\": \"InheritFromTable\" } } }'</code> </p>"
        },
        "CrawlerSecurityConfiguration":{
          "shape":"CrawlerSecurityConfiguration",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used by this Crawler.</p>"
        }
      },
      "documentation":"<p>Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog.</p>"
    },
    "CrawlerConfiguration":{"type":"string"},
    "CrawlerList":{
      "type":"list",
      "member":{"shape":"Crawler"}
    },
    "CrawlerMetrics":{
      "type":"structure",
      "members":{
        "CrawlerName":{
          "shape":"NameString",
          "documentation":"<p>The name of the crawler.</p>"
        },
        "TimeLeftSeconds":{
          "shape":"NonNegativeDouble",
          "documentation":"<p>The estimated time left to complete a running crawl.</p>"
        },
        "StillEstimating":{
          "shape":"Boolean",
          "documentation":"<p>True if the crawler is still estimating how long it will take to complete this run.</p>"
        },
        "LastRuntimeSeconds":{
          "shape":"NonNegativeDouble",
          "documentation":"<p>The duration of the crawler's most recent run, in seconds.</p>"
        },
        "MedianRuntimeSeconds":{
          "shape":"NonNegativeDouble",
          "documentation":"<p>The median duration of this crawler's runs, in seconds.</p>"
        },
        "TablesCreated":{
          "shape":"NonNegativeInteger",
          "documentation":"<p>The number of tables created by this crawler.</p>"
        },
        "TablesUpdated":{
          "shape":"NonNegativeInteger",
          "documentation":"<p>The number of tables updated by this crawler.</p>"
        },
        "TablesDeleted":{
          "shape":"NonNegativeInteger",
          "documentation":"<p>The number of tables deleted by this crawler.</p>"
        }
      },
      "documentation":"<p>Metrics for a specified crawler.</p>"
    },
    "CrawlerMetricsList":{
      "type":"list",
      "member":{"shape":"CrawlerMetrics"}
    },
    "CrawlerNameList":{
      "type":"list",
      "member":{"shape":"NameString"},
      "max":100,
      "min":0
    },
    "CrawlerNotRunningException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The specified crawler is not running.</p>",
      "exception":true
    },
    "CrawlerRunningException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The operation cannot be performed because the crawler is already running.</p>",
      "exception":true
    },
    "CrawlerSecurityConfiguration":{
      "type":"string",
      "max":128,
      "min":0
    },
    "CrawlerState":{
      "type":"string",
      "enum":[
        "READY",
        "RUNNING",
        "STOPPING"
      ]
    },
    "CrawlerStoppingException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The specified crawler is stopping.</p>",
      "exception":true
    },
    "CrawlerTargets":{
      "type":"structure",
      "members":{
        "S3Targets":{
          "shape":"S3TargetList",
          "documentation":"<p>Specifies Amazon S3 targets.</p>"
        },
        "JdbcTargets":{
          "shape":"JdbcTargetList",
          "documentation":"<p>Specifies JDBC targets.</p>"
        },
        "DynamoDBTargets":{
          "shape":"DynamoDBTargetList",
          "documentation":"<p>Specifies DynamoDB targets.</p>"
        }
      },
      "documentation":"<p>Specifies data stores to crawl.</p>"
    },
    "CreateClassifierRequest":{
      "type":"structure",
      "members":{
        "GrokClassifier":{
          "shape":"CreateGrokClassifierRequest",
          "documentation":"<p>A <code>GrokClassifier</code> object specifying the classifier to create.</p>"
        },
        "XMLClassifier":{
          "shape":"CreateXMLClassifierRequest",
          "documentation":"<p>An <code>XMLClassifier</code> object specifying the classifier to create.</p>"
        },
        "JsonClassifier":{
          "shape":"CreateJsonClassifierRequest",
          "documentation":"<p>A <code>JsonClassifier</code> object specifying the classifier to create.</p>"
        }
      }
    },
    "CreateClassifierResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateConnectionRequest":{
      "type":"structure",
      "required":["ConnectionInput"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which to create the connection. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "ConnectionInput":{
          "shape":"ConnectionInput",
          "documentation":"<p>A <code>ConnectionInput</code> object defining the connection to create.</p>"
        }
      }
    },
    "CreateConnectionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateCrawlerRequest":{
      "type":"structure",
      "required":[
        "Name",
        "Role",
        "DatabaseName",
        "Targets"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the new crawler.</p>"
        },
        "Role":{
          "shape":"Role",
          "documentation":"<p>The IAM role (or ARN of an IAM role) used by the new crawler to access customer resources.</p>"
        },
        "DatabaseName":{
          "shape":"DatabaseName",
          "documentation":"<p>The AWS Glue database where results are written, such as: <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>A description of the new crawler.</p>"
        },
        "Targets":{
          "shape":"CrawlerTargets",
          "documentation":"<p>A list of collection of targets to crawl.</p>"
        },
        "Schedule":{
          "shape":"CronExpression",
          "documentation":"<p>A <code>cron</code> expression used to specify the schedule (see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html\">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p>"
        },
        "Classifiers":{
          "shape":"ClassifierNameList",
          "documentation":"<p>A list of custom classifiers that the user has registered. By default, all built-in classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.</p>"
        },
        "TablePrefix":{
          "shape":"TablePrefix",
          "documentation":"<p>The table prefix used for catalog tables that are created.</p>"
        },
        "SchemaChangePolicy":{
          "shape":"SchemaChangePolicy",
          "documentation":"<p>Policy for the crawler's update and deletion behavior.</p>"
        },
        "Configuration":{
          "shape":"CrawlerConfiguration",
          "documentation":"<p>Crawler configuration information. This versioned JSON string allows users to specify aspects of a Crawler's behavior.</p> <p>You can use this field to force partitions to inherit metadata such as classification, input format, output format, serde information, and schema from their parent table, rather than detect this information separately for each partition. Use the following JSON string to specify that behavior:</p> <p>Example: <code>'{ \"Version\": 1.0, \"CrawlerOutput\": { \"Partitions\": { \"AddOrUpdateBehavior\": \"InheritFromTable\" } } }'</code> </p>"
        },
        "CrawlerSecurityConfiguration":{
          "shape":"CrawlerSecurityConfiguration",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used by this Crawler.</p>"
        }
      }
    },
    "CreateCrawlerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateDatabaseRequest":{
      "type":"structure",
      "required":["DatabaseInput"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which to create the database. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseInput":{
          "shape":"DatabaseInput",
          "documentation":"<p>A <code>DatabaseInput</code> object defining the metadata database to create in the catalog.</p>"
        }
      }
    },
    "CreateDatabaseResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateDevEndpointRequest":{
      "type":"structure",
      "required":[
        "EndpointName",
        "RoleArn"
      ],
      "members":{
        "EndpointName":{
          "shape":"GenericString",
          "documentation":"<p>The name to be assigned to the new DevEndpoint.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The IAM role for the DevEndpoint.</p>"
        },
        "SecurityGroupIds":{
          "shape":"StringList",
          "documentation":"<p>Security group IDs for the security groups to be used by the new DevEndpoint.</p>"
        },
        "SubnetId":{
          "shape":"GenericString",
          "documentation":"<p>The subnet ID for the new DevEndpoint to use.</p>"
        },
        "PublicKey":{
          "shape":"GenericString",
          "documentation":"<p>The public key to be used by this DevEndpoint for authentication. This attribute is provided for backward compatibility, as the recommended attribute to use is public keys.</p>"
        },
        "PublicKeys":{
          "shape":"PublicKeysList",
          "documentation":"<p>A list of public keys to be used by the DevEndpoints for authentication. The use of this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.</p> <note> <p>If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys: call the <code>UpdateDevEndpoint</code> API with the public key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the <code>addPublicKeys</code> attribute.</p> </note>"
        },
        "NumberOfNodes":{
          "shape":"IntegerValue",
          "documentation":"<p>The number of AWS Glue Data Processing Units (DPUs) to allocate to this DevEndpoint.</p>"
        },
        "ExtraPythonLibsS3Path":{
          "shape":"GenericString",
          "documentation":"<p>Path(s) to one or more Python libraries in an S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma.</p> <p>Please note that only pure Python libraries can currently be used on a DevEndpoint. Libraries that rely on C extensions, such as the <a href=\"http://pandas.pydata.org/\">pandas</a> Python data analysis library, are not yet supported.</p>"
        },
        "ExtraJarsS3Path":{
          "shape":"GenericString",
          "documentation":"<p>Path to one or more Java Jars in an S3 bucket that should be loaded in your DevEndpoint.</p>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used with this DevEndpoint.</p>"
        }
      }
    },
    "CreateDevEndpointResponse":{
      "type":"structure",
      "members":{
        "EndpointName":{
          "shape":"GenericString",
          "documentation":"<p>The name assigned to the new DevEndpoint.</p>"
        },
        "Status":{
          "shape":"GenericString",
          "documentation":"<p>The current status of the new DevEndpoint.</p>"
        },
        "SecurityGroupIds":{
          "shape":"StringList",
          "documentation":"<p>The security groups assigned to the new DevEndpoint.</p>"
        },
        "SubnetId":{
          "shape":"GenericString",
          "documentation":"<p>The subnet ID assigned to the new DevEndpoint.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The AWS ARN of the role assigned to the new DevEndpoint.</p>"
        },
        "YarnEndpointAddress":{
          "shape":"GenericString",
          "documentation":"<p>The address of the YARN endpoint used by this DevEndpoint.</p>"
        },
        "ZeppelinRemoteSparkInterpreterPort":{
          "shape":"IntegerValue",
          "documentation":"<p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>"
        },
        "NumberOfNodes":{
          "shape":"IntegerValue",
          "documentation":"<p>The number of AWS Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>"
        },
        "AvailabilityZone":{
          "shape":"GenericString",
          "documentation":"<p>The AWS availability zone where this DevEndpoint is located.</p>"
        },
        "VpcId":{
          "shape":"GenericString",
          "documentation":"<p>The ID of the VPC used by this DevEndpoint.</p>"
        },
        "ExtraPythonLibsS3Path":{
          "shape":"GenericString",
          "documentation":"<p>Path(s) to one or more Python libraries in an S3 bucket that will be loaded in your DevEndpoint.</p>"
        },
        "ExtraJarsS3Path":{
          "shape":"GenericString",
          "documentation":"<p>Path to one or more Java Jars in an S3 bucket that will be loaded in your DevEndpoint.</p>"
        },
        "FailureReason":{
          "shape":"GenericString",
          "documentation":"<p>The reason for a current failure in this DevEndpoint.</p>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure being used with this DevEndpoint.</p>"
        },
        "CreatedTimestamp":{
          "shape":"TimestampValue",
          "documentation":"<p>The point in time at which this DevEndpoint was created.</p>"
        }
      }
    },
    "CreateGrokClassifierRequest":{
      "type":"structure",
      "required":[
        "Classification",
        "Name",
        "GrokPattern"
      ],
      "members":{
        "Classification":{
          "shape":"Classification",
          "documentation":"<p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the new classifier.</p>"
        },
        "GrokPattern":{
          "shape":"GrokPattern",
          "documentation":"<p>The grok pattern used by this classifier.</p>"
        },
        "CustomPatterns":{
          "shape":"CustomPatterns",
          "documentation":"<p>Optional custom grok patterns used by this classifier.</p>"
        }
      },
      "documentation":"<p>Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.</p>"
    },
    "CreateJobRequest":{
      "type":"structure",
      "required":[
        "Name",
        "Role",
        "Command"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name you assign to this job definition. It must be unique in your account.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the job being defined.</p>"
        },
        "LogUri":{
          "shape":"UriString",
          "documentation":"<p>This field is reserved for future use.</p>"
        },
        "Role":{
          "shape":"RoleString",
          "documentation":"<p>The name or ARN of the IAM role associated with this job.</p>"
        },
        "ExecutionProperty":{
          "shape":"ExecutionProperty",
          "documentation":"<p>An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.</p>"
        },
        "Command":{
          "shape":"JobCommand",
          "documentation":"<p>The JobCommand that executes this job.</p>"
        },
        "DefaultArguments":{
          "shape":"GenericMap",
          "documentation":"<p>The default arguments for this job.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own Job arguments, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html\">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html\">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>"
        },
        "Connections":{
          "shape":"ConnectionsList",
          "documentation":"<p>The connections used for this job.</p>"
        },
        "MaxRetries":{
          "shape":"MaxRetries",
          "documentation":"<p>The maximum number of times to retry this job if it fails.</p>"
        },
        "AllocatedCapacity":{
          "shape":"IntegerValue",
          "documentation":"<p>The number of AWS Glue data processing units (DPUs) to allocate to this Job. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href=\"https://aws.amazon.com/glue/pricing/\">AWS Glue pricing page</a>.</p>"
        },
        "Timeout":{
          "shape":"Timeout",
          "documentation":"<p>The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>"
        },
        "NotificationProperty":{
          "shape":"NotificationProperty",
          "documentation":"<p>Specifies configuration properties of a job notification.</p>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used with this job.</p>"
        }
      }
    },
    "CreateJobResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The unique name that was provided for this job definition.</p>"
        }
      }
    },
    "CreateJsonClassifierRequest":{
      "type":"structure",
      "required":[
        "Name",
        "JsonPath"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the classifier.</p>"
        },
        "JsonPath":{
          "shape":"JsonPath",
          "documentation":"<p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS Glue supports a subset of JsonPath, as described in <a href=\"https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json\">Writing JsonPath Custom Classifiers</a>.</p>"
        }
      },
      "documentation":"<p>Specifies a JSON classifier for <code>CreateClassifier</code> to create.</p>"
    },
    "CreatePartitionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "PartitionInput"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the catalog in which the partion is to be created. Currently, this should be the AWS account ID.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the metadata database in which the partition is to be created.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the metadata table in which the partition is to be created.</p>"
        },
        "PartitionInput":{
          "shape":"PartitionInput",
          "documentation":"<p>A <code>PartitionInput</code> structure defining the partition to be created.</p>"
        }
      }
    },
    "CreatePartitionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateScriptRequest":{
      "type":"structure",
      "members":{
        "DagNodes":{
          "shape":"DagNodes",
          "documentation":"<p>A list of the nodes in the DAG.</p>"
        },
        "DagEdges":{
          "shape":"DagEdges",
          "documentation":"<p>A list of the edges in the DAG.</p>"
        },
        "Language":{
          "shape":"Language",
          "documentation":"<p>The programming language of the resulting code from the DAG.</p>"
        }
      }
    },
    "CreateScriptResponse":{
      "type":"structure",
      "members":{
        "PythonScript":{
          "shape":"PythonScript",
          "documentation":"<p>The Python script generated from the DAG.</p>"
        },
        "ScalaCode":{
          "shape":"ScalaCode",
          "documentation":"<p>The Scala code generated from the DAG.</p>"
        }
      }
    },
    "CreateSecurityConfigurationRequest":{
      "type":"structure",
      "required":[
        "Name",
        "EncryptionConfiguration"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name for the new security configuration.</p>"
        },
        "EncryptionConfiguration":{
          "shape":"EncryptionConfiguration",
          "documentation":"<p>The encryption configuration for the new security configuration.</p>"
        }
      }
    },
    "CreateSecurityConfigurationResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name assigned to the new security configuration.</p>"
        },
        "CreatedTimestamp":{
          "shape":"TimestampValue",
          "documentation":"<p>The time at which the new security configuration was created.</p>"
        }
      }
    },
    "CreateTableRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableInput"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which to create the <code>Table</code>. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The catalog database in which to create the new table. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "TableInput":{
          "shape":"TableInput",
          "documentation":"<p>The <code>TableInput</code> object that defines the metadata table to create in the catalog.</p>"
        }
      }
    },
    "CreateTableResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateTriggerRequest":{
      "type":"structure",
      "required":[
        "Name",
        "Type",
        "Actions"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger.</p>"
        },
        "Type":{
          "shape":"TriggerType",
          "documentation":"<p>The type of the new trigger.</p>"
        },
        "Schedule":{
          "shape":"GenericString",
          "documentation":"<p>A <code>cron</code> expression used to specify the schedule (see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html\">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p> <p>This field is required when the trigger type is SCHEDULED.</p>"
        },
        "Predicate":{
          "shape":"Predicate",
          "documentation":"<p>A predicate to specify when the new trigger should fire.</p> <p>This field is required when the trigger type is CONDITIONAL.</p>"
        },
        "Actions":{
          "shape":"ActionList",
          "documentation":"<p>The actions initiated by this trigger when it fires.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>A description of the new trigger.</p>"
        },
        "StartOnCreation":{
          "shape":"BooleanValue",
          "documentation":"<p>Set to true to start SCHEDULED and CONDITIONAL triggers when created. True not supported for ON_DEMAND triggers.</p>"
        }
      }
    },
    "CreateTriggerResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger.</p>"
        }
      }
    },
    "CreateUserDefinedFunctionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "FunctionInput"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which to create the function. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database in which to create the function.</p>"
        },
        "FunctionInput":{
          "shape":"UserDefinedFunctionInput",
          "documentation":"<p>A <code>FunctionInput</code> object that defines the function to create in the Data Catalog.</p>"
        }
      }
    },
    "CreateUserDefinedFunctionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateXMLClassifierRequest":{
      "type":"structure",
      "required":[
        "Classification",
        "Name"
      ],
      "members":{
        "Classification":{
          "shape":"Classification",
          "documentation":"<p>An identifier of the data format that the classifier matches.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the classifier.</p>"
        },
        "RowTag":{
          "shape":"RowTag",
          "documentation":"<p>The XML tag designating the element that contains each record in an XML document being parsed. Note that this cannot identify a self-closing element (closed by <code>/&gt;</code>). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <code>&lt;row item_a=\"A\" item_b=\"B\"&gt;&lt;/row&gt;</code> is okay, but <code>&lt;row item_a=\"A\" item_b=\"B\" /&gt;</code> is not).</p>"
        }
      },
      "documentation":"<p>Specifies an XML classifier for <code>CreateClassifier</code> to create.</p>"
    },
    "CronExpression":{"type":"string"},
    "CustomPatterns":{
      "type":"string",
      "max":16000,
      "min":0,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "DagEdges":{
      "type":"list",
      "member":{"shape":"CodeGenEdge"}
    },
    "DagNodes":{
      "type":"list",
      "member":{"shape":"CodeGenNode"}
    },
    "DataCatalogEncryptionSettings":{
      "type":"structure",
      "members":{
        "EncryptionAtRest":{
          "shape":"EncryptionAtRest",
          "documentation":"<p>Specifies encryption-at-rest configuration for the Data Catalog.</p>"
        }
      },
      "documentation":"<p>Contains configuration information for maintaining Data Catalog security.</p>"
    },
    "Database":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the database. For Hive compatibility, this is folded to lowercase when it is stored.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the database.</p>"
        },
        "LocationUri":{
          "shape":"URI",
          "documentation":"<p>The location of the database (for example, an HDFS path).</p>"
        },
        "Parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>These key-value pairs define parameters and properties of the database.</p>"
        },
        "CreateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the metadata database was created in the catalog.</p>"
        }
      },
      "documentation":"<p>The <code>Database</code> object represents a logical grouping of tables that may reside in a Hive metastore or an RDBMS.</p>"
    },
    "DatabaseInput":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the database. For Hive compatibility, this is folded to lowercase when it is stored.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the database</p>"
        },
        "LocationUri":{
          "shape":"URI",
          "documentation":"<p>The location of the database (for example, an HDFS path).</p>"
        },
        "Parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>Thes key-value pairs define parameters and properties of the database.</p>"
        }
      },
      "documentation":"<p>The structure used to create or update a database.</p>"
    },
    "DatabaseList":{
      "type":"list",
      "member":{"shape":"Database"}
    },
    "DatabaseName":{"type":"string"},
    "DeleteBehavior":{
      "type":"string",
      "enum":[
        "LOG",
        "DELETE_FROM_DATABASE",
        "DEPRECATE_IN_DATABASE"
      ]
    },
    "DeleteClassifierRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the classifier to remove.</p>"
        }
      }
    },
    "DeleteClassifierResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteConnectionNameList":{
      "type":"list",
      "member":{"shape":"NameString"},
      "max":25,
      "min":0
    },
    "DeleteConnectionRequest":{
      "type":"structure",
      "required":["ConnectionName"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which the connection resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "ConnectionName":{
          "shape":"NameString",
          "documentation":"<p>The name of the connection to delete.</p>"
        }
      }
    },
    "DeleteConnectionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteCrawlerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the crawler to remove.</p>"
        }
      }
    },
    "DeleteCrawlerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteDatabaseRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which the database resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the Database to delete. For Hive compatibility, this must be all lowercase.</p>"
        }
      }
    },
    "DeleteDatabaseResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteDevEndpointRequest":{
      "type":"structure",
      "required":["EndpointName"],
      "members":{
        "EndpointName":{
          "shape":"GenericString",
          "documentation":"<p>The name of the DevEndpoint.</p>"
        }
      }
    },
    "DeleteDevEndpointResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteJobRequest":{
      "type":"structure",
      "required":["JobName"],
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition to delete.</p>"
        }
      }
    },
    "DeleteJobResponse":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition that was deleted.</p>"
        }
      }
    },
    "DeletePartitionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "PartitionValues"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the partition to be deleted resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database in which the table in question resides.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table where the partition to be deleted is located.</p>"
        },
        "PartitionValues":{
          "shape":"ValueStringList",
          "documentation":"<p>The values that define the partition.</p>"
        }
      }
    },
    "DeletePartitionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteSecurityConfigurationRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the security configuration to delete.</p>"
        }
      }
    },
    "DeleteSecurityConfigurationResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteTableRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "Name"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the table to be deleted. For Hive compatibility, this name is entirely lowercase.</p>"
        }
      }
    },
    "DeleteTableResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteTableVersionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "VersionId"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "VersionId":{
          "shape":"VersionString",
          "documentation":"<p>The ID of the table version to be deleted.</p>"
        }
      }
    },
    "DeleteTableVersionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteTriggerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger to delete.</p>"
        }
      }
    },
    "DeleteTriggerResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger that was deleted.</p>"
        }
      }
    },
    "DeleteUserDefinedFunctionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "FunctionName"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the function to be deleted is located. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the function is located.</p>"
        },
        "FunctionName":{
          "shape":"NameString",
          "documentation":"<p>The name of the function definition to be deleted.</p>"
        }
      }
    },
    "DeleteUserDefinedFunctionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DescriptionString":{
      "type":"string",
      "max":2048,
      "min":0,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "DescriptionStringRemovable":{
      "type":"string",
      "max":2048,
      "min":0,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "DevEndpoint":{
      "type":"structure",
      "members":{
        "EndpointName":{
          "shape":"GenericString",
          "documentation":"<p>The name of the DevEndpoint.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The AWS ARN of the IAM role used in this DevEndpoint.</p>"
        },
        "SecurityGroupIds":{
          "shape":"StringList",
          "documentation":"<p>A list of security group identifiers used in this DevEndpoint.</p>"
        },
        "SubnetId":{
          "shape":"GenericString",
          "documentation":"<p>The subnet ID for this DevEndpoint.</p>"
        },
        "YarnEndpointAddress":{
          "shape":"GenericString",
          "documentation":"<p>The YARN endpoint address used by this DevEndpoint.</p>"
        },
        "PrivateAddress":{
          "shape":"GenericString",
          "documentation":"<p>A private DNS to access the DevEndpoint within a VPC, if the DevEndpoint is created within one.</p>"
        },
        "ZeppelinRemoteSparkInterpreterPort":{
          "shape":"IntegerValue",
          "documentation":"<p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>"
        },
        "PublicAddress":{
          "shape":"GenericString",
          "documentation":"<p>The public VPC address used by this DevEndpoint.</p>"
        },
        "Status":{
          "shape":"GenericString",
          "documentation":"<p>The current status of this DevEndpoint.</p>"
        },
        "NumberOfNodes":{
          "shape":"IntegerValue",
          "documentation":"<p>The number of AWS Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>"
        },
        "AvailabilityZone":{
          "shape":"GenericString",
          "documentation":"<p>The AWS availability zone where this DevEndpoint is located.</p>"
        },
        "VpcId":{
          "shape":"GenericString",
          "documentation":"<p>The ID of the virtual private cloud (VPC) used by this DevEndpoint.</p>"
        },
        "ExtraPythonLibsS3Path":{
          "shape":"GenericString",
          "documentation":"<p>Path(s) to one or more Python libraries in an S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma.</p> <p>Please note that only pure Python libraries can currently be used on a DevEndpoint. Libraries that rely on C extensions, such as the <a href=\"http://pandas.pydata.org/\">pandas</a> Python data analysis library, are not yet supported.</p>"
        },
        "ExtraJarsS3Path":{
          "shape":"GenericString",
          "documentation":"<p>Path to one or more Java Jars in an S3 bucket that should be loaded in your DevEndpoint.</p> <p>Please note that only pure Java/Scala libraries can currently be used on a DevEndpoint.</p>"
        },
        "FailureReason":{
          "shape":"GenericString",
          "documentation":"<p>The reason for a current failure in this DevEndpoint.</p>"
        },
        "LastUpdateStatus":{
          "shape":"GenericString",
          "documentation":"<p>The status of the last update.</p>"
        },
        "CreatedTimestamp":{
          "shape":"TimestampValue",
          "documentation":"<p>The point in time at which this DevEndpoint was created.</p>"
        },
        "LastModifiedTimestamp":{
          "shape":"TimestampValue",
          "documentation":"<p>The point in time at which this DevEndpoint was last modified.</p>"
        },
        "PublicKey":{
          "shape":"GenericString",
          "documentation":"<p>The public key to be used by this DevEndpoint for authentication. This attribute is provided for backward compatibility, as the recommended attribute to use is public keys.</p>"
        },
        "PublicKeys":{
          "shape":"PublicKeysList",
          "documentation":"<p>A list of public keys to be used by the DevEndpoints for authentication. The use of this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.</p> <note> <p>If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys: call the <code>UpdateDevEndpoint</code> API with the public key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the <code>addPublicKeys</code> attribute.</p> </note>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used with this DevEndpoint.</p>"
        }
      },
      "documentation":"<p>A development endpoint where a developer can remotely debug ETL scripts.</p>"
    },
    "DevEndpointCustomLibraries":{
      "type":"structure",
      "members":{
        "ExtraPythonLibsS3Path":{
          "shape":"GenericString",
          "documentation":"<p>Path(s) to one or more Python libraries in an S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma.</p> <p>Please note that only pure Python libraries can currently be used on a DevEndpoint. Libraries that rely on C extensions, such as the <a href=\"http://pandas.pydata.org/\">pandas</a> Python data analysis library, are not yet supported.</p>"
        },
        "ExtraJarsS3Path":{
          "shape":"GenericString",
          "documentation":"<p>Path to one or more Java Jars in an S3 bucket that should be loaded in your DevEndpoint.</p> <p>Please note that only pure Java/Scala libraries can currently be used on a DevEndpoint.</p>"
        }
      },
      "documentation":"<p>Custom libraries to be loaded into a DevEndpoint.</p>"
    },
    "DevEndpointList":{
      "type":"list",
      "member":{"shape":"DevEndpoint"}
    },
    "DynamoDBTarget":{
      "type":"structure",
      "members":{
        "Path":{
          "shape":"Path",
          "documentation":"<p>The name of the DynamoDB table to crawl.</p>"
        }
      },
      "documentation":"<p>Specifies a DynamoDB table to crawl.</p>"
    },
    "DynamoDBTargetList":{
      "type":"list",
      "member":{"shape":"DynamoDBTarget"}
    },
    "EncryptionAtRest":{
      "type":"structure",
      "required":["CatalogEncryptionMode"],
      "members":{
        "CatalogEncryptionMode":{
          "shape":"CatalogEncryptionMode",
          "documentation":"<p>The encryption-at-rest mode for encrypting Data Catalog data.</p>"
        },
        "SseAwsKmsKeyId":{
          "shape":"NameString",
          "documentation":"<p>The ID of the AWS KMS key to use for encryption at rest.</p>"
        }
      },
      "documentation":"<p>Specifies encryption-at-rest configuration for the Data Catalog.</p>"
    },
    "EncryptionConfiguration":{
      "type":"structure",
      "members":{
        "S3Encryption":{
          "shape":"S3EncryptionList",
          "documentation":"<p>The encryption configuration for S3 data.</p>"
        },
        "CloudWatchEncryption":{
          "shape":"CloudWatchEncryption",
          "documentation":"<p>The encryption configuration for CloudWatch.</p>"
        },
        "JobBookmarksEncryption":{
          "shape":"JobBookmarksEncryption",
          "documentation":"<p>The encryption configuration for Job Bookmarks.</p>"
        }
      },
      "documentation":"<p>Specifies an encryption configuration.</p>"
    },
    "EntityNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>A specified entity does not exist</p>",
      "exception":true
    },
    "ErrorByName":{
      "type":"map",
      "key":{"shape":"NameString"},
      "value":{"shape":"ErrorDetail"}
    },
    "ErrorDetail":{
      "type":"structure",
      "members":{
        "ErrorCode":{
          "shape":"NameString",
          "documentation":"<p>The code associated with this error.</p>"
        },
        "ErrorMessage":{
          "shape":"DescriptionString",
          "documentation":"<p>A message describing the error.</p>"
        }
      },
      "documentation":"<p>Contains details about an error.</p>"
    },
    "ErrorString":{"type":"string"},
    "ExecutionProperty":{
      "type":"structure",
      "members":{
        "MaxConcurrentRuns":{
          "shape":"MaxConcurrentRuns",
          "documentation":"<p>The maximum number of concurrent runs allowed for the job. The default is 1. An error is returned when this threshold is reached. The maximum value you can specify is controlled by a service limit.</p>"
        }
      },
      "documentation":"<p>An execution property of a job.</p>"
    },
    "ExecutionTime":{"type":"integer"},
    "FieldType":{"type":"string"},
    "FilterString":{
      "type":"string",
      "max":2048,
      "min":0,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "FormatString":{
      "type":"string",
      "max":128,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "GenericMap":{
      "type":"map",
      "key":{"shape":"GenericString"},
      "value":{"shape":"GenericString"}
    },
    "GenericString":{"type":"string"},
    "GetCatalogImportStatusRequest":{
      "type":"structure",
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the catalog to migrate. Currently, this should be the AWS account ID.</p>"
        }
      }
    },
    "GetCatalogImportStatusResponse":{
      "type":"structure",
      "members":{
        "ImportStatus":{
          "shape":"CatalogImportStatus",
          "documentation":"<p>The status of the specified catalog migration.</p>"
        }
      }
    },
    "GetClassifierRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the classifier to retrieve.</p>"
        }
      }
    },
    "GetClassifierResponse":{
      "type":"structure",
      "members":{
        "Classifier":{
          "shape":"Classifier",
          "documentation":"<p>The requested classifier.</p>"
        }
      }
    },
    "GetClassifiersRequest":{
      "type":"structure",
      "members":{
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>Size of the list to return (optional).</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>An optional continuation token.</p>"
        }
      }
    },
    "GetClassifiersResponse":{
      "type":"structure",
      "members":{
        "Classifiers":{
          "shape":"ClassifierList",
          "documentation":"<p>The requested list of classifier objects.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token.</p>"
        }
      }
    },
    "GetConnectionRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which the connection resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the connection definition to retrieve.</p>"
        }
      }
    },
    "GetConnectionResponse":{
      "type":"structure",
      "members":{
        "Connection":{
          "shape":"Connection",
          "documentation":"<p>The requested connection definition.</p>"
        }
      }
    },
    "GetConnectionsFilter":{
      "type":"structure",
      "members":{
        "MatchCriteria":{
          "shape":"MatchCriteria",
          "documentation":"<p>A criteria string that must match the criteria recorded in the connection definition for that connection definition to be returned.</p>"
        },
        "ConnectionType":{
          "shape":"ConnectionType",
          "documentation":"<p>The type of connections to return. Currently, only JDBC is supported; SFTP is not supported.</p>"
        }
      },
      "documentation":"<p>Filters the connection definitions returned by the <code>GetConnections</code> API.</p>"
    },
    "GetConnectionsRequest":{
      "type":"structure",
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which the connections reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "Filter":{
          "shape":"GetConnectionsFilter",
          "documentation":"<p>A filter that controls which connections will be returned.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of connections to return in one response.</p>"
        }
      }
    },
    "GetConnectionsResponse":{
      "type":"structure",
      "members":{
        "ConnectionList":{
          "shape":"ConnectionList",
          "documentation":"<p>A list of requested connection definitions.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if the list of connections returned does not include the last of the filtered connections.</p>"
        }
      }
    },
    "GetCrawlerMetricsRequest":{
      "type":"structure",
      "members":{
        "CrawlerNameList":{
          "shape":"CrawlerNameList",
          "documentation":"<p>A list of the names of crawlers about which to retrieve metrics.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum size of a list to return.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        }
      }
    },
    "GetCrawlerMetricsResponse":{
      "type":"structure",
      "members":{
        "CrawlerMetricsList":{
          "shape":"CrawlerMetricsList",
          "documentation":"<p>A list of metrics for the specified crawler.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if the returned list does not contain the last metric available.</p>"
        }
      }
    },
    "GetCrawlerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the crawler to retrieve metadata for.</p>"
        }
      }
    },
    "GetCrawlerResponse":{
      "type":"structure",
      "members":{
        "Crawler":{
          "shape":"Crawler",
          "documentation":"<p>The metadata for the specified crawler.</p>"
        }
      }
    },
    "GetCrawlersRequest":{
      "type":"structure",
      "members":{
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The number of crawlers to return on each call.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if this is a continuation request.</p>"
        }
      }
    },
    "GetCrawlersResponse":{
      "type":"structure",
      "members":{
        "Crawlers":{
          "shape":"CrawlerList",
          "documentation":"<p>A list of crawler metadata.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if the returned list has not reached the end of those defined in this customer account.</p>"
        }
      }
    },
    "GetDatabaseRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which the database resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the database to retrieve. For Hive compatibility, this should be all lowercase.</p>"
        }
      }
    },
    "GetDatabaseResponse":{
      "type":"structure",
      "members":{
        "Database":{
          "shape":"Database",
          "documentation":"<p>The definition of the specified database in the catalog.</p>"
        }
      }
    },
    "GetDatabasesRequest":{
      "type":"structure",
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of databases to return in one response.</p>"
        }
      }
    },
    "GetDatabasesResponse":{
      "type":"structure",
      "required":["DatabaseList"],
      "members":{
        "DatabaseList":{
          "shape":"DatabaseList",
          "documentation":"<p>A list of <code>Database</code> objects from the specified catalog.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>"
        }
      }
    },
    "GetDataflowGraphRequest":{
      "type":"structure",
      "members":{
        "PythonScript":{
          "shape":"PythonScript",
          "documentation":"<p>The Python script to transform.</p>"
        }
      }
    },
    "GetDataflowGraphResponse":{
      "type":"structure",
      "members":{
        "DagNodes":{
          "shape":"DagNodes",
          "documentation":"<p>A list of the nodes in the resulting DAG.</p>"
        },
        "DagEdges":{
          "shape":"DagEdges",
          "documentation":"<p>A list of the edges in the resulting DAG.</p>"
        }
      }
    },
    "GetDevEndpointRequest":{
      "type":"structure",
      "required":["EndpointName"],
      "members":{
        "EndpointName":{
          "shape":"GenericString",
          "documentation":"<p>Name of the DevEndpoint for which to retrieve information.</p>"
        }
      }
    },
    "GetDevEndpointResponse":{
      "type":"structure",
      "members":{
        "DevEndpoint":{
          "shape":"DevEndpoint",
          "documentation":"<p>A DevEndpoint definition.</p>"
        }
      }
    },
    "GetDevEndpointsRequest":{
      "type":"structure",
      "members":{
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum size of information to return.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        }
      }
    },
    "GetDevEndpointsResponse":{
      "type":"structure",
      "members":{
        "DevEndpoints":{
          "shape":"DevEndpointList",
          "documentation":"<p>A list of DevEndpoint definitions.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if not all DevEndpoint definitions have yet been returned.</p>"
        }
      }
    },
    "GetJobRequest":{
      "type":"structure",
      "required":["JobName"],
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition to retrieve.</p>"
        }
      }
    },
    "GetJobResponse":{
      "type":"structure",
      "members":{
        "Job":{
          "shape":"Job",
          "documentation":"<p>The requested job definition.</p>"
        }
      }
    },
    "GetJobRunRequest":{
      "type":"structure",
      "required":[
        "JobName",
        "RunId"
      ],
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>Name of the job definition being run.</p>"
        },
        "RunId":{
          "shape":"IdString",
          "documentation":"<p>The ID of the job run.</p>"
        },
        "PredecessorsIncluded":{
          "shape":"BooleanValue",
          "documentation":"<p>True if a list of predecessor runs should be returned.</p>"
        }
      }
    },
    "GetJobRunResponse":{
      "type":"structure",
      "members":{
        "JobRun":{
          "shape":"JobRun",
          "documentation":"<p>The requested job-run metadata.</p>"
        }
      }
    },
    "GetJobRunsRequest":{
      "type":"structure",
      "required":["JobName"],
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition for which to retrieve all job runs.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum size of the response.</p>"
        }
      }
    },
    "GetJobRunsResponse":{
      "type":"structure",
      "members":{
        "JobRuns":{
          "shape":"JobRunList",
          "documentation":"<p>A list of job-run metatdata objects.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if not all reequested job runs have been returned.</p>"
        }
      }
    },
    "GetJobsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum size of the response.</p>"
        }
      }
    },
    "GetJobsResponse":{
      "type":"structure",
      "members":{
        "Jobs":{
          "shape":"JobList",
          "documentation":"<p>A list of job definitions.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if not all job definitions have yet been returned.</p>"
        }
      }
    },
    "GetMappingRequest":{
      "type":"structure",
      "required":["Source"],
      "members":{
        "Source":{
          "shape":"CatalogEntry",
          "documentation":"<p>Specifies the source table.</p>"
        },
        "Sinks":{
          "shape":"CatalogEntries",
          "documentation":"<p>A list of target tables.</p>"
        },
        "Location":{
          "shape":"Location",
          "documentation":"<p>Parameters for the mapping.</p>"
        }
      }
    },
    "GetMappingResponse":{
      "type":"structure",
      "required":["Mapping"],
      "members":{
        "Mapping":{
          "shape":"MappingList",
          "documentation":"<p>A list of mappings to the specified targets.</p>"
        }
      }
    },
    "GetPartitionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "PartitionValues"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the partition in question resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the partition resides.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the partition's table.</p>"
        },
        "PartitionValues":{
          "shape":"ValueStringList",
          "documentation":"<p>The values that define the partition.</p>"
        }
      }
    },
    "GetPartitionResponse":{
      "type":"structure",
      "members":{
        "Partition":{
          "shape":"Partition",
          "documentation":"<p>The requested information, in the form of a <code>Partition</code> object.</p>"
        }
      }
    },
    "GetPartitionsRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the partitions reside.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the partitions' table.</p>"
        },
        "Expression":{
          "shape":"PredicateString",
          "documentation":"<p>An expression filtering the partitions to be returned.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if this is not the first call to retrieve these partitions.</p>"
        },
        "Segment":{
          "shape":"Segment",
          "documentation":"<p>The segment of the table's partitions to scan in this request.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of partitions to return in a single response.</p>"
        }
      }
    },
    "GetPartitionsResponse":{
      "type":"structure",
      "members":{
        "Partitions":{
          "shape":"PartitionList",
          "documentation":"<p>A list of requested partitions.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if the returned list of partitions does not does not include the last one.</p>"
        }
      }
    },
    "GetPlanRequest":{
      "type":"structure",
      "required":[
        "Mapping",
        "Source"
      ],
      "members":{
        "Mapping":{
          "shape":"MappingList",
          "documentation":"<p>The list of mappings from a source table to target tables.</p>"
        },
        "Source":{
          "shape":"CatalogEntry",
          "documentation":"<p>The source table.</p>"
        },
        "Sinks":{
          "shape":"CatalogEntries",
          "documentation":"<p>The target tables.</p>"
        },
        "Location":{
          "shape":"Location",
          "documentation":"<p>Parameters for the mapping.</p>"
        },
        "Language":{
          "shape":"Language",
          "documentation":"<p>The programming language of the code to perform the mapping.</p>"
        }
      }
    },
    "GetPlanResponse":{
      "type":"structure",
      "members":{
        "PythonScript":{
          "shape":"PythonScript",
          "documentation":"<p>A Python script to perform the mapping.</p>"
        },
        "ScalaCode":{
          "shape":"ScalaCode",
          "documentation":"<p>Scala code to perform the mapping.</p>"
        }
      }
    },
    "GetSecurityConfigurationRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the security configuration to retrieve.</p>"
        }
      }
    },
    "GetSecurityConfigurationResponse":{
      "type":"structure",
      "members":{
        "SecurityConfiguration":{
          "shape":"SecurityConfiguration",
          "documentation":"<p>The requested security configuration</p>"
        }
      }
    },
    "GetSecurityConfigurationsRequest":{
      "type":"structure",
      "members":{
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        }
      }
    },
    "GetSecurityConfigurationsResponse":{
      "type":"structure",
      "members":{
        "SecurityConfigurations":{
          "shape":"SecurityConfigurationList",
          "documentation":"<p>A list of security configurations.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if there are more security configurations to return.</p>"
        }
      }
    },
    "GetTableRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "Name"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the table for which to retrieve the definition. For Hive compatibility, this name is entirely lowercase.</p>"
        }
      }
    },
    "GetTableResponse":{
      "type":"structure",
      "members":{
        "Table":{
          "shape":"Table",
          "documentation":"<p>The <code>Table</code> object that defines the specified table.</p>"
        }
      }
    },
    "GetTableVersionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "VersionId":{
          "shape":"VersionString",
          "documentation":"<p>The ID value of the table version to be retrieved.</p>"
        }
      }
    },
    "GetTableVersionResponse":{
      "type":"structure",
      "members":{
        "TableVersion":{
          "shape":"TableVersion",
          "documentation":"<p>The requested table version.</p>"
        }
      }
    },
    "GetTableVersionsList":{
      "type":"list",
      "member":{"shape":"TableVersion"}
    },
    "GetTableVersionsRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if this is not the first call.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of table versions to return in one response.</p>"
        }
      }
    },
    "GetTableVersionsResponse":{
      "type":"structure",
      "members":{
        "TableVersions":{
          "shape":"GetTableVersionsList",
          "documentation":"<p>A list of strings identifying available versions of the specified table.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if the list of available versions does not include the last one.</p>"
        }
      }
    },
    "GetTablesRequest":{
      "type":"structure",
      "required":["DatabaseName"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The database in the catalog whose tables to list. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "Expression":{
          "shape":"FilterString",
          "documentation":"<p>A regular expression pattern. If present, only those tables whose names match the pattern are returned.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, included if this is a continuation call.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of tables to return in a single response.</p>"
        }
      }
    },
    "GetTablesResponse":{
      "type":"structure",
      "members":{
        "TableList":{
          "shape":"TableList",
          "documentation":"<p>A list of the requested <code>Table</code> objects.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, present if the current list segment is not the last.</p>"
        }
      }
    },
    "GetTriggerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger to retrieve.</p>"
        }
      }
    },
    "GetTriggerResponse":{
      "type":"structure",
      "members":{
        "Trigger":{
          "shape":"Trigger",
          "documentation":"<p>The requested trigger definition.</p>"
        }
      }
    },
    "GetTriggersRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        },
        "DependentJobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job for which to retrieve triggers. The trigger that can start this job will be returned, and if there is no such trigger, all triggers will be returned.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum size of the response.</p>"
        }
      }
    },
    "GetTriggersResponse":{
      "type":"structure",
      "members":{
        "Triggers":{
          "shape":"TriggerList",
          "documentation":"<p>A list of triggers for the specified job.</p>"
        },
        "NextToken":{
          "shape":"GenericString",
          "documentation":"<p>A continuation token, if not all the requested triggers have yet been returned.</p>"
        }
      }
    },
    "GetUserDefinedFunctionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "FunctionName"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the function to be retrieved is located. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the function is located.</p>"
        },
        "FunctionName":{
          "shape":"NameString",
          "documentation":"<p>The name of the function.</p>"
        }
      }
    },
    "GetUserDefinedFunctionResponse":{
      "type":"structure",
      "members":{
        "UserDefinedFunction":{
          "shape":"UserDefinedFunction",
          "documentation":"<p>The requested function definition.</p>"
        }
      }
    },
    "GetUserDefinedFunctionsRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "Pattern"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the functions to be retrieved are located. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the functions are located.</p>"
        },
        "Pattern":{
          "shape":"NameString",
          "documentation":"<p>An optional function-name pattern string that filters the function definitions returned.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if this is a continuation call.</p>"
        },
        "MaxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of functions to return in one response.</p>"
        }
      }
    },
    "GetUserDefinedFunctionsResponse":{
      "type":"structure",
      "members":{
        "UserDefinedFunctions":{
          "shape":"UserDefinedFunctionList",
          "documentation":"<p>A list of requested function definitions.</p>"
        },
        "NextToken":{
          "shape":"Token",
          "documentation":"<p>A continuation token, if the list of functions returned does not include the last requested function.</p>"
        }
      }
    },
    "GlueEncryptionException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>An encryption operation failed.</p>",
      "exception":true
    },
    "GrokClassifier":{
      "type":"structure",
      "required":[
        "Name",
        "Classification",
        "GrokPattern"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the classifier.</p>"
        },
        "Classification":{
          "shape":"Classification",
          "documentation":"<p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time this classifier was registered.</p>"
        },
        "LastUpdated":{
          "shape":"Timestamp",
          "documentation":"<p>The time this classifier was last updated.</p>"
        },
        "Version":{
          "shape":"VersionId",
          "documentation":"<p>The version of this classifier.</p>"
        },
        "GrokPattern":{
          "shape":"GrokPattern",
          "documentation":"<p>The grok pattern applied to a data store by this classifier. For more information, see built-in patterns in <a href=\"http://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html\">Writing Custom Classifers</a>.</p>"
        },
        "CustomPatterns":{
          "shape":"CustomPatterns",
          "documentation":"<p>Optional custom grok patterns defined by this classifier. For more information, see custom patterns in <a href=\"http://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html\">Writing Custom Classifers</a>.</p>"
        }
      },
      "documentation":"<p>A classifier that uses <code>grok</code> patterns.</p>"
    },
    "GrokPattern":{
      "type":"string",
      "max":2048,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\t]*"
    },
    "IdString":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "IdempotentParameterMismatchException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The same unique identifier was associated with two different records.</p>",
      "exception":true
    },
    "ImportCatalogToGlueRequest":{
      "type":"structure",
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the catalog to import. Currently, this should be the AWS account ID.</p>"
        }
      }
    },
    "ImportCatalogToGlueResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Integer":{"type":"integer"},
    "IntegerFlag":{
      "type":"integer",
      "max":1,
      "min":0
    },
    "IntegerValue":{"type":"integer"},
    "InternalServiceException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>An internal service error occurred.</p>",
      "exception":true,
      "fault":true
    },
    "InvalidInputException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The input provided was not valid.</p>",
      "exception":true
    },
    "JdbcTarget":{
      "type":"structure",
      "members":{
        "ConnectionName":{
          "shape":"ConnectionName",
          "documentation":"<p>The name of the connection to use to connect to the JDBC target.</p>"
        },
        "Path":{
          "shape":"Path",
          "documentation":"<p>The path of the JDBC target.</p>"
        },
        "Exclusions":{
          "shape":"PathList",
          "documentation":"<p>A list of glob patterns used to exclude from the crawl. For more information, see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/add-crawler.html\">Catalog Tables with a Crawler</a>.</p>"
        }
      },
      "documentation":"<p>Specifies a JDBC data store to crawl.</p>"
    },
    "JdbcTargetList":{
      "type":"list",
      "member":{"shape":"JdbcTarget"}
    },
    "Job":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name you assign to this job definition.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the job being defined.</p>"
        },
        "LogUri":{
          "shape":"UriString",
          "documentation":"<p>This field is reserved for future use.</p>"
        },
        "Role":{
          "shape":"RoleString",
          "documentation":"<p>The name or ARN of the IAM role associated with this job.</p>"
        },
        "CreatedOn":{
          "shape":"TimestampValue",
          "documentation":"<p>The time and date that this job definition was created.</p>"
        },
        "LastModifiedOn":{
          "shape":"TimestampValue",
          "documentation":"<p>The last point in time when this job definition was modified.</p>"
        },
        "ExecutionProperty":{
          "shape":"ExecutionProperty",
          "documentation":"<p>An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.</p>"
        },
        "Command":{
          "shape":"JobCommand",
          "documentation":"<p>The JobCommand that executes this job.</p>"
        },
        "DefaultArguments":{
          "shape":"GenericMap",
          "documentation":"<p>The default arguments for this job, specified as name-value pairs.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own Job arguments, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html\">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html\">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>"
        },
        "Connections":{
          "shape":"ConnectionsList",
          "documentation":"<p>The connections used for this job.</p>"
        },
        "MaxRetries":{
          "shape":"MaxRetries",
          "documentation":"<p>The maximum number of times to retry this job after a JobRun fails.</p>"
        },
        "AllocatedCapacity":{
          "shape":"IntegerValue",
          "documentation":"<p>The number of AWS Glue data processing units (DPUs) allocated to runs of this job. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href=\"https://aws.amazon.com/glue/pricing/\">AWS Glue pricing page</a>.</p>"
        },
        "Timeout":{
          "shape":"Timeout",
          "documentation":"<p>The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>"
        },
        "NotificationProperty":{
          "shape":"NotificationProperty",
          "documentation":"<p>Specifies configuration properties of a job notification.</p>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used with this job.</p>"
        }
      },
      "documentation":"<p>Specifies a job definition.</p>"
    },
    "JobBookmarkEntry":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>Name of the job in question.</p>"
        },
        "Version":{
          "shape":"IntegerValue",
          "documentation":"<p>Version of the job.</p>"
        },
        "Run":{
          "shape":"IntegerValue",
          "documentation":"<p>The run ID number.</p>"
        },
        "Attempt":{
          "shape":"IntegerValue",
          "documentation":"<p>The attempt ID number.</p>"
        },
        "JobBookmark":{
          "shape":"JsonValue",
          "documentation":"<p>The bookmark itself.</p>"
        }
      },
      "documentation":"<p>Defines a point which a job can resume processing.</p>"
    },
    "JobBookmarksEncryption":{
      "type":"structure",
      "members":{
        "JobBookmarksEncryptionMode":{
          "shape":"JobBookmarksEncryptionMode",
          "documentation":"<p>The encryption mode to use for Job bookmarks data.</p>"
        },
        "KmsKeyArn":{
          "shape":"KmsKeyArn",
          "documentation":"<p>The AWS ARN of the KMS key to be used to encrypt the data.</p>"
        }
      },
      "documentation":"<p>Specifies how Job bookmark data should be encrypted.</p>"
    },
    "JobBookmarksEncryptionMode":{
      "type":"string",
      "enum":[
        "DISABLED",
        "CSE-KMS"
      ]
    },
    "JobCommand":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"GenericString",
          "documentation":"<p>The name of the job command: this must be <code>glueetl</code>.</p>"
        },
        "ScriptLocation":{
          "shape":"ScriptLocationString",
          "documentation":"<p>Specifies the S3 path to a script that executes a job (required).</p>"
        }
      },
      "documentation":"<p>Specifies code executed when a job is run.</p>"
    },
    "JobList":{
      "type":"list",
      "member":{"shape":"Job"}
    },
    "JobName":{"type":"string"},
    "JobRun":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"IdString",
          "documentation":"<p>The ID of this job run.</p>"
        },
        "Attempt":{
          "shape":"AttemptCount",
          "documentation":"<p>The number of the attempt to run this job.</p>"
        },
        "PreviousRunId":{
          "shape":"IdString",
          "documentation":"<p>The ID of the previous run of this job. For example, the JobRunId specified in the StartJobRun action.</p>"
        },
        "TriggerName":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger that started this job run.</p>"
        },
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition being used in this run.</p>"
        },
        "StartedOn":{
          "shape":"TimestampValue",
          "documentation":"<p>The date and time at which this job run was started.</p>"
        },
        "LastModifiedOn":{
          "shape":"TimestampValue",
          "documentation":"<p>The last time this job run was modified.</p>"
        },
        "CompletedOn":{
          "shape":"TimestampValue",
          "documentation":"<p>The date and time this job run completed.</p>"
        },
        "JobRunState":{
          "shape":"JobRunState",
          "documentation":"<p>The current state of the job run.</p>"
        },
        "Arguments":{
          "shape":"GenericMap",
          "documentation":"<p>The job arguments associated with this run. These override equivalent default arguments set for the job.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own job arguments, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html\">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html\">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>"
        },
        "ErrorMessage":{
          "shape":"ErrorString",
          "documentation":"<p>An error message associated with this job run.</p>"
        },
        "PredecessorRuns":{
          "shape":"PredecessorList",
          "documentation":"<p>A list of predecessors to this job run.</p>"
        },
        "AllocatedCapacity":{
          "shape":"IntegerValue",
          "documentation":"<p>The number of AWS Glue data processing units (DPUs) allocated to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href=\"https://aws.amazon.com/glue/pricing/\">AWS Glue pricing page</a>.</p>"
        },
        "ExecutionTime":{
          "shape":"ExecutionTime",
          "documentation":"<p>The amount of time (in seconds) that the job run consumed resources.</p>"
        },
        "Timeout":{
          "shape":"Timeout",
          "documentation":"<p>The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>"
        },
        "NotificationProperty":{
          "shape":"NotificationProperty",
          "documentation":"<p>Specifies configuration properties of a job run notification.</p>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used with this job run.</p>"
        },
        "LogGroupName":{
          "shape":"GenericString",
          "documentation":"<p>The name of the log group for secure logging, that can be server-side encrypted in CloudWatch using KMS. This name can be <code>/aws-glue/jobs/</code>, in which case the default encryption is <code>NONE</code>. If you add a role name and SecurityConfiguration name (in other words, <code>/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/</code>), then that security configuration will be used to encrypt the log group.</p>"
        }
      },
      "documentation":"<p>Contains information about a job run.</p>"
    },
    "JobRunList":{
      "type":"list",
      "member":{"shape":"JobRun"}
    },
    "JobRunState":{
      "type":"string",
      "enum":[
        "STARTING",
        "RUNNING",
        "STOPPING",
        "STOPPED",
        "SUCCEEDED",
        "FAILED",
        "TIMEOUT"
      ]
    },
    "JobUpdate":{
      "type":"structure",
      "members":{
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the job being defined.</p>"
        },
        "LogUri":{
          "shape":"UriString",
          "documentation":"<p>This field is reserved for future use.</p>"
        },
        "Role":{
          "shape":"RoleString",
          "documentation":"<p>The name or ARN of the IAM role associated with this job (required).</p>"
        },
        "ExecutionProperty":{
          "shape":"ExecutionProperty",
          "documentation":"<p>An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.</p>"
        },
        "Command":{
          "shape":"JobCommand",
          "documentation":"<p>The JobCommand that executes this job (required).</p>"
        },
        "DefaultArguments":{
          "shape":"GenericMap",
          "documentation":"<p>The default arguments for this job.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own Job arguments, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html\">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html\">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>"
        },
        "Connections":{
          "shape":"ConnectionsList",
          "documentation":"<p>The connections used for this job.</p>"
        },
        "MaxRetries":{
          "shape":"MaxRetries",
          "documentation":"<p>The maximum number of times to retry this job if it fails.</p>"
        },
        "AllocatedCapacity":{
          "shape":"IntegerValue",
          "documentation":"<p>The number of AWS Glue data processing units (DPUs) to allocate to this Job. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href=\"https://aws.amazon.com/glue/pricing/\">AWS Glue pricing page</a>.</p>"
        },
        "Timeout":{
          "shape":"Timeout",
          "documentation":"<p>The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>"
        },
        "NotificationProperty":{
          "shape":"NotificationProperty",
          "documentation":"<p>Specifies configuration properties of a job notification.</p>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used with this job.</p>"
        }
      },
      "documentation":"<p>Specifies information used to update an existing job definition. Note that the previous job definition will be completely overwritten by this information.</p>"
    },
    "JsonClassifier":{
      "type":"structure",
      "required":[
        "Name",
        "JsonPath"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the classifier.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time this classifier was registered.</p>"
        },
        "LastUpdated":{
          "shape":"Timestamp",
          "documentation":"<p>The time this classifier was last updated.</p>"
        },
        "Version":{
          "shape":"VersionId",
          "documentation":"<p>The version of this classifier.</p>"
        },
        "JsonPath":{
          "shape":"JsonPath",
          "documentation":"<p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS Glue supports a subset of JsonPath, as described in <a href=\"https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json\">Writing JsonPath Custom Classifiers</a>.</p>"
        }
      },
      "documentation":"<p>A classifier for <code>JSON</code> content.</p>"
    },
    "JsonPath":{"type":"string"},
    "JsonValue":{"type":"string"},
    "KeyString":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "KmsKeyArn":{
      "type":"string",
      "pattern":"arn:aws:kms:.*"
    },
    "Language":{
      "type":"string",
      "enum":[
        "PYTHON",
        "SCALA"
      ]
    },
    "LastCrawlInfo":{
      "type":"structure",
      "members":{
        "Status":{
          "shape":"LastCrawlStatus",
          "documentation":"<p>Status of the last crawl.</p>"
        },
        "ErrorMessage":{
          "shape":"DescriptionString",
          "documentation":"<p>If an error occurred, the error information about the last crawl.</p>"
        },
        "LogGroup":{
          "shape":"LogGroup",
          "documentation":"<p>The log group for the last crawl.</p>"
        },
        "LogStream":{
          "shape":"LogStream",
          "documentation":"<p>The log stream for the last crawl.</p>"
        },
        "MessagePrefix":{
          "shape":"MessagePrefix",
          "documentation":"<p>The prefix for a message about this crawl.</p>"
        },
        "StartTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the crawl started.</p>"
        }
      },
      "documentation":"<p>Status and error information about the most recent crawl.</p>"
    },
    "LastCrawlStatus":{
      "type":"string",
      "enum":[
        "SUCCEEDED",
        "CANCELLED",
        "FAILED"
      ]
    },
    "Location":{
      "type":"structure",
      "members":{
        "Jdbc":{
          "shape":"CodeGenNodeArgs",
          "documentation":"<p>A JDBC location.</p>"
        },
        "S3":{
          "shape":"CodeGenNodeArgs",
          "documentation":"<p>An Amazon S3 location.</p>"
        },
        "DynamoDB":{
          "shape":"CodeGenNodeArgs",
          "documentation":"<p>A DynamoDB Table location.</p>"
        }
      },
      "documentation":"<p>The location of resources.</p>"
    },
    "LocationMap":{
      "type":"map",
      "key":{"shape":"ColumnValuesString"},
      "value":{"shape":"ColumnValuesString"}
    },
    "LocationString":{
      "type":"string",
      "max":2056,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "LogGroup":{
      "type":"string",
      "max":512,
      "min":1,
      "pattern":"[\\.\\-_/#A-Za-z0-9]+"
    },
    "LogStream":{
      "type":"string",
      "max":512,
      "min":1,
      "pattern":"[^:*]*"
    },
    "Logical":{
      "type":"string",
      "enum":[
        "AND",
        "ANY"
      ]
    },
    "LogicalOperator":{
      "type":"string",
      "enum":["EQUALS"]
    },
    "MappingEntry":{
      "type":"structure",
      "members":{
        "SourceTable":{
          "shape":"TableName",
          "documentation":"<p>The name of the source table.</p>"
        },
        "SourcePath":{
          "shape":"SchemaPathString",
          "documentation":"<p>The source path.</p>"
        },
        "SourceType":{
          "shape":"FieldType",
          "documentation":"<p>The source type.</p>"
        },
        "TargetTable":{
          "shape":"TableName",
          "documentation":"<p>The target table.</p>"
        },
        "TargetPath":{
          "shape":"SchemaPathString",
          "documentation":"<p>The target path.</p>"
        },
        "TargetType":{
          "shape":"FieldType",
          "documentation":"<p>The target type.</p>"
        }
      },
      "documentation":"<p>Defines a mapping.</p>"
    },
    "MappingList":{
      "type":"list",
      "member":{"shape":"MappingEntry"}
    },
    "MatchCriteria":{
      "type":"list",
      "member":{"shape":"NameString"},
      "max":10,
      "min":0
    },
    "MaxConcurrentRuns":{"type":"integer"},
    "MaxRetries":{"type":"integer"},
    "MessagePrefix":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "MessageString":{"type":"string"},
    "MillisecondsCount":{"type":"long"},
    "NameString":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "NameStringList":{
      "type":"list",
      "member":{"shape":"NameString"}
    },
    "NoScheduleException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>There is no applicable schedule.</p>",
      "exception":true
    },
    "NonNegativeDouble":{
      "type":"double",
      "min":0.0
    },
    "NonNegativeInteger":{
      "type":"integer",
      "min":0
    },
    "NotificationProperty":{
      "type":"structure",
      "members":{
        "NotifyDelayAfter":{
          "shape":"NotifyDelayAfter",
          "documentation":"<p>After a job run starts, the number of minutes to wait before sending a job run delay notification.</p>"
        }
      },
      "documentation":"<p>Specifies configuration properties of a notification.</p>"
    },
    "NotifyDelayAfter":{
      "type":"integer",
      "box":true,
      "min":1
    },
    "OperationTimeoutException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The operation timed out.</p>",
      "exception":true
    },
    "Order":{
      "type":"structure",
      "required":[
        "Column",
        "SortOrder"
      ],
      "members":{
        "Column":{
          "shape":"NameString",
          "documentation":"<p>The name of the column.</p>"
        },
        "SortOrder":{
          "shape":"IntegerFlag",
          "documentation":"<p>Indicates that the column is sorted in ascending order (<code>== 1</code>), or in descending order (<code>==0</code>).</p>"
        }
      },
      "documentation":"<p>Specifies the sort order of a sorted column.</p>"
    },
    "OrderList":{
      "type":"list",
      "member":{"shape":"Order"}
    },
    "PageSize":{
      "type":"integer",
      "box":true,
      "max":1000,
      "min":1
    },
    "ParametersMap":{
      "type":"map",
      "key":{"shape":"KeyString"},
      "value":{"shape":"ParametersMapValue"}
    },
    "ParametersMapValue":{
      "type":"string",
      "max":512000
    },
    "Partition":{
      "type":"structure",
      "members":{
        "Values":{
          "shape":"ValueStringList",
          "documentation":"<p>The values of the partition.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the table in question is located.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table in question.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the partition was created.</p>"
        },
        "LastAccessTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time at which the partition was accessed.</p>"
        },
        "StorageDescriptor":{
          "shape":"StorageDescriptor",
          "documentation":"<p>Provides information about the physical location where the partition is stored.</p>"
        },
        "Parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>These key-value pairs define partition parameters.</p>"
        },
        "LastAnalyzedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time at which column statistics were computed for this partition.</p>"
        }
      },
      "documentation":"<p>Represents a slice of table data.</p>"
    },
    "PartitionError":{
      "type":"structure",
      "members":{
        "PartitionValues":{
          "shape":"ValueStringList",
          "documentation":"<p>The values that define the partition.</p>"
        },
        "ErrorDetail":{
          "shape":"ErrorDetail",
          "documentation":"<p>Details about the partition error.</p>"
        }
      },
      "documentation":"<p>Contains information about a partition error.</p>"
    },
    "PartitionErrors":{
      "type":"list",
      "member":{"shape":"PartitionError"}
    },
    "PartitionInput":{
      "type":"structure",
      "members":{
        "Values":{
          "shape":"ValueStringList",
          "documentation":"<p>The values of the partition.</p>"
        },
        "LastAccessTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time at which the partition was accessed.</p>"
        },
        "StorageDescriptor":{
          "shape":"StorageDescriptor",
          "documentation":"<p>Provides information about the physical location where the partition is stored.</p>"
        },
        "Parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>These key-value pairs define partition parameters.</p>"
        },
        "LastAnalyzedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time at which column statistics were computed for this partition.</p>"
        }
      },
      "documentation":"<p>The structure used to create and update a partion.</p>"
    },
    "PartitionInputList":{
      "type":"list",
      "member":{"shape":"PartitionInput"},
      "max":100,
      "min":0
    },
    "PartitionList":{
      "type":"list",
      "member":{"shape":"Partition"}
    },
    "PartitionValueList":{
      "type":"structure",
      "required":["Values"],
      "members":{
        "Values":{
          "shape":"ValueStringList",
          "documentation":"<p>The list of values.</p>"
        }
      },
      "documentation":"<p>Contains a list of values defining partitions.</p>"
    },
    "Path":{"type":"string"},
    "PathList":{
      "type":"list",
      "member":{"shape":"Path"}
    },
    "PhysicalConnectionRequirements":{
      "type":"structure",
      "members":{
        "SubnetId":{
          "shape":"NameString",
          "documentation":"<p>The subnet ID used by the connection.</p>"
        },
        "SecurityGroupIdList":{
          "shape":"SecurityGroupIdList",
          "documentation":"<p>The security group ID list used by the connection.</p>"
        },
        "AvailabilityZone":{
          "shape":"NameString",
          "documentation":"<p>The connection's availability zone. This field is redundant, since the specified subnet implies the availability zone to be used. The field must be populated now, but will be deprecated in the future.</p>"
        }
      },
      "documentation":"<p>Specifies the physical requirements for a connection.</p>"
    },
    "Predecessor":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition used by the predecessor job run.</p>"
        },
        "RunId":{
          "shape":"IdString",
          "documentation":"<p>The job-run ID of the predecessor job run.</p>"
        }
      },
      "documentation":"<p>A job run that was used in the predicate of a conditional trigger that triggered this job run.</p>"
    },
    "PredecessorList":{
      "type":"list",
      "member":{"shape":"Predecessor"}
    },
    "Predicate":{
      "type":"structure",
      "members":{
        "Logical":{
          "shape":"Logical",
          "documentation":"<p>Optional field if only one condition is listed. If multiple conditions are listed, then this field is required.</p>"
        },
        "Conditions":{
          "shape":"ConditionList",
          "documentation":"<p>A list of the conditions that determine when the trigger will fire.</p>"
        }
      },
      "documentation":"<p>Defines the predicate of the trigger, which determines when it fires.</p>"
    },
    "PredicateString":{
      "type":"string",
      "max":2048,
      "min":0,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "PrincipalType":{
      "type":"string",
      "enum":[
        "USER",
        "ROLE",
        "GROUP"
      ]
    },
    "PublicKeysList":{
      "type":"list",
      "member":{"shape":"GenericString"},
      "max":5
    },
    "PutDataCatalogEncryptionSettingsRequest":{
      "type":"structure",
      "required":["DataCatalogEncryptionSettings"],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog for which to set the security configuration. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DataCatalogEncryptionSettings":{
          "shape":"DataCatalogEncryptionSettings",
          "documentation":"<p>The security configuration to set.</p>"
        }
      }
    },
    "PutDataCatalogEncryptionSettingsResponse":{
      "type":"structure",
      "members":{
      }
    },
    "PythonScript":{"type":"string"},
    "ResetJobBookmarkRequest":{
      "type":"structure",
      "required":["JobName"],
      "members":{
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The name of the job in question.</p>"
        }
      }
    },
    "ResetJobBookmarkResponse":{
      "type":"structure",
      "members":{
        "JobBookmarkEntry":{
          "shape":"JobBookmarkEntry",
          "documentation":"<p>The reset bookmark entry.</p>"
        }
      }
    },
    "ResourceNumberLimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>A resource numerical limit was exceeded.</p>",
      "exception":true
    },
    "ResourceType":{
      "type":"string",
      "enum":[
        "JAR",
        "FILE",
        "ARCHIVE"
      ]
    },
    "ResourceUri":{
      "type":"structure",
      "members":{
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of the resource.</p>"
        },
        "Uri":{
          "shape":"URI",
          "documentation":"<p>The URI for accessing the resource.</p>"
        }
      },
      "documentation":"<p>URIs for function resources.</p>"
    },
    "ResourceUriList":{
      "type":"list",
      "member":{"shape":"ResourceUri"},
      "max":1000,
      "min":0
    },
    "Role":{"type":"string"},
    "RoleArn":{
      "type":"string",
      "pattern":"arn:aws:iam::\\d{12}:role/.*"
    },
    "RoleString":{"type":"string"},
    "RowTag":{"type":"string"},
    "S3Encryption":{
      "type":"structure",
      "members":{
        "S3EncryptionMode":{
          "shape":"S3EncryptionMode",
          "documentation":"<p>The encryption mode to use for S3 data.</p>"
        },
        "KmsKeyArn":{
          "shape":"KmsKeyArn",
          "documentation":"<p>The AWS ARN of the KMS key to be used to encrypt the data.</p>"
        }
      },
      "documentation":"<p>Specifies how S3 data should be encrypted.</p>"
    },
    "S3EncryptionList":{
      "type":"list",
      "member":{"shape":"S3Encryption"}
    },
    "S3EncryptionMode":{
      "type":"string",
      "enum":[
        "DISABLED",
        "SSE-KMS",
        "SSE-S3"
      ]
    },
    "S3Target":{
      "type":"structure",
      "members":{
        "Path":{
          "shape":"Path",
          "documentation":"<p>The path to the Amazon S3 target.</p>"
        },
        "Exclusions":{
          "shape":"PathList",
          "documentation":"<p>A list of glob patterns used to exclude from the crawl. For more information, see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/add-crawler.html\">Catalog Tables with a Crawler</a>.</p>"
        }
      },
      "documentation":"<p>Specifies a data store in Amazon S3.</p>"
    },
    "S3TargetList":{
      "type":"list",
      "member":{"shape":"S3Target"}
    },
    "ScalaCode":{"type":"string"},
    "Schedule":{
      "type":"structure",
      "members":{
        "ScheduleExpression":{
          "shape":"CronExpression",
          "documentation":"<p>A <code>cron</code> expression used to specify the schedule (see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html\">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p>"
        },
        "State":{
          "shape":"ScheduleState",
          "documentation":"<p>The state of the schedule.</p>"
        }
      },
      "documentation":"<p>A scheduling object using a <code>cron</code> statement to schedule an event.</p>"
    },
    "ScheduleState":{
      "type":"string",
      "enum":[
        "SCHEDULED",
        "NOT_SCHEDULED",
        "TRANSITIONING"
      ]
    },
    "SchedulerNotRunningException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The specified scheduler is not running.</p>",
      "exception":true
    },
    "SchedulerRunningException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The specified scheduler is already running.</p>",
      "exception":true
    },
    "SchedulerTransitioningException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>The specified scheduler is transitioning.</p>",
      "exception":true
    },
    "SchemaChangePolicy":{
      "type":"structure",
      "members":{
        "UpdateBehavior":{
          "shape":"UpdateBehavior",
          "documentation":"<p>The update behavior when the crawler finds a changed schema.</p>"
        },
        "DeleteBehavior":{
          "shape":"DeleteBehavior",
          "documentation":"<p>The deletion behavior when the crawler finds a deleted object.</p>"
        }
      },
      "documentation":"<p>Crawler policy for update and deletion behavior.</p>"
    },
    "SchemaPathString":{"type":"string"},
    "ScriptLocationString":{"type":"string"},
    "SecurityConfiguration":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the security configuration.</p>"
        },
        "CreatedTimeStamp":{
          "shape":"TimestampValue",
          "documentation":"<p>The time at which this security configuration was created.</p>"
        },
        "EncryptionConfiguration":{
          "shape":"EncryptionConfiguration",
          "documentation":"<p>The encryption configuration associated with this security configuration.</p>"
        }
      },
      "documentation":"<p>Specifies a security configuration.</p>"
    },
    "SecurityConfigurationList":{
      "type":"list",
      "member":{"shape":"SecurityConfiguration"}
    },
    "SecurityGroupIdList":{
      "type":"list",
      "member":{"shape":"NameString"},
      "max":50,
      "min":0
    },
    "Segment":{
      "type":"structure",
      "required":[
        "SegmentNumber",
        "TotalSegments"
      ],
      "members":{
        "SegmentNumber":{
          "shape":"NonNegativeInteger",
          "documentation":"<p>The zero-based index number of the this segment. For example, if the total number of segments is 4, SegmentNumber values will range from zero through three.</p>"
        },
        "TotalSegments":{
          "shape":"TotalSegmentsInteger",
          "documentation":"<p>The total numer of segments.</p>"
        }
      },
      "documentation":"<p>Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel.</p>"
    },
    "SerDeInfo":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the SerDe.</p>"
        },
        "SerializationLibrary":{
          "shape":"NameString",
          "documentation":"<p>Usually the class that implements the SerDe. An example is: <code>org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe</code>.</p>"
        },
        "Parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>These key-value pairs define initialization parameters for the SerDe.</p>"
        }
      },
      "documentation":"<p>Information about a serialization/deserialization program (SerDe) which serves as an extractor and loader.</p>"
    },
    "SkewedInfo":{
      "type":"structure",
      "members":{
        "SkewedColumnNames":{
          "shape":"NameStringList",
          "documentation":"<p>A list of names of columns that contain skewed values.</p>"
        },
        "SkewedColumnValues":{
          "shape":"ColumnValueStringList",
          "documentation":"<p>A list of values that appear so frequently as to be considered skewed.</p>"
        },
        "SkewedColumnValueLocationMaps":{
          "shape":"LocationMap",
          "documentation":"<p>A mapping of skewed values to the columns that contain them.</p>"
        }
      },
      "documentation":"<p>Specifies skewed values in a table. Skewed are ones that occur with very high frequency.</p>"
    },
    "StartCrawlerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the crawler to start.</p>"
        }
      }
    },
    "StartCrawlerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "StartCrawlerScheduleRequest":{
      "type":"structure",
      "required":["CrawlerName"],
      "members":{
        "CrawlerName":{
          "shape":"NameString",
          "documentation":"<p>Name of the crawler to schedule.</p>"
        }
      }
    },
    "StartCrawlerScheduleResponse":{
      "type":"structure",
      "members":{
      }
    },
    "StartJobRunRequest":{
      "type":"structure",
      "required":["JobName"],
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>The name of the job definition to use.</p>"
        },
        "JobRunId":{
          "shape":"IdString",
          "documentation":"<p>The ID of a previous JobRun to retry.</p>"
        },
        "Arguments":{
          "shape":"GenericMap",
          "documentation":"<p>The job arguments specifically for this run. They override the equivalent default arguments set for in the job definition itself.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own Job arguments, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html\">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href=\"http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html\">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>"
        },
        "AllocatedCapacity":{
          "shape":"IntegerValue",
          "documentation":"<p>The number of AWS Glue data processing units (DPUs) to allocate to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href=\"https://aws.amazon.com/glue/pricing/\">AWS Glue pricing page</a>.</p>"
        },
        "Timeout":{
          "shape":"Timeout",
          "documentation":"<p>The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>"
        },
        "NotificationProperty":{
          "shape":"NotificationProperty",
          "documentation":"<p>Specifies configuration properties of a job run notification.</p>"
        },
        "SecurityConfiguration":{
          "shape":"NameString",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used with this job run.</p>"
        }
      }
    },
    "StartJobRunResponse":{
      "type":"structure",
      "members":{
        "JobRunId":{
          "shape":"IdString",
          "documentation":"<p>The ID assigned to this job run.</p>"
        }
      }
    },
    "StartTriggerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger to start.</p>"
        }
      }
    },
    "StartTriggerResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger that was started.</p>"
        }
      }
    },
    "StopCrawlerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the crawler to stop.</p>"
        }
      }
    },
    "StopCrawlerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "StopCrawlerScheduleRequest":{
      "type":"structure",
      "required":["CrawlerName"],
      "members":{
        "CrawlerName":{
          "shape":"NameString",
          "documentation":"<p>Name of the crawler whose schedule state to set.</p>"
        }
      }
    },
    "StopCrawlerScheduleResponse":{
      "type":"structure",
      "members":{
      }
    },
    "StopTriggerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger to stop.</p>"
        }
      }
    },
    "StopTriggerResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger that was stopped.</p>"
        }
      }
    },
    "StorageDescriptor":{
      "type":"structure",
      "members":{
        "Columns":{
          "shape":"ColumnList",
          "documentation":"<p>A list of the <code>Columns</code> in the table.</p>"
        },
        "Location":{
          "shape":"LocationString",
          "documentation":"<p>The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.</p>"
        },
        "InputFormat":{
          "shape":"FormatString",
          "documentation":"<p>The input format: <code>SequenceFileInputFormat</code> (binary), or <code>TextInputFormat</code>, or a custom format.</p>"
        },
        "OutputFormat":{
          "shape":"FormatString",
          "documentation":"<p>The output format: <code>SequenceFileOutputFormat</code> (binary), or <code>IgnoreKeyTextOutputFormat</code>, or a custom format.</p>"
        },
        "Compressed":{
          "shape":"Boolean",
          "documentation":"<p>True if the data in the table is compressed, or False if not.</p>"
        },
        "NumberOfBuckets":{
          "shape":"Integer",
          "documentation":"<p>Must be specified if the table contains any dimension columns.</p>"
        },
        "SerdeInfo":{
          "shape":"SerDeInfo",
          "documentation":"<p>Serialization/deserialization (SerDe) information.</p>"
        },
        "BucketColumns":{
          "shape":"NameStringList",
          "documentation":"<p>A list of reducer grouping columns, clustering columns, and bucketing columns in the table.</p>"
        },
        "SortColumns":{
          "shape":"OrderList",
          "documentation":"<p>A list specifying the sort order of each bucket in the table.</p>"
        },
        "Parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>User-supplied properties in key-value form.</p>"
        },
        "SkewedInfo":{
          "shape":"SkewedInfo",
          "documentation":"<p>Information about values that appear very frequently in a column (skewed values).</p>"
        },
        "StoredAsSubDirectories":{
          "shape":"Boolean",
          "documentation":"<p>True if the table data is stored in subdirectories, or False if not.</p>"
        }
      },
      "documentation":"<p>Describes the physical storage of table data.</p>"
    },
    "StringList":{
      "type":"list",
      "member":{"shape":"GenericString"}
    },
    "Table":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the table. For Hive compatibility, this must be entirely lowercase.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the table.</p>"
        },
        "Owner":{
          "shape":"NameString",
          "documentation":"<p>Owner of the table.</p>"
        },
        "CreateTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time when the table definition was created in the Data Catalog.</p>"
        },
        "UpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>Last time the table was updated.</p>"
        },
        "LastAccessTime":{
          "shape":"Timestamp",
          "documentation":"<p>Last time the table was accessed. This is usually taken from HDFS, and may not be reliable.</p>"
        },
        "LastAnalyzedTime":{
          "shape":"Timestamp",
          "documentation":"<p>Last time column statistics were computed for this table.</p>"
        },
        "Retention":{
          "shape":"NonNegativeInteger",
          "documentation":"<p>Retention time for this table.</p>"
        },
        "StorageDescriptor":{
          "shape":"StorageDescriptor",
          "documentation":"<p>A storage descriptor containing information about the physical storage of this table.</p>"
        },
        "PartitionKeys":{
          "shape":"ColumnList",
          "documentation":"<p>A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.</p>"
        },
        "ViewOriginalText":{
          "shape":"ViewTextString",
          "documentation":"<p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>"
        },
        "ViewExpandedText":{
          "shape":"ViewTextString",
          "documentation":"<p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>"
        },
        "TableType":{
          "shape":"TableTypeString",
          "documentation":"<p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>"
        },
        "Parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>These key-value pairs define properties associated with the table.</p>"
        },
        "CreatedBy":{
          "shape":"NameString",
          "documentation":"<p>Person or entity who created the table.</p>"
        }
      },
      "documentation":"<p>Represents a collection of related data organized in columns and rows.</p>"
    },
    "TableError":{
      "type":"structure",
      "members":{
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>Name of the table. For Hive compatibility, this must be entirely lowercase.</p>"
        },
        "ErrorDetail":{
          "shape":"ErrorDetail",
          "documentation":"<p>Detail about the error.</p>"
        }
      },
      "documentation":"<p>An error record for table operations.</p>"
    },
    "TableErrors":{
      "type":"list",
      "member":{"shape":"TableError"}
    },
    "TableInput":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the table. For Hive compatibility, this is folded to lowercase when it is stored.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>Description of the table.</p>"
        },
        "Owner":{
          "shape":"NameString",
          "documentation":"<p>Owner of the table.</p>"
        },
        "LastAccessTime":{
          "shape":"Timestamp",
          "documentation":"<p>Last time the table was accessed.</p>"
        },
        "LastAnalyzedTime":{
          "shape":"Timestamp",
          "documentation":"<p>Last time column statistics were computed for this table.</p>"
        },
        "Retention":{
          "shape":"NonNegativeInteger",
          "documentation":"<p>Retention time for this table.</p>"
        },
        "StorageDescriptor":{
          "shape":"StorageDescriptor",
          "documentation":"<p>A storage descriptor containing information about the physical storage of this table.</p>"
        },
        "PartitionKeys":{
          "shape":"ColumnList",
          "documentation":"<p>A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.</p>"
        },
        "ViewOriginalText":{
          "shape":"ViewTextString",
          "documentation":"<p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>"
        },
        "ViewExpandedText":{
          "shape":"ViewTextString",
          "documentation":"<p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>"
        },
        "TableType":{
          "shape":"TableTypeString",
          "documentation":"<p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>"
        },
        "Parameters":{
          "shape":"ParametersMap",
          "documentation":"<p>These key-value pairs define properties associated with the table.</p>"
        }
      },
      "documentation":"<p>Structure used to create or update the table.</p>"
    },
    "TableList":{
      "type":"list",
      "member":{"shape":"Table"}
    },
    "TableName":{"type":"string"},
    "TablePrefix":{
      "type":"string",
      "max":128,
      "min":0
    },
    "TableTypeString":{
      "type":"string",
      "max":255
    },
    "TableVersion":{
      "type":"structure",
      "members":{
        "Table":{
          "shape":"Table",
          "documentation":"<p>The table in question</p>"
        },
        "VersionId":{
          "shape":"VersionString",
          "documentation":"<p>The ID value that identifies this table version.</p>"
        }
      },
      "documentation":"<p>Specifies a version of a table.</p>"
    },
    "TableVersionError":{
      "type":"structure",
      "members":{
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table in question.</p>"
        },
        "VersionId":{
          "shape":"VersionString",
          "documentation":"<p>The ID value of the version in question.</p>"
        },
        "ErrorDetail":{
          "shape":"ErrorDetail",
          "documentation":"<p>Detail about the error.</p>"
        }
      },
      "documentation":"<p>An error record for table-version operations.</p>"
    },
    "TableVersionErrors":{
      "type":"list",
      "member":{"shape":"TableVersionError"}
    },
    "Timeout":{
      "type":"integer",
      "box":true,
      "min":1
    },
    "Timestamp":{"type":"timestamp"},
    "TimestampValue":{"type":"timestamp"},
    "Token":{"type":"string"},
    "TotalSegmentsInteger":{
      "type":"integer",
      "max":10,
      "min":1
    },
    "Trigger":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the trigger.</p>"
        },
        "Id":{
          "shape":"IdString",
          "documentation":"<p>Reserved for future use.</p>"
        },
        "Type":{
          "shape":"TriggerType",
          "documentation":"<p>The type of trigger that this is.</p>"
        },
        "State":{
          "shape":"TriggerState",
          "documentation":"<p>The current state of the trigger.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>A description of this trigger.</p>"
        },
        "Schedule":{
          "shape":"GenericString",
          "documentation":"<p>A <code>cron</code> expression used to specify the schedule (see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html\">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p>"
        },
        "Actions":{
          "shape":"ActionList",
          "documentation":"<p>The actions initiated by this trigger.</p>"
        },
        "Predicate":{
          "shape":"Predicate",
          "documentation":"<p>The predicate of this trigger, which defines when it will fire.</p>"
        }
      },
      "documentation":"<p>Information about a specific trigger.</p>"
    },
    "TriggerList":{
      "type":"list",
      "member":{"shape":"Trigger"}
    },
    "TriggerState":{
      "type":"string",
      "enum":[
        "CREATING",
        "CREATED",
        "ACTIVATING",
        "ACTIVATED",
        "DEACTIVATING",
        "DEACTIVATED",
        "DELETING",
        "UPDATING"
      ]
    },
    "TriggerType":{
      "type":"string",
      "enum":[
        "SCHEDULED",
        "CONDITIONAL",
        "ON_DEMAND"
      ]
    },
    "TriggerUpdate":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Reserved for future use.</p>"
        },
        "Description":{
          "shape":"DescriptionString",
          "documentation":"<p>A description of this trigger.</p>"
        },
        "Schedule":{
          "shape":"GenericString",
          "documentation":"<p>A <code>cron</code> expression used to specify the schedule (see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html\">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p>"
        },
        "Actions":{
          "shape":"ActionList",
          "documentation":"<p>The actions initiated by this trigger.</p>"
        },
        "Predicate":{
          "shape":"Predicate",
          "documentation":"<p>The predicate of this trigger, which defines when it will fire.</p>"
        }
      },
      "documentation":"<p>A structure used to provide information used to update a trigger. This object will update the the previous trigger definition by overwriting it completely.</p>"
    },
    "URI":{
      "type":"string",
      "max":1024,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*"
    },
    "UpdateBehavior":{
      "type":"string",
      "enum":[
        "LOG",
        "UPDATE_IN_DATABASE"
      ]
    },
    "UpdateClassifierRequest":{
      "type":"structure",
      "members":{
        "GrokClassifier":{
          "shape":"UpdateGrokClassifierRequest",
          "documentation":"<p>A <code>GrokClassifier</code> object with updated fields.</p>"
        },
        "XMLClassifier":{
          "shape":"UpdateXMLClassifierRequest",
          "documentation":"<p>An <code>XMLClassifier</code> object with updated fields.</p>"
        },
        "JsonClassifier":{
          "shape":"UpdateJsonClassifierRequest",
          "documentation":"<p>A <code>JsonClassifier</code> object with updated fields.</p>"
        }
      }
    },
    "UpdateClassifierResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateConnectionRequest":{
      "type":"structure",
      "required":[
        "Name",
        "ConnectionInput"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which the connection resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the connection definition to update.</p>"
        },
        "ConnectionInput":{
          "shape":"ConnectionInput",
          "documentation":"<p>A <code>ConnectionInput</code> object that redefines the connection in question.</p>"
        }
      }
    },
    "UpdateConnectionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateCrawlerRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>Name of the new crawler.</p>"
        },
        "Role":{
          "shape":"Role",
          "documentation":"<p>The IAM role (or ARN of an IAM role) used by the new crawler to access customer resources.</p>"
        },
        "DatabaseName":{
          "shape":"DatabaseName",
          "documentation":"<p>The AWS Glue database where results are stored, such as: <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>"
        },
        "Description":{
          "shape":"DescriptionStringRemovable",
          "documentation":"<p>A description of the new crawler.</p>"
        },
        "Targets":{
          "shape":"CrawlerTargets",
          "documentation":"<p>A list of targets to crawl.</p>"
        },
        "Schedule":{
          "shape":"CronExpression",
          "documentation":"<p>A <code>cron</code> expression used to specify the schedule (see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html\">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p>"
        },
        "Classifiers":{
          "shape":"ClassifierNameList",
          "documentation":"<p>A list of custom classifiers that the user has registered. By default, all built-in classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.</p>"
        },
        "TablePrefix":{
          "shape":"TablePrefix",
          "documentation":"<p>The table prefix used for catalog tables that are created.</p>"
        },
        "SchemaChangePolicy":{
          "shape":"SchemaChangePolicy",
          "documentation":"<p>Policy for the crawler's update and deletion behavior.</p>"
        },
        "Configuration":{
          "shape":"CrawlerConfiguration",
          "documentation":"<p>Crawler configuration information. This versioned JSON string allows users to specify aspects of a Crawler's behavior.</p> <p>You can use this field to force partitions to inherit metadata such as classification, input format, output format, serde information, and schema from their parent table, rather than detect this information separately for each partition. Use the following JSON string to specify that behavior:</p> <p>Example: <code>'{ \"Version\": 1.0, \"CrawlerOutput\": { \"Partitions\": { \"AddOrUpdateBehavior\": \"InheritFromTable\" } } }'</code> </p>"
        },
        "CrawlerSecurityConfiguration":{
          "shape":"CrawlerSecurityConfiguration",
          "documentation":"<p>The name of the SecurityConfiguration structure to be used by this Crawler.</p>"
        }
      }
    },
    "UpdateCrawlerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateCrawlerScheduleRequest":{
      "type":"structure",
      "required":["CrawlerName"],
      "members":{
        "CrawlerName":{
          "shape":"NameString",
          "documentation":"<p>Name of the crawler whose schedule to update.</p>"
        },
        "Schedule":{
          "shape":"CronExpression",
          "documentation":"<p>The updated <code>cron</code> expression used to specify the schedule (see <a href=\"http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html\">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p>"
        }
      }
    },
    "UpdateCrawlerScheduleResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateDatabaseRequest":{
      "type":"structure",
      "required":[
        "Name",
        "DatabaseInput"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog in which the metadata database resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the database to update in the catalog. For Hive compatibility, this is folded to lowercase.</p>"
        },
        "DatabaseInput":{
          "shape":"DatabaseInput",
          "documentation":"<p>A <code>DatabaseInput</code> object specifying the new definition of the metadata database in the catalog.</p>"
        }
      }
    },
    "UpdateDatabaseResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateDevEndpointRequest":{
      "type":"structure",
      "required":["EndpointName"],
      "members":{
        "EndpointName":{
          "shape":"GenericString",
          "documentation":"<p>The name of the DevEndpoint to be updated.</p>"
        },
        "PublicKey":{
          "shape":"GenericString",
          "documentation":"<p>The public key for the DevEndpoint to use.</p>"
        },
        "AddPublicKeys":{
          "shape":"PublicKeysList",
          "documentation":"<p>The list of public keys for the DevEndpoint to use.</p>"
        },
        "DeletePublicKeys":{
          "shape":"PublicKeysList",
          "documentation":"<p>The list of public keys to be deleted from the DevEndpoint.</p>"
        },
        "CustomLibraries":{
          "shape":"DevEndpointCustomLibraries",
          "documentation":"<p>Custom Python or Java libraries to be loaded in the DevEndpoint.</p>"
        },
        "UpdateEtlLibraries":{
          "shape":"BooleanValue",
          "documentation":"<p>True if the list of custom libraries to be loaded in the development endpoint needs to be updated, or False otherwise.</p>"
        }
      }
    },
    "UpdateDevEndpointResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateGrokClassifierRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the <code>GrokClassifier</code>.</p>"
        },
        "Classification":{
          "shape":"Classification",
          "documentation":"<p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.</p>"
        },
        "GrokPattern":{
          "shape":"GrokPattern",
          "documentation":"<p>The grok pattern used by this classifier.</p>"
        },
        "CustomPatterns":{
          "shape":"CustomPatterns",
          "documentation":"<p>Optional custom grok patterns used by this classifier.</p>"
        }
      },
      "documentation":"<p>Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.</p>"
    },
    "UpdateJobRequest":{
      "type":"structure",
      "required":[
        "JobName",
        "JobUpdate"
      ],
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>Name of the job definition to update.</p>"
        },
        "JobUpdate":{
          "shape":"JobUpdate",
          "documentation":"<p>Specifies the values with which to update the job definition.</p>"
        }
      }
    },
    "UpdateJobResponse":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"NameString",
          "documentation":"<p>Returns the name of the updated job definition.</p>"
        }
      }
    },
    "UpdateJsonClassifierRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the classifier.</p>"
        },
        "JsonPath":{
          "shape":"JsonPath",
          "documentation":"<p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS Glue supports a subset of JsonPath, as described in <a href=\"https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json\">Writing JsonPath Custom Classifiers</a>.</p>"
        }
      },
      "documentation":"<p>Specifies a JSON classifier to be updated.</p>"
    },
    "UpdatePartitionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableName",
        "PartitionValueList",
        "PartitionInput"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the partition to be updated resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database in which the table in question resides.</p>"
        },
        "TableName":{
          "shape":"NameString",
          "documentation":"<p>The name of the table where the partition to be updated is located.</p>"
        },
        "PartitionValueList":{
          "shape":"BoundedPartitionValueList",
          "documentation":"<p>A list of the values defining the partition.</p>"
        },
        "PartitionInput":{
          "shape":"PartitionInput",
          "documentation":"<p>The new partition object to which to update the partition.</p>"
        }
      }
    },
    "UpdatePartitionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateTableRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "TableInput"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase.</p>"
        },
        "TableInput":{
          "shape":"TableInput",
          "documentation":"<p>An updated <code>TableInput</code> object to define the metadata table in the catalog.</p>"
        },
        "SkipArchive":{
          "shape":"BooleanNullable",
          "documentation":"<p>By default, <code>UpdateTable</code> always creates an archived version of the table before updating it. If <code>skipArchive</code> is set to true, however, <code>UpdateTable</code> does not create the archived version.</p>"
        }
      }
    },
    "UpdateTableResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateTriggerRequest":{
      "type":"structure",
      "required":[
        "Name",
        "TriggerUpdate"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the trigger to update.</p>"
        },
        "TriggerUpdate":{
          "shape":"TriggerUpdate",
          "documentation":"<p>The new values with which to update the trigger.</p>"
        }
      }
    },
    "UpdateTriggerResponse":{
      "type":"structure",
      "members":{
        "Trigger":{
          "shape":"Trigger",
          "documentation":"<p>The resulting trigger definition.</p>"
        }
      }
    },
    "UpdateUserDefinedFunctionRequest":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "FunctionName",
        "FunctionInput"
      ],
      "members":{
        "CatalogId":{
          "shape":"CatalogIdString",
          "documentation":"<p>The ID of the Data Catalog where the function to be updated is located. If none is supplied, the AWS account ID is used by default.</p>"
        },
        "DatabaseName":{
          "shape":"NameString",
          "documentation":"<p>The name of the catalog database where the function to be updated is located.</p>"
        },
        "FunctionName":{
          "shape":"NameString",
          "documentation":"<p>The name of the function.</p>"
        },
        "FunctionInput":{
          "shape":"UserDefinedFunctionInput",
          "documentation":"<p>A <code>FunctionInput</code> object that re-defines the function in the Data Catalog.</p>"
        }
      }
    },
    "UpdateUserDefinedFunctionResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateXMLClassifierRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the classifier.</p>"
        },
        "Classification":{
          "shape":"Classification",
          "documentation":"<p>An identifier of the data format that the classifier matches.</p>"
        },
        "RowTag":{
          "shape":"RowTag",
          "documentation":"<p>The XML tag designating the element that contains each record in an XML document being parsed. Note that this cannot identify a self-closing element (closed by <code>/&gt;</code>). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <code>&lt;row item_a=\"A\" item_b=\"B\"&gt;&lt;/row&gt;</code> is okay, but <code>&lt;row item_a=\"A\" item_b=\"B\" /&gt;</code> is not).</p>"
        }
      },
      "documentation":"<p>Specifies an XML classifier to be updated.</p>"
    },
    "UriString":{"type":"string"},
    "UserDefinedFunction":{
      "type":"structure",
      "members":{
        "FunctionName":{
          "shape":"NameString",
          "documentation":"<p>The name of the function.</p>"
        },
        "ClassName":{
          "shape":"NameString",
          "documentation":"<p>The Java class that contains the function code.</p>"
        },
        "OwnerName":{
          "shape":"NameString",
          "documentation":"<p>The owner of the function.</p>"
        },
        "OwnerType":{
          "shape":"PrincipalType",
          "documentation":"<p>The owner type.</p>"
        },
        "CreateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the function was created.</p>"
        },
        "ResourceUris":{
          "shape":"ResourceUriList",
          "documentation":"<p>The resource URIs for the function.</p>"
        }
      },
      "documentation":"<p>Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.</p>"
    },
    "UserDefinedFunctionInput":{
      "type":"structure",
      "members":{
        "FunctionName":{
          "shape":"NameString",
          "documentation":"<p>The name of the function.</p>"
        },
        "ClassName":{
          "shape":"NameString",
          "documentation":"<p>The Java class that contains the function code.</p>"
        },
        "OwnerName":{
          "shape":"NameString",
          "documentation":"<p>The owner of the function.</p>"
        },
        "OwnerType":{
          "shape":"PrincipalType",
          "documentation":"<p>The owner type.</p>"
        },
        "ResourceUris":{
          "shape":"ResourceUriList",
          "documentation":"<p>The resource URIs for the function.</p>"
        }
      },
      "documentation":"<p>A structure used to create or updata a user-defined function.</p>"
    },
    "UserDefinedFunctionList":{
      "type":"list",
      "member":{"shape":"UserDefinedFunction"}
    },
    "ValidationException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>A value could not be validated.</p>",
      "exception":true
    },
    "ValueString":{
      "type":"string",
      "max":1024
    },
    "ValueStringList":{
      "type":"list",
      "member":{"shape":"ValueString"}
    },
    "VersionId":{"type":"long"},
    "VersionMismatchException":{
      "type":"structure",
      "members":{
        "Message":{
          "shape":"MessageString",
          "documentation":"<p>A message describing the problem.</p>"
        }
      },
      "documentation":"<p>There was a version conflict.</p>",
      "exception":true
    },
    "VersionString":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*"
    },
    "ViewTextString":{
      "type":"string",
      "max":409600
    },
    "XMLClassifier":{
      "type":"structure",
      "required":[
        "Name",
        "Classification"
      ],
      "members":{
        "Name":{
          "shape":"NameString",
          "documentation":"<p>The name of the classifier.</p>"
        },
        "Classification":{
          "shape":"Classification",
          "documentation":"<p>An identifier of the data format that the classifier matches.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time this classifier was registered.</p>"
        },
        "LastUpdated":{
          "shape":"Timestamp",
          "documentation":"<p>The time this classifier was last updated.</p>"
        },
        "Version":{
          "shape":"VersionId",
          "documentation":"<p>The version of this classifier.</p>"
        },
        "RowTag":{
          "shape":"RowTag",
          "documentation":"<p>The XML tag designating the element that contains each record in an XML document being parsed. Note that this cannot identify a self-closing element (closed by <code>/&gt;</code>). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <code>&lt;row item_a=\"A\" item_b=\"B\"&gt;&lt;/row&gt;</code> is okay, but <code>&lt;row item_a=\"A\" item_b=\"B\" /&gt;</code> is not).</p>"
        }
      },
      "documentation":"<p>A classifier for <code>XML</code> content.</p>"
    }
  },
  "documentation":"<fullname>AWS Glue</fullname> <p>Defines the public endpoint for the AWS Glue service.</p>"
}
