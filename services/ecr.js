awsim['ecr'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-09-21",
    "endpointPrefix":"ecr",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"Amazon ECR",
    "serviceFullName":"Amazon EC2 Container Registry",
    "serviceId":"ECR",
    "signatureVersion":"v4",
    "targetPrefix":"AmazonEC2ContainerRegistry_V20150921",
    "uid":"ecr-2015-09-21"
  },
  "operations":{
    "BatchCheckLayerAvailability":{
      "name":"BatchCheckLayerAvailability",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchCheckLayerAvailabilityRequest"},
      "output":{"shape":"BatchCheckLayerAvailabilityResponse"},
      "errors":[
        {"shape":"RepositoryNotFoundException"},
        {"shape":"InvalidParameterException"},
        {"shape":"ServerException"}
      ],
      "documentation":"<p>Check the availability of multiple image layers in a specified registry and repository.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>"
    },
    "BatchDeleteImage":{
      "name":"BatchDeleteImage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchDeleteImageRequest"},
      "output":{"shape":"BatchDeleteImageResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"}
      ],
      "documentation":"<p>Deletes a list of specified images within a specified repository. Images are specified with either <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>"
    },
    "BatchGetImage":{
      "name":"BatchGetImage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetImageRequest"},
      "output":{"shape":"BatchGetImageResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"}
      ],
      "documentation":"<p>Gets detailed information for specified images within a specified repository. Images are specified with either <code>imageTag</code> or <code>imageDigest</code>.</p>"
    },
    "CompleteLayerUpload":{
      "name":"CompleteLayerUpload",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CompleteLayerUploadRequest"},
      "output":{"shape":"CompleteLayerUploadResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"UploadNotFoundException"},
        {"shape":"InvalidLayerException"},
        {"shape":"LayerPartTooSmallException"},
        {"shape":"LayerAlreadyExistsException"},
        {"shape":"EmptyUploadException"}
      ],
      "documentation":"<p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>"
    },
    "CreateRepository":{
      "name":"CreateRepository",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateRepositoryRequest"},
      "output":{"shape":"CreateRepositoryResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryAlreadyExistsException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates an image repository.</p>"
    },
    "DeleteLifecyclePolicy":{
      "name":"DeleteLifecyclePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteLifecyclePolicyRequest"},
      "output":{"shape":"DeleteLifecyclePolicyResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"LifecyclePolicyNotFoundException"}
      ],
      "documentation":"<p>Deletes the specified lifecycle policy.</p>"
    },
    "DeleteRepository":{
      "name":"DeleteRepository",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRepositoryRequest"},
      "output":{"shape":"DeleteRepositoryResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"RepositoryNotEmptyException"}
      ],
      "documentation":"<p>Deletes an existing image repository. If a repository contains images, you must use the <code>force</code> option to delete it.</p>"
    },
    "DeleteRepositoryPolicy":{
      "name":"DeleteRepositoryPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRepositoryPolicyRequest"},
      "output":{"shape":"DeleteRepositoryPolicyResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"RepositoryPolicyNotFoundException"}
      ],
      "documentation":"<p>Deletes the repository policy from a specified repository.</p>"
    },
    "DescribeImages":{
      "name":"DescribeImages",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeImagesRequest"},
      "output":{"shape":"DescribeImagesResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"ImageNotFoundException"}
      ],
      "documentation":"<p>Returns metadata about the images in a repository, including image size, image tags, and creation date.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>"
    },
    "DescribeRepositories":{
      "name":"DescribeRepositories",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeRepositoriesRequest"},
      "output":{"shape":"DescribeRepositoriesResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"}
      ],
      "documentation":"<p>Describes image repositories in a registry.</p>"
    },
    "GetAuthorizationToken":{
      "name":"GetAuthorizationToken",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAuthorizationTokenRequest"},
      "output":{"shape":"GetAuthorizationTokenResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"}
      ],
      "documentation":"<p>Retrieves a token that is valid for a specified registry for 12 hours. This command allows you to use the <code>docker</code> CLI to push and pull images with Amazon ECR. If you do not specify a registry, the default registry is assumed.</p> <p>The <code>authorizationToken</code> returned for each registry specified is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The AWS CLI offers an <code>aws ecr get-login</code> command that simplifies the login process.</p>"
    },
    "GetDownloadUrlForLayer":{
      "name":"GetDownloadUrlForLayer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDownloadUrlForLayerRequest"},
      "output":{"shape":"GetDownloadUrlForLayerResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"LayersNotFoundException"},
        {"shape":"LayerInaccessibleException"},
        {"shape":"RepositoryNotFoundException"}
      ],
      "documentation":"<p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>"
    },
    "GetLifecyclePolicy":{
      "name":"GetLifecyclePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetLifecyclePolicyRequest"},
      "output":{"shape":"GetLifecyclePolicyResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"LifecyclePolicyNotFoundException"}
      ],
      "documentation":"<p>Retrieves the specified lifecycle policy.</p>"
    },
    "GetLifecyclePolicyPreview":{
      "name":"GetLifecyclePolicyPreview",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetLifecyclePolicyPreviewRequest"},
      "output":{"shape":"GetLifecyclePolicyPreviewResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"LifecyclePolicyPreviewNotFoundException"}
      ],
      "documentation":"<p>Retrieves the results of the specified lifecycle policy preview request.</p>"
    },
    "GetRepositoryPolicy":{
      "name":"GetRepositoryPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetRepositoryPolicyRequest"},
      "output":{"shape":"GetRepositoryPolicyResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"RepositoryPolicyNotFoundException"}
      ],
      "documentation":"<p>Retrieves the repository policy for a specified repository.</p>"
    },
    "InitiateLayerUpload":{
      "name":"InitiateLayerUpload",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"InitiateLayerUploadRequest"},
      "output":{"shape":"InitiateLayerUploadResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"}
      ],
      "documentation":"<p>Notify Amazon ECR that you intend to upload an image layer.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>"
    },
    "ListImages":{
      "name":"ListImages",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListImagesRequest"},
      "output":{"shape":"ListImagesResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"}
      ],
      "documentation":"<p>Lists all the image IDs for a given repository.</p> <p>You can filter images based on whether or not they are tagged by setting the <code>tagStatus</code> parameter to <code>TAGGED</code> or <code>UNTAGGED</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>"
    },
    "PutImage":{
      "name":"PutImage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutImageRequest"},
      "output":{"shape":"PutImageResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"ImageAlreadyExistsException"},
        {"shape":"LayersNotFoundException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates or updates the image manifest and tags associated with an image.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>"
    },
    "PutLifecyclePolicy":{
      "name":"PutLifecyclePolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutLifecyclePolicyRequest"},
      "output":{"shape":"PutLifecyclePolicyResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"}
      ],
      "documentation":"<p>Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see <a href=\"http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html\">Lifecycle Policy Template</a>.</p>"
    },
    "SetRepositoryPolicy":{
      "name":"SetRepositoryPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SetRepositoryPolicyRequest"},
      "output":{"shape":"SetRepositoryPolicyResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"}
      ],
      "documentation":"<p>Applies a repository policy on a specified repository to control access permissions.</p>"
    },
    "StartLifecyclePolicyPreview":{
      "name":"StartLifecyclePolicyPreview",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartLifecyclePolicyPreviewRequest"},
      "output":{"shape":"StartLifecyclePolicyPreviewResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"LifecyclePolicyNotFoundException"},
        {"shape":"LifecyclePolicyPreviewInProgressException"}
      ],
      "documentation":"<p>Starts a preview of the specified lifecycle policy. This allows you to see the results before creating the lifecycle policy.</p>"
    },
    "UploadLayerPart":{
      "name":"UploadLayerPart",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UploadLayerPartRequest"},
      "output":{"shape":"UploadLayerPartResponse"},
      "errors":[
        {"shape":"ServerException"},
        {"shape":"InvalidParameterException"},
        {"shape":"InvalidLayerPartException"},
        {"shape":"RepositoryNotFoundException"},
        {"shape":"UploadNotFoundException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Uploads an image layer part to Amazon ECR.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>"
    }
  },
  "shapes":{
    "Arn":{"type":"string"},
    "AuthorizationData":{
      "type":"structure",
      "members":{
        "authorizationToken":{
          "shape":"Base64",
          "documentation":"<p>A base64-encoded string that contains authorization data for the specified Amazon ECR registry. When the string is decoded, it is presented in the format <code>user:password</code> for private registry authentication using <code>docker login</code>.</p>"
        },
        "expiresAt":{
          "shape":"ExpirationTimestamp",
          "documentation":"<p>The Unix time in seconds and milliseconds when the authorization token expires. Authorization tokens are valid for 12 hours.</p>"
        },
        "proxyEndpoint":{
          "shape":"ProxyEndpoint",
          "documentation":"<p>The registry URL to use for this authorization token in a <code>docker login</code> command. The Amazon ECR registry URL format is <code>https://aws_account_id.dkr.ecr.region.amazonaws.com</code>. For example, <code>https://012345678910.dkr.ecr.us-east-1.amazonaws.com</code>.. </p>"
        }
      },
      "documentation":"<p>An object representing authorization data for an Amazon ECR registry.</p>"
    },
    "AuthorizationDataList":{
      "type":"list",
      "member":{"shape":"AuthorizationData"}
    },
    "Base64":{
      "type":"string",
      "pattern":"^\\S+$"
    },
    "BatchCheckLayerAvailabilityRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "layerDigests"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the image layers to check. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that is associated with the image layers to check.</p>"
        },
        "layerDigests":{
          "shape":"BatchedOperationLayerDigestList",
          "documentation":"<p>The digests of the image layers to check.</p>"
        }
      }
    },
    "BatchCheckLayerAvailabilityResponse":{
      "type":"structure",
      "members":{
        "layers":{
          "shape":"LayerList",
          "documentation":"<p>A list of image layer objects corresponding to the image layer references in the request.</p>"
        },
        "failures":{
          "shape":"LayerFailureList",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "BatchDeleteImageRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "imageIds"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the image to delete. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository that contains the image to delete.</p>"
        },
        "imageIds":{
          "shape":"ImageIdentifierList",
          "documentation":"<p>A list of image ID references that correspond to images to delete. The format of the <code>imageIds</code> reference is <code>imageTag=tag</code> or <code>imageDigest=digest</code>.</p>"
        }
      },
      "documentation":"<p>Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.</p>"
    },
    "BatchDeleteImageResponse":{
      "type":"structure",
      "members":{
        "imageIds":{
          "shape":"ImageIdentifierList",
          "documentation":"<p>The image IDs of the deleted images.</p>"
        },
        "failures":{
          "shape":"ImageFailureList",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "BatchGetImageRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "imageIds"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the images to describe. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository that contains the images to describe.</p>"
        },
        "imageIds":{
          "shape":"ImageIdentifierList",
          "documentation":"<p>A list of image ID references that correspond to images to describe. The format of the <code>imageIds</code> reference is <code>imageTag=tag</code> or <code>imageDigest=digest</code>.</p>"
        },
        "acceptedMediaTypes":{
          "shape":"MediaTypeList",
          "documentation":"<p>The accepted media types for the request.</p> <p>Valid values: <code>application/vnd.docker.distribution.manifest.v1+json</code> | <code>application/vnd.docker.distribution.manifest.v2+json</code> | <code>application/vnd.oci.image.manifest.v1+json</code> </p>"
        }
      }
    },
    "BatchGetImageResponse":{
      "type":"structure",
      "members":{
        "images":{
          "shape":"ImageList",
          "documentation":"<p>A list of image objects corresponding to the image references in the request.</p>"
        },
        "failures":{
          "shape":"ImageFailureList",
          "documentation":"<p>Any failures associated with the call.</p>"
        }
      }
    },
    "BatchedOperationLayerDigest":{
      "type":"string",
      "max":1000,
      "min":0
    },
    "BatchedOperationLayerDigestList":{
      "type":"list",
      "member":{"shape":"BatchedOperationLayerDigest"},
      "max":100,
      "min":1
    },
    "CompleteLayerUploadRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "uploadId",
        "layerDigests"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry to which to upload layers. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to associate with the image layer.</p>"
        },
        "uploadId":{
          "shape":"UploadId",
          "documentation":"<p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to associate with the image layer.</p>"
        },
        "layerDigests":{
          "shape":"LayerDigestList",
          "documentation":"<p>The <code>sha256</code> digest of the image layer.</p>"
        }
      }
    },
    "CompleteLayerUploadResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "uploadId":{
          "shape":"UploadId",
          "documentation":"<p>The upload ID associated with the layer.</p>"
        },
        "layerDigest":{
          "shape":"LayerDigest",
          "documentation":"<p>The <code>sha256</code> digest of the image layer.</p>"
        }
      }
    },
    "CreateRepositoryRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name to use for the repository. The repository name may be specified on its own (such as <code>nginx-web-app</code>) or it can be prepended with a namespace to group the repository into a category (such as <code>project-a/nginx-web-app</code>).</p>"
        }
      }
    },
    "CreateRepositoryResponse":{
      "type":"structure",
      "members":{
        "repository":{
          "shape":"Repository",
          "documentation":"<p>The repository that was created.</p>"
        }
      }
    },
    "CreationTimestamp":{"type":"timestamp"},
    "DeleteLifecyclePolicyRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository.</p>"
        }
      }
    },
    "DeleteLifecyclePolicyResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "lifecyclePolicyText":{
          "shape":"LifecyclePolicyText",
          "documentation":"<p>The JSON lifecycle policy text.</p>"
        },
        "lastEvaluatedAt":{
          "shape":"EvaluationTimestamp",
          "documentation":"<p>The time stamp of the last time that the lifecycle policy was run.</p>"
        }
      }
    },
    "DeleteRepositoryPolicyRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository policy to delete. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that is associated with the repository policy to delete.</p>"
        }
      }
    },
    "DeleteRepositoryPolicyResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "policyText":{
          "shape":"RepositoryPolicyText",
          "documentation":"<p>The JSON repository policy that was deleted from the repository.</p>"
        }
      }
    },
    "DeleteRepositoryRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository to delete. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to delete.</p>"
        },
        "force":{
          "shape":"ForceFlag",
          "documentation":"<p> If a repository contains images, forces the deletion.</p>"
        }
      }
    },
    "DeleteRepositoryResponse":{
      "type":"structure",
      "members":{
        "repository":{
          "shape":"Repository",
          "documentation":"<p>The repository that was deleted.</p>"
        }
      }
    },
    "DescribeImagesFilter":{
      "type":"structure",
      "members":{
        "tagStatus":{
          "shape":"TagStatus",
          "documentation":"<p>The tag status with which to filter your <a>DescribeImages</a> results. You can filter results based on whether they are <code>TAGGED</code> or <code>UNTAGGED</code>.</p>"
        }
      },
      "documentation":"<p>An object representing a filter on a <a>DescribeImages</a> operation.</p>"
    },
    "DescribeImagesRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository in which to describe images. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>A list of repositories to describe. If this parameter is omitted, then all repositories in a registry are described.</p>"
        },
        "imageIds":{
          "shape":"ImageIdentifierList",
          "documentation":"<p>The list of image IDs for the requested repository.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeImages</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return. This option cannot be used when you specify images with <code>imageIds</code>.</p>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of repository results returned by <code>DescribeImages</code> in paginated output. When this parameter is used, <code>DescribeImages</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeImages</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeImages</code> returns up to 100 results and a <code>nextToken</code> value, if applicable. This option cannot be used when you specify images with <code>imageIds</code>.</p>"
        },
        "filter":{
          "shape":"DescribeImagesFilter",
          "documentation":"<p>The filter key and value with which to filter your <code>DescribeImages</code> results.</p>"
        }
      }
    },
    "DescribeImagesResponse":{
      "type":"structure",
      "members":{
        "imageDetails":{
          "shape":"ImageDetailList",
          "documentation":"<p>A list of <a>ImageDetail</a> objects that contain data about the image.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>DescribeImages</code> request. When the results of a <code>DescribeImages</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "DescribeRepositoriesRequest":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repositories to be described. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryNames":{
          "shape":"RepositoryNameList",
          "documentation":"<p>A list of repositories to describe. If this parameter is omitted, then all repositories in a registry are described.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeRepositories</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return. This option cannot be used when you specify repositories with <code>repositoryNames</code>.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of repository results returned by <code>DescribeRepositories</code> in paginated output. When this parameter is used, <code>DescribeRepositories</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeRepositories</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeRepositories</code> returns up to 100 results and a <code>nextToken</code> value, if applicable. This option cannot be used when you specify repositories with <code>repositoryNames</code>.</p>"
        }
      }
    },
    "DescribeRepositoriesResponse":{
      "type":"structure",
      "members":{
        "repositories":{
          "shape":"RepositoryList",
          "documentation":"<p>A list of repository objects corresponding to valid repositories.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>DescribeRepositories</code> request. When the results of a <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "EmptyUploadException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified layer upload does not contain any layer parts.</p>",
      "exception":true
    },
    "EvaluationTimestamp":{"type":"timestamp"},
    "ExceptionMessage":{"type":"string"},
    "ExpirationTimestamp":{"type":"timestamp"},
    "ForceFlag":{"type":"boolean"},
    "GetAuthorizationTokenRegistryIdList":{
      "type":"list",
      "member":{"shape":"RegistryId"},
      "max":10,
      "min":1
    },
    "GetAuthorizationTokenRequest":{
      "type":"structure",
      "members":{
        "registryIds":{
          "shape":"GetAuthorizationTokenRegistryIdList",
          "documentation":"<p>A list of AWS account IDs that are associated with the registries for which to get authorization tokens. If you do not specify a registry, the default registry is assumed.</p>"
        }
      }
    },
    "GetAuthorizationTokenResponse":{
      "type":"structure",
      "members":{
        "authorizationData":{
          "shape":"AuthorizationDataList",
          "documentation":"<p>A list of authorization token data objects that correspond to the <code>registryIds</code> values in the request.</p>"
        }
      }
    },
    "GetDownloadUrlForLayerRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "layerDigest"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the image layer to download. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that is associated with the image layer to download.</p>"
        },
        "layerDigest":{
          "shape":"LayerDigest",
          "documentation":"<p>The digest of the image layer to download.</p>"
        }
      }
    },
    "GetDownloadUrlForLayerResponse":{
      "type":"structure",
      "members":{
        "downloadUrl":{
          "shape":"Url",
          "documentation":"<p>The pre-signed Amazon S3 download URL for the requested layer.</p>"
        },
        "layerDigest":{
          "shape":"LayerDigest",
          "documentation":"<p>The digest of the image layer to download.</p>"
        }
      }
    },
    "GetLifecyclePolicyPreviewRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository.</p>"
        },
        "imageIds":{
          "shape":"ImageIdentifierList",
          "documentation":"<p>The list of imageIDs to be included.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated&#x2028; <code>GetLifecyclePolicyPreviewRequest</code> request where <code>maxResults</code> was used and the&#x2028; results exceeded the value of that parameter. Pagination continues from the end of the&#x2028; previous results that returned the <code>nextToken</code> value. This value is&#x2028; <code>null</code> when there are no more results to return. This option cannot be used when you specify images with <code>imageIds</code>.</p>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of repository results returned by <code>GetLifecyclePolicyPreviewRequest</code> in&#x2028; paginated output. When this parameter is used, <code>GetLifecyclePolicyPreviewRequest</code> only returns&#x2028; <code>maxResults</code> results in a single page along with a <code>nextToken</code>&#x2028; response element. The remaining results of the initial request can be seen by sending&#x2028; another <code>GetLifecyclePolicyPreviewRequest</code> request with the returned <code>nextToken</code>&#x2028; value. This value can be between 1 and 100. If this&#x2028; parameter is not used, then <code>GetLifecyclePolicyPreviewRequest</code> returns up to&#x2028; 100 results and a <code>nextToken</code> value, if&#x2028; applicable. This option cannot be used when you specify images with <code>imageIds</code>.</p>"
        },
        "filter":{
          "shape":"LifecyclePolicyPreviewFilter",
          "documentation":"<p>An optional parameter that filters results based on image tag status and all tags, if tagged.</p>"
        }
      }
    },
    "GetLifecyclePolicyPreviewResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "lifecyclePolicyText":{
          "shape":"LifecyclePolicyText",
          "documentation":"<p>The JSON lifecycle policy text.</p>"
        },
        "status":{
          "shape":"LifecyclePolicyPreviewStatus",
          "documentation":"<p>The status of the lifecycle policy preview request.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>GetLifecyclePolicyPreview</code> request. When the results of a <code>GetLifecyclePolicyPreview</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        },
        "previewResults":{
          "shape":"LifecyclePolicyPreviewResultList",
          "documentation":"<p>The results of the lifecycle policy preview request.</p>"
        },
        "summary":{
          "shape":"LifecyclePolicyPreviewSummary",
          "documentation":"<p>The list of images that is returned as a result of the action.</p>"
        }
      }
    },
    "GetLifecyclePolicyRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository.</p>"
        }
      }
    },
    "GetLifecyclePolicyResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "lifecyclePolicyText":{
          "shape":"LifecyclePolicyText",
          "documentation":"<p>The JSON lifecycle policy text.</p>"
        },
        "lastEvaluatedAt":{
          "shape":"EvaluationTimestamp",
          "documentation":"<p>The time stamp of the last time that the lifecycle policy was run.</p>"
        }
      }
    },
    "GetRepositoryPolicyRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository with the policy to retrieve.</p>"
        }
      }
    },
    "GetRepositoryPolicyResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "policyText":{
          "shape":"RepositoryPolicyText",
          "documentation":"<p>The JSON repository policy text associated with the repository.</p>"
        }
      }
    },
    "Image":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry containing the image.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository associated with the image.</p>"
        },
        "imageId":{
          "shape":"ImageIdentifier",
          "documentation":"<p>An object containing the image tag and image digest associated with an image.</p>"
        },
        "imageManifest":{
          "shape":"ImageManifest",
          "documentation":"<p>The image manifest associated with the image.</p>"
        }
      },
      "documentation":"<p>An object representing an Amazon ECR image.</p>"
    },
    "ImageActionType":{
      "type":"string",
      "enum":["EXPIRE"]
    },
    "ImageAlreadyExistsException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified image has already been pushed, and there were no changes to the manifest or image tag after the last push.</p>",
      "exception":true
    },
    "ImageCount":{
      "type":"integer",
      "min":0
    },
    "ImageDetail":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry to which this image belongs.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to which this image belongs.</p>"
        },
        "imageDigest":{
          "shape":"ImageDigest",
          "documentation":"<p>The <code>sha256</code> digest of the image manifest.</p>"
        },
        "imageTags":{
          "shape":"ImageTagList",
          "documentation":"<p>The list of tags associated with this image.</p>"
        },
        "imageSizeInBytes":{
          "shape":"ImageSizeInBytes",
          "documentation":"<p>The size, in bytes, of the image in the repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>"
        },
        "imagePushedAt":{
          "shape":"PushTimestamp",
          "documentation":"<p>The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository. </p>"
        }
      },
      "documentation":"<p>An object that describes an image returned by a <a>DescribeImages</a> operation.</p>"
    },
    "ImageDetailList":{
      "type":"list",
      "member":{"shape":"ImageDetail"}
    },
    "ImageDigest":{"type":"string"},
    "ImageFailure":{
      "type":"structure",
      "members":{
        "imageId":{
          "shape":"ImageIdentifier",
          "documentation":"<p>The image ID associated with the failure.</p>"
        },
        "failureCode":{
          "shape":"ImageFailureCode",
          "documentation":"<p>The code associated with the failure.</p>"
        },
        "failureReason":{
          "shape":"ImageFailureReason",
          "documentation":"<p>The reason for the failure.</p>"
        }
      },
      "documentation":"<p>An object representing an Amazon ECR image failure.</p>"
    },
    "ImageFailureCode":{
      "type":"string",
      "enum":[
        "InvalidImageDigest",
        "InvalidImageTag",
        "ImageTagDoesNotMatchDigest",
        "ImageNotFound",
        "MissingDigestAndTag"
      ]
    },
    "ImageFailureList":{
      "type":"list",
      "member":{"shape":"ImageFailure"}
    },
    "ImageFailureReason":{"type":"string"},
    "ImageIdentifier":{
      "type":"structure",
      "members":{
        "imageDigest":{
          "shape":"ImageDigest",
          "documentation":"<p>The <code>sha256</code> digest of the image manifest.</p>"
        },
        "imageTag":{
          "shape":"ImageTag",
          "documentation":"<p>The tag used for the image.</p>"
        }
      },
      "documentation":"<p>An object with identifying information for an Amazon ECR image.</p>"
    },
    "ImageIdentifierList":{
      "type":"list",
      "member":{"shape":"ImageIdentifier"},
      "max":100,
      "min":1
    },
    "ImageList":{
      "type":"list",
      "member":{"shape":"Image"}
    },
    "ImageManifest":{"type":"string"},
    "ImageNotFoundException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The image requested does not exist in the specified repository.</p>",
      "exception":true
    },
    "ImageSizeInBytes":{"type":"long"},
    "ImageTag":{"type":"string"},
    "ImageTagList":{
      "type":"list",
      "member":{"shape":"ImageTag"}
    },
    "InitiateLayerUploadRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry to which you intend to upload layers. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to which you intend to upload layers.</p>"
        }
      }
    },
    "InitiateLayerUploadResponse":{
      "type":"structure",
      "members":{
        "uploadId":{
          "shape":"UploadId",
          "documentation":"<p>The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a> operations.</p>"
        },
        "partSize":{
          "shape":"PartSize",
          "documentation":"<p>The size, in bytes, that Amazon ECR expects future layer part uploads to be.</p>"
        }
      }
    },
    "InvalidLayerException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does not match the digest specified.</p>",
      "exception":true
    },
    "InvalidLayerPartException":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the exception.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the exception.</p>"
        },
        "uploadId":{
          "shape":"UploadId",
          "documentation":"<p>The upload ID associated with the exception.</p>"
        },
        "lastValidByteReceived":{
          "shape":"PartSize",
          "documentation":"<p>The last valid byte received from the layer part upload that is associated with the exception.</p>"
        },
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The layer part size is not valid, or the first byte specified is not consecutive to the last byte of a previous layer part upload.</p>",
      "exception":true
    },
    "InvalidParameterException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified parameter is invalid. Review the available parameters for the API request.</p>",
      "exception":true
    },
    "Layer":{
      "type":"structure",
      "members":{
        "layerDigest":{
          "shape":"LayerDigest",
          "documentation":"<p>The <code>sha256</code> digest of the image layer.</p>"
        },
        "layerAvailability":{
          "shape":"LayerAvailability",
          "documentation":"<p>The availability status of the image layer.</p>"
        },
        "layerSize":{
          "shape":"LayerSizeInBytes",
          "documentation":"<p>The size, in bytes, of the image layer.</p>"
        },
        "mediaType":{
          "shape":"MediaType",
          "documentation":"<p>The media type of the layer, such as <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.</p>"
        }
      },
      "documentation":"<p>An object representing an Amazon ECR image layer.</p>"
    },
    "LayerAlreadyExistsException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The image layer already exists in the associated repository.</p>",
      "exception":true
    },
    "LayerAvailability":{
      "type":"string",
      "enum":[
        "AVAILABLE",
        "UNAVAILABLE"
      ]
    },
    "LayerDigest":{
      "type":"string",
      "pattern":"[a-zA-Z0-9-_+.]+:[a-fA-F0-9]+"
    },
    "LayerDigestList":{
      "type":"list",
      "member":{"shape":"LayerDigest"},
      "max":100,
      "min":1
    },
    "LayerFailure":{
      "type":"structure",
      "members":{
        "layerDigest":{
          "shape":"BatchedOperationLayerDigest",
          "documentation":"<p>The layer digest associated with the failure.</p>"
        },
        "failureCode":{
          "shape":"LayerFailureCode",
          "documentation":"<p>The failure code associated with the failure.</p>"
        },
        "failureReason":{
          "shape":"LayerFailureReason",
          "documentation":"<p>The reason for the failure.</p>"
        }
      },
      "documentation":"<p>An object representing an Amazon ECR image layer failure.</p>"
    },
    "LayerFailureCode":{
      "type":"string",
      "enum":[
        "InvalidLayerDigest",
        "MissingLayerDigest"
      ]
    },
    "LayerFailureList":{
      "type":"list",
      "member":{"shape":"LayerFailure"}
    },
    "LayerFailureReason":{"type":"string"},
    "LayerInaccessibleException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified layer is not available because it is not associated with an image. Unassociated image layers may be cleaned up at any time.</p>",
      "exception":true
    },
    "LayerList":{
      "type":"list",
      "member":{"shape":"Layer"}
    },
    "LayerPartBlob":{"type":"blob"},
    "LayerPartTooSmallException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>Layer parts must be at least 5 MiB in size.</p>",
      "exception":true
    },
    "LayerSizeInBytes":{"type":"long"},
    "LayersNotFoundException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified layers could not be found, or the specified layer is not valid for this repository.</p>",
      "exception":true
    },
    "LifecyclePolicyNotFoundException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The lifecycle policy could not be found, and no policy is set to the repository.</p>",
      "exception":true
    },
    "LifecyclePolicyPreviewFilter":{
      "type":"structure",
      "members":{
        "tagStatus":{
          "shape":"TagStatus",
          "documentation":"<p>The tag status of the image.</p>"
        }
      },
      "documentation":"<p>The filter for the lifecycle policy preview.</p>"
    },
    "LifecyclePolicyPreviewInProgressException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>The previous lifecycle policy preview request has not completed. Please try again later.</p>",
      "exception":true
    },
    "LifecyclePolicyPreviewNotFoundException":{
      "type":"structure",
      "members":{
        "message":{"shape":"ExceptionMessage"}
      },
      "documentation":"<p>There is no dry run for this repository.</p>",
      "exception":true
    },
    "LifecyclePolicyPreviewResult":{
      "type":"structure",
      "members":{
        "imageTags":{
          "shape":"ImageTagList",
          "documentation":"<p>The list of tags associated with this image.</p>"
        },
        "imageDigest":{
          "shape":"ImageDigest",
          "documentation":"<p>The <code>sha256</code> digest of the image manifest.</p>"
        },
        "imagePushedAt":{
          "shape":"PushTimestamp",
          "documentation":"<p>The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository.</p>"
        },
        "action":{
          "shape":"LifecyclePolicyRuleAction",
          "documentation":"<p>The type of action to be taken.</p>"
        },
        "appliedRulePriority":{
          "shape":"LifecyclePolicyRulePriority",
          "documentation":"<p>The priority of the applied rule.</p>"
        }
      },
      "documentation":"<p>The result of the lifecycle policy preview.</p>"
    },
    "LifecyclePolicyPreviewResultList":{
      "type":"list",
      "member":{"shape":"LifecyclePolicyPreviewResult"}
    },
    "LifecyclePolicyPreviewStatus":{
      "type":"string",
      "enum":[
        "IN_PROGRESS",
        "COMPLETE",
        "EXPIRED",
        "FAILED"
      ]
    },
    "LifecyclePolicyPreviewSummary":{
      "type":"structure",
      "members":{
        "expiringImageTotalCount":{
          "shape":"ImageCount",
          "documentation":"<p>The number of expiring images.</p>"
        }
      },
      "documentation":"<p>The summary of the lifecycle policy preview request.</p>"
    },
    "LifecyclePolicyRuleAction":{
      "type":"structure",
      "members":{
        "type":{
          "shape":"ImageActionType",
          "documentation":"<p>The type of action to be taken.</p>"
        }
      },
      "documentation":"<p>The type of action to be taken.</p>"
    },
    "LifecyclePolicyRulePriority":{
      "type":"integer",
      "min":1
    },
    "LifecyclePolicyText":{
      "type":"string",
      "max":10240,
      "min":100
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The operation did not succeed because it would have exceeded a service limit for your account. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonECR/latest/userguide/service_limits.html\">Amazon ECR Default Service Limits</a> in the Amazon Elastic Container Registry User Guide.</p>",
      "exception":true
    },
    "ListImagesFilter":{
      "type":"structure",
      "members":{
        "tagStatus":{
          "shape":"TagStatus",
          "documentation":"<p>The tag status with which to filter your <a>ListImages</a> results. You can filter results based on whether they are <code>TAGGED</code> or <code>UNTAGGED</code>.</p>"
        }
      },
      "documentation":"<p>An object representing a filter on a <a>ListImages</a> operation.</p>"
    },
    "ListImagesRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository in which to list images. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository with image IDs to be listed.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> value returned from a previous paginated <code>ListImages</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of image results returned by <code>ListImages</code> in paginated output. When this parameter is used, <code>ListImages</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListImages</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListImages</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.</p>"
        },
        "filter":{
          "shape":"ListImagesFilter",
          "documentation":"<p>The filter key and value with which to filter your <code>ListImages</code> results.</p>"
        }
      }
    },
    "ListImagesResponse":{
      "type":"structure",
      "members":{
        "imageIds":{
          "shape":"ImageIdentifierList",
          "documentation":"<p>The list of image IDs for the requested repository.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>The <code>nextToken</code> value to include in a future <code>ListImages</code> request. When the results of a <code>ListImages</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>"
        }
      }
    },
    "MaxResults":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "MediaType":{"type":"string"},
    "MediaTypeList":{
      "type":"list",
      "member":{"shape":"MediaType"},
      "max":100,
      "min":1
    },
    "NextToken":{"type":"string"},
    "PartSize":{
      "type":"long",
      "min":0
    },
    "ProxyEndpoint":{"type":"string"},
    "PushTimestamp":{"type":"timestamp"},
    "PutImageRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "imageManifest"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository in which to put the image. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository in which to put the image.</p>"
        },
        "imageManifest":{
          "shape":"ImageManifest",
          "documentation":"<p>The image manifest corresponding to the image to be uploaded.</p>"
        },
        "imageTag":{
          "shape":"ImageTag",
          "documentation":"<p>The tag to associate with the image. This parameter is required for images that use the Docker Image Manifest V2 Schema 2 or OCI formats.</p>"
        }
      }
    },
    "PutImageResponse":{
      "type":"structure",
      "members":{
        "image":{
          "shape":"Image",
          "documentation":"<p>Details of the image uploaded.</p>"
        }
      }
    },
    "PutLifecyclePolicyRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "lifecyclePolicyText"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository. If you do&#x2028; not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to receive the policy.</p>"
        },
        "lifecyclePolicyText":{
          "shape":"LifecyclePolicyText",
          "documentation":"<p>The JSON repository policy text to apply to the repository.</p>"
        }
      }
    },
    "PutLifecyclePolicyResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "lifecyclePolicyText":{
          "shape":"LifecyclePolicyText",
          "documentation":"<p>The JSON repository policy text.</p>"
        }
      }
    },
    "RegistryId":{
      "type":"string",
      "pattern":"[0-9]{12}"
    },
    "Repository":{
      "type":"structure",
      "members":{
        "repositoryArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the repository, AWS account ID of the repository owner, repository namespace, and repository name. For example, <code>arn:aws:ecr:region:012345678910:repository/test</code>.</p>"
        },
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository.</p>"
        },
        "repositoryUri":{
          "shape":"Url",
          "documentation":"<p>The URI for the repository. You can use this URI for Docker <code>push</code> or <code>pull</code> operations.</p>"
        },
        "createdAt":{
          "shape":"CreationTimestamp",
          "documentation":"<p>The date and time, in JavaScript date format, when the repository was created.</p>"
        }
      },
      "documentation":"<p>An object representing a repository.</p>"
    },
    "RepositoryAlreadyExistsException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified repository already exists in the specified registry.</p>",
      "exception":true
    },
    "RepositoryList":{
      "type":"list",
      "member":{"shape":"Repository"}
    },
    "RepositoryName":{
      "type":"string",
      "max":256,
      "min":2,
      "pattern":"(?:[a-z0-9]+(?:[._-][a-z0-9]+)*/)*[a-z0-9]+(?:[._-][a-z0-9]+)*"
    },
    "RepositoryNameList":{
      "type":"list",
      "member":{"shape":"RepositoryName"},
      "max":100,
      "min":1
    },
    "RepositoryNotEmptyException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified repository contains images. To delete a repository that contains images, you must force the deletion with the <code>force</code> parameter.</p>",
      "exception":true
    },
    "RepositoryNotFoundException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>",
      "exception":true
    },
    "RepositoryPolicyNotFoundException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The specified repository and registry combination does not have an associated repository policy.</p>",
      "exception":true
    },
    "RepositoryPolicyText":{
      "type":"string",
      "max":10240,
      "min":0
    },
    "ServerException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>These errors are usually caused by a server-side issue.</p>",
      "exception":true,
      "fault":true
    },
    "SetRepositoryPolicyRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "policyText"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to receive the policy.</p>"
        },
        "policyText":{
          "shape":"RepositoryPolicyText",
          "documentation":"<p>The JSON repository policy text to apply to the repository.</p>"
        },
        "force":{
          "shape":"ForceFlag",
          "documentation":"<p>If the policy you are attempting to set on a repository policy would prevent you from setting another policy in the future, you must force the <a>SetRepositoryPolicy</a> operation. This is intended to prevent accidental repository lock outs.</p>"
        }
      }
    },
    "SetRepositoryPolicyResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "policyText":{
          "shape":"RepositoryPolicyText",
          "documentation":"<p>The JSON repository policy text applied to the repository.</p>"
        }
      }
    },
    "StartLifecyclePolicyPreviewRequest":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to be evaluated.</p>"
        },
        "lifecyclePolicyText":{
          "shape":"LifecyclePolicyText",
          "documentation":"<p>The policy to be evaluated against. If you do not specify a policy, the current policy for the repository is used.</p>"
        }
      }
    },
    "StartLifecyclePolicyPreviewResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "lifecyclePolicyText":{
          "shape":"LifecyclePolicyText",
          "documentation":"<p>The JSON repository policy text.</p>"
        },
        "status":{
          "shape":"LifecyclePolicyPreviewStatus",
          "documentation":"<p>The status of the lifecycle policy preview request.</p>"
        }
      }
    },
    "TagStatus":{
      "type":"string",
      "enum":[
        "TAGGED",
        "UNTAGGED"
      ]
    },
    "UploadId":{
      "type":"string",
      "pattern":"[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"
    },
    "UploadLayerPartRequest":{
      "type":"structure",
      "required":[
        "repositoryName",
        "uploadId",
        "partFirstByte",
        "partLastByte",
        "layerPartBlob"
      ],
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The AWS account ID associated with the registry to which you are uploading layer parts. If you do not specify a registry, the default registry is assumed.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to which you are uploading layer parts.</p>"
        },
        "uploadId":{
          "shape":"UploadId",
          "documentation":"<p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to associate with the layer part upload.</p>"
        },
        "partFirstByte":{
          "shape":"PartSize",
          "documentation":"<p>The integer value of the first byte of the layer part.</p>"
        },
        "partLastByte":{
          "shape":"PartSize",
          "documentation":"<p>The integer value of the last byte of the layer part.</p>"
        },
        "layerPartBlob":{
          "shape":"LayerPartBlob",
          "documentation":"<p>The base64-encoded layer part payload.</p>"
        }
      }
    },
    "UploadLayerPartResponse":{
      "type":"structure",
      "members":{
        "registryId":{
          "shape":"RegistryId",
          "documentation":"<p>The registry ID associated with the request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository name associated with the request.</p>"
        },
        "uploadId":{
          "shape":"UploadId",
          "documentation":"<p>The upload ID associated with the request.</p>"
        },
        "lastByteReceived":{
          "shape":"PartSize",
          "documentation":"<p>The integer value of the last byte received in the request.</p>"
        }
      }
    },
    "UploadNotFoundException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ExceptionMessage",
          "documentation":"<p>The error message associated with the exception.</p>"
        }
      },
      "documentation":"<p>The upload could not be found, or the specified upload id is not valid for this repository.</p>",
      "exception":true
    },
    "Url":{"type":"string"}
  },
  "documentation":"<p>Amazon Elastic Container Registry (Amazon ECR) is a managed Docker registry service. Customers can use the familiar Docker CLI to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry. Amazon ECR supports private Docker repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images. Developers can use the Docker CLI to author and manage images.</p>"
}
