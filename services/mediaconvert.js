awsim['mediaconvert'] = {
  "metadata": {
    "apiVersion": "2017-08-29",
    "endpointPrefix": "mediaconvert",
    "signingName": "mediaconvert",
    "serviceFullName": "AWS Elemental MediaConvert",
    "serviceId": "MediaConvert",
    "protocol": "rest-json",
    "jsonVersion": "1.1",
    "uid": "mediaconvert-2017-08-29",
    "signatureVersion": "v4",
    "serviceAbbreviation": "MediaConvert"
  },
  "operations": {
    "CancelJob": {
      "name": "CancelJob",
      "http": {
        "method": "DELETE",
        "requestUri": "/2017-08-29/jobs/{id}",
        "responseCode": 202
      },
      "input": {
        "shape": "CancelJobRequest"
      },
      "output": {
        "shape": "CancelJobResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Permanently remove a job from a queue. Once you have canceled a job, you can't start it again. You can't delete a running job."
    },
    "CreateJob": {
      "name": "CreateJob",
      "http": {
        "method": "POST",
        "requestUri": "/2017-08-29/jobs",
        "responseCode": 201
      },
      "input": {
        "shape": "CreateJobRequest"
      },
      "output": {
        "shape": "CreateJobResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"
    },
    "CreateJobTemplate": {
      "name": "CreateJobTemplate",
      "http": {
        "method": "POST",
        "requestUri": "/2017-08-29/jobTemplates",
        "responseCode": 201
      },
      "input": {
        "shape": "CreateJobTemplateRequest"
      },
      "output": {
        "shape": "CreateJobTemplateResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"
    },
    "CreatePreset": {
      "name": "CreatePreset",
      "http": {
        "method": "POST",
        "requestUri": "/2017-08-29/presets",
        "responseCode": 201
      },
      "input": {
        "shape": "CreatePresetRequest"
      },
      "output": {
        "shape": "CreatePresetResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"
    },
    "CreateQueue": {
      "name": "CreateQueue",
      "http": {
        "method": "POST",
        "requestUri": "/2017-08-29/queues",
        "responseCode": 201
      },
      "input": {
        "shape": "CreateQueueRequest"
      },
      "output": {
        "shape": "CreateQueueResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Create a new transcoding queue. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"
    },
    "DeleteJobTemplate": {
      "name": "DeleteJobTemplate",
      "http": {
        "method": "DELETE",
        "requestUri": "/2017-08-29/jobTemplates/{name}",
        "responseCode": 202
      },
      "input": {
        "shape": "DeleteJobTemplateRequest"
      },
      "output": {
        "shape": "DeleteJobTemplateResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Permanently delete a job template you have created."
    },
    "DeletePreset": {
      "name": "DeletePreset",
      "http": {
        "method": "DELETE",
        "requestUri": "/2017-08-29/presets/{name}",
        "responseCode": 202
      },
      "input": {
        "shape": "DeletePresetRequest"
      },
      "output": {
        "shape": "DeletePresetResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Permanently delete a preset you have created."
    },
    "DeleteQueue": {
      "name": "DeleteQueue",
      "http": {
        "method": "DELETE",
        "requestUri": "/2017-08-29/queues/{name}",
        "responseCode": 202
      },
      "input": {
        "shape": "DeleteQueueRequest"
      },
      "output": {
        "shape": "DeleteQueueResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Permanently delete a queue you have created."
    },
    "DescribeEndpoints": {
      "name": "DescribeEndpoints",
      "http": {
        "method": "POST",
        "requestUri": "/2017-08-29/endpoints",
        "responseCode": 200
      },
      "input": {
        "shape": "DescribeEndpointsRequest"
      },
      "output": {
        "shape": "DescribeEndpointsResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "BadRequestException"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "InternalServiceException"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "AccessDeniedException"
        },
        {
          "shape": "NotFoundException",
          "documentation": "ResourceNotFoundException"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "LimitExceededException"
        },
        {
          "shape": "ConflictException",
          "documentation": "ResourceInUseException"
        }
      ],
      "documentation": "Send an request with an empty body to the regional API endpoint to get your account API endpoint."
    },
    "GetJob": {
      "name": "GetJob",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/jobs/{id}",
        "responseCode": 200
      },
      "input": {
        "shape": "GetJobRequest"
      },
      "output": {
        "shape": "GetJobResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve the JSON for a specific completed transcoding job."
    },
    "GetJobTemplate": {
      "name": "GetJobTemplate",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/jobTemplates/{name}",
        "responseCode": 200
      },
      "input": {
        "shape": "GetJobTemplateRequest"
      },
      "output": {
        "shape": "GetJobTemplateResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve the JSON for a specific job template."
    },
    "GetPreset": {
      "name": "GetPreset",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/presets/{name}",
        "responseCode": 200
      },
      "input": {
        "shape": "GetPresetRequest"
      },
      "output": {
        "shape": "GetPresetResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve the JSON for a specific preset."
    },
    "GetQueue": {
      "name": "GetQueue",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/queues/{name}",
        "responseCode": 200
      },
      "input": {
        "shape": "GetQueueRequest"
      },
      "output": {
        "shape": "GetQueueResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve the JSON for a specific queue."
    },
    "ListJobTemplates": {
      "name": "ListJobTemplates",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/jobTemplates",
        "responseCode": 200
      },
      "input": {
        "shape": "ListJobTemplatesRequest"
      },
      "output": {
        "shape": "ListJobTemplatesResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array"
    },
    "ListJobs": {
      "name": "ListJobs",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/jobs",
        "responseCode": 200
      },
      "input": {
        "shape": "ListJobsRequest"
      },
      "output": {
        "shape": "ListJobsResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array."
    },
    "ListPresets": {
      "name": "ListPresets",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/presets",
        "responseCode": 200
      },
      "input": {
        "shape": "ListPresetsRequest"
      },
      "output": {
        "shape": "ListPresetsResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array."
    },
    "ListQueues": {
      "name": "ListQueues",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/queues",
        "responseCode": 200
      },
      "input": {
        "shape": "ListQueuesRequest"
      },
      "output": {
        "shape": "ListQueuesResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array."
    },
    "ListTagsForResource": {
      "name": "ListTagsForResource",
      "http": {
        "method": "GET",
        "requestUri": "/2017-08-29/tags/{arn}",
        "responseCode": 200
      },
      "input": {
        "shape": "ListTagsForResourceRequest"
      },
      "output": {
        "shape": "ListTagsForResourceResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Retrieve the tags for a MediaConvert resource."
    },
    "TagResource": {
      "name": "TagResource",
      "http": {
        "method": "POST",
        "requestUri": "/2017-08-29/tags",
        "responseCode": 200
      },
      "input": {
        "shape": "TagResourceRequest"
      },
      "output": {
        "shape": "TagResourceResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html"
    },
    "UntagResource": {
      "name": "UntagResource",
      "http": {
        "method": "PUT",
        "requestUri": "/2017-08-29/tags/{arn}",
        "responseCode": 200
      },
      "input": {
        "shape": "UntagResourceRequest"
      },
      "output": {
        "shape": "UntagResourceResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html"
    },
    "UpdateJobTemplate": {
      "name": "UpdateJobTemplate",
      "http": {
        "method": "PUT",
        "requestUri": "/2017-08-29/jobTemplates/{name}",
        "responseCode": 200
      },
      "input": {
        "shape": "UpdateJobTemplateRequest"
      },
      "output": {
        "shape": "UpdateJobTemplateResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Modify one of your existing job templates."
    },
    "UpdatePreset": {
      "name": "UpdatePreset",
      "http": {
        "method": "PUT",
        "requestUri": "/2017-08-29/presets/{name}",
        "responseCode": 200
      },
      "input": {
        "shape": "UpdatePresetRequest"
      },
      "output": {
        "shape": "UpdatePresetResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Modify one of your existing presets."
    },
    "UpdateQueue": {
      "name": "UpdateQueue",
      "http": {
        "method": "PUT",
        "requestUri": "/2017-08-29/queues/{name}",
        "responseCode": 200
      },
      "input": {
        "shape": "UpdateQueueRequest"
      },
      "output": {
        "shape": "UpdateQueueResponse"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "The service encountered an unexpected condition and can't fulfill your request."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You don't have permissions for this action with the credentials you sent."
        },
        {
          "shape": "NotFoundException",
          "documentation": "The resource you requested doesn't exist."
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
        },
        {
          "shape": "ConflictException",
          "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
        }
      ],
      "documentation": "Modify one of your existing queues."
    }
  },
  "shapes": {
    "AacAudioDescriptionBroadcasterMix": {
      "type": "string",
      "documentation": "Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains \"broadcaster mixed AD\". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and  FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.",
      "enum": [
        "BROADCASTER_MIXED_AD",
        "NORMAL"
      ]
    },
    "AacCodecProfile": {
      "type": "string",
      "documentation": "AAC Profile.",
      "enum": [
        "LC",
        "HEV1",
        "HEV2"
      ]
    },
    "AacCodingMode": {
      "type": "string",
      "documentation": "Mono (Audio Description), Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. \"1.0 - Audio Description (Receiver Mix)\" setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.",
      "enum": [
        "AD_RECEIVER_MIX",
        "CODING_MODE_1_0",
        "CODING_MODE_1_1",
        "CODING_MODE_2_0",
        "CODING_MODE_5_1"
      ]
    },
    "AacRateControlMode": {
      "type": "string",
      "documentation": "Rate Control Mode.",
      "enum": [
        "CBR",
        "VBR"
      ]
    },
    "AacRawFormat": {
      "type": "string",
      "documentation": "Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose \"No container\" for the output container.",
      "enum": [
        "LATM_LOAS",
        "NONE"
      ]
    },
    "AacSettings": {
      "type": "structure",
      "members": {
        "AudioDescriptionBroadcasterMix": {
          "shape": "AacAudioDescriptionBroadcasterMix",
          "locationName": "audioDescriptionBroadcasterMix"
        },
        "Bitrate": {
          "shape": "__integerMin6000Max1024000",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Defaults and valid values depend on rate control mode and profile."
        },
        "CodecProfile": {
          "shape": "AacCodecProfile",
          "locationName": "codecProfile"
        },
        "CodingMode": {
          "shape": "AacCodingMode",
          "locationName": "codingMode"
        },
        "RateControlMode": {
          "shape": "AacRateControlMode",
          "locationName": "rateControlMode"
        },
        "RawFormat": {
          "shape": "AacRawFormat",
          "locationName": "rawFormat"
        },
        "SampleRate": {
          "shape": "__integerMin8000Max96000",
          "locationName": "sampleRate",
          "documentation": "Sample rate in Hz. Valid values depend on rate control mode and profile."
        },
        "Specification": {
          "shape": "AacSpecification",
          "locationName": "specification"
        },
        "VbrQuality": {
          "shape": "AacVbrQuality",
          "locationName": "vbrQuality"
        }
      },
      "documentation": "Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to \"VBR\" or \"CBR\".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode."
    },
    "AacSpecification": {
      "type": "string",
      "documentation": "Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.",
      "enum": [
        "MPEG2",
        "MPEG4"
      ]
    },
    "AacVbrQuality": {
      "type": "string",
      "documentation": "VBR Quality Level - Only used if rate_control_mode is VBR.",
      "enum": [
        "LOW",
        "MEDIUM_LOW",
        "MEDIUM_HIGH",
        "HIGH"
      ]
    },
    "Ac3BitstreamMode": {
      "type": "string",
      "documentation": "Specifies the \"Bitstream Mode\" (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.",
      "enum": [
        "COMPLETE_MAIN",
        "COMMENTARY",
        "DIALOGUE",
        "EMERGENCY",
        "HEARING_IMPAIRED",
        "MUSIC_AND_EFFECTS",
        "VISUALLY_IMPAIRED",
        "VOICE_OVER"
      ]
    },
    "Ac3CodingMode": {
      "type": "string",
      "documentation": "Dolby Digital coding mode. Determines number of channels.",
      "enum": [
        "CODING_MODE_1_0",
        "CODING_MODE_1_1",
        "CODING_MODE_2_0",
        "CODING_MODE_3_2_LFE"
      ]
    },
    "Ac3DynamicRangeCompressionProfile": {
      "type": "string",
      "documentation": "If set to FILM_STANDARD, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.",
      "enum": [
        "FILM_STANDARD",
        "NONE"
      ]
    },
    "Ac3LfeFilter": {
      "type": "string",
      "documentation": "Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.",
      "enum": [
        "ENABLED",
        "DISABLED"
      ]
    },
    "Ac3MetadataControl": {
      "type": "string",
      "documentation": "When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.",
      "enum": [
        "FOLLOW_INPUT",
        "USE_CONFIGURED"
      ]
    },
    "Ac3Settings": {
      "type": "structure",
      "members": {
        "Bitrate": {
          "shape": "__integerMin64000Max640000",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Valid bitrates depend on the coding mode."
        },
        "BitstreamMode": {
          "shape": "Ac3BitstreamMode",
          "locationName": "bitstreamMode"
        },
        "CodingMode": {
          "shape": "Ac3CodingMode",
          "locationName": "codingMode"
        },
        "Dialnorm": {
          "shape": "__integerMin1Max31",
          "locationName": "dialnorm",
          "documentation": "Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through."
        },
        "DynamicRangeCompressionProfile": {
          "shape": "Ac3DynamicRangeCompressionProfile",
          "locationName": "dynamicRangeCompressionProfile"
        },
        "LfeFilter": {
          "shape": "Ac3LfeFilter",
          "locationName": "lfeFilter"
        },
        "MetadataControl": {
          "shape": "Ac3MetadataControl",
          "locationName": "metadataControl"
        },
        "SampleRate": {
          "shape": "__integerMin48000Max48000",
          "locationName": "sampleRate",
          "documentation": "Sample rate in hz. Sample rate is always 48000."
        }
      },
      "documentation": "Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3."
    },
    "AfdSignaling": {
      "type": "string",
      "documentation": "This setting only applies to H.264 and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.",
      "enum": [
        "NONE",
        "AUTO",
        "FIXED"
      ]
    },
    "AiffSettings": {
      "type": "structure",
      "members": {
        "BitDepth": {
          "shape": "__integerMin16Max24",
          "locationName": "bitDepth",
          "documentation": "Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track."
        },
        "Channels": {
          "shape": "__integerMin1Max2",
          "locationName": "channels",
          "documentation": "Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2."
        },
        "SampleRate": {
          "shape": "__integerMin8000Max192000",
          "locationName": "sampleRate",
          "documentation": "Sample rate in hz."
        }
      },
      "documentation": "Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF."
    },
    "AncillarySourceSettings": {
      "type": "structure",
      "members": {
        "SourceAncillaryChannelNumber": {
          "shape": "__integerMin1Max4",
          "locationName": "sourceAncillaryChannelNumber",
          "documentation": "Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough."
        }
      },
      "documentation": "Settings for ancillary captions source."
    },
    "AntiAlias": {
      "type": "string",
      "documentation": "Enable Anti-alias (AntiAlias) to enhance sharp edges in video output when your input resolution is much larger than your output resolution. Default is enabled.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "AudioCodec": {
      "type": "string",
      "documentation": "Type of Audio codec.",
      "enum": [
        "AAC",
        "MP2",
        "WAV",
        "AIFF",
        "AC3",
        "EAC3",
        "PASSTHROUGH"
      ]
    },
    "AudioCodecSettings": {
      "type": "structure",
      "members": {
        "AacSettings": {
          "shape": "AacSettings",
          "locationName": "aacSettings"
        },
        "Ac3Settings": {
          "shape": "Ac3Settings",
          "locationName": "ac3Settings"
        },
        "AiffSettings": {
          "shape": "AiffSettings",
          "locationName": "aiffSettings"
        },
        "Codec": {
          "shape": "AudioCodec",
          "locationName": "codec"
        },
        "Eac3Settings": {
          "shape": "Eac3Settings",
          "locationName": "eac3Settings"
        },
        "Mp2Settings": {
          "shape": "Mp2Settings",
          "locationName": "mp2Settings"
        },
        "WavSettings": {
          "shape": "WavSettings",
          "locationName": "wavSettings"
        }
      },
      "documentation": "Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value you choose for Audio codec (Codec). For each codec enum you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings"
    },
    "AudioDefaultSelection": {
      "type": "string",
      "documentation": "Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.",
      "enum": [
        "DEFAULT",
        "NOT_DEFAULT"
      ]
    },
    "AudioDescription": {
      "type": "structure",
      "members": {
        "AudioNormalizationSettings": {
          "shape": "AudioNormalizationSettings",
          "locationName": "audioNormalizationSettings"
        },
        "AudioSourceName": {
          "shape": "__string",
          "locationName": "audioSourceName",
          "documentation": "Specifies which audio data to use from each input. In the simplest case, specify an \"Audio Selector\":#inputs-audio_selector by name based on its order within each input. For example if you specify \"Audio Selector 3\", then the third audio selector will be used from each input. If an input does not have an \"Audio Selector 3\", then the audio selector marked as \"default\" in that input will be used. If there is no audio selector marked as \"default\", silence will be inserted for the duration of that input. Alternatively, an \"Audio Selector Group\":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then \"Audio Selector 1\" will be chosen automatically."
        },
        "AudioType": {
          "shape": "__integerMin0Max255",
          "locationName": "audioType",
          "documentation": "Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved."
        },
        "AudioTypeControl": {
          "shape": "AudioTypeControl",
          "locationName": "audioTypeControl"
        },
        "CodecSettings": {
          "shape": "AudioCodecSettings",
          "locationName": "codecSettings"
        },
        "CustomLanguageCode": {
          "shape": "__stringMin3Max3PatternAZaZ3",
          "locationName": "customLanguageCode",
          "documentation": "Specify the language for this audio output track, using the ISO 639-2 or ISO 639-3 three-letter language code. The language specified will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input."
        },
        "LanguageCode": {
          "shape": "LanguageCode",
          "locationName": "languageCode",
          "documentation": "Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input."
        },
        "LanguageCodeControl": {
          "shape": "AudioLanguageCodeControl",
          "locationName": "languageCodeControl"
        },
        "RemixSettings": {
          "shape": "RemixSettings",
          "locationName": "remixSettings",
          "documentation": "Advanced audio remixing settings."
        },
        "StreamName": {
          "shape": "__stringPatternWS",
          "locationName": "streamName",
          "documentation": "Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary). Alphanumeric characters, spaces, and underscore are legal."
        }
      },
      "documentation": "Description of audio output"
    },
    "AudioLanguageCodeControl": {
      "type": "string",
      "documentation": "Choosing FOLLOW_INPUT will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The language specified for languageCode' will be used when USE_CONFIGURED is selected or when FOLLOW_INPUT is selected but there is no ISO 639 language code specified by the input.",
      "enum": [
        "FOLLOW_INPUT",
        "USE_CONFIGURED"
      ]
    },
    "AudioNormalizationAlgorithm": {
      "type": "string",
      "documentation": "Audio normalization algorithm to use. 1770-1 conforms to the CALM Act specification, 1770-2 conforms to the EBU R-128 specification.",
      "enum": [
        "ITU_BS_1770_1",
        "ITU_BS_1770_2"
      ]
    },
    "AudioNormalizationAlgorithmControl": {
      "type": "string",
      "documentation": "When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.",
      "enum": [
        "CORRECT_AUDIO",
        "MEASURE_ONLY"
      ]
    },
    "AudioNormalizationLoudnessLogging": {
      "type": "string",
      "documentation": "If set to LOG, log each output's audio track loudness to a CSV file.",
      "enum": [
        "LOG",
        "DONT_LOG"
      ]
    },
    "AudioNormalizationPeakCalculation": {
      "type": "string",
      "documentation": "If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.",
      "enum": [
        "TRUE_PEAK",
        "NONE"
      ]
    },
    "AudioNormalizationSettings": {
      "type": "structure",
      "members": {
        "Algorithm": {
          "shape": "AudioNormalizationAlgorithm",
          "locationName": "algorithm"
        },
        "AlgorithmControl": {
          "shape": "AudioNormalizationAlgorithmControl",
          "locationName": "algorithmControl"
        },
        "CorrectionGateLevel": {
          "shape": "__integerMinNegative70Max0",
          "locationName": "correctionGateLevel",
          "documentation": "Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected. Gating only applies when not using real_time_correction."
        },
        "LoudnessLogging": {
          "shape": "AudioNormalizationLoudnessLogging",
          "locationName": "loudnessLogging"
        },
        "PeakCalculation": {
          "shape": "AudioNormalizationPeakCalculation",
          "locationName": "peakCalculation"
        },
        "TargetLkfs": {
          "shape": "__doubleMinNegative59Max0",
          "locationName": "targetLkfs",
          "documentation": "Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm. The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS."
        }
      },
      "documentation": "Advanced audio normalization settings."
    },
    "AudioSelector": {
      "type": "structure",
      "members": {
        "CustomLanguageCode": {
          "shape": "__stringMin3Max3PatternAZaZ3",
          "locationName": "customLanguageCode",
          "documentation": "Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code"
        },
        "DefaultSelection": {
          "shape": "AudioDefaultSelection",
          "locationName": "defaultSelection"
        },
        "ExternalAudioFileInput": {
          "shape": "__stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE",
          "locationName": "externalAudioFileInput",
          "documentation": "Specifies audio data from an external file source."
        },
        "LanguageCode": {
          "shape": "LanguageCode",
          "locationName": "languageCode",
          "documentation": "Selects a specific language code from within an audio source."
        },
        "Offset": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "offset",
          "documentation": "Specifies a time delta in milliseconds to offset the audio from the input video."
        },
        "Pids": {
          "shape": "__listOf__integerMin1Max2147483647",
          "locationName": "pids",
          "documentation": "Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101)."
        },
        "ProgramSelection": {
          "shape": "__integerMin0Max8",
          "locationName": "programSelection",
          "documentation": "Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If you are sending a JSON file, provide the program ID, which is part of the audio metadata. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track."
        },
        "RemixSettings": {
          "shape": "RemixSettings",
          "locationName": "remixSettings",
          "documentation": "Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other."
        },
        "SelectorType": {
          "shape": "AudioSelectorType",
          "locationName": "selectorType"
        },
        "Tracks": {
          "shape": "__listOf__integerMin1Max2147483647",
          "locationName": "tracks",
          "documentation": "Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For examle, type \"1,2,3\" to include tracks 1 through 3. Specifying directly in your JSON job file, provide the track numbers in an array. For example, \"tracks\": [1,2,3]."
        }
      },
      "documentation": "Selector for Audio"
    },
    "AudioSelectorGroup": {
      "type": "structure",
      "members": {
        "AudioSelectorNames": {
          "shape": "__listOf__stringMin1",
          "locationName": "audioSelectorNames",
          "documentation": "Name of an Audio Selector within the same input to include in the group.  Audio selector names are standardized, based on their order within the input (e.g., \"Audio Selector 1\"). The audio selector name parameter can be repeated to add any number of audio selectors to the group."
        }
      },
      "documentation": "Group of Audio Selectors"
    },
    "AudioSelectorType": {
      "type": "string",
      "documentation": "Specifies the type of the audio selector.",
      "enum": [
        "PID",
        "TRACK",
        "LANGUAGE_CODE"
      ]
    },
    "AudioTypeControl": {
      "type": "string",
      "documentation": "When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.",
      "enum": [
        "FOLLOW_INPUT",
        "USE_CONFIGURED"
      ]
    },
    "AvailBlanking": {
      "type": "structure",
      "members": {
        "AvailBlankingImage": {
          "shape": "__stringMin14PatternS3BmpBMPPngPNG",
          "locationName": "availBlankingImage",
          "documentation": "Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported."
        }
      },
      "documentation": "Settings for Avail Blanking"
    },
    "BadRequestException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 400
      },
      "documentation": "The service can't process your request because of a problem in the request. Please check your request form and syntax."
    },
    "BillingTagsSource": {
      "type": "string",
      "documentation": "Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.",
      "enum": [
        "QUEUE",
        "PRESET",
        "JOB_TEMPLATE"
      ]
    },
    "BurninDestinationSettings": {
      "type": "structure",
      "members": {
        "Alignment": {
          "shape": "BurninSubtitleAlignment",
          "locationName": "alignment"
        },
        "BackgroundColor": {
          "shape": "BurninSubtitleBackgroundColor",
          "locationName": "backgroundColor"
        },
        "BackgroundOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "backgroundOpacity",
          "documentation": "Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match."
        },
        "FontColor": {
          "shape": "BurninSubtitleFontColor",
          "locationName": "fontColor"
        },
        "FontOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "fontOpacity",
          "documentation": "Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.\nAll burn-in and DVB-Sub font settings must match."
        },
        "FontResolution": {
          "shape": "__integerMin96Max600",
          "locationName": "fontResolution",
          "documentation": "Font resolution in DPI (dots per inch); default is 96 dpi.\nAll burn-in and DVB-Sub font settings must match."
        },
        "FontSize": {
          "shape": "__integerMin0Max96",
          "locationName": "fontSize",
          "documentation": "A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match."
        },
        "OutlineColor": {
          "shape": "BurninSubtitleOutlineColor",
          "locationName": "outlineColor"
        },
        "OutlineSize": {
          "shape": "__integerMin0Max10",
          "locationName": "outlineSize",
          "documentation": "Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        },
        "ShadowColor": {
          "shape": "BurninSubtitleShadowColor",
          "locationName": "shadowColor"
        },
        "ShadowOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "shadowOpacity",
          "documentation": "Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match."
        },
        "ShadowXOffset": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "shadowXOffset",
          "documentation": "Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match."
        },
        "ShadowYOffset": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "shadowYOffset",
          "documentation": "Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match."
        },
        "TeletextSpacing": {
          "shape": "BurninSubtitleTeletextSpacing",
          "locationName": "teletextSpacing"
        },
        "XPosition": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "xPosition",
          "documentation": "Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        },
        "YPosition": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "yPosition",
          "documentation": "Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        }
      },
      "documentation": "Burn-In Destination Settings."
    },
    "BurninSubtitleAlignment": {
      "type": "string",
      "documentation": "If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      "enum": [
        "CENTERED",
        "LEFT"
      ]
    },
    "BurninSubtitleBackgroundColor": {
      "type": "string",
      "documentation": "Specifies the color of the rectangle behind the captions.\nAll burn-in and DVB-Sub font settings must match.",
      "enum": [
        "NONE",
        "BLACK",
        "WHITE"
      ]
    },
    "BurninSubtitleFontColor": {
      "type": "string",
      "documentation": "Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      "enum": [
        "WHITE",
        "BLACK",
        "YELLOW",
        "RED",
        "GREEN",
        "BLUE"
      ]
    },
    "BurninSubtitleOutlineColor": {
      "type": "string",
      "documentation": "Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      "enum": [
        "BLACK",
        "WHITE",
        "YELLOW",
        "RED",
        "GREEN",
        "BLUE"
      ]
    },
    "BurninSubtitleShadowColor": {
      "type": "string",
      "documentation": "Specifies the color of the shadow cast by the captions.\nAll burn-in and DVB-Sub font settings must match.",
      "enum": [
        "NONE",
        "BLACK",
        "WHITE"
      ]
    },
    "BurninSubtitleTeletextSpacing": {
      "type": "string",
      "documentation": "Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.",
      "enum": [
        "FIXED_GRID",
        "PROPORTIONAL"
      ]
    },
    "CancelJobRequest": {
      "type": "structure",
      "members": {
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The Job ID of the job to be cancelled.",
          "location": "uri"
        }
      },
      "required": [
        "Id"
      ]
    },
    "CancelJobResponse": {
      "type": "structure",
      "members": {
      }
    },
    "CaptionDescription": {
      "type": "structure",
      "members": {
        "CaptionSelectorName": {
          "shape": "__stringMin1",
          "locationName": "captionSelectorName",
          "documentation": "Specifies which \"Caption Selector\":#inputs-caption_selector to use from each input when generating captions. The name should be of the format \"Caption Selector <N>\", which denotes that the Nth Caption Selector will be used from each input."
        },
        "CustomLanguageCode": {
          "shape": "__stringMin3Max3PatternAZaZ3",
          "locationName": "customLanguageCode",
          "documentation": "Indicates the language of the caption output track, using the ISO 639-2 or ISO 639-3 three-letter language code"
        },
        "DestinationSettings": {
          "shape": "CaptionDestinationSettings",
          "locationName": "destinationSettings"
        },
        "LanguageCode": {
          "shape": "LanguageCode",
          "locationName": "languageCode",
          "documentation": "Indicates the language of the caption output track."
        },
        "LanguageDescription": {
          "shape": "__string",
          "locationName": "languageDescription",
          "documentation": "Human readable information to indicate captions available for players (eg. English, or Spanish). Alphanumeric characters, spaces, and underscore are legal."
        }
      },
      "documentation": "Description of Caption output"
    },
    "CaptionDescriptionPreset": {
      "type": "structure",
      "members": {
        "CustomLanguageCode": {
          "shape": "__stringMin3Max3PatternAZaZ3",
          "locationName": "customLanguageCode",
          "documentation": "Indicates the language of the caption output track, using the ISO 639-2 or ISO 639-3 three-letter language code"
        },
        "DestinationSettings": {
          "shape": "CaptionDestinationSettings",
          "locationName": "destinationSettings"
        },
        "LanguageCode": {
          "shape": "LanguageCode",
          "locationName": "languageCode",
          "documentation": "Indicates the language of the caption output track."
        },
        "LanguageDescription": {
          "shape": "__string",
          "locationName": "languageDescription",
          "documentation": "Human readable information to indicate captions available for players (eg. English, or Spanish). Alphanumeric characters, spaces, and underscore are legal."
        }
      },
      "documentation": "Caption Description for preset"
    },
    "CaptionDestinationSettings": {
      "type": "structure",
      "members": {
        "BurninDestinationSettings": {
          "shape": "BurninDestinationSettings",
          "locationName": "burninDestinationSettings"
        },
        "DestinationType": {
          "shape": "CaptionDestinationType",
          "locationName": "destinationType"
        },
        "DvbSubDestinationSettings": {
          "shape": "DvbSubDestinationSettings",
          "locationName": "dvbSubDestinationSettings"
        },
        "SccDestinationSettings": {
          "shape": "SccDestinationSettings",
          "locationName": "sccDestinationSettings"
        },
        "TeletextDestinationSettings": {
          "shape": "TeletextDestinationSettings",
          "locationName": "teletextDestinationSettings"
        },
        "TtmlDestinationSettings": {
          "shape": "TtmlDestinationSettings",
          "locationName": "ttmlDestinationSettings"
        }
      },
      "documentation": "Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext."
    },
    "CaptionDestinationType": {
      "type": "string",
      "documentation": "Type of Caption output, including Burn-In, Embedded, SCC, SRT, TTML, WebVTT, DVB-Sub, Teletext.",
      "enum": [
        "BURN_IN",
        "DVB_SUB",
        "EMBEDDED",
        "SCC",
        "SRT",
        "TELETEXT",
        "TTML",
        "WEBVTT"
      ]
    },
    "CaptionSelector": {
      "type": "structure",
      "members": {
        "CustomLanguageCode": {
          "shape": "__stringMin3Max3PatternAZaZ3",
          "locationName": "customLanguageCode",
          "documentation": "The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions."
        },
        "LanguageCode": {
          "shape": "LanguageCode",
          "locationName": "languageCode",
          "documentation": "The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions."
        },
        "SourceSettings": {
          "shape": "CaptionSourceSettings",
          "locationName": "sourceSettings"
        }
      },
      "documentation": "Set up captions in your outputs by first selecting them from your input here."
    },
    "CaptionSourceSettings": {
      "type": "structure",
      "members": {
        "AncillarySourceSettings": {
          "shape": "AncillarySourceSettings",
          "locationName": "ancillarySourceSettings"
        },
        "DvbSubSourceSettings": {
          "shape": "DvbSubSourceSettings",
          "locationName": "dvbSubSourceSettings"
        },
        "EmbeddedSourceSettings": {
          "shape": "EmbeddedSourceSettings",
          "locationName": "embeddedSourceSettings"
        },
        "FileSourceSettings": {
          "shape": "FileSourceSettings",
          "locationName": "fileSourceSettings"
        },
        "SourceType": {
          "shape": "CaptionSourceType",
          "locationName": "sourceType"
        },
        "TeletextSourceSettings": {
          "shape": "TeletextSourceSettings",
          "locationName": "teletextSourceSettings"
        }
      },
      "documentation": "Source settings (SourceSettings) contains the group of settings for captions in the input."
    },
    "CaptionSourceType": {
      "type": "string",
      "documentation": "Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format.",
      "enum": [
        "ANCILLARY",
        "DVB_SUB",
        "EMBEDDED",
        "SCC",
        "TTML",
        "STL",
        "SRT",
        "TELETEXT",
        "NULL_SOURCE"
      ]
    },
    "ChannelMapping": {
      "type": "structure",
      "members": {
        "OutputChannels": {
          "shape": "__listOfOutputChannelMapping",
          "locationName": "outputChannels",
          "documentation": "List of output channels"
        }
      },
      "documentation": "Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification)."
    },
    "CmafClientCache": {
      "type": "string",
      "documentation": "When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "CmafCodecSpecification": {
      "type": "string",
      "documentation": "Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.",
      "enum": [
        "RFC_6381",
        "RFC_4281"
      ]
    },
    "CmafEncryptionSettings": {
      "type": "structure",
      "members": {
        "ConstantInitializationVector": {
          "shape": "__stringMin32Max32Pattern09aFAF32",
          "locationName": "constantInitializationVector",
          "documentation": "This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default."
        },
        "EncryptionMethod": {
          "shape": "CmafEncryptionType",
          "locationName": "encryptionMethod"
        },
        "InitializationVectorInManifest": {
          "shape": "CmafInitializationVectorInManifest",
          "locationName": "initializationVectorInManifest"
        },
        "StaticKeyProvider": {
          "shape": "StaticKeyProvider",
          "locationName": "staticKeyProvider"
        },
        "Type": {
          "shape": "CmafKeyProviderType",
          "locationName": "type"
        }
      },
      "documentation": "Settings for CMAF encryption"
    },
    "CmafEncryptionType": {
      "type": "string",
      "documentation": "Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.",
      "enum": [
        "SAMPLE_AES"
      ]
    },
    "CmafGroupSettings": {
      "type": "structure",
      "members": {
        "BaseUrl": {
          "shape": "__string",
          "locationName": "baseUrl",
          "documentation": "A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file."
        },
        "ClientCache": {
          "shape": "CmafClientCache",
          "locationName": "clientCache"
        },
        "CodecSpecification": {
          "shape": "CmafCodecSpecification",
          "locationName": "codecSpecification"
        },
        "Destination": {
          "shape": "__stringPatternS3",
          "locationName": "destination",
          "documentation": "Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file."
        },
        "Encryption": {
          "shape": "CmafEncryptionSettings",
          "locationName": "encryption",
          "documentation": "DRM settings."
        },
        "FragmentLength": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "fragmentLength",
          "documentation": "Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types."
        },
        "ManifestCompression": {
          "shape": "CmafManifestCompression",
          "locationName": "manifestCompression"
        },
        "ManifestDurationFormat": {
          "shape": "CmafManifestDurationFormat",
          "locationName": "manifestDurationFormat"
        },
        "MinBufferTime": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "minBufferTime",
          "documentation": "Minimum time of initially buffered media that is needed to ensure smooth playout."
        },
        "MinFinalSegmentLength": {
          "shape": "__doubleMin0Max2147483647",
          "locationName": "minFinalSegmentLength",
          "documentation": "Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds."
        },
        "SegmentControl": {
          "shape": "CmafSegmentControl",
          "locationName": "segmentControl"
        },
        "SegmentLength": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "segmentLength",
          "documentation": "Use this setting to specify the length, in seconds, of each individual CMAF segment. This value applies to the whole package; that is, to every output in the output group. Note that segments end on the first keyframe after this number of seconds, so the actual segment length might be slightly longer. If you set Segment control (CmafSegmentControl) to single file, the service puts the content of each output in a single file that has metadata that marks these segments. If you set it to segmented files, the service creates multiple files for each output, each with the content of one segment."
        },
        "StreamInfResolution": {
          "shape": "CmafStreamInfResolution",
          "locationName": "streamInfResolution"
        },
        "WriteDashManifest": {
          "shape": "CmafWriteDASHManifest",
          "locationName": "writeDashManifest"
        },
        "WriteHlsManifest": {
          "shape": "CmafWriteHLSManifest",
          "locationName": "writeHlsManifest"
        }
      },
      "documentation": "Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output."
    },
    "CmafInitializationVectorInManifest": {
      "type": "string",
      "documentation": "The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "CmafKeyProviderType": {
      "type": "string",
      "documentation": "Indicates which type of key provider is used for encryption.",
      "enum": [
        "STATIC_KEY"
      ]
    },
    "CmafManifestCompression": {
      "type": "string",
      "documentation": "When set to GZIP, compresses HLS playlist.",
      "enum": [
        "GZIP",
        "NONE"
      ]
    },
    "CmafManifestDurationFormat": {
      "type": "string",
      "documentation": "Indicates whether the output manifest should use floating point values for segment duration.",
      "enum": [
        "FLOATING_POINT",
        "INTEGER"
      ]
    },
    "CmafSegmentControl": {
      "type": "string",
      "documentation": "When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.",
      "enum": [
        "SINGLE_FILE",
        "SEGMENTED_FILES"
      ]
    },
    "CmafStreamInfResolution": {
      "type": "string",
      "documentation": "Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "CmafWriteDASHManifest": {
      "type": "string",
      "documentation": "When set to ENABLED, a DASH MPD manifest will be generated for this output.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "CmafWriteHLSManifest": {
      "type": "string",
      "documentation": "When set to ENABLED, an Apple HLS manifest will be generated for this output.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "ColorCorrector": {
      "type": "structure",
      "members": {
        "Brightness": {
          "shape": "__integerMin1Max100",
          "locationName": "brightness",
          "documentation": "Brightness level."
        },
        "ColorSpaceConversion": {
          "shape": "ColorSpaceConversion",
          "locationName": "colorSpaceConversion"
        },
        "Contrast": {
          "shape": "__integerMin1Max100",
          "locationName": "contrast",
          "documentation": "Contrast level."
        },
        "Hdr10Metadata": {
          "shape": "Hdr10Metadata",
          "locationName": "hdr10Metadata"
        },
        "Hue": {
          "shape": "__integerMinNegative180Max180",
          "locationName": "hue",
          "documentation": "Hue in degrees."
        },
        "Saturation": {
          "shape": "__integerMin1Max100",
          "locationName": "saturation",
          "documentation": "Saturation level."
        }
      },
      "documentation": "Settings for color correction."
    },
    "ColorMetadata": {
      "type": "string",
      "documentation": "Enable Insert color metadata (ColorMetadata) to include color metadata in this output. This setting is enabled by default.",
      "enum": [
        "IGNORE",
        "INSERT"
      ]
    },
    "ColorSpace": {
      "type": "string",
      "documentation": "If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value FOLLOW. The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or if your input video is missing color space metadata that should be there, specify the accurate color space here. If you choose HDR10, you can also correct inaccurate color space coefficients, using the HDR master display information controls. You must also set Color space usage (ColorSpaceUsage) to FORCE for the service to use these values.",
      "enum": [
        "FOLLOW",
        "REC_601",
        "REC_709",
        "HDR10",
        "HLG_2020"
      ]
    },
    "ColorSpaceConversion": {
      "type": "string",
      "documentation": "Determines if colorspace conversion will be performed. If set to _None_, no conversion will be performed. If _Force 601_ or _Force 709_ are selected, conversion will be performed for inputs with differing colorspaces. An input's colorspace can be specified explicitly in the \"Video Selector\":#inputs-video_selector if necessary.",
      "enum": [
        "NONE",
        "FORCE_601",
        "FORCE_709",
        "FORCE_HDR10",
        "FORCE_HLG_2020"
      ]
    },
    "ColorSpaceUsage": {
      "type": "string",
      "documentation": "There are two sources for color metadata, the input file and the job configuration (in the Color space and HDR master display informaiton settings). The Color space usage setting controls which takes precedence. FORCE: The system will use color metadata supplied by user, if any. If the user does not supply color metadata, the system will use data from the source. FALLBACK: The system will use color metadata from the source. If source has no color metadata, the system will use user-supplied color metadata values if available.",
      "enum": [
        "FORCE",
        "FALLBACK"
      ]
    },
    "Commitment": {
      "type": "string",
      "documentation": "The length of time that you commit to when you set up a pricing plan contract for a reserved queue.",
      "enum": [
        "ONE_YEAR"
      ]
    },
    "ConflictException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 409
      },
      "documentation": "The service couldn't complete your request because there is a conflict with the current state of the resource."
    },
    "ContainerSettings": {
      "type": "structure",
      "members": {
        "Container": {
          "shape": "ContainerType",
          "locationName": "container"
        },
        "F4vSettings": {
          "shape": "F4vSettings",
          "locationName": "f4vSettings"
        },
        "M2tsSettings": {
          "shape": "M2tsSettings",
          "locationName": "m2tsSettings"
        },
        "M3u8Settings": {
          "shape": "M3u8Settings",
          "locationName": "m3u8Settings"
        },
        "MovSettings": {
          "shape": "MovSettings",
          "locationName": "movSettings"
        },
        "Mp4Settings": {
          "shape": "Mp4Settings",
          "locationName": "mp4Settings"
        }
      },
      "documentation": "Container specific settings."
    },
    "ContainerType": {
      "type": "string",
      "documentation": "Container for this output. Some containers require a container settings object. If not specified, the default object will be created.",
      "enum": [
        "F4V",
        "ISMV",
        "M2TS",
        "M3U8",
        "CMFC",
        "MOV",
        "MP4",
        "MPD",
        "MXF",
        "RAW"
      ]
    },
    "CreateJobRequest": {
      "type": "structure",
      "members": {
        "BillingTagsSource": {
          "shape": "BillingTagsSource",
          "locationName": "billingTagsSource"
        },
        "ClientRequestToken": {
          "shape": "__string",
          "locationName": "clientRequestToken",
          "documentation": "Idempotency token for CreateJob operation.",
          "idempotencyToken": true
        },
        "JobTemplate": {
          "shape": "__string",
          "locationName": "jobTemplate",
          "documentation": "When you create a job, you can either specify a job template or specify the transcoding settings individually"
        },
        "Queue": {
          "shape": "__string",
          "locationName": "queue",
          "documentation": "Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html."
        },
        "Role": {
          "shape": "__string",
          "locationName": "role",
          "documentation": "Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html."
        },
        "Settings": {
          "shape": "JobSettings",
          "locationName": "settings"
        },
        "UserMetadata": {
          "shape": "__mapOf__string",
          "locationName": "userMetadata",
          "documentation": "User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs."
        }
      },
      "required": [
        "Role",
        "Settings"
      ]
    },
    "CreateJobResponse": {
      "type": "structure",
      "members": {
        "Job": {
          "shape": "Job",
          "locationName": "job"
        }
      }
    },
    "CreateJobTemplateRequest": {
      "type": "structure",
      "members": {
        "Category": {
          "shape": "__string",
          "locationName": "category",
          "documentation": "Optional. A category for the job template you are creating"
        },
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "Optional. A description of the job template you are creating."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the job template you are creating."
        },
        "Queue": {
          "shape": "__string",
          "locationName": "queue",
          "documentation": "Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue."
        },
        "Settings": {
          "shape": "JobTemplateSettings",
          "locationName": "settings"
        },
        "Tags": {
          "shape": "__mapOf__string",
          "locationName": "tags",
          "documentation": "The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key."
        }
      },
      "required": [
        "Settings",
        "Name"
      ]
    },
    "CreateJobTemplateResponse": {
      "type": "structure",
      "members": {
        "JobTemplate": {
          "shape": "JobTemplate",
          "locationName": "jobTemplate"
        }
      }
    },
    "CreatePresetRequest": {
      "type": "structure",
      "members": {
        "Category": {
          "shape": "__string",
          "locationName": "category",
          "documentation": "Optional. A category for the preset you are creating."
        },
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "Optional. A description of the preset you are creating."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the preset you are creating."
        },
        "Settings": {
          "shape": "PresetSettings",
          "locationName": "settings"
        },
        "Tags": {
          "shape": "__mapOf__string",
          "locationName": "tags",
          "documentation": "The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key."
        }
      },
      "required": [
        "Settings",
        "Name"
      ]
    },
    "CreatePresetResponse": {
      "type": "structure",
      "members": {
        "Preset": {
          "shape": "Preset",
          "locationName": "preset"
        }
      }
    },
    "CreateQueueRequest": {
      "type": "structure",
      "members": {
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "Optional. A description of the queue that you are creating."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the queue that you are creating."
        },
        "PricingPlan": {
          "shape": "PricingPlan",
          "locationName": "pricingPlan",
          "documentation": "Optional; default is on-demand. Specifies whether the pricing plan for the queue is on-demand or reserved. The pricing plan for the queue determines whether you pay on-demand or reserved pricing for the transcoding jobs you run through the queue. For reserved queue pricing, you must set up a contract. You can create a reserved queue contract through the AWS Elemental MediaConvert console."
        },
        "ReservationPlanSettings": {
          "shape": "ReservationPlanSettings",
          "locationName": "reservationPlanSettings",
          "documentation": "Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues."
        },
        "Tags": {
          "shape": "__mapOf__string",
          "locationName": "tags",
          "documentation": "The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key."
        }
      },
      "required": [
        "Name"
      ]
    },
    "CreateQueueResponse": {
      "type": "structure",
      "members": {
        "Queue": {
          "shape": "Queue",
          "locationName": "queue"
        }
      }
    },
    "DashIsoEncryptionSettings": {
      "type": "structure",
      "members": {
        "SpekeKeyProvider": {
          "shape": "SpekeKeyProvider",
          "locationName": "spekeKeyProvider"
        }
      },
      "documentation": "Specifies DRM settings for DASH outputs."
    },
    "DashIsoGroupSettings": {
      "type": "structure",
      "members": {
        "BaseUrl": {
          "shape": "__string",
          "locationName": "baseUrl",
          "documentation": "A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file."
        },
        "Destination": {
          "shape": "__stringPatternS3",
          "locationName": "destination",
          "documentation": "Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file."
        },
        "Encryption": {
          "shape": "DashIsoEncryptionSettings",
          "locationName": "encryption",
          "documentation": "DRM settings."
        },
        "FragmentLength": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "fragmentLength",
          "documentation": "Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types."
        },
        "HbbtvCompliance": {
          "shape": "DashIsoHbbtvCompliance",
          "locationName": "hbbtvCompliance"
        },
        "MinBufferTime": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "minBufferTime",
          "documentation": "Minimum time of initially buffered media that is needed to ensure smooth playout."
        },
        "SegmentControl": {
          "shape": "DashIsoSegmentControl",
          "locationName": "segmentControl"
        },
        "SegmentLength": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "segmentLength",
          "documentation": "Length of mpd segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer. When Emit Single File is checked, the segmentation is internal to a single output file and it does not cause the creation of many output files as in other output types."
        },
        "WriteSegmentTimelineInRepresentation": {
          "shape": "DashIsoWriteSegmentTimelineInRepresentation",
          "locationName": "writeSegmentTimelineInRepresentation",
          "documentation": "When ENABLED, segment durations are indicated in the manifest using SegmentTimeline and SegmentTimeline will be promoted down into Representation from AdaptationSet."
        }
      },
      "documentation": "Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS."
    },
    "DashIsoHbbtvCompliance": {
      "type": "string",
      "documentation": "Supports HbbTV specification as indicated",
      "enum": [
        "HBBTV_1_5",
        "NONE"
      ]
    },
    "DashIsoSegmentControl": {
      "type": "string",
      "documentation": "When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.",
      "enum": [
        "SINGLE_FILE",
        "SEGMENTED_FILES"
      ]
    },
    "DashIsoWriteSegmentTimelineInRepresentation": {
      "type": "string",
      "documentation": "When ENABLED, segment durations are indicated in the manifest using SegmentTimeline and SegmentTimeline will be promoted down into Representation from AdaptationSet.",
      "enum": [
        "ENABLED",
        "DISABLED"
      ]
    },
    "DeinterlaceAlgorithm": {
      "type": "string",
      "documentation": "Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.",
      "enum": [
        "INTERPOLATE",
        "INTERPOLATE_TICKER",
        "BLEND",
        "BLEND_TICKER"
      ]
    },
    "Deinterlacer": {
      "type": "structure",
      "members": {
        "Algorithm": {
          "shape": "DeinterlaceAlgorithm",
          "locationName": "algorithm"
        },
        "Control": {
          "shape": "DeinterlacerControl",
          "locationName": "control"
        },
        "Mode": {
          "shape": "DeinterlacerMode",
          "locationName": "mode"
        }
      },
      "documentation": "Settings for deinterlacer"
    },
    "DeinterlacerControl": {
      "type": "string",
      "documentation": "- When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video.",
      "enum": [
        "FORCE_ALL_FRAMES",
        "NORMAL"
      ]
    },
    "DeinterlacerMode": {
      "type": "string",
      "documentation": "Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.",
      "enum": [
        "DEINTERLACE",
        "INVERSE_TELECINE",
        "ADAPTIVE"
      ]
    },
    "DeleteJobTemplateRequest": {
      "type": "structure",
      "members": {
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the job template to be deleted.",
          "location": "uri"
        }
      },
      "required": [
        "Name"
      ]
    },
    "DeleteJobTemplateResponse": {
      "type": "structure",
      "members": {
      }
    },
    "DeletePresetRequest": {
      "type": "structure",
      "members": {
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the preset to be deleted.",
          "location": "uri"
        }
      },
      "required": [
        "Name"
      ]
    },
    "DeletePresetResponse": {
      "type": "structure",
      "members": {
      }
    },
    "DeleteQueueRequest": {
      "type": "structure",
      "members": {
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the queue to be deleted.",
          "location": "uri"
        }
      },
      "required": [
        "Name"
      ]
    },
    "DeleteQueueResponse": {
      "type": "structure",
      "members": {
      }
    },
    "DescribeEndpointsMode": {
      "type": "string",
      "documentation": "Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.",
      "enum": [
        "DEFAULT",
        "GET_ONLY"
      ]
    },
    "DescribeEndpointsRequest": {
      "type": "structure",
      "members": {
        "MaxResults": {
          "shape": "__integer",
          "locationName": "maxResults",
          "documentation": "Optional. Max number of endpoints, up to twenty, that will be returned at one time."
        },
        "Mode": {
          "shape": "DescribeEndpointsMode",
          "locationName": "mode"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string, provided with the response to a previous request, to request the next batch of endpoints."
        }
      },
      "documentation": "DescribeEndpointsRequest"
    },
    "DescribeEndpointsResponse": {
      "type": "structure",
      "members": {
        "Endpoints": {
          "shape": "__listOfEndpoint",
          "locationName": "endpoints",
          "documentation": "List of endpoints"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string to request the next batch of endpoints."
        }
      }
    },
    "DropFrameTimecode": {
      "type": "string",
      "documentation": "Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "DvbNitSettings": {
      "type": "structure",
      "members": {
        "NetworkId": {
          "shape": "__integerMin0Max65535",
          "locationName": "networkId",
          "documentation": "The numeric value placed in the Network Information Table (NIT)."
        },
        "NetworkName": {
          "shape": "__stringMin1Max256",
          "locationName": "networkName",
          "documentation": "The network name text placed in the network_name_descriptor inside the Network Information Table. Maximum length is 256 characters."
        },
        "NitInterval": {
          "shape": "__integerMin25Max10000",
          "locationName": "nitInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        }
      },
      "documentation": "Inserts DVB Network Information Table (NIT) at the specified table repetition interval."
    },
    "DvbSdtSettings": {
      "type": "structure",
      "members": {
        "OutputSdt": {
          "shape": "OutputSdt",
          "locationName": "outputSdt"
        },
        "SdtInterval": {
          "shape": "__integerMin25Max2000",
          "locationName": "sdtInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        },
        "ServiceName": {
          "shape": "__stringMin1Max256",
          "locationName": "serviceName",
          "documentation": "The service name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters."
        },
        "ServiceProviderName": {
          "shape": "__stringMin1Max256",
          "locationName": "serviceProviderName",
          "documentation": "The service provider name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters."
        }
      },
      "documentation": "Inserts DVB Service Description Table (NIT) at the specified table repetition interval."
    },
    "DvbSubDestinationSettings": {
      "type": "structure",
      "members": {
        "Alignment": {
          "shape": "DvbSubtitleAlignment",
          "locationName": "alignment"
        },
        "BackgroundColor": {
          "shape": "DvbSubtitleBackgroundColor",
          "locationName": "backgroundColor"
        },
        "BackgroundOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "backgroundOpacity",
          "documentation": "Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match."
        },
        "FontColor": {
          "shape": "DvbSubtitleFontColor",
          "locationName": "fontColor"
        },
        "FontOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "fontOpacity",
          "documentation": "Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.\nAll burn-in and DVB-Sub font settings must match."
        },
        "FontResolution": {
          "shape": "__integerMin96Max600",
          "locationName": "fontResolution",
          "documentation": "Font resolution in DPI (dots per inch); default is 96 dpi.\nAll burn-in and DVB-Sub font settings must match."
        },
        "FontSize": {
          "shape": "__integerMin0Max96",
          "locationName": "fontSize",
          "documentation": "A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match."
        },
        "OutlineColor": {
          "shape": "DvbSubtitleOutlineColor",
          "locationName": "outlineColor"
        },
        "OutlineSize": {
          "shape": "__integerMin0Max10",
          "locationName": "outlineSize",
          "documentation": "Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        },
        "ShadowColor": {
          "shape": "DvbSubtitleShadowColor",
          "locationName": "shadowColor"
        },
        "ShadowOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "shadowOpacity",
          "documentation": "Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match."
        },
        "ShadowXOffset": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "shadowXOffset",
          "documentation": "Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match."
        },
        "ShadowYOffset": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "shadowYOffset",
          "documentation": "Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match."
        },
        "TeletextSpacing": {
          "shape": "DvbSubtitleTeletextSpacing",
          "locationName": "teletextSpacing"
        },
        "XPosition": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "xPosition",
          "documentation": "Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        },
        "YPosition": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "yPosition",
          "documentation": "Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        }
      },
      "documentation": "DVB-Sub Destination Settings"
    },
    "DvbSubSourceSettings": {
      "type": "structure",
      "members": {
        "Pid": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "pid",
          "documentation": "When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors."
        }
      },
      "documentation": "DVB Sub Source Settings"
    },
    "DvbSubtitleAlignment": {
      "type": "string",
      "documentation": "If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      "enum": [
        "CENTERED",
        "LEFT"
      ]
    },
    "DvbSubtitleBackgroundColor": {
      "type": "string",
      "documentation": "Specifies the color of the rectangle behind the captions.\nAll burn-in and DVB-Sub font settings must match.",
      "enum": [
        "NONE",
        "BLACK",
        "WHITE"
      ]
    },
    "DvbSubtitleFontColor": {
      "type": "string",
      "documentation": "Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      "enum": [
        "WHITE",
        "BLACK",
        "YELLOW",
        "RED",
        "GREEN",
        "BLUE"
      ]
    },
    "DvbSubtitleOutlineColor": {
      "type": "string",
      "documentation": "Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      "enum": [
        "BLACK",
        "WHITE",
        "YELLOW",
        "RED",
        "GREEN",
        "BLUE"
      ]
    },
    "DvbSubtitleShadowColor": {
      "type": "string",
      "documentation": "Specifies the color of the shadow cast by the captions.\nAll burn-in and DVB-Sub font settings must match.",
      "enum": [
        "NONE",
        "BLACK",
        "WHITE"
      ]
    },
    "DvbSubtitleTeletextSpacing": {
      "type": "string",
      "documentation": "Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.",
      "enum": [
        "FIXED_GRID",
        "PROPORTIONAL"
      ]
    },
    "DvbTdtSettings": {
      "type": "structure",
      "members": {
        "TdtInterval": {
          "shape": "__integerMin1000Max30000",
          "locationName": "tdtInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        }
      },
      "documentation": "Inserts DVB Time and Date Table (TDT) at the specified table repetition interval."
    },
    "Eac3AttenuationControl": {
      "type": "string",
      "documentation": "If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.",
      "enum": [
        "ATTENUATE_3_DB",
        "NONE"
      ]
    },
    "Eac3BitstreamMode": {
      "type": "string",
      "documentation": "Specifies the \"Bitstream Mode\" (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.",
      "enum": [
        "COMPLETE_MAIN",
        "COMMENTARY",
        "EMERGENCY",
        "HEARING_IMPAIRED",
        "VISUALLY_IMPAIRED"
      ]
    },
    "Eac3CodingMode": {
      "type": "string",
      "documentation": "Dolby Digital Plus coding mode. Determines number of channels.",
      "enum": [
        "CODING_MODE_1_0",
        "CODING_MODE_2_0",
        "CODING_MODE_3_2"
      ]
    },
    "Eac3DcFilter": {
      "type": "string",
      "documentation": "Activates a DC highpass filter for all input channels.",
      "enum": [
        "ENABLED",
        "DISABLED"
      ]
    },
    "Eac3DynamicRangeCompressionLine": {
      "type": "string",
      "documentation": "Enables Dynamic Range Compression that restricts the absolute peak level for a signal.",
      "enum": [
        "NONE",
        "FILM_STANDARD",
        "FILM_LIGHT",
        "MUSIC_STANDARD",
        "MUSIC_LIGHT",
        "SPEECH"
      ]
    },
    "Eac3DynamicRangeCompressionRf": {
      "type": "string",
      "documentation": "Enables Heavy Dynamic Range Compression, ensures that the instantaneous signal peaks do not exceed specified levels.",
      "enum": [
        "NONE",
        "FILM_STANDARD",
        "FILM_LIGHT",
        "MUSIC_STANDARD",
        "MUSIC_LIGHT",
        "SPEECH"
      ]
    },
    "Eac3LfeControl": {
      "type": "string",
      "documentation": "When encoding 3/2 audio, controls whether the LFE channel is enabled",
      "enum": [
        "LFE",
        "NO_LFE"
      ]
    },
    "Eac3LfeFilter": {
      "type": "string",
      "documentation": "Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.",
      "enum": [
        "ENABLED",
        "DISABLED"
      ]
    },
    "Eac3MetadataControl": {
      "type": "string",
      "documentation": "When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.",
      "enum": [
        "FOLLOW_INPUT",
        "USE_CONFIGURED"
      ]
    },
    "Eac3PassthroughControl": {
      "type": "string",
      "documentation": "When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.",
      "enum": [
        "WHEN_POSSIBLE",
        "NO_PASSTHROUGH"
      ]
    },
    "Eac3PhaseControl": {
      "type": "string",
      "documentation": "Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.",
      "enum": [
        "SHIFT_90_DEGREES",
        "NO_SHIFT"
      ]
    },
    "Eac3Settings": {
      "type": "structure",
      "members": {
        "AttenuationControl": {
          "shape": "Eac3AttenuationControl",
          "locationName": "attenuationControl"
        },
        "Bitrate": {
          "shape": "__integerMin64000Max640000",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Valid bitrates depend on the coding mode."
        },
        "BitstreamMode": {
          "shape": "Eac3BitstreamMode",
          "locationName": "bitstreamMode"
        },
        "CodingMode": {
          "shape": "Eac3CodingMode",
          "locationName": "codingMode"
        },
        "DcFilter": {
          "shape": "Eac3DcFilter",
          "locationName": "dcFilter"
        },
        "Dialnorm": {
          "shape": "__integerMin1Max31",
          "locationName": "dialnorm",
          "documentation": "Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through."
        },
        "DynamicRangeCompressionLine": {
          "shape": "Eac3DynamicRangeCompressionLine",
          "locationName": "dynamicRangeCompressionLine"
        },
        "DynamicRangeCompressionRf": {
          "shape": "Eac3DynamicRangeCompressionRf",
          "locationName": "dynamicRangeCompressionRf"
        },
        "LfeControl": {
          "shape": "Eac3LfeControl",
          "locationName": "lfeControl"
        },
        "LfeFilter": {
          "shape": "Eac3LfeFilter",
          "locationName": "lfeFilter"
        },
        "LoRoCenterMixLevel": {
          "shape": "__doubleMinNegative60Max3",
          "locationName": "loRoCenterMixLevel",
          "documentation": "Left only/Right only center mix level. Only used for 3/2 coding mode.\nValid values: 3.0, 1.5, 0.0, -1.5 -3.0 -4.5 -6.0 -60"
        },
        "LoRoSurroundMixLevel": {
          "shape": "__doubleMinNegative60MaxNegative1",
          "locationName": "loRoSurroundMixLevel",
          "documentation": "Left only/Right only surround mix level. Only used for 3/2 coding mode.\nValid values: -1.5 -3.0 -4.5 -6.0 -60"
        },
        "LtRtCenterMixLevel": {
          "shape": "__doubleMinNegative60Max3",
          "locationName": "ltRtCenterMixLevel",
          "documentation": "Left total/Right total center mix level. Only used for 3/2 coding mode.\nValid values: 3.0, 1.5, 0.0, -1.5 -3.0 -4.5 -6.0 -60"
        },
        "LtRtSurroundMixLevel": {
          "shape": "__doubleMinNegative60MaxNegative1",
          "locationName": "ltRtSurroundMixLevel",
          "documentation": "Left total/Right total surround mix level. Only used for 3/2 coding mode.\nValid values: -1.5 -3.0 -4.5 -6.0 -60"
        },
        "MetadataControl": {
          "shape": "Eac3MetadataControl",
          "locationName": "metadataControl"
        },
        "PassthroughControl": {
          "shape": "Eac3PassthroughControl",
          "locationName": "passthroughControl"
        },
        "PhaseControl": {
          "shape": "Eac3PhaseControl",
          "locationName": "phaseControl"
        },
        "SampleRate": {
          "shape": "__integerMin48000Max48000",
          "locationName": "sampleRate",
          "documentation": "Sample rate in hz. Sample rate is always 48000."
        },
        "StereoDownmix": {
          "shape": "Eac3StereoDownmix",
          "locationName": "stereoDownmix"
        },
        "SurroundExMode": {
          "shape": "Eac3SurroundExMode",
          "locationName": "surroundExMode"
        },
        "SurroundMode": {
          "shape": "Eac3SurroundMode",
          "locationName": "surroundMode"
        }
      },
      "documentation": "Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3."
    },
    "Eac3StereoDownmix": {
      "type": "string",
      "documentation": "Stereo downmix preference. Only used for 3/2 coding mode.",
      "enum": [
        "NOT_INDICATED",
        "LO_RO",
        "LT_RT",
        "DPL2"
      ]
    },
    "Eac3SurroundExMode": {
      "type": "string",
      "documentation": "When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.",
      "enum": [
        "NOT_INDICATED",
        "ENABLED",
        "DISABLED"
      ]
    },
    "Eac3SurroundMode": {
      "type": "string",
      "documentation": "When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.",
      "enum": [
        "NOT_INDICATED",
        "ENABLED",
        "DISABLED"
      ]
    },
    "EmbeddedConvert608To708": {
      "type": "string",
      "documentation": "When set to UPCONVERT, 608 data is both passed through via the \"608 compatibility bytes\" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.",
      "enum": [
        "UPCONVERT",
        "DISABLED"
      ]
    },
    "EmbeddedSourceSettings": {
      "type": "structure",
      "members": {
        "Convert608To708": {
          "shape": "EmbeddedConvert608To708",
          "locationName": "convert608To708"
        },
        "Source608ChannelNumber": {
          "shape": "__integerMin1Max4",
          "locationName": "source608ChannelNumber",
          "documentation": "Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough."
        },
        "Source608TrackNumber": {
          "shape": "__integerMin1Max1",
          "locationName": "source608TrackNumber",
          "documentation": "Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'."
        }
      },
      "documentation": "Settings for embedded captions Source"
    },
    "Endpoint": {
      "type": "structure",
      "members": {
        "Url": {
          "shape": "__string",
          "locationName": "url",
          "documentation": "URL of endpoint"
        }
      },
      "documentation": "Describes an account-specific API endpoint."
    },
    "ExceptionBody": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      }
    },
    "F4vMoovPlacement": {
      "type": "string",
      "documentation": "If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.",
      "enum": [
        "PROGRESSIVE_DOWNLOAD",
        "NORMAL"
      ]
    },
    "F4vSettings": {
      "type": "structure",
      "members": {
        "MoovPlacement": {
          "shape": "F4vMoovPlacement",
          "locationName": "moovPlacement"
        }
      },
      "documentation": "Settings for F4v container"
    },
    "FileGroupSettings": {
      "type": "structure",
      "members": {
        "Destination": {
          "shape": "__stringPatternS3",
          "locationName": "destination",
          "documentation": "Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file."
        }
      },
      "documentation": "Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS."
    },
    "FileSourceConvert608To708": {
      "type": "string",
      "documentation": "If set to UPCONVERT, 608 caption data is both passed through via the \"608 compatibility bytes\" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.",
      "enum": [
        "UPCONVERT",
        "DISABLED"
      ]
    },
    "FileSourceSettings": {
      "type": "structure",
      "members": {
        "Convert608To708": {
          "shape": "FileSourceConvert608To708",
          "locationName": "convert608To708"
        },
        "SourceFile": {
          "shape": "__stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTSmiSMI",
          "locationName": "sourceFile",
          "documentation": "External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', and 'smi'."
        },
        "TimeDelta": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "timeDelta",
          "documentation": "Specifies a time delta in seconds to offset the captions from the source file."
        }
      },
      "documentation": "Settings for File-based Captions in Source"
    },
    "ForbiddenException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 403
      },
      "documentation": "You don't have permissions for this action with the credentials you sent."
    },
    "FrameCaptureSettings": {
      "type": "structure",
      "members": {
        "FramerateDenominator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "framerateDenominator",
          "documentation": "Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.n.jpg where n is the 0-based sequence number of each Capture."
        },
        "FramerateNumerator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "framerateNumerator",
          "documentation": "Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.NNNNNNN.jpg where N is the 0-based frame sequence number zero padded to 7 decimal places."
        },
        "MaxCaptures": {
          "shape": "__integerMin1Max10000000",
          "locationName": "maxCaptures",
          "documentation": "Maximum number of captures (encoded jpg output files)."
        },
        "Quality": {
          "shape": "__integerMin1Max100",
          "locationName": "quality",
          "documentation": "JPEG Quality - a higher value equals higher quality."
        }
      },
      "documentation": "Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE."
    },
    "GetJobRequest": {
      "type": "structure",
      "members": {
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "the job ID of the job.",
          "location": "uri"
        }
      },
      "required": [
        "Id"
      ]
    },
    "GetJobResponse": {
      "type": "structure",
      "members": {
        "Job": {
          "shape": "Job",
          "locationName": "job"
        }
      }
    },
    "GetJobTemplateRequest": {
      "type": "structure",
      "members": {
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the job template.",
          "location": "uri"
        }
      },
      "required": [
        "Name"
      ]
    },
    "GetJobTemplateResponse": {
      "type": "structure",
      "members": {
        "JobTemplate": {
          "shape": "JobTemplate",
          "locationName": "jobTemplate"
        }
      }
    },
    "GetPresetRequest": {
      "type": "structure",
      "members": {
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the preset.",
          "location": "uri"
        }
      },
      "required": [
        "Name"
      ]
    },
    "GetPresetResponse": {
      "type": "structure",
      "members": {
        "Preset": {
          "shape": "Preset",
          "locationName": "preset"
        }
      }
    },
    "GetQueueRequest": {
      "type": "structure",
      "members": {
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the queue that you want information about.",
          "location": "uri"
        }
      },
      "required": [
        "Name"
      ]
    },
    "GetQueueResponse": {
      "type": "structure",
      "members": {
        "Queue": {
          "shape": "Queue",
          "locationName": "queue"
        }
      }
    },
    "H264AdaptiveQuantization": {
      "type": "string",
      "documentation": "Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.",
      "enum": [
        "OFF",
        "LOW",
        "MEDIUM",
        "HIGH",
        "HIGHER",
        "MAX"
      ]
    },
    "H264CodecLevel": {
      "type": "string",
      "documentation": "H.264 Level.",
      "enum": [
        "AUTO",
        "LEVEL_1",
        "LEVEL_1_1",
        "LEVEL_1_2",
        "LEVEL_1_3",
        "LEVEL_2",
        "LEVEL_2_1",
        "LEVEL_2_2",
        "LEVEL_3",
        "LEVEL_3_1",
        "LEVEL_3_2",
        "LEVEL_4",
        "LEVEL_4_1",
        "LEVEL_4_2",
        "LEVEL_5",
        "LEVEL_5_1",
        "LEVEL_5_2"
      ]
    },
    "H264CodecProfile": {
      "type": "string",
      "documentation": "H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.",
      "enum": [
        "BASELINE",
        "HIGH",
        "HIGH_10BIT",
        "HIGH_422",
        "HIGH_422_10BIT",
        "MAIN"
      ]
    },
    "H264DynamicSubGop": {
      "type": "string",
      "documentation": "Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).",
      "enum": [
        "ADAPTIVE",
        "STATIC"
      ]
    },
    "H264EntropyEncoding": {
      "type": "string",
      "documentation": "Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.",
      "enum": [
        "CABAC",
        "CAVLC"
      ]
    },
    "H264FieldEncoding": {
      "type": "string",
      "documentation": "Choosing FORCE_FIELD disables PAFF encoding for interlaced outputs.",
      "enum": [
        "PAFF",
        "FORCE_FIELD"
      ]
    },
    "H264FlickerAdaptiveQuantization": {
      "type": "string",
      "documentation": "Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H264FramerateControl": {
      "type": "string",
      "documentation": "If you are using the console, use the Framerate setting to specify the framerate for this output. If you want to keep the same framerate as the input video, choose Follow source. If you want to do framerate conversion, choose a framerate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your framerate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the framerate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Choose SPECIFIED if you want the service to use the framerate you specify in the settings FramerateNumerator and FramerateDenominator.",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ]
    },
    "H264FramerateConversionAlgorithm": {
      "type": "string",
      "documentation": "When set to INTERPOLATE, produces smoother motion during framerate conversion.",
      "enum": [
        "DUPLICATE_DROP",
        "INTERPOLATE"
      ]
    },
    "H264GopBReference": {
      "type": "string",
      "documentation": "If enable, use reference B frames for GOP structures that have B frames > 1.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H264GopSizeUnits": {
      "type": "string",
      "documentation": "Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.",
      "enum": [
        "FRAMES",
        "SECONDS"
      ]
    },
    "H264InterlaceMode": {
      "type": "string",
      "documentation": "Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type, as follows.\n  - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of \"top field first\" and \"bottom field first\".\n  - If the source is progressive, the output will be interlaced with \"top field first\" or \"bottom field first\" polarity, depending on which of the Follow options you chose.",
      "enum": [
        "PROGRESSIVE",
        "TOP_FIELD",
        "BOTTOM_FIELD",
        "FOLLOW_TOP_FIELD",
        "FOLLOW_BOTTOM_FIELD"
      ]
    },
    "H264ParControl": {
      "type": "string",
      "documentation": "Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ]
    },
    "H264QualityTuningLevel": {
      "type": "string",
      "documentation": "Use Quality tuning level (H264QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.",
      "enum": [
        "SINGLE_PASS",
        "SINGLE_PASS_HQ",
        "MULTI_PASS_HQ"
      ]
    },
    "H264QvbrSettings": {
      "type": "structure",
      "members": {
        "MaxAverageBitrate": {
          "shape": "__integerMin1000Max1152000000",
          "locationName": "maxAverageBitrate",
          "documentation": "Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output."
        },
        "QvbrQualityLevel": {
          "shape": "__integerMin1Max10",
          "locationName": "qvbrQualityLevel",
          "documentation": "Required when you use QVBR rate control mode. That is, when you specify qvbrSettings within h264Settings. Specify the target quality level for this output, from 1 to 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9."
        }
      },
      "documentation": "Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode."
    },
    "H264RateControlMode": {
      "type": "string",
      "documentation": "Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).",
      "enum": [
        "VBR",
        "CBR",
        "QVBR"
      ]
    },
    "H264RepeatPps": {
      "type": "string",
      "documentation": "Places a PPS header on each encoded picture, even if repeated.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H264SceneChangeDetect": {
      "type": "string",
      "documentation": "Scene change detection (inserts I-frames on scene changes).",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H264Settings": {
      "type": "structure",
      "members": {
        "AdaptiveQuantization": {
          "shape": "H264AdaptiveQuantization",
          "locationName": "adaptiveQuantization"
        },
        "Bitrate": {
          "shape": "__integerMin1000Max1152000000",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000."
        },
        "CodecLevel": {
          "shape": "H264CodecLevel",
          "locationName": "codecLevel"
        },
        "CodecProfile": {
          "shape": "H264CodecProfile",
          "locationName": "codecProfile"
        },
        "DynamicSubGop": {
          "shape": "H264DynamicSubGop",
          "locationName": "dynamicSubGop",
          "documentation": "Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames)."
        },
        "EntropyEncoding": {
          "shape": "H264EntropyEncoding",
          "locationName": "entropyEncoding"
        },
        "FieldEncoding": {
          "shape": "H264FieldEncoding",
          "locationName": "fieldEncoding"
        },
        "FlickerAdaptiveQuantization": {
          "shape": "H264FlickerAdaptiveQuantization",
          "locationName": "flickerAdaptiveQuantization"
        },
        "FramerateControl": {
          "shape": "H264FramerateControl",
          "locationName": "framerateControl"
        },
        "FramerateConversionAlgorithm": {
          "shape": "H264FramerateConversionAlgorithm",
          "locationName": "framerateConversionAlgorithm"
        },
        "FramerateDenominator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "framerateDenominator",
          "documentation": "When you use the API for transcode jobs that use framerate conversion, specify the framerate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use framerate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976."
        },
        "FramerateNumerator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "framerateNumerator",
          "documentation": "Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps."
        },
        "GopBReference": {
          "shape": "H264GopBReference",
          "locationName": "gopBReference"
        },
        "GopClosedCadence": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "gopClosedCadence",
          "documentation": "Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting."
        },
        "GopSize": {
          "shape": "__doubleMin0",
          "locationName": "gopSize",
          "documentation": "GOP Length (keyframe interval) in frames or seconds. Must be greater than zero."
        },
        "GopSizeUnits": {
          "shape": "H264GopSizeUnits",
          "locationName": "gopSizeUnits"
        },
        "HrdBufferInitialFillPercentage": {
          "shape": "__integerMin0Max100",
          "locationName": "hrdBufferInitialFillPercentage",
          "documentation": "Percentage of the buffer that should initially be filled (HRD buffer model)."
        },
        "HrdBufferSize": {
          "shape": "__integerMin0Max1152000000",
          "locationName": "hrdBufferSize",
          "documentation": "Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000."
        },
        "InterlaceMode": {
          "shape": "H264InterlaceMode",
          "locationName": "interlaceMode"
        },
        "MaxBitrate": {
          "shape": "__integerMin1000Max1152000000",
          "locationName": "maxBitrate",
          "documentation": "Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR."
        },
        "MinIInterval": {
          "shape": "__integerMin0Max30",
          "locationName": "minIInterval",
          "documentation": "Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1"
        },
        "NumberBFramesBetweenReferenceFrames": {
          "shape": "__integerMin0Max7",
          "locationName": "numberBFramesBetweenReferenceFrames",
          "documentation": "Number of B-frames between reference frames."
        },
        "NumberReferenceFrames": {
          "shape": "__integerMin1Max6",
          "locationName": "numberReferenceFrames",
          "documentation": "Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding."
        },
        "ParControl": {
          "shape": "H264ParControl",
          "locationName": "parControl"
        },
        "ParDenominator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "parDenominator",
          "documentation": "Pixel Aspect Ratio denominator."
        },
        "ParNumerator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "parNumerator",
          "documentation": "Pixel Aspect Ratio numerator."
        },
        "QualityTuningLevel": {
          "shape": "H264QualityTuningLevel",
          "locationName": "qualityTuningLevel"
        },
        "QvbrSettings": {
          "shape": "H264QvbrSettings",
          "locationName": "qvbrSettings",
          "documentation": "Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode."
        },
        "RateControlMode": {
          "shape": "H264RateControlMode",
          "locationName": "rateControlMode"
        },
        "RepeatPps": {
          "shape": "H264RepeatPps",
          "locationName": "repeatPps"
        },
        "SceneChangeDetect": {
          "shape": "H264SceneChangeDetect",
          "locationName": "sceneChangeDetect"
        },
        "Slices": {
          "shape": "__integerMin1Max32",
          "locationName": "slices",
          "documentation": "Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures."
        },
        "SlowPal": {
          "shape": "H264SlowPal",
          "locationName": "slowPal"
        },
        "Softness": {
          "shape": "__integerMin0Max128",
          "locationName": "softness",
          "documentation": "Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image."
        },
        "SpatialAdaptiveQuantization": {
          "shape": "H264SpatialAdaptiveQuantization",
          "locationName": "spatialAdaptiveQuantization"
        },
        "Syntax": {
          "shape": "H264Syntax",
          "locationName": "syntax"
        },
        "Telecine": {
          "shape": "H264Telecine",
          "locationName": "telecine"
        },
        "TemporalAdaptiveQuantization": {
          "shape": "H264TemporalAdaptiveQuantization",
          "locationName": "temporalAdaptiveQuantization"
        },
        "UnregisteredSeiTimecode": {
          "shape": "H264UnregisteredSeiTimecode",
          "locationName": "unregisteredSeiTimecode"
        }
      },
      "documentation": "Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264."
    },
    "H264SlowPal": {
      "type": "string",
      "documentation": "Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H264SpatialAdaptiveQuantization": {
      "type": "string",
      "documentation": "Adjust quantization within each frame based on spatial variation of content complexity.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H264Syntax": {
      "type": "string",
      "documentation": "Produces a bitstream compliant with SMPTE RP-2027.",
      "enum": [
        "DEFAULT",
        "RP2027"
      ]
    },
    "H264Telecine": {
      "type": "string",
      "documentation": "This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.",
      "enum": [
        "NONE",
        "SOFT",
        "HARD"
      ]
    },
    "H264TemporalAdaptiveQuantization": {
      "type": "string",
      "documentation": "Adjust quantization within each frame based on temporal variation of content complexity.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H264UnregisteredSeiTimecode": {
      "type": "string",
      "documentation": "Inserts timecode for each frame as 4 bytes of an unregistered SEI message.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265AdaptiveQuantization": {
      "type": "string",
      "documentation": "Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.",
      "enum": [
        "OFF",
        "LOW",
        "MEDIUM",
        "HIGH",
        "HIGHER",
        "MAX"
      ]
    },
    "H265AlternateTransferFunctionSei": {
      "type": "string",
      "documentation": "Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265CodecLevel": {
      "type": "string",
      "documentation": "H.265 Level.",
      "enum": [
        "AUTO",
        "LEVEL_1",
        "LEVEL_2",
        "LEVEL_2_1",
        "LEVEL_3",
        "LEVEL_3_1",
        "LEVEL_4",
        "LEVEL_4_1",
        "LEVEL_5",
        "LEVEL_5_1",
        "LEVEL_5_2",
        "LEVEL_6",
        "LEVEL_6_1",
        "LEVEL_6_2"
      ]
    },
    "H265CodecProfile": {
      "type": "string",
      "documentation": "Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so \"Main/High\" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.",
      "enum": [
        "MAIN_MAIN",
        "MAIN_HIGH",
        "MAIN10_MAIN",
        "MAIN10_HIGH",
        "MAIN_422_8BIT_MAIN",
        "MAIN_422_8BIT_HIGH",
        "MAIN_422_10BIT_MAIN",
        "MAIN_422_10BIT_HIGH"
      ]
    },
    "H265DynamicSubGop": {
      "type": "string",
      "documentation": "Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).",
      "enum": [
        "ADAPTIVE",
        "STATIC"
      ]
    },
    "H265FlickerAdaptiveQuantization": {
      "type": "string",
      "documentation": "Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265FramerateControl": {
      "type": "string",
      "documentation": "If you are using the console, use the Framerate setting to specify the framerate for this output. If you want to keep the same framerate as the input video, choose Follow source. If you want to do framerate conversion, choose a framerate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your framerate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the framerate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Choose SPECIFIED if you want the service to use the framerate you specify in the settings FramerateNumerator and FramerateDenominator.",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ]
    },
    "H265FramerateConversionAlgorithm": {
      "type": "string",
      "documentation": "When set to INTERPOLATE, produces smoother motion during framerate conversion.",
      "enum": [
        "DUPLICATE_DROP",
        "INTERPOLATE"
      ]
    },
    "H265GopBReference": {
      "type": "string",
      "documentation": "If enable, use reference B frames for GOP structures that have B frames > 1.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265GopSizeUnits": {
      "type": "string",
      "documentation": "Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.",
      "enum": [
        "FRAMES",
        "SECONDS"
      ]
    },
    "H265InterlaceMode": {
      "type": "string",
      "documentation": "Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.\n  - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of \"top field first\" and \"bottom field first\".\n  - If the source is progressive, the output will be interlaced with \"top field first\" or \"bottom field first\" polarity, depending on which of the Follow options you chose.",
      "enum": [
        "PROGRESSIVE",
        "TOP_FIELD",
        "BOTTOM_FIELD",
        "FOLLOW_TOP_FIELD",
        "FOLLOW_BOTTOM_FIELD"
      ]
    },
    "H265ParControl": {
      "type": "string",
      "documentation": "Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ]
    },
    "H265QualityTuningLevel": {
      "type": "string",
      "documentation": "Use Quality tuning level (H265QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.",
      "enum": [
        "SINGLE_PASS",
        "SINGLE_PASS_HQ",
        "MULTI_PASS_HQ"
      ]
    },
    "H265QvbrSettings": {
      "type": "structure",
      "members": {
        "MaxAverageBitrate": {
          "shape": "__integerMin1000Max1466400000",
          "locationName": "maxAverageBitrate",
          "documentation": "Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output."
        },
        "QvbrQualityLevel": {
          "shape": "__integerMin1Max10",
          "locationName": "qvbrQualityLevel",
          "documentation": "Required when you use QVBR rate control mode. That is, when you specify qvbrSettings within h265Settings. Specify the target quality level for this output, from 1 to 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9."
        }
      },
      "documentation": "Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode."
    },
    "H265RateControlMode": {
      "type": "string",
      "documentation": "Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).",
      "enum": [
        "VBR",
        "CBR",
        "QVBR"
      ]
    },
    "H265SampleAdaptiveOffsetFilterMode": {
      "type": "string",
      "documentation": "Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content",
      "enum": [
        "DEFAULT",
        "ADAPTIVE",
        "OFF"
      ]
    },
    "H265SceneChangeDetect": {
      "type": "string",
      "documentation": "Scene change detection (inserts I-frames on scene changes).",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265Settings": {
      "type": "structure",
      "members": {
        "AdaptiveQuantization": {
          "shape": "H265AdaptiveQuantization",
          "locationName": "adaptiveQuantization"
        },
        "AlternateTransferFunctionSei": {
          "shape": "H265AlternateTransferFunctionSei",
          "locationName": "alternateTransferFunctionSei"
        },
        "Bitrate": {
          "shape": "__integerMin1000Max1466400000",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000."
        },
        "CodecLevel": {
          "shape": "H265CodecLevel",
          "locationName": "codecLevel"
        },
        "CodecProfile": {
          "shape": "H265CodecProfile",
          "locationName": "codecProfile"
        },
        "DynamicSubGop": {
          "shape": "H265DynamicSubGop",
          "locationName": "dynamicSubGop",
          "documentation": "Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames)."
        },
        "FlickerAdaptiveQuantization": {
          "shape": "H265FlickerAdaptiveQuantization",
          "locationName": "flickerAdaptiveQuantization"
        },
        "FramerateControl": {
          "shape": "H265FramerateControl",
          "locationName": "framerateControl"
        },
        "FramerateConversionAlgorithm": {
          "shape": "H265FramerateConversionAlgorithm",
          "locationName": "framerateConversionAlgorithm"
        },
        "FramerateDenominator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "framerateDenominator",
          "documentation": "Framerate denominator."
        },
        "FramerateNumerator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "framerateNumerator",
          "documentation": "Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps."
        },
        "GopBReference": {
          "shape": "H265GopBReference",
          "locationName": "gopBReference"
        },
        "GopClosedCadence": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "gopClosedCadence",
          "documentation": "Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting."
        },
        "GopSize": {
          "shape": "__doubleMin0",
          "locationName": "gopSize",
          "documentation": "GOP Length (keyframe interval) in frames or seconds. Must be greater than zero."
        },
        "GopSizeUnits": {
          "shape": "H265GopSizeUnits",
          "locationName": "gopSizeUnits"
        },
        "HrdBufferInitialFillPercentage": {
          "shape": "__integerMin0Max100",
          "locationName": "hrdBufferInitialFillPercentage",
          "documentation": "Percentage of the buffer that should initially be filled (HRD buffer model)."
        },
        "HrdBufferSize": {
          "shape": "__integerMin0Max1466400000",
          "locationName": "hrdBufferSize",
          "documentation": "Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000."
        },
        "InterlaceMode": {
          "shape": "H265InterlaceMode",
          "locationName": "interlaceMode"
        },
        "MaxBitrate": {
          "shape": "__integerMin1000Max1466400000",
          "locationName": "maxBitrate",
          "documentation": "Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR."
        },
        "MinIInterval": {
          "shape": "__integerMin0Max30",
          "locationName": "minIInterval",
          "documentation": "Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1"
        },
        "NumberBFramesBetweenReferenceFrames": {
          "shape": "__integerMin0Max7",
          "locationName": "numberBFramesBetweenReferenceFrames",
          "documentation": "Number of B-frames between reference frames."
        },
        "NumberReferenceFrames": {
          "shape": "__integerMin1Max6",
          "locationName": "numberReferenceFrames",
          "documentation": "Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding."
        },
        "ParControl": {
          "shape": "H265ParControl",
          "locationName": "parControl"
        },
        "ParDenominator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "parDenominator",
          "documentation": "Pixel Aspect Ratio denominator."
        },
        "ParNumerator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "parNumerator",
          "documentation": "Pixel Aspect Ratio numerator."
        },
        "QualityTuningLevel": {
          "shape": "H265QualityTuningLevel",
          "locationName": "qualityTuningLevel"
        },
        "QvbrSettings": {
          "shape": "H265QvbrSettings",
          "locationName": "qvbrSettings",
          "documentation": "Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode."
        },
        "RateControlMode": {
          "shape": "H265RateControlMode",
          "locationName": "rateControlMode"
        },
        "SampleAdaptiveOffsetFilterMode": {
          "shape": "H265SampleAdaptiveOffsetFilterMode",
          "locationName": "sampleAdaptiveOffsetFilterMode"
        },
        "SceneChangeDetect": {
          "shape": "H265SceneChangeDetect",
          "locationName": "sceneChangeDetect"
        },
        "Slices": {
          "shape": "__integerMin1Max32",
          "locationName": "slices",
          "documentation": "Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures."
        },
        "SlowPal": {
          "shape": "H265SlowPal",
          "locationName": "slowPal"
        },
        "SpatialAdaptiveQuantization": {
          "shape": "H265SpatialAdaptiveQuantization",
          "locationName": "spatialAdaptiveQuantization"
        },
        "Telecine": {
          "shape": "H265Telecine",
          "locationName": "telecine"
        },
        "TemporalAdaptiveQuantization": {
          "shape": "H265TemporalAdaptiveQuantization",
          "locationName": "temporalAdaptiveQuantization"
        },
        "TemporalIds": {
          "shape": "H265TemporalIds",
          "locationName": "temporalIds"
        },
        "Tiles": {
          "shape": "H265Tiles",
          "locationName": "tiles"
        },
        "UnregisteredSeiTimecode": {
          "shape": "H265UnregisteredSeiTimecode",
          "locationName": "unregisteredSeiTimecode"
        },
        "WriteMp4PackagingType": {
          "shape": "H265WriteMp4PackagingType",
          "locationName": "writeMp4PackagingType"
        }
      },
      "documentation": "Settings for H265 codec"
    },
    "H265SlowPal": {
      "type": "string",
      "documentation": "Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265SpatialAdaptiveQuantization": {
      "type": "string",
      "documentation": "Adjust quantization within each frame based on spatial variation of content complexity.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265Telecine": {
      "type": "string",
      "documentation": "This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.",
      "enum": [
        "NONE",
        "SOFT",
        "HARD"
      ]
    },
    "H265TemporalAdaptiveQuantization": {
      "type": "string",
      "documentation": "Adjust quantization within each frame based on temporal variation of content complexity.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265TemporalIds": {
      "type": "string",
      "documentation": "Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265Tiles": {
      "type": "string",
      "documentation": "Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265UnregisteredSeiTimecode": {
      "type": "string",
      "documentation": "Inserts timecode for each frame as 4 bytes of an unregistered SEI message.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "H265WriteMp4PackagingType": {
      "type": "string",
      "documentation": "If HVC1, output that is H.265 will be marked as HVC1 and adhere to the ISO-IECJTC1-SC29_N13798_Text_ISOIEC_FDIS_14496-15_3rd_E spec which states that parameter set NAL units will be stored in the sample headers but not in the samples directly. If HEV1, then H.265 will be marked as HEV1 and parameter set NAL units will be written into the samples.",
      "enum": [
        "HVC1",
        "HEV1"
      ]
    },
    "Hdr10Metadata": {
      "type": "structure",
      "members": {
        "BluePrimaryX": {
          "shape": "__integerMin0Max50000",
          "locationName": "bluePrimaryX",
          "documentation": "HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction."
        },
        "BluePrimaryY": {
          "shape": "__integerMin0Max50000",
          "locationName": "bluePrimaryY",
          "documentation": "HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction."
        },
        "GreenPrimaryX": {
          "shape": "__integerMin0Max50000",
          "locationName": "greenPrimaryX",
          "documentation": "HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction."
        },
        "GreenPrimaryY": {
          "shape": "__integerMin0Max50000",
          "locationName": "greenPrimaryY",
          "documentation": "HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction."
        },
        "MaxContentLightLevel": {
          "shape": "__integerMin0Max65535",
          "locationName": "maxContentLightLevel",
          "documentation": "Maximum light level among all samples in the coded video sequence, in units of candelas per square meter."
        },
        "MaxFrameAverageLightLevel": {
          "shape": "__integerMin0Max65535",
          "locationName": "maxFrameAverageLightLevel",
          "documentation": "Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter."
        },
        "MaxLuminance": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "maxLuminance",
          "documentation": "Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter."
        },
        "MinLuminance": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "minLuminance",
          "documentation": "Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter"
        },
        "RedPrimaryX": {
          "shape": "__integerMin0Max50000",
          "locationName": "redPrimaryX",
          "documentation": "HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction."
        },
        "RedPrimaryY": {
          "shape": "__integerMin0Max50000",
          "locationName": "redPrimaryY",
          "documentation": "HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction."
        },
        "WhitePointX": {
          "shape": "__integerMin0Max50000",
          "locationName": "whitePointX",
          "documentation": "HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction."
        },
        "WhitePointY": {
          "shape": "__integerMin0Max50000",
          "locationName": "whitePointY",
          "documentation": "HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction."
        }
      },
      "documentation": "Use the HDR master display (Hdr10Metadata) settings to correct HDR metadata or to provide missing metadata. These values vary depending on the input video and must be provided by a color grader. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that these settings are not color correction. Note that if you are creating HDR outputs inside of an HLS CMAF package, to comply with the Apple specification, you must use the HVC1 for H.265 setting."
    },
    "HlsAdMarkers": {
      "type": "string",
      "enum": [
        "ELEMENTAL",
        "ELEMENTAL_SCTE35"
      ]
    },
    "HlsAudioTrackType": {
      "type": "string",
      "documentation": "Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO",
      "enum": [
        "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
        "ALTERNATE_AUDIO_AUTO_SELECT",
        "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
        "AUDIO_ONLY_VARIANT_STREAM"
      ]
    },
    "HlsCaptionLanguageMapping": {
      "type": "structure",
      "members": {
        "CaptionChannel": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "captionChannel",
          "documentation": "Caption channel."
        },
        "CustomLanguageCode": {
          "shape": "__stringMin3Max3PatternAZaZ3",
          "locationName": "customLanguageCode",
          "documentation": "Specify the language for this caption channel, using the ISO 639-2 or ISO 639-3 three-letter language code"
        },
        "LanguageCode": {
          "shape": "LanguageCode",
          "locationName": "languageCode"
        },
        "LanguageDescription": {
          "shape": "__string",
          "locationName": "languageDescription",
          "documentation": "Caption language description."
        }
      },
      "documentation": "Caption Language Mapping"
    },
    "HlsCaptionLanguageSetting": {
      "type": "string",
      "documentation": "Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.",
      "enum": [
        "INSERT",
        "OMIT",
        "NONE"
      ]
    },
    "HlsClientCache": {
      "type": "string",
      "documentation": "When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "HlsCodecSpecification": {
      "type": "string",
      "documentation": "Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.",
      "enum": [
        "RFC_6381",
        "RFC_4281"
      ]
    },
    "HlsDirectoryStructure": {
      "type": "string",
      "documentation": "Indicates whether segments should be placed in subdirectories.",
      "enum": [
        "SINGLE_DIRECTORY",
        "SUBDIRECTORY_PER_STREAM"
      ]
    },
    "HlsEncryptionSettings": {
      "type": "structure",
      "members": {
        "ConstantInitializationVector": {
          "shape": "__stringMin32Max32Pattern09aFAF32",
          "locationName": "constantInitializationVector",
          "documentation": "This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default."
        },
        "EncryptionMethod": {
          "shape": "HlsEncryptionType",
          "locationName": "encryptionMethod"
        },
        "InitializationVectorInManifest": {
          "shape": "HlsInitializationVectorInManifest",
          "locationName": "initializationVectorInManifest"
        },
        "SpekeKeyProvider": {
          "shape": "SpekeKeyProvider",
          "locationName": "spekeKeyProvider"
        },
        "StaticKeyProvider": {
          "shape": "StaticKeyProvider",
          "locationName": "staticKeyProvider"
        },
        "Type": {
          "shape": "HlsKeyProviderType",
          "locationName": "type"
        }
      },
      "documentation": "Settings for HLS encryption"
    },
    "HlsEncryptionType": {
      "type": "string",
      "documentation": "Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.",
      "enum": [
        "AES128",
        "SAMPLE_AES"
      ]
    },
    "HlsGroupSettings": {
      "type": "structure",
      "members": {
        "AdMarkers": {
          "shape": "__listOfHlsAdMarkers",
          "locationName": "adMarkers",
          "documentation": "Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs."
        },
        "BaseUrl": {
          "shape": "__string",
          "locationName": "baseUrl",
          "documentation": "A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file."
        },
        "CaptionLanguageMappings": {
          "shape": "__listOfHlsCaptionLanguageMapping",
          "locationName": "captionLanguageMappings",
          "documentation": "Language to be used on Caption outputs"
        },
        "CaptionLanguageSetting": {
          "shape": "HlsCaptionLanguageSetting",
          "locationName": "captionLanguageSetting"
        },
        "ClientCache": {
          "shape": "HlsClientCache",
          "locationName": "clientCache"
        },
        "CodecSpecification": {
          "shape": "HlsCodecSpecification",
          "locationName": "codecSpecification"
        },
        "Destination": {
          "shape": "__stringPatternS3",
          "locationName": "destination",
          "documentation": "Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file."
        },
        "DirectoryStructure": {
          "shape": "HlsDirectoryStructure",
          "locationName": "directoryStructure"
        },
        "Encryption": {
          "shape": "HlsEncryptionSettings",
          "locationName": "encryption",
          "documentation": "DRM settings."
        },
        "ManifestCompression": {
          "shape": "HlsManifestCompression",
          "locationName": "manifestCompression"
        },
        "ManifestDurationFormat": {
          "shape": "HlsManifestDurationFormat",
          "locationName": "manifestDurationFormat"
        },
        "MinFinalSegmentLength": {
          "shape": "__doubleMin0Max2147483647",
          "locationName": "minFinalSegmentLength",
          "documentation": "Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds."
        },
        "MinSegmentLength": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "minSegmentLength",
          "documentation": "When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed."
        },
        "OutputSelection": {
          "shape": "HlsOutputSelection",
          "locationName": "outputSelection"
        },
        "ProgramDateTime": {
          "shape": "HlsProgramDateTime",
          "locationName": "programDateTime"
        },
        "ProgramDateTimePeriod": {
          "shape": "__integerMin0Max3600",
          "locationName": "programDateTimePeriod",
          "documentation": "Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds."
        },
        "SegmentControl": {
          "shape": "HlsSegmentControl",
          "locationName": "segmentControl"
        },
        "SegmentLength": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "segmentLength",
          "documentation": "Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer."
        },
        "SegmentsPerSubdirectory": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "segmentsPerSubdirectory",
          "documentation": "Number of segments to write to a subdirectory before starting a new one. directoryStructure must be SINGLE_DIRECTORY for this setting to have an effect."
        },
        "StreamInfResolution": {
          "shape": "HlsStreamInfResolution",
          "locationName": "streamInfResolution"
        },
        "TimedMetadataId3Frame": {
          "shape": "HlsTimedMetadataId3Frame",
          "locationName": "timedMetadataId3Frame"
        },
        "TimedMetadataId3Period": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "timedMetadataId3Period",
          "documentation": "Timed Metadata interval in seconds."
        },
        "TimestampDeltaMilliseconds": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "timestampDeltaMilliseconds",
          "documentation": "Provides an extra millisecond delta offset to fine tune the timestamps."
        }
      },
      "documentation": "Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS."
    },
    "HlsIFrameOnlyManifest": {
      "type": "string",
      "documentation": "When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "HlsInitializationVectorInManifest": {
      "type": "string",
      "documentation": "The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "HlsKeyProviderType": {
      "type": "string",
      "documentation": "Indicates which type of key provider is used for encryption.",
      "enum": [
        "SPEKE",
        "STATIC_KEY"
      ]
    },
    "HlsManifestCompression": {
      "type": "string",
      "documentation": "When set to GZIP, compresses HLS playlist.",
      "enum": [
        "GZIP",
        "NONE"
      ]
    },
    "HlsManifestDurationFormat": {
      "type": "string",
      "documentation": "Indicates whether the output manifest should use floating point values for segment duration.",
      "enum": [
        "FLOATING_POINT",
        "INTEGER"
      ]
    },
    "HlsOutputSelection": {
      "type": "string",
      "documentation": "Indicates whether the .m3u8 manifest file should be generated for this HLS output group.",
      "enum": [
        "MANIFESTS_AND_SEGMENTS",
        "SEGMENTS_ONLY"
      ]
    },
    "HlsProgramDateTime": {
      "type": "string",
      "documentation": "Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "HlsSegmentControl": {
      "type": "string",
      "documentation": "When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.",
      "enum": [
        "SINGLE_FILE",
        "SEGMENTED_FILES"
      ]
    },
    "HlsSettings": {
      "type": "structure",
      "members": {
        "AudioGroupId": {
          "shape": "__string",
          "locationName": "audioGroupId",
          "documentation": "Specifies the group to which the audio Rendition belongs."
        },
        "AudioRenditionSets": {
          "shape": "__string",
          "locationName": "audioRenditionSets",
          "documentation": "List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','."
        },
        "AudioTrackType": {
          "shape": "HlsAudioTrackType",
          "locationName": "audioTrackType"
        },
        "IFrameOnlyManifest": {
          "shape": "HlsIFrameOnlyManifest",
          "locationName": "iFrameOnlyManifest"
        },
        "SegmentModifier": {
          "shape": "__string",
          "locationName": "segmentModifier",
          "documentation": "String concatenated to end of segment filenames. Accepts \"Format Identifiers\":#format_identifier_parameters."
        }
      },
      "documentation": "Settings for HLS output groups"
    },
    "HlsStreamInfResolution": {
      "type": "string",
      "documentation": "Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "HlsTimedMetadataId3Frame": {
      "type": "string",
      "documentation": "Indicates ID3 frame that has the timecode.",
      "enum": [
        "NONE",
        "PRIV",
        "TDRL"
      ]
    },
    "Id3Insertion": {
      "type": "structure",
      "members": {
        "Id3": {
          "shape": "__stringPatternAZaZ0902",
          "locationName": "id3",
          "documentation": "Use ID3 tag (Id3) to provide a tag value in base64-encode format."
        },
        "Timecode": {
          "shape": "__stringPattern010920405090509092",
          "locationName": "timecode",
          "documentation": "Provide a Timecode (TimeCode) in HH:MM:SS:FF or HH:MM:SS;FF format."
        }
      },
      "documentation": "To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion)."
    },
    "ImageInserter": {
      "type": "structure",
      "members": {
        "InsertableImages": {
          "shape": "__listOfInsertableImage",
          "locationName": "insertableImages",
          "documentation": "Image to insert. Must be 32 bit windows BMP, PNG, or TGA file. Must not be  larger than the output frames."
        }
      },
      "documentation": "Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default."
    },
    "Input": {
      "type": "structure",
      "members": {
        "AudioSelectorGroups": {
          "shape": "__mapOfAudioSelectorGroup",
          "locationName": "audioSelectorGroups",
          "documentation": "Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See \"Audio Selector Group\":#inputs-audio_selector_group for more information."
        },
        "AudioSelectors": {
          "shape": "__mapOfAudioSelector",
          "locationName": "audioSelectors",
          "documentation": "Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use mutiple Audio selectors per input."
        },
        "CaptionSelectors": {
          "shape": "__mapOfCaptionSelector",
          "locationName": "captionSelectors",
          "documentation": "Use Captions selectors (CaptionSelectors) to specify the captions data from the input that you will use in your outputs. You can use mutiple captions selectors per input."
        },
        "DeblockFilter": {
          "shape": "InputDeblockFilter",
          "locationName": "deblockFilter"
        },
        "DenoiseFilter": {
          "shape": "InputDenoiseFilter",
          "locationName": "denoiseFilter"
        },
        "FileInput": {
          "shape": "__stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MM",
          "locationName": "fileInput",
          "documentation": "Use Input (fileInput) to define the source file used in the transcode job. There can be multiple inputs in a job. These inputs are concantenated, in the order they are specified in the job, to create the output."
        },
        "FilterEnable": {
          "shape": "InputFilterEnable",
          "locationName": "filterEnable"
        },
        "FilterStrength": {
          "shape": "__integerMinNegative5Max5",
          "locationName": "filterStrength",
          "documentation": "Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0."
        },
        "InputClippings": {
          "shape": "__listOfInputClipping",
          "locationName": "inputClippings",
          "documentation": "(InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them."
        },
        "ProgramNumber": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "programNumber",
          "documentation": "Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default."
        },
        "PsiControl": {
          "shape": "InputPsiControl",
          "locationName": "psiControl"
        },
        "TimecodeSource": {
          "shape": "InputTimecodeSource",
          "locationName": "timecodeSource"
        },
        "VideoSelector": {
          "shape": "VideoSelector",
          "locationName": "videoSelector"
        }
      },
      "documentation": "Specifies media input"
    },
    "InputClipping": {
      "type": "structure",
      "members": {
        "EndTimecode": {
          "shape": "__stringPattern010920405090509092",
          "locationName": "endTimecode",
          "documentation": "Set End timecode (EndTimecode) to the end of the portion of the input you are clipping. The frame corresponding to the End timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for timecode source under input settings (InputTimecodeSource). For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to end six minutes into the video, use 01:06:00:00."
        },
        "StartTimecode": {
          "shape": "__stringPattern010920405090509092",
          "locationName": "startTimecode",
          "documentation": "Set Start timecode (StartTimecode) to the beginning of the portion of the input you are clipping. The frame corresponding to the Start timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for Input timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to begin five minutes into the video, use 01:05:00:00."
        }
      },
      "documentation": "To transcode only portions of your input (clips), include one Input clipping (one instance of InputClipping in the JSON job file) for each input clip. All input clips you specify will be included in every output of the job."
    },
    "InputDeblockFilter": {
      "type": "string",
      "documentation": "Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manaully controllable for MPEG2 and uncompressed video inputs.",
      "enum": [
        "ENABLED",
        "DISABLED"
      ]
    },
    "InputDenoiseFilter": {
      "type": "string",
      "documentation": "Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.",
      "enum": [
        "ENABLED",
        "DISABLED"
      ]
    },
    "InputFilterEnable": {
      "type": "string",
      "documentation": "Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type.",
      "enum": [
        "AUTO",
        "DISABLE",
        "FORCE"
      ]
    },
    "InputPsiControl": {
      "type": "string",
      "documentation": "Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.",
      "enum": [
        "IGNORE_PSI",
        "USE_PSI"
      ]
    },
    "InputTemplate": {
      "type": "structure",
      "members": {
        "AudioSelectorGroups": {
          "shape": "__mapOfAudioSelectorGroup",
          "locationName": "audioSelectorGroups",
          "documentation": "Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See \"Audio Selector Group\":#inputs-audio_selector_group for more information."
        },
        "AudioSelectors": {
          "shape": "__mapOfAudioSelector",
          "locationName": "audioSelectors",
          "documentation": "Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use mutiple Audio selectors per input."
        },
        "CaptionSelectors": {
          "shape": "__mapOfCaptionSelector",
          "locationName": "captionSelectors",
          "documentation": "Use Captions selectors (CaptionSelectors) to specify the captions data from the input that you will use in your outputs. You can use mutiple captions selectors per input."
        },
        "DeblockFilter": {
          "shape": "InputDeblockFilter",
          "locationName": "deblockFilter"
        },
        "DenoiseFilter": {
          "shape": "InputDenoiseFilter",
          "locationName": "denoiseFilter"
        },
        "FilterEnable": {
          "shape": "InputFilterEnable",
          "locationName": "filterEnable"
        },
        "FilterStrength": {
          "shape": "__integerMinNegative5Max5",
          "locationName": "filterStrength",
          "documentation": "Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0."
        },
        "InputClippings": {
          "shape": "__listOfInputClipping",
          "locationName": "inputClippings",
          "documentation": "(InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them."
        },
        "ProgramNumber": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "programNumber",
          "documentation": "Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default."
        },
        "PsiControl": {
          "shape": "InputPsiControl",
          "locationName": "psiControl"
        },
        "TimecodeSource": {
          "shape": "InputTimecodeSource",
          "locationName": "timecodeSource"
        },
        "VideoSelector": {
          "shape": "VideoSelector",
          "locationName": "videoSelector"
        }
      },
      "documentation": "Specified video input in a template."
    },
    "InputTimecodeSource": {
      "type": "string",
      "documentation": "Timecode source under input settings (InputTimecodeSource) only affects the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Use this setting to specify whether the service counts frames by timecodes embedded in the video (EMBEDDED) or by starting the first frame at zero (ZEROBASED). In both cases, the timecode format is HH:MM:SS:FF or HH:MM:SS;FF, where FF is the frame number. Only set this to EMBEDDED if your source video has embedded timecodes.",
      "enum": [
        "EMBEDDED",
        "ZEROBASED",
        "SPECIFIEDSTART"
      ]
    },
    "InsertableImage": {
      "type": "structure",
      "members": {
        "Duration": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "duration",
          "documentation": "Use Duration (Duration) to set the time, in milliseconds, for the image to remain on the output video."
        },
        "FadeIn": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "fadeIn",
          "documentation": "Use Fade in (FadeIut) to set the length, in milliseconds, of the inserted image fade in. If you don't specify a value for Fade in, the image will appear abruptly at the Start time."
        },
        "FadeOut": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "fadeOut",
          "documentation": "Use Fade out (FadeOut) to set the length, in milliseconds, of the inserted image fade out. If you don't specify a value for Fade out, the image will disappear abruptly at the end of the inserted image duration."
        },
        "Height": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "height",
          "documentation": "Specify the Height (Height) of the inserted image. Use a value that is less than or equal to the video resolution height. Leave this setting blank to use the native height of the image."
        },
        "ImageInserterInput": {
          "shape": "__stringMin14PatternS3BmpBMPPngPNGTgaTGA",
          "locationName": "imageInserterInput",
          "documentation": "Use Image location (imageInserterInput) to specify the Amazon S3 location of the image to be inserted into the output. Use a 32 bit BMP, PNG, or TGA file that fits inside the video frame."
        },
        "ImageX": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "imageX",
          "documentation": "Use Left (ImageX) to set the distance, in pixels, between the inserted image and the left edge of the frame. Required for BMP, PNG and TGA input."
        },
        "ImageY": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "imageY",
          "documentation": "Use Top (ImageY) to set the distance, in pixels, between the inserted image and the top edge of the video frame. Required for BMP, PNG and TGA input."
        },
        "Layer": {
          "shape": "__integerMin0Max99",
          "locationName": "layer",
          "documentation": "Use Layer (Layer) to specify how overlapping inserted images appear. Images with higher values of layer appear on top of images with lower values of layer."
        },
        "Opacity": {
          "shape": "__integerMin0Max100",
          "locationName": "opacity",
          "documentation": "Use Opacity (Opacity) to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50."
        },
        "StartTime": {
          "shape": "__stringPattern01D20305D205D",
          "locationName": "startTime",
          "documentation": "Use Start time (StartTime) to specify the video timecode when the image is inserted in the output. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format."
        },
        "Width": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "width",
          "documentation": "Specify the Width (Width) of the inserted image. Use a value that is less than or equal to the video resolution width. Leave this setting blank to use the native width of the image."
        }
      },
      "documentation": "Settings for Insertable Image"
    },
    "InternalServerErrorException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 500
      },
      "documentation": "The service encountered an unexpected condition and can't fulfill your request."
    },
    "Job": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "An identifier for this resource that is unique within all of AWS."
        },
        "BillingTagsSource": {
          "shape": "BillingTagsSource",
          "locationName": "billingTagsSource"
        },
        "CreatedAt": {
          "shape": "__timestampUnix",
          "locationName": "createdAt",
          "documentation": "The time, in Unix epoch format in seconds, when the job got created."
        },
        "ErrorCode": {
          "shape": "__integer",
          "locationName": "errorCode",
          "documentation": "Error code for the job"
        },
        "ErrorMessage": {
          "shape": "__string",
          "locationName": "errorMessage",
          "documentation": "Error message of Job"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources"
        },
        "JobTemplate": {
          "shape": "__string",
          "locationName": "jobTemplate",
          "documentation": "The job template that the job is created from, if it is created from a job template."
        },
        "OutputGroupDetails": {
          "shape": "__listOfOutputGroupDetail",
          "locationName": "outputGroupDetails",
          "documentation": "List of output group details"
        },
        "Queue": {
          "shape": "__string",
          "locationName": "queue",
          "documentation": "Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"
        },
        "Role": {
          "shape": "__string",
          "locationName": "role",
          "documentation": "The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html"
        },
        "Settings": {
          "shape": "JobSettings",
          "locationName": "settings"
        },
        "Status": {
          "shape": "JobStatus",
          "locationName": "status"
        },
        "Timing": {
          "shape": "Timing",
          "locationName": "timing"
        },
        "UserMetadata": {
          "shape": "__mapOf__string",
          "locationName": "userMetadata",
          "documentation": "User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs."
        }
      },
      "documentation": "Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html",
      "required": [
        "Role",
        "Settings"
      ]
    },
    "JobSettings": {
      "type": "structure",
      "members": {
        "AdAvailOffset": {
          "shape": "__integerMinNegative1000Max1000",
          "locationName": "adAvailOffset",
          "documentation": "When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time."
        },
        "AvailBlanking": {
          "shape": "AvailBlanking",
          "locationName": "availBlanking",
          "documentation": "Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails."
        },
        "Inputs": {
          "shape": "__listOfInput",
          "locationName": "inputs",
          "documentation": "Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output."
        },
        "NielsenConfiguration": {
          "shape": "NielsenConfiguration",
          "locationName": "nielsenConfiguration"
        },
        "OutputGroups": {
          "shape": "__listOfOutputGroup",
          "locationName": "outputGroups",
          "documentation": "(OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings"
        },
        "TimecodeConfig": {
          "shape": "TimecodeConfig",
          "locationName": "timecodeConfig",
          "documentation": "Contains settings used to acquire and adjust timecode information from inputs."
        },
        "TimedMetadataInsertion": {
          "shape": "TimedMetadataInsertion",
          "locationName": "timedMetadataInsertion"
        }
      },
      "documentation": "JobSettings contains all the transcode settings for a job."
    },
    "JobStatus": {
      "type": "string",
      "documentation": "A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.",
      "enum": [
        "SUBMITTED",
        "PROGRESSING",
        "COMPLETE",
        "CANCELED",
        "ERROR"
      ]
    },
    "JobTemplate": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "An identifier for this resource that is unique within all of AWS."
        },
        "Category": {
          "shape": "__string",
          "locationName": "category",
          "documentation": "An optional category you create to organize your job templates."
        },
        "CreatedAt": {
          "shape": "__timestampUnix",
          "locationName": "createdAt",
          "documentation": "The timestamp in epoch seconds for Job template creation."
        },
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "An optional description you create for each job template."
        },
        "LastUpdated": {
          "shape": "__timestampUnix",
          "locationName": "lastUpdated",
          "documentation": "The timestamp in epoch seconds when the Job template was last updated."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "A name you create for each job template. Each name must be unique within your account."
        },
        "Queue": {
          "shape": "__string",
          "locationName": "queue",
          "documentation": "Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue."
        },
        "Settings": {
          "shape": "JobTemplateSettings",
          "locationName": "settings"
        },
        "Type": {
          "shape": "Type",
          "locationName": "type",
          "documentation": "A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user."
        }
      },
      "documentation": "A job template is a pre-made set of encoding instructions that you can use to quickly create a job.",
      "required": [
        "Settings",
        "Name"
      ]
    },
    "JobTemplateListBy": {
      "type": "string",
      "documentation": "Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
      "enum": [
        "NAME",
        "CREATION_DATE",
        "SYSTEM"
      ]
    },
    "JobTemplateSettings": {
      "type": "structure",
      "members": {
        "AdAvailOffset": {
          "shape": "__integerMinNegative1000Max1000",
          "locationName": "adAvailOffset",
          "documentation": "When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time."
        },
        "AvailBlanking": {
          "shape": "AvailBlanking",
          "locationName": "availBlanking",
          "documentation": "Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails."
        },
        "Inputs": {
          "shape": "__listOfInputTemplate",
          "locationName": "inputs",
          "documentation": "Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template.  Using the API, you can include multiple inputs when referencing a job template."
        },
        "NielsenConfiguration": {
          "shape": "NielsenConfiguration",
          "locationName": "nielsenConfiguration"
        },
        "OutputGroups": {
          "shape": "__listOfOutputGroup",
          "locationName": "outputGroups",
          "documentation": "(OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings"
        },
        "TimecodeConfig": {
          "shape": "TimecodeConfig",
          "locationName": "timecodeConfig",
          "documentation": "Contains settings used to acquire and adjust timecode information from inputs."
        },
        "TimedMetadataInsertion": {
          "shape": "TimedMetadataInsertion",
          "locationName": "timedMetadataInsertion"
        }
      },
      "documentation": "JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it."
    },
    "LanguageCode": {
      "type": "string",
      "documentation": "Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.",
      "enum": [
        "ENG",
        "SPA",
        "FRA",
        "DEU",
        "GER",
        "ZHO",
        "ARA",
        "HIN",
        "JPN",
        "RUS",
        "POR",
        "ITA",
        "URD",
        "VIE",
        "KOR",
        "PAN",
        "ABK",
        "AAR",
        "AFR",
        "AKA",
        "SQI",
        "AMH",
        "ARG",
        "HYE",
        "ASM",
        "AVA",
        "AVE",
        "AYM",
        "AZE",
        "BAM",
        "BAK",
        "EUS",
        "BEL",
        "BEN",
        "BIH",
        "BIS",
        "BOS",
        "BRE",
        "BUL",
        "MYA",
        "CAT",
        "KHM",
        "CHA",
        "CHE",
        "NYA",
        "CHU",
        "CHV",
        "COR",
        "COS",
        "CRE",
        "HRV",
        "CES",
        "DAN",
        "DIV",
        "NLD",
        "DZO",
        "ENM",
        "EPO",
        "EST",
        "EWE",
        "FAO",
        "FIJ",
        "FIN",
        "FRM",
        "FUL",
        "GLA",
        "GLG",
        "LUG",
        "KAT",
        "ELL",
        "GRN",
        "GUJ",
        "HAT",
        "HAU",
        "HEB",
        "HER",
        "HMO",
        "HUN",
        "ISL",
        "IDO",
        "IBO",
        "IND",
        "INA",
        "ILE",
        "IKU",
        "IPK",
        "GLE",
        "JAV",
        "KAL",
        "KAN",
        "KAU",
        "KAS",
        "KAZ",
        "KIK",
        "KIN",
        "KIR",
        "KOM",
        "KON",
        "KUA",
        "KUR",
        "LAO",
        "LAT",
        "LAV",
        "LIM",
        "LIN",
        "LIT",
        "LUB",
        "LTZ",
        "MKD",
        "MLG",
        "MSA",
        "MAL",
        "MLT",
        "GLV",
        "MRI",
        "MAR",
        "MAH",
        "MON",
        "NAU",
        "NAV",
        "NDE",
        "NBL",
        "NDO",
        "NEP",
        "SME",
        "NOR",
        "NOB",
        "NNO",
        "OCI",
        "OJI",
        "ORI",
        "ORM",
        "OSS",
        "PLI",
        "FAS",
        "POL",
        "PUS",
        "QUE",
        "QAA",
        "RON",
        "ROH",
        "RUN",
        "SMO",
        "SAG",
        "SAN",
        "SRD",
        "SRB",
        "SNA",
        "III",
        "SND",
        "SIN",
        "SLK",
        "SLV",
        "SOM",
        "SOT",
        "SUN",
        "SWA",
        "SSW",
        "SWE",
        "TGL",
        "TAH",
        "TGK",
        "TAM",
        "TAT",
        "TEL",
        "THA",
        "BOD",
        "TIR",
        "TON",
        "TSO",
        "TSN",
        "TUR",
        "TUK",
        "TWI",
        "UIG",
        "UKR",
        "UZB",
        "VEN",
        "VOL",
        "WLN",
        "CYM",
        "FRY",
        "WOL",
        "XHO",
        "YID",
        "YOR",
        "ZHA",
        "ZUL",
        "ORJ",
        "QPC",
        "TNG"
      ]
    },
    "ListJobTemplatesRequest": {
      "type": "structure",
      "members": {
        "Category": {
          "shape": "__string",
          "locationName": "category",
          "documentation": "Optionally, specify a job template category to limit responses to only job templates from that category.",
          "location": "querystring"
        },
        "ListBy": {
          "shape": "JobTemplateListBy",
          "locationName": "listBy",
          "location": "querystring"
        },
        "MaxResults": {
          "shape": "__integerMin1Max20",
          "locationName": "maxResults",
          "documentation": "Optional. Number of job templates, up to twenty, that will be returned at one time.",
          "location": "querystring"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string, provided with the response to a previous request, to request the next batch of job templates.",
          "location": "querystring"
        },
        "Order": {
          "shape": "Order",
          "locationName": "order",
          "location": "querystring"
        }
      }
    },
    "ListJobTemplatesResponse": {
      "type": "structure",
      "members": {
        "JobTemplates": {
          "shape": "__listOfJobTemplate",
          "locationName": "jobTemplates",
          "documentation": "List of Job templates."
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string to request the next batch of job templates."
        }
      }
    },
    "ListJobsRequest": {
      "type": "structure",
      "members": {
        "MaxResults": {
          "shape": "__integerMin1Max20",
          "locationName": "maxResults",
          "documentation": "Optional. Number of jobs, up to twenty, that will be returned at one time.",
          "location": "querystring"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string, provided with the response to a previous request, to request the next batch of jobs.",
          "location": "querystring"
        },
        "Order": {
          "shape": "Order",
          "locationName": "order",
          "location": "querystring"
        },
        "Queue": {
          "shape": "__string",
          "locationName": "queue",
          "documentation": "Provide a queue name to get back only jobs from that queue.",
          "location": "querystring"
        },
        "Status": {
          "shape": "JobStatus",
          "locationName": "status",
          "location": "querystring"
        }
      }
    },
    "ListJobsResponse": {
      "type": "structure",
      "members": {
        "Jobs": {
          "shape": "__listOfJob",
          "locationName": "jobs",
          "documentation": "List of jobs"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string to request the next batch of jobs."
        }
      }
    },
    "ListPresetsRequest": {
      "type": "structure",
      "members": {
        "Category": {
          "shape": "__string",
          "locationName": "category",
          "documentation": "Optionally, specify a preset category to limit responses to only presets from that category.",
          "location": "querystring"
        },
        "ListBy": {
          "shape": "PresetListBy",
          "locationName": "listBy",
          "location": "querystring"
        },
        "MaxResults": {
          "shape": "__integerMin1Max20",
          "locationName": "maxResults",
          "documentation": "Optional. Number of presets, up to twenty, that will be returned at one time",
          "location": "querystring"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string, provided with the response to a previous request, to request the next batch of presets.",
          "location": "querystring"
        },
        "Order": {
          "shape": "Order",
          "locationName": "order",
          "location": "querystring"
        }
      }
    },
    "ListPresetsResponse": {
      "type": "structure",
      "members": {
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string to request the next batch of presets."
        },
        "Presets": {
          "shape": "__listOfPreset",
          "locationName": "presets",
          "documentation": "List of presets"
        }
      }
    },
    "ListQueuesRequest": {
      "type": "structure",
      "members": {
        "ListBy": {
          "shape": "QueueListBy",
          "locationName": "listBy",
          "location": "querystring"
        },
        "MaxResults": {
          "shape": "__integerMin1Max20",
          "locationName": "maxResults",
          "documentation": "Optional. Number of queues, up to twenty, that will be returned at one time.",
          "location": "querystring"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string, provided with the response to a previous request, to request the next batch of queues.",
          "location": "querystring"
        },
        "Order": {
          "shape": "Order",
          "locationName": "order",
          "location": "querystring"
        }
      }
    },
    "ListQueuesResponse": {
      "type": "structure",
      "members": {
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Use this string to request the next batch of queues."
        },
        "Queues": {
          "shape": "__listOfQueue",
          "locationName": "queues",
          "documentation": "List of queues."
        }
      }
    },
    "ListTagsForResourceRequest": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.",
          "location": "uri"
        }
      },
      "required": [
        "Arn"
      ]
    },
    "ListTagsForResourceResponse": {
      "type": "structure",
      "members": {
        "ResourceTags": {
          "shape": "ResourceTags",
          "locationName": "resourceTags"
        }
      }
    },
    "M2tsAudioBufferModel": {
      "type": "string",
      "documentation": "Selects between the DVB and ATSC buffer models for Dolby Digital audio.",
      "enum": [
        "DVB",
        "ATSC"
      ]
    },
    "M2tsBufferModel": {
      "type": "string",
      "documentation": "Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex  buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.",
      "enum": [
        "MULTIPLEX",
        "NONE"
      ]
    },
    "M2tsEbpAudioInterval": {
      "type": "string",
      "documentation": "When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).",
      "enum": [
        "VIDEO_AND_FIXED_INTERVALS",
        "VIDEO_INTERVAL"
      ]
    },
    "M2tsEbpPlacement": {
      "type": "string",
      "documentation": "Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).",
      "enum": [
        "VIDEO_AND_AUDIO_PIDS",
        "VIDEO_PID"
      ]
    },
    "M2tsEsRateInPes": {
      "type": "string",
      "documentation": "Controls whether to include the ES Rate field in the PES header.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "M2tsNielsenId3": {
      "type": "string",
      "documentation": "If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.",
      "enum": [
        "INSERT",
        "NONE"
      ]
    },
    "M2tsPcrControl": {
      "type": "string",
      "documentation": "When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.",
      "enum": [
        "PCR_EVERY_PES_PACKET",
        "CONFIGURED_PCR_PERIOD"
      ]
    },
    "M2tsRateMode": {
      "type": "string",
      "documentation": "When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.",
      "enum": [
        "VBR",
        "CBR"
      ]
    },
    "M2tsScte35Source": {
      "type": "string",
      "documentation": "Enables SCTE-35 passthrough (scte35Source) to pass any SCTE-35 signals from input to output.",
      "enum": [
        "PASSTHROUGH",
        "NONE"
      ]
    },
    "M2tsSegmentationMarkers": {
      "type": "string",
      "documentation": "Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.",
      "enum": [
        "NONE",
        "RAI_SEGSTART",
        "RAI_ADAPT",
        "PSI_SEGSTART",
        "EBP",
        "EBP_LEGACY"
      ]
    },
    "M2tsSegmentationStyle": {
      "type": "string",
      "documentation": "The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of \"reset_cadence\" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of \"maintain_cadence\" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.",
      "enum": [
        "MAINTAIN_CADENCE",
        "RESET_CADENCE"
      ]
    },
    "M2tsSettings": {
      "type": "structure",
      "members": {
        "AudioBufferModel": {
          "shape": "M2tsAudioBufferModel",
          "locationName": "audioBufferModel"
        },
        "AudioFramesPerPes": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "audioFramesPerPes",
          "documentation": "The number of audio frames to insert for each PES packet."
        },
        "AudioPids": {
          "shape": "__listOf__integerMin32Max8182",
          "locationName": "audioPids",
          "documentation": "Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation."
        },
        "Bitrate": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "bitrate",
          "documentation": "The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate. Other common values are 3750000, 7500000, and 15000000."
        },
        "BufferModel": {
          "shape": "M2tsBufferModel",
          "locationName": "bufferModel"
        },
        "DvbNitSettings": {
          "shape": "DvbNitSettings",
          "locationName": "dvbNitSettings"
        },
        "DvbSdtSettings": {
          "shape": "DvbSdtSettings",
          "locationName": "dvbSdtSettings"
        },
        "DvbSubPids": {
          "shape": "__listOf__integerMin32Max8182",
          "locationName": "dvbSubPids",
          "documentation": "Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation."
        },
        "DvbTdtSettings": {
          "shape": "DvbTdtSettings",
          "locationName": "dvbTdtSettings"
        },
        "DvbTeletextPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "dvbTeletextPid",
          "documentation": "Packet Identifier (PID) for input source DVB Teletext data to this output."
        },
        "EbpAudioInterval": {
          "shape": "M2tsEbpAudioInterval",
          "locationName": "ebpAudioInterval"
        },
        "EbpPlacement": {
          "shape": "M2tsEbpPlacement",
          "locationName": "ebpPlacement"
        },
        "EsRateInPes": {
          "shape": "M2tsEsRateInPes",
          "locationName": "esRateInPes"
        },
        "FragmentTime": {
          "shape": "__doubleMin0",
          "locationName": "fragmentTime",
          "documentation": "The length in seconds of each fragment. Only used with EBP markers."
        },
        "MaxPcrInterval": {
          "shape": "__integerMin0Max500",
          "locationName": "maxPcrInterval",
          "documentation": "Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream."
        },
        "MinEbpInterval": {
          "shape": "__integerMin0Max10000",
          "locationName": "minEbpInterval",
          "documentation": "When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is \"stretched\" to the next marker. The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate."
        },
        "NielsenId3": {
          "shape": "M2tsNielsenId3",
          "locationName": "nielsenId3"
        },
        "NullPacketBitrate": {
          "shape": "__doubleMin0",
          "locationName": "nullPacketBitrate",
          "documentation": "Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets."
        },
        "PatInterval": {
          "shape": "__integerMin0Max1000",
          "locationName": "patInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        },
        "PcrControl": {
          "shape": "M2tsPcrControl",
          "locationName": "pcrControl"
        },
        "PcrPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "pcrPid",
          "documentation": "Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID."
        },
        "PmtInterval": {
          "shape": "__integerMin0Max1000",
          "locationName": "pmtInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        },
        "PmtPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "pmtPid",
          "documentation": "Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream."
        },
        "PrivateMetadataPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "privateMetadataPid",
          "documentation": "Packet Identifier (PID) of the private metadata stream in the transport stream."
        },
        "ProgramNumber": {
          "shape": "__integerMin0Max65535",
          "locationName": "programNumber",
          "documentation": "The value of the program number field in the Program Map Table."
        },
        "RateMode": {
          "shape": "M2tsRateMode",
          "locationName": "rateMode"
        },
        "Scte35Pid": {
          "shape": "__integerMin32Max8182",
          "locationName": "scte35Pid",
          "documentation": "Packet Identifier (PID) of the SCTE-35 stream in the transport stream."
        },
        "Scte35Source": {
          "shape": "M2tsScte35Source",
          "locationName": "scte35Source"
        },
        "SegmentationMarkers": {
          "shape": "M2tsSegmentationMarkers",
          "locationName": "segmentationMarkers"
        },
        "SegmentationStyle": {
          "shape": "M2tsSegmentationStyle",
          "locationName": "segmentationStyle"
        },
        "SegmentationTime": {
          "shape": "__doubleMin0",
          "locationName": "segmentationTime",
          "documentation": "The length in seconds of each segment. Required unless markers is set to _none_."
        },
        "TimedMetadataPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "timedMetadataPid",
          "documentation": "Packet Identifier (PID) of the timed metadata stream in the transport stream."
        },
        "TransportStreamId": {
          "shape": "__integerMin0Max65535",
          "locationName": "transportStreamId",
          "documentation": "The value of the transport stream ID field in the Program Map Table."
        },
        "VideoPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "videoPid",
          "documentation": "Packet Identifier (PID) of the elementary video stream in the transport stream."
        }
      },
      "documentation": "Settings for M2TS Container."
    },
    "M3u8NielsenId3": {
      "type": "string",
      "documentation": "If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.",
      "enum": [
        "INSERT",
        "NONE"
      ]
    },
    "M3u8PcrControl": {
      "type": "string",
      "documentation": "When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.",
      "enum": [
        "PCR_EVERY_PES_PACKET",
        "CONFIGURED_PCR_PERIOD"
      ]
    },
    "M3u8Scte35Source": {
      "type": "string",
      "documentation": "Enables SCTE-35 passthrough (scte35Source) to pass any SCTE-35 signals from input to output.",
      "enum": [
        "PASSTHROUGH",
        "NONE"
      ]
    },
    "M3u8Settings": {
      "type": "structure",
      "members": {
        "AudioFramesPerPes": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "audioFramesPerPes",
          "documentation": "The number of audio frames to insert for each PES packet."
        },
        "AudioPids": {
          "shape": "__listOf__integerMin32Max8182",
          "locationName": "audioPids",
          "documentation": "Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation."
        },
        "NielsenId3": {
          "shape": "M3u8NielsenId3",
          "locationName": "nielsenId3"
        },
        "PatInterval": {
          "shape": "__integerMin0Max1000",
          "locationName": "patInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        },
        "PcrControl": {
          "shape": "M3u8PcrControl",
          "locationName": "pcrControl"
        },
        "PcrPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "pcrPid",
          "documentation": "Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID."
        },
        "PmtInterval": {
          "shape": "__integerMin0Max1000",
          "locationName": "pmtInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        },
        "PmtPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "pmtPid",
          "documentation": "Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream."
        },
        "PrivateMetadataPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "privateMetadataPid",
          "documentation": "Packet Identifier (PID) of the private metadata stream in the transport stream."
        },
        "ProgramNumber": {
          "shape": "__integerMin0Max65535",
          "locationName": "programNumber",
          "documentation": "The value of the program number field in the Program Map Table."
        },
        "Scte35Pid": {
          "shape": "__integerMin32Max8182",
          "locationName": "scte35Pid",
          "documentation": "Packet Identifier (PID) of the SCTE-35 stream in the transport stream."
        },
        "Scte35Source": {
          "shape": "M3u8Scte35Source",
          "locationName": "scte35Source"
        },
        "TimedMetadata": {
          "shape": "TimedMetadata",
          "locationName": "timedMetadata"
        },
        "TimedMetadataPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "timedMetadataPid",
          "documentation": "Packet Identifier (PID) of the timed metadata stream in the transport stream."
        },
        "TransportStreamId": {
          "shape": "__integerMin0Max65535",
          "locationName": "transportStreamId",
          "documentation": "The value of the transport stream ID field in the Program Map Table."
        },
        "VideoPid": {
          "shape": "__integerMin32Max8182",
          "locationName": "videoPid",
          "documentation": "Packet Identifier (PID) of the elementary video stream in the transport stream."
        }
      },
      "documentation": "Settings for TS segments in HLS"
    },
    "MovClapAtom": {
      "type": "string",
      "documentation": "When enabled, include 'clap' atom if appropriate for the video output settings.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "MovCslgAtom": {
      "type": "string",
      "documentation": "When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "MovMpeg2FourCCControl": {
      "type": "string",
      "documentation": "When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.",
      "enum": [
        "XDCAM",
        "MPEG"
      ]
    },
    "MovPaddingControl": {
      "type": "string",
      "documentation": "If set to OMNEON, inserts Omneon-compatible padding",
      "enum": [
        "OMNEON",
        "NONE"
      ]
    },
    "MovReference": {
      "type": "string",
      "documentation": "A value of 'external' creates separate media files and the wrapper file (.mov) contains references to these media files. A value of 'self_contained' creates only a wrapper (.mov) file and this file contains all of the media.",
      "enum": [
        "SELF_CONTAINED",
        "EXTERNAL"
      ]
    },
    "MovSettings": {
      "type": "structure",
      "members": {
        "ClapAtom": {
          "shape": "MovClapAtom",
          "locationName": "clapAtom"
        },
        "CslgAtom": {
          "shape": "MovCslgAtom",
          "locationName": "cslgAtom"
        },
        "Mpeg2FourCCControl": {
          "shape": "MovMpeg2FourCCControl",
          "locationName": "mpeg2FourCCControl"
        },
        "PaddingControl": {
          "shape": "MovPaddingControl",
          "locationName": "paddingControl"
        },
        "Reference": {
          "shape": "MovReference",
          "locationName": "reference"
        }
      },
      "documentation": "Settings for MOV Container."
    },
    "Mp2Settings": {
      "type": "structure",
      "members": {
        "Bitrate": {
          "shape": "__integerMin32000Max384000",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second."
        },
        "Channels": {
          "shape": "__integerMin1Max2",
          "locationName": "channels",
          "documentation": "Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2."
        },
        "SampleRate": {
          "shape": "__integerMin32000Max48000",
          "locationName": "sampleRate",
          "documentation": "Sample rate in hz."
        }
      },
      "documentation": "Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2."
    },
    "Mp4CslgAtom": {
      "type": "string",
      "documentation": "When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "Mp4FreeSpaceBox": {
      "type": "string",
      "documentation": "Inserts a free-space box immediately after the moov box.",
      "enum": [
        "INCLUDE",
        "EXCLUDE"
      ]
    },
    "Mp4MoovPlacement": {
      "type": "string",
      "documentation": "If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.",
      "enum": [
        "PROGRESSIVE_DOWNLOAD",
        "NORMAL"
      ]
    },
    "Mp4Settings": {
      "type": "structure",
      "members": {
        "CslgAtom": {
          "shape": "Mp4CslgAtom",
          "locationName": "cslgAtom"
        },
        "FreeSpaceBox": {
          "shape": "Mp4FreeSpaceBox",
          "locationName": "freeSpaceBox"
        },
        "MoovPlacement": {
          "shape": "Mp4MoovPlacement",
          "locationName": "moovPlacement"
        },
        "Mp4MajorBrand": {
          "shape": "__string",
          "locationName": "mp4MajorBrand",
          "documentation": "Overrides the \"Major Brand\" field in the output file. Usually not necessary to specify."
        }
      },
      "documentation": "Settings for MP4 Container"
    },
    "Mpeg2AdaptiveQuantization": {
      "type": "string",
      "documentation": "Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.",
      "enum": [
        "OFF",
        "LOW",
        "MEDIUM",
        "HIGH"
      ]
    },
    "Mpeg2CodecLevel": {
      "type": "string",
      "documentation": "Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.",
      "enum": [
        "AUTO",
        "LOW",
        "MAIN",
        "HIGH1440",
        "HIGH"
      ]
    },
    "Mpeg2CodecProfile": {
      "type": "string",
      "documentation": "Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.",
      "enum": [
        "MAIN",
        "PROFILE_422"
      ]
    },
    "Mpeg2DynamicSubGop": {
      "type": "string",
      "documentation": "Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).",
      "enum": [
        "ADAPTIVE",
        "STATIC"
      ]
    },
    "Mpeg2FramerateControl": {
      "type": "string",
      "documentation": "If you are using the console, use the Framerate setting to specify the framerate for this output. If you want to keep the same framerate as the input video, choose Follow source. If you want to do framerate conversion, choose a framerate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your framerate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the framerate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Choose SPECIFIED if you want the service to use the framerate you specify in the settings FramerateNumerator and FramerateDenominator.",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ]
    },
    "Mpeg2FramerateConversionAlgorithm": {
      "type": "string",
      "documentation": "When set to INTERPOLATE, produces smoother motion during framerate conversion.",
      "enum": [
        "DUPLICATE_DROP",
        "INTERPOLATE"
      ]
    },
    "Mpeg2GopSizeUnits": {
      "type": "string",
      "documentation": "Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.",
      "enum": [
        "FRAMES",
        "SECONDS"
      ]
    },
    "Mpeg2InterlaceMode": {
      "type": "string",
      "documentation": "Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.\n  - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of \"top field first\" and \"bottom field first\".\n  - If the source is progressive, the output will be interlaced with \"top field first\" or \"bottom field first\" polarity, depending on which of the Follow options you chose.",
      "enum": [
        "PROGRESSIVE",
        "TOP_FIELD",
        "BOTTOM_FIELD",
        "FOLLOW_TOP_FIELD",
        "FOLLOW_BOTTOM_FIELD"
      ]
    },
    "Mpeg2IntraDcPrecision": {
      "type": "string",
      "documentation": "Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.",
      "enum": [
        "AUTO",
        "INTRA_DC_PRECISION_8",
        "INTRA_DC_PRECISION_9",
        "INTRA_DC_PRECISION_10",
        "INTRA_DC_PRECISION_11"
      ]
    },
    "Mpeg2ParControl": {
      "type": "string",
      "documentation": "Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ]
    },
    "Mpeg2QualityTuningLevel": {
      "type": "string",
      "documentation": "Use Quality tuning level (Mpeg2QualityTuningLevel) to specifiy whether to use single-pass or multipass video encoding.",
      "enum": [
        "SINGLE_PASS",
        "MULTI_PASS"
      ]
    },
    "Mpeg2RateControlMode": {
      "type": "string",
      "documentation": "Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr).",
      "enum": [
        "VBR",
        "CBR"
      ]
    },
    "Mpeg2SceneChangeDetect": {
      "type": "string",
      "documentation": "Scene change detection (inserts I-frames on scene changes).",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "Mpeg2Settings": {
      "type": "structure",
      "members": {
        "AdaptiveQuantization": {
          "shape": "Mpeg2AdaptiveQuantization",
          "locationName": "adaptiveQuantization"
        },
        "Bitrate": {
          "shape": "__integerMin1000Max288000000",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000."
        },
        "CodecLevel": {
          "shape": "Mpeg2CodecLevel",
          "locationName": "codecLevel"
        },
        "CodecProfile": {
          "shape": "Mpeg2CodecProfile",
          "locationName": "codecProfile"
        },
        "DynamicSubGop": {
          "shape": "Mpeg2DynamicSubGop",
          "locationName": "dynamicSubGop",
          "documentation": "Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames)."
        },
        "FramerateControl": {
          "shape": "Mpeg2FramerateControl",
          "locationName": "framerateControl"
        },
        "FramerateConversionAlgorithm": {
          "shape": "Mpeg2FramerateConversionAlgorithm",
          "locationName": "framerateConversionAlgorithm"
        },
        "FramerateDenominator": {
          "shape": "__integerMin1Max1001",
          "locationName": "framerateDenominator",
          "documentation": "Framerate denominator."
        },
        "FramerateNumerator": {
          "shape": "__integerMin24Max60000",
          "locationName": "framerateNumerator",
          "documentation": "Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps."
        },
        "GopClosedCadence": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "gopClosedCadence",
          "documentation": "Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting."
        },
        "GopSize": {
          "shape": "__doubleMin0",
          "locationName": "gopSize",
          "documentation": "GOP Length (keyframe interval) in frames or seconds. Must be greater than zero."
        },
        "GopSizeUnits": {
          "shape": "Mpeg2GopSizeUnits",
          "locationName": "gopSizeUnits"
        },
        "HrdBufferInitialFillPercentage": {
          "shape": "__integerMin0Max100",
          "locationName": "hrdBufferInitialFillPercentage",
          "documentation": "Percentage of the buffer that should initially be filled (HRD buffer model)."
        },
        "HrdBufferSize": {
          "shape": "__integerMin0Max47185920",
          "locationName": "hrdBufferSize",
          "documentation": "Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000."
        },
        "InterlaceMode": {
          "shape": "Mpeg2InterlaceMode",
          "locationName": "interlaceMode"
        },
        "IntraDcPrecision": {
          "shape": "Mpeg2IntraDcPrecision",
          "locationName": "intraDcPrecision"
        },
        "MaxBitrate": {
          "shape": "__integerMin1000Max300000000",
          "locationName": "maxBitrate",
          "documentation": "Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000."
        },
        "MinIInterval": {
          "shape": "__integerMin0Max30",
          "locationName": "minIInterval",
          "documentation": "Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1"
        },
        "NumberBFramesBetweenReferenceFrames": {
          "shape": "__integerMin0Max7",
          "locationName": "numberBFramesBetweenReferenceFrames",
          "documentation": "Number of B-frames between reference frames."
        },
        "ParControl": {
          "shape": "Mpeg2ParControl",
          "locationName": "parControl"
        },
        "ParDenominator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "parDenominator",
          "documentation": "Pixel Aspect Ratio denominator."
        },
        "ParNumerator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "parNumerator",
          "documentation": "Pixel Aspect Ratio numerator."
        },
        "QualityTuningLevel": {
          "shape": "Mpeg2QualityTuningLevel",
          "locationName": "qualityTuningLevel"
        },
        "RateControlMode": {
          "shape": "Mpeg2RateControlMode",
          "locationName": "rateControlMode"
        },
        "SceneChangeDetect": {
          "shape": "Mpeg2SceneChangeDetect",
          "locationName": "sceneChangeDetect"
        },
        "SlowPal": {
          "shape": "Mpeg2SlowPal",
          "locationName": "slowPal"
        },
        "Softness": {
          "shape": "__integerMin0Max128",
          "locationName": "softness",
          "documentation": "Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image."
        },
        "SpatialAdaptiveQuantization": {
          "shape": "Mpeg2SpatialAdaptiveQuantization",
          "locationName": "spatialAdaptiveQuantization"
        },
        "Syntax": {
          "shape": "Mpeg2Syntax",
          "locationName": "syntax"
        },
        "Telecine": {
          "shape": "Mpeg2Telecine",
          "locationName": "telecine"
        },
        "TemporalAdaptiveQuantization": {
          "shape": "Mpeg2TemporalAdaptiveQuantization",
          "locationName": "temporalAdaptiveQuantization"
        }
      },
      "documentation": "Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2."
    },
    "Mpeg2SlowPal": {
      "type": "string",
      "documentation": "Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "Mpeg2SpatialAdaptiveQuantization": {
      "type": "string",
      "documentation": "Adjust quantization within each frame based on spatial variation of content complexity.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "Mpeg2Syntax": {
      "type": "string",
      "documentation": "Produces a Type D-10 compatible bitstream (SMPTE 356M-2001).",
      "enum": [
        "DEFAULT",
        "D_10"
      ]
    },
    "Mpeg2Telecine": {
      "type": "string",
      "documentation": "Only use Telecine (Mpeg2Telecine) when you set Framerate (Framerate) to 29.970. Set Telecine (Mpeg2Telecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.",
      "enum": [
        "NONE",
        "SOFT",
        "HARD"
      ]
    },
    "Mpeg2TemporalAdaptiveQuantization": {
      "type": "string",
      "documentation": "Adjust quantization within each frame based on temporal variation of content complexity.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "MsSmoothAudioDeduplication": {
      "type": "string",
      "documentation": "COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.",
      "enum": [
        "COMBINE_DUPLICATE_STREAMS",
        "NONE"
      ]
    },
    "MsSmoothEncryptionSettings": {
      "type": "structure",
      "members": {
        "SpekeKeyProvider": {
          "shape": "SpekeKeyProvider",
          "locationName": "spekeKeyProvider"
        }
      },
      "documentation": "If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider."
    },
    "MsSmoothGroupSettings": {
      "type": "structure",
      "members": {
        "AudioDeduplication": {
          "shape": "MsSmoothAudioDeduplication",
          "locationName": "audioDeduplication"
        },
        "Destination": {
          "shape": "__stringPatternS3",
          "locationName": "destination",
          "documentation": "Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file."
        },
        "Encryption": {
          "shape": "MsSmoothEncryptionSettings",
          "locationName": "encryption"
        },
        "FragmentLength": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "fragmentLength",
          "documentation": "Use Fragment length (FragmentLength) to specify the mp4 fragment sizes in seconds. Fragment length must be compatible with GOP size and framerate."
        },
        "ManifestEncoding": {
          "shape": "MsSmoothManifestEncoding",
          "locationName": "manifestEncoding"
        }
      },
      "documentation": "Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS."
    },
    "MsSmoothManifestEncoding": {
      "type": "string",
      "documentation": "Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.",
      "enum": [
        "UTF8",
        "UTF16"
      ]
    },
    "NielsenConfiguration": {
      "type": "structure",
      "members": {
        "BreakoutCode": {
          "shape": "__integerMin0Max9",
          "locationName": "breakoutCode",
          "documentation": "Use Nielsen Configuration (NielsenConfiguration) to set the Nielsen measurement system breakout code. Supported values are 0, 3, 7, and 9."
        },
        "DistributorId": {
          "shape": "__string",
          "locationName": "distributorId",
          "documentation": "Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen."
        }
      },
      "documentation": "Settings for Nielsen Configuration"
    },
    "NoiseReducer": {
      "type": "structure",
      "members": {
        "Filter": {
          "shape": "NoiseReducerFilter",
          "locationName": "filter"
        },
        "FilterSettings": {
          "shape": "NoiseReducerFilterSettings",
          "locationName": "filterSettings"
        },
        "SpatialFilterSettings": {
          "shape": "NoiseReducerSpatialFilterSettings",
          "locationName": "spatialFilterSettings"
        }
      },
      "documentation": "Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter)."
    },
    "NoiseReducerFilter": {
      "type": "string",
      "documentation": "Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral is an edge preserving noise reduction filter. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) are convolution filters. * Conserve is a min/max noise reduction filter. * Spatial is a frequency-domain filter based on JND principles.",
      "enum": [
        "BILATERAL",
        "MEAN",
        "GAUSSIAN",
        "LANCZOS",
        "SHARPEN",
        "CONSERVE",
        "SPATIAL"
      ]
    },
    "NoiseReducerFilterSettings": {
      "type": "structure",
      "members": {
        "Strength": {
          "shape": "__integerMin0Max3",
          "locationName": "strength",
          "documentation": "Relative strength of noise reducing filter. Higher values produce stronger filtering."
        }
      },
      "documentation": "Settings for a noise reducer filter"
    },
    "NoiseReducerSpatialFilterSettings": {
      "type": "structure",
      "members": {
        "PostFilterSharpenStrength": {
          "shape": "__integerMin0Max3",
          "locationName": "postFilterSharpenStrength",
          "documentation": "Specify strength of post noise reduction sharpening filter, with 0 disabling the filter and 3 enabling it at maximum strength."
        },
        "Speed": {
          "shape": "__integerMinNegative2Max3",
          "locationName": "speed",
          "documentation": "The speed of the filter, from -2 (lower speed) to 3 (higher speed), with 0 being the nominal value."
        },
        "Strength": {
          "shape": "__integerMin0Max16",
          "locationName": "strength",
          "documentation": "Relative strength of noise reducing filter. Higher values produce stronger filtering."
        }
      },
      "documentation": "Noise reducer filter settings for spatial filter."
    },
    "NotFoundException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 404
      },
      "documentation": "The resource you requested doesn't exist."
    },
    "Order": {
      "type": "string",
      "documentation": "When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "Output": {
      "type": "structure",
      "members": {
        "AudioDescriptions": {
          "shape": "__listOfAudioDescription",
          "locationName": "audioDescriptions",
          "documentation": "(AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings."
        },
        "CaptionDescriptions": {
          "shape": "__listOfCaptionDescription",
          "locationName": "captionDescriptions",
          "documentation": "(CaptionDescriptions) contains groups of captions settings. For each output that has captions, include one instance of (CaptionDescriptions). (CaptionDescriptions) can contain multiple groups of captions settings."
        },
        "ContainerSettings": {
          "shape": "ContainerSettings",
          "locationName": "containerSettings"
        },
        "Extension": {
          "shape": "__string",
          "locationName": "extension",
          "documentation": "Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)"
        },
        "NameModifier": {
          "shape": "__stringMin1",
          "locationName": "nameModifier",
          "documentation": "Use Name modifier (NameModifier) to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier (NameModifier) is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group."
        },
        "OutputSettings": {
          "shape": "OutputSettings",
          "locationName": "outputSettings"
        },
        "Preset": {
          "shape": "__stringMin0",
          "locationName": "preset",
          "documentation": "Use Preset (Preset) to specifiy a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both."
        },
        "VideoDescription": {
          "shape": "VideoDescription",
          "locationName": "videoDescription",
          "documentation": "(VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output."
        }
      },
      "documentation": "An output object describes the settings for a single output file or stream in an output group."
    },
    "OutputChannelMapping": {
      "type": "structure",
      "members": {
        "InputChannels": {
          "shape": "__listOf__integerMinNegative60Max6",
          "locationName": "inputChannels",
          "documentation": "List of input channels"
        }
      },
      "documentation": "OutputChannel mapping settings."
    },
    "OutputDetail": {
      "type": "structure",
      "members": {
        "DurationInMs": {
          "shape": "__integer",
          "locationName": "durationInMs",
          "documentation": "Duration in milliseconds"
        },
        "VideoDetails": {
          "shape": "VideoDetail",
          "locationName": "videoDetails"
        }
      },
      "documentation": "Details regarding output"
    },
    "OutputGroup": {
      "type": "structure",
      "members": {
        "CustomName": {
          "shape": "__string",
          "locationName": "customName",
          "documentation": "Use Custom Group Name (CustomName) to specify a name for the output group. This value is displayed on the console and can make your job settings JSON more human-readable. It does not affect your outputs. Use up to twelve characters that are either letters, numbers, spaces, or underscores."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name of the output group"
        },
        "OutputGroupSettings": {
          "shape": "OutputGroupSettings",
          "locationName": "outputGroupSettings"
        },
        "Outputs": {
          "shape": "__listOfOutput",
          "locationName": "outputs",
          "documentation": "This object holds groups of encoding settings, one group of settings per output."
        }
      },
      "documentation": "Group of outputs"
    },
    "OutputGroupDetail": {
      "type": "structure",
      "members": {
        "OutputDetails": {
          "shape": "__listOfOutputDetail",
          "locationName": "outputDetails",
          "documentation": "Details about the output"
        }
      },
      "documentation": "Contains details about the output groups specified in the job settings."
    },
    "OutputGroupSettings": {
      "type": "structure",
      "members": {
        "CmafGroupSettings": {
          "shape": "CmafGroupSettings",
          "locationName": "cmafGroupSettings"
        },
        "DashIsoGroupSettings": {
          "shape": "DashIsoGroupSettings",
          "locationName": "dashIsoGroupSettings"
        },
        "FileGroupSettings": {
          "shape": "FileGroupSettings",
          "locationName": "fileGroupSettings"
        },
        "HlsGroupSettings": {
          "shape": "HlsGroupSettings",
          "locationName": "hlsGroupSettings"
        },
        "MsSmoothGroupSettings": {
          "shape": "MsSmoothGroupSettings",
          "locationName": "msSmoothGroupSettings"
        },
        "Type": {
          "shape": "OutputGroupType",
          "locationName": "type"
        }
      },
      "documentation": "Output Group settings, including type"
    },
    "OutputGroupType": {
      "type": "string",
      "documentation": "Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)",
      "enum": [
        "HLS_GROUP_SETTINGS",
        "DASH_ISO_GROUP_SETTINGS",
        "FILE_GROUP_SETTINGS",
        "MS_SMOOTH_GROUP_SETTINGS",
        "CMAF_GROUP_SETTINGS"
      ]
    },
    "OutputSdt": {
      "type": "string",
      "documentation": "Selects method of inserting SDT information into output stream.  \"Follow input SDT\" copies SDT information from input stream to  output stream. \"Follow input SDT if present\" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter \"SDT  Manually\" means user will enter the SDT information. \"No SDT\" means output  stream will not contain SDT information.",
      "enum": [
        "SDT_FOLLOW",
        "SDT_FOLLOW_IF_PRESENT",
        "SDT_MANUAL",
        "SDT_NONE"
      ]
    },
    "OutputSettings": {
      "type": "structure",
      "members": {
        "HlsSettings": {
          "shape": "HlsSettings",
          "locationName": "hlsSettings"
        }
      },
      "documentation": "Specific settings for this type of output."
    },
    "Preset": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "An identifier for this resource that is unique within all of AWS."
        },
        "Category": {
          "shape": "__string",
          "locationName": "category",
          "documentation": "An optional category you create to organize your presets."
        },
        "CreatedAt": {
          "shape": "__timestampUnix",
          "locationName": "createdAt",
          "documentation": "The timestamp in epoch seconds for preset creation."
        },
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "An optional description you create for each preset."
        },
        "LastUpdated": {
          "shape": "__timestampUnix",
          "locationName": "lastUpdated",
          "documentation": "The timestamp in epoch seconds when the preset was last updated."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "A name you create for each preset. Each name must be unique within your account."
        },
        "Settings": {
          "shape": "PresetSettings",
          "locationName": "settings"
        },
        "Type": {
          "shape": "Type",
          "locationName": "type",
          "documentation": "A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user."
        }
      },
      "documentation": "A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.",
      "required": [
        "Settings",
        "Name"
      ]
    },
    "PresetListBy": {
      "type": "string",
      "documentation": "Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
      "enum": [
        "NAME",
        "CREATION_DATE",
        "SYSTEM"
      ]
    },
    "PresetSettings": {
      "type": "structure",
      "members": {
        "AudioDescriptions": {
          "shape": "__listOfAudioDescription",
          "locationName": "audioDescriptions",
          "documentation": "(AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings."
        },
        "CaptionDescriptions": {
          "shape": "__listOfCaptionDescriptionPreset",
          "locationName": "captionDescriptions",
          "documentation": "Caption settings for this preset. There can be multiple caption settings in a single output."
        },
        "ContainerSettings": {
          "shape": "ContainerSettings",
          "locationName": "containerSettings"
        },
        "VideoDescription": {
          "shape": "VideoDescription",
          "locationName": "videoDescription",
          "documentation": "(VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output."
        }
      },
      "documentation": "Settings for preset"
    },
    "PricingPlan": {
      "type": "string",
      "documentation": "Specifies whether the pricing plan for the queue is On-demand or Reserved. The pricing plan for the queue determines whether you pay On-demand or Reserved pricing for the transcoding jobs that you run through the queue. For Reserved queue pricing, you must set up a contract. You can create a Reserved queue contract through the AWS Elemental MediaConvert console.",
      "enum": [
        "ON_DEMAND",
        "RESERVED"
      ]
    },
    "ProresCodecProfile": {
      "type": "string",
      "documentation": "Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output.",
      "enum": [
        "APPLE_PRORES_422",
        "APPLE_PRORES_422_HQ",
        "APPLE_PRORES_422_LT",
        "APPLE_PRORES_422_PROXY"
      ]
    },
    "ProresFramerateControl": {
      "type": "string",
      "documentation": "If you are using the console, use the Framerate setting to specify the framerate for this output. If you want to keep the same framerate as the input video, choose Follow source. If you want to do framerate conversion, choose a framerate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your framerate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the framerate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Choose SPECIFIED if you want the service to use the framerate you specify in the settings FramerateNumerator and FramerateDenominator.",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ]
    },
    "ProresFramerateConversionAlgorithm": {
      "type": "string",
      "documentation": "When set to INTERPOLATE, produces smoother motion during framerate conversion.",
      "enum": [
        "DUPLICATE_DROP",
        "INTERPOLATE"
      ]
    },
    "ProresInterlaceMode": {
      "type": "string",
      "documentation": "Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.\n  - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of \"top field first\" and \"bottom field first\".\n  - If the source is progressive, the output will be interlaced with \"top field first\" or \"bottom field first\" polarity, depending on which of the Follow options you chose.",
      "enum": [
        "PROGRESSIVE",
        "TOP_FIELD",
        "BOTTOM_FIELD",
        "FOLLOW_TOP_FIELD",
        "FOLLOW_BOTTOM_FIELD"
      ]
    },
    "ProresParControl": {
      "type": "string",
      "documentation": "Use (ProresParControl) to specify how the service determines the pixel aspect ratio. Set to Follow source (INITIALIZE_FROM_SOURCE) to use the pixel aspect ratio from the input.  To specify a different pixel aspect ratio: Using the console, choose it from the dropdown menu. Using the API, set ProresParControl to (SPECIFIED) and provide  for (ParNumerator) and (ParDenominator).",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ]
    },
    "ProresSettings": {
      "type": "structure",
      "members": {
        "CodecProfile": {
          "shape": "ProresCodecProfile",
          "locationName": "codecProfile"
        },
        "FramerateControl": {
          "shape": "ProresFramerateControl",
          "locationName": "framerateControl"
        },
        "FramerateConversionAlgorithm": {
          "shape": "ProresFramerateConversionAlgorithm",
          "locationName": "framerateConversionAlgorithm"
        },
        "FramerateDenominator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "framerateDenominator",
          "documentation": "Framerate denominator."
        },
        "FramerateNumerator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "framerateNumerator",
          "documentation": "When you use the API for transcode jobs that use framerate conversion, specify the framerate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator."
        },
        "InterlaceMode": {
          "shape": "ProresInterlaceMode",
          "locationName": "interlaceMode"
        },
        "ParControl": {
          "shape": "ProresParControl",
          "locationName": "parControl"
        },
        "ParDenominator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "parDenominator",
          "documentation": "Pixel Aspect Ratio denominator."
        },
        "ParNumerator": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "parNumerator",
          "documentation": "Pixel Aspect Ratio numerator."
        },
        "SlowPal": {
          "shape": "ProresSlowPal",
          "locationName": "slowPal"
        },
        "Telecine": {
          "shape": "ProresTelecine",
          "locationName": "telecine"
        }
      },
      "documentation": "Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES."
    },
    "ProresSlowPal": {
      "type": "string",
      "documentation": "Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.",
      "enum": [
        "DISABLED",
        "ENABLED"
      ]
    },
    "ProresTelecine": {
      "type": "string",
      "documentation": "Only use Telecine (ProresTelecine) when you set Framerate (Framerate) to 29.970. Set Telecine (ProresTelecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.",
      "enum": [
        "NONE",
        "HARD"
      ]
    },
    "Queue": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "An identifier for this resource that is unique within all of AWS."
        },
        "CreatedAt": {
          "shape": "__timestampUnix",
          "locationName": "createdAt",
          "documentation": "The time stamp in epoch seconds for queue creation."
        },
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "An optional description that you create for each queue."
        },
        "LastUpdated": {
          "shape": "__timestampUnix",
          "locationName": "lastUpdated",
          "documentation": "The time stamp in epoch seconds when the queue was last updated."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "A name that you create for each queue. Each name must be unique within your account."
        },
        "PricingPlan": {
          "shape": "PricingPlan",
          "locationName": "pricingPlan",
          "documentation": "Specifies whether the pricing plan for the queue is On-demand or Reserved. The pricing plan for the queue determines whether you pay On-demand or Reserved pricing for the transcoding jobs that you run through the queue. For Reserved queue pricing, you must set up a contract. You can create a Reserved queue contract through the AWS Elemental MediaConvert console."
        },
        "ProgressingJobsCount": {
          "shape": "__integer",
          "locationName": "progressingJobsCount",
          "documentation": "The estimated number of jobs with a PROGRESSING status."
        },
        "ReservationPlan": {
          "shape": "ReservationPlan",
          "locationName": "reservationPlan",
          "documentation": "Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues."
        },
        "Status": {
          "shape": "QueueStatus",
          "locationName": "status",
          "documentation": "Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error."
        },
        "SubmittedJobsCount": {
          "shape": "__integer",
          "locationName": "submittedJobsCount",
          "documentation": "The estimated number of jobs with a SUBMITTED status."
        },
        "Type": {
          "shape": "Type",
          "locationName": "type",
          "documentation": "Specifies whether this queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues."
        }
      },
      "documentation": "You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/about-resource-allocation-and-job-prioritization.html.",
      "required": [
        "Name"
      ]
    },
    "QueueListBy": {
      "type": "string",
      "documentation": "Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.",
      "enum": [
        "NAME",
        "CREATION_DATE"
      ]
    },
    "QueueStatus": {
      "type": "string",
      "documentation": "Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error.",
      "enum": [
        "ACTIVE",
        "PAUSED"
      ]
    },
    "Rectangle": {
      "type": "structure",
      "members": {
        "Height": {
          "shape": "__integerMin2Max2147483647",
          "locationName": "height",
          "documentation": "Height of rectangle in pixels. Specify only even numbers."
        },
        "Width": {
          "shape": "__integerMin2Max2147483647",
          "locationName": "width",
          "documentation": "Width of rectangle in pixels. Specify only even numbers."
        },
        "X": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "x",
          "documentation": "The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers."
        },
        "Y": {
          "shape": "__integerMin0Max2147483647",
          "locationName": "y",
          "documentation": "The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers."
        }
      },
      "documentation": "Use Rectangle to identify a specific area of the video frame."
    },
    "RemixSettings": {
      "type": "structure",
      "members": {
        "ChannelMapping": {
          "shape": "ChannelMapping",
          "locationName": "channelMapping"
        },
        "ChannelsIn": {
          "shape": "__integerMin1Max16",
          "locationName": "channelsIn",
          "documentation": "Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different."
        },
        "ChannelsOut": {
          "shape": "__integerMin1Max8",
          "locationName": "channelsOut",
          "documentation": "Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8"
        }
      },
      "documentation": "Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides."
    },
    "RenewalType": {
      "type": "string",
      "documentation": "Specifies whether the pricing plan contract for your reserved queue automatically renews (AUTO_RENEW) or expires (EXPIRE) at the end of the contract period.",
      "enum": [
        "AUTO_RENEW",
        "EXPIRE"
      ]
    },
    "ReservationPlan": {
      "type": "structure",
      "members": {
        "Commitment": {
          "shape": "Commitment",
          "locationName": "commitment",
          "documentation": "The length of time that you commit to when you set up a pricing plan contract for a reserved queue."
        },
        "ExpiresAt": {
          "shape": "__timestampUnix",
          "locationName": "expiresAt",
          "documentation": "The time stamp, in epoch seconds, for when the pricing plan for this reserved queue expires."
        },
        "PurchasedAt": {
          "shape": "__timestampUnix",
          "locationName": "purchasedAt",
          "documentation": "The time stamp in epoch seconds when the reserved queue's reservation plan was created."
        },
        "RenewalType": {
          "shape": "RenewalType",
          "locationName": "renewalType",
          "documentation": "Specifies whether the pricing plan contract for your reserved queue automatically renews (AUTO_RENEW) or expires (EXPIRE) at the end of the contract period."
        },
        "ReservedSlots": {
          "shape": "__integer",
          "locationName": "reservedSlots",
          "documentation": "Specifies the number of reserved transcode slots (RTSs) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. To increase this number, create a replacement contract through the AWS Elemental MediaConvert console."
        },
        "Status": {
          "shape": "ReservationPlanStatus",
          "locationName": "status",
          "documentation": "Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED."
        }
      },
      "documentation": "Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues."
    },
    "ReservationPlanSettings": {
      "type": "structure",
      "members": {
        "Commitment": {
          "shape": "Commitment",
          "locationName": "commitment",
          "documentation": "The length of time that you commit to when you set up a pricing plan contract for a reserved queue."
        },
        "RenewalType": {
          "shape": "RenewalType",
          "locationName": "renewalType",
          "documentation": "Specifies whether the pricing plan contract for your reserved queue automatically renews (AUTO_RENEW) or expires (EXPIRE) at the end of the contract period."
        },
        "ReservedSlots": {
          "shape": "__integer",
          "locationName": "reservedSlots",
          "documentation": "Specifies the number of reserved transcode slots (RTSs) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. To increase this number, create a replacement contract through the AWS Elemental MediaConvert console."
        }
      },
      "documentation": "Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.",
      "required": [
        "ReservedSlots",
        "Commitment",
        "RenewalType"
      ]
    },
    "ReservationPlanStatus": {
      "type": "string",
      "documentation": "Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.",
      "enum": [
        "ACTIVE",
        "EXPIRED"
      ]
    },
    "ResourceTags": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The Amazon Resource Name (ARN) of the resource."
        },
        "Tags": {
          "shape": "__mapOf__string",
          "locationName": "tags",
          "documentation": "The tags for the resource."
        }
      },
      "documentation": "The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource."
    },
    "RespondToAfd": {
      "type": "string",
      "documentation": "Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.",
      "enum": [
        "NONE",
        "RESPOND",
        "PASSTHROUGH"
      ]
    },
    "ScalingBehavior": {
      "type": "string",
      "documentation": "Applies only if your input aspect ratio is different from your output aspect ratio. Enable Stretch to output (StretchToOutput) to have the service stretch your video image to fit. Leave this setting disabled to allow the service to letterbox your video instead. This setting overrides any positioning value you specify elsewhere in the job.",
      "enum": [
        "DEFAULT",
        "STRETCH_TO_OUTPUT"
      ]
    },
    "SccDestinationFramerate": {
      "type": "string",
      "documentation": "Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a framerate that matches the framerate of the associated video. If the video framerate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).",
      "enum": [
        "FRAMERATE_23_97",
        "FRAMERATE_24",
        "FRAMERATE_29_97_DROPFRAME",
        "FRAMERATE_29_97_NON_DROPFRAME"
      ]
    },
    "SccDestinationSettings": {
      "type": "structure",
      "members": {
        "Framerate": {
          "shape": "SccDestinationFramerate",
          "locationName": "framerate"
        }
      },
      "documentation": "Settings for SCC caption output."
    },
    "SpekeKeyProvider": {
      "type": "structure",
      "members": {
        "ResourceId": {
          "shape": "__string",
          "locationName": "resourceId",
          "documentation": "The SPEKE-compliant server uses Resource ID (ResourceId) to identify content."
        },
        "SystemIds": {
          "shape": "__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12",
          "locationName": "systemIds",
          "documentation": "Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id."
        },
        "Url": {
          "shape": "__stringPatternHttps",
          "locationName": "url",
          "documentation": "Use URL (Url) to specify the SPEKE-compliant server that will provide keys for content."
        }
      },
      "documentation": "Settings for use with a SPEKE key provider"
    },
    "StaticKeyProvider": {
      "type": "structure",
      "members": {
        "KeyFormat": {
          "shape": "__stringPatternIdentityAZaZ26AZaZ09163",
          "locationName": "keyFormat",
          "documentation": "Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'."
        },
        "KeyFormatVersions": {
          "shape": "__stringPatternDD",
          "locationName": "keyFormatVersions",
          "documentation": "Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3)."
        },
        "StaticKeyValue": {
          "shape": "__stringPatternAZaZ0932",
          "locationName": "staticKeyValue",
          "documentation": "Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value (StaticKeyValue)."
        },
        "Url": {
          "shape": "__string",
          "locationName": "url",
          "documentation": "Relates to DRM implementation. The location of the license server used for protecting content."
        }
      },
      "documentation": "Settings for use with a SPEKE key provider."
    },
    "TagResourceRequest": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name."
        },
        "Tags": {
          "shape": "__mapOf__string",
          "locationName": "tags",
          "documentation": "The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key."
        }
      },
      "required": [
        "Arn",
        "Tags"
      ]
    },
    "TagResourceResponse": {
      "type": "structure",
      "members": {
      }
    },
    "TeletextDestinationSettings": {
      "type": "structure",
      "members": {
        "PageNumber": {
          "shape": "__stringMin3Max3Pattern1809aFAF09aEAE",
          "locationName": "pageNumber",
          "documentation": "Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field."
        }
      },
      "documentation": "Settings for Teletext caption output"
    },
    "TeletextSourceSettings": {
      "type": "structure",
      "members": {
        "PageNumber": {
          "shape": "__stringMin3Max3Pattern1809aFAF09aEAE",
          "locationName": "pageNumber",
          "documentation": "Use Page Number (PageNumber) to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output."
        }
      },
      "documentation": "Settings specific to Teletext caption sources, including Page number."
    },
    "TimecodeBurnin": {
      "type": "structure",
      "members": {
        "FontSize": {
          "shape": "__integerMin10Max48",
          "locationName": "fontSize",
          "documentation": "Use Font Size (FontSize) to set the font size of any burned-in timecode. Valid values are 10, 16, 32, 48."
        },
        "Position": {
          "shape": "TimecodeBurninPosition",
          "locationName": "position"
        },
        "Prefix": {
          "shape": "__stringPattern",
          "locationName": "prefix",
          "documentation": "Use Prefix (Prefix) to place ASCII characters before any burned-in timecode. For example, a prefix of \"EZ-\" will result in the timecode \"EZ-00:00:00:00\". Provide either the characters themselves or the ASCII code equivalents. The supported range of characters is 0x20 through 0x7e. This includes letters, numbers, and all special characters represented on a standard English keyboard."
        }
      },
      "documentation": "Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output."
    },
    "TimecodeBurninPosition": {
      "type": "string",
      "documentation": "Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.",
      "enum": [
        "TOP_CENTER",
        "TOP_LEFT",
        "TOP_RIGHT",
        "MIDDLE_LEFT",
        "MIDDLE_CENTER",
        "MIDDLE_RIGHT",
        "BOTTOM_LEFT",
        "BOTTOM_CENTER",
        "BOTTOM_RIGHT"
      ]
    },
    "TimecodeConfig": {
      "type": "structure",
      "members": {
        "Anchor": {
          "shape": "__stringPattern010920405090509092",
          "locationName": "anchor",
          "documentation": "If you use an editing platform that relies on an anchor timecode, use Anchor Timecode (Anchor) to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores framerate conversion. System behavior for Anchor Timecode varies depending on your setting for Source (TimecodeSource). * If Source (TimecodeSource) is set to Specified Start (SPECIFIEDSTART), the first input frame is the specified value in Start Timecode (Start). Anchor Timecode (Anchor) and Start Timecode (Start) are used calculate output timecode. * If Source (TimecodeSource) is set to Start at 0 (ZEROBASED)  the  first frame is 00:00:00:00. * If Source (TimecodeSource) is set to Embedded (EMBEDDED), the  first frame is the timecode value on the first input frame of the input."
        },
        "Source": {
          "shape": "TimecodeSource",
          "locationName": "source"
        },
        "Start": {
          "shape": "__stringPattern010920405090509092",
          "locationName": "start",
          "documentation": "Only use when you set Source (TimecodeSource) to Specified start (SPECIFIEDSTART). Use Start timecode (Start) to specify the timecode for the initial frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF)."
        },
        "TimestampOffset": {
          "shape": "__stringPattern0940191020191209301",
          "locationName": "timestampOffset",
          "documentation": "Only applies to outputs that support program-date-time stamp. Use Timestamp offset (TimestampOffset) to overwrite the timecode date without affecting the time and frame number. Provide the new date as a string in the format \"yyyy-mm-dd\".  To use Time stamp offset, you must also enable Insert program-date-time (InsertProgramDateTime) in the output settings. For example, if the date part of your timecodes is 2002-1-25 and you want to change it to one year later, set Timestamp offset (TimestampOffset) to 2003-1-25."
        }
      },
      "documentation": "These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping."
    },
    "TimecodeSource": {
      "type": "string",
      "documentation": "Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.",
      "enum": [
        "EMBEDDED",
        "ZEROBASED",
        "SPECIFIEDSTART"
      ]
    },
    "TimedMetadata": {
      "type": "string",
      "documentation": "Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output.",
      "enum": [
        "PASSTHROUGH",
        "NONE"
      ]
    },
    "TimedMetadataInsertion": {
      "type": "structure",
      "members": {
        "Id3Insertions": {
          "shape": "__listOfId3Insertion",
          "locationName": "id3Insertions",
          "documentation": "Id3Insertions contains the array of Id3Insertion instances."
        }
      },
      "documentation": "Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects."
    },
    "Timing": {
      "type": "structure",
      "members": {
        "FinishTime": {
          "shape": "__timestampUnix",
          "locationName": "finishTime",
          "documentation": "The time, in Unix epoch format, that the transcoding job finished"
        },
        "StartTime": {
          "shape": "__timestampUnix",
          "locationName": "startTime",
          "documentation": "The time, in Unix epoch format, that transcoding for the job began."
        },
        "SubmitTime": {
          "shape": "__timestampUnix",
          "locationName": "submitTime",
          "documentation": "The time, in Unix epoch format, that you submitted the job."
        }
      },
      "documentation": "Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds."
    },
    "TooManyRequestsException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 429
      },
      "documentation": "Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests."
    },
    "TtmlDestinationSettings": {
      "type": "structure",
      "members": {
        "StylePassthrough": {
          "shape": "TtmlStylePassthrough",
          "locationName": "stylePassthrough"
        }
      },
      "documentation": "Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough)."
    },
    "TtmlStylePassthrough": {
      "type": "string",
      "documentation": "Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.",
      "enum": [
        "ENABLED",
        "DISABLED"
      ]
    },
    "Type": {
      "type": "string",
      "enum": [
        "SYSTEM",
        "CUSTOM"
      ]
    },
    "UntagResourceRequest": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.",
          "location": "uri"
        },
        "TagKeys": {
          "shape": "__listOf__string",
          "locationName": "tagKeys",
          "documentation": "The keys of the tags that you want to remove from the resource."
        }
      },
      "required": [
        "Arn"
      ]
    },
    "UntagResourceResponse": {
      "type": "structure",
      "members": {
      }
    },
    "UpdateJobTemplateRequest": {
      "type": "structure",
      "members": {
        "Category": {
          "shape": "__string",
          "locationName": "category",
          "documentation": "The new category for the job template, if you are changing it."
        },
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "The new description for the job template, if you are changing it."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the job template you are modifying",
          "location": "uri"
        },
        "Queue": {
          "shape": "__string",
          "locationName": "queue",
          "documentation": "The new queue for the job template, if you are changing it."
        },
        "Settings": {
          "shape": "JobTemplateSettings",
          "locationName": "settings"
        }
      },
      "required": [
        "Name"
      ]
    },
    "UpdateJobTemplateResponse": {
      "type": "structure",
      "members": {
        "JobTemplate": {
          "shape": "JobTemplate",
          "locationName": "jobTemplate"
        }
      }
    },
    "UpdatePresetRequest": {
      "type": "structure",
      "members": {
        "Category": {
          "shape": "__string",
          "locationName": "category",
          "documentation": "The new category for the preset, if you are changing it."
        },
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "The new description for the preset, if you are changing it."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the preset you are modifying.",
          "location": "uri"
        },
        "Settings": {
          "shape": "PresetSettings",
          "locationName": "settings"
        }
      },
      "required": [
        "Name"
      ]
    },
    "UpdatePresetResponse": {
      "type": "structure",
      "members": {
        "Preset": {
          "shape": "Preset",
          "locationName": "preset"
        }
      }
    },
    "UpdateQueueRequest": {
      "type": "structure",
      "members": {
        "Description": {
          "shape": "__string",
          "locationName": "description",
          "documentation": "The new description for the queue, if you are changing it."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the queue that you are modifying.",
          "location": "uri"
        },
        "ReservationPlanSettings": {
          "shape": "ReservationPlanSettings",
          "locationName": "reservationPlanSettings",
          "documentation": "Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues."
        },
        "Status": {
          "shape": "QueueStatus",
          "locationName": "status",
          "documentation": "Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error."
        }
      },
      "required": [
        "Name"
      ]
    },
    "UpdateQueueResponse": {
      "type": "structure",
      "members": {
        "Queue": {
          "shape": "Queue",
          "locationName": "queue"
        }
      }
    },
    "VideoCodec": {
      "type": "string",
      "documentation": "Type of video codec",
      "enum": [
        "FRAME_CAPTURE",
        "H_264",
        "H_265",
        "MPEG2",
        "PRORES"
      ]
    },
    "VideoCodecSettings": {
      "type": "structure",
      "members": {
        "Codec": {
          "shape": "VideoCodec",
          "locationName": "codec"
        },
        "FrameCaptureSettings": {
          "shape": "FrameCaptureSettings",
          "locationName": "frameCaptureSettings"
        },
        "H264Settings": {
          "shape": "H264Settings",
          "locationName": "h264Settings"
        },
        "H265Settings": {
          "shape": "H265Settings",
          "locationName": "h265Settings"
        },
        "Mpeg2Settings": {
          "shape": "Mpeg2Settings",
          "locationName": "mpeg2Settings"
        },
        "ProresSettings": {
          "shape": "ProresSettings",
          "locationName": "proresSettings"
        }
      },
      "documentation": "Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value you choose for Video codec (Codec). For each codec enum you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * FRAME_CAPTURE, FrameCaptureSettings"
    },
    "VideoDescription": {
      "type": "structure",
      "members": {
        "AfdSignaling": {
          "shape": "AfdSignaling",
          "locationName": "afdSignaling"
        },
        "AntiAlias": {
          "shape": "AntiAlias",
          "locationName": "antiAlias"
        },
        "CodecSettings": {
          "shape": "VideoCodecSettings",
          "locationName": "codecSettings"
        },
        "ColorMetadata": {
          "shape": "ColorMetadata",
          "locationName": "colorMetadata"
        },
        "Crop": {
          "shape": "Rectangle",
          "locationName": "crop",
          "documentation": "Applies only if your input aspect ratio is different from your output aspect ratio. Use Input cropping rectangle (Crop) to specify the  video area the service will include in the output. This will crop the input source, causing video pixels to be removed on encode. Do not use this setting if you have enabled Stretch to output (stretchToOutput) in your output settings."
        },
        "DropFrameTimecode": {
          "shape": "DropFrameTimecode",
          "locationName": "dropFrameTimecode"
        },
        "FixedAfd": {
          "shape": "__integerMin0Max15",
          "locationName": "fixedAfd",
          "documentation": "Applies only if you set AFD Signaling(AfdSignaling) to Fixed (FIXED). Use Fixed (FixedAfd) to specify a four-bit AFD value which the service will write on all  frames of this video output."
        },
        "Height": {
          "shape": "__integerMin32Max2160",
          "locationName": "height",
          "documentation": "Use the Height (Height) setting to define the video resolution height for this output. Specify in pixels. If you don't provide a value here, the service will use the input height."
        },
        "Position": {
          "shape": "Rectangle",
          "locationName": "position",
          "documentation": "Use Position (Position) to point to a rectangle object to define your position. This setting overrides any other aspect ratio."
        },
        "RespondToAfd": {
          "shape": "RespondToAfd",
          "locationName": "respondToAfd"
        },
        "ScalingBehavior": {
          "shape": "ScalingBehavior",
          "locationName": "scalingBehavior"
        },
        "Sharpness": {
          "shape": "__integerMin0Max100",
          "locationName": "sharpness",
          "documentation": "Use Sharpness (Sharpness)setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution, and if you set Anti-alias (AntiAlias) to ENABLED. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content."
        },
        "TimecodeInsertion": {
          "shape": "VideoTimecodeInsertion",
          "locationName": "timecodeInsertion"
        },
        "VideoPreprocessors": {
          "shape": "VideoPreprocessor",
          "locationName": "videoPreprocessors",
          "documentation": "Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default."
        },
        "Width": {
          "shape": "__integerMin32Max4096",
          "locationName": "width",
          "documentation": "Use Width (Width) to define the video resolution width, in pixels, for this output. If you don't provide a value here, the service will use the input width."
        }
      },
      "documentation": "Settings for video outputs"
    },
    "VideoDetail": {
      "type": "structure",
      "members": {
        "HeightInPx": {
          "shape": "__integer",
          "locationName": "heightInPx",
          "documentation": "Height in pixels for the output"
        },
        "WidthInPx": {
          "shape": "__integer",
          "locationName": "widthInPx",
          "documentation": "Width in pixels for the output"
        }
      },
      "documentation": "Contains details about the output's video stream"
    },
    "VideoPreprocessor": {
      "type": "structure",
      "members": {
        "ColorCorrector": {
          "shape": "ColorCorrector",
          "locationName": "colorCorrector",
          "documentation": "Enable the Color corrector (ColorCorrector) feature if necessary. Enable or disable this feature for each output individually. This setting is disabled by default."
        },
        "Deinterlacer": {
          "shape": "Deinterlacer",
          "locationName": "deinterlacer",
          "documentation": "Use Deinterlacer (Deinterlacer) to produce smoother motion and a clearer picture."
        },
        "ImageInserter": {
          "shape": "ImageInserter",
          "locationName": "imageInserter",
          "documentation": "Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default."
        },
        "NoiseReducer": {
          "shape": "NoiseReducer",
          "locationName": "noiseReducer",
          "documentation": "Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default."
        },
        "TimecodeBurnin": {
          "shape": "TimecodeBurnin",
          "locationName": "timecodeBurnin",
          "documentation": "Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output."
        }
      },
      "documentation": "Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default."
    },
    "VideoSelector": {
      "type": "structure",
      "members": {
        "ColorSpace": {
          "shape": "ColorSpace",
          "locationName": "colorSpace"
        },
        "ColorSpaceUsage": {
          "shape": "ColorSpaceUsage",
          "locationName": "colorSpaceUsage"
        },
        "Hdr10Metadata": {
          "shape": "Hdr10Metadata",
          "locationName": "hdr10Metadata"
        },
        "Pid": {
          "shape": "__integerMin1Max2147483647",
          "locationName": "pid",
          "documentation": "Use PID (Pid) to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container."
        },
        "ProgramNumber": {
          "shape": "__integerMinNegative2147483648Max2147483647",
          "locationName": "programNumber",
          "documentation": "Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported."
        }
      },
      "documentation": "Selector for video."
    },
    "VideoTimecodeInsertion": {
      "type": "string",
      "documentation": "Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input framerate is identical to the output framerate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.",
      "enum": [
        "DISABLED",
        "PIC_TIMING_SEI"
      ]
    },
    "WavFormat": {
      "type": "string",
      "documentation": "The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.",
      "enum": [
        "RIFF",
        "RF64"
      ]
    },
    "WavSettings": {
      "type": "structure",
      "members": {
        "BitDepth": {
          "shape": "__integerMin16Max24",
          "locationName": "bitDepth",
          "documentation": "Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track."
        },
        "Channels": {
          "shape": "__integerMin1Max8",
          "locationName": "channels",
          "documentation": "Set Channels to specify the number of channels in this output audio track. With WAV, valid values 1, 2, 4, and 8. In the console, these values are Mono, Stereo, 4-Channel, and 8-Channel, respectively."
        },
        "Format": {
          "shape": "WavFormat",
          "locationName": "format"
        },
        "SampleRate": {
          "shape": "__integerMin8000Max192000",
          "locationName": "sampleRate",
          "documentation": "Sample rate in Hz."
        }
      },
      "documentation": "Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV."
    },
    "__boolean": {
      "type": "boolean"
    },
    "__double": {
      "type": "double"
    },
    "__doubleMin0": {
      "type": "double"
    },
    "__doubleMin0Max2147483647": {
      "type": "double"
    },
    "__doubleMinNegative59Max0": {
      "type": "double"
    },
    "__doubleMinNegative60Max3": {
      "type": "double"
    },
    "__doubleMinNegative60MaxNegative1": {
      "type": "double"
    },
    "__integer": {
      "type": "integer"
    },
    "__integerMin0Max10": {
      "type": "integer",
      "min": 0,
      "max": 10
    },
    "__integerMin0Max100": {
      "type": "integer",
      "min": 0,
      "max": 100
    },
    "__integerMin0Max1000": {
      "type": "integer",
      "min": 0,
      "max": 1000
    },
    "__integerMin0Max10000": {
      "type": "integer",
      "min": 0,
      "max": 10000
    },
    "__integerMin0Max1152000000": {
      "type": "integer",
      "min": 0,
      "max": 1152000000
    },
    "__integerMin0Max128": {
      "type": "integer",
      "min": 0,
      "max": 128
    },
    "__integerMin0Max1466400000": {
      "type": "integer",
      "min": 0,
      "max": 1466400000
    },
    "__integerMin0Max15": {
      "type": "integer",
      "min": 0,
      "max": 15
    },
    "__integerMin0Max16": {
      "type": "integer",
      "min": 0,
      "max": 16
    },
    "__integerMin0Max2147483647": {
      "type": "integer",
      "min": 0,
      "max": 2147483647
    },
    "__integerMin0Max255": {
      "type": "integer",
      "min": 0,
      "max": 255
    },
    "__integerMin0Max3": {
      "type": "integer",
      "min": 0,
      "max": 3
    },
    "__integerMin0Max30": {
      "type": "integer",
      "min": 0,
      "max": 30
    },
    "__integerMin0Max3600": {
      "type": "integer",
      "min": 0,
      "max": 3600
    },
    "__integerMin0Max47185920": {
      "type": "integer",
      "min": 0,
      "max": 47185920
    },
    "__integerMin0Max500": {
      "type": "integer",
      "min": 0,
      "max": 500
    },
    "__integerMin0Max50000": {
      "type": "integer",
      "min": 0,
      "max": 50000
    },
    "__integerMin0Max65535": {
      "type": "integer",
      "min": 0,
      "max": 65535
    },
    "__integerMin0Max7": {
      "type": "integer",
      "min": 0,
      "max": 7
    },
    "__integerMin0Max8": {
      "type": "integer",
      "min": 0,
      "max": 8
    },
    "__integerMin0Max9": {
      "type": "integer",
      "min": 0,
      "max": 9
    },
    "__integerMin0Max96": {
      "type": "integer",
      "min": 0,
      "max": 96
    },
    "__integerMin0Max99": {
      "type": "integer",
      "min": 0,
      "max": 99
    },
    "__integerMin1000Max1152000000": {
      "type": "integer",
      "min": 1000,
      "max": 1152000000
    },
    "__integerMin1000Max1466400000": {
      "type": "integer",
      "min": 1000,
      "max": 1466400000
    },
    "__integerMin1000Max288000000": {
      "type": "integer",
      "min": 1000,
      "max": 288000000
    },
    "__integerMin1000Max30000": {
      "type": "integer",
      "min": 1000,
      "max": 30000
    },
    "__integerMin1000Max300000000": {
      "type": "integer",
      "min": 1000,
      "max": 300000000
    },
    "__integerMin10Max48": {
      "type": "integer",
      "min": 10,
      "max": 48
    },
    "__integerMin16Max24": {
      "type": "integer",
      "min": 16,
      "max": 24
    },
    "__integerMin1Max1": {
      "type": "integer",
      "min": 1,
      "max": 1
    },
    "__integerMin1Max10": {
      "type": "integer",
      "min": 1,
      "max": 10
    },
    "__integerMin1Max100": {
      "type": "integer",
      "min": 1,
      "max": 100
    },
    "__integerMin1Max10000000": {
      "type": "integer",
      "min": 1,
      "max": 10000000
    },
    "__integerMin1Max1001": {
      "type": "integer",
      "min": 1,
      "max": 1001
    },
    "__integerMin1Max16": {
      "type": "integer",
      "min": 1,
      "max": 16
    },
    "__integerMin1Max2": {
      "type": "integer",
      "min": 1,
      "max": 2
    },
    "__integerMin1Max20": {
      "type": "integer",
      "min": 1,
      "max": 20
    },
    "__integerMin1Max2147483647": {
      "type": "integer",
      "min": 1,
      "max": 2147483647
    },
    "__integerMin1Max31": {
      "type": "integer",
      "min": 1,
      "max": 31
    },
    "__integerMin1Max32": {
      "type": "integer",
      "min": 1,
      "max": 32
    },
    "__integerMin1Max4": {
      "type": "integer",
      "min": 1,
      "max": 4
    },
    "__integerMin1Max6": {
      "type": "integer",
      "min": 1,
      "max": 6
    },
    "__integerMin1Max8": {
      "type": "integer",
      "min": 1,
      "max": 8
    },
    "__integerMin24Max60000": {
      "type": "integer",
      "min": 24,
      "max": 60000
    },
    "__integerMin25Max10000": {
      "type": "integer",
      "min": 25,
      "max": 10000
    },
    "__integerMin25Max2000": {
      "type": "integer",
      "min": 25,
      "max": 2000
    },
    "__integerMin2Max2147483647": {
      "type": "integer",
      "min": 2,
      "max": 2147483647
    },
    "__integerMin32000Max384000": {
      "type": "integer",
      "min": 32000,
      "max": 384000
    },
    "__integerMin32000Max48000": {
      "type": "integer",
      "min": 32000,
      "max": 48000
    },
    "__integerMin32Max2160": {
      "type": "integer",
      "min": 32,
      "max": 2160
    },
    "__integerMin32Max4096": {
      "type": "integer",
      "min": 32,
      "max": 4096
    },
    "__integerMin32Max8182": {
      "type": "integer",
      "min": 32,
      "max": 8182
    },
    "__integerMin48000Max48000": {
      "type": "integer",
      "min": 48000,
      "max": 48000
    },
    "__integerMin6000Max1024000": {
      "type": "integer",
      "min": 6000,
      "max": 1024000
    },
    "__integerMin64000Max640000": {
      "type": "integer",
      "min": 64000,
      "max": 640000
    },
    "__integerMin8000Max192000": {
      "type": "integer",
      "min": 8000,
      "max": 192000
    },
    "__integerMin8000Max96000": {
      "type": "integer",
      "min": 8000,
      "max": 96000
    },
    "__integerMin96Max600": {
      "type": "integer",
      "min": 96,
      "max": 600
    },
    "__integerMinNegative1000Max1000": {
      "type": "integer",
      "min": -1000,
      "max": 1000
    },
    "__integerMinNegative180Max180": {
      "type": "integer",
      "min": -180,
      "max": 180
    },
    "__integerMinNegative2147483648Max2147483647": {
      "type": "integer",
      "min": -2147483648,
      "max": 2147483647
    },
    "__integerMinNegative2Max3": {
      "type": "integer",
      "min": -2,
      "max": 3
    },
    "__integerMinNegative5Max5": {
      "type": "integer",
      "min": -5,
      "max": 5
    },
    "__integerMinNegative60Max6": {
      "type": "integer",
      "min": -60,
      "max": 6
    },
    "__integerMinNegative70Max0": {
      "type": "integer",
      "min": -70,
      "max": 0
    },
    "__listOfAudioDescription": {
      "type": "list",
      "member": {
        "shape": "AudioDescription"
      }
    },
    "__listOfCaptionDescription": {
      "type": "list",
      "member": {
        "shape": "CaptionDescription"
      }
    },
    "__listOfCaptionDescriptionPreset": {
      "type": "list",
      "member": {
        "shape": "CaptionDescriptionPreset"
      }
    },
    "__listOfEndpoint": {
      "type": "list",
      "member": {
        "shape": "Endpoint"
      }
    },
    "__listOfHlsAdMarkers": {
      "type": "list",
      "member": {
        "shape": "HlsAdMarkers"
      }
    },
    "__listOfHlsCaptionLanguageMapping": {
      "type": "list",
      "member": {
        "shape": "HlsCaptionLanguageMapping"
      }
    },
    "__listOfId3Insertion": {
      "type": "list",
      "member": {
        "shape": "Id3Insertion"
      }
    },
    "__listOfInput": {
      "type": "list",
      "member": {
        "shape": "Input"
      }
    },
    "__listOfInputClipping": {
      "type": "list",
      "member": {
        "shape": "InputClipping"
      }
    },
    "__listOfInputTemplate": {
      "type": "list",
      "member": {
        "shape": "InputTemplate"
      }
    },
    "__listOfInsertableImage": {
      "type": "list",
      "member": {
        "shape": "InsertableImage"
      }
    },
    "__listOfJob": {
      "type": "list",
      "member": {
        "shape": "Job"
      }
    },
    "__listOfJobTemplate": {
      "type": "list",
      "member": {
        "shape": "JobTemplate"
      }
    },
    "__listOfOutput": {
      "type": "list",
      "member": {
        "shape": "Output"
      }
    },
    "__listOfOutputChannelMapping": {
      "type": "list",
      "member": {
        "shape": "OutputChannelMapping"
      }
    },
    "__listOfOutputDetail": {
      "type": "list",
      "member": {
        "shape": "OutputDetail"
      }
    },
    "__listOfOutputGroup": {
      "type": "list",
      "member": {
        "shape": "OutputGroup"
      }
    },
    "__listOfOutputGroupDetail": {
      "type": "list",
      "member": {
        "shape": "OutputGroupDetail"
      }
    },
    "__listOfPreset": {
      "type": "list",
      "member": {
        "shape": "Preset"
      }
    },
    "__listOfQueue": {
      "type": "list",
      "member": {
        "shape": "Queue"
      }
    },
    "__listOf__integerMin1Max2147483647": {
      "type": "list",
      "member": {
        "shape": "__integerMin1Max2147483647"
      }
    },
    "__listOf__integerMin32Max8182": {
      "type": "list",
      "member": {
        "shape": "__integerMin32Max8182"
      }
    },
    "__listOf__integerMinNegative60Max6": {
      "type": "list",
      "member": {
        "shape": "__integerMinNegative60Max6"
      }
    },
    "__listOf__string": {
      "type": "list",
      "member": {
        "shape": "__string"
      }
    },
    "__listOf__stringMin1": {
      "type": "list",
      "member": {
        "shape": "__stringMin1"
      }
    },
    "__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12": {
      "type": "list",
      "member": {
        "shape": "__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12"
      }
    },
    "__long": {
      "type": "long"
    },
    "__mapOfAudioSelector": {
      "type": "map",
      "key": {
        "shape": "__string"
      },
      "value": {
        "shape": "AudioSelector"
      }
    },
    "__mapOfAudioSelectorGroup": {
      "type": "map",
      "key": {
        "shape": "__string"
      },
      "value": {
        "shape": "AudioSelectorGroup"
      }
    },
    "__mapOfCaptionSelector": {
      "type": "map",
      "key": {
        "shape": "__string"
      },
      "value": {
        "shape": "CaptionSelector"
      }
    },
    "__mapOf__string": {
      "type": "map",
      "key": {
        "shape": "__string"
      },
      "value": {
        "shape": "__string"
      }
    },
    "__string": {
      "type": "string"
    },
    "__stringMin0": {
      "type": "string",
      "min": 0
    },
    "__stringMin1": {
      "type": "string",
      "min": 1
    },
    "__stringMin14PatternS3BmpBMPPngPNG": {
      "type": "string",
      "min": 14,
      "pattern": "^(s3:\\/\\/)(.*?)\\.(bmp|BMP|png|PNG)$"
    },
    "__stringMin14PatternS3BmpBMPPngPNGTgaTGA": {
      "type": "string",
      "min": 14,
      "pattern": "^(s3:\\/\\/)(.*?)\\.(bmp|BMP|png|PNG|tga|TGA)$"
    },
    "__stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTSmiSMI": {
      "type": "string",
      "min": 14,
      "pattern": "^(s3:\\/\\/)(.*?)\\.(scc|SCC|ttml|TTML|dfxp|DFXP|stl|STL|srt|SRT|smi|SMI)$"
    },
    "__stringMin1Max256": {
      "type": "string",
      "min": 1,
      "max": 256
    },
    "__stringMin32Max32Pattern09aFAF32": {
      "type": "string",
      "min": 32,
      "max": 32,
      "pattern": "^[0-9a-fA-F]{32}$"
    },
    "__stringMin3Max3Pattern1809aFAF09aEAE": {
      "type": "string",
      "min": 3,
      "max": 3,
      "pattern": "^[1-8][0-9a-fA-F][0-9a-eA-E]$"
    },
    "__stringMin3Max3PatternAZaZ3": {
      "type": "string",
      "min": 3,
      "max": 3,
      "pattern": "^[A-Za-z]{3}$"
    },
    "__stringPattern": {
      "type": "string",
      "pattern": "^[ -~]+$"
    },
    "__stringPattern010920405090509092": {
      "type": "string",
      "pattern": "^([01][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9][:;][0-9]{2}$"
    },
    "__stringPattern01D20305D205D": {
      "type": "string",
      "pattern": "^((([0-1]\\d)|(2[0-3]))(:[0-5]\\d){2}([:;][0-5]\\d))$"
    },
    "__stringPattern0940191020191209301": {
      "type": "string",
      "pattern": "^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$"
    },
    "__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12": {
      "type": "string",
      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
    },
    "__stringPatternAZaZ0902": {
      "type": "string",
      "pattern": "^[A-Za-z0-9+\\/]+={0,2}$"
    },
    "__stringPatternAZaZ0932": {
      "type": "string",
      "pattern": "^[A-Za-z0-9]{32}$"
    },
    "__stringPatternDD": {
      "type": "string",
      "pattern": "^(\\d+(\\/\\d+)*)$"
    },
    "__stringPatternHttps": {
      "type": "string",
      "pattern": "^https:\\/\\/"
    },
    "__stringPatternIdentityAZaZ26AZaZ09163": {
      "type": "string",
      "pattern": "^(identity|[A-Za-z]{2,6}(\\.[A-Za-z0-9-]{1,63})+)$"
    },
    "__stringPatternS3": {
      "type": "string",
      "pattern": "^s3:\\/\\/"
    },
    "__stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MM": {
      "type": "string",
      "pattern": "^(s3:\\/\\/)([^\\/]+\\/)+([^\\/\\.]+|(([^\\/]*)\\.([mM]2[vV]|[mM][pP][eE][gG]|[aA][vV][iI]|[mM][pP]4|[fF][lL][vV]|[mM][pP][tT]|[mM][pP][gG]|[mM]4[vV]|[tT][rR][pP]|[fF]4[vV]|[mM]2[tT][sS]|[tT][sS]|264|[hH]264|[mM][kK][vV]|[mM][oO][vV]|[mM][tT][sS]|[mM]2[tT]|[wW][mM][vV]|[aA][sS][fF]|[vV][oO][bB]|3[gG][pP]|3[gG][pP][pP]|[mM][xX][fF]|[dD][iI][vV][xX]|[xX][vV][iI][dD]|[rR][aA][wW]|[dD][vV]|[gG][xX][fF]|[mM]1[vV]|3[gG]2|[vV][mM][fF]|[mM]3[uU]8|[lL][cC][hH]|[gG][xX][fF]_[mM][pP][eE][gG]2|[mM][xX][fF]_[mM][pP][eE][gG]2|[mM][xX][fF][hH][dD]|[wW][aA][vV]|[yY]4[mM])))$"
    },
    "__stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE": {
      "type": "string",
      "pattern": "^(s3:\\/\\/)([^\\/]+\\/)+([^\\/\\.]+|(([^\\/]*)\\.([mM]2[vV]|[mM][pP][eE][gG]|[aA][vV][iI]|[mM][pP]4|[fF][lL][vV]|[mM][pP][tT]|[mM][pP][gG]|[mM]4[vV]|[tT][rR][pP]|[fF]4[vV]|[mM]2[tT][sS]|[tT][sS]|264|[hH]264|[mM][kK][vV]|[mM][oO][vV]|[mM][tT][sS]|[mM]2[tT]|[wW][mM][vV]|[aA][sS][fF]|[vV][oO][bB]|3[gG][pP]|3[gG][pP][pP]|[mM][xX][fF]|[dD][iI][vV][xX]|[xX][vV][iI][dD]|[rR][aA][wW]|[dD][vV]|[gG][xX][fF]|[mM]1[vV]|3[gG]2|[vV][mM][fF]|[mM]3[uU]8|[lL][cC][hH]|[gG][xX][fF]_[mM][pP][eE][gG]2|[mM][xX][fF]_[mM][pP][eE][gG]2|[mM][xX][fF][hH][dD]|[wW][aA][vV]|[yY]4[mM]|[aA][aA][cC]|[aA][iI][fF][fF]|[mM][pP]2|[aA][cC]3|[eE][cC]3|[dD][tT][sS][eE])))$"
    },
    "__stringPatternWS": {
      "type": "string",
      "pattern": "^[\\w\\s]*$"
    },
    "__timestampIso8601": {
      "type": "timestamp",
      "timestampFormat": "iso8601"
    },
    "__timestampUnix": {
      "type": "timestamp",
      "timestampFormat": "unixTimestamp"
    }
  },
  "documentation": "AWS Elemental MediaConvert"
}