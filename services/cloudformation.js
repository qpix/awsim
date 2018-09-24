awsim['cloudformation'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2010-05-15",
    "endpointPrefix":"cloudformation",
    "protocol":"query",
    "serviceFullName":"AWS CloudFormation",
    "serviceId":"CloudFormation",
    "signatureVersion":"v4",
    "uid":"cloudformation-2010-05-15",
    "xmlNamespace":"http://cloudformation.amazonaws.com/doc/2010-05-15/"
  },
  "operations":{
    "CancelUpdateStack":{
      "name":"CancelUpdateStack",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CancelUpdateStackInput"},
      "errors":[
        {"shape":"TokenAlreadyExistsException"}
      ],
      "documentation":"<p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.</p> </note>"
    },
    "ContinueUpdateRollback":{
      "name":"ContinueUpdateRollback",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ContinueUpdateRollbackInput"},
      "output":{
        "shape":"ContinueUpdateRollbackOutput",
        "resultWrapper":"ContinueUpdateRollbackResult"
      },
      "errors":[
        {"shape":"TokenAlreadyExistsException"}
      ],
      "documentation":"<p>For a specified stack that is in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed\"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when AWS CloudFormation cannot roll back all changes after a failed stack update. For example, you might have a stack that is rolling back to an old database instance that was deleted outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>"
    },
    "CreateChangeSet":{
      "name":"CreateChangeSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateChangeSetInput"},
      "output":{
        "shape":"CreateChangeSetOutput",
        "resultWrapper":"CreateChangeSetResult"
      },
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"InsufficientCapabilitiesException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that AWS CloudFormation will create. If you create a change set for an existing stack, AWS CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources AWS CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, AWS CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. AWS CloudFormation doesn't make changes until you execute the change set.</p>"
    },
    "CreateStack":{
      "name":"CreateStack",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateStackInput"},
      "output":{
        "shape":"CreateStackOutput",
        "resultWrapper":"CreateStackResult"
      },
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"AlreadyExistsException"},
        {"shape":"TokenAlreadyExistsException"},
        {"shape":"InsufficientCapabilitiesException"}
      ],
      "documentation":"<p>Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack via the <a>DescribeStacks</a> API.</p>"
    },
    "CreateStackInstances":{
      "name":"CreateStackInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateStackInstancesInput"},
      "output":{
        "shape":"CreateStackInstancesOutput",
        "resultWrapper":"CreateStackInstancesResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"},
        {"shape":"OperationInProgressException"},
        {"shape":"OperationIdAlreadyExistsException"},
        {"shape":"StaleRequestException"},
        {"shape":"InvalidOperationException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates stack instances for the specified accounts, within the specified regions. A stack instance refers to a stack in a specific account and region. <code>Accounts</code> and <code>Regions</code> are required parameters—you must specify at least one account and one region. </p>"
    },
    "CreateStackSet":{
      "name":"CreateStackSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateStackSetInput"},
      "output":{
        "shape":"CreateStackSetOutput",
        "resultWrapper":"CreateStackSetResult"
      },
      "errors":[
        {"shape":"NameAlreadyExistsException"},
        {"shape":"CreatedButModifiedException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a stack set.</p>"
    },
    "DeleteChangeSet":{
      "name":"DeleteChangeSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteChangeSetInput"},
      "output":{
        "shape":"DeleteChangeSetOutput",
        "resultWrapper":"DeleteChangeSetResult"
      },
      "errors":[
        {"shape":"InvalidChangeSetStatusException"}
      ],
      "documentation":"<p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, AWS CloudFormation successfully deleted the change set.</p>"
    },
    "DeleteStack":{
      "name":"DeleteStack",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteStackInput"},
      "errors":[
        {"shape":"TokenAlreadyExistsException"}
      ],
      "documentation":"<p>Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks do not show up in the <a>DescribeStacks</a> API if the deletion has been completed successfully.</p>"
    },
    "DeleteStackInstances":{
      "name":"DeleteStackInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteStackInstancesInput"},
      "output":{
        "shape":"DeleteStackInstancesOutput",
        "resultWrapper":"DeleteStackInstancesResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"},
        {"shape":"OperationInProgressException"},
        {"shape":"OperationIdAlreadyExistsException"},
        {"shape":"StaleRequestException"},
        {"shape":"InvalidOperationException"}
      ],
      "documentation":"<p>Deletes stack instances for the specified accounts, in the specified regions. </p>"
    },
    "DeleteStackSet":{
      "name":"DeleteStackSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteStackSetInput"},
      "output":{
        "shape":"DeleteStackSetOutput",
        "resultWrapper":"DeleteStackSetResult"
      },
      "errors":[
        {"shape":"StackSetNotEmptyException"},
        {"shape":"OperationInProgressException"}
      ],
      "documentation":"<p>Deletes a stack set. Before you can delete a stack set, all of its member stack instances must be deleted. For more information about how to do this, see <a>DeleteStackInstances</a>. </p>"
    },
    "DescribeAccountLimits":{
      "name":"DescribeAccountLimits",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAccountLimitsInput"},
      "output":{
        "shape":"DescribeAccountLimitsOutput",
        "resultWrapper":"DescribeAccountLimitsResult"
      },
      "documentation":"<p>Retrieves your account's AWS CloudFormation limits, such as the maximum number of stacks that you can create in your account.</p>"
    },
    "DescribeChangeSet":{
      "name":"DescribeChangeSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeChangeSetInput"},
      "output":{
        "shape":"DescribeChangeSetOutput",
        "resultWrapper":"DescribeChangeSetResult"
      },
      "errors":[
        {"shape":"ChangeSetNotFoundException"}
      ],
      "documentation":"<p>Returns the inputs for the change set and a list of changes that AWS CloudFormation will make if you execute the change set. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html\">Updating Stacks Using Change Sets</a> in the AWS CloudFormation User Guide.</p>"
    },
    "DescribeStackEvents":{
      "name":"DescribeStackEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStackEventsInput"},
      "output":{
        "shape":"DescribeStackEventsOutput",
        "resultWrapper":"DescribeStackEventsResult"
      },
      "documentation":"<p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html\">Stacks</a> in the AWS CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>"
    },
    "DescribeStackInstance":{
      "name":"DescribeStackInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStackInstanceInput"},
      "output":{
        "shape":"DescribeStackInstanceOutput",
        "resultWrapper":"DescribeStackInstanceResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"},
        {"shape":"StackInstanceNotFoundException"}
      ],
      "documentation":"<p>Returns the stack instance that's associated with the specified stack set, AWS account, and region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>"
    },
    "DescribeStackResource":{
      "name":"DescribeStackResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStackResourceInput"},
      "output":{
        "shape":"DescribeStackResourceOutput",
        "resultWrapper":"DescribeStackResourceResult"
      },
      "documentation":"<p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>"
    },
    "DescribeStackResources":{
      "name":"DescribeStackResources",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStackResourcesInput"},
      "output":{
        "shape":"DescribeStackResourcesOutput",
        "resultWrapper":"DescribeStackResourcesResult"
      },
      "documentation":"<p>Returns AWS resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/\">AWS CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>"
    },
    "DescribeStackSet":{
      "name":"DescribeStackSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStackSetInput"},
      "output":{
        "shape":"DescribeStackSetOutput",
        "resultWrapper":"DescribeStackSetResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"}
      ],
      "documentation":"<p>Returns the description of the specified stack set. </p>"
    },
    "DescribeStackSetOperation":{
      "name":"DescribeStackSetOperation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStackSetOperationInput"},
      "output":{
        "shape":"DescribeStackSetOperationOutput",
        "resultWrapper":"DescribeStackSetOperationResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"},
        {"shape":"OperationNotFoundException"}
      ],
      "documentation":"<p>Returns the description of the specified stack set operation. </p>"
    },
    "DescribeStacks":{
      "name":"DescribeStacks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStacksInput"},
      "output":{
        "shape":"DescribeStacksOutput",
        "resultWrapper":"DescribeStacksResult"
      },
      "documentation":"<p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack does not exist, an <code>AmazonCloudFormationException</code> is returned.</p> </note>"
    },
    "EstimateTemplateCost":{
      "name":"EstimateTemplateCost",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"EstimateTemplateCostInput"},
      "output":{
        "shape":"EstimateTemplateCostOutput",
        "resultWrapper":"EstimateTemplateCostResult"
      },
      "documentation":"<p>Returns the estimated monthly cost of a template. The return value is an AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.</p>"
    },
    "ExecuteChangeSet":{
      "name":"ExecuteChangeSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ExecuteChangeSetInput"},
      "output":{
        "shape":"ExecuteChangeSetOutput",
        "resultWrapper":"ExecuteChangeSetResult"
      },
      "errors":[
        {"shape":"InvalidChangeSetStatusException"},
        {"shape":"ChangeSetNotFoundException"},
        {"shape":"InsufficientCapabilitiesException"},
        {"shape":"TokenAlreadyExistsException"}
      ],
      "documentation":"<p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, AWS CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, AWS CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, AWS CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p>"
    },
    "GetStackPolicy":{
      "name":"GetStackPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetStackPolicyInput"},
      "output":{
        "shape":"GetStackPolicyOutput",
        "resultWrapper":"GetStackPolicyResult"
      },
      "documentation":"<p>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.</p>"
    },
    "GetTemplate":{
      "name":"GetTemplate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTemplateInput"},
      "output":{
        "shape":"GetTemplateOutput",
        "resultWrapper":"GetTemplateResult"
      },
      "errors":[
        {"shape":"ChangeSetNotFoundException"}
      ],
      "documentation":"<p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted.</p> <note> <p> If the template does not exist, a <code>ValidationError</code> is returned. </p> </note>"
    },
    "GetTemplateSummary":{
      "name":"GetTemplateSummary",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetTemplateSummaryInput"},
      "output":{
        "shape":"GetTemplateSummaryOutput",
        "resultWrapper":"GetTemplateSummaryResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"}
      ],
      "documentation":"<p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template does not exist, a <code>ValidationError</code> is returned.</p>"
    },
    "ListChangeSets":{
      "name":"ListChangeSets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListChangeSetsInput"},
      "output":{
        "shape":"ListChangeSetsOutput",
        "resultWrapper":"ListChangeSetsResult"
      },
      "documentation":"<p>Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.</p>"
    },
    "ListExports":{
      "name":"ListExports",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListExportsInput"},
      "output":{
        "shape":"ListExportsOutput",
        "resultWrapper":"ListExportsResult"
      },
      "documentation":"<p>Lists all exported output values in the account and region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html\"> <code>Fn::ImportValue</code> </a> function. </p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html\"> AWS CloudFormation Export Stack Output Values</a>.</p>"
    },
    "ListImports":{
      "name":"ListImports",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListImportsInput"},
      "output":{
        "shape":"ListImportsOutput",
        "resultWrapper":"ListImportsResult"
      },
      "documentation":"<p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>. </p> <p>For more information about importing an exported output value, see the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html\"> <code>Fn::ImportValue</code> </a> function. </p>"
    },
    "ListStackInstances":{
      "name":"ListStackInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListStackInstancesInput"},
      "output":{
        "shape":"ListStackInstancesOutput",
        "resultWrapper":"ListStackInstancesResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"}
      ],
      "documentation":"<p>Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific AWS account name or region.</p>"
    },
    "ListStackResources":{
      "name":"ListStackResources",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListStackResourcesInput"},
      "output":{
        "shape":"ListStackResourcesOutput",
        "resultWrapper":"ListStackResourcesResult"
      },
      "documentation":"<p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>"
    },
    "ListStackSetOperationResults":{
      "name":"ListStackSetOperationResults",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListStackSetOperationResultsInput"},
      "output":{
        "shape":"ListStackSetOperationResultsOutput",
        "resultWrapper":"ListStackSetOperationResultsResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"},
        {"shape":"OperationNotFoundException"}
      ],
      "documentation":"<p>Returns summary information about the results of a stack set operation. </p>"
    },
    "ListStackSetOperations":{
      "name":"ListStackSetOperations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListStackSetOperationsInput"},
      "output":{
        "shape":"ListStackSetOperationsOutput",
        "resultWrapper":"ListStackSetOperationsResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"}
      ],
      "documentation":"<p>Returns summary information about operations performed on a stack set. </p>"
    },
    "ListStackSets":{
      "name":"ListStackSets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListStackSetsInput"},
      "output":{
        "shape":"ListStackSetsOutput",
        "resultWrapper":"ListStackSetsResult"
      },
      "documentation":"<p>Returns summary information about stack sets that are associated with the user.</p>"
    },
    "ListStacks":{
      "name":"ListStacks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListStacksInput"},
      "output":{
        "shape":"ListStacksOutput",
        "resultWrapper":"ListStacksResult"
      },
      "documentation":"<p>Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).</p>"
    },
    "SetStackPolicy":{
      "name":"SetStackPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SetStackPolicyInput"},
      "documentation":"<p>Sets a stack policy for a specified stack.</p>"
    },
    "SignalResource":{
      "name":"SignalResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SignalResourceInput"},
      "documentation":"<p>Sends a signal to the specified resource with a success or failure status. You can use the SignalResource API in conjunction with a creation policy or update policy. AWS CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource API is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.</p>"
    },
    "StopStackSetOperation":{
      "name":"StopStackSetOperation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopStackSetOperationInput"},
      "output":{
        "shape":"StopStackSetOperationOutput",
        "resultWrapper":"StopStackSetOperationResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"},
        {"shape":"OperationNotFoundException"},
        {"shape":"InvalidOperationException"}
      ],
      "documentation":"<p>Stops an in-progress operation on a stack set and its associated stack instances. </p>"
    },
    "UpdateStack":{
      "name":"UpdateStack",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateStackInput"},
      "output":{
        "shape":"UpdateStackOutput",
        "resultWrapper":"UpdateStackResult"
      },
      "errors":[
        {"shape":"InsufficientCapabilitiesException"},
        {"shape":"TokenAlreadyExistsException"}
      ],
      "documentation":"<p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack via the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html\">Updating a Stack</a>.</p>"
    },
    "UpdateStackInstances":{
      "name":"UpdateStackInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateStackInstancesInput"},
      "output":{
        "shape":"UpdateStackInstancesOutput",
        "resultWrapper":"UpdateStackInstancesResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"},
        {"shape":"StackInstanceNotFoundException"},
        {"shape":"OperationInProgressException"},
        {"shape":"OperationIdAlreadyExistsException"},
        {"shape":"StaleRequestException"},
        {"shape":"InvalidOperationException"}
      ],
      "documentation":"<p>Updates the parameter values for stack instances for the specified accounts, within the specified regions. A stack instance refers to a stack in a specific account and region. </p> <p>You can only update stack instances in regions and accounts where they already exist; to create additional stack instances, use <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html\">CreateStackInstances</a>. </p> <p>During stack set updates, any parameters overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html\">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html\">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>"
    },
    "UpdateStackSet":{
      "name":"UpdateStackSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateStackSetInput"},
      "output":{
        "shape":"UpdateStackSetOutput",
        "resultWrapper":"UpdateStackSetResult"
      },
      "errors":[
        {"shape":"StackSetNotFoundException"},
        {"shape":"OperationInProgressException"},
        {"shape":"OperationIdAlreadyExistsException"},
        {"shape":"StaleRequestException"},
        {"shape":"InvalidOperationException"},
        {"shape":"StackInstanceNotFoundException"}
      ],
      "documentation":"<p>Updates the stack set, and associated stack instances in the specified accounts and regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>"
    },
    "UpdateTerminationProtection":{
      "name":"UpdateTerminationProtection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateTerminationProtectionInput"},
      "output":{
        "shape":"UpdateTerminationProtectionOutput",
        "resultWrapper":"UpdateTerminationProtectionResult"
      },
      "documentation":"<p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html\">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p> <p> For <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html\">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack.</p>"
    },
    "ValidateTemplate":{
      "name":"ValidateTemplate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ValidateTemplateInput"},
      "output":{
        "shape":"ValidateTemplateOutput",
        "resultWrapper":"ValidateTemplateResult"
      },
      "documentation":"<p>Validates a specified template. AWS CloudFormation first checks if the template is valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both these checks fail, AWS CloudFormation returns a template validation error.</p>"
    }
  },
  "shapes":{
    "Account":{
      "type":"string",
      "pattern":"[0-9]{12}"
    },
    "AccountGateResult":{
      "type":"structure",
      "members":{
        "Status":{
          "shape":"AccountGateStatus",
          "documentation":"<p>The status of the account gate function.</p> <ul> <li> <p> <code>SUCCEEDED</code>: The account gate function has determined that the account and region passes any requirements for a stack set operation to occur. AWS CloudFormation proceeds with the stack operation in that account and region. </p> </li> <li> <p> <code>FAILED</code>: The account gate function has determined that the account and region does not meet the requirements for a stack set operation to occur. AWS CloudFormation cancels the stack set operation in that account and region, and sets the stack set operation result status for that account and region to <code>FAILED</code>. </p> </li> <li> <p> <code>SKIPPED</code>: AWS CloudFormation has skipped calling the account gate function for this account and region, for one of the following reasons:</p> <ul> <li> <p>An account gate function has not been specified for the account and region. AWS CloudFormation proceeds with the stack set operation in this account and region.</p> </li> <li> <p>The <code>AWSCloudFormationStackSetExecutionRole</code> of the stack set adminstration account lacks permissions to invoke the function. AWS CloudFormation proceeds with the stack set operation in this account and region.</p> </li> <li> <p>Either no action is necessary, or no action is possible, on the stack. AWS CloudFormation skips the stack set operation in this account and region.</p> </li> </ul> </li> </ul>"
        },
        "StatusReason":{
          "shape":"AccountGateStatusReason",
          "documentation":"<p>The reason for the account gate status assigned to this account and region for the stack set operation.</p>"
        }
      },
      "documentation":"<p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and region.</p> <p>For each account and region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and region. CloudFormation invokes the function each time a stack set operation is requested for that account and region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and region, and sets the stack set operation result status for that account and region to <code>FAILED</code>. </p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html\">Configuring a target account gate</a>.</p>"
    },
    "AccountGateStatus":{
      "type":"string",
      "enum":[
        "SUCCEEDED",
        "FAILED",
        "SKIPPED"
      ]
    },
    "AccountGateStatusReason":{"type":"string"},
    "AccountLimit":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"LimitName",
          "documentation":"<p>The name of the account limit. Currently, the only account limit is <code>StackLimit</code>.</p>"
        },
        "Value":{
          "shape":"LimitValue",
          "documentation":"<p>The value that is associated with the account limit name.</p>"
        }
      },
      "documentation":"<p>The AccountLimit data type.</p>"
    },
    "AccountLimitList":{
      "type":"list",
      "member":{"shape":"AccountLimit"}
    },
    "AccountList":{
      "type":"list",
      "member":{"shape":"Account"}
    },
    "AllowedValue":{"type":"string"},
    "AllowedValues":{
      "type":"list",
      "member":{"shape":"AllowedValue"}
    },
    "AlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The resource with the name requested already exists.</p>",
      "error":{
        "code":"AlreadyExistsException",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "Arn":{"type":"string"},
    "CancelUpdateStackInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or the unique stack ID that is associated with the stack.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry <code>CancelUpdateStack</code> requests to ensure that AWS CloudFormation successfully received them.</p>"
        }
      },
      "documentation":"<p>The input for the <a>CancelUpdateStack</a> action.</p>"
    },
    "Capabilities":{
      "type":"list",
      "member":{"shape":"Capability"}
    },
    "CapabilitiesReason":{"type":"string"},
    "Capability":{
      "type":"string",
      "enum":[
        "CAPABILITY_IAM",
        "CAPABILITY_NAMED_IAM"
      ]
    },
    "CausingEntity":{"type":"string"},
    "Change":{
      "type":"structure",
      "members":{
        "Type":{
          "shape":"ChangeType",
          "documentation":"<p>The type of entity that AWS CloudFormation changes. Currently, the only entity type is <code>Resource</code>.</p>"
        },
        "ResourceChange":{
          "shape":"ResourceChange",
          "documentation":"<p>A <code>ResourceChange</code> structure that describes the resource and action that AWS CloudFormation will perform.</p>"
        }
      },
      "documentation":"<p>The <code>Change</code> structure describes the changes AWS CloudFormation will perform if you execute the change set.</p>"
    },
    "ChangeAction":{
      "type":"string",
      "enum":[
        "Add",
        "Modify",
        "Remove"
      ]
    },
    "ChangeSetId":{
      "type":"string",
      "min":1,
      "pattern":"arn:[-a-zA-Z0-9:/]*"
    },
    "ChangeSetName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z][-a-zA-Z0-9]*"
    },
    "ChangeSetNameOrId":{
      "type":"string",
      "max":1600,
      "min":1,
      "pattern":"[a-zA-Z][-a-zA-Z0-9]*|arn:[-a-zA-Z0-9:/]*"
    },
    "ChangeSetNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the <code>ListChangeSets</code> action.</p>",
      "error":{
        "code":"ChangeSetNotFound",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "ChangeSetStatus":{
      "type":"string",
      "enum":[
        "CREATE_PENDING",
        "CREATE_IN_PROGRESS",
        "CREATE_COMPLETE",
        "DELETE_COMPLETE",
        "FAILED"
      ]
    },
    "ChangeSetStatusReason":{"type":"string"},
    "ChangeSetSummaries":{
      "type":"list",
      "member":{"shape":"ChangeSetSummary"}
    },
    "ChangeSetSummary":{
      "type":"structure",
      "members":{
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>The ID of the stack with which the change set is associated.</p>"
        },
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name of the stack with which the change set is associated.</p>"
        },
        "ChangeSetId":{
          "shape":"ChangeSetId",
          "documentation":"<p>The ID of the change set.</p>"
        },
        "ChangeSetName":{
          "shape":"ChangeSetName",
          "documentation":"<p>The name of the change set.</p>"
        },
        "ExecutionStatus":{
          "shape":"ExecutionStatus",
          "documentation":"<p>If the change set execution status is <code>AVAILABLE</code>, you can execute the change set. If you can’t execute the change set, the status indicates why. For example, a change set might be in an <code>UNAVAILABLE</code> state because AWS CloudFormation is still creating it or in an <code>OBSOLETE</code> state because the stack was already updated.</p>"
        },
        "Status":{
          "shape":"ChangeSetStatus",
          "documentation":"<p>The state of the change set, such as <code>CREATE_IN_PROGRESS</code>, <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>"
        },
        "StatusReason":{
          "shape":"ChangeSetStatusReason",
          "documentation":"<p>A description of the change set's status. For example, if your change set is in the <code>FAILED</code> state, AWS CloudFormation shows the error message.</p>"
        },
        "CreationTime":{
          "shape":"CreationTime",
          "documentation":"<p>The start time when the change set was created, in UTC.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>Descriptive information about the change set.</p>"
        }
      },
      "documentation":"<p>The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated.</p>"
    },
    "ChangeSetType":{
      "type":"string",
      "enum":[
        "CREATE",
        "UPDATE"
      ]
    },
    "ChangeSource":{
      "type":"string",
      "enum":[
        "ResourceReference",
        "ParameterReference",
        "ResourceAttribute",
        "DirectModification",
        "Automatic"
      ]
    },
    "ChangeType":{
      "type":"string",
      "enum":["Resource"]
    },
    "Changes":{
      "type":"list",
      "member":{"shape":"Change"}
    },
    "ClientRequestToken":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9][-a-zA-Z0-9]*"
    },
    "ClientToken":{
      "type":"string",
      "max":128,
      "min":1
    },
    "ContinueUpdateRollbackInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>The name or the unique ID of the stack that you want to continue rolling back.</p> <note> <p>Don't specify the name of a nested stack (a stack that was created by using the <code>AWS::CloudFormation::Stack</code> resource). Instead, use this operation on the parent stack (the stack that contains the <code>AWS::CloudFormation::Stack</code> resource).</p> </note>"
        },
        "RoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to roll back the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>"
        },
        "ResourcesToSkip":{
          "shape":"ResourcesToSkip",
          "documentation":"<p>A list of the logical IDs of the resources that AWS CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the <code>UPDATE_FAILED</code> state because a rollback failed. You can't specify resources that are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because an update was cancelled. To check why a resource update failed, use the <a>DescribeStackResources</a> action, and view the resource status reason. </p> <important> <p>Specify this property to skip rolling back resources that AWS CloudFormation can't successfully roll back. We recommend that you <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed\"> troubleshoot</a> resources before skipping them. AWS CloudFormation sets the status of the specified resources to <code>UPDATE_COMPLETE</code> and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable. </p> </important> <p>Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources. </p> <p>To skip resources that are part of nested stacks, use the following format: <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of a stack resource (<code>Type: AWS::CloudFormation::Stack</code>) in the <code>ResourcesToSkip</code> list, then its corresponding embedded stack must be in one of the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>, or <code>DELETE_FAILED</code>. </p> <note> <p>Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks\">Using ResourcesToSkip to recover a nested stacks hierarchy</a>. </p> </note>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to continue the rollback to a stack with the same name. You might retry <code>ContinueUpdateRollback</code> requests to ensure that AWS CloudFormation successfully received them.</p>"
        }
      },
      "documentation":"<p>The input for the <a>ContinueUpdateRollback</a> action.</p>"
    },
    "ContinueUpdateRollbackOutput":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output for a <a>ContinueUpdateRollback</a> action.</p>"
    },
    "CreateChangeSetInput":{
      "type":"structure",
      "required":[
        "StackName",
        "ChangeSetName"
      ],
      "members":{
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>The name or the unique ID of the stack for which you are creating a change set. AWS CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.</p>"
        },
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. AWS CloudFormation generates the change set by comparing this template with the template of the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>"
        },
        "TemplateURL":{
          "shape":"TemplateURL",
          "documentation":"<p>The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that is located in an S3 bucket. AWS CloudFormation generates the change set by comparing this template with the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>"
        },
        "UsePreviousTemplate":{
          "shape":"UsePreviousTemplate",
          "documentation":"<p>Whether to reuse the template that is associated with the stack to create the change set.</p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>A list of <code>Parameter</code> structures that specify input parameters for the change set. For more information, see the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html\">Parameter</a> data type.</p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>A list of values that you must specify before AWS CloudFormation can update certain stacks. Some stack templates might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter.</p> <p>The only valid values are <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>. The following resources require you to specify this parameter: <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html\"> AWS::IAM::AccessKey</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html\"> AWS::IAM::Group</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html\"> AWS::IAM::InstanceProfile</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html\"> AWS::IAM::Policy</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html\"> AWS::IAM::Role</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html\"> AWS::IAM::User</a>, and <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html\"> AWS::IAM::UserToGroupAddition</a>. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <p>If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify <code>CAPABILITY_NAMED_IAM</code>. If you don't specify this parameter, this action returns an <code>InsufficientCapabilities</code> error.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities\">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p>"
        },
        "ResourceTypes":{
          "shape":"ResourceTypes",
          "documentation":"<p>The template resource types that you have permissions to work with if you execute this change set, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for condition keys in IAM policies for AWS CloudFormation. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html\">Controlling Access with AWS Identity and Access Management</a> in the AWS CloudFormation User Guide.</p>"
        },
        "RoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes when executing the change set. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>"
        },
        "RollbackConfiguration":{
          "shape":"RollbackConfiguration",
          "documentation":"<p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>"
        },
        "NotificationARNs":{
          "shape":"NotificationARNs",
          "documentation":"<p>The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that AWS CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.</p>"
        },
        "ChangeSetName":{
          "shape":"ChangeSetName",
          "documentation":"<p>The name of the change set. The name must be unique among all change sets that are associated with the specified stack.</p> <p>A change set name can contain only alphanumeric, case sensitive characters and hyphens. It must start with an alphabetic character and cannot exceed 128 characters.</p>"
        },
        "ClientToken":{
          "shape":"ClientToken",
          "documentation":"<p>A unique identifier for this <code>CreateChangeSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another change set with the same name. You might retry <code>CreateChangeSet</code> requests to ensure that AWS CloudFormation successfully received them.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>A description to help you identify this change set.</p>"
        },
        "ChangeSetType":{
          "shape":"ChangeSetType",
          "documentation":"<p>The type of change set operation. To create a change set for a new stack, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code>.</p> <p>If you create a change set for a new stack, AWS Cloudformation creates a stack with a unique stack ID, but no template or resources. The stack will be in the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995\"> <code>REVIEW_IN_PROGRESS</code> </a> state until you execute the change set.</p> <p>By default, AWS CloudFormation specifies <code>UPDATE</code>. You can't use the <code>UPDATE</code> type to create a change set for a new stack or the <code>CREATE</code> type to create a change set for an existing stack.</p>"
        }
      },
      "documentation":"<p>The input for the <a>CreateChangeSet</a> action.</p>"
    },
    "CreateChangeSetOutput":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"ChangeSetId",
          "documentation":"<p>The Amazon Resource Name (ARN) of the change set.</p>"
        },
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>The unique ID of the stack.</p>"
        }
      },
      "documentation":"<p>The output for the <a>CreateChangeSet</a> action.</p>"
    },
    "CreateStackInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name that is associated with the stack. The name must be unique in the region in which you are creating the stack.</p> <note> <p>A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.</p> </note>"
        },
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>"
        },
        "TemplateURL":{
          "shape":"TemplateURL",
          "documentation":"<p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html\">Parameter</a> data type.</p>"
        },
        "DisableRollback":{
          "shape":"DisableRollback",
          "documentation":"<p>Set to <code>true</code> to disable rollback of the stack if stack creation failed. You can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not both.</p> <p>Default: <code>false</code> </p>"
        },
        "RollbackConfiguration":{
          "shape":"RollbackConfiguration",
          "documentation":"<p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>"
        },
        "TimeoutInMinutes":{
          "shape":"TimeoutMinutes",
          "documentation":"<p>The amount of time that can pass before the stack status becomes CREATE_FAILED; if <code>DisableRollback</code> is not set or is set to <code>false</code>, the stack will be rolled back.</p>"
        },
        "NotificationARNs":{
          "shape":"NotificationARNs",
          "documentation":"<p>The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the SNS console or your Command Line Interface (CLI).</p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>A list of values that you must specify before AWS CloudFormation can create certain stacks. Some stack templates might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter.</p> <p>The only valid values are <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>. The following resources require you to specify this parameter: <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html\"> AWS::IAM::AccessKey</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html\"> AWS::IAM::Group</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html\"> AWS::IAM::InstanceProfile</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html\"> AWS::IAM::Policy</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html\"> AWS::IAM::Role</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html\"> AWS::IAM::User</a>, and <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html\"> AWS::IAM::UserToGroupAddition</a>. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <p>If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify <code>CAPABILITY_NAMED_IAM</code>. If you don't specify this parameter, this action returns an <code>InsufficientCapabilities</code> error.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities\">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p>"
        },
        "ResourceTypes":{
          "shape":"ResourceTypes",
          "documentation":"<p>The template resource types that you have permissions to work with for this create stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>. Use the following syntax to describe template resource types: <code>AWS::*</code> (for all AWS resource), <code>Custom::*</code> (for all custom resources), <code>Custom::<i>logical_ID</i> </code> (for a specific custom resource), <code>AWS::<i>service_name</i>::*</code> (for all resources of a particular AWS service), and <code>AWS::<i>service_name</i>::<i>resource_logical_ID</i> </code> (for a specific AWS resource).</p> <p>If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html\">Controlling Access with AWS Identity and Access Management</a>.</p>"
        },
        "RoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to create the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>"
        },
        "OnFailure":{
          "shape":"OnFailure",
          "documentation":"<p>Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either <code>OnFailure</code> or <code>DisableRollback</code>, but not both.</p> <p>Default: <code>ROLLBACK</code> </p>"
        },
        "StackPolicyBody":{
          "shape":"StackPolicyBody",
          "documentation":"<p>Structure containing the stack policy body. For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html\"> Prevent Updates to Stack Resources</a> in the <i>AWS CloudFormation User Guide</i>. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p>"
        },
        "StackPolicyURL":{
          "shape":"StackPolicyURL",
          "documentation":"<p>Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique identifier for this <code>CreateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create a stack with the same name. You might retry <code>CreateStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>"
        },
        "EnableTerminationProtection":{
          "shape":"EnableTerminationProtection",
          "documentation":"<p>Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html\">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>. Termination protection is disabled on stacks by default. </p> <p> For <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html\">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack.</p>"
        }
      },
      "documentation":"<p>The input for <a>CreateStack</a> action.</p>"
    },
    "CreateStackInstancesInput":{
      "type":"structure",
      "required":[
        "StackSetName",
        "Accounts",
        "Regions"
      ],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set that you want to create stack instances from.</p>"
        },
        "Accounts":{
          "shape":"AccountList",
          "documentation":"<p>The names of one or more AWS accounts that you want to create stack instances in the specified region(s) for.</p>"
        },
        "Regions":{
          "shape":"RegionList",
          "documentation":"<p>The names of one or more regions where you want to create stack instances using the specified AWS account(s). </p>"
        },
        "ParameterOverrides":{
          "shape":"Parameters",
          "documentation":"<p>A list of stack set parameters whose values you want to override in the selected stack instances.</p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave a parameter set to its present value, you can do one of the following:</p> <ul> <li> <p>Do not include the parameter in the list.</p> </li> <li> <p>Include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You cannot specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> </ul> </li> <li> <p>To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.</p> </li> <li> <p>To leave all parameters set to their present values, do not specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html\">UpdateStackSet</a> to update the stack set template.</p>"
        },
        "OperationPreferences":{
          "shape":"StackSetOperationPreferences",
          "documentation":"<p>Preferences for how AWS CloudFormation performs this stack set operation.</p>"
        },
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique identifier for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>",
          "idempotencyToken":true
        }
      }
    },
    "CreateStackInstancesOutput":{
      "type":"structure",
      "members":{
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique identifier for this stack set operation.</p>"
        }
      }
    },
    "CreateStackOutput":{
      "type":"structure",
      "members":{
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>Unique identifier of the stack.</p>"
        }
      },
      "documentation":"<p>The output for a <a>CreateStack</a> action.</p>"
    },
    "CreateStackSetInput":{
      "type":"structure",
      "required":["StackSetName"],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name to associate with the stack set. The name must be unique in the region where you create your stack set.</p> <note> <p>A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters.</p> </note>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>A description of the stack set. You can use the description to identify the stack set's purpose or other important information.</p>"
        },
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>"
        },
        "TemplateURL":{
          "shape":"TemplateURL",
          "documentation":"<p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>The input parameters for the stack set template. </p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>A list of values that you must specify before AWS CloudFormation can create certain stack sets. Some stack set templates might include resources that can affect permissions in your AWS account—for example, by creating new AWS Identity and Access Management (IAM) users. For those stack sets, you must explicitly acknowledge their capabilities by specifying this parameter.</p> <p>The only valid values are CAPABILITY_IAM and CAPABILITY_NAMED_IAM. The following resources require you to specify this parameter: </p> <ul> <li> <p>AWS::IAM::AccessKey</p> </li> <li> <p>AWS::IAM::Group</p> </li> <li> <p>AWS::IAM::InstanceProfile</p> </li> <li> <p>AWS::IAM::Policy</p> </li> <li> <p>AWS::IAM::Role</p> </li> <li> <p>AWS::IAM::User</p> </li> <li> <p>AWS::IAM::UserToGroupAddition</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions that are associated with them and edit their permissions if necessary.</p> <p>If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify this parameter, this action returns an <code>InsufficientCapabilities</code> error.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities\">Acknowledging IAM Resources in AWS CloudFormation Templates.</a> </p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.</p> <p>If you specify tags as part of a <code>CreateStackSet</code> action, AWS CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire <code>CreateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not created.</p>"
        },
        "AdministrationRoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. </p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html\">Prerequisites: Granting Permissions for Stack Set Operations</a> in the <i>AWS CloudFormation User Guide</i>.</p>"
        },
        "ExecutionRoleName":{
          "shape":"ExecutionRoleName",
          "documentation":"<p>The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets. </p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another stack set with the same name. You might retry <code>CreateStackSet</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p>",
          "idempotencyToken":true
        }
      }
    },
    "CreateStackSetOutput":{
      "type":"structure",
      "members":{
        "StackSetId":{
          "shape":"StackSetId",
          "documentation":"<p>The ID of the stack set that you're creating.</p>"
        }
      }
    },
    "CreatedButModifiedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified resource exists, but has been changed.</p>",
      "error":{
        "code":"CreatedButModifiedException",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true
    },
    "CreationTime":{"type":"timestamp"},
    "DeleteChangeSetInput":{
      "type":"structure",
      "required":["ChangeSetName"],
      "members":{
        "ChangeSetName":{
          "shape":"ChangeSetNameOrId",
          "documentation":"<p>The name or Amazon Resource Name (ARN) of the change set that you want to delete.</p>"
        },
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>If you specified the name of a change set to delete, specify the stack name or ID (ARN) that is associated with it.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DeleteChangeSet</a> action.</p>"
    },
    "DeleteChangeSetOutput":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output for the <a>DeleteChangeSet</a> action.</p>"
    },
    "DeleteStackInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or the unique stack ID that is associated with the stack.</p>"
        },
        "RetainResources":{
          "shape":"RetainResources",
          "documentation":"<p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, AWS CloudFormation deletes the stack but does not delete the retained resources.</p> <p>Retaining resources is useful when you cannot delete a resource, such as a non-empty S3 bucket, but you want to delete the stack.</p>"
        },
        "RoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to delete the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry <code>DeleteStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>"
        }
      },
      "documentation":"<p>The input for <a>DeleteStack</a> action.</p>"
    },
    "DeleteStackInstancesInput":{
      "type":"structure",
      "required":[
        "StackSetName",
        "Accounts",
        "Regions",
        "RetainStacks"
      ],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set that you want to delete stack instances for.</p>"
        },
        "Accounts":{
          "shape":"AccountList",
          "documentation":"<p>The names of the AWS accounts that you want to delete stack instances for.</p>"
        },
        "Regions":{
          "shape":"RegionList",
          "documentation":"<p>The regions where you want to delete stack set instances. </p>"
        },
        "OperationPreferences":{
          "shape":"StackSetOperationPreferences",
          "documentation":"<p>Preferences for how AWS CloudFormation performs this stack set operation.</p>"
        },
        "RetainStacks":{
          "shape":"RetainStacks",
          "documentation":"<p>Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options\">Stack set operation options</a>.</p>"
        },
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique identifier for this stack set operation. </p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>",
          "idempotencyToken":true
        }
      }
    },
    "DeleteStackInstancesOutput":{
      "type":"structure",
      "members":{
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique identifier for this stack set operation.</p>"
        }
      }
    },
    "DeleteStackSetInput":{
      "type":"structure",
      "required":["StackSetName"],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set that you're deleting. You can obtain this value by running <a>ListStackSets</a>.</p>"
        }
      }
    },
    "DeleteStackSetOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeletionTime":{"type":"timestamp"},
    "DescribeAccountLimitsInput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string that identifies the next page of limits that you want to retrieve.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DescribeAccountLimits</a> action.</p>"
    },
    "DescribeAccountLimitsOutput":{
      "type":"structure",
      "members":{
        "AccountLimits":{
          "shape":"AccountLimitList",
          "documentation":"<p>An account limit structure that contain a list of AWS CloudFormation account limits and their values.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the output exceeds 1 MB in size, a string that identifies the next page of limits. If no additional page exists, this value is null.</p>"
        }
      },
      "documentation":"<p>The output for the <a>DescribeAccountLimits</a> action.</p>"
    },
    "DescribeChangeSetInput":{
      "type":"structure",
      "required":["ChangeSetName"],
      "members":{
        "ChangeSetName":{
          "shape":"ChangeSetNameOrId",
          "documentation":"<p>The name or Amazon Resource Name (ARN) of the change set that you want to describe.</p>"
        },
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string (provided by the <a>DescribeChangeSet</a> response output) that identifies the next page of information that you want to retrieve.</p>"
        }
      },
      "documentation":"<p>The input for the <a>DescribeChangeSet</a> action.</p>"
    },
    "DescribeChangeSetOutput":{
      "type":"structure",
      "members":{
        "ChangeSetName":{
          "shape":"ChangeSetName",
          "documentation":"<p>The name of the change set.</p>"
        },
        "ChangeSetId":{
          "shape":"ChangeSetId",
          "documentation":"<p>The ARN of the change set.</p>"
        },
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>The ARN of the stack that is associated with the change set.</p>"
        },
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name of the stack that is associated with the change set.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>Information about the change set.</p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>A list of <code>Parameter</code> structures that describes the input parameters and their values used to create the change set. For more information, see the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html\">Parameter</a> data type.</p>"
        },
        "CreationTime":{
          "shape":"CreationTime",
          "documentation":"<p>The start time when the change set was created, in UTC.</p>"
        },
        "ExecutionStatus":{
          "shape":"ExecutionStatus",
          "documentation":"<p>If the change set execution status is <code>AVAILABLE</code>, you can execute the change set. If you can’t execute the change set, the status indicates why. For example, a change set might be in an <code>UNAVAILABLE</code> state because AWS CloudFormation is still creating it or in an <code>OBSOLETE</code> state because the stack was already updated.</p>"
        },
        "Status":{
          "shape":"ChangeSetStatus",
          "documentation":"<p>The current status of the change set, such as <code>CREATE_IN_PROGRESS</code>, <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>"
        },
        "StatusReason":{
          "shape":"ChangeSetStatusReason",
          "documentation":"<p>A description of the change set's status. For example, if your attempt to create a change set failed, AWS CloudFormation shows the error message.</p>"
        },
        "NotificationARNs":{
          "shape":"NotificationARNs",
          "documentation":"<p>The ARNs of the Amazon Simple Notification Service (Amazon SNS) topics that will be associated with the stack if you execute the change set.</p>"
        },
        "RollbackConfiguration":{
          "shape":"RollbackConfiguration",
          "documentation":"<p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>If you execute the change set, the list of capabilities that were explicitly acknowledged when the change set was created.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>If you execute the change set, the tags that will be associated with the stack.</p>"
        },
        "Changes":{
          "shape":"Changes",
          "documentation":"<p>A list of <code>Change</code> structures that describes the resources AWS CloudFormation changes if you execute the change set.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the output exceeds 1 MB, a string that identifies the next page of changes. If there is no additional page, this value is null.</p>"
        }
      },
      "documentation":"<p>The output for the <a>DescribeChangeSet</a> action.</p>"
    },
    "DescribeStackEventsInput":{
      "type":"structure",
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string that identifies the next page of events that you want to retrieve.</p>"
        }
      },
      "documentation":"<p>The input for <a>DescribeStackEvents</a> action.</p>"
    },
    "DescribeStackEventsOutput":{
      "type":"structure",
      "members":{
        "StackEvents":{
          "shape":"StackEvents",
          "documentation":"<p>A list of <code>StackEvents</code> structures.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the output exceeds 1 MB in size, a string that identifies the next page of events. If no additional page exists, this value is null.</p>"
        }
      },
      "documentation":"<p>The output for a <a>DescribeStackEvents</a> action.</p>"
    },
    "DescribeStackInstanceInput":{
      "type":"structure",
      "required":[
        "StackSetName",
        "StackInstanceAccount",
        "StackInstanceRegion"
      ],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or the unique stack ID of the stack set that you want to get stack instance information for.</p>"
        },
        "StackInstanceAccount":{
          "shape":"Account",
          "documentation":"<p>The ID of an AWS account that's associated with this stack instance.</p>"
        },
        "StackInstanceRegion":{
          "shape":"Region",
          "documentation":"<p>The name of a region that's associated with this stack instance.</p>"
        }
      }
    },
    "DescribeStackInstanceOutput":{
      "type":"structure",
      "members":{
        "StackInstance":{
          "shape":"StackInstance",
          "documentation":"<p>The stack instance that matches the specified request parameters.</p>"
        }
      }
    },
    "DescribeStackResourceInput":{
      "type":"structure",
      "required":[
        "StackName",
        "LogicalResourceId"
      ],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>"
        },
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>"
        }
      },
      "documentation":"<p>The input for <a>DescribeStackResource</a> action.</p>"
    },
    "DescribeStackResourceOutput":{
      "type":"structure",
      "members":{
        "StackResourceDetail":{
          "shape":"StackResourceDetail",
          "documentation":"<p>A <code>StackResourceDetail</code> structure containing the description of the specified resource in the specified stack.</p>"
        }
      },
      "documentation":"<p>The output for a <a>DescribeStackResource</a> action.</p>"
    },
    "DescribeStackResourcesInput":{
      "type":"structure",
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p> <p>Required: Conditional. If you do not specify <code>StackName</code>, you must specify <code>PhysicalResourceId</code>.</p>"
        },
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>"
        },
        "PhysicalResourceId":{
          "shape":"PhysicalResourceId",
          "documentation":"<p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation.</p> <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance, <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack the instance belongs to and what other resources are part of the stack.</p> <p>Required: Conditional. If you do not specify <code>PhysicalResourceId</code>, you must specify <code>StackName</code>.</p> <p>Default: There is no default value.</p>"
        }
      },
      "documentation":"<p>The input for <a>DescribeStackResources</a> action.</p>"
    },
    "DescribeStackResourcesOutput":{
      "type":"structure",
      "members":{
        "StackResources":{
          "shape":"StackResources",
          "documentation":"<p>A list of <code>StackResource</code> structures.</p>"
        }
      },
      "documentation":"<p>The output for a <a>DescribeStackResources</a> action.</p>"
    },
    "DescribeStackSetInput":{
      "type":"structure",
      "required":["StackSetName"],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set whose description you want.</p>"
        }
      }
    },
    "DescribeStackSetOperationInput":{
      "type":"structure",
      "required":[
        "StackSetName",
        "OperationId"
      ],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or the unique stack ID of the stack set for the stack operation.</p>"
        },
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique ID of the stack set operation. </p>"
        }
      }
    },
    "DescribeStackSetOperationOutput":{
      "type":"structure",
      "members":{
        "StackSetOperation":{
          "shape":"StackSetOperation",
          "documentation":"<p>The specified stack set operation.</p>"
        }
      }
    },
    "DescribeStackSetOutput":{
      "type":"structure",
      "members":{
        "StackSet":{
          "shape":"StackSet",
          "documentation":"<p>The specified stack set.</p>"
        }
      }
    },
    "DescribeStacksInput":{
      "type":"structure",
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string that identifies the next page of stacks that you want to retrieve.</p>"
        }
      },
      "documentation":"<p>The input for <a>DescribeStacks</a> action.</p>"
    },
    "DescribeStacksOutput":{
      "type":"structure",
      "members":{
        "Stacks":{
          "shape":"Stacks",
          "documentation":"<p>A list of stack structures.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page exists, this value is null.</p>"
        }
      },
      "documentation":"<p>The output for a <a>DescribeStacks</a> action.</p>"
    },
    "Description":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "DisableRollback":{"type":"boolean"},
    "EnableTerminationProtection":{"type":"boolean"},
    "EstimateTemplateCostInput":{
      "type":"structure",
      "members":{
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p> <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only <code>TemplateBody</code> is used.</p>"
        },
        "TemplateURL":{
          "shape":"TemplateURL",
          "documentation":"<p>Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket. For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>A list of <code>Parameter</code> structures that specify input parameters.</p>"
        }
      },
      "documentation":"<p>The input for an <a>EstimateTemplateCost</a> action.</p>"
    },
    "EstimateTemplateCostOutput":{
      "type":"structure",
      "members":{
        "Url":{
          "shape":"Url",
          "documentation":"<p>An AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.</p>"
        }
      },
      "documentation":"<p>The output for a <a>EstimateTemplateCost</a> action.</p>"
    },
    "EvaluationType":{
      "type":"string",
      "enum":[
        "Static",
        "Dynamic"
      ]
    },
    "EventId":{"type":"string"},
    "ExecuteChangeSetInput":{
      "type":"structure",
      "required":["ChangeSetName"],
      "members":{
        "ChangeSetName":{
          "shape":"ChangeSetNameOrId",
          "documentation":"<p>The name or ARN of the change set that you want use to update the specified stack.</p>"
        },
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>If you specified the name of a change set, specify the stack name or ID (ARN) that is associated with the change set you want to execute.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry <code>ExecuteChangeSet</code> requests to ensure that AWS CloudFormation successfully received them.</p>"
        }
      },
      "documentation":"<p>The input for the <a>ExecuteChangeSet</a> action.</p>"
    },
    "ExecuteChangeSetOutput":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The output for the <a>ExecuteChangeSet</a> action.</p>"
    },
    "ExecutionRoleName":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"[a-zA-Z_0-9+=,.@-]+"
    },
    "ExecutionStatus":{
      "type":"string",
      "enum":[
        "UNAVAILABLE",
        "AVAILABLE",
        "EXECUTE_IN_PROGRESS",
        "EXECUTE_COMPLETE",
        "EXECUTE_FAILED",
        "OBSOLETE"
      ]
    },
    "Export":{
      "type":"structure",
      "members":{
        "ExportingStackId":{
          "shape":"StackId",
          "documentation":"<p>The stack that contains the exported output name and value.</p>"
        },
        "Name":{
          "shape":"ExportName",
          "documentation":"<p>The name of exported output value. Use this name and the <code>Fn::ImportValue</code> function to import the associated value into other stacks. The name is defined in the <code>Export</code> field in the associated stack's <code>Outputs</code> section.</p>"
        },
        "Value":{
          "shape":"ExportValue",
          "documentation":"<p>The value of the exported output, such as a resource physical ID. This value is defined in the <code>Export</code> field in the associated stack's <code>Outputs</code> section.</p>"
        }
      },
      "documentation":"<p>The <code>Export</code> structure describes the exported output values for a stack.</p>"
    },
    "ExportName":{"type":"string"},
    "ExportValue":{"type":"string"},
    "Exports":{
      "type":"list",
      "member":{"shape":"Export"}
    },
    "FailureToleranceCount":{
      "type":"integer",
      "min":0
    },
    "FailureTolerancePercentage":{
      "type":"integer",
      "max":100,
      "min":0
    },
    "GetStackPolicyInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or unique stack ID that is associated with the stack whose policy you want to get.</p>"
        }
      },
      "documentation":"<p>The input for the <a>GetStackPolicy</a> action.</p>"
    },
    "GetStackPolicyOutput":{
      "type":"structure",
      "members":{
        "StackPolicyBody":{
          "shape":"StackPolicyBody",
          "documentation":"<p>Structure containing the stack policy body. (For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html\"> Prevent Updates to Stack Resources</a> in the AWS CloudFormation User Guide.)</p>"
        }
      },
      "documentation":"<p>The output for the <a>GetStackPolicy</a> action.</p>"
    },
    "GetTemplateInput":{
      "type":"structure",
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>"
        },
        "ChangeSetName":{
          "shape":"ChangeSetNameOrId",
          "documentation":"<p>The name or Amazon Resource Name (ARN) of a change set for which AWS CloudFormation returns the associated template. If you specify a name, you must also specify the <code>StackName</code>.</p>"
        },
        "TemplateStage":{
          "shape":"TemplateStage",
          "documentation":"<p>For templates that include transforms, the stage of the template that AWS CloudFormation returns. To get the user-submitted template, specify <code>Original</code>. To get the template after AWS CloudFormation has processed all transforms, specify <code>Processed</code>. </p> <p>If the template doesn't include transforms, <code>Original</code> and <code>Processed</code> return the same template. By default, AWS CloudFormation specifies <code>Original</code>. </p>"
        }
      },
      "documentation":"<p>The input for a <a>GetTemplate</a> action.</p>"
    },
    "GetTemplateOutput":{
      "type":"structure",
      "members":{
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>Structure containing the template body. (For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p> <p>AWS CloudFormation returns the same template that was used when the stack was created.</p>"
        },
        "StagesAvailable":{
          "shape":"StageList",
          "documentation":"<p>The stage of the template that you can retrieve. For stacks, the <code>Original</code> and <code>Processed</code> templates are always available. For change sets, the <code>Original</code> template is always available. After AWS CloudFormation finishes creating the change set, the <code>Processed</code> template becomes available.</p>"
        }
      },
      "documentation":"<p>The output for <a>GetTemplate</a> action.</p>"
    },
    "GetTemplateSummaryInput":{
      "type":"structure",
      "members":{
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information about templates, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>"
        },
        "TemplateURL":{
          "shape":"TemplateURL",
          "documentation":"<p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information about templates, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>"
        },
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>The name or the stack ID that is associated with the stack, which are not always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>"
        },
        "StackSetName":{
          "shape":"StackSetNameOrId",
          "documentation":"<p>The name or unique ID of the stack set from which the stack was created.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>"
        }
      },
      "documentation":"<p>The input for the <a>GetTemplateSummary</a> action.</p>"
    },
    "GetTemplateSummaryOutput":{
      "type":"structure",
      "members":{
        "Parameters":{
          "shape":"ParameterDeclarations",
          "documentation":"<p>A list of parameter declarations that describe various properties for each parameter.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The value that is defined in the <code>Description</code> property of the template.</p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>The capabilities found within the template. If your template contains IAM resources, you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use the <a>CreateStack</a> or <a>UpdateStack</a> actions with your template; otherwise, those actions return an InsufficientCapabilities error.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities\">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p>"
        },
        "CapabilitiesReason":{
          "shape":"CapabilitiesReason",
          "documentation":"<p>The list of resources that generated the values in the <code>Capabilities</code> response element.</p>"
        },
        "ResourceTypes":{
          "shape":"ResourceTypes",
          "documentation":"<p>A list of all the template resource types that are defined in the template, such as <code>AWS::EC2::Instance</code>, <code>AWS::Dynamo::Table</code>, and <code>Custom::MyCustomInstance</code>.</p>"
        },
        "Version":{
          "shape":"Version",
          "documentation":"<p>The AWS template format version, which identifies the capabilities of the template.</p>"
        },
        "Metadata":{
          "shape":"Metadata",
          "documentation":"<p>The value that is defined for the <code>Metadata</code> property of the template.</p>"
        },
        "DeclaredTransforms":{
          "shape":"TransformsList",
          "documentation":"<p>A list of the transforms that are declared in the template.</p>"
        }
      },
      "documentation":"<p>The output for the <a>GetTemplateSummary</a> action.</p>"
    },
    "Imports":{
      "type":"list",
      "member":{"shape":"StackName"}
    },
    "InsufficientCapabilitiesException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>",
      "error":{
        "code":"InsufficientCapabilitiesException",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidChangeSetStatusException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified change set can't be used to update the stack. For example, the change set status might be <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>",
      "error":{
        "code":"InvalidChangeSetStatus",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidOperationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified operation isn't valid.</p>",
      "error":{
        "code":"InvalidOperationException",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "LastUpdatedTime":{"type":"timestamp"},
    "LimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The quota for the resource has already been reached.</p> <p>For information on stack set limitations, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-limitations.html\">Limitations of StackSets</a>.</p>",
      "error":{
        "code":"LimitExceededException",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "LimitName":{"type":"string"},
    "LimitValue":{"type":"integer"},
    "ListChangeSetsInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string (provided by the <a>ListChangeSets</a> response output) that identifies the next page of change sets that you want to retrieve.</p>"
        }
      },
      "documentation":"<p>The input for the <a>ListChangeSets</a> action.</p>"
    },
    "ListChangeSetsOutput":{
      "type":"structure",
      "members":{
        "Summaries":{
          "shape":"ChangeSetSummaries",
          "documentation":"<p>A list of <code>ChangeSetSummary</code> structures that provides the ID and status of each change set for the specified stack.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the output exceeds 1 MB, a string that identifies the next page of change sets. If there is no additional page, this value is null.</p>"
        }
      },
      "documentation":"<p>The output for the <a>ListChangeSets</a> action.</p>"
    },
    "ListExportsInput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string (provided by the <a>ListExports</a> response output) that identifies the next page of exported output values that you asked to retrieve.</p>"
        }
      }
    },
    "ListExportsOutput":{
      "type":"structure",
      "members":{
        "Exports":{
          "shape":"Exports",
          "documentation":"<p>The output for the <a>ListExports</a> action.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the output exceeds 100 exported output values, a string that identifies the next page of exports. If there is no additional page, this value is null.</p>"
        }
      }
    },
    "ListImportsInput":{
      "type":"structure",
      "required":["ExportName"],
      "members":{
        "ExportName":{
          "shape":"ExportName",
          "documentation":"<p>The name of the exported output value. AWS CloudFormation returns the stack names that are importing this value. </p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string (provided by the <a>ListImports</a> response output) that identifies the next page of stacks that are importing the specified exported output value. </p>"
        }
      }
    },
    "ListImportsOutput":{
      "type":"structure",
      "members":{
        "Imports":{
          "shape":"Imports",
          "documentation":"<p>A list of stack names that are importing the specified exported output value. </p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string that identifies the next page of exports. If there is no additional page, this value is null.</p>"
        }
      }
    },
    "ListStackInstancesInput":{
      "type":"structure",
      "required":["StackSetName"],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set that you want to list stack instances for.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the previous request didn't return all of the remaining results, the response's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>"
        },
        "StackInstanceAccount":{
          "shape":"Account",
          "documentation":"<p>The name of the AWS account that you want to list stack instances for.</p>"
        },
        "StackInstanceRegion":{
          "shape":"Region",
          "documentation":"<p>The name of the region where you want to list stack instances. </p>"
        }
      }
    },
    "ListStackInstancesOutput":{
      "type":"structure",
      "members":{
        "Summaries":{
          "shape":"StackInstanceSummaries",
          "documentation":"<p>A list of <code>StackInstanceSummary</code> structures that contain information about the specified stack instances.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>"
        }
      }
    },
    "ListStackResourcesInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string that identifies the next page of stack resources that you want to retrieve.</p>"
        }
      },
      "documentation":"<p>The input for the <a>ListStackResource</a> action.</p>"
    },
    "ListStackResourcesOutput":{
      "type":"structure",
      "members":{
        "StackResourceSummaries":{
          "shape":"StackResourceSummaries",
          "documentation":"<p>A list of <code>StackResourceSummary</code> structures.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the output exceeds 1 MB, a string that identifies the next page of stack resources. If no additional page exists, this value is null.</p>"
        }
      },
      "documentation":"<p>The output for a <a>ListStackResources</a> action.</p>"
    },
    "ListStackSetOperationResultsInput":{
      "type":"structure",
      "required":[
        "StackSetName",
        "OperationId"
      ],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set that you want to get operation results for.</p>"
        },
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The ID of the stack set operation.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the previous request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperationResults</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>"
        }
      }
    },
    "ListStackSetOperationResultsOutput":{
      "type":"structure",
      "members":{
        "Summaries":{
          "shape":"StackSetOperationResultSummaries",
          "documentation":"<p>A list of <code>StackSetOperationResultSummary</code> structures that contain information about the specified operation results, for accounts and regions that are included in the operation.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the request doesn't return all results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListOperationResults</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, <code>NextToken</code> is set to <code>null</code>.</p>"
        }
      }
    },
    "ListStackSetOperationsInput":{
      "type":"structure",
      "required":["StackSetName"],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set that you want to get operation summaries for.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperations</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>"
        }
      }
    },
    "ListStackSetOperationsOutput":{
      "type":"structure",
      "members":{
        "Summaries":{
          "shape":"StackSetOperationSummaries",
          "documentation":"<p>A list of <code>StackSetOperationSummary</code> structures that contain summary information about operations for the specified stack set.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the request doesn't return all results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListOperationResults</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, <code>NextToken</code> is set to <code>null</code>.</p>"
        }
      }
    },
    "ListStackSetsInput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSets</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>"
        },
        "Status":{
          "shape":"StackSetStatus",
          "documentation":"<p>The status of the stack sets that you want to get summary information about.</p>"
        }
      }
    },
    "ListStackSetsOutput":{
      "type":"structure",
      "members":{
        "Summaries":{
          "shape":"StackSetSummaries",
          "documentation":"<p>A list of <code>StackSetSummary</code> structures that contain information about the user's stack sets.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>"
        }
      }
    },
    "ListStacksInput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>A string that identifies the next page of stacks that you want to retrieve.</p>"
        },
        "StackStatusFilter":{
          "shape":"StackStatusFilter",
          "documentation":"<p>Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <a>Stack</a> data type.</p>"
        }
      },
      "documentation":"<p>The input for <a>ListStacks</a> action.</p>"
    },
    "ListStacksOutput":{
      "type":"structure",
      "members":{
        "StackSummaries":{
          "shape":"StackSummaries",
          "documentation":"<p>A list of <code>StackSummary</code> structures containing information about the specified stacks.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page exists, this value is null.</p>"
        }
      },
      "documentation":"<p>The output for <a>ListStacks</a> action.</p>"
    },
    "LogicalResourceId":{"type":"string"},
    "MaxConcurrentCount":{
      "type":"integer",
      "min":1
    },
    "MaxConcurrentPercentage":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "MaxResults":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "Metadata":{"type":"string"},
    "MonitoringTimeInMinutes":{
      "type":"integer",
      "max":180,
      "min":0
    },
    "NameAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified name is already in use.</p>",
      "error":{
        "code":"NameAlreadyExistsException",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true
    },
    "NextToken":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "NoEcho":{"type":"boolean"},
    "NotificationARN":{"type":"string"},
    "NotificationARNs":{
      "type":"list",
      "member":{"shape":"NotificationARN"},
      "max":5
    },
    "OnFailure":{
      "type":"string",
      "enum":[
        "DO_NOTHING",
        "ROLLBACK",
        "DELETE"
      ]
    },
    "OperationIdAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified operation ID already exists.</p>",
      "error":{
        "code":"OperationIdAlreadyExistsException",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true
    },
    "OperationInProgressException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack set at a given time.</p>",
      "error":{
        "code":"OperationInProgressException",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true
    },
    "OperationNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified ID refers to an operation that doesn't exist.</p>",
      "error":{
        "code":"OperationNotFoundException",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "Output":{
      "type":"structure",
      "members":{
        "OutputKey":{
          "shape":"OutputKey",
          "documentation":"<p>The key associated with the output.</p>"
        },
        "OutputValue":{
          "shape":"OutputValue",
          "documentation":"<p>The value associated with the output.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>User defined description associated with the output.</p>"
        },
        "ExportName":{
          "shape":"ExportName",
          "documentation":"<p>The name of the export associated with the output.</p>"
        }
      },
      "documentation":"<p>The Output data type.</p>"
    },
    "OutputKey":{"type":"string"},
    "OutputValue":{"type":"string"},
    "Outputs":{
      "type":"list",
      "member":{"shape":"Output"}
    },
    "Parameter":{
      "type":"structure",
      "members":{
        "ParameterKey":{
          "shape":"ParameterKey",
          "documentation":"<p>The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.</p>"
        },
        "ParameterValue":{
          "shape":"ParameterValue",
          "documentation":"<p>The input value associated with the parameter.</p>"
        },
        "UsePreviousValue":{
          "shape":"UsePreviousValue",
          "documentation":"<p>During a stack update, use the existing parameter value that the stack is using for a given parameter key. If you specify <code>true</code>, do not specify a parameter value.</p>"
        },
        "ResolvedValue":{
          "shape":"ParameterValue",
          "documentation":"<p>Read-only. The value that corresponds to a Systems Manager parameter key. This field is returned only for <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#aws-ssm-parameter-types\"> <code>SSM</code> parameter types</a> in the template.</p>"
        }
      },
      "documentation":"<p>The Parameter data type.</p>"
    },
    "ParameterConstraints":{
      "type":"structure",
      "members":{
        "AllowedValues":{
          "shape":"AllowedValues",
          "documentation":"<p>A list of values that are permitted for a parameter.</p>"
        }
      },
      "documentation":"<p>A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property.</p>"
    },
    "ParameterDeclaration":{
      "type":"structure",
      "members":{
        "ParameterKey":{
          "shape":"ParameterKey",
          "documentation":"<p>The name that is associated with the parameter.</p>"
        },
        "DefaultValue":{
          "shape":"ParameterValue",
          "documentation":"<p>The default value of the parameter.</p>"
        },
        "ParameterType":{
          "shape":"ParameterType",
          "documentation":"<p>The type of parameter.</p>"
        },
        "NoEcho":{
          "shape":"NoEcho",
          "documentation":"<p>Flag that indicates whether the parameter value is shown as plain text in logs and in the AWS Management Console.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description that is associate with the parameter.</p>"
        },
        "ParameterConstraints":{
          "shape":"ParameterConstraints",
          "documentation":"<p>The criteria that AWS CloudFormation uses to validate parameter values.</p>"
        }
      },
      "documentation":"<p>The ParameterDeclaration data type.</p>"
    },
    "ParameterDeclarations":{
      "type":"list",
      "member":{"shape":"ParameterDeclaration"}
    },
    "ParameterKey":{"type":"string"},
    "ParameterType":{"type":"string"},
    "ParameterValue":{"type":"string"},
    "Parameters":{
      "type":"list",
      "member":{"shape":"Parameter"}
    },
    "PhysicalResourceId":{"type":"string"},
    "PropertyName":{"type":"string"},
    "Reason":{"type":"string"},
    "Region":{"type":"string"},
    "RegionList":{
      "type":"list",
      "member":{"shape":"Region"}
    },
    "Replacement":{
      "type":"string",
      "enum":[
        "True",
        "False",
        "Conditional"
      ]
    },
    "RequiresRecreation":{
      "type":"string",
      "enum":[
        "Never",
        "Conditionally",
        "Always"
      ]
    },
    "ResourceAttribute":{
      "type":"string",
      "enum":[
        "Properties",
        "Metadata",
        "CreationPolicy",
        "UpdatePolicy",
        "DeletionPolicy",
        "Tags"
      ]
    },
    "ResourceChange":{
      "type":"structure",
      "members":{
        "Action":{
          "shape":"ChangeAction",
          "documentation":"<p>The action that AWS CloudFormation takes on the resource, such as <code>Add</code> (adds a new resource), <code>Modify</code> (changes a resource), or <code>Remove</code> (deletes a resource).</p>"
        },
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The resource's logical ID, which is defined in the stack's template.</p>"
        },
        "PhysicalResourceId":{
          "shape":"PhysicalResourceId",
          "documentation":"<p>The resource's physical ID (resource name). Resources that you are adding don't have physical IDs because they haven't been created.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of AWS CloudFormation resource, such as <code>AWS::S3::Bucket</code>.</p>"
        },
        "Replacement":{
          "shape":"Replacement",
          "documentation":"<p>For the <code>Modify</code> action, indicates whether AWS CloudFormation will replace the resource by creating a new one and deleting the old one. This value depends on the value of the <code>RequiresRecreation</code> property in the <code>ResourceTargetDefinition</code> structure. For example, if the <code>RequiresRecreation</code> field is <code>Always</code> and the <code>Evaluation</code> field is <code>Static</code>, <code>Replacement</code> is <code>True</code>. If the <code>RequiresRecreation</code> field is <code>Always</code> and the <code>Evaluation</code> field is <code>Dynamic</code>, <code>Replacement</code> is <code>Conditionally</code>.</p> <p>If you have multiple changes with different <code>RequiresRecreation</code> values, the <code>Replacement</code> value depends on the change with the most impact. A <code>RequiresRecreation</code> value of <code>Always</code> has the most impact, followed by <code>Conditionally</code>, and then <code>Never</code>.</p>"
        },
        "Scope":{
          "shape":"Scope",
          "documentation":"<p>For the <code>Modify</code> action, indicates which resource attribute is triggering this update, such as a change in the resource attribute's <code>Metadata</code>, <code>Properties</code>, or <code>Tags</code>.</p>"
        },
        "Details":{
          "shape":"ResourceChangeDetails",
          "documentation":"<p>For the <code>Modify</code> action, a list of <code>ResourceChangeDetail</code> structures that describes the changes that AWS CloudFormation will make to the resource. </p>"
        }
      },
      "documentation":"<p>The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set.</p>"
    },
    "ResourceChangeDetail":{
      "type":"structure",
      "members":{
        "Target":{
          "shape":"ResourceTargetDefinition",
          "documentation":"<p>A <code>ResourceTargetDefinition</code> structure that describes the field that AWS CloudFormation will change and whether the resource will be recreated.</p>"
        },
        "Evaluation":{
          "shape":"EvaluationType",
          "documentation":"<p>Indicates whether AWS CloudFormation can determine the target value, and whether the target value will change before you execute a change set.</p> <p>For <code>Static</code> evaluations, AWS CloudFormation can determine that the target value will change, and its value. For example, if you directly modify the <code>InstanceType</code> property of an EC2 instance, AWS CloudFormation knows that this property value will change, and its value, so this is a <code>Static</code> evaluation.</p> <p>For <code>Dynamic</code> evaluations, cannot determine the target value because it depends on the result of an intrinsic function, such as a <code>Ref</code> or <code>Fn::GetAtt</code> intrinsic function, when the stack is updated. For example, if your template includes a reference to a resource that is conditionally recreated, the value of the reference (the physical ID of the resource) might change, depending on if the resource is recreated. If the resource is recreated, it will have a new physical ID, so all references to that resource will also be updated.</p>"
        },
        "ChangeSource":{
          "shape":"ChangeSource",
          "documentation":"<p>The group to which the <code>CausingEntity</code> value belongs. There are five entity groups:</p> <ul> <li> <p> <code>ResourceReference</code> entities are <code>Ref</code> intrinsic functions that refer to resources in the template, such as <code>{ \"Ref\" : \"MyEC2InstanceResource\" }</code>.</p> </li> <li> <p> <code>ParameterReference</code> entities are <code>Ref</code> intrinsic functions that get template parameter values, such as <code>{ \"Ref\" : \"MyPasswordParameter\" }</code>.</p> </li> <li> <p> <code>ResourceAttribute</code> entities are <code>Fn::GetAtt</code> intrinsic functions that get resource attribute values, such as <code>{ \"Fn::GetAtt\" : [ \"MyEC2InstanceResource\", \"PublicDnsName\" ] }</code>.</p> </li> <li> <p> <code>DirectModification</code> entities are changes that are made directly to the template.</p> </li> <li> <p> <code>Automatic</code> entities are <code>AWS::CloudFormation::Stack</code> resource types, which are also known as nested stacks. If you made no changes to the <code>AWS::CloudFormation::Stack</code> resource, AWS CloudFormation sets the <code>ChangeSource</code> to <code>Automatic</code> because the nested stack's template might have changed. Changes to a nested stack's template aren't visible to AWS CloudFormation until you run an update on the parent stack.</p> </li> </ul>"
        },
        "CausingEntity":{
          "shape":"CausingEntity",
          "documentation":"<p>The identity of the entity that triggered this change. This entity is a member of the group that is specified by the <code>ChangeSource</code> field. For example, if you modified the value of the <code>KeyPairName</code> parameter, the <code>CausingEntity</code> is the name of the parameter (<code>KeyPairName</code>).</p> <p>If the <code>ChangeSource</code> value is <code>DirectModification</code>, no value is given for <code>CausingEntity</code>.</p>"
        }
      },
      "documentation":"<p>For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes AWS CloudFormation will make to that resource.</p>"
    },
    "ResourceChangeDetails":{
      "type":"list",
      "member":{"shape":"ResourceChangeDetail"}
    },
    "ResourceProperties":{"type":"string"},
    "ResourceSignalStatus":{
      "type":"string",
      "enum":[
        "SUCCESS",
        "FAILURE"
      ]
    },
    "ResourceSignalUniqueId":{
      "type":"string",
      "max":64,
      "min":1
    },
    "ResourceStatus":{
      "type":"string",
      "enum":[
        "CREATE_IN_PROGRESS",
        "CREATE_FAILED",
        "CREATE_COMPLETE",
        "DELETE_IN_PROGRESS",
        "DELETE_FAILED",
        "DELETE_COMPLETE",
        "DELETE_SKIPPED",
        "UPDATE_IN_PROGRESS",
        "UPDATE_FAILED",
        "UPDATE_COMPLETE"
      ]
    },
    "ResourceStatusReason":{"type":"string"},
    "ResourceTargetDefinition":{
      "type":"structure",
      "members":{
        "Attribute":{
          "shape":"ResourceAttribute",
          "documentation":"<p>Indicates which resource attribute is triggering this update, such as a change in the resource attribute's <code>Metadata</code>, <code>Properties</code>, or <code>Tags</code>.</p>"
        },
        "Name":{
          "shape":"PropertyName",
          "documentation":"<p>If the <code>Attribute</code> value is <code>Properties</code>, the name of the property. For all other attributes, the value is null.</p>"
        },
        "RequiresRecreation":{
          "shape":"RequiresRecreation",
          "documentation":"<p>If the <code>Attribute</code> value is <code>Properties</code>, indicates whether a change to this property causes the resource to be recreated. The value can be <code>Never</code>, <code>Always</code>, or <code>Conditionally</code>. To determine the conditions for a <code>Conditionally</code> recreation, see the update behavior for that <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html\">property</a> in the AWS CloudFormation User Guide.</p>"
        }
      },
      "documentation":"<p>The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated.</p>"
    },
    "ResourceToSkip":{
      "type":"string",
      "pattern":"[a-zA-Z0-9]+|[a-zA-Z][-a-zA-Z0-9]*\\.[a-zA-Z0-9]+"
    },
    "ResourceType":{
      "type":"string",
      "max":256,
      "min":1
    },
    "ResourceTypes":{
      "type":"list",
      "member":{"shape":"ResourceType"}
    },
    "ResourcesToSkip":{
      "type":"list",
      "member":{"shape":"ResourceToSkip"}
    },
    "RetainResources":{
      "type":"list",
      "member":{"shape":"LogicalResourceId"}
    },
    "RetainStacks":{"type":"boolean"},
    "RetainStacksNullable":{"type":"boolean"},
    "RoleARN":{
      "type":"string",
      "max":2048,
      "min":20
    },
    "RollbackConfiguration":{
      "type":"structure",
      "members":{
        "RollbackTriggers":{
          "shape":"RollbackTriggers",
          "documentation":"<p>The triggers to monitor during stack creation or update actions. </p> <p>By default, AWS CloudFormation saves the rollback triggers specified for a stack and applies them to any subsequent update operations for the stack, unless you specify otherwise. If you do specify rollback triggers for this parameter, those triggers replace any list of triggers previously specified for the stack. This means:</p> <ul> <li> <p>To use the rollback triggers previously specified for this stack, if any, don't specify this parameter.</p> </li> <li> <p>To specify new or updated rollback triggers, you must specify <i>all</i> the triggers that you want used for this stack, even triggers you've specifed before (for example, when creating the stack or during a previous stack update). Any triggers that you don't include in the updated list of triggers are no longer applied to the stack.</p> </li> <li> <p>To remove all currently specified triggers, specify an empty list for this parameter.</p> </li> </ul> <p>If a specified trigger is missing, the entire stack operation fails and is rolled back. </p>"
        },
        "MonitoringTimeInMinutes":{
          "shape":"MonitoringTimeInMinutes",
          "documentation":"<p>The amount of time, in minutes, during which CloudFormation should monitor all the rollback triggers after the stack creation or update operation deploys all necessary resources.</p> <p>The default is 0 minutes.</p> <p>If you specify a monitoring period but do not specify any rollback triggers, CloudFormation still waits the specified period of time before cleaning up old resources after update operations. You can use this monitoring period to perform any manual stack validation desired, and manually cancel the stack creation or update (using <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html\">CancelUpdateStack</a>, for example) as necessary.</p> <p>If you specify 0 for this parameter, CloudFormation still monitors the specified rollback triggers during stack creation and update operations. Then, for update operations, it begins disposing of old resources immediately once the operation completes.</p>"
        }
      },
      "documentation":"<p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html\">Monitor and Roll Back Stack Operations</a>.</p>"
    },
    "RollbackTrigger":{
      "type":"structure",
      "required":[
        "Arn",
        "Type"
      ],
      "members":{
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the rollback trigger.</p> <p>If a specified trigger is missing, the entire stack operation fails and is rolled back. </p>"
        },
        "Type":{
          "shape":"Type",
          "documentation":"<p>The resource type of the rollback trigger. Currently, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-alarm.html\">AWS::CloudWatch::Alarm</a> is the only supported resource type.</p>"
        }
      },
      "documentation":"<p>A rollback trigger AWS CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation. </p>"
    },
    "RollbackTriggers":{
      "type":"list",
      "member":{"shape":"RollbackTrigger"},
      "max":5
    },
    "Scope":{
      "type":"list",
      "member":{"shape":"ResourceAttribute"}
    },
    "SetStackPolicyInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or unique stack ID that you want to associate a policy with.</p>"
        },
        "StackPolicyBody":{
          "shape":"StackPolicyBody",
          "documentation":"<p>Structure containing the stack policy body. For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html\"> Prevent Updates to Stack Resources</a> in the AWS CloudFormation User Guide. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p>"
        },
        "StackPolicyURL":{
          "shape":"StackPolicyURL",
          "documentation":"<p>Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p>"
        }
      },
      "documentation":"<p>The input for the <a>SetStackPolicy</a> action.</p>"
    },
    "SignalResourceInput":{
      "type":"structure",
      "required":[
        "StackName",
        "LogicalResourceId",
        "UniqueId",
        "Status"
      ],
      "members":{
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>The stack name or unique stack ID that includes the resource that you want to signal.</p>"
        },
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.</p>"
        },
        "UniqueId":{
          "shape":"ResourceSignalUniqueId",
          "documentation":"<p>A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.</p>"
        },
        "Status":{
          "shape":"ResourceSignalStatus",
          "documentation":"<p>The status of the signal, which is either success or failure. A failure signal causes AWS CloudFormation to immediately fail the stack creation or update.</p>"
        }
      },
      "documentation":"<p>The input for the <a>SignalResource</a> action.</p>"
    },
    "Stack":{
      "type":"structure",
      "required":[
        "StackName",
        "CreationTime",
        "StackStatus"
      ],
      "members":{
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>Unique identifier of the stack.</p>"
        },
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name associated with the stack.</p>"
        },
        "ChangeSetId":{
          "shape":"ChangeSetId",
          "documentation":"<p>The unique ID of the change set.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>A user-defined description associated with the stack.</p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>A list of <code>Parameter</code> structures.</p>"
        },
        "CreationTime":{
          "shape":"CreationTime",
          "documentation":"<p>The time at which the stack was created.</p>"
        },
        "DeletionTime":{
          "shape":"DeletionTime",
          "documentation":"<p>The time the stack was deleted.</p>"
        },
        "LastUpdatedTime":{
          "shape":"LastUpdatedTime",
          "documentation":"<p>The time the stack was last updated. This field will only be returned if the stack has been updated at least once.</p>"
        },
        "RollbackConfiguration":{
          "shape":"RollbackConfiguration",
          "documentation":"<p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>"
        },
        "StackStatus":{
          "shape":"StackStatus",
          "documentation":"<p>Current status of the stack.</p>"
        },
        "StackStatusReason":{
          "shape":"StackStatusReason",
          "documentation":"<p>Success/failure message associated with the stack status.</p>"
        },
        "DisableRollback":{
          "shape":"DisableRollback",
          "documentation":"<p>Boolean to enable or disable rollback on stack creation failures:</p> <ul> <li> <p> <code>true</code>: disable rollback</p> </li> <li> <p> <code>false</code>: enable rollback</p> </li> </ul>"
        },
        "NotificationARNs":{
          "shape":"NotificationARNs",
          "documentation":"<p>SNS topic ARNs to which stack related events are published.</p>"
        },
        "TimeoutInMinutes":{
          "shape":"TimeoutMinutes",
          "documentation":"<p>The amount of time within which stack creation should complete.</p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>The capabilities allowed in the stack.</p>"
        },
        "Outputs":{
          "shape":"Outputs",
          "documentation":"<p>A list of output structures.</p>"
        },
        "RoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that is associated with the stack. During a stack operation, AWS CloudFormation uses this role's credentials to make calls on your behalf.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>A list of <code>Tag</code>s that specify information about the stack.</p>"
        },
        "EnableTerminationProtection":{
          "shape":"EnableTerminationProtection",
          "documentation":"<p>Whether termination protection is enabled for the stack.</p> <p> For <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html\">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html\">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p>"
        },
        "ParentId":{
          "shape":"StackId",
          "documentation":"<p>For nested stacks--stacks created as resources for another stack--the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html\">Working with Nested Stacks</a> in the <i>AWS CloudFormation User Guide</i>.</p>"
        },
        "RootId":{
          "shape":"StackId",
          "documentation":"<p>For nested stacks--stacks created as resources for another stack--the stack ID of the the top-level stack to which the nested stack ultimately belongs.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html\">Working with Nested Stacks</a> in the <i>AWS CloudFormation User Guide</i>.</p>"
        }
      },
      "documentation":"<p>The Stack data type.</p>"
    },
    "StackEvent":{
      "type":"structure",
      "required":[
        "StackId",
        "EventId",
        "StackName",
        "Timestamp"
      ],
      "members":{
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>The unique ID name of the instance of the stack.</p>"
        },
        "EventId":{
          "shape":"EventId",
          "documentation":"<p>The unique ID of this event.</p>"
        },
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name associated with a stack.</p>"
        },
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The logical name of the resource specified in the template.</p>"
        },
        "PhysicalResourceId":{
          "shape":"PhysicalResourceId",
          "documentation":"<p>The name or unique identifier associated with the physical instance of the resource.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>Type of resource. (For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html\"> AWS Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>"
        },
        "Timestamp":{
          "shape":"Timestamp",
          "documentation":"<p>Time the status was updated.</p>"
        },
        "ResourceStatus":{
          "shape":"ResourceStatus",
          "documentation":"<p>Current status of the resource.</p>"
        },
        "ResourceStatusReason":{
          "shape":"ResourceStatusReason",
          "documentation":"<p>Success/failure message associated with the resource.</p>"
        },
        "ResourceProperties":{
          "shape":"ResourceProperties",
          "documentation":"<p>BLOB of the properties used to create the resource.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The token passed to the operation that generated this event.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>"
        }
      },
      "documentation":"<p>The StackEvent data type.</p>"
    },
    "StackEvents":{
      "type":"list",
      "member":{"shape":"StackEvent"}
    },
    "StackId":{"type":"string"},
    "StackInstance":{
      "type":"structure",
      "members":{
        "StackSetId":{
          "shape":"StackSetId",
          "documentation":"<p>The name or unique ID of the stack set that the stack instance is associated with.</p>"
        },
        "Region":{
          "shape":"Region",
          "documentation":"<p>The name of the AWS region that the stack instance is associated with.</p>"
        },
        "Account":{
          "shape":"Account",
          "documentation":"<p>The name of the AWS account that the stack instance is associated with.</p>"
        },
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>The ID of the stack instance.</p>"
        },
        "ParameterOverrides":{
          "shape":"Parameters",
          "documentation":"<p>A list of parameters from the stack set template whose values have been overridden in this stack instance.</p>"
        },
        "Status":{
          "shape":"StackInstanceStatus",
          "documentation":"<p>The status of the stack instance, in terms of its synchronization with its associated stack set.</p> <ul> <li> <p> <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to <code>true</code>, to delete the stack instance, and then delete the stack manually.</p> </li> <li> <p> <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because:</p> <ul> <li> <p>The associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation. </p> </li> <li> <p>The stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or was stopped before the stack was created or updated. </p> </li> </ul> </li> <li> <p> <code>CURRENT</code>: The stack is currently up to date with the stack set.</p> </li> </ul>"
        },
        "StatusReason":{
          "shape":"Reason",
          "documentation":"<p>The explanation for the specific status code that is assigned to this stack instance.</p>"
        }
      },
      "documentation":"<p>An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.</p>"
    },
    "StackInstanceNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified stack instance doesn't exist.</p>",
      "error":{
        "code":"StackInstanceNotFoundException",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "StackInstanceStatus":{
      "type":"string",
      "enum":[
        "CURRENT",
        "OUTDATED",
        "INOPERABLE"
      ]
    },
    "StackInstanceSummaries":{
      "type":"list",
      "member":{"shape":"StackInstanceSummary"}
    },
    "StackInstanceSummary":{
      "type":"structure",
      "members":{
        "StackSetId":{
          "shape":"StackSetId",
          "documentation":"<p>The name or unique ID of the stack set that the stack instance is associated with.</p>"
        },
        "Region":{
          "shape":"Region",
          "documentation":"<p>The name of the AWS region that the stack instance is associated with.</p>"
        },
        "Account":{
          "shape":"Account",
          "documentation":"<p>The name of the AWS account that the stack instance is associated with.</p>"
        },
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>The ID of the stack instance.</p>"
        },
        "Status":{
          "shape":"StackInstanceStatus",
          "documentation":"<p>The status of the stack instance, in terms of its synchronization with its associated stack set.</p> <ul> <li> <p> <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to <code>true</code>, to delete the stack instance, and then delete the stack manually.</p> </li> <li> <p> <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because:</p> <ul> <li> <p>The associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation. </p> </li> <li> <p>The stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or was stopped before the stack was created or updated. </p> </li> </ul> </li> <li> <p> <code>CURRENT</code>: The stack is currently up to date with the stack set.</p> </li> </ul>"
        },
        "StatusReason":{
          "shape":"Reason",
          "documentation":"<p>The explanation for the specific status code assigned to this stack instance.</p>"
        }
      },
      "documentation":"<p>The structure that contains summary information about a stack instance.</p>"
    },
    "StackName":{"type":"string"},
    "StackNameOrId":{
      "type":"string",
      "min":1,
      "pattern":"([a-zA-Z][-a-zA-Z0-9]*)|(arn:\\b(aws|aws-us-gov|aws-cn)\\b:[-a-zA-Z0-9:/._+]*)"
    },
    "StackPolicyBody":{
      "type":"string",
      "max":16384,
      "min":1
    },
    "StackPolicyDuringUpdateBody":{
      "type":"string",
      "max":16384,
      "min":1
    },
    "StackPolicyDuringUpdateURL":{
      "type":"string",
      "max":1350,
      "min":1
    },
    "StackPolicyURL":{
      "type":"string",
      "max":1350,
      "min":1
    },
    "StackResource":{
      "type":"structure",
      "required":[
        "LogicalResourceId",
        "ResourceType",
        "Timestamp",
        "ResourceStatus"
      ],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name associated with the stack.</p>"
        },
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>Unique identifier of the stack.</p>"
        },
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The logical name of the resource specified in the template.</p>"
        },
        "PhysicalResourceId":{
          "shape":"PhysicalResourceId",
          "documentation":"<p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>Type of resource. (For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html\"> AWS Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>"
        },
        "Timestamp":{
          "shape":"Timestamp",
          "documentation":"<p>Time the status was updated.</p>"
        },
        "ResourceStatus":{
          "shape":"ResourceStatus",
          "documentation":"<p>Current status of the resource.</p>"
        },
        "ResourceStatusReason":{
          "shape":"ResourceStatusReason",
          "documentation":"<p>Success/failure message associated with the resource.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>User defined description associated with the resource.</p>"
        }
      },
      "documentation":"<p>The StackResource data type.</p>"
    },
    "StackResourceDetail":{
      "type":"structure",
      "required":[
        "LogicalResourceId",
        "ResourceType",
        "LastUpdatedTimestamp",
        "ResourceStatus"
      ],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name associated with the stack.</p>"
        },
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>Unique identifier of the stack.</p>"
        },
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The logical name of the resource specified in the template.</p>"
        },
        "PhysicalResourceId":{
          "shape":"PhysicalResourceId",
          "documentation":"<p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>Type of resource. ((For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html\"> AWS Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>"
        },
        "LastUpdatedTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>Time the status was updated.</p>"
        },
        "ResourceStatus":{
          "shape":"ResourceStatus",
          "documentation":"<p>Current status of the resource.</p>"
        },
        "ResourceStatusReason":{
          "shape":"ResourceStatusReason",
          "documentation":"<p>Success/failure message associated with the resource.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>User defined description associated with the resource.</p>"
        },
        "Metadata":{
          "shape":"Metadata",
          "documentation":"<p>The content of the <code>Metadata</code> attribute declared for the resource. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html\">Metadata Attribute</a> in the AWS CloudFormation User Guide.</p>"
        }
      },
      "documentation":"<p>Contains detailed information about the specified stack resource.</p>"
    },
    "StackResourceSummaries":{
      "type":"list",
      "member":{"shape":"StackResourceSummary"}
    },
    "StackResourceSummary":{
      "type":"structure",
      "required":[
        "LogicalResourceId",
        "ResourceType",
        "LastUpdatedTimestamp",
        "ResourceStatus"
      ],
      "members":{
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The logical name of the resource specified in the template.</p>"
        },
        "PhysicalResourceId":{
          "shape":"PhysicalResourceId",
          "documentation":"<p>The name or unique identifier that corresponds to a physical instance ID of the resource.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>Type of resource. (For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html\"> AWS Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>"
        },
        "LastUpdatedTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>Time the status was updated.</p>"
        },
        "ResourceStatus":{
          "shape":"ResourceStatus",
          "documentation":"<p>Current status of the resource.</p>"
        },
        "ResourceStatusReason":{
          "shape":"ResourceStatusReason",
          "documentation":"<p>Success/failure message associated with the resource.</p>"
        }
      },
      "documentation":"<p>Contains high-level information about the specified stack resource.</p>"
    },
    "StackResources":{
      "type":"list",
      "member":{"shape":"StackResource"}
    },
    "StackSet":{
      "type":"structure",
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name that's associated with the stack set.</p>"
        },
        "StackSetId":{
          "shape":"StackSetId",
          "documentation":"<p>The ID of the stack set.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>A description of the stack set that you specify when the stack set is created or updated.</p>"
        },
        "Status":{
          "shape":"StackSetStatus",
          "documentation":"<p>The status of the stack set.</p>"
        },
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>The structure that contains the body of the template that was used to create or update the stack set.</p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>A list of input parameters for a stack set.</p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>The capabilities that are allowed in the stack set. Some stack set templates might include resources that can affect permissions in your AWS account—for example, by creating new AWS Identity and Access Management (IAM) users. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities\">Acknowledging IAM Resources in AWS CloudFormation Templates.</a> </p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>A list of tags that specify information about the stack set. A maximum number of 50 tags can be specified.</p>"
        },
        "StackSetARN":{
          "shape":"StackSetARN",
          "documentation":"<p>The Amazon Resource Number (ARN) of the stack set.</p>"
        },
        "AdministrationRoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Number (ARN) of the IAM role used to create or update the stack set.</p> <p>Use customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html\">Prerequisites: Granting Permissions for Stack Set Operations</a> in the <i>AWS CloudFormation User Guide</i>.</p>"
        },
        "ExecutionRoleName":{
          "shape":"ExecutionRoleName",
          "documentation":"<p>The name of the IAM execution role used to create or update the stack set. </p> <p>Use customized execution roles to control which stack resources users and groups can include in their stack sets. </p>"
        }
      },
      "documentation":"<p>A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires. </p>"
    },
    "StackSetARN":{"type":"string"},
    "StackSetId":{"type":"string"},
    "StackSetName":{"type":"string"},
    "StackSetNameOrId":{
      "type":"string",
      "pattern":"[a-zA-Z][-a-zA-Z0-9]*(?::[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})?"
    },
    "StackSetNotEmptyException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You can't yet delete this stack set, because it still contains one or more stack instances. Delete all stack instances from the stack set before deleting the stack set.</p>",
      "error":{
        "code":"StackSetNotEmptyException",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true
    },
    "StackSetNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified stack set doesn't exist.</p>",
      "error":{
        "code":"StackSetNotFoundException",
        "httpStatusCode":404,
        "senderFault":true
      },
      "exception":true
    },
    "StackSetOperation":{
      "type":"structure",
      "members":{
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique ID of a stack set operation.</p>"
        },
        "StackSetId":{
          "shape":"StackSetId",
          "documentation":"<p>The ID of the stack set.</p>"
        },
        "Action":{
          "shape":"StackSetOperationAction",
          "documentation":"<p>The type of stack set operation: <code>CREATE</code>, <code>UPDATE</code>, or <code>DELETE</code>. Create and delete operations affect only the specified stack set instances that are associated with the specified stack set. Update operations affect both the stack set itself, as well as <i>all</i> associated stack set instances.</p>"
        },
        "Status":{
          "shape":"StackSetOperationStatus",
          "documentation":"<p>The status of the operation. </p> <ul> <li> <p> <code>FAILED</code>: The operation exceeded the specified failure tolerance. The failure tolerance value that you've set for an operation is applied for each region during stack create and update operations. If the number of failed stacks within a region exceeds the failure tolerance, the status of the operation in the region is set to <code>FAILED</code>. This in turn sets the status of the operation as a whole to <code>FAILED</code>, and AWS CloudFormation cancels the operation in any remaining regions.</p> </li> <li> <p> <code>RUNNING</code>: The operation is currently being performed.</p> </li> <li> <p> <code>STOPPED</code>: The user has cancelled the operation.</p> </li> <li> <p> <code>STOPPING</code>: The operation is in the process of stopping, at user request. </p> </li> <li> <p> <code>SUCCEEDED</code>: The operation completed creating or updating all the specified stacks without exceeding the failure tolerance for the operation.</p> </li> </ul>"
        },
        "OperationPreferences":{
          "shape":"StackSetOperationPreferences",
          "documentation":"<p>The preferences for how AWS CloudFormation performs this stack set operation.</p>"
        },
        "RetainStacks":{
          "shape":"RetainStacksNullable",
          "documentation":"<p>For stack set operations of action type <code>DELETE</code>, specifies whether to remove the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack, or add an existing, saved stack to a new stack set.</p>"
        },
        "AdministrationRoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Number (ARN) of the IAM role used to perform this stack set operation. </p> <p>Use customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html\">Define Permissions for Multiple Administrators</a> in the <i>AWS CloudFormation User Guide</i>.</p>"
        },
        "ExecutionRoleName":{
          "shape":"ExecutionRoleName",
          "documentation":"<p>The name of the IAM execution role used to create or update the stack set.</p> <p>Use customized execution roles to control which stack resources users and groups can include in their stack sets. </p>"
        },
        "CreationTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the operation was initiated. Note that the creation times for the stack set operation might differ from the creation time of the individual stacks themselves. This is because AWS CloudFormation needs to perform preparatory work for the operation, such as dispatching the work to the requested regions, before actually creating the first stacks.</p>"
        },
        "EndTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the stack set operation ended, across all accounts and regions specified. Note that this doesn't necessarily mean that the stack set operation was successful, or even attempted, in each account or region.</p>"
        }
      },
      "documentation":"<p>The structure that contains information about a stack set operation. </p>"
    },
    "StackSetOperationAction":{
      "type":"string",
      "enum":[
        "CREATE",
        "UPDATE",
        "DELETE"
      ]
    },
    "StackSetOperationPreferences":{
      "type":"structure",
      "members":{
        "RegionOrder":{
          "shape":"RegionList",
          "documentation":"<p>The order of the regions in where you want to perform the stack operation.</p>"
        },
        "FailureToleranceCount":{
          "shape":"FailureToleranceCount",
          "documentation":"<p>The number of accounts, per region, for which this operation can fail before AWS CloudFormation stops the operation in that region. If the operation is stopped in a region, AWS CloudFormation doesn't attempt the operation in any subsequent regions.</p> <p>Conditional: You must specify either <code>FailureToleranceCount</code> or <code>FailureTolerancePercentage</code> (but not both).</p>"
        },
        "FailureTolerancePercentage":{
          "shape":"FailureTolerancePercentage",
          "documentation":"<p>The percentage of accounts, per region, for which this stack operation can fail before AWS CloudFormation stops the operation in that region. If the operation is stopped in a region, AWS CloudFormation doesn't attempt the operation in any subsequent regions.</p> <p>When calculating the number of accounts based on the specified percentage, AWS CloudFormation rounds <i>down</i> to the next whole number.</p> <p>Conditional: You must specify either <code>FailureToleranceCount</code> or <code>FailureTolerancePercentage</code>, but not both.</p>"
        },
        "MaxConcurrentCount":{
          "shape":"MaxConcurrentCount",
          "documentation":"<p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>FailureToleranceCount</code>—<code>MaxConcurrentCount</code> is at most one more than the <code>FailureToleranceCount</code> .</p> <p>Note that this setting lets you specify the <i>maximum</i> for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or <code>MaxConcurrentPercentage</code>, but not both.</p>"
        },
        "MaxConcurrentPercentage":{
          "shape":"MaxConcurrentPercentage",
          "documentation":"<p>The maximum percentage of accounts in which to perform this operation at one time.</p> <p>When calculating the number of accounts based on the specified percentage, AWS CloudFormation rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, CloudFormation sets the number as one instead.</p> <p>Note that this setting lets you specify the <i>maximum</i> for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or <code>MaxConcurrentPercentage</code>, but not both.</p>"
        }
      },
      "documentation":"<p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options\">Stack set operation options</a>.</p>"
    },
    "StackSetOperationResultStatus":{
      "type":"string",
      "enum":[
        "PENDING",
        "RUNNING",
        "SUCCEEDED",
        "FAILED",
        "CANCELLED"
      ]
    },
    "StackSetOperationResultSummaries":{
      "type":"list",
      "member":{"shape":"StackSetOperationResultSummary"}
    },
    "StackSetOperationResultSummary":{
      "type":"structure",
      "members":{
        "Account":{
          "shape":"Account",
          "documentation":"<p>The name of the AWS account for this operation result.</p>"
        },
        "Region":{
          "shape":"Region",
          "documentation":"<p>The name of the AWS region for this operation result.</p>"
        },
        "Status":{
          "shape":"StackSetOperationResultStatus",
          "documentation":"<p>The result status of the stack set operation for the given account in the given region.</p> <ul> <li> <p> <code>CANCELLED</code>: The operation in the specified account and region has been cancelled. This is either because a user has stopped the stack set operation, or because the failure tolerance of the stack set operation has been exceeded.</p> </li> <li> <p> <code>FAILED</code>: The operation in the specified account and region failed. </p> <p>If the stack set operation fails in enough accounts within a region, the failure tolerance for the stack set operation as a whole might be exceeded. </p> </li> <li> <p> <code>RUNNING</code>: The operation in the specified account and region is currently in progress.</p> </li> <li> <p> <code>PENDING</code>: The operation in the specified account and region has yet to start. </p> </li> <li> <p> <code>SUCCEEDED</code>: The operation in the specified account and region completed successfully.</p> </li> </ul>"
        },
        "StatusReason":{
          "shape":"Reason",
          "documentation":"<p>The reason for the assigned result status.</p>"
        },
        "AccountGateResult":{
          "shape":"AccountGateResult",
          "documentation":"<p>The results of the account gate function AWS CloudFormation invokes, if present, before proceeding with stack set operations in an account</p>"
        }
      },
      "documentation":"<p>The structure that contains information about a specified operation's results for a given account in a given region.</p>"
    },
    "StackSetOperationStatus":{
      "type":"string",
      "enum":[
        "RUNNING",
        "SUCCEEDED",
        "FAILED",
        "STOPPING",
        "STOPPED"
      ]
    },
    "StackSetOperationSummaries":{
      "type":"list",
      "member":{"shape":"StackSetOperationSummary"}
    },
    "StackSetOperationSummary":{
      "type":"structure",
      "members":{
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique ID of the stack set operation.</p>"
        },
        "Action":{
          "shape":"StackSetOperationAction",
          "documentation":"<p>The type of operation: <code>CREATE</code>, <code>UPDATE</code>, or <code>DELETE</code>. Create and delete operations affect only the specified stack instances that are associated with the specified stack set. Update operations affect both the stack set itself as well as <i>all</i> associated stack set instances.</p>"
        },
        "Status":{
          "shape":"StackSetOperationStatus",
          "documentation":"<p>The overall status of the operation.</p> <ul> <li> <p> <code>FAILED</code>: The operation exceeded the specified failure tolerance. The failure tolerance value that you've set for an operation is applied for each region during stack create and update operations. If the number of failed stacks within a region exceeds the failure tolerance, the status of the operation in the region is set to <code>FAILED</code>. This in turn sets the status of the operation as a whole to <code>FAILED</code>, and AWS CloudFormation cancels the operation in any remaining regions.</p> </li> <li> <p> <code>RUNNING</code>: The operation is currently being performed.</p> </li> <li> <p> <code>STOPPED</code>: The user has cancelled the operation.</p> </li> <li> <p> <code>STOPPING</code>: The operation is in the process of stopping, at user request. </p> </li> <li> <p> <code>SUCCEEDED</code>: The operation completed creating or updating all the specified stacks without exceeding the failure tolerance for the operation.</p> </li> </ul>"
        },
        "CreationTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the operation was initiated. Note that the creation times for the stack set operation might differ from the creation time of the individual stacks themselves. This is because AWS CloudFormation needs to perform preparatory work for the operation, such as dispatching the work to the requested regions, before actually creating the first stacks.</p>"
        },
        "EndTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The time at which the stack set operation ended, across all accounts and regions specified. Note that this doesn't necessarily mean that the stack set operation was successful, or even attempted, in each account or region.</p>"
        }
      },
      "documentation":"<p>The structures that contain summary information about the specified operation.</p>"
    },
    "StackSetStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "DELETED"
      ]
    },
    "StackSetSummaries":{
      "type":"list",
      "member":{"shape":"StackSetSummary"}
    },
    "StackSetSummary":{
      "type":"structure",
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name of the stack set.</p>"
        },
        "StackSetId":{
          "shape":"StackSetId",
          "documentation":"<p>The ID of the stack set.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>A description of the stack set that you specify when the stack set is created or updated.</p>"
        },
        "Status":{
          "shape":"StackSetStatus",
          "documentation":"<p>The status of the stack set.</p>"
        }
      },
      "documentation":"<p>The structures that contain summary information about the specified stack set.</p>"
    },
    "StackStatus":{
      "type":"string",
      "enum":[
        "CREATE_IN_PROGRESS",
        "CREATE_FAILED",
        "CREATE_COMPLETE",
        "ROLLBACK_IN_PROGRESS",
        "ROLLBACK_FAILED",
        "ROLLBACK_COMPLETE",
        "DELETE_IN_PROGRESS",
        "DELETE_FAILED",
        "DELETE_COMPLETE",
        "UPDATE_IN_PROGRESS",
        "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS",
        "UPDATE_COMPLETE",
        "UPDATE_ROLLBACK_IN_PROGRESS",
        "UPDATE_ROLLBACK_FAILED",
        "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS",
        "UPDATE_ROLLBACK_COMPLETE",
        "REVIEW_IN_PROGRESS"
      ]
    },
    "StackStatusFilter":{
      "type":"list",
      "member":{"shape":"StackStatus"}
    },
    "StackStatusReason":{"type":"string"},
    "StackSummaries":{
      "type":"list",
      "member":{"shape":"StackSummary"}
    },
    "StackSummary":{
      "type":"structure",
      "required":[
        "StackName",
        "CreationTime",
        "StackStatus"
      ],
      "members":{
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>Unique stack identifier.</p>"
        },
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name associated with the stack.</p>"
        },
        "TemplateDescription":{
          "shape":"TemplateDescription",
          "documentation":"<p>The template description of the template used to create the stack.</p>"
        },
        "CreationTime":{
          "shape":"CreationTime",
          "documentation":"<p>The time the stack was created.</p>"
        },
        "LastUpdatedTime":{
          "shape":"LastUpdatedTime",
          "documentation":"<p>The time the stack was last updated. This field will only be returned if the stack has been updated at least once.</p>"
        },
        "DeletionTime":{
          "shape":"DeletionTime",
          "documentation":"<p>The time the stack was deleted.</p>"
        },
        "StackStatus":{
          "shape":"StackStatus",
          "documentation":"<p>The current status of the stack.</p>"
        },
        "StackStatusReason":{
          "shape":"StackStatusReason",
          "documentation":"<p>Success/Failure message associated with the stack status.</p>"
        },
        "ParentId":{
          "shape":"StackId",
          "documentation":"<p>For nested stacks--stacks created as resources for another stack--the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html\">Working with Nested Stacks</a> in the <i>AWS CloudFormation User Guide</i>.</p>"
        },
        "RootId":{
          "shape":"StackId",
          "documentation":"<p>For nested stacks--stacks created as resources for another stack--the stack ID of the the top-level stack to which the nested stack ultimately belongs.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html\">Working with Nested Stacks</a> in the <i>AWS CloudFormation User Guide</i>.</p>"
        }
      },
      "documentation":"<p>The StackSummary Data Type</p>"
    },
    "Stacks":{
      "type":"list",
      "member":{"shape":"Stack"}
    },
    "StageList":{
      "type":"list",
      "member":{"shape":"TemplateStage"}
    },
    "StaleRequestException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Another operation has been performed on this stack set since the specified operation was performed. </p>",
      "error":{
        "code":"StaleRequestException",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true
    },
    "StopStackSetOperationInput":{
      "type":"structure",
      "required":[
        "StackSetName",
        "OperationId"
      ],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set that you want to stop the operation for.</p>"
        },
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The ID of the stack operation. </p>"
        }
      }
    },
    "StopStackSetOperationOutput":{
      "type":"structure",
      "members":{
      }
    },
    "Tag":{
      "type":"structure",
      "required":[
        "Key",
        "Value"
      ],
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p> <i>Required</i>. A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. Tags owned by Amazon Web Services (AWS) have the reserved prefix: <code>aws:</code>.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p> <i>Required</i>. A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.</p>"
        }
      },
      "documentation":"<p>The Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation stack.</p>"
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":1
    },
    "Tags":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":50
    },
    "TemplateBody":{
      "type":"string",
      "min":1
    },
    "TemplateDescription":{"type":"string"},
    "TemplateParameter":{
      "type":"structure",
      "members":{
        "ParameterKey":{
          "shape":"ParameterKey",
          "documentation":"<p>The name associated with the parameter.</p>"
        },
        "DefaultValue":{
          "shape":"ParameterValue",
          "documentation":"<p>The default value associated with the parameter.</p>"
        },
        "NoEcho":{
          "shape":"NoEcho",
          "documentation":"<p>Flag indicating whether the parameter should be displayed as plain text in logs and UIs.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>User defined description associated with the parameter.</p>"
        }
      },
      "documentation":"<p>The TemplateParameter data type.</p>"
    },
    "TemplateParameters":{
      "type":"list",
      "member":{"shape":"TemplateParameter"}
    },
    "TemplateStage":{
      "type":"string",
      "enum":[
        "Original",
        "Processed"
      ]
    },
    "TemplateURL":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "TimeoutMinutes":{
      "type":"integer",
      "min":1
    },
    "Timestamp":{"type":"timestamp"},
    "TokenAlreadyExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A client request token already exists.</p>",
      "error":{
        "code":"TokenAlreadyExistsException",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TransformName":{"type":"string"},
    "TransformsList":{
      "type":"list",
      "member":{"shape":"TransformName"}
    },
    "Type":{"type":"string"},
    "UpdateStackInput":{
      "type":"structure",
      "required":["StackName"],
      "members":{
        "StackName":{
          "shape":"StackName",
          "documentation":"<p>The name or unique stack ID of the stack to update.</p>"
        },
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>"
        },
        "TemplateURL":{
          "shape":"TemplateURL",
          "documentation":"<p>Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket. For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>"
        },
        "UsePreviousTemplate":{
          "shape":"UsePreviousTemplate",
          "documentation":"<p>Reuse the existing template that is associated with the stack that you are updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>"
        },
        "StackPolicyDuringUpdateBody":{
          "shape":"StackPolicyDuringUpdateBody",
          "documentation":"<p>Structure containing the temporary overriding stack policy body. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used.</p>"
        },
        "StackPolicyDuringUpdateURL":{
          "shape":"StackPolicyDuringUpdateURL",
          "documentation":"<p>Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same region as the stack. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used.</p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html\">Parameter</a> data type.</p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>A list of values that you must specify before AWS CloudFormation can update certain stacks. Some stack templates might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter.</p> <p>The only valid values are <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>. The following resources require you to specify this parameter: <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html\"> AWS::IAM::AccessKey</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html\"> AWS::IAM::Group</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html\"> AWS::IAM::InstanceProfile</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html\"> AWS::IAM::Policy</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html\"> AWS::IAM::Role</a>, <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html\"> AWS::IAM::User</a>, and <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html\"> AWS::IAM::UserToGroupAddition</a>. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <p>If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify <code>CAPABILITY_NAMED_IAM</code>. If you don't specify this parameter, this action returns an <code>InsufficientCapabilities</code> error.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities\">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p>"
        },
        "ResourceTypes":{
          "shape":"ResourceTypes",
          "documentation":"<p>The template resource types that you have permissions to work with for this update stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html\">Controlling Access with AWS Identity and Access Management</a>.</p>"
        },
        "RoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to update the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>"
        },
        "RollbackConfiguration":{
          "shape":"RollbackConfiguration",
          "documentation":"<p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>"
        },
        "StackPolicyBody":{
          "shape":"StackPolicyBody",
          "documentation":"<p>Structure containing a new stack policy body. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged.</p>"
        },
        "StackPolicyURL":{
          "shape":"StackPolicyURL",
          "documentation":"<p>Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged.</p>"
        },
        "NotificationARNs":{
          "shape":"NotificationARNs",
          "documentation":"<p>Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that AWS CloudFormation associates with the stack. Specify an empty list to remove all notification topics.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags.</p> <p>If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags. If you specify an empty value, AWS CloudFormation removes all associated tags.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to update a stack with the same name. You might retry <code>UpdateStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>"
        }
      },
      "documentation":"<p>The input for an <a>UpdateStack</a> action.</p>"
    },
    "UpdateStackInstancesInput":{
      "type":"structure",
      "required":[
        "StackSetName",
        "Accounts",
        "Regions"
      ],
      "members":{
        "StackSetName":{
          "shape":"StackSetNameOrId",
          "documentation":"<p>The name or unique ID of the stack set associated with the stack instances.</p>"
        },
        "Accounts":{
          "shape":"AccountList",
          "documentation":"<p>The names of one or more AWS accounts for which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and regions.</p>"
        },
        "Regions":{
          "shape":"RegionList",
          "documentation":"<p>The names of one or more regions in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and regions.</p>"
        },
        "ParameterOverrides":{
          "shape":"Parameters",
          "documentation":"<p> A list of input parameters whose values you want to update for the specified stack instances. </p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance update operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave a parameter set to its present value, you can do one of the following:</p> <ul> <li> <p>Do not include the parameter in the list.</p> </li> <li> <p>Include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You cannot specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> </ul> </li> <li> <p>To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.</p> </li> <li> <p>To leave all parameters set to their present values, do not specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <code>UpdateStackSet</code> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html\">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>"
        },
        "OperationPreferences":{
          "shape":"StackSetOperationPreferences",
          "documentation":"<p>Preferences for how AWS CloudFormation performs this stack set operation.</p>"
        },
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique identifier for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p>",
          "idempotencyToken":true
        }
      }
    },
    "UpdateStackInstancesOutput":{
      "type":"structure",
      "members":{
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique identifier for this stack set operation. </p>"
        }
      }
    },
    "UpdateStackOutput":{
      "type":"structure",
      "members":{
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>Unique identifier of the stack.</p>"
        }
      },
      "documentation":"<p>The output for an <a>UpdateStack</a> action.</p>"
    },
    "UpdateStackSetInput":{
      "type":"structure",
      "required":["StackSetName"],
      "members":{
        "StackSetName":{
          "shape":"StackSetName",
          "documentation":"<p>The name or unique ID of the stack set that you want to update.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>A brief description of updates that you are making.</p>"
        },
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>"
        },
        "TemplateURL":{
          "shape":"TemplateURL",
          "documentation":"<p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true. </p>"
        },
        "UsePreviousTemplate":{
          "shape":"UsePreviousTemplate",
          "documentation":"<p>Use the existing template that's associated with the stack set that you're updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true. </p>"
        },
        "Parameters":{
          "shape":"Parameters",
          "documentation":"<p>A list of input parameters for the stack set template. </p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>A list of values that you must specify before AWS CloudFormation can create certain stack sets. Some stack set templates might include resources that can affect permissions in your AWS account—for example, by creating new AWS Identity and Access Management (IAM) users. For those stack sets, you must explicitly acknowledge their capabilities by specifying this parameter.</p> <p>The only valid values are CAPABILITY_IAM and CAPABILITY_NAMED_IAM. The following resources require you to specify this parameter: </p> <ul> <li> <p>AWS::IAM::AccessKey</p> </li> <li> <p>AWS::IAM::Group</p> </li> <li> <p>AWS::IAM::InstanceProfile</p> </li> <li> <p>AWS::IAM::Policy</p> </li> <li> <p>AWS::IAM::Role</p> </li> <li> <p>AWS::IAM::User</p> </li> <li> <p>AWS::IAM::UserToGroupAddition</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions that are associated with them and edit their permissions if necessary.</p> <p>If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify this parameter, this action returns an <code>InsufficientCapabilities</code> error.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities\">Acknowledging IAM Resources in AWS CloudFormation Templates.</a> </p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags.</p> <p>If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this stack set. This means:</p> <ul> <li> <p>If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags. </p> </li> <li> <p>If you specify <i>any</i> tags using this parameter, you must specify <i>all</i> the tags that you want associated with this stack set, even tags you've specifed before (for example, when creating the stack set or during a previous update of the stack set.). Any tags that you don't include in the updated list of tags are removed from the stack set, and therefore from the stacks and resources as well. </p> </li> <li> <p>If you specify an empty value, AWS CloudFormation removes all currently associated tags.</p> </li> </ul> <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, AWS CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the stack set from the list of tags you specify, AWS CloudFormation assumes that you want to remove those tags from the stack set, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire <code>UpdateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not updated.</p>"
        },
        "OperationPreferences":{
          "shape":"StackSetOperationPreferences",
          "documentation":"<p>Preferences for how AWS CloudFormation performs this stack set operation.</p>"
        },
        "AdministrationRoleARN":{
          "shape":"RoleARN",
          "documentation":"<p>The Amazon Resource Number (ARN) of the IAM role to use to update this stack set.</p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html\">Define Permissions for Multiple Administrators</a> in the <i>AWS CloudFormation User Guide</i>.</p> <p> If you specify a customized administrator role, AWS CloudFormation uses that role to update the stack. If you do not specify a customized administrator role, AWS CloudFormation performs the update using the role previously associated with the stack set, so long as you have permissions to perform operations on the stack set.</p>"
        },
        "ExecutionRoleName":{
          "shape":"ExecutionRoleName",
          "documentation":"<p>The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, AWS CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets. </p> <p> If you specify a customized execution role, AWS CloudFormation uses that role to update the stack. If you do not specify a customized execution role, AWS CloudFormation performs the update using the role previously associated with the stack set, so long as you have permissions to perform operations on the stack set.</p>"
        },
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique ID for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, AWS CloudFormation generates one automatically.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>",
          "idempotencyToken":true
        },
        "Accounts":{
          "shape":"AccountList",
          "documentation":"<p>The accounts in which to update associated stack instances. If you specify accounts, you must also specify the regions in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, AWS CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and regions, while leaving all other stack instances with their existing stack instance status. </p>"
        },
        "Regions":{
          "shape":"RegionList",
          "documentation":"<p>The regions in which to update associated stack instances. If you specify regions, you must also specify accounts in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, AWS CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and regions, while leaving all other stack instances with their existing stack instance status. </p>"
        }
      }
    },
    "UpdateStackSetOutput":{
      "type":"structure",
      "members":{
        "OperationId":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The unique ID for this stack set operation.</p>"
        }
      }
    },
    "UpdateTerminationProtectionInput":{
      "type":"structure",
      "required":[
        "EnableTerminationProtection",
        "StackName"
      ],
      "members":{
        "EnableTerminationProtection":{
          "shape":"EnableTerminationProtection",
          "documentation":"<p>Whether to enable termination protection on the specified stack.</p>"
        },
        "StackName":{
          "shape":"StackNameOrId",
          "documentation":"<p>The name or unique ID of the stack for which you want to set termination protection.</p>"
        }
      }
    },
    "UpdateTerminationProtectionOutput":{
      "type":"structure",
      "members":{
        "StackId":{
          "shape":"StackId",
          "documentation":"<p>The unique ID of the stack.</p>"
        }
      }
    },
    "Url":{"type":"string"},
    "UsePreviousTemplate":{"type":"boolean"},
    "UsePreviousValue":{"type":"boolean"},
    "ValidateTemplateInput":{
      "type":"structure",
      "members":{
        "TemplateBody":{
          "shape":"TemplateBody",
          "documentation":"<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>"
        },
        "TemplateURL":{
          "shape":"TemplateURL",
          "documentation":"<p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>"
        }
      },
      "documentation":"<p>The input for <a>ValidateTemplate</a> action.</p>"
    },
    "ValidateTemplateOutput":{
      "type":"structure",
      "members":{
        "Parameters":{
          "shape":"TemplateParameters",
          "documentation":"<p>A list of <code>TemplateParameter</code> structures.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description found within the template.</p>"
        },
        "Capabilities":{
          "shape":"Capabilities",
          "documentation":"<p>The capabilities found within the template. If your template contains IAM resources, you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use the <a>CreateStack</a> or <a>UpdateStack</a> actions with your template; otherwise, those actions return an InsufficientCapabilities error.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities\">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p>"
        },
        "CapabilitiesReason":{
          "shape":"CapabilitiesReason",
          "documentation":"<p>The list of resources that generated the values in the <code>Capabilities</code> response element.</p>"
        },
        "DeclaredTransforms":{
          "shape":"TransformsList",
          "documentation":"<p>A list of the transforms that are declared in the template.</p>"
        }
      },
      "documentation":"<p>The output for <a>ValidateTemplate</a> action.</p>"
    },
    "Version":{"type":"string"}
  },
  "documentation":"<fullname>AWS CloudFormation</fullname> <p>AWS CloudFormation allows you to create and manage AWS infrastructure deployments predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly scalable, cost-effective applications without creating or configuring the underlying AWS infrastructure.</p> <p>With AWS CloudFormation, you declare all of your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. AWS CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you.</p> <p>For more information about AWS CloudFormation, see the <a href=\"http://aws.amazon.com/cloudformation/\">AWS CloudFormation Product Page</a>.</p> <p>Amazon CloudFormation makes use of other AWS products. If you need additional technical information about a specific AWS product, you can find the product's technical documentation at <a href=\"http://docs.aws.amazon.com/\">docs.aws.amazon.com</a>.</p>"
}
