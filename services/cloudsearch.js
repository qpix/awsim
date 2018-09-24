awsim['cloudsearch'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2013-01-01",
    "endpointPrefix":"cloudsearch",
    "serviceFullName":"Amazon CloudSearch",
    "serviceId":"CloudSearch",
    "signatureVersion":"v4",
    "xmlNamespace":"http://cloudsearch.amazonaws.com/doc/2013-01-01/",
    "protocol":"query",
    "uid":"cloudsearch-2013-01-01"
  },
  "documentation":"<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region\" target=\"_blank\">Regions and Endpoints</a>.</p>",
  "operations":{
    "BuildSuggesters":{
      "name":"BuildSuggesters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"BuildSuggestersRequest",
        "documentation":"<p>Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update.</p>"
      },
      "output":{
        "shape":"BuildSuggestersResponse",
        "documentation":"<p>The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.</p>",
        "resultWrapper":"BuildSuggestersResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Indexes the search suggestions. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters\">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "CreateDomain":{
      "name":"CreateDomain",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"CreateDomainRequest",
        "documentation":"<p>Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.</p>"
      },
      "output":{
        "shape":"CreateDomainResponse",
        "documentation":"<p>The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.</p>",
        "resultWrapper":"CreateDomainResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        }
      ],
      "documentation":"<p>Creates a new search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html\" target=\"_blank\">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DefineAnalysisScheme":{
      "name":"DefineAnalysisScheme",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DefineAnalysisSchemeRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration.</p>"
      },
      "output":{
        "shape":"DefineAnalysisSchemeResponse",
        "documentation":"<p>The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.</p>",
        "resultWrapper":"DefineAnalysisSchemeResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DefineExpression":{
      "name":"DefineExpression",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DefineExpressionRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.</p>"
      },
      "output":{
        "shape":"DefineExpressionResponse",
        "documentation":"<p>The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.</p>",
        "resultWrapper":"DefineExpressionResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DefineIndexField":{
      "name":"DefineIndexField",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DefineIndexFieldRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.</p>"
      },
      "output":{
        "shape":"DefineIndexFieldResponse",
        "documentation":"<p>The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.</p>",
        "resultWrapper":"DefineIndexFieldResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html\" target=\"_blank\">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>"
    },
    "DefineSuggester":{
      "name":"DefineSuggester",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DefineSuggesterRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.</p>"
      },
      "output":{
        "shape":"DefineSuggesterResponse",
        "documentation":"<p>The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.</p>",
        "resultWrapper":"DefineSuggesterResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DeleteAnalysisScheme":{
      "name":"DeleteAnalysisScheme",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DeleteAnalysisSchemeRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete. </p>"
      },
      "output":{
        "shape":"DeleteAnalysisSchemeResponse",
        "documentation":"<p>The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.</p>",
        "resultWrapper":"DeleteAnalysisSchemeResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Deletes an analysis scheme. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>"
    },
    "DeleteDomain":{
      "name":"DeleteDomain",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DeleteDomainRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete.</p>"
      },
      "output":{
        "shape":"DeleteDomainResponse",
        "documentation":"<p>The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.</p>",
        "resultWrapper":"DeleteDomainResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        }
      ],
      "documentation":"<p>Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html\" target=\"_blank\">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>"
    },
    "DeleteExpression":{
      "name":"DeleteExpression",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DeleteExpressionRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.</p>"
      },
      "output":{
        "shape":"DeleteExpressionResponse",
        "documentation":"<p>The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.</p>",
        "resultWrapper":"DeleteExpressionResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DeleteIndexField":{
      "name":"DeleteIndexField",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DeleteIndexFieldRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.</p>"
      },
      "output":{
        "shape":"DeleteIndexFieldResponse",
        "documentation":"<p>The result of a <code><a>DeleteIndexField</a></code> request.</p>",
        "resultWrapper":"DeleteIndexFieldResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html\" target=\"_blank\">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DeleteSuggester":{
      "name":"DeleteSuggester",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DeleteSuggesterRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.</p>"
      },
      "output":{
        "shape":"DeleteSuggesterResponse",
        "documentation":"<p>The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.</p>",
        "resultWrapper":"DeleteSuggesterResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Deletes a suggester. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DescribeAnalysisSchemes":{
      "name":"DescribeAnalysisSchemes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DescribeAnalysisSchemesRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. </p>"
      },
      "output":{
        "shape":"DescribeAnalysisSchemesResponse",
        "documentation":"<p>The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.</p>",
        "resultWrapper":"DescribeAnalysisSchemesResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html\" target=\"_blank\">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DescribeAvailabilityOptions":{
      "name":"DescribeAvailabilityOptions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DescribeAvailabilityOptionsRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.</p>"
      },
      "output":{
        "shape":"DescribeAvailabilityOptionsResponse",
        "documentation":"<p>The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. </p>",
        "resultWrapper":"DescribeAvailabilityOptionsResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        },
        {
          "shape":"DisabledOperationException",
          "error":{
            "code":"DisabledAction",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted an operation which is not enabled.</p>"
        }
      ],
      "documentation":"<p>Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DescribeDomains":{
      "name":"DescribeDomains",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DescribeDomainsRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.</p>"
      },
      "output":{
        "shape":"DescribeDomainsResponse",
        "documentation":"<p>The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.</p>",
        "resultWrapper":"DescribeDomainsResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        }
      ],
      "documentation":"<p>Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html\" target=\"_blank\">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DescribeExpressions":{
      "name":"DescribeExpressions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DescribeExpressionsRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>"
      },
      "output":{
        "shape":"DescribeExpressionsResponse",
        "documentation":"<p>The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.</p>",
        "resultWrapper":"DescribeExpressionsResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DescribeIndexFields":{
      "name":"DescribeIndexFields",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DescribeIndexFieldsRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>"
      },
      "output":{
        "shape":"DescribeIndexFieldsResponse",
        "documentation":"<p>The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.</p>",
        "resultWrapper":"DescribeIndexFieldsResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html\" target=\"_blank\">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DescribeScalingParameters":{
      "name":"DescribeScalingParameters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DescribeScalingParametersRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe. </p>"
      },
      "output":{
        "shape":"DescribeScalingParametersResponse",
        "documentation":"<p>The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.</p>",
        "resultWrapper":"DescribeScalingParametersResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html\" target=\"_blank\">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DescribeServiceAccessPolicies":{
      "name":"DescribeServiceAccessPolicies",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DescribeServiceAccessPoliciesRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>"
      },
      "output":{
        "shape":"DescribeServiceAccessPoliciesResponse",
        "documentation":"<p>The result of a <code>DescribeServiceAccessPolicies</code> request.</p>",
        "resultWrapper":"DescribeServiceAccessPoliciesResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html\" target=\"_blank\">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "DescribeSuggesters":{
      "name":"DescribeSuggesters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"DescribeSuggestersRequest",
        "documentation":"<p>Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>"
      },
      "output":{
        "shape":"DescribeSuggestersResponse",
        "documentation":"<p>The result of a <code>DescribeSuggesters</code> request.</p>",
        "resultWrapper":"DescribeSuggestersResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html\" target=\"_blank\">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "IndexDocuments":{
      "name":"IndexDocuments",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"IndexDocumentsRequest",
        "documentation":"<p>Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index.</p>"
      },
      "output":{
        "shape":"IndexDocumentsResponse",
        "documentation":"<p>The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.</p>",
        "resultWrapper":"IndexDocumentsResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        }
      ],
      "documentation":"<p>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.</p>"
    },
    "ListDomainNames":{
      "name":"ListDomainNames",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "output":{
        "shape":"ListDomainNamesResponse",
        "documentation":"<p>The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.</p>",
        "resultWrapper":"ListDomainNamesResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        }
      ],
      "documentation":"<p>Lists all search domains owned by an account.</p>"
    },
    "UpdateAvailabilityOptions":{
      "name":"UpdateAvailabilityOptions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"UpdateAvailabilityOptionsRequest",
        "documentation":"<p>Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.</p>"
      },
      "output":{
        "shape":"UpdateAvailabilityOptionsResponse",
        "documentation":"<p>The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. </p>",
        "resultWrapper":"UpdateAvailabilityOptionsResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        },
        {
          "shape":"DisabledOperationException",
          "error":{
            "code":"DisabledAction",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted an operation which is not enabled.</p>"
        }
      ],
      "documentation":"<p>Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "UpdateScalingParameters":{
      "name":"UpdateScalingParameters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"UpdateScalingParametersRequest",
        "documentation":"<p>Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.</p>"
      },
      "output":{
        "shape":"UpdateScalingParametersResponse",
        "documentation":"<p>The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.</p>",
        "resultWrapper":"UpdateScalingParametersResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        }
      ],
      "documentation":"<p>Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html\" target=\"_blank\">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>"
    },
    "UpdateServiceAccessPolicies":{
      "name":"UpdateServiceAccessPolicies",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{
        "shape":"UpdateServiceAccessPoliciesRequest",
        "documentation":"<p>Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure.</p>"
      },
      "output":{
        "shape":"UpdateServiceAccessPoliciesResponse",
        "documentation":"<p>The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.</p>",
        "resultWrapper":"UpdateServiceAccessPoliciesResult"
      },
      "errors":[
        {
          "shape":"BaseException",
          "exception":true,
          "documentation":"<p>An error occurred while processing the request.</p>"
        },
        {
          "shape":"InternalException",
          "error":{
            "code":"InternalException",
            "httpStatusCode":500
          },
          "exception":true,
          "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
        },
        {
          "shape":"LimitExceededException",
          "error":{
            "code":"LimitExceeded",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
        },
        {
          "shape":"ResourceNotFoundException",
          "error":{
            "code":"ResourceNotFound",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
        },
        {
          "shape":"InvalidTypeException",
          "error":{
            "code":"InvalidType",
            "httpStatusCode":409,
            "senderFault":true
          },
          "exception":true,
          "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
        }
      ],
      "documentation":"<p>Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html\" target=\"_blank\"> Configuring Access for an Amazon CloudSearch Domain</a>.</p>"
    }
  },
  "shapes":{
    "APIVersion":{
      "type":"string",
      "documentation":"<p>The Amazon CloudSearch API version for a domain: 2011-02-01 or 2013-01-01.</p>"
    },
    "ARN":{
      "type":"string",
      "documentation":"<p>The Amazon Resource Name (ARN) of the search domain. See <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html\" target=\"_blank\">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>"
    },
    "AccessPoliciesStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{"shape":"PolicyDocument"},
        "Status":{"shape":"OptionStatus"}
      },
      "documentation":"<p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>"
    },
    "AlgorithmicStemming":{
      "type":"string",
      "enum":[
        "none",
        "minimal",
        "light",
        "full"
      ]
    },
    "AnalysisOptions":{
      "type":"structure",
      "members":{
        "Synonyms":{
          "shape":"String",
          "documentation":"<p>A JSON object that defines synonym groups and aliases. A synonym group is an array of arrays, where each sub-array is a group of terms where each term in the group is considered a synonym of every other term in the group. The aliases value is an object that contains a collection of string:value pairs where the string specifies a term and the array of values specifies each of the aliases for that term. An alias is considered a synonym of the specified term, but the term is not considered a synonym of the alias. For more information about specifying synonyms, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html#synonyms\">Synonyms</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
        },
        "Stopwords":{
          "shape":"String",
          "documentation":"<p>A JSON array of terms to ignore during indexing and searching. For example, <code>[\"a\", \"an\", \"the\", \"of\"]</code>. The stopwords dictionary must explicitly list each word you want to ignore. Wildcards and regular expressions are not supported. </p>"
        },
        "StemmingDictionary":{
          "shape":"String",
          "documentation":"<p>A JSON object that contains a collection of string:value pairs that each map a term to its stem. For example, <code>{\"term1\": \"stem1\", \"term2\": \"stem2\", \"term3\": \"stem3\"}</code>. The stemming dictionary is applied in addition to any algorithmic stemming. This enables you to override the results of the algorithmic stemming to correct specific cases of overstemming or understemming. The maximum size of a stemming dictionary is 500 KB.</p>"
        },
        "JapaneseTokenizationDictionary":{
          "shape":"String",
          "documentation":"<p>A JSON array that contains a collection of terms, tokens, readings and part of speech for Japanese Tokenizaiton. The Japanese tokenization dictionary enables you to override the default tokenization for selected terms. This is only valid for Japanese language fields.</p>"
        },
        "AlgorithmicStemming":{
          "shape":"AlgorithmicStemming",
          "documentation":"<p>The level of algorithmic stemming to perform: <code>none</code>, <code>minimal</code>, <code>light</code>, or <code>full</code>. The available levels vary depending on the language. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/text-processing.html#text-processing-settings\" target=\"_blank\">Language Specific Text Processing Settings</a> in the <i>Amazon CloudSearch Developer Guide</i> </p>"
        }
      },
      "documentation":"<p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>"
    },
    "AnalysisScheme":{
      "type":"structure",
      "required":[
        "AnalysisSchemeName",
        "AnalysisSchemeLanguage"
      ],
      "members":{
        "AnalysisSchemeName":{"shape":"StandardName"},
        "AnalysisSchemeLanguage":{"shape":"AnalysisSchemeLanguage"},
        "AnalysisOptions":{"shape":"AnalysisOptions"}
      },
      "documentation":"<p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>"
    },
    "AnalysisSchemeLanguage":{
      "type":"string",
      "enum":[
        "ar",
        "bg",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "eu",
        "fa",
        "fi",
        "fr",
        "ga",
        "gl",
        "he",
        "hi",
        "hu",
        "hy",
        "id",
        "it",
        "ja",
        "ko",
        "lv",
        "mul",
        "nl",
        "no",
        "pt",
        "ro",
        "ru",
        "sv",
        "th",
        "tr",
        "zh-Hans",
        "zh-Hant"
      ],
      "documentation":"<p>An <a href=\"http://tools.ietf.org/html/rfc4646\" target=\"_blank\">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.</p>"
    },
    "AnalysisSchemeStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{"shape":"AnalysisScheme"},
        "Status":{"shape":"OptionStatus"}
      },
      "documentation":"<p>The status and configuration of an <code>AnalysisScheme</code>.</p>"
    },
    "AnalysisSchemeStatusList":{
      "type":"list",
      "member":{"shape":"AnalysisSchemeStatus"},
      "documentation":"<p>A list of the analysis schemes configured for a domain.</p>"
    },
    "AvailabilityOptionsStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"MultiAZ",
          "documentation":"<p>The availability options configured for the domain.</p>"
        },
        "Status":{"shape":"OptionStatus"}
      },
      "documentation":"<p>The status and configuration of the domain's availability options.</p>"
    },
    "BaseException":{
      "type":"structure",
      "members":{
        "Code":{"shape":"ErrorCode"},
        "Message":{"shape":"ErrorMessage"}
      },
      "exception":true,
      "documentation":"<p>An error occurred while processing the request.</p>"
    },
    "Boolean":{"type":"boolean"},
    "BuildSuggestersRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{"shape":"DomainName"}
      },
      "documentation":"<p>Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update.</p>"
    },
    "BuildSuggestersResponse":{
      "type":"structure",
      "members":{
        "FieldNames":{"shape":"FieldNameList"}
      },
      "documentation":"<p>The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.</p>"
    },
    "CreateDomainRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.</p>"
    },
    "CreateDomainResponse":{
      "type":"structure",
      "members":{
        "DomainStatus":{"shape":"DomainStatus"}
      },
      "documentation":"<p>The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.</p>"
    },
    "DateArrayOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"FieldValue",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceFields":{
          "shape":"FieldNameCommaList",
          "documentation":"<p>A list of source fields to map to the field. </p>"
        },
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        }
      },
      "documentation":"<p>Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>"
    },
    "DateOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"FieldValue",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceField":{"shape":"FieldName"},
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        },
        "SortEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the field can be used to sort the search results.</p>"
        }
      },
      "documentation":"<p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>"
    },
    "DefineAnalysisSchemeRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "AnalysisScheme"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "AnalysisScheme":{"shape":"AnalysisScheme"}
      },
      "documentation":"<p>Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration.</p>"
    },
    "DefineAnalysisSchemeResponse":{
      "type":"structure",
      "required":["AnalysisScheme"],
      "members":{
        "AnalysisScheme":{"shape":"AnalysisSchemeStatus"}
      },
      "documentation":"<p>The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.</p>"
    },
    "DefineExpressionRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "Expression"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "Expression":{"shape":"Expression"}
      },
      "documentation":"<p>Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.</p>"
    },
    "DefineExpressionResponse":{
      "type":"structure",
      "required":["Expression"],
      "members":{
        "Expression":{"shape":"ExpressionStatus"}
      },
      "documentation":"<p>The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.</p>"
    },
    "DefineIndexFieldRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "IndexField"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "IndexField":{
          "shape":"IndexField",
          "documentation":"<p>The index field and field options you want to configure. </p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.</p>"
    },
    "DefineIndexFieldResponse":{
      "type":"structure",
      "required":["IndexField"],
      "members":{
        "IndexField":{"shape":"IndexFieldStatus"}
      },
      "documentation":"<p>The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.</p>"
    },
    "DefineSuggesterRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "Suggester"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "Suggester":{"shape":"Suggester"}
      },
      "documentation":"<p>Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.</p>"
    },
    "DefineSuggesterResponse":{
      "type":"structure",
      "required":["Suggester"],
      "members":{
        "Suggester":{"shape":"SuggesterStatus"}
      },
      "documentation":"<p>The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.</p>"
    },
    "DeleteAnalysisSchemeRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "AnalysisSchemeName"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "AnalysisSchemeName":{
          "shape":"StandardName",
          "documentation":"<p>The name of the analysis scheme you want to delete.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete. </p>"
    },
    "DeleteAnalysisSchemeResponse":{
      "type":"structure",
      "required":["AnalysisScheme"],
      "members":{
        "AnalysisScheme":{
          "shape":"AnalysisSchemeStatus",
          "documentation":"<p>The status of the analysis scheme being deleted.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.</p>"
    },
    "DeleteDomainRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain you want to permanently delete.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete.</p>"
    },
    "DeleteDomainResponse":{
      "type":"structure",
      "members":{
        "DomainStatus":{"shape":"DomainStatus"}
      },
      "documentation":"<p>The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.</p>"
    },
    "DeleteExpressionRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "ExpressionName"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "ExpressionName":{
          "shape":"StandardName",
          "documentation":"<p>The name of the <code><a>Expression</a></code> to delete.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.</p>"
    },
    "DeleteExpressionResponse":{
      "type":"structure",
      "required":["Expression"],
      "members":{
        "Expression":{
          "shape":"ExpressionStatus",
          "documentation":"<p>The status of the expression being deleted.</p>"
        }
      },
      "documentation":"<p>The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.</p>"
    },
    "DeleteIndexFieldRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "IndexFieldName"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "IndexFieldName":{
          "shape":"DynamicFieldName",
          "documentation":"<p>The name of the index field your want to remove from the domain's indexing options.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.</p>"
    },
    "DeleteIndexFieldResponse":{
      "type":"structure",
      "required":["IndexField"],
      "members":{
        "IndexField":{
          "shape":"IndexFieldStatus",
          "documentation":"<p>The status of the index field being deleted.</p>"
        }
      },
      "documentation":"<p>The result of a <code><a>DeleteIndexField</a></code> request.</p>"
    },
    "DeleteSuggesterRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "SuggesterName"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "SuggesterName":{
          "shape":"StandardName",
          "documentation":"<p>Specifies the name of the suggester you want to delete.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.</p>"
    },
    "DeleteSuggesterResponse":{
      "type":"structure",
      "required":["Suggester"],
      "members":{
        "Suggester":{
          "shape":"SuggesterStatus",
          "documentation":"<p>The status of the suggester being deleted.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.</p>"
    },
    "DescribeAnalysisSchemesRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain you want to describe.</p>"
        },
        "AnalysisSchemeNames":{
          "shape":"StandardNameList",
          "documentation":"<p>The analysis schemes you want to describe.</p>"
        },
        "Deployed":{
          "shape":"Boolean",
          "documentation":"<p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. </p>"
    },
    "DescribeAnalysisSchemesResponse":{
      "type":"structure",
      "required":["AnalysisSchemes"],
      "members":{
        "AnalysisSchemes":{
          "shape":"AnalysisSchemeStatusList",
          "documentation":"<p>The analysis scheme descriptions.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.</p>"
    },
    "DescribeAvailabilityOptionsRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain you want to describe.</p>"
        },
        "Deployed":{
          "shape":"Boolean",
          "documentation":"<p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.</p>"
    },
    "DescribeAvailabilityOptionsResponse":{
      "type":"structure",
      "members":{
        "AvailabilityOptions":{
          "shape":"AvailabilityOptionsStatus",
          "documentation":"<p>The availability options configured for the domain. Indicates whether Multi-AZ is enabled for the domain. </p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. </p>"
    },
    "DescribeDomainsRequest":{
      "type":"structure",
      "members":{
        "DomainNames":{
          "shape":"DomainNameList",
          "documentation":"<p>The names of the domains you want to include in the response.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.</p>"
    },
    "DescribeDomainsResponse":{
      "type":"structure",
      "required":["DomainStatusList"],
      "members":{
        "DomainStatusList":{"shape":"DomainStatusList"}
      },
      "documentation":"<p>The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.</p>"
    },
    "DescribeExpressionsRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain you want to describe.</p>"
        },
        "ExpressionNames":{
          "shape":"StandardNameList",
          "documentation":"<p>Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.</p>"
        },
        "Deployed":{
          "shape":"Boolean",
          "documentation":"<p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>"
    },
    "DescribeExpressionsResponse":{
      "type":"structure",
      "required":["Expressions"],
      "members":{
        "Expressions":{
          "shape":"ExpressionStatusList",
          "documentation":"<p>The expressions configured for the domain.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.</p>"
    },
    "DescribeIndexFieldsRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain you want to describe.</p>"
        },
        "FieldNames":{
          "shape":"DynamicFieldNameList",
          "documentation":"<p>A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.</p>"
        },
        "Deployed":{
          "shape":"Boolean",
          "documentation":"<p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>"
    },
    "DescribeIndexFieldsResponse":{
      "type":"structure",
      "required":["IndexFields"],
      "members":{
        "IndexFields":{
          "shape":"IndexFieldStatusList",
          "documentation":"<p>The index fields configured for the domain.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.</p>"
    },
    "DescribeScalingParametersRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{"shape":"DomainName"}
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe. </p>"
    },
    "DescribeScalingParametersResponse":{
      "type":"structure",
      "required":["ScalingParameters"],
      "members":{
        "ScalingParameters":{"shape":"ScalingParametersStatus"}
      },
      "documentation":"<p>The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.</p>"
    },
    "DescribeServiceAccessPoliciesRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain you want to describe.</p>"
        },
        "Deployed":{
          "shape":"Boolean",
          "documentation":"<p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>"
    },
    "DescribeServiceAccessPoliciesResponse":{
      "type":"structure",
      "required":["AccessPolicies"],
      "members":{
        "AccessPolicies":{
          "shape":"AccessPoliciesStatus",
          "documentation":"<p>The access rules configured for the domain specified in the request.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeServiceAccessPolicies</code> request.</p>"
    },
    "DescribeSuggestersRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain you want to describe.</p>"
        },
        "SuggesterNames":{
          "shape":"StandardNameList",
          "documentation":"<p>The suggesters you want to describe.</p>"
        },
        "Deployed":{
          "shape":"Boolean",
          "documentation":"<p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>"
    },
    "DescribeSuggestersResponse":{
      "type":"structure",
      "required":["Suggesters"],
      "members":{
        "Suggesters":{
          "shape":"SuggesterStatusList",
          "documentation":"<p>The suggesters configured for the domain specified in the request.</p>"
        }
      },
      "documentation":"<p>The result of a <code>DescribeSuggesters</code> request.</p>"
    },
    "DisabledOperationException":{
      "type":"structure",
      "members":{
      },
      "error":{
        "code":"DisabledAction",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true,
      "documentation":"<p>The request was rejected because it attempted an operation which is not enabled.</p>"
    },
    "DocumentSuggesterOptions":{
      "type":"structure",
      "required":["SourceField"],
      "members":{
        "SourceField":{
          "shape":"FieldName",
          "documentation":"<p>The name of the index field you want to use for suggestions. </p>"
        },
        "FuzzyMatching":{
          "shape":"SuggesterFuzzyMatching",
          "documentation":"<p>The level of fuzziness allowed when suggesting matches for a string: <code>none</code>, <code>low</code>, or <code>high</code>. With none, the specified string is treated as an exact prefix. With low, suggestions must differ from the specified string by no more than one character. With high, suggestions can differ by up to two characters. The default is none. </p>"
        },
        "SortExpression":{
          "shape":"String",
          "documentation":"<p>An expression that computes a score for each suggestion to control how they are sorted. The scores are rounded to the nearest integer, with a floor of 0 and a ceiling of 2^31-1. A document's relevance score is not computed for suggestions, so sort expressions cannot reference the <code>_score</code> value. To sort suggestions using a numeric field or existing expression, simply specify the name of the field or expression. If no expression is configured for the suggester, the suggestions are sorted with the closest matches listed first.</p>"
        }
      },
      "documentation":"<p>Options for a search suggester.</p>"
    },
    "DomainId":{
      "type":"string",
      "min":1,
      "max":64,
      "documentation":"<p>An internally generated unique identifier for a domain.</p>"
    },
    "DomainName":{
      "type":"string",
      "min":3,
      "max":28,
      "pattern":"[a-z][a-z0-9\\-]+",
      "documentation":"<p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>"
    },
    "DomainNameList":{
      "type":"list",
      "member":{"shape":"DomainName"},
      "documentation":"<p>A list of domain names.</p>"
    },
    "DomainNameMap":{
      "type":"map",
      "key":{"shape":"DomainName"},
      "value":{"shape":"APIVersion"},
      "documentation":"<p>A collection of domain names.</p>"
    },
    "DomainStatus":{
      "type":"structure",
      "required":[
        "DomainId",
        "DomainName",
        "RequiresIndexDocuments"
      ],
      "members":{
        "DomainId":{"shape":"DomainId"},
        "DomainName":{"shape":"DomainName"},
        "ARN":{"shape":"ARN"},
        "Created":{
          "shape":"Boolean",
          "documentation":"<p>True if the search domain is created. It can take several minutes to initialize a domain when <a>CreateDomain</a> is called. Newly created search domains are returned from <a>DescribeDomains</a> with a false value for Created until domain creation is complete.</p>"
        },
        "Deleted":{
          "shape":"Boolean",
          "documentation":"<p>True if the search domain has been deleted. The system must clean up resources dedicated to the search domain when <a>DeleteDomain</a> is called. Newly deleted search domains are returned from <a>DescribeDomains</a> with a true value for IsDeleted for several minutes until resource cleanup is complete.</p>"
        },
        "DocService":{
          "shape":"ServiceEndpoint",
          "documentation":"<p>The service endpoint for updating documents in a search domain.</p>"
        },
        "SearchService":{
          "shape":"ServiceEndpoint",
          "documentation":"<p>The service endpoint for requesting search results from a search domain.</p>"
        },
        "RequiresIndexDocuments":{
          "shape":"Boolean",
          "documentation":"<p>True if <a>IndexDocuments</a> needs to be called to activate the current domain configuration.</p>"
        },
        "Processing":{
          "shape":"Boolean",
          "documentation":"<p>True if processing is being done to activate the current domain configuration.</p>"
        },
        "SearchInstanceType":{
          "shape":"SearchInstanceType",
          "documentation":"<p>The instance type that is being used to process search requests.</p>"
        },
        "SearchPartitionCount":{
          "shape":"PartitionCount",
          "documentation":"<p>The number of partitions across which the search index is spread.</p>"
        },
        "SearchInstanceCount":{
          "shape":"InstanceCount",
          "documentation":"<p>The number of search instances that are available to process search requests.</p>"
        },
        "Limits":{"shape":"Limits"}
      },
      "documentation":"<p>The current status of the search domain.</p>"
    },
    "DomainStatusList":{
      "type":"list",
      "member":{"shape":"DomainStatus"},
      "documentation":"<p>A list that contains the status of each requested domain.</p>"
    },
    "Double":{"type":"double"},
    "DoubleArrayOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"Double",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceFields":{
          "shape":"FieldNameCommaList",
          "documentation":"<p>A list of source fields to map to the field. </p>"
        },
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        }
      },
      "documentation":"<p>Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.</p>"
    },
    "DoubleOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"Double",
          "documentation":"<p>A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.</p>"
        },
        "SourceField":{
          "shape":"FieldName",
          "documentation":"<p>The name of the source field to map to the field. </p>"
        },
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        },
        "SortEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the field can be used to sort the search results.</p>"
        }
      },
      "documentation":"<p>Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>"
    },
    "DynamicFieldName":{
      "type":"string",
      "min":1,
      "max":64,
      "pattern":"([a-z][a-z0-9_]*\\*?|\\*[a-z0-9_]*)"
    },
    "DynamicFieldNameList":{
      "type":"list",
      "member":{"shape":"DynamicFieldName"}
    },
    "ErrorCode":{
      "type":"string",
      "documentation":"<p>A machine-parsable string error or warning code.</p>"
    },
    "ErrorMessage":{
      "type":"string",
      "documentation":"<p>A human-readable string error or warning message.</p>"
    },
    "Expression":{
      "type":"structure",
      "required":[
        "ExpressionName",
        "ExpressionValue"
      ],
      "members":{
        "ExpressionName":{"shape":"StandardName"},
        "ExpressionValue":{"shape":"ExpressionValue"}
      },
      "documentation":"<p>A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. </p>"
    },
    "ExpressionStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{
          "shape":"Expression",
          "documentation":"<p>The expression that is evaluated for sorting while processing a search request.</p>"
        },
        "Status":{"shape":"OptionStatus"}
      },
      "documentation":"<p>The value of an <code>Expression</code> and its current status.</p>"
    },
    "ExpressionStatusList":{
      "type":"list",
      "member":{"shape":"ExpressionStatus"},
      "documentation":"<p>Contains the status of multiple expressions.</p>"
    },
    "ExpressionValue":{
      "type":"string",
      "min":1,
      "max":10240,
      "documentation":"<p>The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html\" target=\"_blank\">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "FieldName":{
      "type":"string",
      "min":1,
      "max":64,
      "pattern":"[a-z][a-z0-9_]*",
      "documentation":"<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>"
    },
    "FieldNameCommaList":{
      "type":"string",
      "pattern":"\\s*[a-z*][a-z0-9_]*\\*?\\s*(,\\s*[a-z*][a-z0-9_]*\\*?\\s*)*"
    },
    "FieldNameList":{
      "type":"list",
      "member":{"shape":"FieldName"},
      "documentation":"<p>A list of field names.</p>"
    },
    "FieldValue":{
      "type":"string",
      "min":0,
      "max":1024,
      "documentation":"<p>The value of a field attribute.</p>"
    },
    "IndexDocumentsRequest":{
      "type":"structure",
      "required":["DomainName"],
      "members":{
        "DomainName":{"shape":"DomainName"}
      },
      "documentation":"<p>Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index.</p>"
    },
    "IndexDocumentsResponse":{
      "type":"structure",
      "members":{
        "FieldNames":{
          "shape":"FieldNameList",
          "documentation":"<p>The names of the fields that are currently being indexed.</p>"
        }
      },
      "documentation":"<p>The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.</p>"
    },
    "IndexField":{
      "type":"structure",
      "required":[
        "IndexFieldName",
        "IndexFieldType"
      ],
      "members":{
        "IndexFieldName":{
          "shape":"DynamicFieldName",
          "documentation":"<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>"
        },
        "IndexFieldType":{"shape":"IndexFieldType"},
        "IntOptions":{"shape":"IntOptions"},
        "DoubleOptions":{"shape":"DoubleOptions"},
        "LiteralOptions":{"shape":"LiteralOptions"},
        "TextOptions":{"shape":"TextOptions"},
        "DateOptions":{"shape":"DateOptions"},
        "LatLonOptions":{"shape":"LatLonOptions"},
        "IntArrayOptions":{"shape":"IntArrayOptions"},
        "DoubleArrayOptions":{"shape":"DoubleArrayOptions"},
        "LiteralArrayOptions":{"shape":"LiteralArrayOptions"},
        "TextArrayOptions":{"shape":"TextArrayOptions"},
        "DateArrayOptions":{"shape":"DateArrayOptions"}
      },
      "documentation":"<p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>"
    },
    "IndexFieldStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{"shape":"IndexField"},
        "Status":{"shape":"OptionStatus"}
      },
      "documentation":"<p>The value of an <code>IndexField</code> and its current status.</p>"
    },
    "IndexFieldStatusList":{
      "type":"list",
      "member":{"shape":"IndexFieldStatus"},
      "documentation":"<p>Contains the status of multiple index fields.</p>"
    },
    "IndexFieldType":{
      "type":"string",
      "enum":[
        "int",
        "double",
        "literal",
        "text",
        "date",
        "latlon",
        "int-array",
        "double-array",
        "literal-array",
        "text-array",
        "date-array"
      ],
      "documentation":"<p>The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html\" target=\"_blank\">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>"
    },
    "InstanceCount":{
      "type":"integer",
      "min":1
    },
    "IntArrayOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"Long",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceFields":{
          "shape":"FieldNameCommaList",
          "documentation":"<p>A list of source fields to map to the field. </p>"
        },
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        }
      },
      "documentation":"<p>Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.</p>"
    },
    "IntOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"Long",
          "documentation":"A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document."
        },
        "SourceField":{
          "shape":"FieldName",
          "documentation":"<p>The name of the source field to map to the field. </p>"
        },
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        },
        "SortEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the field can be used to sort the search results.</p>"
        }
      },
      "documentation":"<p>Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>"
    },
    "InternalException":{
      "type":"structure",
      "members":{
      },
      "error":{
        "code":"InternalException",
        "httpStatusCode":500
      },
      "exception":true,
      "documentation":"<p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href=\"http://status.aws.amazon.com/\" target=\"_blank\">Service Health Dashboard</a>.</p>"
    },
    "InvalidTypeException":{
      "type":"structure",
      "members":{
      },
      "error":{
        "code":"InvalidType",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true,
      "documentation":"<p>The request was rejected because it specified an invalid type definition.</p>"
    },
    "LatLonOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"FieldValue",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceField":{"shape":"FieldName"},
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        },
        "SortEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the field can be used to sort the search results.</p>"
        }
      },
      "documentation":"<p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>"
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
      },
      "error":{
        "code":"LimitExceeded",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true,
      "documentation":"<p>The request was rejected because a resource limit has already been met.</p>"
    },
    "Limits":{
      "type":"structure",
      "required":[
        "MaximumReplicationCount",
        "MaximumPartitionCount"
      ],
      "members":{
        "MaximumReplicationCount":{"shape":"MaximumReplicationCount"},
        "MaximumPartitionCount":{"shape":"MaximumPartitionCount"}
      }
    },
    "ListDomainNamesResponse":{
      "type":"structure",
      "members":{
        "DomainNames":{
          "shape":"DomainNameMap",
          "documentation":"<p>The names of the search domains owned by an account.</p>"
        }
      },
      "documentation":"<p>The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.</p>"
    },
    "LiteralArrayOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"FieldValue",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceFields":{
          "shape":"FieldNameCommaList",
          "documentation":"<p>A list of source fields to map to the field. </p>"
        },
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        }
      },
      "documentation":"<p>Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>"
    },
    "LiteralOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"FieldValue",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceField":{"shape":"FieldName"},
        "FacetEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether facet information can be returned for the field.</p>"
        },
        "SearchEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field are searchable.</p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        },
        "SortEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the field can be used to sort the search results.</p>"
        }
      },
      "documentation":"<p>Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>"
    },
    "Long":{"type":"long"},
    "MaximumPartitionCount":{
      "type":"integer",
      "min":1
    },
    "MaximumReplicationCount":{
      "type":"integer",
      "min":1
    },
    "MultiAZ":{"type":"boolean"},
    "OptionState":{
      "type":"string",
      "enum":[
        "RequiresIndexDocuments",
        "Processing",
        "Active",
        "FailedToValidate"
      ],
      "documentation":"<p>The state of processing a change to an option. One of:</p> <ul> <li>RequiresIndexDocuments: The option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li>Processing: The option's latest value is in the process of being activated.</li> <li>Active: The option's latest value is fully deployed. </li> <li>FailedToValidate: The option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul>"
    },
    "OptionStatus":{
      "type":"structure",
      "required":[
        "CreationDate",
        "UpdateDate",
        "State"
      ],
      "members":{
        "CreationDate":{
          "shape":"UpdateTimestamp",
          "documentation":"<p>A timestamp for when this option was created.</p>"
        },
        "UpdateDate":{
          "shape":"UpdateTimestamp",
          "documentation":"<p>A timestamp for when this option was last updated.</p>"
        },
        "UpdateVersion":{
          "shape":"UIntValue",
          "documentation":"<p>A unique integer that indicates when this option was last updated.</p>"
        },
        "State":{
          "shape":"OptionState",
          "documentation":"<p>The state of processing a change to an option. Possible values:</p> <ul> <li> <code>RequiresIndexDocuments</code>: the option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li> <code>Processing</code>: the option's latest value is in the process of being activated. </li> <li> <code>Active</code>: the option's latest value is completely deployed.</li> <li> <code>FailedToValidate</code>: the option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul>"
        },
        "PendingDeletion":{
          "shape":"Boolean",
          "documentation":"<p>Indicates that the option will be deleted once processing is complete.</p>"
        }
      },
      "documentation":"<p>The status of domain configuration option.</p>"
    },
    "PartitionCount":{
      "type":"integer",
      "min":1,
      "documentation":"<p>The number of partitions used to hold the domain's index.</p>"
    },
    "PartitionInstanceType":{
      "type":"string",
      "enum":[
        "search.m1.small",
        "search.m1.large",
        "search.m2.xlarge",
        "search.m2.2xlarge",
        "search.m3.medium",
        "search.m3.large",
        "search.m3.xlarge",
        "search.m3.2xlarge"
      ],
      "documentation":"<p>The instance type (such as <code>search.m1.small</code>) on which an index partition is hosted.</p>"
    },
    "PolicyDocument":{
      "type":"string",
      "documentation":"<p>Access rules for a domain's document or search service endpoints. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html\" target=\"_blank\">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.</p>"
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
      },
      "error":{
        "code":"ResourceNotFound",
        "httpStatusCode":409,
        "senderFault":true
      },
      "exception":true,
      "documentation":"<p>The request was rejected because it attempted to reference a resource that does not exist.</p>"
    },
    "ScalingParameters":{
      "type":"structure",
      "members":{
        "DesiredInstanceType":{
          "shape":"PartitionInstanceType",
          "documentation":"<p>The instance type that you want to preconfigure for your domain. For example, <code>search.m1.small</code>.</p>"
        },
        "DesiredReplicationCount":{
          "shape":"UIntValue",
          "documentation":"<p>The number of replicas you want to preconfigure for each index partition.</p>"
        },
        "DesiredPartitionCount":{
          "shape":"UIntValue",
          "documentation":"<p>The number of partitions you want to preconfigure for your domain. Only valid when you select <code>m2.2xlarge</code> as the desired instance type.</p>"
        }
      },
      "documentation":"<p>The desired instance type and desired number of replicas of each index partition.</p>"
    },
    "ScalingParametersStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{"shape":"ScalingParameters"},
        "Status":{"shape":"OptionStatus"}
      },
      "documentation":"<p>The status and configuration of a search domain's scaling parameters. </p>"
    },
    "SearchInstanceType":{
      "type":"string",
      "documentation":"<p>The instance type (such as <code>search.m1.small</code>) that is being used to process search requests.</p>"
    },
    "ServiceEndpoint":{
      "type":"structure",
      "members":{
        "Endpoint":{"shape":"ServiceUrl"}
      },
      "documentation":"<p>The endpoint to which service requests can be submitted.</p>"
    },
    "ServiceUrl":{
      "type":"string",
      "documentation":"<p>The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>.</p>"
    },
    "StandardName":{
      "type":"string",
      "min":1,
      "max":64,
      "pattern":"[a-z][a-z0-9_]*",
      "documentation":"<p>Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).</p>"
    },
    "StandardNameList":{
      "type":"list",
      "member":{"shape":"StandardName"}
    },
    "String":{"type":"string"},
    "Suggester":{
      "type":"structure",
      "required":[
        "SuggesterName",
        "DocumentSuggesterOptions"
      ],
      "members":{
        "SuggesterName":{"shape":"StandardName"},
        "DocumentSuggesterOptions":{"shape":"DocumentSuggesterOptions"}
      },
      "documentation":"<p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>"
    },
    "SuggesterFuzzyMatching":{
      "type":"string",
      "enum":[
        "none",
        "low",
        "high"
      ]
    },
    "SuggesterStatus":{
      "type":"structure",
      "required":[
        "Options",
        "Status"
      ],
      "members":{
        "Options":{"shape":"Suggester"},
        "Status":{"shape":"OptionStatus"}
      },
      "documentation":"<p>The value of a <code>Suggester</code> and its current status.</p>"
    },
    "SuggesterStatusList":{
      "type":"list",
      "member":{"shape":"SuggesterStatus"},
      "documentation":"<p>Contains the status of multiple suggesters.</p>"
    },
    "TextArrayOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"FieldValue",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceFields":{
          "shape":"FieldNameCommaList",
          "documentation":"<p>A list of source fields to map to the field. </p>"
        },
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        },
        "HighlightEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether highlights can be returned for the field.</p>"
        },
        "AnalysisScheme":{
          "shape":"Word",
          "documentation":"<p>The name of an analysis scheme for a <code>text-array</code> field.</p>"
        }
      },
      "documentation":"<p>Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>"
    },
    "TextOptions":{
      "type":"structure",
      "members":{
        "DefaultValue":{
          "shape":"FieldValue",
          "documentation":"A value to use for the field if the field isn't specified for a document."
        },
        "SourceField":{"shape":"FieldName"},
        "ReturnEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the contents of the field can be returned in the search results.</p>"
        },
        "SortEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether the field can be used to sort the search results.</p>"
        },
        "HighlightEnabled":{
          "shape":"Boolean",
          "documentation":"<p>Whether highlights can be returned for the field.</p>"
        },
        "AnalysisScheme":{
          "shape":"Word",
          "documentation":"<p>The name of an analysis scheme for a <code>text</code> field.</p>"
        }
      },
      "documentation":"<p>Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>"
    },
    "UIntValue":{
      "type":"integer",
      "min":0
    },
    "UpdateAvailabilityOptionsRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "MultiAZ"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "MultiAZ":{
          "shape":"Boolean",
          "documentation":"<p>You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. </p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.</p>"
    },
    "UpdateAvailabilityOptionsResponse":{
      "type":"structure",
      "members":{
        "AvailabilityOptions":{
          "shape":"AvailabilityOptionsStatus",
          "documentation":"<p>The newly-configured availability options. Indicates whether Multi-AZ is enabled for the domain. </p>"
        }
      },
      "documentation":"<p>The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. </p>"
    },
    "UpdateScalingParametersRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "ScalingParameters"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "ScalingParameters":{"shape":"ScalingParameters"}
      },
      "documentation":"<p>Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.</p>"
    },
    "UpdateScalingParametersResponse":{
      "type":"structure",
      "required":["ScalingParameters"],
      "members":{
        "ScalingParameters":{"shape":"ScalingParametersStatus"}
      },
      "documentation":"<p>The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.</p>"
    },
    "UpdateServiceAccessPoliciesRequest":{
      "type":"structure",
      "required":[
        "DomainName",
        "AccessPolicies"
      ],
      "members":{
        "DomainName":{"shape":"DomainName"},
        "AccessPolicies":{
          "shape":"PolicyDocument",
          "documentation":"<p>The access rules you want to configure. These rules replace any existing rules. </p>"
        }
      },
      "documentation":"<p>Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure.</p>"
    },
    "UpdateServiceAccessPoliciesResponse":{
      "type":"structure",
      "required":["AccessPolicies"],
      "members":{
        "AccessPolicies":{
          "shape":"AccessPoliciesStatus",
          "documentation":"<p>The access rules configured for the domain.</p>"
        }
      },
      "documentation":"<p>The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.</p>"
    },
    "UpdateTimestamp":{"type":"timestamp"},
    "Word":{
      "type":"string",
      "pattern":"[\\S]+"
    }
  }
}
