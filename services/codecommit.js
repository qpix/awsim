awsim['codecommit'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-04-13",
    "endpointPrefix":"codecommit",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceAbbreviation":"CodeCommit",
    "serviceFullName":"AWS CodeCommit",
    "serviceId":"CodeCommit",
    "signatureVersion":"v4",
    "targetPrefix":"CodeCommit_20150413",
    "uid":"codecommit-2015-04-13"
  },
  "operations":{
    "BatchGetRepositories":{
      "name":"BatchGetRepositories",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"BatchGetRepositoriesInput"},
      "output":{"shape":"BatchGetRepositoriesOutput"},
      "errors":[
        {"shape":"RepositoryNamesRequiredException"},
        {"shape":"MaximumRepositoryNamesExceededException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>"
    },
    "CreateBranch":{
      "name":"CreateBranch",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateBranchInput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"BranchNameRequiredException"},
        {"shape":"BranchNameExistsException"},
        {"shape":"InvalidBranchNameException"},
        {"shape":"CommitIdRequiredException"},
        {"shape":"CommitDoesNotExistException"},
        {"shape":"InvalidCommitIdException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Creates a new branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>"
    },
    "CreatePullRequest":{
      "name":"CreatePullRequest",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePullRequestInput"},
      "output":{"shape":"CreatePullRequestOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"},
        {"shape":"ClientRequestTokenRequiredException"},
        {"shape":"InvalidClientRequestTokenException"},
        {"shape":"IdempotencyParameterMismatchException"},
        {"shape":"ReferenceNameRequiredException"},
        {"shape":"InvalidReferenceNameException"},
        {"shape":"ReferenceDoesNotExistException"},
        {"shape":"ReferenceTypeNotSupportedException"},
        {"shape":"TitleRequiredException"},
        {"shape":"InvalidTitleException"},
        {"shape":"InvalidDescriptionException"},
        {"shape":"TargetsRequiredException"},
        {"shape":"InvalidTargetsException"},
        {"shape":"TargetRequiredException"},
        {"shape":"InvalidTargetException"},
        {"shape":"MultipleRepositoriesInPullRequestException"},
        {"shape":"MaximumOpenPullRequestsExceededException"},
        {"shape":"SourceAndDestinationAreSameException"}
      ],
      "documentation":"<p>Creates a pull request in the specified repository.</p>"
    },
    "CreateRepository":{
      "name":"CreateRepository",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateRepositoryInput"},
      "output":{"shape":"CreateRepositoryOutput"},
      "errors":[
        {"shape":"RepositoryNameExistsException"},
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"InvalidRepositoryDescriptionException"},
        {"shape":"RepositoryLimitExceededException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Creates a new, empty repository.</p>"
    },
    "DeleteBranch":{
      "name":"DeleteBranch",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteBranchInput"},
      "output":{"shape":"DeleteBranchOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"BranchNameRequiredException"},
        {"shape":"InvalidBranchNameException"},
        {"shape":"DefaultBranchCannotBeDeletedException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Deletes a branch from a repository, unless that branch is the default branch for the repository. </p>"
    },
    "DeleteCommentContent":{
      "name":"DeleteCommentContent",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteCommentContentInput"},
      "output":{"shape":"DeleteCommentContentOutput"},
      "errors":[
        {"shape":"CommentDoesNotExistException"},
        {"shape":"CommentIdRequiredException"},
        {"shape":"InvalidCommentIdException"},
        {"shape":"CommentDeletedException"}
      ],
      "documentation":"<p>Deletes the content of a comment made on a change, file, or commit in a repository.</p>"
    },
    "DeleteRepository":{
      "name":"DeleteRepository",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRepositoryInput"},
      "output":{"shape":"DeleteRepositoryOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Deletes a repository. If a specified repository was already deleted, a null repository ID will be returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository will fail.</p> </important>"
    },
    "DescribePullRequestEvents":{
      "name":"DescribePullRequestEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribePullRequestEventsInput"},
      "output":{"shape":"DescribePullRequestEventsOutput"},
      "errors":[
        {"shape":"PullRequestDoesNotExistException"},
        {"shape":"InvalidPullRequestIdException"},
        {"shape":"PullRequestIdRequiredException"},
        {"shape":"InvalidPullRequestEventTypeException"},
        {"shape":"InvalidActorArnException"},
        {"shape":"ActorDoesNotExistException"},
        {"shape":"InvalidMaxResultsException"},
        {"shape":"InvalidContinuationTokenException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns information about one or more pull request events.</p>"
    },
    "GetBlob":{
      "name":"GetBlob",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetBlobInput"},
      "output":{"shape":"GetBlobOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"BlobIdRequiredException"},
        {"shape":"InvalidBlobIdException"},
        {"shape":"BlobIdDoesNotExistException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"},
        {"shape":"FileTooLargeException"}
      ],
      "documentation":"<p>Returns the base-64 encoded content of an individual blob within a repository.</p>"
    },
    "GetBranch":{
      "name":"GetBranch",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetBranchInput"},
      "output":{"shape":"GetBranchOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"BranchNameRequiredException"},
        {"shape":"InvalidBranchNameException"},
        {"shape":"BranchDoesNotExistException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns information about a repository branch, including its name and the last commit ID.</p>"
    },
    "GetComment":{
      "name":"GetComment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCommentInput"},
      "output":{"shape":"GetCommentOutput"},
      "errors":[
        {"shape":"CommentDoesNotExistException"},
        {"shape":"CommentIdRequiredException"},
        {"shape":"InvalidCommentIdException"},
        {"shape":"CommentDeletedException"}
      ],
      "documentation":"<p>Returns the content of a comment made on a change, file, or commit in a repository.</p>"
    },
    "GetCommentsForComparedCommit":{
      "name":"GetCommentsForComparedCommit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCommentsForComparedCommitInput"},
      "output":{"shape":"GetCommentsForComparedCommitOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"CommitIdRequiredException"},
        {"shape":"InvalidCommitIdException"},
        {"shape":"CommitDoesNotExistException"},
        {"shape":"InvalidMaxResultsException"},
        {"shape":"InvalidContinuationTokenException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns information about comments made on the comparison between two commits.</p>"
    },
    "GetCommentsForPullRequest":{
      "name":"GetCommentsForPullRequest",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCommentsForPullRequestInput"},
      "output":{"shape":"GetCommentsForPullRequestOutput"},
      "errors":[
        {"shape":"PullRequestIdRequiredException"},
        {"shape":"PullRequestDoesNotExistException"},
        {"shape":"InvalidPullRequestIdException"},
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"CommitIdRequiredException"},
        {"shape":"InvalidCommitIdException"},
        {"shape":"CommitDoesNotExistException"},
        {"shape":"InvalidMaxResultsException"},
        {"shape":"InvalidContinuationTokenException"},
        {"shape":"RepositoryNotAssociatedWithPullRequestException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns comments made on a pull request.</p>"
    },
    "GetCommit":{
      "name":"GetCommit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetCommitInput"},
      "output":{"shape":"GetCommitOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"CommitIdRequiredException"},
        {"shape":"InvalidCommitIdException"},
        {"shape":"CommitIdDoesNotExistException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns information about a commit, including commit message and committer information.</p>"
    },
    "GetDifferences":{
      "name":"GetDifferences",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDifferencesInput"},
      "output":{"shape":"GetDifferencesOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"InvalidContinuationTokenException"},
        {"shape":"InvalidMaxResultsException"},
        {"shape":"InvalidCommitIdException"},
        {"shape":"CommitRequiredException"},
        {"shape":"InvalidCommitException"},
        {"shape":"CommitDoesNotExistException"},
        {"shape":"InvalidPathException"},
        {"shape":"PathDoesNotExistException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference). Results can be limited to a specified path.</p>"
    },
    "GetMergeConflicts":{
      "name":"GetMergeConflicts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetMergeConflictsInput"},
      "output":{"shape":"GetMergeConflictsOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"MergeOptionRequiredException"},
        {"shape":"InvalidMergeOptionException"},
        {"shape":"InvalidDestinationCommitSpecifierException"},
        {"shape":"InvalidSourceCommitSpecifierException"},
        {"shape":"CommitRequiredException"},
        {"shape":"CommitDoesNotExistException"},
        {"shape":"InvalidCommitException"},
        {"shape":"TipsDivergenceExceededException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>"
    },
    "GetPullRequest":{
      "name":"GetPullRequest",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetPullRequestInput"},
      "output":{"shape":"GetPullRequestOutput"},
      "errors":[
        {"shape":"PullRequestDoesNotExistException"},
        {"shape":"InvalidPullRequestIdException"},
        {"shape":"PullRequestIdRequiredException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Gets information about a pull request in a specified repository.</p>"
    },
    "GetRepository":{
      "name":"GetRepository",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetRepositoryInput"},
      "output":{"shape":"GetRepositoryOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>"
    },
    "GetRepositoryTriggers":{
      "name":"GetRepositoryTriggers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetRepositoryTriggersInput"},
      "output":{"shape":"GetRepositoryTriggersOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Gets information about triggers configured for a repository.</p>"
    },
    "ListBranches":{
      "name":"ListBranches",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListBranchesInput"},
      "output":{"shape":"ListBranchesOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"},
        {"shape":"InvalidContinuationTokenException"}
      ],
      "documentation":"<p>Gets information about one or more branches in a repository.</p>"
    },
    "ListPullRequests":{
      "name":"ListPullRequests",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListPullRequestsInput"},
      "output":{"shape":"ListPullRequestsOutput"},
      "errors":[
        {"shape":"InvalidPullRequestStatusException"},
        {"shape":"InvalidAuthorArnException"},
        {"shape":"AuthorDoesNotExistException"},
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidMaxResultsException"},
        {"shape":"InvalidContinuationTokenException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.</p>"
    },
    "ListRepositories":{
      "name":"ListRepositories",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListRepositoriesInput"},
      "output":{"shape":"ListRepositoriesOutput"},
      "errors":[
        {"shape":"InvalidSortByException"},
        {"shape":"InvalidOrderException"},
        {"shape":"InvalidContinuationTokenException"}
      ],
      "documentation":"<p>Gets information about one or more repositories.</p>"
    },
    "MergePullRequestByFastForward":{
      "name":"MergePullRequestByFastForward",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"MergePullRequestByFastForwardInput"},
      "output":{"shape":"MergePullRequestByFastForwardOutput"},
      "errors":[
        {"shape":"ManualMergeRequiredException"},
        {"shape":"PullRequestAlreadyClosedException"},
        {"shape":"PullRequestDoesNotExistException"},
        {"shape":"InvalidPullRequestIdException"},
        {"shape":"PullRequestIdRequiredException"},
        {"shape":"TipOfSourceReferenceIsDifferentException"},
        {"shape":"ReferenceDoesNotExistException"},
        {"shape":"InvalidCommitIdException"},
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Closes a pull request and attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge option.</p>"
    },
    "PostCommentForComparedCommit":{
      "name":"PostCommentForComparedCommit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PostCommentForComparedCommitInput"},
      "output":{"shape":"PostCommentForComparedCommitOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"ClientRequestTokenRequiredException"},
        {"shape":"InvalidClientRequestTokenException"},
        {"shape":"IdempotencyParameterMismatchException"},
        {"shape":"CommentContentRequiredException"},
        {"shape":"CommentContentSizeLimitExceededException"},
        {"shape":"InvalidFileLocationException"},
        {"shape":"InvalidRelativeFileVersionEnumException"},
        {"shape":"PathRequiredException"},
        {"shape":"InvalidFilePositionException"},
        {"shape":"CommitIdRequiredException"},
        {"shape":"InvalidCommitIdException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"},
        {"shape":"BeforeCommitIdAndAfterCommitIdAreSameException"},
        {"shape":"CommitDoesNotExistException"},
        {"shape":"InvalidPathException"},
        {"shape":"PathDoesNotExistException"}
      ],
      "documentation":"<p>Posts a comment on the comparison between two commits.</p>",
      "idempotent":true
    },
    "PostCommentForPullRequest":{
      "name":"PostCommentForPullRequest",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PostCommentForPullRequestInput"},
      "output":{"shape":"PostCommentForPullRequestOutput"},
      "errors":[
        {"shape":"PullRequestDoesNotExistException"},
        {"shape":"InvalidPullRequestIdException"},
        {"shape":"PullRequestIdRequiredException"},
        {"shape":"RepositoryNotAssociatedWithPullRequestException"},
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"ClientRequestTokenRequiredException"},
        {"shape":"InvalidClientRequestTokenException"},
        {"shape":"IdempotencyParameterMismatchException"},
        {"shape":"CommentContentRequiredException"},
        {"shape":"CommentContentSizeLimitExceededException"},
        {"shape":"InvalidFileLocationException"},
        {"shape":"InvalidRelativeFileVersionEnumException"},
        {"shape":"PathRequiredException"},
        {"shape":"InvalidFilePositionException"},
        {"shape":"CommitIdRequiredException"},
        {"shape":"InvalidCommitIdException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"},
        {"shape":"CommitDoesNotExistException"},
        {"shape":"InvalidPathException"},
        {"shape":"PathDoesNotExistException"},
        {"shape":"PathRequiredException"},
        {"shape":"BeforeCommitIdAndAfterCommitIdAreSameException"}
      ],
      "documentation":"<p>Posts a comment on a pull request.</p>",
      "idempotent":true
    },
    "PostCommentReply":{
      "name":"PostCommentReply",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PostCommentReplyInput"},
      "output":{"shape":"PostCommentReplyOutput"},
      "errors":[
        {"shape":"ClientRequestTokenRequiredException"},
        {"shape":"InvalidClientRequestTokenException"},
        {"shape":"IdempotencyParameterMismatchException"},
        {"shape":"CommentContentRequiredException"},
        {"shape":"CommentContentSizeLimitExceededException"},
        {"shape":"CommentDoesNotExistException"},
        {"shape":"CommentIdRequiredException"},
        {"shape":"InvalidCommentIdException"}
      ],
      "documentation":"<p>Posts a comment in reply to an existing comment on a comparison between commits or a pull request.</p>",
      "idempotent":true
    },
    "PutFile":{
      "name":"PutFile",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutFileInput"},
      "output":{"shape":"PutFileOutput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"ParentCommitIdRequiredException"},
        {"shape":"InvalidParentCommitIdException"},
        {"shape":"ParentCommitDoesNotExistException"},
        {"shape":"ParentCommitIdOutdatedException"},
        {"shape":"FileContentRequiredException"},
        {"shape":"FileContentSizeLimitExceededException"},
        {"shape":"PathRequiredException"},
        {"shape":"InvalidPathException"},
        {"shape":"BranchNameRequiredException"},
        {"shape":"InvalidBranchNameException"},
        {"shape":"BranchDoesNotExistException"},
        {"shape":"BranchNameIsTagNameException"},
        {"shape":"InvalidFileModeException"},
        {"shape":"NameLengthExceededException"},
        {"shape":"InvalidEmailException"},
        {"shape":"CommitMessageLengthExceededException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"},
        {"shape":"SameFileContentException"},
        {"shape":"FileNameConflictsWithDirectoryNameException"},
        {"shape":"DirectoryNameConflictsWithFileNameException"}
      ],
      "documentation":"<p>Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.</p>"
    },
    "PutRepositoryTriggers":{
      "name":"PutRepositoryTriggers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutRepositoryTriggersInput"},
      "output":{"shape":"PutRepositoryTriggersOutput"},
      "errors":[
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryTriggersListRequiredException"},
        {"shape":"MaximumRepositoryTriggersExceededException"},
        {"shape":"InvalidRepositoryTriggerNameException"},
        {"shape":"InvalidRepositoryTriggerDestinationArnException"},
        {"shape":"InvalidRepositoryTriggerRegionException"},
        {"shape":"InvalidRepositoryTriggerCustomDataException"},
        {"shape":"MaximumBranchesExceededException"},
        {"shape":"InvalidRepositoryTriggerBranchNameException"},
        {"shape":"InvalidRepositoryTriggerEventsException"},
        {"shape":"RepositoryTriggerNameRequiredException"},
        {"shape":"RepositoryTriggerDestinationArnRequiredException"},
        {"shape":"RepositoryTriggerBranchNameListRequiredException"},
        {"shape":"RepositoryTriggerEventsListRequiredException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Replaces all triggers for a repository. This can be used to create or delete triggers.</p>"
    },
    "TestRepositoryTriggers":{
      "name":"TestRepositoryTriggers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TestRepositoryTriggersInput"},
      "output":{"shape":"TestRepositoryTriggersOutput"},
      "errors":[
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"RepositoryTriggersListRequiredException"},
        {"shape":"MaximumRepositoryTriggersExceededException"},
        {"shape":"InvalidRepositoryTriggerNameException"},
        {"shape":"InvalidRepositoryTriggerDestinationArnException"},
        {"shape":"InvalidRepositoryTriggerRegionException"},
        {"shape":"InvalidRepositoryTriggerCustomDataException"},
        {"shape":"MaximumBranchesExceededException"},
        {"shape":"InvalidRepositoryTriggerBranchNameException"},
        {"shape":"InvalidRepositoryTriggerEventsException"},
        {"shape":"RepositoryTriggerNameRequiredException"},
        {"shape":"RepositoryTriggerDestinationArnRequiredException"},
        {"shape":"RepositoryTriggerBranchNameListRequiredException"},
        {"shape":"RepositoryTriggerEventsListRequiredException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test will send data from the last commit. If no data is available, sample data will be generated.</p>"
    },
    "UpdateComment":{
      "name":"UpdateComment",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateCommentInput"},
      "output":{"shape":"UpdateCommentOutput"},
      "errors":[
        {"shape":"CommentContentRequiredException"},
        {"shape":"CommentContentSizeLimitExceededException"},
        {"shape":"CommentDoesNotExistException"},
        {"shape":"CommentIdRequiredException"},
        {"shape":"InvalidCommentIdException"},
        {"shape":"CommentNotCreatedByCallerException"},
        {"shape":"CommentDeletedException"}
      ],
      "documentation":"<p>Replaces the contents of a comment.</p>"
    },
    "UpdateDefaultBranch":{
      "name":"UpdateDefaultBranch",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDefaultBranchInput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"BranchNameRequiredException"},
        {"shape":"InvalidBranchNameException"},
        {"shape":"BranchDoesNotExistException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>"
    },
    "UpdatePullRequestDescription":{
      "name":"UpdatePullRequestDescription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdatePullRequestDescriptionInput"},
      "output":{"shape":"UpdatePullRequestDescriptionOutput"},
      "errors":[
        {"shape":"PullRequestDoesNotExistException"},
        {"shape":"InvalidPullRequestIdException"},
        {"shape":"PullRequestIdRequiredException"},
        {"shape":"InvalidDescriptionException"},
        {"shape":"PullRequestAlreadyClosedException"}
      ],
      "documentation":"<p>Replaces the contents of the description of a pull request.</p>"
    },
    "UpdatePullRequestStatus":{
      "name":"UpdatePullRequestStatus",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdatePullRequestStatusInput"},
      "output":{"shape":"UpdatePullRequestStatusOutput"},
      "errors":[
        {"shape":"PullRequestDoesNotExistException"},
        {"shape":"InvalidPullRequestIdException"},
        {"shape":"PullRequestIdRequiredException"},
        {"shape":"InvalidPullRequestStatusUpdateException"},
        {"shape":"InvalidPullRequestStatusException"},
        {"shape":"PullRequestStatusRequiredException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Updates the status of a pull request. </p>"
    },
    "UpdatePullRequestTitle":{
      "name":"UpdatePullRequestTitle",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdatePullRequestTitleInput"},
      "output":{"shape":"UpdatePullRequestTitleOutput"},
      "errors":[
        {"shape":"PullRequestDoesNotExistException"},
        {"shape":"InvalidPullRequestIdException"},
        {"shape":"PullRequestIdRequiredException"},
        {"shape":"TitleRequiredException"},
        {"shape":"InvalidTitleException"},
        {"shape":"PullRequestAlreadyClosedException"}
      ],
      "documentation":"<p>Replaces the title of a pull request.</p>"
    },
    "UpdateRepositoryDescription":{
      "name":"UpdateRepositoryDescription",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateRepositoryDescriptionInput"},
      "errors":[
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"InvalidRepositoryNameException"},
        {"shape":"InvalidRepositoryDescriptionException"},
        {"shape":"EncryptionIntegrityChecksFailedException"},
        {"shape":"EncryptionKeyAccessDeniedException"},
        {"shape":"EncryptionKeyDisabledException"},
        {"shape":"EncryptionKeyNotFoundException"},
        {"shape":"EncryptionKeyUnavailableException"}
      ],
      "documentation":"<p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>"
    },
    "UpdateRepositoryName":{
      "name":"UpdateRepositoryName",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateRepositoryNameInput"},
      "errors":[
        {"shape":"RepositoryDoesNotExistException"},
        {"shape":"RepositoryNameExistsException"},
        {"shape":"RepositoryNameRequiredException"},
        {"shape":"InvalidRepositoryNameException"}
      ],
      "documentation":"<p>Renames a repository. The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix \".git\" is prohibited. For a full description of the limits on repository names, see <a href=\"http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html\">Limits</a> in the AWS CodeCommit User Guide.</p>"
    }
  },
  "shapes":{
    "AccountId":{"type":"string"},
    "ActorDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>",
      "exception":true
    },
    "AdditionalData":{"type":"string"},
    "Arn":{"type":"string"},
    "AuthorDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>",
      "exception":true
    },
    "BatchGetRepositoriesInput":{
      "type":"structure",
      "required":["repositoryNames"],
      "members":{
        "repositoryNames":{
          "shape":"RepositoryNameList",
          "documentation":"<p>The names of the repositories to get information about.</p>"
        }
      },
      "documentation":"<p>Represents the input of a batch get repositories operation.</p>"
    },
    "BatchGetRepositoriesOutput":{
      "type":"structure",
      "members":{
        "repositories":{
          "shape":"RepositoryMetadataList",
          "documentation":"<p>A list of repositories returned by the batch get repositories operation.</p>"
        },
        "repositoriesNotFound":{
          "shape":"RepositoryNotFoundList",
          "documentation":"<p>Returns a list of repository names for which information could not be found.</p>"
        }
      },
      "documentation":"<p>Represents the output of a batch get repositories operation.</p>"
    },
    "BeforeCommitIdAndAfterCommitIdAreSameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>",
      "exception":true
    },
    "BlobIdDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified blob does not exist.</p>",
      "exception":true
    },
    "BlobIdRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A blob ID is required but was not specified.</p>",
      "exception":true
    },
    "BlobMetadata":{
      "type":"structure",
      "members":{
        "blobId":{
          "shape":"ObjectId",
          "documentation":"<p>The full ID of the blob.</p>"
        },
        "path":{
          "shape":"Path",
          "documentation":"<p>The path to the blob and any associated file name, if any.</p>"
        },
        "mode":{
          "shape":"Mode",
          "documentation":"<p>The file mode permissions of the blob. File mode permission codes include:</p> <ul> <li> <p> <code>100644</code> indicates read/write</p> </li> <li> <p> <code>100755</code> indicates read/write/execute</p> </li> <li> <p> <code>160000</code> indicates a submodule</p> </li> <li> <p> <code>120000</code> indicates a symlink</p> </li> </ul>"
        }
      },
      "documentation":"<p>Returns information about a specific Git blob object.</p>"
    },
    "BranchDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified branch does not exist.</p>",
      "exception":true
    },
    "BranchInfo":{
      "type":"structure",
      "members":{
        "branchName":{
          "shape":"BranchName",
          "documentation":"<p>The name of the branch.</p>"
        },
        "commitId":{
          "shape":"CommitId",
          "documentation":"<p>The ID of the last commit made to the branch.</p>"
        }
      },
      "documentation":"<p>Returns information about a branch.</p>"
    },
    "BranchName":{
      "type":"string",
      "max":256,
      "min":1
    },
    "BranchNameExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified branch name already exists.</p>",
      "exception":true
    },
    "BranchNameIsTagNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>",
      "exception":true
    },
    "BranchNameList":{
      "type":"list",
      "member":{"shape":"BranchName"}
    },
    "BranchNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A branch name is required but was not specified.</p>",
      "exception":true
    },
    "ChangeTypeEnum":{
      "type":"string",
      "enum":[
        "A",
        "M",
        "D"
      ]
    },
    "ClientRequestToken":{"type":"string"},
    "ClientRequestTokenRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A client request token is required. A client request token is an unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>",
      "exception":true
    },
    "CloneUrlHttp":{"type":"string"},
    "CloneUrlSsh":{"type":"string"},
    "Comment":{
      "type":"structure",
      "members":{
        "commentId":{
          "shape":"CommentId",
          "documentation":"<p>The system-generated comment ID.</p>"
        },
        "content":{
          "shape":"Content",
          "documentation":"<p>The content of the comment.</p>"
        },
        "inReplyTo":{
          "shape":"CommentId",
          "documentation":"<p>The ID of the comment for which this comment is a reply, if any.</p>"
        },
        "creationDate":{
          "shape":"CreationDate",
          "documentation":"<p>The date and time the comment was created, in timestamp format.</p>"
        },
        "lastModifiedDate":{
          "shape":"LastModifiedDate",
          "documentation":"<p>The date and time the comment was most recently modified, in timestamp format.</p>"
        },
        "authorArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the person who posted the comment.</p>"
        },
        "deleted":{
          "shape":"IsCommentDeleted",
          "documentation":"<p>A Boolean value indicating whether the comment has been deleted.</p>"
        },
        "clientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>"
        }
      },
      "documentation":"<p>Returns information about a specific comment.</p>"
    },
    "CommentContentRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>",
      "exception":true
    },
    "CommentContentSizeLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The comment is too large. Comments are limited to 1,000 characters.</p>",
      "exception":true
    },
    "CommentDeletedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>",
      "exception":true
    },
    "CommentDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>No comment exists with the provided ID. Verify that you have provided the correct ID, and then try again.</p>",
      "exception":true
    },
    "CommentId":{"type":"string"},
    "CommentIdRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The comment ID is missing or null. A comment ID is required.</p>",
      "exception":true
    },
    "CommentNotCreatedByCallerException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You cannot modify or delete this comment. Only comment authors can modify or delete their comments.</p>",
      "exception":true
    },
    "Comments":{
      "type":"list",
      "member":{"shape":"Comment"}
    },
    "CommentsForComparedCommit":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the compared commits.</p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit used to establish the 'before' of the comparison.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit used to establish the 'after' of the comparison.</p>"
        },
        "beforeBlobId":{
          "shape":"ObjectId",
          "documentation":"<p>The full blob ID of the commit used to establish the 'before' of the comparison.</p>"
        },
        "afterBlobId":{
          "shape":"ObjectId",
          "documentation":"<p>The full blob ID of the commit used to establish the 'after' of the comparison.</p>"
        },
        "location":{
          "shape":"Location",
          "documentation":"<p>Location information about the comment on the comparison, including the file name, line number, and whether the version of the file where the comment was made is 'BEFORE' or 'AFTER'.</p>"
        },
        "comments":{
          "shape":"Comments",
          "documentation":"<p>An array of comment objects. Each comment object contains information about a comment on the comparison between commits.</p>"
        }
      },
      "documentation":"<p>Returns information about comments on the comparison between two commits.</p>"
    },
    "CommentsForComparedCommitData":{
      "type":"list",
      "member":{"shape":"CommentsForComparedCommit"}
    },
    "CommentsForPullRequest":{
      "type":"structure",
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the pull request.</p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit that was the tip of the destination branch when the pull request was created. This commit will be superceded by the after commit in the source branch when and if you merge the source branch into the destination branch.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>he full commit ID of the commit that was the tip of the source branch at the time the comment was made. </p>"
        },
        "beforeBlobId":{
          "shape":"ObjectId",
          "documentation":"<p>The full blob ID of the file on which you want to comment on the destination commit.</p>"
        },
        "afterBlobId":{
          "shape":"ObjectId",
          "documentation":"<p>The full blob ID of the file on which you want to comment on the source commit.</p>"
        },
        "location":{
          "shape":"Location",
          "documentation":"<p>Location information about the comment on the pull request, including the file name, line number, and whether the version of the file where the comment was made is 'BEFORE' (destination branch) or 'AFTER' (source branch).</p>"
        },
        "comments":{
          "shape":"Comments",
          "documentation":"<p>An array of comment objects. Each comment object contains information about a comment on the pull request.</p>"
        }
      },
      "documentation":"<p>Returns information about comments on a pull request.</p>"
    },
    "CommentsForPullRequestData":{
      "type":"list",
      "member":{"shape":"CommentsForPullRequest"}
    },
    "Commit":{
      "type":"structure",
      "members":{
        "commitId":{
          "shape":"ObjectId",
          "documentation":"<p>The full SHA of the specified commit. </p>"
        },
        "treeId":{
          "shape":"ObjectId",
          "documentation":"<p>Tree information for the specified commit.</p>"
        },
        "parents":{
          "shape":"ParentList",
          "documentation":"<p>A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.</p>"
        },
        "message":{
          "shape":"Message",
          "documentation":"<p>The commit message associated with the specified commit.</p>"
        },
        "author":{
          "shape":"UserInfo",
          "documentation":"<p>Information about the author of the specified commit. Information includes the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured in Git.</p>"
        },
        "committer":{
          "shape":"UserInfo",
          "documentation":"<p>Information about the person who committed the specified commit, also known as the committer. Information includes the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured in Git.</p> <p>For more information about the difference between an author and a committer in Git, see <a href=\"http://git-scm.com/book/ch2-3.html\">Viewing the Commit History</a> in Pro Git by Scott Chacon and Ben Straub.</p>"
        },
        "additionalData":{
          "shape":"AdditionalData",
          "documentation":"<p>Any additional data associated with the specified commit.</p>"
        }
      },
      "documentation":"<p>Returns information about a specific commit.</p>"
    },
    "CommitDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>",
      "exception":true
    },
    "CommitId":{"type":"string"},
    "CommitIdDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified commit ID does not exist.</p>",
      "exception":true
    },
    "CommitIdRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A commit ID was not specified.</p>",
      "exception":true
    },
    "CommitMessageLengthExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The commit message is too long. Provide a shorter string. </p>",
      "exception":true
    },
    "CommitName":{"type":"string"},
    "CommitRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A commit was not specified.</p>",
      "exception":true
    },
    "Content":{"type":"string"},
    "CreateBranchInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "branchName",
        "commitId"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository in which you want to create the new branch.</p>"
        },
        "branchName":{
          "shape":"BranchName",
          "documentation":"<p>The name of the new branch to create.</p>"
        },
        "commitId":{
          "shape":"CommitId",
          "documentation":"<p>The ID of the commit to point the new branch to.</p>"
        }
      },
      "documentation":"<p>Represents the input of a create branch operation.</p>"
    },
    "CreatePullRequestInput":{
      "type":"structure",
      "required":[
        "title",
        "targets"
      ],
      "members":{
        "title":{
          "shape":"Title",
          "documentation":"<p>The title of the pull request. This title will be used to identify the pull request to other users in the repository.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>A description of the pull request.</p>"
        },
        "targets":{
          "shape":"TargetList",
          "documentation":"<p>The targets for the pull request, including the source of the code to be reviewed (the source branch), and the destination where the creator of the pull request intends the code to be merged after the pull request is closed (the destination branch).</p>"
        },
        "clientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p> <note> <p>The AWS SDKs prepopulate client request tokens. If using an AWS SDK, you do not have to generate an idempotency token, as this will be done for you.</p> </note>",
          "idempotencyToken":true
        }
      }
    },
    "CreatePullRequestOutput":{
      "type":"structure",
      "required":["pullRequest"],
      "members":{
        "pullRequest":{
          "shape":"PullRequest",
          "documentation":"<p>Information about the newly created pull request.</p>"
        }
      }
    },
    "CreateRepositoryInput":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the new repository to be created.</p> <note> <p>The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For a full description of the limits on repository names, see <a href=\"http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html\">Limits</a> in the AWS CodeCommit User Guide. The suffix \".git\" is prohibited.</p> </note>"
        },
        "repositoryDescription":{
          "shape":"RepositoryDescription",
          "documentation":"<p>A comment or description about the new repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>"
        }
      },
      "documentation":"<p>Represents the input of a create repository operation.</p>"
    },
    "CreateRepositoryOutput":{
      "type":"structure",
      "members":{
        "repositoryMetadata":{
          "shape":"RepositoryMetadata",
          "documentation":"<p>Information about the newly created repository.</p>"
        }
      },
      "documentation":"<p>Represents the output of a create repository operation.</p>"
    },
    "CreationDate":{"type":"timestamp"},
    "Date":{"type":"string"},
    "DefaultBranchCannotBeDeletedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>",
      "exception":true
    },
    "DeleteBranchInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "branchName"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the branch to be deleted.</p>"
        },
        "branchName":{
          "shape":"BranchName",
          "documentation":"<p>The name of the branch to delete.</p>"
        }
      },
      "documentation":"<p>Represents the input of a delete branch operation.</p>"
    },
    "DeleteBranchOutput":{
      "type":"structure",
      "members":{
        "deletedBranch":{
          "shape":"BranchInfo",
          "documentation":"<p>Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.</p>"
        }
      },
      "documentation":"<p>Represents the output of a delete branch operation.</p>"
    },
    "DeleteCommentContentInput":{
      "type":"structure",
      "required":["commentId"],
      "members":{
        "commentId":{
          "shape":"CommentId",
          "documentation":"<p>The unique, system-generated ID of the comment. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.</p>"
        }
      }
    },
    "DeleteCommentContentOutput":{
      "type":"structure",
      "members":{
        "comment":{
          "shape":"Comment",
          "documentation":"<p>Information about the comment you just deleted.</p>"
        }
      }
    },
    "DeleteRepositoryInput":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to delete.</p>"
        }
      },
      "documentation":"<p>Represents the input of a delete repository operation.</p>"
    },
    "DeleteRepositoryOutput":{
      "type":"structure",
      "members":{
        "repositoryId":{
          "shape":"RepositoryId",
          "documentation":"<p>The ID of the repository that was deleted.</p>"
        }
      },
      "documentation":"<p>Represents the output of a delete repository operation.</p>"
    },
    "DescribePullRequestEventsInput":{
      "type":"structure",
      "required":["pullRequestId"],
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>"
        },
        "pullRequestEventType":{
          "shape":"PullRequestEventType",
          "documentation":"<p>Optional. The pull request event type about which you want to return information.</p>"
        },
        "actorArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with additional commits or changing the status of a pull request.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that when provided in a request, returns the next batch of the results.</p>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>A non-negative integer used to limit the number of returned results. The default is 100 events, which is also the maximum number of events that can be returned in a result.</p>"
        }
      }
    },
    "DescribePullRequestEventsOutput":{
      "type":"structure",
      "required":["pullRequestEvents"],
      "members":{
        "pullRequestEvents":{
          "shape":"PullRequestEventList",
          "documentation":"<p>Information about the pull request events.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that can be used in a request to return the next batch of the results.</p>"
        }
      }
    },
    "Description":{
      "type":"string",
      "max":10240
    },
    "Difference":{
      "type":"structure",
      "members":{
        "beforeBlob":{
          "shape":"BlobMetadata",
          "documentation":"<p>Information about a <code>beforeBlob</code> data type object, including the ID, the file mode permission code, and the path.</p>"
        },
        "afterBlob":{
          "shape":"BlobMetadata",
          "documentation":"<p>Information about an <code>afterBlob</code> data type object, including the ID, the file mode permission code, and the path.</p>"
        },
        "changeType":{
          "shape":"ChangeTypeEnum",
          "documentation":"<p>Whether the change type of the difference is an addition (A), deletion (D), or modification (M).</p>"
        }
      },
      "documentation":"<p>Returns information about a set of differences for a commit specifier.</p>"
    },
    "DifferenceList":{
      "type":"list",
      "member":{"shape":"Difference"}
    },
    "DirectoryNameConflictsWithFileNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository. Either provide a different name for the file, or specify a different path for the file.</p>",
      "exception":true
    },
    "Email":{"type":"string"},
    "EncryptionIntegrityChecksFailedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An encryption integrity check failed.</p>",
      "exception":true,
      "fault":true
    },
    "EncryptionKeyAccessDeniedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An encryption key could not be accessed.</p>",
      "exception":true
    },
    "EncryptionKeyDisabledException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The encryption key is disabled.</p>",
      "exception":true
    },
    "EncryptionKeyNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>No encryption key was found.</p>",
      "exception":true
    },
    "EncryptionKeyUnavailableException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The encryption key is not available.</p>",
      "exception":true
    },
    "EventDate":{"type":"timestamp"},
    "FileContent":{
      "type":"blob",
      "max":6291456
    },
    "FileContentRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>",
      "exception":true
    },
    "FileContentSizeLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The file cannot be added because it is too large. The maximum file size that can be added using PutFile is 6 MB. For files larger than 6 MB but smaller than 2 GB, add them using a Git client.</p>",
      "exception":true
    },
    "FileModeTypeEnum":{
      "type":"string",
      "enum":[
        "EXECUTABLE",
        "NORMAL",
        "SYMLINK"
      ]
    },
    "FileNameConflictsWithDirectoryNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide another name for the file, or add the file in a directory that does not match the file name.</p>",
      "exception":true
    },
    "FileTooLargeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see <a href=\"http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html\">AWS CodeCommit User Guide</a>.</p>",
      "exception":true
    },
    "GetBlobInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "blobId"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the blob.</p>"
        },
        "blobId":{
          "shape":"ObjectId",
          "documentation":"<p>The ID of the blob, which is its SHA-1 pointer.</p>"
        }
      },
      "documentation":"<p>Represents the input of a get blob operation.</p>"
    },
    "GetBlobOutput":{
      "type":"structure",
      "required":["content"],
      "members":{
        "content":{
          "shape":"blob",
          "documentation":"<p>The content of the blob, usually a file.</p>"
        }
      },
      "documentation":"<p>Represents the output of a get blob operation.</p>"
    },
    "GetBranchInput":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the branch for which you want to retrieve information.</p>"
        },
        "branchName":{
          "shape":"BranchName",
          "documentation":"<p>The name of the branch for which you want to retrieve information.</p>"
        }
      },
      "documentation":"<p>Represents the input of a get branch operation.</p>"
    },
    "GetBranchOutput":{
      "type":"structure",
      "members":{
        "branch":{
          "shape":"BranchInfo",
          "documentation":"<p>The name of the branch.</p>"
        }
      },
      "documentation":"<p>Represents the output of a get branch operation.</p>"
    },
    "GetCommentInput":{
      "type":"structure",
      "required":["commentId"],
      "members":{
        "commentId":{
          "shape":"CommentId",
          "documentation":"<p>The unique, system-generated ID of the comment. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.</p>"
        }
      }
    },
    "GetCommentOutput":{
      "type":"structure",
      "members":{
        "comment":{
          "shape":"Comment",
          "documentation":"<p>The contents of the comment.</p>"
        }
      }
    },
    "GetCommentsForComparedCommitInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "afterCommitId"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where you want to compare commits.</p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>To establish the directionality of the comparison, the full commit ID of the 'before' commit.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>To establish the directionality of the comparison, the full commit ID of the 'after' commit.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that when provided in a request, returns the next batch of the results. </p>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>A non-negative integer used to limit the number of returned results. The default is 100 comments, and is configurable up to 500.</p>"
        }
      }
    },
    "GetCommentsForComparedCommitOutput":{
      "type":"structure",
      "members":{
        "commentsForComparedCommitData":{
          "shape":"CommentsForComparedCommitData",
          "documentation":"<p>A list of comment objects on the compared commit.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that can be used in a request to return the next batch of the results.</p>"
        }
      }
    },
    "GetCommentsForPullRequestInput":{
      "type":"structure",
      "required":["pullRequestId"],
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the pull request.</p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that when provided in a request, returns the next batch of the results.</p>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>A non-negative integer used to limit the number of returned results. The default is 100 comments. You can return up to 500 comments with a single request.</p>"
        }
      }
    },
    "GetCommentsForPullRequestOutput":{
      "type":"structure",
      "members":{
        "commentsForPullRequestData":{
          "shape":"CommentsForPullRequestData",
          "documentation":"<p>An array of comment objects on the pull request.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that can be used in a request to return the next batch of the results.</p>"
        }
      }
    },
    "GetCommitInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "commitId"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to which the commit was made.</p>"
        },
        "commitId":{
          "shape":"ObjectId",
          "documentation":"<p>The commit ID. Commit IDs are the full SHA of the commit.</p>"
        }
      },
      "documentation":"<p>Represents the input of a get commit operation.</p>"
    },
    "GetCommitOutput":{
      "type":"structure",
      "required":["commit"],
      "members":{
        "commit":{
          "shape":"Commit",
          "documentation":"<p>A commit data type object that contains information about the specified commit.</p>"
        }
      },
      "documentation":"<p>Represents the output of a get commit operation.</p>"
    },
    "GetDifferencesInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "afterCommitSpecifier"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where you want to get differences.</p>"
        },
        "beforeCommitSpecifier":{
          "shape":"CommitName",
          "documentation":"<p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, the full commit ID. Optional. If not specified, all changes prior to the <code>afterCommitSpecifier</code> value will be shown. If you do not use <code>beforeCommitSpecifier</code> in your request, consider limiting the results with <code>maxResults</code>.</p>"
        },
        "afterCommitSpecifier":{
          "shape":"CommitName",
          "documentation":"<p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit.</p>"
        },
        "beforePath":{
          "shape":"Path",
          "documentation":"<p>The file path in which to check for differences. Limits the results to this path. Can also be used to specify the previous name of a directory or folder. If <code>beforePath</code> and <code>afterPath</code> are not specified, differences will be shown for all paths.</p>"
        },
        "afterPath":{
          "shape":"Path",
          "documentation":"<p>The file path in which to check differences. Limits the results to this path. Can also be used to specify the changed name of a directory or folder, if it has changed. If not specified, differences will be shown for all paths.</p>"
        },
        "MaxResults":{
          "shape":"Limit",
          "documentation":"<p>A non-negative integer used to limit the number of returned results.</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that when provided in a request, returns the next batch of the results.</p>"
        }
      }
    },
    "GetDifferencesOutput":{
      "type":"structure",
      "members":{
        "differences":{
          "shape":"DifferenceList",
          "documentation":"<p>A differences data type object that contains information about the differences, including whether the difference is added, modified, or deleted (A, D, M).</p>"
        },
        "NextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that can be used in a request to return the next batch of the results.</p>"
        }
      }
    },
    "GetMergeConflictsInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "destinationCommitSpecifier",
        "sourceCommitSpecifier",
        "mergeOption"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where the pull request was created.</p>"
        },
        "destinationCommitSpecifier":{
          "shape":"CommitName",
          "documentation":"<p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>"
        },
        "sourceCommitSpecifier":{
          "shape":"CommitName",
          "documentation":"<p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>"
        },
        "mergeOption":{
          "shape":"MergeOptionTypeEnum",
          "documentation":"<p>The merge option or strategy you want to use to merge the code. The only valid value is FAST_FORWARD_MERGE.</p>"
        }
      }
    },
    "GetMergeConflictsOutput":{
      "type":"structure",
      "required":[
        "mergeable",
        "destinationCommitId",
        "sourceCommitId"
      ],
      "members":{
        "mergeable":{
          "shape":"IsMergeable",
          "documentation":"<p>A Boolean value that indicates whether the code is mergable by the specified merge option.</p>"
        },
        "destinationCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>"
        },
        "sourceCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>"
        }
      }
    },
    "GetPullRequestInput":{
      "type":"structure",
      "required":["pullRequestId"],
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>"
        }
      }
    },
    "GetPullRequestOutput":{
      "type":"structure",
      "required":["pullRequest"],
      "members":{
        "pullRequest":{
          "shape":"PullRequest",
          "documentation":"<p>Information about the specified pull request.</p>"
        }
      }
    },
    "GetRepositoryInput":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to get information about.</p>"
        }
      },
      "documentation":"<p>Represents the input of a get repository operation.</p>"
    },
    "GetRepositoryOutput":{
      "type":"structure",
      "members":{
        "repositoryMetadata":{
          "shape":"RepositoryMetadata",
          "documentation":"<p>Information about the repository.</p>"
        }
      },
      "documentation":"<p>Represents the output of a get repository operation.</p>"
    },
    "GetRepositoryTriggersInput":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository for which the trigger is configured.</p>"
        }
      },
      "documentation":"<p>Represents the input of a get repository triggers operation.</p>"
    },
    "GetRepositoryTriggersOutput":{
      "type":"structure",
      "members":{
        "configurationId":{
          "shape":"RepositoryTriggersConfigurationId",
          "documentation":"<p>The system-generated unique ID for the trigger.</p>"
        },
        "triggers":{
          "shape":"RepositoryTriggersList",
          "documentation":"<p>The JSON block of configuration information for each trigger.</p>"
        }
      },
      "documentation":"<p>Represents the output of a get repository triggers operation.</p>"
    },
    "IdempotencyParameterMismatchException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be re-used.</p>",
      "exception":true
    },
    "InvalidActorArnException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request, and then try again.</p>",
      "exception":true
    },
    "InvalidAuthorArnException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>",
      "exception":true
    },
    "InvalidBlobIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified blob is not valid.</p>",
      "exception":true
    },
    "InvalidBranchNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified reference name is not valid.</p>",
      "exception":true
    },
    "InvalidClientRequestTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The client request token is not valid.</p>",
      "exception":true
    },
    "InvalidCommentIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>",
      "exception":true
    },
    "InvalidCommitException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified commit is not valid.</p>",
      "exception":true
    },
    "InvalidCommitIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified commit ID is not valid.</p>",
      "exception":true
    },
    "InvalidContinuationTokenException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified continuation token is not valid.</p>",
      "exception":true
    },
    "InvalidDescriptionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pull request description is not valid. Descriptions are limited to 1,000 characters in length.</p>",
      "exception":true
    },
    "InvalidDestinationCommitSpecifierException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>",
      "exception":true
    },
    "InvalidEmailException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>",
      "exception":true
    },
    "InvalidFileLocationException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The location of the file is not valid. Make sure that you include the extension of the file as well as the file name.</p>",
      "exception":true
    },
    "InvalidFileModeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>",
      "exception":true
    },
    "InvalidFilePositionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>",
      "exception":true
    },
    "InvalidMaxResultsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified number of maximum results is not valid.</p>",
      "exception":true
    },
    "InvalidMergeOptionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified merge option is not valid. The only valid value is FAST_FORWARD_MERGE.</p>",
      "exception":true
    },
    "InvalidOrderException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified sort order is not valid.</p>",
      "exception":true
    },
    "InvalidParentCommitIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you want to add or update a file.</p>",
      "exception":true
    },
    "InvalidPathException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified path is not valid.</p>",
      "exception":true
    },
    "InvalidPullRequestEventTypeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pull request event type is not valid. </p>",
      "exception":true
    },
    "InvalidPullRequestIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>",
      "exception":true
    },
    "InvalidPullRequestStatusException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>",
      "exception":true
    },
    "InvalidPullRequestStatusUpdateException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>",
      "exception":true
    },
    "InvalidReferenceNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified reference name format is not valid. Reference names must conform to the Git references format, for example refs/heads/master. For more information, see <a href=\"https://git-scm.com/book/en/v2/Git-Internals-Git-References\">Git Internals - Git References</a> or consult your Git documentation.</p>",
      "exception":true
    },
    "InvalidRelativeFileVersionEnumException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.</p>",
      "exception":true
    },
    "InvalidRepositoryDescriptionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified repository description is not valid.</p>",
      "exception":true
    },
    "InvalidRepositoryNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>",
      "exception":true
    },
    "InvalidRepositoryTriggerBranchNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>One or more branch names specified for the trigger is not valid.</p>",
      "exception":true
    },
    "InvalidRepositoryTriggerCustomDataException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The custom data provided for the trigger is not valid.</p>",
      "exception":true
    },
    "InvalidRepositoryTriggerDestinationArnException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>",
      "exception":true
    },
    "InvalidRepositoryTriggerEventsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>",
      "exception":true
    },
    "InvalidRepositoryTriggerNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The name of the trigger is not valid.</p>",
      "exception":true
    },
    "InvalidRepositoryTriggerRegionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The region for the trigger target does not match the region for the repository. Triggers must be created in the same region as the target for the trigger.</p>",
      "exception":true
    },
    "InvalidSortByException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified sort by value is not valid.</p>",
      "exception":true
    },
    "InvalidSourceCommitSpecifierException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.</p>",
      "exception":true
    },
    "InvalidTargetException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>",
      "exception":true
    },
    "InvalidTargetsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for the repository name, source branch, and destination branch for a pull request.</p>",
      "exception":true
    },
    "InvalidTitleException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>",
      "exception":true
    },
    "IsCommentDeleted":{"type":"boolean"},
    "IsMergeable":{"type":"boolean"},
    "IsMerged":{"type":"boolean"},
    "LastModifiedDate":{"type":"timestamp"},
    "Limit":{
      "type":"integer",
      "box":true
    },
    "ListBranchesInput":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the branches.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that allows the operation to batch the results.</p>"
        }
      },
      "documentation":"<p>Represents the input of a list branches operation.</p>"
    },
    "ListBranchesOutput":{
      "type":"structure",
      "members":{
        "branches":{
          "shape":"BranchNameList",
          "documentation":"<p>The list of branch names.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that returns the batch of the results.</p>"
        }
      },
      "documentation":"<p>Represents the output of a list branches operation.</p>"
    },
    "ListPullRequestsInput":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository for which you want to list pull requests.</p>"
        },
        "authorArn":{
          "shape":"Arn",
          "documentation":"<p>Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results to pull requests created by that user.</p>"
        },
        "pullRequestStatus":{
          "shape":"PullRequestStatusEnum",
          "documentation":"<p>Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that when provided in a request, returns the next batch of the results.</p>"
        },
        "maxResults":{
          "shape":"MaxResults",
          "documentation":"<p>A non-negative integer used to limit the number of returned results.</p>"
        }
      }
    },
    "ListPullRequestsOutput":{
      "type":"structure",
      "required":["pullRequestIds"],
      "members":{
        "pullRequestIds":{
          "shape":"PullRequestIdList",
          "documentation":"<p>The system-generated IDs of the pull requests.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that when provided in a request, returns the next batch of the results.</p>"
        }
      }
    },
    "ListRepositoriesInput":{
      "type":"structure",
      "members":{
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit, another page of 1,000 records is retrieved.</p>"
        },
        "sortBy":{
          "shape":"SortByEnum",
          "documentation":"<p>The criteria used to sort the results of a list repositories operation.</p>"
        },
        "order":{
          "shape":"OrderEnum",
          "documentation":"<p>The order in which to sort the results of a list repositories operation.</p>"
        }
      },
      "documentation":"<p>Represents the input of a list repositories operation.</p>"
    },
    "ListRepositoriesOutput":{
      "type":"structure",
      "members":{
        "repositories":{
          "shape":"RepositoryNameIdPairList",
          "documentation":"<p>Lists the repositories called by the list repositories operation.</p>"
        },
        "nextToken":{
          "shape":"NextToken",
          "documentation":"<p>An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit, another page of 1,000 records is retrieved.</p>"
        }
      },
      "documentation":"<p>Represents the output of a list repositories operation.</p>"
    },
    "Location":{
      "type":"structure",
      "members":{
        "filePath":{
          "shape":"Path",
          "documentation":"<p>The name of the file being compared, including its extension and subdirectory, if any.</p>"
        },
        "filePosition":{
          "shape":"Position",
          "documentation":"<p>The position of a change within a compared file, in line number format.</p>"
        },
        "relativeFileVersion":{
          "shape":"RelativeFileVersionEnum",
          "documentation":"<p>In a comparison of commits or a pull request, whether the change is in the 'before' or 'after' of that comparison.</p>"
        }
      },
      "documentation":"<p>Returns information about the location of a change or comment in the comparison between two commits or a pull request.</p>"
    },
    "ManualMergeRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>",
      "exception":true
    },
    "MaxResults":{"type":"integer"},
    "MaximumBranchesExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The number of branches for the trigger was exceeded.</p>",
      "exception":true
    },
    "MaximumOpenPullRequestsExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You cannot create the pull request because the repository has too many open pull requests. The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.</p>",
      "exception":true
    },
    "MaximumRepositoryNamesExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The maximum number of allowed repository names was exceeded. Currently, this number is 25.</p>",
      "exception":true
    },
    "MaximumRepositoryTriggersExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The number of triggers allowed for the repository was exceeded.</p>",
      "exception":true
    },
    "MergeMetadata":{
      "type":"structure",
      "members":{
        "isMerged":{
          "shape":"IsMerged",
          "documentation":"<p>A Boolean value indicating whether the merge has been made.</p>"
        },
        "mergedBy":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the user who merged the branches.</p>"
        }
      },
      "documentation":"<p>Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.</p>"
    },
    "MergeOptionRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A merge option or stategy is required, and none was provided.</p>",
      "exception":true
    },
    "MergeOptionTypeEnum":{
      "type":"string",
      "enum":["FAST_FORWARD_MERGE"]
    },
    "MergePullRequestByFastForwardInput":{
      "type":"structure",
      "required":[
        "pullRequestId",
        "repositoryName"
      ],
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where the pull request was created.</p>"
        },
        "sourceCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>"
        }
      }
    },
    "MergePullRequestByFastForwardOutput":{
      "type":"structure",
      "members":{
        "pullRequest":{
          "shape":"PullRequest",
          "documentation":"<p>Information about the specified pull request, including information about the merge.</p>"
        }
      }
    },
    "Message":{"type":"string"},
    "Mode":{"type":"string"},
    "MultipleRepositoriesInPullRequestException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.</p>",
      "exception":true
    },
    "Name":{"type":"string"},
    "NameLengthExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The file name is not valid because it has exceeded the character limit for file names. File names, including the path to the file, cannot exceed the character limit. </p>",
      "exception":true
    },
    "NextToken":{"type":"string"},
    "ObjectId":{"type":"string"},
    "OrderEnum":{
      "type":"string",
      "enum":[
        "ascending",
        "descending"
      ]
    },
    "ParentCommitDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The parent commit ID is not valid. The specified parent commit ID does not exist in the specified branch of the repository.</p>",
      "exception":true
    },
    "ParentCommitIdOutdatedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head of the branch, use <a>GetBranch</a>.</p>",
      "exception":true
    },
    "ParentCommitIdRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command (for example, git pull or git log).</p>",
      "exception":true
    },
    "ParentList":{
      "type":"list",
      "member":{"shape":"ObjectId"}
    },
    "Path":{"type":"string"},
    "PathDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified path does not exist.</p>",
      "exception":true
    },
    "PathRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The filePath for a location cannot be empty or null.</p>",
      "exception":true
    },
    "Position":{"type":"long"},
    "PostCommentForComparedCommitInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "afterCommitId",
        "content"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where you want to post a comment on the comparison between commits.</p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>To establish the directionality of the comparison, the full commit ID of the 'before' commit.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>To establish the directionality of the comparison, the full commit ID of the 'after' commit.</p>"
        },
        "location":{
          "shape":"Location",
          "documentation":"<p>The location of the comparison where you want to comment.</p>"
        },
        "content":{
          "shape":"Content",
          "documentation":"<p>The content of the comment you want to make.</p>"
        },
        "clientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>",
          "idempotencyToken":true
        }
      }
    },
    "PostCommentForComparedCommitOutput":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where you posted a comment on the comparison between commits.</p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>In the directionality you established, the full commit ID of the 'before' commit.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>In the directionality you established, the full commit ID of the 'after' commit.</p>"
        },
        "beforeBlobId":{
          "shape":"ObjectId",
          "documentation":"<p>In the directionality you established, the blob ID of the 'before' blob.</p>"
        },
        "afterBlobId":{
          "shape":"ObjectId",
          "documentation":"<p>In the directionality you established, the blob ID of the 'after' blob.</p>"
        },
        "location":{
          "shape":"Location",
          "documentation":"<p>The location of the comment in the comparison between the two commits.</p>"
        },
        "comment":{
          "shape":"Comment",
          "documentation":"<p>The content of the comment you posted.</p>"
        }
      }
    },
    "PostCommentForPullRequestInput":{
      "type":"structure",
      "required":[
        "pullRequestId",
        "repositoryName",
        "beforeCommitId",
        "afterCommitId",
        "content"
      ],
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where you want to post a comment on a pull request.</p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.</p>"
        },
        "location":{
          "shape":"Location",
          "documentation":"<p>The location of the change where you want to post your comment. If no location is provided, the comment will be posted as a general comment on the pull request difference between the before commit ID and the after commit ID.</p>"
        },
        "content":{
          "shape":"Content",
          "documentation":"<p>The content of your comment on the change.</p>"
        },
        "clientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>",
          "idempotencyToken":true
        }
      }
    },
    "PostCommentForPullRequestOutput":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where you posted a comment on a pull request.</p>"
        },
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. </p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit in the source branch used to create the pull request, or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit in the destination branch where the pull request will be merged.</p>"
        },
        "beforeBlobId":{
          "shape":"ObjectId",
          "documentation":"<p>In the directionality of the pull request, the blob ID of the 'before' blob.</p>"
        },
        "afterBlobId":{
          "shape":"ObjectId",
          "documentation":"<p>In the directionality of the pull request, the blob ID of the 'after' blob.</p>"
        },
        "location":{
          "shape":"Location",
          "documentation":"<p>The location of the change where you posted your comment.</p>"
        },
        "comment":{
          "shape":"Comment",
          "documentation":"<p>The content of the comment you posted.</p>"
        }
      }
    },
    "PostCommentReplyInput":{
      "type":"structure",
      "required":[
        "inReplyTo",
        "content"
      ],
      "members":{
        "inReplyTo":{
          "shape":"CommentId",
          "documentation":"<p>The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.</p>"
        },
        "clientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>",
          "idempotencyToken":true
        },
        "content":{
          "shape":"Content",
          "documentation":"<p>The contents of your reply to a comment.</p>"
        }
      }
    },
    "PostCommentReplyOutput":{
      "type":"structure",
      "members":{
        "comment":{
          "shape":"Comment",
          "documentation":"<p>Information about the reply to a comment.</p>"
        }
      }
    },
    "PullRequest":{
      "type":"structure",
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. </p>"
        },
        "title":{
          "shape":"Title",
          "documentation":"<p>The user-defined title of the pull request. This title is displayed in the list of pull requests to other users of the repository.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.</p>"
        },
        "lastActivityDate":{
          "shape":"LastModifiedDate",
          "documentation":"<p>The day and time of the last user or system activity on the pull request, in timestamp format.</p>"
        },
        "creationDate":{
          "shape":"CreationDate",
          "documentation":"<p>The date and time the pull request was originally created, in timestamp format.</p>"
        },
        "pullRequestStatus":{
          "shape":"PullRequestStatusEnum",
          "documentation":"<p>The status of the pull request. Pull request status can only change from <code>OPEN</code> to <code>CLOSED</code>.</p>"
        },
        "authorArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the user who created the pull request.</p>"
        },
        "pullRequestTargets":{
          "shape":"PullRequestTargetList",
          "documentation":"<p>The targets of the pull request, including the source branch and destination branch for the pull request.</p>"
        },
        "clientRequestToken":{
          "shape":"ClientRequestToken",
          "documentation":"<p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>"
        }
      },
      "documentation":"<p>Returns information about a pull request.</p>"
    },
    "PullRequestAlreadyClosedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pull request status cannot be updated because it is already closed.</p>",
      "exception":true
    },
    "PullRequestCreatedEventMetadata":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where the pull request was created.</p>"
        },
        "sourceCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The commit ID on the source branch used when the pull request was created.</p>"
        },
        "destinationCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The commit ID of the tip of the branch specified as the destination branch when the pull request was created.</p>"
        },
        "mergeBase":{
          "shape":"CommitId",
          "documentation":"<p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>"
        }
      },
      "documentation":"<p>Metadata about the pull request that is used when comparing the pull request source with its destination.</p>"
    },
    "PullRequestDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>",
      "exception":true
    },
    "PullRequestEvent":{
      "type":"structure",
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request.</p>"
        },
        "eventDate":{
          "shape":"EventDate",
          "documentation":"<p>The day and time of the pull request event, in timestamp format.</p>"
        },
        "pullRequestEventType":{
          "shape":"PullRequestEventType",
          "documentation":"<p>The type of the pull request event, for example a status change event (PULL_REQUEST_STATUS_CHANGED) or update event (PULL_REQUEST_SOURCE_REFERENCE_UPDATED).</p>"
        },
        "actorArn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with additional commits or changing the status of a pull request.</p>"
        },
        "pullRequestCreatedEventMetadata":{
          "shape":"PullRequestCreatedEventMetadata",
          "documentation":"<p>Information about the source and destination branches for the pull request.</p>"
        },
        "pullRequestStatusChangedEventMetadata":{
          "shape":"PullRequestStatusChangedEventMetadata",
          "documentation":"<p>Information about the change in status for the pull request event.</p>"
        },
        "pullRequestSourceReferenceUpdatedEventMetadata":{
          "shape":"PullRequestSourceReferenceUpdatedEventMetadata",
          "documentation":"<p>Information about the updated source branch for the pull request event. </p>"
        },
        "pullRequestMergedStateChangedEventMetadata":{
          "shape":"PullRequestMergedStateChangedEventMetadata",
          "documentation":"<p>Information about the change in mergability state for the pull request event.</p>"
        }
      },
      "documentation":"<p>Returns information about a pull request event.</p>"
    },
    "PullRequestEventList":{
      "type":"list",
      "member":{"shape":"PullRequestEvent"}
    },
    "PullRequestEventType":{
      "type":"string",
      "enum":[
        "PULL_REQUEST_CREATED",
        "PULL_REQUEST_STATUS_CHANGED",
        "PULL_REQUEST_SOURCE_REFERENCE_UPDATED",
        "PULL_REQUEST_MERGE_STATE_CHANGED"
      ]
    },
    "PullRequestId":{"type":"string"},
    "PullRequestIdList":{
      "type":"list",
      "member":{"shape":"PullRequestId"}
    },
    "PullRequestIdRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A pull request ID is required, but none was provided.</p>",
      "exception":true
    },
    "PullRequestMergedStateChangedEventMetadata":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where the pull request was created.</p>"
        },
        "destinationReference":{
          "shape":"ReferenceName",
          "documentation":"<p>The name of the branch that the pull request will be merged into.</p>"
        },
        "mergeMetadata":{
          "shape":"MergeMetadata",
          "documentation":"<p>Information about the merge state change event.</p>"
        }
      },
      "documentation":"<p>Returns information about the change in the merge state for a pull request event. </p>"
    },
    "PullRequestSourceReferenceUpdatedEventMetadata":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where the pull request was updated.</p>"
        },
        "beforeCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.</p>"
        },
        "afterCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.</p>"
        },
        "mergeBase":{
          "shape":"CommitId",
          "documentation":"<p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>"
        }
      },
      "documentation":"<p>Information about an update to the source branch of a pull request.</p>"
    },
    "PullRequestStatusChangedEventMetadata":{
      "type":"structure",
      "members":{
        "pullRequestStatus":{
          "shape":"PullRequestStatusEnum",
          "documentation":"<p>The changed status of the pull request.</p>"
        }
      },
      "documentation":"<p>Information about a change to the status of a pull request.</p>"
    },
    "PullRequestStatusEnum":{
      "type":"string",
      "enum":[
        "OPEN",
        "CLOSED"
      ]
    },
    "PullRequestStatusRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A pull request status is required, but none was provided.</p>",
      "exception":true
    },
    "PullRequestTarget":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the pull request source and destination branches.</p>"
        },
        "sourceReference":{
          "shape":"ReferenceName",
          "documentation":"<p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>"
        },
        "destinationReference":{
          "shape":"ReferenceName",
          "documentation":"<p>The branch of the repository where the pull request changes will be merged into. Also known as the destination branch. </p>"
        },
        "destinationCommit":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.</p>"
        },
        "mergeBase":{
          "shape":"CommitId",
          "documentation":"<p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>"
        },
        "sourceCommit":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the tip of the source branch used to create the pull request. If the pull request branch is updated by a push while the pull request is open, the commit ID will change to reflect the new tip of the branch.</p>"
        },
        "mergeMetadata":{
          "shape":"MergeMetadata",
          "documentation":"<p>Returns metadata about the state of the merge, including whether the merge has been made.</p>"
        }
      },
      "documentation":"<p>Returns information about a pull request target.</p>"
    },
    "PullRequestTargetList":{
      "type":"list",
      "member":{"shape":"PullRequestTarget"}
    },
    "PutFileInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "branchName",
        "fileContent",
        "filePath"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where you want to add or update the file.</p>"
        },
        "branchName":{
          "shape":"BranchName",
          "documentation":"<p>The name of the branch where you want to add or update the file. If this is an empty repository, this branch will be created.</p>"
        },
        "fileContent":{
          "shape":"FileContent",
          "documentation":"<p>The content of the file, in binary object format. </p>"
        },
        "filePath":{
          "shape":"Path",
          "documentation":"<p>The name of the file you want to add or update, including the relative path to the file in the repository.</p> <note> <p>If the path does not currently exist in the repository, the path will be created as part of adding the file.</p> </note>"
        },
        "fileMode":{
          "shape":"FileModeTypeEnum",
          "documentation":"<p>The file mode permissions of the blob. Valid file mode permissions are listed below.</p>"
        },
        "parentCommitId":{
          "shape":"CommitId",
          "documentation":"<p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository, no commit ID is required. If this is not an empty repository, a commit ID is required. </p> <p>The commit ID must match the ID of the head commit at the time of the operation, or an error will occur, and the file will not be added or updated.</p>"
        },
        "commitMessage":{
          "shape":"Message",
          "documentation":"<p>A message about why this file was added or updated. While optional, adding a message is strongly encouraged in order to provide a more useful commit history for your repository.</p>"
        },
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the person adding or updating the file. While optional, adding a name is strongly encouraged in order to provide a more useful commit history for your repository.</p>"
        },
        "email":{
          "shape":"Email",
          "documentation":"<p>An email address for the person adding or updating the file.</p>"
        }
      }
    },
    "PutFileOutput":{
      "type":"structure",
      "required":[
        "commitId",
        "blobId",
        "treeId"
      ],
      "members":{
        "commitId":{
          "shape":"ObjectId",
          "documentation":"<p>The full SHA of the commit that contains this file change.</p>"
        },
        "blobId":{
          "shape":"ObjectId",
          "documentation":"<p>The ID of the blob, which is its SHA-1 pointer.</p>"
        },
        "treeId":{
          "shape":"ObjectId",
          "documentation":"<p>The full SHA-1 pointer of the tree information for the commit that contains this file change.</p>"
        }
      }
    },
    "PutRepositoryTriggersInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "triggers"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository where you want to create or update the trigger.</p>"
        },
        "triggers":{
          "shape":"RepositoryTriggersList",
          "documentation":"<p>The JSON block of configuration information for each trigger.</p>"
        }
      },
      "documentation":"<p>Represents the input ofa put repository triggers operation.</p>"
    },
    "PutRepositoryTriggersOutput":{
      "type":"structure",
      "members":{
        "configurationId":{
          "shape":"RepositoryTriggersConfigurationId",
          "documentation":"<p>The system-generated unique ID for the create or update operation.</p>"
        }
      },
      "documentation":"<p>Represents the output of a put repository triggers operation.</p>"
    },
    "ReferenceDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified reference does not exist. You must provide a full commit ID.</p>",
      "exception":true
    },
    "ReferenceName":{"type":"string"},
    "ReferenceNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A reference name is required, but none was provided.</p>",
      "exception":true
    },
    "ReferenceTypeNotSupportedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified reference is not a supported type. </p>",
      "exception":true
    },
    "RelativeFileVersionEnum":{
      "type":"string",
      "enum":[
        "BEFORE",
        "AFTER"
      ]
    },
    "RepositoryDescription":{
      "type":"string",
      "max":1000
    },
    "RepositoryDoesNotExistException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified repository does not exist.</p>",
      "exception":true
    },
    "RepositoryId":{"type":"string"},
    "RepositoryLimitExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A repository resource limit was exceeded.</p>",
      "exception":true
    },
    "RepositoryMetadata":{
      "type":"structure",
      "members":{
        "accountId":{
          "shape":"AccountId",
          "documentation":"<p>The ID of the AWS account associated with the repository.</p>"
        },
        "repositoryId":{
          "shape":"RepositoryId",
          "documentation":"<p>The ID of the repository.</p>"
        },
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The repository's name.</p>"
        },
        "repositoryDescription":{
          "shape":"RepositoryDescription",
          "documentation":"<p>A comment or description about the repository.</p>"
        },
        "defaultBranch":{
          "shape":"BranchName",
          "documentation":"<p>The repository's default branch name.</p>"
        },
        "lastModifiedDate":{
          "shape":"LastModifiedDate",
          "documentation":"<p>The date and time the repository was last modified, in timestamp format.</p>"
        },
        "creationDate":{
          "shape":"CreationDate",
          "documentation":"<p>The date and time the repository was created, in timestamp format.</p>"
        },
        "cloneUrlHttp":{
          "shape":"CloneUrlHttp",
          "documentation":"<p>The URL to use for cloning the repository over HTTPS.</p>"
        },
        "cloneUrlSsh":{
          "shape":"CloneUrlSsh",
          "documentation":"<p>The URL to use for cloning the repository over SSH.</p>"
        },
        "Arn":{
          "shape":"Arn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the repository.</p>"
        }
      },
      "documentation":"<p>Information about a repository.</p>"
    },
    "RepositoryMetadataList":{
      "type":"list",
      "member":{"shape":"RepositoryMetadata"}
    },
    "RepositoryName":{
      "type":"string",
      "max":100,
      "min":1,
      "pattern":"[\\w\\.-]+"
    },
    "RepositoryNameExistsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified repository name already exists.</p>",
      "exception":true
    },
    "RepositoryNameIdPair":{
      "type":"structure",
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name associated with the repository.</p>"
        },
        "repositoryId":{
          "shape":"RepositoryId",
          "documentation":"<p>The ID associated with the repository.</p>"
        }
      },
      "documentation":"<p>Information about a repository name and ID.</p>"
    },
    "RepositoryNameIdPairList":{
      "type":"list",
      "member":{"shape":"RepositoryNameIdPair"}
    },
    "RepositoryNameList":{
      "type":"list",
      "member":{"shape":"RepositoryName"}
    },
    "RepositoryNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A repository name is required but was not specified.</p>",
      "exception":true
    },
    "RepositoryNamesRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A repository names object is required but was not specified.</p>",
      "exception":true
    },
    "RepositoryNotAssociatedWithPullRequestException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The repository does not contain any pull requests with that pull request ID. Check to make sure you have provided the correct repository name for the pull request.</p>",
      "exception":true
    },
    "RepositoryNotFoundList":{
      "type":"list",
      "member":{"shape":"RepositoryName"}
    },
    "RepositoryTrigger":{
      "type":"structure",
      "required":[
        "name",
        "destinationArn",
        "events"
      ],
      "members":{
        "name":{
          "shape":"RepositoryTriggerName",
          "documentation":"<p>The name of the trigger.</p>"
        },
        "destinationArn":{
          "shape":"Arn",
          "documentation":"<p>The ARN of the resource that is the target for a trigger. For example, the ARN of a topic in Amazon Simple Notification Service (SNS).</p>"
        },
        "customData":{
          "shape":"RepositoryTriggerCustomData",
          "documentation":"<p>Any custom data associated with the trigger that will be included in the information sent to the target of the trigger.</p>"
        },
        "branches":{
          "shape":"BranchNameList",
          "documentation":"<p>The branches that will be included in the trigger configuration. If you specify an empty array, the trigger will apply to all branches.</p> <note> <p>While no content is required in the array, you must include the array itself.</p> </note>"
        },
        "events":{
          "shape":"RepositoryTriggerEventList",
          "documentation":"<p>The repository events that will cause the trigger to run actions in another service, such as sending a notification through Amazon Simple Notification Service (SNS). </p> <note> <p>The valid value \"all\" cannot be used with any other values.</p> </note>"
        }
      },
      "documentation":"<p>Information about a trigger for a repository.</p>"
    },
    "RepositoryTriggerBranchNameListRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>At least one branch name is required but was not specified in the trigger configuration.</p>",
      "exception":true
    },
    "RepositoryTriggerCustomData":{"type":"string"},
    "RepositoryTriggerDestinationArnRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A destination ARN for the target service for the trigger is required but was not specified.</p>",
      "exception":true
    },
    "RepositoryTriggerEventEnum":{
      "type":"string",
      "enum":[
        "all",
        "updateReference",
        "createReference",
        "deleteReference"
      ]
    },
    "RepositoryTriggerEventList":{
      "type":"list",
      "member":{"shape":"RepositoryTriggerEventEnum"}
    },
    "RepositoryTriggerEventsListRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>At least one event for the trigger is required but was not specified.</p>",
      "exception":true
    },
    "RepositoryTriggerExecutionFailure":{
      "type":"structure",
      "members":{
        "trigger":{
          "shape":"RepositoryTriggerName",
          "documentation":"<p>The name of the trigger that did not run.</p>"
        },
        "failureMessage":{
          "shape":"RepositoryTriggerExecutionFailureMessage",
          "documentation":"<p>Additional message information about the trigger that did not run.</p>"
        }
      },
      "documentation":"<p>A trigger failed to run.</p>"
    },
    "RepositoryTriggerExecutionFailureList":{
      "type":"list",
      "member":{"shape":"RepositoryTriggerExecutionFailure"}
    },
    "RepositoryTriggerExecutionFailureMessage":{"type":"string"},
    "RepositoryTriggerName":{"type":"string"},
    "RepositoryTriggerNameList":{
      "type":"list",
      "member":{"shape":"RepositoryTriggerName"}
    },
    "RepositoryTriggerNameRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A name for the trigger is required but was not specified.</p>",
      "exception":true
    },
    "RepositoryTriggersConfigurationId":{"type":"string"},
    "RepositoryTriggersList":{
      "type":"list",
      "member":{"shape":"RepositoryTrigger"}
    },
    "RepositoryTriggersListRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The list of triggers for the repository is required but was not specified.</p>",
      "exception":true
    },
    "SameFileContentException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch that you specified.</p>",
      "exception":true
    },
    "SortByEnum":{
      "type":"string",
      "enum":[
        "repositoryName",
        "lastModifiedDate"
      ]
    },
    "SourceAndDestinationAreSameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The source branch and the destination branch for the pull request are the same. You must specify different branches for the source and destination.</p>",
      "exception":true
    },
    "Target":{
      "type":"structure",
      "required":[
        "repositoryName",
        "sourceReference"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository that contains the pull request.</p>"
        },
        "sourceReference":{
          "shape":"ReferenceName",
          "documentation":"<p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>"
        },
        "destinationReference":{
          "shape":"ReferenceName",
          "documentation":"<p>The branch of the repository where the pull request changes will be merged into. Also known as the destination branch.</p>"
        }
      },
      "documentation":"<p>Returns information about a target for a pull request.</p>"
    },
    "TargetList":{
      "type":"list",
      "member":{"shape":"Target"}
    },
    "TargetRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>",
      "exception":true
    },
    "TargetsRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>An array of target objects is required. It cannot be empty or null.</p>",
      "exception":true
    },
    "TestRepositoryTriggersInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "triggers"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository in which to test the triggers.</p>"
        },
        "triggers":{
          "shape":"RepositoryTriggersList",
          "documentation":"<p>The list of triggers to test.</p>"
        }
      },
      "documentation":"<p>Represents the input of a test repository triggers operation.</p>"
    },
    "TestRepositoryTriggersOutput":{
      "type":"structure",
      "members":{
        "successfulExecutions":{
          "shape":"RepositoryTriggerNameList",
          "documentation":"<p>The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.</p>"
        },
        "failedExecutions":{
          "shape":"RepositoryTriggerExecutionFailureList",
          "documentation":"<p>The list of triggers that were not able to be tested. This list provides the names of the triggers that could not be tested, separated by commas.</p>"
        }
      },
      "documentation":"<p>Represents the output of a test repository triggers operation.</p>"
    },
    "TipOfSourceReferenceIsDifferentException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request. The pull request might have been updated. Make sure that you have the latest changes.</p>",
      "exception":true
    },
    "TipsDivergenceExceededException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>",
      "exception":true
    },
    "Title":{
      "type":"string",
      "max":150
    },
    "TitleRequiredException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A pull request title is required. It cannot be empty or null.</p>",
      "exception":true
    },
    "UpdateCommentInput":{
      "type":"structure",
      "required":[
        "commentId",
        "content"
      ],
      "members":{
        "commentId":{
          "shape":"CommentId",
          "documentation":"<p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.</p>"
        },
        "content":{
          "shape":"Content",
          "documentation":"<p>The updated content with which you want to replace the existing content of the comment.</p>"
        }
      }
    },
    "UpdateCommentOutput":{
      "type":"structure",
      "members":{
        "comment":{
          "shape":"Comment",
          "documentation":"<p>Information about the updated comment.</p>"
        }
      }
    },
    "UpdateDefaultBranchInput":{
      "type":"structure",
      "required":[
        "repositoryName",
        "defaultBranchName"
      ],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to set or change the default branch for.</p>"
        },
        "defaultBranchName":{
          "shape":"BranchName",
          "documentation":"<p>The name of the branch to set as the default.</p>"
        }
      },
      "documentation":"<p>Represents the input of an update default branch operation.</p>"
    },
    "UpdatePullRequestDescriptionInput":{
      "type":"structure",
      "required":[
        "pullRequestId",
        "description"
      ],
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>"
        },
        "description":{
          "shape":"Description",
          "documentation":"<p>The updated content of the description for the pull request. This content will replace the existing description.</p>"
        }
      }
    },
    "UpdatePullRequestDescriptionOutput":{
      "type":"structure",
      "required":["pullRequest"],
      "members":{
        "pullRequest":{
          "shape":"PullRequest",
          "documentation":"<p>Information about the updated pull request.</p>"
        }
      }
    },
    "UpdatePullRequestStatusInput":{
      "type":"structure",
      "required":[
        "pullRequestId",
        "pullRequestStatus"
      ],
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>"
        },
        "pullRequestStatus":{
          "shape":"PullRequestStatusEnum",
          "documentation":"<p>The status of the pull request. The only valid operations are to update the status from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or from from <code>CLOSED</code> to <code>CLOSED</code>.</p>"
        }
      }
    },
    "UpdatePullRequestStatusOutput":{
      "type":"structure",
      "required":["pullRequest"],
      "members":{
        "pullRequest":{
          "shape":"PullRequest",
          "documentation":"<p>Information about the pull request.</p>"
        }
      }
    },
    "UpdatePullRequestTitleInput":{
      "type":"structure",
      "required":[
        "pullRequestId",
        "title"
      ],
      "members":{
        "pullRequestId":{
          "shape":"PullRequestId",
          "documentation":"<p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>"
        },
        "title":{
          "shape":"Title",
          "documentation":"<p>The updated title of the pull request. This will replace the existing title.</p>"
        }
      }
    },
    "UpdatePullRequestTitleOutput":{
      "type":"structure",
      "required":["pullRequest"],
      "members":{
        "pullRequest":{
          "shape":"PullRequest",
          "documentation":"<p>Information about the updated pull request.</p>"
        }
      }
    },
    "UpdateRepositoryDescriptionInput":{
      "type":"structure",
      "required":["repositoryName"],
      "members":{
        "repositoryName":{
          "shape":"RepositoryName",
          "documentation":"<p>The name of the repository to set or change the comment or description for.</p>"
        },
        "repositoryDescription":{
          "shape":"RepositoryDescription",
          "documentation":"<p>The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.</p>"
        }
      },
      "documentation":"<p>Represents the input of an update repository description operation.</p>"
    },
    "UpdateRepositoryNameInput":{
      "type":"structure",
      "required":[
        "oldName",
        "newName"
      ],
      "members":{
        "oldName":{
          "shape":"RepositoryName",
          "documentation":"<p>The existing name of the repository.</p>"
        },
        "newName":{
          "shape":"RepositoryName",
          "documentation":"<p>The new name for the repository.</p>"
        }
      },
      "documentation":"<p>Represents the input of an update repository description operation.</p>"
    },
    "UserInfo":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"Name",
          "documentation":"<p>The name of the user who made the specified commit.</p>"
        },
        "email":{
          "shape":"Email",
          "documentation":"<p>The email address associated with the user who made the commit, if any.</p>"
        },
        "date":{
          "shape":"Date",
          "documentation":"<p>The date when the specified commit was commited, in timestamp format with GMT offset.</p>"
        }
      },
      "documentation":"<p>Information about the user who made a specified commit.</p>"
    },
    "blob":{"type":"blob"}
  },
  "documentation":"<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository.</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository will be able to access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a new branch in a specified repository.</p> </li> <li> <p> <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch.</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository.</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p> </li> </ul> <p>Files, by calling the following:</p> <ul> <li> <p> <a>PutFile</a>, which adds or modifies a file in a specified repository and branch.</p> </li> </ul> <p>Information about committed code in a repository, by calling the following:</p> <ul> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object within a repository.</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information.</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference).</p> </li> </ul> <p>Pull requests, by calling the following:</p> <ul> <li> <p> <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p> </li> <li> <p> <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p> </li> <li> <p> <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p> </li> <li> <p> <a>GetMergeConflicts</a>, which returns information about merge conflicts between the source and destination branch in a pull request.</p> </li> <li> <p> <a>GetPullRequest</a>, which returns information about a specified pull request.</p> </li> <li> <p> <a>ListPullRequests</a>, which lists all pull requests for a repository.</p> </li> <li> <p> <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.</p> </li> <li> <p> <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p> </li> <li> <p> <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p> </li> </ul> <p>Information about comments in a repository, by calling the following:</p> <ul> <li> <p> <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p> </li> <li> <p> <a>GetComment</a>, which returns information about a comment on a commit.</p> </li> <li> <p> <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentReply</a>, which creates a reply to a comment.</p> </li> <li> <p> <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository.</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers.</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target.</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href=\"http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html\">AWS CodeCommit User Guide</a>.</p>"
}
