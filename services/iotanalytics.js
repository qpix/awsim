awsim['iotanalytics'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-11-27",
    "endpointPrefix":"iotanalytics",
    "protocol":"rest-json",
    "serviceFullName":"AWS IoT Analytics",
    "serviceId":"IoTAnalytics",
    "signatureVersion":"v4",
    "signingName":"iotanalytics",
    "uid":"iotanalytics-2017-11-27"
  },
  "operations":{
    "BatchPutMessage":{
      "name":"BatchPutMessage",
      "http":{
        "method":"POST",
        "requestUri":"/messages/batch",
        "responseCode":200
      },
      "input":{"shape":"BatchPutMessageRequest"},
      "output":{"shape":"BatchPutMessageResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Sends messages to a channel.</p>"
    },
    "CancelPipelineReprocessing":{
      "name":"CancelPipelineReprocessing",
      "http":{
        "method":"DELETE",
        "requestUri":"/pipelines/{pipelineName}/reprocessing/{reprocessingId}"
      },
      "input":{"shape":"CancelPipelineReprocessingRequest"},
      "output":{"shape":"CancelPipelineReprocessingResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Cancels the reprocessing of data through the pipeline.</p>"
    },
    "CreateChannel":{
      "name":"CreateChannel",
      "http":{
        "method":"POST",
        "requestUri":"/channels",
        "responseCode":201
      },
      "input":{"shape":"CreateChannelRequest"},
      "output":{"shape":"CreateChannelResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.</p>"
    },
    "CreateDataset":{
      "name":"CreateDataset",
      "http":{
        "method":"POST",
        "requestUri":"/datasets",
        "responseCode":201
      },
      "input":{"shape":"CreateDatasetRequest"},
      "output":{"shape":"CreateDatasetResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a data set. A data set stores data retrieved from a data store by applying a \"queryAction\" (a SQL query) or a \"containerAction\" (executing a containerized application). This operation creates the skeleton of a data set. The data set can be populated manually by calling \"CreateDatasetContent\" or automatically according to a \"trigger\" you specify.</p>"
    },
    "CreateDatasetContent":{
      "name":"CreateDatasetContent",
      "http":{
        "method":"POST",
        "requestUri":"/datasets/{datasetName}/content"
      },
      "input":{"shape":"CreateDatasetContentRequest"},
      "output":{"shape":"CreateDatasetContentResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Creates the content of a data set by applying a SQL action.</p>"
    },
    "CreateDatastore":{
      "name":"CreateDatastore",
      "http":{
        "method":"POST",
        "requestUri":"/datastores",
        "responseCode":201
      },
      "input":{"shape":"CreateDatastoreRequest"},
      "output":{"shape":"CreateDatastoreResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a data store, which is a repository for messages.</p>"
    },
    "CreatePipeline":{
      "name":"CreatePipeline",
      "http":{
        "method":"POST",
        "requestUri":"/pipelines",
        "responseCode":201
      },
      "input":{"shape":"CreatePipelineRequest"},
      "output":{"shape":"CreatePipelineResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a pipeline. A pipeline consumes messages from one or more channels and allows you to process the messages before storing them in a data store.</p>"
    },
    "DeleteChannel":{
      "name":"DeleteChannel",
      "http":{
        "method":"DELETE",
        "requestUri":"/channels/{channelName}",
        "responseCode":204
      },
      "input":{"shape":"DeleteChannelRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Deletes the specified channel.</p>"
    },
    "DeleteDataset":{
      "name":"DeleteDataset",
      "http":{
        "method":"DELETE",
        "requestUri":"/datasets/{datasetName}",
        "responseCode":204
      },
      "input":{"shape":"DeleteDatasetRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Deletes the specified data set.</p> <p>You do not have to delete the content of the data set before you perform this operation.</p>"
    },
    "DeleteDatasetContent":{
      "name":"DeleteDatasetContent",
      "http":{
        "method":"DELETE",
        "requestUri":"/datasets/{datasetName}/content",
        "responseCode":204
      },
      "input":{"shape":"DeleteDatasetContentRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Deletes the content of the specified data set.</p>"
    },
    "DeleteDatastore":{
      "name":"DeleteDatastore",
      "http":{
        "method":"DELETE",
        "requestUri":"/datastores/{datastoreName}",
        "responseCode":204
      },
      "input":{"shape":"DeleteDatastoreRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Deletes the specified data store.</p>"
    },
    "DeletePipeline":{
      "name":"DeletePipeline",
      "http":{
        "method":"DELETE",
        "requestUri":"/pipelines/{pipelineName}",
        "responseCode":204
      },
      "input":{"shape":"DeletePipelineRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Deletes the specified pipeline.</p>"
    },
    "DescribeChannel":{
      "name":"DescribeChannel",
      "http":{
        "method":"GET",
        "requestUri":"/channels/{channelName}"
      },
      "input":{"shape":"DescribeChannelRequest"},
      "output":{"shape":"DescribeChannelResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves information about a channel.</p>"
    },
    "DescribeDataset":{
      "name":"DescribeDataset",
      "http":{
        "method":"GET",
        "requestUri":"/datasets/{datasetName}"
      },
      "input":{"shape":"DescribeDatasetRequest"},
      "output":{"shape":"DescribeDatasetResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves information about a data set.</p>"
    },
    "DescribeDatastore":{
      "name":"DescribeDatastore",
      "http":{
        "method":"GET",
        "requestUri":"/datastores/{datastoreName}"
      },
      "input":{"shape":"DescribeDatastoreRequest"},
      "output":{"shape":"DescribeDatastoreResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves information about a data store.</p>"
    },
    "DescribeLoggingOptions":{
      "name":"DescribeLoggingOptions",
      "http":{
        "method":"GET",
        "requestUri":"/logging"
      },
      "input":{"shape":"DescribeLoggingOptionsRequest"},
      "output":{"shape":"DescribeLoggingOptionsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves the current settings of the AWS IoT Analytics logging options.</p>"
    },
    "DescribePipeline":{
      "name":"DescribePipeline",
      "http":{
        "method":"GET",
        "requestUri":"/pipelines/{pipelineName}"
      },
      "input":{"shape":"DescribePipelineRequest"},
      "output":{"shape":"DescribePipelineResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves information about a pipeline.</p>"
    },
    "GetDatasetContent":{
      "name":"GetDatasetContent",
      "http":{
        "method":"GET",
        "requestUri":"/datasets/{datasetName}/content"
      },
      "input":{"shape":"GetDatasetContentRequest"},
      "output":{"shape":"GetDatasetContentResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves the contents of a data set as pre-signed URIs.</p>"
    },
    "ListChannels":{
      "name":"ListChannels",
      "http":{
        "method":"GET",
        "requestUri":"/channels"
      },
      "input":{"shape":"ListChannelsRequest"},
      "output":{"shape":"ListChannelsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves a list of channels.</p>"
    },
    "ListDatasetContents":{
      "name":"ListDatasetContents",
      "http":{
        "method":"GET",
        "requestUri":"/datasets/{datasetName}/contents"
      },
      "input":{"shape":"ListDatasetContentsRequest"},
      "output":{"shape":"ListDatasetContentsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists information about data set contents that have been created.</p>"
    },
    "ListDatasets":{
      "name":"ListDatasets",
      "http":{
        "method":"GET",
        "requestUri":"/datasets"
      },
      "input":{"shape":"ListDatasetsRequest"},
      "output":{"shape":"ListDatasetsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves information about data sets.</p>"
    },
    "ListDatastores":{
      "name":"ListDatastores",
      "http":{
        "method":"GET",
        "requestUri":"/datastores"
      },
      "input":{"shape":"ListDatastoresRequest"},
      "output":{"shape":"ListDatastoresResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves a list of data stores.</p>"
    },
    "ListPipelines":{
      "name":"ListPipelines",
      "http":{
        "method":"GET",
        "requestUri":"/pipelines"
      },
      "input":{"shape":"ListPipelinesRequest"},
      "output":{"shape":"ListPipelinesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves a list of pipelines.</p>"
    },
    "ListTagsForResource":{
      "name":"ListTagsForResource",
      "http":{
        "method":"GET",
        "requestUri":"/tags"
      },
      "input":{"shape":"ListTagsForResourceRequest"},
      "output":{"shape":"ListTagsForResourceResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists the tags (metadata) which you have assigned to the resource.</p>"
    },
    "PutLoggingOptions":{
      "name":"PutLoggingOptions",
      "http":{
        "method":"PUT",
        "requestUri":"/logging"
      },
      "input":{"shape":"PutLoggingOptionsRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Sets or updates the AWS IoT Analytics logging options.</p> <p>Note that if you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to 5 minutes for that change to take effect. </p>"
    },
    "RunPipelineActivity":{
      "name":"RunPipelineActivity",
      "http":{
        "method":"POST",
        "requestUri":"/pipelineactivities/run"
      },
      "input":{"shape":"RunPipelineActivityRequest"},
      "output":{"shape":"RunPipelineActivityResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Simulates the results of running a pipeline activity on a message payload.</p>"
    },
    "SampleChannelData":{
      "name":"SampleChannelData",
      "http":{
        "method":"GET",
        "requestUri":"/channels/{channelName}/sample"
      },
      "input":{"shape":"SampleChannelDataRequest"},
      "output":{"shape":"SampleChannelDataResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.</p>"
    },
    "StartPipelineReprocessing":{
      "name":"StartPipelineReprocessing",
      "http":{
        "method":"POST",
        "requestUri":"/pipelines/{pipelineName}/reprocessing"
      },
      "input":{"shape":"StartPipelineReprocessingRequest"},
      "output":{"shape":"StartPipelineReprocessingResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceAlreadyExistsException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Starts the reprocessing of raw message data through the pipeline.</p>"
    },
    "TagResource":{
      "name":"TagResource",
      "http":{
        "method":"POST",
        "requestUri":"/tags",
        "responseCode":204
      },
      "input":{"shape":"TagResourceRequest"},
      "output":{"shape":"TagResourceResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p>"
    },
    "UntagResource":{
      "name":"UntagResource",
      "http":{
        "method":"DELETE",
        "requestUri":"/tags",
        "responseCode":204
      },
      "input":{"shape":"UntagResourceRequest"},
      "output":{"shape":"UntagResourceResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Removes the given tags (metadata) from the resource.</p>"
    },
    "UpdateChannel":{
      "name":"UpdateChannel",
      "http":{
        "method":"PUT",
        "requestUri":"/channels/{channelName}"
      },
      "input":{"shape":"UpdateChannelRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Updates the settings of a channel.</p>"
    },
    "UpdateDataset":{
      "name":"UpdateDataset",
      "http":{
        "method":"PUT",
        "requestUri":"/datasets/{datasetName}"
      },
      "input":{"shape":"UpdateDatasetRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Updates the settings of a data set.</p>"
    },
    "UpdateDatastore":{
      "name":"UpdateDatastore",
      "http":{
        "method":"PUT",
        "requestUri":"/datastores/{datastoreName}"
      },
      "input":{"shape":"UpdateDatastoreRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"}
      ],
      "documentation":"<p>Updates the settings of a data store.</p>"
    },
    "UpdatePipeline":{
      "name":"UpdatePipeline",
      "http":{
        "method":"PUT",
        "requestUri":"/pipelines/{pipelineName}"
      },
      "input":{"shape":"UpdatePipelineRequest"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InternalFailureException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"ThrottlingException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Updates the settings of a pipeline.</p>"
    }
  },
  "shapes":{
    "ActivityBatchSize":{
      "type":"integer",
      "max":1000,
      "min":1
    },
    "ActivityName":{
      "type":"string",
      "max":128,
      "min":1
    },
    "AddAttributesActivity":{
      "type":"structure",
      "required":[
        "name",
        "attributes"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'addAttributes' activity.</p>"
        },
        "attributes":{
          "shape":"AttributeNameMapping",
          "documentation":"<p>A list of 1-50 \"AttributeNameMapping\" objects that map an existing attribute to a new attribute.</p> <note> <p>The existing attributes remain in the message, so if you want to remove the originals, use \"RemoveAttributeActivity\".</p> </note>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>An activity that adds other attributes based on existing attributes in the message.</p>"
    },
    "AttributeName":{
      "type":"string",
      "max":256,
      "min":1
    },
    "AttributeNameMapping":{
      "type":"map",
      "key":{"shape":"AttributeName"},
      "value":{"shape":"AttributeName"},
      "max":50,
      "min":1
    },
    "AttributeNames":{
      "type":"list",
      "member":{"shape":"AttributeName"},
      "max":50,
      "min":1
    },
    "BatchPutMessageErrorEntries":{
      "type":"list",
      "member":{"shape":"BatchPutMessageErrorEntry"}
    },
    "BatchPutMessageErrorEntry":{
      "type":"structure",
      "members":{
        "messageId":{
          "shape":"MessageId",
          "documentation":"<p>The ID of the message that caused the error. (See the value corresponding to the \"messageId\" key in the message object.)</p>"
        },
        "errorCode":{
          "shape":"ErrorCode",
          "documentation":"<p>The code associated with the error.</p>"
        },
        "errorMessage":{
          "shape":"ErrorMessage",
          "documentation":"<p>The message associated with the error.</p>"
        }
      },
      "documentation":"<p>Contains informations about errors.</p>"
    },
    "BatchPutMessageRequest":{
      "type":"structure",
      "required":[
        "channelName",
        "messages"
      ],
      "members":{
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel where the messages are sent.</p>"
        },
        "messages":{
          "shape":"Messages",
          "documentation":"<p>The list of messages to be sent. Each message has format: '{ \"messageId\": \"string\", \"payload\": \"string\"}'.</p>"
        }
      }
    },
    "BatchPutMessageResponse":{
      "type":"structure",
      "members":{
        "batchPutMessageErrorEntries":{
          "shape":"BatchPutMessageErrorEntries",
          "documentation":"<p>A list of any errors encountered when sending the messages to the channel.</p>"
        }
      }
    },
    "CancelPipelineReprocessingRequest":{
      "type":"structure",
      "required":[
        "pipelineName",
        "reprocessingId"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of pipeline for which data reprocessing is canceled.</p>",
          "location":"uri",
          "locationName":"pipelineName"
        },
        "reprocessingId":{
          "shape":"ReprocessingId",
          "documentation":"<p>The ID of the reprocessing task (returned by \"StartPipelineReprocessing\").</p>",
          "location":"uri",
          "locationName":"reprocessingId"
        }
      }
    },
    "CancelPipelineReprocessingResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Channel":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel.</p>"
        },
        "arn":{
          "shape":"ChannelArn",
          "documentation":"<p>The ARN of the channel.</p>"
        },
        "status":{
          "shape":"ChannelStatus",
          "documentation":"<p>The status of the channel.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the channel.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the channel was created.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the channel was last updated.</p>"
        }
      },
      "documentation":"<p>A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.</p>"
    },
    "ChannelActivity":{
      "type":"structure",
      "required":[
        "name",
        "channelName"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'channel' activity.</p>"
        },
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel from which the messages are processed.</p>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>The activity that determines the source of the messages to be processed.</p>"
    },
    "ChannelArn":{"type":"string"},
    "ChannelName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[a-zA-Z0-9_]+$"
    },
    "ChannelStatistics":{
      "type":"structure",
      "members":{
        "size":{
          "shape":"EstimatedResourceSize",
          "documentation":"<p>The estimated size of the channel.</p>"
        }
      },
      "documentation":"<p>Statistics information about the channel.</p>"
    },
    "ChannelStatus":{
      "type":"string",
      "enum":[
        "CREATING",
        "ACTIVE",
        "DELETING"
      ]
    },
    "ChannelSummaries":{
      "type":"list",
      "member":{"shape":"ChannelSummary"}
    },
    "ChannelSummary":{
      "type":"structure",
      "members":{
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel.</p>"
        },
        "status":{
          "shape":"ChannelStatus",
          "documentation":"<p>The status of the channel.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the channel was created.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time the channel was updated.</p>"
        }
      },
      "documentation":"<p>A summary of information about a channel.</p>"
    },
    "ComputeType":{
      "type":"string",
      "enum":[
        "ACU_1",
        "ACU_2"
      ]
    },
    "ContainerDatasetAction":{
      "type":"structure",
      "required":[
        "image",
        "executionRoleArn",
        "resourceConfiguration"
      ],
      "members":{
        "image":{
          "shape":"Image",
          "documentation":"<p>The ARN of the Docker container stored in your account. The Docker container contains an application and needed support libraries and is used to generate data set contents.</p>"
        },
        "executionRoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role which gives permission to the system to access needed resources in order to run the \"containerAction\". This includes, at minimum, permission to retrieve the data set contents which are the input to the containerized application.</p>"
        },
        "resourceConfiguration":{
          "shape":"ResourceConfiguration",
          "documentation":"<p>Configuration of the resource which executes the \"containerAction\".</p>"
        },
        "variables":{
          "shape":"Variables",
          "documentation":"<p>The values of variables used within the context of the execution of the containerized application (basically, parameters passed to the application). Each variable must have a name and a value given by one of \"stringValue\", \"datasetContentVersionValue\", or \"outputFileUriValue\".</p>"
        }
      },
      "documentation":"<p>Information needed to run the \"containerAction\" to produce data set contents.</p>"
    },
    "CreateChannelRequest":{
      "type":"structure",
      "required":["channelName"],
      "members":{
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the channel.</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>Metadata which can be used to manage the channel.</p>"
        }
      }
    },
    "CreateChannelResponse":{
      "type":"structure",
      "members":{
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel.</p>"
        },
        "channelArn":{
          "shape":"ChannelArn",
          "documentation":"<p>The ARN of the channel.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the channel.</p>"
        }
      }
    },
    "CreateDatasetContentRequest":{
      "type":"structure",
      "required":["datasetName"],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set.</p>",
          "location":"uri",
          "locationName":"datasetName"
        }
      }
    },
    "CreateDatasetContentResponse":{
      "type":"structure",
      "members":{
        "versionId":{
          "shape":"DatasetContentVersion",
          "documentation":"<p>The version ID of the data set contents which are being created.</p>"
        }
      }
    },
    "CreateDatasetRequest":{
      "type":"structure",
      "required":[
        "datasetName",
        "actions"
      ],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set.</p>"
        },
        "actions":{
          "shape":"DatasetActions",
          "documentation":"<p>A list of actions that create the data set contents.</p>"
        },
        "triggers":{
          "shape":"DatasetTriggers",
          "documentation":"<p>A list of triggers. A trigger causes data set contents to be populated at a specified time interval or when another data set's contents are created. The list of triggers can be empty or contain up to five <b>DataSetTrigger</b> objects.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>[Optional] How long, in days, message data is kept for the data set. If not given or set to null, the latest version of the dataset content plus the latest succeeded version (if they are different) are retained for at most 90 days.</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>Metadata which can be used to manage the data set.</p>"
        }
      }
    },
    "CreateDatasetResponse":{
      "type":"structure",
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set.</p>"
        },
        "datasetArn":{
          "shape":"DatasetArn",
          "documentation":"<p>The ARN of the data set.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the data set.</p>"
        }
      }
    },
    "CreateDatastoreRequest":{
      "type":"structure",
      "required":["datastoreName"],
      "members":{
        "datastoreName":{
          "shape":"DatastoreName",
          "documentation":"<p>The name of the data store.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the data store.</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>Metadata which can be used to manage the data store.</p>"
        }
      }
    },
    "CreateDatastoreResponse":{
      "type":"structure",
      "members":{
        "datastoreName":{
          "shape":"DatastoreName",
          "documentation":"<p>The name of the data store.</p>"
        },
        "datastoreArn":{
          "shape":"DatastoreArn",
          "documentation":"<p>The ARN of the data store.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the data store.</p>"
        }
      }
    },
    "CreatePipelineRequest":{
      "type":"structure",
      "required":[
        "pipelineName",
        "pipelineActivities"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline.</p>"
        },
        "pipelineActivities":{
          "shape":"PipelineActivities",
          "documentation":"<p>A list of pipeline activities.</p> <p>The list can be 1-25 <b>PipelineActivity</b> objects. Activities perform transformations on your messages, such as removing, renaming, or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>Metadata which can be used to manage the pipeline.</p>"
        }
      }
    },
    "CreatePipelineResponse":{
      "type":"structure",
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline.</p>"
        },
        "pipelineArn":{
          "shape":"PipelineArn",
          "documentation":"<p>The ARN of the pipeline.</p>"
        }
      }
    },
    "Dataset":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set.</p>"
        },
        "arn":{
          "shape":"DatasetArn",
          "documentation":"<p>The ARN of the data set.</p>"
        },
        "actions":{
          "shape":"DatasetActions",
          "documentation":"<p>The \"DatasetAction\" objects that automatically create the data set contents.</p>"
        },
        "triggers":{
          "shape":"DatasetTriggers",
          "documentation":"<p>The \"DatasetTrigger\" objects that specify when the data set is automatically updated.</p>"
        },
        "status":{
          "shape":"DatasetStatus",
          "documentation":"<p>The status of the data set.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the data set was created.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time the data set was updated.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>[Optional] How long, in days, message data is kept for the data set.</p>"
        }
      },
      "documentation":"<p>Information about a data set.</p>"
    },
    "DatasetAction":{
      "type":"structure",
      "members":{
        "actionName":{
          "shape":"DatasetActionName",
          "documentation":"<p>The name of the data set action by which data set contents are automatically created.</p>"
        },
        "queryAction":{
          "shape":"SqlQueryDatasetAction",
          "documentation":"<p>An \"SqlQueryDatasetAction\" object that contains the SQL query to modify the message.</p>"
        },
        "containerAction":{
          "shape":"ContainerDatasetAction",
          "documentation":"<p>Information which allows the system to run a containerized application in order to create the data set contents. The application must be in a Docker container along with any needed support libraries.</p>"
        }
      },
      "documentation":"<p>A \"DatasetAction\" object specifying the query that creates the data set content.</p>"
    },
    "DatasetActionName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[a-zA-Z0-9_]+$"
    },
    "DatasetActionSummaries":{
      "type":"list",
      "member":{"shape":"DatasetActionSummary"},
      "max":1,
      "min":1
    },
    "DatasetActionSummary":{
      "type":"structure",
      "members":{
        "actionName":{
          "shape":"DatasetActionName",
          "documentation":"<p>The name of the action which automatically creates the data set's contents.</p>"
        },
        "actionType":{
          "shape":"DatasetActionType",
          "documentation":"<p>The type of action by which the data set's contents are automatically created.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DatasetActionType":{
      "type":"string",
      "enum":[
        "QUERY",
        "CONTAINER"
      ]
    },
    "DatasetActions":{
      "type":"list",
      "member":{"shape":"DatasetAction"},
      "max":1,
      "min":1
    },
    "DatasetArn":{"type":"string"},
    "DatasetContentState":{
      "type":"string",
      "enum":[
        "CREATING",
        "SUCCEEDED",
        "FAILED"
      ]
    },
    "DatasetContentStatus":{
      "type":"structure",
      "members":{
        "state":{
          "shape":"DatasetContentState",
          "documentation":"<p>The state of the data set contents. Can be one of \"READY\", \"CREATING\", \"SUCCEEDED\" or \"FAILED\".</p>"
        },
        "reason":{
          "shape":"Reason",
          "documentation":"<p>The reason the data set contents are in this state.</p>"
        }
      },
      "documentation":"<p>The state of the data set contents and the reason they are in this state.</p>"
    },
    "DatasetContentSummaries":{
      "type":"list",
      "member":{"shape":"DatasetContentSummary"}
    },
    "DatasetContentSummary":{
      "type":"structure",
      "members":{
        "version":{
          "shape":"DatasetContentVersion",
          "documentation":"<p>The version of the data set contents.</p>"
        },
        "status":{
          "shape":"DatasetContentStatus",
          "documentation":"<p>The status of the data set contents.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The actual time the creation of the data set contents was started.</p>"
        },
        "scheduleTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the creation of the data set contents was scheduled to start.</p>"
        }
      },
      "documentation":"<p>Summary information about data set contents.</p>"
    },
    "DatasetContentVersion":{
      "type":"string",
      "max":36,
      "min":7
    },
    "DatasetContentVersionValue":{
      "type":"structure",
      "required":["datasetName"],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set whose latest contents will be used as input to the notebook or application.</p>"
        }
      },
      "documentation":"<p>The data set whose latest contents will be used as input to the notebook or application.</p>"
    },
    "DatasetEntries":{
      "type":"list",
      "member":{"shape":"DatasetEntry"}
    },
    "DatasetEntry":{
      "type":"structure",
      "members":{
        "entryName":{
          "shape":"EntryName",
          "documentation":"<p>The name of the data set item.</p>"
        },
        "dataURI":{
          "shape":"PresignedURI",
          "documentation":"<p>The pre-signed URI of the data set item.</p>"
        }
      },
      "documentation":"<p>The reference to a data set entry.</p>"
    },
    "DatasetName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[a-zA-Z0-9_]+$"
    },
    "DatasetStatus":{
      "type":"string",
      "enum":[
        "CREATING",
        "ACTIVE",
        "DELETING"
      ]
    },
    "DatasetSummaries":{
      "type":"list",
      "member":{"shape":"DatasetSummary"}
    },
    "DatasetSummary":{
      "type":"structure",
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set.</p>"
        },
        "status":{
          "shape":"DatasetStatus",
          "documentation":"<p>The status of the data set.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the data set was created.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time the data set was updated.</p>"
        },
        "triggers":{
          "shape":"DatasetTriggers",
          "documentation":"<p>A list of triggers. A trigger causes data set content to be populated at a specified time interval or when another data set is populated. The list of triggers can be empty or contain up to five DataSetTrigger objects</p>"
        },
        "actions":{
          "shape":"DatasetActionSummaries",
          "documentation":"<p>A list of \"DataActionSummary\" objects.</p>"
        }
      },
      "documentation":"<p>A summary of information about a data set.</p>"
    },
    "DatasetTrigger":{
      "type":"structure",
      "members":{
        "schedule":{
          "shape":"Schedule",
          "documentation":"<p>The \"Schedule\" when the trigger is initiated.</p>"
        },
        "dataset":{
          "shape":"TriggeringDataset",
          "documentation":"<p>The data set whose content creation will trigger the creation of this data set's contents.</p>"
        }
      },
      "documentation":"<p>The \"DatasetTrigger\" that specifies when the data set is automatically updated.</p>"
    },
    "DatasetTriggers":{
      "type":"list",
      "member":{"shape":"DatasetTrigger"},
      "max":5,
      "min":0
    },
    "Datastore":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"DatastoreName",
          "documentation":"<p>The name of the data store.</p>"
        },
        "arn":{
          "shape":"DatastoreArn",
          "documentation":"<p>The ARN of the data store.</p>"
        },
        "status":{
          "shape":"DatastoreStatus",
          "documentation":"<p>The status of a data store:</p> <dl> <dt>CREATING</dt> <dd> <p>The data store is being created.</p> </dd> <dt>ACTIVE</dt> <dd> <p>The data store has been created and can be used.</p> </dd> <dt>DELETING</dt> <dd> <p>The data store is being deleted.</p> </dd> </dl>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the data store.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the data store was created.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time the data store was updated.</p>"
        }
      },
      "documentation":"<p>Information about a data store.</p>"
    },
    "DatastoreActivity":{
      "type":"structure",
      "required":[
        "name",
        "datastoreName"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'datastore' activity.</p>"
        },
        "datastoreName":{
          "shape":"DatastoreName",
          "documentation":"<p>The name of the data store where processed messages are stored.</p>"
        }
      },
      "documentation":"<p>The 'datastore' activity that specifies where to store the processed data.</p>"
    },
    "DatastoreArn":{"type":"string"},
    "DatastoreName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[a-zA-Z0-9_]+$"
    },
    "DatastoreStatistics":{
      "type":"structure",
      "members":{
        "size":{
          "shape":"EstimatedResourceSize",
          "documentation":"<p>The estimated size of the data store.</p>"
        }
      },
      "documentation":"<p>Statistical information about the data store.</p>"
    },
    "DatastoreStatus":{
      "type":"string",
      "enum":[
        "CREATING",
        "ACTIVE",
        "DELETING"
      ]
    },
    "DatastoreSummaries":{
      "type":"list",
      "member":{"shape":"DatastoreSummary"}
    },
    "DatastoreSummary":{
      "type":"structure",
      "members":{
        "datastoreName":{
          "shape":"DatastoreName",
          "documentation":"<p>The name of the data store.</p>"
        },
        "status":{
          "shape":"DatastoreStatus",
          "documentation":"<p>The status of the data store.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the data store was created.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time the data store was updated.</p>"
        }
      },
      "documentation":"<p>A summary of information about a data store.</p>"
    },
    "DeleteChannelRequest":{
      "type":"structure",
      "required":["channelName"],
      "members":{
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel to delete.</p>",
          "location":"uri",
          "locationName":"channelName"
        }
      }
    },
    "DeleteDatasetContentRequest":{
      "type":"structure",
      "required":["datasetName"],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set whose content is deleted.</p>",
          "location":"uri",
          "locationName":"datasetName"
        },
        "versionId":{
          "shape":"DatasetContentVersion",
          "documentation":"<p>The version of the data set whose content is deleted. You can also use the strings \"$LATEST\" or \"$LATEST_SUCCEEDED\" to delete the latest or latest successfully completed data set. If not specified, \"$LATEST_SUCCEEDED\" is the default.</p>",
          "location":"querystring",
          "locationName":"versionId"
        }
      }
    },
    "DeleteDatasetRequest":{
      "type":"structure",
      "required":["datasetName"],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set to delete.</p>",
          "location":"uri",
          "locationName":"datasetName"
        }
      }
    },
    "DeleteDatastoreRequest":{
      "type":"structure",
      "required":["datastoreName"],
      "members":{
        "datastoreName":{
          "shape":"DatastoreName",
          "documentation":"<p>The name of the data store to delete.</p>",
          "location":"uri",
          "locationName":"datastoreName"
        }
      }
    },
    "DeletePipelineRequest":{
      "type":"structure",
      "required":["pipelineName"],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline to delete.</p>",
          "location":"uri",
          "locationName":"pipelineName"
        }
      }
    },
    "DeltaTime":{
      "type":"structure",
      "required":[
        "offsetSeconds",
        "timeExpression"
      ],
      "members":{
        "offsetSeconds":{
          "shape":"OffsetSeconds",
          "documentation":"<p>The number of seconds of estimated \"in flight\" lag time of message data.</p>"
        },
        "timeExpression":{
          "shape":"TimeExpression",
          "documentation":"<p>An expression by which the time of the message data may be determined. This may be the name of a timestamp field, or a SQL expression which is used to derive the time the message data was generated.</p>"
        }
      },
      "documentation":"<p>When you create data set contents using message data from a specified time frame, some message data may still be \"in flight\" when processing begins, and so will not arrive in time to be processed. Use this field to make allowances for the \"in flight\" time of your message data, so that data not processed from the previous time frame will be included with the next time frame. Without this, missed message data would be excluded from processing during the next time frame as well, because its timestamp places it within the previous time frame.</p>"
    },
    "DescribeChannelRequest":{
      "type":"structure",
      "required":["channelName"],
      "members":{
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel whose information is retrieved.</p>",
          "location":"uri",
          "locationName":"channelName"
        },
        "includeStatistics":{
          "shape":"IncludeStatisticsFlag",
          "documentation":"<p>If true, additional statistical information about the channel is included in the response.</p>",
          "location":"querystring",
          "locationName":"includeStatistics"
        }
      }
    },
    "DescribeChannelResponse":{
      "type":"structure",
      "members":{
        "channel":{
          "shape":"Channel",
          "documentation":"<p>An object that contains information about the channel.</p>"
        },
        "statistics":{
          "shape":"ChannelStatistics",
          "documentation":"<p>Statistics about the channel. Included if the 'includeStatistics' parameter is set to true in the request.</p>"
        }
      }
    },
    "DescribeDatasetRequest":{
      "type":"structure",
      "required":["datasetName"],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set whose information is retrieved.</p>",
          "location":"uri",
          "locationName":"datasetName"
        }
      }
    },
    "DescribeDatasetResponse":{
      "type":"structure",
      "members":{
        "dataset":{
          "shape":"Dataset",
          "documentation":"<p>An object that contains information about the data set.</p>"
        }
      }
    },
    "DescribeDatastoreRequest":{
      "type":"structure",
      "required":["datastoreName"],
      "members":{
        "datastoreName":{
          "shape":"DatastoreName",
          "documentation":"<p>The name of the data store</p>",
          "location":"uri",
          "locationName":"datastoreName"
        },
        "includeStatistics":{
          "shape":"IncludeStatisticsFlag",
          "documentation":"<p>If true, additional statistical information about the datastore is included in the response.</p>",
          "location":"querystring",
          "locationName":"includeStatistics"
        }
      }
    },
    "DescribeDatastoreResponse":{
      "type":"structure",
      "members":{
        "datastore":{
          "shape":"Datastore",
          "documentation":"<p>Information about the data store.</p>"
        },
        "statistics":{
          "shape":"DatastoreStatistics",
          "documentation":"<p>Additional statistical information about the data store. Included if the 'includeStatistics' parameter is set to true in the request.</p>"
        }
      }
    },
    "DescribeLoggingOptionsRequest":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeLoggingOptionsResponse":{
      "type":"structure",
      "members":{
        "loggingOptions":{
          "shape":"LoggingOptions",
          "documentation":"<p>The current settings of the AWS IoT Analytics logging options.</p>"
        }
      }
    },
    "DescribePipelineRequest":{
      "type":"structure",
      "required":["pipelineName"],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline whose information is retrieved.</p>",
          "location":"uri",
          "locationName":"pipelineName"
        }
      }
    },
    "DescribePipelineResponse":{
      "type":"structure",
      "members":{
        "pipeline":{
          "shape":"Pipeline",
          "documentation":"<p>A \"Pipeline\" object that contains information about the pipeline.</p>"
        }
      }
    },
    "DeviceRegistryEnrichActivity":{
      "type":"structure",
      "required":[
        "name",
        "attribute",
        "thingName",
        "roleArn"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'deviceRegistryEnrich' activity.</p>"
        },
        "attribute":{
          "shape":"AttributeName",
          "documentation":"<p>The name of the attribute that is added to the message.</p>"
        },
        "thingName":{
          "shape":"AttributeName",
          "documentation":"<p>The name of the IoT device whose registry information is added to the message.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role that allows access to the device's registry information.</p>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>An activity that adds data from the AWS IoT device registry to your message.</p>"
    },
    "DeviceShadowEnrichActivity":{
      "type":"structure",
      "required":[
        "name",
        "attribute",
        "thingName",
        "roleArn"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'deviceShadowEnrich' activity.</p>"
        },
        "attribute":{
          "shape":"AttributeName",
          "documentation":"<p>The name of the attribute that is added to the message.</p>"
        },
        "thingName":{
          "shape":"AttributeName",
          "documentation":"<p>The name of the IoT device whose shadow information is added to the message.</p>"
        },
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role that allows access to the device's shadow.</p>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>An activity that adds information from the AWS IoT Device Shadows service to a message.</p>"
    },
    "DoubleValue":{"type":"double"},
    "EndTime":{"type":"timestamp"},
    "EntryName":{"type":"string"},
    "ErrorCode":{"type":"string"},
    "ErrorMessage":{"type":"string"},
    "EstimatedResourceSize":{
      "type":"structure",
      "members":{
        "estimatedSizeInBytes":{
          "shape":"SizeInBytes",
          "documentation":"<p>The estimated size of the resource in bytes.</p>"
        },
        "estimatedOn":{
          "shape":"Timestamp",
          "documentation":"<p>The time when the estimate of the size of the resource was made.</p>"
        }
      },
      "documentation":"<p>The estimated size of the resource.</p>"
    },
    "FilterActivity":{
      "type":"structure",
      "required":[
        "name",
        "filter"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'filter' activity.</p>"
        },
        "filter":{
          "shape":"FilterExpression",
          "documentation":"<p>An expression that looks like a SQL WHERE clause that must return a Boolean value.</p>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>An activity that filters a message based on its attributes.</p>"
    },
    "FilterExpression":{
      "type":"string",
      "max":256,
      "min":1
    },
    "GetDatasetContentRequest":{
      "type":"structure",
      "required":["datasetName"],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set whose contents are retrieved.</p>",
          "location":"uri",
          "locationName":"datasetName"
        },
        "versionId":{
          "shape":"DatasetContentVersion",
          "documentation":"<p>The version of the data set whose contents are retrieved. You can also use the strings \"$LATEST\" or \"$LATEST_SUCCEEDED\" to retrieve the contents of the latest or latest successfully completed data set. If not specified, \"$LATEST_SUCCEEDED\" is the default.</p>",
          "location":"querystring",
          "locationName":"versionId"
        }
      }
    },
    "GetDatasetContentResponse":{
      "type":"structure",
      "members":{
        "entries":{
          "shape":"DatasetEntries",
          "documentation":"<p>A list of \"DatasetEntry\" objects.</p>"
        },
        "timestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The time when the request was made.</p>"
        },
        "status":{
          "shape":"DatasetContentStatus",
          "documentation":"<p>The status of the data set content.</p>"
        }
      }
    },
    "Image":{
      "type":"string",
      "max":255
    },
    "IncludeStatisticsFlag":{"type":"boolean"},
    "InternalFailureException":{
      "type":"structure",
      "members":{
        "message":{"shape":"errorMessage"}
      },
      "documentation":"<p>There was an internal failure.</p>",
      "error":{"httpStatusCode":500},
      "exception":true,
      "fault":true
    },
    "InvalidRequestException":{
      "type":"structure",
      "members":{
        "message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The request was not valid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "LambdaActivity":{
      "type":"structure",
      "required":[
        "name",
        "lambdaName",
        "batchSize"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'lambda' activity.</p>"
        },
        "lambdaName":{
          "shape":"LambdaName",
          "documentation":"<p>The name of the Lambda function that is run on the message.</p>"
        },
        "batchSize":{
          "shape":"ActivityBatchSize",
          "documentation":"<p>The number of messages passed to the Lambda function for processing.</p> <p>The AWS Lambda function must be able to process all of these messages within five minutes, which is the maximum timeout duration for Lambda functions.</p>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>An activity that runs a Lambda function to modify the message.</p>"
    },
    "LambdaName":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"^[a-zA-Z0-9_-]+$"
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The command caused an internal limit to be exceeded.</p>",
      "error":{"httpStatusCode":410},
      "exception":true
    },
    "ListChannelsRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListChannelsResponse":{
      "type":"structure",
      "members":{
        "channelSummaries":{
          "shape":"ChannelSummaries",
          "documentation":"<p>A list of \"ChannelSummary\" objects.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>"
        }
      }
    },
    "ListDatasetContentsRequest":{
      "type":"structure",
      "required":["datasetName"],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set whose contents information you want to list.</p>",
          "location":"uri",
          "locationName":"datasetName"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in this request.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListDatasetContentsResponse":{
      "type":"structure",
      "members":{
        "datasetContentSummaries":{
          "shape":"DatasetContentSummaries",
          "documentation":"<p>Summary information about data set contents that have been created.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>"
        }
      }
    },
    "ListDatasetsRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListDatasetsResponse":{
      "type":"structure",
      "members":{
        "datasetSummaries":{
          "shape":"DatasetSummaries",
          "documentation":"<p>A list of \"DatasetSummary\" objects.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>"
        }
      }
    },
    "ListDatastoresRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListDatastoresResponse":{
      "type":"structure",
      "members":{
        "datastoreSummaries":{
          "shape":"DatastoreSummaries",
          "documentation":"<p>A list of \"DatastoreSummary\" objects.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>"
        }
      }
    },
    "ListPipelinesRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token for the next set of results.</p>",
          "location":"querystring",
          "locationName":"nextToken"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        }
      }
    },
    "ListPipelinesResponse":{
      "type":"structure",
      "members":{
        "pipelineSummaries":{
          "shape":"PipelineSummaries",
          "documentation":"<p>A list of \"PipelineSummary\" objects.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>"
        }
      }
    },
    "ListTagsForResourceRequest":{
      "type":"structure",
      "required":["resourceArn"],
      "members":{
        "resourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The ARN of the resource whose tags you want to list.</p>",
          "location":"querystring",
          "locationName":"resourceArn"
        }
      }
    },
    "ListTagsForResourceResponse":{
      "type":"structure",
      "members":{
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The tags (metadata) which you have assigned to the resource.</p>"
        }
      }
    },
    "LogResult":{"type":"string"},
    "LoggingEnabled":{"type":"boolean"},
    "LoggingLevel":{
      "type":"string",
      "enum":["ERROR"]
    },
    "LoggingOptions":{
      "type":"structure",
      "required":[
        "roleArn",
        "level",
        "enabled"
      ],
      "members":{
        "roleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The ARN of the role that grants permission to AWS IoT Analytics to perform logging.</p>"
        },
        "level":{
          "shape":"LoggingLevel",
          "documentation":"<p>The logging level. Currently, only \"ERROR\" is supported.</p>"
        },
        "enabled":{
          "shape":"LoggingEnabled",
          "documentation":"<p>If true, logging is enabled for AWS IoT Analytics.</p>"
        }
      },
      "documentation":"<p>Information about logging options.</p>"
    },
    "MathActivity":{
      "type":"structure",
      "required":[
        "name",
        "attribute",
        "math"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'math' activity.</p>"
        },
        "attribute":{
          "shape":"AttributeName",
          "documentation":"<p>The name of the attribute that will contain the result of the math operation.</p>"
        },
        "math":{
          "shape":"MathExpression",
          "documentation":"<p>An expression that uses one or more existing attributes and must return an integer value.</p>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>An activity that computes an arithmetic expression using the message's attributes.</p>"
    },
    "MathExpression":{
      "type":"string",
      "max":256,
      "min":1
    },
    "MaxMessages":{
      "type":"integer",
      "max":10,
      "min":1
    },
    "MaxResults":{
      "type":"integer",
      "max":250,
      "min":1
    },
    "Message":{
      "type":"structure",
      "required":[
        "messageId",
        "payload"
      ],
      "members":{
        "messageId":{
          "shape":"MessageId",
          "documentation":"<p>The ID you wish to assign to the message. Each \"messageId\" must be unique within each batch sent.</p>"
        },
        "payload":{
          "shape":"MessagePayload",
          "documentation":"<p>The payload of the message. This may be a JSON string or a Base64-encoded string representing binary data (in which case you must decode it by means of a pipeline activity).</p>"
        }
      },
      "documentation":"<p>Information about a message.</p>"
    },
    "MessageId":{
      "type":"string",
      "max":128,
      "min":1
    },
    "MessagePayload":{"type":"blob"},
    "MessagePayloads":{
      "type":"list",
      "member":{"shape":"MessagePayload"},
      "max":10,
      "min":1
    },
    "Messages":{
      "type":"list",
      "member":{"shape":"Message"}
    },
    "NextToken":{"type":"string"},
    "OffsetSeconds":{"type":"integer"},
    "OutputFileName":{
      "type":"string",
      "pattern":"[\\w\\.-]{1,255}"
    },
    "OutputFileUriValue":{
      "type":"structure",
      "required":["fileName"],
      "members":{
        "fileName":{
          "shape":"OutputFileName",
          "documentation":"<p>The URI of the location where data set contents are stored, usually the URI of a file in an S3 bucket.</p>"
        }
      },
      "documentation":"<p>The URI of the location where data set contents are stored, usually the URI of a file in an S3 bucket.</p>"
    },
    "Pipeline":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline.</p>"
        },
        "arn":{
          "shape":"PipelineArn",
          "documentation":"<p>The ARN of the pipeline.</p>"
        },
        "activities":{
          "shape":"PipelineActivities",
          "documentation":"<p>The activities that perform transformations on the messages.</p>"
        },
        "reprocessingSummaries":{
          "shape":"ReprocessingSummaries",
          "documentation":"<p>A summary of information about the pipeline reprocessing.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the pipeline was created.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>The last time the pipeline was updated.</p>"
        }
      },
      "documentation":"<p>Contains information about a pipeline.</p>"
    },
    "PipelineActivities":{
      "type":"list",
      "member":{"shape":"PipelineActivity"},
      "max":25,
      "min":1
    },
    "PipelineActivity":{
      "type":"structure",
      "members":{
        "channel":{
          "shape":"ChannelActivity",
          "documentation":"<p>Determines the source of the messages to be processed.</p>"
        },
        "lambda":{
          "shape":"LambdaActivity",
          "documentation":"<p>Runs a Lambda function to modify the message.</p>"
        },
        "datastore":{
          "shape":"DatastoreActivity",
          "documentation":"<p>Specifies where to store the processed message data.</p>"
        },
        "addAttributes":{
          "shape":"AddAttributesActivity",
          "documentation":"<p>Adds other attributes based on existing attributes in the message.</p>"
        },
        "removeAttributes":{
          "shape":"RemoveAttributesActivity",
          "documentation":"<p>Removes attributes from a message.</p>"
        },
        "selectAttributes":{
          "shape":"SelectAttributesActivity",
          "documentation":"<p>Creates a new message using only the specified attributes from the original message. </p>"
        },
        "filter":{
          "shape":"FilterActivity",
          "documentation":"<p>Filters a message based on its attributes.</p>"
        },
        "math":{
          "shape":"MathActivity",
          "documentation":"<p>Computes an arithmetic expression using the message's attributes and adds it to the message.</p>"
        },
        "deviceRegistryEnrich":{
          "shape":"DeviceRegistryEnrichActivity",
          "documentation":"<p>Adds data from the AWS IoT device registry to your message.</p>"
        },
        "deviceShadowEnrich":{
          "shape":"DeviceShadowEnrichActivity",
          "documentation":"<p>Adds information from the AWS IoT Device Shadows service to a message.</p>"
        }
      },
      "documentation":"<p>An activity that performs a transformation on a message.</p>"
    },
    "PipelineArn":{"type":"string"},
    "PipelineName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[a-zA-Z0-9_]+$"
    },
    "PipelineSummaries":{
      "type":"list",
      "member":{"shape":"PipelineSummary"}
    },
    "PipelineSummary":{
      "type":"structure",
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline.</p>"
        },
        "reprocessingSummaries":{
          "shape":"ReprocessingSummaries",
          "documentation":"<p>A summary of information about the pipeline reprocessing.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the pipeline was created.</p>"
        },
        "lastUpdateTime":{
          "shape":"Timestamp",
          "documentation":"<p>When the pipeline was last updated.</p>"
        }
      },
      "documentation":"<p>A summary of information about a pipeline.</p>"
    },
    "PresignedURI":{"type":"string"},
    "PutLoggingOptionsRequest":{
      "type":"structure",
      "required":["loggingOptions"],
      "members":{
        "loggingOptions":{
          "shape":"LoggingOptions",
          "documentation":"<p>The new values of the AWS IoT Analytics logging options.</p>"
        }
      }
    },
    "QueryFilter":{
      "type":"structure",
      "members":{
        "deltaTime":{
          "shape":"DeltaTime",
          "documentation":"<p>Used to limit data to that which has arrived since the last execution of the action. When you create data set contents using message data from a specified time frame, some message data may still be \"in flight\" when processing begins, and so will not arrive in time to be processed. Use this field to make allowances for the \"in flight\" time of you message data, so that data not processed from a previous time frame will be included with the next time frame. Without this, missed message data would be excluded from processing during the next time frame as well, because its timestamp places it within the previous time frame.</p>"
        }
      },
      "documentation":"<p>Information which is used to filter message data, to segregate it according to the time frame in which it arrives.</p>"
    },
    "QueryFilters":{
      "type":"list",
      "member":{"shape":"QueryFilter"},
      "max":1,
      "min":0
    },
    "Reason":{"type":"string"},
    "RemoveAttributesActivity":{
      "type":"structure",
      "required":[
        "name",
        "attributes"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'removeAttributes' activity.</p>"
        },
        "attributes":{
          "shape":"AttributeNames",
          "documentation":"<p>A list of 1-50 attributes to remove from the message.</p>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>An activity that removes attributes from a message.</p>"
    },
    "ReprocessingId":{"type":"string"},
    "ReprocessingStatus":{
      "type":"string",
      "enum":[
        "RUNNING",
        "SUCCEEDED",
        "CANCELLED",
        "FAILED"
      ]
    },
    "ReprocessingSummaries":{
      "type":"list",
      "member":{"shape":"ReprocessingSummary"}
    },
    "ReprocessingSummary":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"ReprocessingId",
          "documentation":"<p>The 'reprocessingId' returned by \"StartPipelineReprocessing\".</p>"
        },
        "status":{
          "shape":"ReprocessingStatus",
          "documentation":"<p>The status of the pipeline reprocessing.</p>"
        },
        "creationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time the pipeline reprocessing was created.</p>"
        }
      },
      "documentation":"<p>Information about pipeline reprocessing.</p>"
    },
    "ResourceAlreadyExistsException":{
      "type":"structure",
      "members":{
        "message":{"shape":"errorMessage"},
        "resourceId":{
          "shape":"resourceId",
          "documentation":"<p>The ID of the resource.</p>"
        },
        "resourceArn":{
          "shape":"resourceArn",
          "documentation":"<p>The ARN of the resource.</p>"
        }
      },
      "documentation":"<p>A resource with the same name already exists.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "ResourceArn":{
      "type":"string",
      "max":2048,
      "min":20
    },
    "ResourceConfiguration":{
      "type":"structure",
      "required":[
        "computeType",
        "volumeSizeInGB"
      ],
      "members":{
        "computeType":{
          "shape":"ComputeType",
          "documentation":"<p>The type of the compute resource used to execute the \"containerAction\". Possible values are: ACU_1 (vCPU=4, memory=16GiB) or ACU_2 (vCPU=8, memory=32GiB).</p>"
        },
        "volumeSizeInGB":{
          "shape":"VolumeSizeInGB",
          "documentation":"<p>The size (in GB) of the persistent storage available to the resource instance used to execute the \"containerAction\" (min: 1, max: 50).</p>"
        }
      },
      "documentation":"<p>The configuration of the resource used to execute the \"containerAction\".</p>"
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "message":{"shape":"errorMessage"}
      },
      "documentation":"<p>A resource with the specified name could not be found.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "RetentionPeriod":{
      "type":"structure",
      "members":{
        "unlimited":{
          "shape":"UnlimitedRetentionPeriod",
          "documentation":"<p>If true, message data is kept indefinitely.</p>"
        },
        "numberOfDays":{
          "shape":"RetentionPeriodInDays",
          "documentation":"<p>The number of days that message data is kept. The \"unlimited\" parameter must be false.</p>"
        }
      },
      "documentation":"<p>How long, in days, message data is kept.</p>"
    },
    "RetentionPeriodInDays":{
      "type":"integer",
      "min":1
    },
    "RoleArn":{
      "type":"string",
      "max":2048,
      "min":20
    },
    "RunPipelineActivityRequest":{
      "type":"structure",
      "required":[
        "pipelineActivity",
        "payloads"
      ],
      "members":{
        "pipelineActivity":{
          "shape":"PipelineActivity",
          "documentation":"<p>The pipeline activity that is run. This must not be a 'channel' activity or a 'datastore' activity because these activities are used in a pipeline only to load the original message and to store the (possibly) transformed message. If a 'lambda' activity is specified, only short-running Lambda functions (those with a timeout of less than 30 seconds or less) can be used.</p>"
        },
        "payloads":{
          "shape":"MessagePayloads",
          "documentation":"<p>The sample message payloads on which the pipeline activity is run.</p>"
        }
      }
    },
    "RunPipelineActivityResponse":{
      "type":"structure",
      "members":{
        "payloads":{
          "shape":"MessagePayloads",
          "documentation":"<p>The enriched or transformed sample message payloads as base64-encoded strings. (The results of running the pipeline activity on each input sample message payload, encoded in base64.)</p>"
        },
        "logResult":{
          "shape":"LogResult",
          "documentation":"<p>In case the pipeline activity fails, the log message that is generated.</p>"
        }
      }
    },
    "SampleChannelDataRequest":{
      "type":"structure",
      "required":["channelName"],
      "members":{
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel whose message samples are retrieved.</p>",
          "location":"uri",
          "locationName":"channelName"
        },
        "maxMessages":{
          "shape":"MaxMessages",
          "documentation":"<p>The number of sample messages to be retrieved. The limit is 10, the default is also 10.</p>",
          "location":"querystring",
          "locationName":"maxMessages"
        },
        "startTime":{
          "shape":"StartTime",
          "documentation":"<p>The start of the time window from which sample messages are retrieved.</p>",
          "location":"querystring",
          "locationName":"startTime"
        },
        "endTime":{
          "shape":"EndTime",
          "documentation":"<p>The end of the time window from which sample messages are retrieved.</p>",
          "location":"querystring",
          "locationName":"endTime"
        }
      }
    },
    "SampleChannelDataResponse":{
      "type":"structure",
      "members":{
        "payloads":{
          "shape":"MessagePayloads",
          "documentation":"<p>The list of message samples. Each sample message is returned as a base64-encoded string.</p>"
        }
      }
    },
    "Schedule":{
      "type":"structure",
      "members":{
        "expression":{
          "shape":"ScheduleExpression",
          "documentation":"<p>The expression that defines when to trigger an update. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html\"> Schedule Expressions for Rules</a> in the Amazon CloudWatch documentation.</p>"
        }
      },
      "documentation":"<p>The schedule for when to trigger an update.</p>"
    },
    "ScheduleExpression":{"type":"string"},
    "SelectAttributesActivity":{
      "type":"structure",
      "required":[
        "name",
        "attributes"
      ],
      "members":{
        "name":{
          "shape":"ActivityName",
          "documentation":"<p>The name of the 'selectAttributes' activity.</p>"
        },
        "attributes":{
          "shape":"AttributeNames",
          "documentation":"<p>A list of the attributes to select from the message.</p>"
        },
        "next":{
          "shape":"ActivityName",
          "documentation":"<p>The next activity in the pipeline.</p>"
        }
      },
      "documentation":"<p>Creates a new message using only the specified attributes from the original message.</p>"
    },
    "ServiceUnavailableException":{
      "type":"structure",
      "members":{
        "message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The service is temporarily unavailable.</p>",
      "error":{"httpStatusCode":503},
      "exception":true,
      "fault":true
    },
    "SizeInBytes":{"type":"double"},
    "SqlQuery":{"type":"string"},
    "SqlQueryDatasetAction":{
      "type":"structure",
      "required":["sqlQuery"],
      "members":{
        "sqlQuery":{
          "shape":"SqlQuery",
          "documentation":"<p>A SQL query string.</p>"
        },
        "filters":{
          "shape":"QueryFilters",
          "documentation":"<p>Pre-filters applied to message data.</p>"
        }
      },
      "documentation":"<p>The SQL query to modify the message.</p>"
    },
    "StartPipelineReprocessingRequest":{
      "type":"structure",
      "required":["pipelineName"],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline on which to start reprocessing.</p>",
          "location":"uri",
          "locationName":"pipelineName"
        },
        "startTime":{
          "shape":"StartTime",
          "documentation":"<p>The start time (inclusive) of raw message data that is reprocessed.</p>"
        },
        "endTime":{
          "shape":"EndTime",
          "documentation":"<p>The end time (exclusive) of raw message data that is reprocessed.</p>"
        }
      }
    },
    "StartPipelineReprocessingResponse":{
      "type":"structure",
      "members":{
        "reprocessingId":{
          "shape":"ReprocessingId",
          "documentation":"<p>The ID of the pipeline reprocessing activity that was started.</p>"
        }
      }
    },
    "StartTime":{"type":"timestamp"},
    "StringValue":{
      "type":"string",
      "max":1024,
      "min":0
    },
    "Tag":{
      "type":"structure",
      "required":[
        "key",
        "value"
      ],
      "members":{
        "key":{
          "shape":"TagKey",
          "documentation":"<p>The tag's key.</p>"
        },
        "value":{
          "shape":"TagValue",
          "documentation":"<p>The tag's value.</p>"
        }
      },
      "documentation":"<p>A set of key/value pairs which are used to manage the resource.</p>"
    },
    "TagKey":{
      "type":"string",
      "max":256,
      "min":1
    },
    "TagKeyList":{
      "type":"list",
      "member":{"shape":"TagKey"},
      "max":50,
      "min":1
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":50,
      "min":1
    },
    "TagResourceRequest":{
      "type":"structure",
      "required":[
        "resourceArn",
        "tags"
      ],
      "members":{
        "resourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The ARN of the resource whose tags will be modified.</p>",
          "location":"querystring",
          "locationName":"resourceArn"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The new or modified tags for the resource.</p>"
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
      "min":1
    },
    "ThrottlingException":{
      "type":"structure",
      "members":{
        "message":{"shape":"errorMessage"}
      },
      "documentation":"<p>The request was denied due to request throttling.</p>",
      "error":{"httpStatusCode":429},
      "exception":true
    },
    "TimeExpression":{"type":"string"},
    "Timestamp":{"type":"timestamp"},
    "TriggeringDataset":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set whose content generation will trigger the new data set content generation.</p>"
        }
      },
      "documentation":"<p>Information about the data set whose content generation will trigger the new data set content generation.</p>"
    },
    "UnlimitedRetentionPeriod":{"type":"boolean"},
    "UntagResourceRequest":{
      "type":"structure",
      "required":[
        "resourceArn",
        "tagKeys"
      ],
      "members":{
        "resourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The ARN of the resource whose tags will be removed.</p>",
          "location":"querystring",
          "locationName":"resourceArn"
        },
        "tagKeys":{
          "shape":"TagKeyList",
          "documentation":"<p>The keys of those tags which will be removed.</p>",
          "location":"querystring",
          "locationName":"tagKeys"
        }
      }
    },
    "UntagResourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateChannelRequest":{
      "type":"structure",
      "required":["channelName"],
      "members":{
        "channelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel to be updated.</p>",
          "location":"uri",
          "locationName":"channelName"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the channel.</p>"
        }
      }
    },
    "UpdateDatasetRequest":{
      "type":"structure",
      "required":[
        "datasetName",
        "actions"
      ],
      "members":{
        "datasetName":{
          "shape":"DatasetName",
          "documentation":"<p>The name of the data set to update.</p>",
          "location":"uri",
          "locationName":"datasetName"
        },
        "actions":{
          "shape":"DatasetActions",
          "documentation":"<p>A list of \"DatasetAction\" objects.</p>"
        },
        "triggers":{
          "shape":"DatasetTriggers",
          "documentation":"<p>A list of \"DatasetTrigger\" objects. The list can be empty or can contain up to five <b>DataSetTrigger</b> objects.</p>"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the data set.</p>"
        }
      }
    },
    "UpdateDatastoreRequest":{
      "type":"structure",
      "required":["datastoreName"],
      "members":{
        "datastoreName":{
          "shape":"DatastoreName",
          "documentation":"<p>The name of the data store to be updated.</p>",
          "location":"uri",
          "locationName":"datastoreName"
        },
        "retentionPeriod":{
          "shape":"RetentionPeriod",
          "documentation":"<p>How long, in days, message data is kept for the data store.</p>"
        }
      }
    },
    "UpdatePipelineRequest":{
      "type":"structure",
      "required":[
        "pipelineName",
        "pipelineActivities"
      ],
      "members":{
        "pipelineName":{
          "shape":"PipelineName",
          "documentation":"<p>The name of the pipeline to update.</p>",
          "location":"uri",
          "locationName":"pipelineName"
        },
        "pipelineActivities":{
          "shape":"PipelineActivities",
          "documentation":"<p>A list of \"PipelineActivity\" objects.</p> <p>The list can be 1-25 <b>PipelineActivity</b> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p>"
        }
      }
    },
    "Variable":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"VariableName",
          "documentation":"<p>The name of the variable.</p>"
        },
        "stringValue":{
          "shape":"StringValue",
          "documentation":"<p>The value of the variable as a string.</p>"
        },
        "doubleValue":{
          "shape":"DoubleValue",
          "documentation":"<p>The value of the variable as a double (numeric).</p>",
          "box":true
        },
        "datasetContentVersionValue":{
          "shape":"DatasetContentVersionValue",
          "documentation":"<p>The value of the variable as a structure that specifies a data set content version.</p>"
        },
        "outputFileUriValue":{
          "shape":"OutputFileUriValue",
          "documentation":"<p>The value of the variable as a structure that specifies an output file URI.</p>"
        }
      },
      "documentation":"<p>An instance of a variable to be passed to the \"containerAction\" execution. Each variable must have a name and a value given by one of \"stringValue\", \"datasetContentVersionValue\", or \"outputFileUriValue\".</p>"
    },
    "VariableName":{
      "type":"string",
      "max":256,
      "min":1
    },
    "Variables":{
      "type":"list",
      "member":{"shape":"Variable"},
      "max":50,
      "min":0
    },
    "VolumeSizeInGB":{
      "type":"integer",
      "max":50,
      "min":1
    },
    "errorMessage":{"type":"string"},
    "resourceArn":{"type":"string"},
    "resourceId":{"type":"string"}
  },
  "documentation":"<p>AWS IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. AWS IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.</p> <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources. </p> <p>AWS IoT Analytics automates the steps required to analyze data from IoT devices. AWS IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. AWS IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices.</p>"
}
