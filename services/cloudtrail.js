awsim['cloudtrail'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2013-11-01",
    "endpointPrefix":"cloudtrail",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"CloudTrail",
    "serviceFullName":"AWS CloudTrail",
    "serviceId":"CloudTrail",
    "signatureVersion":"v4",
    "targetPrefix":"com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101",
    "uid":"cloudtrail-2013-11-01"
  },
  "operations":{
    "AddTags":{
      "name":"AddTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsRequest"},
      "output":{"shape":"AddTagsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"CloudTrailARNInvalidException"},
        {"shape":"ResourceTypeNotSupportedException"},
        {"shape":"TagsLimitExceededException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"InvalidTagParameterException"},
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Adds one or more tags to a trail, up to a limit of 50. Tags must be unique per trail. Overwrites an existing tag's value when a new value is specified for an existing tag key. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail that applies to all regions only from the region in which the trail was created (that is, from its home region).</p>",
      "idempotent":true
    },
    "CreateTrail":{
      "name":"CreateTrail",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTrailRequest"},
      "output":{"shape":"CreateTrailResponse"},
      "errors":[
        {"shape":"MaximumNumberOfTrailsExceededException"},
        {"shape":"TrailAlreadyExistsException"},
        {"shape":"S3BucketDoesNotExistException"},
        {"shape":"InsufficientS3BucketPolicyException"},
        {"shape":"InsufficientSnsTopicPolicyException"},
        {"shape":"InsufficientEncryptionPolicyException"},
        {"shape":"InvalidS3BucketNameException"},
        {"shape":"InvalidS3PrefixException"},
        {"shape":"InvalidSnsTopicNameException"},
        {"shape":"InvalidKmsKeyIdException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"TrailNotProvidedException"},
        {"shape":"InvalidParameterCombinationException"},
        {"shape":"KmsKeyNotFoundException"},
        {"shape":"KmsKeyDisabledException"},
        {"shape":"KmsException"},
        {"shape":"InvalidCloudWatchLogsLogGroupArnException"},
        {"shape":"InvalidCloudWatchLogsRoleArnException"},
        {"shape":"CloudWatchLogsDeliveryUnavailableException"},
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. A maximum of five trails can exist in a region, irrespective of the region in which they were created.</p>",
      "idempotent":true
    },
    "DeleteTrail":{
      "name":"DeleteTrail",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTrailRequest"},
      "output":{"shape":"DeleteTrailResponse"},
      "errors":[
        {"shape":"TrailNotFoundException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"InvalidHomeRegionException"}
      ],
      "documentation":"<p>Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>",
      "idempotent":true
    },
    "DescribeTrails":{
      "name":"DescribeTrails",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTrailsRequest"},
      "output":{"shape":"DescribeTrailsResponse"},
      "errors":[
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Retrieves settings for the trail associated with the current region for your account.</p>",
      "idempotent":true
    },
    "GetEventSelectors":{
      "name":"GetEventSelectors",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetEventSelectorsRequest"},
      "output":{"shape":"GetEventSelectorsResponse"},
      "errors":[
        {"shape":"TrailNotFoundException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>The S3 objects that you are logging for data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes read-only events, write-only events, or all. </p> </li> </ul> <p>For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html\">Logging Data and Management Events for Trails </a> in the <i>AWS CloudTrail User Guide</i>.</p>",
      "idempotent":true
    },
    "GetTrailStatus":{
      "name":"GetTrailStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTrailStatusRequest"},
      "output":{"shape":"GetTrailStatusResponse"},
      "errors":[
        {"shape":"TrailNotFoundException"},
        {"shape":"InvalidTrailNameException"}
      ],
      "documentation":"<p>Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.</p>",
      "idempotent":true
    },
    "ListPublicKeys":{
      "name":"ListPublicKeys",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPublicKeysRequest"},
      "output":{"shape":"ListPublicKeysResponse"},
      "errors":[
        {"shape":"InvalidTimeRangeException"},
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"InvalidTokenException"}
      ],
      "documentation":"<p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private/public key pairs per region. Each digest file is signed with a private key unique to its region. Therefore, when you validate a digest file from a particular region, you must look in the same region for its corresponding public key.</p> </note>",
      "idempotent":true
    },
    "ListTags":{
      "name":"ListTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagsRequest"},
      "output":{"shape":"ListTagsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"CloudTrailARNInvalidException"},
        {"shape":"ResourceTypeNotSupportedException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"InvalidTokenException"}
      ],
      "documentation":"<p>Lists the tags for the trail in the current region.</p>",
      "idempotent":true
    },
    "LookupEvents":{
      "name":"LookupEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"LookupEventsRequest"},
      "output":{"shape":"LookupEventsResponse"},
      "errors":[
        {"shape":"InvalidLookupAttributesException"},
        {"shape":"InvalidTimeRangeException"},
        {"shape":"InvalidMaxResultsException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Looks up API activity events captured by CloudTrail that create, update, or delete resources in your account. Events for a region can be looked up for the times in which you had CloudTrail turned on in that region during the last seven days. Lookup supports the following attributes:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 10, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to one per second per account. If this limit is exceeded, a throttling error occurs.</p> </important> <important> <p>Events that occurred during the selected time range will not be available for lookup if CloudTrail logging was not enabled when the events occurred.</p> </important>",
      "idempotent":true
    },
    "PutEventSelectors":{
      "name":"PutEventSelectors",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutEventSelectorsRequest"},
      "output":{"shape":"PutEventSelectorsResponse"},
      "errors":[
        {"shape":"TrailNotFoundException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"InvalidHomeRegionException"},
        {"shape":"InvalidEventSelectorsException"},
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Configures an event selector for your trail. Use event selectors to specify whether you want your trail to log management and/or data events. When an event occurs in your account, CloudTrail evaluates the event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. </p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event but it doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html\">Logging Data and Management Events for Trails </a> in the <i>AWS CloudTrail User Guide</i>.</p>",
      "idempotent":true
    },
    "RemoveTags":{
      "name":"RemoveTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveTagsRequest"},
      "output":{"shape":"RemoveTagsResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"CloudTrailARNInvalidException"},
        {"shape":"ResourceTypeNotSupportedException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"InvalidTagParameterException"},
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Removes the specified tags from a trail.</p>",
      "idempotent":true
    },
    "StartLogging":{
      "name":"StartLogging",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartLoggingRequest"},
      "output":{"shape":"StartLoggingResponse"},
      "errors":[
        {"shape":"TrailNotFoundException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"InvalidHomeRegionException"}
      ],
      "documentation":"<p>Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>",
      "idempotent":true
    },
    "StopLogging":{
      "name":"StopLogging",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopLoggingRequest"},
      "output":{"shape":"StopLoggingResponse"},
      "errors":[
        {"shape":"TrailNotFoundException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"InvalidHomeRegionException"}
      ],
      "documentation":"<p>Suspends the recording of AWS API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.</p>",
      "idempotent":true
    },
    "UpdateTrail":{
      "name":"UpdateTrail",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateTrailRequest"},
      "output":{"shape":"UpdateTrailResponse"},
      "errors":[
        {"shape":"S3BucketDoesNotExistException"},
        {"shape":"InsufficientS3BucketPolicyException"},
        {"shape":"InsufficientSnsTopicPolicyException"},
        {"shape":"InsufficientEncryptionPolicyException"},
        {"shape":"TrailNotFoundException"},
        {"shape":"InvalidS3BucketNameException"},
        {"shape":"InvalidS3PrefixException"},
        {"shape":"InvalidSnsTopicNameException"},
        {"shape":"InvalidKmsKeyIdException"},
        {"shape":"InvalidTrailNameException"},
        {"shape":"TrailNotProvidedException"},
        {"shape":"InvalidParameterCombinationException"},
        {"shape":"InvalidHomeRegionException"},
        {"shape":"KmsKeyNotFoundException"},
        {"shape":"KmsKeyDisabledException"},
        {"shape":"KmsException"},
        {"shape":"InvalidCloudWatchLogsLogGroupArnException"},
        {"shape":"InvalidCloudWatchLogsRoleArnException"},
        {"shape":"CloudWatchLogsDeliveryUnavailableException"},
        {"shape":"UnsupportedOperationException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Updates the settings that specify delivery of log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.</p>",
      "idempotent":true
    }
  },
  "shapes":{
    "AddTagsRequest":{
      "type":"structure",
      "required":["ResourceId"],
      "members":{
        "ResourceId":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the trail to which one or more tags will be added. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "TagsList":{
          "shape":"TagsList",
          "documentation":"<p>Contains a list of CloudTrail tags, up to a limit of 50</p>"
        }
      },
      "documentation":"<p>Specifies the tags to add to a trail.</p>"
    },
    "AddTagsResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "Boolean":{"type":"boolean"},
    "ByteBuffer":{"type":"blob"},
    "CloudTrailARNInvalidException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when an operation is called with an invalid trail ARN. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>",
      "exception":true
    },
    "CloudWatchLogsDeliveryUnavailableException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Cannot set a CloudWatch Logs delivery for this region.</p>",
      "exception":true
    },
    "CreateTrailRequest":{
      "type":"structure",
      "required":[
        "Name",
        "S3BucketName"
      ],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the trail. The name must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the Amazon S3 bucket designated for publishing log files. See <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html\">Amazon S3 Bucket Naming Requirements</a>.</p>"
        },
        "S3KeyPrefix":{
          "shape":"String",
          "documentation":"<p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html\">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.</p>"
        },
        "SnsTopicName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.</p>"
        },
        "IncludeGlobalServiceEvents":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>"
        },
        "IsMultiRegionTrail":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail is created in the current region or in all regions. The default is false.</p>"
        },
        "EnableLogFileValidation":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether log file integrity validation is enabled. The default is false.</p> <note> <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p> </note>"
        },
        "CloudWatchLogsLogGroupArn":{
          "shape":"String",
          "documentation":"<p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.</p>"
        },
        "CloudWatchLogsRoleArn":{
          "shape":"String",
          "documentation":"<p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by \"alias/\", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <p>Examples:</p> <ul> <li> <p>alias/MyAliasName</p> </li> <li> <p>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</p> </li> <li> <p>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</p> </li> <li> <p>12345678-1234-1234-1234-123456789012</p> </li> </ul>"
        }
      },
      "documentation":"<p>Specifies the settings for each trail.</p>"
    },
    "CreateTrailResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the trail.</p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the Amazon S3 bucket designated for publishing log files.</p>"
        },
        "S3KeyPrefix":{
          "shape":"String",
          "documentation":"<p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html\">Finding Your CloudTrail Log Files</a>.</p>"
        },
        "SnsTopicName":{
          "shape":"String",
          "documentation":"<p>This field is deprecated. Use SnsTopicARN.</p>",
          "deprecated":true
        },
        "SnsTopicARN":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The format of a topic ARN is:</p> <p> <code>arn:aws:sns:us-east-1:123456789012:MyTopic</code> </p>"
        },
        "IncludeGlobalServiceEvents":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>"
        },
        "IsMultiRegionTrail":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail exists in one region or in all regions.</p>"
        },
        "TrailARN":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the trail that was created. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "LogFileValidationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether log file integrity validation is enabled.</p>"
        },
        "CloudWatchLogsLogGroupArn":{
          "shape":"String",
          "documentation":"<p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs will be delivered.</p>"
        },
        "CloudWatchLogsRoleArn":{
          "shape":"String",
          "documentation":"<p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the format:</p> <p> <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>"
        }
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "DataResource":{
      "type":"structure",
      "members":{
        "Type":{
          "shape":"String",
          "documentation":"<p>The resource type in which you want to log data events. You can specify only the following value: <code>AWS::S3::Object</code>.</p>"
        },
        "Values":{
          "shape":"DataResourceValues",
          "documentation":"<p>A list of ARN-like strings for the specified S3 objects.</p> <p>To log data events for all objects in an S3 bucket, specify the bucket and an empty object prefix such as <code>arn:aws:s3:::bucket-1/</code>. The trail logs data events for all objects in this S3 bucket.</p> <p>To log data events for specific objects, specify the S3 bucket and object prefix such as <code>arn:aws:s3:::bucket-1/example-images</code>. The trail logs data events for objects in this S3 bucket that match the prefix.</p>"
        }
      },
      "documentation":"<p>The Amazon S3 objects that you specify in your event selectors for your trail to log data events. Data events are object-level API operations that access S3 objects, such as <code>GetObject</code>, <code>DeleteObject</code>, and <code>PutObject</code>. You can specify up to 250 S3 buckets and object prefixes for a trail. </p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify an S3 bucket and an empty prefix, such as <code>arn:aws:s3:::bucket-1/</code>.</p> </li> <li> <p>You upload an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurs on an object in the S3 bucket that you specified in the event selector. The trail processes and logs the event.</p> </li> <li> <p>You upload another image file to a different S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The event occurs on an object in an S3 bucket that you didn't specify in the event selector. The trail doesn’t log the event.</p> </li> </ol>"
    },
    "DataResourceValues":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "DataResources":{
      "type":"list",
      "member":{"shape":"DataResource"}
    },
    "Date":{"type":"timestamp"},
    "DeleteTrailRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Specifies the name or the CloudTrail ARN of the trail to be deleted. The format of a trail ARN is: <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        }
      },
      "documentation":"<p>The request that specifies the name of a trail to delete.</p>"
    },
    "DeleteTrailResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "DescribeTrailsRequest":{
      "type":"structure",
      "members":{
        "trailNameList":{
          "shape":"TrailNameList",
          "documentation":"<p>Specifies a list of trail names, trail ARNs, or both, of the trails to describe. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p> <p>If an empty list is specified, information for the trail in the current region is returned.</p> <ul> <li> <p>If an empty list is specified and <code>IncludeShadowTrails</code> is false, then information for all trails in the current region is returned.</p> </li> <li> <p>If an empty list is specified and IncludeShadowTrails is null or true, then information for all trails in the current region and any associated shadow trails in other regions is returned.</p> </li> </ul> <note> <p>If one or more trail names are specified, information is returned only if the names match the names of trails belonging only to the current region. To return information about a trail in another region, you must specify its trail ARN.</p> </note>"
        },
        "includeShadowTrails":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether to include shadow trails in the response. A shadow trail is the replication in a region of a trail that was created in a different region. The default is true.</p>"
        }
      },
      "documentation":"<p>Returns information about the trail.</p>"
    },
    "DescribeTrailsResponse":{
      "type":"structure",
      "members":{
        "trailList":{
          "shape":"TrailList",
          "documentation":"<p>The list of trail objects.</p>"
        }
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "Event":{
      "type":"structure",
      "members":{
        "EventId":{
          "shape":"String",
          "documentation":"<p>The CloudTrail ID of the event returned.</p>"
        },
        "EventName":{
          "shape":"String",
          "documentation":"<p>The name of the event returned.</p>"
        },
        "EventTime":{
          "shape":"Date",
          "documentation":"<p>The date and time of the event returned.</p>"
        },
        "EventSource":{
          "shape":"String",
          "documentation":"<p>The AWS service that the request was made to.</p>"
        },
        "Username":{
          "shape":"String",
          "documentation":"<p>A user name or role name of the requester that called the API in the event returned.</p>"
        },
        "Resources":{
          "shape":"ResourceList",
          "documentation":"<p>A list of resources referenced by the event returned.</p>"
        },
        "CloudTrailEvent":{
          "shape":"String",
          "documentation":"<p>A JSON string that contains a representation of the event returned.</p>"
        }
      },
      "documentation":"<p>Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.</p>"
    },
    "EventSelector":{
      "type":"structure",
      "members":{
        "ReadWriteType":{
          "shape":"ReadWriteType",
          "documentation":"<p>Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 <code>GetConsoleOutput</code> is a read-only API operation and <code>RunInstances</code> is a write-only API operation.</p> <p> By default, the value is <code>All</code>.</p>"
        },
        "IncludeManagementEvents":{
          "shape":"Boolean",
          "documentation":"<p>Specify if you want your event selector to include management events for your trail.</p> <p> For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html#logging-management-events\">Management Events</a> in the <i>AWS CloudTrail User Guide</i>.</p> <p>By default, the value is <code>true</code>.</p>"
        },
        "DataResources":{
          "shape":"DataResources",
          "documentation":"<p>CloudTrail supports logging only data events for S3 objects. You can specify up to 250 S3 buckets and object prefixes for a trail.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html#logging-data-events\">Data Events</a> in the <i>AWS CloudTrail User Guide</i>.</p>"
        }
      },
      "documentation":"<p>Use event selectors to specify whether you want your trail to log management and/or data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p>"
    },
    "EventSelectors":{
      "type":"list",
      "member":{"shape":"EventSelector"}
    },
    "EventsList":{
      "type":"list",
      "member":{"shape":"Event"}
    },
    "GetEventSelectorsRequest":{
      "type":"structure",
      "required":["TrailName"],
      "members":{
        "TrailName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If you specify a trail ARN, it must be in the format:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        }
      }
    },
    "GetEventSelectorsResponse":{
      "type":"structure",
      "members":{
        "TrailARN":{
          "shape":"String",
          "documentation":"<p>The specified trail ARN that has the event selectors.</p>"
        },
        "EventSelectors":{
          "shape":"EventSelectors",
          "documentation":"<p>The event selectors that are configured for the trail.</p>"
        }
      }
    },
    "GetTrailStatusRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Specifies the name or the CloudTrail ARN of the trail for which you are requesting status. To get the status of a shadow trail (a replication of the trail in another region), you must specify its ARN. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        }
      },
      "documentation":"<p>The name of a trail about which you want the current status.</p>"
    },
    "GetTrailStatusResponse":{
      "type":"structure",
      "members":{
        "IsLogging":{
          "shape":"Boolean",
          "documentation":"<p>Whether the CloudTrail is currently logging AWS API calls.</p>"
        },
        "LatestDeliveryError":{
          "shape":"String",
          "documentation":"<p>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver log files to the designated bucket. For more information see the topic <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html\">Error Responses</a> in the Amazon S3 API Reference. </p> <note> <p>This error occurs only when there is a problem with the destination S3 bucket and will not occur for timeouts. To resolve the issue, create a new bucket and call <code>UpdateTrail</code> to specify the new bucket, or fix the existing objects so that CloudTrail can again write to the bucket.</p> </note>"
        },
        "LatestNotificationError":{
          "shape":"String",
          "documentation":"<p>Displays any Amazon SNS error that CloudTrail encountered when attempting to send a notification. For more information about Amazon SNS errors, see the <a href=\"http://docs.aws.amazon.com/sns/latest/dg/welcome.html\">Amazon SNS Developer Guide</a>. </p>"
        },
        "LatestDeliveryTime":{
          "shape":"Date",
          "documentation":"<p>Specifies the date and time that CloudTrail last delivered log files to an account's Amazon S3 bucket.</p>"
        },
        "LatestNotificationTime":{
          "shape":"Date",
          "documentation":"<p>Specifies the date and time of the most recent Amazon SNS notification that CloudTrail has written a new log file to an account's Amazon S3 bucket.</p>"
        },
        "StartLoggingTime":{
          "shape":"Date",
          "documentation":"<p>Specifies the most recent date and time when CloudTrail started recording API calls for an AWS account.</p>"
        },
        "StopLoggingTime":{
          "shape":"Date",
          "documentation":"<p>Specifies the most recent date and time when CloudTrail stopped recording API calls for an AWS account.</p>"
        },
        "LatestCloudWatchLogsDeliveryError":{
          "shape":"String",
          "documentation":"<p>Displays any CloudWatch Logs error that CloudTrail encountered when attempting to deliver logs to CloudWatch Logs.</p>"
        },
        "LatestCloudWatchLogsDeliveryTime":{
          "shape":"Date",
          "documentation":"<p>Displays the most recent date and time when CloudTrail delivered logs to CloudWatch Logs.</p>"
        },
        "LatestDigestDeliveryTime":{
          "shape":"Date",
          "documentation":"<p>Specifies the date and time that CloudTrail last delivered a digest file to an account's Amazon S3 bucket.</p>"
        },
        "LatestDigestDeliveryError":{
          "shape":"String",
          "documentation":"<p>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver a digest file to the designated bucket. For more information see the topic <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html\">Error Responses</a> in the Amazon S3 API Reference. </p> <note> <p>This error occurs only when there is a problem with the destination S3 bucket and will not occur for timeouts. To resolve the issue, create a new bucket and call <code>UpdateTrail</code> to specify the new bucket, or fix the existing objects so that CloudTrail can again write to the bucket.</p> </note>"
        },
        "LatestDeliveryAttemptTime":{
          "shape":"String",
          "documentation":"<p>This field is deprecated.</p>"
        },
        "LatestNotificationAttemptTime":{
          "shape":"String",
          "documentation":"<p>This field is deprecated.</p>"
        },
        "LatestNotificationAttemptSucceeded":{
          "shape":"String",
          "documentation":"<p>This field is deprecated.</p>"
        },
        "LatestDeliveryAttemptSucceeded":{
          "shape":"String",
          "documentation":"<p>This field is deprecated.</p>"
        },
        "TimeLoggingStarted":{
          "shape":"String",
          "documentation":"<p>This field is deprecated.</p>"
        },
        "TimeLoggingStopped":{
          "shape":"String",
          "documentation":"<p>This field is deprecated.</p>"
        }
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "InsufficientEncryptionPolicyException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the policy on the S3 bucket or KMS key is not sufficient.</p>",
      "exception":true
    },
    "InsufficientS3BucketPolicyException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>",
      "exception":true
    },
    "InsufficientSnsTopicPolicyException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the policy on the SNS topic is not sufficient.</p>",
      "exception":true
    },
    "InvalidCloudWatchLogsLogGroupArnException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the provided CloudWatch log group is not valid.</p>",
      "exception":true
    },
    "InvalidCloudWatchLogsRoleArnException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the provided role is not valid.</p>",
      "exception":true
    },
    "InvalidEventSelectorsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the <code>PutEventSelectors</code> operation is called with an invalid number of event selectors, data resources, or an invalid value for a parameter:</p> <ul> <li> <p>Specify a valid number of event selectors (1 to 5) for a trail.</p> </li> <li> <p>Specify a valid number of data resources (1 to 250) for an event selector.</p> </li> <li> <p>Specify a valid value for a parameter. For example, specifying the <code>ReadWriteType</code> parameter with a value of <code>read-only</code> is invalid.</p> </li> </ul>",
      "exception":true
    },
    "InvalidHomeRegionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>",
      "exception":true
    },
    "InvalidKmsKeyIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the KMS key ARN is invalid.</p>",
      "exception":true
    },
    "InvalidLookupAttributesException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Occurs when an invalid lookup attribute is specified.</p>",
      "exception":true
    },
    "InvalidMaxResultsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown if the limit specified is invalid.</p>",
      "exception":true
    },
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Invalid token or token that was previously used in a request with different parameters. This exception is thrown if the token is invalid.</p>",
      "exception":true
    },
    "InvalidParameterCombinationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the combination of parameters provided is not valid.</p>",
      "exception":true
    },
    "InvalidS3BucketNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the provided S3 bucket name is not valid.</p>",
      "exception":true
    },
    "InvalidS3PrefixException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the provided S3 prefix is not valid.</p>",
      "exception":true
    },
    "InvalidSnsTopicNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the provided SNS topic name is not valid.</p>",
      "exception":true
    },
    "InvalidTagParameterException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the key or value specified for the tag does not match the regular expression <code>^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-@]*)$</code>.</p>",
      "exception":true
    },
    "InvalidTimeRangeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Occurs if the timestamp values are invalid. Either the start time occurs after the end time or the time range is outside the range of possible values.</p>",
      "exception":true
    },
    "InvalidTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Reserved for future use.</p>",
      "exception":true
    },
    "InvalidTrailNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>",
      "exception":true
    },
    "KmsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when there is an issue with the specified KMS key and the trail can’t be updated.</p>",
      "exception":true
    },
    "KmsKeyDisabledException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is deprecated.</p>",
      "deprecated":true,
      "exception":true
    },
    "KmsKeyNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the KMS key does not exist, or when the S3 bucket and the KMS key are not in the same region.</p>",
      "exception":true
    },
    "ListPublicKeysRequest":{
      "type":"structure",
      "members":{
        "StartTime":{
          "shape":"Date",
          "documentation":"<p>Optionally specifies, in UTC, the start of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used, and the current public key is returned.</p>"
        },
        "EndTime":{
          "shape":"Date",
          "documentation":"<p>Optionally specifies, in UTC, the end of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Reserved for future use.</p>"
        }
      },
      "documentation":"<p>Requests the public keys for a specified time range.</p>"
    },
    "ListPublicKeysResponse":{
      "type":"structure",
      "members":{
        "PublicKeyList":{
          "shape":"PublicKeyList",
          "documentation":"<p>Contains an array of PublicKey objects.</p> <note> <p>The returned public keys may have validity time ranges that overlap.</p> </note>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Reserved for future use.</p>"
        }
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "ListTagsRequest":{
      "type":"structure",
      "required":["ResourceIdList"],
      "members":{
        "ResourceIdList":{
          "shape":"ResourceIdList",
          "documentation":"<p>Specifies a list of trail ARNs whose tags will be listed. The list has a limit of 20 ARNs. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Reserved for future use.</p>"
        }
      },
      "documentation":"<p>Specifies a list of trail tags to return.</p>"
    },
    "ListTagsResponse":{
      "type":"structure",
      "members":{
        "ResourceTagList":{
          "shape":"ResourceTagList",
          "documentation":"<p>A list of resource tags.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>Reserved for future use.</p>"
        }
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "LookupAttribute":{
      "type":"structure",
      "required":[
        "AttributeKey",
        "AttributeValue"
      ],
      "members":{
        "AttributeKey":{
          "shape":"LookupAttributeKey",
          "documentation":"<p>Specifies an attribute on which to filter the events returned.</p>"
        },
        "AttributeValue":{
          "shape":"String",
          "documentation":"<p>Specifies a value for the specified AttributeKey.</p>"
        }
      },
      "documentation":"<p>Specifies an attribute and value that filter the events returned.</p>"
    },
    "LookupAttributeKey":{
      "type":"string",
      "enum":[
        "EventId",
        "EventName",
        "Username",
        "ResourceType",
        "ResourceName",
        "EventSource"
      ]
    },
    "LookupAttributesList":{
      "type":"list",
      "member":{"shape":"LookupAttribute"}
    },
    "LookupEventsRequest":{
      "type":"structure",
      "members":{
        "LookupAttributes":{
          "shape":"LookupAttributesList",
          "documentation":"<p>Contains a list of lookup attributes. Currently the list can contain only one item.</p>"
        },
        "StartTime":{
          "shape":"Date",
          "documentation":"<p>Specifies that only events that occur after or at the specified time are returned. If the specified start time is after the specified end time, an error is returned.</p>"
        },
        "EndTime":{
          "shape":"Date",
          "documentation":"<p>Specifies that only events that occur before or at the specified time are returned. If the specified end time is before the specified start time, an error is returned.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The number of events to return. Possible values are 1 through 50. The default is 10.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.</p>"
        }
      },
      "documentation":"<p>Contains a request for LookupEvents.</p>"
    },
    "LookupEventsResponse":{
      "type":"structure",
      "members":{
        "Events":{
          "shape":"EventsList",
          "documentation":"<p>A list of events returned based on the lookup attributes specified and the CloudTrail event. The events list is sorted by time. The most recent event is listed first.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token to use to get the next page of results after a previous API call. If the token does not appear, there are no more results to return. The token must be passed in with the same parameters as the previous call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.</p>"
        }
      },
      "documentation":"<p>Contains a response to a LookupEvents action.</p>"
    },
    "MaxResults":{
      "type":"integer",
      "max":50,
      "min":1
    },
    "MaximumNumberOfTrailsExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the maximum number of trails is reached.</p>",
      "exception":true
    },
    "NextToken":{"type":"string"},
    "OperationNotPermittedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the requested operation is not permitted.</p>",
      "exception":true
    },
    "PublicKey":{
      "type":"structure",
      "members":{
        "Value":{
          "shape":"ByteBuffer",
          "documentation":"<p>The DER encoded public key value in PKCS#1 format.</p>"
        },
        "ValidityStartTime":{
          "shape":"Date",
          "documentation":"<p>The starting time of validity of the public key.</p>"
        },
        "ValidityEndTime":{
          "shape":"Date",
          "documentation":"<p>The ending time of validity of the public key.</p>"
        },
        "Fingerprint":{
          "shape":"String",
          "documentation":"<p>The fingerprint of the public key.</p>"
        }
      },
      "documentation":"<p>Contains information about a returned public key.</p>"
    },
    "PublicKeyList":{
      "type":"list",
      "member":{"shape":"PublicKey"}
    },
    "PutEventSelectorsRequest":{
      "type":"structure",
      "required":[
        "TrailName",
        "EventSelectors"
      ],
      "members":{
        "TrailName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If you specify a trail ARN, it must be in the format:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "EventSelectors":{
          "shape":"EventSelectors",
          "documentation":"<p>Specifies the settings for your event selectors. You can configure up to five event selectors for a trail.</p>"
        }
      }
    },
    "PutEventSelectorsResponse":{
      "type":"structure",
      "members":{
        "TrailARN":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the trail that was updated with event selectors. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "EventSelectors":{
          "shape":"EventSelectors",
          "documentation":"<p>Specifies the event selectors configured for your trail.</p>"
        }
      }
    },
    "ReadWriteType":{
      "type":"string",
      "enum":[
        "ReadOnly",
        "WriteOnly",
        "All"
      ]
    },
    "RemoveTagsRequest":{
      "type":"structure",
      "required":["ResourceId"],
      "members":{
        "ResourceId":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the trail from which tags should be removed. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "TagsList":{
          "shape":"TagsList",
          "documentation":"<p>Specifies a list of tags to be removed.</p>"
        }
      },
      "documentation":"<p>Specifies the tags to remove from a trail.</p>"
    },
    "RemoveTagsResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "Resource":{
      "type":"structure",
      "members":{
        "ResourceType":{
          "shape":"String",
          "documentation":"<p>The type of a resource referenced by the event returned. When the resource type cannot be determined, null is returned. Some examples of resource types are: <b>Instance</b> for EC2, <b>Trail</b> for CloudTrail, <b>DBInstance</b> for RDS, and <b>AccessKey</b> for IAM. For a list of resource types supported for event lookup, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/lookup_supported_resourcetypes.html\">Resource Types Supported for Event Lookup</a>.</p>"
        },
        "ResourceName":{
          "shape":"String",
          "documentation":"<p>The name of the resource referenced by the event returned. These are user-created names whose values will depend on the environment. For example, the resource name might be \"auto-scaling-test-group\" for an Auto Scaling Group or \"i-1234567\" for an EC2 Instance.</p>"
        }
      },
      "documentation":"<p>Specifies the type and name of a resource referenced by an event.</p>"
    },
    "ResourceIdList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "ResourceList":{
      "type":"list",
      "member":{"shape":"Resource"},
      "documentation":"<p>A list of resources referenced by the event returned.</p>"
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the specified resource is not found.</p>",
      "exception":true
    },
    "ResourceTag":{
      "type":"structure",
      "members":{
        "ResourceId":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the resource.</p>"
        },
        "TagsList":{
          "shape":"TagsList",
          "documentation":"<p>A list of tags.</p>"
        }
      },
      "documentation":"<p>A resource tag.</p>"
    },
    "ResourceTagList":{
      "type":"list",
      "member":{"shape":"ResourceTag"}
    },
    "ResourceTypeNotSupportedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>",
      "exception":true
    },
    "S3BucketDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the specified S3 bucket does not exist.</p>",
      "exception":true
    },
    "StartLoggingRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs AWS API calls. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        }
      },
      "documentation":"<p>The request to CloudTrail to start logging AWS API calls for an account.</p>"
    },
    "StartLoggingResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "StopLoggingRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will stop logging AWS API calls. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        }
      },
      "documentation":"<p>Passes the request to CloudTrail to stop logging AWS API calls for the specified account.</p>"
    },
    "StopLoggingResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    },
    "String":{"type":"string"},
    "Tag":{
      "type":"structure",
      "required":["Key"],
      "members":{
        "Key":{
          "shape":"String",
          "documentation":"<p>The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.</p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p>The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.</p>"
        }
      },
      "documentation":"<p>A custom key-value pair associated with a resource such as a CloudTrail trail.</p>"
    },
    "TagsLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The number of tags per trail has exceeded the permitted amount. Currently, the limit is 50.</p>",
      "exception":true
    },
    "TagsList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "documentation":"<p>A list of tags.</p>"
    },
    "Trail":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Name of the trail set by calling <a>CreateTrail</a>. The maximum length is 128 characters.</p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>Name of the Amazon S3 bucket into which CloudTrail delivers your trail files. See <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html\">Amazon S3 Bucket Naming Requirements</a>.</p>"
        },
        "S3KeyPrefix":{
          "shape":"String",
          "documentation":"<p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html\">Finding Your CloudTrail Log Files</a>.The maximum length is 200 characters.</p>"
        },
        "SnsTopicName":{
          "shape":"String",
          "documentation":"<p>This field is deprecated. Use SnsTopicARN.</p>",
          "deprecated":true
        },
        "SnsTopicARN":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The format of a topic ARN is:</p> <p> <code>arn:aws:sns:us-east-1:123456789012:MyTopic</code> </p>"
        },
        "IncludeGlobalServiceEvents":{
          "shape":"Boolean",
          "documentation":"<p>Set to <b>True</b> to include AWS API calls from AWS global services such as IAM. Otherwise, <b>False</b>.</p>"
        },
        "IsMultiRegionTrail":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail belongs only to one region or exists in all regions.</p>"
        },
        "HomeRegion":{
          "shape":"String",
          "documentation":"<p>The region in which the trail was created.</p>"
        },
        "TrailARN":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the trail. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "LogFileValidationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether log file validation is enabled.</p>"
        },
        "CloudWatchLogsLogGroupArn":{
          "shape":"String",
          "documentation":"<p>Specifies an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.</p>"
        },
        "CloudWatchLogsRoleArn":{
          "shape":"String",
          "documentation":"<p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the format:</p> <p> <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>"
        },
        "HasCustomEventSelectors":{
          "shape":"Boolean",
          "documentation":"<p>Specifies if the trail has custom event selectors.</p>"
        }
      },
      "documentation":"<p>The settings for a trail.</p>"
    },
    "TrailAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the specified trail already exists.</p>",
      "exception":true
    },
    "TrailList":{
      "type":"list",
      "member":{"shape":"Trail"}
    },
    "TrailNameList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "TrailNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the trail with the given name is not found.</p>",
      "exception":true
    },
    "TrailNotProvidedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is deprecated.</p>",
      "exception":true
    },
    "UnsupportedOperationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This exception is thrown when the requested operation is not supported.</p>",
      "exception":true
    },
    "UpdateTrailRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the trail or trail ARN. If <code>Name</code> is a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If <code>Name</code> is a trail ARN, it must be in the format:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the Amazon S3 bucket designated for publishing log files. See <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html\">Amazon S3 Bucket Naming Requirements</a>.</p>"
        },
        "S3KeyPrefix":{
          "shape":"String",
          "documentation":"<p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html\">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.</p>"
        },
        "SnsTopicName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.</p>"
        },
        "IncludeGlobalServiceEvents":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>"
        },
        "IsMultiRegionTrail":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted.</p>"
        },
        "EnableLogFileValidation":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether log file validation is enabled. The default is false.</p> <note> <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p> </note>"
        },
        "CloudWatchLogsLogGroupArn":{
          "shape":"String",
          "documentation":"<p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.</p>"
        },
        "CloudWatchLogsRoleArn":{
          "shape":"String",
          "documentation":"<p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by \"alias/\", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <p>Examples:</p> <ul> <li> <p>alias/MyAliasName</p> </li> <li> <p>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</p> </li> <li> <p>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</p> </li> <li> <p>12345678-1234-1234-1234-123456789012</p> </li> </ul>"
        }
      },
      "documentation":"<p>Specifies settings to update for the trail.</p>"
    },
    "UpdateTrailResponse":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the trail.</p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>Specifies the name of the Amazon S3 bucket designated for publishing log files.</p>"
        },
        "S3KeyPrefix":{
          "shape":"String",
          "documentation":"<p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html\">Finding Your CloudTrail Log Files</a>.</p>"
        },
        "SnsTopicName":{
          "shape":"String",
          "documentation":"<p>This field is deprecated. Use SnsTopicARN.</p>",
          "deprecated":true
        },
        "SnsTopicARN":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The format of a topic ARN is:</p> <p> <code>arn:aws:sns:us-east-1:123456789012:MyTopic</code> </p>"
        },
        "IncludeGlobalServiceEvents":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>"
        },
        "IsMultiRegionTrail":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether the trail exists in one region or in all regions.</p>"
        },
        "TrailARN":{
          "shape":"String",
          "documentation":"<p>Specifies the ARN of the trail that was updated. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>"
        },
        "LogFileValidationEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether log file integrity validation is enabled.</p>"
        },
        "CloudWatchLogsLogGroupArn":{
          "shape":"String",
          "documentation":"<p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs will be delivered.</p>"
        },
        "CloudWatchLogsRoleArn":{
          "shape":"String",
          "documentation":"<p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>"
        },
        "KmsKeyId":{
          "shape":"String",
          "documentation":"<p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the format:</p> <p> <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>"
        }
      },
      "documentation":"<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"
    }
  },
  "documentation":"<fullname>AWS CloudTrail</fullname> <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p> <p>CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.</p> <note> <p>As an alternative to the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWSCloudTrail. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For information about the AWS SDKs, including how to download and install them, see the <a href=\"http://aws.amazon.com/tools/\">Tools for Amazon Web Services page</a>.</p> </note> <p>See the <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html\">AWS CloudTrail User Guide</a> for information about the data that is included with each AWS API call listed in the log files.</p>"
}
