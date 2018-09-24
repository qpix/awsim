awsim['health'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-08-04",
    "endpointPrefix":"health",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"AWSHealth",
    "serviceFullName":"AWS Health APIs and Notifications",
    "serviceId":"Health",
    "signatureVersion":"v4",
    "targetPrefix":"AWSHealth_20160804",
    "uid":"health-2016-08-04"
  },
  "operations":{
    "DescribeAffectedEntities":{
      "name":"DescribeAffectedEntities",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAffectedEntitiesRequest"},
      "output":{"shape":"DescribeAffectedEntitiesResponse"},
      "errors":[
        {"shape":"InvalidPaginationToken"},
        {"shape":"UnsupportedLocale"}
      ],
      "documentation":"<p>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this.</p> <p>At least one event ARN is required. Results are sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>",
      "idempotent":true
    },
    "DescribeEntityAggregates":{
      "name":"DescribeEntityAggregates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEntityAggregatesRequest"},
      "output":{"shape":"DescribeEntityAggregatesResponse"},
      "documentation":"<p>Returns the number of entities that are affected by each of the specified events. If no events are specified, the counts of all affected entities are returned.</p>",
      "idempotent":true
    },
    "DescribeEventAggregates":{
      "name":"DescribeEventAggregates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventAggregatesRequest"},
      "output":{"shape":"DescribeEventAggregatesResponse"},
      "errors":[
        {"shape":"InvalidPaginationToken"}
      ],
      "documentation":"<p>Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.</p>",
      "idempotent":true
    },
    "DescribeEventDetails":{
      "name":"DescribeEventDetails",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventDetailsRequest"},
      "output":{"shape":"DescribeEventDetailsResponse"},
      "errors":[
        {"shape":"UnsupportedLocale"}
      ],
      "documentation":"<p>Returns detailed information about one or more specified events. Information includes standard event data (region, service, etc., as returned by <a>DescribeEvents</a>), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the <a>DescribeAffectedEntities</a> operation.</p> <p>If a specified event cannot be retrieved, an error message is returned for that event.</p>",
      "idempotent":true
    },
    "DescribeEventTypes":{
      "name":"DescribeEventTypes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEventTypesRequest"},
      "output":{"shape":"DescribeEventTypesResponse"},
      "errors":[
        {"shape":"InvalidPaginationToken"},
        {"shape":"UnsupportedLocale"}
      ],
      "documentation":"<p>Returns the event types that meet the specified filter criteria. If no filter criteria are specified, all event types are returned, in no particular order.</p>",
      "idempotent":true
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
        {"shape":"InvalidPaginationToken"},
        {"shape":"UnsupportedLocale"}
      ],
      "documentation":"<p>Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a>DescribeEventDetails</a> and <a>DescribeAffectedEntities</a> operations.</p> <p>If no filter criteria are specified, all events are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent.</p>",
      "idempotent":true
    }
  },
  "shapes":{
    "AffectedEntity":{
      "type":"structure",
      "members":{
        "entityArn":{
          "shape":"entityArn",
          "documentation":"<p>The unique identifier for the entity. Format: <code>arn:aws:health:<i>entity-region</i>:<i>aws-account</i>:entity/<i>entity-id</i> </code>. Example: <code>arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K</code> </p>"
        },
        "eventArn":{
          "shape":"eventArn",
          "documentation":"<p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>"
        },
        "entityValue":{
          "shape":"entityValue",
          "documentation":"<p>The ID of the affected entity.</p>"
        },
        "awsAccountId":{
          "shape":"accountId",
          "documentation":"<p>The 12-digit AWS account number that contains the affected entity.</p>"
        },
        "lastUpdatedTime":{
          "shape":"timestamp",
          "documentation":"<p>The most recent time that the entity was updated.</p>"
        },
        "statusCode":{
          "shape":"entityStatusCode",
          "documentation":"<p>The most recent status of the entity affected by the event. The possible values are <code>IMPAIRED</code>, <code>UNIMPAIRED</code>, and <code>UNKNOWN</code>.</p>"
        },
        "tags":{
          "shape":"tagSet",
          "documentation":"<p>A map of entity tags attached to the affected entity.</p>"
        }
      },
      "documentation":"<p>Information about an entity that is affected by a Health event.</p>"
    },
    "DateTimeRange":{
      "type":"structure",
      "members":{
        "from":{
          "shape":"timestamp",
          "documentation":"<p>The starting date and time of a time range.</p>"
        },
        "to":{
          "shape":"timestamp",
          "documentation":"<p>The ending date and time of a time range.</p>"
        }
      },
      "documentation":"<p>A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.</p>"
    },
    "DescribeAffectedEntitiesRequest":{
      "type":"structure",
      "required":["filter"],
      "members":{
        "filter":{
          "shape":"EntityFilter",
          "documentation":"<p>Values to narrow the results returned. At least one event ARN is required. </p>"
        },
        "locale":{
          "shape":"locale",
          "documentation":"<p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>"
        },
        "nextToken":{
          "shape":"nextToken",
          "documentation":"<p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>"
        },
        "maxResults":{
          "shape":"maxResults",
          "documentation":"<p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>"
        }
      }
    },
    "DescribeAffectedEntitiesResponse":{
      "type":"structure",
      "members":{
        "entities":{
          "shape":"EntityList",
          "documentation":"<p>The entities that match the filter criteria.</p>"
        },
        "nextToken":{
          "shape":"nextToken",
          "documentation":"<p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>"
        }
      }
    },
    "DescribeEntityAggregatesRequest":{
      "type":"structure",
      "members":{
        "eventArns":{
          "shape":"EventArnsList",
          "documentation":"<p>A list of event ARNs (unique identifiers). For example: <code>\"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456\", \"arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101\"</code> </p>"
        }
      }
    },
    "DescribeEntityAggregatesResponse":{
      "type":"structure",
      "members":{
        "entityAggregates":{
          "shape":"EntityAggregateList",
          "documentation":"<p>The number of entities that are affected by each of the specified events.</p>"
        }
      }
    },
    "DescribeEventAggregatesRequest":{
      "type":"structure",
      "required":["aggregateField"],
      "members":{
        "filter":{
          "shape":"EventFilter",
          "documentation":"<p>Values to narrow the results returned.</p>"
        },
        "aggregateField":{
          "shape":"eventAggregateField",
          "documentation":"<p>The only currently supported value is <code>eventTypeCategory</code>.</p>"
        },
        "maxResults":{
          "shape":"maxResults",
          "documentation":"<p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>"
        },
        "nextToken":{
          "shape":"nextToken",
          "documentation":"<p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>"
        }
      }
    },
    "DescribeEventAggregatesResponse":{
      "type":"structure",
      "members":{
        "eventAggregates":{
          "shape":"EventAggregateList",
          "documentation":"<p>The number of events in each category that meet the optional filter criteria.</p>"
        },
        "nextToken":{
          "shape":"nextToken",
          "documentation":"<p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>"
        }
      }
    },
    "DescribeEventDetailsFailedSet":{
      "type":"list",
      "member":{"shape":"EventDetailsErrorItem"}
    },
    "DescribeEventDetailsRequest":{
      "type":"structure",
      "required":["eventArns"],
      "members":{
        "eventArns":{
          "shape":"eventArnList",
          "documentation":"<p>A list of event ARNs (unique identifiers). For example: <code>\"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456\", \"arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101\"</code> </p>"
        },
        "locale":{
          "shape":"locale",
          "documentation":"<p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>"
        }
      }
    },
    "DescribeEventDetailsResponse":{
      "type":"structure",
      "members":{
        "successfulSet":{
          "shape":"DescribeEventDetailsSuccessfulSet",
          "documentation":"<p>Information about the events that could be retrieved.</p>"
        },
        "failedSet":{
          "shape":"DescribeEventDetailsFailedSet",
          "documentation":"<p>Error messages for any events that could not be retrieved.</p>"
        }
      }
    },
    "DescribeEventDetailsSuccessfulSet":{
      "type":"list",
      "member":{"shape":"EventDetails"}
    },
    "DescribeEventTypesRequest":{
      "type":"structure",
      "members":{
        "filter":{
          "shape":"EventTypeFilter",
          "documentation":"<p>Values to narrow the results returned.</p>"
        },
        "locale":{
          "shape":"locale",
          "documentation":"<p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>"
        },
        "nextToken":{
          "shape":"nextToken",
          "documentation":"<p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>"
        },
        "maxResults":{
          "shape":"maxResults",
          "documentation":"<p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>"
        }
      }
    },
    "DescribeEventTypesResponse":{
      "type":"structure",
      "members":{
        "eventTypes":{
          "shape":"EventTypeList",
          "documentation":"<p>A list of event types that match the filter criteria. Event types have a category (<code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>), a service (for example, <code>EC2</code>, <code>RDS</code>, <code>DATAPIPELINE</code>, <code>BILLING</code>), and a code (in the format <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i> </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).</p>"
        },
        "nextToken":{
          "shape":"nextToken",
          "documentation":"<p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>"
        }
      }
    },
    "DescribeEventsRequest":{
      "type":"structure",
      "members":{
        "filter":{
          "shape":"EventFilter",
          "documentation":"<p>Values to narrow the results returned.</p>"
        },
        "nextToken":{
          "shape":"nextToken",
          "documentation":"<p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>"
        },
        "maxResults":{
          "shape":"maxResults",
          "documentation":"<p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>"
        },
        "locale":{
          "shape":"locale",
          "documentation":"<p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>"
        }
      }
    },
    "DescribeEventsResponse":{
      "type":"structure",
      "members":{
        "events":{
          "shape":"EventList",
          "documentation":"<p>The events that match the specified filter criteria.</p>"
        },
        "nextToken":{
          "shape":"nextToken",
          "documentation":"<p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>"
        }
      }
    },
    "EntityAggregate":{
      "type":"structure",
      "members":{
        "eventArn":{
          "shape":"eventArn",
          "documentation":"<p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>"
        },
        "count":{
          "shape":"count",
          "documentation":"<p>The number entities that match the criteria for the specified events.</p>"
        }
      },
      "documentation":"<p>The number of entities that are affected by one or more events. Returned by the <a>DescribeEntityAggregates</a> operation.</p>"
    },
    "EntityAggregateList":{
      "type":"list",
      "member":{"shape":"EntityAggregate"}
    },
    "EntityFilter":{
      "type":"structure",
      "required":["eventArns"],
      "members":{
        "eventArns":{
          "shape":"eventArnList",
          "documentation":"<p>A list of event ARNs (unique identifiers). For example: <code>\"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456\", \"arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101\"</code> </p>"
        },
        "entityArns":{
          "shape":"entityArnList",
          "documentation":"<p>A list of entity ARNs (unique identifiers).</p>"
        },
        "entityValues":{
          "shape":"entityValueList",
          "documentation":"<p>A list of IDs for affected entities.</p>"
        },
        "lastUpdatedTimes":{
          "shape":"dateTimeRangeList",
          "documentation":"<p>A list of the most recent dates and times that the entity was updated.</p>"
        },
        "tags":{
          "shape":"tagFilter",
          "documentation":"<p>A map of entity tags attached to the affected entity.</p>"
        },
        "statusCodes":{
          "shape":"entityStatusCodeList",
          "documentation":"<p>A list of entity status codes (<code>IMPAIRED</code>, <code>UNIMPAIRED</code>, or <code>UNKNOWN</code>).</p>"
        }
      },
      "documentation":"<p>The values to use to filter results from the <a>DescribeAffectedEntities</a> operation.</p>"
    },
    "EntityList":{
      "type":"list",
      "member":{"shape":"AffectedEntity"}
    },
    "Event":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"eventArn",
          "documentation":"<p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>"
        },
        "service":{
          "shape":"service",
          "documentation":"<p>The AWS service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>"
        },
        "eventTypeCode":{
          "shape":"eventTypeCode",
          "documentation":"<p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i> </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>"
        },
        "eventTypeCategory":{
          "shape":"eventTypeCategory",
          "documentation":"<p>The category of the event. Possible values are <code>issue</code>, <code>scheduledChange</code>, and <code>accountNotification</code>.</p>"
        },
        "region":{
          "shape":"region",
          "documentation":"<p>The AWS region name of the event.</p>"
        },
        "availabilityZone":{
          "shape":"availabilityZone",
          "documentation":"<p>The AWS Availability Zone of the event. For example, us-east-1a.</p>"
        },
        "startTime":{
          "shape":"timestamp",
          "documentation":"<p>The date and time that the event began.</p>"
        },
        "endTime":{
          "shape":"timestamp",
          "documentation":"<p>The date and time that the event ended.</p>"
        },
        "lastUpdatedTime":{
          "shape":"timestamp",
          "documentation":"<p>The most recent date and time that the event was updated.</p>"
        },
        "statusCode":{
          "shape":"eventStatusCode",
          "documentation":"<p>The most recent status of the event. Possible values are <code>open</code>, <code>closed</code>, and <code>upcoming</code>.</p>"
        }
      },
      "documentation":"<p>Summary information about an event, returned by the <a>DescribeEvents</a> operation. The <a>DescribeEventDetails</a> operation also returns this information, as well as the <a>EventDescription</a> and additional event metadata.</p>"
    },
    "EventAggregate":{
      "type":"structure",
      "members":{
        "aggregateValue":{
          "shape":"aggregateValue",
          "documentation":"<p>The issue type for the associated count.</p>"
        },
        "count":{
          "shape":"count",
          "documentation":"<p>The number of events of the associated issue type.</p>"
        }
      },
      "documentation":"<p>The number of events of each issue type. Returned by the <a>DescribeEventAggregates</a> operation.</p>"
    },
    "EventAggregateList":{
      "type":"list",
      "member":{"shape":"EventAggregate"}
    },
    "EventArnsList":{
      "type":"list",
      "member":{"shape":"eventArn"},
      "max":50,
      "min":1
    },
    "EventDescription":{
      "type":"structure",
      "members":{
        "latestDescription":{
          "shape":"eventDescription",
          "documentation":"<p>The most recent description of the event.</p>"
        }
      },
      "documentation":"<p>The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation.</p>"
    },
    "EventDetails":{
      "type":"structure",
      "members":{
        "event":{
          "shape":"Event",
          "documentation":"<p>Summary information about the event.</p>"
        },
        "eventDescription":{
          "shape":"EventDescription",
          "documentation":"<p>The most recent description of the event.</p>"
        },
        "eventMetadata":{
          "shape":"eventMetadata",
          "documentation":"<p>Additional metadata about the event.</p>"
        }
      },
      "documentation":"<p>Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetails</a> operation.</p>"
    },
    "EventDetailsErrorItem":{
      "type":"structure",
      "members":{
        "eventArn":{
          "shape":"eventArn",
          "documentation":"<p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>"
        },
        "errorName":{
          "shape":"string",
          "documentation":"<p>The name of the error.</p>"
        },
        "errorMessage":{
          "shape":"string",
          "documentation":"<p>A message that describes the error.</p>"
        }
      },
      "documentation":"<p>Error information returned when a <a>DescribeEventDetails</a> operation cannot find a specified event.</p>"
    },
    "EventFilter":{
      "type":"structure",
      "members":{
        "eventArns":{
          "shape":"eventArnList",
          "documentation":"<p>A list of event ARNs (unique identifiers). For example: <code>\"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456\", \"arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101\"</code> </p>"
        },
        "eventTypeCodes":{
          "shape":"eventTypeList",
          "documentation":"<p>A list of unique identifiers for event types. For example, <code>\"AWS_EC2_SYSTEM_MAINTENANCE_EVENT\",\"AWS_RDS_MAINTENANCE_SCHEDULED\"</code> </p>"
        },
        "services":{
          "shape":"serviceList",
          "documentation":"<p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>"
        },
        "regions":{
          "shape":"regionList",
          "documentation":"<p>A list of AWS regions.</p>"
        },
        "availabilityZones":{
          "shape":"availabilityZones",
          "documentation":"<p>A list of AWS availability zones.</p>"
        },
        "startTimes":{
          "shape":"dateTimeRangeList",
          "documentation":"<p>A list of dates and times that the event began.</p>"
        },
        "endTimes":{
          "shape":"dateTimeRangeList",
          "documentation":"<p>A list of dates and times that the event ended.</p>"
        },
        "lastUpdatedTimes":{
          "shape":"dateTimeRangeList",
          "documentation":"<p>A list of dates and times that the event was last updated.</p>"
        },
        "entityArns":{
          "shape":"entityArnList",
          "documentation":"<p>A list of entity ARNs (unique identifiers).</p>"
        },
        "entityValues":{
          "shape":"entityValueList",
          "documentation":"<p>A list of entity identifiers, such as EC2 instance IDs (<code>i-34ab692e</code>) or EBS volumes (<code>vol-426ab23e</code>).</p>"
        },
        "eventTypeCategories":{
          "shape":"eventTypeCategoryList",
          "documentation":"<p>A list of event type category codes (<code>issue</code>, <code>scheduledChange</code>, or <code>accountNotification</code>).</p>"
        },
        "tags":{
          "shape":"tagFilter",
          "documentation":"<p>A map of entity tags attached to the affected entity.</p>"
        },
        "eventStatusCodes":{
          "shape":"eventStatusCodeList",
          "documentation":"<p>A list of event status codes.</p>"
        }
      },
      "documentation":"<p>The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations.</p>"
    },
    "EventList":{
      "type":"list",
      "member":{"shape":"Event"}
    },
    "EventType":{
      "type":"structure",
      "members":{
        "service":{
          "shape":"service",
          "documentation":"<p>The AWS service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>"
        },
        "code":{
          "shape":"eventTypeCode",
          "documentation":"<p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i> </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>"
        },
        "category":{
          "shape":"eventTypeCategory",
          "documentation":"<p>A list of event type category codes (<code>issue</code>, <code>scheduledChange</code>, or <code>accountNotification</code>).</p>"
        }
      },
      "documentation":"<p>Metadata about a type of event that is reported by AWS Health. Data consists of the category (for example, <code>issue</code>), the service (for example, <code>EC2</code>), and the event type code (for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).</p>"
    },
    "EventTypeCategoryList":{
      "type":"list",
      "member":{"shape":"eventTypeCategory"},
      "max":10,
      "min":1
    },
    "EventTypeCodeList":{
      "type":"list",
      "member":{"shape":"eventTypeCode"},
      "max":10,
      "min":1
    },
    "EventTypeFilter":{
      "type":"structure",
      "members":{
        "eventTypeCodes":{
          "shape":"EventTypeCodeList",
          "documentation":"<p>A list of event type codes.</p>"
        },
        "services":{
          "shape":"serviceList",
          "documentation":"<p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>"
        },
        "eventTypeCategories":{
          "shape":"EventTypeCategoryList",
          "documentation":"<p>A list of event type category codes (<code>issue</code>, <code>scheduledChange</code>, or <code>accountNotification</code>).</p>"
        }
      },
      "documentation":"<p>The values to use to filter results from the <a>DescribeEventTypes</a> operation.</p>"
    },
    "EventTypeList":{
      "type":"list",
      "member":{"shape":"EventType"}
    },
    "InvalidPaginationToken":{
      "type":"structure",
      "members":{
        "message":{"shape":"string"}
      },
      "documentation":"<p>The specified pagination token (<code>nextToken</code>) is not valid.</p>",
      "exception":true
    },
    "UnsupportedLocale":{
      "type":"structure",
      "members":{
        "message":{"shape":"string"}
      },
      "documentation":"<p>The specified locale is not supported.</p>",
      "exception":true
    },
    "accountId":{
      "type":"string",
      "pattern":"[0-9]{12}"
    },
    "aggregateValue":{"type":"string"},
    "availabilityZone":{
      "type":"string",
      "pattern":"[a-z]{2}\\-[0-9a-z\\-]{4,16}"
    },
    "availabilityZones":{
      "type":"list",
      "member":{"shape":"availabilityZone"}
    },
    "count":{"type":"integer"},
    "dateTimeRangeList":{
      "type":"list",
      "member":{"shape":"DateTimeRange"},
      "max":10,
      "min":1
    },
    "entityArn":{
      "type":"string",
      "max":1600
    },
    "entityArnList":{
      "type":"list",
      "member":{"shape":"entityArn"},
      "max":100,
      "min":1
    },
    "entityStatusCode":{
      "type":"string",
      "enum":[
        "IMPAIRED",
        "UNIMPAIRED",
        "UNKNOWN"
      ]
    },
    "entityStatusCodeList":{
      "type":"list",
      "member":{"shape":"entityStatusCode"},
      "max":3,
      "min":1
    },
    "entityValue":{
      "type":"string",
      "max":256
    },
    "entityValueList":{
      "type":"list",
      "member":{"shape":"entityValue"},
      "max":100,
      "min":1
    },
    "eventAggregateField":{
      "type":"string",
      "enum":["eventTypeCategory"]
    },
    "eventArn":{
      "type":"string",
      "max":1600,
      "pattern":"arn:aws:health:[^:]*:[^:]*:event(?:/[\\w-]+){1}((?:/[\\w-]+){2})?"
    },
    "eventArnList":{
      "type":"list",
      "member":{"shape":"eventArn"},
      "max":10,
      "min":1
    },
    "eventDescription":{"type":"string"},
    "eventMetadata":{
      "type":"map",
      "key":{"shape":"metadataKey"},
      "value":{"shape":"metadataValue"}
    },
    "eventStatusCode":{
      "type":"string",
      "enum":[
        "open",
        "closed",
        "upcoming"
      ]
    },
    "eventStatusCodeList":{
      "type":"list",
      "member":{"shape":"eventStatusCode"},
      "max":6,
      "min":1
    },
    "eventType":{
      "type":"string",
      "max":100,
      "min":3
    },
    "eventTypeCategory":{
      "type":"string",
      "enum":[
        "issue",
        "accountNotification",
        "scheduledChange"
      ],
      "max":255,
      "min":3
    },
    "eventTypeCategoryList":{
      "type":"list",
      "member":{"shape":"eventTypeCategory"},
      "max":10,
      "min":1
    },
    "eventTypeCode":{
      "type":"string",
      "max":100,
      "min":3
    },
    "eventTypeList":{
      "type":"list",
      "member":{"shape":"eventType"},
      "max":10,
      "min":1
    },
    "locale":{
      "type":"string",
      "max":256,
      "min":2
    },
    "maxResults":{
      "type":"integer",
      "max":100,
      "min":10
    },
    "metadataKey":{"type":"string"},
    "metadataValue":{
      "type":"string",
      "max":10240
    },
    "nextToken":{
      "type":"string",
      "pattern":"[a-zA-Z0-9=/+_.-]{4,512}"
    },
    "region":{
      "type":"string",
      "pattern":"[^:/]{2,25}"
    },
    "regionList":{
      "type":"list",
      "member":{"shape":"region"},
      "max":10,
      "min":1
    },
    "service":{
      "type":"string",
      "max":30,
      "min":2
    },
    "serviceList":{
      "type":"list",
      "member":{"shape":"service"},
      "max":10,
      "min":1
    },
    "string":{"type":"string"},
    "tagFilter":{
      "type":"list",
      "member":{"shape":"tagSet"},
      "max":50
    },
    "tagKey":{
      "type":"string",
      "max":127
    },
    "tagSet":{
      "type":"map",
      "key":{"shape":"tagKey"},
      "value":{"shape":"tagValue"},
      "max":50
    },
    "tagValue":{
      "type":"string",
      "max":255
    },
    "timestamp":{"type":"timestamp"}
  },
  "documentation":"<fullname>AWS Health</fullname> <p>The AWS Health API provides programmatic access to the AWS Health information that is presented in the <a href=\"https://phd.aws.amazon.com/phd/home#/\">AWS Personal Health Dashboard</a>. You can get information about events that affect your AWS resources:</p> <ul> <li> <p> <a>DescribeEvents</a>: Summary information about events.</p> </li> <li> <p> <a>DescribeEventDetails</a>: Detailed information about one or more events.</p> </li> <li> <p> <a>DescribeAffectedEntities</a>: Information about AWS resources that are affected by one or more events.</p> </li> </ul> <p>In addition, these operations provide information about event types and summary counts of events or affected entities:</p> <ul> <li> <p> <a>DescribeEventTypes</a>: Information about the kinds of events that AWS Health tracks.</p> </li> <li> <p> <a>DescribeEventAggregates</a>: A count of the number of events that meet specified criteria.</p> </li> <li> <p> <a>DescribeEntityAggregates</a>: A count of the number of affected entities that meet specified criteria.</p> </li> </ul> <p>The Health API requires a Business or Enterprise support plan from <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>. Calling the Health API from an account that does not have a Business or Enterprise support plan causes a <code>SubscriptionRequiredException</code>. </p> <p>For authentication of requests, AWS Health uses the <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\">Signature Version 4 Signing Process</a>.</p> <p>See the <a href=\"http://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html\">AWS Health User Guide</a> for information about how to use the API.</p> <p> <b>Service Endpoint</b> </p> <p>The HTTP endpoint for the AWS Health API is:</p> <ul> <li> <p>https://health.us-east-1.amazonaws.com </p> </li> </ul>"
}
