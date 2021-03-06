awsim['eks'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-11-01",
    "endpointPrefix":"eks",
    "jsonVersion":"1.1",
    "protocol":"rest-json",
    "serviceAbbreviation":"Amazon EKS",
    "serviceFullName":"Amazon Elastic Container Service for Kubernetes",
    "serviceId":"EKS",
    "signatureVersion":"v4",
    "signingName":"eks",
    "uid":"eks-2017-11-01"
  },
  "operations":{
    "CreateCluster":{
      "name":"CreateCluster",
      "http":{
        "method":"POST",
        "requestUri":"/clusters"
      },
      "input":{"shape":"CreateClusterRequest"},
      "output":{"shape":"CreateClusterResponse"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceLimitExceededException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ClientException"},
        {"shape":"ServerException"},
        {"shape":"ServiceUnavailableException"},
        {"shape":"UnsupportedAvailabilityZoneException"}
      ],
      "documentation":"<p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, like <code>etcd</code> and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint.</p> <p>Amazon EKS worker nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the worker nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch worker nodes into your cluster. For more information, see <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html\">Managing Cluster Authentication</a> and <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html\">Launching Amazon EKS Worker Nodes</a>in the <i>Amazon EKS User Guide</i>.</p>"
    },
    "DeleteCluster":{
      "name":"DeleteCluster",
      "http":{
        "method":"DELETE",
        "requestUri":"/clusters/{name}"
      },
      "input":{"shape":"DeleteClusterRequest"},
      "output":{"shape":"DeleteClusterResponse"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"ClientException"},
        {"shape":"ServerException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Deletes the Amazon EKS cluster control plane. </p> <note> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html\">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>"
    },
    "DescribeCluster":{
      "name":"DescribeCluster",
      "http":{
        "method":"GET",
        "requestUri":"/clusters/{name}"
      },
      "input":{"shape":"DescribeClusterRequest"},
      "output":{"shape":"DescribeClusterResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ClientException"},
        {"shape":"ServerException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html\">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data are not available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>"
    },
    "ListClusters":{
      "name":"ListClusters",
      "http":{
        "method":"GET",
        "requestUri":"/clusters"
      },
      "input":{"shape":"ListClustersRequest"},
      "output":{"shape":"ListClustersResponse"},
      "errors":[
        {"shape":"InvalidParameterException"},
        {"shape":"ClientException"},
        {"shape":"ServerException"},
        {"shape":"ServiceUnavailableException"}
      ],
      "documentation":"<p>Lists the Amazon EKS clusters in your AWS account in the specified Region.</p>"
    }
  },
  "shapes":{
    "Certificate":{
      "type":"structure",
      "members":{
        "data":{
          "shape":"String",
          "documentation":"<p>The base64 encoded certificate data required to communicate with your cluster. Add this to the <code>certificate-authority-data</code> section of the <code>kubeconfig</code> file for your cluster.</p>"
        }
      },
      "documentation":"<p>An object representing the <code>certificate-authority-data</code> for your cluster.</p>"
    },
    "ClientException":{
      "type":"structure",
      "members":{
        "clusterName":{
          "shape":"String",
          "documentation":"<p>The Amazon EKS cluster associated with the exception.</p>"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "Cluster":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the cluster.</p>"
        },
        "arn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the cluster.</p>"
        },
        "createdAt":{
          "shape":"Timestamp",
          "documentation":"<p>The Unix epoch time stamp in seconds for when the cluster was created.</p>"
        },
        "version":{
          "shape":"String",
          "documentation":"<p>The Kubernetes server version for the cluster.</p>"
        },
        "endpoint":{
          "shape":"String",
          "documentation":"<p>The endpoint for your Kubernetes API server.</p>"
        },
        "roleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.</p>"
        },
        "resourcesVpcConfig":{
          "shape":"VpcConfigResponse",
          "documentation":"<p>The VPC subnets and security groups used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html\">Cluster VPC Considerations</a> and <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html\">Cluster Security Group Considerations</a> in the <i>Amazon EKS User Guide</i>.</p>"
        },
        "status":{
          "shape":"ClusterStatus",
          "documentation":"<p>The current status of the cluster.</p>"
        },
        "certificateAuthority":{
          "shape":"Certificate",
          "documentation":"<p>The <code>certificate-authority-data</code> for your cluster.</p>"
        },
        "clientRequestToken":{
          "shape":"String",
          "documentation":"<p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.</p>"
        },
        "platformVersion":{
          "shape":"String",
          "documentation":"<p>The platform version of your Amazon EKS cluster. For more information, see <a href=\"eks/latest/userguide/platform-versions.html\">Platform Versions</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p>"
        }
      },
      "documentation":"<p>An object representing an Amazon EKS cluster.</p>"
    },
    "ClusterName":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[A-Za-z0-9\\-_]*"
    },
    "ClusterStatus":{
      "type":"string",
      "enum":[
        "CREATING",
        "ACTIVE",
        "DELETING",
        "FAILED"
      ]
    },
    "CreateClusterRequest":{
      "type":"structure",
      "required":[
        "name",
        "roleArn",
        "resourcesVpcConfig"
      ],
      "members":{
        "name":{
          "shape":"ClusterName",
          "documentation":"<p>The unique name to give to your cluster.</p>"
        },
        "version":{
          "shape":"String",
          "documentation":"<p>The desired Kubernetes version for your cluster. If you do not specify a value here, the latest version available in Amazon EKS is used.</p>"
        },
        "roleArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to other AWS API operations on your behalf. For more information, see <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html\">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p>"
        },
        "resourcesVpcConfig":{
          "shape":"VpcConfigRequest",
          "documentation":"<p>The VPC subnets and security groups used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html\">Cluster VPC Considerations</a> and <a href=\"http://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html\">Cluster Security Group Considerations</a> in the <i>Amazon EKS User Guide</i>. You must specify at least two subnets. You may specify up to 5 security groups, but we recommend that you use a dedicated security group for your cluster control plane.</p>"
        },
        "clientRequestToken":{
          "shape":"String",
          "documentation":"<p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.</p>",
          "idempotencyToken":true
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
    "DeleteClusterRequest":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the cluster to delete.</p>",
          "location":"uri",
          "locationName":"name"
        }
      }
    },
    "DeleteClusterResponse":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"Cluster",
          "documentation":"<p>The full description of the cluster to delete.</p>"
        }
      }
    },
    "DescribeClusterRequest":{
      "type":"structure",
      "required":["name"],
      "members":{
        "name":{
          "shape":"String",
          "documentation":"<p>The name of the cluster to describe.</p>",
          "location":"uri",
          "locationName":"name"
        }
      }
    },
    "DescribeClusterResponse":{
      "type":"structure",
      "members":{
        "cluster":{
          "shape":"Cluster",
          "documentation":"<p>The full description of your specified cluster.</p>"
        }
      }
    },
    "InvalidParameterException":{
      "type":"structure",
      "members":{
        "clusterName":{
          "shape":"String",
          "documentation":"<p>The Amazon EKS cluster associated with the exception.</p>"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>The specified parameter is invalid. Review the available parameters for the API request.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ListClustersRequest":{
      "type":"structure",
      "members":{
        "maxResults":{
          "shape":"ListClustersRequestMaxResults",
          "documentation":"<p>The maximum number of cluster results returned by <code>ListClusters</code> in paginated output. When this parameter is used, <code>ListClusters</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListClusters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListClusters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>",
          "location":"querystring",
          "locationName":"maxResults"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListClusters</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
          "location":"querystring",
          "locationName":"nextToken"
        }
      }
    },
    "ListClustersRequestMaxResults":{
      "type":"integer",
      "box":true,
      "max":100,
      "min":1
    },
    "ListClustersResponse":{
      "type":"structure",
      "members":{
        "clusters":{
          "shape":"StringList",
          "documentation":"<p>A list of all of the clusters for your account in the specified Region.</p>"
        },
        "nextToken":{
          "shape":"String",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListClusters</code> request. When the results of a <code>ListClusters</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "ResourceInUseException":{
      "type":"structure",
      "members":{
        "clusterName":{
          "shape":"String",
          "documentation":"<p>The Amazon EKS cluster associated with the exception.</p>"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>The specified resource is in use.</p>",
      "error":{"httpStatusCode":409},
      "exception":true
    },
    "ResourceLimitExceededException":{
      "type":"structure",
      "members":{
        "clusterName":{
          "shape":"String",
          "documentation":"<p>The Amazon EKS cluster associated with the exception.</p>"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>You have encountered a service limit on the specified resource.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "clusterName":{
          "shape":"String",
          "documentation":"<p>The Amazon EKS cluster associated with the exception.</p>"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are Region-specific.</p>",
      "error":{"httpStatusCode":404},
      "exception":true
    },
    "ServerException":{
      "type":"structure",
      "members":{
        "clusterName":{
          "shape":"String",
          "documentation":"<p>The Amazon EKS cluster associated with the exception.</p>"
        },
        "message":{"shape":"String"}
      },
      "documentation":"<p>These errors are usually caused by a server-side issue.</p>",
      "error":{"httpStatusCode":500},
      "exception":true,
      "fault":true
    },
    "ServiceUnavailableException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The service is unavailable. Back off and retry the operation.</p>",
      "error":{"httpStatusCode":503},
      "exception":true,
      "fault":true
    },
    "String":{"type":"string"},
    "StringList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "Timestamp":{"type":"timestamp"},
    "UnsupportedAvailabilityZoneException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"},
        "clusterName":{
          "shape":"String",
          "documentation":"<p>The Amazon EKS cluster associated with the exception.</p>"
        },
        "validZones":{
          "shape":"StringList",
          "documentation":"<p>The supported Availability Zones for your account. Choose subnets in these Availability Zones for your cluster.</p>"
        }
      },
      "documentation":"<p>At least one of your specified cluster subnets is in an Availability Zone that does not support Amazon EKS. The exception output specifies the supported Availability Zones for your account, from which you can choose subnets for your cluster.</p>",
      "error":{"httpStatusCode":400},
      "exception":true
    },
    "VpcConfigRequest":{
      "type":"structure",
      "required":["subnetIds"],
      "members":{
        "subnetIds":{
          "shape":"StringList",
          "documentation":"<p>Specify subnets for your Amazon EKS worker nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your worker nodes and the Kubernetes control plane.</p>"
        },
        "securityGroupIds":{
          "shape":"StringList",
          "documentation":"<p>Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane.</p>"
        }
      },
      "documentation":"<p>An object representing an Amazon EKS cluster VPC configuration request.</p>"
    },
    "VpcConfigResponse":{
      "type":"structure",
      "members":{
        "subnetIds":{
          "shape":"StringList",
          "documentation":"<p>The subnets associated with your cluster.</p>"
        },
        "securityGroupIds":{
          "shape":"StringList",
          "documentation":"<p>The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your worker nodes and the Kubernetes control plane.</p>"
        },
        "vpcId":{
          "shape":"String",
          "documentation":"<p>The VPC associated with your cluster.</p>"
        }
      },
      "documentation":"<p>An object representing an Amazon EKS cluster VPC configuration response.</p>"
    }
  },
  "documentation":"<p>Amazon Elastic Container Service for Kubernetes (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. </p> <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required.</p>"
}
