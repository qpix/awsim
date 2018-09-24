awsim['pinpoint'] = {
  "metadata" : {
    "apiVersion" : "2016-12-01",
    "endpointPrefix" : "pinpoint",
    "signingName" : "mobiletargeting",
    "serviceFullName" : "Amazon Pinpoint",
    "serviceId" : "Pinpoint",
    "protocol" : "rest-json",
    "jsonVersion" : "1.1",
    "uid" : "pinpoint-2016-12-01",
    "signatureVersion" : "v4"
  },
  "documentation" : "Amazon Pinpoint",
  "operations" : {
    "CreateApp" : {
      "name" : "CreateApp",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps",
        "responseCode" : 201
      },
      "input" : {
        "shape" : "CreateAppRequest"
      },
      "output" : {
        "shape" : "CreateAppResponse",
        "documentation" : "201 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Creates or updates an app."
    },
    "CreateCampaign" : {
      "name" : "CreateCampaign",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps/{application-id}/campaigns",
        "responseCode" : 201
      },
      "input" : {
        "shape" : "CreateCampaignRequest"
      },
      "output" : {
        "shape" : "CreateCampaignResponse",
        "documentation" : "201 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Creates or updates a campaign."
    },
    "CreateExportJob" : {
      "name" : "CreateExportJob",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps/{application-id}/jobs/export",
        "responseCode" : 202
      },
      "input" : {
        "shape" : "CreateExportJobRequest"
      },
      "output" : {
        "shape" : "CreateExportJobResponse",
        "documentation" : "202 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Creates an export job."
    },
    "CreateImportJob" : {
      "name" : "CreateImportJob",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps/{application-id}/jobs/import",
        "responseCode" : 201
      },
      "input" : {
        "shape" : "CreateImportJobRequest"
      },
      "output" : {
        "shape" : "CreateImportJobResponse",
        "documentation" : "201 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Creates or updates an import job."
    },
    "CreateSegment" : {
      "name" : "CreateSegment",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps/{application-id}/segments",
        "responseCode" : 201
      },
      "input" : {
        "shape" : "CreateSegmentRequest"
      },
      "output" : {
        "shape" : "CreateSegmentResponse",
        "documentation" : "201 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Used to create or update a segment."
    },
    "DeleteAdmChannel" : {
      "name" : "DeleteAdmChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/adm",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteAdmChannelRequest"
      },
      "output" : {
        "shape" : "DeleteAdmChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Delete an ADM channel."
    },
    "DeleteApnsChannel" : {
      "name" : "DeleteApnsChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/apns",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteApnsChannelRequest"
      },
      "output" : {
        "shape" : "DeleteApnsChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Deletes the APNs channel for an app."
    },
    "DeleteApnsSandboxChannel" : {
      "name" : "DeleteApnsSandboxChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_sandbox",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteApnsSandboxChannelRequest"
      },
      "output" : {
        "shape" : "DeleteApnsSandboxChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Delete an APNS sandbox channel."
    },
    "DeleteApnsVoipChannel" : {
      "name" : "DeleteApnsVoipChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_voip",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteApnsVoipChannelRequest"
      },
      "output" : {
        "shape" : "DeleteApnsVoipChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Delete an APNS VoIP channel"
    },
    "DeleteApnsVoipSandboxChannel" : {
      "name" : "DeleteApnsVoipSandboxChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_voip_sandbox",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteApnsVoipSandboxChannelRequest"
      },
      "output" : {
        "shape" : "DeleteApnsVoipSandboxChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Delete an APNS VoIP sandbox channel"
    },
    "DeleteApp" : {
      "name" : "DeleteApp",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteAppRequest"
      },
      "output" : {
        "shape" : "DeleteAppResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Deletes an app."
    },
    "DeleteBaiduChannel" : {
      "name" : "DeleteBaiduChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/baidu",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteBaiduChannelRequest"
      },
      "output" : {
        "shape" : "DeleteBaiduChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Delete a BAIDU GCM channel"
    },
    "DeleteCampaign" : {
      "name" : "DeleteCampaign",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/campaigns/{campaign-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteCampaignRequest"
      },
      "output" : {
        "shape" : "DeleteCampaignResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Deletes a campaign."
    },
    "DeleteEmailChannel" : {
      "name" : "DeleteEmailChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/email",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteEmailChannelRequest"
      },
      "output" : {
        "shape" : "DeleteEmailChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Delete an email channel."
    },
    "DeleteEndpoint" : {
      "name" : "DeleteEndpoint",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/endpoints/{endpoint-id}",
        "responseCode" : 202
      },
      "input" : {
        "shape" : "DeleteEndpointRequest"
      },
      "output" : {
        "shape" : "DeleteEndpointResponse",
        "documentation" : "202 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Deletes an endpoint."
    },
    "DeleteEventStream" : {
      "name" : "DeleteEventStream",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/eventstream",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteEventStreamRequest"
      },
      "output" : {
        "shape" : "DeleteEventStreamResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Deletes the event stream for an app."
    },
    "DeleteGcmChannel" : {
      "name" : "DeleteGcmChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/gcm",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteGcmChannelRequest"
      },
      "output" : {
        "shape" : "DeleteGcmChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Deletes the GCM channel for an app."
    },
    "DeleteSegment" : {
      "name" : "DeleteSegment",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/segments/{segment-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteSegmentRequest"
      },
      "output" : {
        "shape" : "DeleteSegmentResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Deletes a segment."
    },
    "DeleteSmsChannel" : {
      "name" : "DeleteSmsChannel",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/channels/sms",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteSmsChannelRequest"
      },
      "output" : {
        "shape" : "DeleteSmsChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Delete an SMS channel."
    },
    "DeleteUserEndpoints" : {
      "name" : "DeleteUserEndpoints",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/v1/apps/{application-id}/users/{user-id}",
        "responseCode" : 202
      },
      "input" : {
        "shape" : "DeleteUserEndpointsRequest"
      },
      "output" : {
        "shape" : "DeleteUserEndpointsResponse",
        "documentation" : "202 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Deletes endpoints that are associated with a User ID."
    },
    "GetAdmChannel" : {
      "name" : "GetAdmChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/adm",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetAdmChannelRequest"
      },
      "output" : {
        "shape" : "GetAdmChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Get an ADM channel."
    },
    "GetApnsChannel" : {
      "name" : "GetApnsChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/apns",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetApnsChannelRequest"
      },
      "output" : {
        "shape" : "GetApnsChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about the APNs channel for an app."
    },
    "GetApnsSandboxChannel" : {
      "name" : "GetApnsSandboxChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_sandbox",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetApnsSandboxChannelRequest"
      },
      "output" : {
        "shape" : "GetApnsSandboxChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Get an APNS sandbox channel."
    },
    "GetApnsVoipChannel" : {
      "name" : "GetApnsVoipChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_voip",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetApnsVoipChannelRequest"
      },
      "output" : {
        "shape" : "GetApnsVoipChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Get an APNS VoIP channel"
    },
    "GetApnsVoipSandboxChannel" : {
      "name" : "GetApnsVoipSandboxChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_voip_sandbox",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetApnsVoipSandboxChannelRequest"
      },
      "output" : {
        "shape" : "GetApnsVoipSandboxChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Get an APNS VoIPSandbox channel"
    },
    "GetApp" : {
      "name" : "GetApp",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetAppRequest"
      },
      "output" : {
        "shape" : "GetAppResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about an app."
    },
    "GetApplicationSettings" : {
      "name" : "GetApplicationSettings",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/settings",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetApplicationSettingsRequest"
      },
      "output" : {
        "shape" : "GetApplicationSettingsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Used to request the settings for an app."
    },
    "GetApps" : {
      "name" : "GetApps",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetAppsRequest"
      },
      "output" : {
        "shape" : "GetAppsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about your apps."
    },
    "GetBaiduChannel" : {
      "name" : "GetBaiduChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/baidu",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetBaiduChannelRequest"
      },
      "output" : {
        "shape" : "GetBaiduChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Get a BAIDU GCM channel"
    },
    "GetCampaign" : {
      "name" : "GetCampaign",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/campaigns/{campaign-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetCampaignRequest"
      },
      "output" : {
        "shape" : "GetCampaignResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about a campaign."
    },
    "GetCampaignActivities" : {
      "name" : "GetCampaignActivities",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/campaigns/{campaign-id}/activities",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetCampaignActivitiesRequest"
      },
      "output" : {
        "shape" : "GetCampaignActivitiesResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about the activity performed by a campaign."
    },
    "GetCampaignVersion" : {
      "name" : "GetCampaignVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/campaigns/{campaign-id}/versions/{version}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetCampaignVersionRequest"
      },
      "output" : {
        "shape" : "GetCampaignVersionResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about a specific version of a campaign."
    },
    "GetCampaignVersions" : {
      "name" : "GetCampaignVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/campaigns/{campaign-id}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetCampaignVersionsRequest"
      },
      "output" : {
        "shape" : "GetCampaignVersionsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about your campaign versions."
    },
    "GetCampaigns" : {
      "name" : "GetCampaigns",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/campaigns",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetCampaignsRequest"
      },
      "output" : {
        "shape" : "GetCampaignsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about your campaigns."
    },
    "GetChannels" : {
      "name" : "GetChannels",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetChannelsRequest"
      },
      "output" : {
        "shape" : "GetChannelsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Get all channels."
    },
    "GetEmailChannel" : {
      "name" : "GetEmailChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/email",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetEmailChannelRequest"
      },
      "output" : {
        "shape" : "GetEmailChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Get an email channel."
    },
    "GetEndpoint" : {
      "name" : "GetEndpoint",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/endpoints/{endpoint-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetEndpointRequest"
      },
      "output" : {
        "shape" : "GetEndpointResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about an endpoint."
    },
    "GetEventStream" : {
      "name" : "GetEventStream",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/eventstream",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetEventStreamRequest"
      },
      "output" : {
        "shape" : "GetEventStreamResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns the event stream for an app."
    },
    "GetExportJob" : {
      "name" : "GetExportJob",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/jobs/export/{job-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetExportJobRequest"
      },
      "output" : {
        "shape" : "GetExportJobResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about an export job."
    },
    "GetExportJobs" : {
      "name" : "GetExportJobs",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/jobs/export",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetExportJobsRequest"
      },
      "output" : {
        "shape" : "GetExportJobsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about your export jobs."
    },
    "GetGcmChannel" : {
      "name" : "GetGcmChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/gcm",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetGcmChannelRequest"
      },
      "output" : {
        "shape" : "GetGcmChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about the GCM channel for an app."
    },
    "GetImportJob" : {
      "name" : "GetImportJob",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/jobs/import/{job-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetImportJobRequest"
      },
      "output" : {
        "shape" : "GetImportJobResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about an import job."
    },
    "GetImportJobs" : {
      "name" : "GetImportJobs",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/jobs/import",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetImportJobsRequest"
      },
      "output" : {
        "shape" : "GetImportJobsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about your import jobs."
    },
    "GetSegment" : {
      "name" : "GetSegment",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/segments/{segment-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSegmentRequest"
      },
      "output" : {
        "shape" : "GetSegmentResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about a segment."
    },
    "GetSegmentExportJobs" : {
      "name" : "GetSegmentExportJobs",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/segments/{segment-id}/jobs/export",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSegmentExportJobsRequest"
      },
      "output" : {
        "shape" : "GetSegmentExportJobsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns a list of export jobs for a specific segment."
    },
    "GetSegmentImportJobs" : {
      "name" : "GetSegmentImportJobs",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/segments/{segment-id}/jobs/import",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSegmentImportJobsRequest"
      },
      "output" : {
        "shape" : "GetSegmentImportJobsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns a list of import jobs for a specific segment."
    },
    "GetSegmentVersion" : {
      "name" : "GetSegmentVersion",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/segments/{segment-id}/versions/{version}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSegmentVersionRequest"
      },
      "output" : {
        "shape" : "GetSegmentVersionResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about a segment version."
    },
    "GetSegmentVersions" : {
      "name" : "GetSegmentVersions",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/segments/{segment-id}/versions",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSegmentVersionsRequest"
      },
      "output" : {
        "shape" : "GetSegmentVersionsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about your segment versions."
    },
    "GetSegments" : {
      "name" : "GetSegments",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/segments",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSegmentsRequest"
      },
      "output" : {
        "shape" : "GetSegmentsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Used to get information about your segments."
    },
    "GetSmsChannel" : {
      "name" : "GetSmsChannel",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/channels/sms",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetSmsChannelRequest"
      },
      "output" : {
        "shape" : "GetSmsChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Get an SMS channel."
    },
    "GetUserEndpoints" : {
      "name" : "GetUserEndpoints",
      "http" : {
        "method" : "GET",
        "requestUri" : "/v1/apps/{application-id}/users/{user-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetUserEndpointsRequest"
      },
      "output" : {
        "shape" : "GetUserEndpointsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about the endpoints that are associated with a User ID."
    },
    "PhoneNumberValidate" : {
      "name" : "PhoneNumberValidate",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/phone/number/validate",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "PhoneNumberValidateRequest"
      },
      "output" : {
        "shape" : "PhoneNumberValidateResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Returns information about the specified phone number."
    },
    "PutEventStream" : {
      "name" : "PutEventStream",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps/{application-id}/eventstream",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "PutEventStreamRequest"
      },
      "output" : {
        "shape" : "PutEventStreamResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Use to create or update the event stream for an app."
    },
    "PutEvents" : {
      "name" : "PutEvents",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps/{application-id}/events",
        "responseCode" : 202
      },
      "input" : {
        "shape" : "PutEventsRequest"
      },
      "output" : {
        "shape" : "PutEventsResponse",
        "documentation" : "202 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Use to record events for endpoints. This method creates events and creates or updates the endpoints that those events are associated with."
    },
    "RemoveAttributes" : {
      "name" : "RemoveAttributes",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/attributes/{attribute-type}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "RemoveAttributesRequest"
      },
      "output" : {
        "shape" : "RemoveAttributesResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Used to remove the attributes for an app"
    },
    "SendMessages" : {
      "name" : "SendMessages",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps/{application-id}/messages",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "SendMessagesRequest"
      },
      "output" : {
        "shape" : "SendMessagesResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Used to send a direct message."
    },
    "SendUsersMessages" : {
      "name" : "SendUsersMessages",
      "http" : {
        "method" : "POST",
        "requestUri" : "/v1/apps/{application-id}/users-messages",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "SendUsersMessagesRequest"
      },
      "output" : {
        "shape" : "SendUsersMessagesResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Used to send a message to a list of users."
    },
    "UpdateAdmChannel" : {
      "name" : "UpdateAdmChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/adm",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateAdmChannelRequest"
      },
      "output" : {
        "shape" : "UpdateAdmChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Update an ADM channel."
    },
    "UpdateApnsChannel" : {
      "name" : "UpdateApnsChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/apns",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateApnsChannelRequest"
      },
      "output" : {
        "shape" : "UpdateApnsChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Use to update the APNs channel for an app."
    },
    "UpdateApnsSandboxChannel" : {
      "name" : "UpdateApnsSandboxChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_sandbox",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateApnsSandboxChannelRequest"
      },
      "output" : {
        "shape" : "UpdateApnsSandboxChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Update an APNS sandbox channel."
    },
    "UpdateApnsVoipChannel" : {
      "name" : "UpdateApnsVoipChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_voip",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateApnsVoipChannelRequest"
      },
      "output" : {
        "shape" : "UpdateApnsVoipChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Update an APNS VoIP channel"
    },
    "UpdateApnsVoipSandboxChannel" : {
      "name" : "UpdateApnsVoipSandboxChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/apns_voip_sandbox",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateApnsVoipSandboxChannelRequest"
      },
      "output" : {
        "shape" : "UpdateApnsVoipSandboxChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Update an APNS VoIP sandbox channel"
    },
    "UpdateApplicationSettings" : {
      "name" : "UpdateApplicationSettings",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/settings",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateApplicationSettingsRequest"
      },
      "output" : {
        "shape" : "UpdateApplicationSettingsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Used to update the settings for an app."
    },
    "UpdateBaiduChannel" : {
      "name" : "UpdateBaiduChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/baidu",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateBaiduChannelRequest"
      },
      "output" : {
        "shape" : "UpdateBaiduChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Update a BAIDU GCM channel"
    },
    "UpdateCampaign" : {
      "name" : "UpdateCampaign",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/campaigns/{campaign-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateCampaignRequest"
      },
      "output" : {
        "shape" : "UpdateCampaignResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Use to update a campaign."
    },
    "UpdateEmailChannel" : {
      "name" : "UpdateEmailChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/email",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateEmailChannelRequest"
      },
      "output" : {
        "shape" : "UpdateEmailChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Update an email channel."
    },
    "UpdateEndpoint" : {
      "name" : "UpdateEndpoint",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/endpoints/{endpoint-id}",
        "responseCode" : 202
      },
      "input" : {
        "shape" : "UpdateEndpointRequest"
      },
      "output" : {
        "shape" : "UpdateEndpointResponse",
        "documentation" : "202 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Creates or updates an endpoint."
    },
    "UpdateEndpointsBatch" : {
      "name" : "UpdateEndpointsBatch",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/endpoints",
        "responseCode" : 202
      },
      "input" : {
        "shape" : "UpdateEndpointsBatchRequest"
      },
      "output" : {
        "shape" : "UpdateEndpointsBatchResponse",
        "documentation" : "202 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Use to update a batch of endpoints."
    },
    "UpdateGcmChannel" : {
      "name" : "UpdateGcmChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/gcm",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateGcmChannelRequest"
      },
      "output" : {
        "shape" : "UpdateGcmChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Use to update the GCM channel for an app."
    },
    "UpdateSegment" : {
      "name" : "UpdateSegment",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/segments/{segment-id}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateSegmentRequest"
      },
      "output" : {
        "shape" : "UpdateSegmentResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Used to update a segment."
    },
    "UpdateSmsChannel" : {
      "name" : "UpdateSmsChannel",
      "http" : {
        "method" : "PUT",
        "requestUri" : "/v1/apps/{application-id}/channels/sms",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateSmsChannelRequest"
      },
      "output" : {
        "shape" : "UpdateSmsChannelResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      }, {
        "shape" : "ForbiddenException",
        "documentation" : "403 response"
      }, {
        "shape" : "NotFoundException",
        "documentation" : "404 response"
      }, {
        "shape" : "MethodNotAllowedException",
        "documentation" : "405 response"
      }, {
        "shape" : "TooManyRequestsException",
        "documentation" : "429 response"
      } ],
      "documentation" : "Update an SMS channel."
    }
  },
  "shapes" : {
    "ADMChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ClientId" : {
          "shape" : "__string",
          "documentation" : "The Client ID that you obtained from the Amazon App Distribution Portal."
        },
        "ClientSecret" : {
          "shape" : "__string",
          "documentation" : "The Client Secret that you obtained from the Amazon App Distribution Portal."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether or not the channel is enabled for sending messages."
        }
      },
      "documentation" : "Amazon Device Messaging channel definition.",
      "required" : [ ]
    },
    "ADMChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application to which the channel applies."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when this channel was created."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether or not the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "(Deprecated) An identifier for the channel. Retained for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether or not the channel is archived."
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "The user who last updated this channel."
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when this channel was last modified."
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "The platform type. For this channel, the value is always \"ADM.\""
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "The channel version."
        }
      },
      "documentation" : "Amazon Device Messaging channel definition.",
      "required" : [ ]
    },
    "ADMMessage" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "Action",
          "documentation" : "The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL"
        },
        "Body" : {
          "shape" : "__string",
          "documentation" : "The message body of the notification."
        },
        "ConsolidationKey" : {
          "shape" : "__string",
          "documentation" : "Optional. Arbitrary string used to indicate multiple messages are logically the same and that ADM is allowed to drop previously enqueued messages in favor of this one."
        },
        "Data" : {
          "shape" : "MapOf__string",
          "documentation" : "The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object"
        },
        "ExpiresAfter" : {
          "shape" : "__string",
          "documentation" : "Optional. Number of seconds ADM should retain the message if the device is offline"
        },
        "IconReference" : {
          "shape" : "__string",
          "documentation" : "The icon image name of the asset saved in your application."
        },
        "ImageIconUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used as the large icon to the notification content view."
        },
        "ImageUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used in the push notification."
        },
        "MD5" : {
          "shape" : "__string",
          "documentation" : "Optional. Base-64-encoded MD5 checksum of the data parameter. Used to verify data integrity"
        },
        "RawContent" : {
          "shape" : "__string",
          "documentation" : "The Raw JSON formatted string to be used as the payload. This value overrides the message."
        },
        "SilentPush" : {
          "shape" : "__boolean",
          "documentation" : "Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases."
        },
        "SmallImageIconUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used as the small icon for the notification which will be used to represent the notification in the status bar and content view"
        },
        "Sound" : {
          "shape" : "__string",
          "documentation" : "Indicates a sound to play when the device receives the notification. Supports default, or the filename of a sound resource bundled in the app. Android sound files must reside in /res/raw/"
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Default message substitutions. Can be overridden by individual address substitutions."
        },
        "Title" : {
          "shape" : "__string",
          "documentation" : "The message title that displays above the message on the user's device."
        },
        "Url" : {
          "shape" : "__string",
          "documentation" : "The URL to open in the user's mobile browser. Used if the value for Action is URL."
        }
      },
      "documentation" : "ADM Message."
    },
    "APNSChannelRequest" : {
      "type" : "structure",
      "members" : {
        "BundleId" : {
          "shape" : "__string",
          "documentation" : "The bundle id used for APNs Tokens."
        },
        "Certificate" : {
          "shape" : "__string",
          "documentation" : "The distribution certificate from Apple."
        },
        "DefaultAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The default authentication method used for APNs."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "PrivateKey" : {
          "shape" : "__string",
          "documentation" : "The certificate private key."
        },
        "TeamId" : {
          "shape" : "__string",
          "documentation" : "The team id used for APNs Tokens."
        },
        "TokenKey" : {
          "shape" : "__string",
          "documentation" : "The token key used for APNs Tokens."
        },
        "TokenKeyId" : {
          "shape" : "__string",
          "documentation" : "The token key used for APNs Tokens."
        }
      },
      "documentation" : "Apple Push Notification Service channel definition.",
      "required" : [ ]
    },
    "APNSChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application that the channel applies to."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when this channel was created."
        },
        "DefaultAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The default authentication method used for APNs."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "HasTokenKey" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether the channel is configured with a key for APNs token authentication. Provide a token key by setting the TokenKey attribute."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "(Deprecated) An identifier for the channel. Retained for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether or not the channel is archived."
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "The user who last updated this channel."
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when this channel was last modified."
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "The platform type. For this channel, the value is always \"ADM.\""
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "The channel version."
        }
      },
      "documentation" : "Apple Distribution Push Notification Service channel definition.",
      "required" : [ ]
    },
    "APNSMessage" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "Action",
          "documentation" : "The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL"
        },
        "Badge" : {
          "shape" : "__integer",
          "documentation" : "Include this key when you want the system to modify the badge of your app icon. If this key is not included in the dictionary, the badge is not changed. To remove the badge, set the value of this key to 0."
        },
        "Body" : {
          "shape" : "__string",
          "documentation" : "The message body of the notification."
        },
        "Category" : {
          "shape" : "__string",
          "documentation" : "Provide this key with a string value that represents the notification's type. This value corresponds to the value in the identifier property of one of your app's registered categories."
        },
        "CollapseId" : {
          "shape" : "__string",
          "documentation" : "An ID that, if assigned to multiple messages, causes APNs to coalesce the messages into a single push notification instead of delivering each message individually. The value must not exceed 64 bytes. Amazon Pinpoint uses this value to set the apns-collapse-id request header when it sends the message to APNs."
        },
        "Data" : {
          "shape" : "MapOf__string",
          "documentation" : "The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object"
        },
        "MediaUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to a video used in the push notification."
        },
        "PreferredAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The preferred authentication method, either \"CERTIFICATE\" or \"TOKEN\""
        },
        "Priority" : {
          "shape" : "__string",
          "documentation" : "The message priority. Amazon Pinpoint uses this value to set the apns-priority request header when it sends the message to APNs. Accepts the following values:\n\n\"5\" - Low priority. Messages might be delayed, delivered in groups, and throttled.\n\n\"10\" - High priority. Messages are sent immediately. High priority messages must cause an alert, sound, or badge on the receiving device.\n\nThe default value is \"10\".\n\nThe equivalent values for FCM or GCM messages are \"normal\" and \"high\". Amazon Pinpoint accepts these values for APNs messages and converts them.\n\nFor more information about the apns-priority parameter, see Communicating with APNs in the APNs Local and Remote Notification Programming Guide."
        },
        "RawContent" : {
          "shape" : "__string",
          "documentation" : "The Raw JSON formatted string to be used as the payload. This value overrides the message."
        },
        "SilentPush" : {
          "shape" : "__boolean",
          "documentation" : "Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases."
        },
        "Sound" : {
          "shape" : "__string",
          "documentation" : "Include this key when you want the system to play a sound. The value of this key is the name of a sound file in your app's main bundle or in the Library/Sounds folder of your app's data container. If the sound file cannot be found, or if you specify defaultfor the value, the system plays the default alert sound."
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Default message substitutions. Can be overridden by individual address substitutions."
        },
        "ThreadId" : {
          "shape" : "__string",
          "documentation" : "Provide this key with a string value that represents the app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together."
        },
        "TimeToLive" : {
          "shape" : "__integer",
          "documentation" : "The length of time (in seconds) that APNs stores and attempts to deliver the message. If the value is 0, APNs does not store the message or attempt to deliver it more than once. Amazon Pinpoint uses this value to set the apns-expiration request header when it sends the message to APNs."
        },
        "Title" : {
          "shape" : "__string",
          "documentation" : "The message title that displays above the message on the user's device."
        },
        "Url" : {
          "shape" : "__string",
          "documentation" : "The URL to open in the user's mobile browser. Used if the value for Action is URL."
        }
      },
      "documentation" : "APNS Message."
    },
    "APNSSandboxChannelRequest" : {
      "type" : "structure",
      "members" : {
        "BundleId" : {
          "shape" : "__string",
          "documentation" : "The bundle id used for APNs Tokens."
        },
        "Certificate" : {
          "shape" : "__string",
          "documentation" : "The distribution certificate from Apple."
        },
        "DefaultAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The default authentication method used for APNs."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "PrivateKey" : {
          "shape" : "__string",
          "documentation" : "The certificate private key."
        },
        "TeamId" : {
          "shape" : "__string",
          "documentation" : "The team id used for APNs Tokens."
        },
        "TokenKey" : {
          "shape" : "__string",
          "documentation" : "The token key used for APNs Tokens."
        },
        "TokenKeyId" : {
          "shape" : "__string",
          "documentation" : "The token key used for APNs Tokens."
        }
      },
      "documentation" : "Apple Development Push Notification Service channel definition.",
      "required" : [ ]
    },
    "APNSSandboxChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application to which the channel applies."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "When was this segment created"
        },
        "DefaultAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The default authentication method used for APNs."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "HasTokenKey" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether the channel is configured with a key for APNs token authentication. Provide a token key by setting the TokenKey attribute."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "Channel ID. Not used, only for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Is this channel archived"
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "Who last updated this entry"
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "Last date this was updated"
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "The platform type. Will be APNS_SANDBOX."
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "Version of channel"
        }
      },
      "documentation" : "Apple Development Push Notification Service channel definition.",
      "required" : [ ]
    },
    "APNSVoipChannelRequest" : {
      "type" : "structure",
      "members" : {
        "BundleId" : {
          "shape" : "__string",
          "documentation" : "The bundle id used for APNs Tokens."
        },
        "Certificate" : {
          "shape" : "__string",
          "documentation" : "The distribution certificate from Apple."
        },
        "DefaultAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The default authentication method used for APNs."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "PrivateKey" : {
          "shape" : "__string",
          "documentation" : "The certificate private key."
        },
        "TeamId" : {
          "shape" : "__string",
          "documentation" : "The team id used for APNs Tokens."
        },
        "TokenKey" : {
          "shape" : "__string",
          "documentation" : "The token key used for APNs Tokens."
        },
        "TokenKeyId" : {
          "shape" : "__string",
          "documentation" : "The token key used for APNs Tokens."
        }
      },
      "documentation" : "Apple VoIP Push Notification Service channel definition.",
      "required" : [ ]
    },
    "APNSVoipChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "Application id"
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "When was this segment created"
        },
        "DefaultAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The default authentication method used for APNs."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "HasTokenKey" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is registered with a token key for authentication."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "Channel ID. Not used, only for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Is this channel archived"
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "Who made the last change"
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "Last date this was updated"
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "The platform type. Will be APNS."
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "Version of channel"
        }
      },
      "documentation" : "Apple VoIP Push Notification Service channel definition.",
      "required" : [ ]
    },
    "APNSVoipSandboxChannelRequest" : {
      "type" : "structure",
      "members" : {
        "BundleId" : {
          "shape" : "__string",
          "documentation" : "The bundle id used for APNs Tokens."
        },
        "Certificate" : {
          "shape" : "__string",
          "documentation" : "The distribution certificate from Apple."
        },
        "DefaultAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The default authentication method used for APNs."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "PrivateKey" : {
          "shape" : "__string",
          "documentation" : "The certificate private key."
        },
        "TeamId" : {
          "shape" : "__string",
          "documentation" : "The team id used for APNs Tokens."
        },
        "TokenKey" : {
          "shape" : "__string",
          "documentation" : "The token key used for APNs Tokens."
        },
        "TokenKeyId" : {
          "shape" : "__string",
          "documentation" : "The token key used for APNs Tokens."
        }
      },
      "documentation" : "Apple VoIP Developer Push Notification Service channel definition.",
      "required" : [ ]
    },
    "APNSVoipSandboxChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "Application id"
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "When was this segment created"
        },
        "DefaultAuthenticationMethod" : {
          "shape" : "__string",
          "documentation" : "The default authentication method used for APNs."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "HasTokenKey" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is registered with a token key for authentication."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "Channel ID. Not used, only for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Is this channel archived"
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "Who made the last change"
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "Last date this was updated"
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "The platform type. Will be APNS."
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "Version of channel"
        }
      },
      "documentation" : "Apple VoIP Developer Push Notification Service channel definition.",
      "required" : [ ]
    },
    "Action" : {
      "type" : "string",
      "enum" : [ "OPEN_APP", "DEEP_LINK", "URL" ]
    },
    "ActivitiesResponse" : {
      "type" : "structure",
      "members" : {
        "Item" : {
          "shape" : "ListOfActivityResponse",
          "documentation" : "List of campaign activities"
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The string that you use in a subsequent request to get the next page of results in a paginated response."
        }
      },
      "documentation" : "Activities for campaign.",
      "required" : [ ]
    },
    "ActivityResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application to which the campaign applies."
        },
        "CampaignId" : {
          "shape" : "__string",
          "documentation" : "The ID of the campaign to which the activity applies."
        },
        "End" : {
          "shape" : "__string",
          "documentation" : "The actual time the activity was marked CANCELLED or COMPLETED. Provided in ISO 8601 format."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique activity ID."
        },
        "Result" : {
          "shape" : "__string",
          "documentation" : "Indicates whether the activity succeeded.\n\nValid values: SUCCESS, FAIL"
        },
        "ScheduledStart" : {
          "shape" : "__string",
          "documentation" : "The scheduled start time for the activity in ISO 8601 format."
        },
        "Start" : {
          "shape" : "__string",
          "documentation" : "The actual start time of the activity in ISO 8601 format."
        },
        "State" : {
          "shape" : "__string",
          "documentation" : "The state of the activity.\n\nValid values: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, COMPLETED"
        },
        "SuccessfulEndpointCount" : {
          "shape" : "__integer",
          "documentation" : "The total number of endpoints to which the campaign successfully delivered messages."
        },
        "TimezonesCompletedCount" : {
          "shape" : "__integer",
          "documentation" : "The total number of timezones completed."
        },
        "TimezonesTotalCount" : {
          "shape" : "__integer",
          "documentation" : "The total number of unique timezones present in the segment."
        },
        "TotalEndpointCount" : {
          "shape" : "__integer",
          "documentation" : "The total number of endpoints to which the campaign attempts to deliver messages."
        },
        "TreatmentId" : {
          "shape" : "__string",
          "documentation" : "The ID of a variation of the campaign used for A/B testing."
        }
      },
      "documentation" : "Activity definition",
      "required" : [ ]
    },
    "AddressConfiguration" : {
      "type" : "structure",
      "members" : {
        "BodyOverride" : {
          "shape" : "__string",
          "documentation" : "Body override. If specified will override default body."
        },
        "ChannelType" : {
          "shape" : "ChannelType",
          "documentation" : "The channel type.\n\nValid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU"
        },
        "Context" : {
          "shape" : "MapOf__string",
          "documentation" : "A map of custom attributes to attributes to be attached to the message for this address. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes."
        },
        "RawContent" : {
          "shape" : "__string",
          "documentation" : "The Raw JSON formatted string to be used as the payload. This value overrides the message."
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "A map of substitution values for the message to be merged with the DefaultMessage's substitutions. Substitutions on this map take precedence over the all other substitutions."
        },
        "TitleOverride" : {
          "shape" : "__string",
          "documentation" : "Title override. If specified will override default title if applicable."
        }
      },
      "documentation" : "Address configuration."
    },
    "ApplicationResponse" : {
      "type" : "structure",
      "members" : {
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique application ID."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The display name of the application."
        }
      },
      "documentation" : "Application Response.",
      "required" : [ ]
    },
    "ApplicationSettingsResource" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The unique ID for the application."
        },
        "CampaignHook" : {
          "shape" : "CampaignHook",
          "documentation" : "Default campaign hook."
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "The date that the settings were last updated in ISO 8601 format."
        },
        "Limits" : {
          "shape" : "CampaignLimits",
          "documentation" : "The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own."
        },
        "QuietTime" : {
          "shape" : "QuietTime",
          "documentation" : "The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own."
        }
      },
      "documentation" : "Application settings.",
      "required" : [ ]
    },
    "ApplicationsResponse" : {
      "type" : "structure",
      "members" : {
        "Item" : {
          "shape" : "ListOfApplicationResponse",
          "documentation" : "List of applications returned in this page."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The string that you use in a subsequent request to get the next page of results in a paginated response."
        }
      },
      "documentation" : "Get Applications Result."
    },
    "AttributeDimension" : {
      "type" : "structure",
      "members" : {
        "AttributeType" : {
          "shape" : "AttributeType",
          "documentation" : "The type of dimension:\nINCLUSIVE - Endpoints that match the criteria are included in the segment.\nEXCLUSIVE - Endpoints that match the criteria are excluded from the segment."
        },
        "Values" : {
          "shape" : "ListOf__string",
          "documentation" : "The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type."
        }
      },
      "documentation" : "Custom attibute dimension",
      "required" : [ ]
    },
    "AttributeType" : {
      "type" : "string",
      "enum" : [ "INCLUSIVE", "EXCLUSIVE" ]
    },
    "AttributesResource" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The unique ID for the application."
        },
        "AttributeType" : {
          "shape" : "__string",
          "documentation" : "The attribute type for the application."
        },
        "Attributes" : {
          "shape" : "ListOf__string",
          "documentation" : "The attributes for the application."
        }
      },
      "documentation" : "Attributes.",
      "required" : [ ]
    },
    "BadRequestException" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "The error message that's returned from the API."
        },
        "RequestID" : {
          "shape" : "__string",
          "documentation" : "The unique message body ID."
        }
      },
      "documentation" : "Simple message object.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 400
      }
    },
    "BaiduChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApiKey" : {
          "shape" : "__string",
          "documentation" : "Platform credential API key from Baidu."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "SecretKey" : {
          "shape" : "__string",
          "documentation" : "Platform credential Secret key from Baidu."
        }
      },
      "documentation" : "Baidu Cloud Push credentials",
      "required" : [ ]
    },
    "BaiduChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "Application id"
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "When was this segment created"
        },
        "Credential" : {
          "shape" : "__string",
          "documentation" : "The Baidu API key from Baidu."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "Channel ID. Not used, only for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Is this channel archived"
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "Who made the last change"
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "Last date this was updated"
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "The platform type. Will be BAIDU"
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "Version of channel"
        }
      },
      "documentation" : "Baidu Cloud Messaging channel definition",
      "required" : [ ]
    },
    "BaiduMessage" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "Action",
          "documentation" : "The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL"
        },
        "Body" : {
          "shape" : "__string",
          "documentation" : "The message body of the notification."
        },
        "Data" : {
          "shape" : "MapOf__string",
          "documentation" : "The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object"
        },
        "IconReference" : {
          "shape" : "__string",
          "documentation" : "The icon image name of the asset saved in your application."
        },
        "ImageIconUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used as the large icon to the notification content view."
        },
        "ImageUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used in the push notification."
        },
        "RawContent" : {
          "shape" : "__string",
          "documentation" : "The Raw JSON formatted string to be used as the payload. This value overrides the message."
        },
        "SilentPush" : {
          "shape" : "__boolean",
          "documentation" : "Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases."
        },
        "SmallImageIconUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used as the small icon for the notification which will be used to represent the notification in the status bar and content view"
        },
        "Sound" : {
          "shape" : "__string",
          "documentation" : "Indicates a sound to play when the device receives the notification. Supports default, or the filename of a sound resource bundled in the app. Android sound files must reside in /res/raw/"
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Default message substitutions. Can be overridden by individual address substitutions."
        },
        "TimeToLive" : {
          "shape" : "__integer",
          "documentation" : "This parameter specifies how long (in seconds) the message should be kept in Baidu storage if the device is offline. The and the default value and the maximum time to live supported is 7 days (604800 seconds)"
        },
        "Title" : {
          "shape" : "__string",
          "documentation" : "The message title that displays above the message on the user's device."
        },
        "Url" : {
          "shape" : "__string",
          "documentation" : "The URL to open in the user's mobile browser. Used if the value for Action is URL."
        }
      },
      "documentation" : "Baidu Message."
    },
    "CampaignEmailMessage" : {
      "type" : "structure",
      "members" : {
        "Body" : {
          "shape" : "__string",
          "documentation" : "The email text body."
        },
        "FromAddress" : {
          "shape" : "__string",
          "documentation" : "The email address used to send the email from. Defaults to use FromAddress specified in the Email Channel."
        },
        "HtmlBody" : {
          "shape" : "__string",
          "documentation" : "The email html body."
        },
        "Title" : {
          "shape" : "__string",
          "documentation" : "The email title (Or subject)."
        }
      },
      "documentation" : "The email message configuration.",
      "required" : [ ]
    },
    "CampaignHook" : {
      "type" : "structure",
      "members" : {
        "LambdaFunctionName" : {
          "shape" : "__string",
          "documentation" : "Lambda function name or arn to be called for delivery"
        },
        "Mode" : {
          "shape" : "Mode",
          "documentation" : "What mode Lambda should be invoked in."
        },
        "WebUrl" : {
          "shape" : "__string",
          "documentation" : "Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request"
        }
      },
      "documentation" : "Campaign hook information."
    },
    "CampaignLimits" : {
      "type" : "structure",
      "members" : {
        "Daily" : {
          "shape" : "__integer",
          "documentation" : "The maximum number of messages that the campaign can send daily."
        },
        "MaximumDuration" : {
          "shape" : "__integer",
          "documentation" : "The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60."
        },
        "MessagesPerSecond" : {
          "shape" : "__integer",
          "documentation" : "The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000."
        },
        "Total" : {
          "shape" : "__integer",
          "documentation" : "The maximum total number of messages that the campaign can send."
        }
      },
      "documentation" : "Campaign Limits are used to limit the number of messages that can be sent to a user."
    },
    "CampaignResponse" : {
      "type" : "structure",
      "members" : {
        "AdditionalTreatments" : {
          "shape" : "ListOfTreatmentResource",
          "documentation" : "Treatments that are defined in addition to the default treatment."
        },
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application to which the campaign applies."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date the campaign was created in ISO 8601 format."
        },
        "DefaultState" : {
          "shape" : "CampaignState",
          "documentation" : "The status of the campaign's default treatment. Only present for A/B test campaigns."
        },
        "Description" : {
          "shape" : "__string",
          "documentation" : "A description of the campaign."
        },
        "HoldoutPercent" : {
          "shape" : "__integer",
          "documentation" : "The allocated percentage of end users who will not receive messages from this campaign."
        },
        "Hook" : {
          "shape" : "CampaignHook",
          "documentation" : "Campaign hook information."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique campaign ID."
        },
        "IsPaused" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether the campaign is paused. A paused campaign does not send messages unless you resume it by setting IsPaused to false."
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "The date the campaign was last updated in ISO 8601 format.\t"
        },
        "Limits" : {
          "shape" : "CampaignLimits",
          "documentation" : "The campaign limits settings."
        },
        "MessageConfiguration" : {
          "shape" : "MessageConfiguration",
          "documentation" : "The message configuration settings."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The custom name of the campaign."
        },
        "Schedule" : {
          "shape" : "Schedule",
          "documentation" : "The campaign schedule."
        },
        "SegmentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the segment to which the campaign sends messages."
        },
        "SegmentVersion" : {
          "shape" : "__integer",
          "documentation" : "The version of the segment to which the campaign sends messages."
        },
        "State" : {
          "shape" : "CampaignState",
          "documentation" : "The campaign status.\n\nAn A/B test campaign will have a status of COMPLETED only when all treatments have a status of COMPLETED."
        },
        "TreatmentDescription" : {
          "shape" : "__string",
          "documentation" : "A custom description for the treatment."
        },
        "TreatmentName" : {
          "shape" : "__string",
          "documentation" : "The custom name of a variation of the campaign used for A/B testing."
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "The campaign version number."
        }
      },
      "documentation" : "Campaign definition",
      "required" : [ ]
    },
    "CampaignSmsMessage" : {
      "type" : "structure",
      "members" : {
        "Body" : {
          "shape" : "__string",
          "documentation" : "The SMS text body."
        },
        "MessageType" : {
          "shape" : "MessageType",
          "documentation" : "Is this is a transactional SMS message, otherwise a promotional message."
        },
        "SenderId" : {
          "shape" : "__string",
          "documentation" : "Sender ID of sent message."
        }
      },
      "documentation" : "SMS message configuration."
    },
    "CampaignState" : {
      "type" : "structure",
      "members" : {
        "CampaignStatus" : {
          "shape" : "CampaignStatus",
          "documentation" : "The status of the campaign, or the status of a treatment that belongs to an A/B test campaign.\n\nValid values: SCHEDULED, EXECUTING, PENDING_NEXT_RUN, COMPLETED, PAUSED"
        }
      },
      "documentation" : "State of the Campaign"
    },
    "CampaignStatus" : {
      "type" : "string",
      "enum" : [ "SCHEDULED", "EXECUTING", "PENDING_NEXT_RUN", "COMPLETED", "PAUSED", "DELETED" ]
    },
    "CampaignsResponse" : {
      "type" : "structure",
      "members" : {
        "Item" : {
          "shape" : "ListOfCampaignResponse",
          "documentation" : "A list of campaigns."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The string that you use in a subsequent request to get the next page of results in a paginated response."
        }
      },
      "documentation" : "List of available campaigns.",
      "required" : [ ]
    },
    "ChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "Application id"
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "When was this segment created"
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "Channel ID. Not used, only for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Is this channel archived"
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "Who made the last change"
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "Last date this was updated"
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "Version of channel"
        }
      },
      "documentation" : "Base definition for channel response."
    },
    "ChannelType" : {
      "type" : "string",
      "enum" : [ "GCM", "APNS", "APNS_SANDBOX", "APNS_VOIP", "APNS_VOIP_SANDBOX", "ADM", "SMS", "EMAIL", "BAIDU", "CUSTOM" ]
    },
    "ChannelsResponse" : {
      "type" : "structure",
      "members" : {
        "Channels" : {
          "shape" : "MapOfChannelResponse",
          "documentation" : "A map of channels, with the ChannelType as the key and the Channel as the value."
        }
      },
      "documentation" : "Get channels definition",
      "required" : [ ]
    },
    "CreateAppRequest" : {
      "type" : "structure",
      "members" : {
        "CreateApplicationRequest" : {
          "shape" : "CreateApplicationRequest"
        }
      },
      "required" : [ "CreateApplicationRequest" ],
      "payload" : "CreateApplicationRequest"
    },
    "CreateAppResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationResponse" : {
          "shape" : "ApplicationResponse"
        }
      },
      "required" : [ "ApplicationResponse" ],
      "payload" : "ApplicationResponse"
    },
    "CreateApplicationRequest" : {
      "type" : "structure",
      "members" : {
        "Name" : {
          "shape" : "__string",
          "documentation" : "The display name of the application. Used in the Amazon Pinpoint console."
        }
      },
      "documentation" : "Application Request.",
      "required" : [ ]
    },
    "CreateCampaignRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "WriteCampaignRequest" : {
          "shape" : "WriteCampaignRequest"
        }
      },
      "required" : [ "ApplicationId", "WriteCampaignRequest" ],
      "payload" : "WriteCampaignRequest"
    },
    "CreateCampaignResponse" : {
      "type" : "structure",
      "members" : {
        "CampaignResponse" : {
          "shape" : "CampaignResponse"
        }
      },
      "required" : [ "CampaignResponse" ],
      "payload" : "CampaignResponse"
    },
    "CreateExportJobRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "ExportJobRequest" : {
          "shape" : "ExportJobRequest"
        }
      },
      "required" : [ "ApplicationId", "ExportJobRequest" ],
      "payload" : "ExportJobRequest"
    },
    "CreateExportJobResponse" : {
      "type" : "structure",
      "members" : {
        "ExportJobResponse" : {
          "shape" : "ExportJobResponse"
        }
      },
      "required" : [ "ExportJobResponse" ],
      "payload" : "ExportJobResponse"
    },
    "CreateImportJobRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "ImportJobRequest" : {
          "shape" : "ImportJobRequest"
        }
      },
      "required" : [ "ApplicationId", "ImportJobRequest" ],
      "payload" : "ImportJobRequest"
    },
    "CreateImportJobResponse" : {
      "type" : "structure",
      "members" : {
        "ImportJobResponse" : {
          "shape" : "ImportJobResponse"
        }
      },
      "required" : [ "ImportJobResponse" ],
      "payload" : "ImportJobResponse"
    },
    "CreateSegmentRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "WriteSegmentRequest" : {
          "shape" : "WriteSegmentRequest"
        }
      },
      "required" : [ "ApplicationId", "WriteSegmentRequest" ],
      "payload" : "WriteSegmentRequest"
    },
    "CreateSegmentResponse" : {
      "type" : "structure",
      "members" : {
        "SegmentResponse" : {
          "shape" : "SegmentResponse"
        }
      },
      "required" : [ "SegmentResponse" ],
      "payload" : "SegmentResponse"
    },
    "DefaultMessage" : {
      "type" : "structure",
      "members" : {
        "Body" : {
          "shape" : "__string",
          "documentation" : "The message body of the notification, the email body or the text message."
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Default message substitutions. Can be overridden by individual address substitutions."
        }
      },
      "documentation" : "The default message to use across all channels."
    },
    "DefaultPushNotificationMessage" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "Action",
          "documentation" : "The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL"
        },
        "Body" : {
          "shape" : "__string",
          "documentation" : "The message body of the notification."
        },
        "Data" : {
          "shape" : "MapOf__string",
          "documentation" : "The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object"
        },
        "SilentPush" : {
          "shape" : "__boolean",
          "documentation" : "Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases."
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Default message substitutions. Can be overridden by individual address substitutions."
        },
        "Title" : {
          "shape" : "__string",
          "documentation" : "The message title that displays above the message on the user's device."
        },
        "Url" : {
          "shape" : "__string",
          "documentation" : "The URL to open in the user's mobile browser. Used if the value for Action is URL."
        }
      },
      "documentation" : "Default Push Notification Message."
    },
    "DeleteAdmChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteAdmChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ADMChannelResponse" : {
          "shape" : "ADMChannelResponse"
        }
      },
      "required" : [ "ADMChannelResponse" ],
      "payload" : "ADMChannelResponse"
    },
    "DeleteApnsChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteApnsChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSChannelResponse" : {
          "shape" : "APNSChannelResponse"
        }
      },
      "required" : [ "APNSChannelResponse" ],
      "payload" : "APNSChannelResponse"
    },
    "DeleteApnsSandboxChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteApnsSandboxChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSSandboxChannelResponse" : {
          "shape" : "APNSSandboxChannelResponse"
        }
      },
      "required" : [ "APNSSandboxChannelResponse" ],
      "payload" : "APNSSandboxChannelResponse"
    },
    "DeleteApnsVoipChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteApnsVoipChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSVoipChannelResponse" : {
          "shape" : "APNSVoipChannelResponse"
        }
      },
      "required" : [ "APNSVoipChannelResponse" ],
      "payload" : "APNSVoipChannelResponse"
    },
    "DeleteApnsVoipSandboxChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteApnsVoipSandboxChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSVoipSandboxChannelResponse" : {
          "shape" : "APNSVoipSandboxChannelResponse"
        }
      },
      "required" : [ "APNSVoipSandboxChannelResponse" ],
      "payload" : "APNSVoipSandboxChannelResponse"
    },
    "DeleteAppRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteAppResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationResponse" : {
          "shape" : "ApplicationResponse"
        }
      },
      "required" : [ "ApplicationResponse" ],
      "payload" : "ApplicationResponse"
    },
    "DeleteBaiduChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteBaiduChannelResponse" : {
      "type" : "structure",
      "members" : {
        "BaiduChannelResponse" : {
          "shape" : "BaiduChannelResponse"
        }
      },
      "required" : [ "BaiduChannelResponse" ],
      "payload" : "BaiduChannelResponse"
    },
    "DeleteCampaignRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "CampaignId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "campaign-id",
          "documentation" : "The unique ID of the campaign."
        }
      },
      "required" : [ "CampaignId", "ApplicationId" ]
    },
    "DeleteCampaignResponse" : {
      "type" : "structure",
      "members" : {
        "CampaignResponse" : {
          "shape" : "CampaignResponse"
        }
      },
      "required" : [ "CampaignResponse" ],
      "payload" : "CampaignResponse"
    },
    "DeleteEmailChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteEmailChannelResponse" : {
      "type" : "structure",
      "members" : {
        "EmailChannelResponse" : {
          "shape" : "EmailChannelResponse"
        }
      },
      "required" : [ "EmailChannelResponse" ],
      "payload" : "EmailChannelResponse"
    },
    "DeleteEndpointRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "EndpointId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "endpoint-id",
          "documentation" : "The unique ID of the endpoint."
        }
      },
      "required" : [ "ApplicationId", "EndpointId" ]
    },
    "DeleteEndpointResponse" : {
      "type" : "structure",
      "members" : {
        "EndpointResponse" : {
          "shape" : "EndpointResponse"
        }
      },
      "required" : [ "EndpointResponse" ],
      "payload" : "EndpointResponse"
    },
    "DeleteEventStreamRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteEventStreamResponse" : {
      "type" : "structure",
      "members" : {
        "EventStream" : {
          "shape" : "EventStream"
        }
      },
      "required" : [ "EventStream" ],
      "payload" : "EventStream"
    },
    "DeleteGcmChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteGcmChannelResponse" : {
      "type" : "structure",
      "members" : {
        "GCMChannelResponse" : {
          "shape" : "GCMChannelResponse"
        }
      },
      "required" : [ "GCMChannelResponse" ],
      "payload" : "GCMChannelResponse"
    },
    "DeleteSegmentRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "SegmentId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "segment-id",
          "documentation" : "The unique ID of the segment."
        }
      },
      "required" : [ "SegmentId", "ApplicationId" ]
    },
    "DeleteSegmentResponse" : {
      "type" : "structure",
      "members" : {
        "SegmentResponse" : {
          "shape" : "SegmentResponse"
        }
      },
      "required" : [ "SegmentResponse" ],
      "payload" : "SegmentResponse"
    },
    "DeleteSmsChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "DeleteSmsChannelResponse" : {
      "type" : "structure",
      "members" : {
        "SMSChannelResponse" : {
          "shape" : "SMSChannelResponse"
        }
      },
      "required" : [ "SMSChannelResponse" ],
      "payload" : "SMSChannelResponse"
    },
    "DeleteUserEndpointsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "UserId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "user-id",
          "documentation" : "The unique ID of the user."
        }
      },
      "required" : [ "ApplicationId", "UserId" ]
    },
    "DeleteUserEndpointsResponse" : {
      "type" : "structure",
      "members" : {
        "EndpointsResponse" : {
          "shape" : "EndpointsResponse"
        }
      },
      "required" : [ "EndpointsResponse" ],
      "payload" : "EndpointsResponse"
    },
    "DeliveryStatus" : {
      "type" : "string",
      "enum" : [ "SUCCESSFUL", "THROTTLED", "TEMPORARY_FAILURE", "PERMANENT_FAILURE", "UNKNOWN_FAILURE", "OPT_OUT", "DUPLICATE" ]
    },
    "DimensionType" : {
      "type" : "string",
      "enum" : [ "INCLUSIVE", "EXCLUSIVE" ]
    },
    "DirectMessageConfiguration" : {
      "type" : "structure",
      "members" : {
        "ADMMessage" : {
          "shape" : "ADMMessage",
          "documentation" : "The message to ADM channels. Overrides the default push notification message."
        },
        "APNSMessage" : {
          "shape" : "APNSMessage",
          "documentation" : "The message to APNS channels. Overrides the default push notification message."
        },
        "BaiduMessage" : {
          "shape" : "BaiduMessage",
          "documentation" : "The message to Baidu GCM channels. Overrides the default push notification message."
        },
        "DefaultMessage" : {
          "shape" : "DefaultMessage",
          "documentation" : "The default message for all channels."
        },
        "DefaultPushNotificationMessage" : {
          "shape" : "DefaultPushNotificationMessage",
          "documentation" : "The default push notification message for all push channels."
        },
        "GCMMessage" : {
          "shape" : "GCMMessage",
          "documentation" : "The message to GCM channels. Overrides the default push notification message."
        },
        "SMSMessage" : {
          "shape" : "SMSMessage",
          "documentation" : "The message to SMS channels. Overrides the default message."
        }
      },
      "documentation" : "Message definitions for the default message and any messages that are tailored for specific channels.",
      "required" : [ ]
    },
    "Duration" : {
      "type" : "string",
      "enum" : [ "HR_24", "DAY_7", "DAY_14", "DAY_30" ]
    },
    "EmailChannelRequest" : {
      "type" : "structure",
      "members" : {
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "FromAddress" : {
          "shape" : "__string",
          "documentation" : "The email address used to send emails from."
        },
        "Identity" : {
          "shape" : "__string",
          "documentation" : "The ARN of an identity verified with SES."
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service"
        }
      },
      "documentation" : "Email Channel Request",
      "required" : [ ]
    },
    "EmailChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the application to which the email channel belongs."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date that the settings were last updated in ISO 8601 format."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "FromAddress" : {
          "shape" : "__string",
          "documentation" : "The email address used to send emails from."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "Channel ID. Not used, only for backwards compatibility."
        },
        "Identity" : {
          "shape" : "__string",
          "documentation" : "The ARN of an identity verified with SES."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Is this channel archived"
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "Who last updated this entry"
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "Last date this was updated"
        },
        "MessagesPerSecond" : {
          "shape" : "__integer",
          "documentation" : "Messages per second that can be sent"
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "Platform type. Will be \"EMAIL\""
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service"
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "Version of channel"
        }
      },
      "documentation" : "Email Channel Response.",
      "required" : [ ]
    },
    "EndpointBatchItem" : {
      "type" : "structure",
      "members" : {
        "Address" : {
          "shape" : "__string",
          "documentation" : "The destination for messages that you send to this endpoint. The address varies by channel. For mobile push channels, use the token provided by the push notification service, such as the APNs device token or the FCM registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address."
        },
        "Attributes" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named \"interests\" might have the values [\"science\", \"politics\", \"travel\"]. You can use these attributes as selection criteria when you create a segment of users to engage with a messaging campaign.\n\nThe following characters are not recommended in attribute names: # : ? \\ /. The Amazon Pinpoint console does not display attributes that include these characters in the name. This limitation does not apply to attribute values."
        },
        "ChannelType" : {
          "shape" : "ChannelType",
          "documentation" : "The channel type.\n\nValid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU"
        },
        "Demographic" : {
          "shape" : "EndpointDemographic",
          "documentation" : "The endpoint demographic attributes."
        },
        "EffectiveDate" : {
          "shape" : "__string",
          "documentation" : "The last time the endpoint was updated. Provided in ISO 8601 format."
        },
        "EndpointStatus" : {
          "shape" : "__string",
          "documentation" : "Unused."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique Id for the Endpoint in the batch."
        },
        "Location" : {
          "shape" : "EndpointLocation",
          "documentation" : "The endpoint location attributes."
        },
        "Metrics" : {
          "shape" : "MapOf__double",
          "documentation" : "Custom metrics that your app reports to Amazon Pinpoint."
        },
        "OptOut" : {
          "shape" : "__string",
          "documentation" : "Indicates whether a user has opted out of receiving messages with one of the following values:\n\nALL - User has opted out of all messages.\n\nNONE - Users has not opted out and receives all messages."
        },
        "RequestId" : {
          "shape" : "__string",
          "documentation" : "The unique ID for the most recent request to update the endpoint."
        },
        "User" : {
          "shape" : "EndpointUser",
          "documentation" : "Custom user-specific attributes that your app reports to Amazon Pinpoint."
        }
      },
      "documentation" : "Endpoint update request"
    },
    "EndpointBatchRequest" : {
      "type" : "structure",
      "members" : {
        "Item" : {
          "shape" : "ListOfEndpointBatchItem",
          "documentation" : "List of items to update. Maximum 100 items"
        }
      },
      "documentation" : "Endpoint batch update request.",
      "required" : [ ]
    },
    "EndpointDemographic" : {
      "type" : "structure",
      "members" : {
        "AppVersion" : {
          "shape" : "__string",
          "documentation" : "The version of the application associated with the endpoint."
        },
        "Locale" : {
          "shape" : "__string",
          "documentation" : "The endpoint locale in the following format: The ISO 639-1 alpha-2 code, followed by an underscore, followed by an ISO 3166-1 alpha-2 value.\n"
        },
        "Make" : {
          "shape" : "__string",
          "documentation" : "The manufacturer of the endpoint device, such as Apple or Samsung."
        },
        "Model" : {
          "shape" : "__string",
          "documentation" : "The model name or number of the endpoint device, such as iPhone."
        },
        "ModelVersion" : {
          "shape" : "__string",
          "documentation" : "The model version of the endpoint device."
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "The platform of the endpoint device, such as iOS or Android."
        },
        "PlatformVersion" : {
          "shape" : "__string",
          "documentation" : "The platform version of the endpoint device."
        },
        "Timezone" : {
          "shape" : "__string",
          "documentation" : "The timezone of the endpoint. Specified as a tz database value, such as Americas/Los_Angeles."
        }
      },
      "documentation" : "Demographic information about the endpoint."
    },
    "EndpointItemResponse" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "A custom message associated with the registration of an endpoint when issuing a response."
        },
        "StatusCode" : {
          "shape" : "__integer",
          "documentation" : "The status code to respond with for a particular endpoint id after endpoint registration"
        }
      },
      "documentation" : "The responses that are returned after you create or update an endpoint and record an event."
    },
    "EndpointLocation" : {
      "type" : "structure",
      "members" : {
        "City" : {
          "shape" : "__string",
          "documentation" : "The city where the endpoint is located."
        },
        "Country" : {
          "shape" : "__string",
          "documentation" : "The two-letter code for the country or region of the endpoint. Specified as an ISO 3166-1 Alpha-2 code, such as \"US\" for the United States."
        },
        "Latitude" : {
          "shape" : "__double",
          "documentation" : "The latitude of the endpoint location, rounded to one decimal place."
        },
        "Longitude" : {
          "shape" : "__double",
          "documentation" : "The longitude of the endpoint location, rounded to one decimal place."
        },
        "PostalCode" : {
          "shape" : "__string",
          "documentation" : "The postal code or zip code of the endpoint."
        },
        "Region" : {
          "shape" : "__string",
          "documentation" : "The region of the endpoint location. For example, in the United States, this corresponds to a state."
        }
      },
      "documentation" : "Location data for the endpoint."
    },
    "EndpointMessageResult" : {
      "type" : "structure",
      "members" : {
        "Address" : {
          "shape" : "__string",
          "documentation" : "Address that endpoint message was delivered to."
        },
        "DeliveryStatus" : {
          "shape" : "DeliveryStatus",
          "documentation" : "The delivery status of the message. Possible values:\n\nSUCCESS - The message was successfully delivered to the endpoint.\n\nTRANSIENT_FAILURE - A temporary error occurred. Amazon Pinpoint will attempt to deliver the message again later.\n\nFAILURE_PERMANENT - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.\n\nTIMEOUT - The message couldn't be sent within the timeout period.\n\nQUIET_TIME - The local time for the endpoint was within the Quiet Hours for the campaign.\n\nDAILY_CAP - The endpoint has received the maximum number of messages it can receive within a 24-hour period.\n\nHOLDOUT - The endpoint was in a hold out treatment for the campaign.\n\nTHROTTLED - Amazon Pinpoint throttled sending to this endpoint.\n\nEXPIRED - The endpoint address is expired.\n\nCAMPAIGN_CAP - The endpoint received the maximum number of messages allowed by the campaign.\n\nSERVICE_FAILURE - A service-level failure prevented Amazon Pinpoint from delivering the message.\n\nUNKNOWN - An unknown error occurred."
        },
        "MessageId" : {
          "shape" : "__string",
          "documentation" : "Unique message identifier associated with the message that was sent."
        },
        "StatusCode" : {
          "shape" : "__integer",
          "documentation" : "Downstream service status code."
        },
        "StatusMessage" : {
          "shape" : "__string",
          "documentation" : "Status message for message delivery."
        },
        "UpdatedToken" : {
          "shape" : "__string",
          "documentation" : "If token was updated as part of delivery. (This is GCM Specific)"
        }
      },
      "documentation" : "The result from sending a message to an endpoint.",
      "required" : [ ]
    },
    "EndpointRequest" : {
      "type" : "structure",
      "members" : {
        "Address" : {
          "shape" : "__string",
          "documentation" : "The destination for messages that you send to this endpoint. The address varies by channel. For mobile push channels, use the token provided by the push notification service, such as the APNs device token or the FCM registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address."
        },
        "Attributes" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named \"interests\" might have the values [\"science\", \"politics\", \"travel\"]. You can use these attributes as selection criteria when you create a segment of users to engage with a messaging campaign.\n\nThe following characters are not recommended in attribute names: # : ? \\ /. The Amazon Pinpoint console does not display attributes that include these characters in the name. This limitation does not apply to attribute values."
        },
        "ChannelType" : {
          "shape" : "ChannelType",
          "documentation" : "The channel type.\n\nValid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU"
        },
        "Demographic" : {
          "shape" : "EndpointDemographic",
          "documentation" : "Demographic attributes for the endpoint."
        },
        "EffectiveDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when the endpoint was updated, shown in ISO 8601 format."
        },
        "EndpointStatus" : {
          "shape" : "__string",
          "documentation" : "Unused."
        },
        "Location" : {
          "shape" : "EndpointLocation",
          "documentation" : "The endpoint location attributes."
        },
        "Metrics" : {
          "shape" : "MapOf__double",
          "documentation" : "Custom metrics that your app reports to Amazon Pinpoint."
        },
        "OptOut" : {
          "shape" : "__string",
          "documentation" : "Indicates whether a user has opted out of receiving messages with one of the following values:\n\nALL - User has opted out of all messages.\n\nNONE - Users has not opted out and receives all messages."
        },
        "RequestId" : {
          "shape" : "__string",
          "documentation" : "The unique ID for the most recent request to update the endpoint."
        },
        "User" : {
          "shape" : "EndpointUser",
          "documentation" : "Custom user-specific attributes that your app reports to Amazon Pinpoint."
        }
      },
      "documentation" : "Endpoint update request"
    },
    "EndpointResponse" : {
      "type" : "structure",
      "members" : {
        "Address" : {
          "shape" : "__string",
          "documentation" : "The address of the endpoint as provided by your push provider. For example, the DeviceToken or RegistrationId."
        },
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application that is associated with the endpoint."
        },
        "Attributes" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named \"interests\" might have the following values: [\"science\", \"politics\", \"travel\"]. You can use these attributes as selection criteria when you create segments.\n\nThe Amazon Pinpoint console can't display attribute names that include the following characters: hash/pound sign (#), colon (:), question mark (?), backslash (\\), and forward slash (/). For this reason, you should avoid using these characters in the names of custom attributes."
        },
        "ChannelType" : {
          "shape" : "ChannelType",
          "documentation" : "The channel type.\n\nValid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU"
        },
        "CohortId" : {
          "shape" : "__string",
          "documentation" : "A number from 0-99 that represents the cohort the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an app. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for a campaign."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when the endpoint was created, shown in ISO 8601 format."
        },
        "Demographic" : {
          "shape" : "EndpointDemographic",
          "documentation" : "The endpoint demographic attributes."
        },
        "EffectiveDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when the endpoint was last updated, shown in ISO 8601 format."
        },
        "EndpointStatus" : {
          "shape" : "__string",
          "documentation" : "Unused."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique ID that you assigned to the endpoint. The ID should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint IDs associated with the application."
        },
        "Location" : {
          "shape" : "EndpointLocation",
          "documentation" : "The endpoint location attributes."
        },
        "Metrics" : {
          "shape" : "MapOf__double",
          "documentation" : "Custom metrics that your app reports to Amazon Pinpoint."
        },
        "OptOut" : {
          "shape" : "__string",
          "documentation" : "Indicates whether a user has opted out of receiving messages with one of the following values:\n\nALL - User has opted out of all messages.\n\nNONE - Users has not opted out and receives all messages."
        },
        "RequestId" : {
          "shape" : "__string",
          "documentation" : "The unique ID for the most recent request to update the endpoint."
        },
        "User" : {
          "shape" : "EndpointUser",
          "documentation" : "Custom user-specific attributes that your app reports to Amazon Pinpoint."
        }
      },
      "documentation" : "Endpoint response"
    },
    "EndpointSendConfiguration" : {
      "type" : "structure",
      "members" : {
        "BodyOverride" : {
          "shape" : "__string",
          "documentation" : "Body override. If specified will override default body."
        },
        "Context" : {
          "shape" : "MapOf__string",
          "documentation" : "A map of custom attributes to attributes to be attached to the message for this address. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes."
        },
        "RawContent" : {
          "shape" : "__string",
          "documentation" : "The Raw JSON formatted string to be used as the payload. This value overrides the message."
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "A map of substitution values for the message to be merged with the DefaultMessage's substitutions. Substitutions on this map take precedence over the all other substitutions."
        },
        "TitleOverride" : {
          "shape" : "__string",
          "documentation" : "Title override. If specified will override default title if applicable."
        }
      },
      "documentation" : "Endpoint send configuration."
    },
    "EndpointUser" : {
      "type" : "structure",
      "members" : {
        "UserAttributes" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Custom attributes that describe the user by associating a name with an array of values. For example, an attribute named \"interests\" might have the following values: [\"science\", \"politics\", \"travel\"]. You can use these attributes as selection criteria when you create segments.\n\nThe Amazon Pinpoint console can't display attribute names that include the following characters: hash/pound sign (#), colon (:), question mark (?), backslash (\\), and forward slash (/). For this reason, you should avoid using these characters in the names of custom attributes."
        },
        "UserId" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the user."
        }
      },
      "documentation" : "Endpoint user specific custom userAttributes"
    },
    "EndpointsResponse" : {
      "type" : "structure",
      "members" : {
        "Item" : {
          "shape" : "ListOfEndpointResponse",
          "documentation" : "The list of endpoints."
        }
      },
      "documentation" : "List of endpoints",
      "required" : [ ]
    },
    "Event" : {
      "type" : "structure",
      "members" : {
        "Attributes" : {
          "shape" : "MapOf__string",
          "documentation" : "Custom attributes that are associated with the event you're adding or updating."
        },
        "ClientSdkVersion" : {
          "shape" : "__string",
          "documentation" : "The version of the SDK that's running on the client device."
        },
        "EventType" : {
          "shape" : "__string",
          "documentation" : "The name of the custom event that you're recording."
        },
        "Metrics" : {
          "shape" : "MapOf__double",
          "documentation" : "Event metrics"
        },
        "Session" : {
          "shape" : "Session",
          "documentation" : "The session"
        },
        "Timestamp" : {
          "shape" : "__string",
          "documentation" : "The date and time when the event occurred, in ISO 8601 format."
        }
      },
      "documentation" : "Model for creating or updating events.",
      "required" : [ ]
    },
    "EventItemResponse" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "A custom message that is associated with the processing of an event."
        },
        "StatusCode" : {
          "shape" : "__integer",
          "documentation" : "The status code to respond with for a particular event id"
        }
      },
      "documentation" : "The responses that are returned after you record an event."
    },
    "EventStream" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application from which events should be published."
        },
        "DestinationStreamArn" : {
          "shape" : "__string",
          "documentation" : "The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.\n Firehose ARN: arn:aws:firehose:REGION:ACCOUNT_ID:deliverystream/STREAM_NAME\n Kinesis ARN: arn:aws:kinesis:REGION:ACCOUNT_ID:stream/STREAM_NAME"
        },
        "ExternalId" : {
          "shape" : "__string",
          "documentation" : "(Deprecated) Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint."
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "The date the event stream was last updated in ISO 8601 format."
        },
        "LastUpdatedBy" : {
          "shape" : "__string",
          "documentation" : "The IAM user who last modified the event stream."
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account."
        }
      },
      "documentation" : "Model for an event publishing subscription export.",
      "required" : [ ]
    },
    "EventsBatch" : {
      "type" : "structure",
      "members" : {
        "Endpoint" : {
          "shape" : "PublicEndpoint",
          "documentation" : "Endpoint information"
        },
        "Events" : {
          "shape" : "MapOfEvent",
          "documentation" : "Events"
        }
      },
      "documentation" : "Events batch definition",
      "required" : [ ]
    },
    "EventsRequest" : {
      "type" : "structure",
      "members" : {
        "BatchItem" : {
          "shape" : "MapOfEventsBatch",
          "documentation" : "Batch of events with endpoint id as the key and an object of EventsBatch as value. The EventsBatch object has the PublicEndpoint and a map of event Id's to events"
        }
      },
      "documentation" : "Put Events request",
      "required" : [ ]
    },
    "EventsResponse" : {
      "type" : "structure",
      "members" : {
        "Results" : {
          "shape" : "MapOfItemResponse",
          "documentation" : "A map containing a multi part response for each endpoint, with the endpoint id as the key and item response as the value"
        }
      },
      "documentation" : "The results from processing a put events request"
    },
    "ExportJobRequest" : {
      "type" : "structure",
      "members" : {
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that endpoints will be exported to."
        },
        "S3UrlPrefix" : {
          "shape" : "__string",
          "documentation" : "A URL that points to the location within an Amazon S3 bucket that will receive the export. The location is typically a folder with multiple files.\n\nThe URL should follow this format: s3://bucket-name/folder-name/\n\nAmazon Pinpoint will export endpoints to this location."
        },
        "SegmentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the segment to export endpoints from. If not present, Amazon Pinpoint exports all of the endpoints that belong to the application."
        },
        "SegmentVersion" : {
          "shape" : "__integer",
          "documentation" : "The version of the segment to export if specified."
        }
      },
      "documentation" : "Export job request.",
      "required" : [ ]
    },
    "ExportJobResource" : {
      "type" : "structure",
      "members" : {
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that endpoints will be exported to."
        },
        "S3UrlPrefix" : {
          "shape" : "__string",
          "documentation" : "A URL that points to the location within an Amazon S3 bucket that will receive the export. The location is typically a folder with multiple files.\n\nThe URL should follow this format: s3://bucket-name/folder-name/\n\nAmazon Pinpoint will export endpoints to this location."
        },
        "SegmentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the segment to export endpoints from. If not present, Amazon Pinpoint exports all of the endpoints that belong to the application."
        },
        "SegmentVersion" : {
          "shape" : "__integer",
          "documentation" : "The version of the segment to export if specified."
        }
      },
      "documentation" : "Export job resource.",
      "required" : [ ]
    },
    "ExportJobResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the application associated with the export job."
        },
        "CompletedPieces" : {
          "shape" : "__integer",
          "documentation" : "The number of pieces that have successfully completed as of the time of the request."
        },
        "CompletionDate" : {
          "shape" : "__string",
          "documentation" : "The date the job completed in ISO 8601 format."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date the job was created in ISO 8601 format."
        },
        "Definition" : {
          "shape" : "ExportJobResource",
          "documentation" : "The export job settings."
        },
        "FailedPieces" : {
          "shape" : "__integer",
          "documentation" : "The number of pieces that failed to be processed as of the time of the request."
        },
        "Failures" : {
          "shape" : "ListOf__string",
          "documentation" : "Provides up to 100 of the first failed entries for the job, if any exist."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the job."
        },
        "JobStatus" : {
          "shape" : "JobStatus",
          "documentation" : "The status of the job.\nValid values: CREATED, INITIALIZING, PROCESSING, COMPLETING, COMPLETED, FAILING, FAILED\n\nThe job status is FAILED if one or more pieces failed."
        },
        "TotalFailures" : {
          "shape" : "__integer",
          "documentation" : "The number of endpoints that were not processed; for example, because of syntax errors."
        },
        "TotalPieces" : {
          "shape" : "__integer",
          "documentation" : "The total number of pieces that must be processed to finish the job. Each piece is an approximately equal portion of the endpoints."
        },
        "TotalProcessed" : {
          "shape" : "__integer",
          "documentation" : "The number of endpoints that were processed by the job."
        },
        "Type" : {
          "shape" : "__string",
          "documentation" : "The job type. Will be 'EXPORT'."
        }
      },
      "documentation" : "Export job response.",
      "required" : [ ]
    },
    "ExportJobsResponse" : {
      "type" : "structure",
      "members" : {
        "Item" : {
          "shape" : "ListOfExportJobResponse",
          "documentation" : "A list of export jobs for the application."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The string that you use in a subsequent request to get the next page of results in a paginated response."
        }
      },
      "documentation" : "Export job list.",
      "required" : [ ]
    },
    "ForbiddenException" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "The error message that's returned from the API."
        },
        "RequestID" : {
          "shape" : "__string",
          "documentation" : "The unique message body ID."
        }
      },
      "documentation" : "Simple message object.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 403
      }
    },
    "Format" : {
      "type" : "string",
      "enum" : [ "CSV", "JSON" ]
    },
    "Frequency" : {
      "type" : "string",
      "enum" : [ "ONCE", "HOURLY", "DAILY", "WEEKLY", "MONTHLY" ]
    },
    "GCMChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApiKey" : {
          "shape" : "__string",
          "documentation" : "Platform credential API key from Google."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        }
      },
      "documentation" : "Google Cloud Messaging credentials",
      "required" : [ ]
    },
    "GCMChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application to which the channel applies."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "When was this segment created"
        },
        "Credential" : {
          "shape" : "__string",
          "documentation" : "The GCM API key from Google."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "Channel ID. Not used. Present only for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Is this channel archived"
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "Who last updated this entry"
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "Last date this was updated"
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "The platform type. Will be GCM"
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "Version of channel"
        }
      },
      "documentation" : "Google Cloud Messaging channel definition",
      "required" : [ ]
    },
    "GCMMessage" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "Action",
          "documentation" : "The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL"
        },
        "Body" : {
          "shape" : "__string",
          "documentation" : "The message body of the notification."
        },
        "CollapseKey" : {
          "shape" : "__string",
          "documentation" : "This parameter identifies a group of messages (e.g., with collapse_key: \"Updates Available\") that can be collapsed, so that only the last message gets sent when delivery can be resumed. This is intended to avoid sending too many of the same messages when the device comes back online or becomes active."
        },
        "Data" : {
          "shape" : "MapOf__string",
          "documentation" : "The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object"
        },
        "IconReference" : {
          "shape" : "__string",
          "documentation" : "The icon image name of the asset saved in your application."
        },
        "ImageIconUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used as the large icon to the notification content view."
        },
        "ImageUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used in the push notification."
        },
        "Priority" : {
          "shape" : "__string",
          "documentation" : "The message priority. Amazon Pinpoint uses this value to set the FCM or GCM priority parameter when it sends the message. Accepts the following values:\n\n\"Normal\" - Messages might be delayed. Delivery is optimized for battery usage on the receiving device. Use normal priority unless immediate delivery is required.\n\n\"High\" - Messages are sent immediately and might wake a sleeping device.\n\nThe equivalent values for APNs messages are \"5\" and \"10\". Amazon Pinpoint accepts these values here and converts them.\n\nFor more information, see About FCM Messages in the Firebase documentation."
        },
        "RawContent" : {
          "shape" : "__string",
          "documentation" : "The Raw JSON formatted string to be used as the payload. This value overrides the message."
        },
        "RestrictedPackageName" : {
          "shape" : "__string",
          "documentation" : "This parameter specifies the package name of the application where the registration tokens must match in order to receive the message."
        },
        "SilentPush" : {
          "shape" : "__boolean",
          "documentation" : "Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases."
        },
        "SmallImageIconUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used as the small icon for the notification which will be used to represent the notification in the status bar and content view"
        },
        "Sound" : {
          "shape" : "__string",
          "documentation" : "Indicates a sound to play when the device receives the notification. Supports default, or the filename of a sound resource bundled in the app. Android sound files must reside in /res/raw/"
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Default message substitutions. Can be overridden by individual address substitutions."
        },
        "TimeToLive" : {
          "shape" : "__integer",
          "documentation" : "The length of time (in seconds) that FCM or GCM stores and attempts to deliver the message. If unspecified, the value defaults to the maximum, which is 2,419,200 seconds (28 days). Amazon Pinpoint uses this value to set the FCM or GCM time_to_live parameter."
        },
        "Title" : {
          "shape" : "__string",
          "documentation" : "The message title that displays above the message on the user's device."
        },
        "Url" : {
          "shape" : "__string",
          "documentation" : "The URL to open in the user's mobile browser. Used if the value for Action is URL."
        }
      },
      "documentation" : "GCM Message."
    },
    "GPSCoordinates" : {
      "type" : "structure",
      "members" : {
        "Latitude" : {
          "shape" : "__double",
          "documentation" : "Latitude"
        },
        "Longitude" : {
          "shape" : "__double",
          "documentation" : "Longitude"
        }
      },
      "documentation" : "GPS coordinates",
      "required" : [ ]
    },
    "GPSPointDimension" : {
      "type" : "structure",
      "members" : {
        "Coordinates" : {
          "shape" : "GPSCoordinates",
          "documentation" : "Coordinate to measure distance from."
        },
        "RangeInKilometers" : {
          "shape" : "__double",
          "documentation" : "Range in kilometers from the coordinate."
        }
      },
      "documentation" : "GPS point location dimension",
      "required" : [ ]
    },
    "GetAdmChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetAdmChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ADMChannelResponse" : {
          "shape" : "ADMChannelResponse"
        }
      },
      "required" : [ "ADMChannelResponse" ],
      "payload" : "ADMChannelResponse"
    },
    "GetApnsChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetApnsChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSChannelResponse" : {
          "shape" : "APNSChannelResponse"
        }
      },
      "required" : [ "APNSChannelResponse" ],
      "payload" : "APNSChannelResponse"
    },
    "GetApnsSandboxChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetApnsSandboxChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSSandboxChannelResponse" : {
          "shape" : "APNSSandboxChannelResponse"
        }
      },
      "required" : [ "APNSSandboxChannelResponse" ],
      "payload" : "APNSSandboxChannelResponse"
    },
    "GetApnsVoipChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetApnsVoipChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSVoipChannelResponse" : {
          "shape" : "APNSVoipChannelResponse"
        }
      },
      "required" : [ "APNSVoipChannelResponse" ],
      "payload" : "APNSVoipChannelResponse"
    },
    "GetApnsVoipSandboxChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetApnsVoipSandboxChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSVoipSandboxChannelResponse" : {
          "shape" : "APNSVoipSandboxChannelResponse"
        }
      },
      "required" : [ "APNSVoipSandboxChannelResponse" ],
      "payload" : "APNSVoipSandboxChannelResponse"
    },
    "GetAppRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetAppResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationResponse" : {
          "shape" : "ApplicationResponse"
        }
      },
      "required" : [ "ApplicationResponse" ],
      "payload" : "ApplicationResponse"
    },
    "GetApplicationSettingsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetApplicationSettingsResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationSettingsResource" : {
          "shape" : "ApplicationSettingsResource"
        }
      },
      "required" : [ "ApplicationSettingsResource" ],
      "payload" : "ApplicationSettingsResource"
    },
    "GetAppsRequest" : {
      "type" : "structure",
      "members" : {
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      }
    },
    "GetAppsResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationsResponse" : {
          "shape" : "ApplicationsResponse"
        }
      },
      "required" : [ "ApplicationsResponse" ],
      "payload" : "ApplicationsResponse"
    },
    "GetBaiduChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetBaiduChannelResponse" : {
      "type" : "structure",
      "members" : {
        "BaiduChannelResponse" : {
          "shape" : "BaiduChannelResponse"
        }
      },
      "required" : [ "BaiduChannelResponse" ],
      "payload" : "BaiduChannelResponse"
    },
    "GetCampaignActivitiesRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "CampaignId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "campaign-id",
          "documentation" : "The unique ID of the campaign."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "ApplicationId", "CampaignId" ]
    },
    "GetCampaignActivitiesResponse" : {
      "type" : "structure",
      "members" : {
        "ActivitiesResponse" : {
          "shape" : "ActivitiesResponse"
        }
      },
      "required" : [ "ActivitiesResponse" ],
      "payload" : "ActivitiesResponse"
    },
    "GetCampaignRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "CampaignId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "campaign-id",
          "documentation" : "The unique ID of the campaign."
        }
      },
      "required" : [ "CampaignId", "ApplicationId" ]
    },
    "GetCampaignResponse" : {
      "type" : "structure",
      "members" : {
        "CampaignResponse" : {
          "shape" : "CampaignResponse"
        }
      },
      "required" : [ "CampaignResponse" ],
      "payload" : "CampaignResponse"
    },
    "GetCampaignVersionRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "CampaignId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "campaign-id",
          "documentation" : "The unique ID of the campaign."
        },
        "Version" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "version",
          "documentation" : "The version of the campaign."
        }
      },
      "required" : [ "Version", "ApplicationId", "CampaignId" ]
    },
    "GetCampaignVersionResponse" : {
      "type" : "structure",
      "members" : {
        "CampaignResponse" : {
          "shape" : "CampaignResponse"
        }
      },
      "required" : [ "CampaignResponse" ],
      "payload" : "CampaignResponse"
    },
    "GetCampaignVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "CampaignId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "campaign-id",
          "documentation" : "The unique ID of the campaign."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "ApplicationId", "CampaignId" ]
    },
    "GetCampaignVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "CampaignsResponse" : {
          "shape" : "CampaignsResponse"
        }
      },
      "required" : [ "CampaignsResponse" ],
      "payload" : "CampaignsResponse"
    },
    "GetCampaignsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetCampaignsResponse" : {
      "type" : "structure",
      "members" : {
        "CampaignsResponse" : {
          "shape" : "CampaignsResponse"
        }
      },
      "required" : [ "CampaignsResponse" ],
      "payload" : "CampaignsResponse"
    },
    "GetChannelsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetChannelsResponse" : {
      "type" : "structure",
      "members" : {
        "ChannelsResponse" : {
          "shape" : "ChannelsResponse"
        }
      },
      "required" : [ "ChannelsResponse" ],
      "payload" : "ChannelsResponse"
    },
    "GetEmailChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetEmailChannelResponse" : {
      "type" : "structure",
      "members" : {
        "EmailChannelResponse" : {
          "shape" : "EmailChannelResponse"
        }
      },
      "required" : [ "EmailChannelResponse" ],
      "payload" : "EmailChannelResponse"
    },
    "GetEndpointRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "EndpointId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "endpoint-id",
          "documentation" : "The unique ID of the endpoint."
        }
      },
      "required" : [ "ApplicationId", "EndpointId" ]
    },
    "GetEndpointResponse" : {
      "type" : "structure",
      "members" : {
        "EndpointResponse" : {
          "shape" : "EndpointResponse"
        }
      },
      "required" : [ "EndpointResponse" ],
      "payload" : "EndpointResponse"
    },
    "GetEventStreamRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetEventStreamResponse" : {
      "type" : "structure",
      "members" : {
        "EventStream" : {
          "shape" : "EventStream"
        }
      },
      "required" : [ "EventStream" ],
      "payload" : "EventStream"
    },
    "GetExportJobRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "JobId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "job-id",
          "documentation" : "The unique ID of the job."
        }
      },
      "required" : [ "ApplicationId", "JobId" ]
    },
    "GetExportJobResponse" : {
      "type" : "structure",
      "members" : {
        "ExportJobResponse" : {
          "shape" : "ExportJobResponse"
        }
      },
      "required" : [ "ExportJobResponse" ],
      "payload" : "ExportJobResponse"
    },
    "GetExportJobsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetExportJobsResponse" : {
      "type" : "structure",
      "members" : {
        "ExportJobsResponse" : {
          "shape" : "ExportJobsResponse"
        }
      },
      "required" : [ "ExportJobsResponse" ],
      "payload" : "ExportJobsResponse"
    },
    "GetGcmChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetGcmChannelResponse" : {
      "type" : "structure",
      "members" : {
        "GCMChannelResponse" : {
          "shape" : "GCMChannelResponse"
        }
      },
      "required" : [ "GCMChannelResponse" ],
      "payload" : "GCMChannelResponse"
    },
    "GetImportJobRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "JobId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "job-id",
          "documentation" : "The unique ID of the job."
        }
      },
      "required" : [ "ApplicationId", "JobId" ]
    },
    "GetImportJobResponse" : {
      "type" : "structure",
      "members" : {
        "ImportJobResponse" : {
          "shape" : "ImportJobResponse"
        }
      },
      "required" : [ "ImportJobResponse" ],
      "payload" : "ImportJobResponse"
    },
    "GetImportJobsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetImportJobsResponse" : {
      "type" : "structure",
      "members" : {
        "ImportJobsResponse" : {
          "shape" : "ImportJobsResponse"
        }
      },
      "required" : [ "ImportJobsResponse" ],
      "payload" : "ImportJobsResponse"
    },
    "GetSegmentExportJobsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "SegmentId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "segment-id",
          "documentation" : "The unique ID of the segment."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "SegmentId", "ApplicationId" ]
    },
    "GetSegmentExportJobsResponse" : {
      "type" : "structure",
      "members" : {
        "ExportJobsResponse" : {
          "shape" : "ExportJobsResponse"
        }
      },
      "required" : [ "ExportJobsResponse" ],
      "payload" : "ExportJobsResponse"
    },
    "GetSegmentImportJobsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "SegmentId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "segment-id",
          "documentation" : "The unique ID of the segment."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "SegmentId", "ApplicationId" ]
    },
    "GetSegmentImportJobsResponse" : {
      "type" : "structure",
      "members" : {
        "ImportJobsResponse" : {
          "shape" : "ImportJobsResponse"
        }
      },
      "required" : [ "ImportJobsResponse" ],
      "payload" : "ImportJobsResponse"
    },
    "GetSegmentRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "SegmentId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "segment-id",
          "documentation" : "The unique ID of the segment."
        }
      },
      "required" : [ "SegmentId", "ApplicationId" ]
    },
    "GetSegmentResponse" : {
      "type" : "structure",
      "members" : {
        "SegmentResponse" : {
          "shape" : "SegmentResponse"
        }
      },
      "required" : [ "SegmentResponse" ],
      "payload" : "SegmentResponse"
    },
    "GetSegmentVersionRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "SegmentId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "segment-id",
          "documentation" : "The unique ID of the segment."
        },
        "Version" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "version",
          "documentation" : "The segment version."
        }
      },
      "required" : [ "SegmentId", "Version", "ApplicationId" ]
    },
    "GetSegmentVersionResponse" : {
      "type" : "structure",
      "members" : {
        "SegmentResponse" : {
          "shape" : "SegmentResponse"
        }
      },
      "required" : [ "SegmentResponse" ],
      "payload" : "SegmentResponse"
    },
    "GetSegmentVersionsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "SegmentId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "segment-id",
          "documentation" : "The unique ID of the segment."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "SegmentId", "ApplicationId" ]
    },
    "GetSegmentVersionsResponse" : {
      "type" : "structure",
      "members" : {
        "SegmentsResponse" : {
          "shape" : "SegmentsResponse"
        }
      },
      "required" : [ "SegmentsResponse" ],
      "payload" : "SegmentsResponse"
    },
    "GetSegmentsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "PageSize" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "page-size",
          "documentation" : "The number of entries you want on each page in the response."
        },
        "Token" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "token",
          "documentation" : "The NextToken string returned on a previous page that you use to get the next page of results in a paginated response."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetSegmentsResponse" : {
      "type" : "structure",
      "members" : {
        "SegmentsResponse" : {
          "shape" : "SegmentsResponse"
        }
      },
      "required" : [ "SegmentsResponse" ],
      "payload" : "SegmentsResponse"
    },
    "GetSmsChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId" ]
    },
    "GetSmsChannelResponse" : {
      "type" : "structure",
      "members" : {
        "SMSChannelResponse" : {
          "shape" : "SMSChannelResponse"
        }
      },
      "required" : [ "SMSChannelResponse" ],
      "payload" : "SMSChannelResponse"
    },
    "GetUserEndpointsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "UserId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "user-id",
          "documentation" : "The unique ID of the user."
        }
      },
      "required" : [ "ApplicationId", "UserId" ]
    },
    "GetUserEndpointsResponse" : {
      "type" : "structure",
      "members" : {
        "EndpointsResponse" : {
          "shape" : "EndpointsResponse"
        }
      },
      "required" : [ "EndpointsResponse" ],
      "payload" : "EndpointsResponse"
    },
    "ImportJobRequest" : {
      "type" : "structure",
      "members" : {
        "DefineSegment" : {
          "shape" : "__boolean",
          "documentation" : "Sets whether the endpoints create a segment when they are imported."
        },
        "ExternalId" : {
          "shape" : "__string",
          "documentation" : "(Deprecated) Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint."
        },
        "Format" : {
          "shape" : "Format",
          "documentation" : "The format of the files that contain the endpoint definitions.\nValid values: CSV, JSON"
        },
        "RegisterEndpoints" : {
          "shape" : "__boolean",
          "documentation" : "Sets whether the endpoints are registered with Amazon Pinpoint when they are imported."
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that contains the endpoints to import."
        },
        "S3Url" : {
          "shape" : "__string",
          "documentation" : "The URL of the S3 bucket that contains the segment information to import. The location can be a folder or a single file. The URL should use the following format: s3://bucket-name/folder-name/file-name\n\nAmazon Pinpoint imports endpoints from this location and any subfolders it contains."
        },
        "SegmentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the segment to update if the import job is meant to update an existing segment."
        },
        "SegmentName" : {
          "shape" : "__string",
          "documentation" : "A custom name for the segment created by the import job. Use if DefineSegment is true."
        }
      },
      "documentation" : "Import job request.",
      "required" : [ ]
    },
    "ImportJobResource" : {
      "type" : "structure",
      "members" : {
        "DefineSegment" : {
          "shape" : "__boolean",
          "documentation" : "Sets whether the endpoints create a segment when they are imported."
        },
        "ExternalId" : {
          "shape" : "__string",
          "documentation" : "(Deprecated) Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint."
        },
        "Format" : {
          "shape" : "Format",
          "documentation" : "The format of the files that contain the endpoint definitions.\nValid values: CSV, JSON"
        },
        "RegisterEndpoints" : {
          "shape" : "__boolean",
          "documentation" : "Sets whether the endpoints are registered with Amazon Pinpoint when they are imported."
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that contains the endpoints to import."
        },
        "S3Url" : {
          "shape" : "__string",
          "documentation" : "The URL of the S3 bucket that contains the segment information to import. The location can be a folder or a single file. The URL should use the following format: s3://bucket-name/folder-name/file-name\n\nAmazon Pinpoint imports endpoints from this location and any subfolders it contains."
        },
        "SegmentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the segment to update if the import job is meant to update an existing segment."
        },
        "SegmentName" : {
          "shape" : "__string",
          "documentation" : "A custom name for the segment created by the import job. Use if DefineSegment is true."
        }
      },
      "documentation" : "Import job resource",
      "required" : [ ]
    },
    "ImportJobResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the application to which the import job applies."
        },
        "CompletedPieces" : {
          "shape" : "__integer",
          "documentation" : "The number of pieces that have successfully imported as of the time of the request."
        },
        "CompletionDate" : {
          "shape" : "__string",
          "documentation" : "The date the import job completed in ISO 8601 format."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date the import job was created in ISO 8601 format."
        },
        "Definition" : {
          "shape" : "ImportJobResource",
          "documentation" : "The import job settings."
        },
        "FailedPieces" : {
          "shape" : "__integer",
          "documentation" : "The number of pieces that have failed to import as of the time of the request."
        },
        "Failures" : {
          "shape" : "ListOf__string",
          "documentation" : "Provides up to 100 of the first failed entries for the job, if any exist."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the import job."
        },
        "JobStatus" : {
          "shape" : "JobStatus",
          "documentation" : "The status of the import job.\nValid values: CREATED, INITIALIZING, PROCESSING, COMPLETING, COMPLETED, FAILING, FAILED\n\nThe job status is FAILED if one or more pieces failed to import."
        },
        "TotalFailures" : {
          "shape" : "__integer",
          "documentation" : "The number of endpoints that failed to import; for example, because of syntax errors."
        },
        "TotalPieces" : {
          "shape" : "__integer",
          "documentation" : "The total number of pieces that must be imported to finish the job. Each piece is an approximately equal portion of the endpoints to import."
        },
        "TotalProcessed" : {
          "shape" : "__integer",
          "documentation" : "The number of endpoints that were processed by the import job."
        },
        "Type" : {
          "shape" : "__string",
          "documentation" : "The job type. Will be Import."
        }
      },
      "documentation" : "Import job response.",
      "required" : [ ]
    },
    "ImportJobsResponse" : {
      "type" : "structure",
      "members" : {
        "Item" : {
          "shape" : "ListOfImportJobResponse",
          "documentation" : "A list of import jobs for the application."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "The string that you use in a subsequent request to get the next page of results in a paginated response."
        }
      },
      "documentation" : "Import job list.",
      "required" : [ ]
    },
    "Include" : {
      "type" : "string",
      "enum" : [ "ALL", "ANY", "NONE" ]
    },
    "InternalServerErrorException" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "The error message that's returned from the API."
        },
        "RequestID" : {
          "shape" : "__string",
          "documentation" : "The unique message body ID."
        }
      },
      "documentation" : "Simple message object.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 500
      }
    },
    "ItemResponse" : {
      "type" : "structure",
      "members" : {
        "EndpointItemResponse" : {
          "shape" : "EndpointItemResponse",
          "documentation" : "Endpoint item response after endpoint registration"
        },
        "EventsItemResponse" : {
          "shape" : "MapOfEventItemResponse",
          "documentation" : "Events item response is a multipart response object per event Id, with eventId as the key and EventItemResponse object as the value"
        }
      },
      "documentation" : "The endpoint and events combined response definition"
    },
    "JobStatus" : {
      "type" : "string",
      "enum" : [ "CREATED", "INITIALIZING", "PROCESSING", "COMPLETING", "COMPLETED", "FAILING", "FAILED" ]
    },
    "Message" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "Action",
          "documentation" : "The action that occurs if the user taps a push notification delivered by the campaign:\nOPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action.\n\nDEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app.\n\nURL - The default mobile browser on the user's device launches and opens a web page at the URL you specify."
        },
        "Body" : {
          "shape" : "__string",
          "documentation" : "The message body. Can include up to 140 characters."
        },
        "ImageIconUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to the icon image for the push notification icon, for example, the app icon."
        },
        "ImageSmallIconUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to the small icon image for the push notification icon, for example, the app icon."
        },
        "ImageUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to an image used in the push notification."
        },
        "JsonBody" : {
          "shape" : "__string",
          "documentation" : "The JSON payload used for a silent push."
        },
        "MediaUrl" : {
          "shape" : "__string",
          "documentation" : "The URL that points to the media resource, for example a .mp4 or .gif file."
        },
        "RawContent" : {
          "shape" : "__string",
          "documentation" : "The Raw JSON formatted string to be used as the payload. This value overrides the message."
        },
        "SilentPush" : {
          "shape" : "__boolean",
          "documentation" : "Indicates if the message should display on the users device.\n\nSilent pushes can be used for Remote Configuration and Phone Home use cases. "
        },
        "TimeToLive" : {
          "shape" : "__integer",
          "documentation" : "This parameter specifies how long (in seconds) the message should be kept if the service is unable to deliver the notification the first time. If the value is 0, it treats the notification as if it expires immediately and does not store the notification or attempt to redeliver it. This value is converted to the expiration field when sent to the service. It only applies to APNs and GCM"
        },
        "Title" : {
          "shape" : "__string",
          "documentation" : "The message title that displays above the message on the user's device."
        },
        "Url" : {
          "shape" : "__string",
          "documentation" : "The URL to open in the user's mobile browser. Used if the value for Action is URL."
        }
      },
      "documentation" : "Message to send",
      "required" : [ ]
    },
    "MessageBody" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "The error message that's returned from the API."
        },
        "RequestID" : {
          "shape" : "__string",
          "documentation" : "The unique message body ID."
        }
      },
      "documentation" : "Simple message object."
    },
    "MessageConfiguration" : {
      "type" : "structure",
      "members" : {
        "ADMMessage" : {
          "shape" : "Message",
          "documentation" : "The message that the campaign delivers to ADM channels. Overrides the default message."
        },
        "APNSMessage" : {
          "shape" : "Message",
          "documentation" : "The message that the campaign delivers to APNS channels. Overrides the default message."
        },
        "BaiduMessage" : {
          "shape" : "Message",
          "documentation" : "The message that the campaign delivers to Baidu channels. Overrides the default message."
        },
        "DefaultMessage" : {
          "shape" : "Message",
          "documentation" : "The default message for all channels."
        },
        "EmailMessage" : {
          "shape" : "CampaignEmailMessage",
          "documentation" : "The email message configuration."
        },
        "GCMMessage" : {
          "shape" : "Message",
          "documentation" : "The message that the campaign delivers to GCM channels. Overrides the default message."
        },
        "SMSMessage" : {
          "shape" : "CampaignSmsMessage",
          "documentation" : "The SMS message configuration."
        }
      },
      "documentation" : "Message configuration for a campaign."
    },
    "MessageRequest" : {
      "type" : "structure",
      "members" : {
        "Addresses" : {
          "shape" : "MapOfAddressConfiguration",
          "documentation" : "A map of key-value pairs, where each key is an address and each value is an AddressConfiguration object. An address can be a push notification token, a phone number, or an email address."
        },
        "Context" : {
          "shape" : "MapOf__string",
          "documentation" : "A map of custom attributes to attributes to be attached to the message. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes."
        },
        "Endpoints" : {
          "shape" : "MapOfEndpointSendConfiguration",
          "documentation" : "A map of key-value pairs, where each key is an endpoint ID and each value is an EndpointSendConfiguration object. Within an EndpointSendConfiguration object, you can tailor the message for an endpoint by specifying message overrides or substitutions."
        },
        "MessageConfiguration" : {
          "shape" : "DirectMessageConfiguration",
          "documentation" : "Message configuration."
        },
        "TraceId" : {
          "shape" : "__string",
          "documentation" : "A unique ID that you can use to trace a message. This ID is visible to recipients."
        }
      },
      "documentation" : "Send message request.",
      "required" : [ ]
    },
    "MessageResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "Application id of the message."
        },
        "EndpointResult" : {
          "shape" : "MapOfEndpointMessageResult",
          "documentation" : "A map containing a multi part response for each address, with the endpointId as the key and the result as the value."
        },
        "RequestId" : {
          "shape" : "__string",
          "documentation" : "Original request Id for which this message was delivered."
        },
        "Result" : {
          "shape" : "MapOfMessageResult",
          "documentation" : "A map containing a multi part response for each address, with the address as the key(Email address, phone number or push token) and the result as the value."
        }
      },
      "documentation" : "Send message response.",
      "required" : [ ]
    },
    "MessageResult" : {
      "type" : "structure",
      "members" : {
        "DeliveryStatus" : {
          "shape" : "DeliveryStatus",
          "documentation" : "The delivery status of the message. Possible values:\n\nSUCCESS - The message was successfully delivered to the endpoint.\n\nTRANSIENT_FAILURE - A temporary error occurred. Amazon Pinpoint will attempt to deliver the message again later.\n\nFAILURE_PERMANENT - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.\n\nTIMEOUT - The message couldn't be sent within the timeout period.\n\nQUIET_TIME - The local time for the endpoint was within the Quiet Hours for the campaign.\n\nDAILY_CAP - The endpoint has received the maximum number of messages it can receive within a 24-hour period.\n\nHOLDOUT - The endpoint was in a hold out treatment for the campaign.\n\nTHROTTLED - Amazon Pinpoint throttled sending to this endpoint.\n\nEXPIRED - The endpoint address is expired.\n\nCAMPAIGN_CAP - The endpoint received the maximum number of messages allowed by the campaign.\n\nSERVICE_FAILURE - A service-level failure prevented Amazon Pinpoint from delivering the message.\n\nUNKNOWN - An unknown error occurred."
        },
        "MessageId" : {
          "shape" : "__string",
          "documentation" : "Unique message identifier associated with the message that was sent."
        },
        "StatusCode" : {
          "shape" : "__integer",
          "documentation" : "Downstream service status code."
        },
        "StatusMessage" : {
          "shape" : "__string",
          "documentation" : "Status message for message delivery."
        },
        "UpdatedToken" : {
          "shape" : "__string",
          "documentation" : "If token was updated as part of delivery. (This is GCM Specific)"
        }
      },
      "documentation" : "The result from sending a message to an address.",
      "required" : [ ]
    },
    "MessageType" : {
      "type" : "string",
      "enum" : [ "TRANSACTIONAL", "PROMOTIONAL" ]
    },
    "MethodNotAllowedException" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "The error message that's returned from the API."
        },
        "RequestID" : {
          "shape" : "__string",
          "documentation" : "The unique message body ID."
        }
      },
      "documentation" : "Simple message object.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 405
      }
    },
    "MetricDimension" : {
      "type" : "structure",
      "members" : {
        "ComparisonOperator" : {
          "shape" : "__string",
          "documentation" : "GREATER_THAN | LESS_THAN | GREATER_THAN_OR_EQUAL | LESS_THAN_OR_EQUAL | EQUAL"
        },
        "Value" : {
          "shape" : "__double",
          "documentation" : "Value to be compared."
        }
      },
      "documentation" : "Custom metric dimension"
    },
    "Mode" : {
      "type" : "string",
      "enum" : [ "DELIVERY", "FILTER" ]
    },
    "NotFoundException" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "The error message that's returned from the API."
        },
        "RequestID" : {
          "shape" : "__string",
          "documentation" : "The unique message body ID."
        }
      },
      "documentation" : "Simple message object.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 404
      }
    },
    "NumberValidateRequest" : {
      "type" : "structure",
      "members" : {
        "IsoCountryCode" : {
          "shape" : "__string",
          "documentation" : "(Optional) The two-character ISO country code for the country or region where the phone number was originally registered."
        },
        "PhoneNumber" : {
          "shape" : "__string",
          "documentation" : "The phone number to get information about. The phone number that you provide should include a country code. If the number doesn't include a valid country code, the operation might result in an error."
        }
      },
      "documentation" : "Phone Number Information request."
    },
    "NumberValidateResponse" : {
      "type" : "structure",
      "members" : {
        "Carrier" : {
          "shape" : "__string",
          "documentation" : "The carrier or servive provider that the phone number is currently registered with."
        },
        "City" : {
          "shape" : "__string",
          "documentation" : "The city where the phone number was originally registered."
        },
        "CleansedPhoneNumberE164" : {
          "shape" : "__string",
          "documentation" : "The cleansed phone number, shown in E.164 format."
        },
        "CleansedPhoneNumberNational" : {
          "shape" : "__string",
          "documentation" : "The cleansed phone number, shown in the local phone number format."
        },
        "Country" : {
          "shape" : "__string",
          "documentation" : "The country or region where the phone number was originally registered."
        },
        "CountryCodeIso2" : {
          "shape" : "__string",
          "documentation" : "The two-character ISO code for the country or region where the phone number was originally registered."
        },
        "CountryCodeNumeric" : {
          "shape" : "__string",
          "documentation" : "The numeric code for the country or region where the phone number was originally registered."
        },
        "County" : {
          "shape" : "__string",
          "documentation" : "The county where the phone number was originally registered."
        },
        "OriginalCountryCodeIso2" : {
          "shape" : "__string",
          "documentation" : "The two-character ISO code for the country or region that you included in the request body."
        },
        "OriginalPhoneNumber" : {
          "shape" : "__string",
          "documentation" : "The phone number that you included in the request body."
        },
        "PhoneType" : {
          "shape" : "__string",
          "documentation" : "A description of the phone type. Possible values are MOBILE, LANDLINE, VOIP, INVALID, PREPAID, and OTHER."
        },
        "PhoneTypeCode" : {
          "shape" : "__integer",
          "documentation" : "The phone type, represented by an integer. Possible values include 0 (MOBILE), 1 (LANDLINE), 2 (VOIP), 3 (INVALID), 4 (OTHER), and 5 (PREPAID)."
        },
        "Timezone" : {
          "shape" : "__string",
          "documentation" : "The time zone for the location where the phone number was originally registered."
        },
        "ZipCode" : {
          "shape" : "__string",
          "documentation" : "The postal code for the location where the phone number was originally registered."
        }
      },
      "documentation" : "Phone Number Information response."
    },
    "PhoneNumberValidateRequest" : {
      "type" : "structure",
      "members" : {
        "NumberValidateRequest" : {
          "shape" : "NumberValidateRequest"
        }
      },
      "required" : [ "NumberValidateRequest" ],
      "payload" : "NumberValidateRequest"
    },
    "PhoneNumberValidateResponse" : {
      "type" : "structure",
      "members" : {
        "NumberValidateResponse" : {
          "shape" : "NumberValidateResponse"
        }
      },
      "required" : [ "NumberValidateResponse" ],
      "payload" : "NumberValidateResponse"
    },
    "PublicEndpoint" : {
      "type" : "structure",
      "members" : {
        "Address" : {
          "shape" : "__string",
          "documentation" : "The unique identifier for the recipient. For example, an address could be a device token or an endpoint ID."
        },
        "Attributes" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment."
        },
        "ChannelType" : {
          "shape" : "ChannelType",
          "documentation" : "The channel type.\n\nValid values: APNS, GCM"
        },
        "Demographic" : {
          "shape" : "EndpointDemographic",
          "documentation" : "The endpoint demographic attributes."
        },
        "EffectiveDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when the endpoint was last updated."
        },
        "EndpointStatus" : {
          "shape" : "__string",
          "documentation" : "The status of the endpoint. If the update fails, the value is INACTIVE. If the endpoint is updated successfully, the value is ACTIVE."
        },
        "Location" : {
          "shape" : "EndpointLocation",
          "documentation" : "The endpoint location attributes."
        },
        "Metrics" : {
          "shape" : "MapOf__double",
          "documentation" : "Custom metrics that your app reports to Amazon Pinpoint."
        },
        "OptOut" : {
          "shape" : "__string",
          "documentation" : "Indicates whether a user has opted out of receiving messages with one of the following values:\n\nALL - User has opted out of all messages.\n\nNONE - Users has not opted out and receives all messages."
        },
        "RequestId" : {
          "shape" : "__string",
          "documentation" : "A unique identifier that is generated each time the endpoint is updated."
        },
        "User" : {
          "shape" : "EndpointUser",
          "documentation" : "Custom user-specific attributes that your app reports to Amazon Pinpoint."
        }
      },
      "documentation" : "Public endpoint attributes."
    },
    "PutEventStreamRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "WriteEventStream" : {
          "shape" : "WriteEventStream"
        }
      },
      "required" : [ "ApplicationId", "WriteEventStream" ],
      "payload" : "WriteEventStream"
    },
    "PutEventStreamResponse" : {
      "type" : "structure",
      "members" : {
        "EventStream" : {
          "shape" : "EventStream"
        }
      },
      "required" : [ "EventStream" ],
      "payload" : "EventStream"
    },
    "PutEventsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "EventsRequest" : {
          "shape" : "EventsRequest"
        }
      },
      "required" : [ "ApplicationId", "EventsRequest" ],
      "payload" : "EventsRequest"
    },
    "PutEventsResponse" : {
      "type" : "structure",
      "members" : {
        "EventsResponse" : {
          "shape" : "EventsResponse"
        }
      },
      "required" : [ "EventsResponse" ],
      "payload" : "EventsResponse"
    },
    "QuietTime" : {
      "type" : "structure",
      "members" : {
        "End" : {
          "shape" : "__string",
          "documentation" : "The default end time for quiet time in ISO 8601 format."
        },
        "Start" : {
          "shape" : "__string",
          "documentation" : "The default start time for quiet time in ISO 8601 format."
        }
      },
      "documentation" : "Quiet Time"
    },
    "RecencyDimension" : {
      "type" : "structure",
      "members" : {
        "Duration" : {
          "shape" : "Duration",
          "documentation" : "The length of time during which users have been active or inactive with your app.\nValid values: HR_24, DAY_7, DAY_14, DAY_30"
        },
        "RecencyType" : {
          "shape" : "RecencyType",
          "documentation" : "The recency dimension type:\nACTIVE - Users who have used your app within the specified duration are included in the segment.\nINACTIVE - Users who have not used your app within the specified duration are included in the segment."
        }
      },
      "documentation" : "Define how a segment based on recency of use.",
      "required" : [ ]
    },
    "RecencyType" : {
      "type" : "string",
      "enum" : [ "ACTIVE", "INACTIVE" ]
    },
    "RemoveAttributesRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "AttributeType" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "attribute-type",
          "documentation" : "Type of attribute. Can be endpoint-custom-attributes, endpoint-custom-metrics, endpoint-user-attributes."
        },
        "UpdateAttributesRequest" : {
          "shape" : "UpdateAttributesRequest"
        }
      },
      "required" : [ "AttributeType", "ApplicationId", "UpdateAttributesRequest" ],
      "payload" : "UpdateAttributesRequest"
    },
    "RemoveAttributesResponse" : {
      "type" : "structure",
      "members" : {
        "AttributesResource" : {
          "shape" : "AttributesResource"
        }
      },
      "required" : [ "AttributesResource" ],
      "payload" : "AttributesResource"
    },
    "SMSChannelRequest" : {
      "type" : "structure",
      "members" : {
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "SenderId" : {
          "shape" : "__string",
          "documentation" : "Sender identifier of your messages."
        },
        "ShortCode" : {
          "shape" : "__string",
          "documentation" : "ShortCode registered with phone provider."
        }
      },
      "documentation" : "SMS Channel Request",
      "required" : [ ]
    },
    "SMSChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the application to which the SMS channel belongs."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date that the settings were last updated in ISO 8601 format."
        },
        "Enabled" : {
          "shape" : "__boolean",
          "documentation" : "If the channel is enabled for sending messages."
        },
        "HasCredential" : {
          "shape" : "__boolean",
          "documentation" : "Not used. Retained for backwards compatibility."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "Channel ID. Not used, only for backwards compatibility."
        },
        "IsArchived" : {
          "shape" : "__boolean",
          "documentation" : "Is this channel archived"
        },
        "LastModifiedBy" : {
          "shape" : "__string",
          "documentation" : "Who last updated this entry"
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "Last date this was updated"
        },
        "Platform" : {
          "shape" : "__string",
          "documentation" : "Platform type. Will be \"SMS\""
        },
        "PromotionalMessagesPerSecond" : {
          "shape" : "__integer",
          "documentation" : "Promotional messages per second that can be sent"
        },
        "SenderId" : {
          "shape" : "__string",
          "documentation" : "Sender identifier of your messages."
        },
        "ShortCode" : {
          "shape" : "__string",
          "documentation" : "The short code registered with the phone provider."
        },
        "TransactionalMessagesPerSecond" : {
          "shape" : "__integer",
          "documentation" : "Transactional messages per second that can be sent"
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "Version of channel"
        }
      },
      "documentation" : "SMS Channel Response.",
      "required" : [ ]
    },
    "SMSMessage" : {
      "type" : "structure",
      "members" : {
        "Body" : {
          "shape" : "__string",
          "documentation" : "The body of the SMS message."
        },
        "Keyword" : {
          "shape" : "__string",
          "documentation" : "The SMS program name that you provided to AWS Support when you requested your dedicated number."
        },
        "MessageType" : {
          "shape" : "MessageType",
          "documentation" : "Is this a transaction priority message or lower priority."
        },
        "OriginationNumber" : {
          "shape" : "__string",
          "documentation" : "The phone number that the SMS message originates from. Specify one of the dedicated long codes or short codes that you requested from AWS Support and that is assigned to your account. If this attribute is not specified, Amazon Pinpoint randomly assigns a long code."
        },
        "SenderId" : {
          "shape" : "__string",
          "documentation" : "The sender ID that is shown as the message sender on the recipient's device. Support for sender IDs varies by country or region."
        },
        "Substitutions" : {
          "shape" : "MapOfListOf__string",
          "documentation" : "Default message substitutions. Can be overridden by individual address substitutions."
        }
      },
      "documentation" : "SMS Message."
    },
    "Schedule" : {
      "type" : "structure",
      "members" : {
        "EndTime" : {
          "shape" : "__string",
          "documentation" : "The scheduled time that the campaign ends in ISO 8601 format."
        },
        "Frequency" : {
          "shape" : "Frequency",
          "documentation" : "How often the campaign delivers messages.\n\nValid values: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY"
        },
        "IsLocalTime" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether the campaign schedule takes effect according to each user's local time."
        },
        "QuietTime" : {
          "shape" : "QuietTime",
          "documentation" : "The time during which the campaign sends no messages."
        },
        "StartTime" : {
          "shape" : "__string",
          "documentation" : "The scheduled time that the campaign begins in ISO 8601 format."
        },
        "Timezone" : {
          "shape" : "__string",
          "documentation" : "The starting UTC offset for the schedule if the value for isLocalTime is true\n\nValid values: \nUTC\nUTC+01\nUTC+02\nUTC+03\nUTC+03:30\nUTC+04\nUTC+04:30\nUTC+05\nUTC+05:30\nUTC+05:45\nUTC+06\nUTC+06:30\nUTC+07\nUTC+08\nUTC+09\nUTC+09:30\nUTC+10\nUTC+10:30\nUTC+11\nUTC+12\nUTC+13\nUTC-02\nUTC-03\nUTC-04\nUTC-05\nUTC-06\nUTC-07\nUTC-08\nUTC-09\nUTC-10\nUTC-11"
        }
      },
      "documentation" : "Shcedule that defines when a campaign is run.",
      "required" : [ ]
    },
    "SegmentBehaviors" : {
      "type" : "structure",
      "members" : {
        "Recency" : {
          "shape" : "RecencyDimension",
          "documentation" : "The recency of use."
        }
      },
      "documentation" : "Segment behavior dimensions"
    },
    "SegmentDemographics" : {
      "type" : "structure",
      "members" : {
        "AppVersion" : {
          "shape" : "SetDimension",
          "documentation" : "The app version criteria for the segment."
        },
        "Channel" : {
          "shape" : "SetDimension",
          "documentation" : "The channel criteria for the segment."
        },
        "DeviceType" : {
          "shape" : "SetDimension",
          "documentation" : "The device type criteria for the segment."
        },
        "Make" : {
          "shape" : "SetDimension",
          "documentation" : "The device make criteria for the segment."
        },
        "Model" : {
          "shape" : "SetDimension",
          "documentation" : "The device model criteria for the segment."
        },
        "Platform" : {
          "shape" : "SetDimension",
          "documentation" : "The device platform criteria for the segment."
        }
      },
      "documentation" : "Segment demographic dimensions"
    },
    "SegmentDimensions" : {
      "type" : "structure",
      "members" : {
        "Attributes" : {
          "shape" : "MapOfAttributeDimension",
          "documentation" : "Custom segment attributes."
        },
        "Behavior" : {
          "shape" : "SegmentBehaviors",
          "documentation" : "The segment behaviors attributes."
        },
        "Demographic" : {
          "shape" : "SegmentDemographics",
          "documentation" : "The segment demographics attributes."
        },
        "Location" : {
          "shape" : "SegmentLocation",
          "documentation" : "The segment location attributes."
        },
        "Metrics" : {
          "shape" : "MapOfMetricDimension",
          "documentation" : "Custom segment metrics."
        },
        "UserAttributes" : {
          "shape" : "MapOfAttributeDimension",
          "documentation" : "Custom segment user attributes."
        }
      },
      "documentation" : "Segment dimensions"
    },
    "SegmentGroup" : {
      "type" : "structure",
      "members" : {
        "Dimensions" : {
          "shape" : "ListOfSegmentDimensions",
          "documentation" : "List of dimensions to include or exclude."
        },
        "SourceSegments" : {
          "shape" : "ListOfSegmentReference",
          "documentation" : "The base segment that you build your segment on. The source segment defines the starting \"universe\" of endpoints. When you add dimensions to the segment, it filters the source segment based on the dimensions that you specify. You can specify more than one dimensional segment. You can only specify one imported segment."
        },
        "SourceType" : {
          "shape" : "SourceType",
          "documentation" : "Specify how to handle multiple source segments. For example, if you specify three source segments, should the resulting segment be based on any or all of the segments? Acceptable values: ANY or ALL."
        },
        "Type" : {
          "shape" : "Type",
          "documentation" : "Specify how to handle multiple segment dimensions. For example, if you specify three dimensions, should the resulting segment include endpoints that are matched by all, any, or none of the dimensions? Acceptable values: ALL, ANY, or NONE."
        }
      },
      "documentation" : "Segment group definition.",
      "required" : [ ]
    },
    "SegmentGroupList" : {
      "type" : "structure",
      "members" : {
        "Groups" : {
          "shape" : "ListOfSegmentGroup",
          "documentation" : "A set of segment criteria to evaluate."
        },
        "Include" : {
          "shape" : "Include",
          "documentation" : "Specify how to handle multiple segment groups. For example, if the segment includes three segment groups, should the resulting segment include endpoints that are matched by all, any, or none of the segment groups you created. Acceptable values: ALL, ANY, or NONE."
        }
      },
      "documentation" : "Segment group definition.",
      "required" : [ ]
    },
    "SegmentImportResource" : {
      "type" : "structure",
      "members" : {
        "ChannelCounts" : {
          "shape" : "MapOf__integer",
          "documentation" : "The number of channel types in the imported segment."
        },
        "ExternalId" : {
          "shape" : "__string",
          "documentation" : "(Deprecated) Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint."
        },
        "Format" : {
          "shape" : "Format",
          "documentation" : "The format of the endpoint files that were imported to create this segment.\nValid values: CSV, JSON"
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the endpoints in Amazon S3."
        },
        "S3Url" : {
          "shape" : "__string",
          "documentation" : "The URL of the S3 bucket that the segment was imported from."
        },
        "Size" : {
          "shape" : "__integer",
          "documentation" : "The number of endpoints that were successfully imported to create this segment."
        }
      },
      "documentation" : "Segment import definition.",
      "required" : [ ]
    },
    "SegmentLocation" : {
      "type" : "structure",
      "members" : {
        "Country" : {
          "shape" : "SetDimension",
          "documentation" : "The country filter according to ISO 3166-1 Alpha-2 codes."
        },
        "GPSPoint" : {
          "shape" : "GPSPointDimension",
          "documentation" : "The GPS Point dimension."
        }
      },
      "documentation" : "Segment location dimensions"
    },
    "SegmentReference" : {
      "type" : "structure",
      "members" : {
        "Id" : {
          "shape" : "__string",
          "documentation" : "A unique identifier for the segment."
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "If specified contains a specific version of the segment included."
        }
      },
      "documentation" : "Segment reference."
    },
    "SegmentResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The ID of the application that the segment applies to."
        },
        "CreationDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when the segment was created."
        },
        "Dimensions" : {
          "shape" : "SegmentDimensions",
          "documentation" : "The segment dimensions attributes."
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique segment ID."
        },
        "ImportDefinition" : {
          "shape" : "SegmentImportResource",
          "documentation" : "The import job settings."
        },
        "LastModifiedDate" : {
          "shape" : "__string",
          "documentation" : "The date and time when the segment was last modified."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of the segment."
        },
        "SegmentGroups" : {
          "shape" : "SegmentGroupList",
          "documentation" : "A segment group, which consists of zero or more source segments, plus dimensions that are applied to those source segments."
        },
        "SegmentType" : {
          "shape" : "SegmentType",
          "documentation" : "The segment type:\nDIMENSIONAL - A dynamic segment built from selection criteria based on endpoint data reported by your app. You create this type of segment by using the segment builder in the Amazon Pinpoint console or by making a POST request to the segments resource.\nIMPORT - A static segment built from an imported set of endpoint definitions. You create this type of segment by importing a segment in the Amazon Pinpoint console or by making a POST request to the jobs/import resource."
        },
        "Version" : {
          "shape" : "__integer",
          "documentation" : "The segment version number."
        }
      },
      "documentation" : "Segment definition.",
      "required" : [ ]
    },
    "SegmentType" : {
      "type" : "string",
      "enum" : [ "DIMENSIONAL", "IMPORT" ]
    },
    "SegmentsResponse" : {
      "type" : "structure",
      "members" : {
        "Item" : {
          "shape" : "ListOfSegmentResponse",
          "documentation" : "The list of segments."
        },
        "NextToken" : {
          "shape" : "__string",
          "documentation" : "An identifier used to retrieve the next page of results. The token is null if no additional pages exist."
        }
      },
      "documentation" : "Segments in your account.",
      "required" : [ ]
    },
    "SendMessagesRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "MessageRequest" : {
          "shape" : "MessageRequest"
        }
      },
      "required" : [ "ApplicationId", "MessageRequest" ],
      "payload" : "MessageRequest"
    },
    "SendMessagesResponse" : {
      "type" : "structure",
      "members" : {
        "MessageResponse" : {
          "shape" : "MessageResponse"
        }
      },
      "required" : [ "MessageResponse" ],
      "payload" : "MessageResponse"
    },
    "SendUsersMessageRequest" : {
      "type" : "structure",
      "members" : {
        "Context" : {
          "shape" : "MapOf__string",
          "documentation" : "A map of custom attribute-value pairs. Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the push notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries."
        },
        "MessageConfiguration" : {
          "shape" : "DirectMessageConfiguration",
          "documentation" : "Message definitions for the default message and any messages that are tailored for specific channels."
        },
        "TraceId" : {
          "shape" : "__string",
          "documentation" : "A unique ID that you can use to trace a message. This ID is visible to recipients."
        },
        "Users" : {
          "shape" : "MapOfEndpointSendConfiguration",
          "documentation" : "A map that associates user IDs with EndpointSendConfiguration objects. Within an EndpointSendConfiguration object, you can tailor the message for a user by specifying message overrides or substitutions."
        }
      },
      "documentation" : "Send message request.",
      "required" : [ ]
    },
    "SendUsersMessageResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "documentation" : "The unique ID of the Amazon Pinpoint project used to send the message."
        },
        "RequestId" : {
          "shape" : "__string",
          "documentation" : "The unique ID assigned to the users-messages request."
        },
        "Result" : {
          "shape" : "MapOfMapOfEndpointMessageResult",
          "documentation" : "An object that shows the endpoints that were messaged for each user. The object provides a list of user IDs. For each user ID, it provides the endpoint IDs that were messaged. For each endpoint ID, it provides an EndpointMessageResult object."
        }
      },
      "documentation" : "User send message response.",
      "required" : [ ]
    },
    "SendUsersMessagesRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "SendUsersMessageRequest" : {
          "shape" : "SendUsersMessageRequest"
        }
      },
      "required" : [ "ApplicationId", "SendUsersMessageRequest" ],
      "payload" : "SendUsersMessageRequest"
    },
    "SendUsersMessagesResponse" : {
      "type" : "structure",
      "members" : {
        "SendUsersMessageResponse" : {
          "shape" : "SendUsersMessageResponse"
        }
      },
      "required" : [ "SendUsersMessageResponse" ],
      "payload" : "SendUsersMessageResponse"
    },
    "Session" : {
      "type" : "structure",
      "members" : {
        "Duration" : {
          "shape" : "__integer",
          "documentation" : "Session duration in millis"
        },
        "Id" : {
          "shape" : "__string",
          "documentation" : "A unique identifier for the session."
        },
        "StartTimestamp" : {
          "shape" : "__string",
          "documentation" : "The date and time when the session began."
        },
        "StopTimestamp" : {
          "shape" : "__string",
          "documentation" : "The date and time when the session ended."
        }
      },
      "documentation" : "Information about a session.",
      "required" : [ ]
    },
    "SetDimension" : {
      "type" : "structure",
      "members" : {
        "DimensionType" : {
          "shape" : "DimensionType",
          "documentation" : "The type of dimension:\nINCLUSIVE - Endpoints that match the criteria are included in the segment.\nEXCLUSIVE - Endpoints that match the criteria are excluded from the segment."
        },
        "Values" : {
          "shape" : "ListOf__string",
          "documentation" : "The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type."
        }
      },
      "documentation" : "Dimension specification of a segment.",
      "required" : [ ]
    },
    "SourceType" : {
      "type" : "string",
      "enum" : [ "ALL", "ANY", "NONE" ]
    },
    "TooManyRequestsException" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "documentation" : "The error message that's returned from the API."
        },
        "RequestID" : {
          "shape" : "__string",
          "documentation" : "The unique message body ID."
        }
      },
      "documentation" : "Simple message object.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 429
      }
    },
    "TreatmentResource" : {
      "type" : "structure",
      "members" : {
        "Id" : {
          "shape" : "__string",
          "documentation" : "The unique treatment ID."
        },
        "MessageConfiguration" : {
          "shape" : "MessageConfiguration",
          "documentation" : "The message configuration settings."
        },
        "Schedule" : {
          "shape" : "Schedule",
          "documentation" : "The campaign schedule."
        },
        "SizePercent" : {
          "shape" : "__integer",
          "documentation" : "The allocated percentage of users for this treatment."
        },
        "State" : {
          "shape" : "CampaignState",
          "documentation" : "The treatment status."
        },
        "TreatmentDescription" : {
          "shape" : "__string",
          "documentation" : "A custom description for the treatment."
        },
        "TreatmentName" : {
          "shape" : "__string",
          "documentation" : "The custom name of a variation of the campaign used for A/B testing."
        }
      },
      "documentation" : "Treatment resource",
      "required" : [ ]
    },
    "Type" : {
      "type" : "string",
      "enum" : [ "ALL", "ANY", "NONE" ]
    },
    "UpdateAdmChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ADMChannelRequest" : {
          "shape" : "ADMChannelRequest"
        },
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId", "ADMChannelRequest" ],
      "payload" : "ADMChannelRequest"
    },
    "UpdateAdmChannelResponse" : {
      "type" : "structure",
      "members" : {
        "ADMChannelResponse" : {
          "shape" : "ADMChannelResponse"
        }
      },
      "required" : [ "ADMChannelResponse" ],
      "payload" : "ADMChannelResponse"
    },
    "UpdateApnsChannelRequest" : {
      "type" : "structure",
      "members" : {
        "APNSChannelRequest" : {
          "shape" : "APNSChannelRequest"
        },
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId", "APNSChannelRequest" ],
      "payload" : "APNSChannelRequest"
    },
    "UpdateApnsChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSChannelResponse" : {
          "shape" : "APNSChannelResponse"
        }
      },
      "required" : [ "APNSChannelResponse" ],
      "payload" : "APNSChannelResponse"
    },
    "UpdateApnsSandboxChannelRequest" : {
      "type" : "structure",
      "members" : {
        "APNSSandboxChannelRequest" : {
          "shape" : "APNSSandboxChannelRequest"
        },
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId", "APNSSandboxChannelRequest" ],
      "payload" : "APNSSandboxChannelRequest"
    },
    "UpdateApnsSandboxChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSSandboxChannelResponse" : {
          "shape" : "APNSSandboxChannelResponse"
        }
      },
      "required" : [ "APNSSandboxChannelResponse" ],
      "payload" : "APNSSandboxChannelResponse"
    },
    "UpdateApnsVoipChannelRequest" : {
      "type" : "structure",
      "members" : {
        "APNSVoipChannelRequest" : {
          "shape" : "APNSVoipChannelRequest"
        },
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId", "APNSVoipChannelRequest" ],
      "payload" : "APNSVoipChannelRequest"
    },
    "UpdateApnsVoipChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSVoipChannelResponse" : {
          "shape" : "APNSVoipChannelResponse"
        }
      },
      "required" : [ "APNSVoipChannelResponse" ],
      "payload" : "APNSVoipChannelResponse"
    },
    "UpdateApnsVoipSandboxChannelRequest" : {
      "type" : "structure",
      "members" : {
        "APNSVoipSandboxChannelRequest" : {
          "shape" : "APNSVoipSandboxChannelRequest"
        },
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        }
      },
      "required" : [ "ApplicationId", "APNSVoipSandboxChannelRequest" ],
      "payload" : "APNSVoipSandboxChannelRequest"
    },
    "UpdateApnsVoipSandboxChannelResponse" : {
      "type" : "structure",
      "members" : {
        "APNSVoipSandboxChannelResponse" : {
          "shape" : "APNSVoipSandboxChannelResponse"
        }
      },
      "required" : [ "APNSVoipSandboxChannelResponse" ],
      "payload" : "APNSVoipSandboxChannelResponse"
    },
    "UpdateApplicationSettingsRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "WriteApplicationSettingsRequest" : {
          "shape" : "WriteApplicationSettingsRequest"
        }
      },
      "required" : [ "ApplicationId", "WriteApplicationSettingsRequest" ],
      "payload" : "WriteApplicationSettingsRequest"
    },
    "UpdateApplicationSettingsResponse" : {
      "type" : "structure",
      "members" : {
        "ApplicationSettingsResource" : {
          "shape" : "ApplicationSettingsResource"
        }
      },
      "required" : [ "ApplicationSettingsResource" ],
      "payload" : "ApplicationSettingsResource"
    },
    "UpdateAttributesRequest" : {
      "type" : "structure",
      "members" : {
        "Blacklist" : {
          "shape" : "ListOf__string",
          "documentation" : "The GLOB wildcard for removing the attributes in the application"
        }
      },
      "documentation" : "Update attributes request"
    },
    "UpdateBaiduChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "BaiduChannelRequest" : {
          "shape" : "BaiduChannelRequest"
        }
      },
      "required" : [ "ApplicationId", "BaiduChannelRequest" ],
      "payload" : "BaiduChannelRequest"
    },
    "UpdateBaiduChannelResponse" : {
      "type" : "structure",
      "members" : {
        "BaiduChannelResponse" : {
          "shape" : "BaiduChannelResponse"
        }
      },
      "required" : [ "BaiduChannelResponse" ],
      "payload" : "BaiduChannelResponse"
    },
    "UpdateCampaignRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "CampaignId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "campaign-id",
          "documentation" : "The unique ID of the campaign."
        },
        "WriteCampaignRequest" : {
          "shape" : "WriteCampaignRequest"
        }
      },
      "required" : [ "CampaignId", "ApplicationId", "WriteCampaignRequest" ],
      "payload" : "WriteCampaignRequest"
    },
    "UpdateCampaignResponse" : {
      "type" : "structure",
      "members" : {
        "CampaignResponse" : {
          "shape" : "CampaignResponse"
        }
      },
      "required" : [ "CampaignResponse" ],
      "payload" : "CampaignResponse"
    },
    "UpdateEmailChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "EmailChannelRequest" : {
          "shape" : "EmailChannelRequest"
        }
      },
      "required" : [ "ApplicationId", "EmailChannelRequest" ],
      "payload" : "EmailChannelRequest"
    },
    "UpdateEmailChannelResponse" : {
      "type" : "structure",
      "members" : {
        "EmailChannelResponse" : {
          "shape" : "EmailChannelResponse"
        }
      },
      "required" : [ "EmailChannelResponse" ],
      "payload" : "EmailChannelResponse"
    },
    "UpdateEndpointRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "EndpointId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "endpoint-id",
          "documentation" : "The unique ID of the endpoint."
        },
        "EndpointRequest" : {
          "shape" : "EndpointRequest"
        }
      },
      "required" : [ "ApplicationId", "EndpointId", "EndpointRequest" ],
      "payload" : "EndpointRequest"
    },
    "UpdateEndpointResponse" : {
      "type" : "structure",
      "members" : {
        "MessageBody" : {
          "shape" : "MessageBody"
        }
      },
      "required" : [ "MessageBody" ],
      "payload" : "MessageBody"
    },
    "UpdateEndpointsBatchRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "EndpointBatchRequest" : {
          "shape" : "EndpointBatchRequest"
        }
      },
      "required" : [ "ApplicationId", "EndpointBatchRequest" ],
      "payload" : "EndpointBatchRequest"
    },
    "UpdateEndpointsBatchResponse" : {
      "type" : "structure",
      "members" : {
        "MessageBody" : {
          "shape" : "MessageBody"
        }
      },
      "required" : [ "MessageBody" ],
      "payload" : "MessageBody"
    },
    "UpdateGcmChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "GCMChannelRequest" : {
          "shape" : "GCMChannelRequest"
        }
      },
      "required" : [ "ApplicationId", "GCMChannelRequest" ],
      "payload" : "GCMChannelRequest"
    },
    "UpdateGcmChannelResponse" : {
      "type" : "structure",
      "members" : {
        "GCMChannelResponse" : {
          "shape" : "GCMChannelResponse"
        }
      },
      "required" : [ "GCMChannelResponse" ],
      "payload" : "GCMChannelResponse"
    },
    "UpdateSegmentRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "SegmentId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "segment-id",
          "documentation" : "The unique ID of the segment."
        },
        "WriteSegmentRequest" : {
          "shape" : "WriteSegmentRequest"
        }
      },
      "required" : [ "SegmentId", "ApplicationId", "WriteSegmentRequest" ],
      "payload" : "WriteSegmentRequest"
    },
    "UpdateSegmentResponse" : {
      "type" : "structure",
      "members" : {
        "SegmentResponse" : {
          "shape" : "SegmentResponse"
        }
      },
      "required" : [ "SegmentResponse" ],
      "payload" : "SegmentResponse"
    },
    "UpdateSmsChannelRequest" : {
      "type" : "structure",
      "members" : {
        "ApplicationId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "application-id",
          "documentation" : "The unique ID of your Amazon Pinpoint application."
        },
        "SMSChannelRequest" : {
          "shape" : "SMSChannelRequest"
        }
      },
      "required" : [ "ApplicationId", "SMSChannelRequest" ],
      "payload" : "SMSChannelRequest"
    },
    "UpdateSmsChannelResponse" : {
      "type" : "structure",
      "members" : {
        "SMSChannelResponse" : {
          "shape" : "SMSChannelResponse"
        }
      },
      "required" : [ "SMSChannelResponse" ],
      "payload" : "SMSChannelResponse"
    },
    "WriteApplicationSettingsRequest" : {
      "type" : "structure",
      "members" : {
        "CampaignHook" : {
          "shape" : "CampaignHook",
          "documentation" : "Default campaign hook information."
        },
        "CloudWatchMetricsEnabled" : {
          "shape" : "__boolean",
          "documentation" : "The CloudWatchMetrics settings for the app."
        },
        "Limits" : {
          "shape" : "CampaignLimits",
          "documentation" : "The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own."
        },
        "QuietTime" : {
          "shape" : "QuietTime",
          "documentation" : "The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own."
        }
      },
      "documentation" : "Creating application setting request"
    },
    "WriteCampaignRequest" : {
      "type" : "structure",
      "members" : {
        "AdditionalTreatments" : {
          "shape" : "ListOfWriteTreatmentResource",
          "documentation" : "Treatments that are defined in addition to the default treatment."
        },
        "Description" : {
          "shape" : "__string",
          "documentation" : "A description of the campaign."
        },
        "HoldoutPercent" : {
          "shape" : "__integer",
          "documentation" : "The allocated percentage of end users who will not receive messages from this campaign."
        },
        "Hook" : {
          "shape" : "CampaignHook",
          "documentation" : "Campaign hook information."
        },
        "IsPaused" : {
          "shape" : "__boolean",
          "documentation" : "Indicates whether the campaign is paused. A paused campaign does not send messages unless you resume it by setting IsPaused to false."
        },
        "Limits" : {
          "shape" : "CampaignLimits",
          "documentation" : "The campaign limits settings."
        },
        "MessageConfiguration" : {
          "shape" : "MessageConfiguration",
          "documentation" : "The message configuration settings."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The custom name of the campaign."
        },
        "Schedule" : {
          "shape" : "Schedule",
          "documentation" : "The campaign schedule."
        },
        "SegmentId" : {
          "shape" : "__string",
          "documentation" : "The ID of the segment to which the campaign sends messages."
        },
        "SegmentVersion" : {
          "shape" : "__integer",
          "documentation" : "The version of the segment to which the campaign sends messages."
        },
        "TreatmentDescription" : {
          "shape" : "__string",
          "documentation" : "A custom description for the treatment."
        },
        "TreatmentName" : {
          "shape" : "__string",
          "documentation" : "The custom name of a variation of the campaign used for A/B testing."
        }
      },
      "documentation" : "Used to create a campaign."
    },
    "WriteEventStream" : {
      "type" : "structure",
      "members" : {
        "DestinationStreamArn" : {
          "shape" : "__string",
          "documentation" : "The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.\n Firehose ARN: arn:aws:firehose:REGION:ACCOUNT_ID:deliverystream/STREAM_NAME\n Kinesis ARN: arn:aws:kinesis:REGION:ACCOUNT_ID:stream/STREAM_NAME"
        },
        "RoleArn" : {
          "shape" : "__string",
          "documentation" : "The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account."
        }
      },
      "documentation" : "Request to save an EventStream.",
      "required" : [ ]
    },
    "WriteSegmentRequest" : {
      "type" : "structure",
      "members" : {
        "Dimensions" : {
          "shape" : "SegmentDimensions",
          "documentation" : "The segment dimensions attributes."
        },
        "Name" : {
          "shape" : "__string",
          "documentation" : "The name of segment"
        },
        "SegmentGroups" : {
          "shape" : "SegmentGroupList",
          "documentation" : "A segment group, which consists of zero or more source segments, plus dimensions that are applied to those source segments. Your request can only include one segment group. Your request can include either a SegmentGroups object or a Dimensions object, but not both."
        }
      },
      "documentation" : "Segment definition.",
      "required" : [ ]
    },
    "WriteTreatmentResource" : {
      "type" : "structure",
      "members" : {
        "MessageConfiguration" : {
          "shape" : "MessageConfiguration",
          "documentation" : "The message configuration settings."
        },
        "Schedule" : {
          "shape" : "Schedule",
          "documentation" : "The campaign schedule."
        },
        "SizePercent" : {
          "shape" : "__integer",
          "documentation" : "The allocated percentage of users for this treatment."
        },
        "TreatmentDescription" : {
          "shape" : "__string",
          "documentation" : "A custom description for the treatment."
        },
        "TreatmentName" : {
          "shape" : "__string",
          "documentation" : "The custom name of a variation of the campaign used for A/B testing."
        }
      },
      "documentation" : "Used to create a campaign treatment.",
      "required" : [ ]
    },
    "__boolean" : {
      "type" : "boolean"
    },
    "__double" : {
      "type" : "double"
    },
    "__integer" : {
      "type" : "integer"
    },
    "ListOfActivityResponse" : {
      "type" : "list",
      "member" : {
        "shape" : "ActivityResponse"
      }
    },
    "ListOfApplicationResponse" : {
      "type" : "list",
      "member" : {
        "shape" : "ApplicationResponse"
      }
    },
    "ListOfCampaignResponse" : {
      "type" : "list",
      "member" : {
        "shape" : "CampaignResponse"
      }
    },
    "ListOfEndpointBatchItem" : {
      "type" : "list",
      "member" : {
        "shape" : "EndpointBatchItem"
      }
    },
    "ListOfEndpointResponse" : {
      "type" : "list",
      "member" : {
        "shape" : "EndpointResponse"
      }
    },
    "ListOfExportJobResponse" : {
      "type" : "list",
      "member" : {
        "shape" : "ExportJobResponse"
      }
    },
    "ListOfImportJobResponse" : {
      "type" : "list",
      "member" : {
        "shape" : "ImportJobResponse"
      }
    },
    "ListOfSegmentDimensions" : {
      "type" : "list",
      "member" : {
        "shape" : "SegmentDimensions"
      }
    },
    "ListOfSegmentGroup" : {
      "type" : "list",
      "member" : {
        "shape" : "SegmentGroup"
      }
    },
    "ListOfSegmentReference" : {
      "type" : "list",
      "member" : {
        "shape" : "SegmentReference"
      }
    },
    "ListOfSegmentResponse" : {
      "type" : "list",
      "member" : {
        "shape" : "SegmentResponse"
      }
    },
    "ListOfTreatmentResource" : {
      "type" : "list",
      "member" : {
        "shape" : "TreatmentResource"
      }
    },
    "ListOfWriteTreatmentResource" : {
      "type" : "list",
      "member" : {
        "shape" : "WriteTreatmentResource"
      }
    },
    "ListOf__string" : {
      "type" : "list",
      "member" : {
        "shape" : "__string"
      }
    },
    "__long" : {
      "type" : "long"
    },
    "MapOfAddressConfiguration" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "AddressConfiguration"
      }
    },
    "MapOfAttributeDimension" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "AttributeDimension"
      }
    },
    "MapOfChannelResponse" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "ChannelResponse"
      }
    },
    "MapOfEndpointMessageResult" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "EndpointMessageResult"
      }
    },
    "MapOfEndpointSendConfiguration" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "EndpointSendConfiguration"
      }
    },
    "MapOfEvent" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "Event"
      }
    },
    "MapOfEventItemResponse" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "EventItemResponse"
      }
    },
    "MapOfEventsBatch" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "EventsBatch"
      }
    },
    "MapOfItemResponse" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "ItemResponse"
      }
    },
    "MapOfMessageResult" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "MessageResult"
      }
    },
    "MapOfMetricDimension" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "MetricDimension"
      }
    },
    "MapOf__double" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "__double"
      }
    },
    "MapOf__integer" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "__integer"
      }
    },
    "MapOfListOf__string" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "ListOf__string"
      }
    },
    "MapOfMapOfEndpointMessageResult" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "MapOfEndpointMessageResult"
      }
    },
    "MapOf__string" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "__string"
      }
    },
    "__string" : {
      "type" : "string"
    },
    "__timestampIso8601" : {
      "type" : "timestamp",
      "timestampFormat" : "iso8601"
    },
    "__timestampUnix" : {
      "type" : "timestamp",
      "timestampFormat" : "unixTimestamp"
    }
  }
}