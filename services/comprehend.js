awsim['comprehend'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-11-27",
    "endpointPrefix":"comprehend",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Amazon Comprehend",
    "serviceId":"Comprehend",
    "signatureVersion":"v4",
    "signingName":"comprehend",
    "targetPrefix":"Comprehend_20171127",
    "uid":"comprehend-2017-11-27"
  },
  "operations":{
    "BatchDetectDominantLanguage":{
      "name":"BatchDetectDominantLanguage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDetectDominantLanguageRequest"},
      "output":{"shape":"BatchDetectDominantLanguageResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"BatchSizeLimitExceededException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href=\"http://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html\">Amazon Comprehend Supported Languages</a>. </p>"
    },
    "BatchDetectEntities":{
      "name":"BatchDetectEntities",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDetectEntitiesRequest"},
      "output":{"shape":"BatchDetectEntitiesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"UnsupportedLanguageException"},
        {"shape":"BatchSizeLimitExceededException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a>how-entities</a> </p>"
    },
    "BatchDetectKeyPhrases":{
      "name":"BatchDetectKeyPhrases",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDetectKeyPhrasesRequest"},
      "output":{"shape":"BatchDetectKeyPhrasesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"UnsupportedLanguageException"},
        {"shape":"BatchSizeLimitExceededException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Detects the key noun phrases found in a batch of documents.</p>"
    },
    "BatchDetectSentiment":{
      "name":"BatchDetectSentiment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDetectSentimentRequest"},
      "output":{"shape":"BatchDetectSentimentResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"UnsupportedLanguageException"},
        {"shape":"BatchSizeLimitExceededException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.</p>"
    },
    "BatchDetectSyntax":{
      "name":"BatchDetectSyntax",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDetectSyntaxRequest"},
      "output":{"shape":"BatchDetectSyntaxResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"UnsupportedLanguageException"},
        {"shape":"BatchSizeLimitExceededException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a>how-syntax</a>.</p>"
    },
    "DescribeDominantLanguageDetectionJob":{
      "name":"DescribeDominantLanguageDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDominantLanguageDetectionJobRequest"},
      "output":{"shape":"DescribeDominantLanguageDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.</p>"
    },
    "DescribeEntitiesDetectionJob":{
      "name":"DescribeEntitiesDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEntitiesDetectionJobRequest"},
      "output":{"shape":"DescribeEntitiesDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.</p>"
    },
    "DescribeKeyPhrasesDetectionJob":{
      "name":"DescribeKeyPhrasesDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeKeyPhrasesDetectionJobRequest"},
      "output":{"shape":"DescribeKeyPhrasesDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.</p>"
    },
    "DescribeSentimentDetectionJob":{
      "name":"DescribeSentimentDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSentimentDetectionJobRequest"},
      "output":{"shape":"DescribeSentimentDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.</p>"
    },
    "DescribeTopicsDetectionJob":{
      "name":"DescribeTopicsDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTopicsDetectionJobRequest"},
      "output":{"shape":"DescribeTopicsDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.</p>"
    },
    "DetectDominantLanguage":{
      "name":"DetectDominantLanguage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetectDominantLanguageRequest"},
      "output":{"shape":"DetectDominantLanguageResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href=\"http://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html\">Amazon Comprehend Supported Languages</a>. </p>"
    },
    "DetectEntities":{
      "name":"DetectEntities",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetectEntitiesRequest"},
      "output":{"shape":"DetectEntitiesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"UnsupportedLanguageException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Inspects text for named entities, and returns information about them. For more information, about named entities, see <a>how-entities</a>. </p>"
    },
    "DetectKeyPhrases":{
      "name":"DetectKeyPhrases",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetectKeyPhrasesRequest"},
      "output":{"shape":"DetectKeyPhrasesResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"UnsupportedLanguageException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Detects the key noun phrases found in the text. </p>"
    },
    "DetectSentiment":{
      "name":"DetectSentiment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetectSentimentRequest"},
      "output":{"shape":"DetectSentimentResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"UnsupportedLanguageException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). </p>"
    },
    "DetectSyntax":{
      "name":"DetectSyntax",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetectSyntaxRequest"},
      "output":{"shape":"DetectSyntaxResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TextSizeLimitExceededException"},
        {"shape":"UnsupportedLanguageException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Inspects text for syntax and the part of speech of words in the document. For more information, <a>how-syntax</a>.</p>"
    },
    "ListDominantLanguageDetectionJobs":{
      "name":"ListDominantLanguageDetectionJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDominantLanguageDetectionJobsRequest"},
      "output":{"shape":"ListDominantLanguageDetectionJobsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InvalidFilterException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets a list of the dominant language detection jobs that you have submitted.</p>"
    },
    "ListEntitiesDetectionJobs":{
      "name":"ListEntitiesDetectionJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListEntitiesDetectionJobsRequest"},
      "output":{"shape":"ListEntitiesDetectionJobsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InvalidFilterException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets a list of the entity detection jobs that you have submitted.</p>"
    },
    "ListKeyPhrasesDetectionJobs":{
      "name":"ListKeyPhrasesDetectionJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListKeyPhrasesDetectionJobsRequest"},
      "output":{"shape":"ListKeyPhrasesDetectionJobsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InvalidFilterException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Get a list of key phrase detection jobs that you have submitted.</p>"
    },
    "ListSentimentDetectionJobs":{
      "name":"ListSentimentDetectionJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListSentimentDetectionJobsRequest"},
      "output":{"shape":"ListSentimentDetectionJobsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InvalidFilterException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets a list of sentiment detection jobs that you have submitted.</p>"
    },
    "ListTopicsDetectionJobs":{
      "name":"ListTopicsDetectionJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTopicsDetectionJobsRequest"},
      "output":{"shape":"ListTopicsDetectionJobsResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InvalidFilterException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Gets a list of the topic detection jobs that you have submitted.</p>"
    },
    "StartDominantLanguageDetectionJob":{
      "name":"StartDominantLanguageDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartDominantLanguageDetectionJobRequest"},
      "output":{"shape":"StartDominantLanguageDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.</p>"
    },
    "StartEntitiesDetectionJob":{
      "name":"StartEntitiesDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartEntitiesDetectionJobRequest"},
      "output":{"shape":"StartEntitiesDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p>"
    },
    "StartKeyPhrasesDetectionJob":{
      "name":"StartKeyPhrasesDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartKeyPhrasesDetectionJobRequest"},
      "output":{"shape":"StartKeyPhrasesDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.</p>"
    },
    "StartSentimentDetectionJob":{
      "name":"StartSentimentDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartSentimentDetectionJobRequest"},
      "output":{"shape":"StartSentimentDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.</p>"
    },
    "StartTopicsDetectionJob":{
      "name":"StartTopicsDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartTopicsDetectionJobRequest"},
      "output":{"shape":"StartTopicsDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"TooManyRequestsException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.</p>"
    },
    "StopDominantLanguageDetectionJob":{
      "name":"StopDominantLanguageDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopDominantLanguageDetectionJobRequest"},
      "output":{"shape":"StopDominantLanguageDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>"
    },
    "StopEntitiesDetectionJob":{
      "name":"StopEntitiesDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopEntitiesDetectionJobRequest"},
      "output":{"shape":"StopEntitiesDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>"
    },
    "StopKeyPhrasesDetectionJob":{
      "name":"StopKeyPhrasesDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopKeyPhrasesDetectionJobRequest"},
      "output":{"shape":"StopKeyPhrasesDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>"
    },
    "StopSentimentDetectionJob":{
      "name":"StopSentimentDetectionJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopSentimentDetectionJobRequest"},
      "output":{"shape":"StopSentimentDetectionJobResponse"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"JobNotFoundException"},
        {"shape":"InternalServerException"}
      ],
      "documentation":"<p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>"
    }
  },
  "shapes":{
    "AnyLengthString":{"type":"string"},
    "BatchDetectDominantLanguageItemResult":{
      "type":"structure",
      "members":{
        "Index":{
          "shape":"Integer",
          "documentation":"<p>The zero-based index of the document in the input list.</p>"
        },
        "Languages":{
          "shape":"ListOfDominantLanguages",
          "documentation":"<p>One or more <a>DominantLanguage</a> objects describing the dominant languages in the document.</p>"
        }
      },
      "documentation":"<p>The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.</p>"
    },
    "BatchDetectDominantLanguageRequest":{
      "type":"structure",
      "required":["TextList"],
      "members":{
        "TextList":{
          "shape":"StringList",
          "documentation":"<p>A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document should contain at least 20 characters and must contain fewer than 5,000 bytes of UTF-8 encoded characters.</p>"
        }
      }
    },
    "BatchDetectDominantLanguageResponse":{
      "type":"structure",
      "required":[
        "ResultList",
        "ErrorList"
      ],
      "members":{
        "ResultList":{
          "shape":"ListOfDetectDominantLanguageResult",
          "documentation":"<p>A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.</p>"
        },
        "ErrorList":{
          "shape":"BatchItemErrorList",
          "documentation":"<p>A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.</p>"
        }
      }
    },
    "BatchDetectEntitiesItemResult":{
      "type":"structure",
      "members":{
        "Index":{
          "shape":"Integer",
          "documentation":"<p>The zero-based index of the document in the input list.</p>"
        },
        "Entities":{
          "shape":"ListOfEntities",
          "documentation":"<p>One or more <a>Entity</a> objects, one for each entity detected in the document.</p>"
        }
      },
      "documentation":"<p>The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.</p>"
    },
    "BatchDetectEntitiesRequest":{
      "type":"structure",
      "required":[
        "TextList",
        "LanguageCode"
      ],
      "members":{
        "TextList":{
          "shape":"StringList",
          "documentation":"<p>A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer than 5,000 bytes of UTF-8 encoded characters.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        }
      }
    },
    "BatchDetectEntitiesResponse":{
      "type":"structure",
      "required":[
        "ResultList",
        "ErrorList"
      ],
      "members":{
        "ResultList":{
          "shape":"ListOfDetectEntitiesResult",
          "documentation":"<p>A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.</p>"
        },
        "ErrorList":{
          "shape":"BatchItemErrorList",
          "documentation":"<p>A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.</p>"
        }
      }
    },
    "BatchDetectKeyPhrasesItemResult":{
      "type":"structure",
      "members":{
        "Index":{
          "shape":"Integer",
          "documentation":"<p>The zero-based index of the document in the input list.</p>"
        },
        "KeyPhrases":{
          "shape":"ListOfKeyPhrases",
          "documentation":"<p>One or more <a>KeyPhrase</a> objects, one for each key phrase detected in the document.</p>"
        }
      },
      "documentation":"<p>The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.</p>"
    },
    "BatchDetectKeyPhrasesRequest":{
      "type":"structure",
      "required":[
        "TextList",
        "LanguageCode"
      ],
      "members":{
        "TextList":{
          "shape":"StringList",
          "documentation":"<p>A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        }
      }
    },
    "BatchDetectKeyPhrasesResponse":{
      "type":"structure",
      "required":[
        "ResultList",
        "ErrorList"
      ],
      "members":{
        "ResultList":{
          "shape":"ListOfDetectKeyPhrasesResult",
          "documentation":"<p>A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.</p>"
        },
        "ErrorList":{
          "shape":"BatchItemErrorList",
          "documentation":"<p>A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.</p>"
        }
      }
    },
    "BatchDetectSentimentItemResult":{
      "type":"structure",
      "members":{
        "Index":{
          "shape":"Integer",
          "documentation":"<p>The zero-based index of the document in the input list.</p>"
        },
        "Sentiment":{
          "shape":"SentimentType",
          "documentation":"<p>The sentiment detected in the document.</p>"
        },
        "SentimentScore":{
          "shape":"SentimentScore",
          "documentation":"<p>The level of confidence that Amazon Comprehend has in the accuracy of its sentiment detection.</p>"
        }
      },
      "documentation":"<p>The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.</p>"
    },
    "BatchDetectSentimentRequest":{
      "type":"structure",
      "required":[
        "TextList",
        "LanguageCode"
      ],
      "members":{
        "TextList":{
          "shape":"StringList",
          "documentation":"<p>A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        }
      }
    },
    "BatchDetectSentimentResponse":{
      "type":"structure",
      "required":[
        "ResultList",
        "ErrorList"
      ],
      "members":{
        "ResultList":{
          "shape":"ListOfDetectSentimentResult",
          "documentation":"<p>A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.</p>"
        },
        "ErrorList":{
          "shape":"BatchItemErrorList",
          "documentation":"<p>A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.</p>"
        }
      }
    },
    "BatchDetectSyntaxItemResult":{
      "type":"structure",
      "members":{
        "Index":{
          "shape":"Integer",
          "documentation":"<p>The zero-based index of the document in the input list.</p>"
        },
        "SyntaxTokens":{
          "shape":"ListOfSyntaxTokens",
          "documentation":"<p>The syntax tokens for the words in the document, one token for each word.</p>"
        }
      },
      "documentation":"<p>The result of calling the operation. The operation returns one object that is successfully processed by the operation.</p>"
    },
    "BatchDetectSyntaxRequest":{
      "type":"structure",
      "required":[
        "TextList",
        "LanguageCode"
      ],
      "members":{
        "TextList":{
          "shape":"StringList",
          "documentation":"<p>A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.</p>"
        },
        "LanguageCode":{
          "shape":"SyntaxLanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        }
      }
    },
    "BatchDetectSyntaxResponse":{
      "type":"structure",
      "required":[
        "ResultList",
        "ErrorList"
      ],
      "members":{
        "ResultList":{
          "shape":"ListOfDetectSyntaxResult",
          "documentation":"<p>A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.</p>"
        },
        "ErrorList":{
          "shape":"BatchItemErrorList",
          "documentation":"<p>A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.</p>"
        }
      }
    },
    "BatchItemError":{
      "type":"structure",
      "members":{
        "Index":{
          "shape":"Integer",
          "documentation":"<p>The zero-based index of the document in the input list.</p>"
        },
        "ErrorCode":{
          "shape":"String",
          "documentation":"<p>The numeric error code of the error.</p>"
        },
        "ErrorMessage":{
          "shape":"String",
          "documentation":"<p>A text description of the error.</p>"
        }
      },
      "documentation":"<p>Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.</p>"
    },
    "BatchItemErrorList":{
      "type":"list",
      "member":{"shape":"BatchItemError"}
    },
    "BatchSizeLimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.</p>",
      "exception":true
    },
    "ClientRequestTokenString":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"^[a-zA-Z0-9-]+$"
    },
    "DescribeDominantLanguageDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.</p>"
        }
      }
    },
    "DescribeDominantLanguageDetectionJobResponse":{
      "type":"structure",
      "members":{
        "DominantLanguageDetectionJobProperties":{
          "shape":"DominantLanguageDetectionJobProperties",
          "documentation":"<p>An object that contains the properties associated with a dominant language detection job.</p>"
        }
      }
    },
    "DescribeEntitiesDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.</p>"
        }
      }
    },
    "DescribeEntitiesDetectionJobResponse":{
      "type":"structure",
      "members":{
        "EntitiesDetectionJobProperties":{
          "shape":"EntitiesDetectionJobProperties",
          "documentation":"<p>An object that contains the properties associated with an entities detection job.</p>"
        }
      }
    },
    "DescribeKeyPhrasesDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.</p>"
        }
      }
    },
    "DescribeKeyPhrasesDetectionJobResponse":{
      "type":"structure",
      "members":{
        "KeyPhrasesDetectionJobProperties":{
          "shape":"KeyPhrasesDetectionJobProperties",
          "documentation":"<p>An object that contains the properties associated with a key phrases detection job. </p>"
        }
      }
    },
    "DescribeSentimentDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.</p>"
        }
      }
    },
    "DescribeSentimentDetectionJobResponse":{
      "type":"structure",
      "members":{
        "SentimentDetectionJobProperties":{
          "shape":"SentimentDetectionJobProperties",
          "documentation":"<p>An object that contains the properties associated with a sentiment detection job.</p>"
        }
      }
    },
    "DescribeTopicsDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier assigned by the user to the detection job.</p>"
        }
      }
    },
    "DescribeTopicsDetectionJobResponse":{
      "type":"structure",
      "members":{
        "TopicsDetectionJobProperties":{
          "shape":"TopicsDetectionJobProperties",
          "documentation":"<p>The list of properties for the requested job.</p>"
        }
      }
    },
    "DetectDominantLanguageRequest":{
      "type":"structure",
      "required":["Text"],
      "members":{
        "Text":{
          "shape":"String",
          "documentation":"<p>A UTF-8 text string. Each string should contain at least 20 characters and must contain fewer that 5,000 bytes of UTF-8 encoded characters.</p>"
        }
      }
    },
    "DetectDominantLanguageResponse":{
      "type":"structure",
      "members":{
        "Languages":{
          "shape":"ListOfDominantLanguages",
          "documentation":"<p>The languages that Amazon Comprehend detected in the input text. For each language, the response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy of its inference. For more information about RFC 5646, see <a href=\"https://tools.ietf.org/html/rfc5646\">Tags for Identifying Languages</a> on the <i>IETF Tools</i> web site.</p>"
        }
      }
    },
    "DetectEntitiesRequest":{
      "type":"structure",
      "required":[
        "Text",
        "LanguageCode"
      ],
      "members":{
        "Text":{
          "shape":"String",
          "documentation":"<p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        }
      }
    },
    "DetectEntitiesResponse":{
      "type":"structure",
      "members":{
        "Entities":{
          "shape":"ListOfEntities",
          "documentation":"<p>A collection of entities identified in the input text. For each entity, the response provides the entity text, entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection. For a list of entity types, see <a>how-entities</a>. </p>"
        }
      }
    },
    "DetectKeyPhrasesRequest":{
      "type":"structure",
      "required":[
        "Text",
        "LanguageCode"
      ],
      "members":{
        "Text":{
          "shape":"String",
          "documentation":"<p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        }
      }
    },
    "DetectKeyPhrasesResponse":{
      "type":"structure",
      "members":{
        "KeyPhrases":{
          "shape":"ListOfKeyPhrases",
          "documentation":"<p>A collection of key phrases that Amazon Comprehend identified in the input text. For each key phrase, the response provides the text of the key phrase, where the key phrase begins and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the detection. </p>"
        }
      }
    },
    "DetectSentimentRequest":{
      "type":"structure",
      "required":[
        "Text",
        "LanguageCode"
      ],
      "members":{
        "Text":{
          "shape":"String",
          "documentation":"<p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        }
      }
    },
    "DetectSentimentResponse":{
      "type":"structure",
      "members":{
        "Sentiment":{
          "shape":"SentimentType",
          "documentation":"<p>The inferred sentiment that Amazon Comprehend has the highest level of confidence in.</p>"
        },
        "SentimentScore":{
          "shape":"SentimentScore",
          "documentation":"<p>An object that lists the sentiments, and their corresponding confidence levels.</p>"
        }
      }
    },
    "DetectSyntaxRequest":{
      "type":"structure",
      "required":[
        "Text",
        "LanguageCode"
      ],
      "members":{
        "Text":{
          "shape":"String",
          "documentation":"<p>A UTF-8 string. Each string must contain fewer that 5,000 bytes of UTF encoded characters.</p>"
        },
        "LanguageCode":{
          "shape":"SyntaxLanguageCode",
          "documentation":"<p>The language code of the input documents. You can specify English (\"en\") or Spanish (\"es\").</p>"
        }
      }
    },
    "DetectSyntaxResponse":{
      "type":"structure",
      "members":{
        "SyntaxTokens":{
          "shape":"ListOfSyntaxTokens",
          "documentation":"<p>A collection of syntax tokens describing the text. For each token, the response provides the text, the token type, where the text begins and ends, and the level of confidence that Amazon Comprehend has that the token is correct. For a list of token types, see <a>how-syntax</a>.</p>"
        }
      }
    },
    "DominantLanguage":{
      "type":"structure",
      "members":{
        "LanguageCode":{
          "shape":"String",
          "documentation":"<p>The RFC 5646 language code for the dominant language. For more information about RFC 5646, see <a href=\"https://tools.ietf.org/html/rfc5646\">Tags for Identifying Languages</a> on the <i>IETF Tools</i> web site.</p>"
        },
        "Score":{
          "shape":"Float",
          "documentation":"<p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>"
        }
      },
      "documentation":"<p>Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>"
    },
    "DominantLanguageDetectionJobFilter":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>Filters on the name of the job.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Filters the list of jobs based on job status. Returns only jobs with the specified status.</p>"
        },
        "SubmitTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.</p>"
        },
        "SubmitTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.</p>"
        }
      },
      "documentation":"<p>Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.</p>"
    },
    "DominantLanguageDetectionJobProperties":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier assigned to the dominant language detection job.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The name that you assigned to the dominant language detection job.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The current status of the dominant language detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>"
        },
        "Message":{
          "shape":"AnyLengthString",
          "documentation":"<p>A description for the status of a job.</p>"
        },
        "SubmitTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the dominant language detection job was submitted for processing.</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the dominant language detection job completed.</p>"
        },
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>The input data configuration that you supplied when you created the dominant language detection job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>The output data configuration that you supplied when you created the dominant language detection job.</p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>"
        }
      },
      "documentation":"<p>Provides information about a dominant language detection job.</p>"
    },
    "DominantLanguageDetectionJobPropertiesList":{
      "type":"list",
      "member":{"shape":"DominantLanguageDetectionJobProperties"}
    },
    "EntitiesDetectionJobFilter":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>Filters on the name of the job.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Filters the list of jobs based on job status. Returns only jobs with the specified status.</p>"
        },
        "SubmitTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.</p>"
        },
        "SubmitTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.</p>"
        }
      },
      "documentation":"<p>Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.</p>"
    },
    "EntitiesDetectionJobProperties":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier assigned to the entities detection job.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The name that you assigned the entities detection job.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The current status of the entities detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>"
        },
        "Message":{
          "shape":"AnyLengthString",
          "documentation":"<p>A description of the status of a job.</p>"
        },
        "SubmitTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the entities detection job was submitted for processing.</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the entities detection job completed</p>"
        },
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>The input data configuration that you supplied when you created the entities detection job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>The output data configuration that you supplied when you created the entities detection job. </p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language code of the input documents.</p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>"
        }
      },
      "documentation":"<p>Provides information about an entities detection job.</p>"
    },
    "EntitiesDetectionJobPropertiesList":{
      "type":"list",
      "member":{"shape":"EntitiesDetectionJobProperties"}
    },
    "Entity":{
      "type":"structure",
      "members":{
        "Score":{
          "shape":"Float",
          "documentation":"<p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>"
        },
        "Type":{
          "shape":"EntityType",
          "documentation":"<p>The entity's type.</p>"
        },
        "Text":{
          "shape":"String",
          "documentation":"<p>The text of the entity.</p>"
        },
        "BeginOffset":{
          "shape":"Integer",
          "documentation":"<p>A character offset in the input text that shows where the entity begins (the first character is at position 0). The offset returns the position of each UTF-8 code point in the string. A <i>code point</i> is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.</p>"
        },
        "EndOffset":{
          "shape":"Integer",
          "documentation":"<p>A character offset in the input text that shows where the entity ends. The offset returns the position of each UTF-8 code point in the string. A <i>code point</i> is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point. </p>"
        }
      },
      "documentation":"<p>Provides information about an entity. </p> <p> </p>"
    },
    "EntityType":{
      "type":"string",
      "enum":[
        "PERSON",
        "LOCATION",
        "ORGANIZATION",
        "COMMERCIAL_ITEM",
        "EVENT",
        "DATE",
        "QUANTITY",
        "TITLE",
        "OTHER"
      ]
    },
    "Float":{"type":"float"},
    "IamRoleArn":{
      "type":"string",
      "pattern":"arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+"
    },
    "InputDataConfig":{
      "type":"structure",
      "required":["S3Uri"],
      "members":{
        "S3Uri":{
          "shape":"S3Uri",
          "documentation":"<p>The Amazon S3 URI for the input data. The URI must be in same region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of data files. </p> <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.</p>"
        },
        "InputFormat":{
          "shape":"InputFormat",
          "documentation":"<p>Specifies how the text in an input file should be processed:</p> <ul> <li> <p> <code>ONE_DOC_PER_FILE</code> - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers.</p> </li> <li> <p> <code>ONE_DOC_PER_LINE</code> - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.</p> </li> </ul>"
        }
      },
      "documentation":"<p>The input properties for a topic detection job.</p>"
    },
    "InputFormat":{
      "type":"string",
      "enum":[
        "ONE_DOC_PER_FILE",
        "ONE_DOC_PER_LINE"
      ]
    },
    "Integer":{"type":"integer"},
    "InternalServerException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>An internal server error occurred. Retry your request.</p>",
      "exception":true,
      "fault":true
    },
    "InvalidFilterException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The filter specified for the <code>ListTopicDetectionJobs</code> operation is invalid. Specify a different filter.</p>",
      "exception":true
    },
    "InvalidRequestException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The request is invalid.</p>",
      "exception":true
    },
    "JobId":{
      "type":"string",
      "max":32,
      "min":1
    },
    "JobName":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-%@]*)$"
    },
    "JobNotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The specified job was not found. Check the job ID and try again.</p>",
      "exception":true
    },
    "JobStatus":{
      "type":"string",
      "enum":[
        "SUBMITTED",
        "IN_PROGRESS",
        "COMPLETED",
        "FAILED",
        "STOP_REQUESTED",
        "STOPPED"
      ]
    },
    "KeyPhrase":{
      "type":"structure",
      "members":{
        "Score":{
          "shape":"Float",
          "documentation":"<p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>"
        },
        "Text":{
          "shape":"String",
          "documentation":"<p>The text of a key noun phrase.</p>"
        },
        "BeginOffset":{
          "shape":"Integer",
          "documentation":"<p>A character offset in the input text that shows where the key phrase begins (the first character is at position 0). The offset returns the position of each UTF-8 code point in the string. A <i>code point</i> is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.</p>"
        },
        "EndOffset":{
          "shape":"Integer",
          "documentation":"<p>A character offset in the input text where the key phrase ends. The offset returns the position of each UTF-8 code point in the string. A <code>code point</code> is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.</p>"
        }
      },
      "documentation":"<p>Describes a key noun phrase.</p>"
    },
    "KeyPhrasesDetectionJobFilter":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>Filters on the name of the job.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Filters the list of jobs based on job status. Returns only jobs with the specified status.</p>"
        },
        "SubmitTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.</p>"
        },
        "SubmitTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.</p>"
        }
      },
      "documentation":"<p>Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.</p>"
    },
    "KeyPhrasesDetectionJobProperties":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier assigned to the key phrases detection job.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The name that you assigned the key phrases detection job.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The current status of the key phrases detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>"
        },
        "Message":{
          "shape":"AnyLengthString",
          "documentation":"<p>A description of the status of a job.</p>"
        },
        "SubmitTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the key phrases detection job was submitted for processing.</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the key phrases detection job completed.</p>"
        },
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>The input data configuration that you supplied when you created the key phrases detection job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>The output data configuration that you supplied when you created the key phrases detection job.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language code of the input documents.</p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>"
        }
      },
      "documentation":"<p>Provides information about a key phrases detection job.</p>"
    },
    "KeyPhrasesDetectionJobPropertiesList":{
      "type":"list",
      "member":{"shape":"KeyPhrasesDetectionJobProperties"}
    },
    "LanguageCode":{
      "type":"string",
      "enum":[
        "en",
        "es"
      ]
    },
    "ListDominantLanguageDetectionJobsRequest":{
      "type":"structure",
      "members":{
        "Filter":{
          "shape":"DominantLanguageDetectionJobFilter",
          "documentation":"<p>Filters that jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        },
        "MaxResults":{
          "shape":"MaxResultsInteger",
          "documentation":"<p>The maximum number of results to return in each page. The default is 100.</p>"
        }
      }
    },
    "ListDominantLanguageDetectionJobsResponse":{
      "type":"structure",
      "members":{
        "DominantLanguageDetectionJobPropertiesList":{
          "shape":"DominantLanguageDetectionJobPropertiesList",
          "documentation":"<p>A list containing the properties of each job that is returned.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        }
      }
    },
    "ListEntitiesDetectionJobsRequest":{
      "type":"structure",
      "members":{
        "Filter":{
          "shape":"EntitiesDetectionJobFilter",
          "documentation":"<p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        },
        "MaxResults":{
          "shape":"MaxResultsInteger",
          "documentation":"<p>The maximum number of results to return in each page. The default is 100.</p>"
        }
      }
    },
    "ListEntitiesDetectionJobsResponse":{
      "type":"structure",
      "members":{
        "EntitiesDetectionJobPropertiesList":{
          "shape":"EntitiesDetectionJobPropertiesList",
          "documentation":"<p>A list containing the properties of each job that is returned.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        }
      }
    },
    "ListKeyPhrasesDetectionJobsRequest":{
      "type":"structure",
      "members":{
        "Filter":{
          "shape":"KeyPhrasesDetectionJobFilter",
          "documentation":"<p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        },
        "MaxResults":{
          "shape":"MaxResultsInteger",
          "documentation":"<p>The maximum number of results to return in each page. The default is 100.</p>"
        }
      }
    },
    "ListKeyPhrasesDetectionJobsResponse":{
      "type":"structure",
      "members":{
        "KeyPhrasesDetectionJobPropertiesList":{
          "shape":"KeyPhrasesDetectionJobPropertiesList",
          "documentation":"<p>A list containing the properties of each job that is returned.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        }
      }
    },
    "ListOfDetectDominantLanguageResult":{
      "type":"list",
      "member":{"shape":"BatchDetectDominantLanguageItemResult"}
    },
    "ListOfDetectEntitiesResult":{
      "type":"list",
      "member":{"shape":"BatchDetectEntitiesItemResult"}
    },
    "ListOfDetectKeyPhrasesResult":{
      "type":"list",
      "member":{"shape":"BatchDetectKeyPhrasesItemResult"}
    },
    "ListOfDetectSentimentResult":{
      "type":"list",
      "member":{"shape":"BatchDetectSentimentItemResult"}
    },
    "ListOfDetectSyntaxResult":{
      "type":"list",
      "member":{"shape":"BatchDetectSyntaxItemResult"}
    },
    "ListOfDominantLanguages":{
      "type":"list",
      "member":{"shape":"DominantLanguage"}
    },
    "ListOfEntities":{
      "type":"list",
      "member":{"shape":"Entity"}
    },
    "ListOfKeyPhrases":{
      "type":"list",
      "member":{"shape":"KeyPhrase"}
    },
    "ListOfSyntaxTokens":{
      "type":"list",
      "member":{"shape":"SyntaxToken"}
    },
    "ListSentimentDetectionJobsRequest":{
      "type":"structure",
      "members":{
        "Filter":{
          "shape":"SentimentDetectionJobFilter",
          "documentation":"<p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        },
        "MaxResults":{
          "shape":"MaxResultsInteger",
          "documentation":"<p>The maximum number of results to return in each page. The default is 100.</p>"
        }
      }
    },
    "ListSentimentDetectionJobsResponse":{
      "type":"structure",
      "members":{
        "SentimentDetectionJobPropertiesList":{
          "shape":"SentimentDetectionJobPropertiesList",
          "documentation":"<p>A list containing the properties of each job that is returned.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        }
      }
    },
    "ListTopicsDetectionJobsRequest":{
      "type":"structure",
      "members":{
        "Filter":{
          "shape":"TopicsDetectionJobFilter",
          "documentation":"<p>Filters the jobs that are returned. Jobs can be filtered on their name, status, or the date and time that they were submitted. You can set only one filter at a time.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        },
        "MaxResults":{
          "shape":"MaxResultsInteger",
          "documentation":"<p>The maximum number of results to return in each page. The default is 100.</p>"
        }
      }
    },
    "ListTopicsDetectionJobsResponse":{
      "type":"structure",
      "members":{
        "TopicsDetectionJobPropertiesList":{
          "shape":"TopicsDetectionJobPropertiesList",
          "documentation":"<p>A list containing the properties of each job that is returned.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Identifies the next page of results to return.</p>"
        }
      }
    },
    "MaxResultsInteger":{
      "type":"integer",
      "max":500,
      "min":1
    },
    "NumberOfTopicsInteger":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "OutputDataConfig":{
      "type":"structure",
      "required":["S3Uri"],
      "members":{
        "S3Uri":{
          "shape":"S3Uri",
          "documentation":"<p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output file.</p> <p>When the topic detection job is finished, the service creates an output file in a directory specific to the job. The <code>S3Uri</code> field contains the location of the output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the ouput of the operation.</p>"
        }
      },
      "documentation":"<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>"
    },
    "PartOfSpeechTag":{
      "type":"structure",
      "members":{
        "Tag":{
          "shape":"PartOfSpeechTagType",
          "documentation":"<p>Identifies the part of speech that the token represents.</p>"
        },
        "Score":{
          "shape":"Float",
          "documentation":"<p>The confidence that Amazon Comprehend has that the part of speech was correctly identified.</p>"
        }
      },
      "documentation":"<p>Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>.</p>"
    },
    "PartOfSpeechTagType":{
      "type":"string",
      "enum":[
        "ADJ",
        "ADP",
        "ADV",
        "AUX",
        "CONJ",
        "DET",
        "INTJ",
        "NOUN",
        "NUM",
        "O",
        "PART",
        "PRON",
        "PROPN",
        "PUNCT",
        "SCONJ",
        "SYM",
        "VERB"
      ]
    },
    "S3Uri":{
      "type":"string",
      "max":1024,
      "pattern":"s3://[a-z0-9][\\.\\-a-z0-9]{1,61}[a-z0-9](/.*)?"
    },
    "SentimentDetectionJobFilter":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>Filters on the name of the job.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Filters the list of jobs based on job status. Returns only jobs with the specified status.</p>"
        },
        "SubmitTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.</p>"
        },
        "SubmitTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.</p>"
        }
      },
      "documentation":"<p>Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.</p>"
    },
    "SentimentDetectionJobProperties":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier assigned to the sentiment detection job.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The name that you assigned to the sentiment detection job</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The current status of the sentiment detection job. If the status is <code>FAILED</code>, the <code>Messages</code> field shows the reason for the failure.</p>"
        },
        "Message":{
          "shape":"AnyLengthString",
          "documentation":"<p>A description of the status of a job.</p>"
        },
        "SubmitTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the sentiment detection job was submitted for processing.</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the sentiment detection job ended.</p>"
        },
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>The input data configuration that you supplied when you created the sentiment detection job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>The output data configuration that you supplied when you created the sentiment detection job.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language code of the input documents.</p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>"
        }
      },
      "documentation":"<p>Provides information about a sentiment detection job.</p>"
    },
    "SentimentDetectionJobPropertiesList":{
      "type":"list",
      "member":{"shape":"SentimentDetectionJobProperties"}
    },
    "SentimentScore":{
      "type":"structure",
      "members":{
        "Positive":{
          "shape":"Float",
          "documentation":"<p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>POSITIVE</code> sentiment.</p>"
        },
        "Negative":{
          "shape":"Float",
          "documentation":"<p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>NEGATIVE</code> sentiment.</p>"
        },
        "Neutral":{
          "shape":"Float",
          "documentation":"<p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>NEUTRAL</code> sentiment.</p>"
        },
        "Mixed":{
          "shape":"Float",
          "documentation":"<p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>MIXED</code> sentiment.</p>"
        }
      },
      "documentation":"<p>Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.</p>"
    },
    "SentimentType":{
      "type":"string",
      "enum":[
        "POSITIVE",
        "NEGATIVE",
        "NEUTRAL",
        "MIXED"
      ]
    },
    "StartDominantLanguageDetectionJobRequest":{
      "type":"structure",
      "required":[
        "InputDataConfig",
        "OutputDataConfig",
        "DataAccessRoleArn"
      ],
      "members":{
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>Specifies the format and location of the input data for the job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>Specifies where to send the output files.</p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions\">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>An identifier for the job.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestTokenString",
          "documentation":"<p>A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.</p>",
          "idempotencyToken":true
        }
      }
    },
    "StartDominantLanguageDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier generated for the job. To get the status of a job, use this identifier with the operation.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> </ul>"
        }
      }
    },
    "StartEntitiesDetectionJobRequest":{
      "type":"structure",
      "required":[
        "InputDataConfig",
        "OutputDataConfig",
        "DataAccessRoleArn",
        "LanguageCode"
      ],
      "members":{
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>Specifies the format and location of the input data for the job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>Specifies where to send the output files.</p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions\">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The identifier of the job.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestTokenString",
          "documentation":"<p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.</p>",
          "idempotencyToken":true
        }
      }
    },
    "StartEntitiesDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier generated for the job. To get the status of job, use this identifier with the operation.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> </ul>"
        }
      }
    },
    "StartKeyPhrasesDetectionJobRequest":{
      "type":"structure",
      "required":[
        "InputDataConfig",
        "OutputDataConfig",
        "DataAccessRoleArn",
        "LanguageCode"
      ],
      "members":{
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>Specifies the format and location of the input data for the job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>Specifies where to send the output files.</p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions\">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The identifier of the job.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestTokenString",
          "documentation":"<p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.</p>",
          "idempotencyToken":true
        }
      }
    },
    "StartKeyPhrasesDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier generated for the job. To get the status of a job, use this identifier with the operation.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> </ul>"
        }
      }
    },
    "StartSentimentDetectionJobRequest":{
      "type":"structure",
      "required":[
        "InputDataConfig",
        "OutputDataConfig",
        "DataAccessRoleArn",
        "LanguageCode"
      ],
      "members":{
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>Specifies the format and location of the input data for the job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>Specifies where to send the output files. </p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions\">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The identifier of the job.</p>"
        },
        "LanguageCode":{
          "shape":"LanguageCode",
          "documentation":"<p>The language of the input documents. You can specify English (\"en\") or Spanish (\"es\"). All documents must be in the same language.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestTokenString",
          "documentation":"<p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.</p>",
          "idempotencyToken":true
        }
      }
    },
    "StartSentimentDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier generated for the job. To get the status of a job, use this identifier with the operation.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> </ul>"
        }
      }
    },
    "StartTopicsDetectionJobRequest":{
      "type":"structure",
      "required":[
        "InputDataConfig",
        "OutputDataConfig",
        "DataAccessRoleArn"
      ],
      "members":{
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>Specifies the format and location of the input data for the job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>Specifies where to send the output files. The output is a compressed archive with two files, <code>topic-terms.csv</code> that lists the terms associated with each topic, and <code>doc-topics.csv</code> that lists the documents associated with each topic</p>"
        },
        "DataAccessRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions\">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The identifier of the job.</p>"
        },
        "NumberOfTopics":{
          "shape":"NumberOfTopicsInteger",
          "documentation":"<p>The number of topics to detect.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestTokenString",
          "documentation":"<p>A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.</p>",
          "idempotencyToken":true
        }
      }
    },
    "StartTopicsDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier generated for the job. To get the status of the job, use this identifier with the <code>DescribeTopicDetectionJob</code> operation.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The status of the job: </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the <code>DescribeTopicDetectionJob</code> operation.</p> </li> </ul>"
        }
      }
    },
    "StopDominantLanguageDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier of the dominant language detection job to stop.</p>"
        }
      }
    },
    "StopDominantLanguageDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier of the dominant language detection job to stop.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopDominantLanguageDetectionJob</code> operation.</p>"
        }
      }
    },
    "StopEntitiesDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier of the entities detection job to stop.</p>"
        }
      }
    },
    "StopEntitiesDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier of the entities detection job to stop.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopEntitiesDetectionJob</code> operation.</p>"
        }
      }
    },
    "StopKeyPhrasesDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier of the key phrases detection job to stop.</p>"
        }
      }
    },
    "StopKeyPhrasesDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier of the key phrases detection job to stop.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopKeyPhrasesDetectionJob</code> operation.</p>"
        }
      }
    },
    "StopSentimentDetectionJobRequest":{
      "type":"structure",
      "required":["JobId"],
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier of the sentiment detection job to stop.</p>"
        }
      }
    },
    "StopSentimentDetectionJobResponse":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier of the sentiment detection job to stop.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopSentimentDetectionJob</code> operation.</p>"
        }
      }
    },
    "String":{
      "type":"string",
      "min":1
    },
    "StringList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "SyntaxLanguageCode":{
      "type":"string",
      "enum":["en"]
    },
    "SyntaxToken":{
      "type":"structure",
      "members":{
        "TokenId":{
          "shape":"Integer",
          "documentation":"<p>A unique identifier for a token.</p>"
        },
        "Text":{
          "shape":"String",
          "documentation":"<p>The word that was recognized in the source text.</p>"
        },
        "BeginOffset":{
          "shape":"Integer",
          "documentation":"<p>The zero-based offset from the beginning of the source text to the first character in the word.</p>"
        },
        "EndOffset":{
          "shape":"Integer",
          "documentation":"<p>The zero-based offset from the beginning of the source text to the last character in the word.</p>"
        },
        "PartOfSpeech":{
          "shape":"PartOfSpeechTag",
          "documentation":"<p>Provides the part of speech label and the confidence level that Amazon Comprehend has that the part of speech was correctly identified. For more information, see <a>how-syntax</a>.</p>"
        }
      },
      "documentation":"<p>Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.</p>"
    },
    "TextSizeLimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The size of the input text exceeds the limit. Use a smaller document.</p>",
      "exception":true
    },
    "Timestamp":{"type":"timestamp"},
    "TooManyRequestsException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>The number of requests exceeds the limit. Resubmit your request later.</p>",
      "exception":true
    },
    "TopicsDetectionJobFilter":{
      "type":"structure",
      "members":{
        "JobName":{
          "shape":"JobName",
          "documentation":"<p/>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>Filters the list of topic detection jobs based on job status. Returns only jobs with the specified status.</p>"
        },
        "SubmitTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.</p>"
        },
        "SubmitTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.</p>"
        }
      },
      "documentation":"<p>Provides information for filtering topic detection jobs. For more information, see .</p>"
    },
    "TopicsDetectionJobProperties":{
      "type":"structure",
      "members":{
        "JobId":{
          "shape":"JobId",
          "documentation":"<p>The identifier assigned to the topic detection job.</p>"
        },
        "JobName":{
          "shape":"JobName",
          "documentation":"<p>The name of the topic detection job.</p>"
        },
        "JobStatus":{
          "shape":"JobStatus",
          "documentation":"<p>The current status of the topic detection job. If the status is <code>Failed</code>, the reason for the failure is shown in the <code>Message</code> field.</p>"
        },
        "Message":{
          "shape":"AnyLengthString",
          "documentation":"<p>A description for the status of a job.</p>"
        },
        "SubmitTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the topic detection job was submitted for processing.</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>The time that the topic detection job was completed.</p>"
        },
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>The input data configuration supplied when you created the topic detection job.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>The output data configuration supplied when you created the topic detection job.</p>"
        },
        "NumberOfTopics":{
          "shape":"Integer",
          "documentation":"<p>The number of topics to detect supplied when you created the topic detection job. The default is 10. </p>"
        }
      },
      "documentation":"<p>Provides information about a topic detection job.</p>"
    },
    "TopicsDetectionJobPropertiesList":{
      "type":"list",
      "member":{"shape":"TopicsDetectionJobProperties"}
    },
    "UnsupportedLanguageException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"String"}
      },
      "documentation":"<p>Amazon Comprehend can't process the language of the input text. For all APIs except <code>DetectDominantLanguage</code>, Amazon Comprehend accepts only English or Spanish text. For the <code>DetectDominantLanguage</code> API, Amazon Comprehend detects 100 languages. For a list of languages, see <a>how-languages</a> </p>",
      "exception":true
    }
  },
  "documentation":"<p>Amazon Comprehend is an AWS service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more.</p>"
}
