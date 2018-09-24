awsim['medialive'] = {
  "metadata": {
    "apiVersion": "2017-10-14",
    "endpointPrefix": "medialive",
    "signingName": "medialive",
    "serviceFullName": "AWS Elemental MediaLive",
    "serviceId": "MediaLive",
    "protocol": "rest-json",
    "jsonVersion": "1.1",
    "uid": "medialive-2017-10-14",
    "signatureVersion": "v4",
    "serviceAbbreviation": "MediaLive"
  },
  "operations": {
    "BatchUpdateSchedule": {
      "name": "BatchUpdateSchedule",
      "http": {
        "method": "PUT",
        "requestUri": "/prod/channels/{channelId}/schedule",
        "responseCode": 200
      },
      "input": {
        "shape": "BatchUpdateScheduleRequest"
      },
      "output": {
        "shape": "BatchUpdateScheduleResponse",
        "documentation": "Successful update of the schedule."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid."
        },
        {
          "shape": "UnprocessableEntityException",
          "documentation": "The update schedule request failed validation."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to update the channel schedule."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "The specified channel id does not exist."
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on update schedule calls."
        }
      ],
      "documentation": "Update a channel schedule"
    },
    "CreateChannel": {
      "name": "CreateChannel",
      "http": {
        "method": "POST",
        "requestUri": "/prod/channels",
        "responseCode": 201
      },
      "input": {
        "shape": "CreateChannelRequest"
      },
      "output": {
        "shape": "CreateChannelResponse",
        "documentation": "Creation of channel is started."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid."
        },
        {
          "shape": "UnprocessableEntityException",
          "documentation": "The Channel failed validation and could not be created."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to create the channel."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on create channel calls to channel service."
        },
        {
          "shape": "ConflictException",
          "documentation": "The channel is unable to create due to an issue with channel resources."
        }
      ],
      "documentation": "Creates a new channel"
    },
    "CreateInput": {
      "name": "CreateInput",
      "http": {
        "method": "POST",
        "requestUri": "/prod/inputs",
        "responseCode": 201
      },
      "input": {
        "shape": "CreateInputRequest"
      },
      "output": {
        "shape": "CreateInputResponse",
        "documentation": "Successfully created the input."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Service Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "Access was denied"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Limit exceeded"
        }
      ],
      "documentation": "Create an input"
    },
    "CreateInputSecurityGroup": {
      "name": "CreateInputSecurityGroup",
      "http": {
        "method": "POST",
        "requestUri": "/prod/inputSecurityGroups",
        "responseCode": 200
      },
      "input": {
        "shape": "CreateInputSecurityGroupRequest"
      },
      "output": {
        "shape": "CreateInputSecurityGroupResponse",
        "documentation": "Successfully created the Input Security Group."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The request to create an Input Security Group was Invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Server Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "The requester does not have permission to create an Input Security Group"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Limit Exceeded Error"
        }
      ],
      "documentation": "Creates a Input Security Group"
    },
    "DeleteChannel": {
      "name": "DeleteChannel",
      "http": {
        "method": "DELETE",
        "requestUri": "/prod/channels/{channelId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DeleteChannelRequest"
      },
      "output": {
        "shape": "DeleteChannelResponse",
        "documentation": "Deletion was successfully initiated."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to delete the channel."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "The channel you're requesting to delete does not exist."
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on delete channel calls to channel service."
        },
        {
          "shape": "ConflictException",
          "documentation": "The channel is unable to delete due to an issue with channel resources."
        }
      ],
      "documentation": "Starts deletion of channel. The associated outputs are also deleted."
    },
    "DeleteInput": {
      "name": "DeleteInput",
      "http": {
        "method": "DELETE",
        "requestUri": "/prod/inputs/{inputId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DeleteInputRequest"
      },
      "output": {
        "shape": "DeleteInputResponse",
        "documentation": "Successful deletion"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Service Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "Access was denied"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "Input not found"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Limit exceeded"
        },
        {
          "shape": "ConflictException",
          "documentation": "Resource conflict"
        }
      ],
      "documentation": "Deletes the input end point"
    },
    "DeleteInputSecurityGroup": {
      "name": "DeleteInputSecurityGroup",
      "http": {
        "method": "DELETE",
        "requestUri": "/prod/inputSecurityGroups/{inputSecurityGroupId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DeleteInputSecurityGroupRequest"
      },
      "output": {
        "shape": "DeleteInputSecurityGroupResponse",
        "documentation": "An Input Security Group"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The request to delete the Input Security Group was Invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Server Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "The requester does not have permission to delete this Input Security Group"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "Input Security Group not found"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Limit Exceeded Error"
        }
      ],
      "documentation": "Deletes an Input Security Group"
    },
    "DeleteReservation": {
      "name": "DeleteReservation",
      "http": {
        "method": "DELETE",
        "requestUri": "/prod/reservations/{reservationId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DeleteReservationRequest"
      },
      "output": {
        "shape": "DeleteReservationResponse",
        "documentation": "Deleted reservation"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal service error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to delete reservation"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad gateway error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "Reservation you're attempting to delete does not exist"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway timeout error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on delete reservation request"
        },
        {
          "shape": "ConflictException",
          "documentation": "The reservation could not be deleted because it is currently active."
        }
      ],
      "documentation": "Delete an expired reservation."
    },
    "DescribeChannel": {
      "name": "DescribeChannel",
      "http": {
        "method": "GET",
        "requestUri": "/prod/channels/{channelId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DescribeChannelRequest"
      },
      "output": {
        "shape": "DescribeChannelResponse",
        "documentation": "Channel details"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to describe the channel."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "The channel you're requesting to describe does not exist."
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on describe channel calls to channel service."
        }
      ],
      "documentation": "Gets details about a channel"
    },
    "DescribeInput": {
      "name": "DescribeInput",
      "http": {
        "method": "GET",
        "requestUri": "/prod/inputs/{inputId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DescribeInputRequest"
      },
      "output": {
        "shape": "DescribeInputResponse",
        "documentation": "Input details"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Service Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "Access was denied"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "Input not found"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Limit exceeded"
        }
      ],
      "documentation": "Produces details about an input"
    },
    "DescribeInputSecurityGroup": {
      "name": "DescribeInputSecurityGroup",
      "http": {
        "method": "GET",
        "requestUri": "/prod/inputSecurityGroups/{inputSecurityGroupId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DescribeInputSecurityGroupRequest"
      },
      "output": {
        "shape": "DescribeInputSecurityGroupResponse",
        "documentation": "An Input Security Group"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The request to describe an Input Security Group was Invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Server Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "The requester does not have permission to describe this Input Security Group"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "Input Security Group not found"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Limit Exceeded Error"
        }
      ],
      "documentation": "Produces a summary of an Input Security Group"
    },
    "DescribeOffering": {
      "name": "DescribeOffering",
      "http": {
        "method": "GET",
        "requestUri": "/prod/offerings/{offeringId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DescribeOfferingRequest"
      },
      "output": {
        "shape": "DescribeOfferingResponse",
        "documentation": "Offering details"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal service error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to describe offering"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad gateway error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "Offering you're attempting to describe does not exist"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway timeout error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on describe offering request"
        }
      ],
      "documentation": "Get details for an offering."
    },
    "DescribeReservation": {
      "name": "DescribeReservation",
      "http": {
        "method": "GET",
        "requestUri": "/prod/reservations/{reservationId}",
        "responseCode": 200
      },
      "input": {
        "shape": "DescribeReservationRequest"
      },
      "output": {
        "shape": "DescribeReservationResponse",
        "documentation": "Reservation details"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal service error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to describe reservation"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad gateway error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "Reservation you're attempting to describe does not exist"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway timeout error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on describe reservation request"
        }
      ],
      "documentation": "Get details for a reservation."
    },
    "DescribeSchedule": {
      "name": "DescribeSchedule",
      "http": {
        "method": "GET",
        "requestUri": "/prod/channels/{channelId}/schedule",
        "responseCode": 200
      },
      "input": {
        "shape": "DescribeScheduleRequest"
      },
      "output": {
        "shape": "DescribeScheduleResponse",
        "documentation": "An array of channel schedule actions."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to describe the channel schedule."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "The channel you're requesting a schedule describe for does not exist."
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on describe schedule calls."
        }
      ],
      "documentation": "Get a channel schedule"
    },
    "ListChannels": {
      "name": "ListChannels",
      "http": {
        "method": "GET",
        "requestUri": "/prod/channels",
        "responseCode": 200
      },
      "input": {
        "shape": "ListChannelsRequest"
      },
      "output": {
        "shape": "ListChannelsResponse",
        "documentation": "An array of channels"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to list channels."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on list channel calls to channel service."
        }
      ],
      "documentation": "Produces list of channels that have been created"
    },
    "ListInputSecurityGroups": {
      "name": "ListInputSecurityGroups",
      "http": {
        "method": "GET",
        "requestUri": "/prod/inputSecurityGroups",
        "responseCode": 200
      },
      "input": {
        "shape": "ListInputSecurityGroupsRequest"
      },
      "output": {
        "shape": "ListInputSecurityGroupsResponse",
        "documentation": "An array of Input Security Groups"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The request to list Input Security Groups was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Server Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "The requester does not have permission to call ListInputSecurityGroups"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Limit Exceeded Error"
        }
      ],
      "documentation": "Produces a list of Input Security Groups for an account"
    },
    "ListInputs": {
      "name": "ListInputs",
      "http": {
        "method": "GET",
        "requestUri": "/prod/inputs",
        "responseCode": 200
      },
      "input": {
        "shape": "ListInputsRequest"
      },
      "output": {
        "shape": "ListInputsResponse",
        "documentation": "An array of inputs"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Service Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "Access was denied"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Limit exceeded"
        }
      ],
      "documentation": "Produces list of inputs that have been created"
    },
    "ListOfferings": {
      "name": "ListOfferings",
      "http": {
        "method": "GET",
        "requestUri": "/prod/offerings",
        "responseCode": 200
      },
      "input": {
        "shape": "ListOfferingsRequest"
      },
      "output": {
        "shape": "ListOfferingsResponse",
        "documentation": "List of offerings"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal service error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to list offerings"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad gateway error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway timeout error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on list offerings request"
        }
      ],
      "documentation": "List offerings available for purchase."
    },
    "ListReservations": {
      "name": "ListReservations",
      "http": {
        "method": "GET",
        "requestUri": "/prod/reservations",
        "responseCode": 200
      },
      "input": {
        "shape": "ListReservationsRequest"
      },
      "output": {
        "shape": "ListReservationsResponse",
        "documentation": "List of reservations"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal service error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to list reservations"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad gateway error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway timeout error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on list reservations request"
        }
      ],
      "documentation": "List purchased reservations."
    },
    "PurchaseOffering": {
      "name": "PurchaseOffering",
      "http": {
        "method": "POST",
        "requestUri": "/prod/offerings/{offeringId}/purchase",
        "responseCode": 201
      },
      "input": {
        "shape": "PurchaseOfferingRequest"
      },
      "output": {
        "shape": "PurchaseOfferingResponse",
        "documentation": "Purchased reservation"
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal service error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to purchase the offering"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad gateway error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "Offering you're attempting to purchase does not exist"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway timeout error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on purchase offering request"
        },
        {
          "shape": "ConflictException",
          "documentation": "Offering purchase prevented by service resource issue"
        }
      ],
      "documentation": "Purchase an offering and create a reservation."
    },
    "StartChannel": {
      "name": "StartChannel",
      "http": {
        "method": "POST",
        "requestUri": "/prod/channels/{channelId}/start",
        "responseCode": 200
      },
      "input": {
        "shape": "StartChannelRequest"
      },
      "output": {
        "shape": "StartChannelResponse",
        "documentation": "Successfully initiated start of the channel."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to start the channel."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "The channel you're requesting to start does not exist."
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on start channel calls to channel service."
        },
        {
          "shape": "ConflictException",
          "documentation": "The channel is unable to start due to an issue with channel resources."
        }
      ],
      "documentation": "Starts an existing channel"
    },
    "StopChannel": {
      "name": "StopChannel",
      "http": {
        "method": "POST",
        "requestUri": "/prod/channels/{channelId}/stop",
        "responseCode": 200
      },
      "input": {
        "shape": "StopChannelRequest"
      },
      "output": {
        "shape": "StopChannelResponse",
        "documentation": "Successfully initiated stop of the channel."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to stop the channel."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "The channel you're requesting to stop does not exist."
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "TooManyRequestsException",
          "documentation": "Request limit exceeded on stop channel calls to channel service."
        },
        {
          "shape": "ConflictException",
          "documentation": "The channel is unable to stop due to an issue with channel resources."
        }
      ],
      "documentation": "Stops a running channel"
    },
    "UpdateChannel": {
      "name": "UpdateChannel",
      "http": {
        "method": "PUT",
        "requestUri": "/prod/channels/{channelId}",
        "responseCode": 200
      },
      "input": {
        "shape": "UpdateChannelRequest"
      },
      "output": {
        "shape": "UpdateChannelResponse",
        "documentation": "Channel is successfully updated."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request was invalid."
        },
        {
          "shape": "UnprocessableEntityException",
          "documentation": "The channel configuration failed validation and could not be updated."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Unexpected internal service error."
        },
        {
          "shape": "ForbiddenException",
          "documentation": "You do not have permission to update the channel."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "ConflictException",
          "documentation": "The channel is unable to update due to an issue with channel resources."
        }
      ],
      "documentation": "Updates a channel."
    },
    "UpdateInput": {
      "name": "UpdateInput",
      "http": {
        "method": "PUT",
        "requestUri": "/prod/inputs/{inputId}",
        "responseCode": 200
      },
      "input": {
        "shape": "UpdateInputRequest"
      },
      "output": {
        "shape": "UpdateInputResponse",
        "documentation": "The input update is successfully initiated."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "This request to update the input was invalid."
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Service Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "The requester does not have permission to update an input."
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "The input was not found."
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "ConflictException",
          "documentation": "The input was unable to be updated at this time due to an issue with input resources."
        }
      ],
      "documentation": "Updates an input."
    },
    "UpdateInputSecurityGroup": {
      "name": "UpdateInputSecurityGroup",
      "http": {
        "method": "PUT",
        "requestUri": "/prod/inputSecurityGroups/{inputSecurityGroupId}",
        "responseCode": 200
      },
      "input": {
        "shape": "UpdateInputSecurityGroupRequest"
      },
      "output": {
        "shape": "UpdateInputSecurityGroupResponse",
        "documentation": "Successfully initiated the update of the Input Security Group."
      },
      "errors": [
        {
          "shape": "BadRequestException",
          "documentation": "The request to update the Input Security Group was invalid"
        },
        {
          "shape": "InternalServerErrorException",
          "documentation": "Internal Server Error"
        },
        {
          "shape": "ForbiddenException",
          "documentation": "The requester does not have permission to update an Input Security Group"
        },
        {
          "shape": "BadGatewayException",
          "documentation": "Bad Gateway Error"
        },
        {
          "shape": "NotFoundException",
          "documentation": "The Input Security Group was not found."
        },
        {
          "shape": "GatewayTimeoutException",
          "documentation": "Gateway Timeout Error"
        },
        {
          "shape": "ConflictException",
          "documentation": "The Input Security Group was unable to be updated due to an issue with input security group resources."
        }
      ],
      "documentation": "Update an Input Security Group's Whilelists."
    }
  },
  "shapes": {
    "AacCodingMode": {
      "type": "string",
      "enum": [
        "AD_RECEIVER_MIX",
        "CODING_MODE_1_0",
        "CODING_MODE_1_1",
        "CODING_MODE_2_0",
        "CODING_MODE_5_1"
      ],
      "documentation": "Placeholder documentation for AacCodingMode"
    },
    "AacInputType": {
      "type": "string",
      "enum": [
        "BROADCASTER_MIXED_AD",
        "NORMAL"
      ],
      "documentation": "Placeholder documentation for AacInputType"
    },
    "AacProfile": {
      "type": "string",
      "enum": [
        "HEV1",
        "HEV2",
        "LC"
      ],
      "documentation": "Placeholder documentation for AacProfile"
    },
    "AacRateControlMode": {
      "type": "string",
      "enum": [
        "CBR",
        "VBR"
      ],
      "documentation": "Placeholder documentation for AacRateControlMode"
    },
    "AacRawFormat": {
      "type": "string",
      "enum": [
        "LATM_LOAS",
        "NONE"
      ],
      "documentation": "Placeholder documentation for AacRawFormat"
    },
    "AacSettings": {
      "type": "structure",
      "members": {
        "Bitrate": {
          "shape": "__double",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Valid values depend on rate control mode and profile."
        },
        "CodingMode": {
          "shape": "AacCodingMode",
          "locationName": "codingMode",
          "documentation": "Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E."
        },
        "InputType": {
          "shape": "AacInputType",
          "locationName": "inputType",
          "documentation": "Set to \"broadcasterMixedAd\" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains \"broadcaster mixed AD\". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.\n\nLeave set to \"normal\" when input does not contain pre-mixed audio + AD."
        },
        "Profile": {
          "shape": "AacProfile",
          "locationName": "profile",
          "documentation": "AAC Profile."
        },
        "RateControlMode": {
          "shape": "AacRateControlMode",
          "locationName": "rateControlMode",
          "documentation": "Rate Control Mode."
        },
        "RawFormat": {
          "shape": "AacRawFormat",
          "locationName": "rawFormat",
          "documentation": "Sets LATM / LOAS AAC output for raw containers."
        },
        "SampleRate": {
          "shape": "__double",
          "locationName": "sampleRate",
          "documentation": "Sample rate in Hz. Valid values depend on rate control mode and profile."
        },
        "Spec": {
          "shape": "AacSpec",
          "locationName": "spec",
          "documentation": "Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers."
        },
        "VbrQuality": {
          "shape": "AacVbrQuality",
          "locationName": "vbrQuality",
          "documentation": "VBR Quality Level - Only used if rateControlMode is VBR."
        }
      },
      "documentation": "Placeholder documentation for AacSettings"
    },
    "AacSpec": {
      "type": "string",
      "enum": [
        "MPEG2",
        "MPEG4"
      ],
      "documentation": "Placeholder documentation for AacSpec"
    },
    "AacVbrQuality": {
      "type": "string",
      "enum": [
        "HIGH",
        "LOW",
        "MEDIUM_HIGH",
        "MEDIUM_LOW"
      ],
      "documentation": "Placeholder documentation for AacVbrQuality"
    },
    "Ac3BitstreamMode": {
      "type": "string",
      "enum": [
        "COMMENTARY",
        "COMPLETE_MAIN",
        "DIALOGUE",
        "EMERGENCY",
        "HEARING_IMPAIRED",
        "MUSIC_AND_EFFECTS",
        "VISUALLY_IMPAIRED",
        "VOICE_OVER"
      ],
      "documentation": "Placeholder documentation for Ac3BitstreamMode"
    },
    "Ac3CodingMode": {
      "type": "string",
      "enum": [
        "CODING_MODE_1_0",
        "CODING_MODE_1_1",
        "CODING_MODE_2_0",
        "CODING_MODE_3_2_LFE"
      ],
      "documentation": "Placeholder documentation for Ac3CodingMode"
    },
    "Ac3DrcProfile": {
      "type": "string",
      "enum": [
        "FILM_STANDARD",
        "NONE"
      ],
      "documentation": "Placeholder documentation for Ac3DrcProfile"
    },
    "Ac3LfeFilter": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for Ac3LfeFilter"
    },
    "Ac3MetadataControl": {
      "type": "string",
      "enum": [
        "FOLLOW_INPUT",
        "USE_CONFIGURED"
      ],
      "documentation": "Placeholder documentation for Ac3MetadataControl"
    },
    "Ac3Settings": {
      "type": "structure",
      "members": {
        "Bitrate": {
          "shape": "__double",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Valid bitrates depend on the coding mode."
        },
        "BitstreamMode": {
          "shape": "Ac3BitstreamMode",
          "locationName": "bitstreamMode",
          "documentation": "Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values."
        },
        "CodingMode": {
          "shape": "Ac3CodingMode",
          "locationName": "codingMode",
          "documentation": "Dolby Digital coding mode. Determines number of channels."
        },
        "Dialnorm": {
          "shape": "__integerMin1Max31",
          "locationName": "dialnorm",
          "documentation": "Sets the dialnorm for the output. If excluded and input audio is Dolby Digital, dialnorm will be passed through."
        },
        "DrcProfile": {
          "shape": "Ac3DrcProfile",
          "locationName": "drcProfile",
          "documentation": "If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification."
        },
        "LfeFilter": {
          "shape": "Ac3LfeFilter",
          "locationName": "lfeFilter",
          "documentation": "When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid in codingMode32Lfe mode."
        },
        "MetadataControl": {
          "shape": "Ac3MetadataControl",
          "locationName": "metadataControl",
          "documentation": "When set to \"followInput\", encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used."
        }
      },
      "documentation": "Placeholder documentation for Ac3Settings"
    },
    "AccessDenied": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "documentation": "Placeholder documentation for AccessDenied"
    },
    "AfdSignaling": {
      "type": "string",
      "enum": [
        "AUTO",
        "FIXED",
        "NONE"
      ],
      "documentation": "Placeholder documentation for AfdSignaling"
    },
    "ArchiveContainerSettings": {
      "type": "structure",
      "members": {
        "M2tsSettings": {
          "shape": "M2tsSettings",
          "locationName": "m2tsSettings"
        }
      },
      "documentation": "Placeholder documentation for ArchiveContainerSettings"
    },
    "ArchiveGroupSettings": {
      "type": "structure",
      "members": {
        "Destination": {
          "shape": "OutputLocationRef",
          "locationName": "destination",
          "documentation": "A directory and base filename where archive files should be written.  If the base filename portion of the URI is left blank, the base filename of the first input will be automatically inserted."
        },
        "RolloverInterval": {
          "shape": "__integerMin1",
          "locationName": "rolloverInterval",
          "documentation": "Number of seconds to write to archive file before closing and starting a new one."
        }
      },
      "required": [
        "Destination"
      ],
      "documentation": "Placeholder documentation for ArchiveGroupSettings"
    },
    "ArchiveOutputSettings": {
      "type": "structure",
      "members": {
        "ContainerSettings": {
          "shape": "ArchiveContainerSettings",
          "locationName": "containerSettings",
          "documentation": "Settings specific to the container type of the file."
        },
        "Extension": {
          "shape": "__string",
          "locationName": "extension",
          "documentation": "Output file extension. If excluded, this will be auto-selected from the container type."
        },
        "NameModifier": {
          "shape": "__string",
          "locationName": "nameModifier",
          "documentation": "String concatenated to the end of the destination filename.  Required for multiple outputs of the same type."
        }
      },
      "required": [
        "ContainerSettings"
      ],
      "documentation": "Placeholder documentation for ArchiveOutputSettings"
    },
    "AribDestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for AribDestinationSettings"
    },
    "AribSourceSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for AribSourceSettings"
    },
    "AudioChannelMapping": {
      "type": "structure",
      "members": {
        "InputChannelLevels": {
          "shape": "__listOfInputChannelLevel",
          "locationName": "inputChannelLevels",
          "documentation": "Indices and gain values for each input channel that should be remixed into this output channel."
        },
        "OutputChannel": {
          "shape": "__integerMin0Max7",
          "locationName": "outputChannel",
          "documentation": "The index of the output channel being produced."
        }
      },
      "required": [
        "OutputChannel",
        "InputChannelLevels"
      ],
      "documentation": "Placeholder documentation for AudioChannelMapping"
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
        "Eac3Settings": {
          "shape": "Eac3Settings",
          "locationName": "eac3Settings"
        },
        "Mp2Settings": {
          "shape": "Mp2Settings",
          "locationName": "mp2Settings"
        },
        "PassThroughSettings": {
          "shape": "PassThroughSettings",
          "locationName": "passThroughSettings"
        }
      },
      "documentation": "Placeholder documentation for AudioCodecSettings"
    },
    "AudioDescription": {
      "type": "structure",
      "members": {
        "AudioNormalizationSettings": {
          "shape": "AudioNormalizationSettings",
          "locationName": "audioNormalizationSettings",
          "documentation": "Advanced audio normalization settings."
        },
        "AudioSelectorName": {
          "shape": "__string",
          "locationName": "audioSelectorName",
          "documentation": "The name of the AudioSelector used as the source for this AudioDescription."
        },
        "AudioType": {
          "shape": "AudioType",
          "locationName": "audioType",
          "documentation": "Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1."
        },
        "AudioTypeControl": {
          "shape": "AudioDescriptionAudioTypeControl",
          "locationName": "audioTypeControl",
          "documentation": "Determines how audio type is determined.\n  followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.\n  useConfigured: The value in Audio Type is included in the output.\nNote that this field and audioType are both ignored if inputType is broadcasterMixedAd."
        },
        "CodecSettings": {
          "shape": "AudioCodecSettings",
          "locationName": "codecSettings",
          "documentation": "Audio codec settings."
        },
        "LanguageCode": {
          "shape": "__stringMin3Max3",
          "locationName": "languageCode",
          "documentation": "Indicates the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input."
        },
        "LanguageCodeControl": {
          "shape": "AudioDescriptionLanguageCodeControl",
          "locationName": "languageCodeControl",
          "documentation": "Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event."
        },
        "RemixSettings": {
          "shape": "RemixSettings",
          "locationName": "remixSettings",
          "documentation": "Settings that control how input audio channels are remixed into the output audio channels."
        },
        "StreamName": {
          "shape": "__string",
          "locationName": "streamName",
          "documentation": "Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary)."
        }
      },
      "required": [
        "AudioSelectorName",
        "Name"
      ],
      "documentation": "Placeholder documentation for AudioDescription"
    },
    "AudioDescriptionAudioTypeControl": {
      "type": "string",
      "enum": [
        "FOLLOW_INPUT",
        "USE_CONFIGURED"
      ],
      "documentation": "Placeholder documentation for AudioDescriptionAudioTypeControl"
    },
    "AudioDescriptionLanguageCodeControl": {
      "type": "string",
      "enum": [
        "FOLLOW_INPUT",
        "USE_CONFIGURED"
      ],
      "documentation": "Placeholder documentation for AudioDescriptionLanguageCodeControl"
    },
    "AudioLanguageSelection": {
      "type": "structure",
      "members": {
        "LanguageCode": {
          "shape": "__string",
          "locationName": "languageCode",
          "documentation": "Selects a specific three-letter language code from within an audio source."
        },
        "LanguageSelectionPolicy": {
          "shape": "AudioLanguageSelectionPolicy",
          "locationName": "languageSelectionPolicy",
          "documentation": "When set to \"strict\", the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If \"loose\", then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can't find one with the same language."
        }
      },
      "required": [
        "LanguageCode"
      ],
      "documentation": "Placeholder documentation for AudioLanguageSelection"
    },
    "AudioLanguageSelectionPolicy": {
      "type": "string",
      "enum": [
        "LOOSE",
        "STRICT"
      ],
      "documentation": "Placeholder documentation for AudioLanguageSelectionPolicy"
    },
    "AudioNormalizationAlgorithm": {
      "type": "string",
      "enum": [
        "ITU_1770_1",
        "ITU_1770_2"
      ],
      "documentation": "Placeholder documentation for AudioNormalizationAlgorithm"
    },
    "AudioNormalizationAlgorithmControl": {
      "type": "string",
      "enum": [
        "CORRECT_AUDIO"
      ],
      "documentation": "Placeholder documentation for AudioNormalizationAlgorithmControl"
    },
    "AudioNormalizationSettings": {
      "type": "structure",
      "members": {
        "Algorithm": {
          "shape": "AudioNormalizationAlgorithm",
          "locationName": "algorithm",
          "documentation": "Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 conforms to the EBU R-128 specification."
        },
        "AlgorithmControl": {
          "shape": "AudioNormalizationAlgorithmControl",
          "locationName": "algorithmControl",
          "documentation": "When set to correctAudio the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio will be measured but not adjusted."
        },
        "TargetLkfs": {
          "shape": "__doubleMinNegative59Max0",
          "locationName": "targetLkfs",
          "documentation": "Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm.  The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS."
        }
      },
      "documentation": "Placeholder documentation for AudioNormalizationSettings"
    },
    "AudioOnlyHlsSettings": {
      "type": "structure",
      "members": {
        "AudioGroupId": {
          "shape": "__string",
          "locationName": "audioGroupId",
          "documentation": "Specifies the group to which the audio Rendition belongs."
        },
        "AudioOnlyImage": {
          "shape": "InputLocation",
          "locationName": "audioOnlyImage",
          "documentation": "For use with an audio only Stream. Must be a .jpg or .png file. If given, this image will be used as the cover-art for the audio only output. Ideally, it should be formatted for an iPhone screen for two reasons. The iPhone does not resize the image, it crops a centered image on the top/bottom and left/right. Additionally, this image file gets saved bit-for-bit into every 10-second segment file, so will increase bandwidth by {image file size} * {segment count} * {user count.}."
        },
        "AudioTrackType": {
          "shape": "AudioOnlyHlsTrackType",
          "locationName": "audioTrackType",
          "documentation": "Four types of audio-only tracks are supported:\n\nAudio-Only Variant Stream\nThe client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest.\n\nAlternate Audio, Auto Select, Default\nAlternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES\n\nAlternate Audio, Auto Select, Not Default\nAlternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES\n\nAlternate Audio, not Auto Select\nAlternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO"
        }
      },
      "documentation": "Placeholder documentation for AudioOnlyHlsSettings"
    },
    "AudioOnlyHlsTrackType": {
      "type": "string",
      "enum": [
        "ALTERNATE_AUDIO_AUTO_SELECT",
        "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
        "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
        "AUDIO_ONLY_VARIANT_STREAM"
      ],
      "documentation": "Placeholder documentation for AudioOnlyHlsTrackType"
    },
    "AudioPidSelection": {
      "type": "structure",
      "members": {
        "Pid": {
          "shape": "__integerMin0Max8191",
          "locationName": "pid",
          "documentation": "Selects a specific PID from within a source."
        }
      },
      "required": [
        "Pid"
      ],
      "documentation": "Placeholder documentation for AudioPidSelection"
    },
    "AudioSelector": {
      "type": "structure",
      "members": {
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input."
        },
        "SelectorSettings": {
          "shape": "AudioSelectorSettings",
          "locationName": "selectorSettings",
          "documentation": "The audio selector settings."
        }
      },
      "required": [
        "Name"
      ],
      "documentation": "Placeholder documentation for AudioSelector"
    },
    "AudioSelectorSettings": {
      "type": "structure",
      "members": {
        "AudioLanguageSelection": {
          "shape": "AudioLanguageSelection",
          "locationName": "audioLanguageSelection"
        },
        "AudioPidSelection": {
          "shape": "AudioPidSelection",
          "locationName": "audioPidSelection"
        }
      },
      "documentation": "Placeholder documentation for AudioSelectorSettings"
    },
    "AudioType": {
      "type": "string",
      "enum": [
        "CLEAN_EFFECTS",
        "HEARING_IMPAIRED",
        "UNDEFINED",
        "VISUAL_IMPAIRED_COMMENTARY"
      ],
      "documentation": "Placeholder documentation for AudioType"
    },
    "AuthenticationScheme": {
      "type": "string",
      "enum": [
        "AKAMAI",
        "COMMON"
      ],
      "documentation": "Placeholder documentation for AuthenticationScheme"
    },
    "AvailBlanking": {
      "type": "structure",
      "members": {
        "AvailBlankingImage": {
          "shape": "InputLocation",
          "locationName": "availBlankingImage",
          "documentation": "Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported."
        },
        "State": {
          "shape": "AvailBlankingState",
          "locationName": "state",
          "documentation": "When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added."
        }
      },
      "documentation": "Placeholder documentation for AvailBlanking"
    },
    "AvailBlankingState": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for AvailBlankingState"
    },
    "AvailConfiguration": {
      "type": "structure",
      "members": {
        "AvailSettings": {
          "shape": "AvailSettings",
          "locationName": "availSettings",
          "documentation": "Ad avail settings."
        }
      },
      "documentation": "Placeholder documentation for AvailConfiguration"
    },
    "AvailSettings": {
      "type": "structure",
      "members": {
        "Scte35SpliceInsert": {
          "shape": "Scte35SpliceInsert",
          "locationName": "scte35SpliceInsert"
        },
        "Scte35TimeSignalApos": {
          "shape": "Scte35TimeSignalApos",
          "locationName": "scte35TimeSignalApos"
        }
      },
      "documentation": "Placeholder documentation for AvailSettings"
    },
    "BadGatewayException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 502
      },
      "documentation": "Placeholder documentation for BadGatewayException"
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
      "documentation": "Placeholder documentation for BadRequestException"
    },
    "BatchScheduleActionCreateRequest": {
      "type": "structure",
      "members": {
        "ScheduleActions": {
          "shape": "__listOfScheduleAction",
          "locationName": "scheduleActions",
          "documentation": "A list of schedule actions to create."
        }
      },
      "documentation": "A list of schedule actions to create.",
      "required": [
        "ScheduleActions"
      ]
    },
    "BatchScheduleActionCreateResult": {
      "type": "structure",
      "members": {
        "ScheduleActions": {
          "shape": "__listOfScheduleAction",
          "locationName": "scheduleActions",
          "documentation": "Returned list of created schedule actions."
        }
      },
      "documentation": "Returned list of created schedule actions.",
      "required": [
        "ScheduleActions"
      ]
    },
    "BatchScheduleActionDeleteRequest": {
      "type": "structure",
      "members": {
        "ActionNames": {
          "shape": "__listOf__string",
          "locationName": "actionNames",
          "documentation": "A list of schedule actions to delete, identified by unique name."
        }
      },
      "documentation": "A list of schedule actions to delete.",
      "required": [
        "ActionNames"
      ]
    },
    "BatchScheduleActionDeleteResult": {
      "type": "structure",
      "members": {
        "ScheduleActions": {
          "shape": "__listOfScheduleAction",
          "locationName": "scheduleActions",
          "documentation": "Returned list of deleted schedule actions."
        }
      },
      "documentation": "Returned list of deleted schedule actions.",
      "required": [
        "ScheduleActions"
      ]
    },
    "BatchUpdateScheduleRequest": {
      "type": "structure",
      "members": {
        "ChannelId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "channelId",
          "documentation": "Id of the channel whose schedule is being updated."
        },
        "Creates": {
          "shape": "BatchScheduleActionCreateRequest",
          "locationName": "creates",
          "documentation": "Schedule actions to create in the schedule."
        },
        "Deletes": {
          "shape": "BatchScheduleActionDeleteRequest",
          "locationName": "deletes",
          "documentation": "Schedule actions to delete from the schedule."
        }
      },
      "documentation": "List of actions to create and list of actions to delete.",
      "required": [
        "ChannelId"
      ]
    },
    "BatchUpdateScheduleResponse": {
      "type": "structure",
      "members": {
        "Creates": {
          "shape": "BatchScheduleActionCreateResult",
          "locationName": "creates",
          "documentation": "Schedule actions created in the schedule."
        },
        "Deletes": {
          "shape": "BatchScheduleActionDeleteResult",
          "locationName": "deletes",
          "documentation": "Schedule actions deleted from the schedule."
        }
      },
      "documentation": "Response to a batch update schedule call."
    },
    "BatchUpdateScheduleResult": {
      "type": "structure",
      "members": {
        "Creates": {
          "shape": "BatchScheduleActionCreateResult",
          "locationName": "creates",
          "documentation": "Schedule actions created in the schedule."
        },
        "Deletes": {
          "shape": "BatchScheduleActionDeleteResult",
          "locationName": "deletes",
          "documentation": "Schedule actions deleted from the schedule."
        }
      },
      "documentation": "Results of a batch schedule update."
    },
    "BlackoutSlate": {
      "type": "structure",
      "members": {
        "BlackoutSlateImage": {
          "shape": "InputLocation",
          "locationName": "blackoutSlateImage",
          "documentation": "Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported."
        },
        "NetworkEndBlackout": {
          "shape": "BlackoutSlateNetworkEndBlackout",
          "locationName": "networkEndBlackout",
          "documentation": "Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the \"Network Blackout Image\" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in \"Network ID\"."
        },
        "NetworkEndBlackoutImage": {
          "shape": "InputLocation",
          "locationName": "networkEndBlackoutImage",
          "documentation": "Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster."
        },
        "NetworkId": {
          "shape": "__stringMin34Max34",
          "locationName": "networkId",
          "documentation": "Provides Network ID that matches EIDR ID format (e.g., \"10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C\")."
        },
        "State": {
          "shape": "BlackoutSlateState",
          "locationName": "state",
          "documentation": "When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata."
        }
      },
      "documentation": "Placeholder documentation for BlackoutSlate"
    },
    "BlackoutSlateNetworkEndBlackout": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for BlackoutSlateNetworkEndBlackout"
    },
    "BlackoutSlateState": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for BlackoutSlateState"
    },
    "BurnInAlignment": {
      "type": "string",
      "enum": [
        "CENTERED",
        "LEFT",
        "SMART"
      ],
      "documentation": "Placeholder documentation for BurnInAlignment"
    },
    "BurnInBackgroundColor": {
      "type": "string",
      "enum": [
        "BLACK",
        "NONE",
        "WHITE"
      ],
      "documentation": "Placeholder documentation for BurnInBackgroundColor"
    },
    "BurnInDestinationSettings": {
      "type": "structure",
      "members": {
        "Alignment": {
          "shape": "BurnInAlignment",
          "locationName": "alignment",
          "documentation": "If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting \"smart\" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  All burn-in and DVB-Sub font settings must match."
        },
        "BackgroundColor": {
          "shape": "BurnInBackgroundColor",
          "locationName": "backgroundColor",
          "documentation": "Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match."
        },
        "BackgroundOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "backgroundOpacity",
          "documentation": "Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match."
        },
        "Font": {
          "shape": "InputLocation",
          "locationName": "font",
          "documentation": "External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions,  embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match."
        },
        "FontColor": {
          "shape": "BurnInFontColor",
          "locationName": "fontColor",
          "documentation": "Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match."
        },
        "FontOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "fontOpacity",
          "documentation": "Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match."
        },
        "FontResolution": {
          "shape": "__integerMin96Max600",
          "locationName": "fontResolution",
          "documentation": "Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match."
        },
        "FontSize": {
          "shape": "__string",
          "locationName": "fontSize",
          "documentation": "When set to 'auto' fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match."
        },
        "OutlineColor": {
          "shape": "BurnInOutlineColor",
          "locationName": "outlineColor",
          "documentation": "Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        },
        "OutlineSize": {
          "shape": "__integerMin0Max10",
          "locationName": "outlineSize",
          "documentation": "Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        },
        "ShadowColor": {
          "shape": "BurnInShadowColor",
          "locationName": "shadowColor",
          "documentation": "Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match."
        },
        "ShadowOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "shadowOpacity",
          "documentation": "Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match."
        },
        "ShadowXOffset": {
          "shape": "__integer",
          "locationName": "shadowXOffset",
          "documentation": "Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match."
        },
        "ShadowYOffset": {
          "shape": "__integer",
          "locationName": "shadowYOffset",
          "documentation": "Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match."
        },
        "TeletextGridControl": {
          "shape": "BurnInTeletextGridControl",
          "locationName": "teletextGridControl",
          "documentation": "Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs."
        },
        "XPosition": {
          "shape": "__integerMin0",
          "locationName": "xPosition",
          "documentation": "Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  All burn-in and DVB-Sub font settings must match."
        },
        "YPosition": {
          "shape": "__integerMin0",
          "locationName": "yPosition",
          "documentation": "Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  All burn-in and DVB-Sub font settings must match."
        }
      },
      "documentation": "Placeholder documentation for BurnInDestinationSettings"
    },
    "BurnInFontColor": {
      "type": "string",
      "enum": [
        "BLACK",
        "BLUE",
        "GREEN",
        "RED",
        "WHITE",
        "YELLOW"
      ],
      "documentation": "Placeholder documentation for BurnInFontColor"
    },
    "BurnInOutlineColor": {
      "type": "string",
      "enum": [
        "BLACK",
        "BLUE",
        "GREEN",
        "RED",
        "WHITE",
        "YELLOW"
      ],
      "documentation": "Placeholder documentation for BurnInOutlineColor"
    },
    "BurnInShadowColor": {
      "type": "string",
      "enum": [
        "BLACK",
        "NONE",
        "WHITE"
      ],
      "documentation": "Placeholder documentation for BurnInShadowColor"
    },
    "BurnInTeletextGridControl": {
      "type": "string",
      "enum": [
        "FIXED",
        "SCALED"
      ],
      "documentation": "Placeholder documentation for BurnInTeletextGridControl"
    },
    "CaptionDescription": {
      "type": "structure",
      "members": {
        "CaptionSelectorName": {
          "shape": "__string",
          "locationName": "captionSelectorName",
          "documentation": "Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name."
        },
        "DestinationSettings": {
          "shape": "CaptionDestinationSettings",
          "locationName": "destinationSettings",
          "documentation": "Additional settings for captions destination that depend on the destination type."
        },
        "LanguageCode": {
          "shape": "__string",
          "locationName": "languageCode",
          "documentation": "ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/"
        },
        "LanguageDescription": {
          "shape": "__string",
          "locationName": "languageDescription",
          "documentation": "Human readable information to indicate captions available for players (eg. English, or Spanish)."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event."
        }
      },
      "documentation": "Output groups for this Live Event. Output groups contain information about where streams should be distributed.",
      "required": [
        "CaptionSelectorName",
        "Name"
      ]
    },
    "CaptionDestinationSettings": {
      "type": "structure",
      "members": {
        "AribDestinationSettings": {
          "shape": "AribDestinationSettings",
          "locationName": "aribDestinationSettings"
        },
        "BurnInDestinationSettings": {
          "shape": "BurnInDestinationSettings",
          "locationName": "burnInDestinationSettings"
        },
        "DvbSubDestinationSettings": {
          "shape": "DvbSubDestinationSettings",
          "locationName": "dvbSubDestinationSettings"
        },
        "EmbeddedDestinationSettings": {
          "shape": "EmbeddedDestinationSettings",
          "locationName": "embeddedDestinationSettings"
        },
        "EmbeddedPlusScte20DestinationSettings": {
          "shape": "EmbeddedPlusScte20DestinationSettings",
          "locationName": "embeddedPlusScte20DestinationSettings"
        },
        "RtmpCaptionInfoDestinationSettings": {
          "shape": "RtmpCaptionInfoDestinationSettings",
          "locationName": "rtmpCaptionInfoDestinationSettings"
        },
        "Scte20PlusEmbeddedDestinationSettings": {
          "shape": "Scte20PlusEmbeddedDestinationSettings",
          "locationName": "scte20PlusEmbeddedDestinationSettings"
        },
        "Scte27DestinationSettings": {
          "shape": "Scte27DestinationSettings",
          "locationName": "scte27DestinationSettings"
        },
        "SmpteTtDestinationSettings": {
          "shape": "SmpteTtDestinationSettings",
          "locationName": "smpteTtDestinationSettings"
        },
        "TeletextDestinationSettings": {
          "shape": "TeletextDestinationSettings",
          "locationName": "teletextDestinationSettings"
        },
        "TtmlDestinationSettings": {
          "shape": "TtmlDestinationSettings",
          "locationName": "ttmlDestinationSettings"
        },
        "WebvttDestinationSettings": {
          "shape": "WebvttDestinationSettings",
          "locationName": "webvttDestinationSettings"
        }
      },
      "documentation": "Placeholder documentation for CaptionDestinationSettings"
    },
    "CaptionLanguageMapping": {
      "type": "structure",
      "members": {
        "CaptionChannel": {
          "shape": "__integerMin1Max4",
          "locationName": "captionChannel",
          "documentation": "The closed caption channel being described by this CaptionLanguageMapping.  Each channel mapping must have a unique channel number (maximum of 4)"
        },
        "LanguageCode": {
          "shape": "__stringMin3Max3",
          "locationName": "languageCode",
          "documentation": "Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)"
        },
        "LanguageDescription": {
          "shape": "__stringMin1",
          "locationName": "languageDescription",
          "documentation": "Textual description of language"
        }
      },
      "documentation": "Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.",
      "required": [
        "LanguageCode",
        "LanguageDescription",
        "CaptionChannel"
      ]
    },
    "CaptionSelector": {
      "type": "structure",
      "members": {
        "LanguageCode": {
          "shape": "__string",
          "locationName": "languageCode",
          "documentation": "When specified this field indicates the three letter language code of the caption track to extract from the source."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event."
        },
        "SelectorSettings": {
          "shape": "CaptionSelectorSettings",
          "locationName": "selectorSettings",
          "documentation": "Caption selector settings."
        }
      },
      "documentation": "Output groups for this Live Event. Output groups contain information about where streams should be distributed.",
      "required": [
        "Name"
      ]
    },
    "CaptionSelectorSettings": {
      "type": "structure",
      "members": {
        "AribSourceSettings": {
          "shape": "AribSourceSettings",
          "locationName": "aribSourceSettings"
        },
        "DvbSubSourceSettings": {
          "shape": "DvbSubSourceSettings",
          "locationName": "dvbSubSourceSettings"
        },
        "EmbeddedSourceSettings": {
          "shape": "EmbeddedSourceSettings",
          "locationName": "embeddedSourceSettings"
        },
        "Scte20SourceSettings": {
          "shape": "Scte20SourceSettings",
          "locationName": "scte20SourceSettings"
        },
        "Scte27SourceSettings": {
          "shape": "Scte27SourceSettings",
          "locationName": "scte27SourceSettings"
        },
        "TeletextSourceSettings": {
          "shape": "TeletextSourceSettings",
          "locationName": "teletextSourceSettings"
        }
      },
      "documentation": "Placeholder documentation for CaptionSelectorSettings"
    },
    "Channel": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The unique arn of the channel."
        },
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations",
          "documentation": "A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n"
        },
        "EgressEndpoints": {
          "shape": "__listOfChannelEgressEndpoint",
          "locationName": "egressEndpoints",
          "documentation": "The endpoints where outgoing connections initiate from"
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The unique id of the channel."
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments",
          "documentation": "List of input attachments for channel."
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level being written to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the channel. (user-mutable)"
        },
        "PipelinesRunningCount": {
          "shape": "__integer",
          "locationName": "pipelinesRunningCount",
          "documentation": "The number of currently healthy pipelines."
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "The Amazon Resource Name (ARN) of the role assumed when running the Channel."
        },
        "State": {
          "shape": "ChannelState",
          "locationName": "state"
        }
      },
      "documentation": "Placeholder documentation for Channel"
    },
    "ChannelConfigurationValidationError": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        },
        "ValidationErrors": {
          "shape": "__listOfValidationError",
          "locationName": "validationErrors",
          "documentation": "A collection of validation error responses."
        }
      },
      "documentation": "Placeholder documentation for ChannelConfigurationValidationError"
    },
    "ChannelEgressEndpoint": {
      "type": "structure",
      "members": {
        "SourceIp": {
          "shape": "__string",
          "locationName": "sourceIp",
          "documentation": "Public IP of where a channel's output comes from"
        }
      },
      "documentation": "Placeholder documentation for ChannelEgressEndpoint"
    },
    "ChannelState": {
      "type": "string",
      "enum": [
        "CREATING",
        "CREATE_FAILED",
        "IDLE",
        "STARTING",
        "RUNNING",
        "RECOVERING",
        "STOPPING",
        "DELETING",
        "DELETED"
      ],
      "documentation": "Placeholder documentation for ChannelState"
    },
    "ChannelSummary": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The unique arn of the channel."
        },
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations",
          "documentation": "A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n"
        },
        "EgressEndpoints": {
          "shape": "__listOfChannelEgressEndpoint",
          "locationName": "egressEndpoints",
          "documentation": "The endpoints where outgoing connections initiate from"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The unique id of the channel."
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments",
          "documentation": "List of input attachments for channel."
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level being written to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the channel. (user-mutable)"
        },
        "PipelinesRunningCount": {
          "shape": "__integer",
          "locationName": "pipelinesRunningCount",
          "documentation": "The number of currently healthy pipelines."
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "The Amazon Resource Name (ARN) of the role assumed when running the Channel."
        },
        "State": {
          "shape": "ChannelState",
          "locationName": "state"
        }
      },
      "documentation": "Placeholder documentation for ChannelSummary"
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
      "documentation": "Placeholder documentation for ConflictException"
    },
    "CreateChannel": {
      "type": "structure",
      "members": {
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations"
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings"
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments",
          "documentation": "List of input attachments for channel."
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification",
          "documentation": "Specification of input for this channel (max. bitrate, resolution, codec, etc.)"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level to write to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name of channel."
        },
        "RequestId": {
          "shape": "__string",
          "locationName": "requestId",
          "documentation": "Unique request ID to be specified. This is needed to prevent retries from\ncreating multiple resources.\n",
          "idempotencyToken": true
        },
        "Reserved": {
          "shape": "__string",
          "locationName": "reserved",
          "documentation": "Deprecated field that's only usable by whitelisted customers.",
          "deprecated": true
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "An optional Amazon Resource Name (ARN) of the role to assume when running the Channel."
        }
      },
      "documentation": "Placeholder documentation for CreateChannel"
    },
    "CreateChannelRequest": {
      "type": "structure",
      "members": {
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations"
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings"
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments",
          "documentation": "List of input attachments for channel."
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification",
          "documentation": "Specification of input for this channel (max. bitrate, resolution, codec, etc.)"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level to write to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name of channel."
        },
        "RequestId": {
          "shape": "__string",
          "locationName": "requestId",
          "documentation": "Unique request ID to be specified. This is needed to prevent retries from\ncreating multiple resources.\n",
          "idempotencyToken": true
        },
        "Reserved": {
          "shape": "__string",
          "locationName": "reserved",
          "documentation": "Deprecated field that's only usable by whitelisted customers.",
          "deprecated": true
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "An optional Amazon Resource Name (ARN) of the role to assume when running the Channel."
        }
      },
      "documentation": "A request to create a channel"
    },
    "CreateChannelResponse": {
      "type": "structure",
      "members": {
        "Channel": {
          "shape": "Channel",
          "locationName": "channel"
        }
      },
      "documentation": "Placeholder documentation for CreateChannelResponse"
    },
    "CreateChannelResultModel": {
      "type": "structure",
      "members": {
        "Channel": {
          "shape": "Channel",
          "locationName": "channel"
        }
      },
      "documentation": "Placeholder documentation for CreateChannelResultModel"
    },
    "CreateInput": {
      "type": "structure",
      "members": {
        "Destinations": {
          "shape": "__listOfInputDestinationRequest",
          "locationName": "destinations",
          "documentation": "Destination settings for PUSH type inputs."
        },
        "InputSecurityGroups": {
          "shape": "__listOf__string",
          "locationName": "inputSecurityGroups",
          "documentation": "A list of security groups referenced by IDs to attach to the input."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name of the input."
        },
        "RequestId": {
          "shape": "__string",
          "locationName": "requestId",
          "documentation": "Unique identifier of the request to ensure the request is handled\nexactly once in case of retries.\n",
          "idempotencyToken": true
        },
        "Sources": {
          "shape": "__listOfInputSourceRequest",
          "locationName": "sources",
          "documentation": "The source URLs for a PULL-type input. Every PULL type input needs\nexactly two source URLs for redundancy.\nOnly specify sources for PULL type Inputs. Leave Destinations empty.\n"
        },
        "Type": {
          "shape": "InputType",
          "locationName": "type"
        }
      },
      "documentation": "Placeholder documentation for CreateInput"
    },
    "CreateInputRequest": {
      "type": "structure",
      "members": {
        "Destinations": {
          "shape": "__listOfInputDestinationRequest",
          "locationName": "destinations",
          "documentation": "Destination settings for PUSH type inputs."
        },
        "InputSecurityGroups": {
          "shape": "__listOf__string",
          "locationName": "inputSecurityGroups",
          "documentation": "A list of security groups referenced by IDs to attach to the input."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name of the input."
        },
        "RequestId": {
          "shape": "__string",
          "locationName": "requestId",
          "documentation": "Unique identifier of the request to ensure the request is handled\nexactly once in case of retries.\n",
          "idempotencyToken": true
        },
        "Sources": {
          "shape": "__listOfInputSourceRequest",
          "locationName": "sources",
          "documentation": "The source URLs for a PULL-type input. Every PULL type input needs\nexactly two source URLs for redundancy.\nOnly specify sources for PULL type Inputs. Leave Destinations empty.\n"
        },
        "Type": {
          "shape": "InputType",
          "locationName": "type"
        }
      },
      "documentation": "The name of the input"
    },
    "CreateInputResponse": {
      "type": "structure",
      "members": {
        "Input": {
          "shape": "Input",
          "locationName": "input"
        }
      },
      "documentation": "Placeholder documentation for CreateInputResponse"
    },
    "CreateInputResultModel": {
      "type": "structure",
      "members": {
        "Input": {
          "shape": "Input",
          "locationName": "input"
        }
      },
      "documentation": "Placeholder documentation for CreateInputResultModel"
    },
    "CreateInputSecurityGroupRequest": {
      "type": "structure",
      "members": {
        "WhitelistRules": {
          "shape": "__listOfInputWhitelistRuleCidr",
          "locationName": "whitelistRules",
          "documentation": "List of IPv4 CIDR addresses to whitelist"
        }
      },
      "documentation": "The IPv4 CIDRs to whitelist for this Input Security Group"
    },
    "CreateInputSecurityGroupResponse": {
      "type": "structure",
      "members": {
        "SecurityGroup": {
          "shape": "InputSecurityGroup",
          "locationName": "securityGroup"
        }
      },
      "documentation": "Placeholder documentation for CreateInputSecurityGroupResponse"
    },
    "CreateInputSecurityGroupResultModel": {
      "type": "structure",
      "members": {
        "SecurityGroup": {
          "shape": "InputSecurityGroup",
          "locationName": "securityGroup"
        }
      },
      "documentation": "Placeholder documentation for CreateInputSecurityGroupResultModel"
    },
    "DeleteChannelRequest": {
      "type": "structure",
      "members": {
        "ChannelId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "channelId",
          "documentation": "Unique ID of the channel."
        }
      },
      "required": [
        "ChannelId"
      ],
      "documentation": "Placeholder documentation for DeleteChannelRequest"
    },
    "DeleteChannelResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The unique arn of the channel."
        },
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations",
          "documentation": "A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n"
        },
        "EgressEndpoints": {
          "shape": "__listOfChannelEgressEndpoint",
          "locationName": "egressEndpoints",
          "documentation": "The endpoints where outgoing connections initiate from"
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The unique id of the channel."
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments",
          "documentation": "List of input attachments for channel."
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level being written to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the channel. (user-mutable)"
        },
        "PipelinesRunningCount": {
          "shape": "__integer",
          "locationName": "pipelinesRunningCount",
          "documentation": "The number of currently healthy pipelines."
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "The Amazon Resource Name (ARN) of the role assumed when running the Channel."
        },
        "State": {
          "shape": "ChannelState",
          "locationName": "state"
        }
      },
      "documentation": "Placeholder documentation for DeleteChannelResponse"
    },
    "DeleteInputRequest": {
      "type": "structure",
      "members": {
        "InputId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "inputId",
          "documentation": "Unique ID of the input"
        }
      },
      "required": [
        "InputId"
      ],
      "documentation": "Placeholder documentation for DeleteInputRequest"
    },
    "DeleteInputResponse": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for DeleteInputResponse"
    },
    "DeleteInputSecurityGroupRequest": {
      "type": "structure",
      "members": {
        "InputSecurityGroupId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "inputSecurityGroupId",
          "documentation": "The Input Security Group to delete"
        }
      },
      "required": [
        "InputSecurityGroupId"
      ],
      "documentation": "Placeholder documentation for DeleteInputSecurityGroupRequest"
    },
    "DeleteInputSecurityGroupResponse": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for DeleteInputSecurityGroupResponse"
    },
    "DeleteReservationRequest": {
      "type": "structure",
      "members": {
        "ReservationId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "reservationId",
          "documentation": "Unique reservation ID, e.g. '1234567'"
        }
      },
      "required": [
        "ReservationId"
      ],
      "documentation": "Placeholder documentation for DeleteReservationRequest"
    },
    "DeleteReservationResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'"
        },
        "Count": {
          "shape": "__integer",
          "locationName": "count",
          "documentation": "Number of reserved resources"
        },
        "CurrencyCode": {
          "shape": "__string",
          "locationName": "currencyCode",
          "documentation": "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'"
        },
        "Duration": {
          "shape": "__integer",
          "locationName": "duration",
          "documentation": "Lease duration, e.g. '12'"
        },
        "DurationUnits": {
          "shape": "OfferingDurationUnits",
          "locationName": "durationUnits",
          "documentation": "Units for duration, e.g. 'MONTHS'"
        },
        "End": {
          "shape": "__string",
          "locationName": "end",
          "documentation": "Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'"
        },
        "FixedPrice": {
          "shape": "__double",
          "locationName": "fixedPrice",
          "documentation": "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering"
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "User specified reservation name"
        },
        "OfferingDescription": {
          "shape": "__string",
          "locationName": "offeringDescription",
          "documentation": "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'"
        },
        "OfferingId": {
          "shape": "__string",
          "locationName": "offeringId",
          "documentation": "Unique offering ID, e.g. '87654321'"
        },
        "OfferingType": {
          "shape": "OfferingType",
          "locationName": "offeringType",
          "documentation": "Offering type, e.g. 'NO_UPFRONT'"
        },
        "Region": {
          "shape": "__string",
          "locationName": "region",
          "documentation": "AWS region, e.g. 'us-west-2'"
        },
        "ReservationId": {
          "shape": "__string",
          "locationName": "reservationId",
          "documentation": "Unique reservation ID, e.g. '1234567'"
        },
        "ResourceSpecification": {
          "shape": "ReservationResourceSpecification",
          "locationName": "resourceSpecification",
          "documentation": "Resource configuration details"
        },
        "Start": {
          "shape": "__string",
          "locationName": "start",
          "documentation": "Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'"
        },
        "State": {
          "shape": "ReservationState",
          "locationName": "state",
          "documentation": "Current state of reservation, e.g. 'ACTIVE'"
        },
        "UsagePrice": {
          "shape": "__double",
          "locationName": "usagePrice",
          "documentation": "Recurring usage charge for each reserved resource, e.g. '157.0'"
        }
      },
      "documentation": "Placeholder documentation for DeleteReservationResponse"
    },
    "DescribeChannelRequest": {
      "type": "structure",
      "members": {
        "ChannelId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "channelId",
          "documentation": "channel ID"
        }
      },
      "required": [
        "ChannelId"
      ],
      "documentation": "Placeholder documentation for DescribeChannelRequest"
    },
    "DescribeChannelResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The unique arn of the channel."
        },
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations",
          "documentation": "A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n"
        },
        "EgressEndpoints": {
          "shape": "__listOfChannelEgressEndpoint",
          "locationName": "egressEndpoints",
          "documentation": "The endpoints where outgoing connections initiate from"
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The unique id of the channel."
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments",
          "documentation": "List of input attachments for channel."
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level being written to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the channel. (user-mutable)"
        },
        "PipelinesRunningCount": {
          "shape": "__integer",
          "locationName": "pipelinesRunningCount",
          "documentation": "The number of currently healthy pipelines."
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "The Amazon Resource Name (ARN) of the role assumed when running the Channel."
        },
        "State": {
          "shape": "ChannelState",
          "locationName": "state"
        }
      },
      "documentation": "Placeholder documentation for DescribeChannelResponse"
    },
    "DescribeInputRequest": {
      "type": "structure",
      "members": {
        "InputId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "inputId",
          "documentation": "Unique ID of the input"
        }
      },
      "required": [
        "InputId"
      ],
      "documentation": "Placeholder documentation for DescribeInputRequest"
    },
    "DescribeInputResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The Unique ARN of the input (generated, immutable)."
        },
        "AttachedChannels": {
          "shape": "__listOf__string",
          "locationName": "attachedChannels",
          "documentation": "A list of channel IDs that that input is attached to (currently an input can only be attached to one channel)."
        },
        "Destinations": {
          "shape": "__listOfInputDestination",
          "locationName": "destinations",
          "documentation": "A list of the destinations of the input (PUSH-type)."
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The generated ID of the input (unique for user account, immutable)."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The user-assigned name (This is a mutable value)."
        },
        "SecurityGroups": {
          "shape": "__listOf__string",
          "locationName": "securityGroups",
          "documentation": "A list of IDs for all the security groups attached to the input."
        },
        "Sources": {
          "shape": "__listOfInputSource",
          "locationName": "sources",
          "documentation": "A list of the sources of the input (PULL-type)."
        },
        "State": {
          "shape": "InputState",
          "locationName": "state"
        },
        "Type": {
          "shape": "InputType",
          "locationName": "type"
        }
      },
      "documentation": "Placeholder documentation for DescribeInputResponse"
    },
    "DescribeInputSecurityGroupRequest": {
      "type": "structure",
      "members": {
        "InputSecurityGroupId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "inputSecurityGroupId",
          "documentation": "The id of the Input Security Group to describe"
        }
      },
      "required": [
        "InputSecurityGroupId"
      ],
      "documentation": "Placeholder documentation for DescribeInputSecurityGroupRequest"
    },
    "DescribeInputSecurityGroupResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "Unique ARN of Input Security Group"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The Id of the Input Security Group"
        },
        "Inputs": {
          "shape": "__listOf__string",
          "locationName": "inputs",
          "documentation": "The list of inputs currently using this Input Security Group."
        },
        "State": {
          "shape": "InputSecurityGroupState",
          "locationName": "state",
          "documentation": "The current state of the Input Security Group."
        },
        "WhitelistRules": {
          "shape": "__listOfInputWhitelistRule",
          "locationName": "whitelistRules",
          "documentation": "Whitelist rules and their sync status"
        }
      },
      "documentation": "Placeholder documentation for DescribeInputSecurityGroupResponse"
    },
    "DescribeOfferingRequest": {
      "type": "structure",
      "members": {
        "OfferingId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "offeringId",
          "documentation": "Unique offering ID, e.g. '87654321'"
        }
      },
      "required": [
        "OfferingId"
      ],
      "documentation": "Placeholder documentation for DescribeOfferingRequest"
    },
    "DescribeOfferingResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'"
        },
        "CurrencyCode": {
          "shape": "__string",
          "locationName": "currencyCode",
          "documentation": "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'"
        },
        "Duration": {
          "shape": "__integer",
          "locationName": "duration",
          "documentation": "Lease duration, e.g. '12'"
        },
        "DurationUnits": {
          "shape": "OfferingDurationUnits",
          "locationName": "durationUnits",
          "documentation": "Units for duration, e.g. 'MONTHS'"
        },
        "FixedPrice": {
          "shape": "__double",
          "locationName": "fixedPrice",
          "documentation": "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering"
        },
        "OfferingDescription": {
          "shape": "__string",
          "locationName": "offeringDescription",
          "documentation": "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'"
        },
        "OfferingId": {
          "shape": "__string",
          "locationName": "offeringId",
          "documentation": "Unique offering ID, e.g. '87654321'"
        },
        "OfferingType": {
          "shape": "OfferingType",
          "locationName": "offeringType",
          "documentation": "Offering type, e.g. 'NO_UPFRONT'"
        },
        "Region": {
          "shape": "__string",
          "locationName": "region",
          "documentation": "AWS region, e.g. 'us-west-2'"
        },
        "ResourceSpecification": {
          "shape": "ReservationResourceSpecification",
          "locationName": "resourceSpecification",
          "documentation": "Resource configuration details"
        },
        "UsagePrice": {
          "shape": "__double",
          "locationName": "usagePrice",
          "documentation": "Recurring usage charge for each reserved resource, e.g. '157.0'"
        }
      },
      "documentation": "Placeholder documentation for DescribeOfferingResponse"
    },
    "DescribeReservationRequest": {
      "type": "structure",
      "members": {
        "ReservationId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "reservationId",
          "documentation": "Unique reservation ID, e.g. '1234567'"
        }
      },
      "required": [
        "ReservationId"
      ],
      "documentation": "Placeholder documentation for DescribeReservationRequest"
    },
    "DescribeReservationResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'"
        },
        "Count": {
          "shape": "__integer",
          "locationName": "count",
          "documentation": "Number of reserved resources"
        },
        "CurrencyCode": {
          "shape": "__string",
          "locationName": "currencyCode",
          "documentation": "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'"
        },
        "Duration": {
          "shape": "__integer",
          "locationName": "duration",
          "documentation": "Lease duration, e.g. '12'"
        },
        "DurationUnits": {
          "shape": "OfferingDurationUnits",
          "locationName": "durationUnits",
          "documentation": "Units for duration, e.g. 'MONTHS'"
        },
        "End": {
          "shape": "__string",
          "locationName": "end",
          "documentation": "Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'"
        },
        "FixedPrice": {
          "shape": "__double",
          "locationName": "fixedPrice",
          "documentation": "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering"
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "User specified reservation name"
        },
        "OfferingDescription": {
          "shape": "__string",
          "locationName": "offeringDescription",
          "documentation": "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'"
        },
        "OfferingId": {
          "shape": "__string",
          "locationName": "offeringId",
          "documentation": "Unique offering ID, e.g. '87654321'"
        },
        "OfferingType": {
          "shape": "OfferingType",
          "locationName": "offeringType",
          "documentation": "Offering type, e.g. 'NO_UPFRONT'"
        },
        "Region": {
          "shape": "__string",
          "locationName": "region",
          "documentation": "AWS region, e.g. 'us-west-2'"
        },
        "ReservationId": {
          "shape": "__string",
          "locationName": "reservationId",
          "documentation": "Unique reservation ID, e.g. '1234567'"
        },
        "ResourceSpecification": {
          "shape": "ReservationResourceSpecification",
          "locationName": "resourceSpecification",
          "documentation": "Resource configuration details"
        },
        "Start": {
          "shape": "__string",
          "locationName": "start",
          "documentation": "Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'"
        },
        "State": {
          "shape": "ReservationState",
          "locationName": "state",
          "documentation": "Current state of reservation, e.g. 'ACTIVE'"
        },
        "UsagePrice": {
          "shape": "__double",
          "locationName": "usagePrice",
          "documentation": "Recurring usage charge for each reserved resource, e.g. '157.0'"
        }
      },
      "documentation": "Placeholder documentation for DescribeReservationResponse"
    },
    "DescribeScheduleRequest": {
      "type": "structure",
      "members": {
        "ChannelId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "channelId",
          "documentation": "Id of the channel whose schedule is being updated."
        },
        "MaxResults": {
          "shape": "MaxResults",
          "location": "querystring",
          "locationName": "maxResults"
        },
        "NextToken": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "nextToken"
        }
      },
      "required": [
        "ChannelId"
      ],
      "documentation": "Request for a describe schedule call."
    },
    "DescribeScheduleResponse": {
      "type": "structure",
      "members": {
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "The next token; for use in pagination."
        },
        "ScheduleActions": {
          "shape": "__listOfScheduleAction",
          "locationName": "scheduleActions",
          "documentation": "The list of schedule actions."
        }
      },
      "documentation": "Response for a describe schedule call."
    },
    "DvbNitSettings": {
      "type": "structure",
      "members": {
        "NetworkId": {
          "shape": "__integerMin0Max65536",
          "locationName": "networkId",
          "documentation": "The numeric value placed in the Network Information Table (NIT)."
        },
        "NetworkName": {
          "shape": "__stringMin1Max256",
          "locationName": "networkName",
          "documentation": "The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters."
        },
        "RepInterval": {
          "shape": "__integerMin25Max10000",
          "locationName": "repInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        }
      },
      "documentation": "DVB Network Information Table (NIT)",
      "required": [
        "NetworkName",
        "NetworkId"
      ]
    },
    "DvbSdtOutputSdt": {
      "type": "string",
      "enum": [
        "SDT_FOLLOW",
        "SDT_FOLLOW_IF_PRESENT",
        "SDT_MANUAL",
        "SDT_NONE"
      ],
      "documentation": "Placeholder documentation for DvbSdtOutputSdt"
    },
    "DvbSdtSettings": {
      "type": "structure",
      "members": {
        "OutputSdt": {
          "shape": "DvbSdtOutputSdt",
          "locationName": "outputSdt",
          "documentation": "Selects method of inserting SDT information into output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. The sdtManual setting means user will enter the SDT information. The sdtNone setting means output stream will not contain SDT information."
        },
        "RepInterval": {
          "shape": "__integerMin25Max2000",
          "locationName": "repInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        },
        "ServiceName": {
          "shape": "__stringMin1Max256",
          "locationName": "serviceName",
          "documentation": "The service name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters."
        },
        "ServiceProviderName": {
          "shape": "__stringMin1Max256",
          "locationName": "serviceProviderName",
          "documentation": "The service provider name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters."
        }
      },
      "documentation": "DVB Service Description Table (SDT)"
    },
    "DvbSubDestinationAlignment": {
      "type": "string",
      "enum": [
        "CENTERED",
        "LEFT",
        "SMART"
      ],
      "documentation": "Placeholder documentation for DvbSubDestinationAlignment"
    },
    "DvbSubDestinationBackgroundColor": {
      "type": "string",
      "enum": [
        "BLACK",
        "NONE",
        "WHITE"
      ],
      "documentation": "Placeholder documentation for DvbSubDestinationBackgroundColor"
    },
    "DvbSubDestinationFontColor": {
      "type": "string",
      "enum": [
        "BLACK",
        "BLUE",
        "GREEN",
        "RED",
        "WHITE",
        "YELLOW"
      ],
      "documentation": "Placeholder documentation for DvbSubDestinationFontColor"
    },
    "DvbSubDestinationOutlineColor": {
      "type": "string",
      "enum": [
        "BLACK",
        "BLUE",
        "GREEN",
        "RED",
        "WHITE",
        "YELLOW"
      ],
      "documentation": "Placeholder documentation for DvbSubDestinationOutlineColor"
    },
    "DvbSubDestinationSettings": {
      "type": "structure",
      "members": {
        "Alignment": {
          "shape": "DvbSubDestinationAlignment",
          "locationName": "alignment",
          "documentation": "If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting \"smart\" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  This option is not valid for source captions that are STL or 608/embedded.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match."
        },
        "BackgroundColor": {
          "shape": "DvbSubDestinationBackgroundColor",
          "locationName": "backgroundColor",
          "documentation": "Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match."
        },
        "BackgroundOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "backgroundOpacity",
          "documentation": "Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match."
        },
        "Font": {
          "shape": "InputLocation",
          "locationName": "font",
          "documentation": "External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match."
        },
        "FontColor": {
          "shape": "DvbSubDestinationFontColor",
          "locationName": "fontColor",
          "documentation": "Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match."
        },
        "FontOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "fontOpacity",
          "documentation": "Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match."
        },
        "FontResolution": {
          "shape": "__integerMin96Max600",
          "locationName": "fontResolution",
          "documentation": "Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match."
        },
        "FontSize": {
          "shape": "__string",
          "locationName": "fontSize",
          "documentation": "When set to auto fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match."
        },
        "OutlineColor": {
          "shape": "DvbSubDestinationOutlineColor",
          "locationName": "outlineColor",
          "documentation": "Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        },
        "OutlineSize": {
          "shape": "__integerMin0Max10",
          "locationName": "outlineSize",
          "documentation": "Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match."
        },
        "ShadowColor": {
          "shape": "DvbSubDestinationShadowColor",
          "locationName": "shadowColor",
          "documentation": "Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match."
        },
        "ShadowOpacity": {
          "shape": "__integerMin0Max255",
          "locationName": "shadowOpacity",
          "documentation": "Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match."
        },
        "ShadowXOffset": {
          "shape": "__integer",
          "locationName": "shadowXOffset",
          "documentation": "Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match."
        },
        "ShadowYOffset": {
          "shape": "__integer",
          "locationName": "shadowYOffset",
          "documentation": "Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match."
        },
        "TeletextGridControl": {
          "shape": "DvbSubDestinationTeletextGridControl",
          "locationName": "teletextGridControl",
          "documentation": "Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs."
        },
        "XPosition": {
          "shape": "__integerMin0",
          "locationName": "xPosition",
          "documentation": "Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match."
        },
        "YPosition": {
          "shape": "__integerMin0",
          "locationName": "yPosition",
          "documentation": "Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match."
        }
      },
      "documentation": "Placeholder documentation for DvbSubDestinationSettings"
    },
    "DvbSubDestinationShadowColor": {
      "type": "string",
      "enum": [
        "BLACK",
        "NONE",
        "WHITE"
      ],
      "documentation": "Placeholder documentation for DvbSubDestinationShadowColor"
    },
    "DvbSubDestinationTeletextGridControl": {
      "type": "string",
      "enum": [
        "FIXED",
        "SCALED"
      ],
      "documentation": "Placeholder documentation for DvbSubDestinationTeletextGridControl"
    },
    "DvbSubSourceSettings": {
      "type": "structure",
      "members": {
        "Pid": {
          "shape": "__integerMin1",
          "locationName": "pid",
          "documentation": "When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors."
        }
      },
      "documentation": "Placeholder documentation for DvbSubSourceSettings"
    },
    "DvbTdtSettings": {
      "type": "structure",
      "members": {
        "RepInterval": {
          "shape": "__integerMin1000Max30000",
          "locationName": "repInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream."
        }
      },
      "documentation": "DVB Time and Date Table (SDT)"
    },
    "Eac3AttenuationControl": {
      "type": "string",
      "enum": [
        "ATTENUATE_3_DB",
        "NONE"
      ],
      "documentation": "Placeholder documentation for Eac3AttenuationControl"
    },
    "Eac3BitstreamMode": {
      "type": "string",
      "enum": [
        "COMMENTARY",
        "COMPLETE_MAIN",
        "EMERGENCY",
        "HEARING_IMPAIRED",
        "VISUALLY_IMPAIRED"
      ],
      "documentation": "Placeholder documentation for Eac3BitstreamMode"
    },
    "Eac3CodingMode": {
      "type": "string",
      "enum": [
        "CODING_MODE_1_0",
        "CODING_MODE_2_0",
        "CODING_MODE_3_2"
      ],
      "documentation": "Placeholder documentation for Eac3CodingMode"
    },
    "Eac3DcFilter": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for Eac3DcFilter"
    },
    "Eac3DrcLine": {
      "type": "string",
      "enum": [
        "FILM_LIGHT",
        "FILM_STANDARD",
        "MUSIC_LIGHT",
        "MUSIC_STANDARD",
        "NONE",
        "SPEECH"
      ],
      "documentation": "Placeholder documentation for Eac3DrcLine"
    },
    "Eac3DrcRf": {
      "type": "string",
      "enum": [
        "FILM_LIGHT",
        "FILM_STANDARD",
        "MUSIC_LIGHT",
        "MUSIC_STANDARD",
        "NONE",
        "SPEECH"
      ],
      "documentation": "Placeholder documentation for Eac3DrcRf"
    },
    "Eac3LfeControl": {
      "type": "string",
      "enum": [
        "LFE",
        "NO_LFE"
      ],
      "documentation": "Placeholder documentation for Eac3LfeControl"
    },
    "Eac3LfeFilter": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for Eac3LfeFilter"
    },
    "Eac3MetadataControl": {
      "type": "string",
      "enum": [
        "FOLLOW_INPUT",
        "USE_CONFIGURED"
      ],
      "documentation": "Placeholder documentation for Eac3MetadataControl"
    },
    "Eac3PassthroughControl": {
      "type": "string",
      "enum": [
        "NO_PASSTHROUGH",
        "WHEN_POSSIBLE"
      ],
      "documentation": "Placeholder documentation for Eac3PassthroughControl"
    },
    "Eac3PhaseControl": {
      "type": "string",
      "enum": [
        "NO_SHIFT",
        "SHIFT_90_DEGREES"
      ],
      "documentation": "Placeholder documentation for Eac3PhaseControl"
    },
    "Eac3Settings": {
      "type": "structure",
      "members": {
        "AttenuationControl": {
          "shape": "Eac3AttenuationControl",
          "locationName": "attenuationControl",
          "documentation": "When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode."
        },
        "Bitrate": {
          "shape": "__double",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Valid bitrates depend on the coding mode."
        },
        "BitstreamMode": {
          "shape": "Eac3BitstreamMode",
          "locationName": "bitstreamMode",
          "documentation": "Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values."
        },
        "CodingMode": {
          "shape": "Eac3CodingMode",
          "locationName": "codingMode",
          "documentation": "Dolby Digital Plus coding mode. Determines number of channels."
        },
        "DcFilter": {
          "shape": "Eac3DcFilter",
          "locationName": "dcFilter",
          "documentation": "When set to enabled, activates a DC highpass filter for all input channels."
        },
        "Dialnorm": {
          "shape": "__integerMin1Max31",
          "locationName": "dialnorm",
          "documentation": "Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through."
        },
        "DrcLine": {
          "shape": "Eac3DrcLine",
          "locationName": "drcLine",
          "documentation": "Sets the Dolby dynamic range compression profile."
        },
        "DrcRf": {
          "shape": "Eac3DrcRf",
          "locationName": "drcRf",
          "documentation": "Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels."
        },
        "LfeControl": {
          "shape": "Eac3LfeControl",
          "locationName": "lfeControl",
          "documentation": "When encoding 3/2 audio, setting to lfe enables the LFE channel"
        },
        "LfeFilter": {
          "shape": "Eac3LfeFilter",
          "locationName": "lfeFilter",
          "documentation": "When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode."
        },
        "LoRoCenterMixLevel": {
          "shape": "__double",
          "locationName": "loRoCenterMixLevel",
          "documentation": "Left only/Right only center mix level. Only used for 3/2 coding mode."
        },
        "LoRoSurroundMixLevel": {
          "shape": "__double",
          "locationName": "loRoSurroundMixLevel",
          "documentation": "Left only/Right only surround mix level. Only used for 3/2 coding mode."
        },
        "LtRtCenterMixLevel": {
          "shape": "__double",
          "locationName": "ltRtCenterMixLevel",
          "documentation": "Left total/Right total center mix level. Only used for 3/2 coding mode."
        },
        "LtRtSurroundMixLevel": {
          "shape": "__double",
          "locationName": "ltRtSurroundMixLevel",
          "documentation": "Left total/Right total surround mix level. Only used for 3/2 coding mode."
        },
        "MetadataControl": {
          "shape": "Eac3MetadataControl",
          "locationName": "metadataControl",
          "documentation": "When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used."
        },
        "PassthroughControl": {
          "shape": "Eac3PassthroughControl",
          "locationName": "passthroughControl",
          "documentation": "When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding."
        },
        "PhaseControl": {
          "shape": "Eac3PhaseControl",
          "locationName": "phaseControl",
          "documentation": "When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode."
        },
        "StereoDownmix": {
          "shape": "Eac3StereoDownmix",
          "locationName": "stereoDownmix",
          "documentation": "Stereo downmix preference. Only used for 3/2 coding mode."
        },
        "SurroundExMode": {
          "shape": "Eac3SurroundExMode",
          "locationName": "surroundExMode",
          "documentation": "When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels."
        },
        "SurroundMode": {
          "shape": "Eac3SurroundMode",
          "locationName": "surroundMode",
          "documentation": "When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels."
        }
      },
      "documentation": "Placeholder documentation for Eac3Settings"
    },
    "Eac3StereoDownmix": {
      "type": "string",
      "enum": [
        "DPL2",
        "LO_RO",
        "LT_RT",
        "NOT_INDICATED"
      ],
      "documentation": "Placeholder documentation for Eac3StereoDownmix"
    },
    "Eac3SurroundExMode": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED",
        "NOT_INDICATED"
      ],
      "documentation": "Placeholder documentation for Eac3SurroundExMode"
    },
    "Eac3SurroundMode": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED",
        "NOT_INDICATED"
      ],
      "documentation": "Placeholder documentation for Eac3SurroundMode"
    },
    "EmbeddedConvert608To708": {
      "type": "string",
      "enum": [
        "DISABLED",
        "UPCONVERT"
      ],
      "documentation": "Placeholder documentation for EmbeddedConvert608To708"
    },
    "EmbeddedDestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for EmbeddedDestinationSettings"
    },
    "EmbeddedPlusScte20DestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for EmbeddedPlusScte20DestinationSettings"
    },
    "EmbeddedScte20Detection": {
      "type": "string",
      "enum": [
        "AUTO",
        "OFF"
      ],
      "documentation": "Placeholder documentation for EmbeddedScte20Detection"
    },
    "EmbeddedSourceSettings": {
      "type": "structure",
      "members": {
        "Convert608To708": {
          "shape": "EmbeddedConvert608To708",
          "locationName": "convert608To708",
          "documentation": "If upconvert, 608 data is both passed through via the \"608 compatibility bytes\" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded."
        },
        "Scte20Detection": {
          "shape": "EmbeddedScte20Detection",
          "locationName": "scte20Detection",
          "documentation": "Set to \"auto\" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions."
        },
        "Source608ChannelNumber": {
          "shape": "__integerMin1Max4",
          "locationName": "source608ChannelNumber",
          "documentation": "Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough."
        },
        "Source608TrackNumber": {
          "shape": "__integerMin1Max5",
          "locationName": "source608TrackNumber",
          "documentation": "This field is unused and deprecated."
        }
      },
      "documentation": "Placeholder documentation for EmbeddedSourceSettings"
    },
    "Empty": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for Empty"
    },
    "EncoderSettings": {
      "type": "structure",
      "members": {
        "AudioDescriptions": {
          "shape": "__listOfAudioDescription",
          "locationName": "audioDescriptions"
        },
        "AvailBlanking": {
          "shape": "AvailBlanking",
          "locationName": "availBlanking",
          "documentation": "Settings for ad avail blanking."
        },
        "AvailConfiguration": {
          "shape": "AvailConfiguration",
          "locationName": "availConfiguration",
          "documentation": "Event-wide configuration settings for ad avail insertion."
        },
        "BlackoutSlate": {
          "shape": "BlackoutSlate",
          "locationName": "blackoutSlate",
          "documentation": "Settings for blackout slate."
        },
        "CaptionDescriptions": {
          "shape": "__listOfCaptionDescription",
          "locationName": "captionDescriptions",
          "documentation": "Settings for caption decriptions"
        },
        "GlobalConfiguration": {
          "shape": "GlobalConfiguration",
          "locationName": "globalConfiguration",
          "documentation": "Configuration settings that apply to the event as a whole."
        },
        "OutputGroups": {
          "shape": "__listOfOutputGroup",
          "locationName": "outputGroups"
        },
        "TimecodeConfig": {
          "shape": "TimecodeConfig",
          "locationName": "timecodeConfig",
          "documentation": "Contains settings used to acquire and adjust timecode information from inputs."
        },
        "VideoDescriptions": {
          "shape": "__listOfVideoDescription",
          "locationName": "videoDescriptions"
        }
      },
      "required": [
        "VideoDescriptions",
        "AudioDescriptions",
        "OutputGroups",
        "TimecodeConfig"
      ],
      "documentation": "Placeholder documentation for EncoderSettings"
    },
    "FecOutputIncludeFec": {
      "type": "string",
      "enum": [
        "COLUMN",
        "COLUMN_AND_ROW"
      ],
      "documentation": "Placeholder documentation for FecOutputIncludeFec"
    },
    "FecOutputSettings": {
      "type": "structure",
      "members": {
        "ColumnDepth": {
          "shape": "__integerMin4Max20",
          "locationName": "columnDepth",
          "documentation": "Parameter D from SMPTE 2022-1. The height of the FEC protection matrix.  The number of transport stream packets per column error correction packet. Must be between 4 and 20, inclusive."
        },
        "IncludeFec": {
          "shape": "FecOutputIncludeFec",
          "locationName": "includeFec",
          "documentation": "Enables column only or column and row based FEC"
        },
        "RowLength": {
          "shape": "__integerMin1Max20",
          "locationName": "rowLength",
          "documentation": "Parameter L from SMPTE 2022-1. The width of the FEC protection matrix.  Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness.  If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive."
        }
      },
      "documentation": "Placeholder documentation for FecOutputSettings"
    },
    "FixedAfd": {
      "type": "string",
      "enum": [
        "AFD_0000",
        "AFD_0010",
        "AFD_0011",
        "AFD_0100",
        "AFD_1000",
        "AFD_1001",
        "AFD_1010",
        "AFD_1011",
        "AFD_1101",
        "AFD_1110",
        "AFD_1111"
      ],
      "documentation": "Placeholder documentation for FixedAfd"
    },
    "FixedModeScheduleActionStartSettings": {
      "type": "structure",
      "members": {
        "Time": {
          "shape": "__string",
          "locationName": "time",
          "documentation": "Fixed timestamp action start. Conforms to ISO-8601."
        }
      },
      "documentation": "Fixed mode schedule action start settings"
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
      "documentation": "Placeholder documentation for ForbiddenException"
    },
    "GatewayTimeoutException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 504
      },
      "documentation": "Placeholder documentation for GatewayTimeoutException"
    },
    "GlobalConfiguration": {
      "type": "structure",
      "members": {
        "InitialAudioGain": {
          "shape": "__integerMinNegative60Max60",
          "locationName": "initialAudioGain",
          "documentation": "Value to set the initial audio gain for the Live Event."
        },
        "InputEndAction": {
          "shape": "GlobalConfigurationInputEndAction",
          "locationName": "inputEndAction",
          "documentation": "Indicates the action to take when an input completes (e.g. end-of-file.) Options include immediately switching to the next sequential input (via \"switchInput\"), switching to the next input and looping back to the first input when last input ends (via \"switchAndLoopInputs\") or not switching inputs and instead transcoding black / color / slate images per the \"Input Loss Behavior\" configuration until an activateInput REST command is received (via \"none\")."
        },
        "InputLossBehavior": {
          "shape": "InputLossBehavior",
          "locationName": "inputLossBehavior",
          "documentation": "Settings for system actions when input is lost."
        },
        "OutputTimingSource": {
          "shape": "GlobalConfigurationOutputTimingSource",
          "locationName": "outputTimingSource",
          "documentation": "Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream."
        },
        "SupportLowFramerateInputs": {
          "shape": "GlobalConfigurationLowFramerateInputs",
          "locationName": "supportLowFramerateInputs",
          "documentation": "Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second."
        }
      },
      "documentation": "Placeholder documentation for GlobalConfiguration"
    },
    "GlobalConfigurationInputEndAction": {
      "type": "string",
      "enum": [
        "NONE",
        "SWITCH_AND_LOOP_INPUTS"
      ],
      "documentation": "Placeholder documentation for GlobalConfigurationInputEndAction"
    },
    "GlobalConfigurationLowFramerateInputs": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for GlobalConfigurationLowFramerateInputs"
    },
    "GlobalConfigurationOutputTimingSource": {
      "type": "string",
      "enum": [
        "INPUT_CLOCK",
        "SYSTEM_CLOCK"
      ],
      "documentation": "Placeholder documentation for GlobalConfigurationOutputTimingSource"
    },
    "H264AdaptiveQuantization": {
      "type": "string",
      "enum": [
        "HIGH",
        "HIGHER",
        "LOW",
        "MAX",
        "MEDIUM",
        "OFF"
      ],
      "documentation": "Placeholder documentation for H264AdaptiveQuantization"
    },
    "H264ColorMetadata": {
      "type": "string",
      "enum": [
        "IGNORE",
        "INSERT"
      ],
      "documentation": "Placeholder documentation for H264ColorMetadata"
    },
    "H264EntropyEncoding": {
      "type": "string",
      "enum": [
        "CABAC",
        "CAVLC"
      ],
      "documentation": "Placeholder documentation for H264EntropyEncoding"
    },
    "H264FlickerAq": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for H264FlickerAq"
    },
    "H264FramerateControl": {
      "type": "string",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ],
      "documentation": "Placeholder documentation for H264FramerateControl"
    },
    "H264GopBReference": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for H264GopBReference"
    },
    "H264GopSizeUnits": {
      "type": "string",
      "enum": [
        "FRAMES",
        "SECONDS"
      ],
      "documentation": "Placeholder documentation for H264GopSizeUnits"
    },
    "H264Level": {
      "type": "string",
      "enum": [
        "H264_LEVEL_1",
        "H264_LEVEL_1_1",
        "H264_LEVEL_1_2",
        "H264_LEVEL_1_3",
        "H264_LEVEL_2",
        "H264_LEVEL_2_1",
        "H264_LEVEL_2_2",
        "H264_LEVEL_3",
        "H264_LEVEL_3_1",
        "H264_LEVEL_3_2",
        "H264_LEVEL_4",
        "H264_LEVEL_4_1",
        "H264_LEVEL_4_2",
        "H264_LEVEL_5",
        "H264_LEVEL_5_1",
        "H264_LEVEL_5_2",
        "H264_LEVEL_AUTO"
      ],
      "documentation": "Placeholder documentation for H264Level"
    },
    "H264LookAheadRateControl": {
      "type": "string",
      "enum": [
        "HIGH",
        "LOW",
        "MEDIUM"
      ],
      "documentation": "Placeholder documentation for H264LookAheadRateControl"
    },
    "H264ParControl": {
      "type": "string",
      "enum": [
        "INITIALIZE_FROM_SOURCE",
        "SPECIFIED"
      ],
      "documentation": "Placeholder documentation for H264ParControl"
    },
    "H264Profile": {
      "type": "string",
      "enum": [
        "BASELINE",
        "HIGH",
        "HIGH_10BIT",
        "HIGH_422",
        "HIGH_422_10BIT",
        "MAIN"
      ],
      "documentation": "Placeholder documentation for H264Profile"
    },
    "H264RateControlMode": {
      "type": "string",
      "enum": [
        "CBR",
        "VBR"
      ],
      "documentation": "Placeholder documentation for H264RateControlMode"
    },
    "H264ScanType": {
      "type": "string",
      "enum": [
        "INTERLACED",
        "PROGRESSIVE"
      ],
      "documentation": "Placeholder documentation for H264ScanType"
    },
    "H264SceneChangeDetect": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for H264SceneChangeDetect"
    },
    "H264Settings": {
      "type": "structure",
      "members": {
        "AdaptiveQuantization": {
          "shape": "H264AdaptiveQuantization",
          "locationName": "adaptiveQuantization",
          "documentation": "Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality."
        },
        "AfdSignaling": {
          "shape": "AfdSignaling",
          "locationName": "afdSignaling",
          "documentation": "Indicates that AFD values will be written into the output stream.  If afdSignaling is \"auto\", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to \"fixed\", the AFD value will be the value configured in the fixedAfd parameter."
        },
        "Bitrate": {
          "shape": "__integerMin1000",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second. Required for VBR, CBR, and ABR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000."
        },
        "BufFillPct": {
          "shape": "__integerMin0Max100",
          "locationName": "bufFillPct",
          "documentation": "Percentage of the buffer that should initially be filled (HRD buffer model)."
        },
        "BufSize": {
          "shape": "__integerMin0",
          "locationName": "bufSize",
          "documentation": "Size of buffer (HRD buffer model) in bits/second."
        },
        "ColorMetadata": {
          "shape": "H264ColorMetadata",
          "locationName": "colorMetadata",
          "documentation": "Includes colorspace metadata in the output."
        },
        "EntropyEncoding": {
          "shape": "H264EntropyEncoding",
          "locationName": "entropyEncoding",
          "documentation": "Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc."
        },
        "FixedAfd": {
          "shape": "FixedAfd",
          "locationName": "fixedAfd",
          "documentation": "Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'."
        },
        "FlickerAq": {
          "shape": "H264FlickerAq",
          "locationName": "flickerAq",
          "documentation": "If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames."
        },
        "FramerateControl": {
          "shape": "H264FramerateControl",
          "locationName": "framerateControl",
          "documentation": "This field indicates how the output video frame rate is specified.  If \"specified\" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if \"initializeFromSource\" is selected then the output video frame rate will be set equal to the input video frame rate of the first input."
        },
        "FramerateDenominator": {
          "shape": "__integer",
          "locationName": "framerateDenominator",
          "documentation": "Framerate denominator."
        },
        "FramerateNumerator": {
          "shape": "__integer",
          "locationName": "framerateNumerator",
          "documentation": "Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps."
        },
        "GopBReference": {
          "shape": "H264GopBReference",
          "locationName": "gopBReference",
          "documentation": "Documentation update needed"
        },
        "GopClosedCadence": {
          "shape": "__integerMin0",
          "locationName": "gopClosedCadence",
          "documentation": "Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting."
        },
        "GopNumBFrames": {
          "shape": "__integerMin0Max7",
          "locationName": "gopNumBFrames",
          "documentation": "Number of B-frames between reference frames."
        },
        "GopSize": {
          "shape": "__doubleMin1",
          "locationName": "gopSize",
          "documentation": "GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits. Must be greater than zero."
        },
        "GopSizeUnits": {
          "shape": "H264GopSizeUnits",
          "locationName": "gopSizeUnits",
          "documentation": "Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time."
        },
        "Level": {
          "shape": "H264Level",
          "locationName": "level",
          "documentation": "H.264 Level."
        },
        "LookAheadRateControl": {
          "shape": "H264LookAheadRateControl",
          "locationName": "lookAheadRateControl",
          "documentation": "Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content."
        },
        "MaxBitrate": {
          "shape": "__integerMin1000",
          "locationName": "maxBitrate",
          "documentation": "Maximum bitrate in bits/second (for VBR mode only)."
        },
        "MinIInterval": {
          "shape": "__integerMin0Max30",
          "locationName": "minIInterval",
          "documentation": "Only meaningful if sceneChangeDetect is set to enabled.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1"
        },
        "NumRefFrames": {
          "shape": "__integerMin1Max6",
          "locationName": "numRefFrames",
          "documentation": "Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding."
        },
        "ParControl": {
          "shape": "H264ParControl",
          "locationName": "parControl",
          "documentation": "This field indicates how the output pixel aspect ratio is specified.  If \"specified\" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if \"initializeFromSource\" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input."
        },
        "ParDenominator": {
          "shape": "__integerMin1",
          "locationName": "parDenominator",
          "documentation": "Pixel Aspect Ratio denominator."
        },
        "ParNumerator": {
          "shape": "__integer",
          "locationName": "parNumerator",
          "documentation": "Pixel Aspect Ratio numerator."
        },
        "Profile": {
          "shape": "H264Profile",
          "locationName": "profile",
          "documentation": "H.264 Profile."
        },
        "RateControlMode": {
          "shape": "H264RateControlMode",
          "locationName": "rateControlMode",
          "documentation": "Rate control mode."
        },
        "ScanType": {
          "shape": "H264ScanType",
          "locationName": "scanType",
          "documentation": "Sets the scan type of the output to progressive or top-field-first interlaced."
        },
        "SceneChangeDetect": {
          "shape": "H264SceneChangeDetect",
          "locationName": "sceneChangeDetect",
          "documentation": "Scene change detection.  Inserts I-frames on scene changes when enabled."
        },
        "Slices": {
          "shape": "__integerMin1Max32",
          "locationName": "slices",
          "documentation": "Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.\nThis field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution."
        },
        "Softness": {
          "shape": "__integerMin0Max128",
          "locationName": "softness",
          "documentation": "Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image."
        },
        "SpatialAq": {
          "shape": "H264SpatialAq",
          "locationName": "spatialAq",
          "documentation": "If set to enabled, adjust quantization within each frame based on spatial variation of content complexity."
        },
        "Syntax": {
          "shape": "H264Syntax",
          "locationName": "syntax",
          "documentation": "Produces a bitstream compliant with SMPTE RP-2027."
        },
        "TemporalAq": {
          "shape": "H264TemporalAq",
          "locationName": "temporalAq",
          "documentation": "If set to enabled, adjust quantization within each frame based on temporal variation of content complexity."
        },
        "TimecodeInsertion": {
          "shape": "H264TimecodeInsertionBehavior",
          "locationName": "timecodeInsertion",
          "documentation": "Determines how timecodes should be inserted into the video elementary stream.\n- 'disabled': Do not include timecodes\n- 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config"
        }
      },
      "documentation": "Placeholder documentation for H264Settings"
    },
    "H264SpatialAq": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for H264SpatialAq"
    },
    "H264Syntax": {
      "type": "string",
      "enum": [
        "DEFAULT",
        "RP2027"
      ],
      "documentation": "Placeholder documentation for H264Syntax"
    },
    "H264TemporalAq": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for H264TemporalAq"
    },
    "H264TimecodeInsertionBehavior": {
      "type": "string",
      "enum": [
        "DISABLED",
        "PIC_TIMING_SEI"
      ],
      "documentation": "Placeholder documentation for H264TimecodeInsertionBehavior"
    },
    "HlsAdMarkers": {
      "type": "string",
      "enum": [
        "ADOBE",
        "ELEMENTAL",
        "ELEMENTAL_SCTE35"
      ],
      "documentation": "Placeholder documentation for HlsAdMarkers"
    },
    "HlsAkamaiHttpTransferMode": {
      "type": "string",
      "enum": [
        "CHUNKED",
        "NON_CHUNKED"
      ],
      "documentation": "Placeholder documentation for HlsAkamaiHttpTransferMode"
    },
    "HlsAkamaiSettings": {
      "type": "structure",
      "members": {
        "ConnectionRetryInterval": {
          "shape": "__integerMin0",
          "locationName": "connectionRetryInterval",
          "documentation": "Number of seconds to wait before retrying connection to the CDN if the connection is lost."
        },
        "FilecacheDuration": {
          "shape": "__integerMin0Max600",
          "locationName": "filecacheDuration",
          "documentation": "Size in seconds of file cache for streaming outputs."
        },
        "HttpTransferMode": {
          "shape": "HlsAkamaiHttpTransferMode",
          "locationName": "httpTransferMode",
          "documentation": "Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature."
        },
        "NumRetries": {
          "shape": "__integerMin0",
          "locationName": "numRetries",
          "documentation": "Number of retry attempts that will be made before the Live Event is put into an error state."
        },
        "RestartDelay": {
          "shape": "__integerMin0Max15",
          "locationName": "restartDelay",
          "documentation": "If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart."
        },
        "Salt": {
          "shape": "__string",
          "locationName": "salt",
          "documentation": "Salt for authenticated Akamai."
        },
        "Token": {
          "shape": "__string",
          "locationName": "token",
          "documentation": "Token parameter for authenticated akamai. If not specified, _gda_ is used."
        }
      },
      "documentation": "Placeholder documentation for HlsAkamaiSettings"
    },
    "HlsBasicPutSettings": {
      "type": "structure",
      "members": {
        "ConnectionRetryInterval": {
          "shape": "__integerMin0",
          "locationName": "connectionRetryInterval",
          "documentation": "Number of seconds to wait before retrying connection to the CDN if the connection is lost."
        },
        "FilecacheDuration": {
          "shape": "__integerMin0Max600",
          "locationName": "filecacheDuration",
          "documentation": "Size in seconds of file cache for streaming outputs."
        },
        "NumRetries": {
          "shape": "__integerMin0",
          "locationName": "numRetries",
          "documentation": "Number of retry attempts that will be made before the Live Event is put into an error state."
        },
        "RestartDelay": {
          "shape": "__integerMin0Max15",
          "locationName": "restartDelay",
          "documentation": "If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart."
        }
      },
      "documentation": "Placeholder documentation for HlsBasicPutSettings"
    },
    "HlsCaptionLanguageSetting": {
      "type": "string",
      "enum": [
        "INSERT",
        "NONE",
        "OMIT"
      ],
      "documentation": "Placeholder documentation for HlsCaptionLanguageSetting"
    },
    "HlsCdnSettings": {
      "type": "structure",
      "members": {
        "HlsAkamaiSettings": {
          "shape": "HlsAkamaiSettings",
          "locationName": "hlsAkamaiSettings"
        },
        "HlsBasicPutSettings": {
          "shape": "HlsBasicPutSettings",
          "locationName": "hlsBasicPutSettings"
        },
        "HlsMediaStoreSettings": {
          "shape": "HlsMediaStoreSettings",
          "locationName": "hlsMediaStoreSettings"
        },
        "HlsWebdavSettings": {
          "shape": "HlsWebdavSettings",
          "locationName": "hlsWebdavSettings"
        }
      },
      "documentation": "Placeholder documentation for HlsCdnSettings"
    },
    "HlsClientCache": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for HlsClientCache"
    },
    "HlsCodecSpecification": {
      "type": "string",
      "enum": [
        "RFC_4281",
        "RFC_6381"
      ],
      "documentation": "Placeholder documentation for HlsCodecSpecification"
    },
    "HlsDirectoryStructure": {
      "type": "string",
      "enum": [
        "SINGLE_DIRECTORY",
        "SUBDIRECTORY_PER_STREAM"
      ],
      "documentation": "Placeholder documentation for HlsDirectoryStructure"
    },
    "HlsEncryptionType": {
      "type": "string",
      "enum": [
        "AES128",
        "SAMPLE_AES"
      ],
      "documentation": "Placeholder documentation for HlsEncryptionType"
    },
    "HlsGroupSettings": {
      "type": "structure",
      "members": {
        "AdMarkers": {
          "shape": "__listOfHlsAdMarkers",
          "locationName": "adMarkers",
          "documentation": "Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs."
        },
        "BaseUrlContent": {
          "shape": "__string",
          "locationName": "baseUrlContent",
          "documentation": "A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file."
        },
        "BaseUrlManifest": {
          "shape": "__string",
          "locationName": "baseUrlManifest",
          "documentation": "A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file."
        },
        "CaptionLanguageMappings": {
          "shape": "__listOfCaptionLanguageMapping",
          "locationName": "captionLanguageMappings",
          "documentation": "Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to \"insert\"."
        },
        "CaptionLanguageSetting": {
          "shape": "HlsCaptionLanguageSetting",
          "locationName": "captionLanguageSetting",
          "documentation": "Applies only to 608 Embedded output captions.\ninsert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.\nnone: Include CLOSED-CAPTIONS=NONE line in the manifest.\nomit: Omit any CLOSED-CAPTIONS line from the manifest."
        },
        "ClientCache": {
          "shape": "HlsClientCache",
          "locationName": "clientCache",
          "documentation": "When set to \"disabled\", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay."
        },
        "CodecSpecification": {
          "shape": "HlsCodecSpecification",
          "locationName": "codecSpecification",
          "documentation": "Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation."
        },
        "ConstantIv": {
          "shape": "__stringMin32Max32",
          "locationName": "constantIv",
          "documentation": "For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to \"explicit\" then this parameter is required and is used as the IV for encryption."
        },
        "Destination": {
          "shape": "OutputLocationRef",
          "locationName": "destination",
          "documentation": "A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled)."
        },
        "DirectoryStructure": {
          "shape": "HlsDirectoryStructure",
          "locationName": "directoryStructure",
          "documentation": "Place segments in subdirectories."
        },
        "EncryptionType": {
          "shape": "HlsEncryptionType",
          "locationName": "encryptionType",
          "documentation": "Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired."
        },
        "HlsCdnSettings": {
          "shape": "HlsCdnSettings",
          "locationName": "hlsCdnSettings",
          "documentation": "Parameters that control interactions with the CDN."
        },
        "IndexNSegments": {
          "shape": "__integerMin3",
          "locationName": "indexNSegments",
          "documentation": "If mode is \"live\", the number of segments to retain in the manifest (.m3u8) file. This number must be less than or equal to keepSegments. If mode is \"vod\", this parameter has no effect."
        },
        "InputLossAction": {
          "shape": "InputLossActionForHlsOut",
          "locationName": "inputLossAction",
          "documentation": "Parameter that control output group behavior on input loss."
        },
        "IvInManifest": {
          "shape": "HlsIvInManifest",
          "locationName": "ivInManifest",
          "documentation": "For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to \"include\", IV is listed in the manifest, otherwise the IV is not in the manifest."
        },
        "IvSource": {
          "shape": "HlsIvSource",
          "locationName": "ivSource",
          "documentation": "For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is \"followsSegmentNumber\", it will cause the IV to change every segment (to match the segment number). If this is set to \"explicit\", you must enter a constantIv value."
        },
        "KeepSegments": {
          "shape": "__integerMin1",
          "locationName": "keepSegments",
          "documentation": "If mode is \"live\", the number of TS segments to retain in the destination directory. If mode is \"vod\", this parameter has no effect."
        },
        "KeyFormat": {
          "shape": "__string",
          "locationName": "keyFormat",
          "documentation": "The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of \"identity\" is used.  A reverse DNS string can also be given."
        },
        "KeyFormatVersions": {
          "shape": "__string",
          "locationName": "keyFormatVersions",
          "documentation": "Either a single positive integer version value or a slash delimited list of version values (1/2/3)."
        },
        "KeyProviderSettings": {
          "shape": "KeyProviderSettings",
          "locationName": "keyProviderSettings",
          "documentation": "The key provider settings."
        },
        "ManifestCompression": {
          "shape": "HlsManifestCompression",
          "locationName": "manifestCompression",
          "documentation": "When set to gzip, compresses HLS playlist."
        },
        "ManifestDurationFormat": {
          "shape": "HlsManifestDurationFormat",
          "locationName": "manifestDurationFormat",
          "documentation": "Indicates whether the output manifest should use floating point or integer values for segment duration."
        },
        "MinSegmentLength": {
          "shape": "__integerMin0",
          "locationName": "minSegmentLength",
          "documentation": "When set, minimumSegmentLength is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed."
        },
        "Mode": {
          "shape": "HlsMode",
          "locationName": "mode",
          "documentation": "If \"vod\", all segments are indexed and kept permanently in the destination and manifest. If \"live\", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.\n\nVOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a \"VOD\" type manifest on completion of the stream."
        },
        "OutputSelection": {
          "shape": "HlsOutputSelection",
          "locationName": "outputSelection",
          "documentation": "Generates the .m3u8 playlist file for this HLS output group. The segmentsOnly option will output segments without the .m3u8 file."
        },
        "ProgramDateTime": {
          "shape": "HlsProgramDateTime",
          "locationName": "programDateTime",
          "documentation": "Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestampOffset."
        },
        "ProgramDateTimePeriod": {
          "shape": "__integerMin0Max3600",
          "locationName": "programDateTimePeriod",
          "documentation": "Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds."
        },
        "SegmentLength": {
          "shape": "__integerMin1",
          "locationName": "segmentLength",
          "documentation": "Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer."
        },
        "SegmentationMode": {
          "shape": "HlsSegmentationMode",
          "locationName": "segmentationMode",
          "documentation": "When set to useInputSegmentation, the output segment or fragment points are set by the RAI markers from the input streams."
        },
        "SegmentsPerSubdirectory": {
          "shape": "__integerMin1",
          "locationName": "segmentsPerSubdirectory",
          "documentation": "Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect."
        },
        "StreamInfResolution": {
          "shape": "HlsStreamInfResolution",
          "locationName": "streamInfResolution",
          "documentation": "Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest."
        },
        "TimedMetadataId3Frame": {
          "shape": "HlsTimedMetadataId3Frame",
          "locationName": "timedMetadataId3Frame",
          "documentation": "Indicates ID3 frame that has the timecode."
        },
        "TimedMetadataId3Period": {
          "shape": "__integerMin0",
          "locationName": "timedMetadataId3Period",
          "documentation": "Timed Metadata interval in seconds."
        },
        "TimestampDeltaMilliseconds": {
          "shape": "__integerMin0",
          "locationName": "timestampDeltaMilliseconds",
          "documentation": "Provides an extra millisecond delta offset to fine tune the timestamps."
        },
        "TsFileMode": {
          "shape": "HlsTsFileMode",
          "locationName": "tsFileMode",
          "documentation": "When set to \"singleFile\", emits the program as a single media resource (.ts) file, and uses #EXT-X-BYTERANGE tags to index segment for playback. Playback of VOD mode content during event is not guaranteed due to HTTP server caching."
        }
      },
      "required": [
        "Destination"
      ],
      "documentation": "Placeholder documentation for HlsGroupSettings"
    },
    "HlsInputSettings": {
      "type": "structure",
      "members": {
        "Bandwidth": {
          "shape": "__integerMin0",
          "locationName": "bandwidth",
          "documentation": "When specified the HLS stream with the m3u8 BANDWIDTH that most closely matches this value will be chosen, otherwise the highest bandwidth stream in the m3u8 will be chosen.  The bitrate is specified in bits per second, as in an HLS manifest."
        },
        "BufferSegments": {
          "shape": "__integerMin0",
          "locationName": "bufferSegments",
          "documentation": "When specified, reading of the HLS input will begin this many buffer segments from the end (most recently written segment).  When not specified, the HLS input will begin with the first segment specified in the m3u8."
        },
        "Retries": {
          "shape": "__integerMin0",
          "locationName": "retries",
          "documentation": "The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable."
        },
        "RetryInterval": {
          "shape": "__integerMin0",
          "locationName": "retryInterval",
          "documentation": "The number of seconds between retries when an attempt to read a manifest or segment fails."
        }
      },
      "documentation": "Placeholder documentation for HlsInputSettings"
    },
    "HlsIvInManifest": {
      "type": "string",
      "enum": [
        "EXCLUDE",
        "INCLUDE"
      ],
      "documentation": "Placeholder documentation for HlsIvInManifest"
    },
    "HlsIvSource": {
      "type": "string",
      "enum": [
        "EXPLICIT",
        "FOLLOWS_SEGMENT_NUMBER"
      ],
      "documentation": "Placeholder documentation for HlsIvSource"
    },
    "HlsManifestCompression": {
      "type": "string",
      "enum": [
        "GZIP",
        "NONE"
      ],
      "documentation": "Placeholder documentation for HlsManifestCompression"
    },
    "HlsManifestDurationFormat": {
      "type": "string",
      "enum": [
        "FLOATING_POINT",
        "INTEGER"
      ],
      "documentation": "Placeholder documentation for HlsManifestDurationFormat"
    },
    "HlsMediaStoreSettings": {
      "type": "structure",
      "members": {
        "ConnectionRetryInterval": {
          "shape": "__integerMin0",
          "locationName": "connectionRetryInterval",
          "documentation": "Number of seconds to wait before retrying connection to the CDN if the connection is lost."
        },
        "FilecacheDuration": {
          "shape": "__integerMin0Max600",
          "locationName": "filecacheDuration",
          "documentation": "Size in seconds of file cache for streaming outputs."
        },
        "MediaStoreStorageClass": {
          "shape": "HlsMediaStoreStorageClass",
          "locationName": "mediaStoreStorageClass",
          "documentation": "When set to temporal, output files are stored in non-persistent memory for faster reading and writing."
        },
        "NumRetries": {
          "shape": "__integerMin0",
          "locationName": "numRetries",
          "documentation": "Number of retry attempts that will be made before the Live Event is put into an error state."
        },
        "RestartDelay": {
          "shape": "__integerMin0Max15",
          "locationName": "restartDelay",
          "documentation": "If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart."
        }
      },
      "documentation": "Placeholder documentation for HlsMediaStoreSettings"
    },
    "HlsMediaStoreStorageClass": {
      "type": "string",
      "enum": [
        "TEMPORAL"
      ],
      "documentation": "Placeholder documentation for HlsMediaStoreStorageClass"
    },
    "HlsMode": {
      "type": "string",
      "enum": [
        "LIVE",
        "VOD"
      ],
      "documentation": "Placeholder documentation for HlsMode"
    },
    "HlsOutputSelection": {
      "type": "string",
      "enum": [
        "MANIFESTS_AND_SEGMENTS",
        "SEGMENTS_ONLY"
      ],
      "documentation": "Placeholder documentation for HlsOutputSelection"
    },
    "HlsOutputSettings": {
      "type": "structure",
      "members": {
        "HlsSettings": {
          "shape": "HlsSettings",
          "locationName": "hlsSettings",
          "documentation": "Settings regarding the underlying stream. These settings are different for audio-only outputs."
        },
        "NameModifier": {
          "shape": "__stringMin1",
          "locationName": "nameModifier",
          "documentation": "String concatenated to the end of the destination filename. Accepts \\\"Format Identifiers\\\":#formatIdentifierParameters."
        },
        "SegmentModifier": {
          "shape": "__string",
          "locationName": "segmentModifier",
          "documentation": "String concatenated to end of segment filenames."
        }
      },
      "required": [
        "HlsSettings"
      ],
      "documentation": "Placeholder documentation for HlsOutputSettings"
    },
    "HlsProgramDateTime": {
      "type": "string",
      "enum": [
        "EXCLUDE",
        "INCLUDE"
      ],
      "documentation": "Placeholder documentation for HlsProgramDateTime"
    },
    "HlsSegmentationMode": {
      "type": "string",
      "enum": [
        "USE_INPUT_SEGMENTATION",
        "USE_SEGMENT_DURATION"
      ],
      "documentation": "Placeholder documentation for HlsSegmentationMode"
    },
    "HlsSettings": {
      "type": "structure",
      "members": {
        "AudioOnlyHlsSettings": {
          "shape": "AudioOnlyHlsSettings",
          "locationName": "audioOnlyHlsSettings"
        },
        "StandardHlsSettings": {
          "shape": "StandardHlsSettings",
          "locationName": "standardHlsSettings"
        }
      },
      "documentation": "Placeholder documentation for HlsSettings"
    },
    "HlsStreamInfResolution": {
      "type": "string",
      "enum": [
        "EXCLUDE",
        "INCLUDE"
      ],
      "documentation": "Placeholder documentation for HlsStreamInfResolution"
    },
    "HlsTimedMetadataId3Frame": {
      "type": "string",
      "enum": [
        "NONE",
        "PRIV",
        "TDRL"
      ],
      "documentation": "Placeholder documentation for HlsTimedMetadataId3Frame"
    },
    "HlsTsFileMode": {
      "type": "string",
      "enum": [
        "SEGMENTED_FILES",
        "SINGLE_FILE"
      ],
      "documentation": "Placeholder documentation for HlsTsFileMode"
    },
    "HlsWebdavHttpTransferMode": {
      "type": "string",
      "enum": [
        "CHUNKED",
        "NON_CHUNKED"
      ],
      "documentation": "Placeholder documentation for HlsWebdavHttpTransferMode"
    },
    "HlsWebdavSettings": {
      "type": "structure",
      "members": {
        "ConnectionRetryInterval": {
          "shape": "__integerMin0",
          "locationName": "connectionRetryInterval",
          "documentation": "Number of seconds to wait before retrying connection to the CDN if the connection is lost."
        },
        "FilecacheDuration": {
          "shape": "__integerMin0Max600",
          "locationName": "filecacheDuration",
          "documentation": "Size in seconds of file cache for streaming outputs."
        },
        "HttpTransferMode": {
          "shape": "HlsWebdavHttpTransferMode",
          "locationName": "httpTransferMode",
          "documentation": "Specify whether or not to use chunked transfer encoding to WebDAV."
        },
        "NumRetries": {
          "shape": "__integerMin0",
          "locationName": "numRetries",
          "documentation": "Number of retry attempts that will be made before the Live Event is put into an error state."
        },
        "RestartDelay": {
          "shape": "__integerMin0Max15",
          "locationName": "restartDelay",
          "documentation": "If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart."
        }
      },
      "documentation": "Placeholder documentation for HlsWebdavSettings"
    },
    "Input": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The Unique ARN of the input (generated, immutable)."
        },
        "AttachedChannels": {
          "shape": "__listOf__string",
          "locationName": "attachedChannels",
          "documentation": "A list of channel IDs that that input is attached to (currently an input can only be attached to one channel)."
        },
        "Destinations": {
          "shape": "__listOfInputDestination",
          "locationName": "destinations",
          "documentation": "A list of the destinations of the input (PUSH-type)."
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The generated ID of the input (unique for user account, immutable)."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The user-assigned name (This is a mutable value)."
        },
        "SecurityGroups": {
          "shape": "__listOf__string",
          "locationName": "securityGroups",
          "documentation": "A list of IDs for all the security groups attached to the input."
        },
        "Sources": {
          "shape": "__listOfInputSource",
          "locationName": "sources",
          "documentation": "A list of the sources of the input (PULL-type)."
        },
        "State": {
          "shape": "InputState",
          "locationName": "state"
        },
        "Type": {
          "shape": "InputType",
          "locationName": "type"
        }
      },
      "documentation": "Placeholder documentation for Input"
    },
    "InputAttachment": {
      "type": "structure",
      "members": {
        "InputId": {
          "shape": "__string",
          "locationName": "inputId",
          "documentation": "The ID of the input"
        },
        "InputSettings": {
          "shape": "InputSettings",
          "locationName": "inputSettings",
          "documentation": "Settings of an input (caption selector, etc.)"
        }
      },
      "documentation": "Placeholder documentation for InputAttachment"
    },
    "InputChannelLevel": {
      "type": "structure",
      "members": {
        "Gain": {
          "shape": "__integerMinNegative60Max6",
          "locationName": "gain",
          "documentation": "Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB."
        },
        "InputChannel": {
          "shape": "__integerMin0Max15",
          "locationName": "inputChannel",
          "documentation": "The index of the input channel used as a source."
        }
      },
      "required": [
        "InputChannel",
        "Gain"
      ],
      "documentation": "Placeholder documentation for InputChannelLevel"
    },
    "InputCodec": {
      "type": "string",
      "documentation": "codec in increasing order of complexity",
      "enum": [
        "MPEG2",
        "AVC",
        "HEVC"
      ]
    },
    "InputDeblockFilter": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for InputDeblockFilter"
    },
    "InputDenoiseFilter": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for InputDenoiseFilter"
    },
    "InputDestination": {
      "type": "structure",
      "members": {
        "Ip": {
          "shape": "__string",
          "locationName": "ip",
          "documentation": "The system-generated static IP address of endpoint.\nIt remains fixed for the lifetime of the input.\n"
        },
        "Port": {
          "shape": "__string",
          "locationName": "port",
          "documentation": "The port number for the input."
        },
        "Url": {
          "shape": "__string",
          "locationName": "url",
          "documentation": "This represents the endpoint that the customer stream will be\npushed to.\n"
        }
      },
      "documentation": "The settings for a PUSH type input."
    },
    "InputDestinationRequest": {
      "type": "structure",
      "members": {
        "StreamName": {
          "shape": "__string",
          "locationName": "streamName",
          "documentation": "A unique name for the location the RTMP stream is being pushed\nto.\n"
        }
      },
      "documentation": "Endpoint settings for a PUSH type input."
    },
    "InputFilter": {
      "type": "string",
      "enum": [
        "AUTO",
        "DISABLED",
        "FORCED"
      ],
      "documentation": "Placeholder documentation for InputFilter"
    },
    "InputLocation": {
      "type": "structure",
      "members": {
        "PasswordParam": {
          "shape": "__string",
          "locationName": "passwordParam",
          "documentation": "key used to extract the password from EC2 Parameter store"
        },
        "Uri": {
          "shape": "__string",
          "locationName": "uri",
          "documentation": "Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a RTMP destination should have a uri simliar to: \"rtmp://fmsserver/live\"."
        },
        "Username": {
          "shape": "__string",
          "locationName": "username",
          "documentation": "Documentation update needed"
        }
      },
      "required": [
        "Uri"
      ],
      "documentation": "Placeholder documentation for InputLocation"
    },
    "InputLossActionForHlsOut": {
      "type": "string",
      "enum": [
        "EMIT_OUTPUT",
        "PAUSE_OUTPUT"
      ],
      "documentation": "Placeholder documentation for InputLossActionForHlsOut"
    },
    "InputLossActionForMsSmoothOut": {
      "type": "string",
      "enum": [
        "EMIT_OUTPUT",
        "PAUSE_OUTPUT"
      ],
      "documentation": "Placeholder documentation for InputLossActionForMsSmoothOut"
    },
    "InputLossActionForUdpOut": {
      "type": "string",
      "enum": [
        "DROP_PROGRAM",
        "DROP_TS",
        "EMIT_PROGRAM"
      ],
      "documentation": "Placeholder documentation for InputLossActionForUdpOut"
    },
    "InputLossBehavior": {
      "type": "structure",
      "members": {
        "BlackFrameMsec": {
          "shape": "__integerMin0Max1000000",
          "locationName": "blackFrameMsec",
          "documentation": "Documentation update needed"
        },
        "InputLossImageColor": {
          "shape": "__stringMin6Max6",
          "locationName": "inputLossImageColor",
          "documentation": "When input loss image type is \"color\" this field specifies the color to use. Value: 6 hex characters representing the values of RGB."
        },
        "InputLossImageSlate": {
          "shape": "InputLocation",
          "locationName": "inputLossImageSlate",
          "documentation": "When input loss image type is \"slate\" these fields specify the parameters for accessing the slate."
        },
        "InputLossImageType": {
          "shape": "InputLossImageType",
          "locationName": "inputLossImageType",
          "documentation": "Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec."
        },
        "RepeatFrameMsec": {
          "shape": "__integerMin0Max1000000",
          "locationName": "repeatFrameMsec",
          "documentation": "Documentation update needed"
        }
      },
      "documentation": "Placeholder documentation for InputLossBehavior"
    },
    "InputLossImageType": {
      "type": "string",
      "enum": [
        "COLOR",
        "SLATE"
      ],
      "documentation": "Placeholder documentation for InputLossImageType"
    },
    "InputMaximumBitrate": {
      "type": "string",
      "documentation": "Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently.",
      "enum": [
        "MAX_10_MBPS",
        "MAX_20_MBPS",
        "MAX_50_MBPS"
      ]
    },
    "InputResolution": {
      "type": "string",
      "documentation": "Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines\n",
      "enum": [
        "SD",
        "HD",
        "UHD"
      ]
    },
    "InputSecurityGroup": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "Unique ARN of Input Security Group"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The Id of the Input Security Group"
        },
        "Inputs": {
          "shape": "__listOf__string",
          "locationName": "inputs",
          "documentation": "The list of inputs currently using this Input Security Group."
        },
        "State": {
          "shape": "InputSecurityGroupState",
          "locationName": "state",
          "documentation": "The current state of the Input Security Group."
        },
        "WhitelistRules": {
          "shape": "__listOfInputWhitelistRule",
          "locationName": "whitelistRules",
          "documentation": "Whitelist rules and their sync status"
        }
      },
      "documentation": "An Input Security Group"
    },
    "InputSecurityGroupState": {
      "type": "string",
      "enum": [
        "IDLE",
        "IN_USE",
        "UPDATING",
        "DELETED"
      ],
      "documentation": "Placeholder documentation for InputSecurityGroupState"
    },
    "InputSecurityGroupWhitelistRequest": {
      "type": "structure",
      "members": {
        "WhitelistRules": {
          "shape": "__listOfInputWhitelistRuleCidr",
          "locationName": "whitelistRules",
          "documentation": "List of IPv4 CIDR addresses to whitelist"
        }
      },
      "documentation": "Request of IPv4 CIDR addresses to whitelist in a security group."
    },
    "InputSettings": {
      "type": "structure",
      "members": {
        "AudioSelectors": {
          "shape": "__listOfAudioSelector",
          "locationName": "audioSelectors",
          "documentation": "Used to select the audio stream to decode for inputs that have multiple available."
        },
        "CaptionSelectors": {
          "shape": "__listOfCaptionSelector",
          "locationName": "captionSelectors",
          "documentation": "Used to select the caption input to use for inputs that have multiple available."
        },
        "DeblockFilter": {
          "shape": "InputDeblockFilter",
          "locationName": "deblockFilter",
          "documentation": "Enable or disable the deblock filter when filtering."
        },
        "DenoiseFilter": {
          "shape": "InputDenoiseFilter",
          "locationName": "denoiseFilter",
          "documentation": "Enable or disable the denoise filter when filtering."
        },
        "FilterStrength": {
          "shape": "__integerMin1Max5",
          "locationName": "filterStrength",
          "documentation": "Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest)."
        },
        "InputFilter": {
          "shape": "InputFilter",
          "locationName": "inputFilter",
          "documentation": "Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.\n1) auto - filtering will be applied depending on input type/quality\n2) disabled - no filtering will be applied to the input\n3) forced - filtering will be applied regardless of input type"
        },
        "NetworkInputSettings": {
          "shape": "NetworkInputSettings",
          "locationName": "networkInputSettings",
          "documentation": "Input settings."
        },
        "SourceEndBehavior": {
          "shape": "InputSourceEndBehavior",
          "locationName": "sourceEndBehavior",
          "documentation": "Loop input if it is a file. This allows a file input to be streamed indefinitely."
        },
        "VideoSelector": {
          "shape": "VideoSelector",
          "locationName": "videoSelector",
          "documentation": "Informs which video elementary stream to decode for input types that have multiple available."
        }
      },
      "documentation": "Live Event input parameters. There can be multiple inputs in a single Live Event."
    },
    "InputSource": {
      "type": "structure",
      "members": {
        "PasswordParam": {
          "shape": "__string",
          "locationName": "passwordParam",
          "documentation": "The key used to extract the password from EC2 Parameter store."
        },
        "Url": {
          "shape": "__string",
          "locationName": "url",
          "documentation": "This represents the customer's source URL where stream is\npulled from.\n"
        },
        "Username": {
          "shape": "__string",
          "locationName": "username",
          "documentation": "The username for the input source."
        }
      },
      "documentation": "The settings for a PULL type input."
    },
    "InputSourceEndBehavior": {
      "type": "string",
      "enum": [
        "CONTINUE",
        "LOOP"
      ],
      "documentation": "Placeholder documentation for InputSourceEndBehavior"
    },
    "InputSourceRequest": {
      "type": "structure",
      "members": {
        "PasswordParam": {
          "shape": "__string",
          "locationName": "passwordParam",
          "documentation": "The key used to extract the password from EC2 Parameter store."
        },
        "Url": {
          "shape": "__string",
          "locationName": "url",
          "documentation": "This represents the customer's source URL where stream is\npulled from.\n"
        },
        "Username": {
          "shape": "__string",
          "locationName": "username",
          "documentation": "The username for the input source."
        }
      },
      "documentation": "Settings for for a PULL type input."
    },
    "InputSpecification": {
      "type": "structure",
      "members": {
        "Codec": {
          "shape": "InputCodec",
          "locationName": "codec",
          "documentation": "Input codec"
        },
        "MaximumBitrate": {
          "shape": "InputMaximumBitrate",
          "locationName": "maximumBitrate",
          "documentation": "Maximum input bitrate, categorized coarsely"
        },
        "Resolution": {
          "shape": "InputResolution",
          "locationName": "resolution",
          "documentation": "Input resolution, categorized coarsely"
        }
      },
      "documentation": "Placeholder documentation for InputSpecification"
    },
    "InputState": {
      "type": "string",
      "enum": [
        "CREATING",
        "DETACHED",
        "ATTACHED",
        "DELETING",
        "DELETED"
      ],
      "documentation": "Placeholder documentation for InputState"
    },
    "InputType": {
      "type": "string",
      "enum": [
        "UDP_PUSH",
        "RTP_PUSH",
        "RTMP_PUSH",
        "RTMP_PULL",
        "URL_PULL"
      ],
      "documentation": "Placeholder documentation for InputType"
    },
    "InputWhitelistRule": {
      "type": "structure",
      "members": {
        "Cidr": {
          "shape": "__string",
          "locationName": "cidr",
          "documentation": "The IPv4 CIDR that's whitelisted."
        }
      },
      "documentation": "Whitelist rule"
    },
    "InputWhitelistRuleCidr": {
      "type": "structure",
      "members": {
        "Cidr": {
          "shape": "__string",
          "locationName": "cidr",
          "documentation": "The IPv4 CIDR to whitelist."
        }
      },
      "documentation": "An IPv4 CIDR to whitelist."
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
      "documentation": "Placeholder documentation for InternalServerErrorException"
    },
    "InternalServiceError": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "documentation": "Placeholder documentation for InternalServiceError"
    },
    "InvalidRequest": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "documentation": "Placeholder documentation for InvalidRequest"
    },
    "KeyProviderSettings": {
      "type": "structure",
      "members": {
        "StaticKeySettings": {
          "shape": "StaticKeySettings",
          "locationName": "staticKeySettings"
        }
      },
      "documentation": "Placeholder documentation for KeyProviderSettings"
    },
    "LimitExceeded": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "documentation": "Placeholder documentation for LimitExceeded"
    },
    "ListChannelsRequest": {
      "type": "structure",
      "members": {
        "MaxResults": {
          "shape": "MaxResults",
          "location": "querystring",
          "locationName": "maxResults"
        },
        "NextToken": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "nextToken"
        }
      },
      "documentation": "Placeholder documentation for ListChannelsRequest"
    },
    "ListChannelsResponse": {
      "type": "structure",
      "members": {
        "Channels": {
          "shape": "__listOfChannelSummary",
          "locationName": "channels"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken"
        }
      },
      "documentation": "Placeholder documentation for ListChannelsResponse"
    },
    "ListChannelsResultModel": {
      "type": "structure",
      "members": {
        "Channels": {
          "shape": "__listOfChannelSummary",
          "locationName": "channels"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken"
        }
      },
      "documentation": "Placeholder documentation for ListChannelsResultModel"
    },
    "ListInputSecurityGroupsRequest": {
      "type": "structure",
      "members": {
        "MaxResults": {
          "shape": "MaxResults",
          "location": "querystring",
          "locationName": "maxResults"
        },
        "NextToken": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "nextToken"
        }
      },
      "documentation": "Placeholder documentation for ListInputSecurityGroupsRequest"
    },
    "ListInputSecurityGroupsResponse": {
      "type": "structure",
      "members": {
        "InputSecurityGroups": {
          "shape": "__listOfInputSecurityGroup",
          "locationName": "inputSecurityGroups",
          "documentation": "List of input security groups"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken"
        }
      },
      "documentation": "Placeholder documentation for ListInputSecurityGroupsResponse"
    },
    "ListInputSecurityGroupsResultModel": {
      "type": "structure",
      "members": {
        "InputSecurityGroups": {
          "shape": "__listOfInputSecurityGroup",
          "locationName": "inputSecurityGroups",
          "documentation": "List of input security groups"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken"
        }
      },
      "documentation": "Result of input security group list request"
    },
    "ListInputsRequest": {
      "type": "structure",
      "members": {
        "MaxResults": {
          "shape": "MaxResults",
          "location": "querystring",
          "locationName": "maxResults"
        },
        "NextToken": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "nextToken"
        }
      },
      "documentation": "Placeholder documentation for ListInputsRequest"
    },
    "ListInputsResponse": {
      "type": "structure",
      "members": {
        "Inputs": {
          "shape": "__listOfInput",
          "locationName": "inputs"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken"
        }
      },
      "documentation": "Placeholder documentation for ListInputsResponse"
    },
    "ListInputsResultModel": {
      "type": "structure",
      "members": {
        "Inputs": {
          "shape": "__listOfInput",
          "locationName": "inputs"
        },
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken"
        }
      },
      "documentation": "Placeholder documentation for ListInputsResultModel"
    },
    "ListOfferingsRequest": {
      "type": "structure",
      "members": {
        "ChannelConfiguration": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "channelConfiguration",
          "documentation": "Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)\n"
        },
        "Codec": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "codec",
          "documentation": "Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'"
        },
        "MaxResults": {
          "shape": "MaxResults",
          "location": "querystring",
          "locationName": "maxResults"
        },
        "MaximumBitrate": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "maximumBitrate",
          "documentation": "Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'\n"
        },
        "MaximumFramerate": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "maximumFramerate",
          "documentation": "Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'"
        },
        "NextToken": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "nextToken"
        },
        "Resolution": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "resolution",
          "documentation": "Filter by resolution, 'SD', 'HD', or 'UHD'"
        },
        "ResourceType": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "resourceType",
          "documentation": "Filter by resource type, 'INPUT', 'OUTPUT', or 'CHANNEL'"
        },
        "SpecialFeature": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "specialFeature",
          "documentation": "Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'\n"
        },
        "VideoQuality": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "videoQuality",
          "documentation": "Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'\n"
        }
      },
      "documentation": "Placeholder documentation for ListOfferingsRequest"
    },
    "ListOfferingsResponse": {
      "type": "structure",
      "members": {
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Token to retrieve the next page of results"
        },
        "Offerings": {
          "shape": "__listOfOffering",
          "locationName": "offerings",
          "documentation": "List of offerings"
        }
      },
      "documentation": "Placeholder documentation for ListOfferingsResponse"
    },
    "ListOfferingsResultModel": {
      "type": "structure",
      "members": {
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Token to retrieve the next page of results"
        },
        "Offerings": {
          "shape": "__listOfOffering",
          "locationName": "offerings",
          "documentation": "List of offerings"
        }
      },
      "documentation": "ListOfferings response"
    },
    "ListReservationsRequest": {
      "type": "structure",
      "members": {
        "Codec": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "codec",
          "documentation": "Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'"
        },
        "MaxResults": {
          "shape": "MaxResults",
          "location": "querystring",
          "locationName": "maxResults"
        },
        "MaximumBitrate": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "maximumBitrate",
          "documentation": "Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'\n"
        },
        "MaximumFramerate": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "maximumFramerate",
          "documentation": "Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'"
        },
        "NextToken": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "nextToken"
        },
        "Resolution": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "resolution",
          "documentation": "Filter by resolution, 'SD', 'HD', or 'UHD'"
        },
        "ResourceType": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "resourceType",
          "documentation": "Filter by resource type, 'INPUT', 'OUTPUT', or 'CHANNEL'"
        },
        "SpecialFeature": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "specialFeature",
          "documentation": "Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'\n"
        },
        "VideoQuality": {
          "shape": "__string",
          "location": "querystring",
          "locationName": "videoQuality",
          "documentation": "Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'\n"
        }
      },
      "documentation": "Placeholder documentation for ListReservationsRequest"
    },
    "ListReservationsResponse": {
      "type": "structure",
      "members": {
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Token to retrieve the next page of results"
        },
        "Reservations": {
          "shape": "__listOfReservation",
          "locationName": "reservations",
          "documentation": "List of reservations"
        }
      },
      "documentation": "Placeholder documentation for ListReservationsResponse"
    },
    "ListReservationsResultModel": {
      "type": "structure",
      "members": {
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "Token to retrieve the next page of results"
        },
        "Reservations": {
          "shape": "__listOfReservation",
          "locationName": "reservations",
          "documentation": "List of reservations"
        }
      },
      "documentation": "ListReservations response"
    },
    "LogLevel": {
      "type": "string",
      "enum": [
        "ERROR",
        "WARNING",
        "INFO",
        "DEBUG",
        "DISABLED"
      ],
      "documentation": "The log level the user wants for their channel."
    },
    "M2tsAbsentInputAudioBehavior": {
      "type": "string",
      "enum": [
        "DROP",
        "ENCODE_SILENCE"
      ],
      "documentation": "Placeholder documentation for M2tsAbsentInputAudioBehavior"
    },
    "M2tsArib": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for M2tsArib"
    },
    "M2tsAribCaptionsPidControl": {
      "type": "string",
      "enum": [
        "AUTO",
        "USE_CONFIGURED"
      ],
      "documentation": "Placeholder documentation for M2tsAribCaptionsPidControl"
    },
    "M2tsAudioBufferModel": {
      "type": "string",
      "enum": [
        "ATSC",
        "DVB"
      ],
      "documentation": "Placeholder documentation for M2tsAudioBufferModel"
    },
    "M2tsAudioInterval": {
      "type": "string",
      "enum": [
        "VIDEO_AND_FIXED_INTERVALS",
        "VIDEO_INTERVAL"
      ],
      "documentation": "Placeholder documentation for M2tsAudioInterval"
    },
    "M2tsAudioStreamType": {
      "type": "string",
      "enum": [
        "ATSC",
        "DVB"
      ],
      "documentation": "Placeholder documentation for M2tsAudioStreamType"
    },
    "M2tsBufferModel": {
      "type": "string",
      "enum": [
        "MULTIPLEX",
        "NONE"
      ],
      "documentation": "Placeholder documentation for M2tsBufferModel"
    },
    "M2tsCcDescriptor": {
      "type": "string",
      "enum": [
        "DISABLED",
        "ENABLED"
      ],
      "documentation": "Placeholder documentation for M2tsCcDescriptor"
    },
    "M2tsEbifControl": {
      "type": "string",
      "enum": [
        "NONE",
        "PASSTHROUGH"
      ],
      "documentation": "Placeholder documentation for M2tsEbifControl"
    },
    "M2tsEbpPlacement": {
      "type": "string",
      "enum": [
        "VIDEO_AND_AUDIO_PIDS",
        "VIDEO_PID"
      ],
      "documentation": "Placeholder documentation for M2tsEbpPlacement"
    },
    "M2tsEsRateInPes": {
      "type": "string",
      "enum": [
        "EXCLUDE",
        "INCLUDE"
      ],
      "documentation": "Placeholder documentation for M2tsEsRateInPes"
    },
    "M2tsKlv": {
      "type": "string",
      "enum": [
        "NONE",
        "PASSTHROUGH"
      ],
      "documentation": "Placeholder documentation for M2tsKlv"
    },
    "M2tsPcrControl": {
      "type": "string",
      "enum": [
        "CONFIGURED_PCR_PERIOD",
        "PCR_EVERY_PES_PACKET"
      ],
      "documentation": "Placeholder documentation for M2tsPcrControl"
    },
    "M2tsRateMode": {
      "type": "string",
      "enum": [
        "CBR",
        "VBR"
      ],
      "documentation": "Placeholder documentation for M2tsRateMode"
    },
    "M2tsScte35Control": {
      "type": "string",
      "enum": [
        "NONE",
        "PASSTHROUGH"
      ],
      "documentation": "Placeholder documentation for M2tsScte35Control"
    },
    "M2tsSegmentationMarkers": {
      "type": "string",
      "enum": [
        "EBP",
        "EBP_LEGACY",
        "NONE",
        "PSI_SEGSTART",
        "RAI_ADAPT",
        "RAI_SEGSTART"
      ],
      "documentation": "Placeholder documentation for M2tsSegmentationMarkers"
    },
    "M2tsSegmentationStyle": {
      "type": "string",
      "enum": [
        "MAINTAIN_CADENCE",
        "RESET_CADENCE"
      ],
      "documentation": "Placeholder documentation for M2tsSegmentationStyle"
    },
    "M2tsSettings": {
      "type": "structure",
      "members": {
        "AbsentInputAudioBehavior": {
          "shape": "M2tsAbsentInputAudioBehavior",
          "locationName": "absentInputAudioBehavior",
          "documentation": "When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream."
        },
        "Arib": {
          "shape": "M2tsArib",
          "locationName": "arib",
          "documentation": "When set to enabled, uses ARIB-compliant field muxing and removes video descriptor."
        },
        "AribCaptionsPid": {
          "shape": "__string",
          "locationName": "aribCaptionsPid",
          "documentation": "Packet Identifier (PID) for ARIB Captions in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "AribCaptionsPidControl": {
          "shape": "M2tsAribCaptionsPidControl",
          "locationName": "aribCaptionsPidControl",
          "documentation": "If set to auto, pid number used for ARIB Captions will be auto-selected from unused pids.  If set to useConfigured, ARIB Captions will be on the configured pid number."
        },
        "AudioBufferModel": {
          "shape": "M2tsAudioBufferModel",
          "locationName": "audioBufferModel",
          "documentation": "When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used."
        },
        "AudioFramesPerPes": {
          "shape": "__integerMin0",
          "locationName": "audioFramesPerPes",
          "documentation": "The number of audio frames to insert for each PES packet."
        },
        "AudioPids": {
          "shape": "__string",
          "locationName": "audioPids",
          "documentation": "Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "AudioStreamType": {
          "shape": "M2tsAudioStreamType",
          "locationName": "audioStreamType",
          "documentation": "When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06."
        },
        "Bitrate": {
          "shape": "__integerMin0",
          "locationName": "bitrate",
          "documentation": "The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate."
        },
        "BufferModel": {
          "shape": "M2tsBufferModel",
          "locationName": "bufferModel",
          "documentation": "If set to multiplex, use multiplex buffer model for accurate interleaving.  Setting to bufferModel to none can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions."
        },
        "CcDescriptor": {
          "shape": "M2tsCcDescriptor",
          "locationName": "ccDescriptor",
          "documentation": "When set to enabled, generates captionServiceDescriptor in PMT."
        },
        "DvbNitSettings": {
          "shape": "DvbNitSettings",
          "locationName": "dvbNitSettings",
          "documentation": "Inserts DVB Network Information Table (NIT) at the specified table repetition interval."
        },
        "DvbSdtSettings": {
          "shape": "DvbSdtSettings",
          "locationName": "dvbSdtSettings",
          "documentation": "Inserts DVB Service Description Table (SDT) at the specified table repetition interval."
        },
        "DvbSubPids": {
          "shape": "__string",
          "locationName": "dvbSubPids",
          "documentation": "Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "DvbTdtSettings": {
          "shape": "DvbTdtSettings",
          "locationName": "dvbTdtSettings",
          "documentation": "Inserts DVB Time and Date Table (TDT) at the specified table repetition interval."
        },
        "DvbTeletextPid": {
          "shape": "__string",
          "locationName": "dvbTeletextPid",
          "documentation": "Packet Identifier (PID) for input source DVB Teletext data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "Ebif": {
          "shape": "M2tsEbifControl",
          "locationName": "ebif",
          "documentation": "If set to passthrough, passes any EBIF data from the input source to this output."
        },
        "EbpAudioInterval": {
          "shape": "M2tsAudioInterval",
          "locationName": "ebpAudioInterval",
          "documentation": "When videoAndFixedIntervals is selected, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. Only available when EBP Cablelabs segmentation markers are selected.  Partitions 1 and 2 will always follow the video interval."
        },
        "EbpLookaheadMs": {
          "shape": "__integerMin0Max10000",
          "locationName": "ebpLookaheadMs",
          "documentation": "When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is \"stretched\" to the next marker.  The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate."
        },
        "EbpPlacement": {
          "shape": "M2tsEbpPlacement",
          "locationName": "ebpPlacement",
          "documentation": "Controls placement of EBP on Audio PIDs. If set to videoAndAudioPids, EBP markers will be placed on the video PID and all audio PIDs.  If set to videoPid, EBP markers will be placed on only the video PID."
        },
        "EcmPid": {
          "shape": "__string",
          "locationName": "ecmPid",
          "documentation": "This field is unused and deprecated."
        },
        "EsRateInPes": {
          "shape": "M2tsEsRateInPes",
          "locationName": "esRateInPes",
          "documentation": "Include or exclude the ES Rate field in the PES header."
        },
        "EtvPlatformPid": {
          "shape": "__string",
          "locationName": "etvPlatformPid",
          "documentation": "Packet Identifier (PID) for input source ETV Platform data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "EtvSignalPid": {
          "shape": "__string",
          "locationName": "etvSignalPid",
          "documentation": "Packet Identifier (PID) for input source ETV Signal data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "FragmentTime": {
          "shape": "__doubleMin0",
          "locationName": "fragmentTime",
          "documentation": "The length in seconds of each fragment. Only used with EBP markers."
        },
        "Klv": {
          "shape": "M2tsKlv",
          "locationName": "klv",
          "documentation": "If set to passthrough, passes any KLV data from the input source to this output."
        },
        "KlvDataPids": {
          "shape": "__string",
          "locationName": "klvDataPids",
          "documentation": "Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "NullPacketBitrate": {
          "shape": "__doubleMin0",
          "locationName": "nullPacketBitrate",
          "documentation": "Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets."
        },
        "PatInterval": {
          "shape": "__integerMin0Max1000",
          "locationName": "patInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream.  Valid values are 0, 10..1000."
        },
        "PcrControl": {
          "shape": "M2tsPcrControl",
          "locationName": "pcrControl",
          "documentation": "When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream."
        },
        "PcrPeriod": {
          "shape": "__integerMin0Max500",
          "locationName": "pcrPeriod",
          "documentation": "Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream."
        },
        "PcrPid": {
          "shape": "__string",
          "locationName": "pcrPid",
          "documentation": "Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "PmtInterval": {
          "shape": "__integerMin0Max1000",
          "locationName": "pmtInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000."
        },
        "PmtPid": {
          "shape": "__string",
          "locationName": "pmtPid",
          "documentation": "Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "ProgramNum": {
          "shape": "__integerMin0Max65535",
          "locationName": "programNum",
          "documentation": "The value of the program number field in the Program Map Table."
        },
        "RateMode": {
          "shape": "M2tsRateMode",
          "locationName": "rateMode",
          "documentation": "When vbr, does not insert null packets into transport stream to fill specified bitrate. The bitrate setting acts as the maximum bitrate when vbr is set."
        },
        "Scte27Pids": {
          "shape": "__string",
          "locationName": "scte27Pids",
          "documentation": "Packet Identifier (PID) for input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "Scte35Control": {
          "shape": "M2tsScte35Control",
          "locationName": "scte35Control",
          "documentation": "Optionally pass SCTE-35 signals from the input source to this output."
        },
        "Scte35Pid": {
          "shape": "__string",
          "locationName": "scte35Pid",
          "documentation": "Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "SegmentationMarkers": {
          "shape": "M2tsSegmentationMarkers",
          "locationName": "segmentationMarkers",
          "documentation": "Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format."
        },
        "SegmentationStyle": {
          "shape": "M2tsSegmentationStyle",
          "locationName": "segmentationStyle",
          "documentation": "The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted.\n\nWhen a segmentation style of \"resetCadence\" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds.\n\nWhen a segmentation style of \"maintainCadence\" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule."
        },
        "SegmentationTime": {
          "shape": "__doubleMin1",
          "locationName": "segmentationTime",
          "documentation": "The length in seconds of each segment. Required unless markers is set to None_."
        },
        "TimedMetadataBehavior": {
          "shape": "M2tsTimedMetadataBehavior",
          "locationName": "timedMetadataBehavior",
          "documentation": "When set to passthrough, timed metadata will be passed through from input to output."
        },
        "TimedMetadataPid": {
          "shape": "__string",
          "locationName": "timedMetadataPid",
          "documentation": "Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "TransportStreamId": {
          "shape": "__integerMin0Max65535",
          "locationName": "transportStreamId",
          "documentation": "The value of the transport stream ID field in the Program Map Table."
        },
        "VideoPid": {
          "shape": "__string",
          "locationName": "videoPid",
          "documentation": "Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        }
      },
      "documentation": "Placeholder documentation for M2tsSettings"
    },
    "M2tsTimedMetadataBehavior": {
      "type": "string",
      "enum": [
        "NO_PASSTHROUGH",
        "PASSTHROUGH"
      ],
      "documentation": "Placeholder documentation for M2tsTimedMetadataBehavior"
    },
    "M3u8PcrControl": {
      "type": "string",
      "enum": [
        "CONFIGURED_PCR_PERIOD",
        "PCR_EVERY_PES_PACKET"
      ],
      "documentation": "Placeholder documentation for M3u8PcrControl"
    },
    "M3u8Scte35Behavior": {
      "type": "string",
      "enum": [
        "NO_PASSTHROUGH",
        "PASSTHROUGH"
      ],
      "documentation": "Placeholder documentation for M3u8Scte35Behavior"
    },
    "M3u8Settings": {
      "type": "structure",
      "members": {
        "AudioFramesPerPes": {
          "shape": "__integerMin0",
          "locationName": "audioFramesPerPes",
          "documentation": "The number of audio frames to insert for each PES packet."
        },
        "AudioPids": {
          "shape": "__string",
          "locationName": "audioPids",
          "documentation": "Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values."
        },
        "EcmPid": {
          "shape": "__string",
          "locationName": "ecmPid",
          "documentation": "This parameter is unused and deprecated."
        },
        "PatInterval": {
          "shape": "__integerMin0Max1000",
          "locationName": "patInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream. A value of \\\"0\\\" writes out the PMT once per segment file."
        },
        "PcrControl": {
          "shape": "M3u8PcrControl",
          "locationName": "pcrControl",
          "documentation": "When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream."
        },
        "PcrPeriod": {
          "shape": "__integerMin0Max500",
          "locationName": "pcrPeriod",
          "documentation": "Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream."
        },
        "PcrPid": {
          "shape": "__string",
          "locationName": "pcrPid",
          "documentation": "Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value."
        },
        "PmtInterval": {
          "shape": "__integerMin0Max1000",
          "locationName": "pmtInterval",
          "documentation": "The number of milliseconds between instances of this table in the output transport stream. A value of \\\"0\\\" writes out the PMT once per segment file."
        },
        "PmtPid": {
          "shape": "__string",
          "locationName": "pmtPid",
          "documentation": "Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value."
        },
        "ProgramNum": {
          "shape": "__integerMin0Max65535",
          "locationName": "programNum",
          "documentation": "The value of the program number field in the Program Map Table."
        },
        "Scte35Behavior": {
          "shape": "M3u8Scte35Behavior",
          "locationName": "scte35Behavior",
          "documentation": "If set to passthrough, passes any SCTE-35 signals from the input source to this output."
        },
        "Scte35Pid": {
          "shape": "__string",
          "locationName": "scte35Pid",
          "documentation": "Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value."
        },
        "TimedMetadataBehavior": {
          "shape": "M3u8TimedMetadataBehavior",
          "locationName": "timedMetadataBehavior",
          "documentation": "When set to passthrough, timed metadata is passed through from input to output."
        },
        "TimedMetadataPid": {
          "shape": "__string",
          "locationName": "timedMetadataPid",
          "documentation": "Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6)."
        },
        "TransportStreamId": {
          "shape": "__integerMin0Max65535",
          "locationName": "transportStreamId",
          "documentation": "The value of the transport stream ID field in the Program Map Table."
        },
        "VideoPid": {
          "shape": "__string",
          "locationName": "videoPid",
          "documentation": "Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value."
        }
      },
      "documentation": "Settings information for the .m3u8 container"
    },
    "M3u8TimedMetadataBehavior": {
      "type": "string",
      "enum": [
        "NO_PASSTHROUGH",
        "PASSTHROUGH"
      ],
      "documentation": "Placeholder documentation for M3u8TimedMetadataBehavior"
    },
    "MaxResults": {
      "type": "integer",
      "min": 1,
      "max": 1000,
      "documentation": "Placeholder documentation for MaxResults"
    },
    "Mp2CodingMode": {
      "type": "string",
      "enum": [
        "CODING_MODE_1_0",
        "CODING_MODE_2_0"
      ],
      "documentation": "Placeholder documentation for Mp2CodingMode"
    },
    "Mp2Settings": {
      "type": "structure",
      "members": {
        "Bitrate": {
          "shape": "__double",
          "locationName": "bitrate",
          "documentation": "Average bitrate in bits/second."
        },
        "CodingMode": {
          "shape": "Mp2CodingMode",
          "locationName": "codingMode",
          "documentation": "The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo)."
        },
        "SampleRate": {
          "shape": "__double",
          "locationName": "sampleRate",
          "documentation": "Sample rate in Hz."
        }
      },
      "documentation": "Placeholder documentation for Mp2Settings"
    },
    "MsSmoothGroupSettings": {
      "type": "structure",
      "members": {
        "AcquisitionPointId": {
          "shape": "__string",
          "locationName": "acquisitionPointId",
          "documentation": "The value of the \"Acquisition Point Identity\" element used in each message placed in the sparse track.  Only enabled if sparseTrackType is not \"none\"."
        },
        "AudioOnlyTimecodeControl": {
          "shape": "SmoothGroupAudioOnlyTimecodeControl",
          "locationName": "audioOnlyTimecodeControl",
          "documentation": "If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream."
        },
        "CertificateMode": {
          "shape": "SmoothGroupCertificateMode",
          "locationName": "certificateMode",
          "documentation": "If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail."
        },
        "ConnectionRetryInterval": {
          "shape": "__integerMin0",
          "locationName": "connectionRetryInterval",
          "documentation": "Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established."
        },
        "Destination": {
          "shape": "OutputLocationRef",
          "locationName": "destination",
          "documentation": "Smooth Streaming publish point on an IIS server. Elemental Live acts as a \"Push\" encoder to IIS."
        },
        "EventId": {
          "shape": "__string",
          "locationName": "eventId",
          "documentation": "MS Smooth event ID to be sent to the IIS server.\n\nShould only be specified if eventIdMode is set to useConfigured."
        },
        "EventIdMode": {
          "shape": "SmoothGroupEventIdMode",
          "locationName": "eventIdMode",
          "documentation": "Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.\n\nOptions:\n- \"useConfigured\" - use the value provided in eventId\n- \"useTimestamp\" - generate and send an event ID based on the current timestamp\n- \"noEventId\" - do not send an event ID to the IIS server."
        },
        "EventStopBehavior": {
          "shape": "SmoothGroupEventStopBehavior",
          "locationName": "eventStopBehavior",
          "documentation": "When set to sendEos, send EOS signal to IIS server when stopping the event"
        },
        "FilecacheDuration": {
          "shape": "__integerMin0",
          "locationName": "filecacheDuration",
          "documentation": "Size in seconds of file cache for streaming outputs."
        },
        "FragmentLength": {
          "shape": "__integerMin1",
          "locationName": "fragmentLength",
          "documentation": "Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate."
        },
        "InputLossAction": {
          "shape": "InputLossActionForMsSmoothOut",
          "locationName": "inputLossAction",
          "documentation": "Parameter that control output group behavior on input loss."
        },
        "NumRetries": {
          "shape": "__integerMin0",
          "locationName": "numRetries",
          "documentation": "Number of retry attempts."
        },
        "RestartDelay": {
          "shape": "__integerMin0",
          "locationName": "restartDelay",
          "documentation": "Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration."
        },
        "SegmentationMode": {
          "shape": "SmoothGroupSegmentationMode",
          "locationName": "segmentationMode",
          "documentation": "When set to useInputSegmentation, the output segment or fragment points are set by the RAI markers from the input streams."
        },
        "SendDelayMs": {
          "shape": "__integerMin0Max10000",
          "locationName": "sendDelayMs",
          "documentation": "Outputs that are \"output locked\" can use this delay. Assign a delay to the output that is \"secondary\".  Do not assign a delay to the \"primary\" output. The delay means that the primary output will always reach the downstream system before the secondary, which helps ensure that the downstream system always uses the primary output. (If there were no delay, the downstream system might flip-flop between whichever output happens to arrive first.) If the primary fails, the downstream system will switch to the secondary output. When the primary is restarted, the downstream system will switch back to the primary (because once again it is always arriving first)"
        },
        "SparseTrackType": {
          "shape": "SmoothGroupSparseTrackType",
          "locationName": "sparseTrackType",
          "documentation": "If set to scte35, use incoming SCTE-35 messages to generate a sparse track in this group of MS-Smooth outputs."
        },
        "StreamManifestBehavior": {
          "shape": "SmoothGroupStreamManifestBehavior",
          "locationName": "streamManifestBehavior",
          "documentation": "When set to send, send stream manifest so publishing point doesn't start until all streams start."
        },
        "TimestampOffset": {
          "shape": "__string",
          "locationName": "timestampOffset",
          "documentation": "Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset."
        },
        "TimestampOffsetMode": {
          "shape": "SmoothGroupTimestampOffsetMode",
          "locationName": "timestampOffsetMode",
          "documentation": "Type of timestamp date offset to use.\n- useEventStartDate: Use the date the event was started as the offset\n- useConfiguredOffset: Use an explicitly configured date as the offset"
        }
      },
      "required": [
        "Destination"
      ],
      "documentation": "Placeholder documentation for MsSmoothGroupSettings"
    },
    "MsSmoothOutputSettings": {
      "type": "structure",
      "members": {
        "NameModifier": {
          "shape": "__string",
          "locationName": "nameModifier",
          "documentation": "String concatenated to the end of the destination filename.  Required for multiple outputs of the same type."
        }
      },
      "documentation": "Placeholder documentation for MsSmoothOutputSettings"
    },
    "NetworkInputServerValidation": {
      "type": "string",
      "enum": [
        "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME",
        "CHECK_CRYPTOGRAPHY_ONLY"
      ],
      "documentation": "Placeholder documentation for NetworkInputServerValidation"
    },
    "NetworkInputSettings": {
      "type": "structure",
      "members": {
        "HlsInputSettings": {
          "shape": "HlsInputSettings",
          "locationName": "hlsInputSettings",
          "documentation": "Specifies HLS input settings when the uri is for a HLS manifest."
        },
        "ServerValidation": {
          "shape": "NetworkInputServerValidation",
          "locationName": "serverValidation",
          "documentation": "Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https."
        }
      },
      "documentation": "Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection."
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
      "documentation": "Placeholder documentation for NotFoundException"
    },
    "Offering": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'"
        },
        "CurrencyCode": {
          "shape": "__string",
          "locationName": "currencyCode",
          "documentation": "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'"
        },
        "Duration": {
          "shape": "__integer",
          "locationName": "duration",
          "documentation": "Lease duration, e.g. '12'"
        },
        "DurationUnits": {
          "shape": "OfferingDurationUnits",
          "locationName": "durationUnits",
          "documentation": "Units for duration, e.g. 'MONTHS'"
        },
        "FixedPrice": {
          "shape": "__double",
          "locationName": "fixedPrice",
          "documentation": "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering"
        },
        "OfferingDescription": {
          "shape": "__string",
          "locationName": "offeringDescription",
          "documentation": "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'"
        },
        "OfferingId": {
          "shape": "__string",
          "locationName": "offeringId",
          "documentation": "Unique offering ID, e.g. '87654321'"
        },
        "OfferingType": {
          "shape": "OfferingType",
          "locationName": "offeringType",
          "documentation": "Offering type, e.g. 'NO_UPFRONT'"
        },
        "Region": {
          "shape": "__string",
          "locationName": "region",
          "documentation": "AWS region, e.g. 'us-west-2'"
        },
        "ResourceSpecification": {
          "shape": "ReservationResourceSpecification",
          "locationName": "resourceSpecification",
          "documentation": "Resource configuration details"
        },
        "UsagePrice": {
          "shape": "__double",
          "locationName": "usagePrice",
          "documentation": "Recurring usage charge for each reserved resource, e.g. '157.0'"
        }
      },
      "documentation": "Reserved resources available for purchase"
    },
    "OfferingDurationUnits": {
      "type": "string",
      "documentation": "Units for duration, e.g. 'MONTHS'",
      "enum": [
        "MONTHS"
      ]
    },
    "OfferingType": {
      "type": "string",
      "documentation": "Offering type, e.g. 'NO_UPFRONT'",
      "enum": [
        "NO_UPFRONT"
      ]
    },
    "Output": {
      "type": "structure",
      "members": {
        "AudioDescriptionNames": {
          "shape": "__listOf__string",
          "locationName": "audioDescriptionNames",
          "documentation": "The names of the AudioDescriptions used as audio sources for this output."
        },
        "CaptionDescriptionNames": {
          "shape": "__listOf__string",
          "locationName": "captionDescriptionNames",
          "documentation": "The names of the CaptionDescriptions used as caption sources for this output."
        },
        "OutputName": {
          "shape": "__stringMin1Max255",
          "locationName": "outputName",
          "documentation": "The name used to identify an output."
        },
        "OutputSettings": {
          "shape": "OutputSettings",
          "locationName": "outputSettings",
          "documentation": "Output type-specific settings."
        },
        "VideoDescriptionName": {
          "shape": "__string",
          "locationName": "videoDescriptionName",
          "documentation": "The name of the VideoDescription used as the source for this output."
        }
      },
      "documentation": "Output settings. There can be multiple outputs within a group.",
      "required": [
        "OutputSettings"
      ]
    },
    "OutputDestination": {
      "type": "structure",
      "members": {
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "User-specified id. This is used in an output group or an output."
        },
        "Settings": {
          "shape": "__listOfOutputDestinationSettings",
          "locationName": "settings",
          "documentation": "Destination settings for output; one for each redundant encoder."
        }
      },
      "documentation": "Placeholder documentation for OutputDestination"
    },
    "OutputDestinationSettings": {
      "type": "structure",
      "members": {
        "PasswordParam": {
          "shape": "__string",
          "locationName": "passwordParam",
          "documentation": "key used to extract the password from EC2 Parameter store"
        },
        "StreamName": {
          "shape": "__string",
          "locationName": "streamName",
          "documentation": "Stream name for RTMP destinations (URLs of type rtmp://)"
        },
        "Url": {
          "shape": "__string",
          "locationName": "url",
          "documentation": "A URL specifying a destination"
        },
        "Username": {
          "shape": "__string",
          "locationName": "username",
          "documentation": "username for destination"
        }
      },
      "documentation": "Placeholder documentation for OutputDestinationSettings"
    },
    "OutputGroup": {
      "type": "structure",
      "members": {
        "Name": {
          "shape": "__stringMax32",
          "locationName": "name",
          "documentation": "Custom output group name optionally defined by the user.  Only letters, numbers, and the underscore character allowed; only 32 characters allowed."
        },
        "OutputGroupSettings": {
          "shape": "OutputGroupSettings",
          "locationName": "outputGroupSettings",
          "documentation": "Settings associated with the output group."
        },
        "Outputs": {
          "shape": "__listOfOutput",
          "locationName": "outputs"
        }
      },
      "documentation": "Output groups for this Live Event. Output groups contain information about where streams should be distributed.",
      "required": [
        "Outputs",
        "OutputGroupSettings"
      ]
    },
    "OutputGroupSettings": {
      "type": "structure",
      "members": {
        "ArchiveGroupSettings": {
          "shape": "ArchiveGroupSettings",
          "locationName": "archiveGroupSettings"
        },
        "HlsGroupSettings": {
          "shape": "HlsGroupSettings",
          "locationName": "hlsGroupSettings"
        },
        "MsSmoothGroupSettings": {
          "shape": "MsSmoothGroupSettings",
          "locationName": "msSmoothGroupSettings"
        },
        "RtmpGroupSettings": {
          "shape": "RtmpGroupSettings",
          "locationName": "rtmpGroupSettings"
        },
        "UdpGroupSettings": {
          "shape": "UdpGroupSettings",
          "locationName": "udpGroupSettings"
        }
      },
      "documentation": "Placeholder documentation for OutputGroupSettings"
    },
    "OutputLocationRef": {
      "type": "structure",
      "members": {
        "DestinationRefId": {
          "shape": "__string",
          "locationName": "destinationRefId"
        }
      },
      "documentation": "Reference to an OutputDestination ID defined in the channel"
    },
    "OutputSettings": {
      "type": "structure",
      "members": {
        "ArchiveOutputSettings": {
          "shape": "ArchiveOutputSettings",
          "locationName": "archiveOutputSettings"
        },
        "HlsOutputSettings": {
          "shape": "HlsOutputSettings",
          "locationName": "hlsOutputSettings"
        },
        "MsSmoothOutputSettings": {
          "shape": "MsSmoothOutputSettings",
          "locationName": "msSmoothOutputSettings"
        },
        "RtmpOutputSettings": {
          "shape": "RtmpOutputSettings",
          "locationName": "rtmpOutputSettings"
        },
        "UdpOutputSettings": {
          "shape": "UdpOutputSettings",
          "locationName": "udpOutputSettings"
        }
      },
      "documentation": "Placeholder documentation for OutputSettings"
    },
    "PassThroughSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for PassThroughSettings"
    },
    "PurchaseOffering": {
      "type": "structure",
      "members": {
        "Count": {
          "shape": "__integerMin1",
          "locationName": "count",
          "documentation": "Number of resources"
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name for the new reservation"
        },
        "RequestId": {
          "shape": "__string",
          "locationName": "requestId",
          "documentation": "Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.",
          "idempotencyToken": true
        }
      },
      "documentation": "PurchaseOffering request"
    },
    "PurchaseOfferingRequest": {
      "type": "structure",
      "members": {
        "Count": {
          "shape": "__integerMin1",
          "locationName": "count",
          "documentation": "Number of resources"
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name for the new reservation"
        },
        "OfferingId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "offeringId",
          "documentation": "Offering to purchase, e.g. '87654321'"
        },
        "RequestId": {
          "shape": "__string",
          "locationName": "requestId",
          "documentation": "Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.",
          "idempotencyToken": true
        }
      },
      "required": [
        "OfferingId"
      ],
      "documentation": "Placeholder documentation for PurchaseOfferingRequest"
    },
    "PurchaseOfferingResponse": {
      "type": "structure",
      "members": {
        "Reservation": {
          "shape": "Reservation",
          "locationName": "reservation"
        }
      },
      "documentation": "Placeholder documentation for PurchaseOfferingResponse"
    },
    "PurchaseOfferingResultModel": {
      "type": "structure",
      "members": {
        "Reservation": {
          "shape": "Reservation",
          "locationName": "reservation"
        }
      },
      "documentation": "PurchaseOffering response"
    },
    "RemixSettings": {
      "type": "structure",
      "members": {
        "ChannelMappings": {
          "shape": "__listOfAudioChannelMapping",
          "locationName": "channelMappings",
          "documentation": "Mapping of input channels to output channels, with appropriate gain adjustments."
        },
        "ChannelsIn": {
          "shape": "__integerMin1Max16",
          "locationName": "channelsIn",
          "documentation": "Number of input channels to be used."
        },
        "ChannelsOut": {
          "shape": "__integerMin1Max8",
          "locationName": "channelsOut",
          "documentation": "Number of output channels to be produced.\nValid values: 1, 2, 4, 6, 8"
        }
      },
      "required": [
        "ChannelMappings"
      ],
      "documentation": "Placeholder documentation for RemixSettings"
    },
    "Reservation": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'"
        },
        "Count": {
          "shape": "__integer",
          "locationName": "count",
          "documentation": "Number of reserved resources"
        },
        "CurrencyCode": {
          "shape": "__string",
          "locationName": "currencyCode",
          "documentation": "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'"
        },
        "Duration": {
          "shape": "__integer",
          "locationName": "duration",
          "documentation": "Lease duration, e.g. '12'"
        },
        "DurationUnits": {
          "shape": "OfferingDurationUnits",
          "locationName": "durationUnits",
          "documentation": "Units for duration, e.g. 'MONTHS'"
        },
        "End": {
          "shape": "__string",
          "locationName": "end",
          "documentation": "Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'"
        },
        "FixedPrice": {
          "shape": "__double",
          "locationName": "fixedPrice",
          "documentation": "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering"
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "User specified reservation name"
        },
        "OfferingDescription": {
          "shape": "__string",
          "locationName": "offeringDescription",
          "documentation": "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'"
        },
        "OfferingId": {
          "shape": "__string",
          "locationName": "offeringId",
          "documentation": "Unique offering ID, e.g. '87654321'"
        },
        "OfferingType": {
          "shape": "OfferingType",
          "locationName": "offeringType",
          "documentation": "Offering type, e.g. 'NO_UPFRONT'"
        },
        "Region": {
          "shape": "__string",
          "locationName": "region",
          "documentation": "AWS region, e.g. 'us-west-2'"
        },
        "ReservationId": {
          "shape": "__string",
          "locationName": "reservationId",
          "documentation": "Unique reservation ID, e.g. '1234567'"
        },
        "ResourceSpecification": {
          "shape": "ReservationResourceSpecification",
          "locationName": "resourceSpecification",
          "documentation": "Resource configuration details"
        },
        "Start": {
          "shape": "__string",
          "locationName": "start",
          "documentation": "Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'"
        },
        "State": {
          "shape": "ReservationState",
          "locationName": "state",
          "documentation": "Current state of reservation, e.g. 'ACTIVE'"
        },
        "UsagePrice": {
          "shape": "__double",
          "locationName": "usagePrice",
          "documentation": "Recurring usage charge for each reserved resource, e.g. '157.0'"
        }
      },
      "documentation": "Reserved resources available to use"
    },
    "ReservationCodec": {
      "type": "string",
      "documentation": "Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO'",
      "enum": [
        "MPEG2",
        "AVC",
        "HEVC",
        "AUDIO"
      ]
    },
    "ReservationMaximumBitrate": {
      "type": "string",
      "documentation": "Maximum bitrate in megabits per second",
      "enum": [
        "MAX_10_MBPS",
        "MAX_20_MBPS",
        "MAX_50_MBPS"
      ]
    },
    "ReservationMaximumFramerate": {
      "type": "string",
      "documentation": "Maximum framerate in frames per second (Outputs only)",
      "enum": [
        "MAX_30_FPS",
        "MAX_60_FPS"
      ]
    },
    "ReservationResolution": {
      "type": "string",
      "documentation": "Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines\n",
      "enum": [
        "SD",
        "HD",
        "UHD"
      ]
    },
    "ReservationResourceSpecification": {
      "type": "structure",
      "members": {
        "Codec": {
          "shape": "ReservationCodec",
          "locationName": "codec",
          "documentation": "Codec, e.g. 'AVC'"
        },
        "MaximumBitrate": {
          "shape": "ReservationMaximumBitrate",
          "locationName": "maximumBitrate",
          "documentation": "Maximum bitrate, e.g. 'MAX_20_MBPS'"
        },
        "MaximumFramerate": {
          "shape": "ReservationMaximumFramerate",
          "locationName": "maximumFramerate",
          "documentation": "Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)"
        },
        "Resolution": {
          "shape": "ReservationResolution",
          "locationName": "resolution",
          "documentation": "Resolution, e.g. 'HD'"
        },
        "ResourceType": {
          "shape": "ReservationResourceType",
          "locationName": "resourceType",
          "documentation": "Resource type, 'INPUT', 'OUTPUT', or 'CHANNEL'"
        },
        "SpecialFeature": {
          "shape": "ReservationSpecialFeature",
          "locationName": "specialFeature",
          "documentation": "Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)"
        },
        "VideoQuality": {
          "shape": "ReservationVideoQuality",
          "locationName": "videoQuality",
          "documentation": "Video quality, e.g. 'STANDARD' (Outputs only)"
        }
      },
      "documentation": "Resource configuration (codec, resolution, bitrate, ...)"
    },
    "ReservationResourceType": {
      "type": "string",
      "documentation": "Resource type, 'INPUT', 'OUTPUT', or 'CHANNEL'",
      "enum": [
        "INPUT",
        "OUTPUT",
        "CHANNEL"
      ]
    },
    "ReservationSpecialFeature": {
      "type": "string",
      "documentation": "Special features, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'",
      "enum": [
        "ADVANCED_AUDIO",
        "AUDIO_NORMALIZATION"
      ]
    },
    "ReservationState": {
      "type": "string",
      "documentation": "Current reservation state",
      "enum": [
        "ACTIVE",
        "EXPIRED",
        "CANCELED",
        "DELETED"
      ]
    },
    "ReservationVideoQuality": {
      "type": "string",
      "documentation": "Video quality, e.g. 'STANDARD' (Outputs only)",
      "enum": [
        "STANDARD",
        "ENHANCED",
        "PREMIUM"
      ]
    },
    "ResourceConflict": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "documentation": "Placeholder documentation for ResourceConflict"
    },
    "ResourceNotFound": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        }
      },
      "documentation": "Placeholder documentation for ResourceNotFound"
    },
    "RtmpCacheFullBehavior": {
      "type": "string",
      "enum": [
        "DISCONNECT_IMMEDIATELY",
        "WAIT_FOR_SERVER"
      ],
      "documentation": "Placeholder documentation for RtmpCacheFullBehavior"
    },
    "RtmpCaptionData": {
      "type": "string",
      "enum": [
        "ALL",
        "FIELD1_608",
        "FIELD1_AND_FIELD2_608"
      ],
      "documentation": "Placeholder documentation for RtmpCaptionData"
    },
    "RtmpCaptionInfoDestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for RtmpCaptionInfoDestinationSettings"
    },
    "RtmpGroupSettings": {
      "type": "structure",
      "members": {
        "AuthenticationScheme": {
          "shape": "AuthenticationScheme",
          "locationName": "authenticationScheme",
          "documentation": "Authentication scheme to use when connecting with CDN"
        },
        "CacheFullBehavior": {
          "shape": "RtmpCacheFullBehavior",
          "locationName": "cacheFullBehavior",
          "documentation": "Controls behavior when content cache fills up. If remote origin server stalls the RTMP connection and does not accept content fast enough the 'Media Cache' will fill up. When the cache reaches the duration specified by cacheLength the cache will stop accepting new content. If set to disconnectImmediately, the RTMP output will force a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output will wait up to 5 minutes to allow the origin server to begin accepting data again."
        },
        "CacheLength": {
          "shape": "__integerMin30",
          "locationName": "cacheLength",
          "documentation": "Cache length, in seconds, is used to calculate buffer size."
        },
        "CaptionData": {
          "shape": "RtmpCaptionData",
          "locationName": "captionData",
          "documentation": "Controls the types of data that passes to onCaptionInfo outputs.  If set to 'all' then 608 and 708 carried DTVCC data will be passed.  If set to 'field1AndField2608' then DTVCC data will be stripped out, but 608 data from both fields will be passed. If set to 'field1608' then only the data carried in 608 from field 1 video will be passed."
        },
        "RestartDelay": {
          "shape": "__integerMin0",
          "locationName": "restartDelay",
          "documentation": "If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart."
        }
      },
      "documentation": "Placeholder documentation for RtmpGroupSettings"
    },
    "RtmpOutputCertificateMode": {
      "type": "string",
      "enum": [
        "SELF_SIGNED",
        "VERIFY_AUTHENTICITY"
      ],
      "documentation": "Placeholder documentation for RtmpOutputCertificateMode"
    },
    "RtmpOutputSettings": {
      "type": "structure",
      "members": {
        "CertificateMode": {
          "shape": "RtmpOutputCertificateMode",
          "locationName": "certificateMode",
          "documentation": "If set to verifyAuthenticity, verify the tls certificate chain to a trusted Certificate Authority (CA).  This will cause rtmps outputs with self-signed certificates to fail."
        },
        "ConnectionRetryInterval": {
          "shape": "__integerMin1",
          "locationName": "connectionRetryInterval",
          "documentation": "Number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost."
        },
        "Destination": {
          "shape": "OutputLocationRef",
          "locationName": "destination",
          "documentation": "The RTMP endpoint excluding the stream name (eg. rtmp://host/appname). For connection to Akamai, a username and password must be supplied. URI fields accept format identifiers."
        },
        "NumRetries": {
          "shape": "__integerMin0",
          "locationName": "numRetries",
          "documentation": "Number of retry attempts."
        }
      },
      "required": [
        "Destination"
      ],
      "documentation": "Placeholder documentation for RtmpOutputSettings"
    },
    "ScheduleAction": {
      "type": "structure",
      "members": {
        "ActionName": {
          "shape": "__string",
          "locationName": "actionName",
          "documentation": "The name of the action, must be unique within the schedule."
        },
        "ScheduleActionSettings": {
          "shape": "ScheduleActionSettings",
          "locationName": "scheduleActionSettings",
          "documentation": "Settings for this schedule action."
        },
        "ScheduleActionStartSettings": {
          "shape": "ScheduleActionStartSettings",
          "locationName": "scheduleActionStartSettings",
          "documentation": "When the action takes effect."
        }
      },
      "documentation": "A single schedule action.",
      "required": [
        "ActionName",
        "ScheduleActionStartSettings",
        "ScheduleActionSettings"
      ]
    },
    "ScheduleActionSettings": {
      "type": "structure",
      "members": {
        "Scte35ReturnToNetworkSettings": {
          "shape": "Scte35ReturnToNetworkScheduleActionSettings",
          "locationName": "scte35ReturnToNetworkSettings",
          "documentation": "SCTE-35 Return to Network Settings"
        },
        "Scte35SpliceInsertSettings": {
          "shape": "Scte35SpliceInsertScheduleActionSettings",
          "locationName": "scte35SpliceInsertSettings",
          "documentation": "SCTE-35 Splice Insert Settings"
        },
        "Scte35TimeSignalSettings": {
          "shape": "Scte35TimeSignalScheduleActionSettings",
          "locationName": "scte35TimeSignalSettings",
          "documentation": "SCTE-35 Time Signal Settings"
        },
        "StaticImageActivateSettings": {
          "shape": "StaticImageActivateScheduleActionSettings",
          "locationName": "staticImageActivateSettings",
          "documentation": "Static Image Activate"
        },
        "StaticImageDeactivateSettings": {
          "shape": "StaticImageDeactivateScheduleActionSettings",
          "locationName": "staticImageDeactivateSettings",
          "documentation": "Static Image Deactivate"
        }
      },
      "documentation": "Settings for a single schedule action."
    },
    "ScheduleActionStartSettings": {
      "type": "structure",
      "members": {
        "FixedModeScheduleActionStartSettings": {
          "shape": "FixedModeScheduleActionStartSettings",
          "locationName": "fixedModeScheduleActionStartSettings",
          "documentation": "Fixed timestamp action start. Conforms to ISO-8601."
        }
      },
      "documentation": "When the schedule action starts."
    },
    "ScheduleDescribeResultModel": {
      "type": "structure",
      "members": {
        "NextToken": {
          "shape": "__string",
          "locationName": "nextToken",
          "documentation": "The next token; for use in pagination."
        },
        "ScheduleActions": {
          "shape": "__listOfScheduleAction",
          "locationName": "scheduleActions",
          "documentation": "The list of schedule actions."
        }
      },
      "documentation": "A complete schedule description.",
      "required": [
        "ScheduleActions"
      ]
    },
    "Scte20Convert608To708": {
      "type": "string",
      "enum": [
        "DISABLED",
        "UPCONVERT"
      ],
      "documentation": "Placeholder documentation for Scte20Convert608To708"
    },
    "Scte20PlusEmbeddedDestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for Scte20PlusEmbeddedDestinationSettings"
    },
    "Scte20SourceSettings": {
      "type": "structure",
      "members": {
        "Convert608To708": {
          "shape": "Scte20Convert608To708",
          "locationName": "convert608To708",
          "documentation": "If upconvert, 608 data is both passed through via the \"608 compatibility bytes\" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded."
        },
        "Source608ChannelNumber": {
          "shape": "__integerMin1Max4",
          "locationName": "source608ChannelNumber",
          "documentation": "Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough."
        }
      },
      "documentation": "Placeholder documentation for Scte20SourceSettings"
    },
    "Scte27DestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for Scte27DestinationSettings"
    },
    "Scte27SourceSettings": {
      "type": "structure",
      "members": {
        "Pid": {
          "shape": "__integerMin1",
          "locationName": "pid",
          "documentation": "The pid field is used in conjunction with the caption selector languageCode field as follows:\n  - Specify PID and Language: Extracts captions from that PID; the language is \"informational\".\n  - Specify PID and omit Language: Extracts the specified PID.\n  - Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be.\n  - Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages will be passed through."
        }
      },
      "documentation": "Placeholder documentation for Scte27SourceSettings"
    },
    "Scte35AposNoRegionalBlackoutBehavior": {
      "type": "string",
      "enum": [
        "FOLLOW",
        "IGNORE"
      ],
      "documentation": "Placeholder documentation for Scte35AposNoRegionalBlackoutBehavior"
    },
    "Scte35AposWebDeliveryAllowedBehavior": {
      "type": "string",
      "enum": [
        "FOLLOW",
        "IGNORE"
      ],
      "documentation": "Placeholder documentation for Scte35AposWebDeliveryAllowedBehavior"
    },
    "Scte35ArchiveAllowedFlag": {
      "type": "string",
      "documentation": "SCTE-35 segmentation_descriptor archive_allowed_flag.",
      "enum": [
        "ARCHIVE_NOT_ALLOWED",
        "ARCHIVE_ALLOWED"
      ]
    },
    "Scte35DeliveryRestrictions": {
      "type": "structure",
      "members": {
        "ArchiveAllowedFlag": {
          "shape": "Scte35ArchiveAllowedFlag",
          "locationName": "archiveAllowedFlag",
          "documentation": "SCTE-35 segmentation_descriptor archive_allowed_flag."
        },
        "DeviceRestrictions": {
          "shape": "Scte35DeviceRestrictions",
          "locationName": "deviceRestrictions",
          "documentation": "SCTE-35 segmentation_descriptor web_delivery_allowed_flag."
        },
        "NoRegionalBlackoutFlag": {
          "shape": "Scte35NoRegionalBlackoutFlag",
          "locationName": "noRegionalBlackoutFlag",
          "documentation": "SCTE-35 segmentation_descriptor no_regional_blackout_flag."
        },
        "WebDeliveryAllowedFlag": {
          "shape": "Scte35WebDeliveryAllowedFlag",
          "locationName": "webDeliveryAllowedFlag",
          "documentation": "SCTE-35 segmentation_descriptor web_delivery_allowed_flag."
        }
      },
      "documentation": "SCTE-35 Delivery Restrictions.",
      "required": [
        "DeviceRestrictions",
        "ArchiveAllowedFlag",
        "WebDeliveryAllowedFlag",
        "NoRegionalBlackoutFlag"
      ]
    },
    "Scte35Descriptor": {
      "type": "structure",
      "members": {
        "Scte35DescriptorSettings": {
          "shape": "Scte35DescriptorSettings",
          "locationName": "scte35DescriptorSettings",
          "documentation": "SCTE-35 Descriptor Settings."
        }
      },
      "documentation": "SCTE-35 Descriptor.",
      "required": [
        "Scte35DescriptorSettings"
      ]
    },
    "Scte35DescriptorSettings": {
      "type": "structure",
      "members": {
        "SegmentationDescriptorScte35DescriptorSettings": {
          "shape": "Scte35SegmentationDescriptor",
          "locationName": "segmentationDescriptorScte35DescriptorSettings",
          "documentation": "SCTE-35 Segmentation Descriptor."
        }
      },
      "documentation": "SCTE-35 Descriptor settings.",
      "required": [
        "SegmentationDescriptorScte35DescriptorSettings"
      ]
    },
    "Scte35DeviceRestrictions": {
      "type": "string",
      "documentation": "SCTE-35 Device Restrictions.",
      "enum": [
        "NONE",
        "RESTRICT_GROUP0",
        "RESTRICT_GROUP1",
        "RESTRICT_GROUP2"
      ]
    },
    "Scte35NoRegionalBlackoutFlag": {
      "type": "string",
      "documentation": "SCTE-35 segmentation_descriptor no_regional_blackout_flag.",
      "enum": [
        "REGIONAL_BLACKOUT",
        "NO_REGIONAL_BLACKOUT"
      ]
    },
    "Scte35ReturnToNetworkScheduleActionSettings": {
      "type": "structure",
      "members": {
        "SpliceEventId": {
          "shape": "__integerMin0Max4294967295",
          "locationName": "spliceEventId",
          "documentation": "The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35."
        }
      },
      "documentation": "SCTE-35 Return to Network Settings.",
      "required": [
        "SpliceEventId"
      ]
    },
    "Scte35SegmentationCancelIndicator": {
      "type": "string",
      "documentation": "SCTE-35 segmentation_descriptor segmentation_event_cancel_indicator.",
      "enum": [
        "SEGMENTATION_EVENT_NOT_CANCELED",
        "SEGMENTATION_EVENT_CANCELED"
      ]
    },
    "Scte35SegmentationDescriptor": {
      "type": "structure",
      "members": {
        "DeliveryRestrictions": {
          "shape": "Scte35DeliveryRestrictions",
          "locationName": "deliveryRestrictions",
          "documentation": "SCTE-35 delivery restrictions."
        },
        "SegmentNum": {
          "shape": "__integerMin0Max255",
          "locationName": "segmentNum",
          "documentation": "SCTE-35 segmentation_descriptor segment_num."
        },
        "SegmentationCancelIndicator": {
          "shape": "Scte35SegmentationCancelIndicator",
          "locationName": "segmentationCancelIndicator",
          "documentation": "SCTE-35 segmentation_descriptor segmentation_event_cancel_indicator."
        },
        "SegmentationDuration": {
          "shape": "__integerMin0Max1099511627775",
          "locationName": "segmentationDuration",
          "documentation": "SCTE-35 segmentation_descriptor segmentation_duration specified in 90 KHz clock ticks."
        },
        "SegmentationEventId": {
          "shape": "__integerMin0Max4294967295",
          "locationName": "segmentationEventId",
          "documentation": "SCTE-35 segmentation_descriptor segmentation_event_id."
        },
        "SegmentationTypeId": {
          "shape": "__integerMin0Max255",
          "locationName": "segmentationTypeId",
          "documentation": "SCTE-35 segmentation_descriptor segmentation_type_id."
        },
        "SegmentationUpid": {
          "shape": "__string",
          "locationName": "segmentationUpid",
          "documentation": "SCTE-35 segmentation_descriptor segmentation_upid as a hex string."
        },
        "SegmentationUpidType": {
          "shape": "__integerMin0Max255",
          "locationName": "segmentationUpidType",
          "documentation": "SCTE-35 segmentation_descriptor segmentation_upid_type."
        },
        "SegmentsExpected": {
          "shape": "__integerMin0Max255",
          "locationName": "segmentsExpected",
          "documentation": "SCTE-35 segmentation_descriptor segments_expected."
        },
        "SubSegmentNum": {
          "shape": "__integerMin0Max255",
          "locationName": "subSegmentNum",
          "documentation": "SCTE-35 segmentation_descriptor sub_segment_num."
        },
        "SubSegmentsExpected": {
          "shape": "__integerMin0Max255",
          "locationName": "subSegmentsExpected",
          "documentation": "SCTE-35 segmentation_descriptor sub_segments_expected."
        }
      },
      "documentation": "SCTE-35 Segmentation Descriptor.",
      "required": [
        "SegmentationEventId",
        "SegmentationCancelIndicator"
      ]
    },
    "Scte35SpliceInsert": {
      "type": "structure",
      "members": {
        "AdAvailOffset": {
          "shape": "__integerMinNegative1000Max1000",
          "locationName": "adAvailOffset",
          "documentation": "When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages."
        },
        "NoRegionalBlackoutFlag": {
          "shape": "Scte35SpliceInsertNoRegionalBlackoutBehavior",
          "locationName": "noRegionalBlackoutFlag",
          "documentation": "When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates"
        },
        "WebDeliveryAllowedFlag": {
          "shape": "Scte35SpliceInsertWebDeliveryAllowedBehavior",
          "locationName": "webDeliveryAllowedFlag",
          "documentation": "When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates"
        }
      },
      "documentation": "Placeholder documentation for Scte35SpliceInsert"
    },
    "Scte35SpliceInsertNoRegionalBlackoutBehavior": {
      "type": "string",
      "enum": [
        "FOLLOW",
        "IGNORE"
      ],
      "documentation": "Placeholder documentation for Scte35SpliceInsertNoRegionalBlackoutBehavior"
    },
    "Scte35SpliceInsertScheduleActionSettings": {
      "type": "structure",
      "members": {
        "Duration": {
          "shape": "__integerMin0Max8589934591",
          "locationName": "duration",
          "documentation": "The duration for the SCTE-35 splice_insert specified in 90KHz clock ticks. When duration is not specified the expectation is that a Scte35ReturnToNetwork action will be scheduled."
        },
        "SpliceEventId": {
          "shape": "__integerMin0Max4294967295",
          "locationName": "spliceEventId",
          "documentation": "The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35."
        }
      },
      "documentation": "SCTE-35 Splice Insert Settings.",
      "required": [
        "SpliceEventId"
      ]
    },
    "Scte35SpliceInsertWebDeliveryAllowedBehavior": {
      "type": "string",
      "enum": [
        "FOLLOW",
        "IGNORE"
      ],
      "documentation": "Placeholder documentation for Scte35SpliceInsertWebDeliveryAllowedBehavior"
    },
    "Scte35TimeSignalApos": {
      "type": "structure",
      "members": {
        "AdAvailOffset": {
          "shape": "__integerMinNegative1000Max1000",
          "locationName": "adAvailOffset",
          "documentation": "When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages."
        },
        "NoRegionalBlackoutFlag": {
          "shape": "Scte35AposNoRegionalBlackoutBehavior",
          "locationName": "noRegionalBlackoutFlag",
          "documentation": "When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates"
        },
        "WebDeliveryAllowedFlag": {
          "shape": "Scte35AposWebDeliveryAllowedBehavior",
          "locationName": "webDeliveryAllowedFlag",
          "documentation": "When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates"
        }
      },
      "documentation": "Placeholder documentation for Scte35TimeSignalApos"
    },
    "Scte35TimeSignalScheduleActionSettings": {
      "type": "structure",
      "members": {
        "Scte35Descriptors": {
          "shape": "__listOfScte35Descriptor",
          "locationName": "scte35Descriptors",
          "documentation": "The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal."
        }
      },
      "documentation": "SCTE-35 Time Signal Settings.",
      "required": [
        "Scte35Descriptors"
      ]
    },
    "Scte35WebDeliveryAllowedFlag": {
      "type": "string",
      "documentation": "SCTE-35 segmentation_descriptor web_delivery_allowed_flag.",
      "enum": [
        "WEB_DELIVERY_NOT_ALLOWED",
        "WEB_DELIVERY_ALLOWED"
      ]
    },
    "SmoothGroupAudioOnlyTimecodeControl": {
      "type": "string",
      "enum": [
        "PASSTHROUGH",
        "USE_CONFIGURED_CLOCK"
      ],
      "documentation": "Placeholder documentation for SmoothGroupAudioOnlyTimecodeControl"
    },
    "SmoothGroupCertificateMode": {
      "type": "string",
      "enum": [
        "SELF_SIGNED",
        "VERIFY_AUTHENTICITY"
      ],
      "documentation": "Placeholder documentation for SmoothGroupCertificateMode"
    },
    "SmoothGroupEventIdMode": {
      "type": "string",
      "enum": [
        "NO_EVENT_ID",
        "USE_CONFIGURED",
        "USE_TIMESTAMP"
      ],
      "documentation": "Placeholder documentation for SmoothGroupEventIdMode"
    },
    "SmoothGroupEventStopBehavior": {
      "type": "string",
      "enum": [
        "NONE",
        "SEND_EOS"
      ],
      "documentation": "Placeholder documentation for SmoothGroupEventStopBehavior"
    },
    "SmoothGroupSegmentationMode": {
      "type": "string",
      "enum": [
        "USE_INPUT_SEGMENTATION",
        "USE_SEGMENT_DURATION"
      ],
      "documentation": "Placeholder documentation for SmoothGroupSegmentationMode"
    },
    "SmoothGroupSparseTrackType": {
      "type": "string",
      "enum": [
        "NONE",
        "SCTE_35"
      ],
      "documentation": "Placeholder documentation for SmoothGroupSparseTrackType"
    },
    "SmoothGroupStreamManifestBehavior": {
      "type": "string",
      "enum": [
        "DO_NOT_SEND",
        "SEND"
      ],
      "documentation": "Placeholder documentation for SmoothGroupStreamManifestBehavior"
    },
    "SmoothGroupTimestampOffsetMode": {
      "type": "string",
      "enum": [
        "USE_CONFIGURED_OFFSET",
        "USE_EVENT_START_DATE"
      ],
      "documentation": "Placeholder documentation for SmoothGroupTimestampOffsetMode"
    },
    "SmpteTtDestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for SmpteTtDestinationSettings"
    },
    "StandardHlsSettings": {
      "type": "structure",
      "members": {
        "AudioRenditionSets": {
          "shape": "__string",
          "locationName": "audioRenditionSets",
          "documentation": "List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','."
        },
        "M3u8Settings": {
          "shape": "M3u8Settings",
          "locationName": "m3u8Settings"
        }
      },
      "required": [
        "M3u8Settings"
      ],
      "documentation": "Placeholder documentation for StandardHlsSettings"
    },
    "StartChannelRequest": {
      "type": "structure",
      "members": {
        "ChannelId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "channelId",
          "documentation": "A request to start a channel"
        }
      },
      "required": [
        "ChannelId"
      ],
      "documentation": "Placeholder documentation for StartChannelRequest"
    },
    "StartChannelResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The unique arn of the channel."
        },
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations",
          "documentation": "A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n"
        },
        "EgressEndpoints": {
          "shape": "__listOfChannelEgressEndpoint",
          "locationName": "egressEndpoints",
          "documentation": "The endpoints where outgoing connections initiate from"
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The unique id of the channel."
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments",
          "documentation": "List of input attachments for channel."
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level being written to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the channel. (user-mutable)"
        },
        "PipelinesRunningCount": {
          "shape": "__integer",
          "locationName": "pipelinesRunningCount",
          "documentation": "The number of currently healthy pipelines."
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "The Amazon Resource Name (ARN) of the role assumed when running the Channel."
        },
        "State": {
          "shape": "ChannelState",
          "locationName": "state"
        }
      },
      "documentation": "Placeholder documentation for StartChannelResponse"
    },
    "StaticImageActivateScheduleActionSettings": {
      "type": "structure",
      "members": {
        "Duration": {
          "shape": "__integerMin0",
          "locationName": "duration",
          "documentation": "The duration in milliseconds for the image to remain in the video. If omitted or set to 0, duration is infinite and image will remain until explicitly deactivated."
        },
        "FadeIn": {
          "shape": "__integerMin0",
          "locationName": "fadeIn",
          "documentation": "The time in milliseconds for the image to fade in. Defaults to 0."
        },
        "FadeOut": {
          "shape": "__integerMin0",
          "locationName": "fadeOut",
          "documentation": "The time in milliseconds for the image to fade out. Defaults to 0."
        },
        "Height": {
          "shape": "__integerMin1",
          "locationName": "height",
          "documentation": "The height of the image when inserted into the video.  Defaults to the native height of the image."
        },
        "Image": {
          "shape": "InputLocation",
          "locationName": "image",
          "documentation": "The image to overlay on the video.  Must be a 32 bit BMP, PNG, or TGA file.  Must not be larger than the input video."
        },
        "ImageX": {
          "shape": "__integerMin0",
          "locationName": "imageX",
          "documentation": "Placement of the left edge of the image on the horizontal axis in pixels. 0 is the left edge of the frame. Defaults to 0."
        },
        "ImageY": {
          "shape": "__integerMin0",
          "locationName": "imageY",
          "documentation": "Placement of the top edge of the image on the vertical axis in pixels.  0 is the top edge of the frame. Defaults to 0."
        },
        "Layer": {
          "shape": "__integerMin0Max7",
          "locationName": "layer",
          "documentation": "The Z order of the inserted image.  Images with higher layer values will be inserted on top of images with lower layer values. Permitted values are 0-7 inclusive. Defaults to 0."
        },
        "Opacity": {
          "shape": "__integerMin0Max100",
          "locationName": "opacity",
          "documentation": "Opacity of image where 0 is transparent and 100 is fully opaque. Defaults to 100."
        },
        "Width": {
          "shape": "__integerMin1",
          "locationName": "width",
          "documentation": "The width of the image when inserted into the video.  Defaults to the native width of the image."
        }
      },
      "documentation": "Static image activate.",
      "required": [
        "Image"
      ]
    },
    "StaticImageDeactivateScheduleActionSettings": {
      "type": "structure",
      "members": {
        "FadeOut": {
          "shape": "__integerMin0",
          "locationName": "fadeOut",
          "documentation": "The time in milliseconds for the image to fade out. Defaults to 0."
        },
        "Layer": {
          "shape": "__integerMin0Max7",
          "locationName": "layer",
          "documentation": "The Z order of the inserted image.  Images with higher layer values will be inserted on top of images with lower layer values. Permitted values are 0-7 inclusive. Defaults to 0."
        }
      },
      "documentation": "Static image deactivate."
    },
    "StaticKeySettings": {
      "type": "structure",
      "members": {
        "KeyProviderServer": {
          "shape": "InputLocation",
          "locationName": "keyProviderServer",
          "documentation": "The URL of the license server used for protecting content."
        },
        "StaticKeyValue": {
          "shape": "__stringMin32Max32",
          "locationName": "staticKeyValue",
          "documentation": "Static key value as a 32 character hexadecimal string."
        }
      },
      "required": [
        "StaticKeyValue"
      ],
      "documentation": "Placeholder documentation for StaticKeySettings"
    },
    "StopChannelRequest": {
      "type": "structure",
      "members": {
        "ChannelId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "channelId",
          "documentation": "A request to stop a running channel"
        }
      },
      "required": [
        "ChannelId"
      ],
      "documentation": "Placeholder documentation for StopChannelRequest"
    },
    "StopChannelResponse": {
      "type": "structure",
      "members": {
        "Arn": {
          "shape": "__string",
          "locationName": "arn",
          "documentation": "The unique arn of the channel."
        },
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations",
          "documentation": "A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n"
        },
        "EgressEndpoints": {
          "shape": "__listOfChannelEgressEndpoint",
          "locationName": "egressEndpoints",
          "documentation": "The endpoints where outgoing connections initiate from"
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings"
        },
        "Id": {
          "shape": "__string",
          "locationName": "id",
          "documentation": "The unique id of the channel."
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments",
          "documentation": "List of input attachments for channel."
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level being written to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the channel. (user-mutable)"
        },
        "PipelinesRunningCount": {
          "shape": "__integer",
          "locationName": "pipelinesRunningCount",
          "documentation": "The number of currently healthy pipelines."
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "The Amazon Resource Name (ARN) of the role assumed when running the Channel."
        },
        "State": {
          "shape": "ChannelState",
          "locationName": "state"
        }
      },
      "documentation": "Placeholder documentation for StopChannelResponse"
    },
    "TeletextDestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for TeletextDestinationSettings"
    },
    "TeletextSourceSettings": {
      "type": "structure",
      "members": {
        "PageNumber": {
          "shape": "__string",
          "locationName": "pageNumber",
          "documentation": "Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no \"0x\" prefix."
        }
      },
      "documentation": "Placeholder documentation for TeletextSourceSettings"
    },
    "TimecodeConfig": {
      "type": "structure",
      "members": {
        "Source": {
          "shape": "TimecodeConfigSource",
          "locationName": "source",
          "documentation": "Identifies the source for the timecode that will be associated with the events outputs.\n-Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using \"Start at 0\" (zerobased).\n-System Clock (systemclock): Use the UTC time.\n-Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00."
        },
        "SyncThreshold": {
          "shape": "__integerMin1Max1000000",
          "locationName": "syncThreshold",
          "documentation": "Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified."
        }
      },
      "required": [
        "Source"
      ],
      "documentation": "Placeholder documentation for TimecodeConfig"
    },
    "TimecodeConfigSource": {
      "type": "string",
      "enum": [
        "EMBEDDED",
        "SYSTEMCLOCK",
        "ZEROBASED"
      ],
      "documentation": "Placeholder documentation for TimecodeConfigSource"
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
      "documentation": "Placeholder documentation for TooManyRequestsException"
    },
    "TtmlDestinationSettings": {
      "type": "structure",
      "members": {
        "StyleControl": {
          "shape": "TtmlDestinationStyleControl",
          "locationName": "styleControl",
          "documentation": "When set to passthrough, passes through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output."
        }
      },
      "documentation": "Placeholder documentation for TtmlDestinationSettings"
    },
    "TtmlDestinationStyleControl": {
      "type": "string",
      "enum": [
        "PASSTHROUGH",
        "USE_CONFIGURED"
      ],
      "documentation": "Placeholder documentation for TtmlDestinationStyleControl"
    },
    "UdpContainerSettings": {
      "type": "structure",
      "members": {
        "M2tsSettings": {
          "shape": "M2tsSettings",
          "locationName": "m2tsSettings"
        }
      },
      "documentation": "Placeholder documentation for UdpContainerSettings"
    },
    "UdpGroupSettings": {
      "type": "structure",
      "members": {
        "InputLossAction": {
          "shape": "InputLossActionForUdpOut",
          "locationName": "inputLossAction",
          "documentation": "Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video."
        },
        "TimedMetadataId3Frame": {
          "shape": "UdpTimedMetadataId3Frame",
          "locationName": "timedMetadataId3Frame",
          "documentation": "Indicates ID3 frame that has the timecode."
        },
        "TimedMetadataId3Period": {
          "shape": "__integerMin0",
          "locationName": "timedMetadataId3Period",
          "documentation": "Timed Metadata interval in seconds."
        }
      },
      "documentation": "Placeholder documentation for UdpGroupSettings"
    },
    "UdpOutputSettings": {
      "type": "structure",
      "members": {
        "BufferMsec": {
          "shape": "__integerMin0Max10000",
          "locationName": "bufferMsec",
          "documentation": "UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, etc."
        },
        "ContainerSettings": {
          "shape": "UdpContainerSettings",
          "locationName": "containerSettings"
        },
        "Destination": {
          "shape": "OutputLocationRef",
          "locationName": "destination",
          "documentation": "Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002)."
        },
        "FecOutputSettings": {
          "shape": "FecOutputSettings",
          "locationName": "fecOutputSettings",
          "documentation": "Settings for enabling and adjusting Forward Error Correction on UDP outputs."
        }
      },
      "required": [
        "Destination",
        "ContainerSettings"
      ],
      "documentation": "Placeholder documentation for UdpOutputSettings"
    },
    "UdpTimedMetadataId3Frame": {
      "type": "string",
      "enum": [
        "NONE",
        "PRIV",
        "TDRL"
      ],
      "documentation": "Placeholder documentation for UdpTimedMetadataId3Frame"
    },
    "UnprocessableEntityException": {
      "type": "structure",
      "members": {
        "Message": {
          "shape": "__string",
          "locationName": "message"
        },
        "ValidationErrors": {
          "shape": "__listOfValidationError",
          "locationName": "validationErrors",
          "documentation": "A collection of validation error responses."
        }
      },
      "exception": true,
      "error": {
        "httpStatusCode": 422
      },
      "documentation": "Placeholder documentation for UnprocessableEntityException"
    },
    "UpdateChannel": {
      "type": "structure",
      "members": {
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations",
          "documentation": "A list of output destinations for this channel."
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings",
          "documentation": "The encoder settings for this channel."
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments"
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification",
          "documentation": "Specification of input for this channel (max. bitrate, resolution, codec, etc.)"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level to write to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the channel."
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed."
        }
      },
      "documentation": "Placeholder documentation for UpdateChannel"
    },
    "UpdateChannelRequest": {
      "type": "structure",
      "members": {
        "ChannelId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "channelId",
          "documentation": "channel ID"
        },
        "Destinations": {
          "shape": "__listOfOutputDestination",
          "locationName": "destinations",
          "documentation": "A list of output destinations for this channel."
        },
        "EncoderSettings": {
          "shape": "EncoderSettings",
          "locationName": "encoderSettings",
          "documentation": "The encoder settings for this channel."
        },
        "InputAttachments": {
          "shape": "__listOfInputAttachment",
          "locationName": "inputAttachments"
        },
        "InputSpecification": {
          "shape": "InputSpecification",
          "locationName": "inputSpecification",
          "documentation": "Specification of input for this channel (max. bitrate, resolution, codec, etc.)"
        },
        "LogLevel": {
          "shape": "LogLevel",
          "locationName": "logLevel",
          "documentation": "The log level to write to CloudWatch Logs."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of the channel."
        },
        "RoleArn": {
          "shape": "__string",
          "locationName": "roleArn",
          "documentation": "An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed."
        }
      },
      "documentation": "A request to update a channel.",
      "required": [
        "ChannelId"
      ]
    },
    "UpdateChannelResponse": {
      "type": "structure",
      "members": {
        "Channel": {
          "shape": "Channel",
          "locationName": "channel"
        }
      },
      "documentation": "Placeholder documentation for UpdateChannelResponse"
    },
    "UpdateChannelResultModel": {
      "type": "structure",
      "members": {
        "Channel": {
          "shape": "Channel",
          "locationName": "channel"
        }
      },
      "documentation": "The updated channel's description."
    },
    "UpdateInput": {
      "type": "structure",
      "members": {
        "Destinations": {
          "shape": "__listOfInputDestinationRequest",
          "locationName": "destinations",
          "documentation": "Destination settings for PUSH type inputs."
        },
        "InputSecurityGroups": {
          "shape": "__listOf__string",
          "locationName": "inputSecurityGroups",
          "documentation": "A list of security groups referenced by IDs to attach to the input."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name of the input."
        },
        "Sources": {
          "shape": "__listOfInputSourceRequest",
          "locationName": "sources",
          "documentation": "The source URLs for a PULL-type input. Every PULL type input needs\nexactly two source URLs for redundancy.\nOnly specify sources for PULL type Inputs. Leave Destinations empty.\n"
        }
      },
      "documentation": "Placeholder documentation for UpdateInput"
    },
    "UpdateInputRequest": {
      "type": "structure",
      "members": {
        "Destinations": {
          "shape": "__listOfInputDestinationRequest",
          "locationName": "destinations",
          "documentation": "Destination settings for PUSH type inputs."
        },
        "InputId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "inputId",
          "documentation": "Unique ID of the input."
        },
        "InputSecurityGroups": {
          "shape": "__listOf__string",
          "locationName": "inputSecurityGroups",
          "documentation": "A list of security groups referenced by IDs to attach to the input."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "Name of the input."
        },
        "Sources": {
          "shape": "__listOfInputSourceRequest",
          "locationName": "sources",
          "documentation": "The source URLs for a PULL-type input. Every PULL type input needs\nexactly two source URLs for redundancy.\nOnly specify sources for PULL type Inputs. Leave Destinations empty.\n"
        }
      },
      "documentation": "A request to update an input.",
      "required": [
        "InputId"
      ]
    },
    "UpdateInputResponse": {
      "type": "structure",
      "members": {
        "Input": {
          "shape": "Input",
          "locationName": "input"
        }
      },
      "documentation": "Placeholder documentation for UpdateInputResponse"
    },
    "UpdateInputResultModel": {
      "type": "structure",
      "members": {
        "Input": {
          "shape": "Input",
          "locationName": "input"
        }
      },
      "documentation": "Placeholder documentation for UpdateInputResultModel"
    },
    "UpdateInputSecurityGroupRequest": {
      "type": "structure",
      "members": {
        "InputSecurityGroupId": {
          "shape": "__string",
          "location": "uri",
          "locationName": "inputSecurityGroupId",
          "documentation": "The id of the Input Security Group to update."
        },
        "WhitelistRules": {
          "shape": "__listOfInputWhitelistRuleCidr",
          "locationName": "whitelistRules",
          "documentation": "List of IPv4 CIDR addresses to whitelist"
        }
      },
      "documentation": "The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.",
      "required": [
        "InputSecurityGroupId"
      ]
    },
    "UpdateInputSecurityGroupResponse": {
      "type": "structure",
      "members": {
        "SecurityGroup": {
          "shape": "InputSecurityGroup",
          "locationName": "securityGroup"
        }
      },
      "documentation": "Placeholder documentation for UpdateInputSecurityGroupResponse"
    },
    "UpdateInputSecurityGroupResultModel": {
      "type": "structure",
      "members": {
        "SecurityGroup": {
          "shape": "InputSecurityGroup",
          "locationName": "securityGroup"
        }
      },
      "documentation": "Placeholder documentation for UpdateInputSecurityGroupResultModel"
    },
    "ValidationError": {
      "type": "structure",
      "members": {
        "ElementPath": {
          "shape": "__string",
          "locationName": "elementPath"
        },
        "ErrorMessage": {
          "shape": "__string",
          "locationName": "errorMessage"
        }
      },
      "documentation": "Placeholder documentation for ValidationError"
    },
    "VideoCodecSettings": {
      "type": "structure",
      "members": {
        "H264Settings": {
          "shape": "H264Settings",
          "locationName": "h264Settings"
        }
      },
      "documentation": "Placeholder documentation for VideoCodecSettings"
    },
    "VideoDescription": {
      "type": "structure",
      "members": {
        "CodecSettings": {
          "shape": "VideoCodecSettings",
          "locationName": "codecSettings",
          "documentation": "Video codec settings."
        },
        "Height": {
          "shape": "__integer",
          "locationName": "height",
          "documentation": "Output video height (in pixels). Leave blank to use source video height. If left blank, width must also be unspecified."
        },
        "Name": {
          "shape": "__string",
          "locationName": "name",
          "documentation": "The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event."
        },
        "RespondToAfd": {
          "shape": "VideoDescriptionRespondToAfd",
          "locationName": "respondToAfd",
          "documentation": "Indicates how to respond to the AFD values in the input stream. Setting to \"respond\" causes input video to be clipped, depending on AFD value, input display aspect ratio and output display aspect ratio."
        },
        "ScalingBehavior": {
          "shape": "VideoDescriptionScalingBehavior",
          "locationName": "scalingBehavior",
          "documentation": "When set to \"stretchToOutput\", automatically configures the output position to stretch the video to the specified output resolution. This option will override any position value."
        },
        "Sharpness": {
          "shape": "__integerMin0Max100",
          "locationName": "sharpness",
          "documentation": "Changes the width of the anti-alias filter kernel used for scaling. Only applies if scaling is being performed and antiAlias is set to true. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content."
        },
        "Width": {
          "shape": "__integer",
          "locationName": "width",
          "documentation": "Output video width (in pixels). Leave out to use source video width.  If left out, height must also be left out. Display aspect ratio is always preserved by letterboxing or pillarboxing when necessary."
        }
      },
      "documentation": "Video settings for this stream.",
      "required": [
        "Name"
      ]
    },
    "VideoDescriptionRespondToAfd": {
      "type": "string",
      "enum": [
        "NONE",
        "PASSTHROUGH",
        "RESPOND"
      ],
      "documentation": "Placeholder documentation for VideoDescriptionRespondToAfd"
    },
    "VideoDescriptionScalingBehavior": {
      "type": "string",
      "enum": [
        "DEFAULT",
        "STRETCH_TO_OUTPUT"
      ],
      "documentation": "Placeholder documentation for VideoDescriptionScalingBehavior"
    },
    "VideoSelector": {
      "type": "structure",
      "members": {
        "ColorSpace": {
          "shape": "VideoSelectorColorSpace",
          "locationName": "colorSpace",
          "documentation": "Specifies the colorspace of an input. This setting works in tandem with colorSpaceConversion to determine if any conversion will be performed."
        },
        "ColorSpaceUsage": {
          "shape": "VideoSelectorColorSpaceUsage",
          "locationName": "colorSpaceUsage",
          "documentation": "Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data."
        },
        "SelectorSettings": {
          "shape": "VideoSelectorSettings",
          "locationName": "selectorSettings",
          "documentation": "The video selector settings."
        }
      },
      "documentation": "Specifies a particular video stream within an input source. An input may have only a single video selector."
    },
    "VideoSelectorColorSpace": {
      "type": "string",
      "enum": [
        "FOLLOW",
        "REC_601",
        "REC_709"
      ],
      "documentation": "Placeholder documentation for VideoSelectorColorSpace"
    },
    "VideoSelectorColorSpaceUsage": {
      "type": "string",
      "enum": [
        "FALLBACK",
        "FORCE"
      ],
      "documentation": "Placeholder documentation for VideoSelectorColorSpaceUsage"
    },
    "VideoSelectorPid": {
      "type": "structure",
      "members": {
        "Pid": {
          "shape": "__integerMin0Max8191",
          "locationName": "pid",
          "documentation": "Selects a specific PID from within a video source."
        }
      },
      "documentation": "Placeholder documentation for VideoSelectorPid"
    },
    "VideoSelectorProgramId": {
      "type": "structure",
      "members": {
        "ProgramId": {
          "shape": "__integerMin0Max65536",
          "locationName": "programId",
          "documentation": "Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default."
        }
      },
      "documentation": "Placeholder documentation for VideoSelectorProgramId"
    },
    "VideoSelectorSettings": {
      "type": "structure",
      "members": {
        "VideoSelectorPid": {
          "shape": "VideoSelectorPid",
          "locationName": "videoSelectorPid"
        },
        "VideoSelectorProgramId": {
          "shape": "VideoSelectorProgramId",
          "locationName": "videoSelectorProgramId"
        }
      },
      "documentation": "Placeholder documentation for VideoSelectorSettings"
    },
    "WebvttDestinationSettings": {
      "type": "structure",
      "members": {
      },
      "documentation": "Placeholder documentation for WebvttDestinationSettings"
    },
    "__boolean": {
      "type": "boolean",
      "documentation": "Placeholder documentation for __boolean"
    },
    "__double": {
      "type": "double",
      "documentation": "Placeholder documentation for __double"
    },
    "__doubleMin0": {
      "type": "double",
      "documentation": "Placeholder documentation for __doubleMin0"
    },
    "__doubleMin1": {
      "type": "double",
      "documentation": "Placeholder documentation for __doubleMin1"
    },
    "__doubleMinNegative59Max0": {
      "type": "double",
      "documentation": "Placeholder documentation for __doubleMinNegative59Max0"
    },
    "__integer": {
      "type": "integer",
      "documentation": "Placeholder documentation for __integer"
    },
    "__integerMin0": {
      "type": "integer",
      "min": 0,
      "documentation": "Placeholder documentation for __integerMin0"
    },
    "__integerMin0Max10": {
      "type": "integer",
      "min": 0,
      "max": 10,
      "documentation": "Placeholder documentation for __integerMin0Max10"
    },
    "__integerMin0Max100": {
      "type": "integer",
      "min": 0,
      "max": 100,
      "documentation": "Placeholder documentation for __integerMin0Max100"
    },
    "__integerMin0Max1000": {
      "type": "integer",
      "min": 0,
      "max": 1000,
      "documentation": "Placeholder documentation for __integerMin0Max1000"
    },
    "__integerMin0Max10000": {
      "type": "integer",
      "min": 0,
      "max": 10000,
      "documentation": "Placeholder documentation for __integerMin0Max10000"
    },
    "__integerMin0Max1000000": {
      "type": "integer",
      "min": 0,
      "max": 1000000,
      "documentation": "Placeholder documentation for __integerMin0Max1000000"
    },
    "__integerMin0Max1099511627775": {
      "type": "long",
      "min": 0,
      "max": 1099511627775,
      "documentation": "Unsigned 40-bit integer."
    },
    "__integerMin0Max128": {
      "type": "integer",
      "min": 0,
      "max": 128,
      "documentation": "Placeholder documentation for __integerMin0Max128"
    },
    "__integerMin0Max15": {
      "type": "integer",
      "min": 0,
      "max": 15,
      "documentation": "Placeholder documentation for __integerMin0Max15"
    },
    "__integerMin0Max255": {
      "type": "integer",
      "min": 0,
      "max": 255,
      "documentation": "Placeholder documentation for __integerMin0Max255"
    },
    "__integerMin0Max30": {
      "type": "integer",
      "min": 0,
      "max": 30,
      "documentation": "Placeholder documentation for __integerMin0Max30"
    },
    "__integerMin0Max3600": {
      "type": "integer",
      "min": 0,
      "max": 3600,
      "documentation": "Placeholder documentation for __integerMin0Max3600"
    },
    "__integerMin0Max4294967295": {
      "type": "long",
      "min": 0,
      "max": 4294967295,
      "documentation": "Unsigned 32-bit integer."
    },
    "__integerMin0Max500": {
      "type": "integer",
      "min": 0,
      "max": 500,
      "documentation": "Placeholder documentation for __integerMin0Max500"
    },
    "__integerMin0Max600": {
      "type": "integer",
      "min": 0,
      "max": 600,
      "documentation": "Placeholder documentation for __integerMin0Max600"
    },
    "__integerMin0Max65535": {
      "type": "integer",
      "min": 0,
      "max": 65535,
      "documentation": "Placeholder documentation for __integerMin0Max65535"
    },
    "__integerMin0Max65536": {
      "type": "integer",
      "min": 0,
      "max": 65536,
      "documentation": "Placeholder documentation for __integerMin0Max65536"
    },
    "__integerMin0Max7": {
      "type": "integer",
      "min": 0,
      "max": 7,
      "documentation": "Placeholder documentation for __integerMin0Max7"
    },
    "__integerMin0Max8191": {
      "type": "integer",
      "min": 0,
      "max": 8191,
      "documentation": "Placeholder documentation for __integerMin0Max8191"
    },
    "__integerMin0Max8589934591": {
      "type": "long",
      "min": 0,
      "max": 8589934591,
      "documentation": "Unsigned 33-bit integer."
    },
    "__integerMin1": {
      "type": "integer",
      "min": 1,
      "documentation": "Placeholder documentation for __integerMin1"
    },
    "__integerMin1000": {
      "type": "integer",
      "min": 1000,
      "documentation": "Placeholder documentation for __integerMin1000"
    },
    "__integerMin1000Max30000": {
      "type": "integer",
      "min": 1000,
      "max": 30000,
      "documentation": "Placeholder documentation for __integerMin1000Max30000"
    },
    "__integerMin1Max1000000": {
      "type": "integer",
      "min": 1,
      "max": 1000000,
      "documentation": "Placeholder documentation for __integerMin1Max1000000"
    },
    "__integerMin1Max16": {
      "type": "integer",
      "min": 1,
      "max": 16,
      "documentation": "Placeholder documentation for __integerMin1Max16"
    },
    "__integerMin1Max20": {
      "type": "integer",
      "min": 1,
      "max": 20,
      "documentation": "Placeholder documentation for __integerMin1Max20"
    },
    "__integerMin1Max31": {
      "type": "integer",
      "min": 1,
      "max": 31,
      "documentation": "Placeholder documentation for __integerMin1Max31"
    },
    "__integerMin1Max32": {
      "type": "integer",
      "min": 1,
      "max": 32,
      "documentation": "Placeholder documentation for __integerMin1Max32"
    },
    "__integerMin1Max4": {
      "type": "integer",
      "min": 1,
      "max": 4,
      "documentation": "Placeholder documentation for __integerMin1Max4"
    },
    "__integerMin1Max5": {
      "type": "integer",
      "min": 1,
      "max": 5,
      "documentation": "Placeholder documentation for __integerMin1Max5"
    },
    "__integerMin1Max6": {
      "type": "integer",
      "min": 1,
      "max": 6,
      "documentation": "Placeholder documentation for __integerMin1Max6"
    },
    "__integerMin1Max8": {
      "type": "integer",
      "min": 1,
      "max": 8,
      "documentation": "Placeholder documentation for __integerMin1Max8"
    },
    "__integerMin25Max10000": {
      "type": "integer",
      "min": 25,
      "max": 10000,
      "documentation": "Placeholder documentation for __integerMin25Max10000"
    },
    "__integerMin25Max2000": {
      "type": "integer",
      "min": 25,
      "max": 2000,
      "documentation": "Placeholder documentation for __integerMin25Max2000"
    },
    "__integerMin3": {
      "type": "integer",
      "min": 3,
      "documentation": "Placeholder documentation for __integerMin3"
    },
    "__integerMin30": {
      "type": "integer",
      "min": 30,
      "documentation": "Placeholder documentation for __integerMin30"
    },
    "__integerMin4Max20": {
      "type": "integer",
      "min": 4,
      "max": 20,
      "documentation": "Placeholder documentation for __integerMin4Max20"
    },
    "__integerMin96Max600": {
      "type": "integer",
      "min": 96,
      "max": 600,
      "documentation": "Placeholder documentation for __integerMin96Max600"
    },
    "__integerMinNegative1000Max1000": {
      "type": "integer",
      "min": -1000,
      "max": 1000,
      "documentation": "Placeholder documentation for __integerMinNegative1000Max1000"
    },
    "__integerMinNegative60Max6": {
      "type": "integer",
      "min": -60,
      "max": 6,
      "documentation": "Placeholder documentation for __integerMinNegative60Max6"
    },
    "__integerMinNegative60Max60": {
      "type": "integer",
      "min": -60,
      "max": 60,
      "documentation": "Placeholder documentation for __integerMinNegative60Max60"
    },
    "__listOfAudioChannelMapping": {
      "type": "list",
      "member": {
        "shape": "AudioChannelMapping"
      },
      "documentation": "Placeholder documentation for __listOfAudioChannelMapping"
    },
    "__listOfAudioDescription": {
      "type": "list",
      "member": {
        "shape": "AudioDescription"
      },
      "documentation": "Placeholder documentation for __listOfAudioDescription"
    },
    "__listOfAudioSelector": {
      "type": "list",
      "member": {
        "shape": "AudioSelector"
      },
      "documentation": "Placeholder documentation for __listOfAudioSelector"
    },
    "__listOfCaptionDescription": {
      "type": "list",
      "member": {
        "shape": "CaptionDescription"
      },
      "documentation": "Placeholder documentation for __listOfCaptionDescription"
    },
    "__listOfCaptionLanguageMapping": {
      "type": "list",
      "member": {
        "shape": "CaptionLanguageMapping"
      },
      "documentation": "Placeholder documentation for __listOfCaptionLanguageMapping"
    },
    "__listOfCaptionSelector": {
      "type": "list",
      "member": {
        "shape": "CaptionSelector"
      },
      "documentation": "Placeholder documentation for __listOfCaptionSelector"
    },
    "__listOfChannelEgressEndpoint": {
      "type": "list",
      "member": {
        "shape": "ChannelEgressEndpoint"
      },
      "documentation": "Placeholder documentation for __listOfChannelEgressEndpoint"
    },
    "__listOfChannelSummary": {
      "type": "list",
      "member": {
        "shape": "ChannelSummary"
      },
      "documentation": "Placeholder documentation for __listOfChannelSummary"
    },
    "__listOfHlsAdMarkers": {
      "type": "list",
      "member": {
        "shape": "HlsAdMarkers"
      },
      "documentation": "Placeholder documentation for __listOfHlsAdMarkers"
    },
    "__listOfInput": {
      "type": "list",
      "member": {
        "shape": "Input"
      },
      "documentation": "Placeholder documentation for __listOfInput"
    },
    "__listOfInputAttachment": {
      "type": "list",
      "member": {
        "shape": "InputAttachment"
      },
      "documentation": "Placeholder documentation for __listOfInputAttachment"
    },
    "__listOfInputChannelLevel": {
      "type": "list",
      "member": {
        "shape": "InputChannelLevel"
      },
      "documentation": "Placeholder documentation for __listOfInputChannelLevel"
    },
    "__listOfInputDestination": {
      "type": "list",
      "member": {
        "shape": "InputDestination"
      },
      "documentation": "Placeholder documentation for __listOfInputDestination"
    },
    "__listOfInputDestinationRequest": {
      "type": "list",
      "member": {
        "shape": "InputDestinationRequest"
      },
      "documentation": "Placeholder documentation for __listOfInputDestinationRequest"
    },
    "__listOfInputSecurityGroup": {
      "type": "list",
      "member": {
        "shape": "InputSecurityGroup"
      },
      "documentation": "Placeholder documentation for __listOfInputSecurityGroup"
    },
    "__listOfInputSource": {
      "type": "list",
      "member": {
        "shape": "InputSource"
      },
      "documentation": "Placeholder documentation for __listOfInputSource"
    },
    "__listOfInputSourceRequest": {
      "type": "list",
      "member": {
        "shape": "InputSourceRequest"
      },
      "documentation": "Placeholder documentation for __listOfInputSourceRequest"
    },
    "__listOfInputWhitelistRule": {
      "type": "list",
      "member": {
        "shape": "InputWhitelistRule"
      },
      "documentation": "Placeholder documentation for __listOfInputWhitelistRule"
    },
    "__listOfInputWhitelistRuleCidr": {
      "type": "list",
      "member": {
        "shape": "InputWhitelistRuleCidr"
      },
      "documentation": "Placeholder documentation for __listOfInputWhitelistRuleCidr"
    },
    "__listOfOffering": {
      "type": "list",
      "member": {
        "shape": "Offering"
      },
      "documentation": "Placeholder documentation for __listOfOffering"
    },
    "__listOfOutput": {
      "type": "list",
      "member": {
        "shape": "Output"
      },
      "documentation": "Placeholder documentation for __listOfOutput"
    },
    "__listOfOutputDestination": {
      "type": "list",
      "member": {
        "shape": "OutputDestination"
      },
      "documentation": "Placeholder documentation for __listOfOutputDestination"
    },
    "__listOfOutputDestinationSettings": {
      "type": "list",
      "member": {
        "shape": "OutputDestinationSettings"
      },
      "documentation": "Placeholder documentation for __listOfOutputDestinationSettings"
    },
    "__listOfOutputGroup": {
      "type": "list",
      "member": {
        "shape": "OutputGroup"
      },
      "documentation": "Placeholder documentation for __listOfOutputGroup"
    },
    "__listOfReservation": {
      "type": "list",
      "member": {
        "shape": "Reservation"
      },
      "documentation": "Placeholder documentation for __listOfReservation"
    },
    "__listOfScheduleAction": {
      "type": "list",
      "member": {
        "shape": "ScheduleAction"
      },
      "documentation": "The list of schedule actions."
    },
    "__listOfScte35Descriptor": {
      "type": "list",
      "member": {
        "shape": "Scte35Descriptor"
      },
      "documentation": "List of Scte35 descriptors"
    },
    "__listOfValidationError": {
      "type": "list",
      "member": {
        "shape": "ValidationError"
      },
      "documentation": "Placeholder documentation for __listOfValidationError"
    },
    "__listOfVideoDescription": {
      "type": "list",
      "member": {
        "shape": "VideoDescription"
      },
      "documentation": "Placeholder documentation for __listOfVideoDescription"
    },
    "__listOf__string": {
      "type": "list",
      "member": {
        "shape": "__string"
      },
      "documentation": "Placeholder documentation for __listOf__string"
    },
    "__long": {
      "type": "long",
      "documentation": "Placeholder documentation for __long"
    },
    "__string": {
      "type": "string",
      "documentation": "Placeholder documentation for __string"
    },
    "__stringMax32": {
      "type": "string",
      "max": 32,
      "documentation": "Placeholder documentation for __stringMax32"
    },
    "__stringMin1": {
      "type": "string",
      "min": 1,
      "documentation": "Placeholder documentation for __stringMin1"
    },
    "__stringMin1Max255": {
      "type": "string",
      "min": 1,
      "max": 255,
      "documentation": "Placeholder documentation for __stringMin1Max255"
    },
    "__stringMin1Max256": {
      "type": "string",
      "min": 1,
      "max": 256,
      "documentation": "Placeholder documentation for __stringMin1Max256"
    },
    "__stringMin32Max32": {
      "type": "string",
      "min": 32,
      "max": 32,
      "documentation": "Placeholder documentation for __stringMin32Max32"
    },
    "__stringMin34Max34": {
      "type": "string",
      "min": 34,
      "max": 34,
      "documentation": "Placeholder documentation for __stringMin34Max34"
    },
    "__stringMin3Max3": {
      "type": "string",
      "min": 3,
      "max": 3,
      "documentation": "Placeholder documentation for __stringMin3Max3"
    },
    "__stringMin6Max6": {
      "type": "string",
      "min": 6,
      "max": 6,
      "documentation": "Placeholder documentation for __stringMin6Max6"
    }
  },
  "documentation": "API for AWS Elemental MediaLive"
}
