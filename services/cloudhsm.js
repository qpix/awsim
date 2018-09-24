awsim['cloudhsm'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2014-05-30",
    "endpointPrefix":"cloudhsm",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"CloudHSM",
    "serviceFullName":"Amazon CloudHSM",
    "serviceId":"CloudHSM",
    "signatureVersion":"v4",
    "targetPrefix":"CloudHsmFrontendService",
    "uid":"cloudhsm-2014-05-30"
  },
  "operations":{
    "AddTagsToResource":{
      "name":"AddTagsToResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsToResourceRequest"},
      "output":{"shape":"AddTagsToResourceResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>"
    },
    "CreateHapg":{
      "name":"CreateHapg",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateHapgRequest"},
      "output":{"shape":"CreateHapgResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>"
    },
    "CreateHsm":{
      "name":"CreateHsm",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateHsmRequest"},
      "output":{"shape":"CreateHsmResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href=\"https://console.aws.amazon.com/support/home\">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>"
    },
    "CreateLunaClient":{
      "name":"CreateLunaClient",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateLunaClientRequest"},
      "output":{"shape":"CreateLunaClientResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>"
    },
    "DeleteHapg":{
      "name":"DeleteHapg",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteHapgRequest"},
      "output":{"shape":"DeleteHapgResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>"
    },
    "DeleteHsm":{
      "name":"DeleteHsm",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteHsmRequest"},
      "output":{"shape":"DeleteHsmResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>"
    },
    "DeleteLunaClient":{
      "name":"DeleteLunaClient",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteLunaClientRequest"},
      "output":{"shape":"DeleteLunaClientResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>"
    },
    "DescribeHapg":{
      "name":"DescribeHapg",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeHapgRequest"},
      "output":{"shape":"DescribeHapgResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>"
    },
    "DescribeHsm":{
      "name":"DescribeHsm",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeHsmRequest"},
      "output":{"shape":"DescribeHsmResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>"
    },
    "DescribeLunaClient":{
      "name":"DescribeLunaClient",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeLunaClientRequest"},
      "output":{"shape":"DescribeLunaClientResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>"
    },
    "GetConfig":{
      "name":"GetConfig",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetConfigRequest"},
      "output":{"shape":"GetConfigResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>"
    },
    "ListAvailableZones":{
      "name":"ListAvailableZones",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAvailableZonesRequest"},
      "output":{"shape":"ListAvailableZonesResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>"
    },
    "ListHapgs":{
      "name":"ListHapgs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListHapgsRequest"},
      "output":{"shape":"ListHapgsResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>"
    },
    "ListHsms":{
      "name":"ListHsms",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListHsmsRequest"},
      "output":{"shape":"ListHsmsResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>"
    },
    "ListLunaClients":{
      "name":"ListLunaClients",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListLunaClientsRequest"},
      "output":{"shape":"ListLunaClientsResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>"
    },
    "ListTagsForResource":{
      "name":"ListTagsForResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagsForResourceRequest"},
      "output":{"shape":"ListTagsForResourceResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>"
    },
    "ModifyHapg":{
      "name":"ModifyHapg",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyHapgRequest"},
      "output":{"shape":"ModifyHapgResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>"
    },
    "ModifyHsm":{
      "name":"ModifyHsm",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyHsmRequest"},
      "output":{"shape":"ModifyHsmResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>"
    },
    "ModifyLunaClient":{
      "name":"ModifyLunaClient",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyLunaClientRequest"},
      "output":{"shape":"ModifyLunaClientResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client's HSMs.</p>"
    },
    "RemoveTagsFromResource":{
      "name":"RemoveTagsFromResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveTagsFromResourceRequest"},
      "output":{"shape":"RemoveTagsFromResourceResponse"},
      "errors":[
        {"shape":"CloudHsmServiceException"},
        {"shape":"CloudHsmInternalException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>"
    }
  },
  "shapes":{
    "AZ":{
      "type":"string",
      "pattern":"[a-zA-Z0-9\\-]*"
    },
    "AZList":{
      "type":"list",
      "member":{"shape":"AZ"}
    },
    "AddTagsToResourceRequest":{
      "type":"structure",
      "required":[
        "ResourceArn",
        "TagList"
      ],
      "members":{
        "ResourceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag.</p>"
        },
        "TagList":{
          "shape":"TagList",
          "documentation":"<p>One or more tags.</p>"
        }
      }
    },
    "AddTagsToResourceResponse":{
      "type":"structure",
      "required":["Status"],
      "members":{
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the operation.</p>"
        }
      }
    },
    "Boolean":{"type":"boolean"},
    "Certificate":{
      "type":"string",
      "max":2400,
      "min":600,
      "pattern":"[\\w :+=./\\n-]*"
    },
    "CertificateFingerprint":{
      "type":"string",
      "pattern":"([0-9a-fA-F][0-9a-fA-F]:){15}[0-9a-fA-F][0-9a-fA-F]"
    },
    "ClientArn":{
      "type":"string",
      "pattern":"arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\\-]*:[0-9]{12}:client-[0-9a-f]{8}"
    },
    "ClientLabel":{
      "type":"string",
      "pattern":"[a-zA-Z0-9_.-]{2,64}"
    },
    "ClientList":{
      "type":"list",
      "member":{"shape":"ClientArn"}
    },
    "ClientToken":{
      "type":"string",
      "pattern":"[a-zA-Z0-9]{1,64}"
    },
    "ClientVersion":{
      "type":"string",
      "enum":[
        "5.1",
        "5.3"
      ]
    },
    "CloudHsmInternalException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Indicates that an internal error occurred.</p>",
      "exception":true,
      "fault":true
    },
    "CloudHsmObjectState":{
      "type":"string",
      "enum":[
        "READY",
        "UPDATING",
        "DEGRADED"
      ]
    },
    "CloudHsmServiceException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"String",
          "documentation":"<p>Additional information about the error.</p>"
        },
        "retryable":{
          "shape":"Boolean",
          "documentation":"<p>Indicates if the action can be retried.</p>"
        }
      },
      "documentation":"<p>Indicates that an exception occurred in the AWS CloudHSM service.</p>",
      "exception":true
    },
    "CreateHapgRequest":{
      "type":"structure",
      "required":["Label"],
      "members":{
        "Label":{
          "shape":"Label",
          "documentation":"<p>The label of the new high-availability partition group.</p>"
        }
      },
      "documentation":"<p>Contains the inputs for the <a>CreateHapgRequest</a> action.</p>"
    },
    "CreateHapgResponse":{
      "type":"structure",
      "members":{
        "HapgArn":{
          "shape":"HapgArn",
          "documentation":"<p>The ARN of the high-availability partition group.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <a>CreateHAPartitionGroup</a> action.</p>"
    },
    "CreateHsmRequest":{
      "type":"structure",
      "required":[
        "SubnetId",
        "SshKey",
        "IamRoleArn",
        "SubscriptionType"
      ],
      "members":{
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>The identifier of the subnet in your VPC in which to place the HSM.</p>",
          "locationName":"SubnetId"
        },
        "SshKey":{
          "shape":"SshKey",
          "documentation":"<p>The SSH public key to install on the HSM.</p>",
          "locationName":"SshKey"
        },
        "EniIp":{
          "shape":"IpAddress",
          "documentation":"<p>The IP address to assign to the HSM's ENI.</p> <p>If an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the subnet.</p>",
          "locationName":"EniIp"
        },
        "IamRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your behalf.</p>",
          "locationName":"IamRoleArn"
        },
        "ExternalId":{
          "shape":"ExternalId",
          "documentation":"<p>The external ID from <code>IamRoleArn</code>, if present.</p>",
          "locationName":"ExternalId"
        },
        "SubscriptionType":{
          "shape":"SubscriptionType",
          "locationName":"SubscriptionType"
        },
        "ClientToken":{
          "shape":"ClientToken",
          "documentation":"<p>A user-defined token to ensure idempotence. Subsequent calls to this operation with the same token will be ignored.</p>",
          "locationName":"ClientToken"
        },
        "SyslogIp":{
          "shape":"IpAddress",
          "documentation":"<p>The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.</p>",
          "locationName":"SyslogIp"
        }
      },
      "documentation":"<p>Contains the inputs for the <code>CreateHsm</code> operation.</p>",
      "locationName":"CreateHsmRequest"
    },
    "CreateHsmResponse":{
      "type":"structure",
      "members":{
        "HsmArn":{
          "shape":"HsmArn",
          "documentation":"<p>The ARN of the HSM.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <code>CreateHsm</code> operation.</p>"
    },
    "CreateLunaClientRequest":{
      "type":"structure",
      "required":["Certificate"],
      "members":{
        "Label":{
          "shape":"ClientLabel",
          "documentation":"<p>The label for the client.</p>"
        },
        "Certificate":{
          "shape":"Certificate",
          "documentation":"<p>The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used by this client.</p>"
        }
      },
      "documentation":"<p>Contains the inputs for the <a>CreateLunaClient</a> action.</p>"
    },
    "CreateLunaClientResponse":{
      "type":"structure",
      "members":{
        "ClientArn":{
          "shape":"ClientArn",
          "documentation":"<p>The ARN of the client.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <a>CreateLunaClient</a> action.</p>"
    },
    "DeleteHapgRequest":{
      "type":"structure",
      "required":["HapgArn"],
      "members":{
        "HapgArn":{
          "shape":"HapgArn",
          "documentation":"<p>The ARN of the high-availability partition group to delete.</p>"
        }
      },
      "documentation":"<p>Contains the inputs for the <a>DeleteHapg</a> action.</p>"
    },
    "DeleteHapgResponse":{
      "type":"structure",
      "required":["Status"],
      "members":{
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the action.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <a>DeleteHapg</a> action.</p>"
    },
    "DeleteHsmRequest":{
      "type":"structure",
      "required":["HsmArn"],
      "members":{
        "HsmArn":{
          "shape":"HsmArn",
          "documentation":"<p>The ARN of the HSM to delete.</p>",
          "locationName":"HsmArn"
        }
      },
      "documentation":"<p>Contains the inputs for the <a>DeleteHsm</a> operation.</p>",
      "locationName":"DeleteHsmRequest"
    },
    "DeleteHsmResponse":{
      "type":"structure",
      "required":["Status"],
      "members":{
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the operation.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <a>DeleteHsm</a> operation.</p>"
    },
    "DeleteLunaClientRequest":{
      "type":"structure",
      "required":["ClientArn"],
      "members":{
        "ClientArn":{
          "shape":"ClientArn",
          "documentation":"<p>The ARN of the client to delete.</p>"
        }
      }
    },
    "DeleteLunaClientResponse":{
      "type":"structure",
      "required":["Status"],
      "members":{
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the action.</p>"
        }
      }
    },
    "DescribeHapgRequest":{
      "type":"structure",
      "required":["HapgArn"],
      "members":{
        "HapgArn":{
          "shape":"HapgArn",
          "documentation":"<p>The ARN of the high-availability partition group to describe.</p>"
        }
      },
      "documentation":"<p>Contains the inputs for the <a>DescribeHapg</a> action.</p>"
    },
    "DescribeHapgResponse":{
      "type":"structure",
      "members":{
        "HapgArn":{
          "shape":"HapgArn",
          "documentation":"<p>The ARN of the high-availability partition group.</p>"
        },
        "HapgSerial":{
          "shape":"String",
          "documentation":"<p>The serial number of the high-availability partition group.</p>"
        },
        "HsmsLastActionFailed":{
          "shape":"HsmList",
          "documentation":"<p/>"
        },
        "HsmsPendingDeletion":{
          "shape":"HsmList",
          "documentation":"<p/>"
        },
        "HsmsPendingRegistration":{
          "shape":"HsmList",
          "documentation":"<p/>"
        },
        "Label":{
          "shape":"Label",
          "documentation":"<p>The label for the high-availability partition group.</p>"
        },
        "LastModifiedTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the high-availability partition group was last modified.</p>"
        },
        "PartitionSerialList":{
          "shape":"PartitionSerialList",
          "documentation":"<p>The list of partition serial numbers that belong to the high-availability partition group.</p>"
        },
        "State":{
          "shape":"CloudHsmObjectState",
          "documentation":"<p>The state of the high-availability partition group.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <a>DescribeHapg</a> action.</p>"
    },
    "DescribeHsmRequest":{
      "type":"structure",
      "members":{
        "HsmArn":{
          "shape":"HsmArn",
          "documentation":"<p>The ARN of the HSM. Either the <code>HsmArn</code> or the <code>SerialNumber</code> parameter must be specified.</p>"
        },
        "HsmSerialNumber":{
          "shape":"HsmSerialNumber",
          "documentation":"<p>The serial number of the HSM. Either the <code>HsmArn</code> or the <code>HsmSerialNumber</code> parameter must be specified.</p>"
        }
      },
      "documentation":"<p>Contains the inputs for the <a>DescribeHsm</a> operation.</p>"
    },
    "DescribeHsmResponse":{
      "type":"structure",
      "members":{
        "HsmArn":{
          "shape":"HsmArn",
          "documentation":"<p>The ARN of the HSM.</p>"
        },
        "Status":{
          "shape":"HsmStatus",
          "documentation":"<p>The status of the HSM.</p>"
        },
        "StatusDetails":{
          "shape":"String",
          "documentation":"<p>Contains additional information about the status of the HSM.</p>"
        },
        "AvailabilityZone":{
          "shape":"AZ",
          "documentation":"<p>The Availability Zone that the HSM is in.</p>"
        },
        "EniId":{
          "shape":"EniId",
          "documentation":"<p>The identifier of the elastic network interface (ENI) attached to the HSM.</p>"
        },
        "EniIp":{
          "shape":"IpAddress",
          "documentation":"<p>The IP address assigned to the HSM's ENI.</p>"
        },
        "SubscriptionType":{"shape":"SubscriptionType"},
        "SubscriptionStartDate":{
          "shape":"Timestamp",
          "documentation":"<p>The subscription start date.</p>"
        },
        "SubscriptionEndDate":{
          "shape":"Timestamp",
          "documentation":"<p>The subscription end date.</p>"
        },
        "VpcId":{
          "shape":"VpcId",
          "documentation":"<p>The identifier of the VPC that the HSM is in.</p>"
        },
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>The identifier of the subnet that the HSM is in.</p>"
        },
        "IamRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The ARN of the IAM role assigned to the HSM.</p>"
        },
        "SerialNumber":{
          "shape":"HsmSerialNumber",
          "documentation":"<p>The serial number of the HSM.</p>"
        },
        "VendorName":{
          "shape":"String",
          "documentation":"<p>The name of the HSM vendor.</p>"
        },
        "HsmType":{
          "shape":"String",
          "documentation":"<p>The HSM model type.</p>"
        },
        "SoftwareVersion":{
          "shape":"String",
          "documentation":"<p>The HSM software version.</p>"
        },
        "SshPublicKey":{
          "shape":"SshKey",
          "documentation":"<p>The public SSH key.</p>"
        },
        "SshKeyLastUpdated":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the SSH key was last updated.</p>"
        },
        "ServerCertUri":{
          "shape":"String",
          "documentation":"<p>The URI of the certificate server.</p>"
        },
        "ServerCertLastUpdated":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time that the server certificate was last updated.</p>"
        },
        "Partitions":{
          "shape":"PartitionList",
          "documentation":"<p>The list of partitions on the HSM.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <a>DescribeHsm</a> operation.</p>"
    },
    "DescribeLunaClientRequest":{
      "type":"structure",
      "members":{
        "ClientArn":{
          "shape":"ClientArn",
          "documentation":"<p>The ARN of the client.</p>"
        },
        "CertificateFingerprint":{
          "shape":"CertificateFingerprint",
          "documentation":"<p>The certificate fingerprint.</p>"
        }
      }
    },
    "DescribeLunaClientResponse":{
      "type":"structure",
      "members":{
        "ClientArn":{
          "shape":"ClientArn",
          "documentation":"<p>The ARN of the client.</p>"
        },
        "Certificate":{
          "shape":"Certificate",
          "documentation":"<p>The certificate installed on the HSMs used by this client.</p>"
        },
        "CertificateFingerprint":{
          "shape":"CertificateFingerprint",
          "documentation":"<p>The certificate fingerprint.</p>"
        },
        "LastModifiedTimestamp":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the client was last modified.</p>"
        },
        "Label":{
          "shape":"Label",
          "documentation":"<p>The label of the client.</p>"
        }
      }
    },
    "EniId":{
      "type":"string",
      "pattern":"eni-[0-9a-f]{8}"
    },
    "ExternalId":{
      "type":"string",
      "pattern":"[\\w :+=./-]*"
    },
    "GetConfigRequest":{
      "type":"structure",
      "required":[
        "ClientArn",
        "ClientVersion",
        "HapgList"
      ],
      "members":{
        "ClientArn":{
          "shape":"ClientArn",
          "documentation":"<p>The ARN of the client.</p>"
        },
        "ClientVersion":{
          "shape":"ClientVersion",
          "documentation":"<p>The client version.</p>"
        },
        "HapgList":{
          "shape":"HapgList",
          "documentation":"<p>A list of ARNs that identify the high-availability partition groups that are associated with the client.</p>"
        }
      }
    },
    "GetConfigResponse":{
      "type":"structure",
      "members":{
        "ConfigType":{
          "shape":"String",
          "documentation":"<p>The type of credentials.</p>"
        },
        "ConfigFile":{
          "shape":"String",
          "documentation":"<p>The chrystoki.conf configuration file.</p>"
        },
        "ConfigCred":{
          "shape":"String",
          "documentation":"<p>The certificate file containing the server.pem files of the HSMs.</p>"
        }
      }
    },
    "HapgArn":{
      "type":"string",
      "pattern":"arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\\-]*:[0-9]{12}:hapg-[0-9a-f]{8}"
    },
    "HapgList":{
      "type":"list",
      "member":{"shape":"HapgArn"}
    },
    "HsmArn":{
      "type":"string",
      "documentation":"<p>An ARN that identifies an HSM.</p>",
      "pattern":"arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\\-]*:[0-9]{12}:hsm-[0-9a-f]{8}"
    },
    "HsmList":{
      "type":"list",
      "member":{"shape":"HsmArn"},
      "documentation":"<p>Contains a list of ARNs that identify the HSMs.</p>"
    },
    "HsmSerialNumber":{
      "type":"string",
      "pattern":"\\d{1,16}"
    },
    "HsmStatus":{
      "type":"string",
      "enum":[
        "PENDING",
        "RUNNING",
        "UPDATING",
        "SUSPENDED",
        "TERMINATING",
        "TERMINATED",
        "DEGRADED"
      ]
    },
    "IamRoleArn":{
      "type":"string",
      "pattern":"arn:aws(-iso)?:iam::[0-9]{12}:role/[a-zA-Z0-9_\\+=,\\.\\-@]{1,64}"
    },
    "InvalidRequestException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Indicates that one or more of the request parameters are not valid.</p>",
      "exception":true
    },
    "IpAddress":{
      "type":"string",
      "pattern":"\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"
    },
    "Label":{
      "type":"string",
      "pattern":"[a-zA-Z0-9_.-]{1,64}"
    },
    "ListAvailableZonesRequest":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Contains the inputs for the <a>ListAvailableZones</a> action.</p>"
    },
    "ListAvailableZonesResponse":{
      "type":"structure",
      "members":{
        "AZList":{
          "shape":"AZList",
          "documentation":"<p>The list of Availability Zones that have available AWS CloudHSM capacity.</p>"
        }
      }
    },
    "ListHapgsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The <code>NextToken</code> value from a previous call to <code>ListHapgs</code>. Pass null if this is the first call.</p>"
        }
      }
    },
    "ListHapgsResponse":{
      "type":"structure",
      "required":["HapgList"],
      "members":{
        "HapgList":{
          "shape":"HapgList",
          "documentation":"<p>The list of high-availability partition groups.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If not null, more results are available. Pass this value to <code>ListHapgs</code> to retrieve the next set of items.</p>"
        }
      }
    },
    "ListHsmsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The <code>NextToken</code> value from a previous call to <code>ListHsms</code>. Pass null if this is the first call.</p>"
        }
      }
    },
    "ListHsmsResponse":{
      "type":"structure",
      "members":{
        "HsmList":{
          "shape":"HsmList",
          "documentation":"<p>The list of ARNs that identify the HSMs.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If not null, more results are available. Pass this value to <code>ListHsms</code> to retrieve the next set of items.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <code>ListHsms</code> operation.</p>"
    },
    "ListLunaClientsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The <code>NextToken</code> value from a previous call to <code>ListLunaClients</code>. Pass null if this is the first call.</p>"
        }
      }
    },
    "ListLunaClientsResponse":{
      "type":"structure",
      "required":["ClientList"],
      "members":{
        "ClientList":{
          "shape":"ClientList",
          "documentation":"<p>The list of clients.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>If not null, more results are available. Pass this to <code>ListLunaClients</code> to retrieve the next set of items.</p>"
        }
      }
    },
    "ListTagsForResourceRequest":{
      "type":"structure",
      "required":["ResourceArn"],
      "members":{
        "ResourceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>"
        }
      }
    },
    "ListTagsForResourceResponse":{
      "type":"structure",
      "required":["TagList"],
      "members":{
        "TagList":{
          "shape":"TagList",
          "documentation":"<p>One or more tags.</p>"
        }
      }
    },
    "ModifyHapgRequest":{
      "type":"structure",
      "required":["HapgArn"],
      "members":{
        "HapgArn":{
          "shape":"HapgArn",
          "documentation":"<p>The ARN of the high-availability partition group to modify.</p>"
        },
        "Label":{
          "shape":"Label",
          "documentation":"<p>The new label for the high-availability partition group.</p>"
        },
        "PartitionSerialList":{
          "shape":"PartitionSerialList",
          "documentation":"<p>The list of partition serial numbers to make members of the high-availability partition group.</p>"
        }
      }
    },
    "ModifyHapgResponse":{
      "type":"structure",
      "members":{
        "HapgArn":{
          "shape":"HapgArn",
          "documentation":"<p>The ARN of the high-availability partition group.</p>"
        }
      }
    },
    "ModifyHsmRequest":{
      "type":"structure",
      "required":["HsmArn"],
      "members":{
        "HsmArn":{
          "shape":"HsmArn",
          "documentation":"<p>The ARN of the HSM to modify.</p>",
          "locationName":"HsmArn"
        },
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>The new identifier of the subnet that the HSM is in. The new subnet must be in the same Availability Zone as the current subnet.</p>",
          "locationName":"SubnetId"
        },
        "EniIp":{
          "shape":"IpAddress",
          "documentation":"<p>The new IP address for the elastic network interface (ENI) attached to the HSM.</p> <p>If the HSM is moved to a different subnet, and an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the new subnet.</p>",
          "locationName":"EniIp"
        },
        "IamRoleArn":{
          "shape":"IamRoleArn",
          "documentation":"<p>The new IAM role ARN.</p>",
          "locationName":"IamRoleArn"
        },
        "ExternalId":{
          "shape":"ExternalId",
          "documentation":"<p>The new external ID.</p>",
          "locationName":"ExternalId"
        },
        "SyslogIp":{
          "shape":"IpAddress",
          "documentation":"<p>The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.</p>",
          "locationName":"SyslogIp"
        }
      },
      "documentation":"<p>Contains the inputs for the <a>ModifyHsm</a> operation.</p>",
      "locationName":"ModifyHsmRequest"
    },
    "ModifyHsmResponse":{
      "type":"structure",
      "members":{
        "HsmArn":{
          "shape":"HsmArn",
          "documentation":"<p>The ARN of the HSM.</p>"
        }
      },
      "documentation":"<p>Contains the output of the <a>ModifyHsm</a> operation.</p>"
    },
    "ModifyLunaClientRequest":{
      "type":"structure",
      "required":[
        "ClientArn",
        "Certificate"
      ],
      "members":{
        "ClientArn":{
          "shape":"ClientArn",
          "documentation":"<p>The ARN of the client.</p>"
        },
        "Certificate":{
          "shape":"Certificate",
          "documentation":"<p>The new certificate for the client.</p>"
        }
      }
    },
    "ModifyLunaClientResponse":{
      "type":"structure",
      "members":{
        "ClientArn":{
          "shape":"ClientArn",
          "documentation":"<p>The ARN of the client.</p>"
        }
      }
    },
    "PaginationToken":{
      "type":"string",
      "pattern":"[a-zA-Z0-9+/]*"
    },
    "PartitionArn":{
      "type":"string",
      "pattern":"arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\\-]*:[0-9]{12}:hsm-[0-9a-f]{8}/partition-[0-9]{6,12}"
    },
    "PartitionList":{
      "type":"list",
      "member":{"shape":"PartitionArn"}
    },
    "PartitionSerial":{
      "type":"string",
      "pattern":"\\d{6,12}"
    },
    "PartitionSerialList":{
      "type":"list",
      "member":{"shape":"PartitionSerial"}
    },
    "RemoveTagsFromResourceRequest":{
      "type":"structure",
      "required":[
        "ResourceArn",
        "TagKeyList"
      ],
      "members":{
        "ResourceArn":{
          "shape":"String",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>"
        },
        "TagKeyList":{
          "shape":"TagKeyList",
          "documentation":"<p>The tag key or keys to remove.</p> <p>Specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>"
        }
      }
    },
    "RemoveTagsFromResourceResponse":{
      "type":"structure",
      "required":["Status"],
      "members":{
        "Status":{
          "shape":"String",
          "documentation":"<p>The status of the operation.</p>"
        }
      }
    },
    "SshKey":{
      "type":"string",
      "pattern":"[a-zA-Z0-9+/= ._:\\\\@-]*"
    },
    "String":{
      "type":"string",
      "pattern":"[\\w :+=./\\\\-]*"
    },
    "SubnetId":{
      "type":"string",
      "pattern":"subnet-[0-9a-f]{8}"
    },
    "SubscriptionType":{
      "type":"string",
      "documentation":"<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>",
      "enum":["PRODUCTION"]
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
          "documentation":"<p>The key of the tag.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>The value of the tag.</p>"
        }
      },
      "documentation":"<p>A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource.</p>"
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1
    },
    "TagKeyList":{
      "type":"list",
      "member":{"shape":"TagKey"}
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"}
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":0
    },
    "Timestamp":{
      "type":"string",
      "pattern":"\\d*"
    },
    "VpcId":{
      "type":"string",
      "pattern":"vpc-[0-9a-f]{8}"
    }
  },
  "documentation":"<fullname>AWS CloudHSM Service</fullname> <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"http://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p>"
}
