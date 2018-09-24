awsim['sagemaker'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-07-24",
    "endpointPrefix":"api.sagemaker",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"SageMaker",
    "serviceFullName":"Amazon SageMaker Service",
    "serviceId":"SageMaker",
    "signatureVersion":"v4",
    "signingName":"sagemaker",
    "targetPrefix":"SageMaker",
    "uid":"sagemaker-2017-07-24"
  },
  "operations":{
    "AddTags":{
      "name":"AddTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsInput"},
      "output":{"shape":"AddTagsOutput"},
      "documentation":"<p>Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, models, endpoint configurations, and endpoints. </p> <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what\">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>"
    },
    "CreateEndpoint":{
      "name":"CreateEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateEndpointInput"},
      "output":{"shape":"CreateEndpointOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html\">CreateEndpointConfig</a> API. </p> <note> <p> Use this API only for hosting models using Amazon SageMaker hosting services. </p> </note> <p>The endpoint name must be unique within an AWS Region in your AWS account. </p> <p>When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. </p> <p>When Amazon SageMaker receives the request, it sets the endpoint status to <code>Creating</code>. After it creates the endpoint, it sets the status to <code>InService</code>. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html\">DescribeEndpoint</a> API.</p> <p>For an example, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/ex1.html\">Exercise 1: Using the K-Means Algorithm Provided by Amazon SageMaker</a>. </p> <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provided. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html\">Activating and Deactivating AWS STS i an AWS Region</a> in the <i>AWS Identity and Access Management User Guide</i>.</p>"
    },
    "CreateEndpointConfig":{
      "name":"CreateEndpointConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateEndpointConfigInput"},
      "output":{"shape":"CreateEndpointConfigOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the <code>CreateModel</code> API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html\">CreateEndpoint</a> API.</p> <note> <p> Use this API only if you want to use Amazon SageMaker hosting services to deploy models into production. </p> </note> <p>In the request, you define one or more <code>ProductionVariant</code>s, each of which identifies a model. Each <code>ProductionVariant</code> parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy. </p> <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. </p>"
    },
    "CreateHyperParameterTuningJob":{
      "name":"CreateHyperParameterTuningJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateHyperParameterTuningJobRequest"},
      "output":{"shape":"CreateHyperParameterTuningJobResponse"},
      "errors":[
        {"shape":"ResourceInUse"},
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Starts a hyperparameter tuning job.</p>"
    },
    "CreateModel":{
      "name":"CreateModel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateModelInput"},
      "output":{"shape":"CreateModelOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the docker image containing inference code, artifacts (from prior training), and custom environment map that the inference code uses when you deploy the model for predictions.</p> <p>Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch transform job.</p> <p>To host your model, you create an endpoint configuration with the <code>CreateEndpointConfig</code> API, and then create an endpoint with the <code>CreateEndpoint</code> API. Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment. </p> <p>To run a batch transform using your model, you start a job with the <code>CreateTransformJob</code> API. Amazon SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location.</p> <p>In the <code>CreateModel</code> request, you must define a container with the <code>PrimaryContainer</code> parameter.</p> <p>In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.</p>"
    },
    "CreateNotebookInstance":{
      "name":"CreateNotebookInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateNotebookInstanceInput"},
      "output":{"shape":"CreateNotebookInstanceOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. </p> <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. </p> <p>Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework. </p> <p>After receiving the request, Amazon SageMaker does the following:</p> <ol> <li> <p>Creates a network interface in the Amazon SageMaker VPC.</p> </li> <li> <p>(Option) If you specified <code>SubnetId</code>, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.</p> </li> <li> <p>Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified <code>SubnetId</code> of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.</p> </li> </ol> <p>After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN).</p> <p>After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models. </p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html\">How It Works</a>. </p>"
    },
    "CreateNotebookInstanceLifecycleConfig":{
      "name":"CreateNotebookInstanceLifecycleConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateNotebookInstanceLifecycleConfigInput"},
      "output":{"shape":"CreateNotebookInstanceLifecycleConfigOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Creates a lifecycle configuration that you can associate with a notebook instance. A <i>lifecycle configuration</i> is a collection of shell scripts that run when you create or start a notebook instance.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a>notebook-lifecycle-config</a>.</p>"
    },
    "CreatePresignedNotebookInstanceUrl":{
      "name":"CreatePresignedNotebookInstanceUrl",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePresignedNotebookInstanceUrlInput"},
      "output":{"shape":"CreatePresignedNotebookInstanceUrlOutput"},
      "documentation":"<p>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the Amazon SageMaker console, when you choose <code>Open</code> next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. To restrict access, attach an IAM policy that denies access to this API unless the call comes from an IP address in the specified list to every AWS Identity and Access Management user, group, or role used to access the notebook instance. Use the <code>NotIpAddress</code> condition operator and the <code>aws:SourceIP</code> condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see <a>nbi-ip-filter</a>.</p>"
    },
    "CreateTrainingJob":{
      "name":"CreateTrainingJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTrainingJobRequest"},
      "output":{"shape":"CreateTrainingJobResponse"},
      "errors":[
        {"shape":"ResourceInUse"},
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a deep learning service other than Amazon SageMaker, provided that you know how to use them for inferences. </p> <p>In the request body, you provide the following: </p> <ul> <li> <p> <code>AlgorithmSpecification</code> - Identifies the training algorithm to use. </p> </li> <li> <p> <code>HyperParameters</code> - Specify these algorithm-specific parameters to influence the quality of the final model. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/algos.html\">Algorithms</a>. </p> </li> <li> <p> <code>InputDataConfig</code> - Describes the training dataset and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>OutputDataConfig</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results of model training. </p> <p/> </li> <li> <p> <code>ResourceConfig</code> - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. </p> </li> <li> <p> <code>RoleARN</code> - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training. </p> </li> <li> <p> <code>StoppingCondition</code> - Sets a duration for training. Use this parameter to cap model training costs. </p> </li> </ul> <p> For more information about Amazon SageMaker, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html\">How It Works</a>. </p>"
    },
    "CreateTransformJob":{
      "name":"CreateTransformJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTransformJobRequest"},
      "output":{"shape":"CreateTransformJobResponse"},
      "errors":[
        {"shape":"ResourceInUse"},
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.</p> <p>To perform batch transformations, you create a transform job and use the data that you have readily available.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p> <code>TransformJobName</code> - Identifies the transform job. The name must be unique within an AWS Region in an AWS account.</p> </li> <li> <p> <code>ModelName</code> - Identifies the model to use. <code>ModelName</code> must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS account. For information on creating a model, see <a>CreateModel</a>.</p> </li> <li> <p> <code>TransformInput</code> - Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>TransformOutput</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p> </li> <li> <p> <code>TransformResources</code> - Identifies the ML compute instances for the transform job.</p> </li> </ul> <p> For more information about how batch transformation works Amazon SageMaker, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html\">How It Works</a>. </p>"
    },
    "DeleteEndpoint":{
      "name":"DeleteEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteEndpointInput"},
      "documentation":"<p>Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created. </p> <p>Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the <a href=\"http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html\">RevokeGrant</a> API call.</p>"
    },
    "DeleteEndpointConfig":{
      "name":"DeleteEndpointConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteEndpointConfigInput"},
      "documentation":"<p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API deletes only the specified configuration. It does not delete endpoints created using the configuration. </p>"
    },
    "DeleteModel":{
      "name":"DeleteModel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteModelInput"},
      "documentation":"<p>Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in Amazon SageMaker when you called the <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html\">CreateModel</a> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. </p>"
    },
    "DeleteNotebookInstance":{
      "name":"DeleteNotebookInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteNotebookInstanceInput"},
      "documentation":"<p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the <code>StopNotebookInstance</code> API. </p> <important> <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance. </p> </important>"
    },
    "DeleteNotebookInstanceLifecycleConfig":{
      "name":"DeleteNotebookInstanceLifecycleConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteNotebookInstanceLifecycleConfigInput"},
      "documentation":"<p>Deletes a notebook instance lifecycle configuration.</p>"
    },
    "DeleteTags":{
      "name":"DeleteTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTagsInput"},
      "output":{"shape":"DeleteTagsOutput"},
      "documentation":"<p>Deletes the specified tags from an Amazon SageMaker resource.</p> <p>To list a resource's tags, use the <code>ListTags</code> API. </p>"
    },
    "DescribeEndpoint":{
      "name":"DescribeEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEndpointInput"},
      "output":{"shape":"DescribeEndpointOutput"},
      "documentation":"<p>Returns the description of an endpoint.</p>"
    },
    "DescribeEndpointConfig":{
      "name":"DescribeEndpointConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEndpointConfigInput"},
      "output":{"shape":"DescribeEndpointConfigOutput"},
      "documentation":"<p>Returns the description of an endpoint configuration created using the <code>CreateEndpointConfig</code> API.</p>"
    },
    "DescribeHyperParameterTuningJob":{
      "name":"DescribeHyperParameterTuningJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeHyperParameterTuningJobRequest"},
      "output":{"shape":"DescribeHyperParameterTuningJobResponse"},
      "errors":[
        {"shape":"ResourceNotFound"}
      ],
      "documentation":"<p>Gets a description of a hyperparameter tuning job.</p>"
    },
    "DescribeModel":{
      "name":"DescribeModel",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeModelInput"},
      "output":{"shape":"DescribeModelOutput"},
      "documentation":"<p>Describes a model that you created using the <code>CreateModel</code> API.</p>"
    },
    "DescribeNotebookInstance":{
      "name":"DescribeNotebookInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeNotebookInstanceInput"},
      "output":{"shape":"DescribeNotebookInstanceOutput"},
      "documentation":"<p>Returns information about a notebook instance.</p>"
    },
    "DescribeNotebookInstanceLifecycleConfig":{
      "name":"DescribeNotebookInstanceLifecycleConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeNotebookInstanceLifecycleConfigInput"},
      "output":{"shape":"DescribeNotebookInstanceLifecycleConfigOutput"},
      "documentation":"<p>Returns a description of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a>notebook-lifecycle-config</a>.</p>"
    },
    "DescribeTrainingJob":{
      "name":"DescribeTrainingJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTrainingJobRequest"},
      "output":{"shape":"DescribeTrainingJobResponse"},
      "errors":[
        {"shape":"ResourceNotFound"}
      ],
      "documentation":"<p>Returns information about a training job.</p>"
    },
    "DescribeTransformJob":{
      "name":"DescribeTransformJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTransformJobRequest"},
      "output":{"shape":"DescribeTransformJobResponse"},
      "errors":[
        {"shape":"ResourceNotFound"}
      ],
      "documentation":"<p>Returns information about a transform job.</p>"
    },
    "ListEndpointConfigs":{
      "name":"ListEndpointConfigs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListEndpointConfigsInput"},
      "output":{"shape":"ListEndpointConfigsOutput"},
      "documentation":"<p>Lists endpoint configurations.</p>"
    },
    "ListEndpoints":{
      "name":"ListEndpoints",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListEndpointsInput"},
      "output":{"shape":"ListEndpointsOutput"},
      "documentation":"<p>Lists endpoints.</p>"
    },
    "ListHyperParameterTuningJobs":{
      "name":"ListHyperParameterTuningJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListHyperParameterTuningJobsRequest"},
      "output":{"shape":"ListHyperParameterTuningJobsResponse"},
      "documentation":"<p>Gets a list of <a>HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.</p>"
    },
    "ListModels":{
      "name":"ListModels",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListModelsInput"},
      "output":{"shape":"ListModelsOutput"},
      "documentation":"<p>Lists models created with the <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html\">CreateModel</a> API.</p>"
    },
    "ListNotebookInstanceLifecycleConfigs":{
      "name":"ListNotebookInstanceLifecycleConfigs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListNotebookInstanceLifecycleConfigsInput"},
      "output":{"shape":"ListNotebookInstanceLifecycleConfigsOutput"},
      "documentation":"<p>Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>"
    },
    "ListNotebookInstances":{
      "name":"ListNotebookInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListNotebookInstancesInput"},
      "output":{"shape":"ListNotebookInstancesOutput"},
      "documentation":"<p>Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region. </p>"
    },
    "ListTags":{
      "name":"ListTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagsInput"},
      "output":{"shape":"ListTagsOutput"},
      "documentation":"<p>Returns the tags for the specified Amazon SageMaker resource.</p>"
    },
    "ListTrainingJobs":{
      "name":"ListTrainingJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTrainingJobsRequest"},
      "output":{"shape":"ListTrainingJobsResponse"},
      "documentation":"<p>Lists training jobs.</p>"
    },
    "ListTrainingJobsForHyperParameterTuningJob":{
      "name":"ListTrainingJobsForHyperParameterTuningJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTrainingJobsForHyperParameterTuningJobRequest"},
      "output":{"shape":"ListTrainingJobsForHyperParameterTuningJobResponse"},
      "errors":[
        {"shape":"ResourceNotFound"}
      ],
      "documentation":"<p>Gets a list of <a>TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.</p>"
    },
    "ListTransformJobs":{
      "name":"ListTransformJobs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTransformJobsRequest"},
      "output":{"shape":"ListTransformJobsResponse"},
      "documentation":"<p>Lists transform jobs.</p>"
    },
    "StartNotebookInstance":{
      "name":"StartNotebookInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartNotebookInstanceInput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to <code>InService</code>. A notebook instance's status must be <code>InService</code> before you can connect to your Jupyter notebook. </p>"
    },
    "StopHyperParameterTuningJob":{
      "name":"StopHyperParameterTuningJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopHyperParameterTuningJobRequest"},
      "errors":[
        {"shape":"ResourceNotFound"}
      ],
      "documentation":"<p>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched.</p> <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the <code>Stopped</code> state, it releases all reserved resources for the tuning job.</p>"
    },
    "StopNotebookInstance":{
      "name":"StopNotebookInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopNotebookInstanceInput"},
      "documentation":"<p>Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. </p> <p>To access data on the ML storage volume for a notebook instance that has been terminated, call the <code>StartNotebookInstance</code> API. <code>StartNotebookInstance</code> launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. </p>"
    },
    "StopTrainingJob":{
      "name":"StopTrainingJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopTrainingJobRequest"},
      "errors":[
        {"shape":"ResourceNotFound"}
      ],
      "documentation":"<p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. </p> <p>Training algorithms provided by Amazon SageMaker save the intermediate results of a model training job. This intermediate data is a valid model artifact. You can use the model artifacts that are saved when Amazon SageMaker stops a training job to create a model. </p> <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to <code>Stopped</code>.</p>"
    },
    "StopTransformJob":{
      "name":"StopTransformJob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopTransformJobRequest"},
      "errors":[
        {"shape":"ResourceNotFound"}
      ],
      "documentation":"<p>Stops a transform job.</p> <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job changes to <code>Stopping</code>. After Amazon SageMaker stops the job, the status is set to <code>Stopped</code>. When you stop a transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>"
    },
    "UpdateEndpoint":{
      "name":"UpdateEndpoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateEndpointInput"},
      "output":{"shape":"UpdateEndpointOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p> Deploys the new <code>EndpointConfig</code> specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous <code>EndpointConfig</code> (there is no availability loss). </p> <p>When Amazon SageMaker receives the request, it sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html\">DescribeEndpoint</a> API. </p> <note> <p>You cannot update an endpoint with the current <code>EndpointConfig</code>. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note>"
    },
    "UpdateEndpointWeightsAndCapacities":{
      "name":"UpdateEndpointWeightsAndCapacities",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateEndpointWeightsAndCapacitiesInput"},
      "output":{"shape":"UpdateEndpointWeightsAndCapacitiesOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html\">DescribeEndpoint</a> API. </p>"
    },
    "UpdateNotebookInstance":{
      "name":"UpdateNotebookInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateNotebookInstanceInput"},
      "output":{"shape":"UpdateNotebookInstanceOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements. You can also update the VPC security groups.</p>"
    },
    "UpdateNotebookInstanceLifecycleConfig":{
      "name":"UpdateNotebookInstanceLifecycleConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateNotebookInstanceLifecycleConfigInput"},
      "output":{"shape":"UpdateNotebookInstanceLifecycleConfigOutput"},
      "errors":[
        {"shape":"ResourceLimitExceeded"}
      ],
      "documentation":"<p>Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>"
    }
  },
  "shapes":{
    "Accept":{
      "type":"string",
      "max":256
    },
    "AddTagsInput":{
      "type":"structure",
      "required":[
        "ResourceArn",
        "Tags"
      ],
      "members":{
        "ResourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>An array of <code>Tag</code> objects. Each tag is a key-value pair. Only the <code>key</code> parameter is required. If you don't specify a value, Amazon SageMaker sets the value to an empty string. </p>"
        }
      }
    },
    "AddTagsOutput":{
      "type":"structure",
      "members":{
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>A list of tags associated with the Amazon SageMaker resource.</p>"
        }
      }
    },
    "AlgorithmImage":{
      "type":"string",
      "max":255
    },
    "AlgorithmSpecification":{
      "type":"structure",
      "required":[
        "TrainingImage",
        "TrainingInputMode"
      ],
      "members":{
        "TrainingImage":{
          "shape":"AlgorithmImage",
          "documentation":"<p>The registry path of the Docker image that contains the training algorithm. For information about docker registry paths for built-in algorithms, see <a>sagemaker-algo-docker-registry-paths</a>.</p>"
        },
        "TrainingInputMode":{
          "shape":"TrainingInputMode",
          "documentation":"<p>The input mode that the algorithm supports. For the input modes that Amazon SageMaker algorithms support, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/algos.html\">Algorithms</a>. If an algorithm supports the <code>File</code> input mode, Amazon SageMaker downloads the training data from S3 to the provisioned ML storage Volume, and mounts the directory to docker volume for training container. If an algorithm supports the <code>Pipe</code> input mode, Amazon SageMaker streams data directly from S3 to the container. </p> <p> In File mode, make sure you provision ML storage volume with sufficient capacity to accommodate the data download from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container use ML storage volume to also store intermediate information, if any. </p> <p> For distributed algorithms using File mode, training data is distributed uniformly, and your training duration is predictable if the input data objects size is approximately same. Amazon SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed where one host in a training cluster is overloaded, thus becoming bottleneck in training. </p>"
        }
      },
      "documentation":"<p>Specifies the training algorithm to use in a <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html\">CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/algos.html\">Algorithms</a>. For information about using your own algorithms, see <a>your-algorithms</a>. </p>"
    },
    "AssemblyType":{
      "type":"string",
      "enum":[
        "None",
        "Line"
      ]
    },
    "BatchStrategy":{
      "type":"string",
      "enum":[
        "MultiRecord",
        "SingleRecord"
      ]
    },
    "CategoricalParameterRange":{
      "type":"structure",
      "required":[
        "Name",
        "Values"
      ],
      "members":{
        "Name":{
          "shape":"ParameterKey",
          "documentation":"<p>The name of the categorical hyperparameter to tune.</p>"
        },
        "Values":{
          "shape":"ParameterValues",
          "documentation":"<p>A list of the categories for the hyperparameter.</p>"
        }
      },
      "documentation":"<p>A list of categorical hyperparameters to tune.</p>"
    },
    "CategoricalParameterRanges":{
      "type":"list",
      "member":{"shape":"CategoricalParameterRange"},
      "max":20,
      "min":0
    },
    "Channel":{
      "type":"structure",
      "required":[
        "ChannelName",
        "DataSource"
      ],
      "members":{
        "ChannelName":{
          "shape":"ChannelName",
          "documentation":"<p>The name of the channel. </p>"
        },
        "DataSource":{
          "shape":"DataSource",
          "documentation":"<p>The location of the channel data.</p>"
        },
        "ContentType":{
          "shape":"ContentType",
          "documentation":"<p>The MIME type of the data.</p>"
        },
        "CompressionType":{
          "shape":"CompressionType",
          "documentation":"<p>If training data is compressed, the compression type. The default value is <code>None</code>. <code>CompressionType</code> is used only in Pipe input mode. In File mode, leave this field unset or set it to None.</p>"
        },
        "RecordWrapperType":{
          "shape":"RecordWrapper",
          "documentation":"<p/> <p>Specify RecordIO as the value when input data is in raw format but the training algorithm requires the RecordIO format, in which case, Amazon SageMaker wraps each individual S3 object in a RecordIO record. If the input data is already in RecordIO format, you don't need to set this attribute. For more information, see <a href=\"https://mxnet.incubator.apache.org/architecture/note_data_loading.html#data-format\">Create a Dataset Using RecordIO</a>. </p> <p>In FILE mode, leave this field unset or set it to None.</p> <p/>"
        }
      },
      "documentation":"<p>A channel is a named input source that training algorithms can consume. </p>"
    },
    "ChannelName":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"[A-Za-z0-9\\.\\-_]+"
    },
    "CompressionType":{
      "type":"string",
      "enum":[
        "None",
        "Gzip"
      ]
    },
    "ContainerDefinition":{
      "type":"structure",
      "required":["Image"],
      "members":{
        "ContainerHostname":{
          "shape":"ContainerHostname",
          "documentation":"<p>The DNS host name for the container after Amazon SageMaker deploys it.</p>"
        },
        "Image":{
          "shape":"Image",
          "documentation":"<p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored. If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code> image path formats. For more information, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html\">Using Your Own Algorithms with Amazon SageMaker</a> </p>"
        },
        "ModelDataUrl":{
          "shape":"Url",
          "documentation":"<p>The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). </p> <p>If you provide a value for this parameter, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html\">Activating and Deactivating AWS STS i an AWS Region</a> in the <i>AWS Identity and Access Management User Guide</i>.</p>"
        },
        "Environment":{
          "shape":"EnvironmentMap",
          "documentation":"<p>The environment variables to set in the Docker container. Each key and value in the <code>Environment</code> string to string map can have length of up to 1024. We support up to 16 entries in the map. </p>"
        }
      },
      "documentation":"<p>Describes the container, as part of model definition.</p>"
    },
    "ContainerHostname":{
      "type":"string",
      "max":63,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "ContentType":{
      "type":"string",
      "max":256
    },
    "ContinuousParameterRange":{
      "type":"structure",
      "required":[
        "Name",
        "MinValue",
        "MaxValue"
      ],
      "members":{
        "Name":{
          "shape":"ParameterKey",
          "documentation":"<p>The name of the continuous hyperparameter to tune.</p>"
        },
        "MinValue":{
          "shape":"ParameterValue",
          "documentation":"<p>The minimum value for the hyperparameter. The tuning job uses floating-point values between this value and <code>MaxValue</code>for tuning.</p>"
        },
        "MaxValue":{
          "shape":"ParameterValue",
          "documentation":"<p>The maximum value for the hyperparameter. The tuning job uses floating-point values between <code>MinValue</code> value and this value for tuning.</p>"
        }
      },
      "documentation":"<p>A list of continuous hyperparameters to tune.</p>"
    },
    "ContinuousParameterRanges":{
      "type":"list",
      "member":{"shape":"ContinuousParameterRange"},
      "max":20,
      "min":0
    },
    "CreateEndpointConfigInput":{
      "type":"structure",
      "required":[
        "EndpointConfigName",
        "ProductionVariants"
      ],
      "members":{
        "EndpointConfigName":{
          "shape":"EndpointConfigName",
          "documentation":"<p>The name of the endpoint configuration. You specify this name in a <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html\">CreateEndpoint</a> request. </p>"
        },
        "ProductionVariants":{
          "shape":"ProductionVariantList",
          "documentation":"<p>An array of <code>ProductionVariant</code> objects, one for each model that you want to host at this endpoint.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>An array of key-value pairs. For more information, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what\">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>"
        },
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p>The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.</p>"
        }
      }
    },
    "CreateEndpointConfigOutput":{
      "type":"structure",
      "required":["EndpointConfigArn"],
      "members":{
        "EndpointConfigArn":{
          "shape":"EndpointConfigArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the endpoint configuration. </p>"
        }
      }
    },
    "CreateEndpointInput":{
      "type":"structure",
      "required":[
        "EndpointName",
        "EndpointConfigName"
      ],
      "members":{
        "EndpointName":{
          "shape":"EndpointName",
          "documentation":"<p>The name of the endpoint. The name must be unique within an AWS Region in your AWS account.</p>"
        },
        "EndpointConfigName":{
          "shape":"EndpointConfigName",
          "documentation":"<p>The name of an endpoint configuration. For more information, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html\">CreateEndpointConfig</a>. </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>An array of key-value pairs. For more information, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what\">Using Cost Allocation Tags</a>in the <i>AWS Billing and Cost Management User Guide</i>. </p>"
        }
      }
    },
    "CreateEndpointOutput":{
      "type":"structure",
      "required":["EndpointArn"],
      "members":{
        "EndpointArn":{
          "shape":"EndpointArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the endpoint.</p>"
        }
      }
    },
    "CreateHyperParameterTuningJobRequest":{
      "type":"structure",
      "required":[
        "HyperParameterTuningJobName",
        "HyperParameterTuningJobConfig",
        "TrainingJobDefinition"
      ],
      "members":{
        "HyperParameterTuningJobName":{
          "shape":"HyperParameterTuningJobName",
          "documentation":"<p>The name of the tuning job. This name is the prefix for the names of all training jobs that this tuning job launches. The name must be unique within the same AWS account and AWS Region. Names are not case sensitive, and must be between 1-32 characters.</p>"
        },
        "HyperParameterTuningJobConfig":{
          "shape":"HyperParameterTuningJobConfig",
          "documentation":"<p>The <a>HyperParameterTuningJobConfig</a> object that describes the tuning job, including the search strategy, metric used to evaluate training jobs, ranges of parameters to search, and resource limits for the tuning job.</p>"
        },
        "TrainingJobDefinition":{
          "shape":"HyperParameterTrainingJobDefinition",
          "documentation":"<p>The <a>HyperParameterTrainingJobDefinition</a> object that describes the training jobs that this tuning job launches, including static hyperparameters, input data configuration, output data configuration, resource configuration, and stopping condition.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>An array of key-value pairs. You can use tags to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. For more information, see <a href=\"http://docs.aws.amazon.com//awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what\">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>"
        }
      }
    },
    "CreateHyperParameterTuningJobResponse":{
      "type":"structure",
      "required":["HyperParameterTuningJobArn"],
      "members":{
        "HyperParameterTuningJobArn":{
          "shape":"HyperParameterTuningJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the tuning job.</p>"
        }
      }
    },
    "CreateModelInput":{
      "type":"structure",
      "required":[
        "ModelName",
        "PrimaryContainer",
        "ExecutionRoleArn"
      ],
      "members":{
        "ModelName":{
          "shape":"ModelName",
          "documentation":"<p>The name of the new model.</p>"
        },
        "PrimaryContainer":{
          "shape":"ContainerDefinition",
          "documentation":"<p>The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions. </p>"
        },
        "ExecutionRoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html\">Amazon SageMaker Roles</a>. </p> <note> <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission.</p> </note>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>An array of key-value pairs. For more information, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what\">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>A <a>VpcConfig</a> object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. <code>VpcConfig</code> is currently used in hosting services but not in batch transform. For more information, see <a>host-vpc</a>.</p>"
        }
      }
    },
    "CreateModelOutput":{
      "type":"structure",
      "required":["ModelArn"],
      "members":{
        "ModelArn":{
          "shape":"ModelArn",
          "documentation":"<p>The ARN of the model created in Amazon SageMaker.</p>"
        }
      }
    },
    "CreateNotebookInstanceInput":{
      "type":"structure",
      "required":[
        "NotebookInstanceName",
        "InstanceType",
        "RoleArn"
      ],
      "members":{
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p>The name of the new notebook instance.</p>"
        },
        "InstanceType":{
          "shape":"InstanceType",
          "documentation":"<p>The type of ML compute instance to launch for the notebook instance.</p>"
        },
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance. </p>"
        },
        "SecurityGroupIds":{
          "shape":"SecurityGroupIds",
          "documentation":"<p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet. </p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p> When you send any requests to AWS resources from the notebook instance, Amazon SageMaker assumes this role to perform tasks on your behalf. You must grant this role necessary permissions so Amazon SageMaker can perform these tasks. The policy must allow the Amazon SageMaker service principal (sagemaker.amazonaws.com) permissions to assume this role. For more information, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html\">Amazon SageMaker Roles</a>. </p> <note> <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission.</p> </note>"
        },
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p> If you provide a AWS KMS key ID, Amazon SageMaker uses it to encrypt data at rest on the ML storage volume that is attached to your notebook instance. </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>A list of tags to associate with the notebook instance. You can add tags later by using the <code>CreateTags</code> API.</p>"
        },
        "LifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see <a>notebook-lifecycle-config</a>.</p>"
        },
        "DirectInternetAccess":{
          "shape":"DirectInternetAccess",
          "documentation":"<p>Sets whether Amazon SageMaker provides internet access to the notebook instance. If you set this to <code>Disabled</code> this notebook instance will be able to access resources only in your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless your configure a NAT Gateway in your VPC.</p> <p>For more information, see <a>appendix-notebook-and-internet-access</a>. You can set the value of this parameter to <code>Disabled</code> only if you set a value for the <code>SubnetId</code> parameter.</p>"
        }
      }
    },
    "CreateNotebookInstanceLifecycleConfigInput":{
      "type":"structure",
      "required":["NotebookInstanceLifecycleConfigName"],
      "members":{
        "NotebookInstanceLifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of the lifecycle configuration.</p>"
        },
        "OnCreate":{
          "shape":"NotebookInstanceLifecycleConfigList",
          "documentation":"<p>A shell script that runs only once, when you create a notebook instance.</p>"
        },
        "OnStart":{
          "shape":"NotebookInstanceLifecycleConfigList",
          "documentation":"<p>A shell script that runs every time you start a notebook instance, including when you create the notebook instance.</p>"
        }
      }
    },
    "CreateNotebookInstanceLifecycleConfigOutput":{
      "type":"structure",
      "members":{
        "NotebookInstanceLifecycleConfigArn":{
          "shape":"NotebookInstanceLifecycleConfigArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>"
        }
      }
    },
    "CreateNotebookInstanceOutput":{
      "type":"structure",
      "members":{
        "NotebookInstanceArn":{
          "shape":"NotebookInstanceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the notebook instance. </p>"
        }
      }
    },
    "CreatePresignedNotebookInstanceUrlInput":{
      "type":"structure",
      "required":["NotebookInstanceName"],
      "members":{
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p>The name of the notebook instance.</p>"
        },
        "SessionExpirationDurationInSeconds":{
          "shape":"SessionExpirationDurationInSeconds",
          "documentation":"<p>The duration of the session, in seconds. The default is 12 hours.</p>"
        }
      }
    },
    "CreatePresignedNotebookInstanceUrlOutput":{
      "type":"structure",
      "members":{
        "AuthorizedUrl":{
          "shape":"NotebookInstanceUrl",
          "documentation":"<p>A JSON object that contains the URL string. </p>"
        }
      }
    },
    "CreateTrainingJobRequest":{
      "type":"structure",
      "required":[
        "TrainingJobName",
        "AlgorithmSpecification",
        "RoleArn",
        "InputDataConfig",
        "OutputDataConfig",
        "ResourceConfig",
        "StoppingCondition"
      ],
      "members":{
        "TrainingJobName":{
          "shape":"TrainingJobName",
          "documentation":"<p>The name of the training job. The name must be unique within an AWS Region in an AWS account. </p>"
        },
        "HyperParameters":{
          "shape":"HyperParameters",
          "documentation":"<p>Algorithm-specific parameters that influence the quality of the model. You set hyperparameters before you start the learning process. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/algos.html\">Algorithms</a>. </p> <p>You can specify a maximum of 100 hyperparameters. Each hyperparameter is a key-value pair. Each key and value is limited to 256 characters, as specified by the <code>Length Constraint</code>. </p>"
        },
        "AlgorithmSpecification":{
          "shape":"AlgorithmSpecification",
          "documentation":"<p>The registry path of the Docker image that contains the training algorithm and algorithm-specific metadata, including the input mode. For more information about algorithms provided by Amazon SageMaker, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/algos.html\">Algorithms</a>. For information about providing your own algorithms, see <a>your-algorithms</a>. </p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. </p> <p>During model training, Amazon SageMaker needs your permission to read input data from an S3 bucket, download a Docker image that contains training code, write model artifacts to an S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant permissions for all of these tasks to an IAM role. For more information, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html\">Amazon SageMaker Roles</a>. </p> <note> <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission.</p> </note>"
        },
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>An array of <code>Channel</code> objects. Each channel is a named input source. <code>InputDataConfig</code> describes the input data and its location. </p> <p>Algorithms can accept input data from one or more channels. For example, an algorithm might have two channels of input data, <code>training_data</code> and <code>validation_data</code>. The configuration for each channel provides the S3 location where the input data is stored. It also provides information about the stored data: the MIME type, compression method, and whether the data is wrapped in RecordIO format. </p> <p>Depending on the input mode that the algorithm supports, Amazon SageMaker either copies input data files from an S3 bucket to a local directory in the Docker container, or makes it available as input streams. </p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>Specifies the path to the S3 bucket where you want to store model artifacts. Amazon SageMaker creates subfolders for the artifacts. </p>"
        },
        "ResourceConfig":{
          "shape":"ResourceConfig",
          "documentation":"<p>The resources, including the ML compute instances and ML storage volumes, to use for model training. </p> <p>ML storage volumes store model artifacts and incremental states. Training algorithms might also use ML storage volumes for scratch space. If you want Amazon SageMaker to use the ML storage volume to store the training data, choose <code>File</code> as the <code>TrainingInputMode</code> in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.</p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>A <a>VpcConfig</a> object that specifies the VPC that you want your training job to connect to. Control access to and from your training container by configuring the VPC. For more information, see <a>train-vpc</a> </p>"
        },
        "StoppingCondition":{
          "shape":"StoppingCondition",
          "documentation":"<p>Sets a duration for training. Use this parameter to cap model training costs. To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts. </p> <p>When Amazon SageMaker terminates a job because the stopping condition has been met, training algorithms provided by Amazon SageMaker save the intermediate results of the job. This intermediate data is a valid model artifact. You can use it to create a model using the <code>CreateModel</code> API. </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>An array of key-value pairs. For more information, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what\">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>"
        }
      }
    },
    "CreateTrainingJobResponse":{
      "type":"structure",
      "required":["TrainingJobArn"],
      "members":{
        "TrainingJobArn":{
          "shape":"TrainingJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the training job.</p>"
        }
      }
    },
    "CreateTransformJobRequest":{
      "type":"structure",
      "required":[
        "TransformJobName",
        "ModelName",
        "TransformInput",
        "TransformOutput",
        "TransformResources"
      ],
      "members":{
        "TransformJobName":{
          "shape":"TransformJobName",
          "documentation":"<p>The name of the transform job. The name must be unique within an AWS Region in an AWS account. </p>"
        },
        "ModelName":{
          "shape":"ModelName",
          "documentation":"<p>The name of the model that you want to use for the transform job. <code>ModelName</code> must be the name of an existing Amazon SageMaker model within an AWS Region in an AWS account.</p>"
        },
        "MaxConcurrentTransforms":{
          "shape":"MaxConcurrentTransforms",
          "documentation":"<p>The maximum number of parallel requests that can be sent to each instance in a transform job. This is good for algorithms that implement multiple workers on larger instances . The default value is <code>1</code>. To allow Amazon SageMaker to determine the appropriate number for <code>MaxConcurrentTransforms</code>, set the value to <code>0</code>.</p>"
        },
        "MaxPayloadInMB":{
          "shape":"MaxPayloadInMB",
          "documentation":"<p>The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata). The value in <code>MaxPayloadInMB</code> must be greater or equal to the size of a single record. You can approximate the size of a record by dividing the size of your dataset by the number of records. Then multiply this value by the number of records you want in a mini-batch. It is recommended to enter a value slightly larger than this to ensure the records fit within the maximum payload size. The default value is <code>6</code> MB. For an unlimited payload size, set the value to <code>0</code>.</p>"
        },
        "BatchStrategy":{
          "shape":"BatchStrategy",
          "documentation":"<p>Determines the number of records included in a single mini-batch. <code>SingleRecord</code> means only one record is used per mini-batch. <code>MultiRecord</code> means a mini-batch is set to contain as many records that can fit within the <code>MaxPayloadInMB</code> limit.</p> <p>Batch transform will automatically split your input data into whatever payload size is specified if you set <code>SplitType</code> to <code>Line</code> and <code>BatchStrategy</code> to <code>MultiRecord</code>. There's no need to split the dataset into smaller files or to use larger payload sizes unless the records in your dataset are very large.</p>"
        },
        "Environment":{
          "shape":"TransformEnvironmentMap",
          "documentation":"<p>The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.</p>"
        },
        "TransformInput":{
          "shape":"TransformInput",
          "documentation":"<p>Describes the input source and the way the transform job consumes it.</p>"
        },
        "TransformOutput":{
          "shape":"TransformOutput",
          "documentation":"<p>Describes the results of the transform job.</p>"
        },
        "TransformResources":{
          "shape":"TransformResources",
          "documentation":"<p>Describes the resources, including ML instance types and ML instance count, to use for the transform job.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>An array of key-value pairs. Adding tags is optional. For more information, see <a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what\">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>"
        }
      }
    },
    "CreateTransformJobResponse":{
      "type":"structure",
      "required":["TransformJobArn"],
      "members":{
        "TransformJobArn":{
          "shape":"TransformJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the transform job.</p>"
        }
      }
    },
    "CreationTime":{"type":"timestamp"},
    "DataSource":{
      "type":"structure",
      "required":["S3DataSource"],
      "members":{
        "S3DataSource":{
          "shape":"S3DataSource",
          "documentation":"<p>The S3 location of the data source that is associated with a channel.</p>"
        }
      },
      "documentation":"<p>Describes the location of the channel data.</p>"
    },
    "DeleteEndpointConfigInput":{
      "type":"structure",
      "required":["EndpointConfigName"],
      "members":{
        "EndpointConfigName":{
          "shape":"EndpointConfigName",
          "documentation":"<p>The name of the endpoint configuration that you want to delete.</p>"
        }
      }
    },
    "DeleteEndpointInput":{
      "type":"structure",
      "required":["EndpointName"],
      "members":{
        "EndpointName":{
          "shape":"EndpointName",
          "documentation":"<p>The name of the endpoint that you want to delete.</p>"
        }
      }
    },
    "DeleteModelInput":{
      "type":"structure",
      "required":["ModelName"],
      "members":{
        "ModelName":{
          "shape":"ModelName",
          "documentation":"<p>The name of the model to delete.</p>"
        }
      }
    },
    "DeleteNotebookInstanceInput":{
      "type":"structure",
      "required":["NotebookInstanceName"],
      "members":{
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p>The name of the Amazon SageMaker notebook instance to delete.</p>"
        }
      }
    },
    "DeleteNotebookInstanceLifecycleConfigInput":{
      "type":"structure",
      "required":["NotebookInstanceLifecycleConfigName"],
      "members":{
        "NotebookInstanceLifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of the lifecycle configuration to delete.</p>"
        }
      }
    },
    "DeleteTagsInput":{
      "type":"structure",
      "required":[
        "ResourceArn",
        "TagKeys"
      ],
      "members":{
        "ResourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource whose tags you want to delete.</p>"
        },
        "TagKeys":{
          "shape":"TagKeyList",
          "documentation":"<p>An array or one or more tag keys to delete.</p>"
        }
      }
    },
    "DeleteTagsOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeployedImage":{
      "type":"structure",
      "members":{
        "SpecifiedImage":{
          "shape":"Image",
          "documentation":"<p>The image path you specified when you created the model.</p>"
        },
        "ResolvedImage":{
          "shape":"Image",
          "documentation":"<p>The specific digest path of the image hosted in this <code>ProductionVariant</code>.</p>"
        },
        "ResolutionTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time when the image path for the model resolved to the <code>ResolvedImage</code> </p>"
        }
      },
      "documentation":"<p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href=\"http://docs.aws.amazon.com//AmazonECR/latest/userguide/docker-pull-ecr-image.html\">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>"
    },
    "DeployedImages":{
      "type":"list",
      "member":{"shape":"DeployedImage"}
    },
    "DescribeEndpointConfigInput":{
      "type":"structure",
      "required":["EndpointConfigName"],
      "members":{
        "EndpointConfigName":{
          "shape":"EndpointConfigName",
          "documentation":"<p>The name of the endpoint configuration.</p>"
        }
      }
    },
    "DescribeEndpointConfigOutput":{
      "type":"structure",
      "required":[
        "EndpointConfigName",
        "EndpointConfigArn",
        "ProductionVariants",
        "CreationTime"
      ],
      "members":{
        "EndpointConfigName":{
          "shape":"EndpointConfigName",
          "documentation":"<p>Name of the Amazon SageMaker endpoint configuration.</p>"
        },
        "EndpointConfigArn":{
          "shape":"EndpointConfigArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>"
        },
        "ProductionVariants":{
          "shape":"ProductionVariantList",
          "documentation":"<p>An array of <code>ProductionVariant</code> objects, one for each model that you want to host at this endpoint.</p>"
        },
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p>AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the endpoint configuration was created.</p>"
        }
      }
    },
    "DescribeEndpointInput":{
      "type":"structure",
      "required":["EndpointName"],
      "members":{
        "EndpointName":{
          "shape":"EndpointName",
          "documentation":"<p>The name of the endpoint.</p>"
        }
      }
    },
    "DescribeEndpointOutput":{
      "type":"structure",
      "required":[
        "EndpointName",
        "EndpointArn",
        "EndpointConfigName",
        "EndpointStatus",
        "CreationTime",
        "LastModifiedTime"
      ],
      "members":{
        "EndpointName":{
          "shape":"EndpointName",
          "documentation":"<p>Name of the endpoint.</p>"
        },
        "EndpointArn":{
          "shape":"EndpointArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the endpoint.</p>"
        },
        "EndpointConfigName":{
          "shape":"EndpointConfigName",
          "documentation":"<p>The name of the endpoint configuration associated with this endpoint.</p>"
        },
        "ProductionVariants":{
          "shape":"ProductionVariantSummaryList",
          "documentation":"<p> An array of <a>ProductionVariantSummary</a> objects, one for each model hosted behind this endpoint. </p>"
        },
        "EndpointStatus":{
          "shape":"EndpointStatus",
          "documentation":"<p>The status of the endpoint.</p>"
        },
        "FailureReason":{
          "shape":"FailureReason",
          "documentation":"<p>If the status of the endpoint is <code>Failed</code>, the reason why it failed. </p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the endpoint was created.</p>"
        },
        "LastModifiedTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the endpoint was last modified.</p>"
        }
      }
    },
    "DescribeHyperParameterTuningJobRequest":{
      "type":"structure",
      "required":["HyperParameterTuningJobName"],
      "members":{
        "HyperParameterTuningJobName":{
          "shape":"HyperParameterTuningJobName",
          "documentation":"<p>The name of the tuning job to describe.</p>"
        }
      }
    },
    "DescribeHyperParameterTuningJobResponse":{
      "type":"structure",
      "required":[
        "HyperParameterTuningJobName",
        "HyperParameterTuningJobArn",
        "HyperParameterTuningJobConfig",
        "TrainingJobDefinition",
        "HyperParameterTuningJobStatus",
        "CreationTime",
        "TrainingJobStatusCounters",
        "ObjectiveStatusCounters"
      ],
      "members":{
        "HyperParameterTuningJobName":{
          "shape":"HyperParameterTuningJobName",
          "documentation":"<p>The name of the tuning job.</p>"
        },
        "HyperParameterTuningJobArn":{
          "shape":"HyperParameterTuningJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the tuning job.</p>"
        },
        "HyperParameterTuningJobConfig":{
          "shape":"HyperParameterTuningJobConfig",
          "documentation":"<p>The <a>HyperParameterTuningJobConfig</a> object that specifies the configuration of the tuning job.</p>"
        },
        "TrainingJobDefinition":{
          "shape":"HyperParameterTrainingJobDefinition",
          "documentation":"<p>The <a>HyperParameterTrainingJobDefinition</a> object that specifies the definition of the training jobs that this tuning job launches.</p>"
        },
        "HyperParameterTuningJobStatus":{
          "shape":"HyperParameterTuningJobStatus",
          "documentation":"<p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or Stopped.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the tuning job started.</p>"
        },
        "HyperParameterTuningEndTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the tuning job ended.</p>"
        },
        "LastModifiedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the status of the tuning job was modified. </p>"
        },
        "TrainingJobStatusCounters":{
          "shape":"TrainingJobStatusCounters",
          "documentation":"<p>The <a>TrainingJobStatusCounters</a> object that specifies the number of training jobs, categorized by status, that this tuning job launched.</p>"
        },
        "ObjectiveStatusCounters":{
          "shape":"ObjectiveStatusCounters",
          "documentation":"<p>The <a>ObjectiveStatusCounters</a> object that specifies the number of training jobs, categorized by the status of their final objective metric, that this tuning job launched.</p>"
        },
        "BestTrainingJob":{
          "shape":"HyperParameterTrainingJobSummary",
          "documentation":"<p>A <a>TrainingJobSummary</a> object that describes the training job that completed with the best current <a>HyperParameterTuningJobObjective</a>.</p>"
        },
        "FailureReason":{
          "shape":"FailureReason",
          "documentation":"<p>If the tuning job failed, the reason it failed.</p>"
        }
      }
    },
    "DescribeModelInput":{
      "type":"structure",
      "required":["ModelName"],
      "members":{
        "ModelName":{
          "shape":"ModelName",
          "documentation":"<p>The name of the model.</p>"
        }
      }
    },
    "DescribeModelOutput":{
      "type":"structure",
      "required":[
        "ModelName",
        "PrimaryContainer",
        "ExecutionRoleArn",
        "CreationTime",
        "ModelArn"
      ],
      "members":{
        "ModelName":{
          "shape":"ModelName",
          "documentation":"<p>Name of the Amazon SageMaker model.</p>"
        },
        "PrimaryContainer":{
          "shape":"ContainerDefinition",
          "documentation":"<p>The location of the primary inference code, associated artifacts, and custom environment map that the inference code uses when it is deployed in production. </p>"
        },
        "ExecutionRoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that you specified for the model.</p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>A <a>VpcConfig</a> object that specifies the VPC that this model has access to. For more information, see <a>host-vpc</a> </p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the model was created.</p>"
        },
        "ModelArn":{
          "shape":"ModelArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the model.</p>"
        }
      }
    },
    "DescribeNotebookInstanceInput":{
      "type":"structure",
      "required":["NotebookInstanceName"],
      "members":{
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p>The name of the notebook instance that you want information about.</p>"
        }
      }
    },
    "DescribeNotebookInstanceLifecycleConfigInput":{
      "type":"structure",
      "required":["NotebookInstanceLifecycleConfigName"],
      "members":{
        "NotebookInstanceLifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of the lifecycle configuration to describe.</p>"
        }
      }
    },
    "DescribeNotebookInstanceLifecycleConfigOutput":{
      "type":"structure",
      "members":{
        "NotebookInstanceLifecycleConfigArn":{
          "shape":"NotebookInstanceLifecycleConfigArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>"
        },
        "NotebookInstanceLifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of the lifecycle configuration.</p>"
        },
        "OnCreate":{
          "shape":"NotebookInstanceLifecycleConfigList",
          "documentation":"<p>The shell script that runs only once, when you create a notebook instance.</p>"
        },
        "OnStart":{
          "shape":"NotebookInstanceLifecycleConfigList",
          "documentation":"<p>The shell script that runs every time you start a notebook instance, including when you create the notebook instance.</p>"
        },
        "LastModifiedTime":{
          "shape":"LastModifiedTime",
          "documentation":"<p>A timestamp that tells when the lifecycle configuration was last modified.</p>"
        },
        "CreationTime":{
          "shape":"CreationTime",
          "documentation":"<p>A timestamp that tells when the lifecycle configuration was created.</p>"
        }
      }
    },
    "DescribeNotebookInstanceOutput":{
      "type":"structure",
      "members":{
        "NotebookInstanceArn":{
          "shape":"NotebookInstanceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the notebook instance.</p>"
        },
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p> Name of the Amazon SageMaker notebook instance. </p>"
        },
        "NotebookInstanceStatus":{
          "shape":"NotebookInstanceStatus",
          "documentation":"<p>The status of the notebook instance.</p>"
        },
        "FailureReason":{
          "shape":"FailureReason",
          "documentation":"<p>If status is failed, the reason it failed.</p>"
        },
        "Url":{
          "shape":"NotebookInstanceUrl",
          "documentation":"<p>The URL that you use to connect to the Jupyter notebook that is running in your notebook instance. </p>"
        },
        "InstanceType":{
          "shape":"InstanceType",
          "documentation":"<p>The type of ML compute instance running on the notebook instance.</p>"
        },
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>The ID of the VPC subnet.</p>"
        },
        "SecurityGroups":{
          "shape":"SecurityGroupIds",
          "documentation":"<p>The IDs of the VPC security groups.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p> Amazon Resource Name (ARN) of the IAM role associated with the instance. </p>"
        },
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p> AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance. </p>"
        },
        "NetworkInterfaceId":{
          "shape":"NetworkInterfaceId",
          "documentation":"<p> Network interface IDs that Amazon SageMaker created at the time of creating the instance. </p>"
        },
        "LastModifiedTime":{
          "shape":"LastModifiedTime",
          "documentation":"<p>A timestamp. Use this parameter to retrieve the time when the notebook instance was last modified. </p>"
        },
        "CreationTime":{
          "shape":"CreationTime",
          "documentation":"<p>A timestamp. Use this parameter to return the time when the notebook instance was created</p>"
        },
        "NotebookInstanceLifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>Returns the name of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a>notebook-lifecycle-config</a>.</p>"
        },
        "DirectInternetAccess":{
          "shape":"DirectInternetAccess",
          "documentation":"<p>Describes whether Amazon SageMaker provides internet access to the notebook instance. If this value is set to <i>Disabled, he notebook instance does not have internet access, and cannot connect to Amazon SageMaker training and endpoint services</i>.</p> <p>For more information, see <a>appendix-notebook-and-internet-access</a>.</p>"
        }
      }
    },
    "DescribeTrainingJobRequest":{
      "type":"structure",
      "required":["TrainingJobName"],
      "members":{
        "TrainingJobName":{
          "shape":"TrainingJobName",
          "documentation":"<p>The name of the training job.</p>"
        }
      }
    },
    "DescribeTrainingJobResponse":{
      "type":"structure",
      "required":[
        "TrainingJobName",
        "TrainingJobArn",
        "ModelArtifacts",
        "TrainingJobStatus",
        "SecondaryStatus",
        "AlgorithmSpecification",
        "InputDataConfig",
        "ResourceConfig",
        "StoppingCondition",
        "CreationTime"
      ],
      "members":{
        "TrainingJobName":{
          "shape":"TrainingJobName",
          "documentation":"<p> Name of the model training job. </p>"
        },
        "TrainingJobArn":{
          "shape":"TrainingJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the training job.</p>"
        },
        "TuningJobArn":{
          "shape":"HyperParameterTuningJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job.</p>"
        },
        "ModelArtifacts":{
          "shape":"ModelArtifacts",
          "documentation":"<p>Information about the Amazon S3 location that is configured for storing model artifacts. </p>"
        },
        "TrainingJobStatus":{
          "shape":"TrainingJobStatus",
          "documentation":"<p>The status of the training job. </p> <p>For the <code>InProgress</code> status, Amazon SageMaker can return these secondary statuses:</p> <ul> <li> <p>Starting - Preparing for training.</p> </li> <li> <p>Downloading - Optional stage for algorithms that support File training input mode. It indicates data is being downloaded to ML storage volumes.</p> </li> <li> <p>Training - Training is in progress.</p> </li> <li> <p>Uploading - Training is complete and model upload is in progress.</p> </li> </ul> <p>For the <code>Stopped</code> training status, Amazon SageMaker can return these secondary statuses:</p> <ul> <li> <p>MaxRuntimeExceeded - Job stopped as a result of maximum allowed runtime exceeded.</p> </li> </ul>"
        },
        "SecondaryStatus":{
          "shape":"SecondaryStatus",
          "documentation":"<p> Provides granular information about the system state. For more information, see <code>TrainingJobStatus</code>. </p> <ul> <li> <p> <code>Starting</code> - starting the training job.</p> </li> <li> <p> <code>Downloading</code> - downloading the input data.</p> </li> <li> <p> <code>Training</code> - model training is in progress.</p> </li> <li> <p> <code>Uploading</code> - uploading the trained model.</p> </li> <li> <p> <code>Stopping</code> - stopping the training job.</p> </li> <li> <p> <code>Stopped</code> - the training job has stopped.</p> </li> <li> <p> <code>MaxRuntimeExceeded</code> - the training job exceeded the specified max run time and has been stopped.</p> </li> <li> <p> <code>Completed</code> - the training job has completed.</p> </li> <li> <p> <code>Failed</code> - the training job has failed. The failure reason is stored in the <code>FailureReason</code> field of <code>DescribeTrainingJobResponse</code>.</p> </li> </ul> <important> <p>The valid values for <code>SecondaryStatus</code> are subject to change. They primarily provide information on the progress of the training job.</p> </important>"
        },
        "FailureReason":{
          "shape":"FailureReason",
          "documentation":"<p>If the training job failed, the reason it failed. </p>"
        },
        "HyperParameters":{
          "shape":"HyperParameters",
          "documentation":"<p>Algorithm-specific parameters. </p>"
        },
        "AlgorithmSpecification":{
          "shape":"AlgorithmSpecification",
          "documentation":"<p>Information about the algorithm used for training, and algorithm metadata. </p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The AWS Identity and Access Management (IAM) role configured for the training job. </p>"
        },
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>An array of <code>Channel</code> objects that describes each data input channel. </p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>The S3 path where model artifacts that you configured when creating the job are stored. Amazon SageMaker creates subfolders for model artifacts. </p>"
        },
        "ResourceConfig":{
          "shape":"ResourceConfig",
          "documentation":"<p>Resources, including ML compute instances and ML storage volumes, that are configured for model training. </p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>A <a>VpcConfig</a> object that specifies the VPC that this training job has access to. For more information, see <a>train-vpc</a>.</p>"
        },
        "StoppingCondition":{
          "shape":"StoppingCondition",
          "documentation":"<p>The condition under which to stop the training job. </p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that indicates when the training job was created.</p>"
        },
        "TrainingStartTime":{
          "shape":"Timestamp",
          "documentation":"<p>Indicates the time when the training job starts on training instances. You are billed for the time interval between this time and the value of <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time. The difference is due to the time it takes to download the training data and to the size of the training container.</p>"
        },
        "TrainingEndTime":{
          "shape":"Timestamp",
          "documentation":"<p>Indicates the time when the training job ends on training instances. You are billed for the time interval between the value of <code>TrainingStartTime</code> and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>"
        },
        "LastModifiedTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that indicates when the status of the training job was last modified.</p>"
        },
        "SecondaryStatusTransitions":{
          "shape":"SecondaryStatusTransitions",
          "documentation":"<p>To give an overview of the training job lifecycle, <code>SecondaryStatusTransitions</code> is a log of time-ordered secondary statuses that a training job has transitioned.</p>"
        }
      }
    },
    "DescribeTransformJobRequest":{
      "type":"structure",
      "required":["TransformJobName"],
      "members":{
        "TransformJobName":{
          "shape":"TransformJobName",
          "documentation":"<p>The name of the transform job that you want to view details of.</p>"
        }
      }
    },
    "DescribeTransformJobResponse":{
      "type":"structure",
      "required":[
        "TransformJobName",
        "TransformJobArn",
        "TransformJobStatus",
        "ModelName",
        "TransformInput",
        "TransformResources",
        "CreationTime"
      ],
      "members":{
        "TransformJobName":{
          "shape":"TransformJobName",
          "documentation":"<p>The name of the transform job.</p>"
        },
        "TransformJobArn":{
          "shape":"TransformJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the transform job.</p>"
        },
        "TransformJobStatus":{
          "shape":"TransformJobStatus",
          "documentation":"<p>The status of the transform job. If the transform job failed, the reason is returned in the <code>FailureReason</code> field.</p>"
        },
        "FailureReason":{
          "shape":"FailureReason",
          "documentation":"<p>If the transform job failed, the reason that it failed.</p>"
        },
        "ModelName":{
          "shape":"ModelName",
          "documentation":"<p>The name of the model used in the transform job.</p>"
        },
        "MaxConcurrentTransforms":{
          "shape":"MaxConcurrentTransforms",
          "documentation":"<p>The maximum number of parallel requests on each instance node that can be launched in a transform job. The default value is 1.</p>"
        },
        "MaxPayloadInMB":{
          "shape":"MaxPayloadInMB",
          "documentation":"<p>The maximum payload size , in MB used in the transform job.</p>"
        },
        "BatchStrategy":{
          "shape":"BatchStrategy",
          "documentation":"<p>SingleRecord means only one record was used per a batch. <code>MultiRecord</code> means batches contained as many records that could possibly fit within the <code>MaxPayloadInMB</code> limit.</p>"
        },
        "Environment":{
          "shape":"TransformEnvironmentMap",
          "documentation":"<p/>"
        },
        "TransformInput":{
          "shape":"TransformInput",
          "documentation":"<p>Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p>"
        },
        "TransformOutput":{
          "shape":"TransformOutput",
          "documentation":"<p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p>"
        },
        "TransformResources":{
          "shape":"TransformResources",
          "documentation":"<p>Describes the resources, including ML instance types and ML instance count, to use for the transform job.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the transform Job was created.</p>"
        },
        "TransformStartTime":{
          "shape":"Timestamp",
          "documentation":"<p>Indicates when the transform job starts on ML instances. You are billed for the time interval between this time and the value of <code>TransformEndTime</code>.</p>"
        },
        "TransformEndTime":{
          "shape":"Timestamp",
          "documentation":"<p>Indicates when the transform job is <code>Completed</code>, <code>Stopped</code>, or <code>Failed</code>. You are billed for the time interval between this time and the value of <code>TransformStartTime</code>.</p>"
        }
      }
    },
    "DesiredWeightAndCapacity":{
      "type":"structure",
      "required":["VariantName"],
      "members":{
        "VariantName":{
          "shape":"VariantName",
          "documentation":"<p>The name of the variant to update.</p>"
        },
        "DesiredWeight":{
          "shape":"VariantWeight",
          "documentation":"<p>The variant's weight.</p>"
        },
        "DesiredInstanceCount":{
          "shape":"TaskCount",
          "documentation":"<p>The variant's capacity.</p>"
        }
      },
      "documentation":"<p>Specifies weight and capacity values for a production variant.</p>"
    },
    "DesiredWeightAndCapacityList":{
      "type":"list",
      "member":{"shape":"DesiredWeightAndCapacity"},
      "min":1
    },
    "DirectInternetAccess":{
      "type":"string",
      "enum":[
        "Enabled",
        "Disabled"
      ]
    },
    "DisassociateNotebookInstanceLifecycleConfig":{"type":"boolean"},
    "EndpointArn":{
      "type":"string",
      "max":2048,
      "min":20
    },
    "EndpointConfigArn":{
      "type":"string",
      "max":2048,
      "min":20
    },
    "EndpointConfigName":{
      "type":"string",
      "max":63,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "EndpointConfigNameContains":{
      "type":"string",
      "pattern":"[a-zA-Z0-9-]+"
    },
    "EndpointConfigSortKey":{
      "type":"string",
      "enum":[
        "Name",
        "CreationTime"
      ]
    },
    "EndpointConfigSummary":{
      "type":"structure",
      "required":[
        "EndpointConfigName",
        "EndpointConfigArn",
        "CreationTime"
      ],
      "members":{
        "EndpointConfigName":{
          "shape":"EndpointConfigName",
          "documentation":"<p>The name of the endpoint configuration.</p>"
        },
        "EndpointConfigArn":{
          "shape":"EndpointConfigArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the endpoint configuration was created.</p>"
        }
      },
      "documentation":"<p>Provides summary information for an endpoint configuration.</p>"
    },
    "EndpointConfigSummaryList":{
      "type":"list",
      "member":{"shape":"EndpointConfigSummary"}
    },
    "EndpointName":{
      "type":"string",
      "max":63,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "EndpointNameContains":{
      "type":"string",
      "pattern":"[a-zA-Z0-9-]+"
    },
    "EndpointSortKey":{
      "type":"string",
      "enum":[
        "Name",
        "CreationTime",
        "Status"
      ]
    },
    "EndpointStatus":{
      "type":"string",
      "enum":[
        "OutOfService",
        "Creating",
        "Updating",
        "SystemUpdating",
        "RollingBack",
        "InService",
        "Deleting",
        "Failed"
      ]
    },
    "EndpointSummary":{
      "type":"structure",
      "required":[
        "EndpointName",
        "EndpointArn",
        "CreationTime",
        "LastModifiedTime",
        "EndpointStatus"
      ],
      "members":{
        "EndpointName":{
          "shape":"EndpointName",
          "documentation":"<p>The name of the endpoint.</p>"
        },
        "EndpointArn":{
          "shape":"EndpointArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the endpoint.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the endpoint was created.</p>"
        },
        "LastModifiedTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the endpoint was last modified.</p>"
        },
        "EndpointStatus":{
          "shape":"EndpointStatus",
          "documentation":"<p>The status of the endpoint.</p>"
        }
      },
      "documentation":"<p>Provides summary information for an endpoint.</p>"
    },
    "EndpointSummaryList":{
      "type":"list",
      "member":{"shape":"EndpointSummary"}
    },
    "EnvironmentKey":{
      "type":"string",
      "max":1024,
      "pattern":"[a-zA-Z_][a-zA-Z0-9_]*"
    },
    "EnvironmentMap":{
      "type":"map",
      "key":{"shape":"EnvironmentKey"},
      "value":{"shape":"EnvironmentValue"},
      "max":16
    },
    "EnvironmentValue":{
      "type":"string",
      "max":1024
    },
    "FailureReason":{
      "type":"string",
      "max":1024
    },
    "FinalHyperParameterTuningJobObjectiveMetric":{
      "type":"structure",
      "required":[
        "MetricName",
        "Value"
      ],
      "members":{
        "Type":{
          "shape":"HyperParameterTuningJobObjectiveType",
          "documentation":"<p>Whether to minimize or maximize the objective metric. Valid values are Minimize and Maximize.</p>"
        },
        "MetricName":{
          "shape":"MetricName",
          "documentation":"<p>The name of the objective metric.</p>"
        },
        "Value":{
          "shape":"MetricValue",
          "documentation":"<p>The value of the objective metric.</p>"
        }
      },
      "documentation":"<p>Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.</p>"
    },
    "HyperParameterAlgorithmSpecification":{
      "type":"structure",
      "required":[
        "TrainingImage",
        "TrainingInputMode"
      ],
      "members":{
        "TrainingImage":{
          "shape":"AlgorithmImage",
          "documentation":"<p> The registry path of the Docker image that contains the training algorithm. For information about Docker registry paths for built-in algorithms, see <a>sagemaker-algo-docker-registry-paths</a>.</p>"
        },
        "TrainingInputMode":{
          "shape":"TrainingInputMode",
          "documentation":"<p>The input mode that the algorithm supports: File or Pipe. In File input mode, Amazon SageMaker downloads the training data from Amazon S3 to the storage volume that is attached to the training instance and mounts the directory to the Docker volume for the training container. In Pipe input mode, Amazon SageMaker streams data directly from Amazon S3 to the container. </p> <p>If you specify File mode, make sure that you provision the storage volume that is attached to the training instance with enough capacity to accommodate the training data downloaded from Amazon S3, the model artifacts, and intermediate information.</p> <p/> <p>For more information about input modes, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/algos.html\">Algorithms</a>. </p>"
        },
        "MetricDefinitions":{
          "shape":"MetricDefinitionList",
          "documentation":"<p>An array of <a>MetricDefinition</a> objects that specify the metrics that the algorithm emits.</p>"
        }
      },
      "documentation":"<p>Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.</p>"
    },
    "HyperParameterTrainingJobDefinition":{
      "type":"structure",
      "required":[
        "AlgorithmSpecification",
        "RoleArn",
        "InputDataConfig",
        "OutputDataConfig",
        "ResourceConfig",
        "StoppingCondition"
      ],
      "members":{
        "StaticHyperParameters":{
          "shape":"HyperParameters",
          "documentation":"<p>Specifies the values of hyperparameters that do not change for the tuning job.</p>"
        },
        "AlgorithmSpecification":{
          "shape":"HyperParameterAlgorithmSpecification",
          "documentation":"<p>The <a>HyperParameterAlgorithmSpecification</a> object that specifies the algorithm to use for the training jobs that the tuning job launches.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role associated with the training jobs that the tuning job launches.</p>"
        },
        "InputDataConfig":{
          "shape":"InputDataConfig",
          "documentation":"<p>An array of <a>Channel</a> objects that specify the input for the training jobs that the tuning job launches.</p>"
        },
        "VpcConfig":{
          "shape":"VpcConfig",
          "documentation":"<p>The <a>VpcConfig</a> object that specifies the VPC that you want the training jobs that this hyperparameter tuning job launches to connect to. Control access to and from your training container by configuring the VPC. For more information, see <a>train-vpc</a>.</p>"
        },
        "OutputDataConfig":{
          "shape":"OutputDataConfig",
          "documentation":"<p>Specifies the path to the Amazon S3 bucket where you store model artifacts from the training jobs that the tuning job launches.</p>"
        },
        "ResourceConfig":{
          "shape":"ResourceConfig",
          "documentation":"<p>The resources, including the compute instances and storage volumes, to use for the training jobs that the tuning job launches.</p> <p>Storage volumes store model artifacts and incremental states. Training algorithms might also use storage volumes for scratch space. If you want Amazon SageMaker to use the storage volume to store the training data, choose <code>File</code> as the <code>TrainingInputMode</code> in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.</p>"
        },
        "StoppingCondition":{
          "shape":"StoppingCondition",
          "documentation":"<p>Sets a maximum duration for the training jobs that the tuning job launches. Use this parameter to limit model training costs. </p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal. This delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts.</p> <p>When Amazon SageMaker terminates a job because the stopping condition has been met, training algorithms provided by Amazon SageMaker save the intermediate results of the job.</p>"
        }
      },
      "documentation":"<p>Defines the training jobs launched by a hyperparameter tuning job.</p>"
    },
    "HyperParameterTrainingJobSummaries":{
      "type":"list",
      "member":{"shape":"HyperParameterTrainingJobSummary"}
    },
    "HyperParameterTrainingJobSummary":{
      "type":"structure",
      "required":[
        "TrainingJobName",
        "TrainingJobArn",
        "CreationTime",
        "TrainingJobStatus",
        "TunedHyperParameters"
      ],
      "members":{
        "TrainingJobName":{
          "shape":"TrainingJobName",
          "documentation":"<p>The name of the training job.</p>"
        },
        "TrainingJobArn":{
          "shape":"TrainingJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the training job.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the training job was created.</p>"
        },
        "TrainingStartTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the training job started.</p>"
        },
        "TrainingEndTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the training job ended.</p>"
        },
        "TrainingJobStatus":{
          "shape":"TrainingJobStatus",
          "documentation":"<p>The status of the training job.</p>"
        },
        "TunedHyperParameters":{
          "shape":"HyperParameters",
          "documentation":"<p>A list of the hyperparameters for which you specified ranges to search.</p>"
        },
        "FailureReason":{
          "shape":"FailureReason",
          "documentation":"<p>The reason that the training job failed. </p>"
        },
        "FinalHyperParameterTuningJobObjectiveMetric":{
          "shape":"FinalHyperParameterTuningJobObjectiveMetric",
          "documentation":"<p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that specifies the value of the objective metric of the tuning job that launched this training job.</p>"
        },
        "ObjectiveStatus":{
          "shape":"ObjectiveStatus",
          "documentation":"<p>The status of the objective metric for the training job:</p> <ul> <li> <p>Succeeded: The final objective metric for the training job was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.</p> </li> </ul> <ul> <li> <p>Pending: The training job is in progress and evaluation of its final objective metric is pending.</p> </li> </ul> <ul> <li> <p>Failed: The final objective metric for the training job was not evaluated, and was not used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Specifies summary information about a training job.</p>"
    },
    "HyperParameterTuningJobArn":{
      "type":"string",
      "max":256,
      "pattern":"arn:aws[a-z\\-]*:sagemaker:[a-z0-9\\-]*:[0-9]{12}:hyper-parameter-tuning-job/.*"
    },
    "HyperParameterTuningJobConfig":{
      "type":"structure",
      "required":[
        "Strategy",
        "HyperParameterTuningJobObjective",
        "ResourceLimits",
        "ParameterRanges"
      ],
      "members":{
        "Strategy":{
          "shape":"HyperParameterTuningJobStrategyType",
          "documentation":"<p>Specifies the search strategy for hyperparameters. Currently, the only valid value is <code>Bayesian</code>.</p>"
        },
        "HyperParameterTuningJobObjective":{
          "shape":"HyperParameterTuningJobObjective",
          "documentation":"<p>The <a>HyperParameterTuningJobObjective</a> object that specifies the objective metric for this tuning job.</p>"
        },
        "ResourceLimits":{
          "shape":"ResourceLimits",
          "documentation":"<p>The <a>ResourceLimits</a> object that specifies the maximum number of training jobs and parallel training jobs for this tuning job.</p>"
        },
        "ParameterRanges":{
          "shape":"ParameterRanges",
          "documentation":"<p>The <a>ParameterRanges</a> object that specifies the ranges of hyperparameters that this tuning job searches.</p>"
        }
      },
      "documentation":"<p>Configures a hyperparameter tuning job.</p>"
    },
    "HyperParameterTuningJobName":{
      "type":"string",
      "max":32,
      "min":1,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "HyperParameterTuningJobObjective":{
      "type":"structure",
      "required":[
        "Type",
        "MetricName"
      ],
      "members":{
        "Type":{
          "shape":"HyperParameterTuningJobObjectiveType",
          "documentation":"<p>Whether to minimize or maximize the objective metric.</p>"
        },
        "MetricName":{
          "shape":"MetricName",
          "documentation":"<p>The name of the metric to use for the objective metric.</p>"
        }
      },
      "documentation":"<p>Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter.</p>"
    },
    "HyperParameterTuningJobObjectiveType":{
      "type":"string",
      "enum":[
        "Maximize",
        "Minimize"
      ]
    },
    "HyperParameterTuningJobSortByOptions":{
      "type":"string",
      "enum":[
        "Name",
        "Status",
        "CreationTime"
      ]
    },
    "HyperParameterTuningJobStatus":{
      "type":"string",
      "enum":[
        "Completed",
        "InProgress",
        "Failed",
        "Stopped",
        "Stopping"
      ]
    },
    "HyperParameterTuningJobStrategyType":{
      "type":"string",
      "documentation":"<p>The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.</p>",
      "enum":["Bayesian"]
    },
    "HyperParameterTuningJobSummaries":{
      "type":"list",
      "member":{"shape":"HyperParameterTuningJobSummary"}
    },
    "HyperParameterTuningJobSummary":{
      "type":"structure",
      "required":[
        "HyperParameterTuningJobName",
        "HyperParameterTuningJobArn",
        "HyperParameterTuningJobStatus",
        "Strategy",
        "CreationTime",
        "TrainingJobStatusCounters",
        "ObjectiveStatusCounters"
      ],
      "members":{
        "HyperParameterTuningJobName":{
          "shape":"HyperParameterTuningJobName",
          "documentation":"<p>The name of the tuning job.</p>"
        },
        "HyperParameterTuningJobArn":{
          "shape":"HyperParameterTuningJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the tuning job.</p>"
        },
        "HyperParameterTuningJobStatus":{
          "shape":"HyperParameterTuningJobStatus",
          "documentation":"<p>The status of the tuning job.</p>"
        },
        "Strategy":{
          "shape":"HyperParameterTuningJobStrategyType",
          "documentation":"<p>Specifies the search strategy hyperparameter tuning uses to choose which hyperparameters to use for each iteration. Currently, the only valid value is Bayesian.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the tuning job was created.</p>"
        },
        "HyperParameterTuningEndTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the tuning job ended.</p>"
        },
        "LastModifiedTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the tuning job was modified.</p>"
        },
        "TrainingJobStatusCounters":{
          "shape":"TrainingJobStatusCounters",
          "documentation":"<p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of training jobs, categorized by status, that this tuning job launched.</p>"
        },
        "ObjectiveStatusCounters":{
          "shape":"ObjectiveStatusCounters",
          "documentation":"<p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of training jobs, categorized by objective metric status, that this tuning job launched.</p>"
        },
        "ResourceLimits":{
          "shape":"ResourceLimits",
          "documentation":"<p>The <a>ResourceLimits</a> object that specifies the maximum number of training jobs and parallel training jobs allowed for this tuning job.</p>"
        }
      },
      "documentation":"<p>Provides summary information about a hyperparameter tuning job.</p>"
    },
    "HyperParameters":{
      "type":"map",
      "key":{"shape":"ParameterKey"},
      "value":{"shape":"ParameterValue"},
      "max":100,
      "min":0
    },
    "Image":{
      "type":"string",
      "max":255,
      "pattern":"[\\S]+"
    },
    "InputDataConfig":{
      "type":"list",
      "member":{"shape":"Channel"},
      "max":8,
      "min":1
    },
    "InstanceType":{
      "type":"string",
      "enum":[
        "ml.t2.medium",
        "ml.t2.large",
        "ml.t2.xlarge",
        "ml.t2.2xlarge",
        "ml.m4.xlarge",
        "ml.m4.2xlarge",
        "ml.m4.4xlarge",
        "ml.m4.10xlarge",
        "ml.m4.16xlarge",
        "ml.p2.xlarge",
        "ml.p2.8xlarge",
        "ml.p2.16xlarge",
        "ml.p3.2xlarge",
        "ml.p3.8xlarge",
        "ml.p3.16xlarge"
      ]
    },
    "IntegerParameterRange":{
      "type":"structure",
      "required":[
        "Name",
        "MinValue",
        "MaxValue"
      ],
      "members":{
        "Name":{
          "shape":"ParameterKey",
          "documentation":"<p>The name of the hyperparameter to search.</p>"
        },
        "MinValue":{
          "shape":"ParameterValue",
          "documentation":"<p>The minimum value of the hyperparameter to search.</p>"
        },
        "MaxValue":{
          "shape":"ParameterValue",
          "documentation":"<p>The maximum value of the hyperparameter to search.</p>"
        }
      },
      "documentation":"<p>For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.</p>"
    },
    "IntegerParameterRanges":{
      "type":"list",
      "member":{"shape":"IntegerParameterRange"},
      "max":20,
      "min":0
    },
    "KmsKeyId":{
      "type":"string",
      "max":2048
    },
    "LastModifiedTime":{"type":"timestamp"},
    "ListEndpointConfigsInput":{
      "type":"structure",
      "members":{
        "SortBy":{
          "shape":"EndpointConfigSortKey",
          "documentation":"<p>The field to sort results by. The default is <code>CreationTime</code>.</p>"
        },
        "SortOrder":{
          "shape":"OrderKey",
          "documentation":"<p>The sort order for results. The default is <code>Ascending</code>.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the result of the previous <code>ListEndpointConfig</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of endpoint configurations, use the token in the next request. </p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of training jobs to return in the response.</p>"
        },
        "NameContains":{
          "shape":"EndpointConfigNameContains",
          "documentation":"<p>A string in the endpoint configuration name. This filter returns only endpoint configurations whose name contains the specified string. </p>"
        },
        "CreationTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only endpoint configurations created before the specified time (timestamp).</p>"
        },
        "CreationTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only endpoint configurations created after the specified time (timestamp).</p>"
        }
      }
    },
    "ListEndpointConfigsOutput":{
      "type":"structure",
      "required":["EndpointConfigs"],
      "members":{
        "EndpointConfigs":{
          "shape":"EndpointConfigSummaryList",
          "documentation":"<p>An array of endpoint configurations.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of endpoint configurations, use it in the subsequent request </p>"
        }
      }
    },
    "ListEndpointsInput":{
      "type":"structure",
      "members":{
        "SortBy":{
          "shape":"EndpointSortKey",
          "documentation":"<p>Sorts the list of results. The default is <code>CreationTime</code>.</p>"
        },
        "SortOrder":{
          "shape":"OrderKey",
          "documentation":"<p>The sort order for results. The default is <code>Ascending</code>.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the result of a <code>ListEndpoints</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of endpoints, use the token in the next request.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of endpoints to return in the response.</p>"
        },
        "NameContains":{
          "shape":"EndpointNameContains",
          "documentation":"<p>A string in endpoint names. This filter returns only endpoints whose name contains the specified string.</p>"
        },
        "CreationTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only endpoints that were created before the specified time (timestamp).</p>"
        },
        "CreationTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only endpoints that were created after the specified time (timestamp).</p>"
        },
        "LastModifiedTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p> A filter that returns only endpoints that were modified before the specified timestamp. </p>"
        },
        "LastModifiedTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p> A filter that returns only endpoints that were modified after the specified timestamp. </p>"
        },
        "StatusEquals":{
          "shape":"EndpointStatus",
          "documentation":"<p> A filter that returns only endpoints with the specified status. </p>"
        }
      }
    },
    "ListEndpointsOutput":{
      "type":"structure",
      "required":["Endpoints"],
      "members":{
        "Endpoints":{
          "shape":"EndpointSummaryList",
          "documentation":"<p> An array or endpoint objects. </p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request. </p>"
        }
      }
    },
    "ListHyperParameterTuningJobsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs, use the token in the next request.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of tuning jobs to return. The default value is 10.</p>",
          "box":true
        },
        "SortBy":{
          "shape":"HyperParameterTuningJobSortByOptions",
          "documentation":"<p>The field to sort results by. The default is <code>Name</code>.</p>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>The sort order for results. The default is <code>Ascending</code>.</p>"
        },
        "NameContains":{
          "shape":"NameContains",
          "documentation":"<p>A string in the tuning job name. This filter returns only tuning jobs whose name contains the specified string.</p>"
        },
        "CreationTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only tuning jobs that were created after the specified time.</p>"
        },
        "CreationTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only tuning jobs that were created before the specified time.</p>"
        },
        "LastModifiedTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only tuning jobs that were modified after the specified time.</p>"
        },
        "LastModifiedTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only tuning jobs that were modified before the specified time.</p>"
        },
        "StatusEquals":{
          "shape":"HyperParameterTuningJobStatus",
          "documentation":"<p>A filter that returns only tuning jobs with the specified status.</p>"
        }
      }
    },
    "ListHyperParameterTuningJobsResponse":{
      "type":"structure",
      "required":["HyperParameterTuningJobSummaries"],
      "members":{
        "HyperParameterTuningJobSummaries":{
          "shape":"HyperParameterTuningJobSummaries",
          "documentation":"<p>A list of <a>HyperParameterTuningJobSummary</a> objects that describe the tuning jobs that the <code>ListHyperParameterTuningJobs</code> request returned.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs, use the token in the next request.</p>"
        }
      }
    },
    "ListModelsInput":{
      "type":"structure",
      "members":{
        "SortBy":{
          "shape":"ModelSortKey",
          "documentation":"<p>Sorts the list of results. The default is <code>CreationTime</code>.</p>"
        },
        "SortOrder":{
          "shape":"OrderKey",
          "documentation":"<p>The sort order for results. The default is <code>Ascending</code>.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If the response to a previous <code>ListModels</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of models, use the token in the next request.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of models to return in the response.</p>"
        },
        "NameContains":{
          "shape":"ModelNameContains",
          "documentation":"<p>A string in the training job name. This filter returns only models in the training job whose name contains the specified string.</p>"
        },
        "CreationTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only models created before the specified time (timestamp).</p>"
        },
        "CreationTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only models created after the specified time (timestamp).</p>"
        }
      }
    },
    "ListModelsOutput":{
      "type":"structure",
      "required":["Models"],
      "members":{
        "Models":{
          "shape":"ModelSummaryList",
          "documentation":"<p>An array of <code>ModelSummary</code> objects, each of which lists a model.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of models, use it in the subsequent request. </p>"
        }
      }
    },
    "ListNotebookInstanceLifecycleConfigsInput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was truncated, the response includes a <code>NextToken</code>. To get the next set of lifecycle configurations, use the token in the next request.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of lifecycle configurations to return in the response.</p>"
        },
        "SortBy":{
          "shape":"NotebookInstanceLifecycleConfigSortKey",
          "documentation":"<p>Sorts the list of results. The default is <code>CreationTime</code>.</p>"
        },
        "SortOrder":{
          "shape":"NotebookInstanceLifecycleConfigSortOrder",
          "documentation":"<p>The sort order for results.</p>"
        },
        "NameContains":{
          "shape":"NotebookInstanceLifecycleConfigNameContains",
          "documentation":"<p>A string in the lifecycle configuration name. This filter returns only lifecycle configurations whose name contains the specified string.</p>"
        },
        "CreationTimeBefore":{
          "shape":"CreationTime",
          "documentation":"<p>A filter that returns only lifecycle configurations that were created before the specified time (timestamp).</p>"
        },
        "CreationTimeAfter":{
          "shape":"CreationTime",
          "documentation":"<p>A filter that returns only lifecycle configurations that were created after the specified time (timestamp).</p>"
        },
        "LastModifiedTimeBefore":{
          "shape":"LastModifiedTime",
          "documentation":"<p>A filter that returns only lifecycle configurations that were modified before the specified time (timestamp).</p>"
        },
        "LastModifiedTimeAfter":{
          "shape":"LastModifiedTime",
          "documentation":"<p>A filter that returns only lifecycle configurations that were modified after the specified time (timestamp).</p>"
        }
      }
    },
    "ListNotebookInstanceLifecycleConfigsOutput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the response is truncated, Amazon SageMaker returns this token. To get the next set of lifecycle configurations, use it in the next request. </p>"
        },
        "NotebookInstanceLifecycleConfigs":{
          "shape":"NotebookInstanceLifecycleConfigSummaryList",
          "documentation":"<p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing a lifecycle configuration.</p>"
        }
      }
    },
    "ListNotebookInstancesInput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the response includes a <code>NextToken</code>. You can use this token in your subsequent <code>ListNotebookInstances</code> request to fetch the next set of notebook instances. </p> <note> <p> You might specify a filter or a sort order in your request. When response is truncated, you must use the same values for the filer and sort order in the next request. </p> </note>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of notebook instances to return.</p>"
        },
        "SortBy":{
          "shape":"NotebookInstanceSortKey",
          "documentation":"<p>The field to sort results by. The default is <code>Name</code>.</p>"
        },
        "SortOrder":{
          "shape":"NotebookInstanceSortOrder",
          "documentation":"<p>The sort order for results. </p>"
        },
        "NameContains":{
          "shape":"NotebookInstanceNameContains",
          "documentation":"<p>A string in the notebook instances' name. This filter returns only notebook instances whose name contains the specified string.</p>"
        },
        "CreationTimeBefore":{
          "shape":"CreationTime",
          "documentation":"<p>A filter that returns only notebook instances that were created before the specified time (timestamp). </p>"
        },
        "CreationTimeAfter":{
          "shape":"CreationTime",
          "documentation":"<p>A filter that returns only notebook instances that were created after the specified time (timestamp).</p>"
        },
        "LastModifiedTimeBefore":{
          "shape":"LastModifiedTime",
          "documentation":"<p>A filter that returns only notebook instances that were modified before the specified time (timestamp).</p>"
        },
        "LastModifiedTimeAfter":{
          "shape":"LastModifiedTime",
          "documentation":"<p>A filter that returns only notebook instances that were modified after the specified time (timestamp).</p>"
        },
        "StatusEquals":{
          "shape":"NotebookInstanceStatus",
          "documentation":"<p>A filter that returns only notebook instances with the specified status.</p>"
        },
        "NotebookInstanceLifecycleConfigNameContains":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>A string in the name of a notebook instances lifecycle configuration associated with this notebook instance. This filter returns only notebook instances associated with a lifecycle configuration with a name that contains the specified string.</p>"
        }
      }
    },
    "ListNotebookInstancesOutput":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the response to the previous <code>ListNotebookInstances</code> request was truncated, Amazon SageMaker returns this token. To retrieve the next set of notebook instances, use the token in the next request.</p>"
        },
        "NotebookInstances":{
          "shape":"NotebookInstanceSummaryList",
          "documentation":"<p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook instance.</p>"
        }
      }
    },
    "ListTagsInput":{
      "type":"structure",
      "required":["ResourceArn"],
      "members":{
        "ResourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p> If the response to the previous <code>ListTags</code> request is truncated, Amazon SageMaker returns this token. To retrieve the next set of tags, use it in the subsequent request. </p>"
        },
        "MaxResults":{
          "shape":"ListTagsMaxResults",
          "documentation":"<p>Maximum number of tags to return.</p>"
        }
      }
    },
    "ListTagsMaxResults":{
      "type":"integer",
      "min":50
    },
    "ListTagsOutput":{
      "type":"structure",
      "members":{
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>An array of <code>Tag</code> objects, each with a tag key and a value.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p> If response is truncated, Amazon SageMaker includes a token in the response. You can use this token in your subsequent request to fetch next set of tokens. </p>"
        }
      }
    },
    "ListTrainingJobsForHyperParameterTuningJobRequest":{
      "type":"structure",
      "required":["HyperParameterTuningJobName"],
      "members":{
        "HyperParameterTuningJobName":{
          "shape":"HyperParameterTuningJobName",
          "documentation":"<p>The name of the tuning job whose training jobs you want to list.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of training jobs, use the token in the next request.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of training jobs to return. The default value is 10.</p>"
        },
        "StatusEquals":{
          "shape":"TrainingJobStatus",
          "documentation":"<p>A filter that returns only training jobs with the specified status.</p>"
        },
        "SortBy":{
          "shape":"TrainingJobSortByOptions",
          "documentation":"<p>The field to sort results by. The default is <code>Name</code>.</p> <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training jobs that did not return an objective metric are not listed.</p>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>The sort order for results. The default is <code>Ascending</code>.</p>"
        }
      }
    },
    "ListTrainingJobsForHyperParameterTuningJobResponse":{
      "type":"structure",
      "required":["TrainingJobSummaries"],
      "members":{
        "TrainingJobSummaries":{
          "shape":"HyperParameterTrainingJobSummaries",
          "documentation":"<p>A list of <a>TrainingJobSummary</a> objects that describe the training jobs that the <code>ListTrainingJobsForHyperParameterTuningJob</code> request returned.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the result of this <code>ListTrainingJobsForHyperParameterTuningJob</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of training jobs, use the token in the next request.</p>"
        }
      }
    },
    "ListTrainingJobsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the result of the previous <code>ListTrainingJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of training jobs, use the token in the next request. </p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of training jobs to return in the response.</p>",
          "box":true
        },
        "CreationTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only training jobs created after the specified time (timestamp).</p>"
        },
        "CreationTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only training jobs created before the specified time (timestamp).</p>"
        },
        "LastModifiedTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only training jobs modified after the specified time (timestamp).</p>"
        },
        "LastModifiedTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only training jobs modified before the specified time (timestamp).</p>"
        },
        "NameContains":{
          "shape":"NameContains",
          "documentation":"<p>A string in the training job name. This filter returns only training jobs whose name contains the specified string.</p>"
        },
        "StatusEquals":{
          "shape":"TrainingJobStatus",
          "documentation":"<p>A filter that retrieves only training jobs with a specific status.</p>"
        },
        "SortBy":{
          "shape":"SortBy",
          "documentation":"<p>The field to sort results by. The default is <code>CreationTime</code>.</p>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>The sort order for results. The default is <code>Ascending</code>.</p>"
        }
      }
    },
    "ListTrainingJobsResponse":{
      "type":"structure",
      "required":["TrainingJobSummaries"],
      "members":{
        "TrainingJobSummaries":{
          "shape":"TrainingJobSummaries",
          "documentation":"<p>An array of <code>TrainingJobSummary</code> objects, each listing a training job.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request.</p>"
        }
      }
    },
    "ListTransformJobsRequest":{
      "type":"structure",
      "members":{
        "CreationTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only transform jobs created after the specified time.</p>"
        },
        "CreationTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only transform jobs created before the specified time.</p>"
        },
        "LastModifiedTimeAfter":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only transform jobs modified after the specified time.</p>"
        },
        "LastModifiedTimeBefore":{
          "shape":"Timestamp",
          "documentation":"<p>A filter that returns only transform jobs modified before the specified time.</p>"
        },
        "NameContains":{
          "shape":"NameContains",
          "documentation":"<p>A string in the transform job name. This filter returns only transform jobs whose name contains the specified string.</p>"
        },
        "StatusEquals":{
          "shape":"TransformJobStatus",
          "documentation":"<p>A filter that retrieves only transform jobs with a specific status.</p>"
        },
        "SortBy":{
          "shape":"SortBy",
          "documentation":"<p>The field to sort results by. The default is <code>CreationTime</code>.</p>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>The sort order for results. The default is <code>Descending</code>.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the result of the previous <code>ListTransformJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of transform jobs, use the token in the next request.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of transform jobs to return in the response. The default value is <code>10</code>.</p>",
          "box":true
        }
      }
    },
    "ListTransformJobsResponse":{
      "type":"structure",
      "required":["TransformJobSummaries"],
      "members":{
        "TransformJobSummaries":{
          "shape":"TransformJobSummaries",
          "documentation":"<p>An array of <code>TransformJobSummary</code> objects.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of transform jobs, use it in the next request.</p>"
        }
      }
    },
    "MaxConcurrentTransforms":{
      "type":"integer",
      "min":0
    },
    "MaxNumberOfTrainingJobs":{
      "type":"integer",
      "min":1
    },
    "MaxParallelTrainingJobs":{
      "type":"integer",
      "min":1
    },
    "MaxPayloadInMB":{
      "type":"integer",
      "min":0
    },
    "MaxResults":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "MaxRuntimeInSeconds":{
      "type":"integer",
      "min":1
    },
    "MetricDefinition":{
      "type":"structure",
      "required":[
        "Name",
        "Regex"
      ],
      "members":{
        "Name":{
          "shape":"MetricName",
          "documentation":"<p>The name of the metric.</p>"
        },
        "Regex":{
          "shape":"MetricRegex",
          "documentation":"<p>A regular expression that searches the output of a training job and gets the value of the metric. For more information about using regular expressions to define metrics, see <a>automatic-model-tuning-define-metrics</a>.</p>"
        }
      },
      "documentation":"<p>Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code>. Amazon SageMakerHyperparamter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job.</p>"
    },
    "MetricDefinitionList":{
      "type":"list",
      "member":{"shape":"MetricDefinition"},
      "max":20,
      "min":0
    },
    "MetricName":{
      "type":"string",
      "max":255,
      "min":1
    },
    "MetricRegex":{
      "type":"string",
      "max":500,
      "min":1
    },
    "MetricValue":{"type":"float"},
    "ModelArn":{
      "type":"string",
      "max":2048,
      "min":20
    },
    "ModelArtifacts":{
      "type":"structure",
      "required":["S3ModelArtifacts"],
      "members":{
        "S3ModelArtifacts":{
          "shape":"S3Uri",
          "documentation":"<p>The path of the S3 object that contains the model artifacts. For example, <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>"
        }
      },
      "documentation":"<p>Provides information about the location that is configured for storing model artifacts. </p>"
    },
    "ModelName":{
      "type":"string",
      "max":63,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "ModelNameContains":{
      "type":"string",
      "pattern":"[a-zA-Z0-9-]+"
    },
    "ModelSortKey":{
      "type":"string",
      "enum":[
        "Name",
        "CreationTime"
      ]
    },
    "ModelSummary":{
      "type":"structure",
      "required":[
        "ModelName",
        "ModelArn",
        "CreationTime"
      ],
      "members":{
        "ModelName":{
          "shape":"ModelName",
          "documentation":"<p>The name of the model that you want a summary for.</p>"
        },
        "ModelArn":{
          "shape":"ModelArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the model.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that indicates when the model was created.</p>"
        }
      },
      "documentation":"<p>Provides summary information about a model.</p>"
    },
    "ModelSummaryList":{
      "type":"list",
      "member":{"shape":"ModelSummary"}
    },
    "NameContains":{
      "type":"string",
      "max":63,
      "pattern":"[a-zA-Z0-9\\-]+"
    },
    "NetworkInterfaceId":{"type":"string"},
    "NextToken":{
      "type":"string",
      "max":8192
    },
    "NotebookInstanceArn":{
      "type":"string",
      "max":256
    },
    "NotebookInstanceLifecycleConfigArn":{
      "type":"string",
      "max":256
    },
    "NotebookInstanceLifecycleConfigContent":{
      "type":"string",
      "max":16384,
      "min":1
    },
    "NotebookInstanceLifecycleConfigList":{
      "type":"list",
      "member":{"shape":"NotebookInstanceLifecycleHook"},
      "max":1
    },
    "NotebookInstanceLifecycleConfigName":{
      "type":"string",
      "max":63,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "NotebookInstanceLifecycleConfigNameContains":{
      "type":"string",
      "pattern":"[a-zA-Z0-9-]+"
    },
    "NotebookInstanceLifecycleConfigSortKey":{
      "type":"string",
      "enum":[
        "Name",
        "CreationTime",
        "LastModifiedTime"
      ]
    },
    "NotebookInstanceLifecycleConfigSortOrder":{
      "type":"string",
      "enum":[
        "Ascending",
        "Descending"
      ]
    },
    "NotebookInstanceLifecycleConfigSummary":{
      "type":"structure",
      "required":[
        "NotebookInstanceLifecycleConfigName",
        "NotebookInstanceLifecycleConfigArn"
      ],
      "members":{
        "NotebookInstanceLifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of the lifecycle configuration.</p>"
        },
        "NotebookInstanceLifecycleConfigArn":{
          "shape":"NotebookInstanceLifecycleConfigArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>"
        },
        "CreationTime":{
          "shape":"CreationTime",
          "documentation":"<p>A timestamp that tells when the lifecycle configuration was created.</p>"
        },
        "LastModifiedTime":{
          "shape":"LastModifiedTime",
          "documentation":"<p>A timestamp that tells when the lifecycle configuration was last modified.</p>"
        }
      },
      "documentation":"<p>Provides a summary of a notebook instance lifecycle configuration.</p>"
    },
    "NotebookInstanceLifecycleConfigSummaryList":{
      "type":"list",
      "member":{"shape":"NotebookInstanceLifecycleConfigSummary"}
    },
    "NotebookInstanceLifecycleHook":{
      "type":"structure",
      "members":{
        "Content":{
          "shape":"NotebookInstanceLifecycleConfigContent",
          "documentation":"<p>A base64-encoded string that contains a shell script for a notebook instance lifecycle configuration.</p>"
        }
      },
      "documentation":"<p>Contains the notebook instance lifecycle configuration script.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a>notebook-lifecycle-config</a>.</p>"
    },
    "NotebookInstanceName":{
      "type":"string",
      "max":63,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "NotebookInstanceNameContains":{
      "type":"string",
      "pattern":"[a-zA-Z0-9-]+"
    },
    "NotebookInstanceSortKey":{
      "type":"string",
      "enum":[
        "Name",
        "CreationTime",
        "Status"
      ]
    },
    "NotebookInstanceSortOrder":{
      "type":"string",
      "enum":[
        "Ascending",
        "Descending"
      ]
    },
    "NotebookInstanceStatus":{
      "type":"string",
      "enum":[
        "Pending",
        "InService",
        "Stopping",
        "Stopped",
        "Failed",
        "Deleting",
        "Updating"
      ]
    },
    "NotebookInstanceSummary":{
      "type":"structure",
      "required":[
        "NotebookInstanceName",
        "NotebookInstanceArn"
      ],
      "members":{
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p>The name of the notebook instance that you want a summary for.</p>"
        },
        "NotebookInstanceArn":{
          "shape":"NotebookInstanceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the notebook instance.</p>"
        },
        "NotebookInstanceStatus":{
          "shape":"NotebookInstanceStatus",
          "documentation":"<p>The status of the notebook instance.</p>"
        },
        "Url":{
          "shape":"NotebookInstanceUrl",
          "documentation":"<p>The URL that you use to connect to the Jupyter instance running in your notebook instance. </p>"
        },
        "InstanceType":{
          "shape":"InstanceType",
          "documentation":"<p>The type of ML compute instance that the notebook instance is running on.</p>"
        },
        "CreationTime":{
          "shape":"CreationTime",
          "documentation":"<p>A timestamp that shows when the notebook instance was created.</p>"
        },
        "LastModifiedTime":{
          "shape":"LastModifiedTime",
          "documentation":"<p>A timestamp that shows when the notebook instance was last modified.</p>"
        },
        "NotebookInstanceLifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of a notebook instance lifecycle configuration associated with this notebook instance.</p> <p>For information about notebook instance lifestyle configurations, see <a>notebook-lifecycle-config</a>.</p>"
        }
      },
      "documentation":"<p>Provides summary information for an Amazon SageMaker notebook instance.</p>"
    },
    "NotebookInstanceSummaryList":{
      "type":"list",
      "member":{"shape":"NotebookInstanceSummary"}
    },
    "NotebookInstanceUrl":{"type":"string"},
    "ObjectiveStatus":{
      "type":"string",
      "enum":[
        "Succeeded",
        "Pending",
        "Failed"
      ]
    },
    "ObjectiveStatusCounter":{
      "type":"integer",
      "min":0
    },
    "ObjectiveStatusCounters":{
      "type":"structure",
      "members":{
        "Succeeded":{
          "shape":"ObjectiveStatusCounter",
          "documentation":"<p>The number of training jobs whose final objective metric was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.</p>"
        },
        "Pending":{
          "shape":"ObjectiveStatusCounter",
          "documentation":"<p>The number of training jobs that are in progress and pending evaluation of their final objective metric.</p>"
        },
        "Failed":{
          "shape":"ObjectiveStatusCounter",
          "documentation":"<p>The number of training jobs whose final objective metric was not evaluated and used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.</p>"
        }
      },
      "documentation":"<p>Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.</p>"
    },
    "OrderKey":{
      "type":"string",
      "enum":[
        "Ascending",
        "Descending"
      ]
    },
    "OutputDataConfig":{
      "type":"structure",
      "required":["S3OutputPath"],
      "members":{
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. </p> <note> <p>If you don't provide the KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html\">KMS-Managed Encryption Keys</a> in Amazon Simple Storage Service developer guide.</p> </note> <note> <p> The KMS key policy must grant permission to the IAM role you specify in your <code>CreateTrainingJob</code> request. <a href=\"http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html\">Using Key Policies in AWS KMS</a> in the AWS Key Management Service Developer Guide. </p> </note>"
        },
        "S3OutputPath":{
          "shape":"S3Uri",
          "documentation":"<p>Identifies the S3 path where you want Amazon SageMaker to store the model artifacts. For example, <code>s3://bucket-name/key-name-prefix</code>. </p>"
        }
      },
      "documentation":"<p>Provides information about how to store model training results (model artifacts).</p>"
    },
    "PaginationToken":{
      "type":"string",
      "max":8192
    },
    "ParameterKey":{
      "type":"string",
      "max":256
    },
    "ParameterRanges":{
      "type":"structure",
      "members":{
        "IntegerParameterRanges":{
          "shape":"IntegerParameterRanges",
          "documentation":"<p>The array of <a>IntegerParameterRange</a> objects that specify ranges of integer hyperparameters that a hyperparameter tuning job searches.</p>"
        },
        "ContinuousParameterRanges":{
          "shape":"ContinuousParameterRanges",
          "documentation":"<p>The array of <a>ContinuousParameterRange</a> objects that specify ranges of continuous hyperparameters that a hyperparameter tuning job searches.</p>"
        },
        "CategoricalParameterRanges":{
          "shape":"CategoricalParameterRanges",
          "documentation":"<p>The array of <a>CategoricalParameterRange</a> objects that specify ranges of categorical hyperparameters that a hyperparameter tuning job searches.</p>"
        }
      },
      "documentation":"<p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches.</p>"
    },
    "ParameterValue":{
      "type":"string",
      "max":256
    },
    "ParameterValues":{
      "type":"list",
      "member":{"shape":"ParameterValue"},
      "max":20,
      "min":1
    },
    "ProductionVariant":{
      "type":"structure",
      "required":[
        "VariantName",
        "ModelName",
        "InitialInstanceCount",
        "InstanceType"
      ],
      "members":{
        "VariantName":{
          "shape":"VariantName",
          "documentation":"<p>The name of the production variant.</p>"
        },
        "ModelName":{
          "shape":"ModelName",
          "documentation":"<p>The name of the model that you want to host. This is the name that you specified when creating the model.</p>"
        },
        "InitialInstanceCount":{
          "shape":"TaskCount",
          "documentation":"<p>Number of instances to launch initially.</p>"
        },
        "InstanceType":{
          "shape":"ProductionVariantInstanceType",
          "documentation":"<p>The ML compute instance type.</p>"
        },
        "InitialVariantWeight":{
          "shape":"VariantWeight",
          "documentation":"<p>Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. The traffic to a production variant is determined by the ratio of the <code>VariantWeight</code> to the sum of all <code>VariantWeight</code> values across all ProductionVariants. If unspecified, it defaults to 1.0. </p>"
        }
      },
      "documentation":"<p>Identifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights. </p>"
    },
    "ProductionVariantInstanceType":{
      "type":"string",
      "enum":[
        "ml.t2.medium",
        "ml.t2.large",
        "ml.t2.xlarge",
        "ml.t2.2xlarge",
        "ml.m4.xlarge",
        "ml.m4.2xlarge",
        "ml.m4.4xlarge",
        "ml.m4.10xlarge",
        "ml.m4.16xlarge",
        "ml.m5.large",
        "ml.m5.xlarge",
        "ml.m5.2xlarge",
        "ml.m5.4xlarge",
        "ml.m5.12xlarge",
        "ml.m5.24xlarge",
        "ml.c4.large",
        "ml.c4.xlarge",
        "ml.c4.2xlarge",
        "ml.c4.4xlarge",
        "ml.c4.8xlarge",
        "ml.p2.xlarge",
        "ml.p2.8xlarge",
        "ml.p2.16xlarge",
        "ml.p3.2xlarge",
        "ml.p3.8xlarge",
        "ml.p3.16xlarge",
        "ml.c5.large",
        "ml.c5.xlarge",
        "ml.c5.2xlarge",
        "ml.c5.4xlarge",
        "ml.c5.9xlarge",
        "ml.c5.18xlarge"
      ]
    },
    "ProductionVariantList":{
      "type":"list",
      "member":{"shape":"ProductionVariant"},
      "min":1
    },
    "ProductionVariantSummary":{
      "type":"structure",
      "required":["VariantName"],
      "members":{
        "VariantName":{
          "shape":"VariantName",
          "documentation":"<p>The name of the variant.</p>"
        },
        "DeployedImages":{
          "shape":"DeployedImages",
          "documentation":"<p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the inference images deployed on instances of this <code>ProductionVariant</code>.</p>"
        },
        "CurrentWeight":{
          "shape":"VariantWeight",
          "documentation":"<p>The weight associated with the variant.</p>"
        },
        "DesiredWeight":{
          "shape":"VariantWeight",
          "documentation":"<p>The requested weight, as specified in the <code>UpdateEndpointWeightsAndCapacities</code> request. </p>"
        },
        "CurrentInstanceCount":{
          "shape":"TaskCount",
          "documentation":"<p>The number of instances associated with the variant.</p>"
        },
        "DesiredInstanceCount":{
          "shape":"TaskCount",
          "documentation":"<p>The number of instances requested in the <code>UpdateEndpointWeightsAndCapacities</code> request. </p>"
        }
      },
      "documentation":"<p>Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. </p>"
    },
    "ProductionVariantSummaryList":{
      "type":"list",
      "member":{"shape":"ProductionVariantSummary"},
      "min":1
    },
    "RecordWrapper":{
      "type":"string",
      "enum":[
        "None",
        "RecordIO"
      ]
    },
    "ResourceArn":{
      "type":"string",
      "max":256
    },
    "ResourceConfig":{
      "type":"structure",
      "required":[
        "InstanceType",
        "InstanceCount",
        "VolumeSizeInGB"
      ],
      "members":{
        "InstanceType":{
          "shape":"TrainingInstanceType",
          "documentation":"<p>The ML compute instance type. </p>"
        },
        "InstanceCount":{
          "shape":"TrainingInstanceCount",
          "documentation":"<p>The number of ML compute instances to use. For distributed training, provide a value greater than 1. </p>"
        },
        "VolumeSizeInGB":{
          "shape":"VolumeSizeInGB",
          "documentation":"<p>The size of the ML storage volume that you want to provision. </p> <p>ML storage volumes store model artifacts and incremental states. Training algorithms might also use the ML storage volume for scratch space. If you want to store the training data in the ML storage volume, choose <code>File</code> as the <code>TrainingInputMode</code> in the algorithm specification. </p> <p>You must specify sufficient ML storage for your scenario. </p> <note> <p> Amazon SageMaker supports only the General Purpose SSD (gp2) ML storage volume type. </p> </note>"
        },
        "VolumeKmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p>The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the training job.</p>"
        }
      },
      "documentation":"<p>Describes the resources, including ML compute instances and ML storage volumes, to use for model training. </p>"
    },
    "ResourceInUse":{
      "type":"structure",
      "members":{
        "Message":{"shape":"FailureReason"}
      },
      "documentation":"<p>Resource being accessed is in use.</p>",
      "exception":true
    },
    "ResourceLimitExceeded":{
      "type":"structure",
      "members":{
        "Message":{"shape":"FailureReason"}
      },
      "documentation":"<p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>",
      "exception":true
    },
    "ResourceLimits":{
      "type":"structure",
      "required":[
        "MaxNumberOfTrainingJobs",
        "MaxParallelTrainingJobs"
      ],
      "members":{
        "MaxNumberOfTrainingJobs":{
          "shape":"MaxNumberOfTrainingJobs",
          "documentation":"<p>The maximum number of training jobs that a hyperparameter tuning job can launch.</p>"
        },
        "MaxParallelTrainingJobs":{
          "shape":"MaxParallelTrainingJobs",
          "documentation":"<p>The maximum number of concurrent training jobs that a hyperparameter tuning job can launch.</p>"
        }
      },
      "documentation":"<p>Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.</p>"
    },
    "ResourceNotFound":{
      "type":"structure",
      "members":{
        "Message":{"shape":"FailureReason"}
      },
      "documentation":"<p>Resource being access is not found.</p>",
      "exception":true
    },
    "RoleArn":{
      "type":"string",
      "max":2048,
      "min":20,
      "pattern":"^arn:aws[a-z\\-]*:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$"
    },
    "S3DataDistribution":{
      "type":"string",
      "enum":[
        "FullyReplicated",
        "ShardedByS3Key"
      ]
    },
    "S3DataSource":{
      "type":"structure",
      "required":[
        "S3DataType",
        "S3Uri"
      ],
      "members":{
        "S3DataType":{
          "shape":"S3DataType",
          "documentation":"<p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for model training. </p> <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for model training. </p>"
        },
        "S3Uri":{
          "shape":"S3Uri",
          "documentation":"<p>Depending on the value specified for the <code>S3DataType</code>, identifies either a key name prefix or a manifest. For example: </p> <ul> <li> <p> A key name prefix might look like this: <code>s3://bucketname/exampleprefix</code>. </p> </li> <li> <p> A manifest might look like this: <code>s3://bucketname/example.manifest</code> </p> <p> The manifest is an S3 object which is a JSON file with the following format: </p> <p> <code>[</code> </p> <p> <code> {\"prefix\": \"s3://customer_bucket/some/prefix/\"},</code> </p> <p> <code> \"relative/path/to/custdata-1\",</code> </p> <p> <code> \"relative/path/custdata-2\",</code> </p> <p> <code> ...</code> </p> <p> <code> ]</code> </p> <p> The preceding JSON matches the following <code>s3Uris</code>: </p> <p> <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code> </p> <p> <code>s3://customer_bucket/some/prefix/relative/path/custdata-1</code> </p> <p> <code>...</code> </p> <p> The complete set of <code>s3uris</code> in this manifest constitutes the input data for the channel for this datasource. The object that each <code>s3uris</code> points to must readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf. </p> </li> </ul>"
        },
        "S3DataDistributionType":{
          "shape":"S3DataDistribution",
          "documentation":"<p>If you want Amazon SageMaker to replicate the entire dataset on each ML compute instance that is launched for model training, specify <code>FullyReplicated</code>. </p> <p>If you want Amazon SageMaker to replicate a subset of data on each ML compute instance that is launched for model training, specify <code>ShardedByS3Key</code>. If there are <i>n</i> ML compute instances launched for a training job, each instance gets approximately 1/<i>n</i> of the number of S3 objects. In this case, model training on each machine uses only the subset of training data. </p> <p>Don't choose more ML compute instances for training than available S3 objects. If you do, some nodes won't get any data and you will pay for nodes that aren't getting any training data. This applies in both FILE and PIPE modes. Keep this in mind when developing algorithms. </p> <p>In distributed training, where you use multiple ML compute EC2 instances, you might choose <code>ShardedByS3Key</code>. If the algorithm requires copying training data to the ML storage volume (when <code>TrainingInputMode</code> is set to <code>File</code>), this copies 1/<i>n</i> of the number of objects. </p>"
        }
      },
      "documentation":"<p>Describes the S3 data source.</p>"
    },
    "S3DataType":{
      "type":"string",
      "enum":[
        "ManifestFile",
        "S3Prefix"
      ]
    },
    "S3Uri":{
      "type":"string",
      "max":1024,
      "pattern":"^(https|s3)://([^/]+)/?(.*)$"
    },
    "SecondaryStatus":{
      "type":"string",
      "enum":[
        "Starting",
        "LaunchingMLInstances",
        "PreparingTrainingStack",
        "Downloading",
        "DownloadingTrainingImage",
        "Training",
        "Uploading",
        "Stopping",
        "Stopped",
        "MaxRuntimeExceeded",
        "Completed",
        "Failed"
      ]
    },
    "SecondaryStatusTransition":{
      "type":"structure",
      "required":[
        "Status",
        "StartTime"
      ],
      "members":{
        "Status":{
          "shape":"SecondaryStatus",
          "documentation":"<p>Provides granular information about the system state. For more information, see <code>SecondaryStatus</code> under the <a>DescribeTrainingJob</a> response elements.</p>"
        },
        "StartTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the training job has entered this secondary status.</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the secondary status has ended and the job has transitioned into another secondary status. The <code>EndTime</code> timestamp is also set after the training job has ended.</p>"
        },
        "StatusMessage":{
          "shape":"StatusMessage",
          "documentation":"<p>Shows a brief description and other information about the secondary status. For example, the <code>LaunchingMLInstances</code> secondary status could show a status message of \"Insufficent capacity error while launching instances\".</p>"
        }
      },
      "documentation":"<p>Specifies a secondary status the job has transitioned into. It includes a start timestamp and later an end timestamp. The end timestamp is added either after the job transitions to a different secondary status or after the job has ended.</p>"
    },
    "SecondaryStatusTransitions":{
      "type":"list",
      "member":{"shape":"SecondaryStatusTransition"}
    },
    "SecurityGroupId":{
      "type":"string",
      "max":32
    },
    "SecurityGroupIds":{
      "type":"list",
      "member":{"shape":"SecurityGroupId"},
      "max":5
    },
    "SessionExpirationDurationInSeconds":{
      "type":"integer",
      "max":43200,
      "min":1800
    },
    "SortBy":{
      "type":"string",
      "enum":[
        "Name",
        "CreationTime",
        "Status"
      ]
    },
    "SortOrder":{
      "type":"string",
      "enum":[
        "Ascending",
        "Descending"
      ]
    },
    "SplitType":{
      "type":"string",
      "enum":[
        "None",
        "Line",
        "RecordIO"
      ]
    },
    "StartNotebookInstanceInput":{
      "type":"structure",
      "required":["NotebookInstanceName"],
      "members":{
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p>The name of the notebook instance to start.</p>"
        }
      }
    },
    "StatusMessage":{"type":"string"},
    "StopHyperParameterTuningJobRequest":{
      "type":"structure",
      "required":["HyperParameterTuningJobName"],
      "members":{
        "HyperParameterTuningJobName":{
          "shape":"HyperParameterTuningJobName",
          "documentation":"<p>The name of the tuning job to stop.</p>"
        }
      }
    },
    "StopNotebookInstanceInput":{
      "type":"structure",
      "required":["NotebookInstanceName"],
      "members":{
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p>The name of the notebook instance to terminate.</p>"
        }
      }
    },
    "StopTrainingJobRequest":{
      "type":"structure",
      "required":["TrainingJobName"],
      "members":{
        "TrainingJobName":{
          "shape":"TrainingJobName",
          "documentation":"<p>The name of the training job to stop.</p>"
        }
      }
    },
    "StopTransformJobRequest":{
      "type":"structure",
      "required":["TransformJobName"],
      "members":{
        "TransformJobName":{
          "shape":"TransformJobName",
          "documentation":"<p>The name of the transform job to stop.</p>"
        }
      }
    },
    "StoppingCondition":{
      "type":"structure",
      "members":{
        "MaxRuntimeInSeconds":{
          "shape":"MaxRuntimeInSeconds",
          "documentation":"<p>The maximum length of time, in seconds, that the training job can run. If model training does not complete during this time, Amazon SageMaker ends the job. If value is not specified, default value is 1 day. Maximum value is 5 days.</p>"
        }
      },
      "documentation":"<p>Specifies how long model training can run. When model training reaches the limit, Amazon SageMaker ends the training job. Use this API to cap model training cost.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of training is not lost. </p> <p>Training algorithms provided by Amazon SageMaker automatically saves the intermediate results of a model training job (it is best effort case, as model might not be ready to save as some stages, for example training just started). This intermediate data is a valid model artifact. You can use it to create a model (<code>CreateModel</code>). </p>"
    },
    "SubnetId":{
      "type":"string",
      "max":32
    },
    "Subnets":{
      "type":"list",
      "member":{"shape":"SubnetId"},
      "max":16,
      "min":1
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
          "documentation":"<p>The tag key.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>The tag value.</p>"
        }
      },
      "documentation":"<p>Describes a tag. </p>"
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^((?!aws:)[\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
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
      "min":0
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":0,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TaskCount":{
      "type":"integer",
      "min":1
    },
    "Timestamp":{"type":"timestamp"},
    "TrainingInputMode":{
      "type":"string",
      "enum":[
        "Pipe",
        "File"
      ]
    },
    "TrainingInstanceCount":{
      "type":"integer",
      "min":1
    },
    "TrainingInstanceType":{
      "type":"string",
      "enum":[
        "ml.m4.xlarge",
        "ml.m4.2xlarge",
        "ml.m4.4xlarge",
        "ml.m4.10xlarge",
        "ml.m4.16xlarge",
        "ml.m5.large",
        "ml.m5.xlarge",
        "ml.m5.2xlarge",
        "ml.m5.4xlarge",
        "ml.m5.12xlarge",
        "ml.m5.24xlarge",
        "ml.c4.xlarge",
        "ml.c4.2xlarge",
        "ml.c4.4xlarge",
        "ml.c4.8xlarge",
        "ml.p2.xlarge",
        "ml.p2.8xlarge",
        "ml.p2.16xlarge",
        "ml.p3.2xlarge",
        "ml.p3.8xlarge",
        "ml.p3.16xlarge",
        "ml.c5.xlarge",
        "ml.c5.2xlarge",
        "ml.c5.4xlarge",
        "ml.c5.9xlarge",
        "ml.c5.18xlarge"
      ]
    },
    "TrainingJobArn":{
      "type":"string",
      "max":256,
      "pattern":"arn:aws[a-z\\-]*:sagemaker:[a-z0-9\\-]*:[0-9]{12}:training-job/.*"
    },
    "TrainingJobName":{
      "type":"string",
      "max":63,
      "min":1,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "TrainingJobSortByOptions":{
      "type":"string",
      "enum":[
        "Name",
        "CreationTime",
        "Status",
        "FinalObjectiveMetricValue"
      ]
    },
    "TrainingJobStatus":{
      "type":"string",
      "enum":[
        "InProgress",
        "Completed",
        "Failed",
        "Stopping",
        "Stopped"
      ]
    },
    "TrainingJobStatusCounter":{
      "type":"integer",
      "min":0
    },
    "TrainingJobStatusCounters":{
      "type":"structure",
      "members":{
        "Completed":{
          "shape":"TrainingJobStatusCounter",
          "documentation":"<p>The number of completed training jobs launched by a hyperparameter tuning job.</p>"
        },
        "InProgress":{
          "shape":"TrainingJobStatusCounter",
          "documentation":"<p>The number of in-progress training jobs launched by a hyperparameter tuning job.</p>"
        },
        "RetryableError":{
          "shape":"TrainingJobStatusCounter",
          "documentation":"<p>The number of training jobs that failed, but can be retried. A failed training job can be retried only if it failed because an internal service error occurred.</p>"
        },
        "NonRetryableError":{
          "shape":"TrainingJobStatusCounter",
          "documentation":"<p>The number of training jobs that failed and can't be retried. A failed training job can't be retried if it failed because a client error occurred.</p>"
        },
        "Stopped":{
          "shape":"TrainingJobStatusCounter",
          "documentation":"<p>The number of training jobs launched by a hyperparameter tuning job that were manually stopped.</p>"
        }
      },
      "documentation":"<p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.</p>"
    },
    "TrainingJobSummaries":{
      "type":"list",
      "member":{"shape":"TrainingJobSummary"}
    },
    "TrainingJobSummary":{
      "type":"structure",
      "required":[
        "TrainingJobName",
        "TrainingJobArn",
        "CreationTime",
        "TrainingJobStatus"
      ],
      "members":{
        "TrainingJobName":{
          "shape":"TrainingJobName",
          "documentation":"<p>The name of the training job that you want a summary for.</p>"
        },
        "TrainingJobArn":{
          "shape":"TrainingJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the training job.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the training job was created.</p>"
        },
        "TrainingEndTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the training job ended. This field is set only if the training job has one of the terminal statuses (<code>Completed</code>, <code>Failed</code>, or <code>Stopped</code>). </p>"
        },
        "LastModifiedTime":{
          "shape":"Timestamp",
          "documentation":"<p> Timestamp when the training job was last modified. </p>"
        },
        "TrainingJobStatus":{
          "shape":"TrainingJobStatus",
          "documentation":"<p>The status of the training job.</p>"
        }
      },
      "documentation":"<p>Provides summary information about a training job.</p>"
    },
    "TransformDataSource":{
      "type":"structure",
      "required":["S3DataSource"],
      "members":{
        "S3DataSource":{
          "shape":"TransformS3DataSource",
          "documentation":"<p>The S3 location of the data source that is associated with a channel.</p>"
        }
      },
      "documentation":"<p>Describes the location of the channel data.</p>"
    },
    "TransformEnvironmentKey":{
      "type":"string",
      "max":1024,
      "pattern":"[a-zA-Z_][a-zA-Z0-9_]*"
    },
    "TransformEnvironmentMap":{
      "type":"map",
      "key":{"shape":"TransformEnvironmentKey"},
      "value":{"shape":"TransformEnvironmentValue"},
      "max":16
    },
    "TransformEnvironmentValue":{
      "type":"string",
      "max":10240
    },
    "TransformInput":{
      "type":"structure",
      "required":["DataSource"],
      "members":{
        "DataSource":{
          "shape":"TransformDataSource",
          "documentation":"<p>Describes the location of the channel data, meaning the S3 location of the input data that the model can consume.</p>"
        },
        "ContentType":{
          "shape":"ContentType",
          "documentation":"<p>The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.</p>"
        },
        "CompressionType":{
          "shape":"CompressionType",
          "documentation":"<p>Compressing data helps save on storage space. If your transform data is compressed, specify the compression type.and Amazon SageMaker will automatically decompress the data for the transform job accordingly. The default value is <code>None</code>.</p>"
        },
        "SplitType":{
          "shape":"SplitType",
          "documentation":"<p>The method to use to split the transform job's data into smaller batches. The default value is <code>None</code>. If you don't want to split the data, specify <code>None</code>. If you want to split records on a newline character boundary, specify <code>Line</code>. To split records according to the RecordIO format, specify <code>RecordIO</code>.</p> <p>Amazon SageMaker will send maximum number of records per batch in each request up to the MaxPayloadInMB limit. For more information, see <a href=\"http://mxnet.io/architecture/note_data_loading.html#data-format\">RecordIO data format</a>.</p> <note> <p>For information about the <code>RecordIO</code> format, see <a href=\"http://mxnet.io/architecture/note_data_loading.html#data-format\">Data Format</a>.</p> </note>"
        }
      },
      "documentation":"<p>Describes the input source of a transform job and the way the transform job consumes it.</p>"
    },
    "TransformInstanceCount":{
      "type":"integer",
      "min":1
    },
    "TransformInstanceType":{
      "type":"string",
      "enum":[
        "ml.m4.xlarge",
        "ml.m4.2xlarge",
        "ml.m4.4xlarge",
        "ml.m4.10xlarge",
        "ml.m4.16xlarge",
        "ml.c4.xlarge",
        "ml.c4.2xlarge",
        "ml.c4.4xlarge",
        "ml.c4.8xlarge",
        "ml.p2.xlarge",
        "ml.p2.8xlarge",
        "ml.p2.16xlarge",
        "ml.p3.2xlarge",
        "ml.p3.8xlarge",
        "ml.p3.16xlarge",
        "ml.c5.xlarge",
        "ml.c5.2xlarge",
        "ml.c5.4xlarge",
        "ml.c5.9xlarge",
        "ml.c5.18xlarge",
        "ml.m5.large",
        "ml.m5.xlarge",
        "ml.m5.2xlarge",
        "ml.m5.4xlarge",
        "ml.m5.12xlarge",
        "ml.m5.24xlarge"
      ]
    },
    "TransformJobArn":{
      "type":"string",
      "max":256,
      "pattern":"arn:aws[a-z\\-]*:sagemaker:[a-z0-9\\-]*:[0-9]{12}:transform-job/.*"
    },
    "TransformJobName":{
      "type":"string",
      "max":63,
      "min":1,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "TransformJobStatus":{
      "type":"string",
      "enum":[
        "InProgress",
        "Completed",
        "Failed",
        "Stopping",
        "Stopped"
      ]
    },
    "TransformJobSummaries":{
      "type":"list",
      "member":{"shape":"TransformJobSummary"}
    },
    "TransformJobSummary":{
      "type":"structure",
      "required":[
        "TransformJobName",
        "TransformJobArn",
        "CreationTime",
        "TransformJobStatus"
      ],
      "members":{
        "TransformJobName":{
          "shape":"TransformJobName",
          "documentation":"<p>The name of the transform job.</p>"
        },
        "TransformJobArn":{
          "shape":"TransformJobArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the transform job.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>A timestamp that shows when the transform Job was created.</p>"
        },
        "TransformEndTime":{
          "shape":"Timestamp",
          "documentation":"<p>Indicates when the transform job ends on compute instances. For successful jobs and stopped jobs, this is the exact time recorded after the results are uploaded. For failed jobs, this is when Amazon SageMaker detected that the job failed.</p>"
        },
        "LastModifiedTime":{
          "shape":"Timestamp",
          "documentation":"<p>Indicates when the transform job was last modified.</p>"
        },
        "TransformJobStatus":{
          "shape":"TransformJobStatus",
          "documentation":"<p>The status of the transform job.</p>"
        },
        "FailureReason":{
          "shape":"FailureReason",
          "documentation":"<p>If the transform job failed, the reason it failed.</p>"
        }
      },
      "documentation":"<p>Provides a summary information for a transform job. Multiple TransformJobSummary objects are returned as a list after calling <a>ListTransformJobs</a>.</p>"
    },
    "TransformOutput":{
      "type":"structure",
      "required":["S3OutputPath"],
      "members":{
        "S3OutputPath":{
          "shape":"S3Uri",
          "documentation":"<p>The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job. For example, <code>s3://bucket-name/key-name-prefix</code>.</p> <p>For every S3 object used as input for the transform job, the transformed data is stored in a corresponding subfolder in the location under the output prefix. For example, the input data <code>s3://bucket-name/input-name-prefix/dataset01/data.csv</code> will have the transformed data stored at <code>s3://bucket-name/key-name-prefix/dataset01/</code>, based on the original name, as a series of .part files (.part0001, part0002, etc).</p>"
        },
        "Accept":{
          "shape":"Accept",
          "documentation":"<p>The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.</p>"
        },
        "AssembleWith":{
          "shape":"AssemblyType",
          "documentation":"<p>Defines how to assemble the results of the transform job as a single S3 object. You should select a format that is most convenient to you. To concatenate the results in binary format, specify <code>None</code>. To add a newline character at the end of every transformed record, specify <code>Line</code>. To assemble the output in RecordIO format, specify <code>RecordIO</code>. The default value is <code>None</code>.</p> <p>For information about the <code>RecordIO</code> format, see <a href=\"http://mxnet.io/architecture/note_data_loading.html#data-format\">Data Format</a>.</p>"
        },
        "KmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p>The AWS Key Management Service (AWS KMS) key for Amazon S3 server-side encryption that Amazon SageMaker uses to encrypt the transformed data.</p> <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html\">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i> </p> <p>The KMS key policy must grant permission to the IAM role that you specify in your <code>CreateTramsformJob</code> request. For more information, see <a href=\"http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html\">Using Key Policies in AWS KMS</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>"
        }
      },
      "documentation":"<p>Describes the results of a transform job output.</p>"
    },
    "TransformResources":{
      "type":"structure",
      "required":[
        "InstanceType",
        "InstanceCount"
      ],
      "members":{
        "InstanceType":{
          "shape":"TransformInstanceType",
          "documentation":"<p>The ML compute instance type for the transform job. For using built-in algorithms to transform moderately sized datasets, ml.m4.xlarge or <code>ml.m5.large</code> should suffice. There is no default value for <code>InstanceType</code>.</p>"
        },
        "InstanceCount":{
          "shape":"TransformInstanceCount",
          "documentation":"<p>The number of ML compute instances to use in the transform job. For distributed transform, provide a value greater than 1. The default value is <code>1</code>.</p>"
        },
        "VolumeKmsKeyId":{
          "shape":"KmsKeyId",
          "documentation":"<p>The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the batch transform job.</p>"
        }
      },
      "documentation":"<p>Describes the resources, including ML instance types and ML instance count, to use for transform job.</p>"
    },
    "TransformS3DataSource":{
      "type":"structure",
      "required":[
        "S3DataType",
        "S3Uri"
      ],
      "members":{
        "S3DataType":{
          "shape":"S3DataType",
          "documentation":"<p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for batch transform. </p> <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for batch transform. </p>"
        },
        "S3Uri":{
          "shape":"S3Uri",
          "documentation":"<p>Depending on the value specified for the <code>S3DataType</code>, identifies either a key name prefix or a manifest. For example:</p> <ul> <li> <p> A key name prefix might look like this: <code>s3://bucketname/exampleprefix</code>. </p> </li> <li> <p> A manifest might look like this: <code>s3://bucketname/example.manifest</code> </p> <p> The manifest is an S3 object which is a JSON file with the following format: </p> <p> <code>[</code> </p> <p> <code> {\"prefix\": \"s3://customer_bucket/some/prefix/\"},</code> </p> <p> <code> \"relative/path/to/custdata-1\",</code> </p> <p> <code> \"relative/path/custdata-2\",</code> </p> <p> <code> ...</code> </p> <p> <code> ]</code> </p> <p> The preceding JSON matches the following <code>S3Uris</code>: </p> <p> <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code> </p> <p> <code>s3://customer_bucket/some/prefix/relative/path/custdata-1</code> </p> <p> <code>...</code> </p> <p> The complete set of <code>S3Uris</code> in this manifest constitutes the input data for the channel for this datasource. The object that each <code>S3Uris</code> points to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Describes the S3 data source.</p>"
    },
    "UpdateEndpointInput":{
      "type":"structure",
      "required":[
        "EndpointName",
        "EndpointConfigName"
      ],
      "members":{
        "EndpointName":{
          "shape":"EndpointName",
          "documentation":"<p>The name of the endpoint whose configuration you want to update.</p>"
        },
        "EndpointConfigName":{
          "shape":"EndpointConfigName",
          "documentation":"<p>The name of the new endpoint configuration.</p>"
        }
      }
    },
    "UpdateEndpointOutput":{
      "type":"structure",
      "required":["EndpointArn"],
      "members":{
        "EndpointArn":{
          "shape":"EndpointArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the endpoint.</p>"
        }
      }
    },
    "UpdateEndpointWeightsAndCapacitiesInput":{
      "type":"structure",
      "required":[
        "EndpointName",
        "DesiredWeightsAndCapacities"
      ],
      "members":{
        "EndpointName":{
          "shape":"EndpointName",
          "documentation":"<p>The name of an existing Amazon SageMaker endpoint.</p>"
        },
        "DesiredWeightsAndCapacities":{
          "shape":"DesiredWeightAndCapacityList",
          "documentation":"<p>An object that provides new capacity and weight values for a variant.</p>"
        }
      }
    },
    "UpdateEndpointWeightsAndCapacitiesOutput":{
      "type":"structure",
      "required":["EndpointArn"],
      "members":{
        "EndpointArn":{
          "shape":"EndpointArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the updated endpoint.</p>"
        }
      }
    },
    "UpdateNotebookInstanceInput":{
      "type":"structure",
      "required":["NotebookInstanceName"],
      "members":{
        "NotebookInstanceName":{
          "shape":"NotebookInstanceName",
          "documentation":"<p>The name of the notebook instance to update.</p>"
        },
        "InstanceType":{
          "shape":"InstanceType",
          "documentation":"<p>The Amazon ML compute instance type.</p>"
        },
        "RoleArn":{
          "shape":"RoleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access the notebook instance. For more information, see <a href=\"http://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html\">Amazon SageMaker Roles</a>. </p> <note> <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission.</p> </note>"
        },
        "LifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see <a>notebook-lifecycle-config</a>.</p>"
        },
        "DisassociateLifecycleConfig":{
          "shape":"DisassociateNotebookInstanceLifecycleConfig",
          "documentation":"<p>Set to <code>true</code> to remove the notebook instance lifecycle configuration currently associated with the notebook instance.</p>"
        }
      }
    },
    "UpdateNotebookInstanceLifecycleConfigInput":{
      "type":"structure",
      "required":["NotebookInstanceLifecycleConfigName"],
      "members":{
        "NotebookInstanceLifecycleConfigName":{
          "shape":"NotebookInstanceLifecycleConfigName",
          "documentation":"<p>The name of the lifecycle configuration.</p>"
        },
        "OnCreate":{
          "shape":"NotebookInstanceLifecycleConfigList",
          "documentation":"<p>The shell script that runs only once, when you create a notebook instance</p>"
        },
        "OnStart":{
          "shape":"NotebookInstanceLifecycleConfigList",
          "documentation":"<p>The shell script that runs every time you start a notebook instance, including when you create the notebook instance.</p>"
        }
      }
    },
    "UpdateNotebookInstanceLifecycleConfigOutput":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateNotebookInstanceOutput":{
      "type":"structure",
      "members":{
      }
    },
    "Url":{
      "type":"string",
      "max":1024,
      "pattern":"^(https|s3)://([^/]+)/?(.*)$"
    },
    "VariantName":{
      "type":"string",
      "max":63,
      "pattern":"^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
    },
    "VariantWeight":{
      "type":"float",
      "min":0
    },
    "VolumeSizeInGB":{
      "type":"integer",
      "min":1
    },
    "VpcConfig":{
      "type":"structure",
      "required":[
        "SecurityGroupIds",
        "Subnets"
      ],
      "members":{
        "SecurityGroupIds":{
          "shape":"VpcSecurityGroupIds",
          "documentation":"<p>The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the <code>Subnets</code> field.</p>"
        },
        "Subnets":{
          "shape":"Subnets",
          "documentation":"<p>The ID of the subnets in the VPC to which you want to connect your training job or model.</p>"
        }
      },
      "documentation":"<p>Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a>host-vpc</a> and <a>train-vpc</a>.</p>"
    },
    "VpcSecurityGroupIds":{
      "type":"list",
      "member":{"shape":"SecurityGroupId"},
      "max":5,
      "min":1
    }
  },
  "documentation":"Definition of the public APIs exposed by SageMaker"
}
