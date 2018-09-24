awsim['servicecatalog'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-12-10",
    "endpointPrefix":"servicecatalog",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Service Catalog",
    "serviceId":"Service Catalog",
    "signatureVersion":"v4",
    "targetPrefix":"AWS242ServiceCatalogService",
    "uid":"servicecatalog-2015-12-10"
  },
  "operations":{
    "AcceptPortfolioShare":{
      "name":"AcceptPortfolioShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AcceptPortfolioShareInput"},
      "output":{"shape":"AcceptPortfolioShareOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Accepts an offer to share the specified portfolio.</p>"
    },
    "AssociatePrincipalWithPortfolio":{
      "name":"AssociatePrincipalWithPortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociatePrincipalWithPortfolioInput"},
      "output":{"shape":"AssociatePrincipalWithPortfolioOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Associates the specified principal ARN with the specified portfolio.</p>"
    },
    "AssociateProductWithPortfolio":{
      "name":"AssociateProductWithPortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateProductWithPortfolioInput"},
      "output":{"shape":"AssociateProductWithPortfolioOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Associates the specified product with the specified portfolio.</p>"
    },
    "AssociateTagOptionWithResource":{
      "name":"AssociateTagOptionWithResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateTagOptionWithResourceInput"},
      "output":{"shape":"AssociateTagOptionWithResourceOutput"},
      "errors":[
        {"shape":"TagOptionNotMigratedException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"},
        {"shape":"LimitExceededException"},
        {"shape":"DuplicateResourceException"},
        {"shape":"InvalidStateException"}
      ],
      "documentation":"<p>Associate the specified TagOption with the specified portfolio or product.</p>"
    },
    "CopyProduct":{
      "name":"CopyProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CopyProductInput"},
      "output":{"shape":"CopyProductOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same region or another region.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>"
    },
    "CreateConstraint":{
      "name":"CreateConstraint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateConstraintInput"},
      "output":{"shape":"CreateConstraintOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"},
        {"shape":"LimitExceededException"},
        {"shape":"DuplicateResourceException"}
      ],
      "documentation":"<p>Creates a constraint.</p>"
    },
    "CreatePortfolio":{
      "name":"CreatePortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePortfolioInput"},
      "output":{"shape":"CreatePortfolioOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"LimitExceededException"},
        {"shape":"TagOptionNotMigratedException"}
      ],
      "documentation":"<p>Creates a portfolio.</p>"
    },
    "CreatePortfolioShare":{
      "name":"CreatePortfolioShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePortfolioShareInput"},
      "output":{"shape":"CreatePortfolioShareOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Shares the specified portfolio with the specified account.</p>"
    },
    "CreateProduct":{
      "name":"CreateProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateProductInput"},
      "output":{"shape":"CreateProductOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"LimitExceededException"},
        {"shape":"TagOptionNotMigratedException"}
      ],
      "documentation":"<p>Creates a product.</p>"
    },
    "CreateProvisionedProductPlan":{
      "name":"CreateProvisionedProductPlan",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateProvisionedProductPlanInput"},
      "output":{"shape":"CreateProvisionedProductPlanOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidStateException"}
      ],
      "documentation":"<p>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>"
    },
    "CreateProvisioningArtifact":{
      "name":"CreateProvisioningArtifact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateProvisioningArtifactInput"},
      "output":{"shape":"CreateProvisioningArtifactOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p>"
    },
    "CreateTagOption":{
      "name":"CreateTagOption",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTagOptionInput"},
      "output":{"shape":"CreateTagOptionOutput"},
      "errors":[
        {"shape":"TagOptionNotMigratedException"},
        {"shape":"DuplicateResourceException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates a TagOption.</p>"
    },
    "DeleteConstraint":{
      "name":"DeleteConstraint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteConstraintInput"},
      "output":{"shape":"DeleteConstraintOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Deletes the specified constraint.</p>"
    },
    "DeletePortfolio":{
      "name":"DeletePortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeletePortfolioInput"},
      "output":{"shape":"DeletePortfolioOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceInUseException"},
        {"shape":"TagOptionNotMigratedException"}
      ],
      "documentation":"<p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p>"
    },
    "DeletePortfolioShare":{
      "name":"DeletePortfolioShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeletePortfolioShareInput"},
      "output":{"shape":"DeletePortfolioShareOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Stops sharing the specified portfolio with the specified account.</p>"
    },
    "DeleteProduct":{
      "name":"DeleteProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteProductInput"},
      "output":{"shape":"DeleteProductOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceInUseException"},
        {"shape":"InvalidParametersException"},
        {"shape":"TagOptionNotMigratedException"}
      ],
      "documentation":"<p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p>"
    },
    "DeleteProvisionedProductPlan":{
      "name":"DeleteProvisionedProductPlan",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteProvisionedProductPlanInput"},
      "output":{"shape":"DeleteProvisionedProductPlanOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Deletes the specified plan.</p>"
    },
    "DeleteProvisioningArtifact":{
      "name":"DeleteProvisioningArtifact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteProvisioningArtifactInput"},
      "output":{"shape":"DeleteProvisioningArtifactOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceInUseException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>"
    },
    "DeleteTagOption":{
      "name":"DeleteTagOption",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTagOptionInput"},
      "output":{"shape":"DeleteTagOptionOutput"},
      "errors":[
        {"shape":"TagOptionNotMigratedException"},
        {"shape":"ResourceInUseException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>"
    },
    "DescribeConstraint":{
      "name":"DescribeConstraint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConstraintInput"},
      "output":{"shape":"DescribeConstraintOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the specified constraint.</p>"
    },
    "DescribeCopyProductStatus":{
      "name":"DescribeCopyProductStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeCopyProductStatusInput"},
      "output":{"shape":"DescribeCopyProductStatusOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets the status of the specified copy product operation.</p>"
    },
    "DescribePortfolio":{
      "name":"DescribePortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribePortfolioInput"},
      "output":{"shape":"DescribePortfolioOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the specified portfolio.</p>"
    },
    "DescribeProduct":{
      "name":"DescribeProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeProductInput"},
      "output":{"shape":"DescribeProductOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Gets information about the specified product.</p>"
    },
    "DescribeProductAsAdmin":{
      "name":"DescribeProductAsAdmin",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeProductAsAdminInput"},
      "output":{"shape":"DescribeProductAsAdminOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the specified product. This operation is run with administrator access.</p>"
    },
    "DescribeProductView":{
      "name":"DescribeProductView",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeProductViewInput"},
      "output":{"shape":"DescribeProductViewOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Gets information about the specified product.</p>"
    },
    "DescribeProvisionedProduct":{
      "name":"DescribeProvisionedProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeProvisionedProductInput"},
      "output":{"shape":"DescribeProvisionedProductOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the specified provisioned product.</p>"
    },
    "DescribeProvisionedProductPlan":{
      "name":"DescribeProvisionedProductPlan",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeProvisionedProductPlanInput"},
      "output":{"shape":"DescribeProvisionedProductPlanOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Gets information about the resource changes for the specified plan.</p>"
    },
    "DescribeProvisioningArtifact":{
      "name":"DescribeProvisioningArtifact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeProvisioningArtifactInput"},
      "output":{"shape":"DescribeProvisioningArtifactOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the specified provisioning artifact (also known as a version) for the specified product.</p>"
    },
    "DescribeProvisioningParameters":{
      "name":"DescribeProvisioningParameters",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeProvisioningParametersInput"},
      "output":{"shape":"DescribeProvisioningParametersOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error \"Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>\". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>"
    },
    "DescribeRecord":{
      "name":"DescribeRecord",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeRecordInput"},
      "output":{"shape":"DescribeRecordOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p>"
    },
    "DescribeTagOption":{
      "name":"DescribeTagOption",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTagOptionInput"},
      "output":{"shape":"DescribeTagOptionOutput"},
      "errors":[
        {"shape":"TagOptionNotMigratedException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Gets information about the specified TagOption.</p>"
    },
    "DisassociatePrincipalFromPortfolio":{
      "name":"DisassociatePrincipalFromPortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociatePrincipalFromPortfolioInput"},
      "output":{"shape":"DisassociatePrincipalFromPortfolioOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Disassociates a previously associated principal ARN from a specified portfolio.</p>"
    },
    "DisassociateProductFromPortfolio":{
      "name":"DisassociateProductFromPortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateProductFromPortfolioInput"},
      "output":{"shape":"DisassociateProductFromPortfolioOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"ResourceInUseException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Disassociates the specified product from the specified portfolio. </p>"
    },
    "DisassociateTagOptionFromResource":{
      "name":"DisassociateTagOptionFromResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateTagOptionFromResourceInput"},
      "output":{"shape":"DisassociateTagOptionFromResourceOutput"},
      "errors":[
        {"shape":"TagOptionNotMigratedException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Disassociates the specified TagOption from the specified resource.</p>"
    },
    "ExecuteProvisionedProductPlan":{
      "name":"ExecuteProvisionedProductPlan",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ExecuteProvisionedProductPlanInput"},
      "output":{"shape":"ExecuteProvisionedProductPlanOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidStateException"}
      ],
      "documentation":"<p>Provisions or modifies a product based on the resource changes for the specified plan.</p>"
    },
    "ListAcceptedPortfolioShares":{
      "name":"ListAcceptedPortfolioShares",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAcceptedPortfolioSharesInput"},
      "output":{"shape":"ListAcceptedPortfolioSharesOutput"},
      "errors":[
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists all portfolios for which sharing was accepted by this account.</p>"
    },
    "ListConstraintsForPortfolio":{
      "name":"ListConstraintsForPortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListConstraintsForPortfolioInput"},
      "output":{"shape":"ListConstraintsForPortfolioOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists the constraints for the specified portfolio and product.</p>"
    },
    "ListLaunchPaths":{
      "name":"ListLaunchPaths",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListLaunchPathsInput"},
      "output":{"shape":"ListLaunchPathsOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.</p>"
    },
    "ListPortfolioAccess":{
      "name":"ListPortfolioAccess",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPortfolioAccessInput"},
      "output":{"shape":"ListPortfolioAccessOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists the account IDs that have access to the specified portfolio.</p>"
    },
    "ListPortfolios":{
      "name":"ListPortfolios",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPortfoliosInput"},
      "output":{"shape":"ListPortfoliosOutput"},
      "errors":[
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists all portfolios in the catalog.</p>"
    },
    "ListPortfoliosForProduct":{
      "name":"ListPortfoliosForProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPortfoliosForProductInput"},
      "output":{"shape":"ListPortfoliosForProductOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Lists all portfolios that the specified product is associated with.</p>"
    },
    "ListPrincipalsForPortfolio":{
      "name":"ListPrincipalsForPortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPrincipalsForPortfolioInput"},
      "output":{"shape":"ListPrincipalsForPortfolioOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists all principal ARNs associated with the specified portfolio.</p>"
    },
    "ListProvisionedProductPlans":{
      "name":"ListProvisionedProductPlans",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListProvisionedProductPlansInput"},
      "output":{"shape":"ListProvisionedProductPlansOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>"
    },
    "ListProvisioningArtifacts":{
      "name":"ListProvisioningArtifacts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListProvisioningArtifactsInput"},
      "output":{"shape":"ListProvisioningArtifactsOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists all provisioning artifacts (also known as versions) for the specified product.</p>"
    },
    "ListRecordHistory":{
      "name":"ListRecordHistory",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListRecordHistoryInput"},
      "output":{"shape":"ListRecordHistoryOutput"},
      "errors":[
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists the specified requests or all performed requests.</p>"
    },
    "ListResourcesForTagOption":{
      "name":"ListResourcesForTagOption",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListResourcesForTagOptionInput"},
      "output":{"shape":"ListResourcesForTagOptionOutput"},
      "errors":[
        {"shape":"TagOptionNotMigratedException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists the resources associated with the specified TagOption.</p>"
    },
    "ListTagOptions":{
      "name":"ListTagOptions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagOptionsInput"},
      "output":{"shape":"ListTagOptionsOutput"},
      "errors":[
        {"shape":"TagOptionNotMigratedException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists the specified TagOptions or all TagOptions.</p>"
    },
    "ProvisionProduct":{
      "name":"ProvisionProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ProvisionProductInput"},
      "output":{"shape":"ProvisionProductOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"DuplicateResourceException"}
      ],
      "documentation":"<p>Provisions the specified product.</p> <p>A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>.</p> <p>If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error \"Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>\".</p>"
    },
    "RejectPortfolioShare":{
      "name":"RejectPortfolioShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RejectPortfolioShareInput"},
      "output":{"shape":"RejectPortfolioShareOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Rejects an offer to share the specified portfolio.</p>"
    },
    "ScanProvisionedProducts":{
      "name":"ScanProvisionedProducts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ScanProvisionedProductsInput"},
      "output":{"shape":"ScanProvisionedProductsOutput"},
      "errors":[
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>"
    },
    "SearchProducts":{
      "name":"SearchProducts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchProductsInput"},
      "output":{"shape":"SearchProductsOutput"},
      "errors":[
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Gets information about the products to which the caller has access.</p>"
    },
    "SearchProductsAsAdmin":{
      "name":"SearchProductsAsAdmin",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchProductsAsAdminInput"},
      "output":{"shape":"SearchProductsAsAdminOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Gets information about the products for the specified portfolio or all products.</p>"
    },
    "SearchProvisionedProducts":{
      "name":"SearchProvisionedProducts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchProvisionedProductsInput"},
      "output":{"shape":"SearchProvisionedProductsOutput"},
      "errors":[
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Gets information about the provisioned products that meet the specified criteria.</p>"
    },
    "TerminateProvisionedProduct":{
      "name":"TerminateProvisionedProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TerminateProvisionedProductInput"},
      "output":{"shape":"TerminateProvisionedProductOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>"
    },
    "UpdateConstraint":{
      "name":"UpdateConstraint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateConstraintInput"},
      "output":{"shape":"UpdateConstraintOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Updates the specified constraint.</p>"
    },
    "UpdatePortfolio":{
      "name":"UpdatePortfolio",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdatePortfolioInput"},
      "output":{"shape":"UpdatePortfolioOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"LimitExceededException"},
        {"shape":"TagOptionNotMigratedException"}
      ],
      "documentation":"<p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>"
    },
    "UpdateProduct":{
      "name":"UpdateProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateProductInput"},
      "output":{"shape":"UpdateProductOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"},
        {"shape":"TagOptionNotMigratedException"}
      ],
      "documentation":"<p>Updates the specified product.</p>"
    },
    "UpdateProvisionedProduct":{
      "name":"UpdateProvisionedProduct",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateProvisionedProductInput"},
      "output":{"shape":"UpdateProvisionedProductOutput"},
      "errors":[
        {"shape":"InvalidParametersException"},
        {"shape":"ResourceNotFoundException"}
      ],
      "documentation":"<p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>"
    },
    "UpdateProvisioningArtifact":{
      "name":"UpdateProvisioningArtifact",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateProvisioningArtifactInput"},
      "output":{"shape":"UpdateProvisioningArtifactOutput"},
      "errors":[
        {"shape":"ResourceNotFoundException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>"
    },
    "UpdateTagOption":{
      "name":"UpdateTagOption",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateTagOptionInput"},
      "output":{"shape":"UpdateTagOptionOutput"},
      "errors":[
        {"shape":"TagOptionNotMigratedException"},
        {"shape":"ResourceNotFoundException"},
        {"shape":"DuplicateResourceException"},
        {"shape":"InvalidParametersException"}
      ],
      "documentation":"<p>Updates the specified TagOption.</p>"
    }
  },
  "shapes":{
    "AcceptLanguage":{"type":"string"},
    "AcceptPortfolioShareInput":{
      "type":"structure",
      "required":["PortfolioId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        }
      }
    },
    "AcceptPortfolioShareOutput":{
      "type":"structure",
      "members":{
      }
    },
    "AccessLevelFilter":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"AccessLevelFilterKey",
          "documentation":"<p>The access level.</p> <ul> <li> <p> <code>Account</code> - Filter results based on the account.</p> </li> <li> <p> <code>Role</code> - Filter results based on the federated role of the specified user.</p> </li> <li> <p> <code>User</code> - Filter results based on the specified user.</p> </li> </ul>"
        },
        "Value":{
          "shape":"AccessLevelFilterValue",
          "documentation":"<p>The user to which the access level applies. The only supported value is <code>Self</code>.</p>"
        }
      },
      "documentation":"<p>The access level to use to filter results.</p>"
    },
    "AccessLevelFilterKey":{
      "type":"string",
      "enum":[
        "Account",
        "Role",
        "User"
      ]
    },
    "AccessLevelFilterValue":{"type":"string"},
    "AccountId":{
      "type":"string",
      "pattern":"^[0-9]{12}$"
    },
    "AccountIds":{
      "type":"list",
      "member":{"shape":"AccountId"}
    },
    "AddTags":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":20
    },
    "AllowedValue":{"type":"string"},
    "AllowedValues":{
      "type":"list",
      "member":{"shape":"AllowedValue"}
    },
    "ApproximateCount":{"type":"integer"},
    "AssociatePrincipalWithPortfolioInput":{
      "type":"structure",
      "required":[
        "PortfolioId",
        "PrincipalARN",
        "PrincipalType"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "PrincipalARN":{
          "shape":"PrincipalARN",
          "documentation":"<p>The ARN of the principal (IAM user, role, or group).</p>"
        },
        "PrincipalType":{
          "shape":"PrincipalType",
          "documentation":"<p>The principal type. The supported value is <code>IAM</code>.</p>"
        }
      }
    },
    "AssociatePrincipalWithPortfolioOutput":{
      "type":"structure",
      "members":{
      }
    },
    "AssociateProductWithPortfolioInput":{
      "type":"structure",
      "required":[
        "ProductId",
        "PortfolioId"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "SourcePortfolioId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the source portfolio.</p>"
        }
      }
    },
    "AssociateProductWithPortfolioOutput":{
      "type":"structure",
      "members":{
      }
    },
    "AssociateTagOptionWithResourceInput":{
      "type":"structure",
      "required":[
        "ResourceId",
        "TagOptionId"
      ],
      "members":{
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The resource identifier.</p>"
        },
        "TagOptionId":{
          "shape":"TagOptionId",
          "documentation":"<p>The TagOption identifier.</p>"
        }
      }
    },
    "AssociateTagOptionWithResourceOutput":{
      "type":"structure",
      "members":{
      }
    },
    "AttributeValue":{"type":"string"},
    "CausingEntity":{"type":"string"},
    "ChangeAction":{
      "type":"string",
      "enum":[
        "ADD",
        "MODIFY",
        "REMOVE"
      ]
    },
    "CloudWatchDashboard":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"CloudWatchDashboardName",
          "documentation":"<p>The name of the CloudWatch dashboard.</p>"
        }
      },
      "documentation":"<p>Information about a CloudWatch dashboard.</p>"
    },
    "CloudWatchDashboardName":{"type":"string"},
    "CloudWatchDashboards":{
      "type":"list",
      "member":{"shape":"CloudWatchDashboard"}
    },
    "ConstraintDescription":{
      "type":"string",
      "max":2000
    },
    "ConstraintDetail":{
      "type":"structure",
      "members":{
        "ConstraintId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the constraint.</p>"
        },
        "Type":{
          "shape":"ConstraintType",
          "documentation":"<p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>"
        },
        "Description":{
          "shape":"ConstraintDescription",
          "documentation":"<p>The description of the constraint.</p>"
        },
        "Owner":{
          "shape":"AccountId",
          "documentation":"<p>The owner of the constraint.</p>"
        }
      },
      "documentation":"<p>Information about a constraint.</p>"
    },
    "ConstraintDetails":{
      "type":"list",
      "member":{"shape":"ConstraintDetail"}
    },
    "ConstraintParameters":{"type":"string"},
    "ConstraintSummaries":{
      "type":"list",
      "member":{"shape":"ConstraintSummary"}
    },
    "ConstraintSummary":{
      "type":"structure",
      "members":{
        "Type":{
          "shape":"ConstraintType",
          "documentation":"<p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>"
        },
        "Description":{
          "shape":"ConstraintDescription",
          "documentation":"<p>The description of the constraint.</p>"
        }
      },
      "documentation":"<p>Summary information about a constraint.</p>"
    },
    "ConstraintType":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "CopyOption":{
      "type":"string",
      "enum":["CopyTags"]
    },
    "CopyOptions":{
      "type":"list",
      "member":{"shape":"CopyOption"}
    },
    "CopyProductInput":{
      "type":"structure",
      "required":[
        "SourceProductArn",
        "IdempotencyToken"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "SourceProductArn":{
          "shape":"ProductArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the source product.</p>"
        },
        "TargetProductId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the target product. By default, a new product is created.</p>"
        },
        "TargetProductName":{
          "shape":"ProductViewName",
          "documentation":"<p>A name for the target product. The default is the name of the source product.</p>"
        },
        "SourceProvisioningArtifactIdentifiers":{
          "shape":"SourceProvisioningArtifactProperties",
          "documentation":"<p>The identifiers of the provisioning artifacts (also known as versions) of the product to copy. By default, all provisioning artifacts are copied.</p>"
        },
        "CopyOptions":{
          "shape":"CopyOptions",
          "documentation":"<p>The copy options. If the value is <code>CopyTags</code>, the tags from the source product are copied to the target product.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p> A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request. </p>",
          "idempotencyToken":true
        }
      }
    },
    "CopyProductOutput":{
      "type":"structure",
      "members":{
        "CopyProductToken":{
          "shape":"Id",
          "documentation":"<p>The token to use to track the progress of the operation.</p>"
        }
      }
    },
    "CopyProductStatus":{
      "type":"string",
      "enum":[
        "SUCCEEDED",
        "IN_PROGRESS",
        "FAILED"
      ]
    },
    "CreateConstraintInput":{
      "type":"structure",
      "required":[
        "PortfolioId",
        "ProductId",
        "Parameters",
        "Type",
        "IdempotencyToken"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "Parameters":{
          "shape":"ConstraintParameters",
          "documentation":"<p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p> <dl> <dt>LAUNCH</dt> <dd> <p>Specify the <code>RoleArn</code> property as follows:</p> <p>\\\"RoleArn\\\" : \\\"arn:aws:iam::123456789012:role/LaunchRole\\\"</p> </dd> <dt>NOTIFICATION</dt> <dd> <p>Specify the <code>NotificationArns</code> property as follows:</p> <p>\\\"NotificationArns\\\" : [\\\"arn:aws:sns:us-east-1:123456789012:Topic\\\"]</p> </dd> <dt>TEMPLATE</dt> <dd> <p>Specify the <code>Rules</code> property. For more information, see <a href=\"http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html\">Template Constraint Rules</a>.</p> </dd> </dl>"
        },
        "Type":{
          "shape":"ConstraintType",
          "documentation":"<p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>"
        },
        "Description":{
          "shape":"ConstraintDescription",
          "documentation":"<p>The description of the constraint.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>",
          "idempotencyToken":true
        }
      }
    },
    "CreateConstraintOutput":{
      "type":"structure",
      "members":{
        "ConstraintDetail":{
          "shape":"ConstraintDetail",
          "documentation":"<p>Information about the constraint.</p>"
        },
        "ConstraintParameters":{
          "shape":"ConstraintParameters",
          "documentation":"<p>The constraint parameters.</p>"
        },
        "Status":{
          "shape":"Status",
          "documentation":"<p>The status of the current request.</p>"
        }
      }
    },
    "CreatePortfolioInput":{
      "type":"structure",
      "required":[
        "DisplayName",
        "ProviderName",
        "IdempotencyToken"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "DisplayName":{
          "shape":"PortfolioDisplayName",
          "documentation":"<p>The name to use for display purposes.</p>"
        },
        "Description":{
          "shape":"PortfolioDescription",
          "documentation":"<p>The description of the portfolio.</p>"
        },
        "ProviderName":{
          "shape":"ProviderName",
          "documentation":"<p>The name of the portfolio provider.</p>"
        },
        "Tags":{
          "shape":"AddTags",
          "documentation":"<p>One or more tags.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>",
          "idempotencyToken":true
        }
      }
    },
    "CreatePortfolioOutput":{
      "type":"structure",
      "members":{
        "PortfolioDetail":{
          "shape":"PortfolioDetail",
          "documentation":"<p>Information about the portfolio.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Information about the tags associated with the portfolio.</p>"
        }
      }
    },
    "CreatePortfolioShareInput":{
      "type":"structure",
      "required":[
        "PortfolioId",
        "AccountId"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The AWS account ID.</p>"
        }
      }
    },
    "CreatePortfolioShareOutput":{
      "type":"structure",
      "members":{
      }
    },
    "CreateProductInput":{
      "type":"structure",
      "required":[
        "Name",
        "Owner",
        "ProductType",
        "ProvisioningArtifactParameters",
        "IdempotencyToken"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Name":{
          "shape":"ProductViewName",
          "documentation":"<p>The name of the product.</p>"
        },
        "Owner":{
          "shape":"ProductViewOwner",
          "documentation":"<p>The owner of the product.</p>"
        },
        "Description":{
          "shape":"ProductViewShortDescription",
          "documentation":"<p>The description of the product.</p>"
        },
        "Distributor":{
          "shape":"ProductViewOwner",
          "documentation":"<p>The distributor of the product.</p>"
        },
        "SupportDescription":{
          "shape":"SupportDescription",
          "documentation":"<p>The support information about the product.</p>"
        },
        "SupportEmail":{
          "shape":"SupportEmail",
          "documentation":"<p>The contact email for product support.</p>"
        },
        "SupportUrl":{
          "shape":"SupportUrl",
          "documentation":"<p>The contact URL for product support.</p>"
        },
        "ProductType":{
          "shape":"ProductType",
          "documentation":"<p>The type of product.</p>"
        },
        "Tags":{
          "shape":"AddTags",
          "documentation":"<p>One or more tags.</p>"
        },
        "ProvisioningArtifactParameters":{
          "shape":"ProvisioningArtifactProperties",
          "documentation":"<p>The configuration of the provisioning artifact.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>",
          "idempotencyToken":true
        }
      }
    },
    "CreateProductOutput":{
      "type":"structure",
      "members":{
        "ProductViewDetail":{
          "shape":"ProductViewDetail",
          "documentation":"<p>Information about the product view.</p>"
        },
        "ProvisioningArtifactDetail":{
          "shape":"ProvisioningArtifactDetail",
          "documentation":"<p>Information about the provisioning artifact.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Information about the tags associated with the product.</p>"
        }
      }
    },
    "CreateProvisionedProductPlanInput":{
      "type":"structure",
      "required":[
        "PlanName",
        "PlanType",
        "ProductId",
        "ProvisionedProductName",
        "ProvisioningArtifactId",
        "IdempotencyToken"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PlanName":{
          "shape":"ProvisionedProductPlanName",
          "documentation":"<p>The name of the plan.</p>"
        },
        "PlanType":{
          "shape":"ProvisionedProductPlanType",
          "documentation":"<p>The plan type.</p>"
        },
        "NotificationArns":{
          "shape":"NotificationArns",
          "documentation":"<p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.</p>"
        },
        "PathId":{
          "shape":"Id",
          "documentation":"<p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisionedProductName":{
          "shape":"ProvisionedProductName",
          "documentation":"<p>A user-friendly name for the provisioned product. This value must be unique for the AWS account and cannot be updated after the product is provisioned.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "ProvisioningParameters":{
          "shape":"UpdateProvisioningParameters",
          "documentation":"<p>Parameters specified by the administrator that are required for provisioning the product.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>",
          "idempotencyToken":true
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>One or more tags.</p>"
        }
      }
    },
    "CreateProvisionedProductPlanOutput":{
      "type":"structure",
      "members":{
        "PlanName":{
          "shape":"ProvisionedProductPlanName",
          "documentation":"<p>The name of the plan.</p>"
        },
        "PlanId":{
          "shape":"Id",
          "documentation":"<p>The plan identifier.</p>"
        },
        "ProvisionProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisionedProductName":{
          "shape":"ProvisionedProductName",
          "documentation":"<p>The user-friendly name of the provisioned product.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        }
      }
    },
    "CreateProvisioningArtifactInput":{
      "type":"structure",
      "required":[
        "ProductId",
        "Parameters",
        "IdempotencyToken"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "Parameters":{
          "shape":"ProvisioningArtifactProperties",
          "documentation":"<p>The configuration for the provisioning artifact.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>",
          "idempotencyToken":true
        }
      }
    },
    "CreateProvisioningArtifactOutput":{
      "type":"structure",
      "members":{
        "ProvisioningArtifactDetail":{
          "shape":"ProvisioningArtifactDetail",
          "documentation":"<p>Information about the provisioning artifact.</p>"
        },
        "Info":{
          "shape":"ProvisioningArtifactInfo",
          "documentation":"<p>The URL of the CloudFormation template in Amazon S3, in JSON format.</p>"
        },
        "Status":{
          "shape":"Status",
          "documentation":"<p>The status of the current request.</p>"
        }
      }
    },
    "CreateTagOptionInput":{
      "type":"structure",
      "required":[
        "Key",
        "Value"
      ],
      "members":{
        "Key":{
          "shape":"TagOptionKey",
          "documentation":"<p>The TagOption key.</p>"
        },
        "Value":{
          "shape":"TagOptionValue",
          "documentation":"<p>The TagOption value.</p>"
        }
      }
    },
    "CreateTagOptionOutput":{
      "type":"structure",
      "members":{
        "TagOptionDetail":{
          "shape":"TagOptionDetail",
          "documentation":"<p>Information about the TagOption.</p>"
        }
      }
    },
    "CreatedTime":{"type":"timestamp"},
    "CreationTime":{"type":"timestamp"},
    "DefaultValue":{"type":"string"},
    "DeleteConstraintInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The identifier of the constraint.</p>"
        }
      }
    },
    "DeleteConstraintOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeletePortfolioInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        }
      }
    },
    "DeletePortfolioOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeletePortfolioShareInput":{
      "type":"structure",
      "required":[
        "PortfolioId",
        "AccountId"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "AccountId":{
          "shape":"AccountId",
          "documentation":"<p>The AWS account ID.</p>"
        }
      }
    },
    "DeletePortfolioShareOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteProductInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        }
      }
    },
    "DeleteProductOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteProvisionedProductPlanInput":{
      "type":"structure",
      "required":["PlanId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PlanId":{
          "shape":"Id",
          "documentation":"<p>The plan identifier.</p>"
        },
        "IgnoreErrors":{
          "shape":"IgnoreErrors",
          "documentation":"<p>If set to true, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.</p>"
        }
      }
    },
    "DeleteProvisionedProductPlanOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteProvisioningArtifactInput":{
      "type":"structure",
      "required":[
        "ProductId",
        "ProvisioningArtifactId"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        }
      }
    },
    "DeleteProvisioningArtifactOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteTagOptionInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "Id":{
          "shape":"TagOptionId",
          "documentation":"<p>The TagOption identifier.</p>"
        }
      }
    },
    "DeleteTagOptionOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeConstraintInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The identifier of the constraint.</p>"
        }
      }
    },
    "DescribeConstraintOutput":{
      "type":"structure",
      "members":{
        "ConstraintDetail":{
          "shape":"ConstraintDetail",
          "documentation":"<p>Information about the constraint.</p>"
        },
        "ConstraintParameters":{
          "shape":"ConstraintParameters",
          "documentation":"<p>The constraint parameters.</p>"
        },
        "Status":{
          "shape":"Status",
          "documentation":"<p>The status of the current request.</p>"
        }
      }
    },
    "DescribeCopyProductStatusInput":{
      "type":"structure",
      "required":["CopyProductToken"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "CopyProductToken":{
          "shape":"Id",
          "documentation":"<p>The token for the copy product operation. This token is returned by <a>CopyProduct</a>.</p>"
        }
      }
    },
    "DescribeCopyProductStatusOutput":{
      "type":"structure",
      "members":{
        "CopyProductStatus":{
          "shape":"CopyProductStatus",
          "documentation":"<p>The status of the copy product operation.</p>"
        },
        "TargetProductId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the copied product.</p>"
        },
        "StatusDetail":{
          "shape":"StatusDetail",
          "documentation":"<p>The status message.</p>"
        }
      }
    },
    "DescribePortfolioInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        }
      }
    },
    "DescribePortfolioOutput":{
      "type":"structure",
      "members":{
        "PortfolioDetail":{
          "shape":"PortfolioDetail",
          "documentation":"<p>Information about the portfolio.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Information about the tags associated with the portfolio.</p>"
        },
        "TagOptions":{
          "shape":"TagOptionDetails",
          "documentation":"<p>Information about the TagOptions associated with the portfolio.</p>"
        }
      }
    },
    "DescribeProductAsAdminInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        }
      }
    },
    "DescribeProductAsAdminOutput":{
      "type":"structure",
      "members":{
        "ProductViewDetail":{
          "shape":"ProductViewDetail",
          "documentation":"<p>Information about the product view.</p>"
        },
        "ProvisioningArtifactSummaries":{
          "shape":"ProvisioningArtifactSummaries",
          "documentation":"<p>Information about the provisioning artifacts (also known as versions) for the specified product.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Information about the tags associated with the product.</p>"
        },
        "TagOptions":{
          "shape":"TagOptionDetails",
          "documentation":"<p>Information about the TagOptions associated with the product.</p>"
        }
      }
    },
    "DescribeProductInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        }
      }
    },
    "DescribeProductOutput":{
      "type":"structure",
      "members":{
        "ProductViewSummary":{
          "shape":"ProductViewSummary",
          "documentation":"<p>Summary information about the product view.</p>"
        },
        "ProvisioningArtifacts":{
          "shape":"ProvisioningArtifacts",
          "documentation":"<p>Information about the provisioning artifacts for the specified product.</p>"
        }
      }
    },
    "DescribeProductViewInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The product view identifier.</p>"
        }
      }
    },
    "DescribeProductViewOutput":{
      "type":"structure",
      "members":{
        "ProductViewSummary":{
          "shape":"ProductViewSummary",
          "documentation":"<p>Summary information about the product.</p>"
        },
        "ProvisioningArtifacts":{
          "shape":"ProvisioningArtifacts",
          "documentation":"<p>Information about the provisioning artifacts for the product.</p>"
        }
      }
    },
    "DescribeProvisionedProductInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The provisioned product identifier.</p>"
        }
      }
    },
    "DescribeProvisionedProductOutput":{
      "type":"structure",
      "members":{
        "ProvisionedProductDetail":{
          "shape":"ProvisionedProductDetail",
          "documentation":"<p>Information about the provisioned product.</p>"
        },
        "CloudWatchDashboards":{
          "shape":"CloudWatchDashboards",
          "documentation":"<p>Any CloudWatch dashboards that were created when provisioning the product.</p>"
        }
      }
    },
    "DescribeProvisionedProductPlanInput":{
      "type":"structure",
      "required":["PlanId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PlanId":{
          "shape":"Id",
          "documentation":"<p>The plan identifier.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "DescribeProvisionedProductPlanOutput":{
      "type":"structure",
      "members":{
        "ProvisionedProductPlanDetails":{
          "shape":"ProvisionedProductPlanDetails",
          "documentation":"<p>Information about the plan.</p>"
        },
        "ResourceChanges":{
          "shape":"ResourceChanges",
          "documentation":"<p>Information about the resource changes that will occur when the plan is executed.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "DescribeProvisioningArtifactInput":{
      "type":"structure",
      "required":[
        "ProvisioningArtifactId",
        "ProductId"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "Verbose":{
          "shape":"Verbose",
          "documentation":"<p>Indicates whether a verbose level of detail is enabled.</p>"
        }
      }
    },
    "DescribeProvisioningArtifactOutput":{
      "type":"structure",
      "members":{
        "ProvisioningArtifactDetail":{
          "shape":"ProvisioningArtifactDetail",
          "documentation":"<p>Information about the provisioning artifact.</p>"
        },
        "Info":{
          "shape":"ProvisioningArtifactInfo",
          "documentation":"<p>The URL of the CloudFormation template in Amazon S3.</p>"
        },
        "Status":{
          "shape":"Status",
          "documentation":"<p>The status of the current request.</p>"
        }
      }
    },
    "DescribeProvisioningParametersInput":{
      "type":"structure",
      "required":[
        "ProductId",
        "ProvisioningArtifactId"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "PathId":{
          "shape":"Id",
          "documentation":"<p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>.</p>"
        }
      }
    },
    "DescribeProvisioningParametersOutput":{
      "type":"structure",
      "members":{
        "ProvisioningArtifactParameters":{
          "shape":"ProvisioningArtifactParameters",
          "documentation":"<p>Information about the parameters used to provision the product.</p>"
        },
        "ConstraintSummaries":{
          "shape":"ConstraintSummaries",
          "documentation":"<p>Information about the constraints used to provision the product.</p>"
        },
        "UsageInstructions":{
          "shape":"UsageInstructions",
          "documentation":"<p>Any additional metadata specifically related to the provisioning of the product. For example, see the <code>Version</code> field of the CloudFormation template.</p>"
        },
        "TagOptions":{
          "shape":"TagOptionSummaries",
          "documentation":"<p>Information about the TagOptions associated with the resource.</p>"
        }
      }
    },
    "DescribeRecordInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The record identifier of the provisioned product. This identifier is returned by the request operation.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        }
      }
    },
    "DescribeRecordOutput":{
      "type":"structure",
      "members":{
        "RecordDetail":{
          "shape":"RecordDetail",
          "documentation":"<p>Information about the product.</p>"
        },
        "RecordOutputs":{
          "shape":"RecordOutputs",
          "documentation":"<p>Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "DescribeTagOptionInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "Id":{
          "shape":"TagOptionId",
          "documentation":"<p>The TagOption identifier.</p>"
        }
      }
    },
    "DescribeTagOptionOutput":{
      "type":"structure",
      "members":{
        "TagOptionDetail":{
          "shape":"TagOptionDetail",
          "documentation":"<p>Information about the TagOption.</p>"
        }
      }
    },
    "Description":{"type":"string"},
    "DisassociatePrincipalFromPortfolioInput":{
      "type":"structure",
      "required":[
        "PortfolioId",
        "PrincipalARN"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "PrincipalARN":{
          "shape":"PrincipalARN",
          "documentation":"<p>The ARN of the principal (IAM user, role, or group).</p>"
        }
      }
    },
    "DisassociatePrincipalFromPortfolioOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DisassociateProductFromPortfolioInput":{
      "type":"structure",
      "required":[
        "ProductId",
        "PortfolioId"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        }
      }
    },
    "DisassociateProductFromPortfolioOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DisassociateTagOptionFromResourceInput":{
      "type":"structure",
      "required":[
        "ResourceId",
        "TagOptionId"
      ],
      "members":{
        "ResourceId":{
          "shape":"ResourceId",
          "documentation":"<p>The resource identifier.</p>"
        },
        "TagOptionId":{
          "shape":"TagOptionId",
          "documentation":"<p>The TagOption identifier.</p>"
        }
      }
    },
    "DisassociateTagOptionFromResourceOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DuplicateResourceException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified resource is a duplicate.</p>",
      "exception":true
    },
    "ErrorCode":{"type":"string"},
    "ErrorDescription":{"type":"string"},
    "EvaluationType":{
      "type":"string",
      "enum":[
        "STATIC",
        "DYNAMIC"
      ]
    },
    "ExecuteProvisionedProductPlanInput":{
      "type":"structure",
      "required":[
        "PlanId",
        "IdempotencyToken"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PlanId":{
          "shape":"Id",
          "documentation":"<p>The plan identifier.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>",
          "idempotencyToken":true
        }
      }
    },
    "ExecuteProvisionedProductPlanOutput":{
      "type":"structure",
      "members":{
        "RecordDetail":{
          "shape":"RecordDetail",
          "documentation":"<p>Information about the result of provisioning the product.</p>"
        }
      }
    },
    "HasDefaultPath":{"type":"boolean"},
    "Id":{
      "type":"string",
      "max":100,
      "min":1
    },
    "IdempotencyToken":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9][a-zA-Z0-9_-]*"
    },
    "IgnoreErrors":{"type":"boolean"},
    "InstructionType":{"type":"string"},
    "InstructionValue":{"type":"string"},
    "InvalidParametersException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>One or more parameters provided to the operation are not valid.</p>",
      "exception":true
    },
    "InvalidStateException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An attempt was made to modify a resource that is in a state that is not valid. Check your resources to ensure that they are in valid states before retrying the operation.</p>",
      "exception":true
    },
    "LastRequestId":{"type":"string"},
    "LaunchPathSummaries":{
      "type":"list",
      "member":{"shape":"LaunchPathSummary"}
    },
    "LaunchPathSummary":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"Id",
          "documentation":"<p>The identifier of the product path.</p>"
        },
        "ConstraintSummaries":{
          "shape":"ConstraintSummaries",
          "documentation":"<p>The constraints on the portfolio-product relationship.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The tags associated with this product path.</p>"
        },
        "Name":{
          "shape":"PortfolioName",
          "documentation":"<p>The name of the portfolio to which the user was assigned.</p>"
        }
      },
      "documentation":"<p>Summary information about a product path for a user.</p>"
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The current limits of the service would have been exceeded by this operation. Decrease your resource use or increase your service limits and retry the operation.</p>",
      "exception":true
    },
    "ListAcceptedPortfolioSharesInput":{
      "type":"structure",
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PortfolioShareType":{
          "shape":"PortfolioShareType",
          "documentation":"<p>The type of shared portfolios to list. The default is to list imported portfolios.</p> <ul> <li> <p> <code>AWS_SERVICECATALOG</code> - List default portfolios</p> </li> <li> <p> <code>IMPORTED</code> - List imported portfolios</p> </li> </ul>"
        }
      }
    },
    "ListAcceptedPortfolioSharesOutput":{
      "type":"structure",
      "members":{
        "PortfolioDetails":{
          "shape":"PortfolioDetails",
          "documentation":"<p>Information about the portfolios.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListConstraintsForPortfolioInput":{
      "type":"structure",
      "required":["PortfolioId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "ListConstraintsForPortfolioOutput":{
      "type":"structure",
      "members":{
        "ConstraintDetails":{
          "shape":"ConstraintDetails",
          "documentation":"<p>Information about the constraints.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListLaunchPathsInput":{
      "type":"structure",
      "required":["ProductId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "ListLaunchPathsOutput":{
      "type":"structure",
      "members":{
        "LaunchPathSummaries":{
          "shape":"LaunchPathSummaries",
          "documentation":"<p>Information about the launch path.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListPortfolioAccessInput":{
      "type":"structure",
      "required":["PortfolioId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        }
      }
    },
    "ListPortfolioAccessOutput":{
      "type":"structure",
      "members":{
        "AccountIds":{
          "shape":"AccountIds",
          "documentation":"<p>Information about the AWS accounts with access to the portfolio.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListPortfoliosForProductInput":{
      "type":"structure",
      "required":["ProductId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        }
      }
    },
    "ListPortfoliosForProductOutput":{
      "type":"structure",
      "members":{
        "PortfolioDetails":{
          "shape":"PortfolioDetails",
          "documentation":"<p>Information about the portfolios.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListPortfoliosInput":{
      "type":"structure",
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        }
      }
    },
    "ListPortfoliosOutput":{
      "type":"structure",
      "members":{
        "PortfolioDetails":{
          "shape":"PortfolioDetails",
          "documentation":"<p>Information about the portfolios.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListPrincipalsForPortfolioInput":{
      "type":"structure",
      "required":["PortfolioId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "ListPrincipalsForPortfolioOutput":{
      "type":"structure",
      "members":{
        "Principals":{
          "shape":"Principals",
          "documentation":"<p>The IAM principals (users or roles) associated with the portfolio.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListProvisionedProductPlansInput":{
      "type":"structure",
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProvisionProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        },
        "AccessLevelFilter":{
          "shape":"AccessLevelFilter",
          "documentation":"<p>The access level to use to obtain results. The default is <code>User</code>.</p>"
        }
      }
    },
    "ListProvisionedProductPlansOutput":{
      "type":"structure",
      "members":{
        "ProvisionedProductPlans":{
          "shape":"ProvisionedProductPlans",
          "documentation":"<p>Information about the plans.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListProvisioningArtifactsInput":{
      "type":"structure",
      "required":["ProductId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        }
      }
    },
    "ListProvisioningArtifactsOutput":{
      "type":"structure",
      "members":{
        "ProvisioningArtifactDetails":{
          "shape":"ProvisioningArtifactDetails",
          "documentation":"<p>Information about the provisioning artifacts.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListRecordHistoryInput":{
      "type":"structure",
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "AccessLevelFilter":{
          "shape":"AccessLevelFilter",
          "documentation":"<p>The access level to use to obtain results. The default is <code>User</code>.</p>"
        },
        "SearchFilter":{
          "shape":"ListRecordHistorySearchFilter",
          "documentation":"<p>The search filter to scope the results.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "ListRecordHistoryOutput":{
      "type":"structure",
      "members":{
        "RecordDetails":{
          "shape":"RecordDetails",
          "documentation":"<p>The records, in reverse chronological order.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "ListRecordHistorySearchFilter":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"SearchFilterKey",
          "documentation":"<p>The filter key.</p> <ul> <li> <p> <code>product</code> - Filter results based on the specified product identifier.</p> </li> <li> <p> <code>provisionedproduct</code> - Filter results based on the provisioned product identifier.</p> </li> </ul>"
        },
        "Value":{
          "shape":"SearchFilterValue",
          "documentation":"<p>The filter value.</p>"
        }
      },
      "documentation":"<p>The search filter to use when listing history records.</p>"
    },
    "ListResourcesForTagOptionInput":{
      "type":"structure",
      "required":["TagOptionId"],
      "members":{
        "TagOptionId":{
          "shape":"TagOptionId",
          "documentation":"<p>The TagOption identifier.</p>"
        },
        "ResourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type.</p> <ul> <li> <p> <code>Portfolio</code> </p> </li> <li> <p> <code>Product</code> </p> </li> </ul>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "ListResourcesForTagOptionOutput":{
      "type":"structure",
      "members":{
        "ResourceDetails":{
          "shape":"ResourceDetails",
          "documentation":"<p>Information about the resources.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "ListTagOptionsFilters":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"TagOptionKey",
          "documentation":"<p>The TagOption key.</p>"
        },
        "Value":{
          "shape":"TagOptionValue",
          "documentation":"<p>The TagOption value.</p>"
        },
        "Active":{
          "shape":"TagOptionActive",
          "documentation":"<p>The active state.</p>"
        }
      },
      "documentation":"<p>Filters to use when listing TagOptions.</p>"
    },
    "ListTagOptionsInput":{
      "type":"structure",
      "members":{
        "Filters":{
          "shape":"ListTagOptionsFilters",
          "documentation":"<p>The search filters. If no search filters are specified, the output includes all TagOptions.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "ListTagOptionsOutput":{
      "type":"structure",
      "members":{
        "TagOptionDetails":{
          "shape":"TagOptionDetails",
          "documentation":"<p>Information about the TagOptions.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "LogicalResourceId":{"type":"string"},
    "NoEcho":{"type":"boolean"},
    "NotificationArn":{
      "type":"string",
      "max":1224,
      "min":1,
      "pattern":"arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}"
    },
    "NotificationArns":{
      "type":"list",
      "member":{"shape":"NotificationArn"},
      "max":5
    },
    "OutputKey":{"type":"string"},
    "OutputValue":{"type":"string"},
    "PageSize":{
      "type":"integer",
      "max":20,
      "min":0
    },
    "PageToken":{
      "type":"string",
      "pattern":"[\\u0009\\u000a\\u000d\\u0020-\\uD7FF\\uE000-\\uFFFD]*"
    },
    "ParameterConstraints":{
      "type":"structure",
      "members":{
        "AllowedValues":{
          "shape":"AllowedValues",
          "documentation":"<p>The values that the administrator has allowed for the parameter.</p>"
        }
      },
      "documentation":"<p>The constraints that the administrator has put on the parameter.</p>"
    },
    "ParameterKey":{
      "type":"string",
      "max":1000,
      "min":1
    },
    "ParameterType":{"type":"string"},
    "ParameterValue":{
      "type":"string",
      "max":4096
    },
    "PhysicalId":{"type":"string"},
    "PhysicalResourceId":{"type":"string"},
    "PlanResourceType":{
      "type":"string",
      "max":256,
      "min":1
    },
    "PortfolioDescription":{
      "type":"string",
      "max":2000
    },
    "PortfolioDetail":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "ARN":{
          "shape":"ResourceARN",
          "documentation":"<p>The ARN assigned to the portfolio.</p>"
        },
        "DisplayName":{
          "shape":"PortfolioDisplayName",
          "documentation":"<p>The name to use for display purposes.</p>"
        },
        "Description":{
          "shape":"PortfolioDescription",
          "documentation":"<p>The description of the portfolio.</p>"
        },
        "CreatedTime":{
          "shape":"CreationTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        },
        "ProviderName":{
          "shape":"ProviderName",
          "documentation":"<p>The name of the portfolio provider.</p>"
        }
      },
      "documentation":"<p>Information about a portfolio.</p>"
    },
    "PortfolioDetails":{
      "type":"list",
      "member":{"shape":"PortfolioDetail"}
    },
    "PortfolioDisplayName":{
      "type":"string",
      "max":100,
      "min":1
    },
    "PortfolioName":{"type":"string"},
    "PortfolioShareType":{
      "type":"string",
      "enum":[
        "IMPORTED",
        "AWS_SERVICECATALOG"
      ]
    },
    "Principal":{
      "type":"structure",
      "members":{
        "PrincipalARN":{
          "shape":"PrincipalARN",
          "documentation":"<p>The ARN of the principal (IAM user, role, or group).</p>"
        },
        "PrincipalType":{
          "shape":"PrincipalType",
          "documentation":"<p>The principal type. The supported value is <code>IAM</code>.</p>"
        }
      },
      "documentation":"<p>Information about a principal.</p>"
    },
    "PrincipalARN":{
      "type":"string",
      "max":1000,
      "min":1
    },
    "PrincipalType":{
      "type":"string",
      "enum":["IAM"]
    },
    "Principals":{
      "type":"list",
      "member":{"shape":"Principal"}
    },
    "ProductArn":{
      "type":"string",
      "max":1224,
      "min":1,
      "pattern":"arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}"
    },
    "ProductSource":{
      "type":"string",
      "enum":["ACCOUNT"]
    },
    "ProductType":{
      "type":"string",
      "enum":[
        "CLOUD_FORMATION_TEMPLATE",
        "MARKETPLACE"
      ],
      "max":8191
    },
    "ProductViewAggregationType":{"type":"string"},
    "ProductViewAggregationValue":{
      "type":"structure",
      "members":{
        "Value":{
          "shape":"AttributeValue",
          "documentation":"<p>The value of the product view aggregation.</p>"
        },
        "ApproximateCount":{
          "shape":"ApproximateCount",
          "documentation":"<p>An approximate count of the products that match the value.</p>"
        }
      },
      "documentation":"<p>A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.</p>"
    },
    "ProductViewAggregationValues":{
      "type":"list",
      "member":{"shape":"ProductViewAggregationValue"}
    },
    "ProductViewAggregations":{
      "type":"map",
      "key":{"shape":"ProductViewAggregationType"},
      "value":{"shape":"ProductViewAggregationValues"}
    },
    "ProductViewDetail":{
      "type":"structure",
      "members":{
        "ProductViewSummary":{
          "shape":"ProductViewSummary",
          "documentation":"<p>Summary information about the product view.</p>"
        },
        "Status":{
          "shape":"Status",
          "documentation":"<p>The status of the product.</p> <ul> <li> <p> <code>AVAILABLE</code> - The product is ready for use.</p> </li> <li> <p> <code>CREATING</code> - Product creation has started; the product is not ready for use.</p> </li> <li> <p> <code>FAILED</code> - An action failed.</p> </li> </ul>"
        },
        "ProductARN":{
          "shape":"ResourceARN",
          "documentation":"<p>The ARN of the product.</p>"
        },
        "CreatedTime":{
          "shape":"CreatedTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        }
      },
      "documentation":"<p>Information about a product view.</p>"
    },
    "ProductViewDetails":{
      "type":"list",
      "member":{"shape":"ProductViewDetail"}
    },
    "ProductViewDistributor":{"type":"string"},
    "ProductViewFilterBy":{
      "type":"string",
      "enum":[
        "FullTextSearch",
        "Owner",
        "ProductType",
        "SourceProductId"
      ]
    },
    "ProductViewFilterValue":{"type":"string"},
    "ProductViewFilterValues":{
      "type":"list",
      "member":{"shape":"ProductViewFilterValue"}
    },
    "ProductViewFilters":{
      "type":"map",
      "key":{"shape":"ProductViewFilterBy"},
      "value":{"shape":"ProductViewFilterValues"}
    },
    "ProductViewName":{
      "type":"string",
      "max":8191
    },
    "ProductViewOwner":{
      "type":"string",
      "max":8191
    },
    "ProductViewShortDescription":{
      "type":"string",
      "max":8191
    },
    "ProductViewSortBy":{
      "type":"string",
      "enum":[
        "Title",
        "VersionCount",
        "CreationDate"
      ]
    },
    "ProductViewSummaries":{
      "type":"list",
      "member":{"shape":"ProductViewSummary"}
    },
    "ProductViewSummary":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"Id",
          "documentation":"<p>The product view identifier.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "Name":{
          "shape":"ProductViewName",
          "documentation":"<p>The name of the product.</p>"
        },
        "Owner":{
          "shape":"ProductViewOwner",
          "documentation":"<p>The owner of the product. Contact the product administrator for the significance of this value.</p>"
        },
        "ShortDescription":{
          "shape":"ProductViewShortDescription",
          "documentation":"<p>Short description of the product.</p>"
        },
        "Type":{
          "shape":"ProductType",
          "documentation":"<p>The product type. Contact the product administrator for the significance of this value. If this value is <code>MARKETPLACE</code>, the product was created by AWS Marketplace.</p>"
        },
        "Distributor":{
          "shape":"ProductViewDistributor",
          "documentation":"<p>The distributor of the product. Contact the product administrator for the significance of this value.</p>"
        },
        "HasDefaultPath":{
          "shape":"HasDefaultPath",
          "documentation":"<p>Indicates whether the product has a default path. If the product does not have a default path, call <a>ListLaunchPaths</a> to disambiguate between paths. Otherwise, <a>ListLaunchPaths</a> is not required, and the output of <a>ProductViewSummary</a> can be used directly with <a>DescribeProvisioningParameters</a>.</p>"
        },
        "SupportEmail":{
          "shape":"SupportEmail",
          "documentation":"<p>The email contact information to obtain support for this Product.</p>"
        },
        "SupportDescription":{
          "shape":"SupportDescription",
          "documentation":"<p>The description of the support for this Product.</p>"
        },
        "SupportUrl":{
          "shape":"SupportUrl",
          "documentation":"<p>The URL information to obtain support for this Product.</p>"
        }
      },
      "documentation":"<p>Summary information about a product view.</p>"
    },
    "PropertyName":{"type":"string"},
    "ProviderName":{
      "type":"string",
      "max":50,
      "min":1
    },
    "ProvisionProductInput":{
      "type":"structure",
      "required":[
        "ProductId",
        "ProvisioningArtifactId",
        "ProvisionedProductName",
        "ProvisionToken"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "PathId":{
          "shape":"Id",
          "documentation":"<p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>.</p>"
        },
        "ProvisionedProductName":{
          "shape":"ProvisionedProductName",
          "documentation":"<p>A user-friendly name for the provisioned product. This value must be unique for the AWS account and cannot be updated after the product is provisioned.</p>"
        },
        "ProvisioningParameters":{
          "shape":"ProvisioningParameters",
          "documentation":"<p>Parameters specified by the administrator that are required for provisioning the product.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>One or more tags.</p>"
        },
        "NotificationArns":{
          "shape":"NotificationArns",
          "documentation":"<p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.</p>"
        },
        "ProvisionToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>An idempotency token that uniquely identifies the provisioning request.</p>",
          "idempotencyToken":true
        }
      }
    },
    "ProvisionProductOutput":{
      "type":"structure",
      "members":{
        "RecordDetail":{
          "shape":"RecordDetail",
          "documentation":"<p>Information about the result of provisioning the product.</p>"
        }
      }
    },
    "ProvisionedProductAttribute":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"ProvisionedProductNameOrArn",
          "documentation":"<p>The user-friendly name of the provisioned product.</p>"
        },
        "Arn":{
          "shape":"ProvisionedProductNameOrArn",
          "documentation":"<p>The ARN of the provisioned product.</p>"
        },
        "Type":{
          "shape":"ProvisionedProductType",
          "documentation":"<p>The type of provisioned product. The supported value is <code>CFN_STACK</code>.</p>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioned product.</p>"
        },
        "Status":{
          "shape":"ProvisionedProductStatus",
          "documentation":"<p>The current status of the provisioned product.</p> <ul> <li> <p> <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p> </li> <li> <p> <code>UNDER_CHANGE</code> - Transitive state, operations performed might not have valid results. Wait for an <code>AVAILABLE</code> status before performing operations.</p> </li> <li> <p> <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p> </li> <li> <p> <code>ERROR</code> - An unexpected error occurred, the provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p> </li> </ul>"
        },
        "StatusMessage":{
          "shape":"ProvisionedProductStatusMessage",
          "documentation":"<p>The current status message of the provisioned product.</p>"
        },
        "CreatedTime":{
          "shape":"CreatedTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>"
        },
        "LastRecordId":{
          "shape":"Id",
          "documentation":"<p>The record identifier of the last request performed on this provisioned product.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>One or more tags.</p>"
        },
        "PhysicalId":{
          "shape":"PhysicalId",
          "documentation":"<p>The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "UserArn":{
          "shape":"UserArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the IAM user.</p>"
        },
        "UserArnSession":{
          "shape":"UserArnSession",
          "documentation":"<p>The ARN of the IAM user in the session. This ARN might contain a session ID.</p>"
        }
      },
      "documentation":"<p>Information about a provisioned product.</p>"
    },
    "ProvisionedProductAttributes":{
      "type":"list",
      "member":{"shape":"ProvisionedProductAttribute"}
    },
    "ProvisionedProductDetail":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"ProvisionedProductNameOrArn",
          "documentation":"<p>The user-friendly name of the provisioned product.</p>"
        },
        "Arn":{
          "shape":"ProvisionedProductNameOrArn",
          "documentation":"<p>The ARN of the provisioned product.</p>"
        },
        "Type":{
          "shape":"ProvisionedProductType",
          "documentation":"<p>The type of provisioned product. The supported value is <code>CFN_STACK</code>.</p>"
        },
        "Id":{
          "shape":"ProvisionedProductId",
          "documentation":"<p>The identifier of the provisioned product.</p>"
        },
        "Status":{
          "shape":"ProvisionedProductStatus",
          "documentation":"<p>The current status of the provisioned product.</p> <ul> <li> <p> <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p> </li> <li> <p> <code>UNDER_CHANGE</code> - Transitive state, operations performed might not have valid results. Wait for an <code>AVAILABLE</code> status before performing operations.</p> </li> <li> <p> <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p> </li> <li> <p> <code>ERROR</code> - An unexpected error occurred, the provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p> </li> </ul>"
        },
        "StatusMessage":{
          "shape":"ProvisionedProductStatusMessage",
          "documentation":"<p>The current status message of the provisioned product.</p>"
        },
        "CreatedTime":{
          "shape":"CreatedTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        },
        "IdempotencyToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>"
        },
        "LastRecordId":{
          "shape":"LastRequestId",
          "documentation":"<p>The record identifier of the last request performed on this provisioned product.</p>"
        }
      },
      "documentation":"<p>Information about a provisioned product.</p>"
    },
    "ProvisionedProductDetails":{
      "type":"list",
      "member":{"shape":"ProvisionedProductDetail"}
    },
    "ProvisionedProductFilters":{
      "type":"map",
      "key":{"shape":"ProvisionedProductViewFilterBy"},
      "value":{"shape":"ProvisionedProductViewFilterValues"}
    },
    "ProvisionedProductId":{"type":"string"},
    "ProvisionedProductName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9][a-zA-Z0-9._-]*"
    },
    "ProvisionedProductNameOrArn":{
      "type":"string",
      "max":1224,
      "min":1,
      "pattern":"[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}|arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}"
    },
    "ProvisionedProductPlanDetails":{
      "type":"structure",
      "members":{
        "CreatedTime":{
          "shape":"CreatedTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        },
        "PathId":{
          "shape":"Id",
          "documentation":"<p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "PlanName":{
          "shape":"ProvisionedProductPlanName",
          "documentation":"<p>The name of the plan.</p>"
        },
        "PlanId":{
          "shape":"Id",
          "documentation":"<p>The plan identifier.</p>"
        },
        "ProvisionProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisionProductName":{
          "shape":"ProvisionedProductName",
          "documentation":"<p>The user-friendly name of the provisioned product.</p>"
        },
        "PlanType":{
          "shape":"ProvisionedProductPlanType",
          "documentation":"<p>The plan type.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "Status":{
          "shape":"ProvisionedProductPlanStatus",
          "documentation":"<p>The status.</p>"
        },
        "UpdatedTime":{
          "shape":"UpdatedTime",
          "documentation":"<p>The time when the plan was last updated.</p>"
        },
        "NotificationArns":{
          "shape":"NotificationArns",
          "documentation":"<p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.</p>"
        },
        "ProvisioningParameters":{
          "shape":"UpdateProvisioningParameters",
          "documentation":"<p>Parameters specified by the administrator that are required for provisioning the product.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>One or more tags.</p>"
        },
        "StatusMessage":{
          "shape":"StatusMessage",
          "documentation":"<p>The status message.</p>"
        }
      },
      "documentation":"<p>Information about a plan.</p>"
    },
    "ProvisionedProductPlanName":{"type":"string"},
    "ProvisionedProductPlanStatus":{
      "type":"string",
      "enum":[
        "CREATE_IN_PROGRESS",
        "CREATE_SUCCESS",
        "CREATE_FAILED",
        "EXECUTE_IN_PROGRESS",
        "EXECUTE_SUCCESS",
        "EXECUTE_FAILED"
      ]
    },
    "ProvisionedProductPlanSummary":{
      "type":"structure",
      "members":{
        "PlanName":{
          "shape":"ProvisionedProductPlanName",
          "documentation":"<p>The name of the plan.</p>"
        },
        "PlanId":{
          "shape":"Id",
          "documentation":"<p>The plan identifier.</p>"
        },
        "ProvisionProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisionProductName":{
          "shape":"ProvisionedProductName",
          "documentation":"<p>The user-friendly name of the provisioned product.</p>"
        },
        "PlanType":{
          "shape":"ProvisionedProductPlanType",
          "documentation":"<p>The plan type.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        }
      },
      "documentation":"<p>Summary information about a plan.</p>"
    },
    "ProvisionedProductPlanType":{
      "type":"string",
      "enum":["CLOUDFORMATION"]
    },
    "ProvisionedProductPlans":{
      "type":"list",
      "member":{"shape":"ProvisionedProductPlanSummary"}
    },
    "ProvisionedProductStatus":{
      "type":"string",
      "enum":[
        "AVAILABLE",
        "UNDER_CHANGE",
        "TAINTED",
        "ERROR",
        "PLAN_IN_PROGRESS"
      ]
    },
    "ProvisionedProductStatusMessage":{"type":"string"},
    "ProvisionedProductType":{"type":"string"},
    "ProvisionedProductViewFilterBy":{
      "type":"string",
      "enum":["SearchQuery"]
    },
    "ProvisionedProductViewFilterValue":{"type":"string"},
    "ProvisionedProductViewFilterValues":{
      "type":"list",
      "member":{"shape":"ProvisionedProductViewFilterValue"}
    },
    "ProvisioningArtifact":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "Name":{
          "shape":"ProvisioningArtifactName",
          "documentation":"<p>The name of the provisioning artifact.</p>"
        },
        "Description":{
          "shape":"ProvisioningArtifactDescription",
          "documentation":"<p>The description of the provisioning artifact.</p>"
        },
        "CreatedTime":{
          "shape":"ProvisioningArtifactCreatedTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        }
      },
      "documentation":"<p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>"
    },
    "ProvisioningArtifactActive":{"type":"boolean"},
    "ProvisioningArtifactCreatedTime":{"type":"timestamp"},
    "ProvisioningArtifactDescription":{"type":"string"},
    "ProvisioningArtifactDetail":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "Name":{
          "shape":"ProvisioningArtifactName",
          "documentation":"<p>The name of the provisioning artifact.</p>"
        },
        "Description":{
          "shape":"ProvisioningArtifactName",
          "documentation":"<p>The description of the provisioning artifact.</p>"
        },
        "Type":{
          "shape":"ProvisioningArtifactType",
          "documentation":"<p>The type of provisioning artifact.</p> <ul> <li> <p> <code>CLOUD_FORMATION_TEMPLATE</code> - AWS CloudFormation template</p> </li> <li> <p> <code>MARKETPLACE_AMI</code> - AWS Marketplace AMI</p> </li> <li> <p> <code>MARKETPLACE_CAR</code> - AWS Marketplace Clusters and AWS Resources</p> </li> </ul>"
        },
        "CreatedTime":{
          "shape":"CreationTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        },
        "Active":{
          "shape":"ProvisioningArtifactActive",
          "documentation":"<p>Indicates whether the product version is active.</p>"
        }
      },
      "documentation":"<p>Information about a provisioning artifact (also known as a version) for a product.</p>"
    },
    "ProvisioningArtifactDetails":{
      "type":"list",
      "member":{"shape":"ProvisioningArtifactDetail"}
    },
    "ProvisioningArtifactInfo":{
      "type":"map",
      "key":{"shape":"ProvisioningArtifactInfoKey"},
      "value":{"shape":"ProvisioningArtifactInfoValue"},
      "max":100,
      "min":1
    },
    "ProvisioningArtifactInfoKey":{"type":"string"},
    "ProvisioningArtifactInfoValue":{"type":"string"},
    "ProvisioningArtifactName":{"type":"string"},
    "ProvisioningArtifactParameter":{
      "type":"structure",
      "members":{
        "ParameterKey":{
          "shape":"ParameterKey",
          "documentation":"<p>The parameter key.</p>"
        },
        "DefaultValue":{
          "shape":"DefaultValue",
          "documentation":"<p>The default value.</p>"
        },
        "ParameterType":{
          "shape":"ParameterType",
          "documentation":"<p>The parameter type.</p>"
        },
        "IsNoEcho":{
          "shape":"NoEcho",
          "documentation":"<p>If this value is true, the value for this parameter is obfuscated from view when the parameter is retrieved. This parameter is used to hide sensitive information.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description of the parameter.</p>"
        },
        "ParameterConstraints":{
          "shape":"ParameterConstraints",
          "documentation":"<p>Constraints that the administrator has put on a parameter.</p>"
        }
      },
      "documentation":"<p>Information about a parameter used to provision a product.</p>"
    },
    "ProvisioningArtifactParameters":{
      "type":"list",
      "member":{"shape":"ProvisioningArtifactParameter"}
    },
    "ProvisioningArtifactProperties":{
      "type":"structure",
      "required":["Info"],
      "members":{
        "Name":{
          "shape":"ProvisioningArtifactName",
          "documentation":"<p>The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.</p>"
        },
        "Description":{
          "shape":"ProvisioningArtifactDescription",
          "documentation":"<p>The description of the provisioning artifact, including how it differs from the previous provisioning artifact.</p>"
        },
        "Info":{
          "shape":"ProvisioningArtifactInfo",
          "documentation":"<p>The URL of the CloudFormation template in Amazon S3. Specify the URL in JSON format as follows:</p> <p> <code>\"LoadTemplateFromURL\": \"https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/...\"</code> </p>"
        },
        "Type":{
          "shape":"ProvisioningArtifactType",
          "documentation":"<p>The type of provisioning artifact.</p> <ul> <li> <p> <code>CLOUD_FORMATION_TEMPLATE</code> - AWS CloudFormation template</p> </li> <li> <p> <code>MARKETPLACE_AMI</code> - AWS Marketplace AMI</p> </li> <li> <p> <code>MARKETPLACE_CAR</code> - AWS Marketplace Clusters and AWS Resources</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about a provisioning artifact (also known as a version) for a product.</p>"
    },
    "ProvisioningArtifactPropertyName":{
      "type":"string",
      "enum":["Id"]
    },
    "ProvisioningArtifactPropertyValue":{"type":"string"},
    "ProvisioningArtifactSummaries":{
      "type":"list",
      "member":{"shape":"ProvisioningArtifactSummary"}
    },
    "ProvisioningArtifactSummary":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "Name":{
          "shape":"ProvisioningArtifactName",
          "documentation":"<p>The name of the provisioning artifact.</p>"
        },
        "Description":{
          "shape":"ProvisioningArtifactDescription",
          "documentation":"<p>The description of the provisioning artifact.</p>"
        },
        "CreatedTime":{
          "shape":"ProvisioningArtifactCreatedTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        },
        "ProvisioningArtifactMetadata":{
          "shape":"ProvisioningArtifactInfo",
          "documentation":"<p>The metadata for the provisioning artifact. This is used with AWS Marketplace products.</p>"
        }
      },
      "documentation":"<p>Summary information about a provisioning artifact (also known as a version) for a product.</p>"
    },
    "ProvisioningArtifactType":{
      "type":"string",
      "enum":[
        "CLOUD_FORMATION_TEMPLATE",
        "MARKETPLACE_AMI",
        "MARKETPLACE_CAR"
      ]
    },
    "ProvisioningArtifacts":{
      "type":"list",
      "member":{"shape":"ProvisioningArtifact"}
    },
    "ProvisioningParameter":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"ParameterKey",
          "documentation":"<p>The parameter key.</p>"
        },
        "Value":{
          "shape":"ParameterValue",
          "documentation":"<p>The parameter value.</p>"
        }
      },
      "documentation":"<p>Information about a parameter used to provision a product.</p>"
    },
    "ProvisioningParameters":{
      "type":"list",
      "member":{"shape":"ProvisioningParameter"}
    },
    "RecordDetail":{
      "type":"structure",
      "members":{
        "RecordId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the record.</p>"
        },
        "ProvisionedProductName":{
          "shape":"ProvisionedProductName",
          "documentation":"<p>The user-friendly name of the provisioned product.</p>"
        },
        "Status":{
          "shape":"RecordStatus",
          "documentation":"<p>The status of the provisioned product.</p> <ul> <li> <p> <code>CREATED</code> - The request was created but the operation has not started.</p> </li> <li> <p> <code>IN_PROGRESS</code> - The requested operation is in progress.</p> </li> <li> <p> <code>IN_PROGRESS_IN_ERROR</code> - The provisioned product is under change but the requested operation failed and some remediation is occurring. For example, a rollback.</p> </li> <li> <p> <code>SUCCEEDED</code> - The requested operation has successfully completed.</p> </li> <li> <p> <code>FAILED</code> - The requested operation has unsuccessfully completed. Investigate using the error messages returned.</p> </li> </ul>"
        },
        "CreatedTime":{
          "shape":"CreatedTime",
          "documentation":"<p>The UTC time stamp of the creation time.</p>"
        },
        "UpdatedTime":{
          "shape":"UpdatedTime",
          "documentation":"<p>The time when the record was last updated.</p>"
        },
        "ProvisionedProductType":{
          "shape":"ProvisionedProductType",
          "documentation":"<p>The type of provisioned product. The supported value is <code>CFN_STACK</code>.</p>"
        },
        "RecordType":{
          "shape":"RecordType",
          "documentation":"<p>The record type.</p> <ul> <li> <p> <code>PROVISION_PRODUCT</code> </p> </li> <li> <p> <code>UPDATE_PROVISIONED_PRODUCT</code> </p> </li> <li> <p> <code>TERMINATE_PROVISIONED_PRODUCT</code> </p> </li> </ul>"
        },
        "ProvisionedProductId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioned product.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "PathId":{
          "shape":"Id",
          "documentation":"<p>The path identifier.</p>"
        },
        "RecordErrors":{
          "shape":"RecordErrors",
          "documentation":"<p>The errors that occurred.</p>"
        },
        "RecordTags":{
          "shape":"RecordTags",
          "documentation":"<p>One or more tags.</p>"
        }
      },
      "documentation":"<p>Information about a request operation.</p>"
    },
    "RecordDetails":{
      "type":"list",
      "member":{"shape":"RecordDetail"}
    },
    "RecordError":{
      "type":"structure",
      "members":{
        "Code":{
          "shape":"ErrorCode",
          "documentation":"<p>The numeric value of the error.</p>"
        },
        "Description":{
          "shape":"ErrorDescription",
          "documentation":"<p>The description of the error.</p>"
        }
      },
      "documentation":"<p>The error code and description resulting from an operation.</p>"
    },
    "RecordErrors":{
      "type":"list",
      "member":{"shape":"RecordError"}
    },
    "RecordOutput":{
      "type":"structure",
      "members":{
        "OutputKey":{
          "shape":"OutputKey",
          "documentation":"<p>The output key.</p>"
        },
        "OutputValue":{
          "shape":"OutputValue",
          "documentation":"<p>The output value.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>The description of the output.</p>"
        }
      },
      "documentation":"<p>The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>"
    },
    "RecordOutputs":{
      "type":"list",
      "member":{"shape":"RecordOutput"}
    },
    "RecordStatus":{
      "type":"string",
      "enum":[
        "CREATED",
        "IN_PROGRESS",
        "IN_PROGRESS_IN_ERROR",
        "SUCCEEDED",
        "FAILED"
      ]
    },
    "RecordTag":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"RecordTagKey",
          "documentation":"<p>The key for this tag.</p>"
        },
        "Value":{
          "shape":"RecordTagValue",
          "documentation":"<p>The value for this tag.</p>"
        }
      },
      "documentation":"<p>Information about a tag, which is a key-value pair.</p>"
    },
    "RecordTagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-%@]*)$"
    },
    "RecordTagValue":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-%@]*)$"
    },
    "RecordTags":{
      "type":"list",
      "member":{"shape":"RecordTag"},
      "max":50
    },
    "RecordType":{"type":"string"},
    "RejectPortfolioShareInput":{
      "type":"structure",
      "required":["PortfolioId"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        }
      }
    },
    "RejectPortfolioShareOutput":{
      "type":"structure",
      "members":{
      }
    },
    "Replacement":{
      "type":"string",
      "enum":[
        "TRUE",
        "FALSE",
        "CONDITIONAL"
      ]
    },
    "RequiresRecreation":{
      "type":"string",
      "enum":[
        "NEVER",
        "CONDITIONALLY",
        "ALWAYS"
      ]
    },
    "ResourceARN":{
      "type":"string",
      "max":150,
      "min":1
    },
    "ResourceAttribute":{
      "type":"string",
      "enum":[
        "PROPERTIES",
        "METADATA",
        "CREATIONPOLICY",
        "UPDATEPOLICY",
        "DELETIONPOLICY",
        "TAGS"
      ]
    },
    "ResourceChange":{
      "type":"structure",
      "members":{
        "Action":{
          "shape":"ChangeAction",
          "documentation":"<p>The change action.</p>"
        },
        "LogicalResourceId":{
          "shape":"LogicalResourceId",
          "documentation":"<p>The ID of the resource, as defined in the CloudFormation template.</p>"
        },
        "PhysicalResourceId":{
          "shape":"PhysicalResourceId",
          "documentation":"<p>The ID of the resource, if it was already created.</p>"
        },
        "ResourceType":{
          "shape":"PlanResourceType",
          "documentation":"<p>The type of resource.</p>"
        },
        "Replacement":{
          "shape":"Replacement",
          "documentation":"<p>If the change type is <code>Modify</code>, indicates whether the existing resource is deleted and replaced with a new one.</p>"
        },
        "Scope":{
          "shape":"Scope",
          "documentation":"<p>The change scope.</p>"
        },
        "Details":{
          "shape":"ResourceChangeDetails",
          "documentation":"<p>Information about the resource changes.</p>"
        }
      },
      "documentation":"<p>Information about a resource change that will occur when a plan is executed.</p>"
    },
    "ResourceChangeDetail":{
      "type":"structure",
      "members":{
        "Target":{
          "shape":"ResourceTargetDefinition",
          "documentation":"<p>Information about the resource attribute to be modified.</p>"
        },
        "Evaluation":{
          "shape":"EvaluationType",
          "documentation":"<p>For static evaluations, the value of the resource attribute will change and the new value is known. For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.</p>"
        },
        "CausingEntity":{
          "shape":"CausingEntity",
          "documentation":"<p>The ID of the entity that caused the change.</p>"
        }
      },
      "documentation":"<p>Information about a change to a resource attribute.</p>"
    },
    "ResourceChangeDetails":{
      "type":"list",
      "member":{"shape":"ResourceChangeDetail"}
    },
    "ResourceChanges":{
      "type":"list",
      "member":{"shape":"ResourceChange"}
    },
    "ResourceDetail":{
      "type":"structure",
      "members":{
        "Id":{
          "shape":"ResourceDetailId",
          "documentation":"<p>The identifier of the resource.</p>"
        },
        "ARN":{
          "shape":"ResourceDetailARN",
          "documentation":"<p>The ARN of the resource.</p>"
        },
        "Name":{
          "shape":"ResourceDetailName",
          "documentation":"<p>The name of the resource.</p>"
        },
        "Description":{
          "shape":"ResourceDetailDescription",
          "documentation":"<p>The description of the resource.</p>"
        },
        "CreatedTime":{
          "shape":"ResourceDetailCreatedTime",
          "documentation":"<p>The creation time of the resource.</p>"
        }
      },
      "documentation":"<p>Information about a resource.</p>"
    },
    "ResourceDetailARN":{"type":"string"},
    "ResourceDetailCreatedTime":{"type":"timestamp"},
    "ResourceDetailDescription":{"type":"string"},
    "ResourceDetailId":{"type":"string"},
    "ResourceDetailName":{"type":"string"},
    "ResourceDetails":{
      "type":"list",
      "member":{"shape":"ResourceDetail"}
    },
    "ResourceId":{"type":"string"},
    "ResourceInUseException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>",
      "exception":true
    },
    "ResourceNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified resource was not found.</p>",
      "exception":true
    },
    "ResourceTargetDefinition":{
      "type":"structure",
      "members":{
        "Attribute":{
          "shape":"ResourceAttribute",
          "documentation":"<p>The attribute to be changed.</p>"
        },
        "Name":{
          "shape":"PropertyName",
          "documentation":"<p>If the attribute is <code>Properties</code>, the value is the name of the property. Otherwise, the value is null.</p>"
        },
        "RequiresRecreation":{
          "shape":"RequiresRecreation",
          "documentation":"<p>If the attribute is <code>Properties</code>, indicates whether a change to this property causes the resource to be re-created.</p>"
        }
      },
      "documentation":"<p>Information about a change to a resource attribute.</p>"
    },
    "ResourceType":{"type":"string"},
    "ScanProvisionedProductsInput":{
      "type":"structure",
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "AccessLevelFilter":{
          "shape":"AccessLevelFilter",
          "documentation":"<p>The access level to use to obtain results. The default is <code>User</code>.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "ScanProvisionedProductsOutput":{
      "type":"structure",
      "members":{
        "ProvisionedProducts":{
          "shape":"ProvisionedProductDetails",
          "documentation":"<p>Information about the provisioned products.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "Scope":{
      "type":"list",
      "member":{"shape":"ResourceAttribute"}
    },
    "SearchFilterKey":{"type":"string"},
    "SearchFilterValue":{"type":"string"},
    "SearchProductsAsAdminInput":{
      "type":"structure",
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "PortfolioId":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "Filters":{
          "shape":"ProductViewFilters",
          "documentation":"<p>The search filters. If no search filters are specified, the output includes all products to which the administrator has access.</p>"
        },
        "SortBy":{
          "shape":"ProductViewSortBy",
          "documentation":"<p>The sort field. If no value is specified, the results are not sorted.</p>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>The sort order. If no value is specified, the results are not sorted.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "ProductSource":{
          "shape":"ProductSource",
          "documentation":"<p>Access level of the source of the product.</p>"
        }
      }
    },
    "SearchProductsAsAdminOutput":{
      "type":"structure",
      "members":{
        "ProductViewDetails":{
          "shape":"ProductViewDetails",
          "documentation":"<p>Information about the product views.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "SearchProductsInput":{
      "type":"structure",
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Filters":{
          "shape":"ProductViewFilters",
          "documentation":"<p>The search filters. If no search filters are specified, the output includes all products to which the caller has access.</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "SortBy":{
          "shape":"ProductViewSortBy",
          "documentation":"<p>The sort field. If no value is specified, the results are not sorted.</p>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>The sort order. If no value is specified, the results are not sorted.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "SearchProductsOutput":{
      "type":"structure",
      "members":{
        "ProductViewSummaries":{
          "shape":"ProductViewSummaries",
          "documentation":"<p>Information about the product views.</p>"
        },
        "ProductViewAggregations":{
          "shape":"ProductViewAggregations",
          "documentation":"<p>The product view aggregations.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "SearchProvisionedProductsInput":{
      "type":"structure",
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "AccessLevelFilter":{
          "shape":"AccessLevelFilter",
          "documentation":"<p>The access level to use to obtain results. The default is <code>User</code>.</p>"
        },
        "Filters":{
          "shape":"ProvisionedProductFilters",
          "documentation":"<p>The search filters.</p> <p>When the key is <code>SearchQuery</code>, the searchable fields are <code>arn</code>, <code>createdTime</code>, <code>id</code>, <code>lastRecordId</code>, <code>idempotencyToken</code>, <code>name</code>, <code>physicalId</code>, <code>productId</code>, <code>provisioningArtifact</code>, <code>type</code>, <code>status</code>, <code>tags</code>, <code>userArn</code>, and <code>userArnSession</code>.</p> <p>Example: <code>\"SearchQuery\":[\"status:AVAILABLE\"]</code> </p>"
        },
        "SortBy":{
          "shape":"SortField",
          "documentation":"<p>The sort field. If no value is specified, the results are not sorted. The valid values are <code>arn</code>, <code>id</code>, <code>name</code>, and <code>lastRecordId</code>.</p>"
        },
        "SortOrder":{
          "shape":"SortOrder",
          "documentation":"<p>The sort order. If no value is specified, the results are not sorted.</p>"
        },
        "PageSize":{
          "shape":"SearchProvisionedProductsPageSize",
          "documentation":"<p>The maximum number of items to return with this call.</p>"
        },
        "PageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token for the next set of results. To retrieve the first set of results, use null.</p>"
        }
      }
    },
    "SearchProvisionedProductsOutput":{
      "type":"structure",
      "members":{
        "ProvisionedProducts":{
          "shape":"ProvisionedProductAttributes",
          "documentation":"<p>Information about the provisioned products.</p>"
        },
        "TotalResultsCount":{
          "shape":"TotalResultsCount",
          "documentation":"<p>The number of provisioned products found.</p>"
        },
        "NextPageToken":{
          "shape":"PageToken",
          "documentation":"<p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>"
        }
      }
    },
    "SearchProvisionedProductsPageSize":{
      "type":"integer",
      "max":100,
      "min":0
    },
    "SortField":{"type":"string"},
    "SortOrder":{
      "type":"string",
      "enum":[
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "SourceProvisioningArtifactProperties":{
      "type":"list",
      "member":{"shape":"SourceProvisioningArtifactPropertiesMap"}
    },
    "SourceProvisioningArtifactPropertiesMap":{
      "type":"map",
      "key":{"shape":"ProvisioningArtifactPropertyName"},
      "value":{"shape":"ProvisioningArtifactPropertyValue"}
    },
    "Status":{
      "type":"string",
      "enum":[
        "AVAILABLE",
        "CREATING",
        "FAILED"
      ]
    },
    "StatusDetail":{"type":"string"},
    "StatusMessage":{
      "type":"string",
      "pattern":"[\\u0009\\u000a\\u000d\\u0020-\\uD7FF\\uE000-\\uFFFD]*"
    },
    "SupportDescription":{
      "type":"string",
      "max":8191
    },
    "SupportEmail":{
      "type":"string",
      "max":254
    },
    "SupportUrl":{
      "type":"string",
      "max":2083
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
          "documentation":"<p>The tag key.</p>"
        },
        "Value":{
          "shape":"TagValue",
          "documentation":"<p>The value for this key.</p>"
        }
      },
      "documentation":"<p>Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product.</p>"
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagKeys":{
      "type":"list",
      "member":{"shape":"TagKey"}
    },
    "TagOptionActive":{"type":"boolean"},
    "TagOptionDetail":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"TagOptionKey",
          "documentation":"<p>The TagOption key.</p>"
        },
        "Value":{
          "shape":"TagOptionValue",
          "documentation":"<p>The TagOption value.</p>"
        },
        "Active":{
          "shape":"TagOptionActive",
          "documentation":"<p>The TagOption active state.</p>"
        },
        "Id":{
          "shape":"TagOptionId",
          "documentation":"<p>The TagOption identifier.</p>"
        }
      },
      "documentation":"<p>Information about a TagOption.</p>"
    },
    "TagOptionDetails":{
      "type":"list",
      "member":{"shape":"TagOptionDetail"}
    },
    "TagOptionId":{
      "type":"string",
      "max":100,
      "min":1
    },
    "TagOptionKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagOptionNotMigratedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An operation requiring TagOptions failed because the TagOptions migration process has not been performed for this account. Please use the AWS console to perform the migration process before retrying the operation.</p>",
      "exception":true
    },
    "TagOptionSummaries":{
      "type":"list",
      "member":{"shape":"TagOptionSummary"}
    },
    "TagOptionSummary":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"TagOptionKey",
          "documentation":"<p>The TagOption key.</p>"
        },
        "Values":{
          "shape":"TagOptionValues",
          "documentation":"<p>The TagOption value.</p>"
        }
      },
      "documentation":"<p>Summary information about a TagOption.</p>"
    },
    "TagOptionValue":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagOptionValues":{
      "type":"list",
      "member":{"shape":"TagOptionValue"}
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "Tags":{
      "type":"list",
      "member":{"shape":"Tag"},
      "max":50
    },
    "TerminateProvisionedProductInput":{
      "type":"structure",
      "required":["TerminateToken"],
      "members":{
        "ProvisionedProductName":{
          "shape":"ProvisionedProductNameOrArn",
          "documentation":"<p>The name of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>"
        },
        "ProvisionedProductId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>"
        },
        "TerminateToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>An idempotency token that uniquely identifies the termination request. This token is only valid during the termination process. After the provisioned product is terminated, subsequent requests to terminate the same provisioned product always return <b>ResourceNotFound</b>.</p>",
          "idempotencyToken":true
        },
        "IgnoreErrors":{
          "shape":"IgnoreErrors",
          "documentation":"<p>If set to true, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.</p>"
        },
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        }
      }
    },
    "TerminateProvisionedProductOutput":{
      "type":"structure",
      "members":{
        "RecordDetail":{
          "shape":"RecordDetail",
          "documentation":"<p>Information about the result of this request.</p>"
        }
      }
    },
    "TotalResultsCount":{"type":"integer"},
    "UpdateConstraintInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The identifier of the constraint.</p>"
        },
        "Description":{
          "shape":"ConstraintDescription",
          "documentation":"<p>The updated description of the constraint.</p>"
        }
      }
    },
    "UpdateConstraintOutput":{
      "type":"structure",
      "members":{
        "ConstraintDetail":{
          "shape":"ConstraintDetail",
          "documentation":"<p>Information about the constraint.</p>"
        },
        "ConstraintParameters":{
          "shape":"ConstraintParameters",
          "documentation":"<p>The constraint parameters.</p>"
        },
        "Status":{
          "shape":"Status",
          "documentation":"<p>The status of the current request.</p>"
        }
      }
    },
    "UpdatePortfolioInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The portfolio identifier.</p>"
        },
        "DisplayName":{
          "shape":"PortfolioDisplayName",
          "documentation":"<p>The name to use for display purposes.</p>"
        },
        "Description":{
          "shape":"PortfolioDescription",
          "documentation":"<p>The updated description of the portfolio.</p>"
        },
        "ProviderName":{
          "shape":"ProviderName",
          "documentation":"<p>The updated name of the portfolio provider.</p>"
        },
        "AddTags":{
          "shape":"AddTags",
          "documentation":"<p>The tags to add.</p>"
        },
        "RemoveTags":{
          "shape":"TagKeys",
          "documentation":"<p>The tags to remove.</p>"
        }
      }
    },
    "UpdatePortfolioOutput":{
      "type":"structure",
      "members":{
        "PortfolioDetail":{
          "shape":"PortfolioDetail",
          "documentation":"<p>Information about the portfolio.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Information about the tags associated with the portfolio.</p>"
        }
      }
    },
    "UpdateProductInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "Id":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "Name":{
          "shape":"ProductViewName",
          "documentation":"<p>The updated product name.</p>"
        },
        "Owner":{
          "shape":"ProductViewOwner",
          "documentation":"<p>The updated owner of the product.</p>"
        },
        "Description":{
          "shape":"ProductViewShortDescription",
          "documentation":"<p>The updated description of the product.</p>"
        },
        "Distributor":{
          "shape":"ProductViewOwner",
          "documentation":"<p>The updated distributor of the product.</p>"
        },
        "SupportDescription":{
          "shape":"SupportDescription",
          "documentation":"<p>The updated support description for the product.</p>"
        },
        "SupportEmail":{
          "shape":"SupportEmail",
          "documentation":"<p>The updated support email for the product.</p>"
        },
        "SupportUrl":{
          "shape":"SupportUrl",
          "documentation":"<p>The updated support URL for the product.</p>"
        },
        "AddTags":{
          "shape":"AddTags",
          "documentation":"<p>The tags to add to the product.</p>"
        },
        "RemoveTags":{
          "shape":"TagKeys",
          "documentation":"<p>The tags to remove from the product.</p>"
        }
      }
    },
    "UpdateProductOutput":{
      "type":"structure",
      "members":{
        "ProductViewDetail":{
          "shape":"ProductViewDetail",
          "documentation":"<p>Information about the product view.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>Information about the tags associated with the product.</p>"
        }
      }
    },
    "UpdateProvisionedProductInput":{
      "type":"structure",
      "required":["UpdateToken"],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProvisionedProductName":{
          "shape":"ProvisionedProductNameOrArn",
          "documentation":"<p>The updated name of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>"
        },
        "ProvisionedProductId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioned product.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "PathId":{
          "shape":"Id",
          "documentation":"<p>The new path identifier. This value is optional if the product has a default path, and required if the product has more than one path.</p>"
        },
        "ProvisioningParameters":{
          "shape":"UpdateProvisioningParameters",
          "documentation":"<p>The new parameters.</p>"
        },
        "UpdateToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>The idempotency token that uniquely identifies the provisioning update request.</p>",
          "idempotencyToken":true
        }
      }
    },
    "UpdateProvisionedProductOutput":{
      "type":"structure",
      "members":{
        "RecordDetail":{
          "shape":"RecordDetail",
          "documentation":"<p>Information about the result of the request.</p>"
        }
      }
    },
    "UpdateProvisioningArtifactInput":{
      "type":"structure",
      "required":[
        "ProductId",
        "ProvisioningArtifactId"
      ],
      "members":{
        "AcceptLanguage":{
          "shape":"AcceptLanguage",
          "documentation":"<p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>"
        },
        "ProductId":{
          "shape":"Id",
          "documentation":"<p>The product identifier.</p>"
        },
        "ProvisioningArtifactId":{
          "shape":"Id",
          "documentation":"<p>The identifier of the provisioning artifact.</p>"
        },
        "Name":{
          "shape":"ProvisioningArtifactName",
          "documentation":"<p>The updated name of the provisioning artifact.</p>"
        },
        "Description":{
          "shape":"ProvisioningArtifactDescription",
          "documentation":"<p>The updated description of the provisioning artifact.</p>"
        },
        "Active":{
          "shape":"ProvisioningArtifactActive",
          "documentation":"<p>Indicates whether the product version is active.</p>"
        }
      }
    },
    "UpdateProvisioningArtifactOutput":{
      "type":"structure",
      "members":{
        "ProvisioningArtifactDetail":{
          "shape":"ProvisioningArtifactDetail",
          "documentation":"<p>Information about the provisioning artifact.</p>"
        },
        "Info":{
          "shape":"ProvisioningArtifactInfo",
          "documentation":"<p>The URL of the CloudFormation template in Amazon S3.</p>"
        },
        "Status":{
          "shape":"Status",
          "documentation":"<p>The status of the current request.</p>"
        }
      }
    },
    "UpdateProvisioningParameter":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"ParameterKey",
          "documentation":"<p>The parameter key.</p>"
        },
        "Value":{
          "shape":"ParameterValue",
          "documentation":"<p>The parameter value.</p>"
        },
        "UsePreviousValue":{
          "shape":"UsePreviousValue",
          "documentation":"<p>If set to true, <code>Value</code> is ignored and the previous parameter value is kept.</p>"
        }
      },
      "documentation":"<p>The parameter key-value pair used to update a provisioned product.</p>"
    },
    "UpdateProvisioningParameters":{
      "type":"list",
      "member":{"shape":"UpdateProvisioningParameter"}
    },
    "UpdateTagOptionInput":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "Id":{
          "shape":"TagOptionId",
          "documentation":"<p>The TagOption identifier.</p>"
        },
        "Value":{
          "shape":"TagOptionValue",
          "documentation":"<p>The updated value.</p>"
        },
        "Active":{
          "shape":"TagOptionActive",
          "documentation":"<p>The updated active state.</p>"
        }
      }
    },
    "UpdateTagOptionOutput":{
      "type":"structure",
      "members":{
        "TagOptionDetail":{
          "shape":"TagOptionDetail",
          "documentation":"<p>Information about the TagOption.</p>"
        }
      }
    },
    "UpdatedTime":{"type":"timestamp"},
    "UsageInstruction":{
      "type":"structure",
      "members":{
        "Type":{
          "shape":"InstructionType",
          "documentation":"<p>The usage instruction type for the value.</p>"
        },
        "Value":{
          "shape":"InstructionValue",
          "documentation":"<p>The usage instruction value for this type.</p>"
        }
      },
      "documentation":"<p>Additional information provided by the administrator.</p>"
    },
    "UsageInstructions":{
      "type":"list",
      "member":{"shape":"UsageInstruction"}
    },
    "UsePreviousValue":{"type":"boolean"},
    "UserArn":{"type":"string"},
    "UserArnSession":{"type":"string"},
    "Verbose":{"type":"boolean"}
  },
  "documentation":"<fullname>AWS Service Catalog</fullname> <p> <a href=\"https://aws.amazon.com/servicecatalog/\">AWS Service Catalog</a> enables organizations to create and manage catalogs of IT services that are approved for use on AWS. To get the most out of this documentation, you should be familiar with the terminology discussed in <a href=\"http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html\">AWS Service Catalog Concepts</a>.</p>"
}
