awsim['kinesis-video-media'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-09-30",
    "endpointPrefix":"kinesisvideo",
    "protocol":"rest-json",
    "serviceAbbreviation":"Kinesis Video Media",
    "serviceFullName":"Amazon Kinesis Video Streams Media",
    "serviceId":"Kinesis Video Media",
    "signatureVersion":"v4",
    "uid":"kinesis-video-media-2017-09-30"
  },
  "operations":{
    "GetMedia":{
      "name":"GetMedia",
      "http":{
        "method":"POST",
        "requestUri":"/getMedia"
      },
      "input":{"shape":"GetMediaInput"},
      "output":{"shape":"GetMediaOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"NotAuthorizedException"},
        {"shape":"InvalidEndpointException"},
        {"shape":"ClientLimitExceededException"},
        {"shape":"ConnectionLimitExceededException"},
        {"shape":"InvalidArgumentException"}
      ],
      "documentation":"<p> Use this API to retrieve media content from a Kinesis video stream. In the request, you identify stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number.</p> <note> <p> You must first call the <code>GetDataEndpoint</code> API to get an endpoint to which you can then send the <code>GetMedia</code> requests. </p> </note> <p>When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a \"chunk.\" For more information, see . The <code>GetMedia</code> API returns a stream of these chunks starting from the chunk that you specify in the request. </p> <p>The following limits apply when using the <code>GetMedia</code> API:</p> <ul> <li> <p>A client can call <code>GetMedia</code> up to five times per second per stream. </p> </li> <li> <p>Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a <code>GetMedia</code> session. </p> </li> </ul>"
    }
  },
  "shapes":{
    "ClientLimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ConnectionLimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client connections.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ContentType":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[a-zA-Z0-9_\\.\\-]+$"
    },
    "ContinuationToken":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[a-zA-Z0-9_\\.\\-]+$"
    },
    "ErrorMessage":{"type":"string"},
    "FragmentNumberString":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^[0-9]+$"
    },
    "GetMediaInput":{
      "type":"structure",
      "required":["StartSelector"],
      "members":{
        "StreamName":{
          "shape":"StreamName",
          "documentation":"<p>The Kinesis video stream name from where you want to get the media content. If you don't specify the <code>streamName</code>, you must specify the <code>streamARN</code>.</p>"
        },
        "StreamARN":{
          "shape":"ResourceARN",
          "documentation":"<p>The ARN of the stream from where you want to get the media content. If you don't specify the <code>streamARN</code>, you must specify the <code>streamName</code>.</p>"
        },
        "StartSelector":{
          "shape":"StartSelector",
          "documentation":"<p>Identifies the starting chunk to get from the specified stream. </p>"
        }
      }
    },
    "GetMediaOutput":{
      "type":"structure",
      "members":{
        "ContentType":{
          "shape":"ContentType",
          "documentation":"<p>The content type of the requested media.</p>",
          "location":"header",
          "locationName":"Content-Type"
        },
        "Payload":{
          "shape":"Payload",
          "documentation":"<p> The payload Kinesis Video Streams returns is a sequence of chunks from the specified stream. For information about the chunks, see . The chunks that Kinesis Video Streams returns in the <code>GetMedia</code> call also include the following additional Matroska (MKV) tags: </p> <ul> <li> <p>AWS_KINESISVIDEO_CONTINUATION_TOKEN (UTF-8 string) - In the event your <code>GetMedia</code> call terminates, you can use this continuation token in your next request to get the next chunk where the last request terminated.</p> </li> <li> <p>AWS_KINESISVIDEO_MILLIS_BEHIND_NOW (UTF-8 string) - Client applications can use this tag value to determine how far behind the chunk returned in the response is from the latest chunk on the stream. </p> </li> <li> <p>AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk.</p> </li> <li> <p>AWS_KINESISVIDEO_SERVER_TIMESTAMP - Server time stamp of the fragment.</p> </li> <li> <p>AWS_KINESISVIDEO_PRODUCER_TIMESTAMP - Producer time stamp of the fragment.</p> </li> </ul> <p>The following tags will be present if an error occurs:</p> <ul> <li> <p>AWS_KINESISVIDEO_ERROR_CODE - String description of an error that caused GetMedia to stop.</p> </li> <li> <p>AWS_KINESISVIDEO_ERROR_ID: Integer code of the error.</p> </li> </ul> <p>The error codes are as follows:</p> <ul> <li> <p>3002 - Error writing to the stream</p> </li> <li> <p>4000 - Requested fragment is not found</p> </li> <li> <p>4500 - Access denied for the stream's KMS key</p> </li> <li> <p>4501 - Stream's KMS key is disabled</p> </li> <li> <p>4502 - Validation error on the Stream's KMS key</p> </li> <li> <p>4503 - KMS key specified in the stream is unavailable</p> </li> <li> <p>4504 - Invalid usage of the KMS key specified in the stream</p> </li> <li> <p>4505 - Invalid state of the KMS key specified in the stream</p> </li> <li> <p>4506 - Unable to find the KMS key specified in the stream</p> </li> <li> <p>5000 - Internal error</p> </li> </ul>"
        }
      },
      "payload":"Payload"
    },
    "InvalidArgumentException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The value for this input parameter is invalid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "InvalidEndpointException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p> Status Code: 400, Caller used wrong endpoint to write data to a stream. On receiving such an exception, the user must call <code>GetDataEndpoint</code> with <code>AccessMode</code> set to \"READ\" and use the endpoint Kinesis Video returns in the next <code>GetMedia</code> call. </p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "NotAuthorizedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Status Code: 403, The caller is not authorized to perform an operation on the given stream, or the token has expired.</p>",
      "error":{"httpStatusCode":401},
      "exception":true
    },
    "Payload":{
      "type":"blob",
      "streaming":true
    },
    "ResourceARN":{
      "type":"string",
      "max":1024,
      "min":1,
      "pattern":"arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+"
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Status Code: 404, The stream with the given name does not exist.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "StartSelector":{
      "type":"structure",
      "required":["StartSelectorType"],
      "members":{
        "StartSelectorType":{
          "shape":"StartSelectorType",
          "documentation":"<p>Identifies the fragment on the Kinesis video stream where you want to start getting the data from.</p> <ul> <li> <p>NOW - Start with the latest chunk on the stream.</p> </li> <li> <p>EARLIEST - Start with earliest available chunk on the stream.</p> </li> <li> <p>FRAGMENT_NUMBER - Start with the chunk containing the specific fragment. You must also specify the <code>StartFragmentNumber</code>.</p> </li> <li> <p>PRODUCER_TIMESTAMP or SERVER_TIMESTAMP - Start with the chunk containing a fragment with the specified producer or server time stamp. You specify the time stamp by adding <code>StartTimestamp</code>.</p> </li> <li> <p> CONTINUATION_TOKEN - Read using the specified continuation token. </p> </li> </ul> <note> <p>If you choose the NOW, EARLIEST, or CONTINUATION_TOKEN as the <code>startSelectorType</code>, you don't provide any additional information in the <code>startSelector</code>.</p> </note>"
        },
        "AfterFragmentNumber":{
          "shape":"FragmentNumberString",
          "documentation":"<p>Specifies the fragment number from where you want the <code>GetMedia</code> API to start returning the fragments. </p>"
        },
        "StartTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>A time stamp value. This value is required if you choose the PRODUCER_TIMESTAMP or the SERVER_TIMESTAMP as the <code>startSelectorType</code>. The <code>GetMedia</code> API then starts with the chunk containing the fragment that has the specified time stamp.</p>"
        },
        "ContinuationToken":{
          "shape":"ContinuationToken",
          "documentation":"<p>Continuation token that Kinesis Video Streams returned in the previous <code>GetMedia</code> response. The <code>GetMedia</code> API then starts with the chunk identified by the continuation token.</p>"
        }
      },
      "documentation":"<p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or time stamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>"
    },
    "StartSelectorType":{
      "type":"string",
      "enum":[
        "FRAGMENT_NUMBER",
        "SERVER_TIMESTAMP",
        "PRODUCER_TIMESTAMP",
        "NOW",
        "EARLIEST",
        "CONTINUATION_TOKEN"
      ]
    },
    "StreamName":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"[a-zA-Z0-9_.-]+"
    },
    "Timestamp":{"type":"timestamp"}
  },
  "documentation":"<p/>"
}
