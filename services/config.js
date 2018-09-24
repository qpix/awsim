awsim['config'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2014-11-12",
    "endpointPrefix":"config",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"Config Service",
    "serviceFullName":"AWS Config",
    "serviceId":"Config Service",
    "signatureVersion":"v4",
    "targetPrefix":"StarlingDoveService",
    "uid":"config-2014-11-12"
  },
  "operations":{
    "BatchGetResourceConfig":{
      "name":"BatchGetResourceConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetResourceConfigRequest"},
      "output":{"shape":"BatchGetResourceConfigResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"NoAvailableConfigurationRecorderException"}
      ],
      "documentation":"<p>Returns the current configuration for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>"
    },
    "DeleteAggregationAuthorization":{
      "name":"DeleteAggregationAuthorization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteAggregationAuthorizationRequest"},
      "errors":[
        {"shape":"InvalidParameterValueException"}
      ],
      "documentation":"<p>Deletes the authorization granted to the specified configuration aggregator account in a specified region.</p>"
    },
    "DeleteConfigRule":{
      "name":"DeleteConfigRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteConfigRuleRequest"},
      "errors":[
        {"shape":"NoSuchConfigRuleException"},
        {"shape":"ResourceInUseException"}
      ],
      "documentation":"<p>Deletes the specified AWS Config rule and all of its evaluation results.</p> <p>AWS Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>"
    },
    "DeleteConfigurationAggregator":{
      "name":"DeleteConfigurationAggregator",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteConfigurationAggregatorRequest"},
      "errors":[
        {"shape":"NoSuchConfigurationAggregatorException"}
      ],
      "documentation":"<p>Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.</p>"
    },
    "DeleteConfigurationRecorder":{
      "name":"DeleteConfigurationRecorder",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteConfigurationRecorderRequest"},
      "errors":[
        {"shape":"NoSuchConfigurationRecorderException"}
      ],
      "documentation":"<p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, AWS Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the AWS Config console until you create a new configuration recorder.</p>"
    },
    "DeleteDeliveryChannel":{
      "name":"DeleteDeliveryChannel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDeliveryChannelRequest"},
      "errors":[
        {"shape":"NoSuchDeliveryChannelException"},
        {"shape":"LastDeliveryChannelDeleteFailedException"}
      ],
      "documentation":"<p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>"
    },
    "DeleteEvaluationResults":{
      "name":"DeleteEvaluationResults",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteEvaluationResultsRequest"},
      "output":{"shape":"DeleteEvaluationResultsResponse"},
      "errors":[
        {"shape":"NoSuchConfigRuleException"},
        {"shape":"ResourceInUseException"}
      ],
      "documentation":"<p>Deletes the evaluation results for the specified AWS Config rule. You can specify one AWS Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your AWS resources against the rule.</p>"
    },
    "DeletePendingAggregationRequest":{
      "name":"DeletePendingAggregationRequest",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeletePendingAggregationRequestRequest"},
      "errors":[
        {"shape":"InvalidParameterValueException"}
      ],
      "documentation":"<p>Deletes pending authorization requests for a specified aggregator account in a specified region.</p>"
    },
    "DeleteRetentionConfiguration":{
      "name":"DeleteRetentionConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRetentionConfigurationRequest"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"NoSuchRetentionConfigurationException"}
      ],
      "documentation":"<p>Deletes the retention configuration.</p>"
    },
    "DeliverConfigSnapshot":{
      "name":"DeliverConfigSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeliverConfigSnapshotRequest"},
      "output":{"shape":"DeliverConfigSnapshotResponse"},
      "errors":[
        {"shape":"NoSuchDeliveryChannelException"},
        {"shape":"NoAvailableConfigurationRecorderException"},
        {"shape":"NoRunningConfigurationRecorderException"}
      ],
      "documentation":"<p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, AWS Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>"
    },
    "DescribeAggregateComplianceByConfigRules":{
      "name":"DescribeAggregateComplianceByConfigRules",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAggregateComplianceByConfigRulesRequest"},
      "output":{"shape":"DescribeAggregateComplianceByConfigRulesResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidLimitException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"NoSuchConfigurationAggregatorException"}
      ],
      "documentation":"<p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. </p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>"
    },
    "DescribeAggregationAuthorizations":{
      "name":"DescribeAggregationAuthorizations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAggregationAuthorizationsRequest"},
      "output":{"shape":"DescribeAggregationAuthorizationsResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"InvalidLimitException"}
      ],
      "documentation":"<p>Returns a list of authorizations granted to various aggregator accounts and regions.</p>"
    },
    "DescribeComplianceByConfigRule":{
      "name":"DescribeComplianceByConfigRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeComplianceByConfigRuleRequest"},
      "output":{"shape":"DescribeComplianceByConfigRuleResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"NoSuchConfigRuleException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Indicates whether the specified AWS Config rules are compliant. If a rule is noncompliant, this action returns the number of AWS resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If AWS Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>AWS Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's AWS Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>"
    },
    "DescribeComplianceByResource":{
      "name":"DescribeComplianceByResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeComplianceByResourceRequest"},
      "output":{"shape":"DescribeComplianceByResourceResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Indicates whether the specified AWS resources are compliant. If a resource is noncompliant, this action returns the number of AWS Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the AWS Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If AWS Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>AWS Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's AWS Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>"
    },
    "DescribeConfigRuleEvaluationStatus":{
      "name":"DescribeConfigRuleEvaluationStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConfigRuleEvaluationStatusRequest"},
      "output":{"shape":"DescribeConfigRuleEvaluationStatusResponse"},
      "errors":[
        {"shape":"NoSuchConfigRuleException"},
        {"shape":"InvalidParameterValueException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Returns status information for each of your AWS managed Config rules. The status includes information such as the last time AWS Config invoked the rule, the last time AWS Config failed to invoke the rule, and the related error for the last failure.</p>"
    },
    "DescribeConfigRules":{
      "name":"DescribeConfigRules",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConfigRulesRequest"},
      "output":{"shape":"DescribeConfigRulesResponse"},
      "errors":[
        {"shape":"NoSuchConfigRuleException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Returns details about your AWS Config rules.</p>"
    },
    "DescribeConfigurationAggregatorSourcesStatus":{
      "name":"DescribeConfigurationAggregatorSourcesStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConfigurationAggregatorSourcesStatusRequest"},
      "output":{"shape":"DescribeConfigurationAggregatorSourcesStatusResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"NoSuchConfigurationAggregatorException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"InvalidLimitException"}
      ],
      "documentation":"<p>Returns status information for sources within an aggregator. The status includes information about the last time AWS Config aggregated data from source accounts or AWS Config failed to aggregate data from source accounts with the related error code or message. </p>"
    },
    "DescribeConfigurationAggregators":{
      "name":"DescribeConfigurationAggregators",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConfigurationAggregatorsRequest"},
      "output":{"shape":"DescribeConfigurationAggregatorsResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"NoSuchConfigurationAggregatorException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"InvalidLimitException"}
      ],
      "documentation":"<p>Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. </p>"
    },
    "DescribeConfigurationRecorderStatus":{
      "name":"DescribeConfigurationRecorderStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConfigurationRecorderStatusRequest"},
      "output":{"shape":"DescribeConfigurationRecorderStatusResponse"},
      "errors":[
        {"shape":"NoSuchConfigurationRecorderException"}
      ],
      "documentation":"<p>Returns the current status of the specified configuration recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>"
    },
    "DescribeConfigurationRecorders":{
      "name":"DescribeConfigurationRecorders",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConfigurationRecordersRequest"},
      "output":{"shape":"DescribeConfigurationRecordersResponse"},
      "errors":[
        {"shape":"NoSuchConfigurationRecorderException"}
      ],
      "documentation":"<p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>"
    },
    "DescribeDeliveryChannelStatus":{
      "name":"DescribeDeliveryChannelStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDeliveryChannelStatusRequest"},
      "output":{"shape":"DescribeDeliveryChannelStatusResponse"},
      "errors":[
        {"shape":"NoSuchDeliveryChannelException"}
      ],
      "documentation":"<p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>"
    },
    "DescribeDeliveryChannels":{
      "name":"DescribeDeliveryChannels",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDeliveryChannelsRequest"},
      "output":{"shape":"DescribeDeliveryChannelsResponse"},
      "errors":[
        {"shape":"NoSuchDeliveryChannelException"}
      ],
      "documentation":"<p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>"
    },
    "DescribePendingAggregationRequests":{
      "name":"DescribePendingAggregationRequests",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribePendingAggregationRequestsRequest"},
      "output":{"shape":"DescribePendingAggregationRequestsResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"InvalidLimitException"}
      ],
      "documentation":"<p>Returns a list of all pending aggregation requests.</p>"
    },
    "DescribeRetentionConfigurations":{
      "name":"DescribeRetentionConfigurations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeRetentionConfigurationsRequest"},
      "output":{"shape":"DescribeRetentionConfigurationsResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"NoSuchRetentionConfigurationException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>"
    },
    "GetAggregateComplianceDetailsByConfigRule":{
      "name":"GetAggregateComplianceDetailsByConfigRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAggregateComplianceDetailsByConfigRuleRequest"},
      "output":{"shape":"GetAggregateComplianceDetailsByConfigRuleResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidLimitException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"NoSuchConfigurationAggregatorException"}
      ],
      "documentation":"<p>Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a nextToken, the results are displayed on the next page.</p> </note>"
    },
    "GetAggregateConfigRuleComplianceSummary":{
      "name":"GetAggregateConfigRuleComplianceSummary",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAggregateConfigRuleComplianceSummaryRequest"},
      "output":{"shape":"GetAggregateConfigRuleComplianceSummaryResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidLimitException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"NoSuchConfigurationAggregatorException"}
      ],
      "documentation":"<p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>"
    },
    "GetComplianceDetailsByConfigRule":{
      "name":"GetComplianceDetailsByConfigRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetComplianceDetailsByConfigRuleRequest"},
      "output":{"shape":"GetComplianceDetailsByConfigRuleResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"NoSuchConfigRuleException"}
      ],
      "documentation":"<p>Returns the evaluation results for the specified AWS Config rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.</p>"
    },
    "GetComplianceDetailsByResource":{
      "name":"GetComplianceDetailsByResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetComplianceDetailsByResourceRequest"},
      "output":{"shape":"GetComplianceDetailsByResourceResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"}
      ],
      "documentation":"<p>Returns the evaluation results for the specified AWS resource. The results indicate which AWS Config rules were used to evaluate the resource, when each rule was last used, and whether the resource complies with each rule.</p>"
    },
    "GetComplianceSummaryByConfigRule":{
      "name":"GetComplianceSummaryByConfigRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "output":{"shape":"GetComplianceSummaryByConfigRuleResponse"},
      "documentation":"<p>Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each.</p>"
    },
    "GetComplianceSummaryByResourceType":{
      "name":"GetComplianceSummaryByResourceType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetComplianceSummaryByResourceTypeRequest"},
      "output":{"shape":"GetComplianceSummaryByResourceTypeResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"}
      ],
      "documentation":"<p>Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.</p>"
    },
    "GetDiscoveredResourceCounts":{
      "name":"GetDiscoveredResourceCounts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDiscoveredResourceCountsRequest"},
      "output":{"shape":"GetDiscoveredResourceCountsResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidLimitException"},
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account. </p> <p class=\"title\"> <b>Example</b> </p> <ol> <li> <p>AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>AWS Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, AWS Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new AWS Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for AWS Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>"
    },
    "GetResourceConfigHistory":{
      "name":"GetResourceConfigHistory",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetResourceConfigHistoryRequest"},
      "output":{"shape":"GetResourceConfigHistoryResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidTimeRangeException"},
        {"shape":"InvalidLimitException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"NoAvailableConfigurationRecorderException"},
        {"shape":"ResourceNotDiscoveredException"}
      ],
      "documentation":"<p>Returns a list of configuration items for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), AWS Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, AWS Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>"
    },
    "ListDiscoveredResources":{
      "name":"ListDiscoveredResources",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDiscoveredResourcesRequest"},
      "output":{"shape":"ListDiscoveredResourcesResponse"},
      "errors":[
        {"shape":"ValidationException"},
        {"shape":"InvalidLimitException"},
        {"shape":"InvalidNextTokenException"},
        {"shape":"NoAvailableConfigurationRecorderException"}
      ],
      "documentation":"<p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that AWS Config has discovered, including those that AWS Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, AWS Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>"
    },
    "PutAggregationAuthorization":{
      "name":"PutAggregationAuthorization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutAggregationAuthorizationRequest"},
      "output":{"shape":"PutAggregationAuthorizationResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"}
      ],
      "documentation":"<p>Authorizes the aggregator account and region to collect data from the source account and region. </p>"
    },
    "PutConfigRule":{
      "name":"PutConfigRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutConfigRuleRequest"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"MaxNumberOfConfigRulesExceededException"},
        {"shape":"ResourceInUseException"},
        {"shape":"InsufficientPermissionsException"},
        {"shape":"NoAvailableConfigurationRecorderException"}
      ],
      "documentation":"<p>Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations.</p> <p>You can use this action for custom AWS Config rules and AWS managed Config rules. A custom AWS Config rule is a rule that you develop and maintain. An AWS managed Config rule is a customizable, predefined rule that AWS Config provides.</p> <p>If you are adding a new custom AWS Config rule, you must first create the AWS Lambda function that the rule invokes to evaluate your resources. When you use the <code>PutConfigRule</code> action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. Specify the ARN for the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>SourceIdentifier</code> key. To reference AWS managed Config rule identifiers, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html\">About AWS Managed Config Rules</a>.</p> <p>For any new rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by AWS Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>The maximum number of rules that AWS Config supports is 50.</p> <p>For information about requesting a rule limit increase, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config\">AWS Config Limits</a> in the <i>AWS General Reference Guide</i>.</p> <p>For more information about developing and using AWS Config rules, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html\">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>"
    },
    "PutConfigurationAggregator":{
      "name":"PutConfigurationAggregator",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutConfigurationAggregatorRequest"},
      "output":{"shape":"PutConfigurationAggregatorResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidRoleException"},
        {"shape":"OrganizationAccessDeniedException"},
        {"shape":"NoAvailableOrganizationException"},
        {"shape":"OrganizationAllFeaturesNotEnabledException"}
      ],
      "documentation":"<p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <note> <p>AWS Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the master account and all features must be enabled in your organization. AWS Config calls <code>EnableAwsServiceAccess</code> API to enable integration between AWS Config and AWS Organizations. </p> </note>"
    },
    "PutConfigurationRecorder":{
      "name":"PutConfigurationRecorder",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutConfigurationRecorderRequest"},
      "errors":[
        {"shape":"MaxNumberOfConfigurationRecordersExceededException"},
        {"shape":"InvalidConfigurationRecorderNameException"},
        {"shape":"InvalidRoleException"},
        {"shape":"InvalidRecordingGroupException"}
      ],
      "documentation":"<p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>"
    },
    "PutDeliveryChannel":{
      "name":"PutDeliveryChannel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutDeliveryChannelRequest"},
      "errors":[
        {"shape":"MaxNumberOfDeliveryChannelsExceededException"},
        {"shape":"NoAvailableConfigurationRecorderException"},
        {"shape":"InvalidDeliveryChannelNameException"},
        {"shape":"NoSuchBucketException"},
        {"shape":"InvalidS3KeyPrefixException"},
        {"shape":"InvalidSNSTopicARNException"},
        {"shape":"InsufficientDeliveryPolicyException"}
      ],
      "documentation":"<p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>"
    },
    "PutEvaluations":{
      "name":"PutEvaluations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutEvaluationsRequest"},
      "output":{"shape":"PutEvaluationsResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"InvalidResultTokenException"},
        {"shape":"NoSuchConfigRuleException"}
      ],
      "documentation":"<p>Used by an AWS Lambda function to deliver evaluation results to AWS Config. This action is required in every AWS Lambda function that is invoked by an AWS Config rule.</p>"
    },
    "PutRetentionConfiguration":{
      "name":"PutRetentionConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutRetentionConfigurationRequest"},
      "output":{"shape":"PutRetentionConfigurationResponse"},
      "errors":[
        {"shape":"InvalidParameterValueException"},
        {"shape":"MaxNumberOfRetentionConfigurationsExceededException"}
      ],
      "documentation":"<p>Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>"
    },
    "StartConfigRulesEvaluation":{
      "name":"StartConfigRulesEvaluation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartConfigRulesEvaluationRequest"},
      "output":{"shape":"StartConfigRulesEvaluationResponse"},
      "errors":[
        {"shape":"NoSuchConfigRuleException"},
        {"shape":"LimitExceededException"},
        {"shape":"ResourceInUseException"},
        {"shape":"InvalidParameterValueException"}
      ],
      "documentation":"<p>Runs an on-demand evaluation for the specified AWS Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 AWS Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have AWS Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, AWS Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>AWS Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>"
    },
    "StartConfigurationRecorder":{
      "name":"StartConfigurationRecorder",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartConfigurationRecorderRequest"},
      "errors":[
        {"shape":"NoSuchConfigurationRecorderException"},
        {"shape":"NoAvailableDeliveryChannelException"}
      ],
      "documentation":"<p>Starts recording configurations of the AWS resources you have selected to record in your AWS account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>"
    },
    "StopConfigurationRecorder":{
      "name":"StopConfigurationRecorder",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopConfigurationRecorderRequest"},
      "errors":[
        {"shape":"NoSuchConfigurationRecorderException"}
      ],
      "documentation":"<p>Stops recording configurations of the AWS resources you have selected to record in your AWS account.</p>"
    }
  },
  "shapes":{
    "ARN":{"type":"string"},
    "AccountAggregationSource":{
      "type":"structure",
      "required":["AccountIds"],
      "members":{
        "AccountIds":{
          "shape":"AccountAggregationSourceAccountList",
          "documentation":"<p>The 12-digit account ID of the account being aggregated. </p>"
        },
        "AllAwsRegions":{
          "shape":"Boolean",
          "documentation":"<p>If true, aggregate existing AWS Config regions and future regions.</p>"
        },
        "AwsRegions":{
          "shape":"AggregatorRegionList",
          "documentation":"<p>The source regions being aggregated.</p>"
        }
      },
      "documentation":"<p>A collection of accounts and regions.</p>"
    },
    "AccountAggregationSourceAccountList":{
      "type":"list",
      "member":{"shape":"AccountId"},
      "min":1
    },
    "AccountAggregationSourceList":{
      "type":"list",
      "member":{"shape":"AccountAggregationSource"},
      "max":1,
      "min":0
    },
    "AccountId":{
      "type":"string",
      "pattern":"\\d{12}"
    },
    "AggregateComplianceByConfigRule":{
      "type":"structure",
      "members":{
        "ConfigRuleName":{
          "shape":"ConfigRuleName",
          "documentation":"<p>The name of the AWS Config rule.</p>"
        },
        "Compliance":{
          "shape":"Compliance",
          "documentation":"<p>Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.</p>"
        },
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the source account.</p>"
        },
        "AwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The source region from where the data is aggregated.</p>"
        }
      },
      "documentation":"<p>Indicates whether an AWS Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>"
    },
    "AggregateComplianceByConfigRuleList":{
      "type":"list",
      "member":{"shape":"AggregateComplianceByConfigRule"}
    },
    "AggregateComplianceCount":{
      "type":"structure",
      "members":{
        "GroupName":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>The 12-digit account ID or region based on the GroupByKey value.</p>"
        },
        "ComplianceSummary":{
          "shape":"ComplianceSummary",
          "documentation":"<p>The number of compliant and noncompliant AWS Config rules.</p>"
        }
      },
      "documentation":"<p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p>"
    },
    "AggregateComplianceCountList":{
      "type":"list",
      "member":{"shape":"AggregateComplianceCount"}
    },
    "AggregateEvaluationResult":{
      "type":"structure",
      "members":{
        "EvaluationResultIdentifier":{
          "shape":"EvaluationResultIdentifier",
          "documentation":"<p>Uniquely identifies the evaluation result.</p>"
        },
        "ComplianceType":{
          "shape":"ComplianceType",
          "documentation":"<p>The resource compliance status.</p> <p>For the <code>AggregationEvaluationResult</code> data type, AWS Config supports only the <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. AWS Config does not support the <code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code> value.</p>"
        },
        "ResultRecordedTime":{
          "shape":"Date",
          "documentation":"<p>The time when AWS Config recorded the aggregate evaluation result.</p>"
        },
        "ConfigRuleInvokedTime":{
          "shape":"Date",
          "documentation":"<p>The time when the AWS Config rule evaluated the AWS resource.</p>"
        },
        "Annotation":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>Supplementary information about how the agrregate evaluation determined the compliance.</p>"
        },
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the source account.</p>"
        },
        "AwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The source region from where the data is aggregated.</p>"
        }
      },
      "documentation":"<p>The details of an AWS Config evaluation for an account ID and region in an aggregator. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. </p>"
    },
    "AggregateEvaluationResultList":{
      "type":"list",
      "member":{"shape":"AggregateEvaluationResult"}
    },
    "AggregatedSourceStatus":{
      "type":"structure",
      "members":{
        "SourceId":{
          "shape":"String",
          "documentation":"<p>The source account ID or an organization.</p>"
        },
        "SourceType":{
          "shape":"AggregatedSourceType",
          "documentation":"<p>The source account or an organization.</p>"
        },
        "AwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The region authorized to collect aggregated data.</p>"
        },
        "LastUpdateStatus":{
          "shape":"AggregatedSourceStatusType",
          "documentation":"<p>Filters the last updated status type.</p> <ul> <li> <p>Valid value FAILED indicates errors while moving data.</p> </li> <li> <p>Valid value SUCCEEDED indicates the data was successfully moved.</p> </li> <li> <p>Valid value OUTDATED indicates the data is not the most recent.</p> </li> </ul>"
        },
        "LastUpdateTime":{
          "shape":"Date",
          "documentation":"<p>The time of the last update.</p>"
        },
        "LastErrorCode":{
          "shape":"String",
          "documentation":"<p>The error code that AWS Config returned when the source account aggregation last failed.</p>"
        },
        "LastErrorMessage":{
          "shape":"String",
          "documentation":"<p>The message indicating that the source account aggregation failed due to an error.</p>"
        }
      },
      "documentation":"<p>The current sync status between the source and the aggregator account.</p>"
    },
    "AggregatedSourceStatusList":{
      "type":"list",
      "member":{"shape":"AggregatedSourceStatus"}
    },
    "AggregatedSourceStatusType":{
      "type":"string",
      "enum":[
        "FAILED",
        "SUCCEEDED",
        "OUTDATED"
      ]
    },
    "AggregatedSourceStatusTypeList":{
      "type":"list",
      "member":{"shape":"AggregatedSourceStatusType"},
      "min":1
    },
    "AggregatedSourceType":{
      "type":"string",
      "enum":[
        "ACCOUNT",
        "ORGANIZATION"
      ]
    },
    "AggregationAuthorization":{
      "type":"structure",
      "members":{
        "AggregationAuthorizationArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the aggregation object.</p>"
        },
        "AuthorizedAccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the account authorized to aggregate data.</p>"
        },
        "AuthorizedAwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The region authorized to collect aggregated data.</p>"
        },
        "CreationTime":{
          "shape":"Date",
          "documentation":"<p>The time stamp when the aggregation authorization was created.</p>"
        }
      },
      "documentation":"<p>An object that represents the authorizations granted to aggregator accounts and regions.</p>"
    },
    "AggregationAuthorizationList":{
      "type":"list",
      "member":{"shape":"AggregationAuthorization"}
    },
    "AggregatorRegionList":{
      "type":"list",
      "member":{"shape":"String"},
      "min":1
    },
    "AllSupported":{"type":"boolean"},
    "AvailabilityZone":{"type":"string"},
    "AwsRegion":{
      "type":"string",
      "max":64,
      "min":1
    },
    "BaseConfigurationItem":{
      "type":"structure",
      "members":{
        "version":{
          "shape":"Version",
          "documentation":"<p>The version number of the resource configuration.</p>"
        },
        "accountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12 digit AWS account ID associated with the resource.</p>"
        },
        "configurationItemCaptureTime":{
          "shape":"ConfigurationItemCaptureTime",
          "documentation":"<p>The time when the configuration recording was initiated.</p>"
        },
        "configurationItemStatus":{
          "shape":"ConfigurationItemStatus",
          "documentation":"<p>The configuration item status.</p>"
        },
        "configurationStateId":{
          "shape":"ConfigurationStateId",
          "documentation":"<p>An identifier that indicates the ordering of the configuration items of a resource.</p>"
        },
        "arn":{
          "shape":"ARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of AWS resource.</p>"
        },
        "resourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The ID of the resource (for example., sg-xxxxxx).</p>"
        },
        "resourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The custom name of the resource, if available.</p>"
        },
        "awsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The region where the resource resides.</p>"
        },
        "availabilityZone":{
          "shape":"AvailabilityZone",
          "documentation":"<p>The Availability Zone associated with the resource.</p>"
        },
        "resourceCreationTime":{
          "shape":"ResourceCreationTime",
          "documentation":"<p>The time stamp when the resource was created.</p>"
        },
        "configuration":{
          "shape":"Configuration",
          "documentation":"<p>The description of the resource configuration.</p>"
        },
        "supplementaryConfiguration":{
          "shape":"SupplementaryConfiguration",
          "documentation":"<p>Configuration attributes that AWS Config returns for certain resource types to supplement the information returned for the configuration parameter.</p>"
        }
      },
      "documentation":"<p>The detailed configuration of a specified resource.</p>"
    },
    "BaseConfigurationItems":{
      "type":"list",
      "member":{"shape":"BaseConfigurationItem"}
    },
    "BaseResourceId":{
      "type":"string",
      "max":768,
      "min":1
    },
    "BatchGetResourceConfigRequest":{
      "type":"structure",
      "required":["resourceKeys"],
      "members":{
        "resourceKeys":{
          "shape":"ResourceKeys",
          "documentation":"<p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.</p>"
        }
      }
    },
    "BatchGetResourceConfigResponse":{
      "type":"structure",
      "members":{
        "baseConfigurationItems":{
          "shape":"BaseConfigurationItems",
          "documentation":"<p>A list that contains the current configuration of one or more resources.</p>"
        },
        "unprocessedResourceKeys":{
          "shape":"ResourceKeys",
          "documentation":"<p>A list of resource keys that were not processed with the current response. The unprocessesResourceKeys value is in the same form as ResourceKeys, so the value can be directly provided to a subsequent BatchGetResourceConfig operation. If there are no unprocessed resource keys, the response contains an empty unprocessedResourceKeys list. </p>"
        }
      }
    },
    "Boolean":{"type":"boolean"},
    "ChannelName":{
      "type":"string",
      "max":256,
      "min":1
    },
    "ChronologicalOrder":{
      "type":"string",
      "enum":[
        "Reverse",
        "Forward"
      ]
    },
    "Compliance":{
      "type":"structure",
      "members":{
        "ComplianceType":{
          "shape":"ComplianceType",
          "documentation":"<p>Indicates whether an AWS resource or AWS Config rule is compliant.</p> <p>A resource is compliant if it complies with all of the AWS Config rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.</p> <p>A rule is compliant if all of the resources that the rule evaluates comply with it. A rule is noncompliant if any of these resources do not comply.</p> <p>AWS Config returns the <code>INSUFFICIENT_DATA</code> value when no evaluation results are available for the AWS resource or AWS Config rule.</p> <p>For the <code>Compliance</code> data type, AWS Config supports only <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>INSUFFICIENT_DATA</code> values. AWS Config does not support the <code>NOT_APPLICABLE</code> value for the <code>Compliance</code> data type.</p>"
        },
        "ComplianceContributorCount":{
          "shape":"ComplianceContributorCount",
          "documentation":"<p>The number of AWS resources or AWS Config rules that cause a result of <code>NON_COMPLIANT</code>, up to a maximum number.</p>"
        }
      },
      "documentation":"<p>Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.</p>"
    },
    "ComplianceByConfigRule":{
      "type":"structure",
      "members":{
        "ConfigRuleName":{
          "shape":"StringWithCharLimit64",
          "documentation":"<p>The name of the AWS Config rule.</p>"
        },
        "Compliance":{
          "shape":"Compliance",
          "documentation":"<p>Indicates whether the AWS Config rule is compliant.</p>"
        }
      },
      "documentation":"<p>Indicates whether an AWS Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.</p>"
    },
    "ComplianceByConfigRules":{
      "type":"list",
      "member":{"shape":"ComplianceByConfigRule"}
    },
    "ComplianceByResource":{
      "type":"structure",
      "members":{
        "ResourceType":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>The type of the AWS resource that was evaluated.</p>"
        },
        "ResourceId":{
          "shape":"BaseResourceId",
          "documentation":"<p>The ID of the AWS resource that was evaluated.</p>"
        },
        "Compliance":{
          "shape":"Compliance",
          "documentation":"<p>Indicates whether the AWS resource complies with all of the AWS Config rules that evaluated it.</p>"
        }
      },
      "documentation":"<p>Indicates whether an AWS resource that is evaluated according to one or more AWS Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.</p>"
    },
    "ComplianceByResources":{
      "type":"list",
      "member":{"shape":"ComplianceByResource"}
    },
    "ComplianceContributorCount":{
      "type":"structure",
      "members":{
        "CappedCount":{
          "shape":"Integer",
          "documentation":"<p>The number of AWS resources or AWS Config rules responsible for the current compliance of the item.</p>"
        },
        "CapExceeded":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether the maximum count is reached.</p>"
        }
      },
      "documentation":"<p>The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number.</p>"
    },
    "ComplianceResourceTypes":{
      "type":"list",
      "member":{"shape":"StringWithCharLimit256"},
      "max":100,
      "min":0
    },
    "ComplianceSummariesByResourceType":{
      "type":"list",
      "member":{"shape":"ComplianceSummaryByResourceType"}
    },
    "ComplianceSummary":{
      "type":"structure",
      "members":{
        "CompliantResourceCount":{
          "shape":"ComplianceContributorCount",
          "documentation":"<p>The number of AWS Config rules or AWS resources that are compliant, up to a maximum of 25 for rules and 100 for resources.</p>"
        },
        "NonCompliantResourceCount":{
          "shape":"ComplianceContributorCount",
          "documentation":"<p>The number of AWS Config rules or AWS resources that are noncompliant, up to a maximum of 25 for rules and 100 for resources.</p>"
        },
        "ComplianceSummaryTimestamp":{
          "shape":"Date",
          "documentation":"<p>The time that AWS Config created the compliance summary.</p>"
        }
      },
      "documentation":"<p>The number of AWS Config rules or AWS resources that are compliant and noncompliant.</p>"
    },
    "ComplianceSummaryByResourceType":{
      "type":"structure",
      "members":{
        "ResourceType":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>The type of AWS resource.</p>"
        },
        "ComplianceSummary":{
          "shape":"ComplianceSummary",
          "documentation":"<p>The number of AWS resources that are compliant or noncompliant, up to a maximum of 100 for each.</p>"
        }
      },
      "documentation":"<p>The number of AWS resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.</p>"
    },
    "ComplianceType":{
      "type":"string",
      "enum":[
        "COMPLIANT",
        "NON_COMPLIANT",
        "NOT_APPLICABLE",
        "INSUFFICIENT_DATA"
      ]
    },
    "ComplianceTypes":{
      "type":"list",
      "member":{"shape":"ComplianceType"},
      "max":3,
      "min":0
    },
    "ConfigExportDeliveryInfo":{
      "type":"structure",
      "members":{
        "lastStatus":{
          "shape":"DeliveryStatus",
          "documentation":"<p>Status of the last attempted delivery.</p>"
        },
        "lastErrorCode":{
          "shape":"String",
          "documentation":"<p>The error code from the last attempted delivery.</p>"
        },
        "lastErrorMessage":{
          "shape":"String",
          "documentation":"<p>The error message from the last attempted delivery.</p>"
        },
        "lastAttemptTime":{
          "shape":"Date",
          "documentation":"<p>The time of the last attempted delivery.</p>"
        },
        "lastSuccessfulTime":{
          "shape":"Date",
          "documentation":"<p>The time of the last successful delivery.</p>"
        },
        "nextDeliveryTime":{
          "shape":"Date",
          "documentation":"<p>The time that the next delivery occurs.</p>"
        }
      },
      "documentation":"<p>Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.</p>"
    },
    "ConfigRule":{
      "type":"structure",
      "required":["Source"],
      "members":{
        "ConfigRuleName":{
          "shape":"StringWithCharLimit64",
          "documentation":"<p>The name that you assign to the AWS Config rule. The name is required if you are adding a new rule.</p>"
        },
        "ConfigRuleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS Config rule.</p>"
        },
        "ConfigRuleId":{
          "shape":"String",
          "documentation":"<p>The ID of the AWS Config rule.</p>"
        },
        "Description":{
          "shape":"EmptiableStringWithCharLimit256",
          "documentation":"<p>The description that you provide for the AWS Config rule.</p>"
        },
        "Scope":{
          "shape":"Scope",
          "documentation":"<p>Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.</p>"
        },
        "Source":{
          "shape":"Source",
          "documentation":"<p>Provides the rule owner (AWS or customer), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.</p>"
        },
        "InputParameters":{
          "shape":"StringWithCharLimit1024",
          "documentation":"<p>A string, in JSON format, that is passed to the AWS Config rule Lambda function.</p>"
        },
        "MaximumExecutionFrequency":{
          "shape":"MaximumExecutionFrequency",
          "documentation":"<p>The maximum frequency with which AWS Config runs evaluations for a rule. You can specify a value for <code>MaximumExecutionFrequency</code> when:</p> <ul> <li> <p>You are using an AWS managed rule that is triggered at a periodic frequency.</p> </li> <li> <p>Your custom rule is triggered when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </li> </ul> <note> <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the <code>MaximumExecutionFrequency</code> parameter.</p> </note>"
        },
        "ConfigRuleState":{
          "shape":"ConfigRuleState",
          "documentation":"<p>Indicates whether the AWS Config rule is active or is currently being deleted by AWS Config. It can also indicate the evaluation status for the AWS Config rule.</p> <p>AWS Config sets the state of the rule to <code>EVALUATING</code> temporarily after you use the <code>StartConfigRulesEvaluation</code> request to evaluate your resources against the AWS Config rule.</p> <p>AWS Config sets the state of the rule to <code>DELETING_RESULTS</code> temporarily after you use the <code>DeleteEvaluationResults</code> request to delete the current evaluation results for the AWS Config rule.</p> <p>AWS Config temporarily sets the state of a rule to <code>DELETING</code> after you use the <code>DeleteConfigRule</code> request to delete the rule. After AWS Config deletes the rule, the rule and all of its evaluations are erased and are no longer available.</p>"
        },
        "CreatedBy":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>Service principal name of the service that created the rule.</p> <note> <p>The field is populated only if the service linked rule is created by a service. The field is empty if you create your own rule.</p> </note>"
        }
      },
      "documentation":"<p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html\">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>"
    },
    "ConfigRuleComplianceFilters":{
      "type":"structure",
      "members":{
        "ConfigRuleName":{
          "shape":"ConfigRuleName",
          "documentation":"<p>The name of the AWS Config rule.</p>"
        },
        "ComplianceType":{
          "shape":"ComplianceType",
          "documentation":"<p>The rule compliance status.</p> <p>For the <code>ConfigRuleComplianceFilters</code> data type, AWS Config supports only <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. AWS Config does not support the <code>NOT_APPLICABLE</code> and the <code>INSUFFICIENT_DATA</code> values.</p>"
        },
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the source account. </p>"
        },
        "AwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The source region where the data is aggregated. </p>"
        }
      },
      "documentation":"<p>Filters the compliance results based on account ID, region, compliance type, and rule name.</p>"
    },
    "ConfigRuleComplianceSummaryFilters":{
      "type":"structure",
      "members":{
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the source account.</p>"
        },
        "AwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The source region where the data is aggregated.</p>"
        }
      },
      "documentation":"<p>Filters the results based on the account IDs and regions.</p>"
    },
    "ConfigRuleComplianceSummaryGroupKey":{
      "type":"string",
      "enum":[
        "ACCOUNT_ID",
        "AWS_REGION"
      ]
    },
    "ConfigRuleEvaluationStatus":{
      "type":"structure",
      "members":{
        "ConfigRuleName":{
          "shape":"StringWithCharLimit64",
          "documentation":"<p>The name of the AWS Config rule.</p>"
        },
        "ConfigRuleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS Config rule.</p>"
        },
        "ConfigRuleId":{
          "shape":"String",
          "documentation":"<p>The ID of the AWS Config rule.</p>"
        },
        "LastSuccessfulInvocationTime":{
          "shape":"Date",
          "documentation":"<p>The time that AWS Config last successfully invoked the AWS Config rule to evaluate your AWS resources.</p>"
        },
        "LastFailedInvocationTime":{
          "shape":"Date",
          "documentation":"<p>The time that AWS Config last failed to invoke the AWS Config rule to evaluate your AWS resources.</p>"
        },
        "LastSuccessfulEvaluationTime":{
          "shape":"Date",
          "documentation":"<p>The time that AWS Config last successfully evaluated your AWS resources against the rule.</p>"
        },
        "LastFailedEvaluationTime":{
          "shape":"Date",
          "documentation":"<p>The time that AWS Config last failed to evaluate your AWS resources against the rule.</p>"
        },
        "FirstActivatedTime":{
          "shape":"Date",
          "documentation":"<p>The time that you first activated the AWS Config rule.</p>"
        },
        "LastErrorCode":{
          "shape":"String",
          "documentation":"<p>The error code that AWS Config returned when the rule last failed.</p>"
        },
        "LastErrorMessage":{
          "shape":"String",
          "documentation":"<p>The error message that AWS Config returned when the rule last failed.</p>"
        },
        "FirstEvaluationStarted":{
          "shape":"Boolean",
          "documentation":"<p>Indicates whether AWS Config has evaluated your resources against the rule at least once.</p> <ul> <li> <p> <code>true</code> - AWS Config has evaluated your AWS resources against the rule at least once.</p> </li> <li> <p> <code>false</code> - AWS Config has not once finished evaluating your AWS resources against the rule.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Status information for your AWS managed Config rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom AWS Config rules.</p>"
    },
    "ConfigRuleEvaluationStatusList":{
      "type":"list",
      "member":{"shape":"ConfigRuleEvaluationStatus"}
    },
    "ConfigRuleName":{
      "type":"string",
      "max":64,
      "min":1
    },
    "ConfigRuleNames":{
      "type":"list",
      "member":{"shape":"StringWithCharLimit64"},
      "max":25,
      "min":0
    },
    "ConfigRuleState":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "DELETING",
        "DELETING_RESULTS",
        "EVALUATING"
      ]
    },
    "ConfigRules":{
      "type":"list",
      "member":{"shape":"ConfigRule"}
    },
    "ConfigSnapshotDeliveryProperties":{
      "type":"structure",
      "members":{
        "deliveryFrequency":{
          "shape":"MaximumExecutionFrequency",
          "documentation":"<p>The frequency with which AWS Config delivers configuration snapshots.</p>"
        }
      },
      "documentation":"<p>Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <note> <p>If you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot, see the following:</p> </note> <p>The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, AWS Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, AWS Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which AWS Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p>"
    },
    "ConfigStreamDeliveryInfo":{
      "type":"structure",
      "members":{
        "lastStatus":{
          "shape":"DeliveryStatus",
          "documentation":"<p>Status of the last attempted delivery.</p> <p> <b>Note</b> Providing an SNS topic on a <a href=\"http://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html\">DeliveryChannel</a> for AWS Config is optional. If the SNS delivery is turned off, the last status will be <b>Not_Applicable</b>.</p>"
        },
        "lastErrorCode":{
          "shape":"String",
          "documentation":"<p>The error code from the last attempted delivery.</p>"
        },
        "lastErrorMessage":{
          "shape":"String",
          "documentation":"<p>The error message from the last attempted delivery.</p>"
        },
        "lastStatusChangeTime":{
          "shape":"Date",
          "documentation":"<p>The time from the last status change.</p>"
        }
      },
      "documentation":"<p>A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.</p>"
    },
    "Configuration":{"type":"string"},
    "ConfigurationAggregator":{
      "type":"structure",
      "members":{
        "ConfigurationAggregatorName":{
          "shape":"ConfigurationAggregatorName",
          "documentation":"<p>The name of the aggregator.</p>"
        },
        "ConfigurationAggregatorArn":{
          "shape":"ConfigurationAggregatorArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the aggregator.</p>"
        },
        "AccountAggregationSources":{
          "shape":"AccountAggregationSourceList",
          "documentation":"<p>Provides a list of source accounts and regions to be aggregated.</p>"
        },
        "OrganizationAggregationSource":{
          "shape":"OrganizationAggregationSource",
          "documentation":"<p>Provides an organization and list of regions to be aggregated.</p>"
        },
        "CreationTime":{
          "shape":"Date",
          "documentation":"<p>The time stamp when the configuration aggregator was created.</p>"
        },
        "LastUpdatedTime":{
          "shape":"Date",
          "documentation":"<p>The time of the last update.</p>"
        }
      },
      "documentation":"<p>The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. </p>"
    },
    "ConfigurationAggregatorArn":{
      "type":"string",
      "pattern":"arn:aws[a-z\\-]*:config:[a-z\\-\\d]+:\\d+:config-aggregator/config-aggregator-[a-z\\d]+"
    },
    "ConfigurationAggregatorList":{
      "type":"list",
      "member":{"shape":"ConfigurationAggregator"}
    },
    "ConfigurationAggregatorName":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"[\\w\\-]+"
    },
    "ConfigurationAggregatorNameList":{
      "type":"list",
      "member":{"shape":"ConfigurationAggregatorName"},
      "max":10,
      "min":0
    },
    "ConfigurationItem":{
      "type":"structure",
      "members":{
        "version":{
          "shape":"Version",
          "documentation":"<p>The version number of the resource configuration.</p>"
        },
        "accountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit AWS account ID associated with the resource.</p>"
        },
        "configurationItemCaptureTime":{
          "shape":"ConfigurationItemCaptureTime",
          "documentation":"<p>The time when the configuration recording was initiated.</p>"
        },
        "configurationItemStatus":{
          "shape":"ConfigurationItemStatus",
          "documentation":"<p>The configuration item status.</p>"
        },
        "configurationStateId":{
          "shape":"ConfigurationStateId",
          "documentation":"<p>An identifier that indicates the ordering of the configuration items of a resource.</p>"
        },
        "configurationItemMD5Hash":{
          "shape":"ConfigurationItemMD5Hash",
          "documentation":"<p>Unique MD5 hash that represents the configuration item's state.</p> <p>You can use MD5 hash to compare the states of two or more configuration items that are associated with the same resource.</p>"
        },
        "arn":{
          "shape":"ARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of AWS resource.</p>"
        },
        "resourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The ID of the resource (for example, <code>sg-xxxxxx</code>).</p>"
        },
        "resourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The custom name of the resource, if available.</p>"
        },
        "awsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The region where the resource resides.</p>"
        },
        "availabilityZone":{
          "shape":"AvailabilityZone",
          "documentation":"<p>The Availability Zone associated with the resource.</p>"
        },
        "resourceCreationTime":{
          "shape":"ResourceCreationTime",
          "documentation":"<p>The time stamp when the resource was created.</p>"
        },
        "tags":{
          "shape":"Tags",
          "documentation":"<p>A mapping of key value tags associated with the resource.</p>"
        },
        "relatedEvents":{
          "shape":"RelatedEventList",
          "documentation":"<p>A list of CloudTrail event IDs.</p> <p>A populated field indicates that the current configuration was initiated by the events recorded in the CloudTrail log. For more information about CloudTrail, see <a href=\"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html\">What Is AWS CloudTrail</a>.</p> <p>An empty field indicates that the current configuration was not initiated by any event.</p>"
        },
        "relationships":{
          "shape":"RelationshipList",
          "documentation":"<p>A list of related AWS resources.</p>"
        },
        "configuration":{
          "shape":"Configuration",
          "documentation":"<p>The description of the resource configuration.</p>"
        },
        "supplementaryConfiguration":{
          "shape":"SupplementaryConfiguration",
          "documentation":"<p>Configuration attributes that AWS Config returns for certain resource types to supplement the information returned for the <code>configuration</code> parameter.</p>"
        }
      },
      "documentation":"<p>A list that contains detailed configurations of a specified resource.</p>"
    },
    "ConfigurationItemCaptureTime":{"type":"timestamp"},
    "ConfigurationItemList":{
      "type":"list",
      "member":{"shape":"ConfigurationItem"}
    },
    "ConfigurationItemMD5Hash":{"type":"string"},
    "ConfigurationItemStatus":{
      "type":"string",
      "enum":[
        "OK",
        "ResourceDiscovered",
        "ResourceNotRecorded",
        "ResourceDeleted",
        "ResourceDeletedNotRecorded"
      ]
    },
    "ConfigurationRecorder":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"RecorderName",
          "documentation":"<p>The name of the recorder. By default, AWS Config automatically assigns the name \"default\" when creating the configuration recorder. You cannot change the assigned name.</p>"
        },
        "roleARN":{
          "shape":"String",
          "documentation":"<p>Amazon Resource Name (ARN) of the IAM role used to describe the AWS resources associated with the account.</p>"
        },
        "recordingGroup":{
          "shape":"RecordingGroup",
          "documentation":"<p>Specifies the types of AWS resources for which AWS Config records configuration changes.</p>"
        }
      },
      "documentation":"<p>An object that represents the recording of configuration changes of an AWS resource.</p>"
    },
    "ConfigurationRecorderList":{
      "type":"list",
      "member":{"shape":"ConfigurationRecorder"}
    },
    "ConfigurationRecorderNameList":{
      "type":"list",
      "member":{"shape":"RecorderName"}
    },
    "ConfigurationRecorderStatus":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the configuration recorder.</p>"
        },
        "lastStartTime":{
          "shape":"Date",
          "documentation":"<p>The time the recorder was last started.</p>"
        },
        "lastStopTime":{
          "shape":"Date",
          "documentation":"<p>The time the recorder was last stopped.</p>"
        },
        "recording":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether or not the recorder is currently recording.</p>"
        },
        "lastStatus":{
          "shape":"RecorderStatus",
          "documentation":"<p>The last (previous) status of the recorder.</p>"
        },
        "lastErrorCode":{
          "shape":"String",
          "documentation":"<p>The error code indicating that the recording failed.</p>"
        },
        "lastErrorMessage":{
          "shape":"String",
          "documentation":"<p>The message indicating that the recording failed due to an error.</p>"
        },
        "lastStatusChangeTime":{
          "shape":"Date",
          "documentation":"<p>The time when the status was last changed.</p>"
        }
      },
      "documentation":"<p>The current status of the configuration recorder.</p>"
    },
    "ConfigurationRecorderStatusList":{
      "type":"list",
      "member":{"shape":"ConfigurationRecorderStatus"}
    },
    "ConfigurationStateId":{"type":"string"},
    "Date":{"type":"timestamp"},
    "DeleteAggregationAuthorizationRequest":{
      "type":"structure",
      "required":[
        "AuthorizedAccountId",
        "AuthorizedAwsRegion"
      ],
      "members":{
        "AuthorizedAccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the account authorized to aggregate data.</p>"
        },
        "AuthorizedAwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The region authorized to collect aggregated data.</p>"
        }
      }
    },
    "DeleteConfigRuleRequest":{
      "type":"structure",
      "required":["ConfigRuleName"],
      "members":{
        "ConfigRuleName":{
          "shape":"StringWithCharLimit64",
          "documentation":"<p>The name of the AWS Config rule that you want to delete.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteConfigurationAggregatorRequest":{
      "type":"structure",
      "required":["ConfigurationAggregatorName"],
      "members":{
        "ConfigurationAggregatorName":{
          "shape":"ConfigurationAggregatorName",
          "documentation":"<p>The name of the configuration aggregator.</p>"
        }
      }
    },
    "DeleteConfigurationRecorderRequest":{
      "type":"structure",
      "required":["ConfigurationRecorderName"],
      "members":{
        "ConfigurationRecorderName":{
          "shape":"RecorderName",
          "documentation":"<p>The name of the configuration recorder to be deleted. You can retrieve the name of your configuration recorder by using the <code>DescribeConfigurationRecorders</code> action.</p>"
        }
      },
      "documentation":"<p>The request object for the <code>DeleteConfigurationRecorder</code> action.</p>"
    },
    "DeleteDeliveryChannelRequest":{
      "type":"structure",
      "required":["DeliveryChannelName"],
      "members":{
        "DeliveryChannelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the delivery channel to delete.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format. </p>"
    },
    "DeleteEvaluationResultsRequest":{
      "type":"structure",
      "required":["ConfigRuleName"],
      "members":{
        "ConfigRuleName":{
          "shape":"StringWithCharLimit64",
          "documentation":"<p>The name of the AWS Config rule for which you want to delete the evaluation results.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DeleteEvaluationResultsResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output when you delete the evaluation results for the specified AWS Config rule.</p>"
    },
    "DeletePendingAggregationRequestRequest":{
      "type":"structure",
      "required":[
        "RequesterAccountId",
        "RequesterAwsRegion"
      ],
      "members":{
        "RequesterAccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the account requesting to aggregate data.</p>"
        },
        "RequesterAwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The region requesting to aggregate data.</p>"
        }
      }
    },
    "DeleteRetentionConfigurationRequest":{
      "type":"structure",
      "required":["RetentionConfigurationName"],
      "members":{
        "RetentionConfigurationName":{
          "shape":"RetentionConfigurationName",
          "documentation":"<p>The name of the retention configuration to delete.</p>"
        }
      }
    },
    "DeliverConfigSnapshotRequest":{
      "type":"structure",
      "required":["deliveryChannelName"],
      "members":{
        "deliveryChannelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the delivery channel through which the snapshot is delivered.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DeliverConfigSnapshot</a> action.</p>"
    },
    "DeliverConfigSnapshotResponse":{
      "type":"structure",
      "members":{
        "configSnapshotId":{
          "shape":"String",
          "documentation":"<p>The ID of the snapshot that is being created.</p>"
        }
      },
      "documentation":"<p>The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.</p>"
    },
    "DeliveryChannel":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the delivery channel. By default, AWS Config assigns the name \"default\" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.</p>"
        },
        "s3BucketName":{
          "shape":"String",
          "documentation":"<p>The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.</p> <p>If you specify a bucket that belongs to another AWS account, that bucket must have policies that grant access permissions to AWS Config. For more information, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html\">Permissions for the Amazon S3 Bucket</a> in the AWS Config Developer Guide.</p>"
        },
        "s3KeyPrefix":{
          "shape":"String",
          "documentation":"<p>The prefix for the specified Amazon S3 bucket.</p>"
        },
        "snsTopicARN":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.</p> <p>If you choose a topic from another account, the topic must have policies that grant access permissions to AWS Config. For more information, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html\">Permissions for the Amazon SNS Topic</a> in the AWS Config Developer Guide.</p>"
        },
        "configSnapshotDeliveryProperties":{
          "shape":"ConfigSnapshotDeliveryProperties",
          "documentation":"<p>The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.</p>"
        }
      },
      "documentation":"<p>The channel through which AWS Config delivers notifications and updated configuration states.</p>"
    },
    "DeliveryChannelList":{
      "type":"list",
      "member":{"shape":"DeliveryChannel"}
    },
    "DeliveryChannelNameList":{
      "type":"list",
      "member":{"shape":"ChannelName"}
    },
    "DeliveryChannelStatus":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the delivery channel.</p>"
        },
        "configSnapshotDeliveryInfo":{
          "shape":"ConfigExportDeliveryInfo",
          "documentation":"<p>A list containing the status of the delivery of the snapshot to the specified Amazon S3 bucket.</p>"
        },
        "configHistoryDeliveryInfo":{
          "shape":"ConfigExportDeliveryInfo",
          "documentation":"<p>A list that contains the status of the delivery of the configuration history to the specified Amazon S3 bucket.</p>"
        },
        "configStreamDeliveryInfo":{
          "shape":"ConfigStreamDeliveryInfo",
          "documentation":"<p>A list containing the status of the delivery of the configuration stream notification to the specified Amazon SNS topic.</p>"
        }
      },
      "documentation":"<p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>"
    },
    "DeliveryChannelStatusList":{
      "type":"list",
      "member":{"shape":"DeliveryChannelStatus"}
    },
    "DeliveryStatus":{
      "type":"string",
      "enum":[
        "Success",
        "Failure",
        "Not_Applicable"
      ]
    },
    "DescribeAggregateComplianceByConfigRulesRequest":{
      "type":"structure",
      "required":["ConfigurationAggregatorName"],
      "members":{
        "ConfigurationAggregatorName":{
          "shape":"ConfigurationAggregatorName",
          "documentation":"<p>The name of the configuration aggregator.</p>"
        },
        "Filters":{
          "shape":"ConfigRuleComplianceFilters",
          "documentation":"<p>Filters the results by ConfigRuleComplianceFilters object. </p>"
        },
        "Limit":{
          "shape":"GroupByAPILimit",
          "documentation":"<p>The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "DescribeAggregateComplianceByConfigRulesResponse":{
      "type":"structure",
      "members":{
        "AggregateComplianceByConfigRules":{
          "shape":"AggregateComplianceByConfigRuleList",
          "documentation":"<p>Returns a list of AggregateComplianceByConfigRule object.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "DescribeAggregationAuthorizationsRequest":{
      "type":"structure",
      "members":{
        "Limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of AggregationAuthorizations returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "DescribeAggregationAuthorizationsResponse":{
      "type":"structure",
      "members":{
        "AggregationAuthorizations":{
          "shape":"AggregationAuthorizationList",
          "documentation":"<p>Returns a list of authorizations granted to various aggregator accounts and regions.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "DescribeComplianceByConfigRuleRequest":{
      "type":"structure",
      "members":{
        "ConfigRuleNames":{
          "shape":"ConfigRuleNames",
          "documentation":"<p>Specify one or more AWS Config rule names to filter the results by rule.</p>"
        },
        "ComplianceTypes":{
          "shape":"ComplianceTypes",
          "documentation":"<p>Filters the results by compliance.</p> <p>The allowed values are <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>INSUFFICIENT_DATA</code>.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeComplianceByConfigRuleResponse":{
      "type":"structure",
      "members":{
        "ComplianceByConfigRules":{
          "shape":"ComplianceByConfigRules",
          "documentation":"<p>Indicates whether each of the specified AWS Config rules is compliant.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeComplianceByResourceRequest":{
      "type":"structure",
      "members":{
        "ResourceType":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>The types of AWS resources for which you want compliance information (for example, <code>AWS::EC2::Instance</code>). For this action, you can specify that the resource type is an AWS account by specifying <code>AWS::::Account</code>.</p>"
        },
        "ResourceId":{
          "shape":"BaseResourceId",
          "documentation":"<p>The ID of the AWS resource for which you want compliance information. You can specify only one resource ID. If you specify a resource ID, you must also specify a type for <code>ResourceType</code>.</p>"
        },
        "ComplianceTypes":{
          "shape":"ComplianceTypes",
          "documentation":"<p>Filters the results by compliance.</p> <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>.</p>"
        },
        "Limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeComplianceByResourceResponse":{
      "type":"structure",
      "members":{
        "ComplianceByResources":{
          "shape":"ComplianceByResources",
          "documentation":"<p>Indicates whether the specified AWS resource complies with all of the AWS Config rules that evaluate it.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeConfigRuleEvaluationStatusRequest":{
      "type":"structure",
      "members":{
        "ConfigRuleNames":{
          "shape":"ConfigRuleNames",
          "documentation":"<p>The name of the AWS managed Config rules for which you want status information. If you do not specify any names, AWS Config returns status information for all AWS managed Config rules that you use.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        },
        "Limit":{
          "shape":"RuleLimit",
          "documentation":"<p>The number of rule evaluation results that you want returned.</p> <p>This parameter is required if the rule limit for your account is more than the default of 50 rules.</p> <p>For information about requesting a rule limit increase, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config\">AWS Config Limits</a> in the <i>AWS General Reference Guide</i>.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeConfigRuleEvaluationStatusResponse":{
      "type":"structure",
      "members":{
        "ConfigRulesEvaluationStatus":{
          "shape":"ConfigRuleEvaluationStatusList",
          "documentation":"<p>Status information about your AWS managed Config rules.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeConfigRulesRequest":{
      "type":"structure",
      "members":{
        "ConfigRuleNames":{
          "shape":"ConfigRuleNames",
          "documentation":"<p>The names of the AWS Config rules for which you want details. If you do not specify any names, AWS Config returns details for all your rules.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeConfigRulesResponse":{
      "type":"structure",
      "members":{
        "ConfigRules":{
          "shape":"ConfigRules",
          "documentation":"<p>The details about your AWS Config rules.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "DescribeConfigurationAggregatorSourcesStatusRequest":{
      "type":"structure",
      "required":["ConfigurationAggregatorName"],
      "members":{
        "ConfigurationAggregatorName":{
          "shape":"ConfigurationAggregatorName",
          "documentation":"<p>The name of the configuration aggregator.</p>"
        },
        "UpdateStatus":{
          "shape":"AggregatedSourceStatusTypeList",
          "documentation":"<p>Filters the status type.</p> <ul> <li> <p>Valid value FAILED indicates errors while moving data.</p> </li> <li> <p>Valid value SUCCEEDED indicates the data was successfully moved.</p> </li> <li> <p>Valid value OUTDATED indicates the data is not the most recent.</p> </li> </ul>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        },
        "Limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of AggregatorSourceStatus returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.</p>"
        }
      }
    },
    "DescribeConfigurationAggregatorSourcesStatusResponse":{
      "type":"structure",
      "members":{
        "AggregatedSourceStatusList":{
          "shape":"AggregatedSourceStatusList",
          "documentation":"<p>Returns an AggregatedSourceStatus object. </p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "DescribeConfigurationAggregatorsRequest":{
      "type":"structure",
      "members":{
        "ConfigurationAggregatorNames":{
          "shape":"ConfigurationAggregatorNameList",
          "documentation":"<p>The name of the configuration aggregators.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        },
        "Limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of configuration aggregators returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.</p>"
        }
      }
    },
    "DescribeConfigurationAggregatorsResponse":{
      "type":"structure",
      "members":{
        "ConfigurationAggregators":{
          "shape":"ConfigurationAggregatorList",
          "documentation":"<p>Returns a ConfigurationAggregators object.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "DescribeConfigurationRecorderStatusRequest":{
      "type":"structure",
      "members":{
        "ConfigurationRecorderNames":{
          "shape":"ConfigurationRecorderNameList",
          "documentation":"<p>The name(s) of the configuration recorder. If the name is not specified, the action returns the current status of all the configuration recorders associated with the account.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DescribeConfigurationRecorderStatus</a> action.</p>"
    },
    "DescribeConfigurationRecorderStatusResponse":{
      "type":"structure",
      "members":{
        "ConfigurationRecordersStatus":{
          "shape":"ConfigurationRecorderStatusList",
          "documentation":"<p>A list that contains status of the specified recorders.</p>"
        }
      },
      "documentation":"<p>The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.</p>"
    },
    "DescribeConfigurationRecordersRequest":{
      "type":"structure",
      "members":{
        "ConfigurationRecorderNames":{
          "shape":"ConfigurationRecorderNameList",
          "documentation":"<p>A list of configuration recorder names.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DescribeConfigurationRecorders</a> action.</p>"
    },
    "DescribeConfigurationRecordersResponse":{
      "type":"structure",
      "members":{
        "ConfigurationRecorders":{
          "shape":"ConfigurationRecorderList",
          "documentation":"<p>A list that contains the descriptions of the specified configuration recorders.</p>"
        }
      },
      "documentation":"<p>The output for the <a>DescribeConfigurationRecorders</a> action.</p>"
    },
    "DescribeDeliveryChannelStatusRequest":{
      "type":"structure",
      "members":{
        "DeliveryChannelNames":{
          "shape":"DeliveryChannelNameList",
          "documentation":"<p>A list of delivery channel names.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DeliveryChannelStatus</a> action.</p>"
    },
    "DescribeDeliveryChannelStatusResponse":{
      "type":"structure",
      "members":{
        "DeliveryChannelsStatus":{
          "shape":"DeliveryChannelStatusList",
          "documentation":"<p>A list that contains the status of a specified delivery channel.</p>"
        }
      },
      "documentation":"<p>The output for the <a>DescribeDeliveryChannelStatus</a> action.</p>"
    },
    "DescribeDeliveryChannelsRequest":{
      "type":"structure",
      "members":{
        "DeliveryChannelNames":{
          "shape":"DeliveryChannelNameList",
          "documentation":"<p>A list of delivery channel names.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DescribeDeliveryChannels</a> action.</p>"
    },
    "DescribeDeliveryChannelsResponse":{
      "type":"structure",
      "members":{
        "DeliveryChannels":{
          "shape":"DeliveryChannelList",
          "documentation":"<p>A list that contains the descriptions of the specified delivery channel.</p>"
        }
      },
      "documentation":"<p>The output for the <a>DescribeDeliveryChannels</a> action.</p>"
    },
    "DescribePendingAggregationRequestsLimit":{
      "type":"integer",
      "max":20,
      "min":0
    },
    "DescribePendingAggregationRequestsRequest":{
      "type":"structure",
      "members":{
        "Limit":{
          "shape":"DescribePendingAggregationRequestsLimit",
          "documentation":"<p>The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "DescribePendingAggregationRequestsResponse":{
      "type":"structure",
      "members":{
        "PendingAggregationRequests":{
          "shape":"PendingAggregationRequestList",
          "documentation":"<p>Returns a PendingAggregationRequests object.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "DescribeRetentionConfigurationsRequest":{
      "type":"structure",
      "members":{
        "RetentionConfigurationNames":{
          "shape":"RetentionConfigurationNameList",
          "documentation":"<p>A list of names of retention configurations for which you want details. If you do not specify a name, AWS Config returns details for all the retention configurations for that account.</p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>"
        }
      }
    },
    "DescribeRetentionConfigurationsResponse":{
      "type":"structure",
      "members":{
        "RetentionConfigurations":{
          "shape":"RetentionConfigurationList",
          "documentation":"<p>Returns a retention configuration object.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>"
        }
      }
    },
    "EarlierTime":{"type":"timestamp"},
    "EmptiableStringWithCharLimit256":{
      "type":"string",
      "max":256,
      "min":0
    },
    "Evaluation":{
      "type":"structure",
      "required":[
        "ComplianceResourceType",
        "ComplianceResourceId",
        "ComplianceType",
        "OrderingTimestamp"
      ],
      "members":{
        "ComplianceResourceType":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>The type of AWS resource that was evaluated.</p>"
        },
        "ComplianceResourceId":{
          "shape":"BaseResourceId",
          "documentation":"<p>The ID of the AWS resource that was evaluated.</p>"
        },
        "ComplianceType":{
          "shape":"ComplianceType",
          "documentation":"<p>Indicates whether the AWS resource complies with the AWS Config rule that it was evaluated against.</p> <p>For the <code>Evaluation</code> data type, AWS Config supports only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values. AWS Config does not support the <code>INSUFFICIENT_DATA</code> value for this data type.</p> <p>Similarly, AWS Config does not accept <code>INSUFFICIENT_DATA</code> as the value for <code>ComplianceType</code> from a <code>PutEvaluations</code> request. For example, an AWS Lambda function for a custom AWS Config rule cannot pass an <code>INSUFFICIENT_DATA</code> value to AWS Config.</p>"
        },
        "Annotation":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>Supplementary information about how the evaluation determined the compliance.</p>"
        },
        "OrderingTimestamp":{
          "shape":"OrderingTimestamp",
          "documentation":"<p>The time of the event in AWS Config that triggered the evaluation. For event-based evaluations, the time indicates when AWS Config created the configuration item that triggered the evaluation. For periodic evaluations, the time indicates when AWS Config triggered the evaluation at the frequency that you specified (for example, every 24 hours).</p>"
        }
      },
      "documentation":"<p>Identifies an AWS resource and indicates whether it complies with the AWS Config rule that it was evaluated against.</p>"
    },
    "EvaluationResult":{
      "type":"structure",
      "members":{
        "EvaluationResultIdentifier":{
          "shape":"EvaluationResultIdentifier",
          "documentation":"<p>Uniquely identifies the evaluation result.</p>"
        },
        "ComplianceType":{
          "shape":"ComplianceType",
          "documentation":"<p>Indicates whether the AWS resource complies with the AWS Config rule that evaluated it.</p> <p>For the <code>EvaluationResult</code> data type, AWS Config supports only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values. AWS Config does not support the <code>INSUFFICIENT_DATA</code> value for the <code>EvaluationResult</code> data type.</p>"
        },
        "ResultRecordedTime":{
          "shape":"Date",
          "documentation":"<p>The time when AWS Config recorded the evaluation result.</p>"
        },
        "ConfigRuleInvokedTime":{
          "shape":"Date",
          "documentation":"<p>The time when the AWS Config rule evaluated the AWS resource.</p>"
        },
        "Annotation":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>Supplementary information about how the evaluation determined the compliance.</p>"
        },
        "ResultToken":{
          "shape":"String",
          "documentation":"<p>An encrypted token that associates an evaluation with an AWS Config rule. The token identifies the rule, the AWS resource being evaluated, and the event that triggered the evaluation.</p>"
        }
      },
      "documentation":"<p>The details of an AWS Config evaluation. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.</p>"
    },
    "EvaluationResultIdentifier":{
      "type":"structure",
      "members":{
        "EvaluationResultQualifier":{
          "shape":"EvaluationResultQualifier",
          "documentation":"<p>Identifies an AWS Config rule used to evaluate an AWS resource, and provides the type and ID of the evaluated resource.</p>"
        },
        "OrderingTimestamp":{
          "shape":"Date",
          "documentation":"<p>The time of the event that triggered the evaluation of your AWS resources. The time can indicate when AWS Config delivered a configuration item change notification, or it can indicate when AWS Config delivered the configuration snapshot, depending on which event triggered the evaluation.</p>"
        }
      },
      "documentation":"<p>Uniquely identifies an evaluation result.</p>"
    },
    "EvaluationResultQualifier":{
      "type":"structure",
      "members":{
        "ConfigRuleName":{
          "shape":"StringWithCharLimit64",
          "documentation":"<p>The name of the AWS Config rule that was used in the evaluation.</p>"
        },
        "ResourceType":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>The type of AWS resource that was evaluated.</p>"
        },
        "ResourceId":{
          "shape":"BaseResourceId",
          "documentation":"<p>The ID of the evaluated AWS resource.</p>"
        }
      },
      "documentation":"<p>Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated.</p>"
    },
    "EvaluationResults":{
      "type":"list",
      "member":{"shape":"EvaluationResult"}
    },
    "Evaluations":{
      "type":"list",
      "member":{"shape":"Evaluation"},
      "max":100,
      "min":0
    },
    "EventSource":{
      "type":"string",
      "enum":["aws.config"]
    },
    "GetAggregateComplianceDetailsByConfigRuleRequest":{
      "type":"structure",
      "required":[
        "ConfigurationAggregatorName",
        "ConfigRuleName",
        "AccountId",
        "AwsRegion"
      ],
      "members":{
        "ConfigurationAggregatorName":{
          "shape":"ConfigurationAggregatorName",
          "documentation":"<p>The name of the configuration aggregator.</p>"
        },
        "ConfigRuleName":{
          "shape":"ConfigRuleName",
          "documentation":"<p>The name of the AWS Config rule for which you want compliance information.</p>"
        },
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the source account.</p>"
        },
        "AwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The source region from where the data is aggregated.</p>"
        },
        "ComplianceType":{
          "shape":"ComplianceType",
          "documentation":"<p>The resource compliance status.</p> <note> <p>For the <code>GetAggregateComplianceDetailsByConfigRuleRequest</code> data type, AWS Config supports only the <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. AWS Config does not support the <code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code> values.</p> </note>"
        },
        "Limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of evaluation results returned on each page. The default is 50. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "GetAggregateComplianceDetailsByConfigRuleResponse":{
      "type":"structure",
      "members":{
        "AggregateEvaluationResults":{
          "shape":"AggregateEvaluationResultList",
          "documentation":"<p>Returns an AggregateEvaluationResults object.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "GetAggregateConfigRuleComplianceSummaryRequest":{
      "type":"structure",
      "required":["ConfigurationAggregatorName"],
      "members":{
        "ConfigurationAggregatorName":{
          "shape":"ConfigurationAggregatorName",
          "documentation":"<p>The name of the configuration aggregator.</p>"
        },
        "Filters":{
          "shape":"ConfigRuleComplianceSummaryFilters",
          "documentation":"<p>Filters the results based on the ConfigRuleComplianceSummaryFilters object.</p>"
        },
        "GroupByKey":{
          "shape":"ConfigRuleComplianceSummaryGroupKey",
          "documentation":"<p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>"
        },
        "Limit":{
          "shape":"GroupByAPILimit",
          "documentation":"<p>The maximum number of evaluation results returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, AWS Config uses the default.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "GetAggregateConfigRuleComplianceSummaryResponse":{
      "type":"structure",
      "members":{
        "GroupByKey":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>"
        },
        "AggregateComplianceCounts":{
          "shape":"AggregateComplianceCountList",
          "documentation":"<p>Returns a list of AggregateComplianceCounts object.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "GetComplianceDetailsByConfigRuleRequest":{
      "type":"structure",
      "required":["ConfigRuleName"],
      "members":{
        "ConfigRuleName":{
          "shape":"StringWithCharLimit64",
          "documentation":"<p>The name of the AWS Config rule for which you want compliance information.</p>"
        },
        "ComplianceTypes":{
          "shape":"ComplianceTypes",
          "documentation":"<p>Filters the results by compliance.</p> <p>The allowed values are <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code>.</p>"
        },
        "Limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "GetComplianceDetailsByConfigRuleResponse":{
      "type":"structure",
      "members":{
        "EvaluationResults":{
          "shape":"EvaluationResults",
          "documentation":"<p>Indicates whether the AWS resource complies with the specified AWS Config rule.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "GetComplianceDetailsByResourceRequest":{
      "type":"structure",
      "required":[
        "ResourceType",
        "ResourceId"
      ],
      "members":{
        "ResourceType":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>The type of the AWS resource for which you want compliance information.</p>"
        },
        "ResourceId":{
          "shape":"BaseResourceId",
          "documentation":"<p>The ID of the AWS resource for which you want compliance information.</p>"
        },
        "ComplianceTypes":{
          "shape":"ComplianceTypes",
          "documentation":"<p>Filters the results by compliance.</p> <p>The allowed values are <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code>.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "GetComplianceDetailsByResourceResponse":{
      "type":"structure",
      "members":{
        "EvaluationResults":{
          "shape":"EvaluationResults",
          "documentation":"<p>Indicates whether the specified AWS resource complies each AWS Config rule.</p>"
        },
        "NextToken":{
          "shape":"String",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "GetComplianceSummaryByConfigRuleResponse":{
      "type":"structure",
      "members":{
        "ComplianceSummary":{
          "shape":"ComplianceSummary",
          "documentation":"<p>The number of AWS Config rules that are compliant and the number that are noncompliant, up to a maximum of 25 for each.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "GetComplianceSummaryByResourceTypeRequest":{
      "type":"structure",
      "members":{
        "ResourceTypes":{
          "shape":"ResourceTypes",
          "documentation":"<p>Specify one or more resource types to get the number of resources that are compliant and the number that are noncompliant for each resource type.</p> <p>For this request, you can specify an AWS resource type such as <code>AWS::EC2::Instance</code>. You can specify that the resource type is an AWS account by specifying <code>AWS::::Account</code>.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "GetComplianceSummaryByResourceTypeResponse":{
      "type":"structure",
      "members":{
        "ComplianceSummariesByResourceType":{
          "shape":"ComplianceSummariesByResourceType",
          "documentation":"<p>The number of resources that are compliant and the number that are noncompliant. If one or more resource types were provided with the request, the numbers are returned for each resource type. The maximum number returned is 100.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "GetDiscoveredResourceCountsRequest":{
      "type":"structure",
      "members":{
        "resourceTypes":{
          "shape":"ResourceTypes",
          "documentation":"<p>The comma-separated list that specifies the resource types that you want AWS Config to return (for example, <code>\"AWS::EC2::Instance\"</code>, <code>\"AWS::IAM::User\"</code>).</p> <p>If a value for <code>resourceTypes</code> is not specified, AWS Config returns all resource types that AWS Config is recording in the region for your account.</p> <note> <p>If the configuration recorder is turned off, AWS Config returns an empty list of <a>ResourceCount</a> objects. If the configuration recorder is not recording a specific resource type (for example, S3 buckets), that resource type is not returned in the list of <a>ResourceCount</a> objects.</p> </note>"
        },
        "limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of <a>ResourceCount</a> objects returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "GetDiscoveredResourceCountsResponse":{
      "type":"structure",
      "members":{
        "totalDiscoveredResources":{
          "shape":"Long",
          "documentation":"<p>The total number of resources that AWS Config is recording in the region for your account. If you specify resource types in the request, AWS Config returns only the total number of resources for those resource types.</p> <p class=\"title\"> <b>Example</b> </p> <ol> <li> <p>AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets, for a total of 60 resources.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify the resource type, <code>\"AWS::EC2::Instances\"</code>, in the request.</p> </li> <li> <p>AWS Config returns 25 for <code>totalDiscoveredResources</code>.</p> </li> </ol>"
        },
        "resourceCounts":{
          "shape":"ResourceCounts",
          "documentation":"<p>The list of <code>ResourceCount</code> objects. Each object is listed in descending order by the number of resources.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      }
    },
    "GetResourceConfigHistoryRequest":{
      "type":"structure",
      "required":[
        "resourceType",
        "resourceId"
      ],
      "members":{
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type.</p>"
        },
        "resourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The ID of the resource (for example., <code>sg-xxxxxx</code>).</p>"
        },
        "laterTime":{
          "shape":"LaterTime",
          "documentation":"<p>The time stamp that indicates a later time. If not specified, current time is taken.</p>"
        },
        "earlierTime":{
          "shape":"EarlierTime",
          "documentation":"<p>The time stamp that indicates an earlier time. If not specified, the action returns paginated results that contain configuration items that start when the first configuration item was recorded.</p>"
        },
        "chronologicalOrder":{
          "shape":"ChronologicalOrder",
          "documentation":"<p>The chronological order for configuration items listed. By default, the results are listed in reverse chronological order.</p>"
        },
        "limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of configuration items returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p>The input for the <a>GetResourceConfigHistory</a> action.</p>"
    },
    "GetResourceConfigHistoryResponse":{
      "type":"structure",
      "members":{
        "configurationItems":{
          "shape":"ConfigurationItemList",
          "documentation":"<p>A list that contains the configuration history of one or more resources.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p>The output for the <a>GetResourceConfigHistory</a> action.</p>"
    },
    "GroupByAPILimit":{
      "type":"integer",
      "max":1000,
      "min":0
    },
    "IncludeGlobalResourceTypes":{"type":"boolean"},
    "InsufficientDeliveryPolicyException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Your Amazon S3 bucket policy does not permit AWS Config to write to it.</p>",
      "exception":true
    },
    "InsufficientPermissionsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Indicates one of the following errors:</p> <ul> <li> <p>The rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p> </li> <li> <p>The AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p> </li> </ul>",
      "exception":true
    },
    "Integer":{"type":"integer"},
    "InvalidConfigurationRecorderNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have provided a configuration recorder name that is not valid.</p>",
      "exception":true
    },
    "InvalidDeliveryChannelNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified delivery channel name is not valid.</p>",
      "exception":true
    },
    "InvalidLimitException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified limit is outside the allowable range.</p>",
      "exception":true
    },
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified next token is invalid. Specify the <code>nextToken</code> string that was returned in the previous response to get the next page of results.</p>",
      "exception":true
    },
    "InvalidParameterValueException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>",
      "exception":true
    },
    "InvalidRecordingGroupException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>AWS Config throws an exception if the recording group does not contain a valid list of resource types. Invalid values might also be incorrectly formatted.</p>",
      "exception":true
    },
    "InvalidResultTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified <code>ResultToken</code> is invalid.</p>",
      "exception":true
    },
    "InvalidRoleException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have provided a null or empty role ARN.</p>",
      "exception":true
    },
    "InvalidS3KeyPrefixException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified Amazon S3 key prefix is not valid.</p>",
      "exception":true
    },
    "InvalidSNSTopicARNException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified Amazon SNS topic does not exist.</p>",
      "exception":true
    },
    "InvalidTimeRangeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified time range is not valid. The earlier time is not chronologically before the later time.</p>",
      "exception":true
    },
    "LastDeliveryChannelDeleteFailedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You cannot delete the delivery channel you specified because the configuration recorder is running.</p>",
      "exception":true
    },
    "LaterTime":{"type":"timestamp"},
    "Limit":{
      "type":"integer",
      "max":100,
      "min":0
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>For <code>StartConfigRulesEvaluation</code> API, this exception is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per minute.</p> <p>For <code>PutConfigurationAggregator</code> API, this exception is thrown if the number of accounts and aggregators exceeds the limit.</p>",
      "exception":true
    },
    "ListDiscoveredResourcesRequest":{
      "type":"structure",
      "required":["resourceType"],
      "members":{
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of resources that you want AWS Config to list in the response.</p>"
        },
        "resourceIds":{
          "shape":"ResourceIdList",
          "documentation":"<p>The IDs of only those resources that you want AWS Config to list in the response. If you do not specify this parameter, AWS Config lists all resources of the specified type that it has discovered.</p>"
        },
        "resourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The custom name of only those resources that you want AWS Config to list in the response. If you do not specify this parameter, AWS Config lists all resources of the specified type that it has discovered.</p>"
        },
        "limit":{
          "shape":"Limit",
          "documentation":"<p>The maximum number of resource identifiers returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>"
        },
        "includeDeletedResources":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether AWS Config includes deleted resources in the results. By default, deleted resources are not included.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "ListDiscoveredResourcesResponse":{
      "type":"structure",
      "members":{
        "resourceIdentifiers":{
          "shape":"ResourceIdentifierList",
          "documentation":"<p>The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "Long":{"type":"long"},
    "MaxNumberOfConfigRulesExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Failed to add the AWS Config rule because the account already contains the maximum number of 50 rules. Consider deleting any deactivated rules before you add new rules.</p>",
      "exception":true
    },
    "MaxNumberOfConfigurationRecordersExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have reached the limit of the number of recorders you can create.</p>",
      "exception":true
    },
    "MaxNumberOfDeliveryChannelsExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have reached the limit of the number of delivery channels you can create.</p>",
      "exception":true
    },
    "MaxNumberOfRetentionConfigurationsExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>",
      "exception":true
    },
    "MaximumExecutionFrequency":{
      "type":"string",
      "enum":[
        "One_Hour",
        "Three_Hours",
        "Six_Hours",
        "Twelve_Hours",
        "TwentyFour_Hours"
      ]
    },
    "MessageType":{
      "type":"string",
      "enum":[
        "ConfigurationItemChangeNotification",
        "ConfigurationSnapshotDeliveryCompleted",
        "ScheduledNotification",
        "OversizedConfigurationItemChangeNotification"
      ]
    },
    "Name":{"type":"string"},
    "NextToken":{"type":"string"},
    "NoAvailableConfigurationRecorderException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.</p>",
      "exception":true
    },
    "NoAvailableDeliveryChannelException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>There is no delivery channel available to record configurations.</p>",
      "exception":true
    },
    "NoAvailableOrganizationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Organization does is no longer available.</p>",
      "exception":true
    },
    "NoRunningConfigurationRecorderException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>There is no configuration recorder running.</p>",
      "exception":true
    },
    "NoSuchBucketException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified Amazon S3 bucket does not exist.</p>",
      "exception":true
    },
    "NoSuchConfigRuleException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>",
      "exception":true
    },
    "NoSuchConfigurationAggregatorException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have specified a configuration aggregator that does not exist.</p>",
      "exception":true
    },
    "NoSuchConfigurationRecorderException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have specified a configuration recorder that does not exist.</p>",
      "exception":true
    },
    "NoSuchDeliveryChannelException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have specified a delivery channel that does not exist.</p>",
      "exception":true
    },
    "NoSuchRetentionConfigurationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have specified a retention configuration that does not exist.</p>",
      "exception":true
    },
    "OrderingTimestamp":{"type":"timestamp"},
    "OrganizationAccessDeniedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>No permission to call the EnableAWSServiceAccess API.</p>",
      "exception":true
    },
    "OrganizationAggregationSource":{
      "type":"structure",
      "required":["RoleArn"],
      "members":{
        "RoleArn":{
          "shape":"String",
          "documentation":"<p>ARN of the IAM role used to retreive AWS Organization details associated with the aggregator account.</p>"
        },
        "AwsRegions":{
          "shape":"AggregatorRegionList",
          "documentation":"<p>The source regions being aggregated.</p>"
        },
        "AllAwsRegions":{
          "shape":"Boolean",
          "documentation":"<p>If true, aggregate existing AWS Config regions and future regions.</p>"
        }
      },
      "documentation":"<p>This object contains regions to setup the aggregator and an IAM role to retrieve organization details.</p>"
    },
    "OrganizationAllFeaturesNotEnabledException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The configuration aggregator cannot be created because organization does not have all features enabled.</p>",
      "exception":true
    },
    "Owner":{
      "type":"string",
      "enum":[
        "CUSTOM_LAMBDA",
        "AWS"
      ]
    },
    "PendingAggregationRequest":{
      "type":"structure",
      "members":{
        "RequesterAccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the account requesting to aggregate data.</p>"
        },
        "RequesterAwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The region requesting to aggregate data. </p>"
        }
      },
      "documentation":"<p>An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.</p>"
    },
    "PendingAggregationRequestList":{
      "type":"list",
      "member":{"shape":"PendingAggregationRequest"}
    },
    "PutAggregationAuthorizationRequest":{
      "type":"structure",
      "required":[
        "AuthorizedAccountId",
        "AuthorizedAwsRegion"
      ],
      "members":{
        "AuthorizedAccountId":{
          "shape":"AccountId",
          "documentation":"<p>The 12-digit account ID of the account authorized to aggregate data.</p>"
        },
        "AuthorizedAwsRegion":{
          "shape":"AwsRegion",
          "documentation":"<p>The region authorized to collect aggregated data.</p>"
        }
      }
    },
    "PutAggregationAuthorizationResponse":{
      "type":"structure",
      "members":{
        "AggregationAuthorization":{
          "shape":"AggregationAuthorization",
          "documentation":"<p>Returns an AggregationAuthorization object. </p>"
        }
      }
    },
    "PutConfigRuleRequest":{
      "type":"structure",
      "required":["ConfigRule"],
      "members":{
        "ConfigRule":{
          "shape":"ConfigRule",
          "documentation":"<p>The rule that you want to add to your account.</p>"
        }
      }
    },
    "PutConfigurationAggregatorRequest":{
      "type":"structure",
      "required":["ConfigurationAggregatorName"],
      "members":{
        "ConfigurationAggregatorName":{
          "shape":"ConfigurationAggregatorName",
          "documentation":"<p>The name of the configuration aggregator.</p>"
        },
        "AccountAggregationSources":{
          "shape":"AccountAggregationSourceList",
          "documentation":"<p>A list of AccountAggregationSource object. </p>"
        },
        "OrganizationAggregationSource":{
          "shape":"OrganizationAggregationSource",
          "documentation":"<p>An OrganizationAggregationSource object.</p>"
        }
      }
    },
    "PutConfigurationAggregatorResponse":{
      "type":"structure",
      "members":{
        "ConfigurationAggregator":{
          "shape":"ConfigurationAggregator",
          "documentation":"<p>Returns a ConfigurationAggregator object.</p>"
        }
      }
    },
    "PutConfigurationRecorderRequest":{
      "type":"structure",
      "required":["ConfigurationRecorder"],
      "members":{
        "ConfigurationRecorder":{
          "shape":"ConfigurationRecorder",
          "documentation":"<p>The configuration recorder object that records each configuration change made to the resources.</p>"
        }
      },
      "documentation":"<p>The input for the <a>PutConfigurationRecorder</a> action.</p>"
    },
    "PutDeliveryChannelRequest":{
      "type":"structure",
      "required":["DeliveryChannel"],
      "members":{
        "DeliveryChannel":{
          "shape":"DeliveryChannel",
          "documentation":"<p>The configuration delivery channel object that delivers the configuration information to an Amazon S3 bucket and to an Amazon SNS topic.</p>"
        }
      },
      "documentation":"<p>The input for the <a>PutDeliveryChannel</a> action.</p>"
    },
    "PutEvaluationsRequest":{
      "type":"structure",
      "required":["ResultToken"],
      "members":{
        "Evaluations":{
          "shape":"Evaluations",
          "documentation":"<p>The assessments that the AWS Lambda function performs. Each evaluation identifies an AWS resource and indicates whether it complies with the AWS Config rule that invokes the AWS Lambda function.</p>"
        },
        "ResultToken":{
          "shape":"String",
          "documentation":"<p>An encrypted token that associates an evaluation with an AWS Config rule. Identifies the rule and the event that triggered the evaluation.</p>"
        },
        "TestMode":{
          "shape":"Boolean",
          "documentation":"<p>Use this parameter to specify a test run for <code>PutEvaluations</code>. You can verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.</p> <note> <p>When <code>TestMode</code> is <code>true</code>, <code>PutEvaluations</code> doesn't require a valid value for the <code>ResultToken</code> parameter, but the value cannot be null.</p> </note>"
        }
      },
      "documentation":"<p/>"
    },
    "PutEvaluationsResponse":{
      "type":"structure",
      "members":{
        "FailedEvaluations":{
          "shape":"Evaluations",
          "documentation":"<p>Requests that failed because of a client or server error.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "PutRetentionConfigurationRequest":{
      "type":"structure",
      "required":["RetentionPeriodInDays"],
      "members":{
        "RetentionPeriodInDays":{
          "shape":"RetentionPeriodInDays",
          "documentation":"<p>Number of days AWS Config stores your historical information.</p> <note> <p>Currently, only applicable to the configuration item history.</p> </note>"
        }
      }
    },
    "PutRetentionConfigurationResponse":{
      "type":"structure",
      "members":{
        "RetentionConfiguration":{
          "shape":"RetentionConfiguration",
          "documentation":"<p>Returns a retention configuration object.</p>"
        }
      }
    },
    "RecorderName":{
      "type":"string",
      "max":256,
      "min":1
    },
    "RecorderStatus":{
      "type":"string",
      "enum":[
        "Pending",
        "Success",
        "Failure"
      ]
    },
    "RecordingGroup":{
      "type":"structure",
      "members":{
        "allSupported":{
          "shape":"AllSupported",
          "documentation":"<p>Specifies whether AWS Config records configuration changes for every supported type of regional resource.</p> <p>If you set this option to <code>true</code>, when AWS Config adds support for a new type of regional resource, it starts recording resources of that type automatically.</p> <p>If you set this option to <code>true</code>, you cannot enumerate a list of <code>resourceTypes</code>.</p>"
        },
        "includeGlobalResourceTypes":{
          "shape":"IncludeGlobalResourceTypes",
          "documentation":"<p>Specifies whether AWS Config includes all supported types of global resources (for example, IAM resources) with the resources that it records.</p> <p>Before you can set this option to <code>true</code>, you must set the <code>allSupported</code> option to <code>true</code>.</p> <p>If you set this option to <code>true</code>, when AWS Config adds support for a new type of global resource, it starts recording resources of that type automatically.</p> <p>The configuration details for any global resource are the same in all regions. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources.</p>"
        },
        "resourceTypes":{
          "shape":"ResourceTypeList",
          "documentation":"<p>A comma-separated list that specifies the types of AWS resources for which AWS Config records configuration changes (for example, <code>AWS::EC2::Instance</code> or <code>AWS::CloudTrail::Trail</code>).</p> <p>Before you can set this option to <code>true</code>, you must set the <code>allSupported</code> option to <code>false</code>.</p> <p>If you set this option to <code>true</code>, when AWS Config adds support for a new type of resource, it will not record resources of that type unless you manually add that type to your recording group.</p> <p>For a list of valid <code>resourceTypes</code> values, see the <b>resourceType Value</b> column in <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources\">Supported AWS Resource Types</a>.</p>"
        }
      },
      "documentation":"<p>Specifies the types of AWS resource for which AWS Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, AWS Config records configuration changes for all supported types of regional resources that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have AWS Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize AWS Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources\">Supported Resource Types</a>.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/select-resources.html\">Selecting Which Resources AWS Config Records</a>.</p>"
    },
    "ReevaluateConfigRuleNames":{
      "type":"list",
      "member":{"shape":"StringWithCharLimit64"},
      "max":25,
      "min":1
    },
    "RelatedEvent":{"type":"string"},
    "RelatedEventList":{
      "type":"list",
      "member":{"shape":"RelatedEvent"}
    },
    "Relationship":{
      "type":"structure",
      "members":{
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type of the related resource.</p>"
        },
        "resourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The ID of the related resource (for example, <code>sg-xxxxxx</code>).</p>"
        },
        "resourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The custom name of the related resource, if available.</p>"
        },
        "relationshipName":{
          "shape":"RelationshipName",
          "documentation":"<p>The type of relationship with the related resource.</p>"
        }
      },
      "documentation":"<p>The relationship of the related resource to the main resource.</p>"
    },
    "RelationshipList":{
      "type":"list",
      "member":{"shape":"Relationship"}
    },
    "RelationshipName":{"type":"string"},
    "ResourceCount":{
      "type":"structure",
      "members":{
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type (for example, <code>\"AWS::EC2::Instance\"</code>).</p>"
        },
        "count":{
          "shape":"Long",
          "documentation":"<p>The number of resources.</p>"
        }
      },
      "documentation":"<p>An object that contains the resource type and the number of resources.</p>"
    },
    "ResourceCounts":{
      "type":"list",
      "member":{"shape":"ResourceCount"}
    },
    "ResourceCreationTime":{"type":"timestamp"},
    "ResourceDeletionTime":{"type":"timestamp"},
    "ResourceId":{
      "type":"string",
      "max":768,
      "min":1
    },
    "ResourceIdList":{
      "type":"list",
      "member":{"shape":"ResourceId"}
    },
    "ResourceIdentifier":{
      "type":"structure",
      "members":{
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of resource.</p>"
        },
        "resourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The ID of the resource (for example, <code>sg-xxxxxx</code>).</p>"
        },
        "resourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The custom name of the resource (if available).</p>"
        },
        "resourceDeletionTime":{
          "shape":"ResourceDeletionTime",
          "documentation":"<p>The time that the resource was deleted.</p>"
        }
      },
      "documentation":"<p>The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name.</p>"
    },
    "ResourceIdentifierList":{
      "type":"list",
      "member":{"shape":"ResourceIdentifier"}
    },
    "ResourceInUseException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.</p>",
      "exception":true
    },
    "ResourceKey":{
      "type":"structure",
      "required":[
        "resourceType",
        "resourceId"
      ],
      "members":{
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type.</p>"
        },
        "resourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The ID of the resource (for example., sg-xxxxxx). </p>"
        }
      },
      "documentation":"<p>The details that identify a resource within AWS Config, including the resource type and resource ID.</p>"
    },
    "ResourceKeys":{
      "type":"list",
      "member":{"shape":"ResourceKey"},
      "max":100,
      "min":1
    },
    "ResourceName":{"type":"string"},
    "ResourceNotDiscoveredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have specified a resource that is either unknown or has not been discovered.</p>",
      "exception":true
    },
    "ResourceType":{
      "type":"string",
      "enum":[
        "AWS::EC2::CustomerGateway",
        "AWS::EC2::EIP",
        "AWS::EC2::Host",
        "AWS::EC2::Instance",
        "AWS::EC2::InternetGateway",
        "AWS::EC2::NetworkAcl",
        "AWS::EC2::NetworkInterface",
        "AWS::EC2::RouteTable",
        "AWS::EC2::SecurityGroup",
        "AWS::EC2::Subnet",
        "AWS::CloudTrail::Trail",
        "AWS::EC2::Volume",
        "AWS::EC2::VPC",
        "AWS::EC2::VPNConnection",
        "AWS::EC2::VPNGateway",
        "AWS::IAM::Group",
        "AWS::IAM::Policy",
        "AWS::IAM::Role",
        "AWS::IAM::User",
        "AWS::ACM::Certificate",
        "AWS::RDS::DBInstance",
        "AWS::RDS::DBSubnetGroup",
        "AWS::RDS::DBSecurityGroup",
        "AWS::RDS::DBSnapshot",
        "AWS::RDS::EventSubscription",
        "AWS::ElasticLoadBalancingV2::LoadBalancer",
        "AWS::S3::Bucket",
        "AWS::SSM::ManagedInstanceInventory",
        "AWS::Redshift::Cluster",
        "AWS::Redshift::ClusterSnapshot",
        "AWS::Redshift::ClusterParameterGroup",
        "AWS::Redshift::ClusterSecurityGroup",
        "AWS::Redshift::ClusterSubnetGroup",
        "AWS::Redshift::EventSubscription",
        "AWS::CloudWatch::Alarm",
        "AWS::CloudFormation::Stack",
        "AWS::DynamoDB::Table",
        "AWS::AutoScaling::AutoScalingGroup",
        "AWS::AutoScaling::LaunchConfiguration",
        "AWS::AutoScaling::ScalingPolicy",
        "AWS::AutoScaling::ScheduledAction",
        "AWS::CodeBuild::Project",
        "AWS::WAF::RateBasedRule",
        "AWS::WAF::Rule",
        "AWS::WAF::WebACL",
        "AWS::WAFRegional::RateBasedRule",
        "AWS::WAFRegional::Rule",
        "AWS::WAFRegional::WebACL",
        "AWS::CloudFront::Distribution",
        "AWS::CloudFront::StreamingDistribution",
        "AWS::WAF::RuleGroup",
        "AWS::WAFRegional::RuleGroup",
        "AWS::Lambda::Function",
        "AWS::ElasticBeanstalk::Application",
        "AWS::ElasticBeanstalk::ApplicationVersion",
        "AWS::ElasticBeanstalk::Environment",
        "AWS::ElasticLoadBalancing::LoadBalancer",
        "AWS::XRay::EncryptionConfig"
      ]
    },
    "ResourceTypeList":{
      "type":"list",
      "member":{"shape":"ResourceType"}
    },
    "ResourceTypes":{
      "type":"list",
      "member":{"shape":"StringWithCharLimit256"},
      "max":20,
      "min":0
    },
    "RetentionConfiguration":{
      "type":"structure",
      "required":[
        "Name",
        "RetentionPeriodInDays"
      ],
      "members":{
        "Name":{
          "shape":"RetentionConfigurationName",
          "documentation":"<p>The name of the retention configuration object.</p>"
        },
        "RetentionPeriodInDays":{
          "shape":"RetentionPeriodInDays",
          "documentation":"<p>Number of days AWS Config stores your historical information.</p> <note> <p>Currently, only applicable to the configuration item history.</p> </note>"
        }
      },
      "documentation":"<p>An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config.</p>"
    },
    "RetentionConfigurationList":{
      "type":"list",
      "member":{"shape":"RetentionConfiguration"}
    },
    "RetentionConfigurationName":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"[\\w\\-]+"
    },
    "RetentionConfigurationNameList":{
      "type":"list",
      "member":{"shape":"RetentionConfigurationName"},
      "max":1,
      "min":0
    },
    "RetentionPeriodInDays":{
      "type":"integer",
      "max":2557,
      "min":30
    },
    "RuleLimit":{
      "type":"integer",
      "max":50,
      "min":0
    },
    "Scope":{
      "type":"structure",
      "members":{
        "ComplianceResourceTypes":{
          "shape":"ComplianceResourceTypes",
          "documentation":"<p>The resource types of only those AWS resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for <code>ComplianceResourceId</code>.</p>"
        },
        "TagKey":{
          "shape":"StringWithCharLimit128",
          "documentation":"<p>The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.</p>"
        },
        "TagValue":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. If you specify a value for <code>TagValue</code>, you must also specify a value for <code>TagKey</code>.</p>"
        },
        "ComplianceResourceId":{
          "shape":"BaseResourceId",
          "documentation":"<p>The ID of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for <code>ComplianceResourceTypes</code>.</p>"
        }
      },
      "documentation":"<p>Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.</p>"
    },
    "Source":{
      "type":"structure",
      "required":[
        "Owner",
        "SourceIdentifier"
      ],
      "members":{
        "Owner":{
          "shape":"Owner",
          "documentation":"<p>Indicates whether AWS or the customer owns and manages the AWS Config rule.</p>"
        },
        "SourceIdentifier":{
          "shape":"StringWithCharLimit256",
          "documentation":"<p>For AWS Config managed rules, a predefined identifier from a list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed rule. To reference a managed rule, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html\">Using AWS Managed Config Rules</a>.</p> <p>For custom rules, the identifier is the Amazon Resource Name (ARN) of the rule's AWS Lambda function, such as <code>arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name</code>.</p>"
        },
        "SourceDetails":{
          "shape":"SourceDetails",
          "documentation":"<p>Provides the source and type of the event that causes AWS Config to evaluate your AWS resources.</p>"
        }
      },
      "documentation":"<p>Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources.</p>"
    },
    "SourceDetail":{
      "type":"structure",
      "members":{
        "EventSource":{
          "shape":"EventSource",
          "documentation":"<p>The source of the event, such as an AWS service, that triggers AWS Config to evaluate your AWS resources.</p>"
        },
        "MessageType":{
          "shape":"MessageType",
          "documentation":"<p>The type of notification that triggers AWS Config to run an evaluation for a rule. You can specify the following notification types:</p> <ul> <li> <p> <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change.</p> </li> <li> <p> <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when AWS Config delivers an oversized configuration item. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p> </li> <li> <p> <code>ScheduledNotification</code> - Triggers a periodic evaluation at the frequency specified for <code>MaximumExecutionFrequency</code>.</p> </li> <li> <p> <code>ConfigurationSnapshotDeliveryCompleted</code> - Triggers a periodic evaluation when AWS Config delivers a configuration snapshot.</p> </li> </ul> <p>If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for <code>ConfigurationItemChangeNotification</code> and one for <code>OversizedConfigurationItemChangeNotification</code>.</p>"
        },
        "MaximumExecutionFrequency":{
          "shape":"MaximumExecutionFrequency",
          "documentation":"<p>The frequency at which you want AWS Config to run evaluations for a custom rule with a periodic trigger. If you specify a value for <code>MaximumExecutionFrequency</code>, then <code>MessageType</code> must use the <code>ScheduledNotification</code> value.</p> <note> <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the <code>MaximumExecutionFrequency</code> parameter.</p> <p>Based on the valid value you choose, AWS Config runs evaluations once for each valid value. For example, if you choose <code>Three_Hours</code>, AWS Config runs evaluations once every three hours. In this case, <code>Three_Hours</code> is the frequency of this rule. </p> </note>"
        }
      },
      "documentation":"<p>Provides the source and the message types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules. </p>"
    },
    "SourceDetails":{
      "type":"list",
      "member":{"shape":"SourceDetail"},
      "max":25,
      "min":0
    },
    "StartConfigRulesEvaluationRequest":{
      "type":"structure",
      "members":{
        "ConfigRuleNames":{
          "shape":"ReevaluateConfigRuleNames",
          "documentation":"<p>The list of names of AWS Config rules that you want to run evaluations for.</p>"
        }
      },
      "documentation":"<p/>"
    },
    "StartConfigRulesEvaluationResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output when you start the evaluation for the specified AWS Config rule.</p>"
    },
    "StartConfigurationRecorderRequest":{
      "type":"structure",
      "required":["ConfigurationRecorderName"],
      "members":{
        "ConfigurationRecorderName":{
          "shape":"RecorderName",
          "documentation":"<p>The name of the recorder object that records each configuration change made to the resources.</p>"
        }
      },
      "documentation":"<p>The input for the <a>StartConfigurationRecorder</a> action.</p>"
    },
    "StopConfigurationRecorderRequest":{
      "type":"structure",
      "required":["ConfigurationRecorderName"],
      "members":{
        "ConfigurationRecorderName":{
          "shape":"RecorderName",
          "documentation":"<p>The name of the recorder object that records each configuration change made to the resources.</p>"
        }
      },
      "documentation":"<p>The input for the <a>StopConfigurationRecorder</a> action.</p>"
    },
    "String":{"type":"string"},
    "StringWithCharLimit1024":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "StringWithCharLimit128":{
      "type":"string",
      "max":128,
      "min":1
    },
    "StringWithCharLimit256":{
      "type":"string",
      "max":256,
      "min":1
    },
    "StringWithCharLimit64":{
      "type":"string",
      "max":64,
      "min":1
    },
    "SupplementaryConfiguration":{
      "type":"map",
      "key":{"shape":"SupplementaryConfigurationName"},
      "value":{"shape":"SupplementaryConfigurationValue"}
    },
    "SupplementaryConfigurationName":{"type":"string"},
    "SupplementaryConfigurationValue":{"type":"string"},
    "Tags":{
      "type":"map",
      "key":{"shape":"Name"},
      "value":{"shape":"Value"}
    },
    "ValidationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The requested action is not valid.</p>",
      "exception":true
    },
    "Value":{"type":"string"},
    "Version":{"type":"string"}
  },
  "documentation":"<fullname>AWS Config</fullname> <p>AWS Config provides a way to keep track of the configurations of all the AWS resources associated with your AWS account. You can use AWS Config to get the current and historical configurations of each AWS resource and also to get information about the relationship between the resources. An AWS resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by AWS Config, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources\">Supported AWS Resources</a>.</p> <p>You can access and manage AWS Config through the AWS Management Console, the AWS Command Line Interface (AWS CLI), the AWS Config API, or the AWS SDKs for AWS Config. This reference guide contains documentation for the AWS Config API and the AWS CLI commands that you can use to manage AWS Config. The AWS Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\">Signature Version 4 Signing Process</a>. For detailed information about AWS Config features and their associated actions or commands, as well as how to work with AWS Management Console, see <a href=\"http://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html\">What Is AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>"
}
