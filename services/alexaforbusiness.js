awsim['alexaforbusiness'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-11-09",
    "endpointPrefix":"a4b",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Alexa For Business",
    "serviceId":"Alexa For Business",
    "signatureVersion":"v4",
    "targetPrefix":"AlexaForBusiness",
    "uid":"alexaforbusiness-2017-11-09"
  },
  "operations":{
    "AssociateContactWithAddressBook":{
      "name":"AssociateContactWithAddressBook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateContactWithAddressBookRequest"},
      "output":{"shape":"AssociateContactWithAddressBookResponse"},
      "errors":[
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Associates a contact with a given address book.</p>"
    },
    "AssociateDeviceWithRoom":{
      "name":"AssociateDeviceWithRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateDeviceWithRoomRequest"},
      "output":{"shape":"AssociateDeviceWithRoomResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"DeviceNotRegisteredException"}
      ],
      "documentation":"<p>Associates a device with a given room. This applies all the settings from the room profile to the device, and all the skills in any skill groups added to that room. This operation requires the device to be online, or else a manual sync is required. </p>"
    },
    "AssociateSkillGroupWithRoom":{
      "name":"AssociateSkillGroupWithRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateSkillGroupWithRoomRequest"},
      "output":{"shape":"AssociateSkillGroupWithRoomResponse"},
      "documentation":"<p>Associates a skill group with a given room. This enables all skills in the associated skill group on all devices in the room.</p>"
    },
    "CreateAddressBook":{
      "name":"CreateAddressBook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateAddressBookRequest"},
      "output":{"shape":"CreateAddressBookResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates an address book with the specified details.</p>"
    },
    "CreateContact":{
      "name":"CreateContact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateContactRequest"},
      "output":{"shape":"CreateContactResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a contact with the specified details.</p>"
    },
    "CreateProfile":{
      "name":"CreateProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateProfileRequest"},
      "output":{"shape":"CreateProfileResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"AlreadyExistsException"}
      ],
      "documentation":"<p>Creates a new room profile with the specified details.</p>"
    },
    "CreateRoom":{
      "name":"CreateRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateRoomRequest"},
      "output":{"shape":"CreateRoomResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a room with the specified details.</p>"
    },
    "CreateSkillGroup":{
      "name":"CreateSkillGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateSkillGroupRequest"},
      "output":{"shape":"CreateSkillGroupResponse"},
      "errors":[
        {"shape":"AlreadyExistsException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a skill group with a specified name and description.</p>"
    },
    "CreateUser":{
      "name":"CreateUser",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateUserRequest"},
      "output":{"shape":"CreateUserResponse"},
      "errors":[
        {"shape":"ResourceInUseException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a user.</p>"
    },
    "DeleteAddressBook":{
      "name":"DeleteAddressBook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteAddressBookRequest"},
      "output":{"shape":"DeleteAddressBookResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes an address book by the address book ARN.</p>"
    },
    "DeleteContact":{
      "name":"DeleteContact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteContactRequest"},
      "output":{"shape":"DeleteContactResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a contact by the contact ARN.</p>"
    },
    "DeleteProfile":{
      "name":"DeleteProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteProfileRequest"},
      "output":{"shape":"DeleteProfileResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a room profile by the profile ARN.</p>"
    },
    "DeleteRoom":{
      "name":"DeleteRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRoomRequest"},
      "output":{"shape":"DeleteRoomResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a room by the room ARN.</p>"
    },
    "DeleteRoomSkillParameter":{
      "name":"DeleteRoomSkillParameter",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRoomSkillParameterRequest"},
      "output":{"shape":"DeleteRoomSkillParameterResponse"},
      "documentation":"<p>Deletes room skill parameter details by room, skill, and parameter key ID.</p>"
    },
    "DeleteSkillGroup":{
      "name":"DeleteSkillGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteSkillGroupRequest"},
      "output":{"shape":"DeleteSkillGroupResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a skill group by skill group ARN.</p>"
    },
    "DeleteUser":{
      "name":"DeleteUser",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteUserRequest"},
      "output":{"shape":"DeleteUserResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a specified user by user ARN and enrollment ARN.</p>"
    },
    "DisassociateContactFromAddressBook":{
      "name":"DisassociateContactFromAddressBook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateContactFromAddressBookRequest"},
      "output":{"shape":"DisassociateContactFromAddressBookResponse"},
      "documentation":"<p>Disassociates a contact from a given address book.</p>"
    },
    "DisassociateDeviceFromRoom":{
      "name":"DisassociateDeviceFromRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateDeviceFromRoomRequest"},
      "output":{"shape":"DisassociateDeviceFromRoomResponse"},
      "errors":[
        {"shape":"DeviceNotRegisteredException"}
      ],
      "documentation":"<p>Disassociates a device from its current room. The device continues to be connected to the Wi-Fi network and is still registered to the account. The device settings and skills are removed from the room.</p>"
    },
    "DisassociateSkillGroupFromRoom":{
      "name":"DisassociateSkillGroupFromRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateSkillGroupFromRoomRequest"},
      "output":{"shape":"DisassociateSkillGroupFromRoomResponse"},
      "documentation":"<p>Disassociates a skill group from a specified room. This disables all skills in the skill group on all devices in the room.</p>"
    },
    "GetAddressBook":{
      "name":"GetAddressBook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAddressBookRequest"},
      "output":{"shape":"GetAddressBookResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Gets address the book details by the address book ARN.</p>"
    },
    "GetContact":{
      "name":"GetContact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetContactRequest"},
      "output":{"shape":"GetContactResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Gets the contact details by the contact ARN.</p>"
    },
    "GetDevice":{
      "name":"GetDevice",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDeviceRequest"},
      "output":{"shape":"GetDeviceResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Gets the details of a device by device ARN.</p>"
    },
    "GetProfile":{
      "name":"GetProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetProfileRequest"},
      "output":{"shape":"GetProfileResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Gets the details of a room profile by profile ARN.</p>"
    },
    "GetRoom":{
      "name":"GetRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetRoomRequest"},
      "output":{"shape":"GetRoomResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Gets room details by room ARN.</p>"
    },
    "GetRoomSkillParameter":{
      "name":"GetRoomSkillParameter",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetRoomSkillParameterRequest"},
      "output":{"shape":"GetRoomSkillParameterResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>"
    },
    "GetSkillGroup":{
      "name":"GetSkillGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetSkillGroupRequest"},
      "output":{"shape":"GetSkillGroupResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Gets skill group details by skill group ARN.</p>"
    },
    "ListDeviceEvents":{
      "name":"ListDeviceEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListDeviceEventsRequest"},
      "output":{"shape":"ListDeviceEventsResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Lists the device event history, including device connection status, for up to 30 days.</p>"
    },
    "ListSkills":{
      "name":"ListSkills",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListSkillsRequest"},
      "output":{"shape":"ListSkillsResponse"},
      "documentation":"<p>Lists all enabled skills in a specific skill group.</p>"
    },
    "ListTags":{
      "name":"ListTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagsRequest"},
      "output":{"shape":"ListTagsResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Lists all tags for the specified resource.</p>"
    },
    "PutRoomSkillParameter":{
      "name":"PutRoomSkillParameter",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutRoomSkillParameterRequest"},
      "output":{"shape":"PutRoomSkillParameterResponse"},
      "documentation":"<p>Updates room skill parameter details by room, skill, and parameter key ID. Not all skills have a room skill parameter.</p>"
    },
    "ResolveRoom":{
      "name":"ResolveRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ResolveRoomRequest"},
      "output":{"shape":"ResolveRoomResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Determines the details for the room from which a skill request was invoked. This operation is used by skill developers.</p>"
    },
    "RevokeInvitation":{
      "name":"RevokeInvitation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RevokeInvitationRequest"},
      "output":{"shape":"RevokeInvitationResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Revokes an invitation and invalidates the enrollment URL.</p>"
    },
    "SearchAddressBooks":{
      "name":"SearchAddressBooks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchAddressBooksRequest"},
      "output":{"shape":"SearchAddressBooksResponse"},
      "documentation":"<p>Searches address books and lists the ones that meet a set of filter and sort criteria.</p>"
    },
    "SearchContacts":{
      "name":"SearchContacts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchContactsRequest"},
      "output":{"shape":"SearchContactsResponse"},
      "documentation":"<p>Searches contacts and lists the ones that meet a set of filter and sort criteria.</p>"
    },
    "SearchDevices":{
      "name":"SearchDevices",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchDevicesRequest"},
      "output":{"shape":"SearchDevicesResponse"},
      "documentation":"<p>Searches devices and lists the ones that meet a set of filter criteria.</p>"
    },
    "SearchProfiles":{
      "name":"SearchProfiles",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchProfilesRequest"},
      "output":{"shape":"SearchProfilesResponse"},
      "documentation":"<p>Searches room profiles and lists the ones that meet a set of filter criteria.</p>"
    },
    "SearchRooms":{
      "name":"SearchRooms",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchRoomsRequest"},
      "output":{"shape":"SearchRoomsResponse"},
      "documentation":"<p>Searches rooms and lists the ones that meet a set of filter and sort criteria.</p>"
    },
    "SearchSkillGroups":{
      "name":"SearchSkillGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchSkillGroupsRequest"},
      "output":{"shape":"SearchSkillGroupsResponse"},
      "documentation":"<p>Searches skill groups and lists the ones that meet a set of filter and sort criteria.</p>"
    },
    "SearchUsers":{
      "name":"SearchUsers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchUsersRequest"},
      "output":{"shape":"SearchUsersResponse"},
      "documentation":"<p>Searches users and lists the ones that meet a set of filter and sort criteria.</p>"
    },
    "SendInvitation":{
      "name":"SendInvitation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SendInvitationRequest"},
      "output":{"shape":"SendInvitationResponse"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"InvalidUserStatusException"}
      ],
      "documentation":"<p>Sends an enrollment invitation email with a URL to a user. The URL is valid for 72 hours or until you call this operation again, whichever comes first. </p>"
    },
    "StartDeviceSync":{
      "name":"StartDeviceSync",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartDeviceSyncRequest"},
      "output":{"shape":"StartDeviceSyncResponse"},
      "errors":[
        {"shape":"DeviceNotRegisteredException"}
      ],
      "documentation":"<p>Resets a device and its account to the known default settings, by clearing all information and settings set by previous users.</p>"
    },
    "TagResource":{
      "name":"TagResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TagResourceRequest"},
      "output":{"shape":"TagResourceResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Adds metadata tags to a specified resource.</p>"
    },
    "UntagResource":{
      "name":"UntagResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UntagResourceRequest"},
      "output":{"shape":"UntagResourceResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Removes metadata tags from a specified resource.</p>"
    },
    "UpdateAddressBook":{
      "name":"UpdateAddressBook",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateAddressBookRequest"},
      "output":{"shape":"UpdateAddressBookResponse"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"NameInUseException"}
      ],
      "documentation":"<p>Updates address book details by the address book ARN.</p>"
    },
    "UpdateContact":{
      "name":"UpdateContact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateContactRequest"},
      "output":{"shape":"UpdateContactResponse"},
      "errors":[
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Updates the contact details by the contact ARN.</p>"
    },
    "UpdateDevice":{
      "name":"UpdateDevice",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDeviceRequest"},
      "output":{"shape":"UpdateDeviceResponse"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"DeviceNotRegisteredException"}
      ],
      "documentation":"<p>Updates the device name by device ARN.</p>"
    },
    "UpdateProfile":{
      "name":"UpdateProfile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateProfileRequest"},
      "output":{"shape":"UpdateProfileResponse"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"NameInUseException"}
      ],
      "documentation":"<p>Updates an existing room profile by room profile ARN.</p>"
    },
    "UpdateRoom":{
      "name":"UpdateRoom",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateRoomRequest"},
      "output":{"shape":"UpdateRoomResponse"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"NameInUseException"}
      ],
      "documentation":"<p>Updates room details by room ARN.</p>"
    },
    "UpdateSkillGroup":{
      "name":"UpdateSkillGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateSkillGroupRequest"},
      "output":{"shape":"UpdateSkillGroupResponse"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"NameInUseException"}
      ],
      "documentation":"<p>Updates skill group details by skill group ARN.</p>"
    }
  },
  "shapes":{
    "Address":{
      "type":"string",
      "max":500,
      "min":1
    },
    "AddressBook":{
      "type":"structure",
      "members":{
        "AddressBookArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the address book.</p>"
        },
        "Name":{
          "shape":"AddressBookName",
          "documentation":"<p>The name of the address book.</p>"
        },
        "Description":{
          "shape":"AddressBookDescription",
          "documentation":"<p>The description of the address book.</p>"
        }
      },
      "documentation":"<p>An address book with attributes.</p>"
    },
    "AddressBookData":{
      "type":"structure",
      "members":{
        "AddressBookArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the address book.</p>"
        },
        "Name":{
          "shape":"AddressBookName",
          "documentation":"<p>The name of the address book.</p>"
        },
        "Description":{
          "shape":"AddressBookDescription",
          "documentation":"<p>The description of the address book.</p>"
        }
      },
      "documentation":"<p>Information related to an address book.</p>"
    },
    "AddressBookDataList":{
      "type":"list",
      "member":{"shape":"AddressBookData"}
    },
    "AddressBookDescription":{
      "type":"string",
      "max":200,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "AddressBookName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "AlreadyExistsException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The resource being created already exists. HTTP Status Code: 400</p>",
      "exception":true
    },
    "Arn":{
      "type":"string",
      "pattern":"arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}"
    },
    "AssociateContactWithAddressBookRequest":{
      "type":"structure",
      "required":[
        "ContactArn",
        "AddressBookArn"
      ],
      "members":{
        "ContactArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the contact to associate with an address book.</p>"
        },
        "AddressBookArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the address book with which to associate the contact.</p>"
        }
      }
    },
    "AssociateContactWithAddressBookResponse":{
      "type":"structure",
      "members":{
      }
    },
    "AssociateDeviceWithRoomRequest":{
      "type":"structure",
      "members":{
        "DeviceArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the device to associate to a room. Required.</p>"
        },
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room with which to associate the device. Required.</p>"
        }
      }
    },
    "AssociateDeviceWithRoomResponse":{
      "type":"structure",
      "members":{
      }
    },
    "AssociateSkillGroupWithRoomRequest":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the skill group to associate with a room. Required.</p>"
        },
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room with which to associate the skill group. Required.</p>"
        }
      }
    },
    "AssociateSkillGroupWithRoomResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Boolean":{"type":"boolean"},
    "ClientRequestToken":{
      "type":"string",
      "documentation":"User specified token that is used to support idempotency during Create Resource",
      "max":150,
      "min":10,
      "pattern":"[a-zA-Z0-9][a-zA-Z0-9_-]*"
    },
    "ConnectionStatus":{
      "type":"string",
      "enum":[
        "ONLINE",
        "OFFLINE"
      ]
    },
    "Contact":{
      "type":"structure",
      "members":{
        "ContactArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the contact.</p>"
        },
        "DisplayName":{
          "shape":"ContactName",
          "documentation":"<p>The name of the contact to display on the console.</p>"
        },
        "FirstName":{
          "shape":"ContactName",
          "documentation":"<p>The first name of the contact, used to call the contact on the device.</p>"
        },
        "LastName":{
          "shape":"ContactName",
          "documentation":"<p>The last name of the contact, used to call the contact on the device.</p>"
        },
        "PhoneNumber":{
          "shape":"E164PhoneNumber",
          "documentation":"<p>The phone number of the contact.</p>"
        }
      },
      "documentation":"<p>A contact with attributes.</p>"
    },
    "ContactData":{
      "type":"structure",
      "members":{
        "ContactArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the contact.</p>"
        },
        "DisplayName":{
          "shape":"ContactName",
          "documentation":"<p>The name of the contact to display on the console.</p>"
        },
        "FirstName":{
          "shape":"ContactName",
          "documentation":"<p>The first name of the contact, used to call the contact on the device.</p>"
        },
        "LastName":{
          "shape":"ContactName",
          "documentation":"<p>The last name of the contact, used to call the contact on the device.</p>"
        },
        "PhoneNumber":{
          "shape":"E164PhoneNumber",
          "documentation":"<p>The phone number of the contact.</p>"
        }
      },
      "documentation":"<p>Information related to a contact.</p>"
    },
    "ContactDataList":{
      "type":"list",
      "member":{"shape":"ContactData"}
    },
    "ContactName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "CreateAddressBookRequest":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"AddressBookName",
          "documentation":"<p>The name of the address book.</p>"
        },
        "Description":{
          "shape":"AddressBookDescription",
          "documentation":"<p>The description of the address book.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, user-specified identifier for the request that ensures idempotency.</p>",
          "idempotencyToken":true
        }
      }
    },
    "CreateAddressBookResponse":{
      "type":"structure",
      "members":{
        "AddressBookArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the newly created address book.</p>"
        }
      }
    },
    "CreateContactRequest":{
      "type":"structure",
      "required":[
        "FirstName",
        "PhoneNumber"
      ],
      "members":{
        "DisplayName":{
          "shape":"ContactName",
          "documentation":"<p>The name of the contact to display on the console.</p>"
        },
        "FirstName":{
          "shape":"ContactName",
          "documentation":"<p>The first name of the contact that is used to call the contact on the device.</p>"
        },
        "LastName":{
          "shape":"ContactName",
          "documentation":"<p>The last name of the contact that is used to call the contact on the device.</p>"
        },
        "PhoneNumber":{
          "shape":"E164PhoneNumber",
          "documentation":"<p>The phone number of the contact in E.164 format.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, user-specified identifier for this request that ensures idempotency.</p>",
          "idempotencyToken":true
        }
      }
    },
    "CreateContactResponse":{
      "type":"structure",
      "members":{
        "ContactArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the newly created address book.</p>"
        }
      }
    },
    "CreateProfileRequest":{
      "type":"structure",
      "required":[
        "ProfileName",
        "Timezone",
        "Address",
        "DistanceUnit",
        "TemperatureUnit",
        "WakeWord"
      ],
      "members":{
        "ProfileName":{
          "shape":"ProfileName",
          "documentation":"<p>The name of a room profile.</p>"
        },
        "Timezone":{
          "shape":"Timezone",
          "documentation":"<p>The time zone used by a room profile.</p>"
        },
        "Address":{
          "shape":"Address",
          "documentation":"<p>The valid address for the room.</p>"
        },
        "DistanceUnit":{
          "shape":"DistanceUnit",
          "documentation":"<p>The distance unit to be used by devices in the profile.</p>"
        },
        "TemperatureUnit":{
          "shape":"TemperatureUnit",
          "documentation":"<p>The temperature unit to be used by devices in the profile.</p>"
        },
        "WakeWord":{
          "shape":"WakeWord",
          "documentation":"<p>A wake word for Alexa, Echo, Amazon, or a computer.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>The user-specified token that is used during the creation of a profile.</p>",
          "idempotencyToken":true
        },
        "SetupModeDisabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether room profile setup is enabled.</p>"
        },
        "MaxVolumeLimit":{
          "shape":"MaxVolumeLimit",
          "documentation":"<p>The maximum volume limit for a room profile.</p>"
        },
        "PSTNEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether PSTN calling is enabled.</p>"
        }
      }
    },
    "CreateProfileResponse":{
      "type":"structure",
      "members":{
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the newly created room profile in the response.</p>"
        }
      }
    },
    "CreateRoomRequest":{
      "type":"structure",
      "required":["RoomName"],
      "members":{
        "RoomName":{
          "shape":"RoomName",
          "documentation":"<p>The name for the room.</p>"
        },
        "Description":{
          "shape":"RoomDescription",
          "documentation":"<p>The description for the room.</p>"
        },
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The profile ARN for the room.</p>"
        },
        "ProviderCalendarId":{
          "shape":"ProviderCalendarId",
          "documentation":"<p>The calendar ARN for the room.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, user-specified identifier for this request that ensures idempotency. </p>",
          "idempotencyToken":true
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags for the room.</p>"
        }
      }
    },
    "CreateRoomResponse":{
      "type":"structure",
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the newly created room in the response.</p>"
        }
      }
    },
    "CreateSkillGroupRequest":{
      "type":"structure",
      "required":["SkillGroupName"],
      "members":{
        "SkillGroupName":{
          "shape":"SkillGroupName",
          "documentation":"<p>The name for the skill group.</p>"
        },
        "Description":{
          "shape":"SkillGroupDescription",
          "documentation":"<p>The description for the skill group.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, user-specified identifier for this request that ensures idempotency. </p>",
          "idempotencyToken":true
        }
      }
    },
    "CreateSkillGroupResponse":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the newly created skill group in the response.</p>"
        }
      }
    },
    "CreateUserRequest":{
      "type":"structure",
      "required":["UserId"],
      "members":{
        "UserId":{
          "shape":"user_UserId",
          "documentation":"<p>The ARN for the user.</p>"
        },
        "FirstName":{
          "shape":"user_FirstName",
          "documentation":"<p>The first name for the user.</p>"
        },
        "LastName":{
          "shape":"user_LastName",
          "documentation":"<p>The last name for the user.</p>"
        },
        "Email":{
          "shape":"Email",
          "documentation":"<p>The email address for the user.</p>"
        },
        "ClientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, user-specified identifier for this request that ensures idempotency. </p>",
          "idempotencyToken":true
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags for the user.</p>"
        }
      }
    },
    "CreateUserResponse":{
      "type":"structure",
      "members":{
        "UserArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the newly created user in the response.</p>"
        }
      }
    },
    "DeleteAddressBookRequest":{
      "type":"structure",
      "required":["AddressBookArn"],
      "members":{
        "AddressBookArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the address book to delete.</p>"
        }
      }
    },
    "DeleteAddressBookResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteContactRequest":{
      "type":"structure",
      "required":["ContactArn"],
      "members":{
        "ContactArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the contact to delete.</p>"
        }
      }
    },
    "DeleteContactResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteProfileRequest":{
      "type":"structure",
      "members":{
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room profile to delete. Required.</p>"
        }
      }
    },
    "DeleteProfileResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteRoomRequest":{
      "type":"structure",
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room to delete. Required.</p>"
        }
      }
    },
    "DeleteRoomResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteRoomSkillParameterRequest":{
      "type":"structure",
      "required":[
        "SkillId",
        "ParameterKey"
      ],
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room from which to remove the room skill parameter details.</p>"
        },
        "SkillId":{
          "shape":"SkillId",
          "documentation":"<p>The ID of the skill from which to remove the room skill parameter details.</p>"
        },
        "ParameterKey":{
          "shape":"RoomSkillParameterKey",
          "documentation":"<p>The room skill parameter key for which to remove details.</p>"
        }
      }
    },
    "DeleteRoomSkillParameterResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteSkillGroupRequest":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the skill group to delete. Required.</p>"
        }
      }
    },
    "DeleteSkillGroupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteUserRequest":{
      "type":"structure",
      "required":["EnrollmentId"],
      "members":{
        "UserArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the user to delete in the organization. Required.</p>"
        },
        "EnrollmentId":{
          "shape":"EnrollmentId",
          "documentation":"<p>The ARN of the user's enrollment in the organization. Required.</p>"
        }
      }
    },
    "DeleteUserResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Device":{
      "type":"structure",
      "members":{
        "DeviceArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a device.</p>"
        },
        "DeviceSerialNumber":{
          "shape":"DeviceSerialNumber",
          "documentation":"<p>The serial number of a device.</p>"
        },
        "DeviceType":{
          "shape":"DeviceType",
          "documentation":"<p>The type of a device.</p>"
        },
        "DeviceName":{
          "shape":"DeviceName",
          "documentation":"<p>The name of a device.</p>"
        },
        "SoftwareVersion":{
          "shape":"SoftwareVersion",
          "documentation":"<p>The software version of a device.</p>"
        },
        "MacAddress":{
          "shape":"MacAddress",
          "documentation":"<p>The MAC address of a device.</p>"
        },
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The room ARN of a device.</p>"
        },
        "DeviceStatus":{
          "shape":"DeviceStatus",
          "documentation":"<p>The status of a device. If the status is not READY, check the DeviceStatusInfo value for details.</p>"
        },
        "DeviceStatusInfo":{
          "shape":"DeviceStatusInfo",
          "documentation":"<p>Detailed information about a device's status.</p>"
        }
      },
      "documentation":"<p>A device with attributes.</p>"
    },
    "DeviceData":{
      "type":"structure",
      "members":{
        "DeviceArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a device.</p>"
        },
        "DeviceSerialNumber":{
          "shape":"DeviceSerialNumber",
          "documentation":"<p>The serial number of a device.</p>"
        },
        "DeviceType":{
          "shape":"DeviceType",
          "documentation":"<p>The type of a device.</p>"
        },
        "DeviceName":{
          "shape":"DeviceName",
          "documentation":"<p>The name of a device.</p>"
        },
        "SoftwareVersion":{
          "shape":"SoftwareVersion",
          "documentation":"<p>The software version of a device.</p>"
        },
        "MacAddress":{
          "shape":"MacAddress",
          "documentation":"<p>The MAC address of a device.</p>"
        },
        "DeviceStatus":{
          "shape":"DeviceStatus",
          "documentation":"<p>The status of a device.</p>"
        },
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The room ARN associated with a device.</p>"
        },
        "RoomName":{
          "shape":"RoomName",
          "documentation":"<p>The name of the room associated with a device.</p>"
        },
        "DeviceStatusInfo":{
          "shape":"DeviceStatusInfo",
          "documentation":"<p>Detailed information about a device's status.</p>"
        }
      },
      "documentation":"<p>Device attributes.</p>"
    },
    "DeviceDataList":{
      "type":"list",
      "member":{"shape":"DeviceData"}
    },
    "DeviceEvent":{
      "type":"structure",
      "members":{
        "Type":{
          "shape":"DeviceEventType",
          "documentation":"<p>The type of device event.</p>"
        },
        "Value":{
          "shape":"DeviceEventValue",
          "documentation":"<p>The value of the event.</p>"
        },
        "Timestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The time (in epoch) when the event occurred. </p>"
        }
      },
      "documentation":"<p>The list of device events.</p>"
    },
    "DeviceEventList":{
      "type":"list",
      "member":{"shape":"DeviceEvent"}
    },
    "DeviceEventType":{
      "type":"string",
      "enum":[
        "CONNECTION_STATUS",
        "DEVICE_STATUS"
      ]
    },
    "DeviceEventValue":{"type":"string"},
    "DeviceName":{
      "type":"string",
      "max":100,
      "min":2,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "DeviceNotRegisteredException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>",
      "exception":true
    },
    "DeviceSerialNumber":{
      "type":"string",
      "pattern":"[a-zA-Z0-9]{1,200}"
    },
    "DeviceStatus":{
      "type":"string",
      "enum":[
        "READY",
        "PENDING",
        "WAS_OFFLINE",
        "DEREGISTERED"
      ]
    },
    "DeviceStatusDetail":{
      "type":"structure",
      "members":{
        "Code":{
          "shape":"DeviceStatusDetailCode",
          "documentation":"<p>The device status detail code.</p>"
        }
      },
      "documentation":"<p>Details of a device’s status.</p>"
    },
    "DeviceStatusDetailCode":{
      "type":"string",
      "enum":[
        "DEVICE_SOFTWARE_UPDATE_NEEDED",
        "DEVICE_WAS_OFFLINE"
      ]
    },
    "DeviceStatusDetails":{
      "type":"list",
      "member":{"shape":"DeviceStatusDetail"}
    },
    "DeviceStatusInfo":{
      "type":"structure",
      "members":{
        "DeviceStatusDetails":{
          "shape":"DeviceStatusDetails",
          "documentation":"<p>One or more device status detail descriptions.</p>"
        },
        "ConnectionStatus":{
          "shape":"ConnectionStatus",
          "documentation":"<p>The latest available information about the connection status of a device. </p>"
        }
      },
      "documentation":"<p>Detailed information about a device's status.</p>"
    },
    "DeviceType":{
      "type":"string",
      "pattern":"[a-zA-Z0-9]{1,200}"
    },
    "DisassociateContactFromAddressBookRequest":{
      "type":"structure",
      "required":[
        "ContactArn",
        "AddressBookArn"
      ],
      "members":{
        "ContactArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the contact to disassociate from an address book.</p>"
        },
        "AddressBookArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the address from which to disassociate the contact.</p>"
        }
      }
    },
    "DisassociateContactFromAddressBookResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DisassociateDeviceFromRoomRequest":{
      "type":"structure",
      "members":{
        "DeviceArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the device to disassociate from a room. Required.</p>"
        }
      }
    },
    "DisassociateDeviceFromRoomResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DisassociateSkillGroupFromRoomRequest":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the skill group to disassociate from a room. Required.</p>"
        },
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room from which the skill group is to be disassociated. Required.</p>"
        }
      }
    },
    "DisassociateSkillGroupFromRoomResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DistanceUnit":{
      "type":"string",
      "enum":[
        "METRIC",
        "IMPERIAL"
      ]
    },
    "E164PhoneNumber":{
      "type":"string",
      "pattern":"^\\+\\d{8,}$"
    },
    "Email":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"([0-9a-zA-Z]([+-.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})"
    },
    "EnrollmentId":{
      "type":"string",
      "max":128,
      "min":0
    },
    "EnrollmentStatus":{
      "type":"string",
      "enum":[
        "INITIALIZED",
        "PENDING",
        "REGISTERED",
        "DISASSOCIATING",
        "DEREGISTERING"
      ]
    },
    "ErrorMessage":{"type":"string"},
    "Feature":{
      "type":"string",
      "enum":[
        "BLUETOOTH",
        "VOLUME",
        "NOTIFICATIONS",
        "LISTS",
        "SKILLS",
        "ALL"
      ]
    },
    "Features":{
      "type":"list",
      "member":{"shape":"Feature"}
    },
    "Filter":{
      "type":"structure",
      "required":[
        "Key",
        "Values"
      ],
      "members":{
        "Key":{
          "shape":"FilterKey",
          "documentation":"<p>The key of a filter.</p>"
        },
        "Values":{
          "shape":"FilterValueList",
          "documentation":"<p>The values of a filter.</p>"
        }
      },
      "documentation":"<p>A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria.</p>"
    },
    "FilterKey":{
      "type":"string",
      "max":500,
      "min":1
    },
    "FilterList":{
      "type":"list",
      "member":{"shape":"Filter"},
      "max":25
    },
    "FilterValue":{
      "type":"string",
      "max":500,
      "min":1
    },
    "FilterValueList":{
      "type":"list",
      "member":{"shape":"FilterValue"},
      "max":5
    },
    "GetAddressBookRequest":{
      "type":"structure",
      "required":["AddressBookArn"],
      "members":{
        "AddressBookArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the address book for which to request details.</p>"
        }
      }
    },
    "GetAddressBookResponse":{
      "type":"structure",
      "members":{
        "AddressBook":{
          "shape":"AddressBook",
          "documentation":"<p>The details of the requested address book.</p>"
        }
      }
    },
    "GetContactRequest":{
      "type":"structure",
      "required":["ContactArn"],
      "members":{
        "ContactArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the contact for which to request details.</p>"
        }
      }
    },
    "GetContactResponse":{
      "type":"structure",
      "members":{
        "Contact":{
          "shape":"Contact",
          "documentation":"<p>The details of the requested contact.</p>"
        }
      }
    },
    "GetDeviceRequest":{
      "type":"structure",
      "members":{
        "DeviceArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the device for which to request details. Required.</p>"
        }
      }
    },
    "GetDeviceResponse":{
      "type":"structure",
      "members":{
        "Device":{
          "shape":"Device",
          "documentation":"<p>The details of the device requested. Required.</p>"
        }
      }
    },
    "GetProfileRequest":{
      "type":"structure",
      "members":{
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room profile for which to request details. Required.</p>"
        }
      }
    },
    "GetProfileResponse":{
      "type":"structure",
      "members":{
        "Profile":{
          "shape":"Profile",
          "documentation":"<p>The details of the room profile requested. Required.</p>"
        }
      }
    },
    "GetRoomRequest":{
      "type":"structure",
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room for which to request details. Required.</p>"
        }
      }
    },
    "GetRoomResponse":{
      "type":"structure",
      "members":{
        "Room":{
          "shape":"Room",
          "documentation":"<p>The details of the room requested.</p>"
        }
      }
    },
    "GetRoomSkillParameterRequest":{
      "type":"structure",
      "required":[
        "SkillId",
        "ParameterKey"
      ],
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room from which to get the room skill parameter details. </p>"
        },
        "SkillId":{
          "shape":"SkillId",
          "documentation":"<p>The ARN of the skill from which to get the room skill parameter details. Required.</p>"
        },
        "ParameterKey":{
          "shape":"RoomSkillParameterKey",
          "documentation":"<p>The room skill parameter key for which to get details. Required.</p>"
        }
      }
    },
    "GetRoomSkillParameterResponse":{
      "type":"structure",
      "members":{
        "RoomSkillParameter":{
          "shape":"RoomSkillParameter",
          "documentation":"<p>The details of the room skill parameter requested. Required.</p>"
        }
      }
    },
    "GetSkillGroupRequest":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the skill group for which to get details. Required.</p>"
        }
      }
    },
    "GetSkillGroupResponse":{
      "type":"structure",
      "members":{
        "SkillGroup":{
          "shape":"SkillGroup",
          "documentation":"<p>The details of the skill group requested. Required.</p>"
        }
      }
    },
    "InvalidUserStatusException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The attempt to update a user is invalid due to the user's current status. HTTP Status Code: 400</p>",
      "exception":true
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>You are performing an action that would put you beyond your account's limits. HTTP Status Code: 400</p>",
      "exception":true
    },
    "ListDeviceEventsRequest":{
      "type":"structure",
      "required":["DeviceArn"],
      "members":{
        "DeviceArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a device.</p>"
        },
        "EventType":{
          "shape":"DeviceEventType",
          "documentation":"<p>The event type to filter device events. If EventType isn't specified, this returns a list of all device events in reverse chronological order. If EventType is specified, this returns a list of device events for that EventType in reverse chronological order. </p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response only includes results beyond the token, up to the value specified by MaxResults. When the end of results is reached, the response has a value of null.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. The default value is 50. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. </p>"
        }
      }
    },
    "ListDeviceEventsResponse":{
      "type":"structure",
      "members":{
        "DeviceEvents":{
          "shape":"DeviceEventList",
          "documentation":"<p>The device events requested for the device ARN.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        }
      }
    },
    "ListSkillsRequest":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the skill group for which to list enabled skills. Required.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>. Required.</p>"
        },
        "MaxResults":{
          "shape":"SkillListMaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved. Required.</p>"
        }
      }
    },
    "ListSkillsResponse":{
      "type":"structure",
      "members":{
        "SkillSummaries":{
          "shape":"SkillSummaryList",
          "documentation":"<p>The list of enabled skills requested. Required.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        }
      }
    },
    "ListTagsRequest":{
      "type":"structure",
      "required":["Arn"],
      "members":{
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the specified resource for which to list tags.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>. </p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>"
        }
      }
    },
    "ListTagsResponse":{
      "type":"structure",
      "members":{
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags requested for the specified resource.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        }
      }
    },
    "MacAddress":{"type":"string"},
    "MaxResults":{
      "type":"integer",
      "max":50,
      "min":1
    },
    "MaxVolumeLimit":{"type":"integer"},
    "NameInUseException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The name sent in the request is already in use. HTTP Status Code: 400</p>",
      "exception":true
    },
    "NextToken":{
      "type":"string",
      "max":1000,
      "min":1
    },
    "NotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"}
      },
      "documentation":"<p>The resource is not found. HTTP Status Code: 400</p>",
      "exception":true
    },
    "Profile":{
      "type":"structure",
      "members":{
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a room profile.</p>"
        },
        "ProfileName":{
          "shape":"ProfileName",
          "documentation":"<p>The name of a room profile.</p>"
        },
        "Address":{
          "shape":"Address",
          "documentation":"<p>The address of a room profile.</p>"
        },
        "Timezone":{
          "shape":"Timezone",
          "documentation":"<p>The time zone of a room profile.</p>"
        },
        "DistanceUnit":{
          "shape":"DistanceUnit",
          "documentation":"<p>The distance unit of a room profile.</p>"
        },
        "TemperatureUnit":{
          "shape":"TemperatureUnit",
          "documentation":"<p>The temperature unit of a room profile.</p>"
        },
        "WakeWord":{
          "shape":"WakeWord",
          "documentation":"<p>The wake word of a room profile.</p>"
        },
        "SetupModeDisabled":{
          "shape":"Boolean",
          "documentation":"<p>The setup mode of a room profile.</p>"
        },
        "MaxVolumeLimit":{
          "shape":"MaxVolumeLimit",
          "documentation":"<p>The max volume limit of a room profile.</p>"
        },
        "PSTNEnabled":{
          "shape":"Boolean",
          "documentation":"<p>The PSTN setting of a room profile.</p>"
        }
      },
      "documentation":"<p>A room profile with attributes.</p>"
    },
    "ProfileData":{
      "type":"structure",
      "members":{
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a room profile.</p>"
        },
        "ProfileName":{
          "shape":"ProfileName",
          "documentation":"<p>The name of a room profile.</p>"
        },
        "Address":{
          "shape":"Address",
          "documentation":"<p>The address of a room profile.</p>"
        },
        "Timezone":{
          "shape":"Timezone",
          "documentation":"<p>The timezone of a room profile.</p>"
        },
        "DistanceUnit":{
          "shape":"DistanceUnit",
          "documentation":"<p>The distance unit of a room profile.</p>"
        },
        "TemperatureUnit":{
          "shape":"TemperatureUnit",
          "documentation":"<p>The temperature unit of a room profile.</p>"
        },
        "WakeWord":{
          "shape":"WakeWord",
          "documentation":"<p>The wake word of a room profile.</p>"
        }
      },
      "documentation":"<p>The data of a room profile.</p>"
    },
    "ProfileDataList":{
      "type":"list",
      "member":{"shape":"ProfileData"}
    },
    "ProfileName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "ProviderCalendarId":{
      "type":"string",
      "max":100,
      "min":0
    },
    "PutRoomSkillParameterRequest":{
      "type":"structure",
      "required":[
        "SkillId",
        "RoomSkillParameter"
      ],
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room associated with the room skill parameter. Required.</p>"
        },
        "SkillId":{
          "shape":"SkillId",
          "documentation":"<p>The ARN of the skill associated with the room skill parameter. Required.</p>"
        },
        "RoomSkillParameter":{
          "shape":"RoomSkillParameter",
          "documentation":"<p>The updated room skill parameter. Required.</p>"
        }
      }
    },
    "PutRoomSkillParameterResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ResolveRoomRequest":{
      "type":"structure",
      "required":[
        "UserId",
        "SkillId"
      ],
      "members":{
        "UserId":{
          "shape":"UserId",
          "documentation":"<p>The ARN of the user. Required.</p>"
        },
        "SkillId":{
          "shape":"SkillId",
          "documentation":"<p>The ARN of the skill that was requested. Required.</p>"
        }
      }
    },
    "ResolveRoomResponse":{
      "type":"structure",
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room from which the skill request was invoked.</p>"
        },
        "RoomName":{
          "shape":"RoomName",
          "documentation":"<p>The name of the room from which the skill request was invoked.</p>"
        },
        "RoomSkillParameters":{
          "shape":"RoomSkillParameters",
          "documentation":"<p>Response to get the room profile request. Required.</p>"
        }
      }
    },
    "ResourceInUseException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ErrorMessage"},
        "ClientRequestToken":{"shape":"ClientRequestToken"}
      },
      "documentation":"<p>The resource in the request is already in use. HTTP Status Code: 400</p>",
      "exception":true
    },
    "RevokeInvitationRequest":{
      "type":"structure",
      "members":{
        "UserArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the user for whom to revoke an enrollment invitation. Required.</p>"
        },
        "EnrollmentId":{
          "shape":"EnrollmentId",
          "documentation":"<p>The ARN of the enrollment invitation to revoke. Required.</p>"
        }
      }
    },
    "RevokeInvitationResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Room":{
      "type":"structure",
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a room.</p>"
        },
        "RoomName":{
          "shape":"RoomName",
          "documentation":"<p>The name of a room.</p>"
        },
        "Description":{
          "shape":"RoomDescription",
          "documentation":"<p>The description of a room.</p>"
        },
        "ProviderCalendarId":{
          "shape":"ProviderCalendarId",
          "documentation":"<p>The provider calendar ARN of a room.</p>"
        },
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The profile ARN of a room.</p>"
        }
      },
      "documentation":"<p>A room with attributes.</p>"
    },
    "RoomData":{
      "type":"structure",
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a room.</p>"
        },
        "RoomName":{
          "shape":"RoomName",
          "documentation":"<p>The name of a room.</p>"
        },
        "Description":{
          "shape":"RoomDescription",
          "documentation":"<p>The description of a room.</p>"
        },
        "ProviderCalendarId":{
          "shape":"ProviderCalendarId",
          "documentation":"<p>The provider calendar ARN of a room.</p>"
        },
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The profile ARN of a room.</p>"
        },
        "ProfileName":{
          "shape":"ProfileName",
          "documentation":"<p>The profile name of a room.</p>"
        }
      },
      "documentation":"<p>The data of a room.</p>"
    },
    "RoomDataList":{
      "type":"list",
      "member":{"shape":"RoomData"}
    },
    "RoomDescription":{
      "type":"string",
      "max":200,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "RoomName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "RoomSkillParameter":{
      "type":"structure",
      "required":[
        "ParameterKey",
        "ParameterValue"
      ],
      "members":{
        "ParameterKey":{
          "shape":"RoomSkillParameterKey",
          "documentation":"<p>The parameter key of a room skill parameter. ParameterKey is an enumerated type that only takes “DEFAULT” or “SCOPE” as valid values.</p>"
        },
        "ParameterValue":{
          "shape":"RoomSkillParameterValue",
          "documentation":"<p>The parameter value of a room skill parameter.</p>"
        }
      },
      "documentation":"<p>A skill parameter associated with a room.</p>"
    },
    "RoomSkillParameterKey":{
      "type":"string",
      "max":256,
      "min":1
    },
    "RoomSkillParameterValue":{
      "type":"string",
      "max":512,
      "min":1
    },
    "RoomSkillParameters":{
      "type":"list",
      "member":{"shape":"RoomSkillParameter"}
    },
    "SearchAddressBooksRequest":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>The filters to use to list a specified set of address books. The supported filter key is AddressBookName.</p>"
        },
        "SortCriteria":{
          "shape":"SortList",
          "documentation":"<p>The sort order to use in listing the specified set of address books. The supported sort key is AddressBookName.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response only includes results beyond the token, up to the value specified by MaxResults.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>"
        }
      }
    },
    "SearchAddressBooksResponse":{
      "type":"structure",
      "members":{
        "AddressBooks":{
          "shape":"AddressBookDataList",
          "documentation":"<p>The address books that meet the specified set of filter criteria, in sort order.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        },
        "TotalCount":{
          "shape":"TotalCount",
          "documentation":"<p>The total number of address books returned.</p>"
        }
      }
    },
    "SearchContactsRequest":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>The filters to use to list a specified set of address books. The supported filter keys are DisplayName, FirstName, LastName, and AddressBookArns.</p>"
        },
        "SortCriteria":{
          "shape":"SortList",
          "documentation":"<p>The sort order to use in listing the specified set of contacts. The supported sort keys are DisplayName, FirstName, and LastName.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response only includes results beyond the token, up to the value specified by MaxResults.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>"
        }
      }
    },
    "SearchContactsResponse":{
      "type":"structure",
      "members":{
        "Contacts":{
          "shape":"ContactDataList",
          "documentation":"<p>The contacts that meet the specified set of filter criteria, in sort order.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        },
        "TotalCount":{
          "shape":"TotalCount",
          "documentation":"<p>The total number of contacts returned.</p>"
        }
      }
    },
    "SearchDevicesRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>The filters to use to list a specified set of devices. Supported filter keys are DeviceName, DeviceStatus, DeviceStatusDetailCode, RoomName, DeviceType, DeviceSerialNumber, UnassociatedOnly, and ConnectionStatus (ONLINE and OFFLINE).</p>"
        },
        "SortCriteria":{
          "shape":"SortList",
          "documentation":"<p>The sort order to use in listing the specified set of devices. Supported sort keys are DeviceName, DeviceStatus, RoomName, DeviceType, DeviceSerialNumber, and ConnectionStatus.</p>"
        }
      }
    },
    "SearchDevicesResponse":{
      "type":"structure",
      "members":{
        "Devices":{
          "shape":"DeviceDataList",
          "documentation":"<p>The devices that meet the specified set of filter criteria, in sort order.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        },
        "TotalCount":{
          "shape":"TotalCount",
          "documentation":"<p>The total number of devices returned.</p>"
        }
      }
    },
    "SearchProfilesRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>The filters to use to list a specified set of room profiles. Supported filter keys are ProfileName and Address. Required. </p>"
        },
        "SortCriteria":{
          "shape":"SortList",
          "documentation":"<p>The sort order to use in listing the specified set of room profiles. Supported sort keys are ProfileName and Address.</p>"
        }
      }
    },
    "SearchProfilesResponse":{
      "type":"structure",
      "members":{
        "Profiles":{
          "shape":"ProfileDataList",
          "documentation":"<p>The profiles that meet the specified set of filter criteria, in sort order.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        },
        "TotalCount":{
          "shape":"TotalCount",
          "documentation":"<p>The total number of room profiles returned.</p>"
        }
      }
    },
    "SearchRoomsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved. </p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>The filters to use to list a specified set of rooms. The supported filter keys are RoomName and ProfileName.</p>"
        },
        "SortCriteria":{
          "shape":"SortList",
          "documentation":"<p>The sort order to use in listing the specified set of rooms. The supported sort keys are RoomName and ProfileName.</p>"
        }
      }
    },
    "SearchRoomsResponse":{
      "type":"structure",
      "members":{
        "Rooms":{
          "shape":"RoomDataList",
          "documentation":"<p>The rooms that meet the specified set of filter criteria, in sort order.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        },
        "TotalCount":{
          "shape":"TotalCount",
          "documentation":"<p>The total number of rooms returned.</p>"
        }
      }
    },
    "SearchSkillGroupsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>. Required.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved. </p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>The filters to use to list a specified set of skill groups. The supported filter key is SkillGroupName. </p>"
        },
        "SortCriteria":{
          "shape":"SortList",
          "documentation":"<p>The sort order to use in listing the specified set of skill groups. The supported sort key is SkillGroupName. </p>"
        }
      }
    },
    "SearchSkillGroupsResponse":{
      "type":"structure",
      "members":{
        "SkillGroups":{
          "shape":"SkillGroupDataList",
          "documentation":"<p>The skill groups that meet the filter criteria, in sort order.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        },
        "TotalCount":{
          "shape":"TotalCount",
          "documentation":"<p>The total number of skill groups returned.</p>"
        }
      }
    },
    "SearchUsersRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>. Required.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved. Required.</p>"
        },
        "Filters":{
          "shape":"FilterList",
          "documentation":"<p>The filters to use for listing a specific set of users. Required. Supported filter keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>"
        },
        "SortCriteria":{
          "shape":"SortList",
          "documentation":"<p>The sort order to use in listing the filtered set of users. Required. Supported sort keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>"
        }
      }
    },
    "SearchUsersResponse":{
      "type":"structure",
      "members":{
        "Users":{
          "shape":"UserDataList",
          "documentation":"<p>The users that meet the specified set of filter criteria, in sort order.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>The token returned to indicate that there is more data available.</p>"
        },
        "TotalCount":{
          "shape":"TotalCount",
          "documentation":"<p>The total number of users returned.</p>"
        }
      }
    },
    "SendInvitationRequest":{
      "type":"structure",
      "members":{
        "UserArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the user to whom to send an invitation. Required.</p>"
        }
      }
    },
    "SendInvitationResponse":{
      "type":"structure",
      "members":{
      }
    },
    "SkillGroup":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a skill group.</p>"
        },
        "SkillGroupName":{
          "shape":"SkillGroupName",
          "documentation":"<p>The name of a skill group.</p>"
        },
        "Description":{
          "shape":"SkillGroupDescription",
          "documentation":"<p>The description of a skill group.</p>"
        }
      },
      "documentation":"<p>A skill group with attributes.</p>"
    },
    "SkillGroupData":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The skill group ARN of a skill group.</p>"
        },
        "SkillGroupName":{
          "shape":"SkillGroupName",
          "documentation":"<p>The skill group name of a skill group.</p>"
        },
        "Description":{
          "shape":"SkillGroupDescription",
          "documentation":"<p>The description of a skill group.</p>"
        }
      },
      "documentation":"<p>The attributes of a skill group.</p>"
    },
    "SkillGroupDataList":{
      "type":"list",
      "member":{"shape":"SkillGroupData"}
    },
    "SkillGroupDescription":{
      "type":"string",
      "max":200,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "SkillGroupName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "SkillId":{
      "type":"string",
      "pattern":"(^amzn1\\.ask\\.skill\\.[0-9a-f\\-]{1,200})|(^amzn1\\.echo-sdk-ams\\.app\\.[0-9a-f\\-]{1,200})"
    },
    "SkillListMaxResults":{
      "type":"integer",
      "max":10,
      "min":1
    },
    "SkillName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u0085\\u00A0-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]*"
    },
    "SkillSummary":{
      "type":"structure",
      "members":{
        "SkillId":{
          "shape":"SkillId",
          "documentation":"<p>The ARN of the skill summary.</p>"
        },
        "SkillName":{
          "shape":"SkillName",
          "documentation":"<p>The name of the skill.</p>"
        },
        "SupportsLinking":{
          "shape":"boolean",
          "documentation":"<p>Linking support for a skill.</p>"
        }
      },
      "documentation":"<p>The summary of skills.</p>"
    },
    "SkillSummaryList":{
      "type":"list",
      "member":{"shape":"SkillSummary"}
    },
    "SoftwareVersion":{"type":"string"},
    "Sort":{
      "type":"structure",
      "required":[
        "Key",
        "Value"
      ],
      "members":{
        "Key":{
          "shape":"SortKey",
          "documentation":"<p>The sort key of a sort object.</p>"
        },
        "Value":{
          "shape":"SortValue",
          "documentation":"<p>The sort value of a sort object.</p>"
        }
      },
      "documentation":"<p>An object representing a sort criteria. </p>"
    },
    "SortKey":{
      "type":"string",
      "max":500,
      "min":1
    },
    "SortList":{
      "type":"list",
      "member":{"shape":"Sort"},
      "max":25
    },
    "SortValue":{
      "type":"string",
      "enum":[
        "ASC",
        "DESC"
      ]
    },
    "StartDeviceSyncRequest":{
      "type":"structure",
      "required":["Features"],
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room with which the device to sync is associated. Required.</p>"
        },
        "DeviceArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the device to sync. Required.</p>"
        },
        "Features":{
          "shape":"Features",
          "documentation":"<p>Request structure to start the device sync. Required.</p>"
        }
      }
    },
    "StartDeviceSyncResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Tag":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p>The key of a tag. Tag keys are case-sensitive. </p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>The value of a tag. Tag values are case-sensitive and can be null.</p>"
        }
      },
      "documentation":"<p>A key-value pair that can be associated with a resource. </p>"
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagKeyList":{
      "type":"list",
      "member":{"shape":"TagKey"}
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"}
    },
    "TagResourceRequest":{
      "type":"structure",
      "required":[
        "Arn",
        "Tags"
      ],
      "members":{
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the resource to which to add metadata tags. Required. </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags to be added to the specified resource. Do not provide system tags. Required. </p>"
        }
      }
    },
    "TagResourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":0,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TemperatureUnit":{
      "type":"string",
      "enum":[
        "FAHRENHEIT",
        "CELSIUS"
      ]
    },
    "Timestamp":{"type":"timestamp"},
    "Timezone":{
      "type":"string",
      "max":100,
      "min":1
    },
    "TotalCount":{"type":"integer"},
    "UntagResourceRequest":{
      "type":"structure",
      "required":[
        "Arn",
        "TagKeys"
      ],
      "members":{
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the resource from which to remove metadata tags. Required. </p>"
        },
        "TagKeys":{
          "shape":"TagKeyList",
          "documentation":"<p>The tags to be removed from the specified resource. Do not provide system tags. Required. </p>"
        }
      }
    },
    "UntagResourceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateAddressBookRequest":{
      "type":"structure",
      "required":["AddressBookArn"],
      "members":{
        "AddressBookArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room to update.</p>"
        },
        "Name":{
          "shape":"AddressBookName",
          "documentation":"<p>The updated name of the room.</p>"
        },
        "Description":{
          "shape":"AddressBookDescription",
          "documentation":"<p>The updated description of the room.</p>"
        }
      }
    },
    "UpdateAddressBookResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateContactRequest":{
      "type":"structure",
      "required":["ContactArn"],
      "members":{
        "ContactArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the contact to update.</p>"
        },
        "DisplayName":{
          "shape":"ContactName",
          "documentation":"<p>The updated display name of the contact.</p>"
        },
        "FirstName":{
          "shape":"ContactName",
          "documentation":"<p>The updated first name of the contact.</p>"
        },
        "LastName":{
          "shape":"ContactName",
          "documentation":"<p>The updated last name of the contact.</p>"
        },
        "PhoneNumber":{
          "shape":"E164PhoneNumber",
          "documentation":"<p>The updated phone number of the contact.</p>"
        }
      }
    },
    "UpdateContactResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateDeviceRequest":{
      "type":"structure",
      "members":{
        "DeviceArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the device to update. Required.</p>"
        },
        "DeviceName":{
          "shape":"DeviceName",
          "documentation":"<p>The updated device name. Required.</p>"
        }
      }
    },
    "UpdateDeviceResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateProfileRequest":{
      "type":"structure",
      "members":{
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room profile to update. Required.</p>"
        },
        "ProfileName":{
          "shape":"ProfileName",
          "documentation":"<p>The updated name for the room profile.</p>"
        },
        "Timezone":{
          "shape":"Timezone",
          "documentation":"<p>The updated timezone for the room profile.</p>"
        },
        "Address":{
          "shape":"Address",
          "documentation":"<p>The updated address for the room profile.</p>"
        },
        "DistanceUnit":{
          "shape":"DistanceUnit",
          "documentation":"<p>The updated distance unit for the room profile.</p>"
        },
        "TemperatureUnit":{
          "shape":"TemperatureUnit",
          "documentation":"<p>The updated temperature unit for the room profile.</p>"
        },
        "WakeWord":{
          "shape":"WakeWord",
          "documentation":"<p>The updated wake word for the room profile.</p>"
        },
        "SetupModeDisabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the setup mode of the profile is enabled.</p>"
        },
        "MaxVolumeLimit":{
          "shape":"MaxVolumeLimit",
          "documentation":"<p>The updated maximum volume limit for the room profile.</p>"
        },
        "PSTNEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the PSTN setting of the room profile is enabled.</p>"
        }
      }
    },
    "UpdateProfileResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateRoomRequest":{
      "type":"structure",
      "members":{
        "RoomArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the room to update. </p>"
        },
        "RoomName":{
          "shape":"RoomName",
          "documentation":"<p>The updated name for the room.</p>"
        },
        "Description":{
          "shape":"RoomDescription",
          "documentation":"<p>The updated description for the room.</p>"
        },
        "ProviderCalendarId":{
          "shape":"ProviderCalendarId",
          "documentation":"<p>The updated provider calendar ARN for the room.</p>"
        },
        "ProfileArn":{
          "shape":"Arn",
          "documentation":"<p>The updated profile ARN for the room.</p>"
        }
      }
    },
    "UpdateRoomResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateSkillGroupRequest":{
      "type":"structure",
      "members":{
        "SkillGroupArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the skill group to update. </p>"
        },
        "SkillGroupName":{
          "shape":"SkillGroupName",
          "documentation":"<p>The updated name for the skill group.</p>"
        },
        "Description":{
          "shape":"SkillGroupDescription",
          "documentation":"<p>The updated description for the skill group.</p>"
        }
      }
    },
    "UpdateSkillGroupResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UserData":{
      "type":"structure",
      "members":{
        "UserArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of a user.</p>"
        },
        "FirstName":{
          "shape":"user_FirstName",
          "documentation":"<p>The first name of a user.</p>"
        },
        "LastName":{
          "shape":"user_LastName",
          "documentation":"<p>The last name of a user.</p>"
        },
        "Email":{
          "shape":"Email",
          "documentation":"<p>The email of a user.</p>"
        },
        "EnrollmentStatus":{
          "shape":"EnrollmentStatus",
          "documentation":"<p>The enrollment status of a user.</p>"
        },
        "EnrollmentId":{
          "shape":"EnrollmentId",
          "documentation":"<p>The enrollment ARN of a user.</p>"
        }
      },
      "documentation":"<p>Information related to a user.</p>"
    },
    "UserDataList":{
      "type":"list",
      "member":{"shape":"UserData"}
    },
    "UserId":{
      "type":"string",
      "pattern":"amzn1\\.[A-Za-z0-9+-\\/=.]{1,300}"
    },
    "WakeWord":{
      "type":"string",
      "enum":[
        "ALEXA",
        "AMAZON",
        "ECHO",
        "COMPUTER"
      ]
    },
    "boolean":{"type":"boolean"},
    "user_FirstName":{
      "type":"string",
      "max":30,
      "min":0,
      "pattern":"([A-Za-z\\-' 0-9._]|\\p{IsLetter})*"
    },
    "user_LastName":{
      "type":"string",
      "max":30,
      "min":0,
      "pattern":"([A-Za-z\\-' 0-9._]|\\p{IsLetter})*"
    },
    "user_UserId":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9@_+.-]*"
    }
  },
  "documentation":"<p>Alexa for Business makes it easy for you to use Alexa in your organization. Alexa for Business gives you the tools you need for managing Alexa devices, enroll your users, and assign skills, at scale. You can build your own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations. You can make also these available as private skills for your organization. Alexa for Business makes it easy to voice-enable your products and services, providing context-aware voice experiences for your customers.</p>"
}
