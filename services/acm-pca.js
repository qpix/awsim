awsim['acm-pca'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-08-22",
    "endpointPrefix":"acm-pca",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"ACM-PCA",
    "serviceFullName":"AWS Certificate Manager Private Certificate Authority",
    "serviceId":"ACM PCA",
    "signatureVersion":"v4",
    "targetPrefix":"ACMPrivateCA",
    "uid":"acm-pca-2017-08-22"
  },
  "operations":{
    "CreateCertificateAuthority":{
      "name":"CreateCertificateAuthority",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateCertificateAuthorityRequest"},
      "output":{"shape":"CreateCertificateAuthorityResponse"},
      "errors":[
        {"shape":"InvalidArgsException"},
        {"shape":"InvalidPolicyException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a private subordinate certificate authority (CA). You must specify the CA configuration, the revocation configuration, the CA type, and an optional idempotency token. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses to sign, and X.500 subject information. The CRL (certificate revocation list) configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this operation returns the Amazon Resource Name (ARN) of the CA.</p>",
      "idempotent":true
    },
    "CreateCertificateAuthorityAuditReport":{
      "name":"CreateCertificateAuthorityAuditReport",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateCertificateAuthorityAuditReportRequest"},
      "output":{"shape":"CreateCertificateAuthorityAuditReportResponse"},
      "errors":[
        {"shape":"RequestInProgressException"},
        {"shape":"RequestFailedException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidArgsException"},
        {"shape":"InvalidStateException"}
      ],
      "documentation":"<p>Creates an audit report that lists every time that the your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a>IssueCertificate</a> and <a>RevokeCertificate</a> operations use the private key. You can generate a new report every 30 minutes.</p>",
      "idempotent":true
    },
    "DeleteCertificateAuthority":{
      "name":"DeleteCertificateAuthority",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteCertificateAuthorityRequest"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidStateException"}
      ],
      "documentation":"<p>Deletes a private certificate authority (CA). You must provide the ARN (Amazon Resource Name) of the private CA that you want to delete. You can find the ARN by calling the <a>ListCertificateAuthorities</a> operation. Before you can delete a CA, you must disable it. Call the <a>UpdateCertificateAuthority</a> operation and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (the <b>Status</b> field of the <a>CertificateAuthority</a> is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate (the <b>Status</b> is <code>PENDING_CERTIFICATE</code>) into ACM PCA. </p> <p>If the CA is in one of the aforementioned states and you call <a>DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permentantly deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a>DescribeCertificateAuthority</a> operation returns the time remaining in the restoration window of a Private CA in the <code>DELETED</code> state. To restore an eligable CA, call the <a>RestoreCertificateAuthority</a> operation.</p>"
    },
    "DescribeCertificateAuthority":{
      "name":"DescribeCertificateAuthority",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeCertificateAuthorityRequest"},
      "output":{"shape":"DescribeCertificateAuthorityResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"}
      ],
      "documentation":"<p>Lists information about your private certificate authority (CA). You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - ACM PCA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your on-premises root or subordinate CA to sign your private CA CSR and then import it into PCA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or backend AWS failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it will be permanently deleted. The length of time remaining in the CA's restoration period will also be included in this operation's output.</p> </li> </ul>"
    },
    "DescribeCertificateAuthorityAuditReport":{
      "name":"DescribeCertificateAuthorityAuditReport",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeCertificateAuthorityAuditReportRequest"},
      "output":{"shape":"DescribeCertificateAuthorityAuditReportResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidArgsException"}
      ],
      "documentation":"<p>Lists information about a specific audit report created by calling the <a>CreateCertificateAuthorityAuditReport</a> operation. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a>IssueCertificate</a> operation or the <a>RevokeCertificate</a> operation. </p>"
    },
    "GetCertificate":{
      "name":"GetCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCertificateRequest"},
      "output":{"shape":"GetCertificateResponse"},
      "errors":[
        {"shape":"RequestInProgressException"},
        {"shape":"RequestFailedException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidStateException"}
      ],
      "documentation":"<p>Retrieves a certificate from your private CA. The ARN of the certificate is returned when you call the <a>IssueCertificate</a> operation. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> operation. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a>CreateCertificateAuthorityAuditReport</a> operation to create a report that contains information about all of the certificates issued and revoked by your private CA. </p>"
    },
    "GetCertificateAuthorityCertificate":{
      "name":"GetCertificateAuthorityCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCertificateAuthorityCertificateRequest"},
      "output":{"shape":"GetCertificateAuthorityCertificateResponse"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidStateException"},
        {"shape":"InvalidArnException"}
      ],
      "documentation":"<p>Retrieves the certificate and certificate chain for your private certificate authority (CA). Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. </p>"
    },
    "GetCertificateAuthorityCsr":{
      "name":"GetCertificateAuthorityCsr",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCertificateAuthorityCsrRequest"},
      "output":{"shape":"GetCertificateAuthorityCsrResponse"},
      "errors":[
        {"shape":"RequestInProgressException"},
        {"shape":"RequestFailedException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidStateException"}
      ],
      "documentation":"<p>Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a>CreateCertificateAuthority</a> operation. Take the CSR to your on-premises X.509 infrastructure and sign it by using your root or a subordinate CA. Then import the signed certificate back into ACM PCA by calling the <a>ImportCertificateAuthorityCertificate</a> operation. The CSR is returned as a base64 PEM-encoded string. </p>"
    },
    "ImportCertificateAuthorityCertificate":{
      "name":"ImportCertificateAuthorityCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ImportCertificateAuthorityCertificateRequest"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"RequestInProgressException"},
        {"shape":"RequestFailedException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidStateException"},
        {"shape":"MalformedCertificateException"},
        {"shape":"CertificateMismatchException"}
      ],
      "documentation":"<p>Imports your signed private CA certificate into ACM PCA. Before you can call this operation, you must create the private certificate authority by calling the <a>CreateCertificateAuthority</a> operation. You must then generate a certificate signing request (CSR) by calling the <a>GetCertificateAuthorityCsr</a> operation. Take the CSR to your on-premises CA and use the root certificate or a subordinate certificate to sign it. Create a certificate chain and copy the signed certificate and the certificate chain to your working directory. </p> <note> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </note> <note> <p>Your on-premises CA certificate must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </note> <note> <p>The chain must be PEM-encoded.</p> </note>"
    },
    "IssueCertificate":{
      "name":"IssueCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"IssueCertificateRequest"},
      "output":{"shape":"IssueCertificateResponse"},
      "errors":[
        {"shape":"LimitExceededException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidStateException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidArgsException"},
        {"shape":"MalformedCSRException"}
      ],
      "documentation":"<p>Uses your private certificate authority (CA) to issue a client certificate. This operation returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a>GetCertificate</a> operation and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> operation to retrieve the ARNs of the certificates that you issue by using ACM PCA.</p> </note>",
      "idempotent":true
    },
    "ListCertificateAuthorities":{
      "name":"ListCertificateAuthorities",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListCertificateAuthoritiesRequest"},
      "output":{"shape":"ListCertificateAuthoritiesResponse"},
      "errors":[
        {"shape":"InvalidNextTokenException"}
      ],
      "documentation":"<p>Lists the private certificate authorities that you created by using the <a>CreateCertificateAuthority</a> operation.</p>"
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
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"}
      ],
      "documentation":"<p>Lists the tags, if any, that are associated with your private CA. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a>TagCertificateAuthority</a> operation to add one or more tags to your CA. Call the <a>UntagCertificateAuthority</a> operation to remove tags. </p>"
    },
    "RestoreCertificateAuthority":{
      "name":"RestoreCertificateAuthority",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RestoreCertificateAuthorityRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidStateException"},
        {"shape":"InvalidArnException"}
      ],
      "documentation":"<p>Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a>DeleteCertificateAuthority</a> operation. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a>DescribeCertificateAuthority</a> or <a>ListCertificateAuthorities</a> operations. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> operation returns. To change its status to <code>ACTIVE</code>, call the <a>UpdateCertificateAuthority</a> operation. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a>ImportCertificateAuthorityCertificate</a> operation to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.</p>"
    },
    "RevokeCertificate":{
      "name":"RevokeCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RevokeCertificateRequest"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidStateException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"RequestAlreadyProcessedException"},
        {"shape":"RequestInProgressException"},
        {"shape":"RequestFailedException"}
      ],
      "documentation":"<p>Revokes a certificate that you issued by calling the <a>IssueCertificate</a> operation. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. ACM PCA writes the CRL to an S3 bucket that you specify. For more information about revocation, see the <a>CrlConfiguration</a> structure. ACM PCA also writes revocation information to the audit report. For more information, see <a>CreateCertificateAuthorityAuditReport</a>. </p>"
    },
    "TagCertificateAuthority":{
      "name":"TagCertificateAuthority",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TagCertificateAuthorityRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidStateException"},
        {"shape":"InvalidTagException"},
        {"shape":"TooManyTagsException"}
      ],
      "documentation":"<p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a>UntagCertificateAuthority</a> operation. Call the <a>ListTags</a> operation to see what tags are associated with your CA. </p>"
    },
    "UntagCertificateAuthority":{
      "name":"UntagCertificateAuthority",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UntagCertificateAuthorityRequest"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidStateException"},
        {"shape":"InvalidTagException"}
      ],
      "documentation":"<p>Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this operation, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a>TagCertificateAuthority</a>. Call the <a>ListTags</a> operation to see what tags are associated with your CA. </p>"
    },
    "UpdateCertificateAuthority":{
      "name":"UpdateCertificateAuthority",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateCertificateAuthorityRequest"},
      "errors":[
        {"shape":"ConcurrentModificationException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidArgsException"},
        {"shape":"InvalidArnException"},
        {"shape":"InvalidStateException"},
        {"shape":"InvalidPolicyException"}
      ],
      "documentation":"<p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p>"
    }
  },
  "shapes":{
    "ASN1Subject":{
      "type":"structure",
      "members":{
        "Country":{
          "shape":"CountryCodeString",
          "documentation":"<p>Two-digit code that specifies the country in which the certificate subject located.</p>"
        },
        "Organization":{
          "shape":"String64",
          "documentation":"<p>Legal name of the organization with which the certificate subject is affiliated. </p>"
        },
        "OrganizationalUnit":{
          "shape":"String64",
          "documentation":"<p>A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.</p>"
        },
        "DistinguishedNameQualifier":{
          "shape":"DistinguishedNameQualifierString",
          "documentation":"<p>Disambiguating information for the certificate subject.</p>"
        },
        "State":{
          "shape":"String128",
          "documentation":"<p>State in which the subject of the certificate is located.</p>"
        },
        "CommonName":{
          "shape":"String64",
          "documentation":"<p>Fully qualified domain name (FQDN) associated with the certificate subject.</p>"
        },
        "SerialNumber":{
          "shape":"String64",
          "documentation":"<p>The certificate serial number.</p>"
        },
        "Locality":{
          "shape":"String128",
          "documentation":"<p>The locality (such as a city or town) in which the certificate subject is located.</p>"
        },
        "Title":{
          "shape":"String64",
          "documentation":"<p>A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.</p>"
        },
        "Surname":{
          "shape":"String40",
          "documentation":"<p>Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.</p>"
        },
        "GivenName":{
          "shape":"String16",
          "documentation":"<p>First name.</p>"
        },
        "Initials":{
          "shape":"String5",
          "documentation":"<p>Concatenation that typically contains the first letter of the <b>GivenName</b>, the first letter of the middle name if one exists, and the first letter of the <b>SurName</b>.</p>"
        },
        "Pseudonym":{
          "shape":"String128",
          "documentation":"<p>Typically a shortened version of a longer <b>GivenName</b>. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.</p>"
        },
        "GenerationQualifier":{
          "shape":"String3",
          "documentation":"<p>Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.</p>"
        }
      },
      "documentation":"<p>Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity. </p>"
    },
    "Arn":{
      "type":"string",
      "max":200,
      "min":5,
      "pattern":"arn:[\\w+=/,.@-]+:[\\w+=/,.@-]+:[\\w+=/,.@-]*:[0-9]+:[\\w+=,.@-]+(/[\\w+=/,.@-]+)*"
    },
    "AuditReportId":{
      "type":"string",
      "max":36,
      "min":36,
      "pattern":"[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}"
    },
    "AuditReportResponseFormat":{
      "type":"string",
      "enum":[
        "JSON",
        "CSV"
      ]
    },
    "AuditReportStatus":{
      "type":"string",
      "enum":[
        "CREATING",
        "SUCCESS",
        "FAILED"
      ]
    },
    "Boolean":{"type":"boolean"},
    "CertificateAuthorities":{
      "type":"list",
      "member":{"shape":"CertificateAuthority"}
    },
    "CertificateAuthority":{
      "type":"structure",
      "members":{
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>Amazon Resource Name (ARN) for your private certificate authority (CA). The format is <code> <i>12345678-1234-1234-1234-123456789012</i> </code>.</p>"
        },
        "CreatedAt":{
          "shape":"TStamp",
          "documentation":"<p>Date and time at which your private CA was created.</p>"
        },
        "LastStateChangeAt":{
          "shape":"TStamp",
          "documentation":"<p>Date and time at which your private CA was last updated.</p>"
        },
        "Type":{
          "shape":"CertificateAuthorityType",
          "documentation":"<p>Type of your private CA.</p>"
        },
        "Serial":{
          "shape":"String",
          "documentation":"<p>Serial number of your private CA.</p>"
        },
        "Status":{
          "shape":"CertificateAuthorityStatus",
          "documentation":"<p>Status of your private CA.</p>"
        },
        "NotBefore":{
          "shape":"TStamp",
          "documentation":"<p>Date and time before which your private CA certificate is not valid.</p>"
        },
        "NotAfter":{
          "shape":"TStamp",
          "documentation":"<p>Date and time after which your private CA certificate is not valid.</p>"
        },
        "FailureReason":{
          "shape":"FailureReason",
          "documentation":"<p>Reason the request to create your private CA failed.</p>"
        },
        "CertificateAuthorityConfiguration":{
          "shape":"CertificateAuthorityConfiguration",
          "documentation":"<p>Your private CA configuration.</p>"
        },
        "RevocationConfiguration":{
          "shape":"RevocationConfiguration",
          "documentation":"<p>Information about the certificate revocation list (CRL) created and maintained by your private CA. </p>"
        },
        "RestorableUntil":{
          "shape":"TStamp",
          "documentation":"<p>The period during which a deleted CA can be restored. For more information, see the <code>PermanentDeletionTimeInDays</code> parameter of the <a>DeleteCertificateAuthorityRequest</a> operation. </p>"
        }
      },
      "documentation":"<p>Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a>CreateCertificateAuthority</a> operation to create your private CA. You must then call the <a>GetCertificateAuthorityCertificate</a> operation to retrieve a private CA certificate signing request (CSR). Take the CSR to your on-premises CA and sign it with the root CA certificate or a subordinate certificate. Call the <a>ImportCertificateAuthorityCertificate</a> operation to import the signed certificate into AWS Certificate Manager (ACM). </p>"
    },
    "CertificateAuthorityConfiguration":{
      "type":"structure",
      "required":[
        "KeyAlgorithm",
        "SigningAlgorithm",
        "Subject"
      ],
      "members":{
        "KeyAlgorithm":{
          "shape":"KeyAlgorithm",
          "documentation":"<p>Type of the public key algorithm and size, in bits, of the key pair that your key pair creates when it issues a certificate.</p>"
        },
        "SigningAlgorithm":{
          "shape":"SigningAlgorithm",
          "documentation":"<p>Name of the algorithm your private CA uses to sign certificate requests.</p>"
        },
        "Subject":{
          "shape":"ASN1Subject",
          "documentation":"<p>Structure that contains X.500 distinguished name information for your private CA.</p>"
        }
      },
      "documentation":"<p>Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate, the signature algorithm it uses used when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> operation. </p>"
    },
    "CertificateAuthorityStatus":{
      "type":"string",
      "enum":[
        "CREATING",
        "PENDING_CERTIFICATE",
        "ACTIVE",
        "DELETED",
        "DISABLED",
        "EXPIRED",
        "FAILED"
      ]
    },
    "CertificateAuthorityType":{
      "type":"string",
      "enum":["SUBORDINATE"]
    },
    "CertificateBody":{"type":"string"},
    "CertificateBodyBlob":{
      "type":"blob",
      "max":32768,
      "min":1
    },
    "CertificateChain":{"type":"string"},
    "CertificateChainBlob":{
      "type":"blob",
      "max":2097152,
      "min":0
    },
    "CertificateMismatchException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The certificate authority certificate you are importing does not comply with conditions specified in the certificate that signed it.</p>",
      "exception":true
    },
    "ConcurrentModificationException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>A previous update to your private CA is still ongoing.</p>",
      "exception":true
    },
    "CountryCodeString":{
      "type":"string",
      "pattern":"[A-Za-z]{2}"
    },
    "CreateCertificateAuthorityAuditReportRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityArn",
        "S3BucketName",
        "AuditReportResponseFormat"
      ],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>Amazon Resource Name (ARN) of the CA to be audited. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>.</p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>Name of the S3 bucket that will contain the audit report.</p>"
        },
        "AuditReportResponseFormat":{
          "shape":"AuditReportResponseFormat",
          "documentation":"<p>Format in which to create the report. This can be either <b>JSON</b> or <b>CSV</b>.</p>"
        }
      }
    },
    "CreateCertificateAuthorityAuditReportResponse":{
      "type":"structure",
      "members":{
        "AuditReportId":{
          "shape":"AuditReportId",
          "documentation":"<p>An alphanumeric string that contains a report identifier.</p>"
        },
        "S3Key":{
          "shape":"String",
          "documentation":"<p>The <b>key</b> that uniquely identifies the report file in your S3 bucket.</p>"
        }
      }
    },
    "CreateCertificateAuthorityRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityConfiguration",
        "CertificateAuthorityType"
      ],
      "members":{
        "CertificateAuthorityConfiguration":{
          "shape":"CertificateAuthorityConfiguration",
          "documentation":"<p>Name and bit size of the private key algorithm, the name of the signing algorithm, and X.500 certificate subject information.</p>"
        },
        "RevocationConfiguration":{
          "shape":"RevocationConfiguration",
          "documentation":"<p>Contains a Boolean value that you can use to enable a certification revocation list (CRL) for the CA, the name of the S3 bucket to which ACM PCA will write the CRL, and an optional CNAME alias that you can use to hide the name of your bucket in the <b>CRL Distribution Points</b> extension of your CA certificate. For more information, see the <a>CrlConfiguration</a> structure. </p>"
        },
        "CertificateAuthorityType":{
          "shape":"CertificateAuthorityType",
          "documentation":"<p>The type of the certificate authority. Currently, this must be <b>SUBORDINATE</b>.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>Alphanumeric string that can be used to distinguish between calls to <b>CreateCertificateAuthority</b>. Idempotency tokens time out after five minutes. Therefore, if you call <b>CreateCertificateAuthority</b> multiple times with the same idempotency token within a five minute period, ACM PCA recognizes that you are requesting only one certificate. As a result, ACM PCA issues only one. If you change the idempotency token for each call, however, ACM PCA recognizes that you are requesting multiple certificates.</p>"
        }
      }
    },
    "CreateCertificateAuthorityResponse":{
      "type":"structure",
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This is of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>"
        }
      }
    },
    "CrlConfiguration":{
      "type":"structure",
      "required":["Enabled"],
      "members":{
        "Enabled":{
          "shape":"Boolean",
          "documentation":"<p>Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You can use this value to enable certificate revocation for a new CA when you call the <a>CreateCertificateAuthority</a> operation or for an existing CA when you call the <a>UpdateCertificateAuthority</a> operation. </p>",
          "box":true
        },
        "ExpirationInDays":{
          "shape":"Integer1To5000",
          "documentation":"<p>Number of days until a certificate expires.</p>",
          "box":true
        },
        "CustomCname":{
          "shape":"String253",
          "documentation":"<p>Name inserted into the certificate <b>CRL Distribution Points</b> extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public.</p>"
        },
        "S3BucketName":{
          "shape":"String3To255",
          "documentation":"<p>Name of the S3 bucket that contains the CRL. If you do not provide a value for the <b>CustomCname</b> argument, the name of your S3 bucket is placed into the <b>CRL Distribution Points</b> extension of the issued certificate. You can change the name of your bucket by calling the <a>UpdateCertificateAuthority</a> operation. You must specify a bucket policy that allows ACM PCA to write the CRL to your bucket.</p>"
        }
      },
      "documentation":"<p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM PCA. </p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included. </p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM PCA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p>"
    },
    "CsrBlob":{
      "type":"blob",
      "max":32768,
      "min":1
    },
    "CsrBody":{"type":"string"},
    "DeleteCertificateAuthorityRequest":{
      "type":"structure",
      "required":["CertificateAuthorityArn"],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must have the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>"
        },
        "PermanentDeletionTimeInDays":{
          "shape":"PermanentDeletionTimeInDays",
          "documentation":"<p>The number of days to make a CA restorable after it has been deleted. This can be anywhere from 7 to 30 days, with 30 being the default.</p>"
        }
      }
    },
    "DescribeCertificateAuthorityAuditReportRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityArn",
        "AuditReportId"
      ],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the private CA. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>"
        },
        "AuditReportId":{
          "shape":"AuditReportId",
          "documentation":"<p>The report ID returned by calling the <a>CreateCertificateAuthorityAuditReport</a> operation.</p>"
        }
      }
    },
    "DescribeCertificateAuthorityAuditReportResponse":{
      "type":"structure",
      "members":{
        "AuditReportStatus":{
          "shape":"AuditReportStatus",
          "documentation":"<p>Specifies whether report creation is in progress, has succeeded, or has failed.</p>"
        },
        "S3BucketName":{
          "shape":"String",
          "documentation":"<p>Name of the S3 bucket that contains the report.</p>"
        },
        "S3Key":{
          "shape":"String",
          "documentation":"<p>S3 <b>key</b> that uniquely identifies the report file in your S3 bucket.</p>"
        },
        "CreatedAt":{
          "shape":"TStamp",
          "documentation":"<p>The date and time at which the report was created.</p>"
        }
      }
    },
    "DescribeCertificateAuthorityRequest":{
      "type":"structure",
      "required":["CertificateAuthorityArn"],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>"
        }
      }
    },
    "DescribeCertificateAuthorityResponse":{
      "type":"structure",
      "members":{
        "CertificateAuthority":{
          "shape":"CertificateAuthority",
          "documentation":"<p>A <a>CertificateAuthority</a> structure that contains information about your private CA.</p>"
        }
      }
    },
    "DistinguishedNameQualifierString":{
      "type":"string",
      "max":64,
      "min":0,
      "pattern":"[a-zA-Z0-9'()+-.?:/= ]*"
    },
    "FailureReason":{
      "type":"string",
      "enum":[
        "REQUEST_TIMED_OUT",
        "UNSUPPORTED_ALGORITHM",
        "OTHER"
      ]
    },
    "GetCertificateAuthorityCertificateRequest":{
      "type":"structure",
      "required":["CertificateAuthorityArn"],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of your private CA. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>"
        }
      }
    },
    "GetCertificateAuthorityCertificateResponse":{
      "type":"structure",
      "members":{
        "Certificate":{
          "shape":"CertificateBody",
          "documentation":"<p>Base64-encoded certificate authority (CA) certificate.</p>"
        },
        "CertificateChain":{
          "shape":"CertificateChain",
          "documentation":"<p>Base64-encoded certificate chain that includes any intermediate certificates and chains up to root on-premises certificate that you used to sign your private CA certificate. The chain does not include your private CA certificate. </p>"
        }
      }
    },
    "GetCertificateAuthorityCsrRequest":{
      "type":"structure",
      "required":["CertificateAuthorityArn"],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called the <a>CreateCertificateAuthority</a> operation. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        }
      }
    },
    "GetCertificateAuthorityCsrResponse":{
      "type":"structure",
      "members":{
        "Csr":{
          "shape":"CsrBody",
          "documentation":"<p>The base64 PEM-encoded certificate signing request (CSR) for your private CA certificate.</p>"
        }
      }
    },
    "GetCertificateRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityArn",
        "CertificateArn"
      ],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>"
        },
        "CertificateArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the issued certificate. The ARN contains the certificate serial number and must be in the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i> </code> </p>"
        }
      }
    },
    "GetCertificateResponse":{
      "type":"structure",
      "members":{
        "Certificate":{
          "shape":"CertificateBody",
          "documentation":"<p>The base64 PEM-encoded certificate specified by the <code>CertificateArn</code> parameter.</p>"
        },
        "CertificateChain":{
          "shape":"CertificateChain",
          "documentation":"<p>The base64 PEM-encoded certificate chain that chains up to the on-premises root CA certificate that you used to sign your private CA certificate. </p>"
        }
      }
    },
    "IdempotencyToken":{
      "type":"string",
      "max":36,
      "min":1,
      "pattern":"[\\u0009\\u000A\\u000D\\u0020-\\u00FF]*"
    },
    "ImportCertificateAuthorityCertificateRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityArn",
        "Certificate",
        "CertificateChain"
      ],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        },
        "Certificate":{
          "shape":"CertificateBodyBlob",
          "documentation":"<p>The PEM-encoded certificate for your private CA. This must be signed by using your on-premises CA.</p>"
        },
        "CertificateChain":{
          "shape":"CertificateChainBlob",
          "documentation":"<p>A PEM-encoded file that contains all of your certificates, other than the certificate you're importing, chaining up to your root CA. Your on-premises root certificate is the last in the chain, and each certificate in the chain signs the one preceding. </p>"
        }
      }
    },
    "Integer1To5000":{
      "type":"integer",
      "max":5000,
      "min":1
    },
    "InvalidArgsException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>One or more of the specified arguments was not valid.</p>",
      "exception":true
    },
    "InvalidArnException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>",
      "exception":true
    },
    "InvalidNextTokenException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The token specified in the <code>NextToken</code> argument is not valid. Use the token returned from your previous call to <a>ListCertificateAuthorities</a>.</p>",
      "exception":true
    },
    "InvalidPolicyException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The S3 bucket policy is not valid. The policy must give ACM PCA rights to read from and write to the bucket and find the bucket location.</p>",
      "exception":true
    },
    "InvalidStateException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The private CA is in a state during which a report cannot be generated.</p>",
      "exception":true
    },
    "InvalidTagException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The tag associated with the CA is not valid. The invalid argument is contained in the message field.</p>",
      "exception":true
    },
    "IssueCertificateRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityArn",
        "Csr",
        "SigningAlgorithm",
        "Validity"
      ],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        },
        "Csr":{
          "shape":"CsrBlob",
          "documentation":"<p>The certificate signing request (CSR) for the certificate you want to issue. You can use the following OpenSSL command to create the CSR and a 2048 bit RSA private key. </p> <p> <code>openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr</code> </p> <p>If you have a configuration file, you can use the following OpenSSL command. The <code>usr_cert</code> block in the configuration file contains your X509 version 3 extensions. </p> <p> <code>openssl req -new -config openssl_rsa.cnf -extensions usr_cert -newkey rsa:2048 -days -365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr</code> </p>"
        },
        "SigningAlgorithm":{
          "shape":"SigningAlgorithm",
          "documentation":"<p>The name of the algorithm that will be used to sign the certificate to be issued.</p>"
        },
        "Validity":{
          "shape":"Validity",
          "documentation":"<p>The type of the validity period.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>Custom string that can be used to distinguish between calls to the <b>IssueCertificate</b> operation. Idempotency tokens time out after one hour. Therefore, if you call <b>IssueCertificate</b> multiple times with the same idempotency token within 5 minutes, ACM PCA recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, PCA recognizes that you are requesting multiple certificates.</p>"
        }
      }
    },
    "IssueCertificateResponse":{
      "type":"structure",
      "members":{
        "CertificateArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the issued certificate and the certificate serial number. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i> </code> </p>"
        }
      }
    },
    "KeyAlgorithm":{
      "type":"string",
      "enum":[
        "RSA_2048",
        "RSA_4096",
        "EC_prime256v1",
        "EC_secp384r1"
      ]
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>An ACM PCA limit has been exceeded. See the exception message returned to determine the limit that was exceeded.</p>",
      "exception":true
    },
    "ListCertificateAuthoritiesRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the <code>NextToken</code> parameter from the response you just received.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code> value in a subsequent request to retrieve additional items.</p>"
        }
      }
    },
    "ListCertificateAuthoritiesResponse":{
      "type":"structure",
      "members":{
        "CertificateAuthorities":{
          "shape":"CertificateAuthorities",
          "documentation":"<p>Summary information about each certificate authority you have created.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>When the list is truncated, this value is present and should be used for the <code>NextToken</code> parameter in a subsequent pagination request.</p>"
        }
      }
    },
    "ListTagsRequest":{
      "type":"structure",
      "required":["CertificateAuthorityArn"],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called the <a>CreateCertificateAuthority</a> operation. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.</p>"
        },
        "MaxResults":{
          "shape":"MaxResults",
          "documentation":"<p>Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <b>NextToken</b> element is sent in the response. Use this <b>NextToken</b> value in a subsequent request to retrieve additional items.</p>"
        }
      }
    },
    "ListTagsResponse":{
      "type":"structure",
      "members":{
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags associated with your private CA.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request. </p>"
        }
      }
    },
    "MalformedCSRException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The certificate signing request is invalid.</p>",
      "exception":true
    },
    "MalformedCertificateException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>One or more fields in the certificate are invalid.</p>",
      "exception":true
    },
    "MaxResults":{
      "type":"integer",
      "max":1000,
      "min":1
    },
    "NextToken":{
      "type":"string",
      "max":500,
      "min":1
    },
    "PermanentDeletionTimeInDays":{
      "type":"integer",
      "max":30,
      "min":7
    },
    "PositiveLong":{
      "type":"long",
      "min":1
    },
    "RequestAlreadyProcessedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>Your request has already been completed.</p>",
      "exception":true
    },
    "RequestFailedException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>The request has failed for an unspecified reason.</p>",
      "exception":true
    },
    "RequestInProgressException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>Your request is already in progress.</p>",
      "exception":true
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>",
      "exception":true
    },
    "RestoreCertificateAuthorityRequest":{
      "type":"structure",
      "required":["CertificateAuthorityArn"],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called the <a>CreateCertificateAuthority</a> operation. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        }
      }
    },
    "RevocationConfiguration":{
      "type":"structure",
      "members":{
        "CrlConfiguration":{
          "shape":"CrlConfiguration",
          "documentation":"<p>Configuration of the certificate revocation list (CRL), if any, maintained by your private CA.</p>"
        }
      },
      "documentation":"<p>Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> operations. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>.</p>"
    },
    "RevocationReason":{
      "type":"string",
      "enum":[
        "UNSPECIFIED",
        "KEY_COMPROMISE",
        "CERTIFICATE_AUTHORITY_COMPROMISE",
        "AFFILIATION_CHANGED",
        "SUPERSEDED",
        "CESSATION_OF_OPERATION",
        "PRIVILEGE_WITHDRAWN",
        "A_A_COMPROMISE"
      ]
    },
    "RevokeCertificateRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityArn",
        "CertificateSerial",
        "RevocationReason"
      ],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        },
        "CertificateSerial":{
          "shape":"String128",
          "documentation":"<p>Serial number of the certificate to be revoked. This must be in hexadecimal format. You can retrieve the serial number by calling <a>GetCertificate</a> with the Amazon Resource Name (ARN) of the certificate you want and the ARN of your private CA. The <b>GetCertificate</b> operation retrieves the certificate in the PEM format. You can use the following OpenSSL command to list the certificate in text format and copy the hexadecimal serial number. </p> <p> <code>openssl x509 -in <i>file_path</i> -text -noout</code> </p> <p>You can also copy the serial number from the console or use the <a href=\"https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html\">DescribeCertificate</a> operation in the <i>AWS Certificate Manager API Reference</i>. </p>"
        },
        "RevocationReason":{
          "shape":"RevocationReason",
          "documentation":"<p>Specifies why you revoked the certificate.</p>"
        }
      }
    },
    "SigningAlgorithm":{
      "type":"string",
      "enum":[
        "SHA256WITHECDSA",
        "SHA384WITHECDSA",
        "SHA512WITHECDSA",
        "SHA256WITHRSA",
        "SHA384WITHRSA",
        "SHA512WITHRSA"
      ]
    },
    "String":{"type":"string"},
    "String128":{
      "type":"string",
      "max":128,
      "min":0
    },
    "String16":{
      "type":"string",
      "max":16,
      "min":0
    },
    "String253":{
      "type":"string",
      "max":253,
      "min":0
    },
    "String3":{
      "type":"string",
      "max":3,
      "min":0
    },
    "String3To255":{
      "type":"string",
      "max":255,
      "min":3
    },
    "String40":{
      "type":"string",
      "max":40,
      "min":0
    },
    "String5":{
      "type":"string",
      "max":5,
      "min":0
    },
    "String64":{
      "type":"string",
      "max":64,
      "min":0
    },
    "TStamp":{"type":"timestamp"},
    "Tag":{
      "type":"structure",
      "required":["Key"],
      "members":{
        "Key":{
          "shape":"TagKey",
          "documentation":"<p>Key (name) of the tag.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>Value of the tag.</p>"
        }
      },
      "documentation":"<p>Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a>TagCertificateAuthority</a> operation. To remove a tag, call the <a>UntagCertificateAuthority</a> operation. </p>"
    },
    "TagCertificateAuthorityRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityArn",
        "Tags"
      ],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>List of tags to be associated with the CA.</p>"
        }
      }
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[\\p{L}\\p{Z}\\p{N}_.:\\/=+\\-@]*"
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":50,
      "min":1
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":0,
      "pattern":"[\\p{L}\\p{Z}\\p{N}_.:\\/=+\\-@]*"
    },
    "TooManyTagsException":{
      "type":"structure",
      "members":{
        "message":{"shape":"String"}
      },
      "documentation":"<p>You can associate up to 50 tags with a private CA. Exception information is contained in the exception message field.</p>",
      "exception":true
    },
    "UntagCertificateAuthorityRequest":{
      "type":"structure",
      "required":[
        "CertificateAuthorityArn",
        "Tags"
      ],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>List of tags to be removed from the CA.</p>"
        }
      }
    },
    "UpdateCertificateAuthorityRequest":{
      "type":"structure",
      "required":["CertificateAuthorityArn"],
      "members":{
        "CertificateAuthorityArn":{
          "shape":"Arn",
          "documentation":"<p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>"
        },
        "RevocationConfiguration":{
          "shape":"RevocationConfiguration",
          "documentation":"<p>Revocation information for your private CA.</p>"
        },
        "Status":{
          "shape":"CertificateAuthorityStatus",
          "documentation":"<p>Status of your private CA.</p>"
        }
      }
    },
    "Validity":{
      "type":"structure",
      "required":[
        "Value",
        "Type"
      ],
      "members":{
        "Value":{
          "shape":"PositiveLong",
          "documentation":"<p>Time period.</p>",
          "box":true
        },
        "Type":{
          "shape":"ValidityPeriodType",
          "documentation":"<p>Specifies whether the <code>Value</code> parameter represents days, months, or years.</p>"
        }
      },
      "documentation":"<p>Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the <a>IssueCertificate</a> operation.</p>"
    },
    "ValidityPeriodType":{
      "type":"string",
      "enum":[
        "END_DATE",
        "ABSOLUTE",
        "DAYS",
        "MONTHS",
        "YEARS"
      ]
    }
  },
  "documentation":"<p>You can use the ACM PCA API to create a private certificate authority (CA). You must first call the <a>CreateCertificateAuthority</a> operation. If successful, the operation returns an Amazon Resource Name (ARN) for your private CA. Use this ARN as input to the <a>GetCertificateAuthorityCsr</a> operation to retrieve the certificate signing request (CSR) for your private CA certificate. Sign the CSR using the root or an intermediate CA in your on-premises PKI hierarchy, and call the <a>ImportCertificateAuthorityCertificate</a> to import your signed private CA certificate into ACM PCA. </p> <p>Use your private CA to issue and revoke certificates. These are private certificates that identify and secure client computers, servers, applications, services, devices, and users over SSLS/TLS connections within your organization. Call the <a>IssueCertificate</a> operation to issue a certificate. Call the <a>RevokeCertificate</a> operation to revoke a certificate. </p> <note> <p>Certificates issued by your private CA can be trusted only within your organization, not publicly.</p> </note> <p>Your private CA can optionally create a certificate revocation list (CRL) to track the certificates you revoke. To create a CRL, you must specify a <a>RevocationConfiguration</a> object when you call the <a>CreateCertificateAuthority</a> operation. ACM PCA writes the CRL to an S3 bucket that you specify. You must specify a bucket policy that grants ACM PCA write permission. </p> <p>You can also call the <a>CreateCertificateAuthorityAuditReport</a> to create an optional audit report that lists every time the CA private key is used. The private key is used for signing when the <b>IssueCertificate</b> or <b>RevokeCertificate</b> operation is called. </p>"
}
