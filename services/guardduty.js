awsim['guardduty'] = {
  "metadata" : {
    "apiVersion" : "2017-11-28",
    "endpointPrefix" : "guardduty",
    "signingName" : "guardduty",
    "serviceFullName" : "Amazon GuardDuty",
    "serviceId" : "GuardDuty",
    "protocol" : "rest-json",
    "jsonVersion" : "1.1",
    "uid" : "guardduty-2017-11-28",
    "signatureVersion" : "v4"
  },
  "operations" : {
    "AcceptInvitation" : {
      "name" : "AcceptInvitation",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/master",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "AcceptInvitationRequest"
      },
      "output" : {
        "shape" : "AcceptInvitationResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Accepts the invitation to be monitored by a master GuardDuty account."
    },
    "ArchiveFindings" : {
      "name" : "ArchiveFindings",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/findings/archive",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ArchiveFindingsRequest"
      },
      "output" : {
        "shape" : "ArchiveFindingsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Archives Amazon GuardDuty findings specified by the list of finding IDs."
    },
    "CreateDetector" : {
      "name" : "CreateDetector",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateDetectorRequest"
      },
      "output" : {
        "shape" : "CreateDetectorResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Creates a single Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector must be created in order for GuardDuty to become operational."
    },
    "CreateFilter" : {
      "name" : "CreateFilter",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/filter",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateFilterRequest"
      },
      "output" : {
        "shape" : "CreateFilterResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Creates a filter using the specified finding criteria."
    },
    "CreateIPSet" : {
      "name" : "CreateIPSet",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/ipset",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateIPSetRequest"
      },
      "output" : {
        "shape" : "CreateIPSetResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Creates a new IPSet - a list of trusted IP addresses that have been whitelisted for secure communication with AWS infrastructure and applications."
    },
    "CreateMembers" : {
      "name" : "CreateMembers",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/member",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateMembersRequest"
      },
      "output" : {
        "shape" : "CreateMembersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Creates member accounts of the current AWS account by specifying a list of AWS account IDs. The current AWS account can then invite these members to manage GuardDuty in their accounts."
    },
    "CreateSampleFindings" : {
      "name" : "CreateSampleFindings",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/findings/create",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateSampleFindingsRequest"
      },
      "output" : {
        "shape" : "CreateSampleFindingsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Generates example findings of types specified by the list of finding types. If 'NULL' is specified for findingTypes, the API generates example findings of all supported finding types."
    },
    "CreateThreatIntelSet" : {
      "name" : "CreateThreatIntelSet",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/threatintelset",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "CreateThreatIntelSetRequest"
      },
      "output" : {
        "shape" : "CreateThreatIntelSetResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Create a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets."
    },
    "DeclineInvitations" : {
      "name" : "DeclineInvitations",
      "http" : {
        "method" : "POST",
        "requestUri" : "/invitation/decline",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeclineInvitationsRequest"
      },
      "output" : {
        "shape" : "DeclineInvitationsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Declines invitations sent to the current member account by AWS account specified by their account IDs."
    },
    "DeleteDetector" : {
      "name" : "DeleteDetector",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/detector/{detectorId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteDetectorRequest"
      },
      "output" : {
        "shape" : "DeleteDetectorResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Deletes a Amazon GuardDuty detector specified by the detector ID."
    },
    "DeleteFilter" : {
      "name" : "DeleteFilter",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/detector/{detectorId}/filter/{filterName}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteFilterRequest"
      },
      "output" : {
        "shape" : "DeleteFilterResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Deletes the filter specified by the filter name."
    },
    "DeleteIPSet" : {
      "name" : "DeleteIPSet",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/detector/{detectorId}/ipset/{ipSetId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteIPSetRequest"
      },
      "output" : {
        "shape" : "DeleteIPSetResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Deletes the IPSet specified by the IPSet ID."
    },
    "DeleteInvitations" : {
      "name" : "DeleteInvitations",
      "http" : {
        "method" : "POST",
        "requestUri" : "/invitation/delete",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteInvitationsRequest"
      },
      "output" : {
        "shape" : "DeleteInvitationsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Deletes invitations sent to the current member account by AWS accounts specified by their account IDs."
    },
    "DeleteMembers" : {
      "name" : "DeleteMembers",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/member/delete",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteMembersRequest"
      },
      "output" : {
        "shape" : "DeleteMembersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Deletes GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs."
    },
    "DeleteThreatIntelSet" : {
      "name" : "DeleteThreatIntelSet",
      "http" : {
        "method" : "DELETE",
        "requestUri" : "/detector/{detectorId}/threatintelset/{threatIntelSetId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DeleteThreatIntelSetRequest"
      },
      "output" : {
        "shape" : "DeleteThreatIntelSetResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Deletes ThreatIntelSet specified by the ThreatIntelSet ID."
    },
    "DisassociateFromMasterAccount" : {
      "name" : "DisassociateFromMasterAccount",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/master/disassociate",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DisassociateFromMasterAccountRequest"
      },
      "output" : {
        "shape" : "DisassociateFromMasterAccountResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Disassociates the current GuardDuty member account from its master account."
    },
    "DisassociateMembers" : {
      "name" : "DisassociateMembers",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/member/disassociate",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "DisassociateMembersRequest"
      },
      "output" : {
        "shape" : "DisassociateMembersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Disassociates GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs."
    },
    "GetDetector" : {
      "name" : "GetDetector",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetDetectorRequest"
      },
      "output" : {
        "shape" : "GetDetectorResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Retrieves an Amazon GuardDuty detector specified by the detectorId."
    },
    "GetFilter" : {
      "name" : "GetFilter",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}/filter/{filterName}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetFilterRequest"
      },
      "output" : {
        "shape" : "GetFilterResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Returns the details of the filter specified by the filter name."
    },
    "GetFindings" : {
      "name" : "GetFindings",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/findings/get",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetFindingsRequest"
      },
      "output" : {
        "shape" : "GetFindingsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Describes Amazon GuardDuty findings specified by finding IDs."
    },
    "GetFindingsStatistics" : {
      "name" : "GetFindingsStatistics",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/findings/statistics",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetFindingsStatisticsRequest"
      },
      "output" : {
        "shape" : "GetFindingsStatisticsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Lists Amazon GuardDuty findings' statistics for the specified detector ID."
    },
    "GetIPSet" : {
      "name" : "GetIPSet",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}/ipset/{ipSetId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetIPSetRequest"
      },
      "output" : {
        "shape" : "GetIPSetResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Retrieves the IPSet specified by the IPSet ID."
    },
    "GetInvitationsCount" : {
      "name" : "GetInvitationsCount",
      "http" : {
        "method" : "GET",
        "requestUri" : "/invitation/count",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetInvitationsCountRequest"
      },
      "output" : {
        "shape" : "GetInvitationsCountResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation."
    },
    "GetMasterAccount" : {
      "name" : "GetMasterAccount",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}/master",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetMasterAccountRequest"
      },
      "output" : {
        "shape" : "GetMasterAccountResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Provides the details for the GuardDuty master account to the current GuardDuty member account."
    },
    "GetMembers" : {
      "name" : "GetMembers",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/member/get",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetMembersRequest"
      },
      "output" : {
        "shape" : "GetMembersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Retrieves GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs."
    },
    "GetThreatIntelSet" : {
      "name" : "GetThreatIntelSet",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}/threatintelset/{threatIntelSetId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "GetThreatIntelSetRequest"
      },
      "output" : {
        "shape" : "GetThreatIntelSetResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID."
    },
    "InviteMembers" : {
      "name" : "InviteMembers",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/member/invite",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "InviteMembersRequest"
      },
      "output" : {
        "shape" : "InviteMembersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Invites other AWS accounts (created as members of the current AWS account by CreateMembers) to enable GuardDuty and allow the current AWS account to view and manage these accounts' GuardDuty findings on their behalf as the master account."
    },
    "ListDetectors" : {
      "name" : "ListDetectors",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListDetectorsRequest"
      },
      "output" : {
        "shape" : "ListDetectorsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Lists detectorIds of all the existing Amazon GuardDuty detector resources."
    },
    "ListFilters" : {
      "name" : "ListFilters",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}/filter",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListFiltersRequest"
      },
      "output" : {
        "shape" : "ListFiltersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Returns a paginated list of the current filters."
    },
    "ListFindings" : {
      "name" : "ListFindings",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/findings",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListFindingsRequest"
      },
      "output" : {
        "shape" : "ListFindingsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Lists Amazon GuardDuty findings for the specified detector ID."
    },
    "ListIPSets" : {
      "name" : "ListIPSets",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}/ipset",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListIPSetsRequest"
      },
      "output" : {
        "shape" : "ListIPSetsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Lists the IPSets of the GuardDuty service specified by the detector ID."
    },
    "ListInvitations" : {
      "name" : "ListInvitations",
      "http" : {
        "method" : "GET",
        "requestUri" : "/invitation",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListInvitationsRequest"
      },
      "output" : {
        "shape" : "ListInvitationsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Lists all GuardDuty membership invitations that were sent to the current AWS account."
    },
    "ListMembers" : {
      "name" : "ListMembers",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}/member",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListMembersRequest"
      },
      "output" : {
        "shape" : "ListMembersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Lists details about all member accounts for the current GuardDuty master account."
    },
    "ListThreatIntelSets" : {
      "name" : "ListThreatIntelSets",
      "http" : {
        "method" : "GET",
        "requestUri" : "/detector/{detectorId}/threatintelset",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "ListThreatIntelSetsRequest"
      },
      "output" : {
        "shape" : "ListThreatIntelSetsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID."
    },
    "StartMonitoringMembers" : {
      "name" : "StartMonitoringMembers",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/member/start",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "StartMonitoringMembersRequest"
      },
      "output" : {
        "shape" : "StartMonitoringMembersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Re-enables GuardDuty to monitor findings of the member accounts specified by the account IDs. A master GuardDuty account can run this command after disabling GuardDuty from monitoring these members' findings by running StopMonitoringMembers."
    },
    "StopMonitoringMembers" : {
      "name" : "StopMonitoringMembers",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/member/stop",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "StopMonitoringMembersRequest"
      },
      "output" : {
        "shape" : "StopMonitoringMembersResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Disables GuardDuty from monitoring findings of the member accounts specified by the account IDs. After running this command, a master GuardDuty account can run StartMonitoringMembers to re-enable GuardDuty to monitor these members’ findings."
    },
    "UnarchiveFindings" : {
      "name" : "UnarchiveFindings",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/findings/unarchive",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UnarchiveFindingsRequest"
      },
      "output" : {
        "shape" : "UnarchiveFindingsResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Unarchives Amazon GuardDuty findings specified by the list of finding IDs."
    },
    "UpdateDetector" : {
      "name" : "UpdateDetector",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateDetectorRequest"
      },
      "output" : {
        "shape" : "UpdateDetectorResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Updates an Amazon GuardDuty detector specified by the detectorId."
    },
    "UpdateFilter" : {
      "name" : "UpdateFilter",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/filter/{filterName}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateFilterRequest"
      },
      "output" : {
        "shape" : "UpdateFilterResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Updates the filter specified by the filter name."
    },
    "UpdateFindingsFeedback" : {
      "name" : "UpdateFindingsFeedback",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/findings/feedback",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateFindingsFeedbackRequest"
      },
      "output" : {
        "shape" : "UpdateFindingsFeedbackResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Marks specified Amazon GuardDuty findings as useful or not useful."
    },
    "UpdateIPSet" : {
      "name" : "UpdateIPSet",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/ipset/{ipSetId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateIPSetRequest"
      },
      "output" : {
        "shape" : "UpdateIPSetResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Updates the IPSet specified by the IPSet ID."
    },
    "UpdateThreatIntelSet" : {
      "name" : "UpdateThreatIntelSet",
      "http" : {
        "method" : "POST",
        "requestUri" : "/detector/{detectorId}/threatintelset/{threatIntelSetId}",
        "responseCode" : 200
      },
      "input" : {
        "shape" : "UpdateThreatIntelSetRequest"
      },
      "output" : {
        "shape" : "UpdateThreatIntelSetResponse",
        "documentation" : "200 response"
      },
      "errors" : [ {
        "shape" : "BadRequestException",
        "documentation" : "400 response"
      }, {
        "shape" : "InternalServerErrorException",
        "documentation" : "500 response"
      } ],
      "documentation" : "Updates the ThreatIntelSet specified by ThreatIntelSet ID."
    }
  },
  "shapes" : {
    "AcceptInvitationRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty member account."
        },
        "InvitationId" : {
          "shape" : "InvitationId",
          "locationName" : "invitationId",
          "documentation" : "This value is used to validate the master account to the member account."
        },
        "MasterId" : {
          "shape" : "MasterId",
          "locationName" : "masterId",
          "documentation" : "The account ID of the master GuardDuty account whose invitation you're accepting."
        }
      },
      "documentation" : "AcceptInvitation request body.",
      "required" : [ "DetectorId" ]
    },
    "AcceptInvitationResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "AccessKeyDetails" : {
      "type" : "structure",
      "members" : {
        "AccessKeyId" : {
          "shape" : "__string",
          "locationName" : "accessKeyId",
          "documentation" : "Access key ID of the user."
        },
        "PrincipalId" : {
          "shape" : "__string",
          "locationName" : "principalId",
          "documentation" : "The principal ID of the user."
        },
        "UserName" : {
          "shape" : "__string",
          "locationName" : "userName",
          "documentation" : "The name of the user."
        },
        "UserType" : {
          "shape" : "__string",
          "locationName" : "userType",
          "documentation" : "The type of the user."
        }
      },
      "documentation" : "The IAM access key details (IAM user information) of a user that engaged in the activity that prompted GuardDuty to generate a finding."
    },
    "AccountDetail" : {
      "type" : "structure",
      "members" : {
        "AccountId" : {
          "shape" : "AccountId",
          "locationName" : "accountId",
          "documentation" : "Member account ID."
        },
        "Email" : {
          "shape" : "Email",
          "locationName" : "email",
          "documentation" : "Member account's email address."
        }
      },
      "documentation" : "An object containing the member's accountId and email address.",
      "required" : [ "Email", "AccountId" ]
    },
    "AccountDetails" : {
      "type" : "list",
      "documentation" : "A list of account/email pairs.",
      "member" : {
        "shape" : "AccountDetail"
      }
    },
    "AccountId" : {
      "type" : "string",
      "documentation" : "AWS account ID."
    },
    "AccountIds" : {
      "type" : "list",
      "documentation" : "A list of account IDs.",
      "member" : {
        "shape" : "__string"
      }
    },
    "Action" : {
      "type" : "structure",
      "members" : {
        "ActionType" : {
          "shape" : "__string",
          "locationName" : "actionType",
          "documentation" : "GuardDuty Finding activity type."
        },
        "AwsApiCallAction" : {
          "shape" : "AwsApiCallAction",
          "locationName" : "awsApiCallAction",
          "documentation" : "Information about the AWS_API_CALL action described in this finding."
        },
        "DnsRequestAction" : {
          "shape" : "DnsRequestAction",
          "locationName" : "dnsRequestAction",
          "documentation" : "Information about the DNS_REQUEST action described in this finding."
        },
        "NetworkConnectionAction" : {
          "shape" : "NetworkConnectionAction",
          "locationName" : "networkConnectionAction",
          "documentation" : "Information about the NETWORK_CONNECTION action described in this finding."
        },
        "PortProbeAction" : {
          "shape" : "PortProbeAction",
          "locationName" : "portProbeAction",
          "documentation" : "Information about the PORT_PROBE action described in this finding."
        }
      },
      "documentation" : "Information about the activity described in a finding."
    },
    "Activate" : {
      "type" : "boolean",
      "documentation" : "Whether we should start processing the list immediately or not."
    },
    "ArchiveFindingsRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The ID of the detector that specifies the GuardDuty service whose findings you want to archive."
        },
        "FindingIds" : {
          "shape" : "FindingIds",
          "locationName" : "findingIds",
          "documentation" : "IDs of the findings that you want to archive."
        }
      },
      "documentation" : "ArchiveFindings request body.",
      "required" : [ "DetectorId" ]
    },
    "ArchiveFindingsResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "AwsApiCallAction" : {
      "type" : "structure",
      "members" : {
        "Api" : {
          "shape" : "__string",
          "locationName" : "api",
          "documentation" : "AWS API name."
        },
        "CallerType" : {
          "shape" : "__string",
          "locationName" : "callerType",
          "documentation" : "AWS API caller type."
        },
        "DomainDetails" : {
          "shape" : "DomainDetails",
          "locationName" : "domainDetails",
          "documentation" : "Domain information for the AWS API call."
        },
        "RemoteIpDetails" : {
          "shape" : "RemoteIpDetails",
          "locationName" : "remoteIpDetails",
          "documentation" : "Remote IP information of the connection."
        },
        "ServiceName" : {
          "shape" : "__string",
          "locationName" : "serviceName",
          "documentation" : "AWS service name whose API was invoked."
        }
      },
      "documentation" : "Information about the AWS_API_CALL action described in this finding."
    },
    "BadRequestException" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The error message."
        },
        "Type" : {
          "shape" : "__string",
          "locationName" : "__type",
          "documentation" : "The error type."
        }
      },
      "documentation" : "Error response object.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 400
      }
    },
    "City" : {
      "type" : "structure",
      "members" : {
        "CityName" : {
          "shape" : "__string",
          "locationName" : "cityName",
          "documentation" : "City name of the remote IP address."
        }
      },
      "documentation" : "City information of the remote IP address."
    },
    "Comments" : {
      "type" : "string",
      "documentation" : "Additional feedback about the GuardDuty findings."
    },
    "Condition" : {
      "type" : "structure",
      "members" : {
        "Eq" : {
          "shape" : "Eq",
          "locationName" : "eq",
          "documentation" : "Represents the equal condition to be applied to a single field when querying for findings."
        },
        "Gt" : {
          "shape" : "__integer",
          "locationName" : "gt",
          "documentation" : "Represents the greater than condition to be applied to a single field when querying for findings."
        },
        "Gte" : {
          "shape" : "__integer",
          "locationName" : "gte",
          "documentation" : "Represents the greater than equal condition to be applied to a single field when querying for findings."
        },
        "Lt" : {
          "shape" : "__integer",
          "locationName" : "lt",
          "documentation" : "Represents the less than condition to be applied to a single field when querying for findings."
        },
        "Lte" : {
          "shape" : "__integer",
          "locationName" : "lte",
          "documentation" : "Represents the less than equal condition to be applied to a single field when querying for findings."
        },
        "Neq" : {
          "shape" : "Neq",
          "locationName" : "neq",
          "documentation" : "Represents the not equal condition to be applied to a single field when querying for findings."
        }
      },
      "documentation" : "Finding attribute (for example, accountId) for which conditions and values must be specified when querying findings."
    },
    "CountBySeverityFindingStatistic" : {
      "type" : "integer",
      "documentation" : "The count of findings for the given severity."
    },
    "Country" : {
      "type" : "structure",
      "members" : {
        "CountryCode" : {
          "shape" : "__string",
          "locationName" : "countryCode",
          "documentation" : "Country code of the remote IP address."
        },
        "CountryName" : {
          "shape" : "__string",
          "locationName" : "countryName",
          "documentation" : "Country name of the remote IP address."
        }
      },
      "documentation" : "Country information of the remote IP address."
    },
    "CreateDetectorRequest" : {
      "type" : "structure",
      "members" : {
        "Enable" : {
          "shape" : "Enable",
          "locationName" : "enable",
          "documentation" : "A boolean value that specifies whether the detector is to be enabled."
        }
      },
      "documentation" : "CreateDetector request body."
    },
    "CreateDetectorResponse" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "DetectorId",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the created detector."
        }
      }
    },
    "CreateFilterRequest" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "FilterAction",
          "locationName" : "action",
          "documentation" : "Specifies the action that is to be applied to the findings that match the filter."
        },
        "ClientToken" : {
          "shape" : "__stringMin0Max64",
          "locationName" : "clientToken",
          "documentation" : "The idempotency token for the create request.",
          "idempotencyToken" : true
        },
        "Description" : {
          "shape" : "FilterDescription",
          "locationName" : "description",
          "documentation" : "The description of the filter."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector that you want to update."
        },
        "FindingCriteria" : {
          "shape" : "FindingCriteria",
          "locationName" : "findingCriteria",
          "documentation" : "Represents the criteria to be used in the filter for querying findings."
        },
        "Name" : {
          "shape" : "FilterName",
          "locationName" : "name",
          "documentation" : "The name of the filter."
        },
        "Rank" : {
          "shape" : "FilterRank",
          "locationName" : "rank",
          "documentation" : "Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings."
        }
      },
      "documentation" : "CreateFilterRequest request body.",
      "required" : [ "DetectorId" ]
    },
    "CreateFilterResponse" : {
      "type" : "structure",
      "members" : {
        "Name" : {
          "shape" : "FilterName",
          "locationName" : "name",
          "documentation" : "The name of the successfully created filter."
        }
      }
    },
    "CreateIPSetRequest" : {
      "type" : "structure",
      "members" : {
        "Activate" : {
          "shape" : "Activate",
          "locationName" : "activate",
          "documentation" : "A boolean value that indicates whether GuardDuty is to start using the uploaded IPSet."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector that you want to update."
        },
        "Format" : {
          "shape" : "IpSetFormat",
          "locationName" : "format",
          "documentation" : "The format of the file that contains the IPSet."
        },
        "Location" : {
          "shape" : "Location",
          "locationName" : "location",
          "documentation" : "The URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)"
        },
        "Name" : {
          "shape" : "Name",
          "locationName" : "name",
          "documentation" : "The user friendly name to identify the IPSet. This name is displayed in all findings that are triggered by activity that involves IP addresses included in this IPSet."
        }
      },
      "documentation" : "CreateIPSet request body.",
      "required" : [ "DetectorId" ]
    },
    "CreateIPSetResponse" : {
      "type" : "structure",
      "members" : {
        "IpSetId" : {
          "shape" : "IpSetId",
          "locationName" : "ipSetId"
        }
      }
    },
    "CreateMembersRequest" : {
      "type" : "structure",
      "members" : {
        "AccountDetails" : {
          "shape" : "AccountDetails",
          "locationName" : "accountDetails",
          "documentation" : "A list of account ID and email address pairs of the accounts that you want to associate with the master GuardDuty account."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty account with which you want to associate member accounts."
        }
      },
      "documentation" : "CreateMembers request body.",
      "required" : [ "DetectorId" ]
    },
    "CreateMembersResponse" : {
      "type" : "structure",
      "members" : {
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "CreateSampleFindingsRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The ID of the detector to create sample findings for."
        },
        "FindingTypes" : {
          "shape" : "FindingTypes",
          "locationName" : "findingTypes",
          "documentation" : "Types of sample findings that you want to generate."
        }
      },
      "documentation" : "CreateSampleFindings request body.",
      "required" : [ "DetectorId" ]
    },
    "CreateSampleFindingsResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "CreateThreatIntelSetRequest" : {
      "type" : "structure",
      "members" : {
        "Activate" : {
          "shape" : "Activate",
          "locationName" : "activate",
          "documentation" : "A boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector that you want to update."
        },
        "Format" : {
          "shape" : "ThreatIntelSetFormat",
          "locationName" : "format",
          "documentation" : "The format of the file that contains the ThreatIntelSet."
        },
        "Location" : {
          "shape" : "Location",
          "locationName" : "location",
          "documentation" : "The URI of the file that contains the ThreatIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)."
        },
        "Name" : {
          "shape" : "Name",
          "locationName" : "name",
          "documentation" : "A user-friendly ThreatIntelSet name that is displayed in all finding generated by activity that involves IP addresses included in this ThreatIntelSet."
        }
      },
      "documentation" : "CreateThreatIntelSet request body.",
      "required" : [ "DetectorId" ]
    },
    "CreateThreatIntelSetResponse" : {
      "type" : "structure",
      "members" : {
        "ThreatIntelSetId" : {
          "shape" : "ThreatIntelSetId",
          "locationName" : "threatIntelSetId"
        }
      }
    },
    "CreatedAt" : {
      "type" : "string",
      "documentation" : "The first time a resource was created. The format will be ISO-8601."
    },
    "DeclineInvitationsRequest" : {
      "type" : "structure",
      "members" : {
        "AccountIds" : {
          "shape" : "AccountIds",
          "locationName" : "accountIds",
          "documentation" : "A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to decline invitations from."
        }
      },
      "documentation" : "DeclineInvitations request body."
    },
    "DeclineInvitationsResponse" : {
      "type" : "structure",
      "members" : {
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "DeleteDetectorRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID that specifies the detector that you want to delete."
        }
      },
      "required" : [ "DetectorId" ]
    },
    "DeleteDetectorResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteFilterRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID that specifies the detector where you want to delete a filter."
        },
        "FilterName" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "filterName",
          "documentation" : "The name of the filter."
        }
      },
      "required" : [ "DetectorId", "FilterName" ]
    },
    "DeleteFilterResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteIPSetRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The detectorID that specifies the GuardDuty service whose IPSet you want to delete."
        },
        "IpSetId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ipSetId",
          "documentation" : "The unique ID that specifies the IPSet that you want to delete."
        }
      },
      "required" : [ "DetectorId", "IpSetId" ]
    },
    "DeleteIPSetResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DeleteInvitationsRequest" : {
      "type" : "structure",
      "members" : {
        "AccountIds" : {
          "shape" : "AccountIds",
          "locationName" : "accountIds",
          "documentation" : "A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to delete invitations from."
        }
      },
      "documentation" : "DeleteInvitations request body."
    },
    "DeleteInvitationsResponse" : {
      "type" : "structure",
      "members" : {
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "DeleteMembersRequest" : {
      "type" : "structure",
      "members" : {
        "AccountIds" : {
          "shape" : "AccountIds",
          "locationName" : "accountIds",
          "documentation" : "A list of account IDs of the GuardDuty member accounts that you want to delete."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty account whose members you want to delete."
        }
      },
      "documentation" : "DeleteMembers request body.",
      "required" : [ "DetectorId" ]
    },
    "DeleteMembersResponse" : {
      "type" : "structure",
      "members" : {
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "DeleteThreatIntelSetRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to delete."
        },
        "ThreatIntelSetId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "threatIntelSetId",
          "documentation" : "The unique ID that specifies the ThreatIntelSet that you want to delete."
        }
      },
      "required" : [ "ThreatIntelSetId", "DetectorId" ]
    },
    "DeleteThreatIntelSetResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DetectorId" : {
      "type" : "string",
      "documentation" : "The unique identifier for a detector."
    },
    "DetectorIds" : {
      "type" : "list",
      "documentation" : "A list of detector Ids.",
      "member" : {
        "shape" : "DetectorId"
      }
    },
    "DetectorStatus" : {
      "type" : "string",
      "documentation" : "The status of detector.",
      "enum" : [ "ENABLED", "DISABLED" ]
    },
    "DisassociateFromMasterAccountRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty member account."
        }
      },
      "required" : [ "DetectorId" ]
    },
    "DisassociateFromMasterAccountResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "DisassociateMembersRequest" : {
      "type" : "structure",
      "members" : {
        "AccountIds" : {
          "shape" : "AccountIds",
          "locationName" : "accountIds",
          "documentation" : "A list of account IDs of the GuardDuty member accounts that you want to disassociate from master."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty account whose members you want to disassociate from master."
        }
      },
      "documentation" : "DisassociateMembers request body.",
      "required" : [ "DetectorId" ]
    },
    "DisassociateMembersResponse" : {
      "type" : "structure",
      "members" : {
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "DnsRequestAction" : {
      "type" : "structure",
      "members" : {
        "Domain" : {
          "shape" : "Domain",
          "locationName" : "domain",
          "documentation" : "Domain information for the DNS request."
        }
      },
      "documentation" : "Information about the DNS_REQUEST action described in this finding."
    },
    "Domain" : {
      "type" : "string",
      "documentation" : "A domain name."
    },
    "DomainDetails" : {
      "type" : "structure",
      "members" : { },
      "documentation" : "Domain information for the AWS API call."
    },
    "Email" : {
      "type" : "string",
      "documentation" : "Member account's email address."
    },
    "Enable" : {
      "type" : "boolean",
      "documentation" : "A boolean value that specifies whether the detector is to be enabled."
    },
    "Eq" : {
      "type" : "list",
      "documentation" : "Represents the equal condition to be applied to a single field when querying for findings.",
      "member" : {
        "shape" : "__string"
      }
    },
    "ErrorResponse" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The error message."
        },
        "Type" : {
          "shape" : "__string",
          "locationName" : "__type",
          "documentation" : "The error type."
        }
      },
      "documentation" : "Error response object."
    },
    "Feedback" : {
      "type" : "string",
      "documentation" : "Finding Feedback Value",
      "enum" : [ "USEFUL", "NOT_USEFUL" ]
    },
    "FilterAction" : {
      "type" : "string",
      "documentation" : "The action associated with a filter.",
      "enum" : [ "NOOP", "ARCHIVE" ]
    },
    "FilterDescription" : {
      "type" : "string",
      "documentation" : "The filter description"
    },
    "FilterName" : {
      "type" : "string",
      "documentation" : "The unique identifier for a filter"
    },
    "FilterNames" : {
      "type" : "list",
      "documentation" : "A list of filter names",
      "member" : {
        "shape" : "FilterName"
      }
    },
    "FilterRank" : {
      "type" : "integer",
      "documentation" : "Relative position of filter among list of exisiting filters."
    },
    "Finding" : {
      "type" : "structure",
      "members" : {
        "AccountId" : {
          "shape" : "__string",
          "locationName" : "accountId",
          "documentation" : "AWS account ID where the activity occurred that prompted GuardDuty to generate a finding."
        },
        "Arn" : {
          "shape" : "__string",
          "locationName" : "arn",
          "documentation" : "The ARN of a finding described by the action."
        },
        "Confidence" : {
          "shape" : "__double",
          "locationName" : "confidence",
          "documentation" : "The confidence level of a finding."
        },
        "CreatedAt" : {
          "shape" : "CreatedAt",
          "locationName" : "createdAt",
          "documentation" : "The time stamp at which a finding was generated."
        },
        "Description" : {
          "shape" : "__string",
          "locationName" : "description",
          "documentation" : "The description of a finding."
        },
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "The identifier that corresponds to a finding described by the action."
        },
        "Partition" : {
          "shape" : "__string",
          "locationName" : "partition",
          "documentation" : "The AWS resource partition."
        },
        "Region" : {
          "shape" : "__string",
          "locationName" : "region",
          "documentation" : "The AWS region where the activity occurred that prompted GuardDuty to generate a finding."
        },
        "Resource" : {
          "shape" : "Resource",
          "locationName" : "resource",
          "documentation" : "The AWS resource associated with the activity that prompted GuardDuty to generate a finding."
        },
        "SchemaVersion" : {
          "shape" : "__string",
          "locationName" : "schemaVersion",
          "documentation" : "Findings' schema version."
        },
        "Service" : {
          "shape" : "Service",
          "locationName" : "service",
          "documentation" : "Additional information assigned to the generated finding by GuardDuty."
        },
        "Severity" : {
          "shape" : "__double",
          "locationName" : "severity",
          "documentation" : "The severity of a finding."
        },
        "Title" : {
          "shape" : "__string",
          "locationName" : "title",
          "documentation" : "The title of a finding."
        },
        "Type" : {
          "shape" : "__string",
          "locationName" : "type",
          "documentation" : "The type of a finding described by the action."
        },
        "UpdatedAt" : {
          "shape" : "UpdatedAt",
          "locationName" : "updatedAt",
          "documentation" : "The time stamp at which a finding was last updated."
        }
      },
      "documentation" : "Representation of a abnormal or suspicious activity.",
      "required" : [ "AccountId", "SchemaVersion", "CreatedAt", "Resource", "Severity", "UpdatedAt", "Type", "Region", "Id", "Arn" ]
    },
    "FindingCriteria" : {
      "type" : "structure",
      "members" : {
        "Criterion" : {
          "shape" : "__mapOfCondition",
          "locationName" : "criterion",
          "documentation" : "Represents a map of finding properties that match specified conditions and values when querying findings."
        }
      },
      "documentation" : "Represents the criteria used for querying findings."
    },
    "FindingId" : {
      "type" : "string",
      "documentation" : "The unique identifier for the Finding"
    },
    "FindingIds" : {
      "type" : "list",
      "documentation" : "The list of the Findings.",
      "member" : {
        "shape" : "FindingId"
      }
    },
    "FindingStatisticType" : {
      "type" : "string",
      "documentation" : "The types of finding statistics.",
      "enum" : [ "COUNT_BY_SEVERITY" ]
    },
    "FindingStatisticTypes" : {
      "type" : "list",
      "documentation" : "The list of the finding statistics.",
      "member" : {
        "shape" : "FindingStatisticType"
      }
    },
    "FindingStatistics" : {
      "type" : "structure",
      "members" : {
        "CountBySeverity" : {
          "shape" : "__mapOfCountBySeverityFindingStatistic",
          "locationName" : "countBySeverity",
          "documentation" : "Represents a map of severity to count statistic for a set of findings"
        }
      },
      "documentation" : "Finding statistics object."
    },
    "FindingType" : {
      "type" : "string",
      "documentation" : "The finding type for the finding"
    },
    "FindingTypes" : {
      "type" : "list",
      "documentation" : "The list of the finding types.",
      "member" : {
        "shape" : "FindingType"
      }
    },
    "Findings" : {
      "type" : "list",
      "documentation" : "A list of findings.",
      "member" : {
        "shape" : "Finding"
      }
    },
    "GeoLocation" : {
      "type" : "structure",
      "members" : {
        "Lat" : {
          "shape" : "__double",
          "locationName" : "lat",
          "documentation" : "Latitude information of remote IP address."
        },
        "Lon" : {
          "shape" : "__double",
          "locationName" : "lon",
          "documentation" : "Longitude information of remote IP address."
        }
      },
      "documentation" : "Location information of the remote IP address."
    },
    "GetDetectorRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector that you want to retrieve."
        }
      },
      "required" : [ "DetectorId" ]
    },
    "GetDetectorResponse" : {
      "type" : "structure",
      "members" : {
        "CreatedAt" : {
          "shape" : "CreatedAt",
          "locationName" : "createdAt"
        },
        "ServiceRole" : {
          "shape" : "ServiceRole",
          "locationName" : "serviceRole"
        },
        "Status" : {
          "shape" : "DetectorStatus",
          "locationName" : "status"
        },
        "UpdatedAt" : {
          "shape" : "UpdatedAt",
          "locationName" : "updatedAt"
        }
      }
    },
    "GetFilterRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The detector ID that specifies the GuardDuty service where you want to list the details of the specified filter."
        },
        "FilterName" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "filterName",
          "documentation" : "The name of the filter whose details you want to get."
        }
      },
      "required" : [ "DetectorId", "FilterName" ]
    },
    "GetFilterResponse" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "FilterAction",
          "locationName" : "action",
          "documentation" : "Specifies the action that is to be applied to the findings that match the filter."
        },
        "Description" : {
          "shape" : "FilterDescription",
          "locationName" : "description",
          "documentation" : "The description of the filter."
        },
        "FindingCriteria" : {
          "shape" : "FindingCriteria",
          "locationName" : "findingCriteria",
          "documentation" : "Represents the criteria to be used in the filter for querying findings."
        },
        "Name" : {
          "shape" : "FilterName",
          "locationName" : "name",
          "documentation" : "The name of the filter."
        },
        "Rank" : {
          "shape" : "FilterRank",
          "locationName" : "rank",
          "documentation" : "Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings."
        }
      }
    },
    "GetFindingsRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve."
        },
        "FindingIds" : {
          "shape" : "FindingIds",
          "locationName" : "findingIds",
          "documentation" : "IDs of the findings that you want to retrieve."
        },
        "SortCriteria" : {
          "shape" : "SortCriteria",
          "locationName" : "sortCriteria",
          "documentation" : "Represents the criteria used for sorting findings."
        }
      },
      "documentation" : "GetFindings request body.",
      "required" : [ "DetectorId" ]
    },
    "GetFindingsResponse" : {
      "type" : "structure",
      "members" : {
        "Findings" : {
          "shape" : "Findings",
          "locationName" : "findings"
        }
      }
    },
    "GetFindingsStatisticsRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve."
        },
        "FindingCriteria" : {
          "shape" : "FindingCriteria",
          "locationName" : "findingCriteria",
          "documentation" : "Represents the criteria used for querying findings."
        },
        "FindingStatisticTypes" : {
          "shape" : "FindingStatisticTypes",
          "locationName" : "findingStatisticTypes",
          "documentation" : "Types of finding statistics to retrieve."
        }
      },
      "documentation" : "GetFindingsStatistics request body.",
      "required" : [ "DetectorId" ]
    },
    "GetFindingsStatisticsResponse" : {
      "type" : "structure",
      "members" : {
        "FindingStatistics" : {
          "shape" : "FindingStatistics",
          "locationName" : "findingStatistics",
          "documentation" : "Finding statistics object."
        }
      }
    },
    "GetIPSetRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The detectorID that specifies the GuardDuty service whose IPSet you want to retrieve."
        },
        "IpSetId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ipSetId",
          "documentation" : "The unique ID that specifies the IPSet that you want to describe."
        }
      },
      "required" : [ "DetectorId", "IpSetId" ]
    },
    "GetIPSetResponse" : {
      "type" : "structure",
      "members" : {
        "Format" : {
          "shape" : "IpSetFormat",
          "locationName" : "format",
          "documentation" : "The format of the file that contains the IPSet."
        },
        "Location" : {
          "shape" : "Location",
          "locationName" : "location",
          "documentation" : "The URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)"
        },
        "Name" : {
          "shape" : "Name",
          "locationName" : "name",
          "documentation" : "The user friendly name to identify the IPSet. This name is displayed in all findings that are triggered by activity that involves IP addresses included in this IPSet."
        },
        "Status" : {
          "shape" : "IpSetStatus",
          "locationName" : "status",
          "documentation" : "The status of ipSet file uploaded."
        }
      }
    },
    "GetInvitationsCountRequest" : {
      "type" : "structure",
      "members" : { }
    },
    "GetInvitationsCountResponse" : {
      "type" : "structure",
      "members" : {
        "InvitationsCount" : {
          "shape" : "__integer",
          "locationName" : "invitationsCount",
          "documentation" : "The number of received invitations."
        }
      }
    },
    "GetMasterAccountRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty member account."
        }
      },
      "required" : [ "DetectorId" ]
    },
    "GetMasterAccountResponse" : {
      "type" : "structure",
      "members" : {
        "Master" : {
          "shape" : "Master",
          "locationName" : "master"
        }
      }
    },
    "GetMembersRequest" : {
      "type" : "structure",
      "members" : {
        "AccountIds" : {
          "shape" : "AccountIds",
          "locationName" : "accountIds",
          "documentation" : "A list of account IDs of the GuardDuty member accounts that you want to describe."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty account whose members you want to retrieve."
        }
      },
      "documentation" : "GetMembers request body.",
      "required" : [ "DetectorId" ]
    },
    "GetMembersResponse" : {
      "type" : "structure",
      "members" : {
        "Members" : {
          "shape" : "Members",
          "locationName" : "members"
        },
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "GetThreatIntelSetRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to describe."
        },
        "ThreatIntelSetId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "threatIntelSetId",
          "documentation" : "The unique ID that specifies the ThreatIntelSet that you want to describe."
        }
      },
      "required" : [ "ThreatIntelSetId", "DetectorId" ]
    },
    "GetThreatIntelSetResponse" : {
      "type" : "structure",
      "members" : {
        "Format" : {
          "shape" : "ThreatIntelSetFormat",
          "locationName" : "format",
          "documentation" : "The format of the threatIntelSet."
        },
        "Location" : {
          "shape" : "Location",
          "locationName" : "location",
          "documentation" : "The URI of the file that contains the ThreatIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)."
        },
        "Name" : {
          "shape" : "Name",
          "locationName" : "name",
          "documentation" : "A user-friendly ThreatIntelSet name that is displayed in all finding generated by activity that involves IP addresses included in this ThreatIntelSet."
        },
        "Status" : {
          "shape" : "ThreatIntelSetStatus",
          "locationName" : "status",
          "documentation" : "The status of threatIntelSet file uploaded."
        }
      }
    },
    "IamInstanceProfile" : {
      "type" : "structure",
      "members" : {
        "Arn" : {
          "shape" : "__string",
          "locationName" : "arn",
          "documentation" : "AWS EC2 instance profile ARN."
        },
        "Id" : {
          "shape" : "__string",
          "locationName" : "id",
          "documentation" : "AWS EC2 instance profile ID."
        }
      },
      "documentation" : "The profile information of the EC2 instance."
    },
    "InstanceDetails" : {
      "type" : "structure",
      "members" : {
        "AvailabilityZone" : {
          "shape" : "__string",
          "locationName" : "availabilityZone",
          "documentation" : "The availability zone of the EC2 instance."
        },
        "IamInstanceProfile" : {
          "shape" : "IamInstanceProfile",
          "locationName" : "iamInstanceProfile"
        },
        "ImageDescription" : {
          "shape" : "__string",
          "locationName" : "imageDescription",
          "documentation" : "The image description of the EC2 instance."
        },
        "ImageId" : {
          "shape" : "__string",
          "locationName" : "imageId",
          "documentation" : "The image ID of the EC2 instance."
        },
        "InstanceId" : {
          "shape" : "__string",
          "locationName" : "instanceId",
          "documentation" : "The ID of the EC2 instance."
        },
        "InstanceState" : {
          "shape" : "__string",
          "locationName" : "instanceState",
          "documentation" : "The state of the EC2 instance."
        },
        "InstanceType" : {
          "shape" : "__string",
          "locationName" : "instanceType",
          "documentation" : "The type of the EC2 instance."
        },
        "LaunchTime" : {
          "shape" : "__string",
          "locationName" : "launchTime",
          "documentation" : "The launch time of the EC2 instance."
        },
        "NetworkInterfaces" : {
          "shape" : "NetworkInterfaces",
          "locationName" : "networkInterfaces",
          "documentation" : "The network interface information of the EC2 instance."
        },
        "Platform" : {
          "shape" : "__string",
          "locationName" : "platform",
          "documentation" : "The platform of the EC2 instance."
        },
        "ProductCodes" : {
          "shape" : "ProductCodes",
          "locationName" : "productCodes",
          "documentation" : "The product code of the EC2 instance."
        },
        "Tags" : {
          "shape" : "Tags",
          "locationName" : "tags",
          "documentation" : "The tags of the EC2 instance."
        }
      },
      "documentation" : "The information about the EC2 instance associated with the activity that prompted GuardDuty to generate a finding."
    },
    "InternalServerErrorException" : {
      "type" : "structure",
      "members" : {
        "Message" : {
          "shape" : "__string",
          "locationName" : "message",
          "documentation" : "The error message."
        },
        "Type" : {
          "shape" : "__string",
          "locationName" : "__type",
          "documentation" : "The error type."
        }
      },
      "documentation" : "Error response object.",
      "exception" : true,
      "error" : {
        "httpStatusCode" : 500
      }
    },
    "Invitation" : {
      "type" : "structure",
      "members" : {
        "AccountId" : {
          "shape" : "__string",
          "locationName" : "accountId",
          "documentation" : "Inviter account ID"
        },
        "InvitationId" : {
          "shape" : "InvitationId",
          "locationName" : "invitationId",
          "documentation" : "This value is used to validate the inviter account to the member account."
        },
        "InvitedAt" : {
          "shape" : "InvitedAt",
          "locationName" : "invitedAt",
          "documentation" : "Timestamp at which the invitation was sent"
        },
        "RelationshipStatus" : {
          "shape" : "__string",
          "locationName" : "relationshipStatus",
          "documentation" : "The status of the relationship between the inviter and invitee accounts."
        }
      },
      "documentation" : "Invitation from an AWS account to become the current account's master."
    },
    "InvitationId" : {
      "type" : "string",
      "documentation" : "This value is used to validate the master account to the member account."
    },
    "Invitations" : {
      "type" : "list",
      "documentation" : "A list of invitation descriptions.",
      "member" : {
        "shape" : "Invitation"
      }
    },
    "InviteMembersRequest" : {
      "type" : "structure",
      "members" : {
        "AccountIds" : {
          "shape" : "AccountIds",
          "locationName" : "accountIds",
          "documentation" : "A list of account IDs of the accounts that you want to invite to GuardDuty as members."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty account with which you want to invite members."
        },
        "DisableEmailNotification" : {
          "shape" : "__boolean",
          "locationName" : "disableEmailNotification",
          "documentation" : "A boolean value that specifies whether you want to disable email notification to the accounts that you’re inviting to GuardDuty as members."
        },
        "Message" : {
          "shape" : "Message",
          "locationName" : "message",
          "documentation" : "The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members."
        }
      },
      "documentation" : "InviteMembers request body.",
      "required" : [ "DetectorId" ]
    },
    "InviteMembersResponse" : {
      "type" : "structure",
      "members" : {
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "InvitedAt" : {
      "type" : "string",
      "documentation" : "Timestamp at which a member has been invited. The format will be ISO-8601."
    },
    "IpSetFormat" : {
      "type" : "string",
      "documentation" : "The format of the ipSet.",
      "enum" : [ "TXT", "STIX", "OTX_CSV", "ALIEN_VAULT", "PROOF_POINT", "FIRE_EYE" ]
    },
    "IpSetId" : {
      "type" : "string",
      "documentation" : "The unique identifier for an IP Set"
    },
    "IpSetIds" : {
      "type" : "list",
      "documentation" : "A list of the IP set IDs",
      "member" : {
        "shape" : "IpSetId"
      }
    },
    "IpSetStatus" : {
      "type" : "string",
      "documentation" : "The status of ipSet file uploaded.",
      "enum" : [ "INACTIVE", "ACTIVATING", "ACTIVE", "DEACTIVATING", "ERROR", "DELETE_PENDING", "DELETED" ]
    },
    "Ipv6Address" : {
      "type" : "string",
      "documentation" : "IpV6 address of the EC2 instance."
    },
    "Ipv6Addresses" : {
      "type" : "list",
      "documentation" : "A list of EC2 instance IPv6 address information.",
      "member" : {
        "shape" : "Ipv6Address"
      }
    },
    "ListDetectorsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "You can use this parameter to indicate the maximum number of detectors that you want in the response."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListDetectors action. For subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data."
        }
      }
    },
    "ListDetectorsResponse" : {
      "type" : "structure",
      "members" : {
        "DetectorIds" : {
          "shape" : "DetectorIds",
          "locationName" : "detectorIds"
        },
        "NextToken" : {
          "shape" : "NextToken",
          "locationName" : "nextToken"
        }
      }
    },
    "ListFiltersRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The ID of the detector that specifies the GuardDuty service where you want to list filters."
        },
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "Indicates the maximum number of items that you want in the response. The maximum value is 50."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "Paginates results. Set the value of this parameter to NULL on your first call to the ListFilters operation.For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data."
        }
      },
      "required" : [ "DetectorId" ]
    },
    "ListFiltersResponse" : {
      "type" : "structure",
      "members" : {
        "FilterNames" : {
          "shape" : "FilterNames",
          "locationName" : "filterNames"
        },
        "NextToken" : {
          "shape" : "NextToken",
          "locationName" : "nextToken"
        }
      }
    },
    "ListFindingsRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The ID of the detector that specifies the GuardDuty service whose findings you want to list."
        },
        "FindingCriteria" : {
          "shape" : "FindingCriteria",
          "locationName" : "findingCriteria",
          "documentation" : "Represents the criteria used for querying findings."
        },
        "MaxResults" : {
          "shape" : "MaxResults",
          "locationName" : "maxResults",
          "documentation" : "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50."
        },
        "NextToken" : {
          "shape" : "NextToken",
          "locationName" : "nextToken",
          "documentation" : "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListFindings action. For subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data."
        },
        "SortCriteria" : {
          "shape" : "SortCriteria",
          "locationName" : "sortCriteria",
          "documentation" : "Represents the criteria used for sorting findings."
        }
      },
      "documentation" : "ListFindings request body.",
      "required" : [ "DetectorId" ]
    },
    "ListFindingsResponse" : {
      "type" : "structure",
      "members" : {
        "FindingIds" : {
          "shape" : "FindingIds",
          "locationName" : "findingIds"
        },
        "NextToken" : {
          "shape" : "NextToken",
          "locationName" : "nextToken"
        }
      }
    },
    "ListIPSetsRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector that you want to retrieve."
        },
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 7. The maximum value is 7."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListIPSet action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data."
        }
      },
      "required" : [ "DetectorId" ]
    },
    "ListIPSetsResponse" : {
      "type" : "structure",
      "members" : {
        "IpSetIds" : {
          "shape" : "IpSetIds",
          "locationName" : "ipSetIds"
        },
        "NextToken" : {
          "shape" : "NextToken",
          "locationName" : "nextToken"
        }
      }
    },
    "ListInvitationsRequest" : {
      "type" : "structure",
      "members" : {
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "You can use this parameter to indicate the maximum number of invitations you want in the response. The default value is 50. The maximum value is 50."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListInvitations action. Subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data."
        }
      }
    },
    "ListInvitationsResponse" : {
      "type" : "structure",
      "members" : {
        "Invitations" : {
          "shape" : "Invitations",
          "locationName" : "invitations"
        },
        "NextToken" : {
          "shape" : "NextToken",
          "locationName" : "nextToken"
        }
      }
    },
    "ListMembersRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty account whose members you want to list."
        },
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 1. The maximum value is 50."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListMembers action. Subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data."
        },
        "OnlyAssociated" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "onlyAssociated",
          "documentation" : "Specifies what member accounts the response is to include based on their relationship status with the master account. The default value is TRUE. If onlyAssociated is set to TRUE, the response will include member accounts whose relationship status with the master is set to Enabled, Disabled. If onlyAssociated is set to FALSE, the response will include all existing member accounts."
        }
      },
      "required" : [ "DetectorId" ]
    },
    "ListMembersResponse" : {
      "type" : "structure",
      "members" : {
        "Members" : {
          "shape" : "Members",
          "locationName" : "members"
        },
        "NextToken" : {
          "shape" : "NextToken",
          "locationName" : "nextToken"
        }
      }
    },
    "ListThreatIntelSetsRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The detectorID that specifies the GuardDuty service whose ThreatIntelSets you want to list."
        },
        "MaxResults" : {
          "shape" : "MaxResults",
          "location" : "querystring",
          "locationName" : "maxResults",
          "documentation" : "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 7. The maximum value is 7."
        },
        "NextToken" : {
          "shape" : "__string",
          "location" : "querystring",
          "locationName" : "nextToken",
          "documentation" : "Pagination token to start retrieving threat intel sets from."
        }
      },
      "required" : [ "DetectorId" ]
    },
    "ListThreatIntelSetsResponse" : {
      "type" : "structure",
      "members" : {
        "NextToken" : {
          "shape" : "NextToken",
          "locationName" : "nextToken"
        },
        "ThreatIntelSetIds" : {
          "shape" : "ThreatIntelSetIds",
          "locationName" : "threatIntelSetIds"
        }
      }
    },
    "LocalPortDetails" : {
      "type" : "structure",
      "members" : {
        "Port" : {
          "shape" : "__integer",
          "locationName" : "port",
          "documentation" : "Port number of the local connection."
        },
        "PortName" : {
          "shape" : "__string",
          "locationName" : "portName",
          "documentation" : "Port name of the local connection."
        }
      },
      "documentation" : "Local port information of the connection."
    },
    "Location" : {
      "type" : "string",
      "documentation" : "The location of the S3 bucket where the list resides. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)"
    },
    "Master" : {
      "type" : "structure",
      "members" : {
        "AccountId" : {
          "shape" : "__string",
          "locationName" : "accountId",
          "documentation" : "Master account ID"
        },
        "InvitationId" : {
          "shape" : "InvitationId",
          "locationName" : "invitationId",
          "documentation" : "This value is used to validate the master account to the member account."
        },
        "InvitedAt" : {
          "shape" : "InvitedAt",
          "locationName" : "invitedAt",
          "documentation" : "Timestamp at which the invitation was sent"
        },
        "RelationshipStatus" : {
          "shape" : "__string",
          "locationName" : "relationshipStatus",
          "documentation" : "The status of the relationship between the master and member accounts."
        }
      },
      "documentation" : "Contains details about the master account."
    },
    "MasterId" : {
      "type" : "string",
      "documentation" : "The master account ID."
    },
    "MaxResults" : {
      "type" : "integer",
      "min" : 1,
      "max" : 50
    },
    "Member" : {
      "type" : "structure",
      "members" : {
        "AccountId" : {
          "shape" : "AccountId",
          "locationName" : "accountId"
        },
        "DetectorId" : {
          "shape" : "DetectorId",
          "locationName" : "detectorId"
        },
        "Email" : {
          "shape" : "Email",
          "locationName" : "email",
          "documentation" : "Member account's email address."
        },
        "InvitedAt" : {
          "shape" : "InvitedAt",
          "locationName" : "invitedAt",
          "documentation" : "Timestamp at which the invitation was sent"
        },
        "MasterId" : {
          "shape" : "MasterId",
          "locationName" : "masterId"
        },
        "RelationshipStatus" : {
          "shape" : "__string",
          "locationName" : "relationshipStatus",
          "documentation" : "The status of the relationship between the member and the master."
        },
        "UpdatedAt" : {
          "shape" : "UpdatedAt",
          "locationName" : "updatedAt"
        }
      },
      "documentation" : "Contains details about the member account.",
      "required" : [ "Email", "AccountId", "MasterId", "UpdatedAt", "RelationshipStatus" ]
    },
    "Members" : {
      "type" : "list",
      "documentation" : "A list of member descriptions.",
      "member" : {
        "shape" : "Member"
      }
    },
    "Message" : {
      "type" : "string",
      "documentation" : "The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members."
    },
    "Name" : {
      "type" : "string",
      "documentation" : "The user-friendly name to identify the list."
    },
    "Neq" : {
      "type" : "list",
      "documentation" : "Represents the not equal condition to be applied to a single field when querying for findings.",
      "member" : {
        "shape" : "__string"
      }
    },
    "NetworkConnectionAction" : {
      "type" : "structure",
      "members" : {
        "Blocked" : {
          "shape" : "__boolean",
          "locationName" : "blocked",
          "documentation" : "Network connection blocked information."
        },
        "ConnectionDirection" : {
          "shape" : "__string",
          "locationName" : "connectionDirection",
          "documentation" : "Network connection direction."
        },
        "LocalPortDetails" : {
          "shape" : "LocalPortDetails",
          "locationName" : "localPortDetails",
          "documentation" : "Local port information of the connection."
        },
        "Protocol" : {
          "shape" : "__string",
          "locationName" : "protocol",
          "documentation" : "Network connection protocol."
        },
        "RemoteIpDetails" : {
          "shape" : "RemoteIpDetails",
          "locationName" : "remoteIpDetails",
          "documentation" : "Remote IP information of the connection."
        },
        "RemotePortDetails" : {
          "shape" : "RemotePortDetails",
          "locationName" : "remotePortDetails",
          "documentation" : "Remote port information of the connection."
        }
      },
      "documentation" : "Information about the NETWORK_CONNECTION action described in this finding."
    },
    "NetworkInterface" : {
      "type" : "structure",
      "members" : {
        "Ipv6Addresses" : {
          "shape" : "Ipv6Addresses",
          "locationName" : "ipv6Addresses",
          "documentation" : "A list of EC2 instance IPv6 address information."
        },
        "NetworkInterfaceId" : {
          "shape" : "NetworkInterfaceId",
          "locationName" : "networkInterfaceId",
          "documentation" : "The ID of the network interface"
        },
        "PrivateDnsName" : {
          "shape" : "PrivateDnsName",
          "locationName" : "privateDnsName",
          "documentation" : "Private DNS name of the EC2 instance."
        },
        "PrivateIpAddress" : {
          "shape" : "PrivateIpAddress",
          "locationName" : "privateIpAddress",
          "documentation" : "Private IP address of the EC2 instance."
        },
        "PrivateIpAddresses" : {
          "shape" : "PrivateIpAddresses",
          "locationName" : "privateIpAddresses",
          "documentation" : "Other private IP address information of the EC2 instance."
        },
        "PublicDnsName" : {
          "shape" : "__string",
          "locationName" : "publicDnsName",
          "documentation" : "Public DNS name of the EC2 instance."
        },
        "PublicIp" : {
          "shape" : "__string",
          "locationName" : "publicIp",
          "documentation" : "Public IP address of the EC2 instance."
        },
        "SecurityGroups" : {
          "shape" : "SecurityGroups",
          "locationName" : "securityGroups",
          "documentation" : "Security groups associated with the EC2 instance."
        },
        "SubnetId" : {
          "shape" : "__string",
          "locationName" : "subnetId",
          "documentation" : "The subnet ID of the EC2 instance."
        },
        "VpcId" : {
          "shape" : "__string",
          "locationName" : "vpcId",
          "documentation" : "The VPC ID of the EC2 instance."
        }
      },
      "documentation" : "The network interface information of the EC2 instance."
    },
    "NetworkInterfaceId" : {
      "type" : "string",
      "documentation" : "The ID of the network interface."
    },
    "NetworkInterfaces" : {
      "type" : "list",
      "documentation" : "The network interface information of the EC2 instance.",
      "member" : {
        "shape" : "NetworkInterface"
      }
    },
    "NextToken" : {
      "type" : "string",
      "documentation" : "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data."
    },
    "OrderBy" : {
      "type" : "string",
      "enum" : [ "ASC", "DESC" ]
    },
    "Organization" : {
      "type" : "structure",
      "members" : {
        "Asn" : {
          "shape" : "__string",
          "locationName" : "asn",
          "documentation" : "Autonomous system number of the internet provider of the remote IP address."
        },
        "AsnOrg" : {
          "shape" : "__string",
          "locationName" : "asnOrg",
          "documentation" : "Organization that registered this ASN."
        },
        "Isp" : {
          "shape" : "__string",
          "locationName" : "isp",
          "documentation" : "ISP information for the internet provider."
        },
        "Org" : {
          "shape" : "__string",
          "locationName" : "org",
          "documentation" : "Name of the internet provider."
        }
      },
      "documentation" : "ISP Organization information of the remote IP address."
    },
    "PortProbeAction" : {
      "type" : "structure",
      "members" : {
        "Blocked" : {
          "shape" : "__boolean",
          "locationName" : "blocked",
          "documentation" : "Port probe blocked information."
        },
        "PortProbeDetails" : {
          "shape" : "__listOfPortProbeDetail",
          "locationName" : "portProbeDetails",
          "documentation" : "A list of port probe details objects."
        }
      },
      "documentation" : "Information about the PORT_PROBE action described in this finding."
    },
    "PortProbeDetail" : {
      "type" : "structure",
      "members" : {
        "LocalPortDetails" : {
          "shape" : "LocalPortDetails",
          "locationName" : "localPortDetails",
          "documentation" : "Local port information of the connection."
        },
        "RemoteIpDetails" : {
          "shape" : "RemoteIpDetails",
          "locationName" : "remoteIpDetails",
          "documentation" : "Remote IP information of the connection."
        }
      },
      "documentation" : "Details about the port probe finding."
    },
    "PrivateDnsName" : {
      "type" : "string",
      "documentation" : "Private DNS name of the EC2 instance."
    },
    "PrivateIpAddress" : {
      "type" : "string",
      "documentation" : "Private IP address of the EC2 instance."
    },
    "PrivateIpAddressDetails" : {
      "type" : "structure",
      "members" : {
        "PrivateDnsName" : {
          "shape" : "PrivateDnsName",
          "locationName" : "privateDnsName",
          "documentation" : "Private DNS name of the EC2 instance."
        },
        "PrivateIpAddress" : {
          "shape" : "PrivateIpAddress",
          "locationName" : "privateIpAddress",
          "documentation" : "Private IP address of the EC2 instance."
        }
      },
      "documentation" : "Other private IP address information of the EC2 instance."
    },
    "PrivateIpAddresses" : {
      "type" : "list",
      "documentation" : "Other private IP address information of the EC2 instance.",
      "member" : {
        "shape" : "PrivateIpAddressDetails"
      }
    },
    "ProductCode" : {
      "type" : "structure",
      "members" : {
        "Code" : {
          "shape" : "__string",
          "locationName" : "code",
          "documentation" : "Product code information."
        },
        "ProductType" : {
          "shape" : "__string",
          "locationName" : "productType",
          "documentation" : "Product code type."
        }
      },
      "documentation" : "The product code of the EC2 instance."
    },
    "ProductCodes" : {
      "type" : "list",
      "documentation" : "The product code of the EC2 instance.",
      "member" : {
        "shape" : "ProductCode"
      }
    },
    "RemoteIpDetails" : {
      "type" : "structure",
      "members" : {
        "City" : {
          "shape" : "City",
          "locationName" : "city",
          "documentation" : "City information of the remote IP address."
        },
        "Country" : {
          "shape" : "Country",
          "locationName" : "country",
          "documentation" : "Country code of the remote IP address."
        },
        "GeoLocation" : {
          "shape" : "GeoLocation",
          "locationName" : "geoLocation",
          "documentation" : "Location information of the remote IP address."
        },
        "IpAddressV4" : {
          "shape" : "__string",
          "locationName" : "ipAddressV4",
          "documentation" : "IPV4 remote address of the connection."
        },
        "Organization" : {
          "shape" : "Organization",
          "locationName" : "organization",
          "documentation" : "ISP Organization information of the remote IP address."
        }
      },
      "documentation" : "Remote IP information of the connection."
    },
    "RemotePortDetails" : {
      "type" : "structure",
      "members" : {
        "Port" : {
          "shape" : "__integer",
          "locationName" : "port",
          "documentation" : "Port number of the remote connection."
        },
        "PortName" : {
          "shape" : "__string",
          "locationName" : "portName",
          "documentation" : "Port name of the remote connection."
        }
      },
      "documentation" : "Remote port information of the connection."
    },
    "Resource" : {
      "type" : "structure",
      "members" : {
        "AccessKeyDetails" : {
          "shape" : "AccessKeyDetails",
          "locationName" : "accessKeyDetails"
        },
        "InstanceDetails" : {
          "shape" : "InstanceDetails",
          "locationName" : "instanceDetails"
        },
        "ResourceType" : {
          "shape" : "__string",
          "locationName" : "resourceType",
          "documentation" : "The type of the AWS resource."
        }
      },
      "documentation" : "The AWS resource associated with the activity that prompted GuardDuty to generate a finding."
    },
    "SecurityGroup" : {
      "type" : "structure",
      "members" : {
        "GroupId" : {
          "shape" : "__string",
          "locationName" : "groupId",
          "documentation" : "EC2 instance's security group ID."
        },
        "GroupName" : {
          "shape" : "__string",
          "locationName" : "groupName",
          "documentation" : "EC2 instance's security group name."
        }
      },
      "documentation" : "Security groups associated with the EC2 instance."
    },
    "SecurityGroups" : {
      "type" : "list",
      "documentation" : "Security groups associated with the EC2 instance.",
      "member" : {
        "shape" : "SecurityGroup"
      }
    },
    "Service" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "Action",
          "locationName" : "action",
          "documentation" : "Information about the activity described in a finding."
        },
        "Archived" : {
          "shape" : "__boolean",
          "locationName" : "archived",
          "documentation" : "Indicates whether this finding is archived."
        },
        "Count" : {
          "shape" : "__integer",
          "locationName" : "count",
          "documentation" : "Total count of the occurrences of this finding type."
        },
        "DetectorId" : {
          "shape" : "DetectorId",
          "locationName" : "detectorId",
          "documentation" : "Detector ID for the GuardDuty service."
        },
        "EventFirstSeen" : {
          "shape" : "__string",
          "locationName" : "eventFirstSeen",
          "documentation" : "First seen timestamp of the activity that prompted GuardDuty to generate this finding."
        },
        "EventLastSeen" : {
          "shape" : "__string",
          "locationName" : "eventLastSeen",
          "documentation" : "Last seen timestamp of the activity that prompted GuardDuty to generate this finding."
        },
        "ResourceRole" : {
          "shape" : "__string",
          "locationName" : "resourceRole",
          "documentation" : "Resource role information for this finding."
        },
        "ServiceName" : {
          "shape" : "__string",
          "locationName" : "serviceName",
          "documentation" : "The name of the AWS service (GuardDuty) that generated a finding."
        },
        "UserFeedback" : {
          "shape" : "__string",
          "locationName" : "userFeedback",
          "documentation" : "Feedback left about the finding."
        }
      },
      "documentation" : "Additional information assigned to the generated finding by GuardDuty."
    },
    "ServiceRole" : {
      "type" : "string",
      "documentation" : "Customer serviceRole name or ARN for accessing customer resources"
    },
    "SortCriteria" : {
      "type" : "structure",
      "members" : {
        "AttributeName" : {
          "shape" : "__string",
          "locationName" : "attributeName",
          "documentation" : "Represents the finding attribute (for example, accountId) by which to sort findings."
        },
        "OrderBy" : {
          "shape" : "OrderBy",
          "locationName" : "orderBy",
          "documentation" : "Order by which the sorted findings are to be displayed."
        }
      },
      "documentation" : "Represents the criteria used for sorting findings."
    },
    "StartMonitoringMembersRequest" : {
      "type" : "structure",
      "members" : {
        "AccountIds" : {
          "shape" : "AccountIds",
          "locationName" : "accountIds",
          "documentation" : "A list of account IDs of the GuardDuty member accounts whose findings you want the master account to monitor."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty account whom you want to re-enable to monitor members' findings."
        }
      },
      "documentation" : "StartMonitoringMembers request body.",
      "required" : [ "DetectorId" ]
    },
    "StartMonitoringMembersResponse" : {
      "type" : "structure",
      "members" : {
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "StopMonitoringMembersRequest" : {
      "type" : "structure",
      "members" : {
        "AccountIds" : {
          "shape" : "AccountIds",
          "locationName" : "accountIds",
          "documentation" : "A list of account IDs of the GuardDuty member accounts whose findings you want the master account to stop monitoring."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector of the GuardDuty account that you want to stop from monitor members' findings."
        }
      },
      "documentation" : "StopMonitoringMembers request body.",
      "required" : [ "DetectorId" ]
    },
    "StopMonitoringMembersResponse" : {
      "type" : "structure",
      "members" : {
        "UnprocessedAccounts" : {
          "shape" : "UnprocessedAccounts",
          "locationName" : "unprocessedAccounts",
          "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed."
        }
      }
    },
    "Tag" : {
      "type" : "structure",
      "members" : {
        "Key" : {
          "shape" : "__string",
          "locationName" : "key",
          "documentation" : "EC2 instance tag key."
        },
        "Value" : {
          "shape" : "__string",
          "locationName" : "value",
          "documentation" : "EC2 instance tag value."
        }
      },
      "documentation" : "A tag of the EC2 instance."
    },
    "Tags" : {
      "type" : "list",
      "documentation" : "The tags of the EC2 instance.",
      "member" : {
        "shape" : "Tag"
      }
    },
    "ThreatIntelSetFormat" : {
      "type" : "string",
      "documentation" : "The format of the threatIntelSet.",
      "enum" : [ "TXT", "STIX", "OTX_CSV", "ALIEN_VAULT", "PROOF_POINT", "FIRE_EYE" ]
    },
    "ThreatIntelSetId" : {
      "type" : "string",
      "documentation" : "The unique identifier for an threat intel set"
    },
    "ThreatIntelSetIds" : {
      "type" : "list",
      "documentation" : "The list of the threat intel set IDs",
      "member" : {
        "shape" : "ThreatIntelSetId"
      }
    },
    "ThreatIntelSetStatus" : {
      "type" : "string",
      "documentation" : "The status of threatIntelSet file uploaded.",
      "enum" : [ "INACTIVE", "ACTIVATING", "ACTIVE", "DEACTIVATING", "ERROR", "DELETE_PENDING", "DELETED" ]
    },
    "UnarchiveFindingsRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The ID of the detector that specifies the GuardDuty service whose findings you want to unarchive."
        },
        "FindingIds" : {
          "shape" : "FindingIds",
          "locationName" : "findingIds",
          "documentation" : "IDs of the findings that you want to unarchive."
        }
      },
      "documentation" : "UnarchiveFindings request body.",
      "required" : [ "DetectorId" ]
    },
    "UnarchiveFindingsResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UnprocessedAccount" : {
      "type" : "structure",
      "members" : {
        "AccountId" : {
          "shape" : "__string",
          "locationName" : "accountId",
          "documentation" : "AWS Account ID."
        },
        "Result" : {
          "shape" : "__string",
          "locationName" : "result",
          "documentation" : "A reason why the account hasn't been processed."
        }
      },
      "documentation" : "An object containing the unprocessed account and a result string explaining why it was unprocessed.",
      "required" : [ "AccountId", "Result" ]
    },
    "UnprocessedAccounts" : {
      "type" : "list",
      "documentation" : "A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.",
      "member" : {
        "shape" : "UnprocessedAccount"
      }
    },
    "UpdateDetectorRequest" : {
      "type" : "structure",
      "members" : {
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector that you want to update."
        },
        "Enable" : {
          "shape" : "Enable",
          "locationName" : "enable",
          "documentation" : "Updated boolean value for the detector that specifies whether the detector is enabled."
        }
      },
      "documentation" : "UpdateDetector request body.",
      "required" : [ "DetectorId" ]
    },
    "UpdateDetectorResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateFilterRequest" : {
      "type" : "structure",
      "members" : {
        "Action" : {
          "shape" : "FilterAction",
          "locationName" : "action",
          "documentation" : "Specifies the action that is to be applied to the findings that match the filter."
        },
        "Description" : {
          "shape" : "FilterDescription",
          "locationName" : "description",
          "documentation" : "The description of the filter."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The unique ID of the detector that specifies the GuardDuty service where you want to update a filter."
        },
        "FilterName" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "filterName",
          "documentation" : "The name of the filter."
        },
        "FindingCriteria" : {
          "shape" : "FindingCriteria",
          "locationName" : "findingCriteria",
          "documentation" : "Represents the criteria to be used in the filter for querying findings."
        },
        "Rank" : {
          "shape" : "FilterRank",
          "locationName" : "rank",
          "documentation" : "Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings."
        }
      },
      "documentation" : "UpdateFilterRequest request body.",
      "required" : [ "DetectorId", "FilterName" ]
    },
    "UpdateFilterResponse" : {
      "type" : "structure",
      "members" : {
        "Name" : {
          "shape" : "FilterName",
          "locationName" : "name",
          "documentation" : "The name of the filter."
        }
      }
    },
    "UpdateFindingsFeedbackRequest" : {
      "type" : "structure",
      "members" : {
        "Comments" : {
          "shape" : "Comments",
          "locationName" : "comments",
          "documentation" : "Additional feedback about the GuardDuty findings."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The ID of the detector that specifies the GuardDuty service whose findings you want to mark as useful or not useful."
        },
        "Feedback" : {
          "shape" : "Feedback",
          "locationName" : "feedback",
          "documentation" : "Valid values: USEFUL | NOT_USEFUL"
        },
        "FindingIds" : {
          "shape" : "FindingIds",
          "locationName" : "findingIds",
          "documentation" : "IDs of the findings that you want to mark as useful or not useful."
        }
      },
      "documentation" : "UpdateFindingsFeedback request body.",
      "required" : [ "DetectorId" ]
    },
    "UpdateFindingsFeedbackResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateIPSetRequest" : {
      "type" : "structure",
      "members" : {
        "Activate" : {
          "shape" : "Activate",
          "locationName" : "activate",
          "documentation" : "The updated boolean value that specifies whether the IPSet is active or not."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The detectorID that specifies the GuardDuty service whose IPSet you want to update."
        },
        "IpSetId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "ipSetId",
          "documentation" : "The unique ID that specifies the IPSet that you want to update."
        },
        "Location" : {
          "shape" : "Location",
          "locationName" : "location",
          "documentation" : "The updated URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)."
        },
        "Name" : {
          "shape" : "Name",
          "locationName" : "name",
          "documentation" : "The unique ID that specifies the IPSet that you want to update."
        }
      },
      "documentation" : "UpdateIPSet request body.",
      "required" : [ "DetectorId", "IpSetId" ]
    },
    "UpdateIPSetResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdateThreatIntelSetRequest" : {
      "type" : "structure",
      "members" : {
        "Activate" : {
          "shape" : "Activate",
          "locationName" : "activate",
          "documentation" : "The updated boolean value that specifies whether the ThreateIntelSet is active or not."
        },
        "DetectorId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "detectorId",
          "documentation" : "The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update."
        },
        "Location" : {
          "shape" : "Location",
          "locationName" : "location",
          "documentation" : "The updated URI of the file that contains the ThreateIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)"
        },
        "Name" : {
          "shape" : "Name",
          "locationName" : "name",
          "documentation" : "The unique ID that specifies the ThreatIntelSet that you want to update."
        },
        "ThreatIntelSetId" : {
          "shape" : "__string",
          "location" : "uri",
          "locationName" : "threatIntelSetId",
          "documentation" : "The unique ID that specifies the ThreatIntelSet that you want to update."
        }
      },
      "documentation" : "UpdateThreatIntelSet request body.",
      "required" : [ "ThreatIntelSetId", "DetectorId" ]
    },
    "UpdateThreatIntelSetResponse" : {
      "type" : "structure",
      "members" : { }
    },
    "UpdatedAt" : {
      "type" : "string",
      "documentation" : "The first time a resource was created. The format will be ISO-8601."
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
    "__listOfPortProbeDetail" : {
      "type" : "list",
      "member" : {
        "shape" : "PortProbeDetail"
      }
    },
    "__long" : {
      "type" : "long"
    },
    "__mapOfCondition" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "Condition"
      }
    },
    "__mapOfCountBySeverityFindingStatistic" : {
      "type" : "map",
      "key" : {
        "shape" : "__string"
      },
      "value" : {
        "shape" : "CountBySeverityFindingStatistic"
      }
    },
    "__string" : {
      "type" : "string"
    },
    "__stringMin0Max64" : {
      "type" : "string",
      "min" : 0,
      "max" : 64
    },
    "__timestamp" : {
      "type" : "timestamp"
    }
  },
  "documentation" : "Assess, monitor, manage, and remediate security issues across your AWS infrastructure, applications, and data."
}