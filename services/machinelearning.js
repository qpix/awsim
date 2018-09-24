awsim['machinelearning'] = {
  "version":"2.0",
  "metadata":{
    "uid":"machinelearning-2014-12-12",
    "apiVersion":"2014-12-12",
    "endpointPrefix":"machinelearning",
    "jsonVersion":"1.1",
    "serviceFullName":"Amazon Machine Learning",
    "serviceId":"Machine Learning",
    "signatureVersion":"v4",
    "targetPrefix":"AmazonML_20141212",
    "protocol":"json"
  },
  "documentation":"Definition of the public APIs exposed by Amazon Machine Learning",
  "operations":{
    "AddTags":{
      "name":"AddTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsInput"},
      "output":{
        "shape":"AddTagsOutput",
        "documentation":"<p>Amazon ML returns the following elements. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InvalidTagException",
          "exception":true
        },
        {
          "shape":"TagLimitExceededException",
          "exception":true
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.</p>"
    },
    "CreateBatchPrediction":{
      "name":"CreateBatchPrediction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateBatchPredictionInput"},
      "output":{
        "shape":"CreateBatchPredictionOutput",
        "documentation":"<p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        },
        {
          "shape":"IdempotentParameterMismatchException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>"
        }
      ],
      "documentation":"<p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p><code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>"
    },
    "CreateDataSourceFromRDS":{
      "name":"CreateDataSourceFromRDS",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDataSourceFromRDSInput"},
      "output":{
        "shape":"CreateDataSourceFromRDSOutput",
        "documentation":"<p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        },
        {
          "shape":"IdempotentParameterMismatchException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>"
        }
      ],
      "documentation":"<p>Creates a <code>DataSource</code> object from an <a href=\"http://aws.amazon.com/rds/\"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>"
    },
    "CreateDataSourceFromRedshift":{
      "name":"CreateDataSourceFromRedshift",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDataSourceFromRedshiftInput"},
      "output":{
        "shape":"CreateDataSourceFromRedshiftOutput",
        "documentation":"<p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        },
        {
          "shape":"IdempotentParameterMismatchException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>"
        }
      ],
      "documentation":"<p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <?oxy_insert_start author=\"laurama\" timestamp=\"20160406T153842-0700\"><p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p> <?oxy_insert_end>"
    },
    "CreateDataSourceFromS3":{
      "name":"CreateDataSourceFromS3",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDataSourceFromS3Input"},
      "output":{
        "shape":"CreateDataSourceFromS3Output",
        "documentation":"<p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        },
        {
          "shape":"IdempotentParameterMismatchException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>"
        }
      ],
      "documentation":"<p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>"
    },
    "CreateEvaluation":{
      "name":"CreateEvaluation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateEvaluationInput"},
      "output":{
        "shape":"CreateEvaluationOutput",
        "documentation":"<p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p><code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        },
        {
          "shape":"IdempotentParameterMismatchException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>"
        }
      ],
      "documentation":"<p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p><code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>"
    },
    "CreateMLModel":{
      "name":"CreateMLModel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateMLModelInput"},
      "output":{
        "shape":"CreateMLModelOutput",
        "documentation":"<p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        },
        {
          "shape":"IdempotentParameterMismatchException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>"
        }
      ],
      "documentation":"<p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p><code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>"
    },
    "CreateRealtimeEndpoint":{
      "name":"CreateRealtimeEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateRealtimeEndpointInput"},
      "output":{
        "shape":"CreateRealtimeEndpointOutput",
        "documentation":"<p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <note> <p>The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> </note>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.</p>"
    },
    "DeleteBatchPrediction":{
      "name":"DeleteBatchPrediction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteBatchPredictionInput"},
      "output":{
        "shape":"DeleteBatchPredictionOutput",
        "documentation":"<p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p><b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>"
    },
    "DeleteDataSource":{
      "name":"DeleteDataSource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDataSourceInput"},
      "output":{
        "shape":"DeleteDataSourceOutput",
        "documentation":"<p> Represents the output of a <code>DeleteDataSource</code> operation.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p><b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>"
    },
    "DeleteEvaluation":{
      "name":"DeleteEvaluation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteEvaluationInput"},
      "output":{
        "shape":"DeleteEvaluationOutput",
        "documentation":"<p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <caution><title>Caution</title> <p>The results of the <code>DeleteEvaluation</code> operation are irreversible.</p></caution>"
    },
    "DeleteMLModel":{
      "name":"DeleteMLModel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteMLModelInput"},
      "output":{
        "shape":"DeleteMLModelOutput",
        "documentation":"<p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p><b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>"
    },
    "DeleteRealtimeEndpoint":{
      "name":"DeleteRealtimeEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRealtimeEndpointInput"},
      "output":{
        "shape":"DeleteRealtimeEndpointOutput",
        "documentation":"<p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Deletes a real time endpoint of an <code>MLModel</code>.</p>"
    },
    "DeleteTags":{
      "name":"DeleteTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTagsInput"},
      "output":{
        "shape":"DeleteTagsOutput",
        "documentation":"<p>Amazon ML returns the following elements. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InvalidTagException",
          "exception":true
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>"
    },
    "DescribeBatchPredictions":{
      "name":"DescribeBatchPredictions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeBatchPredictionsInput"},
      "output":{
        "shape":"DescribeBatchPredictionsOutput",
        "documentation":"<p>Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.</p>"
    },
    "DescribeDataSources":{
      "name":"DescribeDataSources",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDataSourcesInput"},
      "output":{
        "shape":"DescribeDataSourcesOutput",
        "documentation":"<p>Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Returns a list of <code>DataSource</code> that match the search criteria in the request.</p>"
    },
    "DescribeEvaluations":{
      "name":"DescribeEvaluations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEvaluationsInput"},
      "output":{
        "shape":"DescribeEvaluationsOutput",
        "documentation":"<p>Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.</p>"
    },
    "DescribeMLModels":{
      "name":"DescribeMLModels",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeMLModelsInput"},
      "output":{
        "shape":"DescribeMLModelsOutput",
        "documentation":"<p>Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>"
    },
    "DescribeTags":{
      "name":"DescribeTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTagsInput"},
      "output":{
        "shape":"DescribeTagsOutput",
        "documentation":"<p>Amazon ML returns the following elements. </p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Describes one or more of the tags for your Amazon ML object.</p>"
    },
    "GetBatchPrediction":{
      "name":"GetBatchPrediction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetBatchPredictionInput"},
      "output":{
        "shape":"GetBatchPredictionOutput",
        "documentation":"<p>Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.</p>"
    },
    "GetDataSource":{
      "name":"GetDataSource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDataSourceInput"},
      "output":{
        "shape":"GetDataSourceOutput",
        "documentation":"<p>Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p><code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>"
    },
    "GetEvaluation":{
      "name":"GetEvaluation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetEvaluationInput"},
      "output":{
        "shape":"GetEvaluationOutput",
        "documentation":"<p>Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.</p>"
    },
    "GetMLModel":{
      "name":"GetMLModel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetMLModelInput"},
      "output":{
        "shape":"GetMLModelOutput",
        "documentation":"<p>Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p><code>GetMLModel</code> provides results in normal or verbose format. </p>"
    },
    "Predict":{
      "name":"Predict",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PredictInput"},
      "output":{"shape":"PredictOutput"},
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{"httpStatusCode":417},
          "exception":true,
          "documentation":"<p>The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        },
        {
          "shape":"PredictorNotMountedException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>.</p>"
        }
      ],
      "documentation":"<p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <note><title>Note</title> <p>Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p></note>"
    },
    "UpdateBatchPrediction":{
      "name":"UpdateBatchPrediction",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateBatchPredictionInput"},
      "output":{
        "shape":"UpdateBatchPredictionOutput",
        "documentation":"<p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>"
    },
    "UpdateDataSource":{
      "name":"UpdateDataSource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDataSourceInput"},
      "output":{
        "shape":"UpdateDataSourceOutput",
        "documentation":"<p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>"
    },
    "UpdateEvaluation":{
      "name":"UpdateEvaluation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateEvaluationInput"},
      "output":{
        "shape":"UpdateEvaluationOutput",
        "documentation":"<p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>"
    },
    "UpdateMLModel":{
      "name":"UpdateMLModel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateMLModelInput"},
      "output":{
        "shape":"UpdateMLModelOutput",
        "documentation":"<p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>"
      },
      "errors":[
        {
          "shape":"InvalidInputException",
          "error":{"httpStatusCode":400},
          "exception":true,
          "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{"httpStatusCode":404},
          "exception":true,
          "documentation":"<p>A specified resource cannot be located.</p>"
        },
        {
          "shape":"InternalServerException",
          "error":{"httpStatusCode":500},
          "exception":true,
          "fault":true,
          "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
        }
      ],
      "documentation":"<p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>"
    }
  },
  "shapes":{
    "AddTagsInput":{
      "type":"structure",
      "required":[
        "Tags",
        "ResourceId",
        "ResourceType"
      ],
      "members":{
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The key-value pairs to use to create tags. If you specify a key without specifying a value, Amazon ML creates a tag with the specified key and a value of null.</p>"
        },
        "ResourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the ML object to tag. For example, <code>exampleModelId</code>.</p>"
        },
        "ResourceType":{
          "shape":"TaggableResourceType",
          "documentation":"<p>The type of the ML object to tag. </p>"
        }
      }
    },
    "AddTagsOutput":{
      "type":"structure",
      "members":{
        "ResourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the ML object that was tagged.</p>"
        },
        "ResourceType":{
          "shape":"TaggableResourceType",
          "documentation":"<p>The type of the ML object that was tagged.</p>"
        }
      },
      "documentation":"<p>Amazon ML returns the following elements. </p>"
    },
    "Algorithm":{
      "type":"string",
      "enum":["sgd"],
      "documentation":"<p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <code>SGD</code> - Stochastic Gradient Descent.</li> <li> <code>RandomForest</code> - Random forest of decision trees.</li> </ul>"
    },
    "AwsUserArn":{
      "type":"string",
      "pattern":"arn:aws:iam::[0-9]+:((user/.+)|(root))",
      "documentation":"<p>An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.</p>"
    },
    "BatchPrediction":{
      "type":"structure",
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>BatchPrediction</code> at creation. This value should be identical to the value of the <code>BatchPredictionID</code> in the request. </p>"
        },
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>MLModel</code> that generated predictions for the <code>BatchPrediction</code> request.</p>"
        },
        "BatchPredictionDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>DataSource</code> that points to the group of observations to predict.</p>"
        },
        "InputDataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>"
        },
        "CreatedByIamUser":{
          "shape":"AwsUserArn",
          "documentation":"<p>The AWS user account that invoked the <code>BatchPrediction</code>. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time that the <code>BatchPrediction</code> was created. The time is expressed in epoch time.</p>"
        },
        "LastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.</p>"
        },
        "Name":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>BatchPrediction</code>.</p>"
        },
        "Status":{
          "shape":"EntityStatus",
          "documentation":"<p>The status of the <code>BatchPrediction</code>. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to generate predictions for a batch of observations.</li> <li> <code>INPROGRESS</code> - The process is underway.</li> <li> <code>FAILED</code> - The request to perform a batch prediction did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The batch prediction process completed successfully.</li> <li> <code>DELETED</code> - The <code>BatchPrediction</code> is marked as deleted. It is not usable.</li> </ul>"
        },
        "OutputUri":{
          "shape":"S3Url",
          "documentation":"<p>The location of an Amazon S3 bucket or directory to receive the operation results. The following substrings are not allowed in the <code>s3 key</code> portion of the <code>outputURI</code> field: ':', '//', '/./', '/../'.</p>"
        },
        "Message":{
          "shape":"Message",
          "documentation":"<p>A description of the most recent details about processing the batch prediction request.</p>"
        },
        "ComputeTime":{"shape":"LongType"},
        "FinishedAt":{"shape":"EpochTime"},
        "StartedAt":{"shape":"EpochTime"},
        "TotalRecordCount":{"shape":"LongType"},
        "InvalidRecordCount":{"shape":"LongType"}
      },
      "documentation":"<p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>"
    },
    "BatchPredictionFilterVariable":{
      "type":"string",
      "enum":[
        "CreatedAt",
        "LastUpdatedAt",
        "Status",
        "Name",
        "IAMUser",
        "MLModelId",
        "DataSourceId",
        "DataURI"
      ],
      "documentation":"<p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul>"
    },
    "BatchPredictions":{
      "type":"list",
      "member":{"shape":"BatchPrediction"}
    },
    "ComparatorValue":{
      "type":"string",
      "max":1024,
      "pattern":".*\\S.*|^$",
      "documentation":"<p>The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.</p>"
    },
    "ComputeStatistics":{"type":"boolean"},
    "CreateBatchPredictionInput":{
      "type":"structure",
      "required":[
        "BatchPredictionId",
        "MLModelId",
        "BatchPredictionDataSourceId",
        "OutputUri"
      ],
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>.</p>"
        },
        "BatchPredictionName":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>BatchPrediction</code>. <code>BatchPredictionName</code> can only use the UTF-8 character set.</p>"
        },
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>MLModel</code> that will generate predictions for the group of observations. </p>"
        },
        "BatchPredictionDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>DataSource</code> that points to the group of observations to predict.</p>"
        },
        "OutputUri":{
          "shape":"S3Url",
          "documentation":"<p>The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory to store the batch prediction results. The following substrings are not allowed in the <code>s3 key</code> portion of the <code>outputURI</code> field: ':', '//', '/./', '/../'.</p> <p>Amazon ML needs permissions to store and retrieve the logs on your behalf. For information about how to set permissions, see the <a href=\"http://docs.aws.amazon.com/machine-learning/latest/dg\">Amazon Machine Learning Developer Guide</a>.</p>"
        }
      }
    },
    "CreateBatchPredictionOutput":{
      "type":"structure",
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>. This value is identical to the value of the <code>BatchPredictionId</code> in the request.</p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>"
    },
    "CreateDataSourceFromRDSInput":{
      "type":"structure",
      "required":[
        "DataSourceId",
        "RDSData",
        "RoleARN"
      ],
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>DataSource</code>. Typically, an Amazon Resource Number (ARN) becomes the ID for a <code>DataSource</code>.</p>"
        },
        "DataSourceName":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>DataSource</code>.</p>"
        },
        "RDSData":{
          "shape":"RDSDataSpec",
          "documentation":"<p>The data specification of an Amazon RDS <code>DataSource</code>:</p> <ul> <li><p>DatabaseInformation - <ul> <li> <code>DatabaseName</code> - The name of the Amazon RDS database.</li> <li> <code>InstanceIdentifier </code> - A unique identifier for the Amazon RDS database instance.</li> </ul> </p></li> <li><p>DatabaseCredentials - AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon RDS database.</p></li> <li><p>ResourceRole - A role (DataPipelineDefaultResourceRole) assumed by an EC2 instance to carry out the copy task from Amazon RDS to Amazon Simple Storage Service (Amazon S3). For more information, see <a href=\"http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html\">Role templates</a> for data pipelines.</p></li> <li><p>ServiceRole - A role (DataPipelineDefaultRole) assumed by the AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href=\"http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html\">Role templates</a> for data pipelines.</p></li> <li><p>SecurityInfo - The security information to use to access an RDS DB instance. You need to set up appropriate ingress rules for the security entity IDs provided to allow access to the Amazon RDS instance. Specify a [<code>SubnetId</code>, <code>SecurityGroupIds</code>] pair for a VPC-based RDS DB instance.</p></li> <li><p>SelectSqlQuery - A query that is used to retrieve the observation data for the <code>Datasource</code>.</p></li> <li><p>S3StagingLocation - The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using <code>SelectSqlQuery</code> is stored in this location.</p></li> <li><p>DataSchemaUri - The Amazon S3 location of the <code>DataSchema</code>.</p></li> <li><p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p></li> <li> <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>Datasource</code>. </p> <br> <p> Sample - <code> \"{\\\"splitting\\\":{\\\"percentBegin\\\":10,\\\"percentEnd\\\":60}}\"</code> </p> </li> </ul>"
        },
        "RoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The role that Amazon ML assumes on behalf of the user to create and activate a data pipeline in the user's account and copy data using the <code>SelectSqlQuery</code> query from Amazon RDS to Amazon S3.</p> <p> </p>"
        },
        "ComputeStatistics":{
          "shape":"ComputeStatistics",
          "documentation":"<p>The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training. This parameter must be set to <code>true</code> if the <code></code>DataSource<code></code> needs to be used for <code>MLModel</code> training. </p>"
        }
      }
    },
    "CreateDataSourceFromRDSOutput":{
      "type":"structure",
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the <code>DataSourceID</code> in the request. </p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p>"
    },
    "CreateDataSourceFromRedshiftInput":{
      "type":"structure",
      "required":[
        "DataSourceId",
        "DataSpec",
        "RoleARN"
      ],
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>DataSource</code>.</p>"
        },
        "DataSourceName":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>DataSource</code>. </p>"
        },
        "DataSpec":{
          "shape":"RedshiftDataSpec",
          "documentation":"<p>The data specification of an Amazon Redshift <code>DataSource</code>:</p> <ul> <li><p>DatabaseInformation - <ul> <li> <code>DatabaseName</code> - The name of the Amazon Redshift database. </li> <li> <code> ClusterIdentifier</code> - The unique ID for the Amazon Redshift cluster.</li> </ul></p></li> <li><p>DatabaseCredentials - The AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon Redshift database.</p></li> <li><p>SelectSqlQuery - The query that is used to retrieve the observation data for the <code>Datasource</code>.</p></li> <li><p>S3StagingLocation - The Amazon Simple Storage Service (Amazon S3) location for staging Amazon Redshift data. The data retrieved from Amazon Redshift using the <code>SelectSqlQuery</code> query is stored in this location.</p></li> <li><p>DataSchemaUri - The Amazon S3 location of the <code>DataSchema</code>.</p></li> <li><p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p></li> <li> <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>DataSource</code>.</p> <p> Sample - <code> \"{\\\"splitting\\\":{\\\"percentBegin\\\":10,\\\"percentEnd\\\":60}}\"</code> </p> </li> </ul>"
        },
        "RoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on behalf of the user to create the following: </p> <p> <ul> <li><p>A security group to allow Amazon ML to execute the <code>SelectSqlQuery</code> query on an Amazon Redshift cluster</p></li> <li><p>An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the <code>S3StagingLocation</code></p></li> </ul> </p>"
        },
        "ComputeStatistics":{
          "shape":"ComputeStatistics",
          "documentation":"<p>The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training. This parameter must be set to <code>true</code> if the <code>DataSource</code> needs to be used for <code>MLModel</code> training.</p>"
        }
      }
    },
    "CreateDataSourceFromRedshiftOutput":{
      "type":"structure",
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the <code>DataSourceID</code> in the request. </p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>"
    },
    "CreateDataSourceFromS3Input":{
      "type":"structure",
      "required":[
        "DataSourceId",
        "DataSpec"
      ],
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied identifier that uniquely identifies the <code>DataSource</code>. </p>"
        },
        "DataSourceName":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>DataSource</code>. </p>"
        },
        "DataSpec":{
          "shape":"S3DataSpec",
          "documentation":"<p>The data specification of a <code>DataSource</code>:</p> <ul> <li><p>DataLocationS3 - The Amazon S3 location of the observation data.</p></li> <li><p>DataSchemaLocationS3 - The Amazon S3 location of the <code>DataSchema</code>.</p></li> <li><p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p></li> <li> <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>Datasource</code>. </p> <p> Sample - <code> \"{\\\"splitting\\\":{\\\"percentBegin\\\":10,\\\"percentEnd\\\":60}}\"</code> </p> </li> </ul>"
        },
        "ComputeStatistics":{
          "shape":"ComputeStatistics",
          "documentation":"<p>The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training. This parameter must be set to <code>true</code> if the <code></code>DataSource<code></code> needs to be used for <code>MLModel</code> training.</p>"
        }
      }
    },
    "CreateDataSourceFromS3Output":{
      "type":"structure",
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>DataSource</code>. This value should be identical to the value of the <code>DataSourceID</code> in the request. </p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>"
    },
    "CreateEvaluationInput":{
      "type":"structure",
      "required":[
        "EvaluationId",
        "MLModelId",
        "EvaluationDataSourceId"
      ],
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>Evaluation</code>.</p>"
        },
        "EvaluationName":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>Evaluation</code>.</p>"
        },
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>MLModel</code> to evaluate.</p> <p>The schema used in creating the <code>MLModel</code> must match the schema of the <code>DataSource</code> used in the <code>Evaluation</code>.</p>"
        },
        "EvaluationDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>DataSource</code> for the evaluation. The schema of the <code>DataSource</code> must match the schema used to create the <code>MLModel</code>.</p>"
        }
      }
    },
    "CreateEvaluationOutput":{
      "type":"structure",
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>The user-supplied ID that uniquely identifies the <code>Evaluation</code>. This value should be identical to the value of the <code>EvaluationId</code> in the request.</p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p><code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p>"
    },
    "CreateMLModelInput":{
      "type":"structure",
      "required":[
        "MLModelId",
        "MLModelType",
        "TrainingDataSourceId"
      ],
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>MLModel</code>.</p>"
        },
        "MLModelName":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>MLModel</code>.</p>"
        },
        "MLModelType":{
          "shape":"MLModelType",
          "documentation":"<p>The category of supervised learning that this <code>MLModel</code> will address. Choose from the following types:</p> <ul> <li>Choose <code>REGRESSION</code> if the <code>MLModel</code> will be used to predict a numeric value.</li> <li>Choose <code>BINARY</code> if the <code>MLModel</code> result has two possible values.</li> <li>Choose <code>MULTICLASS</code> if the <code>MLModel</code> result has a limited number of values. </li> </ul> <p> For more information, see the <a href=\"http://docs.aws.amazon.com/machine-learning/latest/dg\">Amazon Machine Learning Developer Guide</a>.</p>"
        },
        "Parameters":{
          "shape":"TrainingParameters",
          "documentation":"<p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters: </p> <ul> <li> <p><code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li><p><code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p></li> <li> <p><code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>. We <?oxy_insert_start author=\"laurama\" timestamp=\"20160329T131121-0700\">strongly recommend that you shuffle your data.<?oxy_insert_end></p> </li> <li> <p><code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p><code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>"
        },
        "TrainingDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The <code>DataSource</code> that points to the training data.</p>"
        },
        "Recipe":{
          "shape":"Recipe",
          "documentation":"<p>The data recipe for creating the <code>MLModel</code>. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.</p>"
        },
        "RecipeUri":{
          "shape":"S3Url",
          "documentation":"<p>The Amazon Simple Storage Service (Amazon S3) location and file name that contains the <code>MLModel</code> recipe. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.</p>"
        }
      }
    },
    "CreateMLModelOutput":{
      "type":"structure",
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelId</code> in the request. </p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p>"
    },
    "CreateRealtimeEndpointInput":{
      "type":"structure",
      "required":["MLModelId"],
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>MLModel</code> during creation.</p>"
        }
      }
    },
    "CreateRealtimeEndpointOutput":{
      "type":"structure",
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelId</code> in the request.</p>"
        },
        "RealtimeEndpointInfo":{
          "shape":"RealtimeEndpointInfo",
          "documentation":"<p>The endpoint information of the <code>MLModel</code> </p>"
        }
      },
      "documentation":"<p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <note> <p>The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> </note>"
    },
    "DataRearrangement":{"type":"string"},
    "DataSchema":{
      "type":"string",
      "max":131071,
      "documentation":"<p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ \"version\": \"1.0\", \"recordAnnotationFieldName\": \"F1\", \"recordWeightFieldName\": \"F2\", \"targetFieldName\": \"F3\", \"dataFormat\": \"CSV\", \"dataFileContainsHeader\": true, \"variables\": [ { \"fieldName\": \"F1\", \"fieldType\": \"TEXT\" }, { \"fieldName\": \"F2\", \"fieldType\": \"NUMERIC\" }, { \"fieldName\": \"F3\", \"fieldType\": \"CATEGORICAL\" }, { \"fieldName\": \"F4\", \"fieldType\": \"NUMERIC\" }, { \"fieldName\": \"F5\", \"fieldType\": \"CATEGORICAL\" }, { \"fieldName\": \"F6\", \"fieldType\": \"TEXT\" }, { \"fieldName\": \"F7\", \"fieldType\": \"WEIGHTED_INT_SEQUENCE\" }, { \"fieldName\": \"F8\", \"fieldType\": \"WEIGHTED_STRING_SEQUENCE\" } ], \"excludedVariableNames\": [ \"F6\" ] } </p>"
    },
    "DataSource":{
      "type":"structure",
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID that is assigned to the <code>DataSource</code> during creation.</p>"
        },
        "DataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location and name of the data in Amazon Simple Storage Service (Amazon S3) that is used by a <code>DataSource</code>.</p>"
        },
        "DataRearrangement":{
          "shape":"DataRearrangement",
          "documentation":"<p>A JSON string that represents the splitting and rearrangement requirement used when this <code>DataSource</code> was created.</p>"
        },
        "CreatedByIamUser":{
          "shape":"AwsUserArn",
          "documentation":"<p>The AWS user account from which the <code>DataSource</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time that the <code>DataSource</code> was created. The time is expressed in epoch time.</p>"
        },
        "LastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.</p>"
        },
        "DataSizeInBytes":{
          "shape":"LongType",
          "documentation":"<p>The total number of observations contained in the data files that the <code>DataSource</code> references.</p>"
        },
        "NumberOfFiles":{
          "shape":"LongType",
          "documentation":"<p>The number of data files referenced by the <code>DataSource</code>.</p>"
        },
        "Name":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>DataSource</code>.</p>"
        },
        "Status":{
          "shape":"EntityStatus",
          "documentation":"<p>The current status of the <code>DataSource</code>. This element can have one of the following values: </p> <ul> <li>PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create a <code>DataSource</code>.</li> <li>INPROGRESS - The creation process is underway.</li> <li>FAILED - The request to create a <code>DataSource</code> did not run to completion. It is not usable.</li> <li>COMPLETED - The creation process completed successfully.</li> <li>DELETED - The <code>DataSource</code> is marked as deleted. It is not usable.</li> </ul>"
        },
        "Message":{
          "shape":"Message",
          "documentation":"<p>A description of the most recent details about creating the <code>DataSource</code>.</p>"
        },
        "RedshiftMetadata":{"shape":"RedshiftMetadata"},
        "RDSMetadata":{"shape":"RDSMetadata"},
        "RoleARN":{"shape":"RoleARN"},
        "ComputeStatistics":{
          "shape":"ComputeStatistics",
          "documentation":"<p> The parameter is <code>true</code> if statistics need to be generated from the observation data. </p>"
        },
        "ComputeTime":{"shape":"LongType"},
        "FinishedAt":{"shape":"EpochTime"},
        "StartedAt":{"shape":"EpochTime"}
      },
      "documentation":"<p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>"
    },
    "DataSourceFilterVariable":{
      "type":"string",
      "enum":[
        "CreatedAt",
        "LastUpdatedAt",
        "Status",
        "Name",
        "DataLocationS3",
        "IAMUser"
      ],
      "documentation":"<p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <b> </b> <code>Name</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</li> </ul> <note><title>Note</title> <p>The variable names should match the variable names in the <code>DataSource</code>.</p> </note>"
    },
    "DataSources":{
      "type":"list",
      "member":{"shape":"DataSource"}
    },
    "DeleteBatchPredictionInput":{
      "type":"structure",
      "required":["BatchPredictionId"],
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>.</p>"
        }
      }
    },
    "DeleteBatchPredictionOutput":{
      "type":"structure",
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>. This value should be identical to the value of the <code>BatchPredictionID</code> in the request.</p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>"
    },
    "DeleteDataSourceInput":{
      "type":"structure",
      "required":["DataSourceId"],
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>DataSource</code>.</p>"
        }
      }
    },
    "DeleteDataSourceOutput":{
      "type":"structure",
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>DataSource</code>. This value should be identical to the value of the <code>DataSourceID</code> in the request.</p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>DeleteDataSource</code> operation.</p>"
    },
    "DeleteEvaluationInput":{
      "type":"structure",
      "required":["EvaluationId"],
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>Evaluation</code> to delete.</p>"
        }
      }
    },
    "DeleteEvaluationOutput":{
      "type":"structure",
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>Evaluation</code>. This value should be identical to the value of the <code>EvaluationId</code> in the request.</p>"
        }
      },
      "documentation":"<p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p>"
    },
    "DeleteMLModelInput":{
      "type":"structure",
      "required":["MLModelId"],
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>MLModel</code>.</p>"
        }
      }
    },
    "DeleteMLModelOutput":{
      "type":"structure",
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelID</code> in the request.</p>"
        }
      },
      "documentation":"<p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p>"
    },
    "DeleteRealtimeEndpointInput":{
      "type":"structure",
      "required":["MLModelId"],
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>MLModel</code> during creation.</p>"
        }
      }
    },
    "DeleteRealtimeEndpointOutput":{
      "type":"structure",
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelId</code> in the request.</p>"
        },
        "RealtimeEndpointInfo":{
          "shape":"RealtimeEndpointInfo",
          "documentation":"<p>The endpoint information of the <code>MLModel</code> </p>"
        }
      },
      "documentation":"<p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>"
    },
    "DeleteTagsInput":{
      "type":"structure",
      "required":[
        "TagKeys",
        "ResourceId",
        "ResourceType"
      ],
      "members":{
        "TagKeys":{
          "shape":"TagKeyList",
          "documentation":"<p>One or more tags to delete.</p>"
        },
        "ResourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the tagged ML object. For example, <code>exampleModelId</code>.</p>"
        },
        "ResourceType":{
          "shape":"TaggableResourceType",
          "documentation":"<p>The type of the tagged ML object.</p>"
        }
      }
    },
    "DeleteTagsOutput":{
      "type":"structure",
      "members":{
        "ResourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the ML object from which tags were deleted.</p>"
        },
        "ResourceType":{
          "shape":"TaggableResourceType",
          "documentation":"<p>The type of the ML object from which tags were deleted.</p>"
        }
      },
      "documentation":"<p>Amazon ML returns the following elements. </p>"
    },
    "DescribeBatchPredictionsInput":{
      "type":"structure",
      "members":{
        "FilterVariable":{
          "shape":"BatchPredictionFilterVariable",
          "documentation":"<p>Use one of the following variables to filter a list of <code>BatchPrediction</code>:</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to the <code>BatchPrediction</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to the <code>BatchPrediction</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of the <code>BatchPrediction</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.</li> </ul>"
        },
        "EQ":{
          "shape":"ComparatorValue",
          "documentation":"<p>The equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>"
        },
        "GT":{
          "shape":"ComparatorValue",
          "documentation":"<p>The greater than operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>"
        },
        "LT":{
          "shape":"ComparatorValue",
          "documentation":"<p>The less than operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>"
        },
        "GE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The greater than or equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. </p>"
        },
        "LE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The less than or equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>"
        },
        "NE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The not equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>"
        },
        "Prefix":{
          "shape":"ComparatorValue",
          "documentation":"<p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, a <code>Batch Prediction</code> operation could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>BatchPrediction</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li><p>2014-09</p></li> <li><p>2014-09-09</p></li> <li><p>2014-09-09-Holiday</p></li> </ul>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>A two-value parameter that determines the sequence of the resulting list of <code>MLModel</code>s.</p> <ul> <li> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</li> <li> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>"
        },
        "NextToken":{
          "shape":"StringType",
          "documentation":"<p>An ID of the page in the paginated results.</p>"
        },
        "Limit":{
          "shape":"PageLimit",
          "documentation":"<p>The number of pages of information to include in the result. The range of acceptable values is <code>1</code> through <code>100</code>. The default value is <code>100</code>.</p>"
        }
      }
    },
    "DescribeBatchPredictionsOutput":{
      "type":"structure",
      "members":{
        "Results":{
          "shape":"BatchPredictions",
          "documentation":"<p>A list of <code>BatchPrediction</code> objects that meet the search criteria. </p>"
        },
        "NextToken":{
          "shape":"StringType",
          "documentation":"<p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>"
        }
      },
      "documentation":"<p>Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.</p>"
    },
    "DescribeDataSourcesInput":{
      "type":"structure",
      "members":{
        "FilterVariable":{
          "shape":"DataSourceFilterVariable",
          "documentation":"<p>Use one of the following variables to filter a list of <code>DataSource</code>:</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation dates.</li> <li> <code>Status</code> - Sets the search criteria to <code>DataSource</code> statuses.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <b> </b> <code>Name</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</li> </ul>"
        },
        "EQ":{
          "shape":"ComparatorValue",
          "documentation":"<p>The equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>"
        },
        "GT":{
          "shape":"ComparatorValue",
          "documentation":"<p>The greater than operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>"
        },
        "LT":{
          "shape":"ComparatorValue",
          "documentation":"<p>The less than operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>"
        },
        "GE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The greater than or equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. </p>"
        },
        "LE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The less than or equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>"
        },
        "NE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The not equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>"
        },
        "Prefix":{
          "shape":"ComparatorValue",
          "documentation":"<p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, a <code>DataSource</code> could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>DataSource</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li><p>2014-09</p></li> <li><p>2014-09-09</p></li> <li><p>2014-09-09-Holiday</p></li> </ul>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>A two-value parameter that determines the sequence of the resulting list of <code>DataSource</code>.</p> <ul> <li> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</li> <li> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>"
        },
        "NextToken":{
          "shape":"StringType",
          "documentation":"<p>The ID of the page in the paginated results.</p>"
        },
        "Limit":{
          "shape":"PageLimit",
          "documentation":"<p> The maximum number of <code>DataSource</code> to include in the result.</p>"
        }
      }
    },
    "DescribeDataSourcesOutput":{
      "type":"structure",
      "members":{
        "Results":{
          "shape":"DataSources",
          "documentation":"<p>A list of <code>DataSource</code> that meet the search criteria. </p>"
        },
        "NextToken":{
          "shape":"StringType",
          "documentation":"<p>An ID of the next page in the paginated results that indicates at least one more page follows.</p>"
        }
      },
      "documentation":"<p>Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.</p>"
    },
    "DescribeEvaluationsInput":{
      "type":"structure",
      "members":{
        "FilterVariable":{
          "shape":"EvaluationFilterVariable",
          "documentation":"<p>Use one of the following variable to filter a list of <code>Evaluation</code> objects:</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to the <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to the <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an <code>Evaluation</code>.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in <code>Evaluation</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in <code>Evaluation</code>. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.</li> </ul>"
        },
        "EQ":{
          "shape":"ComparatorValue",
          "documentation":"<p>The equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>"
        },
        "GT":{
          "shape":"ComparatorValue",
          "documentation":"<p>The greater than operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>"
        },
        "LT":{
          "shape":"ComparatorValue",
          "documentation":"<p>The less than operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>"
        },
        "GE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The greater than or equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. </p>"
        },
        "LE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The less than or equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>"
        },
        "NE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The not equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>"
        },
        "Prefix":{
          "shape":"ComparatorValue",
          "documentation":"<p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, an <code>Evaluation</code> could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>Evaluation</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li><p>2014-09</p></li> <li><p>2014-09-09</p></li> <li><p>2014-09-09-Holiday</p></li> </ul>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>A two-value parameter that determines the sequence of the resulting list of <code>Evaluation</code>.</p> <ul> <li> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</li> <li> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>"
        },
        "NextToken":{
          "shape":"StringType",
          "documentation":"<p>The ID of the page in the paginated results.</p>"
        },
        "Limit":{
          "shape":"PageLimit",
          "documentation":"<p> The maximum number of <code>Evaluation</code> to include in the result.</p>"
        }
      }
    },
    "DescribeEvaluationsOutput":{
      "type":"structure",
      "members":{
        "Results":{
          "shape":"Evaluations",
          "documentation":"<p>A list of <code>Evaluation</code> that meet the search criteria. </p>"
        },
        "NextToken":{
          "shape":"StringType",
          "documentation":"<p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>"
        }
      },
      "documentation":"<p>Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.</p>"
    },
    "DescribeMLModelsInput":{
      "type":"structure",
      "members":{
        "FilterVariable":{
          "shape":"MLModelFilterVariable",
          "documentation":"<p>Use one of the following variables to filter a list of <code>MLModel</code>:</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>MLModel</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>MLModel</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>MLModel</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>MLModel</code> creation.</li> <li> <code>TrainingDataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used to train one or more <code>MLModel</code>.</li> <li> <code>RealtimeEndpointStatus</code> - Sets the search criteria to the <code>MLModel</code> real-time endpoint status.</li> <li> <code>MLModelType</code> - Sets the search criteria to <code>MLModel</code> type: binary, regression, or multi-class.</li> <li> <code>Algorithm</code> - Sets the search criteria to the algorithm that the <code>MLModel</code> uses.</li> <li> <code>TrainingDataURI</code> - Sets the search criteria to the data file(s) used in training a <code>MLModel</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul>"
        },
        "EQ":{
          "shape":"ComparatorValue",
          "documentation":"<p>The equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>"
        },
        "GT":{
          "shape":"ComparatorValue",
          "documentation":"<p>The greater than operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>"
        },
        "LT":{
          "shape":"ComparatorValue",
          "documentation":"<p>The less than operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>"
        },
        "GE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The greater than or equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. </p>"
        },
        "LE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The less than or equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>"
        },
        "NE":{
          "shape":"ComparatorValue",
          "documentation":"<p>The not equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>"
        },
        "Prefix":{
          "shape":"ComparatorValue",
          "documentation":"<p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, an <code>MLModel</code> could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>MLModel</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li><p>2014-09</p></li> <li><p>2014-09-09</p></li> <li><p>2014-09-09-Holiday</p></li> </ul>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>A two-value parameter that determines the sequence of the resulting list of <code>MLModel</code>.</p> <ul> <li> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</li> <li> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>"
        },
        "NextToken":{
          "shape":"StringType",
          "documentation":"<p>The ID of the page in the paginated results.</p>"
        },
        "Limit":{
          "shape":"PageLimit",
          "documentation":"<p>The number of pages of information to include in the result. The range of acceptable values is <code>1</code> through <code>100</code>. The default value is <code>100</code>.</p>"
        }
      }
    },
    "DescribeMLModelsOutput":{
      "type":"structure",
      "members":{
        "Results":{
          "shape":"MLModels",
          "documentation":"<p>A list of <code>MLModel</code> that meet the search criteria.</p>"
        },
        "NextToken":{
          "shape":"StringType",
          "documentation":"<p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>"
        }
      },
      "documentation":"<p>Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.</p>"
    },
    "DescribeTagsInput":{
      "type":"structure",
      "required":[
        "ResourceId",
        "ResourceType"
      ],
      "members":{
        "ResourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the ML object. For example, <code>exampleModelId</code>. </p>"
        },
        "ResourceType":{
          "shape":"TaggableResourceType",
          "documentation":"<p>The type of the ML object.</p>"
        }
      }
    },
    "DescribeTagsOutput":{
      "type":"structure",
      "members":{
        "ResourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the tagged ML object.</p>"
        },
        "ResourceType":{
          "shape":"TaggableResourceType",
          "documentation":"<p>The type of the tagged ML object.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>A list of tags associated with the ML object.</p>"
        }
      },
      "documentation":"<p>Amazon ML returns the following elements. </p>"
    },
    "DetailsAttributes":{
      "type":"string",
      "enum":[
        "PredictiveModelType",
        "Algorithm"
      ],
      "documentation":"Contains the key values of <code>DetailsMap</code>: <code>PredictiveModelType</code> - Indicates the type of the <code>MLModel</code>. <code>Algorithm</code> - Indicates the algorithm that was used for the <code>MLModel</code>."
    },
    "DetailsMap":{
      "type":"map",
      "key":{"shape":"DetailsAttributes"},
      "value":{"shape":"DetailsValue"},
      "documentation":"Provides any additional details regarding the prediction."
    },
    "DetailsValue":{
      "type":"string",
      "min":1
    },
    "EDPPipelineId":{
      "type":"string",
      "min":1,
      "max":1024
    },
    "EDPResourceRole":{
      "type":"string",
      "min":1,
      "max":64
    },
    "EDPSecurityGroupId":{
      "type":"string",
      "min":1,
      "max":255
    },
    "EDPSecurityGroupIds":{
      "type":"list",
      "member":{"shape":"EDPSecurityGroupId"}
    },
    "EDPServiceRole":{
      "type":"string",
      "min":1,
      "max":64
    },
    "EDPSubnetId":{
      "type":"string",
      "min":1,
      "max":255
    },
    "EntityId":{
      "type":"string",
      "min":1,
      "max":64,
      "pattern":"[a-zA-Z0-9_.-]+"
    },
    "EntityName":{
      "type":"string",
      "max":1024,
      "pattern":".*\\S.*|^$",
      "documentation":"<p>A user-supplied name or description of the Amazon ML resource.</p>"
    },
    "EntityStatus":{
      "type":"string",
      "enum":[
        "PENDING",
        "INPROGRESS",
        "FAILED",
        "COMPLETED",
        "DELETED"
      ],
      "documentation":"<p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul>"
    },
    "EpochTime":{
      "type":"timestamp",
      "documentation":"<p>A timestamp represented in epoch time.</p>"
    },
    "ErrorCode":{"type":"integer"},
    "ErrorMessage":{
      "type":"string",
      "max":2048
    },
    "Evaluation":{
      "type":"structure",
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>The ID that is assigned to the <code>Evaluation</code> at creation.</p>"
        },
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>MLModel</code> that is the focus of the evaluation.</p>"
        },
        "EvaluationDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>DataSource</code> that is used to evaluate the <code>MLModel</code>.</p>"
        },
        "InputDataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location and name of the data in Amazon Simple Storage Server (Amazon S3) that is used in the evaluation.</p>"
        },
        "CreatedByIamUser":{
          "shape":"AwsUserArn",
          "documentation":"<p>The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.</p>"
        },
        "LastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.</p>"
        },
        "Name":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>Evaluation</code>. </p>"
        },
        "Status":{
          "shape":"EntityStatus",
          "documentation":"<p>The status of the evaluation. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to evaluate an <code>MLModel</code>.</li> <li> <code>INPROGRESS</code> - The evaluation is underway.</li> <li> <code>FAILED</code> - The request to evaluate an <code>MLModel</code> did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The evaluation process completed successfully.</li> <li> <code>DELETED</code> - The <code>Evaluation</code> is marked as deleted. It is not usable.</li> </ul>"
        },
        "PerformanceMetrics":{
          "shape":"PerformanceMetrics",
          "documentation":"<p>Measurements of how well the <code>MLModel</code> performed, using observations referenced by the <code>DataSource</code>. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href=\"http://docs.aws.amazon.com/machine-learning/latest/dg\">Amazon Machine Learning Developer Guide</a>. </p>"
        },
        "Message":{
          "shape":"Message",
          "documentation":"<p>A description of the most recent details about evaluating the <code>MLModel</code>.</p>"
        },
        "ComputeTime":{"shape":"LongType"},
        "FinishedAt":{"shape":"EpochTime"},
        "StartedAt":{"shape":"EpochTime"}
      },
      "documentation":"<p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>"
    },
    "EvaluationFilterVariable":{
      "type":"string",
      "enum":[
        "CreatedAt",
        "LastUpdatedAt",
        "Status",
        "Name",
        "IAMUser",
        "MLModelId",
        "DataSourceId",
        "DataURI"
      ],
      "documentation":"<p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul>"
    },
    "Evaluations":{
      "type":"list",
      "member":{"shape":"Evaluation"}
    },
    "GetBatchPredictionInput":{
      "type":"structure",
      "required":["BatchPredictionId"],
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>An ID assigned to the <code>BatchPrediction</code> at creation.</p>"
        }
      }
    },
    "GetBatchPredictionOutput":{
      "type":"structure",
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>An ID assigned to the <code>BatchPrediction</code> at creation. This value should be identical to the value of the <code>BatchPredictionID</code> in the request.</p>"
        },
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>MLModel</code> that generated predictions for the <code>BatchPrediction</code> request.</p>"
        },
        "BatchPredictionDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>DataSource</code> that was used to create the <code>BatchPrediction</code>. </p>"
        },
        "InputDataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>"
        },
        "CreatedByIamUser":{
          "shape":"AwsUserArn",
          "documentation":"<p>The AWS user account that invoked the <code>BatchPrediction</code>. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time when the <code>BatchPrediction</code> was created. The time is expressed in epoch time.</p>"
        },
        "LastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to <code>BatchPrediction</code>. The time is expressed in epoch time.</p>"
        },
        "Name":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>BatchPrediction</code>.</p>"
        },
        "Status":{
          "shape":"EntityStatus",
          "documentation":"<p>The status of the <code>BatchPrediction</code>, which can be one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to generate batch predictions.</li> <li> <code>INPROGRESS</code> - The batch predictions are in progress.</li> <li> <code>FAILED</code> - The request to perform a batch prediction did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The batch prediction process completed successfully.</li> <li> <code>DELETED</code> - The <code>BatchPrediction</code> is marked as deleted. It is not usable.</li> </ul>"
        },
        "OutputUri":{
          "shape":"S3Url",
          "documentation":"<p>The location of an Amazon S3 bucket or directory to receive the operation results.</p>"
        },
        "LogUri":{
          "shape":"PresignedS3Url",
          "documentation":"<p>A link to the file that contains logs of the <code>CreateBatchPrediction</code> operation.</p>"
        },
        "Message":{
          "shape":"Message",
          "documentation":"<p>A description of the most recent details about processing the batch prediction request.</p>"
        },
        "ComputeTime":{
          "shape":"LongType",
          "documentation":"<p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>BatchPrediction</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>BatchPrediction</code> is in the <code>COMPLETED</code> state.</p>"
        },
        "FinishedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The epoch time when Amazon Machine Learning marked the <code>BatchPrediction</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>BatchPrediction</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>"
        },
        "StartedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The epoch time when Amazon Machine Learning marked the <code>BatchPrediction</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>BatchPrediction</code> is in the <code>PENDING</code> state.</p>"
        },
        "TotalRecordCount":{
          "shape":"LongType",
          "documentation":"<p>The number of total records that Amazon Machine Learning saw while processing the <code>BatchPrediction</code>.</p>"
        },
        "InvalidRecordCount":{
          "shape":"LongType",
          "documentation":"<p>The number of invalid records that Amazon Machine Learning saw while processing the <code>BatchPrediction</code>.</p>"
        }
      },
      "documentation":"<p>Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.</p>"
    },
    "GetDataSourceInput":{
      "type":"structure",
      "required":["DataSourceId"],
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>DataSource</code> at creation.</p>"
        },
        "Verbose":{
          "shape":"Verbose",
          "documentation":"<p>Specifies whether the <code>GetDataSource</code> operation should return <code>DataSourceSchema</code>.</p> <p>If true, <code>DataSourceSchema</code> is returned.</p> <p>If false, <code>DataSourceSchema</code> is not returned.</p>"
        }
      }
    },
    "GetDataSourceOutput":{
      "type":"structure",
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>DataSource</code> at creation. This value should be identical to the value of the <code>DataSourceId</code> in the request.</p>"
        },
        "DataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>"
        },
        "DataRearrangement":{
          "shape":"DataRearrangement",
          "documentation":"<p>A JSON string that represents the splitting and rearrangement requirement used when this <code>DataSource</code> was created.</p>"
        },
        "CreatedByIamUser":{
          "shape":"AwsUserArn",
          "documentation":"<p>The AWS user account from which the <code>DataSource</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time that the <code>DataSource</code> was created. The time is expressed in epoch time.</p>"
        },
        "LastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>DataSource</code>. The time is expressed in epoch time.</p>"
        },
        "DataSizeInBytes":{
          "shape":"LongType",
          "documentation":"<p>The total size of observations in the data files.</p>"
        },
        "NumberOfFiles":{
          "shape":"LongType",
          "documentation":"<p>The number of data files referenced by the <code>DataSource</code>.</p>"
        },
        "Name":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>DataSource</code>.</p>"
        },
        "Status":{
          "shape":"EntityStatus",
          "documentation":"<p>The current status of the <code>DataSource</code>. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon ML submitted a request to create a <code>DataSource</code>.</li> <li> <code>INPROGRESS</code> - The creation process is underway.</li> <li> <code>FAILED</code> - The request to create a <code>DataSource</code> did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The creation process completed successfully.</li> <li> <code>DELETED</code> - The <code>DataSource</code> is marked as deleted. It is not usable.</li> </ul>"
        },
        "LogUri":{
          "shape":"PresignedS3Url",
          "documentation":"<p>A link to the file containing logs of <code>CreateDataSourceFrom*</code> operations.</p>"
        },
        "Message":{
          "shape":"Message",
          "documentation":"<p>The user-supplied description of the most recent details about creating the <code>DataSource</code>.</p>"
        },
        "RedshiftMetadata":{"shape":"RedshiftMetadata"},
        "RDSMetadata":{"shape":"RDSMetadata"},
        "RoleARN":{"shape":"RoleARN"},
        "ComputeStatistics":{
          "shape":"ComputeStatistics",
          "documentation":"<p> The parameter is <code>true</code> if statistics need to be generated from the observation data. </p>"
        },
        "ComputeTime":{
          "shape":"LongType",
          "documentation":"<p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>DataSource</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>DataSource</code> is in the <code>COMPLETED</code> state and the <code>ComputeStatistics</code> is set to true.</p>"
        },
        "FinishedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The epoch time when Amazon Machine Learning marked the <code>DataSource</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>DataSource</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>"
        },
        "StartedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The epoch time when Amazon Machine Learning marked the <code>DataSource</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>DataSource</code> is in the <code>PENDING</code> state.</p>"
        },
        "DataSourceSchema":{
          "shape":"DataSchema",
          "documentation":"<p>The schema used by all of the data files of this <code>DataSource</code>.</p> <note><title>Note</title> <p>This parameter is provided as part of the verbose format.</p></note>"
        }
      },
      "documentation":"<p>Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.</p>"
    },
    "GetEvaluationInput":{
      "type":"structure",
      "required":["EvaluationId"],
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>Evaluation</code> to retrieve. The evaluation of each <code>MLModel</code> is recorded and cataloged. The ID provides the means to access the information. </p>"
        }
      }
    },
    "GetEvaluationOutput":{
      "type":"structure",
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>The evaluation ID which is same as the <code>EvaluationId</code> in the request.</p>"
        },
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the <code>MLModel</code> that was the focus of the evaluation.</p>"
        },
        "EvaluationDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The <code>DataSource</code> used for this evaluation.</p>"
        },
        "InputDataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>"
        },
        "CreatedByIamUser":{
          "shape":"AwsUserArn",
          "documentation":"<p>The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.</p>"
        },
        "LastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.</p>"
        },
        "Name":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>Evaluation</code>. </p>"
        },
        "Status":{
          "shape":"EntityStatus",
          "documentation":"<p>The status of the evaluation. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Language (Amazon ML) submitted a request to evaluate an <code>MLModel</code>.</li> <li> <code>INPROGRESS</code> - The evaluation is underway.</li> <li> <code>FAILED</code> - The request to evaluate an <code>MLModel</code> did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The evaluation process completed successfully.</li> <li> <code>DELETED</code> - The <code>Evaluation</code> is marked as deleted. It is not usable.</li> </ul>"
        },
        "PerformanceMetrics":{
          "shape":"PerformanceMetrics",
          "documentation":"<p>Measurements of how well the <code>MLModel</code> performed using observations referenced by the <code>DataSource</code>. One of the following metric is returned based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href=\"http://docs.aws.amazon.com/machine-learning/latest/dg\">Amazon Machine Learning Developer Guide</a>. </p>"
        },
        "LogUri":{
          "shape":"PresignedS3Url",
          "documentation":"<p>A link to the file that contains logs of the <code>CreateEvaluation</code> operation.</p>"
        },
        "Message":{
          "shape":"Message",
          "documentation":"<p>A description of the most recent details about evaluating the <code>MLModel</code>.</p>"
        },
        "ComputeTime":{
          "shape":"LongType",
          "documentation":"<p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>Evaluation</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>Evaluation</code> is in the <code>COMPLETED</code> state.</p>"
        },
        "FinishedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The epoch time when Amazon Machine Learning marked the <code>Evaluation</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>Evaluation</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>"
        },
        "StartedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The epoch time when Amazon Machine Learning marked the <code>Evaluation</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>Evaluation</code> is in the <code>PENDING</code> state.</p>"
        }
      },
      "documentation":"<p>Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.</p>"
    },
    "GetMLModelInput":{
      "type":"structure",
      "required":["MLModelId"],
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>MLModel</code> at creation.</p>"
        },
        "Verbose":{
          "shape":"Verbose",
          "documentation":"<p>Specifies whether the <code>GetMLModel</code> operation should return <code>Recipe</code>.</p> <p>If true, <code>Recipe</code> is returned.</p> <p>If false, <code>Recipe</code> is not returned.</p>"
        }
      }
    },
    "GetMLModelOutput":{
      "type":"structure",
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The MLModel ID<?oxy_insert_start author=\"annbech\" timestamp=\"20160328T151251-0700\">,<?oxy_insert_end> which is same as the <code>MLModelId</code> in the request.</p>"
        },
        "TrainingDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the training <code>DataSource</code>.</p>"
        },
        "CreatedByIamUser":{
          "shape":"AwsUserArn",
          "documentation":"<p>The AWS user account from which the <code>MLModel</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time that the <code>MLModel</code> was created. The time is expressed in epoch time.</p>"
        },
        "LastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.</p>"
        },
        "Name":{
          "shape":"MLModelName",
          "documentation":"<p>A user-supplied name or description of the <code>MLModel</code>.</p>"
        },
        "Status":{
          "shape":"EntityStatus",
          "documentation":"<p>The current status of the <code>MLModel</code>. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to describe a <code>MLModel</code>.</li> <li> <code>INPROGRESS</code> - The request is processing.</li> <li> <code>FAILED</code> - The request did not run to completion. The ML model isn't usable.</li> <li> <code>COMPLETED</code> - The request completed successfully.</li> <li> <code>DELETED</code> - The <code>MLModel</code> is marked as deleted. It isn't usable.</li> </ul>"
        },
        "SizeInBytes":{"shape":"LongType"},
        "EndpointInfo":{
          "shape":"RealtimeEndpointInfo",
          "documentation":"<p>The current endpoint of the <code>MLModel</code></p>"
        },
        "TrainingParameters":{
          "shape":"TrainingParameters",
          "documentation":"<p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters: </p> <ul> <li> <p><code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li><p><code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p></li> <li><p><code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>. We strongly recommend that you shuffle your data.</p></li> <li> <p><code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p><code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>"
        },
        "InputDataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>"
        },
        "MLModelType":{
          "shape":"MLModelType",
          "documentation":"<p>Identifies the <code>MLModel</code> category. The following are the available types: </p> <ul> <li>REGRESSION -- Produces a numeric result. For example, \"What price should a house be listed at?\"</li> <li>BINARY -- Produces one of two possible results. For example, \"Is this an e-commerce website?\"</li> <li>MULTICLASS -- Produces one of several possible results. For example, \"Is this a HIGH, LOW or MEDIUM risk trade?\"</li> </ul>"
        },
        "ScoreThreshold":{
          "shape":"ScoreThreshold",
          "documentation":"<p>The scoring threshold is used in binary classification <code>MLModel</code><?oxy_insert_start author=\"laurama\" timestamp=\"20160329T114851-0700\"> <?oxy_insert_end>models. It marks the boundary between a positive prediction and a negative prediction.</p> <p>Output values greater than or equal to the threshold receive a positive result from the MLModel, such as <code>true</code>. Output values less than the threshold receive a negative response from the MLModel, such as <code>false</code>.</p>"
        },
        "ScoreThresholdLastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.</p>"
        },
        "LogUri":{
          "shape":"PresignedS3Url",
          "documentation":"<p>A link to the file that contains logs of the <code>CreateMLModel</code> operation.</p>"
        },
        "Message":{
          "shape":"Message",
          "documentation":"<p>A description of the most recent details about accessing the <code>MLModel</code>.</p>"
        },
        "ComputeTime":{
          "shape":"LongType",
          "documentation":"<p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>MLModel</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>MLModel</code> is in the <code>COMPLETED</code> state.</p>"
        },
        "FinishedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The epoch time when Amazon Machine Learning marked the <code>MLModel</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>MLModel</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>"
        },
        "StartedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The epoch time when Amazon Machine Learning marked the <code>MLModel</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>MLModel</code> is in the <code>PENDING</code> state.</p>"
        },
        "Recipe":{
          "shape":"Recipe",
          "documentation":"<p>The recipe to use when training the <code>MLModel</code>. The <code>Recipe</code> provides detailed information about the observation data to use during training, and manipulations to perform on the observation data during training.</p> <note><title>Note</title> <p>This parameter is provided as part of the verbose format.</p></note>"
        },
        "Schema":{
          "shape":"DataSchema",
          "documentation":"<p>The schema used by all of the data files referenced by the <code>DataSource</code>.</p> <note><title>Note</title> <p>This parameter is provided as part of the verbose format.</p></note>"
        }
      },
      "documentation":"<p>Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.</p>"
    },
    "IdempotentParameterMismatchException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"},
        "code":{"shape":"ErrorCode"}
      },
      "error":{"httpStatusCode":400},
      "exception":true,
      "documentation":"<p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>"
    },
    "IntegerType":{
      "type":"integer",
      "documentation":"<p>Integer type that is a 32-bit signed number.</p>"
    },
    "InternalServerException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"},
        "code":{"shape":"ErrorCode"}
      },
      "error":{"httpStatusCode":500},
      "exception":true,
      "fault":true,
      "documentation":"<p>An error on the server occurred when trying to process a request.</p>"
    },
    "InvalidInputException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"},
        "code":{"shape":"ErrorCode"}
      },
      "error":{"httpStatusCode":400},
      "exception":true,
      "documentation":"<p>An error on the client occurred. Typically, the cause is an invalid input value.</p>"
    },
    "InvalidTagException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "exception":true
    },
    "Label":{
      "type":"string",
      "min":1
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"},
        "code":{"shape":"ErrorCode"}
      },
      "error":{"httpStatusCode":417},
      "exception":true,
      "documentation":"<p>The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>.</p>"
    },
    "LongType":{
      "type":"long",
      "documentation":"<p>Long integer type that is a 64-bit signed number.</p>"
    },
    "MLModel":{
      "type":"structure",
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>MLModel</code> at creation.</p>"
        },
        "TrainingDataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the training <code>DataSource</code>. The <code>CreateMLModel</code> operation uses the <code>TrainingDataSourceId</code>.</p>"
        },
        "CreatedByIamUser":{
          "shape":"AwsUserArn",
          "documentation":"<p>The AWS user account from which the <code>MLModel</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time that the <code>MLModel</code> was created. The time is expressed in epoch time.</p>"
        },
        "LastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.</p>"
        },
        "Name":{
          "shape":"MLModelName",
          "documentation":"<p>A user-supplied name or description of the <code>MLModel</code>.</p>"
        },
        "Status":{
          "shape":"EntityStatus",
          "documentation":"<p>The current status of an <code>MLModel</code>. This element can have one of the following values: </p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to create an <code>MLModel</code>.</li> <li> <code>INPROGRESS</code> - The creation process is underway.</li> <li> <code>FAILED</code> - The request to create an <code>MLModel</code> didn't run to completion. The model isn't usable.</li> <li> <code>COMPLETED</code> - The creation process completed successfully.</li> <li> <code>DELETED</code> - The <code>MLModel</code> is marked as deleted. It isn't usable.</li> </ul>"
        },
        "SizeInBytes":{"shape":"LongType"},
        "EndpointInfo":{
          "shape":"RealtimeEndpointInfo",
          "documentation":"<p>The current endpoint of the <code>MLModel</code>.</p>"
        },
        "TrainingParameters":{
          "shape":"TrainingParameters",
          "documentation":"<p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters: </p> <ul> <li> <p><code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li><p><code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p></li> <li><p><code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>.</p></li> <li> <p><code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm, which controls overfitting the data by penalizing large coefficients. This parameter tends to drive coefficients to zero, resulting in sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p><code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm, which controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>"
        },
        "InputDataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>"
        },
        "Algorithm":{
          "shape":"Algorithm",
          "documentation":"<p>The algorithm used to train the <code>MLModel</code>. The following algorithm is supported:</p> <ul> <li> <code>SGD</code> -- Stochastic gradient descent. The goal of <code>SGD</code> is to minimize the gradient of the loss function. </li> </ul>"
        },
        "MLModelType":{
          "shape":"MLModelType",
          "documentation":"<p>Identifies the <code>MLModel</code> category. The following are the available types:</p> <ul> <li> <code>REGRESSION</code> - Produces a numeric result. For example, \"What price should a house be listed at?\"</li> <li> <code>BINARY</code> - Produces one of two possible results. For example, \"Is this a child-friendly web site?\".</li> <li> <code>MULTICLASS</code> - Produces one of several possible results. For example, \"Is this a HIGH-, LOW-, or MEDIUM<?oxy_delete author=\"annbech\" timestamp=\"20160328T175050-0700\" content=\" \"><?oxy_insert_start author=\"annbech\" timestamp=\"20160328T175050-0700\">-<?oxy_insert_end>risk trade?\".</li> </ul>"
        },
        "ScoreThreshold":{"shape":"ScoreThreshold"},
        "ScoreThresholdLastUpdatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.</p>"
        },
        "Message":{
          "shape":"Message",
          "documentation":"<p>A description of the most recent details about accessing the <code>MLModel</code>.</p>"
        },
        "ComputeTime":{"shape":"LongType"},
        "FinishedAt":{"shape":"EpochTime"},
        "StartedAt":{"shape":"EpochTime"}
      },
      "documentation":"<p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>"
    },
    "MLModelFilterVariable":{
      "type":"string",
      "enum":[
        "CreatedAt",
        "LastUpdatedAt",
        "Status",
        "Name",
        "IAMUser",
        "TrainingDataSourceId",
        "RealtimeEndpointStatus",
        "MLModelType",
        "Algorithm",
        "TrainingDataURI"
      ]
    },
    "MLModelName":{
      "type":"string",
      "max":1024
    },
    "MLModelType":{
      "type":"string",
      "enum":[
        "REGRESSION",
        "BINARY",
        "MULTICLASS"
      ]
    },
    "MLModels":{
      "type":"list",
      "member":{"shape":"MLModel"}
    },
    "Message":{
      "type":"string",
      "max":10240,
      "documentation":"<p> Description of the most recent details about an object.</p>"
    },
    "PageLimit":{
      "type":"integer",
      "min":1,
      "max":100
    },
    "PerformanceMetrics":{
      "type":"structure",
      "members":{
        "Properties":{"shape":"PerformanceMetricsProperties"}
      },
      "documentation":"<p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href=\"http://docs.aws.amazon.com/machine-learning/latest/dg\">Amazon Machine Learning Developer Guide</a>. </p>"
    },
    "PerformanceMetricsProperties":{
      "type":"map",
      "key":{"shape":"PerformanceMetricsPropertyKey"},
      "value":{"shape":"PerformanceMetricsPropertyValue"}
    },
    "PerformanceMetricsPropertyKey":{"type":"string"},
    "PerformanceMetricsPropertyValue":{"type":"string"},
    "PredictInput":{
      "type":"structure",
      "required":[
        "MLModelId",
        "Record",
        "PredictEndpoint"
      ],
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>A unique identifier of the <code>MLModel</code>.</p>"
        },
        "Record":{"shape":"Record"},
        "PredictEndpoint":{"shape":"VipURL"}
      }
    },
    "PredictOutput":{
      "type":"structure",
      "members":{
        "Prediction":{"shape":"Prediction"}
      }
    },
    "Prediction":{
      "type":"structure",
      "members":{
        "predictedLabel":{
          "shape":"Label",
          "documentation":"<p>The prediction label for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code>.</p>"
        },
        "predictedValue":{
          "shape":"floatLabel",
          "documentation":"The prediction value for <code>REGRESSION</code> <code>MLModel</code>."
        },
        "predictedScores":{"shape":"ScoreValuePerLabelMap"},
        "details":{"shape":"DetailsMap"}
      },
      "documentation":"<p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>"
    },
    "PredictorNotMountedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "error":{"httpStatusCode":400},
      "exception":true,
      "documentation":"<p>The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>.</p>"
    },
    "PresignedS3Url":{"type":"string"},
    "RDSDataSpec":{
      "type":"structure",
      "required":[
        "DatabaseInformation",
        "SelectSqlQuery",
        "DatabaseCredentials",
        "S3StagingLocation",
        "ResourceRole",
        "ServiceRole",
        "SubnetId",
        "SecurityGroupIds"
      ],
      "members":{
        "DatabaseInformation":{
          "shape":"RDSDatabase",
          "documentation":"<p>Describes the <code>DatabaseName</code> and <code>InstanceIdentifier</code> of an Amazon RDS database.</p>"
        },
        "SelectSqlQuery":{
          "shape":"RDSSelectSqlQuery",
          "documentation":"<p>The query that is used to retrieve the observation data for the <code>DataSource</code>.</p>"
        },
        "DatabaseCredentials":{
          "shape":"RDSDatabaseCredentials",
          "documentation":"<p>The AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon RDS database.</p>"
        },
        "S3StagingLocation":{
          "shape":"S3Url",
          "documentation":"<p>The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using <code>SelectSqlQuery</code> is stored in this location.</p>"
        },
        "DataRearrangement":{
          "shape":"DataRearrangement",
          "documentation":"<p>A JSON string that represents the splitting and rearrangement processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code> parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p> <p>There are multiple parameters that control what data is used to create a datasource:</p> <ul> <li><p><b><code>percentBegin</code></b></p> <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p></li> <li><p><b><code>percentEnd</code></b></p> <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p></li> <li><p><b><code>complement</code></b></p> <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a datasource. The <code>complement</code> parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for <code>percentBegin</code> and <code>percentEnd</code>, along with the <code>complement</code> parameter.</p> <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":0, \"percentEnd\":25}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":0, \"percentEnd\":25, \"complement\":\"true\"}}</code></p> </li> <li><p><b><code>strategy</code></b></p> <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p> <p>The default value for the <code>strategy</code> parameter is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code> and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p> <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"sequential\"}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"sequential\", \"complement\":\"true\"}}</code></p> <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the <code>strategy</code> parameter to <code>random</code> and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.</p> <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"random\", \"randomSeed\"=\"s3://my_s3_path/bucket/file.csv\"}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"random\", \"randomSeed\"=\"s3://my_s3_path/bucket/file.csv\", \"complement\":\"true\"}}</code></p> </li> </ul>"
        },
        "DataSchema":{
          "shape":"DataSchema",
          "documentation":"<p>A JSON string that represents the schema for an Amazon RDS <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>.</p> <p>A <code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code> and <code>excludedVariableNames</code> have an array of key-value pairs for their value. Use the following format to define your <code>DataSchema</code>.</p> <p>{ \"version\": \"1.0\",</p> <p> \"recordAnnotationFieldName\": \"F1\",</p> <p> \"recordWeightFieldName\": \"F2\",</p> <p> \"targetFieldName\": \"F3\",</p> <p> \"dataFormat\": \"CSV\",</p> <p> \"dataFileContainsHeader\": true,</p> <p> \"attributes\": [</p> <p> { \"fieldName\": \"F1\", \"fieldType\": \"TEXT\" }, { \"fieldName\": \"F2\", \"fieldType\": \"NUMERIC\" }, { \"fieldName\": \"F3\", \"fieldType\": \"CATEGORICAL\" }, { \"fieldName\": \"F4\", \"fieldType\": \"NUMERIC\" }, { \"fieldName\": \"F5\", \"fieldType\": \"CATEGORICAL\" }, { \"fieldName\": \"F6\", \"fieldType\": \"TEXT\" }, { \"fieldName\": \"F7\", \"fieldType\": \"WEIGHTED_INT_SEQUENCE\" }, { \"fieldName\": \"F8\", \"fieldType\": \"WEIGHTED_STRING_SEQUENCE\" } ],</p> <p> \"excludedVariableNames\": [ \"F6\" ] } </p> <?oxy_insert_end>"
        },
        "DataSchemaUri":{
          "shape":"S3Url",
          "documentation":"<p>The Amazon S3 location of the <code>DataSchema</code>. </p>"
        },
        "ResourceRole":{
          "shape":"EDPResourceRole",
          "documentation":"<p>The role (DataPipelineDefaultResourceRole) assumed by an Amazon Elastic Compute Cloud (Amazon EC2) instance to carry out the copy operation from Amazon RDS to an Amazon S3 task. For more information, see <a href=\"http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html\">Role templates</a> for data pipelines.</p>"
        },
        "ServiceRole":{
          "shape":"EDPServiceRole",
          "documentation":"<p>The role (DataPipelineDefaultRole) assumed by AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href=\"http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html\">Role templates</a> for data pipelines.</p>"
        },
        "SubnetId":{
          "shape":"EDPSubnetId",
          "documentation":"<p>The subnet ID to be used to access a VPC-based RDS DB instance. This attribute is used by Data Pipeline to carry out the copy task from Amazon RDS to Amazon S3.</p>"
        },
        "SecurityGroupIds":{
          "shape":"EDPSecurityGroupIds",
          "documentation":"<p>The security group IDs to be used to access a VPC-based RDS DB instance. Ensure that there are appropriate ingress rules set up to allow access to the RDS DB instance. This attribute is used by Data Pipeline to carry out the copy operation from Amazon RDS to an Amazon S3 task.</p>"
        }
      },
      "documentation":"<p>The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.</p>"
    },
    "RDSDatabase":{
      "type":"structure",
      "required":[
        "InstanceIdentifier",
        "DatabaseName"
      ],
      "members":{
        "InstanceIdentifier":{
          "shape":"RDSInstanceIdentifier",
          "documentation":"<p>The ID of an RDS DB instance.</p>"
        },
        "DatabaseName":{"shape":"RDSDatabaseName"}
      },
      "documentation":"<p>The database details of an Amazon RDS database.</p>"
    },
    "RDSDatabaseCredentials":{
      "type":"structure",
      "required":[
        "Username",
        "Password"
      ],
      "members":{
        "Username":{"shape":"RDSDatabaseUsername"},
        "Password":{"shape":"RDSDatabasePassword"}
      },
      "documentation":"<p>The database credentials to connect to a database on an RDS DB instance.</p>"
    },
    "RDSDatabaseName":{
      "type":"string",
      "min":1,
      "max":64,
      "documentation":"<p>The name of a database hosted on an RDS DB instance.</p>"
    },
    "RDSDatabasePassword":{
      "type":"string",
      "min":8,
      "max":128,
      "documentation":"<p>The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.</p>"
    },
    "RDSDatabaseUsername":{
      "type":"string",
      "min":1,
      "max":128,
      "documentation":"<p>The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.</p>"
    },
    "RDSInstanceIdentifier":{
      "type":"string",
      "min":1,
      "max":63,
      "pattern":"[a-z0-9-]+",
      "documentation":"Identifier of RDS DB Instances."
    },
    "RDSMetadata":{
      "type":"structure",
      "members":{
        "Database":{
          "shape":"RDSDatabase",
          "documentation":"<p>The database details required to connect to an Amazon RDS.</p>"
        },
        "DatabaseUserName":{"shape":"RDSDatabaseUsername"},
        "SelectSqlQuery":{
          "shape":"RDSSelectSqlQuery",
          "documentation":"<p>The SQL query that is supplied during <a>CreateDataSourceFromRDS</a>. Returns only if <code>Verbose</code> is true in <code>GetDataSourceInput</code>. </p>"
        },
        "ResourceRole":{
          "shape":"EDPResourceRole",
          "documentation":"<p>The role (DataPipelineDefaultResourceRole) assumed by an Amazon EC2 instance to carry out the copy task from Amazon RDS to Amazon S3. For more information, see <a href=\"http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html\">Role templates</a> for data pipelines.</p>"
        },
        "ServiceRole":{
          "shape":"EDPServiceRole",
          "documentation":"<p>The role (DataPipelineDefaultRole) assumed by the Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href=\"http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html\">Role templates</a> for data pipelines.</p>"
        },
        "DataPipelineId":{
          "shape":"EDPPipelineId",
          "documentation":"<p>The ID of the Data Pipeline instance that is used to carry to copy data from Amazon RDS to Amazon S3. You can use the ID to find details about the instance in the Data Pipeline console.</p>"
        }
      },
      "documentation":"<p>The datasource details that are specific to Amazon RDS.</p>"
    },
    "RDSSelectSqlQuery":{
      "type":"string",
      "min":1,
      "max":16777216,
      "documentation":"<p>The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used. </p>"
    },
    "RealtimeEndpointInfo":{
      "type":"structure",
      "members":{
        "PeakRequestsPerSecond":{
          "shape":"IntegerType",
          "documentation":"<p> The maximum processing rate for the real-time endpoint for <code>MLModel</code>, measured in incoming requests per second.</p>"
        },
        "CreatedAt":{
          "shape":"EpochTime",
          "documentation":"<p>The time that the request to create the real-time endpoint for the <code>MLModel</code> was received. The time is expressed in epoch time.</p>"
        },
        "EndpointUrl":{
          "shape":"VipURL",
          "documentation":"<p>The URI that specifies where to send real-time prediction requests for the <code>MLModel</code>.</p> <note><title>Note</title> <p>The application must wait until the real-time endpoint is ready before using this URI.</p> </note>"
        },
        "EndpointStatus":{
          "shape":"RealtimeEndpointStatus",
          "documentation":"<p> The current status of the real-time endpoint for the <code>MLModel</code>. This element can have one of the following values: </p> <ul> <li> <code>NONE</code> - Endpoint does not exist or was previously deleted.</li> <li> <code>READY</code> - Endpoint is ready to be used for real-time predictions.</li> <li> <code>UPDATING</code> - Updating/creating the endpoint. </li> </ul>"
        }
      },
      "documentation":"<p> Describes the real-time endpoint information for an <code>MLModel</code>.</p>"
    },
    "RealtimeEndpointStatus":{
      "type":"string",
      "enum":[
        "NONE",
        "READY",
        "UPDATING",
        "FAILED"
      ]
    },
    "Recipe":{
      "type":"string",
      "max":131071
    },
    "Record":{
      "type":"map",
      "key":{"shape":"VariableName"},
      "value":{"shape":"VariableValue"},
      "documentation":"<p>A map of variable name-value pairs that represent an observation.</p>"
    },
    "RedshiftClusterIdentifier":{
      "type":"string",
      "min":1,
      "max":63,
      "pattern":"[a-z0-9-]+",
      "documentation":"<p>The ID of an Amazon Redshift cluster.</p>"
    },
    "RedshiftDataSpec":{
      "type":"structure",
      "required":[
        "DatabaseInformation",
        "SelectSqlQuery",
        "DatabaseCredentials",
        "S3StagingLocation"
      ],
      "members":{
        "DatabaseInformation":{
          "shape":"RedshiftDatabase",
          "documentation":"<p>Describes the <code>DatabaseName</code> and <code>ClusterIdentifier</code> for an Amazon Redshift <code>DataSource</code>.</p>"
        },
        "SelectSqlQuery":{
          "shape":"RedshiftSelectSqlQuery",
          "documentation":"<p>Describes the SQL Query to execute on an Amazon Redshift database for an Amazon Redshift <code>DataSource</code>.</p>"
        },
        "DatabaseCredentials":{
          "shape":"RedshiftDatabaseCredentials",
          "documentation":"<p>Describes AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon Redshift database.</p>"
        },
        "S3StagingLocation":{
          "shape":"S3Url",
          "documentation":"<p>Describes an Amazon S3 location to store the result set of the <code>SelectSqlQuery</code> query.</p>"
        },
        "DataRearrangement":{
          "shape":"DataRearrangement",
          "documentation":"<p>A JSON string that represents the splitting and rearrangement processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code> parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p> <p>There are multiple parameters that control what data is used to create a datasource:</p> <ul> <li><p><b><code>percentBegin</code></b></p> <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p></li> <li><p><b><code>percentEnd</code></b></p> <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p></li> <li><p><b><code>complement</code></b></p> <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a datasource. The <code>complement</code> parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for <code>percentBegin</code> and <code>percentEnd</code>, along with the <code>complement</code> parameter.</p> <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":0, \"percentEnd\":25}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":0, \"percentEnd\":25, \"complement\":\"true\"}}</code></p> </li> <li><p><b><code>strategy</code></b></p> <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p> <p>The default value for the <code>strategy</code> parameter is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code> and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p> <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"sequential\"}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"sequential\", \"complement\":\"true\"}}</code></p> <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the <code>strategy</code> parameter to <code>random</code> and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.</p> <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"random\", \"randomSeed\"=\"s3://my_s3_path/bucket/file.csv\"}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"random\", \"randomSeed\"=\"s3://my_s3_path/bucket/file.csv\", \"complement\":\"true\"}}</code></p> </li> </ul>"
        },
        "DataSchema":{
          "shape":"DataSchema",
          "documentation":"<p>A JSON string that represents the schema for an Amazon Redshift <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>.</p> <p>A <code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code>.</p> <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code> and <code>excludedVariableNames</code> have an array of key-value pairs for their value. Use the following format to define your <code>DataSchema</code>.</p> <p>{ \"version\": \"1.0\",</p> <p> \"recordAnnotationFieldName\": \"F1\",</p> <p> \"recordWeightFieldName\": \"F2\",</p> <p> \"targetFieldName\": \"F3\",</p> <p> \"dataFormat\": \"CSV\",</p> <p> \"dataFileContainsHeader\": true,</p> <p> \"attributes\": [</p> <p> { \"fieldName\": \"F1\", \"fieldType\": \"TEXT\" }, { \"fieldName\": \"F2\", \"fieldType\": \"NUMERIC\" }, { \"fieldName\": \"F3\", \"fieldType\": \"CATEGORICAL\" }, { \"fieldName\": \"F4\", \"fieldType\": \"NUMERIC\" }, { \"fieldName\": \"F5\", \"fieldType\": \"CATEGORICAL\" }, { \"fieldName\": \"F6\", \"fieldType\": \"TEXT\" }, { \"fieldName\": \"F7\", \"fieldType\": \"WEIGHTED_INT_SEQUENCE\" }, { \"fieldName\": \"F8\", \"fieldType\": \"WEIGHTED_STRING_SEQUENCE\" } ],</p> <p> \"excludedVariableNames\": [ \"F6\" ] } </p>"
        },
        "DataSchemaUri":{
          "shape":"S3Url",
          "documentation":"<p>Describes the schema location for an Amazon Redshift <code>DataSource</code>.</p>"
        }
      },
      "documentation":"<p>Describes the data specification of an Amazon Redshift <code>DataSource</code>.</p>"
    },
    "RedshiftDatabase":{
      "type":"structure",
      "required":[
        "DatabaseName",
        "ClusterIdentifier"
      ],
      "members":{
        "DatabaseName":{"shape":"RedshiftDatabaseName"},
        "ClusterIdentifier":{"shape":"RedshiftClusterIdentifier"}
      },
      "documentation":"<p>Describes the database details required to connect to an Amazon Redshift database.</p>"
    },
    "RedshiftDatabaseCredentials":{
      "type":"structure",
      "required":[
        "Username",
        "Password"
      ],
      "members":{
        "Username":{"shape":"RedshiftDatabaseUsername"},
        "Password":{"shape":"RedshiftDatabasePassword"}
      },
      "documentation":"<p> Describes the database credentials for connecting to a database on an Amazon Redshift cluster.</p>"
    },
    "RedshiftDatabaseName":{
      "type":"string",
      "min":1,
      "max":64,
      "pattern":"[a-z0-9]+",
      "documentation":"<p>The name of a database hosted on an Amazon Redshift cluster.</p>"
    },
    "RedshiftDatabasePassword":{
      "type":"string",
      "min":8,
      "max":64,
      "documentation":"<p>A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href=\"http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html\">USER</a>.</p>"
    },
    "RedshiftDatabaseUsername":{
      "type":"string",
      "min":1,
      "max":128,
      "documentation":"<p>A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href=\"http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html\">USER</a>.</p>"
    },
    "RedshiftMetadata":{
      "type":"structure",
      "members":{
        "RedshiftDatabase":{"shape":"RedshiftDatabase"},
        "DatabaseUserName":{"shape":"RedshiftDatabaseUsername"},
        "SelectSqlQuery":{
          "shape":"RedshiftSelectSqlQuery",
          "documentation":"<p> The SQL query that is specified during <a>CreateDataSourceFromRedshift</a>. Returns only if <code>Verbose</code> is true in GetDataSourceInput. </p>"
        }
      },
      "documentation":"<p>Describes the <code>DataSource</code> details specific to Amazon Redshift.</p>"
    },
    "RedshiftSelectSqlQuery":{
      "type":"string",
      "min":1,
      "max":16777216,
      "documentation":"<p> Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href=\"http://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html\">SELECT</a>. </p>"
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"},
        "code":{"shape":"ErrorCode"}
      },
      "error":{"httpStatusCode":404},
      "exception":true,
      "documentation":"<p>A specified resource cannot be located.</p>"
    },
    "RoleARN":{
      "type":"string",
      "min":1,
      "max":110,
      "documentation":"<p>The Amazon Resource Name (ARN) of an <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts\">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. </p>"
    },
    "S3DataSpec":{
      "type":"structure",
      "required":["DataLocationS3"],
      "members":{
        "DataLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>The location of the data file(s) used by a <code>DataSource</code>. The URI specifies a data file or an Amazon Simple Storage Service (Amazon S3) directory or bucket containing data files.</p>"
        },
        "DataRearrangement":{
          "shape":"DataRearrangement",
          "documentation":"<p>A JSON string that represents the splitting and rearrangement processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code> parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p> <p>There are multiple parameters that control what data is used to create a datasource:</p> <ul> <li><p><b><code>percentBegin</code></b></p> <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p></li> <li><p><b><code>percentEnd</code></b></p> <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p></li> <li><p><b><code>complement</code></b></p> <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a datasource. The <code>complement</code> parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for <code>percentBegin</code> and <code>percentEnd</code>, along with the <code>complement</code> parameter.</p> <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":0, \"percentEnd\":25}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":0, \"percentEnd\":25, \"complement\":\"true\"}}</code></p> </li> <li><p><b><code>strategy</code></b></p> <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p> <p>The default value for the <code>strategy</code> parameter is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code> and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p> <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"sequential\"}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"sequential\", \"complement\":\"true\"}}</code></p> <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the <code>strategy</code> parameter to <code>random</code> and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.</p> <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"random\", \"randomSeed\"=\"s3://my_s3_path/bucket/file.csv\"}}</code></p> <p>Datasource for training: <code>{\"splitting\":{\"percentBegin\":70, \"percentEnd\":100, \"strategy\":\"random\", \"randomSeed\"=\"s3://my_s3_path/bucket/file.csv\", \"complement\":\"true\"}}</code></p> </li> </ul>"
        },
        "DataSchema":{
          "shape":"DataSchema",
          "documentation":"<p> A JSON string that represents the schema for an Amazon S3 <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>.</p> <p>You must provide either the <code>DataSchema</code> or the <code>DataSchemaLocationS3</code>.</p> <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code> and <code>excludedVariableNames</code> have an array of key-value pairs for their value. Use the following format to define your <code>DataSchema</code>.</p> <p>{ \"version\": \"1.0\",</p> <p> \"recordAnnotationFieldName\": \"F1\",</p> <p> \"recordWeightFieldName\": \"F2\",</p> <p> \"targetFieldName\": \"F3\",</p> <p> \"dataFormat\": \"CSV\",</p> <p> \"dataFileContainsHeader\": true,</p> <p> \"attributes\": [</p> <p> { \"fieldName\": \"F1\", \"fieldType\": \"TEXT\" }, { \"fieldName\": \"F2\", \"fieldType\": \"NUMERIC\" }, { \"fieldName\": \"F3\", \"fieldType\": \"CATEGORICAL\" }, { \"fieldName\": \"F4\", \"fieldType\": \"NUMERIC\" }, { \"fieldName\": \"F5\", \"fieldType\": \"CATEGORICAL\" }, { \"fieldName\": \"F6\", \"fieldType\": \"TEXT\" }, { \"fieldName\": \"F7\", \"fieldType\": \"WEIGHTED_INT_SEQUENCE\" }, { \"fieldName\": \"F8\", \"fieldType\": \"WEIGHTED_STRING_SEQUENCE\" } ],</p> <p> \"excludedVariableNames\": [ \"F6\" ] } </p> <?oxy_insert_end>"
        },
        "DataSchemaLocationS3":{
          "shape":"S3Url",
          "documentation":"<p>Describes the schema location in Amazon S3. You must provide either the <code>DataSchema</code> or the <code>DataSchemaLocationS3</code>.</p>"
        }
      },
      "documentation":"<p> Describes the data specification of a <code>DataSource</code>.</p>"
    },
    "S3Url":{
      "type":"string",
      "max":2048,
      "pattern":"s3://([^/]+)(/.*)?",
      "documentation":"<p>A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).</p>"
    },
    "ScoreThreshold":{"type":"float"},
    "ScoreValue":{"type":"float"},
    "ScoreValuePerLabelMap":{
      "type":"map",
      "key":{"shape":"Label"},
      "value":{"shape":"ScoreValue"},
      "documentation":"Provides the raw classification score corresponding to each label."
    },
    "SortOrder":{
      "type":"string",
      "enum":[
        "asc",
        "dsc"
      ],
      "documentation":"<p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul>"
    },
    "StringType":{
      "type":"string",
      "documentation":"<p>String type.</p>"
    },
    "Tag":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p>A unique identifier for the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>An optional string, typically used to describe or define the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.</p>"
        }
      },
      "documentation":"<p>A custom key-value pair associated with an ML object, such as an ML model.</p>"
    },
    "TagKey":{
      "type":"string",
      "min":1,
      "max":128,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagKeyList":{
      "type":"list",
      "member":{"shape":"TagKey"},
      "max":100
    },
    "TagLimitExceededException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "exception":true
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":100
    },
    "TagValue":{
      "type":"string",
      "min":0,
      "max":256,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TaggableResourceType":{
      "type":"string",
      "enum":[
        "BatchPrediction",
        "DataSource",
        "Evaluation",
        "MLModel"
      ]
    },
    "TrainingParameters":{
      "type":"map",
      "key":{"shape":"StringType"},
      "value":{"shape":"StringType"}
    },
    "UpdateBatchPredictionInput":{
      "type":"structure",
      "required":[
        "BatchPredictionId",
        "BatchPredictionName"
      ],
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>BatchPrediction</code> during creation.</p>"
        },
        "BatchPredictionName":{
          "shape":"EntityName",
          "documentation":"<p>A new user-supplied name or description of the <code>BatchPrediction</code>.</p>"
        }
      }
    },
    "UpdateBatchPredictionOutput":{
      "type":"structure",
      "members":{
        "BatchPredictionId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>BatchPrediction</code> during creation. This value should be identical to the value of the <code>BatchPredictionId</code> in the request.</p>"
        }
      },
      "documentation":"<p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>"
    },
    "UpdateDataSourceInput":{
      "type":"structure",
      "required":[
        "DataSourceId",
        "DataSourceName"
      ],
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>DataSource</code> during creation.</p>"
        },
        "DataSourceName":{
          "shape":"EntityName",
          "documentation":"<p>A new user-supplied name or description of the <code>DataSource</code> that will replace the current description. </p>"
        }
      }
    },
    "UpdateDataSourceOutput":{
      "type":"structure",
      "members":{
        "DataSourceId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>DataSource</code> during creation. This value should be identical to the value of the <code>DataSourceID</code> in the request.</p>"
        }
      },
      "documentation":"<p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>"
    },
    "UpdateEvaluationInput":{
      "type":"structure",
      "required":[
        "EvaluationId",
        "EvaluationName"
      ],
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>Evaluation</code> during creation.</p>"
        },
        "EvaluationName":{
          "shape":"EntityName",
          "documentation":"<p>A new user-supplied name or description of the <code>Evaluation</code> that will replace the current content. </p>"
        }
      }
    },
    "UpdateEvaluationOutput":{
      "type":"structure",
      "members":{
        "EvaluationId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>Evaluation</code> during creation. This value should be identical to the value of the <code>Evaluation</code> in the request.</p>"
        }
      },
      "documentation":"<p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>"
    },
    "UpdateMLModelInput":{
      "type":"structure",
      "required":["MLModelId"],
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>MLModel</code> during creation.</p>"
        },
        "MLModelName":{
          "shape":"EntityName",
          "documentation":"<p>A user-supplied name or description of the <code>MLModel</code>.</p>"
        },
        "ScoreThreshold":{
          "shape":"ScoreThreshold",
          "documentation":"<p>The <code>ScoreThreshold</code> used in binary classification <code>MLModel</code> that marks the boundary between a positive prediction and a negative prediction.</p> <p>Output values greater than or equal to the <code>ScoreThreshold</code> receive a positive result from the <code>MLModel</code>, such as <code>true</code>. Output values less than the <code>ScoreThreshold</code> receive a negative response from the <code>MLModel</code>, such as <code>false</code>.</p>"
        }
      }
    },
    "UpdateMLModelOutput":{
      "type":"structure",
      "members":{
        "MLModelId":{
          "shape":"EntityId",
          "documentation":"<p>The ID assigned to the <code>MLModel</code> during creation. This value should be identical to the value of the <code>MLModelID</code> in the request.</p>"
        }
      },
      "documentation":"<p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>"
    },
    "VariableName":{
      "type":"string",
      "documentation":"<p>The name of a variable. Currently it's used to specify the name of the target value, label, weight, and tags.</p>"
    },
    "VariableValue":{
      "type":"string",
      "documentation":"<p>The value of a variable. Currently it's used to specify values of the target value, weights, and tag variables and for filtering variable values.</p>"
    },
    "Verbose":{
      "type":"boolean",
      "documentation":"<p>Specifies whether a describe operation should return exhaustive or abbreviated information.</p>"
    },
    "VipURL":{
      "type":"string",
      "max":2048,
      "pattern":"https://[a-zA-Z0-9-.]*\\.amazon(aws)?\\.com[/]?"
    },
    "floatLabel":{"type":"float"}
  },
  "examples":{
  }
}
