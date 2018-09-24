awsim['stepfunctions'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-11-23",
    "endpointPrefix":"states",
    "jsonVersion":"1.0",
    "protocol":"json",
    "serviceAbbreviation":"AWS SFN",
    "serviceFullName":"AWS Step Functions",
    "serviceId":"SFN",
    "signatureVersion":"v4",
    "targetPrefix":"AWSStepFunctions",
    "uid":"states-2016-11-23"
  },
  "operations":{
    "CreateActivity":{
      "name":"CreateActivity",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateActivityInput"},
      "output":{"shape":"CreateActivityOutput"},
      "errors":[
        {"shape":"ActivityLimitExceeded"},
        {"shape":"InvalidName"}
      ],
      "documentation":"<p>Creates an activity. An activity is a task which you write in any programming language and host on any machine which has access to AWS Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p>",
      "idempotent":true
    },
    "CreateStateMachine":{
      "name":"CreateStateMachine",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateStateMachineInput"},
      "output":{"shape":"CreateStateMachineOutput"},
      "errors":[
        {"shape":"InvalidArn"},
        {"shape":"InvalidDefinition"},
        {"shape":"InvalidName"},
        {"shape":"StateMachineAlreadyExists"},
        {"shape":"StateMachineDeleting"},
        {"shape":"StateMachineLimitExceeded"}
      ],
      "documentation":"<p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language.</p>",
      "idempotent":true
    },
    "DeleteActivity":{
      "name":"DeleteActivity",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteActivityInput"},
      "output":{"shape":"DeleteActivityOutput"},
      "errors":[
        {"shape":"InvalidArn"}
      ],
      "documentation":"<p>Deletes an activity.</p>"
    },
    "DeleteStateMachine":{
      "name":"DeleteStateMachine",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteStateMachineInput"},
      "output":{"shape":"DeleteStateMachineOutput"},
      "errors":[
        {"shape":"InvalidArn"}
      ],
      "documentation":"<p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. Each state machine execution is deleted the next time it makes a state transition.</p> <note> <p>The state machine itself is deleted after all executions are completed or deleted.</p> </note>"
    },
    "DescribeActivity":{
      "name":"DescribeActivity",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeActivityInput"},
      "output":{"shape":"DescribeActivityOutput"},
      "errors":[
        {"shape":"ActivityDoesNotExist"},
        {"shape":"InvalidArn"}
      ],
      "documentation":"<p>Describes an activity.</p>"
    },
    "DescribeExecution":{
      "name":"DescribeExecution",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeExecutionInput"},
      "output":{"shape":"DescribeExecutionOutput"},
      "errors":[
        {"shape":"ExecutionDoesNotExist"},
        {"shape":"InvalidArn"}
      ],
      "documentation":"<p>Describes an execution.</p>"
    },
    "DescribeStateMachine":{
      "name":"DescribeStateMachine",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStateMachineInput"},
      "output":{"shape":"DescribeStateMachineOutput"},
      "errors":[
        {"shape":"InvalidArn"},
        {"shape":"StateMachineDoesNotExist"}
      ],
      "documentation":"<p>Describes a state machine.</p>"
    },
    "DescribeStateMachineForExecution":{
      "name":"DescribeStateMachineForExecution",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStateMachineForExecutionInput"},
      "output":{"shape":"DescribeStateMachineForExecutionOutput"},
      "errors":[
        {"shape":"ExecutionDoesNotExist"},
        {"shape":"InvalidArn"}
      ],
      "documentation":"<p>Describes the state machine associated with a specific execution.</p>"
    },
    "GetActivityTask":{
      "name":"GetActivityTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetActivityTaskInput"},
      "output":{"shape":"GetActivityTaskOutput"},
      "errors":[
        {"shape":"ActivityDoesNotExist"},
        {"shape":"ActivityWorkerLimitExceeded"},
        {"shape":"InvalidArn"}
      ],
      "documentation":"<p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> </important>"
    },
    "GetExecutionHistory":{
      "name":"GetExecutionHistory",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetExecutionHistoryInput"},
      "output":{"shape":"GetExecutionHistoryOutput"},
      "errors":[
        {"shape":"ExecutionDoesNotExist"},
        {"shape":"InvalidArn"},
        {"shape":"InvalidToken"}
      ],
      "documentation":"<p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p>"
    },
    "ListActivities":{
      "name":"ListActivities",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListActivitiesInput"},
      "output":{"shape":"ListActivitiesOutput"},
      "errors":[
        {"shape":"InvalidToken"}
      ],
      "documentation":"<p>Lists the existing activities.</p> <p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p>"
    },
    "ListExecutions":{
      "name":"ListExecutions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListExecutionsInput"},
      "output":{"shape":"ListExecutionsOutput"},
      "errors":[
        {"shape":"InvalidArn"},
        {"shape":"InvalidToken"},
        {"shape":"StateMachineDoesNotExist"}
      ],
      "documentation":"<p>Lists the executions of a state machine that meet the filtering criteria.</p> <p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p>"
    },
    "ListStateMachines":{
      "name":"ListStateMachines",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListStateMachinesInput"},
      "output":{"shape":"ListStateMachinesOutput"},
      "errors":[
        {"shape":"InvalidToken"}
      ],
      "documentation":"<p>Lists the existing state machines.</p> <p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p>"
    },
    "SendTaskFailure":{
      "name":"SendTaskFailure",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SendTaskFailureInput"},
      "output":{"shape":"SendTaskFailureOutput"},
      "errors":[
        {"shape":"TaskDoesNotExist"},
        {"shape":"InvalidToken"},
        {"shape":"TaskTimedOut"}
      ],
      "documentation":"<p>Used by workers to report that the task identified by the <code>taskToken</code> failed.</p>"
    },
    "SendTaskHeartbeat":{
      "name":"SendTaskHeartbeat",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SendTaskHeartbeatInput"},
      "output":{"shape":"SendTaskHeartbeatOutput"},
      "errors":[
        {"shape":"TaskDoesNotExist"},
        {"shape":"InvalidToken"},
        {"shape":"TaskTimedOut"}
      ],
      "documentation":"<p>Used by workers to report to the service that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine's Amazon States Language definition. This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> event.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received.</p> </note> <note> <p>This operation is only useful for long-lived tasks to report the liveliness of the task.</p> </note>"
    },
    "SendTaskSuccess":{
      "name":"SendTaskSuccess",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SendTaskSuccessInput"},
      "output":{"shape":"SendTaskSuccessOutput"},
      "errors":[
        {"shape":"TaskDoesNotExist"},
        {"shape":"InvalidOutput"},
        {"shape":"InvalidToken"},
        {"shape":"TaskTimedOut"}
      ],
      "documentation":"<p>Used by workers to report that the task identified by the <code>taskToken</code> completed successfully.</p>"
    },
    "StartExecution":{
      "name":"StartExecution",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartExecutionInput"},
      "output":{"shape":"StartExecutionOutput"},
      "errors":[
        {"shape":"ExecutionLimitExceeded"},
        {"shape":"ExecutionAlreadyExists"},
        {"shape":"InvalidArn"},
        {"shape":"InvalidExecutionInput"},
        {"shape":"InvalidName"},
        {"shape":"StateMachineDoesNotExist"},
        {"shape":"StateMachineDeleting"}
      ],
      "documentation":"<p>Starts a state machine execution.</p>",
      "idempotent":true
    },
    "StopExecution":{
      "name":"StopExecution",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopExecutionInput"},
      "output":{"shape":"StopExecutionOutput"},
      "errors":[
        {"shape":"ExecutionDoesNotExist"},
        {"shape":"InvalidArn"}
      ],
      "documentation":"<p>Stops an execution.</p>"
    },
    "UpdateStateMachine":{
      "name":"UpdateStateMachine",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateStateMachineInput"},
      "output":{"shape":"UpdateStateMachineOutput"},
      "errors":[
        {"shape":"InvalidArn"},
        {"shape":"InvalidDefinition"},
        {"shape":"MissingRequiredParameter"},
        {"shape":"StateMachineDeleting"},
        {"shape":"StateMachineDoesNotExist"}
      ],
      "documentation":"<p>Updates an existing state machine by modifying its <code>definition</code> and/or <code>roleArn</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>.</p> <note> <p>All <code>StartExecution</code> calls within a few seconds will use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after calling <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> </note>",
      "idempotent":true
    }
  },
  "shapes":{
    "ActivityDoesNotExist":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified activity does not exist.</p>",
      "exception":true
    },
    "ActivityFailedEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the failure.</p>"
        }
      },
      "documentation":"<p>Contains details about an activity which failed during an execution.</p>"
    },
    "ActivityLimitExceeded":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The maximum number of activities has been reached. Existing activities must be deleted before a new activity can be created.</p>",
      "exception":true
    },
    "ActivityList":{
      "type":"list",
      "member":{"shape":"ActivityListItem"}
    },
    "ActivityListItem":{
      "type":"structure",
      "required":[
        "activityArn",
        "name",
        "creationDate"
      ],
      "members":{
        "activityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the activity.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the activity.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "creationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the activity is created.</p>"
        }
      },
      "documentation":"<p>Contains details about an activity.</p>"
    },
    "ActivityScheduleFailedEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the failure.</p>"
        }
      },
      "documentation":"<p>Contains details about an activity schedule failure which occurred during an execution.</p>"
    },
    "ActivityScheduledEventDetails":{
      "type":"structure",
      "required":["resource"],
      "members":{
        "resource":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the scheduled activity.</p>"
        },
        "input":{
          "shape":"Data",
          "documentation":"<p>The JSON data input to the activity task.</p>"
        },
        "timeoutInSeconds":{
          "shape":"TimeoutInSeconds",
          "documentation":"<p>The maximum allowed duration of the activity task.</p>",
          "box":true
        },
        "heartbeatInSeconds":{
          "shape":"TimeoutInSeconds",
          "documentation":"<p>The maximum allowed duration between two heartbeats for the activity task.</p>",
          "box":true
        }
      },
      "documentation":"<p>Contains details about an activity scheduled during an execution.</p>"
    },
    "ActivityStartedEventDetails":{
      "type":"structure",
      "members":{
        "workerName":{
          "shape":"Identity",
          "documentation":"<p>The name of the worker that the task is assigned to. These names are provided by the workers when calling <a>GetActivityTask</a>.</p>"
        }
      },
      "documentation":"<p>Contains details about the start of an activity during an execution.</p>"
    },
    "ActivitySucceededEventDetails":{
      "type":"structure",
      "members":{
        "output":{
          "shape":"Data",
          "documentation":"<p>The JSON data output by the activity task.</p>"
        }
      },
      "documentation":"<p>Contains details about an activity which successfully terminated during an execution.</p>"
    },
    "ActivityTimedOutEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the timeout.</p>"
        }
      },
      "documentation":"<p>Contains details about an activity timeout which occurred during an execution.</p>"
    },
    "ActivityWorkerLimitExceeded":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The maximum number of workers concurrently polling for activity tasks has been reached.</p>",
      "exception":true
    },
    "Arn":{
      "type":"string",
      "max":256,
      "min":1
    },
    "Cause":{
      "type":"string",
      "max":32768,
      "min":0
    },
    "CreateActivityInput":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the activity to create. This name must be unique for your AWS account and region for 90 days. For more information, see <a href=\"http://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions\"> Limits Related to State Machine Executions</a> in the <i>AWS Step Functions Developer Guide</i>.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        }
      }
    },
    "CreateActivityOutput":{
      "type":"structure",
      "required":[
        "activityArn",
        "creationDate"
      ],
      "members":{
        "activityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the created activity.</p>"
        },
        "creationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the activity is created.</p>"
        }
      }
    },
    "CreateStateMachineInput":{
      "type":"structure",
      "required":[
        "name",
        "definition",
        "roleArn"
      ],
      "members":{
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the state machine. This name must be unique for your AWS account and region for 90 days. For more information, see <a href=\"http://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions\"> Limits Related to State Machine Executions</a> in the <i>AWS Step Functions Developer Guide</i>.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "definition":{
          "shape":"Definition",
          "documentation":"<p>The Amazon States Language definition of the state machine.</p>"
        },
        "roleArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role to use for this state machine.</p>"
        }
      }
    },
    "CreateStateMachineOutput":{
      "type":"structure",
      "required":[
        "stateMachineArn",
        "creationDate"
      ],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the created state machine.</p>"
        },
        "creationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the state machine is created.</p>"
        }
      }
    },
    "Data":{
      "type":"string",
      "max":32768
    },
    "Definition":{
      "type":"string",
      "max":1048576,
      "min":1
    },
    "DeleteActivityInput":{
      "type":"structure",
      "required":["activityArn"],
      "members":{
        "activityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the activity to delete.</p>"
        }
      }
    },
    "DeleteActivityOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteStateMachineInput":{
      "type":"structure",
      "required":["stateMachineArn"],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the state machine to delete.</p>"
        }
      }
    },
    "DeleteStateMachineOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeActivityInput":{
      "type":"structure",
      "required":["activityArn"],
      "members":{
        "activityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the activity to describe.</p>"
        }
      }
    },
    "DescribeActivityOutput":{
      "type":"structure",
      "required":[
        "activityArn",
        "name",
        "creationDate"
      ],
      "members":{
        "activityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the activity.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the activity.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "creationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the activity is created.</p>"
        }
      }
    },
    "DescribeExecutionInput":{
      "type":"structure",
      "required":["executionArn"],
      "members":{
        "executionArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the execution to describe.</p>"
        }
      }
    },
    "DescribeExecutionOutput":{
      "type":"structure",
      "required":[
        "executionArn",
        "stateMachineArn",
        "status",
        "startDate",
        "input"
      ],
      "members":{
        "executionArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the execution.</p>"
        },
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the executed stated machine.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the execution.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "status":{
          "shape":"ExecutionStatus",
          "documentation":"<p>The current status of the execution.</p>"
        },
        "startDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the execution is started.</p>"
        },
        "stopDate":{
          "shape":"Timestamp",
          "documentation":"<p>If the execution has already ended, the date the execution stopped.</p>"
        },
        "input":{
          "shape":"Data",
          "documentation":"<p>The string that contains the JSON input data of the execution.</p>"
        },
        "output":{
          "shape":"Data",
          "documentation":"<p>The JSON output data of the execution.</p> <note> <p>This field is set only if the execution succeeds. If the execution fails, this field is null.</p> </note>"
        }
      }
    },
    "DescribeStateMachineForExecutionInput":{
      "type":"structure",
      "required":["executionArn"],
      "members":{
        "executionArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the execution you want state machine information for.</p>"
        }
      }
    },
    "DescribeStateMachineForExecutionOutput":{
      "type":"structure",
      "required":[
        "stateMachineArn",
        "name",
        "definition",
        "roleArn",
        "updateDate"
      ],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the state machine associated with the execution.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the state machine associated with the execution.</p>"
        },
        "definition":{
          "shape":"Definition",
          "documentation":"<p>The Amazon States Language definition of the state machine.</p>"
        },
        "roleArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution. </p>"
        },
        "updateDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the state machine associated with an execution was updated. For a newly created state machine, this is the creation date.</p>"
        }
      }
    },
    "DescribeStateMachineInput":{
      "type":"structure",
      "required":["stateMachineArn"],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the state machine to describe.</p>"
        }
      }
    },
    "DescribeStateMachineOutput":{
      "type":"structure",
      "required":[
        "stateMachineArn",
        "name",
        "definition",
        "roleArn",
        "creationDate"
      ],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the state machine.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the state machine.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "status":{
          "shape":"StateMachineStatus",
          "documentation":"<p>The current status of the state machine.</p>"
        },
        "definition":{
          "shape":"Definition",
          "documentation":"<p>The Amazon States Language definition of the state machine.</p>"
        },
        "roleArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role maintains security by granting Step Functions access to AWS resources.)</p>"
        },
        "creationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the state machine is created.</p>"
        }
      }
    },
    "Error":{
      "type":"string",
      "max":256,
      "min":0
    },
    "ErrorMessage":{"type":"string"},
    "EventId":{"type":"long"},
    "ExecutionAbortedEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the failure.</p>"
        }
      },
      "documentation":"<p>Contains details about an abort of an execution.</p>"
    },
    "ExecutionAlreadyExists":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The execution has the same <code>name</code> as another execution (but a different <code>input</code>).</p> <note> <p>Executions with the same <code>name</code> and <code>input</code> are considered idempotent.</p> </note>",
      "exception":true
    },
    "ExecutionDoesNotExist":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified execution does not exist.</p>",
      "exception":true
    },
    "ExecutionFailedEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the failure.</p>"
        }
      },
      "documentation":"<p>Contains details about an execution failure event.</p>"
    },
    "ExecutionLimitExceeded":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The maximum number of running executions has been reached. Running executions must end or be stopped before a new execution can be started.</p>",
      "exception":true
    },
    "ExecutionList":{
      "type":"list",
      "member":{"shape":"ExecutionListItem"}
    },
    "ExecutionListItem":{
      "type":"structure",
      "required":[
        "executionArn",
        "stateMachineArn",
        "name",
        "status",
        "startDate"
      ],
      "members":{
        "executionArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the execution.</p>"
        },
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the executed state machine.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the execution.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "status":{
          "shape":"ExecutionStatus",
          "documentation":"<p>The current status of the execution.</p>"
        },
        "startDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the execution started.</p>"
        },
        "stopDate":{
          "shape":"Timestamp",
          "documentation":"<p>If the execution already ended, the date the execution stopped.</p>"
        }
      },
      "documentation":"<p>Contains details about an execution.</p>"
    },
    "ExecutionStartedEventDetails":{
      "type":"structure",
      "members":{
        "input":{
          "shape":"Data",
          "documentation":"<p>The JSON data input to the execution.</p>"
        },
        "roleArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role used for executing AWS Lambda tasks.</p>"
        }
      },
      "documentation":"<p>Contains details about the start of the execution.</p>"
    },
    "ExecutionStatus":{
      "type":"string",
      "enum":[
        "RUNNING",
        "SUCCEEDED",
        "FAILED",
        "TIMED_OUT",
        "ABORTED"
      ]
    },
    "ExecutionSucceededEventDetails":{
      "type":"structure",
      "members":{
        "output":{
          "shape":"Data",
          "documentation":"<p>The JSON data output by the execution.</p>"
        }
      },
      "documentation":"<p>Contains details about the successful termination of the execution.</p>"
    },
    "ExecutionTimedOutEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the timeout.</p>"
        }
      },
      "documentation":"<p>Contains details about the execution timeout which occurred during the execution.</p>"
    },
    "GetActivityTaskInput":{
      "type":"structure",
      "required":["activityArn"],
      "members":{
        "activityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create the task using <a>CreateActivity</a>.)</p>"
        },
        "workerName":{
          "shape":"Name",
          "documentation":"<p>You can provide an arbitrary name in order to identify the worker that the task is assigned to. This name is used when it is logged in the execution history.</p>"
        }
      }
    },
    "GetActivityTaskOutput":{
      "type":"structure",
      "members":{
        "taskToken":{
          "shape":"TaskToken",
          "documentation":"<p>A token that identifies the scheduled task. This token must be copied and included in subsequent calls to <a>SendTaskHeartbeat</a>, <a>SendTaskSuccess</a> or <a>SendTaskFailure</a> in order to report the progress or completion of the task.</p>"
        },
        "input":{
          "shape":"Data",
          "documentation":"<p>The string that contains the JSON input data for the task.</p>"
        }
      }
    },
    "GetExecutionHistoryInput":{
      "type":"structure",
      "required":["executionArn"],
      "members":{
        "executionArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the execution.</p>"
        },
        "maxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 100. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>"
        },
        "reverseOrder":{
          "shape":"ReverseOrder",
          "documentation":"<p>Lists events in descending order of their <code>timeStamp</code>.</p>"
        },
        "nextToken":{
          "shape":"PageToken",
          "documentation":"<p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maxResults</code> determines how many results can be returned in a single call.</p>"
        }
      }
    },
    "GetExecutionHistoryOutput":{
      "type":"structure",
      "required":["events"],
      "members":{
        "events":{
          "shape":"HistoryEventList",
          "documentation":"<p>The list of events that occurred in the execution.</p>"
        },
        "nextToken":{
          "shape":"PageToken",
          "documentation":"<p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maxResults</code> determines how many results can be returned in a single call.</p>"
        }
      }
    },
    "HistoryEvent":{
      "type":"structure",
      "required":[
        "timestamp",
        "type",
        "id"
      ],
      "members":{
        "timestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The date the event occurred.</p>"
        },
        "type":{
          "shape":"HistoryEventType",
          "documentation":"<p>The type of the event.</p>"
        },
        "id":{
          "shape":"EventId",
          "documentation":"<p>The id of the event. Events are numbered sequentially, starting at one.</p>"
        },
        "previousEventId":{
          "shape":"EventId",
          "documentation":"<p>The id of the previous event.</p>"
        },
        "activityFailedEventDetails":{"shape":"ActivityFailedEventDetails"},
        "activityScheduleFailedEventDetails":{
          "shape":"ActivityScheduleFailedEventDetails",
          "documentation":"<p>Contains details about an activity schedule event which failed during an execution.</p>"
        },
        "activityScheduledEventDetails":{"shape":"ActivityScheduledEventDetails"},
        "activityStartedEventDetails":{"shape":"ActivityStartedEventDetails"},
        "activitySucceededEventDetails":{"shape":"ActivitySucceededEventDetails"},
        "activityTimedOutEventDetails":{"shape":"ActivityTimedOutEventDetails"},
        "executionFailedEventDetails":{"shape":"ExecutionFailedEventDetails"},
        "executionStartedEventDetails":{"shape":"ExecutionStartedEventDetails"},
        "executionSucceededEventDetails":{"shape":"ExecutionSucceededEventDetails"},
        "executionAbortedEventDetails":{"shape":"ExecutionAbortedEventDetails"},
        "executionTimedOutEventDetails":{"shape":"ExecutionTimedOutEventDetails"},
        "lambdaFunctionFailedEventDetails":{"shape":"LambdaFunctionFailedEventDetails"},
        "lambdaFunctionScheduleFailedEventDetails":{"shape":"LambdaFunctionScheduleFailedEventDetails"},
        "lambdaFunctionScheduledEventDetails":{"shape":"LambdaFunctionScheduledEventDetails"},
        "lambdaFunctionStartFailedEventDetails":{
          "shape":"LambdaFunctionStartFailedEventDetails",
          "documentation":"<p>Contains details about a lambda function which failed to start during an execution.</p>"
        },
        "lambdaFunctionSucceededEventDetails":{
          "shape":"LambdaFunctionSucceededEventDetails",
          "documentation":"<p>Contains details about a lambda function which terminated successfully during an execution.</p>"
        },
        "lambdaFunctionTimedOutEventDetails":{"shape":"LambdaFunctionTimedOutEventDetails"},
        "stateEnteredEventDetails":{"shape":"StateEnteredEventDetails"},
        "stateExitedEventDetails":{"shape":"StateExitedEventDetails"}
      },
      "documentation":"<p>Contains details about the events of an execution.</p>"
    },
    "HistoryEventList":{
      "type":"list",
      "member":{"shape":"HistoryEvent"},
      "documentation":"<p>Contains details about the events which occurred during an execution.</p>"
    },
    "HistoryEventType":{
      "type":"string",
      "enum":[
        "ActivityFailed",
        "ActivityScheduleFailed",
        "ActivityScheduled",
        "ActivityStarted",
        "ActivitySucceeded",
        "ActivityTimedOut",
        "ChoiceStateEntered",
        "ChoiceStateExited",
        "ExecutionFailed",
        "ExecutionStarted",
        "ExecutionSucceeded",
        "ExecutionAborted",
        "ExecutionTimedOut",
        "FailStateEntered",
        "LambdaFunctionFailed",
        "LambdaFunctionScheduleFailed",
        "LambdaFunctionScheduled",
        "LambdaFunctionStartFailed",
        "LambdaFunctionStarted",
        "LambdaFunctionSucceeded",
        "LambdaFunctionTimedOut",
        "SucceedStateEntered",
        "SucceedStateExited",
        "TaskStateAborted",
        "TaskStateEntered",
        "TaskStateExited",
        "PassStateEntered",
        "PassStateExited",
        "ParallelStateAborted",
        "ParallelStateEntered",
        "ParallelStateExited",
        "ParallelStateFailed",
        "ParallelStateStarted",
        "ParallelStateSucceeded",
        "WaitStateAborted",
        "WaitStateEntered",
        "WaitStateExited"
      ]
    },
    "Identity":{
      "type":"string",
      "max":256
    },
    "InvalidArn":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The provided Amazon Resource Name (ARN) is invalid.</p>",
      "exception":true
    },
    "InvalidDefinition":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The provided Amazon States Language definition is invalid.</p>",
      "exception":true
    },
    "InvalidExecutionInput":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The provided JSON input data is invalid.</p>",
      "exception":true
    },
    "InvalidName":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The provided name is invalid.</p>",
      "exception":true
    },
    "InvalidOutput":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The provided JSON output data is invalid.</p>",
      "exception":true
    },
    "InvalidToken":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The provided token is invalid.</p>",
      "exception":true
    },
    "LambdaFunctionFailedEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the failure.</p>"
        }
      },
      "documentation":"<p>Contains details about a lambda function which failed during an execution.</p>"
    },
    "LambdaFunctionScheduleFailedEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the failure.</p>"
        }
      },
      "documentation":"<p>Contains details about a failed lambda function schedule event which occurred during an execution.</p>"
    },
    "LambdaFunctionScheduledEventDetails":{
      "type":"structure",
      "required":["resource"],
      "members":{
        "resource":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the scheduled lambda function.</p>"
        },
        "input":{
          "shape":"Data",
          "documentation":"<p>The JSON data input to the lambda function.</p>"
        },
        "timeoutInSeconds":{
          "shape":"TimeoutInSeconds",
          "documentation":"<p>The maximum allowed duration of the lambda function.</p>",
          "box":true
        }
      },
      "documentation":"<p>Contains details about a lambda function scheduled during an execution.</p>"
    },
    "LambdaFunctionStartFailedEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the failure.</p>"
        }
      },
      "documentation":"<p>Contains details about a lambda function which failed to start during an execution.</p>"
    },
    "LambdaFunctionSucceededEventDetails":{
      "type":"structure",
      "members":{
        "output":{
          "shape":"Data",
          "documentation":"<p>The JSON data output by the lambda function.</p>"
        }
      },
      "documentation":"<p>Contains details about a lambda function which successfully terminated during an execution.</p>"
    },
    "LambdaFunctionTimedOutEventDetails":{
      "type":"structure",
      "members":{
        "error":{
          "shape":"Error",
          "documentation":"<p>The error code of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the timeout.</p>"
        }
      },
      "documentation":"<p>Contains details about a lambda function timeout which occurred during an execution.</p>"
    },
    "ListActivitiesInput":{
      "type":"structure",
      "members":{
        "maxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 100. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>"
        },
        "nextToken":{
          "shape":"PageToken",
          "documentation":"<p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maxResults</code> determines how many results can be returned in a single call.</p>"
        }
      }
    },
    "ListActivitiesOutput":{
      "type":"structure",
      "required":["activities"],
      "members":{
        "activities":{
          "shape":"ActivityList",
          "documentation":"<p>The list of activities.</p>"
        },
        "nextToken":{
          "shape":"PageToken",
          "documentation":"<p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maxResults</code> determines how many results can be returned in a single call.</p>"
        }
      }
    },
    "ListExecutionsInput":{
      "type":"structure",
      "required":["stateMachineArn"],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the state machine whose executions is listed.</p>"
        },
        "statusFilter":{
          "shape":"ExecutionStatus",
          "documentation":"<p>If specified, only list the executions whose current execution status matches the given filter.</p>"
        },
        "maxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 100. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>"
        },
        "nextToken":{
          "shape":"PageToken",
          "documentation":"<p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maxResults</code> determines how many results can be returned in a single call.</p>"
        }
      }
    },
    "ListExecutionsOutput":{
      "type":"structure",
      "required":["executions"],
      "members":{
        "executions":{
          "shape":"ExecutionList",
          "documentation":"<p>The list of matching executions.</p>"
        },
        "nextToken":{
          "shape":"PageToken",
          "documentation":"<p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maxResults</code> determines how many results can be returned in a single call.</p>"
        }
      }
    },
    "ListStateMachinesInput":{
      "type":"structure",
      "members":{
        "maxResults":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 100. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>"
        },
        "nextToken":{
          "shape":"PageToken",
          "documentation":"<p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maxResults</code> determines how many results can be returned in a single call.</p>"
        }
      }
    },
    "ListStateMachinesOutput":{
      "type":"structure",
      "required":["stateMachines"],
      "members":{
        "stateMachines":{"shape":"StateMachineList"},
        "nextToken":{
          "shape":"PageToken",
          "documentation":"<p>If a <code>nextToken</code> is returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maxResults</code> determines how many results can be returned in a single call.</p>"
        }
      }
    },
    "MissingRequiredParameter":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>Request is missing a required parameter. This error occurs if both <code>definition</code> and <code>roleArn</code> are not specified.</p>",
      "exception":true
    },
    "Name":{
      "type":"string",
      "max":80,
      "min":1
    },
    "PageSize":{
      "type":"integer",
      "max":1000,
      "min":0
    },
    "PageToken":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "ReverseOrder":{"type":"boolean"},
    "SendTaskFailureInput":{
      "type":"structure",
      "required":["taskToken"],
      "members":{
        "taskToken":{
          "shape":"TaskToken",
          "documentation":"<p>The token that represents this task. Task tokens are generated by the service when the tasks are assigned to a worker (see GetActivityTask::taskToken).</p>"
        },
        "error":{
          "shape":"Error",
          "documentation":"<p>An arbitrary error code that identifies the cause of the failure.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the failure.</p>"
        }
      }
    },
    "SendTaskFailureOutput":{
      "type":"structure",
      "members":{
      }
    },
    "SendTaskHeartbeatInput":{
      "type":"structure",
      "required":["taskToken"],
      "members":{
        "taskToken":{
          "shape":"TaskToken",
          "documentation":"<p>The token that represents this task. Task tokens are generated by the service when the tasks are assigned to a worker (see <a>GetActivityTaskOutput$taskToken</a>).</p>"
        }
      }
    },
    "SendTaskHeartbeatOutput":{
      "type":"structure",
      "members":{
      }
    },
    "SendTaskSuccessInput":{
      "type":"structure",
      "required":[
        "taskToken",
        "output"
      ],
      "members":{
        "taskToken":{
          "shape":"TaskToken",
          "documentation":"<p>The token that represents this task. Task tokens are generated by the service when the tasks are assigned to a worker (see <a>GetActivityTaskOutput$taskToken</a>).</p>"
        },
        "output":{
          "shape":"Data",
          "documentation":"<p>The JSON output of the task.</p>"
        }
      }
    },
    "SendTaskSuccessOutput":{
      "type":"structure",
      "members":{
      }
    },
    "StartExecutionInput":{
      "type":"structure",
      "required":["stateMachineArn"],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the state machine to execute.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the execution. This name must be unique for your AWS account and region for 90 days. For more information, see <a href=\"http://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions\"> Limits Related to State Machine Executions</a> in the <i>AWS Step Functions Developer Guide</i>.</p> <important> <p>An execution can't use the name of another execution for 90 days.</p> <p>When you make multiple <code>StartExecution</code> calls with the same name, the new execution doesn't run and the following rules apply:</p> <ul> <li> <p>When the original execution is open and the execution input from the new call is <i>different</i>, the <code>ExecutionAlreadyExists</code> message is returned.</p> </li> <li> <p>When the original execution is open and the execution input from the new call is <i>identical</i>, the <code>Success</code> message is returned.</p> </li> <li> <p>When the original execution is closed, the <code>ExecutionAlreadyExists</code> message is returned regardless of input.</p> </li> </ul> </important> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "input":{
          "shape":"Data",
          "documentation":"<p>The string that contains the JSON input data for the execution, for example:</p> <p> <code>\"input\": \"{\\\"first_name\\\" : \\\"test\\\"}\"</code> </p> <note> <p>If you don't include any JSON input data, you still must include the two braces, for example: <code>\"input\": \"{}\"</code> </p> </note>"
        }
      }
    },
    "StartExecutionOutput":{
      "type":"structure",
      "required":[
        "executionArn",
        "startDate"
      ],
      "members":{
        "executionArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the execution.</p>"
        },
        "startDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the execution is started.</p>"
        }
      }
    },
    "StateEnteredEventDetails":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the state.</p>"
        },
        "input":{
          "shape":"Data",
          "documentation":"<p>The string that contains the JSON input data for the state.</p>"
        }
      },
      "documentation":"<p>Contains details about a state entered during an execution.</p>"
    },
    "StateExitedEventDetails":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the state.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "output":{
          "shape":"Data",
          "documentation":"<p>The JSON output data of the state.</p>"
        }
      },
      "documentation":"<p>Contains details about an exit from a state during an execution.</p>"
    },
    "StateMachineAlreadyExists":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>A state machine with the same name but a different definition or role ARN already exists.</p>",
      "exception":true
    },
    "StateMachineDeleting":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified state machine is being deleted.</p>",
      "exception":true
    },
    "StateMachineDoesNotExist":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The specified state machine does not exist.</p>",
      "exception":true
    },
    "StateMachineLimitExceeded":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The maximum number of state machines has been reached. Existing state machines must be deleted before a new state machine can be created.</p>",
      "exception":true
    },
    "StateMachineList":{
      "type":"list",
      "member":{"shape":"StateMachineListItem"}
    },
    "StateMachineListItem":{
      "type":"structure",
      "required":[
        "stateMachineArn",
        "name",
        "creationDate"
      ],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the state machine.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the state machine.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>\" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>"
        },
        "creationDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the state machine is created.</p>"
        }
      },
      "documentation":"<p>Contains details about the state machine.</p>"
    },
    "StateMachineStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "DELETING"
      ]
    },
    "StopExecutionInput":{
      "type":"structure",
      "required":["executionArn"],
      "members":{
        "executionArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the execution to stop.</p>"
        },
        "error":{
          "shape":"Error",
          "documentation":"<p>An arbitrary error code that identifies the cause of the termination.</p>"
        },
        "cause":{
          "shape":"Cause",
          "documentation":"<p>A more detailed explanation of the cause of the termination.</p>"
        }
      }
    },
    "StopExecutionOutput":{
      "type":"structure",
      "required":["stopDate"],
      "members":{
        "stopDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date the execution is stopped.</p>"
        }
      }
    },
    "TaskDoesNotExist":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "exception":true
    },
    "TaskTimedOut":{
      "type":"structure",
      "members":{
        "message":{"shape":"ErrorMessage"}
      },
      "exception":true
    },
    "TaskToken":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "TimeoutInSeconds":{"type":"long"},
    "Timestamp":{"type":"timestamp"},
    "UpdateStateMachineInput":{
      "type":"structure",
      "required":["stateMachineArn"],
      "members":{
        "stateMachineArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the state machine.</p>"
        },
        "definition":{
          "shape":"Definition",
          "documentation":"<p>The Amazon States Language definition of the state machine.</p>"
        },
        "roleArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role of the state machine.</p>"
        }
      }
    },
    "UpdateStateMachineOutput":{
      "type":"structure",
      "required":["updateDate"],
      "members":{
        "updateDate":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the state machine was updated.</p>"
        }
      }
    }
  },
  "documentation":"<fullname>AWS Step Functions</fullname> <p>AWS Step Functions is a service that lets you coordinate the components of distributed applications and microservices using visual workflows.</p> <p>You can use Step Functions to build applications from individual components, each of which performs a discrete function, or <i>task</i>, allowing you to scale and change applications quickly. Step Functions provides a console that helps visualize the components of your application as a series of steps. Step Functions automatically triggers and tracks each step, and retries steps when there are errors, so your application executes predictably and in the right order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any issues.</p> <p>Step Functions manages operations and underlying infrastructure to ensure your application is available at any scale. You can run tasks on AWS, your own servers, or any system that has access to AWS. You can access and use Step Functions using the console, the AWS SDKs, or an HTTP API. For more information about Step Functions, see the <i> <a href=\"http://docs.aws.amazon.com/step-functions/latest/dg/welcome.html\">AWS Step Functions Developer Guide</a> </i>.</p>"
}
