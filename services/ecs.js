awsim['ecs'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2014-11-13",
    "endpointPrefix":"ecs",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"Amazon ECS",
    "serviceFullName":"Amazon EC2 Container Service",
    "serviceId":"ECS",
    "signatureVersion":"v4",
    "targetPrefix":"AmazonEC2ContainerServiceV20141113",
    "uid":"ecs-2014-11-13"
  },
  "operations":{
    "CreateCluster":{
      "name":"CreateCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateClusterRequest"},
      "output":{"shape":"CreateClusterResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the service-linked role for your account so that required resources in other AWS services can be managed on your behalf. However, if the IAM user that makes the call does not have permissions to create the service-linked role, it is not created. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html\">Using Service-Linked Roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>"
    },
    "CreateService":{
      "name":"CreateService",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateServiceRequest"},
      "output":{"shape":"CreateServiceResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"},
        {"shape":"UnsupportedFeatureException"},
        {"shape":"PlatformUnknownException"},
        {"shape":"PlatformTaskDefinitionIncompatibilityException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Runs and maintains a desired number of tasks from a specified task definition. If the number of tasks running in a service drops below <code>desiredCount</code>, Amazon ECS spawns another copy of the task in the specified cluster. To update an existing service, see <a>UpdateService</a>.</p> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind a load balancer. The load balancer distributes traffic across the tasks that are associated with the service. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html\">Service Load Balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can optionally specify a deployment configuration for your service. During a deployment, the service scheduler uses the <code>minimumHealthyPercent</code> and <code>maximumPercent</code> parameters to determine the deployment strategy. The deployment is triggered by changing the task definition or the desired count of a service with an <a>UpdateService</a> operation.</p> <p>The <code>minimumHealthyPercent</code> represents a lower limit on the number of your service's tasks that must remain in the <code>RUNNING</code> state during a deployment, as a percentage of the <code>desiredCount</code> (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a <code>desiredCount</code> of four tasks and a <code>minimumHealthyPercent</code> of 50%, the scheduler can stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that <i>do not</i> use a load balancer are considered healthy if they are in the <code>RUNNING</code> state. Tasks for services that <i>do</i> use a load balancer are considered healthy if they are in the <code>RUNNING</code> state and the container instance they are hosted on is reported as healthy by the load balancer. The default value for a replica service for <code>minimumHealthyPercent</code> is 50% in the console and 100% for the AWS CLI, the AWS SDKs, and the APIs. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0% for the AWS CLI, the AWS SDKs, and the APIs and 50% for the console.</p> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of your service's tasks that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment, as a percentage of the <code>desiredCount</code> (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your replica service has a <code>desiredCount</code> of four tasks and a <code>maximumPercent</code> value of 200%, the scheduler can start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for a replica service for <code>maximumPercent</code> is 200%. If you are using a daemon service type, the <code>maximumPercent</code> should remain at 100%, which is the default value.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster using the following logic:</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy) with the <code>placementStrategy</code> parameter):</p> <ul> <li> <p>Sort the valid container instances, giving priority to instances that have the fewest number of running tasks for this service in their respective Availability Zone. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul>"
    },
    "DeleteAttributes":{
      "name":"DeleteAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteAttributesRequest"},
      "output":{"shape":"DeleteAttributesResponse"},
      "errors":[
        {"shape":"ClusterNotFoundException"},
        {"shape":"TargetNotFoundException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Deletes one or more custom attributes from an Amazon ECS resource.</p>"
    },
    "DeleteCluster":{
      "name":"DeleteCluster",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteClusterRequest"},
      "output":{"shape":"DeleteClusterResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"},
        {"shape":"ClusterContainsContainerInstancesException"},
        {"shape":"ClusterContainsServicesException"},
        {"shape":"ClusterContainsTasksException"}
      ],
      "documentation":"<p>Deletes the specified cluster. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>"
    },
    "DeleteService":{
      "name":"DeleteService",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteServiceRequest"},
      "output":{"shape":"DeleteServiceResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"},
        {"shape":"ServiceNotFoundException"}
      ],
      "documentation":"<p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you cannot delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in <a>ListServices</a> API operations. After the tasks have stopped, then the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with <a>DescribeServices</a> API operations. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> API operations on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you will receive an error.</p> </important>"
    },
    "DeregisterContainerInstance":{
      "name":"DeregisterContainerInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeregisterContainerInstanceRequest"},
      "output":{"shape":"DeregisterContainerInstanceResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, you should stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it does not terminate the EC2 instance; if you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents are not automatically deregistered when terminated).</p> </note>"
    },
    "DeregisterTaskDefinition":{
      "name":"DeregisterTaskDefinition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeregisterTaskDefinitionRequest"},
      "output":{"shape":"DeregisterTaskDefinitionResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count.</p> <p>You cannot use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you cannot update an existing service to reference an <code>INACTIVE</code> task definition (although there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect).</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely; however, this behavior is subject to change in the future, so you should not rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note>"
    },
    "DescribeClusters":{
      "name":"DescribeClusters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeClustersRequest"},
      "output":{"shape":"DescribeClustersResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Describes one or more of your clusters.</p>"
    },
    "DescribeContainerInstances":{
      "name":"DescribeContainerInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeContainerInstancesRequest"},
      "output":{"shape":"DescribeContainerInstancesResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Describes Amazon Elastic Container Service container instances. Returns metadata about registered and remaining resources on each container instance requested.</p>"
    },
    "DescribeServices":{
      "name":"DescribeServices",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeServicesRequest"},
      "output":{"shape":"DescribeServicesResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Describes the specified services running in your cluster.</p>"
    },
    "DescribeTaskDefinition":{
      "name":"DescribeTaskDefinition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTaskDefinitionRequest"},
      "output":{"shape":"DescribeTaskDefinitionResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>"
    },
    "DescribeTasks":{
      "name":"DescribeTasks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTasksRequest"},
      "output":{"shape":"DescribeTasksResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Describes a specified task or tasks.</p>"
    },
    "DiscoverPollEndpoint":{
      "name":"DiscoverPollEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DiscoverPollEndpointRequest"},
      "output":{"shape":"DiscoverPollEndpointResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"}
      ],
      "documentation":"<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>"
    },
    "ListAttributes":{
      "name":"ListAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAttributesRequest"},
      "output":{"shape":"ListAttributesResponse"},
      "errors":[
        {"shape":"ClusterNotFoundException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). </p>"
    },
    "ListClusters":{
      "name":"ListClusters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListClustersRequest"},
      "output":{"shape":"ListClustersResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Returns a list of existing clusters.</p>"
    },
    "ListContainerInstances":{
      "name":"ListContainerInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListContainerInstancesRequest"},
      "output":{"shape":"ListContainerInstancesResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html\">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "ListServices":{
      "name":"ListServices",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListServicesRequest"},
      "output":{"shape":"ListServicesResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Lists the services that are running in a specified cluster.</p>"
    },
    "ListTaskDefinitionFamilies":{
      "name":"ListTaskDefinitionFamilies",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTaskDefinitionFamiliesRequest"},
      "output":{"shape":"ListTaskDefinitionFamiliesResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any <code>ACTIVE</code> task definition revisions).</p> <p>You can filter out task definition families that do not contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>"
    },
    "ListTaskDefinitions":{
      "name":"ListTaskDefinitions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTaskDefinitionsRequest"},
      "output":{"shape":"ListTaskDefinitionsResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.</p>"
    },
    "ListTasks":{
      "name":"ListTasks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTasksRequest"},
      "output":{"shape":"ListTasksResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"},
        {"shape":"ServiceNotFoundException"}
      ],
      "documentation":"<p>Returns a list of tasks for a specified cluster. You can filter the results by family name, by a particular container instance, or by the desired status of the task with the <code>family</code>, <code>containerInstance</code>, and <code>desiredStatus</code> parameters.</p> <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour. </p>"
    },
    "PutAttributes":{
      "name":"PutAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutAttributesRequest"},
      "output":{"shape":"PutAttributesResponse"},
      "errors":[
        {"shape":"ClusterNotFoundException"},
        {"shape":"TargetNotFoundException"},
        {"shape":"AttributeLimitExceededException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Create or update an attribute on an Amazon ECS resource. If the attribute does not exist, it is created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes\">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "RegisterContainerInstance":{
      "name":"RegisterContainerInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RegisterContainerInstanceRequest"},
      "output":{"shape":"RegisterContainerInstanceResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>"
    },
    "RegisterTaskDefinition":{
      "name":"RegisterTaskDefinition",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RegisterTaskDefinitionRequest"},
      "output":{"shape":"RegisterTaskDefinitionResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html\">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify an IAM role for your task with the <code>taskRoleArn</code> parameter. When you specify an IAM role for a task, its containers can then use the latest versions of the AWS CLI or SDKs to make API requests to the AWS services that are specified in the IAM policy associated with the role. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html\">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href=\"https://docs.docker.com/engine/reference/run/#/network-settings\">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html\">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "RunTask":{
      "name":"RunTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RunTaskRequest"},
      "output":{"shape":"RunTaskResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"},
        {"shape":"UnsupportedFeatureException"},
        {"shape":"PlatformUnknownException"},
        {"shape":"PlatformTaskDefinitionIncompatibilityException"},
        {"shape":"AccessDeniedException"},
        {"shape":"BlockedException"}
      ],
      "documentation":"<p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html\">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <p>The Amazon ECS API follows an eventual consistency model, due to the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. You should keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>"
    },
    "StartTask":{
      "name":"StartTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartTaskRequest"},
      "output":{"shape":"StartTaskResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html\">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "StopTask":{
      "name":"StopTask",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopTaskRequest"},
      "output":{"shape":"StopTaskResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Stops a running task.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a default 30-second timeout, after which <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html\">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>"
    },
    "SubmitContainerStateChange":{
      "name":"SubmitContainerStateChange",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SubmitContainerStateChangeRequest"},
      "output":{"shape":"SubmitContainerStateChangeResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>"
    },
    "SubmitTaskStateChange":{
      "name":"SubmitTaskStateChange",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SubmitTaskStateChangeRequest"},
      "output":{"shape":"SubmitTaskStateChangeResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>"
    },
    "UpdateContainerAgent":{
      "name":"UpdateContainerAgent",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateContainerAgentRequest"},
      "output":{"shape":"UpdateContainerAgentResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"},
        {"shape":"UpdateInProgressException"},
        {"shape":"NoUpdateAvailableException"},
        {"shape":"MissingVersionException"}
      ],
      "documentation":"<p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent does not interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <p> <code>UpdateContainerAgent</code> requires the Amazon ECS-optimized AMI or Amazon Linux with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent\">Manually Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "UpdateContainerInstancesState":{
      "name":"UpdateContainerInstancesState",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateContainerInstancesStateRequest"},
      "output":{"shape":"UpdateContainerInstancesStateResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"}
      ],
      "documentation":"<p>Modifies the status of an Amazon ECS container instance.</p> <p>You can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size. </p> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they are in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they are in the <code>RUNNING</code> state and the container instance they are hosted on is reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement, which enables you to define the replacement batch size. For example, if <code>desiredCount</code> of four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained (provided that the cluster resources required to do this are available). If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service are not affected; you must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When you set a container instance to <code>ACTIVE</code>, the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>"
    },
    "UpdateService":{
      "name":"UpdateService",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateServiceRequest"},
      "output":{"shape":"UpdateServiceResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"ClientException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClusterNotFoundException"},
        {"shape":"ServiceNotFoundException"},
        {"shape":"ServiceNotActiveException"},
        {"shape":"PlatformUnknownException"},
        {"shape":"PlatformTaskDefinitionIncompatibilityException"},
        {"shape":"AccessDeniedException"}
      ],
      "documentation":"<p>Modifies the desired count, deployment configuration, network configuration, or task definition used in a service.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you do not need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they are in the <code>RUNNING</code> state and the container instance they are hosted on is reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment, which enables you to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout, after which <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic:</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy):</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul>"
    }
  },
  "shapes":{
    "AccessDeniedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You do not have authorization to perform the requested action.</p>",
      "exception":true
    },
    "AgentUpdateStatus":{
      "type":"string",
      "enum":[
        "PENDING",
        "STAGING",
        "STAGED",
        "UPDATING",
        "UPDATED",
        "FAILED"
      ]
    },
    "AssignPublicIp":{
      "type":"string",
      "enum":[
        "ENABLED",
        "DISABLED"
      ]
    },
    "Attachment":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The unique identifier for the attachment.</p>"
        },
        "type":{
          "shape":"String",
          "documentation":"<p>The type of the attachment, such as <code>ElasticNetworkInterface</code>.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p> The status of the attachment. Valid values are <code>PRECREATED</code>, <code>CREATED</code>, <code>ATTACHING</code>, <code>ATTACHED</code>, <code>DETACHING</code>, <code>DETACHED</code>, and <code>DELETED</code>.</p>"
        },
        "details":{
          "shape":"AttachmentDetails",
          "documentation":"<p>Details of the attachment. For elastic network interfaces, this includes the network interface ID, the MAC address, the subnet ID, and the private IPv4 address.</p>"
        }
      },
      "documentation":"<p>An object representing a container instance or task attachment.</p>"
    },
    "AttachmentDetails":{
      "type":"list",
      "member":{"shape":"KeyValuePair"}
    },
    "AttachmentStateChange":{
      "type":"structure",
      "required":[
        "attachmentArn",
        "status"
      ],
      "members":{
        "attachmentArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the attachment.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the attachment.</p>"
        }
      },
      "documentation":"<p>An object representing a change in state for a task attachment.</p>"
    },
    "AttachmentStateChanges":{
      "type":"list",
      "member":{"shape":"AttachmentStateChange"}
    },
    "Attachments":{
      "type":"list",
      "member":{"shape":"Attachment"}
    },
    "Attribute":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the attribute. Up to 128 letters (uppercase and lowercase), numbers, hyphens, underscores, and periods are allowed.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The value of the attribute. Up to 128 letters (uppercase and lowercase), numbers, hyphens, underscores, periods, at signs (@), forward slashes, colons, and spaces are allowed.</p>"
        },
        "targetType":{
          "shape":"TargetType",
          "documentation":"<p>The type of the target with which to attach the attribute. This parameter is required if you use the short form ID for a resource instead of the full ARN.</p>"
        },
        "targetId":{
          "shape":"String",
          "documentation":"<p>The ID of the target. You can specify the short form ID for a resource or the full Amazon Resource Name (ARN).</p>"
        }
      },
      "documentation":"<p>An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes\">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "AttributeLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You can apply up to 10 custom attributes per resource. You can view the attributes of a resource with <a>ListAttributes</a>. You can remove existing attributes on a resource with <a>DeleteAttributes</a>.</p>",
      "exception":true
    },
    "Attributes":{
      "type":"list",
      "member":{"shape":"Attribute"}
    },
    "AwsVpcConfiguration":{
      "type":"structure",
      "required":["subnets"],
      "members":{
        "subnets":{
          "shape":"StringList",
          "documentation":"<p>The subnets associated with the task or service. There is a limit of 16 subnets able to be specified per <code>AwsVpcConfiguration</code>.</p> <note> <p>All specified subnets must be from the same VPC.</p> </note>"
        },
        "securityGroups":{
          "shape":"StringList",
          "documentation":"<p>The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups able to be specified per <code>AwsVpcConfiguration</code>.</p> <note> <p>All specified security groups must be from the same VPC.</p> </note>"
        },
        "assignPublicIp":{
          "shape":"AssignPublicIp",
          "documentation":"<p>Whether the task's elastic network interface receives a public IP address. The default value is <code>DISABLED</code>.</p>"
        }
      },
      "documentation":"<p>An object representing the networking details for a task or service.</p>"
    },
    "BlockedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Your AWS account has been blocked. <a href=\"http://aws.amazon.com/contact-us/\">Contact AWS Support</a> for more information.</p>",
      "exception":true
    },
    "Boolean":{"type":"boolean"},
    "BoxedBoolean":{
      "type":"boolean",
      "box":true
    },
    "BoxedInteger":{
      "type":"integer",
      "box":true
    },
    "ClientException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>",
      "exception":true
    },
    "Cluster":{
      "type":"structure",
      "members":{
        "clusterArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the cluster. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the cluster, the AWS account ID of the cluster owner, the <code>cluster</code> namespace, and then the cluster name. For example, <code>arn:aws:ecs:<i>region</i>:<i>012345678910</i>:cluster/<i>test</i> </code>..</p>"
        },
        "clusterName":{
          "shape":"String",
          "documentation":"<p>A user-generated string that you use to identify your cluster.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the cluster. The valid values are <code>ACTIVE</code> or <code>INACTIVE</code>. <code>ACTIVE</code> indicates that you can register container instances with the cluster and the associated instances can accept tasks.</p>"
        },
        "registeredContainerInstancesCount":{
          "shape":"Integer",
          "documentation":"<p>The number of container instances registered into the cluster. This includes container instances in both <code>ACTIVE</code> and <code>DRAINING</code> status.</p>"
        },
        "runningTasksCount":{
          "shape":"Integer",
          "documentation":"<p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.</p>"
        },
        "pendingTasksCount":{
          "shape":"Integer",
          "documentation":"<p>The number of tasks in the cluster that are in the <code>PENDING</code> state.</p>"
        },
        "activeServicesCount":{
          "shape":"Integer",
          "documentation":"<p>The number of services that are running on the cluster in an <code>ACTIVE</code> state. You can view these services with <a>ListServices</a>.</p>"
        },
        "statistics":{
          "shape":"Statistics",
          "documentation":"<p>Additional information about your clusters that are separated by launch type, including:</p> <ul> <li> <p>runningEC2TasksCount</p> </li> <li> <p>RunningFargateTasksCount</p> </li> <li> <p>pendingEC2TasksCount</p> </li> <li> <p>pendingFargateTasksCount</p> </li> <li> <p>activeEC2ServiceCount</p> </li> <li> <p>activeFargateServiceCount</p> </li> <li> <p>drainingEC2ServiceCount</p> </li> <li> <p>drainingFargateServiceCount</p> </li> </ul>"
        }
      },
      "documentation":"<p>A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.</p>"
    },
    "ClusterContainsContainerInstancesException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You cannot delete a cluster that has registered container instances. You must first deregister the container instances before you can delete the cluster. For more information, see <a>DeregisterContainerInstance</a>.</p>",
      "exception":true
    },
    "ClusterContainsServicesException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You cannot delete a cluster that contains services. You must first update the service to reduce its desired task count to 0 and then delete the service. For more information, see <a>UpdateService</a> and <a>DeleteService</a>.</p>",
      "exception":true
    },
    "ClusterContainsTasksException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You cannot delete a cluster that has active tasks.</p>",
      "exception":true
    },
    "ClusterField":{
      "type":"string",
      "enum":["STATISTICS"]
    },
    "ClusterFieldList":{
      "type":"list",
      "member":{"shape":"ClusterField"}
    },
    "ClusterNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are region-specific.</p>",
      "exception":true
    },
    "Clusters":{
      "type":"list",
      "member":{"shape":"Cluster"}
    },
    "Compatibility":{
      "type":"string",
      "enum":[
        "EC2",
        "FARGATE"
      ]
    },
    "CompatibilityList":{
      "type":"list",
      "member":{"shape":"Compatibility"}
    },
    "Connectivity":{
      "type":"string",
      "enum":[
        "CONNECTED",
        "DISCONNECTED"
      ]
    },
    "Container":{
      "type":"structure",
      "members":{
        "containerArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the container.</p>"
        },
        "taskArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the task.</p>"
        },
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the container.</p>"
        },
        "lastStatus":{
          "shape":"String",
          "documentation":"<p>The last known status of the container.</p>"
        },
        "exitCode":{
          "shape":"BoxedInteger",
          "documentation":"<p>The exit code returned from the container.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>A short (255 max characters) human-readable string to provide additional details about a running or stopped container.</p>"
        },
        "networkBindings":{
          "shape":"NetworkBindings",
          "documentation":"<p>The network bindings associated with the container.</p>"
        },
        "networkInterfaces":{
          "shape":"NetworkInterfaces",
          "documentation":"<p>The network interfaces associated with the container.</p>"
        },
        "healthStatus":{
          "shape":"HealthStatus",
          "documentation":"<p>The health status of the container. If health checks are not configured for this container in its task definition, then it reports health status as <code>UNKNOWN</code>.</p>"
        }
      },
      "documentation":"<p>A Docker container that is part of a task.</p>"
    },
    "ContainerDefinition":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of a container. If you are linking multiple containers together in a task definition, the <code>name</code> of one container can be entered in the <code>links</code> of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. This parameter maps to <code>name</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--name</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. </p>"
        },
        "image":{
          "shape":"String",
          "documentation":"<p>The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either <code> <i>repository-url</i>/<i>image</i>:<i>tag</i> </code> or <code> <i>repository-url</i>/<i>image</i>@<i>digest</i> </code>. Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to <code>Image</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>IMAGE</code> parameter of <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <ul> <li> <p>When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image are not propagated to already running tasks.</p> </li> <li> <p>Images in Amazon ECR repositories can be specified by either using the full <code>registry/repository:tag</code> or <code>registry/repository@digest</code>. For example, <code>012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;:latest</code> or <code>012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE</code>. </p> </li> <li> <p>Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or <code>mongo</code>).</p> </li> <li> <p>Images in other repositories on Docker Hub are qualified with an organization name (for example, <code>amazon/amazon-ecs-agent</code>).</p> </li> <li> <p>Images in other online repositories are qualified further by a domain name (for example, <code>quay.io/assemblyline/ubuntu</code>).</p> </li> </ul>"
        },
        "repositoryCredentials":{
          "shape":"RepositoryCredentials",
          "documentation":"<p>The private repository authentication credentials to use.</p>"
        },
        "cpu":{
          "shape":"Integer",
          "documentation":"<p>The number of <code>cpu</code> units reserved for the container. This parameter maps to <code>CpuShares</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <p>This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level <code>cpu</code> value.</p> <note> <p>You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the <a href=\"http://aws.amazon.com/ec2/instance-types/\">Amazon EC2 Instances</a> detail page by 1,024.</p> </note> <p>For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that is the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task would be guaranteed a minimum of 512 CPU units when needed, and each container could float to higher CPU usage if the other container was not using it, but if both tasks were 100% active all of the time, they would be limited to 512 CPU units.</p> <p>Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that is the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task would be guaranteed a minimum of 512 CPU units when needed, and each container could float to higher CPU usage if the other container was not using it, but if both tasks were 100% active all of the time, they would be limited to 512 CPU units.</p> <p>On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. For more information, see <a href=\"https://docs.docker.com/engine/reference/run/#cpu-share-constraint\">CPU share constraint</a> in the Docker documentation. The minimum valid CPU share value that the Linux kernel allows is 2; however, the CPU parameter is not required, and you can use CPU values below 2 in your container definitions. For CPU values below 2 (including null), the behavior varies based on your Amazon ECS container agent version:</p> <ul> <li> <p> <b>Agent versions less than or equal to 1.1.0:</b> Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to 2 CPU shares.</p> </li> <li> <p> <b>Agent versions greater than or equal to 1.2.0:</b> Null, zero, and CPU values of 1 are passed to Docker as 2.</p> </li> </ul> <p>On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that is described in the task definition.</p>"
        },
        "memory":{
          "shape":"BoxedInteger",
          "documentation":"<p>The hard limit (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. This parameter maps to <code>Memory</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--memory</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <p>If your containers are part of a task using the Fargate launch type, this field is optional and the only requirement is that the total amount of memory reserved for all containers within a task be lower than the task <code>memory</code> value.</p> <p>For containers that are part of a task using the EC2 launch type, you must specify a non-zero integer for one or both of <code>memory</code> or <code>memoryReservation</code> in container definitions. If you specify both, <code>memory</code> must be greater than <code>memoryReservation</code>. If you specify <code>memoryReservation</code>, then that value is subtracted from the available memory resources for the container instance on which the container is placed; otherwise, the value of <code>memory</code> is used.</p> <p>The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers. </p>"
        },
        "memoryReservation":{
          "shape":"BoxedInteger",
          "documentation":"<p>The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit; however, your container can consume more memory when it needs to, up to either the hard limit specified with the <code>memory</code> parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to <code>MemoryReservation</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--memory-reservation</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <p>You must specify a non-zero integer for one or both of <code>memory</code> or <code>memoryReservation</code> in container definitions. If you specify both, <code>memory</code> must be greater than <code>memoryReservation</code>. If you specify <code>memoryReservation</code>, then that value is subtracted from the available memory resources for the container instance on which the container is placed; otherwise, the value of <code>memory</code> is used.</p> <p>For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a <code>memoryReservation</code> of 128 MiB, and a <code>memory</code> hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.</p> <p>The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers. </p>"
        },
        "links":{
          "shape":"StringList",
          "documentation":"<p>The <code>link</code> parameter allows containers to communicate with each other without the need for port mappings. Only supported if the network mode of a task definition is set to <code>bridge</code>. The <code>name:internalName</code> construct is analogous to <code>name:alias</code> in Docker links. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. For more information about linking Docker containers, go to <a href=\"https://docs.docker.com/engine/userguide/networking/default_network/dockerlinks/\">https://docs.docker.com/engine/userguide/networking/default_network/dockerlinks/</a>. This parameter maps to <code>Links</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--link</code> option to <a href=\"https://docs.docker.com/engine/reference/commandline/run/\"> <code>docker run</code> </a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note> <important> <p>Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings.</p> </important>"
        },
        "portMappings":{
          "shape":"PortMappingList",
          "documentation":"<p>The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.</p> <p>For task definitions that use the <code>awsvpc</code> network mode, you should only specify the <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>Port mappings on Windows use the <code>NetNAT</code> gateway address rather than <code>localhost</code>. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself. </p> <p>This parameter maps to <code>PortBindings</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--publish</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. If the network mode of a task definition is set to <code>none</code>, then you can't specify port mappings. If the network mode of a task definition is set to <code>host</code>, then host ports must either be undefined or they must match the container port in the port mapping.</p> <note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <b>Network Bindings</b> section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the <code>networkBindings</code> section <a>DescribeTasks</a> responses.</p> </note>"
        },
        "essential":{
          "shape":"BoxedBoolean",
          "documentation":"<p>If the <code>essential</code> parameter of a container is marked as <code>true</code>, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the <code>essential</code> parameter of a container is marked as <code>false</code>, then its failure does not affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.</p> <p>All tasks must have at least one essential container. If you have an application that is composed of multiple containers, you should group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html\">Application Architecture</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "entryPoint":{
          "shape":"StringList",
          "documentation":"<important> <p>Early versions of the Amazon ECS container agent do not properly handle <code>entryPoint</code> parameters. If you have problems using <code>entryPoint</code>, update your container agent or enter your commands and arguments as <code>command</code> array items instead.</p> </important> <p>The entry point that is passed to the container. This parameter maps to <code>Entrypoint</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--entrypoint</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. For more information, see <a href=\"https://docs.docker.com/engine/reference/builder/#entrypoint\">https://docs.docker.com/engine/reference/builder/#entrypoint</a>.</p>"
        },
        "command":{
          "shape":"StringList",
          "documentation":"<p>The command that is passed to the container. This parameter maps to <code>Cmd</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. For more information, see <a href=\"https://docs.docker.com/engine/reference/builder/#cmd\">https://docs.docker.com/engine/reference/builder/#cmd</a>.</p>"
        },
        "environment":{
          "shape":"EnvironmentVariables",
          "documentation":"<p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--env</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <important> <p>We do not recommend using plaintext environment variables for sensitive information, such as credential data.</p> </important>"
        },
        "mountPoints":{
          "shape":"MountPointList",
          "documentation":"<p>The mount points for data volumes in your container.</p> <p>This parameter maps to <code>Volumes</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--volume</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <p>Windows containers can mount whole directories on the same drive as <code>$env:ProgramData</code>. Windows containers cannot mount directories on a different drive, and mount point cannot be across drives.</p>"
        },
        "volumesFrom":{
          "shape":"VolumeFromList",
          "documentation":"<p>Data volumes to mount from another container. This parameter maps to <code>VolumesFrom</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--volumes-from</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        },
        "linuxParameters":{
          "shape":"LinuxParameters",
          "documentation":"<p>Linux-specific modifications that are applied to the container, such as Linux <a>KernelCapabilities</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "hostname":{
          "shape":"String",
          "documentation":"<p>The hostname to use for your container. This parameter maps to <code>Hostname</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--hostname</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>The <code>hostname</code> parameter is not supported if using the <code>awsvpc</code> networkMode.</p> </note>"
        },
        "user":{
          "shape":"String",
          "documentation":"<p>The user name to use inside the container. This parameter maps to <code>User</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--user</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "workingDirectory":{
          "shape":"String",
          "documentation":"<p>The working directory in which to run commands inside the container. This parameter maps to <code>WorkingDir</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--workdir</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        },
        "disableNetworking":{
          "shape":"BoxedBoolean",
          "documentation":"<p>When this parameter is true, networking is disabled within the container. This parameter maps to <code>NetworkDisabled</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "privileged":{
          "shape":"BoxedBoolean",
          "documentation":"<p>When this parameter is true, the container is given elevated privileges on the host container instance (similar to the <code>root</code> user). This parameter maps to <code>Privileged</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--privileged</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers or tasks using the Fargate launch type.</p> </note>"
        },
        "readonlyRootFilesystem":{
          "shape":"BoxedBoolean",
          "documentation":"<p>When this parameter is true, the container is given read-only access to its root file system. This parameter maps to <code>ReadonlyRootfs</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--read-only</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "dnsServers":{
          "shape":"StringList",
          "documentation":"<p>A list of DNS servers that are presented to the container. This parameter maps to <code>Dns</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--dns</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "dnsSearchDomains":{
          "shape":"StringList",
          "documentation":"<p>A list of DNS search domains that are presented to the container. This parameter maps to <code>DnsSearch</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--dns-search</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "extraHosts":{
          "shape":"HostEntryList",
          "documentation":"<p>A list of hostnames and IP address mappings to append to the <code>/etc/hosts</code> file on the container. If using the Fargate launch type, this may be used to list non-Fargate hosts to which the container can talk. This parameter maps to <code>ExtraHosts</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--add-host</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "dockerSecurityOptions":{
          "shape":"StringList",
          "documentation":"<p>A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems. This field is not valid for containers in tasks using the Fargate launch type.</p> <p>This parameter maps to <code>SecurityOpt</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--security-opt</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>The Amazon ECS container agent running on a container instance must register with the <code>ECS_SELINUX_CAPABLE=true</code> or <code>ECS_APPARMOR_CAPABLE=true</code> environment variables before containers placed on that instance can use these security options. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html\">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "interactive":{
          "shape":"BoxedBoolean",
          "documentation":"<p>When this parameter is <code>true</code>, this allows you to deploy containerized applications that require <code>stdin</code> or a <code>tty</code> to be allocated. This parameter maps to <code>OpenStdin</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--interactive</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        },
        "pseudoTerminal":{
          "shape":"BoxedBoolean",
          "documentation":"<p>When this parameter is <code>true</code>, a TTY is allocated. This parameter maps to <code>Tty</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--tty</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        },
        "dockerLabels":{
          "shape":"DockerLabelsMap",
          "documentation":"<p>A key/value map of labels to add to the container. This parameter maps to <code>Labels</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--label</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep \"Server API version\"</code> </p>"
        },
        "ulimits":{
          "shape":"UlimitList",
          "documentation":"<p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--ulimit</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. Valid naming values are displayed in the <a>Ulimit</a> data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep \"Server API version\"</code> </p> <note> <p>This parameter is not supported for Windows containers.</p> </note>"
        },
        "logConfiguration":{
          "shape":"LogConfiguration",
          "documentation":"<p>The log configuration specification for the container.</p> <p>If using the Fargate launch type, the only supported value is <code>awslogs</code>.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--log-driver</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. By default, containers use the same logging driver that the Docker daemon uses; however the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href=\"https://docs.docker.com/engine/admin/logging/overview/\">Configure logging drivers</a> in the Docker documentation.</p> <note> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep \"Server API version\"</code> </p> <note> <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html\">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>"
        },
        "healthCheck":{
          "shape":"HealthCheck",
          "documentation":"<p>The health check command and associated configuration parameters for the container. This parameter maps to <code>HealthCheck</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>HEALTHCHECK</code> parameter of <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p>"
        },
        "systemControls":{
          "shape":"SystemControls",
          "documentation":"<p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--sysctl</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>It is not recommended that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task that also uses either the <code>awsvpc</code> or <code>host</code> network modes. When you do, the container that is started last will determine which <code>systemControls</code> parameters take effect.</p> </note>"
        }
      },
      "documentation":"<p>Container definitions are used in task definitions to describe the different containers that are launched as part of a task.</p>"
    },
    "ContainerDefinitions":{
      "type":"list",
      "member":{"shape":"ContainerDefinition"}
    },
    "ContainerInstance":{
      "type":"structure",
      "members":{
        "containerInstanceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the container instance. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the container instance, the AWS account ID of the container instance owner, the <code>container-instance</code> namespace, and then the container instance ID. For example, <code>arn:aws:ecs:<i>region</i>:<i>aws_account_id</i>:container-instance/<i>container_instance_ID</i> </code>.</p>"
        },
        "ec2InstanceId":{
          "shape":"String",
          "documentation":"<p>The EC2 instance ID of the container instance.</p>"
        },
        "version":{
          "shape":"Long",
          "documentation":"<p>The version counter for the container instance. Every time a container instance experiences a change that triggers a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS container instance state with CloudWatch Events, you can compare the version of a container instance reported by the Amazon ECS APIs with the version reported in CloudWatch Events for the container instance (inside the <code>detail</code> object) to verify that the version in your event stream is current.</p>"
        },
        "versionInfo":{
          "shape":"VersionInfo",
          "documentation":"<p>The version information for the Amazon ECS container agent and Docker daemon running on the container instance.</p>"
        },
        "remainingResources":{
          "shape":"Resources",
          "documentation":"<p>For CPU and memory resource types, this parameter describes the remaining CPU and memory that has not already been allocated to tasks and is therefore available for new tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent (at instance registration time) and any task containers that have reserved port mappings on the host (with the <code>host</code> or <code>bridge</code> network mode). Any port that is not specified here is available for new tasks.</p>"
        },
        "registeredResources":{
          "shape":"Resources",
          "documentation":"<p>For CPU and memory resource types, this parameter describes the amount of each resource that was available on the container instance when the container agent registered it with Amazon ECS; this value represents the total amount of CPU and memory that can be allocated on this container instance to tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent when it registered the container instance with Amazon ECS.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the container instance. The valid values are <code>ACTIVE</code>, <code>INACTIVE</code>, or <code>DRAINING</code>. <code>ACTIVE</code> indicates that the container instance can accept tasks. <code>DRAINING</code> indicates that new tasks are not placed on the container instance and any service tasks running on the container instance are removed if possible. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-draining.html\">Container Instance Draining</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "agentConnected":{
          "shape":"Boolean",
          "documentation":"<p>This parameter returns <code>true</code> if the agent is connected to Amazon ECS. Registered instances with an agent that may be unhealthy or stopped return <code>false</code>. Only instances connected to an agent can accept placement requests.</p>"
        },
        "runningTasksCount":{
          "shape":"Integer",
          "documentation":"<p>The number of tasks on the container instance that are in the <code>RUNNING</code> status.</p>"
        },
        "pendingTasksCount":{
          "shape":"Integer",
          "documentation":"<p>The number of tasks on the container instance that are in the <code>PENDING</code> status.</p>"
        },
        "agentUpdateStatus":{
          "shape":"AgentUpdateStatus",
          "documentation":"<p>The status of the most recent agent update. If an update has never been requested, this value is <code>NULL</code>.</p>"
        },
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>The attributes set for the container instance, either by the Amazon ECS container agent at instance registration or manually with the <a>PutAttributes</a> operation.</p>"
        },
        "registeredAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the container instance was registered.</p>"
        },
        "attachments":{
          "shape":"Attachments",
          "documentation":"<p>The elastic network interfaces associated with the container instance.</p>"
        }
      },
      "documentation":"<p>An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.</p>"
    },
    "ContainerInstanceStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "DRAINING"
      ]
    },
    "ContainerInstances":{
      "type":"list",
      "member":{"shape":"ContainerInstance"}
    },
    "ContainerOverride":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the container that receives the override. This parameter is required if any override is specified.</p>"
        },
        "command":{
          "shape":"StringList",
          "documentation":"<p>The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.</p>"
        },
        "environment":{
          "shape":"EnvironmentVariables",
          "documentation":"<p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.</p>"
        },
        "cpu":{
          "shape":"BoxedInteger",
          "documentation":"<p>The number of <code>cpu</code> units reserved for the container, instead of the default value from the task definition. You must also specify a container name.</p>"
        },
        "memory":{
          "shape":"BoxedInteger",
          "documentation":"<p>The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.</p>"
        },
        "memoryReservation":{
          "shape":"BoxedInteger",
          "documentation":"<p>The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.</p>"
        }
      },
      "documentation":"<p>The overrides that should be sent to a container.</p>"
    },
    "ContainerOverrides":{
      "type":"list",
      "member":{"shape":"ContainerOverride"}
    },
    "ContainerStateChange":{
      "type":"structure",
      "members":{
        "containerName":{
          "shape":"String",
          "documentation":"<p>The name of the container.</p>"
        },
        "exitCode":{
          "shape":"BoxedInteger",
          "documentation":"<p>The exit code for the container, if the state change is a result of the container exiting.</p>"
        },
        "networkBindings":{
          "shape":"NetworkBindings",
          "documentation":"<p>Any network bindings associated with the container.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>The reason for the state change.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the container.</p>"
        }
      },
      "documentation":"<p>An object representing a change in state for a container.</p>"
    },
    "ContainerStateChanges":{
      "type":"list",
      "member":{"shape":"ContainerStateChange"}
    },
    "Containers":{
      "type":"list",
      "member":{"shape":"Container"}
    },
    "CreateClusterRequest":{
      "type":"structure",
      "members":{
        "clusterName":{
          "shape":"String",
          "documentation":"<p>The name of your cluster. If you do not specify a name for your cluster, you create a cluster named <code>default</code>. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p>"
        }
      }
    },
    "CreateClusterResponse":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"Cluster",
          "documentation":"<p>The full description of your new cluster.</p>"
        }
      }
    },
    "CreateServiceRequest":{
      "type":"structure",
      "required":[
        "serviceName",
        "taskDefinition"
      ],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster on which to run your service. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "serviceName":{
          "shape":"String",
          "documentation":"<p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.</p>"
        },
        "taskDefinition":{
          "shape":"String",
          "documentation":"<p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run in your service. If a <code>revision</code> is not specified, the latest <code>ACTIVE</code> revision is used.</p>"
        },
        "loadBalancers":{
          "shape":"LoadBalancers",
          "documentation":"<p>A load balancer object representing the load balancer to use with your service. Currently, you are limited to one load balancer or target group per service. After you create a service, the load balancer name or target group ARN, container name, and container port specified in the service definition are immutable.</p> <p>For Classic Load Balancers, this object must contain the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer. When a task from this service is placed on a container instance, the container instance is registered with the load balancer specified here.</p> <p>For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN, the container name (as it appears in a container definition), and the container port to access from the load balancer. When a task from this service is placed on a container instance, the container instance and port combination is registered as a target in the target group specified here.</p> <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers; Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose <code>ip</code> as the target type, not <code>instance</code>, because tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p>"
        },
        "serviceRegistries":{
          "shape":"ServiceRegistries",
          "documentation":"<p>The details of the service discovery registries to assign to this service. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html\">Service Discovery</a>.</p> <note> <p>Service discovery is supported for Fargate tasks if using platform version v1.1.0 or later. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html\">AWS Fargate Platform Versions</a>.</p> </note>"
        },
        "desiredCount":{
          "shape":"BoxedInteger",
          "documentation":"<p>The number of instantiations of the specified task definition to place and keep running on your cluster.</p>"
        },
        "clientToken":{
          "shape":"String",
          "documentation":"<p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 32 ASCII characters are allowed.</p>"
        },
        "launchType":{
          "shape":"LaunchType",
          "documentation":"<p>The launch type on which to run your service.</p>"
        },
        "platformVersion":{
          "shape":"String",
          "documentation":"<p>The platform version on which to run your service. If one is not specified, the latest version is used by default.</p>"
        },
        "role":{
          "shape":"String",
          "documentation":"<p>The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition does not use the <code>awsvpc</code> network mode. If you specify the <code>role</code> parameter, you must also specify a load balancer object with the <code>loadBalancers</code> parameter.</p> <important> <p>If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here. The service-linked role is required if your task definition uses the <code>awsvpc</code> network mode, in which case you should not specify a role here. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html\">Using Service-Linked Roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code> then you would specify <code>/foo/bar</code> as the role name. For more information, see <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names\">Friendly Names and Paths</a> in the <i>IAM User Guide</i>.</p>"
        },
        "deploymentConfiguration":{
          "shape":"DeploymentConfiguration",
          "documentation":"<p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>"
        },
        "placementConstraints":{
          "shape":"PlacementConstraints",
          "documentation":"<p>An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at run time). </p>"
        },
        "placementStrategy":{
          "shape":"PlacementStrategies",
          "documentation":"<p>The placement strategy objects to use for tasks in your service. You can specify a maximum of five strategy rules per service.</p>"
        },
        "networkConfiguration":{
          "shape":"NetworkConfiguration",
          "documentation":"<p>The network configuration for the service. This parameter is required for task definitions that use the <code>awsvpc</code> network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html\">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "healthCheckGracePeriodSeconds":{
          "shape":"BoxedInteger",
          "documentation":"<p>The period of time, in seconds, that the Amazon ECS service scheduler should ignore unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid if your service is configured to use a load balancer. If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 7,200 seconds during which the ECS service scheduler ignores health check status. This grace period can prevent the ECS service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.</p>"
        },
        "schedulingStrategy":{
          "shape":"SchedulingStrategy",
          "documentation":"<p>The scheduling strategy to use for the service. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguideecs_services.html\">Services</a>.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code>-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions.</p> </li> <li> <p> <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. When using this strategy, there is no need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.</p> <note> <p>Fargate tasks do not support the <code>DAEMON</code> scheduling strategy.</p> </note> </li> </ul>"
        }
      }
    },
    "CreateServiceResponse":{
      "type":"structure",
      "members":{
        "service":{
          "shape":"Service",
          "documentation":"<p>The full description of your service following the create call.</p>"
        }
      }
    },
    "DeleteAttributesRequest":{
      "type":"structure",
      "required":["attributes"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to delete attributes. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>The attributes to delete from your resource. You can specify up to 10 attributes per request. For custom attributes, specify the attribute name and target ID, but do not specify the value. If you specify the target ID using the short form, you must also specify the target type.</p>"
        }
      }
    },
    "DeleteAttributesResponse":{
      "type":"structure",
      "members":{
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>A list of attribute objects that were successfully deleted from your resource.</p>"
        }
      }
    },
    "DeleteClusterRequest":{
      "type":"structure",
      "required":["cluster"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster to delete.</p>"
        }
      }
    },
    "DeleteClusterResponse":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"Cluster",
          "documentation":"<p>The full description of the deleted cluster.</p>"
        }
      }
    },
    "DeleteServiceRequest":{
      "type":"structure",
      "required":["service"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to delete. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "service":{
          "shape":"String",
          "documentation":"<p>The name of the service to delete.</p>"
        },
        "force":{
          "shape":"BoxedBoolean",
          "documentation":"<p>If <code>true</code>, allows you to delete a service even if it has not been scaled down to zero tasks. It is only necessary to use this if the service is using the <code>REPLICA</code> scheduling strategy.</p>"
        }
      }
    },
    "DeleteServiceResponse":{
      "type":"structure",
      "members":{
        "service":{
          "shape":"Service",
          "documentation":"<p>The full description of the deleted service.</p>"
        }
      }
    },
    "Deployment":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The ID of the deployment.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the deployment. Valid values are <code>PRIMARY</code> (for the most recent deployment), <code>ACTIVE</code> (for previous deployments that still have tasks running, but are being replaced with the <code>PRIMARY</code> deployment), and <code>INACTIVE</code> (for deployments that have been completely replaced).</p>"
        },
        "taskDefinition":{
          "shape":"String",
          "documentation":"<p>The most recent task definition that was specified for the service to use.</p>"
        },
        "desiredCount":{
          "shape":"Integer",
          "documentation":"<p>The most recent desired count of tasks that was specified for the service to deploy or maintain.</p>"
        },
        "pendingCount":{
          "shape":"Integer",
          "documentation":"<p>The number of tasks in the deployment that are in the <code>PENDING</code> status.</p>"
        },
        "runningCount":{
          "shape":"Integer",
          "documentation":"<p>The number of tasks in the deployment that are in the <code>RUNNING</code> status.</p>"
        },
        "createdAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the service was created.</p>"
        },
        "updatedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the service was last updated.</p>"
        },
        "launchType":{
          "shape":"LaunchType",
          "documentation":"<p>The launch type on which your service is running.</p>"
        },
        "platformVersion":{
          "shape":"String",
          "documentation":"<p>The platform version on which your service is running.</p>"
        },
        "networkConfiguration":{
          "shape":"NetworkConfiguration",
          "documentation":"<p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>"
        }
      },
      "documentation":"<p>The details of an Amazon ECS service deployment.</p>"
    },
    "DeploymentConfiguration":{
      "type":"structure",
      "members":{
        "maximumPercent":{
          "shape":"BoxedInteger",
          "documentation":"<p>The upper limit (as a percentage of the service's <code>desiredCount</code>) of the number of tasks that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state in a service during a deployment. The maximum number of tasks during a deployment is the <code>desiredCount</code> multiplied by <code>maximumPercent</code>/100, rounded down to the nearest integer value.</p>"
        },
        "minimumHealthyPercent":{
          "shape":"BoxedInteger",
          "documentation":"<p>The lower limit (as a percentage of the service's <code>desiredCount</code>) of the number of running tasks that must remain in the <code>RUNNING</code> state in a service during a deployment. The minimum number of healthy tasks during a deployment is the <code>desiredCount</code> multiplied by <code>minimumHealthyPercent</code>/100, rounded up to the nearest integer value.</p>"
        }
      },
      "documentation":"<p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>"
    },
    "Deployments":{
      "type":"list",
      "member":{"shape":"Deployment"}
    },
    "DeregisterContainerInstanceRequest":{
      "type":"structure",
      "required":["containerInstance"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to deregister. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "containerInstance":{
          "shape":"String",
          "documentation":"<p>The container instance ID or full ARN of the container instance to deregister. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the container instance, the AWS account ID of the container instance owner, the <code>container-instance</code> namespace, and then the container instance ID. For example, <code>arn:aws:ecs:<i>region</i>:<i>aws_account_id</i>:container-instance/<i>container_instance_ID</i> </code>.</p>"
        },
        "force":{
          "shape":"BoxedBoolean",
          "documentation":"<p>Forces the deregistration of the container instance. If you have tasks running on the container instance when you deregister it with the <code>force</code> option, these tasks remain running until you terminate the instance or the tasks stop through some other means, but they are orphaned (no longer monitored or accounted for by Amazon ECS). If an orphaned task on your container instance is part of an Amazon ECS service, then the service scheduler starts another copy of that task, on a different container instance if possible. </p> <p>Any containers in orphaned service tasks that are registered with a Classic Load Balancer or an Application Load Balancer target group are deregistered. They begin connection draining according to the settings on the load balancer or target group.</p>"
        }
      }
    },
    "DeregisterContainerInstanceResponse":{
      "type":"structure",
      "members":{
        "containerInstance":{
          "shape":"ContainerInstance",
          "documentation":"<p>The container instance that was deregistered.</p>"
        }
      }
    },
    "DeregisterTaskDefinitionRequest":{
      "type":"structure",
      "required":["taskDefinition"],
      "members":{
        "taskDefinition":{
          "shape":"String",
          "documentation":"<p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full Amazon Resource Name (ARN) of the task definition to deregister. You must specify a <code>revision</code>.</p>"
        }
      }
    },
    "DeregisterTaskDefinitionResponse":{
      "type":"structure",
      "members":{
        "taskDefinition":{
          "shape":"TaskDefinition",
          "documentation":"<p>The full description of the deregistered task.</p>"
        }
      }
    },
    "DescribeClustersRequest":{
      "type":"structure",
      "members":{
        "clusters":{
          "shape":"StringList",
          "documentation":"<p>A list of up to 100 cluster names or full cluster Amazon Resource Name (ARN) entries. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "include":{
          "shape":"ClusterFieldList",
          "documentation":"<p>Additional information about your clusters to be separated by launch type, including:</p> <ul> <li> <p>runningEC2TasksCount</p> </li> <li> <p>runningFargateTasksCount</p> </li> <li> <p>pendingEC2TasksCount</p> </li> <li> <p>pendingFargateTasksCount</p> </li> <li> <p>activeEC2ServiceCount</p> </li> <li> <p>activeFargateServiceCount</p> </li> <li> <p>drainingEC2ServiceCount</p> </li> <li> <p>drainingFargateServiceCount</p> </li> </ul>"
        }
      }
    },
    "DescribeClustersResponse":{
      "type":"structure",
      "members":{
        "clusters":{
          "shape":"Clusters",
          "documentation":"<p>The list of clusters.</p>"
        },
        "failures":{
          "shape":"Failures",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "DescribeContainerInstancesRequest":{
      "type":"structure",
      "required":["containerInstances"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to describe. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "containerInstances":{
          "shape":"StringList",
          "documentation":"<p>A list of up to 100 container instance IDs or full Amazon Resource Name (ARN) entries.</p>"
        }
      }
    },
    "DescribeContainerInstancesResponse":{
      "type":"structure",
      "members":{
        "containerInstances":{
          "shape":"ContainerInstances",
          "documentation":"<p>The list of container instances.</p>"
        },
        "failures":{
          "shape":"Failures",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "DescribeServicesRequest":{
      "type":"structure",
      "required":["services"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "services":{
          "shape":"StringList",
          "documentation":"<p>A list of services to describe. You may specify up to 10 services to describe in a single operation.</p>"
        }
      }
    },
    "DescribeServicesResponse":{
      "type":"structure",
      "members":{
        "services":{
          "shape":"Services",
          "documentation":"<p>The list of services described.</p>"
        },
        "failures":{
          "shape":"Failures",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "DescribeTaskDefinitionRequest":{
      "type":"structure",
      "required":["taskDefinition"],
      "members":{
        "taskDefinition":{
          "shape":"String",
          "documentation":"<p>The <code>family</code> for the latest <code>ACTIVE</code> revision, <code>family</code> and <code>revision</code> (<code>family:revision</code>) for a specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to describe.</p>"
        }
      }
    },
    "DescribeTaskDefinitionResponse":{
      "type":"structure",
      "members":{
        "taskDefinition":{
          "shape":"TaskDefinition",
          "documentation":"<p>The full task definition description.</p>"
        }
      }
    },
    "DescribeTasksRequest":{
      "type":"structure",
      "required":["tasks"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to describe. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "tasks":{
          "shape":"StringList",
          "documentation":"<p>A list of up to 100 task IDs or full ARN entries.</p>"
        }
      }
    },
    "DescribeTasksResponse":{
      "type":"structure",
      "members":{
        "tasks":{
          "shape":"Tasks",
          "documentation":"<p>The list of tasks.</p>"
        },
        "failures":{
          "shape":"Failures",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "DesiredStatus":{
      "type":"string",
      "enum":[
        "RUNNING",
        "PENDING",
        "STOPPED"
      ]
    },
    "Device":{
      "type":"structure",
      "required":["hostPath"],
      "members":{
        "hostPath":{
          "shape":"String",
          "documentation":"<p>The path for the device on the host container instance.</p>"
        },
        "containerPath":{
          "shape":"String",
          "documentation":"<p>The path inside the container at which to expose the host device.</p>"
        },
        "permissions":{
          "shape":"DeviceCgroupPermissions",
          "documentation":"<p>The explicit permissions to provide to the container for the device. By default, the container has permissions for <code>read</code>, <code>write</code>, and <code>mknod</code> for the device.</p>"
        }
      },
      "documentation":"<p>An object representing a container instance host device.</p>"
    },
    "DeviceCgroupPermission":{
      "type":"string",
      "enum":[
        "read",
        "write",
        "mknod"
      ]
    },
    "DeviceCgroupPermissions":{
      "type":"list",
      "member":{"shape":"DeviceCgroupPermission"}
    },
    "DevicesList":{
      "type":"list",
      "member":{"shape":"Device"}
    },
    "DiscoverPollEndpointRequest":{
      "type":"structure",
      "members":{
        "containerInstance":{
          "shape":"String",
          "documentation":"<p>The container instance ID or full ARN of the container instance. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the container instance, the AWS account ID of the container instance owner, the <code>container-instance</code> namespace, and then the container instance ID. For example, <code>arn:aws:ecs:<i>region</i>:<i>aws_account_id</i>:container-instance/<i>container_instance_ID</i> </code>.</p>"
        },
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that the container instance belongs to.</p>"
        }
      }
    },
    "DiscoverPollEndpointResponse":{
      "type":"structure",
      "members":{
        "endpoint":{
          "shape":"String",
          "documentation":"<p>The endpoint for the Amazon ECS agent to poll.</p>"
        },
        "telemetryEndpoint":{
          "shape":"String",
          "documentation":"<p>The telemetry endpoint for the Amazon ECS agent.</p>"
        }
      }
    },
    "DockerLabelsMap":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "DockerVolumeConfiguration":{
      "type":"structure",
      "members":{
        "scope":{
          "shape":"Scope",
          "documentation":"<p>The scope for the Docker volume which determines it's lifecycle. Docker volumes that are scoped to a <code>task</code> are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as <code>shared</code> persist after the task stops.</p>"
        },
        "autoprovision":{
          "shape":"BoxedBoolean",
          "documentation":"<p>If this value is <code>true</code>, the Docker volume is created if it does not already exist.</p> <note> <p>This field is only used if the <code>scope</code> is <code>shared</code>.</p> </note>"
        },
        "driver":{
          "shape":"String",
          "documentation":"<p>The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use <code>docker plugin ls</code> to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. For more information, see <a href=\"https://docs.docker.com/engine/extend/plugin_api/#plugin-discovery\">Docker plugin discovery</a>. This parameter maps to <code>Driver</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate\">Create a volume</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>xxdriver</code> option to <a href=\"https://docs.docker.com/engine/reference/commandline/volume_create/\"> <code>docker volume create</code> </a>.</p>"
        },
        "driverOpts":{
          "shape":"StringMap",
          "documentation":"<p>A map of Docker driver specific options passed through. This parameter maps to <code>DriverOpts</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate\">Create a volume</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>xxopt</code> option to <a href=\"https://docs.docker.com/engine/reference/commandline/volume_create/\"> <code>docker volume create</code> </a>.</p>"
        },
        "labels":{
          "shape":"StringMap",
          "documentation":"<p>Custom metadata to add to your Docker volume. This parameter maps to <code>Labels</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate\">Create a volume</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>xxlabel</code> option to <a href=\"https://docs.docker.com/engine/reference/commandline/volume_create/\"> <code>docker volume create</code> </a>.</p>"
        }
      },
      "documentation":"<p>This parameter is specified when using Docker volumes. Docker volumes are only supported when using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.</p>"
    },
    "Double":{"type":"double"},
    "EnvironmentVariables":{
      "type":"list",
      "member":{"shape":"KeyValuePair"}
    },
    "Failure":{
      "type":"structure",
      "members":{
        "arn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the failed resource.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>The reason for the failure.</p>"
        }
      },
      "documentation":"<p>A failed resource.</p>"
    },
    "Failures":{
      "type":"list",
      "member":{"shape":"Failure"}
    },
    "HealthCheck":{
      "type":"structure",
      "required":["command"],
      "members":{
        "command":{
          "shape":"StringList",
          "documentation":"<p>A string array representing the command that the container runs to determine if it is healthy. The string array must start with <code>CMD</code> to execute the command arguments directly, or <code>CMD-SHELL</code> to run the command with the container's default shell. For example:</p> <p> <code>[ \"CMD-SHELL\", \"curl -f http://localhost/ || exit 1\" ]</code> </p> <p>An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see <code>HealthCheck</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a>.</p>"
        },
        "interval":{
          "shape":"BoxedInteger",
          "documentation":"<p>The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.</p>"
        },
        "timeout":{
          "shape":"BoxedInteger",
          "documentation":"<p>The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5.</p>"
        },
        "retries":{
          "shape":"BoxedInteger",
          "documentation":"<p>The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3.</p>"
        },
        "startPeriod":{
          "shape":"BoxedInteger",
          "documentation":"<p>The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The <code>startPeriod</code> is disabled by default.</p> <note> <p>If a health check succeeds within the <code>startPeriod</code>, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.</p> </note>"
        }
      },
      "documentation":"<p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile).</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html\">Updating the Amazon ECS Container Agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if using platform version version 1.1.0 or greater. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html\">AWS Fargate Platform Versions</a>.</p> </li> <li> <p>Container health checks are not supported for tasks that are part of a service that is configured to use a Classic Load Balancer.</p> </li> </ul>"
    },
    "HealthStatus":{
      "type":"string",
      "enum":[
        "HEALTHY",
        "UNHEALTHY",
        "UNKNOWN"
      ]
    },
    "HostEntry":{
      "type":"structure",
      "required":[
        "hostname",
        "ipAddress"
      ],
      "members":{
        "hostname":{
          "shape":"String",
          "documentation":"<p>The hostname to use in the <code>/etc/hosts</code> entry.</p>"
        },
        "ipAddress":{
          "shape":"String",
          "documentation":"<p>The IP address to use in the <code>/etc/hosts</code> entry.</p>"
        }
      },
      "documentation":"<p>Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. </p>"
    },
    "HostEntryList":{
      "type":"list",
      "member":{"shape":"HostEntry"}
    },
    "HostVolumeProperties":{
      "type":"structure",
      "members":{
        "sourcePath":{
          "shape":"String",
          "documentation":"<p>When the <code>host</code> parameter is used, specify a <code>sourcePath</code> to declare the path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the <code>host</code> parameter contains a <code>sourcePath</code> file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the <code>sourcePath</code> value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.</p> <p>If you are using the Fargate launch type, the <code>sourcePath</code> parameter is not supported.</p>"
        }
      },
      "documentation":"<p>Details on a container instance bind mount host volume.</p>"
    },
    "Integer":{"type":"integer"},
    "InvalidParameterException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified parameter is invalid. Review the available parameters for the API request.</p>",
      "exception":true
    },
    "KernelCapabilities":{
      "type":"structure",
      "members":{
        "add":{
          "shape":"StringList",
          "documentation":"<p>The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to <code>CapAdd</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--cap-add</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>add</code> parameter is not supported.</p> </note> <p>Valid values: <code>\"ALL\" | \"AUDIT_CONTROL\" | \"AUDIT_WRITE\" | \"BLOCK_SUSPEND\" | \"CHOWN\" | \"DAC_OVERRIDE\" | \"DAC_READ_SEARCH\" | \"FOWNER\" | \"FSETID\" | \"IPC_LOCK\" | \"IPC_OWNER\" | \"KILL\" | \"LEASE\" | \"LINUX_IMMUTABLE\" | \"MAC_ADMIN\" | \"MAC_OVERRIDE\" | \"MKNOD\" | \"NET_ADMIN\" | \"NET_BIND_SERVICE\" | \"NET_BROADCAST\" | \"NET_RAW\" | \"SETFCAP\" | \"SETGID\" | \"SETPCAP\" | \"SETUID\" | \"SYS_ADMIN\" | \"SYS_BOOT\" | \"SYS_CHROOT\" | \"SYS_MODULE\" | \"SYS_NICE\" | \"SYS_PACCT\" | \"SYS_PTRACE\" | \"SYS_RAWIO\" | \"SYS_RESOURCE\" | \"SYS_TIME\" | \"SYS_TTY_CONFIG\" | \"SYSLOG\" | \"WAKE_ALARM\"</code> </p>"
        },
        "drop":{
          "shape":"StringList",
          "documentation":"<p>The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to <code>CapDrop</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--cap-drop</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <p>Valid values: <code>\"ALL\" | \"AUDIT_CONTROL\" | \"AUDIT_WRITE\" | \"BLOCK_SUSPEND\" | \"CHOWN\" | \"DAC_OVERRIDE\" | \"DAC_READ_SEARCH\" | \"FOWNER\" | \"FSETID\" | \"IPC_LOCK\" | \"IPC_OWNER\" | \"KILL\" | \"LEASE\" | \"LINUX_IMMUTABLE\" | \"MAC_ADMIN\" | \"MAC_OVERRIDE\" | \"MKNOD\" | \"NET_ADMIN\" | \"NET_BIND_SERVICE\" | \"NET_BROADCAST\" | \"NET_RAW\" | \"SETFCAP\" | \"SETGID\" | \"SETPCAP\" | \"SETUID\" | \"SYS_ADMIN\" | \"SYS_BOOT\" | \"SYS_CHROOT\" | \"SYS_MODULE\" | \"SYS_NICE\" | \"SYS_PACCT\" | \"SYS_PTRACE\" | \"SYS_RAWIO\" | \"SYS_RESOURCE\" | \"SYS_TIME\" | \"SYS_TTY_CONFIG\" | \"SYSLOG\" | \"WAKE_ALARM\"</code> </p>"
        }
      },
      "documentation":"<p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information on the default capabilities and the non-default available capabilities, see <a href=\"https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities\">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information on these Linux capabilities, see the <a href=\"http://man7.org/linux/man-pages/man7/capabilities.7.html\">capabilities(7)</a> Linux manual page.</p>"
    },
    "KeyValuePair":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the key value pair. For environment variables, this is the name of the environment variable.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The value of the key value pair. For environment variables, this is the value of the environment variable.</p>"
        }
      },
      "documentation":"<p>A key and value pair object.</p>"
    },
    "LaunchType":{
      "type":"string",
      "enum":[
        "EC2",
        "FARGATE"
      ]
    },
    "LinuxParameters":{
      "type":"structure",
      "members":{
        "capabilities":{
          "shape":"KernelCapabilities",
          "documentation":"<p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p> <note> <p>If you are using tasks that use the Fargate launch type, <code>capabilities</code> is supported but the <code>add</code> parameter is not supported.</p> </note>"
        },
        "devices":{
          "shape":"DevicesList",
          "documentation":"<p>Any host devices to expose to the container. This parameter maps to <code>Devices</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--device</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>devices</code> parameter is not supported.</p> </note>"
        },
        "initProcessEnabled":{
          "shape":"BoxedBoolean",
          "documentation":"<p>Run an <code>init</code> process inside the container that forwards signals and reaps processes. This parameter maps to the <code>--init</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep \"Server API version\"</code> </p>"
        },
        "sharedMemorySize":{
          "shape":"BoxedInteger",
          "documentation":"<p>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter maps to the <code>--shm-size</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>sharedMemorySize</code> parameter is not supported.</p> </note>"
        },
        "tmpfs":{
          "shape":"TmpfsList",
          "documentation":"<p>The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the <code>--tmpfs</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>tmpfs</code> parameter is not supported.</p> </note>"
        }
      },
      "documentation":"<p>Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>.</p>"
    },
    "ListAttributesRequest":{
      "type":"structure",
      "required":["targetType"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster to list attributes. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "targetType":{
          "shape":"TargetType",
          "documentation":"<p>The type of the target with which to list attributes.</p>"
        },
        "attributeName":{
          "shape":"String",
          "documentation":"<p>The name of the attribute with which to filter the results. </p>"
        },
        "attributeValue":{
          "shape":"String",
          "documentation":"<p>The value of the attribute with which to filter results. You must also specify an attribute name to use this parameter.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListAttributes</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of cluster results returned by <code>ListAttributes</code> in paginated output. When this parameter is used, <code>ListAttributes</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListAttributes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListAttributes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        }
      }
    },
    "ListAttributesResponse":{
      "type":"structure",
      "members":{
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>A list of attribute objects that meet the criteria of the request.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListAttributes</code> request. When the results of a <code>ListAttributes</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "ListClustersRequest":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListClusters</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of cluster results returned by <code>ListClusters</code> in paginated output. When this parameter is used, <code>ListClusters</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListClusters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListClusters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        }
      }
    },
    "ListClustersResponse":{
      "type":"structure",
      "members":{
        "clusterArns":{
          "shape":"StringList",
          "documentation":"<p>The list of full Amazon Resource Name (ARN) entries for each cluster associated with your account.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListClusters</code> request. When the results of a <code>ListClusters</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "ListContainerInstancesRequest":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to list. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "filter":{
          "shape":"String",
          "documentation":"<p>You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html\">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListContainerInstances</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of container instance results returned by <code>ListContainerInstances</code> in paginated output. When this parameter is used, <code>ListContainerInstances</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListContainerInstances</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListContainerInstances</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        },
        "status":{
          "shape":"ContainerInstanceStatus",
          "documentation":"<p>Filters the container instances by status. For example, if you specify the <code>DRAINING</code> status, the results include only container instances that have been set to <code>DRAINING</code> using <a>UpdateContainerInstancesState</a>. If you do not specify this parameter, the default is to include container instances set to <code>ACTIVE</code> and <code>DRAINING</code>.</p>"
        }
      }
    },
    "ListContainerInstancesResponse":{
      "type":"structure",
      "members":{
        "containerInstanceArns":{
          "shape":"StringList",
          "documentation":"<p>The list of container instances with full ARN entries for each container instance associated with the specified cluster.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListContainerInstances</code> request. When the results of a <code>ListContainerInstances</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "ListServicesRequest":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the services to list. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListServices</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of service results returned by <code>ListServices</code> in paginated output. When this parameter is used, <code>ListServices</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListServices</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 10. If this parameter is not used, then <code>ListServices</code> returns up to 10 results and a <code>nextToken</code> value if applicable.</p>"
        },
        "launchType":{
          "shape":"LaunchType",
          "documentation":"<p>The launch type for the services to list.</p>"
        },
        "schedulingStrategy":{
          "shape":"SchedulingStrategy",
          "documentation":"<p>The scheduling strategy for services to list.</p>"
        }
      }
    },
    "ListServicesResponse":{
      "type":"structure",
      "members":{
        "serviceArns":{
          "shape":"StringList",
          "documentation":"<p>The list of full ARN entries for each service associated with the specified cluster.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListServices</code> request. When the results of a <code>ListServices</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "ListTaskDefinitionFamiliesRequest":{
      "type":"structure",
      "members":{
        "familyPrefix":{
          "shape":"String",
          "documentation":"<p>The <code>familyPrefix</code> is a string that is used to filter the results of <code>ListTaskDefinitionFamilies</code>. If you specify a <code>familyPrefix</code>, only task definition family names that begin with the <code>familyPrefix</code> string are returned.</p>"
        },
        "status":{
          "shape":"TaskDefinitionFamilyStatus",
          "documentation":"<p>The task definition family status with which to filter the <code>ListTaskDefinitionFamilies</code> results. By default, both <code>ACTIVE</code> and <code>INACTIVE</code> task definition families are listed. If this parameter is set to <code>ACTIVE</code>, only task definition families that have an <code>ACTIVE</code> task definition revision are returned. If this parameter is set to <code>INACTIVE</code>, only task definition families that do not have any <code>ACTIVE</code> task definition revisions are returned. If you paginate the resulting output, be sure to keep the <code>status</code> value constant in each subsequent request.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListTaskDefinitionFamilies</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of task definition family results returned by <code>ListTaskDefinitionFamilies</code> in paginated output. When this parameter is used, <code>ListTaskDefinitions</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListTaskDefinitionFamilies</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListTaskDefinitionFamilies</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        }
      }
    },
    "ListTaskDefinitionFamiliesResponse":{
      "type":"structure",
      "members":{
        "families":{
          "shape":"StringList",
          "documentation":"<p>The list of task definition family names that match the <code>ListTaskDefinitionFamilies</code> request.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListTaskDefinitionFamilies</code> request. When the results of a <code>ListTaskDefinitionFamilies</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "ListTaskDefinitionsRequest":{
      "type":"structure",
      "members":{
        "familyPrefix":{
          "shape":"String",
          "documentation":"<p>The full family name with which to filter the <code>ListTaskDefinitions</code> results. Specifying a <code>familyPrefix</code> limits the listed task definitions to task definition revisions that belong to that family.</p>"
        },
        "status":{
          "shape":"TaskDefinitionStatus",
          "documentation":"<p>The task definition status with which to filter the <code>ListTaskDefinitions</code> results. By default, only <code>ACTIVE</code> task definitions are listed. By setting this parameter to <code>INACTIVE</code>, you can view task definitions that are <code>INACTIVE</code> as long as an active task or service still references them. If you paginate the resulting output, be sure to keep the <code>status</code> value constant in each subsequent request.</p>"
        },
        "sort":{
          "shape":"SortOrder",
          "documentation":"<p>The order in which to sort the results. Valid values are <code>ASC</code> and <code>DESC</code>. By default (<code>ASC</code>), task definitions are listed lexicographically by family name and in ascending numerical order by revision so that the newest task definitions in a family are listed last. Setting this parameter to <code>DESC</code> reverses the sort order on family name and revision so that the newest task definitions in a family are listed first.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListTaskDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of task definition results returned by <code>ListTaskDefinitions</code> in paginated output. When this parameter is used, <code>ListTaskDefinitions</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListTaskDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListTaskDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        }
      }
    },
    "ListTaskDefinitionsResponse":{
      "type":"structure",
      "members":{
        "taskDefinitionArns":{
          "shape":"StringList",
          "documentation":"<p>The list of task definition Amazon Resource Name (ARN) entries for the <code>ListTaskDefinitions</code> request.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListTaskDefinitions</code> request. When the results of a <code>ListTaskDefinitions</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "ListTasksRequest":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the tasks to list. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "containerInstance":{
          "shape":"String",
          "documentation":"<p>The container instance ID or full ARN of the container instance with which to filter the <code>ListTasks</code> results. Specifying a <code>containerInstance</code> limits the results to tasks that belong to that container instance.</p>"
        },
        "family":{
          "shape":"String",
          "documentation":"<p>The name of the family with which to filter the <code>ListTasks</code> results. Specifying a <code>family</code> limits the results to tasks that belong to that family.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListTasks</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"BoxedInteger",
          "documentation":"<p>The maximum number of task results returned by <code>ListTasks</code> in paginated output. When this parameter is used, <code>ListTasks</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListTasks</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListTasks</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>"
        },
        "startedBy":{
          "shape":"String",
          "documentation":"<p>The <code>startedBy</code> value with which to filter the task results. Specifying a <code>startedBy</code> value limits the results to tasks that were started with that value.</p>"
        },
        "serviceName":{
          "shape":"String",
          "documentation":"<p>The name of the service with which to filter the <code>ListTasks</code> results. Specifying a <code>serviceName</code> limits the results to tasks that belong to that service.</p>"
        },
        "desiredStatus":{
          "shape":"DesiredStatus",
          "documentation":"<p>The task desired status with which to filter the <code>ListTasks</code> results. Specifying a <code>desiredStatus</code> of <code>STOPPED</code> limits the results to tasks that Amazon ECS has set the desired status to <code>STOPPED</code>, which can be useful for debugging tasks that are not starting properly or have died or finished. The default status filter is <code>RUNNING</code>, which shows tasks that Amazon ECS has set the desired status to <code>RUNNING</code>.</p> <note> <p>Although you can filter results based on a desired status of <code>PENDING</code>, this does not return any results because Amazon ECS never sets the desired status of a task to that value (only a task's <code>lastStatus</code> may have a value of <code>PENDING</code>).</p> </note>"
        },
        "launchType":{
          "shape":"LaunchType",
          "documentation":"<p>The launch type for services to list.</p>"
        }
      }
    },
    "ListTasksResponse":{
      "type":"structure",
      "members":{
        "taskArns":{
          "shape":"StringList",
          "documentation":"<p>The list of task ARN entries for the <code>ListTasks</code> request.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListTasks</code> request. When the results of a <code>ListTasks</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "LoadBalancer":{
      "type":"structure",
      "members":{
        "targetGroupArn":{
          "shape":"String",
          "documentation":"<p>The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group associated with a service.</p> <important> <p>If your service's task definition uses the <code>awsvpc</code> network mode (which is required for the Fargate launch type), you must choose <code>ip</code> as the target type, not <code>instance</code>, because tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p> </important>"
        },
        "loadBalancerName":{
          "shape":"String",
          "documentation":"<p>The name of a load balancer.</p>"
        },
        "containerName":{
          "shape":"String",
          "documentation":"<p>The name of the container (as it appears in a container definition) to associate with the load balancer.</p>"
        },
        "containerPort":{
          "shape":"BoxedInteger",
          "documentation":"<p>The port on the container to associate with the load balancer. This port must correspond to a <code>containerPort</code> in the service's task definition. Your container instances must allow ingress traffic on the <code>hostPort</code> of the port mapping.</p>"
        }
      },
      "documentation":"<p>Details on a load balancer that is used with a service.</p> <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers; Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose <code>ip</code> as the target type, not <code>instance</code>, because tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p>"
    },
    "LoadBalancers":{
      "type":"list",
      "member":{"shape":"LoadBalancer"}
    },
    "LogConfiguration":{
      "type":"structure",
      "required":["logDriver"],
      "members":{
        "logDriver":{
          "shape":"LogDriver",
          "documentation":"<p>The log driver to use for the container. The valid values listed for this parameter are log drivers that the Amazon ECS container agent can communicate with by default. If using the Fargate launch type, the only supported value is <code>awslogs</code>. For more information about using the <code>awslogs</code> driver, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html\">Using the awslogs Log Driver</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you have a custom driver that is not listed above that you would like to work with the Amazon ECS container agent, you can fork the Amazon ECS container agent project that is <a href=\"https://github.com/aws/amazon-ecs-agent\">available on GitHub</a> and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, Amazon Web Services does not currently support running modified copies of this software.</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep \"Server API version\"</code> </p>"
        },
        "options":{
          "shape":"LogConfigurationOptionsMap",
          "documentation":"<p>The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version | grep \"Server API version\"</code> </p>"
        }
      },
      "documentation":"<p>Log configuration options to send to a custom log driver for the container.</p>"
    },
    "LogConfigurationOptionsMap":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "LogDriver":{
      "type":"string",
      "enum":[
        "json-file",
        "syslog",
        "journald",
        "gelf",
        "fluentd",
        "awslogs",
        "splunk"
      ]
    },
    "Long":{"type":"long"},
    "MissingVersionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Amazon ECS is unable to determine the current version of the Amazon ECS container agent on the container instance and does not have enough information to proceed with an update. This could be because the agent running on the container instance is an older or custom version that does not use our version information.</p>",
      "exception":true
    },
    "MountPoint":{
      "type":"structure",
      "members":{
        "sourceVolume":{
          "shape":"String",
          "documentation":"<p>The name of the volume to mount. Must be a volume name referenced in the <code>name</code> parameter of task definition <code>volume</code>.</p>"
        },
        "containerPath":{
          "shape":"String",
          "documentation":"<p>The path on the container to mount the host volume at.</p>"
        },
        "readOnly":{
          "shape":"BoxedBoolean",
          "documentation":"<p>If this value is <code>true</code>, the container has read-only access to the volume. If this value is <code>false</code>, then the container can write to the volume. The default value is <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Details on a volume mount point that is used in a container definition.</p>"
    },
    "MountPointList":{
      "type":"list",
      "member":{"shape":"MountPoint"}
    },
    "NetworkBinding":{
      "type":"structure",
      "members":{
        "bindIP":{
          "shape":"String",
          "documentation":"<p>The IP address that the container is bound to on the container instance.</p>"
        },
        "containerPort":{
          "shape":"BoxedInteger",
          "documentation":"<p>The port number on the container that is used with the network binding.</p>"
        },
        "hostPort":{
          "shape":"BoxedInteger",
          "documentation":"<p>The port number on the host that is used with the network binding.</p>"
        },
        "protocol":{
          "shape":"TransportProtocol",
          "documentation":"<p>The protocol used for the network binding.</p>"
        }
      },
      "documentation":"<p>Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>"
    },
    "NetworkBindings":{
      "type":"list",
      "member":{"shape":"NetworkBinding"}
    },
    "NetworkConfiguration":{
      "type":"structure",
      "members":{
        "awsvpcConfiguration":{
          "shape":"AwsVpcConfiguration",
          "documentation":"<p>The VPC subnets and security groups associated with a task.</p> <note> <p>All specified subnets and security groups must be from the same VPC.</p> </note>"
        }
      },
      "documentation":"<p>An object representing the network configuration for a task or service.</p>"
    },
    "NetworkInterface":{
      "type":"structure",
      "members":{
        "attachmentId":{
          "shape":"String",
          "documentation":"<p>The attachment ID for the network interface.</p>"
        },
        "privateIpv4Address":{
          "shape":"String",
          "documentation":"<p>The private IPv4 address for the network interface.</p>"
        },
        "ipv6Address":{
          "shape":"String",
          "documentation":"<p>The private IPv6 address for the network interface.</p>"
        }
      },
      "documentation":"<p>An object representing the elastic network interface for tasks that use the <code>awsvpc</code> network mode.</p>"
    },
    "NetworkInterfaces":{
      "type":"list",
      "member":{"shape":"NetworkInterface"}
    },
    "NetworkMode":{
      "type":"string",
      "enum":[
        "bridge",
        "host",
        "awsvpc",
        "none"
      ]
    },
    "NoUpdateAvailableException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>There is no update available for this Amazon ECS container agent. This could be because the agent is already running the latest version, or it is so old that there is no update path to the current version.</p>",
      "exception":true
    },
    "PlacementConstraint":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"PlacementConstraintType",
          "documentation":"<p>The type of constraint. Use <code>distinctInstance</code> to ensure that each task in a particular group is running on a different container instance. Use <code>memberOf</code> to restrict the selection to a group of valid candidates. The value <code>distinctInstance</code> is not supported in task definitions.</p>"
        },
        "expression":{
          "shape":"String",
          "documentation":"<p>A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is <code>distinctInstance</code>. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html\">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        }
      },
      "documentation":"<p>An object representing a constraint on task placement. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html\">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "PlacementConstraintType":{
      "type":"string",
      "enum":[
        "distinctInstance",
        "memberOf"
      ]
    },
    "PlacementConstraints":{
      "type":"list",
      "member":{"shape":"PlacementConstraint"}
    },
    "PlacementStrategies":{
      "type":"list",
      "member":{"shape":"PlacementStrategy"}
    },
    "PlacementStrategy":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"PlacementStrategyType",
          "documentation":"<p>The type of placement strategy. The <code>random</code> placement strategy randomly places tasks on available candidates. The <code>spread</code> placement strategy spreads placement across available candidates evenly based on the <code>field</code> parameter. The <code>binpack</code> strategy places tasks on available candidates that have the least available amount of the resource that is specified with the <code>field</code> parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).</p>"
        },
        "field":{
          "shape":"String",
          "documentation":"<p>The field to apply the placement strategy against. For the <code>spread</code> placement strategy, valid values are <code>instanceId</code> (or <code>host</code>, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as <code>attribute:ecs.availability-zone</code>. For the <code>binpack</code> placement strategy, valid values are <code>cpu</code> and <code>memory</code>. For the <code>random</code> placement strategy, this field is not used.</p>"
        }
      },
      "documentation":"<p>The task placement strategy for a task or service. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html\">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "PlacementStrategyType":{
      "type":"string",
      "enum":[
        "random",
        "spread",
        "binpack"
      ]
    },
    "PlatformTaskDefinitionIncompatibilityException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified platform version does not satisfy the task definition's required capabilities.</p>",
      "exception":true
    },
    "PlatformUnknownException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified platform version does not exist.</p>",
      "exception":true
    },
    "PortMapping":{
      "type":"structure",
      "members":{
        "containerPort":{
          "shape":"BoxedInteger",
          "documentation":"<p>The port number on the container that is bound to the user-specified or automatically assigned host port.</p> <p>If using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, exposed ports should be specified using <code>containerPort</code>.</p> <p>If using containers in a task with the <code>bridge</code> network mode and you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range (for more information, see <code>hostPort</code>). Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.</p>"
        },
        "hostPort":{
          "shape":"BoxedInteger",
          "documentation":"<p>The port number on the container instance to reserve for your container.</p> <p>If using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, the <code>hostPort</code> can either be left blank or set to the same value as the <code>containerPort</code>.</p> <p>If using containers in a task with the <code>bridge</code> network mode, you can specify a non-reserved host port for your container port mapping, or you can omit the <code>hostPort</code> (or set it to <code>0</code>) while specifying a <code>containerPort</code> and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version.</p> <p>The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under <code>/proc/sys/net/ipv4/ip_local_port_range</code>; if this kernel parameter is unavailable, the default ephemeral port range from 49153 through 65535 is used. You should not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.</p> <note> <p>The default ephemeral port range from 49153 through 65535 is always used for Docker versions before 1.6.0.</p> </note> <p>The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678 and 51679. Any host port that was previously specified in a running task is also reserved while the task is running (after a task stops, the host port is released). The current reserved ports are displayed in the <code>remainingResources</code> of <a>DescribeContainerInstances</a> output, and a container instance may have up to 100 reserved ports at a time, including the default reserved ports (automatically assigned ports do not count toward the 100 reserved ports limit).</p>"
        },
        "protocol":{
          "shape":"TransportProtocol",
          "documentation":"<p>The protocol used for the port mapping. Valid values are <code>tcp</code> and <code>udp</code>. The default is <code>tcp</code>.</p>"
        }
      },
      "documentation":"<p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, exposed ports should be specified using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>"
    },
    "PortMappingList":{
      "type":"list",
      "member":{"shape":"PortMapping"}
    },
    "PutAttributesRequest":{
      "type":"structure",
      "required":["attributes"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to apply attributes. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>The attributes to apply to your resource. You can specify up to 10 custom attributes per resource. You can specify up to 10 attributes in a single call.</p>"
        }
      }
    },
    "PutAttributesResponse":{
      "type":"structure",
      "members":{
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>The attributes applied to your resource.</p>"
        }
      }
    },
    "RegisterContainerInstanceRequest":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster with which to register your container instance. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "instanceIdentityDocument":{
          "shape":"String",
          "documentation":"<p>The instance identity document for the EC2 instance to register. This document can be found by running the following command from the instance: <code>curl http://169.254.169.254/latest/dynamic/instance-identity/document/</code> </p>"
        },
        "instanceIdentityDocumentSignature":{
          "shape":"String",
          "documentation":"<p>The instance identity document signature for the EC2 instance to register. This signature can be found by running the following command from the instance: <code>curl http://169.254.169.254/latest/dynamic/instance-identity/signature/</code> </p>"
        },
        "totalResources":{
          "shape":"Resources",
          "documentation":"<p>The resources available on the instance.</p>"
        },
        "versionInfo":{
          "shape":"VersionInfo",
          "documentation":"<p>The version information for the Amazon ECS container agent and Docker daemon running on the container instance.</p>"
        },
        "containerInstanceArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the container instance (if it was previously registered).</p>"
        },
        "attributes":{
          "shape":"Attributes",
          "documentation":"<p>The container instance attributes that this container instance supports.</p>"
        }
      }
    },
    "RegisterContainerInstanceResponse":{
      "type":"structure",
      "members":{
        "containerInstance":{
          "shape":"ContainerInstance",
          "documentation":"<p>The container instance that was registered.</p>"
        }
      }
    },
    "RegisterTaskDefinitionRequest":{
      "type":"structure",
      "required":[
        "family",
        "containerDefinitions"
      ],
      "members":{
        "family":{
          "shape":"String",
          "documentation":"<p>You must specify a <code>family</code> for a task definition, which allows you to track multiple versions of the same task definition. The <code>family</code> is used as a name for your task definition. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p>"
        },
        "taskRoleArn":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html\">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "executionRoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.</p>"
        },
        "networkMode":{
          "shape":"NetworkMode",
          "documentation":"<p>The Docker networking mode to use for the containers in the task. The valid values are <code>none</code>, <code>bridge</code>, <code>awsvpc</code>, and <code>host</code>. The default Docker network mode is <code>bridge</code>. If using the Fargate launch type, the <code>awsvpc</code> network mode is required. If using the EC2 launch type, any network mode can be used. If the network mode is set to <code>none</code>, you can't specify port mappings in your container definitions, and the task's containers do not have external connectivity. The <code>host</code> and <code>awsvpc</code> network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the <code>bridge</code> mode.</p> <p>With the <code>host</code> and <code>awsvpc</code> network modes, exposed container ports are mapped directly to the corresponding host port (for the <code>host</code> network mode) or the attached elastic network interface port (for the <code>awsvpc</code> network mode), so you cannot take advantage of dynamic host port mappings. </p> <p>If the network mode is <code>awsvpc</code>, the task is allocated an Elastic Network Interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html\">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If the network mode is <code>host</code>, you can't run multiple instantiations of the same task on a single container instance when port mappings are used.</p> <p>Docker for Windows uses different network modes than Docker for Linux. When you register a task definition with Windows containers, you must not specify a network mode.</p> <p>For more information, see <a href=\"https://docs.docker.com/engine/reference/run/#network-settings\">Network settings</a> in the <i>Docker run reference</i>.</p>"
        },
        "containerDefinitions":{
          "shape":"ContainerDefinitions",
          "documentation":"<p>A list of container definitions in JSON format that describe the different containers that make up your task.</p>"
        },
        "volumes":{
          "shape":"VolumeList",
          "documentation":"<p>A list of volume definitions in JSON format that containers in your task may use.</p>"
        },
        "placementConstraints":{
          "shape":"TaskDefinitionPlacementConstraints",
          "documentation":"<p>An array of placement constraint objects to use for the task. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at run time).</p>"
        },
        "requiresCompatibilities":{
          "shape":"CompatibilityList",
          "documentation":"<p>The launch type required by the task. If no value is specified, it defaults to <code>EC2</code>.</p>"
        },
        "cpu":{
          "shape":"String",
          "documentation":"<p>The number of CPU units used by the task. It can be expressed as an integer using CPU units, for example <code>1024</code>, or as a string using vCPUs, for example <code>1 vCPU</code> or <code>1 vcpu</code>, in a task definition. String values are converted to an integer indicating the CPU units when the task definition is registered.</p> <note> <p>Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.</p> </note> <p>If using the EC2 launch type, this field is optional. Supported values are between <code>128</code> CPU units (<code>0.125</code> vCPUs) and <code>10240</code> CPU units (<code>10</code> vCPUs).</p> <p>If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the <code>memory</code> parameter:</p> <ul> <li> <p>256 (.25 vCPU) - Available <code>memory</code> values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)</p> </li> <li> <p>512 (.5 vCPU) - Available <code>memory</code> values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)</p> </li> <li> <p>1024 (1 vCPU) - Available <code>memory</code> values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)</p> </li> <li> <p>2048 (2 vCPU) - Available <code>memory</code> values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)</p> </li> <li> <p>4096 (4 vCPU) - Available <code>memory</code> values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)</p> </li> </ul>"
        },
        "memory":{
          "shape":"String",
          "documentation":"<p>The amount of memory (in MiB) used by the task. It can be expressed as an integer using MiB, for example <code>1024</code>, or as a string using GB, for example <code>1GB</code> or <code>1 GB</code>, in a task definition. String values are converted to an integer indicating the MiB when the task definition is registered.</p> <note> <p>Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.</p> </note> <p>If using the EC2 launch type, this field is optional.</p> <p>If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the <code>cpu</code> parameter:</p> <ul> <li> <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p> </li> <li> <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p> </li> <li> <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p> </li> <li> <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p> </li> <li> <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p> </li> </ul>"
        }
      }
    },
    "RegisterTaskDefinitionResponse":{
      "type":"structure",
      "members":{
        "taskDefinition":{
          "shape":"TaskDefinition",
          "documentation":"<p>The full description of the registered task definition.</p>"
        }
      }
    },
    "RepositoryCredentials":{
      "type":"structure",
      "required":["credentialsParameter"],
      "members":{
        "credentialsParameter":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) or name of the secret containing the private repository credentials.</p>"
        }
      },
      "documentation":"<p>The repository credentials for private registry authentication.</p>"
    },
    "RequiresAttributes":{
      "type":"list",
      "member":{"shape":"Attribute"}
    },
    "Resource":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the resource, such as <code>CPU</code>, <code>MEMORY</code>, <code>PORTS</code>, <code>PORTS_UDP</code>, or a user-defined resource.</p>"
        },
        "type":{
          "shape":"String",
          "documentation":"<p>The type of the resource, such as <code>INTEGER</code>, <code>DOUBLE</code>, <code>LONG</code>, or <code>STRINGSET</code>.</p>"
        },
        "doubleValue":{
          "shape":"Double",
          "documentation":"<p>When the <code>doubleValue</code> type is set, the value of the resource must be a double precision floating-point type.</p>"
        },
        "longValue":{
          "shape":"Long",
          "documentation":"<p>When the <code>longValue</code> type is set, the value of the resource must be an extended precision floating-point type.</p>"
        },
        "integerValue":{
          "shape":"Integer",
          "documentation":"<p>When the <code>integerValue</code> type is set, the value of the resource must be an integer.</p>"
        },
        "stringSetValue":{
          "shape":"StringList",
          "documentation":"<p>When the <code>stringSetValue</code> type is set, the value of the resource must be a string type.</p>"
        }
      },
      "documentation":"<p>Describes the resources available for a container instance.</p>"
    },
    "Resources":{
      "type":"list",
      "member":{"shape":"Resource"}
    },
    "RunTaskRequest":{
      "type":"structure",
      "required":["taskDefinition"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster on which to run your task. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "taskDefinition":{
          "shape":"String",
          "documentation":"<p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run. If a <code>revision</code> is not specified, the latest <code>ACTIVE</code> revision is used.</p>"
        },
        "overrides":{
          "shape":"TaskOverride",
          "documentation":"<p>A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that is specified in the task definition or Docker image) with a <code>command</code> override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an <code>environment</code> override.</p> <note> <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure.</p> </note>"
        },
        "count":{
          "shape":"BoxedInteger",
          "documentation":"<p>The number of instantiations of the specified task to place on your cluster. You can specify up to 10 tasks per call.</p>"
        },
        "startedBy":{
          "shape":"String",
          "documentation":"<p>An optional tag specified when a task is started. For example if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the <code>startedBy</code> parameter. You can then identify which tasks belong to that job by filtering the results of a <a>ListTasks</a> call with the <code>startedBy</code> value. Up to 36 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p> <p>If a task is started by an Amazon ECS service, then the <code>startedBy</code> parameter contains the deployment ID of the service that starts it.</p>"
        },
        "group":{
          "shape":"String",
          "documentation":"<p>The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).</p>"
        },
        "placementConstraints":{
          "shape":"PlacementConstraints",
          "documentation":"<p>An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at run time).</p>"
        },
        "placementStrategy":{
          "shape":"PlacementStrategies",
          "documentation":"<p>The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.</p>"
        },
        "launchType":{
          "shape":"LaunchType",
          "documentation":"<p>The launch type on which to run your task.</p>"
        },
        "platformVersion":{
          "shape":"String",
          "documentation":"<p>The platform version on which to run your task. If one is not specified, the latest version is used by default.</p>"
        },
        "networkConfiguration":{
          "shape":"NetworkConfiguration",
          "documentation":"<p>The network configuration for the task. This parameter is required for task definitions that use the <code>awsvpc</code> network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html\">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        }
      }
    },
    "RunTaskResponse":{
      "type":"structure",
      "members":{
        "tasks":{
          "shape":"Tasks",
          "documentation":"<p>A full description of the tasks that were run. The tasks that were successfully placed on your cluster are described here.</p>"
        },
        "failures":{
          "shape":"Failures",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "SchedulingStrategy":{
      "type":"string",
      "enum":[
        "REPLICA",
        "DAEMON"
      ]
    },
    "Scope":{
      "type":"string",
      "enum":[
        "task",
        "shared"
      ]
    },
    "ServerException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>These errors are usually caused by a server issue.</p>",
      "exception":true,
      "fault":true
    },
    "Service":{
      "type":"structure",
      "members":{
        "serviceArn":{
          "shape":"String",
          "documentation":"<p>The ARN that identifies the service. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the service, the AWS account ID of the service owner, the <code>service</code> namespace, and then the service name. For example, <code>arn:aws:ecs:<i>region</i>:<i>012345678910</i>:service/<i>my-service</i> </code>.</p>"
        },
        "serviceName":{
          "shape":"String",
          "documentation":"<p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.</p>"
        },
        "clusterArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the cluster that hosts the service.</p>"
        },
        "loadBalancers":{
          "shape":"LoadBalancers",
          "documentation":"<p>A list of Elastic Load Balancing load balancer objects, containing the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer.</p> <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers; Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose <code>ip</code> as the target type, not <code>instance</code>, because tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p>"
        },
        "serviceRegistries":{
          "shape":"ServiceRegistries",
          "documentation":"<p/>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the service. The valid values are <code>ACTIVE</code>, <code>DRAINING</code>, or <code>INACTIVE</code>.</p>"
        },
        "desiredCount":{
          "shape":"Integer",
          "documentation":"<p>The desired number of instantiations of the task definition to keep running on the service. This value is specified when the service is created with <a>CreateService</a>, and it can be modified with <a>UpdateService</a>.</p>"
        },
        "runningCount":{
          "shape":"Integer",
          "documentation":"<p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.</p>"
        },
        "pendingCount":{
          "shape":"Integer",
          "documentation":"<p>The number of tasks in the cluster that are in the <code>PENDING</code> state.</p>"
        },
        "launchType":{
          "shape":"LaunchType",
          "documentation":"<p>The launch type on which your service is running.</p>"
        },
        "platformVersion":{
          "shape":"String",
          "documentation":"<p>The platform version on which your task is running. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html\">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "taskDefinition":{
          "shape":"String",
          "documentation":"<p>The task definition to use for tasks in the service. This value is specified when the service is created with <a>CreateService</a>, and it can be modified with <a>UpdateService</a>.</p>"
        },
        "deploymentConfiguration":{
          "shape":"DeploymentConfiguration",
          "documentation":"<p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>"
        },
        "deployments":{
          "shape":"Deployments",
          "documentation":"<p>The current state of deployments for the service.</p>"
        },
        "roleArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the IAM role associated with the service that allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.</p>"
        },
        "events":{
          "shape":"ServiceEvents",
          "documentation":"<p>The event stream for your service. A maximum of 100 of the latest events are displayed.</p>"
        },
        "createdAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the service was created.</p>"
        },
        "placementConstraints":{
          "shape":"PlacementConstraints",
          "documentation":"<p>The placement constraints for the tasks in the service.</p>"
        },
        "placementStrategy":{
          "shape":"PlacementStrategies",
          "documentation":"<p>The placement strategy that determines how tasks for the service are placed.</p>"
        },
        "networkConfiguration":{
          "shape":"NetworkConfiguration",
          "documentation":"<p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>"
        },
        "healthCheckGracePeriodSeconds":{
          "shape":"BoxedInteger",
          "documentation":"<p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.</p>"
        },
        "schedulingStrategy":{
          "shape":"SchedulingStrategy",
          "documentation":"<p>The scheduling strategy to use for the service. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguideecs_services.html\">Services</a>.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code>-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions.</p> </li> <li> <p> <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one task on each container instance in your cluster. When using this strategy, do not specify a desired number of tasks or any task placement strategies.</p> <note> <p>Fargate tasks do not support the <code>DAEMON</code> scheduling strategy.</p> </note> </li> </ul>"
        }
      },
      "documentation":"<p>Details on a service within a cluster</p>"
    },
    "ServiceEvent":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"String",
          "documentation":"<p>The ID string of the event.</p>"
        },
        "createdAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the event was triggered.</p>"
        },
        "message":{
          "shape":"String",
          "documentation":"<p>The event message.</p>"
        }
      },
      "documentation":"<p>Details on an event associated with a service.</p>"
    },
    "ServiceEvents":{
      "type":"list",
      "member":{"shape":"ServiceEvent"}
    },
    "ServiceNotActiveException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>",
      "exception":true
    },
    "ServiceNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and region-specific.</p>",
      "exception":true
    },
    "ServiceRegistries":{
      "type":"list",
      "member":{"shape":"ServiceRegistry"}
    },
    "ServiceRegistry":{
      "type":"structure",
      "members":{
        "registryArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is Amazon Route 53 Auto Naming. For more information, see <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html\">Service</a>.</p>"
        },
        "port":{
          "shape":"BoxedInteger",
          "documentation":"<p>The port value used if your service discovery service specified an SRV record. This field may be used if both the <code>awsvpc</code> network mode and SRV records are used.</p>"
        },
        "containerName":{
          "shape":"String",
          "documentation":"<p>The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the <code>bridge</code> or <code>host</code> network mode, you must specify a <code>containerName</code> and <code>containerPort</code> combination from the task definition. If the task definition that your service task specifies uses the <code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify either a <code>containerName</code> and <code>containerPort</code> combination or a <code>port</code> value, but not both.</p>"
        },
        "containerPort":{
          "shape":"BoxedInteger",
          "documentation":"<p>The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the <code>bridge</code> or <code>host</code> network mode, you must specify a <code>containerName</code> and <code>containerPort</code> combination from the task definition. If the task definition your service task specifies uses the <code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify either a <code>containerName</code> and <code>containerPort</code> combination or a <code>port</code> value, but not both.</p>"
        }
      },
      "documentation":"<p>Details of the service registry.</p>"
    },
    "Services":{
      "type":"list",
      "member":{"shape":"Service"}
    },
    "SortOrder":{
      "type":"string",
      "enum":[
        "ASC",
        "DESC"
      ]
    },
    "StartTaskRequest":{
      "type":"structure",
      "required":[
        "taskDefinition",
        "containerInstances"
      ],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster on which to start your task. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "taskDefinition":{
          "shape":"String",
          "documentation":"<p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to start. If a <code>revision</code> is not specified, the latest <code>ACTIVE</code> revision is used.</p>"
        },
        "overrides":{
          "shape":"TaskOverride",
          "documentation":"<p>A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that is specified in the task definition or Docker image) with a <code>command</code> override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an <code>environment</code> override.</p> <note> <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure.</p> </note>"
        },
        "containerInstances":{
          "shape":"StringList",
          "documentation":"<p>The container instance IDs or full ARN entries for the container instances on which you would like to place your task. You can specify up to 10 container instances.</p>"
        },
        "startedBy":{
          "shape":"String",
          "documentation":"<p>An optional tag specified when a task is started. For example if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the <code>startedBy</code> parameter. You can then identify which tasks belong to that job by filtering the results of a <a>ListTasks</a> call with the <code>startedBy</code> value. Up to 36 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p> <p>If a task is started by an Amazon ECS service, then the <code>startedBy</code> parameter contains the deployment ID of the service that starts it.</p>"
        },
        "group":{
          "shape":"String",
          "documentation":"<p>The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).</p>"
        },
        "networkConfiguration":{
          "shape":"NetworkConfiguration",
          "documentation":"<p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>"
        }
      }
    },
    "StartTaskResponse":{
      "type":"structure",
      "members":{
        "tasks":{
          "shape":"Tasks",
          "documentation":"<p>A full description of the tasks that were started. Each task that was successfully placed on your container instances is described.</p>"
        },
        "failures":{
          "shape":"Failures",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "Statistics":{
      "type":"list",
      "member":{"shape":"KeyValuePair"}
    },
    "StopTaskRequest":{
      "type":"structure",
      "required":["task"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to stop. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "task":{
          "shape":"String",
          "documentation":"<p>The task ID or full ARN entry of the task to stop.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>An optional message specified when a task is stopped. For example, if you are using a custom scheduler, you can use this parameter to specify the reason for stopping the task here, and the message appears in subsequent <a>DescribeTasks</a> API operations on this task. Up to 255 characters are allowed in this message.</p>"
        }
      }
    },
    "StopTaskResponse":{
      "type":"structure",
      "members":{
        "task":{
          "shape":"Task",
          "documentation":"<p>The task that was stopped.</p>"
        }
      }
    },
    "String":{"type":"string"},
    "StringList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "StringMap":{
      "type":"map",
      "key":{"shape":"String"},
      "value":{"shape":"String"}
    },
    "SubmitContainerStateChangeRequest":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full ARN of the cluster that hosts the container.</p>"
        },
        "task":{
          "shape":"String",
          "documentation":"<p>The task ID or full Amazon Resource Name (ARN) of the task that hosts the container.</p>"
        },
        "containerName":{
          "shape":"String",
          "documentation":"<p>The name of the container.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the state change request.</p>"
        },
        "exitCode":{
          "shape":"BoxedInteger",
          "documentation":"<p>The exit code returned for the state change request.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>The reason for the state change request.</p>"
        },
        "networkBindings":{
          "shape":"NetworkBindings",
          "documentation":"<p>The network bindings of the container.</p>"
        }
      }
    },
    "SubmitContainerStateChangeResponse":{
      "type":"structure",
      "members":{
        "acknowledgment":{
          "shape":"String",
          "documentation":"<p>Acknowledgement of the state change.</p>"
        }
      }
    },
    "SubmitTaskStateChangeRequest":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task.</p>"
        },
        "task":{
          "shape":"String",
          "documentation":"<p>The task ID or full ARN of the task in the state change request.</p>"
        },
        "status":{
          "shape":"String",
          "documentation":"<p>The status of the state change request.</p>"
        },
        "reason":{
          "shape":"String",
          "documentation":"<p>The reason for the state change request.</p>"
        },
        "containers":{
          "shape":"ContainerStateChanges",
          "documentation":"<p>Any containers associated with the state change request.</p>"
        },
        "attachments":{
          "shape":"AttachmentStateChanges",
          "documentation":"<p>Any attachments associated with the state change request.</p>"
        },
        "pullStartedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the container image pull began.</p>"
        },
        "pullStoppedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the container image pull completed.</p>"
        },
        "executionStoppedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the task execution stopped.</p>"
        }
      }
    },
    "SubmitTaskStateChangeResponse":{
      "type":"structure",
      "members":{
        "acknowledgment":{
          "shape":"String",
          "documentation":"<p>Acknowledgement of the state change.</p>"
        }
      }
    },
    "SystemControl":{
      "type":"structure",
      "members":{
        "namespace":{
          "shape":"String",
          "documentation":"<p>The namespaced kernel parameter to set a <code>value</code> for.</p>"
        },
        "value":{
          "shape":"String",
          "documentation":"<p>The value for the namespaced kernel parameter specifed in <code>namespace</code>.</p>"
        }
      },
      "documentation":"<p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--sysctl</code> option to <a href=\"https://docs.docker.com/engine/reference/run/\">docker run</a>.</p> <note> <p>It is not recommended that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task that also uses either the <code>awsvpc</code> or <code>host</code> network modes. When you do, the container that is started last will determine which <code>systemControls</code> parameters take effect.</p> </note>"
    },
    "SystemControls":{
      "type":"list",
      "member":{"shape":"SystemControl"}
    },
    "TargetNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified target could not be found. You can view your available container instances with <a>ListContainerInstances</a>. Amazon ECS container instances are cluster-specific and region-specific.</p>",
      "exception":true
    },
    "TargetType":{
      "type":"string",
      "enum":["container-instance"]
    },
    "Task":{
      "type":"structure",
      "members":{
        "taskArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the task.</p>"
        },
        "clusterArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the cluster that hosts the task.</p>"
        },
        "taskDefinitionArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the task definition that creates the task.</p>"
        },
        "containerInstanceArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the container instances that host the task.</p>"
        },
        "overrides":{
          "shape":"TaskOverride",
          "documentation":"<p>One or more container overrides.</p>"
        },
        "lastStatus":{
          "shape":"String",
          "documentation":"<p>The last known status of the task. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_life_cycle.html\">Task Lifecycle</a>.</p>"
        },
        "desiredStatus":{
          "shape":"String",
          "documentation":"<p>The desired status of the task. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_life_cycle.html\">Task Lifecycle</a>.</p>"
        },
        "cpu":{
          "shape":"String",
          "documentation":"<p>The number of CPU units used by the task. It can be expressed as an integer using CPU units, for example <code>1024</code>, or as a string using vCPUs, for example <code>1 vCPU</code> or <code>1 vcpu</code>, in a task definition. String values are converted to an integer indicating the CPU units when the task definition is registered.</p> <p>If using the EC2 launch type, this field is optional. Supported values are between <code>128</code> CPU units (<code>0.125</code> vCPUs) and <code>10240</code> CPU units (<code>10</code> vCPUs).</p> <p>If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the <code>memory</code> parameter:</p> <ul> <li> <p>256 (.25 vCPU) - Available <code>memory</code> values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)</p> </li> <li> <p>512 (.5 vCPU) - Available <code>memory</code> values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)</p> </li> <li> <p>1024 (1 vCPU) - Available <code>memory</code> values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)</p> </li> <li> <p>2048 (2 vCPU) - Available <code>memory</code> values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)</p> </li> <li> <p>4096 (4 vCPU) - Available <code>memory</code> values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)</p> </li> </ul>"
        },
        "memory":{
          "shape":"String",
          "documentation":"<p>The amount of memory (in MiB) used by the task. It can be expressed as an integer using MiB, for example <code>1024</code>, or as a string using GB, for example <code>1GB</code> or <code>1 GB</code>, in a task definition. String values are converted to an integer indicating the MiB when the task definition is registered.</p> <p>If using the EC2 launch type, this field is optional.</p> <p>If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the <code>cpu</code> parameter:</p> <ul> <li> <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p> </li> <li> <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p> </li> <li> <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p> </li> <li> <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p> </li> <li> <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p> </li> </ul>"
        },
        "containers":{
          "shape":"Containers",
          "documentation":"<p>The containers associated with the task.</p>"
        },
        "startedBy":{
          "shape":"String",
          "documentation":"<p>The tag specified when a task is started. If the task is started by an Amazon ECS service, then the <code>startedBy</code> parameter contains the deployment ID of the service that starts it.</p>"
        },
        "version":{
          "shape":"Long",
          "documentation":"<p>The version counter for the task. Every time a task experiences a change that triggers a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS task state with CloudWatch Events, you can compare the version of a task reported by the Amazon ECS APIs with the version reported in CloudWatch Events for the task (inside the <code>detail</code> object) to verify that the version in your event stream is current.</p>"
        },
        "stoppedReason":{
          "shape":"String",
          "documentation":"<p>The reason the task was stopped.</p>"
        },
        "connectivity":{
          "shape":"Connectivity",
          "documentation":"<p>The connectivity status of a task.</p>"
        },
        "connectivityAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the task last went into <code>CONNECTED</code> status.</p>"
        },
        "pullStartedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the container image pull began.</p>"
        },
        "pullStoppedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the container image pull completed.</p>"
        },
        "executionStoppedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the task execution stopped.</p>"
        },
        "createdAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the task was created (the task entered the <code>PENDING</code> state).</p>"
        },
        "startedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the task started (the task transitioned from the <code>PENDING</code> state to the <code>RUNNING</code> state).</p>"
        },
        "stoppingAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the task stops (transitions from the <code>RUNNING</code> state to <code>STOPPED</code>).</p>"
        },
        "stoppedAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix time stamp for when the task was stopped (the task transitioned from the <code>RUNNING</code> state to the <code>STOPPED</code> state).</p>"
        },
        "group":{
          "shape":"String",
          "documentation":"<p>The name of the task group associated with the task.</p>"
        },
        "launchType":{
          "shape":"LaunchType",
          "documentation":"<p>The launch type on which your task is running.</p>"
        },
        "platformVersion":{
          "shape":"String",
          "documentation":"<p>The platform version on which your task is running. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html\">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "attachments":{
          "shape":"Attachments",
          "documentation":"<p>The elastic network adapter associated with the task if the task uses the <code>awsvpc</code> network mode.</p>"
        },
        "healthStatus":{
          "shape":"HealthStatus",
          "documentation":"<p>The health status for the task, which is determined by the health of the essential containers in the task. If all essential containers in the task are reporting as <code>HEALTHY</code>, then the task status also reports as <code>HEALTHY</code>. If any essential containers in the task are reporting as <code>UNHEALTHY</code> or <code>UNKNOWN</code>, then the task status also reports as <code>UNHEALTHY</code> or <code>UNKNOWN</code>, accordingly.</p> <note> <p>The Amazon ECS container agent does not monitor or report on Docker health checks that are embedded in a container image (such as those specified in a parent image or from the image's Dockerfile) and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image.</p> </note>"
        }
      },
      "documentation":"<p>Details on a task in a cluster.</p>"
    },
    "TaskDefinition":{
      "type":"structure",
      "members":{
        "taskDefinitionArn":{
          "shape":"String",
          "documentation":"<p>The full Amazon Resource Name (ARN) of the task definition.</p>"
        },
        "containerDefinitions":{
          "shape":"ContainerDefinitions",
          "documentation":"<p>A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html\">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "family":{
          "shape":"String",
          "documentation":"<p>The family of your task definition, used as the definition name.</p>"
        },
        "taskRoleArn":{
          "shape":"String",
          "documentation":"<p>The ARN of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.</p> <p>IAM roles for tasks on Windows require that the <code>-EnableTaskIAMRole</code> option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code in order to take advantage of the feature. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows_task_IAM_roles.html\">Windows IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "executionRoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.</p>"
        },
        "networkMode":{
          "shape":"NetworkMode",
          "documentation":"<p>The Docker networking mode to use for the containers in the task. The valid values are <code>none</code>, <code>bridge</code>, <code>awsvpc</code>, and <code>host</code>. The default Docker network mode is <code>bridge</code>. If using the Fargate launch type, the <code>awsvpc</code> network mode is required. If using the EC2 launch type, any network mode can be used. If the network mode is set to <code>none</code>, you can't specify port mappings in your container definitions, and the task's containers do not have external connectivity. The <code>host</code> and <code>awsvpc</code> network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the <code>bridge</code> mode.</p> <p>With the <code>host</code> and <code>awsvpc</code> network modes, exposed container ports are mapped directly to the corresponding host port (for the <code>host</code> network mode) or the attached elastic network interface port (for the <code>awsvpc</code> network mode), so you cannot take advantage of dynamic host port mappings. </p> <p>If the network mode is <code>awsvpc</code>, the task is allocated an Elastic Network Interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html\">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Currently, only the Amazon ECS-optimized AMI, other Amazon Linux variants with the <code>ecs-init</code> package, or AWS Fargate infrastructure support the <code>awsvpc</code> network mode. </p> </note> <p>If the network mode is <code>host</code>, you can't run multiple instantiations of the same task on a single container instance when port mappings are used.</p> <p>Docker for Windows uses different network modes than Docker for Linux. When you register a task definition with Windows containers, you must not specify a network mode. If you use the console to register a task definition with Windows containers, you must choose the <code>&lt;default&gt;</code> network mode object. </p> <p>For more information, see <a href=\"https://docs.docker.com/engine/reference/run/#network-settings\">Network settings</a> in the <i>Docker run reference</i>.</p>"
        },
        "revision":{
          "shape":"Integer",
          "documentation":"<p>The revision of the task in a particular family. The revision is a version number of a task definition in a family. When you register a task definition for the first time, the revision is <code>1</code>; each time you register a new revision of a task definition in the same family, the revision value always increases by one (even if you have deregistered previous revisions in this family).</p>"
        },
        "volumes":{
          "shape":"VolumeList",
          "documentation":"<p>The list of volumes in a task.</p> <p>If you are using the Fargate launch type, the <code>host</code> and <code>sourcePath</code> parameters are not supported.</p> <p>For more information about volume definition parameters and defaults, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html\">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "status":{
          "shape":"TaskDefinitionStatus",
          "documentation":"<p>The status of the task definition.</p>"
        },
        "requiresAttributes":{
          "shape":"RequiresAttributes",
          "documentation":"<p>The container instance attributes required by your task. This field is not valid if using the Fargate launch type for your task.</p>"
        },
        "placementConstraints":{
          "shape":"TaskDefinitionPlacementConstraints",
          "documentation":"<p>An array of placement constraint objects to use for tasks. This field is not valid if using the Fargate launch type for your task.</p>"
        },
        "compatibilities":{
          "shape":"CompatibilityList",
          "documentation":"<p>The launch type to use with your task. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html\">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        },
        "requiresCompatibilities":{
          "shape":"CompatibilityList",
          "documentation":"<p>The launch type the task is using.</p>"
        },
        "cpu":{
          "shape":"String",
          "documentation":"<p>The number of <code>cpu</code> units used by the task. If using the EC2 launch type, this field is optional and any value can be used. If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the <code>memory</code> parameter:</p> <ul> <li> <p>256 (.25 vCPU) - Available <code>memory</code> values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)</p> </li> <li> <p>512 (.5 vCPU) - Available <code>memory</code> values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)</p> </li> <li> <p>1024 (1 vCPU) - Available <code>memory</code> values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)</p> </li> <li> <p>2048 (2 vCPU) - Available <code>memory</code> values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)</p> </li> <li> <p>4096 (4 vCPU) - Available <code>memory</code> values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)</p> </li> </ul>"
        },
        "memory":{
          "shape":"String",
          "documentation":"<p>The amount (in MiB) of memory used by the task. If using the EC2 launch type, this field is optional and any value can be used. If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the <code>cpu</code> parameter:</p> <ul> <li> <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p> </li> <li> <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p> </li> <li> <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p> </li> <li> <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p> </li> <li> <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p> </li> </ul>"
        }
      },
      "documentation":"<p>Details of a task definition.</p>"
    },
    "TaskDefinitionFamilyStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "INACTIVE",
        "ALL"
      ]
    },
    "TaskDefinitionPlacementConstraint":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"TaskDefinitionPlacementConstraintType",
          "documentation":"<p>The type of constraint. The <code>DistinctInstance</code> constraint ensures that each task in a particular group is running on a different container instance. The <code>MemberOf</code> constraint restricts selection to be from a group of valid candidates.</p>"
        },
        "expression":{
          "shape":"String",
          "documentation":"<p>A cluster query language expression to apply to the constraint. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html\">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
        }
      },
      "documentation":"<p>An object representing a constraint on task placement in the task definition.</p> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html\">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>"
    },
    "TaskDefinitionPlacementConstraintType":{
      "type":"string",
      "enum":["memberOf"]
    },
    "TaskDefinitionPlacementConstraints":{
      "type":"list",
      "member":{"shape":"TaskDefinitionPlacementConstraint"}
    },
    "TaskDefinitionStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "INACTIVE"
      ]
    },
    "TaskOverride":{
      "type":"structure",
      "members":{
        "containerOverrides":{
          "shape":"ContainerOverrides",
          "documentation":"<p>One or more container overrides sent to a task.</p>"
        },
        "taskRoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.</p>"
        },
        "executionRoleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.</p>"
        }
      },
      "documentation":"<p>The overrides associated with a task.</p>"
    },
    "Tasks":{
      "type":"list",
      "member":{"shape":"Task"}
    },
    "Timestamp":{"type":"timestamp"},
    "Tmpfs":{
      "type":"structure",
      "required":[
        "containerPath",
        "size"
      ],
      "members":{
        "containerPath":{
          "shape":"String",
          "documentation":"<p>The absolute file path where the tmpfs volume is to be mounted.</p>"
        },
        "size":{
          "shape":"Integer",
          "documentation":"<p>The size (in MiB) of the tmpfs volume.</p>"
        },
        "mountOptions":{
          "shape":"StringList",
          "documentation":"<p>The list of tmpfs volume mount options.</p> <p>Valid values: <code>\"defaults\" | \"ro\" | \"rw\" | \"suid\" | \"nosuid\" | \"dev\" | \"nodev\" | \"exec\" | \"noexec\" | \"sync\" | \"async\" | \"dirsync\" | \"remount\" | \"mand\" | \"nomand\" | \"atime\" | \"noatime\" | \"diratime\" | \"nodiratime\" | \"bind\" | \"rbind\" | \"unbindable\" | \"runbindable\" | \"private\" | \"rprivate\" | \"shared\" | \"rshared\" | \"slave\" | \"rslave\" | \"relatime\" | \"norelatime\" | \"strictatime\" | \"nostrictatime\" | \"mode\" | \"uid\" | \"gid\" | \"nr_inodes\" | \"nr_blocks\" | \"mpol\"</code> </p>"
        }
      },
      "documentation":"<p>The container path, mount options, and size of the tmpfs mount.</p>"
    },
    "TmpfsList":{
      "type":"list",
      "member":{"shape":"Tmpfs"}
    },
    "TransportProtocol":{
      "type":"string",
      "enum":[
        "tcp",
        "udp"
      ]
    },
    "Ulimit":{
      "type":"structure",
      "required":[
        "name",
        "softLimit",
        "hardLimit"
      ],
      "members":{
        "name":{
          "shape":"UlimitName",
          "documentation":"<p>The <code>type</code> of the <code>ulimit</code>.</p>"
        },
        "softLimit":{
          "shape":"Integer",
          "documentation":"<p>The soft limit for the ulimit type.</p>"
        },
        "hardLimit":{
          "shape":"Integer",
          "documentation":"<p>The hard limit for the ulimit type.</p>"
        }
      },
      "documentation":"<p>The <code>ulimit</code> settings to pass to the container.</p>"
    },
    "UlimitList":{
      "type":"list",
      "member":{"shape":"Ulimit"}
    },
    "UlimitName":{
      "type":"string",
      "enum":[
        "core",
        "cpu",
        "data",
        "fsize",
        "locks",
        "memlock",
        "msgqueue",
        "nice",
        "nofile",
        "nproc",
        "rss",
        "rtprio",
        "rttime",
        "sigpending",
        "stack"
      ]
    },
    "UnsupportedFeatureException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified task is not supported in this region.</p>",
      "exception":true
    },
    "UpdateContainerAgentRequest":{
      "type":"structure",
      "required":["containerInstance"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that your container instance is running on. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "containerInstance":{
          "shape":"String",
          "documentation":"<p>The container instance ID or full ARN entries for the container instance on which you would like to update the Amazon ECS container agent.</p>"
        }
      }
    },
    "UpdateContainerAgentResponse":{
      "type":"structure",
      "members":{
        "containerInstance":{
          "shape":"ContainerInstance",
          "documentation":"<p>The container instance for which the container agent was updated.</p>"
        }
      }
    },
    "UpdateContainerInstancesStateRequest":{
      "type":"structure",
      "required":[
        "containerInstances",
        "status"
      ],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to update. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "containerInstances":{
          "shape":"StringList",
          "documentation":"<p>A list of container instance IDs or full ARN entries.</p>"
        },
        "status":{
          "shape":"ContainerInstanceStatus",
          "documentation":"<p>The container instance state with which to update the container instance.</p>"
        }
      }
    },
    "UpdateContainerInstancesStateResponse":{
      "type":"structure",
      "members":{
        "containerInstances":{
          "shape":"ContainerInstances",
          "documentation":"<p>The list of container instances.</p>"
        },
        "failures":{
          "shape":"Failures",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "UpdateInProgressException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>There is already a current Amazon ECS container agent update in progress on the specified container instance. If the container agent becomes disconnected while it is in a transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the update process can get stuck in that state. However, when the agent reconnects, it resumes where it stopped previously.</p>",
      "exception":true
    },
    "UpdateServiceRequest":{
      "type":"structure",
      "required":["service"],
      "members":{
        "cluster":{
          "shape":"String",
          "documentation":"<p>The short name or full Amazon Resource Name (ARN) of the cluster that your service is running on. If you do not specify a cluster, the default cluster is assumed.</p>"
        },
        "service":{
          "shape":"String",
          "documentation":"<p>The name of the service to update.</p>"
        },
        "desiredCount":{
          "shape":"BoxedInteger",
          "documentation":"<p>The number of instantiations of the task to place and keep running in your service.</p>"
        },
        "taskDefinition":{
          "shape":"String",
          "documentation":"<p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run in your service. If a <code>revision</code> is not specified, the latest <code>ACTIVE</code> revision is used. If you modify the task definition with <code>UpdateService</code>, Amazon ECS spawns a task with the new version of the task definition and then stops an old task after the new version is running.</p>"
        },
        "deploymentConfiguration":{
          "shape":"DeploymentConfiguration",
          "documentation":"<p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>"
        },
        "networkConfiguration":{
          "shape":"NetworkConfiguration",
          "documentation":"<p>The network configuration for the service. This parameter is required for task definitions that use the <code>awsvpc</code> network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html\">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Updating a service to add a subnet to a list of existing subnets does not trigger a service deployment. For example, if your network configuration change is to keep the existing subnets and simply add another subnet to the network configuration, this does not trigger a new service deployment.</p> </note>"
        },
        "platformVersion":{
          "shape":"String",
          "documentation":"<p>The platform version that your service should run.</p>"
        },
        "forceNewDeployment":{
          "shape":"Boolean",
          "documentation":"<p>Whether to force a new deployment of the service. Deployments are not forced by default. You can use this option to trigger a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (<code>my_image:latest</code>) or to roll Fargate tasks onto a newer platform version.</p>"
        },
        "healthCheckGracePeriodSeconds":{
          "shape":"BoxedInteger",
          "documentation":"<p>The period of time, in seconds, that the Amazon ECS service scheduler should ignore unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid if your service is configured to use a load balancer. If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 1,800 seconds during which the ECS service scheduler ignores the Elastic Load Balancing health check status. This grace period can prevent the ECS service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.</p>"
        }
      }
    },
    "UpdateServiceResponse":{
      "type":"structure",
      "members":{
        "service":{
          "shape":"Service",
          "documentation":"<p>The full description of your service following the update call.</p>"
        }
      }
    },
    "VersionInfo":{
      "type":"structure",
      "members":{
        "agentVersion":{
          "shape":"String",
          "documentation":"<p>The version number of the Amazon ECS container agent.</p>"
        },
        "agentHash":{
          "shape":"String",
          "documentation":"<p>The Git commit hash for the Amazon ECS container agent build on the <a href=\"https://github.com/aws/amazon-ecs-agent/commits/master\">amazon-ecs-agent </a> GitHub repository.</p>"
        },
        "dockerVersion":{
          "shape":"String",
          "documentation":"<p>The Docker version running on the container instance.</p>"
        }
      },
      "documentation":"<p>The Docker and Amazon ECS container agent version information about a container instance.</p>"
    },
    "Volume":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. This name is referenced in the <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.</p>"
        },
        "host":{
          "shape":"HostVolumeProperties",
          "documentation":"<p>This parameter is specified when using bind mount host volumes. Bind mount host volumes are supported when using either the EC2 or Fargate launch types. The contents of the <code>host</code> parameter determine whether your bind mount host volume persists on the host container instance and where it is stored. If the <code>host</code> parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running.</p> <p>Windows containers can mount whole directories on the same drive as <code>$env:ProgramData</code>. Windows containers cannot mount directories on a different drive, and mount point cannot be across drives. For example, you can mount <code>C:\\my\\path:C:\\my\\path</code> and <code>D:\\:D:\\</code>, but not <code>D:\\my\\path:C:\\my\\path</code> or <code>D:\\:C:\\my\\path</code>.</p>"
        },
        "dockerVolumeConfiguration":{
          "shape":"DockerVolumeConfiguration",
          "documentation":"<p>This parameter is specified when using Docker volumes. Docker volumes are only supported when using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.</p>"
        }
      },
      "documentation":"<p>A data volume used in a task definition. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguideusing_data_volumes.html\">Using Data Volumes in Tasks</a>.</p>"
    },
    "VolumeFrom":{
      "type":"structure",
      "members":{
        "sourceContainer":{
          "shape":"String",
          "documentation":"<p>The name of another container within the same task definition to mount volumes from.</p>"
        },
        "readOnly":{
          "shape":"BoxedBoolean",
          "documentation":"<p>If this value is <code>true</code>, the container has read-only access to the volume. If this value is <code>false</code>, then the container can write to the volume. The default value is <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Details on a data volume from another container in the same task definition.</p>"
    },
    "VolumeFromList":{
      "type":"list",
      "member":{"shape":"VolumeFrom"}
    },
    "VolumeList":{
      "type":"list",
      "member":{"shape":"Volume"}
    }
  },
  "documentation":"<p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster. You can host your cluster on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks using the Fargate launch type. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2 launch type. For more information about launch types, see <a href=\"http://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html\">Amazon ECS Launch Types</a>.</p> <p>Amazon ECS lets you launch and stop container-based applications with simple API calls, allows you to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features.</p> <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates the need for you to operate your own cluster management and configuration management systems or worry about scaling your management infrastructure.</p>"
}
