awsim['mturk'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2017-01-17",
    "endpointPrefix":"mturk-requester",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"Amazon MTurk",
    "serviceFullName":"Amazon Mechanical Turk",
    "serviceId":"MTurk",
    "signatureVersion":"v4",
    "targetPrefix":"MTurkRequesterServiceV20170117",
    "uid":"mturk-requester-2017-01-17"
  },
  "operations":{
    "AcceptQualificationRequest":{
      "name":"AcceptQualificationRequest",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AcceptQualificationRequestRequest"},
      "output":{"shape":"AcceptQualificationRequestResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>"
    },
    "ApproveAssignment":{
      "name":"ApproveAssignment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ApproveAssignmentRequest"},
      "output":{"shape":"ApproveAssignmentResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>",
      "idempotent":true
    },
    "AssociateQualificationWithWorker":{
      "name":"AssociateQualificationWithWorker",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateQualificationWithWorkerRequest"},
      "output":{"shape":"AssociateQualificationWithWorkerResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>"
    },
    "CreateAdditionalAssignmentsForHIT":{
      "name":"CreateAdditionalAssignmentsForHIT",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateAdditionalAssignmentsForHITRequest"},
      "output":{"shape":"CreateAdditionalAssignmentsForHITResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>"
    },
    "CreateHIT":{
      "name":"CreateHIT",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateHITRequest"},
      "output":{"shape":"CreateHITResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href=\"https://requester.mturk.com/pricing\">Amazon Mechanical Turk Pricing</a>.</p> </note>"
    },
    "CreateHITType":{
      "name":"CreateHITType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateHITTypeRequest"},
      "output":{"shape":"CreateHITTypeResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. </p>",
      "idempotent":true
    },
    "CreateHITWithHITType":{
      "name":"CreateHITWithHITType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateHITWithHITTypeRequest"},
      "output":{"shape":"CreateHITWithHITTypeResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href=\"https://requester.mturk.com/pricing\">Amazon Mechanical Turk Pricing</a>. </p> </note>"
    },
    "CreateQualificationType":{
      "name":"CreateQualificationType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateQualificationTypeRequest"},
      "output":{"shape":"CreateQualificationTypeResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. </p>"
    },
    "CreateWorkerBlock":{
      "name":"CreateWorkerBlock",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateWorkerBlockRequest"},
      "output":{"shape":"CreateWorkerBlockResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p>The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.</p>"
    },
    "DeleteHIT":{
      "name":"DeleteHIT",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteHITRequest"},
      "output":{"shape":"DeleteHITResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>",
      "idempotent":true
    },
    "DeleteQualificationType":{
      "name":"DeleteQualificationType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteQualificationTypeRequest"},
      "output":{"shape":"DeleteQualificationTypeResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>",
      "idempotent":true
    },
    "DeleteWorkerBlock":{
      "name":"DeleteWorkerBlock",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteWorkerBlockRequest"},
      "output":{"shape":"DeleteWorkerBlockResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p>The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.</p>",
      "idempotent":true
    },
    "DisassociateQualificationFromWorker":{
      "name":"DisassociateQualificationFromWorker",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateQualificationFromWorkerRequest"},
      "output":{"shape":"DisassociateQualificationFromWorkerResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>"
    },
    "GetAccountBalance":{
      "name":"GetAccountBalance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAccountBalanceRequest"},
      "output":{"shape":"GetAccountBalanceResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p>The <code>GetAccountBalance</code> operation retrieves the amount of money in your Amazon Mechanical Turk account.</p>",
      "idempotent":true
    },
    "GetAssignment":{
      "name":"GetAssignment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetAssignmentRequest"},
      "output":{"shape":"GetAssignmentResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. </p>",
      "idempotent":true
    },
    "GetFileUploadURL":{
      "name":"GetFileUploadURL",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetFileUploadURLRequest"},
      "output":{"shape":"GetFileUploadURLResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. </p>",
      "idempotent":true
    },
    "GetHIT":{
      "name":"GetHIT",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetHITRequest"},
      "output":{"shape":"GetHITResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>GetHIT</code> operation retrieves the details of the specified HIT. </p>",
      "idempotent":true
    },
    "GetQualificationScore":{
      "name":"GetQualificationScore",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetQualificationScoreRequest"},
      "output":{"shape":"GetQualificationScoreResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>",
      "idempotent":true
    },
    "GetQualificationType":{
      "name":"GetQualificationType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetQualificationTypeRequest"},
      "output":{"shape":"GetQualificationTypeResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. </p>",
      "idempotent":true
    },
    "ListAssignmentsForHIT":{
      "name":"ListAssignmentsForHIT",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAssignmentsForHITRequest"},
      "output":{"shape":"ListAssignmentsForHITResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>",
      "idempotent":true
    },
    "ListBonusPayments":{
      "name":"ListBonusPayments",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListBonusPaymentsRequest"},
      "output":{"shape":"ListBonusPaymentsResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. </p>",
      "idempotent":true
    },
    "ListHITs":{
      "name":"ListHITs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListHITsRequest"},
      "output":{"shape":"ListHITsResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. </p>",
      "idempotent":true
    },
    "ListHITsForQualificationType":{
      "name":"ListHITsForQualificationType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListHITsForQualificationTypeRequest"},
      "output":{"shape":"ListHITsForQualificationTypeResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. </p>",
      "idempotent":true
    },
    "ListQualificationRequests":{
      "name":"ListQualificationRequests",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListQualificationRequestsRequest"},
      "output":{"shape":"ListQualificationRequestsResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. </p>",
      "idempotent":true
    },
    "ListQualificationTypes":{
      "name":"ListQualificationTypes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListQualificationTypesRequest"},
      "output":{"shape":"ListQualificationTypesResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. </p>",
      "idempotent":true
    },
    "ListReviewPolicyResultsForHIT":{
      "name":"ListReviewPolicyResultsForHIT",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListReviewPolicyResultsForHITRequest"},
      "output":{"shape":"ListReviewPolicyResultsForHITResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. </p>",
      "idempotent":true
    },
    "ListReviewableHITs":{
      "name":"ListReviewableHITs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListReviewableHITsRequest"},
      "output":{"shape":"ListReviewableHITsResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. </p>",
      "idempotent":true
    },
    "ListWorkerBlocks":{
      "name":"ListWorkerBlocks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListWorkerBlocksRequest"},
      "output":{"shape":"ListWorkerBlocksResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p>The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.</p>",
      "idempotent":true
    },
    "ListWorkersWithQualificationType":{
      "name":"ListWorkersWithQualificationType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListWorkersWithQualificationTypeRequest"},
      "output":{"shape":"ListWorkersWithQualificationTypeResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. </p>",
      "idempotent":true
    },
    "NotifyWorkers":{
      "name":"NotifyWorkers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"NotifyWorkersRequest"},
      "output":{"shape":"NotifyWorkersResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. </p>"
    },
    "RejectAssignment":{
      "name":"RejectAssignment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RejectAssignmentRequest"},
      "output":{"shape":"RejectAssignmentResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>",
      "idempotent":true
    },
    "RejectQualificationRequest":{
      "name":"RejectQualificationRequest",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RejectQualificationRequestRequest"},
      "output":{"shape":"RejectQualificationRequestResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>"
    },
    "SendBonus":{
      "name":"SendBonus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SendBonusRequest"},
      "output":{"shape":"SendBonusResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. </p>"
    },
    "SendTestEventNotification":{
      "name":"SendTestEventNotification",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SendTestEventNotificationRequest"},
      "output":{"shape":"SendTestEventNotificationResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. </p>"
    },
    "UpdateExpirationForHIT":{
      "name":"UpdateExpirationForHIT",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateExpirationForHITRequest"},
      "output":{"shape":"UpdateExpirationForHITResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. </p>",
      "idempotent":true
    },
    "UpdateHITReviewStatus":{
      "name":"UpdateHITReviewStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateHITReviewStatusRequest"},
      "output":{"shape":"UpdateHITReviewStatusResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. </p>",
      "idempotent":true
    },
    "UpdateHITTypeOfHIT":{
      "name":"UpdateHITTypeOfHIT",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateHITTypeOfHITRequest"},
      "output":{"shape":"UpdateHITTypeOfHITResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. </p>",
      "idempotent":true
    },
    "UpdateNotificationSettings":{
      "name":"UpdateNotificationSettings",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateNotificationSettingsRequest"},
      "output":{"shape":"UpdateNotificationSettingsResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. </p>",
      "idempotent":true
    },
    "UpdateQualificationType":{
      "name":"UpdateQualificationType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateQualificationTypeRequest"},
      "output":{"shape":"UpdateQualificationTypeResponse"},
      "errors":[
        {"shape":"ServiceFault"},
        {"shape":"RequestError"}
      ],
      "documentation":"<p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>"
    }
  },
  "shapes":{
    "AcceptQualificationRequestRequest":{
      "type":"structure",
      "required":["QualificationRequestId"],
      "members":{
        "QualificationRequestId":{
          "shape":"String",
          "documentation":"<p>The ID of the Qualification request, as returned by the <code>GetQualificationRequests</code> operation.</p>"
        },
        "IntegerValue":{
          "shape":"Integer",
          "documentation":"<p> The value of the Qualification. You can omit this value if you are using the presence or absence of the Qualification as the basis for a HIT requirement. </p>"
        }
      }
    },
    "AcceptQualificationRequestResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ApproveAssignmentRequest":{
      "type":"structure",
      "required":["AssignmentId"],
      "members":{
        "AssignmentId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the assignment. The assignment must correspond to a HIT created by the Requester. </p>"
        },
        "RequesterFeedback":{
          "shape":"String",
          "documentation":"<p> A message for the Worker, which the Worker can see in the Status section of the web site. </p>"
        },
        "OverrideRejection":{
          "shape":"Boolean",
          "documentation":"<p> A flag indicating that an assignment should be approved even if it was previously rejected. Defaults to <code>False</code>. </p>"
        }
      }
    },
    "ApproveAssignmentResponse":{
      "type":"structure",
      "members":{
      }
    },
    "Assignment":{
      "type":"structure",
      "members":{
        "AssignmentId":{
          "shape":"EntityId",
          "documentation":"<p> A unique identifier for the assignment.</p>"
        },
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p> The ID of the Worker who accepted the HIT.</p>"
        },
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the HIT.</p>"
        },
        "AssignmentStatus":{
          "shape":"AssignmentStatus",
          "documentation":"<p> The status of the assignment.</p>"
        },
        "AutoApprovalTime":{
          "shape":"Timestamp",
          "documentation":"<p> If results have been submitted, AutoApprovalTime is the date and time the results of the assignment results are considered Approved automatically if they have not already been explicitly approved or rejected by the Requester. This value is derived from the auto-approval delay specified by the Requester in the HIT. This value is omitted from the assignment if the Worker has not yet submitted results.</p>"
        },
        "AcceptTime":{
          "shape":"Timestamp",
          "documentation":"<p> The date and time the Worker accepted the assignment.</p>"
        },
        "SubmitTime":{
          "shape":"Timestamp",
          "documentation":"<p> If the Worker has submitted results, SubmitTime is the date and time the assignment was submitted. This value is omitted from the assignment if the Worker has not yet submitted results.</p>"
        },
        "ApprovalTime":{
          "shape":"Timestamp",
          "documentation":"<p> If the Worker has submitted results and the Requester has approved the results, ApprovalTime is the date and time the Requester approved the results. This value is omitted from the assignment if the Requester has not yet approved the results.</p>"
        },
        "RejectionTime":{
          "shape":"Timestamp",
          "documentation":"<p> If the Worker has submitted results and the Requester has rejected the results, RejectionTime is the date and time the Requester rejected the results.</p>"
        },
        "Deadline":{
          "shape":"Timestamp",
          "documentation":"<p> The date and time of the deadline for the assignment. This value is derived from the deadline specification for the HIT and the date and time the Worker accepted the HIT.</p>"
        },
        "Answer":{
          "shape":"String",
          "documentation":"<p> The Worker's answers submitted for the HIT contained in a QuestionFormAnswers document, if the Worker provides an answer. If the Worker does not provide any answers, Answer may contain a QuestionFormAnswers document, or Answer may be empty.</p>"
        },
        "RequesterFeedback":{
          "shape":"String",
          "documentation":"<p> The feedback string included with the call to the ApproveAssignment operation or the RejectAssignment operation, if the Requester approved or rejected the assignment and specified feedback.</p>"
        }
      },
      "documentation":"<p> The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval. </p>"
    },
    "AssignmentList":{
      "type":"list",
      "member":{"shape":"Assignment"}
    },
    "AssignmentStatus":{
      "type":"string",
      "enum":[
        "Submitted",
        "Approved",
        "Rejected"
      ]
    },
    "AssignmentStatusList":{
      "type":"list",
      "member":{"shape":"AssignmentStatus"}
    },
    "AssociateQualificationWithWorkerRequest":{
      "type":"structure",
      "required":[
        "QualificationTypeId",
        "WorkerId"
      ],
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the Qualification type to use for the assigned Qualification.</p>"
        },
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p> The ID of the Worker to whom the Qualification is being assigned. Worker IDs are included with submitted HIT assignments and Qualification requests. </p>"
        },
        "IntegerValue":{
          "shape":"Integer",
          "documentation":"<p>The value of the Qualification to assign.</p>"
        },
        "SendNotification":{
          "shape":"Boolean",
          "documentation":"<p> Specifies whether to send a notification email message to the Worker saying that the qualification was assigned to the Worker. Note: this is true by default. </p>"
        }
      }
    },
    "AssociateQualificationWithWorkerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "BonusPayment":{
      "type":"structure",
      "members":{
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p>The ID of the Worker to whom the bonus was paid.</p>"
        },
        "BonusAmount":{"shape":"CurrencyAmount"},
        "AssignmentId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the assignment associated with this bonus payment.</p>"
        },
        "Reason":{
          "shape":"String",
          "documentation":"<p>The Reason text given when the bonus was granted, if any.</p>"
        },
        "GrantTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time of when the bonus was granted.</p>"
        }
      },
      "documentation":"<p>An object representing a Bonus payment paid to a Worker.</p>"
    },
    "BonusPaymentList":{
      "type":"list",
      "member":{"shape":"BonusPayment"}
    },
    "Boolean":{"type":"boolean"},
    "Comparator":{
      "type":"string",
      "enum":[
        "LessThan",
        "LessThanOrEqualTo",
        "GreaterThan",
        "GreaterThanOrEqualTo",
        "EqualTo",
        "NotEqualTo",
        "Exists",
        "DoesNotExist",
        "In",
        "NotIn"
      ]
    },
    "CountryParameters":{
      "type":"string",
      "max":2,
      "min":2
    },
    "CreateAdditionalAssignmentsForHITRequest":{
      "type":"structure",
      "required":[
        "HITId",
        "NumberOfAdditionalAssignments"
      ],
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the HIT to extend.</p>"
        },
        "NumberOfAdditionalAssignments":{
          "shape":"Integer",
          "documentation":"<p>The number of additional assignments to request for this HIT.</p>"
        },
        "UniqueRequestToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p> A unique identifier for this request, which allows you to retry the call on error without extending the HIT multiple times. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the extend HIT already exists in the system from a previous call using the same <code>UniqueRequestToken</code>, subsequent calls will return an error with a message containing the request ID. </p>"
        }
      }
    },
    "CreateAdditionalAssignmentsForHITResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CreateHITRequest":{
      "type":"structure",
      "required":[
        "LifetimeInSeconds",
        "AssignmentDurationInSeconds",
        "Reward",
        "Title",
        "Description"
      ],
      "members":{
        "MaxAssignments":{
          "shape":"Integer",
          "documentation":"<p> The number of times the HIT can be accepted and completed before the HIT becomes unavailable. </p>"
        },
        "AutoApprovalDelayInSeconds":{
          "shape":"Long",
          "documentation":"<p> The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it. </p>"
        },
        "LifetimeInSeconds":{
          "shape":"Long",
          "documentation":"<p> An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted. </p>"
        },
        "AssignmentDurationInSeconds":{
          "shape":"Long",
          "documentation":"<p> The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept. </p>"
        },
        "Reward":{
          "shape":"CurrencyAmount",
          "documentation":"<p> The amount of money the Requester will pay a Worker for successfully completing the HIT. </p>"
        },
        "Title":{
          "shape":"String",
          "documentation":"<p> The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned. </p>"
        },
        "Keywords":{
          "shape":"String",
          "documentation":"<p> One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs. </p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p> A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it. </p>"
        },
        "Question":{
          "shape":"String",
          "documentation":"<p> The data the person completing the HIT uses to produce the results. </p> <p> Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace. </p> <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>"
        },
        "RequesterAnnotation":{
          "shape":"String",
          "documentation":"<p> An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT. </p> <p> The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester. </p> <p> The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped. </p>"
        },
        "QualificationRequirements":{
          "shape":"QualificationRequirementList",
          "documentation":"<p> Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. </p>"
        },
        "UniqueRequestToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p> A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId. </p> <note> <p> Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs. </p> </note>"
        },
        "AssignmentReviewPolicy":{
          "shape":"ReviewPolicy",
          "documentation":"<p> The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy. </p>"
        },
        "HITReviewPolicy":{
          "shape":"ReviewPolicy",
          "documentation":"<p> The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy. </p>"
        },
        "HITLayoutId":{
          "shape":"EntityId",
          "documentation":"<p> The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters. </p> <p> Constraints: Either a Question parameter or a HITLayoutId parameter must be provided. </p>"
        },
        "HITLayoutParameters":{
          "shape":"HITLayoutParameterList",
          "documentation":"<p> If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout. </p>"
        }
      }
    },
    "CreateHITResponse":{
      "type":"structure",
      "members":{
        "HIT":{
          "shape":"HIT",
          "documentation":"<p> Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation. </p>"
        }
      }
    },
    "CreateHITTypeRequest":{
      "type":"structure",
      "required":[
        "AssignmentDurationInSeconds",
        "Reward",
        "Title",
        "Description"
      ],
      "members":{
        "AutoApprovalDelayInSeconds":{
          "shape":"Long",
          "documentation":"<p> The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it. </p>"
        },
        "AssignmentDurationInSeconds":{
          "shape":"Long",
          "documentation":"<p> The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept. </p>"
        },
        "Reward":{
          "shape":"CurrencyAmount",
          "documentation":"<p> The amount of money the Requester will pay a Worker for successfully completing the HIT. </p>"
        },
        "Title":{
          "shape":"String",
          "documentation":"<p> The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned. </p>"
        },
        "Keywords":{
          "shape":"String",
          "documentation":"<p> One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs. </p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p> A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it. </p>"
        },
        "QualificationRequirements":{
          "shape":"QualificationRequirementList",
          "documentation":"<p> Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. </p>"
        }
      }
    },
    "CreateHITTypeResponse":{
      "type":"structure",
      "members":{
        "HITTypeId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the newly registered HIT type.</p>"
        }
      }
    },
    "CreateHITWithHITTypeRequest":{
      "type":"structure",
      "required":[
        "HITTypeId",
        "LifetimeInSeconds"
      ],
      "members":{
        "HITTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The HIT type ID you want to create this HIT with.</p>"
        },
        "MaxAssignments":{
          "shape":"Integer",
          "documentation":"<p> The number of times the HIT can be accepted and completed before the HIT becomes unavailable. </p>"
        },
        "LifetimeInSeconds":{
          "shape":"Long",
          "documentation":"<p> An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted. </p>"
        },
        "Question":{
          "shape":"String",
          "documentation":"<p> The data the person completing the HIT uses to produce the results. </p> <p> Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace. </p> <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>"
        },
        "RequesterAnnotation":{
          "shape":"String",
          "documentation":"<p> An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT. </p> <p> The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester. </p> <p> The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped. </p>"
        },
        "UniqueRequestToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p> A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId. </p> <note> <p> Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs. </p> </note>"
        },
        "AssignmentReviewPolicy":{
          "shape":"ReviewPolicy",
          "documentation":"<p> The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy. </p>"
        },
        "HITReviewPolicy":{
          "shape":"ReviewPolicy",
          "documentation":"<p> The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy. </p>"
        },
        "HITLayoutId":{
          "shape":"EntityId",
          "documentation":"<p> The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters. </p> <p> Constraints: Either a Question parameter or a HITLayoutId parameter must be provided. </p>"
        },
        "HITLayoutParameters":{
          "shape":"HITLayoutParameterList",
          "documentation":"<p> If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout. </p>"
        }
      }
    },
    "CreateHITWithHITTypeResponse":{
      "type":"structure",
      "members":{
        "HIT":{
          "shape":"HIT",
          "documentation":"<p> Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation. </p>"
        }
      }
    },
    "CreateQualificationTypeRequest":{
      "type":"structure",
      "required":[
        "Name",
        "Description",
        "QualificationTypeStatus"
      ],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p> The name you give to the Qualification type. The type name is used to represent the Qualification to Workers, and to find the type using a Qualification type search. It must be unique across all of your Qualification types.</p>"
        },
        "Keywords":{
          "shape":"String",
          "documentation":"<p>One or more words or phrases that describe the Qualification type, separated by commas. The keywords of a type make the type easier to find during a search.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>A long description for the Qualification type. On the Amazon Mechanical Turk website, the long description is displayed when a Worker examines a Qualification type.</p>"
        },
        "QualificationTypeStatus":{
          "shape":"QualificationTypeStatus",
          "documentation":"<p>The initial status of the Qualification type.</p> <p>Constraints: Valid values are: Active | Inactive</p>"
        },
        "RetryDelayInSeconds":{
          "shape":"Long",
          "documentation":"<p>The number of seconds that a Worker must wait after requesting a Qualification of the Qualification type before the worker can retry the Qualification request.</p> <p>Constraints: None. If not specified, retries are disabled and Workers can request a Qualification of this type only once, even if the Worker has not been granted the Qualification. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must delete existing retry-enabled Qualification type and then create a new Qualification type with retries disabled.</p>"
        },
        "Test":{
          "shape":"String",
          "documentation":"<p> The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified. </p> <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p> <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>"
        },
        "AnswerKey":{
          "shape":"String",
          "documentation":"<p>The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.</p> <p>Constraints: Must not be longer than 65535 bytes.</p> <p>Constraints: None. If not specified, you must process Qualification requests manually.</p>"
        },
        "TestDurationInSeconds":{
          "shape":"Long",
          "documentation":"<p>The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.</p>"
        },
        "AutoGranted":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p> <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>"
        },
        "AutoGrantedValue":{
          "shape":"Integer",
          "documentation":"<p>The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.</p>"
        }
      }
    },
    "CreateQualificationTypeResponse":{
      "type":"structure",
      "members":{
        "QualificationType":{
          "shape":"QualificationType",
          "documentation":"<p>The created Qualification type, returned as a QualificationType data structure.</p>"
        }
      }
    },
    "CreateWorkerBlockRequest":{
      "type":"structure",
      "required":[
        "WorkerId",
        "Reason"
      ],
      "members":{
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p>The ID of the Worker to block.</p>"
        },
        "Reason":{
          "shape":"String",
          "documentation":"<p>A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.</p>"
        }
      }
    },
    "CreateWorkerBlockResponse":{
      "type":"structure",
      "members":{
      }
    },
    "CurrencyAmount":{
      "type":"string",
      "documentation":"<p>A string representing a currency amount.</p>",
      "pattern":"^[0-9]+(\\.)?[0-9]{0,2}$"
    },
    "CustomerId":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"^A[A-Z0-9]+$"
    },
    "CustomerIdList":{
      "type":"list",
      "member":{"shape":"CustomerId"}
    },
    "DeleteHITRequest":{
      "type":"structure",
      "required":["HITId"],
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the HIT to be deleted.</p>"
        }
      }
    },
    "DeleteHITResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteQualificationTypeRequest":{
      "type":"structure",
      "required":["QualificationTypeId"],
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the QualificationType to dispose.</p>"
        }
      }
    },
    "DeleteQualificationTypeResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteWorkerBlockRequest":{
      "type":"structure",
      "required":["WorkerId"],
      "members":{
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p>The ID of the Worker to unblock.</p>"
        },
        "Reason":{
          "shape":"String",
          "documentation":"<p>A message that explains the reason for unblocking the Worker. The Worker does not see this message.</p>"
        }
      }
    },
    "DeleteWorkerBlockResponse":{
      "type":"structure",
      "members":{
      }
    },
    "DisassociateQualificationFromWorkerRequest":{
      "type":"structure",
      "required":[
        "WorkerId",
        "QualificationTypeId"
      ],
      "members":{
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p>The ID of the Worker who possesses the Qualification to be revoked.</p>"
        },
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the Qualification type of the Qualification to be revoked.</p>"
        },
        "Reason":{
          "shape":"String",
          "documentation":"<p>A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.</p>"
        }
      }
    },
    "DisassociateQualificationFromWorkerResponse":{
      "type":"structure",
      "members":{
      }
    },
    "EntityId":{
      "type":"string",
      "max":64,
      "min":1,
      "pattern":"^[A-Z0-9]+$"
    },
    "EventType":{
      "type":"string",
      "enum":[
        "AssignmentAccepted",
        "AssignmentAbandoned",
        "AssignmentReturned",
        "AssignmentSubmitted",
        "AssignmentRejected",
        "AssignmentApproved",
        "HITCreated",
        "HITExpired",
        "HITReviewable",
        "HITExtended",
        "HITDisposed",
        "Ping"
      ]
    },
    "EventTypeList":{
      "type":"list",
      "member":{"shape":"EventType"}
    },
    "ExceptionMessage":{"type":"string"},
    "GetAccountBalanceRequest":{
      "type":"structure",
      "members":{
      }
    },
    "GetAccountBalanceResponse":{
      "type":"structure",
      "members":{
        "AvailableBalance":{"shape":"CurrencyAmount"},
        "OnHoldBalance":{"shape":"CurrencyAmount"}
      }
    },
    "GetAssignmentRequest":{
      "type":"structure",
      "required":["AssignmentId"],
      "members":{
        "AssignmentId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the Assignment to be retrieved.</p>"
        }
      }
    },
    "GetAssignmentResponse":{
      "type":"structure",
      "members":{
        "Assignment":{
          "shape":"Assignment",
          "documentation":"<p> The assignment. The response includes one Assignment element. </p>"
        },
        "HIT":{
          "shape":"HIT",
          "documentation":"<p> The HIT associated with this assignment. The response includes one HIT element.</p>"
        }
      }
    },
    "GetFileUploadURLRequest":{
      "type":"structure",
      "required":[
        "AssignmentId",
        "QuestionIdentifier"
      ],
      "members":{
        "AssignmentId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the assignment that contains the question with a FileUploadAnswer.</p>"
        },
        "QuestionIdentifier":{
          "shape":"String",
          "documentation":"<p>The identifier of the question with a FileUploadAnswer, as specified in the QuestionForm of the HIT.</p>"
        }
      }
    },
    "GetFileUploadURLResponse":{
      "type":"structure",
      "members":{
        "FileUploadURL":{
          "shape":"String",
          "documentation":"<p> A temporary URL for the file that the Worker uploaded for the answer. </p>"
        }
      }
    },
    "GetHITRequest":{
      "type":"structure",
      "required":["HITId"],
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the HIT to be retrieved.</p>"
        }
      }
    },
    "GetHITResponse":{
      "type":"structure",
      "members":{
        "HIT":{
          "shape":"HIT",
          "documentation":"<p> Contains the requested HIT data.</p>"
        }
      }
    },
    "GetQualificationScoreRequest":{
      "type":"structure",
      "required":[
        "QualificationTypeId",
        "WorkerId"
      ],
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the QualificationType.</p>"
        },
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p>The ID of the Worker whose Qualification is being updated.</p>"
        }
      }
    },
    "GetQualificationScoreResponse":{
      "type":"structure",
      "members":{
        "Qualification":{
          "shape":"Qualification",
          "documentation":"<p> The Qualification data structure of the Qualification assigned to a user, including the Qualification type and the value (score). </p>"
        }
      }
    },
    "GetQualificationTypeRequest":{
      "type":"structure",
      "required":["QualificationTypeId"],
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the QualificationType.</p>"
        }
      }
    },
    "GetQualificationTypeResponse":{
      "type":"structure",
      "members":{
        "QualificationType":{
          "shape":"QualificationType",
          "documentation":"<p> The returned Qualification Type</p>"
        }
      }
    },
    "HIT":{
      "type":"structure",
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p> A unique identifier for the HIT.</p>"
        },
        "HITTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the HIT type of this HIT</p>"
        },
        "HITGroupId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the HIT Group of this HIT.</p>"
        },
        "HITLayoutId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the HIT Layout of this HIT.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p> The date and time the HIT was created.</p>"
        },
        "Title":{
          "shape":"String",
          "documentation":"<p> The title of the HIT.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p> A general description of the HIT.</p>"
        },
        "Question":{
          "shape":"String",
          "documentation":"<p> The data the Worker completing the HIT uses produce the results. This is either either a QuestionForm, HTMLQuestion or an ExternalQuestion data structure.</p>"
        },
        "Keywords":{
          "shape":"String",
          "documentation":"<p> One or more words or phrases that describe the HIT, separated by commas. Search terms similar to the keywords of a HIT are more likely to have the HIT in the search results.</p>"
        },
        "HITStatus":{
          "shape":"HITStatus",
          "documentation":"<p>The status of the HIT and its assignments. Valid Values are Assignable | Unassignable | Reviewable | Reviewing | Disposed. </p>"
        },
        "MaxAssignments":{
          "shape":"Integer",
          "documentation":"<p>The number of times the HIT can be accepted and completed before the HIT becomes unavailable. </p>"
        },
        "Reward":{"shape":"CurrencyAmount"},
        "AutoApprovalDelayInSeconds":{
          "shape":"Long",
          "documentation":"<p>The amount of time, in seconds, after the Worker submits an assignment for the HIT that the results are automatically approved by Amazon Mechanical Turk. This is the amount of time the Requester has to reject an assignment submitted by a Worker before the assignment is auto-approved and the Worker is paid. </p>"
        },
        "Expiration":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the HIT expires.</p>"
        },
        "AssignmentDurationInSeconds":{
          "shape":"Long",
          "documentation":"<p> The length of time, in seconds, that a Worker has to complete the HIT after accepting it.</p>"
        },
        "RequesterAnnotation":{
          "shape":"String",
          "documentation":"<p> An arbitrary data field the Requester who created the HIT can use. This field is visible only to the creator of the HIT.</p>"
        },
        "QualificationRequirements":{
          "shape":"QualificationRequirementList",
          "documentation":"<p> Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. </p>"
        },
        "HITReviewStatus":{
          "shape":"HITReviewStatus",
          "documentation":"<p> Indicates the review status of the HIT. Valid Values are NotReviewed | MarkedForReview | ReviewedAppropriate | ReviewedInappropriate.</p>"
        },
        "NumberOfAssignmentsPending":{
          "shape":"Integer",
          "documentation":"<p> The number of assignments for this HIT that are being previewed or have been accepted by Workers, but have not yet been submitted, returned, or abandoned.</p>"
        },
        "NumberOfAssignmentsAvailable":{
          "shape":"Integer",
          "documentation":"<p> The number of assignments for this HIT that are available for Workers to accept.</p>"
        },
        "NumberOfAssignmentsCompleted":{
          "shape":"Integer",
          "documentation":"<p> The number of assignments for this HIT that have been approved or rejected.</p>"
        }
      },
      "documentation":"<p> The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.</p>"
    },
    "HITAccessActions":{
      "type":"string",
      "enum":[
        "Accept",
        "PreviewAndAccept",
        "DiscoverPreviewAndAccept"
      ]
    },
    "HITLayoutParameter":{
      "type":"structure",
      "required":[
        "Name",
        "Value"
      ],
      "members":{
        "Name":{
          "shape":"String",
          "documentation":"<p> The name of the parameter in the HITLayout. </p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p>The value substituted for the parameter referenced in the HITLayout. </p>"
        }
      },
      "documentation":"<p> The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT. </p>"
    },
    "HITLayoutParameterList":{
      "type":"list",
      "member":{"shape":"HITLayoutParameter"}
    },
    "HITList":{
      "type":"list",
      "member":{"shape":"HIT"}
    },
    "HITReviewStatus":{
      "type":"string",
      "enum":[
        "NotReviewed",
        "MarkedForReview",
        "ReviewedAppropriate",
        "ReviewedInappropriate"
      ]
    },
    "HITStatus":{
      "type":"string",
      "enum":[
        "Assignable",
        "Unassignable",
        "Reviewable",
        "Reviewing",
        "Disposed"
      ]
    },
    "IdempotencyToken":{
      "type":"string",
      "max":64,
      "min":1
    },
    "Integer":{"type":"integer"},
    "IntegerList":{
      "type":"list",
      "member":{"shape":"Integer"}
    },
    "ListAssignmentsForHITRequest":{
      "type":"structure",
      "required":["HITId"],
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the HIT.</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>Pagination token</p>"
        },
        "MaxResults":{"shape":"ResultSize"},
        "AssignmentStatuses":{
          "shape":"AssignmentStatusList",
          "documentation":"<p>The status of the assignments to return: Submitted | Approved | Rejected</p>"
        }
      }
    },
    "ListAssignmentsForHITResponse":{
      "type":"structure",
      "members":{
        "NextToken":{"shape":"PaginationToken"},
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p> The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.</p>"
        },
        "Assignments":{
          "shape":"AssignmentList",
          "documentation":"<p> The collection of Assignment data structures returned by this call.</p>"
        }
      }
    },
    "ListBonusPaymentsRequest":{
      "type":"structure",
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the HIT associated with the bonus payments to retrieve. If not specified, all bonus payments for all assignments for the given HIT are returned. Either the HITId parameter or the AssignmentId parameter must be specified</p>"
        },
        "AssignmentId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the assignment associated with the bonus payments to retrieve. If specified, only bonus payments for the given assignment are returned. Either the HITId parameter or the AssignmentId parameter must be specified</p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>Pagination token</p>"
        },
        "MaxResults":{"shape":"ResultSize"}
      }
    },
    "ListBonusPaymentsResponse":{
      "type":"structure",
      "members":{
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p>The number of bonus payments on this page in the filtered results list, equivalent to the number of bonus payments being returned by this call. </p>"
        },
        "NextToken":{"shape":"PaginationToken"},
        "BonusPayments":{
          "shape":"BonusPaymentList",
          "documentation":"<p>A successful request to the ListBonusPayments operation returns a list of BonusPayment objects. </p>"
        }
      }
    },
    "ListHITsForQualificationTypeRequest":{
      "type":"structure",
      "required":["QualificationTypeId"],
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the Qualification type to use when querying HITs. </p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>Pagination Token</p>"
        },
        "MaxResults":{
          "shape":"ResultSize",
          "documentation":"<p> Limit the number of results returned. </p>"
        }
      }
    },
    "ListHITsForQualificationTypeResponse":{
      "type":"structure",
      "members":{
        "NextToken":{"shape":"PaginationToken"},
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p> The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call. </p>"
        },
        "HITs":{
          "shape":"HITList",
          "documentation":"<p> The list of HIT elements returned by the query.</p>"
        }
      }
    },
    "ListHITsRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>Pagination token</p>"
        },
        "MaxResults":{"shape":"ResultSize"}
      }
    },
    "ListHITsResponse":{
      "type":"structure",
      "members":{
        "NextToken":{"shape":"PaginationToken"},
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p>The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call.</p>"
        },
        "HITs":{
          "shape":"HITList",
          "documentation":"<p> The list of HIT elements returned by the query.</p>"
        }
      }
    },
    "ListQualificationRequestsRequest":{
      "type":"structure",
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the QualificationType.</p>"
        },
        "NextToken":{"shape":"PaginationToken"},
        "MaxResults":{
          "shape":"ResultSize",
          "documentation":"<p> The maximum number of results to return in a single call. </p>"
        }
      }
    },
    "ListQualificationRequestsResponse":{
      "type":"structure",
      "members":{
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p>The number of Qualification requests on this page in the filtered results list, equivalent to the number of Qualification requests being returned by this call.</p>"
        },
        "NextToken":{"shape":"PaginationToken"},
        "QualificationRequests":{
          "shape":"QualificationRequestList",
          "documentation":"<p>The Qualification request. The response includes one QualificationRequest element for each Qualification request returned by the query.</p>"
        }
      }
    },
    "ListQualificationTypesRequest":{
      "type":"structure",
      "required":["MustBeRequestable"],
      "members":{
        "Query":{
          "shape":"String",
          "documentation":"<p> A text query against all of the searchable attributes of Qualification types. </p>"
        },
        "MustBeRequestable":{
          "shape":"Boolean",
          "documentation":"<p>Specifies that only Qualification types that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test, are returned as results of the search. Some Qualification types, such as those assigned automatically by the system, cannot be requested directly by users. If false, all Qualification types, including those managed by the system, are considered. Valid values are True | False. </p>"
        },
        "MustBeOwnedByCaller":{
          "shape":"Boolean",
          "documentation":"<p> Specifies that only Qualification types that the Requester created are returned. If false, the operation returns all Qualification types. </p>"
        },
        "NextToken":{"shape":"PaginationToken"},
        "MaxResults":{
          "shape":"ResultSize",
          "documentation":"<p> The maximum number of results to return in a single call. </p>"
        }
      }
    },
    "ListQualificationTypesResponse":{
      "type":"structure",
      "members":{
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p> The number of Qualification types on this page in the filtered results list, equivalent to the number of types this operation returns. </p>"
        },
        "NextToken":{"shape":"PaginationToken"},
        "QualificationTypes":{
          "shape":"QualificationTypeList",
          "documentation":"<p> The list of QualificationType elements returned by the query. </p>"
        }
      }
    },
    "ListReviewPolicyResultsForHITRequest":{
      "type":"structure",
      "required":["HITId"],
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p>The unique identifier of the HIT to retrieve review results for.</p>"
        },
        "PolicyLevels":{
          "shape":"ReviewPolicyLevelList",
          "documentation":"<p> The Policy Level(s) to retrieve review results for - HIT or Assignment. If omitted, the default behavior is to retrieve all data for both policy levels. For a list of all the described policies, see Review Policies. </p>"
        },
        "RetrieveActions":{
          "shape":"Boolean",
          "documentation":"<p> Specify if the operation should retrieve a list of the actions taken executing the Review Policies and their outcomes. </p>"
        },
        "RetrieveResults":{
          "shape":"Boolean",
          "documentation":"<p> Specify if the operation should retrieve a list of the results computed by the Review Policies. </p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>Pagination token</p>"
        },
        "MaxResults":{
          "shape":"ResultSize",
          "documentation":"<p>Limit the number of results returned.</p>"
        }
      }
    },
    "ListReviewPolicyResultsForHITResponse":{
      "type":"structure",
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p>The HITId of the HIT for which results have been returned.</p>"
        },
        "AssignmentReviewPolicy":{
          "shape":"ReviewPolicy",
          "documentation":"<p> The name of the Assignment-level Review Policy. This contains only the PolicyName element. </p>"
        },
        "HITReviewPolicy":{
          "shape":"ReviewPolicy",
          "documentation":"<p>The name of the HIT-level Review Policy. This contains only the PolicyName element.</p>"
        },
        "AssignmentReviewReport":{
          "shape":"ReviewReport",
          "documentation":"<p> Contains both ReviewResult and ReviewAction elements for an Assignment. </p>"
        },
        "HITReviewReport":{
          "shape":"ReviewReport",
          "documentation":"<p>Contains both ReviewResult and ReviewAction elements for a particular HIT. </p>"
        },
        "NextToken":{"shape":"PaginationToken"}
      }
    },
    "ListReviewableHITsRequest":{
      "type":"structure",
      "members":{
        "HITTypeId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the HIT type of the HITs to consider for the query. If not specified, all HITs for the Reviewer are considered </p>"
        },
        "Status":{
          "shape":"ReviewableHITStatus",
          "documentation":"<p> Can be either <code>Reviewable</code> or <code>Reviewing</code>. Reviewable is the default value. </p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>Pagination Token</p>"
        },
        "MaxResults":{
          "shape":"ResultSize",
          "documentation":"<p> Limit the number of results returned. </p>"
        }
      }
    },
    "ListReviewableHITsResponse":{
      "type":"structure",
      "members":{
        "NextToken":{"shape":"PaginationToken"},
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p> The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call. </p>"
        },
        "HITs":{
          "shape":"HITList",
          "documentation":"<p> The list of HIT elements returned by the query.</p>"
        }
      }
    },
    "ListWorkerBlocksRequest":{
      "type":"structure",
      "members":{
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>Pagination token</p>"
        },
        "MaxResults":{"shape":"ResultSize"}
      }
    },
    "ListWorkerBlocksResponse":{
      "type":"structure",
      "members":{
        "NextToken":{"shape":"PaginationToken"},
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p> The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.</p>"
        },
        "WorkerBlocks":{
          "shape":"WorkerBlockList",
          "documentation":"<p> The list of WorkerBlocks, containing the collection of Worker IDs and reasons for blocking.</p>"
        }
      }
    },
    "ListWorkersWithQualificationTypeRequest":{
      "type":"structure",
      "required":["QualificationTypeId"],
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the Qualification type of the Qualifications to return.</p>"
        },
        "Status":{
          "shape":"QualificationStatus",
          "documentation":"<p> The status of the Qualifications to return. Can be <code>Granted | Revoked</code>. </p>"
        },
        "NextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>Pagination Token</p>"
        },
        "MaxResults":{
          "shape":"ResultSize",
          "documentation":"<p> Limit the number of results returned. </p>"
        }
      }
    },
    "ListWorkersWithQualificationTypeResponse":{
      "type":"structure",
      "members":{
        "NextToken":{"shape":"PaginationToken"},
        "NumResults":{
          "shape":"Integer",
          "documentation":"<p> The number of Qualifications on this page in the filtered results list, equivalent to the number of Qualifications being returned by this call.</p>"
        },
        "Qualifications":{
          "shape":"QualificationList",
          "documentation":"<p> The list of Qualification elements returned by this call. </p>"
        }
      }
    },
    "Locale":{
      "type":"structure",
      "required":["Country"],
      "members":{
        "Country":{
          "shape":"CountryParameters",
          "documentation":"<p> The country of the locale. Must be a valid ISO 3166 country code. For example, the code US refers to the United States of America. </p>"
        },
        "Subdivision":{
          "shape":"CountryParameters",
          "documentation":"<p>The state or subdivision of the locale. A valid ISO 3166-2 subdivision code. For example, the code WA refers to the state of Washington.</p>"
        }
      },
      "documentation":"<p>The Locale data structure represents a geographical region or location.</p>"
    },
    "LocaleList":{
      "type":"list",
      "member":{"shape":"Locale"}
    },
    "Long":{"type":"long"},
    "NotificationSpecification":{
      "type":"structure",
      "required":[
        "Destination",
        "Transport",
        "Version",
        "EventTypes"
      ],
      "members":{
        "Destination":{
          "shape":"String",
          "documentation":"<p> The target for notification messages. The Destination’s format is determined by the specified Transport: </p> <ul> <li> <p>When Transport is Email, the Destination is your email address.</p> </li> <li> <p>When Transport is SQS, the Destination is your queue URL.</p> </li> <li> <p>When Transport is SNS, the Destination is the ARN of your topic.</p> </li> </ul>"
        },
        "Transport":{
          "shape":"NotificationTransport",
          "documentation":"<p> The method Amazon Mechanical Turk uses to send the notification. Valid Values: Email | SQS | SNS. </p>"
        },
        "Version":{
          "shape":"String",
          "documentation":"<p>The version of the Notification API to use. Valid value is 2006-05-05.</p>"
        },
        "EventTypes":{
          "shape":"EventTypeList",
          "documentation":"<p> The list of events that should cause notifications to be sent. Valid Values: AssignmentAccepted | AssignmentAbandoned | AssignmentReturned | AssignmentSubmitted | AssignmentRejected | AssignmentApproved | HITCreated | HITExtended | HITDisposed | HITReviewable | HITExpired | Ping. The Ping event is only valid for the SendTestEventNotification operation. </p>"
        }
      },
      "documentation":"<p>The NotificationSpecification data structure describes a HIT event notification for a HIT type.</p>"
    },
    "NotificationTransport":{
      "type":"string",
      "enum":[
        "Email",
        "SQS",
        "SNS"
      ]
    },
    "NotifyWorkersFailureCode":{
      "type":"string",
      "enum":[
        "SoftFailure",
        "HardFailure"
      ]
    },
    "NotifyWorkersFailureStatus":{
      "type":"structure",
      "members":{
        "NotifyWorkersFailureCode":{
          "shape":"NotifyWorkersFailureCode",
          "documentation":"<p> Encoded value for the failure type. </p>"
        },
        "NotifyWorkersFailureMessage":{
          "shape":"String",
          "documentation":"<p> A message detailing the reason the Worker could not be notified. </p>"
        },
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p> The ID of the Worker.</p>"
        }
      },
      "documentation":"<p> When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. </p>"
    },
    "NotifyWorkersFailureStatusList":{
      "type":"list",
      "member":{"shape":"NotifyWorkersFailureStatus"}
    },
    "NotifyWorkersRequest":{
      "type":"structure",
      "required":[
        "Subject",
        "MessageText",
        "WorkerIds"
      ],
      "members":{
        "Subject":{
          "shape":"String",
          "documentation":"<p>The subject line of the email message to send. Can include up to 200 characters.</p>"
        },
        "MessageText":{
          "shape":"String",
          "documentation":"<p>The text of the email message to send. Can include up to 4,096 characters</p>"
        },
        "WorkerIds":{
          "shape":"CustomerIdList",
          "documentation":"<p>A list of Worker IDs you wish to notify. You can notify upto 100 Workers at a time.</p>"
        }
      }
    },
    "NotifyWorkersResponse":{
      "type":"structure",
      "members":{
        "NotifyWorkersFailureStatuses":{
          "shape":"NotifyWorkersFailureStatusList",
          "documentation":"<p> When MTurk sends notifications to the list of Workers, it returns back any failures it encounters in this list of NotifyWorkersFailureStatus objects. </p>"
        }
      }
    },
    "PaginationToken":{
      "type":"string",
      "documentation":"<p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. </p>",
      "max":255,
      "min":1
    },
    "ParameterMapEntry":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"String",
          "documentation":"<p> The QuestionID from the HIT that is used to identify which question requires Mechanical Turk to score as part of the ScoreMyKnownAnswers/2011-09-01 Review Policy. </p>"
        },
        "Values":{
          "shape":"StringList",
          "documentation":"<p> The list of answers to the question specified in the MapEntry Key element. The Worker must match all values in order for the answer to be scored correctly. </p>"
        }
      },
      "documentation":"<p> This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy. </p>"
    },
    "ParameterMapEntryList":{
      "type":"list",
      "member":{"shape":"ParameterMapEntry"}
    },
    "PolicyParameter":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"String",
          "documentation":"<p> Name of the parameter from the list of Review Polices. </p>"
        },
        "Values":{
          "shape":"StringList",
          "documentation":"<p> The list of values of the Parameter</p>"
        },
        "MapEntries":{
          "shape":"ParameterMapEntryList",
          "documentation":"<p> List of ParameterMapEntry objects. </p>"
        }
      },
      "documentation":"<p> Name of the parameter from the Review policy. </p>"
    },
    "PolicyParameterList":{
      "type":"list",
      "member":{"shape":"PolicyParameter"}
    },
    "Qualification":{
      "type":"structure",
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the Qualification type for the Qualification.</p>"
        },
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p> The ID of the Worker who possesses the Qualification. </p>"
        },
        "GrantTime":{
          "shape":"Timestamp",
          "documentation":"<p> The date and time the Qualification was granted to the Worker. If the Worker's Qualification was revoked, and then re-granted based on a new Qualification request, GrantTime is the date and time of the last call to the AcceptQualificationRequest operation.</p>"
        },
        "IntegerValue":{
          "shape":"Integer",
          "documentation":"<p> The value (score) of the Qualification, if the Qualification has an integer value.</p>"
        },
        "LocaleValue":{"shape":"Locale"},
        "Status":{
          "shape":"QualificationStatus",
          "documentation":"<p> The status of the Qualification. Valid values are Granted | Revoked.</p>"
        }
      },
      "documentation":"<p>The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).</p>"
    },
    "QualificationList":{
      "type":"list",
      "member":{"shape":"Qualification"}
    },
    "QualificationRequest":{
      "type":"structure",
      "members":{
        "QualificationRequestId":{
          "shape":"String",
          "documentation":"<p>The ID of the Qualification request, a unique identifier generated when the request was submitted. </p>"
        },
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the Qualification type the Worker is requesting, as returned by the CreateQualificationType operation. </p>"
        },
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p> The ID of the Worker requesting the Qualification.</p>"
        },
        "Test":{
          "shape":"String",
          "documentation":"<p> The contents of the Qualification test that was presented to the Worker, if the type has a test and the Worker has submitted answers. This value is identical to the QuestionForm associated with the Qualification type at the time the Worker requests the Qualification.</p>"
        },
        "Answer":{
          "shape":"String",
          "documentation":"<p> The Worker's answers for the Qualification type's test contained in a QuestionFormAnswers document, if the type has a test and the Worker has submitted answers. If the Worker does not provide any answers, Answer may be empty. </p>"
        },
        "SubmitTime":{
          "shape":"Timestamp",
          "documentation":"<p>The date and time the Qualification request had a status of Submitted. This is either the time the Worker submitted answers for a Qualification test, or the time the Worker requested the Qualification if the Qualification type does not have a test. </p>"
        }
      },
      "documentation":"<p> The QualificationRequest data structure represents a request a Worker has made for a Qualification. </p>"
    },
    "QualificationRequestList":{
      "type":"list",
      "member":{"shape":"QualificationRequest"}
    },
    "QualificationRequirement":{
      "type":"structure",
      "required":[
        "QualificationTypeId",
        "Comparator"
      ],
      "members":{
        "QualificationTypeId":{
          "shape":"String",
          "documentation":"<p> The ID of the Qualification type for the requirement.</p>"
        },
        "Comparator":{
          "shape":"Comparator",
          "documentation":"<p>The kind of comparison to make against a Qualification's value. You can compare a Qualification's value to an IntegerValue to see if it is LessThan, LessThanOrEqualTo, GreaterThan, GreaterThanOrEqualTo, EqualTo, or NotEqualTo the IntegerValue. You can compare it to a LocaleValue to see if it is EqualTo, or NotEqualTo the LocaleValue. You can check to see if the value is In or NotIn a set of IntegerValue or LocaleValue values. Lastly, a Qualification requirement can also test if a Qualification Exists or DoesNotExist in the user's profile, regardless of its value. </p>"
        },
        "IntegerValues":{
          "shape":"IntegerList",
          "documentation":"<p> The integer value to compare against the Qualification's value. IntegerValue must not be present if Comparator is Exists or DoesNotExist. IntegerValue can only be used if the Qualification type has an integer value; it cannot be used with the Worker_Locale QualificationType ID. When performing a set comparison by using the In or the NotIn comparator, you can use up to 15 IntegerValue elements in a QualificationRequirement data structure. </p>"
        },
        "LocaleValues":{
          "shape":"LocaleList",
          "documentation":"<p> The locale value to compare against the Qualification's value. The local value must be a valid ISO 3166 country code or supports ISO 3166-2 subdivisions. LocaleValue can only be used with a Worker_Locale QualificationType ID. LocaleValue can only be used with the EqualTo, NotEqualTo, In, and NotIn comparators. You must only use a single LocaleValue element when using the EqualTo or NotEqualTo comparators. When performing a set comparison by using the In or the NotIn comparator, you can use up to 30 LocaleValue elements in a QualificationRequirement data structure. </p>"
        },
        "RequiredToPreview":{
          "shape":"Boolean",
          "documentation":"<p> DEPRECATED: Use the <code>ActionsGuarded</code> field instead. If RequiredToPreview is true, the question data for the HIT will not be shown when a Worker whose Qualifications do not meet this requirement tries to preview the HIT. That is, a Worker's Qualifications must meet all of the requirements for which RequiredToPreview is true in order to preview the HIT. If a Worker meets all of the requirements where RequiredToPreview is true (or if there are no such requirements), but does not meet all of the requirements for the HIT, the Worker will be allowed to preview the HIT's question data, but will not be allowed to accept and complete the HIT. The default is false. This should not be used in combination with the <code>ActionsGuarded</code> field. </p>",
          "deprecated":true
        },
        "ActionsGuarded":{
          "shape":"HITAccessActions",
          "documentation":"<p> Setting this attribute prevents Workers whose Qualifications do not meet this QualificationRequirement from taking the specified action. Valid arguments include \"Accept\" (Worker cannot accept the HIT, but can preview the HIT and see it in their search results), \"PreviewAndAccept\" (Worker cannot accept or preview the HIT, but can see the HIT in their search results), and \"DiscoverPreviewAndAccept\" (Worker cannot accept, preview, or see the HIT in their search results). It's possible for you to create a HIT with multiple QualificationRequirements (which can have different values for the ActionGuarded attribute). In this case, the Worker is only permitted to perform an action when they have met all QualificationRequirements guarding the action. The actions in the order of least restrictive to most restrictive are Discover, Preview and Accept. For example, if a Worker meets all QualificationRequirements that are set to DiscoverPreviewAndAccept, but do not meet all requirements that are set with PreviewAndAccept, then the Worker will be able to Discover, i.e. see the HIT in their search result, but will not be able to Preview or Accept the HIT. ActionsGuarded should not be used in combination with the <code>RequiredToPreview</code> field. </p>"
        }
      },
      "documentation":"<p> The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results. </p>"
    },
    "QualificationRequirementList":{
      "type":"list",
      "member":{"shape":"QualificationRequirement"}
    },
    "QualificationStatus":{
      "type":"string",
      "enum":[
        "Granted",
        "Revoked"
      ]
    },
    "QualificationType":{
      "type":"structure",
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p> A unique identifier for the Qualification type. A Qualification type is given a Qualification type ID when you call the CreateQualificationType operation. </p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p> The date and time the Qualification type was created. </p>"
        },
        "Name":{
          "shape":"String",
          "documentation":"<p> The name of the Qualification type. The type name is used to identify the type, and to find the type using a Qualification type search. </p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p> A long description for the Qualification type. </p>"
        },
        "Keywords":{
          "shape":"String",
          "documentation":"<p> One or more words or phrases that describe theQualification type, separated by commas. The Keywords make the type easier to find using a search. </p>"
        },
        "QualificationTypeStatus":{
          "shape":"QualificationTypeStatus",
          "documentation":"<p> The status of the Qualification type. A Qualification type's status determines if users can apply to receive a Qualification of this type, and if HITs can be created with requirements based on this type. Valid values are Active | Inactive. </p>"
        },
        "Test":{
          "shape":"String",
          "documentation":"<p> The questions for a Qualification test associated with this Qualification type that a user can take to obtain a Qualification of this type. This parameter must be specified if AnswerKey is present. A Qualification type cannot have both a specified Test parameter and an AutoGranted value of true. </p>"
        },
        "TestDurationInSeconds":{
          "shape":"Long",
          "documentation":"<p> The amount of time, in seconds, given to a Worker to complete the Qualification test, beginning from the time the Worker requests the Qualification. </p>"
        },
        "AnswerKey":{
          "shape":"String",
          "documentation":"<p>The answers to the Qualification test specified in the Test parameter.</p>"
        },
        "RetryDelayInSeconds":{
          "shape":"Long",
          "documentation":"<p> The amount of time, in seconds, Workers must wait after taking the Qualification test before they can take it again. Workers can take a Qualification test multiple times if they were not granted the Qualification from a previous attempt, or if the test offers a gradient score and they want a better score. If not specified, retries are disabled and Workers can request a Qualification only once. </p>"
        },
        "IsRequestable":{
          "shape":"Boolean",
          "documentation":"<p> Specifies whether the Qualification type is one that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test. This value is False for Qualifications assigned automatically by the system. Valid values are True | False. </p>"
        },
        "AutoGranted":{
          "shape":"Boolean",
          "documentation":"<p>Specifies that requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Valid values are True | False.</p>"
        },
        "AutoGrantedValue":{
          "shape":"Integer",
          "documentation":"<p> The Qualification integer value to use for automatically granted Qualifications, if AutoGranted is true. This is 1 by default. </p>"
        }
      },
      "documentation":"<p> The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. </p>"
    },
    "QualificationTypeList":{
      "type":"list",
      "member":{"shape":"QualificationType"}
    },
    "QualificationTypeStatus":{
      "type":"string",
      "enum":[
        "Active",
        "Inactive"
      ]
    },
    "RejectAssignmentRequest":{
      "type":"structure",
      "required":[
        "AssignmentId",
        "RequesterFeedback"
      ],
      "members":{
        "AssignmentId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the assignment. The assignment must correspond to a HIT created by the Requester. </p>"
        },
        "RequesterFeedback":{
          "shape":"String",
          "documentation":"<p> A message for the Worker, which the Worker can see in the Status section of the web site. </p>"
        }
      }
    },
    "RejectAssignmentResponse":{
      "type":"structure",
      "members":{
      }
    },
    "RejectQualificationRequestRequest":{
      "type":"structure",
      "required":["QualificationRequestId"],
      "members":{
        "QualificationRequestId":{
          "shape":"String",
          "documentation":"<p> The ID of the Qualification request, as returned by the <code>ListQualificationRequests</code> operation. </p>"
        },
        "Reason":{
          "shape":"String",
          "documentation":"<p>A text message explaining why the request was rejected, to be shown to the Worker who made the request.</p>"
        }
      }
    },
    "RejectQualificationRequestResponse":{
      "type":"structure",
      "members":{
      }
    },
    "RequestError":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"},
        "TurkErrorCode":{"shape":"TurkErrorCode"}
      },
      "documentation":"<p>Your request is invalid.</p>",
      "exception":true
    },
    "ResultSize":{
      "type":"integer",
      "max":100,
      "min":1
    },
    "ReviewActionDetail":{
      "type":"structure",
      "members":{
        "ActionId":{
          "shape":"EntityId",
          "documentation":"<p>The unique identifier for the action.</p>"
        },
        "ActionName":{
          "shape":"String",
          "documentation":"<p> The nature of the action itself. The Review Policy is responsible for examining the HIT and Assignments, emitting results, and deciding which other actions will be necessary. </p>"
        },
        "TargetId":{
          "shape":"EntityId",
          "documentation":"<p> The specific HITId or AssignmentID targeted by the action.</p>"
        },
        "TargetType":{
          "shape":"String",
          "documentation":"<p> The type of object in TargetId.</p>"
        },
        "Status":{
          "shape":"ReviewActionStatus",
          "documentation":"<p> The current disposition of the action: INTENDED, SUCCEEDED, FAILED, or CANCELLED. </p>"
        },
        "CompleteTime":{
          "shape":"Timestamp",
          "documentation":"<p> The date when the action was completed.</p>"
        },
        "Result":{
          "shape":"String",
          "documentation":"<p> A description of the outcome of the review.</p>"
        },
        "ErrorCode":{
          "shape":"String",
          "documentation":"<p> Present only when the Results have a FAILED Status.</p>"
        }
      },
      "documentation":"<p> Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy. </p>"
    },
    "ReviewActionDetailList":{
      "type":"list",
      "member":{"shape":"ReviewActionDetail"}
    },
    "ReviewActionStatus":{
      "type":"string",
      "enum":[
        "Intended",
        "Succeeded",
        "Failed",
        "Cancelled"
      ]
    },
    "ReviewPolicy":{
      "type":"structure",
      "required":["PolicyName"],
      "members":{
        "PolicyName":{
          "shape":"String",
          "documentation":"<p> Name of a Review Policy: SimplePlurality/2011-09-01 or ScoreMyKnownAnswers/2011-09-01 </p>"
        },
        "Parameters":{
          "shape":"PolicyParameterList",
          "documentation":"<p>Name of the parameter from the Review policy.</p>"
        }
      },
      "documentation":"<p> HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. </p>"
    },
    "ReviewPolicyLevel":{
      "type":"string",
      "enum":[
        "Assignment",
        "HIT"
      ]
    },
    "ReviewPolicyLevelList":{
      "type":"list",
      "member":{"shape":"ReviewPolicyLevel"}
    },
    "ReviewReport":{
      "type":"structure",
      "members":{
        "ReviewResults":{
          "shape":"ReviewResultDetailList",
          "documentation":"<p> A list of ReviewResults objects for each action specified in the Review Policy. </p>"
        },
        "ReviewActions":{
          "shape":"ReviewActionDetailList",
          "documentation":"<p> A list of ReviewAction objects for each action specified in the Review Policy. </p>"
        }
      },
      "documentation":"<p> Contains both ReviewResult and ReviewAction elements for a particular HIT. </p>"
    },
    "ReviewResultDetail":{
      "type":"structure",
      "members":{
        "ActionId":{
          "shape":"EntityId",
          "documentation":"<p> A unique identifier of the Review action result. </p>"
        },
        "SubjectId":{
          "shape":"EntityId",
          "documentation":"<p>The HITID or AssignmentId about which this result was taken. Note that HIT-level Review Policies will often emit results about both the HIT itself and its Assignments, while Assignment-level review policies generally only emit results about the Assignment itself. </p>"
        },
        "SubjectType":{
          "shape":"String",
          "documentation":"<p> The type of the object from the SubjectId field.</p>"
        },
        "QuestionId":{
          "shape":"EntityId",
          "documentation":"<p> Specifies the QuestionId the result is describing. Depending on whether the TargetType is a HIT or Assignment this results could specify multiple values. If TargetType is HIT and QuestionId is absent, then the result describes results of the HIT, including the HIT agreement score. If ObjectType is Assignment and QuestionId is absent, then the result describes the Worker's performance on the HIT. </p>"
        },
        "Key":{
          "shape":"String",
          "documentation":"<p> Key identifies the particular piece of reviewed information. </p>"
        },
        "Value":{
          "shape":"String",
          "documentation":"<p> The values of Key provided by the review policies you have selected. </p>"
        }
      },
      "documentation":"<p> This data structure is returned multiple times for each result specified in the Review Policy. </p>"
    },
    "ReviewResultDetailList":{
      "type":"list",
      "member":{"shape":"ReviewResultDetail"}
    },
    "ReviewableHITStatus":{
      "type":"string",
      "enum":[
        "Reviewable",
        "Reviewing"
      ]
    },
    "SendBonusRequest":{
      "type":"structure",
      "required":[
        "WorkerId",
        "BonusAmount",
        "AssignmentId",
        "Reason"
      ],
      "members":{
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p>The ID of the Worker being paid the bonus.</p>"
        },
        "BonusAmount":{
          "shape":"CurrencyAmount",
          "documentation":"<p> The Bonus amount is a US Dollar amount specified using a string (for example, \"5\" represents $5.00 USD and \"101.42\" represents $101.42 USD). Do not include currency symbols or currency codes. </p>"
        },
        "AssignmentId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the assignment for which this bonus is paid.</p>"
        },
        "Reason":{
          "shape":"String",
          "documentation":"<p>A message that explains the reason for the bonus payment. The Worker receiving the bonus can see this message.</p>"
        },
        "UniqueRequestToken":{
          "shape":"IdempotencyToken",
          "documentation":"<p>A unique identifier for this request, which allows you to retry the call on error without granting multiple bonuses. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the bonus already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return an error with a message containing the request ID.</p>"
        }
      }
    },
    "SendBonusResponse":{
      "type":"structure",
      "members":{
      }
    },
    "SendTestEventNotificationRequest":{
      "type":"structure",
      "required":[
        "Notification",
        "TestEventType"
      ],
      "members":{
        "Notification":{
          "shape":"NotificationSpecification",
          "documentation":"<p> The notification specification to test. This value is identical to the value you would provide to the UpdateNotificationSettings operation when you establish the notification specification for a HIT type. </p>"
        },
        "TestEventType":{
          "shape":"EventType",
          "documentation":"<p> The event to simulate to test the notification specification. This event is included in the test message even if the notification specification does not include the event type. The notification specification does not filter out the test event. </p>"
        }
      }
    },
    "SendTestEventNotificationResponse":{
      "type":"structure",
      "members":{
      }
    },
    "ServiceFault":{
      "type":"structure",
      "members":{
        "Message":{"shape":"ExceptionMessage"},
        "TurkErrorCode":{"shape":"TurkErrorCode"}
      },
      "documentation":"<p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>",
      "exception":true,
      "fault":true
    },
    "String":{"type":"string"},
    "StringList":{
      "type":"list",
      "member":{"shape":"String"}
    },
    "Timestamp":{"type":"timestamp"},
    "TurkErrorCode":{"type":"string"},
    "UpdateExpirationForHITRequest":{
      "type":"structure",
      "required":[
        "HITId",
        "ExpireAt"
      ],
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p> The HIT to update. </p>"
        },
        "ExpireAt":{
          "shape":"Timestamp",
          "documentation":"<p> The date and time at which you want the HIT to expire </p>"
        }
      }
    },
    "UpdateExpirationForHITResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateHITReviewStatusRequest":{
      "type":"structure",
      "required":["HITId"],
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the HIT to update. </p>"
        },
        "Revert":{
          "shape":"Boolean",
          "documentation":"<p> Specifies how to update the HIT status. Default is <code>False</code>. </p> <ul> <li> <p> Setting this to false will only transition a HIT from <code>Reviewable</code> to <code>Reviewing</code> </p> </li> <li> <p> Setting this to true will only transition a HIT from <code>Reviewing</code> to <code>Reviewable</code> </p> </li> </ul>"
        }
      }
    },
    "UpdateHITReviewStatusResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateHITTypeOfHITRequest":{
      "type":"structure",
      "required":[
        "HITId",
        "HITTypeId"
      ],
      "members":{
        "HITId":{
          "shape":"EntityId",
          "documentation":"<p>The HIT to update.</p>"
        },
        "HITTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the new HIT type.</p>"
        }
      }
    },
    "UpdateHITTypeOfHITResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateNotificationSettingsRequest":{
      "type":"structure",
      "required":["HITTypeId"],
      "members":{
        "HITTypeId":{
          "shape":"EntityId",
          "documentation":"<p> The ID of the HIT type whose notification specification is being updated. </p>"
        },
        "Notification":{
          "shape":"NotificationSpecification",
          "documentation":"<p> The notification specification for the HIT type. </p>"
        },
        "Active":{
          "shape":"Boolean",
          "documentation":"<p> Specifies whether notifications are sent for HITs of this HIT type, according to the notification specification. You must specify either the Notification parameter or the Active parameter for the call to UpdateNotificationSettings to succeed. </p>"
        }
      }
    },
    "UpdateNotificationSettingsResponse":{
      "type":"structure",
      "members":{
      }
    },
    "UpdateQualificationTypeRequest":{
      "type":"structure",
      "required":["QualificationTypeId"],
      "members":{
        "QualificationTypeId":{
          "shape":"EntityId",
          "documentation":"<p>The ID of the Qualification type to update.</p>"
        },
        "Description":{
          "shape":"String",
          "documentation":"<p>The new description of the Qualification type.</p>"
        },
        "QualificationTypeStatus":{
          "shape":"QualificationTypeStatus",
          "documentation":"<p>The new status of the Qualification type - Active | Inactive</p>"
        },
        "Test":{
          "shape":"String",
          "documentation":"<p>The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified.</p> <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p> <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>"
        },
        "AnswerKey":{
          "shape":"String",
          "documentation":"<p>The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.</p>"
        },
        "TestDurationInSeconds":{
          "shape":"Long",
          "documentation":"<p>The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.</p>"
        },
        "RetryDelayInSeconds":{
          "shape":"Long",
          "documentation":"<p>The amount of time, in seconds, that Workers must wait after requesting a Qualification of the specified Qualification type before they can retry the Qualification request. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must dispose of the existing retry-enabled Qualification type using DisposeQualificationType and then create a new Qualification type with retries disabled using CreateQualificationType.</p>"
        },
        "AutoGranted":{
          "shape":"Boolean",
          "documentation":"<p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p> <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>"
        },
        "AutoGrantedValue":{
          "shape":"Integer",
          "documentation":"<p>The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.</p>"
        }
      }
    },
    "UpdateQualificationTypeResponse":{
      "type":"structure",
      "members":{
        "QualificationType":{
          "shape":"QualificationType",
          "documentation":"<p> Contains a QualificationType data structure.</p>"
        }
      }
    },
    "WorkerBlock":{
      "type":"structure",
      "members":{
        "WorkerId":{
          "shape":"CustomerId",
          "documentation":"<p> The ID of the Worker who accepted the HIT.</p>"
        },
        "Reason":{
          "shape":"String",
          "documentation":"<p> A message explaining the reason the Worker was blocked. </p>"
        }
      },
      "documentation":"<p> The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block. </p>"
    },
    "WorkerBlockList":{
      "type":"list",
      "member":{"shape":"WorkerBlock"}
    }
  },
  "documentation":"<fullname>Amazon Mechanical Turk API Reference</fullname>"
}
